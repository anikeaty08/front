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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#f0f6ff',
100: '#e0edff',
200: '#cce1ff',
300: '#a8cdff',
400: '#7cb0ff',
500: '#528dff',
600: '#2a63f6', // Primary Brand Color
700: '#1b4ce4',
800: '#1a3eb8',
900: '#193891',
950: '#112358',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear())
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
      

<nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a className="flex items-center gap-3" href="#">
<img alt="All About Gutters Logo" className="w-auto h-10 object-contain" src="https://static.wixstatic.com/media/f78e35_4ecf6d68abdd4a4b9da5c096b6a156a6~mv2.png/v1/fill/w_600,h_318,al_c,q_85,enc_avif,quality_auto/f78e35_4ecf6d68abdd4a4b9da5c096b6a156a6~mv2.png"/>
<span className="sr-only">All About Gutters</span>
</a>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#why-us">Why Us</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#work">Our Work</a>
<a className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="flex items-center gap-2 text-slate-900 font-semibold text-sm hover:text-brand-600 transition-colors" href="tel:3096822100">
<iconify-icon className="text-lg text-brand-600" icon="solar:phone-calling-linear"></iconify-icon>
                        (309) 682-2100
                    </a>
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 shadow-sm transition-all" href="#contact">
                        Get a Free Quote
                    </a>
</div>

<div className="flex items-center md:hidden gap-4">
<a className="flex items-center justify-center h-10 w-10 rounded-full bg-brand-50 text-brand-600" href="tel:3096822100">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</a>
<button className="text-slate-500 hover:text-slate-900 focus:outline-none p-2" type="button">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-brand-700 text-xs font-medium mb-6 border border-blue-200/50">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                        Serving Peoria &amp; Surrounding Areas
                    </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-slate-900 leading-tight mb-6">
                        Protect Your Home with <span className="text-brand-600">Premium Gutter</span> Solutions
                    </h1>
<p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                        Professional seamless gutter installation, protective guards, and reliable maintenance. We ensure water flows away from your foundation, protecting your biggest investment.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-transparent text-base font-medium rounded-xl text-white bg-brand-600 hover:bg-brand-700 shadow-sm transition-all gap-2" href="tel:3096822100">
<iconify-icon className="text-xl" icon="solar:phone-bold"></iconify-icon>
                            Call Now (309) 682-2100
                        </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 border border-slate-200 text-base font-medium rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all" href="#contact">
                            Request Service
                        </a>
</div>

<div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-brand-600" icon="solar:shield-check-linear"></iconify-icon>
                            Licensed &amp; Insured
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-brand-600" icon="solar:medal-star-linear"></iconify-icon>
                            Satisfaction Guaranteed
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-brand-600" icon="solar:users-group-two-rounded-linear"></iconify-icon>
                            Local Family Owned
                        </div>
</div>
</div>

<div className="lg:col-span-6 relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white border border-slate-100/50 aspect-[4/3]">
<img alt="Professional gutter installation on a residential home" className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
</div>

<div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 hidden sm:flex">
<div className="flex flex-col items-center justify-center bg-brand-50 text-brand-600 rounded-lg w-12 h-12 font-semibold text-lg">
                            4.5
                        </div>
<div className="">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-half-bold"></iconify-icon>
</div>
<span className="text-xs font-medium text-slate-500">Based on 48 Google Reviews</span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="bg-slate-900 py-6 border-y border-slate-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap justify-center sm:justify-between items-center gap-6 text-slate-300 text-sm font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-slate-400" icon="solar:history-linear"></iconify-icon>
                    Years of Local Experience
                </div>
<div className="hidden sm:block w-px h-4 bg-slate-700"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-slate-400" icon="solar:chat-round-check-linear"></iconify-icon>
                    48+ Google Reviews
                </div>
<div className="hidden md:block w-px h-4 bg-slate-700"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-slate-400" icon="solar:star-circle-linear"></iconify-icon>
                    4.5/5 Average Rating
                </div>
<div className="hidden lg:block w-px h-4 bg-slate-700"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl text-slate-400" icon="solar:verified-check-linear"></iconify-icon>
                    Fully Licensed &amp; Insured
                </div>
</div>
</div>
</div>

<section className="py-20 lg:py-28 bg-white" id="why-us">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900 mb-4">Why Peoria Residents Choose All About Gutters</h2>
<p className="text-base text-slate-600">We don't just hang aluminum; we engineer drainage solutions designed to protect your home from Illinois weather.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-md hover:border-slate-200 transition-all group">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:tag-price-linear"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-semibold text-slate-900 mb-2">Honest Upfront Pricing</h3>
<p className="text-sm text-slate-600">No hidden fees or surprise charges. We provide detailed, transparent quotes before any work begins.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-md hover:border-slate-200 transition-all group">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-semibold text-slate-900 mb-2">Licensed &amp; Insured</h3>
<p className="text-sm text-slate-600">Fully protected for your peace of mind. We carry comprehensive liability and worker's compensation.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-md hover:border-slate-200 transition-all group">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-semibold text-slate-900 mb-2">Local Peoria Business</h3>
<p className="text-sm text-slate-600">We live and work in the community we serve. We understand local building codes and weather challenges.</p>
</div>

<div className="p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-md hover:border-slate-200 transition-all group">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 group-hover:bg-brand-600 group-hover:text-white transition-colors">
<iconify-icon className="text-2xl" icon="solar:like-linear"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-semibold text-slate-900 mb-2">100% Satisfaction</h3>
<p className="text-sm text-slate-600">Our job isn't done until you are completely satisfied with the fit, finish, and function of your gutters.</p>
</div>
</div>
</div>
</section>

<section className="lg:py-28 border-y bg-slate-50 border-slate-100 pt-20 pb-20" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900 mb-4">Our Services</h2>
<p className="text-base text-slate-600">Comprehensive gutter solutions tailored to protect your property's foundation, siding, and landscaping from water damage.</p>
</div>
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-200 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shrink-0" href="#contact">
                    Get a Free Quote
                </a>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="w-14 h-14 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600">
<iconify-icon className="text-3xl" icon="solar:home-angle-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-3">Seamless Gutter Installation</h3>
<p className="text-sm text-slate-600 mb-4">Custom-fabricated on-site to fit your home's exact dimensions. Seamless gutters reduce leaks, look cleaner, and offer superior durability compared to sectional alternatives.</p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Multiple color options</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Heavy-gauge aluminum</li>
</ul>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="w-14 h-14 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600">
<iconify-icon className="text-3xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-3">Gutter Guard &amp; Leaf Protection</h3>
<p className="text-sm text-slate-600 mb-4">Keep leaves, pine needles, and debris out of your gutters for good. Our premium guard systems ensure water flows freely while virtually eliminating the need for seasonal cleaning.</p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Micro-mesh technology</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Fits existing or new gutters</li>
</ul>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="w-14 h-14 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600">
<iconify-icon className="text-3xl" icon="solar:waterdrops-linear"></iconify-icon>
</div>
<div className="">
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-3">Gutter Cleaning &amp; Maintenance</h3>
<p className="text-sm text-slate-600 mb-4">Professional, safe removal of all debris, downspout flushing, and system inspection. Regular maintenance prevents costly water damage to your fascia and foundation.</p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Thorough downspout clearing</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Mess-free service guarantee</li>
</ul>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 p-6 sm:p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="w-14 h-14 shrink-0 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600">
<iconify-icon className="text-3xl" icon="solar:wrench-linear"></iconify-icon>
</div>
<div>
<h3 className="text-xl tracking-tight font-semibold text-slate-900 mb-3">Professional Repair &amp; Realignment</h3>
<p className="text-sm text-slate-600 mb-4">Fix sagging, leaking, or damaged gutters before they cause major issues. We realign pitch, reseal corners, and replace damaged sections to restore optimal function.</p>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Fascia board repair available</li>
<li className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Fast and reliable fixes</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-12">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900 mb-4">Trusted by Peoria Customers</h2>
<p className="text-base text-slate-600 mb-6">Here's what our customers say about our craftsmanship and service.</p>

<div className="inline-flex flex-wrap justify-center items-center gap-4 px-6 py-3 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">
<span>Years of Experience</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span>48+ Reviews</span>
<span className="w-1 h-1 rounded-full bg-slate-300"></span>
<span className="flex items-center gap-1">4.5 <iconify-icon className="text-yellow-400" icon="solar:star-bold"></iconify-icon> Average</span>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col h-full">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-6 flex-grow">"Excellent service! They installed seamless gutters on our entire house in Peoria. The crew was professional, cleaned up perfectly, and the price was exactly as quoted."</p>
<div className="flex items-center justify-between border-t border-slate-200 pt-4 mt-auto">
<div>
<p className="text-sm font-semibold text-slate-900">Michael R.</p>
<p className="text-xs text-slate-500">Peoria, IL • Installation</p>
</div>
<iconify-icon className="text-lg grayscale opacity-50" icon="logos:google-icon"></iconify-icon>
</div>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col h-full">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-6 flex-grow">"Had them come out to clean our gutters and fix a sagging section over the garage. Fast, polite, and very reasonable pricing. Highly recommend them to anyone in the area."</p>
<div className="flex items-center justify-between border-t border-slate-200 pt-4 mt-auto">
<div>
<p className="text-sm font-semibold text-slate-900">Sarah M.</p>
<p className="text-xs text-slate-500">Dunlap, IL • Repair</p>
</div>
<iconify-icon className="text-lg grayscale opacity-50" icon="logos:google-icon"></iconify-icon>
</div>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col h-full">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-6 flex-grow">"The leaf guards they installed have been a lifesaver. No more climbing ladders every fall. The installation was quick and they took the time to explain everything."</p>
<div className="flex items-center justify-between border-t border-slate-200 pt-4 mt-auto">
<div>
<p className="text-sm font-semibold text-slate-900">John D.</p>
<p className="text-xs text-slate-500">East Peoria, IL • Guards</p>
</div>
<iconify-icon className="text-lg grayscale opacity-50" icon="logos:google-icon"></iconify-icon>
</div>
</div>

<div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col h-full">
<div className="flex items-center gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-half-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-700 mb-6 flex-grow">"Called them after a storm damaged our gutters. They were out the next day for a quote and had it fixed before the next rain. Very dependable local company."</p>
<div className="flex items-center justify-between border-t border-slate-200 pt-4 mt-auto">
<div>
<p className="text-sm font-semibold text-slate-900">Emily T.</p>
<p className="text-xs text-slate-500">Washington, IL • Repair</p>
</div>
<iconify-icon className="text-lg grayscale opacity-50" icon="logos:google-icon"></iconify-icon>
</div>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-200 text-sm font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all gap-2" href="https://share.google/c5E9B4gmDVPdE4wXN" rel="noopener noreferrer" target="_blank">
<iconify-icon icon="logos:google-icon"></iconify-icon>
                    See More Reviews on Google
                </a>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-900 text-white border-y border-slate-800" id="work">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 gap-x-6 gap-y-6 justify-between">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white mb-4">Our Recent Work</h2>
<p className="text-base text-slate-400">Quality craftsmanship you can see. Browse real photos from our recent job sites around the Peoria area.</p>
</div>
<a className="inline-flex items-center justify-center px-5 py-2.5 border border-slate-700 text-sm font-medium rounded-lg text-white bg-slate-800 hover:bg-slate-700 hover:border-slate-600 transition-all shrink-0" href="#contact">
                    Get Your Project Started
                </a>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">

<div className="relative group rounded-xl overflow-hidden aspect-square bg-slate-800 border border-slate-700">
<img alt="Worker on ladder cleaning gutters" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/38823a43-8d71-490e-80b5-9c1aa00b82ce_800w.png?w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-sm font-medium text-white">Gutter Maintenance</span>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden aspect-square bg-slate-800 border border-slate-700">
<img alt="Roof edge showing gutter system" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1635424709961-f3a150459ad4?w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-center bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 bg-[url(https://images.unsplash.com/photo-1635424709961-f3a150459ad4?w=800&amp;q=80)] bg-cover pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-sm font-medium text-white">Seamless Installation</span>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden aspect-square bg-slate-800 border border-slate-700">
<img alt="Contractor measuring on roof" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1489514354504-1653aa90e34e?w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-sm font-medium text-white">Inspection &amp; Repair</span>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden aspect-square bg-slate-800 border border-slate-700">
<img alt="Clean gutters on house exterior" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1711375461063-085e3a6843df?w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-sm font-medium text-white">Custom Color Match</span>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden aspect-square bg-slate-800 border border-slate-700">
<img alt="Close up of construction materials" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://plus.unsplash.com/premium_photo-1663100814899-5b1f32664ca0?w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-sm font-medium text-white">Premium Materials</span>
</div>
</div>

<div className="relative group rounded-xl overflow-hidden aspect-square bg-slate-800 border border-slate-700">
<img alt="Workers on site" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1633759593085-1eaeb724fc88?w=800&amp;q=80"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<span className="text-sm font-medium text-white">Leaf Guard System</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16">

<div className="">
<h2 className="text-3xl tracking-tight font-semibold text-slate-900 mb-6">About All About Gutters</h2>
<div className="prose prose-slate prose-sm sm:prose-base">
<p className="">At All About Gutters, we understand that a properly functioning gutter system is your home's first line of defense against water damage. Founded on the principles of hard work, honesty, and superior craftsmanship, we have grown to become Peoria's trusted choice for exterior water management.</p>
<p className="">As a local, community-focused business, we aren't just working on houses; we're helping our neighbors protect their investments. Our team consists of highly trained installers who take pride in their work, ensuring every seam is tight, every pitch is perfect, and every job site is left cleaner than we found it.</p>
<p className="">Whether you need a simple repair, a thorough cleaning, or a completely new seamless system, you can count on us to deliver honest assessments and reliable solutions that stand up to Illinois weather.</p>
</div>

<div className="mt-8 p-6 bg-brand-50 border border-brand-100 rounded-xl flex gap-4">
<iconify-icon className="text-3xl text-brand-600 shrink-0" icon="solar:shield-star-linear"></iconify-icon>
<div className="">
<h4 className="text-base font-semibold text-slate-900 mb-1">Our Workmanship Guarantee</h4>
<p className="text-sm text-slate-600">We stand behind our installations. Ask about our lifetime workmanship warranties and manufacturer material guarantees.</p>
</div>
</div>
</div>

<div className="">
<div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 lg:p-10">
<h3 className="text-2xl tracking-tight font-semibold text-slate-900 mb-6">Proudly Serving Peoria &amp; Surrounding Areas</h3>
<div className="grid grid-cols-2 gap-y-3 mb-8 text-sm text-slate-600">
<div className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon> Peoria</div>
<div className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon> East Peoria</div>
<div className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon> Dunlap</div>
<div className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon> Washington</div>
<div className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon> Morton</div>
<div className="flex items-center gap-2"><iconify-icon className="text-brand-500" icon="solar:map-point-linear"></iconify-icon> Bartonville</div>
</div>
<hr className="border-slate-200 mb-8"/>
<h4 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wider">Business Hours</h4>
<ul className="space-y-3 text-sm text-slate-600 mb-8">
<li className="flex justify-between items-center">
<span>Monday - Friday</span>
<span className="font-medium">8:00 AM - 5:00 PM</span>
</li>
<li className="flex justify-between items-center text-slate-400">
<span>Saturday - Sunday</span>
<span>Closed</span>
</li>
</ul>
<div className="flex items-start gap-3 p-4 bg-orange-50 border border-orange-100 rounded-lg text-orange-800 text-sm">
<iconify-icon className="text-xl shrink-0 mt-0.5" icon="solar:danger-circle-linear"></iconify-icon>
<p className="">Experiencing severe storm damage? Leave a message and we will prioritize your request the next business day.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center mb-16">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-slate-900 mb-4">Get Your Free Estimate</h2>
<p className="text-base text-slate-600">Fill out the form below or give us a call. We typically respond within 24 hours to schedule an on-site assessment.</p>
</div>
<div className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">

<div className="lg:col-span-2 space-y-8">
<div className="">
<h3 className="text-lg font-semibold text-slate-900 mb-6">Contact Information</h3>
<div className="space-y-6">
<a className="flex items-start gap-4 group" href="tel:3096822100">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:border-brand-300 group-hover:text-brand-600 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-slate-900 mb-1">Call Us</p>
<p className="text-sm text-slate-500 group-hover:text-brand-600 transition-colors">(309) 682-2100</p>
</div>
</a>
<a className="flex items-start gap-4 group" href="mailto:office@allaboutgutters.com">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 group-hover:border-brand-300 group-hover:text-brand-600 transition-colors shadow-sm">
<iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-slate-900 mb-1">Email Us</p>
<p className="text-sm text-slate-500 group-hover:text-brand-600 transition-colors">office@allaboutgutters.com</p>
</div>
</a>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-sm">
<iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="">
<p className="text-sm font-medium text-slate-900 mb-1">Service Area</p>
<p className="text-sm text-slate-500">Peoria, IL &amp; Surrounding Communities</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3">
<form action="#" className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm" method="POST">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="first-name">First Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm placeholder-slate-400 focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all" id="first-name" name="first-name" placeholder="John" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="last-name">Last Name</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm placeholder-slate-400 focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all" id="last-name" name="last-name" placeholder="Smith" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm placeholder-slate-400 focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all" id="phone" name="phone" placeholder="(309) 555-0123" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm placeholder-slate-400 focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all" id="email" name="email" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="mb-6">
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="service">Service Needed</label>
<select className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-700 focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all bg-white" id="service" name="service">
<option>New Installation</option>
<option>Gutter Guards</option>
<option>Cleaning &amp; Maintenance</option>
<option>Repair</option>
<option>Other / Not Sure</option>
</select>
</div>
<div className="mb-8">
<label className="block text-sm font-medium text-slate-700 mb-2" htmlFor="message">How can we help?</label>
<textarea className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm placeholder-slate-400 focus:ring-2 focus:ring-brand-600 focus:border-transparent transition-all resize-none" id="message" name="message" placeholder="Briefly describe your project or issue..." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-brand-600 hover:bg-brand-700 shadow-sm transition-all focus:ring-2 focus:ring-offset-2 focus:ring-brand-600" type="submit">
                            Send Message
                        </button>
<p className="text-xs text-center text-slate-500 mt-4"><iconify-icon className="align-middle" icon="solar:lock-keyhole-linear"></iconify-icon> Your information is kept strictly confidential.</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-20 lg:py-24 bg-brand-600 relative overflow-hidden">

<div className="absolute inset-0 opacity-10">
<svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid-pattern" patternunits="userSpaceOnUse" width="40">
<path d="M0 40L40 0H20L0 20M40 40V20L20 40" fill="none" stroke="white" strokeWidth="1"></path>
</pattern>
</defs>
<rect className="" fill="url(#grid-pattern)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold text-white mb-6">Ready to Get Started?</h2>
<p className="text-lg text-brand-100 mb-10 max-w-2xl mx-auto">We are currently accepting new service requests in Peoria. Protect your home today with expert gutter services from a team you can trust.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-semibold rounded-xl text-brand-700 bg-white hover:bg-brand-50 shadow-lg transition-all gap-2" href="tel:3096822100">
<iconify-icon className="text-2xl" icon="solar:phone-bold"></iconify-icon>
                    (309) 682-2100
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/30 text-lg font-medium rounded-xl text-white bg-transparent hover:bg-white/10 transition-all" href="#contact">
                    Get a Free Quote
                </a>
</div>

<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-brand-100 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:check-read-linear"></iconify-icon>
                    Licensed &amp; Insured
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:check-read-linear"></iconify-icon>
                    Local Experts
                </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:check-read-linear"></iconify-icon>
                    Satisfaction Guaranteed
                </div>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-16 pb-8 border-t border-slate-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

<div className="md:col-span-1">

<a className="inline-block text-xl tracking-tight font-semibold text-white mb-4" href="#">
                        ALL ABOUT GUTTERS
                    </a>
<p className="text-sm text-slate-400 mb-6">Professional seamless gutter installation, protection, and maintenance serving Peoria, IL and surrounding areas.</p>
<div className="flex space-x-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="sr-only">Facebook</span>
<iconify-icon className="text-xl grayscale hover:grayscale-0 transition-all" icon="logos:facebook"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="https://share.google/c5E9B4gmDVPdE4wXN" rel="noopener noreferrer" target="_blank">
<span className="sr-only">Google Maps</span>
<iconify-icon className="text-xl grayscale hover:grayscale-0 transition-all" icon="logos:google-maps"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Services</h3>
<ul className="space-y-3 text-sm text-slate-400">
<li className=""><a className="hover:text-white transition-colors" href="#services">Seamless Installation</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#services">Gutter Guards</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
<ul className="space-y-3 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#why-us">Why Choose Us</a></li>
<li><a className="hover:text-white transition-colors" href="#work">Our Work</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h3>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:3096822100">(309) 682-2100</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:office@allaboutgutters.com">office@allaboutgutters.com</a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">
                    © 20262026202620262026202620262026 All About Gutters. All rights reserved.
                </p>
<div className="flex items-center gap-4 text-xs text-slate-500">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear"></iconify-icon> Licensed &amp; Insured</span>
<span className="w-1 h-1 rounded-full bg-slate-700"></span>
<span>Family Owned</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
