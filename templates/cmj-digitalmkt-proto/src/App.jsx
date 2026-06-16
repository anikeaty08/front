import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



          (function() {
      const stepButtons = document.querySelectorAll('.step-button');
      const stepContents = document.querySelectorAll('.step-content');
      const textContents = document.querySelectorAll('.text-content');
      
      stepButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
          stepButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');
          stepContents.forEach(content => content.classList.remove('active'));
          textContents.forEach(text => text.classList.remove('active'));
          
          setTimeout(() => {
            stepContents[index].classList.add('active');
            textContents[index].classList.add('active');
          }, 50);
          
          if (index === 0 && window.Chart) {
            setTimeout(() => {
              const ctx = document.getElementById('overviewLine1');
              if (ctx && !ctx.chartInitialized) {
                const lineCtx = ctx.getContext('2d');
                new Chart(lineCtx, {
                  type: 'line',
                  data: {
                    labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
                    datasets: [{
                      label: 'Success',
                      data: [320, 410, 380, 520, 610, 560, 680],
                      borderColor: '#8b5cf6',
                      backgroundColor: 'rgba(139,92,246,0.15)',
                      tension: 0.35,
                      fill: true,
                      borderWidth: 2,
                      pointRadius: 0
                    }]
                  },
                  options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                      legend: { display: false },
                      tooltip: {
                        backgroundColor: 'rgba(24,24,27,0.9)',
                        borderColor: 'rgba(255,255,255,0.08)',
                        borderWidth: 1
                      }
                    },
                    scales: {
                      x: {
                        ticks: { color: '#9ca3af', font: { size: 11 } },
                        grid: { color: 'rgba(255,255,255,0.06)' }
                      },
                      y: {
                        ticks: { color: '#9ca3af', font: { size: 11 } },
                        grid: { color: 'rgba(255,255,255,0.06)' }
                      }
                    }
                  }
                });
                ctx.chartInitialized = true;
              }
            }, 100);
          }
        });
      });
      
      if (window.Chart) {
        setTimeout(() => {
          const ctx = document.getElementById('overviewLine1');
          if (ctx) {
            const lineCtx = ctx.getContext('2d');
            new Chart(lineCtx, {
              type: 'line',
              data: {
                labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
                datasets: [{
                  label: 'Success',
                  data: [320, 410, 380, 520, 610, 560, 680],
                  borderColor: '#8b5cf6',
                  backgroundColor: 'rgba(139,92,246,0.15)',
                  tension: 0.35,
                  fill: true,
                  borderWidth: 2,
                  pointRadius: 0
                }]
              },
              options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: { display: false },
                  tooltip: {
                    backgroundColor: 'rgba(24,24,27,0.9)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    borderWidth: 1
                  }
                },
                scales: {
                  x: {
                    ticks: { color: '#9ca3af', font: { size: 11 } },
                    grid: { color: 'rgba(255,255,255,0.06)' }
                  },
                  y: {
                    ticks: { color: '#9ca3af', font: { size: 11 } },
                    grid: { color: 'rgba(255,255,255,0.06)' }
                  }
                }
              }
            });
            ctx.chartInitialized = true;
          }
        }, 500);
      }
      
      // Intersection Observer for animations
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'floatCardIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards';
          }
        });
      }, { threshold: 0.2 });
      
      stepContents.forEach(content => {
        observer.observe(content);
      });
    })();
        


        (function(section) {
          if (!section) return;

          // Hydrate lucide icons within this section
          if (window.lucide && typeof window.lucide.createIcons === 'function') {
            window.lucide.createIcons({ attrs: { 'stroke-width': 2 } });
          }

          // Accessibility + subtle interactions per card
          const cards = section.querySelectorAll('[data-card="testimonial"]');
          cards.forEach((card) => {
            card.setAttribute('tabindex', '0');
            card.setAttribute('role', 'article');
            card.addEventListener('focus', () => card.classList.add('ring-1', 'ring-white/20'));
            card.addEventListener('blur', () => card.classList.remove('ring-1', 'ring-white/20'));
            card.addEventListener('mousemove', (e) => {
              const r = card.getBoundingClientRect();
              const x = ((e.clientX - r.left) / r.width) * 100;
              const y = ((e.clientY - r.top) / r.height) * 100;
              card.style.backgroundImage = `radial-gradient(120px 120px at ${x}% ${y}%, rgba(244,63,94,0.10), transparent 60%)`;
            });
            card.addEventListener('mouseleave', () => {
              card.style.backgroundImage = '';
            });
          });
        })(document.currentScript.closest('section[data-element-id="aura-emhpci91e70us1px"]'));
      


      const y = document.getElementById("year-span");
      if (y) y.textContent = new Date().getFullYear().toString();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex min-h-screen flex-col bg-gradient-to-b from-[#050509] via-[#050509] to-black relative">

<div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-fuchsia-600/30 via-transparent to-transparent blur-3xl">
</div>

<header className="flex sm:py-6 w-full max-w-6xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 items-center justify-between" style={{backdropFilter: 'blur(20px)', border: '1px solid rgba(139, 92, 246, 0.25)', borderRadius: '20px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 8px 32px, rgba(139, 92, 246, 0.15) 0px 0px 20px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset', padding: '16px 24px', position: 'relative', overflow: 'hidden'}}>
<div className="flex items-center gap-3">

<div className="flex items-center gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-950/90 ring-1 ring-slate-700/80 shadow-lg shadow-fuchsia-500/30">
<div className="h-6 w-6 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 flex items-center justify-center">
<span className="text-[0.65rem] font-semibold tracking-tight text-slate-950">
                  IA
                </span>
</div>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight">
                CMJ Digital Studio
              </span>
<span className="text-xs text-slate-400">
                Portfólio • IA • Growth
              </span>
</div>
</div>
</div>
<nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
<a className="transition hover:text-slate-50" href="#hero">Início</a>
<a className="transition hover:text-slate-50" href="#portfolio">Portfólio</a>
<a className="transition hover:text-slate-50" href="#ia">IA Personalizada</a>
<a className="transition hover:text-slate-50" href="#servicos">Serviços</a>
<a className="transition hover:text-slate-50" href="#contato">Contato</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden rounded-full border border-slate-700/80 px-3 py-1.5 text-xs font-medium text-slate-100/80 shadow-sm shadow-black/40 backdrop-blur-sm hover:border-slate-500/80 hover:text-slate-50 md:inline-flex">
            Ver cases
          </button>
<button className="rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-4 py-1.5 text-xs font-medium text-slate-50 shadow-lg shadow-fuchsia-500/40">
            Fale com um especialista
          </button>
</div>
</header>
<main className="flex-1 [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)]">

<section className="flex flex-col sm:pt-10 lg:flex-row lg:items-center lg:gap-16 w-full max-w-6xl mr-auto ml-auto pt-6 pr-4 pb-20 pl-4 gap-x-10 gap-y-10" id="hero">
<div className="flex-1 space-y-6">
<div className="inline-flex text-xs text-slate-200 bg-white/5 border-fuchsia-500/40 border rounded-full pt-1 pr-3 pb-1 pl-3 shadow-[0_0_40px_rgba(236,72,153,0.35)] backdrop-blur gap-x-2 gap-y-2 items-center">
<span className="inline-flex h-1.5 w-1.5 bg-center w-5 h-5 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ecaf3cc3-752c-47c2-a790-883a13de7ca8_320w.webp)] bg-cover rounded-full"></span><span className="inline-flex h-1.5 w-1.5 bg-center w-5 h-5 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ecaf3cc3-752c-47c2-a790-883a13de7ca8_320w.webp)] bg-cover rounded-full"></span>
<span className="font-medium tracking-wide text-center">
                Gerenciamento de IA Personalizada para Marcas de Alta Performance
              </span>
</div>
<div className="space-y-4">
<h1 className="bg-clip-text sm:text-5xl lg:text-6xl text-4xl font-normal text-transparent tracking-tighter font-poppins text-center bg-gradient-to-br from-slate-50 via-slate-100 to-slate-400">
          A Revolução do Marketing começa com a sua
          <span className="bg-clip-text font-thin italic text-transparent tracking-normal font-playfair bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300">IA Personalizada.</span>
</h1>
<p className="sm:text-lg text-xs text-slate-300 font-montserrat text-center max-w-xl">
          CMJ Digital combina estratégia, performance e agentes de IA sob
          medida para transformar dados em crescimento previsível e
          escalável para o seu negócio.
        </p>
<p className="sm:text-base text-sm font-medium text-slate-400 font-montserrat text-center">
          Start, Engage, Automate, Scale:
          <span className="text-slate-200">
                  A Curva do Sucesso Impulsionada por IA.
                </span>
</p>
</div>

<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:p-4 bg-slate-950/70 border-slate-800/80 border rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-[0_18px_60px_rgba(15,23,42,0.85)] backdrop-blur-lg [--fx-filter:blur(10px)_liquid-glass(0,10)_saturate(1.25)_noise(0.5,1,0)] gap-x-3 gap-y-3">
<div className="flex-1">
<label className="block text-xs font-medium text-slate-400 font-montserrat mb-1" htmlFor="email">
                  Receba um diagnóstico gratuito de IA para o seu funil
                </label>
<div className="flex items-center gap-2 rounded-xl border border-slate-800 bg-black/60 px-3 py-2.5">
<i className="lucide-mail h-4 w-4 text-slate-500" style={{strokeWidth: '1.5'}}></i>
<input className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none" id="email" placeholder="Seu melhor e-mail de trabalho" type="email"/>
</div>
</div>
<button className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-4 py-2.5 text-sm font-semibold tracking-tight text-slate-50 shadow-[0_18px_60px_rgba(59,130,246,0.65)] transition hover:brightness-110 sm:mt-5 sm:w-auto">
                Fale com um Especialista IA
                <i className="lucide-arrow-right h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</button>
</div>

<div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
<div className="flex items-center gap-2 text-slate-400">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
<i className="lucide-badge-check h-3 w-3" style={{strokeWidth: '1.5'}}></i>
</span>
<span className="">Operações orquestradas por IA em tempo real</span>
</div>
<div className="flex items-center gap-2 text-slate-400">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-500/10 text-sky-300">
<i className="lucide-shield h-3 w-3" style={{strokeWidth: '1.5'}}></i>
</span>
<span className="">Dados e privacidade em nível corporativo</span>
</div>
</div>
</div>

<div className="mt-8 flex flex-1 flex-col gap-6 lg:mt-0 lg:items-stretch">
<section className="sm:px-8 sm:mt-14 animate-scale-in delay-400 max-w-7xl mt-10 mr-auto ml-auto pr-6 pl-6">
<div className="sm:w-[420px] transform transition-all duration-700 hover:scale-105 hover:shadow-[0_40px_80px_-15px_rgba(139,92,246,0.4)] bg-white/10 w-full ring-white/20 ring-1 rounded-2xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 drop-shadow-xl backdrop-blur-none">
<div className="flex items-center justify-between">
<p className="text-[11px] uppercase tracking-[0.2em] text-zinc-400">Growth &amp; Efficiency Driven by AI
            </p>
<span className="text-[10px] text-zinc-500">Score</span>
</div>
<div className="mt-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/[0.08] backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center shrink-0">
<svg className="w-4 h-4 text-zinc-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z">
</path>
<path d="M20 2v4"></path>
<path d="M22 4h-4"></path>
<circle cx="4" cy="20" r="2"></circle>
</svg>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="text-[12px] text-zinc-300">Marketing &amp; ads</span>
<span className="text-[11px] text-zinc-400">84%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-2 rounded-full" style={{width: '84%'}}></div>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-cyan-500/10 backdrop-blur-sm ring-1 ring-cyan-400/30 flex items-center justify-center shrink-0">
<svg className="w-4 h-4 text-cyan-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 8V4H8"></path>
<rect height="12" rx="2" width="16" x="4" y="8"></rect>
<path d="M2 14h2"></path>
<path d="M20 14h2"></path>
<path d="M15 13v2"></path>
<path d="M9 13v2"></path>
</svg>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="text-[12px] text-zinc-300">AI Automation</span>
<span className="text-[11px] text-zinc-400">94%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2 rounded-full" style={{width: '94%'}}>
</div>
</div>
</div>
</div>
<div className="mt-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-lg bg-white/[0.08] backdrop-blur-sm ring-1 ring-white/20 flex items-center justify-center shrink-0">
<svg className="w-4 h-4 text-zinc-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="12" rx="2" width="20" x="2" y="6"></rect>
<circle cx="12" cy="12" r="2"></circle>
<path d="M6 12h.01M18 12h.01"></path>
</svg>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between">
<span className="text-[12px] text-zinc-300">Money &amp; Finance</span>
<span className="text-[11px] text-zinc-400">88%</span>
</div>
<div className="mt-1 h-2 rounded-full bg-white/10 overflow-hidden">
<div className="h-2 rounded-full bg-zinc-300/80" style={{width: '88%'}}></div>
</div>
</div>
</div>
<div className="mt-3 border-t border-white/10 pt-3">
<div className="flex items-center justify-between text-[11px] text-zinc-500">
<span className="">Last updated</span>
<span className="">Just now</span>
</div>
</div>
</div>
<style>
          .step-button {
            position: relative;
          }

          .step-button.active {
            background: linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(34, 211, 238, 0.15));
            border-color: rgba(139, 92, 246, 0.5);
            color: rgba(255, 255, 255, 0.9);
          }

          .step-button.active::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 50%;
            transform: translateX(-50%);
            width: 60%;
            height: 2px;
            background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 1), transparent);
            box-shadow: 0 0 12px rgba(139, 92, 246, 0.8);
          }

          .step-content {
            display: none;
            opacity: 0;
            transform: scale(0.95);
            transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .step-content.active {
            display: block;
            opacity: 1;
            transform: scale(1);
          }

          .text-content {
            display: none;
            opacity: 0;
            transform: translateX(30px);
            transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, transform 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.1s;
          }

          .text-content.active {
            display: block;
            opacity: 1;
            transform: translateX(0);
          }

          /* Intersection Observer Animation */
          .step-content.active>div>div:first-child {
            animation: floatCardIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }

          @keyframes floatCardIn {
            0% {
              opacity: 0;
              transform: translateY(50px);
            }

            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        </style>

</section></div></section>

<section className="sm:pb-24 w-full max-w-6xl mr-auto ml-auto pr-4 pb-20 pl-4 relative" id="portfolio">
<div className="pointer-events-none absolute inset-x-0 top-10 -z-10 h-80 bg-gradient-to-b from-indigo-600/20 via-fuchsia-600/20 to-transparent blur-3xl" style={{}}>
</div>
<div className="flex flex-col lg:flex-row lg:p-8 bg-slate-950/40 mix-blend-normal ring-slate-900/80 ring-1 rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-[rgba(0,_0,_0,_0.17)_0px_-23px_25px_0px_inset,_rgba(0,_0,_0,_0.15)_0px_-36px_30px_0px_inset,_rgba(0,_0,_0,_0.1)_0px_-79px_40px_0px_inset,_rgba(0,_0,_0,_0.06)_0px_2px_1px,_rgba(0,_0,_0,_0.09)_0px_4px_2px,_rgba(0,_0,_0,_0.09)_0px_8px_4px,_rgba(0,_0,_0,_0.09)_0px_16px_8px,_rgba(0,_0,_0,_0.09)_0px_32px_16px] blur-none backdrop-blur-xl gap-x-10 gap-y-10 items-start">

<div className="flex-1 space-y-6">
<div className="space-y-3">
<h2 className="sm:text-3xl text-3xl font-normal text-slate-50 tracking-tighter font-poppins">
            Diversos setores sendo transformados com IA.
          </h2>
<p className="text-base text-slate-300 sm:text-lg">
            Veja como aplicamos agentes inteligentes em diferentes
            segmentos, conectando atendimento, vendas e operações em um
            único fluxo de experiência.
          </p>
</div>
<div className="space-y-3">

<div className="rounded-2xl bg-slate-950/80 p-4 ring-1 ring-fuchsia-500/60">
<button className="flex text-center w-full items-center justify-between" type="button">
<div className="flex items-center gap-2">
<i className="lucide-chevron-down h-4 w-4 text-fuchsia-300" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-semibold tracking-tight text-fuchsia-300">
                        Saúde
                      </span>
</div>
<span className="rounded-full bg-fuchsia-500/15 px-2 py-0.5 text-[0.7rem] text-fuchsia-100">
                      Case em destaque
                    </span>
</button>
<p className="text-sm text-slate-200 mt-3">
              Agentes IA realizam a triagem inicial de pacientes com base
              nos sintomas, direcionando-os aos especialistas corretos,
              além de gerenciar agendamentos e esclarecer dúvidas
              frequentes via WhatsApp e chat web.
            </p>
</div>

<button className="flex w-full items-center justify-between rounded-2xl bg-transparent p-3 text-left transition hover:bg-slate-900/60" type="button">
<div className="flex items-center gap-2">
<i className="lucide-chevron-right h-4 w-4 text-violet-300" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-semibold tracking-tight text-violet-200">
                      Educação
                    </span>
</div>
<span className="text-[0.7rem] text-slate-400">
                    Matrículas e relacionamento
                  </span>
</button>
<button className="flex w-full items-center justify-between rounded-2xl bg-transparent p-3 text-left transition hover:bg-slate-900/60" type="button">
<div className="flex items-center gap-2">
<i className="lucide-chevron-right h-4 w-4 text-violet-300" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-semibold tracking-tight text-violet-200">
                      Infoproduto e SaaS
                    </span>
</div>
<span className="text-[0.7rem] text-slate-400">
                    Lançamentos e nutrição
                  </span>
</button>
<button className="flex w-full items-center justify-between rounded-2xl bg-transparent p-3 text-left transition hover:bg-slate-900/60" type="button">
<div className="flex items-center gap-2">
<i className="lucide-chevron-right h-4 w-4 text-violet-300" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-semibold tracking-tight text-violet-200">
                      Times de vendas
                    </span>
</div>
<span className="text-[0.7rem] text-slate-400">
                    Pré-venda e follow-up
                  </span>
</button>
<button className="flex w-full items-center justify-between rounded-2xl bg-transparent p-3 text-left transition hover:bg-slate-900/60" type="button">
<div className="flex items-center gap-2">
<i className="lucide-chevron-right h-4 w-4 text-violet-300" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-semibold tracking-tight text-violet-200">
                      Suporte ao cliente
                    </span>
</div>
<span className="text-[0.7rem] text-slate-400">
                    FAQ, tickets e CS
                  </span>
</button>
<button className="flex transition hover:bg-slate-900/60 text-left bg-transparent w-full rounded-2xl pt-3 pr-3 pb-3 pl-3 shadow-[0_4px_6px_rgba(0,_0,_0,_0.049),_0_9.6px_7.6px_rgba(0,_0,_0,_0.069),_0_18px_14.3px_rgba(0,_0,_0,_0.086),_0_32px_25.6px_rgba(0,_0,_0,_0.103),_0_60px_47.8px_rgba(0,_0,_0,_0.123),_0_143px_114.3px_rgba(0,_0,_0,_0.172)] items-center justify-between" type="button">
<div className="flex items-center gap-2">
<i className="lucide-chevron-right h-4 w-4 text-violet-300" style={{strokeWidth: '1.5'}}></i>
<span className="text-sm font-semibold tracking-tight text-violet-200">
                      Mercado Imobiliário
                    </span>
</div>
<span className="text-[0.7rem] text-slate-400">
                    Leads e tours virtuais
                  </span>
</button>
</div>
</div>

<div className="flex-1 mr-20 ml-20 pt-20 pr-20 pb-20 pl-20 gap-x-10 gap-y-10" style={{maskImage: 'linear-gradient(180deg, transparent, black 50%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 50%, black 100%, transparent)'}}>
<div className="flex bg-slate-950/90 max-w-sm rounded-[2rem] ring-slate-800/80 ring-1 mr-auto ml-auto pt-10 pb-80 relative top-5 shadow-[0_40px_100px_rgba(15,23,42,0.9)] items-center justify-center" style={{}}>
<div className="relative h-full w-full rounded-[1.6rem] bg-slate-100" style={{}}>
<div className="absolute inset-[0.35rem] rounded-[1.25rem] bg-white shadow-inner" style={{}}>

<div className="flex items-center justify-between px-3 pt-2 text-[0.65rem] text-slate-500">
<span className="inline-flex items-center justify-center rounded-full bg-red-500 text-[0.65rem] font-medium tracking-tight text-white px-2">
                        15:04
                      </span>
<div className="flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-slate-400"></span>
<span className="h-1.5 w-4 rounded-full bg-slate-400"></span>
<span className="h-2 w-3 rounded-sm bg-slate-600"></span>
</div>
</div>

<div className="flex border-slate-200 border-b mt-2 pr-3 pb-2 pl-3 items-center justify-between">
<div className="flex items-center gap-2">
<i className="lucide-chevron-left h-3.5 w-3.5 text-indigo-500" style={{strokeWidth: '1.5'}}></i>
<div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/10">
<span className="h-4 w-4 rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-400"></span>
</div>
<span className="text-[0.7rem] font-medium text-neutral-50 tracking-tight">CMJ Health agent</span>
</div>
<span className="text-[0.65rem] text-emerald-500">
                        Online
                      </span>
</div>

<div className="text-[0.7rem] pt-3 pr-3 pb-3 pl-3 space-y-2">
<div className="flex justify-center">
<span className="rounded-full bg-slate-100 px-2 py-0.5 text-[0.6rem] text-slate-500">
                          Hoje
                        </span>
</div>
<div className="flex justify-start">
<div className="text-slate-800 tracking-normal bg-emerald-50 max-w-[80%] border-8 rounded-2xl pt-2 pr-3 pb-2 pl-3">
                    Esta clínica utiliza um assistente virtual para
                    orientar seu atendimento. Toque aqui para saber mais.
                  </div>
</div>
<div className="flex justify-end">
<div className="max-w-[80%] rounded-2xl rounded-br-sm bg-indigo-500/90 px-3 py-2 text-slate-50">
                    Gostaria de mais informações sobre consultas de
                    cardiologia ainda esta semana.
                  </div>
</div>
<div className="flex justify-start">
<div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-emerald-500/90 px-3 py-2 text-slate-50">
                    Posso ajudar com isso. Qual horário é melhor para
                    você? Também posso enviar orientações pré-consulta.
                  </div>
</div>
</div>

<div className="mt-2 flex items-center gap-2 border-t border-slate-200 px-3 py-2">
<div className="flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1.5 flex-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-[0.7rem] text-slate-400">
                          Digite sua mensagem...
                        </span>
</div>
<button className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-indigo-500 text-slate-50"></button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:pb-28 w-full max-w-6xl mr-auto ml-auto pr-4 pb-20 pl-4 relative" id="ia">

<div className="pointer-events-none absolute inset-x-0 top-16 -z-10 h-72 bg-gradient-to-b from-fuchsia-600/30 via-violet-600/20 to-transparent blur-3xl">
</div>
<div className="text-center space-y-4">
<span className="inline-flex items-center rounded-full border border-fuchsia-500/40 bg-fuchsia-500/10 px-3 py-1 text-[0.7rem] text-fuchsia-100 shadow-[0_18px_60px_rgba(192,38,211,0.7)] backdrop-blur">
              Gerenciamento de IA Personalizada
            </span>
<h2 className="bg-clip-text sm:text-6xl text-3xl italic text-transparent tracking-tight font-playfair bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300">
        O Futuro é Agora: Agentes de IA Personalizados para sua Marca
      </h2>
<p className="sm:text-lg text-base text-slate-300 font-poppins max-w-2xl mr-auto ml-auto">
        Desenhamos uma malha de agentes inteligentes para atendimento,
        vendas e conteúdo que conversam entre si, aprendem com seus dados
        e executam tarefas críticas 24/7 para o seu negócio.
      </p>
</div>

<div className="mt-10 grid gap-6 md:grid-cols-3">

<div className="relative overflow-hidden rounded-3xl border border-slate-800/90 bg-gradient-to-b from-slate-900/80 via-slate-950 to-black p-4 shadow-[0_26px_70px_rgba(15,23,42,0.95)] backdrop-blur-xl">
<div className="pointer-events-none absolute -inset-x-10 -top-24 h-40 bg-gradient-to-b from-cyan-500/20 via-transparent to-transparent blur-3xl">
</div>
<div className="relative flex items-center justify-between gap-3">
<div className="">
<p className="text-xs font-semibold tracking-tight text-slate-100">
              Agente de Atendimento
            </p>
<p className="text-[0.7rem] text-slate-400">
              Conversas naturais, respostas em segundos.
            </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/15 px-2 py-1 text-[0.65rem] text-cyan-200">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
          Online 24/7
          </span>
</div>

<div className="relative mt-4 space-y-2 rounded-2xl border border-slate-800 bg-black/60 p-3 text-xs shadow-inner shadow-black/80">
<div className="mb-2 flex items-center justify-between text-[0.65rem]">
<div className="flex items-center gap-1.5 text-slate-300">
<span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-[0.6rem] text-black">
                      IA
                    </span>
<span className="font-medium tracking-tight">
                      CMJ Support
                    </span>
</div>
<div className="flex items-center gap-1 text-slate-500">
<span className="h-1 w-1 rounded-full bg-emerald-400"></span>
<span>Respondendo...</span>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-start">
<div className="max-w-[80%] rounded-2xl rounded-bl-sm bg-slate-900/80 px-3 py-2 text-[0.7rem] text-slate-200">
                Como podemos escalar nosso atendimento sem aumentar o
                time?
              </div>
</div>
<div className="flex justify-end">
<div className="max-w-[80%] rounded-2xl rounded-br-sm bg-gradient-to-r from-fuchsia-500/90 to-cyan-400/90 px-3 py-2 text-[0.7rem] text-slate-50 shadow-[0_12px_40px_rgba(59,130,246,0.6)]">
                Treinando um agente na sua base de conhecimento, CRM e
                histórico de tickets. Posso sugerir um fluxo em 3
                etapas?
              </div>
</div>
<div className="flex justify-end">
<div className="inline-flex items-center gap-1 rounded-full bg-slate-900/70 px-2 py-1 text-[0.6rem] text-slate-300">
<i className="lucide-sparkles h-3 w-3" style={{strokeWidth: '1.5'}}></i>
                Intenção reconhecida: Suporte &amp; Scale
              </div>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-3xl border border-slate-800/90 bg-gradient-to-b from-slate-900/80 via-slate-950 to-black p-4 shadow-[0_26px_70px_rgba(15,23,42,0.95)] backdrop-blur-xl">
<div className="pointer-events-none absolute inset-x-0 -top-24 h-44 bg-gradient-to-b from-fuchsia-500/25 via-transparent to-transparent blur-3xl">
</div>
<div className="relative flex items-center justify-between gap-3">
<div className="">
<p className="text-xs font-semibold tracking-tight text-slate-100">
              Agente de Vendas (CRM)
            </p>
<p className="text-[0.7rem] text-slate-400">
              Pipeline priorizado por probabilidade de fechamento.
            </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-fuchsia-500/15 px-2 py-1 text-[0.65rem] text-fuchsia-100">
<i className="lucide-trending-up h-3 w-3" style={{strokeWidth: '1.5'}}></i>
                  Forecast IA
                </span>
</div>

<div className="relative mt-4 space-y-3 text-xs">
<div className="grid grid-cols-2 gap-3 rounded-2xl border border-slate-800 bg-black/60 p-3 shadow-inner shadow-black/80">
<div>
<p className="text-[0.65rem] text-slate-400">VGV projetado</p>
<p className="mt-1 text-base font-semibold tracking-tight text-slate-100">
                R$ 1.280.000
              </p>
<p className="mt-1 text-[0.65rem] text-emerald-400">
                +24% vs último ciclo
              </p>
</div>
<div className="">
<p className="text-[0.65rem] text-slate-400">
                Taxa de conversão
              </p>
<p className="mt-1 text-base font-semibold tracking-tight text-slate-100">
                18,4%
              </p>
<div className="mt-1 inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[0.65rem] text-emerald-300">
<i className="lucide-arrow-up-right h-3 w-3" style={{strokeWidth: '1.5'}}></i>
                +3,2 pts
              </div>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3 shadow-inner shadow-black/80">
<div className="mb-2 flex items-center justify-between text-[0.65rem]">
<span className="text-slate-400">Leads prontos para ação</span>
<span className="text-slate-500">Próximas 24h</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between rounded-xl bg-black/70 px-3 py-2">
<div className="flex flex-col">
<span className="text-[0.7rem] font-medium tracking-tight text-slate-100">Segmento SaaS • Demo agendada</span>
<span className="text-[0.65rem] text-slate-400">
                          Prob. fechamento:
                          <span className="text-emerald-400">82%</span>
</span>
</div>
<span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[0.65rem] text-emerald-300">
                        Prioridade A
                      </span>
</div>
<div className="flex items-center justify-between rounded-xl bg-black/60 px-3 py-2">
<div className="flex flex-col">
<span className="text-[0.7rem] font-medium tracking-tight text-slate-100">E-commerce Premium • Follow-up</span>
<span className="text-[0.65rem] text-slate-400">
                          Ação sugerida:
                          <span className="text-sky-400">WhatsApp + oferta</span>
</span>
</div>
<i className="lucide-sparkles h-3.5 w-3.5 text-fuchsia-300" style={{strokeWidth: '1.5'}}></i>
</div>
</div>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-3xl border border-slate-800/90 bg-gradient-to-b from-slate-900/80 via-slate-950 to-black p-4 shadow-[0_26px_70px_rgba(15,23,42,0.95)] backdrop-blur-xl">
<div className="pointer-events-none absolute inset-x-0 -top-24 h-44 bg-gradient-to-b from-cyan-400/25 via-transparent to-transparent blur-3xl">
</div>
<div className="relative flex items-center justify-between gap-3">
<div className="">
<p className="text-xs font-semibold tracking-tight text-slate-100">
              Agente de Conteúdo &amp; SEO
            </p>
<p className="text-[0.7rem] text-slate-400">
              Páginas, posts e scripts otimizados por IA.
            </p>
</div>
<span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/15 px-2 py-1 text-[0.65rem] text-cyan-100">
<i className="lucide-wand-2 h-3 w-3" style={{strokeWidth: '1.5'}}></i>
                  Auto-brief
                </span>
</div>
<div className="relative mt-4 space-y-3 text-xs">

<div className="rounded-2xl border border-slate-800 bg-black/60 p-3 shadow-inner shadow-black/80">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-[0.6rem] text-black">
<i className="lucide-pen-square h-3 w-3" style={{strokeWidth: '1.5'}}></i>
</span>
<div className="flex flex-col">
<span className="text-[0.7rem] font-medium tracking-tight text-slate-100">Brief SEO para Blog</span>
<span className="text-[0.65rem] text-slate-400">
                          Palavra-chave: IA no Marketing Imobiliário
                        </span>
</div>
</div>
<span className="text-[0.65rem] text-emerald-400">
                      Score 92/100
                    </span>
</div>
<div className="mt-3 grid gap-2 text-[0.65rem]">
<div className="flex items-center justify-between">
<span className="text-slate-400">Intenção</span>
<span className="text-slate-200">Lead qualificado</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400">Estrutura</span>
<span className="text-slate-200">
                        H1 + 4 H2 + FAQ Schema
                      </span>
</div>
<div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
<div className="h-full w-11/12 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400">
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-3 shadow-inner shadow-black/80">
<div className="mb-2 flex items-center justify-between">
<span className="text-[0.65rem] text-slate-400">
                      Calendário de Conteúdo
                    </span>
<span className="text-[0.65rem] text-slate-500">
                      Próximos 7 dias
                    </span>
</div>
<div className="space-y-1.5 text-[0.7rem]">
<div className="flex items-center justify-between rounded-xl bg-black/70 px-2.5 py-1.5">
<span className="text-slate-200">
                        Carrossel Instagram • Funis com IA
                      </span>
<span className="text-[0.65rem] text-sky-600">
                        Otim. Engajamento
                      </span>
</div>
<div className="flex items-center justify-between rounded-xl bg-black/60 px-2.5 py-1.5">
<span className="text-slate-200">
                        Landing Page • Lançamento SaaS
                      </span>
<span className="text-[0.65rem] text-fuchsia-300">
                        Otim. Conversão
                      </span>
</div>
<div className="flex items-center gap-2 rounded-xl border border-dashed border-slate-700/80 bg-black/40 px-2.5 py-1.5 text-slate-400">
<i className="lucide-plus h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
                Gerar mais 10 ideias alinhadas ao funil
              </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="sm:pb-24 w-full max-w-6xl mr-auto ml-auto pr-4 pb-24 pl-4" id="servicos">
<div className="text-center space-y-4">
<span className="inline-flex items-center rounded-full border border-slate-800 bg-slate-950/80 px-3 py-1 text-[0.7rem] text-slate-300">
              Outros Serviços
            </span>
<h2 className="sm:text-4xl text-3xl font-semibold text-slate-50 tracking-tight">
        Um ecossistema completo de growth orientado por IA.
      </h2>
<p className="mx-auto max-w-2xl text-base text-slate-300 sm:text-lg">
        Conectamos mídia, conteúdo, funis e tecnologia em uma mesma visão
        de dados, garantindo decisões rápidas e crescimento consistente.
      </p>
</div>
<div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

<div className="group flex flex-col bg-gradient-to-b from-slate-950 via-slate-950/90 to-black border-slate-800 border rounded-3xl pt-4 pr-4 pb-4 pl-4 relative shadow-[0_20px_60px_rgba(15,23,42,0.9)] backdrop-blur">
<div className="mb-4 flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-500 via-violet-500 to-cyan-400 text-slate-50 shadow-[0_10px_30px_rgba(129,140,248,0.7)] group-hover:scale-105 transition">
<i className="lucide-instagram h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-100">Gestão de Redes Sociais</span>
<span className="text-[0.65rem] text-slate-400">
                    Conteúdo e comunidade
                  </span>
</div>
</div>
<p className="text-sm text-slate-300">
          Planejamento, criação e performance em um fluxo contínuo para
          transformar seguidores em clientes e defensores da marca.
        </p>
<div className="mt-3 flex items-center gap-2 text-[0.7rem]">
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-slate-400">
                  Calendário dinâmico
                </span>
</div>
</div>

<div className="group relative flex flex-col rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950/90 to-black p-4 shadow-[0_20px_60px_rgba(15,23,42,0.9)] backdrop-blur">
<div className="mb-4 flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-orange-500 to-rose-500 text-slate-950 shadow-[0_10px_30px_rgba(249,115,22,0.8)] group-hover:scale-105 transition">
<i className="lucide-target h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-100">Tráfego Pago</span>
<span className="text-[0.65rem] text-slate-400">
                    ROI e Otimização
                  </span>
</div>
</div>
<p className="text-sm text-slate-300">
          Estruturação de campanhas, testes A/B e algoritmos de bidding
          treinados para maximizar retorno por canal.
        </p>
<div className="mt-3 flex items-center gap-2 text-[0.7rem]">
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-emerald-300">
                  ROAS incremental
                </span>
</div>
</div>

<div className="group relative flex flex-col rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950/90 to-black p-4 shadow-[0_20px_60px_rgba(15,23,42,0.9)] backdrop-blur">
<div className="mb-4 flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-400 via-sky-400 to-cyan-400 text-slate-950 shadow-[0_10px_30px_rgba(56,189,248,0.8)] group-hover:scale-105 transition">
<i className="lucide-globe-2 h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-100">SEO e Criação de Websites</span>
<span className="text-[0.65rem] text-slate-400">
                    Performance e velocidade
                  </span>
</div>
</div>
<p className="text-sm text-slate-300">
          Arquitetura técnica, conteúdo otimizado e experiências rápidas
          em qualquer dispositivo, focadas em conversão.
        </p>
<div className="mt-3 flex items-center gap-2 text-[0.7rem]">
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-sky-300">
                  Core Web Vitals
                </span>
</div>
</div>

<div className="group relative flex flex-col rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-950 via-slate-950/90 to-black p-4 shadow-[0_20px_60px_rgba(15,23,42,0.9)] backdrop-blur">
<div className="mb-4 flex items-center gap-3">
<div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-500 via-rose-500 to-orange-400 text-slate-50 shadow-[0_10px_30px_rgba(236,72,153,0.8)] group-hover:scale-105 transition">
<i className="lucide-funnel h-4 w-4" style={{strokeWidth: '1.5'}}></i>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-100">Criação de Funis de Vendas</span>
<span className="text-[0.65rem] text-slate-400">
                    Automação e conversão
                  </span>
</div>
</div>
<p className="text-sm text-slate-300">
          Funis multi-etapas integrados a CRM, automações e agentes de IA
          que acompanham o lead até a assinatura.
        </p>
<div className="mt-3 flex items-center gap-2 text-[0.7rem]">
<span className="rounded-full bg-slate-900/90 px-2 py-0.5 text-fuchsia-300">
                  Nutrição inteligente
                </span>
</div>
</div>
</div>
</section><section className="sm:py-24 pt-16 pb-16 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center mb-12 in-view" data-scroll-animate-children="">
<span className="text-sm font-medium text-rose-400" style={{opacity: '1', transform: 'translateY(0px)'}}>Testimonials</span>
<h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight" style={{opacity: '1', transform: 'translateY(0px)'}}>
            Real stories from teams who transformed their analytics.
          </h2>
<div className="mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5 border-white/10 bg-white/5" style={{opacity: '1', transform: 'translateY(0px)'}}>
<span className="inline-flex items-center -space-x-2">
<img alt="Reviewer 1" className="w-6 h-6 object-cover ring-neutral-900 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/11f35e13-4c7b-438c-b1cc-8f7b6e822e1b_320w.webp"/>
<img alt="Reviewer 2" className="w-6 h-6 object-cover ring-neutral-900 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c97346f-367a-4525-88c9-983c427260ae_320w.webp"/>
<img alt="Reviewer 3" className="w-6 h-6 object-cover ring-neutral-900 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2ea4b3ee-c3f5-4111-8dde-ef8bea1bc03a_320w.webp"/>
<img alt="Reviewer 4" className="w-6 h-6 object-cover rounded-full ring-neutral-900 ring-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58d960c3-f652-497d-9e25-a9bc4d765213_320w.webp"/>
</span>
<span className="ml-2 inline-flex items-center gap-1 text-sm text-neutral-300">
<svg className="lucide lucide-star w-4 h-4 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star w-4 h-4 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg className="lucide lucide-star-half w-4 h-4 text-amber-300" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"></path></svg>
<span className="ml-1">4.9/5 • 2,431 reviews</span>
</span>
</div>
</div>
<style>
          @keyframes scrollUp {
            0% { transform: translateY(0); }
            100% { transform: translateY(-33.33%); }
          }

          @keyframes scrollDown {
            0% { transform: translateY(-33.33%); }
            100% { transform: translateY(0); }
          }

          [data-scroll-column="1"] {
            animation: scrollUp 20s linear infinite;
          }

          [data-scroll-column="2"] {
            animation: scrollDown 20s linear infinite;
          }

          [data-scroll-column="3"] {
            animation: scrollUp 20s linear infinite;
          }

          [data-scroll-column]:hover {
            animation-play-state: paused;
          }
        </style>
<div className="grid grid-cols-1 overflow-hidden md:grid-cols-3 pt-12 pb-12 gap-x-6 gap-y-6" style={{maskImage: 'linear-gradient(180deg, transparent, black 45%, black 45%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 45%, black 45%, transparent)'}}>

<div className="overflow-hidden">
<div className="space-y-6" data-scroll-column="1">
<article className="bg-neutral-900/70 border-white/10 border rounded-2xl pt-6 pr-6 pb-6 pl-6" data-card="testimonial">
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "The instant setup let our team start tracking KPIs in
                    minutes, not days. It changed how we plan every sprint."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Aisha Green" className="w-10 h-10 object-cover ring-white/10 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/43fc57bc-1266-44cf-a579-3f8ec64d4431_320w.webp"/>
<div className="">
<div className="text-sm font-medium">Aisha Green</div>
<div className="text-xs text-neutral-400">
                      Head of Business Intelligence
                    </div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial">
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Reporting is effortless now. Our team shares concise
                    insights in seconds—no confusion, no wasted time."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Priya Patel" className="w-10 h-10 object-cover ring-white/10 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8a90d32f-809f-4383-b71f-6a9c50621b69_320w.jpg"/>
<div className="">
<div className="text-sm font-medium">Priya Patel</div>
<div className="text-xs text-neutral-400">
                      Marketing Director
                    </div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial">
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "From trial to rollout took under a week. Dashboards finally
                    match how our teams actually work."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Jonas Weber" className="w-10 h-10 object-cover ring-white/10 ring-2 rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4ee565a-2084-483b-8358-9fc06da5ee99_320w.jpg"/>
<div className="">
<div className="text-sm font-medium">Jonas Weber</div>
<div className="text-xs text-neutral-400">Operations Lead</div>
</div>
</div>
</article>

<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial">
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "The instant setup let our team start tracking KPIs in
                    minutes, not days. It changed how we plan every sprint."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Aisha Green" className="w-10 h-10 object-cover rounded-full ring-white/10 ring-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f19d9627-4570-4c87-b42e-f42bc9d1bc31_320w.jpg"/>
<div className="">
<div className="text-sm font-medium">Aisha Green</div>
<div className="text-xs text-neutral-400">
                      Head of Business Intelligence
                    </div>
</div>
</div>
</article>
</div>
</div>

<div className="overflow-hidden">
<div className="space-y-6" data-scroll-column="2">
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial">
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Clear, trustworthy reports across the org—security
                    included. We cut weekly review time by 62%."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Michael Chen" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f804111a-fe24-4660-b754-0f3654213f91_320w.jpg" style={{}}/>
<div className="">
<div className="text-sm font-medium">Michael Chen</div>
<div className="text-xs text-neutral-400">IT Security Lead</div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial">
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Integrations were seamless. No extra IT tickets, and we
                    saved 120+ hours in the first quarter."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Rachel Adams" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/decdab76-d615-4089-a761-525ee4dc4a0f_320w.webp" style={{}}/>
<div className="">
<div className="text-sm font-medium">Rachel Adams</div>
<div className="text-xs text-neutral-400">Product Manager</div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial">
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Support is outstanding. Every question had a thoughtful
                    answer within minutes."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Liam O'Connor" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17d18233-806b-40ae-aeda-9251f822ee0a_320w.webp"/>
<div className="">
<div className="text-sm font-medium">Liam O'Connor</div>
<div className="text-xs text-neutral-400">
                      Customer Success Manager
                    </div>
</div>
</div>
</article>

<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial">
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Clear, trustworthy reports across the org—security
                    included. We cut weekly review time by 62%."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Michael Chen" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f4bda977-4e02-4ce3-b6d3-1f8a5d3197db_320w.jpg" style={{}}/>
<div className="">
<div className="text-sm font-medium">Michael Chen</div>
<div className="text-xs text-neutral-400">IT Security Lead</div>
</div>
</div>
</article>
</div>
</div>

<div className="overflow-hidden">
<div className="space-y-6" data-scroll-column="3">
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial">
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Switching platforms was our best decision this
                    year—intuitive, secure, and measurable results."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Carlos Rivera" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/05c24471-1ab5-4e25-ab8c-e6fd10e1f913_320w.jpg" style={{}}/>
<div className="">
<div className="text-sm font-medium">Carlos Rivera</div>
<div className="text-xs text-neutral-400">CEO</div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial">
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Transparency removed all doubt. We always know where
                    metrics stand and what to do next."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Sofia Martinez" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7f5162d4-7171-4641-9041-6611d52f432e_320w.webp" style={{}}/>
<div className="">
<div className="text-sm font-medium">Sofia Martinez</div>
<div className="text-xs text-neutral-400">Analytics Lead</div>
</div>
</div>
</article>
<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial">
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Predictive models helped us spot trends early and act
                    faster. It's like a compass for growth."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Noah Bennett" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1080949-1bf1-41d5-b2fb-6ff27d985c7d_320w.jpg" style={{}}/>
<div className="">
<div className="text-sm font-medium">Noah Bennett</div>
<div className="text-xs text-neutral-400">
                      Strategy Director
                    </div>
</div>
</div>
</article>

<article className="rounded-2xl border p-6 border-white/10 bg-neutral-900/70" data-card="testimonial">
<blockquote className="text-[16px] sm:text-[18px] text-neutral-100">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-quote w-4 h-4 text-neutral-400" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
                    "Switching platforms was our best decision this
                    year—intuitive, secure, and measurable results."
                  </span>
</blockquote>
<div className="mt-5 flex items-center gap-3">
<img alt="Carlos Rivera" className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/58013d7d-eac3-419f-81c0-aaf209ded685_320w.webp" style={{}}/>
<div className="">
<div className="text-sm font-medium">Carlos Rivera</div>
<div className="text-xs text-neutral-400">CEO</div>
</div>
</div>
</article>
</div>
</div>
</div>
</div>



</section>
</main>

<footer className="bg-black/95 border-slate-900 border-t" id="contato" style={{}}>
<div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10 md:flex-row md:justify-between">
<div className="max-w-sm space-y-4">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 via-violet-500 to-cyan-400 shadow-lg shadow-fuchsia-500/40">
<span className="text-xs font-semibold tracking-tight">CMJ</span>
</div>
<span className="text-sm font-semibold tracking-tight text-slate-100">CMJ Digital</span>
</div>
<p className="text-sm text-slate-400">
          Estratégia, criatividade e agentes de IA personalizados para
          acelerar o crescimento da sua marca com previsibilidade.
        </p>
<p className="text-xs text-slate-500">
          Tech Stack: React • TypeScript • UI de última geração.
        </p>
</div>
<div className="grid flex-1 gap-8 text-xs text-slate-300 sm:grid-cols-3 md:max-w-3xl">
<div className="">
<h3 className="mb-3 text-sm font-semibold tracking-tight text-slate-100">
            Navegação Rápida
          </h3>
<ul className="space-y-1.5">
<li className=""><a className="hover:text-slate-50" href="#hero">Início</a></li>
<li><a className="hover:text-slate-50" href="#portfolio">Portfólio</a></li>
<li className=""><a className="hover:text-slate-50" href="#ia">IA Personalizada</a></li>
<li className=""><a className="hover:text-slate-50" href="#servicos">Serviços</a></li>
</ul>
</div>
<div className="">
<h3 className="mb-3 text-sm font-semibold tracking-tight text-slate-100">
            Contato
          </h3>
<ul className="space-y-1.5">
<li>
<span className="text-slate-400">E-mail</span>
<a className="text-slate-200 hover:text-slate-50" href="mailto:oi@cmjdigital.com">oi@cmjdigital.com</a>
</li>
<li className="">
<span className="text-slate-400">WhatsApp</span>
<a className="hover:text-slate-50 text-slate-200" href="#">
                +55 (11) 99999-9999
              </a>
</li>
</ul>
</div>
<div>
<h3 className="mb-3 text-sm font-semibold tracking-tight text-slate-100">
            Social
          </h3>
<div className="flex flex-wrap gap-2">
<a className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-[0.7rem] text-slate-300 hover:border-slate-600" href="#">
<i className="lucide-linkedin h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
              LinkedIn
            </a>
<a className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-[0.7rem] text-slate-300 hover:border-slate-600" href="#">
<i className="lucide-instagram h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
              Instagram
            </a>
<a className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-[0.7rem] text-slate-300 hover:border-slate-600" href="#">
<i className="lucide-youtube h-3.5 w-3.5" style={{strokeWidth: '1.5'}}></i>
              YouTube
            </a>
</div>
</div>
</div>
</div>
<div className="text-[0.7rem] text-slate-500 text-center bg-black/95 border-slate-900/80 border-t pt-4 pr-4 pb-4 pl-4">
      ©
      <span id="year-span">2025</span>
      CMJ Digital. Todos os direitos reservados.
    </div>
</footer>
</div>


    </>
  );
}
