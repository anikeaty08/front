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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full z-0"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/" width="100%"></iframe></div></div>

<nav className="fixed z-50 w-full border-b top-0 backdrop-blur-md bg-neutral-950/80 border-white/5" style={{}}>
<div className="flex max-w-7xl mr-auto ml-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">
<div className="flex gap-2 gap-x-2 gap-y-2 items-center text-white">
<div className="flex bg-[#c1ff72] w-6 h-6 rounded-lg items-center justify-center text-neutral-950" style={{}}>
<svg className="lucide lucide-container fill-current w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="logos" data-logos="codesee-icon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(2, 6, 23)'}} viewbox="0 0 256 147" width="20" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m98.154 0l11.692 29.846c-17.846 7.077-41.23 23.385-64 43.692c22.77 20.307 46.154 36.308 64 44l-11.385 29.231C69.846 134.462 34.77 107.384 0 73.231l2.086-2.04C36.158 38.01 70.111 12.06 98.154 0m59.692 0C186.46 12.308 221.23 39.077 256 73.23l-2.087 2.041c-34.083 33.19-68.332 59.437-96.375 71.498l-11.384-29.231c17.846-7.692 41.23-23.693 64-44l-1.848-1.637c-22.181-19.545-44.788-35.17-62.152-42.055zM128 49.846c13.424 0 24.308 10.883 24.308 24.308c0 13.424-10.884 24.307-24.308 24.307c-13.425 0-24.308-10.883-24.308-24.307c0-13.425 10.883-24.308 24.308-24.308"></path>
</svg>
</div>
<span className="text-2xl font-medium tracking-tight font-quicksand" style={{}}>NectArr</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-[#c1ff72]" style={{}}>
<a className="transition-colors font-manrope hover:text-white" href="#diferenciais" style={{}}>Diferenciais</a>
<a className="transition-colors font-manrope hover:text-white" href="#servicos" style={{}}>Soluções</a>
<a className="transition-colors font-manrope hover:text-white" href="#plataforma" style={{}}>Plataforma</a>
<a className="transition-colors font-manrope hover:text-white" href="#agendar" style={{}}>Fale Conosco</a>
</div>

<a className="hidden md:flex items-center gap-2 transition-all text-sm font-manrope border rounded-full pt-2 pr-5 pb-2 pl-5 hover:bg-white hover:text-neutral-900 text-white bg-white/5 border-white/10" href="https://wa.me/5511956185419" rel="noopener noreferrer" style={{}} target="_blank">
                Falar com Especialista
                <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path className="" d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-b from-[#d4f64d]/10 to-transparent blur-[120px] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="space-y-8">
<div className="inline-flex gap-2 uppercase text-xs font-medium text-[#d4f64d] tracking-wide bg-[#d4f64d]/10 border-[#d4f64d]/20 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d4f64d] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#d4f64d]"></span>
</span>
<span className="font-manrope" style={{}}>Pipeline Previsível B2B</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-[1.05] text-5xl font-medium tracking-tight font-montserrat text-white" style={{}}>
                        Não busque apenas leads.<br/>Encontre o <span className="font-medium text-[#c1ff72] font-montserrat" style={{}}>NectArr.</span>
</h1>
<p className="text-xl max-w-xl leading-relaxed font-manrope text-[#c1ff72]" style={{}}>
                        A NectArr é o motor de crescimento para empresas B2B. Unimos inteligência de dados, automação e SDRs de elite para encher sua agenda com decisores qualificados.
                    </p>

<ul className="space-y-3 font-light text-sm text-neutral-300" style={{}}>
<li className="flex items-center gap-3 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Sem depender de indicações ou sorte.
                        </li>
<li className="flex items-center gap-3 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
                            Infraestrutura de prospecção 100% pronta.
                        </li>
<li className="flex items-center gap-3 font-manrope" style={{}}>
<svg className="lucide lucide-check w-4 h-4 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M20 6 9 17l-5-5"></path></svg>
                            Foco total no seu ICP (Ideal Customer Profile).
                        </li>
</ul>
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center pt-4">

<a className="hover:bg-[#c3e63b] transition-all flex items-center gap-2 text-base font-manrope bg-[#c1ff72] rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_20px_rgba(212,246,77,0.3)] text-neutral-950" href="https://api.whatsapp.com/send?phone=5511956185419" onclick="window.open('https://api.whatsapp.com/send?phone=5511956185419', '_blank'); return false;" rel="noopener noreferrer" style={{}} target="_blank">
    Agende uma call estratégica
    <svg className="lucide lucide-calendar-check-2 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2v4"></path>
<path d="M16 2v4"></path>
<path d="M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"></path>
<path d="M3 10h18"></path>
<path d="m16 20 2 2 4-4"></path>
</svg>
</a>
<div className="flex items-center gap-4 border-l pl-6 border-white/10">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-manrope border-neutral-950 bg-neutral-800 text-white" style={{}}>JP</div>
<div className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-manrope border-neutral-950 bg-neutral-700 text-white" style={{}}>AL</div>
<div className="w-10 h-10 rounded-full border-2 bg-[#d4f64d] flex items-center justify-center text-xs font-manrope border-neutral-950 text-neutral-900" style={{}}>+120</div>
</div>
<div className="text-sm text-white">
<span className="block text-[#d4f64d] font-manrope" style={{}}>4.8/5.0</span>
<span className="text-xs font-manrope text-[#c1ff72]" style={{}}>Rating de Clientes</span>
</div>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center">
<div className="relative w-full max-w-lg aspect-square lg:aspect-auto h-full rounded-[2rem] border backdrop-blur-sm overflow-hidden shadow-2xl group border-white/10 bg-neutral-900/50" style={{}}>

<div className="absolute inset-0 p-8 flex flex-col gap-4 opacity-80 overflow-hidden">

<div className="flex items-center justify-between p-4 rounded-xl border transform translate-y-4 transition-transform duration-700 group-hover:translate-y-0 border-white/5 bg-white/5">
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg bg-lime-500/20 text-lime-400" style={{}}><svg className="lucide lucide-mail w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect className="" height="16" rx="2" width="20" x="2" y="4"></rect></svg></div>
<div className="">
<div className="text-sm font-manrope text-white" style={{}}>Email de Prospecção</div>
<div className="text-xs font-manrope text-neutral-400" style={{}}>Aguardando Leitura</div>
</div>
</div>
<div className="text-[#d4f64d] text-xs font-manrope" style={{}}>Enviado</div>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border transform translate-y-8 transition-transform duration-700 group-hover:translate-y-0 delay-75 border-white/5 bg-white/5">
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg bg-lime-500/20 text-lime-400" style={{}}><svg className="lucide lucide-linkedin w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></div>
<div className="">
<div className="text-sm font-manrope text-white" style={{}}>Conexão LinkedIn</div>
<div className="text-xs font-manrope text-neutral-400" style={{}}>Convite Aceito</div>
</div>
</div>
<div className="text-[#d4f64d] text-xs font-manrope" style={{}}>Conectado</div>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border border-[#d4f64d]/20 bg-[#d4f64d]/5 transform translate-y-12 transition-transform duration-700 group-hover:translate-y-0 delay-150">
<div className="flex items-center gap-4">
<div className="p-2 bg-[#d4f64d] rounded-lg text-neutral-900" style={{}}><svg className="lucide lucide-check-circle w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg></div>
<div className="">
<div className="text-sm font-manrope text-white" style={{}}>Reunião Agendada</div>
<div className="text-xs font-manrope text-[#c1ff72]" style={{}}>CEO - TechCorp S.A.</div>
</div>
</div>
<div className="px-2 py-1 bg-[#d4f64d]/20 text-[#d4f64d] rounded text-xs font-manrope" style={{}}>HOJE</div>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border transform translate-y-12 transition-transform duration-700 group-hover:translate-y-0 delay-200 border-white/5 bg-white/5">
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg bg-lime-500/20 text-lime-400" style={{}}><svg className="lucide lucide-message-circle w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg></div>
<div className="">
<div className="text-sm font-manrope text-white" style={{}}>Cliente Respondeu</div>
<div className="text-xs font-manrope text-neutral-400" style={{}}>Solicitou Demonstração</div>
</div>
</div>
<div className="text-[#d4f64d] text-xs font-manrope" style={{}}>Respondeu</div>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border transform translate-y-12 transition-transform duration-700 group-hover:translate-y-0 delay-300 border-white/5 bg-white/5">
<div className="flex items-center gap-4">
<div className="p-2 bg-neutral-500/20 rounded-lg text-[#c1ff72]" style={{}}><svg className="lucide lucide-user-check w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg></div>
<div className="">
<div className="text-sm font-manrope text-white" style={{}}>Falar com Cliente XYZ</div>
<div className="text-xs font-manrope text-neutral-400" style={{}}>Tomador de Decisão</div>
</div>
</div>
<div className="text-[#d4f64d] text-xs font-manrope" style={{}}>Qualificado</div>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border transform translate-y-12 transition-transform duration-700 group-hover:translate-y-0 delay-[400ms] border-white/5 bg-white/5">
<div className="flex items-center gap-4">
<div className="p-2 rounded-lg bg-lime-500/20 text-lime-400" style={{}}><svg className="lucide lucide-file-text w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg></div>
<div className="">
<div className="text-sm font-manrope text-white" style={{}}>Proposta Enviada</div>
<div className="text-xs font-manrope text-neutral-400" style={{}}>Revisão Financeira</div>
</div>
</div>
<div className="text-[#d4f64d] text-xs font-manrope" style={{}}>Em Análise</div>
</div>
</div>

<div className="absolute bottom-8 right-8 backdrop-blur-xl border p-5 rounded-2xl shadow-xl max-w-[240px] z-20 hover:scale-105 transition-transform duration-300 bg-neutral-800/95 border-white/10" style={{}}>
<div className="flex items-center gap-3 mb-3">
<div className="p-2 bg-[#d4f64d]/20 rounded-lg text-[#d4f64d]">
<svg className="lucide lucide-trending-up w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<span className="text-sm font-manrope text-white" style={{}}>Taxa de Resposta</span>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-montserrat font-medium text-white" style={{}}>18.4%</span>
<span className="text-[#d4f64d] text-xs font-manrope" style={{}}>+5.2% vs Média</span>
</div>
<div className="mt-2 w-full h-1.5 rounded-full overflow-hidden bg-white/10">
<div className="bg-[#d4f64d] h-full w-[75%]"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>


<section className="border-y bg-neutral-900/50 border-white/5" id="resultados" style={{}}>
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/5">
<div className="px-4 text-center md:text-left">
<p className="text-4xl lg:text-5xl tracking-tight mb-2 font-montserrat font-medium text-white" style={{}}>R$ 45M+</p>
<p className="text-sm uppercase tracking-wide font-manrope text-[#c1ff72]" style={{}}>Pipeline Gerado</p>
<p className="text-xs text-neutral-500 mt-1 font-manrope" style={{}}>Valor total de oportunidades criadas</p>
</div>
<div className="px-4 text-center md:text-left pl-8 md:pl-12">
<p className="text-4xl lg:text-5xl tracking-tight mb-2 font-montserrat font-medium text-white" style={{}}>120+</p>
<p className="text-sm uppercase tracking-wide font-manrope text-[#c1ff72]" style={{}}>Empresas Atendidas</p>
<p className="text-xs text-neutral-500 mt-1 font-manrope" style={{}}>SaaS, Serviços e Consultorias B2B</p>
</div>
<div className="px-4 text-center md:text-left pl-8 md:pl-12">
<p className="text-4xl lg:text-5xl tracking-tight mb-2 font-montserrat font-medium text-white" style={{}}>15x</p>
<p className="text-sm uppercase tracking-wide font-manrope text-[#c1ff72]" style={{}}>ROI Médio</p>
<p className="text-xs text-neutral-500 mt-1 font-manrope" style={{}}>Retorno sobre o investimento anual</p>
</div>
<div className="px-4 text-center md:text-left pl-8 md:pl-12">
<p className="text-4xl lg:text-5xl tracking-tight mb-2 font-montserrat font-medium text-white" style={{}}>3.4k</p>
<p className="text-sm uppercase tracking-wide font-manrope text-[#c1ff72]" style={{}}>Reuniões Agendadas</p>
<p className="text-xs text-neutral-500 mt-1 font-manrope" style={{}}>Nos últimos 12 meses</p>
</div>
</div>
</div>
</section><section className="py-24 bg-neutral-950" id="diferenciais" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-20 gap-x-20 gap-y-20 items-center">
<div className="relative order-2 md:order-1">
<div className="absolute inset-0 bg-gradient-to-tr from-[#d4f64d]/20 to-transparent rounded-3xl transform rotate-3"></div>
<img alt="Equipe NectArr" className="relative rounded-3xl shadow-2xl border w-full object-cover aspect-[4/3] grayscale hover:grayscale-0 transition-all duration-700 border-white/10" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{}}/>
<div className="absolute -bottom-6 -right-6 p-6 rounded-2xl shadow-xl border hidden lg:block border-white/10 bg-neutral-950" style={{}}>
<div className="flex items-center gap-3 mb-2">
<svg className="lucide lucide-shield-check w-5 h-5 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs uppercase tracking-wider font-manrope text-white" style={{}}>Quality Assurance</span>
</div>
<p className="text-sm max-w-[180px] font-manrope text-[#c1ff72]" style={{}}>Cada lead é verificado manualmente antes de chegar a você.</p>
</div>
</div>
<div className="space-y-8 order-1 md:order-2">
<h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-montserrat font-medium text-white" style={{}}>
                        Não somos apenas uma agência.<br/>
                        Somos seu braço de <span className="font-medium text-[#d4f64d] font-montserrat" style={{}}>Growth.</span>
</h2>
<div className="space-y-6 text-lg font-light leading-relaxed text-[#c1ff72]" style={{}}>
<p className="font-manrope" style={{}}>
                            A maioria das empresas B2B sofre com o "efeito montanha-russa": meses de alta receita seguidos por meses de seca, dependendo exclusivamente de indicações.
                        </p>
<p className="font-manrope" style={{}}>
                            A NectArr resolve isso implementando uma infraestrutura de prospecção previsível. Não vendemos "listas de contatos". Vendemos reuniões no calendário e pipeline qualificado.
                        </p>
<p className="font-manrope" style={{}}>
                            Nossa filosofia é simples: . Usamos tecnologia proprietária para identificar quem está pronto para comprar sua solução agora, e abordamos essas pessoas com a mensagem certa.
                        </p>
</div>
<div className="pt-4 border-t border-white/10">
<div className="grid grid-cols-2 gap-6">
<div className="">
<h4 className="mb-1 font-manrope text-white" style={{}}>Especialistas Nativos</h4>
<p className="text-sm text-neutral-500 font-manrope" style={{}}>SDRs treinados e experientes, sem scripts robóticos.</p>
</div>
<div className="">
<h4 className="mb-1 font-manrope text-white" style={{}}>Tecnologia Multi-Canal</h4>
<p className="text-sm text-neutral-500 font-manrope" style={{}}>Email, LinkedIn e Cold Call integrados.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-50 pt-24 pb-32" id="servicos">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-24">
<span className="uppercase text-sm text-slate-950 tracking-wide font-manrope">Nossas Soluções</span>
<h2 className="md:text-5xl text-4xl font-medium text-slate-950 tracking-tight font-montserrat mt-3 mb-6">O Ecossistema de Vendas NectArr</h2>
<p className="text-xl text-slate-950 font-manrope max-w-2xl mx-auto">Soluções modulares desenhadas para cada estágio da maturidade comercial da sua empresa.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="p-8 rounded-2xl border hover:border-[#d4f64d]/50 transition-all duration-300 group hover:-translate-y-1 bg-neutral-950 border-white/5" style={{}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#d4f64d] transition-colors bg-neutral-950" style={{}}>
<svg className="lucide lucide-target w-6 h-6 text-[#d4f64d] group-hover:text-slate-950" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="text-xl mb-3 font-manrope text-white" style={{}}>Geração de Leads B2B</h3>
<p className="text-sm leading-relaxed mb-6 font-manrope text-[#c1ff72]" style={{}}>
                        Identificamos e enriquecemos listas de empresas que se encaixam perfeitamente no seu ICP. Dados validados em tempo real para garantir entregabilidade máxima.
                    </p>
<ul className="text-sm text-neutral-500 space-y-2 mb-6" style={{}}>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Listas Segmentadas</li>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Enriquecimento de Dados</li>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Validação de Emails</li>
</ul>
</div>

<div className="hover:border-[#d4f64d]/50 transition-all duration-300 group hover:-translate-y-1 bg-neutral-950 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#d4f64d] transition-colors bg-neutral-950" style={{}}>
<svg className="lucide lucide-zap w-6 h-6 text-[#d4f64d] group-hover:text-slate-950" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-xl mb-3 font-manrope text-white" style={{}}>SDR as a Service</h3>
<p className="text-sm leading-relaxed mb-6 font-manrope text-[#c1ff72]" style={{}}>
                        Terceirize a pré-venda com nossos especialistas. Cuidamos de todo o processo de abordagem, qualificação e agendamento, entregando o lead pronto para o seu Closer.
                    </p>
<ul className="text-sm text-neutral-500 space-y-2 mb-6" style={{}}>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> SDRs Dedicados</li>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Cadência Multi-Canal</li>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Gestão de Objeções</li>
</ul>
</div>

<div className="p-8 rounded-2xl border hover:border-[#d4f64d]/50 transition-all duration-300 group hover:-translate-y-1 bg-neutral-950 border-white/5" style={{}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#d4f64d] transition-colors bg-neutral-950" style={{}}>
<svg className="lucide lucide-mail-plus w-6 h-6 text-[#d4f64d] group-hover:text-slate-950" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"></path><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path><path d="M19 16v6"></path><path className="" d="M16 19h6"></path></svg>
</div>
<h3 className="text-xl mb-3 font-manrope text-white" style={{}}>Cold Email Infrastructure</h3>
<p className="text-sm leading-relaxed mb-6 font-manrope text-[#c1ff72]" style={{}}>
                        Configuração técnica completa (DKIM, SPF, DMARC) e aquecimento de domínios para garantir que seus emails cheguem na caixa de entrada principal, não no spam.
                    </p>
<ul className="text-sm text-neutral-500 space-y-2 mb-6" style={{}}>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Setup de Domínios</li>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Copywriting Persuasivo</li>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Testes A/B Constantes</li>
</ul>
</div>

<div className="hover:border-[#d4f64d]/50 transition-all duration-300 group hover:-translate-y-1 border-white/5 border rounded-2xl px-8 py-8 bg-neutral-950">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#d4f64d] transition-colors bg-neutral-950" style={{}}>
<svg className="lucide lucide-linkedin w-6 h-6 text-[#d4f64d] group-hover:text-slate-950" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
<h3 className="text-xl mb-3 font-manrope text-white" style={{}}>LinkedIn Lead Gen</h3>
<p className="text-sm leading-relaxed mb-6 font-manrope text-[#c1ff72]" style={{}}>
                        Transformamos perfis executivos em ímãs de leads. Automação segura de conexões e mensagens diretas para networking de alto nível.
                    </p>
<ul className="text-sm text-neutral-500 space-y-2 mb-6" style={{}}>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Social Selling</li>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Gestão de Perfil</li>
</ul>
</div>

<div className="hover:border-[#d4f64d]/50 transition-all duration-300 group hover:-translate-y-1 bg-neutral-950 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#d4f64d] transition-colors bg-neutral-950" style={{}}>
<svg className="lucide lucide-bot w-6 h-6 text-[#d4f64d] group-hover:text-slate-950" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h3 className="text-xl mb-3 font-manrope text-white" style={{}}>Automação de CRM</h3>
<p className="text-sm leading-relaxed mb-6 font-manrope text-[#c1ff72]" style={{}}>
                        Integramos suas ferramentas de prospecção ao seu CRM (HubSpot, Pipedrive, Salesforce) para que nenhum dado se perca e o follow-up seja automático.
                    </p>
<ul className="text-sm text-neutral-500 space-y-2 mb-6" style={{}}>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Integração via API</li>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Fluxos de Nutrição</li>
</ul>
</div>

<div className="p-8 rounded-2xl border hover:border-[#d4f64d]/50 transition-all duration-300 group hover:-translate-y-1 bg-neutral-950 border-white/5" style={{}}>
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#d4f64d] transition-colors bg-neutral-950" style={{}}>
<svg className="lucide lucide-pie-chart w-6 h-6 text-[#d4f64d] group-hover:text-slate-950" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></path><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path></svg>
</div>
<h3 className="text-xl mb-3 font-manrope text-white" style={{}}>Consultoria de Vendas</h3>
<p className="text-sm leading-relaxed mb-6 font-manrope text-[#c1ff72]" style={{}}>
                        Analisamos seu processo comercial atual, identificamos gargalos e criamos playbooks de vendas escaláveis para seu time interno.
                    </p>
<ul className="text-sm text-neutral-500 space-y-2 mb-6" style={{}}>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Playbooks de Vendas</li>
<li className="flex items-center gap-2 font-manrope" style={{}}><svg className="lucide lucide-check w-3 h-3 text-[#d4f64d]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Treinamento de Time</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5 bg-neutral-950" style={{}}>
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-sm text-neutral-500 mb-8 font-manrope" style={{}}>Confiado por empresas globais e startups em hipercrescimento</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-20 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-xl tracking-tighter font-manrope text-white" style={{}}>SaaSforce</span>
<span className="text-xl tracking-tighter font-manrope text-white" style={{}}>TechFlow</span>
<span className="text-xl tracking-tighter font-manrope text-white" style={{}}>DataScale</span>
<span className="text-xl tracking-tighter font-manrope text-white" style={{}}>VentureCorp</span>
<span className="text-xl tracking-tighter font-manrope text-white" style={{}}>CloudNine</span>
</div>
</div>
</section>

<section className="overflow-hidden bg-neutral-950 pt-24 pb-24 relative">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4f64d]/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-start">
<div className="">
<h2 className="text-4xl md:text-5xl tracking-tight mb-8 font-montserrat font-medium text-white" style={{}}>
                        Por que os Líderes de Vendas escolhem a <span className="text-[#d4f64d] font-montserrat font-medium" style={{}}>NectArr?</span>
</h2>
<p className="leading-relaxed text-lg text-[#c1ff72] font-manrope mb-8 blur-none">
                        Ao contrário de agências genéricas que "atiram para todos os lados", nós operamos com precisão cirúrgica. Combinamos a escala da automação com a empatia da interação humana.
                    </p>
<a className="inline-flex items-center gap-2 hover:underline text-[#d4f64d] font-manrope" href="#agendar" style={{}}>
                        Veja nossos cases de sucesso
                        <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid sm:grid-cols-2 gap-6 gap-x-6 gap-y-6">
<div className="hover:border-[#d4f64d]/50 transition-all duration-300 group hover:-translate-y-1 bg-neutral-950 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<svg className="lucide lucide-database-zap w-8 h-8 text-[#d4f64d] mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<ellipse className="" cx="12" cy="5" rx="9" ry="3"></ellipse>
<path d="M3 5V19A9 3 0 0 0 15 21.84"></path>
<path d="M21 5V8"></path>
<path className="" d="M21 12L18 17H22L19 22"></path>
<path d="M3 12A9 3 0 0 0 14.59 14.87"></path>
</svg>
<h4 className="mb-2 font-manrope text-white" style={{}}>Dados Proprietários</h4>
<p className="text-sm text-neutral-500 font-manrope">Acesso a bases de dados premium não disponíveis publicamente.</p>
</div>
<div className="hover:border-[#d4f64d]/50 transition-all duration-300 group hover:-translate-y-1 bg-neutral-950 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<svg className="lucide lucide-cpu w-8 h-8 text-[#d4f64d] mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<h4 className="mb-2 font-manrope text-white" style={{}}>Infraestrutura Blindada</h4>
<p className="text-neutral-500 text-sm font-manrope" style={{}}>Sistemas anti-spam que garantem 99% de entregabilidade.</p>
</div>
<div className="hover:border-[#d4f64d]/50 transition-all duration-300 group hover:-translate-y-1 bg-neutral-950 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<svg className="lucide lucide-users-2 w-8 h-8 text-[#d4f64d] mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21a8 8 0 0 0-16 0"></path><circle cx="10" cy="8" r="5"></circle><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path></svg>
<h4 className="mb-2 font-manrope text-white" style={{}}>Equipe Especializada</h4>
<p className="text-sm text-neutral-500 font-manrope">Gerentes de conta sênior dedicados ao seu projeto.</p>
</div>
<div className="hover:border-[#d4f64d]/50 transition-all duration-300 group hover:-translate-y-1 bg-neutral-950 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<svg className="lucide lucide-bar-chart-4 w-8 h-8 text-[#d4f64d] mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 17V9"></path><path d="M18 17V5"></path><path className="" d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M8 17v-3"></path></svg>
<h4 className="mb-2 font-manrope text-white" style={{}}>Escalabilidade Rápida</h4>
<p className="text-neutral-500 text-sm font-manrope" style={{}}>Aumente o volume de prospecção com apenas um clique.</p>
</div>
<div className="hover:border-[#d4f64d]/50 transition-all duration-300 group hover:-translate-y-1 bg-neutral-950 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<svg className="lucide lucide-globe-2 w-8 h-8 text-[#d4f64d] mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></svg>
<h4 className="mb-2 font-manrope text-white" style={{}}>Alinhamento Global</h4>
<p className="text-neutral-500 text-sm font-manrope" style={{}}>Atuamos em diversos fusos horários e idiomas.</p>
</div>
<div className="hover:border-[#d4f64d]/50 transition-all duration-300 group hover:-translate-y-1 bg-neutral-950 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<svg className="lucide lucide-refresh-ccw w-8 h-8 text-[#d4f64d] mb-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
<h4 className="mb-2 font-manrope text-white" style={{}}>Otimização Contínua</h4>
<p className="text-neutral-500 text-sm font-manrope" style={{}}>Testes A/B semanais em copy e segmentação.</p>
</div>
</div>
</div>
</div>
</section>

<section className="border-t pt-24 pb-24 bg-neutral-950 border-white/5" id="plataforma" style={{}}>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="md:text-5xl text-3xl font-medium tracking-tight font-montserrat mb-4 text-white" style={{}}>Visibilidade Total do Funil</h2>
<p className="max-w-2xl mx-auto font-manrope text-[#c1ff72]" style={{}}>
                    Chega de planilhas confusas. Com a NectArr, você tem um dashboard transparente para acompanhar cada lead gerado, cada resposta e cada reunião marcada em tempo real.
                </p>
</div>

<div className="relative border rounded-2xl shadow-2xl overflow-hidden max-w-5xl mx-auto border-white/10 bg-neutral-950" style={{}}>

<div className="border-b px-6 py-4 flex items-center justify-between bg-neutral-800/50 border-white/5" style={{}}>
<div className="flex items-center gap-4">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/50" style={{}}></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/50" style={{}}></div>
<div className="w-3 h-3 rounded-full bg-lime-500/50" style={{}}></div>
</div>
<span className="text-xs font-manrope text-[#c1ff72]" style={{}}>nectarr-analytics.exe</span>
</div>
<div className="text-xs text-neutral-500 font-manrope" style={{}}>Live Data ●</div>
</div>

<div className="p-8 grid md:grid-cols-3 gap-6">

<div className="md:col-span-2 space-y-6">
<div className="p-6 rounded-xl border bg-neutral-950 border-white/5" style={{}}>
<div className="flex justify-between items-end mb-4">
<div>
<p className="text-xs text-neutral-500 uppercase font-manrope" style={{}}>Reuniões Qualificadas (Mês)</p>
<p className="text-3xl mt-1 font-montserrat font-medium text-white" style={{}}>42 <span className="text-sm text-[#d4f64d] font-manrope" style={{}}>+12%</span></p>
</div>
<svg className="lucide lucide-bar-chart-3 w-6 h-6 text-slate-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<div className="flex items-end gap-2 h-32 w-full pt-4">
<div className="w-full h-[40%] rounded-t-sm hover:bg-[#d4f64d] transition-colors bg-neutral-800" style={{}}></div>
<div className="w-full h-[60%] rounded-t-sm hover:bg-[#d4f64d] transition-colors bg-neutral-800" style={{}}></div>
<div className="w-full h-[55%] rounded-t-sm hover:bg-[#d4f64d] transition-colors bg-neutral-800" style={{}}></div>
<div className="w-full h-[80%] rounded-t-sm hover:bg-[#d4f64d] transition-colors bg-neutral-800" style={{}}></div>
<div className="w-full h-[70%] rounded-t-sm hover:bg-[#d4f64d] transition-colors bg-neutral-800" style={{}}></div>
<div className="bg-[#d4f64d] w-full h-[95%] rounded-t-sm shadow-[0_0_15px_rgba(212,246,77,0.5)]"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="p-5 rounded-xl border bg-neutral-950 border-white/5" style={{}}>
<p className="text-xs text-neutral-500 font-manrope" style={{}}>Taxa de Abertura</p>
<p className="text-xl font-manrope text-white" style={{}}>68.4%</p>
<div className="w-full h-1 mt-3 rounded-full overflow-hidden bg-neutral-800" style={{}}>
<div className="h-full w-[68%] bg-lime-500" style={{}}></div>
</div>
</div>
<div className="p-5 rounded-xl border bg-neutral-950 border-white/5" style={{}}>
<p className="text-xs text-neutral-500 font-manrope" style={{}}>Respostas Positivas</p>
<p className="text-xl font-manrope text-white" style={{}}>12.1%</p>
<div className="w-full h-1 mt-3 rounded-full overflow-hidden bg-neutral-800" style={{}}>
<div className="h-full w-[12%] bg-lime-500" style={{}}></div>
</div>
</div>
</div>
</div>

<div className="border rounded-xl p-6 bg-neutral-950 border-white/5" style={{}}>
<h4 className="text-sm mb-4 font-manrope text-white" style={{}}>Atividade Recente</h4>
<div className="space-y-4">
<div className="flex gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-[#d4f64d]"></div>
<div>
<p className="text-xs font-manrope text-white" style={{}}>Reunião agendada com <span className="font-manrope" style={{}}>CTO @ BigCorp</span></p>
<p className="text-[10px] text-neutral-500 font-manrope" style={{}}>Há 20 min</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-lime-500" style={{}}></div>
<div>
<p className="text-xs font-manrope text-white" style={{}}>Email respondido por <span className="font-manrope" style={{}}>Diretor de MKT</span></p>
<p className="text-[10px] text-neutral-500 font-manrope" style={{}}>Há 45 min</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-neutral-600" style={{}}></div>
<div>
<p className="text-xs font-manrope text-[#c1ff72]" style={{}}>150 novos leads adicionados</p>
<p className="text-[10px] text-neutral-500 font-manrope" style={{}}>Há 2h</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-1 w-2 h-2 rounded-full bg-lime-500" style={{}}></div>
<div>
<p className="text-xs font-manrope text-white" style={{}}>Conexão LinkedIn aceita</p>
<p className="text-[10px] text-neutral-500 font-manrope" style={{}}>Há 3h</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="px-4 md:px-6 pb-8 pt-0 bg-neutral-950" id="agendar" style={{}}>

<div className="max-w-7xl mx-auto bg-[#d4f64d] rounded-3xl md:rounded-[2.5rem] p-8 md:p-12 lg:p-20 relative overflow-hidden">

<div className="opacity-10 absolute inset-1" style={{backgroundImage: 'radial-gradient(#111e16 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="grid lg:grid-cols-2 gap-10 lg:gap-16 relative z-10 items-center">

<div className="space-y-6 md:space-y-8">
<h2 className="text-3xl md:text-4xl lg:text-5xl leading-tight font-medium text-[#111e16] tracking-tight font-montserrat" style={{}}>
                        Pronto para aumentar seu fluxo de novos clientes?
                    </h2>
<p className="leading-relaxed text-base md:text-lg text-[#111e16]/80 font-manrope" style={{}}>
                        Pare de perseguir leads frios. Deixe a NectArr construir um sistema de vendas que trabalha para você 24/7.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">

<a className="inline-flex hover:bg-[#2d4a35] transition-colors gap-2 items-center justify-center font-manrope bg-[#111e16] rounded-full py-4 px-8 shadow-lg text-white" href="https://wa.me/5511956185419" rel="noopener noreferrer" style={{}} target="_blank">
                            Fale com a NectArr
                            <svg className="lucide lucide-arrow-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<a className="inline-flex hover:bg-[#111e16]/5 transition-colors text-[#111e16] font-manrope bg-transparent border-[#111e16]/20 border rounded-full py-4 px-8 gap-2 items-center justify-center" href="https://cal.com/nectarr" rel="noopener noreferrer" style={{}} target="_blank">
                            Ver Planos
                        </a>
</div>
</div>


<div className="flex flex-col space-y-6 justify-center border-t border-[#111e16]/10 pt-8 lg:pt-0 lg:border-t-0 lg:border-l lg:border-[#111e16]/10 lg:pl-12">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-[#111e16]/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-mail w-6 h-6 text-[#111e16]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<div className="">
<p className="text-sm text-[#111e16] uppercase tracking-wide font-manrope" style={{}}>Comercial</p>
<p className="text-lg md:text-xl text-[#111e16] tracking-tight font-manrope break-all" style={{}}>contato@nectarr.com.br</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-full bg-[#111e16]/10 flex items-center justify-center shrink-0">
<svg className="lucide lucide-map-pin w-6 h-6 text-[#111e16]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="">
<p className="text-sm text-[#111e16] uppercase tracking-wide font-manrope" style={{}}>Escritório</p>
<p className="text-lg md:text-xl text-[#111e16] tracking-tight font-manrope" style={{}}>São José dos Campos, SP - Brasil</p>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500 font-medium" style={{}}>
<div className="flex gap-x-2 gap-y-2 items-center text-white">
<svg className="lucide lucide-codepen fill-[#d4f64d] w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="logos" data-logos="codesee-icon" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(212, 246, 77)', width: '20px', height: '20px'}} viewbox="0 0 256 147" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m98.154 0l11.692 29.846c-17.846 7.077-41.23 23.385-64 43.692c22.77 20.307 46.154 36.308 64 44l-11.385 29.231C69.846 134.462 34.77 107.384 0 73.231l2.086-2.04C36.158 38.01 70.111 12.06 98.154 0m59.692 0C186.46 12.308 221.23 39.077 256 73.23l-2.087 2.041c-34.083 33.19-68.332 59.437-96.375 71.498l-11.384-29.231c17.846-7.692 41.23-23.693 64-44l-1.848-1.637c-22.181-19.545-44.788-35.17-62.152-42.055zM128 49.846c13.424 0 24.308 10.883 24.308 24.308c0 13.424-10.884 24.307-24.308 24.307c-13.425 0-24.308-10.883-24.308-24.307c0-13.425 10.883-24.308 24.308-24.308"></path></svg>
<span className="tracking-tight font-manrope" style={{}}>NectArr</span>
</div>
<div className="flex gap-6">
<a className="transition-colors font-manrope hover:text-white" href="#" style={{}}>Termos</a>
<a className="transition-colors font-manrope hover:text-white" href="#" style={{}}>Privacidade</a>
<a className="transition-colors font-manrope hover:text-white" href="#" style={{}}>LinkedIn</a>
</div>
<p className="font-manrope" style={{}}>© 2024 NectArr Growth. Todos os direitos reservados.</p>
</div>
</footer>


    </>
  );
}
