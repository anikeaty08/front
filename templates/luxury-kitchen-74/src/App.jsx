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
serif: ['Playfair Display', 'serif'],
},
colors: {
luxury: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
800: '#1F2937',
900: '#111827',
}
},
letterSpacing: {
tightest: '-0.05em',
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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-luxury-200/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex items-center justify-between h-20">

<div className="flex items-center gap-2 group cursor-pointer" onclick="window.location.href='/'">
<div className="w-8 h-8 border border-luxury-900 flex items-center justify-center transform group-hover:rotate-45 transition-transform duration-500">
<span className="font-serif italic text-lg leading-none pt-1">R</span>
</div>
<span className="text-sm font-medium tracking-widest uppercase">RenovateYourKitchen</span>
</div>

<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-luxury-800">
<a className="hover:text-black transition-colors" href="#collections">Styles</a>
<a className="hover:text-black transition-colors" href="#process">Our Process</a>
<a className="hover:text-black transition-colors" href="/portfolio">Portfolio</a>
<a className="hover:text-black transition-colors" href="/integration">Integration Guide</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-luxury-900 text-white px-5 py-2.5 rounded-sm text-xs font-medium uppercase tracking-wide hover:bg-black transition-colors shadow-sm" href="/estimate">
<span>Estimate Tool</span>
<iconify-icon icon="solar:calculator-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-luxury-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">
<img alt="High-End Luxury Kitchen" className="w-full h-full object-cover opacity-90 image-fade-in brightness-75" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-luxury-50"></div>
</div>
<div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto mt-20">
<div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-6">
<iconify-icon className="text-yellow-200" icon="solar:star-linear" width="14"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest font-medium">Tri-State Design-Build Authority</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-none text-white mb-6 italic">
                Elevated <span className="not-italic font-light tracking-tightest">Living</span><br/>
<span className="text-4xl md:text-6xl lg:text-7xl block mt-2 not-italic font-light tracking-tightest">Begins in the Kitchen.</span>
</h1>
<p className="text-luxury-100 text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto leading-relaxed opacity-90">
                The Tri-State’s premier design-build authority for high-end kitchen transformations. Bespoke craftsmanship meet streamlined execution in NY, NJ, and CT.
            </p>

<div className="mt-12 hidden md:inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 p-2 rounded-lg gap-px">
<div className="px-6 py-3 border-r border-white/10 flex flex-col items-start min-w-[150px]">
<span className="text-[10px] uppercase text-luxury-300 tracking-wider mb-1">Select Style</span>
<span className="text-sm font-medium">Aesthetic Palette</span>
</div>
<div className="px-6 py-3 border-r border-white/10 flex flex-col items-start min-w-[150px]">
<span className="text-[10px] uppercase text-luxury-300 tracking-wider mb-1">Location</span>
<span className="text-sm font-medium">Tri-State Area</span>
</div>
<div className="px-6 py-3 border-r border-white/10 flex flex-col items-start min-w-[150px]">
<span className="text-[10px] uppercase text-luxury-300 tracking-wider mb-1">Timeline</span>
<span className="text-sm font-medium">8-12 Weeks</span>
</div>
<a className="flex items-center justify-center bg-white text-luxury-900 h-full px-8 py-4 rounded-md font-medium text-xs uppercase tracking-widest hover:bg-luxury-100 transition-colors ml-2" href="/estimate">
                    Start Estimate
                </a>
</div>
<div className="mt-6 md:hidden">
<a className="inline-flex bg-white text-luxury-900 px-8 py-4 rounded-md font-medium text-xs uppercase tracking-widest hover:bg-luxury-100 transition-colors" href="/estimate">
                    Start Estimate
                </a>
</div>
</div>
</header>

<section className="py-24 md:py-32 border-b border-luxury-200" id="collections">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-luxury-900 mb-4">Signature Style Collections</h2>
<p className="text-luxury-500 font-light leading-relaxed">
                        We have reimagined the luxury renovation experience. Select from our signature style palettes—tailored for Tri-State architecture—and experience a fixed-labor, high-margin transformation that respects your time and your investment.
                    </p>
</div>
<a className="group flex items-center gap-2 text-xs font-medium uppercase tracking-widest border-b border-luxury-900 pb-1 shrink-0" href="/portfolio">
                    Browse Collections
                    <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">

<div className="group relative overflow-hidden bg-white border border-luxury-200 h-[500px] flex flex-col justify-end p-8 hover:border-luxury-300 transition-all duration-500">
<img alt="Modern Minimalist Kitchen" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent group-hover:from-black/90 group-hover:via-black/40 group-hover:to-transparent transition-all duration-700"></div>
<div className="relative z-10 group-hover:text-white transition-colors duration-500">
<div className="w-12 h-12 rounded-full border border-luxury-300 flex items-center justify-center mb-6 group-hover:border-white/30 backdrop-blur-sm bg-white/50 group-hover:bg-white/10">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-80">Manhattan / Jersey City</span>
<h3 className="text-2xl font-serif italic mb-2">Modern Minimalist</h3>
<p className="text-sm font-light opacity-80 leading-relaxed">
                            Handle-less cabinetry, integrated smart appliances, and slab backsplashes. Optimized for high-rise living and sleek urban aesthetics.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden bg-white border border-luxury-200 h-[500px] flex flex-col justify-end p-8 hover:border-luxury-300 transition-all duration-500">
<img alt="Coastal Hamptons Kitchen" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent group-hover:from-black/90 group-hover:via-black/40 group-hover:to-transparent transition-all duration-700"></div>
<div className="relative z-10 group-hover:text-white transition-colors duration-500">
<div className="w-12 h-12 rounded-full border border-luxury-300 flex items-center justify-center mb-6 group-hover:border-white/30 backdrop-blur-sm bg-white/50 group-hover:bg-white/10">
<iconify-icon icon="solar:water-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-80">Long Island / Fairfield</span>
<h3 className="text-2xl font-serif italic mb-2">Coastal Hamptons</h3>
<p className="text-sm font-light opacity-80 leading-relaxed">
                            Shaker-style millwork, oversized marble islands, and nautical-inspired brass accents. Airy, light-filled, and timeless.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden bg-white border border-luxury-200 h-[500px] flex flex-col justify-end p-8 hover:border-luxury-300 transition-all duration-500">
<img alt="Industrial Loft Kitchen" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-white via-white/90 to-transparent group-hover:from-black/90 group-hover:via-black/40 group-hover:to-transparent transition-all duration-700"></div>
<div className="relative z-10 group-hover:text-white transition-colors duration-500">
<div className="w-12 h-12 rounded-full border border-luxury-300 flex items-center justify-center mb-6 group-hover:border-white/30 backdrop-blur-sm bg-white/50 group-hover:bg-white/10">
<iconify-icon icon="solar:buildings-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<span className="text-[10px] uppercase tracking-widest font-bold mb-2 block opacity-80">Brooklyn / Hoboken</span>
<h3 className="text-2xl font-serif italic mb-2">Industrial Loft</h3>
<p className="text-sm font-light opacity-80 leading-relaxed">
                            Exposed brick integration, matte black hardware, reclaimed wood accents, and professional-grade ranges.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-luxury-900 text-white py-24 relative overflow-hidden">

<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 space-y-8">
<div className="inline-flex items-center gap-2 text-white">
<iconify-icon icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="text-luxury-400 text-xs font-medium uppercase tracking-widest ml-1">Licensed &amp; Insured Design-Build Firm</span>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">
<span className="font-serif italic text-luxury-200">Design-Build</span><br/>
                        Synergy
                    </h2>
<p className="text-luxury-300 font-light leading-relaxed">
                        By combining artisanal design with a "productized" approach, we eliminate the ambiguity of custom building. We manage every detail from the first architectural sketch to the final backsplash tile.
                    </p>
<div className="space-y-4 pt-4 border-t border-white/10">
<div className="flex items-center justify-between group cursor-default">
<span className="font-medium text-sm">Fixed Labor Pricing</span>
<span className="text-luxury-400 font-light text-sm group-hover:text-white transition-colors text-right">Clear Financial Roadmap</span>
</div>
<div className="flex items-center justify-between group cursor-default">
<span className="font-medium text-sm">Local Permit Expertise</span>
<span className="text-luxury-400 font-light text-sm group-hover:text-white transition-colors text-right">NYC, Westchester &amp; CT</span>
</div>
<div className="flex items-center justify-between group cursor-default">
<span className="font-medium text-sm">Curated Material Accounts</span>
<span className="text-luxury-400 font-light text-sm group-hover:text-white transition-colors text-right">Sub-Zero, Wolf, Miele</span>
</div>
<div className="flex items-center justify-between group cursor-default">
<span className="font-medium text-sm">Dedicated Management</span>
<span className="text-luxury-400 font-light text-sm group-hover:text-white transition-colors text-right">One Point of Contact</span>
</div>
</div>
<a className="inline-block mt-4 border border-white/30 px-6 py-3 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300" href="/contact">
                        Book an In-Home Consultation
                    </a>
</div>
<div className="lg:col-span-7 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Kitchen Details" className="w-full h-80 object-cover rounded-sm opacity-80 hover:opacity-100 transition-opacity duration-500" src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<img alt="Premium Materials" className="w-full h-80 object-cover rounded-sm opacity-80 hover:opacity-100 transition-opacity duration-500 translate-y-8" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="process">
<div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex items-end justify-between">
<div>
<span className="text-xs font-bold text-luxury-400 uppercase tracking-widest mb-2 block">Our Process</span>
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-luxury-900">How It Works</h2>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 border border-luxury-200 flex items-center justify-center hover:bg-luxury-50 transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 border border-luxury-200 flex items-center justify-center hover:bg-luxury-50 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="max-w-[1400px] mx-auto px-6 overflow-x-auto pb-8 hide-scrollbar">
<div className="flex gap-6 w-max">

<div className="w-[340px] md:w-[400px] group cursor-default">
<div className="relative h-[280px] overflow-hidden rounded-sm mb-6">
<div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                            Step 01
                        </div>
<img alt="Style Selection" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600585154526-990dced4ea07?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-b border-luxury-100 pb-4 mb-4">
<div>
<h3 className="text-lg font-medium text-luxury-900 mb-1 group-hover:text-luxury-600 transition-colors">Style Selection</h3>
<p className="text-xs text-luxury-400 font-light leading-relaxed max-w-[280px]">Choose from our three signature aesthetic palettes or customize a hybrid look to perfectly match your vision.</p>
</div>
</div>
<div className="flex gap-3 text-luxury-400">
<div className="flex items-center gap-1">
<iconify-icon icon="solar:pallete-2-linear" width="16"></iconify-icon>
<span className="text-[10px]">Curation</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon icon="solar:tuning-square-2-linear" width="16"></iconify-icon>
<span className="text-[10px]">Customization</span>
</div>
</div>
</div>

<div className="w-[340px] md:w-[400px] group cursor-default">
<div className="relative h-[280px] overflow-hidden rounded-sm mb-6">
<div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                            Step 02
                        </div>
<img alt="Measurement" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-b border-luxury-100 pb-4 mb-4">
<div>
<h3 className="text-lg font-medium text-luxury-900 mb-1 group-hover:text-luxury-600 transition-colors">Precision Measurement</h3>
<p className="text-xs text-luxury-400 font-light leading-relaxed max-w-[280px]">Our team conducts a technical site survey in your Westchester, Bergen, or Fairfield home to ensure exact tolerances.</p>
</div>
</div>
<div className="flex gap-3 text-luxury-400">
<div className="flex items-center gap-1">
<iconify-icon icon="solar:ruler-cross-pen-linear" width="16"></iconify-icon>
<span className="text-[10px]">Technical Survey</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="text-[10px]">Tri-State Local</span>
</div>
</div>
</div>

<div className="w-[340px] md:w-[400px] group cursor-default">
<div className="relative h-[280px] overflow-hidden rounded-sm mb-6">
<div className="absolute top-4 right-4 z-20 bg-luxury-900 text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                            Step 03
                        </div>
<img alt="Proposal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-b border-luxury-100 pb-4 mb-4">
<div>
<h3 className="text-lg font-medium text-luxury-900 mb-1 group-hover:text-luxury-600 transition-colors">Fixed-Quote Proposal</h3>
<p className="text-xs text-luxury-400 font-light leading-relaxed max-w-[280px]">Receive a comprehensive bid covering labor and material allowances—we completely eliminate "estimate creep."</p>
</div>
</div>
<div className="flex gap-3 text-luxury-400">
<div className="flex items-center gap-1">
<iconify-icon icon="solar:document-text-linear" width="16"></iconify-icon>
<span className="text-[10px]">Transparent Pricing</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
<span className="text-[10px]">No Hidden Fees</span>
</div>
</div>
</div>

<div className="w-[340px] md:w-[400px] group cursor-default">
<div className="relative h-[280px] overflow-hidden rounded-sm mb-6">
<div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                            Step 04
                        </div>
<img alt="Build" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start border-b border-luxury-100 pb-4 mb-4">
<div>
<h3 className="text-lg font-medium text-luxury-900 mb-1 group-hover:text-luxury-600 transition-colors">White-Glove Build</h3>
<p className="text-xs text-luxury-400 font-light leading-relaxed max-w-[280px]">We manage all local permits and construction, delivering a chef-ready kitchen in 8–12 weeks.</p>
</div>
</div>
<div className="flex gap-3 text-luxury-400">
<div className="flex items-center gap-1">
<iconify-icon icon="solar:hammer-linear" width="16"></iconify-icon>
<span className="text-[10px]">Expert Craftsmanship</span>
</div>
<div className="flex items-center gap-1">
<iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
<span className="text-[10px]">8-12 Weeks</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-luxury-200 bg-luxury-50">
<div className="max-w-4xl mx-auto px-6 md:px-12">
<h2 className="text-3xl md:text-4xl font-light tracking-tight text-luxury-900 mb-12 text-center font-serif italic">Frequently Asked Questions</h2>
<div className="space-y-6">

<div className="border-b border-luxury-200 pb-6">
<h4 className="text-sm font-medium uppercase tracking-widest mb-3 text-luxury-900">How long does a typical Tri-State kitchen renovation take?</h4>
<p className="text-sm text-luxury-500 font-light leading-relaxed">
                        Most of our signature transformations are completed within 8 to 12 weeks once materials arrive on-site. We prioritize aggressive scheduling to minimize downtime in your home.
                    </p>
</div>

<div className="border-b border-luxury-200 pb-6">
<h4 className="text-sm font-medium uppercase tracking-widest mb-3 text-luxury-900">Do you handle DOB permits in NYC or local board approvals in CT?</h4>
<p className="text-sm text-luxury-500 font-light leading-relaxed">
                        Yes. Our team specializes in the specific bureaucratic requirements of Tri-State municipalities, from Manhattan Department of Buildings filings to Westchester local board variances.
                    </p>
</div>

<div className="border-b border-luxury-200 pb-6">
<h4 className="text-sm font-medium uppercase tracking-widest mb-3 text-luxury-900">What is included in the "Standard, Premium, and Luxury" tiers?</h4>
<p className="text-sm text-luxury-500 font-light leading-relaxed">
                        All tiers include full demolition and professional installation. "Luxury" adds bespoke cabinetry, premium stone imports (e.g., Calacatta Borghini), and integrated high-end appliance suites.
                    </p>
</div>

<div className="border-b border-luxury-200 pb-6">
<h4 className="text-sm font-medium uppercase tracking-widest mb-3 text-luxury-900">Can I keep my current appliances?</h4>
<p className="text-sm text-luxury-500 font-light leading-relaxed">
                        While we recommend a full integration for the best aesthetic result, our "Modern Minimalist" and "Industrial Loft" packages can be adapted to fit your existing high-end appliances.
                    </p>
</div>

<div className="border-b border-luxury-200 pb-6">
<h4 className="text-sm font-medium uppercase tracking-widest mb-3 text-luxury-900">What areas do you serve specifically?</h4>
<p className="text-sm text-luxury-500 font-light leading-relaxed">
                        We serve a 60-mile radius from Midtown Manhattan, including all five boroughs, Westchester, Nassau County, Bergen County, Hudson County, and Fairfield County.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-luxury-900 text-center text-white relative overflow-hidden border-b border-luxury-800">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 max-w-3xl mx-auto px-6">
<h2 className="font-serif text-5xl md:text-6xl italic mb-6">Your Signature <span className="not-italic font-light">Kitchen Awaits.</span></h2>
<p className="text-luxury-200 font-light tracking-wide max-w-lg mx-auto mb-10 leading-relaxed">
                Take the first step toward a kitchen designed for your lifestyle and engineered for your home’s value.
            </p>
<a className="inline-flex items-center gap-2 bg-white text-luxury-900 px-8 py-4 rounded-md font-medium text-xs uppercase tracking-widest hover:bg-luxury-100 transition-colors" href="/estimate">
                Start Your Instant Estimate
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-white pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 border border-luxury-900 flex items-center justify-center">
<span className="font-serif italic text-xs leading-none pt-0.5">R</span>
</div>
<span className="text-xs font-medium tracking-widest uppercase">RenovateYourKitchen</span>
</div>
<p className="text-xs text-luxury-400 font-light leading-relaxed">
                        Midtown Manhattan Headquarters<br/>
                        Serving NY, NJ, and CT<br/>
                        United States
                    </p>
</div>
<div className="col-span-1">
<h5 className="text-[10px] font-bold text-luxury-900 uppercase tracking-widest mb-4">Experience</h5>
<ul className="space-y-3">
<li><a className="text-xs text-luxury-500 hover:text-luxury-900 transition-colors" href="#collections">Style Collections</a></li>
<li><a className="text-xs text-luxury-500 hover:text-luxury-900 transition-colors" href="#process">Our Process</a></li>
<li><a className="text-xs text-luxury-500 hover:text-luxury-900 transition-colors" href="/portfolio">Portfolio</a></li>
<li><a className="text-xs text-luxury-500 hover:text-luxury-900 transition-colors" href="/integration">Integration Guide</a></li>
</ul>
</div>
<div className="col-span-1">
<h5 className="text-[10px] font-bold text-luxury-900 uppercase tracking-widest mb-4">Legal</h5>
<ul className="space-y-3">
<li><a className="text-xs text-luxury-500 hover:text-luxury-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-xs text-luxury-500 hover:text-luxury-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-xs text-luxury-500 hover:text-luxury-900 transition-colors" href="#">Accessibility</a></li>
</ul>
</div>
<div className="col-span-1">
<h5 className="text-[10px] font-bold text-luxury-900 uppercase tracking-widest mb-4">Consultation</h5>
<p className="text-xs text-luxury-400 mb-4 font-light">Join our waitlist for an exclusive in-home design consultation.</p>
<div className="flex gap-2 border-b border-luxury-200 pb-2">
<input className="w-full bg-transparent text-xs outline-none text-luxury-900 placeholder:text-luxury-300" placeholder="Email Address" type="email"/>
<button className="text-luxury-900 hover:text-luxury-500 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8 border-t border-luxury-100 gap-4">
<div className="text-[10px] text-luxury-300 uppercase tracking-wider leading-relaxed">
                    © 2026 RenovateYourKitchen.com. Tri-State Signature Kitchens is a licensed and insured design-build firm.<br/>
<span className="opacity-80">CT HIC #000000 | NJ HIC #000000 | NYC DCA #000000. All kitchen designs are proprietary.</span>
</div>
<div className="flex gap-4">
<a className="text-luxury-300 hover:text-luxury-900 transition-colors" href="#"><iconify-icon icon="brandico:instagram-text" width="16"></iconify-icon></a>
<a className="text-luxury-300 hover:text-luxury-900 transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
