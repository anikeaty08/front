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
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:sprout" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-zinc-900 uppercase">Dakshayani</span>
<span className="text-[0.6rem] font-medium text-emerald-600 tracking-wider">ದಾಕ್ಷಾಯಣಿ</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#mission">Mission</a>
<a className="hover:text-zinc-900 transition-colors" href="#products">Products</a>
<a className="hover:text-zinc-900 transition-colors" href="#hubs">Hubs</a>
<a className="hover:text-zinc-900 transition-colors" href="#app">App</a>
<a className="hover:text-zinc-900 transition-colors" href="#blog">News</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-zinc-600 hover:text-zinc-900" href="#login">Sign in</a>
<a className="bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-900/10" href="#register">
                    Farmer Join
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-50/50 via-white to-white -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Empowering Rural Agriculture
                </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                    Turning Waste into <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Sustainable Wealth.</span>
</h1>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed max-w-lg">
                    The Agri-Waste to Value Hub (DAKSHAYANI) connects farmers to the circular economy. Convert stubble and waste into organic fertilizers and biodegradable products while earning steady income.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20">
                        Start Contributing
                        <span className="iconify" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</button>
<button className="bg-white border border-zinc-200 text-zinc-700 px-8 py-3 rounded-full font-medium hover:bg-zinc-50 transition-all flex items-center justify-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="18"></span>
                        How it works
                    </button>
</div>
<div className="mt-12 flex items-center gap-8 text-zinc-400">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 border-2 border-white"></div>
<div className="w-10 h-10 rounded-full bg-zinc-200 border-2 border-white"></div>
<div className="w-10 h-10 rounded-full bg-zinc-300 border-2 border-white"></div>
</div>
<p className="text-sm"><strong className="text-zinc-900 font-medium">2,400+</strong> Farmers Registered</p>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-[2rem] blur-2xl opacity-50 -z-10"></div>
<div className="bg-white border border-zinc-100 rounded-[2rem] shadow-2xl p-2 overflow-hidden">
<img alt="Sustainable Farming" className="rounded-[1.5rem] w-full object-cover h-[500px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">Impact Tracker</span>
<span className="iconify text-emerald-600" data-icon="lucide:trending-up" data-width="16"></span>
</div>
<div className="flex justify-between items-end">
<div>
<p className="text-2xl font-semibold text-zinc-900 tracking-tight">12.5 Tons</p>
<p className="text-xs text-zinc-500">Waste Processed this week</p>
</div>
<div className="h-8 w-24 bg-emerald-50 rounded flex gap-1 items-end p-1">
<div className="w-1/4 h-1/2 bg-emerald-200 rounded-sm"></div>
<div className="w-1/4 h-3/4 bg-emerald-300 rounded-sm"></div>
<div className="w-1/4 h-2/3 bg-emerald-400 rounded-sm"></div>
<div className="w-1/4 h-full bg-emerald-500 rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">From Waste to Wonder</h2>
<p className="text-zinc-500 text-lg">We transform raw agricultural by-products into high-value, eco-friendly goods, creating a closed-loop system that benefits both the farmer and the planet.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-zinc-200 flex items-center justify-center text-emerald-600 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:flower-2" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3">Organic Fertilizers</h3>
<p className="text-zinc-500 leading-relaxed text-sm">Nutrient-rich compost derived from crop stubble that restores soil health and reduces dependency on chemical alternatives.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-zinc-200 flex items-center justify-center text-orange-500 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:flame" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3">Biogas Pellets</h3>
<p className="text-zinc-500 leading-relaxed text-sm">Compressed biomass fuel pellets that provide clean energy for cooking and industrial heating, replacing coal and wood.</p>
</div>

<div className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-zinc-200 flex items-center justify-center text-blue-500 mb-6 shadow-sm group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:package-open" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-3">Eco Packaging</h3>
<p className="text-zinc-500 leading-relaxed text-sm">Biodegradable packaging solutions made from plant fibers, offering a sustainable alternative to single-use plastics.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-zinc-300 overflow-hidden relative">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">Earn Points. Get Paid.<br/>It's that simple.</h2>
<p className="text-zinc-400 text-lg mb-8">Our digital rewards system ensures transparency. Every kilogram of waste contributes to your digital wallet, which can be redeemed for cash or agricultural supplies.</p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-none w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 font-mono text-sm">1</div>
<div>
<h4 className="text-white font-medium">Register &amp; Drop-off</h4>
<p className="text-sm text-zinc-500 mt-1">Sign up via the app and bring your waste to the nearest hub.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 font-mono text-sm">2</div>
<div>
<h4 className="text-white font-medium">Digital Weighing</h4>
<p className="text-sm text-zinc-500 mt-1">Waste is weighed digitally, and points are credited instantly to your account.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 font-mono text-sm">3</div>
<div>
<h4 className="text-white font-medium">Redeem Rewards</h4>
<p className="text-sm text-zinc-500 mt-1">Convert points to direct bank transfers or purchase seeds and tools.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-flex items-center text-white border-b border-emerald-500 pb-1 hover:text-emerald-400 transition-colors" href="#register">
                            Learn about the Point System
                            <span className="iconify ml-2" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>

<div className="relative mx-auto lg:mr-0">
<div className="w-[300px] h-[600px] bg-zinc-950 border-[8px] border-zinc-800 rounded-[3rem] shadow-2xl overflow-hidden relative">

<div className="bg-zinc-900 p-6 pt-10 border-b border-zinc-800">
<div className="flex justify-between items-center mb-6">
<span className="text-xs text-zinc-400">Good Morning, Ramesh</span>
<div className="w-8 h-8 rounded-full bg-zinc-700"></div>
</div>
<div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-4 shadow-lg">
<span className="text-xs text-emerald-100 font-medium opacity-80">Total Balance</span>
<div className="text-3xl font-semibold text-white mt-1">2,450 <span className="text-sm font-normal">pts</span></div>
<div className="mt-4 flex gap-2">
<button className="flex-1 bg-white/20 text-white text-xs py-2 rounded-lg backdrop-blur-sm">Withdraw</button>
<button className="flex-1 bg-white/20 text-white text-xs py-2 rounded-lg backdrop-blur-sm">History</button>
</div>
</div>
</div>

<div className="p-6 space-y-4">
<div className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Recent Activity</div>
<div className="flex items-center justify-between p-3 bg-zinc-900 rounded-xl border border-zinc-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
<span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</div>
<div>
<div className="text-sm text-white font-medium">Stubble Deposit</div>
<div className="text-[10px] text-zinc-500">Hub #42 • Today</div>
</div>
</div>
<div className="text-sm text-emerald-400 font-medium">+150</div>
</div>
<div className="flex items-center justify-between p-3 bg-zinc-900 rounded-xl border border-zinc-800">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
<span className="iconify" data-icon="lucide:arrow-down" data-width="14"></span>
</div>
<div>
<div className="text-sm text-white font-medium">Husk Deposit</div>
<div className="text-[10px] text-zinc-500">Hub #12 • Yesterday</div>
</div>
</div>
<div className="text-sm text-emerald-400 font-medium">+80</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-zinc-900 border-t border-zinc-800 p-4 flex justify-around">
<span className="iconify text-emerald-500" data-icon="lucide:home" data-width="20"></span>
<span className="iconify text-zinc-600" data-icon="lucide:map-pin" data-width="20"></span>
<span className="iconify text-zinc-600" data-icon="lucide:user" data-width="20"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-zinc-200" id="hubs">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-4">Centralized Hubs</h2>
<p className="text-zinc-500">Locate the nearest collection center. Our hubs are equipped with digital weighing scales and processing units to ensure quick turnaround.</p>
</div>
<button className="bg-white border border-zinc-300 text-zinc-700 px-6 py-2 rounded-lg text-sm font-medium hover:bg-zinc-50 flex items-center gap-2">
<span className="iconify" data-icon="lucide:locate-fixed" data-width="16"></span>
                    Find near me
                </button>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 h-96 bg-zinc-200 rounded-2xl border border-zinc-300 relative overflow-hidden group">

<div className="absolute inset-0 bg-zinc-100">
<div className="absolute top-1/2 left-1/3 w-4 h-4 bg-emerald-500 rounded-full ring-4 ring-emerald-100 z-10 hover:scale-125 transition-transform cursor-pointer"></div>
<div className="absolute top-1/3 left-1/2 w-4 h-4 bg-zinc-400 rounded-full z-10 hover:bg-emerald-500 transition-colors cursor-pointer"></div>
<div className="absolute bottom-1/3 right-1/4 w-4 h-4 bg-zinc-400 rounded-full z-10 hover:bg-emerald-500 transition-colors cursor-pointer"></div>

<svg className="absolute inset-0 w-full h-full stroke-zinc-300" strokeWidth="2">
<path d="M0 100 Q 200 200 400 150 T 800 300" fill="none"></path>
<path d="M100 0 Q 150 200 300 400" fill="none"></path>
</svg>
</div>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur p-4 rounded-xl border border-zinc-200 shadow-sm max-w-xs">
<h4 className="font-medium text-zinc-900">Mandya District Hub</h4>
<p className="text-xs text-zinc-500 mt-1">Open: Mon-Sat, 06:00 AM - 06:00 PM</p>
<p className="text-xs text-zinc-500">+91 98765 43210</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-zinc-200 flex flex-col justify-center">
<div className="mb-6">
<span className="iconify text-emerald-500 opacity-50" data-icon="lucide:quote" data-width="40"></span>
</div>
<p className="text-zinc-600 text-lg leading-relaxed mb-6">"Before Dakshayani, I used to burn crop stubble because clearing it was expensive. Now, I drive to the hub, drop it off, and get paid instantly on my phone. It's a lifesaver."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 font-bold">
                            K
                        </div>
<div>
<div className="font-medium text-zinc-900">Kumar Swamy</div>
<div className="text-xs text-zinc-500">Farmer, Hassan District</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12">

<div className="flex flex-col h-full justify-between">
<div>
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6 border border-purple-100">
<span className="iconify" data-icon="lucide:briefcase" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-2xl font-semibold text-zinc-900 mb-4">Creating Local Jobs</h3>
<p className="text-zinc-500 mb-6">Beyond helping farmers, we are building a rural workforce. We offer employment in:</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-zinc-600">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle" data-width="18"></span>
                                Waste Processing Machine Operators
                            </li>
<li className="flex items-center gap-3 text-zinc-600">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle" data-width="18"></span>
                                Logistics and Distribution Drivers
                            </li>
<li className="flex items-center gap-3 text-zinc-600">
<span className="iconify text-emerald-500" data-icon="lucide:check-circle" data-width="18"></span>
                                App Support Specialists
                            </li>
</ul>
</div>
<a className="text-purple-600 font-medium hover:text-purple-700 inline-flex items-center gap-2" href="#">
                        View Openings <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="bg-emerald-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
<div className="relative z-10">
<h3 className="text-2xl font-semibold mb-4">Stop the Burn.</h3>
<p className="text-emerald-100/80 mb-8 leading-relaxed">
                            Crop burning releases particulate matter (PM2.5) contributing significantly to air pollution. By participating in our program, you directly contribute to cleaner air and healthier soil for the next generation.
                        </p>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/10 backdrop-blur border border-white/10 p-4 rounded-xl">
<div className="text-2xl font-semibold">40%</div>
<div className="text-xs text-emerald-200">Reduction in CO2</div>
</div>
<div className="bg-white/10 backdrop-blur border border-white/10 p-4 rounded-xl">
<div className="text-2xl font-semibold">100%</div>
<div className="text-xs text-emerald-200">Biodegradable</div>
</div>
</div>
</div>

<span className="iconify absolute -bottom-10 -right-10 text-emerald-800 opacity-50 rotate-12" data-icon="lucide:leaf" data-width="250"></span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-zinc-200 open:border-emerald-200 open:ring-4 open:ring-emerald-50 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-zinc-900">What types of waste can I sell?</span>
<span className="iconify transform group-open:rotate-180 transition-transform text-zinc-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-zinc-500 leading-relaxed text-sm">
                        We currently accept paddy straw, sugarcane bagasse, coconut husks, and corn cobs. Please ensure the waste is dry and free from plastic contamination.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-zinc-200 open:border-emerald-200 open:ring-4 open:ring-emerald-50 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-zinc-900">How do I get paid?</span>
<span className="iconify transform group-open:rotate-180 transition-transform text-zinc-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-zinc-500 leading-relaxed text-sm">
                        Payments are processed via the Dakshayani App directly to your linked bank account via UPI or IMPS once you reach a minimum of 500 points.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-zinc-200 open:border-emerald-200 open:ring-4 open:ring-emerald-50 transition-all">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-medium text-zinc-900">Is transportation provided?</span>
<span className="iconify transform group-open:rotate-180 transition-transform text-zinc-400" data-icon="lucide:chevron-down"></span>
</summary>
<div className="px-6 pb-6 text-zinc-500 leading-relaxed text-sm">
                        For quantities above 500kg, we offer a pickup service for a nominal fee deducted from your earnings. For smaller amounts, please visit your local hub.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center mb-12">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900">Latest Updates</h2>
<a className="text-sm font-medium text-emerald-600 hover:text-emerald-700" href="#">View all news</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="flex flex-col group cursor-pointer">
<div className="h-48 bg-zinc-100 rounded-2xl overflow-hidden mb-4 border border-zinc-200">
<img alt="Field" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-xs text-emerald-600 font-medium mb-2">Success Stories</span>
<h3 className="text-lg font-medium text-zinc-900 mb-2 group-hover:text-emerald-700 transition-colors">How 50 farmers in Belagavi increased income by 20%</h3>
<p className="text-sm text-zinc-500 line-clamp-2">A case study on the adoption of the waste-to-wealth model in the northern districts.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="h-48 bg-zinc-100 rounded-2xl overflow-hidden mb-4 border border-zinc-200">
<img alt="Recycling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=2026&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs text-emerald-600 font-medium mb-2">Technology</span>
<h3 className="text-lg font-medium text-zinc-900 mb-2 group-hover:text-emerald-700 transition-colors">App Update: Real-time tracking is now live</h3>
<p className="text-sm text-zinc-500 line-clamp-2">Version 2.0 brings live GPS tracking for pickup trucks and faster payment processing.</p>
</article>

<article className="flex flex-col group cursor-pointer">
<div className="h-48 bg-zinc-100 rounded-2xl overflow-hidden mb-4 border border-zinc-200">
<img alt="Seedlings" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<span className="text-xs text-emerald-600 font-medium mb-2">Community</span>
<h3 className="text-lg font-medium text-zinc-900 mb-2 group-hover:text-emerald-700 transition-colors">Workshop: Making compost at home</h3>
<p className="text-sm text-zinc-500 line-clamp-2">Join us this Sunday at the Mandya hub for a free workshop on vermicomposting.</p>
</article>
</div>
</div>
</section>

<footer className="bg-zinc-950 text-zinc-400 py-20 border-t border-zinc-800">
<div className="max-w-7xl mx-auto px-6">

<div className="bg-zinc-900 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-zinc-800 mb-20">
<div>
<h3 className="text-2xl font-semibold text-white mb-2">Have questions?</h3>
<p className="text-zinc-400">Reach out to our support team for assistance with registration or the app.</p>
</div>
<div className="flex gap-4 w-full md:w-auto">
<input className="bg-zinc-950 border border-zinc-700 text-white px-4 py-3 rounded-xl w-full md:w-64 focus:outline-none focus:border-emerald-600 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors whitespace-nowrap">
                        Contact Us
                    </button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<span className="iconify text-emerald-500" data-icon="lucide:sprout" data-width="24"></span>
<span className="text-white font-semibold tracking-tight">DAKSHAYANI</span>
</div>
<p className="text-sm leading-relaxed mb-6">Empowering farmers, reducing waste, and building a sustainable future for rural India.</p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="20"></span></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Project</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-emerald-500 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Our Mission</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Resources</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-emerald-500 transition-colors" href="#">Farmer Guide</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Hub Locations</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">App Download</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-emerald-500 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-emerald-500 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
<p>© 2023 The Agri-Waste to Value Hub (ದಾಕ್ಷಾಯಣಿ). All rights reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Systems Operational
                </div>
</div>
</div>
</footer>

    </>
  );
}
