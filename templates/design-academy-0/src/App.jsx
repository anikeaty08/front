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



    function goLive() {
      // Simulating the script.js function
      console.log("Going live...");
      alert("Starting live session stream...");
    }
  
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
      

<div className="overflow-hidden border-white/5 border-b relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] bg-gradient-to-b from-cyan-500/10 via-sky-500/5 to-transparent blur-[120px] -z-10 pointer-events-none" style={{}}></div>
<header className="text-center max-w-5xl mr-auto ml-auto pt-24 pr-6 pb-20 pl-6">

<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-emerald-300 mb-8 backdrop-blur-sm" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="">Accepting new students</span>
</div>
<p className="sm:text-xl leading-relaxed text-lg font-light text-emerald-500 max-w-xl mr-auto mb-10 ml-auto">
    Live Graphic Design • Sketching • Branding
  </p>

 <button className="group inline-flex gap-2 transition-all hover:bg-emerald-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-950 text-sm font-medium text-black bg-white rounded-full pt-3 pr-6 pb-3 pl-6 relative gap-x-2 gap-y-2 items-center justify-center" onclick="goLive()">
<iconify-icon className="" icon="lucide:video" strokeWidth="1.5" width="16"></iconify-icon>
<span className="">Go Live</span>
<span className="absolute -top-1 -right-1 flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" style={{}}></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" style={{}}></span>
</span>
</button>
</header>
</div>
<main className="flex-grow">

<section className="courses py-20">
<div className="max-w-5xl mx-auto px-6">
<div className="flex items-end justify-between mb-12">
<div className="">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2" style={{}}>Popular Courses</h2>
<p className="text-sm text-emerald-500" style={{}}>Curated paths to master your craft.</p>
</div>
<button className="hidden sm:flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-white transition-colors" style={{}}>
            View all
            <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="course-card group relative flex flex-col justify-between rounded-xl border border-white/10 bg-emerald-900/40 p-6 hover:border-white/20 hover:bg-emerald-900/80 transition-all duration-300" style={{}}>
<div className="">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white group-hover:scale-110 transition-transform duration-300 group-hover:border-cyan-500/30 group-hover:text-cyan-300" style={{}}>
<iconify-icon icon="lucide:pen-tool" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2" style={{}}>Logo Design for Beginners</h3>
<p className="text-sm text-emerald-500 leading-relaxed mb-6" style={{}}>Learn logos from sketch to final brand.</p>
</div>
<div className="mt-auto border-t border-white/5 pt-4" style={{}}>
<button className="flex w-full items-center justify-between text-xs font-medium text-white hover:text-cyan-300 transition-colors" style={{}}>
<span>View Course</span>
<iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="course-card group relative flex flex-col justify-between rounded-xl border border-white/10 bg-emerald-900/40 p-6 hover:border-white/20 hover:bg-emerald-900/80 transition-all duration-300" style={{}}>
<div className="">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white group-hover:scale-110 transition-transform duration-300 group-hover:border-sky-500/30 group-hover:text-sky-300" style={{}}>
<iconify-icon icon="lucide:pencil" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2" style={{}}>Sketch Art Mastery</h3>
<p className="text-sm text-emerald-500 leading-relaxed mb-6" style={{}}>Anatomy, gesture, and character sketches.</p>
</div>
<div className="mt-auto border-t border-white/5 pt-4" style={{}}>
<button className="flex w-full items-center justify-between text-xs font-medium text-white hover:text-sky-300 transition-colors" style={{}}>
<span>View Course</span>
<iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>

<div className="course-card group relative flex flex-col justify-between rounded-xl border border-white/10 bg-emerald-900/40 p-6 hover:border-white/20 hover:bg-emerald-900/80 transition-all duration-300" style={{}}>
<div className="">
<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white group-hover:scale-110 transition-transform duration-300 group-hover:border-indigo-500/30 group-hover:text-indigo-300" style={{}}>
<iconify-icon icon="lucide:shirt" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white tracking-tight mb-2" style={{}}>Merch &amp; T-Shirt Design</h3>
<p className="text-sm text-emerald-500 leading-relaxed mb-6" style={{}}>Create designs that actually sell.</p>
</div>
<div className="mt-auto border-t border-white/5 pt-4" style={{}}>
<button className="flex w-full items-center justify-between text-xs font-medium text-white hover:text-indigo-300 transition-colors" style={{}}>
<span>View Course</span>
<iconify-icon className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" icon="lucide:arrow-right" strokeWidth="1.5" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="live py-20 border-t border-white/5 bg-white/[0.02]" style={{}}>
<div className="max-w-5xl mx-auto px-6">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-900 to-emerald-950 p-8 sm:p-12 text-center sm:text-left" style={{}}>

<div className="absolute -top-24 -right-24 w-64 h-64 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="flex flex-col sm:flex-row items-center justify-between gap-8 relative z-10">
<div>
<div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-400 mb-3">
<iconify-icon icon="lucide:radio" width="14"></iconify-icon>
<span>Upcoming Stream</span>
</div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-3" style={{}}>Live Classes</h2>
<p className="text-emerald-400 max-w-md" style={{}}>Join real-time design sessions and Q&amp;A with Lucas. Get feedback on your work instantly.</p>
</div>
<button className="flex-shrink-0 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-100 px-5 py-3 text-sm font-medium text-black hover:bg-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.05)]" style={{}}>
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="16"></iconify-icon>
              Join Live Session
            </button>
</div>
</div>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-emerald-950 py-12" style={{}}>
<div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-emerald-800 flex items-center justify-center border border-white/10" style={{}}>
<span className="font-bold tracking-tighter text-[10px] text-white" style={{}}>LC</span>
</div>
<p className="text-xs text-emerald-500" style={{}}>© 2026 Lucas Custom Graphic Design</p>
</div>
<div className="flex gap-6">
<a className="text-xs text-emerald-500 hover:text-white transition-colors" href="#" style={{}}>Terms</a>
<a className="text-xs text-emerald-500 hover:text-white transition-colors" href="#" style={{}}>Privacy</a>
<a className="text-xs text-emerald-500 hover:text-white transition-colors" href="#" style={{}}>Contact</a>
</div>
</div>
</footer>


    </>
  );
}
