import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Carrossel infinito de organizações
      (function () {
        const track = document.getElementById("orgs-track");
        if (!track) return;

        let position = 0;
        const speed = 0.4; // ajuste de velocidade

        function animate() {
          position -= speed;
          const width = track.scrollWidth / 2;
          if (-position >= width) {
            position = 0;
          }
          track.style.transform = "translateX(" + position + "px)";
          requestAnimationFrame(animate);
        }

        requestAnimationFrame(animate);
      })();

      // Carrossel de depoimentos com dots e autoplay
      (function () {
        const container = document.getElementById("testemunhos-track");
        if (!container) return;

        const inner = container.querySelector("div");
        const slides = inner.children;
        const dots = document.querySelectorAll("[data-testemunho-dot]");
        const total = slides.length;

        let current = 0;
        let intervalId;

        function goTo(index) {
          current = (index + total) % total;
          const offset = -current * container.clientWidth;
          inner.style.transform = "translateX(" + offset + "px)";

          dots.forEach((dot, i) => {
            if (i === current) {
              dot.classList.remove("w-1.5", "bg-slate-600");
              dot.classList.add("w-5", "bg-violet-500");
            } else {
              dot.classList.remove("w-5", "bg-violet-500");
              dot.classList.add("w-1.5", "bg-slate-600");
            }
          });
        }

        function startAutoplay() {
          intervalId = setInterval(() => {
            goTo(current + 1);
          }, 7000);
        }

        function stopAutoplay() {
          if (intervalId) clearInterval(intervalId);
        }

        dots.forEach((dot) => {
          dot.addEventListener("click", () => {
            const index = parseInt(dot.getAttribute("data-testemunho-dot"), 10);
            stopAutoplay();
            goTo(index);
            startAutoplay();
          });
        });

        window.addEventListener("resize", () => {
          goTo(current);
        });

        goTo(0);
        startAutoplay();
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-sm">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-6 py-4 px-4 lg:px-0">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-violet-700 flex items-center justify-center text-white text-sm font-semibold tracking-tight">
              Z
            </div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight text-slate-900">
                zenbox
              </span>
<span className="text-xs text-slate-500 leading-tight">
                cultura que faz sentido
              </span>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#">Por que escolher a Zenbox</a>
<a className="hover:text-slate-900 transition-colors" href="#">Funcionalidades</a>
<a className="hover:text-slate-900 transition-colors" href="#">Planos</a>
<a className="hover:text-slate-900 transition-colors" href="#">Fale com um especialista</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
              Login
            </button>
<button className="inline-flex md:hidden items-center rounded-full border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
              Menu
            </button>
</div>
</div>
</header>

<main className="flex-1">
<section className="w-full bg-slate-50">
<div className="max-w-6xl mx-auto px-4 lg:px-0 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
<div className="space-y-6">
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
                Faça da cultura de bem-estar e felicidade no trabalho
                <span className="text-violet-700">sua maior vantagem competitiva</span>
</h1>
<p className="text-base sm:text-lg text-slate-600 max-w-xl">
                Construa uma cultura de bem-estar capaz de potencializar os resultados
                do seu negócio com indicadores claros, metodologia própria e suporte especializado.
              </p>
<div className="flex flex-wrap items-center gap-4">
<button className="inline-flex items-center justify-center rounded-full bg-violet-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-800 transition-colors">
                  Solicite uma demonstração
                </button>
<button className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-white">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<polygon points="10 8 16 12 10 16 10 8"></polygon>
</svg>
                  Ver plataforma em ação
                </button>
</div>
<div className="flex flex-wrap items-center gap-4 text-xs text-slate-500">
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Implementação em poucas semanas</span>
</div>
<div className="flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
<span>Suporte dedicado ao RH</span>
</div>
</div>
</div>

<div className="relative">
<div className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<div className="flex items-center justify-between px-4 py-2 border-b border-slate-100 bg-slate-50">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-rose-400"></span>
<span className="h-2 w-2 rounded-full bg-amber-400"></span>
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
</div>
<div className="text-[0.7rem] text-slate-400">dashboard.zenbox.app</div>
<div className="w-8"></div>
</div>
<div className="grid grid-cols-3 sm:grid-cols-4 gap-px bg-slate-100">
<div className="aspect-square bg-gradient-to-br from-violet-600/10 to-violet-600/30"></div>
<div className="aspect-square bg-gradient-to-br from-emerald-500/10 to-emerald-500/30"></div>
<div className="aspect-square bg-gradient-to-br from-sky-500/10 to-sky-500/30"></div>
<div className="hidden sm:block aspect-square bg-gradient-to-br from-amber-500/10 to-amber-500/30"></div>
<div className="aspect-square bg-slate-50/80"></div>
<div className="aspect-square bg-slate-100/80"></div>
<div className="aspect-square bg-slate-50/80"></div>
<div className="hidden sm:block aspect-square bg-slate-100/80"></div>
<div className="aspect-square bg-slate-50/80"></div>
<div className="aspect-square bg-slate-100/80"></div>
<div className="aspect-square bg-slate-50/80"></div>
<div className="hidden sm:block aspect-square bg-slate-100/80"></div>
</div>
</div>
<div className="hidden sm:block absolute -bottom-10 -left-6 rounded-2xl border border-slate-200 bg-white shadow-lg px-4 py-3 max-w-xs">
<div className="flex items-center justify-between text-xs text-slate-500 mb-2">
<span>Índice de bem-estar</span>
<span className="inline-flex items-center gap-1 text-emerald-600 font-medium">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="18 15 12 9 6 15"></polyline>
</svg>
                    +18%
                  </span>
</div>
<div className="h-20 rounded-lg bg-gradient-to-r from-emerald-100 via-violet-100 to-sky-100"></div>
</div>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-4 lg:px-0 py-16 lg:py-20">
<div className="text-center max-w-3xl mx-auto mb-10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-4">
              Sem indicadores claros, o investimento em bem-estar vira
              <span className="text-violet-700">“matemática do desespero”</span>
</h2>
<p className="text-base text-slate-600">
              Transforme iniciativas desconectadas em uma estratégia única, mensurável
              e alinhada às prioridades do negócio.
            </p>
</div>
<div className="grid md:grid-cols-4 gap-6">

<article className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 flex flex-col justify-between">
<div className="space-y-3">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<span className="h-7 w-7 rounded-full bg-violet-100 text-violet-700 flex items-center justify-center text-xs font-medium">
                    +
                  </span>
                  Presenteísmo
                </h3>
<p className="text-base text-slate-600">
                  Pessoas presentes fisicamente, mas distantes emocionalmente, impactando
                  diretamente a produtividade.
                </p>
</div>
<button className="mt-4 text-xs font-medium text-violet-700 hover:text-violet-800 self-start">
                Quero resolver →
              </button>
</article>

<article className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 flex flex-col justify-between">
<div className="space-y-3">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<span className="h-7 w-7 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center text-xs font-medium">
                    +
                  </span>
                  Absenteísmo
                </h3>
<p className="text-base text-slate-600">
                  Ausências recorrentes, afastamentos e licenças que poderiam ser evitados
                  com ações preventivas.
                </p>
</div>
<button className="mt-4 text-xs font-medium text-violet-700 hover:text-violet-800 self-start">
                Quero resolver →
              </button>
</article>

<article className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 flex flex-col justify-between">
<div className="space-y-3">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<span className="h-7 w-7 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-medium">
                    +
                  </span>
                  Rotatividade
                </h3>
<p className="text-base text-slate-600">
                  Perda de talentos estratégicos e aumento de custos com reposições e
                  reonboardings constantes.
                </p>
</div>
<button className="mt-4 text-xs font-medium text-violet-700 hover:text-violet-800 self-start">
                Quero resolver →
              </button>
</article>

<article className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6 flex flex-col justify-between">
<div className="space-y-3">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 flex items-center gap-2">
<span className="h-7 w-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-medium">
                    +
                  </span>
                  Produtividade
                </h3>
<p className="text-base text-slate-600">
                  Dificuldade em converter esforços em resultados consistentes por falta de
                  visibilidade sobre o clima organizacional.
                </p>
</div>
<button className="mt-4 text-xs font-medium text-violet-700 hover:text-violet-800 self-start">
                Quero resolver →
              </button>
</article>
</div>
</section>

<section className="bg-white">
<div className="max-w-6xl mx-auto px-4 lg:px-0 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
<div className="relative">
<div className="rounded-3xl bg-gradient-to-tr from-violet-700 via-fuchsia-600 to-sky-500 p-6 sm:p-8 shadow-xl">
<div className="bg-white rounded-2xl p-4 sm:p-5 mb-4">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-slate-500">Vitalidade</span>
<span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="18 9 12 15 6 9"></polyline>
</svg>
                      +18%
                    </span>
</div>
<div className="h-20 rounded-xl bg-gradient-to-r from-emerald-100 via-sky-100 to-violet-100"></div>
</div>
<div className="bg-white/95 rounded-2xl p-4 sm:p-5">
<div className="flex items-center justify-between mb-3">
<span className="text-xs font-medium text-slate-500">Engajamento</span>
<span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-600">
<svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<polyline points="18 9 12 15 6 9"></polyline>
</svg>
                      +6%
                    </span>
</div>
<div className="space-y-2">
<div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-2/3 bg-violet-500 rounded-full"></div>
</div>
<div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-1/2 bg-sky-400 rounded-full"></div>
</div>
<div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full w-4/5 bg-emerald-400 rounded-full"></div>
</div>
</div>
</div>
</div>
<div className="hidden md:block absolute -bottom-10 -right-6 w-52 rounded-2xl bg-white shadow-lg border border-slate-200 p-3">
<p className="text-xs font-medium text-slate-600 mb-2">Segmentação por área</p>
<div className="space-y-1.5 text-xs text-slate-500">
<div className="flex items-center justify-between">
<span>Administração</span>
<span className="inline-flex items-center gap-1 text-emerald-600">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                      82
                    </span>
</div>
<div className="flex items-center justify-between">
<span>Vendas</span>
<span className="inline-flex items-center gap-1 text-sky-600">
<span className="h-1.5 w-1.5 rounded-full bg-sky-500"></span>
                      75
                    </span>
</div>
<div className="flex items-center justify-between">
<span>Indústria</span>
<span className="inline-flex items-center gap-1 text-amber-600">
<span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                      68
                    </span>
</div>
</div>
</div>
</div>
<div className="space-y-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
                Uma solução capaz de entender as necessidades humanas diante dos desafios do negócio
              </h2>
<ul className="space-y-4">
<li className="flex gap-3">
<div className="mt-1">
<svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">
                      Índice de Bem-estar e Felicidade Organizacional (IBFOZ)
                    </h3>
<p className="text-base text-slate-600">
                      Indicadores proprietários que traduzem a saúde emocional da sua organização
                      em métricas compreensíveis para o negócio.
                    </p>
</div>
</li>
<li className="flex gap-3">
<div className="mt-1">
<svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">
                      Análise preditiva de comportamentos
                    </h3>
<p className="text-base text-slate-600">
                      Algoritmos que ajudam a identificar riscos de burnout, rotatividade e
                      queda de engajamento antes que impactem os resultados.
                    </p>
</div>
</li>
<li className="flex gap-3">
<div className="mt-1">
<svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">
                      Segmentação organizacional inteligente
                    </h3>
<p className="text-base text-slate-600">
                      Visualize resultados por áreas, unidades, líderes e grupos específicos
                      para atuar com precisão.
                    </p>
</div>
</li>
<li className="flex gap-3">
<div className="mt-1">
<svg className="h-4 w-4 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="m9 12 2 2 4-4"></path>
</svg>
</div>
<div>
<h3 className="text-base font-semibold tracking-tight text-slate-900">
                      Comunidade de especialistas
                    </h3>
<p className="text-base text-slate-600">
                      Conte com uma rede de profissionais em bem-estar, saúde emocional e
                      cultura organizacional para apoiar você em cada etapa.
                    </p>
</div>
</li>
</ul>
<button className="inline-flex items-center justify-center rounded-full bg-violet-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-800 transition-colors">
                Solicite uma demonstração
              </button>
</div>
</div>
</section>

<section className="bg-slate-50" id="planos">
<div className="max-w-6xl mx-auto px-4 lg:px-0 py-16 lg:py-20">
<div className="text-center max-w-2xl mx-auto mb-10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-3">
                Planos
              </h2>
<p className="text-base text-slate-600">
                Configure nossos planos de acordo com o tamanho da sua empresa e o nível
                de profundidade desejado.
              </p>
</div>
<div className="grid md:grid-cols-3 gap-6 lg:gap-8">

<div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">Básico</h3>
<p className="text-xs text-slate-500 mb-4">Ideal para começar a medir o clima emocional.</p>
<div className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
                  R$ 0,00
                  <span className="text-xs font-normal text-slate-500">/ colaborador / mês</span>
</div>
<ul className="space-y-2 text-base text-slate-600 flex-1">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    Pesquisas trimestrais de bem-estar
                  </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    Relatórios básicos por área
                  </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-300"></span>
                    Suporte por e-mail
                  </li>
</ul>
<button className="mt-5 inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-white">
                  Conhecer o Básico
                </button>
</div>

<div className="flex flex-col rounded-2xl border border-violet-600 bg-white p-6 shadow-lg relative overflow-hidden">
<div className="absolute right-4 top-4 rounded-full bg-violet-700 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wide text-white">
                  Mais escolhido
                </div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-1">Essencial</h3>
<p className="text-xs text-slate-500 mb-4">
                  Indicadores completos de bem-estar, já integrados à gestão de pessoas.
                </p>
<div className="text-2xl font-semibold tracking-tight text-slate-900 mb-4">
                  R$ 0,00
                  <span className="text-xs font-normal text-slate-500">/ colaborador / mês</span>
</div>
<ul className="space-y-2 text-base text-slate-600 flex-1">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    Tudo do plano Básico
                  </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    Pesquisas mensais de bem-estar e clima
                  </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    Painéis por liderança e área
                  </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                    Suporte dedicado
                  </li>
</ul>
<button className="mt-5 inline-flex items-center justify-center rounded-full bg-violet-700 px-5 py-2 text-sm font-semibold text-white hover:bg-violet-800">
                  Conhecer o Essencial
                </button>
</div>

<div className="flex flex-col rounded-2xl border border-slate-900 bg-slate-900 text-white p-6 shadow-xl">
<h3 className="text-lg font-semibold tracking-tight mb-1">Profissional</h3>
<p className="text-xs text-slate-300 mb-4">
                  Para organizações que querem transformar bem-estar em resultado estratégico.
                </p>
<div className="text-2xl font-semibold tracking-tight mb-4">
                  Sob consulta
                </div>
<ul className="space-y-2 text-base text-slate-100 flex-1">
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Tudo do plano Essencial
                  </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Análises preditivas avançadas
                  </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Consultoria estratégica com especialistas
                  </li>
<li className="flex items-start gap-2">
<span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    Integrações com seus sistemas de RH
                  </li>
</ul>
<button className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-100">
                  Conhecer o Profissional
                </button>
</div>
</div>
</div>
</section>

<section className="bg-slate-900 text-white">
<div className="max-w-6xl mx-auto px-4 lg:px-0 py-16 lg:py-20">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
                O que nossos clientes dizem
              </h2>
<p className="text-base text-slate-300 max-w-2xl mx-auto">
                Empresas que já transformaram a experiência de trabalho com uma cultura
                de bem-estar consistente e mensurável.
              </p>
</div>
<div className="relative">

<div className="overflow-hidden" id="testemunhos-track">
<div className="flex transition-transform duration-500 ease-out">

<article className="min-w-full px-1">
<div className="grid md:grid-cols-3 gap-5">
<div className="md:col-span-1 rounded-2xl bg-slate-800/70 border border-slate-700 p-6 flex flex-col justify-between">
<div className="mb-4">
<svg className="h-6 w-6 text-violet-400 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H7a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2V5Z"></path>
<path d="M21 5h-2a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2V5Z"></path>
</svg>
<p className="text-base text-slate-100">
                            “A plataforma trouxe clareza sobre o que realmente impacta a
                            felicidade das pessoas aqui. Hoje, nossas decisões de gente são
                            muito mais seguras.”
                          </p>
</div>
<div className="flex items-center gap-3 mt-2">
<div className="h-10 w-10 rounded-full bg-slate-700"></div>
<div className="text-xs">
<p className="font-semibold tracking-tight text-white">Denise Savi</p>
<p className="text-slate-400">Diretora de Pessoas</p>
</div>
</div>
</div>
<div className="md:col-span-2 rounded-2xl bg-slate-800/70 border border-slate-700 p-6 flex flex-col justify-between">
<div className="mb-4">
<svg className="h-6 w-6 text-violet-400 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H7a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2V5Z"></path>
<path d="M21 5h-2a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2V5Z"></path>
</svg>
<p className="text-base text-slate-100">
                            “Conseguimos traduzir um tema subjetivo em indicadores concretos.
                            Isso mudou a forma como o board enxerga investimentos em
                            bem-estar.”
                          </p>
</div>
<div className="flex flex-wrap items-center gap-3 mt-2">
<div className="h-10 w-10 rounded-full bg-slate-700"></div>
<div className="text-xs">
<p className="font-semibold tracking-tight text-white">Paulo Amaral</p>
<p className="text-slate-400">CEO</p>
</div>
</div>
</div>
</div>
</article>

<article className="min-w-full px-1">
<div className="grid md:grid-cols-3 gap-5">
<div className="md:col-span-2 rounded-2xl bg-slate-800/70 border border-slate-700 p-6 flex flex-col justify-between">
<div className="mb-4">
<svg className="h-6 w-6 text-violet-400 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H7a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2V5Z"></path>
<path d="M21 5h-2a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2V5Z"></path>
</svg>
<p className="text-base text-slate-100">
                            “Os insights ajudaram a preparar nossas lideranças para conversas
                            difíceis com times que estavam em situações de alto estresse.”
                          </p>
</div>
<div className="flex flex-wrap items-center gap-3 mt-2">
<div className="h-10 w-10 rounded-full bg-slate-700"></div>
<div className="text-xs">
<p className="font-semibold tracking-tight text-white">Silvana Pieri</p>
<p className="text-slate-400">Gerente de Gente</p>
</div>
</div>
</div>
<div className="md:col-span-1 rounded-2xl bg-slate-800/70 border border-slate-700 p-6 flex flex-col justify-between">
<div className="mb-4">
<svg className="h-6 w-6 text-violet-400 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H7a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2V5Z"></path>
<path d="M21 5h-2a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2V5Z"></path>
</svg>
<p className="text-base text-slate-100">
                            “Os relatórios semanais viraram pauta fixa com o time executivo,
                            conectando diretamente bem-estar a resultados.”
                          </p>
</div>
<div className="flex items-center gap-3 mt-2">
<div className="h-10 w-10 rounded-full bg-slate-700"></div>
<div className="text-xs">
<p className="font-semibold tracking-tight text-white">Rafael Lima</p>
<p className="text-slate-400">Head de RH</p>
</div>
</div>
</div>
</div>
</article>

<article className="min-w-full px-1">
<div className="grid md:grid-cols-3 gap-5">
<div className="md:col-span-1 rounded-2xl bg-slate-800/70 border border-slate-700 p-6 flex flex-col justify-between">
<div className="mb-4">
<svg className="h-6 w-6 text-violet-400 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H7a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2V5Z"></path>
<path d="M21 5h-2a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2V5Z"></path>
</svg>
<p className="text-base text-slate-100">
                            “A jornada com a Zenbox foi fundamental para enxergar as pessoas
                            como ativo estratégico e não apenas custo.”
                          </p>
</div>
<div className="flex items-center gap-3 mt-2">
<div className="h-10 w-10 rounded-full bg-slate-700"></div>
<div className="text-xs">
<p className="font-semibold tracking-tight text-white">Mariana Cruz</p>
<p className="text-slate-400">Diretora de Operações</p>
</div>
</div>
</div>
<div className="md:col-span-2 rounded-2xl bg-slate-800/70 border border-slate-700 p-6 flex flex-col justify-between">
<div className="mb-4">
<svg className="h-6 w-6 text-violet-400 mb-3" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5H7a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2V5Z"></path>
<path d="M21 5h-2a4 4 0 0 0-4 4v2a4 4 0 0 0 4 4h2V5Z"></path>
</svg>
<p className="text-base text-slate-100">
                            “A combinação de dados e suporte humano ajudou a criar uma
                            narrativa de bem-estar alinhada à estratégia da empresa.”
                          </p>
</div>
<div className="flex flex-wrap items-center gap-3 mt-2">
<div className="h-10 w-10 rounded-full bg-slate-700"></div>
<div className="text-xs">
<p className="font-semibold tracking-tight text-white">João Ferreira</p>
<p className="text-slate-400">CFO</p>
</div>
</div>
</div>
</div>
</article>
</div>
</div>

<div className="flex justify-center mt-6 gap-2">
<button className="h-1.5 w-5 rounded-full bg-violet-500" data-testemunho-dot="0"></button>
<button className="h-1.5 w-1.5 rounded-full bg-slate-600" data-testemunho-dot="1"></button>
<button className="h-1.5 w-1.5 rounded-full bg-slate-600" data-testemunho-dot="2"></button>
</div>
</div>
</div>
</section>

<section className="bg-white border-y border-slate-200">
<div className="max-w-6xl mx-auto px-4 lg:px-0 py-12">
<div className="text-center mb-8">
<h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-900 mb-2">
                Organizações que acreditam em uma cultura de bem-estar e felicidade
                organizacional como vantagem competitiva
              </h2>
</div>
</div>

<div className="relative w-full overflow-hidden">
<div className="flex gap-12 items-center whitespace-nowrap will-change-transform" id="orgs-track">

<div className="flex gap-12 items-center px-8 py-6 shrink-0">
<div className="h-8 w-28 rounded bg-slate-100"></div>
<div className="h-8 w-24 rounded bg-slate-100"></div>
<div className="h-8 w-24 rounded bg-slate-100"></div>
<div className="h-8 w-28 rounded bg-slate-100"></div>
<div className="h-8 w-24 rounded bg-slate-100"></div>
<div className="h-8 w-28 rounded bg-slate-100"></div>
<div className="h-8 w-24 rounded bg-slate-100"></div>
<div className="h-8 w-24 rounded bg-slate-100"></div>
<div className="h-8 w-32 rounded bg-slate-100"></div>
</div>

<div className="flex gap-12 items-center px-8 py-6 shrink-0">
<div className="h-8 w-28 rounded bg-slate-100"></div>
<div className="h-8 w-24 rounded bg-slate-100"></div>
<div className="h-8 w-24 rounded bg-slate-100"></div>
<div className="h-8 w-28 rounded bg-slate-100"></div>
<div className="h-8 w-24 rounded bg-slate-100"></div>
<div className="h-8 w-28 rounded bg-slate-100"></div>
<div className="h-8 w-24 rounded bg-slate-100"></div>
<div className="h-8 w-24 rounded bg-slate-100"></div>
<div className="h-8 w-32 rounded bg-slate-100"></div>
</div>
</div>
</div>
<div className="max-w-6xl mx-auto px-4 lg:px-0 pb-12 pt-4">
<div className="text-center">
<p className="text-base text-slate-600 mb-4">
                Junte-se a dezenas de empresas que já transformaram a relação entre
                pessoas e trabalho.
              </p>
<button className="inline-flex items-center justify-center rounded-full bg-violet-700 px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-800">
                Solicite uma demonstração
              </button>
</div>
</div>
</section>

<section className="bg-slate-50">
<div className="max-w-6xl mx-auto px-4 lg:px-0 py-16 lg:py-20 text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-3">
              Faça parte da jornada Zenbox Life
            </h2>
<p className="text-base text-slate-600 mb-6 max-w-xl mx-auto">
              Dê o próximo passo para construir uma cultura de bem-estar sustentável,
              com dados reais e apoio especializado.
            </p>
<button className="inline-flex items-center justify-center rounded-full bg-violet-700 px-7 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-violet-800">
              Solicite uma demonstração
            </button>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-200">
<div className="max-w-6xl mx-auto px-4 lg:px-0 py-10">
<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
<div className="space-y-4 max-w-sm">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-full bg-violet-600 flex items-center justify-center text-white text-sm font-semibold tracking-tight">
                  Z
                </div>
<div className="flex flex-col">
<span className="text-base font-semibold tracking-tight text-white">
                    zenbox
                  </span>
<span className="text-xs text-slate-400 leading-tight">
                    quando o trabalho faz sentido
                  </span>
</div>
</div>
<p className="text-xs text-slate-400">
                Uma plataforma completa para medir, entender e potencializar o bem-estar
                e a felicidade das pessoas no trabalho.
              </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-xs">
<div>
<p className="font-semibold tracking-tight text-white mb-3">Solução</p>
<ul className="space-y-1.5 text-slate-400">
<li><a className="hover:text-slate-200" href="#">Funcionalidades</a></li>
<li><a className="hover:text-slate-200" href="#">Planos</a></li>
<li><a className="hover:text-slate-200" href="#">Perguntas frequentes</a></li>
</ul>
</div>
<div>
<p className="font-semibold tracking-tight text-white mb-3">Empresa</p>
<ul className="space-y-1.5 text-slate-400">
<li><a className="hover:text-slate-200" href="#">Sobre</a></li>
<li><a className="hover:text-slate-200" href="#">Carreiras</a></li>
<li><a className="hover:text-slate-200" href="#">Contato</a></li>
</ul>
</div>
<div>
<p className="font-semibold tracking-tight text-white mb-3">Legal</p>
<ul className="space-y-1.5 text-slate-400">
<li><a className="hover:text-slate-200" href="#">Política de privacidade</a></li>
<li><a className="hover:text-slate-200" href="#">Termos de uso</a></li>
</ul>
</div>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-slate-800 pt-4">
<p className="text-xs text-slate-500">
              © 2025 Zenbox. Todos os direitos reservados.
            </p>
<div className="flex items-center gap-3 text-slate-400">
<a className="h-7 w-7 rounded-full border border-slate-700 flex items-center justify-center hover:border-slate-500 hover:text-slate-200" href="#">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 1 1-8 8"></path>
<path d="M9 11h3v8"></path>
<path d="M9 8a3 3 0 0 1 6 0"></path>
</svg>
</a>
<a className="h-7 w-7 rounded-full border border-slate-700 flex items-center justify-center hover:border-slate-500 hover:text-slate-200" href="#">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M16 8a6 6 0 1 1-8 8"></path>
<circle cx="18" cy="6" r="1"></circle>
</svg>
</a>
<a className="h-7 w-7 rounded-full border border-slate-700 flex items-center justify-center hover:border-slate-500 hover:text-slate-200" href="#">
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 3v4"></path>
<path d="M3 5h4"></path>
<path d="M17 3v4"></path>
<path d="M15 5h4"></path>
<rect height="12" rx="2" width="18" x="3" y="9"></rect>
</svg>
</a>
</div>
</div>
</div>
</footer>
</div>



    </>
  );
}
