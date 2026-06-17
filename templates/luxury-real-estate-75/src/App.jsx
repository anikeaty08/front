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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="font-serif text-xl tracking-tight text-slate-900 uppercase">
                Jibon Casbon <span className="text-amber-700">Group</span>
</div>
<a className="hidden md:inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-2.5 text-xs font-medium text-white shadow-sm hover:bg-slate-800 transition-colors duration-200" href="#contact">
                Contact Agent
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Real Estate" className="w-full h-full object-cover brightness-[0.85]" src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div className="text-white space-y-6">
<span className="inline-block py-1 px-3 border border-white/30 rounded-full text-xs font-medium tracking-wide uppercase bg-white/10 backdrop-blur-sm">
                    Exclusive Residences
                </span>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight leading-[1.1]">
                    Experience the Height of <span className="italic text-amber-200">Luxury Living</span>
</h1>
<p className="text-lg text-slate-200 font-light max-w-lg leading-relaxed">
                    Discover a sanctuary where modern elegance meets nature. Your dream home awaits in the heart of the most prestigious neighborhood.
                </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-2xl lg:max-w-md lg:ml-auto border border-slate-100/50">
<h3 className="text-2xl font-serif text-slate-900 mb-2">Request Information</h3>
<p className="text-sm text-slate-500 mb-6">Fill out the form below to receive exclusive details.</p>
<form className="space-y-4">
<div>
<label className="sr-only">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-700 focus:bg-white transition-all placeholder:text-slate-400" placeholder="Full Name" type="text"/>
</div>
<div>
<label className="sr-only">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-700 focus:bg-white transition-all placeholder:text-slate-400" placeholder="Email Address" type="email"/>
</div>
<div>
<label className="sr-only">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-amber-700 focus:bg-white transition-all placeholder:text-slate-400" placeholder="Phone Number" type="tel"/>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3.5 rounded-lg transition-all duration-300 text-sm tracking-wide shadow-lg shadow-slate-900/20" type="button">
                        Get Information
                    </button>
</form>
</div>
</div>
</header>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-serif text-slate-900 mb-4 tracking-tight">World-Class Amenities</h2>
<div className="h-1 w-20 bg-amber-700 mx-auto opacity-50"></div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">

<div className="group p-6 rounded-xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 text-center">
<div className="w-12 h-12 mx-auto bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-800 group-hover:text-white transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:waves" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-lg text-slate-900 mb-2">Infinity Pool</h3>
<p className="text-sm text-slate-500 font-light">Expansive swimming areas with breathtaking views.</p>
</div>

<div className="group p-6 rounded-xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 text-center">
<div className="w-12 h-12 mx-auto bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-800 group-hover:text-white transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:dumbbell" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-lg text-slate-900 mb-2">Fitness Center</h3>
<p className="text-sm text-slate-500 font-light">State-of-the-art equipment for your daily wellness.</p>
</div>

<div className="group p-6 rounded-xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 text-center">
<div className="w-12 h-12 mx-auto bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-800 group-hover:text-white transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:shield-check" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-lg text-slate-900 mb-2">24/7 Security</h3>
<p className="text-sm text-slate-500 font-light">Gated community with round-the-clock surveillance.</p>
</div>

<div className="group p-6 rounded-xl bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 text-center">
<div className="w-12 h-12 mx-auto bg-amber-100 text-amber-800 rounded-full flex items-center justify-center mb-4 group-hover:bg-amber-800 group-hover:text-white transition-colors">
<span className="iconify" data-height="24" data-icon="lucide:palmtree" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="font-serif text-lg text-slate-900 mb-2">Private Gardens</h3>
<p className="text-sm text-slate-500 font-light">Lush landscaping and private walking trails.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl lg:text-4xl font-serif text-slate-900 mb-3 tracking-tight">Available Models</h2>
<p className="text-slate-500">Choose the perfect layout for your lifestyle.</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
<div className="relative overflow-hidden aspect-[4/3]">
<img alt="The Horizon" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-serif text-slate-900">The Horizon</h3>
<span className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-1 rounded uppercase tracking-wider">Available</span>
</div>
<div className="flex items-center space-x-4 text-slate-500 text-sm mb-6">
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:bed-double" style={{strokeWidth: '1.5'}}></span> 3 Bed
                            </div>
<div className="w-px h-3 bg-slate-300"></div>
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:bath" style={{strokeWidth: '1.5'}}></span> 2.5 Bath
                            </div>
<div className="w-px h-3 bg-slate-300"></div>
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:ruler" style={{strokeWidth: '1.5'}}></span> 2,400 sqft
                            </div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<div>
<p className="text-xs text-slate-400 uppercase tracking-wide">Starting from</p>
<p className="text-lg font-serif text-slate-900">$450,000</p>
</div>
<button className="px-5 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors">
                                More details
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
<div className="relative overflow-hidden aspect-[4/3]">
<img alt="The Estate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-serif text-slate-900">The Estate</h3>
<span className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-1 rounded uppercase tracking-wider">Available</span>
</div>
<div className="flex items-center space-x-4 text-slate-500 text-sm mb-6">
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:bed-double" style={{strokeWidth: '1.5'}}></span> 4 Bed
                            </div>
<div className="w-px h-3 bg-slate-300"></div>
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:bath" style={{strokeWidth: '1.5'}}></span> 3.5 Bath
                            </div>
<div className="w-px h-3 bg-slate-300"></div>
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:ruler" style={{strokeWidth: '1.5'}}></span> 3,200 sqft
                            </div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<div>
<p className="text-xs text-slate-400 uppercase tracking-wide">Starting from</p>
<p className="text-lg font-serif text-slate-900">$625,000</p>
</div>
<button className="px-5 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors">
                                More details
                            </button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group">
<div className="relative overflow-hidden aspect-[4/3]">
<img alt="The Pinnacle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&amp;w=1984&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-serif text-slate-900">The Pinnacle</h3>
<span className="bg-slate-100 text-slate-600 text-[10px] font-semibold px-2 py-1 rounded uppercase tracking-wider">Limited</span>
</div>
<div className="flex items-center space-x-4 text-slate-500 text-sm mb-6">
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:bed-double" style={{strokeWidth: '1.5'}}></span> 5 Bed
                            </div>
<div className="w-px h-3 bg-slate-300"></div>
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:bath" style={{strokeWidth: '1.5'}}></span> 5 Bath
                            </div>
<div className="w-px h-3 bg-slate-300"></div>
<div className="flex items-center gap-1.5">
<span className="iconify" data-icon="lucide:ruler" style={{strokeWidth: '1.5'}}></span> 4,500 sqft
                            </div>
</div>
<div className="flex items-center justify-between pt-4 border-t border-slate-100">
<div>
<p className="text-xs text-slate-400 uppercase tracking-wide">Starting from</p>
<p className="text-lg font-serif text-slate-900">$950,000</p>
</div>
<button className="px-5 py-2 rounded-lg border border-slate-200 text-sm font-medium text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors">
                                More details
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full h-96 bg-slate-200 grayscale contrast-[0.9] opacity-90">
<iframe allowfullscreen="" frameborder="0" height="100%" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1sen!2sus!4v1510579767215" style={{border: '0'}} width="100%"></iframe>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
<div className="grid lg:grid-cols-2">

<div className="p-10 lg:p-16 flex flex-col justify-center">
<h2 className="text-3xl lg:text-4xl font-serif text-white mb-8 tracking-tight">Reasons to Invest</h2>
<ul className="space-y-6">
<li className="flex items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-700/20 text-amber-500 flex items-center justify-center mt-0.5">
<span className="iconify" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '2'}}></span>
</div>
<div className="ml-4">
<h4 className="text-lg font-medium text-white">High Return on Investment</h4>
<p className="text-slate-400 text-sm mt-1">Historically proven appreciation in this prime coastal location.</p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-700/20 text-amber-500 flex items-center justify-center mt-0.5">
<span className="iconify" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '2'}}></span>
</div>
<div className="ml-4">
<h4 className="text-lg font-medium text-white">Turnkey Management</h4>
<p className="text-slate-400 text-sm mt-1">Professional property management services available for worry-free ownership.</p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-700/20 text-amber-500 flex items-center justify-center mt-0.5">
<span className="iconify" data-height="14" data-icon="lucide:check" data-width="14" style={{strokeWidth: '2'}}></span>
</div>
<div className="ml-4">
<h4 className="text-lg font-medium text-white">Prime Location</h4>
<p className="text-slate-400 text-sm mt-1">Minutes from the airport, shopping districts, and pristine beaches.</p>
</div>
</li>
</ul>
</div>

<div className="bg-amber-900/10 p-10 lg:p-16 border-l border-white/5 flex flex-col justify-center">
<h3 className="text-2xl font-serif text-white mb-6">Request Investment Packet</h3>
<form className="space-y-4">
<div>
<label className="sr-only">Full Name</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:bg-slate-800 transition-all placeholder:text-slate-500" placeholder="Full Name" type="text"/>
</div>
<div>
<label className="sr-only">Email Address</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:bg-slate-800 transition-all placeholder:text-slate-500" placeholder="Email Address" type="email"/>
</div>
<div>
<label className="sr-only">Phone Number</label>
<input className="w-full bg-slate-800/50 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:ring-1 focus:ring-amber-500 focus:bg-slate-800 transition-all placeholder:text-slate-500" placeholder="Phone Number" type="tel"/>
</div>
<button className="w-full bg-amber-700 hover:bg-amber-600 text-white font-medium py-3.5 rounded-lg transition-all duration-300 text-sm tracking-wide shadow-lg shadow-amber-900/20" type="button">
                                Download Brochure
                            </button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-serif text-slate-900 mb-12 text-center tracking-tight">Client Testimonials</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative">
<span className="iconify absolute top-6 right-6 text-slate-100" data-height="48" data-icon="lucide:quote" data-width="48"></span>
<div className="flex text-amber-500 mb-4">
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
</div>
<p className="text-slate-600 mb-6 relative z-10 leading-relaxed">"The most seamless buying process I've ever experienced. The attention to detail in the properties is unmatched."</p>
<div className="flex items-center">
<div className="w-10 h-10 bg-slate-200 rounded-full mr-3 flex items-center justify-center font-serif text-slate-500 text-sm font-semibold">JD</div>
<div>
<h4 className="font-serif text-slate-900 font-medium">John Doe</h4>
<p className="text-xs text-slate-400">Homeowner</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative">
<span className="iconify absolute top-6 right-6 text-slate-100" data-height="48" data-icon="lucide:quote" data-width="48"></span>
<div className="flex text-amber-500 mb-4">
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
</div>
<p className="text-slate-600 mb-6 relative z-10 leading-relaxed">"A truly premium experience. The amenities are world-class and the location is simply perfect for my family."</p>
<div className="flex items-center">
<div className="w-10 h-10 bg-slate-200 rounded-full mr-3 flex items-center justify-center font-serif text-slate-500 text-sm font-semibold">JS</div>
<div>
<h4 className="font-serif text-slate-900 font-medium">Jane Smith</h4>
<p className="text-xs text-slate-400">Investor</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative">
<span className="iconify absolute top-6 right-6 text-slate-100" data-height="48" data-icon="lucide:quote" data-width="48"></span>
<div className="flex text-amber-500 mb-4">
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
<span className="iconify" data-height="16" data-icon="lucide:star" data-width="16" style={{fill: 'currentColor', stroke: 'none'}}></span>
</div>
<p className="text-slate-600 mb-6 relative z-10 leading-relaxed">"From the first inquiry to closing, the team was professional and transparent. Highly recommended."</p>
<div className="flex items-center">
<div className="w-10 h-10 bg-slate-200 rounded-full mr-3 flex items-center justify-center font-serif text-slate-500 text-sm font-semibold">MJ</div>
<div>
<h4 className="font-serif text-slate-900 font-medium">Michael Johnson</h4>
<p className="text-xs text-slate-400">Resident</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">

<div className="space-y-4">
<h5 className="font-serif text-lg tracking-tight text-white mb-2">About</h5>
<p className="text-slate-400 text-sm leading-relaxed">
                        Jibon Casbon Group is dedicated to providing exceptional real estate experiences through premium properties and world-class service.
                    </p>
</div>

<div className="space-y-4">
<h5 className="font-serif text-lg tracking-tight text-white mb-2">Quick Links</h5>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-amber-500 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Amenities</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Models</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Testimonials</a></li>
</ul>
</div>

<div className="space-y-4">
<h5 className="font-serif text-lg tracking-tight text-white mb-2">Get more information</h5>
<ul className="space-y-2 text-sm text-slate-400">
<li><a className="hover:text-amber-500 transition-colors" href="#">Investment Guide</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Brochure Download</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">Schedule a Tour</a></li>
<li><a className="hover:text-amber-500 transition-colors" href="#">FAQ</a></li>
</ul>
</div>

<div className="space-y-4" id="contact">
<h5 className="font-serif text-lg tracking-tight text-white mb-2">Contact</h5>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex items-start gap-3">
<span className="iconify text-amber-500 mt-0.5" data-height="16" data-icon="lucide:map-pin" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            123 Luxury Ave, Suite 100<br/>Paradise City, PC 12345
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-amber-500" data-height="16" data-icon="lucide:phone" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            +1 (555) 123-4567
                        </li>
<li className="flex items-center gap-3">
<span className="iconify text-amber-500" data-height="16" data-icon="lucide:mail" data-width="16" style={{strokeWidth: '1.5'}}></span>
                            info@jiboncasbon.com
                        </li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">
                    © 2024 Jibon Casbon Group. All rights reserved.
                </p>
<div className="flex space-x-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:instagram" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:facebook" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="iconify" data-height="20" data-icon="lucide:twitter" data-width="20" style={{strokeWidth: '1.5'}}></span>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
