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



        const menuToggle = document.getElementById('menu-toggle');
        const scene = document.getElementById('scene');
        const menuText = document.getElementById('menu-text');

        let isMenuOpen = false;

        menuToggle.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            
            if (isMenuOpen) {
                scene.classList.add('menu-active');
                menuText.textContent = "Close";
            } else {
                scene.classList.remove('menu-active');
                menuText.textContent = "Menu";
            }
        });

        // Close when clicking overlay
        document.getElementById('content-overlay').addEventListener('click', () => {
            if (isMenuOpen) {
                isMenuOpen = false;
                scene.classList.remove('menu-active');
                menuText.textContent = "Menu";
            }
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
      

<div className="scene-container relative w-full h-full bg-[#05020a]" id="scene">

<div className="absolute inset-0 z-0 flex items-center justify-center w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#05020a] to-black">
<nav className="w-full max-w-7xl px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
<div className="space-y-2">
<p className="text-[#a3ff12] text-sm tracking-widest uppercase font-medium mb-4">Navigation</p>
<ul className="space-y-6">
<li className="group cursor-pointer">
<span className="text-5xl md:text-7xl font-medium tracking-tight text-white/40 group-hover:text-white transition-colors duration-300">Home</span>
</li>
<li className="group cursor-pointer">
<span className="text-5xl md:text-7xl font-medium tracking-tight text-white/40 group-hover:text-white transition-colors duration-300">Ecosystem</span>
</li>
<li className="group cursor-pointer">
<span className="text-5xl md:text-7xl font-medium tracking-tight text-white/40 group-hover:text-white transition-colors duration-300">Protocol</span>
</li>
<li className="group cursor-pointer">
<span className="text-5xl md:text-7xl font-medium tracking-tight text-white/40 group-hover:text-white transition-colors duration-300">Governance</span>
</li>
</ul>
</div>
<div className="hidden md:block text-right space-y-8">
<div className="space-y-4">
<p className="text-white/50 text-lg">Connect with us</p>
<div className="flex gap-4 justify-end">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
<iconify-icon icon="solar:brand-twitter-bold-duotone" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
<iconify-icon icon="solar:brand-discord-bold-duotone" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>
</div>

<div className="absolute inset-0 z-10 bg-[#080310] overflow-hidden origin-center shadow-2xl" id="main-view">

<div className="absolute inset-0 bg-black/60 z-50 backdrop-blur-[2px]" id="content-overlay"></div>

<div className="absolute inset-0 z-0">
<img alt="Landscape" className="w-full h-full object-cover opacity-60 mix-blend-screen select-none pointer-events-none filter hue-rotate-[260deg] contrast-125 saturate-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#080310] via-[#080310]/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#080310] via-transparent to-transparent"></div>
</div>

<div className="relative z-10 w-full h-full flex flex-col justify-between px-6 py-6 md:px-12 md:py-8">

<header className="flex items-center justify-between w-full">

<a className="group" href="#">
<div className="w-10 h-10 md:w-12 md:h-12 text-white transition-transform duration-500 group-hover:rotate-180">

<svg className="w-full h-full" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.72.57-3.32 1.54-4.61L12 17.25l6.46-9.86C19.43 8.68 20 10.28 20 12c0 4.41-3.59 8-8 8z" opacity="0"></path>
<path d="M12 22C6.5 22 2 17.5 2 12c0-2.4.8-4.6 2.2-6.4C5.6 3.8 8.6 2.8 12 2.8s6.4 1 7.8 2.8C21.2 7.4 22 9.6 22 12c0 5.5-4.5 10-10 10zm0-2c3.4 0 6.3-2.1 7.4-5.1-1.1-1.2-4.4-4.9-7.4-8.5-3 3.6-6.3 7.3-7.4 8.5 1.1 3 4 5.1 7.4 5.1z" fill="white"></path>
</svg>
</div>
</a>

<div className="hidden md:flex gap-4">
<div className="w-1.5 h-1.5 rounded-full bg-[#a3ff12] shadow-[0_0_10px_#a3ff12]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
</div>

<div className="flex items-center gap-6 md:gap-10">
<button className="hidden md:flex items-center gap-2 text-lg text-white/80 hover:text-white transition-colors">
<span className="font-medium tracking-tight">Sound</span>
<div className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center">
<div className="w-0.5 h-2 bg-white"></div>
</div>
</button>
<button className="group flex flex-col items-end gap-1.5 cursor-pointer z-50" id="menu-toggle">
<span className="text-lg font-medium tracking-tight uppercase group-hover:text-[#a3ff12] transition-colors" id="menu-text">Menu</span>
<div className="w-8 h-[2px] bg-white group-hover:w-12 transition-all duration-300"></div>
</button>
</div>
</header>

<main className="flex-1 flex flex-col lg:flex-row items-center relative mt-8 md:mt-0">

<div className="w-full lg:w-1/2 z-20 flex flex-col justify-center items-start pl-0 md:pl-10">

<div className="bg-[#a3ff12] px-3 py-1 mb-8 inline-block skew-x-[-12deg]">
<span className="block skew-x-[12deg] text-black text-xs font-bold tracking-wider uppercase">Phase 01</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/60 mb-10">
                            BUILDING <br/>
                            SYNERGISTIC <br/>
                            DEFI PRIMITIVES
                        </h1>

<div className="flex items-center gap-6 group cursor-pointer">
<div className="relative w-16 h-16 border border-white/20 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#a3ff12]/50">

<div className="w-8 h-10 border border-white/60 rounded-full relative group-hover:scale-90 transition-transform">
<div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/60"></div>
<div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/60"></div>
</div>
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-[#a3ff12] animate-pulse"></div>
<span className="text-lg text-white/90 font-medium tracking-tight group-hover:translate-x-1 transition-transform">Find Out More</span>
</div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 lg:left-[60%] -translate-x-1/2 -translate-y-[60%] w-[300px] h-[380px] md:w-[450px] md:h-[580px] z-10 pointer-events-none orb-float">

<div className="absolute inset-0 bg-blue-500 rounded-full blur-[100px] opacity-20 glow-pulse"></div>
<div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-purple-600 rounded-full blur-[80px] opacity-30"></div>

<div className="relative w-full h-full rounded-[50%/60%_60%_40%_40%] overflow-hidden shadow-[inset_-20px_-20px_50px_rgba(0,0,0,0.8),inset_10px_10px_40px_rgba(255,255,255,0.2)]">

<img className="w-full h-full object-cover opacity-90 mix-blend-overlay contrast-125 saturate-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-400/30 via-transparent to-purple-900/60 mix-blend-color-dodge"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 to-transparent"></div>

<svg className="absolute inset-0 w-full h-full opacity-40 mix-blend-overlay" preserveaspectratio="none" viewbox="0 0 100 100">
<filter id="noise">
<feturbulence basefrequency="0.8" numoctaves="3" stitchtiles="stitch" type="fractalNoise"></feturbulence>
</filter>
<rect filter="url(#noise)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] rounded-full border border-blue-500/20 rotate-[20deg] ring-pulse"></div>
</div>

<div className="absolute bottom-[10%] left-[20%] w-8 h-24 bg-gradient-to-t from-purple-900/40 to-blue-400/10 backdrop-blur-sm transform skew-y-12 rotate-12 border-l border-white/10 z-10 hidden lg:block"></div>
<div className="absolute bottom-[15%] right-[25%] w-6 h-16 bg-gradient-to-t from-purple-900/40 to-blue-400/10 backdrop-blur-sm transform -skew-y-12 -rotate-12 border-r border-white/10 z-10 hidden lg:block"></div>

<div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/30 via-transparent to-transparent blur-xl pointer-events-none"></div>
</main>

<footer className="relative z-20 flex flex-col-reverse md:flex-row items-start md:items-end justify-between gap-6">
<div className="max-w-md">
<h3 className="text-white text-lg font-medium tracking-tight mb-1">Discover Hatom – An Innovative,</h3>
<p className="text-white/60 text-lg font-normal tracking-tight">Non-custodial Ecosystem</p>
</div>

<div className="absolute left-1/2 -translate-x-1/2 bottom-0 hidden md:flex flex-col items-center gap-2">
<div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-[#a3ff12] to-transparent animate-pulse"></div>
<p className="text-[10px] uppercase font-bold tracking-[0.2em] text-white/80">Scroll to Discover</p>
</div>

<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="solar:chart-square-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<div className="text-xl md:text-2xl font-medium tracking-tight tabular-nums">$20 824 482</div>
<div className="text-sm text-white/50 font-normal">Total Value Locked</div>
</div>
</div>
</footer>
</div>
</div>
</div>


    </>
  );
}
