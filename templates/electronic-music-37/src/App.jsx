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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
slate: {
850: '#151f2e', // Custom dark
}
},
spacing: {
'128': '32rem',
},
transitionTimingFunction: {
'apple': 'cubic-bezier(0.25, 1, 0.5, 1)', // Smooth apple-like ease
}
}
}
}



        // Scroll Animation Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-element').forEach(el => {
                observer.observe(el);
            });

            // Parallax Effect for Hero Image
            window.addEventListener('scroll', () => {
                const scrolled = window.scrollY;
                const heroImage = document.querySelector('#home img');
                if (heroImage) {
                    heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
                }
            });

            // Navbar background opacity on scroll
            const nav = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    nav.classList.add('shadow-sm');
                } else {
                    nav.classList.remove('shadow-sm');
                }
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
      

<nav className="fixed top-0 left-0 w-full h-16 z-50 flex items-center justify-between px-6 md:px-10 border-b border-black/5 bg-white/85 backdrop-blur-2xl transition-all duration-300" id="navbar">
<div className="flex items-center gap-2 group cursor-pointer">

<span className="font-sans font-bold tracking-tighter text-sm md:text-base uppercase">Archeteus</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-black transition-colors duration-300" href="#home">Home</a>
<a className="hover:text-black transition-colors duration-300" href="#music">Music</a>
<a className="hover:text-black transition-colors duration-300" href="#about">About</a>
<a className="hover:text-black transition-colors duration-300" href="#videos">Videos</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full text-xs font-medium tracking-wide hover:bg-slate-800 transition-all duration-300 hover:scale-[1.02] shadow-sm" href="#">
<span className="iconify" data-icon="lucide:play-circle" data-width="14"></span>
<span>Listen on Spotify</span>
</a>
<button className="md:hidden p-2 text-slate-900">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen w-full flex flex-col md:flex-row pt-20 md:pt-0 overflow-hidden" id="home">

<div className="w-full md:w-[55%] flex flex-col justify-center px-6 md:px-20 lg:px-24 py-12 md:py-0 z-10 bg-white">
<div className="reveal-element">
<span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-slate-400 mb-6 block border-l border-slate-200 pl-3">Electronic Music Producer</span>
<h1 className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-slate-900 leading-[0.9] mb-4">
                    ARCHETEUS
                </h1>
<h2 className="text-xl md:text-2xl text-slate-500 font-normal tracking-tight mb-12">
                    Synthwave · French House · Melodic
                </h2>
<p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-lg mb-12 font-light">
                    Creating electronic soundscapes that bridge retrofuturistic nostalgia with contemporary production techniques. Precision engineering meets analog soul.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
<button className="group bg-slate-900 text-white px-8 py-4 rounded-full font-medium text-sm flex items-center gap-3 hover:bg-black transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
<span>Stream Now</span>
<span className="iconify group-hover:translate-x-1 transition-transform duration-300" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="group px-8 py-4 rounded-full font-medium text-sm flex items-center gap-3 border border-slate-200 text-slate-700 hover:border-slate-400 hover:text-black transition-all duration-300 bg-white">
<span className="iconify" data-icon="lucide:film" data-width="16"></span>
<span>Watch Videos</span>
</button>
</div>
<div className="flex items-center gap-4 text-xs font-mono text-slate-400">
<span>3K-7K MONTHLY LISTENERS</span>
<span className="h-3 w-px bg-slate-200"></span>
<span>EST. 2023</span>
</div>
</div>
</div>

<div className="w-full md:w-[45%] h-[50vh] md:h-auto relative bg-slate-50">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/20 z-10"></div>

<img alt="Abstract Studio Visual" className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-[2000ms] ease-apple reveal-element stagger-2" src="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{opacity: '0.9'}}/>

<div className="absolute bottom-12 left-8 right-8 md:left-12 md:right-auto md:w-72 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-2xl z-20 reveal-element stagger-3 hidden md:block">
<div className="flex items-center gap-3 mb-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-mono text-white/80 uppercase tracking-wider">Now Playing</span>
</div>
<div className="flex justify-between items-end">
<div>
<div className="text-white font-semibold text-sm tracking-tight">Neon Horizon</div>
<div className="text-white/60 text-xs">Archeteus</div>
</div>
<span className="iconify text-white" data-icon="lucide:activity" data-width="20"></span>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-40 px-6 md:px-10 max-w-[1440px] mx-auto" id="music">
<div className="mb-10 reveal-element">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">Latest Release</h2>
</div>
<div className="bg-slate-50 rounded-[2rem] border border-slate-100 p-8 md:p-16 shadow-sm hover:shadow-xl transition-shadow duration-500 ease-apple reveal-element stagger-1 group">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

<div className="w-full lg:w-[40%] flex-shrink-0">
<div className="aspect-square rounded-2xl overflow-hidden shadow-lg bg-slate-200 relative group-hover:scale-[1.02] transition-transform duration-500 ease-apple">
<img alt="Album Art" className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-6 flex items-center justify-between font-mono text-xs text-slate-500 uppercase tracking-wider">
<span>EP Release</span>
<span>OCT 2024</span>
</div>
</div>

<div className="w-full lg:w-[60%] flex flex-col justify-center">
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-xs font-medium tracking-wide">Synthwave</span>
<span className="px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-xs font-medium tracking-wide">Analog</span>
</div>
<h3 className="text-4xl md:text-6xl font-bold text-slate-900 tracking-tighter mb-6">Cybernetic Dreams</h3>
<p className="text-lg text-slate-600 leading-relaxed max-w-lg mb-10 font-light">
                        A sonic journey through a digital metropolis. Featuring analog synthesizers layered with modern rhythmic structures.
                    </p>

<div className="w-full h-16 mb-10 flex items-center gap-1 opacity-60">
<svg className="w-full h-full stroke-slate-800 fill-none" strokeLinecap="round" strokeWidth="1.5" viewbox="0 0 400 60">
<path d="M0,30 Q20,10 40,30 T80,30 T120,30 T160,10 T200,50 T240,30 T280,10 T320,30 T360,50 T400,30"></path>
</svg>
</div>
<div className="flex items-center gap-8">
<button className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-black hover:scale-105 transition-all duration-300 shadow-lg">
<span className="iconify ml-1" data-fill="currentColor" data-icon="lucide:play" data-width="24"></span>
</button>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-900">Listen Preview</span>
<span className="text-xs text-slate-500 font-mono mt-1">04:23 · 3.2K PLAYS</span>
</div>
<div className="flex-grow"></div>
<a className="text-[#1DB954] hover:opacity-80 transition-opacity" href="#">
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="24"></span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 md:px-10 max-w-[1440px] mx-auto">
<div className="mb-16 reveal-element">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Selected Works</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">

<div className="lg:col-span-2 bg-white border border-slate-100 rounded-[1.5rem] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-apple group reveal-element">
<div className="flex flex-col md:flex-row gap-8 h-full">
<div className="w-full md:w-1/2 h-64 md:h-full rounded-xl overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">Single</div>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-between py-2">
<div>
<h3 className="text-2xl font-bold tracking-tight mb-2">Midnight Velocity</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-4">High-tempo driving music for the late hours. Inspired by 80s car chases.</p>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
<span className="w-2 h-2 rounded-full bg-slate-200"></span>
<span className="w-2 h-2 rounded-full bg-slate-200"></span>
</div>
</div>
<div className="flex items-center justify-between border-t border-slate-100 pt-6 mt-6">
<span className="font-mono text-xs text-slate-400">2023 · RETROWAVE</span>
<span className="iconify text-slate-900" data-icon="lucide:disc-3" data-width="20"></span>
</div>
</div>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-[1.5rem] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-apple group reveal-element stagger-1">
<div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale" src="https://images.unsplash.com/photo-1558507652-2d9626c4e67a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
<button className="absolute bottom-4 right-4 bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
<span className="iconify" data-fill="currentColor" data-icon="lucide:play" data-width="16"></span>
</button>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-1">Analog Soul</h3>
<div className="text-xs text-slate-500 font-mono uppercase tracking-wider">LP · 2022</div>
</div>

<div className="bg-white border border-slate-100 rounded-[1.5rem] p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-apple group reveal-element stagger-2">
<div className="aspect-square rounded-xl overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1594623930572-300a3011d9ae?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-1">Void Systems</h3>
<div className="text-xs text-slate-500 font-mono uppercase tracking-wider">EP · 2022</div>
</div>

<div className="lg:col-span-2 bg-slate-900 text-white rounded-[1.5rem] p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-apple group reveal-element stagger-3">
<div className="flex flex-col md:flex-row-reverse gap-8 h-full">
<div className="w-full md:w-1/2 h-64 md:h-full rounded-xl overflow-hidden relative">

<div className="w-full h-full bg-slate-800 flex items-center justify-center relative">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
<svg className="w-3/4 h-3/4 text-purple-500 opacity-80" fill="none" stroke="currentColor" strokeWidth="0.5" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="40"></circle>
<circle cx="50" cy="50" r="30"></circle>
<circle cx="50" cy="50" r="20"></circle>
<path d="M10,50 L90,50 M50,10 L50,90"></path>
</svg>
</div>
</div>
<div className="w-full md:w-1/2 flex flex-col justify-between py-2">
<div>
<h3 className="text-2xl font-bold tracking-tight mb-2">Upcoming Project</h3>
<p className="text-slate-400 text-sm leading-relaxed mb-4">Currently in production. Exploring darker, industrial sounds.</p>
<div className="inline-block px-3 py-1 border border-slate-700 rounded-full text-[10px] font-mono tracking-widest text-slate-300">WINTER 2025</div>
</div>
<div className="flex items-center gap-4 mt-6">
<button className="text-sm font-medium border-b border-white pb-0.5 hover:text-slate-300 transition-colors">Sign up for updates</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50/50 border-y border-slate-100">
<div className="max-w-[1280px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
<div className="flex flex-col items-center justify-center md:border-r border-slate-200 reveal-element">
<span className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter mb-2">7K+</span>
<span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Monthly Listeners</span>
</div>
<div className="flex flex-col items-center justify-center md:border-r border-slate-200 reveal-element stagger-1">
<span className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter mb-2">20+</span>
<span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Original Tracks</span>
</div>
<div className="flex flex-col items-center justify-center md:border-r border-slate-200 reveal-element stagger-2">
<span className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter mb-2">3</span>
<span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Years Active</span>
</div>
<div className="flex flex-col items-center justify-center reveal-element stagger-3">
<span className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tighter mb-2">100K</span>
<span className="text-xs font-mono text-slate-500 uppercase tracking-widest">Total Streams</span>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 md:px-10 max-w-[1440px] mx-auto" id="about">
<div className="flex flex-col lg:flex-row gap-20 items-center">

<div className="w-full lg:w-[55%] reveal-element">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-10">The Architecture of Sound</h2>
<div className="space-y-8 text-lg md:text-xl text-slate-700 font-light leading-relaxed">
<p>
                        Archeteus is not just a moniker; it is a philosophy of structural composition applied to audio waves. Drawing from a background in minimalist architecture, I approach every track as a blueprint.
                    </p>
<p>
                        The goal is to strip away the unnecessary, leaving only the essential elements that drive emotion and movement. Using a hybrid workflow of vintage analog gear and precise digital processing, the music exists in the space between the human touch and machine perfection.
                    </p>
</div>
<div className="mt-16 pt-10 border-t border-slate-100">
<span className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-4">Key Influences</span>
<div className="text-base text-slate-900 leading-tight">
                        French Touch <span className="text-slate-300 px-2">·</span> 
                        Analog Synthesis <span className="text-slate-300 px-2">·</span> 
                        Retrofuturism <span className="text-slate-300 px-2">·</span> 
                        Brutalism
                    </div>
</div>
</div>

<div className="w-full lg:w-[45%] relative reveal-element stagger-2">
<div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Studio Portrait" className="w-full h-full object-cover grayscale contrast-125" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -left-8 md:bottom-10 md:-left-12 bg-white/80 backdrop-blur-md border border-white/50 p-6 md:p-8 rounded-xl shadow-xl max-w-xs">
<p className="font-serif italic text-slate-800 text-lg mb-4">"Music that captures the soul of neon-lit cityscapes."</p>
<div className="text-xs font-bold tracking-tight text-slate-900">— ARCHETEUS</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 md:px-10 max-w-[1440px] mx-auto" id="videos">
<div className="mb-16 reveal-element">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Production Insights</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

<div className="lg:col-span-3 bg-white border border-slate-100 p-4 rounded-2xl shadow-sm reveal-element">
<div className="aspect-video w-full bg-slate-900 rounded-xl overflow-hidden relative group cursor-pointer">

<img className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-white ml-1" data-fill="currentColor" data-icon="lucide:play" data-width="32"></span>
</div>
</div>
<div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs px-2 py-1 rounded font-mono">08:42</div>
</div>
<div className="mt-6 px-2 pb-2">
<h3 className="text-xl font-bold tracking-tight mb-1">Behind The Track: "Neon Horizon"</h3>
<div className="flex items-center gap-4 text-sm text-slate-500">
<span className="text-[#FF0000] flex items-center gap-1"><span className="iconify" data-icon="lucide:youtube" data-width="16"></span> YouTube</span>
<span>12K Views</span>
</div>
</div>
</div>

<div className="lg:col-span-2 flex flex-col gap-4 reveal-element stagger-1">

<div className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer group">
<div className="w-32 aspect-video bg-slate-200 rounded-lg overflow-hidden relative flex-shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm leading-snug mb-2 group-hover:text-blue-600 transition-colors">Analog Gear Collection Walkthrough</h4>
<div className="text-xs text-slate-500 font-mono">5K Views</div>
</div>
</div>

<div className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer group">
<div className="w-32 aspect-video bg-slate-200 rounded-lg overflow-hidden relative flex-shrink-0">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm leading-snug mb-2 group-hover:text-blue-600 transition-colors">Mixing Masterclass: Low End Theory</h4>
<div className="text-xs text-slate-500 font-mono">8.2K Views</div>
</div>
</div>

<div className="flex gap-4 p-4 bg-white border border-slate-100 rounded-xl hover:shadow-md transition-shadow cursor-pointer group">
<div className="w-32 aspect-video bg-slate-200 rounded-lg overflow-hidden relative flex-shrink-0">
<div className="w-full h-full bg-slate-100 flex items-center justify-center">
<span className="iconify text-slate-300" data-icon="lucide:image" data-width="24"></span>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm leading-snug mb-2 group-hover:text-blue-600 transition-colors">Live Set Setup Breakdown</h4>
<div className="text-xs text-slate-500 font-mono">3.1K Views</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 px-6">
<div className="max-w-5xl mx-auto bg-black text-white rounded-[2.5rem] p-12 md:p-24 text-center shadow-2xl relative overflow-hidden reveal-element">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
<div className="relative z-10">
<h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">Let's Connect</h2>
<p className="text-xl text-slate-400 max-w-2xl mx-auto mb-16 font-light">
                    Follow the sonic journey across platforms. For bookings and collaborations, reach out directly.
                </p>
<div className="flex flex-wrap justify-center gap-6 md:gap-8">
<a className="group w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#1DB954] hover:border-[#1DB954] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(29,185,84,0.4)] transition-all duration-300" href="#">
<span className="iconify text-white" data-icon="lucide:music" data-width="28"></span>
</a>
<a className="group w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,0,0,0.4)] transition-all duration-300" href="#">
<span className="iconify text-white" data-icon="lucide:youtube" data-width="28"></span>
</a>
<a className="group w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:border-transparent hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(200,50,50,0.4)] transition-all duration-300" href="#">
<span className="iconify text-white" data-icon="lucide:instagram" data-width="28"></span>
</a>
<a className="group w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-[#FF7700] hover:border-[#FF7700] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,119,0,0.4)] transition-all duration-300" href="#">
<span className="iconify text-white" data-icon="lucide:cloud" data-width="28"></span> 
</a>
<a className="group w-16 h-16 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300" href="mailto:hello@archeteus.com">
<span className="iconify text-white" data-icon="lucide:mail" data-width="28"></span>
</a>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-slate-100 bg-white">
<div className="max-w-[1440px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="font-sans font-bold tracking-tighter text-sm uppercase">Archeteus</span>
<div className="text-xs text-slate-500 font-mono flex items-center gap-6">
<span>© 2025 ALL RIGHTS RESERVED</span>
<a className="hover:text-black transition-colors" href="#">PRIVACY</a>
<a className="hover:text-black transition-colors" href="#">TERMS</a>
</div>
</div>
</footer>



    </>
  );
}
