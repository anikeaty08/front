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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] blur-[150px] rounded-full bg-blue-600/10"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] blur-[150px] rounded-full bg-indigo-600/10"></div>
</div>

<div className="absolute top-0 inset-x-0 h-screen z-[-1] pointer-events-none overflow-hidden flex justify-center" style={{perspective: '1000px'}}>
<div className="w-[200%] h-[150%] origin-top opacity-30" style={{transform: 'rotateX(75deg) translateY(-20%) translateZ(-300px)', backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '4rem 4rem', maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)'}}></div>
</div>

<header className="fixed top-0 w-full z-50 border-b backdrop-blur-xl border-white/5 bg-black/50">
<div className="flex bg-zinc-500 h-16 max-w-7xl mx-auto px-6 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between"><div className="absolute inset-0" data-container-bg="true"><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}></div>
</div>
<a className="flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded-md bg-gradient-to-tr to-indigo-500 flex items-center justify-center from-blue-600 text-white">
<iconify-icon icon="solar:polygon-linear"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tighter text-white">AIA</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="transition-colors hover:text-white" href="#solutions">Solutions</a>
<a className="transition-colors hover:text-white" href="#platform">Platform</a>
<a className="transition-colors hover:text-white" href="#metrics">Metrics</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium transition-colors hover:text-white">
                    Sign in
                </button>
<button className="px-4 py-2 rounded-full text-sm font-medium transition-colors bg-white text-black hover:bg-zinc-200">
                    Deploy Agent
                </button>
</div>
</div>
</header>
<main className="pt-32 pb-24">

<section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center min-h-[75vh]">

<div className="flex flex-col gap-6 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md w-fit border-white/10 bg-white/5">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
<span className="text-xs font-medium text-zinc-300">System v2.4 Online</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[1.1] text-white">
                    Automate the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-500 from-blue-400">Impossible.</span>
</h1>
<p className="text-base md:text-lg max-w-lg leading-relaxed text-zinc-400">
                    Deploy intelligent autonomous agents that handle your complex workflows, scale infinitely, and execute tasks with zero latency.
                </p>
<div className="flex flex-wrap items-center gap-4 mt-4">
<button className="px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 group bg-white text-black hover:bg-zinc-200">
                        Start Building
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-6 py-3 rounded-full text-sm font-medium border transition-colors border-white/10 hover:bg-white/5 text-white">
                        View Documentation
                    </button>
</div>
</div>

<div className="relative w-full aspect-square flex items-center justify-center lg:justify-end" style={{perspective: '1200px'}}>

<div className="relative w-full max-w-md aspect-square" style={{transformStyle: 'preserve-3d', animation: 'float-complex 12s ease-in-out infinite'}}>

<div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[80px]" style={{transform: 'translateZ(-100px)', animation: 'glow-pulse 4s infinite'}}></div>

<div className="absolute inset-4 border rounded-full border-dashed border-white/10" style={{transform: 'translateZ(-40px) rotateX(10deg)'}}></div>

<div className="absolute inset-12 border border-blue-500/30 rounded-full" style={{transform: 'translateZ(-20px) rotateY(-10deg)'}}></div>

<div className="absolute inset-0 m-auto w-64 h-80 backdrop-blur-xl border rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.6)] p-6 flex flex-col gap-5 overflow-hidden bg-zinc-900/80 border-white/10" style={{transform: 'translateZ(20px)'}}>

<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30 text-indigo-400">
<iconify-icon icon="solar:cpu-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight leading-none text-white">Nexus Core</h3>
<span className="text-[10px] text-zinc-500">Autonomous Mode</span>
</div>
</div>
<iconify-icon className="text-zinc-500" icon="solar:menu-dots-bold"></iconify-icon>
</div>

<div className="flex items-center justify-between p-3 rounded-xl border mt-2 bg-black/40 border-white/5">
<span className="text-xs font-medium text-zinc-300">Auto-Scaling</span>

<div className="w-8 h-4 rounded-full relative shadow-[0_0_12px_rgba(37,99,235,0.4)] cursor-pointer bg-blue-600">
<div className="absolute right-0.5 top-0.5 w-3 h-3 rounded-full shadow-sm bg-white"></div>
</div>
</div>

<div className="flex flex-col gap-3 mt-1 relative z-10">

<div className="flex items-start gap-3">
<div className="w-4 h-4 rounded border border-blue-500/50 bg-blue-500/20 flex items-center justify-center mt-0.5">
<iconify-icon className="text-[10px] text-blue-400" icon="solar:check-read-linear"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium line-through text-zinc-400">Ingest user data stream</span>
<span className="text-[10px] text-zinc-600">0.012ms</span>
</div>
</div>

<div className="flex items-start gap-3">
<div className="w-4 h-4 rounded border flex items-center justify-center mt-0.5 relative border-white/20 bg-black">
<div className="absolute inset-0 border rounded animate-ping opacity-50 border-blue-400"></div>
<div className="w-1.5 h-1.5 rounded-sm bg-blue-400"></div>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Synthesize response model</span>

<div className="w-full h-1 rounded-full mt-1.5 overflow-hidden bg-white/10">
<div className="w-[65%] h-full bg-blue-500 rounded-full relative">
<div className="absolute top-0 right-0 w-4 h-full blur-[2px] bg-white/50"></div>
</div>
</div>
</div>
</div>

<div className="flex items-start gap-3 opacity-40">
<div className="w-4 h-4 rounded border bg-transparent mt-0.5 border-white/10"></div>
<div className="flex flex-col">
<span className="text-xs font-medium text-zinc-400">Execute API webhook</span>
</div>
</div>
</div>

<div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t to-transparent pointer-events-none from-zinc-900"></div>
</div>

<div className="absolute top-1/2 left-1/2 w-32 h-12 backdrop-blur-md border rounded-xl shadow-xl flex items-center px-3 gap-3 bg-zinc-900/90 border-white/10" style={{animation: '15s linear 0s infinite normal none running orbit', transformOrigin: '-80px center'}}>
<iconify-icon className="text-lg text-indigo-400" icon="solar:database-linear"></iconify-icon>
<div className="flex flex-col">
<span className="text-[10px] text-zinc-500">Processed</span>
<span className="text-xs font-semibold tracking-tight text-white">1.2B Req</span>
</div>
</div>

<div className="absolute top-1/4 left-1/4 w-10 h-10 backdrop-blur-md border rounded-full shadow-xl flex items-center justify-center bg-black/80 border-white/10" style={{transform: 'translateZ(80px) translateX(120px) translateY(100px)'}}>
<iconify-icon className="text-xl text-blue-400" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 relative" id="solutions">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-sm font-medium tracking-wider uppercase mb-3 text-blue-400">Core Capabilities</h2>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tighter mb-4 text-white">Infrastructure for the Ai Era</h3>
<p className="text-sm text-zinc-400">Stop writing brittle scripts. Our platform provides enterprise-grade primitives for autonomous systems.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] overflow-hidden bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 bg-black border-white/10">
<iconify-icon className="text-2xl group-hover:text-blue-400 transition-colors text-zinc-300" icon="solar:bot-linear"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2 relative z-10 text-white">Autonomous Agents</h4>
<p className="text-sm leading-relaxed relative z-10 text-zinc-400">Deploy goal-oriented models that break down complex tasks, browse the web, and utilize tools independently.</p>
</div>

<div className="group relative border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] overflow-hidden bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 bg-black border-white/10">
<iconify-icon className="text-2xl group-hover:text-indigo-400 transition-colors text-zinc-300" icon="solar:branching-paths-up-linear"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2 relative z-10 text-white">Workflow Orchestration</h4>
<p className="text-sm leading-relaxed relative z-10 text-zinc-400">Visually map out complex multi-step processes. Connect APIs, databases, and legacy systems with zero code.</p>
</div>

<div className="group relative border rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] overflow-hidden bg-zinc-900/40 border-white/5 hover:bg-zinc-900/60 hover:border-white/10">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-xl border flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500 bg-black border-white/10">
<iconify-icon className="text-2xl group-hover:text-purple-400 transition-colors text-zinc-300" icon="solar:chart-square-linear"></iconify-icon>
</div>
<h4 className="text-lg font-semibold tracking-tight mb-2 relative z-10 text-white">Predictive Intelligence</h4>
<p className="text-sm leading-relaxed relative z-10 text-zinc-400">Turn raw unstructured data into actionable insights instantly using custom fine-tuned embedded models.</p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24 border-t border-white/5" id="platform">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="flex-1 flex flex-col gap-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tighter text-white">Integrates natively with your stack.</h2>
<p className="text-sm max-w-md text-zinc-400">
                        Our platform provides a headless API that seamlessly connects with your existing applications. Trigger agents, monitor state, and receive webhooks entirely programmatically.
                    </p>
<ul className="flex flex-col gap-3 mt-4">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                            REST &amp; GraphQL APIs available
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                            Real-time WebSocket events
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon>
                            SDKs for Node, Python, and Go
                        </li>
</ul>
</div>

<div className="flex-1 w-full" style={{perspective: '1000px'}}>
<div className="w-full bg-[#0d0d0d] border rounded-xl overflow-hidden shadow-2xl transition-transform duration-700 hover:rotate-x-0 hover:rotate-y-0 border-white/10" style={{transform: 'rotateX(5deg) rotateY(-10deg)'}}>

<div className="h-10 border-b bg-[#141414] flex items-center px-4 gap-2 border-white/5">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
</div>
<span className="text-[10px] text-zinc-500 ml-4 font-mono">agent-deploy.ts</span>
</div>

<div className="p-6 font-mono text-xs md:text-sm overflow-x-auto hide-scrollbar text-zinc-400">
<pre className=""><code className=""><span className="text-purple-400">import</span> { Agent } <span className="text-purple-400">from</span> <span className="text-green-400">'@aia/sdk'</span>;

<span className="text-blue-400">const</span> workflow = <span className="text-purple-400">new</span> <span className="text-yellow-200">Agent</span>({
  <span className="text-blue-200">name</span>: <span className="text-green-400">'Data_Pipeline_Alpha'</span>,
  <span className="text-blue-200">model</span>: <span className="text-green-400">'nexus-v2-turbo'</span>,
  <span className="text-blue-200">autonomous</span>: <span className="text-blue-400">true</span>,
});

<span className="text-zinc-500">// Initialize connection</span>
<span className="text-purple-400">await</span> workflow.<span className="text-yellow-200">connect</span>(process.env.<span className="text-blue-200">DB_URI</span>);

<span className="text-zinc-500">// Define trigger event</span>
workflow.<span className="text-yellow-200">on</span>(<span className="text-green-400">'record.created'</span>, <span className="text-purple-400">async</span> (data) =&gt; {
  <span className="text-blue-400">const</span> insight = <span className="text-purple-400">await</span> workflow.<span className="text-yellow-200">analyze</span>(data);
  <span className="text-purple-400">return</span> workflow.<span className="text-yellow-200">dispatch</span>(insight);
});</code></pre>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-b border mb-6 shadow-2xl from-zinc-800 to-black border-white/10">
<iconify-icon className="text-2xl text-white" icon="solar:rocket-linear"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 text-white">Ready to automate?</h2>
<p className="text-sm mb-8 max-w-lg mx-auto text-zinc-400">
                Join forward-thinking companies building the next generation of autonomous operations on our infrastructure.
            </p>
<div className="flex items-center justify-center gap-4">
<button className="px-8 py-3 rounded-full text-sm font-medium transition-colors bg-white text-black hover:bg-zinc-200">
                    Get Started for Free
                </button>
<button className="px-8 py-3 rounded-full text-sm font-medium border transition-colors border-white/10 hover:bg-white/5 text-white">
                    Book a Demo
                </button>
</div>
</section>
</main>

<footer className="border-t pt-16 pb-8 border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-0">
<div className="flex flex-col gap-4">
<a className="flex items-center gap-2" href="#">
<div className="w-5 h-5 rounded flex items-center justify-center bg-zinc-800 text-zinc-400">
<iconify-icon className="text-xs" icon="solar:polygon-linear"></iconify-icon>
</div>
<span className="font-semibold text-base tracking-tighter text-white">AIA</span>
</a>
<p className="text-xs text-zinc-500 max-w-xs">Building the underlying infrastructure for autonomous AI agents and intelligent workflows.</p>
</div>
<div className="flex gap-16">
<div className="flex flex-col gap-3 text-sm">
<span className="font-medium mb-1 text-white">Product</span>
<a className="transition-colors text-zinc-400 hover:text-white" href="#">Agents</a>
<a className="transition-colors text-zinc-400 hover:text-white" href="#">Workflows</a>
<a className="transition-colors text-zinc-400 hover:text-white" href="#">Integrations</a>
<a className="transition-colors text-zinc-400 hover:text-white" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-3 text-sm">
<span className="font-medium mb-1 text-white">Resources</span>
<a className="transition-colors text-zinc-400 hover:text-white" href="#">Documentation</a>
<a className="transition-colors text-zinc-400 hover:text-white" href="#">API Reference</a>
<a className="transition-colors text-zinc-400 hover:text-white" href="#">Blog</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t flex items-center justify-between text-xs border-white/5 text-zinc-600">
<span>© 2024 AIA Inc. All rights reserved.</span>
<div className="flex gap-4">
<a className="transition-colors hover:text-zinc-400" href="#">Terms</a>
<a className="transition-colors hover:text-zinc-400" href="#">Privacy</a>
</div>
</div>
</footer>

    </>
  );
}
