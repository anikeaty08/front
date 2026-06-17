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



        // Smooth scroll script provided by Caledonia Trades
        (function(){
            function smoothScrollToId(id){
            const el = document.getElementById(id);
            if(!el) return false;
            el.scrollIntoView({ behavior: "smooth", block: "start" });
            return true;
            }

            document.addEventListener("click", function(e){
            const a = e.target.closest('a[href^="#"]');
            if(!a) return;
            const href = a.getAttribute("href");
            const id = href.replace("#","");
            if(!id) return;
            if(smoothScrollToId(id)){
                e.preventDefault();
                history.replaceState(null, "", href);
            }
            });
        })();
    
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
      

<div className="bg-slate-900 text-slate-300 text-xs py-2.5 text-center font-medium tracking-wide">
<p>Edinburgh &amp; Stockbridge <span className="mx-2 opacity-30">•</span> Professional Plumbing &amp; Heating <span className="mx-2 opacity-30">•</span> Fast local callouts</p>
</div>

<header className="fixed top-0 left-0 right-0 z-40 glass-nav transition-all duration-300" style={{top: '36px'}}>
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-slate-900 font-semibold tracking-tighter text-lg uppercase flex items-center gap-2" href="#">
<div className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-lg">
<iconify-icon icon="solar:water-drops-linear" width="18"></iconify-icon>
</div>
                Stockbridge Plumbing
            </a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#reviews">Reviews</a>
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Areas</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:flex flex-col items-end mr-2 group" href="tel:07841939261">
<span className="text-xs text-slate-400 font-medium group-hover:text-blue-600 transition-colors">Call us</span>
<span className="text-sm font-semibold text-slate-900 tracking-tight">07841 939261</span>
</a>
<a className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-slate-900 px-4 text-sm font-medium text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2" href="#quote">
                    Get a Quote
                </a>
</div>
</div>
</header>

<main className="pt-28">

<section className="max-w-6xl mx-auto px-6 py-16 md:py-24">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    Available for bookings in Edinburgh
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Trusted Plumbing &amp; Heating in Edinburgh &amp; Stockbridge
                </h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-2xl mb-10 font-light">
                    Fast, professional plumbing and heating work for homes and businesses. Clear communication, tidy workmanship, and service you can rely on.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-10">
<a className="inline-flex h-12 items-center justify-center rounded-lg bg-blue-600 px-8 text-base font-medium text-white transition-all hover:bg-blue-700 shadow-lg shadow-blue-200" href="tel:07841939261">
<iconify-icon className="mr-2 text-xl" icon="solar:phone-calling-linear"></iconify-icon>
                        Call Now — 07841 939261
                    </a>
<a className="inline-flex h-12 items-center justify-center rounded-lg border border-slate-200 bg-white px-8 text-base font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50" href="#quote">
                        Get a Free Quote
                    </a>
</div>

<div className="cds-review-strip">
<div className="cds-stars">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="cds-meta"><strong>Highly rated</strong> • Trusted by local customers</div>
<div className="cds-quote">“Imran was brilliant — professional, quick and left everything clean and tidy.”</div>
</div>

<div className="cds-badges">
<div className="cds-badge">
<div className="cds-ico"><iconify-icon icon="solar:verified-check-bold"></iconify-icon></div>
<div className="cds-txt"><strong>5★ Reviews</strong><br/>Trusted locally</div>
</div>
<div className="cds-badge">
<div className="cds-ico"><iconify-icon icon="solar:clock-circle-bold"></iconify-icon></div>
<div className="cds-txt"><strong>On-time</strong><br/>Reliable arrival</div>
</div>
<div className="cds-badge">
<div className="cds-ico"><iconify-icon icon="solar:broom-bold"></iconify-icon></div>
<div className="cds-txt"><strong>Clean &amp; tidy</strong><br/>Respectful service</div>
</div>
<div className="cds-badge">
<div className="cds-ico"><iconify-icon icon="solar:map-point-bold"></iconify-icon></div>
<div className="cds-txt"><strong className="">Edinburgh</strong><br/>Local coverage</div>
</div>
</div>
</div>

<div className="cds-img-wrap">

<div aria-label="Plumber working on boiler" className="cds-hero-media"></div>

<div className="cds-services-grid">
<div className="cds-card">
<div className="cds-card-img" style={{backgroundImage: 'url(\'pexels-heiko-ruth-53441229-7859953.jpg\')'}}></div>
<div className="cds-card-body">
<p className="cds-card-title">Boiler Repairs</p>
<p className="cds-card-sub">Fast diagnosis • Professional repairs</p>
</div>
</div>
<div className="cds-card">
<div className="cds-card-img" style={{backgroundImage: 'url(\'pexels-brett-sayles-12778827.jpg\')'}}></div>
<div className="cds-card-body">
<p className="cds-card-title">Plumbing Installations</p>
<p className="cds-card-sub">Bathrooms • Taps • Toilets • Sinks</p>
</div>
</div>
<div className="cds-card">
<div className="cds-card-img" style={{backgroundImage: 'url(\'pexels-brett-sayles-12778827.jpg\')'}}></div>
<div className="cds-card-body">
<p className="cds-card-title">Leaks &amp; Pipework</p>
<p className="cds-card-sub">Repairs • Replacements • Fast callouts</p>
</div>
</div>
</div>
</div>

</section>

<section className="bg-slate-50/50 border-y border-slate-100 py-20 md:py-32" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Plumbing &amp; Heating Services</h2>
<p className="text-slate-500 text-lg max-w-2xl">From boiler issues to radiator installs and everyday plumbing repairs — we offer a reliable local service across Edinburgh and nearby areas.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200">
<div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:flame-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Boiler Repairs &amp; Diagnostics</h3>
<p className="text-slate-500 text-sm leading-relaxed">Fast fault-finding and professional repairs to restore heating and hot water quickly.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:water-drops-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Plumbing Repairs &amp; Leaks</h3>
<p className="text-slate-500 text-sm leading-relaxed">Fixing leaks, pipework problems and urgent plumbing issues quickly and efficiently.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200">
<div className="w-12 h-12 bg-red-50 text-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:thermometer-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Radiators &amp; Heating</h3>
<p className="text-slate-500 text-sm leading-relaxed">Radiator installs, replacements and heating system improvements for your home.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200">
<div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:bath-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Bathroom Plumbing</h3>
<p className="text-slate-500 text-sm leading-relaxed">Plumbing work for upgrades, replacements and new fittings to modernization.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200">
<div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:quit-pip-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Taps, Toilets &amp; Sinks</h3>
<p className="text-slate-500 text-sm leading-relaxed">Repair and replacement of common household plumbing fixtures and blockages.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200">
<div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:danger-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Emergency Callouts</h3>
<p className="text-slate-500 text-sm leading-relaxed">If you need urgent help, call and we’ll advise next steps as quickly as possible.</p>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-slate-600 bg-white inline-block px-6 py-3 rounded-full border border-slate-200 text-sm font-medium">
                        Need help today? Call <a className="text-blue-600 hover:underline" href="tel:07841939261">07841 939261</a> for a quick quote.
                    </p>
</div>
</div>
</section>

<section className="py-20 md:py-32 max-w-6xl mx-auto px-6" id="reviews">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Highly rated by local customers</h2>
<p className="text-slate-500 text-lg">Customers consistently mention professionalism, reliability, and how clean and tidy the work is.</p>
</div>
<div className="flex items-center gap-1 text-yellow-500">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-slate-50 p-8 rounded-2xl">
<iconify-icon className="text-slate-300 text-4xl mb-4" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-slate-700 leading-relaxed mb-6 font-medium">“A friend recommended Imran and he came round to check the issue. He was brilliant! I'm truly grateful for his work and professionalism. Everything got solved quickly and efficiently. A very genuine and respectful person.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-sm">SS</div>
<div>
<div className="text-sm font-semibold text-slate-900">Susie S</div>
<div className="text-xs text-slate-500">Local Resident</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl">
<iconify-icon className="text-slate-300 text-4xl mb-4" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-slate-700 leading-relaxed mb-6 font-medium">“Imran Plumber Services did an excellent job repairing my boiler. He arrived on time, quickly identified the issue, and fixed it professionally. The work was tidy, efficient, and my boiler has been running perfectly ever since.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-sm">SM</div>
<div>
<div className="text-sm font-semibold text-slate-900">Samir Mehanovic</div>
<div className="text-xs text-slate-500">Local Resident</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl">
<iconify-icon className="text-slate-300 text-4xl mb-4" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-slate-700 leading-relaxed mb-6 font-medium">“Brilliant service from Imran… Very thorough and professional, explained the work carefully and left everything perfectly clean and tidy… excellent communication throughout. Would highly recommend.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold text-sm">SH</div>
<div>
<div className="text-sm font-semibold text-slate-900">Sally Herrmann</div>
<div className="text-xs text-slate-500">Local Resident</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-2xl">
<iconify-icon className="text-slate-300 text-4xl mb-4" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-slate-700 leading-relaxed mb-6 font-medium">“We've used Imran's services a couple of times now… His communication is excellent and he arrives when he says he will. His work is top-notch and he always leaves the area clean and tidy.”</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-700 font-bold text-sm">AF</div>
<div>
<div className="text-sm font-semibold text-slate-900">Andrew Fleming</div>
<div className="text-xs text-slate-500">Local Resident</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white py-20 md:py-32" id="about">
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-10">Simple, stress-free service</h2>
<div className="space-y-10">
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-lg font-semibold text-white">1</div>
<div>
<h3 className="text-xl font-medium mb-2">Get in touch</h3>
<p className="text-slate-400 leading-relaxed">Call or request a quote online. We respond quickly to all enquiries.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-lg font-semibold text-white">2</div>
<div>
<h3 className="text-xl font-medium mb-2">Quick diagnosis</h3>
<p className="text-slate-400 leading-relaxed">We assess the issue and confirm the best fix and price before starting.</p>
</div>
</div>
<div className="flex gap-6">
<div className="flex-shrink-0 w-12 h-12 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-lg font-semibold text-white">3</div>
<div>
<h3 className="text-xl font-medium mb-2">Job done properly</h3>
<p className="text-slate-400 leading-relaxed">Professional workmanship, always left clean and tidy after we finish.</p>
</div>
</div>
</div>
</div>

<div className="bg-slate-800/50 p-8 md:p-12 rounded-3xl border border-slate-700">
<h3 className="text-2xl font-medium mb-8 text-white">Why Stockbridge Plumbing Solutions?</h3>
<ul className="space-y-5">
<li className="flex items-start gap-4">
<iconify-icon className="text-blue-400 text-xl mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-300">Professional, respectful service</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-blue-400 text-xl mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-300">Excellent communication &amp; reliable arrival times</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-blue-400 text-xl mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-300">Thorough work completed to a high standard</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-blue-400 text-xl mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-300">Clean and tidy finish every time</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-blue-400 text-xl mt-0.5 flex-shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-slate-300">Trusted by local customers across Edinburgh</span>
</li>
</ul>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20 md:py-32" id="contact">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Areas we cover</h2>
<p className="text-slate-500 text-lg mb-8">We provide reliable service to homes and businesses across Edinburgh and surrounding areas.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">Stockbridge</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">New Town</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">Canonmills</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">Leith</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">Inverleith</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">Morningside</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">Bruntsfield</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">Marchmont</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">Corstorphine</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">Murrayfield</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">Trinity</span>
<span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm">Portobello</span>
</div>
<div className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg bg-slate-50">
<iconify-icon className="text-slate-400 text-2xl" icon="solar:map-point-linear"></iconify-icon>
<p className="text-sm text-slate-600">Not sure if we cover your area? Call <a className="text-slate-900 font-semibold hover:underline" href="tel:07841939261">07841 939261</a> and we’ll confirm.</p>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50" id="quote">
<h3 className="text-2xl font-medium text-slate-900 mb-2">Get a free quote</h3>
<p className="text-slate-500 text-sm mb-6">Leave your details and we’ll get back to you as soon as possible.</p>
<form action="#" className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white transition-all" placeholder="e.g. John Smith" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Phone Number</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white transition-all" placeholder="07..." type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Postcode</label>
<input className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white transition-all" placeholder="EH..." type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">What do you need help with?</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 appearance-none focus:bg-white transition-all cursor-pointer">
<option disabled="" selected="" value="">Select an issue...</option>
<option value="boiler">Boiler Repair / Issue</option>
<option value="leak">Leak Repair</option>
<option value="radiator">Radiator Install / Repair</option>
<option value="bathroom">Bathroom Plumbing</option>
<option value="tap">Tap / Toilet / Sink</option>
<option value="other">Other</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:bg-white transition-all resize-none" placeholder="Briefly describe the issue..." rows="3"></textarea>
</div>
<button className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-lg shadow-blue-200/50" onclick="alert('Thank you — we’ve received your request. We will review your message and respond as soon as possible.')" type="button">
                            Get Free Quote
                        </button>
<p className="text-xs text-center text-slate-400 mt-4">
                            Prefer to speak now? Call <a className="text-slate-600 font-medium underline" href="tel:07841939261">07841 939261</a>
</p>
</form>
</div>
</div>
</section>
</main>

<div className="bg-slate-50 border-t border-slate-200 py-16 text-center px-6">
<h2 className="text-2xl md:text-3xl font-medium text-slate-900 mb-4 tracking-tight">Ready to get it sorted?</h2>
<p className="text-slate-500 mb-8">Call now or request a free quote — we’ll respond as quickly as possible.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-6 text-sm font-medium text-white transition-all hover:bg-slate-800" href="tel:07841939261">
                Call Now
            </a>
<a className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-sm font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50" href="#quote">
                Get Free Quote
            </a>
</div>
</div>

<footer className="bg-white py-12 border-t border-slate-200">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<div className="text-slate-900 font-semibold uppercase tracking-tighter mb-2 text-sm">Stockbridge Plumbing Solutions</div>
<div className="text-slate-500 text-sm">Edinburgh EH4 1JX</div>
<div className="text-slate-500 text-sm mt-1">07841 939261</div>
</div>
<div className="text-right text-sm text-slate-500">
<div className="flex items-center gap-2 mb-1 md:justify-end">
<span className="w-2 h-2 rounded-full bg-slate-300"></span>
                    Closed · Opens 7:30am Mon
                </div>
<p>© 2023 Stockbridge Plumbing. All rights reserved.</p>
</div>
</div>
</footer>

<div aria-label="Quick actions" className="cds-stickybar" role="navigation">
<div className="cds-wrap">
<a className="cds-btn call" href="tel:07841939261">
<iconify-icon icon="solar:phone-calling-bold" style={{fontSize: '18px'}}></iconify-icon> Call Now
            </a>
<a className="cds-btn quote" href="#quote">
<iconify-icon icon="solar:pen-new-square-bold" style={{fontSize: '18px'}}></iconify-icon> Get Quote
            </a>
</div>
</div>


    </>
  );
}
