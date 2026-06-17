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
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 glass-panel border-b border-[#333F48]/5">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-xl tracking-tighter font-semibold text-[#2D5A27] uppercase flex items-center gap-2" href="#">
<iconify-icon icon="solar:leaf-linear" strokeWidth="1.5" width="20"></iconify-icon>
                AuraGen
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#333F48]">
<a className="hover:text-[#2D5A27] transition-colors" href="#">Expertise</a>
<a className="hover:text-[#2D5A27] transition-colors" href="#">Projects</a>
<a className="hover:text-[#2D5A27] transition-colors" href="#">Impact</a>
<a className="hover:text-[#2D5A27] transition-colors" href="#">Insights</a>
</div>

<div className="hidden md:flex items-center">
<a className="px-5 py-2.5 text-xs font-medium tracking-wide uppercase border border-[#333F48]/20 rounded-full hover:bg-[#2D5A27] hover:border-[#2D5A27] hover:text-white transition-all duration-300" href="#">
                    Contact Us
                </a>
</div>

<button className="md:hidden text-[#333F48]">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">

<div className="order-2 lg:order-1 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2D5A27]/5 border border-[#2D5A27]/10 text-[#2D5A27] text-xs font-medium tracking-wide uppercase">
<span className="w-1.5 h-1.5 rounded-full bg-[#2D5A27] animate-pulse"></span>
                    ESG Focused Infrastructure
                </div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-[#333F48] leading-[1.1]">
                    Engineering a <br/>
<span className="text-[#2D5A27]">Sustainable Legacy</span>
</h1>
<p className="text-lg text-[#333F48]/80 font-light max-w-md leading-relaxed">
                    We bridge the gap between visionary policy and grounded engineering, delivering renewable energy solutions that stand the test of time.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<a className="px-8 py-4 bg-[#2D5A27] text-white text-sm font-medium tracking-wide rounded-lg hover:bg-[#1e3d1a] transition-all shadow-lg shadow-[#2D5A27]/20 text-center" href="#">
                        Our Impact
                    </a>
<a className="px-8 py-4 bg-transparent border border-[#333F48]/30 text-[#333F48] text-sm font-medium tracking-wide rounded-lg hover:border-[#2D5A27] hover:text-[#2D5A27] transition-all text-center" href="#">
                        Partner With Us
                    </a>
</div>
</div>

<div className="order-1 lg:order-2 relative group">
<div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
<img alt="Wind Farm Coastal Landscape" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#333F48]/40 to-transparent mix-blend-multiply"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
<div className="flex items-start gap-4">
<div className="p-3 bg-[#F9F9F7] rounded-full text-[#2D5A27]">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-[#333F48]/60 uppercase tracking-wider font-medium">Annual Output</p>
<p className="text-2xl font-medium text-[#333F48] tracking-tight">4.2 GW</p>
<p className="text-xs text-[#2D5A27] mt-1">+12% vs last year</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-[#333F48]/5">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:flex justify-between items-end">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#333F48] mb-4">Service Excellence</h2>
<p className="text-[#333F48]/70 font-light">Delivering precision across critical infrastructure sectors through a lens of environmental stewardship.</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-[#2D5A27] text-sm font-medium hover:gap-3 transition-all" href="#">
                    View all capabilities <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-[#F9F9F7] hover:bg-[#2D5A27] transition-all duration-500 cursor-pointer">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2D5A27] mb-8 group-hover:bg-[#F9F9F7] group-hover:text-[#2D5A27] transition-colors">
<iconify-icon icon="solar:bolt-circle-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#333F48] mb-3 group-hover:text-[#F9F9F7]">Energy Transition</h3>
<p className="text-sm text-[#333F48]/70 leading-relaxed group-hover:text-[#F9F9F7]/90 font-light">
                        Strategic decarbonization roadmaps and renewable asset integration for large-scale grids.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-[#F9F9F7] hover:bg-[#2D5A27] transition-all duration-500 cursor-pointer">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2D5A27] mb-8 group-hover:bg-[#F9F9F7] group-hover:text-[#2D5A27] transition-colors">
<iconify-icon icon="solar:drop-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#333F48] mb-3 group-hover:text-[#F9F9F7]">Water Resilience</h3>
<p className="text-sm text-[#333F48]/70 leading-relaxed group-hover:text-[#F9F9F7]/90 font-light">
                        Sustainable catchment management and circular water systems for industrial applications.
                    </p>
</div>

<div className="group p-8 rounded-2xl bg-[#F9F9F7] hover:bg-[#2D5A27] transition-all duration-500 cursor-pointer">
<div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2D5A27] mb-8 group-hover:bg-[#F9F9F7] group-hover:text-[#2D5A27] transition-colors">
<iconify-icon icon="solar:city-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-[#333F48] mb-3 group-hover:text-[#F9F9F7]">Urban Mobility</h3>
<p className="text-sm text-[#333F48]/70 leading-relaxed group-hover:text-[#F9F9F7]/90 font-light">
                        Electrification infrastructure planning for next-generation public transport networks.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F9F9F7]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#333F48] mb-4">From Vision to Reality</h2>
<p className="text-[#333F48]/70 font-light max-w-2xl mx-auto">Visualizing the progression of the 'North-Coast Hydrogen Hub' project.</p>
</div>
<div className="relative">

<div className="absolute left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-[#2D5A27]/20 -translate-x-1/2 hidden md:block"></div>
<div className="space-y-12 md:space-y-24">

<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 relative">
<div className="w-full md:w-1/2 text-right order-2 md:order-1 pr-0 md:pr-12">
<span className="text-xs font-semibold text-[#2D5A27] uppercase tracking-widest mb-2 block">Phase 01</span>
<h3 className="text-2xl font-medium text-[#333F48] mb-3">Feasibility &amp; Impact</h3>
<p className="text-sm text-[#333F48]/70 font-light leading-relaxed">
                                Conducting rigorous environmental impact statements and stakeholder engagement sessions to align community values with engineering goals.
                            </p>
</div>
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#F9F9F7] border-2 border-[#2D5A27] rounded-full z-10 hidden md:block"></div>
<div className="w-full md:w-1/2 order-1 md:order-2 pl-0 md:pl-12">
<div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative shadow-md grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Planning meeting" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&amp;w=2013&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 relative">
<div className="w-full md:w-1/2 order-1 pr-0 md:pr-12">
<div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative shadow-md grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Engineering Schematics" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#2D5A27] rounded-full z-10 hidden md:block shadow-[0_0_0_4px_#F9F9F7]"></div>
<div className="w-full md:w-1/2 text-left order-2 pl-0 md:pl-12">
<span className="text-xs font-semibold text-[#2D5A27] uppercase tracking-widest mb-2 block">Phase 02</span>
<h3 className="text-2xl font-medium text-[#333F48] mb-3">Schematic Design</h3>
<p className="text-sm text-[#333F48]/70 font-light leading-relaxed">
                                Developing the core infrastructure blueprints, utilizing digital twin technology to simulate load capacities and stress points.
                            </p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 relative">
<div className="w-full md:w-1/2 text-right order-2 md:order-1 pr-0 md:pr-12">
<span className="text-xs font-semibold text-[#2D5A27] uppercase tracking-widest mb-2 block">Phase 03</span>
<h3 className="text-2xl font-medium text-[#333F48] mb-3">Execution &amp; Delivery</h3>
<p className="text-sm text-[#333F48]/70 font-light leading-relaxed">
                                Managing on-site construction with precision logistics, ensuring zero-harm safety compliance and ESG adherence.
                            </p>
</div>
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-[#F9F9F7] border-2 border-[#2D5A27] rounded-full z-10 hidden md:block"></div>
<div className="w-full md:w-1/2 order-1 md:order-2 pl-0 md:pl-12">
<div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative shadow-md grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Construction Site" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#333F48] mb-8 leading-tight">
                        "AuraGen brings a level of <span className="text-[#2D5A27] italic font-serif">precision</span> that redefined our project's potential."
                    </h2>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
<img alt="CEO" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-base font-medium text-[#333F48]">Elena Rostova</h4>
<p className="text-xs text-[#333F48]/60 uppercase tracking-wide mb-2">CEO, Apex Renewables</p>
<p className="text-sm text-[#333F48]/80 font-light italic">"Their approach to water resilience in arid climates is not just engineering; it's artistry. A reliable partnership we value deeply."</p>
</div>
</div>
<div className="w-full h-px bg-[#333F48]/10"></div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
<img alt="Director" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-base font-medium text-[#333F48]">Marcus Chen</h4>
<p className="text-xs text-[#333F48]/60 uppercase tracking-wide mb-2">Dir. Infrastructure, City of Melbourne</p>
<p className="text-sm text-[#333F48]/80 font-light italic">"Operational excellence from day one. AuraGen managed complex stakeholder variations with incredible grace."</p>
</div>
</div>
</div>
</div>
<div className="bg-[#F9F9F7] rounded-2xl p-10 relative overflow-hidden">
<iconify-icon className="absolute top-4 right-4 text-[#2D5A27]/10" icon="solar:quote-up-square-linear" width="120"></iconify-icon>
<div className="relative z-10">
<h3 className="text-xl font-medium text-[#333F48] mb-6">Partnership Metrics</h3>
<div className="grid grid-cols-2 gap-8">
<div>
<p className="text-4xl font-medium text-[#2D5A27]">98%</p>
<p className="text-xs text-[#333F48]/60 mt-2">Client Retention Rate</p>
</div>
<div>
<p className="text-4xl font-medium text-[#2D5A27]">$4B+</p>
<p className="text-xs text-[#333F48]/60 mt-2">Capital Projects Delivered</p>
</div>
<div>
<p className="text-4xl font-medium text-[#2D5A27]">0</p>
<p className="text-xs text-[#333F48]/60 mt-2">Environmental Breaches</p>
</div>
<div>
<p className="text-4xl font-medium text-[#2D5A27]">15+</p>
<p className="text-xs text-[#333F48]/60 mt-2">Industry Awards</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A2024] text-white py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl tracking-tighter font-medium text-white uppercase flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-[#2D5A27]" icon="solar:leaf-bold" width="20"></iconify-icon>
                        AuraGen
                    </a>
<p className="text-white/60 text-sm font-light leading-relaxed">
                        Engineering a sustainable future through excellence, partnership, and environmental integrity.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/90">Company</h4>
<ul className="space-y-3 text-sm text-white/60 font-light">
<li><a className="hover:text-[#2D5A27] transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-[#2D5A27] transition-colors" href="#">Our Leadership</a></li>
<li><a className="hover:text-[#2D5A27] transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-[#2D5A27] transition-colors" href="#">Newsroom</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/90">Services</h4>
<ul className="space-y-3 text-sm text-white/60 font-light">
<li><a className="hover:text-[#2D5A27] transition-colors" href="#">Renewable Energy</a></li>
<li><a className="hover:text-[#2D5A27] transition-colors" href="#">Water Infrastructure</a></li>
<li><a className="hover:text-[#2D5A27] transition-colors" href="#">Transport Systems</a></li>
<li><a className="hover:text-[#2D5A27] transition-colors" href="#">ESG Advisory</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/90">Certifications</h4>
<div className="flex gap-4">
<div className="w-12 h-12 border border-white/20 rounded flex items-center justify-center text-xs text-white/40 text-center leading-none p-1">
<span className="scale-75">AUS<br/>ESG</span>
</div>
<div className="w-12 h-12 border border-white/20 rounded flex items-center justify-center text-xs text-white/40 text-center leading-none p-1">
<span className="scale-75">ISO<br/>14001</span>
</div>
<div className="w-12 h-12 border border-white/20 rounded flex items-center justify-center text-xs text-white/40 text-center leading-none p-1">
<span className="scale-75">C.N.<br/>2030</span>
</div>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-white/40 font-light">© 2024 AuraGen Solutions. All rights reserved.</p>
<div className="flex gap-6 text-xs text-white/40 font-light">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
