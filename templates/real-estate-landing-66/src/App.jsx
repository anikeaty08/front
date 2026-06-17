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



        // Simple Mobile Menu Toggle
        document.getElementById('menu-btn').addEventListener('click', function() {
            const menu = document.getElementById('mobile-menu');
            if (menu.classList.contains('hidden')) {
                menu.classList.remove('hidden');
            } else {
                menu.classList.add('hidden');
            }
        });
    
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
      

<div className="hidden md:flex justify-between items-center px-8 py-3 bg-[#143B25] text-white text-sm font-medium">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 hover:text-[#C1B199] transition-colors" href="tel:800-123-4567">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
                CALL TOLL FREE: 800-123-4567
            </a>
</div>
<div className="flex items-center gap-4">
<button className="hover:text-[#C1B199] transition-colors">Make a Payment</button>
<span className="text-white/30">|</span>
<button className="hover:text-[#C1B199] transition-colors">Log In</button>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

<a className="flex flex-col" href="#">
<span className="text-3xl font-semibold tracking-tight text-[#143B25] leading-none">SRC</span>
<span className="text-xs font-medium tracking-widest uppercase text-[#C1B199] mt-1">Land.com</span>
</a>

<div className="hidden md:flex items-center gap-10 text-base font-medium text-slate-600">
<a className="text-[#143B25] hover:text-[#143B25]/70 transition-colors" href="#">Home</a>
<a className="hover:text-[#143B25] transition-colors" href="#properties">Properties</a>
<a className="hover:text-[#143B25] transition-colors" href="#financing">Owner Financing</a>
<a className="hover:text-[#143B25] transition-colors" href="#about">Our Story</a>
<a className="hover:text-[#143B25] transition-colors" href="#contact">Contact</a>
</div>

<button className="md:hidden text-slate-900 p-2" id="menu-btn">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 py-6 px-6 flex flex-col gap-6 shadow-xl" id="mobile-menu">
<a className="text-xl font-medium text-slate-900" href="#">Home</a>
<a className="text-xl font-medium text-slate-600" href="#properties">Properties</a>
<a className="text-xl font-medium text-slate-600" href="#financing">Owner Financing</a>
<a className="text-xl font-medium text-slate-600" href="#about">Our Story</a>
<a className="text-xl font-medium text-slate-600" href="#contact">Contact</a>
<div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
<button className="bg-[#143B25] text-white py-4 rounded-xl font-medium text-lg w-full">Make a Payment</button>
<button className="border border-slate-200 text-slate-900 py-4 rounded-xl font-medium text-lg w-full">Log In</button>
</div>
</div>
</nav>

<header className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center pt-10 px-6">
<div className="absolute inset-0 z-0">
<img alt="Texas Land" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&amp;w=2689&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#143B25]/60 via-[#143B25]/40 to-[#143B25]/80 mix-blend-multiply"></div>
</div>
<div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-12 drop-shadow-sm">
                Make your dreams of <br/>land ownership a reality.
            </h1>

<div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl p-2 rounded-2xl border border-white/20 shadow-2xl flex flex-col md:flex-row gap-2">
<div className="relative flex-grow">
<select className="w-full h-full min-h-[56px] appearance-none bg-white rounded-xl pl-6 pr-12 text-lg text-slate-900 font-medium outline-none focus:ring-2 focus:ring-[#143B25]/50 transition-all cursor-pointer border-none shadow-sm">
<option disabled="" selected="" value="">Find property by...</option>
<option value="location">Location</option>
<option value="price">Price Range</option>
<option value="acreage">Acreage</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<button className="bg-[#143B25] hover:bg-[#1E5436] text-white px-8 py-4 md:py-0 rounded-xl font-medium text-lg transition-colors flex items-center justify-center gap-2 shadow-md">
<iconify-icon icon="lucide:search" strokeWidth="1.5" width="20"></iconify-icon>
                    Search
                </button>
</div>
</div>
</header>

<div className="bg-[#143B25] border-t border-white/10 text-white">
<div className="max-w-7xl mx-auto px-6 py-8 md:py-10 text-center flex flex-col items-center justify-center gap-3">
<span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#1E5436] text-[#C1B199] mb-2">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</span>
<p className="text-lg md:text-xl font-medium tracking-tight text-[#EEF4F0]">
                We have over 40 years in business helping Texans find affordable land for sale.
            </p>
</div>
</div>
<main className="flex-grow">

<section className="py-24 md:py-32 max-w-7xl mx-auto px-6" id="properties">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#143B25] mb-6">Texas Land For Sale</h2>
<p className="text-lg text-slate-500 max-w-2xl mx-auto">Explore our premium selection of accessible, affordable properties ready for your next chapter.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Property Image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-[#143B25] shadow-sm">Available</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Sunset Ridge Tract</h3>
<div className="flex items-center gap-2 text-xl font-medium text-[#143B25] mb-4">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="20"></iconify-icon>
                            Austin, TX
                        </div>
<div className="flex items-center gap-3 text-lg text-slate-600 mb-8 border-t border-slate-100 pt-4">
<iconify-icon className="text-[#143B25]" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
                            Owner Financing Available
                        </div>
<div className="mt-auto">
<button className="w-full border border-slate-200 hover:border-[#143B25] text-slate-900 hover:bg-[#143B25] hover:text-white py-4 rounded-xl font-medium text-lg transition-all duration-300">Read More</button>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Property Image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1594498653385-d5172c532c00?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-[#143B25] shadow-sm">Available</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Oak Valley Estate</h3>
<div className="flex items-center gap-2 text-xl font-medium text-[#143B25] mb-4">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="20"></iconify-icon>
                            San Antonio, TX
                        </div>
<div className="flex items-center gap-3 text-lg text-slate-600 mb-8 border-t border-slate-100 pt-4">
<iconify-icon className="text-[#143B25]" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
                            Owner Financing Available
                        </div>
<div className="mt-auto">
<button className="w-full border border-slate-200 hover:border-[#143B25] text-slate-900 hover:bg-[#143B25] hover:text-white py-4 rounded-xl font-medium text-lg transition-all duration-300">Read More</button>
</div>
</div>
</div>

<div className="group bg-white border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
<div className="relative h-64 overflow-hidden">
<img alt="Property Image" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1464047736614-af63643285bf?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium text-[#143B25] shadow-sm">Under Contract</div>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">River Front Parcels</h3>
<div className="flex items-center gap-2 text-xl font-medium text-[#143B25] mb-4">
<iconify-icon icon="lucide:map-pin" strokeWidth="1.5" width="20"></iconify-icon>
                            Dallas, TX
                        </div>
<div className="flex items-center gap-3 text-lg text-slate-600 mb-8 border-t border-slate-100 pt-4">
<iconify-icon className="text-[#143B25]" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
                            Owner Financing Available
                        </div>
<div className="mt-auto">
<button className="w-full border border-slate-200 hover:border-[#143B25] text-slate-900 hover:bg-[#143B25] hover:text-white py-4 rounded-xl font-medium text-lg transition-all duration-300">Read More</button>
</div>
</div>
</div>
</div>
<div className="mt-16 flex justify-center">
<button className="bg-[#143B25] text-white px-10 py-5 rounded-xl font-medium text-lg hover:bg-[#1E5436] transition-colors shadow-lg shadow-[#143B25]/20 flex items-center gap-2">
                    View All Properties
                    <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</section>

<section className="py-24 bg-[#EEF4F0] relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="order-2 lg:order-1 flex flex-col items-start">
<span className="text-sm font-semibold tracking-widest uppercase text-[#C1B199] mb-4 block">Our Expertise</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#143B25] mb-8 leading-[1.1]">
                            Why SRC Land for Land Development
                        </h2>
<div className="space-y-6 text-lg text-[#1E5436]/80 leading-relaxed font-medium">
<p>
                                We streamline the process of purchasing undeveloped land. Our team handles the heavy lifting of sourcing, evaluating, and preparing properties so you receive a straightforward, ready-to-use parcel.
                            </p>
<p>
                                From securing legal access to clearing boundaries, we ensure every piece of land we offer is primed for your vision, removing the typical friction associated with raw land transactions.
                            </p>
</div>
<button className="mt-10 border border-[#143B25] text-[#143B25] px-8 py-4 rounded-xl font-medium text-lg hover:bg-[#143B25] hover:text-white transition-all duration-300">
                            Read Our Story
                        </button>
</div>
<div className="order-1 lg:order-2 relative">
<div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative z-10">
<img alt="Land Development" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#C1B199]/20 rounded-full blur-3xl z-0 pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 max-w-7xl mx-auto px-6" id="financing">
<div className="text-center mb-20">
<span className="text-sm font-semibold tracking-widest uppercase text-[#C1B199] mb-4 block">Flexible Solutions</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#143B25] mb-6">
                    See the Advantages of Owner Financing
                </h2>
<p className="text-lg text-slate-500 max-w-3xl mx-auto font-medium">
                    We believe owning land should be accessible. Bypass the traditional banking system with our straightforward, in-house financing programs tailored for ease and speed.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

<div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
<div className="w-20 h-20 rounded-2xl bg-[#EEF4F0] text-[#143B25] flex items-center justify-center mb-8 shadow-inner">
<iconify-icon icon="lucide:building-2" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">No Banks Required</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Skip the rigid credit checks and extensive paperwork of traditional lenders. We underwrite our own loans directly to you.
                    </p>
</div>

<div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
<div className="w-20 h-20 rounded-2xl bg-[#EEF4F0] text-[#143B25] flex items-center justify-center mb-8 shadow-inner">
<iconify-icon icon="lucide:clock" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Fast Closings</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Because we control the process from start to finish, you can close on your property in a fraction of the standard time.
                    </p>
</div>

<div className="flex flex-col items-center text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
<div className="w-20 h-20 rounded-2xl bg-[#EEF4F0] text-[#143B25] flex items-center justify-center mb-8 shadow-inner">
<iconify-icon icon="lucide:file-check-2" strokeWidth="1.5" width="36"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">Easy Qualifications</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                        Our approval process is designed to help you succeed. If you have the down payment, you are generally approved.
                    </p>
</div>
</div>
<div className="mt-16 flex justify-center">
<button className="bg-[#143B25] text-white px-10 py-5 rounded-xl font-medium text-lg hover:bg-[#1E5436] transition-colors shadow-lg shadow-[#143B25]/20">
                    Learn About Financing
                </button>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative rounded-3xl overflow-hidden h-[400px] flex items-end p-8 md:p-10 group">
<img alt="Rural property" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-1000" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#143B25]/90 via-[#143B25]/40 to-transparent z-10"></div>
<div className="relative z-20 text-white w-full">
<span className="inline-block bg-[#1E5436] text-[#EEF4F0] px-3 py-1 rounded-md text-sm font-medium mb-4">Land Management</span>
<h3 className="text-3xl font-semibold tracking-tight mb-3">Why SRC Land</h3>
<p className="text-lg text-white/80 line-clamp-2">We focus on properties that offer genuine value and utility, preparing them meticulously for the market.</p>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden h-[400px] flex items-end p-8 md:p-10 group">
<img alt="Open field" className="absolute inset-0 w-full h-full object-cover z-0 group-hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#143B25]/90 via-[#143B25]/40 to-transparent z-10"></div>
<div className="relative z-20 text-white w-full">
<span className="inline-block bg-[#1E5436] text-[#EEF4F0] px-3 py-1 rounded-md text-sm font-medium mb-4">Development</span>
<h3 className="text-3xl font-semibold tracking-tight mb-3">Ready to Build</h3>
<p className="text-lg text-white/80 line-clamp-2">Providing clear tracts with essential access, saving you time and initial infrastructure costs.</p>
</div>
</div>
</section>

<section className="py-24 max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-[#143B25]">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<details className="group bg-white border border-slate-200 rounded-2xl [&amp;::-webkit-details-marker]:hidden shadow-sm overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<h3 className="text-xl font-medium pr-4 text-slate-900">What do you mean by Owner Financing?</h3>
<span className="transform group-open:rotate-180 transition-transform duration-300 text-[#143B25] shrink-0 bg-[#EEF4F0] w-8 h-8 flex items-center justify-center rounded-full">
<iconify-icon icon="lucide:chevron-down" strokeWidth="2" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 text-lg leading-relaxed pt-2 border-t border-slate-50">
                        Owner financing means we act as the lender. Instead of applying for a bank loan, you make your down payment and subsequent monthly payments directly to SRC Land. This makes the purchase process drastically simpler and more accessible.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-2xl [&amp;::-webkit-details-marker]:hidden shadow-sm overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<h3 className="text-xl font-medium pr-4 text-slate-900">Are there building restrictions?</h3>
<span className="transform group-open:rotate-180 transition-transform duration-300 text-[#143B25] shrink-0 bg-[#EEF4F0] w-8 h-8 flex items-center justify-center rounded-full">
<iconify-icon icon="lucide:chevron-down" strokeWidth="2" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 text-lg leading-relaxed pt-2 border-t border-slate-50">
                        Restrictions vary by specific tract and county regulations. Most of our properties have minimal restrictions designed only to protect the land's value and ensure a peaceful environment for all neighbors. Details are provided on each property listing.
                    </div>
</details>

<details className="group bg-white border border-slate-200 rounded-2xl [&amp;::-webkit-details-marker]:hidden shadow-sm overflow-hidden">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<h3 className="text-xl font-medium pr-4 text-slate-900">How do I reserve a property?</h3>
<span className="transform group-open:rotate-180 transition-transform duration-300 text-[#143B25] shrink-0 bg-[#EEF4F0] w-8 h-8 flex items-center justify-center rounded-full">
<iconify-icon icon="lucide:chevron-down" strokeWidth="2" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-600 text-lg leading-relaxed pt-2 border-t border-slate-50">
                        Once you find a property you love, you can contact our office to place a deposit, or in many cases, begin the process online. The property is held for you while we prepare the necessary paperwork for closing.
                    </div>
</details>
</div>
</section>

<section className="py-24 bg-[#143B25] text-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<span className="text-sm font-semibold tracking-widest uppercase text-[#C1B199] mb-8 block">Testimonials</span>
<p className="text-3xl md:text-4xl font-medium tracking-tight mb-10 leading-snug">
                    "What an amazing experience buying from SRC Land! The process was incredibly smooth, and the owner financing made it possible for us to secure our dream property without the hassle of a bank."
                </p>
<div className="flex items-center justify-center gap-1.5 text-[#C1B199] mb-6">
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="2" width="24"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="2" width="24"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="2" width="24"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="2" width="24"></iconify-icon>
<iconify-icon className="fill-current" icon="lucide:star" strokeWidth="2" width="24"></iconify-icon>
</div>
<div className="text-lg font-medium text-[#EEF4F0] uppercase tracking-wider text-sm">
                    — The Martinez Family
                </div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="contact">
<div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="relative h-64 lg:h-auto">
<img alt="Agent" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#143B25]/20 mix-blend-multiply"></div>
</div>

<div className="p-10 md:p-16 flex flex-col justify-center">
<h2 className="text-4xl font-semibold tracking-tight text-[#143B25] mb-8">Get In Touch</h2>
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold tracking-wide text-slate-700">First Name</label>
<input className="w-full bg-[#FAFAFA] border border-slate-200 rounded-xl px-4 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#143B25] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold tracking-wide text-slate-700">Last Name</label>
<input className="w-full bg-[#FAFAFA] border border-slate-200 rounded-xl px-4 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#143B25] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold tracking-wide text-slate-700">Email Address</label>
<input className="w-full bg-[#FAFAFA] border border-slate-200 rounded-xl px-4 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#143B25] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold tracking-wide text-slate-700">Phone Number</label>
<input className="w-full bg-[#FAFAFA] border border-slate-200 rounded-xl px-4 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#143B25] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400" placeholder="(555) 123-4567" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold tracking-wide text-slate-700">How can we help?</label>
<div className="relative">
<select className="w-full appearance-none bg-[#FAFAFA] border border-slate-200 rounded-xl pl-4 pr-10 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#143B25] focus:bg-white transition-all text-slate-900">
<option>I'm interested in buying land</option>
<option>I have questions about owner financing</option>
<option>General inquiry</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
<iconify-icon icon="lucide:chevron-down" strokeWidth="2" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold tracking-wide text-slate-700">Message</label>
<textarea className="w-full bg-[#FAFAFA] border border-slate-200 rounded-xl px-4 py-3.5 text-lg focus:outline-none focus:ring-2 focus:ring-[#143B25] focus:bg-white transition-all text-slate-900 placeholder:text-slate-400" placeholder="Tell us more about what you're looking for..." rows="4"></textarea>
</div>
<button className="w-full bg-[#143B25] text-white py-5 rounded-xl font-medium text-lg hover:bg-[#1E5436] transition-colors shadow-lg shadow-[#143B25]/20 mt-4">
                                Send Message
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-[#EEF4F0] border-t border-[#143B25]/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

<div>
<h4 className="text-sm font-semibold tracking-widest uppercase text-[#143B25] mb-6">Explore</h4>
<div className="flex flex-col gap-4 text-lg font-medium text-slate-600">
<a className="hover:text-[#143B25] transition-colors" href="#">Areas We Serve</a>
<a className="hover:text-[#143B25] transition-colors" href="#">Properties</a>
<a className="hover:text-[#143B25] transition-colors" href="#">Owner Financing</a>
<a className="hover:text-[#143B25] transition-colors" href="#">Resources</a>
</div>
</div>

<div>
<h4 className="text-sm font-semibold tracking-widest uppercase text-[#143B25] mb-6">Contact</h4>
<div className="flex flex-col gap-4 text-lg font-medium text-slate-600">
<p>123 Landview Way<br/>Suite 100<br/>Austin, TX 78701</p>
<p className="pt-2 text-[#143B25]">info@srcland.com</p>
<p className="text-[#143B25]">800-123-4567</p>
</div>
</div>

<div className="lg:col-span-2 flex flex-col items-start lg:items-end text-left lg:text-right">
<div className="bg-[#143B25] py-4 px-8 rounded-full mb-8 inline-block shadow-lg">
<span className="text-4xl font-semibold tracking-tight text-white leading-none block text-center">SRC</span>
<span className="text-xs font-medium tracking-widest uppercase text-[#C1B199] block text-center mt-1">Land.com</span>
</div>
<p className="text-lg font-medium text-slate-600 max-w-xs mb-8">
                        Your trusted partner in Texas land ownership and development.
                    </p>
<div className="flex gap-4">
<a className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#143B25] hover:bg-[#143B25] hover:text-white transition-all shadow-sm border border-slate-200" href="#">
<iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#143B25] hover:bg-[#143B25] hover:text-white transition-all shadow-sm border border-slate-200" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#143B25] hover:bg-[#143B25] hover:text-white transition-all shadow-sm border border-slate-200" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="border-t border-[#143B25]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-slate-500">
<p>© 2024 SRC Land. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-[#143B25] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#143B25] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
