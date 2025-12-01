import React from 'react';
import { PARTNER_NAME } from '../constants';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105 animate-float"
        style={{ backgroundImage: 'url("https://picsum.photos/id/225/1920/1080")' }}
      >
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-soft-cream text-xl md:text-2xl font-sans tracking-widest uppercase mb-4 animate-pulse-slow">
          A question for
        </h2>
        <h1 className="text-5xl md:text-8xl font-serif text-white mb-6 drop-shadow-lg leading-tight">
          {PARTNER_NAME}
        </h1>
        <p className="text-xl md:text-3xl text-rose-200 font-serif italic">
          The love of my life
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown size={40} />
      </div>
    </div>
  );
};