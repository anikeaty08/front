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



document.addEventListener("DOMContentLoaded", function() {
// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
// Generate Leaves (kept for subtle particle effect)
const hero = document.getElementById('hero');
for(let i=0; i<8; i++) {
let leaf = document.createElement('div');
leaf.className = 'leaf';
leaf.style.left = Math.random() * 100 + '%';
leaf.style.animation = `float ${5 + Math.random() * 10}s linear infinite`;
leaf.style.animationDelay = `${Math.random() * 5}s`;
hero.appendChild(leaf);
}
});



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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-stone-200/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="/">
<div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
<span className="font-semibold text-lg">R</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-lg font-medium tracking-tight text-stone-900 group-hover:text-emerald-800 transition-colors">RENOVATE YOUR KITCHEN</span>
<span className="text-[0.6rem] uppercase tracking-widest text-stone-500">Tri-State Design-Build</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-600 hover:text-emerald-700 hover:scale-105 transition-all duration-300 flex items-center gap-1" href="#styles">Styles</a>
<a className="text-sm font-medium text-stone-600 hover:text-emerald-700 hover:scale-105 transition-all duration-300 flex items-center gap-1" href="#process">Our Process</a>
<a className="text-sm font-medium text-stone-600 hover:text-emerald-700 hover:scale-105 transition-all duration-300 flex items-center gap-1" href="#portfolio">Portfolio</a>
<a className="text-sm font-medium text-stone-600 hover:text-emerald-700 hover:scale-105 transition-all duration-300 flex items-center gap-1" href="#guide">Integration Guide</a>
<a className="text-sm font-medium text-emerald-700 hover:text-emerald-800 hover:scale-105 transition-all duration-300 flex items-center gap-1" href="/estimate">Estimate Tool</a>
</div>

<button className="md:hidden text-stone-600">
<span className="iconify" data-icon="solar:hamburger-menu-linear" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" id="hero">

<div className="absolute inset-0 z-0">
<img alt="High-End Luxury Kitchen" className="w-full h-full object-cover opacity-90 scale-105 hover:scale-100 transition-transform duration-[10s] ease-out" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&amp;w=2560&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-50/10 via-stone-50/20 to-stone-50"></div>
<div className="absolute inset-0 bg-gradient-to-r from-stone-50/90 md:from-stone-50/80 to-transparent"></div>
</div>
<div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-medium uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Now Serving NY, NJ &amp; CT
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 leading-[1.1] mb-6">
                    Elevated Living <br/>Begins in the <span className="text-emerald-700">Kitchen</span>.
                </h1>
<p className="text-lg text-stone-600 max-w-lg mb-10 leading-relaxed font-light">
                    The Tri-State’s premier design-build authority for high-end kitchen transformations. Bespoke craftsmanship meet streamlined execution in NY, NJ, and CT.
                </p>
<div className="flex flex-col sm:flex-row gap-4">

<a className="btn-robotic group relative inline-flex items-center justify-center px-8 py-4 bg-emerald-800 text-white overflow-hidden rounded-lg transition-all duration-300 hover:bg-emerald-900 shadow-lg shadow-emerald-900/20" href="/estimate">
<div className="absolute inset-0 border border-white/20 rounded-lg"></div>
<div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-emerald-300 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-emerald-300 opacity-50 group-hover:opacity-100 transition-opacity"></div>
<span className="relative flex items-center gap-3 font-medium tracking-wide">
                            Browse Style Collections
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="solar:arrow-right-linear" data-width="18"></span>
</span>
</a>

<a className="inline-flex items-center justify-center px-8 py-4 bg-white/60 backdrop-blur-md border border-stone-200 text-stone-900 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-lg font-medium tracking-wide" href="/contact">
                        Book an In-Home Consultation
                    </a>
</div>
</div>

<div className="hidden md:grid grid-cols-2 gap-4 reveal delay-200" id="styles">
<div className="bg-white/60 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-sm hover:-translate-y-2 transition-transform duration-500 mt-12">
<span className="iconify text-emerald-600 mb-4" data-icon="solar:layers-minimalistic-linear" data-width="32"></span>
<h3 className="text-stone-900 font-medium mb-1">Modern Minimalist</h3>
<p className="text-[0.65rem] uppercase tracking-wider text-emerald-700 font-medium mb-2">Manhattan &amp; Jersey City</p>
<p className="text-xs text-stone-500">Handle-less cabinetry, integrated smart appliances, and slab backsplashes.</p>
</div>
<div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hover:-translate-y-2 transition-transform duration-500">
<span className="iconify text-emerald-600 mb-4" data-icon="solar:sun-linear" data-width="32"></span>
<h3 className="text-stone-900 font-medium mb-1">Coastal Hamptons</h3>
<p className="text-[0.65rem] uppercase tracking-wider text-emerald-700 font-medium mb-2">Long Island &amp; Fairfield</p>
<p className="text-xs text-stone-500">Shaker-style millwork, oversized marble islands, and nautical brass accents.</p>
</div>
<div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/50 shadow-lg hover:-translate-y-2 transition-transform duration-500 col-span-2 w-3/4 mx-auto">
<span className="iconify text-emerald-600 mb-4" data-icon="solar:buildings-linear" data-width="32"></span>
<h3 className="text-stone-900 font-medium mb-1">Industrial Loft</h3>
<p className="text-[0.65rem] uppercase tracking-wider text-emerald-700 font-medium mb-2">Brooklyn &amp; Hoboken</p>
<p className="text-xs text-stone-500">Exposed brick integration, matte black hardware, and professional-grade ranges.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-12 gap-16">

<div className="md:col-span-5 reveal">
<span className="text-emerald-600 font-medium tracking-wide text-sm uppercase mb-2 block">Positioning</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 mb-6 tracking-tight">Reimagining Luxury Renovations</h2>
<p className="text-stone-600 mb-6 leading-relaxed">
                        We have reimagined the luxury renovation experience. By combining artisanal design with a "productized" approach, we eliminate the ambiguity of custom building.
                    </p>
<p className="text-stone-600 mb-8 leading-relaxed">
                        Select from our signature style palettes—tailored for Tri-State architecture in Westchester, Bergen, and Fairfield—and experience a fixed-labor, high-margin transformation that respects your time and your investment.
                    </p>
<div className="flex gap-8 border-t border-stone-100 pt-8">
<div>
<span className="block text-3xl font-semibold text-emerald-700">3</span>
<span className="text-xs text-stone-500 uppercase tracking-wide">Signature Palettes</span>
</div>
<div>
<span className="block text-3xl font-semibold text-emerald-700">8-12</span>
<span className="text-xs text-stone-500 uppercase tracking-wide">Weeks Turnaround</span>
</div>
</div>
</div>

<div className="md:col-span-7 relative pl-8 border-l border-stone-200 reveal delay-100">
<div className="space-y-12">

<div className="relative group">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-white border-4 border-emerald-500 group-hover:scale-125 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.4)] transition-all duration-300"></span>
<h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">01. Style Selection</h3>
<p className="text-stone-500 text-sm">Choose from our three signature aesthetic palettes or customize a hybrid look.</p>
</div>

<div className="relative group">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-stone-200 border-4 border-white group-hover:bg-white group-hover:border-emerald-500 group-hover:scale-125 transition-all duration-300"></span>
<h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">02. Precision Measurement</h3>
<p className="text-stone-500 text-sm">Our team conducts a technical site survey in your Westchester, Bergen, or Fairfield home.</p>
</div>

<div className="relative group">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-stone-200 border-4 border-white group-hover:bg-white group-hover:border-emerald-500 group-hover:scale-125 transition-all duration-300"></span>
<h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">03. Fixed-Quote Proposal</h3>
<p className="text-stone-500 text-sm">Receive a comprehensive bid covering labor and material allowances—no "estimate creep."</p>
</div>

<div className="relative group">
<span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-stone-200 border-4 border-white group-hover:bg-white group-hover:border-emerald-500 group-hover:scale-125 transition-all duration-300"></span>
<h3 className="text-lg font-medium text-stone-900 mb-2 group-hover:text-emerald-700 transition-colors">04. White-Glove Build</h3>
<p className="text-stone-500 text-sm">We manage all local permits and construction, delivering a chef-ready kitchen in 8–12 weeks.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 relative overflow-hidden" id="benefits">

<div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-emerald-600 font-medium tracking-wide text-sm uppercase mb-2 block">Why Choose Us</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">The Design-Build Advantage</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="reveal group bg-white rounded-xl p-8 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-emerald-700 mb-6 group-hover:bg-emerald-50 transition-colors">
<span className="iconify" data-icon="solar:wallet-money-linear" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Fixed Labor Pricing</h3>
<p className="text-sm text-stone-500 leading-relaxed">We eliminate the uncertainty of hourly billing, providing a clear financial roadmap.</p>
</div>

<div className="reveal delay-100 group bg-white rounded-xl p-8 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-emerald-700 mb-6 group-hover:bg-emerald-50 transition-colors">
<span className="iconify" data-icon="solar:document-add-linear" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Local Permit Expertise</h3>
<p className="text-sm text-stone-500 leading-relaxed">We navigate the complex building codes of NYC, Westchester, and Greenwich so you don’t have to.</p>
</div>

<div className="reveal delay-200 group bg-white rounded-xl p-8 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-emerald-700 mb-6 group-hover:bg-emerald-50 transition-colors">
<span className="iconify" data-icon="solar:box-minimalistic-linear" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Curated Material Accounts</h3>
<p className="text-sm text-stone-500 leading-relaxed">Access trade-only discounts on Sub-Zero, Wolf, and Miele through our procurement team.</p>
</div>

<div className="reveal delay-300 group bg-white rounded-xl p-8 border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="w-12 h-12 bg-stone-50 rounded-lg flex items-center justify-center text-emerald-700 mb-6 group-hover:bg-emerald-50 transition-colors">
<span className="iconify" data-icon="solar:users-group-two-rounded-linear" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-stone-900 mb-3">Design-Build Synergy</h3>
<p className="text-sm text-stone-500 leading-relaxed">One point of contact from the first sketch to the final backsplash tile.</p>
</div>
</div>
<div className="mt-16 text-center reveal">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors text-sm font-medium tracking-wide" href="/estimate">
                    Calculate Your Renovation
                    <span className="iconify" data-icon="solar:alt-arrow-right-linear" data-width="16"></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-stone-100" id="faq">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<span className="text-emerald-600 font-medium tracking-wide text-sm uppercase mb-2 block">Insights</span>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-8 reveal delay-100">
<div className="border-b border-stone-200 pb-8">
<h3 className="text-lg font-medium text-stone-900 mb-3">How long does a typical Tri-State kitchen renovation take?</h3>
<p className="text-stone-600 text-sm leading-relaxed">Most of our signature transformations are completed within 8 to 12 weeks once materials arrive on-site. We prioritize aggressive scheduling to minimize downtime in your home.</p>
</div>
<div className="border-b border-stone-200 pb-8">
<h3 className="text-lg font-medium text-stone-900 mb-3">Do you handle DOB permits in NYC or local board approvals in CT?</h3>
<p className="text-stone-600 text-sm leading-relaxed">Yes. Our team specializes in the specific bureaucratic requirements of Tri-State municipalities, from Manhattan Department of Buildings filings to Westchester local board variances.</p>
</div>
<div className="border-b border-stone-200 pb-8">
<h3 className="text-lg font-medium text-stone-900 mb-3">What is included in the "Standard, Premium, and Luxury" tiers?</h3>
<p className="text-stone-600 text-sm leading-relaxed">All tiers include full demolition and professional installation. "Luxury" adds bespoke cabinetry, premium stone imports (e.g., Calacatta Borghini), and integrated high-end appliance suites.</p>
</div>
<div className="border-b border-stone-200 pb-8">
<h3 className="text-lg font-medium text-stone-900 mb-3">Can I keep my current appliances?</h3>
<p className="text-stone-600 text-sm leading-relaxed">While we recommend a full integration for the best aesthetic result, our "Modern Minimalist" and "Industrial Loft" packages can be adapted to fit your existing high-end appliances.</p>
</div>
<div className="border-b border-stone-200 pb-8">
<h3 className="text-lg font-medium text-stone-900 mb-3">What areas do you serve specifically?</h3>
<p className="text-stone-600 text-sm leading-relaxed">We serve a 60-mile radius from Midtown Manhattan, including all five boroughs, Westchester, Nassau County, Bergen County, Hudson County, and Fairfield County.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-t border-stone-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-start">

<div className="reveal bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
<h2 className="text-2xl font-medium text-stone-900 mb-1">Your Signature Kitchen Awaits.</h2>
<p className="text-sm text-stone-500 mb-8">Take the first step toward a kitchen designed for your lifestyle and engineered for your home’s value.</p>
<form action="/estimate" className="space-y-6">
<div className="relative">
<input className="floating-input peer block w-full appearance-none rounded-lg border border-stone-300 bg-transparent px-4 py-3 text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-shadow" id="name" placeholder=" " type="text"/>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0" htmlFor="name">Your Name</label>
</div>
<div className="relative">
<input className="floating-input peer block w-full appearance-none rounded-lg border border-stone-300 bg-transparent px-4 py-3 text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-shadow" id="email" placeholder=" " type="email"/>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0" htmlFor="email">Email Address</label>
</div>
<div className="relative">
<select className="floating-input peer block w-full appearance-none rounded-lg border border-stone-300 bg-transparent px-4 py-3 text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-shadow" id="style">
<option disabled="" hidden="" selected="" value=""></option>
<option value="modern">Modern Minimalist</option>
<option value="coastal">Coastal Hamptons</option>
<option value="industrial">Industrial Loft</option>
<option value="custom">Custom Hybrid</option>
</select>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-90 text-stone-500 transition-transform duration-300 bg-white px-1 -top-[0.8rem]" htmlFor="style">Preferred Style</label>
</div>
<div className="relative">
<input className="floating-input peer block w-full appearance-none rounded-lg border border-stone-300 bg-transparent px-4 py-3 text-stone-900 focus:border-emerald-600 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_4px_rgba(16,185,129,0.1)] transition-shadow" id="zip" placeholder=" " type="text"/>
<label className="absolute left-4 top-3 z-10 origin-[0] -translate-y-0 scale-100 text-stone-500 transition-transform duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:scale-90 peer-focus:-translate-y-0" htmlFor="zip">Project Zip Code</label>
</div>
<button className="btn-robotic w-full py-4 bg-emerald-800 text-white rounded-lg font-medium hover:bg-emerald-900 transition-all flex justify-center items-center gap-2 group" type="submit">
                            Start Your Instant Estimate
                            <span className="iconify group-hover:translate-x-1 transition-transform" data-icon="solar:calculator-minimalistic-linear" data-width="16"></span>
</button>
</form>
</div>

<div className="reveal delay-100 flex flex-col h-full justify-between">
<div className="mb-8">
<h2 className="text-2xl font-medium text-stone-900 mb-6">Service Area</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-200/50 flex items-center justify-center text-emerald-700 shrink-0">
<span className="iconify" data-icon="solar:map-point-linear" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-stone-900">Midtown Manhattan HQ</h4>
<p className="text-sm text-stone-500 leading-relaxed mt-1">Serving a 60-mile radius across <br/>NYC, Westchester, Bergen, and Fairfield.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-stone-200/50 flex items-center justify-center text-emerald-700 shrink-0">
<span className="iconify" data-icon="solar:phone-linear" data-width="20"></span>
</div>
<div>
<h4 className="font-medium text-stone-900">Connect</h4>
<a className="text-sm text-stone-500 hover:text-emerald-700 transition-colors block mt-1" href="/contact">Schedule a Call</a>
<span className="text-sm text-stone-500 block">design@renovateyourkitchen.com</span>
</div>
</div>
</div>
</div>

<div className="w-full h-64 rounded-2xl overflow-hidden shadow-md border border-stone-200 relative group">
<div className="absolute inset-0 bg-emerald-900/10 pointer-events-none z-10 group-hover:bg-transparent transition-colors duration-500"></div>
<iframe allowfullscreen="" className="grayscale hover:grayscale-0 transition-all duration-700" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-emerald-700 rounded flex items-center justify-center text-white text-xs">R</div>
<span className="text-white font-medium tracking-tight">RENOVATE YOUR KITCHEN</span>
</div>
<p className="text-xs max-w-sm leading-relaxed text-stone-500">
                    The Tri-State’s premier design-build authority for high-end kitchen transformations. Bespoke craftsmanship meet streamlined execution in NY, NJ, and CT.
                </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Quick Links</h4>
<ul className="space-y-2 text-xs">
<li><a className="hover:text-emerald-400 transition-colors cursor-pointer" href="#styles">Style Collections</a></li>
<li><a className="hover:text-emerald-400 transition-colors cursor-pointer" href="#process">Our Process</a></li>
<li><a className="hover:text-emerald-400 transition-colors cursor-pointer" href="/estimate">Instant Estimate Tool</a></li>
<li><a className="hover:text-emerald-400 transition-colors cursor-pointer" href="/contact">Consultation</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal &amp; Licensing</h4>
<div className="space-y-2 text-xs text-stone-500">
<p>CT HIC #000000</p>
<p>NJ HIC #000000</p>
<p>NYC DCA #000000</p>
<p className="mt-4 pt-4 border-t border-stone-800">Fully licensed and insured design-build firm.</p>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center text-[0.65rem] uppercase tracking-wider text-stone-600 gap-4 text-center md:text-left">
<p>© 2026 RenovateYourKitchen.com. Tri-State Signature Kitchens. All kitchen designs are proprietary.</p>
<p>Elevated Living</p>
</div>
</footer>

    </>
  );
}
