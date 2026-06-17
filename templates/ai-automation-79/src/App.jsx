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



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
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
      


<section className="md:pt-40 md:pb-24 overflow-visible bg-white pt-32 pb-20 relative">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-8 items-start reveal-on-scroll is-visible">

<div className="flex flex-wrap gap-3 mb-2">
<div className="inline-flex gap-2 animate-float items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm text-xs font-semibold text-gray-700 hover:border-blue-200 transition-colors">
<iconify-icon className="text-base text-blue-600" icon="solar:medal-star-linear"></iconify-icon>
                        Top Experts
                    </div>
<div className="inline-flex gap-2 animate-float delay-float-1000 items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm text-xs font-semibold text-gray-700 hover:border-blue-200 transition-colors">
<iconify-icon className="text-base text-purple-600" icon="solar:tuning-square-2-linear"></iconify-icon>
                        Full Flexible
                    </div>
<div className="inline-flex gap-2 animate-float delay-float-2000 items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm text-xs font-semibold text-gray-700 hover:border-blue-200 transition-colors">
<iconify-icon className="text-base text-orange-600" icon="solar:map-point-linear"></iconify-icon>
                        Local BE &amp; FR
                    </div>
<div className="inline-flex gap-2 animate-float items-center px-3 py-1.5 rounded-full border border-gray-200 bg-white shadow-sm text-xs font-semibold text-gray-700 hover:border-blue-200 transition-colors">
<iconify-icon className="text-base text-green-600" icon="solar:rocket-2-linear"></iconify-icon>
                        Fast Delivery
                    </div>
</div>
<div className="space-y-4">
<h1 className="text-5xl md:text-6xl leading-[1.05] tracking-tighter text-gray-900 text-balance font-semibold">
<span className="block">Automation used to be too expensive for most SMEs.</span>
<span className="block text-gray-400">With AI, it isn’t anymore.</span>
</h1>
</div>
<p className="md:text-xl leading-relaxed text-lg font-normal text-gray-600 max-w-lg">
                    We help SMEs unlock AI-powered task automation — quickly, pragmatically, and affordably.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-2 w-full sm:w-auto">
<button className="group hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-xl shadow-gray-500/20 flex gap-2 font-medium text-white bg-gray-900 rounded-xl pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center">
                        Schedule an SME scan
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="group hover:bg-gray-50 transition-all flex gap-2 font-medium text-gray-900 bg-white border-gray-200 border rounded-xl pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center justify-center">
<iconify-icon className="text-xl" icon="logos:whatsapp-icon"></iconify-icon>
                        Chat with us
                    </button>
</div>
</div>

<div className="min-h-[500px] flex lg:mt-0 w-full h-full mt-12 relative perspective-1000 items-center justify-center bg-gradient-to-br from-gray-50 via-white to-white rounded-3xl border border-gray-100 shadow-sm reveal-on-scroll delay-200 is-visible">

<style>
        @keyframes float-gentle {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
        }
        @keyframes flow-beam {
            0% { transform: translateY(-100%); opacity: 0; }
            30% { opacity: 1; }
            70% { opacity: 1; }
            100% { transform: translateY(100%); opacity: 0; }
        }
        @keyframes pulse-ring {
            0% { transform: scale(0.8); opacity: 0.5; }
            100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes entrance-up {
            from { opacity: 0; transform: translateY(15px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes grow-line {
            from { height: 0; opacity: 0; }
            to { height: 100%; opacity: 1; }
        }
        .animate-float-gentle {
            animation: float-gentle 5s ease-in-out infinite;
        }
        .animate-flow-beam {
            animation: flow-beam 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-pulse-ring::before {
            content: '';
            position: absolute;
            inset: -4px;
            border-radius: 50%;
            border: 1px solid rgba(59, 130, 246, 0.5);
            animation: pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-entrance {
            animation: entrance-up 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
            opacity: 0;
        }
    </style>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
<div className="w-[450px] h-[450px] bg-blue-100/40 rounded-full blur-[80px] opacity-60"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white"></div>
</div>

<div className="z-10 w-full max-w-sm pr-4 pl-4 relative">

<div className="absolute left-[38px] top-4 bottom-12 w-px bg-gray-200 overflow-hidden animate-entrance" style={{animationDelay: '0.1s'}}>
<div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-flow-beam"></div>
</div>

<div className="animate-entrance" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-4 mb-8 relative z-20 animate-float-gentle">
<div className="w-10 h-10 rounded-full bg-white shadow-lg shadow-blue-900/10 ring-1 ring-gray-900/5 flex items-center justify-center animate-pulse-ring relative z-10">
<div className="absolute inset-0 bg-blue-50 rounded-full scale-75 animate-pulse"></div>
<svg className="relative z-10 w-[18px] h-[18px]" data-icon-replaced="true" data-icon-set="logos" data-logos="google-gmail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" style={{color: 'rgb(37, 99, 235)', width: '18px', height: '18px'}} viewbox="0 0 256 193" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z" fill="#4285F4"></path><path d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z" fill="#34A853"></path><path d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z" fill="#EA4335"></path><path d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z" fill="#FBBC04"></path><path d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z" fill="#C5221F"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-0.5">Trigger</span>
<span className="text-sm font-semibold text-gray-900 bg-white px-3 py-1 rounded-full shadow-sm ring-1 ring-black/5">New inquiry received</span>
</div>
</div>
</div>

<div className="flex flex-col gap-5 relative pl-[52px]">

<div className="animate-entrance w-full" style={{animationDelay: '0.4s'}}>
<div className="relative group animate-float-gentle" style={{animationDelay: '0.5s'}}>

<div className="absolute -left-[34px] top-1/2 -translate-y-1/2 w-6 h-px bg-gray-200 group-hover:bg-gray-300 transition-colors"></div>
<div className="absolute -left-[36px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border-2 border-gray-300 z-10"></div>
<div className="bg-white rounded-xl p-3 shadow-lg shadow-gray-900/5 ring-1 ring-black/5 flex items-center gap-3 hover:scale-[1.02] transition-transform duration-300 cursor-default">
<div className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center shrink-0 border border-gray-100">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="simple-icons" data-simple-icons="notion" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" style={{width: '16px', height: '16px', color: 'rgb(55, 65, 81)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632" fill="#374151"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Notion</span>
<span className="text-[9px] font-medium text-gray-400">0.2s</span>
</div>
<div className="text-sm font-semibold text-gray-900 truncate">Create client page</div>
</div>
</div>
</div>
</div>

<div className="animate-entrance w-full" style={{animationDelay: '0.6s'}}>
<div className="relative group animate-float-gentle" style={{animationDelay: '1.5s'}}>

<div className="absolute -left-[34px] top-1/2 -translate-y-1/2 w-6 h-px bg-green-200 group-hover:bg-green-300 transition-colors"></div>
<div className="absolute -left-[36px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border-2 border-green-400 z-10"></div>
<div className="bg-white rounded-xl p-3 shadow-lg shadow-gray-900/5 ring-1 ring-black/5 flex items-center gap-3 hover:scale-[1.02] transition-transform duration-300 cursor-default">
<div className="w-9 h-9 bg-green-50 rounded-lg flex items-center justify-center shrink-0 border border-green-100">
<svg className="text-green-600" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M3 15h18"></path><path d="M9 3v18"></path><path d="M15 3v18"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Excel</span>
<span className="text-[9px] font-medium text-gray-400">0.4s</span>
</div>
<div className="text-sm font-semibold text-gray-900 truncate">Log new entry</div>
</div>
<div className="px-2 py-0.5 bg-green-50 text-green-700 text-[10px] font-bold rounded border border-green-100 animate-pulse">
                            +Row
                        </div>
</div>
</div>
</div>

<div className="animate-entrance w-full" style={{animationDelay: '0.8s'}}>
<div className="relative group animate-float-gentle" style={{animationDelay: '2.5s'}}>

<div className="absolute -left-[34px] top-1/2 -translate-y-1/2 w-6 h-px bg-orange-200 group-hover:bg-orange-300 transition-colors"></div>
<div className="absolute -left-[36px] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white border-2 border-orange-400 z-10"></div>
<div className="bg-white rounded-xl p-3 shadow-lg shadow-gray-900/5 ring-1 ring-black/5 flex items-center gap-3 hover:scale-[1.02] transition-transform duration-300 cursor-default">
<div className="w-9 h-9 bg-orange-50 rounded-lg flex items-center justify-center shrink-0 border border-orange-100">
<iconify-icon className="" icon="logos:hubspot" width="18"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">HubSpot</span>
<span className="text-[9px] font-medium text-gray-400">1.1s</span>
</div>
<div className="text-sm font-semibold text-gray-900 truncate">Create deal &amp; contact</div>
</div>
<div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center text-orange-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
</div>
</div>
</div>

<div className="animate-entrance w-full" style={{animationDelay: '1.0s'}}>
<div className="relative group animate-float-gentle" style={{animationDelay: '3.5s'}}>

<div className="absolute -left-[34px] top-1/2 -translate-y-1/2 w-6 h-px bg-purple-200 group-hover:bg-purple-300 transition-colors"></div>
<div className="bg-white rounded-xl p-3 shadow-lg shadow-gray-900/5 ring-1 ring-black/5 flex items-center gap-3 hover:scale-[1.02] transition-transform duration-300 cursor-default">
<div className="w-9 h-9 bg-purple-50 rounded-lg flex items-center justify-center shrink-0 border border-purple-100">
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="logos" data-logos="slack-icon" fill="currentColor" height="16" strokeWidth="2" style={{color: 'rgb(126, 34, 206)', width: '16px', height: '16px'}} viewbox="0 0 256 256" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82S.203 176.152.203 161.32c0-14.831 11.987-26.818 26.82-26.818H53.84zm13.41 0c0-14.831 11.987-26.818 26.819-26.818s26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82z" fill="#E01E5A"></path><path d="M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819S79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82zm0 13.613c14.832 0 26.819 11.987 26.819 26.819s-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818z" fill="#36C5F0"></path><path d="M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82s26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0s26.819 11.987 26.819 26.819z" fill="#2EB67D"></path><path d="M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818s-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819s-11.988 26.819-26.82 26.819z" fill="#ECB22E"></path></svg>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-0.5">
<span className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide">Slack</span>
<span className="text-[9px] font-medium text-gray-400">0.1s</span>
</div>
<div className="text-sm font-semibold text-gray-900 truncate">Notify team</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-[27px] flex items-center gap-3 opacity-60 animate-entrance" style={{animationDelay: '1.2s'}}>
<div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center">
<svg className="text-blue-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
</div>
</div>
</div>
</div>
</section><section className="border-y overflow-hidden bg-gray-900 border-gray-200 pt-20 pb-20 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-24 bg-blue-500/5 blur-[60px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="reveal-on-scroll text-center mb-12 is-visible">
<h2 className="md:text-3xl text-2xl font-semibold text-gray-100 tracking-tight mb-3">We build on the best AI frameworks.</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8 gap-x-12 gap-y-12 items-center justify-items-center reveal-on-scroll delay-200 is-visible">

<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/017cd52f-9c70-4f8b-90f3-4539acf6dfdb_320w.png"/>
</div>

<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2bbc1243-4e22-4a41-9366-60224a942433_320w.png"/>
</div>

<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0dc3ec8d-53aa-41b4-9c70-63fce5ddf6a2_320w.png"/>
</div>

<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf04e0ff-0c76-403c-87d0-9dc8d1077538_320w.png"/>
</div>

<div className="group relative w-full max-w-[160px] aspect-[3/2] rounded-lg overflow-hidden bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-300">
<img alt="Partner Logo" className="w-full h-full object-contain p-4 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80e42a04-a1ac-4405-80d9-94c335bbac94_320w.png"/>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative">
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll is-visible">
<span className="uppercase inline-block text-[10px] font-semibold text-blue-600 tracking-widest mb-4 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">Pragmatic AI</span>
<h2 className="md:text-5xl text-3xl font-semibold text-gray-900 tracking-tight">
<span className="block">What we can do?</span>
</h2>
<p className="mt-6 text-lg leading-relaxed text-gray-600">We don't sell hype. We build engines that run your business better.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 reveal-on-scroll delay-100">

<div className="h-40 w-full rounded-xl bg-gradient-to-br from-orange-50 to-white border border-orange-100 mb-8 relative overflow-hidden flex items-center justify-center group-hover:bg-orange-50/80 transition-colors">

<div className="absolute inset-0 bg-[linear-gradient(rgba(249,115,22,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(249,115,22,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

<div className="relative z-10 flex items-center gap-4">

<div className="w-12 h-12 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center transform -rotate-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
<iconify-icon icon="vscode-icons:file-type-excel" width="28"></iconify-icon>
</div>

<div className="text-orange-300 opacity-50">
<iconify-icon className="text-2xl" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="w-14 h-14 bg-white rounded-xl shadow-md border border-orange-100 flex items-center justify-center relative transform rotate-3 group-hover:scale-105 transition-transform duration-500">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-50 to-white rounded-xl opacity-50"></div>
<iconify-icon className="text-orange-500 text-3xl relative z-10" icon="solar:chart-square-bold-duotone"></iconify-icon>

<div className="absolute -top-3 -right-3 bg-green-500 text-white text-[9px] font-bold px-2 py-0.5 rounded-full shadow-sm ring-2 ring-white z-20">High ROI</div>
</div>
</div>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Automation Opportunity Map</h3>
<p className="leading-relaxed text-base text-gray-500">
                        ROI-first prioritization to identify exactly where AI saves you the most time and money before writing a single line of code.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 reveal-on-scroll delay-200">

<div className="h-40 w-full rounded-xl bg-gradient-to-br from-blue-50 to-white border border-blue-100 mb-8 relative overflow-hidden flex items-center justify-center group-hover:bg-blue-50/80 transition-colors">

<div className="[background-size:12px_12px] opacity-[0.15] absolute top-0 right-0 bottom-0 left-0"></div>

<div className="relative z-10 flex items-center gap-2">

<div className="flex flex-col gap-2">
<div className="w-9 h-9 bg-white rounded-lg shadow-sm border border-blue-100 flex items-center justify-center transform hover:scale-110 transition-transform duration-300" title="Gmail">
<iconify-icon icon="logos:google-gmail" width="18"></iconify-icon>
</div>
<div className="w-9 h-9 bg-white rounded-lg shadow-sm border border-blue-100 flex items-center justify-center transform hover:scale-110 transition-transform duration-300 ml-2" title="Typeform">
<iconify-icon className="" height="16" icon="logos:slack-icon" width="16"></iconify-icon>
</div>
</div>

<div className="w-12 h-0.5 bg-gradient-to-r from-blue-200 to-blue-400 relative overflow-hidden rounded-full">
<div className="absolute top-0 left-0 h-full w-1/2 bg-blue-500 animate-[flow-line_1.5s_infinite]"></div>
</div>

<div className="w-14 h-14 bg-white rounded-xl shadow-lg border border-blue-200 flex items-center justify-center relative z-20 group-hover:scale-105 transition-transform duration-500">
<iconify-icon className="" icon="logos:hubspot" width="28"></iconify-icon>

<div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-500 rounded-full border-2 border-white animate-pulse"></div>
</div>
</div>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">AI-Assisted Workflows</h3>
<p className="leading-relaxed text-base text-gray-500">
                        Automating manual, repetitive tasks to streamline your operations. Connect your CRM, Email, and Tools into one intelligent flow.
                    </p>
</div>

<div className="group p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 reveal-on-scroll delay-300">

<div className="overflow-hidden flex group-hover:bg-purple-50/80 transition-colors bg-gradient-to-br from-purple-50 to-white w-full h-40 border-purple-100 border rounded-xl mb-8 relative items-center justify-center">

<div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-10 pointer-events-none">
<svg className="w-full h-full text-purple-600 fill-current" preserveaspectratio="none" viewbox="0 0 100 20">
<path d="M0 20 C 30 5 70 5 100 20 L 100 20 L 0 20 Z"></path>
</svg>
</div>

<div className="relative w-full h-full">


<div className="absolute top-6 left-[15%] md:left-[20%] w-8 h-8 bg-white rounded-lg shadow-sm border border-purple-100 flex items-center justify-center animate-float" style={{animationDelay: '0s', animationDuration: '6s'}}>
<iconify-icon icon="logos:slack-icon" width="14"></iconify-icon>
</div>

<div className="absolute top-8 right-[15%] md:right-[20%] w-9 h-9 bg-white rounded-lg shadow-sm border border-purple-100 flex items-center justify-center animate-float" style={{animationDelay: '1.5s', animationDuration: '5s'}}>
<iconify-icon icon="logos:hubspot" width="16"></iconify-icon>
</div>

<div className="absolute bottom-6 left-[20%] md:left-[25%] w-7 h-7 bg-white rounded-lg shadow-sm border border-purple-100 flex items-center justify-center animate-float" style={{animationDelay: '2.5s', animationDuration: '7s'}}>
<iconify-icon icon="logos:zendesk-icon" width="14"></iconify-icon>
</div>

<div className="absolute bottom-8 right-[20%] md:right-[25%] w-8 h-8 bg-white rounded-lg shadow-sm border border-purple-100 flex items-center justify-center animate-float" style={{animationDelay: '0.8s', animationDuration: '5.5s'}}>
<iconify-icon icon="logos:salesforce" width="18"></iconify-icon>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-20 group-hover:-translate-y-1 transition-transform duration-500">

<div className="w-16 h-16 bg-white rounded-2xl shadow-lg border border-purple-200 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white/80 to-purple-50/50"></div>

<svg className="lucide lucide-brain text-purple-600 relative z-10" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path></svg>

<div className="absolute top-2 right-2 w-1.5 h-1.5 bg-green-500 rounded-full shadow-sm ring-1 ring-white animate-pulse"></div>
</div>

<div className="absolute -bottom-4 bg-white border border-purple-100 shadow-sm px-2.5 py-1 rounded-full flex items-center gap-1.5 whitespace-nowrap">
<svg className="text-purple-600" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m7.8 16.2-2.9 2.9"></path><path d="M6 12H2"></path><path d="m7.8 7.8-2.9-2.9"></path></svg>
<span className="text-[10px] font-bold text-purple-900 tracking-tight">AI Core</span>
</div>
</div>
</div>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3">Custom AI Agents</h3>
<p className="leading-relaxed text-base text-gray-500">
                        We build and deploy your dedicated AI agent to handle specific business functions like customer support, data entry, or lead qualification.
                    </p>
</div>
</div>
<div className="mt-16 flex flex-col sm:flex-row justify-center gap-4 reveal-on-scroll delay-300">
<button className="group hover:bg-gray-800 transition-all transform hover:-translate-y-1 shadow-xl shadow-gray-500/20 flex gap-2 font-medium text-white bg-gray-900 rounded-xl pt-4 pr-8 pb-4 pl-8 items-center justify-center">
                    Schedule an SME scan
                    <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="group hover:bg-gray-50 transition-all flex gap-2 font-medium text-gray-900 bg-white border-gray-200 border rounded-xl pt-4 pr-8 pb-4 pl-8 items-center justify-center">
<iconify-icon className="text-xl" icon="logos:whatsapp-icon"></iconify-icon>
                    Chat with us
                </button>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-gray-900 w-full border-gray-800 pt-24 pb-24 relative">

<div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="order-1 reveal-on-scroll">
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight mb-6">
                        What used to cost months now takes days.
                    </h2>
<p className="leading-relaxed text-lg text-gray-400 mb-8">
                        The old way of building software is slow and expensive. We leverage proven automation frameworks to skip the boilerplate and get straight to value.
                    </p>
</div>
<div className="order-2 reveal-on-scroll delay-200">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
<div className="text-blue-400 text-xl mb-2"><iconify-icon icon="solar:code-file-linear"></iconify-icon></div>
<h4 className="text-xl font-semibold text-white">Fewer Custom Builds</h4>
<p className="text-base text-gray-400 mt-1">Reducing complexity and unnecessary costs.</p>
</div>
<div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
<div className="text-green-400 text-xl mb-2"><iconify-icon className="" icon="solar:copy-linear"></iconify-icon></div>
<h4 className="text-xl font-semibold text-white">More Reusable Patterns</h4>
<p className="text-base text-gray-400 mt-1">Leveraging proven frameworks.</p>
</div>
<div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
<div className="text-orange-400 text-xl mb-2"><iconify-icon icon="solar:stopwatch-play-linear"></iconify-icon></div>
<h4 className="text-xl font-semibold text-white">Faster Validation</h4>
<p className="text-base text-gray-400 mt-1">Proving ROI in record time.</p>
</div>
<div className="p-4 rounded-xl bg-gray-800/50 border border-gray-700">
<div className="text-purple-400 text-xl mb-2"><iconify-icon className="" icon="solar:graph-new-up-linear"></iconify-icon></div>
<h4 className="text-xl font-semibold text-white">Unlock Scaling</h4>
<p className="text-base text-gray-400 mt-1">Freeing your team from bottlenecks.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white w-full border-gray-100 border-b pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 gap-x-16 gap-y-16 items-start">

<div className="lg:col-span-4 sticky top-24 reveal-on-scroll">
<div className="inline-block text-[10px] uppercase font-semibold text-gray-600 tracking-widest border-gray-200 border bg-white rounded-full px-3 py-1 mb-4">
                Tech Core Team
                </div>
<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 tracking-tight mb-6">No One-Man Show.</h2>
<p className="text-lg text-gray-600 mb-6">
                We provide long-term follow-up with a senior multi-disciplinary team. We build systems, not just scripts.
                </p>
<div className="p-4 bg-gray-50 rounded-xl border border-gray-100 mb-6">
<p className="text-sm font-medium text-gray-900 italic">"Automation is useless if it doesn't serve a business goal. We start with Strategy."</p>
</div>
<div className="flex items-center gap-2 text-sm font-medium text-gray-900 bg-green-50 w-fit px-3 py-1 rounded-full border border-green-100 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                Available for audit
                </div>
<button className="group hover:bg-gray-50 transition-all flex gap-2 font-medium text-gray-900 bg-white border-gray-200 border rounded-xl pt-4 pr-8 pb-4 pl-8 w-fit items-center justify-center shadow-sm hover:shadow-md">
<iconify-icon className="text-xl" icon="logos:whatsapp-icon"></iconify-icon>
                    Chat with the team
                </button>
</div>

<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="hover:shadow-lg transition-shadow duration-300 reveal-on-scroll delay-100 bg-white border-gray-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="w-[120px] h-[120px] rounded-full bg-gray-100 mb-4 overflow-hidden border border-gray-100 group">
<img alt="Arik" className="group-hover:scale-110 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/60e9792b-6a93-4b45-89d9-52962fd3a36d_320w.png"/>
</div>
<h3 className="text-lg font-semibold text-gray-900">Arik</h3>
<p className="uppercase text-xs font-semibold text-gray-600 tracking-wider mb-3">Business Strategy</p>
<p className="text-sm text-gray-500 leading-relaxed">Ensuring automation drives real business growth and ROI. He bridges the gap between tech and profit.</p>
</div>

<div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 reveal-on-scroll delay-200">
<div className="overflow-hidden group flex text-gray-300 bg-gray-100 w-[120px] h-[120px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6445ba17-1e6f-4ded-a8a4-b7bac8e939c1_320w.png)] bg-cover bg-center border-gray-100 border rounded-full mb-4 items-center justify-center">
</div>
<h3 className="text-lg font-semibold text-gray-900">Olivier</h3>
<p className="uppercase text-xs font-semibold text-gray-600 tracking-wider mb-3">Tech Lead &amp; Arch</p>
<p className="text-sm text-gray-500 leading-relaxed">
                    20+ years of experience in high-level architecture. Ensures your automations are scalable and secure.
                </p>
</div>

<div className="hover:shadow-lg transition-shadow duration-300 bg-white border-gray-100 border rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-sm reveal-on-scroll delay-300">
<div className="overflow-hidden group flex text-gray-300 bg-gray-100 w-[120px] h-[120px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc82b49b-379c-4b7c-a6d4-eda7de4f70c6_320w.png)] bg-cover bg-center border-gray-100 border rounded-full mb-4 items-center justify-center">
</div>
<h3 className="text-lg font-semibold text-gray-900">Renaud</h3>
<p className="uppercase text-xs font-semibold text-gray-700 tracking-wider mb-3">Tech Lead &amp; Security
                </p>
<p className="text-sm text-gray-500 leading-relaxed">
                    Senior expert focused on robust implementation. He ensures we build stable systems that don't break.
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-gray-900 pt-24 pb-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-16 gap-y-16 items-center">
<div className="">
<div className="inline-block text-xs font-medium border rounded-full mb-6 pt-1 pr-3 pb-1 pl-3 font-sans reveal-on-scroll text-gray-300 bg-white/10 border-white/10">
                    Trusted by Visionaries
                </div>
<h2 className="md:text-5xl reveal-on-scroll delay-100 text-4xl font-semibold tracking-tight font-sans mb-6">14 Years. 200+ Clients.</h2>
<p className="text-lg leading-relaxed max-w-md font-sans reveal-on-scroll delay-200 text-gray-400">
                    We aren't just developers; we are Growth Architects who have been scaling businesses since 2012.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 gap-x-4 gap-y-4 reveal-on-scroll delay-300">

<div className="flex transition-colors group h-24 border rounded-lg pt-6 pr-6 pb-6 pl-6 items-center justify-center hover:bg-white/10 bg-white/5 border-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter opacity-50 mix-blend-screen w-auto h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b818f586-aad4-4401-93bf-769a001c3c4c_320w.png"/>
</div>

<div className="flex items-center justify-center p-6 rounded-lg border transition-colors group h-24 bg-white/5 border-white/10 hover:bg-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter opacity-50 mix-blend-screen w-auto h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b7b83f3c-7515-403c-99a4-e864772ec98d_320w.png"/>
</div>

<div className="flex transition-colors group h-24 border rounded-lg pt-6 pr-6 pb-6 pl-6 items-center justify-center hover:bg-white/10 bg-white/5 border-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter opacity-50 mix-blend-screen w-auto h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f8cebf7b-7fa1-49c7-9af8-e2fcc429a32f_320w.png"/>
</div>

<div className="flex items-center justify-center p-6 rounded-lg border transition-colors group h-24 bg-white/5 border-white/10 hover:bg-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter opacity-50 mix-blend-screen w-auto h-6 object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/74278589-b58b-4123-be61-9c0b7fdbc381_320w.png"/>
</div>

<div className="flex items-center justify-center p-6 rounded-lg border transition-colors group h-24 bg-white/5 border-white/10 hover:bg-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter bg-center opacity-50 mix-blend-screen w-auto h-8 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/df9dfe9d-f433-4192-ad9e-50b40ddecc24_320w.png"/>
</div>

<div className="flex items-center justify-center p-6 rounded-lg border transition-colors group h-24 bg-white/5 border-white/10 hover:bg-white/10">
<img alt="Logo Placeholder" className="group-hover:opacity-100 transition-opacity duration-300 filter bg-center opacity-50 mix-blend-screen w-auto h-10 object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5705746e-a63d-43db-97f1-a27b4c500024_320w.png"/>
</div>
</div>
</div>
</section>

<section className="z-20 bg-white pt-24 pb-24 relative" id="packages">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-3xl md:text-5xl text-gray-900 mb-4 font-semibold">Pragmatic Pricing</h2>
<p className="text-gray-500">Transparent costs to start your automation journey.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

<div className="hover:border-blue-300 transition-colors text-gray-900 bg-white border-gray-300 border rounded-2xl pt-8 pr-8 pb-8 pl-8 reveal-on-scroll delay-100">
<h3 className="text-lg font-bold mb-2">Build Automation Map</h3>
<p className="text-sm text-gray-500 mb-6 h-10">A complete roadmap prioritizing your highest ROI automation opportunities.</p>
<div className="text-3xl font-semibold mb-6">€900</div>
<ul className="space-y-3 mb-8 text-sm text-gray-600">
<li className="flex gap-2"><iconify-icon className="text-xl text-blue-500" height="20" icon="solar:check-circle-linear" style={{color: 'rgb(31, 41, 55)'}} width="20"></iconify-icon> Process Audit</li>
<li className="flex gap-2"><iconify-icon className="text-xl text-blue-500" height="20" icon="solar:check-circle-linear" style={{color: 'rgb(31, 41, 55)'}} width="20"></iconify-icon> ROI Calculation</li>
<li className="flex gap-2"><iconify-icon className="text-xl text-blue-500" height="20" icon="solar:check-circle-linear" style={{color: 'rgb(31, 41, 55)'}} width="20"></iconify-icon> Implementation Plan</li>
</ul>
<button className="w-full py-3 rounded-lg border border-gray-200 hover:bg-gray-50 font-medium text-sm transition-colors">Get Roadmap</button>
</div>

<div className="transform hover:shadow-2xl transition-shadow md:-translate-y-4 text-white bg-gray-900 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-xl reveal-on-scroll delay-200">
<h3 className="text-lg font-bold mb-2">2-Day Work Together</h3>
<p className="text-sm text-gray-200 h-10 mb-6">Rapid implementation of your first AI workflows or agents.</p>
<div className="text-3xl mb-6 font-semibold">Custom Quote</div>
<ul className="space-y-3 mb-8 text-sm text-blue-50">
<li className="flex gap-2"><iconify-icon className="text-white text-xl" icon="solar:check-circle-linear"></iconify-icon> Rapid Setup (48h)</li>
<li className="flex gap-2"><iconify-icon className="text-white text-xl" icon="solar:check-circle-linear"></iconify-icon> Live Implementation</li>
<li className="flex gap-2"><iconify-icon className="text-white text-xl" icon="solar:check-circle-linear"></iconify-icon> Team Training</li>
</ul>
<button className="hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200 text-sm font-medium text-gray-800 bg-white w-full rounded-lg py-3 shadow-lg">Start Now</button>
</div>

<div className="hover:border-blue-300 transition-colors reveal-on-scroll delay-300 text-gray-900 bg-white border-gray-300 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-[120px] h-[120px] rounded-full overflow-hidden mb-6 border border-gray-100 bg-gray-50">
<img alt="Profile" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3126296e-981b-4239-9323-ace4001939d9_320w.png"/>
</div>
<div className="text-3xl font-medium tracking-tight mb-6">Let's Talk</div>
<p className="text-sm text-gray-500 mb-6 h-10">Long-term scaling and custom agent development.</p>
<ul className="space-y-3 mb-8 text-sm text-gray-600">
<li className="flex gap-2"><iconify-icon className="text-xl text-blue-500" height="20" icon="solar:check-circle-linear" style={{color: 'rgb(31, 41, 55)'}} width="20"></iconify-icon> Complex Integrations</li>
<li className="flex gap-2"><iconify-icon className="text-xl text-blue-500" height="20" icon="solar:check-circle-linear" style={{color: 'rgb(31, 41, 55)'}} width="20"></iconify-icon> Ongoing Support</li>
<li className="flex gap-2"><iconify-icon className="text-xl text-blue-500" height="20" icon="solar:check-circle-linear" style={{color: 'rgb(31, 41, 55)'}} width="20"></iconify-icon> Dedicated Team</li>
</ul>
<button className="w-full py-3 rounded-lg border border-gray-200 hover:bg-gray-50 font-normal text-sm transition-colors flex items-center justify-center gap-2 group">
<iconify-icon className="text-xl" icon="logos:whatsapp-icon"></iconify-icon> Chat on WhatsApp
    </button>
</div>
</div>
</div>
</section>

<footer className="bg-gray-50 border-gray-200 border-t pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
<div className="reveal-on-scroll">
<h2 className="text-4xl font-semibold text-gray-900 tracking-tight font-sans mb-4">Ready to automate your growth?</h2>
<div className="flex flex-col sm:flex-row gap-4 text-gray-500 items-start sm:items-center">
<a className="transition-colors hover:text-black font-sans flex items-center gap-2" href="mailto:alicia@26lights.com"><iconify-icon icon="solar:letter-linear"></iconify-icon> alicia@26lights.com</a>
<span className="hidden sm:block w-1 h-1 rounded-full bg-gray-300"></span>
<a className="transition-colors hover:text-black font-sans flex items-center gap-2" href="/tel:+32492660089"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon> +32 492 66 00 89</a>
</div>
<div className="mt-4 text-gray-400 font-sans text-sm">Brussels / Paris</div>
</div>
<div className="flex flex-col md:items-end justify-center reveal-on-scroll delay-100">
<a className="inline-flex items-center gap-2 hover:gap-3 transition-all font-medium text-white bg-black px-6 py-3 rounded-lg font-sans shadow-lg shadow-gray-200" href="https://calendly.com/alicia-26lights/30min?month=2026-02">
                        Book a Call with an expert <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
