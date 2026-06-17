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
      

<nav className="fixed top-0 w-full z-50 bg-[#F3F4F6]/80 backdrop-blur-xl border-b border-white/50 supports-[backdrop-filter]:bg-[#F3F4F6]/60">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 cursor-pointer group" href="#">

<svg className="h-9 w-auto opacity-90 group-hover:opacity-100 transition-opacity" fill="none" viewbox="0 0 185 32" xmlns="http://www.w3.org/2000/svg">

<rect fill="#556980" height="32" rx="8" width="32"></rect>

<path d="M10 8H16C20.4183 8 23 10.5 23 14C23 16.5 21.5 18.5 19 19.2L23.5 25H19L15.5 20H13.5V25H10V8Z" fill="#F3F4F6"></path>

<path d="M42 25V8H49.5C51.5 8 53 8.5 54 9.5C55 10.5 55.5 12 55.5 13.5C55.5 15.5 54.5 17 53 17.8L56 25H52.5L50 18H45V25H42ZM45 15.5H49C50.5 15.5 52 15 52 13.2C52 11.5 51 10.5 49 10.5H45V15.5Z" fill="#556980"></path>
<path d="M72 16.5C72 22 68.5 25.5 63.5 25.5C58.5 25.5 55 22 55 16.5C55 11 58.5 7.5 63.5 7.5C68.5 7.5 72 11 72 16.5ZM58 16.5C58 20.5 60 22.8 63.5 22.8C67 22.8 69 20.5 69 16.5C69 12.5 67 10.2 63.5 10.2C60 10.2 58 12.5 58 16.5Z" fill="#556980"></path>
<path d="M75 25V8H79L83.5 18L88 8H92V25H89V13L84.5 22H82.5L78 13V25H75Z" fill="#556980"></path>
<path d="M96 25V8H100L104.5 18L109 8H113V25H110V13L105.5 22H103.5L99 13V25H96Z" fill="#556980"></path>
<path d="M117 25V8H124C127.5 8 129.5 10 129.5 12.5C129.5 14.5 128.5 15.5 127 16.2C129 16.8 130 18 130 20.5C130 23.5 127.5 25.5 124 25.5H117ZM120 15.2H123.5C125.5 15.2 126.5 14.5 126.5 12.8C126.5 11.2 125.5 10.5 123.5 10.5H120V15.2ZM120 23H124C126 23 127 22.2 127 20.2C127 18.5 126 17.8 123.5 17.8H120V23Z" fill="#556980"></path>
<path d="M134 25V8H137V25H134Z" fill="#556980"></path>
<path d="M155 24.5C154 25.2 152 25.5 150 25.5C145 25.5 141.5 22 141.5 16.5C141.5 11 145 7.5 150 7.5C152.5 7.5 154 8 155 8.5L154 11C153 10.5 151.8 10.2 150 10.2C147 10.2 144.5 12.5 144.5 16.5C144.5 20.5 147 22.8 150 22.8C152 22.8 153.5 22.2 154.5 21.8L155 24.5Z" fill="#556980"></path>
</svg>
</a>

<div className="flex items-center gap-3 md:gap-4">
<a className="text-sm font-medium text-[#64748B] hover:text-[#334155] transition-colors px-4 py-2 rounded-full hover:bg-white/50" href="#">
                    Find a job
                </a>
<a className="group flex items-center gap-2 bg-[#556980] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#405063] transition-all shadow-lg shadow-[#556980]/20 ring-1 ring-white/20" href="#">
                    Find talent
                    <i className="w-4 h-4 text-white/70 group-hover:translate-x-0.5 group-hover:text-white transition-all stroke-[1.5]" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 px-6 max-w-7xl mx-auto">

<div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-white rounded-full blur-[120px] opacity-60 pointer-events-none -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#556980] rounded-full blur-[150px] opacity-5 pointer-events-none translate-y-1/4"></div>
<div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

<div className="relative z-10 flex flex-col justify-center">

<div className="inline-flex items-center gap-2 bg-white border border-[#E2E8F0] px-3 py-1.5 rounded-full w-fit shadow-sm mb-8">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#556980] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#556980]"></span>
</span>
<span className="text-xs font-medium text-[#64748B] tracking-wide uppercase">Retained Search Partner</span>
</div>

<h1 className="text-5xl lg:text-7xl font-semibold text-[#1E293B] tracking-tight leading-[1.05] mb-6">
                    Recruitment <br/>
<span className="text-[#556980]">Done Properly.</span>
</h1>

<h2 className="text-xl md:text-2xl font-medium text-[#334155] mb-6 tracking-tight">
                    Your retained search partner for the UK building materials industry.
                </h2>

<p className="text-base md:text-lg leading-relaxed max-w-lg text-[#64748B] mb-10 font-normal">
                    Rommbic runs proper searches, delivers straight talk and protects your time - whether you are hiring critical talent or considering your next move.
                </p>

<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<button className="bg-[#1E293B] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-black transition-all shadow-xl shadow-black/5 flex items-center gap-2 group w-full sm:w-auto justify-center">
                        Start a search
                        <i className="w-4 h-4 text-white/60 group-hover:text-white transition-colors stroke-[1.5]" data-lucide="search"></i>
</button>
<button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base font-medium text-[#475569] bg-white border border-[#E2E8F0] hover:bg-[#F8FAFC] hover:border-[#CBD5E1] transition-all w-full sm:w-auto shadow-sm">
                        Register as a candidate
                    </button>
</div>

<div className="pt-16 border-t border-[#E2E8F0] mt-16">
<p className="text-xs font-medium uppercase tracking-widest text-[#94A3B8] mb-6">Trusted by industry leaders</p>
<div className="flex flex-wrap items-center gap-x-10 gap-y-6 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">

<svg className="h-6 w-auto text-[#334155]" fill="currentColor" viewbox="0 0 100 30">
<path d="M10,25 L20,5 L30,25 M15,15 H25 M45,5 Q65,5 65,15 Q65,25 45,25 H40 V5 Z" stroke="currentColor" strokeWidth="3"></path>
</svg>

<svg className="h-6 w-auto text-[#334155]" fill="currentColor" viewbox="0 0 100 30">
<rect height="20" rx="2" width="20" x="10" y="5"></rect>
<rect height="20" rx="10" width="20" x="35" y="5"></rect>
<rect height="20" rx="2" width="20" x="60" y="5"></rect>
</svg>

<svg className="h-5 w-auto text-[#334155]" fill="currentColor" viewbox="0 0 120 30">
<path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 H50 V25 H40 Z M60,5 H80 V10 H65 V12 H75 V17 H65 V25 H60 Z M90,5 L100,25 L110,5" stroke="currentColor" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>

<svg className="h-6 w-auto text-[#334155]" fill="currentColor" viewbox="0 0 100 30">
<circle cx="15" cy="15" fill="none" r="8" stroke="currentColor" strokeWidth="3"></circle>
<path d="M35,15 H55 M45,5 V25" stroke="currentColor" strokeWidth="3"></path>
<rect fill="none" height="14" stroke="currentColor" strokeWidth="3" transform="rotate(45 77 15)" width="14" x="70" y="8"></rect>
</svg>
</div>
</div>
</div>

<div className="relative perspective-[2000px]">

<div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2rem] shadow-2xl overflow-hidden border border-white/40 bg-white group select-none rotate-y-12 hover:rotate-0 transition-transform duration-700 ease-out">

<img alt="Modern Building Materials Architecture" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2531&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/90 via-[#1E293B]/20 to-transparent"></div>

<div className="absolute top-8 left-8 right-8 flex items-center justify-between">
<div className="flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full pl-2 pr-4 py-1.5 shadow-lg">
<div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
<i className="w-3 h-3 text-[#556980] stroke-[1.5]" data-lucide="briefcase"></i>
</div>
<span className="text-xs font-medium text-white tracking-wide">Commercial Director</span>
</div>
<div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-md">
<i className="w-4 h-4 text-white stroke-[1.5]" data-lucide="more-horizontal"></i>
</div>
</div>

<div className="absolute top-1/2 -translate-y-1/2 right-6 w-64 bg-white/80 backdrop-blur-xl border border-white/50 rounded-2xl p-5 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] transform translate-x-4 group-hover:translate-x-0 transition-transform duration-500 delay-100">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="Candidate" className="w-10 h-10 rounded-full border-2 border-white shadow-sm" src="https://i.pravatar.cc/150?img=68"/>
<div>
<h3 className="text-[#1E293B] font-semibold text-sm">Sarah Jenkins</h3>
<p className="text-[#64748B] text-[10px] font-medium uppercase tracking-wide">Operations Mgr</p>
</div>
</div>
</div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-[10px] text-[#64748B] mb-1.5 font-medium">
<span>Industry Experience</span>
<span className="text-[#1E293B]">12 Years</span>
</div>
<div className="h-1 w-full bg-[#E2E8F0] rounded-full overflow-hidden">
<div className="h-full w-[90%] bg-[#556980] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] text-[#64748B] mb-1.5 font-medium">
<span>Leadership Fit</span>
<span className="text-[#1E293B]">High</span>
</div>
<div className="h-1 w-full bg-[#E2E8F0] rounded-full overflow-hidden">
<div className="h-full w-[85%] bg-[#556980] rounded-full"></div>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2 pt-4 border-t border-[#E2E8F0]">
<div className="w-6 h-6 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
<i className="w-3.5 h-3.5 stroke-[1.5]" data-lucide="check"></i>
</div>
<span className="text-xs text-[#475569] font-medium">Interview Ready</span>
</div>
</div>

<div className="absolute bottom-8 left-8 right-8">
<div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl p-4 shadow-xl">
<div className="flex items-center gap-4">
<div className="flex -space-x-3 shrink-0">
<div className="w-10 h-10 rounded-full border-2 border-[#1E293B] bg-gray-300 overflow-hidden">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=33"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-[#1E293B] bg-gray-300 overflow-hidden">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/150?img=11"/>
</div>
<div className="w-10 h-10 rounded-full border-2 border-[#1E293B] bg-[#556980] text-white flex items-center justify-center text-xs font-medium">
                                        +4
                                    </div>
</div>
<div className="flex-1">
<p className="text-white text-sm font-medium">New candidates</p>
<p className="text-white/60 text-xs">Matching your criteria this week</p>
</div>
<button className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
<i className="w-4 h-4 text-white stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 -right-8 top-12 w-24 h-24 bg-stripes opacity-20"></div>
<div className="absolute -left-4 bottom-20 flex flex-col gap-4">
<div className="w-1 h-8 bg-[#CBD5E1] rounded-full"></div>
<div className="w-1 h-4 bg-[#CBD5E1]/50 rounded-full"></div>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#F3F4F6] to-transparent pointer-events-none z-40"></div>
</main>


    </>
  );
}
