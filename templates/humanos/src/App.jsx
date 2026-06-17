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
serif: ['Newsreader', 'serif'],
mono: ['Space Mono', 'monospace'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
},
accent: {
DEFAULT: '#1D08AE',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
animation: {
'marquee': 'marquee 40s linear infinite',
'beam': 'beam 8s linear infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
beam: {
'0%': { top: '-200px', opacity: '0' },
'10%': { opacity: '1' },
'90%': { opacity: '1' },
'100%': { top: '100%', opacity: '0' },
}
}
}
}
}



document.addEventListener("DOMContentLoaded", () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) entry.target.classList.add("animate");
});
}, { threshold: 0.05, rootMargin: "0px 0px -10% 0px" });
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
setTimeout(() => { document.querySelectorAll("#hero .animate-on-scroll").forEach(el => el.classList.add("animate")); }, 100);
});



                !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
            


              (function () {
    const form = document.getElementById("contact-sales-form");
    const success = document.getElementById("contact-success");
    const error = document.getElementById("contact-error");
    const btn = document.getElementById("contact-submit");
    const btnText = document.getElementById("contact-submit-text");

    if (!form) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      success?.classList.add("hidden");
      error?.classList.add("hidden");

      if (btn) btn.disabled = true;
      if (btnText) btnText.textContent = "Sending...";

      try {
        const formData = new FormData(form);

        const email = formData.get("email");
        if (email) formData.set("_replyto", email);

        const res = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: { Accept: "application/json" },
        });

        if (res.ok) {
          form.reset();
          success?.classList.remove("hidden");
        } else {
          error?.classList.remove("hidden");
        }
      } catch (err) {
        error?.classList.remove("hidden");
      } finally {
        if (btn) btn.disabled = false;
        if (btnText) btnText.textContent = "Send message";
      }
    });
  })();
            
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
      

<div className="fixed top-0 w-full h-screen -z-10 saturate-0" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div>
</div>

<div className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300" style={{background: 'radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.03), transparent 40%)'}}></div>

<div className="absolute inset-0 pointer-events-none z-0 grid grid-cols-6 md:grid-cols-12 max-w-7xl mx-auto border-x border-white/5 h-[1200px]">
<div className="border-r border-white/5 h-full hidden md:block animate-line relative overflow-hidden delay-100"><div className="absolute -top-40 -right-[1px] w-[1px] h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-beam"></div></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-300"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-150 relative overflow-hidden"><div className="absolute -top-52 -right-[1px] w-[1px] h-52 bg-gradient-to-b from-transparent via-white/10 to-transparent animate-beam" style={{animationDuration: '11s', animationDelay: '2s'}}></div></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-200"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-75"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-300"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-100 relative overflow-hidden"><div className="absolute -top-64 -right-[1px] w-[1px] h-64 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-beam" style={{animationDuration: '9s', animationDelay: '1.5s'}}></div></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-200"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-400"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-150"></div>
<div className="border-r border-white/5 h-full hidden md:block animate-line delay-300"></div>
</div>

<nav className="fixed top-6 z-50 left-1/2 -translate-x-1/2 w-[90%] md:w-auto max-w-5xl shrink-0">
<div className="shadow-black/50 md:px-6 flex flex-wrap md:flex-nowrap md:gap-6 md:items-center overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:max-h-14 bg-zinc-900/70 max-h-14 border-white/10 border rounded-full px-4 shadow-2xl backdrop-blur-xl gap-x-2 gap-y-4 items-center justify-between">
<div className="flex shrink-0 h-14 gap-x-2 gap-y-2 items-center">
<a className="inline-flex items-center justify-center bg-center opacity-100 mix-blend-normal w-[120px] h-[17px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c7bf83cf-ee08-4094-82fd-49bab1ff6fe3_800w.png)] bg-contain rounded" href="#"></a>
<div aria-hidden="true" className="h-6 w-px bg-white/10 mx-2 hidden md:block"></div>
</div>
<div className="hidden md:flex gap-3 shrink-0 h-10 gap-x-3 gap-y-4 items-center">
<a className="hover:text-white transition-colors flex items-center gap-0.5 group text-xs font-medium text-zinc-400" href="#product">Product</a>
<button className="hover:text-white transition-colors text-xs font-medium text-zinc-400" onclick="window.location.href='https://www.humanos.id/usecases'" type="button">Use Cases</button>
<a className="hover:text-white transition-colors text-xs font-medium text-zinc-400" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors text-xs font-medium text-zinc-400" href="https://humanos.mintlify.app/essentials/introduction" target="_blank">Docs</a>
<a className="hover:text-white transition-colors text-xs font-medium text-zinc-400" href="#contact">Contact</a>
<button className="hover:text-white transition-colors text-xs font-medium text-zinc-400" onclick="window.open('https://app.humanos.id/sign-in','_blank','noopener,noreferrer')" type="button">
      Log in
    </button>
</div>
<div className="flex shrink-0 h-14 gap-x-4 gap-y-4 items-center">
<a className="group relative inline-flex h-8 items-center justify-center overflow-hidden rounded-full bg-white px-3 text-xs font-medium text-zinc-950 transition-all hover:bg-zinc-200" href="javascript:void(0);" onclick="window.open('https://app.humanos.id/sign-up', '_blank'); return false;">
<span className="relative z-10">Get Started</span>
</a>
</div>
</div>
</nav>

<main className="pt-24 pb-40 relative">

<section className="flex flex-col md:mt-32 min-h-[80vh] w-full max-w-7xl z-10 mt-16 mr-auto ml-auto pr-6 pl-6 relative justify-center" id="hero">
<div className="flex spotlight-group animate-on-scroll animate w-full mb-10 relative justify-start">
<a className="z-10 group flex items-center gap-3 hover:border-white/20 transition-all overflow-hidden bg-zinc-900/50 border-white/10 border rounded-full pt-1.5 pr-1.5 pb-1.5 pl-1.5 relative" href="#">
<span className="group-hover:text-zinc-300 text-sm font-medium text-zinc-400 px-2">Live in Selected Enterprise Partners</span>
</a>
</div>
<div className="w-full max-w-5xl">
<div className="relative z-20 animate-on-scroll animate">
<div className="flex flex-col gap-2 gap-x-2 gap-y-2">
<div className="flex uppercase text-xs text-slate-50 tracking-widest font-mono mb-4 gap-x-2 gap-y-2 items-center">
            The control plane for human intent in autonomous systems that can't afford mistakes.
          </div>
<h1 className="text-5xl md:text-8xl lg:text-[100px] leading-[0.95] tracking-tighter font-serif text-white mix-blend-screen">
<span className="block word-mask"><span className="block word-reveal">Human authorization,</span></span>
<span className="block word-mask"><span className="block word-reveal sans-serif font-light text-zinc-500">upgraded for AI.</span></span>
</h1>
</div>
</div>
</div>
<div className="md:mt-32 grid grid-cols-1 lg:grid-cols-2 gap-12 animate-on-scroll animate w-full mt-20 gap-x-12 gap-y-12 items-end">
<div className="group md:p-8 spotlight-group overflow-hidden hover:bg-zinc-900/50 transition-all duration-500 bg-zinc-900/30 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm">
<div className="absolute inset-0 pointer-events-none opacity-0 spotlight-border transition-opacity duration-300" style={{background: 'radial-gradient(400px circle at var(--mouse-x-rel) var(--mouse-y-rel), rgba(255, 255, 255, 0.05), transparent 40%)'}}>
</div>
<div className="absolute left-0 top-8 w-0.5 h-12 bg-white rounded-r-full"></div>
<p className="md:text-xl leading-relaxed text-lg italic text-zinc-300 max-w-lg z-10 relative">Enable systems to act
          autonomously, with provable human authorization checked before every action. If missing, they can request it
          in real time.</p>
</div>
<div className="flex flex-col sm:flex-row md:items-center gap-4 z-10 lg:justify-end pb-4 gap-x-4 gap-y-4">
<button className="group inline-flex overflow-hidden transition-all duration-300 hover:bg-zinc-200 font-medium text-zinc-950 bg-white h-12 rounded-full pr-8 pl-8 relative items-center justify-center" onclick="event.preventDefault();event.stopPropagation();window.open('http://humanos.id/usecases', '_blank', 'noopener,noreferrer');return false;" role="button">
<span className="cursor-pointer mr-2">Use Cases</span>
<svg className="text-zinc-600 group-hover:text-zinc-900 transition-colors" data-icon-set="lucide" data-lucide="terminal" height="1em" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8M4 17l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="group inline-flex transition-all hover:text-white hover:border-white/30 cursor-pointer font-medium text-zinc-400 bg-transparent h-12 border-white/10 border rounded-full pr-8 pl-8 items-center justify-center" onclick="event.preventDefault();event.stopPropagation();window.open('https://humanos.mintlify.app/essentials/introduction', '_blank', 'noopener,noreferrer');return false;" role="button" type="button">
<span className="">Documentation</span>
<svg className="ml-2 text-zinc-600 group-hover:translate-x-1 group-hover:text-white transition-all" data-icon-set="lucide" data-lucide="arrow-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="animate-on-scroll animate z-20 w-full mt-24 relative">
<div className="flex gap-4 gap-x-4 gap-y-4 items-stretch">
<div className="hidden md:flex rounded-xl pt-6 pr-6 pb-6 pl-6 items-center justify-center shrink-0">
</div>
<div className="flex-1 overflow-hidden shadow-black/30 bg-zinc-900/70 border-white/10 border rounded-2xl pt-8 pr-4 pb-8 pl-4 shadow-lg" style={{maskImage: 'linear-gradient(90deg, transparent, black 20%, black 70%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 20%, black 70%, transparent)'}}>
<style className="">
            @keyframes scrollLogos {
              0% {
                transform: translateX(0);
              }

              100% {
                transform: translateX(-50%);
              }
            }

            .logo-scroll-container {
              display: flex;
              animation: scrollLogos 80s linear infinite;
              will-change: transform;
              width: fit-content;
            }

            .logo-scroll-container:hover {
              animation-play-state: paused;
            }
          </style>
<div className="logo-scroll-container">

<div className="flex gap-4 shrink-0 px-2">
<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 shadow-lg shadow-black/30 w-72 shrink-0 flex flex-col gap-3 hover:bg-zinc-900/80 transition-colors duration-300">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<span className="text-base font-semibold text-white tracking-tight">Ciberbit</span>
</div>
<p className="leading-snug text-sm font-light text-zinc-400">EHR present in 400+ units across Europe and
                  Middle
                  East.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 shadow-lg shadow-black/30 w-72 shrink-0 flex flex-col gap-3 hover:bg-zinc-900/80 transition-colors duration-300">
<div className="flex items-center gap-3">
<span className="text-base font-semibold text-white tracking-tight">Fidelidade</span>
</div>
<p className="leading-snug text-sm font-light text-zinc-400">Insurance company with 7 million customers
                  across 14
                  countries.</p>
</div>
<div className="shadow-black/30 shrink-0 flex flex-col gap-3 hover:bg-zinc-900/80 transition-colors duration-300 bg-zinc-900/50 w-72 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-lg gap-x-3 gap-y-3">
<div className="flex items-center gap-3">
<span className="text-base font-semibold text-white tracking-tight">Joaquim Chaves</span>
</div>
<p className="leading-snug text-sm font-light text-zinc-400">Hospital and clinical lab chain with 150+
                  locations.
                </p>
</div>
<div className="shadow-black/30 shrink-0 flex flex-col gap-3 hover:bg-zinc-900/80 transition-colors duration-300 bg-zinc-900/50 w-72 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-lg gap-x-3 gap-y-3">
<div className="flex items-center gap-3">
<span className="text-base font-semibold text-white tracking-tight">Bloodflow</span>
</div>
<p className="leading-snug text-sm font-light text-zinc-400">AI-powered peripheral vascular diagnostics.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 shadow-lg shadow-black/30 w-72 shrink-0 flex flex-col gap-3 hover:bg-zinc-900/80 transition-colors duration-300">
<div className="flex items-center gap-3">
<span className="text-base font-semibold tracking-tight text-white">Coalex</span>
</div>
<p className="text-sm text-zinc-400 font-light leading-snug">AI systems for operational decisions.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 shadow-lg shadow-black/30 w-72 shrink-0 flex flex-col gap-3 hover:bg-zinc-900/80 transition-colors duration-300">
<div className="flex items-center gap-3">
<span className="text-base font-semibold tracking-tight text-white">Safaire</span>
</div>
<p className="text-sm text-zinc-400 font-light leading-snug">AI-powered patient safety monitoring.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 shadow-lg shadow-black/30 w-72 shrink-0 flex flex-col gap-3 hover:bg-zinc-900/80 transition-colors duration-300">
<div className="flex items-center gap-3">
<span className="text-base font-semibold tracking-tight text-white">Medify</span>
</div>
<p className="text-sm text-zinc-400 font-light leading-snug">Consent automation for healthcare workflows.
                </p>
</div>
</div>

<div className="flex gap-4 shrink-0 px-2">
<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 shadow-lg shadow-black/30 w-72 shrink-0 flex flex-col gap-3 hover:bg-zinc-900/80 transition-colors duration-300">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<span className="text-base font-semibold text-white tracking-tight">Ciberbit</span>
</div>
<p className="leading-snug text-sm font-light text-zinc-400">EHR present in 400+ units across Europe and
                  Middle
                  East.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 shadow-lg shadow-black/30 w-72 shrink-0 flex flex-col gap-3 hover:bg-zinc-900/80 transition-colors duration-300">
<div className="flex items-center gap-3">
<span className="text-base font-semibold text-white tracking-tight">Fidelidade</span>
</div>
<p className="leading-snug text-sm font-light text-zinc-400">Insurance company with 7 million customers
                  across 14
                  countries.</p>
</div>
<div className="shadow-black/30 shrink-0 flex flex-col gap-3 hover:bg-zinc-900/80 transition-colors duration-300 bg-zinc-900/50 w-72 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-lg gap-x-3 gap-y-3">
<div className="flex items-center gap-3">
<span className="text-base font-semibold text-white tracking-tight">Joaquim Chaves</span>
</div>
<p className="leading-snug text-sm font-light text-zinc-400">Hospital and clinical lab chain with 150+
                  locations.
                </p>
</div>
<div className="shadow-black/30 shrink-0 flex flex-col gap-3 hover:bg-zinc-900/80 transition-colors duration-300 bg-zinc-900/50 w-72 border-white/10 border rounded-2xl pt-5 pr-5 pb-5 pl-5 shadow-lg gap-x-3 gap-y-3">
<div className="flex items-center gap-3">
<span className="text-base font-semibold text-white tracking-tight">Bloodflow</span>
</div>
<p className="leading-snug text-sm font-light text-zinc-400">AI-powered peripheral vascular diagnostics.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 shadow-lg shadow-black/30 w-72 shrink-0 flex flex-col gap-3 hover:bg-zinc-900/80 transition-colors duration-300">
<div className="flex items-center gap-3">
<span className="text-base font-semibold tracking-tight text-white">Coalex</span>
</div>
<p className="text-sm text-zinc-400 font-light leading-snug">AI systems for operational decisions.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 shadow-lg shadow-black/30 w-72 shrink-0 flex flex-col gap-3 hover:bg-zinc-900/80 transition-colors duration-300">
<div className="flex items-center gap-3">
<span className="text-base font-semibold tracking-tight text-white">Safaire</span>
</div>
<p className="text-sm text-zinc-400 font-light leading-snug">AI-powered patient safety monitoring.</p>
</div>
<div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-5 shadow-lg shadow-black/30 w-72 shrink-0 flex flex-col gap-3 hover:bg-zinc-900/80 transition-colors duration-300">
<div className="flex items-center gap-3">
<span className="text-base font-semibold tracking-tight text-white">Medify</span>
</div>
<p className="text-sm text-zinc-400 font-light leading-snug">Consent automation for healthcare workflows.
                </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 md:py-32 w-full pt-24 pr-6 pb-24 pl-6 relative">
<div className="flex flex-col gap-10 animate-on-scroll text-center max-w-4xl mr-auto ml-auto gap-x-10 gap-y-10 animate">
<h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white leading-tight">
        Automated decisions will be questioned.
        They need to be defensible.
      </h2>
<div className="flex flex-col gap-8 text-lg md:text-xl font-light text-zinc-400 leading-relaxed max-w-3xl mx-auto">
<p className="">When high-risk systems act automatically, companies must be able to explain who approved what, under
          which conditions, and why.</p>
<p className="">Humanos lets automated systems verify and request human authorization before acting. When decisions
          are challenged, there’s clear evidence behind them.</p>
</div>
</div>
</section>

<section className="z-20 md:py-32 overflow-hidden bg-zinc-950 w-full border-white/5 border-t pt-24 pb-24 relative">
<div className="max-w-6xl mx-auto px-6 relative z-10">

<div className="relative w-full animate-on-scroll group animate">

<div className="absolute -inset-[1px] bg-gradient-to-b from-white/20 via-white/5 to-transparent rounded-2xl blur-[1px] opacity-50 transition-opacity duration-500 group-hover:opacity-100">
</div>

<div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shadow-[0_0_100px_-20px_rgba(0,0,0,0.5)] aspect-video ring-1 ring-white/5">
<div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-0">
<svg className="animate-spin text-zinc-700 w-8 h-8" data-icon-set="lucide" data-lucide="loader" height="32" style={{}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4m4.2 1.8l2.9-2.9M18 12h4m-5.8 4.2l2.9 2.9M12 18v4m-7.1-2.9l2.9-2.9M2 12h4M4.9 4.9l2.9 2.9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<iframe allow="autoplay; encrypted-media" allowfullscreen="" allowtransparency="" className="w-full h-full relative z-10" loading="lazy" src="https://www.tella.tv/video/humanos-api-for-verified-human-intent-901x/embed?b=0&amp;title=0&amp;a=1&amp;loop=0&amp;auto_play=0&amp;t=0&amp;muted=0">
</iframe>
</div>

<div className="absolute -left-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-20 hidden lg:flex">
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
<div className="absolute -right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 opacity-20 hidden lg:flex">
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-12 bg-gradient-to-b from-white to-transparent rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
</div>
</div>
</div>
</section>
<section className="md:pb-10 md:pt-10 z-20 bg-zinc-950 w-full border-white/5 border-t pt-10 pb-10 relative" id="product">

<style>
      nav.fixed>div {
        overflow: visible !important;
        width: max-content !important;
        max-width: 90vw !important;
      }
    </style>
<div className="flex flex-col gap-16 md:gap-12 lg:gap-24 animate-on-scroll md:py-16 lg:py-24 animate w-full max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6 relative gap-x-16 gap-y-16">
<div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden mix-blend-screen">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-900/5 rounded-full blur-[120px] opacity-10">
</div>
</div>
<div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-8 relative">
<h2 className="lg:whitespace-nowrap lg:text-8xl md:text-6xl leading-[0.9] text-5xl text-white tracking-tighter font-serif">One
          API
          for human decisions.</h2>
<div className="flex flex-col gap-4 items-center mt-2 max-w-2xl">
<p className="md:text-xl leading-relaxed text-lg font-light text-zinc-400 tracking-tight">Unlock safe automation
            by
            making human decisions machine-verifiable. Systems can check whether approval exists and what it allows
            before
            acting. If it's missing, they can request it.</p>
</div>
</div>
<div className="w-full border-white/10 border-t pt-10 relative">
<div className="absolute -top-3 left-0 bg-zinc-950 pr-4">
<span className="text-[10px] font-mono tracking-[0.2em] text-zinc-600 uppercase font-medium">CAPTURE · ISSUE · ENFORCE</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 mt-12">
<div className="flex flex-col gap-5 group">
<span className="text-lg text-white font-mono"> 1 – Capture the decision</span>
<div className="flex flex-col gap-4">
<p className="leading-relaxed text-base font-light text-zinc-300">Collect new approvals or ingest existing
                ones
                from any system. What matters is the decision, not the artifact.</p>
<p className="leading-relaxed text-base italic text-zinc-300 font-serif">The source and format don't matter.
                Log, payment, app, PDF, form, signature, message, email, etc.</p>
</div>
</div>
<div className="flex flex-col gap-5 group">
<span className="text-lg text-white font-mono">2 – Turn it into a rule</span>
<div className="flex flex-col gap-4">
<p className="leading-relaxed text-base font-light text-zinc-300">Convert the decision into machine-verifiable
                authorization, ready to be checked before the action.</p>
<p className="leading-relaxed text-base italic text-zinc-200 font-serif">This defines what is allowed, under
                which conditions.</p>
</div>
</div>
<div className="flex flex-col gap-5 group">
<span className="text-lg text-white font-mono">3 – Let any system verify and act</span>
<div className="flex flex-col gap-4">
<p className="leading-relaxed text-base font-light text-zinc-300">Any service can verify the authorization
                once
                issued. Reuse it across workflows, teams, and partners.</p>
<p className="leading-relaxed text-base italic text-zinc-200 font-serif">Auto compliance. No re-approval. No
                duplication. No ambiguity.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col bg-zinc-950 w-full z-20 border-white/5 border-t pt-0 pb-0 relative">
<div className="w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="animate-on-scroll flex flex-col gap-10 w-full animate relative py-12">

<div className="w-full text-center px-6">
<p className="text-lg md:text-xl font-light text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Humanos turns a human approval into a verifiable mandate, so any system can request and verify it before
            acting.
          </p>
</div>

<div className="overflow-hidden md:p-12 min-h-[500px] flex bg-zinc-900/10 w-full border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative items-center justify-center">
<style>
            @keyframes mandate-details-reveal {

              0%,
              12% {
                opacity: 0;
                transform: translateY(8px);
              }

              20%,
              88% {
                opacity: 1;
                transform: translateY(0);
              }

              95%,
              100% {
                opacity: 0;
                transform: translateY(8px);
              }
            }

            .anim-mandate-details {
              animation: mandate-details-reveal 12s cubic-bezier(0.16, 1, 0.3, 1) infinite;
            }

            @keyframes query-pulse {
              0% {
                stroke-dashoffset: 100;
                opacity: 0;
              }

              15% {
                opacity: 1;
              }

              85% {
                opacity: 1;
              }

              100% {
                stroke-dashoffset: 0;
                opacity: 0;
              }
            }

            .anim-query-pulse {
              stroke-dasharray: 12 100;
              animation: query-pulse 3s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
          </style>
<div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none">
</div>
<div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 relative z-20 h-full items-center">

<div className="flex flex-col items-center justify-center relative">
<div className="anim-human flex flex-col items-center gap-4">
<div className="w-16 h-16 rounded-full bg-zinc-900 border border-current flex items-center justify-center shadow-lg relative z-20">
<svg className="" data-icon-set="lucide" data-lucide="user" height="32" style={{}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
</div>
<div className="flex flex-col items-center text-center">
<span className="text-sm font-semibold tracking-tight text-current uppercase font-mono">Human approval</span>
</div>
</div>
</div>

<div className="flex flex-col md:my-0 mt-8 mb-8 relative items-center justify-center">
<div className="relative flex flex-col items-center w-full min-w-[220px]">

<div className="w-full rounded-xl bg-zinc-950 border border-white/5 p-[3px] relative z-20 shadow-2xl">
<div className="w-full h-full rounded-lg border border-white/20 bg-zinc-950 overflow-hidden flex flex-col items-center gap-3 p-5">

<div className="flex flex-col items-center gap-2 z-10 w-full">
<div className="w-10 h-10 flex items-center justify-center text-zinc-200"><svg className="" data-icon-set="lucide" data-lucide="file-check" height="1em" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M9 15l2 2l4-4"></path></g></svg></div>
<div className="flex flex-col items-center text-center gap-0.5">
<span className="text-sm font-semibold tracking-tight text-white uppercase font-mono">Mandate</span>
<span className="text-[10px] text-zinc-500 font-mono tracking-tight font-medium">Verifiable proof of intent</span>
</div>
</div>

<div className="anim-mandate-details w-full flex flex-col gap-1.5 pt-3 mt-1 border-t border-zinc-800/50 text-[10px] font-mono z-10">
<div className="flex justify-between items-center gap-4">
<span className="text-zinc-600 font-semibold">Who</span>
<span className="text-zinc-400">subject → receiver</span>
</div>
<div className="flex justify-between items-center gap-4">
<span className="text-zinc-600 font-semibold">What</span>
<span className="text-zinc-400">permitted action</span>
</div>
<div className="flex justify-between items-center gap-4">
<span className="text-zinc-600 font-semibold">Rules</span>
<span className="text-zinc-400">scope + limits</span>
</div>
<div className="flex justify-between items-center gap-4">
<span className="text-zinc-600 font-semibold">Expires</span>
<span className="text-zinc-400">policy-defined</span>
</div>
<div className="flex justify-between items-center gap-4">
<span className="text-zinc-600 font-semibold">Proof</span>
<span className="text-emerald-500/80 font-medium">encrypted</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden md:flex flex-col items-end justify-center gap-6 relative h-full">
<div className="flex gap-3 anim-sys-desktop z-20 bg-zinc-900 w-full max-w-[240px] border-white/5 border rounded-lg p-4 items-center shadow-lg hover:border-white/10 transition-colors">
<svg className="" data-icon-set="lucide" data-lucide="banknote" height="1em" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></g></svg>
<span className="text-xs font-semibold tracking-tight">Insurance payout</span>
</div>
<div className="flex gap-3 anim-sys-desktop z-20 bg-zinc-900 w-full max-w-[240px] border-white/5 border rounded-lg p-4 items-center shadow-lg hover:border-white/10 transition-colors">
<svg className="" data-icon-set="lucide" data-lucide="activity" height="1em" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xs font-semibold tracking-tight">Medical access</span>
</div>
<div className="flex gap-3 anim-sys-desktop z-20 bg-zinc-900 w-full max-w-[240px] border-white/5 border rounded-lg p-4 items-center shadow-lg hover:border-white/10 transition-colors">
<svg className="" data-icon-set="lucide" data-lucide="brain" height="1em" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 18V5m3 8a4.17 4.17 0 0 1-3-4a4.17 4.17 0 0 1-3 4m8.598-6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></g></svg>
<span className="text-xs font-semibold tracking-tight">AI decision</span>
</div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none z-10 hidden md:block" xmlns="http://www.w3.org/2000/svg">

<line opacity="0.3" stroke="#3f3f46" stroke-dasharray="4 4" strokeWidth="1" x1="16.66%" x2="50%" y1="50%" y2="50%"></line>


<line className="anim-query-pulse" pathlength="100" stroke="#3b82f6" strokeWidth="1.5" style={{strokeLinecap: 'round', opacity: '0'}} x1="78%" x2="50%" y1="28%" y2="50%"></line>
<line className="anim-query-pulse" pathlength="100" stroke="#3b82f6" strokeWidth="1.5" style={{strokeLinecap: 'round', opacity: '0', animationDelay: '1s'}} x1="78%" x2="50%" y1="50%" y2="50%"></line>
<line className="anim-query-pulse" pathlength="100" stroke="#3b82f6" strokeWidth="1.5" style={{strokeLinecap: 'round', opacity: '0', animationDelay: '2s'}} x1="78%" x2="50%" y1="72%" y2="50%"></line>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col z-20 bg-zinc-950 w-full border-white/5 border-t mt-32 pt-32 pb-32 relative md:mt-0" id="features">
<div className="w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="animate-on-scroll animate text-center max-w-4xl mx-auto mb-20">
<h2 className="md:text-[4.05rem] leading-tight text-[2.7rem] italic text-white tracking-tighter font-serif mb-8">
          Human approval infrastructure
          <span className="not-italic font-normal text-zinc-500">for systems that can't afford mistakes.</span>
</h2>
<p className="leading-relaxed text-lg md:text-xl font-light text-zinc-500 max-w-2xl mx-auto">
          Humanos lets automated systems verify what a human allowed, before acting, without custom logic, re-approval,
          or system coupling.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full gap-x-6 gap-y-6">

<div className="group relative flex flex-col justify-start rounded-2xl bg-zinc-900/30 border border-white/5 p-6 md:p-8 hover:bg-zinc-900/50 transition-colors duration-300">
<div className="rounded-xl bg-black/40 border border-white/5 h-48 w-full mb-8 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-50">
</div>
<div className="relative w-40 h-24 bg-zinc-900/80 rounded-lg border border-white/10 p-3 flex flex-col justify-between shadow-2xl backdrop-blur-sm">
<div className="flex gap-1.5">
<div className="w-1 h-1 rounded-full bg-zinc-600"></div>
<div className="w-1 h-1 rounded-full bg-zinc-600"></div>
</div>
<div className="space-y-2 w-full">
<div className="w-2/3 h-0.5 bg-zinc-700 rounded-full"></div>
<div className="w-1/2 h-0.5 bg-zinc-700 rounded-full"></div>
</div>
<div className="mt-auto flex justify-between items-center pt-2">
<span className="text-[6px] font-mono text-zinc-600 uppercase tracking-wider">Status</span>
<span className="text-[8px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded flex items-center gap-1">
<svg className="" data-icon-set="lucide" data-lucide="check" height="8" style={{}} viewbox="0 0 24 24" width="8" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> VALID
                    </span>
</div>
</div>
</div>
<div className="flex items-center gap-3 mb-4">
<span className="text-[10px] font-mono font-medium text-zinc-500 bg-white/5 border border-white/5 px-1.5 py-1 rounded">01</span>
<svg className="text-zinc-500" data-icon-set="lucide" data-lucide="scan" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight">Systems can verify approval
            automatically</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">No human-in-the-loop at runtime. Every decision is
            issued in a format machines can check instantly.</p>
</div>

<div className="group relative flex flex-col justify-start rounded-2xl bg-zinc-900/30 border border-white/5 p-6 md:p-8 hover:bg-zinc-900/50 transition-colors duration-300">
<div className="rounded-xl bg-black/40 border border-white/5 h-48 w-full mb-8 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-50">
</div>
<div className="relative flex items-center justify-center gap-2">
<div className="w-8 h-8 rounded border border-white/5 bg-white/5 flex items-center justify-center opacity-50">
<div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
</div>
<div className="w-1 relative">
<div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-zinc-800"></div>
</div>
<div className="w-10 h-10 rounded-lg border border-white/10 bg-zinc-900 flex items-center justify-center shadow-xl z-10">
<svg className="text-zinc-400" data-icon-set="lucide" data-lucide="copy" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></g></svg>
</div>
<div className="w-1 relative">
<div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-4 h-[1px] bg-zinc-800"></div>
</div>
<div className="w-8 h-8 rounded border border-white/5 bg-white/5 flex items-center justify-center opacity-50">
<div className="w-1 h-1 bg-zinc-600 rounded-full"></div>
</div>
</div>
</div>
<div className="flex items-center gap-3 mb-4">
<span className="text-[10px] font-mono font-medium text-zinc-500 bg-white/5 border border-white/5 px-1.5 py-1 rounded">02</span>
<svg className="text-zinc-500" data-icon-set="lucide" data-lucide="repeat" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m17 2l4 4l-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4l4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></g></svg>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight">Reuse approvals across workflows,
            systems and partners</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Approve once. Use everywhere. The same
            authorization works across teams, tools, and external systems.</p>
</div>

<div className="group relative flex flex-col justify-start rounded-2xl bg-zinc-900/30 border border-white/5 p-6 md:p-8 hover:bg-zinc-900/50 transition-colors duration-300">
<div className="rounded-xl bg-black/40 border border-white/5 h-48 w-full mb-8 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-50">
</div>
<div className="relative w-48 bg-zinc-950 border border-white/10 rounded-lg p-3 font-mono text-[8px] leading-relaxed text-zinc-400 shadow-2xl backdrop-blur-sm">
<div className="flex items-center gap-1.5 mb-2 opacity-50">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
<span className="text-zinc-500">audit_log.json</span>
</div>
<div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
<span className="text-purple-400">id</span><span className="text-zinc-300">"req_9a2f"</span>
<span className="text-purple-400">actor</span><span className="text-zinc-300">"alice@co"</span>
<span className="text-purple-400">status</span><span className="text-emerald-400">"VERIFIED"</span>
</div>
<div className="absolute -bottom-3 -right-3 w-8 h-8 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center shadow-lg">
<svg className="text-zinc-500" data-icon-set="lucide" data-lucide="search" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
</div>
</div>
</div>
<div className="flex items-center gap-3 mb-4">
<span className="text-[10px] font-mono font-medium text-zinc-500 bg-white/5 border border-white/5 px-1.5 py-1 rounded">03</span>
<svg className="text-zinc-500" data-icon-set="lucide" data-lucide="globe" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight">No trust in internal logs or
            vendors</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Any system can independently verify approval
            without relying on your database or another company's logs.</p>
</div>

<div className="group relative flex flex-col justify-start rounded-2xl bg-zinc-900/30 border border-white/5 p-6 md:p-8 hover:bg-zinc-900/50 transition-colors duration-300">
<div className="rounded-xl bg-black/40 border border-white/5 h-48 w-full mb-8 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-50">
</div>
<div className="relative w-40 h-24 bg-zinc-900/80 rounded-lg border border-white/10 p-3 flex flex-col shadow-2xl backdrop-blur-sm">
<div className="flex gap-2 mb-4">
<div className="w-8 h-1 bg-zinc-700 rounded-full"></div>
<div className="ml-auto w-3 h-1 bg-zinc-700 rounded-full"></div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-[2px] border border-blue-500 bg-blue-500/20"></div>
<div className="w-16 h-1 bg-zinc-700 rounded-full"></div>
</div>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-[2px] border border-zinc-700 bg-transparent"></div>
<div className="w-12 h-1 bg-zinc-700 rounded-full"></div>
</div>
</div>
<div className="mt-auto ml-auto">
<span className="text-[8px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded flex items-center gap-1">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div> ACTIVE
                    </span>
</div>
</div>
</div>
<div className="flex items-center gap-3 mb-4">
<span className="text-[10px] font-mono font-medium text-zinc-500 bg-white/5 border border-white/5 px-1.5 py-1 rounded">04</span>
<svg className="text-zinc-500" data-icon-set="lucide" data-lucide="maximize-2" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6m0-6l-7 7M3 21l7-7m-1 7H3v-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight">Approvals tied to real-world
            intent</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Every approval is scoped to a specific action,
            context, time window, and limit. No blanket permissions. No implied access. No surprises at runtime.</p>
</div>

<div className="group relative flex flex-col justify-start rounded-2xl bg-zinc-900/30 border border-white/5 p-6 md:p-8 hover:bg-zinc-900/50 transition-colors duration-300">
<div className="rounded-xl bg-black/40 border border-white/5 h-48 w-full mb-8 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-50">
</div>
<div className="relative flex flex-col items-center justify-center">
<span className="absolute -top-6 text-[8px] text-emerald-500 font-mono bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">ENCRYPTED</span>
<div className="w-px h-6 bg-emerald-500/20 absolute -top-4"></div>
<div className="w-12 h-12 rounded-xl bg-zinc-900 border border-white/10 flex items-center justify-center relative z-10 shadow-xl">
<svg className="text-zinc-400" data-icon-set="lucide" data-lucide="lock" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
</div>
<div className="w-px h-4 bg-white/10 absolute -bottom-2"></div>
<span className="absolute -bottom-6 text-[8px] text-zinc-600 font-mono bg-black/50 px-1.5 py-0.5 rounded border border-white/5">SHA-256</span>
</div>
</div>
<div className="flex items-center gap-3 mb-4">
<span className="text-[10px] font-mono font-medium text-zinc-500 bg-white/5 border border-white/5 px-1.5 py-1 rounded">05</span>
<svg className="text-zinc-500" data-icon-set="lucide" data-lucide="shield-check" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight">Approval records you can prove in
            court</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Every approval is cryptographically sealed and
            independently verifiable. If someone questions what was authorized, you can prove it, without trusting
            internal logs or vendors.</p>
</div>

<div className="group relative flex flex-col justify-start rounded-2xl bg-zinc-900/30 border border-white/5 p-6 md:p-8 hover:bg-zinc-900/50 transition-colors duration-300">
<div className="rounded-xl bg-black/40 border border-white/5 h-48 w-full mb-8 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-50">
</div>
<div className="relative w-52 bg-zinc-950 border border-white/10 rounded-lg p-3 font-mono text-[9px] leading-relaxed shadow-2xl backdrop-blur-sm">
<div className="flex gap-1 mb-2 opacity-50">
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
<div className="w-1.5 h-1.5 rounded-full bg-zinc-700"></div>
</div>
<div className="mb-1"><span className="text-purple-400">await</span>
<span className="text-white">humanos.check(<span className="text-orange-300">auth</span>)</span>
</div>
<div className="text-emerald-500 opacity-90">&gt;&gt; Verified (20ms)</div>
<div className="text-zinc-600">&gt;&gt; Executing...</div>
</div>
</div>
<div className="flex items-center gap-3 mb-4">
<span className="text-[10px] font-mono font-medium text-zinc-500 bg-white/5 border border-white/5 px-1.5 py-1 rounded">06</span>
<svg className="text-zinc-500" data-icon-set="lucide" data-lucide="play-circle" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-lg md:text-xl font-semibold text-white mb-3 tracking-tight">Checked before execution</h3>
<p className="text-sm text-zinc-400 leading-relaxed font-light">Systems can verify whether approval exists and
            what it allows before acting. If approval is missing or insufficient, systems are informed and can request
            it automatically via the Humanos API.</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col z-20 md:mt-40 w-full max-w-7xl mt-32 mx-auto px-6 relative pb-40" id="workflow">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 animate-on-scroll animate w-full gap-x-12 gap-y-12">

<div className="flex flex-col justify-center">
<div className="flex items-center gap-3 mb-8">
<svg className="text-white" data-icon-set="lucide" data-lucide="shield-check" height="20" style={{}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-xs font-mono tracking-[0.2em] uppercase text-white font-semibold">VIA PROTOCOL</span>
</div>
<h2 className="text-5xl md:text-7xl leading-[0.9] tracking-tight font-serif mb-8 text-white">Authorization
          infrastructure, <span className="text-zinc-700 block">without black boxes.</span></h2>
<p className="text-xl text-zinc-400 font-light mb-12 leading-relaxed tracking-tight">VIA is the open standard for
          transparent human authorization in automated systems.</p>
<div className="relative pl-6 border-l border-white/10 mb-16">
<p className="text-base text-zinc-500 font-light leading-relaxed">It defines how systems request, prove, and check
            authorization under explicit conditions. Authorization is transparent by design. Any system can
            independently verify what was allowed.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
<div className="flex flex-col gap-3">
<svg className="text-white mb-1" data-icon-set="lucide" data-lucide="settings-2" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 17H5M19 7h-9"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></g></svg>
<h3 className="text-base font-semibold text-white tracking-tight">Machine-verifiable</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Every authorization can be checked by any
              system, automatically.</p>
</div>
<div className="flex flex-col gap-3">
<svg className="text-white mb-1" data-icon-set="lucide" data-lucide="sliders-horizontal" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3m9 14H3M14 3v4m2 10v4m5-9h-9m9 7h-5m5-14h-7m-6 5v4m0-2H3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-base font-semibold text-white tracking-tight">Explicit conditions</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Permissions define what is allowed, by whom, and
              for how long.</p>
</div>
<div className="flex flex-col gap-3">
<svg className="text-white mb-1" data-icon-set="lucide" data-lucide="shield-check" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<h3 className="text-base font-semibold text-white tracking-tight">Independent verification</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">No need to trust internal logs or the issuing
              system.</p>
</div>
<div className="flex flex-col gap-3">
<svg className="text-white mb-1" data-icon-set="lucide" data-lucide="globe" height="24" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
<h3 className="text-base font-semibold text-white tracking-tight">Open by design</h3>
<p className="text-sm text-zinc-500 leading-relaxed font-light">Built on open standards. Not tied to a single
              vendor.</p>
</div>
</div>
</div>

<div className="flex flex-col mt-12 lg:mt-0">
<div className="w-full rounded-xl bg-black border border-white/10 relative shadow-2xl overflow-hidden">

<div className="flex border-white/5 border-b pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-xs font-medium text-zinc-400">VIA Protocol Verification</span>
</div>
<div className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-zinc-500 border border-white/5">Net:
              v1.0.4</div>
</div>

<div className="md:p-8 pt-6 pr-6 pb-6 pl-6 relative">

<div className="absolute left-[44px] md:left-[52px] top-8 bottom-8 w-px bg-zinc-800"></div>

<div className="relative z-10 flex gap-6 mb-8">
<div className="shrink-0 w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-zinc-500 shadow-lg">
<svg className="" data-icon-set="lucide" data-lucide="bot" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 mb-2 font-semibold">Requesting
                  System</div>
<div className="bg-zinc-900 border border-white/5 rounded-lg overflow-hidden">
<div className="px-4 py-2 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
<span className="text-xs font-medium text-zinc-300">Requests permission</span>
<span className="text-[10px] font-mono text-zinc-600">0.04s</span>
</div>
<div className="p-4 font-mono text-[10px] space-y-2 bg-zinc-950/50">
<div className="flex gap-3">
<span className="text-purple-400">OP</span>
<span className="-3">
<span className="text-blue-400">PROOF</span>
<span className="text-zinc-400">Proof of human approval</span>
</span>
</div>
</div>
</div>
</div>
</div>

<div className="relative z-10 flex gap-6 mb-8">
<div className="shrink-0 w-10 h-10 rounded-lg bg-zinc-900 border border-blue-500/20 flex items-center justify-center text-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
<svg className="" data-icon-set="lucide" data-lucide="shield" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-[10px] uppercase font-mono tracking-wider text-blue-500 mb-2 font-semibold">
                  Authorization Check</div>
<div className="bg-zinc-900/80 border border-blue-900/30 rounded-lg overflow-hidden relative">
<div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
<div className="px-4 py-2 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
<span className="text-xs font-medium text-zinc-200">Checking conditions00/10 text-emerald-500 text-[10px] font-medium border border-emerald-500/20"&gt;Approved</span>
</div>
<div className="p-4">
<div className="bg-black/40 border border-white/5 rounded p-3 mb-1">
<div className="flex items-center gap-2 mb-3">
<svg className="text-zinc-500" data-icon-set="lucide" data-lucide="file-text" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
<span className="text-xs text-zinc-300 font-medium">Authorization: "Allow high-value transfer"</span>
</div>
<div className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-1 text-[10px] font-mono pl-5">
<div className="text-zinc-600">Limit</div>
<div className="text-zinc-300 text-right">Up to $50,000</div>
<div className="text-zinc-600">Valid for</div>
<div className="text-zinc-300 text-right">60 minutes</div>
<div className="text-zinc-600">Scope</div>
<div className="text-zinc-300 text-right">Finance operations</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="z-10 flex gap-6 relative gap-x-6 gap-y-6">
<div className="absolute left-5 -translate-x-1/2 top-0 w-4 h-[200%] bg-black -z-10"></div>
<div className="shrink-0 w-10 h-10 rounded-lg bg-zinc-900 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
<svg className="" data-icon-set="lucide" data-lucide="server" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><path d="M6 6h.01M6 18h.01"></path></g></svg>
</div>
<div className="flex-1 min-w-0">
<div className="text-[10px] uppercase font-mono tracking-wider text-emerald-500 mb-2 font-semibold">
                  Executing System</div>
<div className="bg-zinc-900/80 border border-emerald-900/30 rounded-lg overflow-hidden flex items-center justify-between p-1 pl-4 pr-1">
<span className="text-xs font-medium text-zinc-200">Permission confirmed</span>
<div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-950/30 border border-emerald-500/20 rounded text-[10px] font-semibold text-emerald-500 uppercase tracking-wide">
<svg className="" data-icon-set="lucide" data-lucide="check" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Action Completed
                  </div>
</div>
</div>
</div>
</div>
</div>
<div className="flex flex-col gap-4 mt-4">
<div className="space-y-4 text-sm font-light text-zinc-500 leading-relaxed">
</div>
</div>
</div>
</div>
</section>
<section className="flex flex-col md:py-32 z-20 bg-zinc-950 w-full border-white/5 border-t pt-24 pb-24 relative" id="pricing">

<div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none -z-10">
</div>
<div className="w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="animate-on-scroll text-center max-w-3xl mx-auto mb-20 animate">
<h2 className="md:text-6xl leading-[0.95] text-4xl text-white tracking-tighter font-serif mb-6 lg:whitespace-nowrap">
          Predictable pricing for infinite scale
        </h2>
<p className="leading-relaxed text-lg md:text-xl font-light text-zinc-500 max-w-2xl mx-auto">
          Pay for verification when systems act. Pay for collection only when a new human decision is required.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full animate-on-scroll items-start animate">

<div className="group flex flex-col rounded-2xl bg-zinc-900/20 border border-white/5 p-8 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300 relative overflow-hidden h-full">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="flex flex-col gap-2 mb-6 relative z-10">
<span className="text-[10px] font-mono font-medium text-zinc-500 uppercase tracking-widest">PAY-AS-YOU-GO</span>
<div className="flex items-baseline gap-1.5 mt-2">
<span className="text-4xl md:text-5xl font-semibold text-white tracking-tight">$0.0099</span>
<span className="text-sm text-zinc-500 font-light">per verification</span>
</div>
</div>
<div className="text-sm text-zinc-400 font-light leading-relaxed mb-8 min-h-[60px] relative z-10">
<p className="mb-2">Each time a system checks whether an action is allowed.</p>
<p className="opacity-70">Authorizations are reusable across workflows, teams, and partners.</p>
</div>
<button className="hover:bg-zinc-200 transition-colors shadow-white/5 cursor-pointer text-sm font-semibold text-zinc-950 bg-white w-full z-10 rounded-full mb-10 pt-3 pr-4 pb-3 pl-4 relative shadow-lg" onclick="window.open('https://app.humanos.id/sign-up', '_blank')" role="button">
    Start building
</button>
<div className="space-y-4 relative z-10">
<div className="flex gap-3 items-start">
<svg className="text-emerald-500 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Machine-verifiable authorizations</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-emerald-500 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Independent verification (no system-to-system coupling)</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-emerald-500 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Reusable across systems and partners</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-emerald-500 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Usage-based, no minimums</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-emerald-500 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Designed for agentic and automated workflows</span>
</div>
</div>
</div>

<div className="group flex flex-col rounded-2xl bg-zinc-900/20 border border-white/5 p-8 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300 relative overflow-hidden h-full">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="flex flex-col gap-2 mb-6 relative z-10">
<span className="text-[10px] font-mono font-medium text-emerald-500 uppercase tracking-widest">PRO</span>
<div className="flex items-baseline gap-1.5 mt-2">
<span className="text-4xl md:text-5xl font-semibold text-white tracking-tight">$99</span>
<span className="text-sm text-zinc-500 font-light">/ month</span>
</div>
</div>
<div className="text-sm text-zinc-400 font-light leading-relaxed mb-8 min-h-[60px] relative z-10">
<p className="">For teams running production workflows in regulated or high-risk environments.</p>
</div>
<button className="w-full py-3 px-4 bg-zinc-800 text-zinc-400 border border-white/5 cursor-not-allowed rounded-full text-sm font-medium mb-10 relative z-10 flex items-center justify-center gap-2">
                    Coming soon
                </button>
<div className="space-y-4 relative z-10 mb-8">
<div className="flex gap-3 items-start">
<svg className="text-zinc-600 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Included verification allowance (monthly)</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-zinc-600 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Discounted per-verification pricing beyond allowance</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-zinc-600 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Teams &amp; groups for access control</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-zinc-600 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Extended data retention (5 years)</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-zinc-600 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Security &amp; compliance certifications</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-zinc-600 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Production + sandbox environments</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-zinc-600 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Priority support</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-zinc-600 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Audit-ready exports and reporting</span>
</div>
</div>
<p className="mt-auto text-xs text-zinc-600 font-light leading-relaxed border-t border-white/5 pt-4">
            Designed for early production as organizations scale automation.
          </p>
</div>

<div className="group flex flex-col rounded-2xl bg-zinc-900/20 border border-white/5 p-8 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-300 relative overflow-hidden h-full">
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="flex flex-col gap-2 mb-6 relative z-10">
<span className="text-[10px] font-mono font-medium text-purple-400 uppercase tracking-widest">ENTERPRISE</span>
<div className="flex items-baseline gap-1.5 mt-2">
<span className="text-4xl md:text-5xl font-semibold text-white tracking-tight">Custom</span>
</div>
</div>
<div className="text-sm text-zinc-400 font-light leading-relaxed mb-8 min-h-[60px] relative z-10">
<p className="">For large-scale, multi-entity, and heavily regulated deployments.</p>
</div>
<button className="hover:bg-white/5 transition-colors z-10 cursor-pointer text-sm font-medium text-white bg-transparent w-full border-white/10 border rounded-full mb-10 pt-3 pr-4 pb-3 pl-4 relative" onclick="document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });" role="button">
    Contact sales
</button>
<div className="space-y-4 relative z-10">
<div className="flex gap-3 items-start">
<svg className="text-purple-400 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Contracted verification volumes and volume-based pricing</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-purple-400 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Custom approval collection pricing by channel and geography</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-purple-400 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Advanced compliance and regulatory support</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-purple-400 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Legal-grade audit trails and evidentiary exports</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-purple-400 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Dedicated infrastructure and regional deployment options</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-purple-400 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Custom SLAs and uptime guarantees</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-purple-400 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Extended or bespoke data retention policies</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-purple-400 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Multi-entity and multi-tenant support</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-purple-400 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Fine-grained access controls and policy management</span>
</div>
<div className="flex gap-3 items-start">
<svg className="text-purple-400 shrink-0 mt-0.5" data-icon-set="lucide" data-lucide="check" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-400 font-light leading-snug">Procurement support, vendor security reviews, and DPAs</span>
</div>
</div>
</div>
</div>

<div className="mt-12 md:mt-16 w-full animate-on-scroll">
<div className="relative w-full rounded-2xl border border-white/5 bg-zinc-900/10 p-8 md:p-12 overflow-hidden flex flex-col md:flex-row gap-10 md:justify-between items-start md:items-center">
<div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-30 pointer-events-none">
</div>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-zinc-950/80 pointer-events-none">
</div>
<div className="relative z-10 flex flex-col gap-4 max-w-xl">
<h3 className="md:text-3xl text-2xl text-white tracking-tight font-serif lg:whitespace-nowrap">When approval
              doesn’t exist, <span className="text-zinc-500">Humanos collects it.</span></h3>
<p className="text-zinc-400 font-light leading-relaxed">
              Some actions require a new human decision. Humanos securely requests and issues an authorization when
              needed.
            </p>
</div>
<div className="relative z-10 flex flex-col md:items-end gap-2 md:text-right shrink-0">
<div className="flex flex-col">
<span className="text-sm text-zinc-500 font-light mb-1">Approval collection</span>
<div className="flex items-baseline gap-2 md:justify-end">
<span className="text-sm text-zinc-400 font-light">From</span>
<span className="text-3xl font-semibold text-white tracking-tight">$0.10</span>
<span className="text-sm text-zinc-400 font-light">per authorization</span>
</div>
</div>
<div className="h-px w-full bg-white/10 my-2"></div>
<p className="text-xs text-zinc-500 font-mono">Price varies by channel and approval method.</p>
<p className="text-xs text-emerald-500 font-medium flex items-center gap-1.5 mt-1 md:justify-end">
<svg className="" data-icon-set="lucide" data-lucide="repeat" height="12" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m17 2l4 4l-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4l4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></g></svg> Collected once. Reused indefinitely.
            </p>
</div>
</div>
</div>
</div>
</section>
<section className="flex flex-col md:py-32 bg-zinc-950 w-full z-20 border-white/5 border-t pt-24 pb-24 relative" id="contact">

<div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none -z-10">
</div>
<div className="w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 gap-x-16 gap-y-16 items-start">

<div className="flex flex-col gap-8 animate-on-scroll">
<div className="flex flex-col gap-6">
<span className="text-xs font-mono font-medium text-emerald-500 uppercase tracking-widest">CONTACT SALES</span>
<h2 className="md:text-6xl leading-[0.95] text-4xl text-white tracking-tighter font-serif">
              Make automated decisions defensible.
            </h2>
<div className="flex flex-col gap-4">
<p className="leading-relaxed text-lg text-zinc-400 font-light max-w-md">
                We help teams deploy human authorization as infrastructure so automated systems can act safely at scale
                under explicit human intent.
              </p>
<p className="leading-relaxed text-lg text-zinc-400 font-light max-w-md">
                Talk to us about production deployments, regulated workflows, approval collection at scale, or custom
                pricing.
              </p>
</div>
</div>
<div className="flex flex-col gap-6 mt-4">
<div className="flex gap-4 items-start group">
<div className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900/50 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
<svg className="text-zinc-400 group-hover:text-white transition-colors" data-icon-set="lucide" data-lucide="shield-check" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-white font-medium text-sm">Authorization at scale</h3>
<p className="text-zinc-500 text-sm font-light">
                  Design approval and verification flows that work across systems, agents, and partners.
                </p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900/50 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
<svg className="text-zinc-400 group-hover:text-white transition-colors" data-icon-set="lucide" data-lucide="server" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><path d="M6 6h.01M6 18h.01"></path></g></svg>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-white font-medium text-sm">Regulated environments</h3>
<p className="text-zinc-500 text-sm font-light">
                  Audit-ready authorization records with long-term retention and independent verification.
                </p>
</div>
</div>
<div className="flex gap-4 items-start group">
<div className="w-10 h-10 rounded-full border border-white/10 bg-zinc-900/50 flex items-center justify-center shrink-0 group-hover:border-white/20 transition-colors">
<svg className="text-zinc-400 group-hover:text-white transition-colors" data-icon-set="lucide" data-lucide="code-2" height="18" style={{}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex flex-col gap-1">
<h3 className="text-white font-medium text-sm">Complex integrations</h3>
<p className="text-zinc-500 text-sm font-light">
                  Work directly with our engineers to integrate Humanos into existing stacks, workflows, and decision
                  engines.
                </p>
</div>
</div>
</div>
<div className="mt-8 pt-8 border-t border-white/5">
<p className="text-zinc-500 text-sm font-light mb-2">Prefer email?</p>
<a className="hover:text-zinc-300 transition-colors flex items-center gap-2 font-medium text-white" href="mailto:pedro@humanos.tech">
              pedro@humanos.tech
            </a>
</div>
</div>

<div className="animate-on-scroll w-full relative" style={{transitionDelay: '100ms'}}>
<div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none">
</div>
<div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-500/5 rounded-full blur-[80px] pointer-events-none">
</div>

<form action="https://formspree.io/f/xnjjakbe" className="z-10 md:p-8 overflow-hidden bg-zinc-900/20 border-white/5 border rounded-2xl pt-6 pr-6 pb-6 pl-6 relative backdrop-blur-sm" id="contact-sales-form" method="POST">
<input name="_subject" type="hidden" value="Humanos - Contact Request"/>
<input name="_replyto" type="hidden" value=""/>
<div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none"></div>
<div className="grid grid-cols-2 gap-4 mb-4 relative z-10">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-500 ml-1">First name</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all hover:border-white/15" name="firstName" placeholder="Jane" required="" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-500 ml-1">Last name</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all hover:border-white/15" name="lastName" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="flex flex-col gap-1.5 mb-4 relative z-10">
<label className="text-xs font-medium text-zinc-500 ml-1">Work Email</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all hover:border-white/15" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div className="flex flex-col gap-1.5 mb-4 relative z-10">
<label className="text-xs font-medium text-zinc-500 ml-1">Company</label>
<input className="w-full bg-zinc-950/50 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-zinc-700 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all hover:border-white/15" name="company" placeholder="Acme Inc." type="text"/>
</div>
<div className="flex flex-col gap-1.5 mb-6 relative z-10">
<label className="text-xs font-medium text-zinc-500 ml-1">How can we help?</label>
<textarea className="placeholder:text-zinc-700 focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all hover:border-white/15 resize-none text-sm text-white bg-zinc-950/50 w-full border-white/10 border rounded-lg pt-2.5 pr-3 pb-2.5 pl-3" name="message" placeholder="Describe your workflow, system, or decision you want to automate." required="" rows="4" spellcheck="false"></textarea>
</div>
<button className="w-full py-3 px-4 bg-white text-zinc-950 hover:bg-zinc-200 transition-colors rounded-full text-sm font-semibold relative z-10 shadow-lg shadow-white/5 flex items-center justify-center gap-2 group" id="contact-submit" type="submit">
<span id="contact-submit-text">Send message</span>
<svg className="group-hover:translate-x-0.5 transition-transform" data-icon-set="lucide" data-lucide="arrow-right" height="16" style={{}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<p className="hidden text-sm text-emerald-400 text-center mt-4 font-medium relative z-10" id="contact-success">
              Sent. We’ll reply soon.
            </p>
<p className="hidden text-sm text-red-400 text-center mt-4 font-medium relative z-10" id="contact-error">
              Something broke. Email us at <a className="underline" href="mailto:pedro@humanos.tech">pedro@humanos.tech</a>.
            </p>
<p className="text-[10px] text-zinc-600 text-center mt-4 font-light relative z-10">
              By submitting this form, you agree to our
              <a className="underline hover:text-zinc-400" href="#">Terms of Service</a>
              and
              <a className="underline hover:text-zinc-400" href="#">Privacy Policy</a>.
            </p>

</form>
</div>
</div>
</div>
</section>

</main>
    </>
  );
}
