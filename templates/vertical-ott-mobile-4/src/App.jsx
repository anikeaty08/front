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



        // --- REAL APP LOGIC ---

        // 1. Progress Bar Simulation (Feels real)
        const progressFill = document.getElementById('progress-fill');
        let progress = 30;
        
        setInterval(() => {
            if(document.getElementById('paywall-screen').classList.contains('hidden')) {
                progress += 0.2; 
                if (progress >= 100) {
                    progress = 0; // Loop for demo, real app would go next
                    // triggerPaywall(); // Optionally trigger paywall at end
                }
                progressFill.style.width = `${progress}%`;
            }
        }, 100);

        // 2. Language Toggle Logic
        function setLanguage(lang) {
            const ind = document.getElementById('lang-indicator');
            const btnHi = document.getElementById('btn-hi');
            const btnMr = document.getElementById('btn-mr');

            if (lang === 'hi') {
                ind.style.transform = 'translateX(0)';
                btnHi.classList.replace('text-white/60', 'text-white');
                btnMr.classList.replace('text-white', 'text-white/60');
            } else {
                ind.style.transform = 'translateX(100%) translateX(8px)'; // Adjust for padding
                ind.style.left = '-4px'; // Micro adjustment
                btnMr.classList.replace('text-white/60', 'text-white');
                btnHi.classList.replace('text-white', 'text-white/60');
            }
        }

        // 3. Sheet Logic
        function toggleEpisodes() {
            const sheet = document.getElementById('episodes-sheet');
            if (sheet.classList.contains('hidden')) {
                sheet.classList.remove('hidden');
                sheet.classList.add('flex');
            } else {
                sheet.classList.add('hidden');
                sheet.classList.remove('flex');
            }
        }

        // 4. Paywall Logic
        function triggerPaywall() {
            // Close sheets first
            document.getElementById('episodes-sheet').classList.add('hidden');
            
            const paywall = document.getElementById('paywall-screen');
            paywall.classList.remove('hidden');
            paywall.classList.add('flex');
        }

        function closePaywall() {
            const paywall = document.getElementById('paywall-screen');
            paywall.classList.add('hidden');
            paywall.classList.remove('flex');
        }

        // 5. Play/Pause Simple Toggle
        function togglePlay() {
            const video = document.getElementById('mainVideo');
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        }
    
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
      

<main className="relative w-full h-full md:max-w-[420px] md:h-[90vh] md:my-auto md:rounded-[32px] md:border md:border-white/10 md:shadow-2xl overflow-hidden bg-black flex flex-col">

<div className="absolute inset-0 z-0 bg-neutral-900" onclick="togglePlay()">

<video autoplay="" className="w-full h-full object-cover opacity-90" id="mainVideo" loop="" playsinline="" poster="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&amp;w=1887&amp;auto=format&amp;fit=crop">
<source src="https://assets.mixkit.co/videos/preview/mixkit-young-woman-talking-on-video-call-with-smartphone-outdoors-40998-large.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent via-50% to-black/95"></div>
</div>

<header className="absolute top-0 w-full z-20 pt-12 pb-4 px-4 flex justify-between items-start md:pt-6">

<div className="glass rounded-full p-1 flex items-center border border-white/5 relative">
<div className="absolute left-1 w-[calc(50%-4px)] h-[calc(100%-8px)] bg-white/20 rounded-full transition-all duration-300" id="lang-indicator"></div>
<button className="relative z-10 px-3 py-1.5 text-xs font-semibold tracking-wide transition-colors text-white" id="btn-hi" onclick="setLanguage('hi')">Hindi</button>
<button className="relative z-10 px-3 py-1.5 text-xs font-medium tracking-wide transition-colors text-white/60 hover:text-white" id="btn-mr" onclick="setLanguage('mr')">Marathi</button>
</div>

<button className="glass rounded-full px-3 py-1.5 flex items-center gap-2 border border-white/5 active:scale-95 transition-transform">
<div className="w-4 h-4 rounded-full bg-gradient-to-br from-yellow-300 to-amber-600 flex items-center justify-center text-[8px] font-bold text-black shadow-[0_0_10px_rgba(251,191,36,0.6)]">₹</div>
<span className="text-xs font-semibold">240</span>
</button>
</header>

<aside className="absolute right-0 bottom-[140px] z-20 flex flex-col items-center gap-5 pr-4">
<button className="flex flex-col items-center gap-1 active:scale-90 transition-transform group">
<div className="p-2 rounded-full glass group-hover:bg-white/20 transition">
<iconify-icon className="text-white" icon="solar:heart-linear" width="26"></iconify-icon>
</div>
<span className="text-[10px] font-medium drop-shadow-md">12K</span>
</button>
<button className="flex flex-col items-center gap-1 active:scale-90 transition-transform group">
<div className="p-2 rounded-full glass group-hover:bg-white/20 transition">
<iconify-icon className="text-white" icon="solar:chat-round-dots-linear" width="26"></iconify-icon>
</div>
<span className="text-[10px] font-medium drop-shadow-md">450</span>
</button>
<button className="flex flex-col items-center gap-1 active:scale-90 transition-transform group">
<div className="p-2 rounded-full glass group-hover:bg-white/20 transition">
<iconify-icon className="text-white" icon="solar:share-linear" width="26"></iconify-icon>
</div>
<span className="text-[10px] font-medium drop-shadow-md">Share</span>
</button>
</aside>

<div className="absolute bottom-[60px] left-0 w-full z-20 px-5 pb-6 flex flex-col gap-3">

<div className="flex flex-col items-start gap-1.5">
<div className="flex items-center gap-2">
<span className="bg-amber-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wider">New</span>
<span className="text-[11px] text-white/80 font-medium bg-white/10 px-1.5 py-0.5 rounded-md backdrop-blur-sm">Romance</span>
</div>
<h1 className="text-2xl font-semibold leading-none tracking-tight font-[Mukta] drop-shadow-lg">
                    Adhura Ishq
                </h1>
<p className="text-sm text-white/80 line-clamp-1 font-medium flex items-center gap-2">
<span className="text-amber-400">Ep 3</span> <span className="opacity-40">|</span> Season 1 <span className="opacity-40">|</span> 4m left
                </p>
</div>

<div className="flex items-center gap-3 w-full mt-2">

<button className="flex-1 glass border border-white/20 rounded-xl h-11 px-4 flex items-center justify-between active:bg-white/10 transition group" onclick="toggleEpisodes()">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/90" icon="solar:layers-minimalistic-linear" width="18"></iconify-icon>
<span className="text-xs font-semibold tracking-wide">Episodes</span>
</div>
<iconify-icon className="text-white/50 group-hover:-translate-y-0.5 transition-transform" icon="solar:alt-arrow-up-linear" width="16"></iconify-icon>
</button>

<button className="glass border border-white/20 rounded-xl h-11 w-11 flex items-center justify-center active:bg-white/10 transition" onclick="triggerPaywall()">
<iconify-icon className="text-white" icon="solar:skip-next-bold" width="20"></iconify-icon>
</button>
</div>

<div className="w-full h-1 bg-white/20 rounded-full mt-2 relative overflow-hidden group">
<div className="h-full bg-amber-500 w-[30%] absolute top-0 left-0 rounded-full transition-all duration-1000 ease-linear" id="progress-fill"></div>
</div>
</div>

<nav className="absolute bottom-0 w-full z-30 glass-heavy border-t border-white/5 h-[60px] flex justify-around items-center px-2">
<button className="flex flex-col items-center gap-1 p-2 text-white">
<iconify-icon icon="solar:home-2-bold" width="22"></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-white/40 hover:text-white transition">
<iconify-icon icon="solar:compass-linear" width="22"></iconify-icon>
</button>
<button className="flex flex-col items-center gap-1 p-2 text-white/40 hover:text-white transition">
<iconify-icon icon="solar:user-circle-linear" width="22"></iconify-icon>
</button>
</nav>

<div className="absolute inset-0 z-40 bg-black/50 backdrop-blur-sm hidden flex-col justify-end" id="episodes-sheet">

<div className="flex-1" onclick="toggleEpisodes()"></div>
<div className="bg-neutral-900 rounded-t-[28px] border-t border-white/10 shadow-2xl h-[70%] flex flex-col animate-slide-up">

<div className="w-full flex justify-center pt-3 pb-1" onclick="toggleEpisodes()">
<div className="w-10 h-1 bg-neutral-700 rounded-full"></div>
</div>

<div className="px-5 py-4 flex justify-between items-center border-b border-white/5">
<div>
<h2 className="text-lg font-semibold text-white">Season 1</h2>
<p className="text-xs text-neutral-400">12 Episodes • Drama</p>
</div>
<button className="p-2 bg-neutral-800 rounded-full text-neutral-400" onclick="toggleEpisodes()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-2 no-scrollbar">

<div className="flex gap-3 p-2 rounded-xl hover:bg-white/5 opacity-60">
<div className="w-16 h-20 bg-neutral-800 rounded-lg overflow-hidden relative grayscale">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&amp;w=1780&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col justify-center">
<span className="text-[10px] text-neutral-400 uppercase tracking-wide">Ep 1</span>
<h3 className="text-sm font-medium text-neutral-300">Pehli Mulaqat</h3>
<span className="text-xs text-neutral-500">Watched</span>
</div>
</div>

<div className="flex gap-3 p-2 rounded-xl hover:bg-white/5 opacity-60">
<div className="w-16 h-20 bg-neutral-800 rounded-lg overflow-hidden relative grayscale">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?q=80&amp;w=1956&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1 flex flex-col justify-center">
<span className="text-[10px] text-neutral-400 uppercase tracking-wide">Ep 2</span>
<h3 className="text-sm font-medium text-neutral-300">Woh Raat</h3>
<span className="text-xs text-neutral-500">Watched</span>
</div>
</div>

<div className="flex gap-3 p-2 rounded-xl bg-white/10 border border-amber-500/20">
<div className="w-16 h-20 bg-neutral-800 rounded-lg overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1616091216791-a5360b5fc78a?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20">
<iconify-icon className="text-amber-500" icon="solar:chart-square-bold" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1 flex flex-col justify-center">
<span className="text-[10px] text-amber-500 font-bold uppercase tracking-wide">Playing</span>
<h3 className="text-sm font-semibold text-white">Sach Ka Saamna</h3>
<span className="text-xs text-neutral-400">4m 12s</span>
</div>
</div>

<div className="flex gap-3 p-2 rounded-xl active:bg-white/5 cursor-pointer" onclick="triggerPaywall()">
<div className="w-16 h-20 bg-neutral-800 rounded-lg overflow-hidden relative">

<img className="w-full h-full object-cover opacity-40 blur-[1px]" src="https://images.unsplash.com/photo-1529139574466-a302d2d3f524?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<iconify-icon className="text-white drop-shadow-md" icon="solar:lock-keyhole-minimalistic-bold" width="20"></iconify-icon>
</div>
</div>
<div className="flex-1 flex flex-col justify-center">
<span className="text-[10px] text-neutral-400 uppercase tracking-wide">Ep 4</span>
<h3 className="text-sm font-medium text-neutral-300">Cliffhanger Ending...</h3>
<div className="flex items-center gap-2 mt-1">
<span className="bg-amber-500 text-black text-[10px] font-bold px-1.5 rounded">PREMIUM</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 z-50 bg-neutral-900 hidden flex-col animate-slide-up" id="paywall-screen">

<div className="absolute inset-0 z-0 opacity-40">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1529139574466-a302d2d3f524?q=80&amp;w=1888&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent"></div>
</div>
<div className="relative z-10 flex-1 flex flex-col px-6 pt-10 pb-8">

<div className="w-full flex justify-end">
<button className="p-2 bg-white/10 rounded-full backdrop-blur-md" onclick="closePaywall()">
<iconify-icon className="text-white" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center mt-4">
<div className="w-14 h-14 rounded-full bg-amber-500 flex items-center justify-center mb-6 shadow-[0_0_25px_rgba(245,158,11,0.5)] animate-pulse-slow">
<iconify-icon className="text-black" icon="solar:lock-unlocked-bold" width="28"></iconify-icon>
</div>
<h2 className="text-2xl font-bold font-[Mukta] mb-2 leading-tight">
                        Aage kya hua?
                    </h2>
<p className="text-sm text-neutral-400 mb-8 max-w-[80%]">
                        Rahul ne letter padh liya. Reveal dekhne ke liye agla episode unlock karein.
                    </p>

<button className="w-full bg-white hover:bg-neutral-200 text-black rounded-xl h-14 flex items-center justify-between px-5 mb-4 shadow-lg transition-transform active:scale-95">
<span className="font-bold text-sm">Unlock Ep 4</span>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500 line-through">₹10</span>
<span className="bg-black text-white text-xs font-bold px-2 py-1 rounded">₹5</span>
</div>
</button>
<div className="flex items-center gap-3 w-full mb-4 opacity-30">
<div className="h-[1px] bg-white flex-1"></div>
<span className="text-[10px]">OR</span>
<div className="h-[1px] bg-white flex-1"></div>
</div>

<button className="w-full glass border border-white/10 rounded-xl h-12 flex items-center justify-center gap-2 active:bg-white/10 transition">
<span className="text-sm text-neutral-300">Use 50 Coins</span>
<div className="w-4 h-4 rounded-full bg-yellow-500"></div>
</button>
</div>
<p className="text-[10px] text-center text-neutral-600">Secure payments via UPI • Cancel anytime</p>
</div>
</div>
</main>


    </>
  );
}
