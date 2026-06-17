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

        // Modern Scroll Animation Script
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
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
      

<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
<div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
</div>

<nav className="fixed w-full z-50 top-0 start-0 border-b backdrop-blur-md border-slate-200/60 bg-white/80 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-10 h-10 flex-shrink-0">
<svg className="w-full h-full drop-shadow-sm transition-transform group-hover:scale-105 duration-300" viewbox="0 0 100 100">

<path d="M10 90 L10 50 L30 40 L30 90" fill="#0f172a"></path> 
<path d="M40 90 L40 30 L60 20 L60 90" fill="#1e40af"></path> 
<path className="opacity-90" d="M70 90 L70 40 L90 90" fill="#fbbf24"></path> 

<path d="M10 65 L40 35 L80 15" fill="none" stroke="#fbbf24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>
<path d="M80 15 L65 15 L80 30" fill="#fbbf24"></path>
</svg>
</div>
<div className="flex flex-col leading-none">
<span className="text-xl font-heading font-bold text-slate-900 tracking-tight">VERTEX</span>
<span className="text-[0.65rem] font-bold text-slate-500 tracking-[0.2em] uppercase">Growth Systems</span>
</div>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<a className="group relative inline-flex items-center justify-center px-6 py-2.5 text-base font-medium text-white transition-all duration-200 bg-slate-900 rounded-lg hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 shadow-lg shadow-slate-900/20 hover:shadow-slate-900/30 hover:-translate-y-0.5" href="https://wa.me/917383720402">
<span className="mr-2">Get Started</span>
<svg className="lucide lucide-message-circle group-hover:rotate-12 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>
</a>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent border-slate-100 bg-slate-50">
<li><a className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 transition-colors text-sm font-semibold text-slate-600 hover:text-slate-900" href="#">Services</a></li>
<li><a className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 transition-colors text-sm font-semibold text-slate-600 hover:text-slate-900" href="#">Process</a></li>
<li><a className="block py-2 px-3 rounded md:hover:bg-transparent md:hover:text-blue-700 md:p-0 transition-colors text-sm font-semibold text-slate-600 hover:text-slate-900" href="#">Pricing</a></li>
</ul>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-36 pb-20 relative">
<div className="max-w-5xl mx-auto px-6 text-center">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold mb-8 bg-blue-50/50 border-blue-100 text-blue-700 backdrop-blur-sm hover:bg-blue-50 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Accepting new clients in India
            </div>
<h1 className="reveal delay-100 text-6xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-8 leading-[1.05] text-slate-900">
                Growth starts with a <br/>
<span className="bg-clip-text animate-gradient text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto]">Perfect Landing Page.</span>
</h1>
<p className="reveal delay-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-slate-600 font-medium">
                We build high-converting, lightning-fast landing pages tailored for Indian businesses. Turn visitors into revenue with the Vertex System.
            </p>
<div className="reveal delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="w-full sm:w-auto px-8 py-4 font-semibold rounded-xl text-lg shadow-xl transition-all hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 group bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/20" href="https://wa.me/917383720402">
                    Start Your Project
                    <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full sm:w-auto px-8 py-4 border font-semibold rounded-xl text-lg transition-all flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50" href="https://wa.me/917383720402">
<svg className="lucide lucide-whatsapp text-green-600" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M16.9 14.3c-.3-.2-1.9-1-2.2-1.1-.3-.1-.6.1-.8.5-.3.3-1 .2-1.3-.2-.4-.4-.5-1.2-.1-1.6.4-.4.2-1-.1-1.3-.3-.3-1.8-4-1.9-4.2-.1-.2-.4-.2-.5-.2h-.5c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.1 2.7 1.3 3c.2.2 2.2 3.4 5.3 4.7 2.1.9 3 .8 4 .7.9 0 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.1-.3-.2-.6-.4z"></path></svg>
                    Contact via WhatsApp
                </a>
</div>
</div>

<div className="mt-20 max-w-6xl mx-auto px-6 reveal delay-500">
<div className="relative rounded-2xl border shadow-2xl overflow-hidden group border-slate-200 bg-white shadow-slate-200/50 hover:shadow-slate-300/50 transition-shadow duration-500">
<div className="absolute top-0 left-0 right-0 h-10 border-b flex items-center px-4 space-x-2 bg-slate-50/80 backdrop-blur-md border-slate-100 z-10">
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
<div className="w-3 h-3 rounded-full bg-slate-300"></div>
</div>

<div className="pt-10 aspect-[16/9] flex items-center justify-center relative overflow-hidden bg-slate-50">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-70"></div>

<div className="flex flex-col animate-float bg-white w-[85%] h-full border-slate-100 border rounded-t-xl mt-12 pt-8 px-8 relative shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)] items-center overflow-hidden">

<div className="w-full flex justify-between items-center mb-10 px-2 border-b border-slate-50 pb-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-600/20">
<svg className="lucide lucide-zap" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="font-bold text-xs text-slate-900 tracking-tight">ConvertPro</div>
</div>
<div className="h-6 px-3 rounded-md bg-slate-900 text-white text-[10px] font-medium flex items-center shadow-lg shadow-slate-900/10">Get Started</div>
</div>

<div className="flex flex-col items-center text-center w-full max-w-md z-10 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-100/50 rounded-full blur-3xl -z-10"></div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100 text-[9px] font-semibold mb-6 uppercase tracking-wider">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
</span>
                                Ad Optimization AI
                            </div>
<h3 className="text-3xl sm:text-4xl font-semibold text-slate-900 leading-[1.1] mb-4 tracking-tight font-heading">
                                Turn Ad Spend into 
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Pure Profit.</span>
</h3>
<p className="text-xs sm:text-sm text-slate-500 mb-8 leading-relaxed max-w-[280px] mx-auto font-medium">
                                Launch high-converting landing pages tailored for Google &amp; Facebook ads in seconds.
                            </p>
<div className="flex gap-3 w-full justify-center mb-10">
<div className="h-8 px-6 rounded-lg bg-blue-600 flex items-center justify-center text-[10px] font-semibold text-white shadow-lg shadow-blue-600/25">Start Free Trial</div>
</div>
</div>

<div className="w-full bg-white border border-slate-200 rounded-t-xl p-4 shadow-[0_-10px_30px_-10px_rgba(0,0,0,0.05)] relative overflow-hidden mt-auto">
<div className="flex items-center justify-between mb-4">
<div className="flex gap-3">
<div className="bg-slate-50 rounded px-2 py-1 border border-slate-100 flex flex-col">
<span className="text-[8px] text-slate-400 font-medium uppercase">Conv. Rate</span>
<span className="text-[10px] font-bold text-slate-900">12.4%</span>
</div>
</div>
<div className="h-5 px-2 rounded bg-green-50 border border-green-100 flex items-center gap-1 text-[9px] font-semibold text-green-700">
<svg className="lucide lucide-arrow-up" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
                                    Optimized
                                </div>
</div>

<div className="flex items-end gap-1.5 h-16 w-full border-b border-slate-100 relative">
<div className="w-full bg-blue-50 rounded-t-[2px] h-[35%]"></div>
<div className="w-full bg-blue-50 rounded-t-[2px] h-[45%]"></div>
<div className="w-full bg-blue-100 rounded-t-[2px] h-[40%]"></div>
<div className="w-full bg-blue-100 rounded-t-[2px] h-[60%]"></div>
<div className="w-full bg-blue-200 rounded-t-[2px] h-[55%]"></div>
<div className="w-full bg-blue-300 rounded-t-[2px] h-[75%]"></div>
<div className="w-full bg-blue-500 rounded-t-[2px] h-[85%] relative group shadow-lg shadow-blue-500/20">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[8px] py-0.5 px-1.5 rounded opacity-100 whitespace-nowrap font-medium">Record ROI</div>
</div>
<div className="w-full bg-blue-400 rounded-t-[2px] h-[70%]"></div>
</div>
</div>

<div className="absolute -right-14 top-32 p-3 rounded-xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] border w-44 animate-float bg-white border-slate-100 z-20" style={{animationDelay: '1s'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 border border-green-100 flex items-center justify-center">
<svg className="lucide lucide-trending-up" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">ROAS</div>
<div className="text-sm font-bold text-slate-900">+450%</div>
</div>
</div>
</div>
<div className="absolute -left-10 bottom-24 p-3 rounded-xl shadow-[0_20px_40px_-12px_rgba(0,0,0,0.12)] border w-40 animate-float bg-white border-slate-100 z-20" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center">
<svg className="lucide lucide-users" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<div>
<div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider">Leads</div>
<div className="text-sm font-bold text-slate-900">2,845</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20 reveal">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 font-heading">Designed for Growth</h2>
<p className="text-xl text-slate-500 leading-relaxed">We don't just design pages; we engineer systems that capture leads and drive sales for your business.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">

<div className="group p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-slate-200/40 reveal delay-100 hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-blue-100 text-blue-600 shadow-sm">
<svg className="lucide lucide-zap w-7 h-7 stroke-[1.5]" data-lucide="zap" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-2xl font-bold mb-3 tracking-tight text-slate-900 font-heading">Blazing Fast Speed</h3>
<p className="text-base text-slate-500 leading-relaxed">Optimized code ensuring your landing page loads instantly, reducing bounce rates effectively.</p>
</div>

<div className="group p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-slate-200/40 reveal delay-200 hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-yellow-100 text-yellow-600 shadow-sm">
<svg className="lucide lucide-smartphone w-7 h-7 stroke-[1.5]" data-lucide="smartphone" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="text-2xl font-bold mb-3 tracking-tight text-slate-900 font-heading">Mobile Optimized</h3>
<p className="text-base text-slate-500 leading-relaxed">Perfectly responsive designs that look stunning on every device, from mobile phones to desktops.</p>
</div>

<div className="group p-8 rounded-2xl border hover:shadow-xl transition-all duration-300 border-slate-100 bg-slate-50/50 hover:bg-white hover:border-slate-200 hover:shadow-slate-200/40 reveal delay-300 hover:-translate-y-1">
<div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-indigo-100 text-indigo-600 shadow-sm">
<svg className="lucide lucide-bar-chart-3 w-7 h-7 stroke-[1.5]" data-lucide="bar-chart-3" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-2xl font-bold mb-3 tracking-tight text-slate-900 font-heading">Conversion Focused</h3>
<p className="text-base text-slate-500 leading-relaxed">Strategic layouts and CTAs placed scientifically to maximize lead generation and sales.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 font-heading">Premium quality, <br/>accessible pricing.</h2>
<p className="text-xl text-slate-500 leading-relaxed mb-8">
                        Get a world-class landing page designed to convert. No hidden fees, no complicated contracts. Just results.
                    </p>
<ul className="space-y-5 mb-10">
<li className="flex items-center gap-3 text-lg text-slate-700">
<svg className="lucide lucide-check-circle-2 w-6 h-6 stroke-[2] text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium">Custom Design (No Templates)</span>
</li>
<li className="flex items-center gap-3 text-lg text-slate-700">
<svg className="lucide lucide-check-circle-2 w-6 h-6 stroke-[2] text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium">Copywriting Assistance Included</span>
</li>
<li className="flex items-center gap-3 text-lg text-slate-700">
<svg className="lucide lucide-check-circle-2 w-6 h-6 stroke-[2] text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium">Integration with Email/CRM</span>
</li>
<li className="flex items-center gap-3 text-lg text-slate-700">
<svg className="lucide lucide-check-circle-2 w-6 h-6 stroke-[2] text-blue-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="font-medium">2 Rounds of Revisions</span>
</li>
</ul>
</div>
<div className="relative reveal delay-200">
<div className="absolute inset-0 bg-gradient-to-tr rounded-3xl blur-2xl opacity-60 from-blue-200 to-yellow-200 animate-pulse"></div>
<div className="relative rounded-3xl p-8 md:p-10 border shadow-2xl bg-white border-slate-100 shadow-slate-200/50 hover:shadow-slate-300/50 transition-shadow">
<div className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 bg-blue-50 text-blue-700 border border-blue-100">
                            Startup Special
                        </div>
<div className="flex items-baseline gap-2 mb-2">
<span className="text-6xl font-bold tracking-tight text-slate-900 font-heading">₹5,000</span>
<span className="text-xl text-slate-500 font-medium">/project</span>
</div>
<p className="text-lg text-slate-500 mb-8 pb-8 border-b border-slate-100">
                            Everything you need to launch your campaign and start collecting leads today.
                        </p>
<a className="w-full py-4 font-bold rounded-xl text-lg shadow-lg transition-all flex items-center justify-center gap-2 group bg-slate-900 hover:bg-slate-800 text-white shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-1" href="https://wa.me/917383720402">
                            Claim Offer
                            <svg className="lucide lucide-arrow-right w-5 h-5 group-hover:translate-x-1 transition-transform stroke-[2]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<p className="text-center text-xs mt-4 text-slate-400 font-medium">Limited spots available for this month.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t py-12 bg-white border-slate-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="relative w-8 h-8 flex-shrink-0">
<svg className="w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" viewbox="0 0 100 100">
<path d="M10 90 L10 50 L30 40 L30 90" fill="#0f172a"></path>
<path d="M40 90 L40 30 L60 20 L60 90" fill="#1e40af"></path>
<path d="M70 90 L70 40 L90 90" fill="#fbbf24"></path>
<path d="M10 65 L40 35 L80 15" fill="none" stroke="#fbbf24" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8"></path>
<path d="M80 15 L65 15 L80 30" fill="#fbbf24"></path>
</svg>
</div>
<span className="font-bold tracking-tight text-lg text-slate-900 font-heading">Vertex Growth Systems</span>
</div>
<div className="text-slate-500 text-sm font-medium">
                © 2023 Vertex Growth Systems. India.
            </div>
<div className="flex gap-6">
<a className="transition-colors text-slate-400 hover:text-blue-500" href="#"><svg className="lucide lucide-twitter" data-lucide="twitter" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="transition-colors text-slate-400 hover:text-blue-700" href="#"><svg className="lucide lucide-linkedin" data-lucide="linkedin" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="transition-colors text-slate-400 hover:text-pink-600" href="#"><svg className="lucide lucide-instagram" data-lucide="instagram" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
</footer>


    </>
  );
}
