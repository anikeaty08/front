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
      

<nav className="fixed top-0 w-full z-40 glass-nav border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-bold tracking-tighter flex items-center gap-1 hover:opacity-90 transition-opacity" href="#">
<span className="text-white">THE</span>
<span className="text-green-500">NOISE</span>
<span className="bg-green-500 text-black px-1 rounded-[2px] ml-0.5">ERA</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-green-400 transition-colors" href="#">News</a>
<a className="hover:text-green-400 transition-colors" href="#">Culture</a>
<a className="hover:text-green-400 transition-colors" href="#">Releases</a>
<a className="hover:text-green-400 transition-colors" href="#">Underground</a>
</div>

<div className="flex items-center gap-4">
<button className="text-zinc-400 hover:text-green-500 transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:search" data-strokeWidth="1.5" data-width="20"></span>
</button>
<a className="hidden sm:flex bg-green-500 hover:bg-white text-black text-xs font-bold px-5 py-2 rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]" href="#newsletter">
                    Subscribe
                </a>
<button className="md:hidden text-zinc-400 hover:text-white">
<span className="iconify" data-height="20" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="20"></span>
</button>
</div>
</div>
</nav>

<div className="pt-20 pb-4 border-b border-white/5 bg-green-900/5 relative z-10">
<div className="ticker-wrap overflow-hidden">
<div className="ticker text-xs font-medium text-green-400 uppercase tracking-widest">
<div className="ticker__item"><span className="text-white">Trending:</span> Tyla's World Tour</div>
<div className="ticker__item"><span className="text-white">Just In:</span> Major League DJz at Brixton</div>
<div className="ticker__item"><span className="text-white">Release:</span> Kelvin Momo Drops New EP</div>
<div className="ticker__item"><span className="text-white">Culture:</span> The Rise of 3-Step in Durban</div>
<div className="ticker__item"><span className="text-white">Spotlight:</span> Uncle Waffles Redefines Performance</div>
<div className="ticker__item"><span className="text-white">Trending:</span> Tyla's World Tour</div>
<div className="ticker__item"><span className="text-white">Just In:</span> Major League DJz at Brixton</div>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-4 sm:px-6 py-12 relative z-10">

<header className="mb-20">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
<div className="lg:col-span-7 space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-xs font-medium text-green-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Cover Story
                    </div>
<h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tighter text-white leading-[0.95]">
                        The Evolution of <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">South African Sound.</span>
</h1>
<p className="text-zinc-400 text-lg sm:text-xl font-light max-w-2xl leading-relaxed">
                        From the dust of the underground to global stadiums. How Amapiano and Gqom are rewriting the rules.
                    </p>
<div className="pt-4 flex items-center gap-6">
<a className="group flex items-center gap-2 text-white font-medium border-b border-green-500/50 pb-0.5 hover:border-green-400 hover:text-green-400 transition-colors" href="#">
                            Read the Feature 
                            <span className="iconify group-hover:translate-x-1 transition-transform text-green-500" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</a>
<span className="text-zinc-500 text-sm">5 min read</span>
</div>
</div>

<div className="lg:col-span-5 relative group cursor-pointer">
<div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-green-900 rounded-lg blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
<div className="relative h-[400px] w-full rounded-lg overflow-hidden border border-white/10 bg-zinc-900">
<img alt="DJ Controller" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
<p className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1">Exclusive</p>
<p className="text-white font-medium text-lg">Inside the Studio with Kabza De Small</p>
</div>
</div>
</div>
</div>
</header>

<div className="flex flex-wrap items-center gap-4 mb-10 border-b border-white/5 pb-4">
<button className="text-sm font-medium text-black px-4 py-1.5 rounded-md bg-white hover:bg-green-400 transition-colors">All</button>
<button className="text-sm font-medium text-zinc-500 hover:text-green-400 px-3 py-1.5 transition-colors">News</button>
<button className="text-sm font-medium text-zinc-500 hover:text-green-400 px-3 py-1.5 transition-colors">Interviews</button>
<button className="text-sm font-medium text-zinc-500 hover:text-green-400 px-3 py-1.5 transition-colors">Events</button>
<button className="text-sm font-medium text-zinc-500 hover:text-green-400 px-3 py-1.5 transition-colors">Reviews</button>
<div className="ml-auto flex items-center gap-2">
<span className="text-xs text-zinc-600">View</span>
<button className="text-zinc-400 hover:text-green-400"><span className="iconify" data-icon="lucide:layout-grid" data-width="16"></span></button>
<button className="text-zinc-600 hover:text-white"><span className="iconify" data-icon="lucide:list" data-width="16"></span></button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">

<article className="md:col-span-2 group relative bg-zinc-900/30 border border-white/5 rounded-xl overflow-hidden hover:border-green-500/40 transition-colors">
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent z-10"></div>
<img alt="Concert" className="w-full h-[400px] object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 p-8 z-20 w-full">
<div className="flex items-center gap-3 mb-3">
<span className="px-2 py-0.5 rounded bg-green-500 text-black text-[10px] uppercase tracking-wider font-bold">Event</span>
<span className="text-green-200/80 text-xs">2 hrs ago</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-2 tracking-tight group-hover:text-green-400 transition-colors">Cotton Fest 2024: A Cultural Reset</h3>
<p className="text-zinc-300 text-sm line-clamp-2 max-w-lg">
                        The festival returns with a lineup that bridges the gap between hip-hop purists and the new wave of piano stars.
                    </p>
</div>
</article>

<div className="space-y-6">

<article className="group bg-zinc-900/30 border border-white/5 rounded-xl p-5 hover:bg-zinc-900/50 hover:border-green-500/30 transition-colors h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-green-500">Industry News</span>
<span className="iconify text-zinc-600 group-hover:text-green-400 transition-colors" data-icon="lucide:arrow-up-right" data-width="16"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 leading-tight group-hover:text-green-100">Streaming numbers for SA Hip-Hop reach all-time high in Q3</h3>
<p className="text-zinc-500 text-xs leading-relaxed">Data shows a 40% surge in local rap consumption, driven by independent releases.</p>
</div>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2">
<div className="w-5 h-5 rounded bg-green-500 flex items-center justify-center text-[8px] text-black font-bold">N</div>
<span className="text-[10px] text-zinc-400">The NOISE Team</span>
</div>
</article>

<article className="group bg-zinc-900/30 border border-white/5 rounded-xl p-5 hover:bg-zinc-900/50 hover:border-green-500/30 transition-colors h-full flex flex-col justify-between">
<div>
<div className="flex items-center justify-between mb-4">
<span className="text-xs font-medium text-green-500">Emerging</span>
<span className="iconify text-zinc-600 group-hover:text-green-400 transition-colors" data-icon="lucide:music" data-width="16"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 leading-tight">Artist Spotlight: The distinct vocal texture of Lwah Ndlunkulu</h3>
</div>
<div className="mt-4">
<div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-2/3"></div>
</div>
<div className="flex justify-between mt-1">
<span className="text-[10px] text-zinc-500">02:14</span>
<span className="text-[10px] text-zinc-500">Preview</span>
</div>
</div>
</article>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 border-t border-white/5 pt-12">
<div className="lg:col-span-1">
<h2 className="text-xl font-medium text-white mb-6 tracking-tight flex items-center gap-2">
                    Latest Noise <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
</h2>
<p className="text-zinc-500 text-sm mb-6">Real-time updates from the streets to the charts.</p>
<div className="space-y-4">
<div className="flex items-start gap-3 group cursor-pointer">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-green-500 group-hover:shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all"></div>
<div>
<p className="text-sm text-zinc-300 group-hover:text-green-400 transition-colors">Blxckie announces US Tour dates</p>
<span className="text-xs text-zinc-600">10 mins ago</span>
</div>
</div>
<div className="flex items-start gap-3 group cursor-pointer">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-green-500 group-hover:shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all"></div>
<div>
<p className="text-sm text-zinc-300 group-hover:text-green-400 transition-colors">Shekhinah's new single trends #1</p>
<span className="text-xs text-zinc-600">45 mins ago</span>
</div>
</div>
<div className="flex items-start gap-3 group cursor-pointer">
<div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-green-500 group-hover:shadow-[0_0_8px_rgba(34,197,94,0.8)] transition-all"></div>
<div>
<p className="text-sm text-zinc-300 group-hover:text-green-400 transition-colors">Musa Keys drops visualizer</p>
<span className="text-xs text-zinc-600">1 hr ago</span>
</div>
</div>
</div>
</div>
<div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="aspect-video w-full bg-zinc-900 rounded-lg overflow-hidden border border-white/5 mb-4 relative">
<img alt="Studio" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1598387993441-a364f854c3e1?q=80&amp;w=2076&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-green-500/20 text-green-400">
<span className="text-[10px] font-bold uppercase">Opinion</span>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-green-400 transition-colors">Is the 'Log Drum' Overused? Producers Weigh In</h3>
<p className="text-sm text-zinc-500 line-clamp-2">Top producers discuss the ubiquity of the log drum in modern African music and where the sound is heading next.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video w-full bg-zinc-900 rounded-lg overflow-hidden border border-white/5 mb-4 relative">
<img alt="Vinyl" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-green-500/20 text-green-400">
<span className="text-[10px] font-bold uppercase">Vinyl</span>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-green-400 transition-colors">The Resurgence of Vinyl in Cape Town</h3>
<p className="text-sm text-zinc-500 line-clamp-2">Independent record stores are seeing a massive spike in sales as digital fatigue sets in among audiophiles.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video w-full bg-zinc-900 rounded-lg overflow-hidden border border-white/5 mb-4 relative">
<img alt="Microphone" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-green-500/20 text-green-400">
<span className="text-[10px] font-bold uppercase">Guide</span>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-green-400 transition-colors">Navigating the Joburg Jazz Scene</h3>
<p className="text-sm text-zinc-500 line-clamp-2">A curated guide to the best underground jazz clubs in Johannesburg for the discerning listener.</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-video w-full bg-zinc-900 rounded-lg overflow-hidden border border-white/5 mb-4 relative">
<img alt="Guitar" className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md px-2 py-1 rounded border border-green-500/20 text-green-400">
<span className="text-[10px] font-bold uppercase">Indie</span>
</div>
</div>
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-green-400 transition-colors">Alternative Rock is making a quiet comeback</h3>
<p className="text-sm text-zinc-500 line-clamp-2">Bands like The Tellers and Retro Dizzy are paving the way for a new generation of rock in SA.</p>
</div>
</div>
</div>

<div className="mt-24 relative rounded-2xl border border-green-500/20 bg-zinc-900/30 overflow-hidden px-6 py-16 text-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-green-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-lg mx-auto">
<span className="iconify mx-auto text-green-500 mb-4" data-icon="lucide:mail" data-strokeWidth="1.5" data-width="32"></span>
<h2 className="text-2xl font-bold text-white tracking-tight mb-3">Don't miss a beat.</h2>
<p className="text-zinc-400 text-sm mb-8 font-light">Get the weekly digest of what matters in South African music, curated by industry insiders.</p>
<form className="flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-black/60 border border-white/10 text-white text-sm rounded-lg px-4 py-3 focus:border-green-500 transition-colors placeholder:text-zinc-600" placeholder="enter@email.com" type="email"/>
<button className="bg-green-500 text-black text-sm font-bold px-6 py-3 rounded-lg hover:bg-white hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300" type="submit">
                        Subscribe
                    </button>
</form>
<p className="text-zinc-600 text-[10px] mt-4">No spam, just noise. Unsubscribe anytime.</p>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-black/40 py-12 px-6 backdrop-blur-lg mt-auto relative z-10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div>

<a className="text-base font-bold tracking-tighter flex items-center gap-1 mb-4 group hover:opacity-80 transition-opacity" href="#">
<span className="text-white">THE</span>
<span className="text-green-500">NOISE</span>
<span className="bg-green-500 text-black px-1 rounded-[2px] ml-0.5">ERA</span>
</a>
<p className="text-zinc-500 text-sm max-w-xs font-light">
                    Documenting the frequency of South African culture. <br/> Built for fans, creators, and observers.
                </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">Explore</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-green-500 transition-colors" href="#">News</a></li>
<li><a className="hover:text-green-500 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-green-500 transition-colors" href="#">Playlists</a></li>
<li><a className="hover:text-green-500 transition-colors" href="#">Events</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-white mb-4 uppercase tracking-wider">Social</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-green-500 transition-colors flex items-center gap-2" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="14"></span> Instagram</a></li>
<li><a className="hover:text-green-500 transition-colors flex items-center gap-2" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="14"></span> Twitter</a></li>
<li><a className="hover:text-green-500 transition-colors flex items-center gap-2" href="#"><span className="iconify" data-icon="lucide:youtube" data-width="14"></span> YouTube</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center text-xs text-zinc-600">
<p>© 2024 The NOISE Era. All rights reserved.</p>
<div className="flex gap-4 mt-4 sm:mt-0">
<a className="hover:text-green-500" href="#">Privacy Policy</a>
<a className="hover:text-green-500" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
