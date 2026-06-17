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
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/60 glass-effect">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-height="20" data-icon="lucide:gem" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
<span className="font-semibold text-lg tracking-tight text-slate-900">Surrey Stained Glass</span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#restoration">Restoration</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="#contact">
                        Get a Quote
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-500 hover:text-slate-900 focus:outline-none" type="button">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-28 overflow-hidden pt-32 pb-20 relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600 mb-6">
<span className="flex h-2 w-2 rounded-full bg-indigo-600 mr-2"></span>
                        Serving Surrey &amp; South East England
                    </div>
<h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-semibold text-slate-900 tracking-tight mb-6">Bringing old skills back <br className="hidden lg:block"/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">to life.</span></h1>
<p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
                        Specialists in the conservation of historical stained glass and the creation of bespoke contemporary leaded lights. Marrying traditional craftsmanship with modern durability.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href="#contact">
                            Discuss Your Project
                            <svg aria-hidden="true" className="iconify ml-2 iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex justify-center items-center px-6 py-3 border border-slate-200 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-all shadow-sm hover:border-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200" href="#gallery">
                            View Portfolio
                        </a>
</div>
<div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-600">JD</div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-600">SM</div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white flex items-center justify-center text-xs font-medium text-slate-600">LK</div>
</div>
<p>Trusted by 500+ homeowners</p>
</div>
</div>

<div className="relative">
<div className="absolute -top-12 -right-12 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl"></div>
<div className="grid grid-cols-2 gap-4 relative">
<div className="space-y-4 pt-8">
<img alt="Glass texture" className="rounded-xl shadow-lg w-full h-40 object-cover hover:translate-y-[-4px] transition-transform duration-500 delay-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/><img alt="Detailed stained glass pattern" className="hover:translate-y-[-4px] transition-transform duration-500 w-full h-64 object-cover rounded-xl shadow-lg" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="space-y-4">
<img alt="Church window interior" className="rounded-xl shadow-lg w-full h-40 object-cover hover:translate-y-[-4px] transition-transform duration-500 delay-100" src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img alt="Workshop tools" className="rounded-xl shadow-lg w-full h-64 object-cover hover:translate-y-[-4px] transition-transform duration-500 delay-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Mastery in Glasswork</h2>
<p className="text-slate-500">Whether it's restoring a Victorian front door or designing a modern feature window, we approach every piece with the same level of precision and care.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-md hover:bg-white transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:hammer" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Restoration &amp; Repair</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Meticulous rebuilding of damaged leaded lights. We salvage original glass, re-lead using traditional techniques, and ensure structural integrity for decades to come.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-md hover:bg-white transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:pencil-ruler" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 7L8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13m1-7l2-2m8 12l2-2m-3-3l4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Bespoke Commissions</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        From initial concept sketches to installation. We create unique stained glass designs tailored to your home's architecture and your personal style.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-100 hover:shadow-md hover:bg-white transition-all duration-300">
<div className="w-12 h-12 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="24" data-icon="lucide:shield-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-2">Encapsulation</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Preserve your beautiful stained glass inside triple-glazed units. This provides modern thermal efficiency and security while retaining the period aesthetic.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white overflow-hidden" id="restoration">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-2xl transform rotate-3"></div>
<img alt="Stained glass window detail" className="relative rounded-2xl shadow-2xl border border-slate-700 w-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>

<div className="absolute -bottom-6 -right-6 bg-slate-800 border border-slate-700 p-4 rounded-xl shadow-xl">
<div className="flex items-center gap-3">
<div className="bg-indigo-500/20 p-2 rounded-lg text-indigo-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:history" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5m4-1v5l4 2"></path></g></svg>
</div>
<div>
<p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Experience</p>
<p className="text-lg font-semibold text-white">25+ Years</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-semibold text-white tracking-tight mb-6">The Art of Glass Restoration</h2>
<div className="space-y-6 text-slate-300">
<p className="">
                            Restoring stained glass is a delicate balance of preservation and reinforcement. At Surrey Stained Glass, we respect the original artist's intent while correcting the ravages of time and weather.
                        </p>
<ul className="space-y-4">
<li className="flex items-start">
<svg aria-hidden="true" className="iconify text-indigo-400 mt-1 mr-3 flex-shrink-0 iconify--lucide" data-height="18" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm">Careful removal and temporary glazing installation.</span>
</li>
<li className="flex items-start">
<svg aria-hidden="true" className="iconify text-indigo-400 mt-1 mr-3 flex-shrink-0 iconify--lucide" data-height="18" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm">Ultrasonic cleaning to remove decades of grime.</span>
</li>
<li className="flex items-start">
<svg aria-hidden="true" className="iconify text-indigo-400 mt-1 mr-3 flex-shrink-0 iconify--lucide" data-height="18" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm">Matching antique glass from our extensive library for repairs.</span>
</li>
<li className="flex items-start">
<svg aria-hidden="true" className="iconify text-indigo-400 mt-1 mr-3 flex-shrink-0 iconify--lucide" data-height="18" data-icon="lucide:check-circle-2" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm">Re-cementing for weatherproofing and longevity.</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Recent Projects</h2>
<p className="text-slate-500">A selection of commissions and restorations across Surrey and the surrounding counties.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700" href="#">
                    View full gallery
                    <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-200">
<img alt="Edwardian door panel" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<p className="text-white font-medium">Edwardian Entrance</p>
<p className="text-slate-300 text-xs mt-1">Restoration • Guildford</p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-200">
<img alt="Modern geometric design" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<p className="text-white font-medium">Geometric Light</p>
<p className="text-slate-300 text-xs mt-1">Commission • Woking</p>
</div>
</div>

<div className="group relative aspect-[4/5] overflow-hidden rounded-xl bg-slate-200">
<img alt="Church window detail" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
<p className="text-white font-medium">St. Mary's Chapel</p>
<p className="text-slate-300 text-xs mt-1">Conservation • Farnham</p>
</div>
</div>
</div>
<div className="mt-8 flex justify-center md:hidden">
<a className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-700" href="#">
                    View full gallery
                    <svg aria-hidden="true" className="iconify ml-1 iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-4xl mx-auto px-4 text-center">
<svg aria-hidden="true" className="iconify mx-auto text-indigo-200 mb-6 iconify--lucide" data-height="48" data-icon="lucide:quote" data-width="48" height="48" role="img" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 mb-8 leading-normal">
                "The craftsmanship is simply outstanding. They restored our 1920s front door panel to its former glory. It catches the morning light beautifully now, just as it must have done a century ago."
            </p>
<div className="flex items-center justify-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 overflow-hidden">
<img alt="User" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<p className="text-sm font-semibold text-slate-900">Sarah Jenkins</p>
<p className="text-xs text-slate-500">Homeowner, Esher</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
<div className="grid lg:grid-cols-2">
<div className="p-8 lg:p-12">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Get in touch</h2>
<p className="text-slate-500 mb-8 text-sm">Fill out the form below for a free consultation or quote. We typically respond within 24 hours.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="first-name">First Name</label>
<input className="block w-full rounded-md border-slate-300 bg-slate-50 border py-2 px-3 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors" id="first-name" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="last-name">Last Name</label>
<input className="block w-full rounded-md border-slate-300 bg-slate-50 border py-2 px-3 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="email">Email</label>
<input className="block w-full rounded-md border-slate-300 bg-slate-50 border py-2 px-3 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors" id="email" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="service">Service Interest</label>
<div className="relative">
<select className="block w-full appearance-none rounded-md border-slate-300 bg-slate-50 border py-2 px-3 text-sm text-slate-900 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors" id="service">
<option>Restoration</option>
<option>New Commission</option>
<option>Encapsulation</option>
<option>Other</option>
</select>
<span className="pointer-events-none absolute right-3 top-2.5 text-slate-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:chevron-down" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1" htmlFor="message">Message</label>
<textarea className="block w-full rounded-md border-slate-300 bg-slate-50 border py-2 px-3 text-sm text-slate-900 placeholder-slate-400 focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors" id="message" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-colors" type="submit">
                                Send Message
                            </button>
</form>
</div>
<div className="bg-slate-50 p-8 lg:p-12 border-t lg:border-t-0 lg:border-l border-slate-200 flex flex-col justify-between">
<div>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-6">Contact Information</h3>
<ul className="space-y-6">
<li className="flex">
<div className="flex-shrink-0">
<svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-height="20" data-icon="lucide:map-pin" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div className="ml-3 text-sm text-slate-600">
<p className="font-medium text-slate-900">Workshop</p>
<p>12 High Street</p>
<p>Guildford, Surrey, GU1 3AJ</p>
</div>
</li>
<li className="flex">
<div className="flex-shrink-0">
<svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-height="20" data-icon="lucide:phone" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="ml-3 text-sm text-slate-600">
<p className="font-medium text-slate-900">Phone</p>
<p>+44 (0) 1483 123 456</p>
<p className="text-xs text-slate-400 mt-1">Mon-Fri 9am to 5pm</p>
</div>
</li>
<li className="flex">
<div className="flex-shrink-0">
<svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-height="20" data-icon="lucide:mail" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div className="ml-3 text-sm text-slate-600">
<p className="font-medium text-slate-900">Email</p>
<p>hello@surreystainedglass.com</p>
</div>
</li>
</ul>
</div>
<div className="mt-8 pt-8 border-t border-slate-200">
<p className="text-xs text-slate-400 leading-relaxed">
                                Our workshop is open by appointment only. Please call or email ahead to discuss your stained glass requirements.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-indigo-600 iconify--lucide" data-height="18" data-icon="lucide:gem" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10.5 3L8 9l4 13l4-13l-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3zM2 9h20"></path></g></svg>
<span className="font-semibold text-sm tracking-tight text-slate-900">Surrey Stained Glass</span>
</div>
<div className="flex space-x-6">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:instagram" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="sr-only">Facebook</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:facebook" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:twitter" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="text-xs text-slate-400">
                © 2023 Surrey Stained Glass. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
