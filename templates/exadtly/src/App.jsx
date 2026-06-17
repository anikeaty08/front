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



(function(){
const once=true;
if(!window.__inViewIO){
window.__inViewIO=new IntersectionObserver((entries)=>{
entries.forEach((entry)=>{
if(entry.isIntersecting){
entry.target.classList.add("animate");
if(once)window.__inViewIO.unobserve(entry.target)
}
})
},{threshold:0.2,rootMargin:"0px 0px -10% 0px"})
}
window.initInViewAnimations=function(selector=".animate-on-scroll"){
document.querySelectorAll(selector).forEach((el)=>{window.__inViewIO.observe(el)})
};
document.addEventListener("DOMContentLoaded",()=>initInViewAnimations())
})();



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


            (function() {
              const container = document.querySelector('[data-element-id="aura-emjqggrc94070h5v0"]');
              if (container) {
                container.addEventListener('mousemove', function(e) {
                  const cards = container.querySelectorAll('.spotlight-card');
                  cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty('--mouse-x', `${x}px`);
                    card.style.setProperty('--mouse-y', `${y}px`);
                  });
                });
              }
            })();
          


      document.addEventListener('DOMContentLoaded', function() {
        lucide.createIcons();
        // Fallback for Vanta if the element existed
        if(document.getElementById("vanta-bg")) {
            VANTA.GLOBE({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x7c3aed,
            color2: 0x8b5cf6,
            size: 1.20,
            backgroundColor: 0x000000
            });
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
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[1000px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="cqcLtDwfoHqqRPttBbQE"></div>

</div>
<div className="min-h-screen relative">

<nav className="z-10 border-white/5 border-b pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex max-w-7xl mr-auto ml-auto items-center justify-between">
<a className="inline-flex items-center gap-3 hover:opacity-80 transition-opacity" href="#">
<svg className="shrink-0 w-[28px] h-[28px]" data-icon-replaced="true" fill="none" height="28" strokeWidth="2" style={{width: '28px', height: '28px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2L4 22H12V2Z" fill="white"></path>
<path className="" d="M12 2L20 22H12V2Z" fill="#52525B"></path>
</svg>
<span className="text-xl font-semibold tracking-wide text-white font-geist">EXADTLY</span>
</a>
<div className="hidden md:flex space-x-8 text-sm font-normal">
</div>
<button className="hidden md:block shiny-cta uppercase hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.4)] after:!bg-[linear-gradient(-50deg,transparent,#10b981,transparent)] transition-all text-sm font-medium tracking-wide rounded-full cursor-pointer" onclick="window.location.href='https://api.leadconnectorhq.com/widget/bookings/call-disco-diego'" role="button" style={{padding: '0.5rem 1rem', border: '1px solid transparent', '--gradient-shine': '#34d399', background: 'linear-gradient(#052e1f, #052e1f) padding-box, conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #10b981 5%, var(--gradient-shine) 15%, #10b981 30%, transparent 40%, transparent 100%) border-box', boxShadow: 'inset 0 0 0 1px rgba(16, 185, 129, 0.2)', color: '#d1fae5'}}>
<span className="">BOOK A DEMO</span>
</button>
<button className="md:hidden">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<main className="z-10 pt-20 pr-6 pb-20 pl-6 relative">
<style>
            @keyframes fadeInSlide {
              0% { opacity: 0; transform: translateY(20px); filter: blur(8px); }
              100% { opacity: 1; transform: translateY(0); filter: blur(0px); }
            }
            .animate-hero-element { opacity: 0; animation-fill-mode: forwards; }
            .animate-badge { animation: fadeInSlide 0.6s ease-out 0.2s forwards; }
            .animate-title-1 { animation: fadeInSlide 0.8s ease-out 0.4s forwards; }
            .animate-title-2 { animation: fadeInSlide 0.8s ease-out 0.6s forwards; }
            .animate-description { animation: fadeInSlide 0.8s ease-out 0.8s forwards; }
            .animate-install { animation: fadeInSlide 0.8s ease-out 1.0s forwards; }
            .animate-terminal { animation: fadeInSlide 1s ease-out 1.4s forwards; }
          </style>
<div className="max-w-7xl mx-auto">
<div className="flex flex-col text-center mb-16 items-center">
<div className="inline-flex animate-hero-element animate-badge gap-2 text-sm bg-white/5 border-white/10 border rounded-full mb-6 pt-2 pr-4 pb-2 pl-4 backdrop-blur-sm gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="inline-flex bg-emerald-400 w-2 h-2 rounded-full relative"></span>
</span>
<span className="font-normal text-gray-300">THE NEW STANDARD IN MEDIA</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.05] text-5xl font-semibold tracking-tight text-center max-w-3xl mb-8">
<span className="animate-hero-element animate-title-1 block text-7xl font-bold font-geist" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 65%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 65%, transparent)'}}>IMAGINE <span className="font-bold text-emerald-400 font-geist" style={{maskImage: 'linear-gradient(140deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(140deg, transparent, black 0%, black 100%, transparent)'}}>EXADTLY</span></span>
<span className="animate-hero-element animate-title-2 block text-7xl font-bold font-geist pt-2 pb-2" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 50%, transparent)'}}>WHAT YOU IMAGINED</span>
</h1>
<p className="md:text-xl leading-relaxed animate-hero-element animate-description text-lg font-normal text-gray-400 text-center max-w-3xl mb-12">We engineer high-end AI video campaigns that convert. Stop chasing trends. Start defining them.</p>
<div className="animate-hero-element animate-install mb-16">
<a className="shiny-cta group inline-flex items-center justify-center gap-2 overflow-hidden focus:outline-none rounded-full relative" href="https://api.leadconnectorhq.com/widget/bookings/call-disco-diego" style={{textDecoration: 'none'}}>
<style className="">
        @property --gradient-angle {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
        }

        @property --gradient-angle-offset {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
        }

        @property --gradient-percent {
            syntax: "<percentage>";
            initial-value: 20%;
            inherits: false;
        }

        @property --gradient-shine {
            syntax: "<color>";
            initial-value: #34d399;
            inherits: false;
        }

        .shiny-cta {
            --gradient-angle: 0deg;
            --gradient-angle-offset: 0deg;
            --gradient-percent: 20%;
            --gradient-shine: #34d399;
            --shadow-size: 2px;
            position: relative;
            overflow: hidden;
            border-radius: 9999px;
            padding: 0.875rem 2rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
            font-weight: 500;
            color: #d1fae5;
            background: linear-gradient(#052e1f, #052e1f) padding-box,
                conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
                    transparent 0%, #10b981 5%, var(--gradient-shine) 15%, #10b981 30%, transparent 40%, transparent 100%) border-box;
            border: 1px solid transparent;
            box-shadow: inset 0 0 0 1px rgba(16, 185, 129, 0.2);
            isolation: isolate;
            z-index: 0;
            animation: border-spin 2.5s linear infinite;
            transition: box-shadow 0.3s ease;
        }

        @keyframes border-spin {
            to {
                --gradient-angle: 360deg;
            }
        }

        .shiny-cta:hover {
            box-shadow: 0 0 25px -5px rgba(16, 185, 129, 0.4);
        }

        .shiny-cta:active {
            transform: translateY(1px);
        }

        .shiny-cta::before {
            content: '';
            pointer-events: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
            width: calc(100% - 2px);
            height: calc(100% - 2px);
            background: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.1) 0.5px, transparent 0) padding-box;
            background-size: 4px 4px;
            background-repeat: space;
            mask-image: conic-gradient(from calc(var(--gradient-angle) + 45deg), black, transparent 10% 90%, black);
            border-radius: inherit;
            opacity: 0.4;
        }

        .shiny-cta::after {
            content: '';
            pointer-events: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            width: 100%;
            aspect-ratio: 1;
            background: linear-gradient(-50deg, transparent, #10b981, transparent);
            mask-image: radial-gradient(circle at bottom, transparent 40%, black);
            opacity: 0.6;
            animation: shimmer 4s linear infinite;
        }

        .shiny-cta span {
            position: relative;
            z-index: 2;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }

        .shiny-cta span::before {
            content: '';
            pointer-events: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: -1;
            width: calc(100% + 1rem);
            height: calc(100% + 1rem);
            box-shadow: inset 0 -1ex 2rem 4px #10b981;
            opacity: 0;
            border-radius: inherit;
            transition: opacity 800ms cubic-bezier(0.25, 1, 0.5, 1);
            animation: breathe 4.5s linear infinite;
        }

        @keyframes shimmer {
            to {
                transform: translate(-50%, -50%) rotate(360deg);
            }
        }

        @keyframes breathe {

            0%,
            100% {
                transform: translate(-50%, -50%) scale(1);
            }

            50% {
                transform: translate(-50%, -50%) scale(1.20);
            }
        }
    </style>
<span className="">BOOK A DEMO</span>
</a><a className="shiny-cta-black group inline-flex items-center justify-center gap-2 overflow-hidden focus:outline-none rounded-full ml-4 relative" href="/#" style={{textDecoration: 'none'}}>
<style className="">
        @property --gradient-angle-black {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
        }

        @property --gradient-angle-offset-black {
            syntax: "<angle>";
            initial-value: 0deg;
            inherits: false;
        }

        @property --gradient-percent-black {
            syntax: "<percentage>";
            initial-value: 20%;
            inherits: false;
        }

        @property --gradient-shine-black {
            syntax: "<color>";
            initial-value: #a1a1aa;
            inherits: false;
        }

        .shiny-cta-black {
            --gradient-angle-black: 0deg;
            --gradient-angle-offset-black: 0deg;
            --gradient-percent-black: 20%;
            --gradient-shine-black: #a1a1aa;
            --shadow-size: 2px;
            position: relative;
            overflow: hidden;
            border-radius: 9999px;
            padding: 0.875rem 2rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
            font-weight: 500;
            color: #ffffff;
            background: linear-gradient(#000000, #000000) padding-box,
                conic-gradient(from calc(var(--gradient-angle-black) - var(--gradient-angle-offset-black)),
                    transparent 0%, #27272a 5%, var(--gradient-shine-black) 15%, #27272a 30%, transparent 40%, transparent 100%) border-box;
            border: 1px solid transparent;
            box-shadow: inset 0 0 0 1px rgba(161, 161, 170, 0.15);
            isolation: isolate;
            z-index: 0;
            animation: border-spin-black 2.5s linear infinite;
            transition: box-shadow 0.3s ease;
        }

        @keyframes border-spin-black {
            to {
                --gradient-angle-black: 360deg;
            }
        }

        .shiny-cta-black:hover {
            box-shadow: 0 0 25px -5px rgba(255, 255, 255, 0.2);
        }

        .shiny-cta-black:active {
            transform: translateY(1px);
        }

        .shiny-cta-black::before {
            content: '';
            pointer-events: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 0;
            width: calc(100% - 2px);
            height: calc(100% - 2px);
            background: radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.2) 0.5px, transparent 0) padding-box;
            background-size: 4px 4px;
            background-repeat: space;
            mask-image: conic-gradient(from calc(var(--gradient-angle-black) + 45deg), black, transparent 10% 90%, black);
            border-radius: inherit;
            opacity: 0.4;
        }

        .shiny-cta-black::after {
            content: '';
            pointer-events: none;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
            width: 100%;
            aspect-ratio: 1;
            background: linear-gradient(-50deg, transparent, #ffffff, transparent);
            mask-image: radial-gradient(circle at bottom, transparent 40%, black);
            opacity: 0.2;
            animation: shimmer-black 4s linear infinite;
        }

        .shiny-cta-black span {
            position: relative;
            z-index: 2;
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        @keyframes shimmer-black {
            to {
                transform: translate(-50%, -50%) rotate(360deg);
            }
        }
    </style>
<span className="">SHOWCASE <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
</a>
</div>
<div className="animate-hero-element animate-terminal w-full max-w-5xl mr-auto ml-auto relative">
<div className="overflow-hidden bg-zinc-900 rounded-2xl ring-white/10 ring-1 relative shadow-2xl" style={{maskImage: 'linear-gradient(transparent, black 0%, black 50%, transparent)'}}>
</div>
<div className="absolute -right-6 top-20 hidden lg:block">
</div>
<div className="absolute -left-6 bottom-20 hidden lg:block">
</div>
</div>
</div>
</div>
</main><section className="overflow-hidden z-10 border-white/5 border-t pt-32 pb-32 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none select-none">
<div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full mix-blend-screen"></div>
<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">


<div className="relative max-w-5xl mx-auto animate-on-scroll group animate" style={{animationDelay: '100ms'}}>

<div className="absolute -inset-0.5 bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] blur opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-purple-500/10 to-emerald-500/20 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>

<div className="overflow-hidden aspect-video cursor-pointer transform transition-transform duration-500 hover:scale-[1.005] bg-zinc-900 border-white/10 border rounded-[1.9rem] relative shadow-2xl">

<div className="bg-zinc-950 absolute top-0 right-0 bottom-0 left-0">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute inset-0 w-full h-full object-cover" frameborder="0" src="https://www.youtube.com/embed/n0DOKJVN4Vw?autoplay=0&amp;mute=0&amp;controls=1&amp;rel=0&amp;showinfo=0&amp;modestbranding=1&amp;playsinline=1"></iframe>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 pointer-events-none">
</div>
</div>

<div className="flex z-20 group-hover:opacity-100 transition-opacity duration-300 opacity-0 pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 left-0 items-start justify-between pointer-events-none">
<div className="flex gap-2 text-xs font-medium text-white bg-black/40 border-white/10 border rounded-lg pt-1.5 pr-3 pb-1.5 pl-3 backdrop-blur gap-x-2 gap-y-2 items-center">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            Introduction
        </div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-8 flex items-end justify-between z-20 pointer-events-none">
<div className="flex flex-col gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">

</div>
<div className="text-right hidden sm:block">
<span className="px-2 py-1 rounded text-[10px] font-bold bg-white/10 text-zinc-300 border border-white/5 backdrop-blur tracking-wider">4K · 60FPS</span>
</div>
</div>
</div>

<div className="mt-12 flex justify-center relative z-20">
<button className="shiny-cta uppercase hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.4)] after:!bg-[linear-gradient(-50deg,transparent,#10b981,transparent)] transition-all text-sm font-medium tracking-wide rounded-full pt-3.5 pr-8 pb-3.5 pl-8" onclick="window.location.href='https://api.leadconnectorhq.com/widget/bookings/call-disco-diego'" style={{border: '1px solid transparent', '--gradient-shine': '#34d399', background: 'linear-gradient(#052e1f, #052e1f) padding-box, conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #10b981 5%, var(--gradient-shine) 15%, #10b981 30%, transparent 40%, transparent 100%) border-box', boxShadow: 'inset 0 0 0 1px rgba(16, 185, 129, 0.2)', color: '#d1fae5'}}>
<span className="">Book a Demo</span>
</button>
</div>

<div className="absolute -right-6 top-1/4 hidden lg:block animate-on-scroll animate" style={{animationDelay: '300ms'}}>
</div>

<div className="absolute -left-6 bottom-12 hidden lg:block animate-on-scroll animate" style={{animationDelay: '500ms'}}>
</div>
</div>
</div>
</section>
</div>

<section className="z-10 pt-16 pr-6 pb-16 pl-6 relative">
<div className="max-w-7xl mx-auto">
<section className="bg-zinc-950 max-w-7xl border-white/5 border rounded-3xl mt-8 mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]" style={{position: 'relative', overflow: 'hidden'}}>
<div className="grid grid-cols-1 lg:grid-cols-2 z-10 relative gap-x-12 gap-y-12 items-start">

<div className="flex flex-col min-h-full justify-between">
<div className="">
<span className="text-sm font-normal text-zinc-400" style={{}}>The Pivot Point</span>
<h2 className="sm:text-6xl lg:text-7xl leading-[0.9] text-5xl font-semibold text-zinc-100 tracking-tighter font-geist mt-3" style={{maskImage: 'linear-gradient(130deg, transparent, black 0%, black 25%, transparent)', WebkitMaskImage: 'linear-gradient(130deg, transparent, black 0%, black 25%, transparent)'}}>ADAPT OR DISAPPEAR</h2>

<div className="mt-8 relative">
<div className="absolute inset-0 flex items-center">
<div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</div>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="">
<p className="text-sm font-medium text-zinc-100 tracking-tight">We generate stunning video ads instantly</p>
<p className="leading-relaxed text-sm font-normal text-zinc-400 mt-2">AI-generated content isn't just a stylistic choice—it's an economic imperative. Traditional production is slow, expensive, and limited by physics.</p>
<button className="mt-5 inline-flex items-center gap-2 h-10 px-5 rounded-full bg-zinc-100 text-zinc-900 text-sm font-medium hover:bg-zinc-200 transition">
                      Explore Gallery
                      <svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
</div>

<div className="relative">
<div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent sm:block hidden"></div>
<p className="leading-relaxed sm:text-right sm:pl-8 text-base font-normal text-zinc-400 pl-8">"AI-generated videos/images are not only a trend, but the difference between growing and disappearing."</p>
</div>
</div>
</div>
</div>

<div className="relative h-[520px] overflow-hidden rounded-2xl" style={{maskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)'}}>
<div className="animate-marquee-vertical">
<div className="grid grid-cols-2 gap-4 mb-4">

<article className="group relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-white/10 rounded-xl transition-all duration-300 hover:border-indigo-500/30">
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e502f8e2-a592-4fb2-a44d-6704e140ccda_800w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/nexbotrobotcharacterconcept-kLwr8f6hgKgaa5gmU6oB00Si" width="100%"></iframe></div>
<div className="absolute top-3 right-3">
<span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur text-xs text-zinc-300 font-normal border border-white/10">Cinematic</span>
</div>
<div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-base font-medium text-white tracking-tight">Realistic Avatars</p>
</div>
</article>

<article className="group relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-white/10 rounded-xl transition-all duration-300 hover:border-indigo-500/30">
<div className="absolute inset-0 bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/48805e96-414c-4480-b758-2938cccff968_800w.webp)]"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute top-3 right-3">
<span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur text-xs text-zinc-300 font-normal border border-white/10">Space</span>
</div>
<div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
<svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="text-white text-base font-medium tracking-tight leading-tight">Earth from orbital view</p>
</div>
</article>

<article className="group relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-white/10 rounded-xl transition-all duration-300 hover:border-indigo-500/30">
<div className="bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/287d5cf3-1138-4b8a-a5ce-fedd2bfebf5e_800w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<section className="bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/31cad904-f00d-40ae-ba05-a23e01be6ada_3840w.jpg)] w-full bg-cover pt-16 pb-16" id="product">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-center">
<span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300">Customer stories</span>
<h2 className="sm:text-5xl text-4xl tracking-tight mt-4" style={{fontWeight: '600'}}>
        Discover how <span className="italic" style={{fontWeight: '500'}}>real teams</span> automate their workflow.
      </h2>
<p className="mt-3 text-gray-300 max-w-3xl mx-auto">
        Unscripted clips from people automating their day-to-day. New workflows, less context switching, happier teams.
      </p>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden hover:border-white/15 transition-all bg-black/40 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg">
<div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
<img alt="Customer video thumbnail" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6a8399dc-9cc9-4f4f-a393-c5dc669e58ae_800w.jpg" style={{}}/>
<button className="absolute inset-0 grid place-items-center" type="button">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-black ring-1 ring-white/10 shadow">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</button>
<div className="absolute inset-x-0 bottom-0 p-2">
<div className="flex items-center justify-between text-[11px] text-white">
<span>00:00</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-volume-2 w-3.5 h-3.5" data-lucide="volume-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
<svg className="lucide lucide-settings w-3.5 h-3.5" data-lucide="settings" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<svg className="lucide lucide-expand w-3.5 h-3.5" data-lucide="expand" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m15 15 6 6"></path><path d="m15 9 6-6"></path><path d="M21 16v5h-5"></path><path d="M21 8V3h-5"></path><path d="M3 16v5h5"></path><path d="m3 21 6-6"></path><path d="M3 8V3h5"></path><path d="M9 9 3 3"></path></svg>
</div>
</div>
<div className="mt-1 h-1.5 rounded bg-white/10 overflow-hidden">
<div className="h-1.5 rounded bg-blue-500" style={{width: '22%'}}></div>
</div>
</div>
</div>
<div className="mt-4">
<p className="text-lg italic" style={{fontWeight: '500'}}>lumen</p>
<p className="mt-2 text-sm text-gray-300">“We consolidated three tools and shaved minutes off every task. Setup took under 10 minutes.”</p>
<p className="mt-4 text-xs text-gray-500">Jamal Ortiz • Ops Lead, Lumen Studio</p>
</div>
</div>

<div className="group relative overflow-hidden hover:border-white/15 transition-all bg-black/40 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg">
<div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
<img alt="Customer video thumbnail" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/09af58f4-5734-4602-a993-9208786f9267_800w.jpg"/>
<button className="absolute inset-0 grid place-items-center" type="button">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-black ring-1 ring-white/10 shadow">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</button>
<div className="absolute inset-x-0 bottom-0 p-2">
<div className="flex items-center justify-between text-[11px] text-white">
<span>00:00</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-volume-2 w-3.5 h-3.5" data-lucide="volume-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
<svg className="lucide lucide-settings w-3.5 h-3.5" data-lucide="settings" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<svg className="lucide lucide-expand w-3.5 h-3.5" data-lucide="expand" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m15 15 6 6"></path><path d="m15 9 6-6"></path><path d="M21 16v5h-5"></path><path d="M21 8V3h-5"></path><path d="M3 16v5h5"></path><path d="m3 21 6-6"></path><path d="M3 8V3h5"></path><path d="M9 9 3 3"></path></svg>
</div>
</div>
<div className="mt-1 h-1.5 rounded bg-white/10 overflow-hidden">
<div className="h-1.5 rounded bg-blue-500" style={{width: '35%'}}></div>
</div>
</div>
</div>
<div className="mt-4">
<div className="flex items-center gap-2">
<svg className="lucide lucide-toggle-left w-4 h-4 text-gray-300" data-lucide="toggle-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="12" r="3"></circle><rect height="14" rx="7" width="20" x="2" y="5"></rect></svg>
<p className="text-xl tracking-tight" style={{fontWeight: '600'}}>Northwind</p>
</div>
<p className="mt-2 text-sm text-gray-300">“Week one, results were obvious. Voice triggers cut our context switching to almost zero.”</p>
<p className="mt-4 text-xs text-gray-500">Riya Sen • Founder, Northwind</p>
</div>
</div>

<div className="group relative overflow-hidden hover:border-white/15 transition-all bg-black/40 border-white/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4 backdrop-blur-lg">
<div className="relative aspect-video rounded-xl overflow-hidden border border-white/10">
<img alt="Customer video thumbnail" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90c7269b-467c-4ab1-b003-073d48f6ce28_800w.jpg"/>
<button className="absolute inset-0 grid place-items-center" type="button">
<span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-black ring-1 ring-white/10 shadow">
<svg className="lucide lucide-play w-5 h-5" data-lucide="play" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
</button>
<div className="absolute inset-x-0 bottom-0 p-2">
<div className="flex items-center justify-between text-[11px] text-white">
<span>00:00</span>
<div className="flex items-center gap-2">
<svg className="lucide lucide-volume-2 w-3.5 h-3.5" data-lucide="volume-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
<svg className="lucide lucide-settings w-3.5 h-3.5" data-lucide="settings" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<svg className="lucide lucide-expand w-3.5 h-3.5" data-lucide="expand" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m15 15 6 6"></path><path d="m15 9 6-6"></path><path d="M21 16v5h-5"></path><path d="M21 8V3h-5"></path><path d="M3 16v5h5"></path><path d="m3 21 6-6"></path><path d="M3 8V3h5"></path><path d="M9 9 3 3"></path></svg>
</div>
</div>
<div className="mt-1 h-1.5 rounded bg-white/10 overflow-hidden">
<div className="h-1.5 rounded bg-blue-500" style={{width: '48%'}}></div>
</div>
</div>
<div className="absolute inset-y-0 right-0 w-1/3 pointer-events-none bg-gradient-to-l from-black/60 to-transparent hidden lg:block"></div>
<span className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500 text-black shadow">
<svg className="lucide lucide-chevron-right w-3.5 h-3.5" data-lucide="chevron-right" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</div>
<div className="mt-4">
<p className="text-xl tracking-tight uppercase" style={{fontWeight: '600'}}>Oak &amp; Pine</p>
<p className="mt-2 text-sm text-gray-300">“Automated follow‑ups and window layouts boosted conversions and kept our team in flow.”</p>
<p className="mt-4 text-xs text-gray-500">Naomi Park • CEO, Oak &amp; Pine</p>
</div>
</div>
</div>
</div>
</section>
<div className="absolute top-3 right-3">
<span className="text-xs font-normal text-zinc-300 bg-black/60 border-white/10 border rounded-lg pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur">Architecture</span>
</div>
<div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-base font-medium text-white tracking-tight">Modern Real State Designs</p>
</div>
</article>

<article className="group relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-white/10 rounded-xl transition-all duration-300 hover:border-indigo-500/30">
<div className="absolute inset-0 bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ddfa492e-e2ab-44b7-9e59-00b7a11fd1c4_800w.webp)]"></div>
<div className="bg-center bg-gradient-to-t from-black/80 via-black/20 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0cbecb54-62a0-43ec-915d-8eda0b6dba56_800w.webp?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 right-3">
<span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur text-xs text-zinc-300 font-normal border border-white/10">Nature</span>
</div>
<div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
<div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<div className="absolute bottom-3 left-3 right-3">
<p className="leading-tight text-base font-medium text-white tracking-tight">Vacational Experience</p>
</div>
</article>
</div>

<div className="grid grid-cols-2 gap-4">
<article className="group relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-white/10 rounded-xl transition-all duration-300 hover:border-indigo-500/30">
<div className="absolute inset-0 bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/564fd83a-dcef-4e09-a23a-9f90825a386b_800w.webp)]"></div>
<div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6bb9fee7-72b8-4ce2-83f8-fd93df9b30b5_800w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 right-3"><span className="text-xs font-normal text-zinc-300 bg-black/60 border-white/10 border rounded-lg pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur">Products</span></div>
<div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity"><div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"><svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></div></div>
<div className="absolute bottom-3 left-3 right-3"><p className="leading-tight text-base font-medium text-white tracking-tight">Product Showcase</p></div>
</article>
<article className="group relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-white/10 rounded-xl transition-all duration-300 hover:border-indigo-500/30">
<div className="absolute inset-0 bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4e303560-d3c3-4b4c-b449-54bc5e4e2ba6_800w.webp)]"></div>
<div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 right-3"><span className="text-xs font-normal text-zinc-300 bg-black/60 border-white/10 border rounded-lg pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur">Sci-Fi</span></div>
<div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity"><div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"><svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></div></div>
<div className="absolute bottom-3 left-3 right-3"><p className="leading-tight text-base font-medium text-white tracking-tight">Immersive Creativity</p></div>
</article>
<article className="group relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-white/10 rounded-xl transition-all duration-300 hover:border-indigo-500/30">
<div className="absolute inset-0 bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5826e3c-ed78-471d-aa63-19c3f532a30e_800w.webp)]"></div>
<div className="bg-center bg-gradient-to-t from-black/80 via-black/20 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4766ef42-747e-4b76-b162-033888314ecd_800w.webp)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 right-3"><span className="text-xs font-normal text-zinc-300 bg-black/60 border-white/10 border rounded-lg pt-1 pr-2.5 pb-1 pl-2.5 backdrop-blur">Fashion</span></div>
<div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity"><div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"><svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></div></div>
<div className="absolute bottom-3 left-3 right-3"><p className="leading-tight text-base font-medium text-white tracking-tight">AI-Powered Models</p></div>
</article>
<article className="group relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-white/10 rounded-xl transition-all duration-300 hover:border-indigo-500/30">
<div className="absolute inset-0 bg-cover bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17cfc995-3784-4894-bbeb-fe09e33cfbc5_800w.jpg)]"></div>
<div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b54a0ba0-798c-422a-a2bc-7d3641d67995_800w.webp)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-3 right-3"><span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur text-xs text-zinc-300 font-normal border border-white/10">Nature</span></div>
<div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity"><div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center"><svg className="w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg></div></div>
<div className="absolute bottom-3 left-3 right-3"><p className="leading-tight text-base font-medium text-white tracking-tight" style={{}}>Lifestyle Cinematics</p></div>
</article>
</div>
</div>
</div>
</div>
</section>
</div>
</section>

<section className="[animation:fadeSlideIn_0.8s_ease-out_0.4s_both] animate-on-scroll bg-gradient-to-b from-zinc-950 to-black z-10 pt-16 pr-6 pb-16 pl-6 relative">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center mb-12">
<span className="uppercase text-sm font-normal text-zinc-400 tracking-widest">Powerful Videos &amp; Unlimited Creativity</span>
<h2 className="sm:text-5xl lg:text-6xl text-4xl font-semibold text-white tracking-tight mt-3 mb-6" style={{maskImage: 'linear-gradient(240deg, transparent, black 25%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(240deg, transparent, black 25%, black 75%, transparent)'}}>Everything you need to bring life to your ads</h2>
<p className="text-lg text-zinc-400 max-w-3xl mr-auto ml-auto">We create stunning websites and optimized visual content to capture attention in seconds, reduce production costs, and scale your product's sales with Meta Ads</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6" style={{position: 'relative'}}>

<style>
            .spotlight-card {
              --mouse-x: -1000px;
              --mouse-y: -1000px;
            }
          </style>

<div className="spotlight-card w-full h-[250px] rounded-[10px] p-[1px] relative overflow-hidden group" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(52, 211, 153, 0.4), transparent 40%), rgb(32, 34, 34)'}}>
<div className="aspect-square z-[2] w-[5px] rounded-full absolute bg-emerald-400" style={{boxShadow: 'rgb(52, 211, 153) 0px 0px 10px', right: '10%', top: '10%'}}></div>
<div className="flex flex-col z-[1] text-white w-full h-full border-[#202222] border rounded-[9px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-center overflow-hidden" style={{background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(52, 211, 153, 0.06), transparent 40%), radial-gradient(280px at 0% 0%, rgb(68, 68, 68), rgb(12, 13, 13))'}}>
<div className="blur-[60px] transform opacity-40 w-[220px] h-[45px] rounded-full absolute top-0 left-0 rotate-[40deg]" style={{backgroundColor: 'rgb(52, 211, 153)', boxShadow: 'rgb(52, 211, 153) 0px 0px 50px', transformOrigin: '10% center'}}></div>
<div className="inline-flex z-10 bg-emerald-400/10 w-12 h-12 ring-emerald-400/20 ring-1 rounded-xl mb-4 items-center justify-center">
<svg className="lucide lucide-globe w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(52, 211, 153)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="z-10 text-xl font-medium text-white tracking-tight mb-2">Website Development</h3>
<p className="leading-relaxed z-10 text-sm text-zinc-400 text-center">Websites designed to convert traffic</p>
<div className="w-full h-[1px] absolute" style={{top: '10%', background: 'linear-gradient(90deg, rgb(52, 211, 153) 30%, rgb(29, 31, 31) 70%)', maskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)'}}></div>
<div className="w-[1px] h-full absolute" style={{left: '10%', background: 'linear-gradient(180deg, #34d399 30%, #222424 70%)', maskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)'}}></div>
<div className="bg-[#2c2c2c] w-full h-[1px] absolute" style={{bottom: '10%', maskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)'}}></div>
<div className="absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>

<div className="spotlight-card w-full h-[250px] rounded-[10px] p-[1px] relative overflow-hidden group" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(52, 211, 153, 0.4), transparent 40%), rgb(32, 34, 34)'}}>
<div className="w-[5px] aspect-square absolute rounded-full z-[2] bg-emerald-400" style={{boxShadow: 'rgb(52, 211, 153) 0px 0px 10px', right: '10%', top: '10%'}}></div>
<div className="z-[1] flex flex-col overflow-hidden text-white w-full h-full border-[#202222] border rounded-[9px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-center" style={{background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(52, 211, 153, 0.06), transparent 40%), radial-gradient(280px at 0% 0%, rgb(68, 68, 68), rgb(12, 13, 13))'}}>
<div className="blur-[60px] transform opacity-40 w-[220px] h-[45px] rounded-full absolute top-0 left-0 rotate-[40deg]" style={{backgroundColor: '#34d399', boxShadow: '0 0 50px #34d399', transformOrigin: '10%'}}></div>
<div className="inline-flex z-10 bg-emerald-400/10 w-12 h-12 ring-emerald-400/20 ring-1 rounded-xl mb-4 items-center justify-center">
<svg className="lucide lucide-scan-eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(52, 211, 153)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path className="" d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="1"></circle><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"></path></svg>
</div>
<h3 className="z-10 text-xl font-medium text-white tracking-tight mb-2">Performance AI Video Ads</h3>
<p className="leading-relaxed z-10 text-sm text-zinc-400 text-center">Captivating videos optimized for Meta with AI</p>
<div className="absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #34d399 30%, #1d1f1f 70%)'}}></div>
<div className="absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #34d399 30%, #222424 70%)'}}></div>
<div className="absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>

<div className="spotlight-card w-full h-[250px] rounded-[10px] p-[1px] relative overflow-hidden group" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(52, 211, 153, 0.4), transparent 40%), rgb(32, 34, 34)'}}>
<div className="w-[5px] aspect-square absolute rounded-full z-[2] bg-emerald-400" style={{boxShadow: 'rgb(52, 211, 153) 0px 0px 10px', right: '10%', top: '10%'}}></div>
<div className="z-[1] flex flex-col text-white w-full h-full border-[#202222] border rounded-[9px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-center overflow-hidden" style={{background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(52, 211, 153, 0.06), transparent 40%), radial-gradient(280px at 0% 0%, rgb(68, 68, 68), rgb(12, 13, 13))'}}>
<div className="absolute blur-[60px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#34d399', boxShadow: '0 0 50px #34d399', transformOrigin: '10%'}}></div>
<div className="inline-flex z-10 bg-emerald-400/10 w-12 h-12 ring-emerald-400/20 ring-1 rounded-xl mb-4 items-center justify-center">
<svg className="lucide lucide-chart-no-axes-combined w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(52, 211, 153)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16v5"></path><path d="M16 14v7"></path><path d="M20 10v11"></path><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"></path><path d="M4 18v3"></path><path d="M8 14v7"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight z-10 mb-2">Meta Scaling</h3>
<p className="leading-relaxed text-sm text-zinc-400 text-center z-10">Data-driven scaling with Meta Ads</p>
<div className="absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #34d399 30%, #1d1f1f 70%)'}}></div>
<div className="absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #34d399 30%, #222424 70%)'}}></div>
<div className="absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>

<div className="spotlight-card w-full h-[250px] rounded-[10px] p-[1px] relative overflow-hidden group" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(52, 211, 153, 0.4), transparent 40%), rgb(32, 34, 34)'}}>
<div className="aspect-square z-[2] w-[5px] rounded-full absolute bg-emerald-400" style={{boxShadow: 'rgb(52, 211, 153) 0px 0px 10px', right: '10%', top: '10%'}}></div>
<div className="z-[1] flex flex-col text-white w-full h-full border-[#202222] border rounded-[9px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-center overflow-hidden" style={{background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(52, 211, 153, 0.06), transparent 40%), radial-gradient(280px at 0% 0%, rgb(68, 68, 68), rgb(12, 13, 13))'}}>
<div className="blur-[60px] transform z-[1] rounded-full absolute top-0 left-0 opacity-40 w-[220px] h-[45px] rotate-[40deg]" style={{backgroundColor: 'rgb(52, 211, 153)', boxShadow: 'rgb(52, 211, 153) 0px 0px 50px', transformOrigin: '10% center'}}></div>
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl ring-1 mb-4 z-10 bg-emerald-400/10 ring-emerald-400/20">
<svg className="lucide lucide-fast-forward lucide-calendar-check lucide-alarm-clock-check w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="fast-forward" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(52, 211, 153)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 12 18z"></path><path d="M2 6a2 2 0 0 1 3.414-1.414l6 6a2 2 0 0 1 0 2.828l-6 6A2 2 0 0 1 2 18z"></path></svg>
</div>
<h3 className="z-10 text-xl font-medium text-white tracking-tight mb-2">5x Faster Production Cycles</h3>
<p className="leading-relaxed text-sm text-zinc-400 text-center z-10">Creative volume faster than ever before</p>
<div className="absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #34d399 30%, #1d1f1f 70%)'}}></div>
<div className="absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #34d399 30%, #222424 70%)'}}></div>
<div className="absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>

<div className="spotlight-card w-full h-[250px] rounded-[10px] p-[1px] relative overflow-hidden group" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(52, 211, 153, 0.4), transparent 40%), rgb(32, 34, 34)'}}>
<div className="w-[5px] aspect-square absolute rounded-full z-[2] bg-emerald-400" style={{boxShadow: 'rgb(52, 211, 153) 0px 0px 10px', right: '10%', top: '10%'}}></div>
<div className="z-[1] flex flex-col overflow-hidden text-white w-full h-full border-[#202222] border rounded-[9px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-center" style={{background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(52, 211, 153, 0.06), transparent 40%), radial-gradient(280px at 0% 0%, rgb(68, 68, 68), rgb(12, 13, 13))'}}>
<div className="absolute blur-[60px] transform top-0 left-0 opacity-40 w-[220px] h-[45px] rounded-full rotate-[40deg]" style={{backgroundColor: '#34d399', boxShadow: '0 0 50px #34d399', transformOrigin: '10%'}}></div>
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl ring-1 mb-4 z-10 bg-emerald-400/10 ring-emerald-400/20">
<svg className="lucide lucide-infinity lucide-signal-high w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(52, 211, 153)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
</div>
<h3 className="z-10 text-xl font-medium text-white tracking-tight mb-2">Unlimited Creativity</h3>
<p className="leading-relaxed z-10 text-sm text-zinc-400 text-center">Hyper-personalized content and styles</p>
<div className="absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #34d399 30%, #1d1f1f 70%)'}}></div>
<div className="absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #34d399 30%, #222424 70%)'}}></div>
<div className="bg-[#2c2c2c] w-full h-[1px] absolute" style={{bottom: '10%'}}></div>
<div className="absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>

<div className="spotlight-card w-full h-[250px] rounded-[10px] p-[1px] relative overflow-hidden group" style={{background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(52, 211, 153, 0.4), transparent 40%), rgb(32, 34, 34)'}}>
<div className="w-[5px] aspect-square absolute rounded-full z-[2] bg-emerald-400" style={{boxShadow: 'rgb(52, 211, 153) 0px 0px 10px', right: '10%', top: '10%'}}></div>
<div className="z-[1] flex flex-col overflow-hidden text-white w-full h-full border-[#202222] border rounded-[9px] pt-6 pr-6 pb-6 pl-6 relative items-center justify-center" style={{background: 'radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(52, 211, 153, 0.06), transparent 40%), radial-gradient(280px at 0% 0%, rgb(68, 68, 68), rgb(12, 13, 13))'}}>
<div className="blur-[60px] transform opacity-40 w-[220px] h-[45px] z-[1] rounded-full absolute top-0 left-0 rotate-[40deg]" style={{backgroundColor: '#34d399', boxShadow: '0 0 50px #34d399', transformOrigin: '10%'}}></div>
<div className="inline-flex z-10 bg-emerald-400/10 w-12 h-12 ring-emerald-400/20 ring-1 rounded-xl mb-4 items-center justify-center">
<svg className="lucide lucide-calendar-check lucide-fast-forward lucide-scan-eye w-[24px] h-[24px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(52, 211, 153)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<h3 className="z-10 text-xl font-medium text-white tracking-tight mb-2">Ready-to-launch Ads</h3>
<p className="leading-relaxed z-10 text-sm text-zinc-400 text-center">Launch ads in 7 days or less after creatives</p>
<div className="absolute w-full h-[1px]" style={{top: '10%', background: 'linear-gradient(90deg, #34d399 30%, #1d1f1f 70%)'}}></div>
<div className="absolute w-[1px] h-full" style={{left: '10%', background: 'linear-gradient(180deg, #34d399 30%, #222424 70%)'}}></div>
<div className="absolute w-full h-[1px] bg-[#2c2c2c]" style={{bottom: '10%'}}></div>
<div className="absolute w-[1px] h-full bg-[#2c2c2c]" style={{right: '10%'}}></div>
</div>
</div>
</div>
<div className="text-center mt-12">
</div>
</div>
</section>


<section className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll z-10 animate mix-blend-normal bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/06254d74-b37f-4eaf-bc55-f9e0758e1c14_3840w.webp)] bg-cover pt-16 pr-6 pb-16 pl-6 relative" style={{maskImage: 'linear-gradient(0deg, transparent, black 55%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 55%, black 85%, transparent)'}}>
<div className="max-w-7xl mx-auto">
<div className="mb-12 text-center">
<p className="leading-relaxed text-lg font-normal text-zinc-400 max-w-2xl mt-6 mr-auto ml-auto">Others experience say more than a thousand words.</p><h2 className="sm:text-4xl text-3xl font-semibold text-white tracking-tight translate-y-2" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 100%, transparent)'}}>And our clients are loving theirs</h2>
</div>
<div className="flex sm:py-20 pt-12 pb-12 relative items-center justify-center" style={{minHeight: '450px'}}>
<div className="container max-w-full" style={{position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.1), transparent)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 25px 25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -50px', backdropFilter: 'blur(10px)', transform: 'rotate(-10deg)'}}>
<div className="overflow-hidden text-zinc-900 bg-white ring-white/20 ring-1 rounded-xl absolute top-4 right-4 bottom-4 left-4 shadow-2xl">
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="inline-flex bg-emerald-100 w-8 h-8 ring-emerald-200 ring-1 rounded-lg mb-4 items-center justify-center">
<svg className="lucide lucide-quote w-[16px] h-[16px] text-emerald-400" data-icon-replaced="true" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="leading-relaxed text-sm text-zinc-900 mb-4">They transformed our creative workflow. The AI videos are incredibly fascinating. It's like having a full production team right beside you.</p>
<div className="pt-3 border-t border-zinc-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="User" className="w-6 h-6 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/35aac6b4-84c7-4f07-82b3-573a66332935_320w.webp"/>
<div className="">
<div className="text-xs font-medium text-zinc-900">Carlos</div>
<div className="text-xs text-zinc-500">Business Owner</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs font-medium">5.0</span>
</div>
</div>
</div>
</div>
</div>
<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.08), transparent)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 25px 25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -50px', backdropFilter: 'blur(10px)', transform: 'rotate(-6deg)'}}>
<div className="overflow-hidden text-zinc-900 bg-white/90 ring-white/20 ring-1 rounded-xl absolute top-4 right-4 bottom-4 left-4 shadow-xl backdrop-blur">
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="inline-flex bg-emerald-100 w-8 h-8 ring-emerald-200 ring-1 rounded-lg mb-4 items-center justify-center">
<svg className="lucide lucide-quote w-[16px] h-[16px] text-emerald-400" data-icon-replaced="true" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="leading-relaxed text-sm text-zinc-900 mb-4">The videos are absolutely amazing! Can't believe this is what AI can do now.</p>
<div className="pt-3 border-t border-zinc-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="User" className="w-6 h-6 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c698a29b-9d18-4f24-8658-1cf54f9739ff_320w.png"/>
<div className="">
<div className="cursor-pointer text-xs font-medium text-zinc-900" onclick="window.location.href='/Isaac'" role="button">Isaac</div>
<div className="text-xs text-zinc-500">Marketing Manager</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs font-medium">5.0</span>
</div>
</div>
</div>
</div>
</div>
<div className="glass" style={{position: 'relative', width: '340px', height: '340px', background: 'linear-gradient(rgba(255, 255, 255, 0.06), transparent)', border: '1px solid rgba(255, 255, 255, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.3) 0px 25px 25px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '1rem', margin: '0px -50px', backdropFilter: 'blur(10px)', transform: 'rotate(0deg)'}}>
<div className="overflow-hidden text-zinc-900 bg-white/80 ring-white/20 ring-1 rounded-xl absolute top-4 right-4 bottom-4 left-4 shadow-lg backdrop-blur">
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="inline-flex bg-emerald-100 w-8 h-8 ring-emerald-200 ring-1 rounded-lg mb-4 items-center justify-center">
<svg className="lucide lucide-quote w-[16px] h-[16px] text-emerald-400" data-icon-replaced="true" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<p className="leading-relaxed text-sm text-zinc-900 mb-4">From the first video they showed me, I thought it was a great opportunity. It captured my attention from the very beginning.</p>
<div className="flex border-zinc-200 border-t pt-3 items-center justify-between">
<div className="flex items-center gap-2">
<img alt="User" className="w-6 h-6 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d67bba3-e668-44ac-b9ac-698d4c61f39b_320w.png"/>
<div className="">
<div className="text-xs font-medium text-zinc-900">Miguel</div>
<div className="text-xs text-zinc-500">Business Owner</div>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 fill-amber-400 text-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-xs font-medium">4.6</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="[animation:fadeSlideIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate z-10 bg-black pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl z-10 mr-auto ml-auto relative">
<div className="text-center mb-16">
<h2 className="md:text-6xl leading-[1.1] text-5xl font-bold text-white tracking-tighter font-geist mb-6" style={{maskImage: 'linear-gradient(0deg, transparent, black 20%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(0deg, transparent, black 20%, black 80%, transparent)'}}>
            Ready to let AI expand your brand's reach?
          </h2>
<p className="leading-relaxed text-xl font-normal text-zinc-400">The future waits for no one. Request your FREE Demo today.</p>
</div>
<div className="max-w-md mx-auto">
<div className="overflow-hidden transition-transform hover:scale-[1.01] duration-500 bg-zinc-900 border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">

<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full -mr-16 -mt-16 pointer-events-none"></div>
<div className="flex items-start justify-between mb-8 relative z-10">
<div className="">
<h3 className="text-xl font-semibold text-white tracking-tight mb-1">Request a FREE Demo below</h3>
<p className="text-sm font-medium text-zinc-400">A 15 Minute Discovery Session to see if and how we may support your business.</p>
</div>
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300">
<svg className="lucide lucide-calendar" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path className="" d="M16 2v4"></path><rect className="" height="18" rx="2" width="18" x="3" y="4"></rect><path className="" d="M3 10h18"></path></svg>
</div>
</div>
<button className="shiny-cta group flex gap-2 overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_-5px_rgba(16,185,129,0.4)] after:!bg-[linear-gradient(-50deg,transparent,#10b981,transparent)] text-sm font-semibold w-full h-12 rounded-full mb-6 relative gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://api.leadconnectorhq.com/widget/bookings/call-disco-diego'" role="button" style={{'--gradient-shine': '#34d399', background: 'linear-gradient(#052e1f, #052e1f) padding-box, conic-gradient(from calc(var(--gradient-angle) - var(--gradient-angle-offset)), transparent 0%, #10b981 5%, var(--gradient-shine) 15%, #10b981 30%, transparent 40%, transparent 100%) border-box', color: '#ecfdf5', border: '1px solid transparent', boxShadow: 'inset 0 0 0 1px rgba(16, 185, 129, 0.2)'}}>
<span className="relative z-10">BOOK A DEMO</span>
</button>
<div className="text-center">
<p className="text-[11px] uppercase tracking-wide text-zinc-500 font-medium">No obligation. 100% Future-proof.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="relative z-10 px-6 py-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-sm text-zinc-500" style={{}}>© 2025 EXADTLY. All rights reserved.</div>
<div className="flex gap-6 text-sm text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
