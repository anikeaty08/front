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



        // Icons
        lucide.createIcons();

        // Workflow Tabs Logic
        function switchStep(stepNumber) {
            // Reset Nav
            document.querySelectorAll('.nav-step').forEach(btn => {
                btn.classList.replace('border-indigo-500', 'border-transparent');
                btn.classList.replace('bg-slate-800', 'bg-transparent');
                btn.classList.remove('shadow-lg'); // Remove shadow from inactive
                
                const indicator = btn.querySelector('.step-indicator');
                indicator.classList.replace('bg-indigo-500', 'bg-slate-800');
                indicator.classList.replace('text-white', 'text-slate-500');
                indicator.classList.add('border', 'border-slate-700');
                
                const title = btn.querySelector('h3');
                title.classList.replace('text-white', 'text-slate-500');
            });

            // Activate Btn
            const activeBtn = document.getElementById(`step-btn-${stepNumber}`);
            activeBtn.classList.replace('border-transparent', 'border-indigo-500');
            activeBtn.classList.add('bg-slate-800', 'shadow-lg');
            
            const activeIndicator = activeBtn.querySelector('.step-indicator');
            activeIndicator.classList.replace('bg-slate-800', 'bg-indigo-500');
            activeIndicator.classList.replace('text-slate-500', 'text-white');
            activeIndicator.classList.remove('border', 'border-slate-700');
            
            activeBtn.querySelector('h3').classList.replace('text-slate-500', 'text-white');

            // Switch Visual
            document.querySelectorAll('.step-content').forEach(el => {
                el.classList.remove('active');
                el.style.opacity = '0';
                el.style.transform = 'translateY(10px)';
            });
            
            const activeVisual = document.getElementById(`visual-${stepNumber}`);
            activeVisual.classList.add('active');
            setTimeout(() => {
                activeVisual.style.opacity = '1';
                activeVisual.style.transform = 'translateY(0)';
            }, 50);
        }

        // Testimonial Carousel Logic
        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.slide');
            let current = 0;

            function showSlide(index) {
                slides.forEach(s => s.classList.remove('active'));
                slides[index].classList.add('active');
            }

            document.getElementById('nextBtn').addEventListener('click', () => {
                current = (current + 1) % slides.length;
                showSlide(current);
            });

            document.getElementById('prevBtn').addEventListener('click', () => {
                current = (current - 1 + slides.length) % slides.length;
                showSlide(current);
            });
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
      

<div className="fixed top-0 w-full h-screen -z-10 bg-slate-950">
<div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
<div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none"></div>
</div>

<nav className="sticky top-0 w-full z-50 backdrop-blur-xl border-b bg-slate-950/70 border-slate-800 transition-all duration-300">
<div className="flex h-14 max-w-7xl mx-auto px-6 items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-lg flex items-center justify-center shadow-sm bg-white text-slate-950 transition-transform group-hover:scale-105">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="16">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
<polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
<line x1="12" x2="12" y1="22.08" y2="12"></line>
</svg>
</div>
<span className="text-base font-bold tracking-tight text-white">
                    Akinia
                </span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-400 transition-colors hover:text-white" href="#">Data</a>
<a className="text-xs font-medium text-slate-400 transition-colors hover:text-white" href="#solutions">Solutions</a>
<a className="text-xs font-medium text-slate-400 transition-colors hover:text-white" href="#">Pricing</a>
<a className="text-xs font-medium text-slate-400 transition-colors hover:text-white" href="#">Enterprise</a>
</div>
<div className="flex items-center gap-3">
<a className="text-xs font-medium text-slate-400 px-3 py-2 hover:text-white" href="#">Log in</a>
<a className="inline-flex items-center justify-center h-8 px-4 rounded-md text-xs font-semibold shadow-sm transition-all bg-white text-slate-950 hover:bg-slate-200 hover:shadow-md hover:shadow-white/10" href="#">
                    Get Started
                </a>
</div>
</div>
</nav>
<main className="flex-grow">

<div className="text-center max-w-7xl mx-auto pt-24 px-6 pb-20 border-b border-slate-800">
<div className="inline-flex gap-2 text-[10px] font-medium border rounded-full mb-8 py-1 px-3 items-center text-slate-300 bg-slate-900 border-slate-800 shadow-sm hover:border-slate-700 transition-colors cursor-default">
<span className="flex relative h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                v2.0 Now Available
            </div>
<h1 className="md:text-6xl text-5xl font-bold tracking-tight max-w-4xl mx-auto mb-6 text-white bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-400">
                Trusted Private Market Data for Africa.
            </h1>
<p className="leading-relaxed text-lg text-slate-400 max-w-2xl mx-auto mb-10 font-normal">
                Reliable intelligence on companies, investors, and deals—all in one platform. Make better decisions with verified data.
            </p>
<div className="flex gap-4 justify-center items-center">
<button className="transition-all text-xs font-semibold rounded-lg py-3 px-6 hover:bg-slate-200 shadow-lg shadow-white/5 text-slate-950 bg-white">
                    Book Demo
                </button>
<button className="transition-all text-xs font-semibold border rounded-lg py-3 px-6 hover:bg-slate-800 hover:text-white text-slate-300 bg-slate-900 border-slate-800 shadow-sm">
                    Start Free Trial
                </button>
</div>
</div>

<section className="py-24 px-6 bg-slate-950" id="solutions">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border text-[10px] font-semibold mb-6 shadow-sm border-slate-800 bg-slate-900 text-slate-400 uppercase tracking-wider">
<i className="w-3 h-3" data-lucide="layers"></i>
                        Solutions
                    </div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white max-w-2xl">
                        Complete market coverage.<br/>From granular deals to macro indicators.
                    </h2>
</div>

<div className="mb-24">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800/60">
<div>
<h3 className="text-xl font-bold text-white flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                                Micro-Solutions
                            </h3>
<p className="text-slate-400 mt-2 max-w-lg">Explore private companies, transactions, investors and more.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors mt-4 md:mt-0" href="#">
                            View full database <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group rounded-2xl p-6 border border-slate-800 bg-slate-900/40 hover:bg-slate-900 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 flex flex-col overflow-hidden relative min-h-[320px]">
<div className="mb-4 relative z-10">
<div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center mb-3 text-slate-300 border border-slate-700">
<i className="w-4 h-4" data-lucide="building-2"></i>
</div>
<h4 className="text-sm font-bold text-white mb-1">Company Profiles</h4>
<p className="text-xs text-slate-400 leading-relaxed">Verified ownership data and cap tables.</p>
</div>
<div className="mt-auto relative w-full overflow-hidden rounded-xl border border-slate-800 bg-slate-950 shadow-sm select-none">
<div className="border-b border-slate-800 px-3 py-2 flex items-center gap-2 bg-slate-900/50">
<div className="flex gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div><div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div></div>
</div>
<div className="divide-y divide-slate-800 text-[10px]">
<div className="px-3 py-2 flex justify-between hover:bg-slate-900">
<span className="font-semibold text-slate-300">Paystack</span>
<span className="text-slate-500">$200M</span>
</div>
<div className="px-3 py-2 flex justify-between hover:bg-slate-900">
<span className="font-semibold text-slate-300">Flutterwave</span>
<span className="text-slate-500">$250M</span>
</div>
<div className="px-3 py-2 flex justify-between hover:bg-slate-900">
<span className="font-semibold text-slate-300">Andela</span>
<span className="text-slate-500">$200M</span>
</div>
</div>
</div>
</div>

<div className="group rounded-2xl p-6 border border-slate-800 bg-slate-900/40 hover:bg-slate-900 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 flex flex-col overflow-hidden relative min-h-[320px]">
<div className="mb-4 relative z-10">
<div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center mb-3 text-slate-300 border border-slate-700">
<i className="w-4 h-4" data-lucide="users"></i>
</div>
<h4 className="text-sm font-bold text-white mb-1">Active Investors</h4>
<p className="text-xs text-slate-400 leading-relaxed">Filter 3,000+ investors by mandate.</p>
</div>
<div className="mt-auto relative h-32 w-full flex items-center justify-center perspective-1000">
<div className="absolute top-2 w-[85%] bg-slate-800 border border-slate-700 rounded-lg p-2 shadow-sm opacity-60 scale-90"></div>
<div className="absolute -top-2 w-[90%] bg-slate-950 border border-slate-800 rounded-lg p-3 shadow-xl transition-all group-hover:-translate-y-2">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white text-slate-950 flex items-center justify-center text-[10px] font-bold">P</div>
<div>
<div className="text-[10px] font-bold text-white">Partech</div>
<div className="text-[8px] text-slate-500">VC • Paris</div>
</div>
</div>
</div>
<div className="flex gap-1">
<span className="text-[8px] bg-slate-900 text-slate-400 px-1.5 py-0.5 rounded border border-slate-800">Fintech</span>
</div>
</div>
</div>
</div>

<div className="group rounded-2xl p-6 border border-slate-800 bg-slate-900/40 hover:bg-slate-900 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 flex flex-col overflow-hidden relative min-h-[320px]">
<div className="mb-4 relative z-10">
<div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center mb-3 text-slate-300 border border-slate-700">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i>
</div>
<h4 className="text-sm font-bold text-white mb-1">Deal Transactions</h4>
<p className="text-xs text-slate-400 leading-relaxed">Valuation multiples &amp; deal terms.</p>
</div>
<div className="mt-auto bg-slate-950 border border-slate-800 rounded-xl p-3 shadow-sm">
<div className="flex justify-between items-end h-20 gap-1.5 px-1">
<div className="w-full bg-slate-800 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-indigo-500 rounded-t-sm h-[85%] relative shadow-lg shadow-indigo-500/20 group-hover:bg-indigo-400 transition-colors"></div>
<div className="w-full bg-slate-800 rounded-t-sm h-[55%]"></div>
<div className="w-full bg-slate-800 rounded-t-sm h-[45%]"></div>
</div>
<div className="border-t border-slate-800 mt-2 pt-1 flex justify-between text-[8px] text-slate-500 uppercase font-mono">
<span>Seed</span><span>Ser A</span><span>Ser B</span><span>Exit</span>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-800/60">
<div>
<h3 className="text-xl font-bold text-white flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                Macro-Solutions
                            </h3>
<p className="text-slate-400 mt-2 max-w-lg">Explore public equity and debt markets, country-level indicators and more.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors mt-4 md:mt-0" href="#">
                            Explore data sets <i className="w-3 h-3" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group rounded-2xl p-8 border border-slate-800 bg-slate-900/40 hover:bg-slate-900 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center mb-4 text-slate-300 border border-slate-700">
<i className="w-4 h-4" data-lucide="trending-up"></i>
</div>
<h4 className="text-base font-bold text-white mb-2">Public Markets</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-4">Real-time data on African public equity exchanges and sovereign debt yields.</p>
<div className="flex gap-2">
<span className="px-2 py-1 rounded border border-slate-800 bg-slate-950 text-[10px] font-medium text-slate-400">NGX All-Share</span>
<span className="px-2 py-1 rounded border border-slate-800 bg-slate-950 text-[10px] font-medium text-slate-400">JSE Top 40</span>
</div>
</div>
<div className="w-full md:w-1/2 h-32 bg-slate-950 border border-slate-800 rounded-xl p-4 relative overflow-hidden">

<svg className="w-full h-full" preserveaspectratio="none" viewbox="0 0 200 100">
<defs>
<lineargradient id="gradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#10b981" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#10b981" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,80 C20,75 40,85 60,60 C80,35 100,45 120,40 C140,35 160,20 200,10 L200,100 L0,100 Z" fill="url(#gradient)"></path>
<path className="group-hover:stroke-emerald-400 transition-colors" d="M0,80 C20,75 40,85 60,60 C80,35 100,45 120,40 C140,35 160,20 200,10" fill="none" stroke="#10b981" strokeWidth="2"></path>
</svg>
<div className="absolute top-2 right-2 text-[10px] font-bold text-emerald-400">+12.4%</div>
</div>
</div>

<div className="group rounded-2xl p-8 border border-slate-800 bg-slate-900/40 hover:bg-slate-900 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 flex flex-col md:flex-row gap-8 items-center">
<div className="flex-1">
<div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center mb-4 text-slate-300 border border-slate-700">
<i className="w-4 h-4" data-lucide="globe-2"></i>
</div>
<h4 className="text-base font-bold text-white mb-2">Country Indicators</h4>
<p className="text-sm text-slate-400 leading-relaxed mb-4">Macroeconomic dashboards covering GDP growth, inflation, and FX rates.</p>
<div className="flex gap-2">
<span className="px-2 py-1 rounded border border-slate-800 bg-slate-950 text-[10px] font-medium text-slate-400">54 Countries</span>
<span className="px-2 py-1 rounded border border-slate-800 bg-slate-950 text-[10px] font-medium text-slate-400">Quarterly Updates</span>
</div>
</div>
<div className="w-full md:w-1/2 bg-slate-950 border border-slate-800 rounded-xl overflow-hidden">
<div className="flex items-center justify-between px-3 py-2 bg-slate-900/50 border-b border-slate-800">
<span className="text-[9px] font-bold uppercase text-slate-500">Live Rates</span>
</div>
<div className="divide-y divide-slate-800">
<div className="px-3 py-2 flex justify-between items-center hover:bg-slate-900/50">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-[8px] border border-slate-700">🇳🇬</div>
<span className="text-[10px] font-medium text-slate-300">NGN/USD</span>
</div>
<span className="text-[10px] font-mono text-red-400">-0.2%</span>
</div>
<div className="px-3 py-2 flex justify-between items-center hover:bg-slate-900/50">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-[8px] border border-slate-700">🇰🇪</div>
<span className="text-[10px] font-medium text-slate-300">KES/USD</span>
</div>
<span className="text-[10px] font-mono text-emerald-400">+0.1%</span>
</div>
<div className="px-3 py-2 flex justify-between items-center hover:bg-slate-900/50">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-slate-800 flex items-center justify-center text-[8px] border border-slate-700">🇿🇦</div>
<span className="text-[10px] font-medium text-slate-300">ZAR/USD</span>
</div>
<span className="text-[10px] font-mono text-slate-500">0.0%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-800 bg-slate-900 py-24 px-6">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div>
<div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded border text-[10px] font-semibold mb-6 shadow-sm border-slate-700 bg-slate-800 text-slate-400 uppercase tracking-wider">
<i className="w-3 h-3" data-lucide="git-branch"></i>
                        Workflow
                    </div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-white">How Akinia Works</h2>
<p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-md">A seamless workflow designed for investment professionals. Go from discovery to outreach in minutes.</p>
<div className="space-y-4">
<button className="nav-step w-full text-left p-4 rounded-xl border-l-4 border-indigo-500 bg-slate-800 shadow-lg shadow-black/20 transition-all group" id="step-btn-1" onclick="switchStep(1)">
<div className="flex items-start gap-4">
<div className="step-indicator w-8 h-8 rounded-lg bg-indigo-500 text-white flex items-center justify-center font-bold text-sm transition-colors">1</div>
<div>
<h3 className="text-sm font-bold text-white mb-1">Search &amp; Discovery</h3>
<p className="text-xs text-slate-400 leading-relaxed">Find companies, investors, and deals instantly with semantic search.</p>
</div>
</div>
</button>
<button className="nav-step w-full text-left p-4 rounded-xl border-l-4 border-transparent hover:bg-slate-800 hover:shadow-sm transition-all group" id="step-btn-2" onclick="switchStep(2)">
<div className="flex items-start gap-4">
<div className="step-indicator w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 text-slate-500 flex items-center justify-center font-bold text-sm transition-colors group-hover:bg-slate-700 group-hover:text-white">2</div>
<div>
<h3 className="text-sm font-bold text-slate-500 group-hover:text-white mb-1 transition-colors">Analysis &amp; Deep-Dive</h3>
<p className="text-xs text-slate-500 leading-relaxed">Explore ownership, financials, and deal history with clear visualizations.</p>
</div>
</div>
</button>
<button className="nav-step w-full text-left p-4 rounded-xl border-l-4 border-transparent hover:bg-slate-800 hover:shadow-sm transition-all group" id="step-btn-3" onclick="switchStep(3)">
<div className="flex items-start gap-4">
<div className="step-indicator w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 text-slate-500 flex items-center justify-center font-bold text-sm transition-colors group-hover:bg-slate-700 group-hover:text-white">3</div>
<div>
<h3 className="text-sm font-bold text-slate-500 group-hover:text-white mb-1 transition-colors">Export &amp; Action</h3>
<p className="text-xs text-slate-500 leading-relaxed">Export clean CSV/Excel files and prepare outreach strategy.</p>
</div>
</div>
</button>
</div>
</div>

<div className="relative h-[500px] w-full rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl shadow-black/50 overflow-hidden flex flex-col">
<div className="h-9 border-b border-slate-800 bg-slate-900/50 flex items-center px-4 gap-2">
<div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div><div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div><div className="w-2.5 h-2.5 rounded-full bg-slate-800"></div></div>
<div className="mx-auto w-32 h-5 rounded bg-slate-800/50"></div>
</div>
<div className="relative flex-grow p-8 bg-slate-900/20">

<div className="step-content active flex flex-col items-center justify-center h-full" id="visual-1">
<div className="w-full max-w-sm bg-slate-900 rounded-xl shadow-2xl shadow-black border border-slate-800 overflow-hidden">
<div className="px-4 py-3 border-b border-slate-800 flex items-center gap-3">
<i className="w-4 h-4 text-slate-500" data-lucide="search"></i>
<span className="text-sm font-medium text-slate-200">Kanu Equipment</span>
<span className="w-0.5 h-4 bg-indigo-500 animate-pulse"></span>
</div>
<div className="p-2 bg-slate-950/30 space-y-2">
<div className="p-3 bg-slate-800/50 border border-slate-700 rounded-lg shadow-sm flex gap-3 items-center">
<div className="w-8 h-8 rounded-md bg-blue-900/20 text-blue-400 flex items-center justify-center border border-blue-500/20 font-bold text-xs">K</div>
<div>
<div className="text-xs font-bold text-white">Kanu Equipment</div>
<div className="text-[10px] text-slate-400">Heavy Equipment Supplier</div>
</div>
</div>
<div className="p-3 bg-slate-800/20 border border-slate-800 rounded-lg flex gap-3 items-center opacity-60">
<div className="w-8 h-8 rounded-md bg-slate-800"></div>
<div className="space-y-1.5 w-full">
<div className="h-2 w-2/3 bg-slate-800 rounded"></div>
<div className="h-1.5 w-1/2 bg-slate-800/50 rounded"></div>
</div>
</div>
</div>
</div>
</div>

<div className="step-content flex flex-col items-center justify-center h-full" id="visual-2">
<div className="w-full max-w-sm bg-slate-900 rounded-xl shadow-2xl shadow-black border border-slate-800 p-6">
<div className="flex justify-between items-start mb-6">
<div className="flex gap-4">
<div className="w-12 h-12 rounded-full bg-orange-900/20 border border-orange-500/20 flex items-center justify-center text-orange-400">
<i className="w-6 h-6" data-lucide="pie-chart"></i>
</div>
<div>
<h3 className="text-lg font-bold text-white">Kanu Equipment</h3>
<span className="text-xs text-slate-500">Series B • $20M Raise</span>
</div>
</div>
</div>
<div className="space-y-3">
<div className="flex justify-between text-xs font-medium text-slate-400">
<span>Phatisa</span>
<span>40%</span>
</div>
<div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
<div className="bg-indigo-500 h-2 rounded-full" style={{width: '40%'}}></div>
</div>
<div className="flex justify-between text-xs font-medium text-slate-400 mt-2">
<span>Management</span>
<span>35%</span>
</div>
<div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
<div className="bg-slate-600 h-2 rounded-full" style={{width: '35%'}}></div>
</div>
</div>
</div>
</div>

<div className="step-content flex flex-col items-center justify-center h-full" id="visual-3">
<div className="w-full max-w-xs bg-slate-900 rounded-xl shadow-2xl shadow-black border border-slate-800 p-6 text-center">
<div className="w-12 h-12 bg-emerald-900/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
<i className="w-6 h-6" data-lucide="check"></i>
</div>
<h4 className="text-sm font-bold text-white mb-1">Export Ready</h4>
<p className="text-xs text-slate-500 mb-6">145 Companies selected</p>
<button className="w-full py-2 bg-white text-slate-950 rounded-lg text-xs font-semibold shadow-md hover:bg-slate-200 transition-colors">Download CSV</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black text-white overflow-hidden relative border-t border-slate-900">

<div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-slate-950/50 to-slate-900/90 z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/50 backdrop-blur-sm mb-6">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">The Engine</span>
</div>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">The Akinia Intelligence Layer</h2>
<p className="text-slate-400 max-w-2xl mx-auto text-lg">Combining automated crawling with expert verification to deliver the most accurate private market data in Africa.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 relative">

<svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" preserveaspectratio="none" viewbox="0 0 100 100">
<path className="opacity-50" d="M 33 20 C 40 20, 45 50, 50 50" fill="none" stroke="#334155" stroke-dasharray="2 2" strokeWidth="0.2"></path>
<path className="opacity-50" d="M 33 50 C 40 50, 45 50, 50 50" fill="none" stroke="#334155" stroke-dasharray="2 2" strokeWidth="0.2"></path>
<path className="opacity-50" d="M 33 80 C 40 80, 45 50, 50 50" fill="none" stroke="#334155" stroke-dasharray="2 2" strokeWidth="0.2"></path>
<path className="opacity-50" d="M 50 50 C 55 50, 60 20, 67 20" fill="none" stroke="#334155" stroke-dasharray="2 2" strokeWidth="0.2"></path>
<path className="opacity-50" d="M 50 50 C 55 50, 60 50, 67 50" fill="none" stroke="#334155" stroke-dasharray="2 2" strokeWidth="0.2"></path>
<path className="opacity-50" d="M 50 50 C 55 50, 60 80, 67 80" fill="none" stroke="#334155" stroke-dasharray="2 2" strokeWidth="0.2"></path>
</svg>

<div className="space-y-6 z-10">
<div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-600 mb-4 px-1">Inputs</div>
<div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 border border-indigo-500/20">
<i className="w-5 h-5" data-lucide="file-text"></i>
</div>
<h3 className="font-semibold text-white text-sm mb-1">Private Records</h3>
<p className="text-xs text-slate-400">Deal disclosures &amp; filings.</p>
</div>
<div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4 border border-indigo-500/20">
<i className="w-5 h-5" data-lucide="globe"></i>
</div>
<h3 className="font-semibold text-white text-sm mb-1">Open Web Signals</h3>
<p className="text-xs text-slate-400">News &amp; announcements.</p>
</div>
</div>

<div className="relative z-10 flex flex-col justify-center">
<div className="bg-slate-900/80 backdrop-blur-xl border border-slate-700 p-1 rounded-2xl shadow-2xl animate-float ring-1 ring-white/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black border border-slate-700 px-3 py-1 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-wider shadow-lg">
                                Live Processing
                            </div>
<div className="p-6 space-y-4">
<div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 flex gap-4 items-center">
<i className="w-5 h-5 text-indigo-400" data-lucide="cpu"></i>
<div>
<div className="text-sm font-semibold text-white">AI Extraction</div>
<div className="text-[10px] text-slate-500">Natural Language Processing</div>
</div>
</div>
<div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50 flex gap-4 items-center">
<i className="w-5 h-5 text-indigo-400" data-lucide="users"></i>
<div>
<div className="text-sm font-semibold text-white">Analyst Validation</div>
<div className="text-[10px] text-slate-500">Human-in-the-loop review</div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-6 z-10 text-right">
<div className="flex items-center justify-end gap-4 text-xs font-bold uppercase tracking-widest text-slate-600 mb-4 px-1">Outputs</div>
<div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20 ml-auto">
<i className="w-5 h-5" data-lucide="layout-grid"></i>
</div>
<h3 className="font-semibold text-white text-sm mb-1">Platform Access</h3>
<p className="text-xs text-slate-400">Search, filter &amp; visualize.</p>
</div>
<div className="bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-slate-700 transition-colors">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4 border border-emerald-500/20 ml-auto">
<i className="w-5 h-5" data-lucide="download"></i>
</div>
<h3 className="font-semibold text-white text-sm mb-1">Bulk Export</h3>
<p className="text-xs text-slate-400">CSV/Excel for models.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 border-b border-slate-800">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1 text-[10px] font-bold text-white border border-slate-800 mb-8 uppercase tracking-wide">
                    Trusted by Investors
                </div>
<div className="relative min-h-[220px]">
<div id="testimonial-container">

<div className="slide active">
<blockquote className="text-xl md:text-2xl font-medium text-slate-200 leading-relaxed mb-6">
                                “Akinia has become our default starting point for any African deal. We quickly understand ownership, investor activity, and historical transactions without checking multiple sources.”
                            </blockquote>
<div className="flex flex-col items-center">
<div className="font-bold text-white text-sm">Partner, Private Equity</div>
<div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> South Africa
                                </div>
</div>
</div>

<div className="slide">
<blockquote className="text-xl md:text-2xl font-medium text-slate-200 leading-relaxed mb-6">
                                “For fundraising and co-investment mapping, the platform gives us a clear view of active investors by sector. It saves hours every week.”
                            </blockquote>
<div className="flex flex-col items-center">
<div className="font-bold text-white text-sm">Investment Banking Director</div>
<div className="text-xs text-slate-500 flex items-center gap-1 mt-1">
<i className="w-3 h-3" data-lucide="map-pin"></i> Kenya
                                </div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-4 mt-8">
<button className="p-2 rounded-full border border-slate-800 hover:bg-slate-900 text-slate-500 hover:text-white transition-colors" id="prevBtn"><i className="w-4 h-4" data-lucide="arrow-left"></i></button>
<button className="p-2 rounded-full border border-slate-800 hover:bg-slate-900 text-slate-500 hover:text-white transition-colors" id="nextBtn"><i className="w-4 h-4" data-lucide="arrow-right"></i></button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900/50">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-bold tracking-tight text-white mb-4">Simple plans. Per seat.</h2>
<p className="text-slate-400">Designed for deal teams across private markets.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-slate-950 rounded-2xl p-8 border border-slate-800 shadow-sm flex flex-col">
<div className="mb-6">
<h3 className="text-xl font-bold text-white">Free Trial</h3>
<p className="text-sm text-slate-500">14 days full access</p>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex gap-3 text-sm text-slate-400"><i className="w-5 h-5 text-white" data-lucide="check"></i> Database access</li>
<li className="flex gap-3 text-sm text-slate-400"><i className="w-5 h-5 text-white" data-lucide="check"></i> Advanced filters</li>
<li className="flex gap-3 text-sm text-slate-400"><i className="w-5 h-5 text-white" data-lucide="check"></i> Bookmarks</li>
</ul>
<button className="w-full py-3 rounded-xl border border-slate-700 font-semibold text-sm hover:bg-slate-900 transition-colors text-white">Start free trial</button>
</div>

<div className="bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl shadow-black/30 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
<div className="mb-6">
<h3 className="text-xl font-bold text-white">Pro</h3>
<p className="text-sm text-slate-300">Full intelligence suite</p>
</div>
<ul className="space-y-4 mb-8 flex-grow">
<li className="flex gap-3 text-sm text-slate-300"><i className="w-5 h-5 text-white" data-lucide="check"></i> Full database access</li>
<li className="flex gap-3 text-sm text-slate-300"><i className="w-5 h-5 text-white" data-lucide="check"></i> Unlimited Exports</li>
<li className="flex gap-3 text-sm text-slate-300"><i className="w-5 h-5 text-white" data-lucide="check"></i> Data Requests</li>
</ul>
<button className="w-full py-3 rounded-xl bg-white text-slate-950 font-semibold text-sm hover:bg-slate-200 transition-colors">Talk to sales</button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1650301545472-b3113cb014e4?w=2000&amp;q=80')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-3">
<div className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-widest border border-slate-800 px-3 py-1 rounded-full">
                        Manifesto
                    </div>
</div>
<div className="lg:col-span-9 space-y-8">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
<span className="block text-slate-600">Data helps you understand the market.</span>
<span className="block text-slate-600">Intelligence helps you act on it.</span>
<span className="block">Almost no one brings both together.</span>
<span className="block mt-2">Until now.</span>
</h2>
<a className="inline-flex items-center gap-2 text-white font-semibold hover:text-indigo-400 transition-colors" href="#">
                        Read our story <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>
</main>
<footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-white text-slate-950 flex items-center justify-center">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="12"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</div>
<span className="font-bold text-white text-sm">Akinia</span>
</div>
<div className="flex gap-6 text-sm text-slate-500 font-medium">
<a className="hover:text-white" href="#">Product</a>
<a className="hover:text-white" href="#">Pricing</a>
<a className="hover:text-white" href="#">Privacy</a>
<a className="hover:text-white" href="#">Terms</a>
</div>
<div className="text-xs text-slate-600">© 2025 Akinia. All rights reserved.</div>
</div>
</footer>



    </>
  );
}
