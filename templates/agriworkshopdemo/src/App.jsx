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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="h-10 w-10 rounded-full bg-[#0E6F57] flex items-center justify-center text-white shadow-lg shadow-[#0E6F57]/20 group-hover:scale-105 transition-transform duration-300">
<svg className="lucide lucide-sprout h-5 w-5" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
</div>
<div className="flex flex-col">
<span className="font-semibold text-[#0E6F57] leading-none tracking-tight">ISSCT</span>
<span className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">2027 Workshop</span>
</div>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-500 hover:text-[#0E6F57] transition-colors" href="#summary">Summary</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#0E6F57] transition-colors" href="#agenda">Agenda</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#0E6F57] transition-colors" href="#venue">Venue</a>
<a className="text-sm font-medium text-slate-500 hover:text-[#0E6F57] transition-colors" href="#register">Register</a>
<button className="px-6 py-2 rounded-full border border-[#0E6F57] text-[#0E6F57] text-sm font-medium hover:bg-[#0E6F57] hover:text-white transition-all duration-300">
                    Login
                </button>
</div>
<div className="md:hidden">
<svg className="lucide lucide-menu h-6 w-6 text-slate-700" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</div>
</div>
</nav>
<main className="relative pt-24 pb-20 overflow-hidden">

<div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-white via-[#F0F7F4] to-transparent -z-10"></div>
<div className="absolute top-[20%] left-0 w-full h-full opacity-30 pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

<section className="max-w-7xl mx-auto px-6 mb-24">
<div className="relative rounded-[18px] overflow-hidden h-[500px] md:h-[600px] shadow-2xl shadow-[#0E6F57]/10 group">
<div className="absolute inset-0 sugarcane-bg scale-105 group-hover:scale-100 transition-transform duration-1000 ease-in-out"></div>

<div className="absolute inset-0 bg-gradient-to-r from-[#0E6F57]/90 to-[#0E6F57]/50 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-black/10"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full opacity-20 pointer-events-none flex items-center justify-center">
<div className="w-[350px] h-[350px] border border-white/20 rounded-full"></div>
</div>

<div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 max-w-5xl mx-auto">
<span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium mb-8">
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg> Bridgetown, Barbados
                    </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight mb-4 leading-tight">
                        ISSCT Germplasm &amp; Breeding <br/> Molecular Biology Workshop <span className="text-[#86efac]">2027</span>
</h1>
<p className="text-xl md:text-2xl text-white/90 font-light mb-10 tracking-wide">
                        Developing Climate Resilient Sugarcane
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 rounded-full bg-white text-[#0E6F57] text-base font-semibold shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all transform hover:-translate-y-0.5" href="#register">
                            Register Your Interest
                        </a>
<button className="px-8 py-4 rounded-full bg-[#0E6F57]/30 backdrop-blur-md border border-white/40 text-white text-base font-medium hover:bg-[#0E6F57]/50 transition-all">
                            Learn More
                        </button>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="summary">
<div className="max-w-3xl mx-auto text-center mb-16">
<p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed">
                    Join the global community of sugarcane researchers to explore the intersection of traditional breeding excellence and cutting-edge molecular tools. This workshop focuses on rapid adaptation strategies for a changing climate.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-[#0E6F57]/30 hover:shadow-lg transition-all duration-300">
<div className="h-12 w-12 rounded-full bg-[#E7F3EF] flex items-center justify-center text-[#0E6F57] mb-6 group-hover:bg-[#0E6F57] group-hover:text-white transition-colors">
<svg className="lucide lucide-users h-6 w-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-semibold text-slate-800 mb-3 tracking-tight">Who Should Attend</h3>
<p className="text-slate-500 font-light leading-relaxed">
                        Breeders, molecular biologists, agronomists, and industry pathologists looking to integrate genomic selection into practice.
                    </p>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-[#0E6F57]/30 hover:shadow-lg transition-all duration-300">
<div className="h-12 w-12 rounded-full bg-[#E7F3EF] flex items-center justify-center text-[#0E6F57] mb-6 group-hover:bg-[#0E6F57] group-hover:text-white transition-colors">
<svg className="lucide lucide-microscope h-6 w-6" data-lucide="microscope" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"></path><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-800 mb-3 tracking-tight">Workshop Focus Areas</h3>
<p className="text-slate-500 font-light leading-relaxed">
                        Germplasm characterization, drought tolerance markers, disease resistance, and high-throughput phenotyping.
                    </p>
</div>

<div className="group bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:border-[#0E6F57]/30 hover:shadow-lg transition-all duration-300">
<div className="h-12 w-12 rounded-full bg-[#E7F3EF] flex items-center justify-center text-[#0E6F57] mb-6 group-hover:bg-[#0E6F57] group-hover:text-white transition-colors">
<svg className="lucide lucide-award h-6 w-6" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="6"></circle><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-800 mb-3 tracking-tight">Key Outcomes</h3>
<p className="text-slate-500 font-light leading-relaxed">
                        Actionable strategies for gene introgression and expanded networks for international variety exchange.
                    </p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="venue">
<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col md:flex-row gap-12 items-center">

<div className="w-full md:w-1/2 space-y-8">
<div>
<span className="text-[#0E6F57] font-bold tracking-wider uppercase text-xs mb-2 block">The Venue</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-800 tracking-tight">Hosted in Historic Barbados</h2>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="bg-[#F0F7F4] p-3 rounded-xl text-[#0E6F57]">
<svg className="lucide lucide-calendar-check h-6 w-6" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="m9 16 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-800">September 12-16, 2027</h4>
<p className="text-slate-500 font-light">5 Full Days of Workshops &amp; Tours</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-[#F0F7F4] p-3 rounded-xl text-[#0E6F57]">
<svg className="lucide lucide-landmark h-6 w-6" data-lucide="landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="22" y2="12"></line><line x1="18" x2="18" y1="22" y2="12"></line><line x1="6" x2="18" y1="12" y2="12"></line><path d="M10 22v-6.57c0-1.24 1.25-2.09 2.5-1.84a2.5 2.5 0 0 1 1.5 1.84V22"></path><path d="m3 6 9-4 9 4"></path><path d="M3 6v6"></path><path d="M21 6v6"></path></svg>
</div>
<div>
<h4 className="text-lg font-semibold text-slate-800">West Indies Central Sugar Cane Breeding Station</h4>
<p className="text-slate-500 font-light">Groves, St. George, Barbados</p>
</div>
</div>
</div>
<button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-200 text-slate-600 hover:border-[#0E6F57] hover:text-[#0E6F57] transition-colors">
<svg className="lucide lucide-plus-circle h-4 w-4" data-lucide="plus-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                        Add to Calendar
                    </button>
</div>

<div className="w-full md:w-1/2">
<div className="relative rounded-2xl overflow-hidden h-[350px]">
<img alt="Barbados Coast" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<p className="font-medium text-lg">Hilton Barbados Resort</p>
<p className="text-sm opacity-80">Official Conference Hotel</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32" id="agenda">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl md:text-4xl font-semibold text-[#0E6F57] tracking-tight mb-2">Program Preview</h2>
<p className="text-lg text-slate-500 font-light">A blend of theory, lab work, and field exploration.</p>
</div>
<a className="hidden md:flex items-center text-[#0E6F57] font-medium hover:gap-3 transition-all" href="#">
                    Download Full Agenda <svg className="lucide lucide-arrow-right ml-2 h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-[#0E6F57]/40 hover:-translate-y-1 transition-all duration-300">
<span className="inline-block px-3 py-1 rounded-full bg-[#E7F3EF] text-[#0E6F57] text-xs font-bold uppercase tracking-widest mb-4">Day 01</span>
<h3 className="text-xl font-semibold text-slate-800 mb-3">Germplasm Evaluation</h3>
<p className="text-slate-500 text-sm font-light mb-4">Workshops on phenotypic data standardization and historical yield analysis.</p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0E6F57] mt-1.5"></div> Genetic Diversity Panel</li>
<li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0E6F57] mt-1.5"></div> Trait Prioritization</li>
</ul>
</div>

<div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-[#0E6F57]/40 hover:-translate-y-1 transition-all duration-300">
<span className="inline-block px-3 py-1 rounded-full bg-[#E7F3EF] text-[#0E6F57] text-xs font-bold uppercase tracking-widest mb-4">Day 02</span>
<h3 className="text-xl font-semibold text-slate-800 mb-3">Molecular Biology</h3>
<p className="text-slate-500 text-sm font-light mb-4">Deep dive into marker-assisted selection and genomic prediction models.</p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0E6F57] mt-1.5"></div> MAS Techniques</li>
<li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0E6F57] mt-1.5"></div> Data Analysis Lab</li>
</ul>
</div>

<div className="bg-white rounded-xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-slate-100 hover:border-[#0E6F57]/40 hover:-translate-y-1 transition-all duration-300">
<span className="inline-block px-3 py-1 rounded-full bg-[#E7F3EF] text-[#0E6F57] text-xs font-bold uppercase tracking-widest mb-4">Day 03</span>
<h3 className="text-xl font-semibold text-slate-800 mb-3">Field Demonstrations</h3>
<p className="text-slate-500 text-sm font-light mb-4">On-site visits to experimental plots at Groves and variety testing sites.</p>
<ul className="space-y-2 text-sm text-slate-600">
<li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0E6F57] mt-1.5"></div> Seedling Selection</li>
<li className="flex gap-2"><div className="h-1.5 w-1.5 rounded-full bg-[#0E6F57] mt-1.5"></div> Disease Nursery Tour</li>
</ul>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div>
<h2 className="text-3xl md:text-4xl font-semibold text-[#0E6F57] tracking-tight mb-6">Travel &amp; Stay</h2>
<p className="text-lg text-slate-500 font-light mb-8">
                        We have secured preferential rates at partner hotels. Shuttles will be provided from the Hilton Resort to the Breeding Station daily.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="bg-slate-100 p-3 rounded-lg h-fit text-slate-600">
<svg className="lucide lucide-plane h-6 w-6" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 12h10"></path><path d="M9 4v16"></path><path d="m3 9 3 3-3 3"></path><path d="M12 2v20"></path></svg>
</div>
<div>
<h4 className="font-semibold text-slate-800 mb-1">Arrival Airport</h4>
<p className="text-sm text-slate-500">Grantley Adams International Airport (BGI). Located 20 minutes from the main venue.</p>
</div>
</div>
<div className="flex gap-4">
<div className="bg-slate-100 p-3 rounded-lg h-fit text-slate-600">
<svg className="lucide lucide-file-check h-6 w-6" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="m9 15 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="font-semibold text-slate-800 mb-1">Visa Requirements</h4>
<p className="text-sm text-slate-500">Most Commonwealth/US/EU citizens do not require a visa. Please check with your local embassy.</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
<img alt="Hotel 1" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&amp;w=2649&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
<span className="text-white text-sm font-medium">Hilton Resort</span>
</div>
</div>
<div className="bg-[#F0F7F4] rounded-2xl p-6 flex flex-col justify-center items-center text-center">
<span className="text-3xl font-bold text-[#0E6F57]">20%</span>
<span className="text-sm text-slate-600">Discount Code: <br/>ISSCT2027</span>
</div>
</div>
<div className="space-y-4">
<div className="bg-[#0E6F57] rounded-2xl p-6 flex flex-col justify-center items-center text-center text-white">
<svg className="lucide lucide-bus h-8 w-8 mb-2" data-lucide="bus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 6v6"></path><path d="M15 6v6"></path><path d="M2 12h19.6"></path><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"></path><circle cx="7" cy="18" r="2"></circle><path d="M9 18h5"></path><circle cx="17" cy="18" r="2"></circle></svg>
<span className="text-sm font-medium">Daily Shuttle Included</span>
</div>
<div className="group relative rounded-2xl overflow-hidden aspect-[4/5] shadow-lg">
<img alt="Hotel 2" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
<span className="text-white text-sm font-medium">Radisson Aquatica</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative max-w-7xl mx-auto px-6 mb-32 overflow-hidden">
<div className="bg-white border border-slate-100 rounded-3xl p-10 md:p-16 relative shadow-[0_8px_30px_rgb(0,0,0,0.02)]">

<div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none bg-[url('https://images.unsplash.com/photo-1629814493397-6a5676b7e099?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] bg-cover bg-center mix-blend-multiply"></div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10">
<div className="md:col-span-4">
<span className="text-[#0E6F57] font-bold tracking-wider uppercase text-xs mb-3 block">About the Host</span>
<h2 className="text-3xl font-semibold text-slate-800 mb-6">WICSCBS: A Legacy of Innovation</h2>
<div className="w-16 h-1 bg-[#0E6F57] rounded-full mb-6"></div>
<p className="text-slate-500 font-light leading-loose">
                            The West Indies Central Sugar Cane Breeding Station is one of the oldest and most respected breeding stations in the world. Since 1888, following the rediscovery of cane seedlings in Barbados, the station has provided genetic material ("fuzz") to industries globally.
                        </p>
</div>
<div className="md:col-span-8 relative pl-8 border-l border-slate-200">
<div className="space-y-10">
<div className="relative">
<div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-white bg-[#0E6F57] shadow-sm"></div>
<h4 className="text-lg font-bold text-slate-800">1888</h4>
<p className="text-slate-500 font-light">Seedling fertility rediscovered by Bovell &amp; Harrison.</p>
</div>
<div className="relative">
<div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-white bg-slate-300"></div>
<h4 className="text-lg font-bold text-slate-800">1932</h4>
<p className="text-slate-500 font-light">Formal establishment of the Central Sugar Cane Breeding Station.</p>
</div>
<div className="relative">
<div className="absolute -left-[39px] top-1 h-5 w-5 rounded-full border-4 border-white bg-slate-300"></div>
<h4 className="text-lg font-bold text-slate-800">2027</h4>
<p className="text-slate-500 font-light">Hosting the ISSCT Workshop to define the future of climate-resilient breeding.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 mb-32" id="register">
<div className="bg-gradient-to-br from-[#0E6F57] to-[#0B5845] rounded-3xl p-1 md:p-1 shadow-2xl shadow-[#0E6F57]/30">
<div className="bg-[#0E6F57] rounded-t-[20px] p-8 md:p-12 text-center text-white">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Secure Your Place</h2>
<p className="text-white/80 font-light max-w-xl mx-auto">Registration includes access to all sessions, field trips, shuttle services, and daily meals.</p>
</div>
<div className="bg-white rounded-[20px] p-8 md:p-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 border-b border-slate-100 pb-10">
<div className="space-y-2">
<span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Early Bird</span>
<div className="text-4xl font-bold text-slate-800">$450 <span className="text-lg font-normal text-slate-500">USD</span></div>
<p className="text-slate-500 text-sm">Valid until June 30, 2027</p>
</div>
<div className="space-y-2">
<span className="text-slate-400 text-sm font-medium uppercase tracking-wider">Standard</span>
<div className="text-4xl font-bold text-slate-800">$550 <span className="text-lg font-normal text-slate-500">USD</span></div>
<p className="text-slate-500 text-sm">After July 1, 2027</p>
</div>
</div>
<div className="text-center">
<h3 className="text-lg font-medium text-slate-800 mb-6">How Registration Works</h3>
<div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-10 text-sm text-slate-600">
<div className="flex items-center gap-2">
<div className="bg-[#E7F3EF] text-[#0E6F57] w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">1</div>
<span>Fill out details</span>
</div>
<div className="hidden md:block text-slate-300">→</div>
<div className="flex items-center gap-2">
<div className="bg-[#E7F3EF] text-[#0E6F57] w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">2</div>
<span>Select Payment</span>
</div>
<div className="hidden md:block text-slate-300">→</div>
<div className="flex items-center gap-2">
<div className="bg-[#E7F3EF] text-[#0E6F57] w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs">3</div>
<span>Receive Confirmation</span>
</div>
</div>
<button className="w-full md:w-auto px-12 py-4 bg-[#0E6F57] text-white font-semibold rounded-full hover:bg-[#094a3a] shadow-lg shadow-[#0E6F57]/20 transition-all transform hover:-translate-y-0.5">
                            Start Registration
                        </button>
<div className="flex justify-center items-center gap-4 mt-6 text-slate-400 grayscale opacity-70">
<svg className="h-6" fill="none" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M11 11H21V21H11V11Z" stroke="currentColor" strokeWidth="2"></path></svg>
<span className="text-xs flex items-center gap-1">
<svg className="lucide lucide-lock h-3 w-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> 
                                Secure payments via Stripe &amp; PayPal
                            </span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 mb-32">
<h2 className="text-2xl font-semibold text-center text-slate-800 mb-10">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:ring-1 open:ring-[#0E6F57]/50 transition-all">
<summary className="flex justify-between items-center p-5 cursor-pointer font-medium text-slate-700 hover:bg-slate-50">
                        Is transportation provided?
                        <svg className="lucide lucide-chevron-down h-4 w-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5 text-slate-500 text-sm font-light leading-relaxed">
                        Yes, daily shuttles will run between the Hilton Barbados Resort, Radisson Aquatica, and the WICSCBS venue.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:ring-1 open:ring-[#0E6F57]/50 transition-all">
<summary className="flex justify-between items-center p-5 cursor-pointer font-medium text-slate-700 hover:bg-slate-50">
                        Can I submit an abstract for a poster presentation?
                        <svg className="lucide lucide-chevron-down h-4 w-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5 text-slate-500 text-sm font-light leading-relaxed">
                        Absolutely. Abstract submissions are open until May 2027. Please select "Author" during the registration process.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:ring-1 open:ring-[#0E6F57]/50 transition-all">
<summary className="flex justify-between items-center p-5 cursor-pointer font-medium text-slate-700 hover:bg-slate-50">
                        Are dietary restrictions accommodated?
                        <svg className="lucide lucide-chevron-down h-4 w-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5 text-slate-500 text-sm font-light leading-relaxed">
                        Yes, all meals provided during the workshop will have vegetarian, vegan, and gluten-free options. Please specify allergies at registration.
                    </div>
</details>
<details className="group bg-white border border-slate-200 rounded-xl overflow-hidden open:ring-1 open:ring-[#0E6F57]/50 transition-all">
<summary className="flex justify-between items-center p-5 cursor-pointer font-medium text-slate-700 hover:bg-slate-50">
                        What is the cancellation policy?
                        <svg className="lucide lucide-chevron-down h-4 w-4 text-slate-400 group-open:rotate-180 transition-transform" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-5 pb-5 text-slate-500 text-sm font-light leading-relaxed">
                        Full refunds are available up to 30 days before the event. A 50% administration fee applies for cancellations within 30 days.
                    </div>
</details>
</div>
</section>
</main>

<footer className="bg-[#0E6F57] pt-20 pb-12 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="border border-white/20 rounded-3xl p-8 md:p-12 bg-[#0B5845]">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">

<div className="md:col-span-4 flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-[#0E6F57]">
<svg className="lucide lucide-sprout h-5 w-5" data-lucide="sprout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3"></path><path d="M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4"></path><path d="M5 21h14"></path></svg>
</div>
<span className="font-medium text-xl tracking-tight">WICSCBS Inc.</span>
</div>
<p className="text-white/70 font-light leading-relaxed text-sm max-w-sm">
                                Serving the Caribbean and the world with superior sugarcane genetics since 1888.
                            </p>
</div>
<div className="mt-8 text-sm text-white/40">
                            © 2027 ISSCT Workshop. All rights reserved.
                        </div>
</div>

<div className="md:col-span-2">
<h4 className="text-white font-medium mb-6">Menu</h4>
<ul className="space-y-3">
<li><a className="text-white/70 hover:text-white font-light transition-colors text-sm" href="#summary">Summary</a></li>
<li><a className="text-white/70 hover:text-white font-light transition-colors text-sm" href="#agenda">Agenda</a></li>
<li><a className="text-white/70 hover:text-white font-light transition-colors text-sm" href="#venue">Venue</a></li>
<li><a className="text-white/70 hover:text-white font-light transition-colors text-sm" href="#register">Register</a></li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="text-white font-medium mb-6">Contact</h4>
<div className="flex flex-col space-y-4">
<a className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group" href="#">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
<span className="text-sm font-light">info@wicscbs.org</span>
</a>
<div className="flex gap-4 mt-2">
<a className="text-white/60 hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook h-5 w-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="text-white/60 hover:text-white transition-colors" href="#"><svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-white/60 hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin h-5 w-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
</div>

<div className="md:col-span-4">
<h4 className="text-white font-medium mb-4">Updates</h4>
<p className="text-white/70 font-light text-sm mb-6">
                            Receive updates on the workshop schedule and abstract deadlines.
                        </p>
<form className="flex flex-col gap-3">
<div className="relative">
<input className="w-full bg-transparent border border-white/30 rounded-full py-3 px-6 text-white placeholder:text-white/40 focus:outline-none focus:border-white focus:bg-white/5 transition-all text-sm font-light" placeholder="Enter your email" type="email"/>
<button className="absolute right-2 top-1.5 bottom-1.5 h-auto aspect-square rounded-full bg-white text-[#0E6F57] flex items-center justify-center hover:bg-[#E7F3EF] transition-colors" type="button">
<svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</form>
</div>
</div>
</div>
</div>
</footer>


    </>
  );
}
