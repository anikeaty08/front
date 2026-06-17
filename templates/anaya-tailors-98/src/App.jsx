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



    document.addEventListener("DOMContentLoaded", function() {
      lucide.createIcons({
        attrs: { stroke: 'currentColor', 'stroke-width': 1.5 }
      });
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
      

<div className="w-full bg-cyan-50/80 border-b border-cyan-100 text-sm" style={{}}>
<div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-center gap-3">
<svg className="lucide lucide-sparkles w-4 h-4 text-cyan-700" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<p className="text-cyan-900/90" style={{}}>Festive Edit now live — curated Banarasi &amp; Kanchipuram pieces with handcrafted finishes.</p>
</div>
</div>

<header className="sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-neutral-200/60" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-sm bg-neutral-900 text-white flex items-center justify-center tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif', fontWeight: '600'}}>AT</div>
<div className="leading-tight">
<div className="text-neutral-900 text-[18px] tracking-tight" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Anaya Tailors</div>
<div className="text-[11px] text-neutral-500 -mt-0.5 tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif'}}>Bespoke Ethnic &amp; Bridal</div>
</div>
</a>
<nav className="hidden md:flex items-center gap-8 text-[14.5px]">
<a className="text-neutral-700 hover:text-neutral-900 transition-colors" href="#collections" style={{}}>Collections</a>
<a className="text-neutral-700 hover:text-neutral-900 transition-colors" href="#featured" style={{}}>Featured</a>
<a className="text-neutral-700 hover:text-neutral-900 transition-colors" href="#popular" style={{}}>Popular</a>
<a className="text-neutral-700 hover:text-neutral-900 transition-colors" href="#testimonials" style={{}}>Testimonials</a>
<a className="text-neutral-700 hover:text-neutral-900 transition-colors" href="#studio" style={{}}>Studio</a>
</nav>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-neutral-300/80 bg-white hover:bg-neutral-50 hover:border-neutral-400 transition-colors text-[14px]" href="#enquiry" style={{}}>
<svg className="lucide lucide-phone w-4.5 h-4.5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            Enquire
          </a>
<a className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors text-[14px]" href="#booking" style={{}}>
<svg className="lucide lucide-calendar w-4.5 h-4.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Book Fitting
          </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid md:grid-cols-2 gap-10 md:pt-16 pt-12 pb-10 items-center">
<div className="">
<h1 className="text-4xl md:text-5xl tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>
            Heritage Tailoring for Timeless Celebrations
          </h1>
<p className="mt-4 text-[15.5px] leading-relaxed text-neutral-700" style={{fontFamily: 'Inter, ui-sans-serif'}}>
            From regal sherwanis and bespoke blouses to handloom kurta sets, our atelier blends time-honored craftsmanship, heritage textiles, and precise fit. Perfect for weddings, festive seasons, and heirloom wardrobes.
          </p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 transition-colors" href="#featured" style={{}}>
              Explore Featured
              <svg className="lucide lucide-arrow-right w-4.5 h-4.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 hover:border-neutral-400 transition-colors" href="#popular" style={{}}>
              Shop Popular
              <svg className="lucide lucide-shopping-bag w-4.5 h-4.5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</a>
</div>
<div className="grid grid-cols-3 gap-4 text-center mt-7">
<div className="bg-white border-neutral-200 border rounded-md pt-3 pr-3 pb-3 pl-3" style={{}}>
<div className="flex items-center justify-center gap-2">
<svg className="lucide lucide-scissors w-4.5 h-4.5 text-emerald-700" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
<span className="text-sm text-neutral-600" style={{}}>Handcrafted</span>
</div>
<p className="text-xl tracking-tight text-neutral-900 mt-1" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Made-to-Measure</p>
</div>
<div className="rounded-md border border-neutral-200 bg-white p-3" style={{}}>
<div className="flex items-center justify-center gap-2">
<svg className="lucide lucide-ruler w-4.5 h-4.5 text-emerald-700" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>
<span className="text-sm text-neutral-600" style={{}}>Precision Fit</span>
</div>
<p className="text-xl tracking-tight text-neutral-900 mt-1" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Tailored Comfort</p>
</div>
<div className="rounded-md border border-neutral-200 bg-white p-3" style={{}}>
<div className="flex items-center justify-center gap-2">
<svg className="lucide lucide-shield-check w-4.5 h-4.5 text-emerald-700" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-neutral-600" style={{}}>Premium</span>
</div>
<p className="text-xl tracking-tight text-neutral-900 mt-1" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Heritage Fabrics</p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] w-full rounded-lg overflow-hidden border border-neutral-200 shadow-sm" style={{}}>
<img alt="Tailor crafting a bespoke sherwani" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1494955870715-979ca4f13bf0?w=1600&amp;q=80"/>
</div>
<div className="absolute -bottom-5 -left-5 hidden md:flex bg-white rounded-md border border-neutral-200 shadow p-3 items-center gap-3" style={{}}>
<svg className="lucide lucide-sparkles w-4.5 h-4.5 text-cyan-700" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<div>
<p className="text-[13px] text-neutral-800" style={{fontFamily: 'Inter, ui-sans-serif'}}>Hand embroidery • Zardozi • Aari • Chikankari</p>
<p className="text-[12px] text-neutral-500" style={{}}>Premium Banarasi • Kanchipuram • Jamdani • Tussar</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pt-6 pb-2" id="collections">
<div className="flex items-center justify-between gap-4">
<h2 className="text-2xl tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Collections</h2>
<div className="flex flex-wrap gap-2">
<button className="px-3 py-1.5 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 hover:border-neutral-400 text-sm" style={{}}>Men</button>
<button className="px-3 py-1.5 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 hover:border-neutral-400 text-sm" style={{}}>Women</button>
<button className="px-3 py-1.5 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 hover:border-neutral-400 text-sm" style={{}}>Wedding</button>
<button className="px-3 py-1.5 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 hover:border-neutral-400 text-sm" style={{}}>Festive</button>
<button className="px-3 py-1.5 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 hover:border-neutral-400 text-sm" style={{}}>Kids</button>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 pt-4" id="featured">
<div className="flex items-end justify-between">
<div className="">
<h3 className="text-[26px] tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Featured Bespoke Pieces</h3>
<p className="text-neutral-600 text-[14.5px] mt-1" style={{}}>Hand-picked favourites showcasing fine craftsmanship, texture, and classic silhouettes.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-neutral-700 hover:text-neutral-900 text-sm" href="#enquiry" style={{}}>
        Bespoke Enquiry
        <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">

<article className="rounded-lg overflow-hidden border border-neutral-200 bg-white hover:shadow-sm transition-shadow" style={{}}>
<div className="aspect-[4/3] overflow-hidden">
<img alt="Hand-embroidered Sherwani" className="hover:scale-[1.02] transition-transform duration-500 w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1555447405-057915b40299?w=1600&amp;q=80"/>
</div>
<div className="p-4">
<h4 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Heritage Sherwani</h4>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Zardozi accents • Silk blend • Antique buttons</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-neutral-800 text-[15px]" style={{}}>From ₹18,900</span>
<div className="flex gap-2">
<a className="px-3 py-1.5 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 text-sm" href="#enquiry" style={{}}>Enquire</a>
<a className="px-3 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 text-sm" href="#booking" style={{}}>Book Fitting</a>
</div>
</div>
</div>
</article>

<article className="rounded-lg overflow-hidden border border-neutral-200 bg-white hover:shadow-sm transition-shadow" style={{}}>
<div className="aspect-[4/3] overflow-hidden">
<img alt="Bridal Lehenga with intricate handwork" className="hover:scale-[1.02] transition-transform duration-500 w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1678805408956-a12debe9b135?w=1600&amp;q=80"/>
</div>
<div className="p-4">
<h4 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Bridal Lehenga</h4>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Resham • Sequins • Custom can-can volume</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-neutral-800 text-[15px]" style={{}}>From ₹42,500</span>
<div className="flex gap-2">
<a className="px-3 py-1.5 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 text-sm" href="#enquiry" style={{}}>Enquire</a>
<a className="px-3 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 text-sm" href="#booking" style={{}}>Book Fitting</a>
</div>
</div>
</div>
</article>

<article className="rounded-lg overflow-hidden border border-neutral-200 bg-white hover:shadow-sm transition-shadow" style={{}}>
<div className="aspect-[4/3] overflow-hidden">
<img alt="Handloom Kurta Set" className="hover:scale-[1.02] transition-transform duration-500 w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1657029674341-3212a82d0bd3?w=1600&amp;q=80"/>
</div>
<div className="p-4">
<h4 className="text-lg tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Handloom Kurta Sets</h4>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Chanderi • Ikat • Subtle threadwork</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-neutral-800 text-[15px]" style={{}}>From ₹4,950</span>
<div className="flex gap-2">
<a className="px-3 py-1.5 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 text-sm" href="#enquiry" style={{}}>Enquire</a>
<a className="px-3 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 text-sm" href="#booking" style={{}}>Book Fitting</a>
</div>
</div>
</div>
</article>



</div>
</section>

<div className="max-w-7xl mx-auto px-6 my-10">
<div className="h-px bg-gradient-to-r from-transparent via-neutral-300/70 to-transparent" style={{}}></div>
</div>

<section className="max-w-7xl mx-auto px-6" id="popular">
<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
<div>
<h3 className="text-[26px] tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Popular Ready-to-Order</h3>
<p className="text-neutral-600 text-[14.5px] mt-1" style={{}}>Quick-ship favourites with standard sizes and minor alterations included.</p>
</div>
<div className="flex items-center gap-2">
<div className="hidden sm:flex items-center gap-2 text-sm text-neutral-700" style={{}}>
<svg className="lucide lucide-truck w-4 h-4" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
          5–7 day dispatch
        </div>
<div className="hidden sm:flex items-center gap-2 text-sm text-neutral-700" style={{}}>
<svg className="lucide lucide-shield w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
          Fit assurance
        </div>
</div>
</div>
<div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="rounded-lg border border-neutral-200 bg-white overflow-hidden hover:shadow-sm" style={{}}>
<img alt="Pastel Achkan" className="w-full h-44 object-cover" loading="lazy" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-4">
<h5 className="text-[17px] tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Pastel Achkan</h5>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Ivory • Minimal threadwork • Pearl buttons</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-[15px] text-neutral-800" style={{}}>₹8,900</span>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 text-sm" style={{}}>
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add to Bag
            </button>
</div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white overflow-hidden hover:shadow-sm" style={{}}>
<img alt="Banarasi Dupatta Set" className="w-full h-44 object-cover" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-4">
<h5 className="text-[17px] tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Banarasi Dupatta Set</h5>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Handloom silk • Gold zari border</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-[15px] text-neutral-800" style={{}}>₹5,450</span>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 text-sm" style={{}}>
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add to Bag
            </button>
</div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white overflow-hidden hover:shadow-sm" style={{}}>
<img alt="Chikankari Kurta" className="w-full h-44 object-cover" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-4">
<h5 className="text-[17px] tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Chikankari Kurta</h5>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Pastel tones • Breathable cotton</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-[15px] text-neutral-800" style={{}}>₹3,250</span>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 text-sm" style={{}}>
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add to Bag
            </button>
</div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white overflow-hidden hover:shadow-sm" style={{}}>
<img alt="Embellished Blouse" className="w-full h-44 object-cover" loading="lazy" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="p-4">
<h5 className="text-[17px] tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Embellished Blouse</h5>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Mirrorwork • Tie-back • Custom sleeves</p>
<div className="mt-3 flex items-center justify-between">
<span className="text-[15px] text-neutral-800" style={{}}>₹2,650</span>
<button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 text-sm" style={{}}>
<svg className="lucide lucide-shopping-cart w-4 h-4" data-lucide="shopping-cart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></svg>
              Add to Bag
            </button>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-12">
<div className="rounded-xl border border-neutral-200 bg-white p-5 md:p-6" style={{}}>
<div className="flex items-center justify-between gap-4">
<h3 className="text-xl md:text-2xl tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Our Bespoke Process</h3>
<span className="text-sm text-neutral-600 hidden md:inline" style={{}}>Transparent timelines • Iterative fittings</span>
</div>
<div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="flex items-start gap-3 p-3 rounded-lg border border-neutral-200" style={{}}>
<svg className="lucide lucide-calendar w-5 h-5 mt-0.5 text-emerald-700" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<div>
<p className="text-[15px] text-neutral-900 font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>1. Consultation</p>
<p className="text-sm text-neutral-600" style={{}}>Style discovery, fabric curation, budget planning.</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg border border-neutral-200" style={{}}>
<svg className="lucide lucide-ruler w-5 h-5 mt-0.5 text-emerald-700" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>
<div className="">
<p className="text-[15px] text-neutral-900 font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>2. Measurements</p>
<p className="text-sm text-neutral-600" style={{}}>Precise sizing, posture notes, comfort preferences.</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg border border-neutral-200" style={{}}>
<svg className="lucide lucide-scissors w-5 h-5 mt-0.5 text-emerald-700" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
<div>
<p className="text-[15px] text-neutral-900 font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>3. Craft</p>
<p className="text-sm text-neutral-600" style={{}}>Cutting, handwork, and meticulous finishing.</p>
</div>
</div>
<div className="flex items-start gap-3 p-3 rounded-lg border border-neutral-200" style={{}}>
<svg className="lucide lucide-badge-check w-5 h-5 mt-0.5 text-emerald-700" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div>
<p className="text-[15px] text-neutral-900 font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>4. Final Fitting</p>
<p className="text-sm text-neutral-600" style={{}}>Adjustments for a flawless, comfortable fit.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-12" id="testimonials">
<div className="flex items-end justify-between">
<div>
<h3 className="text-[26px] tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>What Clients Say</h3>
<p className="text-neutral-600 text-[14.5px] mt-1" style={{}}>Real celebrations, real fits, real smiles.</p>
</div>
<div className="hidden sm:flex items-center gap-2 text-sm text-neutral-700" style={{}}>
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg> 4.9/5 • 320+ reviews
      </div>
</div>
<div className="mt-6 grid md:grid-cols-3 gap-6">

<div className="rounded-xl border border-neutral-200 bg-white p-5" style={{}}>
<div className="flex items-center gap-3">
<img alt="Client portrait" className="w-10 h-10 rounded-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-[15px] text-neutral-900 font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>Aarav Menon</p>
<p className="text-xs text-neutral-600" style={{}}>Groom • Jaipur</p>
</div>
</div>
<div className="mt-3 flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-[14.5px] text-neutral-700 mt-2 leading-relaxed" style={{}}>
          The sherwani fit was impeccable. Subtle zardozi looked royal without being heavy. They nailed my posture adjustments in one fitting.
        </p>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-5" style={{}}>
<div className="flex items-center gap-3">
<img alt="Client portrait" className="w-10 h-10 rounded-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div className="">
<p className="text-[15px] text-neutral-900 font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>Ishita Kapoor</p>
<p className="text-xs text-neutral-600" style={{}}>Bride • Mumbai</p>
</div>
</div>
<div className="mt-3 flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star-half w-4 h-4 text-cyan-600" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
<p className="text-[14.5px] text-neutral-700 mt-2 leading-relaxed" style={{}}>
          My bridal lehenga felt like a dream. Lightweight yet grand. The can-can volume and blouse structure were perfect for long events.
        </p>
</div>

<div className="rounded-xl border border-neutral-200 bg-white p-5" style={{}}>
<div className="flex items-center gap-3">
<img alt="Client portrait" className="w-10 h-10 rounded-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-[15px] text-neutral-900 font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>Ridhi &amp; Karan</p>
<p className="text-xs text-neutral-600" style={{}}>Sangeet • Delhi</p>
</div>
</div>
<div className="mt-3 flex items-center gap-1">
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 text-cyan-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-[14.5px] text-neutral-700 mt-2 leading-relaxed" style={{}}>
          Coordinated outfits looked cohesive without being matchy. The team advised colours, drape, and comfortable fabrics for dancing.
        </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-12" id="studio">
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-5" style={{}}>
<h3 className="text-xl tracking-tight text-neutral-900 mb-2" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Visit Our Studio</h3>
<p className="text-[14.5px] text-neutral-700" style={{}}>Experience fabrics, trims, and handwork up-close. We stock Banarasi, Kanchipuram silk, Jamdani, Tussar, Organza, and artisanal weaves.</p>
<div className="mt-4 space-y-2 text-sm">
<div className="flex items-center gap-2 text-neutral-700" style={{}}>
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
            F-21, Heritage Lane, Fort, Mumbai 400001
          </div>
<div className="flex items-center gap-2 text-neutral-700" style={{}}>
<svg className="lucide lucide-clock w-4 h-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Mon–Sat: 10:30 AM – 8:00 PM
          </div>
<div className="flex items-center gap-2 text-neutral-700" style={{}}>
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
            +91 90210 12345
          </div>
</div>
<div className="mt-4 flex gap-3">
<a className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 text-sm" href="#booking" style={{}}>
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
            Book Studio Visit
          </a>
<a className="inline-flex items-center gap-2 px-3.5 py-2 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 text-sm" href="#enquiry" style={{}}>
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
            Quick Enquiry
          </a>
</div>
</div>
<div className="rounded-xl overflow-hidden border border-neutral-200 bg-white" style={{}}>
<div className="aspect-[16/9]">
<img alt="Map preview" className="w-full h-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a6b83a22-1e8f-42cc-8dcf-708d47d749a8_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-12" id="booking">
<div className="grid md:grid-cols-2 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-5" style={{}}>
<h3 className="text-xl tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Book a Fitting</h3>
<p className="text-[14.5px] text-neutral-600 mt-1" style={{}}>Tell us your event details and preferred date. We’ll confirm within 24 hours.</p>
<form className="mt-4 space-y-3">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-sm text-neutral-700" style={{}}>Full Name</label>
<input className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400" placeholder="Your name" style={{}} type="text"/>
</div>
<div>
<label className="text-sm text-neutral-700" style={{}}>Phone</label>
<input className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400" placeholder="+91…" style={{}} type="tel"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-sm text-neutral-700" style={{}}>Preferred Date</label>
<input className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400" style={{}} type="date"/>
</div>
<div>
<label className="text-sm text-neutral-700" style={{}}>Service</label>
<select className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400" style={{}}>
<option>Bridal Lehenga</option>
<option>Sherwani / Achkan</option>
<option>Bandhgala</option>
<option>Kurta / Waistcoat</option>
<option>Blouse Tailoring</option>
</select>
</div>
</div>
<div>
<label className="text-sm text-neutral-700" style={{}}>Notes</label>
<textarea className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400" placeholder="Occasion, color preferences, inspirations…" rows="3" style={{}}></textarea>
</div>
<div className="flex items-center justify-between">
<div className="text-xs text-neutral-500" style={{}}>We respect your time—average first fitting: 30–40 mins.</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 text-sm" style={{}} type="button">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
              Request Slot
            </button>
</div>
</form>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5" id="enquiry" style={{}}>
<h3 className="text-xl tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Quick Enquiry</h3>
<p className="text-[14.5px] text-neutral-600 mt-1" style={{}}>Share your requirement. We’ll respond with estimates and timelines.</p>
<form className="mt-4 space-y-3">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="text-sm text-neutral-700" style={{}}>Email</label>
<input className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400" placeholder="you@example.com" style={{}} type="email"/>
</div>
<div>
<label className="text-sm text-neutral-700" style={{}}>Budget (optional)</label>
<input className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400" placeholder="₹…" style={{}} type="text"/>
</div>
</div>
<div className="">
<label className="text-sm text-neutral-700" style={{}}>Message</label>
<textarea className="mt-1 w-full rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900/10 focus:border-neutral-400" placeholder="Share styles you like, fabrics, dates…" rows="3" style={{}}></textarea>
</div>
<div className="flex items-center justify-between">
<a className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neutral-300 bg-white hover:bg-neutral-50 text-sm" href="https://wa.me/919021012345" style={{}} target="_blank">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
              Chat on WhatsApp
            </a>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-neutral-900 text-white hover:bg-neutral-800 text-sm" style={{}} type="button">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
              Send Enquiry
            </button>
</div>
</form>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-10">
<div className="rounded-lg border border-neutral-200 bg-white p-4" style={{}}>
<div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-neutral-700" style={{}}>
<span className="px-3 py-1 rounded-md border border-neutral-200" style={{}}>Banarasi Silk</span>
<span className="px-3 py-1 rounded-md border border-neutral-200" style={{}}>Kanchipuram</span>
<span className="px-3 py-1 rounded-md border border-neutral-200" style={{}}>Jamdani</span>
<span className="px-3 py-1 rounded-md border border-neutral-200" style={{}}>Tussar</span>
<span className="px-3 py-1 rounded-md border border-neutral-200" style={{}}>Organza</span>
<span className="px-3 py-1 rounded-md border border-neutral-200" style={{}}>Zardozi</span>
<span className="px-3 py-1 rounded-md border border-neutral-200" style={{}}>Aari</span>
<span className="px-3 py-1 rounded-md border border-neutral-200" style={{}}>Chikankari</span>
<span className="px-3 py-1 rounded-md border border-neutral-200" style={{}}>Bandhani</span>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mt-12">
<h3 className="text-[22px] tracking-tight text-neutral-900 mb-4" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>FAQs</h3>
<div className="grid md:grid-cols-2 gap-4">
<div className="rounded-lg border border-neutral-200 bg-white p-4" style={{}}>
<p className="text-[15px] text-neutral-900 font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>How long does bespoke take?</p>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Lehengas: 4–6 weeks; Sherwanis: 3–4 weeks; Blouses/Kurtas: 5–10 days. Express options available.</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4" style={{}}>
<p className="text-[15px] text-neutral-900 font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>Do you provide fabric sourcing?</p>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Yes, we curate heritage weaves and responsibly sourced silks to match your palette and budget.</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4" style={{}}>
<p className="text-[15px] text-neutral-900 font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>Are alterations included?</p>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Standard alteration within 10 days of delivery is complimentary on bespoke orders.</p>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4" style={{}}>
<p className="text-[15px] text-neutral-900 font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>Do you ship internationally?</p>
<p className="text-sm text-neutral-600 mt-1" style={{}}>Yes, with tracked shipping and virtual fittings for global clients.</p>
</div>
</div>
</section>

<footer className="mt-12 border-t border-neutral-200" style={{}}>
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-sm bg-neutral-900 text-white flex items-center justify-center tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif', fontWeight: '600'}}>AT</div>
<span className="text-[18px] tracking-tight text-neutral-900" style={{fontFamily: '"Playfair Display", ui-serif, Georgia', fontWeight: '600'}}>Anaya Tailors</span>
</div>
<p className="text-sm text-neutral-600 mt-3" style={{}}>Crafting heirloom-worthy ethnic wear since 1996. Personalised service, meticulous tailoring, and timeless design.</p>
<div className="mt-3 flex items-center gap-3 text-sm text-neutral-700" style={{}}>
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
<svg className="lucide lucide-facebook w-4 h-4" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
<svg className="lucide lucide-youtube w-4 h-4" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</div>
</div>
<div>
<p className="text-[15px] text-neutral-900 font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>Bespoke</p>
<ul className="mt-2 space-y-1 text-sm text-neutral-600" style={{}}>
<li><a className="hover:text-neutral-900" href="#featured" style={{}}>Sherwanis &amp; Achkans</a></li>
<li><a className="hover:text-neutral-900" href="#featured" style={{}}>Bridal Lehengas</a></li>
<li><a className="hover:text-neutral-900" href="#featured" style={{}}>Bandhgalas &amp; Waistcoats</a></li>
<li><a className="hover:text-neutral-900" href="#featured" style={{}}>Blouse Tailoring</a></li>
</ul>
</div>
<div>
<p className="text-[15px] text-neutral-900 font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>Shop</p>
<ul className="mt-2 space-y-1 text-sm text-neutral-600" style={{}}>
<li><a className="hover:text-neutral-900" href="#popular" style={{}}>Ready-to-Order</a></li>
<li><a className="hover:text-neutral-900" href="#popular" style={{}}>Kurta Sets</a></li>
<li><a className="hover:text-neutral-900" href="#popular" style={{}}>Dupattas</a></li>
<li><a className="hover:text-neutral-900" href="#popular" style={{}}>Accessories</a></li>
</ul>
</div>
<div>
<p className="text-[15px] text-neutral-900 font-medium" style={{fontFamily: 'Inter, ui-sans-serif'}}>Contact</p>
<ul className="mt-2 space-y-1 text-sm text-neutral-600" style={{}}>
<li className="flex items-center gap-2"><svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg> hello@anayatailors.in</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg> +91 90210 12345</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Fort, Mumbai</li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500" style={{}}>
<p>© 2025 Anaya Tailors. All rights reserved.</p>
<div className="flex items-center gap-3">
<a className="hover:text-neutral-800" href="#" style={{}}>Privacy</a>
<span>•</span>
<a className="hover:text-neutral-800" href="#" style={{}}>Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
