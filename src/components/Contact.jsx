import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative py-20 px-4"
      style={{
        background: 'linear-gradient(180deg, #E6E6FA 0%, #87CEEB 50%, #98FB98 100%)',
      }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-purple-900 mb-4 drop-shadow-lg" style={{ fontFamily: 'Georgia, serif' }}>
            Let's Create Magic Together
          </h2>
          <p className="text-xl text-purple-800 max-w-2xl mx-auto drop-shadow-md">
            Have a project in mind? Let's bring your animated dreams to life
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 fairy-shadow"
        >
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <label className="block text-purple-900 font-semibold mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border-2 border-purple-400 focus:border-purple-600 focus:outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label className="block text-purple-900 font-semibold mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/50 border-2 border-purple-400 focus:border-purple-600 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <label className="block text-purple-900 font-semibold mb-2">Project Type</label>
              <select className="w-full px-4 py-3 rounded-xl bg-white/50 border-2 border-purple-400 focus:border-purple-600 focus:outline-none transition-colors">
                <option value="">Select a project type</option>
                <option value="character">Character Animation</option>
                <option value="puppet">Puppet Animation</option>
                <option value="story">Animated Story</option>
                <option value="motion">Motion Graphics</option>
                <option value="other">Other</option>
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <label className="block text-purple-900 font-semibold mb-2">Your Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-3 rounded-xl bg-white/50 border-2 border-purple-400 focus:border-purple-600 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <motion.button
                type="submit"
                className="px-12 py-4 bg-gradient-to-r from-fairy-pink to-fairy-purple text-white rounded-full text-lg font-semibold fairy-shadow hover:scale-105 transition-transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message ✨
              </motion.button>
            </motion.div>
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <h3 className="text-2xl font-bold text-purple-900 mb-6 drop-shadow-md" style={{ fontFamily: 'Georgia, serif' }}>
            Connect With Me
          </h3>
          <div className="flex justify-center gap-6">
            {[
              { icon: '🎨', label: 'ArtStation' },
              { icon: '📺', label: 'YouTube' },
              { icon: '🐦', label: 'Twitter' },
              { icon: '📸', label: 'Instagram' },
            ].map((social, index) => (
              <motion.a
                key={index}
                href="#"
                className="flex flex-col items-center gap-2 group"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center text-3xl fairy-shadow group-hover:bg-white/80 transition-colors"
                  animate={{ 
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                >
                  {social.icon}
                </motion.div>
                <span className="text-purple-900 text-sm font-semibold drop-shadow-sm">{social.label}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
