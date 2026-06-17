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
      

<div className="h-1 bg-red-700 w-full"></div>

<header className="bg-white border-b border-gray-200 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded flex items-center justify-center">
<iconify-icon className="text-white text-lg" icon="solar:health-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="tracking-tighter text-xl font-semibold uppercase text-black">VITALIS</span>
</div>

<nav className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-gray-900 border-b-2 border-red-700 py-5" href="#">Home</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300 py-5 transition-colors" href="#">About Us</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300 py-5 transition-colors" href="#">Services</a>

<div className="relative group flex items-center h-full">
<button className="text-sm font-medium text-gray-500 hover:text-gray-900 flex items-center gap-1 py-5 transition-colors">
                            Products
                            <iconify-icon className="text-gray-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300 py-5 transition-colors" href="#">Compliance</a>
<a className="text-sm font-medium text-gray-500 hover:text-gray-900 hover:border-b-2 hover:border-gray-300 py-5 transition-colors" href="#">Distribution</a>
</nav>

<div className="hidden md:flex items-center gap-6">

<div className="relative flex items-center gap-1 cursor-pointer group">
<iconify-icon className="text-gray-400 text-base" icon="solar:global-linear"></iconify-icon>
<span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 uppercase">EN</span>
<iconify-icon className="text-gray-400 text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
<a className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors" href="#">
                        Contact Us
                    </a>
</div>

<div className="flex items-center md:hidden">
<button className="text-gray-500 hover:text-gray-900 focus:outline-none" type="button">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative overflow-hidden bg-white">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-medium uppercase tracking-wide mb-6">
<span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
                            Leading Distribution in Jordan
                        </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl text-black tracking-tight leading-tight mb-6">
                            Precision Pharmaceutical Supply Chain
                        </h1>
<p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                            Connecting global manufacturers with local pharmacies and hospitals through secure, compliant, and temperature-controlled logistics networks.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 transition-all shadow-sm" href="#">
                                Partner With Us
                                <iconify-icon className="ml-2 text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-6 py-3 border border-gray-200 text-sm font-medium rounded-md text-black bg-white hover:bg-gray-50 transition-all shadow-sm" href="#">
                                View Our Services
                            </a>
</div>
</div>

<div className="relative w-full aspect-square lg:aspect-auto lg:h-[500px] flex items-center justify-center">
<div className="absolute inset-0 bg-gray-50 rounded-2xl border border-gray-100 shadow-inner flex items-center justify-center overflow-hidden">

<div className="absolute w-[150%] h-[150%] border-[0.5px] border-gray-200 rounded-full flex items-center justify-center opacity-50">
<div className="absolute w-[70%] h-[70%] border-[0.5px] border-gray-200 rounded-full flex items-center justify-center">
<div className="absolute w-[40%] h-[40%] border-[0.5px] border-gray-200 rounded-full bg-white shadow-sm"></div>
</div>
</div>

<div className="relative z-10 grid grid-cols-2 gap-4 w-3/4">
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3 transform translate-y-4">
<div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-700">
<iconify-icon className="text-xl" icon="solar:box-minimalistic-linear"></iconify-icon>
</div>
<div className="space-y-2">
<div className="h-2 w-1/2 bg-gray-200 rounded"></div>
<div className="h-2 w-full bg-gray-100 rounded"></div>
</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3 transform -translate-y-4">
<div className="w-8 h-8 rounded-lg bg-black flex items-center justify-center text-white">
<iconify-icon className="text-xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<div className="space-y-2">
<div className="h-2 w-2/3 bg-gray-200 rounded"></div>
<div className="h-2 w-full bg-gray-100 rounded"></div>
</div>
</div>
<div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-3 transform translate-x-4">
<div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-gray-700">
<iconify-icon className="text-xl" icon="solar:thermometer-linear"></iconify-icon>
</div>
<div className="space-y-2">
<div className="h-2 w-1/3 bg-gray-200 rounded"></div>
<div className="h-2 w-4/5 bg-gray-100 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-3xl tracking-tight text-black mb-1">100%</span>
<span className="text-xs text-gray-500 uppercase tracking-wide">GDP Compliant</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-3xl tracking-tight text-black mb-1">2,500+</span>
<span className="text-xs text-gray-500 uppercase tracking-wide">Pharmacies Reached</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-3xl tracking-tight text-black mb-1">48h</span>
<span className="text-xs text-gray-500 uppercase tracking-wide">Nationwide Delivery</span>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<span className="text-3xl tracking-tight text-black mb-1">24/7</span>
<span className="text-xs text-gray-500 uppercase tracking-wide">Temperature Monitoring</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-xs text-red-700 font-semibold uppercase tracking-widest mb-2">Our Expertise</h2>
<h3 className="text-3xl sm:text-4xl text-black tracking-tight mb-4">End-to-End Healthcare Logistics</h3>
<p className="text-base text-gray-600">
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Curabitur aliquet quam id dui posuere blandit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:border-red-100 group-hover:text-red-700 transition-colors text-black">
<iconify-icon className="text-2xl" icon="solar:cart-large-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-xl text-black tracking-tight mb-3">Strategic Procurement</h4>
<p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh.
                        </p>
<a className="inline-flex items-center text-sm font-medium text-black hover:text-red-700 transition-colors" href="#">
                            Explore purchasing <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:border-red-100 group-hover:text-red-700 transition-colors text-black">
<iconify-icon className="text-2xl" icon="solar:safe-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-xl text-black tracking-tight mb-3">Secure Storage</h4>
<p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Cras ultricies ligula sed magna dictum porta. Donec rutrum congue leo eget malesuada. Vestibulum ac diam sit amet quam.
                        </p>
<a className="inline-flex items-center text-sm font-medium text-black hover:text-red-700 transition-colors" href="#">
                            View warehousing <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition-shadow group">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-6 group-hover:bg-red-50 group-hover:border-red-100 group-hover:text-red-700 transition-colors text-black">
<iconify-icon className="text-2xl" icon="solar:delivery-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h4 className="text-xl text-black tracking-tight mb-3">Nationwide Distribution</h4>
<p className="text-sm text-gray-600 mb-6 leading-relaxed">
                            Proin eget tortor risus. Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed.
                        </p>
<a className="inline-flex items-center text-sm font-medium text-black hover:text-red-700 transition-colors" href="#">
                            Learn about transport <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black text-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="aspect-[4/3] rounded-2xl bg-gray-900 border border-gray-800 p-8 flex flex-col justify-between overflow-hidden relative">
<div className="absolute top-0 right-0 w-64 h-64 bg-red-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
<div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-6">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-mono text-gray-400">SYS_STATUS: OPTIMAL</span>
</div>
<iconify-icon className="text-gray-500 text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="space-y-4">
<div className="flex justify-between text-sm">
<span className="text-gray-400">Cold Chain Integrity</span>
<span className="text-white">99.98%</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-1.5">
<div className="bg-white h-1.5 rounded-full" style={{width: '99.98%'}}></div>
</div>
<div className="flex justify-between text-sm pt-4">
<span className="text-gray-400">Audit Compliance</span>
<span className="text-white">Passed (Q3)</span>
</div>
<div className="w-full bg-gray-800 rounded-full h-1.5">
<div className="bg-red-700 h-1.5 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
<div className="mt-8 pt-6 border-t border-gray-800 flex items-center gap-4">
<div className="w-10 h-10 rounded bg-gray-800 flex items-center justify-center text-gray-400">
<iconify-icon className="text-xl" icon="solar:document-text-linear"></iconify-icon>
</div>
<div>
<div className="text-sm text-white">Latest GDP Audit Report</div>
<div className="text-xs text-gray-500">Generated 2 days ago</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-xs text-red-500 font-semibold uppercase tracking-widest mb-2">Uncompromising Standards</h2>
<h3 className="text-3xl sm:text-4xl text-white tracking-tight mb-6">Healthcare standards are non-negotiable.</h3>
<p className="text-base text-gray-400 mb-8 leading-relaxed">
                            Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.
                        </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-300">Pellentesque in ipsum id orci porta dapibus.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-300">Curabitur arcu erat, accumsan id imperdiet et.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-red-500 text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm text-gray-300">Vestibulum ac diam sit amet quam vehicula elementum.</span>
</li>
</ul>
<a className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-sm font-medium rounded-md text-white bg-transparent hover:bg-gray-900 transition-colors" href="#">
                            Read our Compliance Framework
                        </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-gray-200">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h2 className="text-3xl sm:text-4xl text-black tracking-tight mb-6">Ready to secure your supply chain?</h2>
<p className="text-lg text-gray-600 mb-10">
                    Nulla quis lorem ut libero malesuada feugiat. Sed porttitor lectus nibh. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 transition-colors" href="#">
                        Contact Sales
                    </a>
<a className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 text-sm font-medium rounded-md text-black bg-white hover:bg-gray-50 transition-colors" href="#">
                        Browse Product Catalog
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center">
<iconify-icon className="text-white text-sm" icon="solar:health-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="tracking-tighter text-lg font-semibold uppercase text-black">VITALIS</span>
</div>
<p className="text-xs text-gray-500 leading-relaxed mb-6">
                        Ensuring the continuous and secure flow of vital healthcare products across Jordan.
                    </p>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-black transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:point-on-map-linear"></iconify-icon>
</a>
<a className="text-gray-400 hover:text-black transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-xs font-semibold text-black uppercase tracking-wider mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Careers</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Compliance</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-black uppercase tracking-wider mb-4">Solutions</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">For Pharmacies</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">For Hospitals</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Warehousing</a></li>
<li><a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Cold Chain Logistics</a></li>
</ul>
</div>

<div>
<h4 className="text-xs font-semibold text-black uppercase tracking-wider mb-4">Amman Office</h4>
<address className="not-italic text-sm text-gray-500 space-y-3">
<p>123 Medical Logistics Park<br/>Amman, Jordan 11118</p>
<p className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
                            +962 6 123 4567
                        </p>
<p className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
                            info@vitalis-jo.com
                        </p>
</address>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">
                    © 2024 Vitalis Logistics. All rights reserved.
                </p>
<div className="flex gap-6">
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Privacy Policy</a>
<a className="text-xs text-gray-400 hover:text-gray-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
