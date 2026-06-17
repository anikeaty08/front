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
      
      lucide.createIcons({
        attrs: { 'stroke-width': 1.5 }
      });
    
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
      
<div className="min-h-screen w-full bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(79,70,229,0.08),transparent),radial-gradient(900px_500px_at_80%_10%,rgba(6,182,212,0.06),transparent)]">
<div className="mx-auto max-w-sm px-4 pt-6 pb-[calc(env(safe-area-inset-bottom)+24px)]">

<header className="sticky top-0 z-20 -mx-4 px-4 pb-3 pt-2 backdrop-blur supports-backdrop-blur:bg-white/70">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full overflow-hidden ring-1 ring-black/5 shadow-sm">
<img alt="Profile" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">Dashboard</p>
<h1 className="text-[20px] leading-tight tracking-tight font-semibold text-slate-900">Medical Reports &amp; Appointments</h1>
</div>
</div>
<button className="relative inline-flex h-10 w-10 items-center justify-center rounded-xl border border-black/10 bg-white hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<i className="h-5 w-5 text-slate-700" data-lucide="bell"></i>
<span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-rose-500 ring-2 ring-white"></span>
</button>
</div>
</header>

<section className="mt-2">
<div className="flex items-end justify-between">
<div>
<p className="text-[13px] text-slate-500">Good morning</p>
<h2 className="text-[28px] tracking-tight font-semibold text-slate-900">Hi, Maya</h2>
</div>
<div className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[12px] text-slate-700">
<span className="inline-flex items-center gap-1.5">
<i className="h-4 w-4 text-emerald-600" data-lucide="shield-check"></i>
<span>Profile Verified</span>
</span>
</div>
</div>
</section>

<section aria-labelledby="self-details" className="mt-5">
<div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-slate-700" data-lucide="id-card"></i>
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900" id="self-details">Self Details</h3>
</div>
<button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] text-slate-700 hover:bg-slate-50 transition-colors">
<i className="h-4 w-4" data-lucide="pencil"></i>
                Edit
              </button>
</div>
<div className="mt-3 grid grid-cols-2 gap-2">
<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
<div className="flex items-center gap-2 text-[12px] text-slate-500">
<i className="h-4 w-4" data-lucide="calendar"></i>
<span>DOB</span>
</div>
<p className="mt-1 text-[14px] font-medium text-slate-900">12 Aug 1994</p>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
<div className="flex items-center gap-2 text-[12px] text-slate-500">
<i className="h-4 w-4" data-lucide="ruler"></i>
<span>Height</span>
</div>
<p className="mt-1 text-[14px] font-medium text-slate-900">168 cm</p>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
<div className="flex items-center gap-2 text-[12px] text-slate-500">
<i className="h-4 w-4" data-lucide="scale"></i>
<span>Weight</span>
</div>
<p className="mt-1 text-[14px] font-medium text-slate-900">61 kg</p>
</div>
<div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
<div className="flex items-center gap-2 text-[12px] text-slate-500">
<i className="h-4 w-4" data-lucide="activity"></i>
<span>BMI</span>
</div>
<p className="mt-1 text-[14px] font-medium text-slate-900">21.6</p>
</div>
</div>
</div>
</section>

<section aria-labelledby="medical-records" className="mt-6">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-slate-700" data-lucide="folder-heart"></i>
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900" id="medical-records">Medical Records</h3>
</div>
<span className="text-[12px] text-slate-500">Keep things up to date</span>
</div>
<div className="grid grid-cols-2 gap-2">
<button className="group w-full rounded-2xl border border-slate-200 bg-white p-4 text-left hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center">
<i className="h-5 w-5 text-indigo-600" data-lucide="file-plus-2"></i>
</div>
<div>
<p className="text-[14px] font-medium text-slate-900">Add Prescription</p>
<p className="text-[12px] text-slate-500">Upload or scan</p>
</div>
</div>
</button>
<button className="group w-full rounded-2xl border border-slate-200 bg-white p-4 text-left hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/40">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center">
<i className="h-5 w-5 text-cyan-600" data-lucide="flask-conical"></i>
</div>
<div>
<p className="text-[14px] font-medium text-slate-900">Add Lab Report</p>
<p className="text-[12px] text-slate-500">PDF, image</p>
</div>
</div>
</button>
</div>
</section>

<section aria-labelledby="appointments" className="mt-7">
<div className="flex items-center justify-between mb-3">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-slate-700" data-lucide="calendar-check-2"></i>
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900" id="appointments">Appointments</h3>
</div>
<button className="inline-flex items-center gap-1 text-[12px] text-indigo-600 hover:text-indigo-700 transition-colors">
<i className="h-4 w-4" data-lucide="list-checks"></i>
              View all
            </button>
</div>

<button className="group w-full rounded-2xl border border-indigo-400/30 bg-gradient-to-r from-indigo-600 via-indigo-600 to-cyan-600 px-5 py-4 shadow-sm hover:from-indigo-700 hover:to-cyan-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/40">
<div className="flex items-center justify-center gap-2">
<i className="h-5 w-5 text-white" data-lucide="calendar-plus"></i>
<span className="text-[15px] font-semibold tracking-tight text-white">Book Appointment</span>
</div>
</button>

<div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
<div className="flex items-start gap-3">
<div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 min-w-[72px]">
<p className="text-[11px] uppercase tracking-[0.14em] text-slate-500">Sep</p>
<p className="text-[22px] leading-none font-semibold tracking-tight text-slate-900">09</p>
</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-[14px] font-medium text-slate-900">Dr. Andrew Clark</p>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/20 bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-700">
<i className="h-3.5 w-3.5" data-lucide="video"></i>
                    Video
                  </span>
</div>
<p className="mt-0.5 text-[12px] text-slate-500">Cardiologist</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-3 text-[12px] text-slate-600">
<span className="inline-flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-600" data-lucide="calendar-clock"></i>
                      Mon, 09:30 AM
                    </span>
<span className="inline-flex items-center gap-1.5">
<i className="h-4 w-4 text-slate-600" data-lucide="stethoscope"></i>
                      Ref No. APT-2046
                    </span>
</div>
<button className="inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-[12px] text-slate-700 hover:bg-slate-50 transition-colors">
<i className="h-4 w-4" data-lucide="chevron-right"></i>
                    Details
                  </button>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="quick-access" className="mt-7">
<h3 className="sr-only" id="quick-access">Quick Access</h3>
<div className="grid grid-cols-2 gap-2">
<button className="group h-24 rounded-2xl border border-slate-200 bg-white p-4 text-left hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<div className="flex h-full items-start justify-between">
<div>
<p className="text-[14px] font-medium text-slate-900">Past Appointments</p>
<p className="text-[12px] text-slate-500">History</p>
</div>
<div className="h-9 w-9 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center group-hover:border-indigo-400/30">
<i className="h-5 w-5 text-slate-700" data-lucide="history"></i>
</div>
</div>
</button>
<button className="group h-24 rounded-2xl border border-slate-200 bg-white p-4 text-left hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<div className="flex h-full items-start justify-between">
<div>
<p className="text-[14px] font-medium text-slate-900">Future Appointments</p>
<p className="text-[12px] text-slate-500">Upcoming</p>
</div>
<div className="h-9 w-9 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center group-hover:border-indigo-400/30">
<i className="h-5 w-5 text-slate-700" data-lucide="calendar-range"></i>
</div>
</div>
</button>
<button className="group h-24 rounded-2xl border border-slate-200 bg-white p-4 text-left hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<div className="flex h-full items-start justify-between">
<div>
<p className="text-[14px] font-medium text-slate-900">Favourites</p>
<p className="text-[12px] text-slate-500">Doctors</p>
</div>
<div className="h-9 w-9 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center group-hover:border-indigo-400/30">
<i className="h-5 w-5 text-rose-600" data-lucide="heart"></i>
</div>
</div>
</button>
<button className="group h-24 rounded-2xl border border-slate-200 bg-white p-4 text-left hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/40">
<div className="flex h-full items-start justify-between">
<div>
<p className="text-[14px] font-medium text-slate-900">Home Visit</p>
<p className="text-[12px] text-slate-500">Request</p>
</div>
<div className="h-9 w-9 rounded-xl border border-slate-200 bg-slate-50 flex items-center justify-center group-hover:border-indigo-400/30">
<i className="h-5 w-5 text-cyan-600" data-lucide="home"></i>
</div>
</div>
</button>
</div>
</section>

<div className="mt-8 border-t border-slate-200"></div>

<footer className="mt-4 text-center text-[12px] text-slate-500">
          Updated 2m ago • All data encrypted
        </footer>
</div>
</div>




    </>
  );
}
