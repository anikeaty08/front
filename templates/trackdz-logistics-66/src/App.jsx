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
serif: ['Instrument Serif', 'serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'marquee': 'marquee 40s linear infinite',
'float': 'float 6s ease-in-out infinite',
'beam': 'beam 2s infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
fadeUp: {
'from': { opacity: '0', transform: 'translateY(20px)' },
'to': { opacity: '1', transform: 'translateY(0)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
beam: {
'0%': { left: '-100%', opacity: '0' },
'50%': { opacity: '0.5' },
'100%': { left: '100%', opacity: '0' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Dark Mode Toggle Logic
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            htmlElement.classList.add('dark');
        } else {
            htmlElement.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                htmlElement.classList.remove('dark');
                localStorage.theme = 'light';
            } else {
                htmlElement.classList.add('dark');
                localStorage.theme = 'dark';
            }
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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-50 dark:opacity-40"></div>
<div className="bg-grid absolute inset-0"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-neutral-200/50 dark:border-white/5 bg-white/70 dark:bg-[#050505]/70 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-neutral-900 dark:bg-white rounded-md flex items-center justify-center text-white dark:text-black">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">TrackDz</span>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors" href="#app">Mobile App</a>
<button className="p-2 rounded-full hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors text-neutral-600 dark:text-neutral-400" id="theme-toggle">

<svg className="w-4 h-4 hidden dark:block" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>

<svg className="w-4 h-4 block dark:hidden" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</div>
</nav>

<main className="relative z-10 pt-32 pb-20 px-6">
<div className="max-w-3xl mx-auto text-center flex flex-col items-center">
<div className="animate-fade-up opacity-0 delay-100 mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[11px] font-medium text-neutral-600 dark:text-neutral-300 uppercase tracking-widest">Live Updates</span>
</div>
<h1 className="animate-fade-up opacity-0 delay-200 text-5xl md:text-7xl font-semibold text-neutral-900 dark:text-white tracking-tighter leading-[1] mb-6">
                Locate your <span className="font-serif italic font-light text-neutral-500 dark:text-neutral-400">logistics.</span>
</h1>
<p className="animate-fade-up opacity-0 delay-300 text-neutral-500 dark:text-neutral-400 text-sm md:text-base max-w-lg mb-12 font-light leading-relaxed">
                The unified tracking layer for Algeria and beyond. Real-time status updates from EMS, Algérie Poste, and global carriers without the noise.
            </p>

<div className="animate-fade-up opacity-0 delay-500 w-full max-w-xl relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-neutral-200 to-neutral-200 dark:from-indigo-500/50 dark:to-purple-500/50 rounded-xl blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
<div className="relative flex items-center bg-white dark:bg-[#0A0A0B] rounded-xl border border-neutral-200 dark:border-white/10 p-1.5 shadow-2xl shadow-neutral-200/50 dark:shadow-black/50">
<div className="pl-4 text-neutral-400">
<i className="w-5 h-5" data-lucide="package-search"></i>
</div>
<input className="w-full bg-transparent border-none focus:ring-0 text-sm p-3 text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-600 font-mono tracking-wide h-12 outline-none" placeholder="Enter tracking number (e.g. DZ123456789)" type="text"/>
<button className="hidden sm:flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-black px-5 py-2.5 rounded-lg text-xs font-semibold hover:opacity-90 transition-opacity">
<span>Track</span>
<i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
<button className="sm:hidden p-3 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-lg">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
<div className="mt-4 flex items-center justify-center gap-4 opacity-60">
<div className="flex items-center gap-1.5 text-[10px] text-neutral-500 font-mono uppercase">
<i className="w-3 h-3" data-lucide="shield-check"></i> Secure Search
                    </div>
<div className="flex items-center gap-1.5 text-[10px] text-neutral-500 font-mono uppercase">
<i className="w-3 h-3" data-lucide="history"></i> History Enabled
                    </div>
</div>
</div>
</div>
</main>

<section className="py-12 border-y border-neutral-200 dark:border-white/5 bg-white/50 dark:bg-white/[0.02] relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#F2F2F2] dark:from-[#050505] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#F2F2F2] dark:from-[#050505] to-transparent z-10"></div>
<div className="flex w-max animate-marquee items-center">

<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<i className="w-6 h-6 dark:text-white" data-lucide="plane"></i>
<span className="text-sm font-semibold tracking-tight dark:text-white">EMS DZ</span>
</div>
<div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<i className="w-6 h-6 dark:text-white" data-lucide="mail"></i>
<span className="text-sm font-semibold tracking-tight dark:text-white">Algérie Poste</span>
</div>
<div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<i className="w-6 h-6 dark:text-white" data-lucide="shopping-bag"></i>
<span className="text-sm font-semibold tracking-tight dark:text-white">AliExpress</span>
</div>
<div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<i className="w-6 h-6 dark:text-white" data-lucide="truck"></i>
<span className="text-sm font-semibold tracking-tight dark:text-white">DHL Express</span>
</div>
<div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<i className="w-6 h-6 dark:text-white" data-lucide="box"></i>
<span className="text-sm font-semibold tracking-tight dark:text-white">FedEx</span>
</div>
<div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<i className="w-6 h-6 dark:text-white" data-lucide="container"></i>
<span className="text-sm font-semibold tracking-tight dark:text-white">Yalidine</span>
</div>
</div>

<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<i className="w-6 h-6 dark:text-white" data-lucide="plane"></i>
<span className="text-sm font-semibold tracking-tight dark:text-white">EMS DZ</span>
</div>
<div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<i className="w-6 h-6 dark:text-white" data-lucide="mail"></i>
<span className="text-sm font-semibold tracking-tight dark:text-white">Algérie Poste</span>
</div>
<div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<i className="w-6 h-6 dark:text-white" data-lucide="shopping-bag"></i>
<span className="text-sm font-semibold tracking-tight dark:text-white">AliExpress</span>
</div>
<div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<i className="w-6 h-6 dark:text-white" data-lucide="truck"></i>
<span className="text-sm font-semibold tracking-tight dark:text-white">DHL Express</span>
</div>
<div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<i className="w-6 h-6 dark:text-white" data-lucide="box"></i>
<span className="text-sm font-semibold tracking-tight dark:text-white">FedEx</span>
</div>
<div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 transition-all duration-300">
<i className="w-6 h-6 dark:text-white" data-lucide="container"></i>
<span className="text-sm font-semibold tracking-tight dark:text-white">Yalidine</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="app">
<div className="max-w-5xl mx-auto">
<div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden border border-neutral-200 dark:border-white/10">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">

<div className="flex-1 text-left">
<div className="inline-block mb-4">
<span className="text-[10px] font-mono uppercase tracking-widest text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 px-2 py-1 rounded bg-indigo-50 dark:bg-indigo-500/10">Mobile Application</span>
</div>
<h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 dark:text-white tracking-tight mb-4">
                            Take tracking <br/>
<span className="font-serif italic text-neutral-500 dark:text-neutral-400">offline.</span>
</h2>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-8 max-w-sm">
                            Download "Track it" for push notifications, barcode scanning, and offline history access. 
                        </p>
<div className="flex flex-wrap gap-3">
<button className="group relative px-5 py-2.5 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-lg text-xs font-medium hover:opacity-90 transition-all overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="apple"></i> App Store
                                </span>
</button>
<button className="px-5 py-2.5 bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white rounded-lg text-xs font-medium hover:bg-neutral-200 dark:hover:bg-white/10 transition-colors flex items-center gap-2">
<i className="w-4 h-4 fill-current" data-lucide="play"></i> Play Store
                            </button>
</div>
</div>

<div className="flex-1 flex justify-center md:justify-end">
<div className="relative w-[260px] h-[500px] bg-white dark:bg-[#0F0F11] border-[6px] border-neutral-200 dark:border-[#1A1A1C] rounded-[3rem] shadow-2xl overflow-hidden flex flex-col animate-float">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-24 bg-neutral-200 dark:bg-[#1A1A1C] rounded-b-xl z-20"></div>

<div className="pt-10 px-6 pb-4 flex justify-between items-center border-b border-neutral-100 dark:border-white/5">
<div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center">
<i className="w-3 h-3 text-neutral-500" data-lucide="menu"></i>
</div>
<span className="text-xs font-semibold dark:text-white">Track it</span>
<div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-white/10 flex items-center justify-center">
<i className="w-3 h-3 text-neutral-500" data-lucide="bell"></i>
</div>
</div>

<div className="p-4 space-y-3">

<div className="p-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
<i className="w-4 h-4" data-lucide="box"></i>
</div>
<div>
<div className="text-[10px] font-bold dark:text-white">PlayStation 5</div>
<div className="text-[8px] text-neutral-400">DZ88492019AA</div>
</div>
</div>
<span className="text-[8px] font-mono text-emerald-500 bg-emerald-500/10 px-1.5 py-0.5 rounded">In Transit</span>
</div>
<div className="w-full h-1 bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
<div className="w-3/4 h-full bg-emerald-500 rounded-full"></div>
</div>
</div>

<div className="p-3 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 opacity-60">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
<i className="w-4 h-4" data-lucide="shirt"></i>
</div>
<div>
<div className="text-[10px] font-bold dark:text-white">Zara Haul</div>
<div className="text-[8px] text-neutral-400">FR11029388</div>
</div>
</div>
<span className="text-[8px] font-mono text-neutral-500">Delivered</span>
</div>
<div className="w-full h-1 bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
<div className="w-full h-full bg-indigo-500 rounded-full"></div>
</div>
</div>
</div>

<div className="mt-auto p-4 border-t border-neutral-100 dark:border-white/5 flex justify-around text-neutral-400">
<i className="w-4 h-4 text-neutral-900 dark:text-white" data-lucide="home"></i>
<i className="w-4 h-4" data-lucide="search"></i>
<i className="w-4 h-4" data-lucide="user"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 text-center">
<div className="max-w-xl mx-auto px-6">
<div className="p-6 rounded-2xl border border-dashed border-neutral-300 dark:border-white/10 bg-transparent">
<div className="flex flex-col items-center gap-2">
<i className="w-6 h-6 text-neutral-400" data-lucide="server-off"></i>
<h3 className="text-sm font-semibold text-neutral-900 dark:text-white">No Public API Available</h3>
<p className="text-xs text-neutral-500 dark:text-neutral-400 leading-normal">
                        TrackDz is exclusively a consumer tracking interface. We do not offer developer access, webhooks, or commercial API endpoints at this time.
                    </p>
</div>
</div>
</div>
</section>

<footer className="border-t border-neutral-200 dark:border-white/5 bg-white dark:bg-[#050505] pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-4 h-4 bg-neutral-900 dark:bg-white rounded-[4px] flex items-center justify-center text-white dark:text-black">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-sm font-semibold text-neutral-900 dark:text-white">TrackDz</span>
</div>
<p className="text-xs text-neutral-500 dark:text-neutral-400 max-w-[200px]">
                        Simplified logistics tracking for the modern Algerian market.
                    </p>
</div>
<div className="flex gap-12">
<div className="flex flex-col gap-3">
<span className="text-xs font-medium text-neutral-900 dark:text-white">Platform</span>
<a className="text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white transition-colors" href="#">Carriers</a>
<a className="text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white transition-colors" href="#">Mobile App</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-medium text-neutral-900 dark:text-white">Legal</span>
<a className="text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-neutral-500 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-200 dark:border-white/5 gap-4">
<span className="text-[10px] text-neutral-400 uppercase tracking-wider">© 2024 TrackDz. All rights reserved.</span>
<div className="flex gap-4">
<i className="w-4 h-4 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer" data-lucide="twitter"></i>
<i className="w-4 h-4 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer" data-lucide="github"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
