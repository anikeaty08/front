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



      // Init lucide icons
      document.addEventListener("DOMContentLoaded", function () {
        const icons = {
          "brain-icon": "brain-cog",
          "user-icon": "user",
          "spark-line-icon": "activity",
          "shield-icon": "shield",
          "activity-icon": "radar",
          "arrow-right-1": "arrow-right",
          "arrow-right-2": "arrow-right",
          "users-icon": "users",
          "graduation-icon": "graduation-cap",
          "arrow-right-small-1": "arrow-right",
          "arrow-right-small-2": "arrow-right",
          "message-circle-icon": "message-circle",
          "trophy-icon": "trophy",
          "file-text-icon": "file-text",
          "bell-icon": "bell",
          "star-icon": "star",
          "play-icon": "play",
          "file-check-icon": "file-check",
          "chat-icon": "messages-square",
          "sparkles-icon": "sparkles",
          "printer-icon": "printer",
          "badge-icon": "medal",
          "gamepad-icon": "gamepad-2",
          "cloud-upload-icon": "cloud-upload",
          "paperclip-icon": "paperclip",
          "line-chart-icon": "line-chart",
          "medal-icon": "medal",
          "puzzle-icon": "puzzle",
          "settings-icon": "settings-2",
          "plus-icon": "plus",
          "filter-icon": "sliders-horizontal",
          "filter-2-icon": "sliders-horizontal",
          "mic-icon": "mic",
          "messages-icon": "messages-square",
          "report-icon": "file-output",
          "calendar-icon": "calendar",
          "home-icon": "home",
          "family-icon": "users",
          "smile-icon": "smile",
          "teacher-icon": "square-pen"
        };

        for (const [id, iconName] of Object.entries(icons)) {
          const el = document.getElementById(id);
          if (el) {
            const svg = lucide.createElement(iconName, { size: 16, strokeWidth: 1.5 });
            el.appendChild(svg);
          }
        }
      });

      // Tab navigation (main)
      const mainTabButtons = document.querySelectorAll(".main-tab-btn");
      const mainTabs = {
        home: document.getElementById("tab-home"),
        pais: document.getElementById("tab-pais"),
        playmind: document.getElementById("tab-playmind"),
        prof: document.getElementById("tab-prof")
      };

      function setActiveMainTab(name) {
        Object.values(mainTabs).forEach((el) => el && el.classList.add("hidden"));
        if (mainTabs[name]) mainTabs[name].classList.remove("hidden");

        mainTabButtons.forEach((btn) => {
          const tab = btn.getAttribute("data-main-tab");
          if (tab === name) {
            btn.classList.add("text-slate-50");
          } else {
            btn.classList.remove("text-slate-50");
          }
        });
      }

      mainTabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const tab = btn.getAttribute("data-main-tab");
          setActiveMainTab(tab);
        });
      });

      setActiveMainTab("home");

      // Class tabs (professores)
      const classButtons = document.querySelectorAll(".class-tab-btn");
      const classSections = {
        "4B": document.getElementById("class-4B"),
        "5C": document.getElementById("class-5C"),
        "3B": document.getElementById("class-3B")
      };

      function setActiveClassTab(name) {
        Object.values(classSections).forEach((el) => el && el.classList.add("hidden"));
        if (classSections[name]) classSections[name].classList.remove("hidden");

        classButtons.forEach((btn) => {
          const tab = btn.getAttribute("data-class-tab");
          if (tab === name) {
            btn.classList.add("border-emerald-500");
          } else {
            btn.classList.remove("border-emerald-500");
          }
        });
      }

      setActiveClassTab("4B");
      classButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const tab = btn.getAttribute("data-class-tab");
          setActiveClassTab(tab);
        });
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
      
<div className="mx-auto max-w-md min-h-screen flex flex-col">

<header className="flex items-center justify-between px-4 pt-4 pb-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-cyan-400/10 border border-cyan-400/40 flex items-center justify-center">
<div className="text-cyan-300" id="brain-icon"></div>
</div>
<div className="flex flex-col leading-tight">
<span className="text-base font-semibold tracking-tight">MindKids</span>
<span className="text-[0.7rem] text-slate-300 uppercase tracking-[0.18em]">Emotion Pro+</span>
</div>
</div>
<button className="flex items-center gap-2 rounded-full bg-slate-800/80 border border-slate-700/70 px-3 py-1.5">
<span className="text-xs text-slate-200">Entrar</span>
<div className="w-4 h-4 text-slate-300" id="user-icon"></div>
</button>
</header>

<main className="flex-1 flex flex-col overflow-hidden">

<div className="px-4 pb-3">
<div className="flex items-center justify-between text-[0.7rem] text-slate-300 mb-1">
<span className="uppercase tracking-[0.18em]">Visão</span>
<span className="text-[0.7rem] text-slate-400">App Infantil &amp; Dashboard Profissional</span>
</div>
<div className="grid grid-cols-4 gap-1 rounded-full bg-slate-900/80 p-1 border border-slate-700/60">
<button className="main-tab-btn rounded-full bg-slate-800/80 text-xs font-medium tracking-tight py-1.5 text-slate-50" data-main-tab="home">
              Início
            </button>
<button className="main-tab-btn rounded-full text-xs font-medium tracking-tight py-1.5 text-slate-300" data-main-tab="pais">
              Pais
            </button>
<button className="main-tab-btn rounded-full text-xs font-medium tracking-tight py-1.5 text-slate-300" data-main-tab="playmind">
              PlayMind
            </button>
<button className="main-tab-btn rounded-full text-xs font-medium tracking-tight py-1.5 text-slate-300" data-main-tab="prof">
              Prof.
            </button>
</div>
</div>

<section className="flex-1 overflow-y-auto pb-24 space-y-6">

<div className="space-y-6 px-4 pt-2" id="tab-home">

<section className="rounded-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-950/90 border border-slate-700/80 p-4 relative overflow-hidden">
<div className="pointer-events-none absolute inset-0 opacity-60">
<div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl"></div>
<div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl"></div>
</div>
<div className="relative space-y-2">
<p className="text-[0.7rem] uppercase tracking-[0.18em] text-cyan-300/80">Painel Inicial</p>
<h1 className="text-xl font-semibold tracking-tight">
                  Mapeie emoções, desempenho e bem-estar em um só lugar.
                </h1>
<p className="text-sm text-slate-300">
                  Navegação 100% mobile-first com acesso rápido para Pais, Professores, Direção e App Infantil PlayMind.
                </p>
<div className="mt-3 grid grid-cols-3 gap-2 text-xs">
<div className="rounded-xl bg-slate-900/80 border border-slate-700/70 p-2 flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<div className="w-3.5 h-3.5 text-cyan-300" id="spark-line-icon"></div>
<span className="text-[0.7rem] text-slate-200">Insights</span>
</div>
<span className="text-[0.7rem] text-slate-400">
                      Emoções em tempo real com correlações acadêmicas.
                    </span>
</div>
<div className="rounded-xl bg-slate-900/80 border border-slate-700/70 p-2 flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<div className="w-3.5 h-3.5 text-violet-300" id="shield-icon"></div>
<span className="text-[0.7rem] text-slate-200">MindKids</span>
</div>
<span className="text-[0.7rem] text-slate-400">
                      App Infantil lúdico conectado ao Dashboard Profissional.
                    </span>
</div>
<div className="rounded-xl bg-slate-900/80 border border-slate-700/70 p-2 flex flex-col gap-1">
<div className="flex items-center gap-1.5">
<div className="w-3.5 h-3.5 text-emerald-300" id="activity-icon"></div>
<span className="text-[0.7rem] text-slate-200">Alertas</span>
</div>
<span className="text-[0.7rem] text-slate-400">
                      Notificações inteligentes de risco emocional e rendimento.
                    </span>
</div>
</div>
<div className="mt-3 flex gap-2">
<button className="flex-1 rounded-xl bg-cyan-500/90 hover:bg-cyan-400 text-xs font-medium tracking-tight py-2 flex items-center justify-center gap-1.5">
<span>Entrar como Pai / Mãe</span>
<div className="w-3.5 h-3.5" id="arrow-right-1"></div>
</button>
<button className="flex-1 rounded-xl bg-violet-500/90 hover:bg-violet-400 text-xs font-medium tracking-tight py-2 flex items-center justify-center gap-1.5">
<span>Entrar como Professor</span>
<div className="w-3.5 h-3.5" id="arrow-right-2"></div>
</button>
</div>
</div>
</section>

<section className="space-y-3">
<div className="flex items-center justify-between">
<h2 className="text-sm font-semibold tracking-tight">Acessos Rápidos</h2>
<span className="text-[0.7rem] text-slate-400">Escolha o seu perfil</span>
</div>
<div className="grid grid-cols-2 gap-3">

<button className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 flex flex-col items-start gap-2">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-cyan-500/20 flex items-center justify-center">
<div className="w-4 h-4 text-cyan-300" id="users-icon"></div>
</div>
<span className="text-xs font-medium">Espaço dos Pais</span>
</div>
<p className="text-xs text-slate-300">
                    Acompanhe desempenho acadêmico, emocional e histórico do seu filho em tempo real.
                  </p>
<span className="mt-1 inline-flex items-center gap-1 text-[0.7rem] text-cyan-300">
                    Ver detalhes
                    <div className="w-3 h-3" id="arrow-right-small-1"></div>
</span>
</button>

<button className="rounded-2xl bg-slate-900/90 border border-violet-600/70 p-3 flex flex-col items-start gap-2">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-full bg-violet-500/25 flex items-center justify-center">
<div className="w-4 h-4 text-violet-300" id="graduation-icon"></div>
</div>
<span className="text-xs font-medium">Espaço dos Professores</span>
</div>
<p className="text-xs text-slate-300">
                    Analise turmas, identifique riscos por cor e gere relatórios personalizados em um toque.
                  </p>
<span className="mt-1 inline-flex items-center gap-1 text-[0.7rem] text-violet-300">
                    Entrar no painel
                    <div className="w-3 h-3" id="arrow-right-small-2"></div>
</span>
</button>
</div>
</section>

<section className="space-y-3">
<div className="flex items-center justify-between">
<h2 className="text-sm font-semibold tracking-tight">Funcionalidades-Chave</h2>
<span className="text-[0.7rem] text-slate-400">Visão geral</span>
</div>
<div className="space-y-2">
<div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-500/15 flex items-center justify-center">
<div className="w-4 h-4 text-emerald-300" id="message-circle-icon"></div>
</div>
<div className="flex-1">
<p className="text-xs font-medium">Feedback em Tempo Real</p>
<p className="text-xs text-slate-300">
                      Pais, alunos e professores trocam dúvidas, sugestões e retornos instantâneos.
                    </p>
</div>
</div>
<div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-amber-500/15 flex items-center justify-center">
<div className="w-4 h-4 text-amber-300" id="trophy-icon"></div>
</div>
<div className="flex-1">
<p className="text-xs font-medium">Gamificação Inteligente</p>
<p className="text-xs text-slate-300">
                      Medalhas, conquistas e missões para engajar alunos e incentivar participação da família.
                    </p>
</div>
</div>
<div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-sky-500/15 flex items-center justify-center">
<div className="w-4 h-4 text-sky-300" id="file-text-icon"></div>
</div>
<div className="flex-1">
<p className="text-xs font-medium">Relatórios &amp; Calendário</p>
<p className="text-xs text-slate-300">
                      Relatórios personalizados, calendário de eventos, provas, terapias e lembretes em um só fluxo.
                    </p>
</div>
</div>
</div>
</section>
</div>

<div className="hidden space-y-6 px-4 pt-2" id="tab-pais">

<section className="rounded-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-950 border border-slate-700/80 p-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[0.7rem] uppercase tracking-[0.18em] text-cyan-300/80">Espaço dos Pais</span>
<h2 className="text-sm font-semibold tracking-tight mt-1">
                    Panorama emocional, acadêmico e comportamental.
                  </h2>
</div>
<button className="rounded-full bg-slate-900/90 border border-slate-700/80 px-3 py-1 flex items-center gap-1.5 text-[0.7rem]">
<div className="w-3.5 h-3.5 text-cyan-300" id="bell-icon"></div>
<span>Alertas</span>
</button>
</div>

<div className="space-y-2">
<p className="text-[0.7rem] text-slate-300 uppercase tracking-[0.18em]">Selecione o filho</p>
<div className="flex gap-3 overflow-x-auto no-scrollbar pb-1">

<button className="min-w-[9rem] rounded-2xl bg-slate-900 border border-cyan-500/60 p-3 flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-cyan-500/20 flex items-center justify-center text-xs font-medium tracking-tight">
                        L
                      </div>
<div className="flex flex-col leading-tight">
<span className="text-xs font-medium">Lucas Silva</span>
<span className="text-[0.65rem] text-slate-400">Matr. 202301</span>
</div>
</div>
<div className="mt-1 grid grid-cols-2 gap-1 text-[0.65rem] text-slate-300">
<span>Acadêmico: <span className="text-emerald-300">89%</span></span>
<span>Emoções: <span className="text-emerald-300">92%</span></span>
</div>
<div className="mt-1 h-6 rounded-lg bg-slate-800/90 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-[70%] bg-gradient-to-r from-cyan-400/70 via-emerald-400/80 to-emerald-300/80"></div>
</div>
</button>

<button className="min-w-[9rem] rounded-2xl bg-slate-900 border border-slate-700 p-3 flex flex-col gap-1">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-violet-500/25 flex items-center justify-center text-xs font-medium tracking-tight">
                        M
                      </div>
<div className="flex flex-col leading-tight">
<span className="text-xs font-medium">Maria Souza</span>
<span className="text-[0.65rem] text-slate-400">Matr. 202315</span>
</div>
</div>
<div className="mt-1 grid grid-cols-2 gap-1 text-[0.65rem] text-slate-300">
<span>Acadêmico: <span className="text-amber-300">76%</span></span>
<span>Emoções: <span className="text-amber-300">68%</span></span>
</div>
<div className="mt-1 h-6 rounded-lg bg-slate-800/90 relative overflow-hidden">
<div className="absolute inset-y-0 left-0 w-[55%] bg-gradient-to-r from-amber-400/80 to-rose-400/80"></div>
</div>
</button>
</div>
</div>
</section>

<section className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight">Panorama Geral</h3>
<span className="text-[0.7rem] text-slate-400">Atualizado em tempo real</span>
</div>
<div className="grid grid-cols-2 gap-2">

<div className="rounded-2xl bg-slate-900/90 border border-violet-500/60 p-3 flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="text-xs font-medium">Bem-estar Emocional</span>
<span className="text-[0.7rem] text-violet-300">92%</span>
</div>
<div className="flex items-center gap-2 mt-1">
<div className="h-10 w-10 rounded-full border-[0.2rem] border-violet-500/40 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-violet-200">A+</span>
</div>
<p className="text-[0.7rem] text-slate-300">
                      Semana estável, sem sinais de risco.
                    </p>
</div>
</div>

<div className="rounded-2xl bg-slate-900/90 border border-emerald-500/60 p-3 flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="text-xs font-medium">Desempenho Acadêmico</span>
<span className="text-[0.7rem] text-emerald-300">89%</span>
</div>
<div className="space-y-1 mt-1">
<div className="flex items-center justify-between text-[0.7rem] text-slate-300">
<span>Matemática</span>
<span className="text-emerald-300">9.0</span>
</div>
<div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-[80%] bg-emerald-400/90"></div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-300">
<span>Português</span>
<span className="text-emerald-300">8.8</span>
</div>
<div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-[75%] bg-emerald-300/80"></div>
</div>
</div>
</div>

<div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="text-xs font-medium">Presença</span>
<span className="text-[0.7rem] text-emerald-300">97%</span>
</div>
<div className="mt-1 grid grid-cols-7 gap-0.5">

<div className="h-3 rounded bg-emerald-400/80"></div>
<div className="h-3 rounded bg-emerald-500/80"></div>
<div className="h-3 rounded bg-emerald-300/70"></div>
<div className="h-3 rounded bg-amber-400/80"></div>
<div className="h-3 rounded bg-emerald-500/90"></div>
<div className="h-3 rounded bg-emerald-400/80"></div>
<div className="h-3 rounded bg-emerald-300/70"></div>
</div>
<p className="text-[0.7rem] text-slate-300 mt-1">
                    Ausência pontual registrada na última semana.
                  </p>
</div>

<div className="rounded-2xl bg-slate-900/90 border border-amber-500/80 p-3 flex flex-col gap-1.5">
<div className="flex items-center justify-between">
<span className="text-xs font-medium">Comportamento</span>
<span className="text-[0.7rem] text-amber-300">78%</span>
</div>
<div className="mt-1 flex items-center gap-2">
<div className="h-10 w-10 rounded-full border-[0.2rem] border-amber-500/50 flex items-center justify-center">
<span className="text-xs font-semibold tracking-tight text-amber-200">B</span>
</div>
<p className="text-[0.7rem] text-slate-300">
                      Pequenas dificuldades de foco em matemática. Sugestão: rotina de estudos guiada.
                    </p>
</div>
</div>
</div>
</section>

<section className="space-y-2">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight">Linha do Tempo</h3>
<button className="flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-700/80 px-2.5 py-1 text-[0.7rem]">
<span>Filtrar</span>
<div className="w-3.5 h-3.5 text-slate-300" id="filter-icon"></div>
</button>
</div>
<div className="space-y-2">

<div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 flex gap-3">
<div className="flex flex-col items-center">
<span className="text-[0.65rem] text-slate-400">HOJE</span>
<div className="mt-1 h-6 w-[0.12rem] rounded-full bg-cyan-400/60"></div>
</div>
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="w-3.5 h-3.5 text-amber-300" id="star-icon"></div>
<span className="text-xs font-medium">Conquista: Medalha Foco Estelar</span>
</div>
<span className="text-[0.65rem] text-emerald-300">+18% foco</span>
</div>
<p className="text-[0.7rem] text-slate-300">
                      Professor registrou alta concentração em leitura durante 30 minutos.
                    </p>
<button className="mt-1 flex items-center gap-1 text-[0.7rem] text-cyan-300">
<div className="w-3 h-3" id="play-icon"></div>
<span>Ouvir áudio do professor (0:24)</span>
</button>
</div>
</div>

<div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 flex gap-3">
<div className="flex flex-col items-center">
<span className="text-[0.65rem] text-slate-400">ONTEM</span>
<div className="mt-1 h-6 w-[0.12rem] rounded-full bg-emerald-400/60"></div>
</div>
<div className="flex-1 space-y-1">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1.5">
<div className="w-3.5 h-3.5 text-emerald-300" id="file-check-icon"></div>
<span className="text-xs font-medium">Prova de Matemática – 9.2</span>
</div>
<span className="text-[0.65rem] text-slate-300">11:20</span>
</div>
<p className="text-[0.7rem] text-slate-300">
                      Desempenho acima da média da turma. Emoções registradas: calmo, confiante.
                    </p>
</div>
</div>
</div>
</section>

<section className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight">Comunicação &amp; Apoio</h3>
</div>
<div className="space-y-2">

<div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
<div className="w-4 h-4 text-emerald-300" id="chat-icon"></div>
</div>
<div className="flex-1">
<p className="text-xs font-medium">Chat Direto</p>
<p className="text-[0.7rem] text-slate-300">
                      Converse com professor e psicopedagogo, envie dúvidas e arquivos.
                    </p>
</div>
<button className="rounded-full bg-emerald-500/90 text-[0.7rem] font-medium px-2.5 py-1">
                    Abrir
                  </button>
</div>

<div className="rounded-2xl bg-slate-900/90 border border-cyan-500/70 p-3 space-y-1.5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-4 h-4 text-cyan-300" id="sparkles-icon"></div>
<p className="text-xs font-medium">Recursos Personalizados</p>
</div>
<span className="text-[0.7rem] text-cyan-300">Sugestão de IA</span>
</div>
<p className="text-[0.7rem] text-slate-200">
                    Indicadores mostram leve queda de foco em dias de prova.
                  </p>
<p className="text-[0.7rem] text-slate-300">
                    Recomenda-se 10 minutos de mindfulness antes dos estudos e pausas a cada 25 minutos.
                  </p>
<div className="flex gap-2 mt-1.5">
<button className="flex-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-[0.7rem] py-1.5">
                      Ver exercícios guiados
                    </button>
<button className="flex-1 rounded-full bg-slate-800/90 border border-slate-700/80 text-[0.7rem] py-1.5">
                      Artigos para a família
                    </button>
</div>
</div>
</div>
</section>

<section className="space-y-3 mb-4">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight">Relatórios &amp; Gamificação</h3>
</div>
<div className="space-y-2">
<div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-sky-500/20 flex items-center justify-center">
<div className="w-4 h-4 text-sky-300" id="printer-icon"></div>
</div>
<div>
<p className="text-xs font-medium">Relatórios Personalizados</p>
<p className="text-[0.7rem] text-slate-300">
                        Geração em PDF com notas, gráficos e comentários.
                      </p>
</div>
</div>
<button className="rounded-full bg-sky-500/90 text-[0.7rem] font-medium px-2.5 py-1">
                    Gerar
                  </button>
</div>
<div className="rounded-2xl bg-slate-900/90 border border-emerald-500/60 p-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
<div className="w-4 h-4 text-emerald-300" id="badge-icon"></div>
</div>
<div>
<p className="text-xs font-medium">Pai/Mãe Estelar</p>
<p className="text-[0.7rem] text-slate-300">
                        7 semanas consecutivas acompanhando o painel do Lucas.
                      </p>
</div>
</div>
<span className="text-[0.7rem] text-emerald-300">Nível 2</span>
</div>
</div>
</section>
</div>

<div className="hidden space-y-6 px-4 pt-2" id="tab-playmind">

<section className="rounded-2xl bg-gradient-to-br from-slate-800/90 via-slate-900 to-slate-950 border border-slate-700/80 p-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[0.7rem] uppercase tracking-[0.18em] text-emerald-300/80">PlayMind</span>
<h2 className="text-sm font-semibold tracking-tight mt-1">
                    App Infantil conectado ao MindKids Dashboard.
                  </h2>
</div>
<div className="rounded-full bg-slate-900/90 border border-emerald-400/60 px-3 py-1 text-[0.7rem] flex items-center gap-1">
<div className="w-3.5 h-3.5 text-emerald-300" id="gamepad-icon"></div>
<span>Modo Criança</span>
</div>
</div>
<p className="text-[0.7rem] text-slate-300">
                Aqui as crianças registram emoções, jogam, conquistam medalhas e enviam produções (desenhos, áudios) que alimentam o painel dos pais e professores.
              </p>
</section>

<section className="space-y-3">
<h3 className="text-sm font-semibold tracking-tight">PlayMind Mobile</h3>
<div className="rounded-2xl bg-slate-900/90 border border-sky-500/60 p-3 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-4 h-4 text-sky-300" id="cloud-upload-icon"></div>
<p className="text-xs font-medium">Envio de Documentos</p>
</div>
<span className="text-[0.7rem] text-slate-300">Histórico clínico, laudos, etc.</span>
</div>
<p className="text-[0.7rem] text-slate-300">
                  Pais e profissionais podem anexar relatórios clínicos, avaliações e documentos importantes direto do celular.
                </p>
<button className="w-full rounded-xl bg-slate-800/90 border border-slate-600/80 text-[0.7rem] py-1.5 flex items-center justify-center gap-1.5">
<div className="w-3.5 h-3.5 text-sky-300" id="paperclip-icon"></div>
<span>Selecionar arquivo</span>
</button>
</div>

<div className="rounded-2xl bg-slate-900/90 border border-violet-500/60 p-3 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-4 h-4 text-violet-300" id="line-chart-icon"></div>
<p className="text-xs font-medium">Análises PlayMind</p>
</div>
<span className="text-[0.7rem] text-violet-300">Cross-data</span>
</div>
<p className="text-[0.7rem] text-slate-300">
                  Cruza dados de jogos, humor, interação e tarefas para gerar um panorama do bem-estar psicológico.
                </p>
<div className="space-y-1">
<div className="flex items-center justify-between text-[0.7rem] text-slate-300">
<span>Humor x Rendimento</span>
<span className="text-emerald-300">Correlação +18%</span>
</div>
<div className="h-2 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-[70%] bg-gradient-to-r from-violet-400 via-sky-400 to-emerald-400"></div>
</div>
</div>
</div>
</section>

<section className="space-y-3 mb-4">
<h3 className="text-sm font-semibold tracking-tight">Gamificação Infantil</h3>
<div className="grid grid-cols-2 gap-2">
<div className="rounded-2xl bg-slate-900/90 border border-emerald-500/60 p-3 space-y-1">
<div className="flex items-center gap-2">
<div className="w-4 h-4 text-emerald-300" id="medal-icon"></div>
<p className="text-xs font-medium">Medalhas</p>
</div>
<p className="text-[0.7rem] text-slate-300">
                    Conquistas por registrar emoções, concluir missões de autocuidado e colaborar em sala.
                  </p>
</div>
<div className="rounded-2xl bg-slate-900/90 border border-amber-500/60 p-3 space-y-1">
<div className="flex items-center gap-2">
<div className="w-4 h-4 text-amber-300" id="puzzle-icon"></div>
<p className="text-xs font-medium">Jogos Educativos</p>
</div>
<p className="text-[0.7rem] text-slate-300">
                    Atividades lúdicas conectadas às metas psicopedagógicas.
                  </p>
</div>
</div>
</section>
</div>

<div className="hidden space-y-6 px-4 pt-2" id="tab-prof">

<section className="rounded-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/95 to-slate-950 border border-violet-500/70 p-4 space-y-3">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-[0.7rem] uppercase tracking-[0.18em] text-violet-300/80">Espaço dos Professores</span>
<h2 className="text-sm font-semibold tracking-tight mt-1">
                    Gestão de turmas, cores de risco e relatórios em segundos.
                  </h2>
</div>
<button className="rounded-full bg-slate-900/90 border border-violet-500/70 px-3 py-1 flex items-center gap-1.5 text-[0.7rem]">
<div className="w-3.5 h-3.5 text-violet-300" id="settings-icon"></div>
<span>Config.</span>
</button>
</div>
<p className="text-[0.7rem] text-slate-300">
                Mapeie o desempenho acadêmico e emocional de cada turma com visualização por cores:
                <span className="text-emerald-300">Verde</span> (seguro), 
                <span className="text-amber-300">Laranja</span> (atenção),
                <span className="text-rose-300">Vermelho</span> (risco).
              </p>
</section>

<section className="space-y-3">
<div className="flex items-center justify-between">
<h3 className="text-sm font-semibold tracking-tight">Turmas</h3>
<button className="flex items-center gap-1 rounded-full bg-slate-900/90 border border-slate-700/80 px-2.5 py-1 text-[0.7rem]">
<div className="w-3.5 h-3.5 text-violet-300" id="plus-icon"></div>
<span>Nova turma</span>
</button>
</div>

<div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
<button className="class-tab-btn rounded-full bg-slate-900/90 border border-emerald-500/70 px-3 py-1.5 text-[0.7rem] flex items-center gap-1.5" data-class-tab="4B">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>4º ano B</span>
<span className="text-emerald-300">77%</span>
</button>
<button className="class-tab-btn rounded-full bg-slate-900/90 border border-emerald-500/70 px-3 py-1.5 text-[0.7rem] flex items-center gap-1.5" data-class-tab="5C">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>5º ano C</span>
<span className="text-emerald-300">87%</span>
</button>
<button className="class-tab-btn rounded-full bg-slate-900/90 border border-emerald-500/70 px-3 py-1.5 text-[0.7rem] flex items-center gap-1.5" data-class-tab="3B">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span>3º ano B</span>
<span className="text-emerald-300">100%</span>
</button>
</div>
</section>

<section className="space-y-4" id="class-4B">

<div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 space-y-2">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-medium">Turma 4º ano B</p>
<p className="text-[0.7rem] text-slate-400">22 alunos | Manhã</p>
</div>
<div className="text-right">
<p className="text-[0.7rem] text-emerald-300 font-medium">Desempenho geral: 77%</p>
<p className="text-[0.7rem] text-slate-400">Status: Atenção moderada</p>
</div>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-[77%] bg-gradient-to-r from-emerald-400 via-amber-400 to-rose-400"></div>
</div>
<div className="flex items-center justify-between text-[0.7rem] text-slate-300">
<span>Acadêmico médio: <span className="text-emerald-300">7,9</span></span>
<span>Emoções equilibradas em <span className="text-emerald-300">68%</span></span>
</div>
</div>

<div className="grid grid-cols-3 gap-2">
<div className="rounded-2xl bg-slate-900/90 border border-emerald-500/70 p-2.5 space-y-1">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-emerald-400"></span>
<span className="text-[0.7rem] font-medium">Verde</span>
</div>
<p className="text-[0.7rem] text-slate-300">
                    14 alunos estáveis, boa média e engajamento.
                  </p>
</div>
<div className="rounded-2xl bg-slate-900/90 border border-amber-500/80 p-2.5 space-y-1">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-amber-400"></span>
<span className="text-[0.7rem] font-medium">Laranja</span>
</div>
<p className="text-[0.7rem] text-slate-300">
                    6 alunos com queda recente de foco ou notas.
                  </p>
</div>
<div className="rounded-2xl bg-slate-900/90 border border-rose-500/80 p-2.5 space-y-1">
<div className="flex items-center gap-1.5">
<span className="h-2 w-2 rounded-full bg-rose-400"></span>
<span className="text-[0.7rem] font-medium">Vermelho</span>
</div>
<p className="text-[0.7rem] text-slate-300">
                    2 alunos sob risco emocional/ acadêmico.
                  </p>
</div>
</div>

<div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 space-y-2">
<div className="flex items-center justify-between">
<p className="text-xs font-medium">Alunos da turma</p>
<button className="flex items-center gap-1 text-[0.7rem] text-slate-300">
<div className="w-3.5 h-3.5" id="filter-2-icon"></div>
<span>Filtrar por risco</span>
</button>
</div>
<div className="space-y-1.5">

<button className="w-full flex items-center justify-between rounded-xl bg-slate-800/70 border border-slate-700/80 px-2.5 py-1.5">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-emerald-500/25 flex items-center justify-center text-[0.65rem] font-medium">
                        AS
                      </div>
<div className="flex flex-col leading-tight">
<span className="text-[0.7rem] font-medium">Ana Souza</span>
<span className="text-[0.65rem] text-slate-400">Matr. 203012 • Verde</span>
</div>
</div>
<div className="text-right text-[0.65rem] text-slate-300">
<p>Acad.: <span className="text-emerald-300">9,1</span></p>
<p>Emoções: <span className="text-emerald-300">95%</span></p>
</div>
</button>

<button className="w-full flex items-center justify-between rounded-xl bg-slate-800/70 border border-amber-500/70 px-2.5 py-1.5">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-amber-500/25 flex items-center justify-center text-[0.65rem] font-medium">
                        JP
                      </div>
<div className="flex flex-col leading-tight">
<span className="text-[0.7rem] font-medium">João Pedro</span>
<span className="text-[0.65rem] text-amber-300">Matr. 203021 • Laranja</span>
</div>
</div>
<div className="text-right text-[0.65rem] text-slate-300">
<p>Acad.: <span className="text-amber-300">6,8</span></p>
<p>Emoções: <span className="text-amber-300">64%</span></p>
</div>
</button>

<button className="w-full flex items-center justify-between rounded-xl bg-slate-800/70 border border-rose-500/80 px-2.5 py-1.5">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-full bg-rose-500/25 flex items-center justify-center text-[0.65rem] font-medium">
                        LM
                      </div>
<div className="flex flex-col leading-tight">
<span className="text-[0.7rem] font-medium">Luiza Martins</span>
<span className="text-[0.65rem] text-rose-300">Matr. 203034 • Vermelho</span>
</div>
</div>
<div className="text-right text-[0.65rem] text-slate-300">
<p>Acad.: <span className="text-rose-300">5,4</span></p>
<p>Emoções: <span className="text-rose-300">52%</span></p>
</div>
</button>
</div>
</div>

<div className="space-y-3 mb-4">
<h3 className="text-sm font-semibold tracking-tight">Ferramentas da Turma</h3>
<div className="grid grid-cols-2 gap-2">

<button className="rounded-2xl bg-slate-900/90 border border-emerald-500/60 p-3 space-y-1 text-left">
<div className="flex items-center gap-2">
<div className="w-4 h-4 text-emerald-300" id="mic-icon"></div>
<p className="text-xs font-medium">Feedback em Tempo Real</p>
</div>
<p className="text-[0.7rem] text-slate-300">
                      Envie devolutivas individuais ou para a turma em áudio ou texto.
                    </p>
</button>

<button className="rounded-2xl bg-slate-900/90 border border-sky-500/60 p-3 space-y-1 text-left">
<div className="flex items-center gap-2">
<div className="w-4 h-4 text-sky-300" id="messages-icon"></div>
<p className="text-xs font-medium">Comunicação Direta</p>
</div>
<p className="text-[0.7rem] text-slate-300">
                      Chat com pais e coordenação, com histórico por aluno.
                    </p>
</button>

<button className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 space-y-1 text-left">
<div className="flex items-center gap-2">
<div className="w-4 h-4 text-violet-300" id="report-icon"></div>
<p className="text-xs font-medium">Relatórios da Turma</p>
</div>
<p className="text-[0.7rem] text-slate-300">
                      Gere relatórios consolidados para reuniões e conselhos.
                    </p>
</button>

<button className="rounded-2xl bg-slate-900/90 border border-amber-500/60 p-3 space-y-1 text-left">
<div className="flex items-center gap-2">
<div className="w-4 h-4 text-amber-300" id="calendar-icon"></div>
<p className="text-xs font-medium">Calendário de Eventos</p>
</div>
<p className="text-[0.7rem] text-slate-300">
                      Provas, projetos, reuniões e atendimentos psicopedagógicos.
                    </p>
</button>
</div>
</div>
</section>

<section className="hidden space-y-4 mb-4" id="class-5C">
<div className="rounded-2xl bg-slate-900/90 border border-slate-700/80 p-3 space-y-2">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-medium">Turma 5º ano C</p>
<p className="text-[0.7rem] text-slate-400">24 alunos | Tarde</p>
</div>
<div className="text-right">
<p className="text-[0.7rem] text-emerald-300 font-medium">Desempenho geral: 87%</p>
<p className="text-[0.7rem] text-slate-400">Status: Estável</p>
</div>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-[87%] bg-gradient-to-r from-emerald-400 via-emerald-300 to-cyan-300"></div>
</div>
</div>
<p className="text-[0.7rem] text-slate-300">
                Configure aqui os mesmos blocos de análise da turma 4º ano B (cores, alunos, relatórios), adaptando para os dados do 5º ano C.
              </p>
</section>
<section className="hidden space-y-4 mb-4" id="class-3B">
<div className="rounded-2xl bg-slate-900/90 border border-emerald-500/80 p-3 space-y-2">
<div className="flex items-center justify-between">
<div>
<p className="text-xs font-medium">Turma 3º ano B</p>
<p className="text-[0.7rem] text-slate-400">18 alunos | Integral</p>
</div>
<div className="text-right">
<p className="text-[0.7rem] text-emerald-300 font-medium">Desempenho geral: 100%</p>
<p className="text-[0.7rem] text-emerald-300">Status: Excelente</p>
</div>
</div>
<div className="mt-1 h-1.5 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-200"></div>
</div>
</div>
<p className="text-[0.7rem] text-slate-300">
                Turma com todos os indicadores em verde. Ideal para replicar boas práticas e compartilhar com outras turmas.
              </p>
</section>
</div>
</section>

<nav className="fixed bottom-0 left-0 right-0 border-t border-slate-800/90 bg-slate-950/95 backdrop-blur-md">
<div className="mx-auto max-w-md flex items-center justify-between px-6 py-2">
<button className="main-tab-btn flex flex-col items-center gap-0.5" data-main-tab="home">
<div className="w-4 h-4 text-slate-200" id="home-icon"></div>
<span className="text-[0.65rem] text-slate-100">Início</span>
</button>
<button className="main-tab-btn flex flex-col items-center gap-0.5" data-main-tab="pais">
<div className="w-4 h-4 text-slate-300" id="family-icon"></div>
<span className="text-[0.65rem] text-slate-300">Pais</span>
</button>
<button className="main-tab-btn flex flex-col items-center gap-0.5" data-main-tab="playmind">
<div className="w-4 h-4 text-slate-300" id="smile-icon"></div>
<span className="text-[0.65rem] text-slate-300">PlayMind</span>
</button>
<button className="main-tab-btn flex flex-col items-center gap-0.5" data-main-tab="prof">
<div className="w-4 h-4 text-slate-300" id="teacher-icon"></div>
<span className="text-[0.65rem] text-slate-300">Prof.</span>
</button>
</div>
</nav>
</main>
</div>


    </>
  );
}
