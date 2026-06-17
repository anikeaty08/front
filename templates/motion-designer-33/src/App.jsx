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
      

<div className="grain"></div>

<nav className="fixed top-0 w-full z-40 px-6 py-4">
<div className="max-w-6xl mx-auto flex justify-between items-center glass rounded-full px-6 py-3">
<a className="text-white font-semibold tracking-tighter text-lg flex items-center gap-2" href="#">
<span className="bg-white text-black w-6 h-6 flex items-center justify-center rounded-sm text-xs font-bold">K</span>
                KAIRO
            </a>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-tight">
<a className="hover:text-white transition-colors duration-300" href="#work">Work</a>
<a className="hover:text-white transition-colors duration-300" href="#process">Process</a>
<a className="hover:text-white transition-colors duration-300" href="#about">About</a>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors" href="mailto:hello@kairo.design">
                Let's Talk
                <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="lucide:arrow-up-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center items-center pt-20 px-6 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-800/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 text-xs font-medium text-neutral-300 tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Available for Q4 Projects
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-[0.9] text-glow">
                Motion that stops<br/>
<span className="text-neutral-500">the scroll.</span>
</h1>
<p className="text-base md:text-lg text-neutral-400 max-w-lg mx-auto leading-relaxed font-light">
                Specialized in high-impact social media reels, 3D motion graphics, and kinetic typography for forward-thinking brands.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
<a className="h-12 px-8 rounded-full bg-white text-black font-medium text-sm flex items-center gap-2 hover:bg-neutral-200 transition-colors tracking-tight" href="#work">
<iconify-icon icon="lucide:play" strokeWidth="1.5" width="16"></iconify-icon>
                    Watch Showreel
                </a>
<a className="h-12 px-8 rounded-full border border-neutral-800 bg-black/50 text-white font-medium text-sm flex items-center gap-2 hover:bg-neutral-900 transition-colors tracking-tight" href="#process">
                    View Services
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-xs uppercase tracking-widest text-neutral-600">Scroll</span>
<iconify-icon icon="lucide:arrow-down" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</header>

<section className="py-24 px-6 relative" id="work">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter mb-2">Selected Works</h2>
<p className="text-neutral-500 text-sm">Curated motion for vertical screens.</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-white transition-colors">
<iconify-icon icon="lucide:arrow-left" strokeWidth="1.5" width="18"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 text-white transition-colors">
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Project" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon className="ml-1" icon="lucide:play" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-xs font-medium text-neutral-400 mb-1 block">Fintech</span>
<h3 className="text-lg font-medium text-white tracking-tight">Nova App Launch</h3>
</div>
</div>

<div className="group relative aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Project" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon className="ml-1" icon="lucide:play" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-xs font-medium text-neutral-400 mb-1 block">Lifestyle</span>
<h3 className="text-lg font-medium text-white tracking-tight">Summer Campaign</h3>
</div>
</div>

<div className="group relative aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Project" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon className="ml-1" icon="lucide:play" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-xs font-medium text-neutral-400 mb-1 block">Music</span>
<h3 className="text-lg font-medium text-white tracking-tight">Festival Recap</h3>
</div>
</div>

<div className="group relative aspect-[9/16] bg-neutral-900 rounded-2xl overflow-hidden cursor-pointer border border-white/5">
<img alt="Project" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white">
<iconify-icon className="ml-1" icon="lucide:play" strokeWidth="1.5" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<span className="text-xs font-medium text-neutral-400 mb-1 block">Tech</span>
<h3 className="text-lg font-medium text-white tracking-tight">Hardware Teaser</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-neutral-950 border-y border-white/5" id="process">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
<div className="lg:col-span-1 space-y-6">
<h2 className="text-3xl font-medium text-white tracking-tighter">Capabilities</h2>
<p className="text-neutral-400 leading-relaxed font-light">
                    Transforming raw concepts into fluid motion. I bridge the gap between static design and kinetic storytelling using industry-standard tools and a refined aesthetic sense.
                </p>
<div className="flex gap-4 pt-4">
<iconify-icon className="text-neutral-600" icon="lucide:figma" width="24"></iconify-icon>
<iconify-icon className="text-neutral-600" icon="lucide:framer" width="24"></iconify-icon>
<iconify-icon className="text-neutral-600" icon="lucide:video" width="24"></iconify-icon>
</div>
</div>
<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="p-6 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:smartphone" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Social Media Reels</h3>
<p className="text-sm text-neutral-500 leading-relaxed">High-retention vertical edits tailored for Instagram, TikTok, and Shorts. Fast-paced, rhythm-synced, and engaging.</p>
</div>

<div className="p-6 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Motion Systems</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Developing scalable motion languages for brands. Logos, lower thirds, and transition libraries.</p>
</div>

<div className="p-6 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:cuboid" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">3D Product Teasers</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Abstract and photorealistic 3D animations to showcase products in a clean, modern environment.</p>
</div>

<div className="p-6 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-white/10 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white/10 transition-colors">
<iconify-icon icon="lucide:music" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Sound Design</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Custom SFX and mixing to elevate the visual experience. Audio is 50% of the video.</p>
</div>
</div>
</div>
</section>

<div className="py-12 border-b border-white/5 overflow-hidden bg-black relative">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>
<div className="flex gap-16 items-center whitespace-nowrap animate-[scroll_20s_linear_infinite] opacity-40 hover:opacity-100 transition-opacity duration-500">

<span className="text-2xl font-medium tracking-tighter text-neutral-500">NIKE</span>
<span className="text-2xl font-medium tracking-tighter text-neutral-500">ADIDAS</span>
<span className="text-2xl font-medium tracking-tighter text-neutral-500">SPOTIFY</span>
<span className="text-2xl font-medium tracking-tighter text-neutral-500">RAYCAST</span>
<span className="text-2xl font-medium tracking-tighter text-neutral-500">LINEAR</span>
<span className="text-2xl font-medium tracking-tighter text-neutral-500">ARC</span>
<span className="text-2xl font-medium tracking-tighter text-neutral-500">FRAMER</span>
<span className="text-2xl font-medium tracking-tighter text-neutral-500">NIKE</span>
<span className="text-2xl font-medium tracking-tighter text-neutral-500">ADIDAS</span>
<span className="text-2xl font-medium tracking-tighter text-neutral-500">SPOTIFY</span>
<span className="text-2xl font-medium tracking-tighter text-neutral-500">RAYCAST</span>
</div>
<style>
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
        </style>
</div>

<footer className="py-32 px-6 bg-[#030303] relative overflow-hidden" id="about">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">Ready to move?</h2>
<p className="text-neutral-400 mb-10 font-light">
                Currently accepting new commissions for Q4 2024.<br/>Let's build something visually compelling.
            </p>
<a className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-medium text-base hover:scale-105 transition-transform duration-300" href="mailto:hello@kairo.design">
                Start a Project
                <iconify-icon icon="lucide:mail" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<div className="mt-20 flex flex-col items-center gap-6">
<div className="flex gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:dribbble" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
<p className="text-xs text-neutral-700 tracking-wide">
                    © 2024 KAIRO MOTION. ALL RIGHTS RESERVED.
                </p>
</div>
</div>
</footer>

    </>
  );
}
