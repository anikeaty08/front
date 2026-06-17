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



        function switchPage(pageId) {
            // Hide all pages
            document.getElementById('page-home').classList.add('hidden');
            document.getElementById('page-services').classList.add('hidden');
            document.getElementById('page-careers').classList.add('hidden');
            document.getElementById('page-coupons').classList.add('hidden');
            
            // Show selected page
            const selected = document.getElementById('page-' + pageId);
            if(selected) {
                selected.classList.remove('hidden');
                // Scroll to top
                window.scrollTo(0, 0);
            }
        }
    
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
      

<div className="hidden md:block bg-white border-b border-slate-100 text-xs">
<div className="max-w-7xl mx-auto px-4 h-10 flex justify-end items-center gap-6 text-slate-500 font-medium">
<a className="hover:text-brand-red transition-colors" href="#" onclick="switchPage('careers')">CAREERS</a>
<a className="hover:text-brand-red transition-colors" href="#">CONTACT US</a>
<a className="hover:text-brand-red transition-colors" href="#">RESOURCES</a>
<div className="flex items-center bg-slate-100 rounded px-2 py-1 gap-2 w-48">
<input className="bg-transparent border-none outline-none text-xs w-full placeholder:text-slate-400" placeholder="How can we help you today?" type="text"/>
<iconify-icon className="text-slate-400" icon="lucide:search"></iconify-icon>
</div>
</div>
</div>

<nav className="sticky top-0 w-full z-50 bg-white shadow-sm h-20">
<div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">

<div className="flex items-center gap-6">
<a className="flex flex-col items-center leading-none group" href="#" onclick="switchPage('home')">
<div className="bg-brand-purple text-white px-2 py-1 rounded-sm skew-x-[-10deg]">
<span className="font-black text-2xl tracking-tighter italic skew-x-[10deg] block">ROTO</span>
</div>
<span className="text-brand-red font-black text-xl tracking-tighter italic -mt-1 group-hover:text-red-700 transition-colors">ROOTER</span>
</a>

<div className="hidden lg:flex items-center gap-1 text-sm font-bold text-brand-purple">
<iconify-icon className="text-brand-red" icon="lucide:map-pin"></iconify-icon>
<span>LAKEWOOD, CO</span>
</div>
</div>

<div className="hidden lg:flex items-center gap-6 text-sm font-bold text-slate-700">
<button className="hover:text-brand-red uppercase" onclick="switchPage('home')">Locations</button>
<button className="hover:text-brand-red uppercase flex items-center gap-1" onclick="switchPage('services')">
                    Plumbing <iconify-icon icon="lucide:chevron-down" width="12"></iconify-icon>
</button>
<button className="hover:text-brand-red uppercase flex items-center gap-1" onclick="switchPage('services')">
                    Drains <iconify-icon icon="lucide:chevron-down" width="12"></iconify-icon>
</button>
<button className="hover:text-brand-red uppercase" onclick="switchPage('coupons')">Coupons</button>
</div>

<div className="flex items-center gap-3">
<button className="hidden md:flex bg-brand-red hover:bg-red-700 text-white px-5 py-2.5 rounded font-bold text-sm uppercase tracking-wide items-center gap-2 transition-all shadow-md" onclick="switchPage('services')">
<iconify-icon icon="lucide:calendar-days" width="16"></iconify-icon>
                    Schedule
                </button>
<button className="flex bg-brand-purple hover:bg-indigo-900 text-white px-5 py-2.5 rounded font-bold text-sm uppercase tracking-wide items-center gap-2 transition-all shadow-md">
<iconify-icon icon="lucide:phone" width="16"></iconify-icon>
<span className="hidden sm:inline">303-217-2188</span>
</button>
</div>
</div>
</nav>

<main className="page-transition" id="page-home">

<section className="relative bg-brand-lavender overflow-hidden">
<div className="max-w-7xl mx-auto px-4 py-12 md:py-20 flex flex-col md:flex-row items-center">

<div className="w-full md:w-1/2 relative z-10 mb-10 md:mb-0">
<img alt="Plumber with Van" className="rounded-xl shadow-2xl border-4 border-white object-cover h-[400px] w-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
<div className="flex items-center gap-2">
<iconify-icon icon="logos:google-icon" width="24"></iconify-icon>
<div className="flex text-yellow-400 text-sm">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
</div>
<div className="text-xs font-bold text-slate-500 mt-1">4.9/5 RATING • 2,000+ REVIEWS</div>
</div>
</div>

<div className="w-full md:w-1/2 md:pl-16 text-center md:text-left">
<h1 className="text-3xl md:text-5xl font-black text-brand-purple uppercase leading-tight mb-4">
                        The Plumbing experts you've trusted for over 90 years.
                    </h1>
<div className="text-brand-red font-bold text-xl mb-2">Call Us Now!</div>
<div className="text-4xl md:text-6xl font-black text-brand-purple mb-8">303-217-2188</div>
<button className="bg-brand-purple hover:bg-indigo-900 text-white text-lg font-bold px-8 py-4 rounded shadow-lg uppercase tracking-wide inline-flex items-center gap-3 transition-transform hover:-translate-y-1" onclick="switchPage('services')">
                        Schedule Online
                        <iconify-icon icon="lucide:calendar-check-2"></iconify-icon>
</button>
</div>
</div>
</section>

<div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 relative z-20 shadow-md">
<div className="max-w-7xl mx-auto px-4 flex justify-center items-center gap-2 text-sm md:text-base font-bold uppercase tracking-wide">
<span>Free Estimates &amp; No Trip Charge. Same Day Service</span>
<iconify-icon icon="lucide:chevron-right" strokeWidth="3"></iconify-icon>
</div>
</div>

<section className="relative pt-24 pb-32 bg-brand-purple slant-top -mt-10 z-10">
<div className="max-w-7xl mx-auto px-4 pt-10">
<h2 className="text-4xl font-condensed font-bold text-white uppercase mb-12 border-l-4 border-brand-red pl-4">Our Services</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-8 rounded shadow-xl text-center group hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-100 group-hover:border-blue-600 transition-colors">
<iconify-icon icon="lucide:alert-circle" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 uppercase mb-3">Emergency Plumbing</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">24/7 rapid response for critical failures. We are ready for nights, weekends &amp; holidays.</p>
<button className="text-brand-purple font-bold text-xs uppercase flex items-center justify-center gap-1 group-hover:gap-2 transition-all" onclick="switchPage('services')">
                            Explore Service <iconify-icon icon="lucide:chevron-right"></iconify-icon>
</button>
</div>

<div className="bg-white p-8 rounded shadow-xl text-center group hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 bg-red-50 text-brand-red rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-red-100 group-hover:border-brand-red transition-colors">
<iconify-icon icon="lucide:wrench" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 uppercase mb-3">Plumbing &amp; Drains</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">As the largest plumbing and drain service company, we make thousands of repairs daily.</p>
<button className="text-brand-purple font-bold text-xs uppercase flex items-center justify-center gap-1 group-hover:gap-2 transition-all" onclick="switchPage('services')">
                            Explore Service <iconify-icon icon="lucide:chevron-right"></iconify-icon>
</button>
</div>

<div className="bg-white p-8 rounded shadow-xl text-center group hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-purple-100 group-hover:border-purple-600 transition-colors">
<iconify-icon icon="lucide:droplets" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 uppercase mb-3">Water Damage</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">State-of-the-art water extraction and cleanup equipment to restore your home fast.</p>
<button className="text-brand-purple font-bold text-xs uppercase flex items-center justify-center gap-1 group-hover:gap-2 transition-all" onclick="switchPage('services')">
                            Explore Service <iconify-icon icon="lucide:chevron-right"></iconify-icon>
</button>
</div>

<div className="bg-white p-8 rounded shadow-xl text-center group hover:-translate-y-2 transition-transform duration-300">
<div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-orange-100 group-hover:border-orange-600 transition-colors">
<iconify-icon icon="lucide:flame" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 uppercase mb-3">Water Heaters</h3>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">Repair and replacement of gas, electric, and tankless water heating systems.</p>
<button className="text-brand-purple font-bold text-xs uppercase flex items-center justify-center gap-1 group-hover:gap-2 transition-all" onclick="switchPage('services')">
                            Explore Service <iconify-icon icon="lucide:chevron-right"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-4xl font-condensed font-bold text-brand-purple uppercase mb-2">Leave Plumbing to the Pros</h2>
<p className="font-bold text-slate-500 text-sm mb-10 uppercase tracking-wide">Because with ROTO, you get more than a guarantee.</p>
<div className="space-y-8">
<div>
<h3 className="text-lg font-bold text-brand-purple border-b-2 border-brand-red inline-block mb-2 uppercase">Reputation</h3>
<p className="text-sm text-slate-600">Highly-trained professionals since 1935. A job done right by the original experts.</p>
</div>
<div>
<h3 className="text-lg font-bold text-brand-purple border-b-2 border-brand-red inline-block mb-2 uppercase">Quality</h3>
<p className="text-sm text-slate-600">Full-service drain cleaning using state-of-the-art diagnostics and equipment.</p>
</div>
<div>
<h3 className="text-lg font-bold text-brand-purple border-b-2 border-brand-red inline-block mb-2 uppercase">Transparency</h3>
<p className="text-sm text-slate-600">No hidden or extra charges for drain service on holidays, nights, and weekends.</p>
</div>
<div>
<button className="text-brand-red font-bold text-sm uppercase flex items-center gap-1 hover:gap-2 transition-all">
                                See Financing Options <iconify-icon icon="lucide:chevron-right"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="relative">
<img alt="Smiling Plumber" className="w-full h-auto rounded shadow-lg object-cover mb-6" src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="grid grid-cols-2 gap-4">
<img alt="Plumber Working" className="rounded shadow-lg object-cover h-40 w-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img alt="Handshake" className="rounded shadow-lg object-cover h-40 w-full" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="bg-slate-100 py-20">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<h2 className="text-4xl font-condensed font-bold text-brand-purple uppercase mb-4">You have questions,<br/>we have answers.</h2>
<p className="text-slate-600 mb-8 text-lg">Read our most frequently asked questions for your plumbing needs, or watch our latest videos.</p>
<button className="bg-brand-purple hover:bg-indigo-900 text-white font-bold py-3 px-8 rounded shadow uppercase tracking-wide">
                        Read Our FAQs
                    </button>
</div>
<div className="flex-1">

<img alt="Team of Plumbers" className="w-full rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="max-w-7xl mx-auto px-4 mt-20">
<h3 className="text-xl font-bold text-brand-purple uppercase mb-6">Watch. Learn. Fix. Download our Mobile App!</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white rounded overflow-hidden shadow-lg group cursor-pointer">
<div className="relative h-48 bg-slate-800">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl drop-shadow-lg" icon="lucide:play-circle"></iconify-icon>
</div>
<div className="p-4 font-bold text-sm text-brand-purple uppercase">Do you need a battery backup sump pump?</div>
</div>
<div className="bg-white rounded overflow-hidden shadow-lg group cursor-pointer">
<div className="relative h-48 bg-slate-800">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl drop-shadow-lg" icon="lucide:play-circle"></iconify-icon>
</div>
<div className="p-4 font-bold text-sm text-brand-purple uppercase">Roto-Rooter | We do both Sequel</div>
</div>
<div className="bg-white rounded overflow-hidden shadow-lg group cursor-pointer">
<div className="relative h-48 bg-slate-800">
<img className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-5xl drop-shadow-lg" icon="lucide:play-circle"></iconify-icon>
</div>
<div className="p-4 font-bold text-sm text-brand-purple uppercase">What to expect when you schedule service</div>
</div>
</div>
<div className="text-center mt-10">
<button className="bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded shadow uppercase tracking-wide">Explore Videos</button>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-white border border-slate-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-4">
<iconify-icon icon="logos:google-icon"></iconify-icon>
<div className="flex text-yellow-400">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-600 mb-4">"The technician was polite and took care of a simple water heater problem and took the time to explain things to me. I am very pleased."</p>
<p className="text-xs font-bold text-slate-400 uppercase">- John D.</p>
</div>
<div className="bg-white border border-slate-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-4">
<iconify-icon icon="logos:google-icon"></iconify-icon>
<div className="flex text-yellow-400">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-600 mb-4">"Louis was very professional and did a fantastic job getting my plumbing working."</p>
<p className="text-xs font-bold text-slate-400 uppercase">- Sarah M.</p>
</div>
<div className="bg-white border border-slate-100 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center gap-2 mb-4">
<iconify-icon icon="logos:google-icon"></iconify-icon>
<div className="flex text-yellow-400">
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star"></iconify-icon>
</div>
</div>
<p className="text-sm text-slate-600 mb-4">"Jason was polite, explained his assessment thoroughly, and definitely went the extra mile to get us set up for the next step."</p>
<p className="text-xs font-bold text-slate-400 uppercase">- Mike T.</p>
</div>
</div>
<div className="text-center mt-8">
<a className="text-brand-purple font-bold text-xs uppercase flex items-center justify-center gap-1 hover:gap-2 transition-all" href="#">
                        More from our customers <iconify-icon icon="lucide:chevron-right"></iconify-icon>
</a>
</div>
</div>
</section>
</main>

<main className="hidden page-transition" id="page-services">
<section className="bg-brand-purple py-20 text-white relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
<h1 className="text-5xl font-condensed font-bold uppercase mb-4">Complete Plumbing Services</h1>
<p className="text-xl text-indigo-200 max-w-2xl mx-auto">From clogged drains to major pipe repairs, our licensed plumbers handle it all.</p>
</div>
</section>
<section className="py-16 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded shadow border-t-4 border-brand-purple">
<h3 className="text-2xl font-condensed font-bold text-brand-purple uppercase mb-6 flex items-center gap-2">
<iconify-icon className="text-brand-red" icon="lucide:wrench"></iconify-icon> General Plumbing
                    </h3>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<input className="accent-brand-red h-5 w-5" type="checkbox"/>
<span className="text-slate-700 font-medium">Leaky Faucets &amp; Toilets</span>
</li>
<li className="flex items-center gap-3">
<input className="accent-brand-red h-5 w-5" type="checkbox"/>
<span className="text-slate-700 font-medium">Garbage Disposal Repair</span>
</li>
<li className="flex items-center gap-3">
<input className="accent-brand-red h-5 w-5" type="checkbox"/>
<span className="text-slate-700 font-medium">Sump Pump Installation</span>
</li>
<li className="flex items-center gap-3">
<input className="accent-brand-red h-5 w-5" type="checkbox"/>
<span className="text-slate-700 font-medium">Pipe Repair</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded shadow border-t-4 border-brand-purple">
<h3 className="text-2xl font-condensed font-bold text-brand-purple uppercase mb-6 flex items-center gap-2">
<iconify-icon className="text-brand-red" icon="lucide:droplets"></iconify-icon> Drain Cleaning
                    </h3>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<input className="accent-brand-red h-5 w-5" type="checkbox"/>
<span className="text-slate-700 font-medium">Clogged Kitchen Drains</span>
</li>
<li className="flex items-center gap-3">
<input className="accent-brand-red h-5 w-5" type="checkbox"/>
<span className="text-slate-700 font-medium">Bathroom Sink Clogs</span>
</li>
<li className="flex items-center gap-3">
<input className="accent-brand-red h-5 w-5" type="checkbox"/>
<span className="text-slate-700 font-medium">Main Sewer Line</span>
</li>
<li className="flex items-center gap-3">
<input className="accent-brand-red h-5 w-5" type="checkbox"/>
<span className="text-slate-700 font-medium">Camera Inspection</span>
</li>
</ul>
</div>

<div className="bg-white p-8 rounded shadow border-t-4 border-brand-purple">
<h3 className="text-2xl font-condensed font-bold text-brand-purple uppercase mb-6 flex items-center gap-2">
<iconify-icon className="text-brand-red" icon="lucide:home"></iconify-icon> Water Damage
                    </h3>
<ul className="space-y-4">
<li className="flex items-center gap-3">
<input className="accent-brand-red h-5 w-5" type="checkbox"/>
<span className="text-slate-700 font-medium">Water Extraction</span>
</li>
<li className="flex items-center gap-3">
<input className="accent-brand-red h-5 w-5" type="checkbox"/>
<span className="text-slate-700 font-medium">Mold Remediation</span>
</li>
<li className="flex items-center gap-3">
<input className="accent-brand-red h-5 w-5" type="checkbox"/>
<span className="text-slate-700 font-medium">Sewage Cleanup</span>
</li>
<li className="flex items-center gap-3">
<input className="accent-brand-red h-5 w-5" type="checkbox"/>
<span className="text-slate-700 font-medium">Drying &amp; Dehumidification</span>
</li>
</ul>
</div>
</div>
<div className="max-w-2xl mx-auto px-4 mt-16 text-center">
<button className="bg-brand-red hover:bg-red-700 text-white font-bold py-4 px-12 rounded shadow-lg uppercase text-lg tracking-wide w-full md:w-auto">
                    Continue to Booking
                </button>
<p className="text-xs text-slate-400 mt-4">By clicking continue, you agree to receive text messages for service updates.</p>
</div>
</section>
</main>

<main className="hidden page-transition" id="page-careers">
<section className="bg-brand-purple py-24 text-white relative">
<div className="absolute inset-0 bg-black/20"></div>
<div className="max-w-7xl mx-auto px-4 relative z-10">
<div className="inline-block bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1 mb-4 rounded">Now Hiring</div>
<h1 className="text-5xl md:text-7xl font-condensed font-bold uppercase mb-6">The Buck$ Start Here.</h1>
<p className="text-2xl font-light mb-8 max-w-2xl">Join the nation's premier plumbing &amp; drain cleaning company. Experienced plumbers earn top dollar.</p>
<button className="bg-white text-brand-purple hover:bg-slate-100 font-bold py-3 px-8 rounded shadow uppercase tracking-wide">
                    View Open Positions
                </button>
</div>
</section>
<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<img className="rounded shadow-xl" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div>
<h2 className="text-3xl font-condensed font-bold text-brand-purple uppercase mb-6">Why Join ROTO?</h2>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:dollar-sign" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-brand-purple uppercase">Top Pay</h4>
<p className="text-sm text-slate-600">Commission-based pay structure with unlimited earning potential.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:shield-check" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-brand-purple uppercase">Full Benefits</h4>
<p className="text-sm text-slate-600">Medical, dental, vision, and 401(k) matching for eligible employees.</p>
</div>
</li>
<li className="flex gap-4">
<div className="w-10 h-10 bg-purple-100 text-brand-purple rounded-full flex items-center justify-center shrink-0">
<iconify-icon icon="lucide:truck" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-brand-purple uppercase">Company Vehicle</h4>
<p className="text-sm text-slate-600">Take your truck home at night. Gas and maintenance paid by us.</p>
</div>
</li>
</ul>
</div>
</div>
</section>
</main>

<main className="hidden page-transition" id="page-coupons">
<section className="bg-brand-lavender py-16">
<div className="max-w-7xl mx-auto px-4 text-center">
<h1 className="text-4xl font-condensed font-bold text-brand-purple uppercase mb-4">Special Offers &amp; Coupons</h1>
<p className="text-slate-600">Save on your next service with these limited time offers.</p>
</div>
</section>
<section className="py-16 bg-white">
<div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="border-2 border-dashed border-brand-red p-8 rounded bg-red-50 relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-bold px-3 py-1 uppercase rounded-full">Limited Time</div>
<div className="text-center">
<div className="text-5xl font-black text-brand-red mb-2">$75 OFF</div>
<div className="text-xl font-bold text-brand-purple uppercase mb-4">Any Plumbing Service</div>
<p className="text-sm text-slate-600 mb-6">Valid for any residential plumbing repair or installation over $250.</p>
<button className="w-full bg-brand-purple text-white font-bold py-2 rounded uppercase text-sm">Print Coupon</button>
</div>
</div>

<div className="border-2 border-dashed border-slate-300 p-8 rounded bg-white relative">
<div className="text-center">
<div className="text-5xl font-black text-brand-purple mb-2">$50 OFF</div>
<div className="text-xl font-bold text-brand-purple uppercase mb-4">Drain Cleaning</div>
<p className="text-sm text-slate-600 mb-6">Get your flow back. Valid for main line or secondary drain cleaning.</p>
<button className="w-full bg-brand-purple text-white font-bold py-2 rounded uppercase text-sm">Print Coupon</button>
</div>
</div>

<div className="border-2 border-dashed border-slate-300 p-8 rounded bg-white relative">
<div className="text-center">
<div className="text-5xl font-black text-brand-purple mb-2">FREE</div>
<div className="text-xl font-bold text-brand-purple uppercase mb-4">Camera Inspection</div>
<p className="text-sm text-slate-600 mb-6">With any main line drain clearing service. See the root of the problem.</p>
<button className="w-full bg-brand-purple text-white font-bold py-2 rounded uppercase text-sm">Print Coupon</button>
</div>
</div>
</div>
</section>
</main>

<div className="bg-brand-purple py-6 border-b border-indigo-900">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
<h2 className="text-2xl md:text-3xl font-condensed font-bold text-white italic uppercase">The Buck$ Start Here. <span className="not-italic font-normal font-sans text-indigo-300 text-lg capitalize">Plumbers Wanted!</span></h2>
<button className="bg-brand-red hover:bg-red-700 text-white font-bold py-2 px-6 rounded shadow uppercase tracking-wide text-sm" onclick="switchPage('careers')">
                Career Opportunities
            </button>
</div>
</div>

<div className="bg-slate-100 py-12">
<div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="text-center md:text-left">
<h3 className="text-3xl font-condensed font-bold text-brand-purple uppercase mb-2">Introducing the<br/>ROTO Mobile App</h3>
<p className="text-slate-600 text-sm mb-6">The Plumbing Pros, in the palm of your hand!</p>
<div className="flex gap-4 justify-center md:justify-start">
<button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 text-xs">
<iconify-icon icon="logos:apple" width="20"></iconify-icon>
<div className="text-left">
<div className="leading-none text-[10px]">Download on the</div>
<div className="font-bold leading-none text-sm">App Store</div>
</div>
</button>
<button className="bg-black text-white px-4 py-2 rounded flex items-center gap-2 text-xs">
<iconify-icon icon="logos:google-play-icon" width="20"></iconify-icon>
<div className="text-left">
<div className="leading-none text-[10px]">GET IT ON</div>
<div className="font-bold leading-none text-sm">Google Play</div>
</div>
</button>
</div>
</div>
<div className="flex items-center gap-8">
<iconify-icon className="text-slate-800" icon="lucide:qr-code" width="100"></iconify-icon>
<img alt="App Mockup" className="w-24 h-48 object-cover rounded-xl border-4 border-slate-800 shadow-xl" src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<footer className="bg-slate-100 pt-10 pb-6 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 text-center">
<div className="flex justify-center mb-8">
<div className="text-center">
<div className="flex items-center justify-center gap-2 mb-2 text-brand-red font-bold animate-bounce">
<iconify-icon icon="lucide:music" width="20"></iconify-icon>
<span className="italic">And Away Go Troubles Down the Drain</span>
<iconify-icon icon="lucide:music" width="20"></iconify-icon>
</div>
<a className="flex flex-col items-center leading-none group mx-auto w-fit" href="#">
<div className="bg-brand-purple text-white px-3 py-1.5 rounded-sm skew-x-[-10deg]">
<span className="font-black text-3xl tracking-tighter italic skew-x-[10deg] block">ROTO</span>
</div>
<span className="text-brand-red font-black text-2xl tracking-tighter italic -mt-1">ROOTER</span>
</a>
</div>
</div>
<div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-slate-600 uppercase mb-8">
<a className="hover:text-brand-red" href="#">Schedule Service</a>
<a className="hover:text-brand-red" href="#">Contact Us</a>
<a className="hover:text-brand-red" href="#">Products</a>
<a className="hover:text-brand-red" href="#">About Us</a>
<a className="hover:text-brand-red" href="#">Company Store</a>
<a className="hover:text-brand-red" href="#">Canadian Site</a>
<a className="hover:text-brand-red" href="#">Sitemap</a>
<a className="hover:text-brand-red" href="#" onclick="switchPage('careers')">Careers</a>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 gap-4">
<div className="text-center md:text-left">
<p className="mb-2">Copyright 2006-2024 Roto-Rooter. All rights reserved. All available services, hours of operations, pricing structure, and guarantees may vary by location.</p>
<div className="flex flex-wrap justify-center md:justify-start gap-4 uppercase font-bold text-slate-600">
<a href="#">Do Not Sell My Personal Information</a>
<a href="#">Unsubscribe</a>
<a href="#">Privacy Policy</a>
<a href="#">Terms of Use</a>
</div>
</div>
<div className="flex gap-3">
<a className="bg-orange-500 text-white p-1 rounded hover:opacity-80" href="#"><iconify-icon icon="lucide:message-circle" width="16"></iconify-icon></a>
<a className="bg-red-600 text-white p-1 rounded hover:opacity-80" href="#"><iconify-icon icon="lucide:youtube" width="16"></iconify-icon></a>
<a className="bg-blue-600 text-white p-1 rounded hover:opacity-80" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
<a className="bg-black text-white p-1 rounded hover:opacity-80" href="#"><iconify-icon icon="lucide:twitter" width="16"></iconify-icon></a>
<a className="bg-pink-600 text-white p-1 rounded hover:opacity-80" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="bg-blue-500 text-white p-1 rounded hover:opacity-80" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
