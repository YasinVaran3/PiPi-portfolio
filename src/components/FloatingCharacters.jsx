import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const FloatingCharacters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // Generate random floating characters
    const charTypes = [
      { emoji: '✨', size: 20 },
      { emoji: '🌸', size: 30 },
      { emoji: '🦋', size: 25 },
      { emoji: '🌙', size: 35 },
      { emoji: '⭐', size: 18 },
      { emoji: '🎭', size: 40 },
      { emoji: '🎪', size: 32 },
      { emoji: '🎨', size: 28 },
      { emoji: '🌈', size: 45 },
      { emoji: '💫', size: 22 },
      { emoji: '🎠', size: 38 },
      { emoji: '🎡', size: 36 },
    ];

    const newCharacters = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      ...charTypes[Math.floor(Math.random() * charTypes.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 5 + Math.random() * 5,
      rotation: Math.random() * 360,
    }));

    setCharacters(newCharacters);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {characters.map((char) => (
        <motion.div
          key={char.id}
          className="absolute"
          style={{
            left: `${char.x}%`,
            top: `${char.y}%`,
            fontSize: `${char.size}px`,
          }}
          initial={{ 
            opacity: 0,
            rotate: char.rotation,
            scale: 0,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            y: [0, -50, 0],
            x: [0, Math.random() * 30 - 15, 0],
            rotate: [char.rotation, char.rotation + 20, char.rotation],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: char.duration,
            delay: char.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {char.emoji}
        </motion.div>
      ))}
      
      {/* Additional floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              backgroundColor: [
                'rgba(255, 182, 193, 0.6)',
                'rgba(221, 160, 221, 0.6)',
                'rgba(135, 206, 235, 0.6)',
                'rgba(255, 215, 0, 0.6)',
              ][Math.floor(Math.random() * 4)],
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              delay: Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingCharacters;
