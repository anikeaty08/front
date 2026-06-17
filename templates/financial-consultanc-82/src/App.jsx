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



// Simple Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));
});



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
      

<nav :className="scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' : 'bg-transparent border-transparent'" @scroll.window="scrolled = (window.pageYOffset &gt; 20)" className="fixed top-0 w-full z-50 transition-all duration-300 border-b" x-data="{ scrolled: false, mobileOpen: false }">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300">
<span className="font-semibold text-lg tracking-tighter">F</span>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">FlyFin.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#process">Process</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#testimonials">Testimonials</a>
<a className="px-5 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 group" href="#contact">
                    Book Consultation
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<button @click="mobileOpen = !mobileOpen" className="md:hidden text-slate-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-lg" x-show="mobileOpen" x-transition="">
<a className="text-sm font-medium text-slate-600" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600" href="#process">Process</a>
<a className="w-full text-center px-5 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg" href="#contact">Book Consultation</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 hero-glow z-0"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                Accepting New Clients for 2024
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Simplifying Finance, <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Compliance &amp; Growth</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                End-to-end financial, taxation, compliance, and advisory services designed to support businesses at every stage.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-all hover:shadow-blue-200 hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2" href="#contact">
                    Book a Free Consultation
                    <iconify-icon icon="solar:calendar-linear" width="18"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 text-sm font-medium rounded-full hover:bg-slate-50 transition-all hover:border-slate-300 flex items-center justify-center gap-2" href="#services">
                    Explore Our Services
                </a>
</div>

<div className="mt-16 md:mt-20 relative mx-auto max-w-5xl opacity-80">
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 h-full w-full"></div>
<div className="grid grid-cols-3 gap-4 md:gap-8 opacity-40 transform perspective-1000 rotate-x-12 scale-95">
<div className="h-32 bg-slate-100 rounded-xl border border-slate-200"></div>
<div className="h-32 bg-blue-50 rounded-xl border border-blue-100"></div>
<div className="h-32 bg-slate-100 rounded-xl border border-slate-200"></div>
</div>
</div>
</div>
</section>

<div className="border-y border-slate-100 bg-slate-50/50" x-data="{ shown: false }" x-intersect="shown = true">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200/60">
<div className="py-4 md:py-0">
<div className="text-4xl font-semibold text-slate-900 mb-1 tracking-tight" x-show="shown" x-transition:enter="transition ease-out duration-1000" x-transition:enter-start="opacity-0 transform translate-y-4">10+</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years of Experience</div>
</div>
<div className="py-4 md:py-0">
<div className="text-4xl font-semibold text-slate-900 mb-1 tracking-tight" x-show="shown" x-transition:enter="transition ease-out duration-1000 delay-100" x-transition:enter-start="opacity-0 transform translate-y-4">60+</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Trusted Clients</div>
</div>
<div className="py-4 md:py-0">
<div className="text-4xl font-semibold text-slate-900 mb-1 tracking-tight" x-show="shown" x-transition:enter="transition ease-out duration-1000 delay-200" x-transition:enter-start="opacity-0 transform translate-y-4">120+</div>
<div className="text-sm font-medium text-slate-500 uppercase tracking-wide">Projects Delivered</div>
</div>
</div>
</div>
</div>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 fade-in-up">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Built for Businesses Like Yours</h2>
<p className="text-slate-500">Our services are tailored to meet the needs of businesses across industries and growth stages.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 fade-in-up stagger-1">
<div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:rocket-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Startups &amp; Entrepreneurs</h3>
<p className="text-sm text-slate-500 leading-relaxed">Agile financial structures to support rapid scaling and fundraising readiness.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 fade-in-up stagger-2">
<div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Growing Businesses &amp; SMEs</h3>
<p className="text-sm text-slate-500 leading-relaxed">Optimized cash flow management and compliance for sustainable growth.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 fade-in-up stagger-3">
<div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:buildings-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">Established Enterprises</h3>
<p className="text-sm text-slate-500 leading-relaxed">Complex audit, risk advisory, and strategic financial planning.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 fade-in-up stagger-1">
<div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:globe-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">International Companies</h3>
<p className="text-sm text-slate-500 leading-relaxed">Cross-border taxation, transfer pricing, and local regulatory compliance.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-300 fade-in-up stagger-2">
<div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shop-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2">UAE Mainland &amp; Free Zone</h3>
<p className="text-sm text-slate-500 leading-relaxed">Specialized formation and compliance for specific UAE jurisdictions.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100" id="services" x-data="{ activeTab: 'taxation' }">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 fade-in-up">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">Our Services</h2>
<p className="text-slate-500">Comprehensive financial and compliance solutions under one roof.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-700" href="#contact">
                    See all capabilities <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="flex overflow-x-auto no-scrollbar gap-2 mb-12 border-b border-slate-200 pb-1 fade-in-up">
<template x-htmlFor="tab in ['taxation', 'audit', 'accounting', 'compliance', 'payroll', 'advisory']">
<button :className="activeTab === tab ? 'border-blue-600 text-blue-600 bg-white/50' : 'border-transparent text-slate-500 hover:text-slate-700'" @click="activeTab = tab" className="px-5 py-3 text-sm font-medium rounded-t-lg transition-all whitespace-nowrap border-b-2" x-text="tab.charAt(0).toUpperCase() + tab.slice(1)"></button>
</template>
</div>

<div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-sm min-h-[400px] flex items-center fade-in-up">

<div className="grid md:grid-cols-2 gap-12 w-full" x-show="activeTab === 'taxation'" x-transition.opacity.duration.500ms="">
<div>
<div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:document-add-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4">Corporate &amp; Personal Tax</h3>
<p className="text-slate-500 leading-relaxed mb-6">Navigate the complexities of the evolving tax landscape with precision. We ensure full compliance while optimizing your tax position.</p>
<a className="inline-flex items-center gap-2 text-slate-900 font-medium border-b border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all pb-1" href="#contact">
                            Talk to an Expert <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Corporate Tax Registration &amp; Filing
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                VAT Implementation &amp; Returns
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Excise Tax Advisory
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Tax Residency Certificates
                            </li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 w-full" style={{display: 'none'}} x-show="activeTab === 'audit'" x-transition.opacity.duration.500ms="">
<div>
<div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:shield-check-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-4">Internal &amp; External Audit</h3>
<p className="text-slate-500 leading-relaxed mb-6">Gain stakeholder trust and operational transparency. Our rigorous audit processes identify risks and improve efficiency.</p>
<a className="inline-flex items-center gap-2 text-slate-900 font-medium border-b border-slate-200 hover:border-blue-600 hover:text-blue-600 transition-all pb-1" href="#contact">
                            Talk to an Expert <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-teal-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Statutory Financial Audit
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-teal-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Internal Controls Assessment
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600">
<iconify-icon className="text-teal-600 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
                                Fraud Investigation
                            </li>
</ul>
</div>
</div>

<div className="w-full text-center py-12" x-show="['accounting', 'compliance', 'payroll', 'advisory'].includes(activeTab)">
<div className="inline-block p-4 rounded-full bg-slate-50 mb-4">
<iconify-icon className="text-slate-400" icon="solar:settings-linear" width="40"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900">Detailed solution info for <span className="capitalize" x-text="activeTab"></span></h3>
<p className="text-slate-500 mt-2">Content loaded dynamically based on selection.</p>
<a className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium" href="#contact">Request Info</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="fade-in-up">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-6">We combine compliance expertise with practical business insight.</h2>
<p className="text-slate-500 text-lg mb-8 leading-relaxed">Most firms just tell you the rules. We help you play the game effectively while staying within the lines.</p>
<div className="space-y-6">
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:verified-check-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Compliance-first approach</h4>
<p className="text-sm text-slate-500 mt-1">Zero compromise on regulatory standards, ensuring your peace of mind.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:case-round-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Practical solutions</h4>
<p className="text-sm text-slate-500 mt-1">Strategies that work in the real world, not just on paper.</p>
</div>
</div>
<div className="flex gap-4 group">
<div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-slate-900">Dedicated client support</h4>
<p className="text-sm text-slate-500 mt-1">A dedicated manager for your account, always one call away.</p>
</div>
</div>
</div>
</div>
<div className="relative fade-in-up stagger-2">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-50 rounded-[2rem] blur-2xl opacity-50 z-0"></div>
<div className="relative bg-white border border-slate-100 rounded-[2rem] p-8 shadow-xl z-10">

<div className="flex items-center justify-between mb-8 border-b border-slate-100 pb-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100"></div>
<div className="h-2 w-24 bg-slate-100 rounded"></div>
</div>
<div className="h-2 w-8 bg-green-100 text-green-600 rounded"></div>
</div>
<div className="space-y-4">
<div className="h-16 bg-slate-50 rounded-xl border border-slate-100 w-full flex items-center px-4 gap-4">
<div className="w-8 h-8 rounded bg-blue-100"></div>
<div className="flex-1 space-y-2">
<div className="h-2 w-3/4 bg-slate-200 rounded"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded"></div>
</div>
</div>
<div className="h-16 bg-slate-50 rounded-xl border border-slate-100 w-full flex items-center px-4 gap-4 opacity-70">
<div className="w-8 h-8 rounded bg-indigo-100"></div>
<div className="flex-1 space-y-2">
<div className="h-2 w-3/4 bg-slate-200 rounded"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded"></div>
</div>
</div>
<div className="h-16 bg-slate-50 rounded-xl border border-slate-100 w-full flex items-center px-4 gap-4 opacity-40">
<div className="w-8 h-8 rounded bg-slate-200"></div>
<div className="flex-1 space-y-2">
<div className="h-2 w-3/4 bg-slate-200 rounded"></div>
<div className="h-2 w-1/2 bg-slate-100 rounded"></div>
</div>
</div>
</div>
<div className="mt-8 flex justify-end">
<div className="px-4 py-2 bg-blue-600 text-white text-xs rounded-lg">Status: Compliant</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Streamlined Process</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-slate-200 z-0"></div>

<div className="relative z-10 fade-in-up stagger-1 group">
<div className="w-12 h-12 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center font-semibold mb-6 mx-auto group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">1</div>
<div className="text-center">
<h3 className="text-lg font-medium text-slate-900 mb-2">Discovery</h3>
<p className="text-sm text-slate-500">We analyze your business structure and identify needs.</p>
</div>
</div>

<div className="relative z-10 fade-in-up stagger-2 group">
<div className="w-12 h-12 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center font-semibold mb-6 mx-auto group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">2</div>
<div className="text-center">
<h3 className="text-lg font-medium text-slate-900 mb-2">Strategy</h3>
<p className="text-sm text-slate-500">We design a tailored financial &amp; compliance framework.</p>
</div>
</div>

<div className="relative z-10 fade-in-up stagger-3 group">
<div className="w-12 h-12 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center font-semibold mb-6 mx-auto group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">3</div>
<div className="text-center">
<h3 className="text-lg font-medium text-slate-900 mb-2">Execution</h3>
<p className="text-sm text-slate-500">Our experts implement the solution with precision.</p>
</div>
</div>

<div className="relative z-10 fade-in-up stagger-1 group">
<div className="w-12 h-12 bg-white border-2 border-slate-200 text-slate-400 rounded-full flex items-center justify-center font-semibold mb-6 mx-auto group-hover:border-blue-600 group-hover:text-blue-600 transition-colors">4</div>
<div className="text-center">
<h3 className="text-lg font-medium text-slate-900 mb-2">Support</h3>
<p className="text-sm text-slate-500">Continuous advisory and monitoring for future growth.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-5xl mx-auto bg-slate-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl fade-in-up">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4 relative z-10">Not sure where to start?</h2>
<p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto relative z-10">Talk to our experts and get clarity on your financial and compliance needs today.</p>
<a className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 font-medium rounded-full hover:bg-blue-50 transition-all relative z-10 group" href="#contact">
                Schedule a Consultation
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:calendar-linear"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 bg-white" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight">Trusted by Industry Leaders</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 fade-in-up stagger-1">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"FlyFin transformed our chaotic tax filing into a streamlined process. Their attention to compliance detail is unmatched."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">JD</div>
<div>
<div className="text-sm font-medium text-slate-900">John Doe</div>
<div className="text-xs text-slate-500">CEO, TechStart Inc.</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 fade-in-up stagger-2">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Their advisory services helped us expand into the UAE free zone with zero regulatory friction. Highly recommended."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">AS</div>
<div>
<div className="text-sm font-medium text-slate-900">Amara Smith</div>
<div className="text-xs text-slate-500">Founder, Global Logistics</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 fade-in-up stagger-3">
<div className="flex text-amber-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Professional, timely, and extremely knowledgeable. We view FlyFin as an extension of our own finance team."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-500">MR</div>
<div>
<div className="text-sm font-medium text-slate-900">Michael Ross</div>
<div className="text-xs text-slate-500">CFO, Apex Retail</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white pt-24 pb-12 rounded-t-[3rem] relative overflow-hidden" id="contact">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center mb-20 fade-in-up">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Ready to Simplify Your <br/>Financial Operations?</h2>
<p className="text-slate-400 text-lg mb-10">Get expert support tailored to your business goals. Book a call to get started.</p>
<a className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-500 transition-all hover:shadow-lg hover:shadow-blue-900/50 hover:-translate-y-1" href="#">
                Book a Free Consultation
                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-slate-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-md flex items-center justify-center text-slate-900 text-xs font-bold">F</div>
<span className="font-medium tracking-tight">FlyFin Consultancy</span>
</div>
<div className="text-slate-500 text-sm">
                © 2024 FlyFin Consultancy. All rights reserved.
            </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
