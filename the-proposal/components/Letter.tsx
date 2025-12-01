import React from 'react';
import { LETTER_CONTENT, USER_PHOTO } from '../constants';
import { Feather } from 'lucide-react';

export const Letter: React.FC = () => {
  return (
    <div className="py-24 paper-texture relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl relative">
        <div className="flex justify-center mb-8">
            <Feather size={48} className="text-rose-gold opacity-80" />
        </div>
        
        <div className="relative">
            {/* The Letter Paper */}
            <div className="bg-white/90 backdrop-blur-sm p-8 md:p-16 shadow-2xl border border-stone-200 rotate-1 mx-auto max-w-3xl">
                <p className="font-typewriter text-lg md:text-xl leading-loose text-gray-800 whitespace-pre-line relative z-10">
                {LETTER_CONTENT}
                </p>
            </div>

            {/* The Polaroid Photo - Positioned to look clipped or resting on the desk */}
            <div className="md:absolute -bottom-10 -right-4 md:-right-12 rotate-[-6deg] w-64 bg-white p-3 pb-12 shadow-xl hover:scale-110 transition-transform duration-500 z-20 mx-auto mt-8 md:mt-0">
                <div className="w-full h-48 overflow-hidden bg-gray-100 border border-gray-100">
                    <img 
                        src={USER_PHOTO} 
                        alt="Yours Truly" 
                        className="w-full h-full object-cover filter sepia-[.2] contrast-110"
                    />
                </div>
                <div className="mt-4 text-center font-handwriting text-gray-600 font-serif italic text-sm">
                    Waiting for you...
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};