import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const spans = menuBtn.querySelectorAll('span');

        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Animate hamburger to X
            if(!mobileMenu.classList.contains('hidden')){
                spans[0].style.transform = 'rotate(45deg) translate(2px, 4px)';
                spans[1].style.width = '1.5rem';
                spans[1].style.transform = 'rotate(-45deg) translate(2px, -4px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.width = '1rem';
                spans[1].style.transform = 'none';
            }
        });

        // Close mobile menu on link click
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                spans[0].style.transform = 'none';
                spans[1].style.width = '1rem';
                spans[1].style.transform = 'none';
            });
        });

        // FAQ Accordion Logic
        const faqButtons = document.querySelectorAll('.faq-btn');
        faqButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const icon = btn.querySelector('.lucide-plus');
                
                // Close others
                faqButtons.forEach(otherBtn => {
                    if (otherBtn !== btn) {
                        otherBtn.nextElementSibling.classList.add('hidden');
                        otherBtn.querySelector('.lucide-plus').style.transform = 'rotate(0deg)';
                    }
                });

                // Toggle current
                content.classList.toggle('hidden');
                if(content.classList.contains('hidden')){
                    icon.style.transform = 'rotate(0deg)';
                } else {
                    icon.style.transform = 'rotate(45deg)';
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full bg-[#f5f5f3]/90 backdrop-blur-md z-50 border-b border-neutral-300">
<div className="w-full px-6 lg:px-12 flex justify-between items-center h-20">

<a className="text-xl font-medium tracking-tight flex items-start gap-1" href="#">
                AGENTIC<span className="text-xs mt-1 border border-neutral-900 rounded-full w-3 h-3 flex items-center justify-center">R</span>
</a>

<div className="hidden lg:flex items-center gap-12">
<a className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors font-light" href="#work">Work</a>
<a className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors font-light" href="#agents">Agents</a>
<a className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors font-light" href="#services">Services</a>
<a className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors font-light" href="#about">About</a>
<a className="text-xs uppercase tracking-widest hover:text-neutral-500 transition-colors font-light" href="#insights">Insights</a>
</div>

<a className="hidden lg:flex items-center gap-3 border border-neutral-900 px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors group" href="#contact">
                Let's Build
                <i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>

<button className="lg:hidden p-2 flex flex-col gap-1.5 items-end z-50 relative" id="menu-btn">
<span className="w-6 h-[1.5px] bg-neutral-900 transition-transform origin-right"></span>
<span className="w-4 h-[1.5px] bg-neutral-900 transition-all origin-right"></span>
</button>
</div>

<div className="hidden absolute top-20 left-0 w-full bg-[#f5f5f3] h-[calc(100vh-5rem)] flex flex-col p-6 border-b border-neutral-300" id="mobile-menu">
<a className="text-3xl font-medium uppercase tracking-tight py-4 border-b border-neutral-300" href="#work">Work</a>
<a className="text-3xl font-medium uppercase tracking-tight py-4 border-b border-neutral-300" href="#agents">Agents</a>
<a className="text-3xl font-medium uppercase tracking-tight py-4 border-b border-neutral-300" href="#services">Services</a>
<a className="text-3xl font-medium uppercase tracking-tight py-4 border-b border-neutral-300" href="#about">About</a>
<a className="text-3xl font-medium uppercase tracking-tight py-4 border-b border-neutral-300" href="#insights">Insights</a>
<a className="mt-8 flex items-center justify-between border border-neutral-900 px-6 py-4 text-sm uppercase tracking-widest bg-[#d4ff00]" href="#contact">
                Let's Build <i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</nav>

<header className="pt-20 min-h-screen flex flex-col lg:flex-row border-b border-neutral-300">

<div className="w-full lg:w-[55%] px-6 py-16 lg:px-16 lg:py-24 flex flex-col justify-center relative">
<div className="flex items-center gap-3 mb-10 lg:mb-16">
<span className="text-xs uppercase tracking-widest font-light">AI Agents Development Company</span>
<div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
</div>
<h1 className="text-[3.5rem] leading-[0.85] lg:text-[6.5rem] xl:text-[8rem] font-semibold uppercase tracking-tighter mb-10 lg:mb-16">
                We Build AI Agents<br/>
                That Work.<br/>
                So You Can Grow.
            </h1>
<div className="flex flex-col lg:flex-row gap-6 lg:items-start mb-16 lg:mb-24">
<i className="w-10 h-10 text-neutral-400 shrink-0" data-lucide="plus" strokeWidth="1.5"></i>
<p className="text-sm uppercase tracking-wider leading-relaxed max-w-md font-light text-neutral-800">
                    We design and develop intelligent AI agents that automate workflows, make decisions, and drive real business outcomes.
                </p>
</div>

<div className="flex items-stretch mb-20 lg:mb-32 w-fit group cursor-pointer">
<div className="bg-[#171717] text-white px-8 lg:px-12 py-5 text-xs lg:text-sm uppercase tracking-widest flex items-center justify-center font-light transition-colors group-hover:bg-neutral-800">
                    Build Your Agent
                </div>
<div className="bg-[#d4ff00] px-5 flex items-center justify-center text-neutral-900 border-l border-neutral-800">
<i className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 border-t border-neutral-300 pt-8 w-full max-w-2xl">
<div className="lg:border-r border-neutral-300 flex flex-col pr-6">
<span className="text-3xl lg:text-4xl font-medium tracking-tight">50+</span>
<span className="text-xs uppercase tracking-widest text-neutral-500 mt-2 font-light">AI Agents<br/>Deployed</span>
</div>
<div className="lg:border-r border-neutral-300 flex flex-col pr-6 lg:pl-6">
<span className="text-3xl lg:text-4xl font-medium tracking-tight">30+</span>
<span className="text-xs uppercase tracking-widest text-neutral-500 mt-2 font-light">Enterprise<br/>Clients</span>
</div>
<div className="lg:border-r border-neutral-300 flex flex-col pr-6 lg:pl-6">
<span className="text-3xl lg:text-4xl font-medium tracking-tight">3M+</span>
<span className="text-xs uppercase tracking-widest text-neutral-500 mt-2 font-light">Hours<br/>Automated</span>
</div>
<div className="flex flex-col lg:pl-6">
<span className="text-3xl lg:text-4xl font-medium tracking-tight">99%</span>
<span className="text-xs uppercase tracking-widest text-neutral-500 mt-2 font-light">Task Accuracy<br/>Achieved</span>
</div>
</div>
</div>

<div className="hidden lg:block w-[45%] bg-neutral-200 relative overflow-hidden border-l border-neutral-300">

<img alt="Abstract Brutalist Architecture" className="w-full h-full object-cover object-center grayscale contrast-125 brightness-90" src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent"></div>


<div className="absolute top-20 right-12 flex items-start gap-4">
<div className="w-2.5 h-2.5 bg-[#d4ff00] mt-1.5"></div>
<div className="text-[0.65rem] uppercase tracking-[0.2em] text-white font-light leading-relaxed">
                    Autonomous.<br/>Adaptive.<br/>Actionable.
                </div>
</div>

<div className="absolute top-1/3 right-1/4">
<div className="w-12 h-[1px] bg-white/50 absolute top-1/2 -translate-y-1/2 -left-6"></div>
<div className="w-[1px] h-12 bg-white/50 absolute left-1/2 -translate-x-1/2 -top-6"></div>
</div>

<div className="absolute top-2/3 right-1/4 flex gap-4">
<div className="w-[1px] h-4 bg-[#d4ff00]/60"></div>
<div className="w-[1px] h-4 bg-[#d4ff00]/60"></div>
<div className="w-[1px] h-4 bg-[#d4ff00]/60"></div>
<div className="w-[1px] h-4 bg-[#d4ff00]/60"></div>
</div>

<div className="absolute bottom-12 right-12 flex flex-col items-center gap-6">
<span className="text-[0.65rem] uppercase tracking-[0.3em] text-white font-light [writing-mode:vertical-rl] rotate-180">Scroll to Discover</span>
<div className="w-[1px] h-24 bg-white/30 relative">
<div className="w-[1px] h-1/2 bg-white absolute top-0 left-0 animate-pulse"></div>
</div>
<i className="w-4 h-4 text-white" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>

<div className="absolute -left-8 bottom-32 bg-[#d4ff00] w-24 h-24 flex items-center justify-center z-20 shadow-2xl">
<i className="w-6 h-6 text-neutral-900" data-lucide="plus" strokeWidth="1.5"></i>
</div>
</div>
</header>

<section className="py-6 border-b border-neutral-300 bg-white overflow-hidden relative flex items-center">
<div className="absolute left-4 z-10 text-[0.65rem] uppercase tracking-widest text-neutral-400 bg-white px-2">Trusted By Systems</div>
<div className="w-full flex whitespace-nowrap animate-ticker items-center text-xl lg:text-3xl font-medium tracking-tight uppercase text-neutral-800">
<span className="mx-8">Palantir</span> <span className="mx-8 text-[#d4ff00]">/</span>
<span className="mx-8">Stripe</span> <span className="mx-8 text-[#d4ff00]">/</span>
<span className="mx-8">OpenAI</span> <span className="mx-8 text-[#d4ff00]">/</span>
<span className="mx-8">Scale</span> <span className="mx-8 text-[#d4ff00]">/</span>
<span className="mx-8">Anthropic</span> <span className="mx-8 text-[#d4ff00]">/</span>
<span className="mx-8">Vercel</span> <span className="mx-8 text-[#d4ff00]">/</span>
<span className="mx-8">Palantir</span> <span className="mx-8 text-[#d4ff00]">/</span>
<span className="mx-8">Stripe</span> <span className="mx-8 text-[#d4ff00]">/</span>
<span className="mx-8">OpenAI</span> <span className="mx-8 text-[#d4ff00]">/</span>
<span className="mx-8">Scale</span> <span className="mx-8 text-[#d4ff00]">/</span>
</div>
</section>

<section className="py-24 lg:py-40 px-6 lg:px-16 border-b border-neutral-300 relative" id="about">
<div className="absolute top-0 right-16 w-[1px] h-full bg-neutral-300 hidden lg:block"></div>
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
<div className="lg:col-span-4 flex flex-col justify-between">
<div>
<h2 className="text-xs uppercase tracking-[0.2em] font-light mb-4 flex items-center gap-2">
<div className="w-1.5 h-1.5 bg-[#d4ff00]"></div> The Paradigm Shift
                    </h2>
<h3 className="text-4xl font-semibold tracking-tight uppercase leading-none">Beyond<br/>Automation.</h3>
</div>
<div className="mt-12 lg:mt-0 p-6 border border-neutral-300 bg-white relative">
<div className="absolute top-0 right-0 p-2 border-b border-l border-neutral-300 text-[0.6rem] uppercase tracking-widest text-neutral-500">SYS.01</div>
<i className="w-8 h-8 mb-4 text-neutral-900" data-lucide="cpu" strokeWidth="1.5"></i>
<p className="text-sm font-light text-neutral-600 leading-relaxed uppercase tracking-wider">
                        We don't build scripts. We architect cognitive entities capable of reasoning, execution, and adaptation in complex environments.
                    </p>
</div>
</div>
<div className="lg:col-span-8 lg:pl-16">
<p className="text-3xl lg:text-5xl font-medium tracking-tight uppercase leading-[1.1] text-neutral-900">
                    The era of static software is over. <span className="text-neutral-400">We engineer dynamic intelligence that interacts with your data, your tools, and your customers. Deploying an agent is deploying a relentless, scalable workforce.</span>
</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 pt-16 border-t border-neutral-300">
<div>
<h4 className="text-lg font-semibold tracking-tight uppercase mb-4">Reasoning Engines</h4>
<p className="text-base text-neutral-600 font-light leading-relaxed">Agents that don't just follow paths, but analyze variables, synthesize context, and determine optimal execution strategies in real-time.</p>
</div>
<div>
<h4 className="text-lg font-semibold tracking-tight uppercase mb-4">Action Protocols</h4>
<p className="text-base text-neutral-600 font-light leading-relaxed">Direct API integrations allowing agents to manipulate software, update databases, send communications, and complete complex multi-step workflows.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#171717] text-white py-24 lg:py-40 px-6 lg:px-16 border-b border-neutral-800" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-24 gap-8">
<div>
<h2 className="text-xs uppercase tracking-[0.2em] font-light mb-4 text-neutral-400">Capabilities Matrix</h2>
<h3 className="text-5xl lg:text-7xl font-semibold tracking-tight uppercase leading-none">Architectural<br/>Services.</h3>
</div>
<a className="flex items-center gap-2 text-sm uppercase tracking-widest text-[#d4ff00] hover:text-white transition-colors border-b border-[#d4ff00] hover:border-white pb-1" href="#">
                    View Technical Specs <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-[1px] bg-neutral-800 border border-neutral-800">

<div className="bg-[#171717] p-8 lg:p-12 hover:bg-[#1f1f1f] transition-colors group relative overflow-hidden">
<div className="absolute top-4 right-4 text-neutral-700 group-hover:text-[#d4ff00] transition-colors">
<i className="w-6 h-6" data-lucide="network" strokeWidth="1.5"></i>
</div>
<div className="text-[0.65rem] uppercase tracking-widest text-neutral-500 mb-8 border border-neutral-700 px-2 py-1 w-fit">Module 01</div>
<h4 className="text-2xl font-semibold tracking-tight uppercase mb-4 group-hover:text-[#d4ff00] transition-colors">Custom Agent Development</h4>
<p className="text-base font-light text-neutral-400 leading-relaxed">Bespoke LLM-powered entities trained on your proprietary data, designed for specific operational mandates within your organization.</p>
</div>

<div className="bg-[#171717] p-8 lg:p-12 hover:bg-[#1f1f1f] transition-colors group relative overflow-hidden">
<div className="absolute top-4 right-4 text-neutral-700 group-hover:text-[#d4ff00] transition-colors">
<i className="w-6 h-6" data-lucide="workflow" strokeWidth="1.5"></i>
</div>
<div className="text-[0.65rem] uppercase tracking-widest text-neutral-500 mb-8 border border-neutral-700 px-2 py-1 w-fit">Module 02</div>
<h4 className="text-2xl font-semibold tracking-tight uppercase mb-4 group-hover:text-[#d4ff00] transition-colors">Workflow Automation Swarms</h4>
<p className="text-base font-light text-neutral-400 leading-relaxed">Multi-agent systems that communicate and collaborate to execute massive, asynchronous workflows across disparate software ecosystems.</p>
</div>

<div className="bg-[#171717] p-8 lg:p-12 hover:bg-[#1f1f1f] transition-colors group relative overflow-hidden">
<div className="absolute top-4 right-4 text-neutral-700 group-hover:text-[#d4ff00] transition-colors">
<i className="w-6 h-6" data-lucide="database-zap" strokeWidth="1.5"></i>
</div>
<div className="text-[0.65rem] uppercase tracking-widest text-neutral-500 mb-8 border border-neutral-700 px-2 py-1 w-fit">Module 03</div>
<h4 className="text-2xl font-semibold tracking-tight uppercase mb-4 group-hover:text-[#d4ff00] transition-colors">RAG &amp; Data Infrastructure</h4>
<p className="text-base font-light text-neutral-400 leading-relaxed">High-performance vector databases and retrieval-augmented generation pipelines ensuring agents operate with deterministic factual accuracy.</p>
</div>

<div className="bg-[#171717] p-8 lg:p-12 md:col-span-2 flex flex-col md:flex-row gap-8 items-center border-t border-neutral-800 md:border-t-0">
<div className="flex-1">
<div className="text-[0.65rem] uppercase tracking-widest text-neutral-500 mb-8 border border-neutral-700 px-2 py-1 w-fit">Module 04</div>
<h4 className="text-2xl font-semibold tracking-tight uppercase mb-4">Enterprise Security Layer</h4>
<p className="text-base font-light text-neutral-400 leading-relaxed">Military-grade deployment infrastructure. Role-based access controls, complete audit logging, and isolated VPC execution environments for your agents.</p>
</div>
<div className="w-full md:w-1/3 aspect-square border border-neutral-700 relative p-4 flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800/50 to-transparent"></div>
<i className="w-16 h-16 text-neutral-600 relative z-10" data-lucide="shield-check" strokeWidth="1"></i>
</div>
</div>

<div className="bg-[#d4ff00] p-8 lg:p-12 text-[#171717] group relative cursor-pointer overflow-hidden flex flex-col justify-between">
<div>
<div className="text-[0.65rem] uppercase tracking-widest text-neutral-600 mb-8 border border-neutral-600 px-2 py-1 w-fit">Engage</div>
<h4 className="text-3xl font-semibold tracking-tight uppercase mb-4 leading-none">Initialize<br/>Project</h4>
</div>
<div className="mt-8 flex justify-end">
<div className="w-12 h-12 bg-[#171717] flex items-center justify-center group-hover:scale-110 transition-transform">
<i className="w-6 h-6 text-[#d4ff00]" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-0 border-b border-neutral-300 relative">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row">

<div className="w-full lg:w-1/2 p-6 lg:p-16 lg:sticky lg:top-20 lg:h-[calc(100vh-5rem)] flex flex-col justify-center border-r border-neutral-300">
<h2 className="text-xs uppercase tracking-[0.2em] font-light mb-4">Deployment Protocol</h2>
<h3 className="text-5xl lg:text-7xl font-semibold tracking-tight uppercase leading-none mb-8">How We<br/>Engineer.</h3>
<p className="text-base font-light text-neutral-600 leading-relaxed max-w-md">
                    A rigorous, deterministic methodology for translating abstract business logic into autonomous computational agents. We leave nothing to chance.
                </p>
<div className="mt-12 flex items-center gap-4">
<div className="w-12 h-[1px] bg-neutral-900"></div>
<span className="text-xs uppercase tracking-widest font-light">Scroll Sequence</span>
</div>
</div>

<div className="w-full lg:w-1/2 bg-white">

<div className="p-8 lg:p-16 border-b border-neutral-200 hover:bg-[#fcfcfc] transition-colors group">
<span className="text-6xl font-medium tracking-tighter text-neutral-200 group-hover:text-neutral-900 transition-colors block mb-8">01</span>
<h4 className="text-2xl font-semibold tracking-tight uppercase mb-4">Systems Architecture Mapping</h4>
<p className="text-base font-light text-neutral-600 leading-relaxed mb-6">We audit your existing data streams, API endpoints, and human-in-the-loop bottlenecks to design the agent's operational environment.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-light text-neutral-500 uppercase tracking-wider">
<i className="w-4 h-4 text-[#d4ff00]" data-lucide="check" strokeWidth="2"></i> API Endpoint Analysis
                        </li>
<li className="flex items-center gap-3 text-sm font-light text-neutral-500 uppercase tracking-wider">
<i className="w-4 h-4 text-[#d4ff00]" data-lucide="check" strokeWidth="2"></i> Logic Mapping
                        </li>
</ul>
</div>

<div className="p-8 lg:p-16 border-b border-neutral-200 hover:bg-[#fcfcfc] transition-colors group">
<span className="text-6xl font-medium tracking-tighter text-neutral-200 group-hover:text-neutral-900 transition-colors block mb-8">02</span>
<h4 className="text-2xl font-semibold tracking-tight uppercase mb-4">Cognitive Model Selection &amp; Tuning</h4>
<p className="text-base font-light text-neutral-600 leading-relaxed mb-6">Matching the right foundation model (GPT-4, Claude 3, Llama) to the specific task, followed by rigorous prompt engineering and fine-tuning.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-light text-neutral-500 uppercase tracking-wider">
<i className="w-4 h-4 text-[#d4ff00]" data-lucide="check" strokeWidth="2"></i> Model Benchmarking
                        </li>
<li className="flex items-center gap-3 text-sm font-light text-neutral-500 uppercase tracking-wider">
<i className="w-4 h-4 text-[#d4ff00]" data-lucide="check" strokeWidth="2"></i> Context Window Optimization
                        </li>
</ul>
</div>

<div className="p-8 lg:p-16 border-b border-neutral-200 hover:bg-[#fcfcfc] transition-colors group">
<span className="text-6xl font-medium tracking-tighter text-neutral-200 group-hover:text-neutral-900 transition-colors block mb-8">03</span>
<h4 className="text-2xl font-semibold tracking-tight uppercase mb-4">Tool Integration &amp; Action Binding</h4>
<p className="text-base font-light text-neutral-600 leading-relaxed mb-6">Equipping the agent with tools (web browsers, code interpreters, custom API calls) so it can execute actions in the real world.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-light text-neutral-500 uppercase tracking-wider">
<i className="w-4 h-4 text-[#d4ff00]" data-lucide="check" strokeWidth="2"></i> Custom Tool Creation
                        </li>
<li className="flex items-center gap-3 text-sm font-light text-neutral-500 uppercase tracking-wider">
<i className="w-4 h-4 text-[#d4ff00]" data-lucide="check" strokeWidth="2"></i> Permission Scoping
                        </li>
</ul>
</div>

<div className="p-8 lg:p-16 hover:bg-[#fcfcfc] transition-colors group">
<span className="text-6xl font-medium tracking-tighter text-neutral-200 group-hover:text-neutral-900 transition-colors block mb-8">04</span>
<h4 className="text-2xl font-semibold tracking-tight uppercase mb-4">Testing, Deployment &amp; Monitoring</h4>
<p className="text-base font-light text-neutral-600 leading-relaxed mb-6">Deploying in shadow mode, analyzing edge cases, and pushing to production with full observability and kill-switches.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm font-light text-neutral-500 uppercase tracking-wider">
<i className="w-4 h-4 text-[#d4ff00]" data-lucide="check" strokeWidth="2"></i> Red Teaming
                        </li>
<li className="flex items-center gap-3 text-sm font-light text-neutral-500 uppercase tracking-wider">
<i className="w-4 h-4 text-[#d4ff00]" data-lucide="check" strokeWidth="2"></i> Telemetry Setup
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-40 border-b border-neutral-300" id="work">
<div className="px-6 lg:px-16 mb-16 flex justify-between items-end">
<div>
<h2 className="text-xs uppercase tracking-[0.2em] font-light mb-4">Case Studies</h2>
<h3 className="text-5xl lg:text-7xl font-semibold tracking-tight uppercase leading-none">Deployed<br/>Intelligence.</h3>
</div>
<div className="hidden md:flex gap-4">
<button className="w-12 h-12 border border-neutral-900 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="flex overflow-x-auto no-scrollbar px-6 lg:px-16 gap-8 pb-12 snap-x">

<div className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] snap-center group cursor-pointer">
<div className="w-full aspect-[4/3] bg-neutral-200 relative overflow-hidden mb-6">
<img alt="Corporate architecture" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 text-[0.65rem] uppercase tracking-widest font-semibold">Fintech</div>
<div className="absolute bottom-4 right-4 w-10 h-10 bg-[#d4ff00] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
<i className="w-5 h-5 text-black" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-2xl font-semibold tracking-tight uppercase mb-2">Automated Underwriting Agent</h4>
<p className="text-sm font-light text-neutral-500 uppercase tracking-wider">Processed 10k+ applications autonomously</p>
</div>
<span className="text-3xl font-medium tracking-tighter text-neutral-300">01</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] snap-center group cursor-pointer">
<div className="w-full aspect-[4/3] bg-neutral-200 relative overflow-hidden mb-6">
<img alt="Server room" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 text-[0.65rem] uppercase tracking-widest font-semibold">Logistics</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-2xl font-semibold tracking-tight uppercase mb-2">Supply Chain Dispatch Swarm</h4>
<p className="text-sm font-light text-neutral-500 uppercase tracking-wider">Reduced routing latency by 85%</p>
</div>
<span className="text-3xl font-medium tracking-tighter text-neutral-300">02</span>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[60vw] lg:min-w-[45vw] snap-center group cursor-pointer">
<div className="w-full aspect-[4/3] bg-neutral-200 relative overflow-hidden mb-6">
<img alt="Abstract tech" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2064&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 text-[0.65rem] uppercase tracking-widest font-semibold">Healthcare</div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-2xl font-semibold tracking-tight uppercase mb-2">Clinical Triage Co-Pilot</h4>
<p className="text-sm font-light text-neutral-500 uppercase tracking-wider">HIPAA compliant patient intake</p>
</div>
<span className="text-3xl font-medium tracking-tighter text-neutral-300">03</span>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-neutral-100 border-b border-neutral-300 relative overflow-hidden">

<div className="absolute inset-0 grid grid-cols-6 lg:grid-cols-12 pointer-events-none opacity-20">
<div className="border-r border-neutral-400 h-full"></div>
<div className="border-r border-neutral-400 h-full"></div>
<div className="border-r border-neutral-400 h-full"></div>
<div className="border-r border-neutral-400 h-full"></div>
<div className="border-r border-neutral-400 h-full"></div>
<div className="border-r border-neutral-400 h-full hidden lg:block"></div>
<div className="border-r border-neutral-400 h-full hidden lg:block"></div>
<div className="border-r border-neutral-400 h-full hidden lg:block"></div>
<div className="border-r border-neutral-400 h-full hidden lg:block"></div>
<div className="border-r border-neutral-400 h-full hidden lg:block"></div>
<div className="border-r border-neutral-400 h-full hidden lg:block"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 text-center">
<h2 className="text-sm uppercase tracking-[0.3em] font-medium mb-8 bg-white inline-block px-4 py-2 border border-neutral-300 shadow-sm">Performance Metrics</h2>
<h3 className="text-4xl md:text-6xl lg:text-8xl font-semibold tracking-tighter uppercase leading-none mb-16 max-w-5xl mx-auto">
                Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-400">Scale.</span> Optimized for <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 to-neutral-400">Speed.</span>
</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-white border border-neutral-300 p-8 lg:p-12 shadow-xl">
<div className="flex flex-col items-center justify-center p-6 md:border-r border-neutral-200">
<span className="text-5xl lg:text-6xl font-medium tracking-tight mb-2">&lt;200<span className="text-2xl text-neutral-400">ms</span></span>
<span className="text-xs uppercase tracking-widest text-neutral-500 font-light">Average Inference Latency</span>
</div>
<div className="flex flex-col items-center justify-center p-6 md:border-r border-neutral-200">
<span className="text-5xl lg:text-6xl font-medium tracking-tight mb-2">99.99<span className="text-2xl text-neutral-400">%</span></span>
<span className="text-xs uppercase tracking-widest text-neutral-500 font-light">Infrastructure Uptime</span>
</div>
<div className="flex flex-col items-center justify-center p-6">
<span className="text-5xl lg:text-6xl font-medium tracking-tight mb-2">10x</span>
<span className="text-xs uppercase tracking-widest text-neutral-500 font-light">ROI within first quarter</span>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-40 px-6 lg:px-16 border-b border-neutral-300" id="insights">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-xs uppercase tracking-[0.2em] font-light mb-4">Client Feedback</h2>
<h3 className="text-4xl lg:text-6xl font-semibold tracking-tight uppercase leading-none">The Verdict.</h3>
<div className="mt-12 flex gap-2">
<div className="w-8 h-1 bg-neutral-900"></div>
<div className="w-8 h-1 bg-neutral-300"></div>
<div className="w-8 h-1 bg-neutral-300"></div>
</div>
</div>
<div className="relative">
<i className="w-16 h-16 text-neutral-200 absolute -top-8 -left-8" data-lucide="quote" strokeWidth="1"></i>
<p className="text-2xl lg:text-4xl font-medium tracking-tight leading-snug mb-8 relative z-10 text-neutral-800">
                    "Agentic didn't just automate our processes; they entirely re-architected how we think about computational labor. The agents they deployed handle 80% of our tier-1 support with higher accuracy than our human team."
                </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-neutral-200 rounded-full grayscale overflow-hidden">
<img alt="Portrait" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="text-sm font-semibold tracking-wide uppercase">Marcus Chen</div>
<div className="text-xs font-light text-neutral-500 uppercase tracking-widest">CTO, Nexus Logistics</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-40 px-6 lg:px-16 border-b border-neutral-300 bg-white">
<div className="max-w-4xl mx-auto">
<h2 className="text-xs uppercase tracking-[0.2em] font-light mb-12 text-center text-neutral-500">Frequently Asked Questions</h2>
<div className="border-t border-neutral-900">

<div className="border-b border-neutral-300">
<button className="faq-btn w-full py-8 flex justify-between items-center text-left hover:text-neutral-600 transition-colors">
<span className="text-xl lg:text-2xl font-medium tracking-tight uppercase">What makes an agent different from traditional RPA?</span>
<i className="w-6 h-6 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="hidden pb-8 text-base font-light text-neutral-600 leading-relaxed max-w-3xl">
                        RPA (Robotic Process Automation) follows strict, pre-programmed rules. If a button moves or data format changes slightly, it breaks. AI Agents possess semantic understanding and reasoning capabilities. They can handle unexpected inputs, navigate ambiguous situations, and adapt to changing interfaces without requiring reprogramming.
                    </div>
</div>

<div className="border-b border-neutral-300">
<button className="faq-btn w-full py-8 flex justify-between items-center text-left hover:text-neutral-600 transition-colors">
<span className="text-xl lg:text-2xl font-medium tracking-tight uppercase">How do you ensure data security and privacy?</span>
<i className="w-6 h-6 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="hidden pb-8 text-base font-light text-neutral-600 leading-relaxed max-w-3xl">
                        We deploy within your existing secure infrastructure (VPC, private cloud). We utilize enterprise-tier LLM endpoints with strict zero-retention policies, meaning your data is never used to train base models. We also implement robust RBAC (Role-Based Access Control) at the agent tool level.
                    </div>
</div>

<div className="border-b border-neutral-300">
<button className="faq-btn w-full py-8 flex justify-between items-center text-left hover:text-neutral-600 transition-colors">
<span className="text-xl lg:text-2xl font-medium tracking-tight uppercase">What is the typical deployment timeline?</span>
<i className="w-6 h-6 transition-transform duration-300" data-lucide="plus" strokeWidth="1.5"></i>
</button>
<div className="hidden pb-8 text-base font-light text-neutral-600 leading-relaxed max-w-3xl">
                        A proof-of-concept (PoC) typically takes 3-4 weeks. Full production deployment of a customized, integrated agent system ranges from 8 to 12 weeks depending on integration complexity and required reliability benchmarks.
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-[#171717] text-white pt-24 lg:pt-40 pb-12 px-6 lg:px-16 overflow-hidden relative" id="contact">

<div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d4ff00] blur-[150px] opacity-20 rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
<div>
<h2 className="text-5xl md:text-7xl lg:text-[10rem] font-semibold tracking-tighter uppercase leading-[0.85] mb-8">
                        Let's<br/>Build.
                    </h2>
<p className="text-lg font-light text-neutral-400 max-w-md uppercase tracking-wider">
                        Initiate contact to discuss your operational bottlenecks and architectural requirements.
                    </p>
</div>
<a className="bg-[#d4ff00] text-black px-8 py-5 text-sm uppercase tracking-widest flex items-center justify-center font-medium hover:bg-white transition-colors group" href="mailto:hello@agentic.ai">
                    Initialize System <i className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="2"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t border-neutral-800">
<div className="col-span-1 md:col-span-2">
<a className="text-2xl font-medium tracking-tight flex items-start gap-1 mb-6" href="#">
                        AGENTIC<span className="text-[0.6rem] mt-1 border border-white rounded-full w-4 h-4 flex items-center justify-center">R</span>
</a>
<p className="text-xs uppercase tracking-widest text-neutral-500 font-light max-w-xs leading-loose">
                        Engineering the next generation of autonomous computational entities for enterprise scale.
                    </p>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-neutral-600 mb-6 font-semibold">Navigation</h4>
<ul className="space-y-4">
<li><a className="text-sm font-light text-neutral-300 hover:text-[#d4ff00] transition-colors uppercase tracking-wider" href="#work">Work</a></li>
<li><a className="text-sm font-light text-neutral-300 hover:text-[#d4ff00] transition-colors uppercase tracking-wider" href="#agents">Agents</a></li>
<li><a className="text-sm font-light text-neutral-300 hover:text-[#d4ff00] transition-colors uppercase tracking-wider" href="#services">Services</a></li>
<li><a className="text-sm font-light text-neutral-300 hover:text-[#d4ff00] transition-colors uppercase tracking-wider" href="#about">About</a></li>
</ul>
</div>
<div>
<h4 className="text-xs uppercase tracking-widest text-neutral-600 mb-6 font-semibold">Connect</h4>
<ul className="space-y-4">
<li><a className="text-sm font-light text-neutral-300 hover:text-[#d4ff00] transition-colors uppercase tracking-wider" href="#">Twitter / X</a></li>
<li><a className="text-sm font-light text-neutral-300 hover:text-[#d4ff00] transition-colors uppercase tracking-wider" href="#">LinkedIn</a></li>
<li><a className="text-sm font-light text-neutral-300 hover:text-[#d4ff00] transition-colors uppercase tracking-wider" href="#">GitHub</a></li>
</ul>
</div>
</div>
<div className="mt-24 flex flex-col md:flex-row justify-between items-center text-[0.65rem] uppercase tracking-widest text-neutral-600">
<p>© 2024 AGENTIC SYSTEMS INC.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
