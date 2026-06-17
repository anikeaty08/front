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



function openPayment() {
document.getElementById('landing-page').style.display = 'none';
document.getElementById('dashboard-page').classList.add('hidden'); // Ensure dashboard is closed
document.getElementById('payment-page').classList.remove('hidden');
window.scrollTo(0, 0);
}
function completePayment() {
// Simulate a brief verification for UX (optional, can be removed)
const btn = document.getElementById('complete-btn');
const originalContent = btn.innerHTML;
btn.innerHTML = 'Verifying...';
btn.classList.add('opacity-75', 'cursor-not-allowed');
setTimeout(() => {
document.getElementById('payment-page').classList.add('hidden');
document.getElementById('landing-page').style.display = 'none'; // Ensure landing is gone
document.getElementById('dashboard-page').classList.remove('hidden');
window.scrollTo(0, 0);
// Reset button for future use
btn.innerHTML = originalContent;
btn.classList.remove('opacity-75', 'cursor-not-allowed');
}, 800);
}
function cancelPayment() {
document.getElementById('payment-page').classList.add('hidden');
document.getElementById('landing-page').style.display = 'block';
window.scrollTo(0, 0);
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
      

<div id="landing-page">

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-height="24" data-icon="lucide:hexagon" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-lg tracking-tight font-semibold text-white">VIABLE</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#philosophy">Philosophy</a>
<a className="hover:text-white transition-colors" href="#campuses">Campuses</a>
<a className="hover:text-white transition-colors" href="#reviews">Results</a>
<a className="hover:text-white transition-colors" href="#pricing">Access</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm font-medium hover:text-white" onclick="openPayment()">Login</button>
<button className="bg-white text-black text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-zinc-200 transition-all flex items-center gap-2" onclick="openPayment()">
                        JOIN NOW
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/20 bg-amber-500/5 text-amber-400 text-xs font-medium tracking-wide mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                    NEW COHORT OPEN FOR ENROLLMENT
                </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white font-medium mb-6 leading-[0.95]">
                    ESCAPE THE <br/>
<span className="text-zinc-600">MATRIX.</span> BUILD <br/>
<span className="text-gradient-gold">YOUR EMPIRE.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    The traditional education system is obsolete. We provide the blueprint, the network, and the mentorship to architect your own reality in the digital age.
                </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="w-full md:w-auto bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-8 py-4 rounded-lg transition-all glow-effect flex items-center justify-center gap-2" onclick="openPayment()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Start Winning Today
                    </button>
<a className="w-full md:w-auto glass-panel hover:bg-white/5 text-white text-sm font-medium px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2" href="#philosophy">
                        Explore The Campuses
                    </a>
</div>

<div className="mt-16 pt-8 border-t border-white/5 grid grid-cols-3 gap-8 md:gap-16">
<div>
<h4 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">140k+</h4>
<p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Students</p>
</div>
<div className="">
<h4 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">$24M+</h4>
<p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Generated</p>
</div>
<div>
<h4 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">4.7/5</h4>
<p className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Rating</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 border-y border-white/5" id="philosophy">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                            The Old World is <span className="text-zinc-600 line-through decoration-amber-500/50">Dying.</span>
</h2>
<div className="space-y-6 text-zinc-400 font-light leading-relaxed">
<p>
                                They told you to go to school, get a degree, and work 9-to-5 until you retire at 65. That path is broken. Inflation is rising. Wages are stagnant. The matrix is tightening its grip.
                            </p>
<p>
<span className="text-white font-medium">Sovereign</span> is the antidote. We don't teach theory; we teach execution. We strip away the noise and hand you the raw tools needed to generate wealth, build a powerful physique, and master your mindset.
                            </p>
</div>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-zinc-200 text-sm">Location Independent Income</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-zinc-200 text-sm">Elite Global Network</span>
</li>
<li className="flex items-center gap-3">
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-icon="lucide:check-circle-2" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-zinc-200 text-sm">Unbreakable Mindset Training</span>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-amber-500/10 blur-[80px]"></div>
<div className="glass-panel p-1 rounded-2xl relative overflow-hidden">
<div className="bg-zinc-900 rounded-xl aspect-[4/3] flex items-center justify-center relative group overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&amp;w=2832&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700"></div>
<div className="relative z-10 text-center">
<svg aria-hidden="true" className="iconify text-white mb-2 mx-auto iconify--lucide" data-icon="lucide:lock-open" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></g></svg>
<p className="text-white font-medium tracking-widest text-sm uppercase">Access Granted</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="campuses">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Choose Your Weapon</h2>
<p className="text-zinc-400 max-w-lg mx-auto">Master high-value skills that the modern marketplace rewards. No fluff. Just hard skills that pay.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl hover:border-amber-500/30 transition-all group cursor-default">
<div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center mb-6 border border-white/10 group-hover:border-amber-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-100 iconify--lucide" data-icon="lucide:shopping-bag" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3">E-Commerce Mastery</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Build, scale, and automate online stores. Learn product research, branding, and supply chain domination.</p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-amber-500/30 transition-all group cursor-default">
<div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center mb-6 border border-white/10 group-hover:border-amber-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-100 iconify--lucide" data-icon="lucide:pen-tool" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3">Copywriting &amp; Sales</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Master the art of persuasion. Turn words into cash by learning the psychology behind every purchase.</p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-amber-500/30 transition-all group cursor-default">
<div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center mb-6 border border-white/10 group-hover:border-amber-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-100 iconify--lucide" data-icon="lucide:candlestick-chart" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 5v4"></path><rect height="6" rx="1" width="4" x="7" y="9"></rect><path d="M9 15v2m8-14v2"></path><rect height="8" rx="1" width="4" x="15" y="5"></rect><path d="M17 13v3M3 3v18h18"></path></g></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3">Crypto &amp; Investing</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Navigate the financial markets. Technical analysis, DeFi strategies, and long-term asset management.</p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-amber-500/30 transition-all group cursor-default">
<div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center mb-6 border border-white/10 group-hover:border-amber-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-100 iconify--lucide" data-icon="lucide:bot" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3">Artificial Intelligence</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Leverage AI to multiply your output. Automation, prompt engineering, and future-proofing your career.</p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-amber-500/30 transition-all group cursor-default">
<div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center mb-6 border border-white/10 group-hover:border-amber-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-100 iconify--lucide" data-icon="lucide:laptop" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2zm2.054 10.987H3.946" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3">Freelancing</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Become a sovereign contractor. How to find clients, pitch services, and deliver value independently.</p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-amber-500/30 transition-all group cursor-default bg-gradient-to-br from-amber-900/10 to-transparent">
<div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center mb-6 border border-white/10 group-hover:border-amber-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-zinc-100 iconify--lucide" data-icon="lucide:crown" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3">Iron Mindset</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Discipline, bio-hacking, and mental fortitude. The foundation upon which all wealth is built.</p>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-24 relative" id="pricing">
<div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">Invest in Yourself</h2>
<p className="text-zinc-400">The price of admission to a new life. Cancel anytime.</p>
</div>
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="glass-panel rounded-2xl p-1 relative h-full">
<div className="absolute -inset-1 bg-gradient-to-b from-amber-500/30 to-transparent blur-md opacity-50"></div>
<div className="bg-black rounded-xl p-8 h-full flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-amber-500 text-black text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg">
                                Most Popular
                            </div>
<h3 className="text-xl text-zinc-400 font-medium text-center">Monthly Access</h3>
<div className="flex items-baseline justify-center gap-1 mt-6 mb-8">
<span className="text-5xl font-semibold text-white tracking-tight">$49</span>
<span className="text-zinc-500">/month</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-300">Access to all 18 Campuses</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-300">Daily Stock &amp; Crypto Signals</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-300">Private Discord Community</span>
</li>
</ul>
<button className="hover:bg-amber-400 transition-all glow-effect flex gap-2 group font-semibold text-black bg-amber-500 w-full rounded-lg pt-4 pb-4 gap-x-2 gap-y-2 items-center justify-center" onclick="openPayment()">
                                Join Monthly
                                <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>

<div className="glass-panel rounded-2xl p-1 relative h-full">
<div className="bg-black rounded-xl p-8 h-full flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-zinc-800 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-bl-lg border-l border-b border-white/10">
                                Best Value
                            </div>
<h3 className="text-xl text-zinc-400 font-medium text-center">Yearly Access</h3>
<div className="flex items-baseline justify-center gap-1 mt-6 mb-8">
<span className="text-5xl font-semibold text-white tracking-tight">$299</span>
<span className="text-zinc-500">/year</span>
</div>
<div className="flex justify-center -mt-4 mb-6">
<span className="bg-green-500/10 text-green-400 text-xs px-2 py-0.5 rounded border border-green-500/20">Save $289/year</span>
</div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-white mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-300">All Monthly features included</span>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-white mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm text-zinc-300">Priority 1-on-1 Mentorship</span>
</li>
</ul>
<button className="w-full bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-semibold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group" onclick="openPayment()">
                                Join Yearly
                                <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-amber-600 iconify--lucide" data-icon="lucide:hexagon" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm font-bold text-white tracking-tight">VIABLE</span>
</div>
<div className="text-xs text-zinc-600">
                        © 2026 VIABLE Circle.
                    </div>
</div>
</div>
</footer>
</div>

<div className="hidden min-h-screen bg-black flex flex-col items-center justify-center p-6 relative overflow-hidden fade-enter" id="payment-page">

<div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="relative z-10 w-full max-w-md mx-auto">
<div className="text-center mb-10">
<h1 className="text-3xl font-medium text-white tracking-tight mb-2">Complete Your Enrollment</h1>
<p className="text-zinc-500 text-sm">Scan the QR code to secure your spot in the circle.</p>
</div>

<div className="qr-card p-10 flex flex-col items-center mb-8 relative">

<div className="flex flex-col items-center mb-8">
<div className="w-14 h-14 rounded-full bg-[#009688] flex items-center justify-center text-white text-xl font-medium mb-3 shadow-sm">
                        V
                    </div>
<h2 className="text-2xl font-medium text-gray-900 tracking-tight">Viable</h2>
</div>

<div className="relative w-64 h-64 mb-6">
<img alt="UPI QR Code" className="w-full h-full object-contain mix-blend-multiply" src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&amp;data=upi://pay?pa=kanishanth07@okhdfcbank&amp;pn=Viable"/>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full p-2.5 shadow-md flex items-center justify-center border border-gray-100">
<svg className="w-full h-full" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M23.407 11.642c0-.79-.068-1.533-.198-2.253H12v4.254h6.415c-.283 1.436-1.107 2.65-2.353 3.475v2.872h3.793c2.227-2.036 3.552-5.048 3.552-8.348z" fill="#4285F4"></path><path d="M12 23c3.218 0 5.92-1.045 7.893-2.842l-3.793-2.872c-1.055.714-2.41 1.15-3.922 1.15-3.09 0-5.706-2.08-6.64-4.88H1.67v3.085C3.702 20.672 7.562 23 12 23z" fill="#34A853"></path><path d="M5.36 13.556c-.237-.714-.374-1.477-.374-2.274 0-.797.137-1.56.374-2.274V5.923H1.67C.603 8.046 0 10.46 0 13s.603 4.954 1.67 7.077l3.69-3.085z" fill="#FBBC05"></path><path d="M12 4.75c1.785 0 3.376.613 4.633 1.802l3.35-3.35C17.915 1.196 15.213 0 12 0 7.562 0 3.702 2.328 1.67 5.923l3.69 3.085c.934-2.8 3.55-4.88 6.64-4.88z" fill="#EA4335"></path></svg>
</div>
</div>

<div className="text-center space-y-1">
<p className="text-sm text-gray-800 font-medium">UPI ID: kanishanth07@okhdfcbank</p>
<p className="text-xs text-gray-500 mt-6">Scan to pay with any UPI app</p>
</div>
</div>
<button className="w-full bg-amber-500 hover:bg-amber-400 text-black font-semibold py-4 rounded-xl transition-all glow-effect flex items-center justify-center gap-2 mb-4" id="complete-btn" onclick="completePayment()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M22 4L12 14.01l-3-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                I have completed the payment
            </button>
<button className="w-full text-zinc-500 text-sm hover:text-white transition-colors" onclick="cancelPayment()">
                Cancel
            </button>
</div>
</div>

<div className="hidden min-h-screen flex flex-col md:flex-row bg-black text-zinc-200 fade-enter" id="dashboard-page">

<aside className="w-full md:w-64 md:h-screen md:fixed border-r border-white/5 bg-zinc-950 flex flex-col z-40">
<div className="h-16 flex items-center px-6 border-b border-white/5">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-icon="lucide:hexagon" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-md font-bold text-white tracking-tight">VIABLE</span>
<span className="text-[10px] bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded border border-zinc-700 ml-2">PRO</span>
</div>
</div>
<div className="p-4 space-y-1 overflow-y-auto flex-grow">
<div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-wider px-3 mb-2 mt-4">Main</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-white bg-zinc-900 rounded-md border border-zinc-800" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:layout-grid" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></g></svg>
                    Library
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-md transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Community
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-md transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                    Events
                </a>
<div className="text-[10px] font-semibold text-zinc-600 uppercase tracking-wider px-3 mb-2 mt-6">Settings</div>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-md transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:user" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                    Profile
                </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-zinc-400 hover:text-white hover:bg-zinc-900/50 rounded-md transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:credit-card" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="14" rx="2" width="20" x="2" y="5"></rect><path d="M2 10h20"></path></g></svg>
                    Billing
                </a>
</div>
<div className="p-4 border-t border-white/5">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-600 to-amber-400 flex items-center justify-center text-black font-bold text-xs">
                        S
                    </div>
<div className="flex-grow">
<div className="text-xs font-medium text-white">Student</div>
<div className="text-[10px] text-zinc-500">Premium Member</div>
</div>
<svg aria-hidden="true" className="iconify text-zinc-500 hover:text-white cursor-pointer iconify--lucide" data-icon="lucide:log-out" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</aside>

<main className="flex-1 md:ml-64 p-6 md:p-10">

<div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
<div>
<h1 className="text-2xl font-medium text-white tracking-tight">The Archive</h1>
<p className="text-zinc-500 text-sm mt-1">Select a folder to access course materials.</p>
</div>
<div className="flex items-center gap-3">
<div className="relative">
<svg aria-hidden="true" className="iconify absolute left-3 top-2.5 text-zinc-500 iconify--lucide" data-icon="lucide:search" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m21 21l-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></g></svg>
<input className="bg-zinc-900 border border-zinc-800 text-sm text-white rounded-full pl-9 pr-4 py-2 focus:outline-none focus:border-amber-500/50 w-64 transition-all" placeholder="Search archive..." type="text"/>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<div className="bg-zinc-900/40 border border-white/5 rounded-xl p-5 hover:border-amber-500/30 hover:bg-zinc-900/80 transition-all group cursor-pointer relative overflow-hidden">
<div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 border border-blue-500/20 text-blue-400 group-hover:text-blue-300 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="text-base text-white font-medium mb-2">Freelancing &amp; Client Acquisition</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-4 h-8 line-clamp-2">Cold outreach strategies, proposal templates, and client retention systems.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-[10px] text-zinc-500">12 Modules</span>
<svg aria-hidden="true" className="iconify text-zinc-600 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-xl p-5 hover:border-amber-500/30 hover:bg-zinc-900/80 transition-all group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center mb-4 border border-pink-500/20 text-pink-400 group-hover:text-pink-300 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:pen-tool" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13l-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18M2.3 2.3l7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></g></svg>
</div>
<h3 className="text-base text-white font-medium mb-2">Copywriting / Marketing</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-4 h-8 line-clamp-2">Direct response psychology, email marketing, and persuasive writing mastery.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-[10px] text-zinc-500">24 Modules</span>
<svg aria-hidden="true" className="iconify text-zinc-600 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-xl p-5 hover:border-amber-500/30 hover:bg-zinc-900/80 transition-all group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center mb-4 border border-orange-500/20 text-orange-400 group-hover:text-orange-300 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-bag" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
</div>
<h3 className="text-base text-white font-medium mb-2">E-commerce (Shopify/Amazon/Etsy)</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-4 h-8 line-clamp-2">Shopify dropshipping, Amazon FBA, Etsy, and private labeling guides.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-[10px] text-zinc-500">18 Modules</span>
<svg aria-hidden="true" className="iconify text-zinc-600 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-xl p-5 hover:border-amber-500/30 hover:bg-zinc-900/80 transition-all group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 border border-purple-500/20 text-purple-400 group-hover:text-purple-300 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:smartphone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></g></svg>
</div>
<h3 className="text-base text-white font-medium mb-2">Social Media Growth &amp; Personal Brand</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-4 h-8 line-clamp-2">Personal branding, viral content strategies, and monetization algorithms.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-[10px] text-zinc-500">15 Modules</span>
<svg aria-hidden="true" className="iconify text-zinc-600 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-xl p-5 hover:border-amber-500/30 hover:bg-zinc-900/80 transition-all group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4 border border-teal-500/20 text-teal-400 group-hover:text-teal-300 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:briefcase" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></g></svg>
</div>
<h3 className="text-base text-white font-medium mb-2">Business Fundamentals</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-4 h-8 line-clamp-2">Legal structures, taxes, hiring, cash flow management, and operations.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-[10px] text-zinc-500">8 Modules</span>
<svg aria-hidden="true" className="iconify text-zinc-600 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-xl p-5 hover:border-amber-500/30 hover:bg-zinc-900/80 transition-all group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-zinc-700/30 flex items-center justify-center mb-4 border border-white/10 text-white group-hover:text-amber-200 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:brain-circuit" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
</div>
<h3 className="text-base text-white font-medium mb-2">Mindset / Productivity / Discipline (general, non-cult)</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-4 h-8 line-clamp-2">Science-based productivity, dopamine management, and discipline building.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-[10px] text-zinc-500">10 Modules</span>
<svg aria-hidden="true" className="iconify text-zinc-600 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="bg-zinc-900/40 border border-white/5 rounded-xl p-5 hover:border-amber-500/30 hover:bg-zinc-900/80 transition-all group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 border border-green-500/20 text-green-400 group-hover:text-green-300 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<h3 className="text-base text-white font-medium mb-2">Investing Basics (general education)</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-4 h-8 line-clamp-2">General financial education, market mechanics, and portfolio diversification.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<span className="text-[10px] text-zinc-500">6 Modules</span>
<svg aria-hidden="true" className="iconify text-zinc-600 group-hover:text-white transition-colors iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
</div>

<div className="mt-10">
<h3 className="text-sm font-medium text-white mb-4">Latest Community Wins</h3>
<div className="border border-white/5 rounded-xl overflow-hidden bg-zinc-900/20">
<table className="w-full text-left text-xs">
<thead className="bg-zinc-900/50 border-b border-white/5 text-zinc-400">
<tr>
<th className="px-6 py-3 font-medium">Student</th>
<th className="px-6 py-3 font-medium">Category</th>
<th className="px-6 py-3 font-medium">Result</th>
<th className="px-6 py-3 font-medium text-right">Time</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5">
<tr>
<td className="px-6 py-3 text-white">Jason K.</td>
<td className="px-6 py-3 text-zinc-500">E-commerce</td>
<td className="px-6 py-3 text-green-400 font-medium">$2,400 Day</td>
<td className="px-6 py-3 text-zinc-600 text-right">2m ago</td>
</tr>
<tr>
<td className="px-6 py-3 text-white">Sarah L.</td>
<td className="px-6 py-3 text-zinc-500">Freelancing</td>
<td className="px-6 py-3 text-green-400 font-medium">Signed Client</td>
<td className="px-6 py-3 text-zinc-600 text-right">14m ago</td>
</tr>
<tr>
<td className="px-6 py-3 text-white">Marcus D.</td>
<td className="px-6 py-3 text-zinc-500">Investing</td>
<td className="px-6 py-3 text-green-400 font-medium">Portfolio +12%</td>
<td className="px-6 py-3 text-zinc-600 text-right">32m ago</td>
</tr>
</tbody>
</table>
</div>
</div>
</main>
</div>

    </>
  );
}
