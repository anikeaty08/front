import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Geist', 'sans-serif'],
},
colors: {
background: '#09090b', // Zinc 950
surface: '#18181b',    // Zinc 900
border: '#27272a',     // Zinc 800
primary: '#fafafa',    // Zinc 50
secondary: '#a1a1aa',  // Zinc 400
accent: '#3b82f6',     // Blue 500
},
animation: {
'marquee': 'marquee 40s linear infinite',
'fade-up': 'fadeUp 0.8s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
},
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Spotlight Effect Logic
        function handleSpotlight(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
            e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-900/10 rounded-full blur-[120px]"></div>
<div className="bg-grid absolute inset-0 w-full h-full"></div>
</div>
<div className="relative z-10 flex flex-col lg:flex-row min-h-screen max-w-[1800px] mx-auto">

<aside className="lg:w-72 lg:fixed lg:h-screen flex flex-col z-50 glass-panel lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:border-r border-border w-full p-8 justify-between">
<div className="space-y-12">
<div className="animate-fade-up" style={{animationDelay: '0.1s'}}>
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white to-zinc-400 flex items-center justify-center text-black">
<i className="w-5 h-5 fill-current" data-lucide="zap"></i>
</div>
<span className="text-xl tracking-tight font-semibold text-white group-hover:text-blue-400 transition-colors">
                            SpeedWins<span className="text-zinc-500">.ai</span>
</span>
</a>
</div>
<nav className="space-y-2 animate-fade-up" style={{animationDelay: '0.2s'}}>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-white bg-zinc-800/50 border border-zinc-700/50" href="#">
<i className="w-4 h-4" data-lucide="home"></i> Home
                    </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/30 transition-all" href="#solutions">
<i className="w-4 h-4" data-lucide="cpu"></i> Solutions
                    </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/30 transition-all" href="#methodology">
<i className="w-4 h-4" data-lucide="git-merge"></i> Methodology
                    </a>
<a className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-800/30 transition-all" href="#results">
<i className="w-4 h-4" data-lucide="bar-chart-3"></i> Results
                    </a>
</nav>
</div>
<div className="hidden lg:block space-y-6 animate-fade-up" style={{animationDelay: '0.3s'}}>
<div className="p-4 rounded-xl bg-gradient-to-br from-zinc-900 to-black border border-zinc-800">
<p className="text-xs text-zinc-400 mb-3">Ready to automate?</p>
<button className="w-full py-2.5 px-4 rounded-lg bg-white text-black text-xs font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                        Book Strategy Call <i className="w-3 h-3" data-lucide="arrow-right"></i>
</button>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs text-zinc-500 font-mono">SYSTEMS OPERATIONAL</span>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-72 p-6 lg:p-16 flex flex-col gap-24 overflow-hidden">

<section className="min-h-[80vh] flex flex-col justify-center gap-10 pt-10">
<div className="animate-fade-up max-w-4xl space-y-8" style={{animationDelay: '0.4s'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-900/50 bg-blue-950/20 text-blue-400 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Accepting New Enterprise Partners
                    </div>
<h1 className="text-5xl lg:text-8xl font-semibold tracking-tighter leading-[0.9]">
                        AI that actually <br/>
<span className="text-gradient-blue">ships code.</span>
</h1>
<p className="text-xl text-zinc-400 font-light max-w-2xl leading-relaxed">
                        SpeedWins AI is not theoretical. We implement real-world, production-ready AI agents and workflows that automate operations and unlock measurable business wins.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 items-start">
<button className="group relative px-8 py-4 bg-white text-black rounded-full font-medium text-base hover:bg-zinc-200 transition-all flex items-center gap-2">
                            Book a Strategy Call
                            <i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right"></i>
</button>
<button className="px-8 py-4 bg-transparent border border-zinc-700 text-white rounded-full font-medium text-base hover:border-zinc-500 hover:bg-zinc-900 transition-all">
                            See Use Cases
                        </button>
</div>
</div>

<div className="w-full h-64 lg:h-96 rounded-3xl border border-zinc-800 bg-zinc-900/50 overflow-hidden relative spotlight-card animate-fade-up" onmousemove="handleSpotlight(event)" style={{animationDelay: '0.6s'}}>
<div className="absolute inset-0 flex items-center justify-center">
<div className="grid grid-cols-3 gap-8 opacity-40 transform -skew-x-12 scale-110">

<div className="w-24 h-64 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent border-x border-blue-900/30"></div>
<div className="w-24 h-64 bg-gradient-to-b from-transparent via-blue-900/40 to-transparent border-x border-blue-900/30 translate-y-12"></div>
<div className="w-24 h-64 bg-gradient-to-b from-transparent via-blue-900/20 to-transparent border-x border-blue-900/30"></div>
</div>
</div>

<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 backdrop-blur-xl border border-zinc-700 rounded-xl p-6 shadow-2xl w-[90%] max-w-lg">
<div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
<span className="text-xs text-zinc-500 ml-2 font-mono">agent_workflow.py</span>
</div>
<div className="space-y-2 font-mono text-xs">
<div className="flex gap-2"><span className="text-purple-400">from</span> speedwins <span className="text-purple-400">import</span> Agent</div>
<div className="flex gap-2"><span className="text-blue-400">def</span> <span className="text-yellow-300">optimize_workflow</span>(data):</div>
<div className="pl-4 text-zinc-400"># Automate decision logic</div>
<div className="pl-4 flex gap-2">efficiency = Agent.<span className="text-blue-400">analyze</span>(data)</div>
<div className="pl-4 flex gap-2"><span className="text-purple-400">return</span> efficiency.<span className="text-blue-400">deploy()</span></div>
<div className="pt-2 text-green-400">&gt;&gt; Deployment Successful: 400ms</div>
</div>
</div>
</div>

<div className="w-full overflow-hidden border-y border-zinc-800 bg-zinc-900/30 py-8 relative">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10"></div>
<div className="flex w-max animate-marquee gap-16 items-center">

<span className="text-2xl font-semibold text-zinc-600 font-sans tracking-tighter">ACME CORP</span>
<span className="text-2xl font-semibold text-zinc-600 font-sans tracking-tighter">NEXUS AI</span>
<span className="text-2xl font-semibold text-zinc-600 font-sans tracking-tighter">STRATOS</span>
<span className="text-2xl font-semibold text-zinc-600 font-sans tracking-tighter">VERTEX DYNAMICS</span>
<span className="text-2xl font-semibold text-zinc-600 font-sans tracking-tighter">OBLIQUE</span>
<span className="text-2xl font-semibold text-zinc-600 font-sans tracking-tighter">HYPERION</span>

<span className="text-2xl font-semibold text-zinc-600 font-sans tracking-tighter">ACME CORP</span>
<span className="text-2xl font-semibold text-zinc-600 font-sans tracking-tighter">NEXUS AI</span>
<span className="text-2xl font-semibold text-zinc-600 font-sans tracking-tighter">STRATOS</span>
<span className="text-2xl font-semibold text-zinc-600 font-sans tracking-tighter">VERTEX DYNAMICS</span>
</div>
</div>
</section>

<section className="space-y-12" id="solutions">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-800 pb-8">
<div>
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight mb-4">Core Solutions</h2>
<p className="text-zinc-400 max-w-md">We don't sell tools. We sell outcomes powered by intelligent architecture.</p>
</div>
<a className="text-sm font-medium text-white hover:text-blue-400 flex items-center gap-2 transition-colors" href="#">
                        View all capabilities <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl spotlight-card group hover:border-zinc-600 transition-colors" onmousemove="handleSpotlight(event)">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-white" data-lucide="bot"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">AI Agents &amp; Copilots</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Custom-trained LLM agents that handle customer support, internal queries, and autonomous task execution.</p>
</div>

<div className="glass-panel p-8 rounded-2xl spotlight-card group hover:border-zinc-600 transition-colors" onmousemove="handleSpotlight(event)">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-white" data-lucide="workflow"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Workflow Automation</h3>
<p className="text-zinc-400 text-sm leading-relaxed">End-to-end process orchestration. We connect your disparate tools into a unified, self-driving machine.</p>
</div>

<div className="glass-panel p-8 rounded-2xl spotlight-card group hover:border-zinc-600 transition-colors" onmousemove="handleSpotlight(event)">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-white" data-lucide="database"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Intelligent Data Ops</h3>
<p className="text-zinc-400 text-sm leading-relaxed">Turn unstructured data into actionable insights with RAG pipelines and predictive analytics models.</p>
</div>

<div className="glass-panel p-8 rounded-2xl spotlight-card group hover:border-zinc-600 transition-colors" onmousemove="handleSpotlight(event)">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 text-white" data-lucide="layers"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">System Integration</h3>
<p className="text-zinc-400 text-sm leading-relaxed">We integrate state-of-the-art AI into your legacy stack without breaking what currently works.</p>
</div>

<div className="glass-panel p-8 rounded-2xl spotlight-card group hover:border-zinc-600 transition-colors lg:col-span-2 relative overflow-hidden" onmousemove="handleSpotlight(event)">
<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-blue-900/10 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center mb-6">
<i className="w-6 h-6 text-white" data-lucide="lightbulb"></i>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Strategic Consulting</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md">Not sure where to start? We audit your operations to identify high-ROI opportunities for AI intervention before writing a single line of code.</p>
</div>
</div>
</div>
</section>

<section className="py-12" id="methodology">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-5 space-y-6">
<h2 className="text-3xl lg:text-5xl font-medium tracking-tight">From idea to <span className="text-zinc-500">implementation.</span></h2>
<p className="text-zinc-400 text-lg leading-relaxed">We skip the academic theory and focus on the fastest path to production. Our sprint-based methodology ensures you see value in weeks, not months.</p>
<div className="pt-8">
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-sm font-mono text-zinc-300">01</div>
<div className="text-white font-medium">Discover &amp; Audit</div>
</div>
<div className="h-8 w-[1px] bg-zinc-800 ml-5 mb-6"></div>
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-sm font-mono text-zinc-300">02</div>
<div className="text-white font-medium">Design &amp; Prototype</div>
</div>
<div className="h-8 w-[1px] bg-zinc-800 ml-5 mb-6"></div>
<div className="flex items-center gap-4 mb-6">
<div className="w-10 h-10 rounded-full border border-blue-500/50 bg-blue-500/10 flex items-center justify-center text-sm font-mono text-blue-400">03</div>
<div className="text-white font-medium">Build &amp; Deploy</div>
</div>
<div className="h-8 w-[1px] bg-zinc-800 ml-5 mb-6"></div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-sm font-mono text-zinc-300">04</div>
<div className="text-white font-medium">Optimize &amp; Scale</div>
</div>
</div>
</div>
<div className="lg:col-span-7 relative">

<div className="w-full h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden relative shadow-2xl flex flex-col">
<div className="bg-zinc-950 border-b border-zinc-800 px-4 py-3 flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
<div className="w-3 h-3 rounded-full bg-zinc-800"></div>
</div>
<div className="ml-4 text-xs font-mono text-zinc-600">deploy_pipeline.sh</div>
</div>
<div className="p-6 font-mono text-sm space-y-4 flex-1 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10"></div>
<div className="text-zinc-500">&gt; Initializing SpeedWins environment...</div>
<div className="text-zinc-300">&gt; Connecting to Vector DB... <span className="text-green-500">Connected</span></div>
<div className="text-zinc-300">&gt; Training Agent on proprietary data... <span className="text-green-500">Done (1.2s)</span></div>
<div className="text-zinc-300">&gt; Validating workflows...</div>
<div className="p-4 bg-zinc-950/50 border border-zinc-800 rounded-lg mt-4">
<div className="flex justify-between items-center mb-2">
<span className="text-xs text-zinc-400 uppercase">Efficiency Gain</span>
<span className="text-green-400 text-xs">+340%</span>
</div>
<div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
<div className="bg-green-500 h-full w-[85%]"></div>
</div>
</div>
<div className="text-blue-400 mt-4">&gt; System Live. ROI Tracking Enabled.</div>
<div className="animate-pulse inline-block w-2 h-4 bg-blue-500 align-middle ml-1"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-zinc-800" id="results">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
<div className="space-y-2">
<div className="text-4xl lg:text-5xl font-semibold tracking-tighter text-white">10x</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-medium">Faster Execution</div>
</div>
<div className="space-y-2">
<div className="text-4xl lg:text-5xl font-semibold tracking-tighter text-white">40%</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-medium">Cost Reduction</div>
</div>
<div className="space-y-2">
<div className="text-4xl lg:text-5xl font-semibold tracking-tighter text-white">24/7</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-medium">Automated Ops</div>
</div>
<div className="space-y-2">
<div className="text-4xl lg:text-5xl font-semibold tracking-tighter text-white">0%</div>
<div className="text-sm text-zinc-500 uppercase tracking-widest font-medium">Fluff / Theory</div>
</div>
</div>
</section>

<section className="bg-zinc-900/40 rounded-3xl p-8 lg:p-12 border border-zinc-800 relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-12 relative z-10">
<div className="space-y-6">
<h2 className="text-3xl font-medium">Why SpeedWins?</h2>
<p className="text-zinc-400 leading-relaxed">
                            Traditional consultancies deliver 100-page slide decks and generic advice. We deliver code, agents, and systems that start working immediately.
                        </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-500" data-lucide="check-circle"></i>
<span className="text-zinc-200">Business-first mindset, tech-second</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-500" data-lucide="check-circle"></i>
<span className="text-zinc-200">Production-grade security &amp; scalability</span>
</li>
<li className="flex items-center gap-3">
<i className="w-5 h-5 text-blue-500" data-lucide="check-circle"></i>
<span className="text-zinc-200">Fixed timelines, transparent pricing</span>
</li>
</ul>
</div>
<div className="grid grid-cols-1 gap-4">
<div className="bg-black/50 border border-zinc-800 p-6 rounded-xl flex items-start gap-4">
<div className="bg-zinc-800/50 p-2 rounded-lg">
<i className="w-5 h-5 text-zinc-400" data-lucide="clock"></i>
</div>
<div>
<h4 className="text-white font-medium mb-1">Speed of Execution</h4>
<p className="text-sm text-zinc-500">We use pre-built modules to deploy in days.</p>
</div>
</div>
<div className="bg-black/50 border border-zinc-800 p-6 rounded-xl flex items-start gap-4">
<div className="bg-zinc-800/50 p-2 rounded-lg">
<i className="w-5 h-5 text-zinc-400" data-lucide="target"></i>
</div>
<div>
<h4 className="text-white font-medium mb-1">Measurable Wins</h4>
<p className="text-sm text-zinc-500">We define success metrics before we build.</p>
</div>
</div>
</div>
</div>
</section>

<section className="pb-10 pt-20">
<div className="bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-3xl p-10 lg:p-20 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="relative z-10 max-w-2xl mx-auto space-y-8">
<h2 className="text-4xl lg:text-6xl font-semibold tracking-tighter text-white">
                            Ready to move <br/>your business forward?
                        </h2>
<p className="text-zinc-400 text-lg">
                            Stop experimenting. Start shipping. Book a call to discuss how we can automate your operations this quarter.
                        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
<button className="px-8 py-4 bg-white text-black rounded-full font-bold text-base hover:bg-zinc-200 hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                Book Strategy Call
                            </button>
<button className="px-8 py-4 bg-zinc-900 border border-zinc-700 text-white rounded-full font-medium text-base hover:bg-zinc-800 transition-all">
                                View Pricing
                            </button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center mt-12 px-4 text-xs text-zinc-600 font-mono">
<div>© 2025 SpeedWins AI. All rights reserved.</div>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-zinc-400 transition-colors" href="#">Twitter</a>
<a className="hover:text-zinc-400 transition-colors" href="#">LinkedIn</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Email</a>
</div>
</div>
</section>
</main>
</div>



    </>
  );
}
