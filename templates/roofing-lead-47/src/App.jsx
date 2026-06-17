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
      

<div className="bg-zinc-900 text-zinc-300 text-xs py-2 text-center font-medium tracking-wide">
<span className="text-white">Emergency Service Available 24/7.</span> Call us now for immediate leaks.
    </div>

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200/60">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-blue-600" data-height="20" data-icon="lucide:hammer" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-zinc-900 font-semibold tracking-tighter text-lg uppercase">JASON'S ROOFING</span>
</div>
<div className="flex items-center gap-6">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#quote">
<span className="iconify" data-height="16" data-icon="lucide:phone" data-strokeWidth="1.5" data-width="16"></span>
                    (555) 123-4567
                </a>
<a className="bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium py-2 px-4 rounded-full transition-all shadow-sm hover:shadow-md" href="#quote">
                    Get Free Quote
                </a>
</div>
</div>
</nav>

<section className="relative pt-20 pb-24 md:pt-32 md:pb-32 overflow-hidden bg-grid">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8">
<span className="iconify" data-height="14" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="14"></span>
                Licensed &amp; Insured in Your Area
            </div>
<h1 className="text-4xl md:text-6xl font-medium tracking-tight text-zinc-900 mb-6 leading-[1.1]">
                Stop leaks before they<br className="hidden md:block"/> destroy your home.
            </h1>
<p className="text-lg md:text-xl text-zinc-500 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                Don't wait for water damage to spread. Get a comprehensive roof inspection and a transparent quote today. No hidden fees.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
<a className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-3.5 px-8 rounded-lg shadow-lg shadow-blue-600/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2" href="#quote">
                    Claim Free Inspection
                    <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="16"></span>
</a>
<div className="flex items-center gap-2 text-xs text-zinc-400 font-medium">
<span className="iconify text-yellow-500" data-height="14" data-icon="lucide:star" data-strokeWidth="1.5" data-width="14"></span>
                    4.9/5 from 500+ homeowners
                </div>
</div>
</div>

<div className="mt-16 max-w-5xl mx-auto px-6">
<div className="relative aspect-video rounded-xl bg-zinc-900 shadow-2xl overflow-hidden group cursor-pointer border border-zinc-200/50">

<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10"></div>
<img alt="Roofing work" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-20 flex items-center justify-center">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors border border-white/20">
<span className="iconify text-white ml-1" data-height="32" data-icon="lucide:play" data-strokeWidth="1.5" data-width="32"></span>
</div>
</div>
<div className="absolute bottom-6 left-6 z-20 text-white">
<p className="text-sm font-medium tracking-wide">WATCH OUR PROCESS</p>
<p className="text-xs text-zinc-300 mt-1">See how we protect your investment in under 2 minutes.</p>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-200 bg-white py-10">
<div className="max-w-6xl mx-auto px-6">
<p className="text-center text-xs font-medium text-zinc-400 mb-8 tracking-widest uppercase">Trusted by homeowners in your neighborhood</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale">

<div className="flex items-center justify-center gap-2">
<span className="iconify" data-height="24" data-icon="lucide:home" data-width="24"></span>
<span className="font-bold text-lg tracking-tighter text-zinc-800">HomeAdvisor</span>
</div>
<div className="flex items-center justify-center gap-2">
<span className="iconify" data-height="24" data-icon="lucide:award" data-width="24"></span>
<span className="font-bold text-lg tracking-tighter text-zinc-800">Angi</span>
</div>
<div className="flex items-center justify-center gap-2">
<span className="iconify" data-height="24" data-icon="lucide:shield" data-width="24"></span>
<span className="font-bold text-lg tracking-tighter text-zinc-800">BBB</span>
</div>
<div className="flex items-center justify-center gap-2">
<span className="iconify" data-height="24" data-icon="lucide:check-circle" data-width="24"></span>
<span className="font-bold text-lg tracking-tighter text-zinc-800">Google</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-6">Your roof is the only thing standing between your family and the elements.</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-none w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border border-red-100">
<span className="iconify text-red-500" data-height="20" data-icon="lucide:cloud-rain" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900">Hidden Leaks</h3>
<p className="text-sm text-zinc-500 mt-1 leading-relaxed">Water travels. A small spot on your ceiling often means major rot in the rafters that you can't see.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center border border-orange-100">
<span className="iconify text-orange-500" data-height="20" data-icon="lucide:wind" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900">Storm Damage</h3>
<p className="text-sm text-zinc-500 mt-1 leading-relaxed">Missing shingles reduce your home's insulation and curb appeal, lowering your property value immediately.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-none w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
<span className="iconify text-blue-500" data-height="20" data-icon="lucide:check-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<div>
<h3 className="text-base font-medium text-zinc-900">The Solution</h3>
<p className="text-sm text-zinc-500 mt-1 leading-relaxed">We provide a digital analysis of your roof, showing you exactly what needs fixing—no sales fluff, just facts.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-zinc-50 rounded-2xl transform rotate-2"></div>
<div className="relative bg-white rounded-xl shadow-lg border border-zinc-100 p-8">
<div className="flex items-center gap-4 mb-6 pb-6 border-b border-zinc-100">
<div className="w-12 h-12 bg-zinc-100 rounded-full flex items-center justify-center">
<span className="iconify text-zinc-500" data-height="24" data-icon="lucide:user" data-width="24"></span>
</div>
<div>
<p className="text-sm font-medium text-zinc-900">Recent Customer</p>
<div className="flex text-yellow-400">
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
<span className="iconify" data-icon="lucide:star" data-width="14"></span>
</div>
</div>
</div>
<p className="text-zinc-600 italic leading-relaxed text-sm">
                        "I thought I just needed a patch. Jason's team showed me photos of the rot starting underneath. They saved me thousands by catching it early. The cleanup was spotless."
                    </p>
<p className="mt-4 text-xs font-medium text-zinc-400">— Sarah M., Local Homeowner</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white relative overflow-hidden" id="quote">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
<div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px]"></div>
</div>
<div className="max-w-xl mx-auto px-6 relative z-10">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Get Your Free Roof Analysis</h2>
<p className="text-zinc-400 text-sm md:text-base font-light">
                    Fill out the form below. We'll contact you within 15 minutes to schedule your no-obligation inspection.
                </p>
</div>

<div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl text-zinc-900">
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">First Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-zinc-400" placeholder="John" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Last Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-zinc-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Property Address</label>
<div className="relative">
<span className="absolute left-3 top-3.5 text-zinc-400">
<span className="iconify" data-icon="lucide:map-pin" data-width="16"></span>
</span>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-zinc-400" placeholder="123 Main St, Your City" type="text"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Phone Number</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-zinc-400" placeholder="(555) 000-0000" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-600 ml-1">Email Address</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-zinc-400" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-3 pt-2">
<label className="text-xs font-medium text-zinc-600 ml-1">What kind of roof do you have?</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input checked="" className="peer sr-only" name="roof_type" type="radio"/>
<div className="border border-zinc-200 rounded-lg p-3 text-center hover:bg-zinc-50 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 transition-all">
<span className="text-sm font-medium">Shingle</span>
</div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="roof_type" type="radio"/>
<div className="border border-zinc-200 rounded-lg p-3 text-center hover:bg-zinc-50 peer-checked:border-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 transition-all">
<span className="text-sm font-medium">Metal/Tile</span>
</div>
</label>
</div>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-lg shadow-lg shadow-blue-600/20 transition-all transform hover:scale-[1.01] flex items-center justify-center gap-2 mt-2" type="submit">
                        Schedule My Free Inspection
                        <span className="iconify" data-height="16" data-icon="lucide:calendar-check" data-strokeWidth="1.5" data-width="16"></span>
</button>
<p className="text-center text-[10px] text-zinc-400 mt-4">
                        By clicking above, you agree to receive a call or text for scheduling. We respect your privacy.
                    </p>
</form>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h3 className="text-2xl font-medium tracking-tight text-zinc-900">Why Jason's Roofing?</h3>
</div>
<div className="grid md:grid-cols-3 gap-10">

<div className="group">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-lg flex items-center justify-center shadow-sm mb-6 group-hover:border-blue-500/50 group-hover:shadow-blue-500/10 transition-all">
<span className="iconify text-zinc-700 group-hover:text-blue-600 transition-colors" data-height="24" data-icon="lucide:clock" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Done in 1 Day</h4>
<p className="text-sm text-zinc-500 leading-relaxed">Most residential replacements are completed in a single day, minimizing disruption to your life.</p>
</div>

<div className="group">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-lg flex items-center justify-center shadow-sm mb-6 group-hover:border-blue-500/50 group-hover:shadow-blue-500/10 transition-all">
<span className="iconify text-zinc-700 group-hover:text-blue-600 transition-colors" data-height="24" data-icon="lucide:file-check" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">50-Year Warranty</h4>
<p className="text-sm text-zinc-500 leading-relaxed">We are certified installers for top manufacturers, allowing us to offer extended transferable warranties.</p>
</div>

<div className="group">
<div className="w-12 h-12 bg-white border border-zinc-200 rounded-lg flex items-center justify-center shadow-sm mb-6 group-hover:border-blue-500/50 group-hover:shadow-blue-500/10 transition-all">
<span className="iconify text-zinc-700 group-hover:text-blue-600 transition-colors" data-height="24" data-icon="lucide:piggy-bank" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h4 className="text-lg font-medium text-zinc-900 mb-2">Financing Available</h4>
<p className="text-sm text-zinc-500 leading-relaxed">0% interest financing options available for qualified homeowners. Get your roof now, pay over time.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-200">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium tracking-tight text-zinc-900 mb-10 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-zinc-50 rounded-lg border border-zinc-200 open:bg-white open:shadow-sm open:border-zinc-300 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-zinc-800">
<span>How do I know if I need a repair or replacement?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-zinc-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        Our free inspection will determine this. If shingles are brittle, curling, or granular loss is significant, replacement is usually more cost-effective. If damage is localized, a repair works.
                    </div>
</details>
<details className="group bg-zinc-50 rounded-lg border border-zinc-200 open:bg-white open:shadow-sm open:border-zinc-300 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-zinc-800">
<span>Do you handle insurance claims?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-zinc-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        Yes. We have a dedicated team that speaks with adjusters directly to ensure you get every penny you are owed for storm damage.
                    </div>
</details>
<details className="group bg-zinc-50 rounded-lg border border-zinc-200 open:bg-white open:shadow-sm open:border-zinc-300 transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-5 text-sm text-zinc-800">
<span>How long is the quote valid?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<div className="text-zinc-500 text-sm mt-0 px-5 pb-5 leading-relaxed">
                        Our quotes are locked in for 30 days. Material prices fluctuate, so we encourage locking in your rate as soon as possible.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-zinc-900 text-zinc-400 py-12 border-t border-zinc-800">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-500" data-height="20" data-icon="lucide:hammer" data-width="20"></span>
<span className="text-zinc-100 font-semibold tracking-tighter text-sm uppercase">JASON'S ROOFING</span>
</div>
<div className="flex gap-6 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="text-xs text-zinc-500">
                © 2024 Jason's Roofing Co. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
