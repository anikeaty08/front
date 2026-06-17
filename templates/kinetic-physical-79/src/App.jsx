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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        lucide.createIcons();
    
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
      

<nav className="fixed w-full z-50 top-0 border-b border-stone-200/50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-teal-900 text-white flex items-center justify-center rounded-lg">
<span className="text-lg font-semibold tracking-tighter">K</span>
</div>
<span className="group-hover:text-teal-900 transition-colors text-lg font-semibold text-slate-900 tracking-tight">KINETIC</span>
</a>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-slate-500 hover:text-teal-900 transition-colors" href="#expertise">Expertise</a>
<a className="text-sm font-medium text-slate-500 hover:text-teal-900 transition-colors" href="#method">The Method</a>
<a className="text-sm font-medium text-slate-500 hover:text-teal-900 transition-colors" href="#clinics">Locations</a>
<a className="text-sm font-medium text-slate-500 hover:text-teal-900 transition-colors" href="#doctors">Team</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-900" href="#">Log in</a>
<a className="bg-teal-900 hover:bg-teal-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg shadow-teal-900/10 flex items-center gap-2 group" href="#">
                    Book Consultation
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] opacity-50"></div>
</div>
<div className="lg:px-8 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-16 gap-x-12 gap-y-12 items-center">
<div className="max-w-3xl lg:max-w-none">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-100 text-teal-800 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
</span>
                Accepting new patients for Fall 2023
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Restore motion. 
                <span className="text-teal-900">Reclaim performance.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl leading-relaxed">
                Evidence-based physical therapy for elite athletes and active individuals. We bridge the gap between
                rehabilitation and peak performance through data-driven care.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="px-8 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 flex items-center justify-center gap-2">
                        Schedule Assessment
                        <svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</button>
<button className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-lg font-medium hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                        Explore Services
                        <svg className="lucide lucide-chevron-down w-4 h-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
</div>
<div className="relative hidden lg:block">
<div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-teal-900/10">
<img alt="Physical Therapy Performance" className="transform hover:scale-105 transition-transform duration-700 ease-out opacity-100 w-full h-auto object-cover my-10 scale-100 -skew-x-5 rotate-x-10 rotate-y-5 -rotate-z-5 perspective-normal" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80" style={{maskImage: 'linear-gradient(360deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(360deg, transparent, black 0%, black 100%, transparent)'}}/>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-teal-50 rounded-full blur-3xl opacity-50 translate-x-1/3 -translate-y-1/4"></div>
</section>

<section className="py-12 border-y border-stone-100 bg-white/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-slate-400 uppercase tracking-widest mb-8">Trusted by professionals from</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-bold tracking-tighter text-slate-800">STRIDE</div>
<div className="text-xl font-bold tracking-tighter text-slate-800">APEX</div>
<div className="text-xl font-bold tracking-tighter text-slate-800">OLYMPIA</div>
<div className="text-xl font-bold tracking-tighter text-slate-800">VELOCITY</div>
<div className="text-xl font-bold tracking-tighter text-slate-800">CORE</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="expertise">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Clinical Expertise</h2>
<p className="text-slate-500 max-w-md">Specialized treatments designed to treat the root cause, not just the symptoms.</p>
</div>
<a className="text-teal-800 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all" href="#">
                    View all treatments <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-slate-100 bg-stone-50 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-teal-800" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-activity w-6 h-6 text-teal-800" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Sports Rehabilitation</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Return to sport protocols customized for your specific demands. We focus on load management, biomechanics, and progressive strengthening.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-stone-50 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-teal-800" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-teal-800" data-lucide="hands"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Manual Therapy</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Hands-on techniques including joint mobilization, soft tissue release, and dry needling to restore range of motion and reduce pain immediately.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-slate-100 bg-stone-50 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-arrow-up-right w-5 h-5 text-teal-800" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-scan-face w-6 h-6 text-teal-800" data-lucide="scan-face" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><path d="M9 9h.01"></path><path d="M15 9h.01"></path></svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Movement Analysis</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                        Video-based gait and running analysis to identify inefficiencies. We utilize force plates and motion capture to quantify your progress.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-50 border-y border-stone-200" id="method">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">The Recovery Arc</h2>
<p className="text-slate-500 max-w-lg mx-auto">Our proven framework ensures no steps are skipped on your journey back to 100%.</p>
</div>
<div className="relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-slate-200 -translate-y-1/2 z-0"></div>
<div className="grid md:grid-cols-4 gap-8 relative z-10">

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center md:items-start md:text-left h-full">
<div className="w-8 h-8 rounded-full bg-teal-900 text-white flex items-center justify-center text-xs font-bold mb-4 ring-4 ring-white">1</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Diagnosis</h4>
<p className="text-xs text-slate-500">Comprehensive evaluation to pinpoint the mechanical root cause.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center md:items-start md:text-left h-full">
<div className="w-8 h-8 rounded-full bg-teal-900 text-white flex items-center justify-center text-xs font-bold mb-4 ring-4 ring-white">2</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Relief</h4>
<p className="text-xs text-slate-500">Manual interventions to down-regulate pain signals and restore mobility.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center md:items-start md:text-left h-full">
<div className="w-8 h-8 rounded-full bg-teal-900 text-white flex items-center justify-center text-xs font-bold mb-4 ring-4 ring-white">3</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Reload</h4>
<p className="text-xs text-slate-500">Progressive loading exercises to rebuild tissue capacity and strength.</p>
</div>

<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center md:items-start md:text-left h-full">
<div className="w-8 h-8 rounded-full bg-teal-900 text-white flex items-center justify-center text-xs font-bold mb-4 ring-4 ring-white">4</div>
<h4 className="text-lg font-semibold text-slate-900 mb-2">Perform</h4>
<p className="text-xs text-slate-500">Sport-specific drills to ensure you return stronger than before.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Data-driven outcomes.</h2>
<p className="text-slate-500 mb-8 text-lg leading-relaxed">
                        We don't guess. We measure. From force output to range of motion degrees, every session is tracked to ensure linear progression towards your goals.
                    </p>
<div className="grid grid-cols-2 gap-8">
<div className="border-l-2 border-teal-900 pl-6">
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-1">94%</div>
<div className="text-sm text-slate-500">Return to sport rate</div>
</div>
<div className="border-l-2 border-slate-200 pl-6">
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-1">12k+</div>
<div className="text-sm text-slate-500">Sessions completed</div>
</div>
<div className="border-l-2 border-slate-200 pl-6">
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-1">45min</div>
<div className="text-sm text-slate-500">Average 1-on-1 time</div>
</div>
<div className="border-l-2 border-slate-200 pl-6">
<div className="text-4xl font-semibold text-slate-900 tracking-tight mb-1">3</div>
<div className="text-sm text-slate-500">Clinic Locations</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-2xl bg-stone-100 overflow-hidden relative">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-3/4 relative">
<div className="absolute top-0 left-0 w-full h-full border border-slate-200 rounded-full animate-[spin_10s_linear_infinite]"></div>
<div className="absolute top-4 left-4 right-4 bottom-4 border border-teal-100 rounded-full animate-[spin_12s_linear_infinite_reverse]"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-900/5 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg className="lucide lucide-activity w-10 h-10 text-teal-900" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
</div>
</div>

<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-semibold text-slate-900">Knee Flexion</span>
<span className="text-xs font-bold text-teal-700">+15°</span>
</div>
<div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-teal-900 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Ready to move without pain?</h2>
<p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                Book your initial evaluation today. We accept most major insurance providers and offer transparent self-pay rates.
            </p>
<form className="max-w-sm mx-auto bg-white/5 p-1.5 rounded-full border border-white/10 flex items-center mb-6 focus-within:ring-2 focus-within:ring-teal-500/50 transition-all">
<div className="pl-4 text-slate-400">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<input className="bg-transparent border-none text-white placeholder-slate-500 text-sm w-full px-4 py-2 focus:outline-none" placeholder="Enter your email address" type="email"/>
<button className="bg-teal-500 hover:bg-teal-400 text-slate-900 px-6 py-2.5 rounded-full text-sm font-semibold transition-colors whitespace-nowrap" type="button">
                    Get Started
                </button>
</form>
<p className="text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
</div>
</section>

<footer className="bg-stone-50 pt-20 pb-10 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-teal-900 text-white flex items-center justify-center rounded-md">
<span className="font-semibold text-xs tracking-tighter">K</span>
</div>
<span className="text-slate-900 font-semibold tracking-tight">KINETIC</span>
</div>
<p className="text-sm text-slate-500 max-w-xs mb-6">
                        Premium physical therapy clinics dedicated to restoring human performance through science and compassion.
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<div className="">
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-teal-800 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-teal-800 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-teal-800 transition-colors" href="#">Locations</a></li>
<li><a className="hover:text-teal-800 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Patients</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-teal-800 transition-colors" href="#">Patient Portal</a></li>
<li><a className="hover:text-teal-800 transition-colors" href="#">Insurance Guide</a></li>
<li><a className="hover:text-teal-800 transition-colors" href="#">FAQ</a></li>
<li><a className="hover:text-teal-800 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400">© 2023 Kinetic Physical Therapy. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-slate-400 hover:text-slate-900" href="#">Privacy Policy</a>
<a className="text-xs text-slate-400 hover:text-slate-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
