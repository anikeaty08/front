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
      

<div className="fixed bottom-4 right-4 z-50 md:hidden">
<a className="flex items-center justify-center w-14 h-14 bg-[#e31e27] rounded-full shadow-lg text-white hover:bg-[#c21921] transition-colors ring-4 ring-white" href="tel:972-782-5603">
<span className="iconify" data-height="24" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="24"></span>
</a>
</div>

<nav className="sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<img alt="TX Precision Roofs Logo" className="h-10 w-auto object-contain" src="https://img-r1.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/5/2023/06/tx-logo-clean.jpg"/>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-[#2c55a5] transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#2c55a5] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#2c55a5] transition-colors" href="#about">About Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-[#2c55a5] transition-colors" href="#gallery">Projects</a>
</div>

<div className="hidden md:flex items-center space-x-6">
<a className="flex items-center text-sm font-semibold text-[#2c55a5] hover:text-[#e31e27] transition-colors" href="tel:972-782-5603">
<span className="iconify mr-2" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="18"></span>
                        972-782-5603
                    </a>
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-[#e31e27] hover:bg-[#c21921] transition-all shadow-sm hover:shadow-md" href="#contact">
                        Free Estimate
                    </a>
</div>

<div className="flex items-center md:hidden">
<button className="text-slate-500 hover:text-[#2c55a5] p-2" type="button">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5" data-width="24"></span>
</button>
</div>
</div>
</div>
</nav>

<div className="relative bg-slate-900 overflow-hidden">

<div className="absolute inset-0">
<img alt="Roofing Project" className="w-full h-full object-cover opacity-30" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-slate-900/10"></div>
</div>
<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32 sm:pt-32 sm:pb-40">
<div className="md:max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2c55a5]/20 border border-[#2c55a5]/30 text-[#2c55a5] bg-opacity-30 backdrop-blur-sm mb-6">
<span className="flex h-2 w-2 rounded-full bg-[#e31e27]"></span>
<span className="text-xs font-medium text-white tracking-wide uppercase">North Texas' Trusted Roofers</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6">
                    Protect Your Home with <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">Precision Quality</span>
</h1>
<p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
                    Reliable roofing solutions for residential and commercial clients in Garland, Arlington, and across North Texas. Experience durability backed by our commitment to excellence.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-[#2c55a5] hover:bg-[#234485] transition-all shadow-lg shadow-[#2c55a5]/20" href="#contact">
                        Get a Free Roof Estimate
                        <span className="iconify ml-2" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 border border-slate-600 text-base font-medium rounded-lg text-white bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all" href="tel:972-782-5603">
<span className="iconify mr-2 text-[#e31e27]" data-icon="lucide:phone-call" data-strokeWidth="1.5" data-width="18"></span>
                        Call: 972-782-5603
                    </a>
</div>
</div>
</div>
</div>

<div className="border-b border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-90 hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-3 group">
<span className="iconify text-[#2c55a5] group-hover:text-[#e31e27] transition-colors" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="32"></span>
<span className="text-sm font-semibold text-slate-900">BBB Accredited<br/><span className="text-slate-500 font-normal">Business</span></span>
</div>
<div className="flex items-center gap-3 group">
<span className="iconify text-[#2c55a5] group-hover:text-[#e31e27] transition-colors" data-icon="lucide:award" data-strokeWidth="1.5" data-width="32"></span>
<span className="text-sm font-semibold text-slate-900">GAF Certified<br/><span className="text-slate-500 font-normal">Contractor</span></span>
</div>
<div className="flex items-center gap-3 group">
<span className="iconify text-[#2c55a5] group-hover:text-[#e31e27] transition-colors" data-icon="lucide:map-pin" data-strokeWidth="1.5" data-width="32"></span>
<span className="text-sm font-semibold text-slate-900">Local Experts<br/><span className="text-slate-500 font-normal">North Texas</span></span>
</div>
<div className="flex items-center gap-3 group">
<span className="iconify text-[#e31e27]" data-fill="currentColor" data-icon="lucide:star" data-width="28"></span>
<span className="text-sm font-semibold text-slate-900">5-Star Rated<br/><span className="text-slate-500 font-normal">Service</span></span>
</div>
</div>
</div>
</div>

<section className="py-20 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-xs font-semibold text-[#e31e27] uppercase tracking-widest mb-3">Our Expertise</h2>
<p className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">Comprehensive Exterior Solutions</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#2c55a5] mb-6 group-hover:bg-[#2c55a5] group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:building-2" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Commercial Roofing</h3>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">Expert commercial roofing services including flat roofs, metal, and TPO systems designed for longevity.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-600">
<li className="flex items-center gap-2"><span className="iconify text-[#e31e27]" data-icon="lucide:check" data-width="16"></span> TPO &amp; Flat Roofs</li>
<li className="flex items-center gap-2"><span className="iconify text-[#e31e27]" data-icon="lucide:check" data-width="16"></span> Leak Detection</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-[#2c55a5] hover:text-[#e31e27]" href="#">
                        Learn more <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#2c55a5] mb-6 group-hover:bg-[#2c55a5] group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:home" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Residential Roofing</h3>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">Top-notch residential roofing — repairs, replacements, and new installations protecting your family.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-600">
<li className="flex items-center gap-2"><span className="iconify text-[#e31e27]" data-icon="lucide:check" data-width="16"></span> Shingle Replacement</li>
<li className="flex items-center gap-2"><span className="iconify text-[#e31e27]" data-icon="lucide:check" data-width="16"></span> Storm Damage Repair</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-[#2c55a5] hover:text-[#e31e27]" href="#">
                        Learn more <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>

<div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#2c55a5] mb-6 group-hover:bg-[#2c55a5] group-hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:app-window" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Window Installation</h3>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">Professional window replacement services designed to improve energy efficiency and curb appeal.</p>
<ul className="space-y-2 mb-6 text-sm text-slate-600">
<li className="flex items-center gap-2"><span className="iconify text-[#e31e27]" data-icon="lucide:check" data-width="16"></span> Energy Efficient</li>
<li className="flex items-center gap-2"><span className="iconify text-[#e31e27]" data-icon="lucide:check" data-width="16"></span> Custom Styles</li>
</ul>
<a className="inline-flex items-center text-sm font-medium text-[#2c55a5] hover:text-[#e31e27]" href="#">
                        Learn more <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="relative rounded-2xl overflow-hidden shadow-xl">
<img alt="Contractor Team" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 to-transparent p-8">
<div className="flex items-center gap-3">
<span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e31e27] text-white">
<span className="iconify" data-icon="lucide:shield" data-width="16"></span>
</span>
<p className="text-white font-medium text-lg">Licensed &amp; Insured for Your Peace of Mind</p>
</div>
</div>
</div>
<div>
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Roofing Professionals You Can Trust</h2>
<p className="text-slate-600 leading-relaxed mb-6">
                        At <span className="text-[#2c55a5] font-semibold">TX Precision Roofs</span>, we understand that your roof is one of the most significant investments you'll make for your property. Our team brings years of expertise in delivering high-quality workmanship for both residential and commercial projects.
                    </p>
<p className="text-slate-600 leading-relaxed mb-8">
                        We prioritize transparency, timely project completion, and using only the best materials. Whether it's a minor repair or a full-scale installation, our goal is absolute customer satisfaction.
                    </p>
<div className="flex gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border border-[#2c55a5] text-sm font-medium rounded-lg text-[#2c55a5] bg-white hover:bg-[#2c55a5] hover:text-white transition-all" href="#contact">
                            About Our Team
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-slate-900 text-white border-t border-slate-800 relative">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2c55a5] via-[#e31e27] to-[#2c55a5]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Providing Quality Roofing Options</h2>
<p className="text-slate-400 font-light">
                        We work with a variety of roofing styles and premium materials to match your aesthetic and budget requirements.
                    </p>
</div>
<a className="text-[#2c55a5] hover:text-[#e31e27] font-medium text-sm flex items-center transition-colors" href="#contact">
                    Discuss materials with an expert <span className="iconify ml-1" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#2c55a5] hover:bg-white/10 transition-colors group">
<span className="iconify mb-3 text-[#e31e27] group-hover:text-white transition-colors" data-icon="lucide:layout-grid" data-strokeWidth="1.5" data-width="28"></span>
<h3 className="font-medium text-white">Asphalt Shingles</h3>
<p className="text-xs text-slate-400 mt-1">Durable &amp; Traditional</p>
</div>
<div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#2c55a5] hover:bg-white/10 transition-colors group">
<span className="iconify mb-3 text-[#e31e27] group-hover:text-white transition-colors" data-icon="lucide:shield" data-strokeWidth="1.5" data-width="28"></span>
<h3 className="font-medium text-white">Metal Roofing</h3>
<p className="text-xs text-slate-400 mt-1">Long-lasting &amp; Efficient</p>
</div>
<div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#2c55a5] hover:bg-white/10 transition-colors group">
<span className="iconify mb-3 text-[#e31e27] group-hover:text-white transition-colors" data-icon="lucide:layers" data-strokeWidth="1.5" data-width="28"></span>
<h3 className="font-medium text-white">Tile Roofing</h3>
<p className="text-xs text-slate-400 mt-1">Classic &amp; Resilient</p>
</div>
<div className="bg-white/5 rounded-xl p-6 border border-white/10 hover:border-[#2c55a5] hover:bg-white/10 transition-colors group">
<span className="iconify mb-3 text-[#e31e27] group-hover:text-white transition-colors" data-icon="lucide:box" data-strokeWidth="1.5" data-width="28"></span>
<h3 className="font-medium text-white">Flat &amp; TPO</h3>
<p className="text-xs text-slate-400 mt-1">Commercial Grade</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Our Simple Process</h2>
<p className="text-slate-500">From inspection to final review, we make it seamless.</p>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">

<div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#2c55a5]/30 to-transparent -z-10 transform translate-y-1/2"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-white rounded-full border-4 border-slate-50 shadow-sm flex items-center justify-center text-[#2c55a5] mb-4 z-10 group-hover:border-[#e31e27] transition-colors">
<span className="iconify" data-icon="lucide:clipboard-list" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Free Inspection</h3>
<p className="text-sm text-slate-500">We assess your roof's condition at no cost.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-white rounded-full border-4 border-slate-50 shadow-sm flex items-center justify-center text-[#2c55a5] mb-4 z-10 group-hover:border-[#e31e27] transition-colors">
<span className="iconify" data-icon="lucide:file-text" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Personalized Estimate</h3>
<p className="text-sm text-slate-500">Detailed quote with clear material options.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-white rounded-full border-4 border-slate-50 shadow-sm flex items-center justify-center text-[#2c55a5] mb-4 z-10 group-hover:border-[#e31e27] transition-colors">
<span className="iconify" data-icon="lucide:hammer" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Professional Installation</h3>
<p className="text-sm text-slate-500">Expert crews execute the work efficiently.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-16 h-16 bg-white rounded-full border-4 border-slate-50 shadow-sm flex items-center justify-center text-[#2c55a5] mb-4 z-10 group-hover:border-[#e31e27] transition-colors">
<span className="iconify" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="28"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Final Quality Review</h3>
<p className="text-sm text-slate-500">We ensure everything meets our high standards.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-12 text-center">See The Difference</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-100">
<div className="grid grid-cols-2 h-64">
<div className="relative h-full">
<img alt="Old Roof" className="w-full h-full object-cover filter brightness-75 grayscale" src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 left-4 bg-slate-900/80 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</span>
</div>
<div className="relative h-full">
<img alt="New Roof" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<span className="absolute top-4 right-4 bg-[#2c55a5]/90 text-white text-xs font-bold px-2 py-1 rounded">AFTER</span>
</div>
</div>
<div className="p-4 bg-white">
<h4 className="font-semibold text-slate-900">Residential Shingle Replacement</h4>
<p className="text-xs text-slate-500">Arlington, TX</p>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-lg border border-slate-100">
<div className="grid grid-cols-2 h-64">
<div className="relative h-full">
<img alt="Old Roof" className="w-full h-full object-cover filter brightness-75 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<span className="absolute top-4 left-4 bg-slate-900/80 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</span>
</div>
<div className="relative h-full">
<img alt="New Roof" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<span className="absolute top-4 right-4 bg-[#2c55a5]/90 text-white text-xs font-bold px-2 py-1 rounded">AFTER</span>
</div>
</div>
<div className="p-4 bg-white">
<h4 className="font-semibold text-slate-900">Storm Damage Restoration</h4>
<p className="text-xs text-slate-500">Garland, TX</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">What Our Clients Are Saying</h2>
<div className="flex gap-1 text-[#e31e27]">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star"></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-[#e31e27] mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 mb-6 text-sm italic">"TX Precision Roofs did an amazing job on our home. The team was professional, clean, and fast. Highly recommended!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-[#2c55a5]">JD</div>
<span className="text-sm font-semibold text-slate-900">John D.</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-[#e31e27] mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 mb-6 text-sm italic">"Honest pricing and excellent communication throughout the entire process. My new roof looks fantastic."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-[#2c55a5]">SM</div>
<span className="text-sm font-semibold text-slate-900">Sarah M.</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex gap-1 text-[#e31e27] mb-4">
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
<span className="iconify" data-fill="currentColor" data-icon="lucide:star" data-width="16"></span>
</div>
<p className="text-slate-600 mb-6 text-sm italic">"Great experience with commercial repairs. They fixed a persistent leak others couldn't find."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-[#2c55a5]">RB</div>
<span className="text-sm font-semibold text-slate-900">Robert B.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Proudly Serving North Texas</h2>
<p className="text-slate-600 mb-6">We provide expert roofing services to homeowners and businesses across the Dallas-Fort Worth metroplex.</p>
<div className="grid grid-cols-2 gap-y-2 mb-8">
<div className="flex items-center gap-2 text-sm text-slate-700"><span className="iconify text-[#e31e27]" data-icon="lucide:map-pin" data-width="16"></span> Garland</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><span className="iconify text-[#e31e27]" data-icon="lucide:map-pin" data-width="16"></span> Arlington</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><span className="iconify text-[#e31e27]" data-icon="lucide:map-pin" data-width="16"></span> Plano</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><span className="iconify text-[#e31e27]" data-icon="lucide:map-pin" data-width="16"></span> Richardson</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><span className="iconify text-[#e31e27]" data-icon="lucide:map-pin" data-width="16"></span> Dallas</div>
<div className="flex items-center gap-2 text-sm text-slate-700"><span className="iconify text-[#e31e27]" data-icon="lucide:map-pin" data-width="16"></span> Mesquite</div>
</div>
</div>
<div className="h-64 lg:h-auto bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200">

<div className="absolute inset-0 flex items-center justify-center bg-slate-50">
<span className="text-[#2c55a5] font-medium flex items-center gap-2">
<span className="iconify" data-icon="lucide:map" data-width="20"></span> Map Integration
                        </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#2c55a5] text-white relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-4xl mx-auto px-4 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Schedule Your Free Roof Estimate Today</h2>
<p className="text-blue-100 text-lg mb-10">Don't wait for a leak to become a disaster. Contact the experts at TX Precision Roofs for a comprehensive inspection.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-[#e31e27] bg-white hover:bg-slate-50 transition-all shadow-xl" href="#">
                    Get a Free Estimate
                </a>
<a className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-base font-semibold rounded-lg text-white hover:bg-white/10 transition-all" href="tel:972-782-5603">
<span className="iconify mr-2" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="20"></span>
                    972-782-5603
                </a>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
<div className="col-span-1 md:col-span-1">
<img alt="TX Precision Roofs Logo" className="h-8 w-auto mb-4 opacity-90 grayscale brightness-200" src="https://img-r1.s3.us-west-2.amazonaws.com/wp-content/uploads/sites/5/2023/06/tx-logo-clean.jpg"/>
<p className="text-sm leading-relaxed">Expert roofing solutions committed to quality, integrity, and customer satisfaction in North Texas.</p>
</div>
<div>
<h3 className="text-white font-medium mb-4">Quick Links</h3>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-medium mb-4">Services</h3>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Residential Roofing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Commercial Roofing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Window Installation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Storm Damage</a></li>
</ul>
</div>
<div>
<h3 className="text-white font-medium mb-4">Contact Us</h3>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2"><span className="iconify text-[#e31e27]" data-icon="lucide:phone" data-width="16"></span> 972-782-5603</li>
<li className="flex items-center gap-2"><span className="iconify text-[#e31e27]" data-icon="lucide:mail" data-width="16"></span> info@txprecisionroofs.com</li>
<li className="flex items-center gap-2"><span className="iconify text-[#e31e27]" data-icon="lucide:map-pin" data-width="16"></span> North Texas Area</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
<p>© 2023 TX Precision Roofs. All rights reserved.</p>
<div className="flex space-x-4 mt-4 md:mt-0">
<a className="hover:text-white" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="16"></span></a>
<a className="hover:text-white" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
