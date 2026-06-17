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
      

<header className="py-5 px-6 border-b border-gray-100 flex items-center justify-between lg:justify-center relative bg-white">
<div className="lg:absolute lg:left-0 lg:w-full flex justify-center pointer-events-none">
<a className="text-lg font-medium tracking-tight pointer-events-auto text-slate-900" href="#">PREMIUM PILLOW FLOW</a>
</div>
<div className="flex items-center gap-5 lg:absolute lg:right-6 pointer-events-auto ml-auto">
<button className="text-gray-500 hover:text-gray-900 transition-colors">
<i className="w-5 h-5" data-lucide="search" strokeWidth="1.5"></i>
</button>
<button className="text-gray-500 hover:text-gray-900 transition-colors relative">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
<span className="absolute -top-1 -right-1.5 text-[10px] font-medium bg-slate-100 text-slate-800 rounded-full w-4 h-4 flex items-center justify-center">0</span>
</button>
</div>
</header>

<section className="relative h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden bg-[#e9ecef]">

<img alt="Pillow" className="opacity-60 mix-blend-multiply w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="relative z-10 max-w-4xl px-6 flex flex-col items-center text-center mt-12">
<div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 mb-4">
<h1 className="text-3xl md:text-[40px] leading-tight font-medium tracking-tight text-slate-800 md:text-right">
                    PREMIUM PILLOW<br/>FLOW
                </h1>
<div className="hidden md:block w-px h-20 bg-slate-800/20"></div>
<h2 className="text-2xl md:text-[34px] leading-tight font-normal tracking-tight text-slate-800 md:text-left">
                    The Foundation<br/>of Perfect Design
                </h2>
</div>
<p className="text-base md:text-lg text-slate-800/80 mb-6 max-w-lg font-normal">
                High Quality, Durable inserts for Wholesale Partners.<br className="hidden md:block"/>
                Elevate your project. Request Trade Pricing.
            </p>
<a className="inline-block bg-[#1f385c] hover:bg-slate-800 transition-colors text-white px-8 py-3 text-sm font-medium tracking-wide" href="#">
                APPLY FOR WHOLESALE ACCOUNT
            </a>
</div>
</section>

<section className="max-w-none mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-2">Shop by Industry</h2>
<p className="text-base text-gray-500 font-normal">Inspired by "Shop By Room"</p>
<p className="text-sm font-medium tracking-widest text-slate-900 mt-2 uppercase">FIND YOUR PERFECT INSERT FOR ANY APPLICATION</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<a className="group relative overflow-hidden aspect-[4/3] bg-gray-100 flex items-end" href="#">
<img alt="Hospitality" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="bg-gradient-to-t from-black/80 via-black/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 p-6 w-full text-center text-white pb-8">
<h3 className="text-lg font-medium tracking-tight mb-1 uppercase">HOSPITALITY &amp;<br/>ACCOMMODATION</h3>
<p className="text-sm text-white/80 font-normal">Luxury hotel bed, crisp linens</p>
</div>
</a>

<a className="group relative overflow-hidden aspect-[4/3] bg-gray-100 flex items-end" href="#">
<img alt="Healthcare" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative z-10 p-6 w-full text-center text-white pb-8">
<h3 className="text-lg font-medium tracking-tight mb-1 uppercase">HEALTHCARE &amp;<br/>MEDICAL</h3>
<p className="text-sm text-white/80 font-normal">Serene hospital environments</p>
</div>
</a>

<a className="group relative overflow-hidden aspect-[4/3] bg-gray-100 flex items-end" href="#">
<img alt="Retail" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative z-10 p-6 w-full text-center text-white pb-8">
<h3 className="text-lg font-medium tracking-tight mb-1 uppercase">RETAIL &amp;<br/>RESELLERS</h3>
<p className="text-sm text-white/80 font-normal">Boutique shelves with inserts in covers</p>
</div>
</a>

<a className="group relative overflow-hidden aspect-[4/3] bg-gray-100 flex items-end" href="#">
<img alt="Interior Design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative z-10 p-6 w-full text-center text-white pb-8">
<h3 className="text-lg font-medium tracking-tight mb-1 uppercase">INTERIOR DESIGN<br/>&amp; SPECIALIZED</h3>
<p className="text-sm text-white/80 font-normal">Staged living room, diverse textures</p>
</div>
</a>

<a className="group relative overflow-hidden aspect-[4/3] bg-gray-100 flex items-end" href="#">
<img alt="Wellness" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative z-10 p-6 w-full text-center text-white pb-8">
<h3 className="text-lg font-medium tracking-tight mb-1 uppercase">WELLNESS<br/>CENTERS</h3>
<p className="text-sm text-white/80 font-normal">Spa nook, peaceful environment</p>
</div>
</a>

<a className="group relative overflow-hidden aspect-[4/3] bg-gray-100 flex items-end" href="#">
<img alt="Events" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="relative z-10 p-6 w-full text-center text-white pb-8">
<h3 className="text-lg font-medium tracking-tight mb-1 uppercase">EVENT PLANNERS<br/>&amp; CORPORATE</h3>
<p className="text-sm text-white/80 font-normal">Gala lounge setup, dynamic angles</p>
</div>
</a>
</div>
</section>

<section className="max-w-none mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="text-center mb-16">
<h2 className="text-[28px] font-medium tracking-tight text-slate-900 mb-2 uppercase">WHAT MAKES PILLOW FLOW DIFFERENT</h2>
<p className="text-base font-normal text-gray-500"></p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

<div className="flex flex-col items-center">
<div className="h-32 w-32 mb-6 flex items-center justify-center">
<img alt="Loft Science" className="object-cover rounded-full h-full w-full opacity-80 mix-blend-luminosity grayscale" src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="text-sm font-semibold tracking-wide uppercase text-slate-900 mb-3">THE SCIENCE OF LOFT</h3>
<p className="text-base text-gray-600 font-normal max-w-[250px]">Engineered for lasting "bounce" without clumping.</p>
</div>

<div className="flex flex-col items-center">
<div className="h-32 mb-6 flex flex-wrap justify-center items-center gap-2 max-w-[160px]">

<div className="w-14 h-14 rounded-full border border-teal-600 flex items-center justify-center">
<i className="w-6 h-6 text-teal-600" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div className="w-14 h-14 rounded-full border border-slate-800 flex items-center justify-center">
<i className="w-6 h-6 text-slate-800" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div className="w-14 h-14 rounded-full bg-teal-600 flex items-center justify-center">
<span className="text-white text-[10px] font-medium">OEKO<br/>TEX</span>
</div>
</div>
<h3 className="text-sm font-semibold tracking-wide uppercase text-slate-900 mb-3">QUALITY CERTIFICATIONS</h3>
<p className="text-base text-gray-600 font-normal max-w-[250px]">Hypoallergenic, fire rated, and ethically sourced.</p>
</div>

<div className="flex flex-col items-center">
<div className="h-32 mb-6 flex items-center justify-center relative w-full">
<img alt="Pillows" className="h-24 w-auto object-cover rounded opacity-80 absolute bottom-4 shadow-sm grayscale" src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
<img alt="Pillows" className="h-20 w-auto object-cover rounded opacity-90 absolute bottom-8 -translate-x-2 shadow-sm grayscale" src="https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="text-sm font-semibold tracking-wide uppercase text-slate-900 mb-3">RETAIL-READY COMPRESSION</h3>
<p className="text-base text-gray-600 font-normal max-w-[250px]">Ships small, saves space, ready for showroom display.</p>
</div>
</div>
</section>

<section className="text-center bg-[#f7f6f2] pt-14 pr-6 pb-14 pl-6">
<p className="text-sm font-medium tracking-widest text-gray-500 mb-3 uppercase">SOCIAL PROOF</p>
<h2 className="text-xl md:text-2xl font-medium tracking-tight text-slate-900 uppercase">TRUSTED BY LEADING BRANDS NATIONWIDE</h2>
</section>

<section className="max-w-none mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="text-center mb-16">
<h2 className="uppercase text-3xl font-medium text-slate-900 tracking-tight mb-2">HOW IT WORKS</h2>
<p className="text-base text-gray-500 font-normal">Inspired by Dream Home Timeline</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-[44px] left-[12%] right-[12%] h-px bg-[#d1bd8e] z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-4 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-[88px] h-[88px] rounded-full border-[1.5px] border-[#d1bd8e] bg-white flex items-center justify-center mb-5 relative z-10 shadow-sm">
<i className="w-9 h-9 text-slate-700" data-lucide="clipboard-list" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase mb-2">1. APPLY</h3>
<p className="text-base text-gray-600 font-normal">Fill quick application,<br/>get approved.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-[88px] h-[88px] rounded-full border-[1.5px] border-[#d1bd8e] bg-white flex items-center justify-center mb-5 relative z-10 shadow-sm">
<i className="w-9 h-9 text-slate-700" data-lucide="armchair" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase mb-2">2. LOUNGE</h3>
<p className="text-base text-gray-600 font-normal">Select fill, weight &amp;<br/>custom sizes.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-[88px] h-[88px] rounded-full border-[1.5px] border-[#d1bd8e] bg-white flex items-center justify-center mb-5 relative z-10 shadow-sm">
<i className="w-9 h-9 text-slate-700" data-lucide="boxes" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase mb-2">3. BULK</h3>
<p className="text-base text-gray-600 font-normal">Automated tiered<br/>pricing applies.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-[88px] h-[88px] rounded-full border-[1.5px] border-[#d1bd8e] bg-white flex items-center justify-center mb-5 relative z-10 shadow-sm">
<i className="w-9 h-9 text-slate-700" data-lucide="truck" strokeWidth="1.5"></i>
</div>
<h3 className="text-sm font-semibold tracking-wide text-slate-900 uppercase mb-2">4. DELIVERY</h3>
<p className="text-base text-gray-600 font-normal">Compressed units<br/>ship in 48 hrs.</p>
</div>
</div>
</div>
</section>


<section className="max-w-none mr-auto mb-20 ml-auto pt-10 pr-6 pl-6">
<div className="text-center mb-10">
<h2 className="text-[26px] font-medium tracking-tight text-slate-900 uppercase mb-1">EMAIL SUBSCRIPTION</h2>
</div>
<div className="flex flex-col md:flex-row bg-[#f9f8f5] overflow-hidden border border-gray-100 shadow-sm">
<div className="md:w-1/2 h-72 md:h-auto relative">
<img alt="Designer" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center text-center md:text-left">
<h3 className="text-xl md:text-2xl font-medium tracking-tight text-slate-900 mb-3 uppercase leading-tight">SIGN UP &amp; UNLOCK DESIGN INSIGHTS</h3>
<p className="text-base text-gray-600 font-normal mb-8 max-w-md mx-auto md:mx-0">Get your free "Pillow Sizing &amp; PIO Guide" for Trade Professionals.</p>
<form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto md:mx-0 w-full">
<input className="flex-1 border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 font-normal focus:outline-none focus:border-slate-500 focus:ring-1 focus:ring-slate-500 rounded-none w-full mb-3 sm:mb-0" placeholder="Email" type="email"/>
<button className="bg-[#1f385c] hover:bg-slate-800 transition-colors text-white px-8 py-3 text-sm font-medium uppercase tracking-wide rounded-none whitespace-nowrap" type="submit">SUBSCRIBE</button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-gray-200 border-t pt-16 pr-6 pb-16 pl-6">
<div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
<div className="">
<h4 className="text-sm font-semibold tracking-wide text-slate-900 mb-5">Company</h4>
<ul className="space-y-3 text-base text-gray-600 font-normal">
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">FAQs</a></li>
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Bulk Orders</a></li>
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Policies</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-wide text-slate-900 mb-5">Links</h4>
<ul className="space-y-3 text-base text-gray-600 font-normal">
<li><a className="hover:text-slate-900 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Webline</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-wide text-slate-900 mb-5">Links</h4>
<ul className="space-y-3 text-base text-gray-600 font-normal">
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Contact</a></li>
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">FAQs</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-semibold tracking-wide text-slate-900 mb-5">Contact Info</h4>
<ul className="text-base font-normal text-gray-600 space-y-3">
<li className=""></li>
<li className=""><a className="hover:text-slate-900 transition-colors" href="/mailto:premiumsite.com">We’d love to hear from you! Drop us a line anytime.</a></li>
<li className="">info@pillowflex.com.com</li>
</ul>
<div className="mt-6 flex gap-4 text-gray-400">
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter" strokeWidth="1.5"></i></a>
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="linkedin" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
