/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fairytale-inspired color palette
        'fairy-pink': '#FFB6C1',
        'fairy-purple': '#DDA0DD',
        'fairy-blue': '#87CEEB',
        'fairy-mint': '#98FB98',
        'fairy-gold': '#FFD700',
        'fairy-lavender': '#E6E6FA',
        'fairy-rose': '#FFB6C1',
        'fairy-coral': '#FF7F7F',
        'fairy-teal': '#40E0D0',
        'fairy-peach': '#FFDAB9',
        'deep-purple': '#4B0082',
        'midnight-blue': '#191970',
        'starlight': '#F0F8FF',
      },
      fontFamily: {
        'fairy': ['Georgia', 'serif'],
        'whimsical': ['Brush Script MT', 'cursive'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'drift': 'drift 10s linear infinite',
        'bounce-soft': 'bounce-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(1.2)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        drift: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
