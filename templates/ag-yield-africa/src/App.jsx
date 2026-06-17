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
        
        // Simple scan animation reset (optional purely for visuals in static html)
        const scanner = document.querySelector('.animate-\\[scan_2s_ease-in-out_infinite\\]');
    
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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-[#ccf32f] flex items-center justify-center">
<i className="w-4 h-4 text-black" data-lucide="leaf"></i>
</div>
<span className="text-lg font-medium tracking-tight">Yield.AI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-medium text-neutral-500">
<a className="hover:text-black transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-black transition-colors" href="#features">Features</a>
<a className="hover:text-black transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-black transition-colors" href="#support">Support</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-base font-medium hover:text-neutral-600 transition-colors" href="#">Log In</a>
<a className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors flex items-center gap-2" href="#">
<i className="w-4 h-4" data-lucide="download"></i>
<span>Get Yield.AI</span>
</a>
</div>
</div>
</nav>
<main className="w-full overflow-hidden">

<div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4">
<div className="relative bg-[#ccf32f] rounded-[2.5rem] p-8 md:p-16 overflow-hidden min-h-[650px] md:min-h-[750px] flex flex-col md:block">

<div className="relative z-10 max-w-xl mt-8 md:mt-16">
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-6">
                        Better harvests, <br/>
                        less guesswork.
                        <span className="inline-block relative top-[-10px]">
<i className="w-10 h-10 text-black/80" data-lucide="sprout"></i>
</span>
</h1>
<p className="text-xl md:text-2xl font-normal text-neutral-800 mb-10 max-w-md leading-relaxed">
                        Snap a photo, get instant crop diagnosis, local prices and weather — all offline and in your language.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<button className="bg-black text-white text-base font-medium px-7 py-3.5 rounded-full hover:bg-neutral-800 transition-transform hover:scale-105 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="smartphone"></i>
                            Get Yield.AI — Free
                        </button>
<a className="text-base font-medium flex items-center gap-2 group hover:text-neutral-700" href="#">
<div className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center">
<i className="w-3 h-3 fill-current ml-0.5" data-lucide="play"></i>
</div>
                            Watch 60s Demo
                        </a>
</div>

<div className="absolute right-0 top-1/4 hidden md:block opacity-60">
<svg fill="none" height="120" stroke="black" strokeWidth="1.5" viewbox="0 0 100 100" width="120">
<path d="M10,10 Q50,10 50,50 T90,90" strokeLinecap="round"></path>
<path d="M80,90 L90,90 L90,80" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>

<div className="relative md:absolute md:top-12 md:-right-20 mt-12 md:mt-0 flex justify-center md:block transform scale-90 md:scale-100">

<div className="absolute top-0 -left-20 md:-left-32 w-[280px] h-[580px] bg-white rounded-[3rem] border-[8px] border-white shadow-2xl rotate-[-6deg] overflow-hidden hidden lg:block opacity-90 z-0">
<div className="px-6 py-6 bg-neutral-50 border-b border-neutral-100">
<div className="flex justify-between items-center mb-4">
<span className="text-xl font-medium tracking-tight">Markets</span>
<i className="w-5 h-5 text-neutral-400" data-lucide="map-pin"></i>
</div>
<div className="w-full bg-white h-10 rounded-xl border border-neutral-200 flex items-center px-3 gap-2">
<i className="w-4 h-4 text-neutral-400" data-lucide="search"></i>
<span className="text-sm text-neutral-400">Search crops...</span>
</div>
</div>
<div className="p-4 space-y-4">
<div className="bg-black text-white p-4 rounded-2xl">
<span className="text-xs text-neutral-400 uppercase">Kano Central Market</span>
<div className="flex justify-between items-end mt-2">
<span className="text-2xl font-medium tracking-tight">₦1,200</span>
<span className="text-xs bg-[#ccf32f] text-black px-2 py-1 rounded-full font-bold">Maize / kg</span>
</div>
</div>

<div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-neutral-100"><i className="w-5 h-5 text-orange-500" data-lucide="carrot"></i></div>
<div>
<p className="text-sm font-medium">Carrots</p>
<p className="text-xs text-neutral-500">Lagos Market</p>
</div>
</div>
<span className="text-sm font-medium text-green-600">₦850</span>
</div>
<div className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500"><i className="w-5 h-5" data-lucide="cherry"></i></div>
<div>
<p className="text-sm font-medium">Tomatoes</p>
<p className="text-xs text-neutral-500">Abuja Market</p>
</div>
</div>
<span className="text-sm font-medium text-green-600">₦1,400</span>
</div>
</div>
</div>

<div className="relative w-[300px] h-[600px] bg-black rounded-[3.5rem] border-[10px] border-black shadow-2xl z-10 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>

<div className="w-full h-full bg-black text-white pt-10 px-6 flex flex-col">

<div className="flex justify-between items-start mb-6">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black"><i className="w-5 h-5" data-lucide="scan-line"></i></div>
<div>
<h3 className="text-lg font-medium leading-none">Diagnosis</h3>
<span className="text-xs text-neutral-500">AI Analysis</span>
</div>
</div>
<div className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center">
<i className="w-4 h-4 text-neutral-400" data-lucide="more-vertical"></i>
</div>
</div>

<div className="relative w-full h-48 bg-neutral-800 rounded-2xl mb-6 overflow-hidden group">
<div className="absolute inset-0 bg-neutral-700 flex items-center justify-center">
<i className="w-16 h-16 text-neutral-500 opacity-50" data-lucide="leaf"></i>
</div>

<div className="absolute top-0 left-0 w-full h-1 bg-[#ccf32f] shadow-[0_0_15px_#ccf32f] animate-[scan_2s_ease-in-out_infinite]"></div>
<div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg">
<span className="text-xs font-medium text-white">Maize Crop</span>
</div>
</div>

<div className="mb-6">
<div className="flex items-center gap-2 mb-2">
<span className="w-2 h-2 rounded-full bg-red-500"></span>
<span className="text-xs text-neutral-400 uppercase tracking-wider">Detected Issue</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white">Fall Armyworm</h2>
<span className="text-red-400 text-sm font-medium">98% Confidence</span>
</div>

<div className="space-y-3 mb-6">
<p className="text-xs text-neutral-500 uppercase tracking-wider">Recommended Action</p>
<div className="bg-neutral-900 rounded-xl p-3 flex gap-3 items-center border border-neutral-800">
<div className="bg-neutral-800 p-2 rounded-lg text-[#ccf32f]">1</div>
<div className="text-sm text-neutral-300">Apply Neem oil extract spray in the evening.</div>
</div>
<div className="bg-neutral-900 rounded-xl p-3 flex gap-3 items-center border border-neutral-800">
<div className="bg-neutral-800 p-2 rounded-lg text-[#ccf32f]">2</div>
<div className="text-sm text-neutral-300">Check surrounding plants for larvae.</div>
</div>
</div>

<div className="mt-auto pb-8 flex gap-3">
<button className="flex-1 bg-neutral-800 hover:bg-neutral-700 text-white font-medium py-3 rounded-xl transition-colors text-sm">Save</button>
<button className="flex-1 bg-[#ccf32f] hover:bg-[#bce325] text-black font-medium py-3 rounded-xl transition-colors text-sm">Find Medicine</button>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 py-12 border-b border-neutral-100">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12">
<div className="text-center md:text-left">
<p className="text-3xl font-semibold tracking-tight">500+</p>
<p className="text-sm text-neutral-500">Farmers Onboarded</p>
</div>
<div className="w-px h-12 bg-neutral-200 hidden md:block"></div>
<div className="text-center md:text-left">
<p className="text-3xl font-semibold tracking-tight text-[#84cc16]">20–30%</p>
<p className="text-sm text-neutral-500">Reduction in Crop Losses</p>
</div>
<div className="w-px h-12 bg-neutral-200 hidden md:block"></div>
<div className="text-center md:text-left">
<p className="text-3xl font-semibold tracking-tight">15+</p>
<p className="text-sm text-neutral-500">Local Jobs Created</p>
</div>
<div className="w-px h-12 bg-neutral-200 hidden md:block"></div>
<div className="text-center md:text-left">
<p className="text-3xl font-semibold tracking-tight">3</p>
<p className="text-sm text-neutral-500">African Countries</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-20 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 max-w-2xl mx-auto">Smallholder farmers feed Africa but lack timely information.</h2>
<p className="text-lg text-neutral-500 max-w-3xl mx-auto leading-relaxed">
                Yield.AI provides clear, local, actionable insights to reduce losses and increase income. We bridge the gap between technology and the field.
            </p>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16">Key Benefits</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">

<div className="flex flex-col gap-4 items-start">
<div className="w-14 h-14 rounded-full bg-[#ccf32f] flex items-center justify-center">
<i className="w-7 h-7 text-black" data-lucide="scan-face"></i>
</div>
<div>
<h3 className="text-xl font-medium mb-2">Spot Disease Early</h3>
<p className="text-lg text-neutral-500 leading-relaxed">Photo-based diagnosis with instant AI analysis and clear, step-by-step treatment steps.</p>
</div>
</div>

<div className="flex flex-col gap-4 items-start">
<div className="w-14 h-14 rounded-full bg-[#ccf32f]/40 flex items-center justify-center">
<i className="w-7 h-7 text-black" data-lucide="trending-up"></i>
</div>
<div>
<h3 className="text-xl font-medium mb-2">Sell Smarter</h3>
<p className="text-lg text-neutral-500 leading-relaxed">Access live local market prices to negotiate better deals and increase your profit margins.</p>
</div>
</div>

<div className="flex flex-col gap-4 items-start">
<div className="w-14 h-14 rounded-full bg-[#ccf32f]/40 flex items-center justify-center">
<i className="w-7 h-7 text-black" data-lucide="cloud-sun"></i>
</div>
<div>
<h3 className="text-xl font-medium mb-2">Plan Confidently</h3>
<p className="text-lg text-neutral-500 leading-relaxed">Receive hyper-local weather forecasts tailored specifically for your farm location.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12 bg-neutral-50 rounded-[3rem] mb-24" id="how-it-works">
<div className="p-8 md:p-12">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-16 text-center">How It Works</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-neutral-100">
<div className="relative z-10">
<span className="text-6xl font-medium text-[#ccf32f]/50 absolute -top-4 -right-4">1</span>
<div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6" data-lucide="camera"></i>
</div>
<h3 className="text-xl font-medium mb-3">Snap a Photo</h3>
<p className="text-base text-neutral-500 leading-relaxed">Take a clear picture of your affected crop directly in the app.</p>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-neutral-100">
<div className="relative z-10">
<span className="text-6xl font-medium text-[#ccf32f]/50 absolute -top-4 -right-4">2</span>
<div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-medium mb-3">Get Diagnosis</h3>
<p className="text-base text-neutral-500 leading-relaxed">Our AI instantly identifies the disease and provides advice.</p>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300 border border-neutral-100">
<div className="relative z-10">
<span className="text-6xl font-medium text-[#ccf32f]/50 absolute -top-4 -right-4">3</span>
<div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-6 text-white">
<i className="w-6 h-6" data-lucide="sprout"></i>
</div>
<h3 className="text-xl font-medium mb-3">Take Action</h3>
<p className="text-base text-neutral-500 leading-relaxed">Treat your crops, track progress, and sell your produce.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 mb-24">
<div className="bg-black rounded-[2.5rem] p-8 md:p-20 relative overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[450px]">
<div className="relative z-10 w-full md:w-1/2">
<svg className="absolute -top-16 left-0 w-32 h-10 text-white/20" fill="none" stroke="currentColor" viewbox="0 0 100 20"><path d="M0,20 Q20,0 50,10 T100,20"></path></svg>
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6 leading-tight">
                        Farm dashboard: <br/>
                        costs, yields, profit.
                    </h2>
<p className="text-neutral-400 text-lg mb-8 max-w-sm">Manage your farm like a business. Track every expense and harvest to maximize your income.</p>
<button className="bg-white text-black text-sm font-medium px-6 py-3 rounded-full hover:bg-neutral-200 transition-colors flex items-center gap-2">
<i className="w-4 h-4" data-lucide="layout-dashboard"></i>
                        Open Dashboard
                    </button>
</div>

<div className="relative z-10 mt-12 md:mt-0 w-full max-w-xs transform md:translate-x-10">
<div className="bg-white rounded-3xl p-5 shadow-2xl relative">
<div className="text-center mb-4">
<span className="text-xs text-neutral-400 uppercase tracking-widest">Net Season Profit</span>
<h3 className="text-3xl font-medium tracking-tight">₦450,000</h3>
<span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold mt-1">+15% vs Last Season</span>
</div>
<div className="bg-black rounded-xl p-4 mb-4">
<div className="flex justify-between items-center text-white mb-2">
<span className="text-xs font-medium">Harvest Income</span>
<i className="w-4 h-4 text-neutral-500" data-lucide="more-horizontal"></i>
</div>
<div className="text-white text-lg font-medium">₦820,500</div>
<div className="flex gap-2 mt-3">
<button className="flex-1 bg-neutral-800 text-white text-[10px] py-1.5 rounded-lg border border-neutral-700">Add Sale</button>
<button className="flex-1 bg-neutral-800 text-white text-[10px] py-1.5 rounded-lg border border-neutral-700">History</button>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-neutral-100 flex items-center justify-center"><i className="w-3 h-3 fill-current" data-lucide="sprout"></i></div>
<span className="text-xs font-medium">Maize Sales</span>
</div>
<span className="text-xs font-medium text-green-600">+₦120,000</span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600"><i className="w-3 h-3" data-lucide="droplet"></i></div>
<span className="text-xs font-medium">Fertilizer Cost</span>
</div>
<span className="text-xs font-medium text-red-600">-₦45,000</span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-black via-black to-neutral-900">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neutral-800/30 rounded-full blur-3xl"></div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2 relative">

<div className="absolute -top-4 -left-4 w-full h-full bg-[#ccf32f] rounded-[2rem] transform -rotate-2"></div>

<div className="relative bg-neutral-950 rounded-[2rem] p-6 text-white shadow-xl h-64 overflow-hidden flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<p className="text-xs text-neutral-400">Average Maize Price</p>
<p className="text-2xl font-medium">₦1,250 <span className="text-sm text-green-400">/kg</span></p>
</div>
<span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">+12%</span>
</div>

<svg className="w-full h-24 opacity-90 overflow-visible mt-4" viewbox="0 0 300 100">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ccf32f" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#ccf32f" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,80 L40,60 L80,70 L120,40 L160,50 L200,30 L240,40 L300,10" fill="none" stroke="#ccf32f" strokeWidth="2"></path>
<path d="M0,80 L40,60 L80,70 L120,40 L160,50 L200,30 L240,40 L300,10 V100 H0 Z" fill="url(#gradient)"></path>
</svg>
<div className="flex justify-between text-[10px] text-neutral-500 mt-2">
<span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
</div>
</div>
</div>
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Real-Time Local Market Prices</h2>
<p className="text-lg text-neutral-500 leading-relaxed">
                    Sell smarter using live prices from nearby markets. Yield.AI tracks fluctuations so you know exactly when and where to sell your produce for the best profit.
                </p>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32 flex flex-col-reverse md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Offline Access &amp; <br/> Local Languages</h2>
<p className="text-lg text-neutral-500 leading-relaxed mb-6">
                    No internet? No problem. Yield.AI works offline and syncs when you are back online.
                </p>
<p className="text-lg text-neutral-500 leading-relaxed">
                    Designed for everyone. The app supports local languages including Swahili, Hausa, Yoruba, and French.
                </p>

<div className="mt-8 hidden md:block">
<svg fill="none" height="60" stroke="black" strokeWidth="1" viewbox="0 0 200 60" width="200">
<path d="M10,10 Q100,60 190,10"></path>
</svg>
</div>
</div>
<div className="w-full md:w-1/2 relative h-[400px]">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#ccf32f] rounded-full opacity-80"></div>

<div className="absolute top-10 left-10 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 w-48 animate-[bounce_3s_infinite]">
<div className="w-8 h-8 rounded-full bg-black flex items-center justify-center"><i className="w-4 h-4 text-white" data-lucide="wifi-off"></i></div>
<div>
<p className="text-xs font-semibold">Offline Mode</p>
<p className="text-[10px] text-neutral-500">Active</p>
</div>
<div className="ml-auto text-xs font-semibold text-green-600">Saved</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 w-56 z-10">
<div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center"><i className="w-4 h-4 text-white" data-lucide="languages"></i></div>
<div>
<p className="text-xs font-semibold">Hausa / Swahili</p>
<p className="text-[10px] text-neutral-500">Language Selected</p>
</div>
<div className="ml-auto">
<i className="w-4 h-4 text-green-500" data-lucide="check"></i>
</div>
</div>
<div className="absolute bottom-20 right-10 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 w-48 animate-[bounce_4s_infinite]">
<div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center"><i className="w-4 h-4 text-green-700" data-lucide="mic"></i></div>
<div>
<p className="text-xs font-semibold">Voice Guide</p>
<p className="text-[10px] text-neutral-500">Playing</p>
</div>
<div className="ml-auto">
<div className="flex gap-0.5 items-end h-3">
<div className="w-1 h-1 bg-black animate-pulse"></div>
<div className="w-1 h-3 bg-black animate-pulse"></div>
<div className="w-1 h-2 bg-black animate-pulse"></div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="bg-neutral-900 rounded-[2.5rem] overflow-hidden relative">
<div className="aspect-video w-full flex items-center justify-center bg-neutral-800 group cursor-pointer relative">

<div className="absolute inset-0 bg-neutral-800 flex flex-col items-center justify-center text-center p-6">
<div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform mb-4">
<i className="w-8 h-8 text-white ml-1 fill-current" data-lucide="play"></i>
</div>
<h3 className="text-white text-xl md:text-2xl font-medium mb-2">See how Yield.AI helps a smallholder farmer</h3>
<p className="text-neutral-400">90 seconds — from diagnosis to sale</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 text-center">Stories from the Field</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-[#ccf32f]/10 p-8 rounded-[2rem] border border-[#ccf32f]/20">
<i className="w-8 h-8 text-[#ccf32f] mb-4 fill-current" data-lucide="quote"></i>
<p className="text-xl font-medium mb-6">“Yield.AI helped me detect disease early and save my harvest. I treated the maize just in time.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200"></div> 
<div>
<p className="font-semibold text-sm">Amina</p>
<p className="text-xs text-neutral-500">Farmer, Kano</p>
</div>
</div>
</div>
<div className="bg-neutral-50 p-8 rounded-[2rem]">
<i className="w-8 h-8 text-neutral-300 mb-4 fill-current" data-lucide="quote"></i>
<p className="text-xl font-medium mb-6">“Knowing market prices helped me sell at a better rate. I stopped selling blindly to middlemen.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-neutral-200"></div> 
<div>
<p className="font-semibold text-sm">Samuel</p>
<p className="text-xs text-neutral-500">Farmer, Kisumu</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24" id="pricing">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 text-center">Simple Pricing</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-[2rem] border border-neutral-200 hover:shadow-lg transition-shadow">
<h3 className="text-xl font-semibold mb-2">Free</h3>
<p className="text-sm text-neutral-500 mb-6">Essential tools for every farmer.</p>
<ul className="space-y-3 mb-8">
<li className="flex gap-2 text-sm"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Disease diagnosis</li>
<li className="flex gap-2 text-sm"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Weather alerts</li>
<li className="flex gap-2 text-sm"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Basic market prices</li>
</ul>
<button className="w-full py-3 rounded-full border border-black font-medium hover:bg-neutral-50 transition-colors">Get Started</button>
</div>

<div className="p-8 rounded-[2rem] bg-black text-white relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#ccf32f] text-black text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
<h3 className="text-xl font-semibold mb-2">Pro</h3>
<p className="text-sm text-neutral-400 mb-6">Full farm management power.</p>
<ul className="space-y-3 mb-8">
<li className="flex gap-2 text-sm"><i className="w-4 h-4 text-[#ccf32f]" data-lucide="check"></i> Full farm management</li>
<li className="flex gap-2 text-sm"><i className="w-4 h-4 text-[#ccf32f]" data-lucide="check"></i> Market analytics</li>
<li className="flex gap-2 text-sm"><i className="w-4 h-4 text-[#ccf32f]" data-lucide="check"></i> Priority support</li>
</ul>
<button className="w-full py-3 rounded-full bg-[#ccf32f] text-black font-medium hover:bg-[#bce325] transition-colors">Go Pro</button>
</div>

<div className="p-8 rounded-[2rem] border border-neutral-200 hover:shadow-lg transition-shadow">
<h3 className="text-xl font-semibold mb-2">Marketplace</h3>
<p className="text-sm text-neutral-500 mb-6">Connect directly with buyers.</p>
<ul className="space-y-3 mb-8">
<li className="flex gap-2 text-sm"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Low commission</li>
<li className="flex gap-2 text-sm"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Pay only when you sell</li>
<li className="flex gap-2 text-sm"><i className="w-4 h-4 text-green-500" data-lucide="check"></i> Verified buyers</li>
</ul>
<button className="w-full py-3 rounded-full border border-black font-medium hover:bg-neutral-50 transition-colors">Join Marketplace</button>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-24">
<h2 className="text-3xl font-medium tracking-tight mb-8 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-neutral-50 p-6 rounded-2xl cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none">
<span>Does it work without internet?</span>
<span className="transition group-open:rotate-180"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-neutral-600 mt-4 text-sm leading-relaxed">Yes. You can scan crops and check saved data offline. The app syncs automatically when you connect to the internet.</p>
</details>
<details className="group bg-neutral-50 p-6 rounded-2xl cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none">
<span>What languages are supported?</span>
<span className="transition group-open:rotate-180"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-neutral-600 mt-4 text-sm leading-relaxed">We support English, Swahili, Hausa, Yoruba, and French, with more local languages coming soon.</p>
</details>
<details className="group bg-neutral-50 p-6 rounded-2xl cursor-pointer">
<summary className="flex justify-between items-center font-medium list-none">
<span>Is my data safe?</span>
<span className="transition group-open:rotate-180"><i className="w-5 h-5" data-lucide="chevron-down"></i></span>
</summary>
<p className="text-neutral-600 mt-4 text-sm leading-relaxed">Yes. All user data is encrypted and protected. We do not share your personal farm data without permission.</p>
</details>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24 bg-[#ccf32f]/20 rounded-[3rem] p-12 text-center" id="support">
<h2 className="text-3xl font-medium tracking-tight mb-4">Need help getting started?</h2>
<p className="text-neutral-600 mb-8 max-w-xl mx-auto">Our community field agents are ready to assist you. Contact us via Phone or WhatsApp.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="phone"></i> Call Support
                 </button>
<button className="bg-green-600 text-white px-6 py-3 rounded-full font-medium flex items-center justify-center gap-2">
<i className="w-4 h-4" data-lucide="message-circle"></i> WhatsApp Us
                 </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-24 text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8">Start growing better <br/> today.</h2>
<button className="bg-black text-white text-base font-medium px-8 py-4 rounded-full hover:bg-neutral-800 transition-colors inline-flex items-center gap-2">
<i className="w-5 h-5" data-lucide="download"></i>
                Download App
            </button>
</section>
</main>

<footer className="bg-black text-white pt-20 pb-10 rounded-t-[3rem] mt-10">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-neutral-800 pb-16">

<div className="col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded-full bg-[#ccf32f] flex items-center justify-center">
<i className="w-3 h-3 text-black" data-lucide="leaf"></i>
</div>
<span className="text-lg font-medium">Yield.AI</span>
</div>
<p className="text-sm text-neutral-400">Starting in Nigeria, expanding across Africa.</p>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6">Product</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Marketplace</a></li>
<li><a className="hover:text-white transition-colors" href="#">Success Stories</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6">Company</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Data Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-semibold text-white mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-neutral-400">
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="mail"></i> hello@yield.ai</li>
<li className="flex items-center gap-2"><i className="w-4 h-4" data-lucide="phone"></i> +234 800 YIELD AI</li>
</ul>
</div>
</div>
<div className="flex justify-between items-center pt-8 text-neutral-500 text-sm">
<p>© 2024 Agro Yield Africa.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="facebook"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="instagram"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
