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
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace'],
},
colors: {
black: '#050505',
zinc: {
850: '#1f1f1f',
900: '#121212',
}
},
letterSpacing: {
tightest: '-.05em',
widest: '.15em',
},
cursor: {
crosshair: 'crosshair',
}
}
}
}



        // Hero Interaction Logic
        const hero = document.getElementById('hero');
        const heroBg = document.getElementById('hero-bg');
        const cursor = document.getElementById('cursor');

        // Mouse Move for Hero Spotlight & Parallax
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            // Custom Cursor Position
            cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

            // Only apply Hero effects if hovering hero or slightly outside
            if (window.scrollY < window.innerHeight) {
                // Spotlight Position
                hero.style.setProperty('--x', x + 'px');
                hero.style.setProperty('--y', y + 'px');

                // Parallax Effect on Background
                const moveX = (x - window.innerWidth / 2) * 0.02;
                const moveY = (y - window.innerHeight / 2) * 0.02;
                heroBg.style.transform = `scale(1.1) translate(${-moveX}px, ${-moveY}px)`;
            }
            
            // Cursor interaction with clickable elements
            const target = e.target;
            if (target.tagName.toLowerCase() === 'a' || 
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') || 
                target.closest('button') ||
                target.closest('.group')) {
                cursor.classList.add('cursor-active');
            } else {
                cursor.classList.remove('cursor-active');
            }
        });

        // Timecode Generator
        function updateTimecode() {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            // Mock milliseconds/frames
            const f = String(Math.floor(now.getMilliseconds() / 40)).padStart(2, '0'); 
            document.getElementById('timecode').innerText = `${h}:${m}:${s}:${f}`;
            requestAnimationFrame(updateTimecode);
        }
        updateTimecode();

    
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
      

<div className="custom-cursor hidden md:block" id="cursor"></div>

<div className="grain-overlay"></div>

<nav className="fixed top-0 w-full z-50 mix-blend-difference text-white px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-12">
<a className="font-display font-semibold text-lg tracking-tighter uppercase z-50 hover:opacity-70 transition-opacity" href="#">Lia Film</a>
<div className="hidden md:flex gap-6 text-[11px] tracking-widest uppercase font-medium text-neutral-300">
<a className="hover:text-white transition-colors duration-300 relative group" href="#projects">
                    Work
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
</a>
<a className="hover:text-white transition-colors duration-300 relative group" href="#talent">
                    Talent
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
</a>
<a className="hover:text-white transition-colors duration-300 relative group" href="#services">
                    Studio
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white group-hover:w-full transition-all duration-300"></span>
</a>
</div>
</div>
<div className="flex items-center gap-8">

<div className="hidden md:flex font-mono text-xs text-neutral-400 gap-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-pulse mt-1"></span>
                REC <span id="timecode">00:00:00:00</span>
</div>
<div className="hidden md:flex gap-4 text-[11px] font-medium text-neutral-500">
<span className="text-white cursor-pointer">EN</span>
<span className="hover:text-white cursor-pointer transition-colors">JP</span>
</div>
<a className="hidden md:block text-[10px] uppercase tracking-widest border border-white/20 px-5 py-2 hover:bg-white hover:text-black transition-all duration-300" href="#contact">Contact</a>
</div>
</nav>

<header className="relative w-full h-screen flex flex-col justify-end px-6 pb-12 overflow-hidden cursor-none" id="hero">

<div className="absolute inset-0 w-full h-full z-0 transition-transform duration-100 ease-linear" id="hero-bg">
<img alt="Cinematic Background" className="w-full h-full object-cover grayscale brightness-[0.4] scale-110" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2942&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 w-full h-full pointer-events-none mix-blend-overlay opacity-80" id="hero-spotlight"></div>

<div className="absolute inset-0 w-full h-full z-10 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

<div className="relative z-30 w-full flex flex-col md:flex-row md:items-end justify-between gap-8 pointer-events-auto">
<div className="max-w-4xl relative">

<div className="absolute -top-12 -left-2 text-white/20">
<iconify-icon icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h1 className="font-display text-6xl md:text-9xl font-semibold tracking-tighter text-white leading-[0.85] mb-6 mix-blend-difference select-none">
<span className="block hover:ml-4 transition-all duration-500">VISUAL</span>
<span className="block text-neutral-500 hover:text-white transition-colors duration-500">ENGINEERING</span>
</h1>
<div className="flex items-center gap-6 mt-8">
<div className="h-[1px] w-12 bg-white/30"></div>
<p className="text-xs md:text-sm text-neutral-300 font-mono tracking-tight max-w-md uppercase">
                        Post-Production / Color / VFX <br/>
<span className="text-neutral-500">Shibuya, Tokyo — Est. 2021</span>
</p>
</div>
</div>
<div className="flex flex-col items-start md:items-end gap-6">

<div className="flex flex-col items-center gap-2">
<div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent opacity-50"></div>
<span className="text-[10px] text-neutral-500 uppercase tracking-widest writing-vertical-rl">Scroll</span>
</div>
</div>
</div>
</header>

<section className="py-10 border-b border-neutral-900 bg-black relative z-20">
<div className="px-6 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
<span className="font-display font-semibold text-sm tracking-widest uppercase hover:text-white transition-colors cursor-default">Chanel</span>
<span className="font-display font-semibold text-sm tracking-widest uppercase hover:text-white transition-colors cursor-default">Hermès</span>
<span className="font-display font-semibold text-sm tracking-widest uppercase hover:text-white transition-colors cursor-default">Nike</span>
<span className="font-display font-semibold text-sm tracking-widest uppercase hover:text-white transition-colors cursor-default">Adidas Y-3</span>
<span className="font-display font-semibold text-sm tracking-widest uppercase hover:text-white transition-colors cursor-default">Issey Miyake</span>
<span className="font-display font-semibold text-sm tracking-widest uppercase hover:text-white transition-colors cursor-default">Savage X Fenty</span>
<span className="font-display font-semibold text-sm tracking-widest uppercase hover:text-white transition-colors cursor-default">Paul Smith</span>
</div>
</section>

<section className="px-4 md:px-6 py-24 bg-black relative z-20" id="projects">
<div className="flex flex-col md:flex-row justify-between items-baseline mb-16 border-b border-neutral-900 pb-4">
<h2 className="text-[11px] font-medium tracking-widest uppercase text-neutral-500 mb-4 md:mb-0">Selected Works</h2>
<div className="flex gap-6 text-[10px] uppercase tracking-widest text-neutral-600">
<button className="text-white">All</button>
<button className="hover:text-white transition-colors">Edit</button>
<button className="hover:text-white transition-colors">Color</button>
<button className="hover:text-white transition-colors">VFX</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-20 md:gap-y-32">

<article className="group cursor-pointer">
<div className="aspect-video bg-neutral-900 overflow-hidden mb-6 relative">
<img alt="Chanel" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out filter contrast-125" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
<div className="w-16 h-16 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white" icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl md:text-2xl font-display font-medium text-white mb-2 group-hover:text-neutral-400 transition-colors">la GALERIE du 19M TOKYO</h3>
<p className="text-xs font-mono text-neutral-500 uppercase tracking-tight">Chanel — 2023</p>
</div>
<div className="text-right hidden md:block">
<span className="block text-[10px] uppercase tracking-widest text-white/60 mb-1">Post Production</span>
<span className="block text-[10px] text-neutral-600">Ed. Lia Wu &amp; Akira Polenghi</span>
</div>
</div>
</article>

<article className="group cursor-pointer md:mt-24">
<div className="aspect-video bg-neutral-900 overflow-hidden mb-6 relative">
<img alt="Hermes" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out filter contrast-125" src="https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
<div className="w-16 h-16 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white" icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl md:text-2xl font-display font-medium text-white mb-2 group-hover:text-neutral-400 transition-colors">GINZA CALLING – Men's Winter 2024</h3>
<p className="text-xs font-mono text-neutral-500 uppercase tracking-tight">Hermès — 2024</p>
</div>
<div className="text-right hidden md:block">
<span className="block text-[10px] uppercase tracking-widest text-white/60 mb-1">Color / Edit</span>
<span className="block text-[10px] text-neutral-600">Dir. Alexandre Silberstein</span>
</div>
</div>
</article>

<article className="group cursor-pointer">
<div className="aspect-video bg-neutral-900 overflow-hidden mb-6 relative">
<img alt="Adidas" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out filter contrast-125" src="https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
<div className="w-16 h-16 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white" icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl md:text-2xl font-display font-medium text-white mb-2 group-hover:text-neutral-400 transition-colors">Adidas Originals x BAPE®</h3>
<p className="text-xs font-mono text-neutral-500 uppercase tracking-tight">Adidas — 2023</p>
</div>
<div className="text-right hidden md:block">
<span className="block text-[10px] uppercase tracking-widest text-white/60 mb-1">VFX</span>
<span className="block text-[10px] text-neutral-600">Sup. Lia Wu</span>
</div>
</div>
</article>

<article className="group cursor-pointer md:mt-24">
<div className="aspect-video bg-neutral-900 overflow-hidden mb-6 relative">
<img alt="Savage Fenty" className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out filter contrast-125" src="https://images.unsplash.com/photo-1550950158-d0d960dff51b?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
<div className="w-16 h-16 rounded-full border border-white/30 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-white" icon="solar:play-linear" width="24"></iconify-icon>
</div>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl md:text-2xl font-display font-medium text-white mb-2 group-hover:text-neutral-400 transition-colors">SAVAGEXGAMEDAY by RIHANNA</h3>
<p className="text-xs font-mono text-neutral-500 uppercase tracking-tight">Savage X Fenty — 2023</p>
</div>
<div className="text-right hidden md:block">
<span className="block text-[10px] uppercase tracking-widest text-white/60 mb-1">VFX</span>
<span className="block text-[10px] text-neutral-600">Art. Michelle Recio</span>
</div>
</div>
</article>
</div>
<div className="mt-32 text-center">
<a className="inline-block border border-neutral-800 text-neutral-400 text-[11px] uppercase tracking-widest px-8 py-4 hover:bg-white hover:text-black hover:border-white transition-all duration-300" href="#">View Archive</a>
</div>
</section>

<section className="bg-zinc-900 py-24 px-4 md:px-6 relative overflow-hidden z-20" id="talent">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-black/20 to-transparent pointer-events-none"></div>
<div className="mb-12 border-b border-white/10 pb-4 flex justify-between items-end">
<h2 className="text-[11px] font-medium tracking-widest uppercase text-neutral-500">The Roster</h2>
<p className="text-[11px] text-neutral-600 hidden md:block uppercase tracking-wider">Represented Artists &amp; In-House Team</p>
</div>
<div className="flex flex-col">

<a className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/5 hover:border-white/20 transition-colors duration-500" href="#">
<div className="flex items-baseline gap-6 md:gap-12 z-10">
<span className="text-[10px] text-neutral-600 font-mono group-hover:text-white transition-colors">01</span>
<h3 className="text-4xl md:text-6xl font-display font-light text-neutral-400 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">Gaku Kamimura</h3>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-4 z-10">
<span className="text-[10px] uppercase tracking-widest text-neutral-600 group-hover:text-white transition-colors">Director</span>
<iconify-icon className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>

<div className="hidden md:block absolute right-[20%] top-1/2 -translate-y-1/2 w-56 h-72 bg-neutral-800 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none z-0 overflow-hidden grayscale rotate-2 group-hover:rotate-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&amp;w=2774&amp;auto=format&amp;fit=crop"/>
</div>
</a>

<a className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/5 hover:border-white/20 transition-colors duration-500" href="#">
<div className="flex items-baseline gap-6 md:gap-12 z-10">
<span className="text-[10px] text-neutral-600 font-mono group-hover:text-white transition-colors">02</span>
<h3 className="text-4xl md:text-6xl font-display font-light text-neutral-400 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">Lia Wu</h3>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-4 z-10">
<span className="text-[10px] uppercase tracking-widest text-neutral-600 group-hover:text-white transition-colors">Editor / VFX</span>
<iconify-icon className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>

<a className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/5 hover:border-white/20 transition-colors duration-500" href="#">
<div className="flex items-baseline gap-6 md:gap-12 z-10">
<span className="text-[10px] text-neutral-600 font-mono group-hover:text-white transition-colors">03</span>
<h3 className="text-4xl md:text-6xl font-display font-light text-neutral-400 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">Simon Boisx</h3>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-4 z-10">
<span className="text-[10px] uppercase tracking-widest text-neutral-600 group-hover:text-white transition-colors">Colourist</span>
<iconify-icon className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>

<a className="group relative flex flex-col md:flex-row md:items-center justify-between py-10 border-b border-white/5 hover:border-white/20 transition-colors duration-500" href="#">
<div className="flex items-baseline gap-6 md:gap-12 z-10">
<span className="text-[10px] text-neutral-600 font-mono group-hover:text-white transition-colors">04</span>
<h3 className="text-4xl md:text-6xl font-display font-light text-neutral-400 group-hover:text-white group-hover:translate-x-4 transition-all duration-500">Akira Polenghi</h3>
</div>
<div className="mt-4 md:mt-0 flex items-center gap-4 z-10">
<span className="text-[10px] uppercase tracking-widest text-neutral-600 group-hover:text-white transition-colors">Editor</span>
<iconify-icon className="text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</a>
</div>
</section>

<section className="bg-black py-24 px-4 md:px-6 relative z-20" id="services">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16">
<div className="md:col-span-4 flex flex-col justify-between">
<div>
<h2 className="text-3xl md:text-4xl font-display font-medium text-white mb-8 tracking-tight">Expertise</h2>
<p className="text-neutral-500 leading-relaxed mb-8 text-sm max-w-sm">
                        A full-service post-production house in the heart of Shibuya. We blend technical precision with artistic intuition to deliver world-class visuals for fashion, luxury, and culture.
                    </p>
</div>
<div className="hidden md:block">
<a className="text-[10px] uppercase tracking-widest border-b border-neutral-700 pb-1 hover:border-white hover:text-white transition-all" href="#">Download Studio Specs PDF</a>
</div>
</div>
<div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">

<div className="group border-l border-neutral-800 pl-6 hover:border-white transition-colors duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors mb-4" icon="solar:scissors-square-linear" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-2">Offline Editing</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Narrative crafting and rhythm finding. Avid &amp; Premiere Pro suites.</p>
</div>

<div className="group border-l border-neutral-800 pl-6 hover:border-white transition-colors duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors mb-4" icon="solar:palette-linear" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-2">Color Grading</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Davinci Resolve suite with calibrated Christie projection.</p>
</div>

<div className="group border-l border-neutral-800 pl-6 hover:border-white transition-colors duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors mb-4" icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-2">Online &amp; VFX</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Retouching, compositing, visual cleanup and delivery.</p>
</div>

<div className="group border-l border-neutral-800 pl-6 hover:border-white transition-colors duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors mb-4" icon="solar:music-note-linear" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-2">Sound Design</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Full mix capabilities, vocal recording and mastering.</p>
</div>

<div className="group border-l border-neutral-800 pl-6 hover:border-white transition-colors duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors mb-4" icon="solar:ruler-pen-linear" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-2">Motion Graphics</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Title treatment, typography and 2D/3D motion assets.</p>
</div>

<div className="group border-l border-neutral-800 pl-6 hover:border-white transition-colors duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors mb-4" icon="solar:armchair-2-linear" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-2">Studio Rental</h4>
<p className="text-xs text-neutral-500 leading-relaxed">Available for client sessions, screenings and offline reviews.</p>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-900 pt-32 pb-12 px-4 md:px-6 border-t border-neutral-800 relative z-20" id="contact">
<div className="flex flex-col md:flex-row justify-between items-start mb-24">
<div className="max-w-2xl">
<h2 className="text-6xl md:text-8xl font-display font-medium text-white tracking-tighter mb-8 leading-[0.9]">
                    LET'S CREATE<br/>
<span className="text-neutral-600">TOGETHER.</span>
</h2>
<div className="flex flex-col gap-2 mt-12">
<a className="inline-flex items-center gap-3 text-lg text-white hover:text-neutral-400 transition-colors" href="mailto:hello@liafilm.studio">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                        hello@liafilm.studio
                    </a>
<a className="inline-flex items-center gap-3 text-lg text-neutral-500 hover:text-white transition-colors" href="tel:+81300000000">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                        +81 (3) 0000-0000
                    </a>
</div>
</div>
<div className="mt-16 md:mt-0 flex flex-col gap-12 text-sm text-neutral-400">
<div className="flex gap-16">
<div>
<h5 className="text-[10px] uppercase tracking-widest text-neutral-600 mb-4">Location</h5>
<p className="text-white leading-relaxed">
                            Jingumae 6-Chome<br/>
                            Shibuya Ward,<br/>
                            Tokyo 150-0001
                        </p>
</div>
<div>
<h5 className="text-[10px] uppercase tracking-widest text-neutral-600 mb-4">Social</h5>
<div className="flex flex-col gap-2">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Vimeo</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-end border-t border-neutral-800 pt-8 gap-4">
<div className="flex items-center gap-2">
<span className="font-display font-bold text-xl tracking-tighter text-white">LIA FILM</span>
<span className="text-[10px] text-neutral-600 uppercase tracking-wider ml-2">© 2024</span>
</div>
<div className="flex gap-6 text-[10px] uppercase tracking-widest text-neutral-600">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</footer>



    </>
  );
}
