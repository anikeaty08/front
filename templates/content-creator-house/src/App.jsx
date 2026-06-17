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



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
500: '#ef4444',
600: '#dc2626',
900: '#7f1d1d',
},
dark: {
900: '#0a0a0a',
800: '#171717',
700: '#262626',
}
},
animation: {
'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'blob': 'blob 7s infinite',
'text-shine': 'textShine 4s linear infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
textShine: {
'0%': { backgroundPosition: '0% 50%' },
'100%': { backgroundPosition: '200% 50%' }
}
}
}
}
}



        lucide.createIcons();

        // Simple Intersection Observer for scroll animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const scrollElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
            scrollElements.forEach(el => observer.observe(el));
        });
    
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
      

<nav className="fixed top-0 w-full z-50 liquid-glass-strong transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">

<div className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300 shadow-[0_0_15px_rgba(239,68,68,0.3)]">
<img alt="CCH Logo" className="w-full h-full object-cover scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2572b6-6435-4ab8-8a93-d036d7feb90b_320w.webp"/>
</div>
<span className="text-sm font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors">Content Creator House</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-[13px] font-medium text-neutral-400 hover:text-white transition-colors tracking-wide" href="#">Talent</a>
<a className="text-[13px] font-medium text-neutral-400 hover:text-white transition-colors tracking-wide" href="#">How it Works</a>
<a className="text-[13px] hover:text-white transition-colors font-medium text-neutral-400 tracking-wide" href="#">Become A Editor/Affiliate</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-[13px] font-medium text-neutral-400 hover:text-white transition-colors">Log in</button>
<button className="bg-white text-black px-5 py-2 rounded-full text-xs font-semibold tracking-wide hover:bg-neutral-200 transition-colors shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">Start Hiring</button>
</div>
</div>
</nav>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] mix-blend-screen animate-blob opacity-60"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-orange-900/10 rounded-full blur-[100px] opacity-40 animate-blob" style={{animationDelay: '2s'}}></div>
<div className="absolute top-[30%] left-[60%] w-[400px] h-[400px] bg-neutral-800/20 rounded-full blur-[90px] animate-blob" style={{animationDelay: '4s'}}></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>
<main className="max-w-7xl z-10 mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">

<div className="text-center max-w-4xl mx-auto mb-32 relative">
<div className="reveal delay-100 inline-flex hover:bg-red-500/10 transition-all cursor-default active text-xs font-medium text-red-400 bg-red-500/5 border-red-500/20 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 shadow-[0_0_20px_-10px_rgba(239,68,68,0.5)] backdrop-blur-md gap-x-2 gap-y-2 items-center">Top Of The Line Talent Only</div>
<h1 className="reveal delay-200 text-5xl md:text-8xl font-medium tracking-tight text-white mb-8 leading-[0.95] active">
<span className="block text-gradient">Content Creator</span>
<span className="block animate-text-shine">House.</span>
</h1>
<p className="reveal delay-300 text-lg text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto mb-10 active">
                The definitive marketplace. Hire vetted video editors and thumbnail artists with transparent pricing and portfolios.
            </p>
<div className="reveal delay-300 flex items-center justify-center gap-4 active">
<button className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)]">
                    Browse Talent
                </button>
<button className="group px-8 py-3.5 rounded-full text-sm font-medium text-white hover:text-red-400 transition-colors flex items-center gap-2 backdrop-blur-sm hover:bg-white/5">
<svg className="lucide lucide-play-circle w-4 h-4 group-hover:scale-110 transition-transform stroke-[1.5]" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg> See How It Works
                </button>
</div>
</div>

<div className="space-y-8">

<div className="reveal flex flex-col md:flex-row md:items-center gap-6 sticky z-40 transition-all active bg-[#030303]/70 border-white/5 border-b pt-4 pb-6 top-20 backdrop-blur-xl gap-x-6 gap-y-6 items-end justify-between">
<div className="flex items-center gap-1.5 bg-white/5 p-1 rounded-xl border border-white/5 shadow-inner">
<button className="px-5 py-2 rounded-lg bg-neutral-800/80 text-white text-xs font-medium shadow-lg border border-white/10 transition-all">All Talent</button>
<button className="px-5 py-2 rounded-lg text-neutral-400 hover:text-white text-xs font-normal hover:bg-white/5 transition-all">Video Editors</button>
<button className="px-5 py-2 rounded-lg text-neutral-400 hover:text-white text-xs font-normal hover:bg-white/5 transition-all">Thumbnail Artists</button>
</div>
<div className="flex items-center gap-4">
<div className="relative group">
<button className="flex items-center gap-2 text-neutral-400 text-xs font-normal px-4 py-2 hover:text-white transition-colors">
<svg className="lucide lucide-arrow-up-down w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-300 stroke-[1.5]" data-lucide="arrow-up-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 16-4 4-4-4"></path><path d="M17 20V4"></path><path d="m3 8 4-4 4 4"></path><path d="M7 4v16"></path></svg>
                            Sort by: <span className="text-white">Overall Pick</span>
</button>
</div>
<div className="h-4 w-[1px] bg-white/10"></div>
<div className="flex items-center gap-2">
<span className="text-xs text-neutral-500">Filters:</span>
<span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] uppercase tracking-wide text-neutral-400 hover:border-red-500/30 hover:text-white cursor-pointer transition-all">Fast Delivery</span>
<span className="px-2.5 py-1 rounded bg-white/5 border border-white/5 text-[10px] uppercase tracking-wide text-neutral-400 hover:border-red-500/30 hover:text-white cursor-pointer transition-all">$50 - $200</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="reveal delay-100 group liquid-glass rounded-2xl p-5 card-hover cursor-pointer active">
<div className="absolute top-0 right-0 p-3 z-10">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[10px] uppercase font-bold tracking-wide backdrop-blur-md">
<svg className="lucide lucide-star w-3 h-3 fill-current stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> CCH Choice
                        </span>
</div>
<div className="flex items-start gap-4 mb-6 relative z-10">
<div className="relative">
<img alt="Profile" className="group-hover:border-red-500/50 transition-colors w-14 h-14 object-cover bg-center border-white/10 border rounded-full shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2572b6-6435-4ab8-8a93-d036d7feb90b_320w.webp"/>
<div className="absolute -bottom-1 -right-1 bg-neutral-900 rounded-full p-0.5 border border-black">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-blue-500 fill-white/10 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div className="">
<h3 className="group-hover:text-red-400 transition-colors text-lg font-medium text-white" style={{}}>Slipz</h3>
<p className="uppercase text-xs font-medium text-neutral-500 tracking-wide mb-1" style={{}}>no life</p>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="flex items-center gap-1"><svg className="lucide lucide-star w-3 h-3 text-amber-500 fill-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.9 (128)</span>
<span className="text-neutral-600">•</span>
<span className="">24h Turnaround</span>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-2 mb-6 h-28 relative z-10">
<div className="col-span-2 bg-neutral-900/50 rounded-lg overflow-hidden relative group/img border border-white/5">
<img className="group-hover/img:opacity-100 transition-all duration-500 transform group-hover/img:scale-105 opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2572b6-6435-4ab8-8a93-d036d7feb90b_800w.webp"/>
<div className="flex group-hover/img:opacity-100 transition-opacity opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl">
<svg className="lucide lucide-play w-4 h-4 text-white fill-white ml-0.5 stroke-[1.5]" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="flex flex-col gap-2 gap-x-2 gap-y-2">
<div className="bg-neutral-900/50 rounded-lg h-full overflow-hidden relative group/sub border border-white/5">
<img className="group-hover/sub:opacity-100 transition-all opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2572b6-6435-4ab8-8a93-d036d7feb90b_320w.webp"/>
</div>
<div className="bg-neutral-900/50 rounded-lg h-full overflow-hidden relative group/sub border border-white/5">
<img className="group-hover/sub:opacity-100 transition-all opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2572b6-6435-4ab8-8a93-d036d7feb90b_320w.webp"/>
</div>
</div>
</div>
<div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto relative z-10">
<div className="">
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-0.5 font-medium">Starting at</p>
<p className="text-lg font-medium text-white" style={{}}>$61</p>
</div>
<button className="bg-white text-black pl-4 pr-3 py-2 rounded-lg text-xs font-semibold hover:bg-neutral-200 transition-colors flex items-center gap-1 group/btn shadow-lg shadow-white/5">
                            View Profile <svg className="lucide lucide-arrow-right w-3 h-3 group-hover/btn:translate-x-1 transition-transform stroke-[1.5]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="reveal delay-200 group liquid-glass rounded-2xl p-5 card-hover cursor-pointer active">
<div className="absolute top-0 right-0 p-3 z-10">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] uppercase font-bold tracking-wide backdrop-blur-md">
<svg className="lucide lucide-flame w-3 h-3 stroke-[1.5]" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg> High Demand
                        </span>
</div>
<div className="flex items-start gap-4 mb-6 relative z-10">
<div className="relative">
<img alt="Profile" className="group-hover:border-red-500/50 transition-colors w-14 h-14 object-cover bg-center border-white/10 border rounded-full shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2572b6-6435-4ab8-8a93-d036d7feb90b_320w.webp"/>
<div className="absolute -bottom-1 -right-1 bg-neutral-900 rounded-full p-0.5 border border-black">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-neutral-500 stroke-[1.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div className="">
<h3 className="group-hover:text-red-400 transition-colors text-lg font-medium text-white" style={{}}>Tariq</h3>
<p className="text-xs text-neutral-500 mb-1 uppercase tracking-wide font-medium">Thumbnail Artist</p>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="flex items-center gap-1"><svg className="lucide lucide-star w-3 h-3 text-amber-500 fill-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 5.0 (42)</span>
<span className="text-neutral-600">•</span>
<span className="" style={{}}>6-7 hours</span>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-2 mb-6 h-28 relative z-10">
<div className="col-span-3 bg-neutral-900/50 rounded-lg overflow-hidden relative group/img border border-white/5">
<img className="group-hover/img:opacity-100 transition-all duration-500 transform group-hover/img:scale-105 opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2572b6-6435-4ab8-8a93-d036d7feb90b_800w.webp"/>
</div>
</div>
<div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto relative z-10">
<div className="">
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-0.5 font-medium">Starting at</p>
<p className="text-lg font-medium text-white" style={{}}>$67</p>
</div>
<button className="bg-white/5 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-white/10 border border-white/5 transition-colors flex items-center gap-2">
                            View Profile
                        </button>
</div>
</div>

<div className="reveal delay-300 group liquid-glass card-hover cursor-pointer active rounded-2xl pt-5 pr-5 pb-5 pl-5">
<div className="absolute top-0 right-0 p-3 z-10">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase font-bold tracking-wide backdrop-blur-md">
<svg className="lucide lucide-sparkles w-3 h-3 stroke-[1.5]" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg> New
                        </span>
</div>
<div className="flex items-start gap-4 mb-6 relative z-10">
<div className="relative">
<img alt="Profile" className="group-hover:border-red-500/50 transition-colors w-14 h-14 object-cover border-white/10 border rounded-full shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2572b6-6435-4ab8-8a93-d036d7feb90b_320w.webp"/>
</div>
<div className="">
<h3 className="group-hover:text-red-400 transition-colors text-lg font-medium text-white" style={{}}>Vee</h3>
<p className="text-xs text-neutral-500 mb-1 uppercase tracking-wide font-medium">Montage Specialist</p>
<div className="flex items-center gap-2 text-xs text-neutral-400">
<span className="flex items-center gap-1"><svg className="lucide lucide-star w-3 h-3 text-amber-500 fill-amber-500 stroke-[1.5]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.8 (15)</span>
<span className="text-neutral-600">•</span>
<span className="">12h Turnaround</span>
</div>
</div>
</div>

<div className="grid grid-cols-3 gap-2 mb-6 h-28 relative z-10">
<div className="bg-neutral-900/50 rounded-lg h-full overflow-hidden group/sub border border-white/5">
<img className="group-hover/sub:opacity-100 transition-all opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2572b6-6435-4ab8-8a93-d036d7feb90b_320w.webp"/>
</div>
<div className="bg-neutral-900/50 rounded-lg h-full overflow-hidden group/sub border border-white/5">
<img className="group-hover/sub:opacity-100 transition-all opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2572b6-6435-4ab8-8a93-d036d7feb90b_320w.webp"/>
</div>
<div className="bg-neutral-900/50 rounded-lg h-full overflow-hidden group/sub border border-white/5">
<img className="group-hover/sub:opacity-100 transition-all opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2572b6-6435-4ab8-8a93-d036d7feb90b_320w.webp"/>
</div>
</div>
<div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto relative z-10">
<div className="">
<p className="text-[10px] text-neutral-500 uppercase tracking-widest mb-0.5 font-medium">Starting at</p>
<p className="text-lg font-medium text-white" style={{}}>$61</p>
</div>
<button className="bg-white/5 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-white/10 border border-white/5 transition-colors flex items-center gap-2">
                            View Profile
                        </button>
</div>
</div>
</div>
</div>

<div className="border-white/5 border-t mt-32 pt-16">
<div className="reveal flex items-center gap-2 mb-8">
<div className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
<p className="text-xs font-bold text-red-500 uppercase tracking-widest">Workflow Preview</p>
</div>
<div className="grid lg:grid-cols-12 gap-8">

<div className="reveal-left lg:col-span-8">
<div className="liquid-glass rounded-2xl p-8 shadow-2xl">

<div className="flex justify-between items-start mb-8">
<div className="">
<h2 className="text-2xl font-medium text-white mb-2">Project Request</h2>
<p className="text-sm text-neutral-400">Submit your brief to <span className="font-medium text-white" style={{}}>No Life Slipz</span>.</p>
</div>
<div className="flex flex-col items-end">
<span className="text-[10px] text-neutral-500 uppercase tracking-widest mb-1 font-medium">Estimated Total</span>
<span className="text-3xl font-medium text-white tracking-tight">$85.00</span>
</div>
</div>

<div className="space-y-6">
<div className="">
<label className="block text-[11px] uppercase tracking-wide font-semibold text-neutral-500 mb-2">Video/Project Title</label>
<input className="focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all placeholder-neutral-600 text-sm text-white bg-neutral-900/50 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4 backdrop-blur-sm" type="text" value="Bedwars 1000 Win Streak Montage"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="">
<label className="block text-[11px] uppercase tracking-wide font-semibold text-neutral-500 mb-2">Style Reference</label>
<div className="relative">
<select className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:border-red-500/50 transition-all backdrop-blur-sm">
<option>Fast Paced / Hyper</option>
<option>Cinematic / Story</option>
<option>Funny / Meme</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-3.5 w-4 h-4 text-neutral-500 pointer-events-none stroke-[1.5]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="">
<label className="block text-[11px] uppercase tracking-wide font-semibold text-neutral-500 mb-2">Deadline</label>
<div className="relative">
<input className="focus:outline-none focus:border-red-500/50 transition-all text-sm text-white bg-neutral-900/50 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4 backdrop-blur-sm" type="date"/>
</div>
</div>
</div>
<div className="">
<label className="block text-[11px] uppercase tracking-wide font-semibold text-neutral-500 mb-2">Additional Notes</label>
<textarea className="w-full bg-neutral-900/50 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50 transition-all h-32 resize-none backdrop-blur-sm" placeholder="Paste your footage link here..."></textarea>
</div>
</div>

<div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
<p className="text-xs text-neutral-500 flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4 text-emerald-500 stroke-[1.5]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> Payment held securely in escrow
                            </p>
<button className="bg-white text-black px-8 py-3 rounded-lg text-sm font-semibold hover:bg-neutral-200 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:scale-105 active:scale-95">
                                Send Offer
                            </button>
</div>
</div>
</div>

<div className="reveal-right lg:col-span-4 space-y-6">

<div className="liquid-glass rounded-2xl pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-4 mb-6">
<img className="w-16 h-16 object-cover bg-center border-white/10 border-2 rounded-full shadow-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2572b6-6435-4ab8-8a93-d036d7feb90b_320w.webp"/>
<div className="">
<h3 className="text-lg font-medium text-white" style={{}}>Slipz</h3>
<p className="flex items-center gap-1.5 text-xs font-medium text-emerald-400 mt-1" style={{}}><span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span> Online Now (always online)</p>
</div>
</div>
<div className="space-y-4">
<div className="flex border-white/5 border-b pt-2 pb-2 items-center justify-between">
<span className="text-xs text-neutral-400">Response Time</span>
<span className="text-xs font-medium text-white">~6-7 seconds</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<span className="text-xs text-neutral-400">Jobs Completed</span>
<span className="text-xs font-medium text-white" style={{}}>167</span>
</div>
<div className="flex justify-between items-center py-2 border-b border-white/5">
<span className="text-xs text-neutral-400">Repeat Clients</span>
<span className="text-xs font-medium text-white" style={{}}>45%</span>
</div>
</div>
<div className="mt-6">
<h4 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-3">Software</h4>
<div className="flex flex-wrap gap-2">
<span className="text-[10px] font-medium text-neutral-300 bg-white/5 border-white/5 border rounded pt-1 pr-2.5 pb-1 pl-2.5">Discord</span>
<span className="text-[10px] font-medium text-neutral-300 bg-white/5 border-white/5 border rounded pt-1 pr-2.5 pb-1 pl-2.5">Photoshop</span>
<span className="text-[10px] font-medium text-neutral-300 bg-white/5 border-white/5 border rounded pt-1 pr-2.5 pb-1 pl-2.5">Blender</span>
</div>
</div>
</div>

<div className="bg-gradient-to-br from-red-900/10 to-transparent border border-red-500/10 rounded-2xl p-6 relative overflow-hidden group liquid-glass">
<div className="absolute -right-10 -top-10 w-32 h-32 bg-red-500/20 rounded-full blur-3xl group-hover:bg-red-500/30 transition-all"></div>
<svg className="lucide lucide-award w-8 h-8 text-red-500 mb-3 relative z-10 stroke-[1.5] drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<h4 className="text-white font-medium mb-1 relative z-10">Top Rated Talent</h4>
<p className="text-xs text-neutral-400 leading-relaxed relative z-10">
                            This creator has maintained a 5-star rating for the last 3 months.
                        </p>
</div>
</div>
</div>
</div>
</main>
<footer className="border-t border-white/5 bg-black/40 backdrop-blur-xl mt-20 relative z-10">
<div className="flex flex-col md:flex-row max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-3">

<div className="w-6 h-6 flex items-center justify-center rounded-full overflow-hidden shadow-[0_0_10px_rgba(239,68,68,0.3)]">
<img className="w-full h-full object-cover scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d2572b6-6435-4ab8-8a93-d036d7feb90b_320w.webp"/>
</div>
<span className="text-xs text-neutral-500">© 2024 Content Creator House. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Terms</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
