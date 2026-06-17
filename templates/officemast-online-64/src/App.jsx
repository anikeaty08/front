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



      lucide.
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-slate-900 group font-manrope" href="#" style={{}}>
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white transition-transform group-hover:rotate-6">
<svg className="lucide lucide-command w-4 h-4" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
</svg>
</div>
          OFFICEMASTERY
        </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-500 gap-x-8 gap-y-8 items-center">
<a className="hover:text-slate-900 transition-colors font-manrope" href="#courses" style={{}}>
            Courses
          </a>
<a className="hover:text-slate-900 transition-colors font-manrope" href="#method" style={{}}>
            Method
          </a>
<a className="hover:text-slate-900 transition-colors font-manrope" href="#pricing" style={{}}>
            Pricing
          </a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-500 hover:text-slate-900 font-manrope" href="#" style={{}}>
            Log In
          </a>
<a className="bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200/50 font-manrope" href="#start" style={{}}>
            Start Learning
          </a>
</div>
</div>
</nav>

<section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 inset-x-0 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/50 via-slate-50 to-white -z-10"></div>
<div className="absolute top-20 right-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[120px] -z-10"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/30 rounded-full blur-[100px] -z-10"></div>
<div className="grid lg:grid-cols-2 lg:gap-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">

<div className="z-10 max-w-2xl relative">
<div className="inline-flex gap-2 text-xs font-medium text-slate-600 bg-white border-slate-200 border rounded-full mb-8 pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm gap-x-2 gap-y-2 items-center font-manrope" style={{}}>
<span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            New: Advanced Pivot Tables added
          </div>
<h1 className="lg:text-7xl leading-[1.05] text-5xl font-semibold text-slate-900 tracking-tighter font-manrope mb-6" style={{}}>
            Tame the Office
            <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-lime-400 to-lime-600 font-manrope" style={{}}>
              Monster.
            </span>
</h1>
<p className="leading-relaxed text-lg text-slate-500 font-manrope max-w-lg mb-8">
            Stop fighting with formatting and start creating magic. Playful,
            bite-sized courses for Excel, PowerPoint, and Word that actually
            stick.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center hover:bg-slate-800 transition-all group shadow-slate-200/50 font-medium text-white font-manrope bg-slate-900 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-xl" href="#courses">
              View Syllabus
              <svg className="lucide lucide-arrow-right w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
<a className="inline-flex items-center justify-center hover:bg-slate-50 transition-colors font-medium text-slate-700 font-manrope bg-white border-slate-200 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8" href="#">
              Watch Demo
            </a>
</div>
<div className="mt-12 flex items-center gap-6 text-sm text-slate-400">
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="font-manrope" style={{}}>No boring lectures</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-check-circle-2 w-4 h-4 text-emerald-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="font-manrope" style={{}}>Real-world projects</span>
</div>
</div>
</div>

<div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">

<div className="absolute inset-0 m-auto w-[450px] h-[450px] bg-gradient-to-tr from-blue-100 to-emerald-100 rounded-full blur-[80px] -z-10 opacity-60"></div>

<div className="relative z-10 w-[340px] md:w-[380px] h-[480px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white/80 ring-1 ring-slate-900/5 group transform transition-transform hover:scale-[1.01] duration-500">
<img alt="Friendly Instructor" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
<div className="text-white">
<p className="font-semibold text-lg font-manrope">Sarah Jenkins</p>
<p className="text-xs text-slate-200 font-medium font-manrope opacity-90">
                  Lead Instructor &amp; Excel MVP
                </p>
</div>
</div>
</div>

<div className="absolute bottom-16 -left-4 md:left-0 lg:-left-12 z-20 w-64 bg-white rounded-2xl shadow-[0_20px_40px_-10px_rgba(16,185,129,0.15)] border border-slate-100 p-4 animate-float-delay">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
<svg className="lucide lucide-table-2 w-5 h-5" data-lucide="table-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>
</svg>
</div>
<div className="">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-manrope" style={{}}>
                  Spreadsheets
                </p>
<p className="text-sm font-semibold text-slate-900 font-manrope" style={{}}>
                  Budget_FINAL.xlsx
                </p>
</div>
</div>
<div className="space-y-2">
<div className="flex justify-between text-xs text-slate-500">
<span className="font-manrope" style={{}}>Formula Accuracy</span>
<span className="text-emerald-600 font-bold font-manrope" style={{}}>
                  100%
                </span>
</div>
<div className="h-16 bg-slate-50 rounded-lg border border-slate-100 excel-grid relative overflow-hidden">
<div className="absolute top-2 left-2 right-2 h-3 bg-emerald-100/50 rounded w-3/4"></div>
<div className="absolute top-7 left-2 right-2 h-3 bg-slate-200/50 rounded w-1/2"></div>
<div className="absolute bottom-2 right-2 bg-emerald-500 text-white text-[10px] px-2 py-0.5 rounded shadow-sm font-manrope" style={{}}>
                  =SUM(A1:B4)
                </div>
</div>
</div>
</div>

<div className="-right-4 md:right-0 lg:-right-8 z-20 animate-float bg-white w-56 border-slate-100 border rounded-2xl pt-4 pr-4 pb-4 pl-4 absolute top-10 shadow-[0_20px_40px_-10px_rgba(249,115,22,0.15)] -translate-x-4 -translate-y-12">
<div className="flex items-center gap-3 mb-3">
<div className="w-9 h-9 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center">
<svg className="lucide lucide-presentation w-4 h-4" data-lucide="presentation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h20"></path>
<path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
<path d="m7 21 5-5 5 5"></path>
</svg>
</div>
<div className="">
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider font-manrope" style={{}}>
                  Decks
                </p>
<p className="text-xs font-semibold text-slate-900 font-manrope" style={{}}>
                  Q4 Strategy.pptx
                </p>
</div>
</div>
<div className="aspect-video bg-orange-50 rounded-lg flex items-center justify-center relative overflow-hidden">

<svg className="w-12 h-12 transform -rotate-90" viewbox="0 0 100 100">
<circle cx="50" cy="50" fill="none" r="40" stroke="#fed7aa" strokeWidth="20"></circle>
<circle className="" cx="50" cy="50" fill="none" r="40" stroke="#f97316" stroke-dasharray="180 251" strokeWidth="20"></circle>
</svg>
<div className="absolute bottom-2 left-2 text-[9px] text-orange-800 font-medium bg-white/80 px-2 py-0.5 rounded-full backdrop-blur-sm font-manrope" style={{}}>
                Animation On
              </div>
</div>
</div>

<div className="absolute bottom-32 -right-8 md:right-[-20px] lg:-right-16 z-30 w-60 bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(37,99,235,0.2)] border border-slate-100 p-4 animate-float-delay" style={{animationDelay: '2s'}}>
<div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</div>
<div>
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider font-manrope" style={{}}>
                    Docs
                  </p>
<p className="text-xs font-semibold text-slate-900 font-manrope" style={{}}>
                    Proposal.docx
                  </p>
</div>
</div>
<div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
</div>
<div className="space-y-2">
<div className="h-1.5 bg-slate-100 rounded-full w-full"></div>
<div className="h-1.5 bg-slate-100 rounded-full w-5/6"></div>
<div className="mt-3 p-2 bg-blue-50 rounded-lg border border-blue-100 flex items-center gap-2">
<div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0">
<svg className="lucide lucide-sparkles w-2.5 h-2.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<p className="text-[10px] text-blue-900 font-medium font-manrope" style={{}}>
                  Formatting Fixed
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-slate-100 border-t pt-20 pb-20 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2 font-manrope" style={{}}>
              15k+
            </div>
<p className="text-sm text-slate-500 font-manrope" style={{}}>
              Students Enrolled
            </p>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2 font-manrope" style={{}}>
              4.9/5
            </div>
<p className="text-sm text-slate-500 font-manrope" style={{}}>
              Average Rating
            </p>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2 font-manrope" style={{}}>
              85%
            </div>
<p className="text-sm text-slate-500 font-manrope" style={{}}>
              Promoted within 1yr
            </p>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2 font-manrope" style={{}}>
              24/7
            </div>
<p className="text-sm text-slate-500 font-manrope" style={{}}>
              Mentor Support
            </p>
</div>
</div>
</div>
</section>
<section className="border-y bg-white border-slate-100 pt-24 pb-24" id="courses">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 font-manrope" style={{}}>
            Pick Your Power-Up
          </h2>
<p className="text-slate-500 font-manrope" style={{}}>
            Choose a specific skill track or master the entire suite. Our
            courses are designed to be completed in one weekend.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative bg-slate-50 rounded-3xl p-8 transition-all duration-300 hover:bg-blue-50 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-file-text w-7 h-7" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path>
<path d="M14 2v5a1 1 0 0 0 1 1h5"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-manrope" style={{}}>
              Word Wizardry
            </h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed group-hover:text-blue-900/70 font-manrope" style={{}}>
              From basic letters to complex reports with automated table of
              contents. Stop using spaces to align text.
            </p>
<ul className="space-y-3 text-sm text-slate-600 mb-8">
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Styles &amp; Headings
              </li>
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Mail Merge
              </li>
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-blue-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Collaborative Editing
              </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-blue-600 hover:gap-2 transition-all font-manrope" href="#" style={{}}>
              Start Course
              <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="group relative bg-slate-50 rounded-3xl p-8 transition-all duration-300 hover:bg-emerald-50 hover:-translate-y-1">
<div className="absolute top-0 right-0 p-4">
<span className="bg-emerald-100 text-emerald-700 text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wide font-manrope" style={{}}>
                Most Popular
              </span>
</div>
<div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-table-2 w-7 h-7" data-lucide="table-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-manrope" style={{}}>
              Excel Ninja
            </h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed group-hover:text-emerald-900/70 font-manrope" style={{}}>
              Turn data into decisions. Learn VLOOKUP, Pivot Tables, and Macros
              without getting a headache.
            </p>
<ul className="space-y-3 text-sm text-slate-600 mb-8">
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Advanced Formulas
              </li>
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Data Visualization
              </li>
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-emerald-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Automation
              </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-emerald-600 hover:gap-2 transition-all font-manrope" href="#" style={{}}>
              Start Course
              <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="group relative bg-slate-50 rounded-3xl p-8 transition-all duration-300 hover:bg-orange-50 hover:-translate-y-1">
<div className="w-14 h-14 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-presentation w-7 h-7" data-lucide="presentation" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3h20"></path>
<path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path>
<path d="m7 21 5-5 5 5"></path>
</svg>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 font-manrope" style={{}}>
              PowerPoint Pro
            </h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed group-hover:text-orange-900/70 font-manrope" style={{}}>
              Create decks that keep people awake. Master master-slides,
              transitions, and embedding media.
            </p>
<ul className="space-y-3 text-sm text-slate-600 mb-8">
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Storytelling
              </li>
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Animation Timing
              </li>
<li className="flex items-center gap-2 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-orange-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
                Design Principles
              </li>
</ul>
<a className="inline-flex items-center text-sm font-semibold text-orange-600 hover:gap-2 transition-all font-manrope" href="#" style={{}}>
              Start Course
              <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>
</div>
</div>
</section>

<section className="bg-slate-50 pt-24 pb-24" id="method">
<div className="max-w-7xl mx-auto px-6">
<div className="lg:flex gap-20 items-center">
<div className="lg:w-1/2 mb-12 lg:mb-0">
<div className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-6 font-manrope" style={{}}>
              THE METHOD
            </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6 font-manrope" style={{}}>
              Learn by Doing,
              <br/>
              Not Just Watching.
            </h2>
<p className="text-slate-500 leading-relaxed mb-8 font-manrope" style={{}}>
              Most courses are just 10 hours of video. We give you a simulated
              office environment where you solve real problems.
            </p>
<div className="space-y-8">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-purple-600">
<svg className="lucide lucide-gamepad-2 w-6 h-6" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="6" x2="10" y1="11" y2="11"></line>
<line x1="8" x2="8" y1="9" y2="13"></line>
<line x1="15" x2="15.01" y1="12" y2="12"></line>
<line x1="18" x2="18.01" y1="10" y2="10"></line>
<path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>
</svg>
</div>
<div className="">
<h3 className="font-semibold text-slate-900 font-manrope" style={{}}>
                    Gamified Progression
                  </h3>
<p className="text-sm text-slate-500 mt-1 font-manrope" style={{}}>
                    Earn badges and level up as you conquer difficult formulas
                    and formatting challenges.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-pink-600">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6v6l4 2"></path>
<circle cx="12" cy="12" r="10"></circle>
</svg>
</div>
<div className="">
<h3 className="font-semibold text-slate-900 font-manrope" style={{}}>
                    Micro-Lessons
                  </h3>
<p className="text-sm text-slate-500 mt-1 font-manrope" style={{}}>
                    Got 15 minutes? That's enough to master VLOOKUP. Learn at
                    your own pace.
                  </p>
</div>
</div>
<div className="flex gap-4">
<div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-indigo-600">
<svg className="lucide lucide-award w-6 h-6" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
<circle cx="12" cy="8" r="6"></circle>
</svg>
</div>
<div className="">
<h3 className="font-semibold text-slate-900 font-manrope" style={{}}>
                    Certification
                  </h3>
<p className="text-sm text-slate-500 mt-1 font-manrope" style={{}}>
                    Receive a verifiable certificate upon completion to boost
                    your LinkedIn profile.
                  </p>
</div>
</div>
</div>
</div>
<div className="lg:w-1/2">
<div className="relative bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-[80px] opacity-20"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500 rounded-full blur-[80px] opacity-20"></div>
<div className="relative z-10 text-white">
<div className="flex items-center justify-between mb-8 opacity-80">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<span className="text-xs font-mono tracking-widest uppercase font-manrope" style={{}}>
                    Challenge Mode
                  </span>
</div>
<div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/10 mb-6">
<div className="flex gap-4 mb-4">
<div className="w-10 h-10 rounded bg-green-500/20 flex items-center justify-center text-green-400">
<svg className="lucide lucide-check-circle w-5 h-5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M21.801 10A10 10 0 1 1 17 3.335"></path>
<path d="m9 11 3 3L22 4"></path>
</svg>
</div>
<div className="">
<h4 className="font-medium text-white font-manrope" style={{}}>
                        Task: Fix the Budget
                      </h4>
<p className="text-xs text-slate-300 mt-1 font-manrope" style={{}}>
                        The totals in column E are not summing correctly.
                      </p>
</div>
</div>
<div className="w-full bg-black/30 h-10 rounded px-3 flex items-center font-mono text-sm text-emerald-300 font-manrope" style={{}}>
                    =SUM(E2:E15)
                    <span className="w-2 h-4 bg-emerald-400 ml-1 animate-pulse"></span>
</div>
</div>
<div className="flex items-center justify-between text-sm">
<span className="text-slate-400 font-manrope" style={{}}>
                    Streak:
                    <span className="text-white font-bold font-manrope" style={{}}>
                      5 Days
                    </span>
</span>
<button className="bg-white text-slate-900 px-4 py-2 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors font-manrope" style={{}}>
                    Submit Solution
                  </button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-white py-24 border-t border-slate-100" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 font-manrope">
            Loved by 15,000+ Learners
          </h2>
<p className="text-slate-500 font-manrope">
            See what our community has to say about their promotion-winning
            skills.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-slate-50 p-8 rounded-3xl">
<div className="flex gap-1 mb-4 text-orange-400">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="text-slate-700 mb-6 font-manrope leading-relaxed">
              "The Excel course alone was worth the subscription. I automated my
              entire weekly reporting process in just two days."
            </p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div>
<p className="font-semibold text-slate-900 text-sm font-manrope">
                  Sarah M.
                </p>
<p className="text-xs text-slate-500 font-manrope">
                  Marketing Director
                </p>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 rounded-3xl">
<div className="flex gap-1 mb-4 text-orange-400">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="text-slate-700 mb-6 font-manrope leading-relaxed">
              "Finally, a course that treats you like an adult. The challenges
              are actually hard, which makes solving them feel amazing."
            </p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div>
<p className="font-semibold text-slate-900 text-sm font-manrope">
                  David K.
                </p>
<p className="text-xs text-slate-500 font-manrope">
                  Financial Analyst
                </p>
</div>
</div>
</div>
<div className="bg-slate-50 p-8 rounded-3xl">
<div className="flex gap-1 mb-4 text-orange-400">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24">
<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
</svg>
</div>
<p className="text-slate-700 mb-6 font-manrope leading-relaxed">
              "I landed a new job thanks to the PowerPoint design principles I
              learned here. My presentations stand out now."
            </p>
<div className="flex items-center gap-3">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div>
<p className="font-semibold text-slate-900 text-sm font-manrope">
                  Priya P.
                </p>
<p className="text-xs text-slate-500 font-manrope">Consultant</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-slate-50 py-24 border-t border-slate-100" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4 font-manrope">
            Frequently Asked Questions
          </h2>
<p className="text-slate-500 font-manrope">
            Everything you need to know before you start.
          </p>
</div>
<div className="space-y-4">
<details className="group bg-white rounded-2xl border border-slate-200 open:ring-2 open:ring-blue-100 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-semibold text-slate-900 font-manrope">
                Do I need to install software?
              </span>
<span className="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 font-manrope">
              No! We provide a simulated in-browser experience for the
              exercises. However, having Microsoft Office installed on your
              computer is recommended for applying what you learn to your own
              work.
            </div>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 open:ring-2 open:ring-blue-100 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-semibold text-slate-900 font-manrope">
                Is the certificate recognized?
              </span>
<span className="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 font-manrope">
              Yes, our certificates are verifiable and can be added directly to
              your LinkedIn profile. We are trusted by managers at top companies
              like Deloitte and Microsoft.
            </div>
</details>
<details className="group bg-white rounded-2xl border border-slate-200 open:ring-2 open:ring-blue-100 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="font-semibold text-slate-900 font-manrope">
                Can I cancel anytime?
              </span>
<span className="transition group-open:rotate-180">
<svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24">
<path d="M6 9l6 6 6-6"></path>
</svg>
</span>
</summary>
<div className="text-slate-500 px-6 pb-6 font-manrope">
              Absolutely. There are no long-term contracts. You can cancel your
              subscription from your account settings with one click.
            </div>
</details>
</div>
</div>
</section>
<section className="py-24 relative overflow-hidden bg-slate-900" id="start">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex gap-2 text-xs font-semibold text-blue-300 bg-blue-900/50 border border-blue-800 rounded-full mb-6 py-1 px-3 font-manrope">
              LIMITED TIME OFFER
            </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6 font-manrope leading-[1.1]">
              Join the Top 1% of Office Power Users
            </h2>
<p className="text-slate-400 text-lg mb-8 font-manrope max-w-lg">
              Get instant access to all 40+ courses, interactive challenges, and
              our private community of pros.
            </p>
<ul className="space-y-5 text-slate-300 mb-8">
<li className="flex items-center gap-3 font-manrope">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
                7-day free trial, cancel anytime
              </li>
<li className="flex items-center gap-3 font-manrope">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
                Access to mentor Q&amp;A sessions
              </li>
<li className="flex items-center gap-3 font-manrope">
<div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<polyline points="20 6 9 17 4 12"></polyline>
</svg>
</div>
                Verifiable Certificates
              </li>
</ul>
</div>
<div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl relative">
<div className="absolute -top-4 -right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg rotate-12 font-manrope">
              SAVE 20% TODAY
            </div>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-semibold text-slate-700 mb-1.5 font-manrope">
                    First Name
                  </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 px-4 text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-manrope" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-1.5 font-manrope">
                    Last Name
                  </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 px-4 text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-manrope" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-1.5 font-manrope">
                  Email Address
                </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 px-4 text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-manrope" placeholder="jane@company.com" type="email"/>
</div>
<div>
<label className="block text-sm font-semibold text-slate-700 mb-1.5 font-manrope">
                  Password
                </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 px-4 text-slate-900 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all font-manrope" placeholder="••••••••" type="password"/>
</div>
<button className="w-full bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-200 shadow-blue-100 shadow-md font-manrope flex items-center justify-center gap-2 group" type="button">
                Create Free Account
                <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<line x1="5" x2="19" y1="12" y2="12"></line>
<polyline points="12 5 19 12 12 19"></polyline>
</svg>
</button>
<p className="text-xs text-center text-slate-400 font-manrope mt-4">
                By clicking above, you agree to our Terms and Privacy Policy.
              </p>
</form>
</div>
</div>
</div>
</section>


<footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
<div className="max-w-xs">
<a className="flex items-center gap-2 text-lg font-semibold tracking-tighter text-slate-900 mb-4 font-manrope" href="#" style={{}}>
<div className="w-6 h-6 bg-slate-900 rounded flex items-center justify-center text-white">
<svg className="lucide lucide-command w-3 h-3" data-lucide="command" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"></path>
</svg>
</div>
              OFFICEMASTERY
            </a>
<p className="text-sm text-slate-500 mb-6 font-manrope" style={{}}>
              Making the world's most popular software actually fun to use.
            </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all" href="#">
<svg className="lucide lucide-twitter w-4 h-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
</svg>
</a>
<a className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all" href="#">
<svg className="lucide lucide-linkedin w-4 h-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
<rect height="12" width="4" x="2" y="9"></rect>
<circle cx="4" cy="4" r="2"></circle>
</svg>
</a>
<a className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all" href="#">
<svg className="lucide lucide-instagram w-4 h-4" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20">
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm font-manrope" style={{}}>
                Skills
              </h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-blue-600 transition-colors font-manrope" href="#" style={{}}>
                    Excel Formulas
                  </a>
</li>
<li>
<a className="hover:text-blue-600 transition-colors font-manrope" href="#" style={{}}>
                    Pivot Tables
                  </a>
</li>
<li>
<a className="hover:text-blue-600 transition-colors font-manrope" href="#" style={{}}>
                    PowerPoint Design
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm font-manrope" style={{}}>
                Company
              </h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-blue-600 transition-colors font-manrope" href="#" style={{}}>
                    About Us
                  </a>
</li>
<li>
<a className="hover:text-blue-600 transition-colors font-manrope" href="#" style={{}}>
                    Instructors
                  </a>
</li>
<li>
<a className="hover:text-blue-600 transition-colors font-manrope" href="#" style={{}}>
                    Success Stories
                  </a>
</li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm font-manrope" style={{}}>
                Resources
              </h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>
<a className="hover:text-blue-600 transition-colors font-manrope" href="#" style={{}}>
                    Blog
                  </a>
</li>
<li>
<a className="hover:text-blue-600 transition-colors font-manrope" href="#" style={{}}>
                    Cheat Sheets
                  </a>
</li>
<li>
<a className="hover:text-blue-600 transition-colors font-manrope" href="#" style={{}}>
                    Community
                  </a>
</li>
</ul>
</div>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-400 font-manrope" style={{}}>
            © 2023 OfficeMastery Inc. All rights reserved.
          </p>
<div className="flex gap-6 text-xs text-slate-400">
<a className="hover:text-slate-600 font-manrope" href="#" style={{}}>
              Privacy Policy
            </a>
<a className="hover:text-slate-600 font-manrope" href="#" style={{}}>
              Terms of Service
            </a>
</div>
</div>
</div>
</footer>


    </>
  );
}
