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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



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
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>
</div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
<div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>

<nav className="w-full max-w-7xl mx-auto px-6 py-8 flex justify-between items-center z-50">
<div className="flex items-center gap-2">
<div className="flex w-12 h-12 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa4df985-90e3-4521-b43a-043ecfe91cfd_320w.png)] bg-cover bg-center rounded-md rotate-5 items-center justify-center">
<span className="text-white font-bold text-xs">G</span>
</div>
<span className="text-zinc-100 font-medium tracking-tighter text-sm">GM STUDIOS</span>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium tracking-tight">
<a className="hover:text-white transition-colors" href="#">Manifesto</a>
<a className="hover:text-white transition-colors" href="#">Network</a>
<a className="hover:text-white transition-colors" href="#">Projects</a>
</div>
</nav>
<main className="flex-grow md:py-24 z-10 w-full max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative">

<div className="max-w-4xl mx-auto text-center mb-24 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest font-medium text-indigo-300">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                The Collective
            </div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-glow text-4xl font-medium text-white tracking-tight">
                We are the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-300 to-zinc-200">ignition point</span> for the impossible.
            </h1>
<p className="text-lg md:text-xl font-light text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                GM Studios is not just a network; it is a sanctuary for the obsessed. We unite fragmented communities into a singular, high-trust force designed to turn "what if" into "what is."
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 mb-24">

<div className="col-span-1 md:col-span-6 lg:col-span-8 glass-card rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<svg className="lucide lucide-zap w-8 h-8 text-yellow-200/80 mb-6" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h2 className="text-2xl md:text-3xl font-medium text-white tracking-tight mb-4">Challenge Your Reality</h2>
<p className="text-sm md:text-base text-zinc-400 leading-relaxed max-w-md">
                        We exist to push boundaries. We don't settle for the standard. Every project, every collaboration, every line of code is a challenge to the status quo.
                    </p>
</div>
<div className="mt-12 relative z-10">
<p className="text-xs uppercase tracking-widest text-zinc-500 mb-2">Our Mantra</p>
<div className="text-3xl md:text-5xl font-medium tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
                        "Isse Bada Soch Ke Dikha"
                    </div>
</div>
</div>

<div className="col-span-1 md:col-span-6 lg:col-span-4 glass-card flex flex-col overflow-hidden group hover:border-white/10 transition-colors rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/20 blur-[60px] rounded-full group-hover:bg-blue-500/30 transition-all duration-700"></div>
<svg className="lucide lucide-share-2 w-6 h-6 text-blue-300 mb-6" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
<h3 className="text-xl font-medium text-zinc-100 tracking-tight mb-3">The Meta-Community</h3>
<p className="leading-relaxed text-sm text-zinc-400">
                    We break down silos. GM Studios partners with multiple organizations to create a super-ecosystem. Access bigger events, smarter collaborations, and a reach that spans across communities.
                </p>
</div>

<div className="col-span-1 md:col-span-3 lg:col-span-4 glass-card flex flex-col overflow-hidden group hover:border-white/10 transition-colors rounded-3xl pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute -left-10 -bottom-10 w-32 h-32 bg-purple-500/20 blur-[60px] rounded-full group-hover:bg-purple-500/30 transition-all duration-700"></div>
<svg className="lucide lucide-palette w-6 h-6 text-purple-300 mb-6" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<h3 className="text-xl font-medium text-zinc-100 tracking-tight mb-3">Art Meets Algorithm</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    Innovation isn't just syntax. We value the artists, the social architects, and the cultural shapers. Here, creativity and technology fuse to solve human-centered problems.
                </p>
</div>

<div className="col-span-1 md:col-span-3 lg:col-span-4 glass-card rounded-3xl p-8 flex flex-col relative overflow-hidden group hover:border-white/10 transition-colors">
<svg className="lucide lucide-target w-6 h-6 text-emerald-300 mb-6" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<h3 className="text-xl font-medium text-zinc-100 tracking-tight mb-3">Legacy, Not Résumés</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    We don't build projects to fill a portfolio. We build engines of change. Our output is designed to leave a tangible mark on the world, not just a GitHub commit history.
                </p>
</div>

<div className="col-span-1 md:col-span-6 lg:col-span-4 glass-card rounded-3xl p-8 flex flex-col justify-center items-start relative overflow-hidden group hover:border-white/10 transition-colors">
<div className="opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex items-center gap-3 mb-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border border-black bg-zinc-800 flex items-center justify-center text-[10px] text-zinc-400">DEV</div>
<div className="w-8 h-8 rounded-full border border-black bg-zinc-700 flex items-center justify-center text-[10px] text-zinc-300">ART</div>
<div className="w-8 h-8 rounded-full border border-black bg-zinc-600 flex items-center justify-center text-[10px] text-zinc-200">UX</div>
</div>
<span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">Private &amp; Planned</span>
</div>
<h3 className="text-xl font-medium text-zinc-100 tracking-tight mb-2">High-Trust Circles</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                    A curated haven where vetted talent connects without the noise. High signal, zero interference.
                </p>
</div>
</div>

<section className="w-full space-y-8 overflow-hidden relative z-10 py-12" style={{maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'}}>
<div className="text-center">
<p className="uppercase text-xs font-semibold text-indigo-300/80 tracking-widest mb-6">Powered by our communities</p>
</div>

<div className="flex w-full overflow-hidden">
<div className="flex w-[200%] animate-marquee-left hover:[animation-play-state:paused]" style={{'--duration': '40s'}}>

<div className="flex w-1/2 justify-around shrink-0 items-center px-4 gap-4">
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" data-lucide="code-2"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Hyderabad Coders</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" data-lucide="users"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Tech Dev Club</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" data-lucide="bot"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">The AI 👽 Guy 🤖</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-pink-400 group-hover:text-pink-300 transition-colors" data-lucide="calendar-heart"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Event Dev X</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-orange-400 group-hover:text-orange-300 transition-colors" data-lucide="sparkles"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">NextGen</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" data-lucide="brain-circuit"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Future Genius Techies</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300 transition-colors" data-lucide="paw-print"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">TeamDino</span>
</div>
</div>

<div aria-hidden="true" className="flex w-1/2 justify-around shrink-0 items-center px-4 gap-4">
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" data-lucide="code-2"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Hyderabad Coders</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" data-lucide="users"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Tech Dev Club</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" data-lucide="bot"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">The AI 👽 Guy 🤖</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-pink-400 group-hover:text-pink-300 transition-colors" data-lucide="calendar-heart"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Event Dev X</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-orange-400 group-hover:text-orange-300 transition-colors" data-lucide="sparkles"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">NextGen</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" data-lucide="brain-circuit"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Future Genius Techies</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300 transition-colors" data-lucide="paw-print"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">TeamDino</span>
</div>
</div>
</div>
</div>

<div className="flex w-full overflow-hidden">
<div className="flex w-[200%] animate-marquee-right hover:[animation-play-state:paused]" style={{'--duration': '45s'}}>

<div className="flex w-1/2 justify-around shrink-0 items-center px-4 gap-4">
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300 transition-colors" data-lucide="paw-print"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">TeamDino</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" data-lucide="brain-circuit"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Future Genius Techies</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-orange-400 group-hover:text-orange-300 transition-colors" data-lucide="sparkles"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">NextGen</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-pink-400 group-hover:text-pink-300 transition-colors" data-lucide="calendar-heart"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Event Dev X</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" data-lucide="bot"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">The AI 👽 Guy 🤖</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" data-lucide="users"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Tech Dev Club</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" data-lucide="code-2"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Hyderabad Coders</span>
</div>
</div>

<div aria-hidden="true" className="flex w-1/2 justify-around shrink-0 items-center px-4 gap-4">
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-yellow-400 group-hover:text-yellow-300 transition-colors" data-lucide="paw-print"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">TeamDino</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-emerald-400 group-hover:text-emerald-300 transition-colors" data-lucide="brain-circuit"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Future Genius Techies</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-orange-400 group-hover:text-orange-300 transition-colors" data-lucide="sparkles"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">NextGen</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-pink-400 group-hover:text-pink-300 transition-colors" data-lucide="calendar-heart"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Event Dev X</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" data-lucide="bot"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">The AI 👽 Guy 🤖</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" data-lucide="users"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Tech Dev Club</span>
</div>
<div className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/5 rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:scale-105 cursor-pointer group whitespace-nowrap">
<i className="w-4 h-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" data-lucide="code-2"></i>
<span className="text-sm font-medium text-zinc-300 group-hover:text-white">Hyderabad Coders</span>
</div>
</div>
</div>
</div>
</section>

<div className="flex flex-col md:flex-row md:items-center gap-6 border-white/5 border-t mt-12 pt-12 gap-x-6 gap-y-6 items-start justify-between">
<div>
<h4 className="text-zinc-100 font-medium text-lg tracking-tight">Ready to think bigger?</h4>
<p className="text-zinc-500 text-sm mt-1">Join the movement defining the next era of collaboration.</p>
</div>
<a className="group overflow-hidden transition-all hover:bg-white hover:scale-105 text-sm font-medium text-zinc-950 tracking-tight bg-zinc-100 rounded-full pt-3 pr-6 pb-3 pl-6 relative" href="#">
<span className="relative z-10 flex items-center gap-2">
                    Enter GM Studios
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</a>
</div>
</main>


    </>
  );
}
