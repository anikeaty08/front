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
      

<nav className="fixed top-0 w-full z-50 bg-stone-950/90 backdrop-blur-md border-b border-stone-800/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 text-stone-50 flex items-center justify-center">
<iconify-icon icon="solar:home-angle-linear" width="16"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-lg text-white">BH <span className="text-stone-400 font-light">Home Improvements</span></span>
</div>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-400">
<a className="hover:text-amber-500 transition-colors" href="#services">Services</a>
<a className="hover:text-amber-500 transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-amber-500 transition-colors" href="#process">Process</a>
<a className="hover:text-amber-500 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-stone-400 hover:text-white transition-colors" href="tel:+448009596551">
                    +44 800-959-6551
                </a>
<button className="hidden md:flex items-center gap-2 bg-amber-700 hover:bg-amber-600 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-amber-900/20">
                    Request Consultation
                </button>
<button className="lg:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-40 md:pb-24 px-6 relative overflow-hidden bg-stone-950">

<div className="absolute top-0 left-1/4 w-3/4 h-3/4 bg-amber-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-amber-500 text-xs font-medium mb-8">
<iconify-icon icon="solar:stars-linear" width="14"></iconify-icon>
<span className="tracking-wide uppercase">Premium Quality Guaranteed</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.05] mb-8 tracking-tight">
                    Exceptional craft for <br/>
<span className="italic text-stone-400">luxurious living.</span>
</h1>
<p className="text-lg text-stone-400 leading-relaxed mb-10 max-w-md font-light">
                    Elevating homes with uncompromising quality. From grand renovations to refined bespoke finishes, we build spaces that exude sophistication and trust.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-white text-stone-950 px-8 py-4 rounded-full text-sm font-medium hover:bg-stone-200 transition-colors shadow-xl shadow-white/5 flex items-center justify-center gap-2 group">
                        Book Your Project
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="bg-transparent border border-stone-700 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-stone-900 transition-colors flex items-center justify-center gap-2">
                        View Portfolio
                    </button>
</div>
<div className="mt-12 flex items-center gap-6 pt-8 border-t border-stone-800">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full bg-stone-800 border-2 border-stone-950 flex items-center justify-center text-[10px] font-semibold text-stone-400">JS</div>
<div className="w-10 h-10 rounded-full bg-stone-700 border-2 border-stone-950 flex items-center justify-center text-[10px] font-semibold text-stone-300">MR</div>
<div className="w-10 h-10 rounded-full bg-amber-900 border-2 border-stone-950 flex items-center justify-center text-[10px] font-semibold text-amber-200">+</div>
</div>
<div>
<div className="flex text-amber-500 gap-0.5 mb-1">
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="12"></iconify-icon>
</div>
<p className="text-xs font-medium text-stone-400">Renowned for supreme customer satisfaction.</p>
</div>
</div>
</div>

<div className="relative h-[600px] w-full hidden lg:block">
<div className="absolute right-0 top-0 w-11/12 h-full bg-stone-900 rounded-[2rem] overflow-hidden border border-stone-800/50 shadow-2xl">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000')] bg-cover bg-center opacity-80 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent"></div>
</div>

<div className="absolute bottom-12 left-0 bg-stone-900/90 backdrop-blur-md p-6 rounded-2xl border border-stone-700/50 shadow-2xl shadow-black/50 w-72">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-amber-900/30 text-amber-500 flex items-center justify-center border border-amber-500/20">
<iconify-icon icon="solar:check-circle-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs text-stone-400 uppercase tracking-wide font-semibold">Craftsmanship Standard</p>
<p className="text-sm font-medium text-white">Flawless Execution</p>
</div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-stone-800 rounded-full overflow-hidden">
<div className="h-full bg-amber-600 w-full rounded-full"></div>
</div>
<div className="flex justify-between text-[10px] text-stone-500 font-medium tracking-wide">
<span>Design</span>
<span>Build</span>
<span className="text-white">Refine</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-b border-stone-200 bg-stone-50 py-12">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-semibold text-stone-400 uppercase tracking-[0.2em] mb-8">Trusted by discerning homeowners &amp; partners</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-60 grayscale">
<span className="text-xl font-serif italic font-semibold">Architectural Digest</span>
<span className="text-xl font-sans font-semibold tracking-tighter">dwell</span>
<span className="text-xl font-serif font-semibold">Vogue Living</span>
<span className="text-xl font-sans font-bold tracking-tight">HOUZZ</span>
<span className="text-xl font-serif italic">The Local</span>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 tracking-tight">Mastering every detail.</h2>
<p className="text-stone-500 text-lg leading-relaxed font-light">We specialize in turning expansive visions into precise reality. From custom millwork to full-scale remodels, our focus remains on unmatched reliability and aesthetic perfection.</p>
</div>
<button className="text-stone-900 font-medium hover:text-amber-700 transition-colors flex items-center gap-2 whitespace-nowrap">
                    Explore all services
                    <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">

<div className="md:col-span-2 group relative p-10 rounded-[2rem] bg-stone-50 border border-stone-200 hover:border-amber-200 hover:shadow-2xl hover:shadow-amber-900/5 transition-all duration-500 overflow-hidden">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 bg-white rounded-xl border border-stone-200 flex items-center justify-center text-stone-900 mb-6 shadow-sm">
<iconify-icon icon="solar:smart-home-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-serif text-stone-900 mb-3 tracking-tight">Gourmet Kitchens</h3>
<p className="text-stone-500 max-w-md font-light">Bespoke culinary spaces featuring custom cabinetry, imported stone, and seamless high-end appliance integration.</p>
</div>
</div>

<div className="absolute right-0 bottom-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-1/3 translate-y-1/3"></div>
</div>

<div className="group relative p-10 rounded-[2rem] bg-stone-50 border border-stone-200 hover:border-amber-200 hover:shadow-2xl hover:shadow-amber-900/5 transition-all duration-500">
<div className="w-12 h-12 bg-white rounded-xl border border-stone-200 flex items-center justify-center text-stone-900 mb-6 shadow-sm">
<iconify-icon icon="solar:bath-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-stone-900 mb-3 tracking-tight">Spa-Like Baths</h3>
<p className="text-sm text-stone-500 font-light">Luxurious retreats with frameless glass, heated floors, and artisanal tiling.</p>
</div>

<div className="group relative p-10 rounded-[2rem] bg-stone-50 border border-stone-200 hover:border-amber-200 hover:shadow-2xl hover:shadow-amber-900/5 transition-all duration-500">
<div className="w-12 h-12 bg-white rounded-xl border border-stone-200 flex items-center justify-center text-stone-900 mb-6 shadow-sm">
<iconify-icon icon="solar:maximize-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-stone-900 mb-3 tracking-tight">Architectural Additions</h3>
<p className="text-sm text-stone-500 font-light">Seamless home expansions that enhance both the value and narrative of your property.</p>
</div>

<div className="md:col-span-2 group relative p-10 rounded-[2rem] bg-stone-950 text-stone-50 overflow-hidden border border-stone-800">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="w-12 h-12 bg-stone-900 rounded-xl border border-stone-700 flex items-center justify-center text-white mb-6">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-2xl font-serif text-white mb-3 tracking-tight">Complete Home Transformations</h3>
<p className="text-stone-400 max-w-md font-light">From structural redesigns to full gut remodels, we handle complex projects with supreme organization and cinematic visual results.</p>
</div>
</div>
<div className="absolute right-0 top-0 w-1/2 h-full bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=800')] bg-cover bg-center opacity-20 mix-blend-luminosity transition-opacity group-hover:opacity-40"></div>
<div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-100 border-y border-stone-200" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-center max-w-2xl mx-auto">
<span className="text-xs font-semibold text-amber-700 uppercase tracking-[0.15em] mb-3 block">Visual Evidence</span>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 tracking-tight">A legacy of transformation.</h2>
<p className="text-stone-500 text-lg font-light">Witness the uncompromising difference of BH Home Improvements. High-end execution that turns outdated houses into modern masterpieces.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="relative h-[300px] md:h-[450px] rounded-[2rem] overflow-hidden mb-6 shadow-xl shadow-stone-900/5">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&amp;fit=crop&amp;q=80&amp;w=1000')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
<div className="absolute top-6 right-6 bg-stone-950/90 backdrop-blur-md text-white text-[10px] font-semibold px-4 py-2 rounded-full uppercase tracking-widest border border-stone-700">After</div>
</div>
<h3 className="text-2xl font-serif text-stone-900 mb-2 tracking-tight">The Brentwood Estate</h3>
<p className="text-stone-500 font-light">Complete interior gut, structural beam integration, and luxury millwork.</p>
</div>

<div className="group cursor-pointer">
<div className="relative h-[300px] md:h-[450px] rounded-[2rem] overflow-hidden mb-6 shadow-xl shadow-stone-900/5">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&amp;fit=crop&amp;q=80&amp;w=1000')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"></div>
<div className="absolute top-6 right-6 bg-stone-950/90 backdrop-blur-md text-white text-[10px] font-semibold px-4 py-2 rounded-full uppercase tracking-widest border border-stone-700">After</div>
</div>
<h3 className="text-2xl font-serif text-stone-900 mb-2 tracking-tight">Modernist Revival</h3>
<p className="text-stone-500 font-light">Custom chef's kitchen, floor-to-ceiling windows, and imported marble.</p>
</div>
</div>
<div className="mt-12 text-center">
<button className="inline-flex items-center gap-2 border border-stone-300 bg-white hover:bg-stone-50 text-stone-900 px-8 py-3.5 rounded-full text-sm font-medium transition-colors shadow-sm">
                    View Full Gallery
                </button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="process">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6 tracking-tight">A polished workflow.</h2>
<p className="text-stone-500 text-lg font-light">True luxury is peace of mind. Our streamlined, highly professional process eliminates the friction of traditional contracting.</p>
</div>
<div className="relative">

<div className="absolute top-8 left-0 w-full h-[1px] bg-stone-200 hidden md:block"></div>
<div className="grid md:grid-cols-4 gap-8">

<div className="relative pt-8 md:pt-0">
<div className="hidden md:block absolute top-[1.875rem] -translate-y-1/2 left-0 w-3 h-3 bg-stone-950 rounded-full ring-4 ring-white z-10"></div>
<div className="md:mt-16">
<span className="text-5xl font-serif text-stone-100 mb-4 block">01</span>
<h3 className="text-lg font-medium text-stone-900 mb-2">Discovery</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">An on-site consultation to define your aesthetic goals, precise measurements, and a transparent initial proposal.</p>
</div>
</div>

<div className="relative pt-8 md:pt-0">
<div className="hidden md:block absolute top-[1.875rem] -translate-y-1/2 left-0 w-3 h-3 bg-white rounded-full ring-4 ring-stone-100 z-10"></div>
<div className="md:mt-16">
<span className="text-5xl font-serif text-stone-100 mb-4 block">02</span>
<h3 className="text-lg font-medium text-stone-900 mb-2">Design &amp; Planning</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Sourcing premium materials, architectural drawings, and handling all municipal permitting with zero hassle.</p>
</div>
</div>

<div className="relative pt-8 md:pt-0">
<div className="hidden md:block absolute top-[1.875rem] -translate-y-1/2 left-0 w-3 h-3 bg-white rounded-full ring-4 ring-stone-100 z-10"></div>
<div className="md:mt-16">
<span className="text-5xl font-serif text-stone-100 mb-4 block">03</span>
<h3 className="text-lg font-medium text-stone-900 mb-2">Master Craftsmanship</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">Execution by elite tradesmen under a dedicated project manager, with continuous communication.</p>
</div>
</div>

<div className="relative pt-8 md:pt-0">
<div className="hidden md:block absolute top-[1.875rem] -translate-y-1/2 left-0 w-3 h-3 bg-white rounded-full ring-4 ring-stone-100 z-10"></div>
<div className="md:mt-16">
<span className="text-5xl font-serif text-stone-100 mb-4 block">04</span>
<h3 className="text-lg font-medium text-stone-900 mb-2">The Reveal</h3>
<p className="text-sm text-stone-500 leading-relaxed font-light">A meticulous white-glove clean, final walkthrough, and handover of your flawlessly realized space.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-6 px-6 bg-stone-50">
<div className="max-w-7xl mx-auto">
<div className="bg-stone-950 rounded-[2.5rem] p-8 md:p-20 text-stone-300 relative overflow-hidden shadow-2xl">

<div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000')] bg-cover bg-center mix-blend-overlay"></div>
<div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-900 border border-stone-800 text-amber-500 text-xs font-medium mb-8">
<iconify-icon icon="solar:shield-check-linear" width="14"></iconify-icon>
<span className="tracking-wide">Unwavering Reliability</span>
</div>
<h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight tracking-tight">Trust is our <br/><span className="italic text-stone-500">foundation.</span></h2>
<p className="mb-10 font-light text-stone-400 text-lg leading-relaxed">We pair high-end design sensibilities with an unparalleled commitment to professional execution and accountability.</p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 bg-stone-900 p-2 rounded-full text-amber-500 border border-stone-800">
<iconify-icon icon="solar:check-read-linear" width="16"></iconify-icon>
</div>
<div>
<span className="block text-white font-medium text-lg tracking-tight">Transparent Pricing</span>
<span className="text-sm text-stone-500 font-light mt-1 block">Detailed, comprehensive estimates with zero hidden fees.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-stone-900 p-2 rounded-full text-amber-500 border border-stone-800">
<iconify-icon icon="solar:user-rounded-linear" width="16"></iconify-icon>
</div>
<div>
<span className="block text-white font-medium text-lg tracking-tight">White-Glove Management</span>
<span className="text-sm text-stone-500 font-light mt-1 block">A dedicated concierge guiding you from blueprints to furnishings.</span>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 bg-stone-900 p-2 rounded-full text-amber-500 border border-stone-800">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
</div>
<div>
<span className="block text-white font-medium text-lg tracking-tight">Precision Scheduling</span>
<span className="text-sm text-stone-500 font-light mt-1 block">We value your time, delivering spectacular results strictly on schedule.</span>
</div>
</li>
</ul>
</div>

<div className="bg-stone-900/60 backdrop-blur-xl rounded-3xl p-8 border border-stone-800 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
<div className="flex justify-between items-center mb-8 pb-6 border-b border-stone-800">
<div>
<h4 className="text-white font-medium">Executive Portal</h4>
<p className="text-xs text-stone-500 mt-1">Live overview: The Harrison Project</p>
</div>
<div className="flex items-center gap-2 bg-amber-500/10 px-3 py-1.5 rounded-full border border-amber-500/20">
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
<span className="text-xs font-medium text-amber-500">Active Phase</span>
</div>
</div>
<div className="space-y-6">

<div className="flex gap-4 opacity-50">
<div className="flex flex-col items-center">
<div className="w-2 h-2 rounded-full bg-stone-500"></div>
<div className="w-[1px] h-full bg-stone-800 my-1"></div>
</div>
<div>
<h4 className="text-sm font-medium text-stone-300 line-through">Structural Demo</h4>
<p className="text-xs text-stone-500 mt-1">Completed flawlessly</p>
</div>
</div>

<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-4 h-4 rounded-full border-[3px] border-amber-500 bg-stone-950 z-10 shadow-[0_0_15px_rgba(245,158,11,0.4)]"></div>
<div className="w-[1px] h-full bg-stone-800 my-1"></div>
</div>
<div className="pb-2">
<h4 className="text-sm font-medium text-white">Custom Millwork Install</h4>
<p className="text-xs text-stone-400 mt-1 mb-4 leading-relaxed">Artisan carpenters currently fitting the imported oak cabinetry.</p>

<div className="inline-flex items-center gap-2 bg-stone-950 rounded-lg px-3 py-2 border border-stone-800 hover:border-stone-700 transition-colors cursor-pointer">
<div className="text-amber-500"><iconify-icon icon="solar:document-text-linear" width="14"></iconify-icon></div>
<span className="text-[10px] text-stone-400 tracking-wide uppercase">Millwork_Specs.pdf</span>
</div>
</div>
</div>

<div className="flex gap-4 opacity-40">
<div className="flex flex-col items-center">
<div className="w-2 h-2 rounded-full bg-stone-700"></div>
</div>
<div>
<h4 className="text-sm font-medium text-stone-400">Final Finishes</h4>
<p className="text-xs text-stone-500 mt-1">Pending milestone</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50">
<div className="max-w-4xl mx-auto text-center">
<div className="mb-10 flex justify-center text-amber-500 gap-1.5">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
<h3 className="text-3xl md:text-5xl font-serif text-stone-900 leading-[1.2] mb-12 tracking-tight">
                "BH Home Improvements provided a level of craftsmanship and professionalism I didn't think existed anymore. They transformed our space with extraordinary attention to detail, finishing ahead of schedule. Truly a premium experience."
            </h3>
<div className="flex items-center justify-center gap-5">
<div className="w-14 h-14 rounded-full bg-stone-200 overflow-hidden ring-4 ring-white shadow-sm">
<div className="w-full h-full bg-stone-800 flex items-center justify-center text-white text-sm font-medium">AW</div>
</div>
<div className="text-left">
<p className="text-base font-medium text-stone-900">Alexander Wright</p>
<p className="text-sm text-stone-500 font-light">Estate Owner, Beverly Hills</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-stone-200" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-12 text-center tracking-tight">Client Inquiries</h2>
<div className="space-y-4">

<div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/60 hover:border-stone-300 transition-colors">
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-stone-900">
<span>How do you maintain your standard of exceptional craftsmanship?</span>
<span className="transition group-open:rotate-180 text-stone-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-stone-500 mt-4 text-sm leading-relaxed font-light">
                            We work exclusively with a vetted network of master tradesmen and source only top-tier materials. Every phase of your project undergoes rigorous quality control by our lead project managers before moving forward.
                        </p>
</details>
</div>

<div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/60 hover:border-stone-300 transition-colors">
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-stone-900">
<span>Are your quotes truly fixed-price?</span>
<span className="transition group-open:rotate-180 text-stone-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-stone-500 mt-4 text-sm leading-relaxed font-light">
                            Yes. We invest heavily in the pre-construction discovery phase to ensure our estimates are flawless. Barring client-requested scope changes, the investment we quote is the investment you make. No surprises.
                        </p>
</details>
</div>

<div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/60 hover:border-stone-300 transition-colors">
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-stone-900">
<span>Do you manage the architectural design process?</span>
<span className="transition group-open:rotate-180 text-stone-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-stone-500 mt-4 text-sm leading-relaxed font-light">
                            We are a complete design-build firm. We offer high-end architectural and interior design services in-house, ensuring the vision seamlessly translates to the final build. We also happily collaborate with external architects if you already have plans.
                        </p>
</details>
</div>

<div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/60 hover:border-stone-300 transition-colors">
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-stone-900">
<span>How do I book a consultation?</span>
<span className="transition group-open:rotate-180 text-stone-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="text-stone-500 mt-4 text-sm leading-relaxed font-light">
                            You can request a private consultation via our contact form below or call our office directly. We will schedule a site visit to discuss your vision and evaluate feasibility.
                        </p>
</details>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-950 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
<div className="max-w-2xl mx-auto relative z-10">
<h2 className="text-4xl md:text-5xl font-serif text-white mb-6 tracking-tight">Ready to elevate your home?</h2>
<p className="text-stone-400 text-lg mb-10 font-light">Schedule an exclusive consultation with our design-build experts to conceptualize your next project.</p>

<form className="bg-stone-900/80 backdrop-blur-md p-6 rounded-2xl border border-stone-800 text-left max-w-md mx-auto mb-8 space-y-4">
<div>
<label className="block text-xs font-medium text-stone-400 uppercase tracking-wide mb-1.5">Full Name</label>
<input className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors" placeholder="e.g. Jane Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-stone-400 uppercase tracking-wide mb-1.5">Contact Number</label>
<input className="w-full bg-stone-950 border border-stone-800 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-amber-500 transition-colors" placeholder="+44 800-000-0000" type="tel"/>
</div>
<button className="w-full bg-amber-700 hover:bg-amber-600 text-white px-8 py-3.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-amber-900/20 mt-2" type="button">
                    Submit Request
                </button>
</form>
<p className="text-xs text-stone-500 font-light">Or reach our concierge desk directly at +44 800-959-6551.</p>
</div>
</section>

<footer className="bg-stone-950 text-stone-400 py-20 px-6 border-t border-stone-900">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 text-stone-50 flex items-center justify-center">
<iconify-icon icon="solar:home-angle-linear" width="12"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-white">BH <span className="text-stone-500 font-light">Home Improvements</span></span>
</div>
<p className="text-sm text-stone-500 mb-6 leading-relaxed font-light">
                    Redefining luxury renovations through flawless execution and unparalleled trust. Fully licensed, bonded, and insured.
                </p>
<div className="flex gap-4 text-stone-500">
<a className="hover:text-amber-500 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="hover:text-amber-500 transition-colors" href="#"><iconify-icon icon="solar:link-linear" width="20"></iconify-icon></a>
<a className="hover:text-amber-500 transition-colors" href="#"><iconify-icon icon="solar:global-linear" width="20"></iconify-icon></a>
<a className="hover:text-amber-500 transition-colors" href="#"><iconify-icon icon="solar:case-linear" width="20"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full md:w-auto">
<div>
<h4 className="text-sm font-medium text-white mb-4 tracking-wide">Company</h4>
<ul className="space-y-3 text-sm text-stone-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Our Heritage</a></li>
<li><a className="hover:text-white transition-colors" href="#">Philosophy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press &amp; Media</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4 tracking-wide">Expertise</h4>
<ul className="space-y-3 text-sm text-stone-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Full Gut Remodels</a></li>
<li><a className="hover:text-white transition-colors" href="#">Custom Millwork</a></li>
<li><a className="hover:text-white transition-colors" href="#">Estate Expansions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Architectural Design</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4 tracking-wide">Clientele</h4>
<ul className="space-y-3 text-sm text-stone-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Consultation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Client Portal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Warranties</a></li>
<li><a className="hover:text-white transition-colors" href="#">Testimonials</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4 tracking-wide">Legal</h4>
<ul className="space-y-3 text-sm text-stone-500 font-light">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">License Details</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between text-xs text-stone-600 font-light">
<p>© 2024 BH Home Improvements LLC. All rights reserved.</p>
<p className="mt-2 md:mt-0">Excellence by Design.</p>
</div>
</footer>

    </>
  );
}
