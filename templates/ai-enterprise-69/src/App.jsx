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
      

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/10 rounded-[100%] blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-[#020403]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="group flex items-center gap-2.5" href="#">
<div className="w-6 h-6 bg-gradient-to-tr from-emerald-500 to-emerald-600 rounded flex items-center justify-center shadow-[0_0_12px_rgba(16,185,129,0.4)]">
<div className="w-2 h-2 bg-[#020403] rounded-full"></div>
</div>
<span className="font-medium tracking-tight text-white text-sm">Cepal AI</span>
</a>
<div className="hidden md:flex items-center gap-6 text-[13px] font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#demo">Live Demo</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
</div>
<div className="flex items-center gap-3">
<a className="group relative px-4 py-1.5 rounded-full bg-white text-black text-[13px] font-semibold transition-all hover:bg-slate-200 overflow-hidden" href="#pricing">
<span className="relative z-10 flex items-center gap-1">Start Free</span>
</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center z-10 relative">
<div className="mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    V2.0 LIVE: LOCAL STORAGE PRIVACY
                </div>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[0.95] max-w-5xl">
                Your AI Business Consultant <br/>
<span className="text-slate-500">Built for Founders &amp; Creators.</span>
</h1>
<p className="text-base md:text-lg text-slate-400 max-w-xl mx-auto mb-10 font-light leading-relaxed tracking-wide">
                The private AI business advisor that runs on local storage. Get strategy, analysis, and execution plans without compromising data privacy.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-20 w-full justify-center">
<button className="h-10 px-8 rounded-full bg-[#10b981] text-[#020403] font-semibold text-[13px] hover:bg-[#34d399] transition-all shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] flex items-center gap-2">
                    Start Free
                    <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="h-10 px-8 rounded-full bg-white/[0.05] border border-white/[0.08] text-white font-medium text-[13px] flex items-center gap-2 hover:bg-white/[0.08] transition-colors group">
<iconify-icon className="text-lg text-slate-400 group-hover:text-emerald-400 transition-colors" icon="solar:play-circle-linear"></iconify-icon>
                    Watch Demo
                </button>
</div>
</div>

<div className="absolute top-1/2 left-0 w-full h-[500px] bg-gradient-to-b from-transparent via-emerald-900/5 to-transparent -skew-y-3 pointer-events-none"></div>
</main>

<section className="py-20 border-t border-white/[0.04] bg-[#020403]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Running a Business Is Harder Than It Should Be</h2>
<p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">Imagine having a business strategist available 24/7 without the $500/hr price tag.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="p-6 rounded-2xl border border-red-500/10 bg-red-500/[0.02] hover:bg-red-500/[0.05] transition-colors">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 mb-4">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2">No Clear Strategy</h3>
<p className="text-xs text-slate-400 leading-relaxed">Founders often get stuck in the weeds, missing the high-level roadmap.</p>
</div>

<div className="p-6 rounded-2xl border border-orange-500/10 bg-orange-500/[0.02] hover:bg-orange-500/[0.05] transition-colors">
<div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-400 mb-4">
<iconify-icon className="text-xl" icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2">Too Many Tools</h3>
<p className="text-xs text-slate-400 leading-relaxed">Drowning in disconnected SaaS subscriptions that don't talk to each other.</p>
</div>

<div className="p-6 rounded-2xl border border-blue-500/10 bg-blue-500/[0.02] hover:bg-blue-500/[0.05] transition-colors">
<div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
<iconify-icon className="text-xl" icon="solar:shield-warning-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2">Data Privacy Risks</h3>
<p className="text-xs text-slate-400 leading-relaxed">Putting sensitive IP into public cloud AI models is a major security risk.</p>
</div>

<div className="p-6 rounded-2xl border border-purple-500/10 bg-purple-500/[0.02] hover:bg-purple-500/[0.05] transition-colors">
<div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4">
<iconify-icon className="text-xl" icon="solar:tag-price-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2">Expensive Experts</h3>
<p className="text-xs text-slate-400 leading-relaxed">Consultants drain runway before you've even found product-market fit.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">The Solution</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">Your Full-Stack Growth Engine</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
<div className="h-10 w-10 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-400 mb-4 border border-emerald-500/20">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2">Strategy Generator</h3>
<p className="text-xs text-slate-400">Turn vague ideas into actionable execution plans instantly.</p>
</div>

<div className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
<div className="h-10 w-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4 border border-blue-500/20">
<iconify-icon className="text-xl" icon="solar:magnifer-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2">Website Analyzer</h3>
<p className="text-xs text-slate-400">Deep dive audits on your landing pages to boost conversion.</p>
</div>

<div className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
<div className="h-10 w-10 bg-purple-500/10 rounded-lg flex items-center justify-center text-purple-400 mb-4 border border-purple-500/20">
<iconify-icon className="text-xl" icon="solar:code-circle-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2">AI App Generator</h3>
<p className="text-xs text-slate-400">Spin up internal tools and micro-apps with natural language.</p>
</div>

<div className="glass-card p-6 rounded-2xl group hover:-translate-y-1 transition-transform duration-300">
<div className="h-10 w-10 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-400 mb-4 border border-amber-500/20">
<iconify-icon className="text-xl" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-white mb-2">Private Local Storage</h3>
<p className="text-xs text-slate-400">Your chat history and business data never leave your browser.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/[0.04]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white mb-12 text-center">Three Steps to Clarity</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent border-t border-dashed border-white/20"></div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white font-mono z-10 shadow-[0_0_20px_rgba(0,0,0,1)] mb-6">1</div>
<h3 className="text-sm font-semibold text-white mb-2">Sign Up Free</h3>
<p className="text-xs text-slate-400 max-w-[200px]">Create your secure account in seconds. No credit card required.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-mono z-10 shadow-[0_0_20px_rgba(16,185,129,0.2)] mb-6">2</div>
<h3 className="text-sm font-semibold text-white mb-2">Define Your Challenge</h3>
<p className="text-xs text-slate-400 max-w-[200px]">Tell Cepal about your bottleneck, idea, or growth target.</p>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-12 h-12 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center text-white font-mono z-10 shadow-[0_0_20px_rgba(0,0,0,1)] mb-6">3</div>
<h3 className="text-sm font-semibold text-white mb-2">Execute Roadmap</h3>
<p className="text-xs text-slate-400 max-w-[200px]">Get a step-by-step execution plan generated instantly.</p>
</div>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-white/[0.03] border border-white/[0.08] text-[10px] text-slate-400 uppercase tracking-widest mb-6">
<iconify-icon icon="solar:magic-stick-linear"></iconify-icon> Intelligent Core
                </div>
<h2 className="text-3xl md:text-4xl font-medium text-white mb-6 tracking-tight">Strategy that adapts to your unique context.</h2>
<div className="space-y-8">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
<iconify-icon icon="solar:brain-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">Context-Aware AI</h4>
<p className="text-slate-400 text-xs leading-relaxed">Cepal remembers your business details so you don't have to repeat yourself. It learns your brand voice and goals.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">High-Speed Processing</h4>
<p className="text-slate-400 text-xs leading-relaxed">Generate full marketing plans, SWOT analyses, and financial projections in under 30 seconds.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-400 shrink-0">
<iconify-icon icon="solar:palette-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-1">White-Label Ready</h4>
<p className="text-slate-400 text-xs leading-relaxed">Agencies can use Cepal to generate client deliverables that look professionally hand-crafted.</p>
</div>
</div>
</div>
</div>

<div className="relative perspective-1000 group">
<div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity"></div>
<div className="relative bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
</div>
<div className="p-6 font-mono text-xs">
<div className="flex gap-2 mb-4">
<span className="text-emerald-500">user:</span>
<span className="text-slate-300">Create a GTM strategy for a SaaS tool targeting freelance designers.</span>
</div>
<div className="flex gap-2">
<span className="text-blue-400">cepal:</span>
<div className="text-slate-400 space-y-2">
<p>Analyzing market segment: <span className="text-white">Freelance Designers</span>...</p>
<div className="p-3 bg-white/5 rounded border border-white/5 my-2">
<span className="text-emerald-400 block mb-1">// Phase 1: Awareness</span>
<ul className="list-disc list-inside pl-1 space-y-1 text-slate-500">
<li>Leverage Dribbble/Behance case studies</li>
<li>Partnerships with Figma community leaders</li>
<li>Content strategy: "Business of Design"</li>
</ul>
</div>
<p>Projected CAC: <span className="text-white">$45.00</span> | LTV: <span className="text-white">$850.00</span></p>
<span className="animate-pulse inline-block w-2 h-4 bg-emerald-500 align-middle"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gradient-to-b from-[#020403] to-[#050806] border-y border-white/[0.04]">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 text-emerald-400 mb-6 shadow-[0_0_40px_rgba(16,185,129,0.1)]">
<iconify-icon className="text-3xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h2 className="text-3xl font-medium text-white mb-6">Your Business Data Stays Yours.</h2>
<p className="text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                Unlike other AI tools that train on your data, Cepal utilizes advanced 
                <span className="text-white font-medium">Local Storage</span> technology. 
                Your chats, strategies, and sensitive metrics are stored directly in your browser, not on our servers.
            </p>
<div className="flex flex-wrap justify-center gap-4 text-xs font-medium text-slate-500">
<span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
<iconify-icon icon="solar:lock-password-linear"></iconify-icon> End-to-End Private
                </span>
<span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
<iconify-icon icon="solar:server-square-linear"></iconify-icon> No External Training
                </span>
<span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08]">
<iconify-icon icon="solar:user-hand-up-linear"></iconify-icon> Full Control
                </span>
</div>
</div>
</section>

<section className="py-16 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600 mb-8">Trusted by data-conscious founders</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 grayscale mix-blend-screen">
<div className="flex items-center gap-2 font-bold text-lg font-mono"><iconify-icon icon="solar:rocket-2-linear"></iconify-icon> LAUNCH</div>
<div className="flex items-center gap-2 font-bold text-lg font-mono"><iconify-icon icon="solar:figma-linear"></iconify-icon> STUDIO</div>
<div className="flex items-center gap-2 font-bold text-lg font-mono"><iconify-icon icon="solar:graph-new-linear"></iconify-icon> SCALE</div>
<div className="flex items-center gap-2 font-bold text-lg font-mono"><iconify-icon icon="solar:code-scan-linear"></iconify-icon> DEVCO</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.04]">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-medium text-white mb-12">Who is Cepal For?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-emerald-400 text-2xl mb-4" icon="solar:rocket-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">Startup Founders</h3>
<p className="text-xs text-slate-500">Validate MVPs and generate go-to-market strategies without hiring a CMO.</p>
</div>
<div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-purple-400 text-2xl mb-4" icon="solar:camera-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">Creators</h3>
<p className="text-xs text-slate-500">Plan digital product launches and content roadmaps tailored to your audience.</p>
</div>
<div className="p-6 rounded-2xl bg-[#0a0a0a] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-blue-400 text-2xl mb-4" icon="solar:case-minimalistic-linear"></iconify-icon>
<h3 className="text-white font-medium mb-2">Agencies</h3>
<p className="text-xs text-slate-500">White-label the output to provide deeper strategic value to your clients.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-center text-white mb-16">Simple, Private Pricing</h2>
<div className="grid md:grid-cols-3 gap-6 items-start">

<div className="glass-card p-8 rounded-2xl flex flex-col">
<h3 className="text-base font-medium text-white mb-2">Starter</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium text-white">$0</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-400 flex-1">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Basic Strategy Gen</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> 5 Projects</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Community Support</li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-white text-sm font-medium transition-colors text-center" href="#">Start Free</a>
</div>

<div className="p-8 rounded-2xl flex flex-col bg-[#0f1110] border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.15)] relative">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-[#020403] text-[10px] font-bold uppercase tracking-wider rounded-full">Most Popular</div>
<h3 className="text-base font-medium text-emerald-400 mb-2">Pro Founder</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium text-white">$29</span>
<span className="text-slate-500 text-sm">/mo</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-300 flex-1">
<li className="flex items-center gap-2 text-white"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Unlimited Strategy</li>
<li className="flex items-center gap-2 text-white"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Deep Website Analysis</li>
<li className="flex items-center gap-2 text-white"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> Priority Local Storage</li>
<li className="flex items-center gap-2 text-white"><iconify-icon className="text-emerald-500" icon="solar:check-circle-bold"></iconify-icon> App Generator Access</li>
</ul>
<a className="w-full py-2.5 rounded-lg bg-[#10b981] hover:bg-[#34d399] text-[#020403] text-sm font-semibold transition-colors text-center" href="#">Get Pro</a>
</div>

<div className="glass-card p-8 rounded-2xl flex flex-col">
<h3 className="text-base font-medium text-white mb-2">White-Label</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-medium text-white">Custom</span>
</div>
<ul className="space-y-3 mb-8 text-sm text-slate-400 flex-1">
<li className="flex items-center gap-2"><iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> Custom Branding</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> API Access</li>
<li className="flex items-center gap-2"><iconify-icon className="text-slate-500" icon="solar:check-circle-linear"></iconify-icon> Dedicated Support</li>
</ul>
<a className="w-full py-2.5 rounded-lg border border-white/10 hover:bg-white/5 text-white text-sm font-medium transition-colors text-center" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.04]" id="demo">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-10">
<h2 className="text-2xl font-medium text-white mb-4">Try Cepal Live</h2>
<p className="text-slate-400 text-sm">Interact with the assistant below. No login required for demo.</p>
</div>
<div className="w-full h-[650px] rounded-xl border border-white/10 bg-[#050505] shadow-2xl overflow-hidden relative">

<div className="h-10 border-b border-white/[0.06] bg-white/[0.02] flex items-center px-4 justify-between">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]"></div>
</div>
<div className="px-3 py-1 rounded bg-[#000] text-[10px] text-slate-500 font-mono">
                        https://cepal.ai/demo
                    </div>
<div className="w-4"></div>
</div>
<iframe className="w-full h-[calc(100%-40px)] border-none" src="https://cepalai.ct.ws/assistant.html" title="Cepal AI Demo"></iframe>
</div>
</div>
</section>

<section className="py-20 bg-[#030504]">
<div className="max-w-2xl mx-auto px-6 text-center">
<div className="w-16 h-16 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 mx-auto mb-6 flex items-center justify-center border border-white/10">
<iconify-icon className="text-2xl text-slate-400" icon="solar:user-bold"></iconify-icon>
</div>
<blockquote className="text-lg md:text-xl font-medium text-white mb-6 leading-relaxed">
                "I built Cepal because founders deserve intelligent tools without compromising privacy. You shouldn't have to trade your business secrets for better strategy."
            </blockquote>
<div className="flex flex-col items-center">
<span className="text-sm font-semibold text-white">Founder, Cepal AI</span>
<span className="text-xs text-slate-500 mt-1">Building for the future of private work</span>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-emerald-900/5"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-medium text-white mb-8 tracking-tight">Build Smarter. Decide Faster. <br/>Scale Confidently.</h2>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-[#10b981] text-[#020403] font-bold text-sm hover:bg-[#34d399] transition-all shadow-lg hover:shadow-emerald-500/25 w-full sm:w-auto">
                    Start Free Now
                </button>
<button className="h-12 px-8 rounded-full bg-transparent border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors w-full sm:w-auto">
                    Try Cepal
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/[0.04] bg-[#010201] pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2 text-white font-medium">
<div className="w-5 h-5 bg-gradient-to-tr from-emerald-500 to-emerald-600 rounded flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-[#020403] rounded-full"></div>
</div>
                    Cepal AI
                </div>
<div className="flex gap-6 text-xs text-slate-500">
<a className="hover:text-emerald-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Terms</a>
<a className="hover:text-emerald-400 transition-colors" href="#">Twitter</a>
</div>
<p className="text-[11px] text-slate-600">© 2024 Cepal Inc.</p>
</div>
</div>
</footer>

    </>
  );
}
