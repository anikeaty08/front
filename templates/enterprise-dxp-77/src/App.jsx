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

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">

<div className="w-8 h-8 bg-slate-950 flex items-center justify-center rounded-sm">
<span className="text-white font-semibold text-lg leading-none">A</span>
</div>
<div className="font-semibold tracking-tighter text-lg text-slate-900">
                    AURA<span className="text-slate-400">INSIGHTS</span>
</div>
</div>
<div className="flex items-center gap-8">
<a className="hidden md:block text-xs font-medium text-slate-500 hover:text-slate-900 uppercase tracking-widest transition-colors" href="#download">
                    Framework 2026
                </a>
<a className="bg-slate-950 text-white text-xs font-medium px-5 py-2.5 rounded-sm hover:bg-slate-800 transition-colors flex items-center gap-2" href="#download">
                    Get Report
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div className="order-2 lg:order-1">
<div className="mb-10">
<div className="inline-flex items-center gap-2 border border-slate-200 rounded-full px-3 py-1 mb-6 bg-slate-50">
<span className="w-2 h-2 rounded-full bg-slate-900"></span>
<span className="text-xs font-medium text-slate-600 uppercase tracking-wider">Enterprise Advisory Vol. 4</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tighter mb-8 leading-[1.05] text-balance">
                            Architecting the <br/> <span className="text-slate-400">Composable Future.</span>
</h1>
<p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg font-normal">
                            A decision framework for C-level executives navigating the transition from monolithic suites to AI-governed composable ecosystems.
                        </p>

<div className="bg-white p-1 rounded-lg border border-slate-100 shadow-2xl shadow-slate-200/50 max-w-md" id="download">
<form className="p-5 space-y-4">
<div>
<label className="block text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">Work Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-0 transition-colors placeholder:text-slate-400" placeholder="name@company.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<select className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-0 transition-colors appearance-none">
<option>Role...</option>
<option>C-Level</option>
<option>VP / Director</option>
<option>Architect</option>
</select>
</div>
<div>
<select className="w-full bg-slate-50 border border-slate-200 rounded-sm px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-slate-900 focus:ring-0 transition-colors appearance-none">
<option>Size...</option>
<option>100-500</option>
<option>500+</option>
<option>Enterprise</option>
</select>
</div>
</div>
<button className="group w-full bg-slate-900 text-white font-medium text-sm py-4 rounded-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-3 mt-2" type="button">
                                    Download Strategic Report
                                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</form>
</div>
<div className="mt-6 flex items-center gap-2 text-xs text-slate-400 font-medium">
<iconify-icon className="text-slate-900" icon="lucide:shield-check"></iconify-icon>
<span>Verified by Gartner, G2, and 50+ Enterprise Reviews</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2 relative">

<div className="absolute -inset-10 bg-slate-100 rounded-[3rem] rotate-3 -z-10"></div>
<div className="relative group perspective-1000 w-full max-w-sm mx-auto shadow-2xl shadow-slate-300">

<div className="relative aspect-[3/4] bg-slate-950 text-white p-8 flex flex-col justify-between transition-transform duration-700 group-hover:rotate-y-2 group-hover:scale-[1.02]">

<div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="relative z-10">
<div className="w-full h-px bg-white/20 mb-8"></div>
<div className="text-xs font-medium tracking-[0.2em] text-slate-400 mb-4 uppercase">Aura Insights</div>
<h2 className="text-4xl font-semibold tracking-tighter leading-none">
                                    State of<br/>DXP 2026
                                </h2>
</div>
<div className="relative z-10 space-y-6">
<div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
<iconify-icon icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex justify-between items-end border-t border-white/20 pt-6">
<div className="text-xs text-slate-400 leading-relaxed">
                                        Strategic Advisory<br/>
                                        For CIOs &amp; CDOs
                                    </div>
<div className="text-2xl font-semibold">V.04</div>
</div>
</div>
</div>

<div className="absolute top-2 left-2 w-full h-full bg-white border border-slate-200 -z-10"></div>
<div className="absolute top-4 left-4 w-full h-full bg-slate-50 border border-slate-200 -z-20"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800/40 via-slate-950 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter mb-8 text-white">
                        The Feature Matrix<br/>is Dead.
                    </h2>
<p className="text-lg text-slate-400 leading-relaxed max-w-md">
                        Traditional DXP comparisons fail to capture the reality of modern enterprise architecture. It's no longer "Headless vs. Monolith"—it's about orchestration, governance, and AI.
                    </p>
</div>
<div className="grid gap-8">
<div className="group border-l border-white/10 pl-8 hover:border-white transition-colors duration-500">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-400 group-hover:text-white transition-colors" icon="lucide:workflow" width="20"></iconify-icon>
<h3 className="text-xl font-medium text-white">Architectural Complexity</h3>
</div>
<p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">Integration costs now outweigh license costs by 3x.</p>
</div>
<div className="group border-l border-white/10 pl-8 hover:border-white transition-colors duration-500">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-400 group-hover:text-white transition-colors" icon="lucide:brain-circuit" width="20"></iconify-icon>
<h3 className="text-xl font-medium text-white">AI Maturity Gap</h3>
</div>
<p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">Most platforms are AI-wrapped, not AI-native.</p>
</div>
<div className="group border-l border-white/10 pl-8 hover:border-white transition-colors duration-500">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-slate-400 group-hover:text-white transition-colors" icon="lucide:hourglass" width="20"></iconify-icon>
<h3 className="text-xl font-medium text-white">Time-to-Value</h3>
</div>
<p className="text-sm text-slate-500 group-hover:text-slate-300 transition-colors">Average enterprise implementation now takes 14 months.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-b border-slate-200">
<div className="max-w-5xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12">

<div>
<div className="flex items-center gap-3 mb-8">
<span className="w-8 h-px bg-slate-900"></span>
<h3 className="text-sm font-semibold text-slate-900 uppercase tracking-widest">Report Utility</h3>
</div>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-slate-900 text-xs" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm text-slate-700 leading-relaxed"><strong className="text-slate-900 font-semibold">C-Level Executives</strong> assessing platform consolidation vs. best-of-breed strategies.</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-slate-900 text-xs" icon="lucide:check"></iconify-icon>
</div>
<span className="text-sm text-slate-700 leading-relaxed"><strong className="text-slate-900 font-semibold">Enterprise Architects</strong> designing high-scale, multi-region governance models.</span>
</li>
</ul>
</div>

<div>
<div className="flex items-center gap-3 mb-8">
<span className="w-8 h-px bg-slate-300"></span>
<h3 className="text-sm font-semibold text-slate-400 uppercase tracking-widest">Out of Scope</h3>
</div>
<ul className="space-y-6 opacity-60">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-slate-400 text-xs" icon="lucide:x"></iconify-icon>
</div>
<span className="text-sm text-slate-500 leading-relaxed">Marketing teams looking for simple page builders or brochureware sites.</span>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center shrink-0 mt-0.5">
<iconify-icon className="text-slate-400 text-xs" icon="lucide:x"></iconify-icon>
</div>
<span className="text-sm text-slate-500 leading-relaxed">Small businesses with annual digital budgets under $100k.</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 tracking-tighter">Inside the Report</h2>
<p className="text-slate-500 text-sm max-w-sm text-right md:text-left">Six chapters of dense, actionable intelligence derived from 120+ implementation audits.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100">

<div className="bg-white p-8 hover:bg-slate-50 transition-colors group">
<div className="text-slate-300 text-xs font-mono mb-6 group-hover:text-slate-900 transition-colors">01</div>
<h3 className="text-slate-900 font-semibold mb-3">The 2026 DXP Definition</h3>
<p className="text-xs text-slate-500 leading-relaxed">Redefining the category boundaries: where CMS ends and the Composition Layer begins.</p>
</div>

<div className="bg-white p-8 hover:bg-slate-50 transition-colors group">
<div className="text-slate-300 text-xs font-mono mb-6 group-hover:text-slate-900 transition-colors">02</div>
<h3 className="text-slate-900 font-semibold mb-3">AI Agents &amp; Governance</h3>
<p className="text-xs text-slate-500 leading-relaxed">How generative agents are replacing traditional workflow automation in enterprise pipelines.</p>
</div>

<div className="bg-white p-8 hover:bg-slate-50 transition-colors group">
<div className="text-slate-300 text-xs font-mono mb-6 group-hover:text-slate-900 transition-colors">03</div>
<h3 className="text-slate-900 font-semibold mb-3">The Ecosystem Matrix</h3>
<p className="text-xs text-slate-500 leading-relaxed">Mapping connectivity between commerce, search, personalization, and core content engines.</p>
</div>

<div className="bg-white p-8 hover:bg-slate-50 transition-colors group">
<div className="text-slate-300 text-xs font-mono mb-6 group-hover:text-slate-900 transition-colors">04</div>
<h3 className="text-slate-900 font-semibold mb-3">Vendor Analysis</h3>
<p className="text-xs text-slate-500 leading-relaxed">Critical, non-sponsored breakdown of platform philosophies, not just feature sets.</p>
</div>

<div className="bg-white p-8 hover:bg-slate-50 transition-colors group">
<div className="text-slate-300 text-xs font-mono mb-6 group-hover:text-slate-900 transition-colors">05</div>
<h3 className="text-slate-900 font-semibold mb-3">Industry Frameworks</h3>
<p className="text-xs text-slate-500 leading-relaxed">Specific architectural blueprints for Fintech, Healthcare, and Global Manufacturing.</p>
</div>

<div className="bg-white p-8 hover:bg-slate-50 transition-colors group">
<div className="text-slate-300 text-xs font-mono mb-6 group-hover:text-slate-900 transition-colors">06</div>
<h3 className="text-slate-900 font-semibold mb-3">Migration Risk Calc</h3>
<p className="text-xs text-slate-500 leading-relaxed">A mathematical model for calculating the true cost of replatforming in 2025/26.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-slate-300">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-block px-3 py-1 bg-white/5 rounded-full text-[10px] font-semibold tracking-widest uppercase text-white mb-6 border border-white/10">
                        Methodology
                    </div>
<h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">Zero Pay-to-Play.</h2>
<p className="text-sm text-slate-400 leading-relaxed mb-8">
                        This report utilizes a composite analysis framework derived from validated user reviews, technical documentation audits, and cross-referenced public financial data. Our goal is transparency, not vendor endorsement.
                    </p>
<div className="flex gap-8">
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white">50+</span>
<span className="text-xs text-slate-500 mt-1">Enterprise Reviews</span>
</div>
<div className="flex flex-col">
<span className="text-2xl font-semibold text-white">12</span>
<span className="text-xs text-slate-500 mt-1">Platforms Audited</span>
</div>
</div>
</div>
<div className="bg-slate-800/30 border border-white/5 p-8 rounded-sm">
<h3 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-6">Data Sources</h3>
<ul className="space-y-4">
<li className="flex items-center justify-between border-b border-white/5 pb-3">
<span className="text-sm text-white">Gartner Peer Insights</span>
<iconify-icon className="text-slate-600" icon="lucide:bar-chart-2"></iconify-icon>
</li>
<li className="flex items-center justify-between border-b border-white/5 pb-3">
<span className="text-sm text-white">G2 &amp; Capterra</span>
<iconify-icon className="text-slate-600" icon="lucide:message-square"></iconify-icon>
</li>
<li className="flex items-center justify-between border-b border-white/5 pb-3">
<span className="text-sm text-white">Technical Documentation</span>
<iconify-icon className="text-slate-600" icon="lucide:file-code"></iconify-icon>
</li>
<li className="flex items-center justify-between">
<span className="text-sm text-white">Customer Interviews</span>
<iconify-icon className="text-slate-600" icon="lucide:users"></iconify-icon>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs text-slate-400 mb-10 uppercase tracking-widest font-semibold">Platforms Analyzed</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-6">

<span className="text-lg font-semibold text-slate-300 hover:text-slate-900 transition-colors cursor-default">Adobe</span>
<span className="text-lg font-semibold text-slate-300 hover:text-slate-900 transition-colors cursor-default">Acquia</span>
<span className="text-lg font-semibold text-slate-300 hover:text-slate-900 transition-colors cursor-default">Contentful</span>
<span className="text-lg font-semibold text-slate-300 hover:text-slate-900 transition-colors cursor-default">Optimizely</span>
<span className="text-lg font-semibold text-slate-300 hover:text-slate-900 transition-colors cursor-default">Sitecore</span>
<span className="text-lg font-semibold text-slate-300 hover:text-slate-900 transition-colors cursor-default">Contentstack</span>
<span className="text-lg font-semibold text-slate-300 hover:text-slate-900 transition-colors cursor-default">Bloomreach</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Market Signals</h2>
</div>
<div className="space-y-12">
<div className="relative pl-8 border-l-2 border-slate-900">
<p className="text-xl md:text-2xl font-medium text-slate-900 leading-tight mb-3">
                        "The concept of the 'Single Source of Truth' has collapsed. In 2026, the competitive advantage lies in Federated Content Governance."
                    </p>
<span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Chapter 01: Architecture</span>
</div>
<div className="relative pl-8 border-l-2 border-slate-300">
<p className="text-xl md:text-2xl font-medium text-slate-500 leading-tight mb-3">
                        "Enterprises investing in 'All-in-One' suites today are incurring a 40% higher technical debt accrual rate than those adopting composable meshes."
                    </p>
<span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Chapter 03: TCO Analysis</span>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white relative overflow-hidden">
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl lg:text-6xl font-semibold text-slate-900 tracking-tighter mb-8 text-balance">
                Stop Guessing. <br/>Start Architecting.
            </h2>
<p className="text-slate-500 mb-12 text-lg max-w-xl mx-auto">
                Equip your team with the framework needed to make a defensible, future-proof DXP decision.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white text-sm font-semibold rounded-sm hover:bg-black transition-colors flex items-center justify-center gap-2 group shadow-xl shadow-slate-200" href="#download">
                    Download Report
                    <iconify-icon className="group-hover:translate-y-0.5 transition-transform" icon="lucide:arrow-down"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-10 py-4 bg-white border border-slate-200 text-slate-900 text-sm font-semibold rounded-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2" href="#">
                    Book a DXP Fit Session
                </a>
</div>
</div>
</section>

<footer className="py-12 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-slate-900 rounded-sm"></div>
<div className="text-xs font-medium text-slate-900">
                    © 2024 Aura Build.
                </div>
</div>
<div className="flex gap-8 text-xs font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Twitter</a>
<a className="hover:text-slate-900 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>

    </>
  );
}
