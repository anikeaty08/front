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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tighter text-xl text-white">FinFlow</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-white transition-colors" href="#benefits">Simulator</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium text-zinc-300 hover:text-white transition-colors">Log in</button>
<button className="bg-white text-zinc-950 hover:bg-zinc-200 transition-colors px-4 py-2 rounded-full text-sm font-medium">
                    Start Risk-Free
                </button>
</div>
</div>
</header>
<main>

<section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden hero-glow">
<div className="max-w-6xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-medium mb-8">
<iconify-icon height="16" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    Zero real money required to start
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
                    Practice Investing Without Risking Real Money.
                </h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Build market confidence using our realistic simulator before you ever risk a single rupee of your own.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-zinc-950 hover:bg-zinc-200 transition-colors px-8 py-3.5 rounded-full text-base font-medium flex items-center justify-center gap-2">
                        Start Risk-Free
                        <iconify-icon height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
<button className="w-full sm:w-auto border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors px-8 py-3.5 rounded-full text-base font-medium text-white flex items-center justify-center gap-2">
<iconify-icon height="20" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
                        Book a Demo
                    </button>
</div>

<div className="mt-16 md:mt-24 relative max-w-4xl mx-auto">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10"></div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-2 shadow-2xl overflow-hidden backdrop-blur-sm">
<div className="rounded-xl border border-zinc-800/50 bg-zinc-950 p-6 mockup-grid h-[300px] md:h-[400px] flex flex-col relative">

<div className="flex justify-between items-start mb-8 z-20">
<div>
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1">Virtual Portfolio</p>
<h2 className="text-3xl font-semibold tracking-tight text-white">₹100,000<span className="text-zinc-500 text-lg">.00</span></h2>
</div>
<div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium px-2.5 py-1 rounded flex items-center gap-1.5 z-20">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                                    Simulator Active
                                </div>
</div>

<div className="absolute inset-0 flex items-end justify-center px-6 pb-6 opacity-60">
<svg fill="none" height="60%" preserveaspectratio="none" viewbox="0 0 800 200" width="100%" xmlns="http://www.w3.org/2000/svg">
<path d="M0 180 C 100 180, 200 150, 300 120 C 400 90, 450 140, 550 80 C 650 20, 700 60, 800 10" stroke="#34d399" strokeLinecap="round" strokeWidth="3"></path>
<path d="M0 180 C 100 180, 200 150, 300 120 C 400 90, 450 140, 550 80 C 650 20, 700 60, 800 10 L 800 200 L 0 200 Z" fill="url(#paint0_linear)"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="paint0_linear" x1="400" x2="400" y1="10" y2="200">
<stop stop-color="#34d399" stop-opacity="0.2"></stop>
<stop offset="1" stop-color="#34d399" stop-opacity="0"></stop>
</lineargradient>
</defs>
</svg>
</div>

<div className="mt-auto z-20 grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-4 backdrop-blur-md">
<p className="text-xs text-zinc-500 mb-1">Risk Level</p>
<p className="text-sm font-medium text-emerald-400">Zero</p>
</div>
<div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-4 backdrop-blur-md">
<p className="text-xs text-zinc-500 mb-1">Knowledge Gained</p>
<p className="text-sm font-medium text-white">+12% Today</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950 relative" id="benefits">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Learn by doing. Leave the fear behind.</h2>
<p className="text-zinc-400 text-base max-w-xl mx-auto">We've removed everything scary about the stock market, leaving only a safe environment to explore and grow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900/50 transition-colors">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-white mb-6">
<iconify-icon height="24" icon="solar:safe-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">Risk-Free Practice</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Make trades, test strategies, and make mistakes with virtual currency. You literally cannot lose your real money here.
                        </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900/50 transition-colors">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-white mb-6">
<iconify-icon height="24" icon="solar:cup-star-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">Build Confidence</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Experience real market scenarios in a controlled environment. Build the muscle memory to invest calmly when you're ready.
                        </p>
</div>

<div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:bg-zinc-900/50 transition-colors">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-white mb-6">
<iconify-icon height="24" icon="solar:notebook-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">Simple Learning</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            No complex finance jargon. We break down the market into bite-sized, gamified lessons that actually make sense.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 bg-zinc-950/50" id="how-it-works">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white mb-4">Your safe path to the market.</h2>
<p className="text-zinc-400 text-base max-w-xl">A structured, anxiety-free journey designed for absolute beginners.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-zinc-800 z-0"></div>

<div className="relative z-10 flex flex-col md:items-center md:text-center group">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-700 text-zinc-300 flex items-center justify-center font-medium text-lg mb-6 group-hover:border-white group-hover:text-white transition-colors shadow-[0_0_0_8px_rgba(24,24,27,1)]">
                            1
                        </div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Learn the Basics</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Start with simplified, jargon-free lessons. If you get confused, our AI coach is there to instantly resolve doubts without judgment.
                        </p>
</div>

<div className="relative z-10 flex flex-col md:items-center md:text-center group mt-8 md:mt-0">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-700 text-zinc-300 flex items-center justify-center font-medium text-lg mb-6 group-hover:border-emerald-500 group-hover:text-emerald-400 transition-colors shadow-[0_0_0_8px_rgba(24,24,27,1)]">
                            2
                        </div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Practice Safely</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Use your ₹100k virtual balance in our live simulator. Track your progress on your personal dashboard as you make simulated trades.
                        </p>
</div>

<div className="relative z-10 flex flex-col md:items-center md:text-center group mt-8 md:mt-0">
<div className="w-12 h-12 rounded-full bg-zinc-950 border border-zinc-700 text-zinc-300 flex items-center justify-center font-medium text-lg mb-6 group-hover:border-white group-hover:text-white transition-colors shadow-[0_0_0_8px_rgba(24,24,27,1)]">
                            3
                        </div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-2">Invest Confidently</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Only when you feel absolutely ready, transition your proven strategies to the real market with complete confidence.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-zinc-900/20"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Ready to stop worrying and start practicing?</h2>
<p className="text-base text-zinc-400 mb-10 max-w-xl mx-auto">
                    Join thousands of young professionals learning the market safely. No credit card required. No risk involved.
                </p>
<button className="bg-white text-zinc-950 hover:bg-zinc-200 transition-colors px-8 py-4 rounded-full text-base font-medium inline-flex items-center gap-2">
                    Start Risk-Free Now
                    <iconify-icon height="20" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</button>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 bg-zinc-950 py-12 text-center md:text-left">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tighter text-lg text-zinc-300">FinFlow</span>
</div>
<p className="text-xs text-zinc-500">
                © 2024 FinFlow Simulator. All virtual trades are for educational purposes only.
            </p>
<div className="flex items-center gap-6 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-300 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-300 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
