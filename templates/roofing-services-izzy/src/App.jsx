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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
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
      

<nav className="fixed top-0 inset-x-0 z-50 bg-[#1f1f1f] border-b border-zinc-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-20">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-12 flex items-center justify-center border border-[#c1a070] rounded-sm relative">

<i className="text-[#c1a070] w-6 h-6" data-lucide="shield"></i>
</div>
<div className="flex flex-col justify-center">
<span className="leading-none flex items-center gap-1 text-xl font-semibold text-white tracking-tight">Sapahire Roofing</span>
<span className="text-xs text-zinc-400 tracking-[0.2em] mt-1">ROOF MASTERS Inc.</span>
</div>
</a>

<div className="hidden lg:flex items-center space-x-10">
<a className="text-zinc-200 hover:text-white text-base font-medium transition-colors" href="#about">About us</a>
<a className="text-zinc-200 hover:text-white text-base font-medium transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors text-base font-medium text-zinc-200" href="#advantages">Advantages</a>
<a className="text-zinc-200 hover:text-white text-base font-medium transition-colors" href="#differentials">Differentials</a>
<a className="text-zinc-200 hover:text-white text-base font-medium transition-colors" href="#faq">FAQ</a>
</div>

<div className="hidden lg:flex">
<a className="bg-[#f04c23] hover:bg-[#d9421d] text-white px-6 py-2.5 rounded text-base font-medium transition-colors shadow-sm" href="tel:4087823938">
                        (408) 782-3938
                    </a>
</div>

<div className="lg:hidden flex items-center">
<button className="text-zinc-300 hover:text-white p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>
<main className="flex-grow">

<section className="min-h-[700px] flex overflow-hidden bg-zinc-950 h-screen pt-20 relative items-center">

<div className="absolute inset-0 z-0">
<img alt="Dark modern roof pattern" className="object-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd0d60bd-7347-47b3-8483-0524584939bc_1600w.jpg"/>

<div className="bg-gradient-to-r from-zinc-950/95 via-zinc-950/60 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="z-10 sm:px-6 lg:px-8 w-full max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="max-w-2xl">
<p className="text-base text-zinc-100 font-medium mb-4 flex items-center gap-2">
                        Family-Owned Roofing Experts You Can Trust
                    </p>
<h1 className="md:text-6xl lg:text-7xl leading-[1.05] text-5xl font-semibold text-[#d7c9b8] tracking-tight mb-6">
                        Protect Your Home with Eagle Legacy Roof Masters
                    </h1>
<div className="text-lg text-zinc-200 mb-10 max-w-xl leading-relaxed space-y-1">
<p className="">Family-Owned. Quality Guaranteed.</p>
<p className="">Licensed &amp; Insured. Roof problems?</p>
<p className="">Let us handle it fast, affordable &amp; stress-free.</p>
</div>
<a className="inline-flex items-center justify-center bg-[#f04c23] hover:bg-[#d9421d] text-white px-8 py-4 rounded text-lg font-medium transition-all shadow-lg shadow-black/20 group" href="#contact">
                        GET YOUR FREE ROOF INSPECTION
                        <i className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-6">Comprehensive Roofing Services</h2>
<p className="text-xl text-zinc-600">Expert solutions for every aspect of your roof, delivered with precision and care by our licensed professionals.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group">
<div className="w-14 h-14 bg-white border border-zinc-200 rounded-xl flex items-center justify-center mb-6 text-zinc-900 shadow-sm group-hover:bg-[#f04c23] group-hover:text-white group-hover:border-[#f04c23] transition-colors">
<i data-lucide="wrench"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">Roof Repair</h3>
<p className="text-lg text-zinc-600 leading-relaxed mb-6">Fast, effective repairs for leaks, damaged shingles, and structural issues to prevent further home damage.</p>
</div>

<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group">
<div className="w-14 h-14 bg-white border border-zinc-200 rounded-xl flex items-center justify-center mb-6 text-zinc-900 shadow-sm group-hover:bg-[#f04c23] group-hover:text-white group-hover:border-[#f04c23] transition-colors">
<i data-lucide="home"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">New Installation</h3>
<p className="text-lg text-zinc-600 leading-relaxed mb-6">Premium roof replacements and new builds using industry-leading materials for lasting durability.</p>
</div>

<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group">
<div className="w-14 h-14 bg-white border border-zinc-200 rounded-xl flex items-center justify-center mb-6 text-zinc-900 shadow-sm group-hover:bg-[#f04c23] group-hover:text-white group-hover:border-[#f04c23] transition-colors">
<i data-lucide="search"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">Thorough Inspection</h3>
<p className="text-lg text-zinc-600 leading-relaxed mb-6">Comprehensive evaluations to identify hidden problems early and assess the overall health of your roof.</p>
</div>

<div className="bg-zinc-50 rounded-2xl p-8 border border-zinc-100 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 group">
<div className="w-14 h-14 bg-white border border-zinc-200 rounded-xl flex items-center justify-center mb-6 text-zinc-900 shadow-sm group-hover:bg-[#f04c23] group-hover:text-white group-hover:border-[#f04c23] transition-colors">
<i data-lucide="shield-check"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-4">Preventative Maintenance</h3>
<p className="text-lg text-zinc-600 leading-relaxed mb-6">Regular upkeep programs designed to extend the lifespan of your roof and ensure optimal performance.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-zinc-900 pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-sm font-medium mb-6 border border-zinc-700">
<i className="w-4 h-4 text-[#f04c23]" data-lucide="award"></i> Experience You Can Trust
                        </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6 leading-tight text-zinc-50">
                            A Legacy of Excellence in Local Roofing
                        </h2>
<p className="text-xl text-zinc-400 mb-8 leading-relaxed">
                            For over a generation, Eagle Legacy Roof Masters has been protecting homes and families in our community. We believe in doing the job right the first time, using superior materials and uncompromising craftsmanship.
                        </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 text-[#f04c23]">
<i className="w-5 h-5" data-lucide="check"></i>
</div>
<div className="">
<h4 className="text-xl font-semibold tracking-tight text-zinc-100 mb-1">Fully Licensed &amp; Insured</h4>
<p className="text-lg text-zinc-400">Complete peace of mind knowing your property is protected and handled by certified professionals.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 text-[#f04c23]">
<i className="w-5 h-5" data-lucide="clock"></i>
</div>
<div className="">
<h4 className="text-xl font-semibold tracking-tight text-zinc-100 mb-1">Rapid Response Times</h4>
<p className="text-lg text-zinc-400">When emergencies strike, our local team is ready to respond quickly to secure your home.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden relative z-10">
<img alt="Roofing professional at work" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/98e75322-f32d-4190-84df-4f6b6d0af27e_1600w.webp"/>
</div>

<div className="absolute inset-0 bg-zinc-800 rounded-2xl translate-x-6 translate-y-6 -z-10"></div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-4">Our Recent Projects</h2>
<p className="text-xl text-zinc-600">Browse through our portfolio of completed roof installations and repairs.</p>
</div>
<a className="inline-flex items-center gap-2 text-[#f04c23] hover:text-[#d9421d] font-medium text-lg transition-colors" href="#">
                        View Full Gallery <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-200 group relative">
<img alt="Modern home roof" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f46e38f-4c72-45f9-8769-9aea3025c51f_800w.jpg"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-200 group relative">
<img alt="Residential roof installation" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7cbfe458-e357-496f-b58e-b6085ac68af4_800w.jpg"/>
<div className="group-hover:bg-black/20 transition-colors duration-300 bg-black/0 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="aspect-[4/3] rounded-xl overflow-hidden bg-zinc-200 group relative">
<img alt="Dark tile roof details" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3074f28-33e1-47b0-8107-b25785179004_800w.jpg"/>
<div className="group-hover:bg-[#f04c23]/90 transition-all duration-500 flex group-hover:opacity-100 backdropzn bg-black/0 opacity-0 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="flex flex-col items-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
<svg className="lucide lucide-zoom-in text-white w-8 h-8 mb-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="11" cy="11" r="8"></circle>
<line x1="21" x2="16.65" y1="21" y2="16.65"></line>
<line x1="11" x2="11" y1="8" y2="14"></line>
<line x1="8" x2="14" y1="11" y2="11"></line>
</svg>
<span className="text-white font-medium tracking-wide">View Project</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-zinc-100 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Trusted by Local Homeowners</h2>
<p className="text-xl text-zinc-600">Don't just take our word for it. Read what our customers have to say.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-zinc-50 border-zinc-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="flex gap-1 text-amber-400 mb-6">
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
</div>
<p className="text-lg text-zinc-700 mb-8 leading-relaxed">"Eagle Legacy replaced our entire roof after a severe storm. Their team was professional, fast, and left the yard spotless. Highly recommend their services."</p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center font-semibold text-zinc-600">JD</div>
<div className="">
<h4 className="text-base font-semibold text-zinc-900">James D.</h4>
<p className="text-sm text-zinc-500">Full Roof Replacement</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="flex gap-1 text-amber-400 mb-6">
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
</div>
<p className="text-lg text-zinc-700 mb-8 leading-relaxed">"Had a persistent leak that two other companies couldn't fix. The experts from Eagle Legacy found the issue during their inspection and fixed it the same day."</p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center font-semibold text-zinc-600">SM</div>
<div className="">
<h4 className="text-base font-semibold text-zinc-900">Sarah M.</h4>
<p className="text-sm text-zinc-500">Leak Repair</p>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-zinc-50 border border-zinc-100">
<div className="flex gap-1 text-amber-400 mb-6">
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
<i className="fill-current w-5 h-5" data-lucide="star"></i>
</div>
<p className="text-lg text-zinc-700 mb-8 leading-relaxed">"Very transparent pricing and excellent communication throughout the process. They handled all the permits and made a stressful situation incredibly easy."</p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-zinc-200 rounded-full flex items-center justify-center font-semibold text-zinc-600">RW</div>
<div>
<h4 className="text-base font-semibold text-zinc-900">Robert W.</h4>
<p className="text-sm text-zinc-500">New Installation</p>
</div>
</div>
</div>
</div>
</div>
</section><section className="bg-white border-zinc-100 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold text-zinc-900 tracking-tight mb-4">1. Roofing leaks</h2>
<p className="text-xl text-zinc-600">One of the most common roofing issues, especially in areas like Providence that experience significant rainfall, is a leaking roof. Leaks can occur for several reasons, from cracked or missing shingles to improper installation or damaged flashing around chimneys, vents, and skylights. Water can seep into your home, causing damage to insulation, ceilings, walls, and even the structural framework.

</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">



</div>
</div>
</section><section className="bg-white border-zinc-100 border-t pt-24 pb-24">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold text-zinc-900 tracking-tight mb-4">2. Damaged or Missing Shingles</h2>
<p className="text-xl text-zinc-600">Shingles protect your roof from moisture, but they can become damaged due to weather, particularly during heavy storms. Wind, hail, and even falling tree branches can crack, dislodge, or completely remove shingles, exposing your roof to the elements.

</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">



</div>
</div>
</section><section className="bg-white border-zinc-100 border-t pt-24 pb-24 -translate-y-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold text-zinc-900 tracking-tight mb-4">3. Roof Ventilation Issues</h2>
<p className="text-xl text-zinc-600">Proper roof ventilation is essential to maintain a healthy attic space and prevent moisture buildup. Without adequate ventilation, heat and moisture can become trapped, leading to mold growth, higher energy costs, and potential damage to your roof structure.

</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">



</div>
</div>
</section>

<section className="overflow-hidden text-white bg-zinc-950 pt-24 pb-24 relative" id="contact">

<div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-zinc-900 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 rounded-3xl p-8 lg:p-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to Protect Your Home?</h2>
<p className="text-xl text-zinc-400 mb-10">Request a free, no-obligation roof inspection and detailed estimate today. Our team is ready to help.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-zinc-800/80 rounded-lg flex items-center justify-center flex-shrink-0 border border-zinc-700 text-zinc-300">
<i className="w-6 h-6" data-lucide="phone"></i>
</div>
<div className="">
<p className="text-base text-zinc-400 font-medium mb-1">Call us directly</p>
<a className="hover:text-[#f04c23] transition-colors text-2xl font-semibold text-white tracking-tight" href="tel:4087823938">(408) 782-3938</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-zinc-800/80 rounded-lg flex items-center justify-center flex-shrink-0 border border-zinc-700 text-zinc-300">
<i className="w-6 h-6" data-lucide="mail"></i>
</div>
<div className="">
<p className="text-base text-zinc-400 font-medium mb-1">Email us</p>
<a className="text-xl font-medium text-white hover:text-[#f04c23] transition-colors" href="mailto:info@eaglelegacyroof.com">info@eaglelegacyroof.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-zinc-800/80 rounded-lg flex items-center justify-center flex-shrink-0 border border-zinc-700 text-zinc-300">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<div className="">
<p className="text-base text-zinc-400 font-medium mb-1">Service Area</p>
<p className="text-xl font-medium text-white">Serving the Greater Metro Area &amp; Surrounding Counties</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-2xl">
<h3 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-6">Request a Free Quote</h3>
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="block text-sm font-medium text-zinc-700" htmlFor="first-name">First Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-base focus:ring-2 focus:ring-[#f04c23] focus:border-transparent outline-none transition-all" id="first-name" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-zinc-700" htmlFor="last-name">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-base focus:ring-2 focus:ring-[#f04c23] focus:border-transparent outline-none transition-all" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-zinc-700" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-base focus:ring-2 focus:ring-[#f04c23] focus:border-transparent outline-none transition-all" id="phone" placeholder="(555) 000-0000" type="tel"/>
</div>
<div className="space-y-2 relative select-wrapper">
<label className="block text-sm font-medium text-zinc-700" htmlFor="service">Service Needed</label>
<select className="w-full px-4 py-3 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-base focus:ring-2 focus:ring-[#f04c23] focus:border-transparent outline-none transition-all cursor-pointer" id="service">
<option disabled="" selected="" value="">Select a service...</option>
<option value="repair">Roof Repair</option>
<option value="replacement">Full Roof Replacement</option>
<option value="inspection">Inspection / Estimate</option>
<option value="maintenance">Maintenance</option>
</select>
</div>
<div className="space-y-2">
<label className="block text-sm font-medium text-zinc-700" htmlFor="message">Project Details</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-zinc-300 bg-white text-zinc-900 text-base focus:ring-2 focus:ring-[#f04c23] focus:border-transparent outline-none transition-all resize-none" id="message" placeholder="Tell us briefly about your roof issues..." rows="4"></textarea>
</div>
<button className="w-full bg-[#1f1f1f] hover:bg-black text-white px-6 py-4 rounded-lg text-lg font-medium transition-colors mt-2" type="submit">
                                    Submit Request
                                </button>
<p className="text-xs text-zinc-500 text-center mt-4">We respect your privacy. Your information will never be shared.</p>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#1a1a1a] border-t border-zinc-800 text-zinc-400 py-12 pb-24">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<i className="text-zinc-500 w-6 h-6" data-lucide="shield"></i>
<span className="text-white text-lg font-semibold tracking-tight uppercase tracking-widest">Eagle Legacy</span>
</div>
<p className="text-base max-w-sm mb-6">Professional, family-owned roofing services providing top-tier repair, installation, and maintenance for local homeowners.</p>
<div className="flex gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
<div className="">
<h4 className="text-white text-base font-semibold mb-4">Services</h4>
<ul className="space-y-2 text-base">
<li className=""><a className="hover:text-white transition-colors" href="#">Roof Repair</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Roof Installation</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#">Inspections</a></li>
<li><a className="hover:text-white transition-colors" href="#">Maintenance</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-base font-semibold mb-4">Company</h4>
<ul className="space-y-2 text-base">
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
<p className="">© 2024 Eagle Legacy Roof Masters Inc. All rights reserved.</p>
<p>Licensed &amp; Insured</p>
</div>
</div>
</footer>

<div className="fixed bottom-0 inset-x-0 bg-[#111111] border-t border-zinc-800 text-zinc-400 p-4 z-50 flex justify-between items-start md:items-center text-sm transform transition-transform duration-300" id="privacy-banner">
<div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-4 sm:px-6 lg:px-8">
<div className="flex-grow">
<strong className="text-zinc-100 block mb-1 text-base">We value your privacy</strong>
                This website or its third-party tools process personal data. You can opt out of the sale of your personal information by clicking on the "Do Not Sell or Share My Personal Information" link.
            </div>
<div className="flex items-center gap-6 flex-shrink-0">
<a className="text-[#f04c23] hover:text-[#d9421d] font-medium transition-colors" href="#">Do Not Sell or Share My Personal Information</a>
<button aria-label="Close banner" className="text-zinc-500 hover:text-white transition-colors" onclick="document.getElementById('privacy-banner').style.transform = 'translateY(100%)'">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
</div>
</div>



    </>
  );
}
