import React from 'react';

const RevealText = ({ text, delayOffset = 0.1, elementType: Element = 'span', className = '' }) => {
  return (
    <Element className={className}>
      {text.split(/(\s+)/).map((word, i) => {
        if (word.trim() === '') return <span key={i}>{word}</span>;
        return (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <span 
              className="inline-block opacity-0 translate-y-[110%] rotate-3 origin-top-left animate-reveal-word" 
              style={{ animationDelay: `${delayOffset + i * 0.02}s` }}
            >
              {word}
            </span>
          </span>
        );
      })}
    </Element>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center pt-32 pb-20 px-6 lg:px-12 w-full mx-auto font-sans text-slate-900 bg-slate-50 overflow-hidden">
      
      {/* Background Borders */}
      <div className="absolute inset-0 pointer-events-none z-0 flex justify-center w-full overflow-hidden">
        <div className="w-full max-w-screen-2xl h-full border-x border-slate-200/50 relative">
          <div className="absolute top-0 -left-[2.5px] w-[5px] h-[5px] border border-slate-300 bg-slate-50"></div>
          <div className="absolute top-0 -right-[2.5px] w-[5px] h-[5px] border border-slate-300 bg-slate-50"></div>
          <div className="absolute bottom-0 -left-[2.5px] w-[5px] h-[5px] border border-slate-300 bg-slate-50"></div>
          <div className="absolute bottom-0 -right-[2.5px] w-[5px] h-[5px] border border-slate-300 bg-slate-50"></div>
        </div>
      </div>

      {/* Aura Asset & Animated SVG Waves */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex justify-end">
        <div className="relative w-full lg:w-[65%] h-full right-0 overflow-hidden">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d14dc069-558a-4c51-8aad-5cc237f9b61d_1600w.jpg" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply animate-aura" 
            alt="Abstract Blue Wave" 
          />
          
          <div className="absolute inset-0 flex items-center justify-center opacity-80 mix-blend-multiply">
            <svg className="absolute w-[200%] h-[120vh] top-1/2 -translate-y-1/2 left-0" viewBox="0 0 2880 800" preserveAspectRatio="none">
              <defs>
                <linearGradient id="wave-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.25"></stop>
                  <stop offset="50%" stopColor="#c026d3" stopOpacity="0.25"></stop>
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.25"></stop>
                </linearGradient>
                <linearGradient id="wave-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" stopOpacity="0.15"></stop>
                  <stop offset="50%" stopColor="#ec4899" stopOpacity="0.15"></stop>
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0.15"></stop>
                </linearGradient>
                <linearGradient id="wave-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3"></stop>
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3"></stop>
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.3"></stop>
                </linearGradient>
              </defs>
              <path className="animate-wave-1" fill="url(#wave-grad-1)" d="M 0 400 C 240 200, 480 200, 720 400 C 960 600, 1200 600, 1440 400 C 1680 200, 1920 200, 2160 400 C 2400 600, 2640 600, 2880 400 L 2880 800 L 0 800 Z"></path>
              <path className="animate-wave-2" fill="url(#wave-grad-2)" d="M 0 500 C 240 700, 480 700, 720 500 C 960 300, 1200 300, 1440 500 C 1680 700, 1920 700, 2160 500 C 2400 300, 2640 300, 2880 500 L 2880 800 L 0 800 Z"></path>
              <path className="animate-wave-3" fill="url(#wave-grad-3)" d="M 0 600 C 240 450, 480 450, 720 600 C 960 750, 1200 750, 1440 600 C 1680 450, 1920 450, 2160 600 C 2400 750, 2640 750, 2880 600 L 2880 800 L 0 800 Z"></path>
            </svg>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-slate-50/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
        </div>
      </div>

      <div className="relative z-20 flex-grow flex items-center w-full max-w-screen-2xl mx-auto h-full my-auto">
        <div className="w-full lg:w-[65%] xl:w-[55%] flex flex-col items-start mt-12 md:mt-0">
          <div className="mb-6 flex items-center gap-2 text-xs font-normal text-slate-600 bg-white/80 backdrop-blur-md py-1.5 px-3 rounded-full border border-slate-200/80 shadow-sm animate-fade-up-delayed" style={{ animationDelay: '0.1s' }}>
            <span>Global transactions powered by Platform:</span>
            <span className="text-slate-900 font-medium tracking-tight">1.63408793%</span>
          </div>

          <RevealText 
            text="Financial infrastructure to scale your revenue." 
            elementType="h1" 
            className="text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] tracking-tight text-slate-900 font-normal mb-6"
            delayOffset={0.2}
          />
          
          <RevealText 
            text="Process payments, deliver financial services, and deploy tailored revenue models – from your initial transaction to your billionth." 
            elementType="p" 
            className="text-xl md:text-2xl lg:text-3xl leading-snug tracking-tight text-slate-500 font-light mb-10 max-w-3xl"
            delayOffset={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;