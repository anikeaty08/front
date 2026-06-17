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
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
offwhite: '#F9F8F6',
cream: '#F2EFE9',
navy: '#0F172A',
copper: '#B87333',
copperlight: '#D98A41',
slate: '#475569',
border: '#E2E8F0'
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-brand-border/50 transition-all">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="/">
<span className="text-2xl tracking-tight font-normal uppercase text-brand-navy">All American</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-base text-brand-slate hover:text-brand-navy transition-colors" href="#personal">Personal</a>
<a className="text-base text-brand-slate hover:text-brand-navy transition-colors" href="#business">Business</a>
<a className="text-base text-brand-slate hover:text-brand-navy transition-colors" href="#about">About</a>
<a className="text-base text-brand-slate hover:text-brand-navy transition-colors" href="#claims">Claims &amp; Service</a>
</nav>

<div className="hidden lg:flex items-center gap-4">
<a className="text-base text-brand-slate hover:text-brand-navy transition-colors flex items-center gap-1.5" href="tel:9185550199">
<i className="w-4 h-4" data-lucide="phone" strokeWidth="1.5"></i>
                    (918) 555-0199
                </a>
<a className="text-sm text-brand-slate hover:text-brand-navy transition-colors" href="#espanol">Español</a>
<a className="bg-brand-navy text-white px-5 py-2.5 rounded-full text-base font-normal hover:bg-slate-800 transition-colors" href="#quote">
                    Get a Quote
                </a>
</div>

<button aria-label="Open Menu" className="lg:hidden p-2 text-brand-navy">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<main className="flex-grow">

<section className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Tulsa Cityscape at Night" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&amp;fit=crop&amp;q=80"/>
<div className="absolute inset-0 bg-brand-navy/85 mix-blend-multiply"></div>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-sm text-white/90 mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-brand-copper shadow-[0_0_8px_rgba(184,115,51,0.8)]"></span>
                        Independent Tulsa Agency Since 1985
                    </div>
<h1 className="md:text-5xl lg:text-6xl leading-[1.1] text-4xl font-normal text-white tracking-tight mb-6">
                        Independent insurance guidance for Tulsa.
                    </h1>
<p className="text-xl text-white/80 mb-10 leading-relaxed max-w-xl font-light">
                        We compare multiple carriers to help you choose coverage that fits your budget and Oklahoma's unique risks. Real local support, before and after the policy starts.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-brand-copper text-white px-6 py-3.5 rounded-full text-base font-normal hover:bg-brand-copperlight transition-colors text-center shadow-lg shadow-brand-copper/20" href="#quote">
                            Start a Quote
                        </a>
<a className="bg-white/10 border border-white/20 text-white backdrop-blur-md px-6 py-3.5 rounded-full text-base font-normal hover:bg-white/20 transition-colors text-center flex items-center justify-center gap-2" href="tel:9185550199">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
                            Call the Office
                        </a>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 md:p-10 border border-brand-border/50 shadow-2xl relative">
<h2 className="text-3xl tracking-tight font-normal mb-2">Request a review</h2>
<p className="text-base text-brand-slate mb-8">A local Tulsa agent will reach out shortly. No spam.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm text-brand-slate mb-1.5 ml-1">First Name</label>
<input className="w-full bg-brand-offwhite border border-brand-border rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-1 focus:ring-brand-copper focus:border-brand-copper transition-all" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-sm text-brand-slate mb-1.5 ml-1">Last Name</label>
<input className="w-full bg-brand-offwhite border border-brand-border rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-1 focus:ring-brand-copper focus:border-brand-copper transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm text-brand-slate mb-1.5 ml-1">Phone Number</label>
<input className="w-full bg-brand-offwhite border border-brand-border rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-1 focus:ring-brand-copper focus:border-brand-copper transition-all" placeholder="(918) 555-0000" type="tel"/>
</div>
<div>
<label className="block text-sm text-brand-slate mb-1.5 ml-1">What are you looking to cover?</label>
<div className="relative">
<select className="w-full bg-brand-offwhite border border-brand-border rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-1 focus:ring-brand-copper focus:border-brand-copper transition-all appearance-none cursor-pointer">
<option disabled="" selected="" value="">Select coverage type...</option>
<option value="auto">Auto Insurance</option>
<option value="home">Home / Property</option>
<option value="business">Business / Commercial</option>
<option value="other">Other</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-brand-slate">
<i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
<div>
<label className="block text-sm text-brand-slate mb-1.5 ml-1">ZIP Code</label>
<input className="w-full bg-brand-offwhite border border-brand-border rounded-xl px-4 py-3.5 text-base focus:outline-none focus:ring-1 focus:ring-brand-copper focus:border-brand-copper transition-all" placeholder="74103" type="text"/>
</div>
<button className="w-full bg-brand-copper text-white py-4 rounded-xl text-base font-normal hover:bg-brand-copperlight transition-colors mt-4 shadow-md shadow-brand-copper/20" type="button">
                            Get My Quote
                        </button>
</form>
</div>
</div>
</section>

<div className="border-b border-brand-border/60 bg-white py-6">
<div className="max-w-7xl mx-auto px-6 flex items-center justify-between overflow-x-auto gap-8 no-scrollbar text-base text-brand-slate">
<div className="flex items-center gap-2.5 whitespace-nowrap">
<i className="w-5 h-5 text-brand-copper" data-lucide="building-2" strokeWidth="1.5"></i>
<span>Serving Tulsa since 1985</span>
</div>
<div className="hidden md:block w-1 h-1 rounded-full bg-brand-border"></div>
<div className="flex items-center gap-2.5 whitespace-nowrap">
<i className="w-5 h-5 text-brand-copper" data-lucide="shield-check" strokeWidth="1.5"></i>
<span>Independent Agency</span>
</div>
<div className="hidden md:block w-1 h-1 rounded-full bg-brand-border"></div>
<div className="flex items-center gap-2.5 whitespace-nowrap">
<i className="w-5 h-5 text-brand-copper" data-lucide="layers" strokeWidth="1.5"></i>
<span>Compare Multiple Carriers</span>
</div>
<div className="hidden lg:block w-1 h-1 rounded-full bg-brand-border"></div>
<div className="flex items-center gap-2.5 whitespace-nowrap">
<i className="w-5 h-5 text-brand-copper" data-lucide="users" strokeWidth="1.5"></i>
<span>Local Claims Support</span>
</div>
<div className="hidden lg:block w-1 h-1 rounded-full bg-brand-border"></div>
<div className="flex items-center gap-2.5 whitespace-nowrap">
<i className="w-5 h-5 text-brand-copper" data-lucide="globe" strokeWidth="1.5"></i>
<span>Se habla español</span>
</div>
</div>
</div>

<section className="py-24 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-14">
<h2 className="text-4xl tracking-tight font-normal mb-5">Coverage for your life and work.</h2>
<p className="text-brand-slate max-w-2xl text-lg font-light">We don't just sell policies; we explain them. Find the right balance of cost and protection across our core areas.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<a className="group block bg-white p-8 rounded-[2rem] border border-brand-border hover:border-brand-copper/30 hover:shadow-lg hover:shadow-brand-copper/5 transition-all" href="#auto">
<div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="car" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-normal mb-3 group-hover:text-brand-copper transition-colors">Auto Insurance</h3>
<p className="text-base text-brand-slate mb-8 font-light">Compare rates across carriers to find coverage that fits your driving habits and protects your assets on Oklahoma roads.</p>
<span className="text-base font-normal text-brand-navy flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                            Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</a>

<a className="group block bg-white p-8 rounded-[2rem] border border-brand-border hover:border-brand-copper/30 hover:shadow-lg hover:shadow-brand-copper/5 transition-all" href="#home">
<div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="home" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-normal mb-3 group-hover:text-brand-copper transition-colors">Home Insurance</h3>
<p className="text-base text-brand-slate mb-8 font-light">Protect your property against Green Country storms, hail, and unexpected damage with clear deductibles and reliable replacement cost options.</p>
<span className="text-base font-normal text-brand-navy flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                            Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</a>

<a className="group block bg-white p-8 rounded-[2rem] border border-brand-border hover:border-brand-copper/30 hover:shadow-lg hover:shadow-brand-copper/5 transition-all" href="#business">
<div className="w-12 h-12 bg-brand-cream rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl tracking-tight font-normal mb-3 group-hover:text-brand-copper transition-colors">Business Insurance</h3>
<p className="text-base text-brand-slate mb-8 font-light">From local contractors to professional offices, we structure commercial liability, property, and workers' comp to mitigate your operational risks.</p>
<span className="text-base font-normal text-brand-navy flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                            Learn more <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</a>
</div>
</div>
</section>

<section className="bg-brand-navy text-white py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 opacity-5" style={{backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px'}}></div>
<div className="z-10 grid lg:grid-cols-12 gap-16 max-w-7xl mr-auto ml-auto relative gap-x-16 gap-y-16 items-start">
<div className="lg:col-span-5 sticky top-32">
<h2 className="text-4xl tracking-tight font-normal mb-6">Navigating Oklahoma's insurance reality.</h2>
<p className="text-brand-border text-lg mb-8 font-light">Insurance is changing rapidly in our region. We stay ahead of carrier shifts so you aren't caught off guard when you need your policy most.</p>
<a className="inline-flex items-center gap-2 text-brand-copperlight hover:text-white transition-colors border-brand-copperlight/30 hover:border-white -translate-y-16 text-base font-normal border-b pt-9 pb-3" href="#review">
                        Schedule a policy review <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="lg:col-span-7 grid sm:grid-cols-2 gap-10">
<div className="">
<i className="w-8 h-8 text-brand-copperlight mb-5" data-lucide="cloud-rain" strokeWidth="1.5"></i>
<h4 className="text-xl font-normal tracking-tight mb-3">Hail &amp; Wind Shifts</h4>
<p className="text-base text-brand-border/80 font-light leading-relaxed">Many carriers are shifting roof coverage to Actual Cash Value (ACV). We help you understand what this means for your out-of-pocket costs.</p>
</div>
<div>
<i className="w-8 h-8 text-brand-copperlight mb-5" data-lucide="trending-up" strokeWidth="1.5"></i>
<h4 className="text-xl tracking-tight font-normal mb-3">Rising Rebuild Costs</h4>
<p className="text-base text-brand-border/80 font-light leading-relaxed">Material and labor costs in Tulsa have increased. We regularly review your limits to ensure you aren't underinsured if a total loss occurs.</p>
</div>
<div>
<i className="w-8 h-8 text-brand-copperlight mb-5" data-lucide="file-text" strokeWidth="1.5"></i>
<h4 className="text-xl tracking-tight font-normal mb-3">Deductible Strategies</h4>
<p className="text-base text-brand-border/80 font-light leading-relaxed">Percentage-based wind/hail deductibles are becoming standard. We explain the math so you can choose the right balance of premium savings and risk.</p>
</div>
<div>
<i className="w-8 h-8 text-brand-copperlight mb-5" data-lucide="building" strokeWidth="1.5"></i>
<h4 className="text-xl tracking-tight font-normal mb-3">Local Business Nuances</h4>
<p className="text-base text-brand-border/80 font-light leading-relaxed">Tulsa's commercial landscape requires specific liability and property solutions. We tailor policies to your exact industry requirements.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-4xl tracking-tight font-normal mb-5">Why work with All American?</h2>
<p className="text-brand-slate text-lg font-light">We do the legwork so you don't have to.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-14">
<div className="text-center sm:text-left">
<div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-navy mx-auto sm:mx-0 mb-6">
<span className="text-base font-normal">1</span>
</div>
<h4 className="text-xl tracking-tight font-normal mb-3">Local Office</h4>
<p className="text-base text-brand-slate font-light leading-relaxed">Not a call center. You can walk into our Tulsa office or call and speak directly to the agent who knows your file.</p>
</div>
<div className="text-center sm:text-left">
<div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-navy mx-auto sm:mx-0 mb-6">
<span className="text-base font-normal">2</span>
</div>
<h4 className="text-xl tracking-tight font-normal mb-3">Clear Advice</h4>
<p className="text-base text-brand-slate font-light leading-relaxed">Insurance jargon is confusing. We translate policy terms into plain English so you know exactly what you're buying.</p>
</div>
<div className="text-center sm:text-left">
<div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-navy mx-auto sm:mx-0 mb-6">
<span className="text-base font-normal">3</span>
</div>
<h4 className="text-xl tracking-tight font-normal mb-3">Carrier Choice</h4>
<p className="text-base text-brand-slate font-light leading-relaxed">As an independent agency, we aren't tied to one company. If your rates go up, we can shop your policy across multiple A-rated carriers.</p>
</div>
<div className="text-center sm:text-left">
<div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-navy mx-auto sm:mx-0 mb-6">
<span className="text-base font-normal">4</span>
</div>
<h4 className="text-xl tracking-tight font-normal mb-3">Real Claims Help</h4>
<p className="text-base text-brand-slate font-light leading-relaxed">When things go wrong, we're your first call. We advocate for you during the claims process to ensure a fair and prompt resolution.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-y border-brand-border/60">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
<div>
<h2 className="text-4xl tracking-tight font-normal mb-4">Trusted by our neighbors.</h2>
<p className="text-brand-slate text-lg font-light">Don't just take our word for it.</p>
</div>
<div className="flex items-center gap-1.5 bg-brand-offwhite px-4 py-2 rounded-full border border-brand-border/50">
<i className="w-4 h-4 text-brand-copper fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-copper fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-copper fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-copper fill-current" data-lucide="star"></i>
<i className="w-4 h-4 text-brand-copper fill-current" data-lucide="star"></i>
<span className="text-base font-normal ml-2">5.0 Google Reviews</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-brand-offwhite p-10 rounded-3xl border border-brand-border/30">
<p className="text-base text-brand-navy mb-8 font-light leading-relaxed">"After our rates jumped with a captive agent, All American shopped our home and auto. They found better coverage for less money and explained the roof deductible changes clearly. Highly recommend their team."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white border border-brand-border flex items-center justify-center text-sm font-normal text-brand-slate">MS</div>
<div>
<p className="text-base font-normal text-brand-navy">Mark S.</p>
<p className="text-sm text-brand-slate font-light">Tulsa Homeowner</p>
</div>
</div>
</div>
<div className="bg-brand-offwhite p-10 rounded-3xl border border-brand-border/30">
<p className="text-base text-brand-navy mb-8 font-light leading-relaxed">"We run a local contracting business and need certificates of insurance fast. The commercial team here is incredibly responsive and makes sure we have the exact liability limits required for our bids."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white border border-brand-border flex items-center justify-center text-sm font-normal text-brand-slate">DT</div>
<div>
<p className="text-base font-normal text-brand-navy">David T.</p>
<p className="text-sm text-brand-slate font-light">Local Contractor</p>
</div>
</div>
</div>
<div className="bg-brand-offwhite p-10 rounded-3xl border border-brand-border/30">
<p className="text-base text-brand-navy mb-8 font-light leading-relaxed">"Real people answer the phone. When someone rear-ended me on the BA Expressway, my agent walked me through exactly what to do and followed up the next day. You don't get that from a 1-800 number."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-white border border-brand-border flex items-center justify-center text-sm font-normal text-brand-slate">LR</div>
<div>
<p className="text-base font-normal text-brand-navy">Laura R.</p>
<p className="text-sm text-brand-slate font-light">Auto Client</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-5xl mx-auto bg-brand-cream rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden">

<div className="absolute -top-32 -right-32 w-80 h-80 border border-brand-copper/10 rounded-full"></div>
<div className="absolute -bottom-32 -left-32 w-64 h-64 border border-brand-copper/10 rounded-full"></div>
<div className="relative z-10">
<h2 className="text-4xl md:text-5xl tracking-tight font-normal mb-6">Ready to review your coverage?</h2>
<p className="text-brand-slate text-lg font-light max-w-xl mx-auto mb-12">Get an honest assessment of your current policies. No pressure, just clear guidance from a local agency that cares.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-brand-navy text-white px-8 py-4 rounded-full text-base font-normal hover:bg-slate-800 transition-colors shadow-lg shadow-brand-navy/10" href="#quote">
                            Request a Quote
                        </a>
<a className="w-full sm:w-auto bg-white border border-brand-border text-brand-navy px-8 py-4 rounded-full text-base font-normal hover:bg-gray-50 transition-colors flex items-center justify-center gap-2" href="tel:9185550199">
<i className="w-5 h-5" data-lucide="phone" strokeWidth="1.5"></i>
                            (918) 555-0199
                        </a>
</div>
<p className="text-sm text-brand-slate/80 mt-8 font-light">Office visits available by appointment in Tulsa.</p>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-brand-border pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-20">
<div className="col-span-2 lg:col-span-2">
<span className="text-2xl tracking-tight font-normal uppercase text-brand-navy mb-6 block">All American</span>
<p className="text-base text-brand-slate font-light mb-8 max-w-xs leading-relaxed">Independent insurance guidance for Tulsa families and businesses. Real people, multiple carriers, clear advice.</p>
<div className="text-base text-brand-slate font-light space-y-4">
<p className="flex items-start gap-3">
<i className="w-5 h-5 mt-0.5 text-brand-copper" data-lucide="map-pin" strokeWidth="1.5"></i>
                            1234 S Main St, Suite 200<br/>Tulsa, OK 74119
                        </p>
<p className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-copper" data-lucide="phone" strokeWidth="1.5"></i>
                            (918) 555-0199
                        </p>
<p className="flex items-center gap-3">
<i className="w-5 h-5 text-brand-copper" data-lucide="mail" strokeWidth="1.5"></i>
                            service@allamericanins.com
                        </p>
</div>
</div>
<div>
<h5 className="text-base font-normal text-brand-navy mb-5">Personal</h5>
<ul className="space-y-4 text-base text-brand-slate font-light">
<li><a className="hover:text-brand-copper transition-colors" href="#">Auto Insurance</a></li>
<li><a className="hover:text-brand-copper transition-colors" href="#">Home Insurance</a></li>
<li><a className="hover:text-brand-copper transition-colors" href="#">Renters &amp; Condo</a></li>
<li><a className="hover:text-brand-copper transition-colors" href="#">Umbrella Policies</a></li>
<li><a className="hover:text-brand-copper transition-colors" href="#">Motorcycle &amp; Boat</a></li>
</ul>
</div>
<div>
<h5 className="text-base font-normal text-brand-navy mb-5">Business</h5>
<ul className="space-y-4 text-base text-brand-slate font-light">
<li><a className="hover:text-brand-copper transition-colors" href="#">Commercial Auto</a></li>
<li><a className="hover:text-brand-copper transition-colors" href="#">General Liability</a></li>
<li><a className="hover:text-brand-copper transition-colors" href="#">Workers' Comp</a></li>
<li><a className="hover:text-brand-copper transition-colors" href="#">Contractors</a></li>
<li><a className="hover:text-brand-copper transition-colors" href="#">Property Insurance</a></li>
</ul>
</div>
<div>
<h5 className="text-base font-normal text-brand-navy mb-5">Service</h5>
<ul className="space-y-4 text-base text-brand-slate font-light">
<li><a className="hover:text-brand-copper transition-colors" href="#">Make a Payment</a></li>
<li><a className="hover:text-brand-copper transition-colors" href="#">Start a Claim</a></li>
<li><a className="hover:text-brand-copper transition-colors" href="#">Request ID Card</a></li>
<li><a className="hover:text-brand-copper transition-colors" href="#">Policy Change</a></li>
<li><a className="hover:text-brand-copper transition-colors" href="#">About Us</a></li>
</ul>
</div>
</div>
<div className="border-t border-brand-border/60 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-sm text-brand-slate font-light">© 2024 All American Insurance. All rights reserved.</p>
<div className="flex gap-6 text-sm text-brand-slate font-light">
<a className="hover:text-brand-navy transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-brand-navy transition-colors" href="#">Terms of Service</a>
<a className="hover:text-brand-navy transition-colors" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 md:hidden flex flex-col gap-2">
<a className="w-14 h-14 bg-brand-navy text-white rounded-full flex items-center justify-center shadow-xl hover:bg-slate-800 transition-colors" href="tel:9185550199">
<i className="w-6 h-6 fill-current" data-lucide="phone"></i>
</a>
</div>



    </>
  );
}
