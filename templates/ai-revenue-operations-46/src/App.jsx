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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Instrument Sans"', 'sans-serif'],
serif: ['"Instrument Serif"', 'serif'],
},
colors: {
bg: '#06060C',
'bg-elevated': '#0B0B14',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", function() {
            const containers = document.querySelectorAll('.fundinho');
            containers.forEach(container => {
                if(!container.querySelector('.particulas-rapidas')) {
                    container.insertAdjacentHTML('afterbegin', `
                        <div class="particulas-rapidas"></div>
                        <div class="particulas-lentas"></div>
                    `);
                }
            });
        });

        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenu.classList.contains('hidden') ? 'solar:hamburger-menu-linear' : 'solar:close-circle-linear';
            menuBtn.innerHTML = `<iconify-icon icon="${icon}" width="24" height="24"></iconify-icon>`;
        });

        const faqBtns = document.querySelectorAll('.faq-btn');
        faqBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.nextElementSibling;
                const iconElement = btn.querySelector('iconify-icon');
                const isHidden = content.classList.contains('hidden');
                
                document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
                document.querySelectorAll('.faq-btn iconify-icon').forEach(i => {
                    i.setAttribute('icon', 'solar:alt-arrow-down-linear');
                });
                
                if (isHidden) {
                    content.classList.remove('hidden');
                    iconElement.setAttribute('icon', 'solar:alt-arrow-up-linear');
                }
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
      

<nav className="fixed top-0 left-0 w-full z-50 bg-[#06060C]/70 backdrop-blur-xl border-b border-white/[0.04]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-1 font-semibold text-lg tracking-wide" href="#">
                A<span className="bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">✦</span>GENTIVE
            </a>
<div className="hidden md:flex items-center bg-white/[0.04] rounded-full px-2 py-1.5">
<a className="px-4 py-1.5 text-sm font-medium bg-white/[0.08] rounded-full text-white" href="#agentes">Agentes</a>
<a className="px-4 py-1.5 text-sm font-medium text-white/60" href="#visao">Nossa Visão</a>
<a className="px-4 py-1.5 text-sm font-medium text-white/60" href="#resultados">Resultados</a>
<a className="px-4 py-1.5 text-sm font-medium text-white/60" href="#sobre">Sobre</a>
<a className="px-4 py-1.5 text-sm font-medium text-white/60" href="#faq">FAQ</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-block border border-white/10 rounded-full px-5 py-2 text-sm text-white/70 font-medium hover:bg-white/[0.02] transition-colors" href="#demo">Falar com especialista</a>
<button className="md:hidden text-white p-2" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="hidden md:hidden bg-[#0B0B14] border-b border-white/[0.04] px-6 py-4 flex flex-col gap-4" id="mobile-menu">
<a className="text-sm font-medium text-white" href="#agentes">Agentes</a>
<a className="text-sm font-medium text-white/60" href="#visao">Nossa Visão</a>
<a className="text-sm font-medium text-white/60" href="#resultados">Resultados</a>
<a className="text-sm font-medium text-white/60" href="#sobre">Sobre</a>
<a className="text-sm font-medium text-white/60" href="#faq">FAQ</a>
<a className="border border-white/10 rounded-full px-5 py-2 text-sm text-white/70 font-medium text-center mt-2" href="#demo">Falar com especialista</a>
</div>
</nav>

<header className="relative min-h-screen overflow-hidden flex flex-col items-center pt-36 pb-20 w-full fundinho z-0">
<div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-6xl">
<div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-5 py-2.5 text-sm font-medium mb-10">
<span className="bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">✦</span>
<span className="bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent">A 1ª empresa brasileira de Orquestração de Receitas com IA</span>
</div>
<h1 className="flex flex-col md:flex-row items-center justify-center text-center leading-[0.95] tracking-tighter text-[clamp(3.5rem,7vw,6.5rem)] font-semibold mt-2">
<span className="text-white relative">
                    Crie
                </span>

<div className="hidden md:flex items-center justify-center mx-4 lg:mx-8 relative w-16 lg:w-32 opacity-80">
<div className="w-full h-[2px] bg-white/[0.08] rounded-full relative overflow-hidden">
<div className="absolute left-0 top-0 h-full w-full spark-h"></div>
</div>
<div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(56,189,248,1)]"></div>
<div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-blue-400/30"></div>
</div>

<div className="md:hidden flex items-center justify-center my-4 h-12 relative opacity-80">
<div className="h-full w-[2px] bg-white/[0.08] rounded-full relative overflow-hidden">
<div className="absolute left-0 top-0 w-full h-full spark-v"></div>
</div>
<div className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(56,189,248,1)]"></div>
<div className="absolute top-0 w-1.5 h-1.5 rounded-full bg-blue-400/30"></div>
</div>
<span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent relative drop-shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                    Converta
                </span>

<div className="hidden md:flex items-center justify-center mx-4 lg:mx-8 relative w-16 lg:w-32 opacity-80">
<div className="w-full h-[2px] bg-white/[0.08] rounded-full relative overflow-hidden">
<div className="absolute left-0 top-0 h-full w-full spark-h" style={{animationDelay: '1s'}}></div>
</div>
<div className="absolute right-0 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(56,189,248,1)]"></div>
<div className="absolute left-0 w-1.5 h-1.5 rounded-full bg-blue-400/30"></div>
</div>

<div className="md:hidden flex items-center justify-center my-4 h-12 relative opacity-80">
<div className="h-full w-[2px] bg-white/[0.08] rounded-full relative overflow-hidden">
<div className="absolute left-0 top-0 w-full h-full spark-v" style={{animationDelay: '1s'}}></div>
</div>
<div className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(56,189,248,1)]"></div>
<div className="absolute top-0 w-1.5 h-1.5 rounded-full bg-blue-400/30"></div>
</div>
<span className="text-white relative">
                    Feche.
                </span>
</h1>
<p className="mt-8 max-w-xl mx-auto text-lg leading-relaxed bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent">
                Preencha seu funil de vendas com mais velocidade e precisão — priorize ações, identifique riscos e gere receita previsível.
            </p>
<div className="mt-10 flex flex-row items-center justify-center gap-4">
<a className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-8 py-4 rounded-xl text-base hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-shadow" href="#demo">
                    Agendar Demo
                </a>
<a className="border border-white/10 text-white/70 font-medium px-8 py-4 rounded-xl text-base bg-transparent hover:bg-white/[0.02] transition-colors" href="#contato">
                    Falar com especialista
                </a>
</div>
<div className="mt-20 w-full max-w-5xl mx-auto relative" style={{maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'}}>
<div className="rounded-2xl border border-white/[0.08] bg-[#0B0B14] overflow-hidden shadow-[0_20px_80px_-20px_rgba(30,80,200,0.15)] flex flex-col text-left relative z-10">
<div className="h-11 bg-[#0B0B14] border-b border-white/[0.05] flex items-center px-5 gap-2 relative z-10">
<div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/[0.08]"></div>
</div>
<div className="w-full relative aspect-[16/9] bg-black/50">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover" loop="" muted="" playsinline="">
<source src="https://cdn.coverr.co/videos/coverr-data-analytics-on-a-computer-screen-2503/1080p.mp4" type="video/mp4"/>
</video>
</div>
</div>
</div>
</div>
</header>

<section className="py-12 border-y border-white/[0.04] bg-[#06060C] overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<h2 className="text-xs uppercase tracking-widest text-white/25 font-semibold mb-8 text-center">Integra com</h2>
<div className="relative w-full flex items-center before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-32 before:bg-gradient-to-r before:from-[#06060C] before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-32 after:bg-gradient-to-l after:from-[#06060C] after:to-transparent">
<div className="flex items-center w-max animate-carousel hover:[animation-play-state:paused]">

<div className="flex items-center justify-center gap-16 px-8">
<span className="text-2xl font-semibold tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">Salesforce</span>
<span className="text-2xl font-bold tracking-tight text-white/30 transition-colors hover:text-white/60 cursor-default">HubSpot</span>
<span className="text-2xl font-black tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">GONG</span>
<span className="text-2xl font-bold tracking-tight text-white/30 transition-colors hover:text-white/60 cursor-default">Clari</span>
<span className="text-2xl font-bold tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">slack</span>
<span className="text-2xl font-bold tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">zoom</span>
<span className="text-xs font-semibold tracking-widest uppercase border border-white/10 rounded-full px-5 py-2 text-white/30 whitespace-nowrap cursor-default hover:bg-white/[0.02] hover:text-white/60 transition-all">+40 ferramentas</span>
</div>

<div className="flex items-center justify-center gap-16 px-8">
<span className="text-2xl font-semibold tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">Salesforce</span>
<span className="text-2xl font-bold tracking-tight text-white/30 transition-colors hover:text-white/60 cursor-default">HubSpot</span>
<span className="text-2xl font-black tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">GONG</span>
<span className="text-2xl font-bold tracking-tight text-white/30 transition-colors hover:text-white/60 cursor-default">Clari</span>
<span className="text-2xl font-bold tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">slack</span>
<span className="text-2xl font-bold tracking-tighter text-white/30 transition-colors hover:text-white/60 cursor-default">zoom</span>
<span className="text-xs font-semibold tracking-widest uppercase border border-white/10 rounded-full px-5 py-2 text-white/30 whitespace-nowrap cursor-default hover:bg-white/[0.02] hover:text-white/60 transition-all">+40 ferramentas</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="agentes">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<span className="text-xs uppercase tracking-widest font-semibold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-5 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div> Conheça o time
            </span>
<h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-center leading-tight tracking-tight text-white">
                Apresentamos nosso time de<br/>
<span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">Agentes de Receitas</span>
</h2>
<p className="mt-6 max-w-2xl text-center text-lg leading-[1.7] bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent">
                Eles trabalham em conjunto com sua equipe comercial processando milhões de dados para que seu time foque no que importa — <span className="font-semibold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">Fechar Negócios.</span>
</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 w-full">

<div className="group relative bg-[#0B0B14] border border-white/[0.04] rounded-[24px] p-8 flex flex-col transition-all duration-500 hover:border-blue-500/40 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center mb-6 relative group-hover:border-blue-500/30 transition-colors">
<div className="absolute inset-0 bg-blue-500/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white/60 group-hover:text-blue-400 transition-colors relative z-10" height="28" icon="solar:scanner-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 relative z-10 group-hover:text-blue-50 transition-colors">Inspeção de Funil</h3>
<p className="text-sm leading-[1.7] bg-[linear-gradient(180deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent relative z-10">
                        Avalia continuamente as oportunidades com base em critérios comprovados e playbooks de vendas. Sinaliza riscos e recomenda próximas ações para eliminar gaps no pipeline.
                    </p>
</div>

<div className="group relative bg-[#0B0B14] border border-white/[0.04] rounded-[24px] p-8 flex flex-col transition-all duration-500 hover:border-blue-500/40 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center mb-6 relative group-hover:border-blue-500/30 transition-colors">
<div className="absolute inset-0 bg-blue-500/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white/60 group-hover:text-blue-400 transition-colors relative z-10" height="28" icon="solar:chart-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 relative z-10 group-hover:text-blue-50 transition-colors">Análise de Forecast</h3>
<p className="text-sm leading-[1.7] bg-[linear-gradient(180deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent relative z-10">
                        Varre milhares de objetos de receita e identifica padrões em dados de oportunidades e contas. Entrega insights proativos para mitigar riscos e manter o momentum.
                    </p>
</div>

<div className="group relative bg-[#0B0B14] border border-white/[0.04] rounded-[24px] p-8 flex flex-col transition-all duration-500 hover:border-blue-500/40 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center mb-6 relative group-hover:border-blue-500/30 transition-colors">
<div className="absolute inset-0 bg-blue-500/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white/60 group-hover:text-blue-400 transition-colors relative z-10" height="28" icon="solar:user-heart-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 relative z-10 group-hover:text-blue-50 transition-colors">Customer Success</h3>
<p className="text-sm leading-[1.7] bg-[linear-gradient(180deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent relative z-10">
                        Organiza e acompanha as demandas dos clientes a partir de dados estruturados e não estruturados. Garante visão completa para que os AMs atuem de forma proativa.
                    </p>
</div>

<div className="group relative bg-[#0B0B14] border border-white/[0.04] rounded-[24px] p-8 flex flex-col transition-all duration-500 hover:border-blue-500/40 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center mb-6 relative group-hover:border-blue-500/30 transition-colors">
<div className="absolute inset-0 bg-blue-500/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white/60 group-hover:text-blue-400 transition-colors relative z-10" height="28" icon="solar:server-square-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 relative z-10 group-hover:text-blue-50 transition-colors">Sales Engineer</h3>
<p className="text-sm leading-[1.7] bg-[linear-gradient(180deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent relative z-10">
                        Apoia vendedores durante reuniões com dados técnicos, documentações instantâneas e táticas de vendas consultivas.
                    </p>
</div>

<div className="group relative bg-[#0B0B14] border border-white/[0.04] rounded-[24px] p-8 flex flex-col transition-all duration-500 hover:border-blue-500/40 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-600/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-14 h-14 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center mb-6 relative group-hover:border-blue-500/30 transition-colors">
<div className="absolute inset-0 bg-blue-500/20 blur-md rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-white/60 group-hover:text-blue-400 transition-colors relative z-10" height="28" icon="solar:screencast-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3 relative z-10 group-hover:text-blue-50 transition-colors">Sales Coach</h3>
<p className="text-sm leading-[1.7] bg-[linear-gradient(180deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent relative z-10">
                        Treina e capacita vendedores com simulações hyper-realistas e feedback baseados em IA para melhoria contínua.
                    </p>
</div>

<div className="group relative bg-transparent border border-dashed border-white/[0.15] rounded-[24px] p-8 flex flex-col items-center justify-center text-center transition-all hover:border-blue-500/40 hover:bg-blue-500/[0.02] overflow-hidden">
<div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
<iconify-icon className="text-white/40 group-hover:text-blue-400 transition-colors" height="28" icon="solar:magic-stick-3-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-50 transition-colors">Agentes Sob Demanda</h3>
<p className="text-sm leading-[1.7] bg-[linear-gradient(180deg,rgba(255,255,255,0.7)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent">
                        Criamos agentes customizados para o seu negócio, conforme as necessidades dos processos comerciais de cada cliente.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#0B0B14]/50 border-t border-white/[0.02] relative" id="visao">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
<span className="text-xs uppercase tracking-widest font-semibold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-5 flex items-center gap-2">
<iconify-icon height="16" icon="solar:cpu-bolt-linear" width="16"></iconify-icon> A Engenharia por trás
            </span>
<h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-center leading-tight tracking-tight text-white mb-8">
                Agentes <span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">sob medida</span> para o seu negócio
            </h2>
<p className="max-w-3xl text-lg leading-[1.7] text-center bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent">
                Criamos agentes com letramento e contexto específicos. Tudo começa com as suas diretrizes, passa por um motor robusto de orquestração e se transforma em ações concretas que geram receita previsível.
            </p>
<div className="flex flex-col lg:flex-row items-stretch justify-center w-full mt-24 gap-4 lg:gap-0">

<div className="flex-1 flex flex-col gap-4 relative z-10 p-8 rounded-[32px] bg-[#0B0B14]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)]">

<div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20"></div>
<div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20"></div>
<div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20"></div>
<div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20"></div>
<div className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-2 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></div> Dados de Origem
                    </div>

<div className="relative p-4 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_16px_rgba(0,0,0,0.2)] flex items-center gap-4 group overflow-hidden hover:-translate-y-0.5 transition-transform">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-transparent opacity-60"></div>
<div className="w-10 h-10 rounded-xl bg-[#06060C] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/[0.05] flex items-center justify-center relative">
<iconify-icon className="text-blue-400" height="20" icon="solar:book-bookmark-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white/90">Playbooks de Vendas</span>
</div>

<div className="relative p-4 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_16px_rgba(0,0,0,0.2)] flex items-center gap-4 group overflow-hidden hover:-translate-y-0.5 transition-transform">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-transparent opacity-60"></div>
<div className="w-10 h-10 rounded-xl bg-[#06060C] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/[0.05] flex items-center justify-center relative">
<iconify-icon className="text-blue-400" height="20" icon="solar:database-line-duotone" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white/90">CRM &amp; Histórico</span>
</div>

<div className="relative p-4 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_16px_rgba(0,0,0,0.2)] flex items-center gap-4 group overflow-hidden hover:-translate-y-0.5 transition-transform">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-transparent opacity-60"></div>
<div className="w-10 h-10 rounded-xl bg-[#06060C] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-white/[0.05] flex items-center justify-center relative">
<iconify-icon className="text-blue-400" height="20" icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white/90">Perfil de Clientes</span>
</div>
</div>

<div className="flex lg:w-20 h-12 lg:h-auto items-center justify-center relative">
<div className="hidden lg:block w-full h-[2px] bg-white/[0.05] relative overflow-hidden rounded-full">
<div className="absolute top-0 left-0 w-1/2 h-full spark-h"></div>
</div>
<div className="block lg:hidden w-[2px] h-full bg-white/[0.05] relative overflow-hidden rounded-full">
<div className="absolute top-0 left-0 w-full h-1/2 spark-v"></div>
</div>
</div>

<div className="flex-[1.2] flex flex-col items-center justify-center relative z-10 p-10 rounded-[32px] bg-[#06060C] border border-blue-500/30 shadow-[0_0_80px_rgba(37,99,235,0.1),inset_0_0_40px_rgba(37,99,235,0.05)] overflow-hidden group">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.15)_0%,transparent_70%)] pointer-events-none"></div>

<div className="relative w-36 h-36 mb-10 flex items-center justify-center animate-[float_4s_ease-in-out_infinite]">

<div className="absolute inset-[-30px] bg-blue-500/20 blur-[40px] rounded-full"></div>

<div className="absolute inset-0 rounded-full border-[1px] border-blue-500/30 border-t-blue-400/80 shadow-[inset_0_0_20px_rgba(56,189,248,0.2)] animate-[spin_5s_linear_infinite]"></div>

<div className="absolute inset-3 rounded-full border-[1.5px] border-white/10 border-b-cyan-300/80 shadow-[inset_0_0_15px_rgba(34,211,238,0.3)] animate-[spin_3s_linear_infinite_reverse]"></div>

<div className="absolute inset-6 rounded-full border border-dashed border-blue-400/40 animate-[spin_8s_linear_infinite]"></div>

<div className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-300 via-blue-600 to-[#0B0B14] shadow-[0_0_40px_rgba(37,99,235,0.7),inset_2px_2px_10px_rgba(255,255,255,0.6),inset_-4px_-4px_15px_rgba(0,0,0,0.5)] flex items-center justify-center">
<iconify-icon className="text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]" height="32" icon="solar:cpu-bolt-bold" width="32"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-semibold text-white text-center mb-1 drop-shadow-md relative z-10">Managed AI Agents</h3>
<p className="text-xs text-blue-400/90 text-center uppercase tracking-widest font-semibold mb-6 flex items-center justify-center gap-2 relative z-10">
<span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,1)]"></span> Em Processamento
                    </p>

<div className="w-full flex flex-col gap-3 relative z-10">
<div className="relative p-3 rounded-xl bg-[#0B0B14]/80 border border-blue-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-between overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"></div>
<span className="text-xs font-medium text-blue-100 relative z-10 pl-2">Monitoramento Contínuo</span>
<iconify-icon className="text-blue-400/70 relative z-10 pr-1" height="16" icon="solar:radar-linear" width="16"></iconify-icon>
</div>
<div className="relative p-3 rounded-xl bg-[#0B0B14]/80 border border-blue-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-between overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"></div>
<span className="text-xs font-medium text-blue-100 relative z-10 pl-2">Retraining do Modelo</span>
<iconify-icon className="text-blue-400/70 relative z-10 pr-1" height="16" icon="solar:refresh-circle-linear" width="16"></iconify-icon>
</div>
<div className="relative p-3 rounded-xl bg-[#0B0B14]/80 border border-blue-500/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_4px_10px_rgba(0,0,0,0.3)] flex items-center justify-between overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent"></div>
<span className="text-xs font-medium text-blue-100 relative z-10 pl-2">Agent Ops Integrado</span>
<iconify-icon className="text-blue-400/70 relative z-10 pr-1" height="16" icon="solar:shield-network-linear" width="16"></iconify-icon>
</div>
</div>
<style>
                        @keyframes float {
                            0%, 100% { transform: translateY(0); }
                            50% { transform: translateY(-10px); }
                        }
                    </style>
</div>

<div className="flex lg:w-20 h-12 lg:h-auto items-center justify-center relative">
<div className="hidden lg:block w-full h-[2px] bg-white/[0.05] relative overflow-hidden rounded-full">
<div className="absolute top-0 left-0 w-1/2 h-full spark-h delay-75"></div>
</div>
<div className="block lg:hidden w-[2px] h-full bg-white/[0.05] relative overflow-hidden rounded-full">
<div className="absolute top-0 left-0 w-full h-1/2 spark-v delay-75"></div>
</div>
</div>

<div className="flex-1 flex flex-col gap-4 relative z-10 p-8 rounded-[32px] bg-[#0B0B14]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.05)] justify-center">

<div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-white/20"></div>
<div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/20"></div>
<div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/20"></div>
<div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-white/20"></div>
<div className="text-[10px] font-semibold tracking-widest uppercase text-white/40 mb-2 flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"></div> Resultados Ativos
                    </div>

<div className="relative p-4 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_16px_rgba(0,0,0,0.2)] flex items-center gap-4 group overflow-hidden hover:-translate-y-0.5 transition-transform">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-transparent opacity-60"></div>
<div className="w-10 h-10 rounded-xl bg-[#06060C] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-emerald-500/20 flex items-center justify-center relative">
<iconify-icon className="text-emerald-400" height="20" icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white/90">Precisão de Forecast</span>
</div>

<div className="relative p-4 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_16px_rgba(0,0,0,0.2)] flex items-center gap-4 group overflow-hidden hover:-translate-y-0.5 transition-transform">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-transparent opacity-60"></div>
<div className="w-10 h-10 rounded-xl bg-[#06060C] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-emerald-500/20 flex items-center justify-center relative">
<iconify-icon className="text-emerald-400" height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white/90">Retenção de Clientes</span>
</div>

<div className="relative p-4 rounded-2xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_8px_16px_rgba(0,0,0,0.2)] flex items-center gap-4 group overflow-hidden hover:-translate-y-0.5 transition-transform">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 to-transparent opacity-60"></div>
<div className="w-10 h-10 rounded-xl bg-[#06060C] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-emerald-500/20 flex items-center justify-center relative">
<iconify-icon className="text-emerald-400" height="20" icon="solar:bolt-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium text-white/90">Aceleração de Pipeline</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6" id="resultados">
<div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
<span className="text-xs uppercase tracking-widest font-semibold text-white/30 mb-5">O que o mercado comprova</span>
<h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-center leading-tight tracking-tight text-white mb-6">
                Gestão de vendas com IA:<br/>
<span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">os números que importam</span>
</h2>
<p className="max-w-3xl text-center text-lg leading-[1.7] bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-14">
                Pesquisas de McKinsey, Bain &amp; Company, Gartner, Forrester e IDC mostram o impacto real de agentes de IA na gestão comercial.
            </p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">

<div className="md:col-span-2 card-glow-wrapper delay-1">
<div className="card-glow-inner p-8 flex flex-col justify-between">
<div>
<div className="text-5xl font-bold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-2">45%</div>
<h4 className="text-base font-semibold text-white mb-2">Mais negócios fechados com ferramentas de IA</h4>
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">Profissionais de vendas que utilizam ferramentas de IA com foco em insights reportam aumentos de quase 50% nas taxas de fechamento de negócios em relação aos que não utilizam.</p>
</div>
<div className="flex items-center justify-between mt-8 pt-4 border-t border-white/[0.04]">
<span className="text-xs text-white/20">Forrester Research, 2025</span>
<span className="text-xs text-white/40 bg-white/[0.02] border border-white/[0.06] rounded-full px-3 py-1">Inspeção de Funil</span>
</div>
</div>
</div>

<div className="md:col-span-1 card-glow-wrapper delay-2">
<div className="card-glow-inner p-8 flex flex-col justify-between">
<div>
<div className="text-5xl font-bold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-2">65%</div>
<h4 className="text-base font-semibold text-white mb-2">Redução em vendas perdidas</h4>
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">Empresas que adotam IA para inspecionar oportunidades veem quedas drásticas em deals perdidos.</p>
</div>
<div className="flex items-center justify-between mt-8 pt-4 border-t border-white/[0.04]">
<span className="text-xs text-white/20">McKinsey, 2025</span>
<span className="text-xs text-white/40 bg-white/[0.02] border border-white/[0.06] rounded-full px-3 py-1">Inspeção</span>
</div>
</div>
</div>

<div className="md:col-span-1 card-glow-wrapper delay-3">
<div className="card-glow-inner p-8 flex flex-col justify-between">
<div>
<div className="text-5xl font-bold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-2">−35%</div>
<h4 className="text-base font-semibold text-white mb-2">Redução na variância projetada</h4>
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">A precisão melhora substancialmente ao retirar o viés humano da análise de dados de pipeline.</p>
</div>
<div className="flex items-center justify-between mt-8 pt-4 border-t border-white/[0.04]">
<span className="text-xs text-white/20">Forrester, 2025</span>
<span className="text-xs text-white/40 bg-white/[0.02] border border-white/[0.06] rounded-full px-3 py-1">Forecast</span>
</div>
</div>
</div>

<div className="md:col-span-2 card-glow-wrapper delay-1">
<div className="card-glow-inner p-8 flex flex-col justify-between">
<div>
<div className="text-5xl font-bold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-2">66%</div>
<h4 className="text-base font-semibold text-white mb-2">Do tempo perdido em tarefas não comerciais</h4>
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">Apenas 1/3 do tempo da equipe de vendas é dedicado a vender. Agentes de IA assumem o trabalho burocrático e triagem técnica.</p>
</div>
<div className="flex items-center justify-between mt-8 pt-4 border-t border-white/[0.04]">
<span className="text-xs text-white/20">Forrester/ZoomInfo</span>
<span className="text-xs text-white/40 bg-white/[0.02] border border-white/[0.06] rounded-full px-3 py-1">Todos os Agentes</span>
</div>
</div>
</div>

<div className="md:col-span-1 card-glow-wrapper delay-2">
<div className="card-glow-inner p-8 flex flex-col justify-between">
<div>
<div className="text-5xl font-bold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-2">+30%</div>
<h4 className="text-base font-semibold text-white mb-2">Demos sem qualificação</h4>
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">A IA filtra contas sem fit técnico e prepara o terreno preventivamente.</p>
</div>
<div className="flex items-center justify-between mt-8 pt-4 border-t border-white/[0.04]">
<span className="text-xs text-white/20">RepVue</span>
<span className="text-xs text-white/40 bg-white/[0.02] border border-white/[0.06] rounded-full px-3 py-1">Sales Engineer</span>
</div>
</div>
</div>

<div className="md:col-span-2 card-glow-wrapper delay-3">
<div className="card-glow-inner p-8 flex flex-col justify-between">
<div>
<div className="text-5xl font-bold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-2">275%</div>
<h4 className="text-base font-semibold text-white mb-2">Mais confiança com simulação</h4>
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">Vendedores treinados com simulações interativas de IA demonstram confiança quase 3x maior do que com métodos tradicionais.</p>
</div>
<div className="flex items-center justify-between mt-8 pt-4 border-t border-white/[0.04]">
<span className="text-xs text-white/20">PwC Research, 2025</span>
<span className="text-xs text-white/40 bg-white/[0.02] border border-white/[0.06] rounded-full px-3 py-1">Sales Coach</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-y border-white/[0.02] relative overflow-hidden bg-gradient-to-b from-[#0B0B14]/30 to-[#06060C]">
<div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
<span className="text-xs uppercase tracking-widest font-semibold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-4">O Novo Padrão</span>
<h2 className="text-[clamp(2rem,4vw,2.5rem)] font-semibold tracking-tight text-white mb-14 text-center">
                A janela de oportunidade <span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">está fechando</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

<div className="group relative bg-[#0B0B14]/80 backdrop-blur-md border border-white/[0.04] rounded-[32px] p-10 flex flex-col justify-between overflow-hidden hover:border-white/[0.08] transition-all duration-500 hover:-translate-y-1">
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon className="text-white" height="64" icon="solar:chart-2-linear" width="64"></iconify-icon>
</div>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
<div className="relative z-10 mb-10">
<div className="text-6xl md:text-7xl font-semibold tracking-tighter text-white mb-4 block">
                            67<span className="text-4xl text-blue-400 align-top">%</span>
</div>
<div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-transparent"></div>
</div>
<div className="relative z-10 mt-auto">
<p className="text-sm md:text-base text-white/80 leading-[1.8] mb-6">"dos líderes de operações de vendas afirmam que fazer forecasts precisos está mais difícil hoje do que há três anos."</p>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-xs text-white/40 uppercase tracking-widest font-semibold">Gartner, 2025</span>
</div>
</div>
</div>

<div className="group relative bg-[#0B0B14]/80 backdrop-blur-md border border-white/[0.04] rounded-[32px] p-10 flex flex-col justify-between overflow-hidden hover:border-white/[0.08] transition-all duration-500 hover:-translate-y-1">
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon className="text-white" height="64" icon="solar:target-linear" width="64"></iconify-icon>
</div>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
<div className="relative z-10 mb-10">
<div className="text-6xl md:text-7xl font-semibold tracking-tighter text-white mb-4 block">
                            75<span className="text-4xl text-blue-400 align-top">%</span>
</div>
<div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-transparent"></div>
</div>
<div className="relative z-10 mt-auto">
<p className="text-sm md:text-base text-white/80 leading-[1.8] mb-6">"das empresas B2B terão IA para otimização de funil implementada até o fim de 2025. O atraso gerará desvantagem permanente."</p>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-xs text-white/40 uppercase tracking-widest font-semibold">IDC FutureScape</span>
</div>
</div>
</div>

<div className="group relative bg-[#0B0B14]/80 backdrop-blur-md border border-white/[0.04] rounded-[32px] p-10 flex flex-col justify-between overflow-hidden hover:border-white/[0.08] transition-all duration-500 hover:-translate-y-1">
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-30 transition-opacity duration-500">
<iconify-icon className="text-white" height="64" icon="solar:danger-triangle-linear" width="64"></iconify-icon>
</div>
<div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] group-hover:bg-blue-500/20 transition-all duration-500 pointer-events-none"></div>
<div className="relative z-10 mb-10">
<div className="text-6xl md:text-7xl font-semibold tracking-tighter text-white mb-4 block">
                            25<span className="text-4xl text-blue-400 align-top">%</span>
</div>
<div className="w-12 h-[2px] bg-gradient-to-r from-blue-500 to-transparent"></div>
</div>
<div className="relative z-10 mt-auto">
<p className="text-sm md:text-base text-white/80 leading-[1.8] mb-6">"da receita potencial pode ser perdida por problemas de qualidade de dados e processos desalinhados, sem a adoção de orquestração."</p>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
<span className="text-xs text-white/40 uppercase tracking-widest font-semibold">Forrester, 2025</span>
</div>
</div>
</div>
</div>
<a className="mt-14 bg-white text-black font-semibold px-8 py-4 rounded-full text-base inline-flex hover:scale-105 transition-transform" href="#demo">
                Proteger minha receita
            </a>
</div>
</section>

<section className="py-32 px-6" id="sobre">
<div className="max-w-7xl mx-auto flex flex-col items-center">
<span className="text-xs uppercase tracking-widest font-semibold bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-5">Nossa Equipe</span>
<h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-center leading-tight tracking-tight text-white mb-6">
                As pessoas <span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">por trás dos agentes</span>
</h2>
<p className="max-w-3xl text-center text-lg leading-[1.7] bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent">
                Uma combinação única de experiência comercial de alto nível e profundidade técnica em Inteligência Artificial.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 w-full">

<div className="flex flex-col xl:flex-row items-stretch rounded-[32px] border border-white/[0.04] bg-[#0B0B14] overflow-hidden group hover:border-white/[0.08] hover:shadow-[0_0_50px_rgba(37,99,235,0.05)] transition-all duration-500">
<div className="w-full xl:w-2/5 h-[350px] xl:h-auto relative bg-[#06060C] border-b xl:border-b-0 xl:border-r border-white/[0.04] flex flex-col items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent z-0"></div>
<div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
<iconify-icon className="text-white/10 relative z-10 group-hover:scale-110 transition-transform duration-700" height="120" icon="solar:user-circle-linear" width="120"></iconify-icon>
<span className="text-xs tracking-widest uppercase font-semibold text-white/20 mt-4 relative z-10">Inserir Foto</span>
<a className="absolute bottom-5 right-5 z-20 w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] transition-all" href="#">
<iconify-icon height="20" icon="solar:link-minimalistic-linear" width="20"></iconify-icon>
</a>
</div>
<div className="w-full xl:w-3/5 p-8 xl:p-10 flex flex-col relative bg-[#0B0B14]">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<h3 className="text-2xl font-semibold text-white mb-1 relative z-10">Rosana Fernandes</h3>
<h4 className="text-sm font-medium bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-6 relative z-10">Co-fundadora &amp; CEO</h4>
<p className="text-sm leading-[1.8] bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-8 relative z-10">
                            Líder experiente na construção e escala de operações de receita previsível. Atuou em funções de liderança conduzindo times multidisciplinares a baterem metas agressivas em mercados complexos. Especialista em Revenue Operations.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto relative z-10">
<span className="text-xs font-medium text-white/60 border border-white/[0.06] bg-white/[0.02] rounded-full px-4 py-1.5">RevOps</span>
<span className="text-xs font-medium text-white/60 border border-white/[0.06] bg-white/[0.02] rounded-full px-4 py-1.5">CRM</span>
<span className="text-xs font-medium text-white/60 border border-white/[0.06] bg-white/[0.02] rounded-full px-4 py-1.5">FGV · Wharton</span>
</div>
</div>
</div>

<div className="flex flex-col xl:flex-row items-stretch rounded-[32px] border border-white/[0.04] bg-[#0B0B14] overflow-hidden group hover:border-white/[0.08] hover:shadow-[0_0_50px_rgba(37,99,235,0.05)] transition-all duration-500">
<div className="w-full xl:w-2/5 h-[350px] xl:h-auto relative bg-[#06060C] border-b xl:border-b-0 xl:border-r border-white/[0.04] flex flex-col items-center justify-center overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent z-0"></div>
<div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
<iconify-icon className="text-white/10 relative z-10 group-hover:scale-110 transition-transform duration-700" height="120" icon="solar:user-circle-linear" width="120"></iconify-icon>
<span className="text-xs tracking-widest uppercase font-semibold text-white/20 mt-4 relative z-10">Inserir Foto</span>
<a className="absolute bottom-5 right-5 z-20 w-10 h-10 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] transition-all" href="#">
<iconify-icon height="20" icon="solar:link-minimalistic-linear" width="20"></iconify-icon>
</a>
</div>
<div className="w-full xl:w-3/5 p-8 xl:p-10 flex flex-col relative bg-[#0B0B14]">
<div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<h3 className="text-2xl font-semibold text-white mb-1 relative z-10">Paulo Castro</h3>
<h4 className="text-sm font-medium bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent mb-6 relative z-10">Co-fundador &amp; Chief Agentic Officer</h4>
<p className="text-sm leading-[1.8] bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-8 relative z-10">
                            Especialista em inteligência artificial aplicada a negócios com profundo conhecimento em modelos fundacionais e orquestração de agentes. Liderou iniciativas de tecnologia de vendas e engenharia de dados.
                        </p>
<div className="flex flex-wrap gap-2 mt-auto relative z-10">
<span className="text-xs font-medium text-white/60 border border-white/[0.06] bg-white/[0.02] rounded-full px-4 py-1.5">Agentic AI</span>
<span className="text-xs font-medium text-white/60 border border-white/[0.06] bg-white/[0.02] rounded-full px-4 py-1.5">Data Engineering</span>
<span className="text-xs font-medium text-white/60 border border-white/[0.06] bg-white/[0.02] rounded-full px-4 py-1.5">USP</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/[0.02]">
<div className="max-w-6xl mx-auto flex flex-col items-center">
<h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-center leading-tight tracking-tight text-white mb-14">
                Como os agentes funcionam <span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">na prática</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
<div className="aspect-video rounded-[24px] border border-white/[0.04] bg-[#0B0B14] flex items-center justify-center text-white/20 text-sm">
                    Caso de Uso 1
                </div>
<div className="aspect-video rounded-[24px] border border-white/[0.04] bg-[#0B0B14] flex items-center justify-center text-white/20 text-sm">
                    Caso de Uso 2
                </div>
<div className="aspect-video rounded-[24px] border border-white/[0.04] bg-[#0B0B14] flex items-center justify-center text-white/20 text-sm">
                    Caso de Uso 3
                </div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden bg-[#0B0B14]/50 border-t border-white/[0.02]" id="demo">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
<h2 className="text-[clamp(2.5rem,6vw,4rem)] font-semibold text-center leading-tight tracking-tight text-white mb-4">
                Agende uma <span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">Conversa</span>
</h2>
<p className="text-lg text-center bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent">
                Escolha o melhor horário para falar com um especialista Agentive.
            </p>
<div className="w-full max-w-2xl mx-auto h-[480px] mt-10 rounded-[24px] border border-white/[0.04] bg-[#06060C] shadow-2xl flex items-center justify-center text-white/20 text-sm relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
                Widget Calendly
            </div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/[0.02]" id="faq">
<div className="max-w-2xl mx-auto flex flex-col items-center">
<h2 className="text-[clamp(2rem,5vw,3.25rem)] font-semibold text-center leading-tight tracking-tight text-white mb-4">
                Perguntas <span className="font-serif italic bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">Frequentes</span>
</h2>
<p className="text-lg text-center bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent mb-10">
                As principais dúvidas sobre a Agentive e nossos agentes de receitas.
            </p>
<div className="w-full flex flex-col">

<div className="border-b border-white/[0.05]">
<button className="faq-btn w-full flex justify-between items-center py-5 text-left text-base font-medium text-white focus:outline-none hover:text-blue-400 transition-colors">
<span>Como os agentes da Agentive se integram ao meu CRM?</span>
<iconify-icon className="text-white/30" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content hidden pb-5">
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">
                            Resposta em breve.
                        </p>
</div>
</div>

<div className="border-b border-white/[0.05]">
<button className="faq-btn w-full flex justify-between items-center py-5 text-left text-base font-medium text-white focus:outline-none hover:text-blue-400 transition-colors">
<span>Quanto tempo leva para implementar?</span>
<iconify-icon className="text-white/30" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content hidden pb-5">
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">
                            Resposta em breve.
                        </p>
</div>
</div>

<div className="border-b border-white/[0.05]">
<button className="faq-btn w-full flex justify-between items-center py-5 text-left text-base font-medium text-white focus:outline-none hover:text-blue-400 transition-colors">
<span>Os agentes funcionam com qualquer stack de vendas?</span>
<iconify-icon className="text-white/30" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</button>
<div className="faq-content hidden pb-5">
<p className="text-sm bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.4)_100%)] bg-clip-text text-transparent leading-[1.7]">
                            Resposta em breve.
                        </p>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/[0.04] py-14 px-6 bg-[#06060C]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
<div className="font-semibold text-lg tracking-wide">
                A<span className="bg-[linear-gradient(135deg,#2563EB,#38BDF8)] bg-clip-text text-transparent">✦</span>GENTIVE
            </div>
<div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-white/50">
<a className="hover:text-white transition-colors" href="#agentes">Agentes</a>
<a className="hover:text-white transition-colors" href="#visao">Visão</a>
<a className="hover:text-white transition-colors" href="#resultados">Resultados</a>
<a className="hover:text-white transition-colors" href="#sobre">Sobre</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<a className="text-sm font-medium text-white/50 hover:text-white transition-colors" href="#">Privacidade</a>
</div>
<div className="text-center text-xs text-white/20">
            © 2026 Agentive. Todos os direitos reservados.
        </div>
</footer>


    </>
  );
}
