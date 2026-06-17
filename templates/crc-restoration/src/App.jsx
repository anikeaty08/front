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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
700: '#1d4ed8',
900: '#1e3a8a',
}
}
}
}
}



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
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-brand-600 rounded flex items-center justify-center text-white font-semibold text-lg tracking-tighter">
                        C
                    </div>
<div className="flex flex-col">
<span className="font-semibold text-slate-900 tracking-tighter text-lg leading-none">CRC</span>
<span className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-0.5">Restoration</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#work">Our Work</a>
<a className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden md:flex items-center gap-4">
<div className="flex flex-col items-end mr-2">
<span className="text-xs text-brand-600 font-semibold uppercase tracking-wider">24/7 Emergency</span>
<a className="text-sm font-semibold text-slate-900" href="tel:5093881175">(509) 388-1175</a>
</div>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2.5 px-5 rounded-lg transition-colors shadow-sm" href="#contact">
                        Get a Quote
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-slate-600 hover:text-slate-900 p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<img alt="Restoration professionals assessing water damage" className="opacity-40 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/asian-male-roof-installer-asian-construction-workers-roof-work-using-drill-bit-fix-ceramic-cement-roofing-screws-construction-site_140555-1225.jpg?w=740&amp;q=80"/>
<div className="bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="z-10 sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4 relative">
<div className="max-w-2xl opacity-0 animate-fade-in">
<div className="inline-flex gap-2 text-xs font-medium text-brand-300 bg-brand-500/10 border-brand-500/20 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">Available 24/7 in Yakima, WA<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span></div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    We restore your property <br className="hidden sm:block"/>
<span className="text-slate-400">and your peace of mind.</span>
</h1>
<p className="text-lg text-slate-300 mb-8 max-w-xl font-light leading-relaxed">
                    Complete Restoration &amp; Construction provides expert water, mold, and fire damage repair. We work directly with insurance to get your home looking like new again, fast.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex justify-center items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-base font-medium py-3.5 px-8 rounded-lg transition-colors shadow-lg shadow-brand-500/25" href="tel:5093881175">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                        Call Now: (509) 388-1175
                    </a>
<a className="inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm border border-white/10 text-base font-medium py-3.5 px-8 rounded-lg transition-all" href="#contact">
                        Request Service
                    </a>
</div>

<div className="flex items-center gap-6 text-sm text-slate-300 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-400 text-lg" icon="solar:shield-check-linear"></iconify-icon>
                        Licensed &amp; Insured
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-400 text-lg" icon="solar:stopwatch-linear"></iconify-icon>
                        Rapid Response
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-400 text-lg" icon="solar:document-text-linear"></iconify-icon>
                        Direct Insurance Billing
                    </div>
</div>
</div>
</div>
</section>

<div className="bg-white border-b border-slate-200 py-6">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-slate-100">
<div className="px-4">
<p className="text-2xl font-semibold text-slate-900 tracking-tight">10+</p>
<p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">Years Experience</p>
</div>
<div className="px-4">
<p className="text-2xl font-semibold text-slate-900 tracking-tight">164+</p>
<p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">Google Reviews</p>
</div>
<div className="px-4">
<div className="flex justify-center items-center gap-1 text-2xl font-semibold text-slate-900 tracking-tight">
                        5.0 <iconify-icon className="text-yellow-400 text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">Average Rating</p>
</div>
<div className="px-4">
<p className="text-2xl font-semibold text-slate-900 tracking-tight">100%</p>
<p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">Satisfaction</p>
</div>
</div>
</div>
</div>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Why Yakima Residents Choose CRC</h2>
<p className="text-slate-600 font-light">Disasters don't wait, and neither do we. We provide industry-leading restoration services with a focus on communication and quality.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">24/7 Emergency Service</h3>
<p className="text-sm text-slate-600 leading-relaxed font-light">Water and fire damage requires immediate action. Our crews are on standby day and night to mitigate further damage.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Honest, Upfront Pricing</h3>
<p className="text-sm text-slate-600 leading-relaxed font-light">No hidden fees. We provide detailed estimates before work begins and communicate clearly throughout the process.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Local Yakima Business</h3>
<p className="text-sm text-slate-600 leading-relaxed font-light">We are proudly local. We understand the specific construction and environmental challenges of homes in Washington.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Insurance Specialists</h3>
<p className="text-sm text-slate-600 leading-relaxed font-light">We have extensive experience working with all major insurance carriers, streamlining the claims process for you.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Our Restoration Services</h2>
<p className="text-slate-600 font-light">Comprehensive solutions to get your property back to pre-loss condition quickly and safely.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors" href="#contact">
                    Request an Assessment <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-slate-200 hover:border-brand-200 hover:bg-brand-50/50 transition-all cursor-pointer">
<div className="w-14 h-14 bg-slate-100 group-hover:bg-brand-100 text-slate-600 group-hover:text-brand-600 rounded-xl flex items-center justify-center shrink-0 transition-colors">
<iconify-icon className="text-3xl" icon="solar:waterdrop-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Water Damage Restoration</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-4">From burst pipes to natural flooding, we extract water, dry the structure, and repair all resulting damage to prevent structural issues.</p>
<span className="text-sm font-medium text-brand-600 flex items-center gap-1">Learn more <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</div>
</div>

<div className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-slate-200 hover:border-brand-200 hover:bg-brand-50/50 transition-all cursor-pointer">
<div className="w-14 h-14 bg-slate-100 group-hover:bg-brand-100 text-slate-600 group-hover:text-brand-600 rounded-xl flex items-center justify-center shrink-0 transition-colors">
<iconify-icon className="text-3xl" icon="solar:fire-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Fire &amp; Smoke Damage</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-4">Comprehensive cleanup including soot removal, odor neutralization, and structural rebuilding after a devastating fire.</p>
<span className="text-sm font-medium text-brand-600 flex items-center gap-1">Learn more <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</div>
</div>

<div className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-slate-200 hover:border-brand-200 hover:bg-brand-50/50 transition-all cursor-pointer">
<div className="w-14 h-14 bg-slate-100 group-hover:bg-brand-100 text-slate-600 group-hover:text-brand-600 rounded-xl flex items-center justify-center shrink-0 transition-colors">
<iconify-icon className="text-3xl" icon="solar:bacteria-outline"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Mold Removal &amp; Repair</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-4">Safe containment, removal, and remediation of mold growth caused by hidden moisture, protecting your family's health.</p>
<span className="text-sm font-medium text-brand-600 flex items-center gap-1">Learn more <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</div>
</div>

<div className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl border border-slate-200 hover:border-brand-200 hover:bg-brand-50/50 transition-all cursor-pointer">
<div className="w-14 h-14 bg-slate-100 group-hover:bg-brand-100 text-slate-600 group-hover:text-brand-600 rounded-xl flex items-center justify-center shrink-0 transition-colors">
<iconify-icon className="text-3xl" icon="solar:home-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 tracking-tight">Roof Repair</h3>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-4">Emergency tarping, leak detection, and complete roof repairs resulting from storm damage, fallen trees, or general wear.</p>
<span className="text-sm font-medium text-brand-600 flex items-center gap-1">Learn more <iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon></span>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-slate-900 pt-24 pb-24" id="work">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Our Recent Work</h2>
<p className="text-slate-400 font-light">Quality craftsmanship you can see. Real results from real Yakima job sites.</p>
</div>
<a className="bg-white text-slate-900 hover:bg-slate-100 text-sm font-medium py-2.5 px-6 rounded-lg transition-colors shadow-sm" href="#contact">
                    Get Your Project Started
                </a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700/50">
<img alt="Worker performing drywall repair" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/worker-rearing-roof_1019318-3954.jpg?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-brand-400 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block">Water Damage Repair</span>
<h3 className="text-lg font-medium text-white tracking-tight">Drywall Replacement</h3>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700/50">
<img alt="Technicians assessing damage" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://img.freepik.com/free-photo/long-shot-man-working-roof_23-2148748777.jpg?w=800&amp;q=80"/>
<div className="bg-center bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent bg-[url(https://img.freepik.com/premium-photo/photo-silhouette-power-washing-guy-cleaning-roof_600269-1992.jpg?w=740&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-brand-400 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block">Fire Restoration</span>
<h3 className="text-lg font-medium text-white tracking-tight">Structural Cleaning</h3>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700/50">
<img alt="Roof repair underway" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://img.freepik.com/free-photo/full-shot-roofers-working-with-helmets_23-2149343708.jpg?w=800&amp;q=80"/>
<div className="bg-center bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent bg-[url(https://butlersroofingengland.com/wp-content/uploads/2025/04/freepik__the-style-is-candid-image-photography-with-natural__86964.jpeg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0">
<span className="text-xs font-medium text-brand-400 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block">Roofing</span>
<h3 className="text-lg font-medium text-white tracking-tight">Storm Damage Repair</h3>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700/50">
<img alt="Construction worker using equipment" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://img.freepik.com/free-photo/top-view-man-tiling-floor_23-2149344001.jpg?w=800&amp;q=80"/>
<div className="bg-center bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent bg-[url(https://img.freepik.com/free-photo/top-view-man-tiling-floor_23-2149344001.jpg?w=800&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="pt-6 pr-6 pb-6 pl-6 absolute bottom-0 left-0">
<span className="text-xs font-medium text-brand-400 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block">Construction</span>
<h3 className="text-lg font-medium text-white tracking-tight">Flooring Installation</h3>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700/50">
<img alt="Room ready for rebuild" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://img.freepik.com/premium-photo/man-working-laminate-flooring-installation-apartment_10069-10602.jpg?w=800&amp;q=80"/>
<div className="bg-center bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent bg-[url(https://img.freepik.com/free-photo/scene-construction-site-with-equipment_23-2151317340.jpg?w=740&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-brand-400 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block">Mold Remediation</span>
<h3 className="text-lg font-medium text-white tracking-tight">Basement Mitigation</h3>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700/50">
<img alt="Residential rebuild exterior" className="transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://img.freepik.com/free-photo/full-shot-man-working-roof_23-2149343677.jpg?w=800&amp;q=80"/>
<div className="bg-center bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent bg-[url(https://img.freepik.com/premium-photo/2-construction-workers-install-new-roof-construction-site-electric-drill-used-new-roofs-with-concrete-roof-tiles-concept-residential-building-construction_61243-1559.jpg?w=740&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-0 p-6">
<span className="text-xs font-medium text-brand-400 bg-slate-900/80 backdrop-blur-sm px-2 py-1 rounded mb-2 inline-block">General Repair</span>
<h3 className="text-lg font-medium text-white tracking-tight">Full Home Rebuild</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-6">About Complete Restoration &amp; Construction</h2>
<div className="prose prose-slate prose-p:font-light leading-relaxed text-slate-600 mb-8">
<p>We are Your Water, Mold and Fire Damage Professionals. Based right here in Yakima, WA, we understand that disaster striking your home is one of the most stressful events you can face.</p>
<p>Our services are about more than just fixing a home; they're about restoring comfort and peace of mind to our clients. Our team of professionals will carefully survey the damage before creating customized solutions to get your home looking like new again.</p>
<p>With extensive experience working directly with insurance companies, we act as your advocate, helping you navigate the often-confusing claims process smoothly.</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm font-medium text-slate-800">
<div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
                            Locally Owned &amp; Operated in Washington
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-800">
<div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
                            Fully Licensed, Bonded, and Insured
                        </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-800">
<div className="w-6 h-6 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
                            Insurance Claim Assistance
                        </li>
</ul>
<a className="text-brand-600 font-medium text-sm hover:text-brand-700 flex items-center gap-1" href="#contact">
                        Contact our team <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Proudly Serving Yakima &amp; Beyond</h3>
<p className="text-sm text-slate-600 font-light mb-8">We dispatch quickly to mitigate damage across Yakima County.</p>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Yakima
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Selah
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Union Gap
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Moxee
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Tieton
                        </div>
<div className="flex items-center gap-2 text-sm text-slate-700">
<iconify-icon className="text-slate-400" icon="solar:map-point-linear"></iconify-icon> Naches
                        </div>
</div>
<div className="bg-white p-4 rounded-xl border border-slate-200 flex items-start gap-4">
<div className="w-10 h-10 bg-red-50 text-red-600 rounded-lg flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:alarm-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-slate-900">24/7 Emergency Dispatch</p>
<p className="text-xs text-slate-500 mt-1">Water and fire damage don't stick to business hours. Call anytime for immediate assistance.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Trusted by Yakima Customers</h2>
<p className="text-slate-600 font-light mb-6">Don't just take our word for it. See what your neighbors are saying about our restoration services.</p>
<div className="inline-flex items-center gap-4 bg-white px-6 py-3 rounded-full border border-slate-200 shadow-sm">
<div className="flex text-yellow-400 text-lg">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="w-px h-4 bg-slate-300"></div>
<span className="text-sm font-medium text-slate-900">5.0 Average based on 164 Reviews</span>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-slate-400 flex items-center gap-1 uppercase tracking-wider">
<iconify-icon icon="logos:google-icon"></iconify-icon> Google
                        </span>
</div>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-6 flex-grow">"Woke up to a flooded basement. CRC was here within an hour. They extracted the water, set up fans, and communicated with my insurance perfectly. Lifesavers."</p>
<div>
<p className="text-sm font-medium text-slate-900">Michael T.</p>
<p className="text-xs text-slate-500">Yakima, WA • Water Damage</p>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-slate-400 flex items-center gap-1 uppercase tracking-wider">
<iconify-icon icon="logos:google-icon"></iconify-icon> Google
                        </span>
</div>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-6 flex-grow">"Had a small kitchen fire that caused terrible smoke damage throughout the house. The team at Complete Restoration cleaned everything thoroughly. Looks and smells like it never happened."</p>
<div>
<p className="text-sm font-medium text-slate-900">Sarah M.</p>
<p className="text-xs text-slate-500">Selah, WA • Fire Repair</p>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-slate-400 flex items-center gap-1 uppercase tracking-wider">
<iconify-icon icon="logos:google-icon"></iconify-icon> Google
                        </span>
</div>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-6 flex-grow">"Discovered mold behind some drywall during a remodel. They sealed off the area, removed it safely, and rebuilt the wall. Very professional crew, showed up on time."</p>
<div>
<p className="text-sm font-medium text-slate-900">David R.</p>
<p className="text-xs text-slate-500">Union Gap, WA • Mold Removal</p>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
<div className="flex items-center justify-between mb-4">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-[10px] font-medium text-slate-400 flex items-center gap-1 uppercase tracking-wider">
<iconify-icon icon="logos:google-icon"></iconify-icon> Google
                        </span>
</div>
<p className="text-sm text-slate-600 font-light leading-relaxed mb-6 flex-grow">"Recent storm damaged our roof. They came out quickly to tarp it and then did a full repair once the weather cleared. Great communication from the office staff too."</p>
<div>
<p className="text-sm font-medium text-slate-900">Jessica K.</p>
<p className="text-xs text-slate-500">Yakima, WA • Roof Repair</p>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-brand-600 transition-colors" href="https://share.google/TVvu0uAGEEJWTrcw3" rel="noopener noreferrer" target="_blank">
<iconify-icon className="text-lg" icon="solar:map-linear"></iconify-icon>
                    Read all 164 reviews on Google Maps
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Get a Free Assessment</h2>
<p className="text-slate-600 font-light mb-10">Fill out the form to request a callback, or reach out to us directly for immediate emergency service.</p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
<iconify-icon className="text-2xl text-slate-700" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Phone</h4>
<p className="text-sm text-slate-500 mb-1">Available 24/7 for emergencies.</p>
<a className="text-base font-medium text-brand-600 hover:text-brand-700" href="tel:5093881175">(509) 388-1175</a>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
<iconify-icon className="text-2xl text-slate-700" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Email</h4>
<p className="text-sm text-slate-500 mb-1">Send us details about your project.</p>
<a className="text-base font-medium text-brand-600 hover:text-brand-700" href="mailto:admin@crcrestoration.com">admin@crcrestoration.com</a>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center shrink-0 border border-slate-100">
<iconify-icon className="text-2xl text-slate-700" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900">Headquarters</h4>
<p className="text-sm text-slate-500">Yakima, Washington</p>
<p className="text-sm text-slate-500">Serving surrounding counties.</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-[0_0_40px_-10px_rgba(0,0,0,0.05)] border border-slate-100">
<form action="#" className="space-y-5" method="POST">
<div className="grid grid-cols-2 gap-5">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="first-name">First name</label>
<input className="block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50 transition-colors" id="first-name" name="first-name" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="last-name">Last name</label>
<input className="block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50 transition-colors" id="last-name" name="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="phone">Phone number</label>
<input className="block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50 transition-colors" id="phone" name="phone" placeholder="(509) 555-0123" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="service">Service needed</label>
<div className="relative">
<select className="block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 bg-slate-50 transition-colors appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500" id="service" name="service">
<option disabled="" selected="" value="">Select a service...</option>
<option value="water">Water Damage Restoration</option>
<option value="fire">Fire &amp; Smoke Repair</option>
<option value="mold">Mold Removal</option>
<option value="roof">Roof Repair</option>
<option value="other">Other / General Inquiry</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5" htmlFor="message">Message</label>
<textarea className="block w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 bg-slate-50 transition-colors resize-none" id="message" name="message" placeholder="Briefly describe the damage or project..." rows="4"></textarea>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-3 px-4 rounded-lg transition-colors shadow-sm mt-2" type="submit">
                            Send Message
                        </button>
<p className="text-center text-xs text-slate-500 mt-4 font-light">We typically respond within 24 hours. For emergencies, please call.</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-400 via-transparent to-transparent"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-6">Ready to Get Started?</h2>
<p className="text-lg text-slate-300 font-light mb-10 max-w-2xl mx-auto">
                We are currently accepting new service requests in Yakima and surrounding areas. Trust the local experts to restore your property.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-base font-medium py-3.5 px-8 rounded-lg transition-colors shadow-lg shadow-brand-500/25" href="tel:5093881175">
                    Call Now: (509) 388-1175
                </a>
<a className="inline-flex justify-center items-center gap-2 bg-white text-slate-900 hover:bg-slate-50 text-base font-medium py-3.5 px-8 rounded-lg transition-colors shadow-sm" href="#contact">
                    Get a Free Quote
                </a>
</div>
<div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-slate-400 font-medium">
<span>✓ 24/7 Emergency Service</span>
<span>✓ Works with Insurance</span>
<span>✓ 5-Star Rated</span>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-7 h-7 bg-brand-600 rounded flex items-center justify-center text-white font-semibold text-base tracking-tighter">
                            C
                        </div>
<span className="font-semibold text-slate-900 tracking-tighter text-lg">CRC Restoration</span>
</a>
<p className="text-sm text-slate-500 font-light leading-relaxed mb-6">
                        Professional water, mold, and fire damage restoration services. Rebuilding Yakima homes with quality and care.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon className="text-xl" icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="text-slate-400 hover:text-slate-600 transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Services</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#services">Water Damage Restoration</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#services">Fire &amp; Smoke Repair</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#services">Mold Removal &amp; Repair</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Company</h3>
<ul className="space-y-3">
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#work">Our Work</a></li>
<li><a className="text-sm text-slate-500 hover:text-brand-600 transition-colors" href="#reviews">Reviews</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4 tracking-tight">Contact</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-lg shrink-0 mt-0.5 text-slate-400" icon="solar:map-point-linear"></iconify-icon>
                            Yakima, WA
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-lg shrink-0 mt-0.5 text-slate-400" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-brand-600 transition-colors" href="tel:5093881175">(509) 388-1175</a>
</li>
<li className="flex items-start gap-2 text-sm text-slate-500">
<iconify-icon className="text-lg shrink-0 mt-0.5 text-slate-400" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-brand-600 transition-colors" href="mailto:admin@crcrestoration.com">admin@crcrestoration.com</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 font-light">
                    © 2024 Complete Restoration &amp; Construction, LLC. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-xs text-slate-400 font-light">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
