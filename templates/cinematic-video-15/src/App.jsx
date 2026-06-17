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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons if added later, currently using high-res image thumbnails to match design
        lucide.createIcons();
    
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
      

<div className="absolute inset-0 z-0">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?q=80&amp;w=2080&amp;auto=format&amp;fit=crop')] bg-cover bg-center bg-no-repeat opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#eb1313]/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen"></div>
</div>

<nav className="relative z-20 w-full px-6 md:px-12 py-8 flex items-start justify-between">
<div className="flex flex-col gap-0.5">
<span className="font-['Playfair_Display',serif] text-2xl font-semibold text-[#eb1313] tracking-tight">Warrior Ads</span>
<span className="text-xs text-white/80 font-medium tracking-wide">by 21AGENTS</span>
</div>
<div className="hidden md:flex gap-8 text-sm text-zinc-300 font-medium">
<a className="hover:text-white transition-colors duration-300" href="#">Instagram</a>
<a className="hover:text-white transition-colors duration-300" href="#">Dribbble</a>
<a className="hover:text-white transition-colors duration-300" href="#">YouTube</a>
</div>
</nav>

<main className="relative z-10 flex-grow flex items-center px-6 md:px-12 lg:px-24">
<div className="max-w-4xl">
<h1 className="font-['Playfair_Display',serif] text-5xl md:text-7xl lg:text-[7rem] font-semibold text-white uppercase leading-[0.95] tracking-tighter drop-shadow-2xl">
                Kinematische<br/>
                Blockbuster<br/>
                Für Ihre<br/>
                Brand<br/>
                Story
            </h1>
<p className="mt-8 text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed font-light">
                Erleben Sie die nächste Stufe der Videoproduktion mit KI-generierten Inhalten auf Hollywood Niveau ohne einen einzigen Tag am Filmset
            </p>
<button className="mt-10 bg-[#eb1313] hover:bg-[#c90f0f] text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-colors duration-300">
                Kostenloses Erstgespräch
            </button>
</div>
</main>

<div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 z-20 hidden md:flex">
<button className="w-1.5 h-1.5 rounded-full bg-white/30 hover:bg-white/60 transition-colors"></button>
<button className="w-1 h-8 rounded-full bg-[#eb1313]"></button>
<button className="w-1.5 h-1.5 rounded-full bg-white/30 hover:bg-white/60 transition-colors"></button>
<button className="w-1.5 h-1.5 rounded-full bg-white/30 hover:bg-white/60 transition-colors"></button>
</div>

<div className="relative z-20 w-full bg-[#050505]/80 backdrop-blur-xl border-t border-white/5 flex flex-col md:grid md:grid-cols-4">

<button className="group flex items-center gap-4 p-5 md:p-6 border-b md:border-b-0 md:border-r border-white/5 text-left hover:bg-white/5 transition-colors relative">
<img alt="High-End Creatives" className="w-12 h-12 object-cover bg-zinc-900 shrink-0 brightness-75 group-hover:brightness-100 transition-all" src="https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col">
<span className="text-sm font-semibold text-white tracking-tight">High-End Creatives</span>
<span className="text-xs text-zinc-400 mt-0.5">KI Assets</span>
</div>
</button>

<button className="group flex items-center gap-4 p-5 md:p-6 border-b md:border-b-0 md:border-r border-white/5 text-left bg-gradient-to-t from-transparent to-[#eb1313]/10 relative">

<div className="absolute top-0 left-0 w-full h-[3px] bg-[#eb1313]"></div>
<img alt="Video-Produktion" className="w-12 h-12 object-cover bg-zinc-900 shrink-0 border border-[#eb1313]/50" src="https://images.unsplash.com/photo-1535016120720-40c746a6580b?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col">
<span className="text-sm font-semibold text-white tracking-tight">Video-Produktion</span>
<span className="text-xs text-zinc-300 mt-0.5">Cinematic Content</span>
</div>
</button>

<button className="group flex items-center gap-4 p-5 md:p-6 border-b md:border-b-0 md:border-r border-white/5 text-left hover:bg-white/5 transition-colors relative">
<img alt="Performance Marketing" className="w-12 h-12 object-cover bg-zinc-900 shrink-0 brightness-75 group-hover:brightness-100 transition-all" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col">
<span className="text-sm font-semibold text-white tracking-tight">Performance Marketing</span>
<span className="text-xs text-zinc-400 mt-0.5">Psychologische Ads</span>
</div>
</button>

<button className="group flex items-center gap-4 p-5 md:p-6 text-left hover:bg-white/5 transition-colors relative">
<img alt="Business Scaling" className="w-12 h-12 object-cover bg-zinc-900 shrink-0 brightness-75 group-hover:brightness-100 transition-all" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div className="flex flex-col">
<span className="text-sm font-semibold text-white tracking-tight">Business Scaling</span>
<span className="text-xs text-zinc-400 mt-0.5">Marktführerschaft</span>
</div>
</button>
</div>


    </>
  );
}
