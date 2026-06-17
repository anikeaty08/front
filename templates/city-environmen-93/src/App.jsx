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
      

<nav className="fixed top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-emerald-600 text-white">
<span className="iconify" data-icon="lucide:leaf" data-width="14"></span>
</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900">ALMATY.ECO</span>
</div>
<div className="hidden gap-6 md:flex">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900" href="#">Monitoring</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900" href="#">Initiatives</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900" href="#">Documents</a>
</div>
<button className="rounded-md bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-zinc-800">
                Log in
            </button>
</div>
</nav>

<header className="pt-32 pb-16 px-6">
<div className="mx-auto max-w-5xl">
<h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">
                Cleaner air for <br className="hidden md:block"/>
<span className="text-zinc-400">our future in Almaty.</span>
</h1>
<p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-500">
                Transparency in environmental data, citizen reporting, and accessible benefits for eco-conscious residents.
            </p>
</div>
</header>
<main className="mx-auto max-w-5xl px-6 pb-24 space-y-32">

<section>
<div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">What is already being done</h2>
<p className="mt-1 text-sm text-zinc-500">Latest updates on environmental initiatives.</p>
</div>
<div className="flex flex-wrap gap-2">
<button className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50">City</button>
<button className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50">Business</button>
<button className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">Initiatives</button>
<button className="rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-600 hover:border-zinc-300 hover:bg-zinc-50">Eco-education</button>
</div>
</div>
<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

<article className="group relative flex flex-col rounded-xl border border-zinc-200 bg-white p-5 transition hover:shadow-md">
<div className="mb-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700">
<span className="iconify" data-icon="lucide:badge-check" data-width="12"></span>
                            Verified source
                        </span>
<span className="text-[10px] text-zinc-400">2 hrs ago</span>
</div>
<h3 className="mb-2 text-base font-semibold leading-tight text-zinc-900 group-hover:text-emerald-600">New filters installed at CHP-2</h3>
<p className="mb-4 text-sm leading-relaxed text-zinc-500">Modernization of the heating plant continues with the installation of new particulate filters reducing emissions by 15%.</p>
<div className="mt-auto pt-4 border-t border-zinc-100">
<span className="text-xs font-medium text-emerald-600">Read full report →</span>
</div>
</article>

<article className="group relative flex flex-col rounded-xl border border-zinc-200 bg-white p-5 transition hover:shadow-md">
<div className="mb-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 text-[10px] font-medium text-blue-700">
<span className="iconify" data-icon="lucide:badge-check" data-width="12"></span>
                            Verified source
                        </span>
<span className="text-[10px] text-zinc-400">Yesterday</span>
</div>
<h3 className="mb-2 text-base font-semibold leading-tight text-zinc-900 group-hover:text-emerald-600">Kok-Tobe planting initiative</h3>
<p className="mb-4 text-sm leading-relaxed text-zinc-500">Over 500 volunteers gathered this weekend to plant 2,000 deciduous trees on the slopes to strengthen soil.</p>
<div className="mt-auto pt-4 border-t border-zinc-100">
<span className="text-xs font-medium text-emerald-600">Read full report →</span>
</div>
</article>

<article className="group relative flex flex-col rounded-xl border border-zinc-200 bg-white p-5 transition hover:shadow-md">
<div className="mb-4 flex items-center gap-2">
<span className="inline-flex items-center gap-1 rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] font-medium text-zinc-500">
                            Community
                        </span>
<span className="text-[10px] text-zinc-400">3 days ago</span>
</div>
<h3 className="mb-2 text-base font-semibold leading-tight text-zinc-900 group-hover:text-emerald-600">Recycling points map updated</h3>
<p className="mb-4 text-sm leading-relaxed text-zinc-500">12 new glass and plastic collection points have been added to the Bostandyk district interactive map.</p>
<div className="mt-auto pt-4 border-t border-zinc-100">
<span className="text-xs font-medium text-emerald-600">Read full report →</span>
</div>
</article>
</div>
<div className="mt-8 flex justify-center">
<button className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-50 hover:text-zinc-900">
                    View all materials
                </button>
</div>
</section>

<section className="grid grid-cols-1 gap-12 lg:grid-cols-12">
<div className="lg:col-span-4">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Report contamination</h2>
<p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    Help us identify pollution sources. Your report will be processed immediately by the mobile eco-patrol.
                </p>
<div className="mt-8 flex items-center gap-3 rounded-lg bg-emerald-50 border border-emerald-100 p-4">
<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
<span className="iconify" data-icon="lucide:check" data-width="16"></span>
</div>
<div>
<p className="text-xs font-medium text-emerald-800">Status Example</p>
<p className="text-xs text-emerald-600">"Accepted — response within 3 days"</p>
</div>
</div>
</div>
<div className="lg:col-span-8">
<div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">

<div className="mb-8">
<div className="flex items-center justify-between text-xs font-medium text-zinc-500">
<span>Filing report</span>
<span className="text-emerald-600">2 steps left</span>
</div>
<div className="mt-2 h-1.5 w-full rounded-full bg-zinc-100">
<div className="h-1.5 w-1/3 rounded-full bg-emerald-500"></div>
</div>
</div>
<form className="space-y-6">

<div>
<label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-zinc-400">1. Source Type</label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer">
<input className="custom-input peer sr-only" name="source" type="radio"/>
<div className="flex flex-col items-center justify-center rounded-lg border border-zinc-200 p-3 text-center transition hover:border-emerald-400 peer-focus:ring-2 peer-focus:ring-emerald-500/20">
<span className="iconify mb-2 text-zinc-400" data-icon="lucide:car-front" data-width="20"></span>
<span className="text-xs font-medium">Car</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-input peer sr-only" name="source" type="radio"/>
<div className="flex flex-col items-center justify-center rounded-lg border border-zinc-200 p-3 text-center transition hover:border-emerald-400 peer-focus:ring-2 peer-focus:ring-emerald-500/20">
<span className="iconify mb-2 text-zinc-400" data-icon="lucide:utensils" data-width="20"></span>
<span className="text-xs font-medium">Cafe/BBQ</span>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-input peer sr-only" name="source" type="radio"/>
<div className="flex flex-col items-center justify-center rounded-lg border border-zinc-200 p-3 text-center transition hover:border-emerald-400 peer-focus:ring-2 peer-focus:ring-emerald-500/20">
<span className="iconify mb-2 text-zinc-400" data-icon="lucide:help-circle" data-width="20"></span>
<span className="text-xs font-medium">Other</span>
</div>
</label>
</div>
</div>

<div>
<label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-zinc-400">2. What's happening</label>
<div className="flex flex-wrap gap-2">
<label className="cursor-pointer">
<input className="custom-input peer sr-only" type="checkbox"/>
<div className="rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-50">
                                        Thick black smoke
                                    </div>
</label>
<label className="cursor-pointer">
<input className="custom-input peer sr-only" type="checkbox"/>
<div className="rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-50">
                                        Pungent chemical odor
                                    </div>
</label>
<label className="cursor-pointer">
<input className="custom-input peer sr-only" type="checkbox"/>
<div className="rounded-md border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600 transition hover:bg-zinc-50">
                                        Burning waste
                                    </div>
</label>
</div>
</div>

<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
<div>
<label className="mb-2 block text-xs font-medium text-zinc-700">Media Evidence</label>
<div className="flex w-full items-center justify-center rounded-lg border border-dashed border-zinc-300 bg-zinc-50 px-6 py-8 transition hover:bg-zinc-100">
<div className="text-center">
<span className="iconify mx-auto text-zinc-400" data-icon="lucide:upload-cloud" data-width="20"></span>
<div className="mt-2 text-xs text-zinc-500">
<span className="font-medium text-emerald-600">Click to upload</span> photo/video
                                        </div>
</div>
</div>
</div>
<div className="space-y-4">
<div>
<label className="mb-2 block text-xs font-medium text-zinc-700">Location</label>
<div className="relative">
<span className="iconify absolute left-3 top-2.5 text-zinc-400" data-icon="lucide:map-pin" data-width="16"></span>
<input className="w-full rounded-lg border border-zinc-200 py-2 pl-9 pr-3 text-sm placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Enter address or pin on map" type="text"/>
</div>
</div>
<div>
<label className="mb-2 block text-xs font-medium text-zinc-700">Phone for updates</label>
<input className="w-full rounded-lg border border-zinc-200 px-3 py-2 text-sm placeholder:text-zinc-400 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="+7 (___) ___-__-__" type="tel"/>
</div>
</div>
</div>

<div className="border-t border-zinc-100 pt-6">
<label className="mb-4 flex cursor-pointer items-start gap-3">
<div className="relative flex items-center">
<input className="peer h-4 w-4 appearance-none rounded border border-zinc-300 bg-white checked:border-emerald-500 checked:bg-emerald-500 focus:ring-2 focus:ring-emerald-500/20 focus:ring-offset-0" type="checkbox"/>
<span className="iconify pointer-events-none absolute left-0.5 top-0.5 hidden text-white peer-checked:block" data-icon="lucide:check" data-width="12"></span>
</div>
<span className="text-xs text-zinc-500">
                                    I agree to the processing of personal data for the purpose of handling this environmental complaint.
                                </span>
</label>
<button className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 disabled:opacity-50" type="button">
                                Submit Complaint
                            </button>
</div>
</form>
</div>
</div>
</section>

<section className="relative overflow-hidden rounded-2xl bg-zinc-900 px-6 py-12 text-center text-white md:px-12">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 mx-auto max-w-2xl">
<div className="mb-6 flex justify-center">
<span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-emerald-300 backdrop-blur-sm">
                        For Responsible Citizens
                    </span>
</div>
<h2 className="mb-4 text-3xl font-semibold tracking-tight">Benefits and support measures</h2>
<p className="mb-8 text-zinc-400">
                    Get access to free public transport on smog days, tax deductions for electric vehicles, and subsidies for gas heating installation.
                </p>
<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
<button className="w-full rounded-lg bg-emerald-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-500 sm:w-auto">
                        Submit an application
                    </button>
<span className="text-xs text-zinc-500">Requires registration in Personal Cabinet</span>
</div>
</div>
</section>

<section>
<div className="mb-8 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Learn the environmental class</h2>
<p className="mt-2 text-sm text-zinc-500">Check if your vehicle meets the Low Emission Zone standards.</p>
</div>
<div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm">

<div className="flex border-b border-zinc-200 bg-zinc-50/50">
<button className="flex-1 border-b-2 border-emerald-500 bg-white py-3 text-sm font-medium text-zinc-900">Automatically</button>
<button className="flex-1 border-b-2 border-transparent py-3 text-sm font-medium text-zinc-500 hover:text-zinc-700">Manually</button>
</div>
<div className="grid gap-0 md:grid-cols-2">

<div className="p-6 md:p-8">
<form className="space-y-4">
<div>
<label className="mb-1 block text-xs font-medium text-zinc-700">GRNZ (License Plate)</label>
<input className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm uppercase tracking-wide focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" type="text" value="123 ABC 02"/>
</div>
<div>
<label className="mb-1 block text-xs font-medium text-zinc-700">Owner's IIN</label>
<input className="w-full rounded-md border border-zinc-200 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Enter 12 digits" type="text"/>
</div>
<button className="mt-2 w-full rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-200" type="button">
                                Check Database
                            </button>
</form>
</div>

<div className="border-t border-zinc-200 bg-zinc-50/50 p-6 md:border-l md:border-t-0 md:p-8">
<div className="flex h-full flex-col justify-center">
<div className="mb-4 flex items-center gap-3">
<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-xl font-bold text-emerald-700">4</div>
<div>
<p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Eco-Class</p>
<p className="text-sm font-medium text-zinc-900">Euro-4 Standard</p>
</div>
</div>
<div className="space-y-2 text-xs text-zinc-600">
<div className="flex justify-between border-b border-zinc-200 pb-1">
<span>CO Emissions</span>
<span className="font-medium">0.8 g/km</span>
</div>
<div className="flex justify-between border-b border-zinc-200 pb-1">
<span>NOx</span>
<span className="font-medium">0.06 g/km</span>
</div>
</div>
<div className="mt-4 rounded-md bg-white border border-zinc-200 p-3">
<p className="text-[11px] leading-tight text-zinc-500">
<span className="font-medium text-zinc-900">Recommendation:</span> 
                                    Allowed in Yellow Zones. Eligible for 10% parking discount in municipal areas.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-3xl">
<h2 className="mb-8 text-center text-2xl font-semibold tracking-tight text-zinc-900">Questions &amp; Answers</h2>
<div className="divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white">

<details className="group p-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-zinc-900">
                        What is a Low Emission Zone (LEZ)?
                        <span className="iconify text-zinc-400 transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="mt-2 text-sm leading-relaxed text-zinc-600">
<p>An LEZ is a geographically defined area where access for some polluting vehicles is restricted or deterred with the aim of improving air quality.</p>
<a className="mt-2 inline-block text-xs font-medium text-emerald-600 hover:underline" href="#">For more information in the documents →</a>
</div>
</details>

<details className="group p-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-zinc-900">
                        What tariffs are in effect?
                        <span className="iconify text-zinc-400 transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="mt-2 text-sm leading-relaxed text-zinc-600">
<p>Tariffs vary based on vehicle class and time of day. Class 0-2 vehicles have higher surcharges during peak hours.</p>
<a className="mt-2 inline-block text-xs font-medium text-emerald-600 hover:underline" href="#">For more information in the documents →</a>
</div>
</details>

<details className="group p-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-zinc-900">
                        What happens when you enter without paying?
                        <span className="iconify text-zinc-400 transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="mt-2 text-sm leading-relaxed text-zinc-600">
<p>Cameras with license plate recognition will record the violation, and a fine will be mailed to the registered owner's address.</p>
<a className="mt-2 inline-block text-xs font-medium text-emerald-600 hover:underline" href="#">For more information in the documents →</a>
</div>
</details>

<details className="group p-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-zinc-900">
                        How do I pay online?
                        <span className="iconify text-zinc-400 transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="mt-2 text-sm leading-relaxed text-zinc-600">
<p>Payments can be made via the "Almaty Eco" mobile app, banking apps (Kaspi, Halyk), or directly through this portal.</p>
<a className="mt-2 inline-block text-xs font-medium text-emerald-600 hover:underline" href="#">For more information in the documents →</a>
</div>
</details>

<details className="group p-4">
<summary className="flex cursor-pointer items-center justify-between font-medium text-zinc-900">
                        Which areas are included in the LEZ?
                        <span className="iconify text-zinc-400 transition-transform group-open:rotate-180" data-icon="lucide:chevron-down" data-width="20"></span>
</summary>
<div className="mt-2 text-sm leading-relaxed text-zinc-600">
<p>Currently, the "Golden Square" and the upper part of the city above Al-Farabi Avenue are designated LEZs.</p>
<a className="mt-2 inline-block text-xs font-medium text-emerald-600 hover:underline" href="#">For more information in the documents →</a>
</div>
</details>
</div>
</section>
</main>

<footer className="border-t border-zinc-100 bg-zinc-50 py-12 px-6">
<div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="iconify text-zinc-400" data-icon="lucide:leaf" data-width="20"></span>
<span className="text-sm font-semibold tracking-tight text-zinc-900">ALMATY.ECO</span>
</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-zinc-900" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900" href="#">Terms of Service</a>
<a className="hover:text-zinc-900" href="#">Rules for Atmospheric Protection</a>
</div>
<p className="text-xs text-zinc-400">© 2024 Ecology Department of Almaty.</p>
</div>
</footer>

    </>
  );
}
