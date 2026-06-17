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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.15, // Trigger when 15% of the element is visible
                rootMargin: "0px 0px -50px 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Unobserve if you want the animation to happen only once
                        // observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-zinc-900 text-sm tracking-tighter font-semibold uppercase flex items-center gap-2" href="#">
<div className="w-3 h-3 bg-zinc-900"></div>
                Designlabs London
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-900" href="#">Home</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#services">Architecture</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#services">Interior Design</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#projects">Projects</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#about">About</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900" href="#consultation">
                    Book a Consultation
                </a>

<button className="md:hidden text-zinc-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_10%,var(--tw-gradient-stops))] from-zinc-50 via-white to-white opacity-60"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<h1 className="reveal reveal-up text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-zinc-900 mb-6 leading-[0.95]">
                        Architectural Design That Transforms the Way You Live.
                    </h1>
<p className="reveal reveal-up delay-100 text-lg md:text-xl text-zinc-500 mb-8 font-light leading-relaxed max-w-lg">
                        Planning, extensions, loft conversions &amp; interior design across London and the Home Counties.
                    </p>
<div className="reveal reveal-up delay-200 flex flex-col sm:flex-row items-start gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2" href="#consultation">
                            Book Consultation
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-all flex items-center justify-center gap-2" href="#projects">
                            View Projects
                        </a>
</div>
</div>

<div className="lg:w-1/2 w-full">
<div className="reveal reveal-scale delay-300 relative rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-100 group shadow-lg shadow-zinc-200/50">
<img alt="Modern Architectural Interior" className="object-cover w-full h-full opacity-90 scale-105 group-hover:scale-100 transition-transform duration-[2s]" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2653&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-lg border border-white/20">
<p className="text-xs font-medium text-zinc-900">Rear Extension &amp; Renovation</p>
<p className="text-[10px] text-zinc-500 uppercase tracking-wide">Chorleywood, WD3</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-100 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center md:text-left">
<div className="reveal reveal-fade delay-100 flex items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-zinc-900" icon="solar:calendar-date-linear" width="24"></iconify-icon>
<div className="text-left">
<p className="text-xs font-medium text-zinc-900 uppercase tracking-wide">Established</p>
<p className="text-sm text-zinc-500">Since 2010</p>
</div>
</div>
<div className="reveal reveal-fade delay-200 flex items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-zinc-900" icon="solar:star-circle-linear" width="24"></iconify-icon>
<div className="text-left">
<p className="text-xs font-medium text-zinc-900 uppercase tracking-wide">Service</p>
<p className="text-sm text-zinc-500">5-Star Rated</p>
</div>
</div>
<div className="reveal reveal-fade delay-300 flex items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-zinc-900" icon="solar:diploma-verified-linear" width="24"></iconify-icon>
<div className="text-left">
<p className="text-xs font-medium text-zinc-900 uppercase tracking-wide">Expertise</p>
<p className="text-sm text-zinc-500">Planning Specialists</p>
</div>
</div>
<div className="reveal reveal-fade delay-400 flex items-center gap-3 justify-center md:justify-start">
<iconify-icon className="text-zinc-900" icon="solar:map-point-linear" width="24"></iconify-icon>
<div className="text-left">
<p className="text-xs font-medium text-zinc-900 uppercase tracking-wide">Coverage</p>
<p className="text-sm text-zinc-500">London &amp; Home Counties</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 flex justify-between items-end reveal reveal-up">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900">Our Expertise</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal reveal-up delay-100 p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors group flex flex-col h-full">
<div className="w-12 h-12 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-zinc-900" icon="solar:ruler-pen-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-4">Architectural Design</h3>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-300 mt-0.5 min-w-[16px]" icon="solar:arrow-right-linear"></iconify-icon>
                            Extensions &amp; Renovations
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-300 mt-0.5 min-w-[16px]" icon="solar:arrow-right-linear"></iconify-icon>
                            Loft Conversions
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-300 mt-0.5 min-w-[16px]" icon="solar:arrow-right-linear"></iconify-icon>
                            New Build Developments
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-300 mt-0.5 min-w-[16px]" icon="solar:arrow-right-linear"></iconify-icon>
                            Planning Drawings
                        </li>
</ul>
</div>

<div className="reveal reveal-up delay-200 p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors group flex flex-col h-full">
<div className="w-12 h-12 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-zinc-900" icon="solar:armchair-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-4">Interior Design</h3>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-300 mt-0.5 min-w-[16px]" icon="solar:arrow-right-linear"></iconify-icon>
                            Space Optimisation
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-300 mt-0.5 min-w-[16px]" icon="solar:arrow-right-linear"></iconify-icon>
                            Kitchen &amp; Bathroom Layouts
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-300 mt-0.5 min-w-[16px]" icon="solar:arrow-right-linear"></iconify-icon>
                            Lighting &amp; Electrical Plans
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-300 mt-0.5 min-w-[16px]" icon="solar:arrow-right-linear"></iconify-icon>
                            Bespoke Joinery Design
                        </li>
</ul>
</div>

<div className="reveal reveal-up delay-300 p-8 rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-colors group flex flex-col h-full">
<div className="w-12 h-12 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:bg-zinc-100 transition-colors">
<iconify-icon className="text-zinc-900" icon="solar:document-add-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-zinc-900 mb-4">Planning &amp; Technical</h3>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-300 mt-0.5 min-w-[16px]" icon="solar:arrow-right-linear"></iconify-icon>
                            Planning Applications
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-300 mt-0.5 min-w-[16px]" icon="solar:arrow-right-linear"></iconify-icon>
                            Building Regulations
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-300 mt-0.5 min-w-[16px]" icon="solar:arrow-right-linear"></iconify-icon>
                            Construction Drawings
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-300 mt-0.5 min-w-[16px]" icon="solar:arrow-right-linear"></iconify-icon>
                            Permitted Development
                        </li>
</ul>
</div>
</div>
<div className="mt-12 text-center reveal reveal-fade delay-300">
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#services">
                    Explore Our Services
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-100" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12 reveal reveal-up">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-2">Featured Projects</h2>
<p className="text-zinc-500">Transformations across London &amp; Home Counties.</p>
</div>
<a className="hidden md:flex text-sm font-medium text-zinc-900 items-center gap-1 hover:gap-2 transition-all" href="#">
                    View all projects
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-12">

<div className="group cursor-pointer">
<div className="reveal reveal-scale delay-100 rounded-xl overflow-hidden mb-5 bg-zinc-200 aspect-[16/9] relative">
<img alt="Rear Extension" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
</div>
<div className="reveal reveal-up delay-200">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Open Plan Rear Extension</h3>
<span className="text-[10px] uppercase tracking-wide border border-zinc-200 rounded px-2 py-0.5 text-zinc-500 bg-white">Hertfordshire</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">
                            Increased usable space by 38% while securing full planning approval in a conservation area.
                        </p>
</div>
</div>

<div className="group cursor-pointer">
<div className="reveal reveal-scale delay-200 rounded-xl overflow-hidden mb-5 bg-zinc-200 aspect-[16/9] relative">
<img alt="Loft Conversion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
</div>
<div className="reveal reveal-up delay-300">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Luxury Loft Conversion</h3>
<span className="text-[10px] uppercase tracking-wide border border-zinc-200 rounded px-2 py-0.5 text-zinc-500 bg-white">North London</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">
                            Added a master suite and ensuite bath, maximizing property value under permitted development rights.
                        </p>
</div>
</div>

<div className="group cursor-pointer">
<div className="reveal reveal-scale delay-100 rounded-xl overflow-hidden mb-5 bg-zinc-200 aspect-[16/9] relative">
<img alt="Kitchen Renovation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
</div>
<div className="reveal reveal-up delay-200">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Complete Home Refurbishment</h3>
<span className="text-[10px] uppercase tracking-wide border border-zinc-200 rounded px-2 py-0.5 text-zinc-500 bg-white">Rickmansworth</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">
                            Full interior reconfiguration including structural alterations and bespoke joinery design.
                        </p>
</div>
</div>

<div className="group cursor-pointer">
<div className="reveal reveal-scale delay-200 rounded-xl overflow-hidden mb-5 bg-zinc-200 aspect-[16/9] relative">
<img alt="New Build" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
</div>
<div className="reveal reveal-up delay-300">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-medium text-zinc-900 tracking-tight">Double Storey Extension</h3>
<span className="text-[10px] uppercase tracking-wide border border-zinc-200 rounded px-2 py-0.5 text-zinc-500 bg-white">Buckinghamshire</span>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">
                            Seamless integration of new living areas with existing structure, handling complex party wall agreements.
                        </p>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden reveal reveal-fade">
<a className="text-sm font-medium text-zinc-900 inline-flex items-center gap-1" href="#">
                    View all projects
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl reveal reveal-up">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Our Process</h2>
<p className="text-zinc-500">A clear, structured pathway from concept to construction.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-zinc-100 -z-10 reveal reveal-scale duration-[1500ms]"></div>

<div className="reveal reveal-left delay-100 relative bg-white pt-4 md:pt-0">
<div className="w-8 h-8 rounded-full bg-zinc-900 text-white flex items-center justify-center text-xs font-medium mb-6 ring-8 ring-white">01</div>
<h4 className="text-base font-medium text-zinc-900 mb-2">Initial Consultation</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                        We visit your property to discuss your vision, budget, and feasibility, identifying planning constraints early.
                    </p>
</div>

<div className="reveal reveal-left delay-200 relative bg-white pt-4 md:pt-0">
<div className="w-8 h-8 rounded-full bg-white border border-zinc-200 text-zinc-900 flex items-center justify-center text-xs font-medium mb-6 ring-8 ring-white">02</div>
<h4 className="text-base font-medium text-zinc-900 mb-2">Concept Design</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Development of architectural layouts and 3D visualizations to explore space potential and design direction.
                    </p>
</div>

<div className="reveal reveal-left delay-300 relative bg-white pt-4 md:pt-0">
<div className="w-8 h-8 rounded-full bg-white border border-zinc-200 text-zinc-900 flex items-center justify-center text-xs font-medium mb-6 ring-8 ring-white">03</div>
<h4 className="text-base font-medium text-zinc-900 mb-2">Planning &amp; Technical</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Submission of planning applications and production of detailed building regulations drawings for compliance.
                    </p>
</div>

<div className="reveal reveal-left delay-400 relative bg-white pt-4 md:pt-0">
<div className="w-8 h-8 rounded-full bg-white border border-zinc-200 text-zinc-900 flex items-center justify-center text-xs font-medium mb-6 ring-8 ring-white">04</div>
<h4 className="text-base font-medium text-zinc-900 mb-2">Build Support</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Coordination with contractors and structural engineers to ensure the build matches the design intent.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-1/2 sticky top-24 reveal reveal-up">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-tight">Design That Adds More Than Just Space.</h2>
<p className="text-zinc-400 text-lg font-light leading-relaxed mb-8">
                        We don't just draw plans; we are your strategic partner. Our approach blends architectural integrity with functional interior design to maximise both lifestyle improvement and property value.
                    </p>
<a className="inline-flex text-sm font-medium text-white border-b border-white pb-0.5 hover:text-zinc-300 hover:border-zinc-300 transition-colors" href="#about">
                        Learn more about our approach
                    </a>
</div>
<div className="lg:w-1/2 grid gap-8">
<div className="reveal reveal-left delay-100 p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
<iconify-icon className="text-white mb-4" icon="solar:city-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Planning Expertise</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Deep knowledge of London borough planning policies and conservation area constraints to maximize approval chances.
                        </p>
</div>
<div className="reveal reveal-left delay-200 p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
<iconify-icon className="text-white mb-4" icon="solar:ruler-cross-pen-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Design-Led Practicality</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            We balance aesthetic ambition with construction reality, ensuring designs are buildable and budget-conscious.
                        </p>
</div>
<div className="reveal reveal-left delay-300 p-6 rounded-xl bg-zinc-800/50 border border-zinc-700/50">
<iconify-icon className="text-white mb-4" icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Client-First Coordination</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            We act as the central pivot between you, engineers, and contractors, removing the stress of coordination.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="reveal reveal-up text-2xl font-medium tracking-tight text-zinc-900 mb-12 text-center">Trusted by homeowners</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal reveal-up delay-100 bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
<div className="flex text-zinc-900 gap-0.5 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<blockquote className="text-sm text-zinc-600 leading-relaxed mb-6">
                        "Designlabs delivered a practical design solution that completely transformed our home. The team was professional and handled the complex planning process effortlessly."
                    </blockquote>
<div>
<p className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">Residential Client</p>
<p className="text-xs text-zinc-500">Rickmansworth, Extension Project</p>
</div>
</div>

<div className="reveal reveal-up delay-200 bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
<div className="flex text-zinc-900 gap-0.5 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<blockquote className="text-sm text-zinc-600 leading-relaxed mb-6">
                        "Their attention to detail and ability to visualize the potential of our loft was incredible. We achieved more space than we thought possible."
                    </blockquote>
<div>
<p className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">Private Client</p>
<p className="text-xs text-zinc-500">North London, Loft Conversion</p>
</div>
</div>

<div className="reveal reveal-up delay-300 bg-zinc-50 p-8 rounded-2xl border border-zinc-100">
<div className="flex text-zinc-900 gap-0.5 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<blockquote className="text-sm text-zinc-600 leading-relaxed mb-6">
                        "Professional from start to finish. They managed the structural engineers and party wall surveyors, making the whole build stress-free."
                    </blockquote>
<div>
<p className="text-xs font-semibold text-zinc-900 uppercase tracking-wide">Private Client</p>
<p className="text-xs text-zinc-500">Watford, Renovation</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="reveal reveal-up max-w-3xl mx-auto text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-100 mb-6">
<span className="font-semibold text-zinc-900 text-lg">SM</span>
</div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-zinc-900 mb-4">Lead Director</h2>
<p className="text-zinc-500 leading-relaxed mb-8">
                    With over a decade of experience in residential architecture, Setu Manani founded Designlabs London in 2010 to bridge the gap between architectural concept and liveable reality. We believe every home has unlocked potential waiting to be realized.
                </p>
<a className="text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#contact">
                    Learn more about our approach →
                </a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-100" id="consultation">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="reveal reveal-up text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 mb-6">Planning a Home Extension or Renovation?</h2>
<p className="reveal reveal-up delay-100 text-lg text-zinc-500 mb-10 max-w-2xl mx-auto font-light">
                Let's explore how we can unlock the full potential of your property with a structured design consultation.
            </p>
<div className="reveal reveal-up delay-200 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 shadow-lg shadow-zinc-200" href="#contact">
                    Book Your Consultation
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-zinc-200 text-zinc-900 text-sm font-medium rounded-lg hover:bg-zinc-50 transition-all flex items-center justify-center gap-2" href="#">
                    Download Project Guide
                </a>
</div>
</div>
</section>

<section className="py-16 bg-white">
<div className="reveal reveal-fade max-w-7xl mx-auto px-6 border-b border-zinc-100 pb-12">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h3 className="text-lg font-medium text-zinc-900 mb-1">Service Areas</h3>
<p className="text-sm text-zinc-500">Serving clients across London &amp; The Home Counties.</p>
</div>
<div className="flex flex-wrap gap-4 md:gap-8 justify-center">
<span className="px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100 text-xs font-medium text-zinc-600">London</span>
<span className="px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100 text-xs font-medium text-zinc-600">Hertfordshire</span>
<span className="px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100 text-xs font-medium text-zinc-600">Buckinghamshire</span>
<span className="px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100 text-xs font-medium text-zinc-600">Surrey</span>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

<div className="reveal reveal-fade col-span-2 md:col-span-1">
<a className="text-zinc-900 text-sm tracking-tighter font-semibold uppercase block mb-6" href="#">
                        Designlabs London
                    </a>
<p className="text-xs text-zinc-400 max-w-xs mb-6">
                        Established design consultancy and architecture practice enhancing property value across London and the Home Counties.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#"><iconify-icon icon="solar:global-linear" width="20"></iconify-icon></a>
</div>
</div>

<div className="reveal reveal-fade delay-100">
<h4 className="font-medium text-zinc-900 text-sm mb-4">Services</h4>
<ul className="space-y-3 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Architectural Design</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Interior Design</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Planning Applications</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Project Management</a></li>
</ul>
</div>

<div className="reveal reveal-fade delay-200">
<h4 className="font-medium text-zinc-900 text-sm mb-4">Contact</h4>
<ul className="space-y-3 text-xs text-zinc-500">
<li>7 Lawford Avenue, Chorleywood</li>
<li>Rickmansworth WD3 5JU</li>
<li className="pt-2"><a className="hover:text-zinc-900 transition-colors" href="tel:+447888831314">+44 7888 831314</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="mailto:info@designlabslondon.com">info@designlabslondon.com</a></li>
</ul>
</div>

<div className="reveal reveal-fade delay-300">
<h4 className="font-medium text-zinc-900 text-sm mb-4">Legal</h4>
<ul className="space-y-3 text-xs text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
<li><span className="text-zinc-400">Reg No. 07447834</span></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center">
<p className="text-[10px] text-zinc-400">
                    © 2024 Designlabs London Ltd. All rights reserved. Est. 2010.
                </p>
</div>
</div>
</footer>



    </>
  );
}
