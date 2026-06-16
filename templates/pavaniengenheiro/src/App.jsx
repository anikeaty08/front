import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      lucide.createIcons();
    


      // Initialize Lucide Icons
      lucide.createIcons();

      // Simple Intersection Observer for scroll animations
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.style.animationPlayState = 'running';
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.animate-enter').forEach(el => {
          el.style.animationPlayState = 'paused';
          observer.observe(el);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen -z-10 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="absolute inset-0 bg-gradient-to-tr from-black via-zinc-950 to-black"></div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute inset-0 grid-bg"></div>

<div className="container mx-auto h-full relative border-x border-white/[0.03]">
<div className="grid-line left-1/4"></div>
<div className="grid-line left-2/4"></div>
<div className="grid-line left-3/4"></div>

<div className="absolute bottom-32 left-0 -ml-3 text-[10px] text-gray-700 font-mono">01</div>
<div className="absolute bottom-32 left-1/4 -ml-3 text-[10px] text-gray-700 font-mono">02</div>
<div className="absolute bottom-32 left-2/4 -ml-3 text-[10px] text-gray-700 font-mono">03</div>
<div className="absolute bottom-32 left-3/4 -ml-3 text-[10px] text-gray-700 font-mono">04</div>
<div className="absolute bottom-32 right-0 -mr-3 text-[10px] text-gray-700 font-mono">05</div>
</div>
</div>

<nav className="fixed z-50 flex pr-4 pl-4 top-6 right-0 left-0 justify-center">
<div className="flex gap-6-full pt-1.5 pr-2 pb-1.5 pl-2 shadow-2xl backdrop-blur-md scale-100 gap-x-6 gap-y-6 items-center">

<a className="flex items-center gap-3 group pr-2 pl-2" href="#">
<div className="relative">
<img alt="Lucas Pavani" className="group-hover:scale-105 transition-transform duration-300 w-9 h-9 object-cover border-white/10 border rounded-full shadow-inner scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0241fb10-95c4-40c7-a180-0fd6dd37cf65_320w.png"/>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-gray-950 rounded-full"></div>
</div>
<div className="flex flex-col justify-center">
<span className="text-xs font-semibold text-white tracking-tight leading-none">Lucas Pavani</span>
<span className="text-[10px] text-gray-400 font-medium leading-none mt-1">Engenheiro de IA</span>
</div>
</a>

<div className="hidden md:flex items-center gap-1">
<a className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200" href="#">
            Sobre
          </a>
<a className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200" href="#">
            Especialidades
          </a>
<a className="px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors duration-200" href="#">
            Projetos
          </a>
</div>

<a className="flex items-center gap-1 hover:bg-gray-200 transition-colors shadow-emerald-500/10 text-xs font-semibold text-black bg-white rounded-full pt-1.5 pr-4 pb-1.5 pl-4 shadow-lg" href="https://calendly.com/lucaspavanicontato/30min?month=2025-12">
          Agendar Reunião
          <svg className="lucide lucide-arrow-right w-3 h-3 ml-0.5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<main className="flex flex-col z-10 pt-32 pb-16 relative justify-center">
<div className="container md:px-12 grid grid-cols-1 lg:grid-cols-12 h-full mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">

<div className="flex flex-col order-2 lg:col-span-7 lg:order-1 my-24 relative gap-x-8 gap-y-8">

<div className="flex items-center gap-3">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
<span className="text-[10px] tracking-[0.2em] text-blue-400/80 font-semibold uppercase">
              Lucas Pavani AI Architect
            </span>
</div>

<h1 className="md:text-7xl lg:text-7xl leading-[1.1] text-5xl text-white tracking-tight font-serif-italic">
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-gray-400">
              Automatize seu
            </span>
<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 via-blue-500 to-emerald-600 text-glow">
              Negócio com IA
            </span>
</h1>

<p className="text-lg md:text-xl text-gray-400 font-normal max-w-xl leading-relaxed">
            Meu nome é Lucas Pavani, sou especialista em criar automações inteligentes que economizam tempo e impulsionam o crescimento da sua empresa. Transformo processos complexos em fluxos eficientes.
          </p>

<div className="flex flex-col sm:flex-row pt-4 gap-x-6 gap-y-6 items-center sm:items-stretch">

<div className="btn-wrapper h-[56px] flex items-center">
<button className="btn md:px-8 md:py-3 focus:outline-none sm:w-auto w-full h-full pt-3 pr-5 pb-3 pl-5" type="button">

<svg aria-hidden="true" className="btn-svg" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7m4 13l5-5m0 0l-5-5m5 5H9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
<div className="txt-wrapper">
<div className="txt-1">
<span className="btn-letter">V</span>
<span className="btn-letter">e</span>
<span className="btn-letter">r</span>
<span className="btn-letter"> </span>
<span className="btn-letter">P</span>
<span className="btn-letter">r</span>
<span className="btn-letter">o</span>
<span className="btn-letter">j</span>
<span className="btn-letter">e</span>
<span className="btn-letter">t</span>
<span className="btn-letter">o</span>
<span className="btn-letter">s</span>
</div>
<div className="txt-2">
<span className="btn-letter">E</span>
<span className="btn-letter">x</span>
<span className="btn-letter">p</span>
<span className="btn-letter">l</span>
<span className="btn-letter">o</span>
<span className="btn-letter">r</span>
<span className="btn-letter">a</span>
<span className="btn-letter">r</span>
</div>
</div>
</button>
</div>

<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center h-[56px] w-full sm:w-auto">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#10b981_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 rounded-full bg-white/10 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-semibold text-gray-300 tracking-widest bg-black/90 backdrop-blur-xl w-full h-full rounded-full px-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<span className="relative z-10">Sobre Mim</span>
</span>
</button>
</div>
</div>

<div className="lg:col-span-5 lg:h-[600px] flex order-1 lg:order-2 w-full h-[400px] relative items-center justify-center">

<svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" viewbox="0 0 600 600">
<defs>
<lineargradient id="beam-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(16, 185, 129, 0)"></stop>
<stop offset="50%" stop-color="#10b981"></stop>
<stop offset="100%" stop-color="rgba(16, 185, 129, 0)"></stop>
</lineargradient>
</defs>
<path d="M0,100 C150,100 200,200 300,300" fill="none" stroke="#1f2937" strokeWidth="1"></path>
<path className="beam-path beam-path-delay-1" d="M0,100 C150,100 200,200 300,300" fill="none" stroke="url(#beam-gradient)" strokeLinecap="round" strokeWidth="2"></path>
<path d="M600,500 C450,500 400,400 300,300" fill="none" stroke="#1f2937" strokeWidth="1"></path>
<path className="beam-path beam-path-delay-2" d="M600,500 C450,500 400,400 300,300" fill="none" stroke="url(#beam-gradient)" strokeLinecap="round" strokeWidth="2"></path>
<path d="M600,100 C500,100 400,200 300,300" fill="none" stroke="#1f2937" strokeWidth="1"></path>
<path className="beam-path beam-path-delay-3" d="M600,100 C500,100 400,200 300,300" fill="none" stroke="url(#beam-gradient)" strokeLinecap="round" strokeWidth="2"></path>
<path d="M0,500 C100,500 200,400 300,300" fill="none" stroke="#1f2937" strokeWidth="1"></path>
</svg>

<div className="relative w-64 h-64 flex items-center justify-center z-10">
<div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-full border border-white/5"></div>
<div className="absolute inset-0 rounded-full border border-dashed border-gray-700 animate-[spin_20s_linear_infinite]"></div>
<div className="absolute inset-8 rounded-full border border-gray-800"></div>
<div className="absolute inset-16 rounded-full border border-gray-700 flex items-center justify-center bg-gray-900 shadow-2xl">
<div className="w-4 h-4 bg-emerald-500 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.8)] relative z-10">
<div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-50"></div>
</div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-3 bg-gray-700"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-3 bg-gray-700"></div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-px bg-gray-700"></div>
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-px bg-gray-700"></div>

<div className="absolute -top-12 -left-4 bg-gray-900/80 backdrop-blur border border-white/10 px-2 py-1 rounded shadow-lg">
<span className="text-[10px] tracking-widest text-emerald-400 font-semibold uppercase">
                LLM Powered
              </span>
</div>
<div className="absolute -bottom-12 -right-4 bg-gray-900/80 backdrop-blur border border-white/10 px-2 py-1 rounded shadow-lg">
<span className="text-[10px] tracking-widest text-blue-400 font-semibold uppercase">
                N8N Automation
              </span>
</div>
</div>
</div>
</div>
</main>

<section className="relative z-20 w-full overflow-hidden border-y border-white/5 bg-black/50 py-10 animate-enter delay-200 border-emerald-500/50" style={{animationPlayState: 'paused'}}>
<div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-black via-transparent to-black"></div>
<div className="marquee-container flex overflow-hidden">
<div className="animate-marquee flex gap-16 md:gap-24 items-center whitespace-nowrap px-12">
<div className="flex items-center gap-16 md:gap-24 text-zinc-600">
<iconify-icon className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="logos:python" width="36"></iconify-icon>
<iconify-icon className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" height="30" icon="simple-icons:openai" width="96"></iconify-icon>
<iconify-icon className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:n8n" width="48"></iconify-icon>
<iconify-icon className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="logos:google-cloud" width="48"></iconify-icon>
<iconify-icon className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:adobephotoshop" width="36"></iconify-icon>
<iconify-icon className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="logos:meta-icon" width="36"></iconify-icon>
</div>

<div className="flex items-center gap-16 md:gap-24 text-zinc-600">
<iconify-icon className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="logos:python" width="36"></iconify-icon>
<iconify-icon className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" height="30" icon="simple-icons:openai" width="96"></iconify-icon>
<iconify-icon className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:n8n" width="48"></iconify-icon>
<iconify-icon className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="logos:google-cloud" width="48"></iconify-icon>
<iconify-icon className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="simple-icons:adobephotoshop" width="36"></iconify-icon>
<iconify-icon className="grayscale brightness-50 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" icon="logos:meta-icon" width="36"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="z-10 bg-black/20 pt-24 pb-24 relative">
<div className="container mx-auto px-6 max-w-7xl">
<div className="flex flex-col items-center mb-16 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] uppercase tracking-widest font-semibold mb-4 backdrop-blur-md">
            Soluções que transformam
          </div>
<h2 className="text-3xl md:text-5xl font-serif-italic text-white">Minhas Especialidades</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">

<div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 animate-enter delay-300" style={{animationPlayState: 'paused'}}>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="mb-8">
<h3 className="text-xl font-semibold text-zinc-100 tracking-tight mb-2">
                  Automação com N8N
                </h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
                  Desenvolvimento de fluxos de trabalho robustos para conectar apps, automatizar tarefas e otimizar processos.
                </p>
</div>

<div className="relative h-48 w-full mt-auto border border-white/5 rounded-xl bg-black/40 p-4 overflow-hidden">
<svg className="absolute inset-0 w-full h-full pointer-events-none" style={{opacity: '0.3'}}>
<path d="M70 120 C 120 120, 120 60, 170 60" fill="none" stroke="#525252" strokeWidth="1"></path>
<path d="M260 60 L 320 60" fill="none" stroke="#525252" strokeWidth="1"></path>
<path d="M70 120 C 120 120, 120 140, 170 140" fill="none" stroke="#525252" strokeWidth="1"></path>
</svg>
<div className="absolute top-[40px] left-[170px] bg-zinc-800 border border-zinc-700 rounded px-3 py-1.5 flex items-center gap-2 shadow-lg">
<iconify-icon className="text-xs text-emerald-400" icon="solar:round-transfer-vertical-linear"></iconify-icon>
<span className="text-[10px] text-zinc-300">process</span>
</div>
<div className="absolute top-[40px] left-[320px] bg-zinc-800 border border-zinc-700 rounded px-3 py-1.5 flex items-center gap-2 shadow-lg">
<iconify-icon className="text-xs text-blue-400" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-[10px] text-zinc-300">output</span>
</div>
<div className="absolute top-[100px] left-[20px] bg-zinc-800 border border-zinc-700 rounded px-3 py-1.5 flex items-center gap-2 shadow-lg">
<iconify-icon className="text-purple-400 text-xs" icon="solar:inbox-linear"></iconify-icon>
<span className="text-[10px] text-zinc-300">trigger</span>
</div>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 animate-enter delay-400" style={{animationPlayState: 'paused'}}>
<div className="p-6 h-full flex flex-col relative z-10">
<h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-2">
                RAG (Retrieval-Augmented Generation)
              </h3>
<p className="text-xs text-zinc-400 leading-relaxed mb-8">
                Enriquecimento de LLMs com dados externos para respostas precisas.
              </p>
<div className="flex-1 flex items-center justify-center">
<div className="relative w-24 h-24 border border-zinc-700 rounded-lg flex items-center justify-center bg-zinc-900/50">
<iconify-icon className="text-4xl text-blue-500" icon="solar:database-linear"></iconify-icon>
<div className="absolute -right-3 -top-3 bg-zinc-800 rounded-full p-1.5 border border-zinc-700">
<iconify-icon className="text-emerald-400" icon="solar:magic-stick-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 animate-enter delay-500" style={{animationPlayState: 'paused'}}>
<div className="p-6 h-full flex flex-col relative z-10">
<h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-2">
                ComfyUI &amp; Photoshop
              </h3>
<p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Workflows visuais para geração e edição de mídia com IA e design.
              </p>
<div className="flex-1 flex flex-col items-center justify-center gap-3">
<div className="w-full h-20 bg-zinc-900 rounded border border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20"></div>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-white/50" icon="solar:gallery-wide-linear"></iconify-icon>
</div>
<div className="flex gap-2 w-full">
<div className="h-2 w-full bg-zinc-800 rounded"></div>
<div className="h-2 w-1/3 bg-blue-500 rounded"></div>
</div>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 animate-enter delay-600" style={{animationPlayState: 'paused'}}>
<div className="p-6 h-full flex flex-col relative z-10">
<h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-2">
                Engenharia de Prompt
              </h3>
<p className="text-xs text-zinc-400 leading-relaxed mb-8">
                Elaboração de prompts precisos para extrair o máximo potencial das IAs.
              </p>
<div className="relative flex-1 bg-zinc-900/50 rounded-lg border border-white/5 p-4">
<div className="space-y-2">
<div className="h-1.5 w-3/4 bg-zinc-700 rounded animate-pulse"></div>
<div className="h-1.5 w-1/2 bg-zinc-700 rounded animate-pulse delay-75"></div>
<div className="h-1.5 w-5/6 bg-emerald-500/50 rounded animate-pulse delay-150"></div>
</div>
</div>
</div>
</div>

<div className="relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 animate-enter delay-600" style={{animationPlayState: 'paused'}}>
<div className="p-6 h-full flex flex-col relative z-10">
<h3 className="text-lg font-semibold text-zinc-100 tracking-tight mb-2">
                Flash Execution
              </h3>
<p className="text-xs text-zinc-400 leading-relaxed mb-6">
                Tecnologias: LLMs, Python, Análise de Sentimento e OCR.
              </p>
<div className="flex-1 flex items-center justify-center relative">
<div className="absolute inset-0 blur-3xl rounded-full bg-emerald-500/10"></div>
<button className="relative bg-gradient-to-b from-zinc-900 to-black border border-white/10 text-emerald-100 px-6 py-2.5 rounded-full text-xs font-medium flex items-center gap-2">
<span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                  Running
                </button>
</div>
</div>
</div>

<div className="md:col-span-2 relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 animate-enter delay-500" style={{animationPlayState: 'paused'}}>
<div className="p-8 h-full flex flex-col relative z-10">
<div className="mb-6">
<h3 className="text-xl font-semibold text-zinc-100 tracking-tight mb-2">
                  IA Generativa e LLMs
                </h3>
<p className="text-sm text-zinc-400 leading-relaxed max-w-md">
                  Uso de Large Language Models para gerar conteúdo, analisar textos, criar chatbots e extrair insights.
                </p>
</div>

<div className="flex-1 grid grid-cols-1 gap-4 mt-4">
<div className="relative bg-zinc-900 border border-white/10 rounded-xl p-4 flex flex-col shadow-2xl">
<div className="mb-4">
<label className="text-[10px] text-zinc-500 block mb-1.5">
                      User Query
                    </label>
<div className="relative">
<div className="w-full bg-black/50 border border-white/5 rounded-lg px-3 py-2 text-xs text-zinc-300 flex items-center">
                        analisar feedback de clientes...
                      </div>
</div>
</div>
<div className="flex-1 bg-black/20 rounded border border-white/5 p-3 relative min-h-[60px]">
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-[10px]">AI</div>
<div className="space-y-1 w-full">
<div className="h-2 w-full bg-zinc-800 rounded"></div>
<div className="h-2 w-5/6 bg-zinc-800 rounded"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 overflow-hidden bg-zinc-950/50 border-white/5 border-t pt-32 pb-32 relative">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:200px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>
<div className="container mx-auto px-6 max-w-7xl relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

<div className="lg:col-span-2 hidden lg:block">
<div className="sticky top-32">
<span className="text-[10px] font-mono text-emerald-500 tracking-widest uppercase flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Portfolio
              </span>
</div>
</div>

<div className="lg:col-span-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-[10px] uppercase tracking-widest font-semibold mb-8 backdrop-blur-md">
                Um pouco do meu trabalho
            </div>
<h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-zinc-100 tracking-tight leading-[1.1] mb-20">
              Projetos em
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500 font-serif-italic font-normal">
                Destaque
              </span>
</h2>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t border-white/5 pt-12">
<div className="flex flex-col justify-between h-full min-h-[300px]">
<div className="mb-12">
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">
                    ClientConnect AI
                  </h3>
<p className="text-base text-zinc-400 leading-relaxed max-w-md">
                    Sistema de atendimento automatizado que tria, responde e direciona solicitações de clientes 24/7, reduzindo o tempo de primeira resposta em 90%.
                  </p>
<div className="mt-4 flex gap-2 flex-wrap">
<span className="text-[10px] bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-400">LLMs</span>
<span className="text-[10px] bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-400">Python</span>
<span className="text-[10px] bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-400">Análise de Sentimento</span>
</div>
</div>
</div>
<div className="relative h-full min-h-[300px] bg-zinc-900/20 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-blue-500/10 blur-[80px]"></div>
<iconify-icon className="text-blue-400 text-6xl relative z-10" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t border-white/5 pt-12 mt-12">
<div className="flex flex-col justify-between h-full min-h-[300px]">
<div className="mb-12">
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">
                      InsightGen
                    </h3>
<p className="text-base text-zinc-400 leading-relaxed max-w-md">
                      Ferramenta que usa LLMs para analisar milhares de feedbacks de clientes, identificando tendências, sentimentos e gerando relatórios com insights acionáveis.
                    </p>
<div className="mt-4 flex gap-2 flex-wrap">
<span className="text-[10px] bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-400">RAG</span>
<span className="text-[10px] bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-400">N8N</span>
<span className="text-[10px] bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-400">E-commerce APIs</span>
</div>
</div>
</div>
<div className="relative h-full min-h-[300px] bg-zinc-900/20 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-emerald-500/10 blur-[80px]"></div>
<iconify-icon className="text-emerald-400 text-6xl relative z-10" icon="solar:graph-new-linear"></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 border-t border-white/5 pt-12 mt-12">
<div className="flex flex-col justify-between h-full min-h-[300px]">
<div className="mb-12">
<h3 className="text-2xl text-white font-medium mb-4 tracking-tight">
                      FluxoContábil Pro
                    </h3>
<p className="text-base text-zinc-400 leading-relaxed max-w-md">
                      Automação para uma firma de contabilidade que processa faturas, gera relatórios financeiros e realiza conciliação bancária, economizando 20 horas de trabalho por semana.
                    </p>
<div className="mt-4 flex gap-2 flex-wrap">
<span className="text-[10px] bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-400">N8N</span>
<span className="text-[10px] bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-400">OCR</span>
<span className="text-[10px] bg-zinc-900 border border-white/10 px-2 py-1 rounded text-zinc-400">Google Sheets API</span>
</div>
</div>
</div>
<div className="relative h-full min-h-[300px] bg-zinc-900/20 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-purple-500/10 blur-[80px]"></div>
<iconify-icon className="text-purple-400 text-6xl relative z-10" icon="solar:document-text-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="relative py-32 border-t border-white/5 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="contrast-150 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0 brightness-100"></div>
<div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
<h2 className="text-5xl md:text-7xl font-serif-italic text-white mb-8 tracking-tight">
          Vamos Inovar
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-600 text-glow">
            Juntos?
          </span>
</h2>
<p className="text-lg text-zinc-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          Estou pronto para ouvir sobre seus desafios e explorar como a automação e a IA podem beneficiar o seu negócio.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="group relative px-8 py-4 bg-blue-500 hover:bg-blue-400 text-black font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] overflow-hidden">
<span className="flex items-center gap-2 z-10 relative">Fale com nosso especialistas <svg className="transition-transform group-hover:translate-x-1" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg></span>
<div className="group-hover:translate-y-0 transition-transform duration-300 cursor-pointer bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full" onclick="window.location.href='https://n8nwebhook.pavaniarquiteto.com/form/85e39119-3af3-4136-b682-e8eddc70a7b0';window.location.href='https://n8nwebhook.pavaniarquiteto.com/form/85e39119-3af3-4136-b682-e8eddc70a7b0'" role="button"></div>
</button>
<button className="hover:text-blue-400 transition-colors flex gap-2 font-medium text-white pt-4 pr-8 pb-4 pl-8 gap-x-2 gap-y-2 items-center cursor-pointer" onclick="window.location.href='https://www.linkedin.com/in/lucas-pavani-0bb27a346/'" role="button">
            Ver LinkedIn
            <iconify-icon className="text-lg" icon="solar:link-circle-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<footer className="z-10 bg-[#050505] border-white/5 border-t pt-20 pb-10 relative">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">

<div className="text-center md:text-left">
<a className="flex items-center justify-center md:justify-start gap-2 mb-6 group w-fit mx-auto md:mx-0" href="#">
<div className="w-6 h-6 bg-gradient-to-tr from-emerald-600 to-blue-500 rounded-md flex items-center justify-center relative overflow-hidden shadow-inner">
<div className="absolute inset-0 w-full h-full"><img alt="Lucas Pavani" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0241fb10-95c4-40c7-a180-0fd6dd37cf65_320w.png"/></div>
</div>
<span className="text-lg font-semibold text-white tracking-tight">
                Lucas Pavani
              </span>
</a>
<p className="text-sm text-zinc-500 leading-relaxed mb-6 max-w-xs">
              AI Architect &amp; Automation Specialist.
            </p>
</div>
<div className="flex gap-6">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">LinkedIn</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">GitHub</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">Email</a>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-zinc-600">
            © 2025 Lucas Pavani. Todos os direitos reservados.
          </p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-500"></span>
<span className="text-xs text-zinc-400 font-mono">
              Available for projects
            </span>
</div>
</div>
</div>
</footer>



    </>
  );
}
