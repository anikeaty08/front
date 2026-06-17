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
      

<header>
<div className="nav-inner">
<a className="logo" href="#">
<div className="logo-mark">
<iconify-icon height="18" icon="lucide:fence" strokeWidth="2" width="18"></iconify-icon>
</div>
        WINSLOW BROS.
      </a>
<nav className="hidden md:flex">
<ul>
<li><a href="#services">Services</a></li>
<li><a href="#about">About</a></li>
<li><a href="#projects">Gallery</a></li>
</ul>
</nav>
<div className="flex items-center gap-3">
<a className="hidden lg:flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-slate-500 hover:text-emerald-800 transition-colors" href="tel:5551234567">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="14"></iconify-icon>
          (360) 555-0123
        </a>
<button className="btn">
<span>Get Quote</span>
<iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
</div>
</header>

<main>
<section className="hero grid md:grid-cols-2 gap-12 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
          Serving Whatcom County
        </div>
<h1 className="tracking-tight">
          Handcrafted fencing for the <span className="text-[var(--primary)]">Pacific Northwest</span>.
        </h1>
<p className="text-lg text-slate-500 mb-8 max-w-md leading-relaxed">
          From classic cedar to durable vinyl and chain link. We build fences that stand up to our weather and stand out in your neighborhood.
        </p>
<div className="flex flex-wrap gap-4 mb-10">
<button className="btn h-12 px-6 text-sm">
            Request Estimate
          </button>
<button className="h-12 px-6 rounded-full border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2">
            View Gallery
            <iconify-icon icon="lucide:image" strokeWidth="1.5" width="16"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-6 text-xs font-medium text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>Licensed &amp; Bonded</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="lucide:check-circle-2" width="16"></iconify-icon>
<span>5-Year Warranty</span>
</div>
</div>
</div>
<div className="relative">

<div className="absolute -top-12 -right-12 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
<div className="absolute -bottom-12 -left-12 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl"></div>
<div className="relative grid gap-4">

<div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 relative z-10">
<div className="flex justify-between items-start mb-6">
<div>
<div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Instant Quote</div>
<h3 className="font-semibold text-slate-800">Residential Fencing</h3>
</div>
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700">
<iconify-icon icon="lucide:home" width="20"></iconify-icon>
</div>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Fence Type</label>
<div className="grid grid-cols-3 gap-2">
<div className="border border-emerald-600 bg-emerald-50 text-emerald-800 rounded-lg py-2 text-center text-xs font-medium cursor-pointer">Cedar</div>
<div className="border border-slate-200 text-slate-500 hover:border-slate-300 rounded-lg py-2 text-center text-xs font-medium cursor-pointer">Vinyl</div>
<div className="border border-slate-200 text-slate-500 hover:border-slate-300 rounded-lg py-2 text-center text-xs font-medium cursor-pointer">Link</div>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Length (ft)</label>
<input className="custom-input py-2" type="number" value="150"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">Gates</label>
<input className="custom-input py-2" type="number" value="2"/>
</div>
</div>
<div className="pt-2">
<div className="flex items-center mb-3">
<input checked="" className="custom-checkbox" type="checkbox"/>
<span className="text-xs text-slate-600">Include tear-out &amp; disposal</span>
</div>
<button className="w-full py-2.5 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
                  Calculate Estimate
                </button>
</div>
</div>
</div>

<div className="absolute -right-4 top-12 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 z-20 animate-[bounce_3s_infinite]">
<div className="bg-yellow-100 text-yellow-700 p-1.5 rounded-lg">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<div>
<div className="text-[0.7rem] font-bold text-slate-800">Top Rated</div>
<div className="text-[0.65rem] text-slate-500">Whatcom County</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1100px] mx-auto px-6 py-20" id="services">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Our Expertise</h2>
<p className="text-slate-500 max-w-md text-sm leading-relaxed">
            We source premium lumber and materials to ensure your fence survives the wet Pacific Northwest winters.
          </p>
</div>
<a className="text-sm font-semibold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group" href="#">
          View all services 
          <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="card group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:trees" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Custom Cedar</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">
            Standard, Good Neighbor, and Picture Frame styles using premium Western Red Cedar.
          </p>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div> Post on pipe options
            </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-emerald-500"></div> Horizontal &amp; modern styles
            </li>
</ul>
</div>

<div className="card group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Vinyl Fencing</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">
            Low maintenance privacy and picket solutions that never need painting or staining.
          </p>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-blue-400"></div> Lifetime warranty material
            </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-blue-400"></div> White, Tan, and Grey
            </li>
</ul>
</div>

<div className="card group cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="lucide:link" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-800 mb-2">Chain Link</h3>
<p className="text-sm text-slate-500 mb-4 leading-relaxed">
            Secure, affordable, and durable options for residential pets or commercial security.
          </p>
<ul className="text-xs text-slate-500 space-y-2">
<li className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-orange-400"></div> Black vinyl coated
            </li>
<li className="flex items-center gap-2">
<div className="w-1 h-1 rounded-full bg-orange-400"></div> Privacy slats available
            </li>
</ul>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-24 rounded-[2.5rem] mx-4 md:mx-auto max-w-[1100px] mb-20 relative overflow-hidden">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#64748b 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300 mb-6 tracking-wide">
            FAMILY OWNED &amp; OPERATED
          </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Built to last generations. Just like our reputation.</h2>
<p className="text-slate-400 leading-relaxed mb-8 max-w-md">
            We don't cut corners. We dig deeper post holes, use thicker gauge steel, and select better grade lumber. We live here, and we build fences for our neighbors.
          </p>
<div className="grid grid-cols-2 gap-8 border-t border-slate-800 pt-8">
<div>
<div className="text-3xl font-bold text-emerald-400 mb-1">15+</div>
<div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Years Experience</div>
</div>
<div>
<div className="text-3xl font-bold text-emerald-400 mb-1">500+</div>
<div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">Fences Built</div>
</div>
</div>
</div>
<div className="space-y-4">
<div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 flex items-start gap-4 hover:bg-slate-800 transition-colors">
<div className="bg-emerald-500/10 p-2 rounded-lg text-emerald-400">
<iconify-icon icon="lucide:ruler" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-sm mb-1">Precision Installation</h4>
<p className="text-xs text-slate-400 leading-relaxed">Lasers and string lines ensure every post is perfectly aligned and plumb.</p>
</div>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 flex items-start gap-4 hover:bg-slate-800 transition-colors">
<div className="bg-blue-500/10 p-2 rounded-lg text-blue-400">
<iconify-icon icon="lucide:calendar-clock" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-sm mb-1">On-Time Completion</h4>
<p className="text-xs text-slate-400 leading-relaxed">We schedule realistically and stick to it. No wondering when we'll show up.</p>
</div>
</div>
<div className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700 flex items-start gap-4 hover:bg-slate-800 transition-colors">
<div className="bg-purple-500/10 p-2 rounded-lg text-purple-400">
<iconify-icon icon="lucide:file-check" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-sm mb-1">Permit Handling</h4>
<p className="text-xs text-slate-400 leading-relaxed">We navigate Bellingham and Whatcom County codes so you don't have to.</p>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-[1100px] mx-auto px-6 mb-24">
<div className="text-center mb-12">
<h2 className="text-2xl font-semibold text-slate-900 mb-2">Locals love our work</h2>
<div className="flex items-center justify-center gap-1 text-orange-400 mb-2">
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="18"></iconify-icon>
</div>
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Based on 48 Google Reviews</p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="card bg-slate-50 border-transparent">
<p className="text-sm text-slate-600 mb-6 leading-relaxed italic">
            "Winslow Brothers transformed our backyard. The cedar fence looks incredible, and the crew was polite, cleaned up perfectly, and finished a day early."
          </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">JD</div>
<div>
<div className="text-xs font-bold text-slate-900">James D.</div>
<div className="text-[0.65rem] text-slate-400 uppercase tracking-wide">Bellingham, WA</div>
</div>
</div>
</div>
<div className="card bg-slate-50 border-transparent">
<p className="text-sm text-slate-600 mb-6 leading-relaxed italic">
            "Needed a dog run fast. They came out for a quote the next day and had the chain link installed the following week. Fair pricing and great communication."
          </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700">SR</div>
<div>
<div className="text-xs font-bold text-slate-900">Sarah R.</div>
<div className="text-[0.65rem] text-slate-400 uppercase tracking-wide">Ferndale, WA</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-white">
<div className="max-w-[1100px] mx-auto px-6 py-16">
<div className="grid md:grid-cols-2 gap-12">

<div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Get your free estimate</h3>
<p className="text-sm text-slate-500 mb-6">Fill out the form below and we'll reach out within 24 hours.</p>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<input className="custom-input" placeholder="First Name" type="text"/>
<input className="custom-input" placeholder="Last Name" type="text"/>
</div>
<input className="custom-input" placeholder="Email Address" type="email"/>
<input className="custom-input" placeholder="Phone Number" type="tel"/>
<div className="relative">
<select className="custom-input appearance-none cursor-pointer">
<option disabled="" selected="" value="">Interested in...</option>
<option>Cedar Fencing</option>
<option>Vinyl Fencing</option>
<option>Chain Link</option>
<option>Repair / Other</option>
</select>
<div className="absolute right-3 top-3.5 pointer-events-none text-slate-400">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
<button className="btn w-full justify-center mt-2" type="button">
                Send Request
              </button>
</form>
</div>

<div className="flex flex-col justify-between">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded bg-slate-900 flex items-center justify-center text-white">
<iconify-icon icon="lucide:fence" width="16"></iconify-icon>
</div>
<span className="font-bold text-slate-900 tracking-tight">WINSLOW BROS.</span>
</div>
<div className="space-y-4 text-sm text-slate-500">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-emerald-700" icon="lucide:map-pin" width="16"></iconify-icon>
<span>1234 Northwest Ave,<br/>Bellingham, WA 98225</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-700" icon="lucide:phone" width="16"></iconify-icon>
<span>(360) 555-0123</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-700" icon="lucide:mail" width="16"></iconify-icon>
<span>hello@winslowbros.com</span>
</div>
</div>
</div>
<div className="mt-10 pt-8 border-t border-slate-100">
<div className="flex gap-4 text-slate-400 mb-4">
<a className="hover:text-slate-600 transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="20"></iconify-icon></a>
<a className="hover:text-slate-600 transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="20"></iconify-icon></a>
</div>
<p className="text-xs text-slate-400">
                © 2023 Winslow Brothers Fencing.<br/>
                Licensed, Bonded, Insured. WA Lic# WINSLBF000NW
              </p>
</div>
</div>
</div>
</div>
</footer>
</main>

    </>
  );
}
