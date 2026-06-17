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
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-200/60">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex-shrink-0 flex items-center">
<a className="text-xl font-semibold tracking-tighter text-neutral-900" href="#">
                        kiara.
                    </a>
</div>
<div className="hidden md:flex space-x-8">
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#experience">Experience</a>
<a className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#stylists">Stylists</a>
</div>
<div className="flex items-center">
<a className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900" href="#book">
                        Book Appointment
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/60 mb-6">
<span className="flex h-2 w-2 rounded-full bg-green-500"></span>
<span className="text-xs font-medium text-neutral-600">Accepting new clients</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-900 leading-[1.1] mb-6">
                        Refined beauty, <br className="hidden sm:block"/> elevated for you.
                    </h1>
<p className="text-lg text-neutral-500 mb-8 max-w-lg leading-relaxed">
                        Step into a sanctuary of modern aesthetics and expert care. Kiara Saloon offers bespoke styling, treatments, and a moment of pure tranquility.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-neutral-900 rounded-full hover:bg-neutral-800 transition-all shadow-sm" href="#book">
                            Explore Services
                        </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-neutral-700 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 transition-all" href="#contact">
                            View Gallery
                        </a>
</div>
</div>
<div className="relative lg:ml-auto w-full max-w-lg aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200/50">
<img alt="Saloon Interior" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-t border-neutral-200/60" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Curated Treatments</h2>
<p className="text-base text-neutral-500">Designed to enhance your natural features using premium, sustainable products.</p>
</div>
<a className="text-sm font-medium text-neutral-900 hover:text-neutral-600 inline-flex items-center gap-1 transition-colors" href="#all-services">
                    View full menu
                    <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group relative bg-white rounded-2xl p-8 border border-neutral-200/60 hover:shadow-xl hover:shadow-neutral-200/40 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-100 mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors text-neutral-700">
<iconify-icon height="24" icon="solar:scissors-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">Precision Cut &amp; Style</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">Bespoke haircuts tailored to your face shape, lifestyle, and hair texture by our master stylists.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-neutral-900">From $85</span>
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
<iconify-icon height="18" icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-white rounded-2xl p-8 border border-neutral-200/60 hover:shadow-xl hover:shadow-neutral-200/40 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-100 mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors text-neutral-700">
<iconify-icon height="24" icon="solar:palette-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">Color &amp; Highlights</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">Advanced coloring techniques, from subtle balayage to complete transformations using holistic dyes.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-neutral-900">From $120</span>
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
<iconify-icon height="18" icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
</div>

<div className="group relative bg-white rounded-2xl p-8 border border-neutral-200/60 hover:shadow-xl hover:shadow-neutral-200/40 hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-neutral-50 rounded-xl flex items-center justify-center border border-neutral-100 mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors text-neutral-700">
<iconify-icon height="24" icon="solar:hand-stars-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-neutral-900 mb-2">Spa Manicure &amp; Pedicure</h3>
<p className="text-sm text-neutral-500 mb-6 leading-relaxed">Relaxing nail care featuring exfoliating scrubs, hydration masks, and flawless polish application.</p>
<div className="flex items-center justify-between mt-auto">
<span className="text-sm font-medium text-neutral-900">From $45</span>
<button className="w-8 h-8 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-500 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-all">
<iconify-icon height="18" icon="solar:add-linear" width="18"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="experience">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 grid grid-cols-2 gap-4">
<img alt="Detail shot" className="w-full h-64 object-cover rounded-2xl rounded-tr-[4rem]" src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&amp;w=1738&amp;auto=format&amp;fit=crop"/>
<img alt="Products" className="w-full h-64 object-cover rounded-2xl rounded-bl-[4rem] mt-8" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&amp;w=1740&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-6">More than an appointment.<br/> An experience.</h2>
<p className="text-base text-neutral-500 mb-8 leading-relaxed">
                        At Kiara, we believe your time is precious. Our space is meticulously designed to provide a calming escape from the city. We partner exclusively with sustainable, cruelty-free brands that deliver uncompromising results without harsh chemicals.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-neutral-600">Complimentary artisanal beverages during your visit.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-neutral-600">Private suites available for extended treatments.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-900 mt-0.5" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="text-sm text-neutral-600">Personalized product prescriptions for home care.</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 border-b border-neutral-900 pb-0.5 hover:text-neutral-600 hover:border-neutral-600 transition-colors" href="#about">
                        Discover our story
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-2xl font-semibold tracking-tighter text-white mb-6 inline-block" href="#">
                        kiara.
                    </a>
<p className="text-sm text-neutral-400 max-w-xs mb-8">
                        Elevating standards in modern hairdressing and aesthetic care.
                    </p>
<div className="flex space-x-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#">
<iconify-icon height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-100 uppercase tracking-wider mb-4">Saloon</h4>
<ul className="space-y-3">
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Stylists</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Products</a></li>
<li><a className="text-sm text-neutral-400 hover:text-white transition-colors" href="#">Gift Cards</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-100 uppercase tracking-wider mb-4">Visit Us</h4>
<ul className="space-y-3">
<li className="text-sm text-neutral-400">124 Beauty Avenue</li>
<li className="text-sm text-neutral-400">Design District, NY 10012</li>
<li className="text-sm text-neutral-400 mt-4">hello@kiarasaloon.com</li>
<li className="text-sm text-neutral-400">+1 (555) 123-4567</li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-neutral-100 uppercase tracking-wider mb-4">Hours</h4>
<ul className="space-y-3">
<li className="text-sm text-neutral-400 flex justify-between"><span>Mon - Fri</span> <span>9am - 8pm</span></li>
<li className="text-sm text-neutral-400 flex justify-between"><span>Saturday</span> <span>10am - 6pm</span></li>
<li className="text-sm text-neutral-400 flex justify-between"><span>Sunday</span> <span>Closed</span></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-500">© 2024 Kiara Saloon. All rights reserved.</p>
<div className="flex space-x-6">
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Privacy</a>
<a className="text-xs text-neutral-500 hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
