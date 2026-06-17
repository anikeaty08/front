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



        document.addEventListener('DOMContentLoaded', () => {
            // Intersection Observer for Timeline Animation
            const timelineTrack = document.getElementById('timeline-track');
            const timelineLine = document.getElementById('timeline-progress');
            const nodes = document.querySelectorAll('.timeline-node');

            const observerOptions = {
                threshold: 0.2,
                rootMargin: "0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Activate the main line
                        if(entry.target.id === 'sprint') {
                             timelineLine.classList.add('active');
                             // Staggered reveal for nodes
                             nodes.forEach((node, index) => {
                                 setTimeout(() => {
                                     node.classList.add('active');
                                 }, 400 + (index * 200));
                             });
                        }
                    }
                });
            }, observerOptions);

            const sprintSection = document.getElementById('sprint');
            if (sprintSection) observer.observe(sprintSection);

            // General reveal for other elements
            const revealObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                })
            }, { threshold: 0.1 });
        });
    
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
      

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-bold text-lg tracking-tighter text-white" href="#">ZEFFRON</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#capabilities">Capabilities</a>
<a className="hover:text-white transition-colors" href="#work">Work</a>
<a className="hover:text-white transition-colors" href="#sprint">Process</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#0047FF] border border-[#0047FF] hover:bg-transparent hover:text-[#0047FF] transition-all rounded-sm" href="#contact">
                Start Project
            </a>

<button className="md:hidden text-white">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<section className="relative pt-40 pb-24 md:pt-52 md:pb-32 px-6 overflow-hidden min-h-screen flex flex-col justify-center">

<div className="absolute inset-0 bg-grid opacity-20 -z-10 pointer-events-none"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0047FF] opacity-[0.08] blur-[120px] rounded-full -z-10"></div>
<div className="max-w-7xl mx-auto text-center md:text-left relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 border border-neutral-800 rounded-full bg-neutral-900/50 mb-8 backdrop-blur-sm">
<div className="w-1.5 h-1.5 bg-[#0047FF] rounded-full animate-pulse"></div>
<span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">System Status: Online</span>
</div>
<h1 className="text-5xl md:text-8xl font-semibold tracking-tighter leading-[0.9] text-white mb-8">
                STOP PITCHING DECKS.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-500 to-neutral-700">START SHIPPING.</span>
</h1>
<p className="max-w-2xl text-lg md:text-xl leading-relaxed text-neutral-400 font-light mb-10 md:mb-12">
                High-velocity engineering for founders who refuse to wait. We build Custom Software, AI Infrastructure, and Automated Systems. <span className="text-white">Napkin to Production in weeks.</span>
</p>
<div className="flex flex-col md:flex-row items-center gap-6">
<a className="w-full md:w-auto px-8 py-4 bg-[#0047FF] text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-[#0035bd] transition-all flex items-center justify-center gap-2 group shadow-[0_0_30px_-10px_#0047FF]" href="#sprint">
                    INITIATE BUILD
                    <span className="iconify group-hover:translate-x-1 transition-transform" data-height="16" data-icon="lucide:terminal" data-width="16"></span>
</a>
<span className="text-xs font-mono text-neutral-500">
<span className="text-[#0047FF]">&gt;</span> sudo start_sprint
                </span>
</div>
</div>
</section>

<section className="border-y border-neutral-800 bg-black py-10 overflow-hidden">
<div className="marquee-container w-full overflow-hidden relative">
<div className="flex animate-marquee w-max gap-16 md:gap-32 items-center opacity-30 grayscale hover:opacity-100 transition-opacity duration-500">
<div className="flex gap-16 md:gap-32 items-center text-white">
<span className="text-xl font-semibold font-archivo tracking-tighter">ACME_CORP</span>
<span className="text-xl font-semibold font-archivo tracking-tighter">VERTEX_LABS</span>
<span className="text-xl font-semibold font-archivo tracking-tighter">HYPERSTREAM</span>
<span className="text-xl font-semibold font-archivo tracking-tighter">BOLT.AI</span>
<span className="text-xl font-semibold font-archivo tracking-tighter">NEXUS_PROTO</span>
</div>
<div aria-hidden="true" className="flex gap-16 md:gap-32 items-center text-white">
<span className="text-xl font-semibold font-archivo tracking-tighter">ACME_CORP</span>
<span className="text-xl font-semibold font-archivo tracking-tighter">VERTEX_LABS</span>
<span className="text-xl font-semibold font-archivo tracking-tighter">HYPERSTREAM</span>
<span className="text-xl font-semibold font-archivo tracking-tighter">BOLT.AI</span>
<span className="text-xl font-semibold font-archivo tracking-tighter">NEXUS_PROTO</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto" id="capabilities">
<div className="flex items-end justify-between mb-16 border-b border-neutral-800 pb-6">
<h2 className="text-3xl font-semibold tracking-tighter text-white">KERNEL CAPABILITIES</h2>
<span className="hidden md:block text-xs font-mono text-[#0047FF]">v2.4.0 STABLE</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="card-hover bg-[#0A0A0A] border border-neutral-800 p-8 rounded-sm flex flex-col group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-[#0047FF]" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center rounded-sm mb-6 text-white group-hover:border-[#0047FF] transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:cpu" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">Custom Architecture</h3>
<p className="text-neutral-500 mb-8 text-sm leading-relaxed flex-grow">
                    Generic SaaS is a ceiling. We engineer bespoke platforms. scalable microservices, and high-performance backends.
                </p>
<div className="mt-auto pt-6 border-t border-neutral-900">
<div className="font-mono text-[10px] text-[#0047FF] tracking-widest uppercase">
                        React / Go / Rust
                    </div>
</div>
</div>

<div className="card-hover bg-[#0A0A0A] border border-neutral-800 p-8 rounded-sm flex flex-col group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-[#0047FF]" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center rounded-sm mb-6 text-white group-hover:border-[#0047FF] transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:bot" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">LLM Infrastructure</h3>
<p className="text-neutral-500 mb-8 text-sm leading-relaxed flex-grow">
                    Intelligence, Fine-Tuned. RAG pipelines, vector databases, and custom model deployment on your own metal.
                </p>
<div className="mt-auto pt-6 border-t border-neutral-900">
<div className="font-mono text-[10px] text-[#0047FF] tracking-widest uppercase">
                        PyTorch / LangChain / Pinecone
                    </div>
</div>
</div>

<div className="card-hover bg-[#0A0A0A] border border-neutral-800 p-8 rounded-sm flex flex-col group relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
<span className="iconify text-[#0047FF]" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div className="w-10 h-10 bg-neutral-900 border border-neutral-800 flex items-center justify-center rounded-sm mb-6 text-white group-hover:border-[#0047FF] transition-colors">
<span className="iconify" data-height="20" data-icon="lucide:workflow" data-width="20"></span>
</div>
<h3 className="text-lg font-semibold tracking-tight text-white mb-3">System Automation</h3>
<p className="text-neutral-500 mb-8 text-sm leading-relaxed flex-grow">
                    The "Zero-Human" Loop. Connecting disjointed APIs into a self-driving ecosystem. If you click it twice, we script it.
                </p>
<div className="mt-auto pt-6 border-t border-neutral-900">
<div className="font-mono text-[10px] text-[#0047FF] tracking-widest uppercase">
                        Python / n8n / AWS Lambda
                    </div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] relative py-24 md:py-32 px-6 overflow-hidden" id="sprint">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-full bg-neutral-900"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-full bg-neutral-900"></div>
<div className="max-w-4xl mx-auto text-center mb-24">
<span className="inline-block px-3 py-1 border border-[#0047FF]/30 bg-[#0047FF]/10 text-[#0047FF] font-mono text-xs mb-6 rounded-full">
                EXECUTION_SPEED = MAX
            </span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6">
                THE 10-DAY SPRINT
            </h2>
<p className="text-neutral-500 text-lg">We don't do "discovery phases." We deploy.</p>
</div>
<div className="max-w-5xl mx-auto relative pl-4 md:pl-0">

<div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-800 -translate-x-1/2 h-full" id="timeline-track">

<div className="timeline-line w-full bg-[#0047FF] origin-top shadow-[0_0_15px_#0047FF]" id="timeline-progress"></div>
</div>

<div className="timeline-trigger relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-24 items-center">
<div className="md:text-right order-2 md:order-1 timeline-node transition-delay-100">
<span className="text-[#0047FF] font-mono text-xs mb-2 block">&gt; DAYS 01-02</span>
<h4 className="text-xl font-semibold text-white mb-2">Schema &amp; Logic</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Deconstructing the idea into database models. We define the API surface area and core mechanics. No fluff.</p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#050505] border border-[#0047FF] rounded-full z-20 timeline-node"></div>
<div className="order-3 md:order-2 pl-12 md:pl-0 timeline-node">

<div className="bg-[#0A0A0A] border border-neutral-800 rounded p-4 font-mono text-[10px] text-neutral-400 w-full md:w-64 opacity-60">
<div className="flex gap-1.5 mb-3">
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
<div className="w-2 h-2 rounded-full bg-neutral-700"></div>
</div>
<span className="code-keyword">type</span> User <span className="code-keyword">struct</span> {<br/>
                          ID <span className="code-keyword">uuid</span>.UUID<br/>
                          APIKey <span className="code-keyword">string</span><br/>
                        }
                    </div>
</div>
</div>

<div className="timeline-trigger relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mb-24 items-center">
<div className="md:text-right order-2 md:order-1 hidden md:block timeline-node">

<div className="inline-flex flex-col items-center gap-2 opacity-60">
<div className="px-4 py-2 border border-neutral-700 rounded text-[10px] text-neutral-400 bg-neutral-900">Client</div>
<div className="h-4 w-px bg-neutral-700"></div>
<div className="px-4 py-2 border border-[#0047FF] text-[#0047FF] rounded text-[10px] bg-[#0047FF]/5 shadow-[0_0_10px_-2px_#0047FF]">API Gateway</div>
<div className="h-4 w-px bg-neutral-700"></div>
<div className="flex gap-2">
<div className="w-8 h-8 border border-neutral-700 rounded bg-neutral-900"></div>
<div className="w-8 h-8 border border-neutral-700 rounded bg-neutral-900"></div>
</div>
</div>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#050505] border border-[#0047FF] rounded-full z-20 timeline-node"></div>
<div className="order-3 md:order-2 pl-12 md:pl-0 timeline-node transition-delay-200">
<span className="text-[#0047FF] font-mono text-xs mb-2 block">&gt; DAYS 03-08</span>
<h4 className="text-xl font-semibold text-white mb-2">Deep Work</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Coding the engine. Authentication, Database integration, and business logic. We ship commits every 4 hours.</p>
</div>
</div>

<div className="timeline-trigger relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
<div className="md:text-right order-2 md:order-1 timeline-node transition-delay-300">
<span className="text-[#0047FF] font-mono text-xs mb-2 block">&gt; DAYS 09-10</span>
<h4 className="text-xl font-semibold text-white mb-2">Deploy &amp; Handover</h4>
<p className="text-sm text-neutral-500 leading-relaxed">Production push. We hand over the keys, the repo, and the docs. You own 100% of the IP.</p>
</div>
<div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-[#0047FF] border border-[#0047FF] shadow-[0_0_10px_#0047FF] rounded-full z-20 timeline-node"></div>
<div className="order-3 md:order-2 pl-12 md:pl-0 timeline-node">
<div className="px-4 py-2 bg-[#0047FF]/10 border border-[#0047FF]/30 rounded text-[#0047FF] text-xs font-mono inline-block">
                        Deployment Successful
                     </div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 max-w-7xl mx-auto border-t border-neutral-800" id="work">
<h2 className="text-xs font-mono font-semibold text-neutral-500 uppercase tracking-widest mb-16">/ var / www / selected_work</h2>
<div className="space-y-32">

<div className="group grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7 relative">
<div className="absolute -inset-1 bg-gradient-to-r from-[#0047FF] to-neutral-800 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
<div className="relative bg-[#0A0A0A] rounded-lg border border-neutral-800 overflow-hidden shadow-2xl">

<div className="bg-[#111] border-b border-neutral-800 px-4 py-2 flex gap-2 items-center">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
<span className="ml-2 text-[10px] text-neutral-500 font-mono">techcify_core.tsx</span>
</div>

<div className="p-6 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
<div className="flex gap-4">
<div className="text-neutral-700 select-none text-right">1<br/>2<br/>3<br/>4<br/>5<br/>6</div>
<div>
<span className="code-keyword">import</span> { VectorStore } <span className="code-keyword">from</span> <span className="code-string">'@ai/core'</span>;<br/><br/>
<span className="code-keyword">export const</span> generateCurriculum = <span className="code-keyword">async</span> (userId) =&gt; {<br/>
                                      <span className="code-comment">// Retrieve user knowledge graph</span><br/>
                                      <span className="code-keyword">const</span> userState = <span className="code-keyword">await</span> db.users.findUnique({ userId });<br/>
                                      <span className="code-keyword">return</span> VectorStore.query(userState.embedding);<br/>
                                    }
                                </div>
</div>
</div>
</div>
</div>
<div className="lg:col-span-5 space-y-8">
<h3 className="text-3xl font-semibold tracking-tight text-white">TECHCIFY</h3>
<div className="space-y-4">
<div className="border-l-2 border-neutral-800 pl-4">
<span className="block text-[10px] font-mono uppercase text-neutral-500 mb-1">PROJECT</span>
<span className="text-sm font-medium text-white">Adaptive AI Education Platform</span>
</div>
<div className="border-l-2 border-[#0047FF] pl-4">
<span className="block text-[10px] font-mono uppercase text-[#0047FF] mb-1">IMPACT</span>
<span className="text-sm font-medium text-white">Scaled to 5,000+ Students</span>
</div>
</div>
</div>
</div>

<div className="group grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
<div className="lg:col-span-7 lg:order-2 relative h-[300px] bg-[#0A0A0A] border border-neutral-800 rounded-lg flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-grid opacity-10"></div>

<div className="relative z-10 flex items-center gap-8">

<div className="w-24 h-24 bg-neutral-900 border border-neutral-700 rounded flex flex-col items-center justify-center gap-2 shadow-xl">
<span className="iconify text-neutral-400" data-icon="lucide:mic" data-width="20"></span>
<span className="text-[10px] font-mono text-neutral-500">Input</span>
</div>

<div className="w-12 h-px bg-neutral-700 relative">
<div className="absolute right-0 -top-1 w-2 h-2 border-t border-r border-neutral-700 rotate-45"></div>
</div>

<div className="w-24 h-24 bg-[#0047FF]/10 border border-[#0047FF] rounded flex flex-col items-center justify-center gap-2 shadow-[0_0_20px_-5px_#0047FF]">
<span className="iconify text-[#0047FF]" data-icon="lucide:cpu" data-width="20"></span>
<span className="text-[10px] font-mono text-[#0047FF]">Processing</span>
</div>

<div className="w-12 h-px bg-neutral-700 relative">
<div className="absolute right-0 -top-1 w-2 h-2 border-t border-r border-neutral-700 rotate-45"></div>
</div>

<div className="w-24 h-24 bg-neutral-900 border border-neutral-700 rounded flex flex-col items-center justify-center gap-2 shadow-xl">
<span className="iconify text-neutral-400" data-icon="lucide:bar-chart-2" data-width="20"></span>
<span className="text-[10px] font-mono text-neutral-500">Output</span>
</div>
</div>
</div>
<div className="lg:col-span-5 lg:order-1 space-y-8">
<h3 className="text-3xl font-semibold tracking-tight text-white">WHISPER_COACH</h3>
<div className="space-y-4">
<div className="border-l-2 border-neutral-800 pl-4">
<span className="block text-[10px] font-mono uppercase text-neutral-500 mb-1">PROJECT</span>
<span className="text-sm font-medium text-white">Real-Time Sales Intelligence</span>
</div>
<div className="border-l-2 border-[#0047FF] pl-4">
<span className="block text-[10px] font-mono uppercase text-[#0047FF] mb-1">IMPACT</span>
<span className="text-sm font-medium text-white">&lt; 200ms Latency Analysis</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0047FF] text-white text-center">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-8 leading-tight">
                WE DON'T RENT CODE.<br/>WE WRITE ASSETS.
            </h2>
<p className="text-lg text-white/80 font-light max-w-2xl mx-auto mb-8">
                You own the repo. You own the documentation. You own the IP. We build infrastructure that enables you to raise funding or exit.
            </p>
<div className="inline-flex gap-2 items-center text-xs font-mono bg-black/20 px-4 py-2 rounded">
<span className="iconify" data-icon="lucide:git-commit" data-width="16"></span>
<span>git push origin main --force</span>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#050505] text-white border-t border-neutral-900" id="contact">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-4xl md:text-7xl font-semibold tracking-tighter mb-6">
                VALIDATE IN <span className="text-[#0047FF]">WEEKS.</span>
</h2>
<p className="text-neutral-500 text-lg mb-12 max-w-xl mx-auto">
                The only thing standing between you and a scalable product is execution speed.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-6">
<button className="w-full md:w-auto px-8 py-4 bg-transparent border border-neutral-700 text-white font-semibold text-sm tracking-wide rounded-sm hover:border-white transition-all">
                    Scope Project
                </button>
<button className="w-full md:w-auto px-8 py-4 bg-[#0047FF] text-white font-semibold text-sm tracking-wide rounded-sm hover:bg-[#0035bd] shadow-[0_0_20px_rgba(0,71,255,0.4)] transition-all">
                    Start 10-Day Sprint
                </button>
</div>
<div className="mt-24 pt-12 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center text-neutral-600 text-xs font-mono">
<p>© 2024 ZEFFRON_ENGINEERING</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-[#0047FF] transition-colors" href="#">GITHUB</a>
<a className="hover:text-[#0047FF] transition-colors" href="#">X_CORP</a>
<a className="hover:text-[#0047FF] transition-colors" href="#">LINKEDIN</a>
</div>
</div>
</div>
</section>



    </>
  );
}
