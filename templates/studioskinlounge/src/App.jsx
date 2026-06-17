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
      

<div className="bg-stone-900 text-stone-50 py-3 text-sm text-center tracking-wide">
<p className="font-light">Now accepting new clients in Fort Collins, CO · <span className="mx-2 opacity-50">|</span> Call (970) 555-0123 · <span className="mx-2 opacity-50">|</span> <a className="underline underline-offset-4 decoration-stone-500 hover:decoration-white transition-all" href="#">Book online in minutes</a></p>
</div>

<nav className="sticky top-0 z-50 bg-[#FDFCF8]/90 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

<button className="lg:hidden text-stone-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>

<div className="flex-1 lg:flex-none text-center lg:text-left">
<a className="flex flex-col items-center lg:items-start group" href="#">
<span className="font-serif text-2xl tracking-widest uppercase text-stone-900 group-hover:opacity-70 transition-opacity">The Skin Lounge</span>
<span className="text-[0.65rem] tracking-[0.2em] text-stone-500 uppercase mt-0.5">Fort Collins, Colorado</span>
</a>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#">Home</a>
<a className="hover:text-stone-900 transition-colors" href="#treatments">Treatments</a>
<a className="hover:text-stone-900 transition-colors" href="#memberships">Memberships</a>
<a className="hover:text-stone-900 transition-colors" href="#">About</a>
<a className="hover:text-stone-900 transition-colors" href="#faqs">FAQs</a>
<a className="hover:text-stone-900 transition-colors" href="#">Contact</a>
</div>

<div className="hidden lg:block pl-8">
<a className="bg-[#BCAAA4] text-white px-6 py-3 text-xs font-medium uppercase tracking-widest hover:bg-[#A18E87] transition-colors rounded-sm" href="#">
                    Book Now
                </a>
</div>

<div className="lg:hidden w-6"></div>
</div>
</nav>

<a className="fixed bottom-6 right-6 z-50 bg-stone-900 text-white px-6 py-4 rounded-full shadow-2xl shadow-stone-400/50 flex items-center gap-3 hover:scale-105 transition-transform duration-300 group" href="#">
<span className="text-sm font-medium tracking-wide">Book Now</span>
<i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</a>

<header className="relative w-full h-[90vh] lg:h-[85vh] flex items-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Calm wellness spa setting" className="w-full h-full object-cover object-center brightness-[0.85]" src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="text-white max-w-xl">
<span className="block text-sm font-medium tracking-[0.2em] uppercase opacity-90 mb-6">Fort Collins Boutique Skincare Studio</span>
<h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6">
                    Rooted in Science.<br/>
<span className="italic font-normal opacity-90">Blended by Nature.</span><br/>
                    Designed for You.
                </h1>
<p className="text-lg lg:text-xl font-light text-stone-100 leading-relaxed mb-10 max-w-md">
                    The Skin Lounge combines advanced, results-driven treatments with calming, holistic care so you can enjoy healthy, glowing skin without the guesswork.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="bg-[#FDFCF8] text-stone-900 px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-stone-200 transition-colors text-center rounded-sm" href="#">
                        Book a Facial
                    </a>
<a className="border border-white/30 backdrop-blur-sm text-white px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-white/10 transition-colors text-center rounded-sm" href="#treatments">
                        View Treatments
                    </a>
</div>
<div className="flex flex-wrap items-center gap-6 text-xs tracking-wide opacity-80 font-light border-t border-white/20 pt-6">
<div className="flex items-center gap-2">
<i className="w-3 h-3" data-lucide="check"></i> Licensed Estheticians
                    </div>
<div className="flex items-center gap-2">
<i className="w-3 h-3" data-lucide="check"></i> Custom Plans
                    </div>
<div className="flex items-center gap-2">
<i className="w-3 h-3" data-lucide="map-pin"></i> 140 Boardwalk Dr, Fort Collins
                    </div>
</div>
</div>
</div>
</header>

<section className="py-16 border-b border-stone-200/60">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 divide-y md:divide-y-0 md:divide-x divide-stone-200">
<div className="px-4 py-4 text-center md:text-left">
<h3 className="font-serif text-2xl font-normal text-stone-900 mb-3 tracking-tight">Science-Backed Skincare</h3>
<p className="text-stone-600 text-lg font-light leading-relaxed">Treatments and protocols grounded in proven techniques and professional-grade devices.</p>
</div>
<div className="px-4 py-4 text-center md:text-left">
<h3 className="font-serif text-2xl font-normal text-stone-900 mb-3 tracking-tight">Nature-Infused Rituals</h3>
<p className="text-stone-600 text-lg font-light leading-relaxed">Gentle, clean ingredients that support your skin barrier and overall wellness.</p>
</div>
<div className="px-4 py-4 text-center md:text-left">
<h3 className="font-serif text-2xl font-normal text-stone-900 mb-3 tracking-tight">Boutique, One-to-One Care</h3>
<p className="text-stone-600 text-lg font-light leading-relaxed">A quiet studio where you are fully seen, heard, and cared for at every visit.</p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-[#BCAAA4] hover:text-stone-800 transition-colors font-medium" href="#">
                    Learn more about our philosophy <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="treatments">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="font-serif text-4xl lg:text-5xl font-light tracking-tight text-stone-900 mb-6">Targeted Facials &amp; Advanced Treatments</h2>
<p className="text-lg lg:text-xl text-stone-600 font-light leading-relaxed">
                    We offer a full range of customized facials and advanced skincare treatments designed around your unique skin needs. From deep relaxation to high-performance treatments, every session starts with a thoughtful skin consultation.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-[#F2EFE9] p-8 rounded-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 flex flex-col justify-between min-h-[320px]">
<div>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 text-stone-400 group-hover:text-[#BCAAA4] transition-colors">
<i className="w-5 h-5" data-lucide="sparkles"></i>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-3">Custom Facials</h3>
<p className="text-stone-600 font-light leading-relaxed">Personalized facials that address acne, aging, sensitivity, and dullness while calming your mind and body.</p>
</div>
<a className="inline-block mt-8 text-xs font-medium uppercase tracking-widest text-stone-900 border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors w-max" href="#">View facial menu</a>
</div>

<div className="group relative bg-[#F2EFE9] p-8 rounded-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 flex flex-col justify-between min-h-[320px]">
<div>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 text-stone-400 group-hover:text-[#BCAAA4] transition-colors">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-3">Advanced Treatments</h3>
<p className="text-stone-600 font-light leading-relaxed">Results-driven services including Oxylight™ Ionix™, microneedling, LED therapy, and fibroblast resurfacing.</p>
</div>
<a className="inline-block mt-8 text-xs font-medium uppercase tracking-widest text-stone-900 border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors w-max" href="#">See advanced skincare</a>
</div>

<div className="group relative bg-[#F2EFE9] p-8 rounded-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 flex flex-col justify-between min-h-[320px]">
<div>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 text-stone-400 group-hover:text-[#BCAAA4] transition-colors">
<i className="w-5 h-5" data-lucide="flower-2"></i>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-3">Holistic Add-Ons</h3>
<p className="text-stone-600 font-light leading-relaxed">Facial, head and neck massage that supports lymphatic drainage, circulation, and deep relaxation.</p>
</div>
<a className="inline-block mt-8 text-xs font-medium uppercase tracking-widest text-stone-900 border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors w-max" href="#">Explore add-ons</a>
</div>

<div className="group relative bg-[#F2EFE9] p-8 rounded-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-300 flex flex-col justify-between min-h-[320px]">
<div>
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-6 text-stone-400 group-hover:text-[#BCAAA4] transition-colors">
<i className="w-5 h-5" data-lucide="crown"></i>
</div>
<h3 className="font-serif text-2xl text-stone-900 mb-3">Memberships</h3>
<p className="text-stone-600 font-light leading-relaxed">Stay consistent with your skincare journey and save on every visit to the studio.</p>
</div>
<a className="inline-block mt-8 text-xs font-medium uppercase tracking-widest text-stone-900 border-b border-stone-300 pb-1 hover:border-stone-900 transition-colors w-max" href="#">View memberships</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-100/50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl font-light tracking-tight text-stone-900 mb-4">What Do You Want to Improve?</h2>
<p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">Your skin has a story. We listen before we treat, so each visit is tailored to what you need right now.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
<div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
<div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
<i className="w-6 h-6 text-stone-400 group-hover:text-[#BCAAA4]" data-lucide="smile"></i>
</div>
<span className="text-base font-medium text-stone-800">Fine lines &amp; wrinkles</span>
</div>
<div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
<div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
<i className="w-6 h-6 text-stone-400 group-hover:text-[#BCAAA4]" data-lucide="frown"></i>
</div>
<span className="text-base font-medium text-stone-800">Acne &amp; breakouts</span>
</div>
<div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
<div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
<i className="w-6 h-6 text-stone-400 group-hover:text-[#BCAAA4]" data-lucide="sun"></i>
</div>
<span className="text-base font-medium text-stone-800">Sun damage</span>
</div>
<div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
<div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
<i className="w-6 h-6 text-stone-400 group-hover:text-[#BCAAA4]" data-lucide="heart"></i>
</div>
<span className="text-base font-medium text-stone-800">Redness &amp; sensitivity</span>
</div>
<div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
<div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
<i className="w-6 h-6 text-stone-400 group-hover:text-[#BCAAA4]" data-lucide="battery-warning"></i>
</div>
<span className="text-base font-medium text-stone-800">Dull, tired skin</span>
</div>
<div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
<div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
<i className="w-6 h-6 text-stone-400 group-hover:text-[#BCAAA4]" data-lucide="grid"></i>
</div>
<span className="text-base font-medium text-stone-800">Texture &amp; pores</span>
</div>
<div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
<div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
<i className="w-6 h-6 text-stone-400 group-hover:text-[#BCAAA4]" data-lucide="shield-check"></i>
</div>
<span className="text-base font-medium text-stone-800">Preventive care</span>
</div>
<div className="flex flex-col items-center text-center gap-3 group cursor-pointer">
<div className="p-4 bg-white rounded-full shadow-sm group-hover:shadow-md transition-all">
<i className="w-6 h-6 text-stone-400 group-hover:text-[#BCAAA4]" data-lucide="search"></i>
</div>
<span className="text-base font-medium text-stone-800">Find my match</span>
</div>
</div>
<div className="mt-12 text-center">
<a className="bg-stone-900 text-stone-50 px-8 py-3 text-sm font-medium uppercase tracking-widest hover:bg-stone-700 transition-colors rounded-sm inline-block" href="#">Find the right treatment</a>
</div>
</div>
</section>

<section className="py-24 lg:py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="w-full lg:w-1/2 relative">
<div className="absolute -top-4 -left-4 bg-[#BCAAA4] text-white text-xs font-medium uppercase tracking-widest px-4 py-2 z-10">Most Requested</div>
<img alt="Oxylight facial treatment" className="w-full h-[500px] object-cover rounded-sm grayscale-[20%]" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-full lg:w-1/2">
<h2 className="font-serif text-4xl lg:text-5xl font-light tracking-tight text-stone-900 mb-6">Oxylight™ Ionix™ Facial</h2>
<p className="text-lg text-stone-600 font-light leading-relaxed mb-8">
                        The Oxylight™ Ionix™ treatment is a powerful, non-invasive way to refresh tired, stressed skin. This multi-step service combines oxygen therapy, LED light, microcurrent, and gentle exfoliation to help smooth fine lines, boost radiance, and support firm, healthy skin.
                    </p>
<ul className="space-y-4 mb-10 text-stone-700 font-light text-lg">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#BCAAA4]" data-lucide="check-circle"></i>
                            Great for: dullness, fine lines, uneven tone
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#BCAAA4]" data-lucide="check-circle"></i>
                            Little to no downtime
                        </li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-[#BCAAA4]" data-lucide="check-circle"></i>
                            Customizable for different skin types
                        </li>
</ul>
<a className="bg-[#BCAAA4] text-white px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-[#A18E87] transition-colors rounded-sm inline-block" href="#">
                        Book an Oxylight™ facial
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F2EFE9]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl lg:text-5xl font-light tracking-tight text-stone-900 mb-4">Your Visit at The Skin Lounge</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-stone-300 z-0 transform -translate-y-1/2"></div>
<div className="relative z-10 text-center">
<div className="w-16 h-16 mx-auto bg-stone-900 text-white rounded-full flex items-center justify-center text-xl font-serif mb-6 shadow-lg">1</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4">Book Your Visit</h3>
<p className="text-stone-600 font-light leading-relaxed px-4">Choose a facial or treatment online or reach out if you aren't sure where to start.</p>
</div>
<div className="relative z-10 text-center">
<div className="w-16 h-16 mx-auto bg-white text-stone-900 border border-stone-300 rounded-full flex items-center justify-center text-xl font-serif mb-6 shadow-lg">2</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4">Personalized Consultation</h3>
<p className="text-stone-600 font-light leading-relaxed px-4">We talk through your skin history, current products, lifestyle, and goals before any treatment begins.</p>
</div>
<div className="relative z-10 text-center">
<div className="w-16 h-16 mx-auto bg-white text-stone-900 border border-stone-300 rounded-full flex items-center justify-center text-xl font-serif mb-6 shadow-lg">3</div>
<h3 className="font-serif text-2xl text-stone-900 mb-4">Relax, Reset, Renew</h3>
<p className="text-stone-600 font-light leading-relaxed px-4">Enjoy a quiet, intentional treatment. Leave with a simple plan for home care and future visits.</p>
</div>
</div>
<div className="mt-16 text-center bg-white/50 backdrop-blur-sm p-8 rounded-sm max-w-2xl mx-auto border border-white">
<p className="text-stone-800 text-lg mb-6 font-medium">First time here? Start with a New Guest Facial, and we will guide you from there.</p>
<a className="inline-block text-sm font-medium uppercase tracking-widest text-stone-900 border-b-2 border-[#BCAAA4] pb-1 hover:text-[#BCAAA4] transition-colors" href="#">Book your New Guest Facial</a>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-serif text-4xl lg:text-5xl font-light tracking-tight text-stone-900 mb-12 text-center">Real Results from Real Clients</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-sm mb-4 bg-stone-200 aspect-[4/3]">

<div className="absolute inset-0 flex items-center justify-center text-stone-400 font-light italic">Before &amp; After Image</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
</div>
<p className="text-sm font-medium text-stone-500 uppercase tracking-wide">12 weeks • Microneedling Series</p>
</div>
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-sm mb-4 bg-stone-200 aspect-[4/3]">
<div className="absolute inset-0 flex items-center justify-center text-stone-400 font-light italic">Before &amp; After Image</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
</div>
<p className="text-sm font-medium text-stone-500 uppercase tracking-wide">6 months • Acne Protocol</p>
</div>
<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-sm mb-4 bg-stone-200 aspect-[4/3]">
<div className="absolute inset-0 flex items-center justify-center text-stone-400 font-light italic">Before &amp; After Image</div>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
</div>
<p className="text-sm font-medium text-stone-500 uppercase tracking-wide">1 session • Oxylight Facial</p>
</div>
</div>
<div className="border-t border-stone-200 pt-16">
<h3 className="font-serif text-3xl font-light text-center mb-12">Loved by Fort Collins Clients</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="text-center">
<div className="flex justify-center text-[#BCAAA4] gap-1 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-stone-700 font-serif italic mb-4">"My skin has never felt this calm and clear. The atmosphere is incredibly relaxing."</p>
<p className="text-xs font-medium uppercase tracking-widest text-stone-500">Sarah M.</p>
</div>
<div className="text-center">
<div className="flex justify-center text-[#BCAAA4] gap-1 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-stone-700 font-serif italic mb-4">"I feel genuinely cared for here, not rushed. A true hidden gem in Fort Collins."</p>
<p className="text-xs font-medium uppercase tracking-widest text-stone-500">Jessica T.</p>
</div>
<div className="text-center">
<div className="flex justify-center text-[#BCAAA4] gap-1 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-lg text-stone-700 font-serif italic mb-4">"The best investment I've made for myself. The memberships make it so easy."</p>
<p className="text-xs font-medium uppercase tracking-widest text-stone-500">Emily R.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-stone-900 text-stone-100 relative overflow-hidden">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="font-serif text-4xl lg:text-5xl font-light tracking-tight mb-8">Where Self Care Meets Skin Health</h2>
<p className="text-xl lg:text-2xl font-light leading-relaxed text-stone-300 mb-16">
                The Skin Lounge is a boutique skincare studio in Fort Collins, Colorado. We blend scientifically-backed treatments with holistic therapies that care for your skin and your nervous system. Every service is designed to support circulation, lymphatic flow, and deep relaxation so you leave glowing from the inside out.
            </p>
<div className="inline-block border-t border-stone-700 pt-10">
<blockquote className="font-serif text-3xl lg:text-4xl italic leading-tight text-[#E8E0D5]">
                    “Self care is giving the world the best of you, instead of what is left of you.”
                </blockquote>
<cite className="block mt-6 text-sm uppercase tracking-widest not-italic text-stone-500">— Katie Reed</cite>
</div>
</div>
</section>

<section className="py-24 lg:py-32" id="memberships">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl lg:text-5xl font-light tracking-tight text-stone-900 mb-4">Stay Consistent with Your Skin Care</h2>
<p className="text-lg text-stone-600 font-light">Beautiful results come from consistency. Our memberships help you stay on track and save on every visit.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="border border-stone-200 p-10 rounded-sm hover:border-[#BCAAA4] transition-colors relative">
<h3 className="font-serif text-3xl text-stone-900 mb-2">Glow Monthly</h3>
<p className="text-sm text-stone-500 uppercase tracking-widest mb-8">Essential Maintenance</p>
<ul className="space-y-4 mb-10 text-stone-700 font-light">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BCAAA4]" data-lucide="check"></i> 1 Custom Facial per month</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BCAAA4]" data-lucide="check"></i> Member pricing on add-ons</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BCAAA4]" data-lucide="check"></i> Priority booking access</li>
</ul>
<a className="block w-full py-4 text-center border border-stone-900 text-stone-900 text-xs font-medium uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-colors rounded-sm" href="#">View pricing</a>
</div>

<div className="border border-stone-200 bg-[#F9F7F5] p-10 rounded-sm relative overflow-hidden">
<div className="absolute top-0 right-0 bg-[#BCAAA4] text-white text-[10px] font-bold uppercase px-3 py-1 tracking-wider">Best Value</div>
<h3 className="font-serif text-3xl text-stone-900 mb-2">Radiance Advanced</h3>
<p className="text-sm text-stone-500 uppercase tracking-widest mb-8">Results Driven</p>
<ul className="space-y-4 mb-10 text-stone-700 font-light">
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BCAAA4]" data-lucide="check"></i> 1 Advanced Treatment per month</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BCAAA4]" data-lucide="check"></i> Discounts on products</li>
<li className="flex items-center gap-3"><i className="w-4 h-4 text-[#BCAAA4]" data-lucide="check"></i> Seasonal skin check-in</li>
</ul>
<a className="block w-full py-4 text-center bg-stone-900 text-white text-xs font-medium uppercase tracking-widest hover:bg-stone-700 transition-colors rounded-sm" href="#">View pricing</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200" id="faqs">
<div className="max-w-3xl mx-auto px-6">
<h2 className="font-serif text-4xl font-light tracking-tight text-stone-900 mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-stone-200 rounded-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-stone-800">
<span>Which facial should I book if I am new?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-stone-600 font-light px-6 pb-6 leading-relaxed">
                        We recommend booking the "New Guest Facial." This allows extra time for a thorough consultation and skin analysis so we can customize the treatment exactly to your needs.
                    </div>
</details>
<details className="group bg-white border border-stone-200 rounded-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-stone-800">
<span>Are your treatments safe for sensitive skin?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-stone-600 font-light px-6 pb-6 leading-relaxed">
                        Absolutely. We specialize in barrier repair and sensitive skin conditions. We use gentle, nature-infused products and avoid harsh stripping agents.
                    </div>
</details>
<details className="group bg-white border border-stone-200 rounded-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-stone-800">
<span>Do you offer pregnancy safe options?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-stone-600 font-light px-6 pb-6 leading-relaxed">
                        Yes! Many of our facials can be modified to be completely pregnancy and nursing safe. Please let us know when booking.
                    </div>
</details>
<details className="group bg-white border border-stone-200 rounded-sm">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-stone-800">
<span>What is your cancellation policy?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-stone-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-stone-600 font-light px-6 pb-6 leading-relaxed">
                        We require 24 hours notice for cancellations. Cancellations made within 24 hours may be subject to a fee of 50% of the service price.
                    </div>
</details>
</div>
<div className="text-center mt-10">
<a className="text-stone-500 hover:text-stone-900 text-sm font-medium transition-colors" href="#">Still have questions? Contact us</a>
</div>
</div>
</section>

<section className="py-24 text-center px-6">
<h2 className="font-serif text-4xl lg:text-5xl font-light tracking-tight text-stone-900 mb-6">Ready to Give Your Skin a Fresh Start?</h2>
<p className="text-lg text-stone-600 font-light max-w-2xl mx-auto mb-4">Whether you want a quiet hour to reset or you are ready for a full skin transformation, The Skin Lounge is here to support you.</p>
<p className="text-sm text-stone-500 font-medium mb-10"><i className="w-4 h-4 inline mr-1" data-lucide="map-pin"></i> Located at 140 Boardwalk Drive Unit D, Fort Collins, CO 80525</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="bg-[#BCAAA4] text-white px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-[#A18E87] transition-colors rounded-sm shadow-md" href="#">
                Book Your Visit
            </a>
<a className="bg-white border border-stone-300 text-stone-900 px-8 py-4 text-sm font-medium uppercase tracking-widest hover:bg-stone-50 transition-colors rounded-sm" href="#">
                Contact Us
            </a>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16 text-sm font-light tracking-wide border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

<div>
<span className="font-serif text-2xl text-stone-100 block mb-4">The Skin Lounge</span>
<p className="mb-4 leading-relaxed">A boutique skincare studio in Fort Collins dedicated to healthy skin and holistic wellness.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-5 h-5" data-lucide="mail"></i></a>
</div>
</div>

<div>
<h4 className="text-stone-100 font-medium uppercase tracking-widest text-xs mb-6">Contact</h4>
<p className="mb-2">140 Boardwalk Drive Unit D<br/>Fort Collins, CO 80525</p>
<p className="mb-2 hover:text-white cursor-pointer">(970) 555-0123</p>
<a className="hover:text-white transition-colors" href="mailto:hello@theskinlounge.com">hello@theskinlounge.com</a>
</div>

<div>
<h4 className="text-stone-100 font-medium uppercase tracking-widest text-xs mb-6">Explore</h4>
<ul className="space-y-3">
<li><a className="hover:text-white transition-colors" href="#">Treatments Menu</a></li>
<li><a className="hover:text-white transition-colors" href="#">Memberships</a></li>
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Gift Cards</a></li>
<li><a className="hover:text-white transition-colors" href="#">Policies</a></li>
</ul>
</div>

<div>
<h4 className="text-stone-100 font-medium uppercase tracking-widest text-xs mb-6">Hours</h4>
<ul className="space-y-2">
<li className="flex justify-between"><span>Mon - Fri</span> <span className="text-stone-200">9am - 7pm</span></li>
<li className="flex justify-between"><span>Saturday</span> <span className="text-stone-200">10am - 4pm</span></li>
<li className="flex justify-between"><span>Sunday</span> <span className="text-stone-500">Closed</span></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-stone-800 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center">
<p>© 2023 The Skin Lounge. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
