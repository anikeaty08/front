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
      

<nav className="border-b border-slate-200 sticky top-0 bg-white/80 backdrop-blur-md z-50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:bolt-circle-linear" width="24"></iconify-icon>
                ELECTROFIX
            </div>
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors" href="#schedule">
                Emergency Service
            </a>
</div>
</nav>

<section className="relative pt-16 pb-24 lg:pt-32 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Available for Same-Day Service
                    </div>
<h1 className="text-4xl lg:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Electrical Panel Repair &amp; Troubleshooting
                    </h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg">
                        Stop tripping breakers, buzzing sounds, and flickering lights before they become a fire hazard. We diagnose and fix electrical issues in [City/County] same-day.
                    </p>
<div className="space-y-4 mb-10">
<div className="flex items-start gap-3">
<div className="p-1 rounded bg-blue-50 text-blue-600 mt-0.5">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">24/7 Emergency Response</h3>
<p className="text-sm text-slate-500">We answer the phone when you call.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-1 rounded bg-blue-50 text-blue-600 mt-0.5">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Precise Diagnostics</h3>
<p className="text-sm text-slate-500">We find the root cause, we don't just guess.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="p-1 rounded bg-blue-50 text-blue-600 mt-0.5">
<iconify-icon icon="solar:box-linear" width="18"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-medium text-slate-900">Fully Stocked Trucks</h3>
<p className="text-sm text-slate-500">We carry breakers for 99% of panels.</p>
</div>
</div>
</div>
<a className="inline-flex w-full sm:w-auto items-center justify-center px-6 py-3.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-sm shadow-blue-200" href="#schedule">
                        CHECK AVAILABILITY
                        <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
</div>

<div className="relative">
<div className="aspect-[4/3] rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden relative shadow-lg">

<div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
<div className="text-center">
<iconify-icon className="opacity-20" icon="solar:bolt-circle-linear" width="64"></iconify-icon>
<p className="mt-4 text-sm font-medium tracking-tight opacity-50">THERMAL IMAGING DIAGNOSTICS</p>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-white/20 shadow-sm">
<div className="flex items-center gap-3">
<div className="bg-orange-100 text-orange-600 p-2 rounded-lg">
<iconify-icon icon="solar:fire-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-900">Advanced Safety Check</p>
<p className="text-xs text-slate-500">We detect invisible hot spots in your panel.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 py-20 border-y border-slate-200" id="schedule">
<div className="max-w-xl mx-auto px-6">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 p-8">
<div className="mb-8 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Schedule Your Diagnostic</h2>
<p className="text-sm text-slate-500 mt-2">Takes 2 minutes. Priority scheduling.</p>
</div>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">First Name</label>
<input className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Last Name</label>
<input className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Phone Number <span className="text-red-500">*</span></label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
</div>
<input className="w-full pl-9 px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">Email Address</label>
<input className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-slate-400" placeholder="jane@example.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700">What is the symptom?</label>
<div className="relative">
<select className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none text-slate-700">
<option>Breaker Keeps Tripping</option>
<option>Burning Smell / Fishy Smell</option>
<option>Buzzing / Hissing Sound</option>
<option>Lights Flickering</option>
<option>Total Power Loss</option>
</select>
<div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700">Do you own this home?</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input checked="" className="custom-radio hidden" name="owner" type="radio"/>
<div className="border border-slate-300 rounded-lg px-4 py-2.5 flex items-center gap-3 hover:bg-slate-50 transition-colors">
<div className="radio-circle w-4 h-4 rounded-full border border-slate-300 transition-all"></div>
<span className="text-sm text-slate-700 font-medium">Yes</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio hidden" name="owner" type="radio"/>
<div className="border border-slate-300 rounded-lg px-4 py-2.5 flex items-center gap-3 hover:bg-slate-50 transition-colors">
<div className="radio-circle w-4 h-4 rounded-full border border-slate-300 transition-all"></div>
<span className="text-sm text-slate-700 font-medium">No</span>
</div>
</label>
</div>
</div>
<button className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 mt-4" type="button">
                        CHECK AVAILABILITY
                        <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<section className="border-b border-slate-200 bg-white py-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter text-slate-800">SQUARED</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">SIEMENS</span>
<span className="text-xl font-bold tracking-tighter text-slate-800">EATON</span>
<div className="flex items-center gap-1">
<span className="text-lg font-bold text-slate-800">BBB</span>
<span className="text-xs font-semibold bg-slate-800 text-white px-1 py-0.5 rounded">A+</span>
</div>
<div className="flex items-center gap-2 text-sm font-semibold text-slate-800 border px-3 py-1 rounded border-slate-300">
<iconify-icon icon="solar:medal-ribbon-star-linear"></iconify-icon>
                    LICENSED MASTER ELECTRICIAN
                </div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-50 text-red-600 mb-6">
<iconify-icon icon="solar:danger-triangle-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">A Tripping Breaker is a Warning Shot.</h2>
<p className="text-lg text-slate-500 leading-relaxed">
                Your electrical panel is trying to tell you something. Ignoring a buzzing noise, a warm breaker, or a fishy smell puts your home at risk of an electrical fire. Do not tape breakers on or ignore warning signs.
            </p>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">What Kind of Repair Do You Need?</h2>
<p className="text-slate-500">We don't guess. We test.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:bolt-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Breaker Replacement</h3>
<div className="mb-4">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Symptom</span>
<p className="text-sm text-slate-600 mt-1">One breaker won’t stay on or feels hot to the touch.</p>
</div>
<div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">The Fix</span>
<p className="text-sm text-slate-600 mt-1">Identify overload vs faulty breaker and replace with code-compliant part.</p>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:settings-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Busbar &amp; Lug Repair</h3>
<div className="mb-4">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Symptom</span>
<p className="text-sm text-slate-600 mt-1">Flickering lights in multiple rooms or buzzing panel.</p>
</div>
<div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">The Fix</span>
<p className="text-sm text-slate-600 mt-1">Repair loose connections, clean corrosion, re-torque lugs.</p>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:scanner-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Full Diagnostic</h3>
<div className="mb-4">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">Symptom</span>
<p className="text-sm text-slate-600 mt-1">Random outages or burning/fishy smells.</p>
</div>
<div>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wider">The Fix</span>
<p className="text-sm text-slate-600 mt-1">Thermal imaging &amp; full safety audit to find invisible faults.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2">
<h2 className="text-3xl font-semibold tracking-tight mb-4">Safety First. Payment Second.</h2>
<p className="text-slate-400 text-lg mb-8">Don't let budget constraints endanger your family. We offer flat-rate pricing so you know the cost before we start, and financing options for major repairs.</p>
<a className="inline-flex items-center text-white border border-slate-600 bg-slate-800 hover:bg-slate-700 font-medium rounded-lg text-sm px-6 py-3 transition-colors" href="#">
                        See Pricing Options
                    </a>
</div>
<div className="md:w-1/2 text-center md:text-right">
<p className="text-sm text-slate-400 uppercase tracking-wider font-medium mb-2">Repairs Starting At</p>
<div className="text-6xl font-semibold tracking-tight text-white mb-2">$199</div>
<p className="text-sm text-slate-400">Flat-rate. No surprises.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">The Risk of Ignoring Small Electrical Problems</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-12">
<div className="p-6 rounded-xl bg-orange-50 border border-orange-100">
<div className="text-orange-600 mb-4"><iconify-icon icon="solar:flame-linear" width="32"></iconify-icon></div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Panel Fire</h3>
<p className="text-sm text-slate-600">Loose connections create resistance and heat, eventually melting components and catching fire.</p>
</div>
<div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
<div className="text-slate-700 mb-4"><iconify-icon icon="solar:power-linear" width="32"></iconify-icon></div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Total Blackout</h3>
<p className="text-sm text-slate-600">Main breaker failure can leave your entire home without power for days while waiting for parts.</p>
</div>
<div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
<div className="text-slate-700 mb-4"><iconify-icon icon="solar:washing-machine-linear" width="32"></iconify-icon></div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Fried Appliances</h3>
<p className="text-sm text-slate-600">Voltage irregularities can destroy sensitive electronics and appliances worth $2,000+.</p>
</div>
</div>
<p className="text-center text-lg font-medium text-slate-900">Peace of mind is one phone call away.</p>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr>
<th className="py-4 px-6 text-sm font-semibold text-slate-500 uppercase tracking-wider w-1/4">Feature</th>
<th className="py-4 px-6 text-base font-bold text-slate-900 bg-white rounded-t-xl border-t border-x border-slate-200 w-1/4 shadow-sm">Your Company</th>
<th className="py-4 px-6 text-sm font-medium text-slate-600 w-1/4">Big Box Store</th>
<th className="py-4 px-6 text-sm font-medium text-slate-600 w-1/4">Low-Bid Contractor</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200">
<tr>
<td className="py-4 px-6 text-sm font-medium text-slate-900">Diagnostics</td>
<td className="py-4 px-6 text-sm text-slate-700 bg-white border-x border-slate-200 shadow-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
                                    Thermal Imaging &amp; Testing
                                </div>
</td>
<td className="py-4 px-6 text-sm text-slate-500">None</td>
<td className="py-4 px-6 text-sm text-slate-500">Guesswork</td>
</tr>
<tr>
<td className="py-4 px-6 text-sm font-medium text-slate-900">Fix Method</td>
<td className="py-4 px-6 text-sm text-slate-700 bg-white border-x border-slate-200 shadow-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
                                    Root Cause Repair
                                </div>
</td>
<td className="py-4 px-6 text-sm text-slate-500">N/A</td>
<td className="py-4 px-6 text-sm text-slate-500">Dangerous Hacks</td>
</tr>
<tr>
<td className="py-4 px-6 text-sm font-medium text-slate-900">Inventory</td>
<td className="py-4 px-6 text-sm text-slate-700 bg-white border-x border-slate-200 shadow-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
                                    Fully Stocked Trucks
                                </div>
</td>
<td className="py-4 px-6 text-sm text-slate-500">Order &amp; Wait</td>
<td className="py-4 px-6 text-sm text-slate-500">Store Run (Hourly Cost)</td>
</tr>
<tr>
<td className="py-4 px-6 text-sm font-medium text-slate-900">Warranty</td>
<td className="py-4 px-6 text-sm text-slate-700 bg-white rounded-b-xl border-x border-b border-slate-200 shadow-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold"></iconify-icon>
                                    3-Year Parts &amp; Labor
                                </div>
</td>
<td className="py-4 px-6 text-sm text-slate-500">Parts Only</td>
<td className="py-4 px-6 text-sm text-slate-500">Tail-light Warranty</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-2">We Find the Problem. We Fix It. We Verify It.</h2>
</div>
<div className="grid md:grid-cols-4 gap-8 relative mb-20">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -z-10 -translate-y-1/2"></div>
<div className="bg-white p-4 text-center">
<div className="w-12 h-12 mx-auto bg-slate-900 text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-lg ring-4 ring-white">1</div>
<h3 className="font-medium text-slate-900 mb-2">Diagnostic</h3>
<p className="text-xs text-slate-500">Full testing &amp; clear explanation</p>
</div>
<div className="bg-white p-4 text-center">
<div className="w-12 h-12 mx-auto bg-white border-2 border-slate-900 text-slate-900 rounded-full flex items-center justify-center font-bold mb-4 ring-4 ring-white">2</div>
<h3 className="font-medium text-slate-900 mb-2">Pricing</h3>
<p className="text-xs text-slate-500">Upfront flat-rate quote</p>
</div>
<div className="bg-white p-4 text-center">
<div className="w-12 h-12 mx-auto bg-white border-2 border-slate-900 text-slate-900 rounded-full flex items-center justify-center font-bold mb-4 ring-4 ring-white">3</div>
<h3 className="font-medium text-slate-900 mb-2">Repair</h3>
<p className="text-xs text-slate-500">Professional OEM parts</p>
</div>
<div className="bg-white p-4 text-center">
<div className="w-12 h-12 mx-auto bg-white border-2 border-slate-900 text-slate-900 rounded-full flex items-center justify-center font-bold mb-4 ring-4 ring-white">4</div>
<h3 className="font-medium text-slate-900 mb-2">Safety Check</h3>
<p className="text-xs text-slate-500">Load testing verification</p>
</div>
</div>
<div className="max-w-3xl mx-auto bg-blue-50 border border-blue-100 rounded-2xl p-8 text-center">
<div className="inline-flex items-center justify-center p-3 bg-white text-blue-600 rounded-full mb-4 shadow-sm">
<iconify-icon icon="solar:shield-check-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">The Fixed Right Promise</h3>
<p className="text-slate-600">If the repair fails within 3 years, we replace it for free. No questions asked.</p>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-center text-white">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-8">We’ve Repaired Over 2,000 Panels in [County Name]</h2>
<div className="relative w-full aspect-[2/1] bg-slate-800 rounded-xl overflow-hidden border border-slate-700 flex items-center justify-center">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="text-slate-500 flex flex-col items-center z-10">
<iconify-icon icon="solar:map-point-linear" width="48"></iconify-icon>
<span className="mt-2 font-medium tracking-wide text-sm">INTERACTIVE MAP LOADING...</span>
</div>

<div className="absolute top-1/4 left-1/4 text-blue-500"><iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon></div>
<div className="absolute top-1/2 left-1/2 text-blue-500"><iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon></div>
<div className="absolute bottom-1/3 right-1/4 text-blue-500"><iconify-icon icon="solar:map-point-bold" width="20"></iconify-icon></div>
</div>
<p className="mt-4 text-sm text-slate-400">Each pin represents a home protected.</p>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center text-slate-900 mb-16">Real Reviews From [City] Homeowners</h2>
<div className="grid md:grid-cols-2 gap-8">

<div className="p-8 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex text-yellow-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-slate-700 mb-6 italic">"I smelled burning fish near my panel. They came out within an hour, found a melted breaker, and replaced it. The tech showed me the burnt part. Very professional."</p>
<p className="text-sm font-semibold text-slate-900">Sarah M.</p>
</div>

<div className="p-8 bg-slate-50 rounded-xl border border-slate-100">
<div className="flex text-yellow-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-slate-700 mb-6 italic">"My lights were flickering in the kitchen. Another guy said I needed a whole new panel for $4k. These guys tightened a loose neutral lug for a fraction of the price."</p>
<p className="text-sm font-semibold text-slate-900">James P.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-semibold tracking-tight text-center text-slate-900 mb-12">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden open:shadow-sm transition-all duration-200">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-slate-900">
                        Is a buzzing panel an emergency?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform"><iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon></span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        Yes. Buzzing usually indicates arcing (electricity jumping across a gap), which creates intense heat and can lead to a fire. Turn off the main breaker if safe and call us immediately.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden open:shadow-sm transition-all duration-200">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-slate-900">
                        Can I replace the breaker myself?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform"><iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon></span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        We strongly advise against it. Panel interiors are live even when the main breaker is off. Incorrectly seating a breaker or using the wrong type can void your insurance and cause fires.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden open:shadow-sm transition-all duration-200">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-slate-900">
                        Do you offer 24/7 service?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform"><iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon></span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        Yes. We have technicians on call for electrical emergencies 24 hours a day, 7 days a week.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden open:shadow-sm transition-all duration-200">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-slate-900">
                        What does a burning smell mean?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform"><iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon></span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        A burning plastic or "fishy" smell near an outlet or panel indicates melting wire insulation. This is an immediate fire hazard.
                    </div>
</details>
<details className="group bg-white rounded-lg border border-slate-200 overflow-hidden open:shadow-sm transition-all duration-200">
<summary className="flex items-center justify-between p-5 cursor-pointer font-medium text-slate-900">
                        How much does a diagnostic cost?
                        <span className="text-slate-400 group-open:rotate-180 transition-transform"><iconify-icon icon="solar:alt-arrow-down-linear" width="20"></iconify-icon></span>
</summary>
<div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        We offer a flat-rate diagnostic fee that we will quote you over the phone before we arrive. No hidden hourly rates.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white text-center">
<div className="max-w-2xl mx-auto px-6">
<h2 className="text-4xl font-semibold tracking-tight text-slate-900 mb-6">Don’t Let a Small Spark Become a Big Fire.</h2>
<p className="text-lg text-slate-500 mb-10">Our trucks are already in your area. Secure your home’s safety today.</p>
<a className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-200" href="#schedule">
                SCHEDULE REPAIR NOW
                <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-slate-50 border-t border-slate-200 py-12">
<div className="max-w-7xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<div className="text-lg font-bold tracking-tight text-slate-900 flex items-center gap-2 justify-center md:justify-start mb-2">
<iconify-icon className="text-slate-400" icon="solar:bolt-circle-linear" width="20"></iconify-icon>
                    ELECTROFIX
                </div>
<p className="text-xs text-slate-500">© 2024 Electrofix Inc.</p>
<p className="text-xs text-slate-500 mt-1">Licensed Electrical Contractor #12345</p>
</div>
<div className="text-sm text-slate-500">
<p>123 Main Street, Suite 100, City, ST</p>
<div className="flex gap-4 justify-center md:justify-start mt-2">
<a className="hover:text-slate-900 underline" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 underline" href="#">Terms of Service</a>
</div>
</div>
<div className="text-right">
<p className="text-xs text-slate-400 mb-1">Serving the following areas:</p>
<div className="flex gap-2 text-xs font-medium text-slate-600 justify-center md:justify-end">
<span>City 1</span> • <span>City 2</span> • <span>City 3</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
