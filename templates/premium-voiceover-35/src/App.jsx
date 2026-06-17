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
      

<div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-zinc-800/10 blur-[120px] pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.04] bg-[#09090b]/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="tracking-tight font-medium text-zinc-100 text-2xl uppercase flex items-center gap-2" href="#">
<i className="text-zinc-100 w-6 h-6" data-lucide="audio-waveform" strokeWidth="1.5"></i>
                BJORNS
            </a>
<div className="hidden md:flex items-center gap-8 text-lg text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#about">About</a>
<a className="hover:text-zinc-100 transition-colors" href="#demos">Reels</a>
<a className="hover:text-zinc-100 transition-colors" href="#clients">Clients</a>
<a className="hover:text-zinc-100 transition-colors" href="#studio">Studio</a>
</div>
<div className="flex items-center gap-6">
<a className="text-lg hover:text-zinc-100 transition-colors hidden sm:block" href="#">Contact</a>
<button className="bg-zinc-100 text-[#09090b] hover:bg-white transition-colors px-5 py-2.5 rounded-full text-base font-medium flex items-center gap-2">
                    Book Session
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<main className="relative pt-36 pb-24 lg:pt-52 lg:pb-40 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 min-h-[90vh]">

<div className="flex-1 space-y-8 z-10 w-full">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.05] text-base text-zinc-300">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for recording
            </div>
<h1 className="text-6xl sm:text-7xl lg:text-8xl font-normal tracking-tight text-zinc-100 leading-[1.05]">
                Voice that commands <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-100 to-zinc-600">attention.</span>
</h1>
<p className="text-xl sm:text-2xl text-zinc-400 max-w-xl leading-relaxed">
                Professional voiceover artist delivering authentic, powerful, and versatile audio for commercials, narration, and character work. Broadcast-quality sound from a pristine home studio.
            </p>
<div className="flex items-center gap-6 pt-6">
<button className="flex items-center gap-4 text-lg text-zinc-100 group">
<div className="w-14 h-14 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
<i className="w-6 h-6 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</div>
                    Play Commercial Reel
                </button>
</div>
</div>

<div className="flex-1 w-full max-w-lg relative z-10">
<div className="absolute -inset-4 bg-gradient-to-br from-zinc-800/20 to-transparent rounded-[2.5rem] blur-2xl opacity-50"></div>
<div className="relative bg-zinc-900/30 backdrop-blur-xl border border-white/[0.08] rounded-[2rem] p-10 shadow-2xl flex flex-col gap-10">

<div className="flex justify-between items-start">
<div>
<p className="text-base tracking-widest text-zinc-500 uppercase mb-2">Featured Reel</p>
<h3 className="text-2xl font-normal text-zinc-100 tracking-tight">Automotive Anthem</h3>
<p className="text-lg text-zinc-500 mt-1">Commercial · Energetic</p>
</div>
<button className="text-zinc-500 hover:text-zinc-100 transition-colors">
<i className="w-6 h-6" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</button>
</div>

<div className="h-20 flex items-end justify-between gap-1.5 w-full overflow-hidden opacity-70">
<div className="w-1.5 bg-zinc-700 rounded-full h-[30%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[50%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[80%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[60%]"></div>
<div className="w-1.5 bg-zinc-300 rounded-full h-[40%] animate-pulse" style={{animationDelay: '0.1s'}}></div>
<div className="w-1.5 bg-zinc-300 rounded-full h-[80%] animate-pulse" style={{animationDelay: '0.2s'}}></div>
<div className="w-1.5 bg-zinc-300 rounded-full h-[100%] animate-pulse" style={{animationDelay: '0.3s'}}></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[40%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[70%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[90%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[50%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[30%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[60%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[80%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[40%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[20%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[70%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[90%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[60%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[40%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[80%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[50%]"></div>
<div className="w-1.5 bg-zinc-700 rounded-full h-[30%]"></div>
</div>

<div className="space-y-4">
<div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden relative cursor-pointer">
<div className="absolute top-0 left-0 h-full bg-zinc-200 w-[35%] rounded-full"></div>
</div>
<div className="flex justify-between text-base text-zinc-500">
<span>0:14</span>
<span>1:00</span>
</div>
</div>

<div className="flex items-center justify-center gap-10">
<button className="text-zinc-500 hover:text-zinc-100 transition-colors">
<i className="w-7 h-7" data-lucide="skip-back" strokeWidth="1.5"></i>
</button>
<button className="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center text-[#09090b] hover:scale-105 transition-transform shadow-xl shadow-white/5">
<i className="w-8 h-8" data-lucide="pause" strokeWidth="1.5"></i>
</button>
<button className="text-zinc-500 hover:text-zinc-100 transition-colors">
<i className="w-7 h-7" data-lucide="skip-forward" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</main>

<section className="py-40 border-t border-white/[0.04] bg-[#09090b] relative" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1fr_minmax(400px,_1fr)] gap-20 lg:gap-32 items-center">
<div className="space-y-12">
<h2 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-zinc-100 leading-tight">
                    Welcome to <br/> Bjorns VoiceOvers.
                </h2>
<div className="space-y-8 text-xl text-zinc-400 leading-relaxed max-w-2xl">
<p>Character voices and Narration in International English – or with different Accents!</p>
<p>Commercials and Narration in my own neutral south swedish accent or in national swedish.</p>
<p className="text-zinc-300">Björns voice is both warm, trustworthy and enthusiastic.</p>
<p>He has credibility and takes his work seriously and loves it. Either it's a shorter radio ad or longer e-learning project he always delivers with the highest professional standard.</p>
</div>

<div className="grid grid-cols-2 gap-10 pt-10 border-t border-white/[0.04]">
<div>
<p className="text-5xl font-normal tracking-tight text-zinc-100 mb-3">15+</p>
<p className="text-base text-zinc-500">Years behind the mic</p>
</div>
<div>
<p className="text-5xl font-normal tracking-tight text-zinc-100 mb-3">24h</p>
<p className="text-base text-zinc-500">Standard turnaround</p>
</div>
</div>
</div>

<div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[700px] rounded-[3rem] overflow-hidden group border border-white/[0.04]">
<div className="absolute inset-0 bg-zinc-800 -z-10"></div>
<img alt="Professional Recording Studio" className="object-cover w-full h-full opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full p-8 sm:p-10">
<div className="bg-zinc-950/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex items-center gap-6 transform translate-y-4 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center shrink-0">
<i className="w-7 h-7 text-zinc-100" data-lucide="mic-2" strokeWidth="1.5"></i>
</div>
<div>
<h4 className="text-zinc-100 text-xl font-normal tracking-tight mb-1">Source-Connect Ready</h4>
<p className="text-base text-zinc-400">Neumann TLM 103 • Apollo Twin X</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 border-t border-white/[0.04] bg-[#09090b] relative" id="demos">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20">
<div className="max-w-3xl space-y-8">
<h2 className="text-5xl sm:text-6xl font-normal tracking-tight text-zinc-100">Selected Demos</h2>
<p className="text-xl text-zinc-400 leading-relaxed">
                        Listen to a variety of vocal styles and ranges. From upbeat commercial reads to deep, dramatic narrations and unique character voices.
                    </p>
</div>
<button className="shrink-0 flex items-center gap-3 text-zinc-100 hover:text-white transition-colors border border-white/10 px-8 py-4 rounded-full text-lg hover:bg-white/[0.02]">
                    Download All Reels
                    <i className="w-5 h-5" data-lucide="download" strokeWidth="1.5"></i>
</button>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-zinc-900/40 border border-white/[0.04] p-8 rounded-[2.5rem] hover:bg-zinc-900 transition-colors">
<div className="flex justify-between items-start mb-10">
<button className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
<i className="w-7 h-7 text-zinc-100 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</button>
<span className="text-sm font-normal tracking-tight px-4 py-1.5 rounded-full bg-white/[0.03] text-zinc-300 border border-white/[0.05]">Commercial</span>
</div>
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 mb-3">Corporate Anthem</h3>
<p className="text-zinc-500 text-lg mb-10 leading-relaxed">Warm, authoritative, inspiring. Perfect for brand manifestos and tech launches.</p>
<div className="space-y-4">
<div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-600 w-[0%] group-hover:w-[15%] transition-all duration-1000"></div>
</div>
<div className="flex justify-between text-sm font-normal text-zinc-600 uppercase tracking-widest">
<span>0:00</span>
<span>1:12</span>
</div>
</div>
</div>

<div className="group bg-zinc-900/40 border border-white/[0.04] p-8 rounded-[2.5rem] hover:bg-zinc-900 transition-colors">
<div className="flex justify-between items-start mb-10">
<button className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
<i className="w-7 h-7 text-zinc-100 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</button>
<span className="text-sm font-normal tracking-tight px-4 py-1.5 rounded-full bg-white/[0.03] text-zinc-300 border border-white/[0.05]">E-Learning</span>
</div>
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 mb-3">Medical Narration</h3>
<p className="text-zinc-500 text-lg mb-10 leading-relaxed">Clear, educational, trustworthy. Complex terminology delivered with ease.</p>
<div className="space-y-4">
<div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-600 w-[0%] group-hover:w-[15%] transition-all duration-1000"></div>
</div>
<div className="flex justify-between text-sm font-normal text-zinc-600 uppercase tracking-widest">
<span>0:00</span>
<span>2:45</span>
</div>
</div>
</div>

<div className="group bg-zinc-900/40 border border-white/[0.04] p-8 rounded-[2.5rem] hover:bg-zinc-900 transition-colors">
<div className="flex justify-between items-start mb-10">
<button className="w-16 h-16 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center group-hover:bg-white/[0.08] transition-colors">
<i className="w-7 h-7 text-zinc-100 ml-1" data-lucide="play" strokeWidth="1.5"></i>
</button>
<span className="text-sm font-normal tracking-tight px-4 py-1.5 rounded-full bg-white/[0.03] text-zinc-300 border border-white/[0.05]">Character</span>
</div>
<h3 className="text-2xl font-normal tracking-tight text-zinc-100 mb-3">Video Game Villain</h3>
<p className="text-zinc-500 text-lg mb-10 leading-relaxed">Dark, raspy, menacing. Distinctive character acting for interactive media.</p>
<div className="space-y-4">
<div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-zinc-600 w-[0%] group-hover:w-[15%] transition-all duration-1000"></div>
</div>
<div className="flex justify-between text-sm font-normal text-zinc-600 uppercase tracking-widest">
<span>0:00</span>
<span>0:48</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-40 border-t border-white/[0.04] bg-[#09090b] relative overflow-hidden" id="clients">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/20 via-[#09090b] to-[#09090b] pointer-events-none"></div>
<div className="max-w-[1400px] mx-auto px-6 relative z-10">
<div className="text-center mb-24 space-y-6">
<h2 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-zinc-100">Trusted by the best</h2>
<p className="text-xl text-zinc-500 max-w-2xl mx-auto">Delivering consistent quality for global brands and independent creators alike.</p>
</div>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">

<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">SAAB</span>
</div>
<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">TUI</span>
</div>
<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">Roche</span>
</div>
<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">Apple</span>
</div>
<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">Google</span>
</div>
<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">Renishaw</span>
</div>
<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">Summit Racing</span>
</div>
<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">Laver Cup</span>
</div>
<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">Mini Clubman</span>
</div>
<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">Glasslogos</span>
</div>
<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">Tesla</span>
</div>
<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">TT-Line</span>
</div>
<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">BMW</span>
</div>
<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">Dragon Media</span>
</div>
<div className="relative group flex items-center justify-center p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300 overflow-hidden">
<span className="relative z-10 text-xl font-normal tracking-tight text-zinc-400 group-hover:text-zinc-100 transition-colors text-center">ISOVER</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#313134]">
<div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24">
<h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white flex flex-wrap justify-center items-center gap-3">
                Need a <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-500">QUALITY</span> Voice?
            </h2>
<button className="bg-white text-zinc-900 rounded-full px-10 py-4 flex items-center justify-center gap-3 font-semibold text-lg hover:scale-105 transition-transform shadow-[0_0_50px_-10px_rgba(255,255,255,0.4)] whitespace-nowrap">
<i className="w-6 h-6 text-orange-500" data-lucide="mic" strokeWidth="2"></i>
                book session now
            </button>
</div>
</section>

<footer className="border-t border-white/[0.04] bg-[#09090b] py-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-2 font-normal text-zinc-100 text-xl uppercase tracking-tight">
<i className="w-6 h-6" data-lucide="audio-waveform" strokeWidth="1.5"></i>
                BJORNS
            </div>
<p className="text-zinc-500 text-lg">
                © 2024 Bjorn Voiceovers. All rights reserved.
            </p>
<div className="flex items-center gap-6 text-zinc-500">
<a aria-label="LinkedIn" className="hover:text-zinc-100 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a aria-label="Twitter" className="hover:text-zinc-100 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a aria-label="Instagram" className="hover:text-zinc-100 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a aria-label="Email" className="hover:text-zinc-100 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</a>
</div>
</div>
</footer>



    </>
  );
}
