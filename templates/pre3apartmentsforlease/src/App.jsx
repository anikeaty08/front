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



        // Initialize Icons
        lucide.createIcons();

        // Mobile Menu Toggle Logic
        const toggleBtn = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
        const navbar = document.getElementById('navbar-sticky');
        
        if(toggleBtn && navbar) {
            toggleBtn.addEventListener('click', () => {
                navbar.classList.toggle('hidden');
            });
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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<span className="self-center text-xl font-medium tracking-tighter text-zinc-900">PRE3</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
<button className="text-zinc-900 bg-white border border-zinc-200 hover:bg-zinc-50 focus:ring-4 focus:outline-none focus:ring-zinc-100 font-medium rounded-full text-sm px-5 py-2.5 text-center transition-all duration-200" type="button">
                    Resident Portal
                </button>
<button aria-controls="navbar-sticky" aria-expanded="false" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-500 rounded-lg md:hidden hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-200" data-collapse-toggle="navbar-sticky" type="button">
<span className="sr-only">Open main menu</span>
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-zinc-100 rounded-lg bg-zinc-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li>
<a className="block py-2 px-3 text-zinc-500 hover:text-zinc-900 md:p-0 transition-colors" href="#about">About</a>
</li>
<li>
<a className="block py-2 px-3 text-zinc-500 hover:text-zinc-900 md:p-0 transition-colors" href="#properties">Properties</a>
</li>
<li className="">
<a className="block py-2 px-3 text-zinc-500 hover:text-zinc-900 md:p-0 transition-colors" href="#leasing">Leasing</a>
</li>
<li className="">
<a className="block py-2 px-3 text-zinc-500 hover:text-zinc-900 md:p-0 transition-colors" href="#investors">Investors</a>
</li>
</ul>
</div>
</div>
</nav>

<section className="lg:pt-40 lg:pb-28 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent"></div>
<div className="-top-24 -left-24 bg-zinc-100 opacity-50 w-96 h-96 rounded-full absolute blur-3xl"></div>
<div className="absolute top-48 right-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
<div className="lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">

<div className="max-w-2xl">
<div className="inline-flex gap-2 text-xs font-medium text-zinc-600 bg-zinc-50 border-zinc-200 border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">Now Leasing: The Field of Dreams</div>
<h1 className="lg:text-6xl leading-[1.1] text-5xl font-medium text-zinc-900 tracking-tight mb-6">Living spaces designed for community living.</h1>
<p className="text-xl text-zinc-500 mb-8 font-light leading-relaxed">
                    PRE3 develops premium multifamily communities that blend architectural integrity with modern convenience. Discover a new standard of living tailored to your lifestyle.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-12">
<a className="inline-flex justify-center items-center px-6 py-3 text-sm font-medium text-white bg-zinc-900 rounded-lg hover:bg-zinc-800 focus:ring-4 focus:ring-zinc-200 transition-all" href="#properties">
                        View Properties
                        <svg className="lucide lucide-arrow-right w-4 h-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex justify-center items-center px-6 py-3 text-sm font-medium text-zinc-900 bg-white border border-zinc-200 rounded-lg hover:bg-zinc-50 focus:ring-4 focus:ring-zinc-100 transition-all" href="#contact">
                        Schedule Tour
                    </a>
</div>
<div className="border-t border-zinc-100 pt-8 grid grid-cols-3 gap-8">
<div className="">
<p className="text-2xl font-semibold text-zinc-900 tracking-tight">11K+</p>
<p className="uppercase text-sm text-zinc-400 tracking-wide mt-1">Leasing Units</p>
</div>
<div className="">
<p className="text-2xl font-semibold text-zinc-900 tracking-tight">26</p>
<p className="text-sm text-zinc-400 mt-1 uppercase tracking-wide">Communities</p>
</div>
<div className="">
<p className="text-2xl font-semibold text-zinc-900 tracking-tight">98%</p>
<p className="text-sm text-zinc-400 mt-1 uppercase tracking-wide">Occupancy Rate</p>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-zinc-200 to-zinc-100 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative bg-white ring-1 ring-zinc-200 rounded-2xl p-8 shadow-sm">
<div className="mb-6">
<h3 className="text-xl font-medium tracking-tight text-zinc-900">Connect with PRE3</h3>
<p className="text-sm text-zinc-500 mt-1">Inquire about availability or investment opportunities.</p>
</div>
<form action="#" className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700" htmlFor="first-name">First Name</label>
<input className="block w-full rounded-md border-zinc-200 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm py-2.5 px-3 bg-zinc-50/50 placeholder-zinc-400 text-zinc-900 outline-none ring-1 ring-transparent focus:ring-2 transition-all" id="first-name" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700" htmlFor="last-name">Last Name</label>
<input className="block w-full rounded-md border-zinc-200 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm py-2.5 px-3 bg-zinc-50/50 placeholder-zinc-400 text-zinc-900 outline-none ring-1 ring-transparent focus:ring-2 transition-all" id="last-name" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700" htmlFor="email">Email Address</label>
<input className="block w-full rounded-md border-zinc-200 shadow-sm focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm py-2.5 px-3 bg-zinc-50/50 placeholder-zinc-400 text-zinc-900 outline-none ring-1 ring-transparent focus:ring-2 transition-all" id="email" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-medium text-zinc-700" htmlFor="interest">I am interested in</label>
<div className="relative">
<select className="block appearance-none focus:border-zinc-500 focus:ring-zinc-500 sm:text-sm outline-none focus:ring-2 transition-all text-zinc-900 bg-zinc-50/50 w-full border-zinc-200 ring-transparent ring-1 rounded-md pt-2.5 pr-3 pb-2.5 pl-3 shadow-sm" id="interest">
<option>Leasing a Residence</option>
<option>Investment Opportunities</option>
<option>Land Development</option>
<option>General Inquiry</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-500">
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div className="relative flex items-start">
<div className="flex h-5 items-center">
<input aria-describedby="offers-description" className="peer h-4 w-4 opacity-0 absolute" id="offers" name="offers" type="checkbox"/>
<div className="w-4 h-4 border border-zinc-300 rounded bg-white peer-checked:bg-zinc-900 peer-checked:border-zinc-900 flex items-center justify-center transition-colors">
<svg className="lucide lucide-check w-3 h-3 text-white opacity-0 peer-checked:opacity-100" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
</div>
<div className="ml-3 text-xs">
<label className="font-medium text-zinc-700" htmlFor="offers">Get notified about new developments</label>
<p className="text-zinc-400" id="offers-description">Receive early access to floor plans and pricing.</p>
</div>
</div>
<button className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-zinc-900 hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-900 transition-colors" type="submit">
                            Submit Inquiry
                        </button>
</form>
</div>
</div>
</div>
</section>


<section className="bg-white pt-24 pb-24" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="max-w-3xl mb-16">
<h2 className="lg:text-4xl text-3xl font-medium text-zinc-900 tracking-tight mb-4">The PRE/3 Standard</h2>
<p className="text-xl font-light text-zinc-500">We don't just build apartments; we curate ecosystems. Every PRE/3 development is founded on three core pillars designed to elevate the resident experience.</p>
</div>
<div className="grid md:grid-cols-3 gap-12">

<div className="group">
<div className="h-12 w-12 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:bg-zinc-900 transition-colors duration-300">
<svg className="lucide lucide-layout-grid w-6 h-6 text-zinc-700 group-hover:text-white transition-colors" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Modern Architecture</h3>
<p className="leading-relaxed text-base text-zinc-500">
                        Thoughtful layouts maximizing natural light and space. High-end finishes including quartz countertops, floor-to-ceiling windows, and smart climate control.
                    </p>
</div>

<div className="group">
<div className="h-12 w-12 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:bg-zinc-900 transition-colors duration-300">
<svg className="lucide lucide-users w-6 h-6 text-zinc-700 group-hover:text-white transition-colors" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Community Focused</h3>
<p className="text-base text-zinc-500 leading-relaxed">
                        Shared spaces that foster connection. From co-working lounges and rooftop terraces to fitness centers and private event spaces.
                    </p>
</div>

<div className="group">
<div className="h-12 w-12 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-6 group-hover:bg-zinc-900 transition-colors duration-300">
<svg className="lucide lucide-leaf w-6 h-6 text-zinc-700 group-hover:text-white transition-colors" data-lucide="leaf" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Sustainable Living</h3>
<p className="leading-relaxed text-base text-zinc-500">
                        LEED-certified designs featuring energy-efficient appliances, EV charging stations, and responsible material sourcing for a greener footprint.
                    </p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 border-zinc-200 border-t pt-24 pb-24" id="properties">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex justify-between items-end mb-12">
<div className="">
<h2 className="lg:text-4xl text-3xl font-medium text-zinc-900 tracking-tight mb-2">Featured Properties</h2>
<p className="text-zinc-500 text-lg">Explore our latest additions to the portfolio.</p>
</div>
<a className="hidden md:flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
                    View all properties <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative bg-white rounded-xl overflow-hidden border border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-zinc-200 overflow-hidden">

<img alt="Apartment Exterior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ff498ce-5999-40db-ab5a-3aa2319b5996_800w.jpg"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div className="">
<h3 className="text-lg font-medium text-zinc-900">The Field Of Dreams</h3>
<p className="text-sm text-zinc-500 mt-1">Onalaska, WI</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-100">
                                Leasing Now
                            </span>
</div>
<div className="flex items-center gap-4 text-sm text-zinc-500 mb-6">
<span className="flex items-center gap-1"><svg className="lucide lucide-bed w-4 h-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg> Studio - 2 Bed</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-maximize w-4 h-4" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg> 550 - 1200 sqft</span>
</div>
<button className="w-full py-2 px-4 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
                            View Availability
                        </button>
</div>
</div>

<div className="group relative bg-white rounded-xl overflow-hidden border border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-zinc-200 overflow-hidden">

<img alt="Apartment Complex Garden" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dbfbf0a5-3648-4fcd-b350-ad6285385702_800w.jpg"/>
</div>
<div className="pt-6 pr-6 pb-6 pl-6">
<div className="flex justify-between items-start mb-4">
<div className="">
<h3 className="text-lg font-medium text-zinc-900">Clayton Crossing</h3>
<p className="text-sm text-zinc-500 mt-1">Neenah, WI</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-zinc-100 text-zinc-600 border border-zinc-200">
                                Waitlist Open
                            </span>
</div>
<div className="flex items-center gap-4 text-sm text-zinc-500 mb-6">
<span className="flex items-center gap-1"><svg className="lucide lucide-bed w-4 h-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg> 1 - 3 Bed</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-maximize w-4 h-4" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg> 800 - 1800 sqft</span>
</div>
<button className="w-full py-2 px-4 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
                            Join Waitlist
                        </button>
</div>
</div>

<div className="group relative bg-white rounded-xl overflow-hidden border border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
<div className="aspect-[4/3] bg-zinc-200 overflow-hidden">

<img alt="Building Siding Detail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d71c788e-c1aa-4e3c-8117-43749d2d8c77_800w.jpg"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div className="">
<h3 className="text-lg font-medium text-zinc-900">Aspen Bluff Apartments</h3>
<p className="text-sm text-zinc-500 mt-1">Peoria, MI</p>
</div>
<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                                Coming Soon
                            </span>
</div>
<div className="flex items-center gap-4 text-sm text-zinc-500 mb-6">
<span className="flex items-center gap-1"><svg className="lucide lucide-bed w-4 h-4" data-lucide="bed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 4v16"></path><path d="M2 8h18a2 2 0 0 1 2 2v10"></path><path d="M2 17h20"></path><path d="M6 8v9"></path></svg> Multi-Family Aparments</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-maximize w-4 h-4" data-lucide="maximize" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path><path d="M3 16v3a2 2 0 0 0 2 2h3"></path><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg> 2000+ sqft/unit</span>
</div>
<button className="w-full py-2 px-4 rounded-lg border border-zinc-200 text-sm font-medium text-zinc-700 hover:bg-zinc-50 transition-colors">
                            Learn More
                        </button>
</div>
</div>
</div>
<div className="mt-8 text-center md:hidden">
<a className="inline-flex items-center text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#">
                    View all properties <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-zinc-900 pt-24 pb-24 relative" id="leasing">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-800 rounded-full blur-3xl opacity-20 -mr-20 -mt-20"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="">
<h2 className="text-3xl lg:text-4xl font-medium tracking-tight mb-6">Seamless Leasing Experience</h2>
<p className="text-zinc-400 text-xl font-light mb-8 leading-relaxed">
                        We've digitized the traditional leasing process. From virtual tours to digital lease signing, moving into your new PRE3 home is effortless.
                    </p>
<ul className="space-y-6">
<li className="flex items-start">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mt-1">
<svg className="lucide lucide-monitor w-3 h-3 text-white" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
</div>
<div className="ml-4">
<h4 className="text-lg font-medium">Virtual Tours</h4>
<p className="text-base text-zinc-500 mt-1">Explore every corner of our units from the comfort of your couch with high-fidelity 3D walkthroughs.</p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mt-1">
<svg className="lucide lucide-file-check w-3 h-3 text-white" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
</div>
<div className="ml-4">
<h4 className="text-lg font-medium">Instant Approvals</h4>
<p className="text-base text-zinc-500 mt-1">Our streamlined application process provides feedback within hours, not days.</p>
</div>
</li>
<li className="flex items-start">
<div className="flex-shrink-0 h-6 w-6 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mt-1">
<svg className="lucide lucide-key w-3 h-3 text-white" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
</div>
<div className="ml-4">
<h4 className="text-lg font-medium">Flexible Terms</h4>
<p className="text-base text-zinc-500 mt-1">Choose lease durations that fit your life, from short-term executive stays to multi-year residences.</p>
</div>
</li>
</ul>
<div className="mt-10">
<a className="inline-flex justify-center items-center px-6 py-3 text-sm font-medium text-zinc-900 bg-white rounded-lg hover:bg-zinc-100 transition-all" href="#contact">
                            Apply Online
                        </a>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden border border-zinc-700 shadow-2xl">

<img alt="Modern Warm Kitchen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent flex items-end p-8">
<div className="">
<p className="font-medium text-white">Resident Portal App</p>
<p className="text-zinc-300 text-sm mt-1">Control access, pay rent, and request maintenance with one tap.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-100 pt-16 pb-8">
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
<div className="col-span-2 lg:col-span-2">
<span className="text-xl font-medium text-zinc-900 tracking-tighter">PRE/3</span>
<p className="text-sm text-zinc-500 mt-4 max-w-xs font-light">
                        Redefining the standard of multifamily living through design, technology, and community.
                    </p>
</div>
<div className="">
<h4 className="text-sm font-medium text-zinc-900 mb-4">Properties</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li className=""><a className="hover:text-zinc-900 transition-colors" href="#">The Field of Dreams</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors" href="#">Clayton Crossing Apartments</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors" href="#">Aspen Bluff Apartments</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors" href="#">View All</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-zinc-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900 transition-colors" href="#">About Us</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors" href="#">Investors</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors" href="#">News</a></li>
</ul>
</div>
<div className="">
<h4 className="text-sm font-medium text-zinc-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li className=""><a className="hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li className=""><a className="hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-zinc-900 transition-colors" href="#">Fair Housing</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row border-zinc-100 border-t pt-8 items-center justify-between">
<p className="text-sm text-zinc-400">© 2026 PRE/3 All rights reserved.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="text-zinc-400 hover:text-zinc-600 transition-colors" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-zinc-400 hover:text-zinc-600 transition-colors" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-zinc-400 hover:text-zinc-600 transition-colors" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
