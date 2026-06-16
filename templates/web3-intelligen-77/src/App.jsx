import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['"Instrument Serif"', 'serif'],
sans: ['"Manrope"', 'sans-serif'],
mono: ['"Geist Mono"', 'monospace'],
},
colors: {
stone: {
50: '#FBFBF9',
100: '#F5F5F0', // Base Mineral
200: '#EAE8E4', // Borders
300: '#D5D4CE',
800: '#444440',
900: '#1C1C1A', // Ink
}
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        document.addEventListener("DOMContentLoaded", (event) => {
            gsap.registerPlugin(ScrollTrigger);

            // Animate Text on Load is handled by CSS animation classes, here we do scroll reveals
            
            // Reveal Tools
            gsap.from("#tools .group", {
                y: 30,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#tools",
                    start: "top 80%"
                }
            });

            // Reveal Principles
            gsap.from(".border-l", {
                y: 20,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "h2:contains('Principles')",
                    start: "top 80%"
                }
            });
        });

        // Basic CSS Animation for Hero (simulated via JS/Style injection for simplicity)
        const styleSheet = document.createElement("style");
        styleSheet.innerText = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-in {
                animation: fadeIn 1s ease-out forwards;
            }
        `;
        document.head.appendChild(styleSheet);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-noise"></div>

<nav className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 md:py-8 mix-blend-multiply">
<div className="flex justify-between items-center max-w-[1600px] mx-auto">
<a className="flex items-center gap-3 group" href="#">
<div className="w-4 h-4 bg-stone-900 rounded-sm group-hover:bg-stone-600 transition-colors duration-500"></div>
<span className="font-serif text-lg tracking-tight font-medium text-stone-900">Grounded Labs</span>
</a>
<div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-stone-800">
<a className="hover:text-stone-500 transition-colors duration-300" href="#">Index</a>
<a className="hover:text-stone-500 transition-colors duration-300" href="#">Protocol</a>
<a className="hover:text-stone-500 transition-colors duration-300" href="#">Governance</a>
</div>
<div className="flex items-center gap-4">
<button className="font-mono text-xs border border-stone-300 rounded-full px-4 py-2 hover:bg-stone-200 transition-slow">
                    CONNECT_WALLET
                </button>
</div>
</div>
</nav>

<section className="min-h-[80vh] flex flex-col items-center justify-center px-4 pt-32 pb-16 relative">
<div className="max-w-4xl mx-auto text-center z-10">
<div className="inline-flex items-center gap-2 mb-8 opacity-0 animate-in" style={{animationDelay: '0.2s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-stone-400"></span>
<span className="font-mono text-xs uppercase tracking-widest text-stone-500">Public Intelligence Infrastructure</span>
</div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1] text-stone-900 mb-8 opacity-0 animate-in" style={{animationDelay: '0.4s'}}>
                Marketplace — <br/>
<span className="text-stone-500 italic">Tools from the Deep</span>
</h1>
<p className="font-sans text-stone-600 text-sm md:text-base max-w-lg mx-auto leading-relaxed mb-12 opacity-0 animate-in font-light" style={{animationDelay: '0.6s'}}>
                A place to discover, test, and use tools available on Grounded Labs. We will gradually add new modules to the protocol.
            </p>

<div className="max-w-xl mx-auto w-full opacity-0 animate-in" style={{animationDelay: '0.8s'}}>

<div className="relative group mb-6">
<span className="iconify absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" data-icon="lucide:search" data-width="18"></span>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg py-3 pl-12 pr-4 text-sm font-sans text-stone-800 focus:outline-none focus:border-stone-400 focus:ring-0 transition-slow placeholder:text-stone-400 placeholder:font-light" placeholder="Search instrument index..." type="text"/>
</div>

<div className="flex flex-wrap justify-center gap-2 md:gap-3">
<button className="px-4 py-1.5 rounded-full border border-stone-800 bg-stone-800 text-stone-100 text-xs font-medium transition-slow">All</button>
<button className="px-4 py-1.5 rounded-full border border-stone-200 text-stone-500 text-xs font-medium hover:border-stone-400 hover:text-stone-800 transition-slow">Live</button>
<button className="px-4 py-1.5 rounded-full border border-stone-200 text-stone-500 text-xs font-medium hover:border-stone-400 hover:text-stone-800 transition-slow">Analysis</button>
<button className="px-4 py-1.5 rounded-full border border-stone-200 text-stone-500 text-xs font-medium hover:border-stone-400 hover:text-stone-800 transition-slow">Agents</button>
<button className="px-4 py-1.5 rounded-full border border-stone-200 text-stone-500 text-xs font-medium hover:border-stone-400 hover:text-stone-800 transition-slow">Monitoring</button>
</div>
</div>
</div>
</section>

<section className="px-4 md:px-12 py-20 bg-stone-50 border-t border-stone-200" id="tools">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group relative bg-stone-100 border border-stone-200 rounded-xl p-8 hover:border-stone-300 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-slow flex flex-col h-[420px]">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 bg-white">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="flex items-center gap-2 border border-emerald-900/10 bg-emerald-50 px-2 py-1 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></div>
<span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800">Live</span>
</div>
</div>
<div className="mb-auto">
<h3 className="font-serif text-2xl text-stone-900 mb-3 tracking-tight group-hover:text-stone-700 transition-colors">Smart Contract Auditor</h3>
<p className="text-sm font-light text-stone-600 leading-relaxed">
                            Autonomous verification of on-chain logic. Analyzes bytecode for vulnerabilities against the Grounded vulnerability database.
                        </p>
</div>
<div className="mt-8 pt-6 border-t border-stone-200 flex flex-col gap-4">
<div className="flex gap-2 flex-wrap">
<span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono border border-stone-200 px-2 py-0.5 rounded-md">Security</span>
<span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono border border-stone-200 px-2 py-0.5 rounded-md">Solidity</span>
</div>
<button className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-widest text-stone-900 border border-stone-300 px-4 py-3 rounded-lg hover:bg-stone-200 transition-slow group-hover:border-stone-400">
<span>Open Tool</span>
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="14"></span>
</button>
</div>
</div>

<div className="group relative bg-stone-100 border border-stone-200 rounded-xl p-8 hover:border-stone-300 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-slow flex flex-col h-[420px]">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 bg-white">
<span className="iconify" data-icon="lucide:file-code-2" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="flex items-center gap-2 border border-emerald-900/10 bg-emerald-50 px-2 py-1 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></div>
<span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800">Live</span>
</div>
</div>
<div className="mb-auto">
<h3 className="font-serif text-2xl text-stone-900 mb-3 tracking-tight group-hover:text-stone-700 transition-colors">Contract Simplifier</h3>
<p className="text-sm font-light text-stone-600 leading-relaxed">
                            Deconstructs complex smart contract interactions into human-readable narratives. Reduces cognitive load for reviewers.
                        </p>
</div>
<div className="mt-8 pt-6 border-t border-stone-200 flex flex-col gap-4">
<div className="flex gap-2 flex-wrap">
<span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono border border-stone-200 px-2 py-0.5 rounded-md">Analysis</span>
<span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono border border-stone-200 px-2 py-0.5 rounded-md">UX</span>
</div>
<button className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-widest text-stone-900 border border-stone-300 px-4 py-3 rounded-lg hover:bg-stone-200 transition-slow group-hover:border-stone-400">
<span>Open Tool</span>
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="14"></span>
</button>
</div>
</div>

<div className="group relative bg-stone-100 border border-stone-200 rounded-xl p-8 hover:border-stone-300 hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-slow flex flex-col h-[420px]">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center text-stone-600 bg-white">
<span className="iconify" data-icon="lucide:scale" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="flex items-center gap-2 border border-emerald-900/10 bg-emerald-50 px-2 py-1 rounded-full">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></div>
<span className="text-[10px] font-mono uppercase tracking-wider text-emerald-800">Live</span>
</div>
</div>
<div className="mb-auto">
<h3 className="font-serif text-2xl text-stone-900 mb-3 tracking-tight group-hover:text-stone-700 transition-colors">Response Comparator</h3>
<p className="text-sm font-light text-stone-600 leading-relaxed">
                            Side-by-side analysis of stochastic outputs. Measures drift, hallucination frequency, and sentiment alignment across models.
                        </p>
</div>
<div className="mt-8 pt-6 border-t border-stone-200 flex flex-col gap-4">
<div className="flex gap-2 flex-wrap">
<span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono border border-stone-200 px-2 py-0.5 rounded-md">LLM Ops</span>
<span className="text-[10px] uppercase tracking-wider text-stone-400 font-mono border border-stone-200 px-2 py-0.5 rounded-md">QA</span>
</div>
<button className="w-full flex items-center justify-between text-xs font-mono uppercase tracking-widest text-stone-900 border border-stone-300 px-4 py-3 rounded-lg hover:bg-stone-200 transition-slow group-hover:border-stone-400">
<span>Open Tool</span>
<span className="iconify" data-icon="lucide:arrow-up-right" data-width="14"></span>
</button>
</div>
</div>

<div className="group relative bg-stone-50 border border-stone-200 rounded-xl p-8 opacity-80 hover:opacity-100 transition-slow flex flex-col h-[420px]">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 bg-transparent">
<span className="iconify" data-icon="lucide:microscope" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="flex items-center gap-2 border border-stone-200 bg-stone-100 px-2 py-1 rounded-full">
<span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Developing</span>
</div>
</div>
<div className="mb-auto">
<h3 className="font-serif text-2xl text-stone-500 mb-3 tracking-tight">Grounded Inspector</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed">
                            Deep packet inspection for agentic workflows. Trace the decision tree of autonomous agents in real-time.
                        </p>
</div>
<div className="mt-8 pt-6 border-t border-stone-200/50 flex flex-col gap-4">
<div className="flex gap-2 flex-wrap">
<span className="text-[10px] uppercase tracking-wider text-stone-300 font-mono border border-stone-200 px-2 py-0.5 rounded-md">Observability</span>
</div>
<div className="w-full flex items-center justify-center text-xs font-mono uppercase tracking-widest text-stone-400 border border-stone-200 border-dashed px-4 py-3 rounded-lg cursor-not-allowed">
<span>Coming Soon</span>
</div>
</div>
</div>

<div className="group relative bg-stone-50 border border-stone-200 rounded-xl p-8 opacity-80 hover:opacity-100 transition-slow flex flex-col h-[420px]">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 bg-transparent">
<span className="iconify" data-icon="lucide:activity" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="flex items-center gap-2 border border-stone-200 bg-stone-100 px-2 py-1 rounded-full">
<span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Developing</span>
</div>
</div>
<div className="mb-auto">
<h3 className="font-serif text-2xl text-stone-500 mb-3 tracking-tight">Current Monitor</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed">
                            Protocol health visualization. Tracks liquidity flows and governance pulse across the Grounded ecosystem.
                        </p>
</div>
<div className="mt-8 pt-6 border-t border-stone-200/50 flex flex-col gap-4">
<div className="flex gap-2 flex-wrap">
<span className="text-[10px] uppercase tracking-wider text-stone-300 font-mono border border-stone-200 px-2 py-0.5 rounded-md">Metrics</span>
</div>
<div className="w-full flex items-center justify-center text-xs font-mono uppercase tracking-widest text-stone-400 border border-stone-200 border-dashed px-4 py-3 rounded-lg cursor-not-allowed">
<span>Coming Soon</span>
</div>
</div>
</div>

<div className="group relative bg-stone-50 border border-stone-200 rounded-xl p-8 opacity-80 hover:opacity-100 transition-slow flex flex-col h-[420px]">
<div className="flex justify-between items-start mb-6">
<div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 bg-transparent">
<span className="iconify" data-icon="lucide:terminal" data-strokeWidth="1.5" data-width="18"></span>
</div>
<div className="flex items-center gap-2 border border-stone-200 bg-stone-100 px-2 py-1 rounded-full">
<span className="text-[10px] font-mono uppercase tracking-wider text-stone-500">Developing</span>
</div>
</div>
<div className="mb-auto">
<h3 className="font-serif text-2xl text-stone-500 mb-3 tracking-tight">Echo Prompt Lab</h3>
<p className="text-sm font-light text-stone-500 leading-relaxed">
                            Isolated environment for testing prompt injection resilience and recursive self-improvement loops.
                        </p>
</div>
<div className="mt-8 pt-6 border-t border-stone-200/50 flex flex-col gap-4">
<div className="flex gap-2 flex-wrap">
<span className="text-[10px] uppercase tracking-wider text-stone-300 font-mono border border-stone-200 px-2 py-0.5 rounded-md">Research</span>
</div>
<div className="w-full flex items-center justify-center text-xs font-mono uppercase tracking-widest text-stone-400 border border-stone-200 border-dashed px-4 py-3 rounded-lg cursor-not-allowed">
<span>Coming Soon</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-12 bg-stone-100">
<div className="max-w-[1600px] mx-auto">
<h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-16 tracking-tight">The Principles We Sail By</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">

<div className="p-8 border-l border-stone-300 hover:bg-stone-200/50 transition-slow cursor-default">
<span className="font-mono text-xs text-stone-400 block mb-4">01</span>
<h3 className="font-sans font-medium text-lg text-stone-900 mb-2">Open by Design</h3>
<p className="text-xs md:text-sm font-light text-stone-600 leading-relaxed">
                        Intelligence should not be siloed. We build transparently, ensuring every module is auditable.
                    </p>
</div>

<div className="p-8 border-l border-stone-300 hover:bg-stone-200/50 transition-slow cursor-default">
<span className="font-mono text-xs text-stone-400 block mb-4">02</span>
<h3 className="font-sans font-medium text-lg text-stone-900 mb-2">Rewarding Depth</h3>
<p className="text-xs md:text-sm font-light text-stone-600 leading-relaxed">
                        We prioritize complex, deep utility over superficial growth mechanics or engagement loops.
                    </p>
</div>

<div className="p-8 border-l border-stone-300 hover:bg-stone-200/50 transition-slow cursor-default">
<span className="font-mono text-xs text-stone-400 block mb-4">03</span>
<h3 className="font-sans font-medium text-lg text-stone-900 mb-2">Living Ocean</h3>
<p className="text-xs md:text-sm font-light text-stone-600 leading-relaxed">
                        The protocol adapts. Static systems die; we build infrastructure that evolves with the tides.
                    </p>
</div>

<div className="p-8 border-l border-stone-300 border-r hover:bg-stone-200/50 transition-slow cursor-default">
<span className="font-mono text-xs text-stone-400 block mb-4">04</span>
<h3 className="font-sans font-medium text-lg text-stone-900 mb-2">Fair Tides</h3>
<p className="text-xs md:text-sm font-light text-stone-600 leading-relaxed">
                        Access is universal. We design to lower barriers for scientific and verifiable truth.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 px-4 md:px-12 border-t border-b border-stone-200 bg-stone-50">
<div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
<div className="w-full md:w-auto">
<h2 className="font-serif text-3xl tracking-tight text-stone-900">Protocol Tides</h2>
<p className="font-mono text-xs text-stone-500 mt-2">Live Network Metrics</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 w-full md:w-auto">
<div className="text-center md:text-left">
<div className="font-mono text-3xl md:text-4xl text-stone-900 mb-1">3</div>
<div className="text-[10px] uppercase tracking-widest text-stone-500">Tools Live</div>
</div>
<div className="text-center md:text-left">
<div className="font-mono text-3xl md:text-4xl text-stone-900 mb-1">842</div>
<div className="text-[10px] uppercase tracking-widest text-stone-500">Active Users</div>
</div>
<div className="text-center md:text-left">
<div className="font-mono text-3xl md:text-4xl text-stone-900 mb-1">12k</div>
<div className="text-[10px] uppercase tracking-widest text-stone-500">Flows Tracked</div>
</div>
<div className="text-center md:text-left">
<div className="flex items-center justify-center md:justify-start gap-2 mb-1 h-[40px]">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
<span className="font-sans font-medium text-lg text-stone-900">Stable</span>
</div>
<div className="text-[10px] uppercase tracking-widest text-stone-500">Governance</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-12 bg-stone-100 overflow-hidden">
<div className="max-w-[1600px] mx-auto">
<h2 className="font-serif text-3xl text-stone-900 mb-16 tracking-tight text-center md:text-left">Tides Roadmap</h2>
<div className="relative mt-12">

<div className="absolute top-[7px] left-0 w-full h-[1px] bg-stone-300 hidden md:block"></div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">

<div className="relative group">
<div className="w-3.5 h-3.5 bg-stone-900 rounded-full mb-6 relative z-10 hidden md:block border-4 border-stone-100"></div>
<span className="font-mono text-xs text-stone-500 mb-2 block">Phase I</span>
<h4 className="font-serif text-xl text-stone-900 mb-3">Emergence</h4>
<p className="text-sm font-light text-stone-600">Initial deployment of core auditing instruments. Establishing the bedrock.</p>
<span className="inline-block mt-4 text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">COMPLETED</span>
</div>

<div className="relative group">
<div className="w-3.5 h-3.5 bg-stone-400 rounded-full mb-6 relative z-10 hidden md:block border-4 border-stone-100 group-hover:bg-stone-600 transition-colors"></div>
<span className="font-mono text-xs text-stone-500 mb-2 block">Phase II</span>
<h4 className="font-serif text-xl text-stone-900 mb-3">Currents</h4>
<p className="text-sm font-light text-stone-600">Integration of AI response comparison and monitoring tools. The water moves.</p>
<span className="inline-block mt-4 text-[10px] font-mono text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-100">IN PROGRESS</span>
</div>

<div className="relative group opacity-60">
<div className="w-3.5 h-3.5 bg-stone-200 rounded-full mb-6 relative z-10 hidden md:block border-4 border-stone-100"></div>
<span className="font-mono text-xs text-stone-500 mb-2 block">Phase III</span>
<h4 className="font-serif text-xl text-stone-900 mb-3">Depth</h4>
<p className="text-sm font-light text-stone-600">Deep packet inspection for autonomous agents. Seeing the unseen.</p>
</div>

<div className="relative group opacity-40">
<div className="w-3.5 h-3.5 bg-stone-200 rounded-full mb-6 relative z-10 hidden md:block border-4 border-stone-100"></div>
<span className="font-mono text-xs text-stone-500 mb-2 block">Phase IV</span>
<h4 className="font-serif text-xl text-stone-900 mb-3">Open Ocean</h4>
<p className="text-sm font-light text-stone-600">Full protocol decentralization and community governance.</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-16 px-4 md:px-12 border-t border-stone-800">
<div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1">
<span className="font-serif text-2xl text-stone-100 tracking-tight block mb-6">Grounded Labs</span>
<p className="text-xs font-light max-w-[200px] leading-relaxed text-stone-500">
                    A public intelligence infrastructure. Building tools for the verification of truth in the age of AI.
                </p>
</div>
<div className="col-span-1">
<h5 className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-6">Coordinates</h5>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-stone-200 transition-colors" href="#">Manifesto</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">Whitepaper</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">Governance</a></li>
</ul>
</div>
<div className="col-span-1">
<h5 className="font-mono text-[10px] uppercase tracking-widest text-stone-500 mb-6">Frequencies</h5>
<ul className="space-y-3 text-sm font-light">
<li><a className="hover:text-stone-200 transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">GitHub</a></li>
<li><a className="hover:text-stone-200 transition-colors" href="#">Discord</a></li>
</ul>
</div>
<div className="col-span-1 flex flex-col justify-end">
<div className="text-[10px] font-mono text-stone-600 uppercase tracking-widest text-right">
                    © 2024 Grounded Labs <br/>
                    All systems nominal
                </div>
</div>
</div>
</footer>



    </>
  );
}
