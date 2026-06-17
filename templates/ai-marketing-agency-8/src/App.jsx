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
      

<div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 animate-fade-up">
<nav className="glass-nav border border-gray-200 rounded-full pl-6 pr-2 py-2 flex items-center gap-8 shadow-sm hover:shadow-lg hover:shadow-rose-500/5 transition-all duration-300">
<a className="group flex items-center gap-2 text-sm text-gray-900 hover:text-rose-600 transition-colors" href="#">
<span className="font-instrument text-2xl tracking-tight font-serif italic font-medium">Vistora.</span>
</a>
<div className="hidden md:flex items-center gap-6 text-sm font-montserrat font-medium text-gray-500">
<a className="hover:text-rose-600 transition-colors" href="#services">Services</a>
<a className="hover:text-rose-600 transition-colors" href="#work">Case Studies</a>
<a className="hover:text-rose-600 transition-colors" href="#about">Agency</a>
</div>
<div className="h-4 w-px bg-gray-200 hidden md:block"></div>
<a className="group bg-gray-900 text-white text-sm px-5 py-2.5 rounded-full hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/30 transition-all duration-300 flex items-center gap-2 font-montserrat font-medium" href="#contact">
                Book Strategy
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</nav>
</div>

<main className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">

<div className="bg-white rounded-[3rem] p-10 md:p-14 lg:p-16 shadow-sm border border-gray-100 relative overflow-hidden group transition-shadow duration-700">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

<div className="lg:col-span-7 flex flex-col justify-center">

<div className="animate-fade-up delay-100 w-fit inline-flex items-center gap-2.5 bg-white/80 backdrop-blur border border-gray-200 text-gray-600 px-4 py-1.5 rounded-full text-xs font-montserrat font-semibold mb-8 shadow-sm hover:border-rose-200 transition-colors">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
                        ACCEPTING NEW CLIENTS
                    </div>

<h1 className="animate-fade-up delay-200 text-6xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight mb-8 text-gray-900 font-medium">
                        Scaling <span className="italic text-gray-400">Revenue</span> <br/>
                        through <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-500">Intelligent</span> <br/>
                        Marketing.
                    </h1>

<p className="animate-fade-up delay-300 text-lg md:text-xl text-gray-500 leading-relaxed max-w-lg mb-10 font-montserrat font-medium">
                        We blend creative strategy with <span className="text-gray-900 font-semibold">AI Automation</span> to drive predictable growth. The modern agency for ambitious brands.
                    </p>

<div className="animate-fade-up delay-500 flex flex-wrap gap-4 items-center">
<a className="bg-gray-900 text-white pl-8 pr-6 py-4 rounded-full text-base hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-600/20 transition-all duration-300 flex items-center gap-3 font-montserrat font-medium group/btn" href="#contact">
                            Get an Audit
                            <div className="bg-white/20 rounded-full p-1 group-hover/btn:bg-white/30 transition-colors">
<svg className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</div>
</a>
<a className="text-gray-600 px-6 py-4 rounded-full text-base hover:text-gray-900 transition-all duration-300 font-montserrat font-medium flex items-center gap-2 group/link" href="#work">
                            View Case Studies
                            <svg className="w-3 h-3 text-gray-400 group-hover/link:text-gray-900 transition-colors" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="m6 9 6 6 6-6"></path>
</svg>
</a>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] lg:h-[600px] w-full animate-slide-in delay-300">

<div className="absolute top-10 right-10 w-full h-full bg-gray-100 rounded-[2rem] -rotate-3 z-0"></div>
<div className="relative h-full w-full bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 z-10 group/image">
<img alt="Team Strategy" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-sm border border-gray-100/50">
<div className="flex justify-between items-center mb-3">
<span className="text-xs font-bold font-montserrat tracking-wide text-gray-400 uppercase">Average Results</span>
<svg className="text-rose-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
<svg className="text-gray-900" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect>
</svg>
</div>
<div>
<p className="text-sm font-semibold text-gray-900 font-montserrat">+240% ROI Increase</p>
<p className="text-xs text-gray-500 font-montserrat">Across client portfolios Q1</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full py-12 mt-8 overflow-hidden marquee-mask relative group">
<div className="flex w-[200%] animate-infinite-scroll hover:[animation-play-state:paused]">

<div className="flex items-center justify-around w-1/2 gap-16 px-8">

<div className="flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-colors duration-300">
<svg className="w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="text-lg font-montserrat font-semibold">Analytics</span>
</div>

<div className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-colors duration-300">
<svg className="w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-lg font-montserrat font-semibold">Google Ads</span>
</div>

<div className="flex items-center gap-3 text-gray-400 hover:text-blue-600 transition-colors duration-300">
<svg className="w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
<span className="text-lg font-montserrat font-semibold">Meta</span>
</div>

<div className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors duration-300">
<svg className="w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M19 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M5 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path></svg>
<span className="text-lg font-montserrat font-semibold">HubSpot</span>
</div>

<div className="flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-colors duration-300">
<svg className="w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path></svg>
<span className="text-lg font-montserrat font-semibold">OpenAI</span>
</div>

<div className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors duration-300">
<svg className="w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
<span className="text-lg font-montserrat font-semibold">Shopify</span>
</div>
</div>

<div className="flex items-center justify-around w-1/2 gap-16 px-8">

<div className="flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-colors duration-300">
<svg className="w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18"></path><path d="m19 9-5 5-4-4-3 3"></path></svg>
<span className="text-lg font-montserrat font-semibold">Analytics</span>
</div>

<div className="flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-colors duration-300">
<svg className="w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-lg font-montserrat font-semibold">Google Ads</span>
</div>

<div className="flex items-center gap-3 text-gray-400 hover:text-blue-600 transition-colors duration-300">
<svg className="w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
<span className="text-lg font-montserrat font-semibold">Meta</span>
</div>

<div className="flex items-center gap-3 text-gray-400 hover:text-orange-500 transition-colors duration-300">
<svg className="w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M19 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path><path d="M5 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path></svg>
<span className="text-lg font-montserrat font-semibold">HubSpot</span>
</div>

<div className="flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-colors duration-300">
<svg className="w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path></svg>
<span className="text-lg font-montserrat font-semibold">OpenAI</span>
</div>

<div className="flex items-center gap-3 text-gray-400 hover:text-green-500 transition-colors duration-300">
<svg className="w-8 h-8" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
<span className="text-lg font-montserrat font-semibold">Shopify</span>
</div>
</div>
</div>
</div>

<div className="py-24" id="work">
<h2 className="text-4xl md:text-5xl text-center mb-16 tracking-tight text-gray-900 font-montserrat font-semibold">
                Client Success Stories
            </h2>
<div className="flex flex-col gap-6 max-w-4xl mx-auto relative">

<div className="group sticky top-24 bg-white hover:bg-gradient-to-br hover:from-white hover:to-rose-50 rounded-3xl p-8 md:p-12 border border-gray-100 hover:border-rose-200 shadow-sm hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
<div className="flex justify-between items-start text-sm md:text-base text-gray-500 mb-16">
<span className="font-montserrat font-medium bg-gray-100 group-hover:bg-rose-100 group-hover:text-rose-600 px-3 py-1 rounded-full transition-colors">
                            SaaS
                        </span>
<span className="font-montserrat font-medium flex items-center gap-1 group-hover:text-rose-600 transition-colors">
                            Growth &amp; Strategy
                        </span>
</div>
<div className="flex justify-between items-end">
<div className="max-w-xl">
<h3 className="text-3xl md:text-4xl text-gray-900 leading-tight mb-6 font-montserrat font-semibold group-hover:text-rose-600 transition-colors">
                                TechFlow – 300% ARR Growth
                            </h3>
<p className="text-gray-600 mb-8 font-montserrat font-medium leading-relaxed">
                                Implemented a full-funnel marketing strategy and automated lead nurturing system. We reduced CAC by 40% while tripling annual recurring revenue within 12 months.
                            </p>
<div className="flex gap-12 text-gray-700">
<div className="group-hover:translate-x-2 transition-transform duration-300">
<div className="text-lg font-montserrat font-semibold text-rose-500">
                                        +300%
                                    </div>
<div className="text-sm text-gray-500 mt-1 font-montserrat font-medium">
                                        Revenue Growth
                                    </div>
</div>
<div className="group-hover:translate-x-2 transition-transform duration-300 delay-100">
<div className="text-lg font-montserrat font-semibold text-rose-500">
                                        -40%
                                    </div>
<div className="text-sm text-gray-500 mt-1 font-montserrat font-medium">
                                        Acquisition Cost
                                    </div>
</div>
</div>
</div>
<div className="bg-gray-50 p-4 rounded-full group-hover:bg-rose-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-sm">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
</div>
</div>

<div className="group sticky top-28 bg-white hover:bg-gradient-to-br hover:from-white hover:to-rose-50 rounded-3xl p-8 md:p-12 border border-gray-100 hover:border-rose-200 shadow-sm hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
<div className="flex justify-between items-start text-sm md:text-base text-gray-500 mb-16">
<span className="font-montserrat font-medium bg-gray-100 group-hover:bg-rose-100 group-hover:text-rose-600 px-3 py-1 rounded-full transition-colors">
                            E-Commerce
                        </span>
<span className="font-montserrat font-medium flex items-center gap-1 group-hover:text-rose-600 transition-colors">
                            AI Support Agents
                        </span>
</div>
<div className="flex justify-between items-end">
<div className="max-w-xl">
<h3 className="text-3xl md:text-4xl text-gray-900 leading-tight mb-6 font-montserrat font-semibold group-hover:text-rose-600 transition-colors">
                                LuxeRetail – 24/7 Automation
                            </h3>
<p className="text-gray-600 mb-8 font-montserrat font-medium leading-relaxed">
                                Deployed intelligent AI voice and chat agents to automate customer service. Reduced response time to seconds and increased customer satisfaction scores significantly.
                            </p>
<div className="flex gap-12 text-gray-700">
<div className="group-hover:translate-x-2 transition-transform duration-300">
<div className="text-lg font-montserrat font-semibold text-rose-500">
                                        Zero
                                    </div>
<div className="text-sm text-gray-500 mt-1 font-montserrat font-medium">
                                        Wait Time
                                    </div>
</div>
<div className="group-hover:translate-x-2 transition-transform duration-300 delay-100">
<div className="text-lg font-montserrat font-semibold text-rose-500">
                                        24/7
                                    </div>
<div className="text-sm text-gray-500 mt-1 font-montserrat font-medium">
                                        Availability
                                    </div>
</div>
</div>
</div>
<div className="bg-gray-50 p-4 rounded-full group-hover:bg-rose-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-sm">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
</div>
</div>

<div className="group sticky top-32 bg-white hover:bg-gradient-to-br hover:from-white hover:to-rose-50 rounded-3xl p-8 md:p-12 border border-gray-100 hover:border-rose-200 shadow-sm hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
<div className="flex justify-between items-start text-sm md:text-base text-gray-500 mb-16">
<span className="font-montserrat font-medium bg-gray-100 group-hover:bg-rose-100 group-hover:text-rose-600 px-3 py-1 rounded-full transition-colors">
                            FinTech
                        </span>
<span className="font-montserrat font-medium flex items-center gap-1 group-hover:text-rose-600 transition-colors">
                            Brand Rebrand
                        </span>
</div>
<div className="flex justify-between items-end">
<div className="max-w-xl">
<h3 className="text-3xl md:text-4xl text-gray-900 leading-tight mb-6 font-montserrat font-semibold group-hover:text-rose-600 transition-colors">
                                Global Finance Identity
                            </h3>
<p className="text-gray-600 mb-8 font-montserrat font-medium leading-relaxed">
                                Complete brand overhaul and digital presence restructuring. We established a data-backed brand voice that resonates with high-net-worth individuals.
                            </p>
<div className="flex gap-12 text-gray-700">
<div className="group-hover:translate-x-2 transition-transform duration-300">
<div className="text-lg font-montserrat font-semibold text-rose-500">
                                        Modern
                                    </div>
<div className="text-sm text-gray-500 mt-1 font-montserrat font-medium">
                                        Visual Identity
                                    </div>
</div>
<div className="group-hover:translate-x-2 transition-transform duration-300 delay-100">
<div className="text-lg font-montserrat font-semibold text-rose-500">
                                        High
                                    </div>
<div className="text-sm text-gray-500 mt-1 font-montserrat font-medium">
                                        Trust Score
                                    </div>
</div>
</div>
</div>
<div className="bg-gray-50 p-4 rounded-full group-hover:bg-rose-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-sm">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
</div>
</div>
</div>
</div>

<div className="py-24 grid lg:grid-cols-2 gap-20 items-center" id="about">

<div className="">
<h2 className="text-4xl md:text-5xl mb-12 tracking-tight text-gray-900 font-montserrat font-semibold">
                    The Vistora Difference
                </h2>
<div className="space-y-8 text-xl text-gray-600 font-light leading-relaxed">
<p className="font-montserrat font-medium hover:text-gray-900 transition-colors">
                        We are <span className="text-gray-900 font-bold">Vistora</span>, a new breed of marketing agency. We don't just run ads; we engineer <span className="text-gray-900 border-b-2 border-rose-200 hover:border-rose-500 transition-colors font-montserrat font-medium">Growth Ecosystems</span>.
                    </p>
<p className="font-montserrat font-medium hover:text-gray-900 transition-colors">
                        By bridging the gap between creative storytelling and hard data analytics, we unlock potential that traditional agencies miss. We specialize in <span className="text-rose-600 font-semibold">AI Integration</span> and performance infrastructure.
                    </p>
</div>
<button className="group mt-12 bg-white border border-gray-200 text-gray-900 px-6 py-3 rounded-full text-base hover:border-rose-600 hover:text-rose-600 transition-all duration-300 flex items-center gap-2 font-montserrat font-medium shadow-sm hover:shadow-lg hover:shadow-rose-500/20">
                    Meet the Team
                    <svg className="w-4 h-4 group-hover:scale-125 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
</svg>
</button>
</div>

<div className="relative h-[600px] flex items-center justify-center group/polaroid">

<div className="absolute inset-0 bg-gradient-to-tr from-rose-100/50 to-transparent rounded-full filter blur-3xl opacity-50 animate-pulse"></div>

<div className="absolute top-10 left-10 w-72 bg-white p-4 pb-12 shadow-xl rotate-[-6deg] z-10 rounded-sm transform transition-all duration-500 hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-2xl hover:shadow-rose-500/20">
<div className="w-full h-80 bg-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Strategy Session" className="w-full h-full object-cover mix-blend-multiply hover:mix-blend-normal transition-all" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-800 shadow-md border-2 border-white"></div>
</div>

<div className="absolute top-24 right-4 w-72 bg-white p-4 pb-12 shadow-xl rotate-[6deg] z-20 rounded-sm transform transition-all duration-500 hover:rotate-0 hover:scale-110 hover:z-30 hover:shadow-2xl hover:shadow-rose-500/20">
<div className="w-full h-80 bg-gray-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Team" className="w-full h-full object-cover mix-blend-multiply hover:mix-blend-normal transition-all" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-rose-800 shadow-md border-2 border-white"></div>
</div>
</div>
</div>

<div className="py-24 border-t border-gray-200" id="services">
<h2 className="text-4xl md:text-5xl text-center mb-12 tracking-tight text-gray-900 font-montserrat font-semibold">
                How We Help You Win
            </h2>

<div className="flex justify-center gap-3 mb-16 flex-wrap">
<button className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm flex items-center gap-2 font-montserrat font-medium shadow-md hover:bg-rose-600 hover:shadow-rose-600/30 transition-all duration-300 transform hover:-translate-y-1">
                    All Solutions
                </button>
<button className="group bg-white border border-gray-200 text-gray-600 px-5 py-2.5 rounded-full text-sm transition-all hover:border-rose-500 hover:text-rose-600 font-montserrat font-medium">
                    Strategy
                </button>
<button className="group bg-white border border-gray-200 text-gray-600 px-5 py-2.5 rounded-full text-sm transition-all hover:border-rose-500 hover:text-rose-600 font-montserrat font-medium">
                    Automation
                </button>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 transform hover:-translate-y-1">
<div className="mb-6 inline-block p-4 rounded-2xl bg-gray-50 group-hover:bg-rose-100 transition-colors duration-500">
<svg className="w-8 h-8 text-gray-900 group-hover:text-rose-600 transition-colors duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-2xl mb-4 text-gray-900 font-montserrat font-semibold group-hover:text-rose-600 transition-colors">
                        Marketing <span className="text-gray-400 group-hover:text-rose-300 transition-colors">Infrastructure</span>
</h3>
<p className="text-gray-500 text-base leading-relaxed mb-8 h-auto min-h-[5rem] font-montserrat font-medium">
                        We build robust digital foundations using Next.js and Headless CMS. Speed, SEO, and conversion rate optimization (CRO) built-in.
                    </p>
<a className="w-full flex justify-between items-center bg-gray-50 text-gray-900 py-4 px-6 rounded-xl text-sm font-bold hover:bg-rose-600 hover:text-white transition-all duration-300 font-montserrat group/link" href="#contact">
                        Build Scale
                        <svg className="w-4 h-4 group-hover/link:rotate-45 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>

<div className="group bg-white rounded-3xl p-10 shadow-sm border border-gray-100 hover:border-rose-200 hover:shadow-2xl hover:shadow-rose-500/10 transition-all duration-500 transform hover:-translate-y-1">
<div className="mb-6 inline-block p-4 rounded-2xl bg-gray-50 group-hover:bg-rose-100 transition-colors duration-500">
<svg className="w-8 h-8 text-gray-900 group-hover:text-rose-600 transition-colors duration-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<h3 className="text-2xl mb-4 text-gray-900 font-montserrat font-semibold group-hover:text-rose-600 transition-colors">
                        AI Process <span className="text-gray-400 group-hover:text-rose-300 transition-colors">Automation</span>
</h3>
<p className="text-gray-500 text-base leading-relaxed mb-8 h-auto min-h-[5rem] font-montserrat font-medium">
                        Stop doing busy work. We automate your CRM data entry, lead scoring, and email outreach using Python and Vector Databases.
                    </p>
<a className="w-full flex justify-between items-center bg-gray-50 text-gray-900 py-4 px-6 rounded-xl text-sm font-bold hover:bg-rose-600 hover:text-white transition-all duration-300 font-montserrat group/link" href="#contact">
                        Automate Now
                        <svg className="w-4 h-4 group-hover/link:rotate-45 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</a>
</div>
</div>
</div>

<div className="py-16 text-center max-w-2xl mx-auto" id="contact">
<h2 className="text-3xl mb-6 tracking-tight text-gray-900 font-montserrat font-semibold">
                Ready to Dominate Your Market?
            </h2>
<p className="text-gray-500 text-lg mb-8 font-montserrat font-medium">
                Whether you need a complete rebrand or an automated sales engine, let's discuss your roadmap.
            </p>
<a className="group inline-flex items-center gap-2 text-gray-900 hover:text-rose-600 font-semibold text-xl transition-colors relative" href="mailto:hello@vistora.com">
<span className="relative z-10">hello@vistora.com</span>
<span className="absolute bottom-0 left-0 w-full h-1 bg-rose-200 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
<svg className="w-5 h-5 group-hover:animate-bounce text-rose-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
<rect height="16" rx="2" width="20" x="2" y="4"></rect>
</svg>
</a>
</div>
</main>

<footer className="text-center py-8 text-gray-400 text-sm font-montserrat font-medium border-t border-gray-100">
        © 2025 Vistora Solutions. Crafted with <span className="text-rose-500">♥</span> for ambitious brands.
    </footer>


    </>
  );
}
