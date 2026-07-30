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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

}

{

    document.addEventListener('DOMContentLoaded', function() {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);

        // Observe all elements with scroll animation classes
        const scrollElements = document.querySelectorAll('.scroll-fade, .scroll-slide-left, .scroll-slide-right, .scroll-scale');
        scrollElements.forEach(el => observer.observe(el));

        // Progress bar animations
        const progressBars = document.querySelectorAll('.progress-animate');
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const width = bar.dataset.width || '72';
                    setTimeout(() => {
                        bar.style.width = width + '%';
                        bar.classList.add('animate');
                    }, 300);
                }
            });
        }, observerOptions);

        progressBars.forEach(bar => progressObserver.observe(bar));

        // Counter animations
        const counters = document.querySelectorAll('.counter');
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = parseInt(counter.dataset.count);
                    const duration = 2000;
                    const startTime = performance.now();

                    const updateCounter = (currentTime) => {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        
                        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                        const current = Math.floor(easeOutQuart * target);
                        
                        if (counter.textContent.includes('$')) {
                            counter.textContent = '$' + current.toLocaleString();
                        } else if (counter.textContent.includes('%')) {
                            counter.textContent = current + '%';
                        } else if (counter.textContent.includes('ms')) {
                            counter.textContent = current + 'ms';
                        } else {
                            counter.textContent = current.toLocaleString();
                        }

                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.classList.add('animate');
                        }
                    };

                    requestAnimationFrame(updateCounter);
                }
            });
        }, observerOptions);

        counters.forEach(counter => counterObserver.observe(counter));

        // Initialize progress bars with default width
        setTimeout(() => {
            const firstProgressBar = document.querySelector('.progress-animate:first-of-type');
            if (firstProgressBar && firstProgressBar.getBoundingClientRect().top < window.innerHeight) {
                firstProgressBar.style.width = '72%';
            }
        }, 1000);
    });
    
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
      


<div className="aura-background-component fixed top-0 w-full h-screen -z-10 blur-sm"><div className="absolute top-0 left-0 -z-10 w-full h-full" data-us-project="qF3qXhdiOxdUeQYH8wCK"></div>
</div>

<div className="fixed top-0 left-0 right-0 z-50 bg-transparent pt-4 pr-6 pb-4 pl-6">
<div className="max-w-4xl border-white/10 border rounded-none mr-auto ml-auto pt-3 pr-6 pb-3 pl-6" style={{background: `linear-gradient(180deg, rgba(14,16,26,0.55), rgba(14,16,26,0.35)) padding-box, linear-gradient(120deg, rgba(255,255,255,0.35), rgba(255,255,255,0.08)) border-box`, border: `1px solid transparent`, backdropFilter: `blur(16px) saturate(120%)`, boxShadow: `0 10px 30px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.04)`}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold text-white/90 tracking-tight" style={{}}>TrustAI</span>
</div>
<ul className="hidden md:flex items-center gap-1 text-sm font-medium text-white/60">
<li className=""><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#" style={{}}>Dashboard</a></li>
<li className=""><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#" style={{}}>Features</a></li>
<li className=""><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#" style={{}}>AI Insights</a></li>
<li className=""><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#" style={{}}>Pricing</a></li>
<li className=""><a className="hover:text-white transition-colors duration-300 px-4 py-2 rounded-full hover:bg-white/5 font-sans" href="#" style={{}}>Contact</a></li>
</ul>
<div className="flex items-center gap-1.5 md:gap-2">
<button className="inline-flex md:hidden hover:bg-white/5 p-2 rounded-full transition-all duration-300 border border-white/5" style={{background: `rgba(255, 255, 255, 0.02)`}}>
<svg className="w-5 h-5 stroke-[1.5] text-white/70" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line></line>
<line></line>
<line></line>
</svg>
</button>
<button className="hidden md:inline-flex gap-2 hover:bg-emerald-500 transition-all duration-300 text-sm font-medium text-white bg-neutral-50/10 rounded-none pt-2 pr-4 pb-2 pl-4 items-center font-sans" style={{}}>
                        
                        Get Started
                    </button>
</div>
</div>
</div>
</div>

<section className="relative lg:py-20 pt-24 pb-16">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-4 pl-4">

<div className="text-center mb-16">
<div className="mb-8 space-y-6">
<h1 className="sm:text-6xl lg:text-8xl leading-[0.95] text-4xl font-semibold tracking-tight scroll-fade animate">
<span className="inline-flex items-center gap-3 font-semibold tracking-tighter font-bricolage" style={{}}>Smart
        
        Budget</span>
</h1>
<h1 className="sm:text-6xl lg:text-8xl leading-[0.95] text-4xl font-semibold tracking-tight scroll-fade scroll-delay-200 animate">
<span className="inline-flex items-center gap-3 tracking-tighter font-semibold font-bricolage" style={{}}>
                        AI
                        
                        <span className="text-neutral-300 tracking-tighter font-semibold font-bricolage" style={{}}>POWERED</span>
</span>
</h1>
</div>
<p className="sm:text-xl text-lg text-neutral-300 max-w-3xl mx-auto mb-8 font-light font-sans scroll-fade scroll-delay-300 animate" style={{}}>Take control of your finances with AI-driven insights, automated tracking, and personalized budget recommendations that adapt to your lifestyle.</p>

<div className="flex flex-col sm:flex-row gap-4 mb-6 items-center justify-center scroll-fade scroll-delay-400 animate" id="aura-emfh1tmzs">
<div className="inline-flex gap-3 relative transition-all duration-300 hover:border-white/20 hover:bg-white/5 hover:-translate-y-px cursor-pointer text-base font-medium text-neutral-300 border-white/10 border mb-6 pt-3 pr-6 pb-3 pl-6 items-center" id="aura-emfh21kx3" style={{background: `linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(18,20,28,0.88) 12%, rgba(14,16,24,0.92) 50%, rgba(18,20,28,0.88) 88%, rgba(255,255,255,0.06) 100%)`, backdropFilter: `blur(10px) saturate(120%)`, boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), 0 8px 24px rgba(0,0,0,0.35)`}}>
<span className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-white/70 via-white/40 to-transparent" style={{animation: `fadeStroke 3s ease-in-out infinite`}}></span>
<span className="pointer-events-none absolute right-0 top-0 h-full w-px bg-gradient-to-b from-white/70 via-white/40 to-transparent" style={{animation: `fadeStroke 3s ease-in-out infinite 0.2s`}}></span>
<span className="uppercase text-white/90 tracking-wide font-sans animated-text" style={{position: `relative`, zIndex: `2`}}>
<span className="" style={{'--i': `1`}}>S</span><span className="" style={{'--i': `2`}}>T</span><span className="" style={{'--i': `3`}}>A</span><span className="" style={{'--i': `4`}}>R</span><span className="" style={{'--i': `5`}}>T</span><span style={{'--i': `6`}}> </span><span className="" style={{'--i': `7`}}>F</span><span className="" style={{'--i': `8`}}>R</span><span className="" style={{'--i': `9`}}>E</span><span className="" style={{'--i': `10`}}>E</span><span style={{'--i': `11`}}> </span><span className="" style={{'--i': `12`}}>T</span><span className="" style={{'--i': `13`}}>R</span><span className="" style={{'--i': `14`}}>I</span><span className="" style={{'--i': `15`}}>A</span><span className="" style={{'--i': `16`}}>L</span>
</span>

</div>
<div className="inline-flex gap-3 relative transition-all duration-300 hover:-translate-y-px cursor-pointer hover:border-emerald-400/40 text-base font-medium text-neutral-400 border mb-6 pt-3 pr-8 pb-3 pl-8 items-center" id="aura-emfh2440r" style={{border: `1px solid transparent`, background: `linear-gradient(180deg, rgba(18,20,28,0.55), rgba(12,14,22,0.35)) padding-box, linear-gradient(180deg, rgba(52,211,153,0.45), rgba(52,211,153,0.18)) border-box`, backdropFilter: `blur(10px) saturate(120%)`, boxShadow: `0 14px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)`}}>
<span className="pointer-events-none absolute inset-0" style={{background: `radial-gradient(140% 140% at 10% 0%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.02) 55%, transparent 70%)`}}></span>
<span className="uppercase text-white/90 tracking-wide relative font-sans hover:text-emerald-300 transition-colors duration-300 animated-text" style={{position: `relative`, zIndex: `2`}}>
<span className="" style={{'--i': `1`}}>W</span><span className="" style={{'--i': `2`}}>A</span><span className="" style={{'--i': `3`}}>T</span><span className="" style={{'--i': `4`}}>C</span><span className="" style={{'--i': `5`}}>H</span><span style={{'--i': `6`}}> </span><span className="" style={{'--i': `7`}}>D</span><span className="" style={{'--i': `8`}}>E</span><span className="" style={{'--i': `9`}}>M</span><span className="" style={{'--i': `10`}}>O</span>
</span>

</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="relative overflow-hidden sm:p-8 lg:col-span-2 max-w-none border-white/5 border rounded-none pt-6 pr-6 pb-6 pl-6 scroll-scale scroll-delay-100 animate" style={{background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)`, backdropFilter: `blur(20px)`}}>

<div className="pointer-events-none absolute left-1 top-1 w-3 h-3" style={{borderTop: `1px solid rgba(52,211,153,0.6)`, borderLeft: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute right-1 top-1 w-3 h-3" style={{borderTop: `1px solid rgba(52,211,153,0.6)`, borderRight: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute left-1 bottom-1 w-3 h-3" style={{borderBottom: `1px solid rgba(52,211,153,0.6)`, borderLeft: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute right-1 bottom-1 w-3 h-3" style={{borderBottom: `1px solid rgba(52,211,153,0.6)`, borderRight: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="relative">
<div className="flex items-start justify-between mb-6">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-medium border border-emerald-300/20 text-emerald-300 tracking-wide font-sans" style={{background: `rgba(52, 211, 153, 0.1)`, backdropFilter: `blur(8px)`}}>
            Featured Service
          </div>
<h3 className="text-3xl sm:text-4xl text-white mb-3 tracking-tighter font-semibold font-bricolage" style={{}}>AI Budget Analysis</h3>
<p className="text-neutral-400 sm:text-lg font-light max-w-2xl font-sans" style={{}}>Our advanced AI algorithms analyze your spending patterns and provide personalized recommendations to optimize your financial health.</p>
</div>
</div>
<div className="space-y-4">
<div className="sm:p-6 border-emerald-300/10 border rounded-none pt-4 pr-4 pb-4 pl-4 space-y-3" style={{background: `radial-gradient(120% 120% at 80% 0%, rgba(16,185,129,0.08), rgba(0,0,0,0) 60%)`}}>

<div className="hover:bg-zinc-800/40 transition-all bg-zinc-900/60 border-zinc-800/60 border rounded-none pt-6 pr-6 pb-6 pl-6 backdrop-blur-sm">
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/40">
<svg className="w-5 h-5 text-zinc-300" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className=""></path>
</svg>
</div>
<div className="">
<div className="text-zinc-300 text-lg font-geist font-semibold tracking-tight">budget-analyzer-pro</div>
<div className="text-zinc-500 text-sm font-geist tracking-tight">ML Instance ml-2c4g-budgets</div>
</div>
</div>
<button className="inline-flex items-center justify-center w-10 h-10 rounded-xl border border-zinc-700/60 text-zinc-400 hover:text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800/50 transition-all">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12"></circle>
<circle className="" cx="19" cy="12"></circle>
<circle className="" cx="5" cy="12"></circle>
</svg>
</button>
</div>
<div className="h-px bg-zinc-800/60 mb-6"></div>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3 text-zinc-400 text-sm font-geist">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className=""></path>
</svg>
<span className="uppercase tracking-[0.12em]">AI Processing Load</span>
</div>
<div className="flex items-center gap-3">
<div className="text-lg font-geist font-semibold tracking-tight text-emerald-400 counter" data-count="65" style={{animation: `numberPulse 3s ease-in-out infinite`}}>0%</div>
<div className="px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-400 text-xs font-geist tracking-tight border border-emerald-400/30" style={{animation: `statusGlow 2s ease-in-out infinite`}}>
                  Optimal</div>
</div>
</div>

<div className="flex items-end justify-center gap-1.5 mb-6 px-4">

<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoop 4s ease-in-out infinite 0s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoop 4s ease-in-out infinite 0.2s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoop 4s ease-in-out infinite 0.4s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoop 4s ease-in-out infinite 0.6s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoop 4s ease-in-out infinite 0.8s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoop 4s ease-in-out infinite 1s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoop 4s ease-in-out infinite 1.2s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoop 4s ease-in-out infinite 1.4s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoop 4s ease-in-out infinite 1.6s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoop 4s ease-in-out infinite 1.8s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoopYellow 4s ease-in-out infinite 2s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoopYellow 4s ease-in-out infinite 2.2s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoopAmber 4s ease-in-out infinite 2.4s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoopAmber 4s ease-in-out infinite 2.6s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoopAmberDark 4s ease-in-out infinite 2.8s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoopBlue 4s ease-in-out infinite 3s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoopBlue 4s ease-in-out infinite 3.2s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoopBlueLight 4s ease-in-out infinite 3.4s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoopBlueLight 4s ease-in-out infinite 3.6s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoopBlueLight 4s ease-in-out infinite 3.8s`}}></span>
<span className="h-8 w-2.5 rounded-full shadow-sm" style={{animation: `barLoopBlueFaded 4s ease-in-out infinite 4s`}}></span>

<span className="h-8 w-2.5 rounded-full bg-zinc-700/60 shadow-sm" style={{animation: `staticBarPulse 3s ease-in-out infinite`}}></span>
<span className="h-8 w-2.5 rounded-full bg-zinc-700/60 shadow-sm" style={{animation: `staticBarPulse 3s ease-in-out infinite 0.5s`}}></span>
<span className="h-8 w-2.5 rounded-full bg-zinc-700/60 shadow-sm" style={{animation: `staticBarPulse 3s ease-in-out infinite 1s`}}></span>
<span className="h-8 w-2.5 rounded-full bg-zinc-700/60 shadow-sm" style={{animation: `staticBarPulse 3s ease-in-out infinite 1.5s`}}></span>
<span className="h-8 w-2.5 rounded-full bg-zinc-700/60 shadow-sm" style={{animation: `staticBarPulse 3s ease-in-out infinite 2s`}}></span>
<span className="h-8 w-2.5 rounded-full bg-zinc-700/60 shadow-sm" style={{animation: `staticBarPulse 3s ease-in-out infinite 2.5s`}}></span>
</div>
<div className="flex items-center justify-between">
<div className="text-zinc-500 font-geist text-sm tracking-tight" style={{animation: `textFlicker 4s ease-in-out infinite`}}>Processing <span className="counter" data-count="1200">0</span> budgets • <span className="counter" data-count="8">0</span>GB ML Cache</div>
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]" style={{animation: `statusDotLoop 2s ease-in-out infinite`}}></span>
<span className="text-zinc-300 font-geist font-semibold tracking-tight counter" data-count="45" style={{animation: `latencyLoop 3s ease-in-out infinite`}}>0ms</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-2xl" style={{boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06)`}}></div>
<div className="pointer-events-none absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/5 to-transparent rounded-t-2xl"></div>

</div>

<div className="relative overflow-hidden sm:p-8 scroll-slide-right scroll-delay-200 animate border-white/5 border rounded-none pt-6 pr-6 pb-6 pl-6" id="aura-emfh32kqg" style={{background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)`, backdropFilter: `blur(20px)`}}>

<div className="pointer-events-none absolute left-1 top-1 w-3 h-3" style={{borderTop: `1px solid rgba(52,211,153,0.6)`, borderLeft: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute right-1 top-1 w-3 h-3" style={{borderTop: `1px solid rgba(52,211,153,0.6)`, borderRight: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute left-1 bottom-1 w-3 h-3" style={{borderBottom: `1px solid rgba(52,211,153,0.6)`, borderLeft: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute right-1 bottom-1 w-3 h-3" style={{borderBottom: `1px solid rgba(52,211,153,0.6)`, borderRight: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="absolute right-6 top-6 hidden sm:block"></div>
<div className="relative">
<div className="inline-flex gap-2 text-xs font-medium text-emerald-200 tracking-wide border-emerald-300/20 border mb-4 pt-1 pr-3 pb-1 pl-3 items-center font-sans" style={{background: `rgba(52, 211, 153, 0.1)`, backdropFilter: `blur(8px)`}}>
        Real-time
      </div>
<h3 className="text-2xl sm:text-3xl text-white mb-3 tracking-tighter font-semibold font-bricolage">Expense Tracking</h3>
<p className="text-neutral-400 sm:text-lg font-light mb-6 font-sans">Monitor your spending in real-time with automatic bank synchronization and intelligent expense categorization.</p>
<div className="sm:p-6 border-emerald-300/10 border rounded-none pt-4 pr-4 pb-4 pl-4 space-y-3" style={{background: `radial-gradient(120% 120% at 0% 0%, rgba(52,211,153,0.04) 0%, rgba(52,211,153,0.02) 35%, transparent 70%)`}}>
<div className="space-y-2">
<span className="text-neutral-300 text-sm font-medium font-sans">Food & Dining</span>
<div className="relative w-full h-3.5 rounded-full border border-emerald-300/20 overflow-hidden" style={{background: `linear-gradient(90deg, rgba(10,10,10,0.8) 0%, rgba(24,24,24,0.8) 100%)`}}>
<div className="relative h-full rounded-full animate-progress-bar" style={{width: `72%`, transform: `scaleX(0)`, transformOrigin: `left center`, animation: `progressFill 2s ease-out forwards`}}>
<div className="absolute inset-0 rounded-full" style={{background: `linear-gradient(90deg, rgba(52,211,153,0.25) 0%, rgba(16,185,129,0.65) 55%, rgba(52,211,153,0.95) 100%)`, boxShadow: `0 0 20px rgba(52,211,153,0.25) inset, 0 0 24px rgba(52,211,153,0.35)`}}></div>
<span className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full animate-pulse-glow" style={{background: `radial-gradient(50% 50% at 50% 50%, rgba(167,243,208,1) 0%, rgba(167,243,208,0.65) 60%, rgba(167,243,208,0) 100%)`, boxShadow: `0 0 12px rgba(167,243,208,0.8), 0 0 28px rgba(167,243,208,0.35)`}}></span>
</div>
</div>
</div>
<div className="space-y-2 pt-4">
<span className="text-neutral-300 text-sm font-medium font-sans">Transportation</span>
<div className="relative w-full h-3.5 rounded-full border border-emerald-300/20 overflow-hidden" style={{background: `linear-gradient(90deg, rgba(10,10,10,0.8) 0%, rgba(24,24,24,0.8) 100%)`}}>
<div className="relative h-full rounded-full animate-progress-bar" style={{width: `45%`, transform: `scaleX(0)`, transformOrigin: `left center`, animation: `progressFill 2s ease-out 0.5s forwards`}}>
<div className="absolute inset-0 rounded-full" style={{background: `linear-gradient(90deg, rgba(52,211,153,0.25) 0%, rgba(16,185,129,0.65) 55%, rgba(52,211,153,0.95) 100%)`, boxShadow: `0 0 20px rgba(52,211,153,0.25) inset, 0 0 24px rgba(52,211,153,0.35)`}}></div>
<span className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full animate-pulse-glow" style={{background: `radial-gradient(50% 50% at 50% 50%, rgba(167,243,208,1) 0%, rgba(167,243,208,0.65) 60%, rgba(167,243,208,0) 100%)`, boxShadow: `0 0 12px rgba(167,243,208,0.8), 0 0 28px rgba(167,243,208,0.35)`, animationDelay: `0.5s`}}></span>
</div>
</div>
</div>
<div className="space-y-2 pt-4">
<span className="text-neutral-300 text-sm font-medium font-sans">Shopping</span>
<div className="relative w-full h-3.5 rounded-full border border-emerald-300/20 overflow-hidden" style={{background: `linear-gradient(90deg, rgba(10,10,10,0.8) 0%, rgba(24,24,24,0.8) 100%)`}}>
<div className="relative h-full rounded-full animate-progress-bar" style={{width: `88%`, transform: `scaleX(0)`, transformOrigin: `left center`, animation: `progressFill 2s ease-out 1s forwards`}}>
<div className="absolute inset-0 rounded-full" style={{background: `linear-gradient(90deg, rgba(52,211,153,0.25) 0%, rgba(16,185,129,0.65) 55%, rgba(52,211,153,0.95) 100%)`, boxShadow: `0 0 20px rgba(52,211,153,0.25) inset, 0 0 24px rgba(52,211,153,0.35)`}}></div>
<span className="absolute right-1 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full animate-pulse-glow" style={{background: `radial-gradient(50% 50% at 50% 50%, rgba(167,243,208,1) 0%, rgba(167,243,208,0.65) 60%, rgba(167,243,208,0) 100%)`, boxShadow: `0 0 12px rgba(167,243,208,0.8), 0 0 28px rgba(167,243,208,0.35)`, animationDelay: `1s`}}></span>
</div>
</div>
</div>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-2xl" style={{boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06)`}}></div>

</div>

<div className="relative overflow-hidden sm:p-8 border-white/5 border rounded-none pt-6 pr-6 pb-6 pl-6 scroll-slide-left scroll-delay-300" style={{background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)`, backdropFilter: `blur(20px)`}}>

<div className="pointer-events-none absolute left-1 top-1 w-3 h-3" style={{borderTop: `1px solid rgba(52,211,153,0.6)`, borderLeft: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute right-1 top-1 w-3 h-3" style={{borderTop: `1px solid rgba(52,211,153,0.6)`, borderRight: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute left-1 bottom-1 w-3 h-3" style={{borderBottom: `1px solid rgba(52,211,153,0.6)`, borderLeft: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute right-1 bottom-1 w-3 h-3" style={{borderBottom: `1px solid rgba(52,211,153,0.6)`, borderRight: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="absolute right-6 top-6 hidden sm:block">
</div>
<div className="relative space-y-4">
<div className="sm:p-6 border-0 rounded-none pt-4 pr-4 pb-4 pl-4 space-y-3">
<div className="relative mx-auto aspect-square w-full max-w-[280px]">

<div className="absolute inset-0 rounded-full border-2 border-zinc-800/60" style={{animation: `ringPulse 4s ease-in-out infinite`}}></div>
<div className="absolute inset-[12%] rounded-full border border-zinc-800/40" style={{animation: `ringPulse 4s ease-in-out infinite 0.5s`}}></div>
<div className="absolute inset-[24%] rounded-full border border-zinc-800/30" style={{animation: `ringPulse 4s ease-in-out infinite 1s`}}></div>
<div className="absolute inset-[36%] rounded-full border border-zinc-800/20" style={{animation: `ringPulse 4s ease-in-out infinite 1.5s`}}></div>

<div className="absolute inset-0 rounded-full overflow-hidden">
<div className="absolute inset-0 rounded-full" style={{background: `conic-gradient(from 0deg, rgba(16,185,129,0.4) 0deg, rgba(16,185,129,0.6) 30deg, rgba(16,185,129,0.2) 45deg, transparent 60deg 360deg)`, transformOrigin: `50% 50%`, animation: `radarSweep 6s linear infinite`}}>
</div>
</div>

<div className="absolute inset-[38%] rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-600/10 border border-emerald-500/30 backdrop-blur-sm" style={{animation: `coreGlow 3s ease-in-out infinite`}}>
<div className="absolute inset-2 rounded-full bg-emerald-400/10 flex items-center justify-center">
</div>
</div>

<div className="absolute left-[18%] top-[28%] -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]" style={{animation: `dataPointPulse 2s infinite`}}></div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-emerald-300 whitespace-nowrap font-geist tracking-tight counter" data-count="2340" style={{animation: `numberFlicker 3s ease-in-out infinite`}}>$0</div>
</div>
</div>
<div className="absolute right-[18%] top-[35%] -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<div className="h-2.5 w-2.5 rounded-full bg-emerald-400/80 shadow-[0_0_8px_rgba(16,185,129,0.4)]" style={{animation: `dataPointPulse 2.5s infinite 0.5s`}}></div>
<div className="absolute -top-7 left-1/2 -translate-x-1/2 text-xs text-emerald-300/80 whitespace-nowrap font-geist tracking-tight counter" data-count="890" style={{animation: `numberFlicker 3s ease-in-out infinite 0.5s`}}>$0</div>
</div>
</div>
<div className="absolute left-[50%] bottom-[22%] -translate-x-1/2 -translate-y-1/2">
<div className="relative">
<div className="h-2 w-2 rounded-full bg-emerald-400/70 shadow-[0_0_6px_rgba(16,185,129,0.3)]" style={{animation: `dataPointPulse 3s infinite 1s`}}></div>
<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-emerald-300/70 whitespace-nowrap font-geist tracking-tight counter" data-count="1205" style={{animation: `numberFlicker 3s ease-in-out infinite 1s`}}>$0</div>
</div>
</div>

</div>
</div><div className="inline-flex gap-2 text-xs font-medium text-emerald-200 tracking-wide border-emerald-300/20 border mb-4 pt-1 pr-3 pb-1 pl-3 items-center" style={{background: `rgba(52, 211, 153, 0.1)`, backdropFilter: `blur(8px)`}}>Data-Driven</div>
<h3 className="sm:text-3xl text-2xl font-semibold text-white tracking-tighter font-bricolage mb-3" style={{}}>Real-time Monitoring</h3>
<p className="sm:text-lg font-light text-neutral-400 mb-6" style={{}}>Continuous AI-powered surveillance of your financial transactions, automated alerts for unusual spending, and
      intelligent budget adjustments to keep you on track toward your financial objectives.</p>
</div>
<div className="pointer-events-none absolute inset-0 rounded-2xl" style={{boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06)`}}></div>
</div>

<div className="relative overflow-hidden sm:p-8 lg:col-span-2 border-white/5 border rounded-none pt-6 pr-6 pb-6 pl-6 scroll-scale scroll-delay-400" style={{background: `linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)`, backdropFilter: `blur(20px)`}}>

<div className="pointer-events-none absolute left-1 top-1 w-3 h-3" style={{borderTop: `1px solid rgba(52,211,153,0.6)`, borderLeft: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute right-1 top-1 w-3 h-3" style={{borderTop: `1px solid rgba(52,211,153,0.6)`, borderRight: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute left-1 bottom-1 w-3 h-3" style={{borderBottom: `1px solid rgba(52,211,153,0.6)`, borderLeft: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute right-1 bottom-1 w-3 h-3" style={{borderBottom: `1px solid rgba(52,211,153,0.6)`, borderRight: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="sm:p-6 border-0 rounded-none pt-4 pr-4 pb-4 pl-4 space-y-3">
<div className="relative rounded-2xl border border-zinc-800/60 bg-zinc-950/80 backdrop-blur-sm flex-1 overflow-hidden" style={{animation: `codeWindowGlow 4s ease-in-out infinite`}}>

<div className="flex items-center gap-2.5 px-5 py-4 border-b border-zinc-800/40">
<div className="flex gap-2">
<span className="h-3 w-3 rounded-full bg-zinc-600" style={{animation: `windowDot 3s ease-in-out infinite`}}></span>
<span className="h-3 w-3 rounded-full bg-zinc-600" style={{animation: `windowDot 3s ease-in-out infinite 0.2s`}}></span>
<span className="h-3 w-3 rounded-full bg-zinc-600" style={{animation: `windowDot 3s ease-in-out infinite 0.4s`}}></span>
</div>
<div className="flex-1 text-center">
<span className="text-zinc-500 text-sm font-geist tracking-tight" style={{animation: `fileNameFlicker 4s ease-in-out infinite`}}>ml_portfolio_optimizer.py</span>
</div>
</div>
<div className="relative p-5 md:p-6 flex-1 overflow-hidden">
<div className="scrolling-code-container" style={{height: `300px`, overflow: `hidden`, position: `relative`}}>
<div className="scrolling-code" style={{animation: `codeScroll 12s linear infinite`, position: `absolute`, width: `100%`}}>
<pre className="text-[13px] md:text-[14px] leading-7 text-zinc-300 w-full font-geist tracking-tight"><span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">1</span><span className="text-emerald-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite`}}>import</span> numpy <span className="text-emerald-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 0.1s`}}>as</span> np
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">2</span><span className="text-emerald-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 0.2s`}}>import</span> tensorflow <span className="text-emerald-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 0.3s`}}>as</span> tf
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">3</span><span className="text-emerald-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 0.4s`}}>from</span> sklearn.ensemble <span className="text-emerald-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 0.5s`}}>import</span> RandomForestRegressor
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">4</span><span className="text-emerald-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 0.6s`}}>from</span> sklearn.metrics <span className="text-emerald-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 0.7s`}}>import</span> mean_squared_error
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">5</span>
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">6</span><span className="text-emerald-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 0.8s`}}>class</span> <span className="text-white font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 0.9s`}}>PortfolioOptimizer</span>:
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">7</span>    <span className="text-emerald-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 1s`}}>def</span> <span className="text-white font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 1.1s`}}>__init__</span>(<span className="text-orange-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 1.2s`}}>self</span>):
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">8</span>        <span className="text-orange-400 font-geist tracking-tight">self</span>.model = <span className="text-blue-400 font-geist tracking-tight">None</span>
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">9</span>        <span className="text-orange-400 font-geist tracking-tight">self</span>.features = []
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">10</span>
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">11</span>    <span className="text-emerald-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 1.4s`}}>def</span> <span className="text-white font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 1.5s`}}>train_model</span>(<span className="text-orange-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 1.6s`}}>self</span>, features, targets):
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">12</span>        model = RandomForestRegressor(<span className="text-blue-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 1.8s`}}>n_estimators</span>=<span className="text-orange-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 1.9s`}}>100</span>)
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">13</span>        model.fit(features, targets)
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">14</span>        <span className="text-orange-400 font-geist tracking-tight">self</span>.model = model
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">15</span>        <span className="text-emerald-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 2.2s`}}>return</span> {"{"}
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">16</span>            <span className="text-blue-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 2.4s`}}>'model'</span>: model,
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">17</span>            <span className="text-blue-400 font-geist tracking-tight" style={{animation: `codeHighlight 4s ease-in-out infinite 2.6s`}}>'accuracy'</span>: model.score(features, targets)
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">18</span>        {"}"}
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">19</span>
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">20</span>    <span className="text-emerald-400 font-geist tracking-tight">def</span> <span className="text-white font-geist tracking-tight">predict_returns</span>(<span className="text-orange-400 font-geist tracking-tight">self</span>, portfolio_data):
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">21</span>        <span className="text-emerald-400 font-geist tracking-tight">if</span> <span className="text-orange-400 font-geist tracking-tight">self</span>.model <span className="text-emerald-400 font-geist tracking-tight">is</span> <span className="text-blue-400 font-geist tracking-tight">None</span>:
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">22</span>            <span className="text-emerald-400 font-geist tracking-tight">raise</span> <span className="text-orange-400 font-geist tracking-tight">ValueError</span>(<span className="text-blue-400 font-geist tracking-tight">"Model not trained"</span>)
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">23</span>        <span className="text-emerald-400 font-geist tracking-tight">return</span> <span className="text-orange-400 font-geist tracking-tight">self</span>.model.predict(portfolio_data)
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">24</span>
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">25</span>    <span className="text-emerald-400 font-geist tracking-tight">def</span> <span className="text-white font-geist tracking-tight">optimize_portfolio</span>(<span className="text-orange-400 font-geist tracking-tight">self</span>, risk_tolerance):
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">26</span>        weights = np.random.dirichlet(np.ones(<span className="text-orange-400 font-geist tracking-tight">10</span>))
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">27</span>        expected_return = np.dot(weights, <span className="text-orange-400 font-geist tracking-tight">self</span>.expected_returns)
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">28</span>        portfolio_risk = np.sqrt(weights @ <span className="text-orange-400 font-geist tracking-tight">self</span>.cov_matrix @ weights)
<span className="text-zinc-600 select-none w-8 inline-block font-geist tracking-tight">29</span>        <span className="text-emerald-400 font-geist tracking-tight">return</span> {"{"}<span className="text-blue-400 font-geist tracking-tight">'weights'</span>: weights, <span className="text-blue-400 font-geist tracking-tight">'return'</span>: expected_return{"}"}</pre>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none"></div>
</div>

<div className="absolute inset-0 ring-inset ring-white/5 ring-1 rounded-2xl"></div>
</div>
</div>
<div className="flex items-center justify-between">
<div className="">
<div className="inline-flex gap-2 text-xs font-medium text-emerald-200 tracking-wide border-emerald-300/20 border mb-4 pt-1 pr-3 pb-1 pl-3 items-center" style={{background: `rgba(52, 211, 153, 0.1)`, backdropFilter: `blur(8px)`}}>
                Machine Learning
            </div>
<h3 className="sm:text-3xl text-2xl font-semibold text-white tracking-tighter font-bricolage mb-2" style={{}}>AI Portfolio Engine</h3>
<p className="text-neutral-400 sm:text-lg font-light font-sans" style={{}}>Advanced machine learning algorithms analyze market patterns and risk metrics to optimize your investment portfolio allocation automatically.</p>
</div>
</div>
<div className="pointer-events-none absolute inset-0 rounded-2xl" style={{boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06)`}}></div>
<div className="pointer-events-none absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-2xl"></div>

</div>
</div>


</div>
</section>



<section className="sm:py-20 bg-[#000000] border-neutral-800 border-t pt-16 pb-16">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">
<div className="text-left mb-12">
<span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400 tracking-wide border-emerald-300/20 border pt-1 pr-3.5 pb-1 pl-3.5 scroll-fade" style={{background: `rgba(52, 211, 153, 0.03)`, backdropFilter: `blur(8px)`}}>
                    Process
                </span>
<h2 className="sm:text-6xl text-4xl tracking-tighter text-left mt-4 font-semibold font-bricolage scroll-fade scroll-delay-100" style={{}}>How It Works</h2>
<p className="sm:text-xl font-light text-neutral-400 text-left mt-3 font-sans scroll-fade scroll-delay-200" style={{}}>Our AI-powered system learns your financial habits and helps you achieve your goals</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="relative overflow-hidden sm:p-8 border-white/10 border pt-6 pr-6 pb-6 pl-6 scroll-slide-left scroll-delay-100" style={{background: `rgba(255, 255, 255, 0.03)`, backdropFilter: `blur(20px)`, boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3)`}}>

<div className="pointer-events-none absolute left-1 top-1 w-3 h-3" style={{borderTop: `1px solid rgba(52,211,153,0.6)`, borderLeft: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute right-1 top-1 w-3 h-3" style={{borderTop: `1px solid rgba(52,211,153,0.6)`, borderRight: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute left-1 bottom-1 w-3 h-3" style={{borderBottom: `1px solid rgba(52,211,153,0.6)`, borderLeft: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute right-1 bottom-1 w-3 h-3" style={{borderBottom: `1px solid rgba(52,211,153,0.6)`, borderRight: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="absolute inset-0 pointer-events-none" style={{background: `rgba(255, 255, 255, 0.05)`, backdropFilter: `blur(8px)`}}></div>
<div className="relative text-center max-w-3xl mr-auto ml-auto">

<div className="relative inline-flex items-center justify-center">
<span className="absolute -left-2 w-px bg-gradient-to-b from-emerald-400/70 to-emerald-400/10 h-8"></span>
<span className="text-sm font-medium text-emerald-200 border-emerald-300/20 border pt-1.5 pr-4 pb-1.5 pl-4 font-sans" style={{background: `rgba(52, 211, 153, 0.08)`, backdropFilter: `blur(8px)`}}>
                                step 1
                            </span>
<span className="absolute -right-2 w-px bg-gradient-to-b from-emerald-400/70 to-emerald-400/10 h-8"></span>
</div>

<h3 className="mt-6 sm:mt-8 text-3xl sm:text-4xl text-neutral-200 tracking-tighter font-semibold font-bricolage" style={{}}>
                            Connect Your Accounts
                        </h3>

<p className="mt-6 sm:text-xl text-lg text-neutral-400 max-w-3xl mx-auto font-light font-sans" style={{}}>
                            Securely link your bank accounts, credit cards, and investment accounts for comprehensive financial tracking.
                        </p>
</div>
</div>

<div className="relative overflow-hidden sm:p-8 border-white/10 border pt-8 pr-6 pb-8 pl-6 scroll-fade scroll-delay-200" style={{background: `rgba(255, 255, 255, 0.03)`, backdropFilter: `blur(20px)`, boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3)`}}>

<div className="pointer-events-none absolute left-1 top-1 w-3 h-3" style={{borderTop: `1px solid rgba(52,211,153,0.6)`, borderLeft: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute right-1 top-1 w-3 h-3" style={{borderTop: `1px solid rgba(52,211,153,0.6)`, borderRight: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute left-1 bottom-1 w-3 h-3" style={{borderBottom: `1px solid rgba(52,211,153,0.6)`, borderLeft: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute right-1 bottom-1 w-3 h-3" style={{borderBottom: `1px solid rgba(52,211,153,0.6)`, borderRight: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="absolute inset-0 pointer-events-none" style={{background: `rgba(255, 255, 255, 0.05)`, backdropFilter: `blur(8px)`}}></div>
<div className="relative text-center max-w-3xl mx-auto">

<div className="relative inline-flex items-center justify-center">
<span className="absolute -left-2 h-8 w-px bg-gradient-to-b from-emerald-400/70 to-emerald-400/10"></span>
<span className="px-4 py-1.5 text-sm font-medium text-emerald-200 border border-emerald-300/20 font-sans" style={{background: `rgba(52, 211, 153, 0.08)`, backdropFilter: `blur(8px)`}}>
                                step 2
                            </span>
<span className="absolute -right-2 h-8 w-px bg-gradient-to-b from-emerald-400/70 to-emerald-400/10"></span>
</div>

<h3 className="mt-6 sm:mt-8 text-3xl sm:text-4xl text-neutral-200 tracking-tighter font-semibold font-bricolage" style={{}}>
                            AI Analysis & Insights
                        </h3>

<p className="mt-6 sm:text-xl text-lg text-neutral-400 max-w-3xl mx-auto font-light font-sans" style={{}}>
                            Our advanced AI algorithms analyze your spending patterns and provide personalized financial insights and recommendations.
                        </p>
</div>
</div>

<div className="relative overflow-hidden sm:p-8 border-white/10 border pt-8 pr-6 pb-8 pl-6 scroll-slide-right scroll-delay-300" style={{background: `rgba(255, 255, 255, 0.03)`, backdropFilter: `blur(20px)`, boxShadow: `0 8px 32px rgba(0, 0, 0, 0.3)`}}>

<div className="pointer-events-none absolute left-1 top-1 w-3 h-3" style={{borderTop: `1px solid rgba(52,211,153,0.6)`, borderLeft: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute right-1 top-1 w-3 h-3" style={{borderTop: `1px solid rgba(52,211,153,0.6)`, borderRight: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute left-1 bottom-1 w-3 h-3" style={{borderBottom: `1px solid rgba(52,211,153,0.6)`, borderLeft: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="pointer-events-none absolute right-1 bottom-1 w-3 h-3" style={{borderBottom: `1px solid rgba(52,211,153,0.6)`, borderRight: `1px solid rgba(52,211,153,0.6)`}}></div>
<div className="absolute inset-0 pointer-events-none" style={{background: `rgba(255, 255, 255, 0.05)`, backdropFilter: `blur(8px)`}}></div>
<div className="relative text-center max-w-3xl mx-auto">

<div className="relative inline-flex items-center justify-center">
<span className="absolute -left-2 h-8 w-px bg-gradient-to-b from-emerald-400/70 to-emerald-400/10"></span>
<span className="px-4 py-1.5 text-sm font-medium text-emerald-200 border border-emerald-300/20 font-sans" style={{background: `rgba(52, 211, 153, 0.08)`, backdropFilter: `blur(8px)`}}>
                                step 3
                            </span>
<span className="absolute -right-2 h-8 w-px bg-gradient-to-b from-emerald-400/70 to-emerald-400/10"></span>
</div>

<h3 className="mt-6 sm:mt-8 text-3xl sm:text-4xl text-neutral-200 tracking-tighter font-semibold font-bricolage" style={{}}>
                            Optimize & Achieve Goals
                        </h3>

<p className="mt-6 sm:text-xl text-lg text-neutral-400 max-w-3xl mx-auto font-light font-sans" style={{}}>
                            Implement AI-driven recommendations to optimize your spending, increase savings, and achieve your financial goals faster.
                        </p>
</div>
</div>
</div>
<div className="mt-12">
</div>
</div>
</section>

<section className="sm:py-20 bg-[#000000] border-neutral-800 border-t pt-16 pb-0">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

<div className="relative flex flex-col scroll-slide-left">
<div className="flex gap-2 text-xs font-medium text-emerald-300 tracking-wide w-fit border-emerald-300/20 border rounded-none pt-1 pr-3.5 pb-1 pl-3.5 items-center" style={{background: `rgba(52,211,153,0.08)`, backdropFilter: `blur(6px)`}}>
  Client Success
</div>
<h2 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-white font-bricolage leading-[1.05]">
        Real Results
      </h2>
<p className="mt-4 sm:text-xl text-lg text-neutral-400 font-light max-w-3xl">
        Discover how our AI-powered financial platform has transformed budget management and delivered measurable results for our users.
      </p>
<div className="mt-8 space-y-3 flex-grow">

<button className="group relative w-full text-left scroll-fade scroll-delay-100">
<div className="relative flex items-center justify-between px-5 py-4 border border-emerald-300/20 rounded-none overflow-hidden" style={{background: `linear-gradient(180deg, rgba(16,185,129,0.15), rgba(16,185,129,0.05))`, boxShadow: `inset 0 1px 0 rgba(52,211,153,0.2)`}}>
<span className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/60 via-emerald-400/30 to-transparent"></span>
<div className="flex items-center gap-3">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></span>
<span className="text-white font-medium tracking-tight">Portfolio Optimizer</span>
</div>
<span className="text-emerald-300 text-sm">Active</span>
<span className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-all" style={{background: `radial-gradient(120% 120% at 10% 0%, rgba(52,211,153,0.15), transparent 55%)`}}></span>
</div>
</button>

<button className="group relative w-full text-left scroll-fade scroll-delay-200">
<div className="relative flex items-center justify-between px-5 py-4 border border-white/10 rounded-none" style={{background: `rgba(18,20,28,0.6)`}}>
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-neutral-400"></span>
<span className="text-neutral-300 font-medium tracking-tight">Smart Budget AI</span>
</div>
<span className="text-neutral-500 text-sm">2024</span>
</div>
</button>

<button className="group relative w-full text-left scroll-fade scroll-delay-300">
<div className="relative flex items-center justify-between px-5 py-4 border border-white/10 rounded-none" style={{background: `rgba(18,20,28,0.6)`}}>
<div className="flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-neutral-600"></span>
<span className="text-neutral-300 font-medium tracking-tight">Expense Tracker Pro</span>
</div>
<span className="text-neutral-500 text-sm">2023</span>
</div>
</button>
</div>
</div>

<div className="relative min-h-full scroll-slide-right scroll-delay-100">
<div className="relative overflow-hidden bg-neutral-50/5 w-full h-full border-emerald-300/20 border rounded-none">

<span className="pointer-events-none absolute left-1 top-1 h-3 w-3" style={{borderTop: `1px solid rgba(52,211,153,0.4)`, borderLeft: `1px solid rgba(52,211,153,0.4)`}}></span>
<span className="pointer-events-none absolute right-1 top-1 h-3 w-3" style={{borderTop: `1px solid rgba(52,211,153,0.4)`, borderRight: `1px solid rgba(52,211,153,0.4)`}}></span>
<span className="pointer-events-none absolute left-1 bottom-1 h-3 w-3" style={{borderBottom: `1px solid rgba(52,211,153,0.4)`, borderLeft: `1px solid rgba(52,211,153,0.4)`}}></span>
<span className="pointer-events-none absolute right-1 bottom-1 h-3 w-3" style={{borderBottom: `1px solid rgba(52,211,153,0.4)`, borderRight: `1px solid rgba(52,211,153,0.4)`}}></span>
<img alt="AI-powered financial dashboard analytics" className="absolute inset-0 block w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0465d628-a834-480c-8e14-ff665ed9a84b_800w.jpg" style={{}} />

<div className="absolute left-0 right-0 bottom-0">
<div className="border-emerald-300/20 border-t pt-5 pr-6 pb-5 pl-6" style={{background: `linear-gradient(0deg, rgba(14,16,24,0.95), rgba(14,16,24,0.7))`, backdropFilter: `blur(8px)`}}>
<h4 className="text-xl font-semibold tracking-tight text-white font-bricolage mb-2">AI Investment Analytics</h4>
<p className="text-neutral-300 font-light">
              Our machine learning algorithms analyze market trends and user behavior to optimize portfolio allocation, resulting in 25% better returns.
            </p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6 pt-6 pr-6 pb-6 pl-6">
<div className="text-center">
</div>
<section className="relative z-10 sm:py-24 fade-in fade-in-delay-4 pt-8 pb-8 scroll-fade" style={{opacity: `1`, transform: `translateY(0px)`}}>
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<p className="uppercase text-sm font-medium text-zinc-400 tracking-wide">Powering the world's most focused product teams</p>
</div>

<div className="relative overflow-hidden">

<div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>

<div className="ticker-track flex gap-16 pt-2 pb-2 items-center">

<div className="flex gap-16 shrink-0 items-center">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">TechFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">InnovateTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">FlowState</span>
</div>
</div>

<div className="flex items-center gap-16 shrink-0">
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">TechFlow</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter font-bricolage">Nexus Labs</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-merriweather">DataSync</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter font-instrument-serif">VisionCorp</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-semibold tracking-tighter font-playfair">CloudBase</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-normal tracking-tighter">InnovateTech</span>
</div>
<div className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors duration-300">
<span className="text-lg font-bold tracking-tighter">FlowState</span>
</div>
</div>
</div>
</div>
</div><div className="grid grid-cols-2 sm:grid-cols-3 mt-10 items-center">
<div className="col-span-1 sm:col-span-1 hidden sm:block h-px bg-emerald-400/10 sm:mx-6 lg:mx-10"></div>
<div className="flex items-center justify-center gap-8 sm:gap-12">
<div className="text-center">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight text-emerald-400 counter" data-count="2500000">$0</div>
<div className="text-neutral-400 text-sm mt-1">Money Managed</div>
</div>
<div className="h-10 w-px bg-emerald-400/20 hidden sm:block"></div>
<div className="text-center">
<div className="text-3xl sm:text-4xl font-semibold tracking-tight text-emerald-400 counter" data-count="50000">0</div>
<div className="text-neutral-400 text-sm mt-1">Active Users</div>
</div>
</div>
<div className="col-span-1 sm:col-span-1 hidden sm:block h-px bg-emerald-400/10 sm:mx-6 lg:mx-10"></div>
</div>

</section>
</div>


<div className="mt-12">
</div>
</div>
</section><section className="sm:py-20 bg-[#000000] border-neutral-800 border-t pt-16 pb-16">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-5xl tracking-tighter font-semibold font-bricolage scroll-fade" style={{}}>User Success Stories</h2>
<p className="mt-4 text-xl text-neutral-400 font-light font-sans scroll-fade scroll-delay-100" style={{}}>How FinanceAI has transformed financial lives</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="relative overflow-hidden border border-white/10 p-3 sm:p-4 scroll-scale scroll-delay-100" style={{background: `radial-gradient(140% 120% at 10% 0%, rgba(52,211,153,0.06), rgba(14,16,24,0.6) 55%)`, backdropFilter: `blur(12px)`}}>
<span className="pointer-events-none absolute left-1 top-1 h-3 w-3" style={{borderTop: `1px solid rgba(52,211,153,0.35)`, borderLeft: `1px solid rgba(52,211,153,0.35)`}}></span>
<span className="pointer-events-none absolute right-1 top-1 h-3 w-3" style={{borderTop: `1px solid rgba(52,211,153,0.35)`, borderRight: `1px solid rgba(52,211,153,0.35)`}}></span>
<span className="pointer-events-none absolute left-1 bottom-1 h-3 w-3" style={{borderBottom: `1px solid rgba(52,211,153,0.35)`, borderLeft: `1px solid rgba(52,211,153,0.35)`}}></span>
<span className="pointer-events-none absolute right-1 bottom-1 h-3 w-3" style={{borderBottom: `1px solid rgba(52,211,153,0.35)`, borderRight: `1px solid rgba(52,211,153,0.35)`}}></span>
<div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
<img alt="FinanceAI user reviewing insights on mobile" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/8dc2b898-c218-4c08-aae5-ed85b4dee85c_1600w.jpg" />
<div className="absolute inset-0" style={{background: `linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.15))`}}></div>
<div className="absolute left-3 top-3">
<span className="px-2.5 py-1 text-xs font-medium tracking-tight text-emerald-200 border border-emerald-300/30" style={{background: `rgba(52,211,153,0.12)`, backdropFilter: `blur(6px)`}}>Customer Story</span>
</div>
</div>
</div>

<div className="relative overflow-hidden border border-white/10 p-6 sm:p-8 scroll-slide-right scroll-delay-100" style={{background: `linear-gradient(180deg, rgba(18,20,28,0.92), rgba(10,12,18,0.85))`, backdropFilter: `blur(14px)`}}>
<span className="pointer-events-none absolute left-1 top-1 h-3 w-3" style={{borderTop: `1px solid rgba(52,211,153,0.35)`, borderLeft: `1px solid rgba(52,211,153,0.35)`}}></span>
<span className="pointer-events-none absolute right-1 top-1 h-3 w-3" style={{borderTop: `1px solid rgba(52,211,153,0.35)`, borderRight: `1px solid rgba(52,211,153,0.35)`}}></span>
<span className="pointer-events-none absolute left-1 bottom-1 h-3 w-3" style={{borderBottom: `1px solid rgba(52,211,153,0.35)`, borderLeft: `1px solid rgba(52,211,153,0.35)`}}></span>
<span className="pointer-events-none absolute right-1 bottom-1 h-3 w-3" style={{borderBottom: `1px solid rgba(52,211,153,0.35)`, borderRight: `1px solid rgba(52,211,153,0.35)`}}></span>

<div className="w-full flex items-center justify-center mb-6">
<div className="relative inline-flex items-center">
<span className="absolute -left-3 h-6 w-px bg-gradient-to-b from-emerald-400/70 to-emerald-400/10"></span>
<span className="px-3 py-1 text-xs font-medium tracking-tight text-emerald-200 border border-emerald-300/30" style={{background: `rgba(52,211,153,0.12)`, backdropFilter: `blur(8px)`}}>Verified result</span>
<span className="absolute -right-3 h-6 w-px bg-gradient-to-b from-emerald-400/70 to-emerald-400/10"></span>
</div>
</div>

<p className="text-neutral-300 text-xl sm:text-2xl md:text-3xl leading-[1.35] tracking-tight font-sans">
      FinanceAI's <span className="text-white font-semibold">AI‑driven budgeting</span> gave us instant clarity—turning messy
      statements into <span className="text-white font-semibold">actionable insights</span>. We tightened spend, boosted savings,
      and stayed on track with <span className="text-white font-semibold">smart, timely alerts</span>.
    </p>
<div className="mt-4 text-sm text-white/70 font-sans tracking-tight">— Maya R., Product Lead</div>
</div>

<div className="relative overflow-hidden sm:p-8 border-white/10 border pt-6 pr-6 pb-6 pl-6 scroll-slide-left scroll-delay-200" style={{background: `linear-gradient(180deg, rgba(18,20,28,0.92), rgba(10,12,18,0.85))`, backdropFilter: `blur(14px)`}}>
<span className="pointer-events-none absolute left-1 top-1 h-3 w-3" style={{borderTop: `1px solid rgba(52,211,153,0.35)`, borderLeft: `1px solid rgba(52,211,153,0.35)`}}></span>
<span className="pointer-events-none absolute right-1 top-1 h-3 w-3" style={{borderTop: `1px solid rgba(52,211,153,0.35)`, borderRight: `1px solid rgba(52,211,153,0.35)`}}></span>
<span className="pointer-events-none absolute left-1 bottom-1 h-3 w-3" style={{borderBottom: `1px solid rgba(52,211,153,0.35)`, borderLeft: `1px solid rgba(52,211,153,0.35)`}}></span>
<span className="pointer-events-none absolute right-1 bottom-1 h-3 w-3" style={{borderBottom: `1px solid rgba(52,211,153,0.35)`, borderRight: `1px solid rgba(52,211,153,0.35)`}}></span>

<div className="w-full flex items-center justify-center mb-6">
<div className="relative inline-flex items-center">
<span className="absolute -left-3 h-6 w-px bg-gradient-to-b from-emerald-400/70 to-emerald-400/10"></span>
<span className="px-3 py-1 text-xs font-medium tracking-tight text-emerald-200 border border-emerald-300/30" style={{background: `rgba(52,211,153,0.12)`, backdropFilter: `blur(8px)`}}>Savings up 22%</span>
<span className="absolute -right-3 h-6 w-px bg-gradient-to-b from-emerald-400/70 to-emerald-400/10"></span>
</div>
</div>

<p className="text-neutral-300 text-xl sm:text-2xl md:text-3xl leading-[1.35] tracking-tight font-sans">
      We <span className="text-white font-semibold">consolidated</span> accounts, automated <span className="text-white font-semibold">categorization</span>,
      and used forecasts to plan cashflow better. FinanceAI's <span className="text-white font-semibold">predictive models</span> helped us avoid overdrafts and save consistently month over month.
    </p>
<div className="mt-4 text-sm text-white/70 font-sans tracking-tight">— David L., Small Business Owner</div>
</div>

<div className="relative overflow-hidden border border-white/10 p-3 sm:p-4 scroll-scale scroll-delay-200" style={{background: `radial-gradient(140% 120% at 90% 0%, rgba(52,211,153,0.06), rgba(14,16,24,0.6) 55%)`, backdropFilter: `blur(12px)`}}>
<span className="pointer-events-none absolute left-1 top-1 h-3 w-3" style={{borderTop: `1px solid rgba(52,211,153,0.35)`, borderLeft: `1px solid rgba(52,211,153,0.35)`}}></span>
<span className="pointer-events-none absolute right-1 top-1 h-3 w-3" style={{borderTop: `1px solid rgba(52,211,153,0.35)`, borderRight: `1px solid rgba(52,211,153,0.35)`}}></span>
<span className="pointer-events-none absolute left-1 bottom-1 h-3 w-3" style={{borderBottom: `1px solid rgba(52,211,153,0.35)`, borderLeft: `1px solid rgba(52,211,153,0.35)`}}></span>
<span className="pointer-events-none absolute right-1 bottom-1 h-3 w-3" style={{borderBottom: `1px solid rgba(52,211,153,0.35)`, borderRight: `1px solid rgba(52,211,153,0.35)`}}></span>
<div className="relative w-full h-64 sm:h-72 md:h-80 overflow-hidden">
<img alt="Financial success dashboard showing portfolio growth" className="absolute inset-0 h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0465d628-a834-480c-8e14-ff665ed9a84b_800w.jpg" />
<div className="absolute inset-0" style={{background: `linear-gradient(180deg, rgba(0,0,0,0.25), rgba(0,0,0,0.15))`}}></div>
<div className="absolute left-3 top-3">
<span className="px-2.5 py-1 text-xs font-medium tracking-tight text-emerald-200 border border-emerald-300/30" style={{background: `rgba(52,211,153,0.12)`, backdropFilter: `blur(6px)`}}>Success Metrics</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:py-20 bg-[#000000] border-neutral-800 border-t pt-16 pb-16">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-5xl tracking-tighter font-semibold font-bricolage scroll-fade" style={{}}>Ready to Transform Your Finances?</h2>
<p className="mt-4 text-xl text-neutral-400 font-light font-sans scroll-fade scroll-delay-100" style={{}}>Join thousands of users who have already optimized their financial future with AI-powered insights.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 items-center justify-center scroll-fade scroll-delay-200">
<button className="inline-flex gap-3 relative transition-all duration-300 hover:bg-emerald-500 text-lg font-medium text-white bg-emerald-600 rounded-none pt-4 pr-8 pb-4 pl-8 items-center font-sans" style={{}}>
                    Get Started Free
                </button>
<button className="inline-flex gap-3 relative transition-all duration-300 hover:border-white/30 hover:bg-white/5 text-lg font-medium text-neutral-300 border-white/10 border rounded-none pt-4 pr-8 pb-4 pl-8 items-center font-sans" style={{}}>
                    Schedule Demo
                </button>
</div>
</div>
</section>

<footer className="bg-[#000000] border-neutral-800 border-t pt-16 pb-8">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<span className="text-xl font-semibold text-white/90 tracking-tight">TrustAI</span>
</div>
<p className="text-neutral-400 text-sm mb-4 font-sans">
                        AI-powered financial intelligence for smarter budget management and investment decisions.
                    </p>
</div>

<div className="md:col-span-1">
<h3 className="text-white font-semibold mb-4 font-sans">Product</h3>
<ul className="space-y-2 text-sm text-neutral-400 font-sans">
<li><a className="hover:text-white transition-colors" href="#">Dashboard</a></li>
<li><a className="hover:text-white transition-colors" href="#">AI Insights</a></li>
<li><a className="hover:text-white transition-colors" href="#">Portfolio</a></li>
<li><a className="hover:text-white transition-colors" href="#">Analytics</a></li>
</ul>
</div>

<div className="md:col-span-1">
<h3 className="text-white font-semibold mb-4 font-sans">Company</h3>
<ul className="space-y-2 text-sm text-neutral-400 font-sans">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div className="md:col-span-1">
<h3 className="text-white font-semibold mb-4 font-sans">Support</h3>
<ul className="space-y-2 text-sm text-neutral-400 font-sans">
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-neutral-800 flex flex-col sm:flex-row justify-between items-center">
<p className="text-neutral-500 text-sm font-sans">© 2024 TrustAI. All rights reserved.</p>
<div className="flex items-center gap-6 mt-4 sm:mt-0">
<a className="text-neutral-500 hover:text-white transition-colors text-sm font-sans" href="#">Terms</a>
<a className="text-neutral-500 hover:text-white transition-colors text-sm font-sans" href="#">Privacy</a>
<a className="text-neutral-500 hover:text-white transition-colors text-sm font-sans" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
