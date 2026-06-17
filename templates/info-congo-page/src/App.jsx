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
      

<nav className="sticky top-0 z-50 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">
<div className="flex-shrink-0 flex items-center gap-2">
<iconify-icon className="text-emerald-700 text-3xl" icon="solar:map-point-linear"></iconify-icon>
<span className="font-semibold tracking-tighter text-xl text-slate-900 uppercase">INFOCONGO</span>
</div>
<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-slate-500 hover:text-emerald-700 transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-emerald-700 border-b-2 border-emerald-700 pb-1" href="#">About Us</a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-700 transition-colors" href="#">Maps</a>
<a className="text-sm font-medium text-slate-500 hover:text-emerald-700 transition-colors" href="#">Topics</a>
</div>
<div className="flex items-center space-x-4">
<div className="hidden sm:flex text-xs font-medium text-slate-400 uppercase tracking-widest gap-2 border border-slate-200 rounded-full px-3 py-1">
<span className="text-slate-800">EN</span>
<span>|</span>
<a className="hover:text-slate-800 transition-colors" href="#">FR</a>
</div>
<button className="md:hidden text-slate-600 hover:text-slate-900">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-[85vh] flex items-center bg-slate-900 overflow-hidden">

<div className="absolute inset-0 w-full h-full">
<img alt="Congo Basin Forest" className="w-full h-full object-cover object-center opacity-40" src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="max-w-3xl animate-fade-in-up">
<div className="flex items-center gap-3 mb-6">
<span className="h-px w-12 bg-emerald-500"></span>
<span className="text-sm font-medium text-emerald-400 uppercase tracking-widest">Who We Are</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-tight">
                    Mapping the Heart of Africa
                </h1>
<p className="text-lg md:text-xl font-normal text-slate-300 mb-10 leading-relaxed max-w-2xl">
                    InfoCongo is a news platform utilizing data and interactive maps to capture ongoing positive and negative changes in the Congo Basin—the second largest rainforest in the world.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-sm transition-all group" href="#mission">
                        Discover Our Mission
                        <iconify-icon className="ml-2 text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-transparent border border-slate-500 hover:border-white hover:bg-white/10 rounded-sm transition-all" href="#impact">
                        View Latest Reports
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="mission">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Our Core Foundation</h2>
<p className="text-base text-slate-600 leading-relaxed">Building on excellent reportage by local media, development organizations, and the Earth Journalism Network, we provide broader regional and global visibility to stories on the Congo Basin.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-slate-50 p-10 rounded-xl border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full animate-fade-in-up delay-100">
<div className="w-14 h-14 bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-800 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Our Mission</h3>
<p className="text-sm text-slate-600 leading-relaxed flex-grow">To combine interactive maps with compelling, localized stories to raise awareness and improve public perception of critical environmental issues across the Congo Basin.</p>
</div>

<div className="group bg-slate-50 p-10 rounded-xl border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full animate-fade-in-up delay-200">
<div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-emerald-800 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:eye-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Our Vision</h3>
<p className="text-sm text-slate-600 leading-relaxed flex-grow">A transparent, informed region where data-driven journalism empowers communities, holds stakeholders accountable, and safeguards the biodiversity of the world's second-largest rainforest.</p>
</div>

<div className="group bg-slate-50 p-10 rounded-xl border border-slate-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col h-full animate-fade-in-up delay-300">
<div className="w-14 h-14 bg-orange-100 text-orange-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-800 group-hover:text-white transition-colors">
<iconify-icon className="text-3xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-4">Our Objectives</h3>
<p className="text-sm text-slate-600 leading-relaxed flex-grow">To maintain a freely accessible, regularly updated platform of data and maps, fostering collaboration, partnership, and participation among journalists and citizens.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div className="max-w-2xl">
<span className="text-sm font-medium text-emerald-700 uppercase tracking-widest block mb-2">Areas of Focus</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">What We Cover</h2>
</div>
<a className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-emerald-700 transition-colors group" href="#">
                Explore all topics
                <iconify-icon className="ml-1 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group block relative h-[400px] bg-slate-800 overflow-hidden card-stripe-green" href="#">
<img alt="Deforestation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-6 card-content-z flex flex-col justify-end h-full">
<iconify-icon className="text-3xl text-emerald-400 mb-3 group-hover:text-white transition-colors" icon="solar:tree-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Deforestation &amp; Logging</h3>
<p className="text-sm text-slate-300 group-hover:text-white transition-colors line-clamp-2">Tracking the 1.5 million hectares of forest cover lost annually.</p>
</div>
</a>

<a className="group block relative h-[400px] bg-slate-800 overflow-hidden card-stripe-blue" href="#">
<img alt="Climate Change" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-6 card-content-z flex flex-col justify-end h-full">
<iconify-icon className="text-3xl text-blue-400 mb-3 group-hover:text-white transition-colors" icon="solar:cloud-water-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Climate Impact</h3>
<p className="text-sm text-slate-300 group-hover:text-white transition-colors line-clamp-2">Documenting the environmental shifts affecting local ecosystems.</p>
</div>
</a>

<a className="group block relative h-[400px] bg-slate-800 overflow-hidden card-stripe-orange" href="#">
<img alt="Wildlife" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1564760055775-d63b17a55c44?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-6 card-content-z flex flex-col justify-end h-full">
<iconify-icon className="text-3xl text-orange-400 mb-3 group-hover:text-white transition-colors" icon="solar:paw-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Wildlife Trafficking</h3>
<p className="text-sm text-slate-300 group-hover:text-white transition-colors line-clamp-2">Reporting on threats to biodiversity and endangered species.</p>
</div>
</a>

<a className="group block relative h-[400px] bg-slate-800 overflow-hidden card-stripe-teal" href="#">
<img alt="Resource Governance" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
<div className="absolute inset-x-0 bottom-0 p-6 card-content-z flex flex-col justify-end h-full">
<iconify-icon className="text-3xl text-teal-400 mb-3 group-hover:text-white transition-colors" icon="solar:buildings-linear"></iconify-icon>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Resource Governance</h3>
<p className="text-sm text-slate-300 group-hover:text-white transition-colors line-clamp-2">Monitoring mining, oil, and land grabs across the basin.</p>
</div>
</a>
</div>
</div>
</section>

<section className="flex flex-col lg:flex-row w-full" id="impact">

<div className="flex-1 bg-[#1e3a8a] p-12 md:p-20 flex flex-col justify-center text-white min-h-[300px] border-b lg:border-b-0 lg:border-r border-white/10">
<span className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight block mb-4">777k</span>
<span className="text-sm font-medium text-white/70 uppercase tracking-widest block mb-2">Square Kilometers</span>
<p className="text-sm text-blue-100/80 leading-relaxed mt-auto">The total size of the Congo Basin we monitor daily.</p>
</div>

<div className="flex-1 bg-[#065f46] p-12 md:p-20 flex flex-col justify-center text-white min-h-[300px] border-b lg:border-b-0 lg:border-r border-white/10">
<span className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight block mb-4">12.5%</span>
<span className="text-sm font-medium text-white/70 uppercase tracking-widest block mb-2">Global Rainforest</span>
<p className="text-sm text-emerald-100/80 leading-relaxed mt-auto">Contained within the DRC alone, representing a global asset.</p>
</div>

<div className="flex-1 bg-[#0f766e] p-12 md:p-20 flex flex-col justify-center text-white min-h-[300px] border-b lg:border-b-0 lg:border-r border-white/10">
<span className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight block mb-4">6</span>
<span className="text-sm font-medium text-white/70 uppercase tracking-widest block mb-2">Countries Covered</span>
<p className="text-sm text-teal-100/80 leading-relaxed mt-auto">Spanning Cameroon, CAR, DRC, Gabon, Eq. Guinea, and Rep. Congo.</p>
</div>

<div className="flex-1 bg-[#1e40af] p-12 md:p-20 flex flex-col justify-center text-white min-h-[300px]">
<span className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight block mb-4">50%</span>
<span className="text-sm font-medium text-white/70 uppercase tracking-widest block mb-2">Allocated Forest</span>
<p className="text-sm text-blue-100/80 leading-relaxed mt-auto">Percentage of the Congo Basin forest currently allocated for logging.</p>
</div>
</section>

<section className="py-24 bg-slate-900 relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fillOpacity=\\'1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-sm font-medium text-emerald-400 uppercase tracking-widest block mb-4">Interactive Data</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Visualizing The Basin</h2>
<p className="text-base text-slate-300 leading-relaxed mb-8">
                        Data and interactive maps on the InfoCongo website are updated regularly, available for free, and can be downloaded anytime. We map complex datasets across six sovereign nations to provide clear, actionable intelligence.
                    </p>
<ul className="grid grid-cols-2 gap-y-4 gap-x-8 mb-10">
<li className="flex items-center text-slate-200">
<iconify-icon className="text-emerald-500 mr-2 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Cameroon
                        </li>
<li className="flex items-center text-slate-200">
<iconify-icon className="text-emerald-500 mr-2 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Central African Republic
                        </li>
<li className="flex items-center text-slate-200">
<iconify-icon className="text-emerald-500 mr-2 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Democratic Rep. of Congo
                        </li>
<li className="flex items-center text-slate-200">
<iconify-icon className="text-emerald-500 mr-2 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Gabon
                        </li>
<li className="flex items-center text-slate-200">
<iconify-icon className="text-emerald-500 mr-2 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Equatorial Guinea
                        </li>
<li className="flex items-center text-slate-200">
<iconify-icon className="text-emerald-500 mr-2 text-lg" icon="solar:check-circle-linear"></iconify-icon>
                            Republic of Congo
                        </li>
</ul>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-900 bg-emerald-400 hover:bg-emerald-300 rounded-sm transition-colors" href="#">
                        Access Interactive Maps
                    </a>
</div>

<div className="relative bg-slate-800 rounded-xl border border-slate-700 p-2 shadow-2xl overflow-hidden aspect-video lg:aspect-square flex items-center justify-center group">
<img alt="Map View" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
<div className="absolute inset-0 bg-blue-900/20"></div>

<div className="absolute top-1/4 left-1/3 group-hover:scale-110 transition-transform cursor-pointer">
<div className="relative">
<iconify-icon className="text-3xl text-emerald-500 drop-shadow-lg" icon="solar:map-point-bold"></iconify-icon>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-medium px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">DRC Deforestation Alert</div>
</div>
</div>
<div className="absolute bottom-1/3 right-1/4 group-hover:scale-110 transition-transform cursor-pointer delay-100">
<div className="relative">
<iconify-icon className="text-3xl text-orange-500 drop-shadow-lg" icon="solar:map-point-bold"></iconify-icon>
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-medium px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Wildlife Tracking</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">

<div className="border-y border-slate-100 bg-slate-50 py-10 mb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<p className="text-xs font-medium text-slate-400 uppercase tracking-widest text-center mb-8">Supported by &amp; Partnered with</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl font-semibold tracking-tight text-slate-800">EARTH JOURNALISM NETWORK</span>
<span className="text-xl font-semibold tracking-tight text-slate-800">INTERNEWS</span>
<span className="text-xl font-semibold tracking-tight text-slate-800">CARPE</span>
<span className="text-xl font-semibold tracking-tight text-slate-800">USAID</span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Our Project Team</h2>
<p className="text-base text-slate-600">Dedicated professionals committed to bringing transparency and deep reporting to the Congo Basin.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-slate-200 mb-4 overflow-hidden border-2 border-slate-100">
<img alt="James Fahn" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=James+Fahn&amp;background=0f172a&amp;color=fff&amp;size=200"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">James Fahn</h3>
<p className="text-sm text-emerald-700 font-medium mb-2">Executive Director, EJN</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-slate-200 mb-4 overflow-hidden border-2 border-slate-100">
<img alt="Gustavo Faleiros" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Gustavo+Faleiros&amp;background=0f172a&amp;color=fff&amp;size=200"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">Gustavo Faleiros</h3>
<p className="text-sm text-emerald-700 font-medium mb-2">Project Coordinator</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-slate-200 mb-4 overflow-hidden border-2 border-slate-100">
<img alt="David Akana" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=David+Akana&amp;background=0f172a&amp;color=fff&amp;size=200"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">David Akana</h3>
<p className="text-sm text-emerald-700 font-medium mb-2">Managing Editor</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-slate-200 mb-4 overflow-hidden border-2 border-slate-100">
<img alt="Giuseppe Molinario" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Giuseppe+Molinario&amp;background=0f172a&amp;color=fff&amp;size=200"/>
</div>
<h3 className="text-lg font-semibold text-slate-900">Giuseppe Molinario</h3>
<p className="text-sm text-emerald-700 font-medium mb-2">Data Advisor</p>
<p className="text-xs text-slate-500">University of Maryland</p>
</div>
</div>
<div className="mt-20 border-t border-slate-200 pt-10 text-center">
<p className="text-base font-medium text-slate-800 mb-2">InfoCongo is built on collaboration.</p>
<p className="text-sm text-slate-600 mb-6">Do you have stories, maps, or data to share?</p>
<a className="inline-flex items-center text-emerald-700 font-medium hover:text-emerald-800 group" href="mailto:info@infocongo.org">
<iconify-icon className="mr-2 text-xl" icon="solar:letter-linear"></iconify-icon>
                    Contact Us: info@infocongo.org
                    <span className="block w-full h-px bg-emerald-700 absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a>
</div>
</div>
</section>

<footer className="bg-slate-950 py-12 border-t border-slate-900 text-center">
<div className="max-w-7xl mx-auto px-4">
<div className="flex items-center justify-center gap-2 mb-6 opacity-50">
<iconify-icon className="text-white text-2xl" icon="solar:map-point-linear"></iconify-icon>
<span className="font-semibold tracking-tighter text-lg text-white uppercase">INFOCONGO</span>
</div>
<p className="text-xs text-slate-500">© 2024 InfoCongo. All rights reserved. Mapping positive and negative changes in the Congo Basin.</p>
</div>
</footer>

    </>
  );
}
