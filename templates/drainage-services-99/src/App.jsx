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
      

<nav className="fixed top-0 left-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-4">

<a className="flex items-center gap-1 group" href="#">
<iconify-icon className="text-sky-500 text-3xl mr-1 group-hover:scale-110 transition-transform duration-300" icon="solar:waterdrops-bold-duotone"></iconify-icon>
<div className="leading-none flex flex-col">
<div className="text-2xl font-black tracking-tighter text-slate-900 leading-none">
                            Drain<span className="text-yellow-500">Pro</span>
</div>
<span className="text-[9px] font-bold tracking-[0.25em] text-slate-400 uppercase mt-0.5 ml-0.5">Ayrshire</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-2 pl-6 border-l border-slate-200 ml-6">
<img alt="East Ayrshire Trusted Trader" className="h-8 w-auto mix-blend-multiply" src="https://static.wixstatic.com/media/bbf577_935df95d95da4ab2b3a95adc2a4be18b~mv2.jpg/v1/fill/w_100,h_106,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/East%20Ayrshire%20Trusted%20Trader.jpg"/>
<span className="text-xs font-medium text-slate-500 leading-tight">East Ayrshire<br/>Trusted Trader</span>
</div>
</div>
<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-slate-900 hover:text-yellow-600 transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">CCTV</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Areas Covered</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#">Reviews</a>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex flex-col items-end mr-2">
<span className="text-xs font-semibold text-green-600 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        24/7 Emergency
                    </span>
<span className="text-sm font-bold text-slate-900">0800 246 5402</span>
</div>
<a className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-slate-900/20" href="tel:08002465402">
                    Call Now
                    <iconify-icon height="16" icon="solar:phone-calling-bold" width="16"></iconify-icon>
</a>
</div>
</div>
</nav>

<header className="relative min-h-[850px] flex items-center pt-20 overflow-hidden bg-slate-50">

<div className="absolute inset-0 z-0">
<img alt="DrainPro Van" className="w-full h-full object-cover opacity-100" src="https://static.wixstatic.com/media/b5512a_dc8bdbabf04b48679512a2c471ee98cc~mv2.jpg/v1/fill/w_2500,h_1330,al_c/b5512a_dc8bdbabf04b48679512a2c471ee98cc~mv2.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-transparent"></div>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 p-1.5 pr-4 rounded-full">
<div className="bg-green-500 rounded-full p-1">
<iconify-icon className="text-white block" icon="solar:check-circle-bold" width="14"></iconify-icon>
</div>
<span className="text-white font-medium text-xs tracking-wide">Rated 5.0/5.0 on Yell &amp; Google</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
                    Your Local <span className="text-yellow-400">Drainage</span> Experts.
                </h1>
<p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                    Ayrshire's trusted family-run drainage company. We provide fast, fixed-price unblocking, CCTV surveys, and repairs. No hidden call-out charges.
                </p>

<div className="flex flex-wrap gap-8 items-center pt-4 border-t border-white/10">
<div className="flex items-center gap-3">
<div className="bg-white p-2 rounded shadow-sm">
<img alt="Trusted Trader" className="h-12 w-auto" src="https://static.wixstatic.com/media/bbf577_935df95d95da4ab2b3a95adc2a4be18b~mv2.jpg/v1/fill/w_100,h_106,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/East%20Ayrshire%20Trusted%20Trader.jpg"/>
</div>
<div className="text-white text-xs leading-tight opacity-90">
<span className="font-bold block text-sm">Vetted &amp; Approved</span>
                             East Ayrshire Council
                         </div>
</div>
<div className="h-10 w-px bg-white/20"></div>
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-yellow-400 text-3xl" icon="solar:shield-check-bold"></iconify-icon>
<div className="text-xs leading-tight">
<span className="font-bold block text-sm">Fully Insured</span>
                            Public Liability
                        </div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="glass-panel p-8 rounded-2xl text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:bolt-bold" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold">Fast Response Quote</h3>
<p className="text-slate-400 text-xs">Usually respond within 15 mins</p>
</div>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Name</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all placeholder:text-slate-600" placeholder="Your Name" type="text"/>
</div>
<div>
<label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Phone</label>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all placeholder:text-slate-600" placeholder="Mobile Number" type="tel"/>
</div>
</div>
<div>
<label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Location</label>
<div className="relative">
<iconify-icon className="absolute left-3 top-2.5 text-slate-500" icon="solar:map-point-linear"></iconify-icon>
<input className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-9 pr-3 py-2.5 text-sm text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all placeholder:text-slate-600" placeholder="Postcode or Town" type="text"/>
</div>
</div>
<div>
<label className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">Issue Type</label>
<div className="relative">
<select className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-3 py-2.5 text-sm text-white focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 outline-none transition-all appearance-none cursor-pointer">
<option className="bg-slate-900">Blocked Toilet / Sink</option>
<option className="bg-slate-900">Blocked External Drain</option>
<option className="bg-slate-900">Slow Draining</option>
<option className="bg-slate-900">Bad Smell / Odour</option>
<option className="bg-slate-900">CCTV Survey Request</option>
</select>
<iconify-icon className="absolute right-3 top-3 text-slate-500 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-3 rounded-lg mt-2 transition-all flex justify-center items-center gap-2 group" type="button">
                                Get Price &amp; Availability
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<p className="text-center text-[10px] text-slate-500">
                                Prices start from £90. No hidden fees.
                            </p>
</form>
</div>
</div>
</div>
</div>
</header>

<div className="bg-white border-b border-slate-100 py-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Accredited &amp; Trusted By:</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">

<img alt="Trusted Trader" className="h-16 w-auto mix-blend-multiply" src="https://static.wixstatic.com/media/bbf577_935df95d95da4ab2b3a95adc2a4be18b~mv2.jpg/v1/fill/w_134,h_142,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/East%20Ayrshire%20Trusted%20Trader.jpg"/>

<div className="flex items-center gap-2 group cursor-default">
<div className="w-10 h-10 border-2 border-slate-900 rounded-full flex items-center justify-center">
<iconify-icon className="text-slate-900 text-xl" icon="solar:check-read-bold"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900 leading-none">SEPA</span>
<span className="text-[10px] font-medium text-slate-500">Registered</span>
</div>
</div>
<div className="flex items-center gap-2 group cursor-default">
<div className="w-10 h-10 bg-slate-900 rounded flex items-center justify-center text-white">
<span className="font-bold text-xs">CSCS</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900 leading-none">Health &amp; Safety</span>
<span className="text-[10px] font-medium text-slate-500">Certified</span>
</div>
</div>
<div className="flex items-center gap-2 group cursor-default">
<iconify-icon icon="logos:google" width="24"></iconify-icon>
<div className="flex flex-col">
<span className="text-xs font-bold text-slate-900 leading-none">5.0 Rating</span>
<span className="text-[10px] font-medium text-slate-500">Verified Reviews</span>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-yellow-500 font-bold tracking-wider text-sm uppercase mb-2 block">Why Choose DrainPro?</span>
<h2 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                    Professional drainage solutions you can rely on.
                </h2>
<p className="text-lg text-slate-500 mb-8 leading-relaxed">
                    With over 35 years of experience, we use the latest technology to diagnose and fix drainage issues quickly. We are proud members of the East Ayrshire Trusted Trader scheme.
                </p>
<div className="grid sm:grid-cols-2 gap-6">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:videocamera-record-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Free CCTV Look-See</h4>
<p className="text-sm text-slate-500 mt-1">We inspect the line after unblocking to ensure the issue is resolved.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-yellow-50 text-yellow-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:tag-price-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Fixed Prices from £90</h4>
<p className="text-sm text-slate-500 mt-1">Transparent pricing structure. You know the cost before we start.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">1 Hour Response</h4>
<p className="text-sm text-slate-500 mt-1">For emergency blockages in Kilmarnock, Irvine &amp; Troon areas.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:shield-check-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Fully Insured</h4>
<p className="text-sm text-slate-500 mt-1">Public liability insurance for domestic and commercial work.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="bg-slate-100 rounded-2xl p-2">
<img alt="Drain Inspection" className="rounded-xl w-full object-cover h-[600px] shadow-2xl" src="https://static.wixstatic.com/media/11062b_b07d3d51598e4b7fb7298b5777108a06~mv2.jpg/v1/fill/w_654,h_1160,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_b07d3d51598e4b7fb7298b5777108a06~mv2.jpg"/>
</div>

<div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3 mb-2">
<div className="bg-green-100 p-1.5 rounded-full text-green-600">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
<span className="text-xs font-bold uppercase tracking-wider text-slate-400">Status Update</span>
</div>
<p className="text-slate-900 font-semibold text-sm">Blockage cleared successfully.</p>
<p className="text-slate-500 text-xs mt-1">Flow rate restored to 100%</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">Comprehensive Services</h2>
<p className="text-slate-500 text-lg">We handle everything from simple sink unblocking to complex drainage repairs and root removal.</p>
</div>
<a className="text-slate-900 font-semibold hover:text-yellow-600 flex items-center gap-2 transition-colors" href="#">
                    View Pricing
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group bg-white p-1 rounded-2xl hover:shadow-xl transition-shadow duration-300">
<div className="h-full bg-white border border-slate-100 rounded-xl p-8 flex flex-col">
<div className="w-14 h-14 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-slate-900/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:waterdrops-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Blocked Drains</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                            Fast clearance of sewage and wastewater blockages using high-pressure water jetting and mechanical rods.
                        </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Toilets &amp; Sinks
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> External Manholes
                            </li>
</ul>
</div>
</div>

<div className="group bg-white p-1 rounded-2xl hover:shadow-xl transition-shadow duration-300">
<div className="h-full bg-white border border-slate-100 rounded-xl p-8 flex flex-col">
<div className="w-14 h-14 bg-yellow-400 text-slate-900 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-yellow-400/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:videocamera-record-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">CCTV Surveys</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                            Advanced camera technology to identify collapsed pipes, root intrusion, or recurring blockage causes.
                        </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Home Buyer Reports
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> HD Recording
                            </li>
</ul>
</div>
</div>

<div className="group bg-white p-1 rounded-2xl hover:shadow-xl transition-shadow duration-300">
<div className="h-full bg-white border border-slate-100 rounded-xl p-8 flex flex-col">
<div className="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:wrench-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-slate-900 mb-3">Repairs &amp; Descaling</h3>
<p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">
                            Structural repairs and pipe cleaning to restore your drainage system to full working order.
                        </p>
<ul className="space-y-2 mb-6">
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Root Cutting
                            </li>
<li className="flex items-center gap-2 text-xs font-medium text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Scale Removal
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 pt-20 pb-10 text-slate-400 font-light">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-1 mb-6">
<iconify-icon className="text-sky-500 text-3xl mr-1" icon="solar:waterdrops-bold-duotone"></iconify-icon>
<div className="leading-none">
<span className="text-2xl font-black tracking-tighter text-white">Drain</span><span className="text-2xl font-black tracking-tighter text-yellow-500">Pro</span>
</div>
</div>
<p className="text-sm leading-relaxed max-w-sm mb-8">
                        DrainPro Ayrshire provides expert drainage services for residential and commercial properties. We are committed to honest pricing, quality workmanship, and rapid response times.
                    </p>
<div className="flex items-center gap-4">
<img alt="Trusted Trader" className="h-16 w-auto bg-white rounded p-1" src="https://static.wixstatic.com/media/bbf577_935df95d95da4ab2b3a95adc2a4be18b~mv2.jpg/v1/fill/w_134,h_142,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/East%20Ayrshire%20Trusted%20Trader.jpg"/>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Services</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-yellow-400 transition-colors" href="#">Emergency Unblocking</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#">CCTV Inspections</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#">Drain Cleaning</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#">Root Removal</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#">Excavation &amp; Repair</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-6">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-yellow-400 mt-0.5" icon="solar:map-point-bold"></iconify-icon>
<span>44 Oaklands Avenue,<br/>Irvine, KA12 0SF</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-yellow-400" icon="solar:phone-calling-bold"></iconify-icon>
<a className="hover:text-white" href="tel:08002465402">0800 246 5402</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-yellow-400" icon="solar:smartphone-bold"></iconify-icon>
<a className="hover:text-white" href="tel:07592548628">07592 548628</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-yellow-400" icon="solar:letter-bold"></iconify-icon>
<a className="hover:text-white" href="mailto:stewart@thedrainpro.co.uk">stewart@thedrainpro.co.uk</a>
</li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2024 Precision Flows Heating &amp; Plumbing Ltd T/A DrainPro.</p>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
