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



        lucide.createIcons();

        // Arc Animation Logic
        const container = document.getElementById('arc-container');
        const cards = document.querySelectorAll('.arc-card');

        function updateCards() {
            const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;
            
            cards.forEach((card) => {
                const cardRect = card.getBoundingClientRect();
                const cardCenter = cardRect.left + cardRect.width / 2;
                
                // Calculate distance from center
                const distance = cardCenter - containerCenter;
                
                // Calculate rotation (more distance = more rotation)
                // Dividing by 25 gives a gentle curve (e.g., 500px away = 20deg)
                const rotation = distance / 25;
                
                // Calculate Y offset (arch effect)
                // Use Math.abs(distance) to make it symmetrical. 
                // Dividing by 10 means 500px away = 50px down.
                const translateY = Math.abs(distance) / 6;

                // Apply transform
                // Rotate is dependent on side (left = negative deg, right = positive deg)
                // TranslateY pushes items down as they move away from center
                card.style.transform = `translateY(${translateY}px) rotate(${rotation}deg)`;
            });
        }

        // Initial Center Scroll
        window.addEventListener('load', () => {
            const centerOffset = (container.scrollWidth - container.clientWidth) / 2;
            container.scrollLeft = centerOffset;
            updateCards();
        });

        // Listeners
        container.addEventListener('scroll', () => requestAnimationFrame(updateCards));
        window.addEventListener('resize', updateCards);
        
        // Initial call
        updateCards();
    
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
      

<div className="w-full bg-[#B8F358] text-slate-900 py-1.5 overflow-hidden absolute top-14 z-0 transform -rotate-1 origin-left opacity-90 hidden md:block">
<div className="whitespace-nowrap flex gap-8 items-center font-mono text-xs font-semibold tracking-widest uppercase animate-marquee">
<span>New: Twist AI Model 2.0 Released</span> <span>•</span>
<span>Showcase: Small Business Growth</span> <span>•</span>
<span>New: Twist AI Model 2.0 Released</span> <span>•</span>
<span>Showcase: Small Business Growth</span> <span>•</span>
<span>New: Twist AI Model 2.0 Released</span> <span>•</span>
<span>Showcase: Small Business Growth</span> <span>•</span>
<span>New: Twist AI Model 2.0 Released</span> <span>•</span>
<span>Showcase: Small Business Growth</span>
</div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="bg-[#1A1A1A] text-white rounded-full p-1.5 pl-5 pr-1.5 flex items-center gap-12 shadow-2xl border border-white/10 max-w-2xl w-full justify-between backdrop-blur-md">
<div className="flex items-center gap-3 cursor-pointer group">
<div className="flex flex-col gap-1 justify-center w-5">
<span className="block w-full h-0.5 bg-white group-hover:bg-[#B8F358] transition-colors"></span>
<span className="block w-full h-0.5 bg-white group-hover:bg-[#B8F358] transition-colors"></span>
</div>
<span className="font-medium text-sm text-gray-200 group-hover:text-white transition-colors">Меню</span>
</div>
<div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
<span className="font-semibold text-xl tracking-tight">Twist AI</span>
</div>
<div className="flex items-center gap-2">
<button className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-full hover:bg-white/10 transition-colors">
                    Войти
                </button>
<button className="bg-[#B8F358] text-[#1A1A1A] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#a3e635] transition-colors shadow-[0_0_15px_rgba(184,243,88,0.4)]">
                    Начать
                </button>
</div>
</div>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center justify-start pt-32 md:pt-48 pb-10 w-full overflow-hidden">

<div className="text-center max-w-6xl mx-auto mb-10 px-4">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-[#111] leading-[0.9] md:leading-[1.1] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
<span>Бизнес сайты</span>
<span className="text-[#6366F1] animate-spin-slow">
<i className="w-16 h-16 md:w-24 md:h-24 stroke-[1.5]" data-lucide="asterisk"></i>
</span>
<span>Сделанные ИИ</span>
</h1>
</div>

<div className="text-center max-w-3xl mx-auto mb-20 px-4">
<p className="text-lg md:text-xl text-gray-500 leading-relaxed font-normal">
                Платформа, наполненная ресурсами для 
                <span className="bg-gray-200/60 px-2 py-0.5 rounded text-gray-800 font-medium mx-1">малого бизнеса</span> 
                и
                <span className="bg-gray-200/60 px-2 py-0.5 rounded text-gray-800 font-medium mx-1">стартапов</span>.
            </p>
</div>


<div className="scroll-container w-full overflow-x-auto no-scrollbar py-20 px-[50vw] flex items-center gap-12 select-none cursor-grab active:cursor-grabbing" id="arc-container">

<div className="arc-card shrink-0 w-[340px] md:w-[420px] aspect-[4/3] bg-[#1C1C1C] rounded-2xl p-2 flex flex-col shadow-2xl transition-transform duration-75 will-change-transform">
<div className="flex-grow bg-zinc-800 rounded-xl overflow-hidden relative group">
<img alt="Momentum" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20"></div>
</div>
<div className="h-16 flex items-center px-4 justify-between">
<span className="text-white font-medium text-lg tracking-tight">Momentum Based Hover</span>
<i className="text-gray-500 w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</div>
</div>

<div className="arc-card shrink-0 w-[340px] md:w-[420px] aspect-[4/3] bg-[#1C1C1C] rounded-2xl p-2 flex flex-col shadow-2xl transition-transform duration-75 will-change-transform">
<div className="flex-grow bg-blue-900 rounded-xl overflow-hidden relative group">
<img alt="Pixelate" className="w-full h-full object-cover mix-blend-overlay opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<h3 className="text-white text-3xl font-bold tracking-tight text-center drop-shadow-lg">Pixelate Render</h3>
</div>
</div>
<div className="h-16 flex items-center px-4 justify-between">
<span className="text-white font-medium text-lg tracking-tight">Pixelate Image Effect</span>
<i className="text-gray-500 w-5 h-5 stroke-[1.5]" data-lucide="grid"></i>
</div>
</div>

<div className="arc-card shrink-0 w-[340px] md:w-[420px] aspect-[4/3] bg-[#1C1C1C] rounded-2xl p-2 flex flex-col shadow-2xl transition-transform duration-75 will-change-transform">
<div className="flex-grow bg-[#3E2723] rounded-xl overflow-hidden relative flex flex-col items-center justify-center group">
<div className="w-3/4 space-y-3 opacity-80 group-hover:scale-105 transition-transform duration-300">
<div className="h-2 w-full bg-orange-400/20 rounded-full"></div>
<div className="h-2 w-2/3 bg-orange-400/20 rounded-full"></div>
<div className="h-10 w-full bg-orange-900/50 border border-orange-500/30 rounded flex items-center px-3">
<div className="w-2 h-2 rounded-full bg-orange-500"></div>
</div>
<div className="h-2 w-3/4 bg-orange-400/20 rounded-full"></div>
</div>
</div>
<div className="h-16 flex items-center px-4 justify-between">
<span className="text-white font-medium text-lg tracking-tight">Directional List Hover</span>
<i className="text-gray-500 w-5 h-5 stroke-[1.5]" data-lucide="list"></i>
</div>
</div>

<div className="arc-card shrink-0 w-[340px] md:w-[420px] aspect-[4/3] bg-[#1C1C1C] rounded-2xl p-2 flex flex-col shadow-2xl transition-transform duration-75 will-change-transform">
<div className="flex-grow bg-black rounded-xl overflow-hidden relative flex items-center justify-center group">
<div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-900 opacity-60"></div>
<div className="relative z-10 transform group-hover:translate-x-4 transition-transform duration-500">
<div className="w-32 h-44 bg-gray-200 rounded-lg shadow-2xl rotate-6 border border-white/20 relative overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1633511090164-b43840ea1607?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-2 left-2 text-white font-bold text-xl drop-shadow">ZV210</div>
</div>
</div>
<div className="absolute z-0 transform -translate-x-8 rotate-[-10deg] opacity-60">
<div className="w-32 h-44 bg-gray-600 rounded-lg shadow-xl"></div>
</div>
</div>
<div className="h-16 flex items-center px-4 justify-between">
<span className="text-white font-medium text-lg tracking-tight">Flick Cards Slider</span>
<i className="text-gray-500 w-5 h-5 stroke-[1.5]" data-lucide="layers"></i>
</div>
</div>

<div className="arc-card shrink-0 w-[340px] md:w-[420px] aspect-[4/3] bg-[#1C1C1C] rounded-2xl p-2 flex flex-col shadow-2xl transition-transform duration-75 will-change-transform">
<div className="flex-grow bg-[#2A3324] rounded-xl overflow-hidden relative flex items-end justify-end p-6 group">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#4ADE80 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 group-hover:-translate-y-2 transition-transform duration-300">

<svg className="w-24 h-24 text-[#B8F358] fill-current drop-shadow-2xl" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="40"></circle>
<circle cx="35" cy="45" fill="black" r="5"></circle>
<circle cx="65" cy="45" fill="black" r="5"></circle>
<path d="M 30 65 Q 50 80 70 65" fill="none" stroke="black" strokeWidth="3"></path>
</svg>
</div>
<span className="absolute top-4 left-4 text-[#B8F358]/50 font-mono text-xs">CURSOR TRACKER</span>
</div>
<div className="h-16 flex items-center px-4 justify-between">
<span className="text-white font-medium text-lg tracking-tight">Face Follow Cursor</span>
<i className="text-gray-500 w-5 h-5 stroke-[1.5]" data-lucide="smile"></i>
</div>
</div>
</div>
</main>
<footer className="text-center py-8 text-gray-400 text-sm border-t border-gray-200 mt-auto bg-white/50 backdrop-blur">
<p>Twist AI Platform © 2024 • Designed with Precision</p>
</footer>


    </>
  );
}
