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


document.write(new Date().getFullYear())


        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
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
      

<div className="fixed inset-0 grid-bg pointer-events-none z-0"></div>

<nav className="relative z-10 w-full max-w-5xl mx-auto px-6 py-8 flex justify-between items-center">
<div className="flex items-center gap-2">
<span className="text-white font-medium tracking-tighter text-lg">
                SDS<span className="text-neutral-600">.STUDIO</span>
</span>
</div>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors duration-300" href="#contact">
            Get in touch
        </a>
</nav>

<main className="relative z-10 flex-grow flex flex-col items-center w-full">

<div className="text-center max-w-2xl mx-auto px-6 pt-10 pb-20 space-y-8">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mx-auto">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-emerald-200/80 tracking-wide uppercase">Available for Hire</span>
</div>

<h1 className="text-5xl md:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tight leading-[1.1]">
                Shopify stores.<br/>Designed to scale.
            </h1>

<p className="text-lg md:text-xl text-neutral-500 font-normal leading-relaxed max-w-lg mx-auto">
                Specialized UI/UX design and development exclusively for e-commerce brands on Shopify.
            </p>
</div>

<div className="w-full border-y border-white/5 bg-white/[0.02] py-12 mb-24 backdrop-blur-sm">
<div className="max-w-5xl mx-auto px-6">
<p className="text-center text-xs font-medium uppercase tracking-widest text-neutral-600 mb-8">Trusted by upcoming brands</p>
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-70">

<span className="text-xl font-bold tracking-tighter text-neutral-500 hover:text-white transition-colors cursor-default">AEROLAB</span>
<span className="text-xl font-semibold tracking-tighter text-neutral-500 hover:text-white transition-colors cursor-default">VØLTA</span>
<span className="text-xl font-bold tracking-tighter text-neutral-500 hover:text-white transition-colors cursor-default italic">NEXUS</span>
<span className="text-xl font-semibold tracking-tighter text-neutral-500 hover:text-white transition-colors cursor-default">OAK&amp;IRON</span>
<span className="text-xl font-bold tracking-tighter text-neutral-500 hover:text-white transition-colors cursor-default">PRISM</span>
</div>
</div>
</div>

<div className="w-full max-w-5xl mx-auto px-6 mb-24">
<div className="flex flex-col md:flex-row justify-between items-end mb-8">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight">Curated Themes</h2>
<p className="text-sm text-neutral-500 mt-2">Custom configurations built for conversion.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-xs text-neutral-400 hover:text-white transition-colors mt-4 md:mt-0" href="#">
                    View all work <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 overflow-hidden">

<div className="h-48 bg-neutral-900 relative p-4 overflow-hidden border-b border-white/5 group-hover:opacity-90 transition-opacity">
<div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/20 to-neutral-900"></div>

<div className="w-full h-full border border-white/10 rounded bg-[#0a0a0a] shadow-2xl flex flex-col">
<div className="h-3 w-full border-b border-white/5 flex items-center px-2 gap-1">
<div className="w-1 h-1 rounded-full bg-red-500/50"></div>
<div className="w-1 h-1 rounded-full bg-yellow-500/50"></div>
</div>
<div className="p-3 space-y-2">
<div className="w-1/2 h-2 bg-neutral-800 rounded"></div>
<div className="w-3/4 h-2 bg-neutral-800/50 rounded"></div>
<div className="grid grid-cols-2 gap-2 mt-4">
<div className="h-12 bg-emerald-900/10 rounded border border-emerald-500/10"></div>
<div className="h-12 bg-neutral-800/30 rounded border border-white/5"></div>
</div>
</div>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-sm">Velocity 2.0</h3>
<p className="text-xs text-neutral-500 mt-1">High-volume fashion</p>
</div>
<div className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wide">
                                Best Seller
                            </div>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 overflow-hidden">
<div className="h-48 bg-neutral-900 relative p-4 overflow-hidden border-b border-white/5">
<div className="absolute inset-0 bg-gradient-to-tl from-indigo-900/20 to-neutral-900"></div>

<div className="w-full h-full border border-white/10 rounded bg-[#0a0a0a] shadow-2xl flex flex-col items-center justify-center space-y-3">
<div className="text-center space-y-1">
<div className="w-16 h-2 bg-white/20 mx-auto rounded-sm"></div>
<div className="w-10 h-1.5 bg-white/10 mx-auto rounded-sm"></div>
</div>
<div className="flex gap-2">
<div className="w-8 h-10 border border-white/5 rounded-sm bg-white/[0.02]"></div>
<div className="w-8 h-10 border border-white/5 rounded-sm bg-white/[0.02]"></div>
<div className="w-8 h-10 border border-white/5 rounded-sm bg-white/[0.02]"></div>
</div>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-sm">Minimalist</h3>
<p className="text-xs text-neutral-500 mt-1">Single product focus</p>
</div>
</div>
</div>
</div>

<div className="group relative rounded-xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 overflow-hidden">
<div className="h-48 bg-neutral-900 relative p-4 overflow-hidden border-b border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-neutral-900"></div>

<div className="w-full h-full border border-white/10 rounded bg-[#0a0a0a] shadow-2xl flex">
<div className="w-1/3 border-r border-white/5 p-2 space-y-2">
<div className="w-full h-1.5 bg-neutral-800 rounded"></div>
<div className="w-2/3 h-1.5 bg-neutral-800/50 rounded"></div>
</div>
<div className="w-2/3 p-2 grid grid-cols-2 gap-2">
<div className="bg-neutral-800/20 rounded border border-white/5"></div>
<div className="bg-neutral-800/20 rounded border border-white/5"></div>
<div className="bg-neutral-800/20 rounded border border-white/5"></div>
<div className="bg-neutral-800/20 rounded border border-white/5"></div>
</div>
</div>
</div>
<div className="p-5">
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-sm">Enterprise</h3>
<p className="text-xs text-neutral-500 mt-1">Large catalog support</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-5xl mx-auto px-6 mb-24">
<div className="relative rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-900/10 via-neutral-900/50 to-orange-900/10 overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-3xl rounded-full"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full"></div>
<div className="relative p-8 md:p-12">
<div className="flex flex-col lg:flex-row items-center gap-12">

<div className="flex-1 space-y-6">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10">
<i className="w-3 h-3 text-amber-400" data-lucide="credit-card"></i>
<span className="text-xs font-medium text-amber-300 tracking-wide uppercase">New Service</span>
</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">
                                Carding Services<br/><span className="text-amber-400">Also Available</span>
</h2>
<p className="text-neutral-400 leading-relaxed max-w-md">
                                Premium card services with high success rates. Secure, reliable, and discreet transactions for all your needs.
                            </p>

<div className="grid grid-cols-2 gap-4 pt-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-amber-400" data-lucide="shield-check"></i>
</div>
<span className="text-sm text-neutral-300">Secure Process</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-amber-400" data-lucide="zap"></i>
</div>
<span className="text-sm text-neutral-300">Fast Delivery</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-amber-400" data-lucide="percent"></i>
</div>
<span className="text-sm text-neutral-300">High Success Rate</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
<i className="w-4 h-4 text-amber-400" data-lucide="headphones"></i>
</div>
<span className="text-sm text-neutral-300">24/7 Support</span>
</div>
</div>

<a className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-medium text-sm px-6 py-3 rounded-lg transition-all duration-300 mt-4" href="https://wa.me/923196300190" target="_blank">
<i className="w-4 h-4" data-lucide="message-circle"></i>
                                Inquire on WhatsApp
                            </a>
</div>

<div className="flex-1 relative h-80 w-full max-w-md" style={{perspective: '1000px'}}>

<div className="float-1 absolute top-4 left-4 md:left-8 w-72 h-44 rounded-xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 shadow-2xl shadow-blue-500/20 card-shine overflow-hidden transform -rotate-6 hover:scale-105 transition-transform duration-300" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
<div className="relative p-6 h-full flex flex-col justify-between">

<div className="flex justify-between items-start">
<div className="w-12 h-9 rounded bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center">
<div className="w-8 h-6 border-2 border-yellow-600/30 rounded-sm"></div>
</div>
<i className="w-6 h-6 text-white/60 rotate-90" data-lucide="wifi"></i>
</div>

<div className="space-y-2">
<p className="text-white/90 text-lg tracking-widest font-light">4532 •••• •••• 8901</p>
<div className="flex justify-between items-end">
<div>
<p className="text-white/40 text-[10px] uppercase tracking-wider">Card Holder</p>
<p className="text-white/80 text-sm tracking-wide">JOHN DOE</p>
</div>
<div className="text-right">
<p className="text-white/40 text-[10px] uppercase tracking-wider">Expires</p>
<p className="text-white/80 text-sm">12/28</p>
</div>
<div className="text-white font-bold text-2xl italic tracking-tight">VISA</div>
</div>
</div>
</div>
</div>

<div className="float-2 absolute top-20 right-4 md:right-0 w-72 h-44 rounded-xl bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl shadow-black/50 card-shine overflow-hidden transform rotate-6 hover:scale-105 transition-transform duration-300" style={{transformStyle: 'preserve-3d'}}>
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImNpcmNsZXMiIHg9IjAiIHk9IjAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2NpcmNsZXMpIi8+PC9zdmc+')] opacity-50"></div>
<div className="relative p-6 h-full flex flex-col justify-between">

<div className="flex justify-between items-start">
<div className="w-12 h-9 rounded bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
<div className="w-8 h-6 border-2 border-yellow-700/30 rounded-sm"></div>
</div>
<i className="w-6 h-6 text-white/40 rotate-90" data-lucide="wifi"></i>
</div>

<div className="space-y-2">
<p className="text-white/80 text-lg tracking-widest font-light">5412 •••• •••• 3456</p>
<div className="flex justify-between items-end">
<div>
<p className="text-white/30 text-[10px] uppercase tracking-wider">Card Holder</p>
<p className="text-white/70 text-sm tracking-wide">JANE SMITH</p>
</div>
<div className="text-right">
<p className="text-white/30 text-[10px] uppercase tracking-wider">Expires</p>
<p className="text-white/70 text-sm">09/27</p>
</div>

<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-red-500"></div>
<div className="w-8 h-8 rounded-full bg-amber-500 opacity-80"></div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-36 left-16 md:left-20 w-72 h-44 rounded-xl bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-900 shadow-2xl shadow-emerald-500/10 card-shine overflow-hidden transform rotate-3 opacity-60" style={{transformStyle: 'preserve-3d'}}>
<div className="relative p-6 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div className="w-12 h-9 rounded bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center">
<div className="w-8 h-6 border-2 border-yellow-600/30 rounded-sm"></div>
</div>
</div>
<div className="space-y-2">
<p className="text-white/70 text-lg tracking-widest font-light">3782 •••• •••• 0005</p>
<div className="flex justify-between items-end">
<div>
<p className="text-white/70 text-sm tracking-wide">ALEX JOHNSON</p>
</div>
<div className="text-white font-bold text-xl tracking-tighter">AMEX</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full max-w-md mx-auto relative group px-6" id="contact">

<div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-indigo-500/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
<div className="glass-panel relative rounded-xl p-8 space-y-6">
<div className="flex items-start justify-between">
<div>
<h3 className="text-white font-medium text-lg tracking-tight">Direct Inquiry</h3>
<p className="text-sm text-neutral-500 mt-1">Serious projects only.</p>
</div>
<i className="text-neutral-600 w-5 h-5" data-lucide="shield-alert"></i>
</div>
<div className="h-px w-full bg-gradient-to-r from-transparent via-neutral-800 to-transparent"></div>

<div className="space-y-3">
<div className="flex items-center gap-3 text-sm">
<i className="text-emerald-500 w-4 h-4" data-lucide="check"></i>
<span className="text-neutral-300">Shopify Store Design</span>
</div>
<div className="flex items-center gap-3 text-sm">
<i className="text-emerald-500 w-4 h-4" data-lucide="check"></i>
<span className="text-neutral-300">Theme Customization</span>
</div>
<div className="flex items-center gap-3 text-sm">
<i className="text-amber-500 w-4 h-4" data-lucide="check"></i>
<span className="text-neutral-300">Carding Services</span>
</div>
<div className="flex items-center gap-3 text-sm">
<i className="text-red-500/70 w-4 h-4" data-lucide="x"></i>
<span className="text-neutral-600">General IT Support</span>
</div>
</div>
<div className="pt-4">
<div className="bg-white/5 border border-white/10 rounded-lg p-4 flex flex-col items-center justify-center text-center space-y-3 hover:bg-white/10 transition-colors duration-300">
<div className="flex items-center gap-2 text-emerald-400">
<i className="w-4 h-4" data-lucide="message-circle"></i>
<span className="text-xs font-medium tracking-wide uppercase">WhatsApp Only</span>
</div>
<p className="text-2xl text-white font-medium tracking-tight select-all">03196300190</p>
<a className="w-full mt-2 bg-white text-black hover:bg-neutral-200 transition-colors font-medium text-sm py-2.5 rounded-md flex items-center justify-center gap-2" href="https://wa.me/923196300190" target="_blank">
                            Start Chat
                            <i className="w-4 h-4 text-neutral-500" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
<p className="text-xs text-center text-neutral-600">
                    Please ensure your message includes a brief of your needs.
                </p>
</div>
</div>
</main>

<footer className="relative z-10 py-12 text-center mt-12 border-t border-white/5">
<p className="text-xs text-neutral-700">
            ©  Shopify Design Specialist. All rights reserved.
        </p>
</footer>


    </>
  );
}
