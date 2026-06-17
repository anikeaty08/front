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
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
tenet: {
bg: '#000000',
surface: '#0a0a0a',
primary: '#8b5cf6',
accent: '#d8b4fe',
magenta: '#d946ef',
glass: 'rgba(255, 255, 255, 0.03)',
glassBorder: 'rgba(255, 255, 255, 0.1)',
}
},
animation: {
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'marquee': 'marquee 20s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


      // Initialize Icons
      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
          }
      });

      // Mobile Menu Logic
      const mobileBtn = document.getElementById('mobile-menu-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      let isMenuOpen = false;

      mobileBtn.addEventListener('click', () => {
          isMenuOpen = !isMenuOpen;
          if (isMenuOpen) {
              mobileMenu.classList.remove('translate-x-full');
              mobileMenu.classList.remove('pointer-events-none');
              mobileBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M18 6 6 18"/><path d="m6 6 18 18"/></svg>';
              document.body.style.overflow = 'hidden';
          } else {
              mobileMenu.classList.add('translate-x-full');
              mobileMenu.classList.add('pointer-events-none');
              mobileBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
              document.body.style.overflow = '';
          }
      });

      mobileMenu.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
              isMenuOpen = false;
              mobileMenu.classList.add('translate-x-full');
              mobileMenu.classList.add('pointer-events-none');
              mobileBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>';
              document.body.style.overflow = '';
          });
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10 hue-rotate-90" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/5">
<div className="flex max-w-7xl mx-auto px-6 py-4 items-center justify-between relative z-50">
<div className="flex items-center gap-2">
<svg className="lucide lucide-aperture w-6 h-6 text-white" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
<span className="font-display font-semibold text-xl tracking-tighter text-white">
            TENET
          </span>
</div>

<button className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 text-white font-mono text-xs tracking-wider hover:bg-white/10 hover:border-white/30 transition-all duration-300 group cursor-pointer" onclick="window.open('https://wa.me/971521202443', '_blank')">
          GET STARTED
          <svg className="lucide lucide-arrow-right w-3 h-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="md:hidden p-1 text-slate-300 hover:text-white transition-colors" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div className="fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-black/95 backdrop-blur-xl border-t border-white/5 z-40 transform translate-x-full transition-transform duration-300 flex flex-col p-6 gap-6 md:hidden" id="mobile-menu">
<div className="flex flex-col gap-4">

<a className="font-display text-lg text-slate-300 hover:text-white border-b border-white/5 pb-4" href="#features">
            Features
          </a>
<a className="font-display text-lg text-slate-300 hover:text-white border-b border-white/5 pb-4" href="#guarantee">
            Guarantee
          </a>
<a className="font-display text-lg text-slate-300 hover:text-white border-b border-white/5 pb-4" href="#faq">
            FAQ
          </a>
</div>

<button className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-white text-black font-display font-medium text-sm tracking-wide mt-auto mb-8 cursor-pointer" onclick="window.open('https://wa.me/971521202443', '_blank')">
          START PROJECT
          <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative" id="start">
<div className="text-center max-w-4xl z-10 mr-auto ml-auto relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-mono text-xs mb-8 animate-pulse-slow">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
          SYSTEM ONLINE: READY FOR DEPLOYMENT
        </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight font-display mb-6" style={{}}>Your New <br className="hidden md:block"/> <span className="text-gradient" style={{}}>High-Converting Website</span> <br/> <span className="text-gradient-accent">in 7 days.</span></h1>
<p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed">
          Build authority and generate results. Get a site engineered to capture
          traffic and drive sales 24/7.
        </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">

<button className="hover:bg-slate-200 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer md:w-auto text-sm font-medium text-black tracking-wide font-display bg-slate-50 w-full rounded-full pt-4 pr-8 pb-4 pl-8 inline-block text-center" onclick="window.open('https://wa.me/971521202443', '_blank')">
            START PROJECT
          </button>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="features">
<div className="max-w-full">

<div className="relative mb-24 animate-float px-6">
<div className="border-tenet-glassBorder md:p-12 text-center max-w-3xl border rounded-2xl mr-auto ml-auto pt-8 pr-8 pb-8 pl-8 relative shadow-2xl bg-black/40 backdrop-blur-sm">
<svg className="lucide lucide-quote w-8 h-8 text-white mb-6 mx-auto opacity-50" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<h3 className="md:text-3xl leading-snug text-2xl font-light text-white font-display mb-4">
              "Good user experience design can boost conversion rates by up to
              <span className="text-white font-medium underline decoration-tenet-primary underline-offset-4">
                400%
              </span>
              ."
            </h3>
<p className="font-mono text-xs text-slate-500 tracking-widest uppercase">
              — Forrester Research
            </p>
</div>
</div>

<div className="w-full relative overflow-hidden mask-linear-fade mb-24">
<div className="flex w-max animate-marquee gap-6 items-center">

<div className="flex gap-6">

<div className="md:w-[987px] md:h-[520px] shrink-0 overflow-hidden group cursor-pointer w-[90vw] h-[50vw] border-white/10 border rounded-2xl relative">
<img alt="Concept Art" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e732fa7-8c48-455b-be71-046df06f840d_800w.png?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black/80 via-black/10 to-transparent absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>
</div>

<div className="relative w-[90vw] md:w-[987px] h-[50vw] md:h-[520px] shrink-0 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer bg-tenet-surface">
<img alt="Abstract 3D Shape" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef9ffa28-320b-4612-9964-10b6119ac253_800w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
</div>

<div className="relative w-[90vw] md:w-[987px] h-[50vw] md:h-[520px] shrink-0 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer bg-tenet-surface">
<img alt="Dashboard UI" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66fc38f1-64cc-4c12-9b49-0d60d385946e_800w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
</div>
</div>

<div aria-hidden="true" className="flex gap-6">

<div className="md:w-[987px] md:h-[520px] shrink-0 overflow-hidden group cursor-pointer w-[90vw] h-[50vw] border-white/10 border rounded-2xl relative">
<img alt="Concept Art" className="transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9e732fa7-8c48-455b-be71-046df06f840d_800w.png?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-black/80 via-black/10 to-transparent absolute top-0 right-0 bottom-0 left-0 pointer-events-none"></div>
</div>

<div className="relative w-[90vw] md:w-[987px] h-[50vw] md:h-[520px] shrink-0 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer bg-tenet-surface">
<img alt="Abstract 3D Shape" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef9ffa28-320b-4612-9964-10b6119ac253_800w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
</div>

<div className="relative w-[90vw] md:w-[987px] h-[50vw] md:h-[520px] shrink-0 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer bg-tenet-surface">
<img alt="Dashboard UI" className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66fc38f1-64cc-4c12-9b49-0d60d385946e_800w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"></div>
</div>
</div>
</div>
</div>

<div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6">
<h2 className="font-display text-4xl md:text-5xl text-white font-medium mb-8 tracking-tight leading-tight">
            Paying for traffic to a site that doesn't convert is like
            <span className="text-rose-400">setting money on fire.</span>
</h2>
<p className="leading-relaxed text-lg text-slate-400 mb-10 max-w-2xl">
            In less than 8 days, we can transform your presence from a standard
            webpage into a professional landing page built to sell. No fluff,
            just performance.
          </p>

<button className="group inline-flex gap-2 hover:bg-slate-200 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer text-sm font-medium text-black tracking-wide font-display bg-white w-fit rounded-full pt-4 pr-8 pb-4 pl-8 relative shadow-[0_0_20px_rgba(255,255,255,0.15)] gap-x-2 gap-y-2 items-center justify-center" onclick="window.open('https://wa.me/971521202443', '_blank')">
            TURN TRAFFIC INTO PROFIT
            <svg className="lucide lucide-arrow-up-right w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="border-y bg-black border-white/5 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-16">
<h2 className="font-display text-3xl md:text-5xl text-white font-medium tracking-tight mb-4">
            You aren't just getting a website.
          </h2>
<p className="text-lg text-slate-400">
            You're getting a complete growth strategy for your business.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="group border-tenet-glassBorder hover:border-white/30 transition-colors duration-500 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white">
<svg className="lucide lucide-crosshair w-5 h-5" data-lucide="crosshair" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="22" x2="18" y1="12" y2="12"></line><line x1="6" x2="2" y1="12" y2="12"></line><line x1="12" x2="12" y1="6" y2="2"></line><line x1="12" x2="12" y1="22" y2="18"></line></svg>
</div>
<h3 className="text-white font-display text-xl font-medium mb-3">
              Strategic Planning
            </h3>
<p className="text-slate-400 text-sm leading-relaxed">
              Your market mastered. We analyze every detail to position your
              brand for maximum impact, turning your digital presence into a
              sales machine.
            </p>
</div>

<div className="group border-tenet-glassBorder hover:border-white/30 transition-colors duration-500 -multi border rounded-2xl px-8 py-8 relative backdrop-blur-sm">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-white font-display text-xl font-medium mb-3">
              Conversion Optimization
            </h3>
<p className="text-slate-400 text-sm leading-relaxed">
              It's not just a website—it's a funnel: we craft persuasive copy
              and optimize every touchpoint to ensure your product or service
              drives real revenue.
            </p>
</div>

<div className="group relative bg-tenet-surface backdrop-blur-sm border border-tenet-glassBorder rounded-2xl p-8 hover:border-white/30 transition-colors duration-500 -multi">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-white">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-white font-display text-xl font-medium mb-3">
              Instant Authority &amp; Trust
            </h3>
<p className="text-slate-400 text-sm leading-relaxed">
              A design as premium as your product. Your leads don't need to buy
              your product to know its quality, your design already shows it to
              them.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="guarantee">
<div className="absolute inset-0 bg-white/5"></div>
<div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="max-w-5xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 text-center md:text-left">
<h2 className="font-display text-3xl md:text-4xl text-white font-medium tracking-tight mb-6">
            Your site delivered on time or
            <span className="text-gradient-accent">your money back.</span>
</h2>
<p className="text-slate-400 text-base mb-8 max-w-xl">
            We're so confident in our results that we offer an unconditional
            guarantee. If we don't deliver your page by the agreed deadline, we
            will refund every cent you paid.
          </p>

<button className="px-8 py-3 bg-white text-black font-display font-semibold text-sm tracking-wide rounded-full hover:bg-slate-200 transition-colors duration-300 inline-block text-center cursor-pointer" onclick="window.open('https://wa.me/971521202443', '_blank')">
            LAUNCH MY PAGE NOW
          </button>
</div>
<div className="flex-shrink-0">

<div className="relative w-48 h-48 flex items-center justify-center group cursor-default">
<div className="absolute inset-0 border border-white/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-2 border border-dashed border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 bg-white/5 blur-xl rounded-full"></div>
<div className="text-center relative z-10">
<div className="font-display font-bold text-3xl text-white">100%</div>
<div className="font-mono text-[10px] tracking-widest text-slate-400 uppercase mt-1">
                Guarantee
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="font-display text-3xl text-white font-medium text-center mb-12">
          System Queries (FAQ)
        </h2>
<div className="space-y-4">

<details className="group bg-tenet-surface border border-white/5 rounded-lg overflow-hidden transition-all duration-300 open:border-white/20 open:bg-white/5">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="font-display text-lg text-slate-200">
                Why do I need a professional website?
              </span>
<svg className="lucide lucide-plus w-5 h-5 text-slate-500 group-open:rotate-45 transition-transform duration-300 group-open:text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-transparent group-open:border-white/5 pt-4">
              Your website is your 24/7 digital storefront. It builds immediate
              credibility and authority, making it effortless for new customers
              to find and trust your business.
            </div>
</details>

<details className="group bg-tenet-surface border border-white/5 rounded-lg overflow-hidden transition-all duration-300 open:border-white/20 open:bg-white/5">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="font-display text-lg text-slate-200">
                What if I don't like the design?
              </span>
<svg className="lucide lucide-plus w-5 h-5 text-slate-500 group-open:rotate-45 transition-transform duration-300 group-open:text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-transparent group-open:border-white/5 pt-4">
              Your satisfaction is non-negotiable. We work collaboratively, with
              reviews and approvals at every stage. We don't launch until you
              are 100% thrilled with the result.
            </div>
</details>

<details className="group bg-tenet-surface border border-white/5 rounded-lg overflow-hidden transition-all duration-300 open:border-white/20 open:bg-white/5">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="font-display text-lg text-slate-200">
                Do I need my own domain and hosting?
              </span>
<svg className="lucide lucide-plus w-5 h-5 text-slate-500 group-open:rotate-45 transition-transform duration-300 group-open:text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-transparent group-open:border-white/5 pt-4">
              Yes. To stay online, you need an address (domain) and a plot of
              digital land (hosting). If you don't have these yet, we will guide
              you through the secure setup process—it's easy.
            </div>
</details>

<details className="group bg-tenet-surface border border-white/5 rounded-lg overflow-hidden transition-all duration-300 open:border-white/20 open:bg-white/5">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="font-display text-lg text-slate-200">
                What is the turnaround time?
              </span>
<svg className="lucide lucide-plus w-5 h-5 text-slate-500 group-open:rotate-45 transition-transform duration-300 group-open:text-white" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="px-6 pb-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-transparent group-open:border-white/5 pt-4">
              Timelines vary, but on average, a high-performance landing page is
              ready in 4 to 8 days. For complex full-scale websites, we will
              lock in a specific timeline after reviewing your project needs.
            </div>
</details>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<svg className="lucide lucide-aperture w-5 h-5 text-slate-500" data-lucide="aperture" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m16.62 12-5.74 9.94"></path></svg>
<span className="font-display font-medium text-lg tracking-tighter text-slate-500">
            TENET
          </span>
</div>
<p className="font-mono text-xs text-slate-600 tracking-wider">
          © 2024 TENET SYSTEMS. ALL RIGHTS RESERVED.
        </p>
</div>
</footer>



    </>
  );
}
