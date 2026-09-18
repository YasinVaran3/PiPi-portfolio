import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { categories, sampleWorks } from '../data/categories';

const WorkGallery = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <section
      ref={ref}
      className="relative py-20 px-4"
      style={{
        background: 'linear-gradient(180deg, #E6E6FA 0%, #F0F8FF 50%, #FFB6C1 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-purple-900 mb-4 drop-shadow-lg" style={{ fontFamily: 'Georgia, serif' }}>
            My Animated Worlds
          </h2>
          <p className="text-xl text-purple-800 max-w-2xl mx-auto drop-shadow-md">
            Explore a collection of enchanting animations, each telling its own magical story
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedCategory(category.id)}
            >
              <div
                className={`relative h-64 rounded-2xl overflow-hidden fairy-shadow bg-gradient-to-br ${category.color} p-6 flex flex-col justify-between`}
              >
                <motion.div
                  className="text-6xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {category.icon}
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-md mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                    {category.name}
                  </h3>
                  <p className="text-white/95 text-sm drop-shadow-sm">{category.description}</p>
                </div>
                <motion.div
                  className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                  animate={{ opacity: selectedCategory === category.id ? 1 : 0 }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Works */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-4xl font-bold text-purple-900 mb-12 drop-shadow-lg" style={{ fontFamily: 'Georgia, serif' }}>
            Featured Animations
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleWorks.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden fairy-shadow"
              >
                <div className="relative h-48 bg-gradient-to-br from-fairy-lavender to-fairy-pink flex items-center justify-center">
                  <motion.div
                    className="text-8xl"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    🎬
                  </motion.div>
                  <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                    {work.duration}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-purple-900 mb-2 drop-shadow-sm">{work.title}</h4>
                  <p className="text-gray-700 text-sm mb-4">{work.description}</p>
                  <motion.button
                    className="w-full py-3 bg-gradient-to-r from-fairy-purple to-fairy-pink text-white rounded-xl font-semibold fairy-shadow"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Watch Animation
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkGallery;
