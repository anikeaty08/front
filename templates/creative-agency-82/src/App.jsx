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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
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
      

<nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 text-white">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-base font-semibold tracking-wide uppercase" href="#">Matteo<span className="text-slate-400">Montanari</span></a>
<div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#">curriculum vitae</a>
<a className="hover:text-white transition-colors" href="#">latest works</a>
<a className="hover:text-white transition-colors" href="#">customers</a>
<a className="hover:text-white transition-colors" href="#">testimonials</a>
<a className="hover:text-white transition-colors" href="#">contacts</a>
</div>

<button className="md:hidden text-slate-300 hover:text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</nav>

<section className="bg-slate-950 pt-32 pb-24 text-white relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-3xl mx-auto mb-20">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
                    Some of the websites built by customers
                </h1>
<p className="text-lg md:text-xl text-slate-400">
                    with my <span className="text-white font-medium">ConcreteCMS</span> plugins
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col h-[400px]">
<img alt="CNC Domes" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
<div className="relative flex-1 flex flex-col justify-end p-8">
<div className="mb-4">
<p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wider">© built with theme <a className="text-slate-200 hover:text-white underline decoration-slate-600 underline-offset-4 transition-colors" href="#">Résumé Pro</a></p>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-2">CNC Domes</h3>
<p className="text-base text-slate-300">Global Delivery Domes</p>
</div>
<div>
<a className="inline-flex items-center justify-center gap-2 bg-white text-slate-950 px-5 py-2.5 rounded-full text-base font-medium hover:bg-slate-200 transition-colors w-max" href="#">
                                See Website <i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col h-[400px]">
<img alt="Jake Read" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
<div className="relative flex-1 flex flex-col justify-end p-8">
<div className="mb-4">
<p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wider">© built with theme <a className="text-slate-200 hover:text-white underline decoration-slate-600 underline-offset-4 transition-colors" href="#">Résumé Pro</a></p>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-2">Jake Read</h3>
<p className="text-base text-slate-300">Software Engineering Student</p>
</div>
<div>
<a className="inline-flex items-center justify-center gap-2 bg-white text-slate-950 px-5 py-2.5 rounded-full text-base font-medium hover:bg-slate-200 transition-colors w-max" href="#">
                                See Website <i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col h-[400px]">
<img alt="Alastair Mitton" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
<div className="relative flex-1 flex flex-col justify-end p-8">
<div className="mb-4">
<p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wider">© built with theme <a className="text-slate-200 hover:text-white underline decoration-slate-600 underline-offset-4 transition-colors" href="#">Résumé Pro</a></p>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-2">Alastair Mitton</h3>
<p className="text-base text-slate-300">Digital Arts</p>
</div>
<div>
<a className="inline-flex items-center justify-center gap-2 bg-white text-slate-950 px-5 py-2.5 rounded-full text-base font-medium hover:bg-slate-200 transition-colors w-max" href="#">
                                See Website <i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col h-[400px]">
<img alt="Next-Generation Keto Tech" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
<div className="relative flex-1 flex flex-col justify-end p-8">
<div className="mb-4">
<p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wider">© built with theme <a className="text-slate-200 hover:text-white underline decoration-slate-600 underline-offset-4 transition-colors" href="#">Startup Pro</a></p>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-2">Next-Gen Keto</h3>
<p className="text-base text-slate-300">Auto-balancing for medicalized treatment</p>
</div>
<div>
<a className="inline-flex items-center justify-center gap-2 bg-white text-slate-950 px-5 py-2.5 rounded-full text-base font-medium hover:bg-slate-200 transition-colors w-max" href="#">
                                See Website <i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col h-[400px]">
<img alt="Rog Percussion" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
<div className="relative flex-1 flex flex-col justify-end p-8">
<div className="mb-4">
<p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wider">© built with theme <a className="text-slate-200 hover:text-white underline decoration-slate-600 underline-offset-4 transition-colors" href="#">Startup Pro</a></p>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-2">Rog Percussion</h3>
<p className="text-base text-slate-300">High-quality percussion sticks</p>
</div>
<div>
<a className="inline-flex items-center justify-center gap-2 bg-white text-slate-950 px-5 py-2.5 rounded-full text-base font-medium hover:bg-slate-200 transition-colors w-max" href="#">
                                See Website <i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col h-[400px]">
<img alt="Karsen Nielsen Photography" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 ease-in-out" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
<div className="relative flex-1 flex flex-col justify-end p-8">
<div className="mb-4">
<p className="text-xs text-slate-400 mb-2 font-medium uppercase tracking-wider">© built with theme <a className="text-slate-200 hover:text-white underline decoration-slate-600 underline-offset-4 transition-colors" href="#">Startup Pro</a></p>
<h3 className="text-3xl font-semibold tracking-tight text-white mb-2">Karsen Nielsen</h3>
<p className="text-base text-slate-300">Real Estate &amp; Property Marketing</p>
</div>
<div>
<a className="inline-flex items-center justify-center gap-2 bg-white text-slate-950 px-5 py-2.5 rounded-full text-base font-medium hover:bg-slate-200 transition-colors w-max" href="#">
                                See Website <i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>

<div className="mt-16 flex justify-center">
<a className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-slate-700 bg-slate-900 text-white font-medium text-base hover:bg-slate-800 transition-colors" href="#">
                    my ConcreteCMS profile
                    <i className="w-4 h-4 text-slate-400" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center text-slate-950 mb-16">
                Testimonials
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex items-center gap-4 mb-6">
<img alt="Ischlosberg497" className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<p className="text-base font-medium text-slate-950">Ischlosberg497</p>
<div className="flex gap-0.5 text-amber-400 mt-1">
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
<h4 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-950 mb-3">"Great Support!"</h4>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                            Responded immediately to a problem. Super supportive and dedicated to making sure I was happy with the result. <span className="font-medium text-slate-950">Highly recommend!</span>
</p>
</div>
<p className="text-sm text-slate-400">Review given to <a className="text-slate-600 hover:text-slate-950 underline decoration-slate-300 underline-offset-4" href="#">theme Personal Pro</a></p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex items-center gap-4 mb-6">
<img alt="Sergiolm" className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<p className="text-base font-medium text-slate-950">Sergiolm</p>
<div className="flex gap-0.5 text-amber-400 mt-1">
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 text-slate-300" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
<h4 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-950 mb-3">"Great theme &amp; technical support"</h4>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
<span className="font-medium text-slate-950">Great technical support</span> for any doubt. Theme works well for a landing page.
                        </p>
</div>
<p className="text-sm text-slate-400">Review given to <a className="text-slate-600 hover:text-slate-950 underline decoration-slate-300 underline-offset-4" href="#">theme Résumé Pro</a></p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex items-center gap-4 mb-6">
<img alt="Knp" className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm grayscale" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<p className="text-base font-medium text-slate-950">Knp</p>
<div className="flex gap-0.5 text-amber-400 mt-1">
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
<h4 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-950 mb-3">"Beautiful theme, excellent support"</h4>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                            This theme is beautifully made and is very customizable. The author was very helpful with support questions. <span className="font-medium text-slate-950">Highly recommended!</span>
</p>
</div>
<p className="text-sm text-slate-400">Review given to <a className="text-slate-600 hover:text-slate-950 underline decoration-slate-300 underline-offset-4" href="#">theme Résumé</a></p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold text-lg ring-2 ring-white shadow-sm">IT</div>
<div>
<p className="text-base font-medium text-slate-950">IgnazSchels</p>
<div className="flex gap-0.5 text-amber-400 mt-1">
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
<h4 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-950 mb-3">"Modern, easy and user friendly"</h4>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                            It's very <span className="font-medium text-slate-950">easy to create</span> a modern, <span className="font-medium text-slate-950">beautiful website</span> with this theme. The <span className="font-medium text-slate-950">support is great</span>, too. I received answers to my questions within a couple hours.
                        </p>
</div>
<p className="text-sm text-slate-400">Review given to <a className="text-slate-600 hover:text-slate-950 underline decoration-slate-300 underline-offset-4" href="#">theme Startup Pro</a></p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-lg ring-2 ring-white shadow-sm">B</div>
<div>
<p className="text-base font-medium text-slate-950">Böhme</p>
<div className="flex gap-0.5 text-amber-400 mt-1">
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
<h4 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-950 mb-3">"Fast and spot on support"</h4>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                            This is an <span className="font-medium text-slate-950">easy set up</span> and <span className="font-medium text-slate-950">great looking theme</span>. If you run into troubles, you get fast and efficient support.
                        </p>
</div>
<p className="text-sm text-slate-400">Review given to <a className="text-slate-600 hover:text-slate-950 underline decoration-slate-300 underline-offset-4" href="#">theme Startup Pro</a></p>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
<div>
<div className="flex items-center gap-4 mb-6">
<img alt="FreeRangeCreative" className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
<div>
<p className="text-base font-medium text-slate-950">FreeRangeCreative</p>
<div className="flex gap-0.5 text-amber-400 mt-1">
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-4 h-4 fill-amber-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
</div>
</div>
<h4 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-950 mb-3">"Very good flexible theme"</h4>
<p className="text-lg text-slate-600 leading-relaxed mb-6">
                            This <span className="font-medium text-slate-950">theme is flexible</span> and easy to customise. I think it fits well a lot of people with different needs. <span className="font-medium text-slate-950">Recommended!</span>
</p>
</div>
<p className="text-sm text-slate-400">Review given to <a className="text-slate-600 hover:text-slate-950 underline decoration-slate-300 underline-offset-4" href="#">theme Startup Pro</a></p>
</div>
</div>

<div className="mt-16 flex justify-center">
<a className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 text-white font-medium text-base hover:bg-slate-800 transition-colors shadow-sm" href="#">
                    See them All
                    <i className="w-4 h-4" data-lucide="external-link" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white border-t border-slate-900">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center mb-16">Contacts</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-6 text-slate-300">
<i className="w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-3">E-mail:</h3>
<a className="text-lg font-medium text-white hover:text-indigo-400 transition-colors underline decoration-slate-700 underline-offset-4" href="mailto:matteo@italinux.com">matteo@italinux.com</a>
</div>

<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-6 text-slate-300">
<i className="w-6 h-6" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-3">Available</h3>
<p className="text-lg font-medium mb-2">24 / 7</p>
<h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest mt-4 mb-2">Response Time:</h3>
<p className="text-base text-slate-300">max <span className="text-white font-medium">6 hours</span></p>
</div>

<div className="flex flex-col items-center">
<div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-6 text-slate-300">
<i className="w-6 h-6" data-lucide="map-pin" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-medium text-slate-400 uppercase tracking-widest mb-3">Address:</h3>
<p className="text-lg font-medium text-slate-300 leading-relaxed">
                        Rue de Tolbiac<br/>
                        75013 Paris<br/>
                        France
                    </p>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 flex justify-center gap-12 text-slate-400">
<a className="hover:text-indigo-600 transition-colors" href="#">
<i className="w-8 h-8" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
<a className="hover:text-slate-900 transition-colors" href="#">
<i className="w-8 h-8" data-lucide="github" strokeWidth="1.5"></i>
</a>
<a className="hover:text-amber-600 transition-colors" href="#">
<i className="w-8 h-8" data-lucide="hand-metal" strokeWidth="1.5"></i>
</a>
</div>
</section>

<footer className="py-12 bg-slate-950 relative overflow-hidden">

<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-900 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50 blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center relative z-10">
<a className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-slate-950 font-medium text-base hover:bg-slate-200 transition-colors mb-12 shadow-sm" href="#">
                Back to Homepage
            </a>
<div className="text-center w-full flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 font-medium">
<p>want to download this theme? <a className="text-slate-400 hover:text-white underline decoration-slate-700 underline-offset-4" href="#">download</a></p>
<p className="mt-4 md:mt-0">Graphics &amp; UI design by <a className="text-slate-400 hover:text-white underline decoration-slate-700 underline-offset-4" href="#">MCHNK</a></p>
</div>
</div>
</footer>


    </>
  );
}
