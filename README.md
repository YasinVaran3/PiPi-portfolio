# 2D Animator Portfolio

A stunning, fairytale-inspired portfolio website for showcasing 2D animation work. Built with React, Vite, TailwindCSS, and Framer Motion.

## Features

- **Fairytale Aesthetic**: Vibrant, colorful design with a magical atmosphere
- **Animated Background**: Floating characters, puppets, and particles creating an immersive experience
- **Original Categories**: Fresh, creative categorization system for animation work:
  - Enchanted Tales
  - Character Dance
  - Dreamscapes
  - Puppet Theater
  - Whimsical Wonders
  - Storybook Sagas
- **Smooth Animations**: Framer Motion-powered transitions and interactions
- **Responsive Design**: Beautiful on all devices
- **Color Harmony**: All sections connected through a cohesive color palette

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Intersection Observer** - Scroll-based animations

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Customization

### Adding Your Work

1. Update `src/data/categories.js` with your actual categories
2. Add your video files to the project
3. Update the `sampleWorks` array with your actual projects
4. Replace placeholder content with your information

### Color Palette

The fairytale color palette is defined in `tailwind.config.js`:
- fairy-pink, fairy-purple, fairy-blue, fairy-mint, fairy-gold
- fairy-lavender, fairy-rose, fairy-coral, fairy-teal, fairy-peach
- deep-purple, midnight-blue, starlight

### Components

- `FloatingCharacters` - Animated background with floating elements
- `Hero` - Landing section with vibrant entrance
- `WorkGallery` - Category grid and featured animations
- `About` - Artist profile and skills
- `Contact` - Contact form and social links
- `Navigation` - Smooth scrolling navigation

## Project Structure

```
portfolio-website/
├── src/
│   ├── components/
│   │   ├── FloatingCharacters.jsx
│   │   ├── Hero.jsx
│   │   ├── WorkGallery.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Navigation.jsx
│   ├── data/
│   │   └── categories.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## License

MIT
