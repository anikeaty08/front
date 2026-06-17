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
      

<header className="fixed top-0 w-full bg-white/70 backdrop-blur-xl border-b border-gray-200/50 z-50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg bg-gradient-to-b from-[#0062B8] to-[#00519a] flex items-center justify-center text-white shadow-[0_2px_8px_rgba(0,98,184,0.2)] ring-1 ring-black/10 inset-ring-1 inset-ring-white/20 group-hover:scale-105 transition-transform duration-300 ease-out">
<iconify-icon className="text-xl" icon="solar:health-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xl tracking-tighter font-medium text-[#1A2E4A]">PONO</span>
</div>

<nav className="hidden lg:flex gap-8 text-sm font-normal text-gray-500">
<a className="hover:text-[#1A2E4A] transition-colors" href="#services">Services</a>
<a className="hover:text-[#1A2E4A] transition-colors" href="#who-we-serve">Who We Serve</a>
<a className="hover:text-[#1A2E4A] transition-colors" href="#how-it-works">How It Works</a>
<a className="hover:text-[#1A2E4A] transition-colors" href="#about">About</a>
<a className="hover:text-[#1A2E4A] transition-colors" href="#resources">Resources</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 bg-gradient-to-b from-[#1A2E4A] to-[#0A111A] text-white hover:opacity-90 h-9 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.1)] ring-1 ring-transparent hover:ring-gray-800/50 active:scale-[0.98] inset-ring-1 inset-ring-white/10" href="#book-call">
                    Book Discovery Call
                </a>

<button className="lg:hidden text-[#1A2E4A] hover:text-[#0062B8] transition-colors flex items-center active:scale-95">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</header>

<section className="pt-32 pb-24 sm:pt-40 sm:pb-32 relative overflow-hidden bg-white">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-gradient-to-br from-[#E8F0F9] to-[#C8DCF0] rounded-full blur-[100px] opacity-40 pointer-events-none animate-[pulse_8s_ease-in-out_infinite]"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-gradient-to-tr from-[#F7F5F0] to-white rounded-full blur-[80px] opacity-60 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-gray-200/80 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] text-[#1A2E4A] text-xs font-medium mb-8 tracking-wide hover:bg-white hover:shadow-md transition-all duration-300 cursor-default">
<iconify-icon className="text-[#0062B8]" icon="solar:stars-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        AI-Powered Medical Billing
                    </div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl tracking-tighter font-medium text-[#1A2E4A] leading-[1.05] mb-6">
                        Billing made simple.<br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#0062B8] to-[#1A2E4A]">Revenue made right.</span>
</h1>
<p className="text-lg text-gray-500 mb-10 leading-relaxed max-w-xl font-normal">
                        Pono finds the errors slowing down your cash flow, fixes them faster than legacy billing companies, and shows you exactly what changed. Stop chasing claims and get back to your patients.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 bg-gradient-to-b from-[#0062B8] to-[#00519a] text-white hover:opacity-90 h-12 px-8 shadow-[0_4px_14px_0_rgba(0,98,184,0.25)] hover:shadow-[0_6px_20px_rgba(0,98,184,0.3)] active:scale-[0.98] inset-ring-1 inset-ring-white/20" href="#book-call">
                            Book a Discovery Call
                        </a>
<a className="group inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-300 bg-white text-[#1A2E4A] ring-1 ring-gray-200/80 hover:ring-gray-300 hover:bg-gray-50/50 h-12 px-8 shadow-sm active:scale-[0.98]" href="#how-it-works">
                            See How It Works
                            <iconify-icon className="text-gray-400 group-hover:translate-x-0.5 group-hover:text-[#1A2E4A] transition-all" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>

<div className="mt-16 pt-8 border-t border-gray-100">
<p className="text-xs font-medium text-gray-400 tracking-widest uppercase mb-5">Trusted by growth-stage clinics nationally</p>
<div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-gray-500">
<span className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-[#0062B8] text-lg group-hover:scale-110 transition-transform" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-normal text-[#1A2E4A]">Faster</span> turnaround
                            </span>
<span className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-[#0062B8] text-lg group-hover:scale-110 transition-transform" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-normal text-[#1A2E4A]">More</span> recovered
                            </span>
<span className="flex items-center gap-2 group cursor-default">
<iconify-icon className="text-[#0062B8] text-lg group-hover:scale-110 transition-transform" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="font-normal text-[#1A2E4A]">Clearer</span> visibility
                            </span>
</div>
</div>
</div>

<div className="relative mx-auto w-full max-w-lg lg:max-w-none perspective-1000 group">

<div className="absolute -inset-1 bg-gradient-to-r from-[#0062B8]/10 to-[#C8DCF0]/30 rounded-2xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
<div className="relative bg-white/70 backdrop-blur-2xl rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] ring-1 ring-black/[0.03] overflow-hidden transform lg:rotate-[2deg] hover:rotate-0 transition-transform duration-700 ease-out inset-ring-1 inset-ring-white">

<div className="bg-white/50 px-5 py-4 flex items-center gap-2 border-b border-gray-100/50 backdrop-blur-sm">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-gray-200/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-200/80"></div>
<div className="w-2.5 h-2.5 rounded-full bg-gray-200/80"></div>
</div>
<div className="ml-4 px-2 py-1 bg-gray-100/50 rounded text-[10px] text-gray-400 font-medium tracking-tight">app.ponobilling.com</div>
</div>
<div className="p-8">
<div className="flex justify-between items-end mb-8">
<div>
<p className="text-xs font-normal text-gray-400 uppercase tracking-widest mb-2">Monthly Collections</p>
<h3 className="text-4xl tracking-tighter font-medium text-[#1A2E4A]">$842,500</h3>
</div>
<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50/80 ring-1 ring-emerald-600/10 px-2.5 py-1 rounded-full text-xs font-medium shadow-sm">
<iconify-icon icon="solar:arrow-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    +12.4%
                                </div>
</div>

<div className="h-40 flex items-end justify-between gap-3 border-b border-gray-100/80 pb-2 mb-6">
<div className="w-full bg-gray-100/80 rounded-t-md h-[40%] group-hover:h-[45%] transition-all duration-500 ease-out cursor-pointer hover:!bg-gray-200"></div>
<div className="w-full bg-gray-100/80 rounded-t-md h-[55%] group-hover:h-[60%] transition-all duration-500 delay-75 ease-out cursor-pointer hover:!bg-gray-200"></div>
<div className="w-full bg-gradient-to-t from-[#C8DCF0] to-[#E8F0F9] rounded-t-md h-[70%] group-hover:h-[75%] transition-all duration-500 delay-100 ease-out"></div>
<div className="w-full bg-gray-100/80 rounded-t-md h-[65%] group-hover:h-[68%] transition-all duration-500 delay-150 ease-out cursor-pointer hover:!bg-gray-200"></div>
<div className="w-full bg-gradient-to-t from-[#00519a] to-[#0062B8] rounded-t-md h-[85%] group-hover:h-[95%] transition-all duration-500 delay-200 ease-out shadow-[0_0_20px_rgba(0,98,184,0.2)]"></div>
<div className="w-full bg-gray-100/80 rounded-t-md h-[95%] group-hover:h-[90%] transition-all duration-500 delay-300 ease-out cursor-pointer hover:!bg-gray-200"></div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-4 rounded-xl ring-1 ring-black/[0.03] bg-gradient-to-br from-white to-gray-50/50 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow cursor-default">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#E8F0F9]/80 flex items-center justify-center text-[#0062B8] ring-1 ring-[#0062B8]/10">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<p className="text-sm font-medium text-[#1A2E4A]">Claims Scrubbed</p>
<p className="text-xs text-gray-500 mt-0.5 font-normal">99.8% clean claim rate</p>
</div>
</div>
<span className="text-sm font-medium text-[#1A2E4A]">4,102</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] relative">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mb-16">
<span className="text-xs font-normal text-[#0062B8] uppercase tracking-widest mb-4 block">What keeps clinic owners up at night</span>
<h2 className="text-3xl sm:text-4xl tracking-tighter font-medium text-[#1A2E4A] mb-6 leading-tight">You didn't go to medical school to fight insurance companies.</h2>
<p className="text-lg text-gray-500 leading-relaxed font-normal">
                    Most clinics lose thousands every month to billing errors they don't even see. Wrong codes turn into denied claims. Denied claims turn into rework. Rework turns into aging receivables. The system is broken; your process doesn't have to be.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="col-span-1 lg:col-span-2 p-8 rounded-2xl bg-white ring-1 ring-gray-900/5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-500 ease-out group">
<div className="w-12 h-12 rounded-xl bg-gray-50 ring-1 ring-gray-100 flex items-center justify-center text-[#1A2E4A] mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:danger-triangle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl tracking-tighter font-medium text-[#1A2E4A] mb-3">Coding Accuracy</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Wrong codes mean denied claims, audits, and liability you didn't sign up for. We fix the root cause.</p>
</div>
<div className="col-span-1 p-8 rounded-2xl bg-white ring-1 ring-gray-900/5 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-500 ease-out group">
<div className="w-12 h-12 rounded-xl bg-gray-50 ring-1 ring-gray-100 flex items-center justify-center text-[#1A2E4A] mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500">
<iconify-icon className="text-2xl" icon="solar:file-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tighter font-medium text-[#1A2E4A] mb-3">Clean Claims</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Errors at submission delay revenue by weeks. We catch them first.</p>
</div>
<div className="col-span-1 p-8 rounded-2xl bg-gradient-to-br from-[#1A2E4A] to-[#0A111A] text-white ring-1 ring-white/10 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-[#1A2E4A]/20 transition-all duration-500 ease-out group relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-white/10 transition-colors duration-500"></div>
<div className="w-12 h-12 rounded-xl bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
<iconify-icon className="text-2xl" icon="solar:wallet-money-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tighter font-medium text-white mb-3">AR &amp; Collections</h3>
<p className="text-sm text-gray-400 leading-relaxed font-normal">Aging receivables quietly eat into cash flow. We recover what's yours.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0A111A] relative overflow-hidden" id="about">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A2E4A]/40 via-[#0A111A] to-[#0A111A]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]"></div>
<div className="absolute inset-0 opacity-[0.015]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs font-normal mb-8 shadow-sm backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
                A smarter way, built for the future
            </div>
<h2 className="text-4xl sm:text-5xl tracking-tighter font-medium text-white mb-8 leading-tight">We asked a simple question:<br/>is there a better way?</h2>
<p className="text-lg text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto font-normal">
                The answer was yes — and it involved AI. Legacy billing companies are large, slow, and built for hospital networks. Pono was built from the ground up for growth-stage clinics that need a billing partner who actually picks up the phone.
            </p>
<a className="group text-sm font-medium text-white hover:text-gray-300 inline-flex items-center gap-2 transition-colors border-b border-white/20 hover:border-white/50 pb-1" href="#how-it-works">
                See how the process works 
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-xs font-normal text-[#0062B8] uppercase tracking-widest mb-4 block">What we do</span>
<h2 className="text-3xl sm:text-4xl tracking-tighter font-medium text-[#1A2E4A]">Four pillars. One peace of mind.</h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">

<div className="group p-8 rounded-2xl bg-[#FAFAFA] ring-1 ring-black/[0.03] hover:bg-white hover:ring-gray-200 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 ease-out cursor-default">
<div className="w-10 h-10 rounded-lg bg-white ring-1 ring-gray-100 flex items-center justify-center text-[#1A2E4A] mb-8 group-hover:text-[#0062B8] group-hover:shadow-sm group-hover:scale-105 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:target-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tighter font-medium text-[#1A2E4A] mb-2">Accuracy</h3>
<p className="text-[11px] font-normal text-gray-400 mb-4 uppercase tracking-widest">Catch what others miss</p>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Our coding work combines certified human reviewers with AI pattern detection. Fewer denials, fewer audits.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#FAFAFA] ring-1 ring-black/[0.03] hover:bg-white hover:ring-gray-200 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 ease-out cursor-default">
<div className="w-10 h-10 rounded-lg bg-white ring-1 ring-gray-100 flex items-center justify-center text-[#1A2E4A] mb-8 group-hover:text-[#0062B8] group-hover:shadow-sm group-hover:scale-105 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:stopwatch-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tighter font-medium text-[#1A2E4A] mb-2">Speed</h3>
<p className="text-[11px] font-normal text-gray-400 mb-4 uppercase tracking-widest">Cash arrives sooner</p>
<p className="text-sm text-gray-500 leading-relaxed font-normal">From submission to collection, every stage is faster. Cleaner claims go out quicker. Denials get reworked instantly.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#FAFAFA] ring-1 ring-black/[0.03] hover:bg-white hover:ring-gray-200 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 ease-out cursor-default">
<div className="w-10 h-10 rounded-lg bg-white ring-1 ring-gray-100 flex items-center justify-center text-[#1A2E4A] mb-8 group-hover:text-[#0062B8] group-hover:shadow-sm group-hover:scale-105 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:eye-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tighter font-medium text-[#1A2E4A] mb-2">Transparency</h3>
<p className="text-[11px] font-normal text-gray-400 mb-4 uppercase tracking-widest">You see what we see</p>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Real-time dashboards. Monthly reports written in plain English. We explain trends, not just numbers.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#FAFAFA] ring-1 ring-black/[0.03] hover:bg-white hover:ring-gray-200 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 ease-out cursor-default">
<div className="w-10 h-10 rounded-lg bg-white ring-1 ring-gray-100 flex items-center justify-center text-[#1A2E4A] mb-8 group-hover:text-[#0062B8] group-hover:shadow-sm group-hover:scale-105 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg tracking-tighter font-medium text-[#1A2E4A] mb-2">Growth</h3>
<p className="text-[11px] font-normal text-gray-400 mb-4 uppercase tracking-widest">Efficiency compounds</p>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Our clients don't just recover lost revenue — they grow into it. Faster cash flow funds a calmer practice.</p>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 bg-white text-[#1A2E4A] ring-1 ring-gray-200/80 hover:ring-gray-300 hover:bg-gray-50/50 h-10 px-6 shadow-sm active:scale-[0.98]" href="#services">
                    Explore All Services
                </a>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-y border-gray-100/80" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-20 text-center md:text-left">
<span className="text-xs font-normal text-[#0062B8] uppercase tracking-widest mb-4 block">Process</span>
<h2 className="text-3xl sm:text-4xl tracking-tighter font-medium text-[#1A2E4A]">Your first win, inside one billing cycle.</h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
<div className="relative pt-2 group cursor-default">
<div className="w-12 h-12 rounded-full bg-white ring-1 ring-gray-200 text-[#1A2E4A] flex items-center justify-center font-medium text-lg mx-auto md:mx-0 mb-8 shadow-sm z-10 relative group-hover:ring-[#0062B8]/30 group-hover:bg-blue-50/50 transition-colors duration-300">01</div>
<h3 className="text-xl tracking-tighter font-medium text-[#1A2E4A] mb-3 text-center md:text-left">Discovery Call</h3>
<p className="text-sm text-gray-500 leading-relaxed text-center md:text-left font-normal">A 15-minute conversation. We listen first. No pitch, no high-pressure sales tactics.</p>
</div>
<div className="relative pt-2 group cursor-default">
<div className="w-12 h-12 rounded-full bg-white ring-1 ring-gray-200 text-[#1A2E4A] flex items-center justify-center font-medium text-lg mx-auto md:mx-0 mb-8 shadow-sm z-10 relative group-hover:ring-[#0062B8]/30 group-hover:bg-blue-50/50 transition-colors duration-300">02</div>
<h3 className="text-xl tracking-tighter font-medium text-[#1A2E4A] mb-3 text-center md:text-left">The 90-Day Plan</h3>
<p className="text-sm text-gray-500 leading-relaxed text-center md:text-left font-normal">A clear proposal showing exactly what we'll fix, how we'll do it, and what to expect.</p>
</div>
<div className="relative pt-2 group cursor-default">
<div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#1A2E4A] to-[#0A111A] ring-4 ring-white text-white flex items-center justify-center font-medium text-lg mx-auto md:mx-0 mb-8 shadow-md z-10 relative group-hover:scale-105 transition-transform duration-300">03</div>
<h3 className="text-xl tracking-tighter font-medium text-[#1A2E4A] mb-3 text-center md:text-left">Onboarding &amp; Launch</h3>
<p className="text-sm text-gray-500 leading-relaxed text-center md:text-left font-normal">Clean handoff. System connected. Measurable results in your very first billing cycle.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white overflow-hidden relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-l from-[#F7F5F0] to-transparent rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div>
<span className="text-xs font-normal text-[#0062B8] uppercase tracking-widest mb-4 block">Outcomes</span>
<h2 className="text-3xl sm:text-4xl tracking-tighter font-medium text-[#1A2E4A] mb-6 leading-tight">Results clinic owners actually feel.</h2>
<p className="text-lg text-gray-500 mb-10 leading-relaxed font-normal">
                        Our clients describe the change in three words: easier, faster, calmer. Cash flow improves. Denials drop. And most importantly, the practice owner stops thinking about billing.
                    </p>
<div className="space-y-5">
<div className="flex items-center gap-4 group cursor-default">
<div className="w-6 h-6 rounded-full bg-emerald-50/80 flex items-center justify-center text-emerald-600 ring-1 ring-emerald-100 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-[#1A2E4A]">Cleaner claims from week one</span>
</div>
<div className="flex items-center gap-4 group cursor-default">
<div className="w-6 h-6 rounded-full bg-emerald-50/80 flex items-center justify-center text-emerald-600 ring-1 ring-emerald-100 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-[#1A2E4A]">Denials resolved before they age out</span>
</div>
<div className="flex items-center gap-4 group cursor-default">
<div className="w-6 h-6 rounded-full bg-emerald-50/80 flex items-center justify-center text-emerald-600 ring-1 ring-emerald-100 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
<iconify-icon icon="solar:check-read-linear" style={{strokeWidth: '2'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-[#1A2E4A]">Billing reports you can actually understand</span>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-gradient-to-br from-[#0062B8]/10 to-[#C8DCF0]/20 rounded-3xl blur-2xl transform translate-x-4 translate-y-4 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700"></div>
<div className="bg-white/60 backdrop-blur-2xl p-10 sm:p-12 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/[0.03] relative z-10 inset-ring-1 inset-ring-white/50">
<iconify-icon className="text-4xl text-gray-200 absolute top-10 right-10" icon="solar:quote-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="flex gap-1 mb-8 text-amber-400">
<iconify-icon className="drop-shadow-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="drop-shadow-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="drop-shadow-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="drop-shadow-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="drop-shadow-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-xl tracking-tight font-medium text-[#1A2E4A] leading-relaxed mb-10">
                            "It was easier than I thought. We had Pono's process running in under two weeks, and our denial backlog was clear inside the first month. I haven't worried about billing since."
                        </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 ring-1 ring-gray-200/80 shadow-inner flex items-center justify-center text-[#1A2E4A] font-medium text-sm">
                                SJ
                            </div>
<div>
<p className="text-sm font-medium text-[#1A2E4A]">Dr. Sarah Jenkins</p>
<p className="text-xs text-gray-500 mt-0.5 font-normal">Director, Horizon Mental Health Group</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] border-y border-gray-100/80" id="who-we-serve">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
<div className="lg:col-span-5 lg:sticky lg:top-32 self-start">
<span className="text-xs font-normal text-[#0062B8] uppercase tracking-widest mb-4 block">Who we serve</span>
<h2 className="text-3xl sm:text-4xl tracking-tighter font-medium text-[#1A2E4A] mb-6">Built for growth-stage clinics.</h2>
<p className="text-lg text-gray-500 mb-8 leading-relaxed font-normal">
                        If you're billing $2M–$10M annually and your in-house team is spending more time fixing claims than working with patients, we're built for you.
                    </p>
<a className="inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 bg-gradient-to-b from-[#1A2E4A] to-[#0A111A] text-white hover:opacity-90 h-11 px-6 shadow-sm active:scale-[0.98] inset-ring-1 inset-ring-white/10" href="#book-call">
                        See If We're a Fit
                    </a>
</div>
<div className="lg:col-span-7 space-y-4">
<div className="bg-white p-8 rounded-2xl ring-1 ring-black/[0.03] hover:ring-gray-200/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
<h4 className="text-xl tracking-tight font-medium text-[#1A2E4A] mb-3 group-hover:text-[#0062B8] transition-colors">Mental Health Clinics</h4>
<p className="text-sm text-gray-500 leading-relaxed font-normal">High-volume claims, complex coding, and growing demand. We handle the volume so you can scale your practice.</p>
</div>
<div className="bg-white p-8 rounded-2xl ring-1 ring-black/[0.03] hover:ring-gray-200/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
<h4 className="text-xl tracking-tight font-medium text-[#1A2E4A] mb-3 group-hover:text-[#0062B8] transition-colors">Primary Care</h4>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Small teams, big patient loads. We absorb the billing burden your front desk shouldn't have to carry.</p>
</div>
<div className="bg-white p-8 rounded-2xl ring-1 ring-black/[0.03] hover:ring-gray-200/80 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:-translate-y-0.5 transition-all duration-300 group cursor-default">
<h4 className="text-xl tracking-tight font-medium text-[#1A2E4A] mb-3 group-hover:text-[#0062B8] transition-colors">Specialty Practices</h4>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Specialty-specific codes, modifiers, and intricate payer rules. We know your specific requirements.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="resources">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="max-w-2xl">
<span className="text-xs font-normal text-[#0062B8] uppercase tracking-widest mb-4 block">Resources</span>
<h2 className="text-3xl sm:text-4xl tracking-tighter font-medium text-[#1A2E4A]">Answers to billing's hardest questions.</h2>
</div>
<a className="group text-sm font-medium text-[#0062B8] hover:text-[#1A2E4A] inline-flex items-center gap-1.5 transition-colors flex-shrink-0" href="#resources">
                    View all articles <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<a className="group flex flex-col bg-[#FAFAFA] rounded-2xl ring-1 ring-black/[0.03] overflow-hidden hover:bg-white hover:ring-gray-200 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 ease-out" href="#">
<div className="p-8 flex-1 flex flex-col">
<span className="text-[11px] font-normal text-gray-400 uppercase tracking-widest mb-4 block">Coding</span>
<h3 className="text-lg tracking-tight font-medium text-[#1A2E4A] mb-4 group-hover:text-[#0062B8] transition-colors leading-snug">The Five Coding Errors That Drain More Revenue Than You Realize</h3>
<div className="mt-auto flex items-center text-xs text-gray-400 font-medium pt-8 border-t border-gray-100/80 group-hover:text-gray-500 transition-colors">
<iconify-icon className="mr-1.5 text-lg" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            6 min read
                        </div>
</div>
</a>

<a className="group flex flex-col bg-[#FAFAFA] rounded-2xl ring-1 ring-black/[0.03] overflow-hidden hover:bg-white hover:ring-gray-200 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 ease-out" href="#">
<div className="p-8 flex-1 flex flex-col">
<span className="text-[11px] font-normal text-gray-400 uppercase tracking-widest mb-4 block">Denials</span>
<h3 className="text-lg tracking-tight font-medium text-[#1A2E4A] mb-4 group-hover:text-[#0062B8] transition-colors leading-snug">Why Your Denial Rate Hit a Wall — and How to Break Through It</h3>
<div className="mt-auto flex items-center text-xs text-gray-400 font-medium pt-8 border-t border-gray-100/80 group-hover:text-gray-500 transition-colors">
<iconify-icon className="mr-1.5 text-lg" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            5 min read
                        </div>
</div>
</a>

<a className="group flex flex-col bg-[#FAFAFA] rounded-2xl ring-1 ring-black/[0.03] overflow-hidden hover:bg-white hover:ring-gray-200 hover:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-500 ease-out" href="#">
<div className="p-8 flex-1 flex flex-col">
<span className="text-[11px] font-normal text-gray-400 uppercase tracking-widest mb-4 block">Accounts Receivable</span>
<h3 className="text-lg tracking-tight font-medium text-[#1A2E4A] mb-4 group-hover:text-[#0062B8] transition-colors leading-snug">Reading Your AR Aging Report (and Knowing What to Do About It)</h3>
<div className="mt-auto flex items-center text-xs text-gray-400 font-medium pt-8 border-t border-gray-100/80 group-hover:text-gray-500 transition-colors">
<iconify-icon className="mr-1.5 text-lg" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                            7 min read
                        </div>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden border-t border-gray-100/80" id="book-call">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#E8F0F9]/50 via-white to-white"></div>
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
<div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-[#0062B8] to-[#00519a] flex items-center justify-center text-white shadow-[0_8px_16px_rgba(0,98,184,0.2)] mx-auto mb-8 ring-1 ring-black/10 inset-ring-1 inset-ring-white/20">
<iconify-icon className="text-3xl" icon="solar:health-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h2 className="text-4xl sm:text-5xl tracking-tighter font-medium text-[#1A2E4A] mb-6 leading-tight">Stop fighting your billing.<br/>Start growing your practice.</h2>
<p className="text-lg text-gray-500 mb-10 max-w-xl mx-auto font-normal">
                A 15-minute discovery call. No pitch, no pressure. We listen first.
            </p>
<a className="inline-flex items-center justify-center rounded-lg text-base font-medium transition-all duration-300 bg-gradient-to-b from-[#1A2E4A] to-[#0A111A] text-white hover:opacity-90 h-14 px-10 shadow-[0_4px_14px_0_rgba(26,46,74,0.3)] hover:shadow-[0_6px_20px_rgba(26,46,74,0.2)] active:scale-[0.98] inset-ring-1 inset-ring-white/10 mb-8" href="#book-call">
                Book Your Discovery Call
            </a>
<div className="flex flex-wrap items-center justify-center gap-3 text-xs font-normal text-gray-400">
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#0062B8]" icon="solar:check-circle-linear"></iconify-icon> Free</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#0062B8]" icon="solar:clock-circle-linear"></iconify-icon> 15 minutes</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="flex items-center gap-1.5"><iconify-icon className="text-[#0062B8]" icon="solar:shield-check-linear"></iconify-icon> No obligation</span>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-gray-100/80">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-6 group cursor-pointer">
<div className="w-6 h-6 rounded border border-gray-200/80 bg-gray-50 flex items-center justify-center text-[#1A2E4A] group-hover:border-gray-300 transition-colors">
<iconify-icon className="text-sm" icon="solar:health-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-lg tracking-tight font-medium text-[#1A2E4A]">PONO</span>
</div>
<p className="text-sm text-gray-500 mb-6 leading-relaxed font-normal">Billing made simple.<br/>Revenue made right.</p>
</div>

<div>
<h4 className="text-sm font-medium text-[#1A2E4A] mb-5 tracking-tight">Services</h4>
<ul className="space-y-3 text-sm font-normal text-gray-500">
<li><a className="hover:text-[#0062B8] transition-colors" href="#">Coding Accuracy</a></li>
<li><a className="hover:text-[#0062B8] transition-colors" href="#">Clean Claims</a></li>
<li><a className="hover:text-[#0062B8] transition-colors" href="#">Denial Management</a></li>
<li><a className="hover:text-[#0062B8] transition-colors" href="#">AR &amp; Collections</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-[#1A2E4A] mb-5 tracking-tight">Company</h4>
<ul className="space-y-3 text-sm font-normal text-gray-500">
<li><a className="hover:text-[#0062B8] transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-[#0062B8] transition-colors" href="#how-it-works">How It Works</a></li>
<li><a className="hover:text-[#0062B8] transition-colors" href="#resources">Resources</a></li>
<li><a className="hover:text-[#0062B8] transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-[#1A2E4A] mb-5 tracking-tight">Connect</h4>
<div className="flex gap-4 mb-6">
<a aria-label="LinkedIn" className="w-10 h-10 rounded-full ring-1 ring-black/[0.05] flex items-center justify-center text-gray-400 hover:text-[#0062B8] hover:ring-[#0062B8]/20 transition-all bg-gray-50/50 hover:bg-blue-50/50 active:scale-95" href="#">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a aria-label="Email" className="w-10 h-10 rounded-full ring-1 ring-black/[0.05] flex items-center justify-center text-gray-400 hover:text-[#0062B8] hover:ring-[#0062B8]/20 transition-all bg-gray-50/50 hover:bg-blue-50/50 active:scale-95" href="mailto:hello@pono.com">
<iconify-icon className="text-xl" icon="solar:letter-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>

<div className="pt-8 border-t border-gray-100/80 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-xs text-gray-400 font-normal">
                    © 2026 Pono Medical Billing Solutions. Built for the future.
                </div>
<div className="flex gap-6 text-xs text-gray-400 font-normal">
<a className="hover:text-[#1A2E4A] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#1A2E4A] transition-colors" href="#">Terms of Service</a>
<a className="hover:text-[#1A2E4A] transition-colors" href="#">HIPAA Notice</a>
</div>
</div>
<div className="mt-6 text-center md:text-left text-[11px] text-gray-400 leading-relaxed max-w-4xl font-normal">
                *Pono MBS does not guarantee specific financial outcomes. All engagements include a HIPAA-compliant Business Associate Agreement.
            </div>
</div>
</footer>

    </>
  );
}
