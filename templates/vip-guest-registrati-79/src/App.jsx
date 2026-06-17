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
      

<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
<img alt="Background" className="absolute inset-0 w-full h-full object-cover opacity-30 dark:opacity-20 mix-blend-luminosity" src="https://images.unsplash.com/photo-1540324155974-7523202daa3f?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-slate-100/80 dark:bg-slate-950/90 backdrop-blur-[60px]"></div>
<div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-[#C5A059]/5 to-[#C5A059]/10 dark:from-slate-950 dark:via-[#C5A059]/10 dark:to-slate-950/50"></div>
</div>

<main className="relative z-10 w-full max-w-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_40px_rgb(0,0,0,0.3)] border border-white/60 dark:border-slate-800/60 overflow-hidden transition-all duration-500" id="form-view">
<div className="p-8 pb-0">

<div className="flex items-center justify-between mb-6">

<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-slate-900 dark:bg-white rounded-xl flex items-center justify-center shadow-sm">
<iconify-icon className="text-white dark:text-slate-900 text-xl" icon="solar:crown-linear"></iconify-icon>
</div>
<span className="font-serif-custom font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">ELEVATE</span>
</div>

<img alt="Sponsor" className="h-6 object-contain opacity-60 grayscale dark:invert dark:opacity-80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"/>
</div>
<hr className="border-t border-slate-200/60 dark:border-slate-700/60 mb-8"/>

<div className="flex items-start justify-between mb-8">
<div>
<p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold mb-3">Registration</p>
<h1 className="font-serif-custom font-extrabold text-3xl text-slate-900 dark:text-white tracking-tight mb-2">Guest Accreditation</h1>
<p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Global Summit 2024 • Diplomatic Enclave</p>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
<iconify-icon className="text-sm" icon="solar:global-linear"></iconify-icon>
<span>EN</span>
</button>
</div>

<div className="mb-10 relative px-2">
<div className="absolute top-1/2 left-4 right-4 h-[1px] bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0"></div>
<div className="absolute top-1/2 left-4 w-[45%] h-[1px] bg-[#C5A059] -translate-y-1/2 z-0 transition-all duration-500"></div>
<div className="relative z-10 flex justify-between">

<div className="flex flex-col items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-[#C5A059] text-white flex items-center justify-center shadow-md shadow-[#C5A059]/20">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-[10px] font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Details</span>
</div>

<div className="flex flex-col items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-[#C5A059] text-[#C5A059] flex items-center justify-center font-bold text-sm shadow-sm">
                            2
                        </div>
<span className="text-[10px] font-semibold text-[#C5A059] uppercase tracking-wider">Documents</span>
</div>

<div className="flex flex-col items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-400 flex items-center justify-center font-bold text-sm">
                            3
                        </div>
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Review</span>
</div>
</div>
</div>

<form className="space-y-6" onsubmit="event.preventDefault(); document.getElementById('form-view').classList.add('hidden'); document.getElementById('review-view').classList.remove('hidden');">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="md:col-span-2">
<label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2.5">Guest Category <span className="text-red-500">*</span></label>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
<label className="relative flex flex-col items-center p-3 cursor-pointer rounded-xl border-2 border-[#C5A059] bg-[#C5A059]/5 dark:bg-[#C5A059]/10 transition-all shadow-sm">
<input checked="" className="sr-only" name="category" type="radio"/>
<iconify-icon className="text-xl text-[#C5A059] mb-1.5" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-xs font-semibold text-slate-900 dark:text-white">VIP</span>
</label>
<label className="relative flex flex-col items-center p-3 cursor-pointer rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
<input className="sr-only" name="category" type="radio"/>
<iconify-icon className="text-xl text-slate-400 mb-1.5" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Delegate</span>
</label>
<label className="relative flex flex-col items-center p-3 cursor-pointer rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
<input className="sr-only" name="category" type="radio"/>
<iconify-icon className="text-xl text-slate-400 mb-1.5" icon="solar:camera-linear"></iconify-icon>
<span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Press</span>
</label>
<label className="relative flex flex-col items-center p-3 cursor-pointer rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
<input className="sr-only" name="category" type="radio"/>
<iconify-icon className="text-xl text-slate-400 mb-1.5" icon="solar:shield-user-linear"></iconify-icon>
<span className="text-xs font-semibold text-slate-600 dark:text-slate-400">Security</span>
</label>
</div>
</div>

<div>
<label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">First Name <span className="text-red-500">*</span></label>
<input className="w-full h-11 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059] transition-all" type="text" value="Alexander"/>
</div>
<div>
<label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">Last Name <span className="text-red-500">*</span></label>
<input className="w-full h-11 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-900/50 text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#C5A059]/20 focus:border-[#C5A059] transition-all" type="text" value="Sterling"/>
</div>

<div className="md:col-span-2">
<label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">Passport/ID Scan <span className="text-red-500">*</span></label>
<div className="w-full rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30 p-6 flex flex-col items-center justify-center text-center hover:border-[#C5A059]/40 hover:bg-[#C5A059]/5 dark:hover:bg-[#C5A059]/10 transition-all cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 shadow-sm flex items-center justify-center mb-3 text-slate-400 group-hover:text-[#C5A059] transition-colors">
<iconify-icon className="text-xl" icon="solar:upload-linear"></iconify-icon>
</div>
<p className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-1">Click to upload or drag and drop</p>
<p className="text-xs text-slate-500 dark:text-slate-400">High-res PDF, JPG or PNG (max. 5MB)</p>
</div>
</div>

<div className="md:col-span-2">
<label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">Headshot Photo <span className="text-red-500">*</span></label>
<div className="flex items-center gap-4 p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 shadow-sm">
<div className="w-12 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
<img alt="Profile photo preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold text-slate-900 dark:text-white truncate">sterling_profile_final.jpg</p>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">1.2 MB</p>
</div>
<button className="w-8 h-8 mr-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors" type="button">
<iconify-icon className="text-lg" icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="p-8 pt-6 pb-8 bg-slate-50/60 dark:bg-slate-800/20 border-t border-slate-100 dark:border-slate-800/80 -mx-8 -mb-8 mt-8 flex items-center justify-between gap-4">
<button className="h-11 px-6 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2" type="button">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                        Back
                    </button>

<button className="h-11 px-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-extrabold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-slate-900/10 dark:shadow-white/10 flex items-center gap-2" type="submit">
                        Continue
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</main>

<main className="hidden relative z-10 w-full max-w-2xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_40px_rgb(0,0,0,0.3)] border border-white/60 dark:border-slate-800/60 overflow-hidden transition-all duration-500" id="review-view">
<div className="p-8 pb-0">

<div className="flex items-center justify-between mb-6">

<div className="flex items-center gap-3">
<div className="h-10 w-10 bg-slate-900 dark:bg-white rounded-xl flex items-center justify-center shadow-sm">
<iconify-icon className="text-white dark:text-slate-900 text-xl" icon="solar:crown-linear"></iconify-icon>
</div>
<span className="font-serif-custom font-extrabold text-lg tracking-tight text-slate-900 dark:text-white">ELEVATE</span>
</div>

<img alt="Sponsor" className="h-6 object-contain opacity-60 grayscale dark:invert dark:opacity-80" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"/>
</div>
<hr className="border-t border-slate-200/60 dark:border-slate-700/60 mb-8"/>

<div className="flex items-start justify-between mb-8">
<div>
<p className="text-[10px] uppercase tracking-[0.2em] text-[#C5A059] font-bold mb-3">Registration</p>
<h1 className="font-serif-custom font-extrabold text-3xl text-slate-900 dark:text-white tracking-tight mb-2">Review Details</h1>
<p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Please verify the information before final submission.</p>
</div>
<button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600 transition-all">
<iconify-icon className="text-sm" icon="solar:global-linear"></iconify-icon>
<span>EN</span>
</button>
</div>

<div className="mb-10 relative px-2">
<div className="absolute top-1/2 left-4 right-4 h-[1px] bg-slate-200 dark:bg-slate-700 -translate-y-1/2 z-0"></div>
<div className="absolute top-1/2 left-4 w-[95%] h-[1px] bg-[#C5A059] -translate-y-1/2 z-0 transition-all duration-500"></div>
<div className="relative z-10 flex justify-between">

<div className="flex flex-col items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-[#C5A059] text-white flex items-center justify-center shadow-md shadow-[#C5A059]/20">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-[10px] font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Details</span>
</div>

<div className="flex flex-col items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-[#C5A059] text-white flex items-center justify-center shadow-md shadow-[#C5A059]/20">
<iconify-icon className="text-sm" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-[10px] font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Documents</span>
</div>

<div className="flex flex-col items-center gap-2.5">
<div className="w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-[#C5A059] text-[#C5A059] flex items-center justify-center font-bold text-sm shadow-sm">
                            3
                        </div>
<span className="text-[10px] font-semibold text-[#C5A059] uppercase tracking-wider">Review</span>
</div>
</div>
</div>

<form className="space-y-6" onsubmit="event.preventDefault(); document.getElementById('review-view').classList.add('hidden'); document.getElementById('success-view').classList.remove('hidden');">

<div className="bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 space-y-4">
<div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
<div>
<p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Guest Category</p>
<div className="flex items-center gap-2 text-[#C5A059]">
<iconify-icon className="text-lg" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-sm font-bold text-slate-900 dark:text-white">VIP</span>
</div>
</div>
<button className="text-xs font-semibold text-[#C5A059] hover:text-[#a88749] transition-colors" onclick="document.getElementById('review-view').classList.add('hidden'); document.getElementById('form-view').classList.remove('hidden');" type="button">Edit Details</button>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">First Name</p>
<p className="text-sm font-medium text-slate-900 dark:text-white">Alexander</p>
</div>
<div>
<p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Last Name</p>
<p className="text-sm font-medium text-slate-900 dark:text-white">Sterling</p>
</div>
</div>
</div>

<div className="bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-700 p-5 space-y-4">
<div className="flex items-center justify-between mb-2">
<p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Uploaded Documents</p>
<button className="text-xs font-semibold text-[#C5A059] hover:text-[#a88749] transition-colors" onclick="document.getElementById('review-view').classList.add('hidden'); document.getElementById('form-view').classList.remove('hidden');" type="button">Edit Files</button>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-[#C5A059]/10 text-[#C5A059] flex items-center justify-center shrink-0">
<iconify-icon className="text-lg" icon="solar:document-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold text-slate-900 dark:text-white truncate">passport_scan.pdf</p>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Verified</p>
</div>
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 border border-slate-200 dark:border-slate-700">
<img alt="Profile photo preview" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold text-slate-900 dark:text-white truncate">sterling_profile_final.jpg</p>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Verified</p>
</div>
<iconify-icon className="text-emerald-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>

<label className="flex items-start gap-3 p-1 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5 mt-0.5 shrink-0 rounded border-2 border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 group-hover:border-[#C5A059] transition-colors overflow-hidden">
<input className="peer sr-only" required="" type="checkbox"/>
<iconify-icon className="text-white z-10 opacity-0 peer-checked:opacity-100 absolute text-sm transition-opacity" icon="solar:check-read-linear"></iconify-icon>
<div className="absolute inset-0 bg-[#C5A059] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
<span className="text-xs font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
                        I confirm that all provided information is accurate and agree to the <a className="text-[#C5A059] hover:underline hover:text-[#a88749] transition-colors" href="#">security protocol terms and conditions</a> for this global event.
                    </span>
</label>

<div className="p-8 pt-6 pb-8 bg-slate-50/60 dark:bg-slate-800/20 border-t border-slate-100 dark:border-slate-800/80 -mx-8 -mb-8 mt-8 flex items-center justify-between gap-4">
<button className="h-11 px-6 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors flex items-center gap-2" onclick="document.getElementById('review-view').classList.add('hidden'); document.getElementById('form-view').classList.remove('hidden');" type="button">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
                        Back
                    </button>

<button className="h-11 px-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-extrabold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-slate-900/10 dark:shadow-white/10 flex items-center gap-2" type="submit">
                        Submit Application
                        <iconify-icon icon="solar:check-read-linear"></iconify-icon>
</button>
</div>
</form>
</div>
</main>

<main className="hidden relative z-10 w-full max-w-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-3xl shadow-[0_8px_40px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_40px_rgb(0,0,0,0.3)] border border-white/60 dark:border-slate-800/60 overflow-hidden text-center p-10 sm:p-14 transition-all duration-500" id="success-view">
<div className="w-20 h-20 mx-auto rounded-full bg-[#C5A059]/10 border border-[#C5A059]/20 flex items-center justify-center mb-8 shadow-inner">
<iconify-icon className="text-4xl text-[#C5A059]" icon="solar:check-circle-linear"></iconify-icon>
</div>
<h2 className="font-serif-custom font-extrabold text-3xl text-slate-900 dark:text-white tracking-tight mb-3">Application Received</h2>
<p className="text-sm text-slate-500 dark:text-slate-400 mb-8 max-w-sm mx-auto leading-relaxed">Your accreditation request has been successfully submitted and routed to protocol.</p>
<div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-6 mb-10 inline-block min-w-[260px] border border-slate-100 dark:border-slate-700/50">
<p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5">Reference Number</p>
<p className="text-2xl font-extrabold text-[#C5A059] tracking-tight">#GLB-8829</p>
</div>

<div className="text-left max-w-[280px] mx-auto mb-12 flex flex-col gap-6">
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 z-10 shadow-sm"></div>
<div className="w-[2px] h-full bg-emerald-500 -mt-1 -mb-1"></div>
</div>
<div className="pb-5">
<h4 className="text-sm font-semibold text-slate-900 dark:text-white">Application Submitted</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Today, 10:42 AM</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-3.5 h-3.5 rounded-full bg-[#C5A059] border-2 border-white dark:border-slate-900 z-10 shadow-[0_0_0_4px_rgba(197,160,89,0.15)] relative">
<div className="absolute inset-0 rounded-full border border-[#C5A059] animate-ping opacity-50"></div>
</div>
<div className="w-[2px] h-full bg-slate-200 dark:bg-slate-700 -mt-1 -mb-1"></div>
</div>
<div className="pb-5">
<h4 className="text-sm font-semibold text-slate-900 dark:text-white">Under Review</h4>
<p className="text-xs text-[#C5A059] mt-1 font-medium">Currently processing</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex flex-col items-center">
<div className="w-3.5 h-3.5 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-900 z-10"></div>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500">Approved</h4>
<p className="text-xs text-slate-400 mt-1">Pending clearance</p>
</div>
</div>
</div>
<div className="flex items-center justify-center gap-2 mb-8 text-xs font-medium text-slate-500 dark:text-slate-400">
<iconify-icon className="text-sm" icon="solar:info-circle-linear"></iconify-icon>
<p>Most applications are reviewed within 24 hours.</p>
</div>
<button className="w-full h-11 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-extrabold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-lg shadow-slate-900/10" onclick="document.getElementById('success-view').classList.add('hidden'); document.getElementById('form-view').classList.remove('hidden');">
            Submit Another Guest
        </button>
</main>

    </>
  );
}
