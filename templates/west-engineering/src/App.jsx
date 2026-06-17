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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="flex text-white bg-sky-600 w-8 h-8 rounded items-center justify-center">
<span className="text-lg font-semibold tracking-tighter">W</span>
</div>
<span className="font-semibold text-slate-900 tracking-tight text-lg group-hover:text-sky-600 transition-colors">WEST ENGINEERING</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#products">Products</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#news">News</a>
<a className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded transition-all shadow-sm hover:shadow-md" href="#contact">
                    Contact Us
                </a>
</div>

<button className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute inset-0 bg-grid -z-10 h-full w-full"></div>
<div className="absolute top-0 right-0 -z-10 opacity-30">
<svg fill="none" height="600" viewbox="0 0 600 600" width="600" xmlns="http://www.w3.org/2000/svg">
<circle cx="400" cy="200" fill="url(#paint0_radial_hero)" r="300"></circle>
<defs>
<radialgradient cx="0" cy="0" gradienttransform="translate(400 200) rotate(90) scale(300)" gradientunits="userSpaceOnUse" id="paint0_radial_hero" r="1">
<stop stop-color="#bae6fd"></stop>
<stop offset="1" stop-color="white" stop-opacity="0"></stop>
</radialgradient>
</defs>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-xs font-medium mb-6">
<iconify-icon icon="solar:verified-check-linear"></iconify-icon>
                    Est. Ipswich Engineering
                </div>
<h1 className="lg:text-6xl leading-[1.1] text-5xl font-semibold text-slate-900 tracking-tight mb-6">
                    Precision Metal <br/> <span className="text-slate-400">Engineering &amp; Fabrication</span>
</h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-2xl mb-8">
                    We are a long-established Ipswich company and one of the region’s leading manufacturers of spiral ductwork and fittings. Serving oil, agricultural, and industrial markets.
                </p>
<div className="flex flex-wrap gap-4">
<a className="bg-sky-600 hover:bg-sky-500 text-white text-sm font-medium px-6 py-3 rounded transition-all shadow-sm flex items-center gap-2" href="#contact">
                        Get a Quote
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white border border-slate-200 text-slate-700 hover:border-slate-300 text-sm font-medium px-6 py-3 rounded transition-all flex items-center gap-2" href="#products">
                        View Products
                    </a>
</div>
</div>
</div>
</header>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Our Capabilities</h2>
<p className="text-slate-500 text-sm max-w-md">Comprehensive engineering solutions from light fabrication to heavy industrial piling casings.</p>
</div>
<a className="text-sky-600 text-sm font-medium hover:text-sky-700 flex items-center gap-1" href="#contact">
                    Download Brochure <iconify-icon icon="solar:file-download-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5 transition-all group">
<div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center text-slate-600 mb-4 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Sheet Metal Fabrication</h3>
<p className="text-xs text-slate-500 leading-relaxed">Precision cutting, bending, and assembling of sheet metal structures.</p>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5 transition-all group">
<div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center text-slate-600 mb-4 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
<iconify-icon icon="solar:infinity-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Spiral Ductwork</h3>
<p className="text-xs text-slate-500 leading-relaxed">Region's leading manufacturer of spirally welded tubes and fittings.</p>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5 transition-all group">
<div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center text-slate-600 mb-4 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
<iconify-icon icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Laser Cutting</h3>
<p className="text-xs text-slate-500 leading-relaxed">High-precision laser cutting for complex geometries and tight tolerances.</p>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5 transition-all group">
<div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center text-slate-600 mb-4 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
<iconify-icon icon="solar:bonfire-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Coded Welding</h3>
<p className="text-xs text-slate-500 leading-relaxed">Certified welding services ensuring structural integrity and safety.</p>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5 transition-all group">
<div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center text-slate-600 mb-4 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
<iconify-icon icon="solar:sort-vertical-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Piling Casings</h3>
<p className="text-xs text-slate-500 leading-relaxed">Heavy fabrication for foundational structural support.</p>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5 transition-all group">
<div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center text-slate-600 mb-4 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Agricultural</h3>
<p className="text-xs text-slate-500 leading-relaxed">Crop aeration systems and specialized agricultural framing.</p>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5 transition-all group">
<div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center text-slate-600 mb-4 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
<iconify-icon icon="solar:wind-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Rectangular Ductwork</h3>
<p className="text-xs text-slate-500 leading-relaxed">Custom fittings and rectangular ducts for HVAC and industrial use.</p>
</div>

<div className="bg-white p-6 rounded-lg border border-slate-200 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-500/5 transition-all group">
<div className="w-10 h-10 bg-slate-50 rounded flex items-center justify-center text-slate-600 mb-4 group-hover:bg-sky-50 group-hover:text-sky-600 transition-colors">
<iconify-icon icon="solar:home-angle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2">Building Frames</h3>
<p className="text-xs text-slate-500 leading-relaxed">Conservatory frames, WESLOC systems and heavy fabrication.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-sky-100 rounded-full blur-2xl opacity-50"></div>
<div className="relative bg-slate-50 rounded-2xl border border-slate-200 p-8">
<h4 className="text-sky-600 font-medium tracking-tight mb-2 flex items-center gap-2">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon> Onwards and Upwards
                        </h4>
<h3 className="text-2xl font-semibold text-slate-900 mb-6 tracking-tight">Investing in Quality &amp; Continuity</h3>
<div className="space-y-4 text-sm text-slate-600 leading-relaxed">
<p>
                                To increase production quality, Dale assisted the company to buy new <span className="text-slate-900 font-medium">plasma cutting equipment</span>, as well as two new perforating machines to keep up with the demand for pipes for the oil industry and agricultural markets.
                            </p>
<p>
                                To ensure business continuity, the company secured the future by purchasing the building previously occupied on a leasehold basis, solidifying our commitment to Ipswich.
                            </p>
</div>
</div>
</div>
<div>
<div className="flex items-start gap-4 mb-6">
<div className="p-3 bg-slate-100 rounded-lg text-slate-600">
<iconify-icon icon="solar:shop-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">Trade Counter Open</h3>
<p className="text-sm text-slate-500">We welcome all types of trade here at West Engineering! From general public to industrial contractors.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-3 bg-slate-100 rounded-lg text-slate-600">
<iconify-icon icon="solar:medal-star-linear" width="28"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-semibold text-slate-900 mb-1">No Job Too Big or Small</h3>
<p className="text-sm text-slate-500">From single custom parts to large scale production runs, we handle it all with precision.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 space-y-8">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Contact Us</h2>
<p className="text-slate-500 text-sm mb-6">Fill in the form and a member of our team will contact you shortly.</p>
</div>
<div className="space-y-6">
<div className="flex items-start gap-3">
<iconify-icon className="text-sky-600 mt-1" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Phone</p>
<p className="text-slate-900 font-medium">01473 467930</p>
<p className="text-xs text-slate-400 mt-1">Calls may be monitored or recorded</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-sky-600 mt-1" icon="solar:clock-circle-linear" width="20"></iconify-icon>
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Opening Hours</p>
<p className="text-sm text-slate-700"><span className="font-medium text-slate-900">Mon-Thu:</span> 08:30-17:00</p>
<p className="text-sm text-slate-700"><span className="font-medium text-slate-900">Friday:</span> 08:30-16:00</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-sky-600 mt-1" icon="solar:map-point-linear" width="20"></iconify-icon>
<div>
<p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-1">Address</p>
<p className="text-sm text-slate-700">6 Olympus Close,Whitehouse Industrial Estate,Ipswich, IP1 5LN</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<form className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
<div className="grid md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700" htmlFor="name">Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700" htmlFor="email">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400" id="email" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2 mb-6">
<label className="text-xs font-medium text-slate-700" htmlFor="tel">Tel</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400" id="tel" placeholder="01234 567890" type="tel"/>
</div>
<div className="space-y-2 mb-8">
<label className="text-xs font-medium text-slate-700" htmlFor="message">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-md px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all placeholder:text-slate-400 resize-none" id="message" placeholder="How can we help you?" rows="4"></textarea>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">

<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-sky-600"></div>
<span className="ml-3 text-xs text-slate-500">Subscribe to newsletter</span>
</label>
</div>
<button className="bg-slate-900 text-white text-sm font-medium px-6 py-2.5 rounded hover:bg-slate-800 transition-colors" type="button">
                                Submit Request
                            </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-sky-600 rounded flex items-center justify-center text-white text-xs">W</div>
<span className="font-semibold text-slate-900 tracking-tight">WEST ENGINEERING</span>
</div>
<p className="text-xs text-slate-500 leading-relaxed max-w-xs mb-6">
                        Premium metal fabrication and engineering solutions in Ipswich. Dedicated to quality, precision, and customer service.
                    </p>
<div className="flex gap-4 text-slate-400">
<iconify-icon className="hover:text-sky-600 cursor-pointer transition-colors" icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-sky-600 cursor-pointer transition-colors" icon="solar:brand-twitter-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-sky-600 cursor-pointer transition-colors" icon="solar:brand-facebook-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-sky-600 transition-colors" href="#">Home</a></li>
<li><a className="text-xs text-slate-500 hover:text-sky-600 transition-colors" href="#">About Us</a></li>
<li><a className="text-xs text-slate-500 hover:text-sky-600 transition-colors" href="#">Careers</a></li>
<li><a className="text-xs text-slate-500 hover:text-sky-600 transition-colors" href="#">Testimonials</a></li>
<li><a className="text-xs text-slate-500 hover:text-sky-600 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-sky-600 transition-colors" href="#">Downloads</a></li>
<li><a className="text-xs text-slate-500 hover:text-sky-600 transition-colors" href="#">Account Application</a></li>
<li><a className="text-xs text-slate-500 hover:text-sky-600 transition-colors" href="#">News/Blog</a></li>
<li><a className="text-xs text-slate-500 hover:text-sky-600 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 text-sm mb-4">Products</h4>
<ul className="space-y-3">
<li><a className="text-xs text-slate-500 hover:text-sky-600 transition-colors" href="#">Laser Cutting</a></li>
<li><a className="text-xs text-slate-500 hover:text-sky-600 transition-colors" href="#">Spiral Ductwork</a></li>
<li><a className="text-xs text-slate-500 hover:text-sky-600 transition-colors" href="#">Fabrication</a></li>
<li><a className="text-xs text-slate-500 hover:text-sky-600 transition-colors" href="#">Helix Weld</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-slate-400">© 2023 West Engineering. All rights reserved.</p>
<p className="text-xs text-slate-400">Designed and created by it'seeze</p>
</div>
</div>
</footer>

    </>
  );
}
