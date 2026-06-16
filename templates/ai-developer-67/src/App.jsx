import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
colors: {
brand: {
50: '#f0f9ff',
100: '#e0f2fe',
300: '#7dd3fc',
400: '#38bdf8', // Cyan
500: '#0ea5e9',
600: '#0284c7',
900: '#0c4a6e',
950: '#082f49',
glow: '#38bdf8'
},
dark: {
950: '#020202', // Deeper black
900: '#050505',
800: '#0A0A0A',
700: '#121212',
glass: 'rgba(255, 255, 255, 0.03)'
}
},
backgroundImage: {
'glow-gradient': 'radial-gradient(circle at 50% 50%, rgba(56, 189, 248, 0.15) 0%, rgba(0, 0, 0, 0) 50%)',
'grid-pattern': "linear-gradient(to right, #262626 1px, transparent 1px), linear-gradient(to bottom, #262626 1px, transparent 1px)",
'shimmer': 'linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)',
},
animation: {
'float': 'float 8s ease-in-out infinite',
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'blink-caret': 'blink-caret .75s step-end infinite',
'scanline': 'scanline 8s linear infinite',
'shimmer': 'shimmer 3s infinite linear',
'glow-pulse': 'glow-pulse 3s ease-in-out infinite alternate',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
'50%': { transform: 'translateY(-15px) rotate(0.5deg)' },
},
'blink-caret': {
'from, to': { borderColor: 'transparent', opacity: '0' },
'50%': { borderColor: '#38bdf8', opacity: '1' },
},
scanline: {
'0%': { transform: 'translateY(-100%)' },
'100%': { transform: 'translateY(100%)' }
},
shimmer: {
'0%': { backgroundPosition: '200% 0' },
'100%': { backgroundPosition: '-200% 0' }
},
'glow-pulse': {
'0%': { boxShadow: '0 0 20px -5px rgba(56, 189, 248, 0.1)' },
'100%': { boxShadow: '0 0 30px 5px rgba(56, 189, 248, 0.3)' }
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020202]/70 backdrop-blur-xl supports-[backdrop-filter]:bg-[#020202]/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 bg-brand-500 rounded-lg blur opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
<div className="relative w-full h-full rounded-lg bg-gradient-to-br from-gray-900 to-black border border-white/10 flex items-center justify-center text-white z-10">
<span className="font-bold font-mono text-xs tracking-tighter text-brand-400">MJ</span>
</div>
</div>
<span className="text-white font-medium tracking-tight text-sm group-hover:text-brand-400 transition-colors">MJStudio</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Pricing</a>
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Docs</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Sign In</a>
<a className="relative inline-flex h-8 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" href="#">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-4 py-1 text-xs font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition-colors">
                        Get Access
                    </span>
</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none"></div>
<div className="absolute inset-0 bg-grid -z-20"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="space-y-8 z-10 relative">

<div className="inline-flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 backdrop-blur-md">
<span className="bg-brand-500/20 text-brand-300 text-[10px] font-bold px-1.5 py-0.5 rounded border border-brand-500/20 uppercase tracking-wider">New</span>
<span className="text-xs text-brand-100 tracking-wide font-medium">Engine v2.0 Released</span>
<iconify-icon className="text-brand-400" icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
</div>
<h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white leading-[1.1]">
                    Build the future of <br/>
<span className="text-gradient-brand relative inline-block">
                        intelligence.
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-500 opacity-30" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</span>
</h1>
<p className="text-lg text-slate-400 max-w-lg leading-relaxed font-light">
                    The complete futuristic developer platform for building, testing, and deploying AI-powered applications at the edge. <span className="text-white">Zero config. Infinite scale.</span>
</p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<button className="group relative px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-lg overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
<span className="relative z-10 flex items-center gap-2">
                            Start Deploying
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</span>
</button>
<button className="px-8 py-3.5 border border-white/10 text-slate-300 text-sm font-medium rounded-lg hover:bg-white/5 hover:text-white transition-colors bg-white/[0.02]">
                        Read Documentation
                    </button>
</div>
<div className="pt-6 flex items-center gap-6 text-xs text-slate-500 font-mono">
<span className="flex items-center gap-1.5">
<iconify-icon className="text-brand-400" icon="solar:shield-check-linear"></iconify-icon> SOC2 Compliant
                    </span>
<span className="flex items-center gap-1.5">
<iconify-icon className="text-brand-400" icon="solar:server-square-linear"></iconify-icon> Edge Network
                    </span>
</div>
</div>

<div className="relative z-10 perspective-1000">
<div className="absolute -inset-4 bg-brand-500/20 rounded-full blur-[60px] animate-pulse-slow"></div>

<div className="relative w-full bg-[#050505] rounded-xl border border-white/10 shadow-2xl overflow-hidden animate-float ring-1 ring-white/5">

<div className="absolute inset-0 bg-gradient-to-tr from-brand-500/10 via-transparent to-purple-500/10 pointer-events-none"></div>

<div className="flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-[#0A0A0A]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#FF5F56]/80 border border-transparent hover:border-black/20"></div>
<div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80 border border-transparent hover:border-black/20"></div>
<div className="w-3 h-3 rounded-full bg-[#27C93F]/80 border border-transparent hover:border-black/20"></div>
</div>
<div className="mx-auto text-[10px] text-slate-500 font-mono tracking-widest uppercase opacity-70">mjstudio.config.ts</div>
</div>

<div className="p-6 font-mono text-xs sm:text-sm leading-7 text-slate-400 bg-black/50 backdrop-blur-sm relative">
<div className="absolute right-0 top-0 p-6 pointer-events-none">
<iconify-icon className="text-white/5 text-9xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<div className="flex">
<span className="w-8 text-slate-700 select-none text-right mr-4">1</span>
<span className="text-purple-400">import</span> <span className="text-white ml-2">{ MJStudio }</span> <span className="text-purple-400 ml-2">from</span> <span className="text-emerald-400 ml-2">'@mj/sdk'</span>;
                        </div>
<div className="flex">
<span className="w-8 text-slate-700 select-none text-right mr-4">2</span>
</div>
<div className="flex">
<span className="w-8 text-slate-700 select-none text-right mr-4">3</span>
<span className="text-purple-400">export</span> <span className="text-purple-400 ml-2">default</span> <span className="text-yellow-200 ml-2">defineConfig</span>({
                        </div>
<div className="flex bg-brand-500/10 -mx-6 px-6 border-l-2 border-brand-400">
<span className="w-8 text-slate-700 select-none text-right mr-4">4</span>
<span className="ml-4 text-brand-300">runtime:</span> <span className="text-emerald-400 ml-2">'edge-global'</span>,
                        </div>
<div className="flex">
<span className="w-8 text-slate-700 select-none text-right mr-4">5</span>
<span className="ml-4 text-brand-300">aiModel:</span> <span className="text-emerald-400 ml-2">'gpt-4-turbo'</span>,
                        </div>
<div className="flex">
<span className="w-8 text-slate-700 select-none text-right mr-4">6</span>
<span className="ml-4 text-brand-300">scale:</span> <span className="text-purple-400 ml-2">true</span>,
                        </div>
<div className="flex">
<span className="w-8 text-slate-700 select-none text-right mr-4">7</span>
<span>});</span>
</div>
<div className="flex mt-2">
<span className="w-8 text-slate-700 select-none text-right mr-4">8</span>
<span className="text-slate-600">// Deploying to 24 regions...</span>
</div>
<div className="flex mt-1">
<span className="w-8 text-slate-700 select-none text-right mr-4">9</span>
<span className="inline-block w-2 h-5 bg-brand-400 animate-blink-caret align-middle shadow-[0_0_10px_#38bdf8]"></span>
</div>
</div>
</div>

<div className="absolute -right-8 top-20 glass-panel p-3 rounded-lg animate-float" style={{animationDelay: '1s'}}>
<iconify-icon icon="logos:react" width="24"></iconify-icon>
</div>
<div className="absolute -left-6 bottom-20 glass-panel p-3 rounded-lg animate-float" style={{animationDelay: '2s'}}>
<iconify-icon icon="logos:python" width="24"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-dark-900">
<div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-6">
                    Infrastructure for the <span className="text-gradient-brand">Bold</span>
</h2>
<p className="text-slate-400 text-lg">
                    Experience a development environment that adapts to your workflow. Real-time collaboration, instant previews, and AI-driven refactoring.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity duration-500 scale-150">
<iconify-icon icon="solar:graph-up-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<div className="w-12 h-12 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-400 mb-6 shadow-[0_0_15px_-3px_rgba(56,189,248,0.3)]">
<iconify-icon icon="solar:rocket-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-2">Instant Edge Deployments</h3>
<p className="text-slate-400 max-w-sm">Push to git and we handle the rest. Your code is replicated across 35+ global edge regions in milliseconds.</p>
</div>

<div className="flex items-center gap-2 mt-8">
<span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-[10px] font-mono border border-green-500/20">US-EAST</span>
<div className="h-px flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
<span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-[10px] font-mono border border-green-500/20">EU-WEST</span>
<div className="h-px flex-1 bg-gradient-to-r from-green-500/50 to-transparent"></div>
<span className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-[10px] font-mono border border-green-500/20">ASIA-NE</span>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-6">
<iconify-icon icon="solar:lock-password-unlocked-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-2">Enterprise Security</h3>
<p className="text-sm text-slate-400 mb-6">Automated penetration testing and SOC2 Type II compliance built-in.</p>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></div>
<div className="w-2 h-2 rounded-full bg-purple-500/50"></div>
<div className="w-2 h-2 rounded-full bg-purple-500/20"></div>
</div>
</div>
</div>

<div className="glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6">
<iconify-icon icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl text-white font-semibold tracking-tight mb-2">Serverless Storage</h3>
<p className="text-sm text-slate-400">Scale from 0 to 10PB without managing a single instance.</p>
</div>

<div className="absolute bottom-0 left-0 right-0 h-16 flex items-end gap-1 px-8 pb-8 opacity-50">
<div className="w-1/5 bg-emerald-500/20 h-[30%] rounded-t-sm"></div>
<div className="w-1/5 bg-emerald-500/40 h-[50%] rounded-t-sm"></div>
<div className="w-1/5 bg-emerald-500/60 h-[40%] rounded-t-sm"></div>
<div className="w-1/5 bg-emerald-500/80 h-[80%] rounded-t-sm"></div>
<div className="w-1/5 bg-emerald-500 h-[70%] rounded-t-sm"></div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-8 relative overflow-hidden group flex items-center">
<div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-500/20 rounded-full blur-[80px]"></div>
<div className="grid md:grid-cols-2 gap-8 items-center w-full z-10">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/30 bg-brand-500/10 backdrop-blur-sm mb-6">
<iconify-icon className="text-brand-400" icon="solar:stars-linear"></iconify-icon>
<span className="text-xs font-medium text-brand-300">MJ Copilot 2.0</span>
</div>
<h3 className="text-2xl text-white font-semibold tracking-tight mb-3">Your AI Pair Programmer</h3>
<p className="text-slate-400">Context-aware code generation that understands your entire repository structure.</p>
</div>

<div className="bg-black/40 border border-white/10 rounded-xl p-4 font-mono text-xs shadow-inner">
<div className="flex gap-3 mb-3">
<div className="w-6 h-6 rounded bg-slate-700 flex-shrink-0 flex items-center justify-center text-white text-[10px]">U</div>
<div className="text-slate-300 py-1">Optimize the image loader for mobile?</div>
</div>
<div className="flex gap-3">
<div className="w-6 h-6 rounded bg-brand-600 flex-shrink-0 flex items-center justify-center text-white text-[10px]">AI</div>
<div className="text-brand-100 py-1">
<p className="mb-2">Using <code className="text-brand-400 bg-brand-900/30 px-1 rounded">next/image</code> with responsive sizes:</p>
<div className="text-slate-500 opacity-70">
                                        &lt;Image sizes="(max-width: 768px) 100vw..." /&gt;
                                    </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#010101] border-y border-white/5 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-20 bg-[length:100%_2px,3px_100%] pointer-events-none mix-blend-overlay"></div>
<div className="absolute inset-0 bg-green-500/5 animate-scanline h-[20%] w-full blur-xl opacity-10 pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-30">
<div className="flex items-center justify-between mb-8 border-b border-emerald-500/20 pb-4">
<div className="flex items-center gap-3">
<div className="relative w-3 h-3">
<div className="absolute inset-0 bg-emerald-500 rounded-full animate-ping opacity-75"></div>
<div className="relative w-3 h-3 bg-emerald-500 rounded-full"></div>
</div>
<h2 className="text-sm font-mono text-emerald-400 tracking-widest uppercase">
                        System Activity
                    </h2>
</div>
<span className="text-xs font-mono text-emerald-500/40">LIVE_FEED_V.9.2</span>
</div>
<div className="font-mono text-xs sm:text-sm space-y-3">

<div className="flex flex-col md:flex-row gap-2 md:gap-8 opacity-100 border-l-2 border-emerald-500/50 pl-4 transition-all hover:bg-emerald-900/10 py-1">
<span className="text-emerald-500/50 whitespace-nowrap min-w-[150px]">[10:41:02.402]</span>
<span className="text-emerald-100">Protocol 01: Initializing Secure Runtime Environment... <span className="text-emerald-400 font-bold">SUCCESS</span></span>
</div>

<div className="flex flex-col md:flex-row gap-2 md:gap-8 opacity-80 border-l-2 border-emerald-500/20 pl-4 py-1">
<span className="text-emerald-500/50 whitespace-nowrap min-w-[150px]">[10:41:05.112]</span>
<span className="text-emerald-100">Protocol 02: Deploying to Edge Nodes (24/24)... <span className="text-emerald-400 font-bold">ACTIVE</span></span>
</div>

<div className="flex flex-col md:flex-row gap-2 md:gap-8 opacity-60 border-l-2 border-transparent pl-4 py-1">
<span className="text-emerald-500/50 whitespace-nowrap min-w-[150px]">[10:41:08.840]</span>
<span className="text-emerald-100">Protocol 03: Optimizing Assets via WASM...</span>
</div>

<div className="flex gap-4 mt-6 pl-4 items-center">
<span className="text-emerald-500 font-bold">&gt;_</span>
<span className="w-2 h-5 bg-emerald-400 animate-blink-caret shadow-[0_0_8px_#34d399]"></span>
</div>
</div>
</div>
</section>

<section className="py-20 border-b border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm font-medium text-slate-500 mb-12 uppercase tracking-widest">Seamlessly Integrated</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">

<div className="group transition-all duration-300 hover:scale-110">
<iconify-icon className="text-4xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" icon="logos:vercel"></iconify-icon>
</div>
<div className="group transition-all duration-300 hover:scale-110">
<iconify-icon className="text-4xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" icon="logos:stripe"></iconify-icon>
</div>
<div className="group transition-all duration-300 hover:scale-110">
<iconify-icon className="text-4xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" icon="logos:aws"></iconify-icon>
</div>
<div className="group transition-all duration-300 hover:scale-110">
<iconify-icon className="text-4xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all filter invert" icon="logos:github-icon"></iconify-icon>
</div>
<div className="group transition-all duration-300 hover:scale-110">
<iconify-icon className="text-4xl grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all" icon="logos:supabase-icon"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020202] relative">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center gap-16">
<div className="w-full md:w-1/2">
<h2 className="text-3xl font-bold text-white mb-6">Global Low-Latency Network</h2>
<p className="text-slate-400 mb-8 leading-relaxed">
                        Data flows through our intelligent routing layer, selecting the optimal path in real-time. Visualize your traffic, debug instantly, and scale without friction.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon>
                            Anycast IP routing
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon>
                            DDoS Protection included
                        </li>
<li className="flex items-center gap-3 text-slate-300">
<iconify-icon className="text-brand-500" icon="solar:check-circle-bold"></iconify-icon>
                            Automatic Failover
                        </li>
</ul>
</div>
<div className="w-full md:w-1/2 relative">

<div className="aspect-square rounded-full border border-white/10 relative flex items-center justify-center bg-white/[0.01]">

<div className="absolute inset-4 rounded-full border border-white/5 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-16 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-32 rounded-full border border-brand-500/20 shadow-[0_0_30px_rgba(56,189,248,0.2)] animate-pulse-slow"></div>

<div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-500 to-indigo-600 blur-md opacity-50"></div>
<div className="absolute w-20 h-20 rounded-full bg-white flex items-center justify-center z-10 shadow-2xl">
<iconify-icon className="text-brand-900 text-4xl" icon="solar:global-linear"></iconify-icon>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 w-6 h-6 bg-[#020202] border border-brand-500 rounded-full flex items-center justify-center shadow-[0_0_15px_#0ea5e9]">
<div className="w-2 h-2 bg-brand-400 rounded-full"></div>
</div>
<div className="absolute bottom-10 right-10 w-4 h-4 bg-purple-500 rounded-full blur-[2px]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 bg-brand-900/10 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">Ready to ship?</h2>
<p className="text-lg text-slate-400 mb-10">Join thousands of developers building the future today.</p>
<form className="max-w-md mx-auto relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative flex bg-black rounded-lg p-1 border border-white/10">
<input className="flex-grow bg-transparent px-4 py-3 text-white placeholder-slate-600 focus:outline-none text-sm font-medium" placeholder="dev@company.com" type="email"/>
<button className="bg-white text-black font-bold text-sm px-6 py-2 rounded hover:bg-slate-200 transition-colors" type="submit">
                        Get Access
                    </button>
</div>
</form>
<p className="mt-6 text-[10px] text-slate-500 uppercase tracking-widest font-mono">Limited spots available for v2.0 beta</p>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
<div className="col-span-2 lg:col-span-2 pr-8">
<div className="flex items-center gap-2 mb-6 text-white">
<div className="w-6 h-6 rounded bg-white flex items-center justify-center text-[10px] font-bold font-mono text-black">MJ</div>
<span className="font-bold tracking-tight">MJStudio</span>
</div>
<p className="text-sm text-slate-500 leading-relaxed">
                        The futuristic development platform for the AI age. <br/>Designed in California, deployed globally.
                    </p>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Product</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Resources</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-6">Company</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Legal</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-6">
<div className="text-xs text-slate-600 font-medium">
                    © 2024 MJStudio Inc. All rights reserved.
                </div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:twitter" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:github" width="20"></iconify-icon></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><iconify-icon icon="mdi:discord" width="20"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
