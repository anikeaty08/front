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



        // Tab Logic for Curriculum
        function switchTab(index) {
            // Update buttons
            const buttons = document.querySelectorAll('#module-list button');
            buttons.forEach((btn, i) => {
                if (i === index) {
                    btn.classList.add('bg-zinc-900/30', 'border-zinc-800', 'ring-1', 'ring-zinc-700');
                    btn.classList.remove('border-transparent');
                    btn.querySelector('h4').classList.add('text-zinc-200');
                    btn.querySelector('h4').classList.remove('text-zinc-400');
                    btn.querySelector('.iconify').classList.add('text-indigo-400');
                } else {
                    btn.classList.remove('bg-zinc-900/30', 'border-zinc-800', 'ring-1', 'ring-zinc-700');
                    btn.classList.add('border-transparent');
                    btn.querySelector('h4').classList.remove('text-zinc-200');
                    btn.querySelector('h4').classList.add('text-zinc-400');
                    btn.querySelector('.iconify').classList.remove('text-indigo-400');
                }
            });

            // Update content
            const contents = [
                document.getElementById('tab-content-0'),
                document.getElementById('tab-content-1'),
                document.getElementById('tab-content-2')
            ];

            contents.forEach((content, i) => {
                if (i === index) {
                    content.classList.remove('hidden');
                    // Small animation trigger
                    content.style.opacity = '0';
                    setTimeout(() => content.style.opacity = '1', 50);
                } else {
                    content.classList.add('hidden');
                }
            });
        }
    
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<a className="text-sm font-semibold tracking-widest text-white flex items-center gap-2" href="#">
<svg aria-hidden="true" data-height="18" data-icon="lucide:bot" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
                AGENTIC
            </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors duration-200" href="#curriculum">Curriculum</a>
<a className="hover:text-white transition-colors duration-200" href="#platform">Platform</a>
<a className="hover:text-white transition-colors duration-200" href="#pricing">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium hover:text-white transition-colors" href="#">Log in</a>
<a className="group relative px-4 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-zinc-200 transition-all overflow-hidden" href="#">
<span className="relative z-10">Apply Now</span>
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
</a>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="absolute inset-0 bg-grid mask-image-gradient pointer-events-none"></div>
<div className="text-center max-w-4xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] md:text-xs font-medium text-indigo-300 mb-8 animate-fade-in-up">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                New Cohort Starting October 1st
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 mb-6 leading-[1.1] animate-fade-in-up">
                Master the Age of <br/> Autonomous Marketing.
            </h1>
<p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-light animate-fade-in-up" style={{animationDelay: '0.1s'}}>
                Move beyond prompts. Build, deploy, and orchestrate multi-agent systems that automate SEO, content, and ad-ops. The future isn't manual.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
<button className="w-full md:w-auto px-6 py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                    Start Learning
                    <svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-full md:w-auto px-6 py-3 rounded-lg border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10 transition-colors backdrop-blur-sm">
                    View Syllabus
                </button>
</div>
</div>

<div className="mt-20 max-w-5xl mx-auto px-6 relative animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-20 blur-lg"></div>
<div className="relative bg-zinc-950 border border-white/10 rounded-xl overflow-hidden shadow-2xl">
<div className="flex gap-2 bg-zinc-900/50 border-white/5 border-b pt-3 pr-4 pb-3 pl-4 gap-x-2 gap-y-2 items-center">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="ml-4 text-[10px] text-zinc-500 font-mono">agent_workflow_v2.py</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5 h-64 md:h-80">

<div className="p-6 space-y-6 bg-zinc-950/50">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-zinc-300">Agent Status</span>
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
</div>
<div className="space-y-4">
<div className="space-y-2">
<label className="text-[10px] uppercase font-semibold text-zinc-500 tracking-wider" style={{}}>Creativity Level</label>
<div className="relative w-full h-1 bg-zinc-800 rounded-full">
<div className="absolute top-0 left-0 h-full bg-indigo-500 rounded-full w-3/4"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[75%] w-3 h-3 bg-white rounded-full shadow cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold">Model</label>
<div className="p-2 bg-zinc-900 border border-white/5 rounded text-xs text-zinc-300 flex justify-between items-center cursor-pointer hover:border-white/20 transition-colors">
<span>GPT-4o-Mini</span>
<svg aria-hidden="true" data-icon="lucide:chevron-down" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>

<div className="flex items-center justify-between pt-2">
<span className="text-xs text-zinc-400">Auto-Deploy Ads</span>
<div className="relative inline-block w-8 h-4 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox absolute block w-4 h-4 rounded-full bg-white border-4 appearance-none cursor-pointer border-zinc-900 checked:border-indigo-500 transition-all duration-300 ease-in-out left-0 checked:left-4" id="toggle" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-4 rounded-full bg-zinc-800 cursor-pointer" htmlFor="toggle"></label>
</div>
</div>
</div>
</div>

<div className="col-span-2 bg-zinc-950 p-6 font-mono text-xs overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-zinc-950/80 pointer-events-none z-10"></div>
<div className="space-y-2.5 text-zinc-500">
<div className="flex gap-2">
<span className="text-emerald-500">➜</span>
<span>Initialize content_agent --topic="SaaS Growth"</span>
</div>
<div className="text-zinc-400 pl-4 border-l border-zinc-800 space-y-1">
<p>[INFO] Scanning SERP data for "B2B Marketing"...</p>
<p>[INFO] Found 14 high-volume keywords.</p>
<p className="text-indigo-400">[AGENT] Draft 1 generated (0.4s).</p>
<p>[CRITIC] Reviewing tone and accuracy...</p>
</div>
<div className="flex gap-2 pt-2">
<span className="text-emerald-500">➜</span>
<span className="shimmer bg-clip-text text-transparent bg-gradient-to-r from-zinc-200 to-zinc-500">Optimizing headers for conversion...</span>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="border-y border-white/5 bg-white/[0.02]">
<div className="max-w-6xl mx-auto px-6 py-10">
<p className="text-center text-xs font-medium text-zinc-500 mb-8 tracking-wider">ALUMNI FROM FORWARD-THINKING TEAMS</p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold tracking-tighter text-white">ACME<span className="text-indigo-500">.</span>AI</span>
<span className="text-lg font-semibold tracking-tight text-white flex items-center gap-1"><span className="w-4 h-4 bg-white rounded-full"></span> ORBIT</span>
<span className="text-xl font-bold tracking-tighter text-white italic">VORTEX</span>
<span className="text-lg font-semibold tracking-tight text-white border border-white px-1">FRAMER</span>
<span className="text-lg font-bold tracking-tighter text-white flex items-center gap-1"><svg aria-hidden="true" data-icon="lucide:triangle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> NEXT</span>
</div>
</div>
</section>

<section className="py-24" id="platform">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16 md:text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Why learn Agentic Marketing?</h2>
<p className="text-zinc-400 text-sm md:text-base leading-relaxed">Traditional automation is brittle. Agents are adaptive. Learn to build systems that reason, execute, and improve over time.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300">
<svg aria-hidden="true" data-icon="lucide:workflow" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Workflow Orchestration</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">Don't just chat with bots. Chain multiple agents together to handle complex tasks like market research and report generation autonomously.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300">
<svg aria-hidden="true" data-icon="lucide:database" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path><path d="M3 12a9 3 0 0 0 18 0"></path></g></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">RAG &amp; Knowledge Bases</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">Connect LLMs to your company data. Build agents that know your brand guidelines, past performance, and customer personas inside out.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-white/10 transition-all duration-300 hover:bg-zinc-900/60">
<div className="w-10 h-10 rounded-lg bg-zinc-800/50 flex items-center justify-center mb-6 text-white group-hover:scale-110 group-hover:bg-zinc-800 transition-all duration-300">
<svg aria-hidden="true" data-icon="lucide:code-2" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m18 16l4-4l-4-4M6 8l-4 4l4 4m8.5-12l-5 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-lg font-medium text-white mb-2">Low-Code &amp; Python</h3>
<p className="text-sm text-zinc-500 leading-relaxed group-hover:text-zinc-400 transition-colors">We teach the full spectrum. Start with drag-and-drop builders like LangFlow, graduate to custom Python agents using LangChain.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative" id="curriculum">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent"></div>
<div className="max-w-5xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 space-y-8">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Curriculum</h2>
<p className="text-zinc-400 text-sm">6 weeks of intensive training. From prompt engineering to deploying autonomous swarms.</p>
</div>
<div className="space-y-2" id="module-list">

<button className="w-full text-left p-4 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900 transition-all group active-module ring-1 ring-zinc-700" onclick="switchTab(0)">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-mono text-indigo-400">MODULE 01</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-sm font-medium text-zinc-200">Foundations of LLMs</h4>
</button>

<button className="w-full text-left p-4 rounded-xl border border-transparent hover:bg-zinc-900 transition-all group" onclick="switchTab(1)">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-mono text-zinc-500">MODULE 02</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200">Building Single Agents</h4>
</button>

<button className="w-full text-left p-4 rounded-xl border border-transparent hover:bg-zinc-900 transition-all group" onclick="switchTab(2)">
<div className="flex items-center justify-between mb-1">
<span className="text-xs font-mono text-zinc-500">MODULE 03</span>
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h4 className="text-sm font-medium text-zinc-400 group-hover:text-zinc-200">Multi-Agent Orchestration</h4>
</button>
</div>
</div>

<div className="lg:col-span-7">
<div className="h-full rounded-2xl border border-white/10 bg-zinc-900/20 backdrop-blur-sm p-1 relative overflow-hidden min-h-[400px]">

<div className="h-full p-8 flex flex-col justify-between transition-all duration-500 ease-out" id="tab-content-0">
<div>
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-medium mb-6 border border-indigo-500/20">THEORY &amp; PRACTICE</div>
<h3 className="text-2xl font-semibold text-white mb-4">Understanding the "Brain"</h3>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-sm text-zinc-400">
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Context windows vs. RAG implementation</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Few-shot prompting techniques for marketers</span>
</li>
<li className="flex items-start gap-3 text-sm text-zinc-400">
<svg aria-hidden="true" data-icon="lucide:check" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Token economics and cost optimization</span>
</li>
</ul>
</div>
<div className="p-4 rounded-lg bg-black border border-zinc-800 font-mono text-xs text-zinc-400">
<div className="flex justify-between text-zinc-600 mb-2 border-b border-zinc-800 pb-2">
<span>lesson_01.py</span>
<span>Python</span>
</div>
<span className="text-purple-400">import</span> openai
                                response = client.chat.completions.create(
                                  model=<span className="text-green-400">"gpt-4-turbo"</span>,
                                  messages=[
                                    {<span className="text-green-400">"role"</span>: <span className="text-green-400">"system"</span>, <span className="text-green-400">"content"</span>: <span className="text-green-400">"You are a marketing strategist."</span>}
                                  ]
                                )
                            </div>
</div>

<div className="hidden h-full p-8 flex flex-col justify-between transition-all duration-500 ease-out" id="tab-content-1">
<div>
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-teal-500/10 text-teal-400 text-[10px] font-medium mb-6 border border-teal-500/20">TOOLS</div>
<h3 className="text-2xl font-semibold text-white mb-4">Building Your First Agent</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">Create an agent that can access the internet, scrape data, and summarize findings into a formatted report without human intervention.</p>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 bg-zinc-900/50 rounded-lg border border-white/5 hover:border-teal-500/30 transition-colors">
<svg aria-hidden="true" data-icon="lucide:globe" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
<div className="text-sm font-medium text-white">Web Browsing</div>
</div>
<div className="p-4 bg-zinc-900/50 rounded-lg border border-white/5 hover:border-teal-500/30 transition-colors">
<svg aria-hidden="true" data-icon="lucide:file-text" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
<div className="text-sm font-medium text-white">File I/O</div>
</div>
</div>
</div>
</div>

<div className="hidden h-full p-8 flex flex-col justify-between transition-all duration-500 ease-out" id="tab-content-2">
<div>
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-orange-500/10 text-orange-400 text-[10px] font-medium mb-6 border border-orange-500/20">ADVANCED</div>
<h3 className="text-2xl font-semibold text-white mb-4">CrewAI &amp; AutoGen</h3>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">Orchestrate a team of specialized agents: a researcher, a writer, and an editor working in a loop until the content meets your quality score.</p>
<div className="relative h-32 w-full mt-8">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center z-10 shadow-lg shadow-black"><svg aria-hidden="true" data-icon="lucide:bot" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg></div>
<div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center z-10 shadow-lg shadow-black"><svg aria-hidden="true" data-icon="lucide:file-edit" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.659 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v9.34"></path><path d="M14 2v5a1 1 0 0 0 1 1h5m-9.622 4.622a1 1 0 0 1 3 3.003L8.36 20.637a2 2 0 0 1-.854.506l-2.867.837a.5.5 0 0 1-.62-.62l.836-2.869a2 2 0 0 1 .506-.853z"></path></g></svg></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-zinc-800 border border-zinc-600 flex items-center justify-center z-10 shadow-lg shadow-black"><svg aria-hidden="true" data-icon="lucide:check-circle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11l3 3L22 4"></path></g></svg></div>
<div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-zinc-800 via-orange-500/50 to-zinc-800 -z-0"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24" id="pricing">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white text-center mb-16">Invest in the future of work.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="p-8 rounded-2xl bg-zinc-900/20 border border-zinc-800 hover:border-zinc-700 transition-colors flex flex-col">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-medium text-white">Professional</h3>
<p className="text-xs text-zinc-500 mt-1">For individual marketers</p>
</div>
<div className="text-right">
<span className="text-2xl font-semibold text-white">$499</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Full 6-week curriculum
                        </li>
<li className="flex gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Community Discord access
                        </li>
<li className="flex gap-3 text-sm text-zinc-300">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            3 Pre-built Agent Templates
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-zinc-700 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">Enroll Now</button>
</div>

<div className="relative p-8 rounded-2xl bg-zinc-900 border border-indigo-500/30 shadow-[0_0_40px_-10px_rgba(99,102,241,0.1)] flex flex-col">
<div className="absolute top-0 right-0 p-3">
<span className="inline-block w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></span>
</div>
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-medium text-white">Agency Bundle</h3>
<p className="text-xs text-zinc-500 mt-1">For teams &amp; scalers</p>
</div>
<div className="text-right">
<span className="text-2xl font-semibold text-white">$999</span>
</div>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex gap-3 text-sm text-white">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Everything in Professional
                        </li>
<li className="flex gap-3 text-sm text-white">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            10+ Advanced Agent Templates
                        </li>
<li className="flex gap-3 text-sm text-white">
<svg aria-hidden="true" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            1-on-1 Code Review
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-200 transition-colors">Get Started</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 bg-black">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<a className="text-sm font-semibold tracking-widest text-white flex items-center gap-2 mb-4" href="#">
<svg aria-hidden="true" data-icon="lucide:bot" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
                    AGENTIC
                </a>
<p className="text-xs text-zinc-600 leading-relaxed">
                    The world's first code-centric marketing institute.<br/>© 2024 Agentic Institute.
                </p>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Resources</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">Blog</a></li>
<li><a className="hover:text-zinc-300" href="#">Agent Library</a></li>
<li><a className="hover:text-zinc-300" href="#">Documentation</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-xs text-zinc-500">
<li><a className="hover:text-zinc-300" href="#">About</a></li>
<li><a className="hover:text-zinc-300" href="#">Careers</a></li>
<li><a className="hover:text-zinc-300" href="#">Contact</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h4 className="text-xs font-semibold text-white mb-4">Stay updated</h4>
<form className="flex gap-2">
<input className="bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-indigo-500 w-full transition-colors" placeholder="email@domain.com" type="email"/>
<button className="px-3 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-xs font-medium text-white transition-colors" type="submit">
<svg aria-hidden="true" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</form>
</div>
</div>
</footer>


    </>
  );
}
