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



      // Mobile menu toggle
      const toggleBtn = document.getElementById('mobileToggle');
      const mobileMenu = document.getElementById('mobileMenu');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          const icon = toggleBtn.querySelector('svg');
          if (icon) {
            const current = icon.getAttribute('data-lucide');
            toggleBtn.innerHTML = current === 'menu' ? '<i data-lucide="x" class="h-5 w-5"></i>' : '<i data-lucide="menu" class="h-5 w-5"></i>';
            lucide.createIcons();
          }
        });
      }

      // Chart.js example (nested canvas to avoid growth bug)
      const ctx = document.getElementById('impactoChart');
      if (ctx) {
        const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 180);
        gradient.addColorStop(0, 'rgba(124,58,237,0.35)');
        gradient.addColorStop(1, 'rgba(124,58,237,0)');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Planejar','Construir','Testar','Release'],
            datasets: [
              {
                label: 'Intuitiva',
                data: [60, 45, 40, 35],
                borderColor: 'rgb(124,58,237)',
                backgroundColor: gradient,
                fill: true,
                tension: 0.35,
                pointRadius: 0
              },
              {
                label: 'Tradicional',
                data: [100, 100, 100, 100],
                borderColor: 'rgba(255,255,255,0.35)',
                borderDash: [4,4],
                fill: false,
                tension: 0.35,
                pointRadius: 0
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { labels: { color: '#d4d4d8', font: { size: 11 } } },
              tooltip: { enabled: true }
            },
            scales: {
              x: { ticks: { color: '#a1a1aa', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.06)' } },
              y: { ticks: { color: '#a1a1aa', font: { size: 10 }, callback: (v) => v + '%' }, grid: { color: 'rgba(255,255,255,0.06)' } }
            }
          }
        });
      }

      // Dynamic year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Initialize lucide icons
      lucide.createIcons();
    
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
      

<header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/70 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-sky-400 text-white">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</span>
<span className="text-lg font-semibold tracking-tight">Intuitiva</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm text-neutral-300">
<a className="hover:text-white" href="#como-funciona">Como funciona</a>
<a className="hover:text-white" href="#solucoes">Soluções</a>
<a className="hover:text-white" href="#beneficios">Benefícios</a>
<a className="hover:text-white" href="#cases">Cases</a>
<a className="hover:text-white" href="#precos">Planos</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="text-sm text-neutral-300 hover:text-white" href="#contato">Falar com especialista</a>
<a className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-100 transition" href="#demo">
<i className="h-4 w-4" data-lucide="rocket"></i>
              Solicitar demo
            </a>
</div>
<button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 hover:bg-white/5" id="mobileToggle">
<i className="h-5 w-5" data-lucide="menu"></i>
</button>
</div>
</div>
<div className="md:hidden hidden border-t border-white/10" id="mobileMenu">
<div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-3 text-sm text-neutral-300">
<a className="py-2" href="#como-funciona">Como funciona</a>
<a className="py-2" href="#solucoes">Soluções</a>
<a className="py-2" href="#beneficios">Benefícios</a>
<a className="py-2" href="#cases">Cases</a>
<a className="py-2" href="#precos">Planos</a>
<div className="pt-2 flex items-center gap-2">
<a className="text-neutral-300 hover:text-white" href="#contato">Falar com especialista</a>
<a className="ml-auto inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-3 py-2 text-sm font-medium hover:bg-neutral-100 transition" href="#demo">
<i className="h-4 w-4" data-lucide="rocket"></i>
              Demo
            </a>
</div>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(closest-side, rgba(124,58,237,0.5), rgba(56,189,248,0.15) 60%, transparent 70%)'}}></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-24">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200">
<i className="h-3.5 w-3.5 text-violet-400" data-lucide="bot"></i>
              Redefinindo o desenvolvimento de software com IA
            </div>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold">
              Da ideia ao produto em semanas, com qualidade e governança
            </h1>
<p className="mt-5 text-neutral-300">
              A Intuitiva combina agentes de IA, engenharia de software e automação para planejar, construir, testar e lançar produtos digitais com velocidade e segurança — reduzindo custos e riscos.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100 transition" href="#demo">
<i className="h-4 w-4 hidden" data-lucide="sparkle"></i>
<i className="h-4 w-4" data-lucide="wand-2"></i>
                Começar com uma demo
              </a>
<a className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white hover:bg-white/10" href="#como-funciona">
<i className="h-4 w-4" data-lucide="play-circle"></i>
                Ver como funciona
              </a>
</div>
<div className="mt-6 text-xs text-neutral-400">
              Segurança corporativa • Integração ao seu stack • Conformidade
            </div>
</div>
<div className="lg:col-span-6">
<div className="relative rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-1">
<div className="rounded-lg bg-neutral-900/60 ring-1 ring-white/10 overflow-hidden">
<img alt="Hero mock" className="h-56 sm:h-72 w-full object-cover opacity-80" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-4 sm:p-6">
<div className="flex items-center gap-2 text-xs text-neutral-400">
<i className="h-4 w-4 text-violet-400" data-lucide="code-2"></i>
                    Plano de entrega gerado por IA
                  </div>
<pre className="mt-3 rounded-md bg-black/40 p-4 text-[12px] leading-relaxed text-neutral-200 overflow-auto">
<span className="text-violet-300">feat/checkout</span> ➜ Gerar blueprint, arquiteturas e tarefas
- Backlog com épicos, histórias e critérios de aceite
- Testes automatizados, coverage e segurança
- Pipelines prontos para CI/CD
- Observabilidade e métricas desde o primeiro commit
                  </pre>
<div className="mt-4 grid grid-cols-2 gap-3 text-xs">
<div className="rounded-md border border-white/10 p-3">
<div className="flex items-center gap-2 text-neutral-300">
<i className="h-4 w-4 text-sky-400" data-lucide="git-branch"></i>
                        38% menos retrabalho
                      </div>
<p className="mt-1 text-neutral-400">Qualidade desde o design com testes e linting automáticos.</p>
</div>
<div className="rounded-md border border-white/10 p-3">
<div className="flex items-center gap-2 text-neutral-300">
<i className="h-4 w-4 text-emerald-400" data-lucide="timer"></i>
                        2–4x mais rápido
                      </div>
<p className="mt-1 text-neutral-400">Agentes coordenam tarefas e integram com seu repositório.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-white/10 bg-neutral-950/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<p className="text-center text-xs text-neutral-400">Confiável para times que entregam em escala</p>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 opacity-60">
<img alt="logo 1" className="h-10 w-full object-cover rounded" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="logo 2" className="h-10 w-full object-cover rounded" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="logo 3" className="h-10 w-full object-cover rounded" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<img alt="logo 4" className="h-10 w-full object-cover rounded" src="https://images.unsplash.com/photo-1549924231-f129b911e442?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="logo 5" className="h-10 w-full object-cover rounded" src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="logo 6" className="h-10 w-full object-cover rounded" src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20" id="como-funciona">
<div className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-5">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Como funciona</h2>
<p className="mt-4 text-neutral-300">
            Uma plataforma coordenada por agentes que transforma requisitos em software produzido, testado e implantado. Conectamos com seu repositório, pipelines e observabilidade.
          </p>
<div className="mt-6 space-y-4">
<div className="flex gap-3">
<div className="mt-1">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<i className="h-4 w-4 text-violet-400" data-lucide="notebook-pen"></i>
</span>
</div>
<div>
<h3 className="font-medium tracking-tight">Discovery guiado por IA</h3>
<p className="text-sm text-neutral-400">Refine objetivos, escopo, riscos e métricas de sucesso. Gere o blueprint do produto.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<i className="h-4 w-4 text-sky-400" data-lucide="boxes"></i>
</span>
</div>
<div>
<h3 className="font-medium tracking-tight">Planejamento e arquitetura</h3>
<p className="text-sm text-neutral-400">Geração de épicos, histórias, modelos de dados, APIs e contratos.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<i className="h-4 w-4 text-emerald-400" data-lucide="cpu"></i>
</span>
</div>
<div>
<h3 className="font-medium tracking-tight">Agentes que constroem</h3>
<p className="text-sm text-neutral-400">Criação de código, testes, documentação e PRs com explicações e links.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<i className="h-4 w-4 text-rose-400" data-lucide="shield-check"></i>
</span>
</div>
<div>
<h3 className="font-medium tracking-tight">Qualidade e segurança</h3>
<p className="text-sm text-neutral-400">SAST/DAST, testes e cobertura, governança de modelos e revisões assistidas.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<i className="h-4 w-4 text-amber-400" data-lucide="cloud-upload"></i>
</span>
</div>
<div>
<h3 className="font-medium tracking-tight">Deploy e observabilidade</h3>
<p className="text-sm text-neutral-400">Pipelines prontos, releases seguras, métricas e feedback contínuo.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-7">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="rounded-lg border border-white/10 bg-neutral-950">
<div className="flex items-center gap-2 border-b border-white/10 px-4 py-2 text-xs text-neutral-400">
<div className="flex gap-1">
<span className="h-3 w-3 rounded-full bg-red-500/80"></span>
<span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
<span className="h-3 w-3 rounded-full bg-emerald-500/80"></span>
</div>
<span>pipeline.yml</span>
<span className="ml-auto inline-flex items-center gap-1 rounded bg-white/5 px-2 py-0.5">
<i className="h-3.5 w-3.5" data-lucide="terminal"></i>
                  CI/CD
                </span>
</div>
<div className="grid md:grid-cols-2 gap-0">
<div className="p-4">
<pre className="text-[12px] leading-relaxed text-neutral-300 font-['IBM_Plex_Mono']">
stages:
  - plan
  - build
  - test
  - release

plan:
  script: intuitiva plan --context ./blueprint

build:
  script: intuitiva build --agents 4

test:
  script: intuitiva test --coverage --security

release:
  script: intuitiva deploy --env prod --canary
                  </pre>
</div>
<div className="border-t md:border-t-0 md:border-l border-white/10 p-4">
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between">
<span className="text-neutral-300">Tempo de ciclo</span>
<span className="text-emerald-400">-57%</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-300">Cobertura de testes</span>
<span className="text-emerald-400">+32%</span>
</div>
<div className="flex items-center justify-between">
<span className="text-neutral-300">Incidentes pós-release</span>
<span className="text-emerald-400">-41%</span>
</div>
</div>
<div className="mt-4">
<h4 className="text-sm font-medium tracking-tight text-neutral-200">Impacto na entrega</h4>
<p className="text-xs text-neutral-400">Comparativo entre processo tradicional e com Intuitiva.</p>
<div className="mt-2 rounded-md border border-white/10 p-2">
<div className="h-48">
<div className="h-full">
<canvas id="impactoChart"></canvas>
</div>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
<i className="h-4 w-4" data-lucide="lock"></i>
                    Seus dados permanecem no seu ambiente. Suporte para VPC e on-prem.
                  </div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="solucoes">
<div className="flex items-end justify-between">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Soluções Intuitiva</h2>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white" href="#demo">
<i className="h-4 w-4" data-lucide="arrow-right"></i>
          Fale com vendas
        </a>
</div>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-violet-500/10 ring-1 ring-violet-500/30">
<i className="h-4 w-4 text-violet-400" data-lucide="lightbulb"></i>
</span>
<h3 className="font-medium tracking-tight">Blueprint AI</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Da visão ao backlog: converte objetivos de negócio em épicos, histórias, estimativas e critérios de aceite.</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>Mapa de stakeholders e riscos</li>
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>Métricas de sucesso e ROI</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-sky-500/10 ring-1 ring-sky-500/30">
<i className="h-4 w-4 text-sky-400" data-lucide="workflow"></i>
</span>
<h3 className="font-medium tracking-tight">Agents Studio</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Agentes colaborativos para gerar código, testes e PRs em múltiplos repositórios com rastreabilidade.</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>Suporte multi-stack</li>
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>Revisão assistida e explicável</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/30">
<i className="h-4 w-4 text-emerald-400" data-lucide="shield"></i>
</span>
<h3 className="font-medium tracking-tight">Quality &amp; Security</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Testes, cobertura, SAST/DAST e compliance automatizados em todo PR e release.</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>Políticas e auditoria</li>
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>Controles de privacidade</li>
</ul>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-amber-500/10 ring-1 ring-amber-500/30">
<i className="h-4 w-4 text-amber-400" data-lucide="radar"></i>
</span>
<h3 className="font-medium tracking-tight">Observabilidade</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Telemetria de ponta a ponta para produto e engenharia. SLIs, SLOs e alertas inteligentes.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-rose-500/10 ring-1 ring-rose-500/30">
<i className="h-4 w-4 text-rose-300" data-lucide="server-cog"></i>
</span>
<h3 className="font-medium tracking-tight">Deploy Seguro</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Pipelines, canary releases, rollback automático e controles de acesso por ambiente.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-fuchsia-500/10 ring-1 ring-fuchsia-500/30">
<i className="h-4 w-4 text-fuchsia-400" data-lucide="link"></i>
</span>
<h3 className="font-medium tracking-tight">Integrações</h3>
</div>
<p className="mt-2 text-sm text-neutral-400">Conecte-se a GitHub, GitLab, Jira, Azure DevOps, AWS, GCP, OpenAI/Anthropic e mais.</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="beneficios">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Resultados que importam</h2>
<p className="mt-3 text-neutral-300">Eficiência sem abrir mão de segurança, controle e experiência do time.</p>
<div className="mt-6 grid sm:grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-4xl font-semibold tracking-tight">2–4x</div>
<p className="text-sm text-neutral-400">Aceleração no time-to-market</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-4xl font-semibold tracking-tight">-50%</div>
<p className="text-sm text-neutral-400">Custo por feature</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-4xl font-semibold tracking-tight">+32%</div>
<p className="text-sm text-neutral-400">Cobertura e qualidade</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="text-4xl font-semibold tracking-tight">NPS 75</div>
<p className="text-sm text-neutral-400">Satisfação de stakeholders</p>
</div>
</div>
</div>
<div>
<div className="rounded-xl overflow-hidden border border-white/10">
<img alt="Equipe colaborando" className="w-full h-80 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<p className="mt-3 text-xs text-neutral-400">Imagem ilustrativa</p>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="cases">
<div className="flex items-end justify-between">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Cases e aplicações</h2>
<a className="hidden sm:inline-flex items-center gap-2 text-sm text-neutral-300 hover:text-white" href="#contato">
<i className="h-4 w-4" data-lucide="message-square"></i>
          Solicitar estudo de caso
        </a>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
<img alt="Case 1" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="text-sm font-medium tracking-tight">Modernização de plataforma</div>
<p className="mt-1 text-sm text-neutral-400">Refatoração de monólito para microsserviços com agentes de migração e testes automatizados.</p>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
<img alt="Case 2" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="text-sm font-medium tracking-tight">Lançamento de novo produto</div>
<p className="mt-1 text-sm text-neutral-400">MVP em 6 semanas: do discovery ao deploy com observabilidade completa.</p>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
<img alt="Case 3" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="text-sm font-medium tracking-tight">Eficiência em squads</div>
<p className="mt-1 text-sm text-neutral-400">Aumento de throughput e redução de bugs críticos com revisão assistida.</p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16" id="precos">
<div className="text-center">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Planos flexíveis</h2>
<p className="mt-3 text-neutral-300">Comece pequeno, escale com governança. Preços por assento e por agente.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-emerald-400" data-lucide="leaf"></i>
<div className="font-medium tracking-tight">Starter</div>
</div>
<div className="mt-4 text-3xl font-semibold tracking-tight">R$ 0</div>
<p className="text-sm text-neutral-400">Até 5 usuários • 1 agente • 3 repositórios</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>Blueprint básico</li>
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>PRs assistidos</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10" href="#demo">Começar</a>
</div>
<div className="rounded-2xl border border-violet-500/30 bg-gradient-to-b from-violet-500/10 to-white/5 p-6">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-violet-400" data-lucide="sparkles"></i>
<div className="font-medium tracking-tight">Growth</div>
<span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 text-[10px]">Mais popular</span>
</div>
<div className="mt-4 text-3xl font-semibold tracking-tight">R$ 3.990/mês</div>
<p className="text-sm text-neutral-300">Até 25 usuários • 5 agentes • Ilimitado repositórios</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-200">
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>Quality &amp; Security</li>
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>Deploy Seguro</li>
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>Suporte empresarial</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2 text-sm font-medium hover:bg-neutral-100" href="#demo">Assinar</a>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-6">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-sky-400" data-lucide="building-2"></i>
<div className="font-medium tracking-tight">Enterprise</div>
</div>
<div className="mt-4 text-3xl font-semibold tracking-tight">Sob consulta</div>
<p className="text-sm text-neutral-400">SSO/SAML • VPC/On-prem • Suporte 24/7 • SLA</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>Treinamento customizado</li>
<li className="flex gap-2"><i className="h-4 w-4 text-emerald-400" data-lucide="check"></i>FinOps &amp; governança de modelos</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium hover:bg-white/10" href="#contato">Falar com vendas</a>
</div>
</div>
</section>

<section className="relative overflow-hidden" id="demo">
<div className="absolute inset-0 -z-10 opacity-30" style={{background: 'radial-gradient(600px 300px at 20% 20%, rgba(124,58,237,0.5), transparent), radial-gradient(600px 300px at 80% 60%, rgba(56,189,248,0.4), transparent)'}}></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="rounded-2xl border border-white/10 bg-white/5 p-8">
<div className="grid md:grid-cols-2 gap-8">
<div>
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">Pronto para acelerar seu roadmap?</h3>
<p className="mt-2 text-neutral-300">Agende uma demonstração personalizada e veja a Intuitiva aplicada ao seu contexto.</p>
<div className="mt-6 flex gap-3">
<div className="relative flex-1">
<input className="w-full rounded-md border border-white/10 bg-neutral-900 px-4 py-3 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-violet-500/50" placeholder="seuemail@empresa.com" type="email"/>
</div>
<button className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-100">
<i className="h-4 w-4" data-lucide="send"></i>
                  Solicitar demo
                </button>
</div>
<p className="mt-2 text-xs text-neutral-400">Sem spam. Enviaremos um e-mail para agendar.</p>
</div>
<div className="rounded-xl overflow-hidden border border-white/10">
<img alt="Produto em ação" className="h-64 w-full object-cover sm:h-full" src="https://images.unsplash.com/photo-1504898770365-14faca6a7320?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10" id="contato">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<a className="flex items-center gap-2" href="#">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-violet-500 to-sky-400 text-white">
<i className="h-4 w-4" data-lucide="sparkles"></i>
</span>
<span className="text-lg font-semibold tracking-tight">Intuitiva</span>
</a>
<p className="mt-3 text-sm text-neutral-400">IA aplicada para construir produtos digitais com velocidade, segurança e governança.</p>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Produto</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white" href="#solucoes">Soluções</a></li>
<li><a className="hover:text-white" href="#como-funciona">Como funciona</a></li>
<li><a className="hover:text-white" href="#precos">Planos</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Recursos</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li><a className="hover:text-white" href="#">Documentação</a></li>
<li><a className="hover:text-white" href="#">Status</a></li>
<li><a className="hover:text-white" href="#">Blog</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Contato</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-400">
<li>contato@intuitiva.ai</li>
<li>+55 (11) 0000-0000</li>
<li><a className="hover:text-white inline-flex items-center gap-2" href="#"><i className="h-4 w-4" data-lucide="map-pin"></i>São Paulo • Remoto</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
<div>© <span id="year"></span> Intuitiva. Todos os direitos reservados.</div>
<div className="flex items-center gap-4">
<a className="hover:text-neutral-300" href="#">Privacidade</a>
<a className="hover:text-neutral-300" href="#">Termos</a>
<a className="hover:text-neutral-300 inline-flex items-center gap-1" href="#"><i className="h-3.5 w-3.5" data-lucide="github"></i>GitHub</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
