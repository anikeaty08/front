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
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        document.getElementById('year').textContent = new Date().getFullYear();

        const toggle = document.getElementById('mobileToggle');
        const menu = document.getElementById('mobileMenu');
        toggle?.addEventListener('click', () => {
          const isHidden = menu.classList.contains('hidden');
          menu.classList.toggle('hidden', !isHidden);
          toggle.innerHTML = isHidden ? '<svg data-lucide="x" class="h-5 w-5"></svg>' : '<svg data-lucide="menu" class="h-5 w-5"></svg>';
          if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      
<div className="min-h-screen">

<div className="text-neutral-800 bg-[#c8c7cc]">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
</div>
</div>

<header className="bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 sticky top-0 z-40 border-b border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="h-16 flex items-center justify-between">

<a className="flex items-center gap-3" href="/">
<img alt="HS Industrial Technologies" className="w-auto h-10 object-contain" src="https://i.ibb.co/hxhwWXj2/image-3.png?w=800&amp;q=80"/>
</a>

<nav className="hidden lg:flex items-center gap-1 text-sm">
<a className="font-medium text-white tracking-tight bg-[#0166b6] ring-[#0166b6]/80 ring-1 rounded-lg pt-2 pr-3 pb-2 pl-3" href="/">HOME</a>
<a className="px-3 py-2 rounded-lg font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100" href="/quem-somos">EMPRESA</a>
<a className="px-3 py-2 rounded-lg font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100" href="/clientes">CLIENTES</a>
<a className="px-3 py-2 rounded-lg font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100" href="/fotos">SERVIÇOS</a>
<a className="px-3 py-2 rounded-lg font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100" href="/videos">VÍDEOS</a>
<a className="px-3 py-2 rounded-lg font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100" href="/trabalhe-conosco">TRABALHE CONOSCO</a>
<a className="hover:text-neutral-900 hover:bg-neutral-100 font-medium text-neutral-700 rounded-lg pt-2 pr-3 pb-2 pl-3" href="/contato">CONTATO</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#0166b6] text-white px-3.5 py-2 text-sm font-medium hover:bg-[#015aa0] transition-colors" href="#orcamento">
                Solicitar orçamento
                <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<button aria-label="Abrir menu" className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg ring-1 ring-neutral-300 bg-white text-neutral-700" id="mobileToggle">
<svg className="lucide lucide-menu h-5 w-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="lg:hidden hidden border-t border-neutral-200" id="mobileMenu">
<nav className="px-4 py-3 grid gap-1 text-sm">
<a className="px-3 py-2 rounded-lg font-medium tracking-tight bg-[#0166b6] text-white ring-1 ring-[#0166b6]/80" href="/">NOVO LAYOUT</a>
<a className="px-3 py-2 rounded-lg font-medium text-neutral-700 hover:bg-neutral-100" href="/quem-somos">EMPRESA</a>
<a className="px-3 py-2 rounded-lg font-medium text-neutral-700 hover:bg-neutral-100" href="/clientes">CLIENTES</a>
<a className="px-3 py-2 rounded-lg font-medium text-neutral-700 hover:bg-neutral-100" href="/fotos">SERVIÇOS</a>
<a className="px-3 py-2 rounded-lg font-medium text-neutral-700 hover:bg-neutral-100" href="/videos">VÍDEOS</a>
<a className="px-3 py-2 rounded-lg font-medium text-neutral-700 hover:bg-neutral-100" href="/trabalhe-conosco">TRABALHE CONOSCO</a>
<a className="px-3 py-2 rounded-lg font-medium text-neutral-700 hover:bg-neutral-100" href="/contato">CONTATO</a>
</nav>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-[#0166b6] via-[#0166b6]/80 to-[#0166b6]/60"></div>
<div className="absolute inset-0 opacity-[0.07]">
<div className="w-full h-full" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '18px 18px'}}></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7">
<h1 className="text-white tracking-tight text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05]">
                Usinagem de precisão e soluções industriais
              </h1>
<p className="mt-4 text-white/90 text-base sm:text-lg max-w-2xl">
                Do protótipo à série, fabricamos sob desenho com controle dimensional e compromisso com prazos. Projetos sob medida, atendimento próximo e qualidade consistente.
              </p>
<div className="mt-7 flex flex-col sm:flex-row sm:items-center gap-3">
<a className="inline-flex items-center justify-center rounded-xl bg-white text-[#0166b6] px-5 py-3 text-sm font-medium shadow-sm hover:bg-neutral-100 transition-colors" href="#orcamento">
                  Solicitar orçamento
                  <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors" href="/fotos">
                  Ver serviços
                  <svg className="lucide lucide-info h-4 w-4" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
</a>
</div>

<div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-white">
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<p className="text-white font-medium text-sm">Qualidade certificada</p>
<p className="text-white/80 text-xs">Rigor em cada etapa</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-white">
<svg className="lucide lucide-timer h-4 w-4" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
</div>
<div>
<p className="text-white font-medium text-sm">Compromisso com prazos</p>
<p className="text-white/80 text-xs">Entrega confiável</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-white">
<svg className="lucide lucide-handshake h-4 w-4" data-lucide="handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17 2 2a1 1 0 1 0 3-3"></path><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path><path d="m21 3 1 11h-2"></path><path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path><path d="M3 4h8"></path></svg>
</div>
<div>
<p className="text-white font-medium text-sm">Parceria transparente</p>
<p className="text-white/80 text-xs">Atendimento próximo</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5">
<div className="lg:ml-auto w-full max-w-md lg:max-w-sm">
<div className="rounded-2xl bg-white/90 backdrop-blur ring-1 ring-white/40 shadow-lg p-4 sm:p-5">
<p className="text-neutral-900 font-medium tracking-tight">Centro de usinagem em operação</p>
<p className="text-neutral-500 text-xs">Imagem ilustrativa do processo</p>
<div className="mt-3 aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#c8c7cc] bg-white/70">
<img alt="Centro de usinagem CNC em operação" className="w-full h-full object-cover cursor-pointer" loading="lazy" onclick="window.location.href='https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?w=800&amp;q=80'" role="button" src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=800&amp;q=80"/>
</div>

<form className="mt-4 space-y-3" id="orcamento">
<div className="relative">
<svg className="lucide lucide-user h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-neutral-300 focus:ring-2 focus:ring-[#0166b6] outline-none bg-white placeholder:text-neutral-400" placeholder="Seu nome" type="text"/>
</div>
<div className="relative">
<svg className="lucide lucide-mail h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-neutral-300 focus:ring-2 focus:ring-[#0166b6] outline-none bg-white placeholder:text-neutral-400" placeholder="E-mail" type="email"/>
</div>
<div className="relative">
<svg className="lucide lucide-phone h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-neutral-300 focus:ring-2 focus:ring-[#0166b6] outline-none bg-white placeholder:text-neutral-400" placeholder="Telefone/WhatsApp" type="tel"/>
</div>
<button className="w-full inline-flex items-center justify-center rounded-xl bg-[#0166b6] text-white px-4 py-2.5 text-sm font-medium hover:bg-[#015aa0] transition-colors" type="button">
                      Enviar solicitação
                      <svg className="lucide lucide-send h-4 w-4 ml-2" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
<p className="text-[11px] text-neutral-500">Responderemos em até 1 dia útil.</p>
</form>
</div>
</div>
</div>
</div>

<div className="mt-8 sm:mt-10 flex items-center gap-3 text-white/90 text-xs">
<svg className="lucide lucide-badge-check h-4 w-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span>Atendimento em todo o Brasil • Projetos sob medida</span>
</div>
</div>
</section>

<section className="py-12 sm:py-16" id="quem-somos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-7">
<p className="text-[#0166b6] text-xs">Sobre</p>
<h2 className="mt-1 text-4xl font-semibold tracking-tight">Quem somos</h2>
<p className="mt-4 text-neutral-700 sm:text-lg max-w-2xl">
                Especialistas em usinagem sob desenho, entregamos peças e conjuntos com repetibilidade, precisão e prazos competitivos. Valorizamos transparência, ética e relacionamento de longo prazo.
              </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4">
<div className="h-9 w-9 rounded-lg bg-[#0166b6]/10 text-[#0166b6] flex items-center justify-center">
<svg className="lucide lucide-factory h-4 w-4" data-lucide="factory" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 16h.01"></path><path d="M16 16h.01"></path><path d="M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path><path d="M8 16h.01"></path></svg>
</div>
<p className="mt-3 font-medium">Infraestrutura</p>
<p className="text-sm text-neutral-600">CNC, metrologia e processos parceiros homologados.</p>
</div>
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4">
<div className="h-9 w-9 rounded-lg bg-[#0166b6]/10 text-[#0166b6] flex items-center justify-center">
<svg className="lucide lucide-ruler h-4 w-4" data-lucide="ruler" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"></path><path d="m14.5 12.5 2-2"></path><path d="m11.5 9.5 2-2"></path><path d="m8.5 6.5 2-2"></path><path d="m17.5 15.5 2-2"></path></svg>
</div>
<p className="mt-3 font-medium">Precisão</p>
<p className="text-sm text-neutral-600">Tolerâncias conforme projeto e relatórios sob demanda.</p>
</div>
<div className="rounded-xl bg-white ring-1 ring-neutral-200 p-4">
<div className="h-9 w-9 rounded-lg bg-[#0166b6]/10 text-[#0166b6] flex items-center justify-center">
<svg className="lucide lucide-truck h-4 w-4" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<p className="mt-3 font-medium">Agilidade</p>
<p className="text-sm text-neutral-600">Prazos realistas, coleta/entrega e comunicação clara.</p>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="lg:ml-auto w-full max-w-md lg:max-w-sm rounded-2xl bg-white ring-1 ring-neutral-200 p-4 sm:p-5">
<p className="text-neutral-900 font-medium tracking-tight">Imagem institucional</p>
<div className="mt-3 aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#c8c7cc] bg-neutral-50">
<img alt="Ambiente industrial e oficina mecânica" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1578776349090-de61da00ff1a?w=800&amp;q=80"/>
</div>
<ul className="mt-4 text-sm text-neutral-600 space-y-1.5">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-[#0166b6]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Política de qualidade e segurança</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-[#0166b6]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Equipe técnica especializada</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-[#0166b6]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Parcerias de longo prazo</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-gradient-to-b from-white to-neutral-50" id="servicos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center">
<p className="text-[#0166b6] text-xs">O que fazemos</p>
<h2 className="mt-1 text-4xl font-semibold tracking-tight">Serviços</h2>
<p className="mt-3 text-neutral-700 max-w-2xl mx-auto">
              Do protótipo à produção seriada, conforme desenho, material e tratamento especificados.
            </p>
</div>
<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="group rounded-2xl bg-white ring-1 ring-neutral-200 p-5">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400">01</span>
</div>
<div className="mt-5">
<div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#c8c7cc] bg-neutral-50">
<img alt="Fresamento CNC de alta precisão" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1716643863806-989dd76ae093?w=800&amp;q=80"/>
</div>
<p className="mt-4 font-medium tracking-tight">Usinagem CNC</p>
<p className="text-sm text-neutral-600">Fresamento e torneamento com repetibilidade e tolerâncias estreitas.</p>
</div>
</div>

<div className="group rounded-2xl bg-white ring-1 ring-neutral-200 p-5">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400">02</span>
</div>
<div className="mt-5">
<div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#c8c7cc] bg-neutral-50">
<img alt="Torneamento e fresamento convencional" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1716191300020-b52dec5b70a8?w=800&amp;q=80"/>
</div>
<p className="mt-4 font-medium tracking-tight">Tornearia e Fresamento</p>
<p className="text-sm text-neutral-600">Peças unitárias, protótipos e pequenos lotes com rapidez.</p>
</div>
</div>

<div className="group rounded-2xl bg-white ring-1 ring-neutral-200 p-5">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400">03</span>
</div>
<div className="mt-5">
<div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#c8c7cc] bg-neutral-50">
<img alt="Manutenção industrial em componentes" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1717386255767-52643970d483?w=800&amp;q=80"/>
</div>
<p className="mt-4 font-medium tracking-tight">Manutenção Industrial</p>
<p className="text-sm text-neutral-600">Recuperação de eixos, sedes, buchas, roscas e ajustes.</p>
</div>
</div>

<div className="group rounded-2xl bg-white ring-1 ring-neutral-200 p-5">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400">04</span>
</div>
<div className="mt-5">
<div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#c8c7cc] bg-neutral-50">
<img alt="Projetos, dispositivos e gabaritos" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&amp;q=80"/>
</div>
<p className="mt-4 font-medium tracking-tight">Projetos &amp; Ferramentaria</p>
<p className="text-sm text-neutral-600">Dispositivos, gabaritos, protótipos e melhorias de processo.</p>
</div>
</div>

<div className="group rounded-2xl bg-white ring-1 ring-neutral-200 p-5">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400">05</span>
</div>
<div className="mt-5">
<div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#c8c7cc] bg-neutral-50">
<img alt="Solda e caldeiraria leve" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1598299803204-b73796f43289?w=800&amp;q=80" style={{transition: 'outline 0.1s ease-in-out'}}/>
</div>
<p className="mt-4 font-medium tracking-tight">Solda &amp; Caldeiraria leve</p>
<p className="text-sm text-neutral-600">Montagens, reforços e reparos estruturais em metais.</p>
</div>
</div>

<div className="group rounded-2xl bg-white ring-1 ring-neutral-200 p-5">
<div className="flex items-center justify-between">
<span className="text-[11px] text-neutral-400">06</span>
</div>
<div className="mt-5">
<div className="aspect-[4/3] rounded-xl overflow-hidden ring-1 ring-[#c8c7cc] bg-neutral-50">
<img alt="Tratamentos térmicos e superficiais" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1598299803204-b73796f43289?w=800&amp;q=80" style={{transition: 'outline 0.1s ease-in-out'}}/>
</div>
<p className="mt-4 font-medium tracking-tight">Tratamentos &amp; Acabamentos</p>
<p className="text-sm text-neutral-600">Térmico, superficial (anodização, zincagem) e pintura via parceiros.</p>
</div>
</div>
</div>
<div className="mt-8 text-center">
<a className="inline-flex items-center justify-center rounded-xl bg-[#0166b6] text-white px-4 py-2.5 text-sm font-medium hover:bg-[#015aa0] transition-colors" href="/fotos">
              Ver portfólio
              <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-12 sm:py-16" id="clientes">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center">
<p className="text-[#0166b6] text-xs">Parcerias</p>
<h2 className="mt-1 text-4xl font-semibold tracking-tight">Clientes</h2>
<p className="mt-3 text-neutral-700 max-w-2xl mx-auto">Indústrias que confiam em nossa entrega e suporte técnico.</p>
</div>
<div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
<img alt="Cliente 1" className="bg-white w-full h-16 object-contain rounded-xl ring-neutral-200 ring-1 pt-3 pr-3 pb-3 pl-3" loading="lazy" src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=800&amp;q=80" style={{transition: 'outline 0.1s ease-in-out'}}/>
<img alt="Cliente 2" className="h-16 w-full object-contain rounded-xl ring-1 ring-neutral-200 bg-white p-3" loading="lazy" src="https://images.unsplash.com/photo-1553835973-dec43bfddbeb?w=800&amp;q=80" style={{outline: 'rgb(245, 158, 11) solid 2px', outlineOffset: '2px', transition: 'outline 0.1s ease-in-out'}}/>
<img alt="Cliente 3" className="h-16 w-full object-contain rounded-xl ring-1 ring-neutral-200 bg-white p-3" loading="lazy" src="https://images.unsplash.com/photo-1554463529-e27854014799?w=800&amp;q=80" style={{}}/>
<img alt="Cliente 4" className="h-16 w-full object-contain rounded-xl ring-1 ring-neutral-200 bg-white p-3" loading="lazy" src="https://images.unsplash.com/photo-1572916289328-eca59d6903ae?w=800&amp;q=80"/>
<img alt="Cliente 5" className="h-16 w-full object-contain rounded-xl ring-1 ring-neutral-200 bg-white p-3" loading="lazy" src="https://images.unsplash.com/photo-1562307534-a03738d2a81a?w=800&amp;q=80"/>
<img alt="Cliente 6" className="h-16 w-full object-contain rounded-xl ring-1 ring-neutral-200 bg-white p-3" loading="lazy" src="https://images.unsplash.com/photo-1646627927874-be8c13d0ae1a?w=800&amp;q=80"/>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-gradient-to-b from-neutral-50 to-white" id="videos">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center">
<p className="text-[#0166b6] text-xs">Mídia</p>
<h2 className="mt-1 text-4xl font-semibold tracking-tight">Vídeos</h2>
<p className="mt-3 text-neutral-700 max-w-2xl mx-auto">Demonstrações de processo, bastidores e cases.</p>
</div>
<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="rounded-2xl bg-white ring-1 ring-neutral-200 overflow-hidden">
<div className="aspect-video relative">
<img alt="Miniatura de fresamento CNC" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1468787737698-f5c03f0570dd?w=800&amp;q=80"/>
<button aria-label="Reproduzir vídeo: Fresamento CNC - Alumínio 6061" className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-white text-[#0166b6] shadow flex items-center justify-center">
<svg className="lucide lucide-play h-5 w-5 translate-x-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="p-4">
<p className="font-medium tracking-tight">Fresamento CNC — Alumínio 6061</p>
<p className="text-sm text-neutral-600">Setup, parâmetros e acabamento superficial.</p>
</div>
</div>

<div className="rounded-2xl bg-white ring-1 ring-neutral-200 overflow-hidden">
<div className="aspect-video relative">
<img alt="Miniatura de torneamento" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1581091215367-9b6c00b3035a?w=800&amp;q=80"/>
<button aria-label="Reproduzir vídeo: Bastidores de torneamento" className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-white text-[#0166b6] shadow flex items-center justify-center">
<svg className="lucide lucide-play h-5 w-5 translate-x-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="p-4">
<p className="font-medium tracking-tight">Bastidores — Setup de torneamento</p>
<p className="text-sm text-neutral-600">Fixação, ferramentas e controle dimensional.</p>
</div>
</div>

<div className="rounded-2xl bg-white ring-1 ring-neutral-200 overflow-hidden">
<div className="aspect-video relative">
<img alt="Miniatura de manutenção de eixo" className="w-full h-full object-cover" loading="lazy" src="https://images.unsplash.com/photo-1443866451220-8377d57c426a?w=800&amp;q=80"/>
<button aria-label="Reproduzir vídeo: Case de recuperação de eixo" className="absolute inset-0 m-auto h-12 w-12 rounded-full bg-white text-[#0166b6] shadow flex items-center justify-center">
<svg className="lucide lucide-play h-5 w-5 translate-x-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
</div>
<div className="p-4">
<p className="font-medium tracking-tight">Case — Recuperação de eixo</p>
<p className="text-sm text-neutral-600">Processo, tolerâncias e resultado final.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16" id="trabalhe-conosco">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-7">
<p className="text-[#0166b6] text-xs">Carreiras</p>
<h2 className="mt-1 text-4xl font-semibold tracking-tight">Trabalhe conosco</h2>
<p className="mt-3 text-neutral-700 max-w-2xl">
                Buscamos profissionais com mentalidade de melhoria contínua e foco em qualidade. Envie seus dados e entraremos em contato quando houver alinhamento com seu perfil.
              </p>
<ul className="mt-4 text-sm text-neutral-700 grid grid-cols-1 sm:grid-cols-2 gap-2">
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-[#0166b6]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Operador(a) CNC</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-[#0166b6]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Programador(a) CAM</li>
<li className="inline-flex items-center gap-2"><svg className="lucide lucide-check h-4 w-4 text-[#0166b6]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Inspetor(a) de Qualidade</li>
</ul>
</div>
<div className="lg:col-span-5">
<div className="lg:ml-auto w-full max-w-md lg:max-w-sm rounded-2xl bg-white ring-1 ring-neutral-200 shadow-sm p-4 sm:p-5">
<div className="flex items-center justify-between">
<div>
<p className="text-neutral-900 font-medium tracking-tight">Cadastre seu currículo</p>
<p className="text-neutral-500 text-xs mt-0.5">Campos obrigatórios *</p>
</div>
<div className="h-9 w-9 rounded-lg bg-[#0166b6] text-white flex items-center justify-center">
<svg className="lucide lucide-briefcase h-4 w-4" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
</div>
<form className="mt-4 space-y-3">
<div>
<label className="block text-xs text-neutral-600">Nome completo *</label>
<input className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-neutral-300 focus:ring-2 focus:ring-[#0166b6] outline-none bg-white placeholder:text-neutral-400" placeholder="Seu nome" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-neutral-600">E-mail *</label>
<input className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-neutral-300 focus:ring-2 focus:ring-[#0166b6] outline-none bg-white placeholder:text-neutral-400" placeholder="voce@exemplo.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-neutral-600">Telefone</label>
<input className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-neutral-300 focus:ring-2 focus:ring-[#0166b6] outline-none bg-white placeholder:text-neutral-400" placeholder="(11) 99999-9999" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs text-neutral-600">Área de interesse</label>
<input className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-neutral-300 focus:ring-2 focus:ring-[#0166b6] outline-none bg-white placeholder:text-neutral-400" placeholder="Ex.: Operador CNC" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-600">Link do currículo (PDF/Drive)</label>
<input className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-neutral-300 focus:ring-2 focus:ring-[#0166b6] outline-none bg-white placeholder:text-neutral-400" placeholder="https://..." type="url"/>
</div>
<button className="w-full inline-flex items-center justify-center rounded-xl bg-[#0166b6] text-white px-4 py-2.5 text-sm font-medium hover:bg-[#015aa0] transition-colors" type="submit">
                    Enviar
                    <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[11px] text-neutral-500">Seus dados são confidenciais.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-[#0166b6]" id="contato">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
<div className="lg:col-span-5">
<div className="rounded-2xl bg-white/95 backdrop-blur ring-1 ring-white/40 shadow-lg p-4 sm:p-5">
<div className="flex items-center justify-between">
<div>
<p className="text-[11px] text-neutral-500">Fale conosco</p>
<h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">Contato</h3>
</div>
<div className="h-9 w-9 rounded-lg bg-[#0166b6] text-white flex items-center justify-center">
<svg className="lucide lucide-message-square h-4 w-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
</div>
<form action="#" className="mt-4 space-y-3" method="POST">
<div>
<label className="block text-xs text-neutral-600">Seu nome *</label>
<input className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-neutral-300 focus:ring-2 focus:ring-[#0166b6] outline-none bg-white placeholder:text-neutral-400" placeholder="Nome" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div>
<label className="block text-xs text-neutral-600">E‑mail *</label>
<div className="relative mt-1">
<svg className="lucide lucide-mail h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-neutral-300 focus:ring-2 focus:ring-[#0166b6] outline-none bg-white placeholder:text-neutral-400" placeholder="voce@empresa.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs text-neutral-600">Telefone</label>
<div className="relative mt-1">
<svg className="lucide lucide-phone h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<input className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-neutral-300 focus:ring-2 focus:ring-[#0166b6] outline-none bg-white placeholder:text-neutral-400" placeholder="(11) 99999-9999" type="tel"/>
</div>
</div>
</div>
<div>
<label className="block text-xs text-neutral-600">Mensagem</label>
<textarea className="mt-1 w-full resize-y pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-neutral-300 focus:ring-2 focus:ring-[#0166b6] outline-none bg-white placeholder:text-neutral-400" placeholder="Como podemos ajudar?" rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center rounded-xl bg-[#0166b6] text-white px-4 py-3 text-sm font-medium hover:bg-[#015aa0] transition-colors" type="submit">
                    Enviar mensagem
                    <svg className="lucide lucide-arrow-right h-4 w-4 ml-2" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<p className="text-[11px] text-neutral-500">Ao enviar, você concorda com nossos Termos e Política de Privacidade.</p>
</form>
</div>
</div>
<div className="lg:col-span-7">
<h2 className="text-white tracking-tight text-4xl sm:text-5xl font-semibold leading-[1.05]">Vamos conversar.</h2>
<p className="sm:text-lg max-w-2xl text-base text-white/90 mt-4">
                Conte sobre seu projeto, peça sob medida ou manutenção. Responderemos rapidamente com a melhor solução.
              </p>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-white">
<svg className="lucide lucide-clock-3 h-4 w-4" data-lucide="clock-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6h4"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<p className="text-white font-medium text-sm">Horário</p>
<p className="text-white/80 text-xs">Seg–Sex, 8h às 18h</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-white/20 flex items-center justify-center text-white">
<svg className="lucide lucide-route h-4 w-4" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
</div>
<div>
<p className="text-white font-medium text-sm">Atendemos Brasil</p>
<p className="text-white/80 text-xs">Coleta/entrega sob consulta</p>
</div>
</div>
</div>
<div className="mt-7">
<div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 backdrop-blur ring-1 ring-white/40 shadow-lg p-3">
<div className="h-12 w-12 rounded-xl bg-[#0166b6]/10 text-[#0166b6] flex items-center justify-center">
<svg className="lucide lucide-headphones h-5 w-5" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<div className="min-w-0">
<p className="text-[11px] text-neutral-500 leading-none">Contato direto</p>
<p className="text-neutral-900 font-medium tracking-tight truncate"><a className="hover:underline" href="mailto:hsindustrial@hsindustrial.com.br">hsindustrial@hsindustrial.com.br</a> • <a className="hover:underline" href="tel:+551144524098">+55 11 4452-4098</a></p>
</div>
<a className="ml-1 inline-flex items-center gap-2 rounded-xl bg-[#0166b6] text-white px-3 py-2 text-xs font-medium hover:bg-[#015aa0] transition-colors" href="https://wa.me/5511940298100" rel="noopener" target="_blank">
                    WhatsApp
                    <svg className="lucide lucide-message-circle h-3.5 w-3.5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-10 text-center text-xs text-neutral-500">
        © <span id="year">2025</span> HS Industrial Technologies. Todos os direitos reservados.
      </footer>
</div>




    </>
  );
}
