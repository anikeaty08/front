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
      

<header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
<div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer">
<div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<iconify-icon className="text-2xl" icon="solar:waterdrop-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xl font-semibold tracking-tighter leading-none text-slate-900 uppercase">Cut Above</span>
</div>
</div>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#home">Home</a>
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>
<a className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all shadow-sm hover:shadow" href="tel:0475507221">
<iconify-icon className="text-lg hidden sm:block" icon="solar:phone-calling-linear"></iconify-icon>
<span>Call Now: 0475 507 221</span>
</a>
</div>
</header>

<main className="flex-grow">
<section className="relative pt-24 pb-32 overflow-hidden bg-slate-900 text-white" id="home">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<div className="inline-flex gap-2 text-xs font-medium text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded-full mb-8 py-1.5 px-3 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                    Fast Response Available Now
                </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                    Emergency Blocked Drains? <br className="hidden sm:block"/> We Clear Them Fast in Western Sydney.
                </h1>
<p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Available 24/7. Stop the damage before it spreads with our advanced CCTV drain inspection technology. Fast, precise, and permanent solutions.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-medium shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5" href="tel:0475507221">
<iconify-icon className="text-xl" icon="solar:phone-bold"></iconify-icon>
                        Call for Emergency Support
                    </a>
</div>
<div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-400 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-orange-400" icon="solar:check-circle-linear"></iconify-icon>
                        Zero Hidden Fees
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-orange-400" icon="solar:clock-circle-linear"></iconify-icon>
                        On-Time Arrival
                    </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-lg text-orange-400" icon="solar:shield-check-linear"></iconify-icon>
                        Satisfaction Guaranteed
                    </div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-b border-slate-200" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-4">
                        Why Choose Cut Above Plumbing
                    </h2>
<p className="text-base sm:text-lg text-slate-600">
                        When wastewater threatens your property, you need licensed experts equipped to handle the toughest blockages immediately.
                    </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
<div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 text-white shadow-sm">
<iconify-icon className="text-2xl" icon="solar:clock-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">24/7 Emergency Service</h3>
<p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 flex-grow">
                            Plumbing emergencies don't wait for business hours. Our rapid-response team is on standby day and night across Western Sydney to stop overflows fast.
                        </p>
<a className="text-orange-500 font-medium text-sm flex items-center gap-1 hover:text-orange-600 transition-colors" href="tel:0475507221">
                            Request dispatch <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
<iconify-icon className="text-9xl" icon="solar:camera-linear"></iconify-icon>
</div>
<div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 text-white shadow-sm relative z-10">
<iconify-icon className="text-2xl" icon="solar:camera-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3 relative z-10">Precision CCTV Diagnostics</h3>
<p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 flex-grow relative z-10">
                            We eliminate the guesswork. High-definition drain cameras pinpoint the exact location of tree roots or blockages, ensuring we fix the root cause.
                        </p>
<a className="text-orange-500 font-medium text-sm flex items-center gap-1 hover:text-orange-600 transition-colors relative z-10" href="tel:0475507221">
                            Book an inspection <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-start">
<div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 text-white shadow-sm">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-slate-900 mb-3">Fully Licensed &amp; Insured</h3>
<p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 flex-grow">
                            Your property is safe in our hands. We are fully qualified, fully insured professionals who clean up our workspace and guarantee our workmanship.
                        </p>
<a className="text-orange-500 font-medium text-sm flex items-center gap-1 hover:text-orange-600 transition-colors" href="tel:0475507221">
                            Speak to an expert <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 mb-4">
                        Trusted by Western Sydney
                    </h2>
<p className="text-base sm:text-lg text-slate-600">
                        Don't just take our word for it. See why locals rely on Cut Above Plumbing when disaster strikes.
                    </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl flex flex-col gap-5">
<div className="flex items-center gap-1 text-orange-400">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm sm:text-base text-slate-700 leading-relaxed flex-grow">
                            "Jake done an amazing job clearing our blocked sewer line. He was well prepared, prompt and honest. He took his time and done things right! Would highly recommend!"
                        </p>
<div className="flex items-center gap-3 pt-4 border-t border-slate-200">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-medium text-sm">
                                BM
                            </div>
<div>
<p className="text-sm font-medium text-slate-900">Benjamin M.</p>
<p className="text-xs text-slate-500">Western Sydney</p>
</div>
</div>
</div>

<div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl flex flex-col gap-5">
<div className="flex items-center gap-1 text-orange-400">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm sm:text-base text-slate-700 leading-relaxed flex-grow">
                            "Called them at 10 PM on a Saturday when our drains overflowed. They arrived within 40 minutes, used the camera to show us the roots, and cleared it instantly. Lifesavers."
                        </p>
<div className="flex items-center gap-3 pt-4 border-t border-slate-200">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-medium text-sm">
                                SJ
                            </div>
<div>
<p className="text-sm font-medium text-slate-900">Sarah J.</p>
<p className="text-xs text-slate-500">Penrith</p>
</div>
</div>
</div>

<div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl flex flex-col gap-5 md:hidden lg:flex">
<div className="flex items-center gap-1 text-orange-400">
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-lg" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm sm:text-base text-slate-700 leading-relaxed flex-grow">
                            "Very professional service. Having the CCTV inspection gave me peace of mind knowing exactly what was causing the issue. Pricing was exactly as quoted upfront."
                        </p>
<div className="flex items-center gap-3 pt-4 border-t border-slate-200">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center text-slate-600 font-medium text-sm">
                                TR
                            </div>
<div>
<p className="text-sm font-medium text-slate-900">Tom R.</p>
<p className="text-xs text-slate-500">Blacktown</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 border-t border-slate-800 text-center px-6">
<h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white mb-6">
                Don't wait for the problem to get worse.
            </h2>
<a className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-base sm:text-lg font-medium transition-all shadow-sm hover:-translate-y-0.5" href="tel:0475507221">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                Call 0475 507 221 Now
            </a>
</section>
</main>

<footer className="bg-slate-950 pt-16 pb-8 text-slate-400 border-t border-slate-900" id="contact">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start justify-between gap-10">
<div className="max-w-sm">
<div className="flex items-center gap-2 text-white mb-6">
<div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center">
<iconify-icon className="text-base" icon="solar:waterdrop-linear"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tighter uppercase">Cut Above</span>
</div>
<p className="text-sm leading-relaxed mb-6">
                    Your trusted local experts for emergency plumbing and blocked drains across Western Sydney. Fast, reliable, and available 24/7.
                </p>
<div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-800 text-white text-xs font-medium px-3 py-1.5 rounded-full">
<iconify-icon className="text-orange-500" icon="solar:shield-check-bold"></iconify-icon>
                    LIC 348943C
                </div>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-white font-medium mb-2 tracking-tight">Contact Us</h4>
<a className="flex items-center gap-3 text-sm hover:text-white transition-colors" href="tel:0475507221">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon>
                    0475 507 221
                </a>
<a className="flex items-center gap-3 text-sm hover:text-white transition-colors" href="mailto:jake@cutaboveplumbing.com">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
                    jake@cutaboveplumbing.com
                </a>
<div className="flex items-center gap-3 text-sm">
<iconify-icon className="text-lg" icon="solar:map-point-linear"></iconify-icon>
                    Castlereagh NSW 2749, Serving Western Sydney
                </div>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs">© 2024 Cut Above Plumbing. All rights reserved.</p>
<p className="text-xs text-slate-500">ABN 73 650 979 301</p>
</div>
</footer>

    </>
  );
}
