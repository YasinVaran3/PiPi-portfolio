import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = [
    { name: '2D Character Animation', level: 95, color: 'from-fairy-pink to-fairy-rose' },
    { name: 'Puppet Animation', level: 90, color: 'from-fairy-purple to-fairy-lavender' },
    { name: 'Storytelling', level: 92, color: 'from-fairy-blue to-fairy-teal' },
    { name: 'Visual Design', level: 88, color: 'from-fairy-mint to-fairy-peach' },
    { name: 'Motion Graphics', level: 85, color: 'from-fairy-gold to-fairy-coral' },
  ];

  return (
    <section
      ref={ref}
      className="relative py-20 px-4"
      style={{
        background: 'linear-gradient(180deg, #FFB6C1 0%, #DDA0DD 50%, #E6E6FA 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-purple-900 mb-4 drop-shadow-lg" style={{ fontFamily: 'Georgia, serif' }}>
            About the Animator
          </h2>
          <p className="text-xl text-purple-800 max-w-2xl mx-auto drop-shadow-md">
            Crafting magical moments through the art of 2D animation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 fairy-shadow"
          >
            <div className="relative mb-6">
              <motion.div
                className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-fairy-pink to-fairy-purple flex items-center justify-center"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-8xl">🎨</span>
              </motion.div>
              <motion.div
                className="absolute -top-4 -right-4 text-4xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </div>
            
            <h3 className="text-3xl font-bold text-purple-900 mb-4 text-center drop-shadow-md" style={{ fontFamily: 'Georgia, serif' }}>
              Your Name Here
            </h3>
            <p className="text-gray-700 text-center mb-6 leading-relaxed">
              A passionate 2D animator who believes in the power of storytelling through movement. 
              Every frame is a brushstroke in the canvas of imagination, bringing characters and worlds to life.
            </p>
            
            <div className="flex justify-center gap-4">
              {['🎭', '🎪', '🎨', '✨'].map((icon, index) => (
                <motion.div
                  key={index}
                  className="text-3xl"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2 + index * 0.3,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {icon}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-purple-900 mb-8 drop-shadow-md" style={{ fontFamily: 'Georgia, serif' }}>
              Magical Skills
            </h3>
            
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-purple-900">{skill.name}</span>
                  <span className="text-purple-700">{skill.level}%</span>
                </div>
                <div className="h-3 bg-white/50 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.7 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white/30 backdrop-blur-sm rounded-3xl p-8 fairy-shadow"
        >
          <h3 className="text-3xl font-bold text-purple-900 mb-6 text-center drop-shadow-md" style={{ fontFamily: 'Georgia, serif' }}>
            Animation Philosophy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '💫', title: 'Wonder', desc: 'Creating moments of awe and delight' },
              { icon: '🎭', title: 'Expression', desc: 'Bringing emotions to life through movement' },
              { icon: '🌈', title: 'Imagination', desc: 'Transforming dreams into visual stories' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <h4 className="text-xl font-bold text-purple-900 mb-2 drop-shadow-sm">{item.title}</h4>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
