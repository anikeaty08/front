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
      

<div className="relative w-full max-w-[1600px] bg-white rounded-[3rem] overflow-hidden shadow-2xl ring-8 ring-white flex flex-col">

<nav className="sticky top-0 z-50 w-full px-6 md:px-12 py-6 flex justify-between items-center bg-white/80 backdrop-blur-md border-b border-gray-100">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
<svg className="lucide lucide-box w-5 h-5" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22v-9"></path></svg>
</div>
<span className="font-bold tracking-tight text-lg font-jakarta">Mono.</span>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-black transition font-geist" href="#overview">Overview</a>
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-black transition font-geist" href="#specs">Specs</a>
<button className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition font-geist">Buy Now</button>
</div>
</nav>

<section className="relative w-full pt-16 pb-24 px-6 md:px-12 flex flex-col items-center text-center">
<div className="max-w-3xl mx-auto space-y-6 mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-600 font-geist">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-slate-500"></span>
</span>
                    New version 2.0 available
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] font-jakarta text-slate-900">
                    One Product.<br/>Real Results.
                </h1>
<p className="text-xl text-slate-500 font-light max-w-lg mx-auto font-geist leading-relaxed">
                    A simple solution designed to solve one clear problem. Engineered for precision and built for everyday life.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="bg-black text-white px-8 py-3.5 rounded-full font-medium text-sm hover:scale-105 transition-transform duration-200 shadow-xl shadow-slate-200 font-geist flex items-center gap-2">
                        Buy Now
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="bg-white text-slate-900 border border-slate-200 px-8 py-3.5 rounded-full font-medium text-sm hover:bg-slate-50 transition-colors font-geist">
                        Watch the film
                    </button>
</div>
</div>

<div className="relative w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 group">
<img alt="Product Hero" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1524143986875-3b098d78b363?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
</section>

<section className="w-full px-6 md:px-12 py-24 bg-slate-50 border-y border-slate-100" id="overview">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-slate-200 rounded-full blur-3xl opacity-30"></div>
<img alt="Product Detail" className="hover:rotate-0 transition-transform duration-500 border-white border rounded-2xl relative shadow-lg rotate-1" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
<div className="order-1 md:order-2 space-y-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-jakarta text-slate-900">
                        Clarity in a complex world.
                    </h2>
<p className="text-lg text-slate-500 font-geist leading-relaxed">
                        We stripped away the unnecessary features to focus on what actually matters. The result is a product that doesn't just work—it improves the way you work.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-slate-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-slate-700 font-medium font-geist">Minimalist industrial design</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-slate-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-slate-700 font-medium font-geist">Premium materials only</span>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
<svg className="lucide lucide-check w-3 h-3 text-slate-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-slate-700 font-medium font-geist">Lifetime warranty support</span>
</li>
</ul>
</div>
</div>
</section>

<section className="w-full px-6 md:px-12 py-24 bg-white">
<div className="max-w-6xl mx-auto mb-16 text-center">
<span className="text-slate-500 font-semibold tracking-wide text-xs uppercase font-geist">Why Mono?</span>
<h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight font-jakarta">Everything you need. Nothing you don't.</h2>
</div>
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-zap w-6 h-6 text-slate-900" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<h3 className="text-xl font-semibold font-jakarta text-slate-900 mb-3">Easy to use</h3>
<p className="text-slate-500 font-geist text-sm leading-relaxed">
                        No manuals needed. We designed the interface to be intuitive from the very first moment you unbox it.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-clock w-6 h-6 text-slate-900" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<h3 className="text-xl font-semibold font-jakarta text-slate-900 mb-3">Saves time</h3>
<p className="text-slate-500 font-geist text-sm leading-relaxed">
                        Automates the tedious parts of your workflow so you can reclaim hours of your day for what matters.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shield-check w-6 h-6 text-slate-900" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-semibold font-jakarta text-slate-900 mb-3">Reliable results</h3>
<p className="text-slate-500 font-geist text-sm leading-relaxed">
                        Built to perform consistently under pressure. We've stress-tested every component for longevity.
                    </p>
</div>
</div>
</section>

<section className="w-full px-6 md:px-12 py-24 bg-slate-900 text-white overflow-hidden relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight font-jakarta">How it works</h2>
<p className="text-slate-400 mt-4 max-w-lg font-geist">Getting started takes less than 5 minutes. No technical skills required.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 z-0"></div>

<div className="relative z-10">
<div className="w-16 h-16 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center mb-8 text-2xl font-bold font-jakarta text-white shadow-lg">1</div>
<h3 className="text-lg font-medium mb-3 font-jakarta">Unbox &amp; Connect</h3>
<p className="text-slate-400 text-sm leading-relaxed font-geist">Simply plug the device in. It automatically detects your environment settings.</p>
</div>

<div className="relative z-10">
<div className="w-16 h-16 bg-slate-800 rounded-2xl border border-slate-700 flex items-center justify-center mb-8 text-2xl font-bold font-jakarta text-white shadow-lg">2</div>
<h3 className="text-lg font-medium mb-3 font-jakarta">Configure Once</h3>
<p className="text-slate-400 text-sm leading-relaxed font-geist">Use the companion app to set your preferences. Your settings are saved locally.</p>
</div>

<div className="relative z-10">
<div className="w-16 h-16 bg-white text-black rounded-2xl border border-white flex items-center justify-center mb-8 text-2xl font-bold font-jakarta shadow-lg shadow-white/20">3</div>
<h3 className="text-lg font-medium mb-3 font-jakarta">Enjoy the Results</h3>
<p className="text-slate-400 text-sm leading-relaxed font-geist">Sit back and let the automation handle the rest. It really is that simple.</p>
</div>
</div>
</div>
</section>

<section className="w-full px-6 md:px-12 py-20 bg-white border-b border-gray-100">
<div className="max-w-4xl mx-auto text-center">
<p className="text-lg font-medium text-slate-900 mb-8 font-jakarta">Trusted by over 10,000 users and growing teams</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">

<svg className="h-8" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H90 V10 H65 V12 H85 V17 H65 V25 H60 Z"></path></svg>
<svg className="h-7" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" r="10"></circle> <rect height="20" rx="5" width="50" x="35" y="5"></rect></svg>
<svg className="h-8" fill="currentColor" viewbox="0 0 100 30"><path d="M10,25 L20,5 L30,25 M45,5 H65 M55,5 V25 M75,5 H95 L75,25 H95" stroke="currentColor" strokeWidth="3"></path></svg>
<svg className="h-6" fill="currentColor" viewbox="0 0 100 30"><rect height="20" width="20" x="5" y="5"></rect> <circle cx="45" cy="15" r="10"></circle> <path d="M75,25 L85,5 L95,25"></path></svg>
</div>
<div className="mt-16 bg-slate-50 rounded-2xl p-8 max-w-2xl mx-auto relative">
<svg className="absolute top-6 left-6 w-8 h-8 text-slate-300" fill="currentColor" viewbox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 16.6569 20.6739 18 19.017 18H16.017V21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 16.6569 11.6735 18 10.0166 18H7.0166V21H5.0166Z"></path></svg>
<p className="text-slate-700 font-medium font-jakarta text-lg relative z-10 italic">"I've tried dozens of alternatives, but Mono is the only one that actually delivered on its promise. It's become essential to my daily routine."</p>
<div className="mt-6 flex items-center justify-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;q=80"/>
</div>
<div className="text-left">
<div className="text-sm font-semibold text-slate-900 font-jakarta">Alex Morgan</div>
<div className="text-xs text-slate-500 font-geist">Creative Director</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full px-6 md:px-12 py-24">
<div className="relative bg-slate-900 rounded-[2.5rem] p-12 md:p-24 overflow-hidden text-center flex flex-col items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 to-slate-950"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px]"></div>
<div className="relative z-10 max-w-2xl">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 font-jakarta">
                        Ready to experience the difference?
                    </h2>
<p className="text-slate-400 text-lg mb-10 font-geist">
                        Join thousands of satisfied customers. 30-day money-back guarantee included.
                    </p>
<button className="bg-white text-slate-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-slate-100 hover:scale-105 transition-all duration-200 shadow-xl shadow-white/5 font-geist">
                        Get Started
                    </button>
<p className="mt-6 text-xs text-slate-500 font-geist">Free shipping worldwide • Cancel anytime</p>
</div>
</div>
</section>

<footer className="w-full px-8 md:px-12 pb-12 pt-4 bg-white">
<div className="border-t border-slate-100 pt-12 flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
<svg className="lucide lucide-box" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22v-9"></path></svg>
</div>
<span className="font-bold text-lg font-jakarta">Mono.</span>
</div>
<p className="text-slate-500 text-sm font-geist">Designing simple tools for complex problems. Built in California.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12">
<div>
<h4 className="font-medium text-slate-900 mb-4 font-jakarta text-sm">Product</h4>
<ul className="space-y-3">
<li><a className="text-slate-500 hover:text-slate-900 text-sm font-geist" href="#">Overview</a></li>
<li><a className="text-slate-500 hover:text-slate-900 text-sm font-geist" href="#">Specs</a></li>
<li><a className="text-slate-500 hover:text-slate-900 text-sm font-geist" href="#">Reviews</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 font-jakarta text-sm">Support</h4>
<ul className="space-y-3">
<li><a className="text-slate-500 hover:text-slate-900 text-sm font-geist" href="#">Help Center</a></li>
<li><a className="text-slate-500 hover:text-slate-900 text-sm font-geist" href="#">Warranty</a></li>
<li><a className="text-slate-500 hover:text-slate-900 text-sm font-geist" href="#">Contact</a></li>
</ul>
</div>
<div className="hidden md:block">
<h4 className="font-medium text-slate-900 mb-4 font-jakarta text-sm">Legal</h4>
<ul className="space-y-3">
<li><a className="text-slate-500 hover:text-slate-900 text-sm font-geist" href="#">Privacy</a></li>
<li><a className="text-slate-500 hover:text-slate-900 text-sm font-geist" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
<p className="text-slate-400 text-xs font-geist">© 2024 Mono Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900" href="#"><svg className="lucide lucide-twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 14.6-5.5-4.6 1.1-16.5 1.1-16.5 0 0-9 1.8-11 8 1.4-7.9 10.6-11.4 7-17.4 0 0 8.4 1.5 14 6Z"></path></svg></a>
<a className="text-slate-400 hover:text-slate-900" href="#"><svg className="lucide lucide-instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</footer>
</div>

    </>
  );
}
