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



        function switchTab(tabId) {
            // Hide all content
            const contents = document.querySelectorAll('.tab-content');
            contents.forEach(el => {
                el.classList.remove('active');
                el.classList.add('hidden');
            });

            // Show selected content
            const activeContent = document.getElementById('content-' + tabId);
            activeContent.classList.remove('hidden');
            activeContent.classList.add('active');

            // Update button styles
            const buttons = document.querySelectorAll('[id^="tab-btn-"]');
            buttons.forEach(btn => {
                btn.classList.remove('bg-white', 'shadow-sm', 'text-slate-900');
                btn.classList.add('text-slate-500');
            });

            const activeBtn = document.getElementById('tab-btn-' + tabId);
            activeBtn.classList.remove('text-slate-500');
            activeBtn.classList.add('bg-white', 'shadow-sm', 'text-slate-900');
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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#6B46C1] rounded-lg flex items-center justify-center text-white font-bold tracking-tighter shadow-lg shadow-purple-500/20">
                    P
                </div>
<span className="font-semibold text-lg tracking-tight text-slate-900">PRISTINE DATA AI</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-[#6B46C1] transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-[#6B46C1] transition-colors" href="#results">Results</a>
<a className="hover:text-[#6B46C1] transition-colors" href="#about">About</a>
<a className="hover:text-[#6B46C1] transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-sm font-medium text-slate-600 hover:text-slate-900" href="#">Log in</a>
<button className="bg-[#6B46C1] hover:bg-purple-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all shadow-md hover:shadow-lg shadow-purple-500/20">
                    Get Started
                </button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 mesh-gradient overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 bg-white/60 border border-purple-100 rounded-full px-3 py-1 mb-8 backdrop-blur-sm">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#6B46C1]"></span>
</span>
<span className="text-xs font-medium text-purple-700 uppercase tracking-wide">New: Intent Data v2.0</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-900 leading-[1.1] mb-6">
                        Transform Data into <span className="text-gradient">Measurable Results</span>
</h1>
<p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-lg font-light">
                        Outcome driven solutions that turns complex or incomplete data into actionable intelligence, powered by Pristine Data AI.
                    </p>

<div className="flex flex-wrap gap-3 mb-10">
<div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
<iconify-icon className="text-[#6B46C1]" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">90% Contact Accuracy</span>
</div>
<div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
<iconify-icon className="text-[#6B46C1]" icon="solar:graph-up-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">3-4x Higher Conversion</span>
</div>
<div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-sm">
<iconify-icon className="text-[#6B46C1]" icon="solar:puzzle-linear"></iconify-icon>
<span className="text-sm font-medium text-slate-700">150+ Integrations</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="bg-[#6B46C1] hover:bg-purple-700 text-white font-medium px-8 py-3.5 rounded-lg transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2 group">
                            Get Started for Free
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="bg-white hover:bg-gray-50 text-slate-700 border border-gray-200 font-medium px-8 py-3.5 rounded-lg transition-all flex items-center gap-2">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
                            Schedule a Demo
                        </button>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-400/30 to-indigo-400/30 rounded-full blur-3xl"></div>

<div className="relative w-full max-w-md bg-white rounded-2xl border border-gray-100 shadow-2xl overflow-hidden transform rotate-y-6 rotate-x-6 transition-transform hover:scale-[1.02] duration-500">
<div className="p-4 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-amber-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-xs font-medium text-gray-400">Data Intelligence Console</div>
</div>
<div className="p-6 space-y-4">

<div className="flex items-center gap-4 p-3 rounded-xl bg-purple-50/50 border border-purple-100">
<div className="w-10 h-10 rounded-lg bg-[#6B46C1]/10 flex items-center justify-center text-[#6B46C1]">
<iconify-icon icon="solar:user-rounded-linear" width="24"></iconify-icon>
</div>
<div className="flex-1">
<div className="h-2 w-24 bg-slate-200 rounded mb-2"></div>
<div className="h-2 w-16 bg-slate-100 rounded"></div>
</div>
<div className="px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">Verified</div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded-full bg-gray-100"></div>
<div className="h-2 w-full bg-gray-100 rounded"></div>
</div>
<div className="flex items-center gap-4">
<div className="h-8 w-8 rounded-full bg-gray-100"></div>
<div className="h-2 w-3/4 bg-gray-100 rounded"></div>
</div>
</div>

<div className="absolute -right-12 top-20 bg-white p-4 rounded-xl shadow-xl border border-gray-100 w-48 animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-[#6B46C1]" icon="solar:magic-stick-linear"></iconify-icon>
<span className="text-xs font-bold text-slate-800">AI Enrichment</span>
</div>
<div className="text-2xl font-semibold text-slate-900 tracking-tight">98.5%</div>
<div className="text-xs text-slate-500">Data Completeness</div>
</div>
</div>
</div>

<div className="absolute top-10 left-0 p-3 bg-white rounded-lg shadow-lg border border-gray-100 flex items-center gap-2">
<iconify-icon className="text-indigo-500" icon="solar:database-linear"></iconify-icon>
<span className="text-xs font-medium">CRM Sync</span>
</div>
<div className="absolute bottom-20 right-0 p-3 bg-white rounded-lg shadow-lg border border-gray-100 flex items-center gap-2">
<iconify-icon className="text-pink-500" icon="solar:chart-2-linear"></iconify-icon>
<span className="text-xs font-medium">Pipeline +30%</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-white py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-slate-400 mb-8 uppercase tracking-widest">Trusted by innovative revenue teams</p>
<div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
<iconify-icon icon="solar:infinity-linear"></iconify-icon> NEXLA
                </div>
<div className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
<iconify-icon icon="solar:layers-linear"></iconify-icon> STACK
                </div>
<div className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
<iconify-icon icon="solar:atom-linear"></iconify-icon> ATOMIC
                </div>
<div className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
<iconify-icon icon="solar:globe-linear"></iconify-icon> ORBIT
                </div>
<div className="text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
<iconify-icon icon="solar:command-linear"></iconify-icon> BASE
                </div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight mb-4">Results That Speak For Themselves</h2>
<p className="text-slate-500 max-w-2xl mx-auto">See how enterprise teams are transforming their go-to-market efficiency.</p>
</div>
<div className="grid md:grid-cols-3 gap-8 mb-20">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-[#6B46C1] mb-6">
<iconify-icon icon="solar:target-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Precision Targeting</h3>
<p className="text-slate-500 leading-relaxed mb-4">Achieve 90% accuracy with our proprietary AI-powered enrichment engine.</p>
<div className="h-1 w-full bg-gray-100 rounded-full overflow-hidden">
<div className="h-full bg-[#6B46C1] w-[90%]"></div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
<iconify-icon icon="solar:bolt-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Faster Decisions</h3>
<p className="text-slate-500 leading-relaxed mb-4">Experience a 10x speed improvement in data processing and qualification.</p>
<div className="flex items-baseline gap-1">
<span className="text-2xl font-bold text-slate-900">10x</span>
<span className="text-xs text-green-600 font-medium">▲ Speed</span>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 mb-6">
<iconify-icon icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2">Proven ROI</h3>
<p className="text-slate-500 leading-relaxed mb-4">Significantly lower your cost per contact while increasing deal quality.</p>
<div className="flex items-center gap-2 text-sm font-medium text-pink-600">
                        View Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="text-center mb-10">
<span className="text-sm font-bold text-[#6B46C1] uppercase tracking-wider">Capabilities</span>
<h3 className="text-2xl font-semibold text-slate-900 mt-2">Pristine Data AI Helps you Grow and Scale</h3>
</div>
<div className="flex flex-wrap justify-center gap-6 lg:gap-10">
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-slate-500 group-hover:text-[#6B46C1] group-hover:border-[#6B46C1] transition-all">
<iconify-icon icon="solar:cloud-download-linear" width="32"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Extract Data</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-slate-500 group-hover:text-[#6B46C1] group-hover:border-[#6B46C1] transition-all">
<iconify-icon icon="solar:chat-line-linear" width="32"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Personalize</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-slate-500 group-hover:text-[#6B46C1] group-hover:border-[#6B46C1] transition-all">
<iconify-icon icon="solar:document-add-linear" width="32"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Content Pipeline</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-slate-500 group-hover:text-[#6B46C1] group-hover:border-[#6B46C1] transition-all">
<iconify-icon icon="solar:layers-minimalistic-linear" width="32"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Simplify Stack</span>
</div>
<div className="flex flex-col items-center gap-3 group cursor-pointer">
<div className="w-16 h-16 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-center justify-center text-slate-500 group-hover:text-[#6B46C1] group-hover:border-[#6B46C1] transition-all">
<iconify-icon icon="solar:rocket-2-linear" width="32"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-700">Launch</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="solutions">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-12">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tight">Platform Solutions</h2>
<p className="mt-4 text-slate-500">One platform, endless possibilities for your revenue team.</p>
</div>

<div className="flex justify-center mb-12">
<div className="inline-flex bg-gray-100 p-1.5 rounded-xl">
<button className="px-6 py-2.5 rounded-lg text-sm font-medium text-slate-900 bg-white shadow-sm transition-all duration-200" id="tab-btn-marketing" onclick="switchTab('marketing')">Growth Marketing</button>
<button className="px-6 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200" id="tab-btn-sales" onclick="switchTab('sales')">Sales</button>
<button className="px-6 py-2.5 rounded-lg text-sm font-medium text-slate-500 hover:text-slate-900 transition-all duration-200" id="tab-btn-hiring" onclick="switchTab('hiring')">Hiring</button>
</div>
</div>

<div className="tab-content active grid lg:grid-cols-12 gap-12 items-center" id="content-marketing">
<div className="lg:col-span-5 space-y-8">
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">ROI-Led Demand Generation at Scale</h3>
<div className="space-y-6">
<div className="flex gap-4 p-4 rounded-xl bg-purple-50/50 border border-purple-100 transition-colors cursor-default">
<div className="mt-1 text-[#6B46C1]">
<iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Validated Data Sources</h4>
<p className="text-sm text-slate-600 mt-1">Access 150M+ companies and 700M+ contacts aggregated from hundreds of sources.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-colors cursor-default">
<div className="mt-1 text-slate-400">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Hyper Personalization</h4>
<p className="text-sm text-slate-600 mt-1">Generate dynamic content at scale based on prospect behavior and firmographics.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-colors cursor-default">
<div className="mt-1 text-slate-400">
<iconify-icon icon="solar:plug-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900">Seamless Integration</h4>
<p className="text-sm text-slate-600 mt-1">Push clean, enriched data directly into HubSpot, Salesforce, or Outreach.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="bg-slate-900 rounded-2xl p-2 shadow-2xl ring-1 ring-gray-900/5">
<div className="bg-slate-800 rounded-xl overflow-hidden relative min-h-[400px]">

<div className="p-4 border-b border-slate-700 flex items-center justify-between">
<span className="text-xs text-slate-400 font-mono">Campaign_Builder_v2.0</span>
<div className="flex gap-1.5"><div className="w-2.5 h-2.5 rounded-full bg-red-500"></div><div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div><div className="w-2.5 h-2.5 rounded-full bg-green-500"></div></div>
</div>
<div className="p-8 grid gap-6">
<div className="flex items-center gap-4 text-white">
<div className="w-12 h-12 rounded bg-[#6B46C1] flex items-center justify-center"><iconify-icon icon="solar:filter-linear" width="24"></iconify-icon></div>
<div>
<div className="text-lg font-medium">Audience Segmentation</div>
<div className="text-slate-400 text-sm">Filtering 150M+ records...</div>
</div>
<div className="ml-auto text-[#6B46C1] bg-white/10 px-3 py-1 rounded text-sm">Active</div>
</div>
<div className="grid grid-cols-3 gap-4 mt-4">
<div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
<div className="text-slate-400 text-xs mb-1">Total Leads</div>
<div className="text-white text-xl font-semibold">42,890</div>
</div>
<div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
<div className="text-slate-400 text-xs mb-1">Enrichment Rate</div>
<div className="text-green-400 text-xl font-semibold">98.2%</div>
</div>
<div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
<div className="text-slate-400 text-xs mb-1">Est. Conversion</div>
<div className="text-purple-400 text-xl font-semibold">4.5%</div>
</div>
</div>
<div className="h-32 w-full bg-slate-700/30 rounded-lg border border-slate-600 border-dashed flex items-center justify-center text-slate-500 text-sm">
                                    Workflow Visualization Area
                                </div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden grid lg:grid-cols-12 gap-12 items-center" id="content-sales">
<div className="lg:col-span-5 space-y-8">
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">Close More Deals Faster</h3>
<div className="space-y-6">
<div className="flex gap-4 p-4 rounded-xl bg-indigo-50/50 border border-indigo-100">
<div className="mt-1 text-indigo-600"><iconify-icon icon="solar:stopwatch-linear" width="24"></iconify-icon></div>
<div>
<h4 className="font-semibold text-slate-900">30-Second Research</h4>
<p className="text-sm text-slate-600 mt-1">Get comprehensive dossiers on prospects instantly. Cut prep time by 90%.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200">
<div className="mt-1 text-slate-400"><iconify-icon icon="solar:magnifer-zoom-in-linear" width="24"></iconify-icon></div>
<div>
<h4 className="font-semibold text-slate-900">Rich Insights</h4>
<p className="text-sm text-slate-600 mt-1">Understand buying signals, tech stack changes, and funding news.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200">
<div className="mt-1 text-slate-400"><iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon></div>
<div>
<h4 className="font-semibold text-slate-900">Unified Lead Management</h4>
<p className="text-sm text-slate-600 mt-1">Single pane of glass for all your prospecting and engagement activities.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="bg-white rounded-2xl p-2 shadow-2xl border border-gray-100">
<div className="bg-gray-50 rounded-xl overflow-hidden min-h-[400px] border border-gray-200">
<div className="p-6">
<div className="flex items-center gap-4 mb-8">
<div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-white shadow-sm overflow-hidden">
<iconify-icon className="w-full h-full text-gray-400" height="64" icon="solar:user-circle-linear" width="64"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-bold text-slate-900">Sarah Johnson</h3>
<p className="text-slate-500 text-sm">VP of Marketing @ TechFlow</p>
</div>
<button className="ml-auto bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">Add to Sequence</button>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
<div className="text-xs font-semibold text-slate-400 uppercase mb-2">Talking Points</div>
<ul className="text-sm space-y-2 text-slate-700">
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-yellow-500" icon="solar:star-linear"></iconify-icon> Mentioned "AI scaling" in recent podcast.</li>
<li className="flex items-start gap-2"><iconify-icon className="mt-0.5 text-yellow-500" icon="solar:star-linear"></iconify-icon> TechFlow raised Series B last month.</li>
</ul>
</div>
<div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
<div className="text-xs font-semibold text-slate-400 uppercase mb-2">Personality Profile</div>
<div className="flex gap-2 mb-2">
<span className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded">Analytical</span>
<span className="px-2 py-1 bg-green-50 text-green-700 text-xs rounded">Direct</span>
</div>
<p className="text-xs text-slate-500">Keep emails concise and data-focused.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content hidden grid lg:grid-cols-12 gap-12 items-center" id="content-hiring">
<div className="lg:col-span-5 space-y-8">
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight">Intelligent Automation for Hiring</h3>
<div className="space-y-6">
<div className="flex gap-4 p-4 rounded-xl bg-pink-50/50 border border-pink-100">
<div className="mt-1 text-pink-600"><iconify-icon icon="solar:user-id-linear" width="24"></iconify-icon></div>
<div>
<h4 className="font-semibold text-slate-900">Find Your Perfect Hire</h4>
<p className="text-sm text-slate-600 mt-1">Source candidates matching exact skill sets from a global talent pool.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200">
<div className="mt-1 text-slate-400"><iconify-icon icon="solar:verified-check-linear" width="24"></iconify-icon></div>
<div>
<h4 className="font-semibold text-slate-900">Verified Profiles</h4>
<p className="text-sm text-slate-600 mt-1">AI-verified work history and skill assessments to reduce risk.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200">
<div className="mt-1 text-slate-400"><iconify-icon icon="solar:videocamera-linear" width="24"></iconify-icon></div>
<div>
<h4 className="font-semibold text-slate-900">Interview Insights</h4>
<p className="text-sm text-slate-600 mt-1">Automated scheduling and interview intelligence.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">

<div className="bg-white rounded-2xl p-2 shadow-2xl border border-gray-100">
<div className="bg-gradient-to-br from-pink-50 to-orange-50 rounded-xl overflow-hidden min-h-[400px] flex items-center justify-center">
<div className="text-center">
<div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto mb-4 text-pink-500">
<iconify-icon icon="solar:users-group-two-rounded-bold" width="40"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900">Candidate Matcher</h4>
<p className="text-slate-500">Processing 500+ Profiles...</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#6B46C1] relative overflow-hidden text-white" id="about">
<div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="text-purple-200 font-medium mb-2 tracking-wide text-sm uppercase">Our Mission</div>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight mb-8">Empowering businesses with pristine intelligence.</h2>
<figure className="mb-10 border-l-4 border-purple-400 pl-6">
<blockquote className="text-xl lg:text-2xl italic leading-relaxed text-purple-100">
                            "Data is the oil of the digital age, but without refinement, it's useless. We built Pristine to be that refinery."
                        </blockquote>
<figcaption className="mt-6 flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-purple-400/20 border border-purple-300/30 overflow-hidden">
<iconify-icon className="w-full h-full text-purple-200 p-2" icon="solar:user-bold"></iconify-icon>
</div>
<div>
<div className="font-semibold">Ashok Rajan</div>
<div className="text-purple-300 text-sm">Founder &amp; CEO</div>
</div>
</figcaption>
</figure>
<button className="bg-white text-[#6B46C1] hover:bg-purple-50 font-medium px-6 py-3 rounded-lg transition-colors flex items-center gap-2">
                        Learn More About Our Team
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
<iconify-icon className="mb-4 text-purple-200" icon="solar:shield-check-linear" width="32"></iconify-icon>
<h4 className="font-semibold text-lg mb-2">Privacy First</h4>
<p className="text-purple-200 text-sm">GDPR &amp; CCPA Compliant by design.</p>
</div>
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
<iconify-icon className="mb-4 text-purple-200" icon="solar:global-linear" width="32"></iconify-icon>
<h4 className="font-semibold text-lg mb-2">Global Reach</h4>
<p className="text-purple-200 text-sm">Data from 190+ countries.</p>
</div>
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
<iconify-icon className="mb-4 text-purple-200" icon="solar:clock-circle-linear" width="32"></iconify-icon>
<h4 className="font-semibold text-lg mb-2">Real-Time</h4>
<p className="text-purple-200 text-sm">Live data verification API.</p>
</div>
<div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/20 transition-colors">
<iconify-icon className="mb-4 text-purple-200" icon="solar:heart-linear" width="32"></iconify-icon>
<h4 className="font-semibold text-lg mb-2">Customer Obsessed</h4>
<p className="text-purple-200 text-sm">24/7 Enterprise support.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Latest from the Blog</h2>
<p className="mt-2 text-slate-500">Insights on GTM strategy, data quality, and AI.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-[#6B46C1] font-medium hover:text-purple-700" href="#">
                    View all posts <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:gallery-linear" width="40"></iconify-icon>
</div>
</div>
<div className="text-xs font-medium text-[#6B46C1] mb-2">Data Quality • 5 min read</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-[#6B46C1] transition-colors">Why "Good Enough" Data is Costing You Millions</h3>
<div className="flex items-center text-sm text-[#6B46C1] font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Read Story <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</article>

<article className="group cursor-pointer">
<div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:gallery-linear" width="40"></iconify-icon>
</div>
</div>
<div className="text-xs font-medium text-[#6B46C1] mb-2">AI Tech • 4 min read</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-[#6B46C1] transition-colors">The Future of Intent Data in the Age of LLMs</h3>
<div className="flex items-center text-sm text-[#6B46C1] font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Read Story <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</article>

<article className="group cursor-pointer">
<div className="aspect-video bg-gray-200 rounded-xl overflow-hidden mb-4 relative">
<div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center text-slate-400">
<iconify-icon icon="solar:gallery-linear" width="40"></iconify-icon>
</div>
</div>
<div className="text-xs font-medium text-[#6B46C1] mb-2">Sales Strategy • 7 min read</div>
<h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-[#6B46C1] transition-colors">Building the Modern Outbound Stack</h3>
<div className="flex items-center text-sm text-[#6B46C1] font-medium mt-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
                        Read Story <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-white to-pink-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl lg:text-5xl font-semibold text-slate-900 tracking-tight mb-6">Increase Sales Performance and <br/>Transform Your Bottom Line</h2>
<p className="text-lg text-slate-500 mb-10">Join 10,000+ forward-thinking companies building their future with Pristine.</p>
<div className="flex justify-center">
<button className="bg-[#6B46C1] hover:bg-purple-700 text-white text-lg font-medium px-10 py-4 rounded-lg transition-all shadow-xl shadow-purple-500/30 hover:scale-105">
                    Start Building for Free
                </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">

<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-[#6B46C1] rounded flex items-center justify-center text-white text-xs font-bold tracking-tighter">
                            P
                        </div>
<span className="font-semibold text-slate-900">PRISTINE</span>
</div>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-[#6B46C1] transition-colors" href="#"><iconify-icon icon="solar:link-circle-linear" width="24"></iconify-icon></a> 
</div>
</div>

<div>
<h4 className="font-semibold text-slate-900 mb-4">Solutions</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-[#6B46C1]" href="#">Data Enrichment</a></li>
<li><a className="hover:text-[#6B46C1]" href="#">Prospecting</a></li>
<li><a className="hover:text-[#6B46C1]" href="#">API Access</a></li>
<li><a className="hover:text-[#6B46C1]" href="#">Integrations</a></li>
</ul>
</div>

<div className="hidden md:block"></div>

<div>
<h4 className="font-semibold text-slate-900 mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li>123 Innovation Dr.<br/>San Francisco, CA 94103</li>
<li><a className="hover:text-[#6B46C1]" href="mailto:hello@pristinedata.ai">hello@pristinedata.ai</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2023 Pristine Data AI. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
