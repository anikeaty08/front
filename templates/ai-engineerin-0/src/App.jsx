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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<div className="absolute inset-0 z-0 pointer-events-none grid-bg h-[60vh]"></div>
<div className="absolute inset-0 z-0 pointer-events-none glow-bg h-screen"></div>

<nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-7xl mx-auto w-full">
<div className="text-lg font-semibold tracking-tighter flex items-center gap-2">
<div className="w-6 h-6 bg-zinc-50 text-zinc-950 flex items-center justify-center rounded-sm text-xs">A</div>
<span>ENG.</span>
</div>
<div className="hidden md:flex items-center gap-6 text-sm text-zinc-400 font-medium">
<a className="hover:text-zinc-50 transition-colors" href="#expertise">Expertise</a>
<a className="hover:text-zinc-50 transition-colors" href="#lab">The Lab</a>
<a className="hover:text-zinc-50 transition-colors" href="#services">Services</a>
</div>
<a className="text-sm font-medium bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-colors px-4 py-2 rounded-md" href="#contact">
            Get in touch
        </a>
</nav>

<main className="relative z-10 flex-grow flex flex-col max-w-7xl mx-auto w-full px-6">

<section className="py-24 md:py-32 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-300 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Available for new projects
            </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-50 to-zinc-500 max-w-4xl leading-[1.1]">
                Building Intelligent Engines for the Modern Web.
            </h1>
<p className="mt-6 text-base md:text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
                I bridge the gap between complex AI orchestration and seamless user experiences. Turning state-of-the-art models into production-ready software.
            </p>
<div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 rounded-md bg-zinc-50 text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" href="#lab">
                    View My Work
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto px-6 py-3 rounded-md bg-transparent border border-zinc-800 text-zinc-50 font-medium text-sm hover:bg-zinc-900 transition-colors flex items-center justify-center" href="#contact">
                    Let's Talk
                </a>
</div>
</section>

<section className="py-20 border-t border-zinc-900" id="expertise">
<div className="mb-12">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-50">Expertise &amp; Stack</h2>
<p className="text-sm text-zinc-400 mt-2">The tools I use to build scalable intelligence.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="md:col-span-2 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between group hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between mb-8">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center">
<iconify-icon className="text-xl text-zinc-300" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 tracking-wider uppercase">Artificial Intelligence</span>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2">AI Orchestration &amp; RAG</h3>
<p className="text-sm text-zinc-400 mb-6 max-w-md">Integrating large language models with vector databases to create context-aware applications that understand your data.</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-medium text-zinc-300">
<iconify-icon icon="solar:link-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> LangChain
                            </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-medium text-zinc-300">
<iconify-icon icon="solar:database-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Pinecone
                            </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-medium text-zinc-300">
<iconify-icon icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon> OpenAI
                            </span>
</div>
</div>
</div>

<div className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-between group hover:border-zinc-700 transition-colors">
<div className="flex items-center justify-between mb-8">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center">
<iconify-icon className="text-xl text-zinc-300" icon="solar:window-frame-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div>
<h3 className="text-xl font-semibold tracking-tight mb-2">Modern Web</h3>
<p className="text-sm text-zinc-400 mb-6">High-performance, accessible, and beautiful interfaces.</p>
<div className="flex flex-col gap-2">
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-medium text-zinc-300 w-full">
<span className="w-4 h-4 bg-zinc-100 rounded-full flex items-center justify-center text-[8px] text-zinc-900 font-semibold tracking-tighter">N</span> Next.js
                            </span>
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-medium text-zinc-300 w-full">
<span className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center text-[8px] text-zinc-50 font-semibold tracking-tighter">TS</span> TypeScript
                            </span>
<span className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-zinc-950 border border-zinc-800 text-xs font-medium text-zinc-300 w-full">
<iconify-icon className="text-cyan-400" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Tailwind CSS
                            </span>
</div>
</div>
</div>

<div className="md:col-span-3 bg-zinc-900/40 border border-zinc-800 rounded-2xl p-8 group hover:border-zinc-700 transition-colors relative overflow-hidden">
<div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-zinc-800/20 to-transparent pointer-events-none"></div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
<div className="max-w-xl">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 border border-zinc-700 flex items-center justify-center mb-6">
<iconify-icon className="text-xl text-zinc-300" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-2">DevOps &amp; Automation</h3>
<p className="text-sm text-zinc-400">Streamlining deployments and automating workflows to ensure reliability and speed from code commit to production.</p>
</div>
<div className="flex flex-wrap md:flex-nowrap gap-3">
<div className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-950 border border-zinc-800 min-w-[100px]">
<iconify-icon className="text-2xl text-zinc-400 mb-2" icon="solar:code-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-300">GH Actions</span>
</div>
<div className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-950 border border-zinc-800 min-w-[100px]">
<iconify-icon className="text-2xl text-zinc-400 mb-2" icon="solar:box-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Docker</span>
</div>
<div className="flex flex-col items-center justify-center p-4 rounded-xl bg-zinc-950 border border-zinc-800 min-w-[100px]">
<iconify-icon className="text-2xl text-zinc-400 mb-2" icon="solar:cloud-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-xs font-medium text-zinc-300">Terraform</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-zinc-900" id="lab">
<div className="flex items-end justify-between mb-12">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-50">The Lab</h2>
<p className="text-sm text-zinc-400 mt-2">Simulated live environments of recent deployments.</p>
</div>
<a className="hidden md:flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors" href="#">
                    View GitHub <iconify-icon icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">

<div className="h-48 bg-zinc-900 border-b border-zinc-800 relative flex flex-col">
<div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-800/50 bg-zinc-900/50">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<span className="ml-2 text-[10px] font-medium text-zinc-500 font-mono">agent.chat</span>
</div>
<div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
<div className="self-end bg-zinc-800 px-3 py-2 rounded-lg rounded-tr-sm max-w-[80%]">
<p className="text-[10px] text-zinc-300">How do I configure the API?</p>
</div>
<div className="self-start bg-zinc-950 border border-zinc-800 px-3 py-2 rounded-lg rounded-tl-sm max-w-[90%] flex gap-2">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-[10px] text-zinc-400 leading-relaxed">Based on your docs, add the <code className="text-zinc-300">API_KEY</code> to your <code className="text-zinc-300">.env</code> file. <span className="inline-block w-1 h-2 bg-zinc-400 animate-pulse ml-1"></span></p>
</div>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold tracking-tight text-zinc-50">Autonomous RAG Agent</h3>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-50 transition-colors" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-4 line-clamp-2">A chatbot that scans your documentation and answers user questions with citations.</p>
<div className="flex gap-2">
<span className="text-[10px] font-medium px-2 py-1 rounded bg-zinc-900 text-zinc-400">Next.js</span>
<span className="text-[10px] font-medium px-2 py-1 rounded bg-zinc-900 text-zinc-400">Pinecone</span>
</div>
</div>
</div>

<div className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">

<div className="h-48 bg-[#0C0C0C] border-b border-zinc-800 relative flex flex-col font-mono">
<div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800/50 bg-zinc-900/30">
<span className="text-[10px] font-medium text-zinc-500">bash — 80x24</span>
</div>
<div className="flex-1 p-4 flex flex-col gap-1 overflow-hidden text-[10px] text-zinc-400">
<p><span className="text-green-400">➜</span> <span className="text-cyan-400">repo</span> git push origin main</p>
<p className="text-zinc-500">Evaluating commit hook...</p>
<p className="text-yellow-400">⚠ Lint error detected in src/utils.ts</p>
<p className="text-zinc-500">Invoking LLM repair agent...</p>
<p className="text-zinc-300">&gt; Generated fix for missing types.</p>
<p className="text-green-400">✔ Auto-commit successful. Push resumed.</p>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold tracking-tight text-zinc-50">Self-Healing CI/CD</h3>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-50 transition-colors" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-4 line-clamp-2">An automation script that uses AI to detect and fix small syntax bugs in pull requests automatically.</p>
<div className="flex gap-2">
<span className="text-[10px] font-medium px-2 py-1 rounded bg-zinc-900 text-zinc-400">Python</span>
<span className="text-[10px] font-medium px-2 py-1 rounded bg-zinc-900 text-zinc-400">GitHub Actions</span>
</div>
</div>
</div>

<div className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-950 overflow-hidden">

<div className="h-48 bg-zinc-900 border-b border-zinc-800 relative flex flex-col">
<div className="flex-1 p-4 flex gap-4">

<div className="w-12 h-full border-r border-zinc-800/50 flex flex-col gap-2 pt-2">
<div className="w-6 h-6 rounded bg-zinc-800"></div>
<div className="w-6 h-6 rounded bg-zinc-800/50"></div>
<div className="w-6 h-6 rounded bg-zinc-800/50"></div>
</div>

<div className="flex-1 flex flex-col gap-3 pt-2">
<div className="w-1/3 h-3 rounded bg-zinc-800"></div>
<div className="flex gap-2">
<div className="flex-1 h-12 rounded bg-zinc-950 border border-zinc-800 flex items-end p-2 gap-1">
<div className="w-1/4 bg-blue-500/20 h-[30%] rounded-t-sm"></div>
<div className="w-1/4 bg-blue-500/40 h-[60%] rounded-t-sm"></div>
<div className="w-1/4 bg-blue-500/60 h-[40%] rounded-t-sm"></div>
<div className="w-1/4 bg-blue-500/80 h-[90%] rounded-t-sm"></div>
</div>
<div className="flex-1 h-12 rounded bg-zinc-950 border border-zinc-800"></div>
</div>
<div className="w-full h-16 rounded bg-zinc-950 border border-zinc-800 mt-auto"></div>
</div>
</div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-2">
<h3 className="text-base font-semibold tracking-tight text-zinc-50">SaaS Analytics Panel</h3>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-50 transition-colors" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-zinc-400 mb-4 line-clamp-2">A high-performance web app with real-time AI data streaming and predictive analytics charts.</p>
<div className="flex gap-2">
<span className="text-[10px] font-medium px-2 py-1 rounded bg-zinc-900 text-zinc-400">React</span>
<span className="text-[10px] font-medium px-2 py-1 rounded bg-zinc-900 text-zinc-400">WebSockets</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-zinc-900" id="services">
<div className="text-center mb-16">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-50">Engagement Models</h2>
<p className="text-sm text-zinc-400 mt-2 max-w-md mx-auto">Clear tiers for contract work, designed to scale with your project's complexity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-zinc-50 mb-1">AI Integration</h3>
<p className="text-xs text-zinc-400 mb-6 min-h-[40px]">Add an LLM to your existing site or application seamlessly.</p>
<div className="mb-8">
<span className="text-3xl font-semibold tracking-tighter">Tier 1</span>
</div>
<ul className="flex flex-col gap-3 mb-8 flex-grow">
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> API Setup &amp; Configuration
                        </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Basic Prompt Engineering
                        </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Integration into existing UI
                        </li>
</ul>
<a className="w-full py-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-50 font-medium text-sm hover:bg-zinc-800 transition-colors text-center" href="#contact">
                        Select Plan
                    </a>
</div>

<div className="rounded-2xl border border-zinc-700 bg-zinc-900/60 p-8 flex flex-col relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-zinc-500 to-zinc-300"></div>
<div className="flex items-center justify-between mb-1">
<h3 className="text-lg font-semibold tracking-tight text-zinc-50">Workflow Automation</h3>
<span className="text-[10px] uppercase tracking-wider font-semibold text-zinc-950 bg-zinc-50 px-2 py-0.5 rounded-sm">Popular</span>
</div>
<p className="text-xs text-zinc-400 mb-6 min-h-[40px]">Custom Python scripts or Zapier/Make setups to eliminate manual tasks.</p>
<div className="mb-8">
<span className="text-3xl font-semibold tracking-tighter">Tier 2</span>
</div>
<ul className="flex flex-col gap-3 mb-8 flex-grow">
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-zinc-50 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Multi-step AI Workflows
                        </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-zinc-50 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Custom Python scripting
                        </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-zinc-50 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Error handling &amp; logging
                        </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-zinc-50 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Deployment setup
                        </li>
</ul>
<a className="w-full py-2.5 rounded-md bg-zinc-50 text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors text-center" href="#contact">
                        Select Plan
                    </a>
</div>

<div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-8 flex flex-col">
<h3 className="text-lg font-semibold tracking-tight text-zinc-50 mb-1">Full-Stack AI SaaS</h3>
<p className="text-xs text-zinc-400 mb-6 min-h-[40px]">The whole package from scratch. Idea to production-ready application.</p>
<div className="mb-8">
<span className="text-3xl font-semibold tracking-tighter">Tier 3</span>
</div>
<ul className="flex flex-col gap-3 mb-8 flex-grow">
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Architecture Design
                        </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Next.js / Tailwind UI
                        </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Advanced RAG / Agents
                        </li>
<li className="flex items-start gap-2 text-sm text-zinc-300">
<iconify-icon className="text-zinc-500 mt-0.5" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> CI/CD &amp; Hosting Setup
                        </li>
</ul>
<a className="w-full py-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-50 font-medium text-sm hover:bg-zinc-800 transition-colors text-center" href="#contact">
                        Select Plan
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-zinc-900 bg-zinc-950/80 backdrop-blur-xl mt-auto relative z-10" id="contact">
<div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-16">

<div className="flex flex-col justify-between">
<div>
<div className="text-2xl font-semibold tracking-tighter flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-zinc-50 text-zinc-950 flex items-center justify-center rounded-sm text-sm">A</div>
<span>ENG.</span>
</div>
<p className="text-sm text-zinc-400 max-w-sm mb-8">
                        Building the next generation of web applications powered by artificial intelligence. Available for freelance opportunities.
                    </p>
<div className="flex flex-col gap-4">
<a className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-zinc-50 transition-colors group w-fit" href="#">
<iconify-icon className="text-lg text-zinc-500 group-hover:text-zinc-50 transition-colors" icon="solar:code-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> GitHub
                        </a>
<a className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-zinc-50 transition-colors group w-fit" href="#">
<iconify-icon className="text-lg text-zinc-500 group-hover:text-zinc-50 transition-colors" icon="solar:user-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon> LinkedIn
                        </a>
<a className="flex items-center gap-2 text-sm font-medium text-zinc-300 hover:text-zinc-50 transition-colors group w-fit" href="#">
<iconify-icon className="text-lg text-zinc-500 group-hover:text-zinc-50 transition-colors" icon="solar:briefcase-linear" style={{strokeWidth: '1.5'}}></iconify-icon> Fiverr Profile
                        </a>
</div>
</div>
<div className="mt-16 text-xs text-zinc-600 font-medium">
                    © 2026 AI Engineering Portfolio. All rights reserved.
                </div>
</div>

<div className="bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 md:p-8">
<h3 className="text-lg font-semibold tracking-tight text-zinc-50 mb-1">Quick Request</h3>
<p className="text-xs text-zinc-400 mb-6">Describe your project briefly, and I'll get back to you within 24 hours.</p>
<form className="flex flex-col gap-4">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-300" htmlFor="email">Email Address</label>
<input className="bg-zinc-950 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-50 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-shadow" id="email" placeholder="you@company.com" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-300" htmlFor="service">Interested In</label>
<div className="relative">
<select className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-50 appearance-none focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-shadow cursor-pointer" id="service">
<option value="tier1">Tier 1: AI Integration</option>
<option selected="" value="tier2">Tier 2: Workflow Automation</option>
<option value="tier3">Tier 3: Full-Stack AI SaaS</option>
<option value="other">Other / Not Sure</option>
</select>
<iconify-icon className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-300" htmlFor="message">Project Details</label>
<textarea className="bg-zinc-950 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-50 placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 transition-shadow resize-none" id="message" placeholder="I need a chatbot that..." rows="3"></textarea>
</div>
<button className="mt-2 w-full py-2.5 rounded-md bg-zinc-50 text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2" type="button">
                        Send Request
                        <iconify-icon icon="solar:plain-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</form>
</div>
</div>
</footer>

    </>
  );
}
