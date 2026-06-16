import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.30/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        lucide.createIcons();

        // Intersection Observer for Smooth Reveal on Scroll
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const elementsToReveal = document.querySelectorAll('.reveal');
            elementsToReveal.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="md:px-12 flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 text-xl font-medium text-white tracking-tighter" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-b from-red-500 to-red-600 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.1)] border-t border-white/20">
<svg className="w-3.5 h-3.5 text-white drop-shadow-sm" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" fill-rule="evenodd"></path>
</svg>
</div>
                NEXUS
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Process</a>
<a className="hover:text-white transition-colors" href="#results">Results</a>
<a className="hover:text-white transition-colors" href="#pricing">Engagement</a>
</div>
<a className="hidden items-center justify-center hover:bg-white/10 transition-all md:inline-flex text-xs font-medium text-white bg-white/5 border-white/10 border rounded-full pt-4 pr-8 pb-4 pl-8 relative scale-100" href="#contact">
                Book Consultation
            </a>

<button className="md:hidden text-neutral-400">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden subtle-grid pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="md:px-12 z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="hero-animate flex justify-center mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
</span>
                    AI &amp; Digital Strategy Agency
                </div>
</div>
<h1 className="hero-animate hero-delay-1 md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-8">
                Scale revenue through 
                <span className="text-neutral-500">strategic intelligence.</span>
</h1>
<p className="hero-animate hero-delay-2 md:text-xl leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto">
                We engineer enterprise-grade AI systems and digital strategies that drive measurable growth, operational efficiency, and market dominance.
            </p>
<div className="hero-animate hero-delay-3 flex flex-col md:flex-row gap-4 gap-x-4 gap-y-4 items-center justify-center">
<a className="md:w-auto hover:bg-red-500 transition-all text-sm font-medium text-white bg-red-600 w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)]" href="#contact">
                    Book Consultation
                </a>
<a className="md:w-auto hover:border-white/20 transition-all flex items-center justify-center gap-2 group text-sm font-medium text-white bg-transparent w-full border-white/10 border rounded-full pt-4 pr-8 pb-4 pl-8" href="#services">
                    Explore Services
                    <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>

<div className="hero-animate hero-delay-4 max-w-6xl mx-auto px-6 md:px-12 mt-20">
<div className="rounded-xl bg-neutral-900 border border-white/10 shadow-2xl overflow-hidden relative aspect-[16/9] md:aspect-[21/9] flex items-center justify-center">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/50 to-neutral-950"></div>
<div className="grid grid-cols-4 gap-4 w-full h-full p-8 opacity-40">
<div className="col-span-1 h-full bg-gradient-to-t from-white/5 to-transparent rounded-lg"></div>
<div className="col-span-2 h-full flex flex-col gap-4">
<div className="h-1/3 w-full bg-white/5 rounded-lg"></div>
<div className="h-2/3 w-full border border-white/5 rounded-lg relative overflow-hidden">
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-red-500/10 blur-xl"></div>
</div>
</div>
<div className="col-span-1 h-full border border-white/5 rounded-lg"></div>
</div>
<div className="md:p-8 z-10 flex flex-col pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 justify-center">
<div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-4 w-full h-full max-h-[400px]">

<div className="md:col-span-2 md:row-span-2 bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl p-5 md:p-6 flex flex-col relative overflow-hidden group hover:border-white/20 transition-all duration-300">
<div className="flex justify-between items-start mb-6 relative z-10">
<div className="">
<h4 className="text-neutral-400 text-[10px] font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
<svg className="text-red-500" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        Inference Velocity
                    </h4>
<div className="flex items-baseline gap-3">
<span className="text-4xl font-semibold text-white tracking-tight">42ms</span>
<div className="flex items-center gap-1 text-xs text-emerald-500 font-medium bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                            12% faster
                        </div>
</div>
</div>
<div className="flex gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
</div>
</div>

<div className="flex-1 w-full relative flex items-end gap-[6px] px-1 pb-1 z-10">

<div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
<div className="border-t border-dashed border-white/20 w-full h-px"></div>
<div className="border-t border-dashed border-white/20 w-full h-px"></div>
<div className="border-t border-dashed border-white/20 w-full h-px"></div>
<div className="border-t border-dashed border-white/20 w-full h-px"></div>
</div>

<div className="h-[35%] flex-1 bg-red-500/20 rounded-sm hover:bg-red-500/40 transition-all duration-300"></div>
<div className="h-[45%] flex-1 bg-red-500/20 rounded-sm hover:bg-red-500/40 transition-all duration-300"></div>
<div className="h-[40%] flex-1 bg-red-500/20 rounded-sm hover:bg-red-500/40 transition-all duration-300"></div>
<div className="h-[60%] flex-1 bg-red-500/20 rounded-sm hover:bg-red-500/40 transition-all duration-300"></div>
<div className="h-[55%] flex-1 bg-red-500/20 rounded-sm hover:bg-red-500/40 transition-all duration-300"></div>
<div className="h-[75%] flex-1 bg-red-500/20 rounded-sm hover:bg-red-500/40 transition-all duration-300"></div>
<div className="h-[65%] flex-1 bg-red-500/20 rounded-sm hover:bg-red-500/40 transition-all duration-300"></div>
<div className="h-[85%] flex-1 bg-red-500/20 rounded-sm hover:bg-red-500/40 transition-all duration-300"></div>
<div className="h-[70%] flex-1 bg-red-500/20 rounded-sm hover:bg-red-500/40 transition-all duration-300"></div>
<div className="h-[90%] flex-1 bg-red-500/40 rounded-sm hover:bg-red-500/60 transition-all duration-300 shadow-[0_0_15px_rgba(239,68,68,0.3)] border-t border-red-500/50"></div>
<div className="h-[55%] flex-1 bg-red-500/20 rounded-sm hover:bg-red-500/40 transition-all duration-300"></div>
<div className="h-[45%] flex-1 bg-red-500/20 rounded-sm hover:bg-red-500/40 transition-all duration-300"></div>
<div className="h-[30%] flex-1 bg-red-500/20 rounded-sm hover:bg-red-500/40 transition-all duration-300"></div>
</div>

<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-red-500/10 blur-[80px] rounded-full pointer-events-none"></div>
</div>

<div className="flex flex-col group hover:border-white/20 transition-all duration-300 overflow-hidden bg-[#0a0a0a]/80 border-white/10 border rounded-xl pt-5 pr-5 pb-5 pl-5 relative backdrop-blur-md justify-between">
<div className="flex justify-between items-start relative z-10">
<h4 className="text-neutral-400 text-[10px] font-bold uppercase tracking-wider">Active Threads</h4>
<svg className="text-neutral-500 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" width="6" x="9" y="9"></rect></svg>
</div>
<div className="relative z-10">
<div className="text-2xl font-semibold text-white tracking-tight mb-2">2,845</div>
<div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden border border-white/5">
<div className="bg-gradient-to-r from-red-600 to-red-400 h-full w-[78%] rounded-full"></div>
</div>
<p className="text-[10px] text-neutral-500 mt-2 flex justify-between font-mono">
<span>CAPACITY</span>
<span className="text-red-400">78%</span>
</p>
</div>
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-white/10 transition-colors"></div>
</div>

<div className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 rounded-xl p-5 flex flex-col justify-between group hover:border-white/20 transition-all duration-300 relative overflow-hidden">
<div className="flex justify-between items-start relative z-10">
<h4 className="text-neutral-400 text-[10px] font-bold uppercase tracking-wider">Neural Health</h4>
<svg className="text-neutral-500 group-hover:text-white transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 13a3 3 0 1 0 5.997.129 4 4 0 0 0 2.526 5.77 4 4 0 0 0-.555 6.588 4 4 0 1 0-3.465-4.482Z"></path></svg>
</div>
<div className="space-y-3 relative z-10">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-xs text-neutral-300 font-medium">Tokenizer</span>
<span className="ml-auto text-[10px] font-mono text-neutral-500">99.9%</span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
<span className="text-xs text-neutral-300 font-medium">Embeddings</span>
<span className="ml-auto text-[10px] font-mono text-neutral-500">100%</span>
</div>
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)] animate-pulse"></div>
<span className="text-xs text-neutral-300 font-medium">Vector DB</span>
<span className="ml-auto text-[10px] font-mono text-red-400">SYNCING</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/5 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div className="reveal">
<h2 className="text-3xl font-medium tracking-tight text-white mb-6">Built for outcomes, <br/>not just output.</h2>
<p className="text-neutral-400 leading-relaxed mb-6">
                        Nexus is a premier digital consultancy bridging the gap between legacy infrastructure and autonomous AI systems. We don't just implement technology; we restructure business logic to capitalize on algorithmic speed.
                    </p>
<a className="text-red-500 text-sm font-medium hover:text-red-400 flex items-center gap-1" href="#about">
                        More about our vision <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="reveal delay-100 p-6 rounded-lg bg-neutral-900/50 border border-white/5">
<div className="text-4xl font-medium text-white mb-1 tracking-tight">$500M+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Revenue Generated</div>
</div>
<div className="reveal delay-200 p-6 rounded-lg bg-neutral-900/50 border border-white/5">
<div className="text-4xl font-medium text-white mb-1 tracking-tight">150+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Enterprise Deployments</div>
</div>
<div className="reveal delay-300 p-6 rounded-lg bg-neutral-900/50 border border-white/5">
<div className="text-4xl font-medium text-white mb-1 tracking-tight">12</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Global Markets</div>
</div>
<div className="reveal delay-400 p-6 rounded-lg bg-neutral-900/50 border border-white/5">
<div className="text-4xl font-medium text-white mb-1 tracking-tight">30%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wider font-medium">Avg. Margin Increase</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="services">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="reveal flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Core Capabilities</h2>
<p className="text-neutral-400 max-w-md">Comprehensive digital transformation tailored for high-growth environments.</p>
</div>
<a className="text-sm text-white border-b border-white/30 hover:border-red-500 pb-1 transition-colors" href="#contact">View full capability deck</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="reveal delay-100 group p-8 bg-neutral-900/30 border border-white/5 rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:border-red-500/30">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-cpu w-5 h-5" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">AI Infrastructure</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Scalable LLM deployment and machine learning pipelines designed for proprietary data security.
                    </p>
</div>

<div className="reveal delay-200 group p-8 bg-neutral-900/30 border border-white/5 rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:border-red-500/30">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-bar-chart-2 w-5 h-5" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Predictive Analytics</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Transforming dormant data into forward-looking operational intelligence and forecasting.
                    </p>
</div>

<div className="reveal delay-300 group p-8 bg-neutral-900/30 border border-white/5 rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:border-red-500/30">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-layers w-5 h-5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Product Strategy</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        End-to-end product roadmapping that aligns market gaps with technical feasibility.
                    </p>
</div>

<div className="reveal delay-100 group p-8 bg-neutral-900/30 border border-white/5 rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:border-red-500/30">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Process Automation</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Replacing manual workflows with autonomous agents to reduce overhead by up to 60%.
                    </p>
</div>

<div className="reveal delay-200 group p-8 bg-neutral-900/30 border border-white/5 rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:border-red-500/30">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-globe w-5 h-5" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Digital Ecosystems</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Full-stack web and mobile development focused on high-performance and conversion.
                    </p>
</div>

<div className="reveal delay-300 group p-8 bg-neutral-900/30 border border-white/5 rounded-xl hover:bg-neutral-900 transition-all duration-300 hover:border-red-500/30">
<div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-500 group-hover:text-white transition-colors">
<svg className="lucide lucide-shield-check w-5 h-5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-3 tracking-tight">Data Governance</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Ensuring compliance and integrity in algorithmic decision-making frameworks.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-y border-white/5" id="process">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="reveal text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Execution Framework</h2>
<p className="text-neutral-400">A rigorous, four-step methodology for minimizing risk and maximizing impact.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="reveal delay-500 hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent z-0"></div>

<div className="reveal delay-100 relative z-10">
<div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-xl">
<span className="text-2xl font-medium text-red-500">01</span>
</div>
<div className="text-center">
<h3 className="text-lg font-medium text-white mb-2">Audit &amp; Scope</h3>
<p className="text-sm text-neutral-400">Deep-dive analysis of current architecture and data readiness.</p>
</div>
</div>

<div className="reveal delay-200 relative z-10">
<div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-xl">
<span className="text-2xl font-medium text-red-500">02</span>
</div>
<div className="text-center">
<h3 className="text-lg font-medium text-white mb-2">Strategy Design</h3>
<p className="text-sm text-neutral-400">Architecting the solution with clear KPIs and implementation roadmaps.</p>
</div>
</div>

<div className="reveal delay-300 relative z-10">
<div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-xl">
<span className="text-2xl font-medium text-red-500">03</span>
</div>
<div className="text-center">
<h3 className="text-lg font-medium text-white mb-2">Agile Deployment</h3>
<p className="text-sm text-neutral-400">Iterative development sprints focused on rapid value delivery.</p>
</div>
</div>

<div className="reveal delay-400 relative z-10">
<div className="w-24 h-24 rounded-full bg-[#0a0a0a] border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-xl">
<span className="text-2xl font-medium text-red-500">04</span>
</div>
<div className="text-center">
<h3 className="text-lg font-medium text-white mb-2">Scale &amp; Optimize</h3>
<p className="text-sm text-neutral-400">Continuous refinement based on real-world performance data.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="results">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-red-500 bg-red-500/10 rounded-full border border-red-500/20">
                        CASE STUDY: FINTECH
                    </div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">
                        Reducing customer acquisition costs by 42% in 90 days.
                    </h2>
<p className="text-neutral-400 leading-relaxed mb-8">
                        By implementing a custom predictive modeling engine for a Series B Fintech, we optimized ad spend allocation in real-time. The system analyzes 5M+ data points daily to adjust bidding strategies autonomously.
                    </p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-12 h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-[85%]"></div>
</div>
<span className="text-sm text-white font-medium">85% Automated Decisions</span>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-1 bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-red-500 w-[92%]"></div>
</div>
<span className="text-sm text-white font-medium">92% Forecast Accuracy</span>
</div>
</div>
</div>

<div className="reveal delay-200 relative p-8 bg-neutral-900/50 rounded-xl border border-white/5">
<div className="flex items-end justify-between h-64 gap-4 px-4 pb-4 border-b border-white/10">

<div className="w-full bg-neutral-800 rounded-t-sm h-[30%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">Q1</div>
</div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[45%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">Q2</div>
</div>
<div className="w-full bg-neutral-800 rounded-t-sm h-[60%] relative group">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity">Q3</div>
</div>
<div className="w-full bg-red-600 rounded-t-sm h-[90%] relative shadow-[0_0_20px_-5px_rgba(220,38,38,0.5)]">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white font-bold bg-neutral-800 px-2 py-1 rounded border border-white/10">Now</div>
</div>
</div>
<div className="flex justify-between mt-4 text-xs text-neutral-500 font-mono">
<span>START</span>
<span>OPTIMIZATION PHASE</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="reveal opacity-50 hover:opacity-75 transition-opacity duration-500">
<h3 className="text-xl font-medium text-white mb-8 border-b border-white/10 pb-4">Typical Agencies</h3>
<ul className="space-y-6">
<li className="flex items-start gap-3">
<svg className="lucide lucide-x w-5 h-5 text-neutral-500 shrink-0 mt-0.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="text-neutral-400 text-sm">Focus on deliverables, not business outcomes</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x w-5 h-5 text-neutral-500 shrink-0 mt-0.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="text-neutral-400 text-sm">Opaque pricing and scope creep</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x w-5 h-5 text-neutral-500 shrink-0 mt-0.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="text-neutral-400 text-sm">Junior teams learning on your dime</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-x w-5 h-5 text-neutral-500 shrink-0 mt-0.5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
<span className="text-neutral-400 text-sm">Generic, template-based solutions</span>
</li>
</ul>
</div>

<div className="reveal delay-200 bg-neutral-900/50 p-8 rounded-xl border border-white/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 blur-2xl rounded-full"></div>
<h3 className="text-xl font-medium text-white mb-8 border-b border-red-500/30 pb-4 flex items-center justify-between">
                        The Nexus Approach
                        <svg className="lucide lucide-check-circle-2 text-red-500 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</h3>
<ul className="space-y-6">
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-200 text-sm">Performance-tied incentives and ROI focus</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-200 text-sm">Fixed-cost engagements with clear milestones</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-200 text-sm">Senior engineers and strategists only</span>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-check w-5 h-5 text-red-500 shrink-0 mt-0.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span className="text-neutral-200 text-sm">Bespoke architecture tailored to your stack</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="border-y border-white/5 pt-24 pb-24">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="reveal text-3xl font-medium tracking-tight text-white mb-16 text-center">Led by Industry Veterans</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="reveal delay-100 group">
<div className="aspect-square overflow-hidden bg-neutral-900 border-white/5 border rounded-lg mb-4 relative">
<div className="group-hover:scale-105 transition-transform duration-500 flex text-4xl text-neutral-600 font-mono bg-neutral-800 w-full h-full items-center justify-center"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/66254f5c-4a71-45ed-a6c3-953cac16be11_3840w.jpg"/>ES</div>
</div>
<h3 className="text-lg font-medium text-white">Elena S.</h3>
<p className="text-xs text-red-500 uppercase tracking-wider mb-2">Managing Director</p>
<p className="text-xs text-neutral-400">Ex-McKinsey. 15 years in digital strategy.</p>
</div>

<div className="reveal delay-200 group">
<div className="aspect-square bg-neutral-900 rounded-lg mb-4 border border-white/5 overflow-hidden relative">
<div className="group-hover:scale-105 transition-transform duration-500 flex text-4xl text-neutral-600 font-mono bg-neutral-800 w-full h-full items-center justify-center"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7e2ecc51-301b-4c41-a6e8-010b7d5dd2c2_3840w.jpg"/>MK</div>
</div>
<h3 className="text-lg font-medium text-white">Marcus K.</h3>
<p className="text-xs text-red-500 uppercase tracking-wider mb-2">Head of AI</p>
<p className="text-xs text-neutral-400">PhD Computer Science. 50+ ML models deployed.</p>
</div>

<div className="reveal delay-300 group">
<div className="aspect-square bg-neutral-900 rounded-lg mb-4 border border-white/5 overflow-hidden relative">
<div className="group-hover:scale-105 transition-transform duration-500 flex text-4xl text-neutral-600 font-mono bg-neutral-800 w-full h-full items-center justify-center"><div className="absolute inset-0" data-container-bg="true"><div data-us-project="N9XzvQXu7fA5SY2ewADJ" style={{width: '1440px', height: '900px'}}><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6c7f00b-7216-48fd-8e35-139758d2f814_3840w.jpg"/></div>
</div>JL</div>
</div>
<h3 className="text-lg font-medium text-white">James L.</h3>
<p className="text-xs text-red-500 uppercase tracking-wider mb-2">Technical Lead</p>
<p className="text-xs text-neutral-400">Full-stack architect. Scaled systems to 10M users.</p>
</div>

<div className="reveal delay-400 group">
<div className="aspect-square bg-neutral-900 rounded-lg mb-4 border border-white/5 overflow-hidden relative">
<div className="group-hover:scale-105 transition-transform duration-500 flex text-4xl text-neutral-600 font-mono bg-neutral-800 w-full h-full items-center justify-center"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9628222c-a1ff-484a-b5dc-3f3f3623bf4c_3840w.jpg"/>AR</div>
</div>
<h3 className="text-lg font-medium text-white">Sarah R.</h3>
<p className="text-xs text-red-500 uppercase tracking-wider mb-2">Product Strategy</p>
<p className="text-xs text-neutral-400">Former Head of Product at Fintech Unicorn.</p>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="reveal text-center mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Engagement Models</h2>
<p className="text-neutral-400">Flexible structures designed for different stages of maturity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal delay-100 p-8 rounded-xl border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors flex flex-col">
<h3 className="text-xl font-medium text-white mb-2">Project Sprint</h3>
<p className="text-sm text-neutral-400 mb-6 h-10">Specific deliverables executed within a fixed timeline.</p>
<div className="text-3xl font-medium text-white mb-8 tracking-tight">Custom</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div> MVP Development
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div> Tech Audit
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div> 4-8 Week Timeline
                        </li>
</ul>
<a className="hover:bg-white/5 transition-colors text-sm font-medium text-white text-center w-full border-white/10 border rounded-full pt-3 pb-3" href="#contact">Start Project</a>
</div>

<div className="reveal delay-200 p-8 rounded-xl border border-red-500/50 bg-neutral-900/60 shadow-[0_0_30px_-10px_rgba(234,88,12,0.15)] flex flex-col relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-full tracking-wide">Most Popular</div>
<h3 className="text-xl font-medium text-white mb-2">Growth Partner</h3>
<p className="text-sm text-neutral-400 mb-6 h-10">Ongoing strategic and technical execution.</p>
<div className="text-3xl font-medium text-white mb-8 tracking-tight">Retainer</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Fractional CTO/CPO
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Continuous Deployment
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Priority Support
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<div className="w-1.5 h-1.5 rounded-full bg-red-500"></div> Monthly Strategy Reviews
                        </li>
</ul>
<a className="hover:bg-red-500 transition-colors shadow-red-900/20 text-sm font-medium text-white text-center bg-red-600 w-full rounded-full pt-3 pb-3 shadow-lg" href="#contact">Inquire Now</a>
</div>

<div className="reveal delay-300 p-8 rounded-xl border border-white/10 bg-neutral-900/20 hover:bg-neutral-900/40 transition-colors flex flex-col">
<h3 className="text-xl font-medium text-white mb-2">Enterprise</h3>
<p className="text-sm text-neutral-400 mb-6 h-10">Full-scale digital transformation and team augmentation.</p>
<div className="text-3xl font-medium text-white mb-8 tracking-tight">Scale</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div> Dedicated Squad
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div> On-premise AI Setup
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-500"></div> SLA Guarantees
                        </li>
</ul>
<a className="hover:bg-white/5 transition-colors text-sm font-medium text-white text-center w-full border-white/10 border rounded-full pt-3 pb-3" href="#contact">Contact Sales</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/10">
<div className="max-w-3xl mx-auto px-6 md:px-12">
<h2 className="reveal text-3xl font-medium tracking-tight text-white mb-12 text-center">Frequently Asked Questions</h2>
<div className="space-y-4">
<details className="reveal delay-100 group bg-neutral-900/30 border border-white/5 rounded-lg open:bg-neutral-900 transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer">
<span className="text-white font-medium">How quickly can we see results?</span>
<span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
                        Our initial audit typically takes 1-2 weeks. For most deployments, we aim to deliver a functional MVP within 4-6 weeks, with measurable impact visible shortly after data integration.
                    </div>
</details>
<details className="reveal delay-200 group bg-neutral-900/30 border border-white/5 rounded-lg open:bg-neutral-900 transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer">
<span className="text-white font-medium">Do you work with legacy systems?</span>
<span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
                        Yes. A core part of our expertise is building "wrapper" APIs and data pipelines that allow modern AI tools to interact securely with legacy enterprise infrastructure without requiring a full rewrite.
                    </div>
</details>
<details className="reveal delay-300 group bg-neutral-900/30 border border-white/5 rounded-lg open:bg-neutral-900 transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer">
<span className="text-white font-medium">How do you handle data security?</span>
<span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
                        We prioritize data sovereignty. We can deploy local LLMs or private cloud instances ensuring your proprietary data never trains public models. We adhere to SOC2 and GDPR standards.
                    </div>
</details>
<details className="reveal delay-400 group bg-neutral-900/30 border border-white/5 rounded-lg open:bg-neutral-900 transition-all duration-300">
<summary className="flex justify-between items-center p-6 cursor-pointer">
<span className="text-white font-medium">What is your typical budget range?</span>
<span className="text-neutral-500 group-open:rotate-180 transition-transform duration-300">
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-neutral-400 leading-relaxed">
                        Engagements typically start at $15k for initial strategy and audits. Full-scale implementations are scoped based on complexity and timeline.
                    </div>
</details>
</div>
</div>
</section>

<section className="overflow-hidden pt-32 pb-32 relative" id="contact">
<div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent pointer-events-none"></div>
<div className="reveal max-w-4xl mx-auto px-6 text-center relative z-10">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">
                Ready to engineer your <br/> competitive advantage?
            </h2>
<p className="text-lg text-neutral-400 mb-10 max-w-xl mx-auto">
                Stop guessing. Start building systems that scale revenue and automate operations.
            </p>
<form className="max-w-md mx-auto space-y-4 mb-8">
<input className="placeholder-neutral-500 focus:outline-none focus:border-red-500 transition-colors text-white bg-neutral-900 w-full border-neutral-800 border rounded-xl pt-4 pr-5 pb-4 pl-5" placeholder="Enter your work email" type="email"/>
<button className="hover:bg-red-500 transition-all shadow-red-900/20 font-medium text-white bg-red-600 w-full rounded-full pt-4 pr-8 pb-4 pl-8 shadow-lg" type="submit">
                    Schedule Discovery Call
                </button>
</form>
<p className="text-xs text-neutral-600">No commitment required. Confidentiality guaranteed.</p>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030303] py-16">
<div className="max-w-7xl mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="">
<a className="flex items-center gap-2 text-xl font-medium text-white tracking-tighter" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-b from-red-500 to-red-600 flex items-center justify-center shadow-[0_1px_2px_rgba(0,0,0,0.1)] border-t border-white/20">
<svg className="w-3.5 h-3.5 text-white drop-shadow-sm" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z" fill-rule="evenodd"></path>
</svg>
</div>
                NEXUS
            </a>
<p className="text-sm text-neutral-500 max-w-xs">
                        Designing the future of intelligent business operations.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Connect</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Twitter / X</a></li>
<li><a className="hover:text-white transition-colors" href="#">LinkedIn</a></li>
<li><a className="hover:text-white transition-colors" href="#">Email</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>© 2024 Nexus Strategy Agency. All rights reserved.</p>
<div className="flex items-center gap-1 mt-4 md:mt-0">
<span>San Francisco</span>
<span className="w-1 h-1 bg-neutral-600 rounded-full mx-2"></span>
<span>New York</span>
<span className="w-1 h-1 bg-neutral-600 rounded-full mx-2"></span>
<span>London</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
