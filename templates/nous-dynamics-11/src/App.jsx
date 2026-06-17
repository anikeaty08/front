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



        // Initialize Icons
        lucide.createIcons();

        // Add custom animations dynamically
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes float-slow {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
            
            .animate-float-delayed-1 { animation: float-slow 6s ease-in-out infinite; animation-delay: 0s; }
            .animate-float-delayed-2 { animation: float-slow 7s ease-in-out infinite; animation-delay: 1s; }
            .animate-float-delayed-3 { animation: float-slow 6.5s ease-in-out infinite; animation-delay: 0.5s; }
            .animate-float-delayed-4 { animation: float-slow 7.5s ease-in-out infinite; animation-delay: 1.5s; }

            @keyframes fade-in-up {
                0% { opacity: 0; transform: translateY(20px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
            
            @keyframes pulse-slow {
                0%, 100% { opacity: 0.05; transform: scale(1); }
                50% { opacity: 0.1; transform: scale(1.1); }
            }
            .animate-pulse-slow { animation: pulse-slow 8s infinite; }
        `;
        document.head.appendChild(style);
    
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
      

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full pointer-events-none">
<div className="pointer-events-auto glass-nav flex gap-6 animate-fade-in-up rounded-full pt-1.5 pr-1.5 pb-1.5 pl-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] items-center">
<div className="flex items-center gap-2">
<img alt="Nous Dynamics" className="w-7 h-7 object-cover rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1973216d-d1c2-44d4-af79-2bb16a21aacd_320w.png"/>
<span className="text-sm font-medium tracking-wide text-white hidden sm:block ml-1">Nous Dynamics</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#metodo">Método</a>
<a className="hover:text-white transition-colors" href="#quem-somos">Para Quem É</a>
</div>
<a className="bg-[#C5A88E] text-[#010100] text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-[#D6BCA5] transition-all hover:scale-105" href="#contato">
                Agendar
            </a>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex flex-col pt-32 pb-24 relative items-center justify-center">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C5A88E]/10 rounded-[100%] blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C5A88E]/20 bg-[#C5A88E]/5 text-[#C5A88E] text-[10px] uppercase font-semibold tracking-[0.2em] mb-8 animate-fade-in-up">
                Escala &amp; LTV
            </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 leading-[1.05] animate-fade-in-up delay-100">
                Sua agenda cheia,<br/>
                o lucro <span className="inline-block relative">
<span className="bg-clip-text italic text-transparent bg-gradient-to-br from-[#DFBFA7] to-[#DFBFA7] z-10 pr-2 relative">estagnado.</span>
</span>
</h1>

<p className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-10 font-light tracking-wide animate-fade-in-up delay-200">
                Transformamos clientes pontuais em receita recorrente. Otimize seu <strong>LTV</strong> e escale seu faturamento sem depender apenas de novos leads.
            </p>

<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center animate-fade-in-up delay-300">
<a className="group relative h-12 px-8 flex items-center justify-center bg-[#C5A88E] text-[#010100] text-sm font-semibold rounded-full overflow-hidden transition-all hover:bg-[#E8D4C1] shadow-[0_0_30px_-10px_rgba(197,168,142,0.4)]" href="#contato">
<span className="mr-2">Agendar Análise Gratuita</span>
<svg className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="h-12 px-8 flex items-center justify-center text-slate-300 text-sm hover:text-white transition-colors border border-transparent hover:border-[#C5A88E]/20 rounded-full" href="#metodo">
                    Conhecer Método
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
<svg className="lucide lucide-chevron-down w-6 h-6 text-[#C5A88E]" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</header>

<section className="py-24 bg-[#050505] border-y border-[#111]/80" id="metodo">
<div className="max-w-6xl mx-auto px-6">

<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
<div>
<p className="text-[11px] tracking-[0.35em] uppercase text-[#C5A88E] mb-3">
                    Section 02
                </p>
<h2 className="text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                    O Método Nous Leads
                </h2>
</div>
<p className="md:max-w-xl text-sm md:text-base text-slate-400 leading-relaxed">
                Um sistema em 4 etapas para construir previsibilidade de vendas, aumentar o LTV
                e fazer sua empresa crescer sem depender apenas de novos leads frios.
            </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">

<article className="group relative overflow-hidden rounded-xl border border-[#181818] bg-gradient-to-b from-[#070707] to-black px-6 py-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C5A88E]/70">

<div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#2a2a2a] bg-black/60 text-slate-400 group-hover:text-[#C5A88E]">
<svg className="lucide lucide-arrow-up-right w-4 h-4" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>

<span className="inline-flex items-center justify-center rounded-full border border-[#2a2a2a] bg-black/70 px-2.5 py-0.5 text-[11px] font-medium tracking-[0.2em] text-slate-400 mb-5">
          ETAPA 01
        </span>

<h3 className="text-lg md:text-xl font-medium text-white mb-3">
                    Entendimento Estratégico
                </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                    Analisamos seu posicionamento, concorrentes e oferta para encontrar os
                    públicos, mensagens e ângulos criativos com maior potencial de conversão.
                </p>
</article>

<article className="group relative overflow-hidden rounded-xl border border-[#181818] bg-gradient-to-b from-[#070707] to-black px-6 py-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C5A88E]/70">
<div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#2a2a2a] bg-black/60 text-slate-400 group-hover:text-[#C5A88E]">
<svg className="lucide lucide-cpu w-4 h-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<span className="inline-flex items-center justify-center rounded-full border border-[#2a2a2a] bg-black/70 px-2.5 py-0.5 text-[11px] font-medium tracking-[0.2em] text-slate-400 mb-5">
          ETAPA 02
        </span>
<h3 className="text-lg md:text-xl font-medium text-white mb-3">
                    Máquina de Aquisição
                </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                    Criamos campanhas, anúncios e páginas de alta conversão que capturam o
                    lead certo e entregam oportunidades qualificadas para o seu time comercial.
                </p>
</article>

<article className="group relative overflow-hidden rounded-xl border border-[#181818] bg-gradient-to-b from-[#070707] to-black px-6 py-8 shadow-[0_18px_40px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C5A88E]/70">
<div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#2a2a2a] bg-black/60 text-slate-400 group-hover:text-[#C5A88E]">
<svg className="lucide lucide-bar-chart-2 w-4 h-4" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<span className="inline-flex items-center justify-center rounded-full border border-[#2a2a2a] bg-black/70 px-2.5 py-0.5 text-[11px] font-medium tracking-[0.2em] text-slate-400 mb-5">
          ETAPA 03
        </span>
<h3 className="text-lg md:text-xl font-medium text-white mb-3">
                    Otimização Contínua
                </h3>
<p className="text-sm text-slate-400 leading-relaxed">
                    Acompanhamo­s diariamente os indicadores, testando criativos, públicos e
                    ofertas para reduzir o custo por lead e maximizar o ROI.
                </p>
</article>

<article className="group relative overflow-hidden rounded-xl border border-[#C5A88E]/70 bg-gradient-to-b from-[#111111] to-[#050403] px-6 py-8 shadow-[0_22px_50px_rgba(197,168,142,0.30)] transition-all duration-300 hover:-translate-y-1.5">
<div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full border border-[#E7D3C0]/50 bg-[#C5A88E]/90 text-black">
<svg className="lucide lucide-gem w-4 h-4" data-lucide="gem" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 3 8 9l4 13 4-13-2.5-6"></path><path d="M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z"></path><path d="M2 9h20"></path></svg>
</div>
<span className="inline-flex items-center justify-center rounded-full bg-[#C5A88E]/10 border border-[#E7D3C0]/60 px-2.5 py-0.5 text-[11px] font-semibold tracking-[0.2em] text-[#E7D3C0] mb-5">
          ETAPA 04
        </span>
<h3 className="text-lg md:text-xl font-medium text-white mb-3">
                    Escala &amp; Retenção de LTV
                </h3>
<p className="text-sm text-slate-200 leading-relaxed">
                    Implementamos programas de recompra, ascendentes de ticket e automações
                    de relacionamento para aumentar o tempo de vida do cliente e o lucro por conta.
                </p>
</article>
</div>

<div className="mt-12 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-black/40 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-300 hover:border-[#C5A88E] hover:text-white hover:bg-black/70 transition-all" href="#contato">
                Quero escalar meus resultados
                <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.7" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#050505]" id="quem-somos">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-5xl text-white mb-8 leading-tight">
                        Esta solução é ideal <br/>
<span className="text-[#C5A88E] italic">para você que:</span>
</h2>
<ul className="space-y-6">
<li className="flex gap-4 items-start">
<div className="mt-1 min-w-[20px] h-[20px] rounded-full bg-[#C5A88E]/10 border border-[#C5A88E]/30 flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-[#C5A88E]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-white text-lg font-medium mb-1">Agenda cheia, faturamento estagnado</h4>
<p className="text-slate-400 text-sm font-light">Você já atrai clientes, mas não consegue transformar volume em lucro real.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1 min-w-[20px] h-[20px] rounded-full bg-[#C5A88E]/10 border border-[#C5A88E]/30 flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-[#C5A88E]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-white text-lg font-medium mb-1">LTV (Lifetime Value) baixo</h4>
<p className="text-slate-400 text-sm font-light">Seus clientes vêm uma vez e somem, forçando gastos contínuos com novos leads.</p>
</div>
</li>
<li className="flex gap-4 items-start">
<div className="mt-1 min-w-[20px] h-[20px] rounded-full bg-[#C5A88E]/10 border border-[#C5A88E]/30 flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-[#C5A88E]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-white text-lg font-medium mb-1">Fatura acima de R$60.000/mês</h4>
<p className="text-slate-400 text-sm font-light">Já possui tração e precisa de um parceiro estratégico para romper a barreira.</p>
</div>
</li>
</ul>
<div className="mt-10">
<a className="inline-flex items-center gap-2 text-white font-medium hover:text-[#C5A88E] transition-colors" href="#contato">
                            Sim, essa solução é para mim <svg className="lucide lucide-arrow-down w-4 h-4" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
</div>
</div>

<div className="relative h-[500px] w-full bg-[#080808] border border-[#C5A88E]/10 rounded-2xl overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-lux-grid opacity-50"></div>
<div className="relative w-64 h-64 border border-[#C5A88E]/20 rounded-full animate-[spin_20s_linear_infinite]">
<div className="absolute inset-2 border border-[#C5A88E]/10 rounded-full"></div>
<div className="absolute -top-2 left-1/2 w-4 h-4 bg-[#C5A88E] rounded-full blur-[2px]"></div>
</div>
<div className="absolute glass-panel px-6 py-4 rounded-lg bottom-10 animate-float-slow">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#C5A88E]/20 rounded-full flex items-center justify-center">
<svg className="lucide lucide-trending-up w-5 h-5 text-[#C5A88E]" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div>
<p className="text-xs text-slate-400">Crescimento Previsível</p>
<p className="text-white font-serif text-lg">+145% LTV</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="contato">

<div className="absolute inset-0 bg-[#010100]"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#C5A88E]/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-2xl mx-auto px-6">
<div className="glass-panel p-8 md:p-12 rounded-2xl border border-[#C5A88E]/20 shadow-2xl">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl text-white mb-4">Receba uma Análise de Marketing</h2>
<p className="text-slate-400 font-light">
                        Preencha os dados abaixo. Entenderemos como acelerar seus resultados.
                    </p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-[#C5A88E] uppercase tracking-wider">Nome</label>
<input className="w-full px-4 py-3 rounded input-gold text-sm" placeholder="Seu nome completo" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-[#C5A88E] uppercase tracking-wider">Empresa</label>
<input className="w-full px-4 py-3 rounded input-gold text-sm" placeholder="Nome da sua empresa" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-[#C5A88E] uppercase tracking-wider">E-mail Corporativo</label>
<input className="w-full px-4 py-3 rounded input-gold text-sm" placeholder="seu@email.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-[#C5A88E] uppercase tracking-wider">WhatsApp</label>
<input className="w-full px-4 py-3 rounded input-gold text-sm" placeholder="(DD) 99999-9999" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs text-[#C5A88E] uppercase tracking-wider">Site ou Instagram</label>
<input className="w-full px-4 py-3 rounded input-gold text-sm" placeholder="@seuinstagram" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-[#C5A88E] uppercase tracking-wider">Faturamento Médio Mensal</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded input-gold text-sm appearance-none cursor-pointer">
<option disabled="" selected="" value="">Selecione uma opção</option>
<option value="ate-60">Até R$60 mil</option>
<option value="60-100">Entre R$60 mil e R$100 mil</option>
<option value="100-200">Entre R$100 mil e R$200 mil</option>
<option value="acima-200">Acima de R$200 mil</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-[#C5A88E] uppercase tracking-wider">Investimento em Anúncios (Mensal)</label>
<div className="relative">
<select className="w-full px-4 py-3 rounded input-gold text-sm appearance-none cursor-pointer">
<option disabled="" selected="" value="">Selecione uma opção</option>
<option value="nao-invisto">Ainda não invisto</option>
<option value="ate-3000">Até R$3.000</option>
<option value="3000-7000">Entre R$3.000 e R$7.000</option>
<option value="acima-7000">Acima de R$7.000</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<button className="w-full mt-6 bg-[#C5A88E] hover:bg-[#D6BCA5] text-[#010100] font-semibold py-4 rounded transition-all shadow-lg shadow-[#C5A88E]/20 text-sm uppercase tracking-widest" type="submit">
                        Agendar Minha Análise
                    </button>
</form>
</div>
</div>
</section>

<footer className="border-t border-[#C5A88E]/10 py-12 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-serif tracking-wide text-white">Nous Dynamics</span>
<span className="text-xs text-slate-500 ml-2">© 2024</span>
</div>
<div className="flex gap-8 text-sm text-slate-500 font-light">
<a className="hover:text-[#C5A88E] transition-colors" href="#">Privacidade</a>
<a className="hover:text-[#C5A88E] transition-colors" href="#">Termos</a>
<a className="hover:text-[#C5A88E] transition-colors" href="#">Instagram</a>
</div>
</div>
</footer>


    </>
  );
}
