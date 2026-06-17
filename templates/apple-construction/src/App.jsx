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
      

<header className="fixed top-0 inset-x-0 z-50 glass-nav border-b border-gray-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="font-semibold tracking-tighter text-xl text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600" href="#">ACPR</a>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-rose-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-rose-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-gray-600 hover:text-rose-600 transition-colors" href="#portfolio">Portfolio</a>
<a className="text-sm font-medium text-gray-600 hover:text-rose-600 transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900" href="tel:+15702793643">
<iconify-icon icon="solar:phone-calling-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
                    (570) 279-3643
                </a>
<a className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 bg-gray-900 text-gray-50 hover:bg-gray-800 h-9 px-4 py-2 shadow-sm" href="#contact">
                    Get a Quote
                </a>
</div>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-white to-gray-50">

<div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-rose-200/40 blur-3xl mix-blend-multiply pointer-events-none"></div>
<div className="absolute top-32 -right-24 w-96 h-96 rounded-full bg-amber-200/30 blur-3xl mix-blend-multiply pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex items-center rounded-full border border-rose-100 bg-rose-50/50 px-3 py-1 text-sm font-medium text-rose-800 mb-8 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-rose-500 mr-2 animate-pulse"></span>
                    Serving Williamsport &amp; Surrounding Areas
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 max-w-4xl mx-auto leading-tight mb-6">
                    Crafting spaces that <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-orange-500">stand the test of time.</span>
</h1>
<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 font-normal">
                    Premium interior and exterior remodeling. <br className="hidden sm:block"/>
<span className="italic text-gray-500">"An apple a day keeps the code inspector away."</span>
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-md text-base font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 bg-gradient-to-r from-rose-600 to-rose-500 text-white hover:from-rose-700 hover:to-rose-600 h-12 px-8 shadow-lg shadow-rose-500/20" href="#contact">
                        Start Your Project
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center rounded-md text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 border border-gray-200 bg-white hover:bg-gray-50 hover:text-gray-900 h-12 px-8" href="#portfolio">
                        View Portfolio
                    </a>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-16 lg:mt-24 relative">
<div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-transparent to-transparent z-10"></div>
<div className="rounded-2xl md:rounded-3xl overflow-hidden ring-1 ring-gray-200/50 shadow-2xl relative aspect-video md:aspect-[2.5/1]">
<img alt="Modern home exterior and interior transition" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-white py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-50">
<div className="flex flex-col items-center justify-center group">
<div className="h-12 w-12 rounded-full bg-rose-50 flex items-center justify-center mb-3 group-hover:bg-rose-100 transition-colors">
<iconify-icon className="text-rose-600" icon="solar:shield-check-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Fully Licensed</h3>
<p className="text-sm text-gray-500 mt-1">PA Registered &amp; Insured</p>
</div>
<div className="flex flex-col items-center justify-center group">
<div className="h-12 w-12 rounded-full bg-amber-50 flex items-center justify-center mb-3 group-hover:bg-amber-100 transition-colors">
<iconify-icon className="text-amber-600" icon="solar:star-fall-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">5-Star Quality</h3>
<p className="text-sm text-gray-500 mt-1">Exceptional Client Reviews</p>
</div>
<div className="flex flex-col items-center justify-center group">
<div className="h-12 w-12 rounded-full bg-indigo-50 flex items-center justify-center mb-3 group-hover:bg-indigo-100 transition-colors">
<iconify-icon className="text-indigo-600" icon="solar:ruler-cross-pen-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Code Compliant</h3>
<p className="text-sm text-gray-500 mt-1">Exceeding local standards</p>
</div>
<div className="flex flex-col items-center justify-center group">
<div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center mb-3 group-hover:bg-emerald-100 transition-colors">
<iconify-icon className="text-emerald-600" icon="solar:map-point-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Williamsport</h3>
<p className="text-sm text-gray-500 mt-1">Locally owned &amp; operated</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-gray-50 via-rose-50/20 to-gray-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Comprehensive Remodeling Expertise</h2>
<p className="text-base text-gray-600">From structural exterior overhauls to meticulous interior finishes, we manage every phase of your property transformation.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group relative bg-white rounded-2xl p-8 md:p-10 ring-1 ring-gray-100 shadow-sm hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300">
<div className="h-12 w-12 rounded-lg bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6">
<iconify-icon className="text-indigo-600" icon="solar:sofa-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Interior Remodeling</h3>
<p className="text-sm text-gray-600 mb-8 leading-relaxed">
                            Breathe new life into your living spaces. We specialize in high-end kitchen renovations, spa-like bathroom remodels, and complete basement finishing, prioritizing both aesthetics and functionality.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-gray-700">
<iconify-icon className="text-indigo-500 mr-3" icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon> Custom Kitchens &amp; Cabinetry
                            </li>
<li className="flex items-center text-sm text-gray-700">
<iconify-icon className="text-indigo-500 mr-3" icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon> Luxury Bathroom Upgrades
                            </li>
<li className="flex items-center text-sm text-gray-700">
<iconify-icon className="text-indigo-500 mr-3" icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon> Flooring &amp; Trim Carpentry
                            </li>
</ul>
<div className="rounded-xl overflow-hidden aspect-[4/3] ring-1 ring-gray-100">
<img alt="Interior kitchen remodel" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>

<div className="group relative bg-white rounded-2xl p-8 md:p-10 ring-1 ring-gray-100 shadow-sm hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300">
<div className="h-12 w-12 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center mb-6">
<iconify-icon className="text-orange-600" icon="solar:home-angle-linear" style={{fontSize: '1.5rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">Exterior Renovation</h3>
<p className="text-sm text-gray-600 mb-8 leading-relaxed">
                            Protect and enhance your property's curb appeal. Our exterior services are built to withstand Pennsylvania weather while dramatically improving the look and value of your home.
                        </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-gray-700">
<iconify-icon className="text-orange-500 mr-3" icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon> Roofing &amp; Siding Installation
                            </li>
<li className="flex items-center text-sm text-gray-700">
<iconify-icon className="text-orange-500 mr-3" icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon> Custom Decks &amp; Patios
                            </li>
<li className="flex items-center text-sm text-gray-700">
<iconify-icon className="text-orange-500 mr-3" icon="solar:check-circle-linear" style={{fontSize: '1.25rem'}}></iconify-icon> Windows, Doors &amp; Exteriors
                            </li>
</ul>
<div className="rounded-xl overflow-hidden aspect-[4/3] ring-1 ring-gray-100">
<img alt="Exterior home renovation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100 relative overflow-hidden" id="about">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-rose-50/50 via-white to-white pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6">Built on Precision.<br/>Rooted in <span className="text-rose-600">Williamsport.</span></h2>
<div className="space-y-6 text-base text-gray-600">
<p>
                                At Apple Construction and Property Reservation LLC, we don't just renovate; we engineer living spaces. Our philosophy is simple: do it right the first time. We navigate complex building codes and stringent design requirements so you don't have to.
                            </p>
<p>
                                As our motto says, <strong className="text-gray-900 font-medium">"An apple a day keeps the code inspector away."</strong> This isn't just a catchy phrase; it's our commitment to uncompromising structural integrity, safety, and meticulous attention to detail in every joist, wire, and finish.
                            </p>
<p>
                                Whether it's a historic Williamsport restoration or a modern architectural update, we bring technical expertise and transparent communication to every project.
                            </p>
</div>
<div className="mt-10 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<img alt="" className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"/>
<div className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-white bg-rose-50 text-rose-600">
<span className="text-xs font-semibold">+50</span>
</div>
</div>
<p className="text-sm font-medium text-gray-900">Projects completed locally</p>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-rose-200 to-orange-100 rounded-2xl transform translate-x-4 translate-y-4"></div>
<img alt="Construction blueprints and tools" className="relative rounded-2xl ring-1 ring-gray-200 shadow-lg object-cover aspect-[4/5] w-full" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">Selected Works</h2>
<p className="text-base text-gray-600">A showcase of our recent transformations across residential properties.</p>
</div>
<a className="inline-flex items-center text-sm font-medium text-rose-600 hover:text-rose-700 transition-colors group" href="#">
                        View all projects <iconify-icon className="ml-2 transform group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative rounded-xl overflow-hidden bg-white ring-1 ring-gray-200 aspect-square">
<img alt="Modern Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<h4 className="text-white font-semibold tracking-tight text-lg">Modern Kitchen Overhaul</h4>
<p className="text-rose-300 font-medium text-sm mt-1">Interior Remodeling</p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden bg-white ring-1 ring-gray-200 aspect-square">
<img alt="Exterior Deck" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<h4 className="text-white font-semibold tracking-tight text-lg">Custom Hardwood Deck</h4>
<p className="text-orange-300 font-medium text-sm mt-1">Exterior Renovation</p>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden bg-white ring-1 ring-gray-200 aspect-square">
<img alt="Luxury Bath" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<h4 className="text-white font-semibold tracking-tight text-lg">Spa-Inspired Bathroom</h4>
<p className="text-indigo-300 font-medium text-sm mt-1">Interior Remodeling</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-rose-200/50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-orange-100/60 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div className="bg-white/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl ring-1 ring-gray-200/50 shadow-xl shadow-gray-200/40">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">Discuss Your Project</h2>
<p className="text-sm text-gray-600 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-sm font-medium text-gray-900">First Name</label>
<input className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all shadow-sm" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-900">Last Name</label>
<input className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all shadow-sm" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-900">Email Address</label>
<input className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all shadow-sm" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-900">Project Type</label>
<div className="relative">
<select className="flex h-10 w-full appearance-none rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all shadow-sm">
<option>Interior Remodeling</option>
<option>Exterior Renovation</option>
<option>General Consultation</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-gray-500 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{fontSize: '1rem'}}></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-900">Message</label>
<textarea className="flex min-h-[120px] w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all shadow-sm" placeholder="Tell us about your timeline and budget..."></textarea>
</div>
<button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 h-10 px-4 py-2 w-full mt-2 shadow-md" type="button">
                                Submit Request
                            </button>
</form>
</div>

<div className="flex flex-col justify-center lg:pl-10">
<h2 className="text-3xl font-semibold tracking-tight text-gray-900 mb-6">Let's build something exceptional.</h2>
<p className="text-base text-gray-600 mb-10">
                            Ready to upgrade your property? Our experts are standing by to provide a comprehensive evaluation and estimate.
                        </p>
<div className="space-y-8">
<div className="flex items-start group">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-50 border border-rose-100 group-hover:bg-rose-100 transition-colors">
<iconify-icon className="text-rose-600" icon="solar:phone-calling-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="ml-4">
<h3 className="text-sm font-medium text-gray-900">Phone</h3>
<p className="mt-1 text-sm text-gray-500">Mon-Fri from 8am to 6pm.</p>
<a className="mt-2 block text-base font-semibold text-rose-600 hover:text-rose-700 transition-colors" href="tel:+15702793643">+1 (570) 279-3643</a>
</div>
</div>
<div className="flex items-start group">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-50 border border-orange-100 group-hover:bg-orange-100 transition-colors">
<iconify-icon className="text-orange-600" icon="solar:letter-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="ml-4">
<h3 className="text-sm font-medium text-gray-900">Email</h3>
<p className="mt-1 text-sm text-gray-500">We aim to reply within 24hrs.</p>
<a className="mt-2 block text-sm font-medium text-gray-900 hover:text-orange-600 transition-colors" href="mailto:info@appleconstruction.com">info@appleconstruction.com</a>
</div>
</div>
<div className="flex items-start group">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50 border border-indigo-100 group-hover:bg-indigo-100 transition-colors">
<iconify-icon className="text-indigo-600" icon="solar:map-point-linear" style={{fontSize: '1.25rem', strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="ml-4">
<h3 className="text-sm font-medium text-gray-900">Office</h3>
<p className="mt-1 text-sm text-gray-500">Serving the greater area of</p>
<p className="mt-2 text-sm font-medium text-gray-900">Williamsport, PA</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-gray-950 py-12 border-t border-gray-900 relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-rose-500/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
<div className="flex items-center gap-2">
<span className="font-semibold tracking-tighter text-xl text-white">ACPR</span>
<span className="text-gray-500 text-sm ml-2">© 2024 Apple Construction &amp; Property Reservation LLC.</span>
</div>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-rose-400 transition-colors" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon icon="solar:maximize-square-2-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
<a className="text-gray-400 hover:text-rose-400 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon icon="solar:camera-linear" style={{fontSize: '1.25rem'}}></iconify-icon>
</a>
</div>
</div>
</footer>

<div className="bg-[#0A0A0A] text-gray-300 py-20 border-t-4 border-rose-600 font-mono text-sm relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="mb-12 border-b border-gray-800 pb-8">
<h2 className="text-white text-2xl font-sans font-semibold tracking-tight mb-2">Project Presentation &amp; Design System</h2>
<p className="text-gray-500">Internal Documentation &amp; Client Handover</p>
</div>
<div className="grid md:grid-cols-2 gap-12">

<div>
<h3 className="text-white font-sans font-medium mb-4 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:lightbulb-linear"></iconify-icon> Strategy &amp; Structure
                    </h3>
<ul className="space-y-3 text-gray-400">
<li><strong className="text-gray-200">Objective:</strong> Position ACPR as a premium, reliable contractor in Williamsport, distancing from "cheap handy-man" aesthetics to justify higher project value.</li>
<li><strong className="text-gray-200">Color Strategy:</strong> Integrated soft gradient meshes (rose, amber, indigo) to break up the monochrome layout while maintaining the modern software-company aesthetic requested.</li>
<li><strong className="text-gray-200">Layout:</strong> Z-pattern scanning on hero, F-pattern on forms. Ample whitespace to reduce cognitive load and imply luxury.</li>
</ul>
</div>

<div>
<h3 className="text-white font-sans font-medium mb-4 flex items-center gap-2">
<iconify-icon className="text-indigo-400" icon="solar:text-bold-linear"></iconify-icon> Typography
                    </h3>
<div className="space-y-4 bg-gray-900/50 p-6 rounded-lg border border-gray-800">
<div className="font-sans">
<p className="text-xs text-gray-500 mb-1">Primary Font (Inter)</p>
<div className="text-2xl text-white font-semibold tracking-tight">Semibold Display</div>
<div className="text-base text-gray-300 font-medium mt-2">Medium Subheading</div>
<div className="text-sm text-gray-400 font-normal mt-2">Regular Body Text</div>
</div>
</div>
</div>

<div className="md:col-span-2">
<h3 className="text-white font-sans font-medium mb-4 flex items-center gap-2">
<iconify-icon className="text-rose-500" icon="solar:pallete-2-linear"></iconify-icon> Color Palette Updates
                    </h3>
<div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
<div className="space-y-2">
<div className="h-16 rounded-md bg-white border border-gray-700"></div>
<p className="text-xs">Surface <br/> <span className="text-gray-500">#FFFFFF</span></p>
</div>
<div className="space-y-2">
<div className="h-16 rounded-md bg-gray-50 border border-gray-700"></div>
<p className="text-xs">Background <br/> <span className="text-gray-500">#F9FAFB</span></p>
</div>
<div className="space-y-2">
<div className="h-16 rounded-md bg-gray-900 border border-gray-700"></div>
<p className="text-xs">Text <br/> <span className="text-gray-500">#111827</span></p>
</div>
<div className="space-y-2">
<div className="h-16 rounded-md bg-rose-600 border border-gray-700"></div>
<p className="text-xs">Primary Accent <br/> <span className="text-gray-500">#E11D48</span></p>
</div>
<div className="space-y-2">
<div className="h-16 rounded-md bg-gradient-to-r from-amber-400 to-orange-500 border border-gray-700"></div>
<p className="text-xs">Warm Glows <br/> <span className="text-gray-500">Amber/Orange</span></p>
</div>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
                End of Presentation Output.
            </div>
</div>
</div>

    </>
  );
}
