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
theme: {
extend: {
colors: {
'canvas': '#FFFFFF',
'obsidian': '#0a0a0a',
'stone-gray': '#57534e',
'slate-dark': '#1c1917',
'sun-gold': '#ea580c',
'sun-light': '#fff7ed',
'warm-glow': '#fff1f2',
'ocean-bright': '#f97316',
'bronze': '#92400e',
'deep-orange': '#c2410c',
},
fontFamily: {
sans: ['Roboto', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
wide: '0.02em',
},
boxShadow: {
'subtle': '0 1px 2px rgba(0,0,0,0.03)',
'float': '0 20px 40px -10px rgba(124, 45, 18, 0.1)',
'sun-glow': '0 0 50px -10px rgba(255, 100, 0, 0.5)',
'gold-aura': '0 4px 15px -3px rgba(234, 88, 12, 0.2), inset 0 0 0 1px rgba(255, 255, 255, 0.6)',
'neon': '0 0 20px rgba(194, 65, 12, 0.6)',
},
animation: {
'shimmer': 'shimmer 8s ease-in-out infinite',
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
shimmer: {
'0%, 100%': { opacity: 0.8 },
'50%': { opacity: 1 },
}
},
}
}
}



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            
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
      

<div className="fixed inset-0 w-full h-full z-0 overflow-hidden pointer-events-none bg-orange-50/50">
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10 opacity-70" data-us-project="ty3N7ZPaIU7KlWixQFIc"></div>

</div>
<div className="absolute inset-0 opacity-[0.03] z-30 pointer-events-none mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<header className="fixed top-0 w-full z-50 h-20 transition-all duration-300 border-b border-orange-200/50 bg-white/80 backdrop-blur-xl shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<div className="flex items-center gap-10">

<a className="font-sans text-2xl font-bold tracking-tighter text-obsidian flex items-center gap-2 hover:opacity-80 transition-opacity" href="#">
                    Agápē
                </a>

<nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-orange-700 transition-colors" href="#space">The Space</a>
<a className="hover:text-orange-700 transition-colors" href="#schedule">Schedule</a>
<a className="hover:text-orange-700 transition-colors" href="#practices">Practices</a>
<a className="hover:text-orange-700 transition-colors" href="#masters">Masters</a>
</nav>
</div>
<div className="flex items-center gap-6">

<div className="hidden md:flex items-center bg-slate-50/80 rounded-full px-4 py-2 border border-slate-200 focus-within:bg-white focus-within:border-orange-300 transition-colors w-56 h-10">
<iconify-icon className="text-slate-400 mr-2 text-lg" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-xs w-full placeholder-slate-400 text-slate-800 font-sans" placeholder="Search intentions…" type="text"/>
</div>
<a className="hidden md:block text-xs font-medium hover:text-orange-700 text-slate-800 transition-colors uppercase tracking-wider" href="#">Log in</a>

<a className="bg-gradient-to-r from-orange-600 to-red-700 text-white px-6 h-10 rounded-full text-xs font-bold tracking-wide hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 flex justify-center items-center gap-2" href="#">
                    Join Live <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></div>
</a>
<button className="lg:hidden text-2xl flex items-center text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="relative z-10">

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-visible min-h-screen flex items-center">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 w-full relative z-10">

<div className="lg:col-span-7 flex flex-col lg:pr-12 pr-0 relative justify-center">
<h1 className="text-5xl lg:text-7xl font-bold tracking-tighter leading-[0.95] mb-8 text-obsidian drop-shadow-sm font-sans">
                        Love is the<br/>force that<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-700 font-black italic">unites.</span>
</h1>
<p className="text-lg text-slate-700 mb-10 font-normal leading-relaxed max-w-lg backdrop-blur-xl bg-white/40 p-6 rounded-xl inline-block font-sans border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
                        A 24/7 live sanctuary. Shape your inner state and refine your focus through guided presence.
                    </p>
<div className="flex flex-wrap gap-4 mb-14">

<button className="bg-gradient-to-r from-orange-700 to-red-700 text-white px-9 py-4 rounded-full text-sm font-bold hover:shadow-neon transition-all shadow-xl flex items-center gap-2 border border-white/10 transform hover:-translate-y-1">
                            Start Practice <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-white/40 border border-white/60 text-slate-900 px-9 py-4 rounded-full text-sm font-semibold hover:bg-white transition-all shadow-sm backdrop-blur-md">
                            Explore Schedule
                        </button>
</div>

<div className="mt-2 w-full max-w-xl">
<h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-5 pl-1 opacity-80 mix-blend-multiply">Choose your intention</h3>
<div className="flex flex-col gap-3">

<label className="checkbox-wrapper cursor-pointer group w-full">
<input className="hidden-checkbox" type="checkbox"/>
<div className="intention-card flex items-center justify-between p-3.5 rounded-xl">
<div className="flex items-center gap-4">
<div className="icon-container w-10 h-10 rounded-full bg-white text-orange-600 flex items-center justify-center transition-colors duration-300 shadow-sm border border-orange-100/50">
<iconify-icon className="text-xl" icon="solar:mind-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-900 font-semibold tracking-wide">Build calm focus and clarity</span>
</div>
<div className="status-icon w-6 h-6 rounded-full flex items-center justify-center opacity-0 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
</label>

<label className="checkbox-wrapper cursor-pointer group w-full">
<input className="hidden-checkbox" type="checkbox"/>
<div className="intention-card flex items-center justify-between p-3.5 rounded-xl">
<div className="flex items-center gap-4">
<div className="icon-container w-10 h-10 rounded-full bg-white text-orange-600 flex items-center justify-center transition-colors duration-300 shadow-sm border border-orange-100/50">
<iconify-icon className="text-xl" icon="solar:sun-2-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-900 font-semibold tracking-wide">Morning alignment and intention setting</span>
</div>
<div className="status-icon w-6 h-6 rounded-full flex items-center justify-center opacity-0 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
</label>

<label className="checkbox-wrapper cursor-pointer group w-full">
<input className="hidden-checkbox" type="checkbox"/>
<div className="intention-card flex items-center justify-between p-3.5 rounded-xl">
<div className="flex items-center gap-4">
<div className="icon-container w-10 h-10 rounded-full bg-white text-orange-600 flex items-center justify-center transition-colors duration-300 shadow-sm border border-orange-100/50">
<iconify-icon className="text-xl" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-900 font-semibold tracking-wide">Productivity and deep focus</span>
</div>
<div className="status-icon w-6 h-6 rounded-full flex items-center justify-center opacity-0 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
</div>
</label>
</div>
</div>
</div>

<div className="hidden lg:block lg:col-span-5 relative h-full">
<div className="sticky top-32 h-[80vh] fade-mask overflow-hidden flex justify-end">
<div className="w-full max-w-[420px] h-full relative">
<div className="flex flex-col gap-6 animate-scroll-slow pause-on-hover pb-10 pt-4">

<div className="bg-white rounded-[2rem] shadow-float border border-white/60 hover:border-orange-400 transition-all duration-500 group cursor-pointer relative overflow-hidden">
<div className="aspect-[4/3] w-full relative overflow-hidden">
<div className="absolute top-4 left-4 z-20 flex gap-2">
<div className="bg-red-700 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
                                                Live
                                            </div>
</div>
<img alt="Meditation Teacher" className="group-hover:scale-105 transition-transform duration-1000 ease-out w-full h-full object-cover" src="https://res.cloudinary.com/dgcc9xqvi/image/upload/v1769154676/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2026-01-23_%D0%B2_2.43.46_PM_n9wbf0.png"/>
</div>
<div className="p-6 relative -mt-12 z-10">
<div className="bg-white/95 backdrop-blur-xl p-5 rounded-2xl border border-white/50 shadow-sm">
<h4 className="font-sans text-xl font-medium text-slate-900 mb-1">Morning Presence</h4>
<p className="text-xs font-bold text-orange-700 mb-3 uppercase tracking-wide">Meditation • 20 min</p>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] shadow-float border border-white/60 hover:border-orange-400 transition-all duration-500 group cursor-pointer relative overflow-hidden">
<div className="aspect-[4/3] w-full relative overflow-hidden">
<div className="absolute top-4 left-4 z-20">
<div className="bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-sm">Starts in 15m</div>
</div>
<img alt="Sound Bowls" className="group-hover:scale-105 transition-transform duration-1000 ease-out w-full h-full object-cover" src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 relative -mt-12 z-10">
<div className="bg-white/95 backdrop-blur-xl p-5 rounded-2xl border border-white/50 shadow-sm">
<h4 className="font-sans text-xl font-medium text-slate-900 mb-1">Crystal Sound Bath</h4>
<p className="text-xs font-bold text-orange-700 mb-3 uppercase tracking-wide">Healing • 45 min</p>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] shadow-float border border-white/60 hover:border-orange-400 transition-all duration-500 group cursor-pointer relative overflow-hidden">
<div className="aspect-[4/3] w-full relative overflow-hidden">
<div className="absolute top-4 left-4 z-20">
<div className="bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-sm">Today 18:00</div>
</div>
<img alt="Spiritual Yoga" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6 relative -mt-12 z-10">
<div className="bg-white/95 backdrop-blur-xl p-5 rounded-2xl border border-white/50 shadow-sm">
<h4 className="font-sans text-xl font-medium text-slate-900 mb-1">Spiritual Alignment</h4>
<p className="text-xs font-bold text-orange-700 mb-3 uppercase tracking-wide">Movement • 30 min</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 overflow-hidden z-10 bg-transparent pt-24 pb-24 relative" id="space">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl lg:text-5xl font-bold tracking-tighter mb-8 text-obsidian font-sans">The Space</h2>
<div className="text-xl text-slate-800 leading-relaxed font-light backdrop-blur-xl bg-white/40 p-8 rounded-2xl font-sans border border-white/30 shadow-sm">
                        Designed for modern life. Join short, guided sessions led by masters in meditation, psychology, and breathwork.
                    </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<div className="p-10 rounded-3xl sun-card-bg group relative overflow-hidden transition-all duration-300 hover:shadow-gold-aura">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-100/50 rounded-full blur-3xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col h-full relative z-10">
<div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-orange-100/50">
<iconify-icon icon="solar:videocamera-record-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900 tracking-tight">LIVE STREAMS</h3>
<div className="mb-4">
<p className="text-slate-800 font-medium text-base mb-1">Live practice, right now.</p>
<p className="text-slate-600 text-base leading-relaxed">
                                    Join sessions happening now or starting soon — guided in real time.
                                </p>
</div>
<div className="mt-auto pt-4 border-t border-slate-200/50 flex items-center gap-2 text-orange-700 text-xs font-bold uppercase tracking-widest justify-between">
<span>ALWAYS ON · 24/7</span>
<span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">Join live <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>

<div className="p-10 rounded-3xl sun-card-bg group relative overflow-hidden transition-all duration-300 hover:shadow-gold-aura">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-100/50 rounded-full blur-3xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col h-full relative z-10">
<div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-orange-100/50">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900 tracking-tight">AI COMPANION</h3>
<div className="mb-4">
<p className="text-slate-800 font-medium text-base mb-1">Private guidance, anytime.</p>
<p className="text-slate-600 text-base leading-relaxed">
                                    Talk it through, set an intention, and get matched to the right practice.
                                </p>
</div>
<div className="mt-auto pt-4 border-t border-slate-200/50 flex items-center gap-2 text-orange-700 text-xs font-bold uppercase tracking-widest justify-between">
<span>PRIVATE · ON DEMAND</span>
<span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">Start conversation <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>

<div className="p-10 rounded-3xl sun-card-bg group relative overflow-hidden transition-all duration-300 hover:shadow-gold-aura">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-100/50 rounded-full blur-3xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col h-full relative z-10">
<div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-orange-100/50">
<iconify-icon icon="solar:heart-angle-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900 tracking-tight">AGÁPĒ PRACTICES</h3>
<div className="mb-4">
<p className="text-slate-800 font-medium text-base mb-1">Curated by Agápē.</p>
<p className="text-slate-600 text-base leading-relaxed">
                                    Agápē-approved sessions across meditation, focus, balance, gratitude, and heart work.
                                </p>
</div>
<div className="mt-auto pt-4 border-t border-slate-200/50 flex items-center gap-2 text-orange-700 text-xs font-bold uppercase tracking-widest justify-between">
<span>CURATED · AGÁPĒ APPROVED</span>
<span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">Explore practices <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>

<div className="p-10 rounded-3xl sun-card-bg group relative overflow-hidden transition-all duration-300 hover:shadow-gold-aura">
<div className="absolute top-0 right-0 w-40 h-40 bg-orange-100/50 rounded-full blur-3xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex flex-col h-full relative z-10">
<div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center text-3xl mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 border border-orange-100/50">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3 text-slate-900 tracking-tight">COMMUNITIES</h3>
<div className="mb-4">
<p className="text-slate-800 font-medium text-base mb-1">Grow with your people.</p>
<p className="text-slate-600 text-base leading-relaxed">
                                    Join intention-based groups to stay connected and consistent between sessions.
                                </p>
</div>
<div className="mt-auto pt-4 border-t border-slate-200/50 flex items-center gap-2 text-orange-700 text-xs font-bold uppercase tracking-widest justify-between">
<span>COMMUNITY · MEMBER-LED</span>
<span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">Discover communities <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl z-10 mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 relative">
<div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl group border border-white/40 aspect-video md:aspect-[21/9]">

<img alt="Agápē Introduction" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500"></div>

<div className="flex cursor-pointer absolute top-0 right-0 bottom-0 left-0 items-center justify-center" onclick="window.location.href='https://agape-tech.atlassian.net?continue=https%3A%2F%2Fagape-tech.atlassian.net%2Fwelcome%2Fsoftware&amp;atlOrigin=eyJpIjoiZDk1NWQzNWNkOWFhNDk5YWJkNDg4MmE1N2Q0NGE4MjIiLCJwIjoiaiJ9';window.location.href='https://agape-tech.atlassian.net?continue=https%3A%2F%2Fagape-tech.atlassian.net%2Fwelcome%2Fsoftware&amp;atlOrigin=eyJpIjoiZDk1NWQzNWNkOWFhNDk5YWJkNDg4MmE1N2Q0NGE4MjIiLCJwIjoiaiJ9'" role="button">
<img alt="Calm nature landscape" className="absolute inset-0 w-full h-full object-cover -z-10" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-black/10 -z-10"></div>
<button className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30 relative play-pulse">
<iconify-icon className="text-4xl ml-1 relative z-10" icon="solar:play-bold"></iconify-icon>
</button>
</div>

<div className="md:p-12 bg-gradient-to-t from-black/60 to-transparent w-full pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0">
<span className="text-white/80 text-xs font-bold uppercase tracking-widest mb-2 block">Manifesto</span>
<h3 className="md:text-3xl text-2xl font-bold text-white tracking-tight" style={{}}>Welcome to Agape</h3>
</div>
</div>
</section>

<section className="z-10 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
<div>
<div className="flex items-center gap-3 mb-2">
<div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse"></div>
<h3 className="text-sm font-bold uppercase tracking-widest text-slate-500">Up Next</h3>
</div>
<h2 className="text-3xl font-bold tracking-tighter text-slate-900 font-sans">Starting Soon</h2>
</div>
<a className="hidden md:flex items-center gap-2 text-sm font-bold text-slate-600 hover:text-orange-700 transition-colors group" href="#schedule">
      View all live streams <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 -mx-6 px-6 md:mx-0 md:px-0 scrollbar-hide snap-x md:snap-none">

<div className="snap-start shrink-0 min-w-[300px] md:min-w-0 w-[300px] md:w-full rounded-3xl sun-card-bg overflow-hidden group cursor-pointer hover:shadow-gold-aura transition-all duration-300 relative flex flex-col">
<div className="relative h-44 overflow-hidden">
<div className="absolute top-4 left-4 z-20">
<span className="bg-white/95 backdrop-blur-sm text-orange-700 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-sm flex items-center gap-1.5 border border-orange-100">
<iconify-icon className="text-base" icon="solar:clock-circle-linear"></iconify-icon> Starts in 5m
                            </span>
</div>

<img alt="Lake Breathwork" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<p className="text-[10px] font-bold uppercase tracking-wider opacity-90 mb-1">Energy</p>
<h4 className="text-lg font-bold leading-tight">Breathwork for Energy</h4>
</div>
</div>
<div className="p-5 flex flex-col gap-4 grow">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Instructor" className="w-8 h-8 rounded-full border border-white shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<span className="text-xs font-semibold text-slate-700">Elena M.</span>
</div>
<div className="flex items-center gap-1 text-slate-400 text-xs">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 84
          </div>
</div>
<div className="space-y-1.5">
<div className="flex justify-between text-[10px] font-bold uppercase text-slate-400 tracking-wider">
<span>Room Filling</span>
<span className="text-orange-600">High Demand</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-gradient-to-r from-orange-400 to-red-500 w-[85%] h-full rounded-full"></div>
</div>
</div>
<button className="w-full mt-auto py-2.5 rounded-xl border border-orange-200 text-orange-700 bg-orange-50 font-bold text-xs hover:bg-orange-100 transition-colors flex items-center justify-center gap-2">
                            Join Waiting Room <iconify-icon className="text-sm" icon="solar:login-2-linear"></iconify-icon>
</button>
</div>
</div>

<div className="snap-start shrink-0 min-w-[300px] md:min-w-0 w-[300px] md:w-full rounded-3xl sun-card-bg overflow-hidden group cursor-pointer hover:shadow-gold-aura transition-all duration-300 relative flex flex-col">
<div className="relative h-44 overflow-hidden">
<div className="absolute top-4 left-4 z-20">
<span className="bg-white/95 backdrop-blur-sm text-slate-700 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-sm flex items-center gap-1.5 border border-slate-100">
<iconify-icon className="text-base" icon="solar:clock-circle-linear"></iconify-icon> Starts in 25m
                            </span>
</div>

<img alt="Sydney Focus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<p className="text-[10px] font-bold uppercase tracking-wider opacity-90 mb-1">Productivity</p>
<h4 className="text-lg font-bold leading-tight">Deep Focus Flow</h4>
</div>
</div>
<div className="p-5 flex flex-col gap-4 grow">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Instructor" className="w-8 h-8 rounded-full border border-white shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<span className="text-xs font-semibold text-slate-700">Marcus Chen</span>
</div>
<div className="flex items-center gap-1 text-slate-400 text-xs">
<iconify-icon className="" icon="solar:users-group-rounded-linear"></iconify-icon> 212
          </div>
</div>
<div className="space-y-1.5">
<div className="flex justify-between text-[10px] font-bold uppercase text-slate-400 tracking-wider">
<span>Availability</span>
<span className="text-slate-500">Open</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-slate-300 w-[45%] h-full rounded-full"></div>
</div>
</div>
<button className="w-full mt-auto py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white font-bold text-xs hover:bg-slate-50 hover:text-orange-700 hover:border-orange-200 transition-colors flex items-center justify-center gap-2">
                            Notify Me <iconify-icon className="text-sm" icon="solar:bell-linear"></iconify-icon>
</button>
</div>
</div>

<div className="snap-start shrink-0 min-w-[300px] md:min-w-0 w-[300px] md:w-full rounded-3xl sun-card-bg overflow-hidden group cursor-pointer hover:shadow-gold-aura transition-all duration-300 relative flex flex-col">
<div className="relative h-44 overflow-hidden">
<div className="absolute top-4 left-4 z-20">
<span className="bg-white/95 backdrop-blur-sm text-slate-700 text-[10px] font-bold uppercase tracking-wider py-1.5 px-3 rounded-full shadow-sm flex items-center gap-1.5 border border-slate-100">
<iconify-icon className="text-base" icon="solar:clock-circle-linear"></iconify-icon> Starts in 40m
                            </span>
</div>

<img alt="Mountain Kindness" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-4 left-4 right-4 text-white">
<p className="text-[10px] font-bold uppercase tracking-wider opacity-90 mb-1">Compassion</p>
<h4 className="text-lg font-bold leading-tight">Loving Kindness</h4>
</div>
</div>
<div className="p-5 flex flex-col gap-4 grow">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Instructor" className="w-8 h-8 rounded-full border border-white shadow-sm" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<span className="text-xs font-semibold text-slate-700">Amara</span>
</div>
<div className="flex items-center gap-1 text-slate-400 text-xs">
<iconify-icon icon="solar:users-group-rounded-linear"></iconify-icon> 56
          </div>
</div>
<div className="space-y-1.5">
<div className="flex justify-between text-[10px] font-bold uppercase text-slate-400 tracking-wider">
<span>Availability</span>
<span className="text-slate-500">Plenty</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
<div className="bg-slate-300 w-[15%] h-full rounded-full"></div>
</div>
</div>
<button className="w-full mt-auto py-2.5 rounded-xl border border-slate-200 text-slate-700 bg-white font-bold text-xs hover:bg-slate-50 hover:text-orange-700 hover:border-orange-200 transition-colors flex items-center justify-center gap-2">
                            Notify Me <iconify-icon className="text-sm" icon="solar:bell-linear"></iconify-icon>
</button>
</div>
</div>

<a className="snap-start shrink-0 w-[150px] md:hidden rounded-3xl bg-slate-100 border border-slate-200 flex flex-col items-center justify-center gap-3 text-slate-600 hover:bg-white hover:text-orange-700 transition-colors" href="#schedule">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
<span className="text-xs font-bold uppercase tracking-wider">View All</span>
</a>
</div>
<div className="mt-4 md:hidden">
<a className="w-full py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-bold text-xs flex items-center justify-center gap-2" href="#schedule">
      View Full Schedule <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-12 lg:py-20 max-w-7xl mx-auto px-6 relative z-10 bg-transparent" id="schedule">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 pb-8 border-t border-slate-200/50 pt-10">
<div>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tighter mb-2 text-obsidian font-sans">Daily Rhythm</h2>
<p className="text-slate-900 text-lg font-light bg-white/40 backdrop-blur-md p-2 rounded-lg inline-block border border-white/20">A continuous flow of practice from sunrise to sleep.</p>
</div>
<div className="flex gap-3">
<button className="px-6 py-2.5 rounded-full border border-white/40 bg-white/40 text-xs font-bold hover:bg-white hover:text-orange-700 transition-colors text-slate-800 backdrop-blur-md">Your Timezone: UTC+0</button>
<button className="px-6 py-2.5 rounded-full bg-obsidian text-white text-xs font-bold hover:bg-orange-700 hover:shadow-sun-glow transition-all duration-300 shadow-subtle border border-transparent hover:border-white/50">Full Calendar</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

<div className="lg:col-span-4 relative">
<div className="sticky top-24 space-y-6">

<div className="p-6 rounded-2xl relative overflow-hidden bg-gradient-vibrant text-white shadow-sun-glow transform transition-all hover:scale-[1.02] border border-white/10">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl -ml-16 -mb-16 pointer-events-none"></div>
<div className="relative z-10">
<div className="flex items-center justify-between mb-6">
<span className="flex items-center gap-2 text-white text-[10px] font-bold uppercase tracking-widest bg-white/20 px-2 py-1 rounded">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
</span>
                                        On Air Now
                                    </span>
<span className="text-[10px] font-medium text-white/90">342 practicing</span>
</div>
<div className="space-y-6">

<div className="flex gap-4 items-center group cursor-pointer">
<img alt="Live Streamer" className="w-14 h-14 rounded-full object-cover ring-2 ring-white/50 shadow-md" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-xl font-bold leading-tight mb-1 text-white">Crystal Bowl Healing</h4>
<p className="text-xs text-white/80 font-medium">with Sarah Y. • Live from Bali</p>
</div>
</div>
<button className="w-full py-3 text-xs font-bold text-orange-700 bg-white rounded-xl hover:bg-orange-50 transition-all shadow-md mt-2 flex items-center justify-center gap-2">
                                        Join Session <iconify-icon icon="solar:login-2-bold"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50 shadow-sm">
<h4 className="text-xs font-bold uppercase text-slate-500 mb-3 tracking-wider">Next Up</h4>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
<iconify-icon className="text-xl" icon="solar:meditation-round-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Nervous System Reset</p>
<p className="text-xs text-slate-600">Starting in 14 min</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 timeline-line relative pl-6 space-y-12">

<div>
<div className="flex items-center gap-4 mb-6 relative">
<div className="w-3 h-3 rounded-full bg-orange-400 absolute -left-[30px] border-2 border-orange-50 outline outline-4 outline-orange-100/50"></div>
<h3 className="text-2xl font-light text-slate-400 tracking-tight font-sans">Morning</h3>
</div>
<div className="space-y-4">

<div className="group flex flex-col md:flex-row md:items-center justify-between p-5 px-6 rounded-2xl sun-card-bg cursor-pointer hover:border-orange-300 transition-all duration-300">
<div className="flex items-center gap-6 md:gap-8">
<span className="text-sm font-mono text-orange-700 font-bold bg-orange-50 px-2 py-1 rounded border border-orange-100">07:00</span>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-base font-bold text-slate-900 group-hover:text-orange-700 transition-colors">Morning Awakening Flow</h4>
<p className="text-xs text-slate-500 mt-1 font-medium">Movement • 30 min • with Ana S.</p>
</div>
</div>
</div>
<button className="mt-4 md:mt-0 text-xs font-bold border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-900 hover:text-white transition-all">Notify</button>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between p-5 px-6 rounded-2xl sun-card-bg cursor-pointer hover:border-orange-300 transition-all duration-300">
<div className="flex items-center gap-6 md:gap-8">
<span className="text-sm font-mono text-slate-500 font-bold bg-white/50 px-2 py-1 rounded border border-slate-100">08:30</span>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-bold text-slate-900 group-hover:text-orange-700 transition-colors">Intention Journaling</h4>
<p className="text-xs text-slate-500 mt-1 font-medium">Reflection • 15 min • AI Guided</p>
</div>
</div>
</div>
<button className="mt-4 md:mt-0 text-xs font-bold border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-900 hover:text-white transition-all">Notify</button>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between p-5 px-6 rounded-2xl sun-card-bg cursor-pointer hover:border-orange-300 transition-all duration-300">
<div className="flex items-center gap-6 md:gap-8">
<span className="text-sm font-mono text-slate-500 font-bold bg-white/50 px-2 py-1 rounded border border-slate-100">10:00</span>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-base font-bold text-slate-900 group-hover:text-orange-700 transition-colors">Deep Work &amp; Focus</h4>
<p className="text-xs text-slate-500 mt-1 font-medium">Productivity • 60 min • with Dr. Cole</p>
</div>
</div>
</div>
<button className="mt-4 md:mt-0 text-xs font-bold border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-900 hover:text-white transition-all">Notify</button>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-6 relative">
<div className="w-3 h-3 rounded-full bg-yellow-400 absolute -left-[30px] border-2 border-orange-50 outline outline-4 outline-orange-100/50"></div>
<h3 className="text-2xl font-light text-slate-400 tracking-tight font-sans">Afternoon</h3>
</div>
<div className="space-y-4">

<div className="group flex flex-col md:flex-row md:items-center justify-between p-5 px-6 rounded-2xl sun-card-bg cursor-pointer hover:border-orange-300 transition-all duration-300">
<div className="flex items-center gap-6 md:gap-8">
<span className="text-sm font-mono text-slate-500 font-bold bg-white/50 px-2 py-1 rounded border border-slate-100">13:00</span>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<h4 className="text-base font-bold text-slate-900 group-hover:text-orange-700 transition-colors">Midday Breath Reset</h4>
<p className="text-xs text-slate-500 mt-1 font-medium">Breathwork • 15 min • with Marcus</p>
</div>
</div>
</div>
<button className="mt-4 md:mt-0 text-xs font-bold border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-900 hover:text-white transition-all">Notify</button>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between p-5 px-6 rounded-2xl sun-card-bg cursor-pointer hover:border-orange-300 transition-all duration-300">
<div className="flex items-center gap-6 md:gap-8">
<span className="text-sm font-mono text-slate-500 font-bold bg-white/50 px-2 py-1 rounded border border-slate-100">15:30</span>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:lightbulb-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-bold text-slate-900 group-hover:text-orange-700 transition-colors">Creative Visualization</h4>
<p className="text-xs text-slate-500 mt-1 font-medium">Mindset • 20 min • Community Led</p>
</div>
</div>
</div>
<button className="mt-4 md:mt-0 text-xs font-bold border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-900 hover:text-white transition-all">Notify</button>
</div>
</div>
</div>

<div>
<div className="flex items-center gap-4 mb-6 relative">
<div className="w-3 h-3 rounded-full bg-slate-600 absolute -left-[30px] border-2 border-orange-50 outline outline-4 outline-orange-100/50"></div>
<h3 className="text-2xl font-light text-slate-400 tracking-tight font-sans">Evening</h3>
</div>
<div className="space-y-4">

<div className="group flex flex-col md:flex-row md:items-center justify-between p-5 px-6 rounded-2xl sun-card-bg cursor-pointer hover:border-orange-300 transition-all duration-300">
<div className="flex items-center gap-6 md:gap-8">
<span className="text-sm font-mono text-slate-500 font-bold bg-white/50 px-2 py-1 rounded border border-slate-100">18:00</span>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-base font-bold text-slate-900 group-hover:text-orange-700 transition-colors">Sunset Gratitude Circle</h4>
<p className="text-xs text-slate-500 mt-1 font-medium">Community • 45 min • with Leila</p>
</div>
</div>
</div>
<button className="mt-4 md:mt-0 text-xs font-bold border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-900 hover:text-white transition-all">Notify</button>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between p-5 px-6 rounded-2xl sun-card-bg cursor-pointer hover:border-orange-300 transition-all duration-300">
<div className="flex items-center gap-6 md:gap-8">
<span className="text-sm font-mono text-slate-500 font-bold bg-white/50 px-2 py-1 rounded border border-slate-100">20:00</span>
<div className="flex items-center gap-4">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300" src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-base font-bold text-slate-900 group-hover:text-orange-700 transition-colors">Deep Calm Meditation</h4>
<p className="text-xs text-slate-500 mt-1 font-medium">Meditation • 30 min • with Sagesse</p>
</div>
</div>
</div>
<button className="mt-4 md:mt-0 text-xs font-bold border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-900 hover:text-white transition-all">Notify</button>
</div>

<div className="group flex flex-col md:flex-row md:items-center justify-between p-5 px-6 rounded-2xl sun-card-bg cursor-pointer hover:border-orange-300 transition-all duration-300 opacity-80 hover:opacity-100">
<div className="flex items-center gap-6 md:gap-8">
<span className="text-sm font-mono text-slate-500 font-bold bg-white/50 px-2 py-1 rounded border border-slate-100">22:00</span>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
<iconify-icon icon="solar:moon-stars-linear"></iconify-icon>
</div>
<div>
<h4 className="text-base font-bold text-slate-900 group-hover:text-orange-700 transition-colors">Yoga Nidra for Sleep</h4>
<p className="text-xs text-slate-500 mt-1 font-medium">Rest • 40 min • Audio Only</p>
</div>
</div>
</div>
<button className="mt-4 md:mt-0 text-xs font-bold border border-slate-200 px-4 py-2 rounded-full hover:bg-slate-900 hover:text-white transition-all">Notify</button>
</div>
</div>
</div>

<div className="text-center pt-8">
<button className="text-slate-400 hover:text-orange-700 text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 mx-auto">
                            Load Tomorrow's Schedule <iconify-icon className="text-sm" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-20 bg-transparent relative z-20" id="practices">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tighter mb-3 text-obsidian font-sans">Practices</h2>
<p className="text-slate-900 text-lg font-light bg-white/40 backdrop-blur-md p-2 rounded-lg inline-block border border-white/20">
                            Choose what you need — focus, peace, love, or inner strength.
                        </p>
</div>

<div className="flex overflow-x-auto gap-2 pb-2 scrollbar-hide">
<button className="px-5 py-2.5 rounded-full bg-slate-900 text-white text-xs font-bold whitespace-nowrap shadow-lg flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> All Practices
                        </button>
<button className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:border-orange-400 hover:text-orange-600 transition-colors whitespace-nowrap">
                            Meditation
                        </button>
<button className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:border-orange-400 hover:text-orange-600 transition-colors whitespace-nowrap">
                            Breathwork
                        </button>
<button className="px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold hover:border-orange-400 hover:text-orange-600 transition-colors whitespace-nowrap">
                            Movement
                        </button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="group relative p-8 rounded-2xl sun-card-bg overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-white/0 via-orange-100/20 to-orange-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center justify-between mb-6 relative z-10">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shadow-sm border border-orange-100 group-hover:scale-110 transition-transform duration-300 group-hover:bg-orange-600 group-hover:text-white">
<iconify-icon className="text-xl" icon="solar:meditation-round-linear"></iconify-icon>
</div>
<span className="text-[10px] font-bold tracking-widest uppercase text-orange-800 bg-orange-100/50 px-2 py-1 rounded-md">Meditative</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10 font-sans tracking-tight">Meditative Practices</h3>
<p className="text-sm text-slate-700 mb-6 leading-relaxed relative z-10">Presence, silence, inner spaciousness to ground your energy.</p>
<div className="flex flex-wrap gap-2 relative z-10">
<span className="text-[10px] px-2.5 py-1 rounded-full bg-white/50 border border-slate-200/50 text-slate-600 font-bold">Deep Calm</span>
<span className="text-[10px] px-2.5 py-1 rounded-full bg-white/50 border border-slate-200/50 text-slate-600 font-bold">Open Awareness</span>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-gradient-to-br from-orange-600 to-red-700 text-white overflow-hidden shadow-sun-glow transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl -mr-16 -mt-16 pointer-events-none"></div>
<div className="flex items-center justify-between mb-6 relative z-10">
<div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center shadow-inner border border-white/30 backdrop-blur-md">
<iconify-icon className="text-xl" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<span className="text-[10px] font-bold tracking-widest uppercase text-white bg-white/20 px-2 py-1 rounded-md">Trending</span>
</div>
<h3 className="text-xl font-bold text-white mb-2 relative z-10 font-sans tracking-tight">Neurofocus</h3>
<p className="text-sm text-white/80 mb-6 leading-relaxed relative z-10">Attention, habits, and mental clarity for deep work.</p>
<div className="flex flex-wrap gap-2 relative z-10">
<span className="text-[10px] px-2.5 py-1 rounded-full bg-white text-orange-700 font-bold">90-Sec Reset</span>
<span className="text-[10px] px-2.5 py-1 rounded-full bg-white/20 border border-white/30 text-white font-bold">Flow State</span>
</div>
</div>

<div className="group relative p-8 rounded-2xl sun-card-bg overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-white/0 via-orange-100/20 to-orange-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center justify-between mb-6 relative z-10">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shadow-sm border border-orange-100 group-hover:scale-110 transition-transform duration-300 group-hover:bg-orange-600 group-hover:text-white">
<iconify-icon className="text-xl" icon="solar:sun-2-linear"></iconify-icon>
</div>
<span className="text-[10px] font-bold tracking-widest uppercase text-orange-800 bg-orange-100/50 px-2 py-1 rounded-md">Design</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10 font-sans tracking-tight">State Design</h3>
<p className="text-sm text-slate-700 mb-6 leading-relaxed relative z-10">Consciously set your emotional and energetic tone.</p>
<div className="flex flex-wrap gap-2 relative z-10">
<span className="text-[10px] px-2.5 py-1 rounded-full bg-white/50 border border-slate-200/50 text-slate-600 font-bold">Morning Alignment</span>
</div>
</div>


<div className="group relative p-8 rounded-2xl sun-card-bg overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-white/0 via-orange-100/20 to-orange-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center justify-between mb-6 relative z-10">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shadow-sm border border-orange-100 group-hover:scale-110 transition-transform duration-300 group-hover:bg-orange-600 group-hover:text-white">
<iconify-icon className="text-xl" icon="solar:wind-linear"></iconify-icon>
</div>
<span className="text-[10px] font-bold tracking-widest uppercase text-orange-800 bg-orange-100/50 px-2 py-1 rounded-md">Body</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10 font-sans tracking-tight">Somatic Breathwork</h3>
<p className="text-sm text-slate-700 mb-6 leading-relaxed relative z-10">Using the breath to release tension stored in the body.</p>
<div className="flex flex-wrap gap-2 relative z-10">
<span className="text-[10px] px-2.5 py-1 rounded-full bg-white/50 border border-slate-200/50 text-slate-600 font-bold">Release</span>
<span className="text-[10px] px-2.5 py-1 rounded-full bg-white/50 border border-slate-200/50 text-slate-600 font-bold">Energy</span>
</div>
</div>

<div className="group relative p-8 rounded-2xl sun-card-bg overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-white/0 via-orange-100/20 to-orange-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center justify-between mb-6 relative z-10">
<div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center shadow-sm border border-slate-600 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-xl" icon="solar:moon-sleep-linear"></iconify-icon>
</div>
<span className="text-[10px] font-bold tracking-widest uppercase text-slate-600 bg-slate-100 px-2 py-1 rounded-md border border-slate-200">Rest</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10 font-sans tracking-tight">Sleep &amp; Non-Doing</h3>
<p className="text-sm text-slate-700 mb-6 leading-relaxed relative z-10">Practices for deep rest, sleep onset, and letting go.</p>
<div className="flex flex-wrap gap-2 relative z-10">
<span className="text-[10px] px-2.5 py-1 rounded-full bg-white/50 border border-slate-200/50 text-slate-600 font-bold">NSDR</span>
<span className="text-[10px] px-2.5 py-1 rounded-full bg-white/50 border border-slate-200/50 text-slate-600 font-bold">Yoga Nidra</span>
</div>
</div>

<div className="group relative p-8 rounded-2xl sun-card-bg overflow-hidden cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-br from-white/0 via-orange-100/20 to-orange-200/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-center justify-between mb-6 relative z-10">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center shadow-sm border border-orange-100 group-hover:scale-110 transition-transform duration-300 group-hover:bg-orange-600 group-hover:text-white">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<span className="text-[10px] font-bold tracking-widest uppercase text-orange-800 bg-orange-100/50 px-2 py-1 rounded-md">Shared</span>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-2 relative z-10 font-sans tracking-tight">Community Circles</h3>
<p className="text-sm text-slate-700 mb-6 leading-relaxed relative z-10">Shared inquiry and holding space for one another.</p>
<div className="flex flex-wrap gap-2 relative z-10">
<span className="text-[10px] px-2.5 py-1 rounded-full bg-white/50 border border-slate-200/50 text-slate-600 font-bold">Relational</span>
</div>
</div>
</div>

<div className="flex justify-center">
<button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-neon hover:-translate-y-1 transition-all duration-300 overflow-hidden">
<span className="relative z-10 flex items-center gap-2">
                            Explore Full Library <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
</button>
</div>
</div>
</section>

<section className="py-20 lg:py-28 max-w-7xl mx-auto px-6 relative z-10 bg-transparent mb-20" id="masters">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-bold tracking-tighter mb-2 text-obsidian font-sans">Masters</h2>
<p className="text-slate-800 text-lg font-light">Real humans. Real practice. Real presence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="flex flex-col group cursor-pointer">
<div className="relative overflow-hidden rounded-xl mb-5 bg-white/50 aspect-[3/4] shadow-sm ring-1 ring-white/30">
<img alt="Group Meditation in Tibet" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
</div>
<div className="flex items-baseline justify-between mb-1">
<h3 className="text-base font-bold text-obsidian">Lama Tashi</h3>
</div>
<p className="text-[10px] font-bold text-orange-700 uppercase tracking-wider mb-2">Meditation Master</p>

<button className="w-full mt-2 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-sm" icon="solar:bell-linear"></iconify-icon> Subscribe
                    </button>
</div>

<div className="flex flex-col group cursor-pointer">
<div className="relative overflow-hidden rounded-xl mb-5 bg-white/50 aspect-[3/4] shadow-sm ring-1 ring-white/30">
<img alt="Sarah Jenkins" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40"></div>
</div>
<div className="flex items-baseline justify-between mb-1">
<h3 className="text-base font-bold text-obsidian">Sarah Jenkins</h3>
</div>
<p className="text-[10px] font-bold text-orange-700 uppercase tracking-wider mb-2">Nature Immersion</p>

<button className="w-full mt-2 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-sm" icon="solar:bell-linear"></iconify-icon> Subscribe
                    </button>
</div>

<div className="flex flex-col group cursor-pointer">
<div className="relative overflow-hidden rounded-xl mb-5 bg-white/50 aspect-[3/4] shadow-sm ring-1 ring-white/30">
<img alt="Dr. Koji" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-baseline justify-between mb-1">
<h3 className="text-base font-bold text-obsidian">Dr. Koji</h3>
</div>
<p className="text-[10px] font-bold text-orange-700 uppercase tracking-wider mb-2">Mindfulness</p>

<button className="w-full mt-2 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-sm" icon="solar:bell-linear"></iconify-icon> Subscribe
                    </button>
</div>

<div className="flex flex-col group cursor-pointer">
<div className="relative overflow-hidden rounded-xl mb-5 bg-white/50 aspect-[3/4] shadow-sm ring-1 ring-white/30">
<img alt="Master Tenzin" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1609154767012-331529e7d73b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex items-baseline justify-between mb-1">
<h3 className="text-base font-bold text-obsidian">Master Tenzin</h3>
</div>
<p className="text-[10px] font-bold text-orange-700 uppercase tracking-wider mb-2">Dharma Teacher</p>

<button className="w-full mt-2 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-bold text-xs hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 transition-all flex items-center justify-center gap-2">
<iconify-icon className="text-sm" icon="solar:bell-linear"></iconify-icon> Subscribe
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-white/60 backdrop-blur-2xl text-slate-900 pt-16 pb-8 relative z-10 border-t border-orange-200/50">
<div className="max-w-7xl mx-auto px-6">

<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">

<div className="md:col-span-2 lg:col-span-2 flex flex-col items-start">
<a className="flex items-center gap-3 mb-4 group w-fit" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-600 to-red-600 text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-lg" icon="solar:infinity-bold"></iconify-icon>
</div>
<span className="text-xl font-bold tracking-tighter text-slate-900 group-hover:opacity-80 transition-opacity">Agápē</span>
</a>
<p className="text-sm text-slate-600 leading-relaxed font-normal max-w-sm">
                        A 24/7 live practice space. Shaping inner states, focusing minds, and growing real warmth toward life.
                    </p>
</div>

<div className="hidden lg:block lg:col-span-1"></div>

<div className="md:col-span-1">
<h5 className="font-bold text-slate-900 mb-4">Platform</h5>
<ul className="space-y-2 text-slate-600 text-sm">
<li><a className="hover:text-orange-700 transition-colors" href="#">Schedule</a></li>
<li><a className="hover:text-orange-700 transition-colors" href="#">Practices</a></li>
<li><a className="hover:text-orange-700 transition-colors" href="#">Masters</a></li>
<li><a className="hover:text-orange-700 transition-colors" href="#">Pricing</a></li>
</ul>
</div>

<div className="md:col-span-1">
<h5 className="font-bold text-slate-900 mb-4">Company</h5>
<ul className="space-y-2 text-slate-600 text-sm">
<li><a className="hover:text-orange-700 transition-colors" href="#">About</a></li>
<li><a className="hover:text-orange-700 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-orange-700 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-900/10 text-xs text-slate-500">
<p>© 2023 Agápē Space Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-orange-700 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-orange-700 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
