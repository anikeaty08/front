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



          !(function () {
            if (!window.UnicornStudio) {
              window.UnicornStudio = { isInitialized: !1 };
              var i = document.createElement("script");
              (i.src =
                "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js"),
                (i.onload = function () {
                  window.UnicornStudio.isInitialized || (UnicornStudio.init(), (window.UnicornStudio.isInitialized = !0));
                }),
                (document.head || document.body).appendChild(i);
            }
          })();
        


      // Lucide icons
      lucide.createIcons();

      // Year
      document.getElementById("year").textContent = new Date().getFullYear();

      // Reveal on scroll
      const revealEls = Array.from(document.querySelectorAll(".reveal"));
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) entry.target.classList.add("active");
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach((el) => revealObserver.observe(el));

      // Tabs
      function switchTab(tab) {
        const tabs = ["website", "funnel", "auto"];
        tabs.forEach((t) => {
          const content = document.getElementById(`tab-content-${t}`);
          const btn = document.getElementById(`tab-btn-${t}`);
          if (!content || !btn) return;

          if (t === tab) {
            content.classList.add("active");
            btn.classList.add("bg-white/10", "text-white", "shadow-lg", "border", "border-white/10");
            btn.classList.remove("text-neutral-500");
          } else {
            content.classList.remove("active");
            btn.classList.remove("bg-white/10", "text-white", "shadow-lg", "border", "border-white/10");
            btn.classList.add("text-neutral-500");
          }
        });

        // Re-render icons when tab changes
        lucide.createIcons();
      }

      // Accordion
      function toggleAccordion(id) {
        const el = document.getElementById(id);
        const icon = document.getElementById(`icon-${id}`);
        if (!el) return;

        const isOpen = el.classList.toggle("open");
        if (icon) {
          icon.classList.toggle("rotate-180", isOpen);
        }

        // Ensure only one open at a time (optional, keeps UX clean)
        const all = document.querySelectorAll(".accordion-content");
        all.forEach((acc) => {
          if (acc !== el && acc.classList.contains("open")) {
            acc.classList.remove("open");
            const otherIcon = document.getElementById(`icon-${acc.id}`);
            if (otherIcon) otherIcon.classList.remove("rotate-180");
          }
        });

        lucide.createIcons();
      }

      // Accessibility: close open accordion with Escape
      document.addEventListener("keydown", (e) => {
        if (e.key !== "Escape") return;
        document.querySelectorAll(".accordion-content.open").forEach((acc) => {
          acc.classList.remove("open");
          const icon = document.getElementById(`icon-${acc.id}`);
          if (icon) icon.classList.remove("rotate-180");
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
      

<div className="aura-background-component fixed top-0 w-full h-[50vh] md:h-screen -z-10 saturate-0 opacity-80" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="BqS5vTHVEpn6NiF0g8iJ"></div>

</div>
</div>
<div className="ambient-light"></div>
<div className="fixed inset-0 z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none" style={{}}></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3" href="#topo">
<span className="uppercase text-xs font-semibold text-white tracking-tighter" style={{}}>NEURO</span>
</a>
<nav className="hidden md:flex gap-8 text-xs font-medium tracking-wide uppercase text-neutral-500">
<a className="hover:text-white transition-colors duration-300" href="#processo">Processo</a>
<a className="hover:text-white transition-colors duration-300" href="#solucoes">Soluções</a>
<a className="hover:text-white transition-colors duration-300" href="#faq">Intel</a>
</nav>
<a className="hidden md:flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-xs font-medium text-white bg-white/5 border-white/10 border rounded pt-1.5 pr-4 pb-1.5 pl-4" href="#auditoria">
          Consulta Gratuita
        </a>
</div>
</header>

<section className="md:pt-48 md:pb-36 flex flex-col overflow-hidden text-center pt-32 pr-6 pb-24 pl-6 relative items-center" id="topo">
<div className="z-10 flex flex-col relative items-center">
<div className="mb-8 opacity-70">
<img alt="Motivo laureado" className="w-20 h-20 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a76668e0-5116-42ff-9b97-a16445852475_320w.png"/>
</div>
<h1 className="leading-[0.95] text-5xl font-medium text-white tracking-tight max-w-6xl mr-auto mb-8 ml-auto drop-shadow-2xl md:text-7xl lg:text-7xl">
          Automação inteligente
          <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500">para escalar o teu negócio.</span>
</h1>
<p className="md:text-lg leading-relaxed text-base font-light text-neutral-400 tracking-wide max-w-2xl mr-auto mb-12 ml-auto">
          A NEURO AI é uma empresa angolana especializada em educação, consultoria e desenvolvimento de automações e aplicações com IA.
          Modernizamos operações com automação inteligente e soluções práticas, orientadas a resultados.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">

<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_10px_rgba(255,255,255,0.18)] rounded-full relative shadow-[0_10px_50px_rgba(255,255,255,0.08)] w-full sm:w-auto justify-center" href="#auditoria" style={{'--spread': '90deg', '--shimmer-color': 'rgba(255, 255, 255, 0.65)', '--radius': '9999px', '--speed': '4s', '--cut': '1px', '--bg': 'rgba(255, 255, 255, 0.05)'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"></div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-2 sm:w-auto overflow-hidden text-xs uppercase font-semibold tracking-wider text-white w-full py-3.5 px-8 relative items-center justify-center">
<div style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none'}}></div>
<div className="absolute inset-1 rounded-full bg-gradient-to-b from-neutral-200/90 to-neutral-500/80 backdrop-blur-sm"></div>
<span className="whitespace-nowrap relative z-10 text-black">Marcar Consulta Gratuita</span>
</div>
</a>
<a className="flex items-center justify-center gap-2 px-8 py-3.5 glass-panel text-neutral-300 hover:text-white text-xs uppercase font-medium tracking-wider rounded-lg transition-colors w-full sm:w-auto group" href="#solucoes">
            Ver soluções
            <svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>
</div>
<div className="mt-32 h-px w-full max-w-[200px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section>

<section className="py-32 px-6 border-b border-white/5 relative z-10">
<div className="grid md:grid-cols-2 gap-16 max-w-6xl mr-auto ml-auto gap-x-16 gap-y-16 items-center">
<div className="reveal space-y-8">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">O gap de eficiência está a custar-te crescimento.</h2>
<div className="space-y-8">
<div className="flex items-start gap-5 group">
<div className="w-0.5 h-12 bg-neutral-800 group-hover:bg-neutral-700 transition-colors mt-1"></div>
<div className="">
<h4 className="text-white text-base font-medium mb-2">O ciclo manual</h4>
<p className="text-neutral-500 text-base font-light leading-relaxed">
                  Horas perdidas em tarefas repetitivas (entrada de dados, marcações, relatórios) reduzem margens e travam a escala.
                </p>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-0.5 h-12 bg-neutral-200 shadow-[0_0_18px_rgba(255,255,255,0.18)] mt-1"></div>
<div className="">
<h4 className="text-white text-base font-medium mb-2">A vantagem automatizada</h4>
<p className="text-neutral-400 text-base font-light leading-relaxed">
                  Construímos sistemas e agentes com IA que correm 24/7, reduzem erro e tornam a operação mais eficiente e previsível.
                </p>
</div>
</div>
</div>
</div>

<div className="glass-panel p-10 rounded-2xl relative overflow-hidden group reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute top-0 right-0 p-6 opacity-10">
<svg className="lucide lucide-brain-circuit w-16 h-16 text-white" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<p className="text-xl md:text-2xl font-light text-neutral-200 leading-relaxed mb-8 relative z-10">
            “A tua empresa não precisa de outro funcionário. Precisa de outro cérebro.”
          </p>
<div className="flex items-center gap-3 relative z-10">
<div className="w-6 h-px bg-neutral-200"></div>
<span className="text-xs uppercase tracking-[0.2em] text-neutral-200 font-semibold">Engenharia NEURO AI</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 relative bg-black/20">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="glass-panel p-8 rounded-xl text-center reveal group hover:border-white/20 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tight group-hover:text-neutral-200 transition-colors">24/7</div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-white/30 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">Disponibilidade</p>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[180px] mx-auto">A tua operação continua mesmo fora do horário.</p>
</div>
<div className="glass-panel p-8 rounded-xl text-center reveal delay-75 group hover:border-white/20 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tight group-hover:text-neutral-200 transition-colors">10x</div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-white/30 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">Produtividade</p>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[180px] mx-auto">Agentes de IA aceleram tarefas repetitivas e suporte.</p>
</div>
<div className="glass-panel p-8 rounded-xl text-center reveal delay-150 group hover:border-white/20 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tight group-hover:text-neutral-200 transition-colors">0%</div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-white/30 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">Erro manual</p>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[180px] mx-auto">Menos falhas em processos críticos e dados.</p>
</div>
<div className="glass-panel p-8 rounded-xl text-center reveal delay-200 group hover:border-white/20 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tight group-hover:text-neutral-200 transition-colors">+80%</div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-white/30 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">Eficiência</p>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[180px] mx-auto">Mais output com a mesma equipa e estrutura.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative" id="solucoes">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Soluções Expecializadas</h2>
<p className="text-neutral-500 text-base">Seleciona uma arquitetura para inspecionar o sistema.</p>
</div>
<div className="w-full reveal delay-100">
<div className="flex flex-col sm:flex-row justify-center mb-12">
<div className="inline-flex bg-neutral-900/40 backdrop-blur-md p-1.5 rounded-full border border-white/5">
<button className="px-8 py-2.5 text-xs font-medium rounded-full transition-all duration-300 bg-white/10 text-white shadow-lg border border-white/10" id="tab-btn-website" onclick="switchTab('website')">
                Workflows
              </button>
<button className="px-8 py-2.5 text-xs font-medium rounded-full text-neutral-500 hover:text-white transition-all duration-300 hover:bg-white/5" id="tab-btn-funnel" onclick="switchTab('funnel')">
                Suporte IA
              </button>
<button className="px-8 py-2.5 text-xs font-medium rounded-full text-neutral-500 hover:text-white transition-all duration-300 hover:bg-white/5" id="tab-btn-auto" onclick="switchTab('auto')">
                Outreach
              </button>
</div>
</div>

<div className="tab-content active" id="tab-content-website">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-white/5 relative z-10">
<div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Automação de workflows</h3>
<p className="text-neutral-400 text-base font-light">Liga as tuas apps. Automatiza processos. Recupera tempo.</p>
</div>
<div className="mt-6 md:mt-0 text-left md:text-right">
<span className="block text-2xl font-semibold text-white tracking-tight">Consulta Gratuita</span>
<span className="block text-xs uppercase tracking-wider text-neutral-200 font-medium">Auditoria inicial 100% grátis</span>
<span className="block text-xs text-neutral-500 mt-1 font-medium">Sem compromisso</span>
</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
<li className="flex items-start gap-4 text-base text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-neutral-200 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Cenários personalizados (integrações e automações)</span>
</li>
<li className="flex items-start gap-4 text-base text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-neutral-200 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Sincronização de CRM e dados</span>
</li>
<li className="flex items-start gap-4 text-base text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-neutral-200 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Relatórios e notificações automáticas</span>
</li>
<li className="flex items-start gap-4 text-base text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-neutral-200 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Auditoria completa do fluxo operacional</span>
</li>
</ul>
<div className="mt-10 flex flex-col sm:flex-row gap-3 relative z-10">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors" href="#auditoria">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                  Marcar auditoria grátis
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-white text-xs font-medium uppercase tracking-wider hover:bg-white/10 hover:border-white/20 transition-colors" href="#faq">
<svg className="lucide lucide-sparkles w-4 h-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
                  Ver como funciona
                </a>
</div>
</div>
</div>

<div className="tab-content" id="tab-content-funnel">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-white/5 relative z-10">
<div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">IA para suporte ao cliente</h3>
<p className="text-neutral-400 text-base font-light">Respostas instantâneas. 24/7. Experiência consistente.</p>
</div>
<div className="mt-6 md:mt-0 text-left md:text-right">
<span className="block text-2xl font-semibold text-white tracking-tight">Consulta Gratuita</span>
<span className="block text-xs uppercase tracking-wider text-neutral-200 font-medium">Auditoria inicial 100% grátis</span>
<span className="block text-xs text-neutral-500 mt-1 font-medium">Plano e implementação por escopo</span>
</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
<li className="flex items-start gap-4 text-base text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-neutral-200 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Treino com base de conhecimento</span>
</li>
<li className="flex items-start gap-4 text-base text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-neutral-200 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Integração com website e canais</span>
</li>
<li className="flex items-start gap-4 text-base text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-neutral-200 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Transferência para humano quando necessário</span>
</li>
<li className="flex items-start gap-4 text-base text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-neutral-200 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Redução de volume de tickets (meta por operação)</span>
</li>
</ul>
<div className="mt-10 flex flex-col sm:flex-row gap-3 relative z-10">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors" href="#auditoria">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                  Marcar consulta grátis
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-white text-xs font-medium uppercase tracking-wider hover:bg-white/10 hover:border-white/20 transition-colors" href="#contatos">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
                  Falar no WhatsApp
                </a>
</div>
</div>
</div>

<div className="tab-content" id="tab-content-auto">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 pb-8 border-b border-white/5 relative z-10">
<div>
<h3 className="text-2xl font-medium text-white mb-2 tracking-tight">Sistemas de outreach</h3>
<p className="text-neutral-400 text-base font-light">Pipeline em piloto automático, com personalização.</p>
</div>
<div className="mt-6 md:mt-0 text-left md:text-right">
<span className="block text-2xl font-semibold text-white tracking-tight">Consulta Gratuita</span>
<span className="block text-xs uppercase tracking-wider text-neutral-200 font-medium">Auditoria inicial 100% grátis</span>
<span className="block text-xs text-neutral-500 mt-1 font-medium">Estratégia e execução por escopo</span>
</div>
</div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 relative z-10">
<li className="flex items-start gap-4 text-base text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-neutral-200 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Captação e enriquecimento de leads</span>
</li>
<li className="flex items-start gap-4 text-base text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-neutral-200 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Sequências personalizadas (email e mensagens)</span>
</li>
<li className="flex items-start gap-4 text-base text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-neutral-200 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Automação de follow-up e qualificação</span>
</li>
<li className="flex items-start gap-4 text-base text-neutral-300">
<div className="mt-0.5 p-1 rounded-full bg-white/10 text-neutral-200 border border-white/10">
<svg className="lucide lucide-check w-3.5 h-3.5" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="font-light">Lógica de marcação de reuniões</span>
</li>
</ul>
<div className="mt-10 flex flex-col sm:flex-row gap-3 relative z-10">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white text-black text-xs font-semibold uppercase tracking-wider hover:bg-neutral-200 transition-colors" href="#auditoria">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                  Marcar auditoria grátis
                </a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-white text-xs font-medium uppercase tracking-wider hover:bg-white/10 hover:border-white/20 transition-colors" href="#faq">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                  Ver perguntas
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-6xl mx-auto">
<div className="flex items-center gap-3 mb-10 reveal">
<div className="p-2 rounded bg-white/5 border border-white/10">
<svg className="lucide lucide-bot w-4 h-4 text-neutral-200" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight">Inteligência em produção</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
<div className="glass-panel p-8 rounded-xl hover:border-white/20 group transition-all duration-500 reveal">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-neutral-200 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-zap w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">Agente de Vendas</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">Qualifica, responde objeções e encaminha para marcação.</p>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-400">Sob medida</span>
</div>
<div className="glass-panel p-8 rounded-xl hover:border-white/20 group transition-all duration-500 reveal delay-75">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-neutral-200 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-message-square w-5 h-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">Bot de Suporte</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">Responde tickets e perguntas frequentes com consistência.</p>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-400">Popular</span>
</div>
<div className="glass-panel p-8 rounded-xl hover:border-white/20 group transition-all duration-500 reveal delay-100">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-neutral-200 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-database w-5 h-5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">Scraper de Dados</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">Agrega e enriquece dados para decisões e campanhas.</p>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-400">Add-on</span>
</div>
<div className="glass-panel p-8 rounded-xl hover:border-white/20 group transition-all duration-500 reveal delay-150">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-neutral-200 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-workflow w-5 h-5" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="text-white font-medium mb-2">Gestor de Operações</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">Orquestra fluxos e agentes para autonomia operacional.</p>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-400">Enterprise</span>
</div>
<div className="glass-panel p-8 rounded-xl hover:border-white/20 group transition-all duration-500 reveal delay-200">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-neutral-200 group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-mic w-5 h-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<h3 className="text-white font-medium mb-2">Agentes de Voz</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">Atendimento por voz, triagem e follow-up em chamadas.</p>
<span className="text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-400">Novo</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-neutral-900/10 backdrop-blur-sm" id="processo">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-medium text-white tracking-tight mb-16 text-center reveal">Protocolo de integração</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>
<div className="flex flex-col md:items-center md:text-center reveal">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-semibold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">01</div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">Auditoria</h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[220px]">Analisamos fluxos atuais, ferramentas e pontos de fricção.</p>
</div>
<div className="flex flex-col md:items-center md:text-center reveal delay-75">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-semibold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">02</div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">Blueprint</h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[220px]">Desenhamos a arquitetura e as integrações necessárias.</p>
</div>
<div className="flex flex-col md:items-center md:text-center reveal delay-150">
<div className="w-12 h-12 bg-neutral-200 rounded-full flex items-center justify-center text-sm font-semibold text-black mb-6 z-10 shadow-[0_0_25px_rgba(255,255,255,0.18)] ring-4 ring-black/50">
              03
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">Deploy</h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[220px]">Construímos, testamos e colocamos em produção com segurança.</p>
</div>
<div className="flex flex-col md:items-center md:text-center reveal delay-200">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-semibold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">04</div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">Otimizar</h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[220px]">Monitorização, melhorias e expansão conforme resultados.</p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="auditoria">
<div className="relative max-w-5xl mx-auto text-center reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-8">O futuro da tua empresa pode começar hoje.</h2>
<p className="text-neutral-400 mb-16 text-base font-light">
          Começa com uma <span className="text-white font-medium">consulta gratuita</span> para auditar processos e identificar ganhos rápidos.
          <br/>
<span className="text-neutral-300">Sem compromisso. Totalmente grátis.</span>
</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<a className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all group flex flex-col items-center relative overflow-hidden" href="#contatos">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-widest mb-4">Opção 01</span>
<span className="text-2xl font-semibold text-white mb-2 tracking-tight">Consulta Gratuita</span>
<span className="text-xs text-neutral-500 mb-8 max-w-xs">Auditamos o teu cenário e definimos um plano de automação.</span>
<div className="px-6 py-3 bg-white text-black text-xs font-semibold uppercase tracking-wider rounded group-hover:bg-neutral-200 transition-colors w-full">
              Falar connosco
            </div>
</a>
<a className="relative p-8 rounded-2xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all group flex flex-col items-center overflow-hidden shadow-[0_0_50px_-10px_rgba(255,255,255,0.12)] transform md:-translate-y-4" href="#solucoes">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-60"></div>
<div className="absolute top-0 px-4 py-1 bg-white text-black text-[10px] uppercase font-semibold tracking-widest rounded-b-lg">
              100% grátis
            </div>
<span className="text-xs text-neutral-200 font-semibold uppercase tracking-widest mb-4 mt-2 relative z-10">Auditoria &amp; blueprint</span>
<span className="text-2xl font-semibold text-white mb-2 relative z-10 tracking-tight">Mapa de automação</span>
<span className="text-xs text-neutral-400 mb-8 relative z-10 max-w-xs">Entregamos prioridades, impacto e próximos passos.</span>
<div className="px-6 py-3 bg-white text-black text-xs font-semibold uppercase tracking-wider rounded group-hover:bg-neutral-200 transition-colors w-full">
              Falar connosco
            </div>
</a>
<a className="glass-panel p-8 rounded-2xl hover:border-white/20 transition-all group flex flex-col items-center relative overflow-hidden" href="#contatos">
<span className="text-xs text-neutral-400 font-medium uppercase tracking-widest mb-4">Opção 03</span>
<span className="text-2xl font-semibold text-white mb-2 tracking-tight">Implementação</span>
<span className="text-xs text-neutral-500 mb-8 max-w-xs">Após a auditoria, definimos escopo, prazos e execução.</span>
<div className="px-6 py-3 bg-white text-black text-xs font-semibold uppercase tracking-wider rounded group-hover:bg-neutral-200 transition-colors w-full">
              Falar connosco
            </div>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
<div className="glass-panel p-8 rounded-2xl text-left relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-start gap-4 relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-200 shrink-0">
<svg className="lucide lucide-quote w-5 h-5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div>
<p className="text-base text-neutral-200 font-light leading-relaxed">“O teu negócio, agora com um cérebro novo.”</p>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-widest">Engenharia NEURO AI</p>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl text-left relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-start gap-4 relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-200 shrink-0">
<svg className="lucide lucide-quote w-5 h-5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div>
<p className="text-base text-neutral-200 font-light leading-relaxed">“A Última Vantagem Competitiva”</p>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-widest">Engenharia NEURO AI</p>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl text-left relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-start gap-4 relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-200 shrink-0">
<svg className="lucide lucide-quote w-5 h-5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div>
<p className="text-base text-neutral-200 font-light leading-relaxed">“Empresas inteligentes crescem. As outras… rezam.”</p>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-widest">Engenharia NEURO AI</p>
</div>
</div>
</div>
<div className="glass-panel p-8 rounded-2xl text-left relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-l from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="flex items-start gap-4 relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-neutral-200 shrink-0">
<svg className="lucide lucide-quote w-5 h-5" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<div>
<p className="text-base text-neutral-200 font-light leading-relaxed">“O futuro da tua empresa pode começar hoje.”</p>
<p className="text-xs text-neutral-500 mt-2 uppercase tracking-widest">Engenharia NEURO AI</p>
</div>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row gap-6 justify-center text-xs text-neutral-500 uppercase tracking-widest">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
            Resposta rápida
          </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Boas práticas de segurança
          </div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-sparkles w-3.5 h-3.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            Foco em resultados
          </div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-black/40" id="faq">
<div className="max-w-2xl mx-auto reveal">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12 text-center">Intel operacional</h2>
<div className="space-y-3">
<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-base font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq1')">
              A IA vai substituir a minha equipa?
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform text-neutral-500" data-lucide="chevron-down" fill="none" height="24" id="icon-faq1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq1">
<div className="p-5 pt-0 text-base text-neutral-400 font-light leading-relaxed">
                Para a maioria, não. Na realidade, a IA vai agir como um copiloto concebido para lidar com tarefas repetitivas, para que a maior parte da equipa se foque no que tem mais impacto.
              </div>
</div>
</div>
<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-base font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq2')">
              Quanto tempo demora a implementar uma automação?
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform text-neutral-500" data-lucide="chevron-down" fill="none" height="24" id="icon-faq2" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq2">
<div className="p-5 pt-0 text-base text-neutral-400 font-light leading-relaxed">
                Depende do escopo. Automações simples podem ficar prontas em dias; sistemas com múltiplas integrações e validações podem levar algumas semanas.
                Na consulta gratuita, definimos o blueprint, as dependências e um cronograma realista.
              </div>
</div>
</div>
<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-base font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq3')">
              É seguro ligar a IA ao meu CRM/WhatsApp/dados?
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform text-neutral-500" data-lucide="chevron-down" fill="none" height="24" id="icon-faq3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq3">
<div className="p-5 pt-0 text-base text-neutral-400 font-light leading-relaxed">
                Sim, quando é feito com boas práticas: permissões mínimas, segregação de credenciais, logs, rate limits e validações.
                Também configuramos “guardrails” para evitar ações indevidas e definimos o que o sistema pode (e não pode) fazer.
              </div>
</div>
</div>
<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-base font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq4')">
              O que recebo na Consulta Gratuita?
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform text-neutral-500" data-lucide="chevron-down" fill="none" height="24" id="icon-faq4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq4">
<div className="p-5 pt-0 text-base text-neutral-400 font-light leading-relaxed">
                Uma auditoria rápida do teu processo (do “lead” ao pós-venda), identificação de gargalos, oportunidades de automação e uma proposta de blueprint
                com prioridades e próximos passos. É totalmente grátis e sem compromisso.
              </div>
</div>
</div>
<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-base font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq5')">
              Vocês também fazem aplicações e sites com IA?
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform text-neutral-500" data-lucide="chevron-down" fill="none" height="24" id="icon-faq5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq5">
<div className="p-5 pt-0 text-base text-neutral-400 font-light leading-relaxed">
                Sim. Desenvolvemos aplicações internas, dashboards, integrações e experiências web com IA (chat, pesquisa, automação de tarefas, agentes).
                O foco é entregar algo utilizável e mensurável — não “demo”.
              </div>
</div>
</div>
</div>
<div className="mt-10 text-center">
<a className="inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 bg-white/5 border border-white/10 text-white text-xs font-semibold uppercase tracking-wider hover:bg-white/10 hover:border-white/20 transition-colors" href="#contatos">
<svg className="lucide lucide-message-circle w-4 h-4" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
            Ainda tens dúvidas? Fala connosco
          </a>
</div>
</div>
</section>

<section className="py-28 px-6 border-t border-white/5 relative overflow-hidden" id="contatos">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-14 reveal">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Contactos</h2>
<p className="text-neutral-500 text-base font-light">
            Escolhe o canal mais rápido. Respondemos com agilidade para marcar a tua <span className="text-white font-medium">consulta gratuita</span>.
          </p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<a aria-label="Falar no WhatsApp" className="glass-panel p-8 rounded-2xl group hover:border-white/20 transition-all duration-500 reveal" href="https://wa.me/244000000000?text=Ol%C3%A1%20NEURO%20AI%2C%20quero%20marcar%20uma%20consulta%20gratuita." rel="noopener noreferrer" target="_blank">
<div className="flex items-start justify-between gap-6">
<div>
<div className="flex items-center gap-3 mb-3">
<span className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-200">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</span>
<h3 className="text-white font-medium">Telefone
                </h3></div>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                  O canal mais rápido para alinhar contexto e marcar a consulta.
                </p>
</div>
<span className="shrink-0 text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-400">Rápido</span>
</div>
<div className="mt-8 flex items-center justify-between">
<span className="text-sm text-neutral-300 font-medium">+244 934 714 963
              <span className="text-xs uppercase tracking-wider text-neutral-200 font-semibold">Abrir</span>
</span></div>
</a>

<a aria-label="Enviar e-mail" className="glass-panel p-8 rounded-2xl group hover:border-white/20 transition-all duration-500 reveal delay-75" href="mailto:contacto@neuroai.co?subject=Consulta%20Gratuita%20-%20NEURO%20AI&amp;body=Ol%C3%A1%2C%20quero%20marcar%20uma%20consulta%20gratuita.%0A%0ANome%3A%0AEmpresa%3A%0AObjetivo%3A%0A">
<div className="flex items-start justify-between gap-6">
<div>
<div className="flex items-center gap-3 mb-3">
<span className="p-2 rounded-lg bg-white/5 border border-white/10 text-neutral-200">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</span>
<h3 className="text-white font-medium">E-mail</h3>
</div>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                  Para partilhar detalhes e requisitos com mais contexto.
                </p>
</div>
<span className="shrink-0 text-[10px] px-2 py-1 rounded border border-white/10 text-neutral-400">Formal</span>
</div>
<div className="mt-8 flex items-center justify-between">
<span className="text-sm text-neutral-300 font-medium">neuro.ia.ao@gmail.com
              <span className="text-xs uppercase tracking-wider text-neutral-200 font-semibold">Enviar</span>
</span></div>
</a>

<a aria-label="Marcar consulta" className="relative p-8 rounded-2xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all duration-500 reveal delay-150 overflow-hidden group" href="#auditoria">
<div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent opacity-60"></div>
<div className="flex items-start justify-between gap-6 relative z-10">
<div>
<div className="flex items-center gap-3 mb-3">
<span className="p-2 rounded-lg bg-white text-black border border-white/40">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</span>
<h3 className="text-white font-medium">Marcação</h3>
</div>
<p className="text-sm text-neutral-400 font-light leading-relaxed">
                  Marca a tua <span className="text-white font-medium">consulta gratuita</span> e recebe um plano claro.
                </p>
</div>
<span className="shrink-0 text-[10px] px-2 py-1 rounded bg-white text-black font-semibold uppercase tracking-widest">Grátis</span>
</div>
<div className="mt-8 flex items-center justify-between relative z-10">
<span className="text-sm text-neutral-200 font-medium">Auditoria + Blueprint</span>
<span className="text-xs uppercase tracking-wider text-black font-semibold bg-white px-3 py-1.5 rounded-lg">Começar</span>
</div>
</a>
</div>

<div className="mt-10 max-w-3xl mx-auto text-center text-xs text-neutral-500 uppercase tracking-widest reveal">
<span className="inline-flex items-center gap-2">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            Partilha apenas o necessário — definimos acessos e permissões com segurança.
          </span>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-10 px-6 bg-black/60">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 overflow-hidden flex items-center justify-center">
<img alt="NEURO AI" className="w-full h-full object-contain p-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ff2ec855-4e93-4c88-89b7-2e16c95169aa_320w.png" style={{}}/>
</div>
<div>
<p className="text-white text-sm font-medium tracking-tight">NEURO AI</p>
<p className="text-neutral-500 text-xs font-light">Automação • Consultoria • Desenvolvimento</p>
</div>
</div>
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-widest text-neutral-500">
<a className="hover:text-white transition-colors" href="#solucoes">Soluções</a>
<a className="hover:text-white transition-colors" href="#processo">Processo</a>
<a className="hover:text-white transition-colors" href="#faq">Intel</a>
<a className="hover:text-white transition-colors" href="#contatos">Contactos</a>
</div>
<div className="text-xs text-neutral-500 font-light text-center md:text-right">
<p>© <span id="year">2025</span> NEURO AI. Todos os direitos reservados.</p>
</div>
</div>
</footer>



    </>
  );
}
