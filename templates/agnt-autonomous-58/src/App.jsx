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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                            for(let i=0; i<60; i++) {
                                let isIncident = Math.random() > 0.98;
                                let colorClass = isIncident ? 'bg-amber-500' : 'bg-emerald-500';
                                document.write(`<div class="flex-1 rounded-sm opacity-80 hover:opacity-100 transition-opacity ${colorClass}" style="height: ${isIncident ? '60%' : '100%'}"></div>`);
                            }
                        


        // Interactive Mouse Glow
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            document.body.style.setProperty('--mouse-x', `${x}%`);
            document.body.style.setProperty('--mouse-y', `${y}%`);
        });

        // Simple Hash Router for "Multiple Pages" feel
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page-view');

        function navigateToHash() {
            const hash = window.location.hash || '#home';
            const targetId = 'page-' + hash.substring(1);
            
            let found = false;

            pages.forEach(page => {
                if (page.id === targetId) {
                    page.classList.remove('hidden');
                    // Retrigger animation
                    page.style.animation = 'none';
                    page.offsetHeight; /* trigger reflow */
                    page.style.animation = null;
                    found = true;
                } else {
                    page.classList.add('hidden');
                }
            });

            // Fallback to home if hash doesn't match
            if (!found && hash !== '#home') {
                window.location.hash = '#home';
                return;
            }

            // Update Nav States
            navLinks.forEach(link => {
                if (link.getAttribute('href') === hash) {
                    link.classList.remove('text-zinc-500');
                    link.classList.add('text-white');
                } else {
                    link.classList.add('text-zinc-500');
                    link.classList.remove('text-white');
                }
            });

            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        window.addEventListener('hashchange', navigateToHash);
        // Initialize on load
        window.addEventListener('DOMContentLoaded', navigateToHash);

        // Gamified Terminal Logic
        let isTerminalRunning = false;
        const terminalLines = [
            "Initializing kernel via secure bypass...",
            "Loading modules: [NLP, Vision, Logic, Webhook]",
            "Connecting to AGNT enclave...",
            "<span class='text-emerald-500'>Handshake successful.</span>",
            "Allocating vector memory (1536 dim)...",
            "Agent [04-Epsilon] mapped and active.",
            "<span class='text-white cursor-blink'>Awaiting parameters</span>"
        ];

        async function runTerminal() {
            if (isTerminalRunning) return;
            isTerminalRunning = true;
            
            const output = document.getElementById('terminal-output');
            output.innerHTML = ''; // Clear
            
            // Add grid overlay for aesthetic
            output.innerHTML += `<div class="absolute inset-0 pointer-events-none opacity-5" style="background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px); background-size: 10px 10px;"></div>`;
            
            const contentContainer = document.createElement('div');
            contentContainer.className = "relative z-10 flex flex-col gap-1";
            output.appendChild(contentContainer);

            for (let i = 0; i < terminalLines.length; i++) {
                const lineDiv = document.createElement('div');
                lineDiv.innerHTML = `<span class="text-zinc-600 mr-2">></span> ${terminalLines[i]}`;
                contentContainer.appendChild(lineDiv);
                
                // Scroll to bottom
                output.scrollTop = output.scrollHeight;

                // Random delay between 300ms and 800ms
                if (i < terminalLines.length - 1) {
                    await new Promise(r => setTimeout(r, 300 + Math.random() * 500));
                }
            }
            isTerminalRunning = false;
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
      

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-reveal">
<div className="flex items-center gap-8 px-6 py-3 rounded-full border border-white/10 bg-black/70 backdrop-blur-xl shadow-2xl">
<a className="text-xs font-medium tracking-tighter text-white uppercase nav-link" href="#home">AGNT.</a>
<div className="hidden md:flex items-center gap-6 text-xs text-zinc-500">
<a className="hover:text-white transition-colors nav-link" href="#home">Home</a>
<a className="hover:text-white transition-colors nav-link" href="#architecture">Architecture</a>
<a className="hover:text-white transition-colors nav-link" href="#capabilities">Capabilities</a>
</div>
<a className="text-xs font-medium text-black bg-white px-4 py-1.5 rounded-full hover:bg-zinc-200 transition-colors" href="#home" onclick="document.getElementById('deploy-section').scrollIntoView()">
                Deploy
            </a>
</div>
</nav>

<div className="relative z-10" id="app-container">

<main className="page-view min-h-screen flex flex-col justify-start pt-32 pb-20 px-4" id="page-home">

<div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent blur-3xl -z-10 rounded-full pointer-events-none"></div>
<div className="w-full max-w-5xl mx-auto text-center z-10 flex-1 flex flex-col justify-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/5 bg-white/5 backdrop-blur-sm mb-8 animate-reveal mx-auto">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
<span className="text-xs font-mono text-zinc-300">System v2.4 Online</span>
</div>
<h1 className="text-5xl sm:text-7xl lg:text-8xl font-medium tracking-tighter text-white leading-[1.05] mb-8 animate-reveal delay-1">
                    Autonomous <br className="hidden sm:block"/> Operations.
                </h1>
<p className="text-base sm:text-lg text-zinc-500 font-normal max-w-2xl mx-auto mb-12 animate-reveal delay-2 leading-relaxed">
                    Design, deploy, and scale custom AI agents. Replace brittle workflows with intelligent, context-aware systems built for enterprise efficiency.
                </p>

<div className="w-full max-w-2xl mx-auto mb-16 animate-reveal delay-3">
<div className="relative rounded-xl border border-white/10 bg-zinc-950/80 backdrop-blur-md overflow-hidden group cursor-pointer hover:border-white/30 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:-translate-y-1 transition-all duration-300" id="terminal-container" onclick="runTerminal()">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
<div className="flex items-center gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-700"></div>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-zinc-500 group-hover:text-white transition-colors" icon="solar:play-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-xs font-mono text-zinc-500 group-hover:text-white transition-colors">init_agent.sh</span>
</div>
</div>
<div className="p-6 font-mono text-xs sm:text-sm text-zinc-400 min-h-[14rem] flex flex-col justify-end text-left relative overflow-hidden" id="terminal-output">
<div className="text-zinc-600 animate-pulse">&gt; Click terminal to initialize sequence...</div>
</div>
</div>
</div>
</div>

<div className="mt-auto border-t border-white/5 bg-zinc-950/50 backdrop-blur-sm py-10 rounded-3xl mx-auto w-full max-w-7xl animate-reveal delay-3">
<div className="px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<p className="text-xs font-mono text-zinc-600 uppercase tracking-widest shrink-0">Integrated Protocols</p>
<div className="flex flex-wrap items-center justify-center md:justify-end gap-10 opacity-40 grayscale">
<span className="text-lg font-medium tracking-tighter text-white">OPENAI</span>
<span className="text-lg font-medium tracking-tighter text-white">ANTHROPIC</span>
<span className="text-lg font-medium tracking-tighter text-white">PINECONE</span>
<span className="text-lg font-medium tracking-tighter text-white">LANGCHAIN</span>
<span className="text-lg font-medium tracking-tighter text-white">STRIPE</span>
</div>
</div>
</div>

<div className="py-32 border-t border-white/5 mt-32 relative text-center max-w-3xl mx-auto px-4 w-full" id="deploy-section">
<h2 className="text-4xl sm:text-6xl font-medium tracking-tighter text-white mb-6">Initiate Sequence.</h2>
<p className="text-sm text-zinc-500 mb-12">Enter your work email to request architectural access and schedule a technical briefing.</p>
<form className="max-w-md mx-auto relative flex items-center">
<input className="line-input w-full py-3 px-2 text-sm text-white font-mono placeholder-zinc-700 bg-transparent" placeholder="sysadmin@company.com" required="" type="email"/>
<button className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-zinc-500 hover:text-white transition-colors" type="submit">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
<p className="text-xs text-zinc-700 font-mono mt-6 uppercase tracking-widest">Enterprise SLAs Available</p>
</div>
</main>

<main className="page-view hidden min-h-screen pt-40 pb-32 px-4 sm:px-6 max-w-7xl mx-auto" id="page-architecture">
<div className="mb-16 text-center max-w-3xl mx-auto">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white mb-4 animate-reveal">System Architecture</h2>
<p className="text-sm sm:text-base text-zinc-500 animate-reveal delay-1 leading-relaxed">A deterministic pipeline for non-deterministic AI. We isolate the reasoning engine from execution environments to guarantee safe, parallelized task completion at enterprise scale.</p>
</div>

<div className="relative w-full max-w-6xl mx-auto animate-reveal delay-2 mt-20">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="relative z-10 flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8 py-12">

<div className="flex-1 flex flex-col gap-4">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span> Ingestion
                        </div>
<div className="p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-xl hover:-translate-y-1 transition-transform group">
<div className="flex items-center gap-3 mb-4 text-white">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
<iconify-icon className="text-lg" icon="solar:webhook-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-sm">Webhooks &amp; Streams</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">Real-time event streaming from external CRMs, helpdesks, and custom APIs.</p>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-xl hover:-translate-y-1 transition-transform group">
<div className="flex items-center gap-3 mb-4 text-white">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
<iconify-icon className="text-lg" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-sm">Data Lake Sync</span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">Batch processing of unstructured documents, audio logs, and historical databases.</p>
</div>
</div>

<div className="hidden lg:flex flex-col justify-center items-center px-2 relative">
<div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-white/20 absolute top-1/2 left-0 -translate-y-1/2 -z-10"></div>
<iconify-icon className="text-zinc-600 text-2xl bg-black px-1" icon="solar:round-alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="flex lg:hidden justify-center py-4 text-zinc-600">
<iconify-icon className="text-2xl" icon="solar:round-alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="flex-[1.5] relative">
<div className="absolute -inset-1 bg-gradient-to-b from-white/10 to-transparent rounded-[2rem] blur-xl opacity-50 pointer-events-none"></div>
<div className="relative h-full p-8 rounded-[2rem] border border-white/20 bg-zinc-950 shadow-2xl flex flex-col hover:border-white/30 transition-colors">
<div className="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-8 flex items-center justify-between border-b border-white/10 pb-4">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-white animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></span> Reasoning Engine
                                </div>
<span className="px-2 py-1 rounded-md border border-white/10 bg-white/5 text-[10px] tracking-tight">VPC ENCLAVE</span>
</div>
<div className="flex-1 flex flex-col gap-4 justify-center">
<div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/40 hover:bg-black/60 transition-colors cursor-default">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-zinc-200">Semantic Router</span>
<span className="text-[10px] text-zinc-500 font-mono">Classifies intent &amp; payload</span>
</div>
<iconify-icon className="text-zinc-500 text-xl" icon="solar:route-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center justify-center py-1">
<div className="w-[1px] h-4 bg-white/20"></div>
</div>
<div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/40 hover:bg-black/60 transition-colors cursor-default">
<div className="flex flex-col gap-1">
<span className="text-sm font-medium text-zinc-200">Context Retrieval (RAG)</span>
<span className="text-[10px] text-zinc-500 font-mono">Fetches memories from Pinecone</span>
</div>
<iconify-icon className="text-zinc-500 text-xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-center justify-center py-1">
<div className="w-[1px] h-4 bg-white/20"></div>
</div>
<div className="flex items-center justify-between p-5 rounded-xl border border-white/15 bg-white/5 shadow-inner relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
<div className="flex flex-col gap-1 relative z-10">
<span className="text-sm font-medium text-white">LLM Orchestrator</span>
<span className="text-[10px] text-zinc-400 font-mono">Plans &amp; sequences actions</span>
</div>
<iconify-icon className="text-white text-2xl relative z-10" icon="solar:cpu-bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="hidden lg:flex flex-col justify-center items-center px-2 relative">
<div className="w-full h-[1px] bg-gradient-to-r from-white/20 via-white/20 to-transparent absolute top-1/2 right-0 -translate-y-1/2 -z-10"></div>
<iconify-icon className="text-zinc-600 text-2xl bg-black px-1" icon="solar:round-alt-arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="flex lg:hidden justify-center py-4 text-zinc-600">
<iconify-icon className="text-2xl" icon="solar:round-alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="flex-1 flex flex-col gap-4">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span> Execution
                        </div>
<div className="p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-xl hover:-translate-y-1 transition-transform group">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3 text-white">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
<iconify-icon className="text-lg" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-sm">Tool Calling</span>
</div>
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">Execute deterministic scripts, query SQL databases, or trigger external APIs securely.</p>
</div>
<div className="p-6 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-xl hover:-translate-y-1 transition-transform group">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3 text-white">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/30 transition-colors">
<iconify-icon className="text-lg" icon="solar:user-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-medium tracking-tight text-sm">Human in Loop</span>
</div>
<span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]"></span>
</div>
<p className="text-xs text-zinc-500 leading-relaxed">Draft responses and pause workflow execution pending manual approval.</p>
</div>
</div>
</div>
</div>
</main>

<main className="page-view hidden min-h-screen pt-40 pb-32 px-4 sm:px-6 max-w-7xl mx-auto" id="page-capabilities">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 animate-reveal">
<div className="max-w-xl">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white mb-4">Core Capabilities</h2>
<p className="text-sm sm:text-base text-zinc-500 leading-relaxed">Modular AI components designed to integrate flawlessly into your existing infrastructure. Switch between full autonomy and co-pilot modes instantly.</p>
</div>

<div className="flex items-center p-1 rounded-full border border-white/10 bg-zinc-950 w-max shadow-inner">
<button className="px-5 py-2 rounded-full bg-white/10 text-white text-xs font-medium transition-all shadow-sm">Autonomous</button>
<button className="px-5 py-2 rounded-full text-zinc-500 hover:text-white text-xs font-medium transition-all">Copilot Mode</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(280px,_auto)] animate-reveal delay-1">

<div className="md:col-span-2 md:row-span-2 rounded-[2rem] border border-white/10 bg-zinc-950 p-8 sm:p-10 relative overflow-hidden group hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.06),_transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div>
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-white" icon="solar:network-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tighter text-white mb-3">Neural Routing &amp; Delegation</h3>
<p className="text-sm text-zinc-400 max-w-md leading-relaxed">Instantly analyze incoming data streams—emails, support tickets, API payloads—and route them to specialized sub-agents or human operators based on semantic intent and confidence scoring.</p>
</div>

<div className="mt-12 h-40 w-full border border-white/5 rounded-2xl bg-black/50 p-6 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="flex items-center gap-6 relative z-10 w-full max-w-sm">
<div className="w-14 h-14 rounded-full border border-white/20 bg-zinc-900 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(255,255,255,0.1)]"><iconify-icon className="text-white text-xl" icon="solar:incoming-call-linear" strokeWidth="1.5"></iconify-icon></div>
<div className="h-[1px] flex-1 bg-gradient-to-r from-white/20 via-white/70 to-white/20 shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div className="w-14 h-14 rounded-full border border-white/20 bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.2)]"><iconify-icon className="text-black text-xl" icon="solar:cpu-linear" strokeWidth="1.5"></iconify-icon></div>
</div>
</div>
</div>
</div>

<div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8 relative overflow-hidden group hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
<div className="flex flex-col h-full justify-between">
<div>
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-white" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Context Memory</h3>
<p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">Agents retain cross-session memory via localized vector databases, ensuring continuity.</p>
</div>
<div className="mt-8 font-mono text-[10px] sm:text-xs text-zinc-500 bg-black rounded-xl p-4 border border-white/5 group-hover:border-white/20 transition-colors shadow-inner">
<span className="text-zinc-600">&gt;</span> Vectorizing chunk...<br/>
<span className="text-zinc-600">&gt;</span> Dim: <span className="text-white">1536</span><br/>
<span className="text-zinc-600">&gt;</span> Status: <span className="text-emerald-500">Stored [2ms]</span>
</div>
</div>
</div>

<div className="rounded-[2rem] border border-white/10 bg-zinc-950 p-8 relative overflow-hidden group hover:border-white/20 hover:-translate-y-1 transition-all duration-300">
<div className="flex flex-col h-full justify-between">
<div>
<div className="w-10 h-10 rounded-lg border border-white/10 bg-white/5 flex items-center justify-center mb-4">
<iconify-icon className="text-xl text-white" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-white mb-2">Secure Enclaves</h3>
<p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">Deploy entirely within your VPC. Zero-data-retention policies guarantee compliance.</p>
</div>
<div className="mt-8 flex gap-2">
<span className="px-3 py-1.5 rounded-md text-[10px] font-mono border border-white/10 bg-white/5 text-white group-hover:bg-white/10 transition-colors">SOC2</span>
<span className="px-3 py-1.5 rounded-md text-[10px] font-mono border border-white/10 bg-white/5 text-white group-hover:bg-white/10 transition-colors">HIPAA</span>
<span className="px-3 py-1.5 rounded-md text-[10px] font-mono border border-white/10 bg-white/5 text-white group-hover:bg-white/10 transition-colors">GDPR</span>
</div>
</div>
</div>

<div className="md:col-span-3 rounded-[2rem] border border-white/10 bg-zinc-950 p-8 sm:p-10 relative overflow-hidden group hover:border-white/20 hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-center gap-10">
<div className="flex-1">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center mb-5">
<iconify-icon className="text-2xl text-white" icon="solar:code-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">API-First Architecture</h3>
<p className="text-sm text-zinc-400 max-w-lg leading-relaxed">Every agent action is accessible via REST and GraphQL endpoints. Trigger workflows programmatically from your existing codebase without complex middleware or UI bottlenecks.</p>
</div>
<div className="w-full md:w-auto bg-black rounded-2xl border border-white/5 p-6 font-mono text-[10px] sm:text-xs text-zinc-500 shrink-0 shadow-inner group-hover:border-white/20 transition-colors">
<div className="flex gap-3 mb-4 border-b border-white/10 pb-4">
<span className="text-white bg-white/10 px-2 py-0.5 rounded">POST</span>
<span className="text-zinc-400">/v1/agents/execute</span>
</div>
<span className="text-zinc-600">{</span><br/>
                          <span className="text-white">"agent_id"</span>: <span className="text-emerald-400">"ag_9f82h"</span>,<br/>
                          <span className="text-white">"payload"</span>: <span className="text-zinc-600">{</span><br/>
                            <span className="text-white">"action"</span>: <span className="text-emerald-400">"process_invoice"</span>,<br/>
                            <span className="text-white">"async"</span>: <span className="text-amber-400">true</span><br/>
                          <span className="text-zinc-600">}</span><br/>
<span className="text-zinc-600">}</span>
</div>
</div>
</div>

<div className="mt-24 pt-20 border-t border-white/5 animate-reveal delay-2">
<h3 className="text-2xl font-medium tracking-tighter text-white mb-12 text-center">Extensible Primitives</h3>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-white transition-colors mb-4" icon="solar:documents-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Document Parsing</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Extract structured JSON from PDFs, images, and unstructured text with exceptionally high fidelity.</p>
</div>

<div className="group">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-white transition-colors mb-4" icon="solar:code-scan-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Code Execution</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Run Python scripts dynamically in isolated sandboxes to perform complex calculations or data transformations.</p>
</div>

<div className="group">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-white transition-colors mb-4" icon="solar:branching-paths-up-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">Multi-Agent Swarms</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Supervisor agents seamlessly delegate granular sub-tasks to specialized models based on cost and capability.</p>
</div>

<div className="group">
<iconify-icon className="text-2xl text-zinc-500 group-hover:text-white transition-colors mb-4" icon="solar:history-linear" strokeWidth="1.5"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-2 tracking-tight">State Management</h4>
<p className="text-xs text-zinc-500 leading-relaxed">Maintain session state across asynchronous events, allowing safe pauses for human input or long-running tasks.</p>
</div>
</div>
</div>
</main>

<main className="page-view hidden min-h-screen pt-40 pb-32 px-4 sm:px-6 max-w-7xl mx-auto" id="page-documentation">
<div className="mb-16">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white mb-4 animate-reveal">Documentation</h2>
<p className="text-sm sm:text-base text-zinc-500 max-w-xl animate-reveal delay-1">Integrate autonomous agents into your infrastructure. Explore our guides and API reference.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-reveal delay-2">

<a className="block p-6 rounded-2xl border border-white/10 bg-zinc-950/50 hover:bg-zinc-950 hover:border-white/20 transition-all group" href="#">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-white mb-2">Quickstart Guide</h3>
<p className="text-sm text-zinc-500">Get your first agent deployed and executing workflows in under 5 minutes.</p>
</a>

<a className="block p-6 rounded-2xl border border-white/10 bg-zinc-950/50 hover:bg-zinc-950 hover:border-white/20 transition-all group" href="#">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:server-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-white mb-2">API Reference</h3>
<p className="text-sm text-zinc-500">Detailed endpoints, authentication methods, and payload schemas.</p>
</a>

<a className="block p-6 rounded-2xl border border-white/10 bg-zinc-950/50 hover:bg-zinc-950 hover:border-white/20 transition-all group" href="#">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:webhook-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-white mb-2">Webhooks</h3>
<p className="text-sm text-zinc-500">Listen for asynchronous agent events and stream responses securely.</p>
</a>

<a className="block p-6 rounded-2xl border border-white/10 bg-zinc-950/50 hover:bg-zinc-950 hover:border-white/20 transition-all group" href="#">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-white mb-2">Authentication</h3>
<p className="text-sm text-zinc-500">Learn about Bearer tokens, API key rotation, and granular scoping.</p>
</a>

<a className="block p-6 rounded-2xl border border-white/10 bg-zinc-950/50 hover:bg-zinc-950 hover:border-white/20 transition-all group" href="#">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-white mb-2">Memory Management</h3>
<p className="text-sm text-zinc-500">How to pass context, manage vector stores, and optimize retrieval.</p>
</a>

<a className="block p-6 rounded-2xl border border-white/10 bg-zinc-950/50 hover:bg-zinc-950 hover:border-white/20 transition-all group" href="#">
<iconify-icon className="text-2xl text-white mb-4" icon="solar:box-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-base font-medium tracking-tight text-white mb-2">SDKs &amp; Libraries</h3>
<p className="text-sm text-zinc-500">Official clients for Node.js, Python, Go, and Ruby.</p>
</a>
</div>
</main>

<main className="page-view hidden min-h-screen pt-40 pb-32 px-4 sm:px-6 max-w-4xl mx-auto" id="page-status">
<div className="mb-16">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white mb-6 animate-reveal">System Status</h2>
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 animate-reveal delay-1">
<span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)] animate-pulse"></span>
<span className="text-sm text-emerald-500 font-medium tracking-tight">All Systems Operational</span>
</div>
</div>
<div className="space-y-8 animate-reveal delay-2">

<div className="border border-white/10 rounded-2xl p-6 bg-zinc-950">
<div className="flex items-center justify-between mb-6">
<h3 className="text-base font-medium text-white">API Core Services</h3>
<span className="text-sm text-emerald-500">100% Uptime</span>
</div>

<div className="flex items-end justify-between gap-1 w-full h-8 group relative">

</div>
<div className="flex items-center justify-between mt-3 text-xs text-zinc-500 font-mono">
<span>60 days ago</span>
<span>Today</span>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="border border-white/10 rounded-xl p-5 bg-zinc-950 flex items-center justify-between">
<span className="text-sm text-zinc-300">Inference Engine</span>
<span className="text-xs text-emerald-500 font-mono">Operational</span>
</div>
<div className="border border-white/10 rounded-xl p-5 bg-zinc-950 flex items-center justify-between">
<span className="text-sm text-zinc-300">Vector Database</span>
<span className="text-xs text-emerald-500 font-mono">Operational</span>
</div>
<div className="border border-white/10 rounded-xl p-5 bg-zinc-950 flex items-center justify-between">
<span className="text-sm text-zinc-300">Webhooks Delivery</span>
<span className="text-xs text-emerald-500 font-mono">Operational</span>
</div>
<div className="border border-white/10 rounded-xl p-5 bg-zinc-950 flex items-center justify-between">
<span className="text-sm text-zinc-300">Dashboard</span>
<span className="text-xs text-emerald-500 font-mono">Operational</span>
</div>
</div>
</div>
</main>

<main className="page-view hidden min-h-screen pt-40 pb-32 px-4 sm:px-6 max-w-3xl mx-auto" id="page-privacy">
<div className="mb-16">
<h2 className="text-4xl sm:text-5xl font-medium tracking-tighter text-white mb-6 animate-reveal">Privacy Policy</h2>
<p className="text-xs text-zinc-500 font-mono uppercase tracking-widest animate-reveal delay-1">Last Updated: October 24, 2024</p>
</div>
<div className="space-y-10 text-sm text-zinc-400 animate-reveal delay-2 leading-relaxed">
<section className="space-y-4">
<h3 className="text-lg font-medium text-white tracking-tight">1. Information Collection</h3>
<p>We collect information you provide directly to us when using AGNT services. This includes account credentials, usage logs, and data passed through our APIs necessary for agent processing. Vector embeddings generated from your data are stored securely and cryptographically isolated.</p>
</section>
<section className="space-y-4">
<h3 className="text-lg font-medium text-white tracking-tight">2. Zero Data Retention Policy</h3>
<p>By default, payloads sent to the inference engine are processed statelessly. Prompts and generation outputs are never used to train generalized language models. If context memory is enabled, data is stored in isolated vector enclaves that are automatically purged upon instance termination.</p>
</section>
<section className="space-y-4">
<h3 className="text-lg font-medium text-white tracking-tight">3. Third-Party Integrations</h3>
<p>When you connect AGNT to third-party services (e.g., Salesforce, Stripe, Zendesk), we request the minimum necessary scopes to execute the defined workflows. Access tokens are encrypted at rest using AES-256 and rotated regularly according to our security protocols.</p>
</section>
<section className="space-y-4">
<h3 className="text-lg font-medium text-white tracking-tight">4. Security Infrastructure</h3>
<p>Our platform operates entirely within managed VPCs with strict ingress/egress policies. We maintain SOC2 Type II compliance and perform regular penetration testing. Security vulnerabilities can be reported to our dedicated security team.</p>
</section>
<p className="text-xs text-zinc-600 font-mono mt-12 pt-8 border-t border-white/10">
                    For legal inquiries or compliance requests, contact legal@agnt.systems.
                </p>
</div>
</main>
</div>

<footer className="border-t border-white/5 py-8 relative z-10 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<div className="text-xs font-medium tracking-tighter text-white uppercase">
                AGNT.
            </div>
<div className="flex gap-6 text-xs text-zinc-600 uppercase tracking-widest font-mono">
<a className="hover:text-white transition-colors nav-link" href="#documentation">Documentation</a>
<a className="hover:text-white transition-colors nav-link" href="#status">Status</a>
<a className="hover:text-white transition-colors nav-link" href="#privacy">Privacy</a>
</div>
<div className="text-xs text-zinc-700 font-mono">
                © 2024 AGNT SYSTEMS.
            </div>
</div>
</footer>



    </>
  );
}
