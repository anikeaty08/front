import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-[800px] ash-gradient -z-10 pointer-events-none"></div>
<div className="fixed top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-200/30 rounded-full blur-[120px] -z-10"></div>
<div className="fixed top-[20%] left-[-10%] w-[500px] h-[500px] bg-red-100/40 rounded-full blur-[100px] -z-10"></div>

<header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
<nav className="glass-nav w-full max-w-5xl rounded-full border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] px-2 py-2 md:px-3 md:py-2.5 flex items-center justify-between ring-1 ring-slate-900/5">

<div className="flex items-center gap-2 pl-4">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
<i className="w-5 h-5" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Ashcend</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Platform</a>
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Solutions</a>
<a className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">Process</a>
</div>

<div className="flex items-center gap-3 pr-1">
<a className="hidden md:block text-base font-medium text-slate-900 px-4 hover:text-orange-600 transition-colors" href="#">Log in</a>
<a className="group relative inline-flex items-center justify-center px-5 py-2.5 text-base font-medium text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="#">
<span>Start Building</span>
<i className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
</nav>
</header>
<main className="pt-32 md:pt-40 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-sm font-medium mb-8">
<span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
            Rebuilding Business Infrastructure
            <i className="w-3 h-3 text-orange-400" data-lucide="chevron-right"></i>
</div>

<h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-semibold tracking-tight text-slate-900 max-w-4xl mb-8">
            Rise from chaos.<br/>
<span className="text-gradient">Operational Clarity.</span>
</h1>

<p className="text-xl md:text-2xl text-slate-500 max-w-2xl mb-10 font-normal leading-relaxed">
            We help businesses build their digital foundation. From web infrastructure and security to seamless process flows. Stop managing tools, start managing efficiency.
        </p>

<div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full sm:w-auto">
<button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white text-lg font-medium rounded-2xl hover:shadow-xl hover:shadow-orange-500/20 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2">
                Audit My Infrastructure
            </button>
<button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 text-lg font-medium rounded-2xl hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 flex items-center justify-center gap-2">
<i className="w-5 h-5 text-slate-400" data-lucide="play-circle"></i>
                See how it works
            </button>
</div>

<p className="text-sm font-medium text-slate-400 mb-6 uppercase tracking-widest">Optimizing flows with modern tools</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 mb-12">
<svg className="h-8 w-auto text-slate-800" fill="currentColor" viewbox="0 0 100 30"><path d="M10,15 L20,5 L30,15 L20,25 Z M40,5 h10 v20 h-10 Z M60,5 h20 v5 h-15 v5 h10 v5 h-10 v5 h15 v5 h-20 Z"></path></svg>
<svg className="h-8 w-auto text-slate-800" fill="currentColor" viewbox="0 0 100 30"><circle cx="15" cy="15" r="10"></circle><rect height="20" width="20" x="35" y="5"></rect><polygon points="70,25 80,5 90,25"></polygon></svg>
<svg className="h-8 w-auto text-slate-800" fill="currentColor" viewbox="0 0 100 30"><path d="M10,5 Q25,25 40,5 T70,5 T100,5" fill="none" stroke="currentColor" strokeWidth="4"></path></svg>
<svg className="h-8 w-auto text-slate-800" fill="currentColor" viewbox="0 0 100 30"><rect height="20" rx="5" width="20" x="10" y="5"></rect><rect height="20" rx="5" width="20" x="40" y="5"></rect><rect height="20" rx="5" width="20" x="70" y="5"></rect></svg>
</div>

<div className="relative w-full max-w-4xl mx-auto h-[480px] mt-10 perspective-[2000px] group">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] bg-gradient-to-tr from-orange-200/30 via-red-100/20 to-transparent rounded-full blur-3xl -z-10"></div>
<div className="relative w-full h-full flex items-center justify-center transform transition-transform duration-700 hover:scale-[1.01]">

<div className="absolute left-0 right-0 md:left-[10%] md:right-auto md:top-[15%] flex flex-col gap-4 z-20 w-full md:w-56 px-4 md:px-0">

<div className="service-card flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-slate-200 shadow-lg shadow-slate-200/50">
<div className="w-8 h-8 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600">
<i className="w-4 h-4" data-lucide="fingerprint"></i>
</div>
<div className="text-left">
<div className="text-xs font-semibold text-slate-900">Auth Identity</div>
<div className="text-[10px] text-slate-500">SSO &amp; Passkeys</div>
</div>
</div>

<div className="service-card flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-slate-200 shadow-lg shadow-slate-200/50 ml-0 md:ml-6">
<div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
<i className="w-4 h-4" data-lucide="database"></i>
</div>
<div className="text-left">
<div className="text-xs font-semibold text-slate-900">Data Drive</div>
<div className="text-[10px] text-slate-500">Secure Storage</div>
</div>
</div>

<div className="service-card flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-slate-200 shadow-lg shadow-slate-200/50">
<div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
<i className="w-4 h-4" data-lucide="server"></i>
</div>
<div className="text-left">
<div className="text-xs font-semibold text-slate-900">Edge Hosting</div>
<div className="text-[10px] text-slate-500">99.9% Uptime</div>
</div>
</div>
</div>

<svg className="absolute top-[28%] left-[28%] w-32 h-20 z-0 hidden md:block" fill="none" viewbox="0 0 100 100">
<path d="M0,20 C50,20 50,80 100,80" stroke="#e2e8f0" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>
<svg className="absolute top-[48%] left-[30%] w-24 h-4 z-0 hidden md:block" fill="none" viewbox="0 0 100 10">
<line stroke="#e2e8f0" stroke-dasharray="4 4" strokeWidth="2" x1="0" x2="100" y1="5" y2="5"></line>
</svg>

<div className="relative md:translate-x-12 w-64 md:w-72 bg-white rounded-2xl p-5 shadow-2xl border border-slate-100 rotate-2 z-10 transition-all duration-500 hover:-translate-y-2 hover:rotate-0">
<div className="flex items-center gap-2 mb-4">
<div className="p-1.5 bg-orange-50 rounded-md">
<i className="w-4 h-4 text-orange-600" data-lucide="workflow"></i>
</div>
<div className="text-xs font-semibold text-slate-900 uppercase tracking-wider">audit Processes</div>
<div className="ml-auto flex gap-1">
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
</div>
</div>
<div className="flex flex-col items-center gap-2 relative py-2">

<div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -z-10 border-l border-dashed border-slate-300"></div>

<div className="w-full p-2.5 bg-white border border-slate-200 rounded-lg flex items-center justify-between shadow-sm group/item">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-slate-400"></div>
<span className="text-xs font-medium text-slate-600">New Platform &amp; Tools</span>
</div>
<i className="w-3 h-3 text-slate-400" data-lucide="user"></i>
</div>

<div className="w-full p-2.5 bg-gradient-to-r from-orange-500 to-red-500 border border-transparent rounded-lg flex items-center justify-between shadow-lg shadow-orange-500/20 transform scale-105">
<div className="flex items-center gap-2">
<i className="w-3 h-3 text-white fill-current" data-lucide="zap"></i>
<span className="text-xs font-medium text-white">Efficient Workflow</span>
</div>
<span className="text-[10px] text-orange-100 bg-white/20 px-1.5 py-0.5 rounded">Running</span>
</div>

<div className="w-full p-2.5 bg-white border border-slate-200 rounded-lg flex items-center justify-between shadow-sm opacity-80">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
<span className="text-xs font-medium text-slate-600">Promising Results</span>
</div>
<i className="w-3 h-3 text-emerald-500" data-lucide="check"></i>
</div>
</div>
</div>

<div className="absolute top-[10%] left-[5%] md:left-[35%] animate-bounce duration-[3000ms] delay-100 z-30">
<div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 shadow-xl flex items-center justify-center text-blue-500 rotate-[-12deg] hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="cloud"></i>
</div>
</div>
<div className="absolute bottom-[20%] right-[5%] md:right-[15%] animate-bounce duration-[4000ms] z-30">
<div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 shadow-xl flex items-center justify-center text-emerald-500 rotate-[12deg] hover:scale-110 transition-transform">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
</div>

<div className="absolute top-[40%] right-[10%] animate-pulse duration-[5000ms] hidden md:block">
<div className="w-3 h-3 bg-orange-400 rounded-full opacity-60"></div>
</div>
</div>
</div>
</main>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight mb-6">The Operating System for Growth</h2>
<p className="text-xl text-slate-500 max-w-2xl mx-auto">We don't just build websites; we architect the entire ecosystem that powers your business logic.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-100 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-slate-700" data-lucide="layout"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">Modern Web &amp; Design</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                    High-performance frontends that convert. We create clean, neo-brutalist or minimal designs that reflect authority and speed.
                </p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-3 text-sm font-medium text-slate-600">
<i className="w-4 h-4 text-orange-500" data-lucide="check-circle-2"></i> Responsive Design
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-600">
<i className="w-4 h-4 text-orange-500" data-lucide="check-circle-2"></i> Stores, Blogs, News and more
                    </li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/40 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-red-500"></div>
<div className="w-12 h-12 bg-orange-50 rounded-xl border border-orange-100 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-orange-600" data-lucide="container"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">Infrastructure Core</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                    The backbone of your operations. We handle the webhosting, drive integration, and security layers so you don't have to.
                </p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-3 text-sm font-medium text-slate-600">
<i className="w-4 h-4 text-orange-500" data-lucide="check-circle-2"></i> Secure Cloud Hosting
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-600">
<i className="w-4 h-4 text-orange-500" data-lucide="check-circle-2"></i> Centralized Drive Systems
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-600">
<i className="w-4 h-4 text-orange-500" data-lucide="check-circle-2"></i> Enterprise-grade Emails
                    </li>
</ul>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-orange-100 hover:shadow-xl hover:shadow-orange-100/50 transition-all duration-300">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-slate-700" data-lucide="git-merge"></i>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-3">Process Automation</h3>
<p className="text-lg text-slate-500 leading-relaxed">
                    Eliminate bottlenecks. We map out your business logic and implement automated flows for passkeys, onboarding, and data.
                </p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-3 text-sm font-medium text-slate-600">
<i className="w-4 h-4 text-orange-500" data-lucide="check-circle-2"></i> Seamless Passkey Integration
                    </li>
<li className="flex items-center gap-3 text-sm font-medium text-slate-600">
<i className="w-4 h-4 text-orange-500" data-lucide="check-circle-2"></i> Automated Workflows
                    </li>
</ul>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-slate-50/50 py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-10">
<div className="max-w-md">
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Connects with everything.</h3>
<p className="text-lg text-slate-500">We build your platform to play nice with the tools you already love. From payment gateways to CRM.</p>
<a className="inline-flex items-center gap-2 text-orange-600 font-medium mt-6 hover:gap-3 transition-all" href="#">
                        View all integrations <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-4 gap-4 md:gap-6 opacity-80">

<div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center"><i className="w-8 h-8 text-slate-700" data-lucide="slack"></i></div>
<div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center"><i className="w-8 h-8 text-slate-700" data-lucide="github"></i></div>
<div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center"><i className="w-8 h-8 text-slate-700" data-lucide="figma"></i></div>
<div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center"><i className="w-8 h-8 text-slate-700" data-lucide="mail"></i></div>
<div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center"><i className="w-8 h-8 text-slate-700" data-lucide="credit-card"></i></div>
<div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center"><i className="w-8 h-8 text-slate-700" data-lucide="database"></i></div>
<div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center"><i className="w-8 h-8 text-slate-700" data-lucide="cloud"></i></div>
<div className="w-16 h-16 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center justify-center text-xs font-bold text-slate-400">+20</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center">
<div className="max-w-3xl mx-auto">
<h2 className="text-4xl md:text-6xl font-semibold text-slate-900 tracking-tight mb-8">Ready to <span className="text-gradient">Ashcend</span>?</h2>
<p className="text-xl text-slate-500 mb-10">Stop building on shaky ground. Let us construct the efficient, automated, and secure platform your business deserves.</p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-4">
<button className="px-8 py-4 bg-slate-900 text-white text-lg font-medium rounded-full hover:bg-slate-800 transition-colors w-full sm:w-auto">
                    Get Started Now
                </button>
<button className="px-8 py-4 bg-white text-slate-700 border border-slate-200 text-lg font-medium rounded-full hover:bg-slate-50 transition-colors w-full sm:w-auto">
                    Talk to Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-slate-200 bg-slate-50 pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 mb-20">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 rounded bg-orange-600 flex items-center justify-center text-white">
<i className="w-3 h-3" data-lucide="flame"></i>
</div>
<span className="text-lg font-semibold text-slate-900">Ashcend</span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">Ashcending from ashes. Building the digital infrastructure for tomorrow's leading companies.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-orange-600" href="#">Infrastructure</a></li>
<li><a className="hover:text-orange-600" href="#">Web Design</a></li>
<li><a className="hover:text-orange-600" href="#">Process Flow</a></li>
<li><a className="hover:text-orange-600" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-orange-600" href="#">About</a></li>
<li><a className="hover:text-orange-600" href="#">Customers</a></li>
<li><a className="hover:text-orange-600" href="#">Careers</a></li>
<li><a className="hover:text-orange-600" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-orange-600" href="#">Blog</a></li>
<li><a className="hover:text-orange-600" href="#">Help Center</a></li>
<li><a className="hover:text-orange-600" href="#">System Status</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 border-t border-slate-200 pt-8">
<p>© 2025 Ashcend. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-600" href="#">Privacy</a>
<a className="hover:text-slate-600" href="#">Terms</a>
<div className="flex gap-4 ml-4">
<i className="w-4 h-4 cursor-pointer hover:text-slate-600" data-lucide="twitter"></i>
<i className="w-4 h-4 cursor-pointer hover:text-slate-600" data-lucide="linkedin"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
