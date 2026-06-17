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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Manrope', 'sans-serif'],
},
colors: {
brand: {
DEFAULT: '#3A6EA5', // Muted blue accent
dark: '#2C5580',
},
neutral: {
850: '#202020',
900: '#171717',
}
}
}
}
}



        // Initialize Lucide Icons
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="bg-brand text-white p-1.5 rounded-lg">
<i className="w-5 h-5" data-lucide="hammer"></i>
</div>
<span className="font-semibold text-lg tracking-tight text-neutral-900">HanseaticBuild</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-brand transition-colors" href="#services">Services</a>
<a className="hover:text-brand transition-colors" href="#process">How it Works</a>
<a className="hover:text-brand transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-brand transition-colors" href="#faq">FAQ</a>
</div>
<a className="bg-brand hover:bg-brand-dark text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200" href="#contact">
                Get a Quote
            </a>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand text-xs font-semibold mb-6 border border-blue-100">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
</span>
                        Available for projects in Hamburg
                    </div>
<h1 className="text-5xl lg:text-6xl font-semibold text-neutral-900 tracking-tight leading-[1.1] mb-6">
                        Renovations done right. <br className="hidden lg:block"/> No stress, just results.
                    </h1>
<p className="text-xl text-neutral-500 mb-10 leading-relaxed max-w-lg">
                        We transform homes in Hamburg with transparent pricing, strict timelines, and German craftsmanship. Finally, a contractor you can trust.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-brand hover:bg-brand-dark text-white font-medium px-8 py-4 rounded-full transition-all text-center flex items-center justify-center gap-2" href="#contact">
                            Request a Quote <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<a className="bg-neutral-50 hover:bg-neutral-100 border border-neutral-200 text-neutral-900 font-medium px-8 py-4 rounded-full transition-all text-center" href="tel:+49401234567">
                            Call +49 40 123 4567
                        </a>
</div>
<div className="mt-8 flex items-center gap-4 text-sm text-neutral-500">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-neutral-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-neutral-400 border-2 border-white"></div>
</div>
<p>Trusted by 500+ Hamburg homeowners</p>
</div>
</div>
<div className="relative fade-in-up delay-200">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200/50 aspect-[4/3] lg:aspect-square">
<img alt="Modern renovation interior" className="object-cover w-full h-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur shadow-lg p-4 rounded-xl border border-white/20 max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-green-100 text-green-700 rounded-lg">
<i className="w-5 h-5" data-lucide="check-circle-2"></i>
</div>
<div>
<p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">Status</p>
<p className="text-sm font-semibold text-neutral-900">Project Completed</p>
</div>
</div>
<p className="text-xs text-neutral-500">On time • On budget</p>
</div>
</div>

<div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-neutral-100 rounded-full blur-3xl opacity-50"></div>
</div>
</div>
</div>
</header>

<section className="border-y border-neutral-100 bg-neutral-50/50 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center items-center opacity-80">
<div className="flex items-center gap-3 group">
<i className="w-6 h-6 text-[#EBEBEB] group-hover:text-brand transition-colors" data-lucide="clock"></i>
<span className="text-sm font-medium">Fast Response</span>
</div>
<div className="flex items-center gap-3 group">
<i className="w-6 h-6 text-[#EBEBEB] group-hover:text-brand transition-colors" data-lucide="award"></i>
<span className="text-sm font-medium">Certified Pros</span>
</div>
<div className="flex items-center gap-3 group">
<i className="w-6 h-6 text-[#EBEBEB] group-hover:text-brand transition-colors" data-lucide="shield-check"></i>
<span className="text-sm font-medium">Fixed Pricing</span>
</div>
<div className="flex items-center gap-3 group">
<i className="w-6 h-6 text-[#EBEBEB] group-hover:text-brand transition-colors" data-lucide="map-pin"></i>
<span className="text-sm font-medium">Local Hamburg</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">Construction shouldn't be a nightmare.</h2>
<p className="text-lg text-neutral-500">We know the industry has a bad reputation. We built HanseaticBuild to solve the specific frustrations homeowners face.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
<div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center border border-neutral-100 mb-4 text-red-500">
<i className="w-5 h-5" data-lucide="x-circle"></i>
</div>
<h3 className="text-neutral-900 font-semibold mb-2">Unreliable Contractors</h3>
<p className="text-sm leading-relaxed">Tired of workers who show up late or ghost you halfway through?</p>
</div>

<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
<div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center border border-neutral-100 mb-4 text-red-500">
<i className="w-5 h-5" data-lucide="banknote"></i>
</div>
<h3 className="text-neutral-900 font-semibold mb-2">Hidden Costs</h3>
<p className="text-sm leading-relaxed">No more "surprise" invoices at the end of the project.</p>
</div>

<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
<div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center border border-neutral-100 mb-4 text-red-500">
<i className="w-5 h-5" data-lucide="hourglass"></i>
</div>
<h3 className="text-neutral-900 font-semibold mb-2">Endless Delays</h3>
<p className="text-sm leading-relaxed">We stick to the schedule we agree on, respecting your time.</p>
</div>

<div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100">
<div className="bg-white w-10 h-10 rounded-lg flex items-center justify-center border border-neutral-100 mb-4 text-red-500">
<i className="w-5 h-5" data-lucide="message-square-off"></i>
</div>
<h3 className="text-neutral-900 font-semibold mb-2">Poor Communication</h3>
<p className="text-sm leading-relaxed">You'll always know the status of your project, every step.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900 text-white rounded-[2.5rem] mx-4 lg:mx-8">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-6">The Hanseatic Standard.</h2>
<p className="text-neutral-400 text-lg mb-8 max-w-md">We bring order, cleanliness, and precision to the chaos of construction. Here is what you can expect when working with us.</p>
<a className="text-white border-b border-white/30 hover:border-white pb-1 transition-colors inline-flex items-center gap-2" href="#contact">
                    Start your project <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</a>
</div>
<div className="grid sm:grid-cols-2 gap-8">
<div className="flex gap-4">
<div className="shrink-0 bg-white/10 p-3 rounded-xl h-fit">
<i className="w-6 h-6 text-brand" data-lucide="zap"></i>
</div>
<div>
<h3 className="font-semibold text-lg mb-2">Fast Execution</h3>
<p className="text-neutral-400 text-sm">Efficient workflows that get the job done without cutting corners.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 bg-white/10 p-3 rounded-xl h-fit">
<i className="w-6 h-6 text-brand" data-lucide="file-check"></i>
</div>
<div>
<h3 className="font-semibold text-lg mb-2">Fixed Pricing</h3>
<p className="text-neutral-400 text-sm">Detailed quotes upfront. The price we say is the price you pay.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 bg-white/10 p-3 rounded-xl h-fit">
<i className="w-6 h-6 text-brand" data-lucide="sparkles"></i>
</div>
<div>
<h3 className="font-semibold text-lg mb-2">Clean Worksite</h3>
<p className="text-neutral-400 text-sm">We clean up daily. We treat your home with total respect.</p>
</div>
</div>
<div className="flex gap-4">
<div className="shrink-0 bg-white/10 p-3 rounded-xl h-fit">
<i className="w-6 h-6 text-brand" data-lucide="user-check"></i>
</div>
<div>
<h3 className="font-semibold text-lg mb-2">Direct Contact</h3>
<p className="text-neutral-400 text-sm">One dedicated project manager for all your questions.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
<div>
<h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight mb-2">Our Core Services</h2>
<p className="text-neutral-500">Specialized expertise for modern homes.</p>
</div>
<a className="text-brand font-medium hover:text-brand-dark transition-colors text-sm" href="#contact">
                    View all services →
                </a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl border border-neutral-200 hover:border-brand/50 transition-colors bg-white hover:shadow-lg hover:shadow-brand/5 cursor-pointer">
<div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand/10 transition-colors">
<i className="w-6 h-6 text-neutral-600 group-hover:text-brand" data-lucide="home"></i>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Full Renovation</h3>
<p className="text-sm text-neutral-500 mb-4 line-clamp-2">Complete home makeovers including demolition, structure, and high-end finishing.</p>
<span className="text-xs font-semibold uppercase tracking-wider text-brand">Learn more</span>
</div>

<div className="group p-6 rounded-2xl border border-neutral-200 hover:border-brand/50 transition-colors bg-white hover:shadow-lg hover:shadow-brand/5 cursor-pointer">
<div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand/10 transition-colors">
<i className="w-6 h-6 text-neutral-600 group-hover:text-brand" data-lucide="droplet"></i>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Painting &amp; Drywall</h3>
<p className="text-sm text-neutral-500 mb-4 line-clamp-2">Professional interior and exterior painting, plastering, and flawless drywall installation.</p>
<span className="text-xs font-semibold uppercase tracking-wider text-brand">Learn more</span>
</div>

<div className="group p-6 rounded-2xl border border-neutral-200 hover:border-brand/50 transition-colors bg-white hover:shadow-lg hover:shadow-brand/5 cursor-pointer">
<div className="w-12 h-12 bg-neutral-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand/10 transition-colors">
<i className="w-6 h-6 text-neutral-600 group-hover:text-brand" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-2">Flooring &amp; Tiling</h3>
<p className="text-sm text-neutral-500 mb-4 line-clamp-2">Expert installation of hardwood, laminate, vinyl, and ceramic tiles for bathrooms and kitchens.</p>
<span className="text-xs font-semibold uppercase tracking-wider text-brand">Learn more</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50 border-y border-neutral-100" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-xl mx-auto mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight mb-4">Simple, stress-free process</h2>
<p className="text-neutral-500">We've optimized our workflow to minimize disruption to your life.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-0 w-full h-px bg-neutral-200 -z-10"></div>

<div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm relative">
<div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold mb-6 text-lg border-4 border-white shadow-sm">1</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">Request</h3>
<p className="text-sm text-neutral-500">Fill out our simple form or call us. We’ll discuss your needs and schedule a site visit within 24 hours.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm relative">
<div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold mb-6 text-lg border-4 border-white shadow-sm">2</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">Plan &amp; Quote</h3>
<p className="text-sm text-neutral-500">We inspect the site and provide a detailed, fixed-price quote and timeline. No guessing games.</p>
</div>

<div className="bg-white p-8 rounded-2xl border border-neutral-100 shadow-sm relative">
<div className="w-10 h-10 bg-brand text-white rounded-full flex items-center justify-center font-bold mb-6 text-lg border-4 border-white shadow-sm">3</div>
<h3 className="text-xl font-semibold text-neutral-900 mb-3">Execution</h3>
<p className="text-sm text-neutral-500">Our team gets to work. We manage the project start to finish, leaving you with a clean, perfect result.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight mb-12 text-center">Loved by locals</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-neutral-50 p-8 rounded-2xl">
<div className="flex gap-1 text-yellow-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-700 mb-6 italic">"Absolute professionals. They renovated our entire kitchen in Altona exactly on schedule. The site was left clean every single day."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">

<img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Thomas Müller</p>
<p className="text-xs text-neutral-500">Hamburg-Altona</p>
</div>
</div>
</div>

<div className="bg-neutral-50 p-8 rounded-2xl">
<div className="flex gap-1 text-yellow-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-700 mb-6 italic">"Transparent pricing was the main reason we chose them. No hidden fees. The flooring work is flawless."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Sarah Klein</p>
<p className="text-xs text-neutral-500">Hamburg-Eppendorf</p>
</div>
</div>
</div>

<div className="bg-neutral-50 p-8 rounded-2xl">
<div className="flex gap-1 text-yellow-500 mb-4">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
<p className="text-neutral-700 mb-6 italic">"Finally a contractor who picks up the phone. Great communication and high quality craftsmanship."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-neutral-200 rounded-full overflow-hidden">
<img alt="Client" className="w-full h-full object-cover" src="https://i.pravatar.cc/150?u=a04258114e29026702d"/>
</div>
<div>
<p className="text-sm font-semibold text-neutral-900">Jan Becker</p>
<p className="text-xs text-neutral-500">Hamburg-Mitte</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-neutral-100" id="faq">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight mb-12 text-center">Frequently asked questions</h2>
<div className="space-y-4">
<details className="group p-6 bg-neutral-50 rounded-xl border border-neutral-200 open:bg-white open:shadow-sm transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-neutral-900">
<span>How are your prices calculated?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-600 mt-3 text-sm leading-relaxed">
                        We provide a detailed line-item quote after our initial site visit. This includes labor, materials, and disposal fees. The price we agree on is fixed, unless you request changes during the project.
                    </div>
</details>
<details className="group p-6 bg-neutral-50 rounded-xl border border-neutral-200 open:bg-white open:shadow-sm transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-neutral-900">
<span>Do you provide a warranty?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-600 mt-3 text-sm leading-relaxed">
                        Yes, we offer a 2-year guarantee on all craftsmanship. We stand by the quality of our work and adhere to all German construction standards (VOB).
                    </div>
</details>
<details className="group p-6 bg-neutral-50 rounded-xl border border-neutral-200 open:bg-white open:shadow-sm transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-neutral-900">
<span>How soon can you start?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-600 mt-3 text-sm leading-relaxed">
                        Typically, we can schedule a site visit within 48 hours. Project start dates depend on our current capacity, but we generally start new projects within 2-4 weeks of quote acceptance.
                    </div>
</details>
<details className="group p-6 bg-neutral-50 rounded-xl border border-neutral-200 open:bg-white open:shadow-sm transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-neutral-900">
<span>Do I need to be home during the work?</span>
<span className="transition group-open:rotate-180">
<i className="w-5 h-5 text-neutral-400" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="text-neutral-600 mt-3 text-sm leading-relaxed">
                        Not necessarily. Many clients provide us with a key (safe access). We communicate daily progress so you're always in the loop, even if you aren't on site.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<img alt="Construction team meeting" className="rounded-2xl shadow-xl shadow-neutral-200/50" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="order-1 lg:order-2">
<div className="inline-block px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-xs font-semibold mb-6">
                        About Us
                    </div>
<h2 className="text-3xl lg:text-4xl font-semibold text-neutral-900 tracking-tight mb-6">Built on 15+ years of Hamburg reliability.</h2>
<p className="text-neutral-500 mb-6 leading-relaxed">
                        HanseaticBuild was founded with a simple mission: to bring professionalism back to the trades. We aren't just builders; we are partners in improving your home.
                    </p>
<p className="text-neutral-500 mb-8 leading-relaxed">
                        Based in the heart of Hamburg, we understand local architecture, regulations, and the importance of punctuality.
                    </p>
<div className="flex gap-8 border-t border-neutral-100 pt-8">
<div>
<p className="text-3xl font-bold text-brand mb-1">15+</p>
<p className="text-sm text-neutral-500">Years Exp.</p>
</div>
<div>
<p className="text-3xl font-bold text-brand mb-1">100%</p>
<p className="text-sm text-neutral-500">On Budget</p>
</div>
<div>
<p className="text-3xl font-bold text-brand mb-1">500+</p>
<p className="text-sm text-neutral-500">Projects</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 mx-4" id="contact">
<div className="max-w-5xl mx-auto bg-brand rounded-[2.5rem] p-12 lg:p-24 text-center text-white relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
<div className="absolute top-[-50%] left-[-20%] w-[800px] h-[800px] rounded-full border-[60px] border-white"></div>
</div>
<div className="relative z-10">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6">Ready to upgrade your space?</h2>
<p className="text-brand-100 text-lg mb-10 max-w-xl mx-auto">Get a free consultation and fixed-price quote today. No obligation, just honest advice.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<button className="bg-white text-brand font-semibold px-8 py-4 rounded-full hover:bg-neutral-100 transition-colors w-full sm:w-auto">
                        Request a Quote
                    </button>
<div className="flex items-center gap-2 text-white/90 font-medium">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<span>+49 40 123 4567</span>
</div>
</div>
<p className="mt-8 text-xs text-brand-200 opacity-80">
                    Fast response • Transparent pricing • Local service
                </p>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-neutral-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="bg-neutral-900 text-white p-1.5 rounded-lg">
<i className="w-4 h-4" data-lucide="hammer"></i>
</div>
<span className="font-semibold text-neutral-900">HanseaticBuild</span>
</div>
<p className="text-sm text-neutral-500 mb-6">Quality construction services for Hamburg and surrounding areas.</p>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Services</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-brand transition-colors" href="#">Renovation</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Flooring</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Painting</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Drywall</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-brand transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Process</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Reviews</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-neutral-900 mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>Mönckebergstraße 10</li>
<li>20095 Hamburg</li>
<li>info@hanseaticbuild.de</li>
<li>+49 40 123 4567</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-400">
<p>© 2023 HanseaticBuild. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-600" href="#">Imprint</a>
<a className="hover:text-neutral-600" href="#">Privacy Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
