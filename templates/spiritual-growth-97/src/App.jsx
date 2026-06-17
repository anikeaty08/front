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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      
<div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
<div className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-rose-50/60 to-transparent blur-[100px]"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tl from-indigo-50/60 via-purple-50/30 to-transparent blur-[100px]"></div>
<div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] rounded-full bg-amber-50/40 blur-[80px]"></div>
</div>
<header className="md:hidden flex items-center justify-between px-6 py-4 bg-white/40 backdrop-blur-md border-b border-white/60 z-20">
<div className="flex items-center gap-3">
<div className="font-serif text-xl tracking-tighter font-medium text-stone-800">DD.</div>
<div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-50/80 border border-rose-100 text-xs font-medium text-rose-600 shadow-sm">
<iconify-icon className="text-rose-500" icon="solar:fire-bold"></iconify-icon> 3 Days
            </div>
</div>
<button className="flex items-center justify-center w-8 h-8 rounded-full bg-stone-100/50 text-stone-500 hover:text-stone-800 transition-colors">
<iconify-icon icon="solar:moon-sleep-linear" width="18"></iconify-icon>
</button>
</header>
<aside className="hidden md:flex flex-col w-64 h-full bg-white/40 backdrop-blur-xl border-r border-white/60 z-20 shrink-0 px-6 py-8">
<div className="mb-8 ml-2">
<div className="font-serif text-3xl tracking-tighter font-medium text-stone-800 mb-3">DD.</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50/80 border border-rose-100 text-xs font-medium text-rose-600 shadow-sm transition-transform hover:scale-105 cursor-default">
<iconify-icon className="text-rose-500" icon="solar:fire-bold" width="16"></iconify-icon>
                3 Days of Peace
            </div>
</div>
<nav className="flex-1 flex flex-col gap-2">
<a className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-white shadow-[0_2px_10px_rgb(0,0,0,0.02)] text-stone-800 text-sm font-medium transition-all" href="#">
<iconify-icon icon="solar:home-smile-linear" width="20"></iconify-icon> Sanctuary
            </a>
<a className="flex items-center gap-4 px-4 py-3 rounded-2xl text-stone-500 hover:bg-white/50 hover:text-stone-800 text-sm font-medium transition-all" href="#decode">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon> Decode
            </a>
<a className="flex items-center gap-4 px-4 py-3 rounded-2xl text-stone-500 hover:bg-white/50 hover:text-stone-800 text-sm font-medium transition-all" href="#library">
<iconify-icon icon="solar:library-linear" width="20"></iconify-icon> Library
            </a>
<a className="flex items-center gap-4 px-4 py-3 rounded-2xl text-stone-500 hover:bg-white/50 hover:text-stone-800 text-sm font-medium transition-all" href="#meditate">
<iconify-icon icon="solar:cup-star-linear" width="20"></iconify-icon> Meditate
            </a>
</nav>
</aside>
<main className="flex-1 h-full overflow-y-auto pb-24 md:pb-0 scroll-smooth">
<div className="max-w-4xl mx-auto px-6 py-8 md:py-16 flex flex-col gap-16 md:gap-24">
<section className="flex flex-col items-center text-center mt-4 md:mt-12 relative">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 border border-stone-200/50 backdrop-blur-sm mb-6 text-xs font-medium text-stone-500">
<iconify-icon className="text-amber-500" icon="solar:stars-linear"></iconify-icon> Spiritual Guidance
                </div>
<h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-stone-800 mb-6 leading-[1.1] max-w-2xl">
                    Decode Your Life <br/>
<span className="text-stone-400 font-normal italic">with Guru Maa</span>
</h1>
<p className="text-stone-500 text-base md:text-lg max-w-xl font-light mb-10 leading-relaxed">
                    Every situation holds a divine meaning. Learn to see the hidden lessons and find profound peace in your daily experiences.
                </p>
<a className="bg-stone-800 text-stone-50 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-stone-700 transition-all duration-300 shadow-[0_8px_20px_rgb(28,25,23,0.15)] hover:shadow-[0_12px_25px_rgb(28,25,23,0.2)] flex items-center gap-2" href="#meditate">
                    Begin Journey <iconify-icon icon="solar:arrow-down-linear" width="16"></iconify-icon>
</a>
</section>
<section className="scroll-mt-8" id="decode">
<div className="bg-white/50 backdrop-blur-xl border border-white/80 p-6 md:p-10 rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.02)] relative overflow-hidden">
<div className="absolute -top-32 -right-32 w-64 h-64 bg-rose-100/30 rounded-full blur-[60px] pointer-events-none"></div>
<div className="max-w-2xl mx-auto">
<div className="text-center mb-8">
<h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-800 mb-3">Decode Your Situation</h2>
<p className="text-sm text-stone-500 font-light">Share a challenge or thought. Let divine wisdom reveal its deeper purpose.</p>
</div>
<div className="relative group">
<textarea className="w-full bg-white/70 border border-stone-200/60 rounded-2xl p-5 text-stone-700 text-sm md:text-base focus:outline-none focus:border-stone-300 focus:bg-white transition-all resize-none placeholder:text-stone-400 font-light shadow-inner shadow-stone-100/50" placeholder="e.g., I feel overwhelmed by my work and disconnected from my family..." rows="3"></textarea>
<div className="absolute bottom-4 right-4 flex items-center gap-2">
<button className="bg-stone-800 text-white p-2.5 rounded-xl hover:bg-stone-700 transition-colors shadow-md flex items-center justify-center">
<iconify-icon icon="solar:plain-2-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>
<section className="scroll-mt-8" id="library">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center border border-rose-100 text-rose-500">
<iconify-icon icon="solar:play-stream-linear"></iconify-icon>
</div>
<h2 className="font-serif text-2xl tracking-tight text-stone-800">Featured Playlists</h2>
</div>
<a className="text-xs font-medium text-stone-500 hover:text-stone-800 transition-colors flex items-center gap-1 bg-white/50 px-3 py-1.5 rounded-full border border-stone-200/50 backdrop-blur-sm" href="https://www.youtube.com/@decodingdivinity/featured" rel="noopener noreferrer" target="_blank">
                        View All Playlists <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
<div className="flex flex-col bg-white/40 p-3 rounded-3xl border border-white/60 transition-all shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
<div className="relative w-full aspect-video rounded-2xl bg-stone-900 overflow-hidden mb-3">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 w-full h-full border-0" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/videoseries?si=UXwHq24AFCGT0yGx&amp;list=PL0tf8YAs3qH1t1qjzQE-e96khZhmMFz2T" title="YouTube video player">
</iframe>
</div>
<h3 className="font-medium text-stone-800 text-sm mb-1 px-1 line-clamp-2">Spiritual reasons of our Festivals</h3>
<p className="text-xs text-stone-500 font-light px-1 mt-auto">Playlist embedded</p>
</div>
<div className="flex flex-col bg-white/40 p-3 rounded-3xl border border-white/60 transition-all shadow-[0_4px_20px_rgb(0,0,0,0.02)]">
<div className="relative w-full aspect-video rounded-2xl bg-stone-900 overflow-hidden mb-3">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 w-full h-full border-0" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/videoseries?si=rdKDc4141kxJr_nC&amp;list=PL0tf8YAs3qH2lIHGwQw3-v6anSMv7VXoY" title="YouTube video player">
</iframe>
</div>
<h3 className="font-medium text-stone-800 text-sm mb-1 px-1 line-clamp-2">Vikaar / Sins which stop you from Meditation</h3>
<p className="text-xs text-stone-500 font-light px-1 mt-auto">Playlist embedded</p>
</div>
<a className="group cursor-pointer flex flex-col bg-white/40 p-3 rounded-3xl border border-white/60 hover:bg-white/60 transition-all shadow-[0_4px_20px_rgb(0,0,0,0.02)]" href="https://www.youtube.com/@decodingdivinity/playlists" rel="noopener noreferrer" target="_blank">
<div className="relative w-full aspect-video rounded-2xl bg-stone-200 overflow-hidden mb-3">
<img alt="Meditation Dhyan" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/30 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white border border-white/50 group-hover:bg-white/50 transition-all group-hover:scale-110">
<iconify-icon icon="solar:play-bold" width="16"></iconify-icon>
</div>
</div>
<div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 backdrop-blur-md rounded border border-white/10 text-xs text-white font-medium flex items-center gap-1">
<iconify-icon icon="solar:playlist-minimalistic-bold"></iconify-icon> 11 videos
                            </div>
</div>
<h3 className="font-medium text-stone-800 text-sm mb-1 px-1 line-clamp-2">Meditation / Dhyan</h3>
<p className="text-xs text-stone-500 font-light px-1 mt-auto">View full playlist</p>
</a>
</div>
</section>
<section>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center border border-indigo-100 text-indigo-500">
<iconify-icon icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<h2 className="font-serif text-2xl tracking-tight text-stone-800 uppercase">Divine Shorts</h2>
</div>
<a className="text-xs font-medium text-stone-500 hover:text-stone-800 transition-colors flex items-center gap-1 bg-white/50 px-3 py-1.5 rounded-full border border-stone-200/50 backdrop-blur-sm" href="https://www.youtube.com/@decodingdivinity/shorts" rel="noopener noreferrer" target="_blank">
                        View All Shorts <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
<div className="relative pt-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest text-stone-600 shadow-sm border border-stone-100 z-10 uppercase">Latest</div>
<a className="block group relative w-full aspect-[4/5] sm:aspect-[9/16] rounded-[2rem] overflow-hidden bg-stone-200 shadow-md border border-white/80" href="https://www.youtube.com/@decodingdivinity/shorts" rel="noopener noreferrer" target="_blank">
<img alt="Latest Short" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
<div className="absolute bottom-6 left-5 right-5 text-center">
<p className="text-white text-sm md:text-base font-medium leading-snug group-hover:text-rose-200 transition-colors">The power of letting go<br/>in 60 seconds.</p>
</div>
</a>
</div>
<div className="relative pt-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest text-stone-600 shadow-sm border border-stone-100 z-10 uppercase">Popular</div>
<a className="block group relative w-full aspect-[4/5] sm:aspect-[9/16] rounded-[2rem] overflow-hidden bg-stone-200 shadow-md border border-white/80" href="https://www.youtube.com/@decodingdivinity/shorts" rel="noopener noreferrer" target="_blank">
<img alt="Popular Short" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
<div className="absolute bottom-6 left-5 right-5 text-center">
<p className="text-white text-sm md:text-base font-medium leading-snug group-hover:text-rose-200 transition-colors">Why you keep facing<br/>the same problems.</p>
</div>
</a>
</div>
<div className="relative pt-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 bg-white px-5 py-1.5 rounded-full text-xs font-bold tracking-widest text-stone-600 shadow-sm border border-stone-100 z-10 uppercase">Oldest</div>
<a className="block group relative w-full aspect-[4/5] sm:aspect-[9/16] rounded-[2rem] overflow-hidden bg-stone-200 shadow-md border border-white/80" href="https://www.youtube.com/@decodingdivinity/shorts" rel="noopener noreferrer" target="_blank">
<img alt="Oldest Short" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent"></div>
<div className="absolute bottom-6 left-5 right-5 text-center">
<p className="text-white text-sm md:text-base font-medium leading-snug group-hover:text-rose-200 transition-colors">Connecting with<br/>your higher self.</p>
</div>
</a>
</div>
</div>
</section>
<section className="scroll-mt-8 flex flex-col gap-10 relative z-10" id="meditate">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100 text-amber-500">
<iconify-icon icon="solar:cup-star-linear"></iconify-icon>
</div>
<h2 className="font-serif text-3xl tracking-tight text-stone-800">Meditation Space</h2>
</div>
<div className="p-[2px] rounded-[2.2rem] bg-gradient-to-r from-indigo-500 via-rose-400 to-amber-500 animate-border-glow shadow-[0_10px_40px_rgba(99,102,241,0.2)]">
<div className="bg-white/90 backdrop-blur-3xl rounded-[2.1rem] p-6 md:p-8 relative overflow-hidden">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
<div className="flex items-center gap-3">
<span className="flex h-3 w-3 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
</span>
<h3 className="font-serif text-2xl tracking-tight text-stone-800">Featured Session</h3>
</div>
<a className="w-fit text-xs font-medium text-stone-500 hover:text-stone-800 transition-colors flex items-center gap-1 bg-white/50 px-3 py-1.5 rounded-full border border-stone-200/50 backdrop-blur-sm" href="https://www.youtube.com/@decodingdivinity/featured" rel="noopener noreferrer" target="_blank">
                                View All Featured <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-stone-900 border border-stone-200/50 shadow-inner">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 w-full h-full border-0" frameborder="0" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/3SmRl8Nl1gg?si=_cQkuJrqOif3nJaQ&amp;start=470" title="YouTube video player">
</iframe>
</div>
<p className="text-sm text-stone-500 font-light mt-4 px-2">Take a moment to absorb today's divine message and realign your energy.</p>
</div>
</div>
</section>
</div>
</main>
<aside className="hidden lg:flex flex-col w-80 h-full bg-transparent border-l border-white/60 px-6 py-8 shrink-0 overflow-y-auto">
<div className="bg-white/50 backdrop-blur-xl border border-white/80 p-6 rounded-3xl shadow-[0_4px_20px_rgb(0,0,0,0.02)] mb-8">
<div className="flex items-center gap-2 mb-5">
<div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100">
<iconify-icon className="text-amber-500" icon="solar:sun-2-linear"></iconify-icon>
</div>
<h3 className="text-xs font-medium tracking-widest uppercase text-stone-400">Daily Insight</h3>
</div>
<p className="font-serif text-xl tracking-tight text-stone-800 leading-snug mb-4">
                "The delay you are experiencing is not a denial. It is a preparation period for what you asked for."
            </p>
</div>
<div className="mt-4">
<h3 className="text-xs font-medium tracking-widest uppercase text-stone-400 mb-4 px-2">Video Libraries</h3>
<div className="flex flex-col gap-2">
<a className="p-3 rounded-2xl hover:bg-white/40 transition-colors flex items-center gap-3 group border border-transparent hover:border-stone-200/50" href="https://www.youtube.com/@decodingdivinity/featured" rel="noopener noreferrer" target="_blank">
<div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors group-hover:text-rose-500">
<iconify-icon icon="solar:playlist-minimalistic-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-700">Full Playlists</span>
</a>
<a className="p-3 rounded-2xl hover:bg-white/40 transition-colors flex items-center gap-3 group border border-transparent hover:border-stone-200/50" href="https://www.youtube.com/@decodingdivinity/shorts" rel="noopener noreferrer" target="_blank">
<div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 group-hover:bg-white transition-colors group-hover:text-rose-500">
<iconify-icon icon="mdi:youtube-shorts"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-700">Divine Shorts</span>
</a>
</div>
</div>
</aside>
<nav className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-stone-200/50 pb-safe z-30">
<div className="flex items-center justify-around px-2 py-3">
<a className="flex flex-col items-center gap-1 p-2 text-stone-800" href="#">
<iconify-icon icon="solar:home-smile-linear" width="22"></iconify-icon> <span className="text-xs font-medium">Home</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-stone-400 hover:text-stone-800 transition-colors" href="#library">
<iconify-icon icon="solar:library-linear" width="22"></iconify-icon> <span className="text-xs font-medium">Library</span>
</a>
<a className="flex flex-col items-center gap-1 p-2 text-stone-400 hover:text-stone-800 transition-colors" href="#meditate">
<iconify-icon icon="solar:cup-star-linear" width="22"></iconify-icon> <span className="text-xs font-medium">Meditate</span>
</a>
</div>
</nav>

    </>
  );
}
