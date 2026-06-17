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
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-900/10 rounded-full blur-[120px] animate-glow"></div>
<div className="absolute top-[40%] right-[-20%] w-[60%] h-[60%] bg-violet-900/10 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded-md flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
<span className="text-white font-semibold tracking-tight text-sm">Nexai</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Protocol</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Developers</a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm font-medium text-white hover:text-zinc-300 transition-colors hidden sm:block" href="#">Log in</a>
<a className="group relative px-4 py-2 text-sm font-medium text-black bg-white rounded-full overflow-hidden transition-transform active:scale-95" href="#">
<span className="relative z-10 group-hover:text-black/80">Start building</span>
<div className="absolute inset-0 bg-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
</a>
</div>
</div>
</nav>

<main className="relative z-10 pt-24 pb-20 overflow-hidden">

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 backdrop-blur-sm mb-8">
<span className="text-[10px] font-semibold tracking-wide uppercase text-indigo-300">New Release</span>
<div className="w-px h-3 bg-indigo-500/30"></div>
<span className="text-xs font-medium text-indigo-200">ZK-Rollup Support →</span>
</div>
<h1 className="text-5xl lg:text-7xl font-semibold text-white tracking-tight mb-8 leading-[1.05]">
                        Compute without <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-white">boundaries.</span>
</h1>
<p className="text-lg text-zinc-400 max-w-lg mb-10 leading-relaxed">
                        The first decentralized compute network that cryptographically guarantees AI model execution. Build unstoppable agents today.
                    </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
<div className="group relative flex items-center bg-zinc-900 border border-white/10 rounded-lg pr-4 pl-3 py-2.5 transition-colors hover:border-white/20">
<span className="text-zinc-500 select-none mr-3">$</span>
<span className="font-mono text-sm text-white mr-8">npm install @nexai/core</span>
<button className="text-zinc-500 hover:text-white transition-colors">
<iconify-icon icon="lucide:copy" width="16"></iconify-icon>
</button>
</div>
<button className="px-6 py-2.5 rounded-lg bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors w-full sm:w-auto">
                            Start Building
                        </button>
</div>

<div className="pt-8 border-t border-white/5">
<p className="text-xs text-zinc-500 mb-4 font-medium uppercase tracking-wider">Securing computation for</p>
<div className="flex gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<iconify-icon className="text-white" icon="lucide:hexagon" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:triangle" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:circle-dashed" width="24"></iconify-icon>
<iconify-icon className="text-white" icon="lucide:box" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="perspective-container relative hidden lg:block h-[600px] w-full flex items-center justify-center">

<div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent rounded-full blur-3xl opacity-30 transform translate-x-12 translate-y-12"></div>

<div className="relative w-full max-w-md rotate-y-12 transition-transform duration-500 hover:rotate-0 hover:scale-[1.02]">

<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-30 blur"></div>

<div className="relative bg-[#0A0A0A] border border-white/10 rounded-xl shadow-2xl overflow-hidden">

<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/[0.02]">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
<iconify-icon className="text-green-500" icon="lucide:shield-check"></iconify-icon>
                                    Verifiable Mode
                                </div>
</div>

<div className="p-6 font-mono text-xs leading-relaxed">
<div className="flex gap-4">
<div className="flex flex-col text-zinc-700 text-right select-none">
<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span>
</div>
<div className="text-zinc-300">
<div><span className="text-purple-400">import</span> { Agent, ZKProof } <span className="text-purple-400">from</span> <span className="text-green-400">'@nexai/core'</span>;</div>
<br/>
<div className="text-zinc-500">// Initialize verifiable agent</div>
<div><span className="text-purple-400">const</span> agent = <span className="text-purple-400">new</span> <span className="text-yellow-200">Agent</span>({</div>
<div className="pl-4">id: <span className="text-green-400">'agent_8x29'</span>,</div>
<div className="pl-4">consensus: <span className="text-blue-400">true</span></div>
<div>});</div>
<br/>
<div className="text-zinc-500">// Execute task with proof generation</div>
<div><span className="text-purple-400">const</span> result = <span className="text-purple-400">await</span> agent.<span className="text-blue-400">infer</span>({</div>
<div className="pl-4">prompt: <span className="text-green-400">'Analyze market sentiment'</span>,</div>
<div className="pl-4">verify: <span className="text-purple-400">true</span></div>
<div>});</div>
</div>
</div>
</div>

<div className="p-4 border-t border-white/5 bg-zinc-900/50 backdrop-blur-md">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-500">Generating Proof</span>
<span className="text-xs text-white font-mono">24ms</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden relative">
<div className="absolute inset-y-0 left-0 bg-indigo-500 w-2/3 rounded-full animate-pulse"></div>
</div>
<div className="mt-3 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="h-1.5 w-1.5 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
<span className="text-[10px] text-zinc-400 uppercase">Network Synced</span>
</div>
<span className="text-[10px] text-zinc-600 font-mono">block: #19240582</span>
</div>
</div>
</div>

<div className="absolute -right-8 bottom-12 bg-zinc-900 border border-white/10 rounded-lg p-3 shadow-xl backdrop-blur-xl animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<iconify-icon icon="lucide:check" strokeWidth="3" width="16"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-white">Proof Valid</div>
<div className="text-[10px] text-zinc-500">0x7a...2b9c</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 mb-32">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-4">Core Infrastructure</h2>
<p className="text-zinc-400 max-w-xl">Built for developers who need deterministic AI execution on untrusted networks.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition duration-300">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:cpu" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Verifiable Compute</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Run complex ML models off-chain and submit succinct ZK-proofs on-chain. Guarantee that the output came from the specific model.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition duration-300">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:lock" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Privacy Preserving</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Process sensitive data without exposing it to the network. Use secure multi-party computation for training on private datasets.
                    </p>
</div>

<div className="group p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 hover:bg-white/[0.05] transition duration-300">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 flex items-center justify-center text-pink-400 mb-4 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:blocks" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Agent Autonomy</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                        Deploy agents that hold their own keys. They can sign transactions, manage treasuries, and interact with DeFi protocols autonomously.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
<div className="p-8 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-20">
<iconify-icon icon="lucide:network" strokeWidth="1" width="120"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2 relative z-10">Cross-Chain Interop</h3>
<p className="text-sm text-zinc-400 max-w-xs mb-6 relative z-10">
                        Agents aren't bound to one chain. Orchestrate actions across Ethereum, Solana, and Cosmos seamlessly.
                    </p>
<div className="flex gap-2 relative z-10">
<span className="px-2 py-1 text-xs font-mono rounded bg-white/10 text-white/70">ETH</span>
<span className="px-2 py-1 text-xs font-mono rounded bg-white/10 text-white/70">SOL</span>
<span className="px-2 py-1 text-xs font-mono rounded bg-white/10 text-white/70">ATOM</span>
</div>
</div>
<div className="p-8 rounded-2xl bg-zinc-900 border border-white/5 flex flex-col justify-between">
<div>
<h3 className="text-xl font-medium text-white mb-2">Developer Experience</h3>
<p className="text-sm text-zinc-400 mb-6">
                            Typescript SDK, Python bindings, and a CLI that feels like magic.
                        </p>
</div>
<div className="bg-black rounded-lg p-4 border border-white/5 font-mono text-xs text-zinc-400">
<span className="text-purple-400">$</span> npx create-nexai-app <span className="text-zinc-500">--template agent</span><br/>
<span className="text-green-400">✓</span> Creating project...<br/>
<span className="text-green-400">✓</span> Installing dependencies...<br/>
<span className="text-white blink">_</span>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-white/[0.01]">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">10k+</div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Active Agents</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">2M+</div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Transactions</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">99.9%</div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Uptime</div>
</div>
<div>
<div className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-1">&lt;50ms</div>
<div className="text-xs font-medium text-zinc-500 uppercase tracking-wider">Latency</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-32 text-center">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">Ready to deploy verifiable AI?</h2>
<p className="text-zinc-400 mb-10 text-lg">Join thousands of developers building the next generation of intelligent dApps.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="h-12 px-8 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors">
                    Get API Keys
                </button>
<button className="h-12 px-8 rounded-full border border-white/10 text-white font-medium hover:bg-white/5 transition-colors">
                    Contact Sales
                </button>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-black py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12">
<div>
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-gradient-to-tr from-indigo-500 to-violet-500 rounded flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
<span className="text-white font-semibold tracking-tight text-sm">Nexai</span>
</div>
<p className="text-xs text-zinc-500 max-w-xs">
                    Pioneering decentralized artificial intelligence. <br/>Built for the open web.
                </p>
</div>
<div className="flex gap-12 text-sm">
<div className="flex flex-col gap-3">
<span className="font-medium text-white">Product</span>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Features</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">SDK</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-medium text-white">Resources</span>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Documentation</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">API Reference</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Community</a>
</div>
<div className="flex flex-col gap-3">
<span className="font-medium text-white">Company</span>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">About</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Blog</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Careers</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-xs text-zinc-600">
<span>© 2024 Nexai Labs Inc.</span>
<div className="flex gap-4">
<a className="hover:text-zinc-400" href="#">Privacy</a>
<a className="hover:text-zinc-400" href="#">Terms</a>
</div>
</div>
</footer>

    </>
  );
}
