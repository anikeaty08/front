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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-stone-200/50">
<div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-stone-900" href="#">andy's<span className="text-emerald-600" style={{}}>tree</span></a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-stone-600 hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="text-sm text-stone-600 hover:text-stone-900 transition-colors" href="#about">About</a>
<a className="text-sm text-stone-600 hover:text-stone-900 transition-colors" href="#gallery">Gallery</a>
<a className="text-sm text-stone-600 hover:text-stone-900 transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-emerald-700 transition-colors" href="tel:7606003740">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path className="" d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                (760) 600-3740
            </a>
<button className="md:hidden text-stone-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-stone-50 to-amber-50"></div>
<div className="absolute top-20 right-0 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200/30 rounded-full blur-3xl"></div>
<div className="grid lg:grid-cols-2 max-w-6xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="">
<div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
                    Licensed &amp; Insured · Escondido, CA
                </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-stone-900 leading-tight mb-6">
                    Professional tree care you can 
                    <span className="text-emerald-600">trust</span>
</h1>
<p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
                    From precision trimming to complete removals, we provide expert tree services that keep your property safe and beautiful.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white font-medium px-6 py-3 rounded-full hover:bg-stone-800 transition-colors" href="#contact">
                        Get Free Estimate
                        <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 font-medium px-6 py-3 rounded-full border border-stone-200 hover:border-stone-300 transition-colors" href="tel:7606003740">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                        Call Now
                    </a>
</div>
<div className="flex items-center gap-8 mt-12 pt-8 border-t border-stone-200">
<div>
<div className="text-2xl font-semibold tracking-tight text-stone-900">20+</div>
<div className="text-sm text-stone-500">Years Experience</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-stone-900">500+</div>
<div className="text-sm text-stone-500">Projects Done</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-stone-900">5.0</div>
<div className="text-sm text-stone-500">Google Rating</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-700 overflow-hidden shadow-2xl shadow-emerald-900/20">
<img alt="Tree service professional" className="w-full h-full object-cover mix-blend-overlay opacity-60" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&amp;h=800&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white/90 iconify--lucide" data-icon="lucide:trees" data-width="120" height="120" role="img" style={{strokeWidth: '1'}} viewbox="0 0 24 24" width="120" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0m-3 6v6m6-3v3"></path><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"></path></g></svg>
</div>
</div>
<div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl shadow-stone-900/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-amber-600 iconify--lucide" data-icon="lucide:clock" data-width="20" height="20" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div>
<div className="text-sm font-medium text-stone-900">Same Day Service</div>
<div className="text-xs text-stone-500">Available for emergencies</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<div className="text-sm font-medium text-emerald-600 mb-3">Our Services</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Everything your trees need</h2>
<p className="text-stone-600 max-w-2xl mx-auto">Comprehensive tree care services tailored to San Diego County's unique landscape and climate.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="group p-6 rounded-2xl border border-stone-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-200 transition-colors">
<svg aria-hidden="true" className="iconify text-emerald-600 iconify--lucide" data-icon="lucide:scissors" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12L12 12m8-8L8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8L20 20"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Tree Trimming</h3>
<p className="text-sm text-stone-600 leading-relaxed">Expert pruning to maintain tree health, improve appearance, and prevent hazards.</p>
</div>
<div className="group p-6 rounded-2xl border border-stone-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-colors">
<svg aria-hidden="true" className="iconify text-amber-600 iconify--lucide" data-icon="lucide:axe" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m14 12l-8.381 8.38a1 1 0 0 1-3.001-3L11 9"></path><path d="M15 15.5a.5.5 0 0 0 .5.5A6.5 6.5 0 0 0 22 9.5a.5.5 0 0 0-.5-.5h-1.672a2 2 0 0 1-1.414-.586l-5.062-5.062a1.205 1.205 0 0 0-1.704 0L9.352 5.648a1.205 1.205 0 0 0 0 1.704l5.062 5.062A2 2 0 0 1 15 13.828z"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Tree Removal</h3>
<p className="text-sm text-stone-600 leading-relaxed">Safe and efficient removal of dead, diseased, or unwanted trees from your property.</p>
</div>
<div className="group p-6 rounded-2xl border border-stone-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-colors">
<svg aria-hidden="true" className="iconify text-rose-600 iconify--lucide" data-icon="lucide:disc-3" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M6 12c0-1.7.7-3.2 1.8-4.2"></path><circle cx="12" cy="12" r="2"></circle><path d="M18 12c0 1.7-.7 3.2-1.8 4.2"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Stump Grinding</h3>
<p className="text-sm text-stone-600 leading-relaxed">Complete stump removal to reclaim your yard space and prevent regrowth.</p>
</div>
<div className="group p-6 rounded-2xl border border-stone-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-200 transition-colors">
<svg aria-hidden="true" className="iconify text-sky-600 iconify--lucide" data-icon="lucide:zap" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Emergency Service</h3>
<p className="text-sm text-stone-600 leading-relaxed">24/7 response for storm damage, fallen trees, and urgent situations.</p>
</div>
<div className="group p-6 rounded-2xl border border-stone-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-violet-200 transition-colors">
<svg aria-hidden="true" className="iconify text-violet-600 iconify--lucide" data-icon="lucide:sprout" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4a4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3M4 9a5 5 0 0 1 8 4a5 5 0 0 1-8-4m1 12h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Palm Trimming</h3>
<p className="text-sm text-stone-600 leading-relaxed">Specialized care for palm trees including skinning, trimming, and removal.</p>
</div>
<div className="group p-6 rounded-2xl border border-stone-200 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all duration-300">
<div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-colors">
<svg aria-hidden="true" className="iconify text-teal-600 iconify--lucide" data-icon="lucide:leaf" data-width="24" height="24" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-2">Lot Clearing</h3>
<p className="text-sm text-stone-600 leading-relaxed">Complete brush and tree removal for construction or landscaping projects.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="text-sm font-medium text-emerald-600 mb-3">Why Choose Us</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 mb-6">Local experts committed to quality</h2>
<p className="text-stone-600 mb-8 leading-relaxed">
                        Andy's Tree Service has been serving Escondido and surrounding San Diego County communities for over two decades. We combine old-school craftsmanship with modern equipment to deliver exceptional results on every job.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="font-medium text-stone-900">Fully Licensed &amp; Insured</div>
<div className="text-sm text-stone-600">Complete liability coverage for your peace of mind</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="font-medium text-stone-900">Free Estimates</div>
<div className="text-sm text-stone-600">Honest, upfront pricing with no hidden fees</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '2'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="font-medium text-stone-900">Clean Worksite Guarantee</div>
<div className="text-sm text-stone-600">We leave your property better than we found it</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
<div className="space-y-4">
<div className="aspect-square rounded-2xl bg-emerald-200 overflow-hidden">
<img alt="Tree work" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&amp;h=400&amp;fit=crop"/>
</div>
<div className="aspect-video rounded-2xl bg-amber-200 overflow-hidden">
<img alt="Landscape" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&amp;h=200&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4 pt-8">
<div className="aspect-video rounded-2xl bg-stone-300 overflow-hidden">
<img alt="Home" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&amp;h=200&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-2xl bg-emerald-300 overflow-hidden">
<img alt="Trees" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=400&amp;h=400&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<div className="text-sm font-medium text-emerald-600 mb-3">Testimonials</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900 mb-4">Loved by homeowners</h2>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100">
<div className="flex gap-1 mb-4">
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-4">"Andy and his team did an amazing job removing a massive oak from our backyard. Professional, efficient, and the cleanup was impeccable."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-200 flex items-center justify-center text-emerald-700 font-medium text-sm">MR</div>
<div>
<div className="text-sm font-medium text-stone-900">Maria R.</div>
<div className="text-xs text-stone-500">Escondido</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100">
<div className="flex gap-1 mb-4">
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-4">"Best price in town and incredible work ethic. They trimmed 6 palm trees in just a few hours. Highly recommend!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-amber-200 flex items-center justify-center text-amber-700 font-medium text-sm">JT</div>
<div>
<div className="text-sm font-medium text-stone-900">James T.</div>
<div className="text-xs text-stone-500">San Marcos</div>
</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-stone-50 border border-stone-100">
<div className="flex gap-1 mb-4">
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<svg aria-hidden="true" className="iconify text-amber-400 iconify--lucide" data-icon="lucide:star" data-width="18" height="18" role="img" style={{fill: 'currentColor'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-4">"Called them for emergency storm damage on a Sunday. They came out within 2 hours. Absolute lifesavers!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-sky-200 flex items-center justify-center text-sky-700 font-medium text-sm">SL</div>
<div>
<div className="text-sm font-medium text-stone-900">Susan L.</div>
<div className="text-xs text-stone-500">Valley Center</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900" id="contact">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">
<div className="">
<div className="text-sm font-medium text-emerald-400 mb-3">Get In Touch</div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-6">Ready to transform your property?</h2>
<p className="text-stone-400 mb-8 leading-relaxed">
                        Contact us today for a free estimate. We serve Escondido, San Marcos, Valley Center, Rancho Bernardo, and all of San Diego County.
                    </p>
<div className="space-y-6">
<a className="flex items-center gap-4 group" href="tel:7606003740">
<div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:phone" data-width="22" height="22" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-sm text-stone-400">Call us anytime</div>
<div className="text-lg font-medium text-white">(760) 600-3740</div>
</div>
</a>
<a className="flex items-center gap-4 group" href="mailto:info@andystreeservice.com">
<div className="w-12 h-12 bg-stone-800 rounded-xl flex items-center justify-center group-hover:bg-stone-700 transition-colors">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:mail" data-width="22" height="22" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</div>
<div>
<div className="text-sm text-stone-400">Email us</div>
<div className="text-lg font-medium text-white">info@andystreeservice.com</div>
</div>
</a>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-stone-800 rounded-xl flex items-center justify-center">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:map-pin" data-width="22" height="22" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg>
</div>
<div>
<div className="text-sm text-stone-400">Service Area</div>
<div className="text-lg font-medium text-white">Escondido &amp; San Diego County</div>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl p-8">
<h3 className="text-xl font-semibold tracking-tight text-stone-900 mb-6">Request a Free Estimate</h3>
<form className="space-y-4">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-stone-700 mb-1.5">First Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1.5">Last Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm" placeholder="Smith" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1.5">Phone Number</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm" placeholder="(760) 555-0123" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1.5">Email</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1.5">Service Needed</label>
<select className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm text-stone-600">
<option>Tree Trimming</option>
<option>Tree Removal</option>
<option>Stump Grinding</option>
<option>Palm Trimming</option>
<option>Emergency Service</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1.5">Message</label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-stone-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 outline-none transition-all text-sm resize-none" placeholder="Tell us about your project..." rows="3"></textarea>
</div>
<button className="w-full bg-emerald-600 text-white font-medium py-3 rounded-lg hover:bg-emerald-700 transition-colors" type="submit">
                            Get Free Estimate
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 py-12">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-6">
<a className="text-xl font-semibold tracking-tight text-white" href="#">andy's<span className="text-emerald-500">tree</span></a>
<div className="flex items-center gap-6">
<a className="text-sm text-stone-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-sm text-stone-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-sm text-stone-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="text-sm text-stone-500">© 2024 Andy's Tree Service</div>
</div>
</div>
</footer>

    </>
  );
}
