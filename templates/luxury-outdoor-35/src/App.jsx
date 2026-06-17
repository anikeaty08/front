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
      

<nav className="fixed bg-zinc-950/80 w-full z-50 border-white/5 border-b top-0 left-0 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-height="20" data-icon="lucide:sparkles" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="text-lg font-medium tracking-[0.2em] text-white uppercase">Aurora</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-zinc-300">
<a className="hover:text-white transition-colors" href="#tubs">Hot Tubs</a>
<a className="hover:text-white transition-colors" href="#saunas">Saunas</a>
<a className="hover:text-white transition-colors" href="#jacuzzis">Jacuzzis</a>
</div>
<a className="hidden md:flex items-center gap-2 px-5 py-2 text-xs font-medium uppercase tracking-wider border border-white/10 hover:border-amber-500/50 hover:text-amber-400 transition-all rounded-full bg-white/5 hover:bg-white/10" href="#contact">
                Book Consultation
            </a>

<button className="md:hidden text-zinc-300">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Spa" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1668461363398-1fd41bf2ca79?w=3840&amp;q=80"/>
<div className="bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-zinc-950/30 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8 mt-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 backdrop-blur-sm text-amber-300 text-xs tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                New Collection 2024
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight">Sanctuary in your <br/> <span className="gold-gradient-text font-normal italic" style={{}}>own backyard.</span></h1>
<p className="text-lg md:text-xl font-light text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                Experience the pinnacle of outdoor luxury with our handcrafted hot tubs, infrared saunas, and hydrotherapy jacuzzis. Designed for silence, built for serenity.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
<a className="group relative px-8 py-3 bg-amber-500 text-zinc-950 text-sm font-medium rounded-full overflow-hidden transition-all hover:bg-amber-400" href="#collection">
<span className="relative z-10 flex items-center gap-2">
                        Explore Collection
                        <svg aria-hidden="true" className="iconify group-hover:translate-x-1 transition-transform iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</a>
<a className="flex items-center gap-3 px-8 py-3 text-sm font-medium text-white hover:text-amber-400 transition-colors" href="#video">
<span className="flex items-center justify-center w-8 h-8 rounded-full border border-current">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:play" data-width="12" height="12" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
                    Watch Film
                </a>
</div>
</div>
</header>

<section className="py-24 bg-zinc-950 border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="space-y-4">
<div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:waves" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Hydrotherapy Logic</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Engineered jets placed precisely to target muscle groups, offering a therapeutic massage experience.
                    </p>
</div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:thermometer-sun" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2m0 4a4 4 0 0 0-1.645 7.647M2 12h2m16 2.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0zM4.93 4.93l1.41 1.41m0 11.32l-1.41 1.41" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Smart Climate</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Intelligent heating systems that adapt to ambient temperature, ensuring efficiency and perfect heat.
                    </p>
</div>
<div className="space-y-4">
<div className="w-12 h-12 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-amber-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Lifetime Craftsmanship</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Built with sustainably sourced cedar and aerospace-grade acrylics, guaranteed to last a lifetime.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 text-zinc-900" id="collection">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Curated Wellness</h2>
<p className="text-zinc-500 font-light text-lg">Select from our three distinct lines of outdoor restoration, each tailored for specific therapeutic needs.</p>
</div>

<div className="mb-24" id="tubs">
<div className="flex items-center gap-3 mb-8">
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-icon="lucide:droplets" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></g></svg>
<h3 className="text-2xl font-medium tracking-tight">The Hot Tub Series</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 bg-white">
<div className="aspect-video bg-zinc-100 relative overflow-hidden">
<img alt="Serenity Tub" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1634253539593-04009bf64a55?w=800&amp;q=80" style={{}}/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                                2-Person
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight">Aurora Serenity</h4>
<p className="text-sm text-zinc-500 font-light">Intimate &amp; Compact</p>
</div>
<span className="text-lg font-medium text-amber-600">$5,400</span>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    24 Hydro-Massage Jets
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Compact 200 Gallon Capacity
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Chromatherapy LED Lighting
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Silent Circulation Pump
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    5-Year Shell Warranty
                                </li>
</ul>
<button className="w-full py-2 border border-zinc-200 rounded-lg text-sm font-medium hover:border-amber-500 hover:text-amber-600 transition-colors">View Details</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 bg-white">
<div className="aspect-video bg-zinc-100 relative overflow-hidden">
<img alt="Social Tub" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1634253539570-ccdd24850767?w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                                6-Person
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div className="">
<h4 className="text-lg font-medium tracking-tight">Aurora Social</h4>
<p className="text-sm text-zinc-500 font-light">Family &amp; Friends</p>
</div>
<span className="text-lg font-medium text-amber-600">$8,200</span>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    48 Targeted Relief Jets
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Large 450 Gallon Capacity
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Integrated Bluetooth Audio
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Ozone Water Purification
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Double Insulation Layer
                                </li>
</ul>
<button className="w-full py-2 border border-zinc-200 rounded-lg text-sm font-medium hover:border-amber-500 hover:text-amber-600 transition-colors">View Details</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 bg-white">
<div className="aspect-video bg-zinc-100 relative overflow-hidden">
<img alt="Infinity Tub" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1713270232684-b63930585172?w=800&amp;q=80"/>
<div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-medium px-3 py-1 rounded-full uppercase tracking-wider">
                                Premium
                            </div>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight">Aurora Infinity</h4>
<p className="text-sm text-zinc-500 font-light">Vanishing Edge Design</p>
</div>
<span className="text-lg font-medium text-amber-600">$12,500</span>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Zero-Edge Water Line
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    60 Pro-Grade Massage Jets
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Dual Filtration System
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Smart App Control (WiFi)
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    10-Year Comprehensive Warranty
                                </li>
</ul>
<button className="w-full py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">View Details</button>
</div>
</div>
</div>
</div>

<div className="mb-24" id="saunas">
<div className="flex items-center gap-3 mb-8">
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-icon="lucide:flame" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0a5 5 0 0 1 1-3a1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-2xl font-medium tracking-tight">The Sauna Collection</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 bg-white">
<div className="aspect-video bg-zinc-100 relative overflow-hidden">
<img alt="Barrel Sauna" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1712659604528-b179a3634560?w=800&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight">Nordic Barrel</h4>
<p className="text-sm text-zinc-500 font-light">Traditional Steam</p>
</div>
<span className="text-lg font-medium text-amber-600">$6,800</span>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Canadian Red Cedar
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Harvia Electric Heater (6kW)
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Tempered Glass Door
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Seats 4 Adults Comfortably
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Fast 30-min Heat Up
                                </li>
</ul>
<button className="w-full py-2 border border-zinc-200 rounded-lg text-sm font-medium hover:border-amber-500 hover:text-amber-600 transition-colors">Configure</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 bg-white">
<div className="aspect-video bg-zinc-100 relative overflow-hidden">
<img alt="Glass Sauna" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1585815157396-ad62043f721b?w=800&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight">Vista Cabin</h4>
<p className="text-sm text-zinc-500 font-light">Panoramic View</p>
</div>
<span className="text-lg font-medium text-amber-600">$9,500</span>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Full Front Glass Wall
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Hemlock Wood Interior
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Dual Level Bench Seating
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Adjustable LED Mood Lighting
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Digital Touch Control Panel
                                </li>
</ul>
<button className="w-full py-2 border border-zinc-200 rounded-lg text-sm font-medium hover:border-amber-500 hover:text-amber-600 transition-colors">Configure</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 bg-white">
<div className="aspect-video bg-zinc-100 relative overflow-hidden">
<img alt="Infrared Sauna" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1728404259075-209cfb5bb89c?w=800&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight">Lumina Infrared</h4>
<p className="text-sm text-zinc-500 font-light">Deep Heat Therapy</p>
</div>
<span className="text-lg font-medium text-amber-600">$7,200</span>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Full Spectrum Infrared Heaters
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Low EMF Technology
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Eco-Certified Basswood
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Integrated Sound System
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Ergonomic Backrests
                                </li>
</ul>
<button className="w-full py-2 border border-zinc-200 rounded-lg text-sm font-medium hover:border-amber-500 hover:text-amber-600 transition-colors">Configure</button>
</div>
</div>
</div>
</div>

<div className="" id="jacuzzis">
<div className="flex items-center gap-3 mb-8">
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-icon="lucide:waves" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<h3 className="text-2xl font-medium tracking-tight">Jacuzzi Hydrotherapy</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 bg-white">
<div className="aspect-video bg-zinc-100 relative overflow-hidden">
<img alt="Jacuzzi Pro" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1582490841511-81e1363fb48c?w=800&amp;q=80"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div className="">
<h4 className="text-lg font-medium tracking-tight">Hydro Pro</h4>
<p className="text-sm text-zinc-500 font-light">Athlete Recovery</p>
</div>
<span className="text-lg font-medium text-amber-600">$10,400</span>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    High-Pressure Sports Jets
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Adjustable Flow Control
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Neck &amp; Shoulder Pillows
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Cool-Down Seat
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Energy Efficient Cover
                                </li>
</ul>
<button className="w-full py-2 border border-zinc-200 rounded-lg text-sm font-medium hover:border-amber-500 hover:text-amber-600 transition-colors">Select Model</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 bg-white">
<div className="aspect-video bg-zinc-100 relative overflow-hidden">
<img alt="Therapy Plus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1603991488459-73de26c7c4f8?w=800&amp;q=80" style={{}}/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div className="">
<h4 className="text-lg font-medium tracking-tight">Therapy Plus</h4>
<p className="text-sm text-zinc-500 font-light">Pain Relief Focus</p>
</div>
<span className="text-lg font-medium text-amber-600">$11,800</span>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Deep Tissue Massage Nodes
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Foot Reflexology Dome
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Salt Water Compatible
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Ergonomic Lounge Seating
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Ultra-Quiet Filtration
                                </li>
</ul>
<button className="w-full py-2 border border-zinc-200 rounded-lg text-sm font-medium hover:border-amber-500 hover:text-amber-600 transition-colors">Select Model</button>
</div>
</div>

<div className="group border border-zinc-200 rounded-2xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 bg-white">
<div className="aspect-video bg-zinc-100 relative overflow-hidden">
<img alt="Executive Jacuzzi" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606244424923-705e7fad3580?w=800&amp;q=80" style={{}}/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h4 className="text-lg font-medium tracking-tight">Executive Lounge</h4>
<p className="text-sm text-zinc-500 font-light">Ultimate Entertaining</p>
</div>
<span className="text-lg font-medium text-amber-600">$14,200</span>
</div>
<ul className="space-y-2 mb-6">
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Seats 8+ Adults
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Built-in Ice Bucket &amp; Table
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Surround LED Ambience
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Dual Touchscreen Controls
                                </li>
<li className="flex items-start gap-2 text-sm text-zinc-600 font-light">
<svg aria-hidden="true" className="iconify text-amber-500 mt-0.5 iconify--lucide" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                    Automated Self-Cleaning
                                </li>
</ul>
<button className="w-full py-2 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors">Select Model</button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="space-y-4 max-w-sm">
<div className="flex items-center gap-2 mb-2">
<svg aria-hidden="true" className="iconify text-amber-500 iconify--lucide" data-icon="lucide:sparkles" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span className="text-lg font-medium tracking-[0.2em] text-white uppercase">Aurora</span>
</div>
<p className="text-sm font-light">Crafting moments of serenity since 1998. Visit our showrooms or book a virtual consultation to design your outdoor sanctuary.</p>
<div className="flex gap-4 pt-2">
<a className="hover:text-amber-500 transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg></a>
<a className="hover:text-amber-500 transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="hover:text-amber-500 transition-colors" href="#"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-sm font-light">
<div className="space-y-3">
<h4 className="text-white font-medium uppercase tracking-wider text-xs">Products</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Hot Tubs</a></li>
<li><a className="hover:text-white transition-colors" href="#">Saunas</a></li>
<li><a className="hover:text-white transition-colors" href="#">Jacuzzis</a></li>
<li><a className="hover:text-white transition-colors" href="#">Accessories</a></li>
</ul>
</div>
<div className="space-y-3">
<h4 className="text-white font-medium uppercase tracking-wider text-xs">Company</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Our Story</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-white transition-colors" href="#">Showrooms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1 space-y-3">
<h4 className="text-white font-medium uppercase tracking-wider text-xs">Stay Updated</h4>
<form className="flex gap-2">
<input className="bg-zinc-900 border border-zinc-800 text-white px-3 py-2 rounded-lg w-full focus:outline-none focus:border-amber-500/50 text-sm" placeholder="Email address" type="email"/>
<button className="bg-amber-500 text-zinc-950 px-3 py-2 rounded-lg hover:bg-amber-400 transition-colors" type="submit">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-xs font-light">
<p>© 2024 Aurora Spa. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
