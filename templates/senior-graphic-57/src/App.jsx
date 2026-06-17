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
      

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-10%] left-1/4 w-[40rem] h-[40rem] bg-neutral-900/40 rounded-full blur-[120px] opacity-60 mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-0 w-[30rem] h-[30rem] bg-indigo-900/10 rounded-full blur-[100px] opacity-40"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 w-full max-w-7xl mx-auto flex justify-between items-center mix-blend-difference text-white">
<a className="hover:opacity-70 transition-opacity text-lg font-medium tracking-tighter" href="#" style={{}}>ALEX.DSGN</a>
<div className="hidden md:flex gap-8 items-center bg-neutral-900/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/5">
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#about">Profile</a>
<a className="text-sm font-medium text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
</div>
<a className="group flex items-center gap-2 text-sm font-medium hover:text-white transition-colors text-neutral-300" href="mailto:hello@alex.design">
<span>Contact</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</nav>
<main className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">

<header className="mb-32 flex flex-col items-start gap-8 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Available for freelance
            </div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter leading-[0.9] gradient-text max-w-5xl">
                Visualizing<br/>
                Complexity.
            </h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl font-light leading-relaxed">
                Senior Graphic Designer focused on brand identity, digital systems, and typographic nuance. Creating clarity through reduction.
            </p>
<div className="flex gap-4 mt-4">
<button className="bg-white text-black px-6 py-3 rounded-md text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
                    View Portfolio
                    <svg aria-hidden="true" data-icon="lucide:arrow-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</header>

<section className="mb-32" id="work">
<div className="flex justify-between items-end mb-12 border-b border-neutral-800 pb-4">
<h2 className="text-2xl font-medium tracking-tight">Selected Work</h2>
<span className="text-xs text-neutral-500 font-mono">(2021 — 2024)</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[400px]">

<div className="group relative col-span-1 md:col-span-2 glass-panel rounded-xl overflow-hidden hover:border-neutral-700 transition-all duration-500 cursor-pointer">
<img alt="Project 1" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="flex justify-between items-end">
<div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-2">Vercel Rebrand</h3>
<p className="text-sm text-neutral-400">Brand Identity, Web Design</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
<svg aria-hidden="true" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>

<div className="group relative col-span-1 glass-panel rounded-xl overflow-hidden flex items-center justify-center bg-neutral-900 hover:bg-neutral-800 transition-colors cursor-pointer border border-neutral-800">
<div className="text-center z-10 p-8">
<div className="text-8xl font-medium tracking-tighter text-neutral-800 group-hover:text-neutral-700 transition-colors select-none">Aa</div>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-xl font-medium tracking-tight text-white">Inter Type</h3>
<p className="text-xs text-neutral-500 mt-1">Typeface Specimen Design</p>
</div>
</div>

<div className="group relative col-span-1 glass-panel rounded-xl overflow-hidden cursor-pointer hover:border-neutral-700 transition-all">
<img alt="Project 3" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<h3 className="text-xl font-medium tracking-tight text-white">Fintech Dashboard</h3>
<p className="text-xs text-neutral-500 mt-1">Product Design, UI/UX</p>
</div>
</div>

<div className="group relative col-span-1 md:col-span-2 glass-panel rounded-xl overflow-hidden cursor-pointer hover:border-neutral-700 transition-all">
<img alt="Project 4" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="flex justify-between items-end">
<div>
<h3 className="text-3xl font-medium tracking-tight text-white mb-2">Aesop Campaign</h3>
<p className="text-sm text-neutral-400">Art Direction, Packaging</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
<svg aria-hidden="true" data-icon="lucide:arrow-up-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-12" id="services">
<div className="md:col-span-4">
<h2 className="text-2xl font-medium tracking-tight sticky top-32">Capabilities</h2>
</div>
<div className="md:col-span-8 flex flex-col gap-px bg-neutral-800 border border-neutral-800 rounded-lg overflow-hidden">

<div className="bg-neutral-950 p-8 flex flex-col sm:flex-row gap-6 hover:bg-neutral-900 transition-colors group">
<div className="w-10 h-10 rounded-md bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-neutral-800 transition-colors border border-neutral-800">
<svg aria-hidden="true" data-icon="lucide:pen-tool" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-2">Brand Identity</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">Creating distinct visual systems that communicate core values through logo design, typography, and color theory.</p>
</div>
</div>

<div className="bg-neutral-950 p-8 flex flex-col sm:flex-row gap-6 hover:bg-neutral-900 transition-colors group">
<div className="w-10 h-10 rounded-md bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-neutral-800 transition-colors border border-neutral-800">
<svg aria-hidden="true" data-icon="lucide:monitor" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="3"></rect><path d="M8 21h8m-4-4v4"></path></g></svg>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-2">Digital Design</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">Designing responsive, user-centric interfaces for web and mobile products using modern design principles.</p>
</div>
</div>

<div className="bg-neutral-950 p-8 flex flex-col sm:flex-row gap-6 hover:bg-neutral-900 transition-colors group">
<div className="w-10 h-10 rounded-md bg-neutral-900 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:bg-neutral-800 transition-colors border border-neutral-800">
<svg aria-hidden="true" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
</div>
<div className="flex-1">
<h3 className="text-lg font-medium text-white mb-2">Design Systems</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">Building scalable component libraries and style guides to ensure consistency across large-scale products.</p>
</div>
</div>
</div>
</section>

<section className="mb-32">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-neutral-800 pb-4">
<h2 className="text-2xl font-medium tracking-tight">Experience</h2>
<a className="text-xs text-neutral-400 hover:text-white transition-colors mt-2 md:mt-0 flex items-center gap-1" href="#">
                    Download Resume 
                    <svg aria-hidden="true" data-icon="lucide:download" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 15V3m9 12v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10l5 5l5-5"></path></g></svg>
</a>
</div>
<div className="space-y-6">

<div className="group flex flex-col md:flex-row md:items-center justify-between p-4 -mx-4 rounded-lg hover:bg-neutral-900/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-xs font-bold tracking-tight border border-white/5">st.</div>
<div>
<h4 className="text-base font-medium text-white">Senior Designer</h4>
<p className="text-sm text-neutral-500">Stripe</p>
</div>
</div>
<p className="text-sm text-neutral-500 font-mono mt-2 md:mt-0">2022 — Present</p>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between p-4 -mx-4 rounded-lg hover:bg-neutral-900/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-xs font-bold tracking-tight border border-white/5">li.</div>
<div>
<h4 className="text-base font-medium text-white">Product Designer</h4>
<p className="text-sm text-neutral-500">Linear</p>
</div>
</div>
<p className="text-sm text-neutral-500 font-mono mt-2 md:mt-0">2020 — 2022</p>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between p-4 -mx-4 rounded-lg hover:bg-neutral-900/50 transition-colors">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center text-xs font-bold tracking-tight border border-white/5">ag.</div>
<div>
<h4 className="text-base font-medium text-white">Visual Designer</h4>
<p className="text-sm text-neutral-500">Agency XYZ</p>
</div>
</div>
<p className="text-sm text-neutral-500 font-mono mt-2 md:mt-0">2018 — 2020</p>
</div>
</div>
</section>

<footer className="relative overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 p-12 md:p-24 text-center">
<div className="relative z-10 flex flex-col items-center gap-8">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter gradient-text">
                    Let's build something<br/>meaningful together.
                </h2>
<div className="flex flex-col md:flex-row gap-4">
<a className="bg-white text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2" href="mailto:hello@alex.design">
<svg aria-hidden="true" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
                        Start a Project
                    </a>
<button className="px-8 py-4 rounded-full text-sm font-medium text-neutral-400 hover:text-white border border-neutral-700 hover:border-neutral-500 transition-all">
                        Copy Email
                    </button>
</div>
</div>

<div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
<p>© 2024 Alex Design. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Twitter / X</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Read.cv</a>
</div>
</div>
</footer>
</main>

    </>
  );
}
