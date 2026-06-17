import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      const { useRef, useState, useEffect } = React;
      const { motion, useScroll, useTransform, useSpring } = window.Motion;

      const App = () => {
          const containerRef = useRef(null);

          // Adjusted height for 2-stage animation (Facade -> Office)
          const { scrollYProgress } = useScroll({
              target: containerRef,
              offset: ["start start", "end end"]
          });

          const smoothProgress = useSpring(scrollYProgress, {
              stiffness: 100,
              damping: 30,
              restDelta: 0.001
          });

          // --- ANIMATION STAGES ---

          // STAGE 1: FACADE (0% -> 60%)
          // Zooms in through the glass. Fades out at the end.
          const facadeScale = useTransform(smoothProgress, [0, 0.6], [1, 20]);
          const facadeOpacity = useTransform(smoothProgress, [0.5, 0.6], [1, 0]);

          // STAGE 2: OFFICE (Revealed)
          // Sits behind facade. Subtle scale effect.
          const officeScale = useTransform(smoothProgress, [0, 1], [0.95, 1]);
          // No opacity needed as it sits behind facade (z-10)

          // UI ELEMENTS
          const textOpacity = useTransform(smoothProgress, [0, 0.2], [1, 0]);
          const textScale = useTransform(smoothProgress, [0, 0.2], [1, 1.1]);

          const finalUiOpacity = useTransform(smoothProgress, [0.7, 1], [0, 1]);
          const finalUiY = useTransform(smoothProgress, [0.7, 1], [40, 0]);

          useEffect(() => {
              lucide.createIcons({
                  attrs: {
                      "stroke-width": "1.5"
                  }
              });
          }, []);

          return (
              <div ref={containerRef} className="relative w-full h-[250vh]">

                  {/* Header */}
                  <header className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 md:py-8 flex justify-between items-center mix-blend-difference">
                      <div className="flex items-center gap-3 group cursor-pointer">
                          <div className="w-2 h-2 bg-white rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="text-xs font-medium tracking-widest uppercase text-white/90">Genovesi</span>
                      </div>
                      <nav className="hidden md:flex gap-8 text-xs font-normal uppercase tracking-widest text-zinc-400">
                          <a href="#" className="hover:text-white transition-colors duration-300">Estudio</a>
                          <a href="#" className="hover:text-white transition-colors duration-300">Proyectos</a>
                          <a href="#" className="hover:text-white transition-colors duration-300">Contacto</a>
                      </nav>
                      <button className="md:hidden text-white">
                          <i data-lucide="menu" className="w-5 h-5"></i>
                      </button>
                  </header>

                  {/* Sticky Viewport */}
                  <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-zinc-950">

                      {/* Vignette */}
                      <div className="absolute inset-0 z-50 vignette-overlay"></div>

                      {/* --- LAYER 2: OFFICE (DESTINATION) Z-10 --- */}
                      <motion.div
                          className="absolute inset-0 z-10 w-full h-full flex items-center justify-center image-container origin-center"
                          style={{scale: officeScale}}
                      >
                          <div className="relative w-full h-full">
                              <img
                                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"
                                  className="w-full h-full object-cover object-center brightness-75"
                                  alt="Office Interior"
                              />

                              <motion.div
                                  className="absolute inset-0 flex flex-col items-center justify-center z-50 px-4"
                                  style={{opacity: finalUiOpacity, y: finalUiY}}
                              >
                                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-400 mb-6 border border-zinc-700/50 px-3 py-1 rounded-full backdrop-blur-md">
                                      Interior
                                  </span>
                                  <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-center mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 leading-[1.1]">
                                      Espacios centrados <br/> en lo humano.
                                  </h2>
                                  <div className="flex gap-4">
                                      <button className="bg-white text-black px-8 py-3 text-xs font-medium uppercase tracking-widest hover:bg-zinc-200 transition-colors flex items-center gap-2">
                                          <span>Ver Proyectos</span>
                                          <i data-lucide="arrow-right" className="w-4 h-4"></i>
                                      </button>
                                  </div>
                              </motion.div>
                          </div>
                      </motion.div>

                      {/* --- LAYER 1: FACADE (START) Z-30 --- */}
                      <motion.div
                          className="absolute inset-0 z-30 w-full h-full flex items-center justify-center image-container origin-center pointer-events-none"
                          style={{scale: facadeScale, opacity: facadeOpacity}}
                      >
                          <div className="relative w-full h-full">
                              <img
                                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                                  className="w-full h-full object-cover object-center"
                                  alt="Modern Facade"
                              />
                              <div className="absolute inset-0 bg-black/20"></div>
                          </div>
                      </motion.div>

                      {/* --- TITLE OVERLAY --- */}
                      <motion.div
                          className="absolute z-40 inset-0 flex flex-col items-center justify-center pointer-events-none"
                          style={{opacity: textOpacity, scale: textScale}}
                      >
                          <h1 className="text-[10vw] md:text-[140px] font-medium tracking-tighter text-white leading-none mix-blend-overlay opacity-90">
                              CONOCENOS
                          </h1>
                      </motion.div>

                      {/* Scroll Prompt */}
                      <motion.div
                          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-50 text-center flex flex-col items-center gap-4"
                          style={{opacity: textOpacity}}
                      >
                          <p className="text-xs uppercase tracking-[0.2em] text-white/50">Entrar al espacio</p>
                          <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0"></div>
                      </motion.div>

                  </div>

                  <div className="h-screen bg-black flex items-center justify-center">
                      <footer className="text-zinc-600 text-xs tracking-widest uppercase">
                          © 2024 Estudio Genovesi
                      </footer>
                  </div>
              </div>
          );
      };

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      
<div id="root"></div>


    </>
  );
}
