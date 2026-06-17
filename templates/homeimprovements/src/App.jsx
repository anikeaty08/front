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



    const menuBtn = document.getElementById('mobile-menu-btn');
    const menuOverlay = document.getElementById('mobile-menu');
    const iconOpen = document.getElementById('menu-icon-open');
    const iconClose = document.getElementById('menu-icon-close');
    const links = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
      const isOpen = menuOverlay.classList.contains('mobile-menu-open');
      
      if (!isOpen) {
        menuOverlay.classList.remove('invisible', 'opacity-0', 'pointer-events-none');
        menuOverlay.classList.add('mobile-menu-open');
        iconOpen.classList.add('hidden');
        iconClose.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Lock scroll
      } else {
        menuOverlay.classList.remove('mobile-menu-open');
        menuOverlay.classList.add('invisible', 'opacity-0', 'pointer-events-none');
        iconOpen.classList.remove('hidden');
        iconClose.classList.add('hidden');
        document.body.style.overflow = ''; // Unlock scroll
      }
    }

    menuBtn.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked
    links.forEach(link => {
      link.addEventListener('click', toggleMenu);
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
      

<header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300">

<div className="hidden md:block text-white bg-red-500 pt-2 pb-2">
<div className="flex text-xs font-medium max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex items-center gap-6">
<span className="flex items-center gap-1.5 opacity-90">
<iconify-icon className="" icon="solar:map-point-linear"></iconify-icon>
            Serving Bergen, Hudson, Essex, Passaic, Morris &amp; Union County
          </span>
<span className="flex items-center gap-1.5 opacity-90">
<iconify-icon className="" icon="solar:clock-circle-linear"></iconify-icon>
            Mon – Fri: 8am – 5pm
          </span>
</div>
<div className="flex items-center gap-4">
<a className="transition-colors hover:text-red-300" href="tel:2019668319">201-966-8319</a>
<a className="transition-colors hover:text-red-300" href="mailto:info@usahomeimprove.com">info@usahomeimprove.com</a>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform bg-red-700 shadow-red-700/20">
<span className="font-bold text-lg tracking-tighter">USA</span>
</div>
<div className="leading-tight">
<span className="block font-bold text-slate-900 tracking-tight">Home Improvements</span>
<span className="block text-xs text-slate-500 font-medium tracking-wide uppercase">Licensed &amp; Insured</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="transition-colors hover:text-red-700" href="#services">Services</a>
<a className="transition-colors hover:text-red-700" href="#projects">Portfolio</a>
<a className="transition-colors hover:text-red-700" href="#process">Our Process</a>
<a className="transition-colors hover:text-red-700" href="#reviews">Reviews</a>
</nav>

<div className="hidden md:flex items-center gap-3">

<div className="relative group">
<button className="flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-800 uppercase tracking-wide">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
            NJ Area
          </button>
</div>
<a className="p-2.5 rounded-full text-slate-600 hover:bg-slate-100 transition-colors" href="tel:2019668319" title="Call Now">
<iconify-icon className="" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center h-10 px-5 text-sm font-semibold text-white transition-all rounded-full shadow-md bg-red-700 hover:bg-red-800 shadow-red-700/20" href="#contact">
          Request Quote
        </a>
</div>

<button className="md:hidden relative z-50 p-2 text-slate-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon-open" width="28"></iconify-icon>
<iconify-icon className="hidden" icon="solar:close-circle-linear" id="menu-icon-close" width="28"></iconify-icon>
</button>
</div>
</header>

<div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl opacity-0 pointer-events-none invisible mobile-menu-overlay flex flex-col pt-24 px-6 pb-6 md:hidden" id="mobile-menu">
<nav className="flex flex-col gap-2 text-lg font-medium text-slate-900">
<a className="mobile-link py-4 border-b border-slate-100 flex justify-between items-center" href="#services">
        Services <iconify-icon className="text-slate-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="mobile-link py-4 border-b border-slate-100 flex justify-between items-center" href="#projects">
        Portfolio <iconify-icon className="text-slate-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="mobile-link py-4 border-b border-slate-100 flex justify-between items-center" href="#reviews">
        Reviews <iconify-icon className="text-slate-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="mobile-link py-4 border-b border-slate-100 flex justify-between items-center" href="#contact">
        Contact <iconify-icon className="text-slate-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</nav>
<div className="mt-auto space-y-4">
<a className="flex items-center justify-center gap-2 w-full py-4 text-slate-700 bg-slate-100 rounded-xl font-semibold" href="tel:2019668319">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> Call (201) 966-8319
      </a>
<a className="flex items-center justify-center gap-2 w-full py-4 text-white rounded-xl font-semibold shadow-lg bg-red-700 shadow-red-700/20" href="#contact">
        Request Free Estimate
      </a>
</div>
</div>
<main className="">

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute inset-0 z-0">
<img alt="Luxury Home Remodeling" className="w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/689e8e843ae26479cc05490a/6a34cc50-1c4e-43fb-a444-ecf9568c2836/eeab2f4f5614220e78d253b80af42f4b.jpg?w=800&amp;q=80"/>
<div className="bg-neutral-950 opacity-60 mix-blend-multiply absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-2xl">
<div className="inline-flex uppercase text-xs font-semibold text-red-100 tracking-wider bg-red-500/20 border-red-400/30 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center">Accepting New Projects for 2026</div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight mb-6">
            Making your dream home a <span className="text-red-400">reality.</span>
</h1>
<p className="leading-relaxed text-base font-normal italic text-slate-50 max-w-lg mb-8">
            Expert remodeling, roofing, and new construction in Bergen County. We bring trust, precision, and 15+ years of experience to every project.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center transition-all hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white text-base font-semibold text-neutral-50 bg-red-500 rounded-full px-8 py-4" href="#contact">
              Get Free Estimate
            </a>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all bg-white/10 border border-white/20 backdrop-blur-sm rounded-full hover:bg-white/20" href="tel:2019668319">
<iconify-icon className="mr-2" icon="solar:phone-calling-linear"></iconify-icon>
              (201) 966-8319
            </a>
</div>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
<div className="flex items-center gap-3">
<div className="text-red-700 bg-red-100 rounded-lg px-2 py-2">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="text-sm">
<p className="font-semibold text-slate-900">Fully Licensed</p>
<p className="text-slate-500">New Jersey Certified</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="text-red-700 bg-red-100 rounded-lg px-2 py-2">
<iconify-icon className="" icon="solar:star-linear" width="24"></iconify-icon>
</div>
<div className="text-sm">
<p className="font-semibold text-slate-900">5-Star Rated</p>
<p className="text-slate-500">Google Reviews</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="text-red-700 bg-red-100 rounded-lg pt-2 pr-2 pb-2 pl-2">
<iconify-icon className="" icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<div className="text-sm">
<p className="font-semibold text-slate-900">Locally Owned</p>
<p className="text-slate-500">Based in Bergen Co.</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="text-red-700 bg-red-100 rounded-lg px-2 py-2">
<iconify-icon icon="solar:wallet-linear" width="24"></iconify-icon>
</div>
<div className="text-sm">
<p className="font-semibold text-slate-900">Free Quotes</p>
<p className="text-slate-500">Transparent Pricing</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 pt-20 pb-20" id="services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Complete Home Solutions</h2>
<p className="text-slate-600">From foundation to roof, we handle every aspect of your renovation with the care and quality you'd expect from a specialized medical practice.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:border-red-200">
<div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform bg-red-50 text-red-600">
<iconify-icon icon="solar:bath-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Kitchen &amp; Bath</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Transform interiors with style. Modern cabinetry, custom tiling, and functional layouts built to last.</p>
<a className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700" href="#contact">
              Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:border-red-200">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:home-add-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">New Construction</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Building from the ground up. Foundations, additions, and complete home builds with precision framing.</p>
<a className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700" href="#contact">
              Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:border-red-200 bg-white border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="flex group-hover:scale-110 transition-transform text-zinc-50 bg-slate-200 w-12 h-12 rounded-2xl mb-6 items-center justify-center">
<iconify-icon icon="solar:roof-linear" width="24"></iconify-icon>
<iconify-icon className="" height="24" icon="simple-icons:lighthouse" style={{color: 'rgb(255, 255, 255)'}} width="24"></iconify-icon></div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Roofing &amp; Exteriors</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Protect your investment. High-quality roof replacement, siding, windows, and decks for curb appeal.</p>
<a className="inline-flex items-center text-sm font-semibold text-slate-700 hover:text-slate-900" href="#contact">
              Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:border-red-200">
<div className="w-12 h-12 bg-yellow-50 text-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Electrical &amp; Plumbing</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Safety first. Licensed installation for lighting, outlets, piping, and fixtures up to modern codes.</p>
<a className="inline-flex items-center text-sm font-semibold text-yellow-600 hover:text-yellow-700" href="#contact">
              Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group rounded-3xl bg-white border border-slate-200 p-8 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:border-red-200">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:paint-roller-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Painting &amp; Finishing</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Professional finish makes the difference. Clean, long-lasting interior and exterior painting.</p>
<a className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700" href="#contact">
              Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="group hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:border-red-200 bg-white border-slate-200 border rounded-3xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="" height="24" icon="solar:trash-bin-trash-linear" style={{color: 'rgb(220, 38, 38)'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Demolition &amp; Cleanup</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6">Safe demolition and complete debris removal to prepare your property for what's next.</p>
<a className="inline-flex items-center text-sm font-semibold text-red-600 hover:text-red-700" href="#contact">
              Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="overflow-hidden md:py-32 text-white bg-red-200 pt-20 pb-20" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="md:text-4xl text-3xl font-semibold text-neutral-950 tracking-tight mb-4">Recent Transformations</h2>
<p className="text-neutral-950">See how we have helped families in New Jersey transform their houses into safer,
          modern homes.</p>
</div>
<a className="inline-flex items-center gap-2 transition-colors hover:text-red-400 text-sm font-medium text-neutral-800" href="#contact">
        Start Your Project <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="relative group rounded-2xl overflow-hidden aspect-[4/3]">
<img alt="Kitchen Remodel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.squarespace-cdn.com/content/v1/689e8e843ae26479cc05490a/6a34cc50-1c4e-43fb-a444-ecf9568c2836/eeab2f4f5614220e78d253b80af42f4b.jpg?format=1500w"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-xs font-bold uppercase tracking-wider mb-1 text-red-400">Interior</span>
<h3 className="text-lg font-semibold">Modern Kitchen Renovation</h3>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden aspect-[4/3]">
<img alt="Roofing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.squarespace-cdn.com/content/v1/689e8e843ae26479cc05490a/12413c90-7348-4ae2-b659-4f59c94e1cb8/21b73c399f71cdf7112d2075fe3a5981.jpg?format=1500w"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-xs font-bold uppercase tracking-wider mb-1 text-red-400">Exterior</span>
<h3 className="text-lg font-semibold">Roof Replacement</h3>
</div>
</div>

<div className="relative group rounded-2xl overflow-hidden aspect-[4/3]">
<img alt="New Construction" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.squarespace-cdn.com/content/v1/689e8e843ae26479cc05490a/bcd6f3c2-e477-4424-8575-d95f55a2ad66/a7b9bf4653012ee412faac6382d23cf5.jpg?format=1500w"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex flex-col bg-gradient-to-t from-black/80 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 justify-end">
<span className="text-xs font-bold uppercase tracking-wider mb-1 text-red-400">Construction</span>
<h3 className="text-lg font-semibold">New Framing &amp; Addition</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center gap-2 mb-8">
<div className="flex text-yellow-400 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm font-semibold text-slate-900">5.0 Rating on Google</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Great service and attention to detail. The team is really professional, efficient, and dedicated to delivering quality work. I highly recommend them for any construction job. Definitely a 5 star company!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600">GC</div>
<div>
<p className="text-sm font-semibold text-slate-900">Ghean Cordova</p>
<p className="text-xs text-slate-400">Homeowner</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Jose did an awesome job. New kitchen with insulation, electrical and framing, new bathroom with the same and plumbing. 100 yr old house. He is dependable and responsive."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full flex items-center justify-center font-bold bg-red-100 text-red-600">AM</div>
<div>
<p className="text-sm font-semibold text-slate-900">A Maiz</p>
<p className="text-xs text-slate-400">Kitchen &amp; Bath Client</p>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"USA Home Improvements built a new deck for my home... The framing, stairs, railings, and overall structure were done professionally. Highly recommended for deck construction in NJ."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">D</div>
<div className="">
<p className="text-sm font-semibold text-slate-900">Dusty</p>
<p className="text-xs text-slate-400">Deck Project</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

<div className="">
<span className="font-semibold tracking-wide text-sm uppercase mb-2 block text-red-600">Get Started</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-6">Request a Free Estimate</h2>
<p className="text-slate-600 mb-8 leading-relaxed">
              Ready to improve your home? Fill out the form, and our team will get back to you shortly to schedule a consultation.
            </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Service Areas</h4>
<p className="text-sm text-slate-500 mt-1">Bergen, Hudson, Essex, Passaic, Morris &amp; Union County, NJ</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Phone</h4>
<a className="text-sm hover:underline mt-1 block text-red-600" href="tel:2019668319">(201) 966-8319</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-600 shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Email</h4>
<a className="text-sm text-slate-500 mt-1 block hover:text-red-600" href="mailto:info@usahomeimprove.com">info@usahomeimprove.com</a>
</div>
</div>
</div>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 shadow-sm">
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you! We will contact you shortly.');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase">First Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:border-transparent outline-none transition-all placeholder:text-slate-400 focus:ring-red-500" placeholder="John" required="" type="text"/>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase">Last Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:border-transparent outline-none transition-all placeholder:text-slate-400 focus:ring-red-500" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase">Phone</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:border-transparent outline-none transition-all placeholder:text-slate-400 focus:ring-red-500" placeholder="(201) ..." required="" type="tel"/>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:border-transparent outline-none transition-all placeholder:text-slate-400 focus:ring-red-500" placeholder="john@example.com" required="" type="email"/>
</div>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase">Project Type</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:border-transparent outline-none transition-all appearance-none focus:ring-red-500">
<option>Remodeling &amp; Renovations</option>
<option>New Construction</option>
<option>Roofing &amp; Exteriors</option>
<option>Electrical &amp; Plumbing</option>
<option>Demolition &amp; Cleanup</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="">
<label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 focus:ring-2 focus:border-transparent outline-none transition-all placeholder:text-slate-400 focus:ring-red-500" placeholder="Tell us a bit about your project goals..." rows="3"></textarea>
</div>
<div className="pt-2">
<button className="hover:bg-slate-800 transition-all hover:shadow-xl font-semibold text-white bg-red-500 w-full rounded-lg py-4 shadow-lg" type="submit">
                  Request Free Quote
                </button>
<p className="text-center text-xs text-slate-400 mt-4">
                  Note: Connect this form to instant email automation.
                </p>
</div>
</form>
</div>
</div>
</div>
</section>
</main>
<footer className="bg-slate-900 text-white border-t border-slate-800 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="mb-4">
<span className="font-bold text-2xl tracking-tight">USA Home Improvements</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-6">
            Full service construction &amp; remodeling. High-quality craftsmanship and reliable service throughout Bergen County, NJ.
          </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="https://www.facebook.com/USAHomeImprovementCorp">
<iconify-icon icon="logos:facebook" width="20"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-white transition-colors" href="https://www.instagram.com/usahomeimprovementscorp/">
<iconify-icon icon="logos:instagram-icon" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-semibold mb-4 text-white">Services</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="transition-colors hover:text-red-400" href="#">Kitchen &amp; Bath</a></li>
<li><a className="transition-colors hover:text-red-400" href="#">New Construction</a></li>
<li><a className="transition-colors hover:text-red-400" href="#">Roofing</a></li>
<li><a className="transition-colors hover:text-red-400" href="#">Plumbing &amp; Electric</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 text-white">Company</h4>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="transition-colors hover:text-red-400" href="#projects">Portfolio</a></li>
<li><a className="transition-colors hover:text-red-400" href="#reviews">Reviews</a></li>
<li><a className="transition-colors hover:text-red-400" href="#process">About Us</a></li>
<li><a className="transition-colors hover:text-red-400" href="#contact">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-4 text-white">Contact</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-red-400" icon="solar:phone-linear"></iconify-icon>
<span>(201) 966-8319</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-red-400" icon="solar:letter-linear"></iconify-icon>
<span>info@usahomeimprove.com</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-red-400" icon="solar:clock-circle-linear"></iconify-icon>
<span>Mon-Fri: 8am - 5pm</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2025 USA Home Improvements. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="https://www.usahomeimprove.com/privacy-policy">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-xl flex items-center justify-center text-white transition-all hover:scale-110" href="https://wa.me/12019668319">
<iconify-icon icon="logos:whatsapp-icon" width="28"></iconify-icon>
</a>



    </>
  );
}
