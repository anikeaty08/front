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
      

<nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 bg-[#0B0C0E]/80 backdrop-blur-md border-b border-white/5">
<div className="flex items-center gap-2 text-white font-semibold tracking-tight">
<i className="text-[#D9F832] fill-[#D9F832]" data-lucide="zap" strokeWidth="1.5" width="20"></i>
<span className="text-lg">Attribase</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-[10px] font-mono uppercase tracking-widest hover:text-white transition-colors" href="#">Preview</a>
<a className="text-[10px] font-mono uppercase tracking-widest hover:text-white transition-colors" href="#">How it works</a>
<a className="text-[10px] font-mono uppercase tracking-widest border border-white/10 px-4 py-2 rounded hover:bg-white/5 transition-colors text-white" href="#">Lifetime</a>
</div>
</nav>
<main className="pt-32 pb-20 px-4 md:px-6 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

<div className="max-w-4xl mx-auto text-center mb-24">
<div className="flex justify-center gap-3 mb-8">
<span className="inline-flex items-center px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] font-mono uppercase text-slate-300 tracking-wider">Zero-Code</span>
<span className="inline-flex items-center px-2 py-1 rounded border border-white/10 bg-white/5 text-[10px] font-mono uppercase text-slate-300 tracking-wider">Open Beta Soon</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 relative">
                Just Attributes,<br/>
<div className="relative inline-block">

<div className="hidden md:flex absolute -left-44 top-1/2 -translate-y-1/2 items-center gap-2 border border-white/10 bg-[#151618] px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider text-slate-300 rotate-[-6deg]">
<span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                        GSAP Animations
                    </div>
<span className="text-white/30">Not Plugins</span>

<div className="hidden md:flex absolute -right-32 top-1/2 -translate-y-1/2 items-center gap-2 border border-white/10 bg-[#151618] px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-wider text-slate-300 rotate-[4deg]">
<i data-lucide="wrench" strokeWidth="1.5" width="12"></i>
                        Utility
                    </div>
</div>
</h1>
<p className="text-lg md:text-xl text-slate-400 mb-10 font-light">
                Micro-utilities <span className="text-slate-200">for Webflow</span> · Powered by <span className="text-slate-200">HTML Attributes</span>
</p>
<form className="max-w-md mx-auto flex flex-col md:flex-row gap-2 mb-4">
<input className="flex-1 bg-white/5 border border-white/10 rounded px-4 py-3 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all uppercase tracking-wide" placeholder="YOUR E-MAIL" type="email"/>
<button className="bg-[#D9F832] text-[#0B0C0E] px-6 py-3 rounded text-xs font-mono font-semibold uppercase tracking-wide hover:bg-[#cbf002] transition-colors" type="button">
                    Join Waiting List
                </button>
</form>
<p className="text-xs text-slate-600">Zero setup · Zero dependencies · 100% attribute-driven</p>
</div>

<div className="max-w-6xl mx-auto relative group">
<div className="relative z-10 rounded-xl border border-white/10 bg-[#121315] shadow-2xl overflow-hidden select-none">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#161719]">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex items-center gap-4 w-1/3">
<div className="w-full h-8 bg-[#0B0C0E] border border-white/5 rounded flex items-center px-3 justify-between">
<span className="text-[10px] font-mono text-slate-600">SEARCH</span>
<i className="text-slate-600" data-lucide="search" width="12"></i>
</div>
</div>
</div>
<div className="flex h-[400px] md:h-[500px]">

<div className="hidden md:flex w-64 border-r border-white/5 flex-col p-4 gap-6 bg-[#161719]/50">
<div className="flex items-center gap-2 text-white/80 mb-4">
<i className="fill-[#D9F832] text-[#D9F832]" data-lucide="zap" width="16"></i>
<span className="text-sm font-semibold">Attribase</span>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between text-xs text-slate-500 px-2 py-1.5 hover:bg-white/5 rounded cursor-default">
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div> Automation</div>
<span className="font-mono text-[10px] opacity-50">(47)</span>
</div>
<div className="flex items-center justify-between text-xs text-white bg-white/5 px-2 py-1.5 rounded cursor-default">
<div className="flex items-center gap-2"><i data-lucide="wrench" width="12"></i> Utility</div>
<span className="font-mono text-[10px] opacity-50">(21)</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500 px-2 py-1.5 hover:bg-white/5 rounded cursor-default">
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div> UI &amp; Interactions</div>
<span className="font-mono text-[10px] opacity-50">(12)</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-500 px-2 py-1.5 hover:bg-white/5 rounded cursor-default">
<div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> GSAP Animations</div>
<span className="font-mono text-[10px] opacity-50">(32)</span>
</div>
</div>
</div>

<div className="flex-1 p-6 md:p-8 bg-[#0B0C0E]/30">
<div className="flex justify-between items-end mb-8">
<div>
<h3 className="text-lg text-white font-medium mb-1">Attributes, not plugins</h3>
<div className="flex gap-2 mt-3">
<span className="bg-white text-black px-2 py-0.5 rounded-[2px] text-[10px] font-mono font-bold">ALL</span>
<span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded-[2px] text-[10px] font-mono text-slate-400">ZERO-CONFIG</span>
<span className="bg-white/5 border border-white/10 px-2 py-0.5 rounded-[2px] text-[10px] font-mono text-slate-400">A11Y-SAFE</span>
</div>
</div>
<div className="hidden md:flex gap-4 text-[10px] font-mono text-slate-500">
<span className="text-white">NEWEST</span>
<span>POPULAR</span>
<span>A-Z</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="bg-[#161719] border border-white/5 rounded-lg p-1 aspect-square flex flex-col">
<div className="flex-1 bg-[#0B0C0E] rounded border border-white/5 relative group/card overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/5 blur-xl"></div>
</div>
<div className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-600">© 2025 Your Company</div>
</div>
</div>

<div className="bg-[#161719] border border-white/5 rounded-lg p-1 aspect-square flex flex-col">
<div className="flex-1 bg-[#0B0C0E] rounded border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 flex items-center justify-center opacity-20">
<span className="text-4xl font-mono font-bold text-white/20">20.11</span>
</div>
<div className="absolute bottom-3 right-3 w-2 h-2 bg-[#D9F832] rounded-sm"></div>
</div>
</div>

<div className="bg-[#161719] border border-white/5 rounded-lg p-1 aspect-square flex flex-col">
<div className="flex-1 bg-[#0B0C0E] rounded border border-white/5 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/10 text-xs font-mono">Loading...</div>
<div className="absolute bottom-3 left-3 text-[10px] font-mono text-slate-600">© 2025 Your Company</div>
</div>
</div>

<div className="bg-[#161719] border border-white/5 rounded-lg p-1 aspect-square flex flex-col">
<div className="flex-1 bg-[#0B0C0E] rounded border border-white/5 relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 via-purple-900/40 to-red-900/40"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=300&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-40 mix-blend-screen grayscale hover:grayscale-0 transition-all duration-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B0C0E] to-transparent pointer-events-none"></div>
</div>
<div className="text-center mt-6 text-sm text-slate-500">Sneak peek into the snippet library · coming soon</div>
</div>

<div className="max-w-5xl mx-auto py-32 grid md:grid-cols-3 gap-12 text-center md:text-left">
<div className="flex flex-col items-center">
<div className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 font-mono text-xs text-slate-400 rounded mb-6">01</div>
<h3 className="text-sm font-mono text-white uppercase tracking-wider mb-3">Add One Script</h3>
<p className="text-base text-slate-400 leading-relaxed text-center">A single lightweight JS file powers every snippet.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 font-mono text-xs text-slate-400 rounded mb-6">02</div>
<h3 className="text-sm font-mono text-white uppercase tracking-wider mb-3">Use Attributes</h3>
<p className="text-base text-slate-400 leading-relaxed text-center">Activate utilities using <span className="text-white font-mono bg-white/10 px-1 rounded text-xs">data-ab-*</span> <br/>• no code needed.</p>
</div>
<div className="flex flex-col items-center">
<div className="w-10 h-10 flex items-center justify-center border border-white/10 bg-white/5 font-mono text-xs text-slate-400 rounded mb-6">03</div>
<h3 className="text-sm font-mono text-white uppercase tracking-wider mb-3">Combine Freely</h3>
<p className="text-base text-slate-400 leading-relaxed text-center">Mix snippets anywhere across your Webflow project.</p>
</div>
</div>

<div className="max-w-4xl mx-auto relative">
<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-2xl -z-10 blur-sm"></div>
<div className="border border-white/10 bg-[#0E0F11] rounded-2xl p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#333 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10">
<div className="flex justify-center gap-3 mb-8">
<span className="inline-flex items-center px-2 py-1 rounded border border-white/10 bg-[#151618] text-[10px] font-mono uppercase text-slate-300 tracking-wider">Limited Offer</span>
<span className="inline-flex items-center px-2 py-1 rounded border border-white/10 bg-[#151618] text-[10px] font-mono uppercase text-slate-300 tracking-wider">Open Beta Soon</span>
</div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                        Be the first to<br/>access <span className="text-white/40">Attribase</span>
</h2>
<p className="text-lg text-slate-400 mb-10 font-light">
                        Early adopters get exclusive lifetime offer · <span className="text-slate-200">Limited to the first 100 users.</span>
</p>
<button className="bg-[#D9F832] text-[#0B0C0E] px-8 py-3.5 rounded-sm text-xs font-mono font-bold uppercase tracking-wide hover:bg-[#cbf002] hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(217,248,50,0.15)]">
                        Get Lifetime Access
                    </button>
<p className="text-[10px] text-slate-600 mt-6 font-mono">You'll receive a private link once early access opens</p>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-8 bg-[#0B0C0E]">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-[10px] font-mono uppercase text-slate-600 tracking-widest">
                © 2025 Attribase · Attributes, Not Plugins.
            </div>
<a className="flex items-center gap-2 text-[10px] font-mono uppercase text-white hover:text-slate-300 transition-colors tracking-widest" href="#">
<i data-lucide="linkedin" strokeWidth="1.5" width="12"></i>
                LinkedIn
            </a>
<div className="text-[10px] font-mono uppercase text-slate-600 tracking-widest">
                Powered by Webflow · Made by <span className="text-slate-300">Jan Vodvarka</span>
</div>
</div>
</footer>


    </>
  );
}
