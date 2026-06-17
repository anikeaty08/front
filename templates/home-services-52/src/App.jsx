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
      

<header className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200/80">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl tracking-tighter font-semibold text-zinc-900" href="#">
                    PLMB.
                </a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#process">How it works</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#testimonials">Reviews</a>
<a className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#pricing">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors" href="tel:0800123456">
<iconify-icon height="18" icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    0800 123 456
                </a>
<a className="inline-flex items-center justify-center h-9 px-4 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors focus:ring-2 focus:ring-zinc-900/20 focus:outline-none" href="#book">
                    Book Online
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative pt-24 pb-20 md:pt-32 md:pb-28 px-6 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative max-w-5xl mx-auto text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100/50 mb-8">
<span className="flex h-2 w-2 rounded-full bg-blue-500 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
</span>
<span className="text-xs font-medium text-blue-700">24/7 Emergency cover across London &amp; Home Counties</span>
</div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight font-semibold text-zinc-900 leading-[1.1] mb-6">
                    Modern plumbing for the <br className="hidden sm:block"/>
<span className="text-zinc-400">British home.</span>
</h1>
<p className="text-base md:text-lg text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                    Gas Safe registered engineers providing fast, reliable, and transparent plumbing and heating services. No hidden call-out fees, just honest workmanship.
                </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm focus:ring-2 focus:ring-blue-600/20 focus:outline-none" href="tel:0800123456">
<iconify-icon height="18" icon="solar:danger-triangle-linear" width="18"></iconify-icon>
                        Emergency Call Out
                    </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-full bg-white text-zinc-900 text-sm font-medium border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-colors shadow-sm focus:ring-2 focus:ring-zinc-200 focus:outline-none" href="#book">
<iconify-icon height="18" icon="solar:calendar-add-linear" width="18"></iconify-icon>
                        Get a Free Quote
                    </a>
</div>

<div className="mt-8 flex flex-col items-center gap-2">
<div className="flex items-center gap-1 text-[#00B67A]">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-xs font-medium text-zinc-500">Rated <span className="text-zinc-900 font-semibold">Excellent 4.9/5</span> on Trustpilot</p>
</div>

<div className="mt-14 w-full rounded-3xl overflow-hidden border border-zinc-200/80 shadow-[0_20px_40px_rgb(0,0,0,0.04)] relative h-64 sm:h-80 md:h-[400px]">
<img alt="Modern clean bathroom tap" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent pointer-events-none"></div>
</div>

<div className="mt-14 pt-8 border-t border-zinc-200/60 w-full max-w-2xl flex flex-col items-center">
<p className="text-xs font-medium text-zinc-400 mb-4 uppercase tracking-widest">Certified &amp; Approved By</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
<span className="text-lg tracking-tighter font-semibold text-zinc-800">GAS SAFE.</span>
<span className="text-lg tracking-tighter font-semibold text-zinc-800">WRAS.</span>
<span className="text-lg tracking-tighter font-semibold text-zinc-800">TRUSTMARK.</span>
<span className="text-lg tracking-tighter font-semibold text-zinc-800">CITY&amp;GUILDS.</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-200/60" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-zinc-900 mb-3">Comprehensive Services</h2>
<p className="text-sm text-zinc-500 max-w-md">From a dripping tap to a full heating system installation, our certified experts handle it all with precision.</p>
</div>
<a className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors group" href="#book">
                        View all services 
                        <iconify-icon className="group-hover:translate-x-0.5 transition-transform" height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200/60 hover:border-zinc-300 hover:bg-white transition-all duration-200">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200/60 flex items-center justify-center text-zinc-700 mb-5 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<iconify-icon height="20" icon="solar:waterdrops-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base tracking-tight font-semibold text-zinc-900 mb-2">Leaks &amp; Pipes</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Rapid response for burst pipes, hidden leaks, and general pipework repairs across your property.</p>
</div>

<div className="group p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200/60 hover:border-zinc-300 hover:bg-white transition-all duration-200">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200/60 flex items-center justify-center text-zinc-700 mb-5 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<iconify-icon height="20" icon="solar:fire-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base tracking-tight font-semibold text-zinc-900 mb-2">Boiler &amp; Heating</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Gas Safe certified installations, servicing, and emergency repairs for all major boiler brands.</p>
</div>

<div className="group p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200/60 hover:border-zinc-300 hover:bg-white transition-all duration-200">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200/60 flex items-center justify-center text-zinc-700 mb-5 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<iconify-icon height="20" icon="solar:bath-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base tracking-tight font-semibold text-zinc-900 mb-2">Bathrooms</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Full bathroom installations, shower repairs, tap replacements, and blockages cleared efficiently.</p>
</div>

<div className="group p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200/60 hover:border-zinc-300 hover:bg-white transition-all duration-200">
<div className="w-10 h-10 rounded-lg bg-white border border-zinc-200/60 flex items-center justify-center text-zinc-700 mb-5 group-hover:text-blue-600 group-hover:border-blue-100 group-hover:bg-blue-50 transition-colors">
<iconify-icon height="20" icon="solar:settings-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base tracking-tight font-semibold text-zinc-900 mb-2">Maintenance</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Routine checks, landlord gas safety certificates (CP12), and general plumbing health diagnostics.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="process">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold text-zinc-900 mb-6 leading-tight">
                            Plumbing without the headaches.
                        </h2>
<p className="text-base text-zinc-500 mb-8 leading-relaxed">
                            We've modernized the service experience. No waiting around all day, no surprise bills, and no mess left behind. Just professional service from booking to completion.
                        </p>
<div className="space-y-6 mb-10">
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
<iconify-icon height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm tracking-tight font-semibold text-zinc-900 mb-1">Transparent Pricing</h4>
<p className="text-sm text-zinc-500">Fixed quotes provided upfront. We never charge hidden fees or surprise travel costs.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
<iconify-icon height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm tracking-tight font-semibold text-zinc-900 mb-1">12-Month Guarantee</h4>
<p className="text-sm text-zinc-500">All our parts and labor come with a standard 12-month guarantee for your peace of mind.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
<iconify-icon height="16" icon="solar:check-circle-linear" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-sm tracking-tight font-semibold text-zinc-900 mb-1">Live Tracking</h4>
<p className="text-sm text-zinc-500">Receive an SMS with a tracking link when your engineer is on the way, so you're not left waiting.</p>
</div>
</div>
</div>

<div className="rounded-2xl overflow-hidden border border-zinc-200/60 h-48 relative max-w-md">
<img alt="Plumbing tools and equipment" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-zinc-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative" id="book">
<div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full pointer-events-none"></div>
<h3 className="text-xl tracking-tight font-semibold text-zinc-900 mb-6">Request a Callback</h3>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600">First Name</label>
<input className="w-full h-10 px-3 rounded-lg bg-[#FAFAFA] border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600">Last Name</label>
<input className="w-full h-10 px-3 rounded-lg bg-[#FAFAFA] border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600">Phone Number</label>
<input className="w-full h-10 px-3 rounded-lg bg-[#FAFAFA] border border-zinc-200 text-sm text-zinc-900 placeholder-zinc-400 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all" placeholder="07123 456789" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600">Service Required</label>
<div className="relative">
<select className="w-full h-10 pl-3 pr-10 appearance-none rounded-lg bg-[#FAFAFA] border border-zinc-200 text-sm text-zinc-900 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all cursor-pointer">
<option disabled="" selected="" value="">Select an issue...</option>
<option value="emergency">Emergency / Leak</option>
<option value="boiler">Boiler Repair / Service</option>
<option value="bathroom">Bathroom Plumbing</option>
<option value="other">Other / Quote</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>

<div className="pt-2 pb-4 flex items-center justify-between">
<span className="text-sm text-zinc-600">Is this an emergency?</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-zinc-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600 transition-colors"></div>
</label>
</div>
<button className="w-full h-10 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors focus:ring-2 focus:ring-zinc-900/20 focus:outline-none flex items-center justify-center gap-2" type="button">
                                Request Callback
                                <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-xs text-zinc-400 text-center mt-3">We usually respond within 15 minutes.</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200/60" id="testimonials">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-2xl md:text-3xl tracking-tight font-semibold text-zinc-900 mb-3">Loved by homeowners.</h2>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1 bg-[#00B67A] text-white px-2 py-0.5 rounded-sm text-xs font-semibold tracking-tight">
<iconify-icon height="12" icon="solar:star-bold" width="12"></iconify-icon>
                                Trustpilot
                            </span>
<p className="text-sm text-zinc-500">Consistently rated 5 stars for reliability and quality.</p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200/60 flex flex-col h-full">
<div className="flex items-center gap-1 text-[#00B67A] mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-8 flex-grow">"Absolutely brilliant service. The engineer arrived within 45 minutes of my call and fixed the leaking kitchen pipe quickly. Pricing was clear upfront with no hidden fees."</p>
<div className="flex items-center gap-3">
<img alt="Sarah J." className="w-10 h-10 rounded-full object-cover border border-zinc-200" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-sm font-semibold tracking-tight text-zinc-900">Sarah Jenkins</h4>
<p className="text-xs text-zinc-500">London, UK</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200/60 flex flex-col h-full">
<div className="flex items-center gap-1 text-[#00B67A] mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-8 flex-grow">"Had my boiler replaced last week. The team was highly professional, kept the area completely clean, and explained how the new thermostat worked. Highly recommended."</p>
<div className="flex items-center gap-3">
<img alt="Mark T." className="w-10 h-10 rounded-full object-cover border border-zinc-200" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-sm font-semibold tracking-tight text-zinc-900">Mark Thompson</h4>
<p className="text-xs text-zinc-500">Surrey, UK</p>
</div>
</div>
</div>

<div className="p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200/60 flex flex-col h-full">
<div className="flex items-center gap-1 text-[#00B67A] mb-4">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-8 flex-grow">"The tracking text message was a game changer! I didn't have to wait around all day. Very professional service and sorted my bathroom radiator in no time at all."</p>
<div className="flex items-center gap-3">
<img alt="Emily R." className="w-10 h-10 rounded-full object-cover border border-zinc-200" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<h4 className="text-sm font-semibold tracking-tight text-zinc-900">Emily Richards</h4>
<p className="text-xs text-zinc-500">Kent, UK</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white border-t border-zinc-800">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl tracking-tight font-semibold mb-6">Need a plumber right now?</h2>
<p className="text-zinc-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">Our local engineers are on standby across the UK. Fast response times, upfront pricing, and guaranteed fixes.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-100 transition-colors" href="tel:0800123456">
<iconify-icon height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        Call 0800 123 456
                    </a>
</div>
</div>
</section>
</main>

<footer className="bg-zinc-950 pt-16 pb-8 border-t border-zinc-900">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-xl tracking-tighter font-semibold text-white mb-4 block" href="#">PLMB.</a>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xs">Premium plumbing and heating services for modern UK homes. Licensed, insured, and highly rated.</p>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-100 mb-4">Services</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Emergency Plumbing</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Boiler Repairs</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Bathroom Fitting</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Gas Safety Checks</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-100 mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Areas Covered</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-zinc-100 mb-4">Legal</h4>
<ul className="space-y-3">
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-sm text-zinc-500 hover:text-white transition-colors" href="#">Complaints Policy</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">© 2024 PLMB Services Ltd. All rights reserved.</p>
<div className="flex items-center gap-4 text-xs text-zinc-600">
<span>Gas Safe Reg: 123456</span>
<span className="w-1 h-1 rounded-full bg-zinc-800"></span>
<span>VAT: GB 123 4567 89</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
