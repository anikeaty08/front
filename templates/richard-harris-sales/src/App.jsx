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



(function () {
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { animation-play-state: paused !important; }
.animate-on-scroll.animate { animation-play-state: running !important; }
`;
document.head.appendChild(style);
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.2, rootMargin: "0px 0px -10% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function toggleFaq(button) {
          const content = button.nextElementSibling;
          const icon = button.querySelector('iconify-icon');
          const isOpen = content.classList.contains('grid-rows-[1fr]');

          if (isOpen) {
            content.classList.remove('grid-rows-[1fr]');
            content.classList.add('grid-rows-[0fr]');
            icon.style.transform = 'rotate(0deg)';
          } else {
            content.classList.remove('grid-rows-[0fr]');
            content.classList.add('grid-rows-[1fr]');
             icon.style.transform = 'rotate(180deg)';
          }
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
      

<div className="fixed z-0 pointer-events-none top-0 right-0 bottom-0 left-0">
<div className="stars absolute inset-0"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[100px] rounded-full mix-blend-multiply bg-indigo-100/50"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] blur-[100px] rounded-full bg-indigo-100/40 mix-blend-multiply"></div>
</div>

<nav className="sticky z-50 flex bg-white/80 max-w-6xl border-slate-200/60 border rounded-2xl mx-auto pt-2 pr-2 pb-2 pl-2 top-4 shadow-sm backdrop-blur-xl items-center justify-between">
<a className="flex items-center gap-2 pl-3 hover:opacity-80 transition-opacity" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 flex items-center justify-center shadow-lg to-indigo-600 shadow-indigo-500/20">
<iconify-icon className="text-white text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<span className="font-medium text-lg tracking-tight text-slate-900 font-sans">
          The Harris Consulting Group
        </span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-medium text-slate-900 bg-slate-100 rounded-xl transition-all font-sans" href="#">
          Training
        </a>
<a className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all font-sans" href="#">
          Coaching
        </a>
<a className="px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all font-sans" href="#">
          Resources
        </a>
<div className="relative group">
<button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-500 group-hover:text-slate-900 transition-all font-sans">
            About
            <iconify-icon className="text-slate-400 group-hover:rotate-180 transition-transform" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex items-center gap-2 sm:gap-4 pr-1 sm:pr-0">
<a className="px-4 sm:px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl shadow-lg shadow-slate-900/10 transition-all active:scale-95 font-sans whitespace-nowrap" href="#">
          Schedule a Conversation
        </a>
<button className="md:hidden p-2 text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-colors active:scale-95">
<iconify-icon className="text-xl block" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<main className="grid grid-cols-1 lg:grid-cols-12 lg:gap-8 lg:pt-24 max-w-7xl mx-auto pt-24 pr-6 pb-20 pl-6 relative items-center">

<div className="lg:col-span-7 flex flex-col relative items-start z-10">

<div className="mb-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 bg-white shadow-sm backdrop-blur-sm text-xs text-slate-500 animate-entry delay-100">
<iconify-icon className="text-sm text-indigo-500" icon="solar:target-linear"></iconify-icon>
<span className="font-sans">
            Practical Sales Execution
          </span>
</div>

<h1 className="lg:text-[64px] leading-[1.05] animate-entry delay-150 text-5xl text-slate-900 max-w-xl mb-6 tracking-tight font-manrope font-medium">
          Practical Sales Training That Actually Improves Execution
        </h1>

<p className="text-lg text-slate-500 max-w-xl mb-6 leading-relaxed animate-entry delay-200 font-sans">
          I help B2B sales teams improve prospecting, discovery, and qualification so they can sell with clarity and confidence.
        </p>

<div className="mb-8 w-full max-w-xl rounded-2xl overflow-hidden ring-1 ring-slate-200/50 shadow-xl animate-entry delay-300 aspect-video relative z-20 bg-slate-800 flex items-center justify-center group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/20">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/20 group-hover:scale-110 group-hover:bg-white/20 transition-all z-10 shadow-xl">
<iconify-icon className="text-3xl text-white ml-1" icon="solar:play-linear"></iconify-icon>
</div>
<div className="absolute bottom-4 left-4 z-10 text-white/70 text-sm font-medium font-sans">
            Play Video Sales Letter
          </div>
</div>

<div className="flex flex-wrap gap-6 items-center animate-entry delay-500">
<button className="group relative px-8 py-3.5 rounded-full text-white text-lg font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_30px_-5px_rgba(37,99,235,0.4)] active:scale-95 overflow-hidden bg-indigo-600">
<div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="relative flex items-center justify-center gap-2">
<span className="font-sans">Schedule a Conversation</span>
</div>
</button>
<button className="relative px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 text-lg font-medium backdrop-blur-md transition-all duration-300 hover:bg-slate-50 hover:border-slate-300 flex items-center gap-2 shadow-sm hover:text-indigo-600">
<span className="font-sans">View Programs</span>
</button>
</div>
</div>

<div className="lg:col-span-5 flex lg:justify-end lg:mt-0 animate-entry delay-700 z-10 mt-12 relative justify-center">

<div className="electric-card overflow-hidden bg-white w-[360px] rounded-[32px] p-[2px] relative ring-1 ring-slate-200/50">

<div className="absolute inset-0 bg-gradient-to-b to-transparent opacity-80 z-0 from-indigo-400 via-indigo-200 from-indigo-400/10"></div>

<div className="z-10 flex flex-col overflow-hidden bg-white h-full rounded-[30px] p-8 relative items-start">

<div className="absolute top-0 right-0 w-full h-40 bg-gradient-to-b to-transparent from-indigo-50/80"></div>

<div className="flex justify-between w-full items-center mb-6 relative">
<span className="text-[10px] uppercase text-slate-500 border border-slate-200 px-2 py-1 rounded bg-slate-50 flex items-center gap-1.5 font-sans">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Sales Discipline
              </span>
<span className="text-[10px] font-mono text-slate-400 tracking-wider font-sans">
                Q3 GOALS
              </span>
</div>
<h3 className="text-xl text-slate-900 mb-2 tracking-tight font-semibold font-sans">
              Execution Checklist
            </h3>
<p className="text-xs text-slate-500 mb-6 leading-relaxed font-sans">
              Fundamentals drive the pipeline. Stay consistent.
            </p>

<div className="w-full mb-8 space-y-3">

<div className="flex items-center gap-3 group">
<div className="w-5 h-5 rounded-[6px] border border-green-200 bg-green-50 flex items-center justify-center text-green-600">
<iconify-icon className="text-sm" icon="solar:check-circle-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-400 line-through decoration-slate-300 font-sans">
                  Pre-Call Research
                </span>
<span className="ml-auto text-[10px] text-slate-400 font-mono font-sans">
                  Done
                </span>
</div>

<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-200 rounded-xl opacity-40 blur-sm group-hover:opacity-60 transition-opacity to-indigo-200"></div>
<div className="relative flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-md">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 flex items-center justify-center shadow-[0_4px_10px_rgba(79,70,229,0.3)] text-white to-indigo-600">
<iconify-icon className="text-lg" icon="solar:microphone-3-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-0.5">
<span className="text-sm text-slate-900 font-medium font-sans">
                      Discovery Execution
                    </span>
<div className="flex items-center gap-1.5">
<span className="text-[10px] text-indigo-600 font-sans">
                        Live Call
                      </span>
<span className="w-0.5 h-0.5 rounded-full bg-slate-400"></span>
<span className="text-[10px] text-slate-500 font-sans">
                        Active
                      </span>
</div>
</div>
<span className="ml-auto text-[10px] text-slate-600 font-mono bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded font-sans">
                    FOCUS
                  </span>
</div>
</div>

<div className="flex items-center gap-3 group opacity-80">
<div className="w-5 h-5 rounded-[6px] border border-slate-200 hover:border-indigo-400 transition-colors bg-white flex items-center justify-center text-slate-400">
<iconify-icon className="text-xs" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
</div>
<span className="text-sm text-slate-500 font-sans">
                  Deal Qualification
                </span>
<span className="ml-auto text-[10px] text-slate-400 font-mono font-sans">
                  Next
                </span>
</div>
</div>

<button className="hover:brightness-105 transition-all text-sm text-white bg-gradient-to-r w-full rounded-full border-t mb-8 py-3 from-indigo-600 shadow-[0_4px_15px_rgba(79,70,229,0.25)] font-sans border-indigo-400/20 via-indigo-600 to-sky-600">
              Review Pipeline
            </button>

<div className="flex items-center justify-between w-full pt-4 border-t border-slate-100">
<div className="flex flex-col gap-1">
<span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans">
                  Pipeline Impact
                </span>
<div className="flex items-center gap-1.5">
<span className="text-slate-900 font-medium font-sans">
                    Trending Up
                  </span>
<span className="text-[10px] text-emerald-600 bg-emerald-50 px-1 py-px rounded font-sans">
                    Healthy
                  </span>
</div>
</div>
<div className="flex flex-col gap-1 text-right">
<span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans">
                  Forecast
                </span>
<span className="text-slate-900 font-medium font-sans">
                  Predictable
                </span>
</div>
</div>
</div>
</div>
</div>
</main>

<section className="lg:-mt-8 animate-entry delay-700 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:px-0 animate max-w-7xl mx-auto pt-0 px-2.5 pb-24 relative perspective-distant group">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[300px] blur-[120px] rounded-full z-0 bg-indigo-100/50 transition-transform duration-1000 group-hover:scale-125 group-hover:bg-indigo-200/40"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 transform-style-preserve-3d">

<div className="overflow-hidden md:col-span-2 lg:col-span-3 lg:bg-white/80 animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] animate bg-white/80 ring-slate-200 ring-1 rounded-2xl relative shadow-2xl backdrop-blur-md rotate-x-5 hover:rotate-x-0 hover:scale-[1.02] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] hover:shadow-[0_40px_80px_-20px_rgba(79,70,229,0.3)] transform-style-preserve-3d">

<div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-90 z-30"></div>

<div className="flex sm:px-6 bg-white border-slate-100 border-b py-3 px-4 items-center justify-between relative z-20">
<div className="flex items-center gap-3 text-sm text-slate-500">
<a className="inline-flex items-center gap-2 text-slate-900 transition-colors font-sans" href="#">
                Sales Dashboard
              </a>
<span className="opacity-40 font-sans">/</span>
<span className="text-slate-900 font-sans">
                Pipeline Review
              </span>
<span className="inline text-[11px] font-sans">
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-red-500 inline-block mr-1"></span>
                Action Needed
              </span>
</div>

<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 bg-slate-50 ring-1 ring-slate-200 rounded-lg px-2.5 h-8">
<iconify-icon className="text-slate-400 text-sm" icon="solar:magnifer-linear"></iconify-icon>
<input className="bg-transparent text-sm text-slate-700 placeholder-slate-400 focus:outline-none w-48" placeholder="Search opportunities..." type="text"/>
</div>
<button className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-white text-slate-600 text-xs ring-1 ring-slate-200 px-3 py-1.5 hover:bg-slate-50 transition font-sans">
<iconify-icon className="text-sm" icon="solar:refresh-linear"></iconify-icon>
                Sync CRM
              </button>
</div>
</div>

<div className="grid grid-cols-12 z-10 relative">

<aside className="hidden md:flex md:col-span-3 lg:col-span-2 flex-col min-h-[520px] bg-slate-50/50 border-slate-100 border-r">
<div className="p-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-lg shadow-slate-900/10 text-sm hover:brightness-110 transition-all px-3 py-2 font-sans">
<iconify-icon className="text-lg" icon="solar:add-circle-linear"></iconify-icon>
                  New Opportunity
                </button>
</div>
<nav className="px-3 pb-4 space-y-6 overflow-y-auto">
<div>
<div className="px-2 mb-2 text-[10px] uppercase text-slate-400 font-sans">
                    Views
                  </div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-900 bg-white ring-1 ring-slate-200 shadow-sm font-sans" href="#">
<iconify-icon icon="solar:widget-linear"></iconify-icon>
                        Pipeline
                      </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-500 hover:text-slate-900 hover:bg-white transition-colors font-sans" href="#">
<iconify-icon icon="solar:chart-linear"></iconify-icon>
                        Forecasting
                      </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-500 hover:text-slate-900 hover:bg-white transition-colors font-sans" href="#">
<iconify-icon icon="solar:stop-circle-line-duotone"></iconify-icon>
                        Stalled Deals
                        <span className="ml-auto text-[10px] bg-red-100 text-red-600 px-1.5 py-0.5 rounded font-sans">
                          Alert
                        </span>
</a>
</li>
</ul>
</div>
<div>
<div className="px-2 mb-2 text-[10px] uppercase text-slate-400 font-sans">
                    Teams
                  </div>
<ul className="space-y-1">
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-500 hover:text-slate-900 hover:bg-white transition-colors font-sans" href="#">
<span className="w-2 h-2 rounded-full bg-indigo-400"></span>
                        Enterprise Outbound
                      </a>
</li>
<li>
<a className="flex items-center gap-2 px-2 py-2 rounded-md text-sm text-slate-500 hover:text-slate-900 hover:bg-white transition-colors font-sans" href="#">
<span className="w-2 h-2 rounded-full bg-orange-400"></span>
                        Mid-Market AE
                      </a>
</li>
</ul>
</div>
</nav>
</aside>

<main className="col-span-12 md:col-span-6 lg:col-span-7 min-h-[520px] bg-white">

<div className="px-4 sm:px-6 py-6 border-b border-slate-100 bg-slate-50/30">
<div className="flex items-center justify-between">
<div className="flex flex-col gap-1">
<h3 className="text-slate-900 text-2xl font-manrope font-medium">
                      If You're Honest, This Is What Your Sales Team Is Struggling With…
                    </h3>
</div>
</div>
<div className="mt-2 text-sm text-slate-500 font-sans">
                  The issue isn’t effort.
                  <span className="text-slate-900 font-medium font-sans">
                    It’s execution.
                  </span>
</div>
</div>

<div className="px-4 sm:px-6 py-6 space-y-4">

<div className="rounded-xl ring-1 ring-slate-200 bg-white p-4 hover:shadow-md transition-shadow group cursor-pointer border-l-4 border-l-orange-500">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 mt-0.5">
<div className="w-10 h-10 rounded-md border border-slate-200 bg-slate-50 flex items-center justify-center">
<iconify-icon className="text-xl text-orange-500" icon="solar:microphone-bold-duotone"></iconify-icon>
</div>
</div>
<div>
<div className="text-sm text-slate-900 font-medium font-sans">
                          Reps talk too much and discover too little.
                        </div>
<div className="text-xs text-slate-500 mt-0.5 font-sans">
                          Poor listening leads to missed opportunities.
                        </div>
</div>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-slate-200 bg-white p-4 hover:shadow-md transition-shadow group cursor-pointer border-l-4 border-l-indigo-500">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 mt-0.5">
<div className="w-10 h-10 rounded-md border border-slate-200 bg-slate-50 flex items-center justify-center">
<iconify-icon className="text-xl text-indigo-500" icon="solar:ruler-cross-pen-bold-duotone"></iconify-icon>
</div>
</div>
<div>
<div className="text-sm text-slate-900 font-medium font-sans">
                          Qualification is inconsistent.
                        </div>
<div className="text-xs text-slate-500 mt-0.5 font-sans">
                          Creating fake pipeline and false hope.
                        </div>
</div>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-slate-200 bg-white p-4 hover:shadow-md transition-shadow group cursor-pointer border-l-4 border-l-blue-500">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 mt-0.5">
<div className="w-10 h-10 rounded-md border border-slate-200 bg-slate-50 flex items-center justify-center">
<iconify-icon className="text-xl text-blue-500" icon="solar:letter-opened-bold-duotone"></iconify-icon>
</div>
</div>
<div>
<div className="text-sm text-slate-900 font-medium font-sans">
                          Prospecting lacks structure.
                        </div>
<div className="text-xs text-slate-500 mt-0.5 font-sans">
                          Generic outreach gets generic results.
                        </div>
</div>
</div>
</div>
</div>

<div className="rounded-xl ring-1 ring-red-100 bg-red-50 p-4 border-l-4 border-l-red-500">
<div className="flex items-start justify-between">
<div className="flex items-center gap-3">
<div className="flex-shrink-0 mt-0.5">
<div className="w-10 h-10 rounded-md border border-red-200 bg-white flex items-center justify-center">
<iconify-icon className="text-xl text-red-500" icon="solar:stop-circle-bold-duotone"></iconify-icon>
</div>
</div>
<div>
<div className="text-sm text-slate-900 font-medium font-sans">
                          Deals stall because fundamentals are weak.
                        </div>
<div className="text-xs text-slate-500 mt-0.5 font-sans">
                          Managers coach activity instead of skill.
                        </div>
</div>
</div>
</div>
</div>
</div>
</main>

<aside className="hidden md:block md:col-span-3 lg:col-span-3 min-h-[520px] bg-slate-50/50 border-slate-100 border-l">
<div className="flex flex-col h-full">

<div className="px-5 py-5 border-b border-slate-200">
<div className="flex items-center justify-between mb-2">
<h3 className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest font-sans">
                      What Weak Fundamentals Cost
                    </h3>
</div>
<p className="text-xs text-slate-500 font-sans leading-relaxed">
                    When fundamentals slip, performance becomes unpredictable.
                  </p>
</div>

<div className="flex-1 px-5 py-5 overflow-y-auto custom-scrollbar">
<div className="relative pl-2 space-y-8">

<div className="absolute left-[11px] top-2 bottom-2 w-px bg-slate-200"></div>

<div className="relative pl-6">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center z-10 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
</div>
<p className="text-xs text-slate-600 leading-relaxed font-sans">
                        Poor discovery leads to
                        <span className="font-medium text-slate-900 font-sans">
                          weak qualification.
                        </span>
</p>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center z-10 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
</div>
<p className="text-xs text-slate-600 leading-relaxed font-sans">
                        Weak qualification leads to
                        <span className="font-medium text-slate-900 font-sans">
                          bad forecasts.
                        </span>
</p>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center z-10 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-red-600"></div>
</div>
<p className="text-xs text-slate-600 leading-relaxed font-sans">
                        Bad forecasts hurt
                        <span className="font-medium text-slate-900 font-sans">
                          credibility.
                        </span>
</p>
</div>

<div className="relative pl-6">
<div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center z-10 shadow-sm">
<div className="w-1.5 h-1.5 rounded-full bg-slate-900"></div>
</div>
<p className="text-xs text-slate-600 leading-relaxed font-sans">
                        And stalled deals waste
                        <span className="font-medium text-slate-900 font-sans">
                          pipeline energy.
                        </span>
</p>
</div>
</div>
</div>
</div>
</aside>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate lg:mx-auto bg-white border border-slate-200 shadow-sm max-w-7xl rounded-3xl mt-24 mx-auto mb-24 p-10 relative group/section" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05))', '--border-radius-before': '24px'}}>
<div className="flex flex-col rounded-none relative">

<div className="flex flex-col gap-10 w-full">

<div className="flex items-center gap-6">
<span className="text-xs font-mono tracking-widest font-sans text-indigo-600">
              01
            </span>
<div className="h-px flex-1 bg-slate-200"></div>
<span className="uppercase text-xs tracking-widest text-slate-400 font-sans">
              Sales Discipline
            </span>
</div>

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
<div className="max-w-3xl flex flex-col gap-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-slate-900 font-manrope font-medium tracking-tight">
                The Problem Isn’t Your People.
                <span className="block text-slate-400 font-manrope font-medium transition-colors duration-500 group-hover/section:text-slate-500">
                  It’s Your Sales Discipline.
                </span>
</h2>
<p className="text-lg text-slate-500 font-light max-w-xl leading-relaxed font-sans">
                Most teams know what to do. They don’t execute it consistently. Strong sales organizations focus on clear fundamentals.
              </p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 w-full mt-8 gap-6 perspective-distant">

<div className="group flex flex-col overflow-hidden transition-all duration-500 md:col-span-1 bg-white border-slate-200 border rounded-[2rem] p-8 relative justify-between shadow-sm hover:border-indigo-300 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] hover:-translate-y-1 cursor-default">

<div className="relative h-48 w-full flex items-center justify-center mb-6 overflow-visible">
<div className="absolute inset-0 bg-gradient-to-b to-transparent opacity-80 rounded-full blur-3xl transform scale-75 from-indigo-50 transition-all duration-700 group-hover:scale-90 group-hover:opacity-100"></div>
<div className="absolute flex items-center justify-center w-16 h-16 bg-white rounded-full border border-slate-200 z-20 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:shadow-indigo-200/50">
<div className="absolute inset-0 rounded-full blur-sm bg-indigo-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<iconify-icon className="text-2xl text-indigo-600 transition-transform duration-500" icon="solar:target-line-duotone"></iconify-icon>
</div>
</div>

<div className="relative z-10">
<h3 className="text-3xl lg:text-4xl text-slate-900 text-left font-manrope font-medium tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                Clean Prospecting
              </h3>
<p className="leading-relaxed text-lg font-light text-slate-500 text-left mt-2 font-sans group-hover:text-slate-600 transition-colors duration-300">
                We strengthen messaging and outreach so reps connect with the right prospects consistently.
              </p>
</div>
</div>

<div className="md:col-span-2 group flex flex-col overflow-hidden transition-all duration-500 bg-white border-slate-200 border rounded-[2rem] p-8 relative justify-between shadow-sm hover:border-indigo-300 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] hover:-translate-y-1 cursor-default">
<div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-50 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-100/60 transition-colors duration-700"></div>

<div className="relative h-48 w-full flex items-center justify-center mb-6 overflow-visible">
<div className="relative flex items-center justify-center group-hover:scale-105 transition-transform duration-500 ease-out">
<iconify-icon className="text-6xl text-slate-300 group-hover:text-indigo-500 transition-colors duration-300 relative z-10" icon="solar:chat-round-call-line-duotone"></iconify-icon>
</div>
</div>

<div className="relative z-10">
<h3 className="text-3xl lg:text-4xl text-slate-900 text-left transition-colors duration-300 font-manrope font-medium group-hover:text-indigo-600 tracking-tight">
                Strong Discovery
              </h3>
<p className="leading-relaxed text-lg font-light text-slate-500 text-left mt-2 group-hover:text-slate-600 transition-colors duration-300 font-sans">
                We improve questioning, listening, and conversation control to uncover real business pains, not just technical needs.
              </p>
</div>
</div>

<div className="md:col-span-2 group flex flex-col overflow-hidden transition-all duration-500 bg-white border-slate-200 border rounded-[2rem] p-8 relative justify-between shadow-sm hover:border-indigo-300 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] hover:-translate-y-1 cursor-default">

<div className="flex w-full h-48 mb-6 relative items-center justify-center">
<div className="flex items-center gap-4 relative">
<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 blur-[60px] rounded-full pointer-events-none bg-indigo-100 opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative w-20 h-20 rounded-2xl bg-white flex items-center justify-center text-indigo-600 shadow-xl z-10 border border-slate-100 ring-4 ring-slate-50 transition-all duration-500 group-hover:scale-110 group-hover:ring-indigo-50">
<iconify-icon className="text-4xl text-indigo-600" icon="solar:checklist-minimalistic-line-duotone"></iconify-icon>
</div>
</div>
</div>

<div className="relative z-10">
<h3 className="text-3xl lg:text-4xl text-slate-900 text-left font-manrope font-medium tracking-tight group-hover:text-indigo-600 transition-colors duration-300">
                Clear Qualification
              </h3>
<p className="leading-relaxed text-lg font-light text-slate-500 text-left mt-2 font-sans group-hover:text-slate-600 transition-colors duration-300">
                We create clear deal qualification expectations so your reps build a pipeline that actually closes.
              </p>
</div>
</div>

<div className="md:col-span-1 group flex flex-col overflow-hidden transition-all duration-500 bg-slate-50 border-slate-200 border rounded-[2rem] p-8 relative justify-between shadow-inner hover:border-indigo-300 hover:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.1)] hover:-translate-y-1 cursor-default">
<div className="absolute inset-0 opacity-[0.4] pointer-events-none group-hover:opacity-60 transition-opacity duration-500" style={{backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="relative h-48 w-full flex items-center justify-center mb-6 z-10">
<iconify-icon className="text-6xl text-slate-300 transition-all duration-500 group-hover:text-indigo-500 group-hover:scale-110 group-hover:-rotate-3" icon="solar:users-group-two-rounded-line-duotone"></iconify-icon>
</div>

<div className="relative z-10">
<h3 className="text-3xl lg:text-4xl text-slate-900 text-left transition-colors duration-300 font-manrope font-medium group-hover:text-indigo-600 tracking-tight">
                Real Coaching
              </h3>
<p className="leading-relaxed text-lg font-light text-slate-500 text-left mt-2 group-hover:text-slate-600 transition-colors duration-300 font-sans">
                We equip sales managers to coach skills, not just review metrics and dashboards.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate lg:mx-auto bg-white border border-slate-200 shadow-sm max-w-7xl rounded-3xl mt-24 mx-auto mb-24 p-10 relative" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05))', '--border-radius-before': '24px'}}>
<div className="flex flex-col rounded-none relative">
<div className="flex flex-col gap-10 w-full">
<div className="flex items-center gap-6">
<span className="text-xs font-mono tracking-widest font-sans text-indigo-600">
              02
            </span>
<div className="h-px flex-1 bg-slate-200"></div>
<span className="uppercase text-xs tracking-widest text-slate-400 font-sans">
              Methodology
            </span>
</div>
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
<div className="max-w-3xl flex flex-col gap-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-slate-900 font-manrope font-medium">
                How We Improve
                <span className="block text-slate-400 font-manrope font-medium">
                  Sales Execution
                </span>
</h2>
<p className="text-lg text-slate-500 font-light max-w-xl leading-relaxed font-sans">
                Sales is a skill. It must be practiced, coached, and refined. When the basics are sharp, everything improves.
              </p>
</div>
</div>
</div>

<div className="min-h-[560px] flex md:mt-0 w-full max-w-6xl mt-16 mx-auto px-4 relative items-center justify-center">
<svg className="absolute inset-0 hidden h-full w-full pointer-events-none md:block" preserveaspectratio="xMidYMid meet" viewbox="0 0 1000 560">
<defs>
<lineargradient id="noodleGradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="#4F46E5" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#818CF8" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#4F46E5" stop-opacity="0"></stop>
</lineargradient>
<filter height="160%" id="wireGlow" width="160%" x="-30%" y="-30%">
<fegaussianblur result="blur" stddeviation="2"></fegaussianblur>
<femerge>
<femergenode in="blur"></femergenode>
<femergenode in="SourceGraphic"></femergenode>
</femerge>
</filter>
</defs>
<path d="M 165 130 L 290 130 Q 360 130 360 200 V 255 Q 360 280 390 280 L 440 280" fill="none" stroke="#cbd5e1" stroke-opacity="0.8" strokeWidth="1.5"></path>
<path d="M 165 430 L 290 430 Q 360 430 360 360 V 305 Q 360 280 390 280 L 440 280" fill="none" stroke="#cbd5e1" stroke-opacity="0.8" strokeWidth="1.5"></path>
<path d="M 560 280 L 771 280" fill="none" stroke="#cbd5e1" stroke-opacity="0.8" strokeWidth="1.5"></path>
<path d="M 165 130 L 290 130 Q 360 130 360 200 V 255 Q 360 280 390 280 L 440 280" fill="none" filter="url(#wireGlow)" stroke="url(#noodleGradient)" stroke-dasharray="100" stroke-dashoffset="100" strokeWidth="2">
<animate attributename="stroke-dashoffset" dur="3s" from="1000" repeatcount="indefinite" to="0"></animate>
</path>
</svg>

<div className="relative z-10 grid h-full w-full grid-cols-1 gap-14 md:grid-cols-3 md:gap-0">

<div className="flex h-full flex-row items-center justify-center gap-6 px-4 md:flex-col md:gap-14 md:px-12">

<div className="group relative">
<div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
<iconify-icon className="text-indigo-500 text-3xl" icon="solar:phone-calling-linear"></iconify-icon>
<span className="absolute -bottom-8 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans whitespace-nowrap">
                    Step 1: Prospecting
                  </span>
</div>
</div>

<div className="group relative md:translate-x-16">
<div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
<iconify-icon className="text-blue-500 text-3xl" icon="solar:chat-square-call-linear"></iconify-icon>
<span className="absolute -bottom-8 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans whitespace-nowrap">
                    Step 2: Discovery
                  </span>
</div>
</div>
</div>

<div className="flex items-center justify-center py-10 md:py-0">
<div className="relative">
<div className="absolute -inset-10 rounded-full blur-3xl bg-[radial-gradient(circle,_rgba(99,102,241,0.2),_transparent_65%)]"></div>
<div className="relative flex h-[110px] w-[110px] items-center justify-center rounded-full border border-indigo-100 bg-white backdrop-blur-2xl shadow-[0_20px_60px_-10px_rgba(99,102,241,0.25)] md:h-[132px] md:w-[132px]">
<iconify-icon className="text-indigo-600 text-5xl" icon="solar:clipboard-check-linear"></iconify-icon>
</div>
<span className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-slate-900 font-medium font-sans whitespace-nowrap">
                  Step 3: Qualification
                </span>
</div>
</div>

<div className="flex h-full flex-row items-center justify-center gap-6 px-4 md:flex-col md:gap-14 md:px-12">

<div className="group relative">
<div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
<iconify-icon className="text-indigo-500 text-3xl" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="absolute -bottom-8 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans whitespace-nowrap">
                    Step 4: Coaching
                  </span>
</div>
</div>

<div className="group relative md:-translate-x-16">
<div className="relative flex h-[76px] w-[76px] items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg shadow-slate-200/50 backdrop-blur-xl transition-transform duration-300 group-hover:scale-[1.06] md:h-[92px] md:w-[92px]">
<iconify-icon className="text-3xl text-slate-500" icon="solar:refresh-linear"></iconify-icon>
<span className="absolute -bottom-8 text-xs text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity font-sans whitespace-nowrap">
                    Step 5: Reinforcement
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate lg:mx-auto bg-transparent max-w-7xl rounded-3xl mt-24 mx-auto mb-24 p-10 relative">
<div className="flex flex-col relative gap-4">
<div className="flex flex-col gap-10 w-full">
<div className="flex gap-6 items-center">
<span className="text-xs font-mono tracking-widest font-sans text-indigo-600">
              03
            </span>
<div className="h-px flex-1 bg-slate-200"></div>
<span className="uppercase text-xs text-slate-400 tracking-widest font-sans">
              Authority &amp; Recognition
            </span>
</div>
</div>
<div className="min-h-[900px] flex flex-col overflow-hidden lg:block w-full max-w-7xl mx-auto py-12 relative gap-16 items-center justify-center">
<div className="absolute inset-0 pointer-events-none opacity-40" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(circle at 50% 50%, black 40%, transparent 100%)'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] blur-[100px] rounded-full pointer-events-none z-0 bg-indigo-100/60"></div>

<div className="z-20 flex flex-col lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 text-center max-w-3xl mb-16 px-6 relative items-center">
<h2 className="flex flex-col gap-4">
<span className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-slate-900 font-manrope font-medium">
                Sales Leadership &amp; Industry Recognition
              </span>
<span className="block text-slate-500 text-lg max-w-2xl mx-auto font-sans">
                Richard Harris is Founder of The Harris Consulting Group, a recognized sales trainer and consultant, and a consistent voice on sales execution and methodology.
              </span>
</h2>
<button className="mt-8 group flex items-center gap-2 px-6 py-3 border border-slate-200 text-slate-900 text-sm font-medium rounded-full hover:bg-slate-50 transition font-sans whitespace-nowrap bg-white shadow-sm">
<span className="font-sans">View Full Background</span>
<iconify-icon className="w-4 h-4 transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="z-10 lg:absolute lg:top-[8%] lg:left-[2%] xl:left-[4%] transition-opacity duration-500 ease-in-out group w-full max-w-sm relative">
<div className="transition-all duration-300 group-hover:-translate-y-1 bg-white border-slate-200 border rounded-[24px] mb-6 p-8 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group-hover:border-indigo-300">
<p className="quote-text text-slate-700 text-lg leading-relaxed relative z-10 font-sans italic">
                Client testimonials and case studies regarding our Discovery and Qualification programs are available upon request.
              </p>
</div>
</div>

<div className="relative z-10 w-full max-w-sm lg:absolute lg:top-[8%] lg:right-[2%] xl:right-[4%] transition-opacity duration-500 ease-in-out group">
<div className="transition-all duration-300 group-hover:-translate-y-1 bg-white border-slate-200 border rounded-[24px] mb-6 p-8 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group-hover:border-indigo-300">
<p className="quote-text text-slate-700 text-lg leading-relaxed relative z-10 font-sans italic">
                Client testimonials and case studies detailing our impact on Prospecting effectiveness are available upon request.
              </p>
</div>
</div>

<div className="z-10 lg:absolute lg:bottom-[8%] lg:left-[2%] xl:left-[4%] transition-opacity duration-500 ease-in-out group w-full max-w-sm relative">
<div className="transition-all duration-300 group-hover:-translate-y-1 bg-white border-slate-200 border rounded-[24px] mb-6 p-8 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group-hover:border-indigo-300">
<p className="quote-text text-slate-700 text-lg leading-relaxed relative z-10 font-sans italic">
                Client testimonials and case studies highlighting Sales Leadership Coaching outcomes are available upon request.
              </p>
</div>
</div>

<div className="z-10 lg:absolute lg:bottom-[8%] lg:right-[2%] xl:right-[4%] transition-opacity duration-500 ease-in-out group w-full max-w-sm relative">
<div className="transition-all duration-300 group-hover:-translate-y-1 bg-white border-slate-200 border rounded-[24px] mb-6 p-8 relative shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] group-hover:border-indigo-300">
<p className="quote-text text-slate-700 text-lg leading-relaxed relative z-10 font-sans italic">
                Client testimonials and case studies regarding customized Sales Consulting Engagements are available upon request.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate lg:mx-auto group/section bg-white max-w-7xl rounded-3xl mt-24 mx-auto mb-24 p-10 relative shadow-sm" style={{position: 'relative', -BorderGradient: 'linear-gradient(135deg, rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.05))', '--border-radius-before': '24px'}}>
<div className="flex flex-col relative">
<div className="flex flex-col gap-10 w-full mb-16">
<div className="flex items-center gap-6">
<span className="text-xs font-mono tracking-widest font-sans text-indigo-600">
              04
            </span>
<div className="h-px flex-1 bg-slate-200"></div>
<span className="uppercase text-xs tracking-widest text-slate-400 font-sans">
              Engagements
            </span>
</div>
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
<div className="max-w-3xl flex flex-col gap-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-slate-900 font-manrope font-medium tracking-tight">
                Ways We Work
                <span className="block text-slate-400 transition-colors duration-500 group-hover/section:text-indigo-600">
                  Together
                </span>
</h2>
<p className="text-lg text-slate-500 font-light max-w-xl leading-relaxed font-sans">
                All engagements are focused on practical sales execution improvement. Choose the format that fits your team's needs.
              </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 perspective-distant">

<div className="group relative flex flex-col p-8 bg-white border border-slate-200 rounded-[2rem] hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-slate-200/50">
<div className="mb-6">
<div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-slate-600" icon="solar:clipboard-list-linear"></iconify-icon>
</div>
<h3 className="text-xl font-manrope font-semibold text-slate-900 mb-2">Sales Training Workshops</h3>
<p className="text-sm text-slate-500 font-sans leading-relaxed">Structured programs designed to elevate baseline execution.</p>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-slate-600 font-sans">
<iconify-icon className="text-lg text-slate-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Prospecting Training
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-sans">
<iconify-icon className="text-lg text-slate-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Discovery &amp; Qualification Programs
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-sans">
<iconify-icon className="text-lg text-slate-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Custom Playbook Implementation
              </li>
</ul>
<button className="w-full py-3 px-6 rounded-xl border border-slate-200 text-slate-900 font-medium hover:bg-slate-50 hover:border-slate-300 transition-all active:scale-95 font-sans">
              Discuss Workshops
            </button>
</div>

<div className="group relative flex flex-col p-8 bg-slate-900 text-white rounded-[2rem] shadow-2xl shadow-indigo-500/20 transform md:scale-105 z-10 hover:-translate-y-1 transition-all duration-300 border border-slate-800">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
<div className="relative z-10 mb-6">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
<iconify-icon className="text-2xl text-indigo-300" icon="solar:users-group-rounded-bold"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-manrope font-semibold text-white mb-2">Sales Leadership Coaching</h3>
<p className="text-sm text-slate-400 font-sans leading-relaxed">Equipping managers to coach skills, not just review dashboards.</p>
</div>
<ul className="relative z-10 flex-1 space-y-4 mb-8 mt-4">
<li className="flex items-start gap-3 text-sm text-slate-200 font-sans">
<iconify-icon className="text-lg text-indigo-400 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                1:1 Leadership Advisory
              </li>
<li className="flex items-start gap-3 text-sm text-slate-200 font-sans">
<iconify-icon className="text-lg text-indigo-400 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                Deal Review Frameworks
              </li>
<li className="flex items-start gap-3 text-sm text-slate-200 font-sans">
<iconify-icon className="text-lg text-indigo-400 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
                Manager Execution Training
              </li>
</ul>
<button className="relative z-10 w-full py-3 px-6 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-500 transition-all active:scale-95 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] font-sans flex items-center justify-center gap-2 group/btn">
<span>Explore Coaching</span>
<iconify-icon className="transition-transform group-hover/btn:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="group relative flex flex-col p-8 bg-white border border-slate-200 rounded-[2rem] hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-500/5">
<div className="mb-6">
<div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl text-indigo-600" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-xl font-manrope font-semibold text-slate-900 mb-2">Consulting Engagements</h3>
<p className="text-sm text-slate-500 font-sans leading-relaxed">Deep engagements for companies ready to overhaul execution.</p>
</div>
<ul className="flex-1 space-y-4 mb-8 mt-4">
<li className="flex items-start gap-3 text-sm text-slate-600 font-sans">
<iconify-icon className="text-lg text-slate-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Sales Process Audit
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-sans">
<iconify-icon className="text-lg text-slate-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Methodology Alignment
              </li>
<li className="flex items-start gap-3 text-sm text-slate-600 font-sans">
<iconify-icon className="text-lg text-slate-400 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                Ongoing Reinforcement
              </li>
</ul>
<button className="w-full py-3 px-6 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 hover:text-slate-900 hover:border-slate-300 transition-all active:scale-95 font-sans">
              Request Info
            </button>
</div>
</div>
</div>
</section>

<section className="animate-entry delay-200 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll lg:mx-auto animate bg-slate-100/50 max-w-7xl border-slate-200 border rounded-3xl mt-24 mx-auto mb-24 p-12 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-100/50 blur-[120px] rounded-full pointer-events-none"></div>
<div className="z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 lg:items-start relative items-start">

<div className="flex flex-col">
<div className="mb-8">
<h2 className="leading-[1.1] md:text-5xl text-4xl text-slate-900 font-manrope font-medium mb-4">
              Ready to Strengthen Your Sales Execution?
            </h2>
<p className="text-slate-500 text-lg font-sans">
              Stronger fundamentals create stronger results. Let's schedule a conversation to discuss where you're at.
            </p>
</div>
<div className="bg-white border-slate-200 border rounded-3xl p-8 shadow-sm">
<h3 className="text-xl font-medium text-slate-900 mb-4 font-sans">On our call, we will:</h3>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-slate-600 font-sans">
<div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
                Review your current sales challenges
              </li>
<li className="flex items-center gap-3 text-slate-600 font-sans">
<div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:target-linear"></iconify-icon>
</div>
                Identify gaps in prospecting, discovery, and qualification
              </li>
<li className="flex items-center gap-3 text-slate-600 font-sans">
<div className="w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:map-arrow-up-linear"></iconify-icon>
</div>
                Discuss practical next steps
              </li>
</ul>
<button className="w-full py-4 px-6 rounded-xl bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all active:scale-95 shadow-lg font-sans flex items-center justify-center gap-2">
<span>Schedule a Conversation</span>
</button>
</div>
</div>

<div className="flex flex-col space-y-6 lg:mt-8 self-start">
<h3 className="text-2xl font-manrope font-medium text-slate-900 mb-2">Frequently Asked Questions</h3>

<div className="group border-b border-slate-200 pb-6">
<button className="w-full flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-slate-900 pr-8 font-sans transition-colors group-hover:text-indigo-600">
                Who is this designed for?
              </span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="text-slate-500 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
                  B2B sales teams and leaders looking to improve execution and discipline.
                </p>
</div>
</div>
</div>

<div className="group border-b border-slate-200 pb-6">
<button className="w-full flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-slate-900 pr-8 transition-colors font-sans group-hover:text-indigo-600">
                Is this motivational training?
              </span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="text-slate-500 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
                  No. The focus is practical sales skill development.
                </p>
</div>
</div>
</div>

<div className="group border-b border-slate-200 pb-6">
<button className="w-full flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-slate-900 pr-8 transition-colors font-sans group-hover:text-indigo-600">
                Do you work with founders?
              </span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="text-slate-500 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
                  Yes, especially founders building structured sales teams.
                </p>
</div>
</div>
</div>

<div className="group border-b border-slate-200 pb-6">
<button className="w-full flex items-center justify-between text-left focus:outline-none group" onclick="toggleFaq(this)">
<span className="text-xl font-medium text-slate-900 pr-8 transition-colors font-sans group-hover:text-indigo-600">
                Is this industry specific?
              </span>
<iconify-icon className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out">
<div className="overflow-hidden">
<p className="text-slate-500 text-base leading-relaxed mt-4 font-light max-w-xl font-sans">
                  Designed for B2B sales environments.
                </p>
</div>
</div>
</div>
</div>
</div>

</section>

<footer className="relative w-full overflow-hidden bg-slate-50 text-slate-900 border-t border-slate-200 font-sans">
<div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none z-0 overflow-hidden">
<h1 className="text-[14vw] leading-[0.8] text-transparent bg-clip-text bg-gradient-to-t from-slate-200/50 to-transparent opacity-80 translate-y-[20%] font-manrope font-medium whitespace-nowrap">
          HARRIS CONSULTING
        </h1>
</div>
<div className="relative z-10">
<div className="max-w-7xl mx-auto px-6 pt-20 pb-14 lg:pt-24 lg:pb-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
<div className="lg:col-span-5">
<h2 className="flex items-start text-3xl font-medium text-slate-900 font-manrope mb-6">The Harris Consulting Group</h2>
<p className="max-w-sm text-slate-500 text-lg leading-relaxed font-light mb-10 font-sans">
                Practical sales training that actually improves execution. We help B2B sales teams improve prospecting, discovery, and qualification.
              </p>
<div className="flex gap-4">
<a className="glass flex items-center justify-center hover:text-white hover:bg-slate-900 transition text-slate-400 bg-white w-10 h-10 border-slate-300 border rounded-lg shadow-sm" href="#">
<svg aria-hidden="true" className="w-[16px] h-[16px]" data-icon="simple-icons:linkedin" fill="currentColor" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z"></path>
</svg>
</a>
<a className="glass flex items-center justify-center hover:text-white hover:bg-slate-900 transition text-slate-400 bg-white w-10 h-10 border-slate-300 border rounded-lg shadow-sm" href="#">
<svg aria-hidden="true" className="w-[16px] h-[16px]" data-icon="simple-icons:youtube" fill="currentColor" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505zM9.539 15.568V8.432L15.818 12l-6.279 3.568z"></path>
</svg>
</a>
</div>
</div>
<div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
<div>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 font-sans">Programs</h3>
<ul className="space-y-3">
<li><a className="text-slate-500 hover:text-indigo-600 transition font-sans" href="#">Prospecting</a></li>
<li><a className="text-slate-500 hover:text-indigo-600 transition font-sans" href="#">Discovery</a></li>
<li><a className="text-slate-500 hover:text-indigo-600 transition font-sans" href="#">Qualification</a></li>
<li><a className="text-slate-500 hover:text-indigo-600 transition font-sans" href="#">Leadership Coaching</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 font-sans">Company</h3>
<ul className="space-y-3">
<li><a className="text-slate-500 hover:text-indigo-600 transition font-sans" href="#">About</a></li>
<li><a className="text-slate-500 hover:text-indigo-600 transition font-sans" href="#">Testimonials</a></li>
<li><a className="text-slate-500 hover:text-indigo-600 transition font-sans" href="#">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4 font-sans">Resources</h3>
<ul className="space-y-3">
<li><a className="text-slate-500 hover:text-indigo-600 transition font-sans" href="#">Blog</a></li>
<li><a className="text-slate-500 hover:text-indigo-600 transition font-sans" href="#">Podcast</a></li>
<li><a className="text-slate-500 hover:text-indigo-600 transition font-sans" href="#">Playbooks</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-20 pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-slate-400 text-sm font-sans">© 2024 The Harris Consulting Group. All rights reserved.</p>
<div className="flex items-center gap-6 text-sm text-slate-400">
<a className="hover:text-slate-900 transition font-sans" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition font-sans" href="#">Terms of Service</a>
</div>
</div>
</div>
</div>
</footer>

    </>
  );
}
