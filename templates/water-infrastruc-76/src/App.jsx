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
      

<div className="bg-[#111c33] border-b border-white/5 relative z-50">
<div className="max-w-7xl mx-auto px-6 py-2 flex justify-end gap-6 text-xs text-slate-300">
<a className="hover:text-white transition-colors" href="#">Section 8 Notices</a>
<a className="hover:text-white transition-colors" href="#">Publications</a>
<a className="flex items-center gap-1 hover:text-white transition-colors" href="#">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="12"></iconify-icon>
                0345 646 0680
            </a>
</div>
</div>

<section className="relative bg-[#162441] pt-6 pb-48 overflow-hidden" id="hero">

<nav className="max-w-7xl mx-auto px-6 mb-24 flex items-center justify-between relative z-20">

<a className="text-white flex items-center gap-3 group" href="#">
<iconify-icon className="text-4xl text-white group-hover:text-[#fcd051] transition-colors" icon="lucide:droplets" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col">
<span className="text-2xl font-semibold tracking-tight leading-none mb-1">Advanced Water</span>
<span className="text-sm text-slate-300 leading-none">Infrastructure Networks</span>
</div>
</a>

<div className="hidden lg:flex items-center bg-white rounded-full p-1.5 shadow-xl pr-1.5 pl-8 gap-8">
<a className="text-base font-medium text-slate-700 hover:text-slate-900 flex items-center gap-1.5 transition-colors" href="#">
                    About <iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="text-base font-medium text-slate-700 hover:text-slate-900 flex items-center gap-1.5 transition-colors" href="#">
                    What We do <iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<a className="text-base font-medium text-slate-700 hover:text-slate-900 transition-colors" href="#">News</a>
<a className="text-base font-medium text-slate-700 hover:text-slate-900 transition-colors mr-2" href="#">Contact</a>
<a className="bg-[#fcd051] text-slate-900 px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-colors" href="#">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="18"></iconify-icon> Portal
                </a>
</div>
</nav>

<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
<div className="text-white space-y-8 max-w-2xl">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
                    Water and wastewater services for new-build residential developments
                </h1>
<p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                    Advanced Water Infrastructure Networks (AWIN) provides clean water services and wastewater services to customers in new-build residential developments, as well as smooth asset adoption for our developer customers.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="bg-white text-[#162441] px-8 py-3.5 rounded-full font-semibold hover:bg-slate-50 transition-colors shadow-sm text-base" href="#">
                        Contact us
                    </a>
<a className="bg-[#fcd051] text-slate-900 px-8 py-3.5 rounded-full font-semibold flex items-center gap-2 hover:bg-yellow-400 transition-colors shadow-sm text-base" href="#">
                        Domestic Customers <iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center hidden md:flex">
<div className="absolute right-0 w-[500px] h-[500px] rounded-full bg-[#111c33] border-[24px] border-[#1a2b4c]/30 flex items-center justify-center overflow-hidden transform translate-x-12">
<img alt="Water Infrastructure" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute right-0 w-[650px] h-[650px] rounded-full border border-white/5 transform translate-x-12 -z-10"></div>
<div className="absolute right-0 w-[800px] h-[800px] rounded-full border border-white/5 transform translate-x-12 -z-10"></div>
</div>
</div>

<div className="absolute bottom-0 w-full left-0 right-0 z-20">
<svg className="w-full h-auto text-white fill-current block" preserveaspectratio="none" viewbox="0 0 1440 180">
<path d="M0,180 L1440,180 L1440,0 C1100,200 400,-50 0,100 Z"></path>
</svg>
</div>
</section>

<section className="py-24 bg-white" id="feature">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="rounded-3xl overflow-hidden shadow-2xl relative group">
<div className="absolute inset-0 bg-[#162441]/10 group-hover:bg-transparent transition-colors z-10"></div>
<img alt="Residential Development" className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-8 max-w-xl">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#162441]">Who are we?</h2>
<div className="space-y-6 text-lg text-slate-600 leading-relaxed">
<p>
                        We are an independent water company, providing water and wastewater services to residential development sites across England and Wales, where they may otherwise have been serviced by an incumbent water company.
                    </p>
<p>
                        Our specialized approach ensures developments receive dedicated infrastructure attention, resulting in faster adoptions and superior long-term service reliability for homeowners.
                    </p>
</div>
<div className="pt-4">
<a className="inline-flex items-center gap-2 bg-[#162441] text-white px-8 py-3.5 rounded-full font-semibold hover:bg-slate-800 transition-all hover:shadow-lg text-base" href="#">
                        More about us <iconify-icon icon="lucide:chevron-right" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100" id="testimonial">
<div className="max-w-5xl mx-auto px-6 text-center space-y-12">
<div className="flex justify-center">
<div className="w-16 h-16 bg-[#fcd051]/20 rounded-full flex items-center justify-center">
<iconify-icon className="text-3xl text-[#d4a826]" icon="lucide:quote" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#162441] leading-tight max-w-4xl mx-auto">
                "AWIN transformed our development process. Their clear communication and proactive infrastructure management expedited our site delivery by months."
            </h2>
<div className="flex flex-col items-center justify-center gap-4 pt-4">
<div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md">
<img alt="Sarah Jenkins" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-lg font-semibold text-slate-900 tracking-tight">Sarah Jenkins</p>
<p className="text-base text-slate-500">Development Director, Horizon Build Group</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-[#162441]">Clear Infrastructure Pathways</h2>
<p className="text-lg text-slate-600 leading-relaxed">
                    We offer transparent, phased approaches for developments of all sizes, ensuring predictable outcomes from planning to full adoption.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

<div className="border border-slate-200 rounded-3xl p-10 bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300">
<div className="flex items-center gap-3 mb-6">
<div className="p-2.5 bg-slate-100 rounded-xl text-slate-600">
<iconify-icon icon="lucide:map" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Consultation</h3>
</div>
<p className="text-base text-slate-600 mb-8 h-12">Initial site evaluation and infrastructure viability assessment.</p>
<ul className="space-y-4 mb-10 text-base text-slate-700">
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-300 mt-1 shrink-0" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
<span>Site specific network designs</span>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-300 mt-1 shrink-0" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
<span>Regulatory compliance check</span>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-300 mt-1 shrink-0" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
<span>Cost estimation modeling</span>
</li>
</ul>
<a className="block w-full text-center border-2 border-slate-200 text-slate-700 py-3.5 rounded-full font-semibold hover:border-slate-300 hover:bg-slate-50 transition-colors text-base" href="#">Discuss Project</a>
</div>

<div className="border-2 border-[#162441] bg-[#162441] text-white rounded-3xl p-10 shadow-2xl relative transform md:-translate-y-4 z-10">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#fcd051] text-[#162441] px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase shadow-sm">
                        Most Selected
                    </div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2.5 bg-white/10 rounded-xl text-[#fcd051]">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white">Full Adoption</h3>
</div>
<p className="text-base text-slate-300 mb-8 h-12">End-to-end management from construction to final asset adoption.</p>
<ul className="space-y-4 mb-10 text-base text-slate-200">
<li className="flex gap-3 items-start">
<iconify-icon className="text-[#fcd051] mt-1 shrink-0" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
<span>Everything in Consultation</span>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-[#fcd051] mt-1 shrink-0" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
<span>Expedited technical approvals</span>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-[#fcd051] mt-1 shrink-0" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
<span>Dedicated project manager</span>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-[#fcd051] mt-1 shrink-0" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
<span>Long-term maintenance guarantee</span>
</li>
</ul>
<a className="block w-full text-center bg-[#fcd051] text-[#162441] py-3.5 rounded-full font-semibold hover:bg-yellow-400 transition-colors shadow-lg text-base" href="#">Request Proposal</a>
</div>

<div className="border border-slate-200 rounded-3xl p-10 bg-white hover:border-slate-300 hover:shadow-xl transition-all duration-300">
<div className="flex items-center gap-3 mb-6">
<div className="p-2.5 bg-slate-100 rounded-xl text-slate-600">
<iconify-icon icon="lucide:settings-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Custom Network</h3>
</div>
<p className="text-base text-slate-600 mb-8 h-12">Tailored solutions for complex, multi-phase strategic sites.</p>
<ul className="space-y-4 mb-10 text-base text-slate-700">
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-300 mt-1 shrink-0" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
<span>Bespoke engineering designs</span>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-300 mt-1 shrink-0" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
<span>Multi-phase strategy alignment</span>
</li>
<li className="flex gap-3 items-start">
<iconify-icon className="text-slate-300 mt-1 shrink-0" icon="lucide:check-circle-2" strokeWidth="1.5" width="20"></iconify-icon>
<span>Advanced sustainability planning</span>
</li>
</ul>
<a className="block w-full text-center border-2 border-slate-200 text-slate-700 py-3.5 rounded-full font-semibold hover:border-slate-300 hover:bg-slate-50 transition-colors text-base" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<footer className="bg-[#111c33] pt-24 pb-12 relative text-slate-300 border-t border-[#1a2b4c]" id="footer">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
<button className="bg-white text-slate-900 px-8 py-3 rounded-full font-semibold text-sm shadow-xl hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 border border-slate-100">
                Back to Top
            </button>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">

<div className="lg:col-span-4 space-y-8">
<a className="text-white flex items-center gap-3" href="#">
<iconify-icon className="text-3xl text-white" icon="lucide:droplets" strokeWidth="1.5"></iconify-icon>
<div className="flex flex-col">
<span className="text-xl font-semibold tracking-tight leading-none mb-1">Advanced Water</span>
<span className="text-xs text-slate-400 leading-none">Infrastructure Networks</span>
</div>
</a>
<div className="flex items-center gap-3 text-lg font-medium text-white">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="18"></iconify-icon>
</div>
                        0345 646 0680
                    </div>
<a className="inline-flex bg-[#fcd051] text-slate-900 px-8 py-3.5 rounded-full font-semibold items-center gap-2 hover:bg-yellow-400 transition-colors shadow-sm text-base" href="#">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="18"></iconify-icon> Portal
                    </a>
</div>

<div className="lg:col-span-2 lg:col-start-6 space-y-4">
<h4 className="text-white font-semibold tracking-tight mb-6">Company</h4>
<nav className="flex flex-col space-y-4 text-base">
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Section 8 Notices</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</nav>
</div>

<div className="lg:col-span-2 space-y-4">
<h4 className="text-white font-semibold tracking-tight mb-6">Resources</h4>
<nav className="flex flex-col space-y-4 text-base">
<a className="hover:text-white transition-colors" href="#">What we do</a>
<a className="hover:text-white transition-colors" href="#">News</a>
<a className="hover:text-white transition-colors" href="#">Publications</a>
</nav>
</div>

<div className="lg:col-span-2 space-y-4">
<h4 className="text-white font-semibold tracking-tight mb-6">Connect</h4>
<div className="flex flex-wrap gap-3">
<a className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center hover:bg-[#162441] hover:border-slate-500 hover:text-white transition-all" href="#">
<iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center hover:bg-[#162441] hover:border-slate-500 hover:text-white transition-all" href="#">
<iconify-icon icon="lucide:linkedin" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center hover:bg-[#162441] hover:border-slate-500 hover:text-white transition-all" href="#">
<iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center hover:bg-[#162441] hover:border-slate-500 hover:text-white transition-all" href="#">
<iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="border-t border-slate-800 pt-8 flex flex-col lg:flex-row justify-between items-center gap-6 text-sm text-slate-500">
<p>© Copyright AWIN 2026 • Company No. 14657764</p>
<div className="flex flex-wrap justify-center lg:justify-end gap-6 items-center">
<a className="hover:text-slate-300 transition-colors" href="#">Privacy Policy</a>
<span className="w-1 h-1 bg-slate-700 rounded-full hidden sm:block"></span>
<a className="hover:text-slate-300 transition-colors" href="#">Cookie Policy</a>
<span className="w-1 h-1 bg-slate-700 rounded-full hidden sm:block"></span>
<a className="hover:text-slate-300 transition-colors" href="#">Modern Slavery Statement</a>
<span className="w-1 h-1 bg-slate-700 rounded-full hidden sm:block"></span>
<a className="hover:text-slate-300 transition-colors" href="#">Supplier Code of Conduct</a>
<div className="ml-4 pl-4 border-l border-slate-800 flex items-center gap-2">
                        website by <span className="font-semibold text-slate-300">Impact Media</span>
<iconify-icon className="text-slate-400" icon="lucide:flag" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
