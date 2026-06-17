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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-4">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-[#F5C518] text-black rounded px-1.5 py-0.5 font-semibold tracking-tight text-lg font-sans">CS</div>
<span className="text-white font-medium tracking-tight text-lg group-hover:text-[#F5C518] transition-colors font-sans">CineScope</span>
</a>

<div className="hidden md:flex flex-1 max-w-xl relative">
<input className="w-full bg-[#1F1F1F] border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-[#F5C518] focus:ring-1 focus:ring-[#F5C518] transition-all placeholder:text-slate-500" placeholder="Search movies, cast, genres..." type="text"/>
<div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500">
<iconify-icon height="18" icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
</div>

<div className="flex items-center gap-4">
<button className="flex items-center gap-2 text-sm font-medium hover:text-white transition-colors">
<iconify-icon height="20" icon="solar:bookmark-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span className="hidden sm:block font-sans">Watchlist</span>
</button>
<button className="text-sm font-medium text-black bg-[#F5C518] px-4 py-1.5 rounded-md hover:bg-[#E2B616] transition-colors font-sans">
                    Sign In
                </button>
</div>
</div>
</nav>

<main className="pt-24 pb-12 px-4 lg:px-8 max-w-7xl mx-auto">

<section className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 mb-16 animate-fade-in">

<div className="relative group w-full max-w-[300px] mx-auto lg:mx-0">
<div className="aspect-[2/3] rounded-xl overflow-hidden shadow-2xl shadow-black/50 border border-white/5 relative z-10">
<img alt="Movie Poster" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</div>
<button className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full p-3 z-20 hover:scale-110 hover:bg-white/20 transition-all shadow-lg hidden group-hover:flex">
<iconify-icon height="20" icon="solar:maximize-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>

<div className="flex flex-col justify-end lg:pb-2">

<div className="flex flex-wrap gap-2 mb-4">
<span className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-slate-400 hover:text-white hover:border-white/30 transition-colors cursor-pointer font-sans">Science Fiction</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-slate-400 hover:text-white hover:border-white/30 transition-colors cursor-pointer font-sans">Adventure</span>
<span className="px-3 py-1 rounded-full border border-white/10 text-xs font-medium text-slate-400 hover:text-white hover:border-white/30 transition-colors cursor-pointer font-sans">Drama</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight mb-2 font-oswald font-normal">Interstellar Horizon</h1>
<p className="text-slate-500 text-lg italic mb-4 font-light font-sans">Mankind was born on Earth. It was never meant to die here.</p>
<div className="flex flex-wrap items-center gap-6 text-sm md:text-base text-slate-400 mb-6">
<span className="text-white font-medium font-sans">2024</span>
<div className="flex items-center gap-1.5 text-white">
<iconify-icon className="text-[#F5C518]" height="18" icon="solar:star-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span className="font-medium text-lg font-sans">8.7</span><span className="text-slate-500 text-sm font-sans">/10</span>
</div>
<span className="font-sans">2h 49m</span>
<span className="border border-slate-600 rounded px-1 text-xs py-0.5 font-medium text-slate-300 font-sans">PG-13</span>
<span className="flex items-center gap-1 font-sans"><iconify-icon className="text-slate-500" icon="solar:soundwave-linear"></iconify-icon> Dolby Atmos</span>
<span className="flex items-center gap-1 font-sans"><iconify-icon className="text-slate-500" icon="solar:videocamera-linear"></iconify-icon> IMAX</span>
</div>
<p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-8 font-light font-sans">
                    In a future where Earth is becoming uninhabitable, a team of explorers must travel through a newly discovered wormhole to ensure humanity's survival. They embark on a journey that transcends time and space, challenging the very fabric of reality.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="flex items-center gap-2 bg-[#F5C518] text-black px-8 py-3 rounded-lg font-medium hover:bg-[#E2B616] transition-all hover:shadow-[0_0_20px_rgba(245,197,24,0.3)] active:scale-95 font-sans">
<iconify-icon height="24" icon="solar:play-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
                        Watch Trailer
                    </button>
<button className="flex items-center gap-2 bg-white/5 text-white border border-white/10 px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors active:scale-95 font-sans">
<iconify-icon height="24" icon="solar:add-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
                        Add to Watchlist
                    </button>
<button className="p-3 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10 transition-colors">
<iconify-icon height="24" icon="solar:share-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</section>

<div className="border-t border-white/5 my-12"></div>

<section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">

<div className="lg:col-span-2 space-y-12">

<div className="">
<h3 className="text-xl text-white tracking-tight mb-4 flex items-center gap-2 font-oswald font-normal">
<iconify-icon className="text-[#F5C518]" icon="solar:hashtag-linear"></iconify-icon> Plot Keywords
                    </h3>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 rounded-md bg-[#1A1A1A] border border-white/5 text-sm text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer font-sans">Space Travel</span>
<span className="px-3 py-1.5 rounded-md bg-[#1A1A1A] border border-white/5 text-sm text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer font-sans">Wormhole</span>
<span className="px-3 py-1.5 rounded-md bg-[#1A1A1A] border border-white/5 text-sm text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer font-sans">Dystopia</span>
<span className="px-3 py-1.5 rounded-md bg-[#1A1A1A] border border-white/5 text-sm text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer font-sans">Father Daughter Relationship</span>
<span className="px-3 py-1.5 rounded-md bg-[#1A1A1A] border border-white/5 text-sm text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer font-sans">Time Dilation</span>
<span className="px-3 py-1.5 rounded-md bg-[#1A1A1A] border border-white/5 text-sm text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer font-sans">Physics</span>
<span className="px-3 py-1.5 rounded-md bg-[#1A1A1A] border border-white/5 text-sm text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer font-sans">Survival</span>
<span className="px-3 py-1.5 rounded-md bg-[#1A1A1A] border border-white/5 text-sm text-slate-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer font-sans">NASA</span>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl text-white tracking-tight border-l-4 border-[#F5C518] pl-3 font-oswald font-normal">Top Cast</h3>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-slate-400 transition-colors">
<iconify-icon height="20" icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-slate-400 transition-colors">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x">

<div className="flex-none w-32 snap-start group cursor-pointer">
<div className="w-32 h-44 bg-[#1A1A1A] rounded-lg overflow-hidden mb-2 relative">
<img alt="Actor" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-white font-medium text-xs truncate font-sans">Matthew McConaughey</h4>
<p className="text-slate-500 text-[10px] truncate uppercase tracking-wide font-sans">Cooper</p>
</div>

<div className="flex-none w-32 snap-start group cursor-pointer">
<div className="w-32 h-44 bg-[#1A1A1A] rounded-lg overflow-hidden mb-2 relative">
<img alt="Actor" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-white font-medium text-xs truncate font-sans">Anne Hathaway</h4>
<p className="text-slate-500 text-[10px] truncate uppercase tracking-wide font-sans">Brand</p>
</div>

<div className="flex-none w-32 snap-start group cursor-pointer">
<div className="w-32 h-44 bg-[#1A1A1A] rounded-lg overflow-hidden mb-2 relative">
<img alt="Actor" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-white font-medium text-xs truncate font-sans">Jessica Chastain</h4>
<p className="text-slate-500 text-[10px] truncate uppercase tracking-wide font-sans">Murph</p>
</div>

<div className="flex-none w-32 snap-start group cursor-pointer">
<div className="w-32 h-44 bg-[#1A1A1A] rounded-lg overflow-hidden mb-2 relative">
<img alt="Actor" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-white font-medium text-xs truncate font-sans">Michael Caine</h4>
<p className="text-slate-500 text-[10px] truncate uppercase tracking-wide font-sans">Professor Brand</p>
</div>

<div className="flex-none w-32 snap-start group cursor-pointer">
<div className="w-32 h-44 bg-[#1A1A1A] rounded-lg overflow-hidden mb-2 relative">
<img alt="Actor" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-white font-medium text-xs truncate font-sans">Matt Damon</h4>
<p className="text-slate-500 text-[10px] truncate uppercase tracking-wide font-sans">Dr. Mann</p>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-8">
<div>
<h3 className="text-lg text-white font-medium tracking-tight mb-4 flex items-center gap-2 font-sans">
                             Full Crew
                        </h3>
<ul className="space-y-0">
<li className="flex justify-between border-b border-white/5 py-3">
<span className="text-slate-500 text-sm font-sans">Director</span>
<span className="text-white text-sm font-medium font-sans">Christopher Nolan</span>
</li>
<li className="flex justify-between border-b border-white/5 py-3">
<span className="text-slate-500 text-sm font-sans">Writers</span>
<span className="text-white text-sm text-right font-sans">Jonathan Nolan, Christopher Nolan</span>
</li>
<li className="flex justify-between border-b border-white/5 py-3">
<span className="text-slate-500 text-sm font-sans">Cinematography</span>
<span className="text-white text-sm font-sans">Hoyte van Hoytema</span>
</li>
<li className="flex justify-between border-b border-white/5 py-3">
<span className="text-slate-500 text-sm font-sans">Music</span>
<span className="text-white text-sm font-sans">Hans Zimmer</span>
</li>
<li className="flex justify-between border-b border-white/5 py-3">
<span className="text-slate-500 text-sm font-sans">Editing</span>
<span className="text-white text-sm font-sans">Lee Smith</span>
</li>
<li className="flex justify-between border-b border-white/5 py-3">
<span className="text-slate-500 text-sm font-sans">Production Design</span>
<span className="text-white text-sm font-sans">Nathan Crowley</span>
</li>
</ul>
</div>
<div>
<h3 className="text-lg text-white font-medium tracking-tight mb-4 flex items-center gap-2 font-sans">
                            Production Info
                        </h3>
<ul className="space-y-0">
<li className="flex justify-between border-b border-white/5 py-3">
<span className="text-slate-500 text-sm font-sans">Production Co.</span>
<span className="text-white text-sm text-right font-sans">Paramount, Warner Bros., Legendary</span>
</li>
<li className="flex justify-between border-b border-white/5 py-3">
<span className="text-slate-500 text-sm font-sans">VFX</span>
<span className="text-white text-sm text-right font-sans">Double Negative (DPEG)</span>
</li>
<li className="flex justify-between border-b border-white/5 py-3">
<span className="text-slate-500 text-sm font-sans">Filming Locations</span>
<span className="text-white text-sm text-right font-sans">Iceland, Canada, USA</span>
</li>
<li className="flex justify-between border-b border-white/5 py-3">
<span className="text-slate-500 text-sm font-sans">Est. Budget</span>
<span className="text-white text-sm font-sans">$165,000,000</span>
</li>
<li className="flex justify-between border-b border-white/5 py-3">
<span className="text-slate-500 text-sm font-sans">Gross Worldwide</span>
<span className="text-[#F5C518] text-sm font-medium font-sans">$701,729,206</span>
</li>
</ul>
</div>
</div>

<div className="bg-[#1A1A1A] border border-white/5 rounded-xl p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-white font-medium flex items-center gap-2 font-sans">
<iconify-icon className="text-[#F5C518]" icon="solar:cup-star-linear"></iconify-icon> Awards &amp; Nominations
                        </h3>
<span className="text-xs text-slate-500 font-sans">View All</span>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="bg-black/40 rounded p-3 flex items-center gap-3 border border-white/5">
<div className="w-10 h-10 flex items-center justify-center bg-[#F5C518] text-black font-bold text-xs rounded font-sans">OSC</div>
<div>
<h5 className="text-white text-xs font-semibold font-sans">Academy Awards</h5>
<p className="text-slate-500 text-[10px] font-sans">Winner • Best Visual Effects</p>
</div>
</div>
<div className="bg-black/40 rounded p-3 flex items-center gap-3 border border-white/5">
<div className="w-10 h-10 flex items-center justify-center bg-slate-700 text-white font-bold text-xs rounded font-sans">BAF</div>
<div>
<h5 className="text-white text-xs font-semibold font-sans">BAFTA Awards</h5>
<p className="text-slate-500 text-[10px] font-sans">Winner • Best Special Visual Effects</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1">
<div className="bg-[#1A1A1A]/50 border border-white/5 rounded-xl p-6 lg:sticky lg:top-24 space-y-8">

<div className="">
<h4 className="text-white font-medium mb-4 flex items-center gap-2 text-sm uppercase tracking-wider text-slate-500 font-sans">
                             Release Details
                        </h4>
<ul className="space-y-3">
<li className="flex justify-between text-sm">
<span className="text-slate-500 font-sans">Original Title</span>
<span className="text-white font-sans">Interstellar</span>
</li>
<li className="flex justify-between text-sm">
<span className="text-slate-500 font-sans">Status</span>
<span className="text-white font-sans">Released</span>
</li>
<li className="flex justify-between text-sm">
<span className="text-slate-500 font-sans">Release Date</span>
<span className="text-white font-sans">Nov 7, 2014 (USA)</span>
</li>
<li className="flex justify-between text-sm">
<span className="text-slate-500 font-sans">Language</span>
<span className="text-white font-sans">English</span>
</li>
<li className="flex justify-between text-sm">
<span className="text-slate-500 font-sans">Also Known As</span>
<span className="text-white truncate max-w-[150px] text-right font-sans" title="Flora's Letter">Flora's Letter</span>
</li>
<li className="flex justify-between text-sm">
<span className="text-slate-500 font-sans">Country of Origin</span>
<span className="text-white text-right font-sans">USA, UK, Canada</span>
</li>
</ul>
</div>
<div className="border-t border-white/5"></div>

<div className="">
<h4 className="text-white font-medium mb-4 flex items-center gap-2 text-sm uppercase tracking-wider text-slate-500 font-sans">
                             Technical Specs
                        </h4>
<ul className="space-y-4">
<li className="text-sm">
<span className="block text-slate-500 text-xs mb-1 font-sans">Runtime</span>
<span className="text-white font-sans">2 hr 49 min (169 min)</span>
</li>
<li className="text-sm">
<span className="block text-slate-500 text-xs mb-1 font-sans">Sound Mix</span>
<span className="text-white leading-tight block font-sans">Datasat, Dolby Digital, IMAX 6-Track, Dolby Atmos, SDDS</span>
</li>
<li className="text-sm">
<span className="block text-slate-500 text-xs mb-1 font-sans">Color</span>
<span className="text-white font-sans">Color, Black and White</span>
</li>
<li className="text-sm">
<span className="block text-slate-500 text-xs mb-1 font-sans">Aspect Ratio</span>
<span className="text-white font-sans">2.39 : 1 (Scope)</span>
<span className="text-white block font-sans">1.43 : 1 (IMAX 70mm)</span>
<span className="text-white block font-sans">1.90 : 1 (IMAX Digital)</span>
</li>
<li className="text-sm">
<span className="block text-slate-500 text-xs mb-1 font-sans">Camera</span>
<span className="text-white leading-tight block font-sans">IMAX MSM 9802, Panavision Panaflex Millennium XL2, Panavision System 65 Studio</span>
</li>
<li className="text-sm">
<span className="block text-slate-500 text-xs mb-1 font-sans">Negative Format</span>
<span className="text-white font-sans">35 mm, 65 mm (horizontal)</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<div className="border-t border-white/5 my-12"></div>

<section className="mb-16">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<h3 className="text-2xl text-white tracking-tight border-l-4 border-[#F5C518] pl-3 font-oswald font-normal">Photos &amp; Posters</h3>
<span className="text-sm text-slate-500 mt-1 font-sans">68 Images</span>
</div>
<div className="flex gap-2">
<button className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-slate-400 transition-colors">
<iconify-icon height="20" icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="p-2 rounded-full border border-white/10 hover:bg-white/5 text-slate-400 transition-colors">
<iconify-icon height="20" icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x items-center">

<div className="flex-none w-[300px] snap-start group cursor-pointer relative">
<div className="aspect-video rounded-lg overflow-hidden border border-white/5 relative">
<img alt="Scene" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:maximize-linear" width="24"></iconify-icon>
</div>
</div>
<div className="mt-2 flex justify-between">
<span className="text-xs text-slate-400 font-sans">Scene Still</span>
<span className="text-xs text-slate-600 font-sans">3840 x 2160</span>
</div>
</div>

<div className="flex-none w-[300px] snap-start group cursor-pointer relative">
<div className="aspect-video rounded-lg overflow-hidden border border-white/5 relative">
<img alt="Scene" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1614730341194-75c607400070?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:maximize-linear" width="24"></iconify-icon>
</div>
</div>
<div className="mt-2 flex justify-between">
<span className="text-xs text-slate-400 font-sans">Miller's Planet</span>
<span className="text-xs text-slate-600 font-sans">1920 x 1080</span>
</div>
</div>

<div className="flex-none w-[180px] snap-start group cursor-pointer relative">
<div className="aspect-[2/3] rounded-lg overflow-hidden border border-white/5 relative">
<img alt="Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:maximize-linear" width="24"></iconify-icon>
</div>
</div>
<div className="mt-2 flex justify-between">
<span className="text-xs text-slate-400 font-sans">Teaser Poster</span>
<span className="text-xs text-slate-600 font-sans">EN</span>
</div>
</div>

<div className="flex-none w-[300px] snap-start group cursor-pointer relative">
<div className="aspect-video rounded-lg overflow-hidden border border-white/5 relative">
<img alt="Scene" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1446941611757-91d2c3bd3d45?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:maximize-linear" width="24"></iconify-icon>
</div>
</div>
<div className="mt-2 flex justify-between">
<span className="text-xs text-slate-400 font-sans">Endurance Docking</span>
<span className="text-xs text-slate-600 font-sans">4K Still</span>
</div>
</div>

<div className="flex-none w-[180px] snap-start group cursor-pointer relative">
<div className="aspect-[2/3] rounded-lg overflow-hidden border border-white/5 relative">
<img alt="Poster" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:maximize-linear" width="24"></iconify-icon>
</div>
</div>
<div className="mt-2 flex justify-between">
<span className="text-xs text-slate-400 font-sans">IMAX Poster</span>
<span className="text-xs text-slate-600 font-sans">EN</span>
</div>
</div>

<div className="flex-none w-[300px] snap-start group cursor-pointer relative">
<div className="aspect-video rounded-lg overflow-hidden border border-white/5 relative">
<img alt="Scene" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1454789548728-85d2696cfbaf?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
<iconify-icon className="text-white" icon="solar:maximize-linear" width="24"></iconify-icon>
</div>
</div>
<div className="mt-2 flex justify-between">
<span className="text-xs text-slate-400 font-sans">Control Room</span>
<span className="text-xs text-slate-600 font-sans">BTS</span>
</div>
</div>
</div>
</section>

<div className="border-t border-white/5 my-12"></div>

<section className="mb-16">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<h3 className="text-2xl text-white tracking-tight border-l-4 border-[#F5C518] pl-3 font-oswald font-normal">User Reviews</h3>
<span className="text-sm text-slate-500 mt-1 font-sans">4.2k Reviews</span>
</div>
<button className="text-[#F5C518] text-sm font-medium hover:underline flex items-center gap-1 font-sans">
                    See All <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="grid md:grid-cols-2 gap-4">

<div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center text-white font-bold text-sm font-sans">JD</div>
<div>
<h4 className="text-white font-medium text-sm font-sans">John Doe</h4>
<div className="flex items-center gap-1">
<iconify-icon className="text-[#F5C518]" height="14" icon="solar:star-linear" width="14"></iconify-icon>
<span className="text-slate-400 text-xs font-sans">10/10</span>
</div>
</div>
</div>
<span className="text-slate-600 text-xs font-sans">2 days ago</span>
</div>
<h5 className="text-white font-medium mb-2 text-sm font-sans">A Masterpiece of Sci-Fi</h5>
<p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 font-sans">
                        This movie is an absolute masterpiece. The visuals, the score by Hans Zimmer, and the emotional depth of the story make it one of the best sci-fi films ever made. It is not just a movie, it is an experience.
                    </p>
<div className="flex items-center gap-4 text-slate-500">
<button className="flex items-center gap-1.5 hover:text-[#F5C518] transition-colors text-xs font-sans">
<iconify-icon height="16" icon="solar:like-linear" strokeWidth="1.5" width="16"></iconify-icon> 245
                        </button>
<button className="flex items-center gap-1.5 hover:text-white transition-colors text-xs font-sans">
<iconify-icon height="16" icon="solar:chat-line-linear" strokeWidth="1.5" width="16"></iconify-icon> Reply
                        </button>
</div>
</div>

<div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/5 hover:border-white/10 transition-all hover:-translate-y-1">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F5C518] to-amber-600 flex items-center justify-center text-black font-bold text-sm font-sans">AS</div>
<div>
<h4 className="text-white font-medium text-sm font-sans">Alice Smith</h4>
<div className="flex items-center gap-1">
<iconify-icon className="text-[#F5C518]" height="14" icon="solar:star-linear" width="14"></iconify-icon>
<span className="text-slate-400 text-xs font-sans">9/10</span>
</div>
</div>
</div>
<span className="text-slate-600 text-xs font-sans">1 week ago</span>
</div>
<h5 className="text-white font-medium mb-2 text-sm font-sans">Stunning Visuals</h5>
<p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3 font-sans">
                        The visual effects are groundbreaking. I felt like I was in space. The plot is complex but rewarding if you pay attention. Definitely worth watching in the highest quality possible.
                    </p>
<div className="flex items-center gap-4 text-slate-500">
<button className="flex items-center gap-1.5 hover:text-[#F5C518] transition-colors text-xs font-sans">
<iconify-icon height="16" icon="solar:like-linear" strokeWidth="1.5" width="16"></iconify-icon> 89
                        </button>
<button className="flex items-center gap-1.5 hover:text-white transition-colors text-xs font-sans">
<iconify-icon height="16" icon="solar:chat-line-linear" strokeWidth="1.5" width="16"></iconify-icon> Reply
                        </button>
</div>
</div>
</div>
</section>

<section className="">
<h3 className="text-2xl font-normal text-white tracking-tight font-oswald border-[#F5C518] border-l-4 mb-6 pl-3">More Like This</h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">

<div className="group relative cursor-pointer">
<div className="aspect-[2/3] rounded-lg overflow-hidden bg-[#1A1A1A] mb-2 relative">
<img alt="Movie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<button className="bg-[#F5C518] text-black px-4 py-2 rounded-full text-xs font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform font-sans">View Details</button>
</div>
</div>
<div className="flex justify-between items-start">
<h4 className="text-white text-sm font-medium truncate pr-2 group-hover:text-[#F5C518] transition-colors font-sans">Gravity</h4>
<div className="flex items-center gap-0.5 text-xs text-slate-400 font-sans">
<iconify-icon className="text-[#F5C518]" icon="solar:star-linear" width="10"></iconify-icon> 7.7
                        </div>
</div>
<p className="text-xs text-slate-500 font-sans">2013</p>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-[2/3] rounded-lg overflow-hidden bg-[#1A1A1A] mb-2 relative">
<img alt="Movie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="group-hover:opacity-100 transition-opacity flex bg-black/60 opacity-0 absolute top-0 right-0 bottom-0 left-0 backdrop-blur-sm items-center justify-center">
<button className="bg-[#F5C518] text-black px-4 py-2 rounded-full text-xs font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform font-sans">View Details</button>
</div>
</div>
<div className="flex justify-between items-start">
<h4 className="text-white text-sm font-medium truncate pr-2 group-hover:text-[#F5C518] transition-colors font-sans">The Martian</h4>
<div className="flex items-center gap-0.5 text-xs text-slate-400 font-sans">
<iconify-icon className="text-[#F5C518]" icon="solar:star-linear" width="10"></iconify-icon> 8.0
                        </div>
</div>
<p className="text-xs text-slate-500 font-sans">2015</p>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-[2/3] rounded-lg overflow-hidden bg-[#1A1A1A] mb-2 relative">
<img alt="Movie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<button className="bg-[#F5C518] text-black px-4 py-2 rounded-full text-xs font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform font-sans">View Details</button>
</div>
</div>
<div className="flex justify-between items-start">
<h4 className="text-white text-sm font-medium truncate pr-2 group-hover:text-[#F5C518] transition-colors font-sans">Inception</h4>
<div className="flex items-center gap-0.5 text-xs text-slate-400 font-sans">
<iconify-icon className="text-[#F5C518]" icon="solar:star-linear" width="10"></iconify-icon> 8.8
                        </div>
</div>
<p className="text-xs text-slate-500 font-sans">2010</p>
</div>

<div className="group relative cursor-pointer">
<div className="aspect-[2/3] rounded-lg overflow-hidden bg-[#1A1A1A] mb-2 relative">
<img alt="Movie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<button className="bg-[#F5C518] text-black px-4 py-2 rounded-full text-xs font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform font-sans">View Details</button>
</div>
</div>
<div className="flex justify-between items-start">
<h4 className="text-white text-sm font-medium truncate pr-2 group-hover:text-[#F5C518] transition-colors font-sans">Moon</h4>
<div className="flex items-center gap-0.5 text-xs text-slate-400 font-sans">
<iconify-icon className="text-[#F5C518]" icon="solar:star-linear" width="10"></iconify-icon> 7.8
                        </div>
</div>
<p className="text-xs text-slate-500 font-sans">2009</p>
</div>

<div className="group relative cursor-pointer hidden lg:block">
<div className="aspect-[2/3] rounded-lg overflow-hidden bg-[#1A1A1A] mb-2 relative">
<img alt="Movie" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
<button className="bg-[#F5C518] text-black px-4 py-2 rounded-full text-xs font-semibold transform translate-y-4 group-hover:translate-y-0 transition-transform font-sans">View Details</button>
</div>
</div>
<div className="flex justify-between items-start">
<h4 className="text-white text-sm font-medium truncate pr-2 group-hover:text-[#F5C518] transition-colors font-sans">Dune</h4>
<div className="flex items-center gap-0.5 text-xs text-slate-400 font-sans">
<iconify-icon className="text-[#F5C518]" icon="solar:star-linear" width="10"></iconify-icon> 8.0
                        </div>
</div>
<p className="text-xs text-slate-500 font-sans">2021</p>
</div>
</div>
</section>
</main>

<footer className="bg-[#0A0A0A] border-t border-white/5 py-12 px-4 lg:px-8">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start">
<div className="flex items-center gap-2 mb-2">
<div className="bg-[#F5C518] text-black rounded px-1.5 py-0.5 font-semibold tracking-tight text-sm font-sans">CS</div>
<span className="text-white font-medium tracking-tight font-sans">CineScope</span>
</div>
<p className="text-xs text-slate-500 font-sans">© 2024 CineScope Inc. All rights reserved.</p>
</div>
<div className="flex gap-8 text-sm text-slate-400">
<a className="hover:text-white transition-colors font-sans" href="#">About</a>
<a className="hover:text-white transition-colors font-sans" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors font-sans" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#F5C518] transition-colors" href="#">
<iconify-icon height="20" icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#F5C518] transition-colors" href="#">
<iconify-icon height="20" icon="solar:globe-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-[#F5C518] transition-colors" href="#">
<iconify-icon height="20" icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

    </>
  );
}
