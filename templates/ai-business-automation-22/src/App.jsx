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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030305]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-semibold tracking-tighter text-lg z-50 flex items-center gap-2 font-instrument-serif" href="#" style={{}}>
<div className="w-4 h-4 bg-white rounded-full"></div>
                ASTERAS
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight">
<a className="hover:text-white transition-colors duration-300 font-instrument-serif" href="#services" style={{}}>Our Services</a>
<a className="hover:text-white transition-colors duration-300 font-instrument-serif" href="#process" style={{}}>The Process</a>
<a className="hover:text-white transition-colors duration-300 font-instrument-serif" href="#contact" style={{}}>Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="group relative px-4 py-1.5 text-sm font-medium text-black bg-white rounded-full hover:bg-slate-200 transition-all overflow-hidden" href="#contact">
<span className="relative z-10 font-instrument-serif" style={{}}>Get in touch</span>
</a>
</div>
</div>
</nav>

<main className="min-h-screen flex flex-col overflow-hidden pt-24 pb-12 relative items-center justify-center">

<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>

<div className="relative z-10 mb-12 w-48 h-48 md:w-80 md:h-80 perspective-container flex items-center justify-center">

<div className="absolute w-20 h-20 core-glow z-0"></div>

<div className="dyson-sphere w-full h-full relative">
<div className="ring"></div>
<div className="ring"></div>
<div className="ring"></div>
<div className="ring"></div>
<div className="ring"></div>
<div className="ring"></div>
<div className="ring"></div>
<div className="ring"></div>
<div className="ring"></div>
<div className="ring"></div>
</div>
</div>

<div className="relative z-20 text-center max-w-4xl px-6">
<div className="mb-6 flex items-center justify-center gap-3 text-lg md:text-xl font-medium text-slate-300">
<span className="font-instrument-serif" style={{}}>Activate your</span>

<div className="transition-colors flex bg-white w-12 h-6 rounded-full pr-0.5 pl-0.5 relative items-center">
<div className="bg-[#030305] w-5 h-5 rounded-full absolute right-0.5 shadow-sm"></div>
</div>
<span className="font-instrument-serif" style={{}}>Business's full potential, With AI</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 tracking-tight leading-[1.1] mb-6">
                Cut Costs and  Grow Revenue.
            </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed mb-10 font-instrument-serif" style={{}}>
                We find bottlenecks slowing your growth and deploy AI systems that optimize your workflow and scale operations.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<button className="group relative h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-slate-200 transition-all flex items-center gap-2 font-instrument-serif" style={{}}>
                    Free Discovery Call
                    <svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</main>

<section className="py-24 border-t border-white/5 bg-white/[0.01]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Strategic AI Solutions</h2>
<p className="text-lg text-slate-400 max-w-xl font-instrument-serif" style={{}}>Besoke intelligence architectures that drive measurable growth.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group p-8 rounded-3xl border border-white/10 bg-[#050508] hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<svg className="lucide lucide-message-square w-6 h-6" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-3">AI Customer Support</h3>
<p className="text-slate-400 leading-relaxed mb-6 font-instrument-serif" style={{}}>
                        Enterprise-grade conversational AI that delivers 24/7 customer excellence. Our intelligent agents handle complex queries with human-like understanding, reducing support costs by up to 70%.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/5 font-instrument-serif" style={{}}>24/7 Availability</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/5 font-instrument-serif" style={{}}>Multi-language</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/5 font-instrument-serif" style={{}}>Voice &amp; Chat</span>
</div>
</div>

<div className="group p-8 rounded-3xl border border-white/10 bg-[#050508] hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<svg className="lucide lucide-bar-chart-3 w-6 h-6" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-3">AI Sales Automation</h3>
<p className="text-slate-400 leading-relaxed mb-6 font-instrument-serif" style={{}}>
                        Intelligent sales acceleration that transforms your pipeline. Our AI agents qualify prospects, schedule meetings, and nurture leads with precision, increasing conversion rates by 40%.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/5 font-instrument-serif" style={{}}>Lead Qualification</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/5 font-instrument-serif" style={{}}>Meeting Booking</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/5 font-instrument-serif" style={{}}>Follow-up</span>
</div>
</div>

<div className="group p-8 rounded-3xl border border-white/10 bg-[#050508] hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<svg className="lucide lucide-workflow w-6 h-6" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-3">Workflow Automation</h3>
<p className="text-slate-400 leading-relaxed mb-6 font-instrument-serif" style={{}}>
                        Seamless integration across your entire tech stack. We connect CRM, documentation, and business systems to eliminate manual processes, saving 20+ hours per week.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/5 font-instrument-serif" style={{}}>API Integration</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/5 font-instrument-serif" style={{}}>Data Sync</span>
</div>
</div>

<div className="group p-8 rounded-3xl border border-white/10 bg-[#050508] hover:border-white/20 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white">
<svg className="lucide lucide-cpu w-6 h-6" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-3">Custom AI Solutions</h3>
<p className="text-slate-400 leading-relaxed mb-6 font-instrument-serif" style={{}}>
                        Bespoke AI architectures designed for your unique challenges. From advanced document analysis to predictive analytics dashboards.
                    </p>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/5 font-instrument-serif" style={{}}>Document AI</span>
<span className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-slate-300 border border-white/5 font-instrument-serif" style={{}}>Predictive Models</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
<div>
<span className="text-xs font-medium tracking-widest text-white uppercase mb-2 block font-instrument-serif" style={{}}>How It Works</span>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Getting started is simple.</h2>
</div>
<p className="text-slate-400 max-w-sm text-sm leading-relaxed pt-2 font-instrument-serif" style={{}}>
                    From first call to live automation — in a few fast steps. We handle the heavy lifting while you focus on strategy.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="relative">
<div className="text-6xl font-light text-white/5 absolute -top-4 -left-2 select-none">1</div>
<div className="relative z-10 pl-6 pt-4 border-l border-white/10 ml-4">
<h4 className="text-white font-medium text-lg mb-1 font-instrument-serif" style={{}}>Discovery Call</h4>
<span className="text-xs text-white/60 mb-3 block font-mono font-instrument-serif" style={{}}>20–30 min</span>
<p className="text-sm text-slate-400 leading-relaxed font-instrument-serif" style={{}}>Map the workflow, define success metrics, and identify high-impact opportunities for the first win.</p>
</div>
</div>

<div className="relative">
<div className="text-6xl font-light text-white/5 absolute -top-4 -left-2 select-none">2</div>
<div className="relative z-10 pl-6 pt-4 border-l border-white/10 ml-4">
<h4 className="text-white font-medium text-lg mb-1 font-instrument-serif" style={{}}>Build &amp; Connect</h4>
<span className="text-xs text-white/60 mb-3 block font-mono font-instrument-serif" style={{}}>3–10 days</span>
<p className="text-sm text-slate-400 leading-relaxed font-instrument-serif" style={{}}>We implement the solution and integrate it deeply with your tools (CRM, email, calendar, Slack, etc.).</p>
</div>
</div>

<div className="relative">
<div className="text-6xl font-light text-white/5 absolute -top-4 -left-2 select-none">3</div>
<div className="relative z-10 pl-6 pt-4 border-l border-white/10 ml-4">
<h4 className="text-white font-medium text-lg mb-1 font-instrument-serif" style={{}}>Launch &amp; Iterate</h4>
<span className="text-xs text-white/60 mb-3 block font-mono font-instrument-serif" style={{}}>Ongoing</span>
<p className="text-sm text-slate-400 leading-relaxed font-instrument-serif" style={{}}>Go live, measure impact immediately, and refine the model with real-world data.</p>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/5">
<div className="bg-white/[0.02] rounded-2xl p-6 border border-white/5">
<h5 className="text-white font-medium text-sm mb-2 font-instrument-serif" style={{}}>Deliverables</h5>
<p className="text-xs text-slate-500 font-instrument-serif" style={{}}>Workflow diagram, full access checklist, defined success metrics dashboard.</p>
</div>
<div className="bg-white/[0.02] rounded-2xl p-6 border border-white/5">
<h5 className="text-white font-medium text-sm mb-2 font-instrument-serif" style={{}}>Guarantee</h5>
<p className="text-xs text-slate-500 font-instrument-serif" style={{}}>If we can't deliver a clear efficiency win in 14 days, we don't take the project.</p>
</div>
<div className="bg-white/[0.02] rounded-2xl p-6 border border-white/5">
<h5 className="text-white font-medium text-sm mb-2 font-instrument-serif" style={{}}>Support</h5>
<p className="text-xs text-slate-500 font-instrument-serif" style={{}}>24/7 system monitoring and maintenance included with all deployments.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#050508]">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">The best AI systems  are built side by side.</h2>
<div className="flex justify-center">
<a className="px-8 py-3 rounded-full bg-white text-black font-medium hover:bg-slate-200 transition-colors font-instrument-serif" href="#contact" style={{}}>Let's Partner Up</a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Frequently Asked Questions</h2>
<p className="text-slate-400 mb-12 text-sm font-instrument-serif" style={{}}>Find quick answers to common questions about our automation services.</p>
<div className="space-y-4">

<details className="group border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 text-white font-medium select-none font-instrument-serif" style={{}}>
                        What types of processes can you automate?
                        <span className="transform group-open:rotate-180 transition-transform duration-200">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed font-instrument-serif" style={{}}>
                        We specialize in automating repetitive, data-heavy tasks. This includes customer support queries, sales outreach, data entry between systems, appointment scheduling, and document processing. If it follows a logic, we can likely automate it.
                    </div>
</details>

<details className="group border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 text-white font-medium select-none font-instrument-serif" style={{}}>
                        Do I need technical knowledge to use your service?
                        <span className="transform group-open:rotate-180 transition-transform duration-200">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed font-instrument-serif" style={{}}>
                        Not at all. We handle all the technical implementation, coding, and integration. We deliver a finished, working system. You just see the results—lower costs and higher efficiency.
                    </div>
</details>

<details className="group border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 text-white font-medium select-none font-instrument-serif" style={{}}>
                        Can you integrate with our existing tools?
                        <span className="transform group-open:rotate-180 transition-transform duration-200">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed font-instrument-serif" style={{}}>
                        Yes. We build custom connectors for almost any modern software stack including Salesforce, HubSpot, Slack, Gmail, Outlook, Notion, and proprietary internal databases via API.
                    </div>
</details>

<details className="group border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
<summary className="flex justify-between items-center cursor-pointer p-6 text-white font-medium select-none font-instrument-serif" style={{}}>
                        How long does implementation take?
                        <span className="transform group-open:rotate-180 transition-transform duration-200">
<svg className="lucide lucide-chevron-down w-5 h-5 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed font-instrument-serif" style={{}}>
                        Typical deployments take between 3 to 10 days depending on complexity. We prioritize quick wins, so you often see value within the first week of engagement.
                    </div>
</details>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5 bg-black text-sm" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-white font-semibold tracking-tighter text-lg block mb-6 flex items-center gap-2 font-instrument-serif" href="#" style={{}}>
<div className="w-3 h-3 bg-white rounded-full"></div>
                        ASTERAS
                    </a>
</div>
<div className="col-span-1">
<h4 className="font-medium text-white mb-4 font-instrument-serif" style={{}}>Location</h4>
<p className="text-slate-500 font-instrument-serif" style={{}}>Maribor, Slovenia</p>
<p className="text-slate-500 font-instrument-serif" style={{}}>Europe</p>
<div className="mt-4">
<span className="inline-flex items-center gap-2 px-2 py-1 rounded border border-white/10 bg-white/5 text-xs text-white font-instrument-serif" style={{}}>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                            Remote available worldwide
                        </span>
</div>
</div>
<div className="col-span-1">
<h4 className="font-medium text-white mb-4 font-instrument-serif" style={{}}>Availability</h4>
<p className="text-slate-500 font-instrument-serif" style={{}}>9:00–17:00 CET</p>
<p className="text-slate-500 mt-4 text-xs font-instrument-serif" style={{}}>24/7 Emergency Support for Enterprise Clients</p>
</div>
<div className="col-span-1">
<h4 className="font-medium text-white mb-4 font-instrument-serif" style={{}}>Contact</h4>
<a className="block text-slate-500 hover:text-white transition-colors mb-1 font-instrument-serif" href="mailto:team@asteras.ai" style={{}}>team@asteras.ai</a>
<a className="block text-slate-500 hover:text-white transition-colors font-instrument-serif" href="tel:+38670602061" style={{}}>+386 70 602 061</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p className="font-instrument-serif" style={{}}>© 2025 Asteras.ai All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-400 transition-colors font-instrument-serif" href="#" style={{}}>Terms of Service</a>
<a className="hover:text-slate-400 transition-colors font-instrument-serif" href="#" style={{}}>Privacy Policy</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
