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



            !function(){var u=window.UnicornStudio;if(u&&u.init){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){u.init()})}else{u.init()}}else{window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js",i.onload=function(){if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",function(){UnicornStudio.init()})}else{UnicornStudio.init()}},(document.head||document.body).appendChild(i)}}();
        
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
      
<div className="top-0 w-full -z-10 absolute h-[700px]" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="JxWpqc8BCimZ8u7Rswg3"></div>

</div>

<div className="fixed inset-0 pointer-events-none z-50 flex justify-center w-full mix-blend-multiply opacity-[0.04]">
<div className="w-full max-w-[88rem] h-full flex justify-between px-6 lg:px-12">
<div className="w-px h-full bg-current"></div>
<div className="w-px h-full bg-current hidden md:block"></div>
<div className="w-px h-full bg-current hidden lg:block"></div>
<div className="w-px h-full bg-current"></div>
</div>
</div>

<nav className="absolute top-0 w-full z-40 py-8">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<iconify-icon className="text-3xl transition-transform group-hover:scale-110" icon="solar:layers-linear"></iconify-icon>
<span className="text-xl tracking-tight uppercase font-jakarta font-light">NEXPAY</span>
</a>
<div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-tight opacity-70">
<a className="hover:opacity-100 transition-opacity font-geist uppercase" href="#">Products</a>
<a className="hover:opacity-100 transition-opacity font-geist uppercase" href="#">Solutions</a>
<a className="hover:opacity-100 transition-opacity font-geist uppercase" href="#">Developers</a>
<a className="hover:opacity-100 transition-opacity font-geist uppercase" href="#">Pricing</a>
</div>
<div className="flex items-center gap-5">
<a className="hidden md:block text-sm font-medium opacity-70 hover:opacity-100 transition-opacity font-geist uppercase" href="#">Sign In</a>
<button className="opacity-70 hover:opacity-100 transition-opacity">
<iconify-icon className="text-2xl md:hidden" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-40 pb-24 min-h-[90vh] flex flex-col justify-between overflow-hidden section-container">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 w-full relative z-10 text-center flex-grow flex flex-col items-center justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 text-xs font-medium opacity-60 mb-8 font-geist uppercase tracking-wider">
<span>API Platform</span>
<span className="w-1 h-1 rounded-full bg-current"></span>
<span>V. 3.0</span>
</div>
<h1 className="text-6xl md:text-8xl lg:text-[9rem] font-medium tracking-tighter leading-none mb-12 flex justify-center flex-wrap gap-x-4 md:gap-x-6">
<span className="flex">
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.1s'}}>G</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.15s'}}>l</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.2s'}}>o</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.25s'}}>b</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.3s'}}>a</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.35s'}}>l</span></span>
</span>
<span className="flex">
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.4s'}}>E</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.45s'}}>n</span></span>
<span className="clip-text-container"><span className="animate-letter font-light font-jakarta pb-5" style={{animationDelay: '0.5s'}}>g</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.55s'}}>i</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.6s'}}>n</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.65s'}}>e</span></span>
</span>
<span className="flex text-black/30">
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.7s'}}>f</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.75s'}}>o</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.8s'}}>r</span></span>
</span>
<span className="flex">
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.85s'}}>S</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.9s'}}>c</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '0.95s'}}>a</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '1.0s'}}>l</span></span>
<span className="clip-text-container"><span className="animate-letter font-jakarta font-light" style={{animationDelay: '1.05s'}}>e</span></span>
</span>
</h1>
<div className="absolute inset-0 z-[-1] flex items-center justify-center opacity-40 mt-20 hidden md:flex pointer-events-none">
<canvas className="w-full max-w-5xl object-cover h-[60vh] mix-blend-multiply grayscale" height="1520" style={{maskImage: 'linear-gradient(black 40%, transparent 100%)'}} width="2000"></canvas>
<img alt="Abstract Tech" className="w-full max-w-5xl object-cover h-[60vh] mix-blend-multiply grayscale hidden" data-webgl-init="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/00b123a6-cd00-4859-b106-c3c10f888c8e/3840w.jpg" style={{maskImage: 'linear-gradient(black 40%, transparent 100%)'}}/>
</div>
<div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mt-auto text-left gap-8">
<div className="max-w-xs flex items-start gap-3">
<div className="relative mt-1 text-[#C48C56]">
<iconify-icon className="text-xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<div className="sonar-ring"></div>
</div>
<p className="text-base opacity-70 font-normal leading-relaxed font-geist">
                        Process transactions, integrate financial tools, and launch tailored revenue strategies.
                    </p>
</div>
<div className="max-w-sm flex flex-col items-start md:items-end text-left md:text-right gap-6">
<p className="text-base opacity-70 font-normal leading-relaxed font-geist">
                        Powering your journey from early-stage startup to enterprise scale architecture.
                    </p>
<div className="flex items-center gap-4">
<a className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#2C2824] text-[#F2EFEA] px-6 py-3 rounded-full text-sm font-medium transition-transform hover:scale-105" href="#">
<span className="font-geist uppercase">Start Building</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity font-geist uppercase border-b border-black/20 pb-1" href="#">Contact Sales</a>
</div>
</div>
</div>
</div>
<div className="w-full border-t border-black/10 mt-16 pt-8">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-xs tracking-widest font-medium opacity-50 uppercase">
<div className="flex items-center gap-3 font-geist"><span>01</span> GLOBAL PAYMENTS</div>
<div className="flex items-center gap-3 md:justify-center font-geist"><span>02</span> EMBEDDED FINANCE</div>
<div className="flex items-center gap-3 md:justify-end font-geist"><span>03</span> COMPLIANCE ENGINE</div>
</div>
</div>
</section>

<section className="py-16 border-b border-black/5 bg-white/30 backdrop-blur-md">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 text-2xl font-jakarta font-light tracking-tighter">
<div className="hover:opacity-100 transition-opacity flex items-center gap-2"><iconify-icon icon="solar:cloud-linear"></iconify-icon> CloudNet</div>
<div className="hover:opacity-100 transition-opacity flex items-center gap-2"><iconify-icon icon="solar:music-note-linear"></iconify-icon> AudioFlow</div>
<div className="hover:opacity-100 transition-opacity flex items-center gap-2"><iconify-icon icon="solar:shop-linear"></iconify-icon> ShopGlobal</div>
<div className="hover:opacity-100 transition-opacity items-center gap-2 hidden sm:flex"><iconify-icon icon="solar:monitor-linear"></iconify-icon> TechVision</div>
<div className="hover:opacity-100 transition-opacity items-center gap-2 hidden md:flex"><iconify-icon icon="solar:bus-linear"></iconify-icon> LogisticsPro</div>
</div>
</section>

<section className="relative overflow-hidden text-[#F2EFEA] bg-[#1A1714] py-8">
<div className="absolute top-0 left-0 z-10 h-full w-24 md:w-40 bg-gradient-to-r from-[#191714] to-transparent pointer-events-none"></div>
<div className="absolute top-0 right-0 z-10 h-full w-24 md:w-40 bg-gradient-to-l from-[#191714] to-transparent pointer-events-none"></div>
<div className="animate-marquee flex items-center gap-8 text-4xl md:text-6xl font-medium tracking-tighter whitespace-nowrap opacity-90">
<span className="font-jakarta font-light uppercase">Global Money Movement</span>
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light uppercase">Financial Infrastructure</span>
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light uppercase">API Platform</span>
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light uppercase">Global Money Movement</span>
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light uppercase">Financial Infrastructure</span>
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
<span className="font-jakarta font-light uppercase">API Platform</span>
<iconify-icon className="text-3xl" icon="solar:asterisk-bold-duotone"></iconify-icon>
</div>
</section>

<section className="py-32 section-container">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-end gap-8 mb-24 justify-between">
<h2 className="text-5xl md:text-6xl tracking-tighter font-jakarta font-light">Adaptable tools<br/>for any model.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 card-flashlight p-8 pb-0 flex flex-col group cursor-pointer border border-black/5 bg-white/40">
<div className="card-content flex flex-col h-full">
<div className="flex justify-between items-start mb-12">
<h3 className="text-2xl tracking-tighter font-jakarta font-light max-w-xs">Maximize conversion rates globally</h3>
<iconify-icon className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="mt-auto aspect-[21/9] rounded-t-xl overflow-hidden bg-black/5 relative">
<canvas className="transition-transform duration-700 group-hover:scale-105 opacity-80 mix-blend-multiply w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/00b123a6-cd00-4859-b106-c3c10f888c8e/1600w.jpg)] bg-cover grayscale" height="1333" width="2000"></canvas>
<div className="absolute bottom-4 left-4">
<span className="px-3 py-1 bg-white/80 backdrop-blur text-xs font-geist uppercase tracking-widest rounded-full">Checkout UI</span>
</div>
</div>
</div>
</div>
<div className="card-flashlight p-8 pb-0 flex flex-col group cursor-pointer border border-black/5 bg-white/40">
<div className="card-content flex flex-col h-full">
<div className="flex justify-between items-start mb-8">
<h3 className="text-2xl tracking-tighter font-jakarta font-light">Automate any billing cycle</h3>
<iconify-icon className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="mt-auto aspect-square rounded-t-xl overflow-hidden bg-black/5 relative">
<img alt="Abstract Code" className="transition-transform duration-700 group-hover:scale-105 opacity-60 mix-blend-multiply w-full h-full object-cover grayscale" data-webgl-init="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482f252b-fa2e-4725-b971-9b67da9fc1a0_800w.jpg"/>
</div>
</div>
</div>
<div className="card-flashlight p-8 flex flex-col group cursor-pointer border border-black/5 bg-white/40">
<div className="card-content h-full flex flex-col">
<div className="flex justify-between items-start mb-8">
<h3 className="text-2xl tracking-tighter font-jakarta font-light">Generate revenue via platforms</h3>
<iconify-icon className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="mt-auto">
<iconify-icon className="text-6xl opacity-20 group-hover:opacity-60 transition-opacity" icon="solar:shop-2-linear"></iconify-icon>
<p className="text-xs font-geist uppercase tracking-widest opacity-50 mt-4">Connect API</p>
</div>
</div>
</div>
<div className="card-flashlight p-8 flex flex-col group cursor-pointer border border-black/5 bg-white/40">
<div className="card-content h-full flex flex-col">
<div className="flex justify-between items-start mb-8">
<h3 className="text-2xl tracking-tighter font-jakarta font-light">Launch a card program</h3>
<iconify-icon className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="mt-auto relative w-full h-24">
<div className="absolute w-32 h-20 border border-black/20 rounded-lg -rotate-6 bg-white/50 backdrop-blur shadow-sm transition-transform group-hover:-rotate-12 group-hover:-translate-y-2"></div>
<div className="absolute w-32 h-20 border border-black/20 rounded-lg rotate-6 bg-white shadow-sm left-4 transition-transform group-hover:rotate-12 group-hover:-translate-y-1 flex items-center px-3">
<div className="w-6 h-4 bg-black/10 rounded-sm"></div>
</div>
</div>
</div>
</div>
<div className="card-flashlight p-8 flex flex-col group cursor-pointer border border-black/5 bg-white/40">
<div className="card-content h-full flex flex-col">
<div className="flex justify-between items-start mb-8">
<h3 className="text-2xl tracking-tighter font-jakarta font-light">Manage global compliance</h3>
<iconify-icon className="text-2xl opacity-40 group-hover:opacity-100 transition-opacity" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
<div className="mt-auto relative overflow-hidden h-24 flex items-center">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(#2C2824_1px,transparent_1px)] [background-size:16px_16px]"></div>
<iconify-icon className="text-5xl opacity-80 relative z-10" icon="solar:shield-check-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="section-container py-32">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12">
<div className="mb-20 max-w-3xl">
<h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-jakarta font-light text-[#2C2824] mb-6">
                    Flexible solutions for<br/>every business model.
                </h2>
<p className="text-lg md:text-xl opacity-70 font-normal leading-relaxed font-geist max-w-2xl text-[#2C2824]">
                    Grow your business with a comprehensive set of payments and financial tools – designed to work individually or in perfect synchronization.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="lg:col-span-2 card-flashlight relative overflow-hidden rounded-3xl bg-white/40 border border-black/5 group min-h-[500px] flex flex-col">
<div className="p-8 pb-0 relative z-10">
<div className="flex justify-between items-start">
<h3 className="text-2xl tracking-tighter font-jakarta font-light max-w-md leading-tight text-[#2C2824]">
                                Accept and optimise payments globally – online and in person
                            </h3>
<div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-lg opacity-60" icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-auto relative w-full h-[400px] overflow-hidden">
<div className="absolute bottom-0 right-0 w-[80%] h-[80%] bg-gradient-to-tl from-orange-300/30 via-rose-300/20 to-transparent blur-3xl rounded-full translate-y-20 translate-x-20 pointer-events-none"></div>
<div className="absolute inset-0 flex items-end justify-center gap-6 px-8 translate-y-12 transition-transform duration-700 group-hover:translate-y-6">

<div className="relative w-[220px] bg-[#1A1714] rounded-[2.5rem] p-3 shadow-2xl border border-black/10 z-20 transform -rotate-3 translate-y-8 group-hover:-rotate-6 transition-transform duration-500">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1A1714] rounded-b-xl z-30"></div>
<div className="w-full h-full bg-[#F9F9F9] rounded-[2rem] overflow-hidden flex flex-col relative">
<div className="p-6 pt-12 flex flex-col h-full">
<div className="flex justify-center mb-6">
<iconify-icon className="text-4xl text-[#2C2824] opacity-20" icon="solar:wireless-charge-linear"></iconify-icon>
</div>
<div className="text-center space-y-1 mb-8">
<p className="text-xs font-geist text-gray-500 uppercase tracking-widest">NexPay Global</p>
<h4 className="text-3xl font-jakarta font-semibold tracking-tighter">¥5,000.00</h4>
</div>
<div className="mt-auto space-y-3">
<div className="h-12 w-full bg-black text-white rounded-xl flex items-center justify-center font-medium text-sm font-geist">Tap to Pay</div>
<div className="h-12 w-full border border-gray-200 rounded-xl flex items-center justify-center font-medium text-sm text-gray-500 font-geist">Receipt</div>
</div>
</div>
</div>
</div>

<div className="relative flex-1 max-w-md bg-white rounded-t-xl shadow-2xl border border-black/5 overflow-hidden z-10 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
<div className="h-8 bg-gray-50 border-b border-gray-100 flex items-center gap-2 px-3">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-200"></div>
</div>
<div className="mx-auto h-5 w-40 bg-gray-100 rounded text-xs text-gray-400 flex items-center justify-center font-geist">checkout.nexpay.io</div>
</div>
<div className="p-6 space-y-4">
<div className="flex gap-4 mb-6">
<div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
<div className="">
<div className="h-4 w-32 bg-gray-100 rounded mb-2"></div>
<div className="h-3 w-20 bg-gray-50 rounded"></div>
</div>
</div>
<div className="space-y-3">
<div className="h-10 w-full border border-gray-200 rounded-lg px-3 flex items-center text-sm text-gray-800 font-geist">keiko.tanaka@example.com</div>
<div className="grid grid-cols-2 gap-3">
<div className="h-10 bg-[#05C168] rounded-lg flex items-center justify-center text-white text-xs font-medium font-geist">Link</div>
<div className="h-10 bg-black rounded-lg flex items-center justify-center text-white text-xs font-medium font-geist">Pay</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 card-flashlight relative overflow-hidden rounded-3xl bg-white/40 border border-black/5 group min-h-[500px] flex flex-col">
<div className="p-8 pb-0 relative z-10">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl tracking-tighter font-jakarta font-light max-w-[200px] text-[#2C2824]">
                                Enable any billing model
                            </h3>
<div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-lg opacity-60" icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-auto p-6 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300/20 blur-[80px] rounded-full pointer-events-none"></div>
<div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/40 shadow-sm relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon className="text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium font-jakarta text-[#2C2824]">Pro Plan</div>
<div className="text-xs text-gray-500 font-geist">Billed monthly</div>
</div>
</div>
<div className="mb-2 flex justify-between items-end">
<span className="text-xs text-gray-500 font-geist">Usage meter</span>
<span className="text-xs font-medium font-geist text-indigo-600">84%</span>
</div>
<div className="w-full h-1.5 bg-gray-100 rounded-full mb-6 overflow-hidden">
<div className="w-[84%] h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
</div>
<div className="bg-gray-50/50 rounded-xl p-4 border border-gray-100">
<div className="text-xs uppercase tracking-wider text-gray-400 font-geist mb-3">API Requests (30d)</div>
<div className="text-2xl font-jakarta font-medium tracking-tight mb-4">2,010,569</div>
<div className="flex items-end gap-1 h-12">
<div className="w-1 bg-indigo-200 h-[30%] rounded-t-sm"></div>
<div className="w-1 bg-indigo-300 h-[50%] rounded-t-sm"></div>
<div className="w-1 bg-indigo-200 h-[40%] rounded-t-sm"></div>
<div className="w-1 bg-indigo-400 h-[70%] rounded-t-sm"></div>
<div className="w-1 bg-indigo-500 h-[90%] rounded-t-sm"></div>
<div className="w-1 bg-indigo-300 h-[60%] rounded-t-sm"></div>
<div className="w-1 bg-indigo-200 h-[40%] rounded-t-sm"></div>
<div className="w-1 bg-indigo-400 h-[80%] rounded-t-sm"></div>
<div className="w-1 bg-indigo-500 h-[100%] rounded-t-sm"></div>
<div className="w-1 bg-indigo-300 h-[50%] rounded-t-sm"></div>
<div className="w-1 bg-indigo-200 h-[30%] rounded-t-sm"></div>
<div className="w-1 bg-indigo-400 h-[60%] rounded-t-sm"></div>
<div className="w-1 bg-indigo-200 h-[40%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 card-flashlight relative overflow-hidden rounded-3xl bg-white/40 border border-black/5 group min-h-[400px] flex flex-col">
<div className="p-8 pb-0 relative z-10">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl tracking-tighter font-jakarta font-light max-w-[240px] text-[#2C2824]">
                                Monetise through agentic commerce
                            </h3>
<div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-lg opacity-60" icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-auto pt-6 pr-6 pb-6 pl-6 relative">
<div className="absolute top-1/2 right-0 w-40 h-40 bg-rose-300/20 blur-[60px] rounded-full pointer-events-none"></div>

<div className="z-10 text-xs font-geist relative space-y-3 w-full">
<div className="ml-auto max-w-[85%] bg-white rounded-2xl rounded-tr-sm p-2.5 shadow-sm border border-gray-100 text-gray-600 transition-transform duration-500 group-hover:-translate-y-1">
<p>I'm looking for a minimal desk setup. Any recommendations?</p>
</div>
<div className="mr-auto max-w-[90%] bg-[#F2F0ED] rounded-2xl rounded-tl-sm p-2.5 text-gray-800 transition-transform duration-700 delay-75 group-hover:-translate-y-1">
<p className="mb-1.5">Absolutely. Based on your preferences, here are 3 essentials:</p>
</div>
<div className="flex overflow-x-auto gap-3 snap-x snap-mandatory w-full pt-1 pb-2 gap-x-3 gap-y-3" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<article className="snap-center shrink-0 overflow-hidden hover:border-black/20 transition-all duration-500 min-h-[220px] flex flex-col bg-center group cursor-pointer bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/71229e1c-dfe7-4d9c-86c6-d08f379a58a6/800w.png')] w-[160px] bg-cover z-10 border-black/10 border rounded-2xl relative shadow-sm">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>
<div className="p-3 flex flex-col z-10 h-full relative justify-between">
<div className="flex items-start justify-between">
<span className="px-2 py-1 rounded-md text-xs font-medium uppercase tracking-wider text-[#2C2824] bg-white/90 shadow-sm backdrop-blur-sm font-geist">Top Match</span>
<div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110">
<svg className="lucide lucide-arrow-up-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="transform transition-transform duration-500 group-hover:translate-y-0 mt-auto translate-y-2">
<div className="flex mb-1 items-end justify-between gap-2">
<h3 className="text-base font-light text-white tracking-tight font-jakarta leading-tight">Oak Stand</h3>
<span className="text-xs font-medium text-white font-geist">$120</span>
</div>
<p className="text-xs leading-relaxed text-white/70 mb-3 font-geist line-clamp-2">Elevates your screen &amp; provides storage space.</p>
<button className="hover:bg-gray-50 transition-colors flex gap-1.5 text-xs font-medium text-[#2C2824] font-geist bg-white w-full rounded-lg py-1.5 shadow-sm items-center justify-center">
<svg className="lucide lucide-shopping-cart" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                                                Add
                                            </button>
</div>
</div>
</article>

<article className="snap-center shrink-0 overflow-hidden hover:border-black/20 transition-all duration-500 min-h-[220px] flex flex-col bg-center group cursor-pointer bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/65725dab-b513-41a2-aa64-9b6a0cfc943a/800w.jpg')] w-[160px] bg-cover z-10 border-black/10 border rounded-2xl relative shadow-sm">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>
<div className="p-3 flex flex-col z-10 h-full relative justify-between">
<div className="flex items-start justify-end">
<div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110">
<svg className="lucide lucide-arrow-up-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="transform transition-transform duration-500 group-hover:translate-y-0 mt-auto translate-y-2">
<div className="flex mb-1 items-end justify-between gap-2">
<h3 className="text-base font-light text-white tracking-tight font-jakarta leading-tight">Oak Desk</h3>
<span className="text-xs font-medium text-white font-geist">$290</span>
</div>
<p className="text-xs leading-relaxed text-white/70 mb-3 font-geist line-clamp-2">Minimalist solid oak workspace setup.</p>
<button className="hover:bg-gray-50 transition-colors flex gap-1.5 text-xs font-medium text-[#2C2824] font-geist bg-white w-full rounded-lg py-1.5 shadow-sm items-center justify-center">
<svg className="lucide lucide-shopping-cart" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                                                Add
                                            </button>
</div>
</div>
</article>

<article className="snap-center shrink-0 overflow-hidden hover:border-black/20 transition-all duration-500 min-h-[220px] flex flex-col bg-center group cursor-pointer bg-[url('https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4c325f70-85f3-4523-86a3-48f4ccb4d83b_800w.jpg')] w-[160px] bg-cover z-10 border-black/10 border rounded-2xl relative shadow-sm">
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 opacity-80 group-hover:opacity-90 transition-opacity duration-500 pointer-events-none"></div>
<div className="p-3 flex flex-col z-10 h-full relative justify-between">
<div className="flex items-start justify-end">
<div className="w-6 h-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110">
<svg className="lucide lucide-arrow-up-right" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="transform transition-transform duration-500 group-hover:translate-y-0 mt-auto translate-y-2">
<div className="flex mb-1 items-end justify-between gap-2">
<h3 className="text-base font-light text-white tracking-tight font-jakarta leading-tight">Mech Key</h3>
<span className="text-xs font-medium text-white font-geist">$140</span>
</div>
<p className="text-xs leading-relaxed text-white/70 mb-3 font-geist line-clamp-2">Tactile feedback with a clean, wire-free design.</p>
<button className="hover:bg-gray-50 transition-colors flex gap-1.5 text-xs font-medium text-[#2C2824] font-geist bg-white w-full rounded-lg py-1.5 shadow-sm items-center justify-center">
<svg className="lucide lucide-shopping-cart" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
                                                Add
                                            </button>
</div>
</div>
</article>
</div>
</div>
</div>
</div>

<div className="lg:col-span-1 card-flashlight overflow-hidden group min-h-[400px] flex flex-col bg-white/40 border-black/5 border rounded-3xl relative">
<div className="p-8 pb-0 relative z-10">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl tracking-tighter font-jakarta font-light max-w-[200px] text-[#2C2824]">
                                Create a card issuing programme
                            </h3>
<div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-lg opacity-60" icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-auto relative h-64 flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-t from-pink-200/40 via-purple-200/20 to-transparent opacity-50"></div>
<div className="w-48 h-72 rounded-2xl bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 shadow-xl relative z-10 transform rotate-12 group-hover:rotate-[15deg] group-hover:scale-105 transition-all duration-700 ease-out flex flex-col justify-between p-5 overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
<div className="absolute -top-10 -right-10 w-40 h-40 bg-white/20 blur-3xl rounded-full"></div>
<div className="flex justify-between items-start relative">
<iconify-icon className="text-white/80 text-4xl rotate-90" icon="solar:sim-card-minimalistic-linear"></iconify-icon>
<iconify-icon className="text-white/60 text-xl rotate-90" icon="solar:wifi-router-minimalistic-linear"></iconify-icon>
</div>
<div className="text-white/90 font-jakarta font-medium tracking-widest text-lg relative rotate-90 origin-bottom-left translate-x-8 -translate-y-8">
                                NEXPAY
                            </div>
<div className="text-white font-medium text-xl tracking-tighter italic text-right relative">
                                VISA
                            </div>
</div>
</div>
</div>

<div className="lg:col-span-1 card-flashlight relative overflow-hidden rounded-3xl bg-white/40 border border-black/5 group min-h-[400px] flex flex-col">
<div className="p-8 pb-0 relative z-10">
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl tracking-tighter font-jakarta font-light max-w-[240px] text-[#2C2824]">
                                Access borderless money movement
                            </h3>
<div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-lg opacity-60" icon="solar:maximize-square-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>
<div className="mt-auto h-64 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity duration-700 mix-blend-multiply">
<canvas className="w-full h-full object-cover grayscale brightness-125 contrast-125" height="399" width="600"></canvas>
<img alt="Global Network" className="w-full h-full object-cover grayscale brightness-125 contrast-125 hidden" data-webgl-init="true" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 group-hover:scale-110 transition-transform duration-500">
<div className="relative flex items-center justify-center">
<div className="absolute w-24 h-24 bg-blue-400/20 rounded-full animate-ping"></div>
<div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-sm relative z-20"></div>
<div className="absolute left-6 top-0 bg-white/90 backdrop-blur px-3 py-1.5 rounded-lg border border-black/5 shadow-sm whitespace-nowrap z-20 flex items-center gap-2 transform translate-x-2">
<div className="w-4 h-4 rounded-full bg-[#2775CA] flex items-center justify-center text-xs text-white font-medium">U</div>
<span className="text-xs font-medium font-geist text-gray-800">$4,280 USDC</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 card-flashlight relative overflow-hidden rounded-3xl bg-white/40 border border-black/5 group min-h-[400px] flex flex-col md:flex-row">
<div className="p-8 flex flex-col justify-between relative z-10 md:w-1/3">
<div>
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl md:text-3xl tracking-tighter font-jakarta font-light text-[#2C2824]">
                                    Embed payments in<br/>your platform
                                </h3>
</div>
<p className="text-sm opacity-60 font-geist leading-relaxed max-w-xs">
                                Orchestrate complex fund flows between multiple parties with our Connect API. Automate payouts, manage compliance, and monetize payments.
                            </p>
</div>
<div className="mt-8 md:mt-0">
<a className="inline-flex items-center gap-2 text-sm font-medium border-b border-black/20 pb-1 hover:border-black/50 transition-colors font-geist uppercase tracking-wide" href="#">
                                Explore Connect
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="relative flex-1 bg-gradient-to-br from-indigo-50/50 via-white/50 to-purple-50/50 overflow-hidden min-h-[300px] md:min-h-0">
<div className="absolute inset-0 opacity-30">
<div className="absolute -right-20 -bottom-40 w-96 h-96 bg-purple-300/30 blur-[80px] rounded-full"></div>
<div className="absolute right-40 top-10 w-72 h-72 bg-indigo-300/30 blur-[80px] rounded-full"></div>
</div>
<div className="absolute inset-0 p-8 pt-12 pl-4 md:pl-0 flex items-end justify-end">
<div className="absolute top-12 left-0 md:left-8 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5 p-4 w-64 z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
<iconify-icon className="text-lg" icon="solar:fire-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium font-jakarta text-gray-900">Quiet Fire Yoga</div>
<div className="text-xs text-gray-500 font-geist mb-2">Payment successful</div>
<div className="flex justify-between text-xs border-t border-gray-100 pt-2 w-full gap-8">
<span className="text-gray-400">#TRX-9942</span>
<span className="font-medium text-green-600">Verified</span>
</div>
</div>
</div>
</div>
<div className="w-full md:w-[90%] bg-white/90 backdrop-blur rounded-tl-2xl shadow-xl border-t border-l border-white/50 h-[85%] overflow-hidden relative z-10 hover:-translate-y-2 transition-transform duration-700">
<div className="h-10 border-b border-gray-100 flex items-center px-4 gap-2 bg-gray-50/50">
<div className="w-2 h-2 rounded-full bg-red-400/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-400/50"></div>
<div className="w-2 h-2 rounded-full bg-green-400/50"></div>
<div className="ml-4 text-xs text-gray-400 font-geist flex items-center gap-1">
<iconify-icon icon="solar:lock-linear"></iconify-icon> dashboard.nexpay.io
                                    </div>
</div>
<div className="p-6">
<div className="flex justify-between items-end mb-6">
<h4 className="text-sm font-medium font-jakarta">Connected Accounts</h4>
<button className="text-xs bg-black text-white px-3 py-1.5 rounded-full font-geist">Export CSV</button>
</div>
<table className="w-full text-left">
<thead>
<tr className="text-xs text-gray-400 font-geist uppercase tracking-wider border-b border-gray-100">
<th className="pb-3 font-medium">Account</th>
<th className="pb-3 font-medium">Region</th>
<th className="pb-3 font-medium text-right">Volume (USD)</th>
<th className="pb-3 font-medium text-right">Status</th>
</tr>
</thead>
<tbody className="text-xs font-geist text-gray-600">
<tr className="group/row">
<td className="py-3 group-hover/row:text-indigo-600 transition-colors flex items-center gap-2">
<div className="w-5 h-5 rounded bg-blue-100 text-blue-600 flex items-center justify-center"><iconify-icon icon="solar:water-linear"></iconify-icon></div>
                                                    Vital Flow
                                                </td>
<td className="py-3">Canada</td>
<td className="py-3 text-right font-medium text-gray-900">$96,610.02</td>
<td className="py-3 text-right"><span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span></td>
</tr>
<tr className="group/row">
<td className="py-3 group-hover/row:text-indigo-600 transition-colors flex items-center gap-2">
<div className="w-5 h-5 rounded bg-orange-100 text-orange-600 flex items-center justify-center"><iconify-icon icon="solar:sun-2-linear"></iconify-icon></div>
                                                    Daybreak Yoga
                                                </td>
<td className="py-3">USA</td>
<td className="py-3 text-right font-medium text-gray-900">$11,989.00</td>
<td className="py-3 text-right"><span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span></td>
</tr>
<tr className="group/row">
<td className="py-3 group-hover/row:text-indigo-600 transition-colors flex items-center gap-2">
<div className="w-5 h-5 rounded bg-purple-100 text-purple-600 flex items-center justify-center"><iconify-icon icon="solar:moon-stars-linear"></iconify-icon></div>
                                                    Sacred Space
                                                </td>
<td className="py-3">UK</td>
<td className="py-3 text-right font-medium text-gray-900">$33,168.27</td>
<td className="py-3 text-right"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500 inline-block"></span></td>
</tr>
<tr className="group/row border-b-0">
<td className="py-3 group-hover/row:text-indigo-600 transition-colors flex items-center gap-2">
<div className="w-5 h-5 rounded bg-rose-100 text-rose-600 flex items-center justify-center"><iconify-icon icon="solar:heart-pulse-linear"></iconify-icon></div>
                                                    Jackson Hot Yoga
                                                </td>
<td className="py-3">Australia</td>
<td className="py-3 text-right font-medium text-gray-900">$17,068.46</td>
<td className="py-3 text-right"><span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block"></span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-[#ffffff] font-jakarta bg-[#25221E] pt-24 pb-24 relative">
<div className="absolute top-0 left-0 w-full h-px bg-white/10"></div>
<div className="max-w-[80rem] mx-auto px-6 lg:px-8 relative z-10">
<div className="border-b border-white/10 pb-20 mb-20">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight leading-[1.15] mb-6 max-w-4xl text-white">
                    Reliable, extensible infrastructure for every stack. 
                    <span className="text-[#adbdcc] font-normal">Adapt Stripe to your business needs with flexible integration options.</span>
</h2>
<div className="flex flex-wrap gap-4 mt-8">
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#635BFF] rounded-full hover:bg-[#5851df] transition-all shadow-lg shadow-indigo-500/20 group" href="#">
                        View developer docs
                        <svg className="ml-2 group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<a className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-transparent border border-[#adbdcc]/30 rounded-full hover:bg-white/5 transition-all" href="#">
                        View Stripe's GitHub
                    </a>
</div>
</div>

<div className="overflow-hidden md:p-12 bg-[#120f0d] border-white/10 rounded-[32px] border-b mb-20 pb-20 relative" style={{boxShadow: '0 24px 48px -12px rgba(0, 0, 0, 1), inset 0 1px 0px rgba(255,255,255,0.05)'}}>
<div className="absolute inset-0 pointer-events-none rounded-[32px] overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-60"></div>
<div className="absolute top-24 left-24 h-0.5 w-0.5 bg-white rounded-full opacity-20 animate-pulse"></div>
<div className="absolute top-48 right-1/4 h-1 w-1 bg-blue-400/20 rounded-full blur-[1px] animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="absolute bottom-32 left-1/3 h-0.5 w-0.5 bg-white rounded-full opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
</div>
<div className="relative z-10 text-center mb-16 max-w-3xl mx-auto pt-8">
<h2 className="text-4xl font-medium tracking-tight text-white sm:text-5xl mb-6">
                        Connect to existing systems.
                    </h2>
<p className="text-lg font-light text-slate-400 leading-relaxed">
                        Orchestrate payments across multiple processors, build custom workflows, and connect to third parties using APIs, partner apps or pre-built integrations.
                    </p>
</div>
<div className="max-w-5xl mx-auto relative h-auto md:h-[480px]">
<svg className="absolute inset-0 h-[480px] w-full pointer-events-none hidden md:block overflow-visible z-0" preserveaspectratio="none" viewbox="0 0 1000 480">
<defs>
<lineargradient id="blueFlowGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#1e3a8a" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#3b82f6" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#1e3a8a" stop-opacity="0"></stop>
</lineargradient>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="4"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
</defs>
<path d="M 125,96 C 125,150 490,140 500,192" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
<path d="M 375,96 C 375,150 495,140 500,192" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
<path d="M 625,96 C 625,150 505,140 500,192" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
<path d="M 875,96 C 875,150 510,140 500,192" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
<path d="M 500,288 C 490,340 250,330 250,384" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
<path d="M 500,288 C 500,340 500,330 500,384" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
<path d="M 500,288 C 510,340 750,330 750,384" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1"></path>
<path className="animate-flow-custom" d="M 125,96 C 125,150 490,140 500,192" fill="none" stroke="url(#blueFlowGradient)" stroke-dasharray="200, 400" stroke-dashoffset="0" strokeWidth="2" style={{animationDuration: '8s'}}></path>
<path className="animate-flow-custom" d="M 375,96 C 375,150 495,140 500,192" fill="none" stroke="url(#blueFlowGradient)" stroke-dasharray="200, 400" stroke-dashoffset="-200" strokeWidth="2" style={{animationDuration: '10s'}}></path>
<path className="animate-flow-custom" d="M 625,96 C 625,150 505,140 500,192" fill="none" stroke="url(#blueFlowGradient)" stroke-dasharray="200, 400" stroke-dashoffset="-100" strokeWidth="2" style={{animationDuration: '9s'}}></path>
<path className="animate-flow-custom" d="M 875,96 C 875,150 510,140 500,192" fill="none" stroke="url(#blueFlowGradient)" stroke-dasharray="200, 400" stroke-dashoffset="-300" strokeWidth="2" style={{animationDuration: '7s'}}></path>
<path className="animate-flow-custom" d="M 500,288 C 490,340 250,330 250,384" fill="none" stroke="url(#blueFlowGradient)" stroke-dasharray="200, 400" stroke-dashoffset="0" strokeWidth="2" style={{animationDuration: '8.5s'}}></path>
<path className="animate-flow-custom" d="M 500,288 C 500,340 500,330 500,384" fill="none" stroke="url(#blueFlowGradient)" stroke-dasharray="200, 400" stroke-dashoffset="-150" strokeWidth="2" style={{animationDuration: '7.5s'}}></path>
<path className="animate-flow-custom" d="M 500,288 C 510,340 750,330 750,384" fill="none" stroke="url(#blueFlowGradient)" stroke-dasharray="200, 400" stroke-dashoffset="-250" strokeWidth="2" style={{animationDuration: '9.5s'}}></path>
<path className="animate-flow-custom" d="M 125,96 C 125,150 490,140 500,192" fill="none" filter="url(#glow)" stroke="#60a5fa" stroke-dasharray="20, 600" stroke-dashoffset="0" strokeWidth="3" style={{animationDuration: '4s', strokeLinecap: 'round'}}></path>
<path className="animate-flow-custom" d="M 375,96 C 375,150 495,140 500,192" fill="none" filter="url(#glow)" stroke="#60a5fa" stroke-dasharray="20, 600" stroke-dashoffset="-200" strokeWidth="3" style={{animationDuration: '5s', strokeLinecap: 'round'}}></path>
<path className="animate-flow-custom" d="M 625,96 C 625,150 505,140 500,192" fill="none" filter="url(#glow)" stroke="#60a5fa" stroke-dasharray="20, 600" stroke-dashoffset="-100" strokeWidth="3" style={{animationDuration: '4.5s', strokeLinecap: 'round'}}></path>
<path className="animate-flow-custom" d="M 875,96 C 875,150 510,140 500,192" fill="none" filter="url(#glow)" stroke="#60a5fa" stroke-dasharray="20, 600" stroke-dashoffset="-300" strokeWidth="3" style={{animationDuration: '6s', strokeLinecap: 'round'}}></path>
<path className="animate-flow-custom" d="M 500,288 C 490,340 250,330 250,384" fill="none" filter="url(#glow)" stroke="#60a5fa" stroke-dasharray="20, 600" stroke-dashoffset="0" strokeWidth="3" style={{animationDuration: '5s', strokeLinecap: 'round'}}></path>
<path className="animate-flow-custom" d="M 500,288 C 500,340 500,330 500,384" fill="none" filter="url(#glow)" stroke="#60a5fa" stroke-dasharray="20, 600" stroke-dashoffset="-200" strokeWidth="3" style={{animationDuration: '4s', strokeLinecap: 'round'}}></path>
<path className="animate-flow-custom" d="M 500,288 C 510,340 750,330 750,384" fill="none" filter="url(#glow)" stroke="#60a5fa" stroke-dasharray="20, 600" stroke-dashoffset="-100" strokeWidth="3" style={{animationDuration: '5.5s', strokeLinecap: 'round'}}></path>
</svg>
<div className="flex flex-col md:block h-full gap-8 relative z-10">

<div className="grid grid-cols-2 gap-6 md:flex md:justify-center md:gap-[50px] md:h-24 md:absolute md:top-0 md:left-0 md:w-full">

<div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full md:w-[200px] h-24 border-white/5 border relative items-center justify-center flex-col gap-2 rounded-xl md:rounded-none">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="anim-float">
<svg className="h-6 w-6 text-slate-400 group-hover:text-white transition-all duration-300 lottie-stroke" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors tracking-wide">ERP System</span>
</div>

<div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full md:w-[200px] h-24 border-white/5 border relative items-center justify-center flex-col gap-2 rounded-xl md:rounded-none">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="anim-float" style={{animationDelay: '0.5s'}}>
<svg className="h-6 w-6 text-slate-400 group-hover:text-white transition-all duration-300 lottie-stroke" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors tracking-wide">CRM</span>
</div>

<div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full md:w-[200px] h-24 border-white/5 border relative items-center justify-center flex-col gap-2 rounded-xl md:rounded-none">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="anim-float" style={{animationDelay: '1s'}}>
<svg className="h-6 w-6 text-slate-400 group-hover:text-white transition-all duration-300 lottie-stroke" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</div>
<span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors tracking-wide">Subscriptions</span>
</div>

<div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full md:w-[200px] h-24 border-white/5 border relative items-center justify-center flex-col gap-2 rounded-xl md:rounded-none">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="anim-float" style={{animationDelay: '1.5s'}}>
<svg className="h-6 w-6 text-slate-400 group-hover:text-white transition-all duration-300 lottie-stroke" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
</div>
<span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors tracking-wide">Booking App</span>
</div>
</div>

<div className="flex justify-center items-center flex-col md:h-24 md:absolute md:top-[192px] md:left-0 md:w-full">
<div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-[#020204] shadow-[0_0_50px_rgba(59,130,246,0.5)] border border-blue-500/30">
<div className="absolute inset-[-10px] rounded-full border border-blue-500/20 border-dashed animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-[-4px] rounded-full border border-blue-400/30 border-dotted" style={{animation: 'spin 15s linear infinite reverse'}}></div>
<div className="absolute inset-0 rounded-full bg-blue-500/10 blur-xl animate-pulse"></div>
<div className="relative z-10 animate-[pulse_3s_ease-in-out_infinite]">
<svg className="lucide lucide-atom h-10 w-10 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.5)] lottie-stroke" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path>
<path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path>
</svg>
</div>
</div>
<div className="absolute top-[100px] left-1/2 -translate-x-1/2 text-center pointer-events-none w-full hidden md:block">
<div className="text-sm font-medium text-white tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">NexPay Engine</div>
<div className="text-xs text-blue-400 uppercase tracking-widest mt-1">Orchestration</div>
</div>
</div>

<div className="grid grid-cols-1 md:flex md:justify-center md:gap-[50px] md:h-24 md:absolute md:top-[384px] md:left-0 md:w-full gap-6">

<div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full md:w-[200px] h-24 border-white/5 border relative items-center justify-center flex-col gap-2 rounded-xl md:rounded-none">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="anim-float" style={{animationDelay: '0.3s'}}>
<svg className="h-6 w-6 text-slate-400 group-hover:text-white transition-all duration-300 lottie-stroke" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors tracking-wide">Processor A</span>
</div>

<div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full md:w-[200px] h-24 border-white/5 border relative items-center justify-center flex-col gap-2 rounded-xl md:rounded-none">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="anim-float" style={{animationDelay: '0.8s'}}>
<svg className="h-6 w-6 text-slate-400 group-hover:text-white transition-all duration-300 lottie-stroke" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>
</div>
<span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors tracking-wide">Processor B</span>
</div>

<div className="group flex transition-all duration-300 hover:bg-white/[0.02] hover:border-blue-500/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] overflow-hidden bg-[#0B0C10] w-full md:w-[200px] h-24 border-white/5 border relative items-center justify-center flex-col gap-2 rounded-xl md:rounded-none">
<div className="absolute top-0 left-0 h-1.5 w-1.5 border-t border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute top-0 right-0 h-1.5 w-1.5 border-t border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute bottom-0 left-0 h-1.5 w-1.5 border-b border-l border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="absolute bottom-0 right-0 h-1.5 w-1.5 border-b border-r border-blue-600/30 group-hover:w-2.5 group-hover:h-2.5 group-hover:border-blue-500 transition-all hidden md:block"></div>
<div className="anim-float" style={{animationDelay: '1.2s'}}>
<svg className="h-6 w-6 text-slate-400 group-hover:text-white transition-all duration-300 lottie-stroke" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path></svg>
</div>
<span className="text-xs font-medium text-slate-400 group-hover:text-white transition-colors tracking-wide">Processor C</span>
</div>
</div>
</div>
</div>
</div>

<div className="border-white/10 border-b mb-20 pb-20 relative" style={{maskImage: 'linear-gradient(90deg, transparent, black 0%, black 75%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 0%, black 75%, transparent)'}}>
<div className="max-w-2xl mb-24 relative z-10">
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight">Scale with confidence. <span className="text-[#adbdcc] font-normal">Handle thousands of transactions per second with consistent speed and reliability, even during peak traffic periods.</span></h3>
</div>
<div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute right-0 top-32 w-[600px] h-[400px] bg-[#635BFF] opacity-20 blur-[120px] rounded-full translate-x-1/3"></div>
<div className="absolute right-[20%] top-40 w-[400px] h-[300px] bg-[#C084FC] opacity-20 blur-[100px] rounded-full"></div>
<svg className="absolute inset-0 w-full h-full opacity-30" fill="none" preserveaspectratio="none" viewbox="0 0 1440 600">
<path d="M0,600 C300,550 600,500 1440,300" stroke="url(#grad1)" strokeWidth="1"></path>
<path d="M0,600 C320,540 620,490 1440,280" opacity="0.8" stroke="url(#grad1)" strokeWidth="1"></path>
<path d="M0,600 C340,530 640,480 1440,260" opacity="0.6" stroke="url(#grad1)" strokeWidth="1"></path>
<path d="M0,600 C360,520 660,470 1440,240" opacity="0.4" stroke="url(#grad1)" strokeWidth="1"></path>
<path d="M0,600 C380,510 680,460 1440,220" opacity="0.2" stroke="url(#grad1)" strokeWidth="1"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#635BFF', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: '#C084FC', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#635BFF', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
<div className="border-l border-[#635BFF]/30 pl-6">
<div className="text-5xl font-medium text-white mb-2 tracking-tight">500M<span className="text-[#635BFF]">+</span></div>
<div className="text-sm font-medium text-[#adbdcc]">API requests per day</div>
</div>
<div className="border-l border-[#635BFF]/30 pl-6">
<div className="text-5xl font-medium text-white mb-2 tracking-tight">10K<span className="text-[#635BFF]">+</span></div>
<div className="text-sm font-medium text-[#adbdcc]">API requests per second</div>
</div>
<div className="border-l border-[#635BFF]/30 pl-6">
<div className="text-5xl font-medium text-white mb-2 tracking-tight">150K<span className="text-[#635BFF]">+</span></div>
<div className="text-sm font-medium text-[#adbdcc]">transactions per minute</div>
</div>
</div>
</div>
<div>
<div className="max-w-3xl">
<h3 className="text-2xl font-medium text-white mb-3 tracking-tight">Choose an integration path. <span className="text-[#adbdcc] font-normal">With AI-powered support, rich documentation, and built-in debugging tools, you can quickly get started with the best option for your business.</span></h3>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] w-full border-b border-black/5 bg-white/40">
<div className="md:p-24 flex flex-col pt-12 pr-12 pb-12 pl-12 justify-center">
<div className="mb-12">
<iconify-icon className="text-4xl opacity-40 mb-6" icon="solar:graph-up-linear"></iconify-icon>
<h2 className="text-4xl md:text-5xl tracking-tighter mb-6 font-jakarta font-light">Make your SaaS a complete ecosystem.</h2>
<p className="text-lg opacity-70 font-normal leading-relaxed font-geist">
                    Embed payments, billing, and financial services directly into your software offering. Generate new revenue streams by monetizing transactions on your platform.
                </p>
</div>
<ul className="space-y-6 border-t border-black/10 pt-8">
<li className="flex items-start gap-4 group cursor-pointer">
<span className="opacity-30 text-xs font-geist mt-1">01</span>
<div>
<h4 className="font-jakarta tracking-tighter text-lg mb-1 group-hover:opacity-60 transition-opacity">Rapid vendor onboarding</h4>
<p className="text-sm opacity-60 font-geist">Optimized verification flows that reduce drop-off.</p>
</div>
</li>
<li className="flex items-start gap-4 group cursor-pointer">
<span className="opacity-30 text-xs font-geist mt-1">02</span>
<div>
<h4 className="font-jakarta tracking-tighter text-lg mb-1 group-hover:opacity-60 transition-opacity">Automated split routing</h4>
<p className="text-sm opacity-60 font-geist">Complex multi-party fund distribution handled natively.</p>
</div>
</li>
</ul>
</div>
<div className="relative overflow-hidden group min-h-[50vh]">
<canvas className="transition-transform duration-1000 group-hover:scale-105 opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale" height="1335" width="2000"></canvas>
<img alt="Server Infrastructure" className="transition-transform duration-1000 group-hover:scale-105 opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0 grayscale hidden" data-webgl-init="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/variants/5a8e99c8-1b9f-44cb-8706-b0117addd162/1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 pointer-events-none mix-blend-multiply"></div>
<div className="absolute bottom-12 right-12 text-white/90 pointer-events-none flex items-center gap-3 bg-black/40 backdrop-blur px-4 py-2 rounded-full border border-white/10">
<div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
<span className="text-xs font-geist uppercase tracking-widest">System Active</span>
</div>
</div>
</section>

<section className="section-container pt-32 pb-32">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="max-w-md">
<h2 className="text-4xl md:text-5xl tracking-tighter mb-6 font-jakarta font-light">Strategic<br/>Deployment</h2>
<p className="text-lg opacity-80 font-normal leading-relaxed mb-12 border-b border-black/10 pb-12 font-geist">
                    Receive tailored guidance from our integration architects for complex data migrations and global rollout strategies.
                </p>
<div className="flex gap-8 items-start mb-12">
<iconify-icon className="text-5xl text-black/20 flex-shrink-0" icon="solar:branching-paths-up-linear"></iconify-icon>
<div>
<p className="font-medium tracking-tight mb-4 text-sm uppercase opacity-50 font-geist">Onboarding Protocols</p>
<ul className="space-y-3 text-sm font-medium opacity-90 tracking-tight">
<li className="flex items-center gap-3 font-geist">
<span className="w-1 h-1 rounded-full bg-current"></span>
                                Architectural review &amp; scoping
                            </li>
<li className="flex items-center gap-3 font-geist">
<span className="w-1 h-1 rounded-full bg-current"></span>
                                Sandbox testing environment
                            </li>
</ul>
</div>
</div>
<div className="flex items-center gap-4">
<a className="btn-beam dark-btn inline-flex items-center gap-2 bg-[#2C2824] text-[#F2EFEA] px-6 py-3 rounded-full text-sm font-medium" href="#">
<span className="font-geist uppercase">Create Account</span>
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
<a className="text-sm font-medium opacity-70 hover:opacity-100 transition-opacity font-geist uppercase border-b border-black/20 pb-1" href="#">Contact Enterprise</a>
</div>
</div>
<div className="h-full min-h-[400px] relative rounded-2xl overflow-hidden card-flashlight bg-[#2C2824] p-1">
<div className="card-content overflow-hidden w-full h-full rounded-xl absolute top-0 right-0 bottom-0 left-0">
<canvas className="opacity-80 mix-blend-luminosity w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b30ed36c-fa0a-48df-8d21-175beda06c03_1600w.png)] bg-cover grayscale" height="1333" width="2000"></canvas>
<div className="flex bg-gradient-to-t from-black/80 to-transparent pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-end">
<p className="text-white/80 font-geist text-sm leading-relaxed max-w-sm">"NexPay's architecture handled our marketplace routing with flawless precision during peak global scaling." <br/><br/><span className="opacity-50 uppercase tracking-widest text-xs">— VP Product, FitMarket</span></p>
</div>
</div>
</div>
</div>
</section>

<footer className="section-container text-[#F2EFEA] bg-[#26221E] border-white/10 border-t pt-24 pb-12">
<div className="max-w-[88rem] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-12 mb-24">
<div className="col-span-2 lg:col-span-4 flex flex-col items-start">
<a className="flex items-start gap-2 group relative mb-8" href="#">
<iconify-icon className="text-5xl opacity-80 group-hover:opacity-100 transition-opacity" icon="solar:layers-linear"></iconify-icon>
<span className="text-5xl tracking-tighter uppercase leading-none font-jakarta font-light">NEXPAY</span>
<div className="relative mt-2 text-[#C48C56]">
<iconify-icon className="text-3xl transition-transform group-hover:rotate-90 duration-500" icon="solar:asterisk-bold-duotone"></iconify-icon>
</div>
</a>
<p className="text-base opacity-60 font-normal leading-relaxed font-geist max-w-sm mb-10">
                        The core engine to scale your business. We synthesize resilient financial infrastructure with refined developer experiences to endure lifetimes.
                    </p>
<div className="flex items-center gap-5">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-white/5 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:chat-round-line-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-white/5 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center opacity-50 hover:opacity-100 hover:bg-white/5 transition-all" href="#">
<iconify-icon className="text-lg" icon="solar:code-circle-linear"></iconify-icon>
</a>
</div>
</div>
<div className="col-span-1 lg:col-span-2 space-y-8">
<h4 className="text-xs font-medium tracking-widest uppercase opacity-40 font-geist">Products</h4>
<ul className="space-y-4 text-sm font-normal opacity-60 font-geist">
<li><a className="hover:opacity-100 transition-opacity" href="#">Payments</a></li>
<li><a className="hover:opacity-100 transition-opacity" href="#">Billing</a></li>
</ul>
</div>
<div className="col-span-1 lg:col-span-2 space-y-8">
<h4 className="text-xs font-medium tracking-widest uppercase opacity-40 font-geist">Resources</h4>
<ul className="space-y-4 text-sm font-normal opacity-60 font-geist">
<li><a className="hover:opacity-100 transition-opacity" href="#">Documentation</a></li></ul></div></div></div></footer>
    </>
  );
}
