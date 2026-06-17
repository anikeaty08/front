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
      

<main className="w-full max-w-2xl px-6 py-12 md:py-20">

<header className="text-center mb-12 space-y-4">
<div className="flex justify-center mb-8">

<img alt="Cradle Premier Network" className="h-24 w-auto object-contain mix-blend-multiply opacity-90" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a723ed05-ce8a-4418-958a-1e5dd54af52c_320w.png?w=800&amp;q=80"/>
</div>
<h1 className="text-3xl md:text-4xl font-medium tracking-tight text-stone-900">Project Evaluation</h1>
<p className="text-lg text-stone-500 font-light max-w-md mx-auto leading-relaxed">
                Thank you for choosing Cradle. Please evaluate the services provided during our recent engagement.
            </p>
</header>

<form className="bg-white rounded-3xl shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-stone-200/60 overflow-hidden">

<div className="h-1 w-full bg-stone-50">
<div className="h-full w-1/3 bg-stone-900"></div>
</div>
<div className="p-8 md:p-12 space-y-12">

<div className="space-y-6">
<div className="flex items-center justify-between">
<label className="text-xl font-medium tracking-tight text-stone-800">How would you rate the overall delivery?</label>
<iconify-icon className="text-stone-300" icon="solar:chart-square-linear" width="24"></iconify-icon>
</div>
<div className="grid grid-cols-5 md:grid-cols-10 gap-2">


<div className="relative group">
<input className="peer sr-only" id="nps-1" name="nps" type="radio"/>
<label className="flex items-center justify-center w-full aspect-square rounded-lg border border-stone-200 text-stone-500 text-base font-medium cursor-pointer transition-all duration-200 hover:border-stone-400 peer-checked:bg-stone-900 peer-checked:text-[#F9F8F4] peer-checked:border-stone-900" htmlFor="nps-1">1</label>
</div>

<div className="relative group">
<input className="peer sr-only" id="nps-2" name="nps" type="radio"/>
<label className="flex items-center justify-center w-full aspect-square rounded-lg border border-stone-200 text-stone-500 text-base font-medium cursor-pointer transition-all duration-200 hover:border-stone-400 peer-checked:bg-stone-900 peer-checked:text-[#F9F8F4] peer-checked:border-stone-900" htmlFor="nps-2">2</label>
</div>

<div className="relative group">
<input className="peer sr-only" id="nps-3" name="nps" type="radio"/>
<label className="flex items-center justify-center w-full aspect-square rounded-lg border border-stone-200 text-stone-500 text-base font-medium cursor-pointer transition-all duration-200 hover:border-stone-400 peer-checked:bg-stone-900 peer-checked:text-[#F9F8F4] peer-checked:border-stone-900" htmlFor="nps-3">3</label>
</div>

<div className="relative group">
<input className="peer sr-only" id="nps-4" name="nps" type="radio"/>
<label className="flex items-center justify-center w-full aspect-square rounded-lg border border-stone-200 text-stone-500 text-base font-medium cursor-pointer transition-all duration-200 hover:border-stone-400 peer-checked:bg-stone-900 peer-checked:text-[#F9F8F4] peer-checked:border-stone-900" htmlFor="nps-4">4</label>
</div>

<div className="relative group">
<input className="peer sr-only" id="nps-5" name="nps" type="radio"/>
<label className="flex items-center justify-center w-full aspect-square rounded-lg border border-stone-200 text-stone-500 text-base font-medium cursor-pointer transition-all duration-200 hover:border-stone-400 peer-checked:bg-stone-900 peer-checked:text-[#F9F8F4] peer-checked:border-stone-900" htmlFor="nps-5">5</label>
</div>

<div className="relative group">
<input className="peer sr-only" id="nps-6" name="nps" type="radio"/>
<label className="flex items-center justify-center w-full aspect-square rounded-lg border border-stone-200 text-stone-500 text-base font-medium cursor-pointer transition-all duration-200 hover:border-stone-400 peer-checked:bg-stone-900 peer-checked:text-[#F9F8F4] peer-checked:border-stone-900" htmlFor="nps-6">6</label>
</div>

<div className="relative group">
<input className="peer sr-only" id="nps-7" name="nps" type="radio"/>
<label className="flex items-center justify-center w-full aspect-square rounded-lg border border-stone-200 text-stone-500 text-base font-medium cursor-pointer transition-all duration-200 hover:border-stone-400 peer-checked:bg-stone-900 peer-checked:text-[#F9F8F4] peer-checked:border-stone-900" htmlFor="nps-7">7</label>
</div>

<div className="relative group">
<input className="peer sr-only" id="nps-8" name="nps" type="radio"/>
<label className="flex items-center justify-center w-full aspect-square rounded-lg border border-stone-200 text-stone-500 text-base font-medium cursor-pointer transition-all duration-200 hover:border-stone-400 peer-checked:bg-stone-900 peer-checked:text-[#F9F8F4] peer-checked:border-stone-900" htmlFor="nps-8">8</label>
</div>

<div className="relative group">
<input className="peer sr-only" id="nps-9" name="nps" type="radio"/>
<label className="flex items-center justify-center w-full aspect-square rounded-lg border border-stone-200 text-stone-500 text-base font-medium cursor-pointer transition-all duration-200 hover:border-stone-400 peer-checked:bg-stone-900 peer-checked:text-[#F9F8F4] peer-checked:border-stone-900" htmlFor="nps-9">9</label>
</div>

<div className="relative group">
<input className="peer sr-only" id="nps-10" name="nps" type="radio"/>
<label className="flex items-center justify-center w-full aspect-square rounded-lg border border-stone-200 text-stone-500 text-base font-medium cursor-pointer transition-all duration-200 hover:border-stone-400 peer-checked:bg-stone-900 peer-checked:text-[#F9F8F4] peer-checked:border-stone-900" htmlFor="nps-10">10</label>
</div>
</div>
<div className="flex justify-between text-base text-stone-400 font-light px-1">
<span>Dissatisfied</span>
<span>Exceptional</span>
</div>
</div>

<div className="h-px bg-stone-100"></div>

<div className="space-y-6">
<label className="text-xl font-medium tracking-tight text-stone-800 block">Which services were utilized?</label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<label className="cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="p-4 rounded-xl border border-stone-200 bg-white transition-all duration-200 hover:border-stone-400 peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 peer-checked:bg-stone-50/50 flex items-center space-x-4">
<div className="bg-stone-100 p-2.5 rounded-lg text-stone-600 group-hover:bg-stone-200 transition-colors peer-checked:bg-stone-900 peer-checked:text-white flex items-center justify-center">
<iconify-icon icon="solar:megaphone-linear" width="22"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-base font-medium text-stone-900">Marketing Strategy</h3>
</div>
<div className="w-5 h-5 border border-stone-300 rounded-full flex items-center justify-center peer-checked:border-stone-900 peer-checked:bg-stone-900">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="p-4 rounded-xl border border-stone-200 bg-white transition-all duration-200 hover:border-stone-400 peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 peer-checked:bg-stone-50/50 flex items-center space-x-4">
<div className="bg-stone-100 p-2.5 rounded-lg text-stone-600 group-hover:bg-stone-200 transition-colors peer-checked:bg-stone-900 peer-checked:text-white flex items-center justify-center">
<iconify-icon icon="solar:videocamera-record-linear" width="22"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-base font-medium text-stone-900">Videography</h3>
</div>
<div className="w-5 h-5 border border-stone-300 rounded-full flex items-center justify-center peer-checked:border-stone-900 peer-checked:bg-stone-900">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="p-4 rounded-xl border border-stone-200 bg-white transition-all duration-200 hover:border-stone-400 peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 peer-checked:bg-stone-50/50 flex items-center space-x-4">
<div className="bg-stone-100 p-2.5 rounded-lg text-stone-600 group-hover:bg-stone-200 transition-colors peer-checked:bg-stone-900 peer-checked:text-white flex items-center justify-center">
<iconify-icon icon="solar:camera-linear" width="22"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-base font-medium text-stone-900">Photography</h3>
</div>
<div className="w-5 h-5 border border-stone-300 rounded-full flex items-center justify-center peer-checked:border-stone-900 peer-checked:bg-stone-900">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="p-4 rounded-xl border border-stone-200 bg-white transition-all duration-200 hover:border-stone-400 peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 peer-checked:bg-stone-50/50 flex items-center space-x-4">
<div className="bg-stone-100 p-2.5 rounded-lg text-stone-600 group-hover:bg-stone-200 transition-colors peer-checked:bg-stone-900 peer-checked:text-white flex items-center justify-center">
<iconify-icon icon="solar:pallete-2-linear" width="22"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-base font-medium text-stone-900">Graphic Design</h3>
</div>
<div className="w-5 h-5 border border-stone-300 rounded-full flex items-center justify-center peer-checked:border-stone-900 peer-checked:bg-stone-900">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="p-4 rounded-xl border border-stone-200 bg-white transition-all duration-200 hover:border-stone-400 peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 peer-checked:bg-stone-50/50 flex items-center space-x-4">
<div className="bg-stone-100 p-2.5 rounded-lg text-stone-600 group-hover:bg-stone-200 transition-colors peer-checked:bg-stone-900 peer-checked:text-white flex items-center justify-center">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="22"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-base font-medium text-stone-900">Web Development</h3>
</div>
<div className="w-5 h-5 border border-stone-300 rounded-full flex items-center justify-center peer-checked:border-stone-900 peer-checked:bg-stone-900">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" type="checkbox"/>
<div className="p-4 rounded-xl border border-stone-200 bg-white transition-all duration-200 hover:border-stone-400 peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 peer-checked:bg-stone-50/50 flex items-center space-x-4">
<div className="bg-stone-100 p-2.5 rounded-lg text-stone-600 group-hover:bg-stone-200 transition-colors peer-checked:bg-stone-900 peer-checked:text-white flex items-center justify-center">
<iconify-icon icon="solar:graph-new-linear" width="22"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-base font-medium text-stone-900">SEO Services</h3>
</div>
<div className="w-5 h-5 border border-stone-300 rounded-full flex items-center justify-center peer-checked:border-stone-900 peer-checked:bg-stone-900">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
</div>
</label>

<label className="cursor-pointer group relative md:col-span-2">
<input className="peer sr-only" type="checkbox"/>
<div className="p-4 rounded-xl border border-stone-200 bg-white transition-all duration-200 hover:border-stone-400 peer-checked:border-stone-900 peer-checked:ring-1 peer-checked:ring-stone-900 peer-checked:bg-stone-50/50 flex items-center space-x-4">
<div className="bg-stone-100 p-2.5 rounded-lg text-stone-600 group-hover:bg-stone-200 transition-colors peer-checked:bg-stone-900 peer-checked:text-white flex items-center justify-center">
<iconify-icon icon="solar:bolt-linear" width="22"></iconify-icon>
</div>
<div className="flex-1">
<h3 className="text-base font-medium text-stone-900">Automation &amp; Workflows</h3>
</div>
<div className="w-5 h-5 border border-stone-300 rounded-full flex items-center justify-center peer-checked:border-stone-900 peer-checked:bg-stone-900">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-circle-linear" width="14"></iconify-icon>
</div>
</div>
</label>
</div>
</div>

<div className="h-px bg-stone-100"></div>

<div className="space-y-4">
<label className="text-xl font-medium tracking-tight text-stone-800 block" htmlFor="feedback">Any additional insights?</label>
<div className="relative">
<textarea className="w-full bg-stone-50 border border-stone-200 rounded-xl p-4 text-lg font-light text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 resize-none transition-all" id="feedback" placeholder="How can we improve our process?" rows="4"></textarea>
</div>
</div>

<div className="space-y-4">
<label className="text-xl font-medium tracking-tight text-stone-800 block" htmlFor="email">Your Email</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<input className="w-full pl-11 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-xl text-lg font-light text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-stone-900 focus:border-stone-900 transition-all" id="email" placeholder="client@company.com" type="email"/>
</div>
</div>
</div>

<div className="px-8 pb-8 pt-0 md:px-12 md:pb-12">
<button className="group w-full bg-stone-900 hover:bg-stone-800 text-[#F9F8F4] text-lg font-medium py-4 rounded-xl shadow-lg shadow-stone-900/10 transition-all duration-200 flex items-center justify-center space-x-2 active:scale-[0.99]" type="button">
<span>Submit Evaluation</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</form>
<footer className="mt-12 text-center text-base text-stone-400 space-y-2">
<p className="">© 2026 Cradle Premier Network. All rights reserved.</p>
<div className="flex justify-center space-x-6 text-sm font-medium">
<a className="hover:text-stone-600 transition-colors" href="#">Privacy</a>
<a className="hover:text-stone-600 transition-colors" href="#">Terms</a>
<a className="hover:text-stone-600 transition-colors" href="#">Support</a>
</div>
</footer>
</main>

    </>
  );
}
