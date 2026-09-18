import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #E6E6FA 0%, #FFB6C1 25%, #DDA0DD 50%, #87CEEB 75%, #98FB98 100%)',
      }}
    >
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(255, 182, 193, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(221, 160, 221, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 80%, rgba(135, 206, 235, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(255, 182, 193, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 text-gradient"
            style={{ fontFamily: 'Georgia, serif' }}
            animate={{
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Welcome to a Fairytale World
          </motion.h1>
        </motion.div>

        <motion.p
          className="text-2xl md:text-3xl text-purple-900 mb-8 font-light drop-shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Where 2D Animation Dreams Come Alive
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-fairy-pink to-fairy-purple text-white rounded-full text-lg font-semibold fairy-shadow hover:scale-105 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore My Work
          </motion.button>
          <motion.button
            className="px-8 py-4 bg-white/60 backdrop-blur-sm border-2 border-purple-600 text-purple-900 rounded-full text-lg font-semibold hover:bg-white/80 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            About Me
          </motion.button>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          className="absolute top-20 left-10 text-6xl"
          animate={{
            rotate: [0, 10, -10, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🎭
        </motion.div>

        <motion.div
          className="absolute bottom-20 right-10 text-6xl"
          animate={{
            rotate: [0, -15, 15, 0],
            y: [0, -25, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          🎪
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 text-4xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✨
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-purple-900 text-2xl drop-shadow-lg">↓</div>
      </motion.div>
    </section>
  );
};

export default Hero;
