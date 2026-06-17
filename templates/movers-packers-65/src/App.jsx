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
      

<nav className="fixed top-0 z-50 w-full border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">

<a className="flex items-center gap-2.5 group" href="/">
<div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-rose-600 text-white shadow-lg shadow-rose-600/20 group-hover:bg-rose-700 transition-colors">
<iconify-icon icon="solar:truck-linear" strokeWidth="1.5" width="24"></iconify-icon>
<div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-slate-900 border-2 border-white"></div>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold tracking-tight text-slate-900 leading-none">MOVERS</span>
<span className="text-xs font-medium tracking-widest text-rose-600 uppercase">Packers Jaipur</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors" href="#process">How it Works</a>
<a className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors" href="#areas">Service Areas</a>
<a className="text-sm font-medium text-slate-600 hover:text-rose-600 transition-colors" href="#faq">FAQ</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex flex-col items-end text-right group" href="tel:+919876543210">
<span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">24/7 Support</span>
<span className="text-sm font-bold text-slate-900 group-hover:text-rose-600 transition-colors flex items-center gap-1">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                        +91 98765 43210
                    </span>
</a>
<a className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white shadow-lg hover:bg-slate-800 hover:-translate-y-0.5 transition-all duration-300" href="#quote">
                    Get Quote
                </a>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-50 via-slate-50 to-white"></div>
<div className="absolute top-0 right-0 -z-10 opacity-[0.03]">
<svg fill="currentColor" height="800" viewbox="0 0 24 24" width="800"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path></svg>
</div>
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-7 max-w-2xl">
<div className="inline-flex items-center rounded-full border border-rose-100 bg-rose-50/80 px-3 py-1 text-xs font-semibold text-rose-600 mb-6 backdrop-blur-sm">
<span className="animate-pulse mr-2 h-1.5 w-1.5 rounded-full bg-rose-600"></span>
                        IBA Approved Packers &amp; Movers
                    </div>
<h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-6xl mb-6">
                        Stress-free relocation across <span className="text-rose-600">Jaipur</span> &amp; India.
                    </h1>
<p className="text-lg leading-relaxed text-slate-600 mb-8 pr-4">
                        We provide premium <strong>packing and moving services</strong> with zero damage guarantee. From local shifting in Vaishali Nagar to intercity moves, we handle your belongings with care.
                    </p>
<div className="flex flex-wrap gap-6 text-sm font-medium text-slate-700">
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-600" icon="solar:shield-check-linear" width="20"></iconify-icon>
                            Fully Insured
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-600" icon="solar:clock-circle-linear" width="20"></iconify-icon>
                            On-Time Delivery
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-rose-600" icon="solar:tag-price-linear" width="20"></iconify-icon>
                            Lowest Price Guarantee
                        </div>
</div>
</div>

<div className="lg:col-span-5 relative w-full" id="quote">
<div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-rose-500 to-slate-400 opacity-20 blur-lg"></div>
<div className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/40 sm:p-8">
<div className="flex items-center justify-between mb-6">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Get Free Estimate</h3>
<span className="rounded bg-green-50 px-2 py-1 text-[10px] font-bold text-green-700 uppercase tracking-wide">Fast Reply</span>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Pickup</label>
<input className="w-full rounded-lg border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:ring-rose-500 transition-colors outline-none border" placeholder="Ex: Mansarovar" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Drop</label>
<input className="w-full rounded-lg border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:ring-rose-500 transition-colors outline-none border" placeholder="Ex: Mumbai" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Move Size</label>
<select className="w-full rounded-lg border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-900 focus:border-rose-500 focus:ring-rose-500 transition-colors outline-none border appearance-none">
<option>Select Size...</option>
<option>1 BHK House</option>
<option>2 BHK House</option>
<option>3 BHK / Villa</option>
<option>Office / Commercial</option>
<option>Car / Bike Only</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Phone</label>
<input className="w-full rounded-lg border-slate-200 bg-slate-50 px-3 py-2.5 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:border-rose-500 focus:ring-rose-500 transition-colors outline-none border" placeholder="10-digit mobile number" type="tel"/>
</div>
<button className="w-full rounded-lg bg-rose-600 px-4 py-3 text-sm font-semibold text-white shadow-md hover:bg-rose-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600 transition-all mt-2" type="submit">
                                Check Availability &amp; Price
                            </button>
<p className="text-center text-xs text-slate-400 mt-2">No spam. Your data is secure.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-slate-50">
<div className="mx-auto max-w-7xl px-6 lg:px-8 py-10">
<div className="grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-items-center text-center">
<div className="flex flex-col items-center gap-1">
<span className="text-3xl font-bold tracking-tight text-slate-900">12k+</span>
<span className="text-xs font-medium uppercase tracking-wide text-slate-500">Happy Families</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-3xl font-bold tracking-tight text-slate-900">15+</span>
<span className="text-xs font-medium uppercase tracking-wide text-slate-500">Years Exp.</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-3xl font-bold tracking-tight text-slate-900">4.8</span>
<span className="text-xs font-medium uppercase tracking-wide text-slate-500">Star Rating</span>
</div>
<div className="flex flex-col items-center gap-1">
<span className="text-3xl font-bold tracking-tight text-slate-900">24h</span>
<span className="text-xs font-medium uppercase tracking-wide text-slate-500">Fast Delivery</span>
</div>
</div>
</div>
</section>

<section className="py-24" id="services">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16 max-w-2xl">
<h2 className="text-sm font-bold uppercase tracking-wider text-rose-600 mb-2">Our Services</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Complete Relocation Solutions</h3>
<p className="mt-4 text-slate-600">Tailored moving services designed to meet diverse needs, from small apartments to large corporate offices in Jaipur.</p>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-rose-100 hover:shadow-xl hover:shadow-rose-100/50">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-rose-50 text-rose-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900">Household Shifting</h4>
<p className="mt-3 text-sm leading-relaxed text-slate-500">Safe packing of furniture, crockery, and appliances using bubble wrap and foam sheets. Local &amp; Domestic moves.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-rose-100 hover:shadow-xl hover:shadow-rose-100/50">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900">Office Relocation</h4>
<p className="mt-3 text-sm leading-relaxed text-slate-500">Efficient corporate moving services with minimal downtime. We handle IT equipment, files, and desks securely.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-rose-100 hover:shadow-xl hover:shadow-rose-100/50">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:wheel-angle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900">Car Transportation</h4>
<p className="mt-3 text-sm leading-relaxed text-slate-500">Door-to-door vehicle transport via closed car carriers. Scratch-free delivery assurance across India.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-rose-100 hover:shadow-xl hover:shadow-rose-100/50">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900">Packing &amp; Unpacking</h4>
<p className="mt-3 text-sm leading-relaxed text-slate-500">Professional packing using 3-layer protection. We also offer unpacking and rearranging services at destination.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-rose-100 hover:shadow-xl hover:shadow-rose-100/50">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 text-purple-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:garage-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900">Warehousing</h4>
<p className="mt-3 text-sm leading-relaxed text-slate-500">Secure, pest-controlled storage units for short and long-term storage of household goods in Jaipur.</p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-rose-100 hover:shadow-xl hover:shadow-rose-100/50">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:scooter-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-slate-900">Bike Shifting</h4>
<p className="mt-3 text-sm leading-relaxed text-slate-500">Specialized bike carriers to transport your two-wheelers safely to any city without wear and tear.</p>
</div>
</div>
</div>
</section>

<section className="relative bg-slate-50 py-24" id="process">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-sm font-bold uppercase tracking-wider text-rose-600 mb-2">Workflow</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900">Simple 4-Step Move</h3>
</div>
<div className="relative grid gap-8 md:grid-cols-4">

<div className="hidden md:block absolute top-12 left-0 w-[80%] left-[10%] h-0.5 bg-slate-200 -z-10"></div>
<div className="relative text-center group">
<div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-slate-50 bg-white shadow-md group-hover:border-rose-100 group-hover:text-rose-600 transition-colors">
<span className="text-3xl font-bold">01</span>
</div>
<h4 className="text-lg font-semibold text-slate-900">Request Quote</h4>
<p className="mt-2 text-sm text-slate-500">Fill details online or call us for a quick survey.</p>
</div>
<div className="relative text-center group">
<div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-slate-50 bg-white shadow-md group-hover:border-rose-100 group-hover:text-rose-600 transition-colors">
<span className="text-3xl font-bold">02</span>
</div>
<h4 className="text-lg font-semibold text-slate-900">Packing</h4>
<p className="mt-2 text-sm text-slate-500">Expert team packs your items with quality material.</p>
</div>
<div className="relative text-center group">
<div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-slate-50 bg-white shadow-md group-hover:border-rose-100 group-hover:text-rose-600 transition-colors">
<span className="text-3xl font-bold">03</span>
</div>
<h4 className="text-lg font-semibold text-slate-900">Moving</h4>
<p className="mt-2 text-sm text-slate-500">Goods are loaded and transported via GPS trucks.</p>
</div>
<div className="relative text-center group">
<div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-4 border-slate-50 bg-white shadow-md group-hover:border-rose-100 group-hover:text-rose-600 transition-colors">
<span className="text-3xl font-bold">04</span>
</div>
<h4 className="text-lg font-semibold text-slate-900">Delivery</h4>
<p className="mt-2 text-sm text-slate-500">Timely delivery, unpacking, and setup at new home.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-sm font-bold uppercase tracking-wider text-rose-600 mb-2">Why Choose MPJ</h2>
<h3 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">We Value Your Emotions, Not Just Goods.</h3>
<p className="text-lg text-slate-600 mb-8">Moving is more than just shifting boxes. It's about starting a new life. We ensure this transition is smooth, safe, and affordable.</p>
<dl className="space-y-6">
<div className="flex gap-4">
<div className="flex-none pt-1">
<iconify-icon className="text-rose-600" icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<div>
<dt className="font-semibold text-slate-900">Transparency</dt>
<dd className="mt-1 text-sm text-slate-500">No hidden charges. The quote we give is the final price.</dd>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none pt-1">
<iconify-icon className="text-rose-600" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<dt className="font-semibold text-slate-900">Safety Assurance</dt>
<dd className="mt-1 text-sm text-slate-500">High-quality packaging materials (Bubble wrap, Cardboard boxes).</dd>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none pt-1">
<iconify-icon className="text-rose-600" icon="solar:user-hand-up-linear" width="24"></iconify-icon>
</div>
<div>
<dt className="font-semibold text-slate-900">Expert Team</dt>
<dd className="mt-1 text-sm text-slate-500">Verified, trained, and uniformed staff. No daily wage labor.</dd>
</div>
</div>
</dl>
</div>
<div className="order-1 lg:order-2 relative">
<div className="aspect-square overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
<img alt="Packers moving boxes" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -left-6 rounded-xl bg-white p-6 shadow-xl border border-slate-100 max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="flex -space-x-2">
<div className="h-8 w-8 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="h-8 w-8 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="h-8 w-8 rounded-full bg-slate-400 border-2 border-white"></div>
</div>
<span className="text-sm font-semibold text-slate-900">Trusted Team</span>
</div>
<p className="text-xs text-slate-500">"The team was polite and handled my glass table with extreme care."</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-24" id="reviews">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900 mb-16">Customer Stories</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6">"Excellent service! Shifted my 2BHK from Malviya Nagar to Jagatpura. The team arrived on time and packed everything perfectly. No scratches."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-xs">RJ</div>
<div>
<p className="text-sm font-semibold text-slate-900">Rahul Jain</p>
<p className="text-xs text-slate-500">Jaipur Local Move</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6">"Sent my car from Jaipur to Bangalore. The tracking was accurate and I received the car in the same condition. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-xs">AS</div>
<div>
<p className="text-sm font-semibold text-slate-900">Amit Sharma</p>
<p className="text-xs text-slate-500">Car Transport</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<div className="flex text-amber-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-slate-600 mb-6">"Very professional movers. The office relocation was handled smoothly over the weekend so we could work on Monday."</p>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500 text-xs">MK</div>
<div>
<p className="text-sm font-semibold text-slate-900">Meera Khan</p>
<p className="text-xs text-slate-500">Office Move</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="faq">
<div className="mx-auto max-w-3xl px-6 lg:px-8">
<h2 className="text-center text-3xl font-semibold tracking-tight text-slate-900 mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group rounded-xl bg-slate-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-lg open:ring-1 open:ring-slate-200 transition-all">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
<h3 className="font-medium">What is the estimated cost of local shifting in Jaipur?</h3>
<span className="group-open:-rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-slate-600">
                        The cost depends on the volume of goods and distance. Typically, a 1BHK local move ranges from ₹3,000 to ₹6,000, while a 2BHK can cost between ₹5,000 to ₹9,000. Contact us for an exact quote.
                    </p>
</details>
<details className="group rounded-xl bg-slate-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-lg open:ring-1 open:ring-slate-200 transition-all">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
<h3 className="font-medium">Do you provide transit insurance?</h3>
<span className="group-open:-rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-slate-600">
                        Yes, we offer comprehensive transit insurance for both household goods and vehicles to protect against any unforeseen damage during the journey.
                    </p>
</details>
<details className="group rounded-xl bg-slate-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-lg open:ring-1 open:ring-slate-200 transition-all">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
<h3 className="font-medium">How much time does it take to pack a 2BHK apartment?</h3>
<span className="group-open:-rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-slate-600">
                        Usually, packing a standard 2BHK apartment takes about 4-6 hours with a team of 3-4 professional packers.
                    </p>
</details>
<details className="group rounded-xl bg-slate-50 p-6 [&amp;_summary::-webkit-details-marker]:hidden open:bg-white open:shadow-lg open:ring-1 open:ring-slate-200 transition-all">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
<h3 className="font-medium">Do you serve all areas in Jaipur?</h3>
<span className="group-open:-rotate-180 transition-transform">
<iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</span>
</summary>
<p className="mt-4 text-sm leading-relaxed text-slate-600">
                        Yes, we cover all localities including Vaishali Nagar, Mansarovar, Jagatpura, Malviya Nagar, Raja Park, C-Scheme, and Bani Park.
                    </p>
</details>
</div>
</div>
</section>

<section className="border-t border-slate-200 py-12 bg-white" id="areas">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<p className="text-sm font-semibold text-slate-900 mb-4">We serve across Jaipur:</p>
<div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
<span>Vaishali Nagar</span>
<span className="text-slate-300">|</span>
<span>Mansarovar</span>
<span className="text-slate-300">|</span>
<span>Malviya Nagar</span>
<span className="text-slate-300">|</span>
<span>Jagatpura</span>
<span className="text-slate-300">|</span>
<span>Raja Park</span>
<span className="text-slate-300">|</span>
<span>C-Scheme</span>
<span className="text-slate-300">|</span>
<span>Bani Park</span>
<span className="text-slate-300">|</span>
<span>Tonk Road</span>
<span className="text-slate-300">|</span>
<span>Ajmer Road</span>
<span className="text-slate-300">|</span>
<span>Sanganer</span>
<span className="text-slate-300">|</span>
<span>Vidhyadhar Nagar</span>
<span className="text-slate-300">|</span>
<span>Jhotwara</span>
</div>
</div>
</section>

<section className="bg-slate-900 py-16">
<div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
<div>
<h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">Ready to move?</h2>
<p className="mt-2 text-slate-400">Get a free quote in minutes. No credit card required.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-rose-50 transition-colors text-center" href="#quote">Get Free Quote</a>
<a className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition-colors text-center" href="tel:+919876543210">Call Now</a>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div>
<a className="flex items-center gap-2 mb-6" href="#">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-rose-600 text-white">
<iconify-icon icon="solar:truck-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">MPJ</span>
</a>
<p className="text-sm text-slate-500 mb-6">Your trusted partner for packing and moving services in Jaipur. ISO 9001:2015 Certified.</p>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Our Services</h3>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-rose-600 transition-colors" href="#">Residential Moving</a></li>
<li><a className="hover:text-rose-600 transition-colors" href="#">Commercial Moving</a></li>
<li><a className="hover:text-rose-600 transition-colors" href="#">Vehicle Shipping</a></li>
<li><a className="hover:text-rose-600 transition-colors" href="#">Storage Solutions</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Links</h3>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-rose-600 transition-colors" href="#">About Company</a></li>
<li><a className="hover:text-rose-600 transition-colors" href="#">Get Quote</a></li>
<li><a className="hover:text-rose-600 transition-colors" href="#">Contact Us</a></li>
<li><a className="hover:text-rose-600 transition-colors" href="#">Terms &amp; Conditions</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Contact Info</h3>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 flex-none text-rose-600" icon="solar:map-point-linear"></iconify-icon>
<span>Plot No. 12, Queens Road, Vaishali Nagar, Jaipur, Rajasthan 302021</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="flex-none text-rose-600" icon="solar:phone-linear"></iconify-icon>
<span>+91 98765 43210</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="flex-none text-rose-600" icon="solar:letter-linear"></iconify-icon>
<span>info@moverspackersjaipur.com</span>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Movers Packers Jaipur. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-rose-600 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-rose-600 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-slate-400 hover:text-rose-600 transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
