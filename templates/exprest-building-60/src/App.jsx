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



    window.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();
      document.getElementById('year').textContent = new Date().getFullYear();
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
      
<div className="min-h-screen">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">

<header className="flex items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center shadow-sm ring-1 ring-black/10">
<svg className="lucide lucide-building-2 h-4 w-4" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<span className="text-lg tracking-tight font-medium text-neutral-900">Exprest</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition-colors" href="http://exprest.com.br/">Quem Somos</a>
<div className="relative group">
<a className="hover:text-neutral-900 transition-colors inline-flex items-center gap-1" href="http://exprest.com.br/solucoes/">
              Soluções
              <svg className="lucide lucide-chevron-down h-3.5 w-3.5" data-lucide="chevron-down" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
<div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all absolute left-0 mt-3 w-56 rounded-xl bg-white shadow-lg ring-1 ring-black/10 p-2">
<a className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="http://exprest.com.br/solucoes/cabeamento/">Cabeamento</a>
<a className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="http://exprest.com.br/solucoes/automacao/">Automação</a>
<a className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="http://exprest.com.br/solucoes/deteccao/">Detecção</a>
<a className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="http://exprest.com.br/solucoes/catv/">CATV</a>
<a className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="http://exprest.com.br/solucoes/cftv/">CFTV</a>
<a className="block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-neutral-50" href="http://exprest.com.br/solucoes/sonorizacao/">Sonorização</a>
</div>
</div>
<a className="hover:text-neutral-900 transition-colors" href="http://exprest.com.br/integradores/">Integradores</a>
<a className="hover:text-neutral-900 transition-colors" href="http://exprest.com.br/obras/">Obras</a>
<a className="hover:text-neutral-900 transition-colors" href="http://exprest.com.br/dicas/">Dicas</a>
<a className="hover:text-neutral-900 transition-colors" href="http://exprest.com.br/clientes/">Clientes</a>
<a className="hover:text-neutral-900 transition-colors" href="http://exprest.com.br/contato/">Contato</a>
</nav>
<div className="flex items-center gap-3">
<button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-black/10 bg-white text-neutral-700">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
<a className="hidden md:inline-flex items-center justify-center rounded-xl text-white px-4 py-2.5 text-sm font-medium shadow-sm hover:brightness-110 transition-colors" href="http://exprest.com.br/contato/" style={{backgroundColor: '#0166b6'}}>
            Fale conosco
            <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</header>

<section className="mt-6">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-black/10 bg-neutral-900">

<div className="absolute inset-0">
<img alt="Imagem de destaque Exprest" className="h-full w-full object-cover opacity-70" src="https://images.unsplash.com/photo-1542361345-89e58247f2d5?w=2560&amp;q=80" style={{}}/>
<div className="absolute inset-0" style={{background: 'linear-gradient(135deg, rgba(0,0,0,0.7), rgba(0,0,0,0.35))'}}></div>
</div>

<div className="relative z-10 p-5 sm:p-8 md:p-12 lg:p-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-7">
<h1 className="text-white tracking-tight text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
        Solução em tecnologia predial
      </h1>
<p className="mt-5 text-neutral-200 text-base sm:text-lg max-w-xl">
        Sistemas inteligentes, integração e automação para edifícios mais eficientes, seguros e fáceis de operar.
      </p>

<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center" style={{color: '#0166b6'}}>
<svg className="lucide lucide-sliders-horizontal h-4 w-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
</div>
<div>
<p className="text-white font-medium text-sm">Soluções sob medida</p>
<p className="text-neutral-300 text-xs">Projetos customizados por aplicação</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center" style={{color: '#0166b6'}}>
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-white font-medium text-sm">Segurança e confiabilidade</p>
<p className="text-neutral-300 text-xs">Normas, redundância e qualidade</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center" style={{color: '#0166b6'}}>
<svg className="lucide lucide-git-merge h-4 w-4" data-lucide="git-merge" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path></svg>
</div>
<div>
<p className="text-white font-medium text-sm">Integração e automação</p>
<p className="text-neutral-300 text-xs">Sistemas de controle centralizado</p>
</div>
</div>
</div>

<div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
<a className="inline-flex items-center justify-center rounded-xl text-white px-5 py-3 text-sm font-medium shadow-md hover:brightness-110 transition-colors" href="http://exprest.com.br/contato/" style={{backgroundColor: '#0166b6'}}>
          Solicitar proposta
          <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors" href="http://exprest.com.br/solucoes/">
          Ver soluções
          <svg className="lucide lucide-layers h-4 w-4" data-lucide="layers" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</a>
</div>
</div>

<div className="lg:col-span-5">
<div className="lg:ml-auto w-full max-w-md lg:max-w-sm rounded-2xl bg-white/85 backdrop-blur-md ring-1 ring-black/10 shadow-lg p-4 sm:p-5">
<div className="flex items-start justify-between">
<div>
<p className="text-neutral-900 font-medium tracking-tight">Fale com um especialista</p>
<p className="text-neutral-500 text-xs mt-0.5">Retorno em até 1 dia útil</p>
</div>
<span className="inline-flex items-center gap-2 text-[11px] text-neutral-600">
<svg className="lucide lucide-shield-check h-3.5 w-3.5" data-lucide="shield-check" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      Dados protegidos
                    </span>
</div>
<form className="mt-3">
<div className="flex gap-2">
<div className="relative flex-1">
<svg className="lucide lucide-user h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="user" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" placeholder="Seu nome" type="text"/>
</div>
<div className="relative flex-1">
<svg className="lucide lucide-mail h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" placeholder="voce@empresa.com" type="email"/>
</div>
</div>
<button className="mt-3 w-full rounded-xl text-white px-4 py-2.5 text-sm font-medium hover:brightness-110 transition-colors" style={{backgroundColor: '#0166b6'}} type="submit">
                      Enviar
                    </button>
</form>
</div>
</div>
</div>

<div className="mt-8 sm:mt-12 flex items-end justify-between">

<a className="group inline-flex items-center gap-3" href="http://exprest.com.br/clientes/">
<div className="relative w-40 sm:w-48 aspect-[16/10] rounded-xl overflow-hidden ring-2 shadow-lg" style={{borderColor: '#0166b6'}}>
<div className="absolute inset-0">
<img alt="Clientes Exprest" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=2560&amp;q=80"/>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-10 w-10 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center group-hover:scale-105 transition-transform">
<svg className="lucide lucide-play h-5 w-5 translate-x-0.5" data-lucide="play" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
</div>
<div className="hidden sm:flex flex-col">
<span className="text-white/90 text-sm font-medium">Apresentação institucional</span>
<span className="text-neutral-300 text-xs">Conheça nossos cases</span>
</div>
</a>

<div className="hidden md:flex items-center gap-3">
<div className="text-xs text-neutral-300">
        Atendimento em todo o Brasil
      </div>
<a className="inline-flex items-center justify-center rounded-xl text-white px-4 py-2.5 text-sm font-medium shadow-md hover:brightness-110 transition-colors" href="http://exprest.com.br/clientes/" style={{backgroundColor: '#0166b6'}}>
        Nossos clientes
        <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=2560&amp;q=80"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="mt-8">
<div className="text-center">
<p className="text-neutral-600 text-xs">Nossos diferenciais</p>
<h2 className="mt-1 text-4xl font-semibold tracking-tight text-neutral-900">Construído para eficiência e segurança</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
<div className="group rounded-2xl bg-white ring-1 ring-black/10 p-5">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400">{ 01 }</span>
</div>
<div className="mt-6">
<div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#c8c7cc', color: '#0166b6'}}>
<svg className="lucide lucide-cpu h-5 w-5" data-lucide="cpu" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<p className="mt-4 text-neutral-900 font-medium tracking-tight">Automação inteligente</p>
<p className="text-neutral-600 text-sm">Processos conectados e previsíveis</p>
</div>
</div>
<div className="group rounded-2xl bg-white ring-1 ring-black/10 p-5">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400">{ 02 }</span>
</div>
<div className="mt-6">
<div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#c8c7cc', color: '#0166b6'}}>
<svg className="lucide lucide-cable h-5 w-5" data-lucide="cable" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"></path><path d="M17 21v-2"></path><path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"></path><path d="M21 21v-2"></path><path d="M3 5V3"></path><path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"></path><path d="M7 5V3"></path></svg>
</div>
<p className="mt-4 text-neutral-900 font-medium tracking-tight">Cabeamento estruturado</p>
<p className="text-neutral-600 text-sm">Infra ágil, segura e escalável</p>
</div>
</div>
<div className="group rounded-2xl bg-white ring-1 ring-black/10 p-5">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400">{ 03 }</span>
</div>
<div className="mt-6">
<div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#c8c7cc', color: '#0166b6'}}>
<svg className="lucide lucide-shield h-5 w-5" data-lucide="shield" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<p className="mt-4 text-neutral-900 font-medium tracking-tight">Segurança integrada</p>
<p className="text-neutral-600 text-sm">CFTV, detecção e alarmes</p>
</div>
</div>
<div className="group rounded-2xl bg-white ring-1 ring-black/10 p-5">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400">{ 04 }</span>
</div>
<div className="mt-6">
<div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#c8c7cc', color: '#0166b6'}}>
<svg className="lucide lucide-gauge h-5 w-5" data-lucide="gauge" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<p className="mt-4 text-neutral-900 font-medium tracking-tight">Otimização operacional</p>
<p className="text-neutral-600 text-sm">Monitoramento e métricas</p>
</div>
</div>
<div className="group rounded-2xl bg-white ring-1 ring-black/10 p-5">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400">{ 05 }</span>
</div>
<div className="mt-6">
<div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#c8c7cc', color: '#0166b6'}}>
<svg className="lucide lucide-wifi h-5 w-5" data-lucide="wifi" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
<p className="mt-4 text-neutral-900 font-medium tracking-tight">Conectividade</p>
<p className="text-neutral-600 text-sm">Wi‑Fi e redes de alta disponibilidade</p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl ring-1 p-5 text-white" style={{background: 'linear-gradient(135deg, #0166b6, #2b8dd9)', borderColor: '#2b8dd9'}}>
<div className="relative flex items-center justify-between">
<span className="text-[11px] text-white/80">{ 06 }</span>
</div>
<div className="relative mt-6">
<p className="text-white font-medium tracking-tight">Integração de sistemas</p>
<p className="text-white/90 text-sm">Controle predial centralizado (BMS)</p>
</div>
<a className="relative mt-8 inline-flex h-9 w-9 rounded-full bg-white text-neutral-900 items-center justify-center shadow-sm hover:text-sky-700 transition-colors" href="http://exprest.com.br/solucoes/automacao/">
<svg className="lucide lucide-arrow-up-right h-4 w-4" data-lucide="arrow-up-right" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="group rounded-2xl bg-white ring-1 ring-black/10 p-5">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400">{ 07 }</span>
</div>
<div className="mt-6">
<div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#c8c7cc', color: '#0166b6'}}>
<svg className="lucide lucide-users h-5 w-5" data-lucide="users" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<p className="mt-4 text-neutral-900 font-medium tracking-tight">Equipe técnica</p>
<p className="text-neutral-600 text-sm">Engenheiros e especialistas certificados</p>
</div>
</div>
<div className="group rounded-2xl bg-white ring-1 ring-black/10 p-5">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400">{ 08 }</span>
</div>
<div className="mt-6">
<div className="h-10 w-10 rounded-lg flex items-center justify-center" style={{backgroundColor: '#c8c7cc', color: '#0166b6'}}>
<svg className="lucide lucide-wrench h-5 w-5" data-lucide="wrench" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<p className="mt-4 text-neutral-900 font-medium tracking-tight">Suporte contínuo</p>
<p className="text-neutral-600 text-sm">Implantação, treinamento e manutenção</p>
</div>
</div>
</div>
</section>

<section className="mt-10" id="quem-somos">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-black/10 bg-white">
<div className="relative z-10 p-5 sm:p-8 md:p-12">
<div className="flex items-start justify-between">
<div className="flex items-center gap-2 text-neutral-700 text-xs">
<svg className="lucide lucide-info h-3.5 w-3.5" data-lucide="info" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span>Quem Somos</span>
</div>
</div>
<div className="mt-4 max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-neutral-900">Sobre a Exprest</h2>
<div className="mt-4 space-y-4 text-neutral-800 leading-relaxed">
<p className="">A <strong>Exprest</strong> é uma empresa especializada em tecnologia predial, fornecendo e executando soluções inteligentes e sob medida para otimizar a gestão dos recursos tecnológicos e equipamentos dentro de instalações industriais, comerciais e residenciais.</p>
<p className="">Oferece uma gama completa de soluções em sistemas de controle predial que agrega praticidade e segurança ao gerenciamento dos mais diversos mecanismos dentro de um empreendimento, seja através de soluções pontuais (Detecção e Alarmes de Incêndio, Cabeamento Estruturado, Sonorização de Ambientes, CATV, CFTV) ou da integração de todos esses recursos e muitos outros em uma central de controle integrado com automação.</p>
<p>Tamanha amplitude de serviços é o resultado da sinergia dos nossos engenheiros, especialistas e fornecedores e o sucesso de nossas parcerias é a maior prova da qualidade e eficiência de nossos produtos.</p>
<p className="">Confie o seu projeto à experiência de quem realmente entende de tecnologia predial: torne-se um parceiro da <strong>Exprest</strong>!</p>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full text-neutral-900 text-xs px-2.5 py-1 ring-1 ring-black/10" style={{backgroundColor: '#c8c7cc'}}>Tecnologia Predial</span>
<span className="inline-flex items-center rounded-full text-neutral-900 text-xs px-2.5 py-1 ring-1 ring-black/10" style={{backgroundColor: '#c8c7cc'}}>Automação</span>
<span className="inline-flex items-center rounded-full text-neutral-900 text-xs px-2.5 py-1 ring-1 ring-black/10" style={{backgroundColor: '#c8c7cc'}}>Segurança</span>
<a className="inline-flex items-center gap-2 rounded-full text-white text-xs px-3 py-1.5 hover:brightness-110" href="http://exprest.com.br/solucoes/" style={{backgroundColor: '#0166b6'}}>
                  Ver portfólio
                  <svg className="lucide lucide-arrow-right h-3.5 w-3.5" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="mt-10" id="solucoes">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-black/10 bg-neutral-900">

<div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0.7), rgba(1,102,182,0.35))'}}></div>

<div className="relative z-10 p-5 sm:p-8 md:p-12">

<div className="flex items-start justify-between">
<div className="flex items-center gap-2 text-white/80 text-xs">
<svg className="lucide lucide-sparkles h-3.5 w-3.5" data-lucide="sparkles" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>O que fazemos</span>
</div>
<div className="flex items-baseline gap-2">
<h2 className="text-white tracking-tight text-5xl sm:text-6xl font-semibold leading-[1.05]">Soluções.</h2>
</div>
</div>

<div className="mt-8 rounded-2xl bg-white/5 ring-1 ring-white/10 overflow-hidden">

<details className="group open:bg-white/5">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px]">(001)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight">Cabeamento estruturado</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
<div className="lg:col-span-7 flex items-start gap-4">
<div className="shrink-0 h-14 w-20 rounded-xl overflow-hidden ring-1 ring-white/20 bg-white/10"></div>
<div>
<h3 className="text-white font-medium tracking-tight">Infra confiável e escalável</h3>
<p className="text-neutral-300 text-sm mt-1">Projetos, certificação, OTDR e documentação para redes de dados e voz.</p>
</div>
</div>
<div className="lg:col-span-5">
<div className="flex items-center justify-between">
<p className="text-white/80 text-xs">Inclui</p>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<span className="inline-flex items-center rounded-full text-neutral-900 text-xs px-2.5 py-1" style={{backgroundColor: '#c8c7cc'}}>UTP/FTP</span>
<span className="inline-flex items-center rounded-full text-neutral-900 text-xs px-2.5 py-1" style={{backgroundColor: '#c8c7cc'}}>Fibra</span>
<span className="inline-flex items-center rounded-full text-neutral-900 text-xs px-2.5 py-1" style={{backgroundColor: '#c8c7cc'}}>Racks</span>
<span className="inline-flex items-center rounded-full text-neutral-900 text-xs px-2.5 py-1" style={{backgroundColor: '#c8c7cc'}}>Certificação</span>
<a className="inline-flex items-center rounded-full text-white text-xs px-3 py-1.5 hover:brightness-110" href="http://exprest.com.br/solucoes/cabeamento/" style={{backgroundColor: '#0166b6'}}>Saiba mais</a>
</div>
</div>
</div>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px]">(002)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight">Automação e BMS</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-3xl">Integração de subsistemas (HVAC, iluminação, acesso) com controle centralizado, dashboards e alarmística.</p>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-b border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px]">(003)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight">Detecção e Alarmes</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-3xl">Sistemas de detecção, sinalização e evacuação, com redundância e conformidade às normas.</p>
</div>
</details>

<details className="group">
<summary className="list-none">
<div className="flex items-center gap-4 justify-between border-t border-white/10 p-4 sm:p-5">
<div className="text-white/50 text-[11px]">(004)</div>
<div className="flex-1 min-w-0">
<p className="text-white font-medium tracking-tight">CATV, CFTV e Sonorização</p>
</div>
<div className="shrink-0 h-8 w-8 rounded-full bg-white/10 ring-1 ring-white/15 flex items-center justify-center text-white">
<svg className="lucide lucide-plus h-4 w-4 group-open:hidden" data-lucide="plus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<svg className="lucide lucide-minus h-4 w-4 hidden group-open:block" data-lucide="minus" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</div>
</div>
</summary>
<div className="p-4 sm:p-6">
<p className="text-neutral-300 text-sm max-w-3xl">Distribuição de sinal, videomonitoramento, sonorização de ambientes e integração com controle predial.</p>
</div>
</details>
</div>
</div>
</div>
</section>

<section className="mt-10" id="contato">
<div className="relative overflow-hidden rounded-3xl ring-1 ring-black/10" style={{background: 'linear-gradient(135deg, #0b0b0b 0%, #1a1a1a 40%, rgba(1,102,182,0.35) 100%)'}}>

<div className="relative z-10 p-5 sm:p-8 md:p-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-5">
<div className="rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/10 shadow-lg p-4 sm:p-5">
<div className="flex items-center justify-between">
<div>
<p className="text-[11px] text-neutral-500">Exprest — Contato</p>
<h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Tem um projeto?</h3>
</div>
<div className="h-9 w-9 rounded-lg text-white flex items-center justify-center" style={{backgroundColor: '#0166b6'}}>
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
</div>
<form action="#" className="mt-4 space-y-3" method="POST">
<div>
<label className="block text-xs text-neutral-600" htmlFor="ct-name">Seu nome<span className="text-neutral-400"> *</span></label>
<input className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="ct-name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-600" htmlFor="ct-email">E‑mail<span className="text-neutral-400"> *</span></label>
<div className="relative mt-1">
<svg className="lucide lucide-mail h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="ct-email" name="email" placeholder="voce@empresa.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs text-neutral-600" htmlFor="ct-msg">Mensagem</label>
<textarea className="mt-1 w-full resize-y pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white placeholder:text-neutral-400" id="ct-msg" name="message" placeholder="Conte sobre sua necessidade" rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-xl text-white px-4 py-3 text-sm font-medium hover:brightness-110 transition-colors" style={{backgroundColor: '#0166b6'}} type="submit">
                      Enviar mensagem
                      <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[11px] text-neutral-500">Ao enviar, você concorda com nossos Termos e Política de Privacidade.</p>
</form>
</div>
</div>

<div className="lg:col-span-7">
<h2 className="text-white tracking-tight text-5xl sm:text-6xl font-semibold leading-[1.05]">Vamos conversar.</h2>
<p className="sm:text-lg max-w-2xl text-base text-neutral-200 mt-4">
                  Suporte, integrações e projetos sob medida para o seu empreendimento. Retornamos rapidamente com próximos passos claros.
                </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center" style={{color: '#c8c7cc'}}>
<svg className="lucide lucide-clock-3 h-4 w-4" data-lucide="clock-3" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-white font-medium text-sm">Agilidade</p>
<p className="text-neutral-300 text-xs">Resposta em até 1 dia útil.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center" style={{color: '#c8c7cc'}}>
<svg className="lucide lucide-route h-4 w-4" data-lucide="route" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
</div>
<div>
<p className="text-white font-medium text-sm">Próximos passos claros</p>
<p className="text-neutral-300 text-xs">Plano objetivo e cronograma.</p>
</div>
</div>
</div>

<div className="mt-7">
<div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-black/10 shadow-lg p-3">
<div className="h-12 w-12 rounded-xl bg-neutral-200"></div>
<div className="min-w-0">
<p className="text-[11px] text-neutral-500 leading-none">Atendimento</p>
<p className="text-neutral-900 font-medium tracking-tight truncate">Equipe Exprest</p>
</div>
<a className="ml-1 inline-flex items-center gap-2 rounded-xl text-white px-3 py-2 text-xs font-medium hover:brightness-110 transition-colors" href="http://exprest.com.br/contato/" style={{backgroundColor: '#0166b6'}}>
                      Falar agora
                      <svg className="lucide lucide-message-circle h-3.5 w-3.5" data-lucide="message-circle" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="mt-10">
<div className="rounded-3xl ring-1 ring-black/10 bg-white">
<div className="px-5 sm:px-8 md:px-12 py-10">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div>
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-xl text-white flex items-center justify-center" style={{backgroundColor: '#0166b6'}}>
<svg className="lucide lucide-building-2 h-4 w-4" data-lucide="building-2" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<span className="text-lg tracking-tight font-medium text-neutral-900">Exprest</span>
</div>
<p className="mt-3 text-sm text-neutral-600">Soluções em tecnologia predial, integração e automação para empreendimentos de qualquer porte.</p>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-neutral-900">Contato</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<a className="hover:text-neutral-900" href="mailto:contato@exprest.com.br">contato@exprest.com.br</a>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-phone h-4 w-4" data-lucide="phone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<a className="hover:text-neutral-900" href="tel:+551100000000">+55 (11) 0000‑0000</a>
</li>
<li className="flex items-center gap-2">
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>Av. Exemplo, 123 — São Paulo, SP</span>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-neutral-900">Navegação</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li><a className="hover:text-neutral-900" href="http://exprest.com.br/">Quem Somos</a></li>
<li><a className="hover:text-neutral-900" href="http://exprest.com.br/solucoes/">Soluções</a></li>
<li><a className="hover:text-neutral-900" href="http://exprest.com.br/integradores/">Integradores</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium tracking-tight text-neutral-900">Soluções</h4>
<ul className="mt-3 space-y-2 text-sm text-neutral-700">
<li><a className="hover:text-neutral-900" href="http://exprest.com.br/solucoes/cabeamento/">Cabeamento</a></li>
<li><a className="hover:text-neutral-900" href="http://exprest.com.br/solucoes/automacao/">Automação</a></li>
<li><a className="hover:text-neutral-900" href="http://exprest.com.br/solucoes/deteccao/">Detecção</a></li>
</ul>
</div>
</div>
<div className="mt-8 border-t border-neutral-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-500">© <span id="year">2025</span> Exprest. Todos os direitos reservados.</p>
<div className="flex items-center gap-4 text-xs text-neutral-500">
<a className="hover:text-neutral-700" href="#">Política de Privacidade</a>
<a className="hover:text-neutral-700" href="#">Termos de Uso</a>
</div>
</div>
</div>
</div>
</footer>
</div>
</div>




    </>
  );
}
