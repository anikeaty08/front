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



        // Initialize Icons
        lucide.createIcons();

        // Carousel Interaction Logic
        const carousel = document.getElementById('carousel');
        const sections = document.querySelectorAll('section');
        const indicators = document.querySelectorAll('.page-indicator');
        const startBtn = document.getElementById('start-btn');

        // Start Button Click Handler
        if(startBtn) {
            startBtn.addEventListener('click', () => {
                // Scroll to the second slide (index 1)
                const width = carousel.offsetWidth;
                carousel.scrollTo({
                    left: width,
                    behavior: 'smooth'
                });
            });
        }

        // Intersection Observer for Slide Animations
        const observerOptions = {
            root: carousel,
            threshold: 0.5
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Activate animations
                    entry.target.classList.add('active');
                    
                    // Update indicators
                    const index = parseInt(entry.target.getAttribute('data-index'));
                    indicators.forEach((ind, i) => {
                        if (i === index) {
                            ind.classList.remove('bg-gray-700');
                            ind.classList.add('bg-white', 'w-4'); // Active state style
                        } else {
                            ind.classList.add('bg-gray-700');
                            ind.classList.remove('bg-white', 'w-4');
                        }
                    });
                } else {
                    entry.target.classList.remove('active');
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
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
      

<div className="fixed inset-0 z-0 opacity-10 pointer-events-none" style={{backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px'}}>
</div>

<div className="fixed inset-0 z-50 scanlines h-full w-full pointer-events-none"></div>

<main className="h-full w-full overflow-x-auto snap-x snap-mandatory flex no-scrollbar z-10 relative scroll-smooth" id="carousel">

<section className="h-full w-full shrink-0 snap-center flex flex-col justify-center items-center p-8 bg-black/80 relative border-r border-gray-800" data-index="0">
<div className="slide-content w-full max-w-md space-y-8 text-center flex flex-col items-center">
<div className="flex justify-center mb-6">
<i className="text-yellow-400 w-16 h-16 animate-pulse" data-lucide="zap"></i>
</div>
<h1 className="text-3xl tracking-tight text-white font-semibold uppercase glitch-hover">
                    Core Metrics<br/>
<span className="text-green-500 text-lg tracking-widest font-normal">System // Online</span>
</h1>
<p className="text-base text-gray-400 leading-relaxed">
                    Initialize your life tracking dashboard. Turn habits into data. Level up your productivity.
                </p>
<div className="pt-8 w-full flex justify-center">
<button className="group relative px-8 py-3 border border-green-500 bg-transparent hover:bg-green-500 transition-all duration-300 w-auto min-w-[200px]" id="start-btn">
<span className="text-green-500 group-hover:text-black font-bold tracking-[0.2em] uppercase text-sm start-blink group-hover:animate-none">Press Start</span>

<div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-green-500 transition-all group-hover:top-0 group-hover:left-0"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-green-500 transition-all group-hover:bottom-0 group-hover:right-0"></div>
</button>
</div>
</div>

<div className="absolute bottom-8 text-xs text-gray-600 font-mono">
                Ver 2.0.4 // Build 2024
            </div>
</section>

<section className="h-full w-full shrink-0 snap-center flex flex-col justify-center items-center p-6 bg-black/80 relative border-r border-gray-800" data-index="1">
<div className="slide-content w-full max-w-md">
<div className="flex items-center justify-between mb-8 border-b border-gray-700 pb-4">
<h2 className="text-2xl tracking-tight text-white font-medium">01. Recovery</h2>
<span className="text-green-500 text-sm">HP: 89%</span>
</div>
<div className="space-y-6">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<i className="text-yellow-500 w-5 h-5" data-lucide="coffee"></i>
<span className="text-base text-gray-300 group-hover:text-white transition-colors">No Sugar</span>
</div>
<div className="flex gap-1">
<div className="w-4 h-4 border border-gray-600 bg-green-500/20"></div>
<div className="w-4 h-4 border border-gray-600 bg-green-500/20"></div>
<div className="w-4 h-4 border border-gray-600"></div>
</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<i className="text-red-400 w-5 h-5" data-lucide="pizza"></i>
<span className="text-base text-gray-300 group-hover:text-white transition-colors">No Fastfood</span>
</div>
<div className="flex gap-1">
<div className="w-4 h-4 border border-gray-600 bg-green-500/20"></div>
<div className="w-4 h-4 border border-gray-600 bg-green-500/20"></div>
<div className="w-4 h-4 border border-gray-600 bg-green-500/20"></div>
</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<i className="text-blue-400 w-5 h-5" data-lucide="moon"></i>
<span className="text-base text-gray-300 group-hover:text-white transition-colors">Sleep &gt; 7h</span>
</div>
<div className="flex gap-1">
<div className="w-4 h-4 border border-gray-600 bg-green-500/20"></div>
<div className="w-4 h-4 border border-gray-600"></div>
<div className="w-4 h-4 border border-gray-600 bg-green-500/20"></div>
</div>
</div>
<div className="mt-8 p-4 border border-gray-800 bg-gray-900/50 rounded-sm">
<div className="flex justify-between text-xs text-gray-500 mb-2">
<span>RECOVERY RATE</span>
<span>///</span>
</div>
<div className="w-full bg-gray-800 h-2 rounded-none overflow-hidden">
<div className="bg-gradient-to-r from-green-600 to-green-400 h-full w-[89%]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="h-full w-full shrink-0 snap-center flex flex-col justify-center items-center p-6 bg-black/80 relative border-r border-gray-800" data-index="2">
<div className="slide-content w-full max-w-md">
<div className="flex items-center justify-between mb-8 border-b border-gray-700 pb-4">
<h2 className="text-2xl tracking-tight text-white font-medium">02. Efficiency</h2>
<span className="text-blue-400 text-sm">MP: 111%</span>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-gray-900/40 p-4 border border-gray-700 hover:border-blue-500 transition-colors">
<div className="text-xs text-gray-500 uppercase mb-2">Deep Work</div>
<div className="text-2xl text-white font-medium flex items-baseline gap-2">
                            10<span className="text-sm text-gray-500">h</span>
</div>
<div className="w-full bg-gray-800 h-1 mt-3">
<div className="bg-blue-500 h-full w-3/4"></div>
</div>
</div>
<div className="bg-gray-900/40 p-4 border border-gray-700 hover:border-blue-500 transition-colors">
<div className="text-xs text-gray-500 uppercase mb-2">Score</div>
<div className="text-2xl text-white font-medium">9.0</div>
<div className="w-full bg-gray-800 h-1 mt-3">
<div className="bg-blue-500 h-full w-[90%]"></div>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<span className="text-base text-gray-300">Tasks &lt; 12</span>
<input checked="" className="retro-checkbox" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<span className="text-base text-gray-300">Efficiency &gt;= 7</span>
<input checked="" className="retro-checkbox" type="checkbox"/>
</div>
<div className="flex items-center justify-between">
<span className="text-base text-gray-300">Project Time</span>
<input checked="" className="retro-checkbox" type="checkbox"/>
</div>
</div>
</div>
</section>

<section className="h-full w-full shrink-0 snap-center flex flex-col justify-center items-center p-6 bg-black/80 relative border-r border-gray-800" data-index="3">
<div className="slide-content w-full max-w-md">
<div className="flex items-center justify-between mb-2">
<h2 className="text-2xl tracking-tight text-white font-medium">03. Analysis</h2>
<i className="text-purple-400 w-6 h-6" data-lucide="bar-chart-2"></i>
</div>
<div className="text-xs text-gray-500 mb-8 border-b border-gray-700 pb-4">DATA VISUALIZATION // MONTHLY</div>

<div className="relative w-full h-48 border-l border-b border-gray-700 mb-6 flex items-end px-2 gap-2">

<div className="absolute inset-0 z-0 flex flex-col justify-between py-2 pointer-events-none opacity-20">
<div className="w-full h-px bg-gray-500 border-dashed border-t"></div>
<div className="w-full h-px bg-gray-500 border-dashed border-t"></div>
<div className="w-full h-px bg-gray-500 border-dashed border-t"></div>
</div>

<svg className="absolute inset-0 w-full h-full z-10" preserveaspectratio="none" viewbox="0 0 100 50">
<polyline fill="none" points="0,40 10,35 20,38 30,20 40,25 50,15 60,18 70,10 80,12 90,5 100,8" stroke="#4ade80" strokeWidth="1.5"></polyline>
</svg>

<div className="absolute top-4 right-10 bg-gray-800 border border-gray-600 p-2 z-20 shadow-lg">
<div className="text-xs text-gray-400">AVG SCORE</div>
<div className="text-xl text-white font-medium">10.6</div>
</div>
</div>
<div className="grid grid-cols-3 gap-2 text-center">
<div className="p-2 border border-gray-800">
<div className="text-[10px] text-gray-500 uppercase">Recov</div>
<div className="text-green-400 font-medium">7.78</div>
</div>
<div className="p-2 border border-gray-800">
<div className="text-[10px] text-gray-500 uppercase">Prod</div>
<div className="text-blue-400 font-medium">4.56</div>
</div>
<div className="p-2 border border-gray-800">
<div className="text-[10px] text-gray-500 uppercase">Fatigue</div>
<div className="text-red-400 font-medium">1.71</div>
</div>
</div>
</div>
</section>

<section className="h-full w-full shrink-0 snap-center flex flex-col justify-center items-center p-6 bg-black/80 relative border-r border-gray-800" data-index="4">
<div className="slide-content w-full max-w-md">
<div className="flex items-center justify-between mb-8 border-b border-gray-700 pb-4">
<h2 className="text-2xl tracking-tight text-white font-medium">04. Fatigue</h2>
<span className="text-red-500 text-sm animate-pulse">WARNING</span>
</div>
<div className="space-y-6">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<i className="text-red-500 w-5 h-5" data-lucide="frown"></i>
<span className="text-base text-gray-300">Tasks Annoying</span>
</div>
<span className="text-red-500 font-medium">High (7)</span>
</div>
<div className="w-full bg-gray-900 border border-gray-700 h-6 relative">
<div className="absolute inset-0 flex items-center justify-center text-[10px] z-10 text-white tracking-widest">/////////////////</div>
<div className="bg-red-500/50 h-full w-[70%]"></div>
</div>
<div className="flex items-center justify-between mt-4">
<div className="flex items-center gap-3">
<i className="text-orange-400 w-5 h-5" data-lucide="battery-low"></i>
<span className="text-base text-gray-300">Want to Sleep</span>
</div>
<span className="text-orange-400 font-medium">Lvl 8</span>
</div>
<div className="grid grid-cols-7 gap-1 mt-6">

<div className="aspect-square border border-red-900 bg-red-500/20"></div>
<div className="aspect-square border border-red-900 bg-red-500/20"></div>
<div className="aspect-square border border-red-500 bg-red-500"></div>
<div className="aspect-square border border-red-500 bg-red-500"></div>
<div className="aspect-square border border-red-500 bg-red-500"></div>
<div className="aspect-square border border-red-900 bg-red-500/20"></div>
<div className="aspect-square border border-red-900 bg-red-500/20"></div>
</div>
<p className="text-xs text-center text-gray-500 mt-2">FATIGUE MATRIX // LAST 7 CYCLES</p>
</div>
</div>
</section>

<section className="h-full w-full shrink-0 snap-center flex flex-col justify-center items-center p-6 bg-black/80 relative border-r border-gray-800" data-index="5">
<div className="slide-content w-full max-w-md text-center">
<div className="w-20 h-20 mx-auto border-2 border-green-500 flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
<i className="text-green-500 w-10 h-10" data-lucide="save"></i>
</div>
<h2 className="text-2xl tracking-tight text-white font-medium mb-2">SAVE GAME</h2>
<p className="text-base text-gray-400 mb-8">Consistency is key. Log your data daily to maintain your streak.</p>
<div className="flex justify-center gap-2 mb-8">

<div className="w-8 h-8 bg-green-500 border border-green-400 flex items-center justify-center text-black font-bold text-xs">M</div>
<div className="w-8 h-8 bg-green-500 border border-green-400 flex items-center justify-center text-black font-bold text-xs">T</div>
<div className="w-8 h-8 bg-green-500 border border-green-400 flex items-center justify-center text-black font-bold text-xs">W</div>
<div className="w-8 h-8 bg-gray-800 border border-gray-600 flex items-center justify-center text-gray-500 text-xs">T</div>
<div className="w-8 h-8 bg-green-500 border border-green-400 flex items-center justify-center text-black font-bold text-xs">F</div>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 border border-green-900 bg-green-900/10 rounded-full">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-sm text-green-400">Current Streak: 4 Days</span>
</div>
</div>
</section>

<section className="h-full w-full shrink-0 snap-center flex flex-col justify-center items-center p-6 bg-black relative" data-index="6">
<div className="slide-content w-full max-w-md relative z-10">
<div className="border-2 border-dashed border-gray-700 p-8 text-center relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>
<h2 className="text-3xl tracking-tight text-white font-semibold mb-4">UNLOCK FULL SYSTEM</h2>
<div className="flex flex-col gap-3 mb-8 text-left max-w-xs mx-auto">
<div className="flex items-center gap-3">
<i className="text-green-500 w-4 h-4" data-lucide="check"></i>
<span className="text-base text-gray-300">Unlimited History</span>
</div>
<div className="flex items-center gap-3">
<i className="text-green-500 w-4 h-4" data-lucide="check"></i>
<span className="text-base text-gray-300">Advanced Analytics</span>
</div>
<div className="flex items-center gap-3">
<i className="text-green-500 w-4 h-4" data-lucide="check"></i>
<span className="text-base text-gray-300">Custom Metrics</span>
</div>
<div className="flex items-center gap-3">
<i className="text-green-500 w-4 h-4" data-lucide="check"></i>
<span className="text-base text-gray-300">Export to CSV</span>
</div>
</div>
<div className="text-3xl font-mono text-white mb-8">
                        $4.99<span className="text-sm text-gray-500">/mo</span>
</div>
<button className="liquid-btn w-full py-4 bg-white text-black font-bold text-lg uppercase tracking-wider hover:text-white border-2 border-white hover:border-green-500">
<span>Insert Coin</span>
</button>
<div className="mt-4 text-xs text-gray-600">
                        7-day free trial included. Cancel anytime.
                    </div>
</div>
</div>
</section>

<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
<div className="w-2 h-2 rounded-full bg-white transition-all duration-300 page-indicator opacity-100"></div>
<div className="w-2 h-2 rounded-full bg-gray-700 transition-all duration-300 page-indicator"></div>
<div className="w-2 h-2 rounded-full bg-gray-700 transition-all duration-300 page-indicator"></div>
<div className="w-2 h-2 rounded-full bg-gray-700 transition-all duration-300 page-indicator"></div>
<div className="w-2 h-2 rounded-full bg-gray-700 transition-all duration-300 page-indicator"></div>
<div className="w-2 h-2 rounded-full bg-gray-700 transition-all duration-300 page-indicator"></div>
<div className="w-2 h-2 rounded-full bg-gray-700 transition-all duration-300 page-indicator"></div>
</div>
</main>


    </>
  );
}
