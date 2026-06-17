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
cyber: {
black: '#050505',
dark: '#0a0a0a',
charcoal: '#121212',
gray: '#1f1f1f',
red: '#DC2626',
redglow: 'rgba(220, 38, 38, 0.5)',
text: '#e5e5e5'
}
},
fontFamily: {
orbitron: ['Orbitron', 'sans-serif'],
rajdhani: ['Rajdhani', 'sans-serif'],
},
backgroundImage: {
'grid-pattern': "linear-gradient(to right, #1f1f1f 1px, transparent 1px), linear-gradient(to bottom, #1f1f1f 1px, transparent 1px)",
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        (function() {
            // Re-init icons to ensure they render
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }

            const track = document.getElementById('ts-track');
            const prevBtn = document.getElementById('ts-prev');
            const nextBtn = document.getElementById('ts-next');
            if (!track || !prevBtn || !nextBtn) return;
            
            let currentIndex = 0;
            const totalItems = 4;
            
            // Function to update slide position based on index and viewport
            const updateSlide = () => {
                const isMobile = window.innerWidth < 768;
                // On mobile we scroll 1 at a time (100% width).
                // On desktop we scroll 1 "page" at a time (which is 100% width, containing 2 items).
                // So translateX is simply index * 100%
                
                const percent = currentIndex * 100;
                track.style.transform = `translateX(-${percent}%)`;
            };

            prevBtn.onclick = () => {
                const isMobile = window.innerWidth < 768;
                // On mobile, max index is totalItems - 1
                // On desktop, max index is (totalItems / 2) - 1 => 1
                const maxIndex = isMobile ? (totalItems - 1) : Math.ceil(totalItems / 2) - 1;
                
                currentIndex--;
                if (currentIndex < 0) currentIndex = 0;
                
                updateSlide();
            };

            nextBtn.onclick = () => {
                const isMobile = window.innerWidth < 768;
                const maxIndex = isMobile ? (totalItems - 1) : Math.ceil(totalItems / 2) - 1;
                
                if (currentIndex >= maxIndex) {
                    currentIndex = 0; // Loop back to start
                } else {
                    currentIndex++;
                }
                updateSlide();
            };
            
            window.addEventListener('resize', () => {
                currentIndex = 0;
                updateSlide();
            });
        })();
    


        // Initialize Icons
        lucide.createIcons();

        // Simple Scanning Animation Keyframe injection
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes scan {
                0% { top: 0%; opacity: 0; }
                50% { opacity: 1; }
                100% { top: 100%; opacity: 0; }
            }
        `;
        document.head.appendChild(styleSheet);

        // Testimonial Slideshow Logic
        document.addEventListener('DOMContentLoaded', () => {
            const track = document.getElementById('track');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const slides = track.children;
            let currentIndex = 0;
            
            // Determine slides visible based on screen width for simple logic
            const getSlidesPerView = () => window.innerWidth >= 768 ? 2 : 1;
            
            const updateSlidePosition = () => {
                const slidesPerView = getSlidesPerView();
                const slideWidth = 100 / slidesPerView;
                const maxIndex = slides.length - slidesPerView;
                
                // Clamp index
                if (currentIndex < 0) currentIndex = 0;
                if (currentIndex > maxIndex) currentIndex = maxIndex;

                track.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
            };

            prevBtn.addEventListener('click', () => {
                currentIndex--;
                updateSlidePosition();
            });

            nextBtn.addEventListener('click', () => {
                currentIndex++;
                updateSlidePosition();
            });

            // Reset on resize
            window.addEventListener('resize', () => {
                currentIndex = 0;
                updateSlidePosition();
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
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 backdrop-blur-md bg-cyber-black/80 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 border border-cyber-red flex items-center justify-center transform -skew-x-12 group-hover:bg-cyber-red/10 transition-colors">
<i className="text-cyber-red w-6 h-6 transform skew-x-12" data-lucide="cpu"></i>
</div>
<span className="font-orbitron font-bold text-xl tracking-wider uppercase text-white">Interactive<span className="text-cyber-red">Warriors</span></span>
</div>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold tracking-widest uppercase hover:text-cyber-red transition-colors" href="#home">Home</a>
<a className="text-sm font-semibold tracking-widest uppercase hover:text-cyber-red transition-colors" href="#services">Services</a>
<a className="text-sm font-semibold tracking-widest uppercase hover:text-cyber-red transition-colors" href="#portfolio">Portfolio</a>
<a className="text-sm font-semibold tracking-widest uppercase hover:text-cyber-red transition-colors" href="#protocol">Protocol</a>
<a className="text-sm font-semibold tracking-widest uppercase hover:text-cyber-red transition-colors" href="#blog">Intel</a>
</div>

<button className="relative group hidden md:block">
<div className="absolute inset-0 bg-cyber-red transform -skew-x-12 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-all duration-300"></div>
<div className="relative px-8 py-2 font-orbitron font-bold text-sm tracking-widest uppercase text-white transform -skew-x-12">
<span className="transform skew-x-12 inline-block">Initiate Project</span>
</div>
</button>

<button className="lg:hidden text-white">
<i className="w-8 h-8" data-lucide="menu"></i>
</button>
</div>
</nav>

<section className="relative w-full h-screen flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Cyberpunk Tactical" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/50 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-cyber-black via-transparent to-cyber-black/40"></div>
</div>

<div className="absolute top-32 right-10 z-10 opacity-30 animate-pulse hidden lg:block">
<div className="w-64 h-64 border border-cyber-red/50 rounded-full border-dashed animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-0 flex items-center justify-center font-orbitron text-cyber-red text-xs">SYS.OP.ACTIVE</div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-3xl space-y-8">
<div className="flex items-center gap-4 text-cyber-red font-orbitron tracking-widest text-sm font-bold">
<span className="w-12 h-[2px] bg-cyber-red"></span>
                    SYSTEM ONLINE
                </div>
<h1 className="font-orbitron font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter text-white uppercase drop-shadow-2xl">
                    Build The <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Future.</span> <br/>
<span className="text-stroke-1 text-transparent" style={{WebkitTextStroke: '1px rgba(255,255,255,0.5)'}}>Break The System.</span>
</h1>
<p className="font-rajdhani text-lg md:text-2xl text-gray-300 max-w-xl leading-relaxed border-l-2 border-cyber-red pl-6">
                    We engineer immersive digital worlds powered by intelligence, design, and next-gen technology.
                </p>
<div className="flex flex-col sm:flex-row gap-6 pt-6">

<button className="relative group w-fit">
<div className="absolute inset-0 bg-cyber-red transform -skew-x-12 group-hover:scale-105 transition-transform duration-300"></div>
<div className="relative px-10 py-4 font-orbitron font-bold text-base tracking-widest uppercase text-white flex items-center gap-2">
<span>Start Project</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</button>

<button className="relative group w-fit">
<div className="absolute inset-0 border border-white transform -skew-x-12 bg-white/5 backdrop-blur-sm group-hover:bg-white/10 transition-all duration-300"></div>
<div className="relative px-10 py-4 font-orbitron font-bold text-base tracking-widest uppercase text-white">
                            View Portfolio
                        </div>
</button>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyber-black to-transparent z-20"></div>
</section>

<section className="relative py-32 bg-cyber-black overflow-hidden" id="services">

<div className="absolute top-0 left-0 w-full h-[1px] bg-white/10"></div>
<div className="absolute top-0 right-0 w-1/3 h-1 bg-cyber-red"></div>
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 bg-cyber-red"></div>
<span className="text-cyber-red text-xs font-orbitron tracking-widest uppercase">System Capabilities</span>
</div>
<h2 className="font-orbitron font-bold text-5xl text-white tracking-tighter uppercase mb-2">Service Protocols</h2>
</div>
<div className="font-orbitron text-cyber-red text-sm tracking-widest">SEC_LEVEL_09</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-cyber-charcoal border border-white/5 hover:border-cyber-red/50 transition-all duration-300 p-8 flex flex-col items-center text-center clip-frame hover:-translate-y-1">
<div className="w-16 h-16 mb-6 text-gray-500 group-hover:text-cyber-red transition-colors duration-300">
<i className="w-full h-full stroke-1" data-lucide="brain-circuit"></i>
</div>
<h3 className="font-orbitron text-lg font-bold text-white uppercase mb-2 group-hover:text-cyber-red transition-colors">AI / ML Development</h3>
<div className="w-8 h-[2px] bg-white/10 group-hover:bg-cyber-red mt-4 transition-colors"></div>
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="font-orbitron text-xs text-cyber-red/50">01</span>
</div>
</div>

<div className="group relative bg-cyber-charcoal border border-white/5 hover:border-cyber-red/50 transition-all duration-300 p-8 flex flex-col items-center text-center clip-frame hover:-translate-y-1">
<div className="w-16 h-16 mb-6 text-gray-500 group-hover:text-cyber-red transition-colors duration-300">
<i className="w-full h-full stroke-1" data-lucide="glasses"></i>
</div>
<h3 className="font-orbitron text-lg font-bold text-white uppercase mb-2 group-hover:text-cyber-red transition-colors">AR / VR Development</h3>
<div className="w-8 h-[2px] bg-white/10 group-hover:bg-cyber-red mt-4 transition-colors"></div>
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="font-orbitron text-xs text-cyber-red/50">02</span>
</div>
</div>

<div className="group relative bg-cyber-charcoal border border-white/5 hover:border-cyber-red/50 transition-all duration-300 p-8 flex flex-col items-center text-center clip-frame hover:-translate-y-1">
<div className="w-16 h-16 mb-6 text-gray-500 group-hover:text-cyber-red transition-colors duration-300">
<i className="w-full h-full stroke-1" data-lucide="gamepad-2"></i>
</div>
<h3 className="font-orbitron text-lg font-bold text-white uppercase mb-2 group-hover:text-cyber-red transition-colors">Game Development</h3>
<div className="w-8 h-[2px] bg-white/10 group-hover:bg-cyber-red mt-4 transition-colors"></div>
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="font-orbitron text-xs text-cyber-red/50">03</span>
</div>
</div>

<div className="group relative bg-cyber-charcoal border border-white/5 hover:border-cyber-red/50 transition-all duration-300 p-8 flex flex-col items-center text-center clip-frame hover:-translate-y-1">
<div className="w-16 h-16 mb-6 text-gray-500 group-hover:text-cyber-red transition-colors duration-300">
<i className="w-full h-full stroke-1" data-lucide="smartphone"></i>
</div>
<h3 className="font-orbitron text-lg font-bold text-white uppercase mb-2 group-hover:text-cyber-red transition-colors">Mobile App Dev</h3>
<div className="w-8 h-[2px] bg-white/10 group-hover:bg-cyber-red mt-4 transition-colors"></div>
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="font-orbitron text-xs text-cyber-red/50">04</span>
</div>
</div>

<div className="group relative bg-cyber-charcoal border border-white/5 hover:border-cyber-red/50 transition-all duration-300 p-8 flex flex-col items-center text-center clip-frame hover:-translate-y-1">
<div className="w-16 h-16 mb-6 text-gray-500 group-hover:text-cyber-red transition-colors duration-300">
<i className="w-full h-full stroke-1" data-lucide="box"></i>
</div>
<h3 className="font-orbitron text-lg font-bold text-white uppercase mb-2 group-hover:text-cyber-red transition-colors">2D / 3D Art</h3>
<div className="w-8 h-[2px] bg-white/10 group-hover:bg-cyber-red mt-4 transition-colors"></div>
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="font-orbitron text-xs text-cyber-red/50">05</span>
</div>
</div>

<div className="group relative bg-cyber-charcoal border border-white/5 hover:border-cyber-red/50 transition-all duration-300 p-8 flex flex-col items-center text-center clip-frame hover:-translate-y-1">
<div className="w-16 h-16 mb-6 text-gray-500 group-hover:text-cyber-red transition-colors duration-300">
<i className="w-full h-full stroke-1" data-lucide="terminal"></i>
</div>
<h3 className="font-orbitron text-lg font-bold text-white uppercase mb-2 group-hover:text-cyber-red transition-colors">IT Consulting</h3>
<div className="w-8 h-[2px] bg-white/10 group-hover:bg-cyber-red mt-4 transition-colors"></div>
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="font-orbitron text-xs text-cyber-red/50">06</span>
</div>
</div>

<div className="group relative bg-cyber-charcoal border border-white/5 hover:border-cyber-red/50 transition-all duration-300 p-8 flex flex-col items-center text-center clip-frame hover:-translate-y-1">
<div className="w-16 h-16 mb-6 text-gray-500 group-hover:text-cyber-red transition-colors duration-300">
<i className="w-full h-full stroke-1" data-lucide="layout-template"></i>
</div>
<h3 className="font-orbitron text-lg font-bold text-white uppercase mb-2 group-hover:text-cyber-red transition-colors">UI / UX Design</h3>
<div className="w-8 h-[2px] bg-white/10 group-hover:bg-cyber-red mt-4 transition-colors"></div>
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="font-orbitron text-xs text-cyber-red/50">07</span>
</div>
</div>

<div className="group relative bg-cyber-charcoal border border-white/5 hover:border-cyber-red/50 transition-all duration-300 p-8 flex flex-col items-center text-center clip-frame hover:-translate-y-1">
<div className="w-16 h-16 mb-6 text-gray-500 group-hover:text-cyber-red transition-colors duration-300">
<i className="w-full h-full stroke-1" data-lucide="shield-alert"></i>
</div>
<h3 className="font-orbitron text-lg font-bold text-white uppercase mb-2 group-hover:text-cyber-red transition-colors">Cyber Security</h3>
<div className="w-8 h-[2px] bg-white/10 group-hover:bg-cyber-red mt-4 transition-colors"></div>
<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="font-orbitron text-xs text-cyber-red/50">08</span>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-tactical border-t border-white/10" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-orbitron font-bold text-5xl text-white tracking-tighter uppercase mb-16 text-right">Project <span className="text-cyber-red">Archive</span></h2>
<div className="flex flex-col lg:flex-row gap-10 min-h-[600px]">

<div className="lg:w-7/12 relative h-[500px] lg:h-auto lg:sticky lg:top-24 self-start">
<div className="relative w-full h-full border-l-4 border-cyber-red bg-cyber-charcoal overflow-hidden group clip-angled-tr">
<div className="absolute inset-0 bg-black">
<img alt="Featured Project" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1496564203457-11bb12075d90?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:border-cyber-red group-hover:bg-cyber-red/20 transition-all cursor-pointer">
<i className="w-8 h-8 text-white fill-white ml-1" data-lucide="play"></i>
</div>
</div>

<div className="absolute bottom-10 left-10">
<div className="text-cyber-red font-orbitron text-xs tracking-widest mb-1">SECTOR_7 // CLASSIFIED</div>
<h3 className="text-4xl lg:text-5xl font-orbitron font-bold text-white uppercase">Project: Obsidian</h3>
<p className="text-gray-400 font-rajdhani mt-2 max-w-md">An advanced tactical interface for real-time drone swarm management.</p>
<div className="flex gap-4 mt-4">
<span className="bg-white/10 px-3 py-1 text-xs font-rajdhani uppercase tracking-wider text-white">FinTech</span>
<span className="bg-white/10 px-3 py-1 text-xs font-rajdhani uppercase tracking-wider text-white">2024</span>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20"></div>
</div>
</div>

<div className="lg:w-5/12 flex flex-col gap-4">

<div className="group relative p-6 border-l-2 border-white/10 bg-cyber-charcoal hover:bg-white/5 hover:border-cyber-red transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<h4 className="font-orbitron font-bold text-xl text-white group-hover:text-cyber-red transition-colors">FLIGHT SIM X</h4>
<i className="w-5 h-5 text-gray-600 group-hover:text-cyber-red transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-gray-400 font-rajdhani mb-3">Hyper-realistic aerospace training simulation with haptic feedback integration.</p>
<div className="flex gap-2 text-[10px] font-orbitron text-gray-500 uppercase tracking-wider">
<span>VR</span>
<span>•</span>
<span>Unity</span>
<span>•</span>
<span>2023</span>
</div>
</div>

<div className="group relative p-6 border-l-2 border-white/10 bg-cyber-charcoal hover:bg-white/5 hover:border-cyber-red transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<h4 className="font-orbitron font-bold text-xl text-white group-hover:text-cyber-red transition-colors">BRAIN INTERFACE</h4>
<i className="w-5 h-5 text-gray-600 group-hover:text-cyber-red transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-gray-400 font-rajdhani mb-3">Neural link dashboard for medical diagnostics using predictive AI models.</p>
<div className="flex gap-2 text-[10px] font-orbitron text-gray-500 uppercase tracking-wider">
<span>AI</span>
<span>•</span>
<span>MedTech</span>
<span>•</span>
<span>2024</span>
</div>
</div>

<div className="group relative p-6 border-l-2 border-white/10 bg-cyber-charcoal hover:bg-white/5 hover:border-cyber-red transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<h4 className="font-orbitron font-bold text-xl text-white group-hover:text-cyber-red transition-colors">DRONE SWARM UI</h4>
<i className="w-5 h-5 text-gray-600 group-hover:text-cyber-red transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-gray-400 font-rajdhani mb-3">Centralized command unit for autonomous perimeter defense systems.</p>
<div className="flex gap-2 text-[10px] font-orbitron text-gray-500 uppercase tracking-wider">
<span>Defense</span>
<span>•</span>
<span>UI/UX</span>
<span>•</span>
<span>2024</span>
</div>
</div>

<div className="group relative p-6 border-l-2 border-white/10 bg-cyber-charcoal hover:bg-white/5 hover:border-cyber-red transition-all cursor-pointer">
<div className="flex justify-between items-start mb-2">
<h4 className="font-orbitron font-bold text-xl text-white group-hover:text-cyber-red transition-colors">QUANTUM LEDGER</h4>
<i className="w-5 h-5 text-gray-600 group-hover:text-cyber-red transition-colors" data-lucide="arrow-up-right"></i>
</div>
<p className="text-sm text-gray-400 font-rajdhani mb-3">Blockchain visualization tool for high-frequency trading algorithms.</p>
<div className="flex gap-2 text-[10px] font-orbitron text-gray-500 uppercase tracking-wider">
<span>FinTech</span>
<span>•</span>
<span>Web3</span>
<span>•</span>
<span>2023</span>
</div>
</div>

<div className="mt-4">
<button className="w-full relative group">
<div className="absolute inset-0 border border-cyber-red/30 bg-cyber-red/5 transform skew-x-12 group-hover:bg-cyber-red/10 transition-colors"></div>
<div className="relative py-4 font-orbitron font-bold text-sm tracking-widest uppercase text-cyber-red flex items-center justify-center gap-2 transform skew-x-12">
<span>View All Projects</span>
<i className="w-4 h-4" data-lucide="grid"></i>
</div>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-cyber-black relative border-t border-white/5" id="protocol">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-20">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 bg-cyber-red"></div>
<span className="text-cyber-red text-xs font-orbitron tracking-widest uppercase">WORKFLOW SEQUENCE INITIALIZED</span>
</div>
<h2 className="font-orbitron font-black text-6xl text-white uppercase tracking-tighter">
                    OPERATION <span className="text-cyber-red">PROTOCOL</span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

<div className="relative group">
<div className="h-full bg-cyber-dark border border-white/5 p-6 hover:border-cyber-red/50 transition-colors duration-300 clip-angled-button flex flex-col justify-between min-h-[300px]">
<div className="">
<div className="text-[10px] text-gray-500 font-orbitron tracking-widest uppercase mb-4">SYSTEM PHASE</div>
<div className="font-orbitron font-bold text-5xl text-outline-red mb-6">01</div>
<h3 className="font-orbitron font-bold text-white text-lg uppercase leading-tight mb-4">STRATEGIC <br/> PLANNING</h3>
<p className="text-xs text-gray-400 font-rajdhani leading-relaxed">
                                We discuss goals, requirements, and project scope to clearly understand the client's needs.
                            </p>
</div>
</div>

<div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10 z-10"></div>
</div>

<div className="relative group mt-0 lg:mt-12">
<div className="h-full bg-cyber-dark border border-white/5 p-6 hover:border-cyber-red/50 transition-colors duration-300 clip-angled-button flex flex-col justify-between min-h-[300px]">
<div className="">
<div className="text-[10px] text-gray-500 font-orbitron tracking-widest uppercase mb-4">SYSTEM PHASE</div>
<div className="font-orbitron font-bold text-5xl text-outline-red mb-6">02</div>
<h3 className="font-orbitron font-bold text-white text-lg uppercase leading-tight mb-4">RESEARCH &amp; <br/> INNOVATION</h3>
<p className="text-xs text-gray-400 font-rajdhani leading-relaxed">
                                We analyze requirements, prepare architecture, and define a structured development plan.
                            </p>
</div>
</div>

<div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10 z-10"></div>
</div>

<div className="relative group">
<div className="h-full bg-cyber-dark border border-white/5 p-6 hover:border-cyber-red/50 transition-colors duration-300 clip-angled-button flex flex-col justify-between min-h-[300px]">
<div>
<div className="text-[10px] text-gray-500 font-orbitron tracking-widest uppercase mb-4">SYSTEM PHASE</div>
<div className="font-orbitron font-bold text-5xl text-outline-red mb-6">03</div>
<h3 className="font-orbitron font-bold text-white text-lg uppercase leading-tight mb-4">DESIGN &amp; <br/> DEVELOPMENT</h3>
<p className="text-xs text-gray-400 font-rajdhani leading-relaxed">
                                We design interfaces, user flows, and interactive prototypes for validation before development.
                            </p>
</div>
</div>

<div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10 z-10"></div>
</div>

<div className="relative group mt-0 lg:mt-12">
<div className="h-full bg-cyber-dark border border-white/5 p-6 hover:border-cyber-red/50 transition-colors duration-300 clip-angled-button flex flex-col justify-between min-h-[300px]">
<div>
<div className="text-[10px] text-gray-500 font-orbitron tracking-widest uppercase mb-4">SYSTEM PHASE</div>
<div className="font-orbitron font-bold text-5xl text-outline-red mb-6">04</div>
<h3 className="font-orbitron font-bold text-white text-lg uppercase leading-tight mb-4">DEPLOYMENT</h3>
<p className="text-xs text-gray-400 font-rajdhani leading-relaxed">
                                We build the product using modern technologies and scalable architecture.
                            </p>
</div>
</div>

<div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10 z-10"></div>
</div>

<div className="relative group">
<div className="h-full bg-cyber-dark border border-white/5 p-6 hover:border-cyber-red/50 transition-colors duration-300 clip-angled-button flex flex-col justify-between min-h-[300px]">
<div>
<div className="text-[10px] text-gray-500 font-orbitron tracking-widest uppercase mb-4">SYSTEM PHASE</div>
<div className="font-orbitron font-bold text-5xl text-outline-red mb-6">05</div>
<h3 className="font-orbitron font-bold text-white text-lg uppercase leading-tight mb-4">MAINTENANCE &amp; <br/> SUPPORT</h3>
<p className="text-xs text-gray-400 font-rajdhani leading-relaxed">
                                We test performance, fix issues, deploy the system, and prepare it for real-world usage.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-tactical relative overflow-hidden">
<div className="absolute inset-0 bg-cyber-black/80"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex justify-between items-end mb-12">
<h2 className="font-orbitron font-bold text-4xl text-white uppercase tracking-tighter">
            Client <span className="text-cyber-red">Transmissions</span>
</h2>
<div className="flex gap-4">
<button className="w-14 h-10 border border-white/10 bg-cyber-black hover:border-cyber-red hover:bg-cyber-red/10 text-white flex items-center justify-center transition-all duration-300 -skew-x-12 group" id="ts-prev">
<svg className="lucide lucide-chevron-left w-5 h-5 skew-x-12 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="w-14 h-10 border border-white/10 bg-cyber-black hover:border-cyber-red hover:bg-cyber-red/10 text-white flex items-center justify-center transition-all duration-300 -skew-x-12 group" id="ts-next">
<svg className="lucide lucide-chevron-right w-5 h-5 skew-x-12 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="overflow-visible -mx-4 pb-8">

<div className="overflow-hidden px-2">
<div className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" id="ts-track">

<div className="w-full md:w-1/2 flex-shrink-0 px-4 py-2">
<div className="h-full bg-cyber-dark border-l-4 border-cyber-red relative -skew-x-12 hover:bg-white/5 transition-all duration-300 group shadow-lg hover:shadow-cyber-red/20 hover:-translate-y-1">

<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
<div className="skew-x-12 p-8 h-full flex flex-col relative">
<div className="mb-6 text-cyber-red/50 group-hover:text-cyber-red transition-colors">
<svg className="lucide lucide-quote" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="font-rajdhani text-xl text-gray-300 italic mb-8 flex-grow leading-relaxed">
                                "Interactive Warriors didn't just build our platform — they built our competitive advantage. The tactical precision in their UX is unmatched."
                            </p>
<div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
<img className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all object-cover border border-white/10" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-orbitron font-bold text-white uppercase text-sm group-hover:text-cyber-red transition-colors">Alex Chen</div>
<div className="text-[10px] text-gray-500 tracking-widest uppercase">CTO, Neural Dynamics</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 flex-shrink-0 px-4 py-2">
<div className="h-full bg-cyber-dark border-r-4 border-white/20 relative -skew-x-12 hover:bg-white/5 transition-all duration-300 group shadow-lg hover:shadow-white/10 hover:-translate-y-1">
<div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
<div className="skew-x-12 p-8 h-full flex flex-col relative text-right">
<div className="mb-6 text-gray-600 group-hover:text-cyber-red transition-colors flex justify-end">
<svg className="lucide lucide-quote" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="font-rajdhani text-xl text-gray-300 italic mb-8 flex-grow leading-relaxed">
                                "A military-grade execution of a complex creative vision. They operate on a different frequency than any other studio."
                            </p>
<div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto justify-end">
<div className="text-right">
<div className="font-orbitron font-bold text-white uppercase text-sm group-hover:text-cyber-red transition-colors">Sarah Vance</div>
<div className="text-[10px] text-gray-500 tracking-widest uppercase">Director, CyberCore</div>
</div>
<img className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all object-cover border border-white/10" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 flex-shrink-0 px-4 py-2">
<div className="h-full bg-cyber-dark border-l-4 border-cyber-red relative -skew-x-12 hover:bg-white/5 transition-all duration-300 group shadow-lg hover:shadow-cyber-red/20 hover:-translate-y-1">
<div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
<div className="skew-x-12 p-8 h-full flex flex-col relative">
<div className="mb-6 text-cyber-red/50 group-hover:text-cyber-red transition-colors">
<svg className="lucide lucide-quote" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="font-rajdhani text-xl text-gray-300 italic mb-8 flex-grow leading-relaxed">
                                "The AR implementation for our training module was flawless. We saw a 40% increase in retention rates immediately."
                            </p>
<div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto">
<img className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all object-cover border border-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-orbitron font-bold text-white uppercase text-sm group-hover:text-cyber-red transition-colors">Marcus Thorne</div>
<div className="text-[10px] text-gray-500 tracking-widest uppercase">Lead, Titan Defense</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full md:w-1/2 flex-shrink-0 px-4 py-2">
<div className="h-full bg-cyber-dark border-r-4 border-white/20 relative -skew-x-12 hover:bg-white/5 transition-all duration-300 group shadow-lg hover:shadow-white/10 hover:-translate-y-1">
<div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
<div className="skew-x-12 p-8 h-full flex flex-col relative text-right">
<div className="mb-6 text-gray-600 group-hover:text-cyber-red transition-colors flex justify-end">
<svg className="lucide lucide-quote" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="font-rajdhani text-xl text-gray-300 italic mb-8 flex-grow leading-relaxed">
                                "Security was our top priority. Their team delivered a fortress of code wrapped in beautiful UI."
                            </p>
<div className="flex items-center gap-4 border-t border-white/10 pt-6 mt-auto justify-end">
<div className="text-right">
<div className="font-orbitron font-bold text-white uppercase text-sm group-hover:text-cyber-red transition-colors">Elena Rostova</div>
<div className="text-[10px] text-gray-500 tracking-widest uppercase">CEO, NetShield</div>
</div>
<img className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all object-cover border border-white/10" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="py-32 bg-cyber-black border-t border-white/5" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center mb-16">
<h2 className="font-orbitron font-bold text-4xl text-white uppercase">System <span className="text-cyber-red">Intel</span></h2>
<div className="hidden md:flex gap-4">
<span className="text-xs font-orbitron text-cyber-red cursor-pointer underline underline-offset-4">AI_RESEARCH</span>
<span className="text-xs font-orbitron text-gray-500 hover:text-white cursor-pointer transition-colors">XR_DEV</span>
<span className="text-xs font-orbitron text-gray-500 hover:text-white cursor-pointer transition-colors">SECURITY</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/3] mb-4 border-b-2 border-transparent group-hover:border-cyber-red transition-all">
<img alt="Blog 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-cyber-red text-white text-[10px] font-orbitron font-bold px-2 py-1 uppercase">Analysis</div>
</div>
<h3 className="font-orbitron font-bold text-xl text-white mb-2 group-hover:text-cyber-red transition-colors">The Ethics of Sentient AI</h3>
<p className="text-sm text-gray-400 line-clamp-2 font-rajdhani">Examining the moral boundaries of next-generation language models in defense sectors.</p>
<div className="flex justify-between mt-4 text-xs text-gray-600 font-mono">
<span>UNIT: 402</span>
<span>2024.10.12</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/3] mb-4 border-b-2 border-transparent group-hover:border-cyber-red transition-all">
<img alt="Blog 2" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-cyber-charcoal border border-white/20 text-white text-[10px] font-orbitron font-bold px-2 py-1 uppercase">Tech</div>
</div>
<h3 className="font-orbitron font-bold text-xl text-white mb-2 group-hover:text-cyber-red transition-colors">Cybersecurity in the Quantum Age</h3>
<p className="text-sm text-gray-400 line-clamp-2 font-rajdhani">Preparing infrastructure for the inevitable collapse of standard encryption protocols.</p>
<div className="flex justify-between mt-4 text-xs text-gray-600 font-mono">
<span>UNIT: 881</span>
<span>2024.09.28</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/3] mb-4 border-b-2 border-transparent group-hover:border-cyber-red transition-all">
<img alt="Blog 3" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-cyber-charcoal border border-white/20 text-white text-[10px] font-orbitron font-bold px-2 py-1 uppercase">Design</div>
</div>
<h3 className="font-orbitron font-bold text-xl text-white mb-2 group-hover:text-cyber-red transition-colors">UI Design for AR Combat HUDs</h3>
<p className="text-sm text-gray-400 line-clamp-2 font-rajdhani">Minimizing cognitive load while maximizing information density in augmented reality.</p>
<div className="flex justify-between mt-4 text-xs text-gray-600 font-mono">
<span>UNIT: 112</span>
<span>2024.09.15</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-cyber-dark relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-red to-transparent opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl font-orbitron font-bold text-white uppercase tracking-widest mb-2">Establish <span className="text-cyber-red animate-pulse">Uplink</span></h2>
<p className="text-gray-400 mb-8 font-rajdhani">Subscribe to secure channel for intelligence briefings.</p>
<div className="relative max-w-lg mx-auto transform -skew-x-12 p-1 bg-white/5 border border-white/10 flex">
<input className="w-full bg-transparent border-none text-white px-6 py-3 font-orbitron text-sm outline-none placeholder-gray-600" placeholder="ENTER ENCRYPTED ID" type="email"/>
<button className="bg-cyber-red hover:bg-red-700 text-white font-orbitron font-bold px-8 py-3 transition-colors uppercase tracking-wider text-sm flex items-center gap-2">
                    Connect <i className="w-4 h-4" data-lucide="wifi"></i>
</button>
</div>
</div>
</section>

<section className="py-32 bg-cyber-black relative" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

<div className="space-y-12">
<div>
<h2 className="font-orbitron font-black text-6xl text-white uppercase leading-none mb-6">Secure <br/> Channel</h2>
<p className="text-xl text-gray-400 font-rajdhani border-l-2 border-cyber-red pl-6">
                        Ready to deploy? Transmission lines are open. 
                        We operate globally, independent of time zones.
                    </p>
</div>
<div className="space-y-6 font-orbitron tracking-wider text-sm">
<div className="flex items-center gap-4 text-gray-300">
<div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-cyber-red" data-lucide="map-pin"></i>
</div>
<div>
<div className="text-xs text-gray-500">BASE_OF_OPERATIONS</div>
<div>NEO TOKYO, SECTOR 4</div>
</div>
</div>
<div className="flex items-center gap-4 text-gray-300">
<div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-white/10">
<i className="w-5 h-5 text-cyber-red" data-lucide="mail"></i>
</div>
<div>
<div className="text-xs text-gray-500">ENCRYPTED_MAIL</div>
<div>COMMS@WARRIORS.TECH</div>
</div>
</div>
</div>
</div>

<div className="relative p-10 bg-white/5 border border-white/10 backdrop-blur-md clip-angled-tr">
<form className="space-y-8">
<div className="grid grid-cols-2 gap-8">
<div className="group">
<label className="block text-xs font-orbitron text-cyber-red mb-2">CODENAME</label>
<input className="w-full bg-transparent border-b border-gray-700 focus:border-cyber-red text-white py-2 outline-none transition-colors font-rajdhani text-lg rounded-none" type="text"/>
</div>
<div className="group">
<label className="block text-xs font-orbitron text-cyber-red mb-2">UPLINK_ADDR</label>
<input className="w-full bg-transparent border-b border-gray-700 focus:border-cyber-red text-white py-2 outline-none transition-colors font-rajdhani text-lg rounded-none" type="email"/>
</div>
</div>
<div className="group">
<label className="block text-xs font-orbitron text-cyber-red mb-2">MISSION_OBJECTIVE</label>
<select className="w-full bg-transparent border-b border-gray-700 focus:border-cyber-red text-white py-2 outline-none transition-colors font-rajdhani text-lg rounded-none appearance-none">
<option className="bg-cyber-black">System Architecture</option>
<option className="bg-cyber-black">Visual Design</option>
<option className="bg-cyber-black">Security Audit</option>
</select>
</div>
<div className="group">
<label className="block text-xs font-orbitron text-cyber-red mb-2">TRANSMISSION</label>
<textarea className="w-full bg-transparent border-b border-gray-700 focus:border-cyber-red text-white py-2 outline-none transition-colors font-rajdhani text-lg rounded-none" rows="4"></textarea>
</div>
<button className="w-full bg-cyber-red/10 border border-cyber-red text-cyber-red hover:bg-cyber-red hover:text-white font-orbitron font-bold py-4 uppercase tracking-widest transition-all duration-300 flex justify-center items-center gap-3 group" type="button">
<div className="w-full h-[1px] bg-cyber-red/50 group-hover:bg-white/50 w-10"></div>
                        Transmit Message
                        <div className="w-full h-[1px] bg-cyber-red/50 group-hover:bg-white/50 w-10"></div>
</button>

<div className="absolute top-0 left-0 w-full h-1 bg-cyber-red opacity-20 animate-[scan_3s_linear_infinite]"></div>
</form>
</div>
</div>
</section>

<footer className="bg-cyber-black border-t-2 border-cyber-red pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div>
<div className="font-orbitron font-bold text-white mb-6 uppercase">Navigation</div>
<ul className="space-y-3 font-rajdhani text-gray-400 text-sm">
<li><a className="hover:text-cyber-red transition-colors" href="#">Home</a></li>
<li><a className="hover:text-cyber-red transition-colors" href="#">Services</a></li>
<li><a className="hover:text-cyber-red transition-colors" href="#">Case Studies</a></li>
<li><a className="hover:text-cyber-red transition-colors" href="#">Intel</a></li>
</ul>
</div>
<div>
<div className="font-orbitron font-bold text-white mb-6 uppercase">Services</div>
<ul className="space-y-3 font-rajdhani text-gray-400 text-sm">
<li><a className="hover:text-cyber-red transition-colors" href="#">AI Development</a></li>
<li><a className="hover:text-cyber-red transition-colors" href="#">Cyber Security</a></li>
<li><a className="hover:text-cyber-red transition-colors" href="#">XR / VR</a></li>
<li><a className="hover:text-cyber-red transition-colors" href="#">Game Eng</a></li>
</ul>
</div>
<div>
<div className="font-orbitron font-bold text-white mb-6 uppercase">Legal</div>
<ul className="space-y-3 font-rajdhani text-gray-400 text-sm">
<li><a className="hover:text-cyber-red transition-colors" href="#">Protocols</a></li>
<li><a className="hover:text-cyber-red transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-cyber-red transition-colors" href="#">Terms</a></li>
</ul>
</div>
<div>
<div className="font-orbitron font-bold text-white mb-6 uppercase">Connect</div>
<div className="flex gap-4">
<a className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:border-cyber-red hover:text-cyber-red transition-all" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:border-cyber-red hover:text-cyber-red transition-all" href="#">
<i className="w-4 h-4" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 border border-white/20 flex items-center justify-center text-white hover:border-cyber-red hover:text-cyber-red transition-all" href="#">
<i className="w-4 h-4" data-lucide="github"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-gray-600 font-mono">
                    © 2077 INTERACTIVE WARRIORS SYSTEMS. ALL RIGHTS RESERVED.
                </div>
<div className="text-xs text-gray-600 font-mono">
                    SYSTEM STATUS: <span className="text-green-500">NORMAL</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
