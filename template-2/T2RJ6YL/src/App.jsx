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
      

<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:4062,&quot;w&quot;:1425,&quot;h&quot;:910,&quot;abs_x&quot;:480,&quot;abs_y&quot;:4105}" className="pointer-events-none fixed inset-0 -z-10">
<div bis_size="{&quot;x&quot;:0,&quot;y&quot;:4062,&quot;w&quot;:1425,&quot;h&quot;:910,&quot;abs_x&quot;:480,&quot;abs_y&quot;:4105}" className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950 to-slate-950"></div>
<div bis_size="{&quot;x&quot;:232,&quot;y&quot;:3971,&quot;w&quot;:960,&quot;h&quot;:960,&quot;abs_x&quot;:712,&quot;abs_y&quot;:4014}" className="absolute left-1/2 top-[-10%] h-[60rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,_rgba(139,92,246,0.12),_transparent_60%)] blur-3xl"></div>
<div bis_size="{&quot;x&quot;:1070,&quot;y&quot;:4365,&quot;w&quot;:640,&quot;h&quot;:640,&quot;abs_x&quot;:1550,&quot;abs_y&quot;:4408}" className="absolute right-[-20%] top-1/3 h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.12),_transparent_60%)] blur-3xl"></div>
</div>

<header bis_size="{&quot;x&quot;:0,&quot;y&quot;:4062,&quot;w&quot;:1425,&quot;h&quot;:64,&quot;abs_x&quot;:480,&quot;abs_y&quot;:4105}" className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
<div bis_size="{&quot;x&quot;:72,&quot;y&quot;:4062,&quot;w&quot;:1280,&quot;h&quot;:64,&quot;abs_x&quot;:552,&quot;abs_y&quot;:4105}" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:4062,&quot;w&quot;:1216,&quot;h&quot;:64,&quot;abs_x&quot;:584,&quot;abs_y&quot;:4105}" className="flex h-16 items-center justify-between border-b border-white/10">
<a bis_size="{&quot;x&quot;:104,&quot;y&quot;:4077,&quot;w&quot;:86,&quot;h&quot;:32,&quot;abs_x&quot;:584,&quot;abs_y&quot;:4120}" className="flex items-center gap-2" href="#">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:4077,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:584,&quot;abs_y&quot;:4120}" className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<span bis_size="{&quot;x&quot;:115,&quot;y&quot;:4083,&quot;w&quot;:9,&quot;h&quot;:20,&quot;abs_x&quot;:595,&quot;abs_y&quot;:4126}" className="text-sm font-semibold tracking-tight text-white">C</span>
</div>
<span bis_size="{&quot;x&quot;:144,&quot;y&quot;:4083,&quot;w&quot;:46,&quot;h&quot;:20,&quot;abs_x&quot;:624,&quot;abs_y&quot;:4126}" className="text-sm font-semibold tracking-tight text-white/90">CLARA</span>
</a>
<nav bis_size="{&quot;x&quot;:381,&quot;y&quot;:4083,&quot;w&quot;:400,&quot;h&quot;:20,&quot;abs_x&quot;:861,&quot;abs_y&quot;:4126}" className="hidden items-center gap-8 md:flex">
<a bis_size="{&quot;x&quot;:381,&quot;y&quot;:4083,&quot;w&quot;:109,&quot;h&quot;:20,&quot;abs_x&quot;:861,&quot;abs_y&quot;:4126}" className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#funcionalidades">Funcionalidades</a>
<a bis_size="{&quot;x&quot;:522,&quot;y&quot;:4083,&quot;w&quot;:97,&quot;h&quot;:20,&quot;abs_x&quot;:1002,&quot;abs_y&quot;:4126}" className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#demo">Demonstração</a>
<a bis_size="{&quot;x&quot;:652,&quot;y&quot;:4083,&quot;w&quot;:70,&quot;h&quot;:20,&quot;abs_x&quot;:1132,&quot;abs_y&quot;:4126}" className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#beneficios">Benefícios</a>
<a bis_size="{&quot;x&quot;:754,&quot;y&quot;:4083,&quot;w&quot;:27,&quot;h&quot;:20,&quot;abs_x&quot;:1234,&quot;abs_y&quot;:4126}" className="text-sm font-medium text-slate-300 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div bis_size="{&quot;x&quot;:972,&quot;y&quot;:4075,&quot;w&quot;:347,&quot;h&quot;:36,&quot;abs_x&quot;:1452,&quot;abs_y&quot;:4118}" className="flex items-center gap-3">
<button aria-label="Alternar tema" aria-pressed="false" bis_size="{&quot;x&quot;:972,&quot;y&quot;:4085,&quot;w&quot;:20,&quot;h&quot;:16,&quot;abs_x&quot;:1452,&quot;abs_y&quot;:4128}" className="inline-flex items-center justify-center rounded-md px-2.5 py-2 text-slate-300 ring-1 ring-white/10 hover:text-white hover:ring-white/20 transition" id="themeToggle" title="Alternar tema">
<i bis_size="{&quot;x&quot;:982,&quot;y&quot;:4093,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1462,&quot;abs_y&quot;:4136}" data-lucide="moon"></i>
</button>
<a bis_size="{&quot;x&quot;:1004,&quot;y&quot;:4075,&quot;w&quot;:136,&quot;h&quot;:36,&quot;abs_x&quot;:1484,&quot;abs_y&quot;:4118}" className="hidden rounded-md px-3 py-2 text-sm font-medium text-slate-300 ring-1 ring-white/10 hover:text-white hover:ring-white/20 transition md:inline-flex" href="#cta">Fale com vendas</a>
<a bis_size="{&quot;x&quot;:1153,&quot;y&quot;:4075,&quot;w&quot;:167,&quot;h&quot;:36,&quot;abs_x&quot;:1633,&quot;abs_y&quot;:4118}" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-tr from-[#8B5CF6] to-[#3B82F6] px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-white/10 hover:opacity-95 hover:ring-white/20 active:opacity-90 transition" href="#cta">
<i bis_size="{&quot;x&quot;:1169,&quot;y&quot;:4093,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1649,&quot;abs_y&quot;:4136}" data-lucide="sparkles"></i>
              Testar grátis agora
            </a>
</div>
</div>
</div>
</header>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:64,&quot;w&quot;:1425,&quot;h&quot;:800,&quot;abs_x&quot;:480,&quot;abs_y&quot;:107}" className="relative overflow-hidden">
<div bis_size="{&quot;x&quot;:72,&quot;y&quot;:64,&quot;w&quot;:1280,&quot;h&quot;:800,&quot;abs_x&quot;:552,&quot;abs_y&quot;:107}" className="mx-auto max-w-7xl px-4 pt-14 sm:px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:120,&quot;w&quot;:1216,&quot;h&quot;:606,&quot;abs_x&quot;:584,&quot;abs_y&quot;:163}" className="grid items-center gap-12 lg:grid-cols-2" data-animate="">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:120,&quot;w&quot;:584,&quot;h&quot;:606,&quot;abs_x&quot;:584,&quot;abs_y&quot;:163}" className="space-y-8">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:122,&quot;w&quot;:212,&quot;h&quot;:24,&quot;abs_x&quot;:584,&quot;abs_y&quot;:165}" className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">
<span bis_size="{&quot;x&quot;:116,&quot;y&quot;:130,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:596,&quot;abs_y&quot;:173}" className="inline-flex h-2 w-2 rounded-full bg-[#10B981] animate-ping" style={{animationDuration: `1.5s`}}></span>
<span bis_size="{&quot;x&quot;:132,&quot;y&quot;:130,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:612,&quot;abs_y&quot;:173}" className="inline-flex h-2 w-2 rounded-full bg-[#10B981]"></span>
              Atendendo pacientes agora
            </div>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:178,&quot;w&quot;:584,&quot;h&quot;:400,&quot;abs_x&quot;:584,&quot;abs_y&quot;:221}" className="space-y-4">
<h1 bis_size="{&quot;x&quot;:104,&quot;y&quot;:178,&quot;w&quot;:584,&quot;h&quot;:300,&quot;abs_x&quot;:584,&quot;abs_y&quot;:221}" className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                Sua clínica sempre aberta para agendamentos. Sem sobrecarregar sua equipe.
              </h1>
<p bis_size="{&quot;x&quot;:104,&quot;y&quot;:494,&quot;w&quot;:584,&quot;h&quot;:84,&quot;abs_x&quot;:584,&quot;abs_y&quot;:537}" className="text-base sm:text-lg text-slate-300">
                Clara é a recepcionista com Inteligência Artificial que agenda, confirma e responde seus pacientes 24h por dia, sem que você nunca mais perca uma consulta.
              </p>
</div>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:610,&quot;w&quot;:584,&quot;h&quot;:44,&quot;abs_x&quot;:584,&quot;abs_y&quot;:653}" className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
<a bis_size="{&quot;x&quot;:104,&quot;y&quot;:610,&quot;w&quot;:183,&quot;h&quot;:44,&quot;abs_x&quot;:584,&quot;abs_y&quot;:653}" className="inline-flex items-center gap-2 rounded-md bg-gradient-to-tr from-[#8B5CF6] to-[#3B82F6] px-6 py-3 text-sm font-semibold text-white shadow-sm ring-1 ring-white/10 hover:opacity-95 hover:ring-white/20 active:opacity-90 transition" href="#cta">
<i bis_size="{&quot;x&quot;:128,&quot;y&quot;:632,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:608,&quot;abs_y&quot;:675}" data-lucide="message-square"></i>
                Testar grátis agora
              </a>
<a bis_size="{&quot;x&quot;:299,&quot;y&quot;:610,&quot;w&quot;:178,&quot;h&quot;:44,&quot;abs_x&quot;:779,&quot;abs_y&quot;:653}" className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-medium text-slate-300 ring-1 ring-white/10 hover:text-white hover:ring-white/20 transition" href="#demo">
<i bis_size="{&quot;x&quot;:323,&quot;y&quot;:632,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:803,&quot;abs_y&quot;:675}" data-lucide="play-circle"></i>
                Ver demonstração
              </a>
</div>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:686,&quot;w&quot;:584,&quot;h&quot;:40,&quot;abs_x&quot;:584,&quot;abs_y&quot;:729}" className="flex items-center gap-6 pt-2">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:694,&quot;w&quot;:80,&quot;h&quot;:32,&quot;abs_x&quot;:584,&quot;abs_y&quot;:737}" className="flex -space-x-2">
<img alt="Paciente 1" bis_size="{&quot;x&quot;:104,&quot;y&quot;:694,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:584,&quot;abs_y&quot;:737}" className="h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=128&h=128&fit=crop" />
<img alt="Paciente 2" bis_size="{&quot;x&quot;:128,&quot;y&quot;:694,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:608,&quot;abs_y&quot;:737}" className="h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=128&h=128&fit=crop" />
<img alt="Paciente 3" bis_size="{&quot;x&quot;:152,&quot;y&quot;:694,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:632,&quot;abs_y&quot;:737}" className="h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=128&h=128&fit=crop" />
</div>
<div bis_size="{&quot;x&quot;:208,&quot;y&quot;:700,&quot;w&quot;:276,&quot;h&quot;:20,&quot;abs_x&quot;:688,&quot;abs_y&quot;:743}" className="text-sm text-slate-400">
                Satisfação 4,8⭐ e +18.000 atendimentos
              </div>
</div>
</div>
<div bis_size="{&quot;x&quot;:736,&quot;y&quot;:245,&quot;w&quot;:584,&quot;h&quot;:355,&quot;abs_x&quot;:1216,&quot;abs_y&quot;:288}" className="relative">

<div bis_size="{&quot;x&quot;:804,&quot;y&quot;:245,&quot;w&quot;:448,&quot;h&quot;:355,&quot;abs_x&quot;:1284,&quot;abs_y&quot;:288}" className="relative mx-auto w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-4 shadow-2xl ring-1 ring-white/10">
<div bis_size="{&quot;x&quot;:821,&quot;y&quot;:262,&quot;w&quot;:414,&quot;h&quot;:57,&quot;abs_x&quot;:1301,&quot;abs_y&quot;:305}" className="flex items-center gap-3 pb-4 border-b border-white/10">
<div bis_size="{&quot;x&quot;:821,&quot;y&quot;:262,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:1301,&quot;abs_y&quot;:305}" className="relative">
<div bis_size="{&quot;x&quot;:821,&quot;y&quot;:262,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:1301,&quot;abs_y&quot;:305}" className="h-10 w-10 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#3B82F6] ring-2 ring-white/10"></div>
<span bis_size="{&quot;x&quot;:849,&quot;y&quot;:290,&quot;w&quot;:12,&quot;h&quot;:12,&quot;abs_x&quot;:1329,&quot;abs_y&quot;:333}" className="absolute -right-0 -bottom-0 inline-flex h-3 w-3 rounded-full bg-[#10B981] ring-2 ring-slate-950"></span>
</div>
<div bis_size="{&quot;x&quot;:873,&quot;y&quot;:264,&quot;w&quot;:173,&quot;h&quot;:36,&quot;abs_x&quot;:1353,&quot;abs_y&quot;:307}">
<p bis_size="{&quot;x&quot;:873,&quot;y&quot;:264,&quot;w&quot;:173,&quot;h&quot;:20,&quot;abs_x&quot;:1353,&quot;abs_y&quot;:307}" className="text-sm font-medium text-white">Clara • IA de Atendimento</p>
<p bis_size="{&quot;x&quot;:873,&quot;y&quot;:284,&quot;w&quot;:173,&quot;h&quot;:16,&quot;abs_x&quot;:1353,&quot;abs_y&quot;:327}" className="text-xs text-slate-400">Online 24h</p>
</div>
<div bis_size="{&quot;x&quot;:1219,&quot;y&quot;:282,&quot;w&quot;:16,&quot;h&quot;:0,&quot;abs_x&quot;:1699,&quot;abs_y&quot;:325}" className="ml-auto flex items-center gap-2">
<i bis_size="{&quot;x&quot;:1219,&quot;y&quot;:282,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1699,&quot;abs_y&quot;:325}" className="text-slate-400" data-lucide="phone"></i>
<i bis_size="{&quot;x&quot;:1227,&quot;y&quot;:282,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1707,&quot;abs_y&quot;:325}" className="text-slate-400" data-lucide="video"></i>
<i bis_size="{&quot;x&quot;:1235,&quot;y&quot;:282,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1715,&quot;abs_y&quot;:325}" className="text-slate-400" data-lucide="more-horizontal"></i>
</div>
</div>
<div bis_size="{&quot;x&quot;:821,&quot;y&quot;:319,&quot;w&quot;:414,&quot;h&quot;:204,&quot;abs_x&quot;:1301,&quot;abs_y&quot;:362}" className="space-y-3 py-4">
<div bis_size="{&quot;x&quot;:821,&quot;y&quot;:335,&quot;w&quot;:414,&quot;h&quot;:56,&quot;abs_x&quot;:1301,&quot;abs_y&quot;:378}" className="flex items-end gap-2">
<div bis_size="{&quot;x&quot;:821,&quot;y&quot;:363,&quot;w&quot;:28,&quot;h&quot;:28,&quot;abs_x&quot;:1301,&quot;abs_y&quot;:406}" className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#3B82F6] ring-1 ring-white/10"></div>
<div bis_size="{&quot;x&quot;:857,&quot;y&quot;:335,&quot;w&quot;:310,&quot;h&quot;:56,&quot;abs_x&quot;:1337,&quot;abs_y&quot;:378}" className="max-w-[75%] rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2 text-sm text-slate-100 ring-1 ring-white/10">
                    Oi! Sou a Clara. Posso agendar sua limpeza, botox ou avaliação?
                  </div>
</div>
<div bis_size="{&quot;x&quot;:821,&quot;y&quot;:403,&quot;w&quot;:414,&quot;h&quot;:36,&quot;abs_x&quot;:1301,&quot;abs_y&quot;:446}" className="flex justify-end">
<div bis_size="{&quot;x&quot;:984,&quot;y&quot;:403,&quot;w&quot;:251,&quot;h&quot;:36,&quot;abs_x&quot;:1464,&quot;abs_y&quot;:446}" className="max-w-[75%] rounded-2xl rounded-tr-sm bg-[#3B82F6]/20 px-3 py-2 text-sm text-sky-100 ring-1 ring-sky-300/10">
                    Pode ser limpeza amanhã à tarde?
                  </div>
</div>
<div bis_size="{&quot;x&quot;:821,&quot;y&quot;:451,&quot;w&quot;:414,&quot;h&quot;:56,&quot;abs_x&quot;:1301,&quot;abs_y&quot;:494}" className="flex items-end gap-2">
<div bis_size="{&quot;x&quot;:821,&quot;y&quot;:479,&quot;w&quot;:28,&quot;h&quot;:28,&quot;abs_x&quot;:1301,&quot;abs_y&quot;:522}" className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#3B82F6] ring-1 ring-white/10"></div>
<div bis_size="{&quot;x&quot;:857,&quot;y&quot;:451,&quot;w&quot;:310,&quot;h&quot;:56,&quot;abs_x&quot;:1337,&quot;abs_y&quot;:494}" className="max-w-[75%] rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2 text-sm text-slate-100 ring-1 ring-white/10">
                    Perfeito! Tenho 15:30 ou 17:00. Qual prefere?
                  </div>
</div>
</div>
<div bis_size="{&quot;x&quot;:821,&quot;y&quot;:539,&quot;w&quot;:414,&quot;h&quot;:44,&quot;abs_x&quot;:1301,&quot;abs_y&quot;:582}" className="mt-4 flex items-center gap-2 rounded-xl bg-white/5 p-2 ring-1 ring-white/10">
<i bis_size="{&quot;x&quot;:829,&quot;y&quot;:561,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1309,&quot;abs_y&quot;:604}" className="text-slate-400" data-lucide="message-circle"></i>
<input bis_size="{&quot;x&quot;:837,&quot;y&quot;:551,&quot;w&quot;:322,&quot;h&quot;:20,&quot;abs_x&quot;:1317,&quot;abs_y&quot;:594}" className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none" placeholder="Escreva uma mensagem..." type="text" />
<button bis_size="{&quot;x&quot;:1167,&quot;y&quot;:547,&quot;w&quot;:59,&quot;h&quot;:28,&quot;abs_x&quot;:1647,&quot;abs_y&quot;:590}" className="rounded-md bg-gradient-to-tr from-[#8B5CF6] to-[#3B82F6] px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/10 hover:opacity-95 active:opacity-90 transition">
                  Enviar
                </button>
</div>
</div>

<div bis_size="{&quot;x&quot;:712,&quot;y&quot;:562,&quot;w&quot;:176,&quot;h&quot;:62,&quot;abs_x&quot;:1192,&quot;abs_y&quot;:605}" className="absolute -left-6 -bottom-6 hidden w-44 rounded-xl border border-white/10 bg-white/5 p-3 shadow-xl ring-1 ring-white/10 md:block">
<div bis_size="{&quot;x&quot;:725,&quot;y&quot;:575,&quot;w&quot;:150,&quot;h&quot;:36,&quot;abs_x&quot;:1205,&quot;abs_y&quot;:618}" className="flex items-center gap-2">
<div bis_size="{&quot;x&quot;:725,&quot;y&quot;:577,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:1205,&quot;abs_y&quot;:620}" className="h-8 w-8 rounded-md bg-[#10B981]/10 ring-1 ring-[#10B981]/20 flex items-center justify-center">
<i bis_size="{&quot;x&quot;:741,&quot;y&quot;:593,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1221,&quot;abs_y&quot;:636}" className="text-[#10B981]" data-lucide="calendar-check"></i>
</div>
<div bis_size="{&quot;x&quot;:765,&quot;y&quot;:575,&quot;w&quot;:85,&quot;h&quot;:36,&quot;abs_x&quot;:1245,&quot;abs_y&quot;:618}">
<p bis_size="{&quot;x&quot;:765,&quot;y&quot;:575,&quot;w&quot;:85,&quot;h&quot;:16,&quot;abs_x&quot;:1245,&quot;abs_y&quot;:618}" className="text-xs text-slate-400">Agendamentos</p>
<p bis_size="{&quot;x&quot;:765,&quot;y&quot;:591,&quot;w&quot;:85,&quot;h&quot;:20,&quot;abs_x&quot;:1245,&quot;abs_y&quot;:634}" className="text-sm font-medium text-white">+28 hoje</p>
</div>
</div>
</div>
</div>
</div>

<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:782,&quot;w&quot;:1216,&quot;h&quot;:82,&quot;abs_x&quot;:584,&quot;abs_y&quot;:825}" className="mt-14 grid items-center gap-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10 sm:grid-cols-2 lg:grid-cols-4" data-animate="">
<div bis_size="{&quot;x&quot;:129,&quot;y&quot;:807,&quot;w&quot;:267,&quot;h&quot;:32,&quot;abs_x&quot;:609,&quot;abs_y&quot;:850}" className="flex items-center gap-3">
<div bis_size="{&quot;x&quot;:129,&quot;y&quot;:807,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:609,&quot;abs_y&quot;:850}" className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i bis_size="{&quot;x&quot;:145,&quot;y&quot;:823,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:625,&quot;abs_y&quot;:866}" className="text-[#8B5CF6]" data-lucide="zap"></i>
</div>
<p bis_size="{&quot;x&quot;:173,&quot;y&quot;:813,&quot;w&quot;:161,&quot;h&quot;:20,&quot;abs_x&quot;:653,&quot;abs_y&quot;:856}" className="text-sm text-slate-300">Respostas em segundos</p>
</div>
<div bis_size="{&quot;x&quot;:429,&quot;y&quot;:807,&quot;w&quot;:267,&quot;h&quot;:32,&quot;abs_x&quot;:909,&quot;abs_y&quot;:850}" className="flex items-center gap-3">
<div bis_size="{&quot;x&quot;:429,&quot;y&quot;:807,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:909,&quot;abs_y&quot;:850}" className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i bis_size="{&quot;x&quot;:445,&quot;y&quot;:823,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:925,&quot;abs_y&quot;:866}" className="text-[#3B82F6]" data-lucide="shield-check"></i>
</div>
<p bis_size="{&quot;x&quot;:473,&quot;y&quot;:813,&quot;w&quot;:163,&quot;h&quot;:20,&quot;abs_x&quot;:953,&quot;abs_y&quot;:856}" className="text-sm text-slate-300">Privacidade e segurança</p>
</div>
<div bis_size="{&quot;x&quot;:728,&quot;y&quot;:807,&quot;w&quot;:267,&quot;h&quot;:32,&quot;abs_x&quot;:1208,&quot;abs_y&quot;:850}" className="flex items-center gap-3">
<div bis_size="{&quot;x&quot;:728,&quot;y&quot;:807,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:1208,&quot;abs_y&quot;:850}" className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i bis_size="{&quot;x&quot;:744,&quot;y&quot;:823,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1224,&quot;abs_y&quot;:866}" className="text-[#10B981]" data-lucide="messages-square"></i>
</div>
<p bis_size="{&quot;x&quot;:772,&quot;y&quot;:813,&quot;w&quot;:150,&quot;h&quot;:20,&quot;abs_x&quot;:1252,&quot;abs_y&quot;:856}" className="text-sm text-slate-300">WhatsApp e Instagram</p>
</div>
<div bis_size="{&quot;x&quot;:1028,&quot;y&quot;:807,&quot;w&quot;:267,&quot;h&quot;:32,&quot;abs_x&quot;:1508,&quot;abs_y&quot;:850}" className="flex items-center gap-3">
<div bis_size="{&quot;x&quot;:1028,&quot;y&quot;:807,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:1508,&quot;abs_y&quot;:850}" className="h-8 w-8 rounded-md bg-white/5 ring-1 ring-white/10 flex items-center justify-center">
<i bis_size="{&quot;x&quot;:1044,&quot;y&quot;:823,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1524,&quot;abs_y&quot;:866}" className="text-[#F59E0B]" data-lucide="bar-chart-3"></i>
</div>
<p bis_size="{&quot;x&quot;:1072,&quot;y&quot;:813,&quot;w&quot;:164,&quot;h&quot;:20,&quot;abs_x&quot;:1552,&quot;abs_y&quot;:856}" className="text-sm text-slate-300">Relatórios em tempo real</p>
</div>
</div>
</div>
</section>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:864,&quot;w&quot;:1425,&quot;h&quot;:664,&quot;abs_x&quot;:480,&quot;abs_y&quot;:907}" className="relative py-20" id="funcionalidades">
<div bis_size="{&quot;x&quot;:72,&quot;y&quot;:944,&quot;w&quot;:1280,&quot;h&quot;:504,&quot;abs_x&quot;:552,&quot;abs_y&quot;:987}" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:944,&quot;w&quot;:1216,&quot;h&quot;:72,&quot;abs_x&quot;:584,&quot;abs_y&quot;:987}" className="mb-10 flex items-end justify-between" data-animate="">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:944,&quot;w&quot;:724,&quot;h&quot;:72,&quot;abs_x&quot;:584,&quot;abs_y&quot;:987}">
<h2 bis_size="{&quot;x&quot;:104,&quot;y&quot;:944,&quot;w&quot;:724,&quot;h&quot;:40,&quot;abs_x&quot;:584,&quot;abs_y&quot;:987}" className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">O que a Clara faz pela sua clínica, na prática</h2>
<p bis_size="{&quot;x&quot;:104,&quot;y&quot;:992,&quot;w&quot;:724,&quot;h&quot;:24,&quot;abs_x&quot;:584,&quot;abs_y&quot;:1035}" className="mt-2 text-slate-400">Funcionalidades conectadas a resultados de negócio.</p>
</div>
<a bis_size="{&quot;x&quot;:1180,&quot;y&quot;:980,&quot;w&quot;:140,&quot;h&quot;:36,&quot;abs_x&quot;:1660,&quot;abs_y&quot;:1023}" className="hidden rounded-md px-3 py-2 text-sm font-medium text-slate-300 ring-1 ring-white/10 hover:text-white hover:ring-white/20 transition md:inline-flex" href="#demo">
            Ver chat em ação
          </a>
</div>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:1056,&quot;w&quot;:1216,&quot;h&quot;:392,&quot;abs_x&quot;:584,&quot;abs_y&quot;:1099}" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" data-animate="">

<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:1056,&quot;w&quot;:389,&quot;h&quot;:186,&quot;abs_x&quot;:584,&quot;abs_y&quot;:1099}" className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10 hover:border-white/20 hover:ring-white/20 transition">
<div bis_size="{&quot;x&quot;:129,&quot;y&quot;:1081,&quot;w&quot;:339,&quot;h&quot;:40,&quot;abs_x&quot;:609,&quot;abs_y&quot;:1124}" className="mb-4 flex items-center gap-3">
<div bis_size="{&quot;x&quot;:129,&quot;y&quot;:1081,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:609,&quot;abs_y&quot;:1124}" className="h-10 w-10 rounded-md bg-[#3B82F6]/15 ring-1 ring-[#3B82F6]/25 flex items-center justify-center">
<i bis_size="{&quot;x&quot;:149,&quot;y&quot;:1101,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:629,&quot;abs_y&quot;:1144}" className="text-[#3B82F6]" data-lucide="calendar-range"></i>
</div>
<h3 bis_size="{&quot;x&quot;:181,&quot;y&quot;:1087,&quot;w&quot;:254,&quot;h&quot;:28,&quot;abs_x&quot;:661,&quot;abs_y&quot;:1130}" className="text-lg font-medium text-white tracking-tight">Gestão de Agendamentos 24/7</h3>
</div>
<p bis_size="{&quot;x&quot;:129,&quot;y&quot;:1137,&quot;w&quot;:339,&quot;h&quot;:80,&quot;abs_x&quot;:609,&quot;abs_y&quot;:1180}" className="text-sm text-slate-400">Agenda, confirma, reagenda e cancela consultas de forma autônoma a qualquer hora — inclusive fora do expediente e em feriados — para preencher mais horários sem aumentar a equipe.</p>
</div>

<div bis_size="{&quot;x&quot;:517,&quot;y&quot;:1056,&quot;w&quot;:389,&quot;h&quot;:186,&quot;abs_x&quot;:997,&quot;abs_y&quot;:1099}" className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10 hover:border-white/20 hover:ring-white/20 transition">
<div bis_size="{&quot;x&quot;:542,&quot;y&quot;:1081,&quot;w&quot;:339,&quot;h&quot;:40,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:1124}" className="mb-4 flex items-center gap-3">
<div bis_size="{&quot;x&quot;:542,&quot;y&quot;:1081,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:1124}" className="h-10 w-10 rounded-md bg-[#8B5CF6]/15 ring-1 ring-[#8B5CF6]/25 flex items-center justify-center">
<i bis_size="{&quot;x&quot;:562,&quot;y&quot;:1101,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1042,&quot;abs_y&quot;:1144}" className="text-[#8B5CF6]" data-lucide="message-square"></i>
</div>
<h3 bis_size="{&quot;x&quot;:594,&quot;y&quot;:1087,&quot;w&quot;:276,&quot;h&quot;:28,&quot;abs_x&quot;:1074,&quot;abs_y&quot;:1130}" className="text-lg font-medium text-white tracking-tight">Atendimento Multicanal Integrado</h3>
</div>
<p bis_size="{&quot;x&quot;:542,&quot;y&quot;:1137,&quot;w&quot;:339,&quot;h&quot;:80,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:1180}" className="text-sm text-slate-400">Centraliza WhatsApp, Instagram e chat do site em uma única caixa de entrada com histórico unificado. Zero conversas perdidas e padrão de resposta consistente.</p>
</div>

<div bis_size="{&quot;x&quot;:931,&quot;y&quot;:1056,&quot;w&quot;:389,&quot;h&quot;:186,&quot;abs_x&quot;:1411,&quot;abs_y&quot;:1099}" className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10 hover:border-white/20 hover:ring-white/20 transition">
<div bis_size="{&quot;x&quot;:956,&quot;y&quot;:1081,&quot;w&quot;:339,&quot;h&quot;:56,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:1124}" className="mb-4 flex items-center gap-3">
<div bis_size="{&quot;x&quot;:956,&quot;y&quot;:1089,&quot;w&quot;:32,&quot;h&quot;:40,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:1132}" className="h-10 w-10 rounded-md bg-[#10B981]/15 ring-1 ring-[#10B981]/25 flex items-center justify-center">
<i bis_size="{&quot;x&quot;:972,&quot;y&quot;:1109,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1452,&quot;abs_y&quot;:1152}" className="text-[#10B981]" data-lucide="database"></i>
</div>
<h3 bis_size="{&quot;x&quot;:1000,&quot;y&quot;:1081,&quot;w&quot;:294,&quot;h&quot;:56,&quot;abs_x&quot;:1480,&quot;abs_y&quot;:1124}" className="text-lg font-medium text-white tracking-tight">Base de Conhecimento Personalizada (RAG)</h3>
</div>
<p bis_size="{&quot;x&quot;:956,&quot;y&quot;:1153,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:1196}" className="text-sm text-slate-400">Treinada com procedimentos, preços, convênios e preparos da sua clínica para respostas precisas e coerentes com seu tom de voz.</p>
</div>

<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:1266,&quot;w&quot;:389,&quot;h&quot;:182,&quot;abs_x&quot;:584,&quot;abs_y&quot;:1309}" className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10 hover:border-white/20 hover:ring-white/20 transition">
<div bis_size="{&quot;x&quot;:129,&quot;y&quot;:1291,&quot;w&quot;:339,&quot;h&quot;:56,&quot;abs_x&quot;:609,&quot;abs_y&quot;:1334}" className="mb-4 flex items-center gap-3">
<div bis_size="{&quot;x&quot;:129,&quot;y&quot;:1299,&quot;w&quot;:36,&quot;h&quot;:40,&quot;abs_x&quot;:609,&quot;abs_y&quot;:1342}" className="h-10 w-10 rounded-md bg-[#10B981]/15 ring-1 ring-[#10B981]/25 flex items-center justify-center">
<i bis_size="{&quot;x&quot;:147,&quot;y&quot;:1319,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:627,&quot;abs_y&quot;:1362}" className="text-[#10B981]" data-lucide="bell-ring"></i>
</div>
<h3 bis_size="{&quot;x&quot;:178,&quot;y&quot;:1291,&quot;w&quot;:290,&quot;h&quot;:56,&quot;abs_x&quot;:658,&quot;abs_y&quot;:1334}" className="text-lg font-medium text-white tracking-tight">Redução Proativa de Faltas (No-Show)</h3>
</div>
<p bis_size="{&quot;x&quot;:129,&quot;y&quot;:1363,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:609,&quot;abs_y&quot;:1406}" className="text-sm text-slate-400">Lembretes e confirmações automáticas no momento ideal reduzem ausências e liberam vagas com antecedência para realocar pacientes.</p>
</div>

<div bis_size="{&quot;x&quot;:517,&quot;y&quot;:1266,&quot;w&quot;:389,&quot;h&quot;:182,&quot;abs_x&quot;:997,&quot;abs_y&quot;:1309}" className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10 hover:border-white/20 hover:ring-white/20 transition">
<div bis_size="{&quot;x&quot;:542,&quot;y&quot;:1291,&quot;w&quot;:339,&quot;h&quot;:56,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:1334}" className="mb-4 flex items-center gap-3">
<div bis_size="{&quot;x&quot;:542,&quot;y&quot;:1299,&quot;w&quot;:33,&quot;h&quot;:40,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:1342}" className="h-10 w-10 rounded-md bg-[#F59E0B]/15 ring-1 ring-[#F59E0B]/25 flex items-center justify-center">
<i bis_size="{&quot;x&quot;:559,&quot;y&quot;:1319,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1039,&quot;abs_y&quot;:1362}" className="text-[#F59E0B]" data-lucide="layout-dashboard"></i>
</div>
<h3 bis_size="{&quot;x&quot;:588,&quot;y&quot;:1291,&quot;w&quot;:293,&quot;h&quot;:56,&quot;abs_x&quot;:1068,&quot;abs_y&quot;:1334}" className="text-lg font-medium text-white tracking-tight">Dashboard de Inteligência de Atendimento</h3>
</div>
<p bis_size="{&quot;x&quot;:542,&quot;y&quot;:1363,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:1406}" className="text-sm text-slate-400">Métricas acionáveis: horários de pico, funil de conversão, análise de sentimento e performance geral para decisões rápidas e melhoria contínua.</p>
</div>

<div bis_size="{&quot;x&quot;:931,&quot;y&quot;:1266,&quot;w&quot;:389,&quot;h&quot;:182,&quot;abs_x&quot;:1411,&quot;abs_y&quot;:1309}" className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10 hover:border-white/20 hover:ring-white/20 transition">
<div bis_size="{&quot;x&quot;:956,&quot;y&quot;:1291,&quot;w&quot;:339,&quot;h&quot;:40,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:1334}" className="mb-4 flex items-center gap-3">
<div bis_size="{&quot;x&quot;:956,&quot;y&quot;:1291,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:1334}" className="h-10 w-10 rounded-md bg-[#8B5CF6]/15 ring-1 ring-[#8B5CF6]/25 flex items-center justify-center">
<i bis_size="{&quot;x&quot;:976,&quot;y&quot;:1311,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1456,&quot;abs_y&quot;:1354}" className="text-[#8B5CF6]" data-lucide="badge-check"></i>
</div>
<h3 bis_size="{&quot;x&quot;:1008,&quot;y&quot;:1297,&quot;w&quot;:279,&quot;h&quot;:28,&quot;abs_x&quot;:1488,&quot;abs_y&quot;:1340}" className="text-lg font-medium text-white tracking-tight">Padronização do Primeiro Contato</h3>
</div>
<p bis_size="{&quot;x&quot;:956,&quot;y&quot;:1347,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:1390}" className="text-sm text-slate-400">Scripts aprovados e linguagem profissional em todas as conversas para proteger a marca e aumentar a taxa de conversão em agendamentos.</p>
</div>
</div>
</div>
</section>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:1528,&quot;w&quot;:1425,&quot;h&quot;:338,&quot;abs_x&quot;:480,&quot;abs_y&quot;:1571}" className="relative py-6">
<div bis_size="{&quot;x&quot;:72,&quot;y&quot;:1552,&quot;w&quot;:1280,&quot;h&quot;:290,&quot;abs_x&quot;:552,&quot;abs_y&quot;:1595}" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-animate="">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:1552,&quot;w&quot;:1216,&quot;h&quot;:290,&quot;abs_x&quot;:584,&quot;abs_y&quot;:1595}" className="grid gap-6 lg:grid-cols-3">

<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:1552,&quot;w&quot;:389,&quot;h&quot;:290,&quot;abs_x&quot;:584,&quot;abs_y&quot;:1595}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 ring-1 ring-white/10">
<div bis_size="{&quot;x&quot;:125,&quot;y&quot;:1573,&quot;w&quot;:347,&quot;h&quot;:20,&quot;abs_x&quot;:605,&quot;abs_y&quot;:1616}" className="flex items-center justify-between">
<h3 bis_size="{&quot;x&quot;:125,&quot;y&quot;:1573,&quot;w&quot;:30,&quot;h&quot;:20,&quot;abs_x&quot;:605,&quot;abs_y&quot;:1616}" className="text-sm font-medium text-slate-300">Hoje</h3>
<span bis_size="{&quot;x&quot;:361,&quot;y&quot;:1575,&quot;w&quot;:111,&quot;h&quot;:16,&quot;abs_x&quot;:841,&quot;abs_y&quot;:1618}" className="text-xs text-slate-400">Atualizado há 2 min</span>
</div>
<div bis_size="{&quot;x&quot;:125,&quot;y&quot;:1609,&quot;w&quot;:347,&quot;h&quot;:84,&quot;abs_x&quot;:605,&quot;abs_y&quot;:1652}" className="mt-4 grid grid-cols-3 gap-3">
<div bis_size="{&quot;x&quot;:125,&quot;y&quot;:1609,&quot;w&quot;:107,&quot;h&quot;:84,&quot;abs_x&quot;:605,&quot;abs_y&quot;:1652}" className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
<p bis_size="{&quot;x&quot;:137,&quot;y&quot;:1621,&quot;w&quot;:83,&quot;h&quot;:16,&quot;abs_x&quot;:617,&quot;abs_y&quot;:1664}" className="text-xs text-slate-400">Atendimentos</p>
<p bis_size="{&quot;x&quot;:137,&quot;y&quot;:1637,&quot;w&quot;:83,&quot;h&quot;:28,&quot;abs_x&quot;:617,&quot;abs_y&quot;:1680}" className="text-xl font-semibold text-white tracking-tight">186</p>
<p bis_size="{&quot;x&quot;:137,&quot;y&quot;:1665,&quot;w&quot;:83,&quot;h&quot;:16,&quot;abs_x&quot;:617,&quot;abs_y&quot;:1708}" className="text-[11px] text-[#10B981]">+12%</p>
</div>
<div bis_size="{&quot;x&quot;:245,&quot;y&quot;:1609,&quot;w&quot;:107,&quot;h&quot;:84,&quot;abs_x&quot;:725,&quot;abs_y&quot;:1652}" className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
<p bis_size="{&quot;x&quot;:257,&quot;y&quot;:1621,&quot;w&quot;:83,&quot;h&quot;:16,&quot;abs_x&quot;:737,&quot;abs_y&quot;:1664}" className="text-xs text-slate-400">Agendamentos</p>
<p bis_size="{&quot;x&quot;:257,&quot;y&quot;:1637,&quot;w&quot;:83,&quot;h&quot;:28,&quot;abs_x&quot;:737,&quot;abs_y&quot;:1680}" className="text-xl font-semibold text-white tracking-tight">64</p>
<p bis_size="{&quot;x&quot;:257,&quot;y&quot;:1665,&quot;w&quot;:83,&quot;h&quot;:16,&quot;abs_x&quot;:737,&quot;abs_y&quot;:1708}" className="text-[11px] text-[#10B981]">+8%</p>
</div>
<div bis_size="{&quot;x&quot;:365,&quot;y&quot;:1609,&quot;w&quot;:107,&quot;h&quot;:84,&quot;abs_x&quot;:845,&quot;abs_y&quot;:1652}" className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
<p bis_size="{&quot;x&quot;:377,&quot;y&quot;:1621,&quot;w&quot;:83,&quot;h&quot;:16,&quot;abs_x&quot;:857,&quot;abs_y&quot;:1664}" className="text-xs text-slate-400">Satisfação</p>
<p bis_size="{&quot;x&quot;:377,&quot;y&quot;:1637,&quot;w&quot;:83,&quot;h&quot;:28,&quot;abs_x&quot;:857,&quot;abs_y&quot;:1680}" className="text-xl font-semibold text-white tracking-tight">4,8</p>
<p bis_size="{&quot;x&quot;:377,&quot;y&quot;:1665,&quot;w&quot;:83,&quot;h&quot;:16,&quot;abs_x&quot;:857,&quot;abs_y&quot;:1708}" className="text-[11px] text-slate-400">⭐</p>
</div>
</div>
<div bis_size="{&quot;x&quot;:125,&quot;y&quot;:1713,&quot;w&quot;:347,&quot;h&quot;:80,&quot;abs_x&quot;:605,&quot;abs_y&quot;:1756}" className="mt-5">
<div bis_size="{&quot;x&quot;:125,&quot;y&quot;:1713,&quot;w&quot;:347,&quot;h&quot;:80,&quot;abs_x&quot;:605,&quot;abs_y&quot;:1756}" className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
<div bis_size="{&quot;x&quot;:137,&quot;y&quot;:1725,&quot;w&quot;:323,&quot;h&quot;:36,&quot;abs_x&quot;:617,&quot;abs_y&quot;:1768}" className="flex items-center gap-2">
<div bis_size="{&quot;x&quot;:137,&quot;y&quot;:1727,&quot;w&quot;:32,&quot;h&quot;:32,&quot;abs_x&quot;:617,&quot;abs_y&quot;:1770}" className="h-8 w-8 rounded-md bg-[#3B82F6]/15 ring-1 ring-[#3B82F6]/25 flex items-center justify-center">
<i bis_size="{&quot;x&quot;:153,&quot;y&quot;:1743,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:633,&quot;abs_y&quot;:1786}" className="text-[#3B82F6]" data-lucide="mouse-pointer-click"></i>
</div>
<div bis_size="{&quot;x&quot;:177,&quot;y&quot;:1725,&quot;w&quot;:163,&quot;h&quot;:36,&quot;abs_x&quot;:657,&quot;abs_y&quot;:1768}">
<p bis_size="{&quot;x&quot;:177,&quot;y&quot;:1725,&quot;w&quot;:163,&quot;h&quot;:16,&quot;abs_x&quot;:657,&quot;abs_y&quot;:1768}" className="text-xs text-slate-400">Conversão em agendamento</p>
<p bis_size="{&quot;x&quot;:177,&quot;y&quot;:1741,&quot;w&quot;:163,&quot;h&quot;:20,&quot;abs_x&quot;:657,&quot;abs_y&quot;:1784}" className="text-sm font-medium text-white">34%</p>
</div>
</div>
<div bis_size="{&quot;x&quot;:137,&quot;y&quot;:1773,&quot;w&quot;:323,&quot;h&quot;:8,&quot;abs_x&quot;:617,&quot;abs_y&quot;:1816}" className="mt-3 h-2 w-full rounded-full bg-white/5">
<div bis_size="{&quot;x&quot;:137,&quot;y&quot;:1773,&quot;w&quot;:109,&quot;h&quot;:8,&quot;abs_x&quot;:617,&quot;abs_y&quot;:1816}" className="h-2 w-[34%] rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6]"></div>
</div>
</div>
</div>
</div>

<div bis_size="{&quot;x&quot;:517,&quot;y&quot;:1552,&quot;w&quot;:389,&quot;h&quot;:290,&quot;abs_x&quot;:997,&quot;abs_y&quot;:1595}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 ring-1 ring-white/10">
<h3 bis_size="{&quot;x&quot;:538,&quot;y&quot;:1573,&quot;w&quot;:347,&quot;h&quot;:20,&quot;abs_x&quot;:1018,&quot;abs_y&quot;:1616}" className="text-sm font-medium text-slate-300">Agendamentos por dia</h3>
<p bis_size="{&quot;x&quot;:538,&quot;y&quot;:1593,&quot;w&quot;:347,&quot;h&quot;:16,&quot;abs_x&quot;:1018,&quot;abs_y&quot;:1636}" className="text-xs text-slate-500">Últimos 7 dias</p>
<div bis_size="{&quot;x&quot;:538,&quot;y&quot;:1621,&quot;w&quot;:347,&quot;h&quot;:200,&quot;abs_x&quot;:1018,&quot;abs_y&quot;:1664}" className="mt-3 rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
<div bis_size="{&quot;x&quot;:550,&quot;y&quot;:1633,&quot;w&quot;:323,&quot;h&quot;:176,&quot;abs_x&quot;:1030,&quot;abs_y&quot;:1676}" className="relative h-44">
<div bis_size="{&quot;x&quot;:550,&quot;y&quot;:1633,&quot;w&quot;:323,&quot;h&quot;:176,&quot;abs_x&quot;:1030,&quot;abs_y&quot;:1676}" className="h-full w-full">
<div bis_size="{&quot;x&quot;:550,&quot;y&quot;:1633,&quot;w&quot;:323,&quot;h&quot;:176,&quot;abs_x&quot;:1030,&quot;abs_y&quot;:1676}" className="h-full w-full">
<canvas bis_size="{&quot;x&quot;:550,&quot;y&quot;:1633,&quot;w&quot;:300,&quot;h&quot;:150,&quot;abs_x&quot;:1030,&quot;abs_y&quot;:1676}" id="chartLine"></canvas>
</div>
</div>
</div>
</div>
</div>

<div bis_size="{&quot;x&quot;:931,&quot;y&quot;:1552,&quot;w&quot;:389,&quot;h&quot;:290,&quot;abs_x&quot;:1411,&quot;abs_y&quot;:1595}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 ring-1 ring-white/10">
<h3 bis_size="{&quot;x&quot;:952,&quot;y&quot;:1573,&quot;w&quot;:347,&quot;h&quot;:20,&quot;abs_x&quot;:1432,&quot;abs_y&quot;:1616}" className="text-sm font-medium text-slate-300">Origem dos contatos</h3>
<div bis_size="{&quot;x&quot;:952,&quot;y&quot;:1605,&quot;w&quot;:347,&quot;h&quot;:208,&quot;abs_x&quot;:1432,&quot;abs_y&quot;:1648}" className="mt-3 grid grid-cols-2 gap-4">
<div bis_size="{&quot;x&quot;:952,&quot;y&quot;:1605,&quot;w&quot;:165,&quot;h&quot;:208,&quot;abs_x&quot;:1432,&quot;abs_y&quot;:1648}" className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
<div bis_size="{&quot;x&quot;:964,&quot;y&quot;:1617,&quot;w&quot;:141,&quot;h&quot;:160,&quot;abs_x&quot;:1444,&quot;abs_y&quot;:1660}" className="h-40 w-full">
<div bis_size="{&quot;x&quot;:964,&quot;y&quot;:1617,&quot;w&quot;:141,&quot;h&quot;:160,&quot;abs_x&quot;:1444,&quot;abs_y&quot;:1660}" className="h-full w-full">
<canvas bis_size="{&quot;x&quot;:964,&quot;y&quot;:1617,&quot;w&quot;:300,&quot;h&quot;:150,&quot;abs_x&quot;:1444,&quot;abs_y&quot;:1660}" id="chartDonut"></canvas>
</div>
</div>
<div bis_size="{&quot;x&quot;:964,&quot;y&quot;:1785,&quot;w&quot;:141,&quot;h&quot;:16,&quot;abs_x&quot;:1444,&quot;abs_y&quot;:1828}" className="mt-2 flex justify-center gap-3 text-[11px] text-slate-400">
<span bis_size="{&quot;x&quot;:964,&quot;y&quot;:1785,&quot;w&quot;:65,&quot;h&quot;:16,&quot;abs_x&quot;:1444,&quot;abs_y&quot;:1828}" className="inline-flex items-center gap-1">
<span bis_size="{&quot;x&quot;:964,&quot;y&quot;:1789,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:1444,&quot;abs_y&quot;:1832}" className="h-2 w-2 rounded-full bg-[#25D366]"></span> WhatsApp
                  </span>
<span bis_size="{&quot;x&quot;:1042,&quot;y&quot;:1785,&quot;w&quot;:63,&quot;h&quot;:16,&quot;abs_x&quot;:1522,&quot;abs_y&quot;:1828}" className="inline-flex items-center gap-1">
<span bis_size="{&quot;x&quot;:1042,&quot;y&quot;:1789,&quot;w&quot;:8,&quot;h&quot;:8,&quot;abs_x&quot;:1522,&quot;abs_y&quot;:1832}" className="h-2 w-2 rounded-full bg-[#8B5CF6]"></span> Instagram
                  </span>
</div>
</div>
<div bis_size="{&quot;x&quot;:1133,&quot;y&quot;:1605,&quot;w&quot;:165,&quot;h&quot;:208,&quot;abs_x&quot;:1613,&quot;abs_y&quot;:1648}" className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
<p bis_size="{&quot;x&quot;:1145,&quot;y&quot;:1617,&quot;w&quot;:141,&quot;h&quot;:32,&quot;abs_x&quot;:1625,&quot;abs_y&quot;:1660}" className="mb-2 text-xs text-slate-400">Mapa de calor de mensagens</p>
<div bis_size="{&quot;x&quot;:1145,&quot;y&quot;:1657,&quot;w&quot;:141,&quot;h&quot;:92,&quot;abs_x&quot;:1625,&quot;abs_y&quot;:1700}" className="grid grid-cols-7 gap-1">
<div bis_size="{&quot;x&quot;:1145,&quot;y&quot;:1657,&quot;w&quot;:141,&quot;h&quot;:92,&quot;abs_x&quot;:1625,&quot;abs_y&quot;:1700}" className="col-span-7 grid grid-cols-7 gap-1">
<div bis_size="{&quot;x&quot;:1145,&quot;y&quot;:1657,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1625,&quot;abs_y&quot;:1700}" className="h-5 rounded bg-[#8B5CF6]/10"></div>
<div bis_size="{&quot;x&quot;:1166,&quot;y&quot;:1657,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1646,&quot;abs_y&quot;:1700}" className="h-5 rounded bg-[#8B5CF6]/30"></div>
<div bis_size="{&quot;x&quot;:1187,&quot;y&quot;:1657,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1667,&quot;abs_y&quot;:1700}" className="h-5 rounded bg-[#3B82F6]/20"></div>
<div bis_size="{&quot;x&quot;:1208,&quot;y&quot;:1657,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1688,&quot;abs_y&quot;:1700}" className="h-5 rounded bg-[#3B82F6]/40"></div>
<div bis_size="{&quot;x&quot;:1229,&quot;y&quot;:1657,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1709,&quot;abs_y&quot;:1700}" className="h-5 rounded bg-[#8B5CF6]/40"></div>
<div bis_size="{&quot;x&quot;:1249,&quot;y&quot;:1657,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1729,&quot;abs_y&quot;:1700}" className="h-5 rounded bg-[#3B82F6]/20"></div>
<div bis_size="{&quot;x&quot;:1270,&quot;y&quot;:1657,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1750,&quot;abs_y&quot;:1700}" className="h-5 rounded bg-[#8B5CF6]/10"></div>
<div bis_size="{&quot;x&quot;:1145,&quot;y&quot;:1681,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1625,&quot;abs_y&quot;:1724}" className="h-5 rounded bg-[#3B82F6]/30"></div>
<div bis_size="{&quot;x&quot;:1166,&quot;y&quot;:1681,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1646,&quot;abs_y&quot;:1724}" className="h-5 rounded bg-[#8B5CF6]/50"></div>
<div bis_size="{&quot;x&quot;:1187,&quot;y&quot;:1681,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1667,&quot;abs_y&quot;:1724}" className="h-5 rounded bg-[#8B5CF6]/30"></div>
<div bis_size="{&quot;x&quot;:1208,&quot;y&quot;:1681,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1688,&quot;abs_y&quot;:1724}" className="h-5 rounded bg-[#3B82F6]/50"></div>
<div bis_size="{&quot;x&quot;:1229,&quot;y&quot;:1681,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1709,&quot;abs_y&quot;:1724}" className="h-5 rounded bg-[#3B82F6]/30"></div>
<div bis_size="{&quot;x&quot;:1249,&quot;y&quot;:1681,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1729,&quot;abs_y&quot;:1724}" className="h-5 rounded bg-[#8B5CF6]/30"></div>
<div bis_size="{&quot;x&quot;:1270,&quot;y&quot;:1681,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1750,&quot;abs_y&quot;:1724}" className="h-5 rounded bg-[#3B82F6]/20"></div>
<div bis_size="{&quot;x&quot;:1145,&quot;y&quot;:1705,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1625,&quot;abs_y&quot;:1748}" className="h-5 rounded bg-[#8B5CF6]/20"></div>
<div bis_size="{&quot;x&quot;:1166,&quot;y&quot;:1705,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1646,&quot;abs_y&quot;:1748}" className="h-5 rounded bg-[#3B82F6]/30"></div>
<div bis_size="{&quot;x&quot;:1187,&quot;y&quot;:1705,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1667,&quot;abs_y&quot;:1748}" className="h-5 rounded bg-[#3B82F6]/50"></div>
<div bis_size="{&quot;x&quot;:1208,&quot;y&quot;:1705,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1688,&quot;abs_y&quot;:1748}" className="h-5 rounded bg-[#8B5CF6]/50"></div>
<div bis_size="{&quot;x&quot;:1229,&quot;y&quot;:1705,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1709,&quot;abs_y&quot;:1748}" className="h-5 rounded bg-[#8B5CF6]/30"></div>
<div bis_size="{&quot;x&quot;:1249,&quot;y&quot;:1705,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1729,&quot;abs_y&quot;:1748}" className="h-5 rounded bg-[#3B82F6]/20"></div>
<div bis_size="{&quot;x&quot;:1270,&quot;y&quot;:1705,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1750,&quot;abs_y&quot;:1748}" className="h-5 rounded bg-[#8B5CF6]/10"></div>
<div bis_size="{&quot;x&quot;:1145,&quot;y&quot;:1729,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1625,&quot;abs_y&quot;:1772}" className="h-5 rounded bg-[#3B82F6]/20"></div>
<div bis_size="{&quot;x&quot;:1166,&quot;y&quot;:1729,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1646,&quot;abs_y&quot;:1772}" className="h-5 rounded bg-[#8B5CF6]/20"></div>
<div bis_size="{&quot;x&quot;:1187,&quot;y&quot;:1729,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1667,&quot;abs_y&quot;:1772}" className="h-5 rounded bg-[#3B82F6]/30"></div>
<div bis_size="{&quot;x&quot;:1208,&quot;y&quot;:1729,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1688,&quot;abs_y&quot;:1772}" className="h-5 rounded bg-[#8B5CF6]/40"></div>
<div bis_size="{&quot;x&quot;:1229,&quot;y&quot;:1729,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1709,&quot;abs_y&quot;:1772}" className="h-5 rounded bg-[#3B82F6]/50"></div>
<div bis_size="{&quot;x&quot;:1249,&quot;y&quot;:1729,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1729,&quot;abs_y&quot;:1772}" className="h-5 rounded bg-[#8B5CF6]/30"></div>
<div bis_size="{&quot;x&quot;:1270,&quot;y&quot;:1729,&quot;w&quot;:16,&quot;h&quot;:20,&quot;abs_x&quot;:1750,&quot;abs_y&quot;:1772}" className="h-5 rounded bg-[#3B82F6]/10"></div>
</div>
</div>
<p bis_size="{&quot;x&quot;:1145,&quot;y&quot;:1757,&quot;w&quot;:141,&quot;h&quot;:33,&quot;abs_x&quot;:1625,&quot;abs_y&quot;:1800}" className="mt-2 text-[11px] text-slate-500">Intensidade indica volume por horário</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:1866,&quot;w&quot;:1425,&quot;h&quot;:863,&quot;abs_x&quot;:480,&quot;abs_y&quot;:1909}" className="relative py-20" id="demo">
<div bis_size="{&quot;x&quot;:72,&quot;y&quot;:1946,&quot;w&quot;:1280,&quot;h&quot;:703,&quot;abs_x&quot;:552,&quot;abs_y&quot;:1989}" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:1946,&quot;w&quot;:1216,&quot;h&quot;:40,&quot;abs_x&quot;:584,&quot;abs_y&quot;:1989}" className="mb-10" data-animate="">
<h2 bis_size="{&quot;x&quot;:104,&quot;y&quot;:1946,&quot;w&quot;:1216,&quot;h&quot;:40,&quot;abs_x&quot;:584,&quot;abs_y&quot;:1989}" className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Veja como a Clara conversa</h2>
</div>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:2026,&quot;w&quot;:1216,&quot;h&quot;:623,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2069}" className="grid gap-8 lg:grid-cols-2" data-animate="">

<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:2026,&quot;w&quot;:592,&quot;h&quot;:623,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2069}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 ring-1 ring-white/10">
<div bis_size="{&quot;x&quot;:125,&quot;y&quot;:2047,&quot;w&quot;:550,&quot;h&quot;:53,&quot;abs_x&quot;:605,&quot;abs_y&quot;:2090}" className="flex items-center gap-3 pb-4 border-b border-white/10">
<div bis_size="{&quot;x&quot;:125,&quot;y&quot;:2047,&quot;w&quot;:36,&quot;h&quot;:36,&quot;abs_x&quot;:605,&quot;abs_y&quot;:2090}" className="h-9 w-9 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#3B82F6] ring-1 ring-white/10"></div>
<div bis_size="{&quot;x&quot;:173,&quot;y&quot;:2047,&quot;w&quot;:173,&quot;h&quot;:36,&quot;abs_x&quot;:653,&quot;abs_y&quot;:2090}">
<p bis_size="{&quot;x&quot;:173,&quot;y&quot;:2047,&quot;w&quot;:173,&quot;h&quot;:20,&quot;abs_x&quot;:653,&quot;abs_y&quot;:2090}" className="text-sm font-medium text-white">Clara • IA de Atendimento</p>
<p bis_size="{&quot;x&quot;:173,&quot;y&quot;:2067,&quot;w&quot;:173,&quot;h&quot;:16,&quot;abs_x&quot;:653,&quot;abs_y&quot;:2110}" className="text-xs text-slate-400">WhatsApp conectado</p>
</div>
<div bis_size="{&quot;x&quot;:663,&quot;y&quot;:2065,&quot;w&quot;:12,&quot;h&quot;:0,&quot;abs_x&quot;:1143,&quot;abs_y&quot;:2108}" className="ml-auto flex items-center gap-3 text-slate-400">
<i bis_size="{&quot;x&quot;:663,&quot;y&quot;:2065,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1143,&quot;abs_y&quot;:2108}" data-lucide="bot"></i>
<i bis_size="{&quot;x&quot;:675,&quot;y&quot;:2065,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1155,&quot;abs_y&quot;:2108}" data-lucide="shield-check"></i>
</div>
</div>
<div bis_size="{&quot;x&quot;:125,&quot;y&quot;:2116,&quot;w&quot;:550,&quot;h&quot;:420,&quot;abs_x&quot;:605,&quot;abs_y&quot;:2159}" className="mt-4 h-[420px] overflow-y-auto rounded-xl bg-white/5 p-4 ring-1 ring-white/10 space-y-3" id="chatBody">
<div bis_size="{&quot;x&quot;:141,&quot;y&quot;:2132,&quot;w&quot;:518,&quot;h&quot;:36,&quot;abs_x&quot;:621,&quot;abs_y&quot;:2175}" className="flex items-end gap-2">
<div bis_size="{&quot;x&quot;:141,&quot;y&quot;:2140,&quot;w&quot;:28,&quot;h&quot;:28,&quot;abs_x&quot;:621,&quot;abs_y&quot;:2183}" className="h-7 w-7 rounded-full bg-gradient-to-tr from-[#8B5CF6] to-[#3B82F6] ring-1 ring-white/10"></div>
<div bis_size="{&quot;x&quot;:177,&quot;y&quot;:2132,&quot;w&quot;:314,&quot;h&quot;:36,&quot;abs_x&quot;:657,&quot;abs_y&quot;:2175}" className="max-w-[75%] rounded-2xl rounded-tl-sm bg-white/10 px-3 py-2 text-sm text-slate-100 ring-1 ring-white/10">
                  Oi! Sou a Clara. Como posso te ajudar hoje?
                </div>
</div>
</div>
<div bis_size="{&quot;x&quot;:125,&quot;y&quot;:2552,&quot;w&quot;:550,&quot;h&quot;:28,&quot;abs_x&quot;:605,&quot;abs_y&quot;:2595}" className="mt-4 flex flex-wrap gap-2">
<button bis_size="{&quot;x&quot;:125,&quot;y&quot;:2552,&quot;w&quot;:119,&quot;h&quot;:28,&quot;abs_x&quot;:605,&quot;abs_y&quot;:2595}" className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-300 ring-1 ring-white/10 hover:text-white hover:ring-white/20 transition" data-quick="Quero agendar limpeza">Agendar limpeza</button>
<button bis_size="{&quot;x&quot;:253,&quot;y&quot;:2552,&quot;w&quot;:119,&quot;h&quot;:28,&quot;abs_x&quot;:733,&quot;abs_y&quot;:2595}" className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-300 ring-1 ring-white/10 hover:text-white hover:ring-white/20 transition" data-quick="Valores de botox">Valores de botox</button>
<button bis_size="{&quot;x&quot;:380,&quot;y&quot;:2552,&quot;w&quot;:77,&quot;h&quot;:28,&quot;abs_x&quot;:860,&quot;abs_y&quot;:2595}" className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-slate-300 ring-1 ring-white/10 hover:text-white hover:ring-white/20 transition" data-quick="Atendem convênio?">Convênio</button>
</div>
<div bis_size="{&quot;x&quot;:125,&quot;y&quot;:2592,&quot;w&quot;:550,&quot;h&quot;:36,&quot;abs_x&quot;:605,&quot;abs_y&quot;:2635}" className="mt-3 flex items-center gap-2">
<input bis_size="{&quot;x&quot;:125,&quot;y&quot;:2592,&quot;w&quot;:468,&quot;h&quot;:36,&quot;abs_x&quot;:605,&quot;abs_y&quot;:2635}" className="w-full rounded-md bg-white/5 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none" id="chatInput" placeholder="Digite aqui..." type="text" />
<button bis_size="{&quot;x&quot;:601,&quot;y&quot;:2592,&quot;w&quot;:73,&quot;h&quot;:36,&quot;abs_x&quot;:1081,&quot;abs_y&quot;:2635}" className="rounded-md bg-gradient-to-tr from-[#8B5CF6] to-[#3B82F6] px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10 hover:opacity-95 active:opacity-90 transition" id="chatSend">Enviar</button>
</div>
</div>

<div bis_size="{&quot;x&quot;:728,&quot;y&quot;:2026,&quot;w&quot;:592,&quot;h&quot;:623,&quot;abs_x&quot;:1208,&quot;abs_y&quot;:2069}" className="grid content-between gap-6">
<div bis_size="{&quot;x&quot;:728,&quot;y&quot;:2026,&quot;w&quot;:592,&quot;h&quot;:178,&quot;abs_x&quot;:1208,&quot;abs_y&quot;:2069}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<h3 bis_size="{&quot;x&quot;:753,&quot;y&quot;:2051,&quot;w&quot;:542,&quot;h&quot;:28,&quot;abs_x&quot;:1233,&quot;abs_y&quot;:2094}" className="text-xl font-medium text-white tracking-tight">Por que os pacientes amam a Clara</h3>
<ul bis_size="{&quot;x&quot;:753,&quot;y&quot;:2095,&quot;w&quot;:542,&quot;h&quot;:84,&quot;abs_x&quot;:1233,&quot;abs_y&quot;:2138}" className="mt-4 space-y-3 text-sm text-slate-300">
<li bis_size="{&quot;x&quot;:753,&quot;y&quot;:2095,&quot;w&quot;:542,&quot;h&quot;:20,&quot;abs_x&quot;:1233,&quot;abs_y&quot;:2138}" className="flex items-start gap-3">
<i bis_size="{&quot;x&quot;:753,&quot;y&quot;:2097,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1233,&quot;abs_y&quot;:2140}" className="mt-0.5 text-[#10B981]" data-lucide="clock-8"></i>
                  Atendimento 24h com respostas imediatas, sem fila de espera
                </li>
<li bis_size="{&quot;x&quot;:753,&quot;y&quot;:2127,&quot;w&quot;:542,&quot;h&quot;:20,&quot;abs_x&quot;:1233,&quot;abs_y&quot;:2170}" className="flex items-start gap-3">
<i bis_size="{&quot;x&quot;:753,&quot;y&quot;:2129,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1233,&quot;abs_y&quot;:2172}" className="mt-0.5 text-[#10B981]" data-lucide="check-circle-2"></i>
                  Informações precisas sobre procedimentos, convênios e preparos
                </li>
<li bis_size="{&quot;x&quot;:753,&quot;y&quot;:2159,&quot;w&quot;:542,&quot;h&quot;:20,&quot;abs_x&quot;:1233,&quot;abs_y&quot;:2202}" className="flex items-start gap-3">
<i bis_size="{&quot;x&quot;:753,&quot;y&quot;:2161,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1233,&quot;abs_y&quot;:2204}" className="mt-0.5 text-[#10B981]" data-lucide="smile-plus"></i>
                  Linguagem acolhedora e consistente com o tom da clínica
                </li>
</ul>
</div>
<div bis_size="{&quot;x&quot;:728,&quot;y&quot;:2355,&quot;w&quot;:592,&quot;h&quot;:294,&quot;abs_x&quot;:1208,&quot;abs_y&quot;:2398}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<div bis_size="{&quot;x&quot;:753,&quot;y&quot;:2380,&quot;w&quot;:542,&quot;h&quot;:36,&quot;abs_x&quot;:1233,&quot;abs_y&quot;:2423}" className="flex items-center justify-between">
<div bis_size="{&quot;x&quot;:753,&quot;y&quot;:2380,&quot;w&quot;:201,&quot;h&quot;:36,&quot;abs_x&quot;:1233,&quot;abs_y&quot;:2423}">
<h4 bis_size="{&quot;x&quot;:753,&quot;y&quot;:2380,&quot;w&quot;:201,&quot;h&quot;:20,&quot;abs_x&quot;:1233,&quot;abs_y&quot;:2423}" className="text-sm font-medium text-slate-300">Visão do Dashboard</h4>
<p bis_size="{&quot;x&quot;:753,&quot;y&quot;:2400,&quot;w&quot;:201,&quot;h&quot;:16,&quot;abs_x&quot;:1233,&quot;abs_y&quot;:2443}" className="text-xs text-slate-500">Horários de pico, funil e sentimento</p>
</div>
<i bis_size="{&quot;x&quot;:1295,&quot;y&quot;:2398,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1775,&quot;abs_y&quot;:2441}" className="text-slate-400" data-lucide="layout-dashboard"></i>
</div>
<img alt="Mockup de Dashboard" bis_size="{&quot;x&quot;:753,&quot;y&quot;:2432,&quot;w&quot;:542,&quot;h&quot;:192,&quot;abs_x&quot;:1233,&quot;abs_y&quot;:2475}" className="mt-4 h-48 w-full rounded-xl object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
</div>
</div>
</div>
</div>
</section>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:2729,&quot;w&quot;:1425,&quot;h&quot;:632,&quot;abs_x&quot;:480,&quot;abs_y&quot;:2772}" className="relative py-20" id="beneficios">
<div bis_size="{&quot;x&quot;:72,&quot;y&quot;:2809,&quot;w&quot;:1280,&quot;h&quot;:472,&quot;abs_x&quot;:552,&quot;abs_y&quot;:2852}" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-animate="">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:2809,&quot;w&quot;:1216,&quot;h&quot;:72,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2852}" className="mb-10">
<h2 bis_size="{&quot;x&quot;:104,&quot;y&quot;:2809,&quot;w&quot;:1216,&quot;h&quot;:40,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2852}" className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Benefícios para sua clínica</h2>
<p bis_size="{&quot;x&quot;:104,&quot;y&quot;:2857,&quot;w&quot;:1216,&quot;h&quot;:24,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2900}" className="mt-2 text-slate-400">Transforme gargalos operacionais em crescimento previsível.</p>
</div>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:2921,&quot;w&quot;:1216,&quot;h&quot;:360,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2964}" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:2921,&quot;w&quot;:389,&quot;h&quot;:182,&quot;abs_x&quot;:584,&quot;abs_y&quot;:2964}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<i bis_size="{&quot;x&quot;:129,&quot;y&quot;:2946,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:609,&quot;abs_y&quot;:2989}" className="text-[#10B981]" data-lucide="arrow-up-right"></i>
<h3 bis_size="{&quot;x&quot;:129,&quot;y&quot;:2958,&quot;w&quot;:339,&quot;h&quot;:56,&quot;abs_x&quot;:609,&quot;abs_y&quot;:3001}" className="mt-3 text-lg font-medium text-white tracking-tight">Mais agendamentos fora do horário comercial</h3>
<p bis_size="{&quot;x&quot;:129,&quot;y&quot;:3018,&quot;w&quot;:339,&quot;h&quot;:40,&quot;abs_x&quot;:609,&quot;abs_y&quot;:3061}" className="mt-1 text-sm text-slate-400">Capte a demanda noturna e de fim de semana com atendimento 24/7 — sem depender da recepção.</p>
</div>
<div bis_size="{&quot;x&quot;:517,&quot;y&quot;:2921,&quot;w&quot;:389,&quot;h&quot;:182,&quot;abs_x&quot;:997,&quot;abs_y&quot;:2964}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<i bis_size="{&quot;x&quot;:542,&quot;y&quot;:2946,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:2989}" className="text-[#3B82F6]" data-lucide="calendar-check"></i>
<h3 bis_size="{&quot;x&quot;:542,&quot;y&quot;:2958,&quot;w&quot;:339,&quot;h&quot;:56,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:3001}" className="mt-3 text-lg font-medium text-white tracking-tight">Menos faltas com lembretes automatizados</h3>
<p bis_size="{&quot;x&quot;:542,&quot;y&quot;:3018,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:3061}" className="mt-1 text-sm text-slate-400">Confirmações e lembretes inteligentes reduzem o no‑show e liberam vagas com antecedência para realocação.</p>
</div>
<div bis_size="{&quot;x&quot;:931,&quot;y&quot;:2921,&quot;w&quot;:389,&quot;h&quot;:182,&quot;abs_x&quot;:1411,&quot;abs_y&quot;:2964}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<i bis_size="{&quot;x&quot;:956,&quot;y&quot;:2946,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:2989}" className="text-[#10B981]" data-lucide="wallet"></i>
<h3 bis_size="{&quot;x&quot;:956,&quot;y&quot;:2958,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:3001}" className="mt-3 text-lg font-medium text-white tracking-tight">Economia de tempo com recepção</h3>
<p bis_size="{&quot;x&quot;:956,&quot;y&quot;:2990,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:3033}" className="mt-1 text-sm text-slate-400">Automatize perguntas repetitivas e agendamentos, liberando 2–3 horas por dia para tarefas de maior valor.</p>
</div>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:3127,&quot;w&quot;:389,&quot;h&quot;:154,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3170}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<i bis_size="{&quot;x&quot;:129,&quot;y&quot;:3152,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:609,&quot;abs_y&quot;:3195}" className="text-[#8B5CF6]" data-lucide="file-check-2"></i>
<h3 bis_size="{&quot;x&quot;:129,&quot;y&quot;:3164,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:609,&quot;abs_y&quot;:3207}" className="mt-3 text-lg font-medium text-white tracking-tight">Padronização no primeiro contato</h3>
<p bis_size="{&quot;x&quot;:129,&quot;y&quot;:3196,&quot;w&quot;:339,&quot;h&quot;:40,&quot;abs_x&quot;:609,&quot;abs_y&quot;:3239}" className="mt-1 text-sm text-slate-400">Respostas consistentes e alinhadas à marca aumentam a conversão em consultas.</p>
</div>
<div bis_size="{&quot;x&quot;:517,&quot;y&quot;:3127,&quot;w&quot;:389,&quot;h&quot;:154,&quot;abs_x&quot;:997,&quot;abs_y&quot;:3170}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<i bis_size="{&quot;x&quot;:542,&quot;y&quot;:3152,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:3195}" className="text-[#EF4444]" data-lucide="chart-no-axes-column"></i>
<h3 bis_size="{&quot;x&quot;:542,&quot;y&quot;:3164,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:3207}" className="mt-3 text-lg font-medium text-white tracking-tight">Mais visibilidade da jornada do paciente</h3>
<p bis_size="{&quot;x&quot;:542,&quot;y&quot;:3196,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:3239}" className="mt-1 text-sm text-slate-400">Identifique onde os pacientes desistem e ajuste processos com dados de funil, sentimento e picos de demanda.</p>
</div>
<div bis_size="{&quot;x&quot;:931,&quot;y&quot;:3127,&quot;w&quot;:389,&quot;h&quot;:154,&quot;abs_x&quot;:1411,&quot;abs_y&quot;:3170}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<i bis_size="{&quot;x&quot;:956,&quot;y&quot;:3152,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:3195}" className="text-[#8B5CF6]" data-lucide="expand"></i>
<h3 bis_size="{&quot;x&quot;:956,&quot;y&quot;:3164,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:3207}" className="mt-3 text-lg font-medium text-white tracking-tight">Escalabilidade sem contratar mais gente</h3>
<p bis_size="{&quot;x&quot;:956,&quot;y&quot;:3196,&quot;w&quot;:339,&quot;h&quot;:40,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:3239}" className="mt-1 text-sm text-slate-400">Atenda dezenas de conversas simultâneas com qualidade, mantendo custos sob controle.</p>
</div>
</div>
</div>
</section>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:3361,&quot;w&quot;:1425,&quot;h&quot;:648,&quot;abs_x&quot;:480,&quot;abs_y&quot;:3404}" className="relative py-20">
<div bis_size="{&quot;x&quot;:72,&quot;y&quot;:3441,&quot;w&quot;:1280,&quot;h&quot;:488,&quot;abs_x&quot;:552,&quot;abs_y&quot;:3484}" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-animate="">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:3441,&quot;w&quot;:1216,&quot;h&quot;:488,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3484}" className="grid gap-10 lg:grid-cols-3">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:3441,&quot;w&quot;:378,&quot;h&quot;:488,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3484}" className="lg:col-span-1">
<h2 bis_size="{&quot;x&quot;:104,&quot;y&quot;:3441,&quot;w&quot;:378,&quot;h&quot;:120,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3484}" className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Resultados que impactam o faturamento</h2>
<p bis_size="{&quot;x&quot;:104,&quot;y&quot;:3569,&quot;w&quot;:378,&quot;h&quot;:48,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3612}" className="mt-2 text-slate-400">Dados claros, focados em negócio — não em vaidade.</p>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:3641,&quot;w&quot;:378,&quot;h&quot;:240,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3684}" className="mt-6 grid grid-cols-2 gap-4">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:3641,&quot;w&quot;:181,&quot;h&quot;:112,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3684}" className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
<p bis_size="{&quot;x&quot;:120,&quot;y&quot;:3657,&quot;w&quot;:149,&quot;h&quot;:16,&quot;abs_x&quot;:600,&quot;abs_y&quot;:3700}" className="text-xs text-slate-400">+30% de agendamentos</p>
<p bis_size="{&quot;x&quot;:120,&quot;y&quot;:3673,&quot;w&quot;:149,&quot;h&quot;:64,&quot;abs_x&quot;:600,&quot;abs_y&quot;:3716}" className="text-2xl font-semibold text-white tracking-tight">Fora do horário</p>
</div>
<div bis_size="{&quot;x&quot;:301,&quot;y&quot;:3641,&quot;w&quot;:181,&quot;h&quot;:112,&quot;abs_x&quot;:781,&quot;abs_y&quot;:3684}" className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
<p bis_size="{&quot;x&quot;:317,&quot;y&quot;:3657,&quot;w&quot;:149,&quot;h&quot;:16,&quot;abs_x&quot;:797,&quot;abs_y&quot;:3700}" className="text-xs text-slate-400">-31% de faltas</p>
<p bis_size="{&quot;x&quot;:317,&quot;y&quot;:3673,&quot;w&quot;:149,&quot;h&quot;:32,&quot;abs_x&quot;:797,&quot;abs_y&quot;:3716}" className="text-2xl font-semibold text-white tracking-tight">Em 60 dias</p>
</div>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:3769,&quot;w&quot;:181,&quot;h&quot;:112,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3812}" className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
<p bis_size="{&quot;x&quot;:120,&quot;y&quot;:3785,&quot;w&quot;:149,&quot;h&quot;:16,&quot;abs_x&quot;:600,&quot;abs_y&quot;:3828}" className="text-xs text-slate-400">2–3h por dia</p>
<p bis_size="{&quot;x&quot;:120,&quot;y&quot;:3801,&quot;w&quot;:149,&quot;h&quot;:64,&quot;abs_x&quot;:600,&quot;abs_y&quot;:3844}" className="text-2xl font-semibold text-white tracking-tight">Recepção livre</p>
</div>
<div bis_size="{&quot;x&quot;:301,&quot;y&quot;:3769,&quot;w&quot;:181,&quot;h&quot;:112,&quot;abs_x&quot;:781,&quot;abs_y&quot;:3812}" className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
<p bis_size="{&quot;x&quot;:317,&quot;y&quot;:3785,&quot;w&quot;:149,&quot;h&quot;:16,&quot;abs_x&quot;:797,&quot;abs_y&quot;:3828}" className="text-xs text-slate-400">100% das conversas</p>
<p bis_size="{&quot;x&quot;:317,&quot;y&quot;:3801,&quot;w&quot;:149,&quot;h&quot;:32,&quot;abs_x&quot;:797,&quot;abs_y&quot;:3844}" className="text-2xl font-semibold text-white tracking-tight">Centralizadas</p>
</div>
</div>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:3905,&quot;w&quot;:378,&quot;h&quot;:24,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3948}" className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-400">
<span bis_size="{&quot;x&quot;:104,&quot;y&quot;:3905,&quot;w&quot;:65,&quot;h&quot;:24,&quot;abs_x&quot;:584,&quot;abs_y&quot;:3948}" className="rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10">VivaBem</span>
<span bis_size="{&quot;x&quot;:182,&quot;y&quot;:3905,&quot;w&quot;:64,&quot;h&quot;:24,&quot;abs_x&quot;:662,&quot;abs_y&quot;:3948}" className="rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10">Sorriso+</span>
<span bis_size="{&quot;x&quot;:259,&quot;y&quot;:3905,&quot;w&quot;:69,&quot;h&quot;:24,&quot;abs_x&quot;:739,&quot;abs_y&quot;:3948}" className="rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10">FisioCare</span>
<span bis_size="{&quot;x&quot;:340,&quot;y&quot;:3905,&quot;w&quot;:85,&quot;h&quot;:24,&quot;abs_x&quot;:820,&quot;abs_y&quot;:3948}" className="rounded-md bg-white/5 px-2 py-1 ring-1 ring-white/10">DermaClinic</span>
</div>
</div>
<div bis_size="{&quot;x&quot;:523,&quot;y&quot;:3441,&quot;w&quot;:797,&quot;h&quot;:488,&quot;abs_x&quot;:1003,&quot;abs_y&quot;:3484}" className="lg:col-span-2 grid gap-6 md:grid-cols-2">
<div bis_size="{&quot;x&quot;:523,&quot;y&quot;:3441,&quot;w&quot;:386,&quot;h&quot;:242,&quot;abs_x&quot;:1003,&quot;abs_y&quot;:3484}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<div bis_size="{&quot;x&quot;:548,&quot;y&quot;:3466,&quot;w&quot;:336,&quot;h&quot;:40,&quot;abs_x&quot;:1028,&quot;abs_y&quot;:3509}" className="flex items-center gap-3">
<img alt="Dra. Ana" bis_size="{&quot;x&quot;:548,&quot;y&quot;:3466,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:1028,&quot;abs_y&quot;:3509}" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=96&h=96&fit=crop" />
<div bis_size="{&quot;x&quot;:600,&quot;y&quot;:3468,&quot;w&quot;:86,&quot;h&quot;:36,&quot;abs_x&quot;:1080,&quot;abs_y&quot;:3511}">
<p bis_size="{&quot;x&quot;:600,&quot;y&quot;:3468,&quot;w&quot;:86,&quot;h&quot;:20,&quot;abs_x&quot;:1080,&quot;abs_y&quot;:3511}" className="text-sm font-medium text-white">Dra. Ana</p>
<p bis_size="{&quot;x&quot;:600,&quot;y&quot;:3488,&quot;w&quot;:86,&quot;h&quot;:16,&quot;abs_x&quot;:1080,&quot;abs_y&quot;:3531}" className="text-xs text-slate-400">Dermatologista</p>
</div>
</div>
<p bis_size="{&quot;x&quot;:548,&quot;y&quot;:3518,&quot;w&quot;:336,&quot;h&quot;:60,&quot;abs_x&quot;:1028,&quot;abs_y&quot;:3561}" className="mt-3 text-sm text-slate-300">“Reduzimos as faltas em 31% com os lembretes da Clara. O atendimento ficou mais rápido e humanizado.”</p>
</div>
<div bis_size="{&quot;x&quot;:933,&quot;y&quot;:3441,&quot;w&quot;:386,&quot;h&quot;:242,&quot;abs_x&quot;:1413,&quot;abs_y&quot;:3484}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<div bis_size="{&quot;x&quot;:958,&quot;y&quot;:3466,&quot;w&quot;:336,&quot;h&quot;:40,&quot;abs_x&quot;:1438,&quot;abs_y&quot;:3509}" className="flex items-center gap-3">
<img alt="Dr. Lucas" bis_size="{&quot;x&quot;:958,&quot;y&quot;:3466,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:1438,&quot;abs_y&quot;:3509}" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div bis_size="{&quot;x&quot;:1010,&quot;y&quot;:3468,&quot;w&quot;:68,&quot;h&quot;:36,&quot;abs_x&quot;:1490,&quot;abs_y&quot;:3511}">
<p bis_size="{&quot;x&quot;:1010,&quot;y&quot;:3468,&quot;w&quot;:68,&quot;h&quot;:20,&quot;abs_x&quot;:1490,&quot;abs_y&quot;:3511}" className="text-sm font-medium text-white">Dr. Lucas</p>
<p bis_size="{&quot;x&quot;:1010,&quot;y&quot;:3488,&quot;w&quot;:68,&quot;h&quot;:16,&quot;abs_x&quot;:1490,&quot;abs_y&quot;:3531}" className="text-xs text-slate-400">Odontologia</p>
</div>
</div>
<p bis_size="{&quot;x&quot;:958,&quot;y&quot;:3518,&quot;w&quot;:336,&quot;h&quot;:60,&quot;abs_x&quot;:1438,&quot;abs_y&quot;:3561}" className="mt-3 text-sm text-slate-300">“A agenda encheu. A Clara fecha horários em menos de 2 minutos, mesmo à noite ou no fim de semana.”</p>
</div>
<div bis_size="{&quot;x&quot;:523,&quot;y&quot;:3707,&quot;w&quot;:386,&quot;h&quot;:222,&quot;abs_x&quot;:1003,&quot;abs_y&quot;:3750}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<div bis_size="{&quot;x&quot;:548,&quot;y&quot;:3732,&quot;w&quot;:336,&quot;h&quot;:40,&quot;abs_x&quot;:1028,&quot;abs_y&quot;:3775}" className="flex items-center gap-3">
<img alt="Clínica Movimento" bis_size="{&quot;x&quot;:548,&quot;y&quot;:3732,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:1028,&quot;abs_y&quot;:3775}" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=96&h=96&fit=crop" />
<div bis_size="{&quot;x&quot;:600,&quot;y&quot;:3734,&quot;w&quot;:65,&quot;h&quot;:36,&quot;abs_x&quot;:1080,&quot;abs_y&quot;:3777}">
<p bis_size="{&quot;x&quot;:600,&quot;y&quot;:3734,&quot;w&quot;:65,&quot;h&quot;:20,&quot;abs_x&quot;:1080,&quot;abs_y&quot;:3777}" className="text-sm font-medium text-white">Marina</p>
<p bis_size="{&quot;x&quot;:600,&quot;y&quot;:3754,&quot;w&quot;:65,&quot;h&quot;:16,&quot;abs_x&quot;:1080,&quot;abs_y&quot;:3797}" className="text-xs text-slate-400">Fisioterapia</p>
</div>
</div>
<p bis_size="{&quot;x&quot;:548,&quot;y&quot;:3784,&quot;w&quot;:336,&quot;h&quot;:40,&quot;abs_x&quot;:1028,&quot;abs_y&quot;:3827}" className="mt-3 text-sm text-slate-300">“A triagem da Clara economiza 3h por dia da recepção e melhora a jornada do paciente.”</p>
</div>
<div bis_size="{&quot;x&quot;:933,&quot;y&quot;:3707,&quot;w&quot;:386,&quot;h&quot;:222,&quot;abs_x&quot;:1413,&quot;abs_y&quot;:3750}" className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<div bis_size="{&quot;x&quot;:958,&quot;y&quot;:3732,&quot;w&quot;:336,&quot;h&quot;:40,&quot;abs_x&quot;:1438,&quot;abs_y&quot;:3775}" className="flex items-center gap-3">
<img alt="Clínica Bem" bis_size="{&quot;x&quot;:958,&quot;y&quot;:3732,&quot;w&quot;:40,&quot;h&quot;:40,&quot;abs_x&quot;:1438,&quot;abs_y&quot;:3775}" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&q=80" />
<div bis_size="{&quot;x&quot;:1010,&quot;y&quot;:3734,&quot;w&quot;:97,&quot;h&quot;:36,&quot;abs_x&quot;:1490,&quot;abs_y&quot;:3777}">
<p bis_size="{&quot;x&quot;:1010,&quot;y&quot;:3734,&quot;w&quot;:97,&quot;h&quot;:20,&quot;abs_x&quot;:1490,&quot;abs_y&quot;:3777}" className="text-sm font-medium text-white">Carlos</p>
<p bis_size="{&quot;x&quot;:1010,&quot;y&quot;:3754,&quot;w&quot;:97,&quot;h&quot;:16,&quot;abs_x&quot;:1490,&quot;abs_y&quot;:3797}" className="text-xs text-slate-400">Gestor de Clínica</p>
</div>
</div>
<p bis_size="{&quot;x&quot;:958,&quot;y&quot;:3784,&quot;w&quot;:336,&quot;h&quot;:40,&quot;abs_x&quot;:1438,&quot;abs_y&quot;:3827}" className="mt-3 text-sm text-slate-300">“Dados e relatórios ajudam a tomar decisões. É nossa SDR de IA.”</p>
</div>
</div>
</div>
</div>
</section>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:4009,&quot;w&quot;:1425,&quot;h&quot;:454,&quot;abs_x&quot;:480,&quot;abs_y&quot;:4052}" className="relative py-20">
<div bis_size="{&quot;x&quot;:72,&quot;y&quot;:4089,&quot;w&quot;:1280,&quot;h&quot;:294,&quot;abs_x&quot;:552,&quot;abs_y&quot;:4132}" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" data-animate="">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:4089,&quot;w&quot;:1216,&quot;h&quot;:72,&quot;abs_x&quot;:584,&quot;abs_y&quot;:4132}" className="mb-10">
<h2 bis_size="{&quot;x&quot;:104,&quot;y&quot;:4089,&quot;w&quot;:1216,&quot;h&quot;:40,&quot;abs_x&quot;:584,&quot;abs_y&quot;:4132}" className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Como funciona</h2>
<p bis_size="{&quot;x&quot;:104,&quot;y&quot;:4137,&quot;w&quot;:1216,&quot;h&quot;:24,&quot;abs_x&quot;:584,&quot;abs_y&quot;:4180}" className="mt-2 text-slate-400">Em poucos passos, sua clínica com uma atendente de IA 24h.</p>
</div>
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:4201,&quot;w&quot;:1216,&quot;h&quot;:182,&quot;abs_x&quot;:584,&quot;abs_y&quot;:4244}" className="grid gap-6 md:grid-cols-3">
<div bis_size="{&quot;x&quot;:104,&quot;y&quot;:4201,&quot;w&quot;:389,&quot;h&quot;:182,&quot;abs_x&quot;:584,&quot;abs_y&quot;:4244}" className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<div bis_size="{&quot;x&quot;:129,&quot;y&quot;:4190,&quot;w&quot;:49,&quot;h&quot;:19,&quot;abs_x&quot;:609,&quot;abs_y&quot;:4233}" className="absolute -top-3 left-6 rounded-full bg-[#8B5CF6] px-2 py-0.5 text-[10px] font-medium text-white ring-1 ring-white/20">Etapa 1</div>
<i bis_size="{&quot;x&quot;:129,&quot;y&quot;:4226,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:609,&quot;abs_y&quot;:4269}" className="text-[#8B5CF6]" data-lucide="database"></i>
<h3 bis_size="{&quot;x&quot;:129,&quot;y&quot;:4238,&quot;w&quot;:339,&quot;h&quot;:56,&quot;abs_x&quot;:609,&quot;abs_y&quot;:4281}" className="mt-3 text-lg font-medium text-white tracking-tight">Treinamos a Clara com os dados da clínica</h3>
<p bis_size="{&quot;x&quot;:129,&quot;y&quot;:4298,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:609,&quot;abs_y&quot;:4341}" className="mt-1 text-sm text-slate-400">Checklist simples: procedimentos, preços, convênios e políticas. Configuramos a Base (RAG) e o tom de voz.</p>
</div>
<div bis_size="{&quot;x&quot;:517,&quot;y&quot;:4201,&quot;w&quot;:389,&quot;h&quot;:182,&quot;abs_x&quot;:997,&quot;abs_y&quot;:4244}" className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<div bis_size="{&quot;x&quot;:542,&quot;y&quot;:4190,&quot;w&quot;:51,&quot;h&quot;:19,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:4233}" className="absolute -top-3 left-6 rounded-full bg-[#3B82F6] px-2 py-0.5 text-[10px] font-medium text-white ring-1 ring-white/20">Etapa 2</div>
<i bis_size="{&quot;x&quot;:542,&quot;y&quot;:4226,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:4269}" className="text-[#3B82F6]" data-lucide="plug-zap"></i>
<h3 bis_size="{&quot;x&quot;:542,&quot;y&quot;:4238,&quot;w&quot;:339,&quot;h&quot;:28,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:4281}" className="mt-3 text-lg font-medium text-white tracking-tight">Integramos com seus canais e agenda</h3>
<p bis_size="{&quot;x&quot;:542,&quot;y&quot;:4270,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:1022,&quot;abs_y&quot;:4313}" className="mt-1 text-sm text-slate-400">Conectamos WhatsApp/Instagram e sua agenda ou CRM. Definimos regras de triagem, escalonamento e confirmações.</p>
</div>
<div bis_size="{&quot;x&quot;:931,&quot;y&quot;:4201,&quot;w&quot;:389,&quot;h&quot;:182,&quot;abs_x&quot;:1411,&quot;abs_y&quot;:4244}" className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 ring-1 ring-white/10">
<div bis_size="{&quot;x&quot;:956,&quot;y&quot;:4190,&quot;w&quot;:52,&quot;h&quot;:19,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:4233}" className="absolute -top-3 left-6 rounded-full bg-[#10B981] px-2 py-0.5 text-[10px] font-medium text-white ring-1 ring-white/20">Etapa 3</div>
<i bis_size="{&quot;x&quot;:956,&quot;y&quot;:4226,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:4269}" className="text-[#10B981]" data-lucide="badge-check"></i>
<h3 bis_size="{&quot;x&quot;:956,&quot;y&quot;:4238,&quot;w&quot;:339,&quot;h&quot;:56,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:4281}" className="mt-3 text-lg font-medium text-white tracking-tight">Em até 48h, Clara começa a atender automaticamente</h3>
<p bis_size="{&quot;x&quot;:956,&quot;y&quot;:4298,&quot;w&quot;:339,&quot;h&quot;:60,&quot;abs_x&quot;:1436,&quot;abs_y&quot;:4341}" className="mt-1 text-sm text-slate-400">Ativamos 24/7. Você acompanha no dashboard e ajustamos os primeiros dias até a performance ideal.</p>
</div>
</div>
</div>
</section>

<section bis_size="{&quot;x&quot;:0,&quot;y&quot;:4463,&quot;w&quot;:1425,&quot;h&quot;:509,&quot;abs_x&quot;:480,&quot;abs_y&quot;:4506}" className="relative py-20" id="faq">
<div bis_size="{&quot;x&quot;:328,&quot;y&quot;:4543,&quot;w&quot;:768,&quot;h&quot;:349,&quot;abs_x&quot;:808,&quot;abs_y&quot;:4586}" className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8" data-animate="">
<h2 bis_size="{&quot;x&quot;:360,&quot;y&quot;:4543,&quot;w&quot;:704,&quot;h&quot;:40,&quot;abs_x&quot;:840,&quot;abs_y&quot;:4586}" className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Perguntas frequentes</h2>
<div bis_size="{&quot;x&quot;:360,&quot;y&quot;:4615,&quot;w&quot;:704,&quot;h&quot;:277,&quot;abs_x&quot;:840,&quot;abs_y&quot;:4658}" className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] ring-1 ring-white/10">
<details bis_size="{&quot;x&quot;:361,&quot;y&quot;:4616,&quot;w&quot;:702,&quot;h&quot;:68,&quot;abs_x&quot;:841,&quot;abs_y&quot;:4659}" className="group p-6">
<summary bis_size="{&quot;x&quot;:385,&quot;y&quot;:4640,&quot;w&quot;:654,&quot;h&quot;:20,&quot;abs_x&quot;:865,&quot;abs_y&quot;:4683}" className="flex cursor-pointer list-none items-center justify-between text-left">
<span bis_size="{&quot;x&quot;:385,&quot;y&quot;:4640,&quot;w&quot;:153,&quot;h&quot;:20,&quot;abs_x&quot;:865,&quot;abs_y&quot;:4683}" className="text-sm font-medium text-white">Ela atende só estética?</span>
<i bis_size="{&quot;x&quot;:1039,&quot;y&quot;:4650,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1519,&quot;abs_y&quot;:4693}" className="text-slate-400 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div bis_size="{&quot;x&quot;:385,&quot;y&quot;:4672,&quot;w&quot;:654,&quot;h&quot;:40,&quot;abs_x&quot;:865,&quot;abs_y&quot;:4715}" className="mt-3 text-sm text-slate-300">
              Não. A Clara é treinada para estética, odontologia, fisioterapia e saúde em geral, com linguagem adequada a cada especialidade.
            </div>
</details>
<details bis_size="{&quot;x&quot;:361,&quot;y&quot;:4684,&quot;w&quot;:702,&quot;h&quot;:69,&quot;abs_x&quot;:841,&quot;abs_y&quot;:4727}" className="group p-6">
<summary bis_size="{&quot;x&quot;:385,&quot;y&quot;:4709,&quot;w&quot;:654,&quot;h&quot;:20,&quot;abs_x&quot;:865,&quot;abs_y&quot;:4752}" className="flex cursor-pointer list-none items-center justify-between text-left">
<span bis_size="{&quot;x&quot;:385,&quot;y&quot;:4709,&quot;w&quot;:189,&quot;h&quot;:20,&quot;abs_x&quot;:865,&quot;abs_y&quot;:4752}" className="text-sm font-medium text-white">Funciona com meu sistema?</span>
<i bis_size="{&quot;x&quot;:1039,&quot;y&quot;:4719,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1519,&quot;abs_y&quot;:4762}" className="text-slate-400 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div bis_size="{&quot;x&quot;:385,&quot;y&quot;:4741,&quot;w&quot;:654,&quot;h&quot;:40,&quot;abs_x&quot;:865,&quot;abs_y&quot;:4784}" className="mt-3 text-sm text-slate-300">
              Sim. Integramos com agendas e CRMs populares. Caso não tenha, oferecemos uma agenda nativa.
            </div>
</details>
<details bis_size="{&quot;x&quot;:361,&quot;y&quot;:4822,&quot;w&quot;:702,&quot;h&quot;:69,&quot;abs_x&quot;:841,&quot;abs_y&quot;:4865}" className="group pt-6 pr-6 pb-6 pl-6" id="aura-emf1qajoh">
<summary bis_size="{&quot;x&quot;:385,&quot;y&quot;:4847,&quot;w&quot;:654,&quot;h&quot;:20,&quot;abs_x&quot;:865,&quot;abs_y&quot;:4890}" className="flex cursor-pointer list-none text-left items-center justify-between" id="aura-emf1qao80">
<span bis_size="{&quot;x&quot;:385,&quot;y&quot;:4847,&quot;w&quot;:198,&quot;h&quot;:20,&quot;abs_x&quot;:865,&quot;abs_y&quot;:4890}" className="text-sm font-medium text-white">Qual o prazo de implantação?</span>
</summary></details><details bis_size="{&quot;x&quot;:361,&quot;y&quot;:4753,&quot;w&quot;:702,&quot;h&quot;:69,&quot;abs_x&quot;:841,&quot;abs_y&quot;:4796}" className="group pt-6 pr-6 pb-6 pl-6" id="aura-emf1qalcp">
<summary bis_size="{&quot;x&quot;:385,&quot;y&quot;:4778,&quot;w&quot;:654,&quot;h&quot;:20,&quot;abs_x&quot;:865,&quot;abs_y&quot;:4821}" className="flex cursor-pointer list-none items-center justify-between text-left">
<span bis_size="{&quot;x&quot;:385,&quot;y&quot;:4778,&quot;w&quot;:153,&quot;h&quot;:20,&quot;abs_x&quot;:865,&quot;abs_y&quot;:4821}" className="text-sm font-medium text-white">Ela fala com convênio?</span>
<i bis_size="{&quot;x&quot;:1039,&quot;y&quot;:4788,&quot;w&quot;:0,&quot;h&quot;:0,&quot;abs_x&quot;:1519,&quot;abs_y&quot;:4831}" className="text-slate-400 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<div bis_size="{&quot;x&quot;:385,&quot;y&quot;:4810,&quot;w&quot;:654,&quot;h&quot;:40,&quot;abs_x&quot;:865,&quot;abs_y&quot;:4853}" className="mt-3 text-sm text-slate-300">
              Sim. A Clara coleta dados do convênio, verifica elegibilidade e orienta o paciente sobre coparticipação e documentos.
            </div>
</details></div></div></section>
    </>
  );
}
