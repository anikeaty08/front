import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
        }
        const ctx = document.getElementById('focusChart');
        if (ctx && window.Chart) {
          new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ['AI', 'Backend', 'Frontend', 'Mobile'],
              datasets: [{
                data: [45, 25, 20, 10],
                backgroundColor: ['#818cf8', '#34d399', '#fbbf24', '#e879f9'],
                borderWidth: 0
              }]
            },
            options: {
              responsive: true,
              cutout: '70%',
              plugins: { legend: { display: false }, tooltip: { enabled: true } }
            }
          });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/80 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
<div className="flex items-center justify-between">
<a className="items-center gap-3 group" href="#">
<div className="h-8 w-8 rounded-md bg-white/5 flex items-center justify ring-1 ring-white/10 group-hover:ring-white/20 transition">
<span className="text-xs font-semibold tracking-tight text-white90" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif'}}>TN</span>
</div>
<span className="text-sm text-neutral-300 group-hover:text-white transition">Your Name • SSE</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm">
<a className="text-neutral-300 hover:text-white transition" href="#services">Services</a>
<a className="text-neutral-300 hover:text-white transition" href="#ai">AI</a>
<a className="text-neutral-300 hover:text-white transition" href="#team">Team</a>
<a className="text-neutral-300 hover:text-white transition" href="#projects">Projects</a>
<a className="text-neutral-300 hover:text-white transition" href="#process">Process</a>
<a className="text-neutral-300 hover:text-white transition" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center rounded-md bg-white/[0.06] ring-1 ring-inset ring-white/10 px-2 py-1.5" style={{display: 'none'}}>
<div className="text-xs text-neutral-200" id="google_translate_element"></div>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white bg-white/[0.06] hover:bg-white/[0.1] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition" href="#contact">
<i className="w-4 h-4" data-lucide="message-square"></i>
              Let’s talk
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute -top-40 -left-20 h-72 w-72 rounded-full blur-3xl bg-indigo-600/20"></div>
<div className="absolute -bottom-40 -right-20 h-72 w-72 rounded-full blur-3xl bg-fuchsia-600/20"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs text-indigo-300 ring-1 ring-inset ring-indigo-500/30 bg-indigo-500/10 mb-5">
<i className="w-3.5 h-3.5" data-lucide="zap"></i>
              15+ years building scalable products
            </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif'}}>
              Artificial Intelligence + Senior Software Engineering
            </h1>
<p className="mt-5 text-base sm:text-lg text-neutral-300">
              I’m an SSE with 15+ years delivering scalable, reliable, and maintainable solutions for startups and enterprises. Today I focus on applied AI: from prototype to production with LLMs, RAG, agents, and MLOps; integrating Backend (Elixir, Spring, Node.js), Frontend (Angular, React, Vue), and Mobile (Swift/SwiftUI).
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-neutral-900 bg-white hover:bg-neutral-200 transition" href="#contact">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                Start your AI project
              </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-white bg-white/[0.06] hover:bg-white/[0.1] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition" href="#ai">
<i className="w-4 h-4" data-lucide="brain-circuit"></i>
                See AI approach
              </a>
</div>
<div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
<div className="rounded-lg p-4 ring-1 ring-inset ring-white/10 bg-white/5">
<p className="text-2xl font-semibold tracking-tight text-white">15+</p>
<p className="text-xs text-neutral-400">Years of experience</p>
</div>
<div className="rounded-lg p-4 ring-1 ring-inset ring-white/10 bg-white/5">
<p className="text-2xl font-semibold tracking-tight text-white">50+</p>
<p className="text-xs text-neutral-400">Projects delivered</p>
</div>
<div className="rounded-lg p-4 ring-1 ring-inset ring-white/10 bg-white/5">
<p className="text-2xl font-semibold tracking-tight text-white">0→1</p>
<p className="text-xs text-neutral-400">From idea to production</p>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-2xl ring-1 ring-inset ring-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02] p-6">
<div className="flex items-start justify-between">
<div>
<p className="text-sm text-neutral-400">AI roadmap</p>
<h3 className="mt-1 text-lg font-semibold tracking-tight text-white">From demo to production</h3>
</div>
<div className="h-10 w-10 rounded-md bg-white/5 flex items-center justify-center ring-1 ring-white/10">
<i className="w-5 h-5 text-white" data-lucide="bot"></i>
</div>
</div>
<ul className="mt-5 space-y-3">
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check-circle-2"></i>
<div>
<p className="text-sm text-white">High‑performance RAG</p>
<p className="text-xs text-neutral-400">Ingestion, semantic chunking, embeddings, VDB</p>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check-circle-2"></i>
<div>
<p className="text-sm text-white">Agents and tools</p>
<p className="text-xs text-neutral-400">Orchestration, safe tools, traceability</p>
</div>
</li>
<li className="flex items-start gap-3">
<i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check-circle-2"></i>
<div>
<p className="text-sm text-white">MLOps/LLMOps</p>
<p className="text-xs text-neutral-400">Evaluation, observability, cost control</p>
</div>
</li>
</ul>
<div className="mt-6 rounded-lg overflow-hidden ring-1 ring-inset ring-white/10">
<img alt="Generative AI" className="w-full h-56 object-cover" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-white/10" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif'}}>AI‑native, product‑driven team</h2>
<p className="mt-3 text-neutral-300">A compact team with an AI‑native engineering mindset, product ownership, and UX excellence. We ship fast, measure impact, and iterate.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
<article className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10">
<div className="aspect-[16/10] overflow-hidden rounded-lg ring-1 ring-inset ring-white/10">
<img alt="AI Engineer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="mt-4 text-base font-semibold tracking-tight text-white">AI Engineer</h3>
<p className="mt-1.5 text-sm text-neutral-300">LLMs, RAG, agents, evals, guardrails. Bias to action and production rigor.</p>
<div className="mt-3 flex flex-wrap gap-2 text-[11px]">
<span className="px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 ring-1 ring-inset ring-indigo-500/30">LLMs</span>
<span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 ring-1 ring-inset ring-white/10">RAG</span>
<span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 ring-1 ring-inset ring-white/10">Agents</span>
</div>
</article>
<article className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10">
<div className="aspect-[16/10] overflow-hidden rounded-lg ring-1 ring-inset ring-white/10">
<img alt="AI Engineer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="mt-4 text-base font-semibold tracking-tight text-white">AI Engineer</h3>
<p className="mt-1.5 text-sm text-neutral-300">Data pipelines, embeddings, eval harness, LLMOps. Shipping with observability.</p>
<div className="mt-3 flex flex-wrap gap-2 text-[11px]">
<span className="px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 ring-1 ring-inset ring-indigo-500/30">Embeddings</span>
<span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 ring-1 ring-inset ring-white/10">VDB</span>
<span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 ring-1 ring-inset ring-white/10">LLMOps</span>
</div>
</article>
<article className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10">
<div className="aspect-[16/10] overflow-hidden rounded-lg ring-1 ring-inset ring-white/10">
<img alt="Product Owner" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="mt-4 text-base font-semibold tracking-tight text-white">Product Owner</h3>
<p className="mt-1.5 text-sm text-neutral-300">Discovery, prioritization, ROI, and clear roadmaps aligned to outcomes.</p>
<div className="mt-3 flex flex-wrap gap-2 text-[11px]">
<span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 ring-1 ring-inset ring-white/10">Discovery</span>
<span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 ring-1 ring-inset ring-white/10">Roadmapping</span>
</div>
</article>
<article className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10">
<div className="aspect-[16/10] overflow-hidden rounded-lg ring-1 ring-inset ring-white/10">
<img alt="UX Designer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514790193030-c89d266d5a9d?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="mt-4 text-base font-semibold tracking-tight text-white">UX Designer</h3>
<p className="mt-1.5 text-sm text-neutral-300">Accessible, delightful experiences with streaming, chat, and traceability.</p>
<div className="mt-3 flex flex-wrap gap-2 text-[11px]">
<span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 ring-1 ring-inset ring-white/10">Research</span>
<span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 ring-1 ring-inset ring-white/10">Prototyping</span>
</div>
</article>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-white/10" id="ai">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif'}}>Applied AI with production rigor</h2>
<p className="mt-3 text-neutral-300">I design AI solutions that deliver value from day one, with traceability, security, and performance. From POCs to deployments in regulated environments.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-indigo-300" data-lucide="brain-circuit"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">LLM‑powered products</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Assistants, semantic search, copilots, and automation with grounding and guardrails.</p>
<ul className="mt-4 space-y-2 text-xs text-neutral-400">
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="dot"></i> Private document RAG</li>
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="dot"></i> Functions/Tools + agents</li>
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="dot"></i> Evaluation and benchmarks</li>
</ul>
</div>
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-indigo-300" data-lucide="workflow"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Pipelines and data</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Ingestion, cleaning, semantic chunking, embeddings, and robust orchestration with queues and backpressure.</p>
<ul className="mt-4 space-y-2 text-xs text-neutral-400">
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="dot"></i> Vector DBs (pgvector, Qdrant, Pinecone)</li>
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="dot"></i> OCR/Audio/Multimodal</li>
</ul>
</div>
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-indigo-300" data-lucide="shield-check"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">MLOps / LLMOps</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Observability, privacy by design, deterministic testing, and cost control.</p>
<ul className="mt-4 space-y-2 text-xs text-neutral-400">
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="dot"></i> Automated evaluations</li>
<li className="flex gap-2"><i className="w-4 h-4" data-lucide="dot"></i> A/B on prompts and routes</li>
</ul>
</div>
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-indigo-300" data-lucide="code-2"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Backend integration</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">High‑performance APIs, queues, jobs, and microservices ready for AI.</p>
<p className="mt-2 text-xs text-neutral-400">Elixir (OTP/GenStage), Spring, Node.js</p>
</div>
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-indigo-300" data-lucide="layout-dashboard"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Frontends for AI</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Rich, accessible experiences with streaming, chat, and traceability.</p>
<p className="mt-2 text-xs text-neutral-400">Angular, React, Vue</p>
</div>
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i className="w-5 h-5 text-indigo-300" data-lucide="smartphone"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Mobile + AI</h3>
</div>
<p className="mt-3 text-sm text-neutral-300">Native apps with on‑device AI when it makes sense and hybrid experiences.</p>
<p className="mt-2 text-xs text-neutral-400">Swift / SwiftUI</p>
</div>
</div>

<div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10 lg:col-span-2">
<h3 className="text-lg font-semibold tracking-tight text-white">AI &amp; data stack</h3>
<p className="mt-2 text-sm text-neutral-300">LLMs (closed and open), LangChain/LangGraph, OpenAI, Claude, VDBs (pgvector, Qdrant, Pinecone), ETL, Airflow/Temporal, vectors, metrics and evaluation.</p>
<div className="mt-4 flex flex-wrap gap-2">
<span className="px-2.5 py-1 text-xs rounded-md bg-white/5 ring-1 ring-inset ring-white/10">RAG</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/5 ring-1 ring-inset ring-white/10">Agents</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/5 ring-1 ring-inset ring-white/10">Prompting</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/5 ring-1 ring-inset ring-white/10">Evaluation</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/5 ring-1 ring-inset ring-white/10">Observability</span>
<span className="px-2.5 py-1 text-xs rounded-md bg-white/5 ring-1 ring-inset ring-white/10">Security</span>
</div>
</div>
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10">
<h3 className="text-lg font-semibold tracking-tight text-white">Focus 2025</h3>
<p className="text-sm text-neutral-300">Current focus distribution</p>
<div className="mt-3 rounded-lg bg-white/[0.03] ring-1 ring-inset ring-white/10 p-3">
<div className="h-40">
<canvas id="focusChart"></canvas>
</div>
<div className="mt-3 grid grid-cols-2 gap-2 text-xs text-neutral-400">
<div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-indigo-400"></span> AI</div>
<div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400"></span> Backend</div>
<div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-amber-400"></span> Frontend</div>
<div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-fuchsia-400"></span> Mobile</div>
</div>
</div>
</div>
</div>

<div className="mt-10 flex flex-wrap gap-2">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs ring-1 ring-inset ring-white/10 bg-white/5">
<i className="w-4 h-4 text-indigo-300" data-lucide="square-function"></i> Tool Calling
          </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs ring-1 ring-inset ring-white/10 bg-white/5">
<i className="w-4 h-4 text-indigo-300" data-lucide="files"></i> Multi‑source RAG
          </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs ring-1 ring-inset ring-white/10 bg-white/5">
<i className="w-4 h-4 text-indigo-300" data-lucide="settings"></i> Automated evaluations
          </span>
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs ring-1 ring-inset ring-white/10 bg-white/5">
<i className="w-4 h-4 text-indigo-300" data-lucide="lock"></i> Security &amp; PII
          </span>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-white/10" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif'}}>End‑to‑end services</h2>
<p className="mt-3 text-neutral-300">From discovery and technical design to deploy and observability. I can embed with your team or take full ownership.</p>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center mb-3">
<i className="w-5 h-5 text-indigo-300" data-lucide="lightbulb"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Discovery &amp; strategy</h3>
<p className="mt-2 text-sm text-neutral-300">Use‑case identification, ROI, and risks. Prioritization and roadmap.</p>
</div>
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center mb-3">
<i className="w-5 h-5 text-indigo-300" data-lucide="server-cog"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Architecture &amp; BE</h3>
<p className="mt-2 text-sm text-neutral-300">Microservices, APIs, queues, jobs, and resilience. Elixir, Spring, Node.js.</p>
</div>
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center mb-3">
<i className="w-5 h-5 text-indigo-300" data-lucide="monitor-smartphone"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Frontend &amp; Mobile</h3>
<p className="mt-2 text-sm text-neutral-300">Modern, accessible, high‑performance interfaces. Angular, React, Vue, Swift/SwiftUI.</p>
</div>
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="h-10 w-10 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center mb-3">
<i className="w-5 h-5 text-indigo-300" data-lucide="rocket"></i>
</div>
<h3 className="text-base font-semibold tracking-tight text-white">Go‑Live &amp; operations</h3>
<p className="mt-2 text-sm text-neutral-300">CICD, observability, feature flags, A/B, hardening, and cost control.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-white/10" id="projects">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between gap-4">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif'}}>Cases &amp; prototypes</h2>
<p className="mt-3 text-neutral-300 max-w-2xl">A sample of delivered solutions and recent AI labs.</p>
</div>
<a className="hidden sm:inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-white bg-white/[0.06] hover:bg-white/[0.1] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition" href="#contact">
<i className="w-4 h-4" data-lucide="send"></i>
            Start your case
          </a>
</div>
<div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<article className="group rounded-xl overflow-hidden ring-1 ring-inset ring-white/10 bg-white/[0.03] hover:ring-white/20 transition">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Support assistant with RAG" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-[11px]">
<span className="px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 ring-1 ring-inset ring-indigo-500/30">RAG</span>
<span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 ring-1 ring-inset ring-white/10">LLMOps</span>
<span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 ring-1 ring-inset ring-white/10">Elixir</span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Enterprise support assistant</h3>
<p className="mt-1.5 text-sm text-neutral-300">Semantic search over private KB, traceability, and quality metrics.</p>
</div>
</article>
<article className="group rounded-xl overflow-hidden ring-1 ring-inset ring-white/10 bg-white/[0.03] hover:ring-white/20 transition">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Operations agent" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-[11px]">
<span className="px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 ring-1 ring-inset ring-indigo-500/30">Agents</span>
<span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 ring-1 ring-inset ring-white/10">Node.js</span>
<span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 ring-1 ring-inset ring-white/10">React</span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Field operations agent</h3>
<p className="mt-1.5 text-sm text-neutral-300">Planning, tool use, and validations with guardrails.</p>
</div>
</article>
<article className="group rounded-xl overflow-hidden ring-1 ring-inset ring-white/10 bg-white/[0.03] hover:ring-white/20 transition">
<div className="aspect-[16/10] overflow-hidden">
<img alt="Mobile AI" className="w-full h-full object-cover group-hover:scale-[1.02] transition" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="p-5">
<div className="flex items-center gap-2 text-[11px]">
<span className="px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-300 ring-1 ring-inset ring-indigo-500/30">On‑device</span>
<span className="px-2 py-0.5 rounded bg-white/5 text-neutral-300 ring-1 ring-inset ring-white/10">SwiftUI</span>
</div>
<h3 className="mt-3 text-lg font-semibold tracking-tight text-white">Mobile AI experiences</h3>
<p className="mt-1.5 text-sm text-neutral-300">On‑device models for privacy and ultra‑low latency.</p>
</div>
</article>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-white/10" id="process">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif'}}>How I work</h2>
<div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-5">
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10">
<div className="flex items-center gap-2 text-xs text-neutral-400"><i className="w-4 h-4" data-lucide="target"></i> 1</div>
<h3 className="mt-2 text-base font-semibold tracking-tight text-white">Discovery</h3>
<p className="mt-1.5 text-sm text-neutral-300">Objectives, risks, metrics, and value plan.</p>
</div>
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10">
<div className="flex items-center gap-2 text-xs text-neutral-400"><i className="w-4 h-4" data-lucide="pencil-ruler"></i> 2</div>
<h3 className="mt-2 text-base font-semibold tracking-tight text-white">Design</h3>
<p className="mt-1.5 text-sm text-neutral-300">Architecture, data, security, and measurement.</p>
</div>
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10">
<div className="flex items-center gap-2 text-xs text-neutral-400"><i className="w-4 h-4" data-lucide="hammer"></i> 3</div>
<h3 className="mt-2 text-base font-semibold tracking-tight text-white">Build</h3>
<p className="mt-1.5 text-sm text-neutral-300">Incremental delivery with CICD and feature flags.</p>
</div>
<div className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10">
<div className="flex items-center gap-2 text-xs text-neutral-400"><i className="w-4 h-4" data-lucide="activity"></i> 4</div>
<h3 className="mt-2 text-base font-semibold tracking-tight text-white">Operate</h3>
<p className="mt-1.5 text-sm text-neutral-300">Observability, evaluation, and continuous improvement.</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif'}}>What clients say</h2>
<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
<figure className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-amber-300">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
<blockquote className="mt-3 text-sm text-neutral-300">
              Delivery was impeccable. We moved from a demo to a RAG assistant in production, with metrics and cost control. Clear technical thinking and full ownership.
            </blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="Client 1 avatar" className="h-9 w-9 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white font-medium">María González</p>
<p className="text-xs text-neutral-400">CTO • Fintech LATAM</p>
</div>
</figcaption>
</figure>
<figure className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-amber-300">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
<blockquote className="mt-3 text-sm text-neutral-300">
              Designed the end‑to‑end architecture and guided our MLOps. Zero‑downtime releases and observability from day one.
            </blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="Client 2 avatar" className="h-9 w-9 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white font-medium">Javier Pérez</p>
<p className="text-xs text-neutral-400">VP Engineering • B2B SaaS</p>
</div>
</figcaption>
</figure>
<figure className="rounded-xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition">
<div className="flex items-center gap-2 text-amber-300">
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
<i className="w-4 h-4" data-lucide="star"></i>
</div>
<blockquote className="mt-3 text-sm text-neutral-300">
              Proposed an agent with tools and guardrails that reduced operational time by 35%. Great communication and business focus.
            </blockquote>
<figcaption className="mt-4 flex items-center gap-3">
<img alt="Client 3 avatar" className="h-9 w-9 rounded-full ring-1 ring-white/10" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm text-white font-medium">Laura Méndez</p>
<p className="text-xs text-neutral-400">Head of Ops • Logistics</p>
</div>
</figcaption>
</figure>
</div>
</div>
</section>

<section className="py-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl bg-gradient-to-r from-indigo-600/15 to-fuchsia-600/15 ring-1 ring-inset ring-white/10 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif'}}>Ready to take AI to production?</h3>
<p className="mt-1.5 text-sm text-neutral-300">Let’s run a pilot with clear metrics and short time‑to‑value.</p>
</div>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-neutral-900 bg-white hover:bg-neutral-200" href="#contact">
<i className="w-4 h-4" data-lucide="sparkles"></i> Get started
            </a>
<a className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-white bg-white/[0.06] hover:bg-white/[0.1] ring-1 ring-inset ring-white/10 hover:ring-white/20 transition" href="#projects">
<i className="w-4 h-4" data-lucide="play-circle"></i> See cases
            </a>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
<div className="lg:col-span-1">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white" style={{fontFamily: 'Space Grotesk, Inter, ui-sans-serif'}}>Let’s talk</h2>
<p className="mt-2 text-neutral-300">Tell me about the challenge and we’ll shape a plan in days, not weeks. I reply within 24–48h.</p>
<div className="mt-6 space-y-3 text-sm text-neutral-300">
<p className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-300" data-lucide="mail"></i> hello@yourname.dev</p>
<p className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-300" data-lucide="map-pin"></i> Remote • UTC‑3</p>
<p className="flex items-center gap-2"><i className="w-4 h-4 text-indigo-300" data-lucide="calendar"></i> Part‑time/FT availability</p>
</div>
<div className="mt-6 flex items-center gap-3">
<a aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10 hover:bg-white/10 transition" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
<a aria-label="GitHub" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10 hover:bg-white/10 transition" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a aria-label="X" className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-inset ring-white/10 hover:bg-white/10 transition" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
</div>
</div>
<div className="lg:col-span-2">
<form className="rounded-2xl p-6 bg-white/[0.04] ring-1 ring-inset ring-white/10" id="contactForm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-xs text-neutral-400" htmlFor="nombre">Name</label>
<input className="mt-1 w-full rounded-md bg-white/5 text-white placeholder:text-neutral-500 px-3 py-2 text-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" id="nombre" name="nombre" placeholder="Your name" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-400" htmlFor="email">Email</label>
<input className="mt-1 w-full rounded-md bg-white/5 text-white placeholder:text-neutral-500 px-3 py-2 text-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" id="email" name="email" placeholder="you@company.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-neutral-400" htmlFor="empresa">Company</label>
<input className="mt-1 w-full rounded-md bg-white/5 text-white placeholder:text-neutral-500 px3 py-2 text-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" id="empresa" name="empresa" placeholder="Company name" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-400" htmlFor="presupuesto">Budget range</label>
<select className="mt-1 w-full rounded-md bg-white/5 text-white px-3 py-2 text-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" id="presupuesto" name="presupuesto">
<option className="bg-neutral-900" value="">Select…</option>
<option className="bg-neutral-900">Exploratory</option>
<option className="bg-neutral-900">USD 5k–15k</option>
<option className="bg-neutral-900">USD 15k–50k</option>
<option className="bg-neutral-900">USD 50k+</option>
</select>
</div>
<div className="md:col-span-2">
<label className="block text-xs text-neutral-400" htmlFor="mensaje">Message</label>
<textarea className="mt-1 w-full rounded-md bg-white/5 text-white placeholder:text-neutral-500 px-3 py-2 text-sm ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500/50" id="mensaje" name="mensaje" placeholder="Tell me about the challenge, success metrics, and timing" required="" rows="5"></textarea>
</div>
</div>
<div className="mt-5 flex items-center justify-between gap-3">
<p aria-live="polite" className="text-xs text-emerald-400" id="contactStatus"></p>
<button className="inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-neutral-900 bg-white hover:bg-neutral-200 transition" type="submit">
<i className="w-4 h-4" data-lucide="send"></i> Send
                </button>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-sm text-neutral-400">
<p>© 2025 Your Name. All rights reserved.</p>
<p className="text-neutral-500">AI + Software Engineering</p>
</div>
</footer>


    </>
  );
}
