import Navigation from './components/Navigation';
import Hero from './components/Hero';
import WorkGallery from './components/WorkGallery';
import About from './components/About';
import Contact from './components/Contact';
import FloatingCharacters from './components/FloatingCharacters';

function App() {
  return (
    <div className="relative">
      <FloatingCharacters />
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <div id="gallery">
        <WorkGallery />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default App;
