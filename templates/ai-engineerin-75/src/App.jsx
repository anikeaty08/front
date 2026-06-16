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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors duration-300">
<span className="font-mono text-xs">/</span>
</div>
<span className="text-white font-medium tracking-tighter text-lg">azot.dev</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#methodology">Methodology</a>
<a className="hover:text-white transition-colors" href="#about">Company</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors" href="#">
                    Start Building
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 grid-bg opacity-[0.15] pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none opacity-50"></div>
<div className="relative max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-8 hover:border-indigo-500/30 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-xs font-medium text-neutral-300">Accepting new enterprise partners</span>
</div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
                Engineering intelligence <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">into modern software.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-2xl mb-10 font-light leading-relaxed">
                We build scalable architectures and integrate advanced AI models to transform how businesses operate. Precision code for the automated future.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all flex items-center gap-2">
                    Book a consultation
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="2" width="16"></iconify-icon>
</button>
<button className="h-10 px-6 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-all flex items-center gap-2 group">
                    View capabilities
                    <iconify-icon className="text-neutral-500 group-hover:text-white transition-colors" icon="solar:layers-minimalistic-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="mt-20 max-w-4xl mx-auto px-6 perspective-1000">
<div className="relative rounded-xl border border-white/10 bg-[#0F0F0F] p-4 shadow-2xl shadow-indigo-900/10 backdrop-blur-sm">
<div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<div className="ml-4 text-xs font-mono text-neutral-600">ai_config.ts</div>
</div>
<div className="font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
<div className="flex">
<span className="text-neutral-700 w-8 select-none">1</span>
<span className="text-purple-400">import</span> <span className="text-neutral-300 ml-2">{ AzotAI }</span> <span className="text-purple-400 ml-2">from</span> <span className="text-green-400 ml-2">'@azot/core'</span>;
                    </div>
<div className="flex">
<span className="text-neutral-700 w-8 select-none">2</span>
</div>
<div className="flex">
<span className="text-neutral-700 w-8 select-none">3</span>
<span className="text-purple-400">const</span> <span className="text-blue-400 ml-2">engine</span> <span className="text-neutral-300 ml-2">=</span> <span className="text-purple-400 ml-2">new</span> <span className="text-yellow-200 ml-2">AzotAI</span><span className="text-neutral-300">({</span>
</div>
<div className="flex">
<span className="text-neutral-700 w-8 select-none">4</span>
<span className="text-neutral-300 ml-6">model:</span> <span className="text-green-400 ml-2">'gpt-4-turbo-preview'</span><span className="text-neutral-300">,</span>
</div>
<div className="flex">
<span className="text-neutral-700 w-8 select-none">5</span>
<span className="text-neutral-300 ml-6">latency:</span> <span className="text-green-400 ml-2">'low'</span><span className="text-neutral-300">,</span>
</div>
<div className="flex">
<span className="text-neutral-700 w-8 select-none">6</span>
<span className="text-neutral-300 ml-6">context:</span> <span className="text-blue-400 ml-2">process.env.KNOWLEDGE_BASE</span>
</div>
<div className="flex">
<span className="text-neutral-700 w-8 select-none">7</span>
<span className="text-neutral-300">});</span>
</div>
<div className="flex">
<span className="text-neutral-700 w-8 select-none">8</span>
</div>
<div className="flex">
<span className="text-neutral-700 w-8 select-none">9</span>
<span className="text-neutral-500">// Deploying autonomous agents...</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-8">
<span className="text-sm text-neutral-500 font-medium whitespace-nowrap">Trusted by innovators at</span>
<div className="flex flex-wrap items-center justify-center md:justify-end gap-x-12 gap-y-8 grayscale opacity-40">

<span className="text-xl font-semibold tracking-tight text-white">ACME</span>
<span className="text-xl font-bold italic tracking-tighter text-white">Vortex</span>
<span className="text-xl font-medium tracking-widest text-white uppercase text-sm">Sphere</span>
<span className="text-xl font-semibold tracking-tight text-white">NEXUS</span>
<span className="text-xl font-bold tracking-tighter text-white">Hyperion</span>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Core Capabilities</h2>
<p className="text-neutral-400 max-w-xl">We don't just write code. We architect solutions that bridge the gap between traditional software and artificial intelligence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white" icon="solar:cpu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">AI Integration</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Seamlessly embed LLMs and machine learning models into your existing infrastructure. Custom fine-tuning and RAG architectures.
                        </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white" icon="solar:code-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Full-Stack Development</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            End-to-end engineering using modern frameworks (Next.js, Rust, Go). Performance-obsessed and type-safe by default.
                        </p>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white" icon="solar:server-square-cloud-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Cloud Infrastructure</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Serverless architectures, edge computing, and scalable database designs. We build systems that grow with you automatically.
                        </p>
</div>
</div>

<div className="md:col-span-2 group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-colors overflow-hidden flex flex-col md:flex-row items-center gap-8">
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex-1 relative z-10 text-left w-full">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white" icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Enterprise Security</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">
                            Security isn't an afterthought. We implement SOC2 compliant workflows, end-to-end encryption, and rigorous testing for AI safety.
                        </p>
</div>
<div className="flex-1 w-full relative">

<div className="rounded-lg bg-[#050505] border border-white/10 p-4 w-full h-full min-h-[120px] flex flex-col gap-3">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<div className="h-2 w-16 rounded-full bg-neutral-800"></div>
</div>
<div className="h-2 w-3/4 rounded-full bg-neutral-800/50"></div>
<div className="h-2 w-1/2 rounded-full bg-neutral-800/50"></div>
<div className="mt-auto flex items-center justify-between">
<div className="h-6 w-16 rounded bg-indigo-500/10 border border-indigo-500/20 text-[10px] text-indigo-400 flex items-center justify-center">Verified</div>
</div>
</div>
</div>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/30 border border-white/5 hover:border-white/10 transition-colors overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 border border-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-white" icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Data Engineering</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Pipelines that transform raw data into actionable insights. ETL, data warehousing, and real-time analytics.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative bg-neutral-900/20" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-16">
<div className="md:w-1/3">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Our Approach</h2>
<p className="text-neutral-400 mb-8">We utilize an iterative, data-driven methodology to ensure rapid delivery without compromising quality.</p>
<a className="text-white text-sm border-b border-white pb-0.5 hover:text-neutral-300 hover:border-neutral-300 transition-colors" href="#">Read full documentation</a>
</div>
<div className="md:w-2/3 grid gap-8">

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-400 flex items-center justify-center text-xs font-mono group-hover:border-white group-hover:text-white transition-colors">01</div>
<div className="w-px h-full bg-neutral-800 my-2"></div>
</div>
<div className="pb-8">
<h3 className="text-lg font-medium text-white mb-2">Discovery &amp; Architecture</h3>
<p className="text-sm text-neutral-400">We analyze your technical requirements and design a scalable system architecture. We select the optimal AI models for your specific use case.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-400 flex items-center justify-center text-xs font-mono group-hover:border-white group-hover:text-white transition-colors">02</div>
<div className="w-px h-full bg-neutral-800 my-2"></div>
</div>
<div className="pb-8">
<h3 className="text-lg font-medium text-white mb-2">Rapid Development</h3>
<p className="text-sm text-neutral-400">Our senior engineers build the core infrastructure. We employ CI/CD pipelines to ship code daily, keeping you in the loop at every commit.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full border border-neutral-700 bg-neutral-900 text-neutral-400 flex items-center justify-center text-xs font-mono group-hover:border-white group-hover:text-white transition-colors">03</div>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Optimization &amp; Scale</h3>
<p className="text-sm text-neutral-400">Post-launch, we monitor system performance and refine AI outputs. We scale infrastructure based on real-world usage patterns.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to accelerate?</h2>
<p className="text-lg text-neutral-400 mb-10">Stop wrestling with legacy code. Start building intelligent systems.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-all">
                    Start your project
                </button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-neutral-800 text-white text-sm font-medium hover:bg-neutral-900 transition-all">
                    Contact sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white">
<span className="font-mono text-[10px]">/</span>
</div>
<span className="text-white font-medium tracking-tighter">azot.dev</span>
</a>
<p className="text-xs text-neutral-500 leading-relaxed">
                        Pioneering the intersection of software engineering and artificial intelligence.
                    </p>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Services</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">AI Integration</a></li>
<li><a className="hover:text-white transition-colors" href="#">Web Development</a></li>
<li><a className="hover:text-white transition-colors" href="#">Consulting</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<p className="text-xs text-neutral-600">© 2023 azot.dev Inc. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-neutral-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
