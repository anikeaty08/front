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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020408]/80 backdrop-blur-md">
<div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative w-6 h-6 flex items-center justify-center">
<div className="absolute inset-0 bg-indigo-500 rounded blur-md opacity-40"></div>
<div className="relative bg-white text-[#020408] rounded-sm w-full h-full flex items-center justify-center">
<i className="w-3.5 h-3.5 stroke-[2]" data-lucide="layers"></i>
</div>
</div>
<span className="text-base font-medium tracking-tight text-white">IntelliSend</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Products</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Developers</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-zinc-300 transition-colors" href="#">Sign in</a>
<a className="px-3 py-1.5 rounded bg-indigo-600/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium hover:bg-indigo-600/20 transition-all flex items-center gap-2 group" href="#">
                    Contact Sales 
                    <i className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</nav>

<main className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden mesh-bg">

<div className="absolute top-1/4 right-0 w-[800px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[500px] bg-cyan-600/5 blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/4"></div>
<div className="max-w-[1200px] mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/5 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-sm">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_#818cf8]"></span>
                    New: Latency-based routing v2
                </div>
<h1 className="text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
                    Financial-grade <br/>
<span className="accent-gradient-text">messaging infrastructure.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-lg mb-8 leading-relaxed font-light">
                    IntelliSend provides the intelligent failover layer between your application and SMS providers. We unify liquidity, routing, and compliance into a single API.
                </p>
<div className="flex flex-wrap items-center gap-4">
<button className="px-6 py-2.5 rounded-full bg-[#6366f1] text-white text-sm font-medium hover:bg-[#5558e6] transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)] flex items-center gap-2">
                        Start building
                        <i className="w-4 h-4" data-lucide="chevron-right"></i>
</button>
<button className="px-6 py-2.5 rounded-full text-zinc-300 text-sm font-medium hover:text-white flex items-center gap-2 group transition-colors">
<i className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300" data-lucide="file-text"></i>
                        Read the documentation
                    </button>
</div>
<div className="mt-12 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-emerald-500" data-lucide="shield-check"></i>
<span className="text-xs font-medium text-zinc-400">SOC2 Type II</span>
</div>
<div className="h-4 w-px bg-zinc-800"></div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-indigo-500" data-lucide="server"></i>
<span className="text-xs font-medium text-zinc-400">99.999% Uptime</span>
</div>
<div className="h-4 w-px bg-zinc-800"></div>
<div className="flex items-center gap-1.5">
<i className="w-4 h-4 text-cyan-500" data-lucide="globe"></i>
<span className="text-xs font-medium text-zinc-400">Global Edge</span>
</div>
</div>
</div>

<div className="relative perspective-1000">

<div className="code-window rounded-xl overflow-hidden transform rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out z-20 relative">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#0f1117]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/50"></div>
</div>
<div className="text-[10px] font-mono text-zinc-500">send-otp.ts</div>
</div>

<div className="p-6 text-xs sm:text-sm leading-6 overflow-x-auto">
<div className="flex gap-4">
<div className="text-zinc-700 select-none text-right">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10</div>
<pre><code><span className="token-keyword">import</span> { IntelliSend } <span className="token-keyword">from</span> <span className="token-string">'@intellisend/node'</span>;

<span className="token-keyword">const</span> client = <span className="token-keyword">new</span> IntelliSend(process.env.API_KEY);

<span className="token-comment">// Intelligence layer handles provider selection</span>
<span className="token-keyword">const</span> response = <span className="token-keyword">await</span> client.messages.<span className="token-function">create</span>({
  to: <span className="token-string">'+15550123456'</span>,
  body: <span className="token-string">'Your verification code is: 4829'</span>,
  strategy: <span className="token-string">'lowest_latency'</span>, <span className="token-comment">// Optimized routing</span>
  fallback: [<span className="token-string">'twilio'</span>, <span className="token-string">'aws_sns'</span>, <span className="token-string">'messagebird'</span>]
});

console.<span className="token-function">log</span>(response.provider); <span className="token-comment">// "aws_sns"</span></code></pre>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-8 bg-[#6366f1]/10 border-t border-[#6366f1]/20 flex items-center px-4 gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
<span className="text-[10px] font-mono text-emerald-400">Rerouted from Twilio (Timeout) to AWS SNS in 42ms</span>
</div>
</div>

<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/30 to-cyan-500/30 blur-2xl -z-10 rounded-full opacity-50"></div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-[#020408]">
<div className="max-w-[1200px] mx-auto px-6 py-12">
<p className="text-center text-sm font-medium text-zinc-500 mb-8">Trusted by reliability-focused engineering teams</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-40 grayscale">

<div className="h-6 flex items-center gap-2 font-semibold text-white tracking-tight"><div className="w-5 h-5 bg-white rounded-full"></div> Acme Corp</div>
<div className="h-6 flex items-center gap-2 font-semibold text-white tracking-tight"><div className="w-5 h-5 border-2 border-white rounded transform rotate-45"></div> Vertex</div>
<div className="h-6 flex items-center gap-2 font-semibold text-white tracking-tight"><div className="w-5 h-5 bg-white rounded-tr-xl rounded-bl-xl"></div> Linear</div>
<div className="h-6 flex items-center gap-2 font-semibold text-white tracking-tight"><div className="w-5 h-5 border border-white rounded-full flex items-center justify-center"><div className="w-2 h-2 bg-white rounded-full"></div></div> Orbit</div>
<div className="h-6 flex items-center gap-2 font-semibold text-white tracking-tight"><div className="w-5 h-5 bg-white clip-path-polygon"></div> Raycast</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020408] relative">
<div className="max-w-[1200px] mx-auto px-6">
<div className="mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">Unified infrastructure for <br/>global message delivery.</h2>
<p className="text-lg text-zinc-400 max-w-2xl leading-relaxed">
                    Stop managing individual vendor relationships. IntelliSend abstracts the complexity of global telecommunications into a single, reliable software layer.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-card rounded-xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 grid-bg opacity-30"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 border border-indigo-500/20">
<i className="w-5 h-5" data-lucide="workflow"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Smart Failover Engine</h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                            Our edge nodes ping providers every 100ms. If latency spikes or delivery rates dip below 98%, traffic is instantly rerouted to the next best provider without code changes.
                        </p>
</div>

<div className="absolute top-8 right-8 bottom-8 w-1/3 hidden md:flex flex-col justify-center gap-4 border-l border-white/5 pl-8">
<div className="flex items-center justify-between text-[10px] font-mono text-zinc-500">
<span>Twilio</span>
<span className="text-red-400">DOWN</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-full bg-red-500/50"></div>
</div>
<div className="flex items-center justify-between text-[10px] font-mono text-zinc-300 mt-2">
<span>AWS SNS</span>
<span className="text-emerald-400">ACTIVE</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-[80%] bg-emerald-500 relative">
<div className="absolute top-0 right-0 bottom-0 w-2 bg-white blur-[2px]"></div>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-purple-500/20 blur-[40px] rounded-full group-hover:bg-purple-500/30 transition-colors"></div>
<div className="w-10 h-10 rounded bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<i className="w-5 h-5" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Data Residency</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Specify data residency requirements per region. We ensure PII never leaves the jurisdiction you define in the configuration object.
                    </p>
</div>

<div className="glass-card rounded-xl p-8 relative overflow-hidden group">
<div className="absolute bottom-0 left-0 -ml-4 -mb-4 w-24 h-24 bg-cyan-500/20 blur-[40px] rounded-full group-hover:bg-cyan-500/30 transition-colors"></div>
<div className="w-10 h-10 rounded bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 border border-cyan-500/20">
<i className="w-5 h-5" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Real-time Observability</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Trace every message ID across providers. View latency heatmaps and cost-per-message analytics in a unified dashboard.
                    </p>
</div>

<div className="md:col-span-2 glass-card rounded-xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 grid-bg opacity-30"></div>
<div className="relative z-10 max-w-lg">
<div className="w-10 h-10 rounded bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
<i className="w-5 h-5" data-lucide="wallet"></i>
</div>
<h3 className="text-xl font-medium text-white mb-2">Unified Liquidity Pool</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Stop managing credit cards for 10 different providers. Deposit funds into IntelliSend, and we dynamically allocate budget to underlying providers based on usage.
                        </p>
</div>

<div className="absolute bottom-0 right-0 w-64 h-32 flex items-end gap-1 px-8 opacity-50">
<div className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-500/5 h-[40%] rounded-t-sm border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-500/5 h-[60%] rounded-t-sm border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-500/5 h-[30%] rounded-t-sm border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-500/5 h-[80%] rounded-t-sm border-t border-emerald-500/30"></div>
<div className="flex-1 bg-gradient-to-t from-emerald-500/20 to-emerald-500/5 h-[55%] rounded-t-sm border-t border-emerald-500/30"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#05070a]">
<div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
<h2 className="text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">Global Edge Network</h2>
<h3 className="text-3xl font-medium text-white mb-8">Low latency in 195 countries.</h3>
<div className="relative w-full max-w-4xl aspect-[2/1] bg-[#020408] rounded-xl border border-white/10 overflow-hidden shadow-2xl">

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>

<div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<div className="absolute top-1/4 left-1/2 h-1/2 w-px bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"></div>

<div className="absolute top-[40%] left-[25%] w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_15px_#6366f1]">
<div className="absolute -inset-2 rounded-full border border-indigo-500/30 animate-ping"></div>
</div>
<div className="absolute top-[30%] left-[60%] w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_15px_#06b6d4]"></div>
<div className="absolute top-[65%] left-[75%] w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_15px_#a855f7]"></div>
<div className="absolute top-[50%] left-[80%] w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981]"></div>

<div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
<div className="px-3 py-1.5 bg-[#0f1117]/90 backdrop-blur border border-white/10 rounded text-xs font-mono text-zinc-400">
<span className="text-emerald-400">●</span> 35 Edge Regions Active
                    </div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-20">
<div>
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">Designed for Developers</h2>
<p className="text-lg text-zinc-400 mb-8 leading-relaxed">
                        Integrate in minutes with typed SDKs for Node, Python, and Go. Our API is idempotent, consistent, and documented to industry standards.
                    </p>
<div className="space-y-6">
<div className="group flex items-start gap-4 p-4 -mx-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-indigo-500/50 transition-colors">
<span className="font-mono text-sm text-zinc-300">01</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Install the SDK</h4>
<p className="text-sm text-zinc-500">Available via npm, pip, and go get.</p>
</div>
</div>
<div className="group flex items-start gap-4 p-4 -mx-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-indigo-500/50 transition-colors">
<span className="font-mono text-sm text-zinc-300">02</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Configure Providers</h4>
<p className="text-sm text-zinc-500">Add your API keys in the dashboard vault.</p>
</div>
</div>
<div className="group flex items-start gap-4 p-4 -mx-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-white/5 group-hover:border-indigo-500/50 transition-colors">
<span className="font-mono text-sm text-zinc-300">03</span>
</div>
<div>
<h4 className="text-white font-medium mb-1">Send with Confidence</h4>
<p className="text-sm text-zinc-500">We handle the rest, including retries and failover.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent blur-3xl"></div>
<div className="code-window rounded-xl p-6 relative z-10 border-l-4 border-l-indigo-500">
<div className="flex justify-between items-center mb-4 border-b border-white/5 pb-2">
<span className="text-xs font-medium text-zinc-400">Response Object</span>
<span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">200 OK</span>
</div>
<pre className="text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto"><code><span className="token-operator">{</span>
  <span className="token-string">"id"</span>: <span className="token-string">"msg_8a2k91mn..."</span>,
  <span className="token-string">"status"</span>: <span className="token-string">"queued"</span>,
  <span className="token-string">"routing"</span>: <span className="token-operator">{</span>
    <span className="token-string">"selected_provider"</span>: <span className="token-string">"aws_sns"</span>,
    <span className="token-string">"reason"</span>: <span className="token-string">"primary_provider_latency_high"</span>,
    <span className="token-string">"latency_check"</span>: <span className="token-number">420</span> <span className="token-comment">// ms</span>
  <span className="token-operator">}</span>,
  <span className="token-string">"cost"</span>: <span className="token-number">0.0045</span>,
  <span className="token-string">"currency"</span>: <span className="token-string">"USD"</span>,
  <span className="token-string">"created_at"</span>: <span className="token-string">"2023-10-27T14:22:10Z"</span>
<span className="token-operator">}</span></code></pre>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-[#020408]">
<div className="max-w-[1200px] mx-auto px-6">
<div className="glass-card rounded-2xl p-12 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent"></div>
<h2 className="text-3xl font-medium text-white mb-6 relative z-10">Ready to harden your infrastructure?</h2>
<p className="text-lg text-zinc-400 mb-10 max-w-xl mx-auto relative z-10">
                    Join forward-thinking engineering teams delivering millions of critical messages daily.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
<button className="w-full sm:w-auto px-8 py-3 rounded-full bg-white text-[#020408] font-medium hover:bg-zinc-200 transition-colors shadow-lg">
                        Create account
                    </button>
<button className="w-full sm:w-auto px-8 py-3 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                        Contact Sales
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-[#020408] pt-20 pb-10 border-t border-white/5">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-6 gap-10 mb-16">
<div className="col-span-2">
<div className="flex items-center gap-2 mb-6 text-white">
<i className="w-5 h-5" data-lucide="layers"></i>
<span className="font-medium tracking-tight">IntelliSend</span>
</div>
<p className="text-sm text-zinc-500 max-w-xs">
                        The reliability layer for enterprise communications.
                    </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-white">Product</h4>
<a className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors" href="#">Failover</a>
<a className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors" href="#">Routing</a>
<a className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors" href="#">Vault</a>
<a className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-white">Developers</h4>
<a className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors" href="#">Documentation</a>
<a className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors" href="#">API Reference</a>
<a className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors" href="#">Status</a>
<a className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors" href="#">Github</a>
</div>
<div className="flex flex-col gap-4">
<h4 className="text-sm font-semibold text-white">Company</h4>
<a className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors" href="#">About</a>
<a className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors" href="#">Customers</a>
<a className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors" href="#">Blog</a>
<a className="text-sm text-zinc-500 hover:text-indigo-400 transition-colors" href="#">Careers</a>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600">© 2024 IntelliSend Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-zinc-600 hover:text-white" href="#">Privacy</a>
<a className="text-xs text-zinc-600 hover:text-white" href="#">Terms</a>
<a className="text-xs text-zinc-600 hover:text-white" href="#">Security</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
