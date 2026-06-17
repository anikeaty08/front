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
      

<header className="fixed top-0 w-full z-50 bg-[#FDFCFB]/95 backdrop-blur-md border-b border-neutral-200/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tighter uppercase text-neutral-900 select-none" href="#">
                Cimenza
            </a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#microcement-page">Microcement Systems</a>
<a className="text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors" href="#contact-page">Contact</a>
</nav>

<div className="flex items-center gap-6">
<div className="hidden lg:flex items-center gap-4 text-xs font-medium text-neutral-500 uppercase tracking-wide">
<span className="cursor-pointer hover:text-neutral-900">EN</span>
<span className="text-neutral-300">/</span>
<span className="cursor-pointer hover:text-neutral-900">NL</span>
<span className="text-neutral-300">/</span>
<span className="cursor-pointer hover:text-neutral-900">ES</span>
</div>
<a className="flex items-center gap-2 text-sm font-medium text-neutral-900 border border-neutral-200 px-4 py-2 rounded-sm hover:bg-neutral-50 transition-all" href="#">
<svg className="lucide lucide-lock w-4 h-4 text-neutral-500" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    Partner Login
                </a>
</div>
</div>
</header>
<main className="flex-grow pt-20">



<div className="scroll-mt-24" id="microcement-page">

<section className="relative h-[65vh] min-h-[500px] flex items-end pb-16 overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Microcement Texture" className="w-full h-full object-cover opacity-90 grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
<span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium tracking-widest uppercase mb-6 rounded-sm">System Overview</span>
<h1 className="md:text-6xl text-4xl font-medium text-white tracking-tight mb-6">
                        Cimenza Microcement <br/> Systems
                    </h1>
<p className="text-lg text-white/80 max-w-xl font-light leading-relaxed">
                        A complete mineral-based finishing system. Engineered for professional application, consistency, and architectural durability.
                    </p>
</div>
</section>

<section className="py-24 bg-white border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="">
<h2 className="text-3xl font-medium tracking-tight mb-6">The System Approach</h2>
<p className="text-neutral-600 mb-6 leading-relaxed">
                            Cimenza is not just a product; it is a closed-loop system. We supply ready-mix, machine-tinted microcement that eliminates onsite mixing errors.
                        </p>
<p className="text-neutral-600 leading-relaxed">
                            From the primer to the protective varnish, every component is chemically balanced to work together, ensuring high adhesion, crack resistance, and color uniformity.
                        </p>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="p-6 bg-[#F9F8F6] rounded-sm">
<svg className="lucide lucide-layers w-6 h-6 text-neutral-800 mb-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<h3 className="text-sm font-medium mb-2">Multi-Layer</h3>
<p className="text-xs text-neutral-500">Structured application for depth and strength.</p>
</div>
<div className="p-6 bg-[#F9F8F6] rounded-sm">
<svg className="lucide lucide-droplet w-6 h-6 text-neutral-800 mb-4" data-lucide="droplet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path></svg>
<h3 className="text-sm font-medium mb-2">Water Resistant</h3>
<p className="text-xs text-neutral-500">Suitable for bathrooms and wet areas.</p>
</div>
<div className="p-6 bg-[#F9F8F6] rounded-sm">
<svg className="lucide lucide-shield-check w-6 h-6 text-neutral-800 mb-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="text-sm font-medium mb-2">High Traffic</h3>
<p className="text-xs text-neutral-500">Excellent abrasion resistance.</p>
</div>
<div className="p-6 bg-[#F9F8F6] rounded-sm">
<svg className="lucide lucide-palette w-6 h-6 text-neutral-800 mb-4" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
<h3 className="text-sm font-medium mb-2">Consistent</h3>
<p className="text-xs text-neutral-500">Machine-mixed for perfect color matching.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FDFCFB]">
<div className="max-w-7xl mx-auto px-6 mb-16">
<h2 className="text-3xl font-medium tracking-tight mb-4">Rockbase Variants</h2>
<p className="text-neutral-600 max-w-2xl">The Rockbase series offers specific grain sizes for every stage of the project, from structural leveling to the finest aesthetic finish.</p>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative bg-white border border-neutral-100 p-8 rounded-sm hover:border-neutral-300 transition-all duration-300">
<div className="absolute top-8 right-8 text-neutral-200 text-4xl font-light select-none">S</div>
<h3 className="text-xl font-medium mb-2">Rockbase S</h3>
<span className="inline-block text-xs font-medium uppercase tracking-wider text-neutral-500 mb-6">Ultra-fine Structure</span>
<p className="text-neutral-600 text-sm leading-relaxed mb-8">
                            Designed for smooth, refined finishes. It creates a seamless surface with a modern, sophisticated appearance while maintaining mechanical strength.
                        </p>
<ul className="text-xs text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div> Top finish layer</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div> Minimal texture</li>
</ul>
</div>

<div className="group relative bg-white border border-neutral-100 p-8 rounded-sm hover:border-neutral-300 transition-all duration-300">
<div className="absolute top-8 right-8 text-neutral-200 text-4xl font-light select-none">M</div>
<h3 className="text-xl font-medium mb-2">Rockbase M</h3>
<span className="inline-block text-xs font-medium uppercase tracking-wider text-neutral-500 mb-6">Medium Structure</span>
<p className="text-neutral-600 text-sm leading-relaxed mb-8">
                            A versatile intermediate or finishing layer. Balances texture and smoothness, enhancing the natural mineral character of the surface.
                        </p>
<ul className="text-xs text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div> Versatile application</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div> Natural aesthetic</li>
</ul>
</div>

<div className="group relative bg-white border border-neutral-100 p-8 rounded-sm hover:border-neutral-300 transition-all duration-300">
<div className="absolute top-8 right-8 text-neutral-200 text-4xl font-light select-none">L</div>
<h3 className="text-xl font-medium mb-2">Rockbase L</h3>
<span className="inline-block text-xs font-medium uppercase tracking-wider text-neutral-500 mb-6">Coarse Structure</span>
<p className="text-neutral-600 text-sm leading-relaxed mb-8">
                            Coarse-grain microcement for projects seeking a rustic, raw appearance. Also serves as a strong base layer over mesh.
                        </p>
<ul className="text-xs text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div> High durability</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div> Rustic texture</li>
</ul>
</div>

<div className="group relative bg-white border border-neutral-100 p-8 rounded-sm hover:border-neutral-300 transition-all duration-300">
<div className="absolute top-8 right-8 text-neutral-200 text-4xl font-light select-none">XL</div>
<h3 className="text-xl font-medium mb-2">Rockbase XL</h3>
<span className="inline-block text-xs font-medium uppercase tracking-wider text-neutral-500 mb-6">Structural Base</span>
<p className="text-neutral-600 text-sm leading-relaxed mb-8">
                            The coarsest grain, developed for leveling surfaces and providing structural integrity to the entire system.
                        </p>
<ul className="text-xs text-neutral-500 space-y-2">
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div> Base coat leveling</li>
<li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-neutral-300 rounded-full"></div> Maximum hardness</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F2EF] border-y border-neutral-200">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium tracking-tight mb-12">Application Method</h2>
<div className="space-y-4">

<div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-sm border border-neutral-100">
<div className="md:w-32 flex-shrink-0">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Step 01</span>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-2">Preparation &amp; Primer</h4>
<p className="text-sm text-neutral-600">Surface cleaning, fiberglass mesh installation, and application of PRIMER/PRIMERQUARTZ.</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-sm border border-neutral-100">
<div className="md:w-32 flex-shrink-0">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Step 02</span>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-2">Base Layers</h4>
<p className="text-sm text-neutral-600">Application of 1-2 coats of Rockbase XL or L for leveling and strength. Sanding (40-grit).</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-sm border border-neutral-100">
<div className="md:w-32 flex-shrink-0">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Step 03</span>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-2">Finish Layers</h4>
<p className="text-sm text-neutral-600">Application of 2 coats of Rockbase M or S for the desired aesthetic. Fine sanding (120-grit).</p>
</div>
</div>

<div className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded-sm border border-neutral-100">
<div className="md:w-32 flex-shrink-0">
<span className="text-xs font-semibold text-neutral-400 uppercase tracking-widest">Step 04</span>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-2">Sealing</h4>
<p className="text-sm text-neutral-600">Application of VARNISH W (2 coats) or VARNISH DSV for maximum protection.</p>
</div>
</div>
</div>
</div>
</section>
</div>



<div className="bg-white scroll-mt-20" id="contact-page">
<section className="max-w-7xl mx-auto px-6 py-24">

<div className="mb-16 max-w-2xl">
<h1 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-6">Contact</h1>
<p className="text-lg text-neutral-600 leading-relaxed font-normal">
                        For distribution inquiries, technical information or professional collaboration, please contact Cimenza using the form below or via the provided contact details.
                    </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

<div className="lg:col-span-2">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-medium text-neutral-700 uppercase tracking-wide" htmlFor="company">Company Name <span className="text-neutral-400">*</span></label>
<input className="w-full bg-[#FDFCFB] border border-neutral-200 rounded-sm px-4 py-3 text-sm placeholder:text-neutral-400 transition-all" id="company" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-neutral-700 uppercase tracking-wide" htmlFor="name">Contact Person <span className="text-neutral-400">*</span></label>
<input className="w-full bg-[#FDFCFB] border border-neutral-200 rounded-sm px-4 py-3 text-sm placeholder:text-neutral-400 transition-all" id="name" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-medium text-neutral-700 uppercase tracking-wide" htmlFor="email">Email Address <span className="text-neutral-400">*</span></label>
<input className="w-full bg-[#FDFCFB] border border-neutral-200 rounded-sm px-4 py-3 text-sm placeholder:text-neutral-400 transition-all" id="email" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-neutral-700 uppercase tracking-wide" htmlFor="phone">Phone Number <span className="text-neutral-400 italic normal-case">(Optional)</span></label>
<input className="w-full bg-[#FDFCFB] border border-neutral-200 rounded-sm px-4 py-3 text-sm placeholder:text-neutral-400 transition-all" id="phone" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-medium text-neutral-700 uppercase tracking-wide" htmlFor="country">Country / Region <span className="text-neutral-400">*</span></label>
<input className="w-full bg-[#FDFCFB] border border-neutral-200 rounded-sm px-4 py-3 text-sm placeholder:text-neutral-400 transition-all" id="country" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-neutral-700 uppercase tracking-wide" htmlFor="subject">Subject <span className="text-neutral-400">*</span></label>
<select className="form-select w-full bg-[#FDFCFB] border border-neutral-200 rounded-sm px-4 py-3 text-sm text-neutral-900 transition-all" id="subject">
<option value="distribution">Distribution Inquiry</option>
<option value="technical">Technical Information</option>
<option value="documentation">Documentation Request</option>
<option value="other">Other Professional Inquiry</option>
</select>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-neutral-700 uppercase tracking-wide" htmlFor="message">Message <span className="text-neutral-400">*</span></label>
<textarea className="w-full bg-[#FDFCFB] border border-neutral-200 rounded-sm px-4 py-3 text-sm placeholder:text-neutral-400 transition-all" id="message" required="" rows="6"></textarea>
</div>
<div className="pt-4">
<button className="inline-flex items-center justify-center px-8 py-3.5 bg-neutral-900 text-white text-sm font-medium rounded-sm hover:bg-neutral-800 active:transform active:scale-[0.99] transition-all w-full md:w-auto" type="submit">
                                    Send Message
                                </button>
</div>
</form>
</div>

<div className="space-y-12 lg:border-l lg:border-neutral-100 lg:pl-12">

<div>
<h3 className="text-sm font-medium text-neutral-900 mb-4 flex items-center gap-2">
<svg className="lucide lucide-map-pin w-4 h-4 text-neutral-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Cimenza HQ
                            </h3>
<address className="not-italic text-sm text-neutral-600 leading-relaxed">
                                Winterbeekstraat 17<br/>
                                3511 Hasselt<br/>
                                Belgium
                            </address>
</div>

<div>
<h3 className="text-sm font-medium text-neutral-900 mb-4 flex items-center gap-2">
<svg className="lucide lucide-message-square w-4 h-4 text-neutral-400" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> Get in touch
                            </h3>
<div className="space-y-3">
<a className="flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 transition-colors group" href="mailto:info@cimenza.eu">
<span className="border-b border-transparent group-hover:border-neutral-300 pb-0.5">info@cimenza.eu</span>
</a>
<a className="flex items-center gap-3 text-sm text-neutral-600 hover:text-neutral-900 transition-colors group" href="https://wa.me/32478117174">
<span className="border-b border-transparent group-hover:border-neutral-300 pb-0.5">+32 478 117 174</span>
<span className="text-[10px] bg-green-100 text-green-700 px-1.5 py-0.5 rounded ml-auto">WhatsApp</span>
</a>
</div>
</div>

<div>
<h3 className="text-sm font-medium text-neutral-900 mb-4 flex items-center gap-2">
<svg className="lucide lucide-share-2 w-4 h-4 text-neutral-400" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg> Follow us
                            </h3>
<div className="flex gap-4">
<a className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 transition-all bg-[#FDFCFB]" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 transition-all bg-[#FDFCFB]" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 border border-neutral-200 rounded-full flex items-center justify-center text-neutral-500 hover:text-neutral-900 hover:border-neutral-400 transition-all bg-[#FDFCFB]" href="#">
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="mt-32 border-t border-neutral-200 pt-16">
<h2 className="text-2xl font-medium tracking-tight mb-8">Frequently Asked Questions</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
<div className="space-y-2">
<h4 className="text-sm font-medium text-neutral-900">How do I become a distributor?</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                                Please submit a "Distribution Inquiry" using the form above. Our commercial team will review your profile and contact you within 48 hours to discuss partnership opportunities.
                            </p>
</div>
<div className="space-y-2">
<h4 className="text-sm font-medium text-neutral-900">Is technical training available?</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                                Yes, Cimenza organizes regular training sessions for professionals. Contact us to receive the calendar for upcoming workshops in your region.
                            </p>
</div>
<div className="space-y-2">
<h4 className="text-sm font-medium text-neutral-900">Where can I find Technical Data Sheets (TDS)?</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                                Technical documentation is available in the Partner Area. If you do not have a login, please select "Documentation Request" in the contact form.
                            </p>
</div>
<div className="space-y-2">
<h4 className="text-sm font-medium text-neutral-900">Do you sell directly to private individuals?</h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                                No, Cimenza is strictly B2B. We can, however, refer private individuals to certified applicators in their area.
                            </p>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="bg-[#FDFCFB] border-t border-neutral-200 pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1">
<span className="text-lg font-semibold tracking-tighter uppercase block mb-6">Cimenza</span>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Premium microcement systems developed for professional distribution.
                    </p>
</div>

<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900" href="#">Technical Files</a></li>
<li><a className="hover:text-neutral-900" href="#">Partner Login</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-600">
<li><a className="hover:text-neutral-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-neutral-900" href="#">Terms &amp; Conditions</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wide mb-4">Contact</h4>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-400">© 2023 Cimenza. All rights reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
