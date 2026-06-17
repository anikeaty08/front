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



        // Simple logic to handle accordion and image switching
        function toggleService(index) {
            for (let i = 1; i <= 3; i++) {
                const isSelected = i === index;
                
                // Desktop Images
                const desktopImg = document.getElementById(`service-desktop-img-${i}`);
                if (desktopImg) desktopImg.style.opacity = isSelected ? '1' : '0';
                
                // Content Expansion
                const content = document.getElementById(`service-content-${i}`);
                if (content) content.className = isSelected 
                    ? 'grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out' 
                    : 'grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out';
                
                // Inner Content Visibility & Padding
                const inner = document.getElementById(`service-inner-${i}`);
                if (inner) {
                    inner.className = isSelected
                        ? 'pt-2 pb-4 opacity-100 transition-opacity duration-500 delay-100'
                        : 'pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100';
                }

                // Text & Icon Styles
                const title = document.getElementById(`service-title-${i}`);
                if (title) {
                    title.className = isSelected
                        ? 'text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 transition-colors mb-4'
                        : 'text-2xl md:text-3xl font-medium tracking-tight text-neutral-500 transition-colors mb-4';
                }
                
                const num = document.getElementById(`service-num-${i}`);
                if (num) {
                    num.className = isSelected
                        ? 'text-xl font-mono text-neutral-900 transition-colors pt-2'
                        : 'text-xl font-mono text-neutral-400 transition-colors pt-2';
                }

                const icon = document.getElementById(`service-icon-${i}`);
                if (icon) {
                    icon.className = isSelected
                        ? 'w-10 h-10 rounded-full border border-neutral-900 bg-neutral-900 text-white flex items-center justify-center transition-all ml-4 shrink-0'
                        : 'w-10 h-10 rounded-full border border-neutral-200 bg-transparent text-neutral-400 flex items-center justify-center transition-all ml-4 shrink-0';
                    
                    const svg = icon.querySelector('svg');
                    if (svg) {
                        svg.setAttribute('class', isSelected 
                            ? 'transition-transform duration-300 rotate-0' 
                            : 'transition-transform duration-300 -rotate-45');
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
      

<nav className="fixed top-0 w-full z-50 glass-nav border-b border-neutral-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-lg font-semibold tracking-widest uppercase" href="#">Matos.</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-neutral-500">
<a className="transition-colors hover:text-neutral-900" href="#commitments">Philosophy</a>
<a className="transition-colors hover:text-neutral-900" href="#services">Services</a>
<a className="transition-colors hover:text-neutral-900" href="#process">Process</a>
</div>
<a className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-medium tracking-wide transition-colors group bg-neutral-900 text-neutral-50 hover:bg-neutral-800" href="#contact">
                Start Project
                <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<button className="md:hidden p-2 text-neutral-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<header className="relative pt-24 pb-12 lg:pt-32 lg:pb-12 overflow-hidden bg-white">
<div className="max-w-[1440px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

<div className="lg:col-span-7 flex flex-col gap-10 lg:gap-14">

<div className="space-y-2 lg:space-y-4">
<h1 className="font-oswald text-6xl md:text-7xl lg:text-[7rem] font-medium leading-[0.9] tracking-tighter uppercase text-neutral-900">
                        Your Ideal Home
                    </h1>
<div className="flex items-center gap-4 lg:gap-6 flex-wrap">
<div className="h-14 md:h-20 w-32 md:w-56 rounded-full overflow-hidden relative shrink-0 border shadow-sm border-neutral-100">
<img alt="Modern Home Detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-27b90452ec39?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h1 className="font-oswald text-6xl md:text-7xl lg:text-[7rem] font-medium leading-[0.9] tracking-tighter uppercase text-neutral-900">
                            — A Reality
                        </h1>
</div>
</div>

<div className="flex flex-col md:flex-row items-start md:items-center gap-8 lg:gap-12 mt-2">
<p className="text-neutral-500 text-base md:text-lg max-w-sm font-light leading-relaxed">
                        We will help you choose a property that combines modern style, impeccable comfort, and the highest investment appeal.
                    </p>
<a className="inline-flex items-center justify-center h-14 px-10 rounded-full text-sm font-medium tracking-wider uppercase transition-all shrink-0 shadow-lg bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/20" href="#contact">
                        Find Your Home
                    </a>
</div>

<div className="flex flex-wrap gap-x-12 gap-y-6 pt-4">
<div className="flex items-center gap-3">
<span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">500+</span>
<span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium">Families found a home</span>
</div>
<div className="flex items-center gap-3">
<span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">200+</span>
<span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium">Homes sold across Dallas</span>
</div>
<div className="flex items-center gap-3">
<span className="font-oswald text-4xl md:text-5xl tracking-tight text-neutral-800">95%</span>
<span className="text-xs text-neutral-500 leading-tight max-w-[80px] font-medium">Clients return</span>
</div>
</div>

<div className="hidden md:block relative h-64 w-full rounded-[2rem] overflow-hidden mt-auto group shadow-sm border border-neutral-100">
<img alt="Modern Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute right-6 bottom-6 flex flex-col gap-2 z-10">
<button className="w-10 h-10 rounded-full backdrop-blur border flex items-center justify-center transition-colors shadow-sm bg-white/90 border-white/20 hover:bg-white text-neutral-900">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m18 15-6-6-6 6"></path></svg>
</button>
<button className="w-10 h-10 rounded-full backdrop-blur border flex items-center justify-center transition-colors shadow-sm bg-white/90 border-white/20 hover:bg-white text-neutral-900">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent pointer-events-none from-neutral-900/10"></div>
</div>
</div>

<div className="lg:col-span-5 relative h-[600px] lg:h-auto min-h-[600px] rounded-[2rem] overflow-hidden shadow-xl group bg-neutral-100">
<img alt="Luxury Villa" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-6 right-6 flex gap-3 z-20">
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md bg-white hover:bg-neutral-100 text-neutral-900" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md bg-white hover:bg-neutral-100 text-neutral-900" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-md bg-white hover:bg-neutral-100 text-neutral-900" href="#">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</a>
</div>

<div className="absolute top-6 left-6 max-w-[220px] rounded-2xl p-3 shadow-xl z-20 bg-white">
<div className="h-24 rounded-xl overflow-hidden mb-3 relative">
<img alt="Property Preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-[10px] font-medium mb-3 leading-snug text-neutral-600">
                        Within 7 days, we will find a property that fully matches your budget and preferences.
                    </p>
<button className="w-8 h-8 rounded-full flex items-center justify-center ml-auto transition-colors bg-neutral-900 text-white hover:bg-neutral-800">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</button>
</div>

<div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t to-transparent flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 z-20 from-black/80 via-black/40">
<p className="text-sm max-w-xs font-light leading-relaxed drop-shadow-sm text-white/90">
                        With us, buying a home becomes simple, safe, and enjoyable, as we guide you through every step — from selecting the property to completing the paperwork.
                    </p>
<button className="px-8 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-lg bg-white text-neutral-900 hover:bg-neutral-100">
                        Learn More
                    </button>
</div>
</div>
</div>
</div>
</header>

<div className="w-full h-96 md:h-[600px] relative overflow-hidden bg-neutral-200">
<img alt="Minimalist Interior" className="w-full h-full object-cover grayscale opacity-90" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-neutral-900/10"></div>
</div>

<section className="py-24 px-6 bg-white" id="commitments">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">The Matos Standard</h2>
<p className="text-neutral-500 max-w-md">Our reputation is built on what we do when no one is watching.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border rounded-2xl overflow-hidden shadow-sm bg-neutral-200 border-neutral-200">

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Total Accountability</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        We take full responsibility for the project. No finger-pointing. If a challenge arises, we solve it.
                    </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-square" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Radical Transparency</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Clear communication. Real timelines. No hidden costs. You remain informed at every phase.
                    </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:home" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Respect for Property</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        We treat your home as if it were our own. Clean worksites and protection for your belongings are mandatory.
                    </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:ruler" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Zm-6.8-2.8l2-2m-5-1l2-2m-5-1l2-2m7 11l2-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Precision Execution</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        From framing to the final paint stroke, our craftsmanship is measured in millimeters, not inches.
                    </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Respected Timelines</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        We respect your time. We set realistic schedules and work diligently to meet them without compromising quality.
                    </p>
</div>

<div className="p-8 group transition-colors bg-white hover:bg-neutral-50">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-6 bg-neutral-100 text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:heart-handshake" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676a.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052a2.12 2.12 0 0 0-.004-3a2.124 2.124 0 1 0 3-3a2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium tracking-tight mb-2">Long-term Support</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Our relationship doesn't end when the dust settles. We stand behind our work with solid guarantees.
                    </p>
</div>
</div>
</div>
</section>

<section className="border-t pt-24 pr-6 pb-24 pl-6 bg-white border-neutral-200" id="services">
<div className="max-w-7xl mx-auto">
<span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase block mb-20">Expertise</span>
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative gap-x-12 gap-y-12 items-start">

<div className="w-full lg:w-5/12 lg:sticky lg:top-32 h-[300px] lg:h-[500px] rounded-2xl overflow-hidden shadow-sm order-2 lg:order-1 hidden lg:block bg-neutral-100">
<div className="relative w-full h-full">

<img alt="Interior Transformations" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100 z-10" id="service-desktop-img-1" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>

<img alt="Exterior Improvements" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 z-10" id="service-desktop-img-2" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>

<img alt="Design &amp; Systems" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-0 z-10" id="service-desktop-img-3" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>

<div className="absolute inset-0 bg-gradient-to-t to-transparent z-20 pointer-events-none from-neutral-900/20"></div>
</div>
</div>

<div className="w-full lg:w-7/12 flex flex-col order-1 lg:order-2">

<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(1)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-900" id="service-num-1">01</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight transition-colors mb-4 text-neutral-900" id="service-title-1">Interior Transformations</h3>
<div className="w-10 h-10 rounded-full border flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-900 bg-neutral-900 text-white" id="service-icon-1">
<svg className="transition-transform duration-300 rotate-0" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-1">
<div className="overflow-hidden">
<div className="pt-2 pb-4 opacity-100 transition-opacity duration-500 delay-100" id="service-inner-1">

<div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mb-6 relative bg-neutral-100">
<img alt="Interior Transformations" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
</div>
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                                            Complete remodels of kitchens, bathrooms, and living spaces. We handle structural changes, high-end finishes, and lighting design to modernize your interior environment.
                                        </p>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Kitchens &amp; Baths
                                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Flooring &amp; Tile
                                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Custom Cabinetry
                                            </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="cursor-pointer border-b pt-8 pb-8 border-neutral-200" onclick="toggleService(2)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-400" id="service-num-2">02</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="md:text-3xl transition-colors text-2xl font-medium text-neutral-500 tracking-tight mb-4" id="service-title-2">Exterior Improvements</h3>
<div className="w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-200 text-neutral-400" id="service-icon-2">
<svg className="transition-transform duration-300 -rotate-45" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-2">
<div className="overflow-hidden">
<div className="pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100" id="service-inner-2">

<div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mb-6 relative bg-neutral-100">
<img alt="Exterior Improvements" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
</div>
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                                            Enhancing curb appeal and structural integrity. From siding and roofing to custom patios and outdoor living areas that withstand the Texas climate.
                                        </p>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Siding &amp; Roofing
                                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Patios &amp; Decks
                                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Window Replacement
                                            </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-b py-8 cursor-pointer border-neutral-200" onclick="toggleService(3)">
<div className="flex items-start gap-6 md:gap-12">
<span className="text-xl font-mono transition-colors pt-2 text-neutral-400" id="service-num-3">03</span>
<div className="flex-1 w-full">
<div className="flex justify-between items-start w-full">
<h3 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-500 transition-colors mb-4" id="service-title-3">Design &amp; Systems</h3>
<div className="w-10 h-10 rounded-full border bg-transparent flex items-center justify-center transition-all ml-4 shrink-0 border-neutral-200 text-neutral-400" id="service-icon-3">
<svg className="transition-transform duration-300 -rotate-45" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</div>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out" id="service-content-3">
<div className="overflow-hidden">
<div className="pt-0 pb-0 opacity-0 transition-opacity duration-500 delay-100" id="service-inner-3">

<div className="lg:hidden w-full h-64 rounded-xl overflow-hidden mb-6 relative bg-neutral-100">
<img alt="Design &amp; Systems" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
<p className="text-neutral-500 leading-relaxed max-w-lg mb-6 text-base">
                                            The unseen backbone of your home. We manage architectural planning, permitting, and the modernization of electrical, plumbing, and HVAC systems.
                                        </p>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> 3D Rendering
                                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Electrical &amp; Plumbing
                                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-500">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-400"></span> Permitting
                                            </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="py-24 px-6 bg-neutral-900 text-white" id="process">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-2">The Process</h2>
<p className="text-neutral-400">Stress-free execution from concept to completion.</p>
</div>
<a className="text-sm border-b pb-1 transition-colors border-neutral-700 hover:border-white" href="#contact">Start your journey</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-600">01</span>
<h3 className="text-lg font-medium mb-3 text-white">Consultation</h3>
<p className="text-sm leading-relaxed text-neutral-400">We meet to discuss your vision, budget, and timeline. We provide a clear, detailed estimate.</p>
</div>
<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-600">02</span>
<h3 className="text-lg font-medium mb-3 text-white">Planning</h3>
<p className="text-sm leading-relaxed text-neutral-400">Design, material selection, and permitting. We handle the paperwork so you don't have to.</p>
</div>
<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-600">03</span>
<h3 className="text-lg font-medium mb-3 text-white">Construction</h3>
<p className="text-sm leading-relaxed text-neutral-400">Our team executes with precision, maintaining a clean site and providing weekly updates.</p>
</div>
<div className="border-l pl-6 relative border-neutral-800">
<span className="font-mono text-xs mb-4 block text-neutral-600">04</span>
<h3 className="text-lg font-medium mb-3 text-white">Delivery</h3>
<p className="text-sm leading-relaxed text-neutral-400">Final walkthrough and handover. We ensure every detail meets the Matos Standard.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b bg-white border-neutral-200">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<div className="w-full aspect-[4/3] rounded-2xl overflow-hidden relative bg-neutral-100">
<img alt="Construction Detail" className="w-full h-full object-cover grayscale opacity-80 hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=2787&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 backdrop-blur px-4 py-2 rounded-md border bg-white/90 border-white/20">
<p className="text-xs font-medium text-neutral-900">Dallas, Texas</p>
</div>
</div>
</div>
<div className="lg:w-1/2">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter mb-6 text-neutral-900">
                    A legacy of  <span className="text-neutral-400">honest work.</span>
</h2>
<div className="space-y-6 text-sm md:text-base leading-relaxed max-w-lg text-neutral-600">
<p>
                        In an industry often plagued by uncertainty, Matos Home Improvements stands as a pillar of reliability. We believe that how we treat our clients is just as important as the quality of our construction.
                    </p>
<p>
                        We are a Dallas-based company understanding the specific needs of local homeowners, property managers, and businesses. When you hire Matos, you hire peace of mind.
                    </p>
</div>
<div className="mt-10 flex gap-4">
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Licensed
                     </div>
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Insured
                     </div>
<div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-900">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:check-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg> Bonded
                     </div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center bg-neutral-50" id="contact">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6 text-neutral-900">Ready to build something lasting?</h2>
<p className="text-neutral-500 text-lg mb-10 max-w-lg mx-auto">Schedule a consultation with our team. We’ll discuss your project, budget, and how we can bring your vision to life.</p>
<form className="max-w-md mx-auto space-y-4 text-left">
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full border rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:border-transparent transition-all placeholder:text-neutral-400 bg-white border-neutral-300" id="email" placeholder="Your email address" type="email"/>
</div>
<button className="w-full font-medium rounded-md px-4 py-3 text-sm transition-colors flex justify-center items-center gap-2 bg-neutral-900 text-white hover:bg-neutral-800" type="button">
                    Request Consultation
                </button>
<p className="text-xs text-center mt-4 text-neutral-400">No spam. No pressure. Just professional advice.</p>
</form>
</div>
</section>

<footer className="border-t pt-16 pb-8 px-6 bg-white border-neutral-200">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-lg font-semibold tracking-widest uppercase block mb-6" href="#">Matos.</a>
<p className="text-neutral-500 text-sm max-w-xs leading-relaxed">
                        Premium home remodeling services for Dallas, Texas. Built on integrity, transparency, and architectural quality.
                    </p>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-neutral-900">Services</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="transition-colors hover:text-neutral-900" href="#">Interior Remodeling</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">Exterior Improvements</a></li>
<li><a className="transition-colors hover:text-neutral-900" href="#">System Upgrades</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-sm mb-4 text-neutral-900">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map-pin" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></g></svg> Dallas, Texas
                        </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:mail" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg> hello@matoshome.com
                        </li>
<li className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> (214) 555-0123
                        </li>
</ul>
</div>
</div>
<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-100">
<p className="text-xs text-neutral-400">© 2024 Matos Home Improvements LLC. All rights reserved.</p>
<div className="flex gap-4">
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path></g></svg>
</a>
<a className="transition-colors text-neutral-400 hover:text-neutral-900" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:facebook" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
