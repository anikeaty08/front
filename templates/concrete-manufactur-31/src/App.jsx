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



        lucide.createIcons();
    
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
      

<nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-1 group" href="#">
<div className="flex items-baseline tracking-tighter">
<span className="text-3xl text-[#006FB9] font-instrument-serif font-normal">SIRI</span>
<div className="h-2 w-2 rounded-full bg-[#1e3a8a] ml-1 mb-1"></div>
</div>
<div className="bg-[#009FE3] px-3 py-1 ml-2 transform -skew-x-6">
<span className="text-white font-semibold text-sm tracking-tight skew-x-6 block font-sans">CONCRETE PRODUCTS</span>
</div>
</a>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-base font-medium text-slate-600 hover:text-[#006FB9] transition-colors font-sans" href="#about">About</a>
<a className="text-base font-medium text-slate-600 hover:text-[#006FB9] transition-colors font-sans" href="#products">Products</a>
<a className="text-base font-medium text-slate-600 hover:text-[#006FB9] transition-colors font-sans" href="#infrastructure">Infrastructure</a>
<a className="text-base font-medium text-slate-600 hover:text-[#006FB9] transition-colors font-sans" href="#projects">Projects</a>
<a className="px-5 py-2.5 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-[#006FB9] transition-all shadow-sm ring-1 ring-slate-900/5 font-sans" href="#contact">
                        Get a Quote
                    </a>
</div>

<div className="md:hidden">
<button className="text-slate-900 p-2">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<img alt="Industrial Concrete Plant" className="w-full h-full object-cover opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#009FE3]/10 border border-[#009FE3]/20 text-[#38bdf8] text-sm font-medium mb-6 font-sans">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
                    ISO 9001:2015 Certified Manufacturing
                </div>
<h1 className="text-5xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-6 font-instrument-serif font-normal">
                    Building the foundation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009FE3] to-sky-200 font-instrument-serif font-normal">tomorrow.</span>
</h1>
<p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-lg font-sans">
                    Siri Concrete Products delivers precision-engineered Ready Mix Concrete and high-grade blocks for large-scale infrastructure and residential projects.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center px-6 py-3.5 text-base font-medium text-white bg-[#009FE3] rounded-lg hover:bg-[#008bc5] transition-all shadow-lg shadow-sky-500/20 font-sans" href="#contact">
                        Request a Quote
                        <svg className="lucide lucide-arrow-right ml-2 w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex justify-center items-center px-6 py-3.5 text-base font-medium text-white bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm font-sans" href="#products">
                        Explore Products
                    </a>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full border-t border-white/10 bg-black/20 backdrop-blur-sm">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<p className="text-3xl text-white tracking-tight font-instrument-serif font-normal">15+</p>
<p className="text-sm text-slate-400 font-sans">Years Experience</p>
</div>
<div>
<p className="text-3xl text-white tracking-tight font-instrument-serif font-normal">500+</p>
<p className="text-sm text-slate-400 font-sans">Projects Completed</p>
</div>
<div>
<p className="text-3xl text-white tracking-tight font-instrument-serif font-normal">24/7</p>
<p className="text-sm text-slate-400 font-sans">Plant Operations</p>
</div>
<div>
<p className="text-3xl text-white tracking-tight font-instrument-serif font-normal">100%</p>
<p className="text-sm text-slate-400 font-sans">Quality Assured</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-[#009FE3]/10 rounded-full blur-2xl"></div>
<img alt="Construction Site" className="relative rounded-2xl shadow-2xl shadow-slate-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
<div className="flex items-start gap-4">
<div className="p-3 bg-green-50 rounded-lg text-green-600">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="font-semibold text-slate-900 font-sans">Certified Strength</h4>
<p className="text-sm text-slate-500 mt-1 font-sans">Lab-tested materials exceeding industry standards.</p>
</div>
</div>
</div>
</div>
<div>
<h2 className="text-[#009FE3] font-semibold tracking-wide uppercase text-sm mb-3 font-sans">About Us</h2>
<h3 className="text-4xl text-slate-900 tracking-tight mb-6 font-instrument-serif font-normal">Engineered for durability. Delivered with precision.</h3>
<p className="text-lg text-slate-600 mb-6 leading-relaxed font-sans">
                        At Siri Concrete Products, we don't just manufacture concrete; we provide the structural integrity for the region's most ambitious projects. From high-rise residential complexes to industrial warehouses, our fully automated batching plants ensure consistency in every mix.
                    </p>
<p className="text-lg text-slate-600 mb-8 leading-relaxed font-sans">
                        Our commitment to innovation involves using the finest raw materials, state-of-the-art German machinery, and rigorous quality control protocols to deliver blocks and RMC that stand the test of time.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle w-5 h-5 text-[#009FE3]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-slate-700 font-medium font-sans">Fully Automated Batching Plant</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle w-5 h-5 text-[#009FE3]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-slate-700 font-medium font-sans">GPS-Enabled Logistics Fleet</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-check-circle w-5 h-5 text-[#009FE3]" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="text-slate-700 font-medium font-sans">Custom Mix Designs (M10 to M60)</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="products">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-[#009FE3] font-semibold tracking-wide uppercase text-sm mb-3 font-sans">Our Products</h2>
<h3 className="text-4xl text-slate-900 tracking-tight mb-4 font-instrument-serif font-normal">Complete Concrete Solutions</h3>
<p className="text-lg text-slate-600 font-sans">High-performance materials manufactured to meet the rigorous demands of modern construction.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Ready Mix Concrete Truck" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1574359411659-15573a27fd0c?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
<div className="absolute bottom-4 left-4 text-white">
<svg className="lucide lucide-truck w-6 h-6 mb-2" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<p className="font-medium text-sm text-sky-300 font-sans">Flagship Product</p>
</div>
</div>
<div className="p-8">
<h4 className="text-2xl text-slate-900 mb-3 tracking-tight font-instrument-serif font-normal">Ready Mix Concrete (RMC)</h4>
<p className="text-base text-slate-600 mb-6 font-sans">Precision-mixed concrete delivered fresh to site. Available in standard and high-strength grades tailored for foundations, slabs, and columns.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2 font-sans"><div className="w-1.5 h-1.5 rounded-full bg-[#009FE3]"></div> Consistent Quality</li>
<li className="flex items-center gap-2 font-sans"><div className="w-1.5 h-1.5 rounded-full bg-[#009FE3]"></div> Faster Construction</li>
</ul>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Solid Concrete Blocks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
</div>
<div className="p-8">
<h4 className="text-2xl text-slate-900 mb-3 tracking-tight font-instrument-serif font-normal">Solid Concrete Blocks</h4>
<p className="text-base text-slate-600 mb-6 font-sans">High-density load-bearing blocks designed for superior strength. Perfect for external walls and heavy structural applications.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2 font-sans"><div className="w-1.5 h-1.5 rounded-full bg-[#009FE3]"></div> High Compressive Strength</li>
<li className="flex items-center gap-2 font-sans"><div className="w-1.5 h-1.5 rounded-full bg-[#009FE3]"></div> Weather Resistant</li>
</ul>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Hollow Blocks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
</div>
<div className="p-8">
<h4 className="text-2xl text-slate-900 mb-3 tracking-tight font-instrument-serif font-normal">Hollow &amp; Cellular Blocks</h4>
<p className="text-base text-slate-600 mb-6 font-sans">Lightweight yet durable blocks that offer excellent thermal insulation and reduce dead load on building structures.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2 font-sans"><div className="w-1.5 h-1.5 rounded-full bg-[#009FE3]"></div> Thermal Insulation</li>
<li className="flex items-center gap-2 font-sans"><div className="w-1.5 h-1.5 rounded-full bg-[#009FE3]"></div> Cost Effective</li>
</ul>
</div>
</div>

<div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300">
<div className="relative h-64 overflow-hidden">
<img alt="Paver Blocks" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
</div>
<div className="p-8">
<h4 className="text-2xl text-slate-900 mb-3 tracking-tight font-instrument-serif font-normal">Paver Blocks</h4>
<p className="text-base text-slate-600 mb-6 font-sans">Interlocking heavy-duty pavers for driveways, parking lots, and industrial flooring. Available in various shapes and strengths.</p>
<ul className="text-sm text-slate-500 space-y-2 mb-6">
<li className="flex items-center gap-2 font-sans"><div className="w-1.5 h-1.5 rounded-full bg-[#009FE3]"></div> Anti-Skid Surface</li>
<li className="flex items-center gap-2 font-sans"><div className="w-1.5 h-1.5 rounded-full bg-[#009FE3]"></div> High Abrasion Resistance</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="infrastructure">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-[#009FE3] font-semibold tracking-wide uppercase text-sm mb-3 font-sans">Infrastructure</h2>
<h3 className="text-4xl tracking-tight mb-6 font-instrument-serif font-normal">Powered by Technology.</h3>
<p className="text-lg text-slate-400 mb-8 leading-relaxed font-sans">
                        Our manufacturing facility is equipped with fully automated batching plants ensuring precise weighing and mixing of ingredients. Our fleet of transit mixers and concrete pumps ensures that high-quality concrete reaches your site exactly when you need it.
                    </p>
<div className="grid grid-cols-2 gap-6">
<div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
<svg className="lucide lucide-factory w-8 h-8 text-[#009FE3] mb-3" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>
<h4 className="font-semibold text-lg mb-1 font-sans">Modern Plant</h4>
<p className="text-sm text-slate-400 font-sans">Computerized batching systems for zero error.</p>
</div>
<div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
<svg className="lucide lucide-truck w-8 h-8 text-[#009FE3] mb-3" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<h4 className="font-semibold text-lg mb-1 font-sans">Large Fleet</h4>
<p className="text-sm text-slate-400 font-sans">GPS-tracked transit mixers for on-time delivery.</p>
</div>
<div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
<svg className="lucide lucide-flask-conical w-8 h-8 text-[#009FE3] mb-3" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
<h4 className="font-semibold text-lg mb-1 font-sans">QC Lab</h4>
<p className="text-sm text-slate-400 font-sans">In-house testing facility for compressive strength.</p>
</div>
<div className="p-4 rounded-xl bg-slate-800 border border-slate-700">
<svg className="lucide lucide-hard-hat w-8 h-8 text-[#009FE3] mb-3" data-lucide="hard-hat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"></path><path d="M14 6a6 6 0 0 1 6 6v3"></path><path d="M4 15v-3a6 6 0 0 1 6-6"></path><rect height="4" rx="1" width="20" x="2" y="15"></rect></svg>
<h4 className="font-semibold text-lg mb-1 font-sans">Expert Team</h4>
<p className="text-sm text-slate-400 font-sans">Civil engineers supervising every batch.</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="absolute inset-0 bg-[#009FE3] rounded-2xl transform rotate-3 opacity-20"></div>
<img alt="Industrial Machinery" className="relative rounded-2xl shadow-2xl border border-slate-700 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=2500&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-[#009FE3] font-semibold tracking-wide uppercase text-sm mb-3 font-sans">Why Siri Concrete</h2>
<h3 className="text-4xl text-slate-900 tracking-tight font-instrument-serif font-normal">The Siri Advantage</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="flex flex-col items-start">
<div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-6">
<svg className="lucide lucide-timer w-6 h-6 text-[#009FE3]" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 font-sans">Time-Critical Delivery</h4>
<p className="text-lg text-slate-600 font-sans">We understand that concrete sets fast. Our logistics team ensures synchronized delivery to prevent cold joints and work stoppages.</p>
</div>
<div className="flex flex-col items-start">
<div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-6">
<svg className="lucide lucide-shield w-6 h-6 text-[#009FE3]" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 font-sans">Uncompromised Quality</h4>
<p className="text-lg text-slate-600 font-sans">Every truck that leaves our plant comes with a quality certificate. We strictly adhere to IS 456 and IS 10262 standards.</p>
</div>
<div className="flex flex-col items-start">
<div className="w-12 h-12 bg-sky-50 rounded-lg flex items-center justify-center mb-6">
<svg className="lucide lucide-users w-6 h-6 text-[#009FE3]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h4 className="text-xl font-semibold text-slate-900 mb-3 font-sans">Technical Support</h4>
<p className="text-lg text-slate-600 font-sans">Our team assists with mix design selection based on your structural drawings to optimize cost and strength.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="projects">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<h2 className="text-[#009FE3] font-semibold tracking-wide uppercase text-sm mb-3 font-sans">Projects</h2>
<h3 className="text-4xl text-slate-900 tracking-tight font-instrument-serif font-normal">Building Landmarks</h3>
</div>
<div className="mt-4 md:mt-0">
<a className="text-[#009FE3] font-medium hover:text-[#007bb0] flex items-center font-sans" href="#">View all projects <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">

<div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl">
<img alt="Commercial Building" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="text-white font-semibold text-lg font-sans">Tech Park Infrastructure</p>
<p className="text-slate-300 text-sm font-sans">Commercial RMC Supply</p>
</div>
</div>
<div className="md:col-span-1 md:row-span-2 relative group overflow-hidden rounded-xl">
<img alt="Apartment Complex" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2531&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="text-white font-semibold text-lg font-sans">Skyline Residency</p>
<p className="text-slate-300 text-sm font-sans">Solid Blocks &amp; RMC</p>
</div>
</div>
<div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-xl">
<img alt="Industrial Warehouse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="text-white font-semibold text-lg font-sans">Warehousing Unit</p>
</div>
</div>
<div className="md:col-span-1 md:row-span-1 relative group overflow-hidden rounded-xl">
<img alt="Paver Walkway" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<p className="text-white font-semibold text-lg font-sans">Municipal Walkway</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 clip-slant hidden lg:block"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-[#009FE3] font-semibold tracking-wide uppercase text-sm mb-3 font-sans">Contact Us</h2>
<h3 className="text-4xl text-slate-900 tracking-tight mb-6 font-instrument-serif font-normal">Let's start your project.</h3>
<p className="text-lg text-slate-600 mb-8 font-sans">Get in touch with our sales team for quotes, product specifications, or to schedule a site visit.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="mt-1 bg-sky-50 p-2 rounded-lg">
<svg className="lucide lucide-map-pin w-5 h-5 text-[#009FE3]" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div>
<h4 className="font-semibold text-slate-900 font-sans">Head Office &amp; Plant</h4>
<p className="text-slate-600 font-sans">Plot No. 45, Industrial Area Phase II,Hyderabad, Telangana 500037</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-sky-50 p-2 rounded-lg">
<svg className="lucide lucide-phone w-5 h-5 text-[#009FE3]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<div>
<h4 className="font-semibold text-slate-900 font-sans">Call Us</h4>
<p className="text-slate-600 font-sans">+91 98765 43210</p>
<p className="text-slate-600 font-sans">+91 40 1234 5678</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 bg-sky-50 p-2 rounded-lg">
<svg className="lucide lucide-mail w-5 h-5 text-[#009FE3]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<div>
<h4 className="font-semibold text-slate-900 font-sans">Email</h4>
<p className="text-slate-600 font-sans">sales@siriconcrete.com</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
<form className="space-y-5">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2 font-sans">First Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#009FE3] focus:border-[#009FE3] outline-none transition-all placeholder:text-slate-400" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Last Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#009FE3] focus:border-[#009FE3] outline-none transition-all placeholder:text-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Email Address</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#009FE3] focus:border-[#009FE3] outline-none transition-all placeholder:text-slate-400" placeholder="john@company.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Product Interest</label>
<div className="relative">
<select className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#009FE3] focus:border-[#009FE3] outline-none transition-all appearance-none bg-white text-slate-600">
<option className="font-sans">Ready Mix Concrete (RMC)</option>
<option className="font-sans">Solid Blocks</option>
<option className="font-sans">Hollow Blocks</option>
<option className="font-sans">Paver Blocks</option>
<option className="font-sans">Other Inquiry</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-3 w-5 h-5 text-slate-400 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2 font-sans">Message</label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-[#009FE3] focus:border-[#009FE3] outline-none transition-all placeholder:text-slate-400" placeholder="Tell us about your project requirements..." rows="4"></textarea>
</div>
<button className="w-full py-3.5 rounded-lg bg-[#009FE3] hover:bg-[#008bc5] text-white font-medium shadow-lg shadow-sky-500/20 transition-all font-sans" type="submit">Send Inquiry</button>
</form>
</div>
</div>
</div>
</section>

<section className="h-96 w-full bg-slate-200 relative grayscale">

<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407062!2d78.26795893926882!3d17.41215307567757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1715432100000!5m2!1sen!2sin" style={{border: '0'}} width="100%"></iframe>
</section>

<footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<a className="flex items-center gap-1 group mb-6" href="#">
<div className="flex items-baseline tracking-tighter">
<span className="text-2xl text-[#006FB9] font-instrument-serif font-normal">SIRI</span>
<div className="h-1.5 w-1.5 rounded-full bg-[#1e3a8a] ml-1 mb-1"></div>
</div>
<span className="text-white text-xs font-semibold uppercase tracking-wide ml-2 font-sans">Concrete Products</span>
</a>
<p className="text-sm leading-relaxed mb-6 font-sans">
                        Setting the benchmark for quality in the construction materials industry. We build trust, one block at a time.
                    </p>
<div className="flex space-x-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-4 font-sans">Products</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#009FE3] transition-colors font-sans" href="#">Ready Mix Concrete</a></li>
<li><a className="hover:text-[#009FE3] transition-colors font-sans" href="#">Solid Blocks</a></li>
<li><a className="hover:text-[#009FE3] transition-colors font-sans" href="#">Cellular Blocks</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4 font-sans">Company</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#009FE3] transition-colors font-sans" href="#">About Us</a></li>
<li><a className="hover:text-[#009FE3] transition-colors font-sans" href="#">Infrastructure</a></li>
<li><a className="hover:text-[#009FE3] transition-colors font-sans" href="#">Projects</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4 font-sans">Support</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-[#009FE3] transition-colors font-sans" href="#">Request a Quote</a></li>
<li><a className="hover:text-[#009FE3] transition-colors font-sans" href="#">Technical Datasheets</a></li>
<li><a className="hover:text-[#009FE3] transition-colors font-sans" href="#">Customer Login</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
<p className="font-sans">© 2024 Siri Concrete Products. All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors font-sans" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors font-sans" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
