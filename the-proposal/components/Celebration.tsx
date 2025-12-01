import React, { useEffect, useState } from 'react';
import { Camera } from 'lucide-react';

export const Celebration: React.FC = () => {
    const [opacity, setOpacity] = useState("opacity-0");

    useEffect(() => {
        // Fade in effect
        setTimeout(() => setOpacity("opacity-100"), 100);
    }, []);

  return (
    <div className={`fixed inset-0 z-[100] bg-black/90 flex flex-col items-center justify-center text-center transition-opacity duration-1000 ${opacity}`}>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: 'url("https://picsum.photos/id/1060/1920/1080")' }}
      ></div>
      
      <div className="relative z-10 px-6">
        <h1 className="text-6xl md:text-9xl font-serif text-white mb-6 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] animate-bounce">
          SHE SAID YES!
        </h1>
        <p className="text-2xl md:text-4xl text-rose-200 font-sans font-light tracking-widest uppercase">
          The beginning of forever
        </p>
        
        <div className="mt-12 p-4 bg-white/10 backdrop-blur-md rounded-xl inline-flex items-center gap-3 text-white border border-white/20">
          <Camera className="text-rose-300" />
          <span>Let's take a selfie to remember this moment!</span>
        </div>
      </div>
    </div>
  );
};