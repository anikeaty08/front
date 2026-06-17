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
      

<div className="fixed inset-0 z-[-1] bg-[#050505]">
<div className="absolute inset-0 grid-bg opacity-30"></div>
<div className="glow-blob top-[-20%] left-[-10%]"></div>
<div className="glow-blob bottom-[-20%] right-[-10%] opacity-50"></div>
</div>

<header className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8 z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur text-xs font-medium tracking-wide text-[#ccff00] uppercase">
<span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse"></span>
                    Método Validado
                </div>
<h1 className="text-5xl lg:text-7xl font-bold font-display tracking-tight leading-[0.95]">
                    PARE DE PERDER <br/>
<span className="text-gradient-green italic pr-2">GRANDES NEGÓCIOS</span>
</h1>
<p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                    Domine a condução comercial estratégica e transforme vendas complexas em contratos fechados com o guia definitivo de formação.
                </p>
<div className="space-y-3">
<div className="flex items-center gap-3 text-sm text-gray-300">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#ccff00]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Método aplicado em 1.200+ empresas</span>
</div>
<div className="flex items-center gap-3 text-sm text-gray-300">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#ccff00]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Zero improviso, 100% estratégia</span>
</div>
<div className="flex items-center gap-3 text-sm text-gray-300">
<svg className="lucide lucide-check-circle-2 w-5 h-5 text-[#ccff00]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span>Conversas que avançam e fecham</span>
</div>
</div>
<div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="btn-neon px-8 py-4 rounded-lg font-bold text-lg uppercase tracking-tight w-full sm:w-auto text-center flex items-center justify-center gap-2" href="#buy">
                        COMPRAR AGORA <span className="text-xs font-normal opacity-70 ml-1 block sm:inline">| R$ 29,90</span>
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<div className="flex items-center gap-2 text-xs text-gray-500">
<svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Acesso imediato • Satisfação garantida</span>
</div>
</div>
</div>

<div className="relative z-10 flex justify-center lg:justify-end">

<div className="absolute inset-0 bg-gradient-to-tr from-[#ccff00]/20 to-transparent rounded-full blur-[80px] opacity-40"></div>
<div className="relative w-full max-w-md float-anim group cursor-pointer">

<div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">


<img alt="Renato Oliveira segurando o livro Formação de Vendedores" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" src="renato-livro.jpg"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
</div>

<div className="absolute -bottom-6 -right-6 glass-card p-4 rounded-xl flex items-center gap-3 shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
<div className="text-xl font-bold text-black bg-[#ccff00] rounded pt-2 pr-2 pb-2 pl-2">R$ 29</div>
<div className="text-xs text-gray-300 leading-tight">
                            Oferta<br/>Limitada
                        </div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 relative border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<div className="flex items-center gap-2 mb-4">
<span className="w-8 h-[1px] bg-red-500"></span>
<span className="text-red-500 font-medium uppercase tracking-widest text-sm">O Problema Real</span>
</div>
<h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                    O QUE ESTÁ <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">MATANDO SUAS VENDAS?</span>
</h2>
<p className="text-xl text-gray-400">Você não perde vendas porque seu cliente não quer.<br/>Você perde porque não tem método.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
<svg className="lucide lucide-bar-chart-3 w-6 h-6 text-red-500" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">Falta de previsibilidade</h3>
<p className="text-sm text-gray-400 leading-relaxed">Você não sabe quais negócios realmente têm chance de fechar este mês. Vive de esperança, não de dados.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
<svg className="lucide lucide-filter w-6 h-6 text-red-500" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">Pipeline desorganizado</h3>
<p className="text-sm text-gray-400 leading-relaxed">Você perde oportunidades porque não sabe exatamente em que etapa cada negócio está ou qual o próximo passo.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
<svg className="lucide lucide-ghost w-6 h-6 text-red-500" data-lucide="ghost" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"></path></svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">Propostas que somem</h3>
<p className="text-sm text-gray-400 leading-relaxed">Clientes parecem muito interessados… até você enviar o preço. Depois disso, nunca mais respondem.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
<svg className="lucide lucide-clock w-6 h-6 text-red-500" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">Reuniões que não avançam</h3>
<p className="text-sm text-gray-400 leading-relaxed">A conversa é boa, o café é ótimo, mas o negócio não sai do lugar e você vira o "amigo profissional".</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
<svg className="lucide lucide-shuffle w-6 h-6 text-red-500" data-lucide="shuffle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 14 4 4-4 4"></path><path d="m18 2 4 4-4 4"></path><path d="M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"></path><path d="M2 6h1.972a4 4 0 0 1 3.6 2.2"></path><path d="M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"></path></svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">Dependência do improviso</h3>
<p className="text-sm text-gray-400 leading-relaxed">Cada venda parece uma luta nova — sem método, sem processo, sem sequência lógica.</p>
</div>

<div className="glass-card p-8 rounded-2xl group">
<div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
<svg className="lucide lucide-anchor w-6 h-6 text-red-500" data-lucide="anchor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v16"></path><path d="m19 13 2-1a9 9 0 0 1-18 0l2 1"></path><path d="M9 11h6"></path><circle cx="12" cy="4" r="2"></circle></svg>
</div>
<h3 className="text-xl font-bold mb-3 text-white">Ciclos longos sem controle</h3>
<p className="text-sm text-gray-400 leading-relaxed">Negócios que se arrastam por meses e você não sabe o gatilho certo para destravar a decisão.</p>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-white text-lg font-medium inline-block border-b border-[#ccff00] pb-1">É hora de mudar isso.</p>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-gradient-to-b from-[#050505] to-[#0a0a0a]">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#ccff0030] via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ccff00]/30 bg-[#ccff00]/10 text-xs font-bold tracking-wide text-[#ccff00] uppercase mb-6">
                    A Solução Definitiva
                </div>
<h2 className="text-4xl md:text-6xl font-bold font-display mb-6 tracking-tight">
                    O MÉTODO QUE TRANSFORMA <br/>
<span className="text-[#ccff00]">VENDEDORES EM MÁQUINAS</span>
</h2>
<p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Este guia entrega o framework completo para dominar vendas complexas, conduzir negociações com estratégia e criar um processo comercial que funciona todos os dias.
                </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-2xl border-t-2 border-t-[#ccff00]/50 hover:border-t-[#ccff00] transition-all">
<h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
<svg className="lucide lucide-compass w-5 h-5 text-[#ccff00]" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg> Condução Estratégica
                    </h3>
<p className="text-sm text-gray-400">Aprenda a levar o cliente da curiosidade ao fechamento com um processo claro, seguro e previsível.</p>
</div>
<div className="glass-card p-8 rounded-2xl border-t-2 border-t-[#ccff00]/50 hover:border-t-[#ccff00] transition-all">
<h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
<svg className="lucide lucide-message-square w-5 h-5 text-[#ccff00]" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg> Scripts &amp; Perguntas
                    </h3>
<p className="text-sm text-gray-400">Use perguntas estratégicas que revelam o que o cliente realmente pensa — e avançam a negociação.</p>
</div>
<div className="glass-card p-8 rounded-2xl border-t-2 border-t-[#ccff00]/50 hover:border-t-[#ccff00] transition-all">
<h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
<svg className="lucide lucide-timer w-5 h-5 text-[#ccff00]" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg> Domínio dos Ciclos
                    </h3>
<p className="text-sm text-gray-400">Técnicas específicas para encurtar processos, evitar negócios travados e manter o cliente engajado.</p>
</div>
<div className="glass-card p-8 rounded-2xl border-t-2 border-t-[#ccff00]/50 hover:border-t-[#ccff00] transition-all">
<h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
<svg className="lucide lucide-trello w-5 h-5 text-[#ccff00]" data-lucide="trello" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><rect height="9" width="3" x="7" y="7"></rect><rect height="5" width="3" x="14" y="7"></rect></svg> Pipeline Previsível
                    </h3>
<p className="text-sm text-gray-400">Crie um funil que você consegue ler, controlar e otimizar — sem achismos e sem perder oportunidades.</p>
</div>
<div className="glass-card p-8 rounded-2xl border-t-2 border-t-[#ccff00]/50 hover:border-t-[#ccff00] transition-all">
<h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
<svg className="lucide lucide-repeat w-5 h-5 text-[#ccff00]" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg> Processo Replicável
                    </h3>
<p className="text-sm text-gray-400">Transforme sua venda em um sistema claro, que você aplica sempre com consistência e resultado.</p>
</div>
<div className="glass-card p-8 rounded-2xl border-t-2 border-t-[#ccff00]/50 hover:border-t-[#ccff00] transition-all">
<h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
<svg className="lucide lucide-zap w-5 h-5 text-[#ccff00]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Aplicação Imediata
                    </h3>
<p className="text-sm text-gray-400">Frameworks, roteiros e checklists para usar já na sua rotina e sentir diferença na próxima reunião.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-y border-white/5 bg-[#080808]">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="w-full lg:w-1/2 relative group">
<div className="absolute -inset-2 bg-gradient-to-r from-[#ccff00] to-teal-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-lg transition duration-500"></div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-white/10 grayscale hover:grayscale-0 transition duration-700">

<img alt="Renato Oliveira" className="w-full h-full object-cover" src="renato-livro.jpg"/>
</div>
</div>

<div className="w-full lg:w-1/2 space-y-8">
<div>
<span className="text-gray-500 font-mono uppercase tracking-widest text-sm mb-2 block">// Autoridade no Assunto</span>
<h2 className="text-4xl md:text-5xl font-bold font-display text-white">RENATO OLIVEIRA</h2>
<p className="text-[#ccff00] font-medium text-lg mt-1">Mentor, Palestrante e Estrategista Comercial</p>
</div>
<p className="text-gray-300 leading-relaxed text-lg">
                        Autor do "Formação de Vendedores" e especialista em vendas complexas, Renato ajudou empresas de diferentes setores a criarem previsibilidade, processos sólidos e equipes que performam com consistência.
                    </p>
<p className="text-gray-300 leading-relaxed">
                        Ao longo de sua jornada, aplicou seu método em mais de 1.200 empresas — sempre transformando vendedores comuns em profissionais estratégicos e máquinas de fechar negócios.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
<div className="glass-card p-4 rounded-lg">
<h4 className="text-3xl font-bold text-white mb-1">24+</h4>
<p className="text-xs text-gray-400 uppercase tracking-wider">Anos de Experiência</p>
</div>
<div className="glass-card p-4 rounded-lg">
<h4 className="text-3xl font-bold text-white mb-1">1.200+</h4>
<p className="text-xs text-gray-400 uppercase tracking-wider">Empresas Impactadas</p>
</div>
</div>
<blockquote className="border-l-4 border-[#ccff00] pl-6 py-2 italic text-xl text-gray-300">
                        "Venda é ciência. E ciência tem método."
                    </blockquote>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">

<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative">
<div className="text-center mb-16">
<span className="text-gray-500 font-mono uppercase tracking-widest text-sm mb-2 block">Público-Alvo</span>
<h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4">
                    ESTE GUIA É PARA <br/>
<span className="text-white border-b-4 border-[#ccff00]">QUEM VENDE ALTO VALOR</span>
</h2>
<p className="text-gray-400 max-w-2xl mx-auto mt-6">
                    Vendas complexas exigem estratégia, múltiplas conversas, clientes exigentes e ciclos longos. Se esse é o seu cenário, este material foi criado exatamente para você.
                </p>
</div>
<div className="grid md:grid-cols-3 gap-4">

<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3 mb-3">
<svg className="lucide lucide-building-2 w-5 h-5 text-[#ccff00]" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<h3 className="font-bold text-white">Vendas B2B</h3>
</div>
<p className="text-sm text-gray-400">Profissionais que negociam com empresas e precisam de previsibilidade comercial.</p>
</div>
<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3 mb-3">
<svg className="lucide lucide-briefcase w-5 h-5 text-[#ccff00]" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<h3 className="font-bold text-white">Serviços e Consultorias</h3>
</div>
<p className="text-sm text-gray-400">Consultores e prestadores de serviços especializados que vendem conhecimento.</p>
</div>
<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3 mb-3">
<svg className="lucide lucide-cpu w-5 h-5 text-[#ccff00]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<h3 className="font-bold text-white">Tecnologia e SaaS</h3>
</div>
<p className="text-sm text-gray-400">Vendedores de softwares e plataformas que envolvem múltiplas etapas de decisão.</p>
</div>
<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3 mb-3">
<svg className="lucide lucide-home w-5 h-5 text-[#ccff00]" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<h3 className="font-bold text-white">Mercado Imobiliário</h3>
</div>
<p className="text-sm text-gray-400">Corretores e profissionais que lidam com negociações de alto valor e longos ciclos.</p>
</div>
<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3 mb-3">
<svg className="lucide lucide-box w-5 h-5 text-[#ccff00]" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<h3 className="font-bold text-white">Soluções Robustas</h3>
</div>
<p className="text-sm text-gray-400">Produtos complexos que exigem demonstração, leitura técnica e condução.</p>
</div>
<div className="glass-card p-6 rounded-xl hover:bg-white/5 transition-colors">
<div className="flex items-center gap-3 mb-3">
<svg className="lucide lucide-file-signature w-5 h-5 text-[#ccff00]" data-lucide="file-signature" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18.226 5.226-2.52-2.52A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.351"></path><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path><path d="M8 18h1"></path></svg>
<h3 className="font-bold text-white">Grandes Contratos</h3>
</div>
<p className="text-sm text-gray-400">Profissionais que negociam valores significativos e precisam de um processo claro.</p>
</div>
</div>
<div className="mt-10 p-4 border border-[#ccff00]/30 bg-[#ccff00]/5 rounded-lg text-center max-w-3xl mx-auto">
<p className="text-[#ccff00] font-medium">Não importa o segmento: se sua venda é complexa e envolve negociação estratégica, este método funciona.</p>
</div>
</div>
</section>

<section className="py-24 px-6 relative bg-[#0a0a0a]">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div>
<span className="text-gray-500 font-mono uppercase tracking-widest text-sm mb-2 block">Conteúdo Completo</span>
<h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">O QUE VOCÊ VAI <br/> RECEBER AGORA</h2>
<p className="text-gray-400 mb-10">Um guia completo de ferramentas para conduzir vendas complexas com método, clareza e estratégia — pronto para usar no mesmo dia.</p>
<div className="space-y-4">

<div className="flex gap-4 p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all">
<div className="w-10 h-10 rounded bg-[#ccff00]/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-book-open text-[#ccff00] w-5 h-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
</div>
<div>
<h4 className="text-white font-bold">E-book completo (PDF)</h4>
<p className="text-sm text-gray-400 mt-1">Conteúdo estruturado, direto ao ponto e pronto para consulta rápida.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all">
<div className="w-10 h-10 rounded bg-[#ccff00]/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-layout text-[#ccff00] w-5 h-5" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<div>
<h4 className="text-white font-bold">Frameworks práticos</h4>
<p className="text-sm text-gray-400 mt-1">Modelos prontos para aplicar imediatamente nas suas negociações.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all">
<div className="w-10 h-10 rounded bg-[#ccff00]/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-map text-[#ccff00] w-5 h-5" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
</div>
<div>
<h4 className="text-white font-bold">Mapas de processo</h4>
<p className="text-sm text-gray-400 mt-1">Visualize o caminho do lead até o fechamento passo a passo.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-xl border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all">
<div className="w-10 h-10 rounded bg-[#ccff00]/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-list-checks text-[#ccff00] w-5 h-5" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg>
</div>
<div>
<h4 className="text-white font-bold">Plano de aplicação em 24h</h4>
<p className="text-sm text-gray-400 mt-1">Um guia rápido para começar a aplicar o método ainda hoje.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute inset-0 bg-[#ccff00] blur-[100px] opacity-10"></div>
<div className="glass-card rounded-3xl p-8 lg:p-12 text-center relative z-10 border border-white/10 shadow-2xl">
<div className="uppercase tracking-widest text-sm text-gray-400 mb-4">Oferta Especial</div>
<div className="text-6xl font-bold text-white mb-2 font-display">R$ 29,90</div>
<p className="text-gray-400 text-sm mb-8">Pagamento único • Acesso vitalício</p>
<a className="btn-neon w-full py-4 rounded-lg font-bold text-lg uppercase flex items-center justify-center gap-2 mb-6" href="#buy">
                        COMPRAR AGORA
                    </a>
<div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-6">
<svg className="lucide lucide-lock w-3 h-3" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Pagamento seguro
                    </div>
<div className="border-t border-white/10 pt-6">
<p className="text-sm text-gray-300 italic">"Menos do que um almoço executivo. Muito mais do que vale."</p>
</div>
<div className="mt-6 bg-[#ccff00]/5 rounded p-4 border border-[#ccff00]/20">
<div className="flex items-start gap-3 text-left">
<svg className="lucide lucide-award text-[#ccff00] w-5 h-5 mt-0.5" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<div>
<h5 className="text-[#ccff00] font-bold text-sm">Garantia de Resultado</h5>
<p className="text-xs text-gray-400 mt-1">Se você aplicar apenas 10% deste método, o valor investido volta no seu primeiro contrato fechado.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="buy">
<div className="absolute inset-0 bg-[#ccff00] opacity-5 mix-blend-overlay"></div>
<div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#050505] to-transparent z-0"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 tracking-tight leading-none">
                TRANSFORME SUA <br/>
<span className="text-[#ccff00]">FORMA DE VENDER</span>
</h2>
<p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                Pare de perder negócios por falta de método. <br/>
                Sua concorrência já está aplicando. Não fique para trás.
            </p>
<div className="flex flex-col items-center gap-4">
<div className="text-3xl font-bold text-white mb-2">
<span className="text-sm text-gray-500 font-normal align-middle mr-2">Por apenas</span>
                    R$ 29,90
                </div>
<button className="btn-neon px-12 py-5 rounded-lg font-bold text-xl uppercase tracking-wide shadow-[0_0_40px_rgba(204,255,0,0.3)] animate-pulse">
                    Comprar Agora — Acesso Imediato
                </button>
<div className="flex items-center gap-4 mt-6 text-xs text-gray-500">
<span className="flex items-center gap-1"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Pagamento 100% seguro via Hotmart</span>
<span className="flex items-center gap-1"><svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Entrega instantânea</span>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-[#020202] text-center px-6">
<div className="max-w-7xl mx-auto flex flex-col items-center gap-6">
<div>
<h4 className="text-white font-display font-bold text-xl">RENATO OLIVEIRA</h4>
<p className="text-gray-500 text-sm mt-1">Formação de Vendedores — Para Vendas Complexas</p>
</div>
<div className="w-12 h-1 bg-[#ccff00] rounded-full"></div>
<p className="text-gray-600 text-xs">
                © 2025 Renato Oliveira. Todos os direitos reservados.
            </p>
</div>
</footer>


    </>
  );
}
