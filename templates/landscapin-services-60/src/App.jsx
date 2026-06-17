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
      

<nav className="fixed start-0 z-50 bg-[#266610] w-full border-white/10 border-b top-0 backdrop-blur-md">
<div className="flex flex-wrap bg-[#266610] max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<a className="flex items-center space-x-3 rtl:space-x-reverse" href="#">
<img alt="Gingery Bros Logo" className="bg-center w-60 h-40 object-cover rounded-lg shadow-sm scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ba4c78a9-da12-4770-82d9-706ede2c5d33_320w.jpg"/>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-white bg-orange-600 hover:bg-orange-500 transition-colors focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full text-base px-5 py-2.5 text-center shadow-lg shadow-orange-900/20" type="button">Get a Quote</button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-100 rounded-lg md:hidden hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-400" data-collapse-toggle="navbar-sticky" style={{}} type="button">
<span className="sr-only">Open main menu</span>
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-green-800 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0" style={{}}>
<li>
<a className="block py-2 px-3 text-green-100 rounded hover:bg-green-800 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#services" style={{}}>Services</a>
</li>
<li className="">
<a className="block py-2 px-3 text-green-100 rounded hover:bg-green-800 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#about" style={{}}>About</a>
</li>
<li>
<a className="block py-2 px-3 text-green-100 rounded hover:bg-green-800 md:hover:bg-transparent md:hover:text-white md:p-0 transition-colors" href="#work" style={{}}>Our Work</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="relative bg-green-900 pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden" style={{}}>
<div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&amp;w=2500&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-overlay"></div>

<div className="absolute inset-0 bg-gradient-to-b from-green-900/50 via-green-900/80 to-green-900 z-0" style={{}}></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-800/50 border border-green-700 text-green-100 text-sm font-medium mb-8 backdrop-blur-sm" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                Accepting new clients for the season
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-8 max-w-4xl mx-auto leading-[1.1]">
                Keep your lawn <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-200" style={{}}>pristine</span> without lifting a finger.
            </h1>
<p className="text-xl text-green-100/80 mb-10 max-w-2xl mx-auto leading-relaxed" style={{}}>
                Professional landscaping services from two brothers who care. We handle the mowing, mulch, and trimming so you can enjoy your weekend.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="hover:bg-orange-500 transition-all shadow-orange-900/30 flex text-lg font-medium text-white bg-orange-600 rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl gap-x-2 gap-y-2 items-center justify-center">
                    Schedule Service
                    <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="text-white bg-white/10 hover:bg-white/15 border border-white/10 backdrop-blur-sm transition-all font-medium rounded-full text-lg px-8 py-4 flex items-center justify-center gap-2" style={{}}>
                    View Our Work
                </button>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4" style={{}}>Complete Outdoor Care</h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">We provide a full suite of services to maintain the health and beauty of your property.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300" style={{}}>
<div className="w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300" style={{}}>
<svg className="lucide lucide-scissors w-7 h-7 text-green-700" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight" style={{}}>Lawn Maintenance</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        Ongoing care to keep grass healthy, green, and evenly cut — mowing, edging, trimming, and regular upkeep for a perfect finish.
                    </p>
</div>

<div className="group p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300" style={{}}>
<div className="w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300" style={{}}>
<svg className="lucide lucide-layers w-7 h-7 text-orange-600" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight" style={{}}>Mulch &amp; Rock Installation</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        Fresh mulch or decorative rock to boost curb appeal, retain soil moisture, and give garden beds a clean, finished look.
                    </p>
</div>

<div className="group p-8 bg-slate-50 rounded-3xl border border-slate-200 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-900/5 transition-all duration-300" style={{}}>
<div className="w-14 h-14 bg-white rounded-2xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300" style={{}}>
<svg className="lucide lucide-trees w-7 h-7 text-green-700" data-lucide="trees" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"></path><path d="M7 16v6"></path><path d="M13 19v3"></path><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path></svg>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3 tracking-tight" style={{}}>Tree &amp; Shrub Trimming</h3>
<p className="text-lg text-slate-600 leading-relaxed">
                        Shaping, pruning, and cutting back overgrown branches for safer, better-looking trees and bushes that grow stronger over time.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="w-full lg:w-1/2">
<div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl" style={{}}>
<img alt="Beautifully landscaped backyard" className="w-full h-auto object-cover" src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 shadow-lg max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="bg-green-100 p-2 rounded-lg text-green-700" style={{}}>
<svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="font-semibold text-slate-900" style={{}}>Consistency Guaranteed</span>
</div>
<p className="text-slate-600 text-sm">We show up when we say we will, ensuring your lawn never looks neglected.</p>
</div>
</div>
</div>
<div className="w-full lg:w-1/2">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6" style={{}}>Why choose Gingery Bros?</h2>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">
                        We aren't a faceless franchise. We are a locally owned operation committed to detail, reliability, and treating your property like it's our own.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-orange-600 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900" style={{}}>Attention to Detail</h4>
<p className="text-slate-500 mt-1">We don't just mow and go. We edge, blow off hard surfaces, and ensure a pristine finish.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-orange-600 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h4 className="text-lg font-medium text-slate-900" style={{}}>Transparent Pricing</h4>
<p className="text-slate-500 mt-1">No hidden fees. We provide clear, upfront estimates for all projects.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center mt-1" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-orange-600 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-slate-900" style={{}}>Local Expertise</h4>
<p className="text-slate-500 mt-1">We understand the local soil and climate conditions to recommend the best care.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="mb-8 flex justify-center text-orange-500 gap-1">
<svg className="lucide lucide-star w-6 h-6 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-6 h-6 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-6 h-6 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-6 h-6 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-6 h-6 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h3 className="text-2xl md:text-4xl font-medium text-slate-900 tracking-tight leading-snug mb-8" style={{}}>
                "The Gingery Brothers completely transformed our overgrown backyard into a space we actually want to use. Their attention to mulch lines and trimming is unmatched."
            </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-bold text-lg" style={{}}>JS</div>
<div className="text-left">
<div className="font-semibold text-slate-900" style={{}}>James Sullivan</div>
<div className="text-slate-500 text-sm">Homeowner</div>
</div>
</div>
</div>
</section>

<section className="py-6">
<div className="max-w-7xl mx-auto px-6">
<div className="relative rounded-[2.5rem] bg-green-900 overflow-hidden px-8 py-20 md:px-20 md:py-24 text-center" style={{}}>

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
<div className="absolute -top-24 -left-24 w-96 h-96 bg-green-800 rounded-full blur-3xl opacity-50" style={{}}></div>
<div className="absolute -bottom-24 -right-24 w-96 h-96 bg-green-800 rounded-full blur-3xl opacity-50" style={{}}></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to upgrade your curb appeal?</h2>
<p className="text-xl text-green-100/80 mb-10" style={{}}>Get a free estimate for lawn maintenance, trimming, or installation today.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-orange-600 hover:bg-orange-500 text-white transition-all font-medium rounded-full text-lg px-8 py-4 shadow-xl shadow-black/20">
                            Get Your Free Quote
                        </button>
<button className="bg-transparent border border-white/20 hover:bg-white/10 text-white transition-all font-medium rounded-full text-lg px-8 py-4">
                            Call (555) 123-4567
                        </button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-12" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div className="max-w-sm">
<a className="flex items-center space-x-3 mb-6" href="#">
<img alt="Gingery Bros Logo" className="h-12 w-12 rounded-lg shadow-sm" src="https://i.imgur.com/2p1x4xQ.jpg"/>
<span className="self-center text-xl font-semibold whitespace-nowrap text-green-900 tracking-tight" style={{}}>Gingery Bros</span>
</a>
<p className="text-slate-500 text-lg">Professional landscaping services dedicated to making your outdoor space beautiful, healthy, and inviting.</p>
</div>
<div className="grid grid-cols-2 gap-12 sm:gap-24">
<div>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4" style={{}}>Services</h3>
<ul className="space-y-3">
<li><a className="text-slate-500 hover:text-orange-600 transition-colors" href="#" style={{}}>Lawn Maintenance</a></li>
<li><a className="text-slate-500 hover:text-orange-600 transition-colors" href="#" style={{}}>Mulch &amp; Rock</a></li>
<li><a className="text-slate-500 hover:text-orange-600 transition-colors" href="#" style={{}}>Tree Trimming</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4" style={{}}>Company</h3>
<ul className="space-y-3">
<li><a className="text-slate-500 hover:text-orange-600 transition-colors" href="#" style={{}}>About Us</a></li>
<li><a className="text-slate-500 hover:text-orange-600 transition-colors" href="#" style={{}}>Contact</a></li>
<li><a className="text-slate-500 hover:text-orange-600 transition-colors" href="#" style={{}}>Privacy Policy</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-slate-400 text-sm">© 2024 Gingery Brothers Landscaping. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-slate-400 hover:text-green-700 transition-colors" href="#" style={{}}>
<span className="sr-only">Facebook</span>
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="text-slate-400 hover:text-green-700 transition-colors" href="#" style={{}}>
<span className="sr-only">Instagram</span>
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-slate-400 hover:text-green-700 transition-colors" href="#" style={{}}>
<span className="sr-only">Twitter</span>
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
