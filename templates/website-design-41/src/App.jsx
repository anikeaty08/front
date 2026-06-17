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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
agri: {
50: '#f2fcf0',
100: '#e1f7dc',
200: '#c3ebbb',
300: '#96d988',
400: '#64bf52',
500: '#4a7c2c', // Primary Green
600: '#346120',
700: '#2d5016', // Dark Green
800: '#243e15',
900: '#1e3314',
},
grain: {
50: '#fffbf0',
100: '#fef5d6',
200: '#fce8aa',
300: '#fad671',
400: '#f6be37',
500: '#f4a300', // Golden/Yellow
600: '#d98200',
700: '#b05d05',
800: '#8f480d', // Earth Brownish
900: '#763b0f',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.025em',
}
}
}
}

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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="group flex items-center gap-2" href="#">
<div className="h-8 w-8 bg-agri-500 rounded-lg flex items-center justify-center text-white">
<span className="iconify" data-height="20" data-icon="lucide:sprout" data-width="20"></span>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-slate-900 leading-none group-hover:text-agri-600 transition-colors">SAI AGRIUM</span>
<span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium">Corporation</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-agri-600 transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-agri-600 transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-agri-600 transition-colors" href="#products">Products</a>
<a className="text-sm font-medium text-slate-600 hover:text-agri-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-agri-600 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-agri-600 text-white text-xs font-medium py-2.5 px-5 rounded-full transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-0.5" href="#quote">
<span>Get Quote</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="14"></span>
</a>
<button className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-md">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Rice Fields" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=2832&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-24">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-agri-500/20 border border-agri-500/30 backdrop-blur-sm mb-6">
<span className="block w-2 h-2 rounded-full bg-grain-400 animate-pulse"></span>
<span className="text-xs font-medium text-grain-100 tracking-wide">PREMIUM AGRICULTURAL EXPORTS</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tighter leading-tight mb-6">
                    Cultivating Trust,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-grain-300 to-grain-500">Delivering Quality.</span>
</h1>
<p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl font-light leading-relaxed">
                    Your trusted partner in premium grains, pulses, and sugar. connecting Indian agriculture to the global market with uncompromising quality.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 bg-grain-500 hover:bg-grain-400 text-slate-900 text-sm font-semibold py-4 px-8 rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(244,163,0,0.5)]" href="#contact">
                        Explore Products
                        <span className="iconify" data-icon="lucide:chevron-right" data-width="16"></span>
</a>
<a className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white text-sm font-medium py-4 px-8 rounded-lg transition-all" href="#about">
                        Learn About Us
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-70">
<span className="text-xs text-white/60 tracking-widest uppercase">Scroll</span>
<span className="iconify text-white" data-icon="lucide:arrow-down" data-width="20"></span>
</div>
</section>

<section className="bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 border-x border-slate-100">
<div className="p-8 text-center group hover:bg-slate-50 transition-colors">
<span className="iconify mx-auto mb-3 text-agri-600" data-icon="lucide:award" data-width="32"></span>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">8+</h3>
<p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Years Experience</p>
</div>
<div className="p-8 text-center group hover:bg-slate-50 transition-colors">
<span className="iconify mx-auto mb-3 text-agri-600" data-icon="lucide:package-open" data-width="32"></span>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">35+</h3>
<p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Products</p>
</div>
<div className="p-8 text-center group hover:bg-slate-50 transition-colors">
<span className="iconify mx-auto mb-3 text-agri-600" data-icon="lucide:globe-2" data-width="32"></span>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">Global</h3>
<p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Export Quality</p>
</div>
<div className="p-8 text-center group hover:bg-slate-50 transition-colors">
<span className="iconify mx-auto mb-3 text-agri-600" data-icon="lucide:users" data-width="32"></span>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-1">1000+</h3>
<p className="text-xs text-slate-500 uppercase tracking-wide font-medium">Happy Clients</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Our Core Products</h2>
<p className="text-slate-500 max-w-xl text-lg leading-relaxed">Sourced directly from the finest farms across India, processed with care, and delivered to your doorstep.</p>
</div>
<a className="inline-flex items-center gap-2 text-agri-700 font-medium hover:text-agri-500 transition-colors" href="#">
                    View Full Catalogue
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
<img alt="Rice" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white mb-4">
<span className="iconify" data-icon="lucide:wheat" data-width="20"></span>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Rice &amp; Grains</h3>
<p className="text-slate-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Basmati, Non-Basmati, and Wheat varieties of premium grade.</p>
<span className="text-grain-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                            Explore <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</div>
</div>

<div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
<img alt="Pulses" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white mb-4">
<span className="iconify" data-icon="lucide:sprout" data-width="20"></span>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Pulses &amp; Legumes</h3>
<p className="text-slate-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">High-protein Dals and Organic Pulses rich in nutrition.</p>
<span className="text-grain-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                            Explore <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</div>
</div>

<div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
<img alt="Sugar" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?q=80&amp;w=2862&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white mb-4">
<span className="iconify" data-icon="lucide:cube" data-width="20"></span>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Sugar Products</h3>
<p className="text-slate-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Refined and raw sugar varieties for industrial and home use.</p>
<span className="text-grain-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                            Explore <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</div>
</div>

<div className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer">
<img alt="Maize" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white mb-4">
<span className="iconify" data-icon="lucide:sun" data-width="20"></span>
</div>
<h3 className="text-2xl font-semibold text-white tracking-tight mb-2">Maize &amp; Corn</h3>
<p className="text-slate-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">Quality corn for cattle feed and human consumption.</p>
<span className="text-grain-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                            Explore <span className="iconify" data-icon="lucide:arrow-right" data-width="12"></span>
</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2 relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl">
<img alt="Agri Warehouse" className="w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>

<div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
<div className="flex items-center gap-4 mb-4">
<div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<span className="iconify" data-icon="lucide:check-circle" data-width="20"></span>
</div>
<div>
<h4 className="font-semibold text-slate-900 text-sm">Quality Assured</h4>
<p className="text-xs text-slate-500">ISO &amp; FSSAI Certified</p>
</div>
</div>
<p className="text-xs text-slate-500 leading-relaxed">
                            "Sai Agrium ensures every grain meets international export standards."
                        </p>
</div>
</div>
<div className="lg:w-1/2">
<span className="text-agri-600 font-semibold tracking-wide uppercase text-xs mb-2 block">Who We Are</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Leading the Way in<br/>Agricultural Exports</h2>
<p className="text-slate-500 text-lg leading-relaxed mb-6">
                        Sai Agrium Corporation is a premier manufacturer and exporter dedicated to connecting the bounty of Indian farms with the world. With over 8 years of industry expertise, we specialize in high-quality grains, pulses, and allied agricultural products.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-3">
<span className="iconify text-agri-500" data-icon="lucide:check" data-width="18"></span>
<span className="text-sm font-medium text-slate-700">Timely Delivery</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-agri-500" data-icon="lucide:check" data-width="18"></span>
<span className="text-sm font-medium text-slate-700">Competitive Pricing</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-agri-500" data-icon="lucide:check" data-width="18"></span>
<span className="text-sm font-medium text-slate-700">Transparent Business</span>
</div>
<div className="flex items-center gap-3">
<span className="iconify text-agri-500" data-icon="lucide:check" data-width="18"></span>
<span className="text-sm font-medium text-slate-700">Bulk Order Capability</span>
</div>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 shadow-sm text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:text-agri-600 hover:border-agri-200 transition-all" href="#about">
                        More About Us
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-96 h-96 bg-agri-500 rounded-full blur-[128px] opacity-10 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-grain-500 rounded-full blur-[128px] opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-agri-400 font-semibold tracking-wide uppercase text-xs mb-2 block">Why Choose Us</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">The Sai Agrium Advantage</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
<div className="h-12 w-12 bg-gradient-to-br from-agri-400 to-agri-600 rounded-lg flex items-center justify-center mb-6 text-white shadow-lg">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold mb-3">Certified Quality</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        We adhere to strict quality controls. Our products undergo rigorous testing to ensure they meet global safety and health standards.
                    </p>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
<div className="h-12 w-12 bg-gradient-to-br from-grain-400 to-grain-600 rounded-lg flex items-center justify-center mb-6 text-white shadow-lg">
<span className="iconify" data-icon="lucide:truck" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold mb-3">Global Logistics</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        Seamless supply chain management ensuring timely delivery of bulk orders anywhere in the world with proper packaging.
                    </p>
</div>

<div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
<div className="h-12 w-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center mb-6 text-white shadow-lg">
<span className="iconify" data-icon="lucide:gem" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold mb-3">Integrity &amp; Value</h3>
<p className="text-slate-400 text-sm leading-relaxed">
                        We believe in building long-term relationships through transparent pricing, honest dealings, and exceptional service.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-10">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Top Export Picks</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600 transition-colors">
<span className="iconify" data-icon="lucide:arrow-left" data-width="18"></span>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 text-slate-600 transition-colors">
<span className="iconify" data-icon="lucide:arrow-right" data-width="18"></span>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 pb-8 hide-scroll snap-x">

<div className="min-w-[280px] w-[280px] bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow snap-start">
<div className="h-48 bg-slate-100 rounded-t-xl overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-[10px] font-bold px-2 py-1 rounded text-agri-700 uppercase tracking-wide">Premium</span>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 mb-1">1121 Basmati Rice</h4>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Extra long grain, aromatic rice perfect for biryani and gourmet dishes.</p>
<button className="w-full py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-900 hover:text-white transition-colors">Inquire Now</button>
</div>
</div>

<div className="min-w-[280px] w-[280px] bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow snap-start">
<div className="h-48 bg-slate-100 rounded-t-xl overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 mb-1">Yellow Maize</h4>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">High nutritional value maize suitable for animal feed and starch production.</p>
<button className="w-full py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-900 hover:text-white transition-colors">Inquire Now</button>
</div>
</div>

<div className="min-w-[280px] w-[280px] bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow snap-start">
<div className="h-48 bg-slate-100 rounded-t-xl overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 mb-1">Refined Sugar</h4>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Sulphur-free, sparkling white crystal sugar of ICUMSA 45 grade.</p>
<button className="w-full py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-900 hover:text-white transition-colors">Inquire Now</button>
</div>
</div>

<div className="min-w-[280px] w-[280px] bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow snap-start">
<div className="h-48 bg-slate-100 rounded-t-xl overflow-hidden relative">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="p-5">
<h4 className="font-semibold text-slate-900 mb-1">Toor Dal</h4>
<p className="text-xs text-slate-500 mb-4 line-clamp-2">Unpolished, protein-rich split pigeon peas for daily consumption.</p>
<button className="w-full py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-900 hover:text-white transition-colors">Inquire Now</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-agri-50 py-24 border-t border-agri-100" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<span className="text-agri-600 font-semibold tracking-wide uppercase text-xs mb-2 block">Get in Touch</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Ready to place your order?</h2>
<p className="text-slate-600 text-lg mb-8">Contact us for bulk orders, custom packaging requirements, and competitive export pricing.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-agri-600 shrink-0">
<span className="iconify" data-icon="lucide:map-pin" data-width="20"></span>
</div>
<div>
<h4 className="font-semibold text-slate-900">Head Office</h4>
<p className="text-sm text-slate-500">Gopal Nagar, Nagpur, Maharashtra, India</p>
<p className="text-xs text-agri-600 mt-1 cursor-pointer hover:underline">View on Map</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-agri-600 shrink-0">
<span className="iconify" data-icon="lucide:phone" data-width="20"></span>
</div>
<div>
<h4 className="font-semibold text-slate-900">Phone</h4>
<p className="text-sm text-slate-500">+91 98765 43210</p>
<p className="text-sm text-slate-500">Mon-Sat, 9am - 7pm</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-agri-600 shrink-0">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</div>
<div>
<h4 className="font-semibold text-slate-900">Email</h4>
<p className="text-sm text-slate-500">exports@saiagrium.com</p>
<p className="text-sm text-slate-500">sales@saiagrium.com</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-xl shadow-agri-100/50 border border-slate-100">
<h3 className="text-xl font-semibold text-slate-900 mb-6">Request a Quote</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-agri-500/20 focus:border-agri-500 transition-all" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-agri-500/20 focus:border-agri-500 transition-all" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-agri-500/20 focus:border-agri-500 transition-all" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Product of Interest</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-agri-500/20 focus:border-agri-500 transition-all text-slate-600">
<option>Basmati Rice</option>
<option>Non-Basmati Rice</option>
<option>Wheat</option>
<option>Pulses / Dal</option>
<option>Sugar</option>
<option>Maize</option>
<option>Other</option>
</select>
<span className="iconify absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-agri-500/20 focus:border-agri-500 transition-all" rows="4"></textarea>
</div>
<button className="w-full bg-agri-600 hover:bg-agri-700 text-white font-medium py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5" type="button">Send Inquiry</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div>
<div className="flex items-center gap-2 mb-4 text-white">
<span className="iconify text-agri-500" data-icon="lucide:sprout" data-width="24"></span>
<span className="font-semibold tracking-tight text-lg">SAI AGRIUM</span>
</div>
<p className="text-sm leading-relaxed mb-6">
                        A leading agricultural export house committed to delivering premium quality grains and pulses to the world.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="20"></span></a>
<a className="hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-agri-400 transition-colors" href="#home">Home</a></li>
<li><a className="hover:text-agri-400 transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-agri-400 transition-colors" href="#products">Products</a></li>
<li><a className="hover:text-agri-400 transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-agri-400 transition-colors" href="#contact">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4">Products</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-agri-400 transition-colors" href="#">Rice Varieties</a></li>
<li><a className="hover:text-agri-400 transition-colors" href="#">Pulses &amp; Legumes</a></li>
<li><a className="hover:text-agri-400 transition-colors" href="#">Sugar</a></li>
<li><a className="hover:text-agri-400 transition-colors" href="#">Maize &amp; Corn</a></li>
<li><a className="hover:text-agri-400 transition-colors" href="#">Wheat Flour</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-4">Our Offices</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-2">
<span className="iconify mt-1 shrink-0" data-icon="lucide:map-pin" data-width="14"></span>
<span>Gopal Nagar (Main)</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 shrink-0" data-icon="lucide:map-pin" data-width="14"></span>
<span>Itwari Wholesale Market</span>
</li>
<li className="flex items-start gap-2">
<span className="iconify mt-1 shrink-0" data-icon="lucide:map-pin" data-width="14"></span>
<span>Wardha Road Facility</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs">© 2025 Sai Agrium Corporation. All Rights Reserved.</p>
<div className="flex gap-6 text-xs">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center group" href="#">
<span className="iconify" data-icon="lucide:message-circle" data-width="28"></span>
<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap pl-0 group-hover:pl-2 font-medium">Chat with us</span>
</a>

    </>
  );
}
