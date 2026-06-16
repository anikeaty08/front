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
},
colors: {
background: '#050505',
surface: '#0f0f0f',
border: '#1f1f1f',
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
'scroll': 'scroll 20s linear infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



            (function() {
                const tabs = document.querySelectorAll('.feature-tab');
                const images = document.querySelectorAll('.feature-img');
                
                tabs.forEach(tab => {
                    tab.addEventListener('click', () => {
                        // Reset all tabs styles
                        tabs.forEach(t => {
                            t.classList.remove('border-white');
                            t.classList.add('border-white/10');
                            const title = t.querySelector('h3');
                            const desc = t.querySelector('p');
                            title.classList.remove('text-white');
                            title.classList.add('text-zinc-500');
                            desc.classList.remove('text-zinc-400');
                            desc.classList.add('text-zinc-500');
                        });

                        // Active tab styles
                        tab.classList.remove('border-white/10');
                        tab.classList.add('border-white');
                        const activeTitle = tab.querySelector('h3');
                        const activeDesc = tab.querySelector('p');
                        activeTitle.classList.remove('text-zinc-500');
                        activeTitle.classList.add('text-white');
                        activeDesc.classList.remove('text-zinc-500');
                        activeDesc.classList.add('text-zinc-400');

                        // Handle Images
                        const targetId = tab.dataset.target + '-img';
                        images.forEach(img => {
                            if(img.id === targetId) {
                                img.classList.remove('opacity-0', 'pointer-events-none');
                                img.classList.add('opacity-100');
                            } else {
                                img.classList.remove('opacity-100');
                                img.classList.add('opacity-0', 'pointer-events-none');
                            }
                        });
                    });
                });
            })();
        
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full z-50 pt-4 px-4">
<nav className="mx-auto max-w-5xl rounded-full border border-white/10 bg-black/50 backdrop-blur-md px-6 py-3 flex items-center justify-between transition-all duration-300 hover:border-white/20">
<a className="flex items-center gap-2 group" href="#">
<span className="iconify text-white group-hover:rotate-90 transition-transform duration-500" data-icon="lucide:aperture" data-strokeWidth="1.5" data-width="20"></span>
<span className="text-sm font-medium text-white tracking-tight">NEXUS</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#features">Platform</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#changelog">Changelog</a>
<a className="text-xs font-medium text-zinc-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:block text-xs font-medium text-white px-4 py-2 rounded-full hover:bg-white/5 transition-colors" href="#">Log in</a>
<a className="text-xs font-medium text-black bg-white px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#">Start building</a>
</div>
</nav>
</div>

<main className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-4 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="max-w-4xl mx-auto flex flex-col items-center text-center animate-fade-in">

<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-zinc-300 hover:bg-white/10 hover:border-white/20 transition-all mb-8" href="#">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Introducing Nexus Agent 2.0
                <span className="iconify text-zinc-500" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="12"></span>
</a>

<h1 className="text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6 leading-[1.1]">
                The cognitive layer for <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">modern software.</span>
</h1>

<p className="text-lg md:text-xl text-zinc-400 font-light max-w-2xl leading-relaxed mb-10 tracking-tight">
                Integrate adaptive intelligence into your stack. We handle the complexity of models, context, and memory so you can focus on the product.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                    Start deploying
                    <span className="iconify" data-icon="lucide:chevron-right" data-strokeWidth="2" data-width="14"></span>
</button>
<button className="h-10 px-6 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                    Read documentation
                </button>
</div>
</div>

<div className="mt-20 relative max-w-5xl mx-auto rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden aspect-[16/9] shadow-2xl shadow-black/50">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
<div className="w-full h-full flex items-center justify-center text-zinc-800">

<div className="grid grid-cols-6 gap-2 w-full h-full opacity-20 p-8 rotate-3 scale-110">
<div className="bg-white/5 rounded-lg h-full w-full"></div>
<div className="bg-white/5 rounded-lg h-full w-full mt-12"></div>
<div className="bg-white/5 rounded-lg h-full w-full"></div>
<div className="bg-white/5 rounded-lg h-full w-full mt-8"></div>
<div className="bg-white/5 rounded-lg h-full w-full"></div>
<div className="bg-white/5 rounded-lg h-full w-full mt-16"></div>
</div>
</div>
<div className="absolute bottom-8 left-8 z-20 flex items-center gap-4">
<div className="px-4 py-2 rounded-md bg-black/80 border border-white/10 backdrop-blur text-xs font-mono text-zinc-400">
<span className="text-emerald-400">&gt;</span> initializing_core...
                </div>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-black py-10 relative overflow-hidden">
<div className="text-center mb-8">
<p className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Powering the next generation</p>
</div>
<div className="relative flex overflow-x-hidden mask-gradient">
<div className="py-2 animate-scroll whitespace-nowrap flex items-center gap-16 md:gap-32 pr-16 md:pr-32 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:hexagon" data-width="24"></span><span className="font-bold tracking-tight text-lg">Acme Corp</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:triangle" data-width="24"></span><span className="font-bold tracking-tight text-lg">Vertex</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:circle-dashed" data-width="24"></span><span className="font-bold tracking-tight text-lg">Orbit</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:box" data-width="24"></span><span className="font-bold tracking-tight text-lg">Cube</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:layers" data-width="24"></span><span className="font-bold tracking-tight text-lg">Stack</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:command" data-width="24"></span><span className="font-bold tracking-tight text-lg">Command</span></div>

<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:hexagon" data-width="24"></span><span className="font-bold tracking-tight text-lg">Acme Corp</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:triangle" data-width="24"></span><span className="font-bold tracking-tight text-lg">Vertex</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:circle-dashed" data-width="24"></span><span className="font-bold tracking-tight text-lg">Orbit</span></div>
<div className="flex items-center gap-2"><span className="iconify" data-icon="lucide:box" data-width="24"></span><span className="font-bold tracking-tight text-lg">Cube</span></div>
</div>
</div>
</section>

<section className="py-32 px-4 max-w-6xl mx-auto" id="features">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Core Capabilities</h2>
<p className="text-zinc-400 max-w-lg mx-auto text-sm md:text-base font-light">Modular building blocks designed for scalability and precision.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors duration-300 flex flex-col justify-between h-[340px]">
<div>
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white group-hover:text-emerald-400 group-hover:border-emerald-400/20 transition-colors">
<span className="iconify" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Fluid Workflows</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Orchestrate complex tasks across multiple models with visual node-based editing.</p>
</div>
<div className="w-full h-24 mt-4 rounded-lg bg-black/20 border border-white/5 overflow-hidden relative">
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:8px_8px]"></div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors duration-300 flex flex-col justify-between h-[340px]">
<div>
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white group-hover:text-blue-400 group-hover:border-blue-400/20 transition-colors">
<span className="iconify" data-icon="lucide:database-zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Context Retention</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Infinite memory vectors allow your agents to recall details from past interactions instantly.</p>
</div>
<div className="w-full h-24 mt-4 flex items-center gap-2">
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-blue-500/50"></div>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-blue-500/30"></div>
</div>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors duration-300 flex flex-col justify-between h-[340px]">
<div>
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white group-hover:text-purple-400 group-hover:border-purple-400/20 transition-colors">
<span className="iconify" data-icon="lucide:shield-check" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Enterprise Guardrails</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Pre-configured safety checks, PII redaction, and compliance monitoring out of the box.</p>
</div>
<div className="mt-4 flex items-center justify-center">
<span className="iconify text-zinc-800 group-hover:text-purple-500/20 transition-colors" data-icon="lucide:fingerprint" data-width="64"></span>
</div>
</div>

<div className="md:col-span-2 group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors duration-300 flex flex-col md:flex-row items-center gap-8">
<div className="flex-1">
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white group-hover:text-orange-400 group-hover:border-orange-400/20 transition-colors">
<span className="iconify" data-icon="lucide:code-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Developer-First API</h3>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">Designed for DX. Typical integration takes less than 15 minutes. Type-safe SDKs available for TS, Python, and Go.</p>
<a className="text-xs font-medium text-white border-b border-white/20 hover:border-white pb-0.5 transition-all" href="#">View API Reference</a>
</div>
<div className="flex-1 w-full bg-[#0A0A0A] rounded-lg border border-white/5 p-4 font-mono text-xs text-zinc-400">
<div className="flex gap-2 mb-3 border-b border-white/5 pb-2">
<div className="w-2 h-2 rounded-full bg-red-500/20"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
<div className="w-2 h-2 rounded-full bg-green-500/20"></div>
</div>
<p><span className="text-purple-400">const</span> client = <span className="text-blue-400">new</span> Nexus({</p>
<p className="pl-4">apiKey: process.env.KEY,</p>
<p className="pl-4">region: <span className="text-green-400">'us-east'</span></p>
<p>});</p>
<br/>
<p><span className="text-purple-400">await</span> client.reason({</p>
<p className="pl-4">prompt: <span className="text-green-400">"Analyze..."</span></p>
<p>});</p>
</div>
</div>

<div className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 hover:bg-white/[0.04] transition-colors duration-300 flex flex-col justify-between">
<div>
<div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white group-hover:text-pink-400 group-hover:border-pink-400/20 transition-colors">
<span className="iconify" data-icon="lucide:bar-chart-3" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2 tracking-tight">Observable Metrics</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Track cost, latency, and quality in real-time.</p>
</div>
<div className="flex items-end gap-1 mt-6 h-12">
<div className="w-1/5 bg-zinc-800 h-[40%] rounded-t-sm"></div>
<div className="w-1/5 bg-zinc-800 h-[60%] rounded-t-sm"></div>
<div className="w-1/5 bg-pink-500/50 h-[80%] rounded-t-sm animate-pulse"></div>
<div className="w-1/5 bg-zinc-800 h-[50%] rounded-t-sm"></div>
<div className="w-1/5 bg-zinc-800 h-[70%] rounded-t-sm"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/20 border-y border-white/5" id="solutions">
<div className="max-w-6xl mx-auto px-4" id="feature-tabs-container">
<div className="flex flex-col lg:flex-row gap-16 items-center">

<div className="flex-1 space-y-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-12">Built for scale</h2>
<div className="feature-tab group cursor-pointer border-l-2 border-white pl-6 transition-all duration-300" data-target="tab1">
<h3 className="text-xl font-medium text-white mb-2 group-hover:text-emerald-400 transition-colors">Automated Reasoning</h3>
<p className="text-zinc-400 text-sm leading-relaxed max-w-md">Agents that don't just chat, but perform multi-step reasoning to solve complex operational problems without human intervention.</p>
</div>
<div className="feature-tab group cursor-pointer border-l-2 border-white/10 hover:border-white/50 pl-6 transition-all duration-300" data-target="tab2">
<h3 className="text-xl font-medium text-zinc-500 group-hover:text-white transition-colors">Semantic Search</h3>
<p className="text-zinc-500 group-hover:text-zinc-400 text-sm leading-relaxed max-w-md transition-colors">Retrieve information based on meaning, not keywords. Connect your knowledge base instantly.</p>
</div>
<div className="feature-tab group cursor-pointer border-l-2 border-white/10 hover:border-white/50 pl-6 transition-all duration-300" data-target="tab3">
<h3 className="text-xl font-medium text-zinc-500 group-hover:text-white transition-colors">Real-time Translation</h3>
<p className="text-zinc-500 group-hover:text-zinc-400 text-sm leading-relaxed max-w-md transition-colors">Break language barriers with near-zero latency translation for global support teams.</p>
</div>
</div>

<div className="flex-1 w-full aspect-square md:aspect-[4/3] relative">

<div className="feature-img absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-black rounded-2xl border border-white/10 flex items-center justify-center transition-opacity duration-500 opacity-100" id="tab1-img">
<div className="text-center">
<span className="iconify text-emerald-500 mb-4 mx-auto animate-pulse" data-icon="lucide:cpu" data-strokeWidth="1" data-width="64"></span>
<p className="font-mono text-emerald-200/50 text-xs">PROCESSING_NODE_01</p>
</div>
</div>

<div className="feature-img absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black rounded-2xl border border-white/10 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none" id="tab2-img">
<div className="text-center">
<span className="iconify text-blue-500 mb-4 mx-auto" data-icon="lucide:search-code" data-strokeWidth="1" data-width="64"></span>
<p className="font-mono text-blue-200/50 text-xs">INDEXING_VECTORS...</p>
</div>
</div>

<div className="feature-img absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black rounded-2xl border border-white/10 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none" id="tab3-img">
<div className="text-center">
<span className="iconify text-purple-500 mb-4 mx-auto" data-icon="lucide:globe-2" data-strokeWidth="1" data-width="64"></span>
<p className="font-mono text-purple-200/50 text-xs">LOCALE: DETECTED</p>
</div>
</div>
</div>
</div>
</div>


</section>

<section className="py-32 px-4 text-center">
<div className="max-w-3xl mx-auto">
<span className="iconify text-zinc-700 mx-auto mb-8" data-icon="lucide:quote" data-width="32"></span>
<blockquote className="text-2xl md:text-4xl font-medium text-white leading-tight tracking-tight mb-10">
                "Nexus transformed how we handle data ingestion. We moved from weeks of manual ETL to real-time streams in days."
            </blockquote>
<div className="flex flex-col items-center justify-center gap-2">
<div className="h-10 w-10 rounded-full bg-zinc-800 border border-white/10 overflow-hidden mb-2">
<img alt="User" className="w-full h-full object-cover" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
</div>
<cite className="not-italic text-sm font-medium text-white">Elena Rodriguez</cite>
<span className="text-xs text-zinc-500">CTO at Quantico Systems</span>
</div>
</div>
</section>

<section className="py-24 max-w-3xl mx-auto px-4">
<h2 className="text-3xl font-medium text-center text-white mb-16 tracking-tight">Common questions</h2>
<div className="space-y-4">

<details className="group border border-white/10 rounded-lg bg-white/[0.02] open:bg-white/[0.04] transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-white">Is my data encrypted?</span>
<span className="iconify text-zinc-500 group-open:rotate-45 transition-transform duration-300" data-icon="lucide:plus" data-width="16"></span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                    Yes, absolutely. We use AES-256 encryption at rest and TLS 1.3 in transit. We are SOC2 Type II compliant and do not train models on customer data without explicit opt-in.
                </div>
</details>

<details className="group border border-white/10 rounded-lg bg-white/[0.02] open:bg-white/[0.04] transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-white">Can I deploy on-premise?</span>
<span className="iconify text-zinc-500 group-open:rotate-45 transition-transform duration-300" data-icon="lucide:plus" data-width="16"></span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                    We offer self-hosted containers for Enterprise plans. You can run Nexus on your own VPC (AWS, GCP, Azure) keeping data strictly within your perimeter.
                </div>
</details>

<details className="group border border-white/10 rounded-lg bg-white/[0.02] open:bg-white/[0.04] transition-colors">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none">
<span className="text-sm font-medium text-white">What models do you support?</span>
<span className="iconify text-zinc-500 group-open:rotate-45 transition-transform duration-300" data-icon="lucide:plus" data-width="16"></span>
</summary>
<div className="px-6 pb-6 text-sm text-zinc-400 leading-relaxed">
                    We support GPT-4, Claude 3, Llama 3, and Mistral out of the box. You can also fine-tune and bring your own custom weights via our model registry.
                </div>
</details>
</div>
</section>

<section className="py-32 px-4 border-t border-white/5">
<div className="max-w-4xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">Ready to automate everything?</h2>
<div className="flex items-center justify-center gap-4">
<button className="h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-zinc-200 transition-colors">
                    Start free trial
                </button>
<button className="h-12 px-8 rounded-full text-white font-medium hover:text-zinc-300 transition-colors">
                    Contact Sales
                </button>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8 px-4">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-16">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-4" href="#">
<span className="iconify text-white" data-icon="lucide:aperture" data-width="20"></span>
<span className="text-sm font-medium text-white tracking-tight">NEXUS AI</span>
</a>
<p className="text-xs text-zinc-500 max-w-xs">Intelligence for the modern stack. Deploy agents, pipelines, and workflows in minutes.</p>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Product</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Resources</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-medium text-white mb-4">Social</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-white transition-colors" href="#">GitHub</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Discord</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<p className="text-[10px] text-zinc-600">© 2024 Nexus AI Inc. All rights reserved.</p>
<div className="flex items-center gap-1 text-[10px] text-zinc-600">
<span>Designed with precision</span>
<span className="iconify" data-icon="lucide:heart" data-width="10"></span>
</div>
</div>
</div>
</footer>

    </>
  );
}
