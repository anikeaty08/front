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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl font-medium tracking-tighter uppercase text-black flex items-center gap-2" href="#">
        RB
      </a>

<div className="hidden md:flex items-center gap-8 text-sm font-normal text-gray-500">
<a className="hover:text-black transition-colors" href="#">Our Homes</a>
<a className="hover:text-black transition-colors" href="#">About Us</a>
<a className="hover:text-black transition-colors" href="#">Services</a>
<a className="hover:text-black transition-colors" href="#">News</a>
</div>

<div className="flex items-center gap-4 text-gray-600">
<button className="hidden md:flex items-center justify-center hover:text-black transition-colors">
<iconify-icon className="text-xl" icon="solar:magnifier-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<a className="hidden md:inline-block px-5 py-2.5 bg-black text-white text-xs uppercase tracking-widest font-medium rounded-full hover:bg-gray-800 transition-colors" href="#">
          Contact Us
        </a>
<button className="md:hidden flex items-center justify-center text-gray-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-[90vh] mt-20 bg-gray-100 flex items-end">

<div className="absolute inset-0 w-full h-full">
<img alt="Modern luxury home exterior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2000&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
<div className="max-w-2xl text-white">
<span className="block text-xs uppercase tracking-widest font-medium mb-4 opacity-80">Custom Architectural Design</span>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 leading-[1.1]">
          Defining modern luxury living.
        </h1>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors" href="#">
            Explore Designs
            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black mb-6">
        Award-winning custom homes, tailored to your lifestyle.
      </h2>
<p className="text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
        We specialize in creating bespoke architectural homes that reflect individuality. From initial concept to final handover, our dedicated team ensures an uncompromising commitment to quality and craftsmanship.
      </p>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl font-medium tracking-tight text-black mb-2">Featured Projects</h2>
<p className="text-sm text-gray-500 font-light">Discover our portfolio of recent builds.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-500 transition-colors" href="#">
          View all
          <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-[4/3] mb-4">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-black tracking-tight mb-1">The Alpine Pavilion</h3>
<p className="text-sm text-gray-500 font-light flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Queenstown
              </p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-[4/3] mb-4">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-black tracking-tight mb-1">Coastal Retreat</h3>
<p className="text-sm text-gray-500 font-light flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Bay of Plenty
              </p>
</div>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-gray-200 aspect-[4/3] mb-4">
<img alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-base font-medium text-black tracking-tight mb-1">Urban Oasis</h3>
<p className="text-sm text-gray-500 font-light flex items-center gap-1.5">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                Auckland
              </p>
</div>
</div>
</div>
</div>

<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center gap-2 text-sm font-medium text-black hover:text-gray-500 transition-colors" href="#">
          View all projects
          <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-4">A seamless build experience.</h2>
<p className="text-base text-gray-500 font-light">From the first sketch to the final key handover, our transparent process ensures you are informed and confident at every stage.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">

<div>
<div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-black">
<iconify-icon className="text-xl" icon="solar:pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-black tracking-tight mb-2">1. Consultation</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">We meet to understand your vision, lifestyle requirements, and site specifics to form the foundation of your design.</p>
</div>

<div>
<div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-black">
<iconify-icon className="text-xl" icon="solar:ruler-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-black tracking-tight mb-2">2. Concept &amp; Design</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">Our architects translate your ideas into detailed concepts, refining them until the layout and aesthetic are perfect.</p>
</div>

<div>
<div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-black">
<iconify-icon className="text-xl" icon="solar:hammer-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-black tracking-tight mb-2">3. Construction</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">With fixed-price contracts signed, our master builders bring the plans to life with uncompromising attention to detail.</p>
</div>

<div>
<div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mb-6 text-black">
<iconify-icon className="text-xl" icon="solar:key-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-black tracking-tight mb-2">4. Handover</h3>
<p className="text-sm text-gray-500 font-light leading-relaxed">After rigorous quality checks, we hand over the keys to your new home, complete with comprehensive guarantees.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-black mb-6">Why choose Rowberry Builders?</h2>
<p className="text-base text-gray-500 font-light mb-8 leading-relaxed">
            Building a custom home is one of the most significant investments you'll make. We provide certainty through national buying power combined with local, dedicated project management.
          </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="mt-1 text-black">
<iconify-icon className="text-xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-black mb-1">Architectural Excellence</h4>
<p className="text-sm text-gray-500 font-light">Award-winning designs that maximize natural light, flow, and integration with the landscape.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-black">
<iconify-icon className="text-xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-black mb-1">Fixed Price Contracts</h4>
<p className="text-sm text-gray-500 font-light">Complete transparency and peace of mind with our comprehensive fixed-price build contracts.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 text-black">
<iconify-icon className="text-xl" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-black mb-1">Master Builder Guarantee</h4>
<p className="text-sm text-gray-500 font-light">Every home is backed by an independent 10-year master build guarantee.</p>
</div>
</li>
</ul>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 pt-12">
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-200">
<img alt="Interior detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="space-y-4">
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-200">
<img alt="Exterior detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-gray-100">
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-4xl text-gray-300 mb-8" icon="solar:quote-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-black mb-10 leading-tight">
        "The team at Rowberry Builders took our abstract ideas and turned them into a stunning reality. The craftsmanship and attention to detail surpassed our highest expectations."
      </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img alt="Client portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
</div>
<div className="text-left">
<p className="text-sm font-medium text-black">James &amp; Sarah Mitchell</p>
<p className="text-xs text-gray-500 font-light">Waiheke Island Build</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6">
<div className="max-w-7xl mx-auto bg-black rounded-3xl p-12 md:p-24 text-center text-white relative overflow-hidden">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-white opacity-5 blur-3xl"></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Ready to start your journey?</h2>
<p className="text-base text-gray-400 font-light mb-10">
          Connect with your local Rowberry Builders team today and begin the conversation about your dream home.
        </p>
<a className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors" href="#">
          Speak with our team
          <iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="bg-gray-50 border-t border-gray-100 pt-20 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

<div className="lg:col-span-2">
<a className="text-xl font-medium tracking-tighter uppercase text-black flex items-center gap-2 mb-6" href="#">
            RB
          </a>
<p className="text-sm text-gray-500 font-light leading-relaxed max-w-sm mb-6">
            Setting the standard for luxury custom homes. We blend innovative architectural design with superior craftsmanship to build spaces that inspire.
          </p>
<div className="flex items-center gap-4 text-black">
<a className="hover:text-gray-600 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="hover:text-gray-600 transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-black mb-4">Our Homes</h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li><a className="hover:text-black transition-colors" href="#">Concept Designs</a></li>
<li><a className="hover:text-black transition-colors" href="#">Completed Projects</a></li>
<li><a className="hover:text-black transition-colors" href="#">House &amp; Land Packages</a></li>
<li><a className="hover:text-black transition-colors" href="#">Show Homes</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-black mb-4">Company</h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li><a className="hover:text-black transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-black transition-colors" href="#">Our Process</a></li>
<li><a className="hover:text-black transition-colors" href="#">Services</a></li>
<li><a className="hover:text-black transition-colors" href="#">Latest News</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-black mb-4">Support</h4>
<ul className="space-y-3 text-sm text-gray-500 font-light">
<li><a className="hover:text-black transition-colors" href="#">Consultation</a></li>
<li><a className="hover:text-black transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-black transition-colors" href="#">Brochure Request</a></li>
<li><a className="hover:text-black transition-colors" href="#">Master Builder Guarantee</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-400 font-light">
<div>
          © 2024 Rowberry Builders. All rights reserved.
        </div>
<div className="flex items-center gap-6">
<a className="hover:text-black transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-black transition-colors" href="#">Terms of Service</a>
<a className="hover:text-black transition-colors" href="#">Cookie Settings</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
