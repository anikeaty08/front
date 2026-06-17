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



/*
Sequence animation on scroll when visible.
*/
(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[800px] saturate-150" data-alpha-mask="82" style={{maskImage: 'linear-gradient(to bottom, transparent, #0D1616 0%, #0D1616 82%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, #0D1616 0%, #0D1616 82%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="EET25BiXxR2StNXZvAzF"></div>

</div></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[50rem] bg-[#0F4A33]/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#0AB979]/5 rounded-full blur-[100px] pointer-events-none z-0"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
<div className="glass-card rounded-full p-1.5 pl-2 pr-2 flex items-center gap-1 [animation:animationIn_0.8s_ease-out_0s_both] animate-on-scroll bg-[#0E1B1B]/80">

<div className="flex text-[#0AB979] bg-gradient-to-br from-[#0F4A33] to-[#0D1616] w-9 h-9 border-[#0AB979]/20 border rounded-full items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--lucide w-[20px] h-[20px]" data-icon="lucide:sparkles" data-icon-replaced="true" data-icon-set="lucide" data-lucide="sparkles" fill="none" height="20" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(10, 185, 121)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path><path d="M20 3v4"></path><path d="M22 5h-4"></path><path className="" d="M4 17v2"></path><path className="" d="M5 18H3"></path></svg>
</div>

<div className="hidden md:flex items-center px-4 gap-6">
<a className="hover:text-[#F6F6F6] transition-colors text-sm font-medium text-neutral-400" href="/tjenester">
  Tjenester
</a>
<a className="hover:text-[#F6F6F6] transition-colors text-sm font-medium text-neutral-400" href="/prosjekter">Prosjekter</a>
<a className="hover:text-[#F6F6F6] transition-colors text-sm font-medium text-neutral-400" href="/om-oss">
            Om oss
          </a>
<a className="hover:text-[#F6F6F6] transition-colors text-sm font-medium text-neutral-400" href="/blogg">
            Blogg
          </a>
</div>

<button className="flex items-center gap-2 bg-[#0AB979]/10 hover:bg-[#0AB979]/20 border border-[#0AB979]/30 rounded-full px-4 py-2 transition-all group">
<span className="text-sm font-medium text-[#0AB979]">Book en prat</span>
<svg aria-hidden="true" className="iconify text-[#0AB979] group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</button>
</div>
</nav>

<main className="flex flex-col z-10 w-full h-[900px] pt-32 pr-4 pb-20 pl-4 relative items-center justify-center">

<style className="">
        @keyframes aura-float-1 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes aura-float-2 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes aura-float-3 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes aura-float-4 {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
      </style>

<div className="flex gap-2 glass-card bg-[#0F4A33]/30 border-[#0AB979]/30 rounded-full mt-8 pt-1.5 pr-4 pb-1.5 pl-4 items-center [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:sparkles" data-icon-replaced="true" data-icon-set="lucide" data-lucide="bell-ring" fill="none" height="16" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(10, 185, 121)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path><path d="M4 2C2.8 3.7 2 5.7 2 8"></path><path d="M22 8c0-2.3-.8-4.3-2-6"></path></svg>
<span className="text-sm font-bold italic text-slate-200">Kun 8 plasser igjen denne måneden</span>
</div>

<h1 className="mt-10 text-center text-[12vw] md:text-[8rem] font-semibold tracking-[-0.05em] leading-[0.85] bg-clip-text text-transparent bg-gradient-to-b from-[#F6F6F6] via-[#F6F6F6] to-[#F6F6F6]/40 glow-text z-20 relative [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll font-manrope">
<span className="block font-light italic" style={{fontFamily: '\'Times New Roman\', Times, serif'}}>EFFEKTIVE</span>
<span className="block font-bold text-[#F6F6F6]/80 mt-2">SYSTEMER</span>
</h1>

<p className="mt-8 text-lg md:text-xl text-neutral-400 text-center max-w-2xl leading-relaxed font-normal [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">
        Vi hjelper bedrifter med å automatisere manuelle oppgaver, skaffe flere kvalifiserte leads, og håndtere kundeservice døgnet rundt med skreddersydde AI-løsninger.
      </p>

<div className="flex mt-10 gap-x-3 gap-y-3 items-center [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<button className="group flex hover:bg-[#0F4A33]/40 transition-all duration-300 bg-gradient-to-b from-[#0F4A33]/20 via-[#0AB979]/5 to-[#0F4A33]/20 w-auto border-[#0AB979]/20 border rounded-full pt-2 pr-8 pb-2 pl-2 relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-2xl gap-x-4 gap-y-4 items-center overflow-hidden">

<div className="absolute inset-0 rounded-full" style={{WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', padding: '1px', pointerEvents: 'none'}}>
<div className="absolute -inset-[100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0_300deg,#0AB979_360deg)]"></div>
</div>
<div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0AB979] text-[#0D1616] shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_10px_rgba(10,185,121,0.3)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" height="1.2em" role="img" viewbox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="currentColor" stroke="none"></path>
</svg>
</div>
<span className="text-lg font-bold text-[#F6F6F6] tracking-tight z-10 relative">Få gratis AI-Analyse verdt 15.000kr</span>
</button>
</div>

<div className="hidden lg:block glass-card w-72 rounded-2xl pt-4 pr-4 pb-4 pl-4 absolute top-[15%] left-[10%]" style={{animation: 'aura-float-1 8s ease-in-out infinite', backgroundColor: '#0E1B1B'}}>
<div className="flex mb-4 items-center justify-between">
<span className="text-xs font-medium text-neutral-400">
            Trigger Kilde
          </span>
<div className="w-2 h-2 rounded-full bg-[#0AB979] shadow-[0_0_8px_rgba(10,185,121,0.8)]"></div>
</div>
<div className="w-full bg-[#0D1616]/50 border border-[#0AB979]/30 rounded-lg p-2.5 flex items-center justify-between mb-3 shadow-[0_0_15px_-3px_rgba(10,185,121,0.1)]">
<div className="flex items-center gap-2.5">
<svg aria-hidden="true" className="iconify text-[#0AB979] iconify--lucide" data-icon="lucide:users" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M16 3.13a4 4 0 0 1 0 7.75" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm text-white font-medium">Nytt Lead</span>
</div>
<span className="text-xs font-mono text-neutral-500">Facebook</span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors opacity-60">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:mail" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</g>
</svg>
<span className="text-sm font-medium">Kunde E-post</span>
</div>
<div className="flex items-center gap-3 p-2 rounded-lg bg-white/5 border border-white/5">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:database" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5v14a9 3 0 0 0 18 0V5"></path>
<path d="M3 12a9 3 0 0 0 18 0"></path>
</g>
</svg>
<span className="text-sm font-medium">CRM Oppdatert</span>
</div>
</div>
</div>

<div className="hidden lg:block absolute right-[10%] top-[20%] w-64 glass-card rounded-2xl p-1.5 space-y-1 bg-[#0E1B1B]" style={{animation: 'aura-float-2 9s ease-in-out infinite 1s'}}>

<div className="group flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-[#0D1616]/40 hover:border-[#0AB979]/30 transition-all cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-[#0F4A33]/20 flex items-center justify-center border border-white/5 group-hover:bg-[#0AB979]/10 group-hover:text-[#0AB979] transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide text-neutral-400" data-icon="lucide:brain-circuit" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path className="" d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path>
<circle cx="16" cy="13" r=".5"></circle>
<circle cx="18" cy="3" r=".5"></circle>
<circle cx="20" cy="21" r=".5"></circle>
<circle cx="20" cy="8" r=".5"></circle>
</g>
</svg>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium">Kvalifiser Lead</span>
<span className="text-[10px] text-neutral-500">AI Analyse</span>
</div>
</div>

<div className="group flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-[#0D1616]/40 hover:border-[#0AB979]/30 transition-all cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-[#0F4A33]/20 flex items-center justify-center border border-white/5 group-hover:bg-[#0AB979]/10 group-hover:text-[#0AB979] transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide text-neutral-400" data-icon="lucide:message-square" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium">Svar Kunde</span>
<span className="text-[10px] text-neutral-500">24/7 Support</span>
</div>
</div>
</div>

<div className="hidden glass-card lg:block bg-[#0E1B1B] w-72 rounded-2xl pt-5 pr-5 pb-5 pl-5 absolute bottom-[5%] left-[9%]" style={{animation: '10s ease-in-out 2s infinite normal none running aura-float-3'}}>
<style>
          @keyframes cursor-move-path {
            0%, 100% { transform: translate(0, 0); }
            20% { transform: translate(-20px, 15px); }
            45% { transform: translate(-5px, 40px); }
            70% { transform: translate(15px, 25px); }
          }
        </style>

<div className="relative z-10 flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-[#0D1616] shadow-sm">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:git-branch" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M6 3v12"></path>
<circle cx="18" cy="6" r="3"></circle>
<circle cx="6" cy="18" r="3"></circle>
<path d="M18 9a9 9 0 0 1-9 9"></path>
</g>
</svg>
<span className="text-sm font-medium">Logisk Flyt</span>
</div>

<div className="pl-4 py-2 space-y-2 relative">

<div className="absolute left-[29px] top-0 bottom-6 w-px bg-white/10"></div>

<div className="relative flex items-center">

<div className="w-4 h-6 border-b border-l border-white/10 rounded-bl-xl absolute -left-[3px] -top-3"></div>
<div className="ml-6 w-full relative group">
<div className="text-[10px] uppercase font-bold text-[#0AB979]/80 mb-1 tracking-wider ml-1">
                Hvis Høy Verdi
              </div>
<div className="flex items-center justify-between p-2.5 rounded-lg border border-[#0AB979]/30 bg-[#0F4A33]/30">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-[#0AB979] iconify--lucide" data-icon="lucide:calendar-check" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4m8-4v4M3 10h18M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="m9 16 2 2 4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm font-medium text-[#F6F6F6]">
                    Book Møte
                  </span>
</div>
</div>

<div className="absolute -right-3 top-8 z-50" style={{animation: 'cursor-move-path 8s ease-in-out infinite'}}>
<svg className="" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" fill="#F6F6F6" stroke="black" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<div className="absolute left-4 top-4 bg-[#0AB979] text-[#0D1616] text-xs font-semibold px-2 py-1 rounded-full border border-white/10 whitespace-nowrap shadow-lg">
                  Effektive AI
                </div>
</div>
</div>
</div>

<div className="relative flex items-center pt-2">

<div className="w-4 h-6 border-b border-l border-white/10 rounded-bl-xl absolute -left-[3px] -top-3"></div>
<div className="ml-6 w-full">
<div className="flex items-center gap-2 p-2.5 rounded-lg border border-white/5 bg-[#0D1616]/50 hover:bg-[#0D1616] transition-colors cursor-pointer text-neutral-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:plus" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-sm font-medium">Legg til steg</span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden glass-card lg:block bg-[#0E1B1B] w-80 rounded-2xl pt-5 pr-5 pb-5 pl-5 absolute right-[4%] bottom-[8%]" style={{animation: 'aura-float-4 11s ease-in-out infinite 0.5s'}}>
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-neutral-400 iconify--lucide" data-icon="lucide:terminal" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 19h8M4 17l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<span className="text-xs font-medium text-neutral-300">
              Live Prosessering
            </span>
</div>
<div className="flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-[#0AB979] animate-pulse"></span>
<span className="text-xs font-mono text-[#0AB979]">KJØRER</span>
</div>
</div>
<div className="space-y-2 font-mono text-xs max-h-32 overflow-hidden relative">

<div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-[#0E1B1B] to-transparent pointer-events-none"></div>
<div className="flex gap-2">
<span className="text-neutral-600">10:42:01</span>
<span className="text-blue-400">info</span>
<span className="text-neutral-300">Lead mottatt: ole@firma.no</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-600">10:42:02</span>
<span className="text-purple-400">prosess</span>
<span className="text-neutral-300">Henter selskapsdata...</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-600">10:42:03</span>
<span className="text-yellow-400">valg</span>
<span className="text-neutral-300">Score &gt; 80: Send tilbud</span>
</div>
<div className="flex gap-2">
<span className="text-neutral-600">10:42:04</span>
<span className="text-[#0AB979]">suksess</span>
<span className="text-neutral-300">E-post sendt automatisk</span>
</div>
</div>
<div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
<div className="text-xs text-neutral-500">
            Tid spart:
            <span className="text-neutral-300">15 min</span>
</div>
<div className="text-xs text-neutral-500">
            Kostnad:
            <span className="text-neutral-300">0.05 kr</span>
</div>
</div>
</div>
</main>

<section className="md:px-10 overflow-hidden bg-[#0D1616] w-full max-w-7xl border-white/5 border rounded-3xl mt-24 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="-translate-x-1/2 z-0 pointer-events-none select-none text-center w-full absolute top-24 left-1/2" style={{maskImage: 'linear-gradient(180deg, transparent, #0D1616 0%, #0D1616 60%, transparent)'}}>
<span className="text-[12vw] lg:text-[15rem] leading-none whitespace-nowrap font-bold text-[#0F4A33]/10 tracking-tighter font-manrope">
          Tjenester
        </span>
</div>
<div className="flex flex-col lg:flex-row text-left z-10 mb-20 relative gap-x-8 gap-y-8 justify-between [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">

<div className="max-w-2xl lg:text-left">
<h2 className="leading-[1.05] md:text-6xl text-5xl font-bold text-[#F6F6F6] tracking-tight">
            Våre Løsninger
          </h2>
</div>

<div className="max-w-md lg:text-right">
<p className="md:text-lg leading-relaxed text-base font-light text-neutral-400">
            Utforsk hvordan våre AI-tjenester kan transformere din bedrifts operasjonelle effektivitet.
          </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-10 mt-32 pt-0 relative gap-x-8 gap-y-6">

<div className="group flex flex-col transition-all duration-500 overflow-hidden shadow-black/50 bg-[#0E1B1B] h-[540px] rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-2xl backdrop-blur-md [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll" style={{position: 'relative', -BorderGradient: 'linear-gradient(90deg, rgba(15, 74, 51, 0.5), rgba(15, 74, 51, 0))', '--border-radius-before': '16px'}}>

<style>
            @keyframes draw-chart-line {
              0% { stroke-dashoffset: 1000; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes fade-in-chart {
              0% { opacity: 0; }
              100% { opacity: 1; }
            }
            .animate-draw-line {
              stroke-dasharray: 1000;
              stroke-dashoffset: 1000;
              animation: draw-chart-line 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
            }
            .animate-chart-fill {
              opacity: 0;
              animation: fade-in-chart 1.5s ease-out 0.5s forwards;
            }
          </style>
<div className="overflow-hidden flex-1 bg-gradient-to-br from-[#0D1616] to-[#0F4A33]/10 w-full rounded-xl mb-4 relative">
<div className="overflow-hidden w-full h-full relative">

<div className="absolute top-4 left-4 px-3 py-1.5 bg-[#0D1616]/70 border border-[#0AB979]/20 rounded-full text-xs text-white shadow-xl backdrop-blur-sm z-20 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#0AB979] animate-pulse"></span>
<span className="">Konvertering: +42%</span>
</div>

<svg className="absolute top-0 right-0 bottom-0 left-0 w-[364px] h-[422px]" preserveaspectratio="none" strokeWidth="2" viewbox="0 0 500 260">

<g className="" opacity="0.3" stroke="#0F4A33" strokeWidth="0.5">
<path d="M0 40 H500"></path>
<path d="M0 80 H500"></path>
<path d="M0 120 H500"></path>
<path d="M0 160 H500"></path>
<path d="M0 200 H500"></path>
</g>

<path className="animate-draw-line" d="M0,220 C80,210 150,180 220,165 C290,150 340,100 390,80 C440,60 470,40 500,30" fill="none" stroke="#0AB979" strokeWidth="3"></path>

<path className="animate-chart-fill" d="M0,220 C80,210 150,180 220,165 C290,150 340,100 390,80 C440,60 470,40 500,30 L500,260 L0,260 Z" fill="#0AB979" fillOpacity="0.1"></path>
</svg>
</div>
</div>
<div className="z-20 pt-4 pr-4 pb-4 pl-4 relative">
<h3 className="text-2xl font-semibold text-[#F6F6F6] tracking-tight mb-2">
              Flere Leads
            </h3>
<p className="leading-relaxed text-sm font-light text-neutral-400">Vi bygger systemer som automatisk fanger opp, kvalifiserer og booker 
møter med potensielle kunder på LinkedIn, e-post og SMS – helt uten 
manuelle salgsprosesser.</p>
</div>
</div>

<div className="group flex flex-col transition-all duration-500 overflow-hidden shadow-black/50 bg-[#0E1B1B] h-[540px] rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-2xl backdrop-blur-md [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll">

<div className="flex-1 overflow-y-auto custom-scrollbar bg-[#0D1616]/40 rounded-lg pt-4 pr-4 pb-4 pl-4">
<div className="relative flex flex-col items-center w-full max-w-md mx-auto">

<div className="flex gap-3 bg-[#0D1616] w-full border-[#0F4A33] border rounded-xl px-4 py-3 relative shadow-lg gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-xl bg-[#0E1B1B] flex items-center justify-center text-neutral-300 border border-white/5">
<svg className="lucide lucide-file-text" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
<polyline points="14 2 14 8 20 8"></polyline>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-[0.18em] text-white/40">Steg 1</span>
<span className="text-base font-medium text-white">Motta Data</span>
</div>
</div>

<div className="flex w-full mt-4 mb-4 relative justify-center">
<div className="absolute inset-y-0 w-px bg-[#0F4A33]"></div>
<button className="z-10 w-8 h-8 rounded-full bg-[#0AB979] flex items-center justify-center text-[#0D1616]">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
</button>
</div>

<div className="flex gap-3 bg-[#0D1616] w-full border-[#0AB979]/50 border rounded-xl px-4 py-3 relative shadow-lg gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-xl bg-[#0AB979]/20 flex items-center justify-center text-[#0AB979] border border-[#0AB979]/30">
<svg className="lucide lucide-cpu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-[0.18em] text-[#0AB979]/70">AI Kjerne</span>
<span className="text-base font-medium text-white">Prosessering</span>
</div>
</div>

<div className="flex w-full mt-4 mb-4 relative justify-center">
<div className="absolute inset-y-0 w-px bg-[#0F4A33]"></div>
<button className="z-10 w-8 h-8 rounded-full bg-[#0AB979] flex items-center justify-center text-[#0D1616]">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
</button>
</div>

<div className="flex gap-3 bg-[#0D1616] w-full border-[#0F4A33] border rounded-xl px-4 py-3 relative shadow-lg gap-x-3 gap-y-3 items-center">
<div className="w-10 h-10 rounded-xl bg-[#0E1B1B] flex items-center justify-center text-neutral-200 border border-white/5">
<svg className="lucide lucide-check-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<polyline points="22 4 12 14.01 9 11.01"></polyline>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-[0.18em] text-white/40">Steg 3</span>
<span className="text-base font-medium text-white">Utført</span>
</div>
</div>
</div>
</div>
<div className="z-20 mt-2 pt-4 pr-4 pb-4 pl-4 relative">
<h3 className="text-2xl font-semibold text-[#F6F6F6] tracking-tight mb-2">Tilpasset Automatisering</h3>
<p className="leading-relaxed text-sm font-light text-neutral-400">Vi integrerer AI-automatiseringer tilpasset din bedrift etter behov. 
Automatiser fakturering, rapporter, databehandling og integrasjoner – 
slik at teamet kan fokusere på vekst.</p>
</div>
</div>

<div className="flex flex-col gap-6 h-[540px] [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll">
<div className="group flex flex-col transition-all duration-500 overflow-hidden shadow-black/50 bg-[#0E1B1B] h-[540px] rounded-2xl pt-2 pr-2 pb-2 pl-2 relative shadow-2xl backdrop-blur-md">
<div className="flex-1 overflow-y-auto custom-scrollbar bg-[#0D1616]/40 rounded-lg pt-4 pr-4 pb-4 pl-4 flex flex-col justify-end gap-3">

<div className="self-end bg-[#0AB979]/20 text-[#0AB979] border border-[#0AB979]/30 rounded-t-xl rounded-bl-xl px-4 py-2 text-sm max-w-[80%]">
                 Hei! Hvordan kan jeg hjelpe deg i dag?
               </div>
<div className="self-start bg-[#0D1616] text-neutral-300 border border-white/10 rounded-t-xl rounded-br-xl px-4 py-2 text-sm max-w-[80%]">
                 Jeg lurer på prisene deres.
               </div>
<div className="self-end bg-[#0AB979]/20 text-[#0AB979] border border-[#0AB979]/30 rounded-t-xl rounded-bl-xl px-4 py-2 text-sm max-w-[80%]">
                 Vi tilbyr skreddersydde pakker. Skal jeg sette opp et møte med en konsulent?
               </div>
</div>
<div className="z-20 mt-2 pt-4 pr-4 pb-4 pl-4 relative">
<h3 className="text-2xl font-semibold text-[#F6F6F6] tracking-tight mb-2">
                24/7 Support
              </h3>
<p className="leading-relaxed text-sm font-light text-neutral-400">AI-chatboter og AI-resepsjonister over telefon som håndterer 
kundehenvendelser døgnet rundt. Naturlig norsk tale og personlig 
tone tilpasset din bedrift.</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden md:px-10 md:pb-0 bg-[#0D1616] w-full max-w-7xl border-white/5 border rounded-3xl mt-24 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="-translate-x-1/2 z-0 pointer-events-none select-none text-center w-full absolute top-24 left-1/2" style={{maskImage: 'linear-gradient(180deg, transparent, #0D1616 0%, #0D1616 60%, transparent)'}}>
<span className="text-[10vw] lg:text-[12rem] leading-none whitespace-nowrap font-bold text-[#0F4A33]/10 tracking-tighter font-manrope">
          Integrasjoner
        </span>
</div>
<div className="z-10 relative">
<div className="z-10 flex flex-col lg:flex-row gap-8 text-left mb-20 relative gap-x-8 gap-y-8 justify-between [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="max-w-2xl">
<h2 className="md:text-6xl leading-tight text-5xl font-semibold text-[#F6F6F6] tracking-tight">
              Kobler sammen alt
            </h2>
</div>
<div className="max-w-md">
<p className="leading-relaxed text-lg font-light text-neutral-400">
              Vi integrerer AI-agentene direkte i systemene du allerede bruker, enten det er CRM, ERP eller e-post.
            </p>
</div>
</div>
<section className="overflow-visible max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<style>
            @keyframes flow-line {
              0% { stroke-dashoffset: 1000; opacity: 0; }
              10% { opacity: 1; }
              90% { opacity: 1; }
              100% { stroke-dashoffset: 0; opacity: 0; }
            }
            .animate-flow-line {
              stroke-dasharray: 200 800;
              animation: flow-line 4s linear infinite;
            }
          </style>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0F4A33]/20 blur-[120px] rounded-full"></div>
</div>
<div className="flex flex-col z-10 w-full max-w-6xl mr-auto ml-auto relative items-center">

<div className="relative z-20 mb-20 md:mb-28 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="px-8 py-3 rounded-full bg-[#0E1B1B] border border-white/10 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.5)] flex items-center justify-center relative backdrop-blur-sm">
<span className="text-sm font-medium text-neutral-300 tracking-wide">
                  Drives av Effektive Systemer
                </span>
<div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex gap-4 pointer-events-none">
<div className="w-1 h-1 rounded-full bg-[#0AB979] shadow-[0_0_5px_rgba(10,185,121,0.5)]"></div>
<div className="w-1 h-1 rounded-full bg-[#0AB979] shadow-[0_0_5px_rgba(10,185,121,0.5)]"></div>
<div className="w-1 h-1 rounded-full bg-[#0AB979] shadow-[0_0_5px_rgba(10,185,121,0.5)]"></div>
</div>
</div>
</div>

<svg className="absolute top-[48px] left-0 w-full h-[120px] z-0 pointer-events-none overflow-visible hidden md:block" preserveaspectratio="none" viewbox="0 0 1200 120">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="grad-green" x1="600" x2="200" y1="0" y2="120">
<stop offset="0" stop-color="#0AB979" stop-opacity="0"></stop>
<stop offset="0.5" stop-color="#0AB979"></stop>
<stop offset="1" stop-color="#0AB979" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M 600 0 C 600 60, 200 60, 200 120" fill="none" stroke="rgba(10, 185, 121, 0.1)" strokeWidth="1.5"></path>
<path d="M 600 0 L 600 120" fill="none" stroke="rgba(10, 185, 121, 0.1)" strokeWidth="1.5"></path>
<path d="M 600 0 C 600 60, 1000 60, 1000 120" fill="none" stroke="rgba(10, 185, 121, 0.1)" strokeWidth="1.5"></path>
<path className="animate-flow-line" d="M 600 0 C 600 60, 200 60, 200 120" fill="none" stroke="url(#grad-green)" strokeLinecap="round" strokeWidth="2"></path>
<path className="animate-flow-line" d="M 600 0 L 600 120" fill="none" stroke="url(#grad-green)" strokeLinecap="round" strokeWidth="2" style={{animationDelay: '1s'}}></path>
<path className="animate-flow-line" d="M 600 0 C 600 60, 1000 60, 1000 120" fill="none" stroke="url(#grad-green)" strokeLinecap="round" strokeWidth="2" style={{animationDelay: '2s'}}></path>
</svg>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10 md:px-0 w-full pr-4 pl-4 relative gap-x-6 gap-y-6">

<div className="bg-[#0E1B1B]/80 border border-white/5 rounded-2xl p-6 relative group transition-all duration-300 hover:border-[#0AB979]/30">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-xl bg-[#0D1616] border border-white/10 flex items-center justify-center text-white font-bold">
                    V
                  </div>
<h3 className="text-lg font-medium text-[#F6F6F6]">Visma</h3>
</div>
<p className="text-neutral-500 text-sm leading-relaxed font-normal">
                  Synkroniser fakturaer og regnskapsdata automatisk.
                </p>
</div>

<div className="bg-[#0E1B1B]/80 border border-white/5 rounded-2xl p-6 relative group transition-all duration-300 hover:border-[#0AB979]/30">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 rounded-xl bg-[#0D1616] border border-white/10 flex items-center justify-center text-white font-bold">
                    T
                  </div>
<h3 className="text-lg font-medium text-[#F6F6F6]">Tripletex</h3>
</div>
<p className="leading-relaxed text-sm font-normal text-neutral-500">
                  Full integrasjon mot dine prosjekter og timeføring.
                </p>
</div>

<div className="bg-[#0E1B1B]/80 border border-white/5 rounded-2xl p-6 relative group transition-all duration-300 hover:border-[#0AB979]/30">
<div className="flex items-center gap-4 mb-8">
<div className="flex font-bold text-white bg-[#0D1616] w-12 h-12 border-white/10 border rounded-xl items-center justify-center">
                    H
                  </div>
<h3 className="text-lg font-medium text-[#F6F6F6]">HubSpot</h3>
</div>
<p className="leading-relaxed text-sm font-normal text-neutral-500">
                  Automatisk oppdatering av kunder og salgsmuligheter.
                </p>
</div>
</div>
</div>
</section>
</div>
</section>

<section className="md:px-10 overflow-hidden bg-[#0D1616] w-full max-w-7xl border-white/5 border rounded-3xl mt-24 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<div className="-translate-x-1/2 z-0 pointer-events-none select-none text-center w-full absolute top-24 left-1/2" style={{maskImage: 'linear-gradient(180deg, transparent, #0D1616 0%, #0D1616 60%, transparent)'}}>
<span className="text-[10vw] lg:text-[12rem] leading-none whitespace-nowrap font-bold text-[#0F4A33]/10 tracking-tighter font-manrope">
          Erfaringer
        </span>
</div>
<div className="z-10 flex flex-col lg:flex-row gap-8 text-left mb-20 relative gap-x-8 gap-y-8 justify-between [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
<div className="max-w-2xl">
<h2 className="leading-[1.05] md:text-6xl text-5xl font-bold text-[#F6F6F6] tracking-tight">
            Kundeerfaringer
          </h2>
</div>
<div className="max-w-md">
<p className="md:text-lg leading-relaxed text-base font-light text-neutral-400">
            Se hvordan norske bedrifter sparer tid og øker omsetningen med våre løsninger.
          </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 z-10 mt-32 relative gap-x-6 gap-y-6 h-[600px] overflow-hidden [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll" style={{maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)'}}>
<style>
          @keyframes marquee-up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }
          .animate-marquee-up {
            animation: marquee-up 40s linear infinite;
          }
        </style>

<div className="relative w-full h-full overflow-hidden">
<div className="animate-marquee-up flex flex-col">
<div className="flex flex-col gap-6 pb-6">
<div className="group transition-all duration-500 hover:border-[#0AB979]/20 bg-[#0E1B1B] rounded-2xl p-8 relative shadow-2xl backdrop-blur-md border border-white/5">
<p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                  "Vi sparte over 20 timer i uken på manuelle oppgaver. Systemet Effektive Systemer satte opp håndterer nå all inngående kundedata automatisk."
                </p>
<div className="flex items-center justify-between border-t border-white/5 pt-6">
<div>
<h4 className="text-white font-semibold tracking-tight">Ole Hansen</h4>
<p className="text-sm text-neutral-500 font-light">Daglig Leder, Nord Bygg AS</p>
</div>
</div>
</div>
<div className="group transition-all duration-500 hover:border-[#0AB979]/20 bg-[#0E1B1B] rounded-2xl p-8 relative shadow-2xl backdrop-blur-md border border-white/5">
<p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                  "Responstiden vår på kundeservice gikk fra timer til sekunder. Kundene våre elsker den nye chat-løsningen."
                </p>
<div className="flex items-center justify-between border-t border-white/5 pt-6">
<div>
<h4 className="text-white font-semibold tracking-tight">Kari Solberg</h4>
<p className="text-sm text-neutral-500 font-light">Markedssjef, TechNova</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 pb-6">
<div className="group transition-all duration-500 hover:border-[#0AB979]/20 bg-[#0E1B1B] rounded-2xl p-8 relative shadow-2xl backdrop-blur-md border border-white/5">
<p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                  "Vi sparte over 20 timer i uken på manuelle oppgaver. Systemet Effektive Systemer satte opp håndterer nå all inngående kundedata automatisk."
                </p>
<div className="flex items-center justify-between border-t border-white/5 pt-6">
<div>
<h4 className="text-white font-semibold tracking-tight">Ole Hansen</h4>
<p className="text-sm text-neutral-500 font-light">Daglig Leder, Nord Bygg AS</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full h-full overflow-hidden hidden md:block">
<div className="animate-marquee-up flex flex-col" style={{animationDirection: 'reverse'}}>
<div className="flex flex-col gap-6 pb-6">
<div className="group transition-all duration-500 hover:border-[#0AB979]/20 bg-[#0E1B1B] rounded-2xl p-8 relative shadow-2xl backdrop-blur-md border border-white/5">
<p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                  "Antall kvalifiserte leads har doblet seg siden vi implementerte AI-agentene. En fantastisk investering."
                </p>
<div className="flex items-center justify-between border-t border-white/5 pt-6">
<div>
<h4 className="text-white font-semibold tracking-tight">Erik Larsen</h4>
<p className="text-sm text-neutral-500 font-light">Salgssjef, FinansPartner</p>
</div>
</div>
</div>
<div className="group transition-all duration-500 hover:border-[#0AB979]/20 bg-[#0E1B1B] rounded-2xl p-8 relative shadow-2xl backdrop-blur-md border border-white/5">
<p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                  "Utrolig dyktig team som forstår både teknologi og forretning. Anbefales på det sterkeste."
                </p>
<div className="flex items-center justify-between border-t border-white/5 pt-6">
<div>
<h4 className="text-white font-semibold tracking-tight">Ingrid Berg</h4>
<p className="text-sm text-neutral-500 font-light">CEO, Berg Consulting</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 pb-6">
<div className="group transition-all duration-500 hover:border-[#0AB979]/20 bg-[#0E1B1B] rounded-2xl p-8 relative shadow-2xl backdrop-blur-md border border-white/5">
<p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                  "Antall kvalifiserte leads har doblet seg siden vi implementerte AI-agentene. En fantastisk investering."
                </p>
<div className="flex items-center justify-between border-t border-white/5 pt-6">
<div>
<h4 className="text-white font-semibold tracking-tight">Erik Larsen</h4>
<p className="text-sm text-neutral-500 font-light">Salgssjef, FinansPartner</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="relative w-full h-full overflow-hidden hidden lg:block">
<div className="animate-marquee-up flex flex-col">
<div className="flex flex-col gap-6 pb-6">
<div className="group transition-all duration-500 hover:border-[#0AB979]/20 bg-[#0E1B1B] rounded-2xl p-8 relative shadow-2xl backdrop-blur-md border border-white/5">
<p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                  "Vi har nå full oversikt over alle prosesser i sanntid. Det gir oss en enorm konkurransefordel."
                </p>
<div className="flex items-center justify-between border-t border-white/5 pt-6">
<div>
<h4 className="text-white font-semibold tracking-tight">Thomas Nilsen</h4>
<p className="text-sm text-neutral-500 font-light">Driftssjef, LogistikkX</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-6 pb-6">
<div className="group transition-all duration-500 hover:border-[#0AB979]/20 bg-[#0E1B1B] rounded-2xl p-8 relative shadow-2xl backdrop-blur-md border border-white/5">
<p className="text-neutral-300 text-lg font-light leading-relaxed mb-8">
                  "Vi har nå full oversikt over alle prosesser i sanntid. Det gir oss en enorm konkurransefordel."
                </p>
<div className="flex items-center justify-between border-t border-white/5 pt-6">
<div>
<h4 className="text-white font-semibold tracking-tight">Thomas Nilsen</h4>
<p className="text-sm text-neutral-500 font-light">Driftssjef, LogistikkX</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden md:px-10 bg-[#0D1616] w-full max-w-7xl border-white/5 border rounded-3xl mt-24 mr-auto mb-12 ml-auto px-10 relative">
<div className="md:pt-24 md:pb-12 flex overflow-hidden w-full border-white/5 border-b pt-16 pb-8 items-center justify-center">
<h1 className="text-[10vw] md:text-[150px] leading-[0.8] whitespace-nowrap select-none text-4xl font-semibold text-[#0F4A33]/20 tracking-tighter font-manrope [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll">
          effektive systemer
        </h1>
</div>
<div className="px-6 pt-16 pb-12 md:px-4 relative z-10 [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll">
<div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-12">

<div className="lg:w-1/2 max-w-2xl flex flex-col items-start justify-center">
<h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight mb-6 leading-[1.1]">
<span className="text-neutral-500">Klar for å</span>
<span className="text-[#F6F6F6] block">effektivisere?</span>
</h2>
<p className="text-neutral-400 text-lg mb-8 max-w-md">
              La oss ta en prat om hvordan AI kan hjelpe din bedrift å vokse.
            </p>
<div className="flex gap-4">
<button className="group inline-flex items-center gap-2 bg-[#0AB979] hover:bg-[#0AB979]/90 text-[#0D1616] px-6 py-3.5 rounded-full font-medium text-sm transition-all duration-300 hover:scale-[1.02]">
<span>Start reisen</span>
<svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-16 lg:gap-24 lg:mr-10">

<div className="flex flex-col gap-5">
<h3 className="text-[#F6F6F6] text-sm font-semibold">Tjenester</h3>
<nav className="flex flex-col gap-3">
<a className="text-neutral-400 hover:text-[#0AB979] transition-colors text-sm font-medium" href="#">Automasjon</a>
<a className="text-neutral-400 hover:text-[#0AB979] transition-colors text-sm font-medium" href="#">Lead Generering</a>
<a className="text-neutral-400 hover:text-[#0AB979] transition-colors text-sm font-medium" href="#">Kundeservice</a>
<a className="text-neutral-400 hover:text-[#0AB979] transition-colors text-sm font-medium" href="#">Rådgivning</a>
</nav>
</div>

<div className="flex flex-col gap-5">
<h3 className="text-[#F6F6F6] text-sm font-semibold">Bedrift</h3>
<nav className="flex flex-col gap-3">
<a className="text-neutral-400 hover:text-[#0AB979] transition-colors text-sm font-medium" href="#">Om oss</a>
<a className="text-neutral-400 hover:text-[#0AB979] transition-colors text-sm font-medium" href="#">Kontakt</a>
<a className="text-neutral-400 hover:text-[#0AB979] transition-colors text-sm font-medium" href="#">Personvern</a>
</nav>
</div>
</div>
</div>

<div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 font-medium gap-6 md:gap-4">
<div className="flex items-center gap-4">
<div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0E1B1B] border border-white/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0AB979] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#0AB979]"></span>
</span>
<span className="text-neutral-300">Systemer operative</span>
</div>
</div>
<div className="text-center md:text-right">
<p>© 2025 Effektive Systemer AS.</p>
</div>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-[#0F4A33]/20 blur-[100px] pointer-events-none rounded-full"></div>
</footer>

    </>
  );
}
