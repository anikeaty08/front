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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[128px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-violet-900/10 rounded-full blur-[128px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl animate-fade-in">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-sm tracking-[0.2em] font-semibold uppercase text-white flex items-center gap-2" href="#">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                Alexander
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="group relative inline-flex h-9 items-center justify-center overflow-hidden rounded-full bg-white px-6 font-medium text-black transition-all hover:bg-zinc-200" href="#order">
<span className="mr-2 text-xs font-semibold">Book Reading</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14"></span>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/0 via-indigo-500/10 to-indigo-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
</a>
</div>
</nav>

<main className="flex-grow relative z-10 pt-32 pb-20 px-6 overflow-hidden">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 animate-fade-in delay-100">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-[11px] font-medium text-indigo-300 uppercase tracking-wider">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                    Accepting New Clients
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white leading-[1.05]">
                    Clarity in <br/>
<span className="text-zinc-600">a chaotic world.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-lg leading-relaxed font-light">
                    Direct, no-nonsense Tarot readings delivered via personal video. Identify blocks, uncover intentions, and find your path forward within 24 hours.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="h-12 px-8 rounded-lg bg-white text-black font-medium flex items-center justify-center gap-2 hover:bg-zinc-200 transition-all hover:scale-[1.02] active:scale-[0.98]" href="#order">
                        Start Your Reading
                    </a>
<div className="flex items-center gap-4 px-4 h-12">
<div className="flex -space-x-3">
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-black" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<span className="text-xs text-zinc-500">
<strong className="text-white">1,200+</strong> readings delivered
                        </span>
</div>
</div>
</div>

<div className="relative h-[500px] lg:h-[600px] w-full animate-fade-in delay-200">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent rounded-full blur-[80px] opacity-40"></div>

<div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5 bg-zinc-900 shadow-2xl animate-float">
<img alt="Alexander Tarot Reader" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-all duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10 group cursor-pointer hover:bg-white/20 transition-colors">
<span className="iconify text-white ml-0.5" data-icon="lucide:play" data-width="16"></span>
</div>
<div>
<p className="text-sm font-medium text-white">Alexander</p>
<p className="text-xs text-zinc-500">Intuitive Reader &amp; Guide</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto mt-32 border-t border-white/5 pt-20" id="process">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/40">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:message-square-plus" data-width="24"></span>
</div>
<h3 className="text-base font-medium text-white mb-2">1. Ask 3 Questions</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Submit your specific questions. Focus on the "why" and "how". No vague generalities—we get straight to the point.
                    </p>
</div>
<div className="group p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/40">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:video" data-width="24"></span>
</div>
<h3 className="text-base font-medium text-white mb-2">2. Personal Video</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        I record a 15-20 minute private video analyzing your spread, connecting the cards to your specific situation.
                    </p>
</div>
<div className="group p-6 rounded-2xl bg-zinc-900/20 border border-white/5 hover:border-white/10 transition-all hover:bg-zinc-900/40">
<div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform duration-300">
<span className="iconify" data-icon="lucide:zap" data-width="24"></span>
</div>
<h3 className="text-base font-medium text-white mb-2">3. 24h Delivery</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        No waiting weeks for an appointment. Receive your private link via email within 24 hours of booking.
                    </p>
</div>
</div>
</div>

<div className="mt-32 max-w-5xl mx-auto" id="order">
<div className="text-center mb-12 space-y-2">
<h2 className="text-3xl font-medium text-white tracking-tight">Your Session</h2>
<p className="text-zinc-500">Secure your spot. 100% Private &amp; Confidential.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

<div className="lg:col-span-2 space-y-6">
<form className="space-y-6" onsubmit="event.preventDefault();">

<div className="glass-panel rounded-xl p-6 md:p-8 space-y-6">
<div className="flex items-center justify-between mb-2">
<h2 className="text-sm font-medium text-white tracking-wide uppercase flex items-center gap-2">
<span className="iconify text-zinc-500" data-icon="lucide:user" data-width="16"></span>
                                    Your Details
                                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 font-medium ml-1">Full Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 font-medium ml-1">Date of Birth</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all" placeholder="DD / MM / YYYY" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs text-zinc-500 font-medium ml-1">Email (for video delivery)</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all" type="email"/>
</div>
</div>

<div className="glass-panel rounded-xl p-6 md:p-8 space-y-6">
<div className="flex items-center justify-between mb-2">
<h2 className="text-sm font-medium text-white tracking-wide uppercase flex items-center gap-2">
<span className="iconify text-zinc-500" data-icon="lucide:help-circle" data-width="16"></span>
                                    3 Questions
                                </h2>
</div>
<div className="space-y-4">
<div className="group relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 rounded-l-lg group-focus-within:bg-indigo-500 transition-colors"></div>
<textarea className="w-full bg-zinc-900/50 border border-zinc-800 border-l-0 rounded-r-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-700 transition-all resize-none" placeholder="1. What is currently blocking my career progression?" rows="2"></textarea>
</div>
<div className="group relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 rounded-l-lg group-focus-within:bg-indigo-500 transition-colors"></div>
<textarea className="w-full bg-zinc-900/50 border border-zinc-800 border-l-0 rounded-r-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-700 transition-all resize-none" placeholder="2. What are the true intentions of [Name]?" rows="2"></textarea>
</div>
<div className="group relative">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-800 rounded-l-lg group-focus-within:bg-indigo-500 transition-colors"></div>
<textarea className="w-full bg-zinc-900/50 border border-zinc-800 border-l-0 rounded-r-lg px-4 py-3 text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:border-zinc-700 transition-all resize-none" placeholder="3. What should I focus on for the next month?" rows="2"></textarea>
</div>
</div>
</div>
</form>
</div>

<div className="lg:sticky lg:top-24 space-y-6">
<div className="glass-panel rounded-xl p-6 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[60px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<h3 className="text-lg font-medium text-white mb-6">Order Summary</h3>
<div className="space-y-4 mb-8">
<div className="flex justify-between items-start text-sm">
<span className="text-zinc-400">Deep Dive Reading</span>
<span className="text-white font-medium">$29.00</span>
</div>
<div className="flex justify-between items-start text-sm">
<span className="text-zinc-400">Video Recording (20m)</span>
<span className="text-white font-medium">Included</span>
</div>
<div className="flex justify-between items-start text-sm">
<span className="text-zinc-400">24h Turnaround</span>
<span className="text-white font-medium">Included</span>
</div>
<div className="h-px bg-white/10 my-4"></div>
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-white">Total</span>
<span className="text-xl font-semibold text-white">$29.00</span>
</div>
</div>

<div className="space-y-3 mb-6">
<div className="relative group">
<div className="absolute inset-0 bg-indigo-500/20 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
<input className="relative z-10 w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500 transition-all" placeholder="Card number" type="text"/>
<span className="iconify absolute right-3 top-3 text-zinc-600 z-20" data-icon="lucide:credit-card" data-width="16"></span>
</div>
<div className="grid grid-cols-2 gap-3">
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500 transition-all text-center" placeholder="MM/YY" type="text"/>
<input className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-indigo-500 transition-all text-center" placeholder="CVC" type="text"/>
</div>
</div>
<button className="w-full bg-white hover:bg-indigo-50 text-black font-semibold h-12 rounded-lg transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]">
<span>Complete Order</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-zinc-500">
<span className="iconify text-green-500" data-icon="lucide:shield-check" data-width="12"></span>
                            Encrypted &amp; Confidential
                        </div>
</div>

<div className="bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-4 flex gap-3 items-center">
<div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></div>
<p className="text-xs text-zinc-400">Only <strong>4 spots</strong> left for 24h delivery today.</p>
</div>
</div>
</div>
</div>

<div className="mt-32 max-w-6xl mx-auto" id="reviews">
<h3 className="text-center text-xs font-semibold tracking-widest text-zinc-500 mb-12 uppercase">Join thousands who found clarity</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-4 mb-6">
<img alt="User" className="w-10 h-10 rounded-full border border-white/10 grayscale" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<p className="text-sm font-medium text-white">Elena M.</p>
<p className="text-xs text-zinc-500">New York</p>
</div>
</div>
<p className="text-sm text-zinc-300 leading-relaxed">
                        "Alexander nailed the dynamic between me and my partner. The video was so personal, I felt like he was sitting right there. The advice was actionable, not just fluffy mysticism."
                    </p>
<div className="mt-4 flex text-indigo-400">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
</div>
</div>

<div className="p-8 rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-4 mb-6">
<img alt="User" className="w-10 h-10 rounded-full border border-white/10 grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<p className="text-sm font-medium text-white">James T.</p>
<p className="text-xs text-zinc-500">London</p>
</div>
</div>
<p className="text-sm text-zinc-300 leading-relaxed">
                        "I was skeptical about an online reading, but the accuracy was terrifyingly good. He helped me make a career pivot I've been debating for years. Worth every penny."
                    </p>
<div className="mt-4 flex text-indigo-400">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
</div>
</div>

<div className="p-8 rounded-xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/5 hover:border-white/10 transition-colors">
<div className="flex items-center gap-4 mb-6">
<img alt="User" className="w-10 h-10 rounded-full border border-white/10 grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<div>
<p className="text-sm font-medium text-white">Sarah K.</p>
<p className="text-xs text-zinc-500">Toronto</p>
</div>
</div>
<p className="text-sm text-zinc-300 leading-relaxed">
                        "Fast, clear, and profound. I love that I have the video to look back on. I've rewatched it three times and find new insights each time."
                    </p>
<div className="mt-4 flex text-indigo-400">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="12"></span>
</div>
</div>
</div>
</div>
</main>
<footer className="border-t border-white/5 bg-black py-12 px-6 mt-20">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-900 rounded-full flex items-center justify-center border border-white/10">
<span className="iconify text-white" data-icon="lucide:infinity" data-width="16"></span>
</div>
<div>
<span className="text-sm font-semibold text-white">Alexander</span>
<p className="text-xs text-zinc-600">© 2024</p>
</div>
</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
