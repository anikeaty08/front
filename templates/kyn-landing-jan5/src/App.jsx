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
      

<div className="bg-slate-50 border-b border-slate-100 py-2">
<div className="max-w-7xl mx-auto px-6 flex justify-center items-center text-xs sm:text-sm text-slate-500 font-medium">
<span className="w-2 h-2 rounded-full bg-[#FF4F4F] mr-3"></span>
            Baby prep starts and ends here.
        </div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="w-6 h-6 bg-[#FF4F4F] rounded-full group-hover:scale-110 transition-transform duration-300"></div>
</div>
<span className="font-semibold text-lg tracking-tight text-slate-900">Kid You Not</span>
<span className="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-semibold text-slate-500 tracking-wide uppercase border border-slate-200">Beta</span>
</a>
<div className="hidden md:flex flex-1 max-w-md relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
<iconify-icon className="text-lg" icon="solar:magnifer-linear"></iconify-icon>
</div>
<input className="block w-full pl-10 pr-3 py-2 border border-slate-200 rounded-lg leading-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#FF4F4F]/20 focus:border-[#FF4F4F] sm:text-sm transition-all duration-200" placeholder="Search products..." type="text"/>
</div>
<div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
<a className="hover:text-[#FF4F4F] transition-colors" href="#">Ali's Guide</a>
<a className="hover:text-[#FF4F4F] transition-colors" href="#">About</a>
<a className="text-[#FF4F4F]" href="#">My Registry</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Sign In</a>
<a className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-[#FF4F4F] hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all shadow-[0_2px_10px_-2px_rgba(255,79,79,0.4)]" href="#">
                    Start Guide
                </a>
</div>
</div>
</nav>

<main className="relative pt-16 pb-12 sm:pt-20 sm:pb-24 overflow-hidden border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="max-w-3xl relative z-10 animate-merge-in">
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight mb-8">
                        Being a first time mom is <br className="hidden lg:block"/>
<span className="text-[#FF4F4F] relative inline-block">
                            overwhelming.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-200 -z-10" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8"></path></svg>
</span>
</h1>
<div className="space-y-6 mb-10">
<p className="text-xl sm:text-2xl text-slate-500 leading-relaxed font-normal">
                            The reviews are endless. The lists never end. <br className="hidden sm:block"/>The recommendations conflict. 
                        </p>
<p className="text-lg sm:text-xl text-slate-900 font-medium leading-relaxed border-l-4 border-red-100 pl-4">
                            Kyn cuts the noise with Ali's mom-tested guides, giving you exactly what you need—nothing more.
                        </p>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
<button className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-xl text-white bg-[#FF4F4F] hover:bg-red-600 transition-all shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-0.5 group">
                            Get Ali's List
                            <iconify-icon className="ml-2 text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center hidden md:flex perspective-1000">
<div className="absolute inset-0 bg-gradient-to-tr from-red-50/50 to-purple-50/50 rounded-full blur-3xl opacity-60"></div>


<div className="anim-item pos-sheet-main border-green-200 bg-white">
<div className="anim-icon"><iconify-icon className="text-green-600 text-2xl" icon="solar:file-text-linear"></iconify-icon></div>
<div className="anim-content p-4 pt-10">
<div className="grid grid-cols-3 gap-1 border border-green-100 bg-green-50/30 p-1 h-full opacity-60">
<div className="bg-green-100 h-2 col-span-3 mb-2"></div>
<div className="bg-slate-200 h-full w-full"></div><div className="bg-slate-200 h-full w-full"></div><div className="bg-slate-200 h-full w-full"></div>
</div>
</div>
</div>

<div className="anim-item pos-sheet-2 border-green-100 bg-white opacity-80 z-0">
<div className="anim-icon"><iconify-icon className="text-green-400 text-xl" icon="solar:file-text-linear"></iconify-icon></div>
<div className="anim-content bg-green-50/10 p-2"><div className="w-full h-full border border-dashed border-green-200"></div></div>
</div>

<div className="anim-item pos-sheet-3 border-green-100 bg-white opacity-80 z-0">
<div className="anim-icon"><iconify-icon className="text-green-400 text-xl" icon="solar:file-text-linear"></iconify-icon></div>
<div className="anim-content bg-green-50/10 p-2"><div className="w-full h-full border border-dashed border-green-200"></div></div>
</div>


<div className="anim-item pos-notes-main border-yellow-200 bg-[#FFFDF5]">
<div className="anim-icon"><iconify-icon className="text-yellow-500 text-2xl" icon="solar:notes-linear"></iconify-icon></div>
<div className="anim-content p-4 pt-8">
<div className="space-y-2">
<div className="h-2 w-full bg-yellow-100 rounded"></div>
<div className="h-2 w-3/4 bg-yellow-100 rounded"></div>
<div className="h-2 w-5/6 bg-yellow-100 rounded"></div>
</div>
</div>
</div>

<div className="anim-item pos-notes-2 border-yellow-100 bg-[#FFFDF5] opacity-80 z-0">
<div className="anim-icon"><iconify-icon className="text-yellow-400 text-xl" icon="solar:notes-linear"></iconify-icon></div>
<div className="anim-content p-3"><div className="h-1 w-full bg-yellow-50 mb-1"></div><div className="h-1 w-2/3 bg-yellow-50"></div></div>
</div>

<div className="anim-item pos-notes-3 border-yellow-100 bg-[#FFFDF5] opacity-80 z-0">
<div className="anim-icon"><iconify-icon className="text-yellow-400 text-xl" icon="solar:notes-linear"></iconify-icon></div>
<div className="anim-content p-3"><div className="h-1 w-full bg-yellow-50 mb-1"></div></div>
</div>


<div className="anim-item pos-doc-main border-blue-200 bg-white">
<div className="anim-icon"><iconify-icon className="text-blue-500 text-2xl" icon="solar:document-text-linear"></iconify-icon></div>
<div className="anim-content p-4">
<div className="h-32 w-full bg-slate-50 border border-slate-100 rounded flex items-center justify-center text-[8px] text-slate-300">PDF</div>
</div>
</div>

<div className="anim-item pos-doc-2 border-slate-200 bg-white opacity-80 z-0">
<div className="anim-icon"><iconify-icon className="text-slate-400 text-xl" icon="solar:document-add-linear"></iconify-icon></div>
<div className="anim-content p-3"><div className="w-full h-full bg-slate-50"></div></div>
</div>

<div className="anim-item pos-doc-3 border-red-100 bg-white opacity-80 z-0">
<div className="anim-icon"><iconify-icon className="text-red-400 text-xl" icon="solar:danger-circle-linear"></iconify-icon></div>
<div className="anim-content p-3"><div className="w-full h-full border border-red-50"></div></div>
</div>

<div className="anim-red-dot"></div>

<div className="anim-card bg-white flex flex-col p-6">
<div className="text-center mb-6 pt-4">
<div className="inline-flex items-center justify-center w-12 h-12 bg-[#FF4F4F] rounded-full mb-3 shadow-lg shadow-red-200">
<iconify-icon className="text-white text-2xl" icon="solar:gift-linear"></iconify-icon>
</div>
<h3 className="font-bold text-[#FF4F4F] text-lg tracking-tight">KYN Registry</h3>
<p className="text-xs text-slate-400">Everything in one place</p>
</div>

<div className="flex-1 space-y-3 relative">

<div className="anim-li-1 w-full flex items-center gap-3 p-3 rounded-xl bg-green-50/50 border border-green-100">
<div className="w-8 h-8 rounded-lg bg-white border border-green-100 flex items-center justify-center text-green-500">
<iconify-icon icon="solar:file-text-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-bold text-slate-900">Uppababy Vista</div>
</div>
<div className="text-xs font-semibold text-slate-900">$999</div>
</div>

<div className="anim-li-2 w-full flex items-center gap-3 p-3 rounded-xl bg-yellow-50/50 border border-yellow-100">
<div className="w-8 h-8 rounded-lg bg-white border border-yellow-100 flex items-center justify-center text-yellow-500">
<iconify-icon icon="solar:notes-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-bold text-slate-900">Dr. Browns Bottles</div>
</div>
<div className="text-xs font-semibold text-slate-900">$45</div>
</div>

<div className="anim-li-3 w-full flex items-center gap-3 p-3 rounded-xl bg-blue-50/50 border border-blue-100">
<div className="w-8 h-8 rounded-lg bg-white border border-blue-100 flex items-center justify-center text-blue-500">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-xs font-bold text-slate-900">Artipoppe Carrier</div>
</div>
<div className="text-xs font-semibold text-slate-900">$370</div>
</div>
</div>
<div className="mt-auto">
<div className="w-full bg-slate-900 text-white text-xs font-bold py-3 rounded-xl text-center shadow-lg shadow-slate-200 tracking-wide uppercase">
                                Share Registry
                            </div>
</div>
</div>

</div>
</div>
</div>
</main>

<section className="py-24 bg-slate-50/50 border-b border-slate-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60"></div>

<div className="relative h-80 w-full flex items-center justify-center">

<div className="absolute left-10 top-10 bg-white p-3 rounded-xl shadow-md border border-slate-200 transform -rotate-6">
<iconify-icon className="text-3xl text-green-600 mb-2" icon="solar:file-linear"></iconify-icon>
<div className="w-16 h-2 bg-slate-100 rounded"></div>
</div>
<div className="absolute left-20 bottom-10 bg-white p-3 rounded-xl shadow-md border border-slate-200 transform rotate-3">
<iconify-icon className="text-3xl text-blue-600 mb-2" icon="solar:document-text-linear"></iconify-icon>
<div className="w-16 h-2 bg-slate-100 rounded"></div>
</div>
<div className="absolute left-0 top-1/2 bg-white p-3 rounded-xl shadow-md border border-slate-200 transform -translate-y-1/2 rotate-12">
<iconify-icon className="text-3xl text-yellow-500 mb-2" icon="solar:notes-linear"></iconify-icon>
<div className="w-16 h-2 bg-slate-100 rounded"></div>
</div>

<iconify-icon className="absolute left-[45%] text-slate-300 text-3xl" icon="solar:arrow-right-linear"></iconify-icon>

<div className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white p-6 rounded-2xl shadow-xl border border-red-100 z-10 w-48">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 bg-[#FF4F4F] rounded-full flex items-center justify-center text-white">
<iconify-icon className="text-lg" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="text-xs font-semibold text-slate-900">Unified List</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-100">
<div className="w-1 h-1 rounded-full bg-slate-400"></div>
<span className="text-[10px] text-slate-500">Spreadsheet items</span>
</div>
<div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-100">
<div className="w-1 h-1 rounded-full bg-slate-400"></div>
<span className="text-[10px] text-slate-500">Doc notes</span>
</div>
<div className="flex items-center gap-2 p-2 bg-slate-50 rounded border border-slate-100">
<div className="w-1 h-1 rounded-full bg-slate-400"></div>
<span className="text-[10px] text-slate-500">Phone screenshots</span>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
<iconify-icon className="text-sm" icon="solar:sort-from-bottom-to-top-linear"></iconify-icon>
                        Seamless Import
                    </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                        Bring your own mess. <br/>We'll handle the rest.
                    </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-6">
                        Got a spreadsheet from your sister? A notes app list from 2AM scrolling? A random Word doc? Kyn ingests lists in any format—Excel, CSV, Word, or PDF—and merges them into your master registry automatically.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#FF4F4F] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Import from .xlsx, .csv, .docx, .pdf</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#FF4F4F] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Auto-detection of product links and prices</span>
</li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-[#FF4F4F] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Deduplicates items instantly</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6">

<div className="flex justify-center mb-16">
<div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full text-white shadow-lg">
<iconify-icon className="text-lg" icon="solar:heart-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight">Meet the Creator</span>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="flex flex-col">
<h2 className="text-5xl font-bold text-slate-900 tracking-tight mb-2">Ali</h2>
<p className="text-xl text-slate-500 font-medium mb-8">Mom of three. The list everyone asks for.</p>
<div className="space-y-6 text-slate-600 leading-relaxed text-base">
<p>
                            It started as a simple Google Doc sent to a pregnant friend. Then it was shared with five more. Then fifty. Now, her list has been <strong>organically shared to hundreds of moms</strong> who were drowning in conflicting reviews.
                        </p>
<p>
                            She wakes up to a constant stream of "You saved my life" texts and emails from parents she's never met. Why? Because she cut through the noise to find the gems—the smart bargain buys, the necessary splurges, and the items that actually work.
                        </p>
</div>

<div className="mt-10 bg-pink-50 border border-pink-100 rounded-2xl p-8 shadow-sm">
<h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-pink-500 text-xl" icon="solar:chat-round-like-linear"></iconify-icon>
                            Community Approved
                        </h3>
<p className="text-slate-700 text-sm leading-relaxed italic">
                            "I was paralyzed by choices until I found Ali's list. It's the only thing I forward to my pregnant friends now. Thank you for giving me my sanity back!" — Sarah M.
                        </p>
</div>
</div>

<div className="relative flex justify-center lg:justify-end">

<div className="absolute inset-0 bg-pink-50 rounded-full blur-3xl opacity-50 transform scale-90"></div>
<div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-100">
<img alt="Ali - Creator" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 object-top" src="https://kidyounot.ca/assets/Ali-97ace056.jpeg"/>
</div>

<div className="absolute bottom-4 left-4 sm:bottom-10 sm:left-10 bg-white p-4 rounded-xl shadow-xl border border-slate-100 max-w-[180px] transform rotate-3 hover:rotate-0 transition-transform">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-[#FF4F4F] text-lg" icon="solar:users-group-rounded-linear"></iconify-icon>
<span className="text-xs font-bold text-slate-900">100s of Shares</span>
</div>
<p className="text-[10px] text-slate-500 leading-tight">Moms sharing with moms, every single day.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-b border-slate-200 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-3xl mx-auto">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                    See it. Click it. Done.
                </h2>
<p className="text-lg text-slate-500">
                    No tabs, no spreadsheets. Find a product in our curated guide and add it directly to your registry in one click. It's immediately synced.
                </p>
</div>

<div className="relative max-w-5xl mx-auto">

<div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-[2px] border-t-2 border-dashed border-slate-300 z-0"></div>
<div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-slate-200 rounded-full items-center justify-center z-10 text-slate-400">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="grid lg:grid-cols-2 gap-8 lg:gap-24 items-center">

<div className="relative group">
<div className="absolute -top-12 left-0 text-sm font-semibold text-slate-400 uppercase tracking-wide">1. Browse Guide</div>
<div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">

<div className="aspect-[4/3] bg-gray-50 flex items-center justify-center border-b border-slate-100 relative">
<iconify-icon className="text-6xl text-slate-300" icon="solar:sofa-linear"></iconify-icon>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-semibold text-slate-700 border border-slate-100">Highly Rated</div>
</div>

<div className="p-6">
<div className="flex justify-between items-start mb-2">
<div>
<h3 className="font-semibold text-slate-900 text-lg">Nuna Rava Car Seat</h3>
<p className="text-slate-500 text-sm">Caviar Black</p>
</div>
<span className="font-medium text-slate-900">$550.00</span>
</div>
<p className="text-sm text-slate-500 mb-6 leading-relaxed">
                                    The easiest car seat to install. Flame retardant free. Fits 3 across in most SUVs.
                                </p>

<div className="relative group/dropdown">
<button className="w-full py-3 bg-slate-900 text-white rounded-xl font-medium shadow-lg shadow-slate-200 transition-all flex items-center justify-between px-5 hover:bg-slate-800">
<span className="flex items-center gap-2">
                                            Add to List
                                        </span>
<iconify-icon className="text-lg text-slate-400 group-hover/dropdown:rotate-180 transition-transform duration-200" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>

<div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-100 p-1.5 opacity-100 visible translate-y-0 z-50 transform transition-all duration-200">
<div className="space-y-0.5">
<div className="flex items-center gap-3 px-3 py-2.5 hover:bg-slate-50 rounded-lg cursor-pointer group/item transition-colors">
<iconify-icon className="text-lg text-slate-400 group-hover/item:text-slate-600" icon="solar:cart-large-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-600 group-hover/item:text-slate-900">Buy</span>
</div>
<div className="flex items-center gap-3 px-3 py-2.5 hover:bg-slate-50 rounded-lg cursor-pointer group/item transition-colors">
<iconify-icon className="text-lg text-slate-400 group-hover/item:text-slate-600" icon="solar:refresh-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-600 group-hover/item:text-slate-900">Borrow</span>
</div>
<div className="flex items-center gap-3 px-3 py-2.5 hover:bg-slate-50 rounded-lg cursor-pointer group/item transition-colors">
<iconify-icon className="text-lg text-slate-400 group-hover/item:text-slate-600" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-600 group-hover/item:text-slate-900">Already Have</span>
</div>

<div className="flex items-center justify-between px-3 py-2.5 bg-red-50 rounded-lg cursor-pointer border border-red-100 shadow-sm">
<div className="flex items-center gap-3">
<iconify-icon className="text-lg text-[#FF4F4F]" icon="solar:gift-linear"></iconify-icon>
<span className="text-sm font-semibold text-slate-900">Registry</span>
</div>
<iconify-icon className="text-lg text-[#FF4F4F]" icon="solar:check-read-linear"></iconify-icon>
</div>
</div>
</div>
</div>

</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-12 left-0 text-sm font-semibold text-slate-400 uppercase tracking-wide">2. Synced to Registry</div>
<div className="bg-white rounded-2xl border border-slate-200 shadow-lg p-2 max-w-md mx-auto w-full rotate-1 lg:rotate-0">

<div className="px-4 py-3 border-b border-slate-50 flex justify-between items-center mb-2">
<div className="font-semibold text-slate-900">My Registry</div>
<div className="text-xs text-slate-400">3 items</div>
</div>

<div className="space-y-2">

<div className="flex items-center gap-3 p-3 rounded-xl border border-red-200 bg-red-50/50 animate-highlight">
<div className="w-10 h-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-lg text-slate-400" icon="solar:sofa-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="font-medium text-sm text-slate-900 truncate">Nuna Rava Car Seat</div>
<div className="text-xs text-[#FF4F4F] flex items-center gap-1">
<iconify-icon className="text-xs" icon="solar:check-circle-linear"></iconify-icon>
                                            Just added
                                        </div>
</div>
<div className="text-sm font-medium text-slate-900">$550</div>
</div>

<div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-white opacity-60">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-lg text-slate-400" icon="solar:bottle-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="font-medium text-sm text-slate-900">Dr. Brown's Bottle Set</div>
<div className="text-xs text-slate-400">Added yesterday</div>
</div>
<div className="text-sm font-medium text-slate-900">$45</div>
</div>
<div className="flex items-center gap-3 p-3 rounded-xl border border-slate-100 bg-white opacity-60">
<div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
<iconify-icon className="text-lg text-slate-400" icon="solar:bed-linear"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="font-medium text-sm text-slate-900">Newton Crib Mattress</div>
<div className="text-xs text-slate-400">Added yesterday</div>
</div>
<div className="text-sm font-medium text-slate-900">$299</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold uppercase tracking-wide mb-6">
<iconify-icon className="text-sm" icon="solar:globe-linear"></iconify-icon>
                Universal Registry
            </div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6 max-w-2xl mx-auto">
                Retailer Agnostic. <br/>One link to rule them all.
            </h2>
<p className="text-lg text-slate-500 leading-relaxed mb-12 max-w-2xl mx-auto">
                Don't force your friends to check three different websites. Kyn creates a single, beautiful destination for your registry. Add items from Amazon, Target, Pottery Barn, or that niche boutique in Paris.
            </p>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-12">
<div className="font-bold text-xl text-slate-800 flex items-center justify-center gap-1"><iconify-icon className="text-xl" icon="solar:cart-large-linear"></iconify-icon> Amazon</div>
<div className="font-bold text-xl text-slate-800 flex items-center justify-center gap-1"><iconify-icon className="text-red-600 text-xl" icon="solar:target-linear"></iconify-icon> Target</div>
<div className="font-bold text-xl text-slate-800 flex items-center justify-center gap-1">Nordstrom</div>
<div className="font-bold text-xl text-slate-800 flex items-center justify-center gap-1">Crate&amp;Kids</div>
<div className="font-bold text-xl text-slate-800 flex items-center justify-center gap-1">Babylist</div>
<div className="font-bold text-xl text-slate-800 flex items-center justify-center gap-1">Etsy</div>
</div>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="text-left">
<div className="text-sm font-medium text-slate-900 mb-1">Your Registry Link</div>
<div className="text-xs text-slate-500">Share this with family &amp; friends</div>
</div>
<div className="flex-1 w-full sm:w-auto bg-white border border-slate-300 rounded-lg px-4 py-3 flex items-center justify-between shadow-sm">
<span className="text-slate-600 text-sm font-mono">kyn.com/registry/ali-and-tom</span>
<button className="text-[#FF4F4F] text-xs font-medium hover:text-red-700">Copy</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-2">
                    Guides for every stage.
                </h2>
<p className="text-slate-500 text-lg max-w-2xl">Curated essentials for every milestone of your journey, formatted for instant use.</p>
</div>
<div className="grid lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-8">
<div className="bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden">
<div className="p-8 sm:p-10">

<div className="mb-8">
<h3 className="text-4xl font-bold tracking-tight text-slate-900 mb-3">Pack Your Hospital Bag</h3>
<p className="text-slate-500 text-lg">Essential items to pack for your hospital stay when having a baby</p>
</div>

<div className="h-px bg-slate-200 w-full mb-8"></div>

<div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-4 gap-2">
<h4 className="text-xl font-bold text-slate-900">Guide Items</h4>
<span className="text-slate-400 text-sm font-medium">Showing 5 of 49 items</span>
</div>

<div className="border border-slate-100 rounded-lg overflow-hidden">

<div className="bg-slate-50 border-b border-slate-100 flex py-3 px-5">
<div className="w-16 text-xs font-bold uppercase tracking-wider text-slate-500">Done</div>
<div className="flex-1 text-xs font-bold uppercase tracking-wider text-slate-500">Item</div>
</div>

<div className="divide-y divide-slate-100 bg-white">

<div className="flex items-center py-5 px-5 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="w-16 flex items-center">
<input className="custom-checkbox cursor-pointer" type="checkbox"/>
</div>
<span className="text-blue-600 font-medium group-hover:underline">Underwear</span>
</div>

<div className="flex items-center py-5 px-5 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="w-16 flex items-center">
<input className="custom-checkbox cursor-pointer" type="checkbox"/>
</div>
<span className="text-blue-600 font-medium group-hover:underline">Tens Machine</span>
</div>

<div className="flex items-center py-5 px-5 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="w-16 flex items-center">
<input className="custom-checkbox cursor-pointer" type="checkbox"/>
</div>
<span className="text-blue-600 font-medium group-hover:underline">Portable Charger</span>
</div>

<div className="flex items-center py-5 px-5 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="w-16 flex items-center">
<input className="custom-checkbox cursor-pointer" type="checkbox"/>
</div>
<span className="text-blue-600 font-medium group-hover:underline">Super Long Charging Cable</span>
</div>

<div className="flex items-center py-5 px-5 hover:bg-slate-50 transition-colors group cursor-pointer">
<div className="w-16 flex items-center">
<input className="custom-checkbox cursor-pointer" type="checkbox"/>
</div>
<span className="text-blue-600 font-medium group-hover:underline">Ice Pads</span>
</div>

<div className="relative py-5 px-5 bg-white">
<div className="flex items-center opacity-30 blur-[0.5px]">
<div className="w-16 flex items-center">
<input className="custom-checkbox" disabled="" type="checkbox"/>
</div>
<span className="text-slate-400 font-medium">Black Underwear</span>
</div>

<div className="absolute inset-0 flex items-center justify-center z-10">
<button className="bg-white border border-slate-200 shadow-sm rounded-full px-4 py-1.5 text-sm font-semibold text-slate-600 flex items-center gap-2 hover:bg-slate-50 hover:text-slate-800 transition-all hover:scale-105">
<iconify-icon className="text-slate-400 text-sm" icon="solar:info-circle-linear"></iconify-icon>
                                                    More items below...
                                                </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">
<div className="flex items-center justify-between">
<h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider">More Guides</h3>
<a className="text-xs font-semibold text-[#FF4F4F] hover:underline" href="#">View All</a>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:border-slate-300 cursor-pointer flex flex-row h-28">
<div className="w-24 bg-orange-50 overflow-hidden relative shrink-0">
<img alt="Newborn" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="p-4 flex flex-col justify-center">
<div className="text-[10px] font-bold text-orange-600 uppercase tracking-wide mb-1">0-3 Months</div>
<h4 className="font-semibold text-slate-900 text-sm leading-tight mb-1 group-hover:text-[#FF4F4F] transition-colors">Newborn Survival</h4>
<p className="text-xs text-slate-500 line-clamp-2">Sleep, swaddles, and sanity savers.</p>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:border-slate-300 cursor-pointer flex flex-row h-28">
<div className="w-24 bg-blue-50 overflow-hidden relative shrink-0">
<img alt="Feeding" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="p-4 flex flex-col justify-center">
<div className="text-[10px] font-bold text-blue-600 uppercase tracking-wide mb-1">Feeding</div>
<h4 className="font-semibold text-slate-900 text-sm leading-tight mb-1 group-hover:text-[#FF4F4F] transition-colors">The Feeding Manual</h4>
<p className="text-xs text-slate-500 line-clamp-2">Breast, bottle, or both. Pumps, pillows...</p>
</div>
</div>

<div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 hover:border-slate-300 cursor-pointer flex flex-row h-28">
<div className="w-24 bg-green-50 overflow-hidden relative shrink-0">
<img alt="Nursery" className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1512918760513-95f6929c3d38?auto=format&amp;fit=crop&amp;w=300&amp;q=80"/>
</div>
<div className="p-4 flex flex-col justify-center">
<div className="text-[10px] font-bold text-green-600 uppercase tracking-wide mb-1">Nursery</div>
<h4 className="font-semibold text-slate-900 text-sm leading-tight mb-1 group-hover:text-[#FF4F4F] transition-colors">Nursery Setup</h4>
<p className="text-xs text-slate-500 line-clamp-2">Furniture, blackout solutions &amp; organization.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-t border-slate-200 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl font-bold tracking-tight text-slate-900 mb-1">350+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Curated Categories</div>
</div>
<div>
<div className="text-3xl font-bold tracking-tight text-slate-900 mb-1">1000+</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Mom Approved</div>
</div>
<div>
<div className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Conception</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">To Toddlerhood</div>
</div>
<div>
<div className="text-3xl font-bold tracking-tight text-slate-900 mb-1">Universal</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">Registry System</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-slate-900 rounded-full"></div>
<span className="font-semibold text-slate-900">Kid You Not</span>
</div>
<p className="text-sm text-slate-400">© 2024 Kid You Not. All rights reserved.</p>
</div>
</div>
</section>

    </>
  );
}
