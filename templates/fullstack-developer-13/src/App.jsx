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



tailwind.config = {
theme: {
extend: {
colors: {
'brand-bg': '#E6E4DD',
'brand-black': '#0a0a0a',
},
fontSize: {
'giant': '14vw',
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // 3D Tilt Effect for Image
        const card = document.getElementById('tilt-card');
        
        document.addEventListener('mousemove', (e) => {
            if (window.innerWidth < 768) return; // Disable on mobile

            const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
            const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
            
            card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
        });

        // Reset on mouse leave
        document.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });

        // Smooth reveal animation on load
        document.addEventListener('DOMContentLoaded', () => {
            const words = ['word1', 'word2'];
            words.forEach((id, index) => {
                const el = document.getElementById(id);
                el.style.opacity = '0';
                el.style.transform = 'translateY(100px)';
                el.style.transition = 'all 1s cubic-bezier(0.16, 1, 0.3, 1)';
                
                setTimeout(() => {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }, 100 + (index * 150));
            });
        });
    
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
      

<div className="fixed top-1/2 right-0 -translate-y-1/2 z-50 hidden lg:block group cursor-pointer">
<div className="bg-black text-brand-bg py-6 px-2 writing-vertical-rl rotate-180 font-medium tracking-tight text-sm hover:bg-neutral-800 transition-colors flex items-center gap-4">
<span className="rotate-90"><i className="w-4 h-4" data-lucide="award"></i></span>
<span>Awwwards Winner</span>
</div>
</div>

<nav className="w-full px-4 py-6 md:px-8 md:py-8 flex justify-between items-start text-xs md:text-sm font-medium relative z-40">

<div className="flex flex-col leading-none tracking-tight group cursor-pointer">
<span className="group-hover:translate-x-1 transition-transform duration-300">DEV.</span>
<span className="font-bold group-hover:translate-x-1 transition-transform duration-300 delay-75">ELOP.</span>
</div>

<div className="hidden md:flex gap-12 absolute left-1/2 -translate-x-1/2 top-8">
<a className="group relative overflow-hidden" href="#">
<span className="group-hover:-translate-y-full block transition-transform duration-300">[ABOUT ME]</span>
<span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 block transition-transform duration-300 text-neutral-500">[ABOUT ME]</span>
</a>
<a className="group relative overflow-hidden" href="#">
<span className="group-hover:-translate-y-full block transition-transform duration-300">[PORTFOLIO]</span>
<span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 block transition-transform duration-300 text-neutral-500">[PORTFOLIO]</span>
</a>
<a className="group relative overflow-hidden" href="#">
<span className="group-hover:-translate-y-full block transition-transform duration-300">[CONTACT]</span>
<span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 block transition-transform duration-300 text-neutral-500">[CONTACT]</span>
</a>
</div>

<div className="flex flex-col items-end gap-1">
<span className="text-neutral-500 mb-1">[LET'S CONNECT]</span>
<div className="flex gap-2 underline decoration-1 underline-offset-2">
<a className="hover:text-neutral-500 transition-colors" href="#">LI</a>
<a className="hover:text-neutral-500 transition-colors" href="#">GH</a>
<a className="hover:text-neutral-500 transition-colors" href="#">TW</a>
<a className="hover:text-neutral-500 transition-colors" href="#">IG</a>
</div>
</div>
</nav>

<header className="w-full px-2 mt-4 md:mt-12 relative z-10 select-none pointer-events-none">
<h1 className="font-oswald font-semibold text-giant leading-[0.75] tracking-tighter text-center uppercase stretch-text flex flex-col md:block items-center">
<span className="block md:inline" id="word1">Fullstack</span>
<span className="block md:inline md:-ml-8" id="word2">Developer</span>
</h1>
</header>

<main className="flex-grow w-full px-4 md:px-8 mt-12 md:mt-0 relative z-20">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-4 h-full">

<div className="col-span-1 md:col-span-3 flex flex-col justify-end pb-8 md:pb-20 order-2 md:order-1">
<ul className="text-xs md:text-sm leading-relaxed space-y-1">
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-600" data-lucide="layers"></i>
                        SYSTEM ARCHITECTURE
                    </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-600" data-lucide="layout-template"></i>
                        UI/UX ENGINEERING
                    </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-600" data-lucide="cpu"></i>
                        BACKEND SCALING
                    </li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 text-neutral-600" data-lucide="zap"></i>
                        PERFORMANCE
                    </li>
</ul>
</div>

<div className="col-span-1 md:col-span-6 order-1 md:order-2 flex flex-col items-center relative group">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[1px] border-neutral-400/30 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none z-0"></div>
<div className="relative w-full max-w-md aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 ease-out z-10" id="tilt-card">
<img alt="Developer Portrait" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>

<div className="absolute bottom-4 left-0 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="bg-white/90 px-3 py-1 text-xs font-semibold tracking-tight text-black backdrop-blur-sm">
                            AVAILABLE FOR HIRE
                        </span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-3 flex flex-col justify-end items-start md:items-end pb-8 md:pb-20 order-3 text-left md:text-right">
<span className="text-xs md:text-sm text-neutral-500 mb-2">LATEST WORK</span>
<a className="font-oswald text-5xl md:text-6xl uppercase leading-none tracking-tight hover:italic transition-all duration-300 stretch-text" href="#">
                    NEXUS<br/>SYSTEMS
                </a>
<div className="mt-4 flex gap-2">
<span className="px-2 py-1 border border-black/10 text-[10px] uppercase">React</span>
<span className="px-2 py-1 border border-black/10 text-[10px] uppercase">Node</span>
</div>
</div>
</div>
</main>

<section className="w-full px-4 md:px-0 max-w-2xl mx-auto text-center my-16 md:my-24 relative z-20">
<p className="text-sm md:text-base leading-relaxed font-medium uppercase text-neutral-800">
            I craft scalable web experiences for ambitious brands.<br className="hidden md:block"/>
            I believe clean code is the key to engaging<br className="hidden md:block"/>
            users, ensuring performance, and driving growth.
        </p>
</section>

<footer className="w-full px-4 md:px-8 pb-8 flex flex-col md:flex-row justify-between items-end gap-8 relative z-20 text-xs md:text-sm">
<div className="flex flex-col gap-1">
<span className="text-neutral-500">AVAILABLE FOR FREELANCE</span>
<a className="underline decoration-1 underline-offset-4 hover:text-neutral-600 hover:decoration-neutral-400 transition-all" href="mailto:hello@developer.com">
                HELLO@DEVELOPER.COM
            </a>
</div>
<div className="hidden md:block absolute left-1/2 -translate-x-1/2 bottom-8">
<div className="w-px h-12 bg-black/20 mx-auto mb-2"></div>
<span className="text-[10px] text-neutral-400 tracking-widest">SCROLL</span>
</div>
<div className="text-neutral-500">
            [©CODE2024]
        </div>
</footer>



    </>
  );
}
