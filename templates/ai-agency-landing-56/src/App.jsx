import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            
            const aperture = document.querySelector('.aperture-glow');
            
            // Move the top glow slightly towards the mouse
            if(aperture) {
                aperture.style.background = `radial-gradient(circle at ${x}% -20%, rgba(59, 130, 246, 0.15), transparent 60%)`;
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="tech-grid"></div>
<div className="tech-grid-detail"></div>
<div className="aperture-glow" style={{background: 'radial-gradient(circle at 98.5577% -20%, rgba(59, 130, 246, 0.15), transparent 60%)'}}></div>
<div className="scanlines"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-widest text-white flex items-center gap-2 group" href="#">
<svg aria-hidden="true" data-icon="lucide:aperture" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
                AETHER
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Solutions</a>
<a className="hover:text-white transition-colors" href="#process">Methodology</a>
<a className="hover:text-white transition-colors" href="#about">Intelligence</a>
</div>
<a className="hidden md:flex items-center gap-2 hover:bg-white/10 transition-all text-xs font-medium text-white bg-white/5 border-white/10 border rounded-full pt-2 pr-4 pb-2 pl-4" href="#contact">Get in touch</a>

<button className="md:hidden text-white">
<svg aria-hidden="true" data-icon="lucide:menu" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-24 pl-6 relative">
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-900/10 text-blue-400 text-xs font-medium mb-8 animate-pulse">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                System v2.0 Operational
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                Architecting the <br/>
<span className="text-gradient">Intelligence of Tomorrow</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                We build autonomous AI systems that scale with your ambition. 
                From predictive modeling to generative interfaces, we engineering the invisible.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="btn-glow group hover:bg-blue-500 blue-glow flex gap-2 text-sm font-medium text-white bg-blue-600 rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative gap-x-2 gap-y-2 items-center">Schedule a call</button>
<button className="text-slate-400 hover:text-white text-sm font-medium px-6 py-3 transition-colors flex items-center gap-2">
                    View Documentation
                    <svg aria-hidden="true" className="" data-icon="lucide:file-code" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path className="" d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5m-10 4.5L8 15l2 2.5m4-5l2 2.5l-2 2.5"></path></g></svg>
</button>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none z-0 opacity-50"></div>
</section>

<section className="border-y border-white/5 bg-black/40 backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto px-6 py-12">
<p className="text-center text-xs text-slate-500 uppercase tracking-widest mb-8 font-medium">Integrated Protocols</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<svg aria-hidden="true" className="" data-icon="lucide:hexagon" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> ACME_NET
                </div>
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<svg aria-hidden="true" data-icon="lucide:triangle" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> PRISM_OS
                </div>
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<svg aria-hidden="true" data-icon="lucide:circle-dashed" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0m0 19.636a10 10 0 0 1-3.8 0m7.509-18.097a10 10 0 0 1 2.69 2.7M2.182 13.9a10 10 0 0 1 0-3.8m18.097 7.509a10 10 0 0 1-2.7 2.69M21.818 10.1a10 10 0 0 1 0 3.8M3.721 6.391a10 10 0 0 1 2.7-2.69m-.03 16.578a10 10 0 0 1-2.69-2.7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> ORBITAL
                </div>
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<svg aria-hidden="true" data-icon="lucide:box" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg> CUBE_DB
                </div>
<div className="flex items-center gap-2 text-white font-medium tracking-tight">
<svg aria-hidden="true" className="" data-icon="lucide:layers" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg> STACK_AI
                </div>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex md:items-end md:justify-between">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Core Modules</h2>
<p className="text-slate-400 font-light">Deploying state-of-the-art models to solve complex infrastructure and data challenges.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-blue-400 text-sm hover:text-blue-300 transition-colors mt-4 md:mt-0" href="#">
                    Explore Directory <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-xl group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:text-blue-300 transition-colors border border-blue-500/20">
<svg aria-hidden="true" data-icon="lucide:brain-circuit" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">Neural Architecture</h3>
<p className="text-sm text-slate-400 leading-relaxed">Custom LLM training and fine-tuning for domain-specific applications with enterprise-grade security.</p>
</div>

<div className="glass-card p-8 rounded-xl group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:text-blue-300 transition-colors border border-blue-500/20">
<svg aria-hidden="true" data-icon="lucide:scan-line" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2m4-5h10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">Computer Vision</h3>
<p className="text-sm text-slate-400 leading-relaxed">Real-time object detection and spatial analysis for robotics, surveillance, and automated QC systems.</p>
</div>

<div className="glass-card p-8 rounded-xl group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:text-blue-300 transition-colors border border-blue-500/20">
<svg aria-hidden="true" data-icon="lucide:bar-chart-3" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">Predictive Analytics</h3>
<p className="text-sm text-slate-400 leading-relaxed">Transforming raw data into actionable foresight using advanced regression models and forecasting.</p>
</div>

<div className="glass-card p-8 rounded-xl group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:text-blue-300 transition-colors border border-blue-500/20">
<svg aria-hidden="true" data-icon="lucide:message-square-code" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path><path d="m10 8l-3 3l3 3m4 0l3-3l-3-3"></path></g></svg>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">Conversational AI</h3>
<p className="text-sm text-slate-400 leading-relaxed">Building human-like interaction layers for customer support, internal tooling, and dynamic interfaces.</p>
</div>

<div className="glass-card p-8 rounded-xl group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:text-blue-300 transition-colors border border-blue-500/20">
<svg aria-hidden="true" className="" data-icon="lucide:shield-check" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">AI Governance</h3>
<p className="text-sm text-slate-400 leading-relaxed">Ensuring your models are compliant, ethical, and secure against adversarial attacks and drift.</p>
</div>

<div className="glass-card p-8 rounded-xl group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:plus" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 group-hover:text-blue-300 transition-colors border border-blue-500/20">
<svg aria-hidden="true" className="" data-icon="lucide:workflow" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect className="" height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
</div>
<h3 className="text-lg text-white font-medium mb-3 tracking-tight">Automation Pipelines</h3>
<p className="text-sm text-slate-400 leading-relaxed">End-to-end workflow automation connecting your existing tech stack with autonomous agents.</p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 relative bg-black/40 z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">The Scale Challenge</h2>
<p className="text-lg text-slate-400 font-light leading-relaxed">
                As AI models grow in complexity, traditional infrastructure crumbles under the weight of modern inference demands and data gravity.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -right-10 -top-10 w-32 h-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-black border border-white/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-database-zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5V19C3 20.1046 7.02944 21 12 21H13"></path><path d="M21 5V8"></path><path d="M21 12L18 17L22 19L19 24"></path><path d="M3 12C3 13.1046 7.02944 14 12 14"></path><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">Data Silos &amp; Gravity</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        Moving petabytes of training data to compute sources creates unacceptable latency and egress costs. We invert the paradigm by bringing compute to your data.
                    </p>
</div>
</div>

<div className="group relative p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -right-10 -top-10 w-32 h-32 bg-purple-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-purple-500/20 transition-colors"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-black border border-white/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">Inference Bottlenecks</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        Standard APIs struggle with high-concurrency agent swarms. Our mesh network distributes inference load dynamically across available GPU clusters globally.
                    </p>
</div>
</div>

<div className="group relative p-8 bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
<div className="absolute -right-10 -top-10 w-32 h-32 bg-green-500/10 blur-[50px] rounded-full pointer-events-none group-hover:bg-green-500/20 transition-colors"></div>
<div className="relative z-10">
<div className="w-12 h-12 bg-black border border-white/10 rounded-lg flex items-center justify-center text-blue-400 mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">Model Drift &amp; Decay</h3>
<p className="text-sm text-slate-400 leading-relaxed font-light">
                        Production models degrade as real-world data shifts. Our continuous evaluation pipeline detects drift and triggers autonomous fine-tuning loops.
                    </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden z-10 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">

<div className="bg-[#050505] border border-white/10 rounded-xl p-6 relative overflow-hidden shadow-2xl shadow-blue-900/10">
<div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-slate-800"></div>
<div className="w-3 h-3 rounded-full bg-slate-800"></div>
<div className="w-3 h-3 rounded-full bg-slate-800"></div>
</div>
<div className="text-xs text-slate-600 font-mono">config.ts</div>
</div>
<div className="space-y-2 font-mono text-xs md:text-sm">
<div className="flex">
<span className="text-slate-700 w-8 select-none">01</span>
<span className="text-purple-400">import</span> <span className="text-white ml-2">aether_core</span> <span className="text-purple-400 ml-2">as</span> <span className="text-white ml-2">ae</span>
</div>
<div className="flex">
<span className="text-slate-700 w-8 select-none">02</span>
<span className="text-slate-500">// Initialize neural pathway</span>
</div>
<div className="flex">
<span className="text-slate-700 w-8 select-none">03</span>
<span className="text-blue-400">const</span> <span className="text-white ml-2">model</span> <span className="text-slate-300">=</span> <span className="text-yellow-300 ml-2">await</span> <span className="text-white ml-2">ae.connect({</span>
</div>
<div className="flex">
<span className="text-slate-700 w-8 select-none">04</span>
<span className="text-white ml-8">mode:</span> <span className="text-green-400 ml-2">'autonomous'</span>,
                        </div>
<div className="flex">
<span className="text-slate-700 w-8 select-none">05</span>
<span className="text-white ml-8">latency:</span> <span className="text-green-400 ml-2">0.02</span>,
                        </div>
<div className="flex">
<span className="text-slate-700 w-8 select-none">06</span>
<span className="text-white ml-8">security:</span> <span className="text-blue-400 ml-2">true</span>
</div>
<div className="flex">
<span className="text-slate-700 w-8 select-none">07</span>
<span className="text-white ml-2">});</span>
</div>
<div className="flex">
<span className="text-slate-700 w-8 select-none">08</span>
</div>
<div className="flex">
<span className="text-slate-700 w-8 select-none">09</span>
<span className="text-slate-500">// Deploy agent</span>
</div>
<div className="flex">
<span className="text-slate-700 w-8 select-none">10</span>
<span className="text-white ml-2">model.deploy(</span><span className="text-green-400">'production'</span><span className="text-white">);</span> <span className="animate-pulse inline-block w-2 h-4 bg-blue-500 align-middle ml-1"></span>
</div>
</div>
</div>

<div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 blur-[80px] rounded-full z-[-1]"></div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">Seamless Integration</h2>
<div className="space-y-6">
<p className="text-slate-400 font-light leading-relaxed">
                        Our proprietary API adapters allow you to plug intelligence directly into your existing infrastructure. No massive overhauls, just intelligent layers added to your stack.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h4 className="text-white text-sm font-medium">Zero-Downtime Deployment</h4>
<p className="text-slate-500 text-xs mt-1">Roll out updates instantly without service interruption.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h4 className="text-white text-sm font-medium">Universal Compatibility</h4>
<p className="text-slate-500 text-xs mt-1">Python, Node.js, Go, and Rust SDKs available.</p>
</div>
</li>
<li className="flex items-start gap-3">
<div className="mt-1 w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
<svg aria-hidden="true" data-icon="lucide:check" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="">
<h4 className="text-white text-sm font-medium">Enterprise Security</h4>
<p className="text-slate-500 text-xs mt-1">SOC2 Type II certified with end-to-end encryption.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="z-10 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-4xl mx-auto relative">
<div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10 blur-2xl rounded-3xl"></div>
<div className="relative bg-black border border-white/10 rounded-3xl p-8 md:p-16 text-center overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.2) 1px, transparent 0)', backgroundSize: '20px 20px'}}></div>
<div className="z-10 relative">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">Ready to ascend?</h2>
<p className="text-slate-400 font-light mb-10 max-w-xl mx-auto">
                        Schedule a consultation with our architects to discuss your specific data needs and how Aether can accelerate your trajectory.
                    </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mr-auto ml-auto gap-x-3 gap-y-3">
<button className="hover:bg-slate-200 transition-colors text-sm font-medium text-black bg-white rounded-lg pt-3 pr-6 pb-3 pl-6">
                            Start Now
                        </button>
</form>
<p className="text-slate-600 text-xs mt-6">No credit card required for initial assessment.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-black pt-16 pb-8 px-6 relative z-10">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-lg font-medium tracking-widest text-white flex items-center gap-2 mb-4" href="#">
<svg aria-hidden="true" data-icon="lucide:aperture" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></g></svg>
                        AETHER
                    </a>
<p className="text-slate-500 text-sm font-light max-w-xs mb-6">
                        Pioneering the boundary between human intent and machine execution.
                    </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:twitter" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:github" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5c.08-1.25-.27-2.48-1-3.5c.28-1.15.28-2.35 0-3.5c0 0-1 0-3 1.5c-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5c-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></g></svg></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><svg aria-hidden="true" data-icon="lucide:linkedin" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg></a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Product</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-blue-400 transition-colors" href="#">Intelligence</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Data Engine</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-blue-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Blog</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-3 text-sm text-slate-500 font-light">
<li><a className="hover:text-blue-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<div className="text-xs text-slate-600">
                    © 2024 Aether Intelligence Inc. All rights reserved.
                </div>
<div className="flex items-center gap-2 text-xs text-slate-600">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    All Systems Operational
                </div>
</div>
</div>
</footer>



    </>
  );
}
