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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



(function () {

  function initUnicorn() {
    if (window.UnicornStudio && window.UnicornStudio.init) {
      if (!window.UnicornStudio.isInitialized) {
        window.UnicornStudio.init();
        window.UnicornStudio.isInitialized = true;
      }
    }
  }

  if (window.UnicornStudio && window.UnicornStudio.init) {
    initUnicorn();
    return;
  }

  if (!window.UnicornStudio) {
    window.UnicornStudio = { isInitialized:false };
  }

  if (!document.querySelector("script[data-unicorn-loader]")) {

    var s = document.createElement("script");
    s.src =
      "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";

    s.setAttribute("data-unicorn-loader","true");

    s.onload = function () {
      initUnicorn();
    };

    (document.head || document.body).appendChild(s);
  }

})();



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
      

<div className="aura-background-component fixed w-full h-screen z-10 top-0 invert-0" data-alpha-mask="80" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}><div className="unicorn-bg absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
<div className="absolute inset-0 w-full h-full opacity-60 mix-blend-screen">
<div className="absolute inset-0 w-full h-full" data-us-dpi="1.5" data-us-fps="60" data-us-lazyload="true" data-us-production="true" data-us-project="WdVna2EGJHojbGLRHA52">
</div>
</div>
</div>
</div>

<header className="sticky top-0 z-50 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-slate-200">
<div className="flex max-w-[1400px] mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex items-center gap-6">

<a className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-1.5 rounded-sm shadow-sm hover:border-slate-300 transition-colors" href="#">
<i className="w-4 h-4 text-blue-600" data-lucide="layers" strokeWidth="1.5"></i>
<span className="font-semibold text-sm tracking-tight font-sans">PETER GAIN</span>
</a>

<nav className="hidden md:flex items-center gap-2">
<a className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-1.5 rounded-sm text-xs font-medium text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors font-sans" href="#">
                        HOME <i className="w-3 h-3 text-slate-400" data-lucide="plus" strokeWidth="1.5"></i>
</a>
<a className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-1.5 rounded-sm text-xs font-medium text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors font-sans" href="#">
                        SERVICES <i className="w-3 h-3 text-slate-400" data-lucide="plus" strokeWidth="1.5"></i>
</a>
<a className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-1.5 rounded-sm text-xs font-medium text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors font-sans" href="#">
                        COMPANY <i className="w-3 h-3 text-slate-400" data-lucide="plus" strokeWidth="1.5"></i>
</a>
<a className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-1.5 rounded-sm text-xs font-medium text-slate-600 hover:text-slate-900 hover:border-slate-300 transition-colors font-sans" href="#">
                        RESOURCES <i className="w-3 h-3 text-slate-400" data-lucide="plus" strokeWidth="1.5"></i>
</a>
</nav>
</div>
<a className="flex items-center gap-2 border border-slate-200 bg-white px-3 py-1.5 rounded-sm text-xs font-medium hover:border-slate-300 transition-colors font-sans" href="#">
                CONTACT US <div className="w-4 h-4 bg-blue-600 flex items-center justify-center rounded-sm"><i className="w-3 h-3 text-white" data-lucide="arrow-right" strokeWidth="1.5"></i></div>
</a>
</div>
</header>

<section className="relative pt-24 pb-32 overflow-hidden border-b border-slate-200 bg-[linear-gradient(to_bottom,#F8FAFC_0%,#ffffff_100%)]">

<div className="[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="flex flex-col z-10 text-center max-w-[1400px] mr-auto ml-auto pr-6 pl-6 relative items-center">
<div className="border border-slate-200 bg-slate-50 text-slate-500 text-xs font-medium px-3 py-1 rounded-sm mb-8 flex items-center gap-2 shadow-sm font-sans">
        Web &amp; Lead Gen Platform
    </div>
<h1 className="md:text-7xl leading-tight text-5xl font-medium text-slate-900 tracking-tighter font-manrope max-w-4xl mb-6">Nowoczesne strony i sklepy internetowe dla firm</h1>
<p className="text-lg text-slate-600 font-sans max-w-2xl mr-auto mb-12 ml-auto">Profesjonalna strona to więcej niż wysoka pozycja w wyszukiwarce – to skuteczne przyciąganie klientów i zwiększenie sprzedaży.</p>
<a className="group flex items-center shadow-sm hover:shadow-md transition-all duration-300" href="#">
<div className="text-xs font-medium text-white tracking-wide font-sans bg-blue-600 rounded-l-sm pt-3 pr-6 pb-3 pl-6">Umów spotkanie</div>
<div className="bg-blue-700 w-10 py-3 flex items-center justify-center rounded-r-sm group-hover:bg-blue-800 transition-colors">
<i className="w-4 h-4 text-white" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</a>

<div className="md:h-96 shadow-slate-200/50 flex overflow-hidden bg-white w-full h-64 max-w-5xl border-slate-200 border rounded-sm mt-24 mr-auto ml-auto relative shadow-xl items-end justify-center">

<div className="absolute top-4 left-4 right-4 flex gap-4">
<div className="w-1/4 h-24 border border-slate-100 bg-slate-50 rounded-sm"></div>
<div className="w-2/4 h-24 border border-slate-100 bg-slate-50 rounded-sm"></div>
<div className="w-1/4 h-24 border border-slate-100 bg-slate-50 rounded-sm"></div>
</div>
<div className="absolute bottom-0 w-[60%] h-[60%] border-t border-x border-slate-200 bg-slate-50 rounded-t-lg shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] flex flex-col p-4">
<div className="w-full flex justify-between items-center mb-4 border-b border-slate-200 pb-2">
<div className="w-24 h-2 bg-slate-200 rounded-full"></div>
<div className="w-8 h-8 rounded-full border border-slate-200 bg-white"></div>
</div>
<div className="flex-1 flex gap-4">
<div className="w-1/3 border border-slate-200 bg-white rounded-sm h-full flex flex-col justify-end p-2 gap-1">
<div className="w-full h-1/2 bg-blue-100 rounded-sm"></div>
<div className="w-full h-full bg-blue-600 rounded-sm"></div>
</div>
<div className="w-2/3 border border-slate-200 bg-white rounded-sm h-full flex items-center justify-center relative overflow-hidden">
<i className="w-12 h-12 text-blue-500 absolute" data-lucide="activity" strokeWidth="1"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white">
<div className="max-w-[1400px] mx-auto flex flex-wrap border-x border-slate-200">
<div className="flex-1 min-w-[120px] p-6 border-r border-slate-200 flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity">
<span className="font-semibold text-lg tracking-tight font-sans">AcmeCorp</span>
</div>
<div className="flex-1 min-w-[120px] p-6 border-r border-slate-200 flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity">
<span className="font-semibold text-lg tracking-tight mono font-sans">VERTEX</span>
</div>
<div className="flex-1 min-w-[120px] p-6 border-r border-slate-200 flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity">
<span className="font-semibold text-lg tracking-tight font-sans">GlobalNet</span>
</div>
<div className="flex-1 min-w-[120px] p-6 border-r border-slate-200 flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity">
<span className="font-semibold text-lg tracking-tight mono font-sans">NEXUS</span>
</div>
<div className="flex-1 min-w-[120px] p-6 border-r border-slate-200 flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity hidden md:flex">
<span className="font-semibold text-lg tracking-tight font-sans">Quantum</span>
</div>
<div className="flex-1 min-w-[120px] p-6 flex items-center justify-center grayscale opacity-50 hover:opacity-100 transition-opacity hidden lg:flex">
<span className="font-semibold text-lg tracking-tight mono font-sans">ZENITH</span>
</div>
</div>
</section>

<section className="bg-white border-b border-slate-200 relative pt-24">
<div className="max-w-[1400px] mx-auto px-6">
<div className="mb-16">
<span className="text-blue-600 text-sm font-medium tracking-wide mb-4 block font-sans">Who we are</span>
<h2 className="text-3xl md:text-4xl text-slate-900 max-w-2xl leading-snug font-manrope font-medium tracking-tighter">
                    We build intelligent websites that help businesses automate, adapt, and scale faster.
                </h2>
</div>
</div>
<div className="border-t border-slate-200">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 relative">

<div className="border-b md:border-b-0 md:border-r border-slate-200 p-8 lg:p-12 relative group">
<span className="absolute top-[-4px] left-[-4px] text-slate-300 text-[8px] font-sans">+</span>
<span className="absolute top-[-4px] right-[-4px] text-slate-300 text-[8px] font-sans">+</span>
<span className="text-blue-600 mono text-sm mb-6 block font-sans">[01]</span>
<h3 className="text-xl text-slate-900 mb-3 block font-manrope font-medium tracking-tighter">Always Converting</h3>
<p className="text-lg text-slate-600 mb-12 font-sans">
                        Digital presence that keeps campaigns running and helps businesses overcome lead shortages automatically.
                    </p>

<div className="h-32 w-full border border-slate-100 bg-slate-50 relative overflow-hidden group-hover:border-blue-100 transition-colors">
<div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
<div className="border-b border-r border-slate-200/50"></div>
<div className="border-b border-r border-slate-200/50"></div>
<div className="border-b border-r border-slate-200/50"></div>
<div className="border-b border-slate-200/50"></div>
<div className="border-b border-r border-slate-200/50"></div>
<div className="border-b border-r border-slate-200/50 bg-blue-50/50"></div>
<div className="border-b border-r border-slate-200/50"></div>
<div className="border-b border-slate-200/50"></div>
</div>
</div>
</div>

<div className="border-b md:border-b-0 md:border-r border-slate-200 p-8 lg:p-12 relative group">
<span className="absolute top-[-4px] right-[-4px] text-slate-300 text-[8px] font-sans">+</span>
<span className="text-blue-600 mono text-sm mb-6 block font-sans">[02]</span>
<h3 className="text-xl text-slate-900 mb-3 block font-manrope font-medium tracking-tighter">Simply Automated</h3>
<p className="text-lg text-slate-600 mb-12 font-sans">
                        Increase pipeline with automated data capture, CRM integration, and intelligent follow-up sequences.
                    </p>

<div className="h-32 w-full border border-slate-100 bg-slate-50 relative overflow-hidden group-hover:border-blue-100 transition-colors flex items-center justify-center">
<div className="w-full px-4 flex flex-col gap-2">
<div className="w-full h-px bg-slate-300 relative"><div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></div></div>
<div className="w-[80%] h-px bg-slate-300 relative ml-auto"><div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></div></div>
<div className="w-full h-px bg-slate-300 relative"><div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></div></div>
</div>
</div>
</div>

<div className="p-8 lg:p-12 relative group">
<span className="absolute top-[-4px] right-[-4px] text-slate-300 text-[8px] font-sans">+</span>
<span className="text-blue-600 mono text-sm mb-6 block font-sans">[03]</span>
<h3 className="text-xl text-slate-900 mb-3 block font-manrope font-medium tracking-tighter">Real Performance</h3>
<p className="text-lg text-slate-600 mb-12 font-sans">
                        Higher speed, greater SEO precision, and reliable infrastructure built for real-world scaling operations.
                    </p>

<div className="h-32 w-full border border-slate-100 bg-slate-50 relative overflow-hidden group-hover:border-blue-100 transition-colors flex items-center justify-center">
<svg className="stroke-slate-300 fill-none" height="100%" strokeWidth="1" viewbox="0 0 100 100" width="100%">
<path d="M 10 50 Q 50 10 90 50"></path>
<path className="stroke-blue-500" d="M 10 50 Q 50 90 90 50"></path>
<circle className="fill-slate-300 stroke-none" cx="50" cy="50" r="3"></circle>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#F8FAFC] border-b border-slate-200 py-24">
<div className="max-w-[1400px] mx-auto px-6">
<span className="text-blue-600 text-sm font-medium tracking-wide mb-4 block font-sans">Web Architecture</span>
<h2 className="text-3xl md:text-4xl text-slate-900 mb-16 max-w-xl font-manrope font-medium tracking-tighter">
                The next generation<br/>of digital infrastructure
            </h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="space-y-12">
<div>
<h4 className="text-sm font-semibold tracking-wide text-slate-900 mb-2 uppercase font-sans">Core Stack</h4>
<p className="text-lg text-slate-600 font-sans">A precision-engineered digital platform designed for modern marketing environments, combining intelligent UI with industrial reliability.</p>
</div>
<div>
<h4 className="text-sm font-semibold tracking-wide text-slate-900 mb-2 uppercase font-sans">Adaptive Acquisition</h4>
<p className="text-lg text-slate-600 font-sans">Powered by analytics, the system learns visitor behavior and adapts to new campaigns without complex reprogramming.</p>
</div>
</div>

<div className="border border-slate-200 bg-white rounded-sm p-8 shadow-sm">
<div className="grid grid-cols-3 border-b border-slate-200 pb-4 mb-4 text-xs font-semibold tracking-wide uppercase text-slate-500">
<div className="font-sans">Metric</div>
<div className="text-blue-600 font-sans">[PRO VERSION]</div>
<div className="font-sans">[ENTERPRISE]</div>
</div>
<div className="space-y-4 mono text-sm text-slate-600">
<div className="grid grid-cols-3 border-b border-slate-100 pb-3">
<div className="font-sans">[Load Time]</div>
<div className="text-slate-900 font-sans">&lt; 0.8s</div>
<div className="text-slate-900 font-sans">&lt; 0.4s</div>
</div>
<div className="grid grid-cols-3 border-b border-slate-100 pb-3">
<div className="font-sans">[Uptime]</div>
<div className="text-slate-900 font-sans">99.9%</div>
<div className="text-slate-900 font-sans">99.99%</div>
</div>
<div className="grid grid-cols-3 border-b border-slate-100 pb-3">
<div className="font-sans">[Conv. Rate]</div>
<div className="text-slate-900 font-sans">+ 15%</div>
<div className="text-slate-900 font-sans">+ 35%</div>
</div>
<div className="grid grid-cols-3 border-b border-slate-100 pb-3">
<div className="font-sans">[Bandwidth]</div>
<div className="text-slate-900 font-sans">Unmetered</div>
<div className="text-slate-900 font-sans">Dedicated</div>
</div>
<div className="grid grid-cols-3 border-b border-slate-100 pb-3">
<div className="font-sans">[Security]</div>
<div className="text-slate-900 font-sans">SSL + WAF</div>
<div className="text-slate-900 font-sans">Advanced DDoS</div>
</div>
<div className="grid grid-cols-3 pt-2">
<div className="font-sans">[CMS Core]</div>
<div className="text-slate-900 font-sans">Headless API</div>
<div className="text-slate-900 font-sans">Custom Edge Node</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 border-b border-slate-200">
<div className="max-w-[1400px] mx-auto px-6">
<span className="text-blue-600 text-sm font-medium tracking-wide mb-4 block font-sans">Our Best Models Here</span>
<h2 className="text-3xl md:text-4xl text-slate-900 mb-16 max-w-xl font-manrope font-medium tracking-tighter">
                Meet the Systems<br/>Driving Modern Growth
            </h2>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-slate-200">

<div className="border-b border-r border-slate-200 p-6 flex flex-col group hover:bg-slate-50 transition-colors cursor-pointer">
<div className="h-48 bg-slate-100 border border-slate-200 rounded-sm mb-6 flex items-center justify-center group-hover:border-blue-200 transition-colors">
<i className="w-12 h-12 text-slate-300 group-hover:text-blue-500 transition-colors" data-lucide="layout-template" strokeWidth="1"></i>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 leading-tight font-sans">Growth Site<br/>Compact</h3>
<span className="text-blue-600 text-sm font-medium mono font-sans">$2,900</span>
</div>
<p className="text-sm text-slate-500 mt-2 font-sans">Compact structure built for precision lead capture and small campaigns.</p>
</div>

<div className="border-b border-r border-slate-200 p-6 flex flex-col group hover:bg-slate-50 transition-colors cursor-pointer">
<div className="h-48 bg-slate-100 border border-slate-200 rounded-sm mb-6 flex items-center justify-center group-hover:border-blue-200 transition-colors">
<i className="w-12 h-12 text-slate-300 group-hover:text-blue-500 transition-colors" data-lucide="layers-3" strokeWidth="1"></i>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 leading-tight font-sans">Corporate<br/>Industrial</h3>
<span className="text-blue-600 text-sm font-medium mono font-sans">$5,500</span>
</div>
<p className="text-sm text-slate-500 mt-2 font-sans">Versatile industrial site for assembly, service showcasing, and lead routing.</p>
</div>

<div className="border-b border-r border-slate-200 p-6 flex flex-col group hover:bg-slate-50 transition-colors cursor-pointer">
<div className="h-48 bg-slate-100 border border-slate-200 rounded-sm mb-6 flex items-center justify-center group-hover:border-blue-200 transition-colors">
<i className="w-12 h-12 text-slate-300 group-hover:text-blue-500 transition-colors" data-lucide="database" strokeWidth="1"></i>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 leading-tight font-sans">E-Commerce<br/>Performance</h3>
<span className="text-blue-600 text-sm font-medium mono font-sans">$9,900</span>
</div>
<p className="text-sm text-slate-500 mt-2 font-sans">High-performance platform designed for demanding transactional workflows.</p>
</div>

<div className="border-b border-r border-slate-200 p-6 flex flex-col group hover:bg-slate-50 transition-colors cursor-pointer">
<div className="h-48 bg-slate-100 border border-slate-200 rounded-sm mb-6 flex items-center justify-center group-hover:border-blue-200 transition-colors">
<i className="w-12 h-12 text-slate-300 group-hover:text-blue-500 transition-colors" data-lucide="server" strokeWidth="1"></i>
</div>
<div className="flex justify-between items-start mb-2">
<h3 className="text-sm font-semibold tracking-tight text-slate-900 leading-tight font-sans">Custom App<br/>Heavy-Duty</h3>
<span className="text-blue-600 text-sm font-medium mono font-sans">$14,900</span>
</div>
<p className="text-sm text-slate-500 mt-2 font-sans">Powerful system built for heavy data processing and high-volume production.</p>
</div>
</div>
</div>
</section>

<footer className="bg-slate-50 py-12">
<div className="max-w-[1400px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-blue-600" data-lucide="layers" strokeWidth="1.5"></i>
<span className="font-semibold text-sm tracking-tight text-slate-900 font-sans">PETER GAIN</span>
</div>
<div className="flex gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors font-sans" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors font-sans" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors font-sans" href="#">System Status</a>
</div>
<div className="text-sm text-slate-400 font-sans">
                © 2024 Peter Gain Systems. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
