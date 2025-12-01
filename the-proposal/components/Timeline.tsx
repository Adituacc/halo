import React from 'react';
import { MEMORIES } from '../constants';
import { Heart } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <div className="py-20 bg-soft-cream">
      <div className="container mx-auto px-4 md:px-10">
        <h2 className="text-4xl md:text-5xl font-serif text-center text-deep-red mb-16">Our Story</h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-rose-gold/30 transform md:-translate-x-1/2 h-full" />

          {MEMORIES.map((memory, index) => (
            <div key={memory.id} className={`relative flex flex-col md:flex-row items-center mb-16 md:mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 md:translate-y-0 w-8 h-8 bg-rose-gold rounded-full border-4 border-white z-10 flex items-center justify-center">
                 <Heart size={12} className="text-white fill-current" />
              </div>

              {/* Content Card */}
              <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pl-12 text-left' : 'md:pr-12 md:text-right'}`}>
                 <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-rose-100">
                    <span className="inline-block px-3 py-1 bg-rose-50 text-rose-500 text-xs font-bold tracking-wider uppercase rounded-full mb-3">
                      {memory.date}
                    </span>
                    <h3 className="text-2xl font-serif text-gray-800 mb-2">{memory.title}</h3>
                    <p className="text-gray-600 font-sans leading-relaxed mb-4">{memory.description}</p>
                    <div className="overflow-hidden rounded-md h-48 w-full">
                       <img 
                        src={memory.image} 
                        alt={memory.title}
                        className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                 </div>
              </div>
              
              {/* Spacer for the other side */}
              <div className="hidden md:block w-5/12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};