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
      

<nav className="fixed top-0 w-full border-b border-zinc-800/60 bg-zinc-950/70 backdrop-blur-xl z-50">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="font-semibold tracking-tighter text-lg flex items-center gap-2">
<div className="w-4 h-4 rounded-full bg-white"></div>
                AIAUTO.
            </div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-zinc-100 transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-zinc-100 transition-colors" href="#process">Process</a>
<a className="hover:text-zinc-100 transition-colors" href="#platform">Platform</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Sign In</a>
<button className="bg-white text-zinc-950 px-4 py-1.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors">Book Call</button>
</div>
</div>
</nav>
<main className="flex-grow pt-14">

<section className="relative pt-32 pb-24 px-6 overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/40 text-xs font-medium text-zinc-300 mb-8 hover:bg-zinc-800/60 transition-colors backdrop-blur-sm" href="#">
<iconify-icon className="text-indigo-400" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
                    Introducing AutoFlow Beta
                    <iconify-icon className="text-zinc-500 ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
                    Intelligence applied to <br className="hidden md:block"/> your operations.
                </h1>
<p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    We architect custom AI agents and automate complex workflows to save your team hundreds of hours. Scale faster with programmatic precision.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2 justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Start Automating
                    </button>
<button className="w-full sm:w-auto px-6 py-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-300 text-sm font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2 justify-center backdrop-blur-sm">
<iconify-icon icon="solar:play-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Watch Demo
                    </button>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-800/50 bg-zinc-900/10">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="text-xs text-zinc-500 font-medium tracking-widest uppercase mb-8">Powering modern teams</p>
<div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-40 grayscale">
<span className="font-semibold tracking-tighter text-xl">ACME CORP</span>
<span className="font-semibold tracking-tighter text-xl">NEXUS</span>
<span className="font-semibold tracking-tighter text-xl flex items-center gap-1"><iconify-icon icon="solar:box-linear"></iconify-icon> QUANTUM</span>
<span className="font-semibold tracking-tighter text-xl">ELEVATE</span>
<span className="font-semibold tracking-tighter text-xl">VERTEX</span>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="solutions">
<div className="max-w-6xl mx-auto">
<div className="mb-16 md:flex md:items-end md:justify-between gap-8">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Systems that scale with you.</h2>
<p className="text-zinc-400 text-base leading-relaxed">Replace manual data entry, customer support routing, and lead qualification with tailored, deterministic AI systems.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/20 hover:bg-zinc-900/60 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 blur-[50px] rounded-full group-hover:bg-indigo-500/20 transition-all duration-500"></div>
<div className="w-12 h-12 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-300 shadow-sm relative z-10">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 relative z-10">Autonomous Agents</h3>
<p className="text-sm text-zinc-400 leading-relaxed relative z-10">Resolve up to 80% of routine inquiries instantly using custom LLMs trained securely on your internal knowledge base.</p>
</div>

<div className="group p-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/20 hover:bg-zinc-900/60 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full group-hover:bg-purple-500/20 transition-all duration-500"></div>
<div className="w-12 h-12 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-300 shadow-sm relative z-10">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 relative z-10">Data Pipeline Automation</h3>
<p className="text-sm text-zinc-400 leading-relaxed relative z-10">Automatically extract, transform, and load unstructured data from emails, PDFs, and forms directly into your CRM or database.</p>
</div>

<div className="group p-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/20 hover:bg-zinc-900/60 transition-all duration-500 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all duration-500"></div>
<div className="w-12 h-12 rounded-xl border border-zinc-800 bg-zinc-950 flex items-center justify-center mb-6 text-zinc-300 shadow-sm relative z-10">
<iconify-icon icon="solar:routing-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight mb-3 relative z-10">Workflow Orchestration</h3>
<p className="text-sm text-zinc-400 leading-relaxed relative z-10">Connect disjointed SaaS tools with custom logic to create seamless, hands-free operational pipelines that run 24/7.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 overflow-hidden border-t border-zinc-800/50 bg-zinc-900/10" id="platform">
<div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="flex-1 space-y-8">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-900 text-xs font-medium text-zinc-400 mb-6 border border-zinc-800">
                            Command Center
                        </div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Granular control over your infrastructure.</h2>
<p className="text-zinc-400 text-base leading-relaxed max-w-md">Monitor agent performance, adjust behavior thresholds, and toggle integrations instantly from a unified, secure dashboard.</p>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-0.5 rounded-full bg-zinc-900 p-1 border border-zinc-800 text-indigo-400">
<iconify-icon icon="solar:check-read-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">Real-time latency monitoring</div>
<div className="text-xs text-zinc-500 mt-0.5">Track API calls and response times.</div>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 rounded-full bg-zinc-900 p-1 border border-zinc-800 text-indigo-400">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-200">Human-in-the-loop fallbacks</div>
<div className="text-xs text-zinc-500 mt-0.5">Route low-confidence tasks to your team.</div>
</div>
</li>
</ul>
</div>

<div className="flex-1 w-full max-w-md lg:max-w-none mx-auto relative perspective-[1000px]">
<div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 via-transparent to-purple-500/20 rounded-3xl blur-2xl opacity-50"></div>
<div className="relative rounded-2xl border border-zinc-800/80 bg-zinc-950/80 backdrop-blur-xl shadow-2xl overflow-hidden ring-1 ring-white/5">

<div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/80 bg-zinc-900/50">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="text-xs font-medium text-zinc-500 tracking-wide">agent_config.json</div>
<div className="w-10"></div> 
</div>

<div className="p-6 space-y-6">

<div className="flex items-center justify-between group">
<div>
<div className="text-sm font-medium text-zinc-200 mb-1">Auto-resolve Tickets</div>
<div className="text-xs text-zinc-500">Allow AI to close tickets &gt; 95% confidence.</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-10 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500 border border-zinc-700 peer-checked:border-indigo-500 shadow-inner"></div>
</label>
</div>

<div className="flex items-center justify-between group">
<div>
<div className="text-sm font-medium text-zinc-200 mb-1">Slack Alerts</div>
<div className="text-xs text-zinc-500">Notify #ops on pipeline failures.</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-10 h-6 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-zinc-400 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-500 border border-zinc-700 peer-checked:border-indigo-500 shadow-inner"></div>
</label>
</div>
<div className="w-full h-px bg-zinc-800/80"></div>

<div>
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium text-zinc-200">Model Creativity (Temperature)</div>
<div className="text-xs font-mono bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800 text-zinc-400">0.7</div>
</div>
<div className="relative w-full h-2 bg-zinc-900 rounded-full border border-zinc-800 overflow-hidden">
<div className="absolute top-0 left-0 h-full bg-indigo-500 w-[70%] rounded-full relative">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow mr-0.5"></div>
</div>
</div>
<div className="flex justify-between text-[10px] text-zinc-500 mt-2 font-medium uppercase tracking-wider">
<span>Deterministic</span>
<span>Creative</span>
</div>
</div>

<div className="pt-2">
<div className="text-sm font-medium text-zinc-200 mb-2">Primary LLM Provider</div>
<div className="w-full flex items-center justify-between px-3 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-sm text-zinc-300 cursor-pointer hover:bg-zinc-800/50 transition-colors">
<div className="flex items-center gap-2">
<div className="w-4 h-4 rounded-sm bg-zinc-800 flex items-center justify-center text-[10px]">O</div>
                                        GPT-4o (Default)
                                    </div>
<iconify-icon className="text-zinc-500" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="process">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">From audit to deployment.</h2>
<p className="text-zinc-400 text-base">A streamlined approach to integrating AI into your existing stack.</p>
</div>
<div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-zinc-800 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_6px_theme(colors.zinc.950)] relative z-10">
<span className="text-xs font-medium">01</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-transparent hover:border-zinc-800 hover:bg-zinc-900/30 transition-colors">
<h3 className="text-lg font-medium tracking-tight mb-2 text-zinc-200">Discovery &amp; Architecture</h3>
<p className="text-sm text-zinc-500 leading-relaxed">We map your operational bottlenecks and design a scalable automation architecture tailored to your specific data flow.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 text-zinc-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_6px_theme(colors.zinc.950)] relative z-10">
<span className="text-xs font-medium">02</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-transparent hover:border-zinc-800 hover:bg-zinc-900/30 transition-colors">
<h3 className="text-lg font-medium tracking-tight mb-2 text-zinc-200">Development &amp; Integration</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Our engineers build custom scripts, integrate required APIs, and fine-tune language models within a secure staging environment.</p>
</div>
</div>

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-10 h-10 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_6px_theme(colors.zinc.950)] relative z-10">
<span className="text-xs font-medium">03</span>
</div>
<div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 transition-colors">
<h3 className="text-lg font-medium tracking-tight mb-2 text-zinc-200">Deployment &amp; Maintenance</h3>
<p className="text-sm text-zinc-400 leading-relaxed">We launch to production, train your team on the dashboard, and provide continuous monitoring to ensure 99.9% reliability.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative border-t border-zinc-800/50 bg-zinc-900/20 overflow-hidden">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Ready to optimize?</h2>
<p className="text-zinc-400 mb-10 text-lg max-w-xl mx-auto">Stop constraining growth with manual processes. Let's architect a digital workforce that runs your operations.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors inline-flex items-center justify-center gap-2">
                        Book Strategy Call
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-transparent text-white text-sm font-medium hover:bg-zinc-900 transition-colors border border-transparent hover:border-zinc-800 inline-flex items-center justify-center gap-2">
                        Read Case Studies
                    </button>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-800/80 bg-zinc-950 pt-16 pb-8 px-6">
<div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 md:col-span-2">
<div className="font-semibold tracking-tighter text-lg mb-4 text-white flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                    AIAUTO.
                </div>
<p className="text-zinc-500 text-sm max-w-xs leading-relaxed">Applying machine intelligence to solve operational bottlenecks and scale businesses efficiently without increasing headcount.</p>
</div>
<div className="col-span-1">
<h4 className="font-medium text-sm text-zinc-200 mb-4 tracking-tight">Solutions</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Support Agents</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Data Extraction</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Lead Qualification</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Internal Tools</a></li>
</ul>
</div>
<div className="col-span-1">
<h4 className="font-medium text-sm text-zinc-200 mb-4 tracking-tight">Resources</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Case Studies</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="font-medium text-sm text-zinc-200 mb-4 tracking-tight">Company</h4>
<ul className="space-y-3 text-sm text-zinc-500">
<li><a className="hover:text-zinc-300 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-300 transition-colors" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-800/50 text-zinc-600 text-xs font-medium">
<p>© 2024 AIAuto Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" strokeWidth="1.5" width="18"></iconify-icon></a>
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon icon="solar:github-linear" strokeWidth="1.5" width="18"></iconify-icon></a>
<a className="hover:text-zinc-300 transition-colors" href="#"><iconify-icon icon="solar:linkedin-linear" strokeWidth="1.5" width="18"></iconify-icon></a>
</div>
</div>
</footer>

    </>
  );
}
