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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-fuchsia-600/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-0 right-0 w-96 h-96 bg-teal-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<div className="glass-nav border border-white/10 rounded-full px-6 py-3 flex items-center gap-8 shadow-2xl shadow-black/50">
<a className="text-white font-semibold text-lg tracking-tight flex items-center gap-2" href="#">
<svg className="lucide lucide-sparkles text-fuchsia-400 w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                Auro
            </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#explore">Explore</a>
<a className="hover:text-white transition-colors" href="#creators">Creators</a>
</div>
<a className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full transition-all border border-white/5" href="#">
                Sign In
            </a>
</div>
</nav>

<section className="z-10 md:pt-52 md:pb-32 flex flex-col text-center max-w-7xl mr-auto ml-auto pt-40 pr-6 pb-24 pl-6 relative items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-300 text-xs font-medium mb-8 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
            Now with AI-powered creative prompts
        </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tight mb-8 max-w-5xl leading-[1.1]">
            Music that matches <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-teal-400 text-glow">your mood.</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-light">
            AI-crafted playlists based on how you feel. Join a creator community sharing their best mood-based prompts and sonic landscapes.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
<button className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold text-base transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                Find My Playlist
                <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1 text-black" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
<div className="absolute inset-0 rounded-full ring-2 ring-white/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</button>
<button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium text-base transition-all hover:border-white/20 backdrop-blur-sm flex items-center justify-center gap-2">
<svg className="lucide lucide-users w-4 h-4 text-slate-400" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                Explore Creators
            </button>
</div>

<div className="mt-20 w-full max-w-4xl relative">
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>

<div className="flex items-end justify-center gap-1 h-32 opacity-70">
<div className="w-2 md:w-4 bg-gradient-to-t from-fuchsia-600 to-transparent rounded-t-full h-12 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
<div className="w-2 md:w-4 bg-gradient-to-t from-purple-600 to-transparent rounded-t-full h-20 animate-[pulse_1.2s_ease-in-out_infinite_0.1s]"></div>
<div className="w-2 md:w-4 bg-gradient-to-t from-teal-600 to-transparent rounded-t-full h-16 animate-[pulse_1.8s_ease-in-out_infinite_0.2s]"></div>
<div className="w-2 md:w-4 bg-gradient-to-t from-fuchsia-500 to-transparent rounded-t-full h-28 animate-[pulse_1.4s_ease-in-out_infinite_0.3s]"></div>
<div className="w-2 md:w-4 bg-gradient-to-t from-pink-500 to-transparent rounded-t-full h-24 animate-[pulse_1.6s_ease-in-out_infinite_0.4s]"></div>
<div className="w-2 md:w-4 bg-gradient-to-t from-purple-500 to-transparent rounded-t-full h-14 animate-[pulse_1.3s_ease-in-out_infinite_0.5s]"></div>
<div className="w-2 md:w-4 bg-gradient-to-t from-teal-500 to-transparent rounded-t-full h-22 animate-[pulse_1.7s_ease-in-out_infinite_0.6s]"></div>
<div className="w-2 md:w-4 bg-gradient-to-t from-fuchsia-600 to-transparent rounded-t-full h-10 animate-[pulse_1.5s_ease-in-out_infinite_0.7s]"></div>
</div>
</div>
</section>

<section className="z-10 bg-black/50 border-white/5 border-t pt-24 pb-24 relative" id="how-it-works">
<style>
        @keyframes scan-vertical {
            0% { transform: translateY(-150%); opacity: 0; }
            30% { opacity: 1; }
            70% { opacity: 1; }
            100% { transform: translateY(150%); opacity: 0; }
        }
        @keyframes sound-bar {
            0%, 100% { height: 6px; }
            50% { height: 18px; }
        }
        @keyframes flow-line {
            0% { transform: translateX(-100%); opacity: 0; }
            50% { opacity: 1; }
            100% { transform: translateX(100%); opacity: 0; }
        }
    </style>
<div className="max-w-7xl mx-auto px-6 relative">
<div className="text-center mb-16 relative z-10">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">From Vibe to Vinyl</h2>
<p className="text-lg text-slate-400">Four simple steps to discover your new favorite tracks.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">

<div className="hidden lg:block absolute top-[3rem] left-6 right-6 h-px bg-white/5 -z-10 overflow-hidden">
<div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent blur-[1px]" style={{animation: 'flow-line 3s linear infinite'}}></div>
</div>

<div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all relative">
<div className="w-12 h-12 rounded-full bg-fuchsia-500/10 flex items-center justify-center mb-6 text-fuchsia-400 border border-fuchsia-500/20 group-hover:scale-110 transition-transform relative z-10">
<div className="absolute inset-0 rounded-full border border-fuchsia-500/40 animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30"></div>
<svg className="lucide lucide-smile w-6 h-6 relative z-20" data-lucide="smile" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">1. Select Mood</h3>
<p className="text-slate-400 leading-relaxed">Choose from our presets or type exactly how you feel into the AI prompt.</p>
</div>

<div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" style={{animation: 'scan-vertical 3s ease-in-out infinite'}}></div>
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20 group-hover:scale-110 transition-transform relative z-10 bg-[#0f0f11]/80 backdrop-blur-sm">
<svg className="lucide lucide-cpu w-6 h-6" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">2. Analysis</h3>
<p className="text-slate-400 leading-relaxed">Our engine analyzes bpm, key, and lyrical density to match your vibe.</p>
</div>

<div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all relative">
<div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center mb-6 text-teal-400 border border-teal-500/20 group-hover:scale-110 transition-transform relative">
<svg className="lucide lucide-music-2 w-6 h-6" data-lucide="music-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="18" r="4"></circle><path d="M12 18V2l7 4"></path></svg>

<div className="absolute bottom-3 right-3 flex gap-0.5 items-end h-5">
<div className="w-0.5 bg-teal-400 rounded-full" style={{animation: 'sound-bar 1s ease-in-out infinite', height: '8px'}}></div>
<div className="w-0.5 bg-teal-400 rounded-full" style={{animation: 'sound-bar 1.2s ease-in-out infinite 0.2s', height: '12px'}}></div>
<div className="w-0.5 bg-teal-400 rounded-full" style={{animation: 'sound-bar 0.8s ease-in-out infinite 0.4s', height: '6px'}}></div>
</div>
</div>
<h3 className="text-xl font-medium text-white mb-2">3. Generation</h3>
<p className="text-slate-400 leading-relaxed">Get a perfectly curated playlist instantly. No skipping required.</p>
</div>

<div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-all">
<div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center mb-6 text-pink-400 border border-pink-500/20 group-hover:scale-110 transition-transform hover:shadow-[0_0_15px_-3px_rgba(236,72,153,0.3)] duration-500">
<svg className="lucide lucide-share-2 w-6 h-6" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">4. Share</h3>
<p className="text-slate-400 leading-relaxed">Save to your library or publish your mood prompt to the community.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 max-w-7xl mx-auto px-6" id="explore">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-3">Pick your vibe</h2>
<p className="text-lg text-slate-400">Jump straight into a sonic landscape.</p>
</div>
<a className="text-white hover:text-fuchsia-400 font-medium flex items-center gap-2 transition-colors" href="#">
                View all moods <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<a className="group relative overflow-hidden rounded-xl h-40 flex items-center justify-center border border-white/10" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
<span className="relative z-10 text-xl font-semibold text-white tracking-tight">Happy</span>
</a>
<a className="group relative overflow-hidden rounded-xl h-40 flex items-center justify-center border border-white/10" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
<span className="relative z-10 text-xl font-semibold text-white tracking-tight">Chill</span>
</a>
<a className="group relative overflow-hidden rounded-xl h-40 flex items-center justify-center border border-white/10" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-500/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
<span className="relative z-10 text-xl font-semibold text-white tracking-tight">Focus</span>
</a>
<a className="group relative overflow-hidden rounded-xl h-40 flex items-center justify-center border border-white/10" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-purple-800/20 to-indigo-900/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
<span className="relative z-10 text-xl font-semibold text-white tracking-tight">Heartbreak</span>
</a>
<a className="group relative overflow-hidden rounded-xl h-40 flex items-center justify-center border border-white/10" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 to-gray-700/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
<span className="relative z-10 text-xl font-semibold text-white tracking-tight">Rainy Day</span>
</a>
<a className="group relative overflow-hidden rounded-xl h-40 flex items-center justify-center border border-white/10" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-600/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
<span className="relative z-10 text-xl font-semibold text-white tracking-tight">Energetic</span>
</a>
<a className="group relative overflow-hidden rounded-xl h-40 flex items-center justify-center border border-white/10 col-span-2" href="#">
<div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 via-purple-500/20 to-teal-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>
<span className="relative z-10 text-2xl font-semibold text-white tracking-tight flex items-center gap-2">
<svg className="lucide lucide-sparkles w-5 h-5 text-fuchsia-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> Creative Flow
                </span>
</a>
</div>
</section>

<section className="py-24 relative z-10 bg-gradient-to-b from-black to-slate-950 border-t border-white/5" id="creators">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-3">Community Prompts</h2>
<p className="text-lg text-slate-400 mb-12">Discover playlists generated by our top curators.</p>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="flex flex-col bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
<div className="h-40 bg-gradient-to-r from-indigo-900 to-slate-900 relative p-6 flex flex-col justify-end">
<div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                            12k Plays
                        </div>
<h3 className="text-xl font-semibold text-white">"Midnight Drives"</h3>
<p className="text-slate-300 text-sm">Synthwave • Retropop • Dark</p>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-300 font-bold">
                                A
                            </div>
<div>
<p className="text-white text-sm font-medium">Alex Rivera</p>
<p className="text-slate-500 text-xs">Curator</p>
</div>
<button className="ml-auto text-xs font-medium text-white bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors">Follow</button>
</div>
<button className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
<svg className="lucide lucide-play w-4 h-4 fill-black" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Use Prompt
                        </button>
</div>
</div>

<div className="flex flex-col bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
<div className="h-40 bg-gradient-to-r from-amber-900/50 to-orange-900/40 relative p-6 flex flex-col justify-end">
<div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                            8.5k Plays
                        </div>
<h3 className="text-xl font-semibold text-white">"Coffee Shop Rain"</h3>
<p className="text-slate-300 text-sm">Jazz • Lofi • Acoustic</p>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-300 font-bold">
                                S
                            </div>
<div>
<p className="text-white text-sm font-medium">Sarah Chen</p>
<p className="text-slate-500 text-xs">Artist</p>
</div>
<button className="ml-auto text-xs font-medium text-white bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors">Follow</button>
</div>
<button className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
<svg className="lucide lucide-play w-4 h-4 fill-black" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Use Prompt
                        </button>
</div>
</div>

<div className="flex flex-col bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-colors">
<div className="h-40 bg-gradient-to-r from-fuchsia-900/60 to-purple-900/60 relative p-6 flex flex-col justify-end">
<div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10">
                            24k Plays
                        </div>
<h3 className="text-xl font-semibold text-white">"Neon Tokyo"</h3>
<p className="text-slate-300 text-sm">Phonk • Electronic • Fast</p>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-fuchsia-500/20 border border-fuchsia-500/40 flex items-center justify-center text-fuchsia-300 font-bold">
                                K
                            </div>
<div>
<p className="text-white text-sm font-medium">Kai Doe</p>
<p className="text-slate-500 text-xs">Super User</p>
</div>
<button className="ml-auto text-xs font-medium text-white bg-white/10 px-3 py-1 rounded-full hover:bg-white/20 transition-colors">Follow</button>
</div>
<button className="w-full py-3 bg-white text-black font-medium rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2">
<svg className="lucide lucide-play w-4 h-4 fill-black" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg> Use Prompt
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-10 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Your Sound HQ</h2>
<p className="text-lg text-slate-400">Manage your generated libraries and customizations in one place.</p>
</div>

<div className="relative mx-auto max-w-5xl rounded-xl border border-white/10 bg-[#0f0f11] shadow-[0_0_50px_-12px_rgba(0,0,0,0.8)] overflow-hidden">

<div className="h-10 border-b border-white/5 bg-white/[0.02] flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex h-[500px]">

<div className="w-64 border-r border-white/5 bg-black/20 p-6 hidden md:block">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Library</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-white font-medium bg-white/5 p-2 rounded-lg"><svg className="lucide lucide-list-music w-4 h-4 text-fuchsia-400" data-lucide="list-music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 5H3"></path><path d="M11 12H3"></path><path d="M11 19H3"></path><path d="M21 16V5"></path><circle cx="18" cy="16" r="3"></circle></svg> My Playlists</li>
<li className="flex items-center gap-3 text-slate-400 p-2"><svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg> Liked Songs</li>
<li className="flex items-center gap-3 text-slate-400 p-2"><svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg> Recent History</li>
</ul>
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 mt-8">Moods</div>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-slate-400 p-2"><svg className="lucide lucide-sun w-4 h-4 text-yellow-500" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg> Morning Boost</li>
<li className="flex items-center gap-3 text-slate-400 p-2"><svg className="lucide lucide-moon w-4 h-4 text-indigo-500" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg> Deep Focus</li>
</ul>
</div>

<div className="flex-1 p-6 md:p-8 bg-gradient-to-br from-white/[0.02] to-transparent">
<div className="flex justify-between items-center mb-8">
<div>
<h3 className="text-2xl font-semibold text-white">Deep Focus • Techno</h3>
<p className="text-slate-500 text-sm">Generated just now based on "Coding late at night"</p>
</div>
<button className="bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-full p-3 shadow-lg shadow-fuchsia-900/20">
<svg className="lucide lucide-play w-6 h-6 fill-current ml-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>

<div className="space-y-2">
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 group border border-transparent hover:border-white/5 transition-all">
<div className="flex items-center gap-4">
<div className="text-slate-500 w-4">1</div>
<div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center"><svg className="lucide lucide-music w-4 h-4 text-slate-500" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></div>
<div>
<div className="text-white text-sm font-medium">Binary Dreams</div>
<div className="text-slate-500 text-xs">System 99</div>
</div>
</div>
<div className="text-slate-500 text-sm font-mono">3:42</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 group border border-transparent hover:border-white/5 transition-all bg-white/[0.02]">
<div className="flex items-center gap-4">
<div className="text-fuchsia-400 w-4"><svg className="lucide lucide-bar-chart-2 w-4 h-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg></div>
<div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center"><svg className="lucide lucide-music w-4 h-4 text-slate-500" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></div>
<div>
<div className="text-fuchsia-400 text-sm font-medium">Neon Circuits</div>
<div className="text-slate-500 text-xs">Velvet Code</div>
</div>
</div>
<div className="text-slate-500 text-sm font-mono">4:10</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 group border border-transparent hover:border-white/5 transition-all">
<div className="flex items-center gap-4">
<div className="text-slate-500 w-4">3</div>
<div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center"><svg className="lucide lucide-music w-4 h-4 text-slate-500" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></div>
<div>
<div className="text-white text-sm font-medium">Flow State</div>
<div className="text-slate-500 text-xs">Null Pointer</div>
</div>
</div>
<div className="text-slate-500 text-sm font-mono">2:55</div>
</div>
<div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 group border border-transparent hover:border-white/5 transition-all">
<div className="flex items-center gap-4">
<div className="text-slate-500 w-4">4</div>
<div className="w-10 h-10 bg-slate-800 rounded flex items-center justify-center"><svg className="lucide lucide-music w-4 h-4 text-slate-500" data-lucide="music" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg></div>
<div>
<div className="text-white text-sm font-medium">Syntax Error</div>
<div className="text-slate-500 text-xs">Compile Time</div>
</div>
</div>
<div className="text-slate-500 text-sm font-mono">3:20</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 md:py-20 bg-black text-sm">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
<div className="col-span-2 lg:col-span-2">
<a className="text-white font-semibold text-lg tracking-tight flex items-center gap-2 mb-4" href="#">
<svg className="lucide lucide-sparkles text-fuchsia-400 w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                    Auro
                </a>
<p className="text-slate-500 max-w-xs leading-relaxed">
                    Auro combines AI analysis with human creativity to deliver the perfect soundtrack for every moment of your life.
                </p>
<div className="flex gap-4 mt-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg className="lucide lucide-github w-5 h-5" data-lucide="github" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a>
</div>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-semibold text-white mb-1">Product</h4>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Download App</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Mood Engine</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-semibold text-white mb-1">Company</h4>
<a className="text-slate-500 hover:text-white transition-colors" href="#">About</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Careers</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Blog</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="font-semibold text-white mb-1">Support</h4>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Help Center</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Community</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-slate-600 text-xs">
<p>© 2023 Auro Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<span>Privacy Policy</span>
<span>Cookie Policy</span>
</div>
</div>
</footer>


    </>
  );
}
