import React, { useRef, useEffect } from 'react';

export default function Features() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      cardsRef.current.forEach(card => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    };
    
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="features md:px-12 overflow-hidden bg-[#050505] w-full pt-24 pr-6 pb-24 pl-6 relative">
      <div className="max-w-[1200px] mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-start justify-between mb-24 gap-12">
              <h2 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1] max-w-xl reveal">
                  Made for modern
                  <span className="block">product teams</span>
              </h2>
              <div className="max-w-lg pt-2 reveal delay-100">
                  <p className="text-lg text-[#8A8F98] leading-relaxed mb-6 font-light">Axis is shaped by the practices and principles that distinguish world-class product teams from the rest: relentless focus, fast execution, and a commitment to the quality of craft.</p>
                  <a href="#" className="inline-flex items-center text-white font-medium hover:text-[#bbb] transition-colors group text-sm">
                      Make the switch
                      <iconify-icon icon="solar:alt-arrow-right-linear" width="14" height="14" className="ml-1 group-hover:translate-x-1 transition-transform"></iconify-icon>
                  </a>
              </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div ref={el => cardsRef.current[0] = el} className="feature-card group relative h-[480px] rounded-[32px] bg-[#0E0F11] border border-white/5 overflow-hidden flex flex-col justify-between p-8 hover:border-white/10 transition-colors reveal delay-100">
                  <div className="relative w-full flex-1 flex items-center justify-center perspective-[800px] overflow-visible">
                      <div className="relative w-40 h-40 preserve-3d transition-transform duration-700 group-hover:translate-y-[-10px]" style={{ transform: 'rotateX(60deg) rotateZ(-45deg) rotateY(0deg)' }}>
                          
                          <div className="absolute inset-0 bg-[#1A1A1A] rounded-xl border border-white/5 shadow-2xl transition-transform duration-500 ease-out -translate-z-[20px] group-hover:translate-x-4 group-hover:translate-y-4"></div>
                          
                          <div className="absolute inset-0 bg-[#222] rounded-xl border border-white/10 shadow-2xl transition-transform duration-500 ease-out translate-z-[0px] group-hover:translate-x-2 group-hover:translate-y-2 flex flex-col p-4 gap-2 opacity-60">
                              <div className="h-1.5 w-12 bg-white/20 rounded-full"></div>
                              <div className="h-1.5 w-full bg-white/10 rounded-full mt-2"></div>
                              <div className="h-1.5 w-3/4 bg-white/10 rounded-full"></div>
                          </div>
                          
                          <div className="absolute inset-0 bg-[#0A0A0A] rounded-xl border border-white/10 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-out translate-z-[20px] group-hover:translate-z-[40px] flex flex-col p-4 overflow-hidden">
                              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                              <div className="font-mono text-[7px] text-gray-500 leading-relaxed">
                                  <span className="text-purple-400">function</span> <span className="text-blue-400">aiModelData</span>() {'{'}
                                  &nbsp;&nbsp;<span className="text-purple-400">return</span> <span className="text-green-400">&lt;AIModel&gt;</span>
                                  &nbsp;&nbsp;<span className="text-blue-300">accuracy</span>=<span className="text-orange-300">0.99</span>
                                  {'}'};
                                  <span className="text-gray-600">// Issues</span>
                                  <span className="text-blue-300">let</span> <span className="text-white">model</span> = ...
                              </div>
                              <div className="absolute -right-12 top-0 text-[8px] text-white/30 rotate-90 origin-top-left">Roadmap</div>
                              <div className="absolute -right-12 top-8 text-[8px] text-white/30 rotate-90 origin-top-left">Projects</div>
                              <div className="absolute -right-12 top-16 text-[8px] text-white/30 rotate-90 origin-top-left">Issues</div>
                          </div>
                      </div>
                  </div>
                  
                  <div className="flex items-end justify-between relative z-10 mt-auto">
                      <div className="max-w-[80%]">
                          <h3 className="text-xl font-medium text-white leading-tight">Purpose-built for product development</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-[#222] transition-all duration-300 group-hover:scale-105 shadow-lg">
                          <iconify-icon icon="solar:arrow-right-up-linear" width="18" height="18"></iconify-icon>
                      </div>
                  </div>
              </div>

              <div ref={el => cardsRef.current[1] = el} className="feature-card group relative h-[480px] rounded-[32px] bg-[#0E0F11] border border-white/5 overflow-hidden flex flex-col justify-between p-8 hover:border-white/10 transition-colors reveal delay-200">
                  <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '100% 20px' }}></div>
                      
                      <div className="relative w-full h-32 flex flex-col items-center justify-center">
                          <div className="absolute top-0 right-[20%] font-mono text-white/40 text-lg font-medium italic tracking-tight opacity-50 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">50ms</div>
                          
                          <div className="w-full h-full flex flex-col justify-evenly opacity-40 group-hover:opacity-80 transition-opacity duration-500 transform skew-x-[-20deg]">
                              <div className="h-px w-[80%] bg-gradient-to-r from-transparent via-white/30 to-transparent self-end transition-all duration-700 group-hover:w-[100%]"></div>
                              <div className="h-px w-[60%] bg-gradient-to-r from-transparent via-white/50 to-transparent self-end transition-all duration-500 group-hover:w-[90%] delay-75"></div>
                              <div className="h-px w-[90%] bg-gradient-to-r from-transparent via-white/20 to-transparent self-end transition-all duration-1000 group-hover:w-[110%] delay-100"></div>
                              <div className="h-px w-[50%] bg-gradient-to-r from-transparent via-white/40 to-transparent self-end transition-all duration-300 group-hover:w-[80%]"></div>
                              <div className="h-px w-[70%] bg-gradient-to-r from-transparent via-white/30 to-transparent self-end transition-all duration-700 group-hover:w-[95%] delay-150"></div>
                          </div>
                          
                          <div className="absolute top-1/2 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 group-hover:bg-white/10 transition-colors"></div>
                      </div>
                  </div>
                  
                  <div className="flex items-end justify-between relative z-10 mt-auto">
                      <div className="max-w-[80%]">
                          <h3 className="text-xl font-medium text-white leading-tight">Designed to move fast</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-[#222] transition-all duration-300 group-hover:scale-105 shadow-lg">
                          <iconify-icon icon="solar:arrow-right-up-linear" width="18" height="18"></iconify-icon>
                      </div>
                  </div>
              </div>

              <div ref={el => cardsRef.current[2] = el} className="feature-card group relative h-[480px] rounded-[32px] bg-[#0E0F11] border border-white/5 overflow-hidden flex flex-col justify-between p-8 hover:border-white/10 transition-colors reveal delay-300">
                  <div className="relative w-full flex-1 flex items-center justify-center perspective-[800px]">
                      <div className="absolute inset-0 flex items-center justify-center opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-500 pointer-events-none" style={{ transform: 'rotateX(60deg) rotateZ(45deg) scale(2)' }}>
                          <div className="w-[400px] h-[400px]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px', border: '1px dashed rgba(255,255,255,0.3)' }}></div>
                      </div>

                      <div className="relative transform transition-transform duration-700 ease-out group-hover:translate-y-[-15px]" style={{ transform: 'rotateX(50deg) rotateZ(-30deg)' }}>
                          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-20 h-20 bg-black blur-xl opacity-80 transform scale-y-[0.3]"></div>
                          
                          <div className="w-28 h-10 bg-[#1A1A1A] border border-white/20 rounded-md flex items-center justify-between px-3 shadow-2xl relative z-10 group-hover:border-white/40 group-hover:bg-[#222] transition-all">
                              <span className="w-3 h-3 border border-white/30 rounded-sm flex items-center justify-center text-[8px] text-white/50">+</span>
                              <span className="text-white text-xs font-medium tracking-wide">Create</span>
                          </div>
                          
                          <div className="absolute top-1/2 -left-[100%] w-[300%] h-px border-t border-dashed border-white/20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute -top-[100%] left-1/2 h-[300%] w-px border-l border-dashed border-white/20 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          
                          <div className="absolute -right-4 -bottom-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 delay-100">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="black" strokeWidth="1"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path></svg>
                          </div>
                      </div>
                  </div>
                  
                  <div className="flex items-end justify-between relative z-10 mt-auto">
                      <div className="max-w-[80%]">
                          <h3 className="text-xl font-medium text-white leading-tight">Crafted to perfection</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border border-white/10 flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-[#222] transition-all duration-300 group-hover:scale-105 shadow-lg">
                          <iconify-icon icon="solar:arrow-right-up-linear" width="18" height="18"></iconify-icon>
                      </div>
                  </div>
              </div>

          </div>
      </div>
    </section>
  );
}