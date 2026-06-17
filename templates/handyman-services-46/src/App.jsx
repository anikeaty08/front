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
      

<nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<a className="text-zinc-50 font-medium tracking-tight text-lg flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded-md bg-orange-500 flex items-center justify-center text-zinc-950 font-medium text-sm">
                        BHP
                    </div>
<span className="hidden sm:block">Better Home Pros</span>
</a>
</div>
<div className="flex items-center gap-4 sm:gap-6">
<a className="hidden sm:flex items-center gap-2 text-sm hover:text-zinc-200 transition-colors" href="tel:+12092169200">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                    (209) 216-9200
                </a>
<a className="bg-orange-500 hover:bg-orange-400 text-zinc-950 text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-2" href="#contact">
                    Get a Free Quote
                </a>
</div>
</div>
</nav>
<main>

<section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(249,115,22,0.1),transparent_50%)]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm mb-8">
<div className="flex items-center text-orange-500 text-sm">
<iconify-icon icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2"></iconify-icon>
<iconify-icon icon="solar:star-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-xs text-zinc-300">5 Star Rated on Google (17 Reviews)</span>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-zinc-50 max-w-4xl mx-auto leading-tight mb-6">
                    Modesto's Most Trusted Handyman
                </h1>
<p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Quality repairs, flexible hours, and fair prices from a local tradesman you can trust. Serving Modesto, CA and surrounding areas with pride.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-orange-500 hover:bg-orange-400 text-zinc-950 text-base font-medium px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2" href="#contact">
                        Get a Free Quote
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-lg border border-zinc-800 hover:bg-zinc-900 text-zinc-300 text-base transition-colors flex items-center justify-center gap-2" href="tel:+12092169200">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                        (209) 216-9200
                    </a>
</div>
</div>
</section>

<section className="py-20 border-t border-zinc-900 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-50 mb-4">Professional Services</h2>
<p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">From minor fixes to major updates, Juan handles it all with precision and care.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-50 tracking-tight mb-2">General Handyman</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Furniture assembly, drywall repair, door installations, and all around house maintenance.</p>
</div>

<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:palette-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-50 tracking-tight mb-2">Painting</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Interior and exterior touch-ups, trim painting, and full room color transformations.</p>
</div>

<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:lightbulb-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-50 tracking-tight mb-2">Lighting</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Fixture replacements, ceiling fan installations, and outdoor security lighting setup.</p>
</div>

<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group lg:col-span-1 md:col-span-2">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-50 tracking-tight mb-2">Kitchen Repairs</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Cabinet hardware updates, minor plumbing fixes, sink replacements, and backsplash repairs.</p>
</div>

<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/50 transition-colors group lg:col-span-2 md:col-span-2">
<div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon className="text-2xl" icon="solar:drop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-50 tracking-tight mb-2">Bathroom Repairs</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Caulking, grouting, vanity installations, towel rack mounting, and shower head replacements to keep your bathroom functioning perfectly.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-zinc-900">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row items-start gap-16">
<div className="lg:w-1/3">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-50 mb-4">Why Choose Juan?</h2>
<p className="text-zinc-400 text-sm sm:text-base mb-8">When you hire Better Home Pros LLC, you're not getting a faceless corporate franchise. You're getting Juan—a dedicated, local professional who takes pride in every job.</p>
<a className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 text-sm font-medium transition-colors" href="#contact">
                            Get a Free Quote
                            <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-100 mb-1">24/7 Availability</h4>
<p className="text-sm text-zinc-400">Emergencies don't wait for business hours. I'm available around the clock to help when you need it most.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-100 mb-1">5-Star Rated</h4>
<p className="text-sm text-zinc-400">Consistently highly rated on Google by Modesto homeowners for reliability and quality workmanship.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-100 mb-1">Flexible Hours</h4>
<p className="text-sm text-zinc-400">I work around your busy schedule to minimize disruption to your home life.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 shrink-0">
<iconify-icon icon="solar:wad-of-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-100 mb-1">Fair Prices</h4>
<p className="text-sm text-zinc-400">Honest, transparent pricing for every job. No hidden fees, just hard work for a reasonable rate.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-zinc-900 bg-zinc-950/50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-zinc-50 mb-4">Trusted by Modesto Homeowners</h2>
<p className="text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">Read what our customers have to say about our services on Google.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-orange-500 mb-4">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"Juan does quality work and for reasonable prices, dependable, fast work with very flexible hours"</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">G</div>
<span className="text-xs font-medium text-zinc-500">Google Reviewer</span>
</div>
</div>

<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-orange-500 mb-4">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"Adjusted around our busy schedule and did quality outstanding work"</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">G</div>
<span className="text-xs font-medium text-zinc-500">Google Reviewer</span>
</div>
</div>

<div className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-orange-500 mb-4">
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
<iconify-icon icon="solar:star-bold" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm text-zinc-300 leading-relaxed mb-6">"Great service, focus is on customer satisfaction, would use again"</p>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs text-zinc-400">G</div>
<span className="text-xs font-medium text-zinc-500">Google Reviewer</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-zinc-900 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.05),transparent_40%)]"></div>
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-50 mb-4">Get a Free Quote</h2>
<p className="text-zinc-400 text-sm sm:text-base">Fill out the form below and Juan will get back to you as soon as possible.</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1" htmlFor="name">Full Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1" htmlFor="phone">Phone Number</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" id="phone" placeholder="(209) 555-0123" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1" htmlFor="service">Service Needed</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all cursor-pointer" id="service">
<option className="text-zinc-600" disabled="" selected="" value="">Select a service...</option>
<option value="general">General Handyman Work</option>
<option value="painting">Painting</option>
<option value="lighting">Lighting &amp; Electrical</option>
<option value="kitchen">Kitchen Repairs</option>
<option value="bathroom">Bathroom Repairs</option>
<option value="other">Other</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-zinc-500">
<iconify-icon icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1" htmlFor="message">Message Details</label>
<textarea className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all resize-none" id="message" placeholder="Briefly describe what you need help with..." rows="4"></textarea>
</div>
<button className="w-full bg-orange-500 hover:bg-orange-400 text-zinc-950 text-base font-medium px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 mt-2" type="button">
                        Send Request
                        <iconify-icon icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
<p className="text-center text-xs text-zinc-500 mt-4">Or call directly at <a className="text-zinc-300 hover:text-orange-500 transition-colors" href="tel:+12092169200">(209) 216-9200</a></p>
</form>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 py-12 bg-zinc-950 text-center sm:text-left">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex flex-col items-center sm:items-start gap-2">
<div className="text-zinc-50 font-medium tracking-tight text-base flex items-center gap-2">
<div className="w-6 h-6 rounded bg-orange-500 flex items-center justify-center text-zinc-950 font-medium text-xs">
                        BHP
                    </div>
                    Better Home Pros LLC
                </div>
<p className="text-xs text-zinc-500">Owned and operated by Juan.</p>
<p className="text-xs text-zinc-500 mt-2">Serving Modesto, CA and surrounding areas.</p>
</div>
<div className="flex flex-col items-center sm:items-end gap-3 text-sm">
<a className="flex items-center gap-2 text-zinc-400 hover:text-orange-500 transition-colors" href="tel:+12092169200">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
                    +1 209-216-9200
                </a>
<div className="flex items-center gap-2 text-zinc-400">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                    127 E Fairmont Ave, Modesto, CA
                </div>
<div className="flex items-center gap-2 text-zinc-400 mt-1">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs">Open 24 Hours</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
