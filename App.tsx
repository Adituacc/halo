import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Letter } from './components/Letter';
import { Proposal } from './components/Proposal';
import { Celebration } from './components/Celebration';

const App: React.FC = () => {
  const [isEngaged, setIsEngaged] = useState(false);

  const handleYes = () => {
    setIsEngaged(true);
    // Scroll to top or handle any other logic
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-soft-cream selection:bg-rose-200 selection:text-deep-red">
      <Hero />
      <Timeline />
      <Letter />
      <Proposal onYes={handleYes} />
      
      {isEngaged && <Celebration />}
      
      <footer className="py-8 text-center text-rose-300 bg-white font-sans text-xs uppercase tracking-widest">
        Made with love, forever and always.
      </footer>
    </div>
  );
};

export default App;