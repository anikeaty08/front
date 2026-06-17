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
      

<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-6 pointer-events-none">
<nav className="pointer-events-auto glass border border-gray-200/60 rounded-full pl-6 pr-2 py-2 flex items-center gap-10 shadow-[0_2px_10px_-2px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:border-gray-300/80">
<a className="group flex items-center gap-2" href="#">
<span className="font-serif text-2xl tracking-tight italic font-medium text-gray-900 group-hover:text-rose-600 transition-colors">Vistora.</span>
</a>
<div className="hidden md:flex items-center gap-6 text-xs font-montserrat font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#services">Services</a>
<a className="hover:text-gray-900 transition-colors" href="#work">Case Studies</a>
<a className="hover:text-gray-900 transition-colors" href="#about">Agency</a>
</div>
<div className="h-4 w-px bg-gray-200 hidden md:block"></div>
<a className="bg-gray-900 text-white text-xs px-5 py-2.5 rounded-full hover:bg-rose-600 transition-all duration-300 flex items-center gap-2 font-montserrat font-medium group" href="#contact">
                Book Strategy
                <i className="w-3 h-3 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
</nav>
</header>
<main className="max-w-7xl mx-auto pt-32 px-6 pb-24">

<section className="relative bg-white rounded-[2.5rem] p-8 md:p-16 border border-gray-200/60 shadow-[0_1px_2px_rgba(0,0,0,0.02)] overflow-hidden group">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-50"></div>
<div className="grid lg:grid-cols-12 gap-16 items-center relative z-10">

<div className="lg:col-span-7 flex flex-col justify-center">
<div className="animate-fade-up w-fit inline-flex items-center gap-2 bg-white border border-gray-200 pr-3 pl-1.5 py-1 rounded-full text-[10px] tracking-wide font-montserrat font-medium text-gray-500 shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
                        ACCEPTING NEW CLIENTS
                    </div>
<h1 className="animate-fade-up delay-100 text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tighter mb-8 text-gray-900 font-serif font-medium">
                        Scaling <span className="italic text-gray-400 font-light">Revenue</span> <br/>
                        with <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">Intelligent</span> <br/>
                        Marketing.
                    </h1>
<p className="animate-fade-up delay-200 text-lg text-gray-500 leading-relaxed max-w-lg mb-10 font-light">
                        We blend creative strategy with <span className="text-gray-900 font-medium">AI Automation</span> to drive predictable growth. The modern agency for ambitious brands.
                    </p>
<div className="animate-fade-up delay-300 flex flex-wrap gap-4 items-center">
<a className="bg-gray-900 text-white pl-6 pr-5 py-3.5 rounded-full text-sm hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-500/20 transition-all duration-300 flex items-center gap-3 font-montserrat font-medium group" href="#contact">
                            Get an Audit
                            <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
<i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</div>
</a>
<a className="text-gray-500 px-6 py-3.5 rounded-full text-sm hover:text-gray-900 transition-all duration-300 font-montserrat font-medium flex items-center gap-2 group" href="#work">
                            View Case Studies
                            <i className="w-3 h-3 text-gray-400 group-hover:text-gray-900 transition-colors" data-lucide="chevron-down"></i>
</a>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] w-full animate-fade-up delay-300">
<div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-[2rem] transform rotate-2 shadow-inner border border-gray-100"></div>
<div className="relative h-full w-full bg-gray-100 rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-200/50 border border-gray-200 z-10">
<img alt="Dashboard" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-out transform hover:scale-105" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-white/50">
<div className="flex justify-between items-center mb-3">
<span className="text-[10px] font-bold font-montserrat tracking-wider text-gray-400 uppercase">Performance</span>
<i className="w-4 h-4 text-rose-500" data-lucide="trending-up"></i>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0 text-gray-900">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<div>
<p className="text-sm font-semibold text-gray-900 font-montserrat leading-tight">+240% ROI Increase</p>
<p className="text-[11px] text-gray-400 font-montserrat mt-0.5">Across client portfolios Q1</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full py-16 marquee-mask relative">
<div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">

<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="bar-chart"></i>
<span className="text-sm font-montserrat font-medium">Analytics</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="search"></i>
<span className="text-sm font-montserrat font-medium">Google Ads</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="facebook"></i>
<span className="text-sm font-montserrat font-medium">Meta</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="share-2"></i>
<span className="text-sm font-montserrat font-medium">HubSpot</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="cpu"></i>
<span className="text-sm font-montserrat font-medium">OpenAI</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
<span className="text-sm font-montserrat font-medium">Shopify</span>
</div>
</div>

<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="bar-chart"></i>
<span className="text-sm font-montserrat font-medium">Analytics</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="search"></i>
<span className="text-sm font-montserrat font-medium">Google Ads</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="facebook"></i>
<span className="text-sm font-montserrat font-medium">Meta</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="share-2"></i>
<span className="text-sm font-montserrat font-medium">HubSpot</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="cpu"></i>
<span className="text-sm font-montserrat font-medium">OpenAI</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
<span className="text-sm font-montserrat font-medium">Shopify</span>
</div>
</div>

<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="bar-chart"></i>
<span className="text-sm font-montserrat font-medium">Analytics</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="search"></i>
<span className="text-sm font-montserrat font-medium">Google Ads</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-blue-600 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="facebook"></i>
<span className="text-sm font-montserrat font-medium">Meta</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="share-2"></i>
<span className="text-sm font-montserrat font-medium">HubSpot</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="cpu"></i>
<span className="text-sm font-montserrat font-medium">OpenAI</span>
</div>
<div className="flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors cursor-default">
<i className="w-6 h-6" data-lucide="shopping-bag"></i>
<span className="text-sm font-montserrat font-medium">Shopify</span>
</div>
</div>
</div>
</div>

<section className="py-20" id="work">
<h2 className="text-4xl md:text-5xl text-center mb-20 tracking-tight text-gray-900 font-serif font-medium">
                Client Success Stories
            </h2>
<div className="flex flex-col gap-6 max-w-4xl mx-auto relative">

<div className="group sticky top-28 bg-white rounded-3xl p-10 md:p-12 border border-gray-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer hover:-translate-y-1">
<div className="flex justify-between items-start mb-12">
<div className="flex gap-3">
<span className="text-[11px] font-montserrat font-semibold tracking-wide bg-gray-100 text-gray-600 px-3 py-1 rounded-full uppercase">SaaS</span>
<span className="text-[11px] font-montserrat font-medium text-gray-400 flex items-center gap-1 pt-1">
                                Growth &amp; Strategy
                            </span>
</div>
<div className="bg-gray-50 p-3 rounded-full group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-end">
<div>
<h3 className="text-3xl text-gray-900 leading-tight mb-4 font-serif font-medium group-hover:text-rose-600 transition-colors">
                                TechFlow – 300% ARR Growth
                            </h3>
<p className="text-gray-500 mb-8 font-light leading-relaxed text-sm">
                                Implemented a full-funnel marketing strategy and automated lead nurturing system. We reduced CAC by 40% while tripling annual recurring revenue.
                            </p>
<div className="flex gap-8 border-t border-gray-100 pt-6">
<div>
<div className="text-lg font-montserrat font-semibold text-rose-500">+300%</div>
<div className="text-[11px] text-gray-400 uppercase tracking-wide font-montserrat font-semibold mt-1">Growth</div>
</div>
<div>
<div className="text-lg font-montserrat font-semibold text-rose-500">-40%</div>
<div className="text-[11px] text-gray-400 uppercase tracking-wide font-montserrat font-semibold mt-1">CAC</div>
</div>
</div>
</div>
<div className="hidden md:block translate-y-4 group-hover:translate-y-0 transition-transform duration-500">

<div className="w-full h-32 bg-gradient-to-r from-rose-50 to-orange-50 rounded-xl flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
<i className="w-12 h-12 text-rose-200" data-lucide="bar-chart-2"></i>
</div>
</div>
</div>
</div>

<div className="group sticky top-32 bg-white rounded-3xl p-10 md:p-12 border border-gray-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer hover:-translate-y-1">
<div className="flex justify-between items-start mb-12">
<div className="flex gap-3">
<span className="text-[11px] font-montserrat font-semibold tracking-wide bg-gray-100 text-gray-600 px-3 py-1 rounded-full uppercase">E-Commerce</span>
<span className="text-[11px] font-montserrat font-medium text-gray-400 flex items-center gap-1 pt-1">
                                AI Agents
                            </span>
</div>
<div className="bg-gray-50 p-3 rounded-full group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-end">
<div>
<h3 className="text-3xl text-gray-900 leading-tight mb-4 font-serif font-medium group-hover:text-rose-600 transition-colors">
                                LuxeRetail – 24/7 Automation
                            </h3>
<p className="text-gray-500 mb-8 font-light leading-relaxed text-sm">
                                Deployed intelligent AI voice and chat agents to automate customer service. Reduced response time to seconds.
                            </p>
<div className="flex gap-8 border-t border-gray-100 pt-6">
<div>
<div className="text-lg font-montserrat font-semibold text-rose-500">0s</div>
<div className="text-[11px] text-gray-400 uppercase tracking-wide font-montserrat font-semibold mt-1">Wait Time</div>
</div>
<div>
<div className="text-lg font-montserrat font-semibold text-rose-500">24/7</div>
<div className="text-[11px] text-gray-400 uppercase tracking-wide font-montserrat font-semibold mt-1">Availability</div>
</div>
</div>
</div>
<div className="hidden md:block translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="w-full h-32 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
<i className="w-12 h-12 text-blue-200" data-lucide="bot"></i>
</div>
</div>
</div>
</div>

<div className="group sticky top-36 bg-white rounded-3xl p-10 md:p-12 border border-gray-200/60 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-pointer hover:-translate-y-1">
<div className="flex justify-between items-start mb-12">
<div className="flex gap-3">
<span className="text-[11px] font-montserrat font-semibold tracking-wide bg-gray-100 text-gray-600 px-3 py-1 rounded-full uppercase">FinTech</span>
<span className="text-[11px] font-montserrat font-medium text-gray-400 flex items-center gap-1 pt-1">
                                Rebranding
                            </span>
</div>
<div className="bg-gray-50 p-3 rounded-full group-hover:bg-rose-600 group-hover:text-white transition-all duration-300">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
</div>
<div className="grid md:grid-cols-2 gap-12 items-end">
<div>
<h3 className="text-3xl text-gray-900 leading-tight mb-4 font-serif font-medium group-hover:text-rose-600 transition-colors">
                                Global Finance Identity
                            </h3>
<p className="text-gray-500 mb-8 font-light leading-relaxed text-sm">
                                Complete brand overhaul and digital presence restructuring. We established a data-backed brand voice.
                            </p>
<div className="flex gap-8 border-t border-gray-100 pt-6">
<div>
<div className="text-lg font-montserrat font-semibold text-rose-500">New</div>
<div className="text-[11px] text-gray-400 uppercase tracking-wide font-montserrat font-semibold mt-1">Identity</div>
</div>
<div>
<div className="text-lg font-montserrat font-semibold text-rose-500">High</div>
<div className="text-[11px] text-gray-400 uppercase tracking-wide font-montserrat font-semibold mt-1">Trust</div>
</div>
</div>
</div>
<div className="hidden md:block translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="w-full h-32 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
<i className="w-12 h-12 text-emerald-200" data-lucide="shield-check"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 grid lg:grid-cols-2 gap-20 items-center" id="about">
<div className="order-2 lg:order-1">
<h2 className="text-4xl md:text-5xl mb-12 tracking-tight text-gray-900 font-serif font-medium">
                    The Vistora Difference
                </h2>
<div className="space-y-8 text-xl text-gray-500 font-light leading-relaxed">
<p>
                        We are <span className="text-gray-900 font-medium">Vistora</span>. We don't just run ads; we engineer <span className="text-gray-900 border-b border-rose-200">Growth Ecosystems</span>.
                    </p>
<p>
                        By bridging the gap between creative storytelling and hard data analytics, we unlock potential that traditional agencies miss. We specialize in <span className="text-rose-600 font-medium">AI Integration</span> and performance infrastructure.
                    </p>
</div>
<button className="group mt-12 bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-full text-sm hover:border-rose-600 hover:text-rose-600 transition-all duration-300 flex items-center gap-2 font-montserrat font-medium shadow-sm">
                    Meet the Team
                    <i className="w-4 h-4 group-hover:scale-110 transition-transform" data-lucide="users"></i>
</button>
</div>

<div className="relative h-[500px] flex items-center justify-center order-1 lg:order-2">

<div className="absolute inset-0 bg-gradient-to-tr from-rose-100/40 to-transparent rounded-full filter blur-3xl opacity-60"></div>

<div className="absolute top-10 left-10 w-64 bg-white p-3 pb-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] -rotate-3 z-10 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-500 ease-out border border-gray-100">
<div className="w-full h-64 bg-gray-100 overflow-hidden relative">
<img alt="Strategy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>

<div className="absolute top-24 right-10 w-64 bg-white p-3 pb-10 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rotate-3 z-20 hover:rotate-0 hover:z-30 hover:scale-105 transition-all duration-500 ease-out border border-gray-100">
<div className="w-full h-64 bg-gray-100 overflow-hidden relative">
<img alt="Team" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-gray-200/60" id="services">
<h2 className="text-4xl md:text-5xl text-center mb-16 tracking-tight text-gray-900 font-serif font-medium">
                How We Help You Win
            </h2>
<div className="flex justify-center gap-2 mb-16 flex-wrap">
<button className="bg-gray-900 text-white px-5 py-2 rounded-full text-xs font-montserrat font-medium shadow-md hover:bg-rose-600 transition-colors">
                    All Solutions
                </button>
<button className="bg-white border border-gray-200 text-gray-500 px-5 py-2 rounded-full text-xs transition-all hover:border-rose-200 hover:text-rose-600 font-montserrat font-medium">
                    Strategy
                </button>
<button className="bg-white border border-gray-200 text-gray-500 px-5 py-2 rounded-full text-xs transition-all hover:border-rose-200 hover:text-rose-600 font-montserrat font-medium">
                    Automation
                </button>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group bg-white rounded-3xl p-10 border border-gray-200/60 hover:border-rose-200/60 hover:shadow-[0_20px_40px_-12px_rgba(244,63,94,0.1)] transition-all duration-500">
<div className="mb-6 inline-flex p-3 rounded-xl bg-gray-50 text-gray-900 group-hover:bg-rose-50 group-hover:text-rose-600 transition-colors">
<i className="w-6 h-6" data-lucide="layers"></i>
</div>
<h3 className="text-2xl mb-3 text-gray-900 font-montserrat font-medium group-hover:text-rose-600 transition-colors">
                        Marketing Infrastructure
                    </h3>
<p className="text-gray-500 text-sm leading-relaxed mb-8 font-light min-h-[3rem]">
                        We build robust digital foundations using Headless CMS. Speed, SEO, and conversion rate optimization (CRO) built-in.
                    </p>
<a className="flex items-center text-xs font-bold text-gray-900 hover:text-rose-600 font-montserrat transition-colors group/link" href="#contact">
                        Start Building
                        <i className="w-3 h-3 ml-2 group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group bg-white rounded-3xl p-10 border border-gray-200/60 hover:border-rose-200/60 hover:shadow-[0_20px_40px_-12px_rgba(244,63,94,0.1)] transition-all duration-500">
<div className="mb-6 inline-flex p-3 rounded-xl bg-gray-50 text-gray-900 group-hover:bg-rose-50 group-hover:text-rose-600 transition-colors">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="text-2xl mb-3 text-gray-900 font-montserrat font-medium group-hover:text-rose-600 transition-colors">
                        AI Process Automation
                    </h3>
<p className="text-gray-500 text-sm leading-relaxed mb-8 font-light min-h-[3rem]">
                        Stop doing busy work. We automate your CRM data entry, lead scoring, and email outreach using Vector Databases.
                    </p>
<a className="flex items-center text-xs font-bold text-gray-900 hover:text-rose-600 font-montserrat transition-colors group/link" href="#contact">
                        Automate Now
                        <i className="w-3 h-3 ml-2 group-hover/link:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-20 text-center max-w-xl mx-auto" id="contact">
<h2 className="text-3xl mb-6 tracking-tight text-gray-900 font-serif font-medium">
                Ready to Dominate Your Market?
            </h2>
<p className="text-gray-500 text-base mb-10 font-light">
                Whether you need a complete rebrand or an automated sales engine, let's discuss your roadmap.
            </p>
<a className="group inline-flex items-center gap-3 text-gray-900 hover:text-rose-600 font-semibold text-lg transition-colors" href="mailto:hello@vistora.com">
<i className="w-5 h-5" data-lucide="mail"></i>
<span className="border-b border-gray-300 group-hover:border-rose-300 transition-colors pb-0.5">hello@vistora.com</span>
</a>
</section>
</main>

<footer className="text-center py-10 text-gray-400 text-xs font-montserrat font-medium border-t border-gray-200/60 bg-white">
<p>© 2025 Vistora Solutions. Crafted with <span className="text-rose-500">♥</span> for ambitious brands.</p>
</footer>


    </>
  );
}
