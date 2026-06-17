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



        lucide.createIcons();
    
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
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#02040a]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-8 h-8">
<svg className="w-full h-full text-blue-500" fill="none" viewbox="0 0 24 24">
<path className="opacity-80" d="M12 2L2 22H22L12 2Z" fill="currentColor"></path>
<path d="M12 6L4.5 21H19.5L12 6Z" fill="#02040a"></path>
<path d="M12 10L7 20H17L12 10Z" fill="currentColor"></path>
</svg>
<div className="absolute inset-0 bg-blue-500 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
</div>
<span className="text-xl font-medium tracking-tight text-white">LA MINDS</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">Portfolio</a>
<a className="text-sm font-medium text-slate-400 hover:text-white transition-colors" href="#">About</a>
<a className="text-sm font-medium text-white" href="#">Contact</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors" href="#">
                Get Started
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>

<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-cyan-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Open for new collaborations
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                    Let’s Talk About <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 glow-text">Your Project.</span>
</h1>
<p className="text-xl text-slate-400">
                    Tell us about your goals. We usually respond within 24 hours.
                </p>
</div>

<div className="grid lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-7">
<div className="bg-white/[0.02] border border-white/[0.08] rounded-2xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
<form className="space-y-6 relative z-10">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-slate-400" htmlFor="name">Name</label>
<input className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-4 py-3.5 text-base text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-400" htmlFor="email">Email</label>
<input className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-4 py-3.5 text-base text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="email" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-400" htmlFor="company">Company (Optional)</label>
<input className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-4 py-3.5 text-base text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="company" placeholder="Your Company Ltd" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-slate-400" htmlFor="project">Project Description</label>
<textarea className="w-full bg-[#0B0F17] border border-white/10 rounded-lg px-4 py-3.5 text-base text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none" id="project" placeholder="Tell us about your idea, timeline, and budget..." rows="4"></textarea>
</div>
<div className="pt-2">
<button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium py-4 px-6 rounded-lg shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_-5px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2 group" type="submit">
                                    Send Message
                                    <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="send" strokeWidth="1.5"></i>
</button>
</div>
</form>
</div>
</div>

<div className="lg:col-span-5 space-y-8 flex flex-col h-full">

<div className="grid gap-4">
<a className="flex items-center gap-5 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group" href="mailto:hello@laminds.com">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:text-blue-300 transition-colors">
<i className="w-5 h-5" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-400">Email us</p>
<p className="text-lg text-white">hello@laminds.com</p>
</div>
</a>
<a className="flex items-center gap-5 p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors group" href="tel:+15550000000">
<div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-400">Call us</p>
<p className="text-lg text-white">+1 (555) 123-4567</p>
</div>
</a>
<div className="flex items-center gap-5 p-5 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="w-12 h-12 rounded-full bg-teal-500/10 flex items-center justify-center text-teal-400">
<i className="w-5 h-5" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm font-medium text-slate-400">Headquarters</p>
<p className="text-lg text-white">Los Angeles, CA</p>
</div>
</div>
</div>

<div className="flex-1 min-h-[280px] rounded-2xl border border-white/10 bg-[#050812] relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

<div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 via-transparent to-transparent"></div>

<div className="relative w-48 h-48 animate-spin-slow" style={{animation: 'spin 60s linear infinite'}}>
<svg className="w-full h-full" viewbox="0 0 200 200">
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#3B82F6" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#3B82F6" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#06B6D4" stop-opacity="0"></stop>
</lineargradient>
</defs>
<circle cx="100" cy="100" fill="none" r="40" stroke="rgba(59,130,246,0.2)" strokeWidth="1"></circle>
<circle cx="100" cy="100" fill="none" r="70" stroke="rgba(59,130,246,0.1)" stroke-dasharray="4 4" strokeWidth="1"></circle>
<path d="M100 60 L100 20" stroke="url(#lineGrad)" strokeWidth="1.5"></path>
<circle cx="100" cy="20" fill="#60A5FA" r="3"></circle>
<path d="M140 100 L180 100" stroke="url(#lineGrad)" strokeWidth="1.5"></path>
<circle cx="180" cy="100" fill="#22D3EE" r="3"></circle>
<path d="M60 100 L20 100" stroke="url(#lineGrad)" strokeWidth="1.5"></path>
<circle cx="20" cy="100" fill="#60A5FA" r="3"></circle>
<path d="M128 128 L156 156" stroke="url(#lineGrad)" strokeWidth="1.5"></path>
<circle cx="156" cy="156" fill="#2DD4BF" r="3"></circle>
</svg>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-500/20 blur-2xl rounded-full animate-pulse"></div>
</div>

<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all" href="#">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all" href="#">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all" href="#">
<i className="w-4 h-4" data-lucide="github" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="mt-32 border-t border-white/5 pt-20">
<div className="rounded-3xl bg-gradient-to-b from-blue-900/10 to-transparent border border-white/5 p-12 text-center relative overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">
                        Ready to get started?
                    </h2>
<p className="text-lg text-slate-400 max-w-xl mx-auto mb-10">
                        Join the innovators who trust LA MINDS to build their digital future. Let's create something extraordinary together.
                    </p>
<button className="bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-slate-200 transition-colors shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] inline-flex items-center gap-2">
                        Book Strategy Call
                        <i className="w-4 h-4" data-lucide="calendar" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 bg-[#010205] py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 text-blue-500">
<svg className="w-full h-full" fill="none" viewbox="0 0 24 24">
<path d="M12 2L2 22H22L12 2Z" fill="currentColor"></path>
</svg>
</div>
<span className="text-base font-medium text-slate-300">LA MINDS</span>
</div>
<div className="text-base text-slate-500">
                © 2024 LA MINDS. All rights reserved. Crafted with passion.
            </div>
<div className="flex gap-8 text-base text-slate-400">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>


    </>
  );
}
