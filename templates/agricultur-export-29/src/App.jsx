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



        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('bg-[#1A1A2E]/95', 'backdrop-blur-md');
                header.classList.remove('bg-[#1A1A2E]');
            } else {
                header.classList.add('bg-[#1A1A2E]');
                header.classList.remove('bg-[#1A1A2E]/95', 'backdrop-blur-md');
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
      

<header className="fixed top-0 left-0 w-full z-50 bg-[#1A1A2E] h-20 flex items-center justify-between px-6 lg:px-12 border-b border-white/5 shadow-sm transition-all">
<a className="font-heading font-semibold text-white tracking-tight text-xl flex items-center gap-2" href="#home">
            BITUBI TRADE
        </a>
<nav className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-[#C8A951] transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-white hover:text-[#C8A951] transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-white hover:text-[#C8A951] transition-colors" href="#products">Products</a>
<a className="text-sm font-medium text-white hover:text-[#C8A951] transition-colors" href="#quality">Quality &amp; Certificates</a>
<a className="text-sm font-medium text-white hover:text-[#C8A951] transition-colors" href="#logistics">Logistics</a>
<a className="text-sm font-medium text-white hover:text-[#C8A951] transition-colors" href="#contact">Contact Us</a>
</nav>
<div className="hidden lg:flex items-center gap-2 font-heading text-sm font-medium">
<button className="text-[#C8A951]">EN</button>
<span className="text-white/40">/</span>
<button className="text-white/60 hover:text-white transition-colors">UA</button>
</div>
<button className="lg:hidden text-white text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</header>

<a className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white text-3xl shadow-lg hover:scale-105 transition-transform" href="tel:+380503926200">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
</a>


<section className="relative w-full h-screen min-h-[600px] flex items-center pt-20" id="home">
<div className="absolute inset-0 z-0">
<img alt="Sunflower Field" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/90 via-[#1A1A2E]/60 to-transparent"></div>
</div>
<div className="relative z-10 w-full pl-[6%] md:pl-[10%] pr-6 max-w-7xl mx-auto">
<div className="max-w-2xl opacity-0 animate-fade-in">
<span className="font-heading font-medium text-[#C8A951] text-xs uppercase tracking-[0.15em] mb-5 block">
                    Ukrainian Vegetable Oil Exporter
                </span>
<h1 className="font-heading font-semibold text-white text-5xl md:text-7xl tracking-tight leading-[1.1] mb-6">
                    BITUBI TRADE —<br/>
                    Your Reliable Partner<br/>
                    in Ukrainian Vegetable Oils
                </h1>
<p className="text-white/85 text-lg leading-relaxed mb-10 max-w-lg">
                    Premium crude and refined sunflower oil, soybean oil — delivered worldwide with full documentation support.
                </p>
<a className="inline-flex items-center justify-center bg-[#C8A951] text-[#1A1A2E] font-medium px-8 py-4 rounded text-sm hover:bg-[#b59845] transition-colors shadow-sm" href="#contact">
                    Request a Quote
                </a>
</div>
</div>
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
<iconify-icon className="text-2xl" icon="solar:arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</section>

<section className="bg-[#F5F0E6] py-16 md:py-24 border-b border-[#E8E8F0]">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[#C8A951]/30 text-center">
<div className="px-6 pb-8 md:pb-0">
<div className="font-heading font-semibold text-[#C8A951] text-6xl md:text-7xl tracking-tight mb-2">
                        1,000<span className="text-2xl md:text-3xl ml-2 text-[#1A1A2E]">t/day</span>
</div>
<p className="text-[#1A1A2E] text-sm">Sunflower seed processing capacity</p>
</div>
<div className="px-6 py-8 md:py-0">
<div className="font-heading font-semibold text-[#C8A951] text-6xl md:text-7xl tracking-tight mb-2">
                        800<span className="text-2xl md:text-3xl ml-2 text-[#1A1A2E]">t/day</span>
</div>
<p className="text-[#1A1A2E] text-sm">Soybean processing capacity</p>
</div>
<div className="px-6 pt-8 md:pt-0">
<div className="font-heading font-semibold text-[#C8A951] text-6xl md:text-7xl tracking-tight mb-2">
                        3<span className="text-2xl md:text-3xl ml-2 text-[#1A1A2E] invisible">plants</span>
</div>
<p className="text-[#1A1A2E] text-sm">Partner production plants</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<span className="font-heading font-medium text-[#C8A951] text-xs uppercase tracking-[0.15em] mb-4 block">Why Choose Us</span>
<h2 className="font-heading font-semibold text-[#1A1A2E] text-4xl md:text-5xl tracking-tight">Built for International B2B Trade</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white border border-[#E8E8F0] border-t-2 border-t-[#C8A951] p-8 hover:shadow-md transition-shadow">
<iconify-icon className="text-[#C8A951] text-5xl mb-6" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading font-medium text-[#1A1A2E] text-2xl tracking-tight mb-4">Flexibility</h3>
<p className="text-sm leading-relaxed text-[#4A4A5A]">Adaptable solutions for every client's needs — customizable volumes, delivery schedules, and packaging options.</p>
</div>

<div className="bg-white border border-[#E8E8F0] border-t-2 border-t-[#C8A951] p-8 hover:shadow-md transition-shadow">
<iconify-icon className="text-[#C8A951] text-5xl mb-6" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading font-medium text-[#1A1A2E] text-2xl tracking-tight mb-4">Individual Approach</h3>
<p className="text-sm leading-relaxed text-[#4A4A5A]">Dedicated manager, tailored commercial terms, and flexible payment options for every client.</p>
</div>

<div className="bg-white border border-[#E8E8F0] border-t-2 border-t-[#C8A951] p-8 hover:shadow-md transition-shadow">
<iconify-icon className="text-[#C8A951] text-5xl mb-6" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading font-medium text-[#1A1A2E] text-2xl tracking-tight mb-4">Reliability</h3>
<p className="text-sm leading-relaxed text-[#4A4A5A]">Verified suppliers, full documentation support, and compliance with EU standards on every shipment.</p>
</div>
</div>
</div>
</section>

<section className="flex flex-col md:flex-row w-full bg-[#1A1A2E]">
<div className="w-full md:w-1/2 h-80 md:h-auto">
<img alt="Production" className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="w-full md:w-1/2 flex items-center p-12 lg:p-24">
<div className="max-w-md">
<span className="font-heading font-medium text-[#C8A951] text-xs uppercase tracking-[0.15em] mb-6 block">Our Mission</span>
<p className="font-heading text-white text-2xl leading-relaxed italic mb-8">
                    "At BITUBI TRADE, our mission is to bridge the gap between Ukraine's rich agricultural heritage and the global demand for premium vegetable oils."
                </p>
<a className="text-[#C8A951] font-medium text-sm hover:underline flex items-center gap-2" href="#about">
                    Learn More About Us <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F0E6]">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<span className="font-heading font-medium text-[#C8A951] text-xs uppercase tracking-[0.15em] mb-4 block">Our Products</span>
<h2 className="font-heading font-semibold text-[#1A1A2E] text-4xl md:text-5xl tracking-tight">Premium Vegetable Oils for Global Markets</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

<div className="bg-white flex flex-col shadow-sm border border-[#E8E8F0] overflow-hidden group">
<div className="h-64 overflow-hidden relative">
<img alt="Crude Sunflower Oil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<span className="bg-[#C8A951]/10 text-[#1A1A2E] font-medium text-[10px] uppercase tracking-wider px-2 py-1 inline-block w-max mb-4 rounded-sm">Sunflower Oil</span>
<h3 className="font-heading font-medium text-[#1A1A2E] text-2xl tracking-tight mb-2">Crude Sunflower Oil</h3>
<p className="text-xs text-[#C8A951] font-medium mb-4">First Grade, Unrefined, Non-Winterized</p>
<p className="text-sm text-[#4A4A5A] mb-8 flex-1">Meeting Codex Alimentarius CXS 210-1999 and DSTU 4492:2005 standards.</p>
<a className="text-[#1A1A2E] font-medium text-sm border-b border-[#E8E8F0] pb-1 hover:border-[#C8A951] inline-flex items-center justify-between w-full transition-colors" href="#products">
                            View Specifications <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white flex flex-col shadow-sm border border-[#E8E8F0] overflow-hidden group">
<div className="h-64 overflow-hidden relative">
<img alt="Refined Sunflower Oil" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<span className="bg-[#C8A951]/10 text-[#1A1A2E] font-medium text-[10px] uppercase tracking-wider px-2 py-1 inline-block w-max mb-4 rounded-sm">Sunflower Oil</span>
<h3 className="font-heading font-medium text-[#1A1A2E] text-2xl tracking-tight mb-2">Refined Sunflower Oil</h3>
<p className="text-xs text-[#C8A951] font-medium mb-4">Grade "P", Deodorized, Winterized</p>
<p className="text-sm text-[#4A4A5A] mb-8 flex-1">Premium grade with smoke point ≥ 220°C. Certified per DSTU 4492:2005.</p>
<a className="text-[#1A1A2E] font-medium text-sm border-b border-[#E8E8F0] pb-1 hover:border-[#C8A951] inline-flex items-center justify-between w-full transition-colors" href="#products">
                            View Specifications <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>

<div className="bg-white flex flex-col shadow-sm border border-[#E8E8F0] overflow-hidden group">
<div className="h-64 overflow-hidden relative bg-[#F5F0E6] flex items-center justify-center">
<img alt="Soybeans" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595113316349-9fa4eb24f884?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="p-8 flex-1 flex flex-col">
<span className="bg-[#C8A951]/10 text-[#1A1A2E] font-medium text-[10px] uppercase tracking-wider px-2 py-1 inline-block w-max mb-4 rounded-sm">Soybean Oil</span>
<h3 className="font-heading font-medium text-[#1A1A2E] text-2xl tracking-tight mb-2">Crude Soybean Oil</h3>
<p className="text-xs text-[#C8A951] font-medium mb-4">Crude Degummed</p>
<p className="text-sm text-[#4A4A5A] mb-8 flex-1">Per Codex Alimentarius CXS 210-1999. Flash point ≥ 230°C.</p>
<a className="text-[#1A1A2E] font-medium text-sm border-b border-[#E8E8F0] pb-1 hover:border-[#C8A951] inline-flex items-center justify-between w-full transition-colors" href="#products">
                            View Specifications <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center border border-[#1A1A2E] text-[#1A1A2E] font-medium px-8 py-3 rounded text-sm hover:bg-[#1A1A2E] hover:text-white transition-colors" href="#products">
                    See All Products
                </a>
</div>
</div>
</section>

<section className="bg-[#C8A951] py-20 text-center px-6">
<h2 className="font-heading font-semibold text-[#1A1A2E] text-4xl md:text-5xl tracking-tight mb-4">Ready to Start a Partnership?</h2>
<p className="text-[#1A1A2E]/80 text-lg mb-10 max-w-2xl mx-auto">Our team is available to discuss your requirements and prepare a tailored commercial offer.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="bg-[#1A1A2E] text-white font-medium px-8 py-4 rounded text-sm hover:bg-[#2A2A4E] transition-colors w-full sm:w-auto" href="#contact">
                Request a Quote
            </a>
<a className="bg-white text-[#1A1A2E] font-medium px-8 py-4 rounded text-sm hover:bg-gray-50 transition-colors w-full sm:w-auto flex items-center justify-center gap-2" href="tel:+380503926200">
<iconify-icon className="text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon> WhatsApp Us
            </a>
</div>
</section>

<section className="pt-20" id="about">

<div className="relative w-full h-[50vh] min-h-[400px] flex items-center justify-center text-center">
<div className="absolute inset-0 z-0">
<img alt="Port Logistics" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-[#1A1A2E]/80"></div>
</div>
<div className="relative z-10 px-6">
<p className="text-white/60 text-xs uppercase tracking-widest mb-4">Home / About Us</p>
<h1 className="font-heading font-semibold text-white text-5xl md:text-6xl tracking-tight mb-4">About BITUBI TRADE</h1>
<p className="text-white/80 text-lg max-w-xl mx-auto">A young, dynamic Ukrainian commodity trading company</p>
</div>
</div>

<div className="flex flex-col md:flex-row w-full bg-white">
<div className="w-full md:w-[60%] p-12 lg:p-24 flex flex-col justify-center">
<span className="font-heading font-medium text-[#C8A951] text-xs uppercase tracking-[0.15em] mb-6 block">Who We Are</span>
<h2 className="font-heading font-semibold text-[#1A1A2E] text-4xl tracking-tight mb-8">Trading Excellence from the Heart of Ukraine</h2>
<div className="space-y-6 text-[#4A4A5A] leading-[1.7]">
<p>BITUBI TRADE is a young, dynamically developing Ukrainian commodity trading company based in Odesa — the heart of Ukraine's export infrastructure. We specialize in the export of premium vegetable oil products: crude and refined sunflower oil, and crude soybean oil.</p>
<p>Our team combines deep knowledge of the Ukrainian agricultural market with a modern, client-focused approach to international trade. We work directly with leading Ukrainian production facilities, ensuring product quality, documentation integrity, and on-time delivery.</p>
</div>
</div>
<div className="w-full md:w-[40%] min-h-[400px]">
<img alt="Business Team" className="w-full h-full object-cover grayscale mix-blend-multiply" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>

<div className="bg-[#F5F0E6] py-24">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<span className="font-heading font-medium text-[#C8A951] text-xs uppercase tracking-[0.15em] mb-4 block">Our Advantages</span>
<h2 className="font-heading font-semibold text-[#1A1A2E] text-4xl md:text-5xl tracking-tight">Why Global Buyers Choose Us</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
<div className="flex flex-col gap-3">
<iconify-icon className="text-[#C8A951] text-4xl" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading font-medium text-[#1A1A2E] text-xl tracking-tight">Production Capacity</h3>
<p className="text-sm text-[#4A4A5A]">Direct access to 3 production plants with combined capacity of 1,000 t/day (sunflower) and 800 t/day (soy).</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-[#C8A951] text-4xl" icon="solar:documents-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading font-medium text-[#1A1A2E] text-xl tracking-tight">Full Documentation</h3>
<p className="text-sm text-[#4A4A5A]">Complete documentation package for EU and international markets on every shipment.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-[#C8A951] text-4xl" icon="solar:medal-star-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading font-medium text-[#1A1A2E] text-xl tracking-tight">GAFTA Surveyors</h3>
<p className="text-sm text-[#4A4A5A]">Quality verified by GAFTA-approved surveyors: Cotecna, SGS Ukraine, AmSpec.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-[#C8A951] text-4xl" icon="solar:ship-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading font-medium text-[#1A1A2E] text-xl tracking-tight">Flexible Incoterms</h3>
<p className="text-sm text-[#4A4A5A]">Flexible delivery terms: FCA and CPT (Incoterms 2020).</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-[#C8A951] text-4xl" icon="solar:box-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading font-medium text-[#1A1A2E] text-xl tracking-tight">COA Flexitanks</h3>
<p className="text-sm text-[#4A4A5A]">COA-certified flexitanks for safe, food-grade bulk transportation.</p>
</div>
<div className="flex flex-col gap-3">
<iconify-icon className="text-[#C8A951] text-4xl" icon="solar:user-speak-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-heading font-medium text-[#1A1A2E] text-xl tracking-tight">Personal Manager</h3>
<p className="text-sm text-[#4A4A5A]">A dedicated personal manager assigned to every client from day one.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white" id="products">

<div className="relative w-full h-[45vh] min-h-[350px] flex items-center justify-center text-center">
<div className="absolute inset-0 z-0">
<img alt="Oil Liquid" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1628191139360-4083564d03fd?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] to-[#1A1A2E]/60"></div>
</div>
<div className="relative z-10 px-6">
<p className="text-white/60 text-xs uppercase tracking-widest mb-4">Home / Products</p>
<h1 className="font-heading font-semibold text-white text-5xl md:text-6xl tracking-tight mb-4">Our Products</h1>
<p className="text-white/80 text-lg max-w-xl mx-auto">Premium vegetable oils meeting international quality standards</p>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 lg:px-12 py-24 space-y-24">

<div className="flex flex-col lg:flex-row gap-0 border border-[#E8E8F0] shadow-sm rounded-sm overflow-hidden">
<div className="w-full lg:w-[45%] h-[400px] lg:h-auto bg-[#F5F0E6]">
<img alt="Sunflower" className="w-full h-full object-cover mix-blend-multiply opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="w-full lg:w-[55%] p-8 md:p-12 bg-white">
<span className="bg-[#C8A951] text-[#1A1A2E] font-semibold text-[10px] uppercase tracking-wider px-2.5 py-1 mb-6 inline-block rounded-sm">Sunflower Oil — First Grade</span>
<h2 className="font-heading font-semibold text-[#1A1A2E] text-3xl md:text-4xl tracking-tight mb-2">Crude Sunflower Oil</h2>
<p className="text-[#C8A951] font-medium text-sm mb-6">Unrefined, Non-Winterized</p>
<p className="text-sm text-[#4A4A5A] mb-8 leading-relaxed">Produced according to Codex Alimentarius (CXS 210-1999) and DSTU 4492:2005. Suitable for further refining or industrial use. Available in flexitank, ISO tank, and bulk.</p>
<div className="border border-[#E8E8F0] rounded-sm overflow-hidden mb-8">
<table className="w-full text-xs text-left">
<tbody className="divide-y divide-[#E8E8F0]">
<tr className="bg-white">
<td className="py-2.5 px-4 font-medium text-[#1A1A2E]">Moisture &amp; volatile matter</td>
<td className="py-2.5 px-4 text-[#4A4A5A] text-right">≤ 0.20%</td>
</tr>
<tr className="bg-[#F5F0E6]/50">
<td className="py-2.5 px-4 font-medium text-[#1A1A2E]">Acid value</td>
<td className="py-2.5 px-4 text-[#4A4A5A] text-right">≤ 4.0 mg KOH/g</td>
</tr>
<tr className="bg-white">
<td className="py-2.5 px-4 font-medium text-[#1A1A2E]">Peroxide value</td>
<td className="py-2.5 px-4 text-[#4A4A5A] text-right">≤ 10.0 meq O₂/kg</td>
</tr>
<tr className="bg-[#F5F0E6]/50">
<td className="py-2.5 px-4 font-medium text-[#1A1A2E]">Phospholipids</td>
<td className="py-2.5 px-4 text-[#4A4A5A] text-right">≤ 0.6%</td>
</tr>
</tbody>
</table>
</div>
<div className="flex flex-wrap gap-4 text-xs font-medium text-[#4A4A5A] mb-8">
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#C8A951] text-lg" icon="solar:droplets-linear"></iconify-icon> Flexitank (20-25 MT)</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#C8A951] text-lg" icon="solar:box-minimalistic-linear"></iconify-icon> ISO Tank (up to 26 MT)</span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#C8A951] text-lg" icon="solar:bus-linear"></iconify-icon> Bulk Truck</span>
</div>
<a className="inline-block text-center w-full bg-[#1A1A2E] text-white font-medium py-3 rounded text-sm hover:bg-[#C8A951] hover:text-[#1A1A2E] transition-colors" href="#contact">Request a Quote</a>
</div>
</div>

<div className="flex flex-col lg:flex-row-reverse gap-0 border border-[#E8E8F0] shadow-sm rounded-sm overflow-hidden bg-[#F5F0E6]">
<div className="w-full lg:w-[45%] h-[400px] lg:h-auto bg-white">
<img alt="Refined Oil" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1628191010210-a59de33e5941?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-full lg:w-[55%] p-8 md:p-12">
<span className="bg-[#1A1A2E] text-white font-semibold text-[10px] uppercase tracking-wider px-2.5 py-1 mb-6 inline-block rounded-sm">Sunflower Oil — Grade "P"</span>
<h2 className="font-heading font-semibold text-[#1A1A2E] text-3xl md:text-4xl tracking-tight mb-2">Refined Sunflower Oil</h2>
<p className="text-[#C8A951] font-medium text-sm mb-6">Deodorized, Winterized, Grade "P" (Premium)</p>
<p className="text-sm text-[#4A4A5A] mb-8 leading-relaxed">Our top-tier refined oil meets the strictest international standards. Certified per DSTU 4492:2005 and verified by the Gold Dragon quality certificate.</p>
<div className="border border-[#E8E8F0] bg-white rounded-sm overflow-hidden mb-8">
<table className="w-full text-xs text-left">
<tbody className="divide-y divide-[#E8E8F0]">
<tr className="bg-white">
<td className="py-2.5 px-4 font-medium text-[#1A1A2E]">Acid value</td>
<td className="py-2.5 px-4 text-[#4A4A5A] text-right">0.15–0.20 mg KOH/g</td>
</tr>
<tr className="bg-[#F5F0E6]/30">
<td className="py-2.5 px-4 font-medium text-[#1A1A2E]">Peroxide value</td>
<td className="py-2.5 px-4 text-[#4A4A5A] text-right">0.8–1.5 meq O₂/kg</td>
</tr>
<tr className="bg-white">
<td className="py-2.5 px-4 font-medium text-[#1A1A2E]">Smoke point</td>
<td className="py-2.5 px-4 text-[#4A4A5A] text-right">≥ 220°C</td>
</tr>
<tr className="bg-[#F5F0E6]/30">
<td className="py-2.5 px-4 font-medium text-[#1A1A2E]">Cold test (0°C, 5.5h)</td>
<td className="py-2.5 px-4 text-[#4A4A5A] text-right">Pass (transparent)</td>
</tr>
</tbody>
</table>
</div>
<a className="inline-block text-center w-full border-2 border-[#1A1A2E] text-[#1A1A2E] font-medium py-2.5 rounded text-sm hover:bg-[#1A1A2E] hover:text-white transition-colors" href="#contact">Request a Quote</a>
</div>
</div>
</div>
</section>

<section className="bg-[#1A1A2E] py-24 text-white relative overflow-hidden" id="quality">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8A951] rounded-full mix-blend-overlay filter blur-[150px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
<div className="flex flex-col lg:flex-row gap-16">

<div className="w-full lg:w-1/2">
<span className="font-heading font-medium text-[#C8A951] text-xs uppercase tracking-[0.15em] mb-4 block">Logistics &amp; Delivery</span>
<h2 className="font-heading font-semibold text-white text-4xl tracking-tight mb-8">Worldwide Export under Incoterms 2020</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
<div className="bg-white/5 border border-white/10 p-6 rounded-sm">
<span className="bg-[#C8A951] text-[#1A1A2E] text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider mb-3 block w-max">FCA</span>
<h3 className="font-heading font-medium text-lg mb-2">Free Carrier</h3>
<p className="text-xs text-white/60">Buyer arranges main carriage. Ideal for clients with their own freight forwarder.</p>
</div>
<div className="bg-white/5 border border-white/10 p-6 rounded-sm">
<span className="bg-white text-[#1A1A2E] text-[10px] font-bold px-2 py-0.5 uppercase tracking-wider mb-3 block w-max">CPT</span>
<h3 className="font-heading font-medium text-lg mb-2">Carriage Paid To</h3>
<p className="text-xs text-white/60">Seller handles freight. Ideal for buyers who prefer a delivered price.</p>
</div>
</div>

<div className="mt-8 border-t border-white/10 pt-8">
<p className="text-sm font-medium mb-6 text-white/80">Delivering from Odesa to:</p>
<div className="flex flex-wrap gap-6 text-sm">
<span className="flex items-center gap-2"><iconify-icon className="text-[#C8A951] text-xl" icon="solar:global-linear"></iconify-icon> Europe</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#C8A951] text-xl" icon="solar:global-linear"></iconify-icon> Middle East</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#C8A951] text-xl" icon="solar:global-linear"></iconify-icon> Asia</span>
<span className="flex items-center gap-2"><iconify-icon className="text-[#C8A951] text-xl" icon="solar:global-linear"></iconify-icon> Africa</span>
</div>
</div>
</div>

<div className="w-full lg:w-1/2">
<span className="font-heading font-medium text-[#C8A951] text-xs uppercase tracking-[0.15em] mb-4 block">Quality &amp; Certificates</span>
<h2 className="font-heading font-semibold text-white text-4xl tracking-tight mb-8">Verified by GAFTA Approved Surveyors</h2>
<p className="text-white/70 text-sm mb-8 leading-relaxed">
                        Every shipment is tested for the full range of parameters required by EU importers: mycotoxins, pesticides, dioxins, heavy metals, and microbiological indicators.
                    </p>

<div className="space-y-3">
<div className="flex items-center justify-between border-b border-white/10 pb-3">
<div className="flex items-center gap-4">
<span className="text-[#C8A951] font-heading font-semibold text-sm">01</span>
<span className="font-medium text-sm">Quality and Condition Certificate</span>
</div>
<span className="text-[10px] text-white/50 italic hidden sm:block">GAFTA surveyor</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-3">
<div className="flex items-center gap-4">
<span className="text-[#C8A951] font-heading font-semibold text-sm">02</span>
<span className="font-medium text-sm">Analysis Cert. (EU Compliant)</span>
</div>
<span className="text-[10px] text-white/50 italic hidden sm:block">GAFTA surveyor</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-3">
<div className="flex items-center gap-4">
<span className="text-[#C8A951] font-heading font-semibold text-sm">03</span>
<span className="font-medium text-sm">EUR1 Certificate</span>
</div>
<span className="text-[10px] text-white/50 italic hidden sm:block">Custom Authorities</span>
</div>
<div className="flex items-center justify-between border-b border-white/10 pb-3">
<div className="flex items-center gap-4">
<span className="text-[#C8A951] font-heading font-semibold text-sm">04</span>
<span className="font-medium text-sm">Phytosanitary Certificate</span>
</div>
<span className="text-[10px] text-white/50 italic hidden sm:block">Official Authorities</span>
</div>
</div>

<div className="mt-10 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="font-heading font-bold text-xl tracking-tighter">COTECNA</span>
<span className="font-heading font-bold text-xl tracking-tighter border-l border-white/20 pl-6">SGS</span>
<span className="font-heading font-bold text-xl tracking-tighter border-l border-white/20 pl-6">AmSpec</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-[#E8E8F0]" id="contact">
<div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto min-h-[700px]">

<div className="w-full lg:w-[40%] bg-[#F5F0E6] p-10 lg:p-16 flex flex-col">
<span className="font-heading font-medium text-[#C8A951] text-xs uppercase tracking-[0.15em] mb-4 block">Get In Touch</span>
<h2 className="font-heading font-semibold text-[#1A1A2E] text-4xl tracking-tight mb-10">BITUBI TRADE</h2>
<div className="space-y-6 flex-1">
<div className="flex items-start gap-4 text-sm text-[#4A4A5A]">
<iconify-icon className="text-[#C8A951] text-xl mt-0.5 shrink-0" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<p>65026, Odesa, vul. Zhukovskoho,<br/>bud. 15, of. 401, Ukraine</p>
</div>
<div className="flex items-center gap-4 text-sm text-[#4A4A5A]">
<iconify-icon className="text-[#C8A951] text-xl shrink-0" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-[#C8A951] transition-colors" href="mailto:b2b-tradesales@ukr.net">b2b-tradesales@ukr.net</a>
</div>
<div className="flex items-center gap-4 text-sm text-[#4A4A5A]">
<iconify-icon className="text-[#C8A951] text-xl shrink-0" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-[#C8A951] transition-colors" href="tel:+380503926200">+380 50 392 62 00</a>
</div>
<div className="flex items-center gap-4 text-sm text-[#4A4A5A]">
<iconify-icon className="text-[#C8A951] text-xl shrink-0" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
<p><span className="font-medium text-[#1A1A2E]">Mykyta Hubanov</span> — Foreign Trade Manager</p>
</div>
</div>
<div className="mt-12 pt-8 border-t border-[#E8E8F0]">
<a className="w-full bg-[#25D366] text-white font-medium py-3.5 rounded text-sm hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2 shadow-sm" href="tel:+380503926200">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon> Message on WhatsApp
                    </a>
</div>
</div>

<div className="w-full lg:w-[60%] p-10 lg:p-16 lg:pl-24">
<span className="font-heading font-medium text-[#C8A951] text-xs uppercase tracking-[0.15em] mb-4 block">Send a Request</span>
<h2 className="font-heading font-semibold text-[#1A1A2E] text-4xl tracking-tight mb-10">Request a Quote</h2>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-[#1A1A2E]">Full Name <span className="text-[#C8A951]">*</span></label>
<input className="w-full border border-[#E8E8F0] rounded-[3px] px-4 py-3 text-sm focus:border-[#C8A951] transition-colors bg-[#FAFAFA]" required="" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-[#1A1A2E]">Company Name <span className="text-[#C8A951]">*</span></label>
<input className="w-full border border-[#E8E8F0] rounded-[3px] px-4 py-3 text-sm focus:border-[#C8A951] transition-colors bg-[#FAFAFA]" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-[#1A1A2E]">Email Address <span className="text-[#C8A951]">*</span></label>
<input className="w-full border border-[#E8E8F0] rounded-[3px] px-4 py-3 text-sm focus:border-[#C8A951] transition-colors bg-[#FAFAFA]" required="" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-[#1A1A2E]">Phone Number</label>
<input className="w-full border border-[#E8E8F0] rounded-[3px] px-4 py-3 text-sm focus:border-[#C8A951] transition-colors bg-[#FAFAFA]" type="tel" value="+380"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-[#1A1A2E]">Product of Interest <span className="text-[#C8A951]">*</span></label>
<select className="w-full border border-[#E8E8F0] rounded-[3px] px-4 py-3 text-sm focus:border-[#C8A951] transition-colors bg-[#FAFAFA] appearance-none cursor-pointer" required="">
<option value="">— Select a product —</option>
<option value="crude-sunflower">Crude Sunflower Oil (First Grade)</option>
<option value="refined-sunflower">Refined Sunflower Oil (Grade "P")</option>
<option value="crude-soybean">Crude Soybean Oil</option>
<option value="other">Other / Multiple Products</option>
</select>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-[#1A1A2E]">Required Volume (MT)</label>
<input className="w-full border border-[#E8E8F0] rounded-[3px] px-4 py-3 text-sm focus:border-[#C8A951] transition-colors bg-[#FAFAFA]" placeholder="e.g. 100" type="number"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-[#1A1A2E]">Preferred Delivery Terms</label>
<select className="w-full border border-[#E8E8F0] rounded-[3px] px-4 py-3 text-sm focus:border-[#C8A951] transition-colors bg-[#FAFAFA] appearance-none cursor-pointer">
<option value="discuss">To be discussed</option>
<option value="fca">FCA</option>
<option value="cpt">CPT</option>
</select>
</div>
</div>
<div className="flex flex-col gap-1.5 mb-8">
<label className="text-xs font-medium text-[#1A1A2E]">Message / Additional Requirements</label>
<textarea className="w-full border border-[#E8E8F0] rounded-[3px] px-4 py-3 text-sm focus:border-[#C8A951] transition-colors bg-[#FAFAFA] resize-none" rows="4"></textarea>
</div>
<button className="w-full bg-[#C8A951] text-[#1A1A2E] font-semibold py-4 rounded-[3px] text-sm hover:bg-[#b59845] transition-colors flex items-center justify-center gap-2" type="button">
                        Send Request <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</button>
<p className="text-[11px] text-[#4A4A5A] text-center mt-3">Your message will be sent to b2b-tradesales@ukr.net. We respond within 24 hours.</p>
</form>
</div>
</div>
</section>

<footer className="bg-[#1A1A2E] text-white pt-20 pb-8 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

<div>
<span className="font-heading font-semibold text-xl tracking-tight block mb-4">BITUBI TRADE</span>
<p className="text-sm text-white/60 font-heading italic">"From Ukraine's Fertile Lands to Global Markets"</p>
</div>

<div>
<h4 className="font-heading font-semibold text-[#C8A951] text-xs uppercase tracking-widest mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm text-white/70">
<li><a className="hover:text-[#C8A951] transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-[#C8A951] transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-[#C8A951] transition-colors" href="#products">Products</a></li>
<li><a className="hover:text-[#C8A951] transition-colors" href="#quality">Quality &amp; Certificates</a></li>
<li><a className="hover:text-[#C8A951] transition-colors" href="#logistics">Logistics</a></li>
<li><a className="hover:text-[#C8A951] transition-colors" href="#contact">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="font-heading font-semibold text-[#C8A951] text-xs uppercase tracking-widest mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm text-white/70">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C8A951] mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>65026, Odesa, vul. Zhukovskoho, bud. 15, of. 401, Ukraine</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C8A951]" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-[#C8A951] transition-colors" href="mailto:b2b-tradesales@ukr.net">b2b-tradesales@ukr.net</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#C8A951]" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-[#C8A951] transition-colors" href="tel:+380503926200">+380503926200</a>
</li>
</ul>
</div>
</div>

<div className="border-t border-[#C8A951]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/40">© 2026 BITUBI TRADE LLC. All rights reserved.</p>
<div className="flex items-center gap-2 font-heading text-xs font-medium">
<button className="text-[#C8A951]">EN</button>
<span className="text-white/20">/</span>
<button className="text-white/40 hover:text-white transition-colors">UA</button>
</div>
</div>
</div>
</footer>



    </>
  );
}
