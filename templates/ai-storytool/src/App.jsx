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
      

<div className="noise-overlay"></div>

<nav className="fixed top-0 w-full z-40 bg-gradient-to-b from-black/80 to-transparent transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<a className="text-xl tracking-tighter font-semibold text-white flex items-center gap-2 group focus:outline-none rounded" href="#">
<svg aria-hidden="true" className="iconify group-hover:text-[#2E5BFF] transition-colors duration-300 iconify--lucide" data-height="20" data-icon="lucide:aperture" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
<span className="font-serif tracking-widest uppercase text-sm">HYBRID</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-300 uppercase">
<a className="hover:text-white transition-colors duration-300 focus:outline-none focus:text-white" href="#work">Portfolio</a>
<a className="hover:text-white transition-colors duration-300 focus:outline-none focus:text-white" href="#process">The Craft</a>
<a className="hover:text-white transition-colors duration-300 focus:outline-none focus:text-white" href="#services">Services</a>
</div>
<a className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium hover:bg-white hover:text-black transition-all duration-300 group" href="#contact">
                Start Project
                <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<button className="md:hidden text-white p-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="relative h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0 bg-neutral-900">

<img alt="Cinematic Grunge Collage" className="w-full h-full object-cover ken-burns brightness-[0.4] contrast-[1.1] saturate-50" fetchpriority="high" src="https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/40 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/30"></div>
</div>
<div className="flex flex-col z-10 text-center h-full max-w-6xl pt-16 pr-6 pl-6 relative items-center justify-center">


<h1 className="reveal delay-100 text-center flex flex-col items-center justify-center">
<span className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] text-white tracking-tighter font-serif block mb-2 drop-shadow-2xl">
                    AI Speed.
                </span>
<span className="text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] text-white tracking-tighter font-serif italic block drop-shadow-2xl">
                    Cinematic Soul.
                </span>
</h1>

<p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mt-12 mb-12 reveal delay-200 font-light drop-shadow-md text-shadow-sm">
                The storytelling agency for YouTube creators and luxury brands. 
                <br className="hidden md:block"/>Where traditional filmmaking craft meets generative AI power.
            </p>

<div className="reveal delay-300">
<button className="relative group px-10 py-4 bg-white text-black overflow-hidden rounded-full transition-all hover:bg-[#2E5BFF] hover:text-white hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(46,91,255,0.6)] focus:outline-none focus:ring-2 focus:ring-white">
<span className="relative flex items-center gap-3 text-sm font-semibold tracking-wide uppercase">
                        Start Your Story
                        <svg aria-hidden="true" className="iconify fill-current iconify--lucide" data-icon="lucide:play" data-width="16" height="16" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 3L20 12L6 21V3Z" stroke="none"></path></svg>
</span>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 animate-bounce pointer-events-none">
<span className="text-[10px] uppercase tracking-widest text-neutral-400">Scroll</span>
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</header>

<section className="py-24 md:py-32 px-6 bg-[#0A0A0A]" id="work">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-serif text-white mb-3">Selected Works</h2>
<p className="text-neutral-400 font-light text-sm max-w-md">Curated narratives forged by human direction and machine acceleration.</p>
</div>
<a className="text-xs uppercase tracking-widest text-[#2E5BFF] hover:text-white transition-colors flex items-center gap-2 group" href="#">
                    View All Projects
                    <svg aria-hidden="true" className="iconify group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform iconify--lucide" data-icon="lucide:arrow-up-right" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10M7 17L17 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[400px]">

<div className="group relative md:col-span-2 rounded-[4px] overflow-hidden cursor-pointer bg-neutral-900">
<img alt="Vogue Future Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100" loading="lazy" src="https://images.unsplash.com/photo-1529139574466-a302d2d3f524?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] uppercase tracking-wider text-white">Fashion</span>
<span className="px-2 py-1 bg-[#2E5BFF]/80 backdrop-blur-md rounded text-[10px] uppercase tracking-wider text-white">AI Enhanced</span>
</div>
<h3 className="text-3xl font-serif text-white mb-1 italic">Vogue Future</h3>
<p className="text-neutral-300 text-sm line-clamp-1 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-75">Digital couture campaign for the metaverse age.</p>
</div>
</div>

<div className="group relative rounded-[4px] overflow-hidden cursor-pointer bg-neutral-900">
<img alt="The Noir Cut Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100" loading="lazy" src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
<h3 className="text-2xl font-serif text-white mb-1 italic">The Noir Cut</h3>
<p className="text-neutral-300 text-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">Documentary Series</p>
</div>
</div>

<div className="group relative rounded-[4px] overflow-hidden cursor-pointer bg-neutral-900">
<img alt="Neo Tokyo Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100" loading="lazy" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
<h3 className="text-2xl font-serif text-white mb-1 italic">Neo Tokyo</h3>
<p className="text-neutral-300 text-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">Music Video Production</p>
</div>
</div>

<div className="group relative md:col-span-2 rounded-[4px] overflow-hidden cursor-pointer bg-neutral-900">
<img alt="Alpine Legacy Project" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-70 group-hover:opacity-100" loading="lazy" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-2">
<span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded text-[10px] uppercase tracking-wider text-white">Brand Story</span>
</div>
<h3 className="text-3xl font-serif text-white mb-1 italic">Alpine Legacy</h3>
<p className="text-neutral-300 text-sm md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">Rebranding the silence of peaks.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 border-y border-white/5 relative overflow-hidden" id="process">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#2E5BFF] opacity-[0.02] blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-serif text-white mb-4">The Craft</h2>
<p className="text-neutral-400 font-light">Bridging the gap between raw data and human emotion.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative">

<div className="group p-8 border-l border-white/10 hover:border-[#2E5BFF] transition-all duration-500 h-full pl-8">
<div className="w-10 h-10 mb-6 text-neutral-500 group-hover:text-[#2E5BFF] transition-all duration-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:cpu" data-width="40" height="40" role="img" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<span className="text-xs font-mono text-[#2E5BFF] mb-2 block">01 / INPUT</span>
<h3 className="text-xl font-serif text-white mb-3">Raw AI Synthesis</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                        We leverage generative models to create storyboards, synthesized voiceovers, and dynamic visual assets at unprecedented speed.
                    </p>
</div>

<div className="group p-8 border-l border-white/10 hover:border-[#2E5BFF] transition-all duration-500 h-full pl-8">
<div className="w-10 h-10 mb-6 text-neutral-500 group-hover:text-[#2E5BFF] transition-all duration-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layers" data-width="40" height="40" role="img" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m12.83 2.18l9.17 5.33a1.42 1.42 0 0 1 0 2.5l-9.17 5.33a1.42 1.42 0 0 1-1.66 0L2 10a1.42 1.42 0 0 1 0-2.5l9.17-5.32a1.42 1.42 0 0 1 1.66 0z"></path><path d="m22 17.65l-9.17 5.35a1.42 1.42 0 0 1-1.66 0L2 17.65"></path><path d="m22 13.65l-9.17 5.35a1.42 1.42 0 0 1-1.66 0L2 13.65"></path></g></svg>
</div>
<span className="text-xs font-mono text-[#2E5BFF] mb-2 block">02 / REFINE</span>
<h3 className="text-xl font-serif text-white mb-3">Human Curation</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                        Our directors filter the noise, selecting only the frames that carry weight and meaning, discarding the uncanny for the sublime.
                    </p>
</div>

<div className="group p-8 border-l border-white/10 hover:border-[#2E5BFF] transition-all duration-500 h-full pl-8">
<div className="w-10 h-10 mb-6 text-neutral-500 group-hover:text-[#2E5BFF] transition-all duration-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:film" data-width="40" height="40" role="img" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M7 3v18M3 7.5h4M3 12h18M3 16.5h4M17 3v18m0-13.5h4m-4 9h4"></path></g></svg>
</div>
<span className="text-xs font-mono text-[#2E5BFF] mb-2 block">03 / MASTER</span>
<h3 className="text-xl font-serif text-white mb-3">Cinematic Grade</h3>
<p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                        Final color grading, sound design, and grain overlays infuse traditional filmmaking soul into every AI-generated frame.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0A0A0A]" id="services">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="flex flex-col p-8 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300 group border border-white/5 hover:border-white/10">
<div className="mb-6"><svg aria-hidden="true" className="iconify text-neutral-400 group-hover:text-[#2E5BFF] transition-colors iconify--lucide" data-icon="lucide:zap" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<h3 className="text-2xl font-serif text-white mb-2 italic">Creators</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-6">For High-Growth Channels</p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="w-1.5 h-1.5 bg-[#2E5BFF] rounded-full"></span>Viral Editing Pace</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="w-1.5 h-1.5 bg-[#2E5BFF] rounded-full"></span>AI Thumbnails &amp; Titles</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="w-1.5 h-1.5 bg-[#2E5BFF] rounded-full"></span>Weekly Turnaround</li>
</ul>
<a className="w-full py-3 text-center border-b border-white/20 text-sm text-white hover:border-[#2E5BFF] hover:text-[#2E5BFF] transition-all" href="#">Select Tier</a>
</div>

<div className="flex flex-col p-8 bg-neutral-900 border border-[#2E5BFF]/30 relative group shadow-2xl shadow-black/50">
<div className="absolute top-0 right-0 p-4"><div className="w-2 h-2 bg-[#2E5BFF] rounded-full animate-pulse"></div></div>
<div className="mb-6"><svg aria-hidden="true" className="iconify text-[#2E5BFF] iconify--lucide" data-icon="lucide:briefcase" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg></div>
<h3 className="text-2xl font-serif text-white mb-2 italic">Brands</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-6">For Commercial Spots</p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="w-1.5 h-1.5 bg-[#2E5BFF] rounded-full"></span>Full Storyboard Gen</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="w-1.5 h-1.5 bg-[#2E5BFF] rounded-full"></span>Cinematic Color Grading</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="w-1.5 h-1.5 bg-[#2E5BFF] rounded-full"></span>Multi-Format Assets</li>
</ul>
<a className="w-full py-3 text-center bg-[#2E5BFF] text-white text-sm hover:bg-[#2E5BFF]/90 transition-all" href="#">Select Tier</a>
</div>

<div className="flex flex-col p-8 bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300 group border border-white/5 hover:border-white/10">
<div className="mb-6"><svg aria-hidden="true" className="iconify text-neutral-400 group-hover:text-[#2E5BFF] transition-colors iconify--lucide" data-icon="lucide:diamond" data-width="28" height="28" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></div>
<h3 className="text-2xl font-serif text-white mb-2 italic">Luxury</h3>
<p className="text-xs text-neutral-500 uppercase tracking-wider mb-6">Bespoke Production</p>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="w-1.5 h-1.5 bg-[#2E5BFF] rounded-full"></span>On-Location Shoot + AI</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="w-1.5 h-1.5 bg-[#2E5BFF] rounded-full"></span>Dedicated Creative Director</li>
<li className="flex items-center gap-3 text-sm text-neutral-300"><span className="w-1.5 h-1.5 bg-[#2E5BFF] rounded-full"></span>NDAs &amp; Exclusivity</li>
</ul>
<a className="w-full py-3 text-center border-b border-white/20 text-sm text-white hover:border-[#2E5BFF] hover:text-[#2E5BFF] transition-all" href="#">Contact Us</a>
</div>
</div>
</div>
</section>

<footer className="relative py-32 px-6 bg-black border-t border-white/5" id="contact">
<div className="max-w-2xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-serif text-white mb-8 italic">Ready to cut through the noise?</h2>
<p className="text-neutral-400 mb-12 font-light">Join the waiting list for our next production cycle.</p>
<form className="flex flex-col gap-6 relative z-10">
<div className="relative group">
<input className="w-full bg-transparent border-b border-neutral-800 py-4 text-lg text-white placeholder-neutral-700 focus:outline-none focus:border-[#2E5BFF] transition-colors text-center font-serif" placeholder="Channel / Brand Link" type="text"/>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-neutral-800 py-4 text-lg text-white placeholder-neutral-700 focus:outline-none focus:border-[#2E5BFF] transition-colors text-center font-serif" placeholder="Email Address" type="email"/>
</div>
<button className="mt-8 mx-auto px-10 py-4 bg-white text-black font-medium rounded-full hover:bg-[#2E5BFF] hover:text-white transition-all duration-500 hover:scale-110 flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#2E5BFF] focus:ring-offset-2 focus:ring-offset-black" type="button">
                    Submit Inquiry
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:send" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
<div className="mt-24 flex flex-col md:flex-row items-center justify-between text-neutral-700 text-xs uppercase tracking-widest gap-4">
<span>© 2024 Hybrid Agency</span>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
