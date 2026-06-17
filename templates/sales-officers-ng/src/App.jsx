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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>
</div>

<header className="bg-[#2481ff] w-full py-4 sm:py-5 flex flex-col items-center justify-center shadow-md border-b border-blue-400/20">
<div className="text-2xl sm:text-3xl font-semibold tracking-tight text-white uppercase">
            Low Ticket
        </div>
<div className="flex items-center gap-3 mt-0.5 opacity-90">
<div className="h-[1px] w-8 sm:w-12 bg-white/70"></div>
<span className="text-xs tracking-[0.2em] font-medium uppercase text-white">Launch Plan</span>
<div className="h-[1px] w-8 sm:w-12 bg-white/70"></div>
</div>
</header>
<main className="flex-grow flex flex-col items-center px-4 sm:px-6 w-full max-w-[85rem] mx-auto pt-10 sm:pt-16 pb-24">

<div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 mb-10 sm:mb-12">
<div className="flex -space-x-3 rtl:space-x-reverse drop-shadow-lg">
<img alt="Creator" className="w-12 h-12 rounded-full border-2 border-[#051125] object-cover z-50 bg-zinc-800" src="https://i.pravatar.cc/150?img=11"/>
<img alt="Creator" className="w-12 h-12 rounded-full border-2 border-[#051125] object-cover z-40 bg-zinc-800" src="https://i.pravatar.cc/150?img=12"/>
<img alt="Creator" className="w-12 h-12 rounded-full border-2 border-[#051125] object-cover z-30 bg-zinc-800" src="https://i.pravatar.cc/150?img=33"/>
<img alt="Creator" className="w-12 h-12 rounded-full border-2 border-[#051125] object-cover z-20 bg-zinc-800" src="https://i.pravatar.cc/150?img=14"/>
<img alt="Creator" className="w-12 h-12 rounded-full border-2 border-[#051125] object-cover z-10 bg-zinc-800" src="https://i.pravatar.cc/150?img=15"/>
</div>
<div className="flex flex-col items-center sm:items-start">
<div className="flex gap-0.5 text-[#fdb913] mb-1.5">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" fill-rule="evenodd"></path></svg>
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" fill-rule="evenodd"></path></svg>
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" fill-rule="evenodd"></path></svg>
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" fill-rule="evenodd"></path></svg>
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" fill-rule="evenodd"></path></svg>
</div>
<div className="text-xs sm:text-sm font-semibold tracking-wider text-white uppercase text-center sm:text-left leading-tight">
                    Trusted by 500+<br/>Creator and Experts
                </div>
</div>
</div>

<h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold tracking-tight text-white uppercase leading-[1.1] text-center w-full max-w-5xl mx-auto mb-8 sm:mb-10 drop-shadow-sm">
            I'll personally create<br/>
            your <span className="bg-[#eb3a59] px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg inline-block mx-1 sm:mx-2 shadow-sm text-white relative top-[-2px] whitespace-nowrap">Low Ticket Offer</span><br/>
            with bonuses, bumps and<br/>
            upsells 100% DFY so you<br/>
            can get high-ticket<br/>
            clients for <span className="bg-[#eb3a59] px-3 sm:px-4 py-1 sm:py-1.5 rounded-lg inline-block mx-1 sm:mx-2 shadow-sm text-white relative top-[-2px]">Free</span>!
        </h1>

<p className="text-xl sm:text-2xl text-center text-white max-w-4xl mx-auto leading-relaxed font-normal mb-10 sm:mb-16 opacity-90 px-2 sm:px-4">
            All You Have To Do Is Fill Out a Simple Form To Tell Us The Exact High-Ticket Clients You Want and We Will Give You The Right Offer To Attract them!
        </p>

<div className="w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border border-white/10 mb-12 sm:mb-16 ring-1 ring-white/5">

<div className="bg-[#2481ff] py-3.5 px-4 flex items-center justify-center gap-2.5 text-white text-base sm:text-lg font-medium border-b border-blue-400/30">
<svg className="text-amber-300 drop-shadow-sm" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
<path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
<path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
</svg>
                Make sure your sound is turned on
            </div>

<div className="relative aspect-video bg-zinc-900 group cursor-pointer">
<img alt="Video Thumbnail" className="w-full h-full object-cover opacity-70 group-hover:opacity-80 transition-opacity duration-300 mix-blend-overlay" src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-14 sm:w-24 sm:h-16 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center transition-all duration-300 border border-white/20 shadow-lg group-hover:scale-105">
<svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1.5 opacity-90 group-hover:opacity-100 drop-shadow-md" fill="currentColor" viewbox="0 0 24 24">
<path d="M8 5v14l11-7z"></path>
</svg>
</div>
</div>
</div>
</div>

<div className="w-full max-w-4xl mx-auto px-4 sm:px-0">
<button className="w-full bg-gradient-to-b from-[#fdb913] to-[#f46000] hover:from-[#ffc42e] hover:to-[#ff7315] text-white text-xl sm:text-3xl font-semibold uppercase tracking-widest py-6 sm:py-7 rounded-2xl shadow-[0_10px_40px_-10px_rgba(244,96,0,0.6)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] border border-orange-400/50">
                YES! I Want My Funnel Plan
            </button>
</div>
</main>

    </>
  );
}
