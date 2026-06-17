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
      

<nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-2">
<span className="iconify text-[#0056D2]" data-height="24" data-icon="lucide:shield-check" data-width="24"></span>
<span className="text-lg font-semibold tracking-tight text-slate-900">BHARATSURE</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="text-slate-900 hover:text-[#0056D2] transition-colors" href="#">Dashboard</a>
<a className="text-slate-500 hover:text-[#0056D2] transition-colors" href="#">Policies</a>
<a className="text-slate-500 hover:text-[#0056D2] transition-colors" href="#">Claims</a>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 border border-slate-200">
<span className="iconify" data-icon="lucide:user" data-width="16"></span>
</div>
</div>
</div>
</div>
</nav>

<main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

<div className="mb-10 text-center">
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Group Health Insurance</h1>
<p className="mt-2 text-base text-slate-500">Transparent pricing for teams of all sizes. Powered by Bharatsure.</p>

<div className="mt-6 inline-flex rounded-lg bg-slate-100 p-1 shadow-inner">
<button className="flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#0056D2] shadow-sm ring-1 ring-slate-200">
<span className="iconify" data-icon="lucide:rocket" data-width="16"></span>
                    New Policy
                </button>
<button className="flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900">
<span className="iconify" data-icon="lucide:refresh-cw" data-width="16"></span>
                    Renewal
                </button>
</div>
</div>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">

<div className="lg:col-span-8 space-y-8">

<section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-5 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">1. Company Details</h2>
<span className="rounded bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">Small Business Rates Apply</span>
</div>
<div className="grid gap-6 sm:grid-cols-2">

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Company City</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-slate-400">
<span className="iconify" data-icon="lucide:map-pin" data-width="18"></span>
</span>
<select className="w-full appearance-none rounded-lg border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:border-[#0056D2] focus:outline-none focus:ring-1 focus:ring-[#0056D2]">
<option>Bengaluru (Tier 1)</option>
<option>Mumbai (Tier 1)</option>
<option>Delhi NCR (Tier 1)</option>
<option>Pune (Tier 2)</option>
<option>Hyderabad (Tier 1)</option>
</select>
<span className="pointer-events-none absolute right-3 top-3 text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</div>
<p className="text-xs text-slate-400">Location affects your premium pricing tiers.</p>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Total Employees</label>
<div className="relative">
<span className="absolute left-3 top-2.5 text-slate-400">
<span className="iconify" data-icon="lucide:users" data-width="18"></span>
</span>
<input className="w-full rounded-lg border border-slate-300 py-2.5 pl-10 pr-4 text-sm text-slate-900 focus:border-[#0056D2] focus:outline-none focus:ring-1 focus:ring-[#0056D2]" type="number" value="18"/>
</div>
<p className="text-xs text-orange-600 flex items-center gap-1">
<span className="iconify" data-icon="lucide:info" data-width="12"></span>
                                Minimum 10 lives required for Maternity.
                            </p>
</div>
</div>
</section>

<section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-5">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">2. Coverage Plan</h2>
</div>

<div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">

<label className="cursor-pointer group relative">
<input className="peer sr-only" name="plan" type="radio"/>
<div className="h-full rounded-lg border border-slate-200 bg-slate-50 p-4 transition-all peer-checked:border-[#0056D2] peer-checked:bg-blue-50/50 peer-checked:shadow-sm hover:border-slate-300">
<div className="flex items-center justify-between">
<h3 className="font-semibold text-slate-900">Silver</h3>
<span className="hidden peer-checked:block text-[#0056D2]">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="18"></span>
</span>
</div>
<div className="mt-4 space-y-2">
<p className="text-sm text-slate-600">Room Rent: 1%</p>
<p className="text-xs font-medium text-green-600 bg-green-100 inline-block px-2 py-0.5 rounded">10% Discount</p>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input checked="" className="peer sr-only" name="plan" type="radio"/>
<div className="h-full rounded-lg border border-slate-200 bg-white p-4 transition-all peer-checked:border-[#0056D2] peer-checked:bg-blue-50/50 peer-checked:shadow-sm hover:border-slate-300 ring-1 ring-transparent peer-checked:ring-[#0056D2]">
<div className="flex items-center justify-between">
<h3 className="font-semibold text-slate-900">Gold</h3>
<span className="hidden peer-checked:block text-[#0056D2]">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="18"></span>
</span>
</div>
<div className="mt-4 space-y-2">
<p className="text-sm text-slate-600">Room Rent: 2%</p>
<p className="text-xs font-medium text-green-600 bg-green-100 inline-block px-2 py-0.5 rounded">5% Discount</p>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" name="plan" type="radio"/>
<div className="h-full rounded-lg border border-slate-200 bg-slate-50 p-4 transition-all peer-checked:border-[#0056D2] peer-checked:bg-blue-50/50 peer-checked:shadow-sm hover:border-slate-300">
<div className="flex items-center justify-between">
<h3 className="font-semibold text-slate-900">Platinum</h3>
<span className="hidden peer-checked:block text-[#0056D2]">
<span className="iconify" data-icon="lucide:check-circle-2" data-width="18"></span>
</span>
</div>
<div className="mt-4 space-y-2">
<p className="text-sm text-slate-600">No Limit</p>
<p className="text-xs font-medium text-slate-500 bg-slate-100 inline-block px-2 py-0.5 rounded">Standard Rate</p>
</div>
</div>
</label>
</div>
<div className="grid gap-6 sm:grid-cols-2">

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Sum Insured</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-300 bg-white py-2.5 pl-3 pr-10 text-sm text-slate-900 focus:border-[#0056D2] focus:outline-none focus:ring-1 focus:ring-[#0056D2]">
<option>₹ 2 Lakhs</option>
<option>₹ 3 Lakhs</option>
<option selected="">₹ 5 Lakhs</option>
<option>₹ 10 Lakhs</option>
</select>
<span className="pointer-events-none absolute right-3 top-3 text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Family Definition</label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border border-slate-300 bg-white py-2.5 pl-3 pr-10 text-sm text-slate-900 focus:border-[#0056D2] focus:outline-none focus:ring-1 focus:ring-[#0056D2]">
<option value="E">Employee Only (E)</option>
<option selected="" value="ESC">Employee + Spouse + Kids (ESC)</option>
<option className="text-slate-400" disabled="" value="ESCP">With Parents (Requires 25+ Users)</option>
</select>
<span className="pointer-events-none absolute right-3 top-3 text-slate-400">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</div>
</div>
</div>

<div className="mt-6 flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 p-4">
<div>
<p className="text-sm font-medium text-slate-900">Maternity Cover</p>
<p className="text-xs text-slate-500">Coverage for delivery expenses (Normal/C-Section)</p>
</div>
<label className="relative inline-flex cursor-pointer items-center">
<input className="peer sr-only" type="checkbox" value=""/>
<div className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#0056D2] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300"></div>
</label>
</div>
</section>

<section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
<div className="mb-5 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight text-slate-900">3. Enhance Coverage</h2>
<span className="text-xs text-slate-400">Optional Add-ons</span>
</div>
<div className="space-y-4">

<div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border border-slate-200 p-4 transition-colors hover:bg-slate-50">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[#0056D2]">
<span className="iconify" data-icon="lucide:stethoscope" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Doctor Teleconsultations</h4>
<div className="mt-1 flex gap-2">
<select className="rounded border-none bg-slate-100 py-1 pl-2 pr-8 text-xs font-medium text-slate-700 focus:ring-1 focus:ring-blue-500">
<option>GP Only</option>
<option>GP + Specialists</option>
</select>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-6 sm:mt-0">
<span className="text-sm font-medium text-slate-900">₹249<span className="text-xs font-normal text-slate-500">/user</span></span>
<label className="relative inline-flex cursor-pointer items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="peer h-5 w-9 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#0056D2] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
</label>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border border-slate-200 p-4 transition-colors hover:bg-slate-50">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-600">
<span className="iconify" data-icon="lucide:activity" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Annual Health Checkup</h4>
<div className="mt-1 flex gap-2">
<select className="rounded border-none bg-slate-100 py-1 pl-2 pr-8 text-xs font-medium text-slate-700 focus:ring-1 focus:ring-blue-500">
<option>Basic (60 Tests)</option>
<option>Comprehensive (85 Tests)</option>
</select>
</div>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-6 sm:mt-0">
<span className="text-sm font-medium text-slate-900">₹299<span className="text-xs font-normal text-slate-500">/user</span></span>
<label className="relative inline-flex cursor-pointer items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="peer h-5 w-9 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#0056D2] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
</label>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between rounded-lg border border-slate-200 p-4 transition-colors hover:bg-slate-50">
<div className="flex items-start gap-4">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-50 text-orange-600">
<span className="iconify" data-icon="lucide:dumbbell" data-width="20"></span>
</div>
<div>
<h4 className="text-sm font-medium text-slate-900">Gym Membership (Cult)</h4>
<p className="mt-1 text-xs text-slate-500">Access to 200+ centers nationwide</p>
</div>
</div>
<div className="mt-4 flex items-center justify-between gap-6 sm:mt-0">
<span className="text-sm font-medium text-slate-900">₹1499<span className="text-xs font-normal text-slate-500">/user</span></span>
<label className="relative inline-flex cursor-pointer items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="peer h-5 w-9 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-[#0056D2] peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
</label>
</div>
</div>
</div>
</section>
<div className="flex justify-end gap-4 py-4">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900">Save draft</button>
</div>
</div>

<div className="lg:col-span-4">
<div className="sticky top-24 rounded-xl border border-slate-200 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden">

<div className="bg-slate-50 px-6 py-4 border-b border-slate-100">
<h3 className="text-sm font-semibold uppercase tracking-tight text-slate-900">Indicative Quote</h3>
<p className="text-xs text-slate-500 mt-1">Ref: BHS-QT-2023-892</p>
</div>

<div className="px-6 py-5">
<table className="w-full text-sm">
<tbody className="divide-y divide-slate-100">
<tr className="group">
<td className="py-3 text-slate-600">Base Premium <span className="block text-[10px] text-slate-400">Gold Plan (5L)</span></td>
<td className="py-3 text-right font-medium text-slate-900">₹ 3,400</td>
</tr>
<tr>
<td className="py-3 text-slate-600">Add-ons <span className="block text-[10px] text-slate-400">Teleconsultation</span></td>
<td className="py-3 text-right font-medium text-slate-900">₹ 249</td>
</tr>
<tr>
<td className="py-3 text-slate-600">Discounts <span className="block text-[10px] text-green-600">Gold Tier Applied</span></td>
<td className="py-3 text-right font-medium text-green-600">- ₹ 170</td>
</tr>
</tbody>
</table>

<div className="mt-6 rounded-lg bg-blue-50/50 p-4 text-center border border-blue-100">
<p className="text-xs font-medium uppercase tracking-wider text-blue-800">Premium Per Employee</p>
<p className="mt-1 text-3xl font-semibold tracking-tight text-[#0056D2]">₹ 3,479</p>
<p className="text-xs text-blue-600/80">/ year</p>
</div>
</div>

<div className="border-t border-slate-100 bg-slate-50/50 px-6 py-5">
<div className="mb-6 flex justify-between items-end">
<div>
<p className="text-sm font-medium text-slate-500">Total Annual Cost</p>
<p className="text-[10px] text-slate-400">For 18 Employees</p>
</div>
<div className="text-right">
<p className="text-xl font-bold text-slate-900">₹ 62,622</p>
<p className="text-[10px] text-slate-400">*Excludes GST (18%)</p>
</div>
</div>
<button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0056D2] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
<span className="iconify" data-icon="lucide:download" data-width="16"></span>
                            Download Quote PDF
                        </button>
<button className="mt-3 flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:text-slate-900">
<span className="iconify" data-icon="lucide:phone" data-width="16"></span>
                            Talk to an Expert
                        </button>
<p className="mt-4 text-center text-[10px] text-slate-400 leading-tight">
                            This is an indicative quote based on standard actuarial tables. Final premium may vary post-underwriting.
                        </p>
</div>
</div>
</div>
</div>
</main>

<footer className="mt-12 border-t border-slate-200 bg-white py-8">
<div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
<p className="text-xs text-slate-400">© 2023 Bharatsure Technologies Pvt Ltd. All rights reserved.</p>
</div>
</footer>

    </>
  );
}
