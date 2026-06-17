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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-black/5 transition-all duration-300">
<div className="max-w-[95%] mx-auto px-2 h-14 flex justify-between items-center">
<div className="flex items-center gap-4">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold text-xs rounded-lg group-hover:bg-red-600 transition-colors">
                        HT
                    </div>
<span className="text-sm font-semibold tracking-tight text-black group-hover:text-red-600 transition-colors hidden sm:block">HEDNESFORD TOWN</span>
</a>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide text-neutral-500">
<a className="hover:text-black transition-colors" href="#">Matches</a>
<a className="hover:text-black transition-colors" href="#">Team</a>
<a className="hover:text-black transition-colors" href="#">Tickets</a>
<a className="hover:text-black transition-colors" href="#">News</a>
<a className="hover:text-black transition-colors" href="#">Community</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider text-neutral-500 hover:text-black mr-2" href="#">
<i className="w-3.5 h-3.5" data-lucide="user"></i> Sign In
                </a>
<button className="bg-black text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-800 transition-all flex items-center gap-2">
<span>Shop</span>
<i className="w-3 h-3" data-lucide="shopping-bag"></i>
</button>
</div>
</div>
</nav>
<main className="w-full pt-20 px-2 md:px-6 pb-12">

<section className="max-w-[1600px] mx-auto relative rounded-[2.5rem] overflow-hidden bg-[#080808] text-white min-h-[85vh] flex flex-col justify-between p-6 md:p-12 shadow-2xl shadow-neutral-200">

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<img alt="Background Texture" className="w-full h-full object-cover opacity-40 mix-blend-overlay grayscale" src="https://images.unsplash.com/photo-1510566337590-2fc1f21d0faa?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-600/20 blur-[150px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
</div>

<div className="relative z-10 flex justify-between items-start w-full opacity-0 animate-enter" style={{animationDelay: '0.1s'}}>
<div className="flex flex-col gap-1">
<span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">Official Site</span>
<span className="text-xs font-semibold tracking-tight">EST. 1880</span>
</div>
<div className="hidden md:flex items-center gap-2 border border-white/10 rounded-full px-3 py-1 bg-white/5 backdrop-blur-md">
<div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-[10px] font-medium tracking-wide">KEYS PARK: LIVE</span>
</div>
</div>

<div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-8 lg:mt-0 flex-grow">

<div className="space-y-8 opacity-0 animate-enter" style={{animationDelay: '0.3s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-400 text-[10px] font-bold tracking-widest uppercase">
                        Next Match: Stourbridge (H)
                    </div>
<h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter leading-[0.9] brand-font">
                        THE<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-500">PITMEN</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-md font-light leading-relaxed text-balance">
                        Experience football in its purest form. Heritage meets ambition at Keys Park. Join the revolution.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">
<button className="bg-white text-black px-8 py-4 rounded-full font-semibold tracking-tight hover:bg-neutral-200 transition-colors flex items-center gap-2 group">
                            Match Centre
                            <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<button className="px-8 py-4 rounded-full font-semibold tracking-tight border border-white/20 hover:bg-white/10 transition-colors text-white backdrop-blur-sm">
                            Buy Tickets
                        </button>
</div>
</div>

<div className="relative h-full min-h-[400px] flex items-end justify-center lg:justify-end opacity-0 animate-enter" style={{animationDelay: '0.5s'}}>

<div className="absolute bottom-10 right-10 md:right-20 w-64 h-64 md:w-96 md:h-96 rounded-full border border-white/10 flex items-center justify-center animate-[spin_20s_linear_infinite]">
<div className="w-[90%] h-[90%] rounded-full border border-dashed border-white/10"></div>
</div>
<img alt="Star Player" className="relative z-10 w-auto h-[110%] object-contain object-bottom -mb-12 hero-mask drop-shadow-2xl grayscale contrast-125 hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-20 left-0 md:-left-12 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl z-20 w-48 hover:scale-105 transition-transform">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-bold text-xs">09</div>
<div>
<div className="text-xs font-bold text-white uppercase">Sterling</div>
<div className="text-[10px] text-neutral-400">Top Scorer</div>
</div>
</div>
<div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-[85%]"></div>
</div>
<div className="flex justify-between mt-2 text-[10px] font-mono text-neutral-300">
<span>GOALS</span>
<span className="font-bold">12</span>
</div>
</div>
</div>
</div>
</section>

<div className="w-full overflow-hidden py-6 border-b border-neutral-200 bg-white">
<div className="ticker-track whitespace-nowrap flex gap-12 text-6xl font-bold text-neutral-100 uppercase tracking-tighter select-none">
<span>Pride of the Chase</span>
<span className="text-red-500">●</span>
<span>The Pitmen</span>
<span className="text-red-500">●</span>
<span>We Are United</span>
<span className="text-red-500">●</span>
<span>Pride of the Chase</span>
<span className="text-red-500">●</span>
<span>The Pitmen</span>
<span className="text-red-500">●</span>
<span>We Are United</span>
</div>
</div>

<section className="max-w-[1600px] mx-auto py-16 md:py-24">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 px-4">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter brand-font text-neutral-900 mb-2">LATEST <span className="text-neutral-400">UPDATES</span></h2>
<p className="text-neutral-500 text-sm md:text-base max-w-sm">Breaking news, match reports, and exclusive content from inside the club.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-semibold border-b border-black pb-0.5 hover:text-red-600 hover:border-red-600 transition-colors" href="#">
                    View Archive <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="bento-grid">

<article className="bento-large bg-[#f2f2f2] rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover-card cursor-pointer">
<div className="absolute top-0 right-0 p-8">
<i className="w-6 h-6 text-neutral-400 group-hover:text-black group-hover:rotate-45 transition-all" data-lucide="arrow-up-right"></i>
</div>
<div className="h-full flex flex-col justify-between relative z-10">
<div>
<span className="inline-block px-3 py-1 bg-white border border-neutral-200 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 shadow-sm text-red-600">
                                Matchday Live
                            </span>
<h3 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-[0.95] text-neutral-800">
                                PITMEN VS<br/>GLASSBOYS
                            </h3>
</div>
<div className="flex items-center gap-8 mt-8">
<div className="text-center">
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-xl font-bold text-neutral-800 mb-2 mx-auto">H</div>
<span className="text-xs font-bold uppercase tracking-wide">Hednesford</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl font-mono font-bold text-neutral-300">VS</span>
<span className="text-[10px] font-mono bg-black text-white px-2 py-1 rounded mt-2">15:00 KO</span>
</div>
<div className="text-center">
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-xl font-bold text-neutral-800 mb-2 mx-auto">S</div>
<span className="text-xs font-bold uppercase tracking-wide">Stourbridge</span>
</div>
</div>
<div className="mt-8 flex items-center gap-2 text-xs text-neutral-500 font-medium">
<i className="w-3.5 h-3.5" data-lucide="map-pin"></i>
                            Keys Park Stadium, Hednesford
                        </div>
</div>
</article>

<article className="bento-tall bg-[#da291c] text-white rounded-[2rem] p-8 relative overflow-hidden group hover-card cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
<img alt="Player" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="relative z-20 h-full flex flex-col justify-end">
<div className="mb-auto flex justify-between items-start">
<span className="px-2 py-1 bg-white/20 backdrop-blur-md rounded-lg text-[10px] font-bold uppercase tracking-wider">POTM</span>
<i className="w-5 h-5 fill-white text-white" data-lucide="star"></i>
</div>
<h3 className="text-3xl font-semibold tracking-tight leading-none mb-1">ROBERTS</h3>
<p className="text-white/80 text-xs font-medium mb-4">Defensive Masterclass in October</p>
<button className="w-full py-3 bg-white text-red-600 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-neutral-100 transition-colors">
                            Read Interview
                        </button>
</div>
</article>

<article className="bento-wide bg-white rounded-[2rem] p-8 relative group hover-card shadow-sm border border-neutral-100 cursor-pointer overflow-hidden">
<div className="flex flex-col md:flex-row gap-6 h-full items-center">
<div className="flex-1 space-y-4 relative z-10">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-neutral-900 rounded-full"></span>
<span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Club Statement</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight leading-snug group-hover:text-red-600 transition-colors">
                                New Ownership Consortium Completes Takeover
                            </h3>
<p className="text-sm text-neutral-500 line-clamp-2">
                                A historic day for Hednesford Town FC as we secure the future of the club with local investment and global ambition.
                            </p>
<span className="text-xs font-medium underline decoration-neutral-300 underline-offset-4 group-hover:decoration-red-500 transition-all">Read Full Story</span>
</div>
<div className="w-full md:w-1/3 aspect-video md:aspect-square rounded-2xl overflow-hidden relative">
<img alt="Stadium" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&amp;w=800"/>
</div>
</div>
</article>

<article className="bento-std bg-[#050505] text-white rounded-[2rem] p-8 relative overflow-hidden group hover-card cursor-pointer">
<div className="absolute top-0 right-0 w-32 h-32 bg-red-600 rounded-full blur-[60px] opacity-40 group-hover:opacity-60 transition-opacity"></div>
<div className="flex flex-col h-full justify-between relative z-10">
<div className="flex justify-between items-start">
<span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">Store</span>
<div className="bg-white text-black text-[10px] font-bold px-2 py-1 rounded">NEW</div>
</div>
<div className="flex justify-center my-4">

<svg className="w-20 h-20 text-neutral-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24">
<path d="M20.38 3.4a1.64 1.64 0 0 0-1.22-1.35C15.93 1.29 13.98 1 12 1c-1.98 0-3.93.29-7.16 1.05a1.64 1.64 0 0 0-1.22 1.35L3 9h4l1 10h8l1-10h4l-.62-5.6z"></path>
</svg>
</div>
<div>
<h3 className="text-lg font-semibold tracking-tight">24/25 Home Kit</h3>
<div className="flex items-center justify-between mt-2">
<span className="text-neutral-400 text-xs">From £45.00</span>
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-black">
<i className="w-3 h-3" data-lucide="plus"></i>
</div>
</div>
</div>
</div>
</article>
</div>
</section>

<section className="max-w-[1600px] mx-auto mb-12 px-2">
<div className="bg-white border border-neutral-200 rounded-[2.5rem] p-8 md:p-16 text-center relative overflow-hidden">
<div className="relative z-10 max-w-xl mx-auto space-y-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter brand-font">NEVER MISS A <span className="text-red-600">MOMENT</span></h2>
<p className="text-neutral-500">Subscribe to our digital newsletter for exclusive interviews, ticket alerts, and club updates directly to your inbox.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto pt-4">
<input className="w-full px-6 py-3 rounded-full bg-neutral-100 border-none text-sm focus:ring-2 focus:ring-black outline-none transition-all placeholder:text-neutral-400" placeholder="Enter your email" type="email"/>
<button className="bg-black text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-neutral-800 transition-colors whitespace-nowrap" type="submit">Join Us</button>
</form>
</div>
</div>
</section>
</main>

<footer className="bg-black text-white pt-20 pb-8 px-6">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
<div className="lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-white text-black flex items-center justify-center font-bold text-xs rounded">HT</div>
<span className="text-lg font-bold tracking-tight">HEDNESFORD TOWN</span>
</div>
<p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                        Forged in the heart of the community. A history of resilience, a future of ambition. 
                        Keys Park, Hednesford, Staffordshire.
                    </p>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-white uppercase tracking-widest">Club</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">History</a></li>
<li><a className="hover:text-white transition-colors" href="#">Stadium</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-white uppercase tracking-widest">Matchday</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">First Team Fixtures</a></li>
<li><a className="hover:text-white transition-colors" href="#">Tickets</a></li>
<li><a className="hover:text-white transition-colors" href="#">Hospitality</a></li>
<li><a className="hover:text-white transition-colors" href="#">League Table</a></li>
</ul>
</div>
<div className="space-y-4">
<h4 className="text-xs font-bold text-white uppercase tracking-widest">Social</h4>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] text-neutral-600 font-mono">
                    © 2024 HEDNESFORD TOWN FOOTBALL CLUB. ALL RIGHTS RESERVED.
                </div>
<div className="flex gap-6 text-[10px] text-neutral-500 font-medium tracking-wide">
<a className="hover:text-white" href="#">PRIVACY POLICY</a>
<a className="hover:text-white" href="#">TERMS OF USE</a>
<a className="hover:text-white" href="#">ACCESSIBILITY</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
