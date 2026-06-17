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



        // Init Icons
        lucide.createIcons();

        // Reveal Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((el) => {
            observer.observe(el);
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
      

<div className="fixed top-[-20%] left-[20%] w-[600px] h-[600px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div className="fixed bottom-[-20%] right-[10%] w-[500px] h-[500px] bg-neutral-800/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center reveal active">
<div className="flex shadow-black/50 bg-red-950/80 border-white/10 border rounded-full pt-2 pr-2 pb-2 pl-2 shadow-2xl backdrop-blur-xl items-center">
<a className="hover:text-neutral-300 transition-colors text-sm font-medium text-white pt-2 pr-5 pb-2 pl-5" href="#">Introduction</a>
<a className="px-5 py-2 text-sm font-medium text-white hover:text-neutral-300 transition-colors" href="#modules">Modules</a>
<div className="h-4 w-px bg-white/10 mx-1"></div>
<a className="flex items-center gap-2 group text-sm font-medium text-white pt-2 pr-5 pb-2 pl-5" href="#join">
<span className="">Join</span>
<svg className="lucide lucide-arrow-right w-4 h-4 text-red-500 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<header className="min-h-[90vh] flex flex-col z-10 text-center pt-40 pr-6 pb-20 pl-6 relative items-center justify-center">
<div className="grid-bg z-[-1] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="reveal flex flex-col active max-w-4xl mr-auto ml-auto gap-x-6 gap-y-6 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
<span className="text-xs font-mono text-neutral-400 uppercase tracking-wider">Performance Protocol v1.0</span>
</div>
<h1 className="md:text-9xl leading-[0.9] text-7xl font-semibold text-white tracking-tighter" style={{}}>Built, <br/> <span className="text-neutral-600">NOT Born.</span></h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-xl leading-relaxed mt-4 font-light">
                A definitive architecture for the modern athlete. <br className="hidden md:block"/>Combine aesthetics with raw performance.
            </p>
<div className="flex flex-col sm:flex-row gap-4 mt-8 gap-x-4 gap-y-4">
<button className="group hover:bg-neutral-200 transition-all overflow-hidden text-base font-medium text-black bg-white rounded-lg pt-3.5 pr-8 pb-3.5 pl-8 relative">
<span className="relative z-10">Start Training</span>
</button>
</div>
</div>

<div className="-translate-x-1/2 flex flex-col gap-2 animate-bounce opacity-50 absolute bottom-10 left-1/2 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-chevron-down w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(115, 115, 115)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</header>

<section className="md:px-6 z-10 max-w-7xl mr-auto ml-auto pt-32 pr-4 pb-32 pl-4 relative" id="modules">
<div className="flex flex-col md:flex-row reveal mb-12 pr-2 pl-2 items-end justify-between">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-2">The Architecture</h2>
<p className="text-neutral-500">Four distinct pillars of physical development.</p>
</div>
<div className="hidden md:flex items-center gap-2 text-xs font-mono text-neutral-600 border border-neutral-800 px-3 py-1 rounded-full">
<span className="w-2 h-2 bg-neutral-700 rounded-full"></span>
                INDEX_04
            </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4">

<div className="reveal bento-card md:row-span-2 relative p-8 rounded-3xl bg-neutral-900/40 border border-white/10 overflow-hidden group">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-white/5 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="">
<div className="flex bg-white/5 w-10 h-10 border-white/10 border rounded-full mb-6 items-center justify-center">
<svg className="lucide lucide-book w-5 h-5 text-white" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Foundations</h3>
<p className="text-neutral-400 text-sm leading-relaxed">
                            Master the mechanics. Anatomy breakdowns, warm-up protocols, and injury prevention strategies.
                        </p>
</div>
<div className="mt-8">
<div className="w-full h-32 rounded-xl bg-neutral-800/50 border border-white/5 relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-500/20 blur-xl rounded-full"></div>
<div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<span className="text-xs text-neutral-500 font-mono">"Strong Body. Athletic Feel."</span>
</div>
</div>
</div>
</div>
</div>

<div className="reveal bento-card md:col-span-2 relative p-8 rounded-3xl bg-neutral-900/40 border border-white/10 overflow-hidden group" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-20 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
<div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end h-full gap-6">
<div className="max-w-md">
<div className="inline-flex items-center gap-2 px-2 py-1 bg-red-500/10 border border-red-500/20 rounded-md mb-4">
<svg className="lucide lucide-star w-3 h-3 text-red-500 fill-red-500" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-[10px] font-bold text-red-400 uppercase tracking-wide">Pro Insight</span>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Chris Bumstead Methodology</h3>
<p className="text-neutral-400 text-sm">
                            Exclusive insights on bulk/cut cycles from the 5x Olympian. Learn to construct the physique without losing the athlete.
                        </p>
</div>
<button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
<svg className="lucide lucide-arrow-up-right w-[24px] h-[20px]" data-icon-replaced="true" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '20px', color: 'rgb(0, 0, 0)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</button>
</div>
</div>

<div className="reveal bento-card relative p-8 rounded-3xl bg-neutral-900/40 border border-white/10 overflow-hidden group" style={{transitionDelay: '200ms'}}>
<div className="relative z-10">
<div className="flex group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-colors bg-white/5 w-10 h-10 border-white/10 border rounded-full mb-6 items-center justify-center">
<svg className="lucide lucide-dumbbell group-hover:text-red-400 transition-colors w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="dumbbell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(248, 113, 113)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.596 12.768a2 2 0 1 0 2.829-2.829l-1.768-1.767a2 2 0 0 0 2.828-2.829l-2.828-2.828a2 2 0 0 0-2.829 2.828l-1.767-1.768a2 2 0 1 0-2.829 2.829z"></path><path d="m2.5 21.5 1.4-1.4"></path><path d="m20.1 3.9 1.4-1.4"></path><path d="M5.343 21.485a2 2 0 1 0 2.829-2.828l1.767 1.768a2 2 0 1 0 2.829-2.829l-6.364-6.364a2 2 0 1 0-2.829 2.829l1.768 1.767a2 2 0 0 0-2.828 2.829z"></path><path d="m9.6 14.4 4.8-4.8"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Hypertrophy</h3>
<p className="text-neutral-400 text-sm">
                        Pure muscle building routines designed for density and symmetry.
                    </p>
</div>
</div>

<div className="reveal bento-card relative p-8 rounded-3xl bg-neutral-900/40 border border-white/10 overflow-hidden group" style={{transitionDelay: '300ms'}}>
<div className="relative z-10">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:bg-red-500/10 group-hover:border-red-500/20 transition-colors">
<svg className="lucide lucide-zap group-hover:text-red-400 transition-colors w-[20px] h-[20px]" data-icon-replaced="true" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(248, 113, 113)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-2">Plyometrics</h3>
<p className="text-neutral-400 text-sm">
                        Explosive power development. Jump higher, run faster.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-32 pr-6 pb-32 pl-6 relative">
<div className="max-w-5xl mx-auto text-center">
<div className="reveal inline-block mb-8">
<svg className="lucide lucide-quote w-8 h-8 text-neutral-700 mx-auto mb-4" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<h2 className="reveal text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight mb-8">
                "Reject hype. <span className="text-neutral-600">Embrace the system.</span>
                Discipline eats motivation for breakfast."
            </h2>
<div className="reveal flex justify-center gap-12 mt-16 border-t border-white/5 pt-12">
<div className="text-center">
</div>
<div className="text-center">
</div>
<div className="text-center">
</div>
</div>
</div>
</section>

<footer className="overflow-hidden bg-neutral-950 border-white/10 border-t pt-24 pr-6 pb-24 pl-6 relative" id="join">

<div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="reveal">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6">
                    Ready to <br/>
<span className="text-neutral-600">rebuild?</span>
</h2>
<div className="flex flex-col gap-4 max-w-sm">
<div className="flex items-center gap-4 text-neutral-400">
<svg className="lucide lucide-check w-5 h-5 text-red-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Lifetime access to course</span>
</div>
<div className="flex items-center gap-4 text-neutral-400">
<svg className="lucide lucide-check w-5 h-5 text-red-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span>Mobile-friendly platform</span>
</div>
<div className="flex items-center gap-4 text-neutral-400">
<svg className="lucide lucide-check w-5 h-5 text-red-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="">Community access included</span>
</div>
</div>
</div>
<div className="reveal flex flex-col justify-center items-start lg:items-end">
<div className="w-full max-w-md bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 shadow-2xl">
<div className="flex justify-between items-center mb-8">
<div className="">
<span className="block text-sm text-neutral-500">Total Price</span>
<span className="text-3xl font-bold text-white" style={{}}>$10</span>
</div>
<div className="px-3 py-1 bg-white/10 rounded-full text-xs text-white font-medium">One-time payment</div>
</div>
<button className="hover:bg-neutral-200 transition-colors flex group text-lg font-semibold text-black bg-white w-full rounded-lg mb-4 pt-4 pb-4 gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='https://whop.com/built-not-born-c5e8/?utm_source=ig&amp;utm_medium=social&amp;utm_content=link_in_bio&amp;fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn1fZPdVCkGo-Sj_fjPLcrt_0h7lQYZxQL94INBliKN96aKXKWuXzFb3IqJ1I_aem_J23cpLdJD3vjq-rXpLbYfw'" role="button">
                        Get Access Now
                        <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-xs text-neutral-600 text-center" style={{}}></p>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-600">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-3 h-3 bg-red-600 rounded-full"></div>
<span className="font-semibold text-neutral-400" style={{}}>Built, NOT Born</span>
</div>
<div className="flex gap-8">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="https://www.instagram.com/jaime_ba16/">Instagram</a>
</div>
</div>
</footer>


    </>
  );
}
