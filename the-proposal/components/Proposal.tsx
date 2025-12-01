import React, { useState, useRef, useEffect } from 'react';
import { Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ProposalProps {
  onYes: () => void;
}

export const Proposal: React.FC<ProposalProps> = ({ onYes }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState<{ top: string; left: string; position: 'static' | 'absolute' }>({ top: 'auto', left: 'auto', position: 'static' });
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = () => setIsModalOpen(true);
  
  const moveNoButton = () => {
    if (!modalRef.current) return;
    
    // Get modal dimensions
    const modalRect = modalRef.current.getBoundingClientRect();
    const buttonWidth = 80;
    const buttonHeight = 40;
    
    // Calculate safe area within the modal
    const maxX = modalRect.width - buttonWidth - 20;
    const maxY = modalRect.height - buttonHeight - 20;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    setNoButtonPos({
      position: 'absolute',
      top: `${randomY}px`,
      left: `${randomX}px`
    });
  };

  const handleYes = () => {
    // Fire confetti immediately
    const duration = 15 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);

    onYes();
  };

  return (
    <>
      <div className="py-32 bg-rose-50 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-12">One last question...</h2>
        
        <button 
          onClick={handleOpenModal}
          className="group relative flex items-center justify-center p-4 bg-transparent transition-transform hover:scale-110 active:scale-95 outline-none"
        >
          <div className="absolute inset-0 bg-rose-400 rounded-full animate-ping opacity-20"></div>
          <Heart 
            size={120} 
            weight="fill"
            className="text-rose-500 fill-current drop-shadow-2xl filter group-hover:brightness-110 transition-all" 
          />
          <span className="absolute text-white font-bold text-xl font-sans tracking-wider pointer-events-none">
            Click Me
          </span>
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div 
            ref={modalRef}
            className="relative bg-white w-full max-w-lg rounded-2xl p-10 shadow-2xl flex flex-col items-center text-center border-4 border-rose-100 min-h-[400px] justify-center"
          >
            <h3 className="text-4xl md:text-6xl font-serif text-deep-red mb-8 leading-tight">
              Will You Marry Me?
            </h3>
            
            <div className="flex gap-6 items-center justify-center w-full relative h-24">
              <button 
                onClick={handleYes}
                className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-3 px-10 rounded-full shadow-lg transform hover:scale-105 transition-all z-10"
              >
                YES!
              </button>
              
              <button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton} // Mobile support
                style={{ 
                  position: noButtonPos.position, 
                  top: noButtonPos.top, 
                  left: noButtonPos.left 
                }}
                className="bg-gray-200 text-gray-500 text-sm py-2 px-6 rounded-full hover:bg-gray-300 transition-colors z-0"
              >
                No
              </button>
            </div>
            
            <p className="mt-8 text-rose-300 italic font-serif">
              (There's only one right answer ❤️)
            </p>
          </div>
        </div>
      )}
    </>
  );
};