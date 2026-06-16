import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import clsx from 'clsx';

const About = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();

  return (
    <div className="w-full relative pt-32 pb-40 px-6 max-w-6xl mx-auto min-h-screen z-10">
      <div 
        ref={headerRef}
        className={clsx(
          "mb-24 text-center transition-all duration-1000",
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h1 className="font-serif text-5xl lg:text-7xl text-white mb-6 tracking-tight">The Artist</h1>
        <p className="text-white/60 text-[11px] font-medium tracking-[0.3em] uppercase">Biography & Philosophy</p>
      </div>

      <div 
        ref={contentRef}
        className={clsx(
          "flex flex-col lg:flex-row gap-16 items-start transition-all duration-1000 delay-200",
          contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
        )}
      >
        {/* Image side */}
        <div className="w-full lg:w-5/12 relative">
           <div className="bg-noise p-4 shadow-2xl relative z-10 border border-white/10">
             <div className="duotone-cyan w-full aspect-[3/4] relative overflow-hidden">
                <img 
                  src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a2cc311-cdb6-49e8-b27d-8b5e61c376b0_800w.webp" 
                  alt="Martin Elias in Studio" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
             </div>
           </div>
           {/* Background watermark letter */}
           <div className="absolute -bottom-10 -right-10 text-[180px] font-script text-white/5 leading-none select-none -z-10 pointer-events-none">
             ME
           </div>
        </div>

        {/* Text side */}
        <div className="w-full lg:w-7/12 bg-noise p-8 lg:p-12 shadow-xl border border-gray-100">
           <h2 className="font-serif text-3xl text-[#e0281c] mb-8 tracking-tight leading-snug">
             Martin Elias (b. 1982) is a contemporary abstract artist living and working between New York and Paris.
           </h2>
           <div className="space-y-6 text-gray-600 font-serif text-sm leading-relaxed">
             <p>
               Educated at the École des Beaux-Arts in Paris, Elias began his career as an architectural draftsman before fully dedicating himself to abstract painting in 2010. His background in structural design profoundly influences his current visual language, which is characterized by the delicate balance between rigid geometry and emotional fluidity.
             </p>
             <p className="border-l-2 border-[#12c2e9] pl-6 py-2 my-8 italic text-lg text-gray-800">
               "My work is essentially an excavation of form. I build structures on the canvas only to dismantle them, searching for the truth that lies in the spaces between creation and destruction."
             </p>
             <p>
               His technique involves meticulously layering industrial materials—acrylics, resins, and graphite—before applying subtractive methods. The result is a deeply textured surface that captures the passage of time and the transient nature of memory.
             </p>
             <p>
               Elias's works are held in several prominent public and private collections globally, including the Metropolitan Museum of Art, New York, and the Centre Pompidou, Paris. He is currently represented by the Gagosian Gallery.
             </p>
           </div>

           <div className="mt-12 pt-8 border-t border-gray-200">
             <h3 className="text-[#12c2e9] text-[10px] font-semibold tracking-widest uppercase mb-4">Selected Collections</h3>
             <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-xs font-medium tracking-wide">
               <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#12c2e9]"></span> Centre Pompidou, Paris</li>
               <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#12c2e9]"></span> The Met, New York</li>
               <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#12c2e9]"></span> Tate Modern, London</li>
               <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-[#12c2e9]"></span> MoMA, San Francisco</li>
             </ul>
           </div>
        </div>
      </div>
    </div>
  );
};

export default About;