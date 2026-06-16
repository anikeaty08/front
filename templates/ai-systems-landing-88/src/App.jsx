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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none z-[-1]"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none z-[-1]"></div>
<div className="fixed top-[40%] left-[50%] transform -translate-x-1/2 w-[40%] h-[40%] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none z-[-1]"></div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-2xl bg-black/20 border-b border-white/[0.03] transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-1" href="#">
<span className="text-white tracking-tighter font-medium text-lg">25eight</span>
<span className="text-indigo-400 tracking-tighter font-medium text-lg">.ai</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
<a className="hover:text-white transition-colors" href="#manifesto">Manifesto</a>
<a className="hover:text-white transition-colors" href="#system">System</a>
<a className="hover:text-white transition-colors" href="#pipeline">Pipeline</a>
<a className="hover:text-white transition-colors" href="#demo">Demo</a>
</div>
<a className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm transition-all hover:glow-effect backdrop-blur-md" href="#cta">
                Book a Demo
            </a>
</div>
</nav>

<section className="relative pt-40 pb-32 px-6 flex flex-col items-center justify-center min-h-screen text-center z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/5 border border-indigo-500/20 text-indigo-300 text-xs font-medium mb-8 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_10px_rgba(129,140,248,1)]"></span>
            System Architecture Protocol Active
        </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-zinc-600 max-w-5xl mx-auto leading-[1.05] mb-6 glow-text">
            Install The AI Layer For Your Business
        </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto mb-4 leading-relaxed font-light">
            25eight engineers custom AI systems that capture opportunities, respond instantly, and convert more customers automatically.
        </p>
<p className="text-sm md:text-base text-indigo-300/80 max-w-xl mx-auto mb-10 font-medium tracking-wide">
            We don't sell tools. We engineer intelligent systems for modern businesses.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<a className="px-8 py-3.5 rounded-full bg-zinc-100 text-black text-sm font-medium hover:bg-white transition-colors shadow-[0_0_40px_-5px_rgba(255,255,255,0.4)]" href="#cta">
                Book a Demo
            </a>
<a className="px-8 py-3.5 rounded-full bg-white/[0.02] border border-white/10 text-white text-sm font-medium hover:bg-white/[0.05] backdrop-blur-md transition-colors flex items-center gap-2" href="#system">
<iconify-icon className="text-lg" icon="solar:cpu-linear"></iconify-icon>
                Explore Architecture
            </a>
</div>

<div className="w-full max-w-5xl mx-auto mt-24 relative perspective-1000">
<div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent z-10 rounded-2xl"></div>
<div className="relative bg-black/20 backdrop-blur-3xl border border-white/10 rounded-2xl p-6 shadow-[0_0_80px_-20px_rgba(79,70,229,0.2)] overflow-hidden group">

<div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-800"></div>
</div>
<div className="text-xs text-indigo-400/50 font-mono tracking-widest flex items-center gap-2">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
                        SYS_CORE // SECURE
                    </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-0">

<div className="col-span-1 md:col-span-2 bg-white/[0.02] rounded-xl border border-white/5 p-5 h-64 flex flex-col justify-between relative overflow-hidden group/panel transition-all hover:bg-white/[0.04]">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-2xl rounded-full transition-all group-hover/panel:bg-indigo-500/20"></div>
<div>
<div className="text-xs text-zinc-500 mb-1 font-medium tracking-wide">Autonomous Conversion Rate</div>
<div className="text-3xl font-medium tracking-tight text-white flex items-baseline gap-2">
                                94.2%
                                <span className="text-xs text-emerald-400 font-mono">+12.4%</span>
</div>
</div>
<div className="flex items-end gap-2 h-24 mt-4">

<div className="w-full bg-indigo-500/20 rounded-t-sm h-[30%] relative group/bar overflow-hidden"><div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity"></div></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[45%] relative group/bar overflow-hidden"><div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity"></div></div>
<div className="w-full bg-indigo-500/20 rounded-t-sm h-[25%] relative group/bar overflow-hidden"><div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity"></div></div>
<div className="w-full bg-indigo-500/30 rounded-t-sm h-[60%] relative group/bar overflow-hidden"><div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity"></div></div>
<div className="w-full bg-indigo-500/40 rounded-t-sm h-[40%] relative group/bar overflow-hidden"><div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity"></div></div>
<div className="w-full bg-indigo-500/60 rounded-t-sm h-[80%] relative group/bar overflow-hidden shadow-[0_0_15px_rgba(99,102,241,0.5)]"><div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover/bar:opacity-100 transition-opacity"></div></div>
<div className="w-full bg-indigo-500/80 rounded-t-sm h-[95%] relative group/bar overflow-hidden shadow-[0_0_25px_rgba(99,102,241,0.8)]"><div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent"></div></div>
</div>
</div>

<div className="col-span-1 bg-white/[0.02] rounded-xl border border-white/5 p-5 h-64 flex flex-col relative overflow-hidden transition-all hover:bg-white/[0.04]">
<div className="text-xs text-zinc-500 mb-4 flex justify-between items-center font-medium">
<span>Live Intelligence Feed</span>
<span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_rgba(129,140,248,0.8)]"></span> SYNCING</span>
</div>
<div className="flex-1 overflow-hidden flex flex-col gap-3">
<div className="flex items-start gap-3 opacity-100 transform translate-y-0 transition-all duration-500">
<div className="p-1.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 rounded-md"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon></div>
<div>
<div className="text-xs text-zinc-200">Missed call intercepted</div>
<div className="text-[10px] text-zinc-500 font-mono mt-0.5">0.2s response time</div>
</div>
</div>
<div className="flex items-start gap-3 opacity-70">
<div className="p-1.5 bg-violet-500/10 text-violet-400 border border-violet-500/20 rounded-md"><iconify-icon icon="solar:calendar-linear"></iconify-icon></div>
<div>
<div className="text-xs text-zinc-200">Appointment scheduled</div>
<div className="text-[10px] text-zinc-500 font-mono mt-0.5">via NLP Engine</div>
</div>
</div>
<div className="flex items-start gap-3 opacity-40">
<div className="p-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-md"><iconify-icon icon="solar:database-linear"></iconify-icon></div>
<div>
<div className="text-xs text-zinc-200">CRM Data updated</div>
<div className="text-[10px] text-zinc-500 font-mono mt-0.5">Auto-categorized</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-[2px]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-y border-white/[0.02] bg-[#030303] overflow-hidden" id="manifesto">

<div className="absolute inset-0 opacity-20 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, #4f46e5 1px, transparent 1px), linear-gradient(to bottom, #4f46e5 1px, transparent 1px)', backgroundSize: '100px 100px', maskImage: 'radial-gradient(circle at center, black, transparent 70%)'}}></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-8">
                The Future Of Business Is Intelligent
            </h2>
<div className="max-w-3xl mx-auto space-y-6 text-base md:text-lg text-zinc-400 font-light leading-relaxed">
<p>
                    Right now, your business is leaking revenue. It happens in the margins—the missed call while you're with a client, the web inquiry that waits three hours for an email reply, the lead that goes cold because nobody followed up a fifth time.
                </p>
<p>
                    Human latency is the single greatest bottleneck to scaling. The modern consumer expects immediate answers, flawless booking, and persistent follow-through. They don't wait.
                </p>
<p className="text-indigo-200 font-medium">
                    We eliminate human latency by installing AI infrastructure that works relentlessly in the background. It is the end of lost opportunities.
                </p>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="problem">
<div className="max-w-7xl mx-auto">
<div className="max-w-3xl mx-auto text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                    Most Businesses Lose Revenue Between The Click And The Conversation
                </h2>
<p className="text-base text-zinc-400 font-light">
                    Traffic and leads mean nothing if your internal systems can't handle them instantly.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white/[0.02] backdrop-blur-lg border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] transition-all group">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 mb-6 border border-red-500/20 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(239,68,68,0.1)]">
<iconify-icon className="text-xl" icon="solar:phone-cancel-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Missed Calls</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">62% of calls to small businesses go unanswered. Each missed call is a potential competitor gaining a client.</p>
</div>

<div className="bg-white/[0.02] backdrop-blur-lg border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] transition-all group">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 border border-orange-500/20 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(249,115,22,0.1)]">
<iconify-icon className="text-xl" icon="solar:hourglass-line-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Slow Responses</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">If you don't respond within 5 minutes, your chance of converting a lead drops by 400%.</p>
</div>

<div className="bg-white/[0.02] backdrop-blur-lg border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] transition-all group">
<div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 mb-6 border border-yellow-500/20 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(234,179,8,0.1)]">
<iconify-icon className="text-xl" icon="solar:history-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">No Follow-Up</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">80% of sales require 5 follow-ups. Most teams give up after 1 or 2, leaving money on the table.</p>
</div>

<div className="bg-white/[0.02] backdrop-blur-lg border border-white/[0.05] rounded-2xl p-8 hover:bg-white/[0.04] transition-all group">
<div className="w-10 h-10 rounded-lg bg-zinc-500/10 flex items-center justify-center text-zinc-400 mb-6 border border-zinc-500/20 group-hover:scale-105 transition-transform shadow-[0_0_15px_rgba(161,161,170,0.1)]">
<iconify-icon className="text-xl" icon="solar:link-broken-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Broken Booking</h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed">Friction in scheduling creates drop-off. If a customer can't book instantly, they won't book at all.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-t border-white/[0.02] overflow-hidden">
<div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-[600px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                    No Templates. <br/>
                    No Cookie-Cutter <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">Automation.</span>
</h2>
<p className="text-base text-zinc-400 font-light leading-relaxed mb-8">
                    Off-the-shelf software tools force your business to adapt to them. We do the opposite. Our engineering team audits your existing workflows, identifies the leakage points, and custom-builds an AI system that wraps flawlessly around your unique operational model.
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-1 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="text-sm font-medium text-zinc-200 block">Bespoke Prompt Engineering</span>
<span className="text-xs text-zinc-500 font-light">Trained exclusively on your business data and brand voice.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-1 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="text-sm font-medium text-zinc-200 block">Seamless Integrations</span>
<span className="text-xs text-zinc-500 font-light">Connects directly into your existing CRM, calendar, and billing software.</span>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-indigo-400 mt-1 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<div>
<span className="text-sm font-medium text-zinc-200 block">Continuous Optimization</span>
<span className="text-xs text-zinc-500 font-light">The system learns and improves from every interaction it handles.</span>
</div>
</li>
</ul>
</div>

<div className="relative h-[400px] bg-black/40 backdrop-blur-2xl border border-white/5 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 flex flex-col items-center gap-6 w-full px-8">
<div className="w-full flex justify-between items-center text-[10px] text-zinc-500 font-mono mb-2">
<span>DATA_INGESTION</span>
<span>PROCESSING_CORE</span>
<span>EXECUTION_LAYER</span>
</div>

<div className="flex items-center justify-between w-full relative">

<div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/10 -z-10 transform -translate-y-1/2"></div>
<div className="absolute left-0 right-0 top-1/2 h-[1px] bg-indigo-500/50 -z-10 transform -translate-y-1/2 animate-data-flow" style={{background: 'linear-gradient(90deg, transparent, #6366f1, transparent)', backgroundSize: '50% 100%'}}></div>
<div className="w-16 h-16 rounded-xl bg-[#030303] border border-white/10 flex items-center justify-center text-zinc-400 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-2xl" icon="solar:database-linear"></iconify-icon>
</div>
<div className="w-20 h-20 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.2)] backdrop-blur-md relative">
<div className="absolute inset-0 border border-indigo-500/50 rounded-xl animate-ping opacity-20"></div>
<iconify-icon className="text-3xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="w-16 h-16 rounded-xl bg-[#030303] border border-white/10 flex items-center justify-center text-zinc-400 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<iconify-icon className="text-2xl" icon="solar:rocket-linear"></iconify-icon>
</div>
</div>
<div className="mt-4 p-3 rounded-lg bg-black/60 border border-white/5 w-full text-xs font-mono text-indigo-300 overflow-hidden">
<span className="opacity-50">&gt;</span> Initializing custom neural pathways...<br/>
<span className="opacity-50">&gt;</span> Syncing client API endpoints... [OK]<br/>
<span className="opacity-50 animate-pulse">&gt; System ready.</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative bg-gradient-to-b from-[#030303] via-indigo-950/5 to-[#030303] border-y border-white/[0.02]" id="pipeline">
<div className="max-w-7xl mx-auto text-center mb-20">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                The Autonomous Pipeline
            </h2>
<p className="text-base text-zinc-400 font-light max-w-2xl mx-auto">
                How our custom systems capture, process, and convert inbound traffic without human intervention.
            </p>
</div>
<div className="max-w-6xl mx-auto relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-[1px] bg-white/5 transform -translate-y-1/2"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-[#080808] border border-white/10 flex items-center justify-center mb-6 shadow-xl relative group transition-all hover:border-indigo-500/30">
<div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:flex text-zinc-600">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<iconify-icon className="text-2xl text-zinc-300" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-white mb-2 tracking-tight">1. Traffic Ingestion</h4>
<p className="text-xs text-zinc-500 font-light px-4">Leads arrive via calls, web forms, SMS, or social channels 24/7.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(99,102,241,0.15)] relative backdrop-blur-md transition-all hover:border-indigo-500/50">
<div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:flex text-zinc-600">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<iconify-icon className="text-2xl text-indigo-400" icon="solar:cpu-bold-duotone"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-white mb-2 tracking-tight">2. AI Processing</h4>
<p className="text-xs text-zinc-500 font-light px-4">The AI instantly analyzes intent, answers questions, and qualifies the lead.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-[#080808] border border-white/10 flex items-center justify-center mb-6 shadow-xl relative transition-all hover:border-violet-500/30">
<div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden md:flex text-zinc-600">
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
</div>
<iconify-icon className="text-2xl text-zinc-300" icon="solar:calendar-mark-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-white mb-2 tracking-tight">3. Action &amp; Booking</h4>
<p className="text-xs text-zinc-500 font-light px-4">Appointments are negotiated and written directly into your calendar.</p>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(16,185,129,0.1)] relative transition-all hover:border-emerald-500/40">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-white mb-2 tracking-tight">4. Revenue Realized</h4>
<p className="text-xs text-zinc-500 font-light px-4">Your staff arrives to a schedule full of qualified, ready-to-buy clients.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="system">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 inline-block">
                    The 25Eight AI System
                </h2>
<p className="text-base text-zinc-400 max-w-2xl mx-auto font-light">
                    Modular AI infrastructure engineered to seamlessly capture, intelligently respond to, and automatically convert every opportunity into revenue.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


<div className="group relative overflow-hidden bg-white/[0.015] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.03] hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] cursor-default">
<div className="mb-6 flex justify-between items-start">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-3">AI Reception</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Voice AI agents that answer inbound calls instantly, resolve inquiries, route calls, and collect prospect information 24/7 without placing anyone on hold.
                    </p>
</div>

<div className="group relative overflow-hidden bg-white/[0.015] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.03] hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] cursor-default">
<div className="mb-6 flex justify-between items-start">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<iconify-icon className="text-2xl" icon="solar:global-linear"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-3">AI Websites</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Dynamic, conversion-optimized web presences built to serve as high-performance endpoints for your traffic, integrating deeply with your AI backend.
                    </p>
</div>

<div className="group relative overflow-hidden bg-white/[0.015] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.03] hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] cursor-default">
<div className="mb-6 flex justify-between items-start">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<iconify-icon className="text-2xl" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-3">AI Chatbots</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Smart text-based agents trained on your specific business knowledge to instantly engage website visitors and qualify leads through natural conversation.
                    </p>
</div>

<div className="group relative overflow-hidden bg-white/[0.015] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.03] hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] cursor-default">
<div className="mb-6 flex justify-between items-start">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<iconify-icon className="text-2xl" icon="solar:magnet-linear"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-3">AI Lead Capture</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Intelligent forms and data ingestion points that identify anonymous traffic, validate contact info in real-time, and trigger immediate workflows.
                    </p>
</div>

<div className="group relative overflow-hidden bg-white/[0.015] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.03] hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] cursor-default">
<div className="mb-6 flex justify-between items-start">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<iconify-icon className="text-2xl" icon="solar:history-2-linear"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-3">AI Follow-Up</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Omnichannel sequences (SMS, Email, Voice) that persist until a response is generated, dynamically adjusting tone and timing based on behavior.
                    </p>
</div>

<div className="group relative overflow-hidden bg-white/[0.015] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.03] hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] cursor-default">
<div className="mb-6 flex justify-between items-start">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<iconify-icon className="text-2xl" icon="solar:calendar-linear"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-3">AI Booking Systems</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Frictionless calendar integration allowing the AI to negotiate times, handle timezones, and lock in appointments directly onto your schedule.
                    </p>
</div>

<div className="group relative overflow-hidden bg-white/[0.015] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.03] hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] cursor-default">
<div className="mb-6 flex justify-between items-start">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<iconify-icon className="text-2xl" icon="solar:call-dropped-linear"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-3">Missed Call Recovery</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Instant automated SMS dispatch the second a call goes unanswered, turning a lost lead into an active text conversation.
                    </p>
</div>

<div className="group relative overflow-hidden bg-white/[0.015] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.03] hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] cursor-default">
<div className="mb-6 flex justify-between items-start">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<iconify-icon className="text-2xl" icon="solar:star-linear"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-3">Review Automation</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        Intelligent sentiment analysis that requests reviews from happy customers while routing negative feedback to management privately.
                    </p>
</div>

<div className="group relative overflow-hidden bg-white/[0.015] backdrop-blur-xl border border-white/[0.05] rounded-2xl p-8 transition-all duration-500 hover:bg-white/[0.03] hover:border-indigo-500/30 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)] cursor-default">
<div className="mb-6 flex justify-between items-start">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
<iconify-icon className="text-2xl" icon="solar:server-square-linear"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold tracking-tight text-zinc-100 mb-3">AI CRM Automation</h3>
<p className="text-sm text-zinc-400 font-light leading-relaxed">
                        The central brain that logs every interaction, updates lead stages, alerts human staff, and maintains perfect data hygiene autonomously.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-y border-white/[0.02] bg-gradient-to-b from-[#030303] to-[#08080c]" id="demo">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
<div className="w-[800px] h-[800px] border border-white/[0.01] rounded-full absolute mix-blend-screen"></div>
<div className="w-[600px] h-[600px] border border-white/[0.02] rounded-full absolute mix-blend-screen animate-pulse-slow"></div>
<div className="w-[400px] h-[400px] border border-indigo-500/5 rounded-full absolute mix-blend-screen"></div>
</div>
<div className="max-w-3xl mx-auto relative z-10">
<div className="text-center mb-12">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-zinc-300 text-xs font-medium mb-6 backdrop-blur-sm">
<iconify-icon className="text-indigo-400" icon="solar:code-scan-linear"></iconify-icon>
                    Interactive Protocol
                </div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
                    Test The System
                </h2>
<p className="text-sm md:text-base text-zinc-400 font-light">
                    Initiate a live test. Enter your number below and our AI Receptionist will call you within seconds to demonstrate its conversational capability.
                </p>
</div>
<div className="p-[1px] rounded-2xl bg-gradient-to-b from-indigo-500/20 to-white/5 max-w-lg mx-auto shadow-[0_0_60px_-15px_rgba(99,102,241,0.2)]">
<div className="bg-[#050505] rounded-2xl p-6 md:p-8 backdrop-blur-2xl flex flex-col gap-5">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
<iconify-icon className="text-indigo-400" icon="solar:terminal-linear"></iconify-icon>
</div>
<div className="text-sm font-medium text-zinc-200 tracking-wide">Terminal Access</div>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
<iconify-icon className="text-zinc-500" icon="solar:phone-linear"></iconify-icon>
</div>
<input className="w-full bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-sm rounded-lg pl-11 pr-4 py-3.5 focus:outline-none focus:border-indigo-500 focus:bg-white/[0.05] transition-all font-mono" placeholder="+1 (555) 000-0000" type="tel"/>
</div>
<button className="w-full py-3.5 rounded-lg bg-white text-black text-sm font-medium transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-zinc-200 flex justify-center items-center gap-2">
                        Initialize Call
                        <iconify-icon icon="solar:outgoing-call-linear"></iconify-icon>
</button>
<p className="text-[10px] text-zinc-600 text-center mt-1 uppercase tracking-widest font-mono">Standard data rates may apply</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/3">
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Engineered For Service</h3>
<p className="text-sm text-zinc-400 font-light mb-6">The 25Eight framework adapts to high-volume, appointment-driven businesses requiring flawless communication logistics.</p>
<div className="h-[1px] w-12 bg-indigo-500/50"></div>
</div>
<div className="md:w-2/3 w-full">
<div className="flex flex-wrap gap-3 justify-start md:justify-end">
<div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-md text-sm text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all cursor-default">Service Businesses</div>
<div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-md text-sm text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all cursor-default">Clinics &amp; Healthcare</div>
<div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-md text-sm text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all cursor-default">Law Firms</div>
<div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-md text-sm text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all cursor-default">Agencies</div>
<div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.01] backdrop-blur-md text-sm text-zinc-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all cursor-default">Med Spas</div>
<div className="px-5 py-2.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-indigo-300 shadow-[0_0_15px_rgba(99,102,241,0.1)] backdrop-blur-md cursor-default">Local Businesses</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-t border-white/[0.02]">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="relative pl-6 border-l border-indigo-500/30">
<div className="absolute left-[-1px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-indigo-500 to-transparent"></div>
<div className="text-4xl font-semibold text-white mb-2 tracking-tight font-mono">24/7</div>
<div className="text-sm font-medium text-indigo-300 mb-1">Response Coverage</div>
<p className="text-xs text-zinc-500 font-light">Never sleep, never take a day off. Complete availability.</p>
</div>

<div className="relative pl-6 border-l border-white/10">
<div className="text-4xl font-semibold text-white mb-2 tracking-tight font-mono">&lt; 2s</div>
<div className="text-sm font-medium text-zinc-300 mb-1">Lead Conversion Speed</div>
<p className="text-xs text-zinc-500 font-light">Instantly engage before they click on a competitor.</p>
</div>

<div className="relative pl-6 border-l border-white/10">
<div className="text-4xl font-semibold text-white mb-2 tracking-tight font-mono">100%</div>
<div className="text-sm font-medium text-zinc-300 mb-1">Automated Follow-up</div>
<p className="text-xs text-zinc-500 font-light">Persistent contact sequences executing flawlessly.</p>
</div>

<div className="relative pl-6 border-l border-white/10">
<div className="text-4xl font-semibold text-white mb-2 tracking-tight font-mono">0%</div>
<div className="text-sm font-medium text-zinc-300 mb-1">Missed Opportunities</div>
<p className="text-xs text-zinc-500 font-light">Capture every single interaction and route it properly.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="cta">

<div className="absolute inset-0 bg-indigo-900/5"></div>
<div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6 glow-text">
                Stop Losing Conversations
            </h2>
<p className="text-lg text-zinc-400 font-light mb-10 max-w-xl mx-auto">
                Install an intelligent AI system that captures every opportunity, works continuously, and scales with your ambition.
            </p>
<button className="px-10 py-4 rounded-full bg-white text-black text-base font-medium hover:bg-zinc-200 transition-all shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] flex items-center gap-2 mx-auto">
                Book a Demo
                <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="text-xs text-indigo-400/50 mt-6 font-mono tracking-widest">SECURE ALL ENDPOINTS // DEPLOYMENT READY</p>
</div>
</section>

<footer className="border-t border-white/[0.02] bg-[#030303] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start">
<a className="flex items-center gap-1 mb-2" href="#">
<span className="text-white tracking-tighter font-medium text-xl">25eight</span>
<span className="text-indigo-400 tracking-tighter font-medium text-xl">.ai</span>
</a>
<p className="text-xs text-zinc-500 font-light">We engineer intelligent systems for modern businesses.</p>
</div>
<div className="flex items-center gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:map-point-linear"></iconify-icon></a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/[0.02] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-zinc-600">
<p>© 2024 25eight.ai. All systems operational.</p>
<div className="flex gap-4">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
