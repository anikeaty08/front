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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-neutral-900" href="#">
                CIMENZA
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#systems">Systems</a>
<a className="hover:text-neutral-900 transition-colors" href="#about">About</a>
<a className="hover:text-neutral-900 transition-colors" href="#advantages">Distributors</a>
<a className="hover:text-neutral-900 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-neutral-900 rounded hover:bg-neutral-800 transition-all" href="#contact">
                    Partner Access
                </a>
<button className="md:hidden text-neutral-900">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl fade-up" style={{animationDelay: '0.1s'}}>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-neutral-900 leading-[1.1] mb-6">
                    Professional grade <br/>
<span className="text-neutral-400">microcement systems.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-xl leading-relaxed mb-8 font-normal">
                    High-performance mineral finishes developed for distribution. Consistent quality, technical reliability, and a system-based approach for professionals.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-neutral-900 rounded hover:bg-neutral-800 transition-all focus:ring-2 focus:ring-offset-2 focus:ring-neutral-900" href="#systems">
                        Explore Systems
                    </a>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-neutral-900 bg-white border border-neutral-200 rounded hover:bg-neutral-50 transition-all" href="#contact">
                        Become a Partner
                    </a>
</div>
</div>
</div>

<div className="mt-20 max-w-[95%] mx-auto h-[400px] md:h-[600px] bg-neutral-100 rounded-lg overflow-hidden fade-up relative" style={{animationDelay: '0.3s'}}>
<img alt="Cimenza Microcement Surface" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1596238356162-8c171350a256?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>
</header>

<section className="py-24 bg-white px-6" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-2 block">About Cimenza</span>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
                    Precision engineered for <br/> long-term partnerships.
                </h2>
<div className="space-y-6 text-neutral-500 leading-relaxed">
<p>
                        Cimenza develops and supplies high-performance microcement systems explicitly for professional use. We move beyond aesthetics to focus on product consistency and technical reliability.
                    </p>
<p>
                        Our mission is to support distributors with a complete, ready-to-use concept that ensures uniform results from the first layer to the final seal. We build our brand on the foundation of robust distribution partnerships.
                    </p>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-[3/4] bg-neutral-100 rounded overflow-hidden">
<img alt="Texture detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1620626011761-996317b8d101?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-[3/4] bg-neutral-100 rounded overflow-hidden mt-12">
<img alt="Minimalist interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-y border-neutral-100 px-6" id="systems">
<div className="max-w-7xl mx-auto">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-4">Complete Microcement Systems</h2>
<p className="text-neutral-500">
                    Cimenza is a seamless, mineral-based finishing system designed for a wide range of professional applications. It is a carefully composed concept supporting your project from substrate to sealer.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group p-6 bg-white rounded border border-neutral-200 hover:border-neutral-300 transition-colors">
<div className="w-10 h-10 flex items-center justify-center bg-neutral-50 rounded mb-4 text-neutral-900">
<iconify-icon icon="lucide:maximize" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-neutral-900 mb-2">Seamless Finish</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Continuous, elegant surfaces without joints, creating a unified spatial aesthetic.
                    </p>
</div>

<div className="group p-6 bg-white rounded border border-neutral-200 hover:border-neutral-300 transition-colors">
<div className="w-10 h-10 flex items-center justify-center bg-neutral-50 rounded mb-4 text-neutral-900">
<iconify-icon icon="lucide:droplets" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-neutral-900 mb-2">Durable &amp; Water-resistant</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Engineered to withstand daily wear and moisture, suitable for bathrooms and kitchens.
                    </p>
</div>

<div className="group p-6 bg-white rounded border border-neutral-200 hover:border-neutral-300 transition-colors">
<div className="w-10 h-10 flex items-center justify-center bg-neutral-50 rounded mb-4 text-neutral-900">
<iconify-icon icon="lucide:layers" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-neutral-900 mb-2">Versatile Compatibility</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Excellent adhesion allows application over tiles, concrete, screed, and plaster.
                    </p>
</div>

<div className="group p-6 bg-white rounded border border-neutral-200 hover:border-neutral-300 transition-colors">
<div className="w-10 h-10 flex items-center justify-center bg-neutral-50 rounded mb-4 text-neutral-900">
<iconify-icon icon="lucide:palette" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-neutral-900 mb-2">Curated Textures</h3>
<p className="text-xs text-neutral-500 leading-relaxed">
                        A broad range of authentic concrete looks, factory-tinted for absolute precision.
                    </p>
</div>
</div>
<div className="mt-12">
<a className="text-sm font-medium text-neutral-900 hover:text-neutral-600 flex items-center gap-2" href="#contact">
                    Request technical data sheets <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-2 block">Innovation</span>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-6">
                        The Ready-Mix Advantage.
                    </h2>
<p className="text-neutral-500 mb-8 leading-relaxed">
                        At Cimenza, we go one step further. We offer a premium-quality ready-mix microcement, supplied in an exclusive colour palette and factory-tinted via a professional mixing machine. No weighing, no manual colouring, no waste.
                    </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-neutral-900" icon="lucide:check-circle-2" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900">Colour Consistency Guaranteed</h4>
<p className="text-sm text-neutral-500 mt-1">Machine-tinted batches eliminate variation. Every bucket delivers the exact same tone, ensuring uniform results across large projects.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-neutral-900" icon="lucide:timer" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900">Maximum Productivity</h4>
<p className="text-sm text-neutral-500 mt-1">Delivered ready in the bucket. Work faster and cleaner without measuring water or powders. Usable for up to one year.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-neutral-900" icon="lucide:leaf" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-neutral-900">Eco-Friendly &amp; Sustainable</h4>
<p className="text-sm text-neutral-500 mt-1">Developed with sustainability in mind. A green product formulation offering an ecological solution for modern construction.</p>
</div>
</div>
</div>
</div>
<div className="bg-neutral-100 rounded p-8 lg:p-12 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-200 to-neutral-100"></div>
<h3 className="text-lg font-semibold text-neutral-900 mb-6">System Components</h3>
<ul className="space-y-4">
<li className="flex items-center justify-between p-4 bg-white rounded border border-neutral-200/50 shadow-sm">
<span className="text-sm font-medium text-neutral-700">1. Primer adhesion layer</span>
<iconify-icon className="text-neutral-300" icon="lucide:arrow-down"></iconify-icon>
</li>
<li className="flex items-center justify-between p-4 bg-white rounded border border-neutral-200/50 shadow-sm">
<span className="text-sm font-medium text-neutral-700">2. Cimenza Base (Ready-mix)</span>
<iconify-icon className="text-neutral-300" icon="lucide:arrow-down"></iconify-icon>
</li>
<li className="flex items-center justify-between p-4 bg-white rounded border border-neutral-200/50 shadow-sm">
<span className="text-sm font-medium text-neutral-700">3. Cimenza Finish (Ready-mix)</span>
<iconify-icon className="text-neutral-300" icon="lucide:arrow-down"></iconify-icon>
</li>
<li className="flex items-center justify-between p-4 bg-white rounded border border-neutral-200/50 shadow-sm">
<span className="text-sm font-medium text-neutral-700">4. Protective Sealer PU</span>
<iconify-icon className="text-neutral-900" icon="lucide:shield-check"></iconify-icon>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white px-6" id="advantages">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Why Partner With Us?</h2>
<p className="text-neutral-400 max-w-2xl">
                    We offer structured distribution adapted to professional needs. We provide the best quality for competitive prices, ensuring value for our partners.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded border border-neutral-800 bg-neutral-800/30 hover:bg-neutral-800/50 transition-colors">
<iconify-icon className="text-white mb-4" icon="lucide:award" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Stable Performance</h3>
<p className="text-xs text-neutral-400">Each system is developed to ensure consistent quality and reliable results across every batch.</p>
</div>
<div className="p-6 rounded border border-neutral-800 bg-neutral-800/30 hover:bg-neutral-800/50 transition-colors">
<iconify-icon className="text-white mb-4" icon="lucide:box" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">System-Based</h3>
<p className="text-xs text-neutral-400">Primers, layers, and sealers are chemically engineered to work together as one complete unit.</p>
</div>
<div className="p-6 rounded border border-neutral-800 bg-neutral-800/30 hover:bg-neutral-800/50 transition-colors">
<iconify-icon className="text-white mb-4" icon="lucide:file-text" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Technical Support</h3>
<p className="text-xs text-neutral-400">Clear technical files, documentation, and expert support available for professional partners.</p>
</div>
<div className="p-6 rounded border border-neutral-800 bg-neutral-800/30 hover:bg-neutral-800/50 transition-colors">
<iconify-icon className="text-white mb-4" icon="lucide:truck" width="24"></iconify-icon>
<h3 className="text-sm font-medium text-white mb-2">Reliable Logistics</h3>
<p className="text-xs text-neutral-400">Efficient supply chain management designed to meet the demands of professional distribution.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-12 text-center">Aesthetic Potential</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="h-64 md:h-80 bg-neutral-100 rounded overflow-hidden">
<img alt="Kitchen application" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556912173-3db996ea0662?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-64 md:h-80 bg-neutral-100 rounded overflow-hidden">
<img alt="Texture closeup" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&amp;w=2676&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-64 md:h-80 bg-neutral-100 rounded overflow-hidden">
<img alt="Bathroom application" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-neutral-50 border-t border-neutral-100" id="contact">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl font-semibold tracking-tighter text-neutral-900 mb-6">Interested in working with Cimenza?</h2>
<p className="text-neutral-500 mb-10 text-lg">
                We are looking for dedicated distributors to represent our high-performance systems. Contact us for pricing and partnership opportunities.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 text-sm font-medium text-white bg-neutral-900 rounded hover:bg-neutral-800 transition-all" href="mailto:contact@cimenza.com">
                    Contact Us
                </a>
<a className="w-full sm:w-auto px-8 py-3 text-sm font-medium text-neutral-900 bg-white border border-neutral-200 rounded hover:bg-neutral-100 transition-all" href="#">
                    Download Technical Files
                </a>
</div>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-xl font-semibold tracking-tighter text-neutral-900">
                CIMENZA
            </div>
<div className="flex gap-8 text-xs font-medium text-neutral-500">
<a className="hover:text-neutral-900" href="#">Privacy Policy</a>
<a className="hover:text-neutral-900" href="#">Terms of Service</a>
<a className="hover:text-neutral-900" href="#">Distributor Login</a>
</div>
<div className="text-xs text-neutral-400">
                © 2023 Cimenza Systems. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
