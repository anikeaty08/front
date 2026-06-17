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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-zinc-950 iconify--lucide" data-icon="lucide:zap" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-white font-medium tracking-tight text-sm">KINETIC</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-normal text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Programs</a>
<a className="hover:text-white transition-colors" href="#">Coaches</a>
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#">Sign In</a>
<a className="bg-white text-zinc-950 text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-200 transition-all duration-300" href="#">Start Training</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Gym Texture" className="w-full h-full object-cover opacity-10 grayscale" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-zinc-950"></div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/10 rounded-[100%] blur-[100px] pointer-events-none z-0"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="text-xs font-medium text-emerald-400 tracking-wide uppercase">New Course: Hypertrophy 101</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-6 leading-[1.1]">
                Engineer your <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">perfect physiology.</span>
</h1>
<p className="leading-relaxed text-lg font-light text-zinc-400 max-w-2xl mr-auto mb-10 ml-auto">
                Scientific fitness programming designed for longevity and peak performance. Join 10,000+ athletes redefining their biological limits.
            </p>
<div className="flex flex-col md:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<button className="w-full md:w-auto bg-white text-zinc-950 font-medium px-8 py-3.5 rounded-full hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group">
                    Explore Courses
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-full md:w-auto px-8 py-3.5 rounded-full border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 hover:bg-zinc-900 transition-all flex items-center justify-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
                    Watch Trailer
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto px-6">
<div className="relative rounded-xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm p-2 shadow-2xl shadow-emerald-900/20">
<div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="rounded-lg bg-zinc-950 border border-white/5 aspect-[16/9] md:aspect-[21/9] flex items-center justify-center overflow-hidden relative group">

<img alt="Gym Workout" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 scale-105 group-hover:scale-100" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>

<div className="absolute top-6 left-6 flex gap-4">
<div className="px-3 py-1 bg-black/50 backdrop-blur-md rounded border border-white/10 text-[10px] text-white font-mono uppercase tracking-widest">
                            Trailer_v2.mp4
                        </div>
</div>

<div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white cursor-pointer group-hover:scale-110 group-hover:bg-white/20 transition-all duration-500 relative z-10 shadow-2xl">
<svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-icon="lucide:play" data-width="28" height="28" role="img" style={{strokeWidth: '3'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
</div>
</div>
</div>
</section>

<div className="border-y border-white/5 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex gap-8 text-zinc-500">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:activity" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm">High Intensity</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:brain-circuit" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
<span className="text-sm">Neuro-Priming</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:heart-pulse" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path><path d="M3.22 13H9.5l.5-1l2 4.5l2-7l1.5 3.5h5.27"></path></g></svg>
<span className="text-sm">Cardio Health</span>
</div>
</div>

<div className="flex items-center gap-4 w-full md:w-auto" x-data="{ intensity: 65 }">
<span className="text-xs font-medium text-zinc-400 uppercase tracking-wide">Filter Intensity</span>
<div className="relative w-full md:w-32 h-6 flex items-center">
<input className="w-full z-20 opacity-0 absolute inset-0 cursor-pointer" max="100" min="0" type="range" x-model="intensity"/>

<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden relative z-10">
<div :style={{'width: '\' + intensity + \'%\''}} className="h-full bg-emerald-500" style={{width: '65%'}}></div>
</div>

<div :style={{'left: '\' + intensity + \'%', transform: 'translateX(-50%)\''}} className="absolute h-3 w-3 bg-white rounded-full shadow z-10 pointer-events-none transition-all duration-75" style={{left: '65%', transform: 'translateX(-50%)'}}></div>
</div>
<span className="text-xs font-mono text-zinc-300 w-8" x-text="intensity + '%'">65%</span>
</div>
</div>
</div>

<section className="py-24 max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div className="">
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-2">Curated Programs</h2>
<p className="text-zinc-400 font-light">Structured paths to achieve specific physiological adaptations.</p>
</div>
<a className="text-sm text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors" href="#">
                View all programs
                <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-up-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative bg-zinc-900/20 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:bg-zinc-900/40">
<div className="aspect-[4/3] w-full bg-zinc-800/50 relative overflow-hidden">
<img alt="Strength Training" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent absolute inset-0"></div>
<div className="absolute top-4 left-4 z-20">
<span className="bg-zinc-950/80 backdrop-blur text-white text-[10px] font-medium px-2 py-1 rounded border border-white/10 uppercase tracking-wide">Strength</span>
</div>
</div>
<div className="p-6 relative z-10 -mt-2">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-emerald-400 transition-colors">Foundation Hypertrophy</h3>
<span className="text-zinc-500 text-sm font-mono">01</span>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-400 mb-6">
<div className="flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span>8 Weeks</span>
</div>
<div className="flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Intermediate</span>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-zinc-700 border border-zinc-900"></div>
<div className="w-6 h-6 rounded-full bg-zinc-600 border border-zinc-900"></div>
<div className="w-6 h-6 rounded-full bg-zinc-500 border border-zinc-900 flex items-center justify-center text-[8px] text-white font-medium">+2k</div>
</div>
<span className="text-white font-medium text-sm">$49</span>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/20 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:bg-zinc-900/40">
<div className="aspect-[4/3] w-full bg-zinc-800/50 relative overflow-hidden">
<img alt="Cardio Training" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10"></div>
<div className="absolute top-4 left-4 z-20">
<span className="bg-zinc-950/80 backdrop-blur text-white text-[10px] font-medium px-2 py-1 rounded border border-white/10 uppercase tracking-wide">Cardio</span>
</div>
</div>
<div className="p-6 relative z-10 -mt-2">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-emerald-400 transition-colors">Metabolic Conditioning</h3>
<span className="text-zinc-500 text-sm font-mono">02</span>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-400 mb-6">
<div className="flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span>4 Weeks</span>
</div>
<div className="flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Advanced</span>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-zinc-700 border border-zinc-900"></div>
<div className="w-6 h-6 rounded-full bg-zinc-600 border border-zinc-900"></div>
</div>
<span className="text-white font-medium text-sm">$39</span>
</div>
</div>
</div>

<div className="group relative bg-zinc-900/20 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-300 hover:bg-zinc-900/40">
<div className="aspect-[4/3] w-full bg-zinc-800/50 relative overflow-hidden">
<img alt="Mobility Training" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80" src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="z-10 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent absolute inset-0"></div>
<div className="absolute top-4 left-4 z-20">
<span className="bg-zinc-950/80 backdrop-blur text-white text-[10px] font-medium px-2 py-1 rounded border border-white/10 uppercase tracking-wide">Mobility</span>
</div>
</div>
<div className="p-6 relative z-10 -mt-2">
<div className="flex justify-between items-start mb-4">
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-emerald-400 transition-colors">Joint Longevity</h3>
<span className="text-zinc-500 text-sm font-mono">03</span>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-400 mb-6">
<div className="flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span>Ongoing</span>
</div>
<div className="flex items-center gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bar-chart-2" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>All Levels</span>
</div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex -space-x-2">
<div className="w-6 h-6 rounded-full bg-zinc-700 border border-zinc-900"></div>
<div className="w-6 h-6 rounded-full bg-zinc-600 border border-zinc-900"></div>
<div className="w-6 h-6 rounded-full bg-zinc-500 border border-zinc-900 flex items-center justify-center text-[8px] text-white font-medium">+5k</div>
</div>
<span className="text-white font-medium text-sm">$29</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-zinc-900/20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="">
<div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center border border-white/5 mb-6">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Data-drivenprogressive overload.</h2>
<p className="text-zinc-400 font-light mb-8 leading-relaxed">
                        We don't guess. Our algorithms adjust your volume, intensity, and frequency based on daily inputs, ensuring you stay in the optimal adaptation zone without burning out.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-emerald-500/50 flex items-center justify-center bg-emerald-500/10">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-zinc-300">Daily readiness score assessment</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-emerald-500/50 flex items-center justify-center bg-emerald-500/10">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-zinc-300">Auto-regulated set and rep schemes</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-4 h-4 rounded-full border border-emerald-500/50 flex items-center justify-center bg-emerald-500/10">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="10" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-sm text-zinc-300">Velocity-based training integration</span>
</li>
</ul>
</div>
<div className="relative">

<div className="absolute inset-0 bg-emerald-500/20 blur-[80px] rounded-full pointer-events-none opacity-20"></div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 mt-8">
<div className="bg-zinc-950 border border-white/10 p-5 rounded-xl shadow-lg relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<svg aria-hidden="true" className="iconify text-emerald-400 mb-3 iconify--lucide" data-icon="lucide:trending-up" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
<div className="h-2 w-24 bg-zinc-800 rounded-full mb-2"></div>
<div className="h-2 w-16 bg-zinc-800 rounded-full"></div>
</div>
<div className="bg-zinc-950 border border-white/10 p-5 rounded-xl shadow-lg opacity-80 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<svg aria-hidden="true" className="iconify text-emerald-400 mb-3 iconify--lucide" data-icon="lucide:dumbbell" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829zM2.5 21.5l1.4-1.4M20.1 3.9l1.4-1.4M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829zM9.6 14.4l4.8-4.8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="h-2 w-20 bg-zinc-800 rounded-full mb-2"></div>
<div className="h-2 w-12 bg-zinc-800 rounded-full"></div>
</div>
</div>
<div className="space-y-4">
<div className="bg-zinc-950 border border-white/10 p-5 rounded-xl shadow-lg opacity-80 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<svg aria-hidden="true" className="iconify text-emerald-400 mb-3 iconify--lucide" data-icon="lucide:heart" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="h-2 w-20 bg-zinc-800 rounded-full mb-2"></div>
<div className="h-2 w-10 bg-zinc-800 rounded-full"></div>
</div>
<div className="bg-zinc-950 border border-white/10 p-5 rounded-xl shadow-lg relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<svg aria-hidden="true" className="iconify text-emerald-400 mb-3 iconify--lucide" data-icon="lucide:zap" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="h-2 w-24 bg-zinc-800 rounded-full mb-2"></div>
<div className="h-2 w-14 bg-zinc-800 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" x-data="{ annual: true }">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Simple, transparent pricing</h2>
<p className="text-zinc-400 font-light mb-8">Access the entire library or pay per course.</p>

<div @click="annual = !annual" className="inline-flex items-center gap-3 p-1 rounded-full bg-zinc-900 border border-white/5 cursor-pointer relative">
<div :className="annual ? 'left-[calc(50%+2px)]' : 'left-1'" className="absolute h-8 w-[calc(50%-4px)] bg-zinc-800 rounded-full transition-all duration-300 shadow-sm left-[calc(50%+2px)]"></div>
<button :className="!annual ? 'text-white' : 'text-zinc-500'" className="relative z-10 px-6 py-1.5 text-sm font-medium transition-colors duration-300 text-zinc-500">Monthly</button>
<button :className="annual ? 'text-white' : 'text-zinc-500'" className="relative z-10 px-6 py-1.5 text-sm font-medium transition-colors duration-300 text-white">Yearly</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="hover:border-zinc-800 transition-colors bg-zinc-950 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="mb-4">
<span className="text-sm font-medium text-zinc-400">Starter</span>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">$0</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-400">
<svg aria-hidden="true" className="iconify text-zinc-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        3 Introduction Courses
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-400">
<svg aria-hidden="true" className="iconify text-zinc-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Community Access
                    </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors">Get Started</button>
</div>

<div className="relative p-8 rounded-2xl border border-emerald-500/20 bg-zinc-900/40 hover:bg-zinc-900/60 transition-colors shadow-2xl shadow-emerald-900/10">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">Most Popular</div>
<div className="mb-4">
<span className="text-sm font-medium text-emerald-400">Pro Athlete</span>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight" x-text="annual ? '$29' : '$39'">$29</span>
<span className="text-zinc-500 text-sm">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Full Course Library
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Nutrition Guides
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" className="iconify text-emerald-500 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        1-on-1 Coach Chat
                    </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors">Start Free Trial</button>
</div>

<div className="p-8 rounded-2xl border border-white/5 bg-zinc-950 hover:border-zinc-800 transition-colors">
<div className="mb-4">
<span className="text-sm font-medium text-zinc-400">Teams</span>
</div>
<div className="mb-6 flex items-baseline gap-1">
<span className="text-4xl font-medium text-white tracking-tight">Custom</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-400">
<svg aria-hidden="true" className="iconify text-zinc-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Unlimited Seats
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-400">
<svg aria-hidden="true" className="iconify text-zinc-600 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        API Access
                    </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white hover:text-black transition-colors">Contact Sales</button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:zap" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-white font-medium tracking-tight">KINETIC</span>
</div>
<p className="text-zinc-500 text-sm leading-relaxed max-w-sm mb-6">
                        Optimizing human performance through science, technology, and disciplined programming.
                    </p>

<div className="flex gap-2 max-w-sm">
<input className="bg-zinc-900 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-emerald-500/50 w-full placeholder:text-zinc-600" placeholder="Enter your email" type="email"/>
<button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 rounded-lg flex items-center justify-center border border-white/5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>

<div @click="checked = !checked" className="flex items-start gap-2 mt-4 group cursor-pointer" x-data="{ checked: false }">
<div :className="checked ? 'bg-emerald-500 border-emerald-500' : 'bg-transparent border-zinc-700 group-hover:border-zinc-500'" className="w-4 h-4 rounded border flex items-center justify-center transition-colors bg-transparent border-zinc-700 group-hover:border-zinc-500">
<svg aria-hidden="true" className="iconify text-black iconify--lucide" data-icon="lucide:check" data-width="10" height="10" role="img" style={{display: 'none'}} viewbox="0 0 24 24" width="10" x-show="checked" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xs text-zinc-500 select-none">I agree to receive training updates.</span>
</div>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Browse Courses</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Coaching</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Enterprise</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-emerald-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-white/5 pt-8 text-xs text-zinc-600">
<p>© 2023 Kinetic Performance Inc.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">YouTube</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
