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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-green-900 rounded-lg flex items-center justify-center text-white font-serif font-bold text-lg">N</div>
<span className="font-serif font-semibold text-xl tracking-tight text-stone-900">Naseer Paper Mill</span>
</div>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
<a className="hover:text-green-800 transition-colors" href="#products">Products</a>
<a className="hover:text-green-800 transition-colors" href="#gallery">Machinery</a>
<a className="hover:text-green-800 transition-colors" href="#process">Process</a>
<a className="hover:text-green-800 transition-colors" href="#global">Global Reach</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-stone-900 font-medium text-sm hover:opacity-80" href="#contact">Log In</a>
<a className="bg-stone-900 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/10" href="#contact">
                        Request Samples
                    </a>
</div>

<div className="md:hidden">
<button className="text-stone-600 hover:text-stone-900">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="pt-32 pb-10 lg:pt-48 bg-stone-50 overflow-hidden relative">
<div className="absolute inset-0 z-0 opacity-30">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-200/50 to-transparent"></div>
<div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-4xl mx-auto mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-800 text-xs font-medium mb-8">
<span className="flex h-2 w-2 rounded-full bg-green-600"></span>
                    Exporting to 25+ Countries
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-stone-900 mb-6 leading-[1.1]">
                    Premium Craft Paper from <br/>
<span className="text-gradient">Pakistan to the World</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Where generations of traditional papermaking expertise meet modern ISO manufacturing standards. Sustainable, durable, and distinctly crafted for packaging and art.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-green-900 text-white rounded-xl font-medium text-sm hover:bg-green-800 transition-all shadow-xl shadow-green-900/20 flex items-center justify-center gap-2 group" href="#products">
                        View Catalog
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white border border-stone-200 text-stone-700 rounded-xl font-medium text-sm hover:bg-stone-50 transition-all flex items-center justify-center gap-2" href="#contact">
<iconify-icon icon="lucide:package-open"></iconify-icon>
                        Order Sample Kit
                    </a>
</div>
</div>

<div className="relative w-full h-[300px] md:h-[500px] rounded-t-3xl overflow-hidden shadow-2xl shadow-stone-300/50 border-t border-x border-stone-200">
<div className="absolute inset-0 bg-stone-900/10 z-10"></div>
<img alt="Large Paper Mill Roll" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1605518216965-7bc81f4b9897?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 z-20 hidden md:block">
<div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-stone-200/50 flex items-center gap-4">
<div className="h-12 w-12 rounded-lg bg-stone-100 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1616627561950-9f848270438a?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-xs text-stone-500 font-medium uppercase tracking-wider">Daily Output</div>
<div className="text-stone-900 font-bold">45 Metric Tonnes</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-stone-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:scroll" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">Heritage Craftsmanship</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        Rooted in Lahore's historic paper markets, utilizing techniques passed down through four generations tailored for modern resilience.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 rounded-lg bg-green-100 text-green-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:leaf" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">Sustainable Production</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        100% recycled cotton pulp and agricultural by-products. Our zero-waste water filtration system sets a new industry standard.
                    </p>
</div>

<div className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg transition-shadow duration-300 group">
<div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:globe-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-stone-900 mb-3 tracking-tight">Seamless Global Export</h3>
<p className="text-stone-500 text-sm leading-relaxed">
                        Experienced logistics partners for door-to-door delivery in the EU, USA, and GCC. Customs handling and insurance included.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50" id="products">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-amber-700 font-medium tracking-wider text-xs uppercase mb-2 block">Our Collection</span>
<h2 className="text-3xl md:text-5xl font-medium text-stone-900 tracking-tight mb-4">Engineered for Quality</h2>
<p className="text-stone-500 max-w-xl mx-auto">From heavy-duty industrial packaging to delicate artisanal stationery.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm relative overflow-hidden group">
<div className="relative z-10">
<div className="inline-block px-3 py-1 bg-stone-900 text-white text-xs rounded-full mb-6">Best Seller</div>
<h3 className="text-3xl font-serif text-stone-900 mb-2">Kraft Packaging Board</h3>
<p className="text-stone-500 mb-6 max-w-sm">High tear resistance, perfect for corrugated boxes and industrial sacks. Available in natural brown and bleached options.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-stone-700">
<iconify-icon className="text-green-700" icon="lucide:check"></iconify-icon>
                                GSM Range: 80 - 450
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-700">
<iconify-icon className="text-green-700" icon="lucide:check"></iconify-icon>
                                Burst Factor: 20+
                            </li>
<li className="flex items-center gap-3 text-sm text-stone-700">
<iconify-icon className="text-green-700" icon="lucide:check"></iconify-icon>
                                FDA Compliant for Food Contact
                            </li>
</ul>
<button className="text-green-800 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all">
                            View Specs <iconify-icon icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
<div className="mt-8 h-56 w-full rounded-xl overflow-hidden relative shadow-inner">

<img alt="Kraft Paper Texture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1623264634563-718c3080c58e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded text-xs font-mono text-stone-600 shadow-sm">Ref: K-400</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:border-amber-200 transition-colors group">
<div className="h-32 bg-stone-100 rounded-lg mb-4 w-full relative overflow-hidden">
<img alt="Fine Art Paper" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1517260739337-6799d2fb9ae0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-1">Fine Art Cotton Paper</h4>
<p className="text-xs text-stone-500 mb-4">100% Cotton rag, acid-free.</p>
<div className="flex justify-between items-center border-t border-stone-100 pt-3">
<span className="text-xs font-mono text-stone-500">150-300 GSM</span>
<iconify-icon className="text-stone-400" icon="lucide:plus"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:border-amber-200 transition-colors group">
<div className="h-32 bg-stone-800 rounded-lg mb-4 w-full relative overflow-hidden">
<img alt="Black Cardstock" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1599818579044-635293444646?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-1">Black Cardstock</h4>
<p className="text-xs text-stone-500 mb-4">Deep dye, non-fading pigments.</p>
<div className="flex justify-between items-center border-t border-stone-100 pt-3">
<span className="text-xs font-mono text-stone-500">200-600 GSM</span>
<iconify-icon className="text-stone-400" icon="lucide:plus"></iconify-icon>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-sm hover:border-amber-200 transition-colors group">
<div className="h-32 bg-stone-100 rounded-lg mb-4 w-full relative overflow-hidden">
<img alt="Textured Paper" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1628151016018-c5b8b93992b4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-lg font-medium text-stone-900 mb-1">Texture Specialty</h4>
<p className="text-xs text-stone-500 mb-4">Linen, laid, and felt finishes.</p>
<div className="flex justify-between items-center border-t border-stone-100 pt-3">
<span className="text-xs font-mono text-stone-500">Custom GSM</span>
<iconify-icon className="text-stone-400" icon="lucide:plus"></iconify-icon>
</div>
</div>

<div className="bg-stone-900 rounded-2xl p-6 shadow-sm flex flex-col justify-center items-center text-center text-white">
<iconify-icon className="text-amber-500 mb-3" icon="lucide:settings-2" width="32"></iconify-icon>
<h4 className="text-lg font-medium mb-1">Custom Order</h4>
<p className="text-xs text-stone-400 mb-4">Tailored sizes, colors &amp; watermarks.</p>
<a className="text-xs font-medium border-b border-amber-500 pb-0.5 hover:text-amber-500 transition-colors" href="#contact">Request Quote</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-stone-100" id="gallery">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div className="max-w-xl">
<h2 className="text-3xl font-medium text-stone-900 tracking-tight mb-4">Industrial Scale &amp; Application</h2>
<p className="text-stone-500 leading-relaxed">
                        Our facility houses two primary Fourdrinier machines with a combined capacity of 50 tonnes per day. From raw test liner production to finished corrugated boxes, we handle the complete lifecycle.
                    </p>
</div>
<div className="flex gap-2 mt-4 md:mt-0">
<button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50"><iconify-icon icon="lucide:arrow-left"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center hover:bg-stone-50"><iconify-icon icon="lucide:arrow-right"></iconify-icon></button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[500px]">

<div className="md:col-span-2 row-span-2 relative rounded-2xl overflow-hidden group">
<img alt="Finished Corrugated Boxes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1589408435889-cbda2011b669?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-6 flex flex-col justify-end">
<span className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">End Product</span>
<h3 className="text-white text-xl font-medium">Corrugated Packaging Solutions</h3>
<p className="text-stone-300 text-sm mt-2 line-clamp-2">High-strength fluting medium specifically designed for heavy-load shipping boxes used in export.</p>
</div>
</div>

<div className="md:col-span-2 row-span-1 relative rounded-2xl overflow-hidden group">
<img alt="Paper Mill Machinery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent p-6 flex flex-col justify-end">
<h3 className="text-white text-lg font-medium">State-of-the-Art Calendering</h3>
<p className="text-stone-300 text-xs mt-1">Ensuring uniform thickness and smooth surface finish.</p>
</div>
</div>

<div className="md:col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
<img alt="Raw Paper Rolls" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1530982011887-3cc11cc85693?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors p-4 flex flex-col justify-end">
<h3 className="text-white text-sm font-medium">Jumbo Rolls</h3>
</div>
</div>

<div className="md:col-span-1 row-span-1 relative rounded-2xl overflow-hidden group">
<img alt="Quality Control" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1605557626697-2e87166d88f9?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 hover:bg-black/20 transition-colors p-4 flex flex-col justify-end">
<h3 className="text-white text-sm font-medium">ISO Certified QC</h3>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 relative" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight mb-2">The Process</h2>
<p className="text-stone-500">Transparent manufacturing from raw fiber to final roll.</p>
</div>
<div className="hidden md:block">
<button className="text-sm font-medium text-stone-900 bg-white border border-stone-200 px-4 py-2 rounded-lg hover:bg-stone-100 transition-colors shadow-sm">Download Factory Profile</button>
</div>
</div>
<div className="relative">

<div className="absolute top-8 left-0 w-full h-0.5 bg-stone-200 hidden md:block z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">

<div className="group pt-0 md:pt-4">
<div className="w-12 h-12 bg-white border-2 border-green-100 text-green-800 rounded-full flex items-center justify-center text-lg font-serif font-bold mb-4 shadow-sm group-hover:border-green-600 group-hover:bg-green-600 group-hover:text-white transition-all mx-auto md:mx-0 relative z-10">1</div>
<h4 className="text-lg font-medium text-stone-900 mb-2 text-center md:text-left">Sourcing</h4>
<p className="text-xs text-stone-500 leading-relaxed text-center md:text-left">Selecting premium recycled cotton and wheat straw fibers from Punjab's agricultural belt.</p>
</div>

<div className="group pt-0 md:pt-4">
<div className="w-12 h-12 bg-white border-2 border-stone-200 text-stone-400 rounded-full flex items-center justify-center text-lg font-serif font-bold mb-4 shadow-sm group-hover:border-amber-500 group-hover:text-amber-500 transition-all mx-auto md:mx-0 relative z-10">2</div>
<h4 className="text-lg font-medium text-stone-900 mb-2 text-center md:text-left">Pulping</h4>
<p className="text-xs text-stone-500 leading-relaxed text-center md:text-left">Traditional beater method combined with enzymatic treatment for fiber strength.</p>
</div>

<div className="group pt-0 md:pt-4">
<div className="w-12 h-12 bg-white border-2 border-stone-200 text-stone-400 rounded-full flex items-center justify-center text-lg font-serif font-bold mb-4 shadow-sm group-hover:border-amber-500 group-hover:text-amber-500 transition-all mx-auto md:mx-0 relative z-10">3</div>
<h4 className="text-lg font-medium text-stone-900 mb-2 text-center md:text-left">Formation</h4>
<p className="text-xs text-stone-500 leading-relaxed text-center md:text-left">Cylinder mould machines form uniform sheets with precise GSM control.</p>
</div>

<div className="group pt-0 md:pt-4">
<div className="w-12 h-12 bg-white border-2 border-stone-200 text-stone-400 rounded-full flex items-center justify-center text-lg font-serif font-bold mb-4 shadow-sm group-hover:border-amber-500 group-hover:text-amber-500 transition-all mx-auto md:mx-0 relative z-10">4</div>
<h4 className="text-lg font-medium text-stone-900 mb-2 text-center md:text-left">QC Check</h4>
<p className="text-xs text-stone-500 leading-relaxed text-center md:text-left">Digital caliper testing, moisture analysis, and tensile strength verification.</p>
</div>

<div className="group pt-0 md:pt-4">
<div className="w-12 h-12 bg-white border-2 border-green-100 text-green-800 rounded-full flex items-center justify-center text-lg font-serif font-bold mb-4 shadow-sm group-hover:border-green-600 group-hover:bg-green-600 group-hover:text-white transition-all mx-auto md:mx-0 relative z-10">5</div>
<h4 className="text-lg font-medium text-stone-900 mb-2 text-center md:text-left">Export</h4>
<p className="text-xs text-stone-500 leading-relaxed text-center md:text-left">Moisture-proof palletizing and container loading for international transit.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white overflow-hidden relative" id="global">

<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M20,15 Q30,5 50,25 T90,15" fill="none" stroke="currentColor" stroke-dasharray="1 1" strokeWidth="0.2"></path>
<circle cx="20" cy="15" fill="currentColor" r="0.5"></circle>
<circle cx="50" cy="25" fill="currentColor" r="0.5"></circle>
<circle cx="85" cy="15" fill="currentColor" r="0.5"></circle>
</svg>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Serving Markets Across <br/><span className="text-amber-500">The Globe</span></h2>
<p className="text-stone-400 text-lg mb-8">
                        Whether you are in New York, London, or Dubai, Naseer Paper Mill ensures timely delivery through our strategic logistics partners.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="p-2 bg-stone-800 rounded-lg text-amber-500 mt-1">
<iconify-icon icon="lucide:anchor" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white">Karachi Port Access</h4>
<p className="text-sm text-stone-500 mt-1">Priority handling at Pakistan's largest port ensures minimal dwell time.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="p-2 bg-stone-800 rounded-lg text-amber-500 mt-1">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-white">International Certifications</h4>
<p className="text-sm text-stone-500 mt-1">ISO 9001:2015, FSC Certified Material available upon request.</p>
</div>
</div>
</div>
<div className="mt-10 flex gap-8">
<div>
<div className="text-3xl font-serif text-white">15<span className="text-amber-500 text-xl">+</span></div>
<div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Years Exporting</div>
</div>
<div>
<div className="text-3xl font-serif text-white">500<span className="text-amber-500 text-xl">MT</span></div>
<div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Monthly Capacity</div>
</div>
<div>
<div className="text-3xl font-serif text-white">25<span className="text-amber-500 text-xl">+</span></div>
<div className="text-xs text-stone-500 uppercase tracking-wider mt-1">Countries</div>
</div>
</div>
</div>
<div className="bg-stone-800/50 rounded-3xl p-8 border border-stone-700/50 backdrop-blur-sm">
<h3 className="text-sm font-medium text-stone-300 mb-6 uppercase tracking-wider">Recent Shipments</h3>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-stone-700 pb-3">
<div className="flex items-center gap-3">
<iconify-icon className="rounded-sm" icon="flag:us-4x3" width="20"></iconify-icon>
<span className="text-sm">Houston, USA</span>
</div>
<span className="text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded">Delivered</span>
</div>
<div className="flex justify-between items-center border-b border-stone-700 pb-3">
<div className="flex items-center gap-3">
<iconify-icon className="rounded-sm" icon="flag:de-4x3" width="20"></iconify-icon>
<span className="text-sm">Hamburg, Germany</span>
</div>
<span className="text-xs text-amber-400 bg-amber-900/30 px-2 py-1 rounded">In Transit</span>
</div>
<div className="flex justify-between items-center border-b border-stone-700 pb-3">
<div className="flex items-center gap-3">
<iconify-icon className="rounded-sm" icon="flag:ae-4x3" width="20"></iconify-icon>
<span className="text-sm">Dubai, UAE</span>
</div>
<span className="text-xs text-green-400 bg-green-900/30 px-2 py-1 rounded">Delivered</span>
</div>
<div className="flex justify-between items-center pt-1">
<div className="flex items-center gap-3">
<iconify-icon className="rounded-sm" icon="flag:gb-4x3" width="20"></iconify-icon>
<span className="text-sm">London, UK</span>
</div>
<span className="text-xs text-stone-400 bg-stone-700 px-2 py-1 rounded">Processing</span>
</div>
</div>
<div className="mt-8 pt-6 border-t border-stone-700">
<p className="text-xs text-stone-400 mb-2">Lead Time Estimator</p>
<div className="w-full bg-stone-700 h-1.5 rounded-full mb-2">
<div className="bg-amber-500 h-1.5 rounded-full" style={{width: '70%'}}></div>
</div>
<div className="flex justify-between text-[10px] text-stone-500 font-mono">
<span>Production (2 weeks)</span>
<span>Shipping (3-5 weeks)</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-b border-stone-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-medium text-center text-stone-900 mb-16 tracking-tight">Voices from the Industry</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
<div className="flex gap-1 text-amber-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6">"Finding a supplier that balances high GSM consistency with sustainable practices was difficult until we found Naseer Paper Mill. Their kraft board runs perfectly on our automated lines."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center font-bold text-stone-500">JD</div>
<div>
<div className="text-sm font-medium text-stone-900">James Davies</div>
<div className="text-xs text-stone-500">Procurement Dir, UK Packaging Ltd</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100">
<div className="flex gap-1 text-amber-500 mb-4">
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-stone-600 text-sm leading-relaxed mb-6">"The texture of their artisanal paper is unmatched. It adds a premium feel to our luxury stationery line that our customers absolutely love. Shipping to Toronto was surprisingly smooth."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-stone-200 rounded-full flex items-center justify-center font-bold text-stone-500">AL</div>
<div>
<div className="text-sm font-medium text-stone-900">Sarah Al-Fayed</div>
<div className="text-xs text-stone-500">Founder, Letterpress Studio Canada</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="contact">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-stone-50 border border-stone-200 rounded-3xl p-8 md:p-12 shadow-xl shadow-stone-200/50">
<div className="text-center mb-10">
<h2 className="text-3xl font-medium text-stone-900 mb-3 tracking-tight">Request a Custom Quote</h2>
<p className="text-stone-500 text-sm">Tell us about your project requirements. We typically respond within 24 hours.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700 ml-1">Full Name</label>
<input className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800/20 focus:border-green-800 transition-all text-sm text-stone-800" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700 ml-1">Work Email</label>
<input className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800/20 focus:border-green-800 transition-all text-sm text-stone-800" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700 ml-1">Company / Organization</label>
<input className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800/20 focus:border-green-800 transition-all text-sm text-stone-800" placeholder="Acme Corp" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700 ml-1">Country</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800/20 focus:border-green-800 transition-all text-sm text-stone-800 appearance-none">
<option>Select Country</option>
<option>United States</option>
<option>United Kingdom</option>
<option>United Arab Emirates</option>
<option>Germany</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" icon="lucide:chevron-down"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-stone-700 ml-1">Paper Requirements (GSM, Quantity, Type)</label>
<textarea className="w-full px-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-800/20 focus:border-green-800 transition-all text-sm text-stone-800" placeholder="E.g., 5000 sheets of 200 GSM Kraft Paper..." rows="4"></textarea>
</div>
<button className="w-full bg-green-900 text-white font-medium py-4 rounded-xl hover:bg-green-800 transition-all shadow-lg shadow-green-900/20 flex items-center justify-center gap-2" type="button">
                        Get Quote &amp; Catalog
                        <iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
<p className="text-center text-[10px] text-stone-400">By submitting this form, you agree to our privacy policy. Minimum export order: 1000kg.</p>
</form>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-green-900 rounded flex items-center justify-center text-white font-serif font-bold text-sm">N</div>
<span className="font-serif font-semibold text-lg tracking-tight text-stone-900">Naseer Paper Mill</span>
</div>
<p className="text-sm text-stone-500 mb-6 max-w-xs leading-relaxed">
                        Manufacturing excellence since 1985. We bridge the gap between traditional Pakistani craftsmanship and global industrial needs.
                    </p>
<div className="flex gap-4 text-stone-400">
<a className="hover:text-green-800 transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="hover:text-green-800 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
<a className="hover:text-green-800 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Products</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-green-800 transition-colors" href="#">Kraft Paper</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">Corrugated Board</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">Specialty Paper</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">Recycled Line</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li><a className="hover:text-green-800 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">Process</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-green-800 transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-900 mb-4 text-sm">Contact</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5 shrink-0" icon="lucide:map-pin"></iconify-icon>
<span>Industrial Estate, Lahore, Pakistan</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="lucide:mail"></iconify-icon>
<span>export@naseerpm.com</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="lucide:phone"></iconify-icon>
<span>+92 42 3555 0192</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-stone-400">
<p>© 2023 Naseer Paper Mill. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-stone-600" href="#">Privacy Policy</a>
<a className="hover:text-stone-600" href="#">Terms of Service</a>
<a className="hover:text-stone-600" href="#">Sitemap</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
