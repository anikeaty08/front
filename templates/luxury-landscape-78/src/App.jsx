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
},
colors: {
stone: {
50: '#fafaf9',
100: '#f5f5f4',
200: '#e7e5e4',
300: '#d6d3d1',
400: '#a8a29e',
500: '#78716c',
600: '#57534e',
800: '#292524',
900: '#1c1917',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-stone-50/80 border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm font-semibold tracking-tighter uppercase z-50 relative group" href="#">
                Arbor<span className="text-stone-400">&amp;</span>Stone
            </a>

<div className="hidden md:flex items-center gap-8 text-xs font-medium text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-stone-900 transition-colors" href="#projects">Projects</a>
<a className="hover:text-stone-900 transition-colors" href="#expertise">Expertise</a>
<a className="bg-stone-900 text-white px-4 py-2 rounded-full hover:bg-stone-800 transition-all hover:scale-[1.02]" href="#inquire">
                    Start Project
                </a>
</div>

<button className="md:hidden text-stone-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-12 px-6 max-w-7xl mx-auto border-x border-stone-200/50">

<div className="fade-in-up max-w-5xl mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-200 bg-white text-stone-500 text-[10px] uppercase tracking-wide font-medium mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse"></span>
                Available for 2024 Commissions
            </div>
<h1 className="text-6xl md:text-9xl font-medium tracking-tighter leading-[0.9] text-stone-900 mb-6">
                Architecture <br/>
<span className="text-stone-400 italic font-light">for the living earth.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 font-light max-w-xl leading-relaxed tracking-tight">
                We sculpt outdoor sanctuaries that balance structural precision with organic chaos.
            </p>
</div>

<div className="relative w-full h-[600px] md:h-[700px] rounded-2xl overflow-hidden fade-in-up delay-200 group">

<img alt="Luxury Modern Garden with Pool" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-stone-900/40"></div>

<div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-[calc(100%-3rem)] md:w-96 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-xl shadow-2xl overflow-hidden text-white">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 bg-white rounded-full"></div>
<span className="text-xs font-medium tracking-wide uppercase opacity-80">Project Analysis</span>
</div>
<iconify-icon className="opacity-60" icon="solar:settings-linear" width="16"></iconify-icon>
</div>
<div className="space-y-5">
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] uppercase tracking-wider opacity-70">Biophilic Index</span>
<span className="text-xs font-mono">94%</span>
</div>
<input className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-grab" max="100" min="0" type="range" value="94"/>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-[10px] uppercase tracking-wider opacity-70">Spatial Flow</span>
<span className="text-xs font-mono">Optimal</span>
</div>

<div className="flex gap-1 h-1 w-full">
<div className="flex-1 bg-white/90 rounded-full"></div>
<div className="flex-1 bg-white/90 rounded-full"></div>
<div className="flex-1 bg-white/90 rounded-full"></div>
<div className="flex-1 bg-white/40 rounded-full"></div>
</div>
</div>
</div>
<div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
<div>
<p className="text-[10px] opacity-60 uppercase tracking-widest">Location</p>
<p className="text-sm font-medium mt-0.5">Hidden Hills, CA</p>
</div>
<button className="w-8 h-8 rounded-full bg-white text-stone-900 flex items-center justify-center hover:scale-110 transition-transform">
<iconify-icon icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="absolute top-6 right-6 md:top-10 md:right-10 flex gap-2">
<div className="bg-black/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full text-white text-xs font-medium flex items-center gap-2">
<iconify-icon icon="solar:camera-linear" width="14"></iconify-icon>
<span>View Gallery</span>
</div>
</div>
</div>
</header>

<div className="border-y border-stone-200 bg-white overflow-hidden py-6">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-30 grayscale hover:opacity-50 transition-opacity duration-500">
<iconify-icon className="text-stone-900" icon="solar:mountains-linear" width="32"></iconify-icon>
<iconify-icon className="text-stone-900" icon="solar:home-smile-linear" width="32"></iconify-icon>
<iconify-icon className="text-stone-900" icon="solar:leaf-linear" width="32"></iconify-icon>
<iconify-icon className="text-stone-900" icon="solar:sun-2-linear" width="32"></iconify-icon>
<iconify-icon className="text-stone-900" icon="solar:waterdrops-linear" width="32"></iconify-icon>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-x border-stone-200/50" id="expertise">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-stone-900">Technical Organicism</h2>
<p className="mt-4 text-sm text-stone-500 max-w-md leading-relaxed">
                    We employ a rigorous architectural approach to natural chaos, organizing flora and stone into functional, breathing art.
                </p>
</div>
<a className="text-xs font-medium uppercase tracking-wide border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors" href="#">View Methodology</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden">

<div className="bg-stone-50 p-8 md:p-10 hover:bg-white transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:ruler-pen-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight mb-2">Topographic Planning</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                    Precise grading and elevation mapping to ensure optimal water flow and spatial dynamics.
                </p>
</div>

<div className="bg-stone-50 p-8 md:p-10 hover:bg-white transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sprout-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight mb-2">Native Curation</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                    Selection of climate-resilient flora that thrives in your specific micro-ecosystem.
                </p>
</div>

<div className="bg-stone-50 p-8 md:p-10 hover:bg-white transition-colors duration-300 group">
<div className="w-10 h-10 rounded-lg bg-stone-100 flex items-center justify-center text-stone-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:lightbulb-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-stone-900 tracking-tight mb-2">Adaptive Lighting</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                    Low-voltage, integrated lighting systems that transform the landscape at twilight.
                </p>
</div>
</div>
</section>

<section className="bg-stone-900 text-stone-50 py-24 md:py-32" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-3 mb-12">
<div className="h-px bg-stone-700 flex-1"></div>
<span className="text-xs uppercase tracking-widest text-stone-400">Selected Works</span>
<div className="h-px bg-stone-700 flex-1"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">

<div className="group cursor-pointer">
<div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 relative">
<img alt="Zen Garden" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-stone-900/50 backdrop-blur border border-stone-700 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-medium tracking-tight">Kyoto Minimalist Courtyard</h3>
<p className="text-stone-400 text-sm mt-2">Private Residence — 2023</p>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="aspect-[4/5] overflow-hidden rounded-lg mb-6 relative">
<img alt="Modern Poolside" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 right-4 bg-stone-900/50 backdrop-blur border border-stone-700 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-white" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-2xl font-medium tracking-tight">The Brutalist Estate</h3>
<p className="text-stone-400 text-sm mt-2">Commercial Headquarters — 2022</p>
</div>
</div>
<div className="mt-16 text-center">
<button className="border border-stone-700 text-stone-300 px-6 py-3 rounded-full hover:bg-white hover:text-stone-900 transition-colors text-xs font-medium uppercase tracking-wide">
                    View Complete Archive
                </button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 md:py-32 border-x border-stone-200/50">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tighter text-stone-900 mb-4">Material Palette</h2>
<p className="text-stone-500 mb-8 leading-relaxed">
                    Select your preferred hardscape materials to visualize the textural composition of your project.
                </p>
<div className="space-y-3">

<label className="custom-checkbox flex items-center gap-4 p-4 border border-stone-200 rounded-xl cursor-pointer hover:border-stone-400 transition-colors bg-white">
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-stone-300 rounded transition-colors flex items-center justify-center">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-stone-900">Limestone Pavers</span>
<span className="text-xs text-stone-400">Imported</span>
</div>
<p className="text-xs text-stone-500 mt-0.5">Warm, organic texture with high durability.</p>
</div>
</label>

<label className="custom-checkbox flex items-center gap-4 p-4 border border-stone-200 rounded-xl cursor-pointer hover:border-stone-400 transition-colors bg-white">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-stone-300 rounded transition-colors flex items-center justify-center">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-stone-900">Black Basalt Gravel</span>
<span className="text-xs text-stone-400">Local</span>
</div>
<p className="text-xs text-stone-500 mt-0.5">Modern contrast for walkways and beds.</p>
</div>
</label>

<label className="custom-checkbox flex items-center gap-4 p-4 border border-stone-200 rounded-xl cursor-pointer hover:border-stone-400 transition-colors bg-white">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 border border-stone-300 rounded transition-colors flex items-center justify-center">
<svg className="w-3 h-3 text-white hidden" fill="none" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<div className="flex-1">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-stone-900">Weathered Corten Steel</span>
<span className="text-xs text-stone-400">Custom</span>
</div>
<p className="text-xs text-stone-500 mt-0.5">Retaining walls and sculptural elements.</p>
</div>
</label>
</div>
</div>
<div className="relative h-full min-h-[400px] bg-stone-100 rounded-2xl overflow-hidden border border-stone-200">
<img className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex items-end p-8">
<p className="text-white text-sm font-medium tracking-wide">Visualizing Texture Harmony</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-stone-200 bg-stone-50" id="inquire">
<div className="max-w-3xl mx-auto px-6 text-center">
<iconify-icon className="text-stone-400 mb-6" icon="solar:letter-linear" width="32"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-stone-900 mb-6">Start the conversation.</h2>
<p className="text-stone-500 mb-10 text-lg font-light">
                We accept a limited number of commissions annually to ensure dedicated attention to every detail.
            </p>
<form className="max-w-md mx-auto text-left space-y-4">
<div>
<label className="block text-xs font-medium text-stone-700 mb-1">Email Address</label>
<input className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all text-sm" placeholder="client@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-700 mb-1">Project Scope</label>
<div className="relative">
<select className="w-full bg-white border border-stone-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-400 transition-all text-sm appearance-none text-stone-500">
<option>Full Landscape Design</option>
<option>Hardscape Installation</option>
<option>Garden Renovation</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-stone-900 text-white font-medium py-3 rounded-lg hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 mt-4" type="button">
<span>Inquire Now</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-sm font-bold tracking-tighter uppercase" href="#">Arbor<span className="text-stone-400">&amp;</span>Stone</a>
<p className="mt-4 text-xs text-stone-500 leading-relaxed max-w-xs">
                        Defining the modern landscape through sustainable luxury and architectural rigour.
                    </p>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Studio</h4>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">About</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Team</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Social</h4>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Pinterest</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-stone-900 uppercase tracking-wider mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-stone-500">
<li><a className="hover:text-stone-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-stone-900 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-stone-100 text-[10px] text-stone-400 uppercase tracking-wide">
<p>© 2024 Arbor &amp; Stone Ltd.</p>
<p>Designed for Luxury.</p>
</div>
</div>
</footer>

    </>
  );
}
