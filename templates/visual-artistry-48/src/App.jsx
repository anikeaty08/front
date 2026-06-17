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
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
dark: '#050505',
accent: '#d946ef', // Fuchsia
glow: '#4c1d95', // Violet
}
},
backgroundImage: {
'hero-gradient': 'linear-gradient(to bottom, rgba(5,5,5,0.3), rgba(5,5,5,1))',
'neon-glow': 'radial-gradient(circle at center, rgba(217, 70, 239, 0.15) 0%, rgba(5, 5, 5, 0) 70%)',
}
}
}
}



        // Initialize Lucide Icons
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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass border-b-0 border-white/5">
<div className="max-w-screen-2xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl tracking-tight group" href="#">
<span className="font-sans font-light text-white">VISUAL</span>
<span className="font-serif italic text-fuchsia-400 group-hover:text-fuchsia-300 transition-colors">Artistry</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-neutral-400">
<a className="hover:text-white transition-colors" href="#projects">Projects</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-white transition-colors" href="#studio">Studio</a>
</div>
<a className="hidden md:flex items-center gap-2 border border-white/10 rounded-full px-5 py-2 text-xs uppercase tracking-widest hover:border-fuchsia-500/50 hover:bg-fuchsia-500/10 transition-all duration-500 group" href="#contact">
<span>Book Studio</span>
<i className="w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Abstract Fluid AI Art" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-hero-gradient"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-fuchsia-600/20 blur-[120px] rounded-full mix-blend-screen animate-pulse duration-[4000ms]"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
<div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-fuchsia-500 animate-pulse"></span>
<span className="text-xs uppercase tracking-widest text-neutral-300">The Future of Visualization</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight text-white mb-6 leading-[1.1]">
<span className="block">VISUAL</span>
<span className="block italic font-light bg-clip-text text-transparent bg-gradient-to-r from-white via-fuchsia-200 to-fuchsia-400 pb-2">ARTISTRY</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                AI-Driven visual experiences for modern brands. We blend cinematic composition with generative intelligence to redefine digital aesthetics.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-8 py-3 bg-white text-black rounded-sm text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors w-full sm:w-auto" href="#projects">
                    Explore Projects
                </a>
<a className="px-8 py-3 border border-white/20 text-white rounded-sm text-sm font-medium tracking-wide hover:bg-white/5 hover:border-white/40 transition-all w-full sm:w-auto backdrop-blur-sm" href="#contact">
                    Contact Studio
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<i className="w-6 h-6 text-white" data-lucide="chevron-down"></i>
</div>
</header>

<section className="py-24 md:py-32 bg-brand-dark relative" id="projects">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-6">
<div>
<h2 className="text-3xl md:text-5xl font-serif text-white mb-2 tracking-tight">Selected Works</h2>
<p className="text-neutral-500 font-light">Curated AI-generated campaigns &amp; visualizations.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-sm text-fuchsia-400 hover:text-white transition-colors mt-4 md:mt-0" href="#">
                    View Archive <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/3] mb-4">
<div className="absolute inset-0 bg-neutral-900 animate-pulse z-0"></div> 
<img alt="Project 1" className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&amp;w=1074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-6">
<span className="text-xs font-medium uppercase tracking-wider text-white border border-white/30 px-3 py-1 backdrop-blur-md rounded-full">View Project</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white group-hover:text-fuchsia-400 transition-colors">Neon Horizon</h3>
<p className="text-sm text-neutral-500 mt-1">Automotive Campaign</p>
</div>
<span className="text-xs text-neutral-600 border border-neutral-800 px-2 py-1 rounded">2024</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/3] mb-4">
<img alt="Project 2" className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&amp;w=1064&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-6">
<span className="text-xs font-medium uppercase tracking-wider text-white border border-white/30 px-3 py-1 backdrop-blur-md rounded-full">View Project</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white group-hover:text-fuchsia-400 transition-colors">Ethereal Fashion</h3>
<p className="text-sm text-neutral-500 mt-1">Virtual Runway</p>
</div>
<span className="text-xs text-neutral-600 border border-neutral-800 px-2 py-1 rounded">2024</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden aspect-[4/3] mb-4">
<img alt="Project 3" className="relative z-10 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-6">
<span className="text-xs font-medium uppercase tracking-wider text-white border border-white/30 px-3 py-1 backdrop-blur-md rounded-full">View Project</span>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium text-white group-hover:text-fuchsia-400 transition-colors">Cyber Architecture</h3>
<p className="text-sm text-neutral-500 mt-1">Spatial Visualization</p>
</div>
<span className="text-xs text-neutral-600 border border-neutral-800 px-2 py-1 rounded">2023</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="gallery">

<div className="absolute left-0 top-1/4 w-96 h-96 bg-fuchsia-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="absolute right-0 bottom-1/4 w-96 h-96 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-screen-2xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-fuchsia-500 text-xs font-semibold tracking-widest uppercase">The Archive</span>
<h2 className="text-3xl md:text-4xl font-serif text-white mt-2 tracking-tight">Visual Exploration</h2>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">



<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-fuchsia-500/50 transition-colors pointer-events-none z-20"></div>
</div>
<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1618172193763-c511deb635ca?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
<span className="text-xs text-white uppercase tracking-widest border-b border-white">View</span>
</div>
</div>
<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1633511090164-b43840ea1607?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-75 group-hover:opacity-100" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="group relative aspect-[3/4] overflow-hidden cursor-crosshair">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-fuchsia-500/50 transition-colors pointer-events-none z-20"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative overflow-hidden">
<div className="max-w-screen-2xl mx-auto px-6">
<h2 className="text-3xl font-serif text-white mb-12 tracking-tight">Special Projects</h2>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="glass p-6 rounded-lg group hover:bg-white/5 transition-colors border border-white/5 hover:border-fuchsia-500/30">
<div className="aspect-square overflow-hidden rounded mb-6 relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1520697830682-bbb6e85e2b0b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs px-2 py-1 rounded">Concept</div>
</div>
<h3 className="text-2xl font-serif text-white mb-3">Project Aether</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                        An exploration into AI-driven fluid dynamics for high-end perfume commercial concepts.
                    </p>
<a className="inline-flex items-center text-sm text-white border-b border-fuchsia-500 pb-1 hover:text-fuchsia-400 transition-colors" href="#">
                        See More <i className="w-3 h-3 ml-2" data-lucide="arrow-right"></i>
</a>
</div>

<div className="glass p-6 rounded-lg group hover:bg-white/5 transition-colors border border-white/5 hover:border-fuchsia-500/30">
<div className="aspect-square overflow-hidden rounded mb-6 relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs px-2 py-1 rounded">CGI + AI</div>
</div>
<h3 className="text-2xl font-serif text-white mb-3">Neo-Tokyo 2050</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                        Urban planning visualization utilizing generative cityscapes and volumetric lighting.
                    </p>
<a className="inline-flex items-center text-sm text-white border-b border-fuchsia-500 pb-1 hover:text-fuchsia-400 transition-colors" href="#">
                        See More <i className="w-3 h-3 ml-2" data-lucide="arrow-right"></i>
</a>
</div>

<div className="glass p-6 rounded-lg group hover:bg-white/5 transition-colors border border-white/5 hover:border-fuchsia-500/30">
<div className="aspect-square overflow-hidden rounded mb-6 relative">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-black/60 backdrop-blur text-white text-xs px-2 py-1 rounded">Portrait</div>
</div>
<h3 className="text-2xl font-serif text-white mb-3">Synthetic Faces</h3>
<p className="text-neutral-400 text-sm font-light leading-relaxed mb-6">
                        Generating hyper-realistic diverse human portraits for global marketing campaigns.
                    </p>
<a className="inline-flex items-center text-sm text-white border-b border-fuchsia-500 pb-1 hover:text-fuchsia-400 transition-colors" href="#">
                        See More <i className="w-3 h-3 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative flex items-center" id="studio">

<div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-fuchsia-500/50 to-transparent hidden md:block"></div>
<div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
<div className="text-right md:pr-8">
<h2 className="text-4xl md:text-6xl font-serif text-white tracking-tight mb-4">About the<br/><span className="text-neutral-600">Studio.</span></h2>
<div className="flex justify-end mt-8">
<div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
<i className="w-8 h-8 text-fuchsia-500" data-lucide="aperture"></i>
</div>
</div>
</div>
<div className="md:pl-8">
<p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed mb-6">
                    Visual Artistry blends human creativity with cutting-edge AI to produce custom visuals for brands worldwide. 
                </p>
<p className="text-neutral-500 font-light leading-relaxed">
                    From product renders to architectural concepts, we transform abstract ideas into beautiful, high-fidelity AI-driven images and videos. We are not just prompt engineers; we are artists utilizing the next generation of tools.
                </p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-t border-white/5" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl font-serif text-white tracking-tight">Start a Project</h2>
<p className="text-neutral-500 font-light mt-2">Tell us about your vision. We'll handle the visualization.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500">Name</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-white focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500/50 transition-colors placeholder:text-neutral-700" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500">Email</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-white focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500/50 transition-colors placeholder:text-neutral-700" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-neutral-500">Message</label>
<textarea className="w-full bg-neutral-900 border border-neutral-800 rounded p-3 text-white focus:border-fuchsia-500 focus:outline-none focus:ring-1 focus:ring-fuchsia-500/50 transition-colors placeholder:text-neutral-700" placeholder="Describe your project..." rows="4"></textarea>
</div>
<div className="pt-4 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a> 
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
<button className="px-8 py-3 bg-fuchsia-700 text-white rounded hover:bg-fuchsia-600 transition-all shadow-[0_0_20px_rgba(162,28,175,0.3)] hover:shadow-[0_0_30px_rgba(162,28,175,0.5)] w-full md:w-auto" type="button">
                        Send Message
                    </button>
</div>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/5 py-12 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
<div className="max-w-screen-2xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<a className="text-lg tracking-tight font-serif italic text-white" href="#">Visual Artistry</a>
<p className="text-xs text-neutral-600 mt-1">© 2025 Visual Artistry — All Rights Reserved</p>
</div>
<div className="flex gap-6 text-xs text-neutral-500 uppercase tracking-wider">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
</div>
</footer>


    </>
  );
}
