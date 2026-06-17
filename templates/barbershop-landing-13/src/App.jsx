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
neutral: {
925: '#0f0f0f', // Custom dark
950: '#0a0a0a',
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/5 bg-neutral-950/50 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse group" href="#">
<span className="self-center text-xl font-semibold whitespace-nowrap text-white tracking-tighter group-hover:text-neutral-300 transition-colors">EMPIRE</span>
</a>

<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-neutral-400 rounded-lg md:hidden hover:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-600" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')" type="button">
<span className="sr-only">Open main menu</span>
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>

<div className="hidden w-full md:block md:w-auto">
<ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-neutral-800 rounded-lg bg-neutral-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
<li><a className="block py-2 px-3 text-white rounded md:bg-transparent md:p-0 hover:text-neutral-400 transition-colors text-sm" href="#home">Home</a></li>
<li><a className="block py-2 px-3 text-neutral-400 rounded hover:bg-neutral-800 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 transition-colors text-sm" href="#about">About</a></li>
<li className=""><a className="block py-2 px-3 text-neutral-400 rounded hover:bg-neutral-800 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 transition-colors text-sm" href="#services">Services</a></li>
<li className=""><a className="block py-2 px-3 text-neutral-400 rounded hover:bg-neutral-800 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 transition-colors text-sm" href="#blog">Journal</a></li>
<li><a className="block py-2 px-3 text-neutral-400 rounded hover:bg-neutral-800 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 transition-colors text-sm" href="#contact">Contact</a></li>
</ul>
</div>
<div className="hidden md:block">
<a className="text-white bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white hover:text-neutral-950 font-medium rounded text-sm px-5 py-2.5 focus:outline-none transition-all duration-300 tracking-tight" href="#book">Book Appointment</a>
</div>
</div>

<div className="hidden md:hidden w-full bg-neutral-900 border-b border-neutral-800" id="mobile-menu">
<ul className="flex flex-col p-4 font-medium">
<li><a className="block py-3 px-3 text-white border-b border-neutral-800" href="#home">Home</a></li>
<li><a className="block py-3 px-3 text-neutral-400 border-b border-neutral-800" href="#about">About</a></li>
<li><a className="block py-3 px-3 text-neutral-400 border-b border-neutral-800" href="#services">Services</a></li>
<li><a className="block py-3 px-3 text-neutral-400 border-b border-neutral-800" href="#blog">Journal</a></li>
<li><a className="block py-3 px-3 text-neutral-400 mb-4" href="#contact">Contact</a></li>
</ul>
</div>
</nav>

<section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-neutral-950" id="home">

<div className="spline-bg absolute inset-0 w-full h-full z-0">

<iframe frameborder="0" height="100%" src="https://my.spline.design/retrofuturismbganimation-OOfTQTYrMn6YWLRk15W2SLmM/" width="100%"></iframe>
</div>

<div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950 pointer-events-none"></div>
<div className="absolute inset-0 z-0 bg-neutral-950/20 pointer-events-none"></div>

<div className="relative z-10 max-w-7xl mx-auto px-6 text-center mt-16 pointer-events-none">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter mb-6 leading-[1.1] drop-shadow-2xl">
                Precision Cuts.
                <span className="text-neutral-400">Timeless Style.</span>
</h1>
<p className="mt-6 text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-lg">
                Experience the art of grooming at Empire Barbershop. We combine traditional craftsmanship with modern aesthetics for the man who values detail.
            </p>
<div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
<a className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded bg-white px-8 font-medium text-neutral-950 transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.02]" href="#book">
<span className="mr-2">Book an Appointment</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" height="18" icon="lucide:arrow-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex h-12 items-center justify-center rounded border border-white/20 bg-black/20 backdrop-blur-sm px-8 font-medium text-white transition-colors hover:bg-white/10" href="#services">
                    View Services
                </a>
</div>
</div>
</section>

<section className="md:px-6 w-full max-w-[1400px] mr-auto mb-24 ml-auto pr-4 pl-4 -mt-12 relative z-20">
<div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-xl bg-neutral-900 group border border-white/10 shadow-2xl">
<img alt="Barber cutting hair" className="group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 w-full h-full object-cover" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=3840&amp;q=80"/>
<div className="bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 max-w-lg">
<p className="text-xs font-medium uppercase tracking-widest text-white/60 mb-2">Atmosphere</p>
<h3 className="md:text-3xl text-2xl font-semibold text-white tracking-tight">Where craftsmanship meets comfort.</h3>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-neutral-925 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-4">
<div className="flex items-center text-amber-400 gap-1">
<iconify-icon className="fill-current" height="20" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon className="fill-current" height="20" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon className="fill-current" height="20" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon className="fill-current" height="20" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon className="fill-current" height="20" icon="lucide:star-half" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-white font-medium leading-none">4.6 / 5 Rating</span>
<span className="text-sm text-neutral-500 mt-1">Based on 62 reviews</span>
</div>
</div>
<div className="h-px w-full md:w-px md:h-12 bg-white/10"></div>
<div className="text-center md:text-left">
<p className="text-neutral-400 text-sm font-medium uppercase tracking-widest mb-3 md:mb-0">Trusted by the Tallaght Community</p>
</div>
<div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="text-lg font-bold tracking-tight text-white">BARBER<span className="font-light">LIFE</span></span>
<span className="text-lg font-bold tracking-tight text-white">DUBLIN<span className="font-light">CUTS</span></span>
<span className="text-lg font-bold tracking-tight text-white">MEN'S<span className="font-light">STYLE</span></span>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="about">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6">More than just a haircut.</h2>
<div className="space-y-4 text-neutral-400 leading-relaxed">
<p className="">
                        At Empire Barbershop, we believe that a haircut is the foundation of a man's confidence. Located in the heart of Tallaght, we have built a reputation for excellence, consistency, and a welcoming atmosphere.
                    </p>
<p className="">
                        Our barbers are masters of their craft, blending traditional techniques with modern styling. Whether you're here for a skin fade or a hot towel shave, our attention to detail is unwavering.
                    </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-6">
<div>
<h4 className="text-white font-medium mb-1">Expert Team</h4>
<p className="text-sm text-neutral-500">Qualified professionals with years of experience.</p>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Local Focus</h4>
<p className="text-sm text-neutral-500">Proudly serving Tallaght and Dublin D24.</p>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-lg overflow-hidden bg-neutral-900 border border-white/5">
<img alt="Barber Tools" className="hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1590540179852-2110a54f813a?w=1600&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-925 border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Our Services</h2>
<p className="text-neutral-400">Tailored grooming services designed to help you look your best.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-8 rounded-xl bg-neutral-950 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon height="24" icon="lucide:scissors" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Precision Haircut</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">A tailored cut to suit your face shape and style preference. Finished with styling product.</p>
<span className="text-sm font-medium text-white">From €20</span>
</div>

<div className="group p-8 rounded-xl bg-neutral-950 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon height="24" icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Skin Fade</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">Seamless gradient fade using foils for a smooth, sharp finish. The modern standard.</p>
<span className="text-sm font-medium text-white">From €25</span>
</div>

<div className="group p-8 rounded-xl bg-neutral-950 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon height="24" icon="lucide:shield" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Beard Sculpting</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">Shape, trim, and line up your beard. Includes beard oil application for health.</p>
<span className="text-sm font-medium text-white">From €15</span>
</div>

<div className="group p-8 rounded-xl bg-neutral-950 border border-white/5 hover:border-white/10 transition-colors">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon height="24" icon="lucide:thermometer" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Hot Towel Shave</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">Traditional straight razor shave with hot towels and premium shaving cream.</p>
<span className="text-sm font-medium text-white">From €30</span>
</div>

<div className="group p-8 rounded-xl bg-neutral-950 border border-white/5 hover:border-white/10 transition-colors md:col-span-2">
<div className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors">
<iconify-icon height="24" icon="lucide:crown" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">The Empire Package</h3>
<p className="text-neutral-400 text-sm leading-relaxed mb-4">The full experience. Precision haircut, hot towel shave, ear/nose waxing, and a drink of choice. Walk out a new man.</p>
<span className="text-sm font-medium text-white">From €50</span>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Price List</h2>
</div>
<div className="space-y-4">

<div className="flex items-end justify-between border-b border-neutral-800 pb-4">
<div>
<h4 className="text-lg font-medium text-white">Dry Cut</h4>
<p className="text-xs text-neutral-500 mt-1">Standard cut, no wash</p>
</div>
<span className="text-lg font-semibold text-white">€20</span>
</div>

<div className="flex items-end justify-between border-b border-neutral-800 pb-4">
<div>
<h4 className="text-lg font-medium text-white">Wash, Cut &amp; Style</h4>
<p className="text-xs text-neutral-500 mt-1">Includes consultation</p>
</div>
<span className="text-lg font-semibold text-white">€25</span>
</div>

<div className="flex items-end justify-between border-b border-neutral-800 pb-4">
<div>
<div className="flex items-center gap-2">
<h4 className="text-lg font-medium text-white">Skin Fade</h4>
<span className="px-2 py-0.5 rounded-full bg-neutral-800 text-[10px] text-white uppercase tracking-wider font-semibold">Popular</span>
</div>
<p className="text-xs text-neutral-500 mt-1">Zero or foil finish</p>
</div>
<span className="text-lg font-semibold text-white">€25</span>
</div>

<div className="flex items-end justify-between border-b border-neutral-800 pb-4">
<div>
<h4 className="text-lg font-medium text-white">Beard Trim &amp; Line Up</h4>
<p className="text-xs text-neutral-500 mt-1">Razor finish</p>
</div>
<span className="text-lg font-semibold text-white">€15</span>
</div>

<div className="flex items-end justify-between border-b border-neutral-800 pb-4">
<div>
<h4 className="text-lg font-medium text-white">Father &amp; Son</h4>
<p className="text-xs text-neutral-500 mt-1">Under 12s</p>
</div>
<span className="text-lg font-semibold text-white">€35</span>
</div>
</div>
<div className="mt-8 text-center">
<a className="text-sm text-neutral-400 hover:text-white underline decoration-neutral-700 underline-offset-4" href="#book">View full price list on booking page</a>
</div>
</section>

<section className="py-24 bg-neutral-925 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-8 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent border-t border-dashed border-neutral-700"></div>
<div className="text-center relative z-10">
<div className="w-16 h-16 mx-auto bg-neutral-950 border border-neutral-800 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
<iconify-icon height="24" icon="lucide:calendar-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">1. Book Appointment</h3>
<p className="text-sm text-neutral-500 px-4">Select your service and preferred time online in seconds.</p>
</div>
<div className="text-center relative z-10">
<div className="w-16 h-16 mx-auto bg-neutral-950 border border-neutral-800 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
<iconify-icon height="24" icon="lucide:user" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">2. Choose Your Style</h3>
<p className="text-sm text-neutral-500 px-4">Consult with our barbers to find the look that suits you.</p>
</div>
<div className="text-center relative z-10">
<div className="w-16 h-16 mx-auto bg-neutral-950 border border-neutral-800 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
<iconify-icon height="24" icon="lucide:check-circle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">3. Walk Out Sharp</h3>
<p className="text-sm text-neutral-500 px-4">Leave feeling confident, refreshed, and ready.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-12 text-center">Client Stories</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-neutral-900 p-8 rounded-xl relative">
<iconify-icon className="text-neutral-800 absolute top-6 right-6" height="40" icon="lucide:quote" width="40"></iconify-icon>
<div className="flex text-amber-400 mb-4 gap-0.5">
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 mb-6 text-sm leading-relaxed">"Best barber in Tallaght hands down. The fade is always clean and the lads are sound. Left feeling brand new."</p>
<div>
<p className="text-white font-medium text-sm">Conor O'Sullivan</p>
<p className="text-neutral-500 text-xs">Regular Client</p>
</div>
</div>

<div className="bg-neutral-900 p-8 rounded-xl relative">
<iconify-icon className="text-neutral-800 absolute top-6 right-6" height="40" icon="lucide:quote" width="40"></iconify-icon>
<div className="flex text-amber-400 mb-4 gap-0.5">
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 mb-6 text-sm leading-relaxed">"Great atmosphere and professional service. Booked online, no waiting around. The hot towel shave is top tier."</p>
<div>
<p className="text-white font-medium text-sm">Mark Byrne</p>
<p className="text-neutral-500 text-xs">Local Guide</p>
</div>
</div>

<div className="bg-neutral-900 p-8 rounded-xl relative">
<iconify-icon className="text-neutral-800 absolute top-6 right-6" height="40" icon="lucide:quote" width="40"></iconify-icon>
<div className="flex text-amber-400 mb-4 gap-0.5">
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon className="fill-current" height="16" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-neutral-300 mb-6 text-sm leading-relaxed">"Finally found a place that knows how to handle a beard properly. Attention to detail is unmatched in D24."</p>
<div>
<p className="text-white font-medium text-sm">David Murphy</p>
<p className="text-neutral-500 text-xs">First-time Customer</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-925 border-y border-white/5" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">The Journal</h2>
<p className="text-neutral-400 mt-2">Insights on grooming, style, and culture.</p>
</div>
<a className="text-sm text-white border-b border-white pb-1 hover:opacity-70 transition-opacity hidden md:block" href="#">Read all articles</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<article className="group cursor-pointer">
<div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden mb-4">
<img alt="Beard Care" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Grooming</span>
<h3 className="text-lg font-medium text-white mt-2 group-hover:text-neutral-300 transition-colors">5 Essential Tips for Beard Maintenance</h3>
</article>

<article className="group cursor-pointer">
<div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden mb-4">
<img alt="Hair Products" className="group-hover:scale-105 transition-transform duration-500 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?w=800&amp;q=80"/>
</div>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Products</span>
<h3 className="text-lg font-medium text-white mt-2 group-hover:text-neutral-300 transition-colors">Why Matte Clay is the New Gel</h3>
</article>

<article className="group cursor-pointer">
<div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden mb-4">
<img alt="Barber History" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Culture</span>
<h3 className="text-lg font-medium text-white mt-2 group-hover:text-neutral-300 transition-colors">The History of the Barber Pole</h3>
</article>

<article className="group cursor-pointer">
<div className="aspect-[4/3] bg-neutral-800 rounded-lg overflow-hidden mb-4">
<img alt="Face Shapes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">Style</span>
<h3 className="text-lg font-medium text-white mt-2 group-hover:text-neutral-300 transition-colors">Choosing the Right Cut for Your Face Shape</h3>
</article>
</div>
</div>
</section>


<footer className="bg-neutral-950 border-t border-white/10 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<a className="text-2xl font-semibold text-white tracking-tighter block mb-6" href="#">EMPIRE</a>
<p className="text-neutral-500 text-sm mb-6">Premium grooming for the modern gentleman in Tallaght.</p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="lucide:facebook" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="col-span-1">
<h4 className="text-white font-medium mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-400">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="lucide:map-pin" width="16"></iconify-icon>
<span>Unit 3 High St, Tallaght,Dublin, D24 PW71</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="lucide:phone" width="16"></iconify-icon>
<span>(01) 561 6665</span>
</li>
</ul>
</div>

<div className="col-span-1">
<h4 className="text-white font-medium mb-4">Opening Hours</h4>
<ul className="space-y-2 text-sm text-neutral-400">
<li className="flex justify-between">
<span>Mon - Fri</span>
<span className="text-white">09:00 - 18:30</span>
</li>
<li className="flex justify-between">
<span>Saturday</span>
<span className="text-white">09:00 - 18:00</span>
</li>
</ul>
</div>

<div className="col-span-1">
<h4 className="text-white font-medium mb-4">Ready for a cut?</h4>
<p className="text-xs text-neutral-500 mb-4">Book online to secure your slot.</p>
<a className="inline-flex w-full items-center justify-center rounded bg-white py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200" href="#book">
                        Book Appointment
                    </a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>© 2024 Empire Barbershop. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
