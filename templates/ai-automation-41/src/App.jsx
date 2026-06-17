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



        // Simple Single Page App Router Logic
        function switchPage(pageId) {
            // Scroll top
            const main = document.getElementById('main-scroller');
            main.scrollTo({ top: 0, behavior: 'smooth' });

            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.add('hidden');
                // Reset animations by removing class temporarily (optional hack for re-animating)
                const animatedElements = section.querySelectorAll('.animate-enter');
                animatedElements.forEach(el => {
                    el.style.animation = 'none';
                    el.offsetHeight; /* trigger reflow */
                    el.style.animation = null; 
                });
            });

            // Show target section
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.remove('hidden');
            }

            // Update Nav State
            const btns = document.querySelectorAll('.nav-btn');
            btns.forEach(btn => {
                if(btn.dataset.target === pageId) {
                    btn.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
                    btn.classList.remove('text-slate-600');
                } else {
                    btn.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                    btn.classList.add('text-slate-600');
                }
            });
        }

        // Initialize Home
        document.addEventListener('DOMContentLoaded', () => {
            switchPage('home');
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
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
<div className="max-w-4xl mx-auto">
<div className="bg-white/80 backdrop-blur-xl border border-white/20 shadow-ios rounded-full px-5 py-3 flex items-center justify-between">

<div className="cursor-pointer group flex items-center gap-2" onclick="switchPage('home')">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight text-slate-900">SYNTH</span>
</div>

<div className="hidden md:flex bg-slate-100/50 rounded-full pt-1 pr-1 pb-1 pl-1 gap-x-1 gap-y-1 items-center">
<button className="nav-btn px-4 py-1.5 text-xs font-medium hover:text-slate-900 rounded-full transition-all hover:bg-white bg-white text-slate-900 shadow-sm" data-target="home" onclick="switchPage('home')">Home</button>
<button className="nav-btn px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-full transition-all hover:bg-white" data-target="services" onclick="switchPage('services')">Services</button>
<button className="nav-btn px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-full transition-all hover:bg-white" data-target="about" onclick="switchPage('about')">About</button>
<button className="nav-btn px-4 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-full transition-all hover:bg-white" data-target="work" onclick="switchPage('work')">Work</button>
</div>

<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-5 py-2 rounded-full transition-all shadow-lg shadow-slate-900/20 active:scale-95" onclick="switchPage('contact')">
                    Start Project
                </button>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-12 px-6 perspective-container max-w-4xl mx-auto w-full relative h-screen overflow-y-auto" id="main-scroller">

<section className="page-section min-h-[80vh] flex flex-col justify-center" id="home">
<div className="animate-enter space-y-8 text-center max-w-2xl mx-auto" style={{}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-medium tracking-wide uppercase shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    The Future of Automation
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                    Digitize.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Automate.</span> Scale.
                </h1>
<p className="text-lg text-slate-500 leading-relaxed max-w-lg mx-auto font-normal">
                    We build intelligent digital ecosystems. Combining cutting-edge web development with autonomous AI agents to streamline your B2B operations.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-2xl shadow-lg shadow-blue-500/25 transition-all active:scale-95 flex items-center justify-center gap-2" onclick="switchPage('services')">
                        Explore Services
                        <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium rounded-2xl transition-all shadow-sm active:scale-95" onclick="switchPage('work')">
                        View Case Studies
                    </button>
</div>

<div className="mt-16 relative mx-auto w-full max-w-lg h-64 perspective-container select-none pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-transparent z-10 h-full w-full"></div>
<div className="bg-white rounded-2xl shadow-ios p-6 w-full absolute top-0 left-0 border border-slate-100 transform rotate-x-12 scale-95 opacity-50 translate-y-8"></div>
<div className="bg-white rounded-2xl shadow-ios p-6 w-full absolute top-4 left-0 border border-slate-100 transform rotate-x-12 scale-95 opacity-70 translate-y-4"></div>
<div className="bg-white rounded-2xl shadow-ios border border-slate-100 w-full absolute top-8 left-0 transform rotate-x-12 p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 border-b border-slate-50 pb-4">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<iconify-icon icon="lucide:bot" width="20"></iconify-icon>
</div>
<div>
<div className="h-2.5 w-24 bg-slate-200 rounded-full mb-1.5"></div>
<div className="h-2 w-16 bg-slate-100 rounded-full"></div>
</div>
<div className="ml-auto px-2 py-1 bg-green-50 text-green-600 text-[10px] font-medium rounded-md">Active</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-slate-100 rounded-full"></div>
<div className="h-2 w-3/4 bg-slate-100 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden min-h-[60vh] py-10" id="services">
<div className="max-w-3xl mx-auto space-y-12">
<div className="text-center space-y-3 animate-enter" style={{}}>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Our Capabilities</h2>
<p className="text-sm text-slate-500">End-to-end solutions for the modern enterprise.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group bg-white rounded-3xl p-8 shadow-ios border border-slate-100 hover:border-blue-100 transition-all duration-500 hover:-translate-y-1 animate-enter delay-100" style={{}}>
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="lucide:layout-template" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Web Development</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            High-performance Next.js applications designed for conversion. We build scalable, secure, and beautiful interfaces.
                        </p>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-ios border border-slate-100 hover:border-blue-100 transition-all duration-500 hover:-translate-y-1 animate-enter delay-200" style={{}}>
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="lucide:wand-2" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">AI Integration</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Custom LLM agents trained on your business data. Automate customer support, data entry, and analysis.
                        </p>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-ios border border-slate-100 hover:border-blue-100 transition-all duration-500 hover:-translate-y-1 animate-enter delay-300" style={{}}>
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="lucide:workflow" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Workflow Automation</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Connect your stack (Stripe, CRM, Notion). We replace manual repetitive tasks with resilient code-based workflows.
                        </p>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-ios border border-slate-100 hover:border-blue-100 transition-all duration-500 hover:-translate-y-1 animate-enter delay-400" style={{}}>
<div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-6 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
<iconify-icon icon="lucide:bar-chart-3" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Data Consulting</h3>
<p className="text-sm text-slate-500 leading-relaxed">
                            Turn raw data into actionable insights. Dashboards, reporting automation, and predictive analytics.
                        </p>
</div>
</div>
</div>
</section>

<section className="page-section hidden min-h-[60vh] py-10" id="about">
<div className="max-w-3xl mx-auto">
<div className="bg-white rounded-[2.5rem] p-10 shadow-ios border border-slate-100 animate-enter" style={{}}>
<div className="flex flex-col md:flex-row gap-12 items-start">
<div className="flex-1 space-y-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Driven by Efficiency.<br/>Powered by Intelligence.</h2>
<p className="text-sm text-slate-500 leading-relaxed">
                                At SYNTH, we believe the future of work is creative, not administrative. We started as a group of engineers frustrated by inefficiency. Today, we help forward-thinking companies retire their legacy systems.
                            </p>
<p className="text-sm text-slate-500 leading-relaxed">
                                We don't just build websites; we build engines for growth. Our philosophy is simple: if it can be automated, it should be.
                            </p>
<div className="flex gap-8 pt-4">
<div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">50+</div>
<div className="text-xs text-slate-400 font-medium mt-1">Systems Built</div>
</div>
<div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">24h</div>
<div className="text-xs text-slate-400 font-medium mt-1">Time Saved/Day</div>
</div>
</div>
</div>

<div className="w-full md:w-64 bg-slate-50 rounded-3xl p-6 border border-slate-100">
<div className="space-y-4">
<div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-2">
<span>Stack</span>
<iconify-icon icon="lucide:cpu" width="14"></iconify-icon>
</div>
<div className="flex items-center gap-3">
<iconify-icon icon="logos:openai-icon" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">OpenAI API</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon icon="logos:react" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">React / Next</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon icon="logos:python" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Python Automations</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon icon="logos:supabase-icon" width="20"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Supabase</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden min-h-[60vh] py-10" id="work">
<div className="max-w-3xl mx-auto space-y-8">
<div className="flex items-end justify-between animate-enter" style={{}}>
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Selected Work</h2>
<p className="text-sm text-slate-500 mt-2">Real results for real businesses.</p>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-ios border border-slate-100 hover:shadow-xl transition-all duration-500 animate-enter delay-100 cursor-pointer" style={{}}>
<div className="grid md:grid-cols-2">
<div className="p-8 flex flex-col justify-center">
<div className="text-xs font-semibold text-blue-600 mb-2">FINTECH</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Automating Loan Processing</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                                Reduced manual underwriting time by 85% using a custom AI document parser and decision engine.
                            </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-900">
                                Read Case Study <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</div>
</div>
<div className="bg-slate-50 p-8 flex items-center justify-center border-l border-slate-100">

<div className="relative w-48 h-32 bg-white rounded-xl shadow-sm border border-slate-200 p-4 transform group-hover:scale-105 transition-transform duration-500">
<div className="h-2 w-12 bg-slate-100 rounded mb-4"></div>
<div className="space-y-2">
<div className="h-2 w-full bg-slate-50 rounded"></div>
<div className="h-2 w-full bg-slate-50 rounded"></div>
<div className="h-2 w-2/3 bg-slate-50 rounded"></div>
</div>
<div className="absolute -right-4 -bottom-4 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg">
<iconify-icon icon="lucide:check" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="group bg-white rounded-3xl overflow-hidden shadow-ios border border-slate-100 hover:shadow-xl transition-all duration-500 animate-enter delay-200 cursor-pointer" style={{}}>
<div className="grid md:grid-cols-2">
<div className="p-8 flex flex-col justify-center">
<div className="text-xs font-semibold text-indigo-600 mb-2">ECOMMERCE</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3">Intelligent Inventory Sync</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                                Synchronized 4 global warehouses with a Shopify headless frontend, reducing stockouts by 40%.
                            </p>
<div className="flex items-center gap-2 text-xs font-medium text-slate-900">
                                Read Case Study <iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</div>
</div>
<div className="bg-slate-50 p-8 flex items-center justify-center border-l border-slate-100">

<div className="flex gap-4 transform group-hover:scale-105 transition-transform duration-500">
<div className="w-16 h-24 bg-white rounded-lg shadow-sm border border-slate-200"></div>
<div className="w-16 h-24 bg-slate-800 rounded-lg shadow-sm border border-slate-800"></div>
<div className="w-16 h-24 bg-white rounded-lg shadow-sm border border-slate-200"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden min-h-[60vh] py-10" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10 animate-enter" style={{}}>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Let's build the future.</h2>
<p className="text-sm text-slate-500 mt-2">Tell us about your project.</p>
</div>
<form className="bg-white p-2 rounded-[2rem] shadow-ios border border-slate-100 animate-enter delay-100" onsubmit="event.preventDefault(); alert('Request sent!');" style={{}}>
<div className="p-6 space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">First Name</label>
<input className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-3 text-sm text-slate-900 transition-all placeholder:text-slate-400" placeholder="Jane" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Last Name</label>
<input className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-3 text-sm text-slate-900 transition-all placeholder:text-slate-400" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Email</label>
<input className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-3 text-sm text-slate-900 transition-all placeholder:text-slate-400" placeholder="jane@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-slate-700 ml-1">Project Details</label>
<textarea className="w-full bg-slate-50 border-transparent focus:bg-white focus:border-blue-500 focus:ring-0 rounded-xl px-4 py-3 text-sm text-slate-900 transition-all placeholder:text-slate-400 resize-none" placeholder="I want to automate my..." rows="4"></textarea>
</div>

<div className="flex items-center justify-between py-2 px-1">
<span className="text-xs text-slate-500 font-medium">Subscribe to automation insights</span>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-slate-200 transition-all duration-300 left-0 top-0" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-slate-200 cursor-pointer transition-colors duration-300" htmlFor="toggle"></label>
</div>
</div>
</div>
<div className="p-2">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-3xl py-4 transition-all shadow-lg active:scale-[0.99] flex items-center justify-center gap-2" type="submit">
                            Send Request
                            <iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
</div>
</form>
<div className="mt-12 text-center border-t border-slate-200 pt-8 animate-enter delay-200" style={{}}>
<p className="text-xs text-slate-400">
                        © 2023 SYNTH Inc. San Francisco.  Designed for the future.
                    </p>
</div>
</div>
</section>
</main>


    </>
  );
}
