import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Simple intersection observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('active');
}
});
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
});



      (function(){
        var s=document.getElementById('splash-overlay'),b=document.getElementById('splash-bar'),k=document.getElementById('splash-skip');
        if(sessionStorage.getItem('atlas_splash_seen')){s.style.display='none';s.remove();return;}
        document.body.classList.add('overflow-hidden');
        requestAnimationFrame(function(){b.classList.add('animate-progress-bar');});
        function f(){
            s.classList.add('opacity-0','pointer-events-none');
            document.body.classList.remove('overflow-hidden');
            sessionStorage.setItem('atlas_splash_seen','true');
            setTimeout(function(){s.remove();},700);
        }
        k.onclick=function(e){e.preventDefault();f();};
        setTimeout(f,3100);
      })();
    


      document.addEventListener('DOMContentLoaded', () => {
          // 1. Reveal Animation Observer
          const revealObserver = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add('active');
                      // Trigger chart drawing if present
                      const chart = entry.target.querySelector('.chart-path');
                      if (chart) chart.classList.add('active');
                  }
              });
          }, { threshold: 0.15 });

          document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

          // 2. Sticky Storytelling Logic
          const visuals = document.querySelectorAll('.visual-state');
          const steps = document.querySelectorAll('.step-trigger');

          if (steps.length > 0) {
              const stepObserver = new IntersectionObserver((entries) => {
                  entries.forEach(entry => {
                      if (entry.isIntersecting) {
                          const stepIndex = entry.target.getAttribute('data-step');
                          // Update Visuals
                          visuals.forEach(vis => {
                              if (vis.getAttribute('data-state') === stepIndex) {
                                  vis.classList.add('active');
                              } else {
                                  vis.classList.remove('active');
                              }
                          });
                      }
                  });
              }, { threshold: 0.5, rootMargin: "-10% 0px -10% 0px" });

              steps.forEach(step => stepObserver.observe(step));
          }

          // 3. Number Counter Animation
          const countObserver = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      const target = +entry.target.getAttribute('data-target');
                      const duration = 2000; // ms
                      const start = 0;
                      const startTime = performance.now();

                      const updateCount = (currentTime) => {
                          const elapsed = currentTime - startTime;
                          const progress = Math.min(elapsed / duration, 1);
                          // Ease Out Quint
                          const ease = 1 - Math.pow(1 - progress, 5);

                          entry.target.innerText = Math.floor(start + (target - start) * ease).toLocaleString('pt-BR');

                          if (progress < 1) {
                              requestAnimationFrame(updateCount);
                          } else {
                              entry.target.innerText = target.toLocaleString('pt-BR');
                          }
                      };

                      requestAnimationFrame(updateCount);
                      observer.unobserve(entry.target);
                  }
              });
          }, { threshold: 0.5 });

          document.querySelectorAll('.counter').forEach(el => countObserver.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center transition-opacity duration-700 ease-in-out" id="splash-overlay">
<button className="absolute top-8 right-8 text-[11px] font-semibold tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors uppercase z-20 cursor-pointer" id="splash-skip">
        Pular
      </button>
<div className="relative z-10 flex flex-col items-center w-full max-w-[280px]">
<div className="w-16 h-16 bg-neutral-900 rounded-2xl flex items-center justify-center mb-8 shadow-2xl shadow-neutral-200/50 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
<div className="w-5 h-5 bg-white rounded-full"></div>
</div>
<div className="text-center mb-10 opacity-0 animate-[fadeIn_1s_ease-out_0.2s_forwards]">
<h1 className="text-xl font-semibold tracking-tight text-neutral-900 mb-2">
            Atlas Finance
          </h1>
<p className="text-sm text-neutral-500 font-medium">
            Previsão e controle do seu mês.
          </p>
</div>
<div className="w-full h-[3px] bg-neutral-50 rounded-full overflow-hidden relative opacity-0 animate-[fadeIn_1s_ease-out_0.4s_forwards]">
<div className="absolute left-0 top-0 bottom-0 bg-neutral-900 w-0" id="splash-bar"></div>
</div>
<p className="mt-4 text-[10px] font-bold tracking-widest text-neutral-300 uppercase text-center opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
          Preparando sua experiência…
        </p>
</div>
<div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=\\'0 0 200 200\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cfilter id=\\'noiseFilter\\'%3E%3CfeTurbulence type=\\'fractalNoise\\' baseFrequency=\\'0.65\\' numOctaves=\\'3\\' stitchTiles=\\'stitch\\'/%3E%3C/filter%3E%3Crect width=\\'100%25\\' height=\\'100%25\\' filter=\\'url(%23noiseFilter)\\'/%3E%3C/svg%3E\')'}}></div>
</div>

<div className="bg-noise"></div>

<header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all duration-300 h-[72px] flex items-center">
<div className="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">

<a className="text-xl font-semibold tracking-tighter flex items-center gap-2 text-neutral-900" href="#">
<div className="w-5 h-5 bg-neutral-900 rounded-sm flex items-center justify-center">
<div className="w-2 h-2 bg-white rounded-full"></div>
</div>
          ATLAS
        </a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-neutral-900 transition-colors" href="#features">
            Funcionalidades
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#how-it-works">
            Como funciona
          </a>
<a className="hover:text-neutral-900 transition-colors" href="#pricing">
            Planos
          </a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors" href="#">
            Entrar
          </a>
<a className="bg-neutral-900 text-white text-sm font-medium px-4 py-2.5 rounded hover:bg-neutral-800 transition-colors shadow-sm" href="#">
            Começar grátis
          </a>
</div>
</div>
</header>

<section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center w-full">

<div className="max-w-xl reveal z-10">
<h1 className="text-5xl md:text-7xl font-medium tracking-tighter leading-[1.05] mb-8 text-neutral-900">
            Veja seu dinheiro
            <br className="hidden lg:block"/>
            no futuro —
            <br/>
<span className="text-neutral-400">hoje.</span>
</h1>
<p className="text-xl text-neutral-500 mb-10 leading-relaxed max-w-md font-normal">
            Previsão de caixa, metas e alertas inteligentes. O controle
            financeiro que substitui suas planilhas.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="btn-shine bg-neutral-900 text-white text-base font-medium px-8 py-4 rounded hover:bg-neutral-800 transition-all shadow-lg hover:shadow-xl text-center flex items-center justify-center gap-2 group" href="#">
              Começar agora
              <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="bg-white border border-neutral-200 text-neutral-600 text-base font-medium px-8 py-4 rounded hover:bg-neutral-50 transition-colors text-center" href="#how-it-works">
              Como funciona
            </a>
</div>
<div className="mt-12 flex items-center gap-4 text-sm text-neutral-400">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-neutral-100 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-neutral-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-neutral-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-neutral-900 text-white border-2 border-white flex items-center justify-center text-[10px]">
                +2k
              </div>
</div>
<span className="font-medium">Fundadores ativos</span>
</div>
</div>

<div className="relative reveal delay-100 hidden lg:block">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-neutral-100 to-transparent rounded-full blur-3xl opacity-60 -z-10"></div>

<div className="relative animate-float">
<div className="bg-white border border-neutral-200 rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden aspect-[16/10] flex text-xs relative select-none">
<div className="w-16 border-r border-neutral-100 bg-neutral-50/40 flex flex-col items-center py-5 justify-between flex-shrink-0">
<div className="flex flex-col gap-6 items-center w-full">
<div className="w-8 h-8 bg-neutral-900 rounded-lg flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:layers-bold" width="18"></iconify-icon>
</div>
<div className="flex flex-col gap-5 w-full items-center text-neutral-400">
<div className="relative w-full flex justify-center py-1">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-neutral-900 rounded-r-full"></div>
<iconify-icon className="text-neutral-900" icon="solar:home-smile-bold" width="20"></iconify-icon>
</div>
<iconify-icon className="hover:text-neutral-900 transition-colors" icon="solar:chart-2-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-neutral-900 transition-colors" icon="solar:wallet-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-neutral-900 transition-colors" icon="solar:card-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-neutral-900 transition-colors" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-neutral-200 border border-neutral-300 flex-shrink-0"></div>
</div>
<div className="flex-1 flex flex-col min-w-0 bg-white">
<div className="h-14 border-b border-neutral-100 flex items-center justify-between px-6 bg-white sticky top-0 z-20">
<div className="flex items-center gap-3">
<span className="font-semibold text-neutral-900">
                      Visão Geral
                    </span>
<div className="h-4 w-px bg-neutral-200 mx-1"></div>
<div className="flex items-center gap-1.5 px-2 py-1 rounded-md border border-neutral-200 bg-neutral-50/50 text-neutral-500 text-[11px]">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
<span>Outubro 2023</span>
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-3 text-neutral-400">
<iconify-icon icon="solar:magnifer-linear" width="18"></iconify-icon>
<iconify-icon icon="solar:bell-linear" width="18"></iconify-icon>
</div>
</div>
<div className="p-6 flex flex-col gap-6 overflow-hidden h-full">
<div className="grid grid-cols-3 gap-4">
<div className="p-3 rounded-xl border border-neutral-100 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-medium text-neutral-500">
                          Saldo Disponível
                        </span>
<iconify-icon className="text-neutral-300" icon="solar:menu-dots-bold"></iconify-icon>
</div>
<div className="text-lg font-bold text-neutral-900 tracking-tight">
                        R$ 14.250
                      </div>
</div>
<div className="p-3 rounded-xl border border-neutral-100 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-medium text-neutral-500">
                          Entradas
                        </span>
<span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5 font-medium">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                          12%
                        </span>
</div>
<div className="text-lg font-bold text-neutral-900 tracking-tight">
                        R$ 8.400
                      </div>
</div>
<div className="p-3 rounded-xl border border-neutral-100 bg-white shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)]">
<div className="flex justify-between items-start mb-1">
<span className="text-[10px] font-medium text-neutral-500">
                          Cartão Corp
                        </span>
<span className="text-[10px] text-neutral-400">
                          Vence 24/10
                        </span>
</div>
<div className="mt-1">
<div className="flex justify-between text-[10px] mb-1 font-semibold text-neutral-900">
                          R$ 3.290
                          <span className="text-neutral-400 font-normal">/ 5k</span>
</div>
<div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
<div className="h-full bg-neutral-900 w-[65%] rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="flex-1 border border-neutral-100 rounded-xl p-4 bg-white relative flex flex-col">
<div className="flex justify-between items-center mb-4">
<span className="font-medium text-neutral-900 text-[11px]">
                        Fluxo de Caixa Projetado
                      </span>
<div className="flex gap-2">
<div className="flex items-center gap-1.5 text-[10px] text-neutral-500">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-900"></div>
                          Realizado
                        </div>
<div className="flex items-center gap-1.5 text-[10px] text-neutral-500">
<div className="w-1.5 h-1.5 rounded-full bg-neutral-200"></div>
                          Previsto
                        </div>
</div>
</div>
<div className="relative flex-1 w-full">
<div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
<div className="w-full h-px bg-neutral-50"></div>
<div className="w-full h-px bg-neutral-50"></div>
<div className="w-full h-px bg-neutral-50"></div>
<div className="w-full h-px bg-neutral-50"></div>
</div>
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 400 120">
<defs>
<lineargradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#171717" stop-opacity="0.05"></stop>
<stop offset="100%" stop-color="#171717" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0 80 C 50 75, 100 90, 150 60 C 200 30, 250 40, 300 20 C 350 0, 400 10, 400 10 V 120 H 0 Z" fill="url(#chartFill)"></path>
<path d="M0 80 C 50 75, 100 90, 150 60 C 200 30, 250 40, 300 20 C 350 0, 400 10, 400 10" fill="none" stroke="#171717" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<circle cx="150" cy="60" fill="white" r="3" stroke="#171717" strokeWidth="2"></circle>
<circle cx="300" cy="20" fill="white" r="3" stroke="#171717" strokeWidth="2"></circle>
</svg>
</div>
<div className="flex justify-between mt-2 text-[9px] text-neutral-400">
<span>01</span>
<span>05</span>
<span>10</span>
<span>15</span>
<span>20</span>
<span>25</span>
<span>30</span>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-6 top-8 bg-white p-4 rounded-xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.12)] border border-neutral-100 flex items-start gap-3 animate-float max-w-[200px]" style={{animationDelay: '1.5s'}}>
<div className="w-8 h-8 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0 border border-red-100">
<iconify-icon icon="solar:danger-triangle-bold"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-neutral-900 mb-0.5">
                  Risco de Caixa
                </div>
<div className="text-[10px] text-neutral-500 leading-tight mb-2">
                  Projeção negativa em 12 dias devido a pagamentos agendados.
                </div>
<div className="text-[10px] font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-2 cursor-pointer">
                  Ver detalhes
                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-neutral-500 mb-8 font-medium">
          Feito para quem quer controle real — sem planilhas.
        </p>
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tight text-neutral-800 flex items-center gap-1">
<iconify-icon icon="solar:box-minimalistic-linear"></iconify-icon>
            STRIPE
          </span>
<span className="text-xl font-semibold tracking-wide text-neutral-800 flex items-center gap-1">
<iconify-icon icon="solar:layers-linear"></iconify-icon>
            Vercel
          </span>
<span className="text-xl font-medium tracking-tight text-neutral-800 flex items-center gap-1">
<iconify-icon icon="solar:filters-linear"></iconify-icon>
            Linear
          </span>
<span className="text-xl font-bold tracking-tighter text-neutral-800 flex items-center gap-1">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
            RAYCAST
          </span>
<span className="text-xl font-semibold tracking-tight text-neutral-800 flex items-center gap-1">
<iconify-icon icon="solar:infinity-linear"></iconify-icon>
            Loop
          </span>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-12">

<div className="reveal group">
<div className="w-12 h-12 rounded border border-neutral-200 bg-neutral-50 flex items-center justify-center mb-6 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:calendar-date-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-3 tracking-tight">
              Previsão real do mês
            </h3>
<p className="text-neutral-500 leading-relaxed text-sm">
              Saiba exatamente quanto vai sobrar (ou faltar) nos próximos 30
              dias. O Atlas projeta seu saldo baseando-se em padrões.
            </p>
</div>

<div className="reveal delay-100 group">
<div className="w-12 h-12 rounded border border-neutral-200 bg-neutral-50 flex items-center justify-center mb-6 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-3 tracking-tight">
              Metas com disciplina
            </h3>
<p className="text-neutral-500 leading-relaxed text-sm">
              Defina limites por categoria. Receba alertas antes de estourar o
              orçamento de marketing ou infraestrutura.
            </p>
</div>

<div className="reveal delay-200 group">
<div className="w-12 h-12 rounded border border-neutral-200 bg-neutral-50 flex items-center justify-center mb-6 text-neutral-900 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-300">
<iconify-icon icon="solar:card-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-neutral-900 mb-3 tracking-tight">
              Cartões sem surpresa
            </h3>
<p className="text-neutral-500 leading-relaxed text-sm">
              Unificamos todas as suas faturas. Parcelas futuras são lançadas
              automaticamente na projeção de fluxo de caixa.
            </p>
</div>
</div>
</div>
</section>

<section className="relative bg-white" id="how-it-works">
<div className="flex flex-col lg:flex-row">

<div className="hidden lg:flex w-1/2 sticky top-0 h-screen items-center justify-center bg-neutral-50/30 border-r border-neutral-100 overflow-hidden">
<div className="relative w-[500px] h-[500px] flex items-center justify-center" id="sticky-visual">

<div className="absolute inset-0 bg-white rounded-2xl shadow-2xl border border-neutral-200/60"></div>

<div className="visual-state active flex flex-col items-center justify-center p-12 w-full h-full text-center" data-state="1">
<div className="w-20 h-20 rounded-2xl bg-neutral-100 flex items-center justify-center mb-8">
<iconify-icon className="text-neutral-400 text-4xl" icon="solar:file-text-linear"></iconify-icon>
</div>
<div className="space-y-4 w-full max-w-xs">
<div className="h-2 bg-neutral-100 rounded-full w-full overflow-hidden">
<div className="h-full bg-neutral-900 w-[0%] animate-[width_2s_ease-out_forwards]"></div>
</div>
<div className="flex justify-between text-xs text-neutral-400 font-medium">
<span>Lendo extrato...</span>
<span>100%</span>
</div>
</div>
<div className="mt-8 p-3 bg-green-50 text-green-700 rounded text-xs font-medium border border-green-100 inline-flex items-center gap-2">
<iconify-icon icon="solar:check-circle-bold"></iconify-icon>
                Nubank_Outubro.pdf processado
              </div>
</div>

<div className="visual-state flex flex-col p-8 w-full h-full" data-state="2">
<div className="flex items-center justify-between mb-8 border-b border-neutral-100 pb-4">
<span className="font-medium text-neutral-900">
                  Fluxo Projetado
                </span>
<span className="text-xs text-neutral-400">Próximos 30 dias</span>
</div>
<div className="flex-1 flex items-end gap-2">
<div className="flex-1 bg-neutral-100 rounded-t h-[40%] hover:bg-neutral-200 transition-colors"></div>
<div className="flex-1 bg-neutral-100 rounded-t h-[30%] hover:bg-neutral-200 transition-colors"></div>
<div className="flex-1 bg-neutral-900 rounded-t h-[70%]"></div>
<div className="flex-1 bg-neutral-100 rounded-t h-[50%] hover:bg-neutral-200 transition-colors"></div>
<div className="flex-1 bg-neutral-100 rounded-t h-[20%] hover:bg-neutral-200 transition-colors"></div>
<div className="flex-1 bg-neutral-100 rounded-t h-[60%] hover:bg-neutral-200 transition-colors"></div>
</div>
<div className="mt-4 flex justify-between text-xs text-neutral-500">
<span>Hoje</span>
<span>+30d</span>
</div>
</div>

<div className="visual-state flex items-center justify-center p-8 w-full h-full" data-state="3">
<div className="bg-white border border-neutral-100 shadow-xl rounded-xl p-6 w-full max-w-sm">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-red-50 text-red-600 flex items-center justify-center shrink-0">
<iconify-icon className="text-xl" icon="solar:bell-bing-bold"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-1">
                      Risco de Caixa
                    </h4>
<p className="text-sm text-neutral-500 leading-relaxed">
                      O pagamento agendado para o dia 24/10 deixará seu saldo
                      negativo em R$ 450,00.
                    </p>
<button className="mt-4 text-xs font-semibold text-neutral-900 hover:underline">
                      Ver sugestões
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 bg-white">

<div className="min-h-[90vh] flex flex-col justify-center px-8 md:px-20 step-trigger" data-step="1">
<span className="text-xs font-mono text-neutral-400 mb-6">
              PASSO 01
            </span>
<h3 className="text-4xl font-medium tracking-tight text-neutral-900 mb-6">
              Importação sem esforço.
            </h3>
<p className="text-lg text-neutral-500 leading-relaxed mb-8">
              Adeus digitação manual. Arraste seus extratos bancários em PDF ou
              CSV. Nossa IA categoriza cada transação em segundos com 99% de
              precisão.
            </p>
</div>

<div className="min-h-[90vh] flex flex-col justify-center px-8 md:px-20 step-trigger" data-step="2">
<span className="text-xs font-mono text-neutral-400 mb-6">
              PASSO 02
            </span>
<h3 className="text-4xl font-medium tracking-tight text-neutral-900 mb-6">
              Visão cristalina do futuro.
            </h3>
<p className="text-lg text-neutral-500 leading-relaxed mb-8">
              O sistema projeta seu fluxo de caixa diário baseado nos seus
              padrões de gastos e recebimentos recorrentes. Saiba exatamente
              quanto terá em caixa daqui a 30 dias.
            </p>
</div>

<div className="min-h-[90vh] flex flex-col justify-center px-8 md:px-20 step-trigger" data-step="3">
<span className="text-xs font-mono text-neutral-400 mb-6">
              PASSO 03
            </span>
<h3 className="text-4xl font-medium tracking-tight text-neutral-900 mb-6">
              Alertas que salvam o mês.
            </h3>
<p className="text-lg text-neutral-500 leading-relaxed mb-8">
              Não seja pego de surpresa. Receba notificações proativas sobre
              contas a pagar, faturas altas ou risco de saldo negativo com
              antecedência para agir.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white border-t border-neutral-100" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-24 max-w-2xl reveal">
<h2 className="text-4xl font-medium tracking-tight mb-6 text-neutral-900">
            Controle total em cada detalhe.
          </h2>
<p className="text-xl text-neutral-500 font-light">
            Ferramentas desenhadas para eliminar a ansiedade financeira.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

<div className="group reveal">
<div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:calendar-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-neutral-900 mb-3 text-lg">
              Projeção 30/60/90
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Visibilidade de curto e longo prazo. Ajuste a janela de tempo com
              um clique.
            </p>
</div>
<div className="group reveal delay-100">
<div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:card-transfer-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-neutral-900 mb-3 text-lg">
              Ciclo de Cartão Inteligente
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              O Atlas entende fechamento e vencimento para alocar o gasto no dia
              exato do desembolso.
            </p>
</div>
<div className="group reveal delay-200">
<div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:bill-list-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-neutral-900 mb-3 text-lg">
              Parcelamento Automático
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Detectamos compras parceladas e lançamos as cobranças futuras
              automaticamente.
            </p>
</div>
<div className="group reveal delay-300">
<div className="w-12 h-12 rounded-xl bg-neutral-50 flex items-center justify-center mb-6 group-hover:bg-neutral-900 group-hover:text-white transition-colors duration-500">
<iconify-icon icon="solar:safe-square-linear" width="24"></iconify-icon>
</div>
<h3 className="font-medium text-neutral-900 mb-3 text-lg">
              Metas de Reserva
            </h3>
<p className="text-sm text-neutral-500 leading-relaxed">
              Defina um "piso" de segurança. O sistema alerta se você se
              aproximar dele.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-neutral-900 rounded-[2rem] p-12 md:p-24 text-white overflow-hidden relative min-h-[600px] flex items-center reveal">

<div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center w-full">
<div>
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-700 bg-neutral-800/50 text-xs font-medium text-neutral-300 mb-8">
<iconify-icon icon="solar:stars-linear"></iconify-icon>
                Inteligência Atlas
              </div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 leading-[1.1]">
                Seu financeiro trabalhando enquanto você dorme.
              </h2>
<p className="text-neutral-400 text-lg leading-relaxed mb-12 max-w-md">
                Detectamos anomalias, gastos duplicados e oportunidades de
                economia em tempo real.
              </p>
<div className="flex items-center gap-6">
<div>
<div className="text-5xl font-semibold tracking-tight mb-2">
                    R$
                    <span className="counter" data-target="1532">0</span>
</div>
<div className="text-sm text-neutral-500">Economia média/mês</div>
</div>
</div>
</div>

<div className="relative">
<div className="bg-neutral-800/50 border border-neutral-700/50 backdrop-blur-xl p-8 rounded-2xl">
<div className="flex items-center justify-between mb-8">
<div className="text-sm font-medium text-neutral-300">
                    Insights Recentes
                  </div>
<div className="flex gap-1">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">
                      Ao vivo
                    </div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl bg-neutral-800/80 border border-neutral-700">
<div className="w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center text-neutral-400">
<iconify-icon icon="solar:chart-arrow-up-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">
                        Software subiu 15%
                      </div>
<div className="text-xs text-neutral-500">
                        Comparado à média de 3 meses
                      </div>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white text-neutral-900 shadow-lg transform scale-105">
<div className="w-10 h-10 rounded-lg bg-red-50 text-red-600 flex items-center justify-center">
<iconify-icon icon="solar:danger-triangle-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-bold">
                        Risco de Caixa Detectado
                      </div>
<div className="text-xs text-neutral-600">
                        Saldo negativo projetado dia 24
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-neutral-800 rounded-full blur-[120px] opacity-20 -z-0 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-neutral-900">
            Comece simples. Escale depois.
          </h2>
<p className="text-neutral-500">
            Sem custos ocultos. Cancele a qualquer momento.
          </p>
</div>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="p-8 rounded-2xl border border-neutral-200 hover:border-neutral-300 transition-all bg-white flex flex-col">
<div className="mb-6">
<span className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Starter
              </span>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-neutral-900">
                  R$ 0
                </span>
<span className="text-neutral-500">/mês</span>
</div>
<p className="text-sm text-neutral-500 mt-2">
                Para quem está organizando a casa.
              </p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-700">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                1 Cartão de crédito
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                Importação manual CSV
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<iconify-icon className="text-neutral-400" icon="solar:check-circle-linear"></iconify-icon>
                Projeção básica (30 dias)
              </li>
</ul>
<a className="w-full py-3 rounded border border-neutral-200 text-neutral-900 font-medium text-center hover:bg-neutral-50 transition-colors" href="#">
              Criar conta grátis
            </a>
</div>

<div className="p-8 rounded-2xl border border-neutral-200 bg-neutral-50 relative flex flex-col shadow-sm">
<div className="absolute top-0 right-0 bg-neutral-900 text-white text-xs font-medium px-3 py-1 rounded-bl-lg rounded-tr-lg">
              Recomendado
            </div>
<div className="mb-6">
<span className="text-sm font-semibold uppercase tracking-wide text-neutral-900">
                Pro
              </span>
<div className="mt-2 flex items-baseline gap-1">
<span className="text-4xl font-bold tracking-tight text-neutral-900">
                  R$ 29
                </span>
<span className="text-neutral-500">/mês</span>
</div>
<p className="text-sm text-neutral-500 mt-2">
                Controle total e automação.
              </p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-700">
<iconify-icon className="text-neutral-900" icon="solar:check-circle-bold"></iconify-icon>
                Cartões ilimitados
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<iconify-icon className="text-neutral-900" icon="solar:check-circle-bold"></iconify-icon>
                Importação IA (PDF &amp; CSV)
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<iconify-icon className="text-neutral-900" icon="solar:check-circle-bold"></iconify-icon>
                Projeção avançada (90 dias)
              </li>
<li className="flex items-center gap-3 text-sm text-neutral-700">
<iconify-icon className="text-neutral-900" icon="solar:check-circle-bold"></iconify-icon>
                Alertas de risco via WhatsApp
              </li>
</ul>
<a className="w-full py-3 rounded bg-neutral-900 text-white font-medium text-center hover:bg-neutral-800 transition-colors shadow-sm" href="#">
              Começar teste de 7 dias
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-neutral-100">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight mb-8 text-neutral-900">
          Dúvidas Frequentes
        </h2>
<div className="space-y-4">
<details className="group border border-neutral-200 rounded-lg bg-white open:ring-1 open:ring-neutral-200">
<summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-neutral-900 list-none">
<span>O Atlas se conecta ao meu banco?</span>
<iconify-icon className="text-neutral-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-500 leading-relaxed">
              Não diretamente. Para garantir segurança máxima e privacidade,
              trabalhamos com a importação de extratos (PDF/CSV). Nossa IA
              processa os dados em segundos. Seus dados bancários nunca saem do
              seu dispositivo sem criptografia.
            </div>
</details>
<details className="group border border-neutral-200 rounded-lg bg-white open:ring-1 open:ring-neutral-200">
<summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-neutral-900 list-none">
<span>A importação por IA funciona com quais bancos?</span>
<iconify-icon className="text-neutral-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-500 leading-relaxed">
              Atualmente suportamos os principais bancos digitais e tradicionais
              do Brasil: Nubank, Inter, Itaú, Bradesco, Santander e C6.
            </div>
</details>
<details className="group border border-neutral-200 rounded-lg bg-white open:ring-1 open:ring-neutral-200">
<summary className="flex justify-between items-center cursor-pointer p-4 font-medium text-neutral-900 list-none">
<span>Posso cancelar quando quiser?</span>
<iconify-icon className="text-neutral-400 transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-4 pb-4 text-sm text-neutral-500 leading-relaxed">
              Sim. Não existe fidelidade. Você pode cancelar sua assinatura a
              qualquer momento através do painel de configurações.
            </div>
</details>
</div>
</div>
</section>

<section className="relative min-h-[70vh] flex items-center justify-center bg-white text-center border-t border-neutral-100 overflow-hidden">
<div className="bg-noise"></div>
<div className="max-w-2xl mx-auto px-6 relative z-10 reveal">
<div className="mb-8 flex justify-center">
<div className="w-12 h-12 bg-neutral-900 rounded-lg flex items-center justify-center">
<div className="w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-neutral-900 mb-8">
          Assuma o controle.
        </h2>
<p className="text-xl text-neutral-500 mb-12 max-w-lg mx-auto leading-relaxed">
          Junte-se aos fundadores que constroem o futuro com previsibilidade
          financeira.
        </p>
<a className="btn-shine inline-flex items-center gap-3 bg-neutral-900 text-white text-lg font-medium px-10 py-5 rounded-lg hover:bg-neutral-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1" href="#">
          Começar grátis
          <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-white border-t border-neutral-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="text-lg font-semibold tracking-tighter flex items-center gap-2 text-neutral-900 mb-4" href="#">
<div className="w-4 h-4 bg-neutral-900 rounded-sm flex items-center justify-center">
<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
</div>
              ATLAS
            </a>
<p className="text-sm text-neutral-500">
              Inteligência financeira para quem constrói o futuro.
            </p>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-4">Produto</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li>
<a className="hover:text-neutral-900" href="#">Funcionalidades</a>
</li>
<li><a className="hover:text-neutral-900" href="#">Preços</a></li>
<li>
<a className="hover:text-neutral-900" href="#">Atualizações</a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-4">Empresa</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-neutral-900" href="#">Sobre nós</a></li>
<li><a className="hover:text-neutral-900" href="#">Carreiras</a></li>
<li><a className="hover:text-neutral-900" href="#">Contato</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-neutral-900 mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li>
<a className="hover:text-neutral-900" href="#">Privacidade</a>
</li>
<li><a className="hover:text-neutral-900" href="#">Termos</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-neutral-100 text-sm text-neutral-400">
<p>© 2023 Atlas Finance. Todos os direitos reservados.</p>
<div className="flex gap-4">
<a className="hover:text-neutral-900" href="#">
<iconify-icon icon="solar:cat-linear" width="20"></iconify-icon>
</a>

<a className="hover:text-neutral-900" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
