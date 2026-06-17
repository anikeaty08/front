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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
<div className="flex items-center gap-2">

<span className="text-xl md:text-2xl font-bold tracking-tight text-white">01LOT<span className="text-zinc-500">.COM</span></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">Signals</a>
<a className="hover:text-white transition-colors" href="#">Results</a>
<a className="hover:text-white transition-colors" href="#">Mentorship</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-semibold text-zinc-400 hover:text-white hidden sm:block transition-colors" href="#">Log in</a>
<a className="btn-shine group relative bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all shadow-[0_0_20px_-5px_rgba(234,88,12,0.4)] border border-white/10 overflow-hidden" href="#">
<span className="relative flex items-center gap-2">Join Free <svg className="lucide lucide-send w-3.5 h-3.5 fill-white" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute inset-0 hero-pattern [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] opacity-[0.3] -z-10"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full -z-10 mix-blend-screen"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-amber-800/10 blur-[120px] rounded-full -z-10"></div>
<div className="max-w-7xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-lg bg-zinc-900/80 border border-zinc-800 shadow-xl backdrop-blur-md mb-8 cursor-default group hover:border-orange-500/30 transition-colors">
<div className="w-1 h-4 bg-orange-500 rounded-full"></div>
<span className="text-xs font-bold tracking-widest text-zinc-100 uppercase">Live Trading Signals®</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6 max-w-5xl mx-auto leading-[0.95] md:leading-[1.05]">
                Join 5,000+ <br/>
<span className="gradient-text">Tanzanian Traders</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                Free Daily Trading Signals <span className="text-orange-500 mx-1">•</span> Expert Guidance <span className="text-orange-500 mx-1">•</span> Proven Results
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">

<button className="sm:w-auto hover:from-orange-500 hover:to-amber-400 text-[15px] transition-all hover:-translate-y-1 flex gap-3 btn-shine font-bold text-white bg-gradient-to-r from-orange-600 to-amber-500 w-full rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-[0_4px_30px_-5px_rgba(234,88,12,0.4)] gap-x-3 gap-y-3 items-center justify-center cursor-pointer" onclick="window.location.href='https://t.me/O1lot'" role="button">
<svg className="lucide lucide-send w-5 h-5 fill-white" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                    Join Free Telegram Group
                </button>
<button className="w-full sm:w-auto bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 border border-white/10 hover:border-white/20 text-[15px] font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2">
<svg className="lucide lucide-play-circle w-4 h-4 text-zinc-400" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
                    How it Works
                </button>
</div>

<div className="flex justify-center items-center gap-6 mb-24 opacity-90">
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg group-hover:border-orange-500/50 transition-colors">
<svg className="lucide lucide-send w-5 h-5 text-orange-500 fill-orange-500/20" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Alerts</span>
</div>
<div className="w-px h-8 bg-zinc-800"></div>
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg group-hover:border-orange-500/50 transition-colors">
<svg className="lucide lucide-trophy w-5 h-5 text-amber-500 fill-amber-500/20" data-lucide="trophy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978"></path><path d="M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978"></path><path d="M18 9h1.5a1 1 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z"></path><path d="M6 9H4.5a1 1 0 0 1 0-5H6"></path></svg>
</div>
<span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Wins</span>
</div>
<div className="w-px h-8 bg-zinc-800"></div>
<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center shadow-lg group-hover:border-orange-500/50 transition-colors">
<svg className="lucide lucide-trending-up w-5 h-5 text-orange-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Growth</span>
</div>
</div>

<div className="relative max-w-5xl mx-auto px-2">
<div className="relative bg-zinc-900/60 backdrop-blur-xl rounded-[2.5rem] border border-white/10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
<div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">

<div className="p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-colors">
<div className="relative mb-5">
<img alt="Trader" className="grayscale-[30%] group-hover:grayscale-0 transition-all w-20 h-20 object-cover rounded-2xl ring-white/10 ring-1 shadow-md" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/037671e1-e057-475a-8a96-850699b64d7c_320w.jpg"/>
<div className="absolute -bottom-2 -right-2 bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-[#111] tracking-wider">MENTOR</div>
</div>
<h3 className="font-bold text-white mb-1">Magdalena.U</h3>
<p className="text-sm text-zinc-500 mb-5 font-medium">Gold Analyst • Dar es Salaam</p>
<div className="text-4xl font-bold text-white tracking-tight font-mono">+$2,140</div>
<div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mt-3 flex items-center">
<svg className="lucide lucide-trending-up w-3 h-3 inline mr-1 stroke-[2.5]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> 18.5% This Week
                            </div>
</div>

<div className="p-10 flex flex-col items-center justify-center relative bg-gradient-to-b from-white/5 to-transparent">

<div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-10"></div>
<div className="relative">
<div className="absolute -inset-4 bg-orange-500/20 rounded-full animate-pulse"></div>
<div className="relative z-10 w-24 h-24 bg-gradient-to-br from-zinc-800 to-black rounded-full flex items-center justify-center shadow-xl mb-6 ring-1 ring-orange-500/50">
<svg className="lucide lucide-bell-ring w-10 h-10 text-orange-500 fill-orange-500/20" data-lucide="bell-ring" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path></svg>
</div>
</div>
<h3 className="text-white font-bold text-lg">New Signal Alert</h3>
<div className="flex items-center gap-2 mt-2">
<span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
<p className="text-sm text-zinc-400 font-medium">XAU/USD • SELLING NOW</p>
</div>
</div>

<div className="p-10 flex flex-col items-center text-center group hover:bg-white/5 transition-colors">
<div className="relative mb-5">
<img alt="Trader" className="w-20 h-20 rounded-2xl object-cover ring-1 ring-white/10 shadow-md grayscale-[30%] group-hover:grayscale-0 transition-all" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-[#111] tracking-wider">PROFIT</div>
</div>
<h3 className="text-white font-bold mb-1">Grace M.</h3>
<p className="text-sm text-zinc-500 mb-5 font-medium">Student • Arusha</p>
<div className="text-4xl font-bold text-white tracking-tight font-mono">+$450</div>
<div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full mt-3 flex items-center">
<svg className="lucide lucide-check-circle-2 w-3 h-3 inline mr-1 stroke-[2.5]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Withdraw Success
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-white/[0.02]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
<p className="text-lg text-zinc-400 font-medium text-center md:text-left">
                Join <span className="font-bold text-white">5,000+ members</span> across Tanzania &amp; East Africa.
            </p>
<div className="flex items-center gap-4">
<div className="flex -space-x-4">
<img alt="User" className="w-12 h-12 rounded-full border-[3px] border-[#0A0A0B] shadow-sm object-cover" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=200&amp;h=200&amp;q=80"/>
<img alt="User" className="w-12 h-12 rounded-full border-[3px] border-[#0A0A0B] shadow-sm object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="User" className="w-12 h-12 rounded-full border-[3px] border-[#0A0A0B] shadow-sm object-cover" src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=200&amp;h=200&amp;q=80"/>
<img alt="User" className="w-12 h-12 rounded-full border-[3px] border-[#0A0A0B] shadow-sm object-cover" src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=200&amp;h=200&amp;q=80"/>
<div className="w-12 h-12 rounded-full border-[3px] border-[#0A0A0B] bg-zinc-800 flex items-center justify-center text-xs font-bold text-white shadow-sm z-10">
                        +5k
                    </div>
</div>
<div className="text-sm">
<div className="flex text-orange-500 mb-0.5">
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-3.5 h-3.5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-zinc-500 font-medium">Top Rated Community</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0B]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-orange-500/30 hover:bg-zinc-900 transition-all duration-300 group">
<div className="w-12 h-12 bg-zinc-800 text-orange-500 rounded-2xl border border-white/5 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<div className="text-4xl font-bold text-white tracking-tight mb-2">5,000+</div>
<div className="text-base font-semibold text-zinc-300 mb-3">Tanzanian Traders</div>
<p className="text-zinc-500 text-sm leading-relaxed">Join a local community that understands your market needs and timing.</p>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-orange-500/30 hover:bg-zinc-900 transition-all duration-300 group">
<div className="w-12 h-12 bg-zinc-800 text-amber-500 rounded-2xl border border-white/5 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<svg className="lucide lucide-crosshair w-6 h-6" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<div className="text-4xl font-bold text-white tracking-tight mb-2">89%</div>
<div className="text-base font-semibold text-zinc-300 mb-3">Signal Accuracy</div>
<p className="text-zinc-500 text-sm leading-relaxed">Our signals are vetted by expert analysts to ensure maximum win rate.</p>
</div>

<div className="p-8 rounded-3xl bg-zinc-900/50 border border-white/5 hover:border-orange-500/30 hover:bg-zinc-900 transition-all duration-300 group">
<div className="w-12 h-12 bg-zinc-800 text-emerald-500 rounded-2xl border border-white/5 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<svg className="lucide lucide-banknote w-6 h-6" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<div className="text-4xl font-bold text-white tracking-tight mb-2">$500k+</div>
<div className="text-base font-semibold text-zinc-300 mb-3">Client Withdrawals</div>
<p className="text-zinc-500 text-sm leading-relaxed">Real profits. Withdraw instantly to Mobile Money, USDT, or Bank.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative overflow-hidden text-white border-t border-white/5">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-24">
<span className="inline-block py-1.5 px-3 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 font-mono text-[10px] tracking-widest uppercase mb-6 backdrop-blur-md">Fast Start</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Start Receiving Signals</h2>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
                    No complex analysis. Just join, receive the alert, copy the numbers, and profit.
                </p>
</div>
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="space-y-6 relative">

<div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-orange-500/50 via-white/5 to-transparent -z-10 hidden md:block"></div>

<div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:bg-white/[0.02] transition-all duration-500 hover:border-orange-500/30">
<h3 className="text-xl font-semibold mb-6 flex items-center gap-4 text-zinc-100">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white text-sm font-bold shadow-lg shadow-orange-600/20 ring-1 ring-white/20">1</span>
                            Get Free Access
                        </h3>
<div className="space-y-3 max-w-sm">
<div className="h-11 w-full bg-black/40 rounded-xl border border-white/10 px-4 flex items-center text-sm text-zinc-500 group-hover:border-white/20 transition-colors">
<span className="w-2 h-2 rounded-full bg-zinc-700 mr-3"></span> Enter your email
                            </div>
<button className="w-full bg-orange-500/10 text-orange-400 border border-orange-500/20 h-10 rounded-xl text-sm font-medium mt-2 flex items-center justify-center hover:bg-orange-500/20 transition-colors">Join 01LOT.COM</button>
</div>
</div>

<div className="glass-card p-8 rounded-3xl relative overflow-hidden group hover:bg-white/[0.02] transition-all duration-500 hover:border-orange-500/30">
<h3 className="text-xl font-semibold mb-6 flex items-center gap-4 text-zinc-100">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-zinc-800 text-zinc-400 border border-zinc-700 text-sm font-bold group-hover:bg-orange-600 group-hover:text-white group-hover:border-orange-500 transition-colors duration-300">2</span>
                            Join Telegram Channel
                        </h3>
<div className="flex flex-col gap-3">
<div className="w-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl p-4 flex items-center justify-between hover:bg-white/[0.08] transition-colors cursor-pointer backdrop-blur-md">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
<svg className="lucide lucide-send w-5 h-5 fill-current" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
<div>
<div className="text-sm font-semibold text-white">01LOT VIP Signals</div>
<div className="text-xs text-zinc-400">5k Members • Online</div>
</div>
</div>
<div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:border-blue-400/50 group-hover:text-blue-400 transition-colors">
<svg className="lucide lucide-plus w-3 h-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
</div>
</div>
</div>
</div>

<div className="pl-0 lg:pl-12">
<div className="space-y-16">
<div className="group">
<div className="flex items-center gap-4 mb-3">
<div className="p-2 rounded-lg bg-orange-500/10 text-orange-400 ring-1 ring-orange-500/20">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white">Instant Alerts</h3>
</div>
<p className="text-lg text-zinc-400 pl-14 border-l border-white/10">Receive precise buy/sell alerts directly to your phone via Telegram. Never miss a market move.</p>
</div>
<div className="group">
<div className="flex items-center gap-4 mb-3">
<div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20">
<svg className="lucide lucide-line-chart w-5 h-5" data-lucide="line-chart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white">Expert Guidance</h3>
</div>
<p className="text-lg text-zinc-400 pl-14 border-l border-white/10">We provide Entry Price, Stop Loss, and Take Profit levels. Just copy and paste.</p>
</div>
<div className="group">
<div className="flex items-center gap-4 mb-3">
<div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
<svg className="lucide lucide-wallet w-5 h-5" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-white">Keep 100% of Profit</h3>
</div>
<p className="text-lg text-zinc-400 pl-14 border-l border-white/10">You trade on your own account. We don't touch your funds. Withdraw whenever you want.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<span className="text-orange-500 font-mono text-xs mb-6 block tracking-widest uppercase">Market Coverage</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-8">
                        Forex <span className="text-zinc-600">Mastery</span>
</h2>
<p className="text-xl text-zinc-400 mb-10 max-w-md leading-relaxed">
                        Tap into the $6 Trillion daily market. Our analysts track major pairs (EUR/USD, GBP/USD) and Gold (XAU/USD) 24/7.
                    </p>
<a className="inline-flex items-center text-orange-400 font-semibold hover:text-orange-300 transition-colors group" href="#">
                        View Past Results <svg className="lucide lucide-arrow-up-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="relative bg-gradient-to-b from-[#111] to-[#080808] rounded-[2rem] p-8 border border-white/10 h-96 flex flex-col justify-end overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-between py-6 px-8 pointer-events-none">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

<div className="flex justify-between w-full border-b border-white/5 pb-2 relative z-10">
<span className="text-[10px] font-mono text-zinc-700 font-medium">USD/JPY</span>
<div className="flex gap-4">
<span className="text-[10px] font-mono text-zinc-600">1H</span>
<span className="text-[10px] font-mono text-zinc-600">4H</span>
<span className="text-[10px] font-mono text-orange-500/50">1D</span>
</div>
</div>

<div className="absolute inset-0 flex justify-between px-8 pointer-events-none">
<div className="w-px h-full bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="w-px h-full bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="w-px h-full bg-gradient-to-b from-white/5 to-transparent"></div>
<div className="w-px h-full bg-gradient-to-b from-white/5 to-transparent"></div>
</div>
</div>

<div className="absolute inset-0 top-20 opacity-90">
<svg className="w-[582px] h-[302px]" data-icon-replaced="true" preserveaspectratio="none" strokeWidth="2" style={{color: 'rgb(161, 161, 170)', width: '582px', height: '302px'}} viewbox="0 0 400 200">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#f97316" stop-opacity="0.3"></stop>
<stop offset="100%" stop-color="#f97316" stop-opacity="0"></stop>
</lineargradient>
<filter id="glow">
<fegaussianblur result="coloredBlur" stddeviation="3"></fegaussianblur>
<femerge>
<femergenode in="coloredBlur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path className="" d="M0,150 C50,150 100,100 150,120 S250,50 300,80 S350,20 400,10 V200 H0 Z" fill="url(#gradient)"></path>
<path className="" d="M0,150 C50,150 100,100 150,120 S250,50 300,80 S350,20 400,10" fill="none" filter="url(#glow)" stroke="#f97316" strokeLinecap="round" strokeWidth="2.5"></path>

<circle cx="150" cy="120" fill="#080808" r="3" stroke="#f97316" strokeWidth="2"></circle>
<circle cx="300" cy="80" fill="#080808" r="3" stroke="#f97316" strokeWidth="2"></circle>
<circle cx="400" cy="10" fill="#080808" r="3" stroke="#f97316" strokeWidth="2"></circle>
</svg>
</div>

<div className="z-10 flex border-white/10 border-t pt-6 relative items-end justify-between">
<div>
<div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-1">Weekly PnL</div>
<div className="text-3xl font-bold text-white tracking-tight font-mono">+$4,293.00</div>
</div>
<div className="bg-orange-500/10 border border-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-xs font-semibold flex items-center shadow-[0_0_15px_-3px_rgba(249,115,22,0.2)]">
<svg className="lucide lucide-trending-up w-3.5 h-3.5 inline mr-1.5" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> High Accuracy
                        </div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6 mt-16">
<div className="bg-[#0A0A0B] p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
<span className="text-zinc-600 font-mono text-xs mb-4 block group-hover:text-orange-500">02.</span>
<h3 className="text-xl font-bold text-white mb-3">Crypto Futures</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Long and Short signals on BTC, ETH, and SOL. Leverage the volatility.</p>
</div>
<div className="bg-[#0A0A0B] p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
<span className="text-zinc-600 font-mono text-xs mb-4 block group-hover:text-orange-500">03.</span>
<h3 className="text-xl font-bold text-white mb-3">Indices (US30)</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Trade the US economy. Fast scalping signals during New York session.</p>
</div>
<div className="bg-[#0A0A0B] p-8 rounded-3xl border border-white/5 hover:border-orange-500/30 transition-all duration-300 cursor-pointer group hover:-translate-y-1">
<span className="text-zinc-600 font-mono text-xs mb-4 block group-hover:text-orange-500">04.</span>
<h3 className="text-xl font-bold text-white mb-3">Synthetics</h3>
<p className="text-zinc-400 text-sm leading-relaxed">24/7 market access. Volatility indices for weekend trading.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A0A0B] relative border-t border-white/5">
<div className="max-w-4xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
<div>
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] uppercase font-bold tracking-widest text-zinc-400 mb-3">
                        Professional Trading Signals
                    </div>
<h2 className="text-3xl font-bold tracking-tight text-white">Real-time Signal Feed</h2>
</div>
<div className="flex items-center gap-2 text-sm text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full font-semibold shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Live Updates
                </div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5">
<div className="bg-white/[0.02] border-b border-white/5 p-5 grid grid-cols-4 text-[11px] font-semibold text-zinc-500 uppercase tracking-widest">
<div className="col-span-1 pl-2">Asset</div>
<div className="col-span-1">Action</div>
<div className="col-span-1">Status</div>
<div className="col-span-1 text-right pr-2">Result</div>
</div>

<div className="border-b border-white/5 p-6 grid grid-cols-4 items-center hover:bg-white/[0.04] transition-colors group">
<div className="col-span-1 font-bold text-white flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-zinc-400 font-bold group-hover:text-white transition-all">🇬🇧</div>
                        GBP/JPY
                    </div>
<div className="col-span-1">
<span className="bg-red-500/10 text-red-400 border border-red-500/20 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide">SELL ⬇</span>
</div>
<div className="col-span-1 text-sm font-medium text-zinc-400 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span> Active
                    </div>
<div className="col-span-1 text-right font-bold text-emerald-400 font-mono">+45 Pips</div>
</div>

<div className="border-b border-white/5 p-6 grid grid-cols-4 items-center hover:bg-white/[0.04] transition-colors group">
<div className="col-span-1 font-bold text-white flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-zinc-400 font-bold group-hover:text-white transition-all">🥇</div>
                        XAU/USD
                    </div>
<div className="col-span-1">
<span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide">BUY ⬆</span>
</div>
<div className="col-span-1 text-sm font-medium text-zinc-500">Closed</div>
<div className="col-span-1 text-right font-bold text-emerald-400 flex items-center justify-end gap-1.5">
                        TP Hit <svg className="lucide lucide-check-circle-2 w-4 h-4 fill-emerald-500/20 text-emerald-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>

<div className="border-b border-white/5 p-6 grid grid-cols-4 items-center hover:bg-white/[0.04] transition-colors group">
<div className="col-span-1 font-bold text-white flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-zinc-400 font-bold group-hover:text-white transition-all">₿</div>
                        BTC/USD
                    </div>
<div className="col-span-1">
<span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide">LONG ⬆</span>
</div>
<div className="col-span-1 text-sm font-medium text-zinc-400 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span> Active
                    </div>
<div className="col-span-1 text-right font-bold text-emerald-400 font-mono">+3.5%</div>
</div>

<div className="p-6 grid grid-cols-4 items-center hover:bg-white/[0.04] transition-colors group">
<div className="col-span-1 font-bold text-white flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xs text-zinc-400 font-bold group-hover:text-white transition-all">🇺🇸</div>
                        US30
                    </div>
<div className="col-span-1">
<span className="bg-red-500/10 text-red-400 border border-red-500/20 px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide">SHORT ⬇</span>
</div>
<div className="col-span-1 text-sm font-medium text-zinc-400 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Pending
                    </div>
<div className="col-span-1 text-right font-medium text-zinc-500 text-sm">Entry Zone</div>
</div>
</div>
<div className="mt-10">
<button className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold py-4 rounded-xl shadow-[0_4px_20px_-2px_rgba(234,88,12,0.3)] border border-orange-500/20 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 btn-shine">
                    Get Instant Access to Signals
                </button>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5">
<div className="max-w-5xl mx-auto px-6">
<div className="bg-zinc-900/40 rounded-[2.5rem] p-12 border border-white/5 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-[100%] opacity-50"></div>
<div className="absolute top-10 left-10 text-zinc-800">
<svg fill="currentColor" height="80" viewbox="0 0 24 24" width="80"><path d="M14.017 21L14.017 18C14.017 16.896 14.913 16 16.017 16H19.017C19.569 16 20.017 15.552 20.017 15V9C20.017 8.448 19.569 8 19.017 8H15.017C14.465 8 14.017 7.552 14.017 7V3H19.017C20.674 3 22.017 4.343 22.017 6V15C22.017 18.314 19.331 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.896 5.9126 16 7.0166 16H10.0166C10.5686 16 11.0166 15.552 11.0166 15V9C11.0166 8.448 10.5686 8 10.0166 8H6.0166C5.4646 8 5.0166 7.552 5.0166 7V3H10.0166C11.6736 3 13.0166 4.343 13.0166 6V15C13.0166 18.314 10.3306 21 7.0166 21H5.0166Z"></path></svg>
</div>
<div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1">
<div className="flex gap-1 text-amber-500 mb-8">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white leading-relaxed mb-8 tracking-tight">
                            "I never traded before. I just connected my account, and the signals did the rest. This community changed my life—I've paid off debts and I'm building real wealth."
                        </h3>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-zinc-800 border-2 border-zinc-700 shadow-md overflow-hidden relative">
<img alt="David O" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div>
<div className="text-white font-bold text-base">David O.</div>
<div className="text-zinc-500 text-sm font-medium">Forex Trader • Nairobi, Kenya</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] text-white border-t border-white/5 overflow-hidden relative">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center mb-24">
<h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Ready to start <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-500">winning?</span></h2>
<p className="text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                Get access to our professional trading signals, community chat, and real-time updates.
            </p>
<button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-lg font-semibold px-10 py-5 rounded-full shadow-[0_0_50px_-15px_rgba(234,88,12,0.5)] ring-2 ring-orange-500/30 transition-all transform hover:scale-105 active:scale-95 btn-shine">
                Join 01LOT Premium
            </button>
</div>
<div className="max-w-3xl mx-auto px-6 space-y-4 mb-24">
<div className="text-center mb-10">
<span className="bg-white/5 px-3 py-1 rounded-full text-xs font-semibold text-zinc-400 uppercase tracking-wide border border-white/5">FAQ</span>
<h3 className="text-2xl font-bold mt-4 text-zinc-100">Common Questions</h3>
</div>

<details className="group bg-white/[0.02] border border-white/5 rounded-2xl open:bg-white/[0.04] transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-lg text-zinc-200">How do the Signals Work?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-zinc-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-zinc-400 px-6 pb-6 pt-0 leading-relaxed text-base border-t border-white/5 mt-2">
                    
                    You simply subscribe to our channel, receive real-time notifications on your phone, and copy the parameters (Entry, Stop Loss, Take Profit) into your trading app.
                </div>
</details>

<details className="group bg-white/[0.02] border border-white/5 rounded-2xl open:bg-white/[0.04] transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-lg text-zinc-200">Do I need trading experience?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-zinc-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-zinc-400 px-6 pb-6 pt-0 leading-relaxed text-base border-t border-white/5 mt-2">
                    
                    No. 80% of our members are complete beginners. We provide a step-by-step guide on how to place trades.
                </div>
</details>

<details className="group bg-white/[0.02] border border-white/5 rounded-2xl open:bg-white/[0.04] transition-colors">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none">
<span className="font-medium text-lg text-zinc-200">Can I withdraw anytime?</span>
<span className="transition-transform duration-300 group-open:rotate-180">
<svg className="lucide lucide-chevron-down w-5 h-5 text-zinc-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="text-zinc-400 px-6 pb-6 pt-0 leading-relaxed text-base border-t border-white/5 mt-2">
                    
                    Yes. Your trading capital is in your own broker account. You have 100% control over your funds and withdrawals.
                </div>
</details>
</div>

<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-zinc-500">
<div className="mb-4 md:mb-0">
<span className="text-white font-semibold">01LOT.COM</span> © 2024. All Rights Reserved.
            </div>
<div className="flex gap-8 font-medium">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Disclaimer</a>
</div>
</div>
</section>



    </>
  );
}
