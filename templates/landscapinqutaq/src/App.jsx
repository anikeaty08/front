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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tight text-stone-900 flex items-center gap-2" href="#">
<i className="w-6 h-6 text-emerald-600 fill-emerald-100" data-lucide="leaf" strokeWidth="1.5"></i>
                [Your Business Name]
            </a>

<nav className="hidden md:flex items-center gap-1 bg-stone-100/50 p-1 rounded-full border border-stone-200/50">
<a className="px-5 py-2 text-sm font-medium text-stone-900 rounded-full hover:bg-white hover:shadow-sm transition-all" href="#">Home</a>
<a className="px-5 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 rounded-full hover:bg-white hover:shadow-sm transition-all" href="#services">Services</a>
<a className="px-5 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 rounded-full hover:bg-white hover:shadow-sm transition-all" href="#projects">Projects</a>
<a className="px-5 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 rounded-full hover:bg-white hover:shadow-sm transition-all" href="#about">About</a>
<a className="px-5 py-2 text-sm font-medium text-stone-600 hover:text-stone-900 rounded-full hover:bg-white hover:shadow-sm transition-all" href="#contact">Contact</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-colors focus:ring-4 focus:ring-stone-200" href="#contact">
                    Get a Free Consultation
                </a>

<button className="md:hidden text-stone-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Beautiful landscaped backyard" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-50"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-xs font-medium mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Accepting new projects for Spring
            </div>
<h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-sm">
                Transform Your Outdoor Space into the Yard You've Always Dreamed Of
            </h1>
<p className="text-lg md:text-xl text-stone-100 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                Custom landscape design, hardscaping, patios, outdoor living features, and expert maintenance — beautifully crafted for your home in Greater Columbus.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<a className="w-full sm:w-auto px-8 py-4 bg-white text-stone-900 text-base font-medium rounded-full hover:bg-stone-100 transition-all shadow-xl shadow-stone-900/10" href="#contact">
                    Schedule Your Free Consultation Today
                </a>
<span className="text-stone-300 text-sm sm:hidden">No obligation • Local experts</span>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-8">
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight">500+</p>
<p className="text-sm text-stone-300 mt-1">Happy Homeowners</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight">100+</p>
<p className="text-sm text-stone-300 mt-1">Completed Projects</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-white tracking-tight">15+</p>
<p className="text-sm text-stone-300 mt-1">Years Craftsmanship</p>
</div>
<div className="text-center">
<div className="flex justify-center mb-1 text-emerald-400">
<i className="w-5 h-5 fill-emerald-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-emerald-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-emerald-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-emerald-400" data-lucide="star" strokeWidth="1.5"></i>
<i className="w-5 h-5 fill-emerald-400" data-lucide="star" strokeWidth="1.5"></i>
</div>
<p className="text-sm text-stone-300">5-Star Rated</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-stone-900 tracking-tight mb-4">
                    Why Homeowners Choose Us for Their Landscapes
                </h2>
<p className="text-lg text-stone-500 leading-relaxed">
                    We don't just mow grass; we build environments that enhance your lifestyle and property value.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-100 transition-colors">
<div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="pencil-ruler" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Stunning Custom Designs</h3>
<p className="text-base text-stone-600 leading-relaxed">
                        Personalized landscapes that reflect your style — from lush gardens and vibrant plantings to modern hardscapes and outdoor kitchens.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-100 transition-colors">
<div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="hammer" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Expert Craftsmanship</h3>
<p className="text-base text-stone-600 leading-relaxed">
                        We use premium materials and proven techniques for durable, beautiful results that last for years.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-100 transition-colors">
<div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="message-square-heart" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Stress-Free Process</h3>
<p className="text-base text-stone-600 leading-relaxed">
                        From initial consultation to final walkthrough, we handle everything with clear communication and attention to detail.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:border-emerald-100 transition-colors">
<div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Unmatched Guarantees</h3>
<p className="text-base text-stone-600 leading-relaxed">
                        Backed by strong warranties, satisfaction guarantees, and ongoing support so you can enjoy your space worry-free.
                    </p>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-base font-medium text-emerald-700 hover:text-emerald-800 transition-colors" href="#contact">
                    Ready to get started? Request a Free Quote
                    <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-100/50" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-stone-900 tracking-tight mb-4">Our Landscaping Services</h2>
<p className="text-lg text-stone-500">Full-service solutions to elevate your outdoor living</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200/60 hover:shadow-md transition-shadow">
<i className="w-8 h-8 text-stone-900 mb-6" data-lucide="ruler" strokeWidth="1.5"></i>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Landscape Design &amp; Installation</h3>
<p className="text-base text-stone-600">Custom plans with trees, shrubs, flowers, sod, and lighting tailored to your property and lifestyle.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200/60 hover:shadow-md transition-shadow">
<i className="w-8 h-8 text-stone-900 mb-6" data-lucide="layout-dashboard" strokeWidth="1.5"></i>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Hardscaping &amp; Patios</h3>
<p className="text-base text-stone-600">Durable patios, walkways, retaining walls, fire pits, and outdoor kitchens built to impress.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200/60 hover:shadow-md transition-shadow">
<i className="w-8 h-8 text-stone-900 mb-6" data-lucide="armchair" strokeWidth="1.5"></i>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Outdoor Living Spaces</h3>
<p className="text-base text-stone-600">Pergolas, decks, outdoor kitchens, fire features, and entertaining areas for year-round enjoyment.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200/60 hover:shadow-md transition-shadow">
<i className="w-8 h-8 text-stone-900 mb-6" data-lucide="scissors" strokeWidth="1.5"></i>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Lawn Care &amp; Maintenance</h3>
<p className="text-base text-stone-600">Regular mowing, fertilization, weed control, pruning, and seasonal care to keep your yard pristine.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200/60 hover:shadow-md transition-shadow">
<i className="w-8 h-8 text-stone-900 mb-6" data-lucide="droplets" strokeWidth="1.5"></i>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Irrigation &amp; Drainage</h3>
<p className="text-base text-stone-600">Efficient sprinkler systems and drainage solutions for healthy plants and no puddles.</p>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200/60 hover:shadow-md transition-shadow">
<i className="w-8 h-8 text-stone-900 mb-6" data-lucide="flower-2" strokeWidth="1.5"></i>
<h3 className="text-xl font-semibold text-stone-900 mb-3 tracking-tight">Seasonal Planting &amp; Cleanups</h3>
<p className="text-base text-stone-600">Spring/fall cleanups, colorful seasonal flowers, and mulching for curb appeal.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-stone-900 rounded-full hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10" href="#contact">
                    See how we can help your home — Get in Touch
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-stone-100" id="projects">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-5xl font-semibold text-stone-900 tracking-tight mb-4">Inspiring Transformations</h2>
<p className="text-lg text-stone-500">
                        Browse our featured projects — stunning patios, lush landscapes, and complete backyard makeovers. Each project is built with precision, quality materials, and a focus on your vision.
                    </p>
</div>
<div className="hidden md:block">
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 border border-stone-200 px-4 py-2 rounded-full hover:bg-stone-50 transition-colors" href="#contact">
                        View More Projects <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-xl bg-stone-100 aspect-[4/3]">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium text-lg">Modern Stone Patio</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-stone-100 aspect-[4/3]">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium text-lg">Lush Garden Walkway</span>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl bg-stone-100 aspect-[4/3]">
<img alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<span className="text-white font-medium text-lg">Fire Pit &amp; Seating</span>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 border border-stone-200 px-4 py-2 rounded-full hover:bg-stone-50 transition-colors" href="#contact">
                    Ready for your transformation? Schedule Consultation
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-stone-900 tracking-tight mb-4">Our Simple, Stress-Free Process</h2>
<p className="text-lg text-stone-500">From vision to reality in easy steps</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-stone-200 -z-10"></div>

<div className="relative bg-stone-50">
<div className="w-16 h-16 bg-white border border-stone-200 rounded-2xl flex items-center justify-center text-xl font-semibold text-stone-900 shadow-sm mb-6 mx-auto md:mx-0">1</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Consultation</h3>
<p className="text-base text-stone-600">We visit your property, listen to your ideas, and discuss your goals, budget, and timeline.</p>
</div>

<div className="relative bg-stone-50">
<div className="w-16 h-16 bg-white border border-stone-200 rounded-2xl flex items-center justify-center text-xl font-semibold text-stone-900 shadow-sm mb-6 mx-auto md:mx-0">2</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Custom Design</h3>
<p className="text-base text-stone-600">Receive detailed plans, 3D renders (if applicable), and a clear, no-surprise quote.</p>
</div>

<div className="relative bg-stone-50">
<div className="w-16 h-16 bg-white border border-stone-200 rounded-2xl flex items-center justify-center text-xl font-semibold text-stone-900 shadow-sm mb-6 mx-auto md:mx-0">3</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Installation</h3>
<p className="text-base text-stone-600">Our skilled team brings the design to life with minimal disruption to your home.</p>
</div>

<div className="relative bg-stone-50">
<div className="w-16 h-16 bg-white border border-stone-200 rounded-2xl flex items-center justify-center text-xl font-semibold text-stone-900 shadow-sm mb-6 mx-auto md:mx-0">4</div>
<h3 className="text-lg font-semibold text-stone-900 mb-2">Enjoy</h3>
<p className="text-base text-stone-600">We ensure everything is perfect, then hand over your dream outdoor space.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center gap-2 text-base font-medium text-emerald-700 hover:text-emerald-800 transition-colors" href="#contact">
                    Start your journey today — Book a Free Consultation
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-emerald-900 text-stone-100">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-4">What Our Happy Homeowners Are Saying</h2>
<p className="text-lg text-emerald-100/80">Real reviews from real clients</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-emerald-800/50 p-8 rounded-2xl border border-emerald-700">
<div className="flex gap-1 mb-4 text-emerald-400">
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
</div>
<p className="text-lg text-emerald-50 mb-6 italic">"The team exceeded our expectations — our backyard is now our favorite place to relax! The attention to detail was incredible."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center font-bold text-emerald-100">S</div>
<div>
<p className="text-sm font-semibold text-white">Sarah Jenkins</p>
<p className="text-xs text-emerald-300">Columbus, OH</p>
</div>
</div>
</div>

<div className="bg-emerald-800/50 p-8 rounded-2xl border border-emerald-700">
<div className="flex gap-1 mb-4 text-emerald-400">
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
</div>
<p className="text-lg text-emerald-50 mb-6 italic">"Professional, on-time, and beautiful results. Highly recommend! They transformed our mud pit into a paradise."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center font-bold text-emerald-100">M</div>
<div>
<p className="text-sm font-semibold text-white">Mike T.</p>
<p className="text-xs text-emerald-300">Dublin, OH</p>
</div>
</div>
</div>

<div className="bg-emerald-800/50 p-8 rounded-2xl border border-emerald-700">
<div className="flex gap-1 mb-4 text-emerald-400">
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
<i className="w-4 h-4 fill-emerald-400" data-lucide="star" strokeWidth="0"></i>
</div>
<p className="text-lg text-emerald-50 mb-6 italic">"From design to finish, everything was seamless. Worth every penny for the quality of work delivered."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center font-bold text-emerald-100">J</div>
<div>
<p className="text-sm font-semibold text-white">Jessica R.</p>
<p className="text-xs text-emerald-300">New Albany, OH</p>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-sm text-emerald-300/70 mb-4">Based on 100+ 5-star reviews</p>
<a className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-emerald-900 bg-emerald-100 rounded-full hover:bg-white transition-colors" href="#contact">
                    Join our happy customers — Get Your Free Quote
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="about">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-5xl font-semibold text-stone-900 tracking-tight mb-6">Local Experts You Can Trust</h2>
<p className="text-lg font-medium text-emerald-700 mb-6">Proudly serving Greater Columbus for 15 years</p>
<p className="text-lg text-stone-600 mb-6 leading-relaxed">
                    We're a family-owned local business passionate about creating outdoor spaces where memories are made. With award-winning designs, top-rated service, and a commitment to quality, we treat every yard like our own.
                </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-stone-700">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2" strokeWidth="2"></i>
                        Fully Licensed &amp; Insured
                    </li>
<li className="flex items-center gap-3 text-stone-700">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2" strokeWidth="2"></i>
                        Certified Landscape Professionals
                    </li>
<li className="flex items-center gap-3 text-stone-700">
<i className="w-5 h-5 text-emerald-600" data-lucide="check-circle-2" strokeWidth="2"></i>
                        Warranties on All Hardscaping
                    </li>
</ul>
<a className="text-stone-900 font-medium border-b border-stone-900 pb-0.5 hover:text-emerald-700 hover:border-emerald-700 transition-colors" href="#contact">
                    Meet the team — Contact Us
                </a>
</div>
<div className="lg:w-1/2 relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-50 rounded-full -z-10"></div>
<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-stone-100 rounded-full -z-10"></div>
<img alt="Landscaping Team" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1557429287-b2e26467fc2b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50" id="contact">
<div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden flex flex-col lg:flex-row">

<div className="lg:w-5/12 p-10 bg-stone-900 text-stone-100 flex flex-col justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-2">Ready to Create Your Dream Yard?</h2>
<p className="text-stone-400 mb-8">Get started with a no-obligation consultation today.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-stone-400 mt-1" data-lucide="map-pin" strokeWidth="1.5"></i>
<div>
<p className="font-medium text-white">Serving</p>
<p className="text-stone-400 text-sm">Greater Columbus, Dublin, New Albany, Powell &amp; Westerville</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-stone-400 mt-1" data-lucide="mail" strokeWidth="1.5"></i>
<div>
<p className="font-medium text-white">Email Us</p>
<p className="text-stone-400 text-sm">hello@yourbusiness.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="w-6 h-6 text-stone-400 mt-1" data-lucide="phone" strokeWidth="1.5"></i>
<div>
<p className="font-medium text-white">Call Us</p>
<p className="text-stone-400 text-sm">(555) 123-4567</p>
</div>
</div>
</div>
</div>
<div className="mt-12">
<p className="text-xs text-stone-500 uppercase tracking-widest font-semibold mb-4">We respond within 24 hours</p>
<p className="text-sm text-stone-400">"No pressure, just possibilities. Let's make your outdoor space amazing."</p>
</div>
</div>

<div className="lg:w-7/12 p-10 lg:p-12">
<form className="space-y-5">
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="name">Full Name *</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="email">Email *</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all" id="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="phone">Phone *</label>
<input className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all" id="phone" placeholder="(555) 123-4567" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="type">Project Type</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all appearance-none" id="type">
<option>Landscape Design &amp; Install</option>
<option>Hardscaping &amp; Patios</option>
<option>Maintenance &amp; Care</option>
<option>Other</option>
</select>
<i className="absolute right-4 top-3.5 w-5 h-5 text-stone-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
<div>
<label className="block text-sm font-medium text-stone-700 mb-1" htmlFor="message">Message / Project Details</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-stone-200 text-stone-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all" id="message" placeholder="Tell us about your vision..." rows="3"></textarea>
</div>
<button className="w-full py-4 px-6 bg-stone-900 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5" type="button">
                        Request Free Consultation
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-600" data-lucide="leaf" strokeWidth="1.5"></i>
<span className="text-stone-900 font-semibold tracking-tight">[Your Business Name]</span>
</div>
<div className="flex gap-8 text-sm text-stone-500">
<a className="hover:text-stone-900 transition-colors" href="#">Services</a>
<a className="hover:text-stone-900 transition-colors" href="#">Projects</a>
<a className="hover:text-stone-900 transition-colors" href="#">About</a>
<a className="hover:text-stone-900 transition-colors" href="#">Contact</a>
</div>
<div className="text-sm text-stone-400">
                © 2024 [Your Business Name]. All rights reserved.
            </div>
</div>
</footer>


    </>
  );
}
