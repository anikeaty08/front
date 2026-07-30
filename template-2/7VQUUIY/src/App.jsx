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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_-10%,rgba(99,102,241,0.18),transparent_60%),radial-gradient(40%_40%_at_80%_20%,rgba(236,72,153,0.12),transparent_50%),radial-gradient(35%_35%_at_20%_80%,rgba(34,197,94,0.10),transparent_50%)]"></div>
<div className="absolute inset-0 backdrop-blur-[2px]"></div>
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent via-white/10"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md ring-1 grid place-items-center bg-white/5 ring-white/10">
<span className="text-xs tracking-tight font-semibold">CX</span>
</div>
<span className="text-sm sm:text-base font-medium tracking-tight text-white/90">Conexão</span>
</div>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
<a className="transition-colors hover:text-white" data-i18n="nav.features" href="#funcionalidades">Funcionalidades</a>
<a className="transition-colors hover:text-white" data-i18n="nav.how" href="#como-funciona">Como funciona</a>
<a className="transition-colors hover:text-white" data-i18n="nav.security" href="#seguranca">Segurança</a>
<a className="transition-colors hover:text-white" data-i18n="nav.signup" href="#cadastro">Cadastro</a>
<a className="transition-colors hover:text-white" data-i18n="nav.app" href="#app">App</a>
</nav>
<div className="flex items-center gap-2">

<div className="relative">
<button aria-expanded="false" aria-haspopup="menu" className="inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md ring-1 transition-colors bg-white/5 hover:bg-white/10 ring-white/10 text-white" id="lang-button">
<i className="h-4 w-4" data-lucide="globe-2"></i>
<span id="lang-current">PT</span>
</button>
<div className="hidden absolute right-0 mt-2 w-40 rounded-md ring-1 ring-white/10 bg-neutral-900 shadow-xl shadow-black/40 p-1" id="lang-popover">
<button className="w-full flex items-center gap-2 px-3 py-2 rounded text-sm hover:bg-white/10 transition" data-lang="pt">
<span className="flex-1 text-left">Português</span>
<i className="h-4 w-4 text-indigo-400 hidden" data-lang-check="pt" data-lucide="check"></i>
</button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded text-sm hover:bg-white/10 transition" data-lang="en">
<span className="flex-1 text-left">English</span>
<i className="h-4 w-4 text-indigo-400 hidden" data-lang-check="en" data-lucide="check"></i>
</button>
</div>
</div>
<button className="hidden sm:inline-flex items-center gap-2 text-sm px-3 py-2 rounded-md ring-1 transition-colors bg-white/5 hover:bg-white/10 ring-white/10 text-white">
<i className="h-4 w-4" data-lucide="log-in"></i>
<span data-i18n="nav.signin">Entrar</span>
</button>
<a className="inline-flex items-center gap-2 text-sm px-3.5 py-2 rounded-md bg-indigo-500 transition-colors hover:bg-indigo-400 text-white" href="#app">
<i className="h-4 w-4" data-lucide="download"></i>
<span data-i18n="nav.download">Baixar app</span>
</a>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-10">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<div className="inline-flex items-center gap-2 text-xs sm:text-sm px-2.5 py-1.5 rounded-full ring-1 mb-4 bg-blue-400/10 text-blue-300 ring-blue-400/20">
<i className="h-4 w-4" data-lucide="sparkles"></i>
<span data-i18n="hero.badge">Novo jeito de conectar viagens e envios</span>
</div>
<h1 className="text-3xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white" data-i18n="hero.h1">
              Conexão – O app que conecta pessoas e viagens
            </h1>
<p className="mt-4 text-base sm:text-lg leading-relaxed text-neutral-300" data-i18n="hero.p">
              Aproximamos viajantes e solicitantes para envios, recebimentos e compras entre países de forma simples, rápida e segura.
            </p>

<div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="group inline-flex items-center justify-center gap-2 text-sm sm:text-base px-4 py-2.5 rounded-md bg-indigo-500 transition-colors hover:bg-indigo-400 text-white" href="#app">
<i className="h-5 w-5" data-lucide="smartphone"></i>
<span data-i18n="hero.cta.download">Baixar o app</span>
<i className="h-4 w-4 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
<button className="inline-flex items-center justify-center gap-2 text-sm sm:text-base px-4 py-2.5 rounded-md transition-colors ring-1 bg-white text-neutral-900 hover:bg-neutral-50 ring-white/10">
<svg className="h-5 w-5 -ml-0.5" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M43.6 20.5H42V20H24v8h11.3C33.9 31.9 29.4 35 24 35c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 3.1l5.7-5.7C34.7 3.3 29.6 1 24 1 11.8 1 2 10.8 2 23s9.8 22 22 22c12.2 0 21-9.8 21-22 0-1.3-.1-2.7-.4-4.5z" fill="#FFC107"></path><path d="M6.3 14.7l6.6 4.8C14.4 16.5 18.8 13 24 13c3.1 0 5.9 1.1 8.1 3.1l5.7-5.7C34.7 6.3 29.6 4 24 4 16 4 9 8.6 6.3 14.7z" fill="#FF3D00"></path><path d="M24 46c5.3 0 10.1-2 13.7-5.3L31.3 35C29.4 36.4 26.8 37 24 37c-5.4 0-9.9-3.1-12-7.6l-6.6 5.1C9 41.5 15.9 46 24 46z" fill="#4CAF50"></path><path d="M43.6 20.5H42V20H24v8h11.3c-1.2 3-3.4 5.4-6.2 7.1l6.4 5c3.7-3.4 6.1-8.5 6.1-14.6 0-1.3-.1-2.7-.4-4.5z" fill="#1976D2"></path></svg>
<span data-i18n="hero.cta.google">Entrar com Google</span>
</button>
</div>

<div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="text-xs text-neutral-400" data-i18n="stats.match">Tempo médio de match</div>
<div className="mt-1 text-lg font-semibold tracking-tight">12 min</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="text-xs text-neutral-400" data-i18n="stats.trips">Viagens ativas</div>
<div className="mt-1 text-lg font-semibold tracking-tight">3.2k</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="text-xs text-neutral-400" data-i18n="stats.success">Taxa de sucesso</div>
<div className="mt-1 text-lg font-semibold tracking-tight">98%</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -top-10 -right-6 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="rounded-2xl ring-1 p-4 sm:p-6 lg:p-8 shadow-2xl bg-white/5 ring-white/10 shadow-black/40">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="user" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop" />
<div>
<div className="text-sm font-medium tracking-tight">Rota disponível</div>
<div className="text-xs text-neutral-400">São Paulo → Lisboa • 02 Out</div>
</div>
</div>
<span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-blue-500/10 ring-1 ring-blue-500/20 text-blue-300">
<i className="h-3.5 w-3.5" data-lucide="shield-check"></i> Verificado
                </span>
</div>
<div className="mt-5 grid grid-cols-3 gap-3">
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="text-xs text-neutral-400">Espaço livre</div>
<div className="mt-1 text-base font-semibold tracking-tight">7 kg</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="text-xs text-neutral-400">Entrega</div>
<div className="mt-1 text-base font-semibold tracking-tight">48 h</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="text-xs text-neutral-400">Avaliação</div>
<div className="mt-1 flex items-center gap-1.5">
<i className="h-4 w-4 text-yellow-400" data-lucide="star"></i>
<span className="text-base font-semibold tracking-tight">4.9</span>
</div>
</div>
</div>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-300" data-lucide="map-pin"></i>
<div className="text-sm">Retirada em Vila Mariana • SP</div>
</div>
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-300" data-lucide="locate-fixed"></i>
<div className="text-sm">Entrega em Baixa-Chiado • Lisboa</div>
</div>
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-300" data-lucide="message-circle"></i>
<div className="text-sm">Chat integrado para negociar detalhes</div>
</div>
</div>
<div className="mt-6 flex gap-3">
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-md text-sm ring-1 transition-colors bg-white/5 hover:bg-white/10 ring-white/10">
<i className="h-4 w-4" data-lucide="search"></i>
                  Encontrar viajante
                </button>
<button className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-md bg-blue-500 text-sm transition-colors hover:bg-blue-400 text-white">
<i className="h-4 w-4" data-lucide="send"></i>
                  Enviar item
                </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20" id="funcionalidades">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold" data-i18n="features.h2">Funcionalidades principais</h2>
<p className="mt-2 text-neutral-300" data-i18n="features.p">Tudo o que você precisa para conectar seu envio à viagem certa.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-indigo-500/10 ring-1 ring-indigo-500/20 grid place-items-center text-indigo-300">
<i className="h-5 w-5" data-lucide="package"></i>
</div>
<h3 className="text-lg tracking-tight font-medium" data-i18n="f.send.title">Envio e recebimento</h3>
</div>
<p className="mt-2 text-sm text-neutral-300" data-i18n="f.send.desc">Conecte-se a viajantes com rota para o seu destino e acompanhe o status.</p>
</div>

<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-rose-500/10 ring-1 ring-rose-500/20 grid place-items-center text-rose-300">
<i className="h-5 w-5" data-lucide="shopping-bag"></i>
</div>
<h3 className="text-lg tracking-tight font-medium" data-i18n="f.neg.title">Negociação de produtos</h3>
</div>
<p className="mt-2 text-sm text-neutral-300" data-i18n="f.neg.desc">Combine a compra no Brasil para entrega na Europa com segurança e rastreabilidade.</p>
</div>

<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-blue-500/10 ring-1 ring-blue-500/20 grid place-items-center text-blue-300">
<i className="h-5 w-5" data-lucide="luggage"></i>
</div>
<h3 className="text-lg tracking-tight font-medium" data-i18n="f.bag.title">Compartilhamento de mala</h3>
</div>
<p className="mt-2 text-sm text-neutral-300" data-i18n="f.bag.desc">Ofereça ou solicite espaço extra, com limites e categorias de itens definidos.</p>
</div>

<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-sky-500/10 ring-1 ring-sky-500/20 grid place-items-center text-sky-300">
<i className="h-5 w-5" data-lucide="message-square"></i>
</div>
<h3 className="text-lg tracking-tight font-medium" data-i18n="f.chat.title">Chat integrado</h3>
</div>
<p className="mt-2 text-sm text-neutral-300" data-i18n="f.chat.desc">Converse em tempo real para acertar valores, prazos e pontos de encontro. Na conta Free, o chat é temporário e as mensagens expiram em 24h; no Premium, o histórico fica salvo.</p>
</div>

<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-cyan-500/10 ring-1 ring-cyan-500/20 grid place-items-center text-cyan-300">
<i className="h-5 w-5" data-lucide="radar"></i>
</div>
<h3 className="text-lg tracking-tight font-medium" data-i18n="f.geo.title">Geolocalização</h3>
</div>
<p className="mt-2 text-sm text-neutral-300" data-i18n="f.geo.desc">Encontre viajantes e solicitantes próximos e veja rotas compatíveis.</p>
</div>

<div className="rounded-xl ring-1 p-5 transition bg-white/5 ring-white/10 hover:ring-white/20">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-violet-500/10 ring-1 ring-violet-500/20 grid place-items-center text-violet-300">
<i className="h-5 w-5" data-lucide="key-round"></i>
</div>
<h3 className="text-lg tracking-tight font-medium" data-i18n="f.login.title">Login rápido</h3>
</div>
<p className="mt-2 text-sm text-neutral-300" data-i18n="f.login.desc">Entre com Google ou redes sociais e comece em segundos.</p>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-white/10" id="como-funciona">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold" data-i18n="how.h2">Como funciona</h2>
<p className="mt-2 text-neutral-300" data-i18n="how.p">Três passos para seu envio ou para monetizar sua viagem.</p>
<div className="mt-6 space-y-5">
<div className="flex gap-4">
<div className="h-9 w-9 rounded-lg ring-1 grid place-items-center bg-white/5 ring-white/10">
<i className="h-4 w-4" data-lucide="search"></i>
</div>
<div>
<h3 className="font-medium tracking-tight" data-i18n="how.step1.t">1. Encontre o match perfeito</h3>
<p className="text-sm text-neutral-300" data-i18n="how.step1.d">Busque por destino, datas, peso disponível e reputação do viajante.</p>
</div>
</div>
<div className="flex gap-4">
<div className="h-9 w-9 rounded-lg ring-1 grid place-items-center bg-white/5 ring-white/10">
<i className="h-4 w-4" data-lucide="handshake"></i>
</div>
<div>
<h3 className="font-medium tracking-tight" data-i18n="how.step2.t">2. Negocie no chat</h3>
<p className="text-sm text-neutral-300" data-i18n="how.step2.d">Combine detalhes, valores, documentos e ponto de encontro com segurança.</p>
</div>
</div>
<div className="flex gap-4">
<div className="h-9 w-9 rounded-lg ring-1 grid place-items-center bg-white/5 ring-white/10">
<i className="h-4 w-4" data-lucide="badge-check"></i>
</div>
<div>
<h3 className="font-medium tracking-tight" data-i18n="how.step3.t">3. Entrega confirmada</h3>
<p className="text-sm text-neutral-300" data-i18n="how.step3.d">Acompanhe o status, confirme a entrega e avalie a experiência.</p>
</div>
</div>
</div>

<form className="mt-8 rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
<div className="grid sm:grid-cols-3 gap-3">
<div className="relative">
<label className="text-xs text-neutral-400" data-i18n="how.form.origin">Origem</label>
<div className="mt-1.5 flex items-center gap-2 rounded-md ring-1 px-3 py-2 focus-within:ring-indigo-500/40 bg-black/20 ring-white/10">
<i className="h-4 w-4 text-neutral-400" data-lucide="plane-takeoff"></i>
<input className="w-full bg-transparent outline-none placeholder:text-neutral-500 text-sm" placeholder="São Paulo" type="text" />
</div>
</div>
<div className="relative">
<label className="text-xs text-neutral-400" data-i18n="how.form.dest">Destino</label>
<div className="mt-1.5 flex items-center gap-2 rounded-md ring-1 px-3 py-2 focus-within:ring-indigo-500/40 bg-black/20 ring-white/10">
<i className="h-4 w-4 text-neutral-400" data-lucide="plane-landing"></i>
<input className="w-full bg-transparent outline-none placeholder:text-neutral-500 text-sm" placeholder="Lisboa" type="text" />
</div>
</div>
<div className="relative">
<label className="text-xs text-neutral-400" data-i18n="how.form.date">Data</label>
<div className="mt-1.5 flex items-center gap-2 rounded-md ring-1 px-3 py-2 focus-within:ring-indigo-500/40 bg-black/20 ring-white/10">
<i className="h-4 w-4 text-neutral-400" data-lucide="calendar"></i>
<input className="w-full bg-transparent outline-none text-sm [color-scheme:dark]" type="date" />
</div>
</div>
</div>
<div className="mt-3 flex flex-col sm:flex-row gap-3">
<div className="flex-1 flex items-center gap-2 rounded-md ring-1 px-3 py-2 bg-black/20 ring-white/10">
<i className="h-4 w-4 text-neutral-400" data-lucide="scale"></i>
<input className="w-full bg-transparent outline-none placeholder:text-neutral-500 text-sm" min="0" placeholder="Peso (kg)" step="0.5" type="number" />
</div>
<button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-indigo-500 text-sm transition hover:bg-indigo-400 text-white" type="button">
<i className="h-4 w-4" data-lucide="search"></i>
<span data-i18n="how.form.btn">Buscar viajantes</span>
</button>
</div>
</form>
</div>

<div className="grid gap-6">

<div className="rounded-2xl ring-1 p-4 bg-white/5 ring-white/10">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="chat user" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=256&auto=format&fit=crop" />
<div>
<div className="text-sm font-medium tracking-tight">Marina • Lisboa</div>
<div className="text-xs text-neutral-400">Rota SP → LIS</div>
</div>
</div>
<span className="text-xs text-neutral-400">Agora</span>
</div>
<div className="mt-4 space-y-2">
<div className="max-w-[80%] rounded-lg px-3 py-2 text-sm bg-white/10">
                  Oi! Posso levar até 5 kg, entrega em 24-48h. Pode ser?
                </div>
<div className="max-w-[80%] rounded-lg bg-indigo-500/20 px-3 py-2 text-sm ml-auto text-indigo-100">
                  Perfeito. Documento no envelope, retirada em Vila Mariana.
                </div>
<div className="max-w-[80%] rounded-lg px-3 py-2 text-sm bg-white/10">
                  Fechado! Te envio o ponto no app e combinamos horário.
                </div>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="flex-1 flex items-center gap-2 rounded-md ring-1 px-3 py-2 bg-black/20 ring-white/10">
<i className="h-4 w-4 text-neutral-400" data-lucide="message-circle"></i>
<input className="w-full bg-transparent outline-none placeholder:text-neutral-500 text-sm" placeholder="Escreva uma mensagem..." />
</div>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 transition hover:bg-indigo-400 text-white">
<i className="h-4 w-4" data-lucide="send"></i>
</button>
</div>
</div>

<div className="rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5">
<div className="p-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-neutral-300" data-lucide="map"></i>
<div className="text-sm font-medium tracking-tight">Viajantes por perto</div>
</div>
<span className="text-xs text-neutral-400">Atualizado há 1 min</span>
</div>
<div className="relative">
<img alt="map" className="w-full h-64 object-cover opacity-80" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />

<div className="absolute inset-0">
<div className="absolute left-[22%] top-[35%]">
<div className="h-6 w-6 rounded-full bg-blue-500/20 ring-2 ring-blue-400/50"></div>
</div>
<div className="absolute left-[62%] top-[48%]">
<div className="h-6 w-6 rounded-full bg-indigo-500/20 ring-2 ring-indigo-400/50"></div>
</div>
<div className="absolute left-[40%] top-[20%]">
<div className="h-6 w-6 rounded-full bg-rose-500/20 ring-2 ring-rose-400/50"></div>
</div>
</div>
</div>
<div className="p-4 grid sm:grid-cols-3 gap-3">
<div className="rounded-lg ring-1 p-3 bg-black/20 ring-white/10">
<div className="text-xs text-neutral-400">Próximos de você</div>
<div className="mt-1 text-base font-semibold tracking-tight">18 viajantes</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-black/20 ring-white/10">
<div className="text-xs text-neutral-400">Rotas SP → Europa</div>
<div className="mt-1 text-base font-semibold tracking-tight">54 ativas</div>
</div>
<div className="rounded-lg ring-1 p-3 bg-black/20 ring-white/10">
<div className="text-xs text-neutral-400">Média de entrega</div>
<div className="mt-1 text-base font-semibold tracking-tight">36 horas</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-white/10" id="seguranca">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold" data-i18n="security.h2">Segurança em primeiro lugar</h2>
<p className="mt-2 text-neutral-300" data-i18n="security.p">Camadas de verificação e boas práticas para sua tranquilidade.</p>
<ul className="mt-6 space-y-4">
<li className="flex gap-3">
<i className="h-5 w-5 text-blue-300" data-lucide="shield-check"></i>
<div>
<div className="font-medium tracking-tight">Perfis verificados</div>
<p className="text-sm text-neutral-300">Documentos checados e avaliações da comunidade.</p>
</div>
</li>
<li className="flex gap-3">
<i className="h-5 w-5 text-indigo-300" data-lucide="lock"></i>
<div>
<div className="font-medium tracking-tight">Chat seguro</div>
<p className="text-sm text-neutral-300">Converse sem expor dados sensíveis, com mediação quando necessário.</p>
</div>
</li>
<li className="flex gap-3">
<i className="h-5 w-5 text-cyan-300" data-lucide="file-check-2"></i>
<div>
<div className="font-medium tracking-tight">Políticas claras</div>
<p className="text-sm text-neutral-300">Categorias permitidas, limites de peso e itens restritos bem definidos.</p>
</div>
</li>
</ul>
</div>
<div className="rounded-2xl ring-1 p-6 bg-white/5 ring-white/10">
<div className="flex items-center gap-3">
<i className="h-6 w-6 text-blue-300" data-lucide="badge-check"></i>
<div className="text-lg font-medium tracking-tight">Checklist de envio</div>
</div>
<div className="mt-4 grid sm:grid-cols-2 gap-3">
<div className="rounded-lg ring-1 p-4 bg-black/20 ring-white/10">
<div className="text-sm font-medium">Documentos OK</div>
<p className="text-xs mt-1 text-neutral-400">RG/Passaporte do viajante verificado.</p>
</div>
<div className="rounded-lg ring-1 p-4 bg-black/20 ring-white/10">
<div className="text-sm font-medium">Item permitido</div>
<p className="text-xs mt-1 text-neutral-400">Conferência de categoria e peso.</p>
</div>
<div className="rounded-lg ring-1 p-4 bg-black/20 ring-white/10">
<div className="text-sm font-medium">Ponto de encontro</div>
<p className="text-xs mt-1 text-neutral-400">Local público e horário definidos.</p>
</div>
<div className="rounded-lg ring-1 p-4 bg-black/20 ring-white/10">
<div className="text-sm font-medium">Confirmação</div>
<p className="text-xs mt-1 text-neutral-400">Entrega com código único no app.</p>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-400">
<i className="h-4 w-4" data-lucide="info"></i>
              Dicas de segurança disponíveis no app e no centro de ajuda.
            </div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-white/10" id="cadastro">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-start">
<div className="space-y-3">
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold" data-i18n="signup.h2">Cadastro e verificação</h2>
<p className="text-neutral-300" data-i18n="signup.p">Para registrar sua conta, precisamos do país, foto do documento e uma verificação facial.</p>
<ul className="text-sm text-neutral-300 space-y-2">
<li className="flex gap-2"><i className="h-4 w-4 text-blue-300 mt-0.5" data-lucide="globe"></i> Informe seu país.</li>
<li className="flex gap-2"><i className="h-4 w-4 text-indigo-300 mt-0.5" data-lucide="id-card"></i> América do Sul: foto do Passaporte. Europa: foto do Cartão do Cidadão do país.</li>
<li className="flex gap-2"><i className="h-4 w-4 text-cyan-300 mt-0.5" data-lucide="scan-face"></i> Ao final, faça o scanner do rosto para confirmação.</li>
</ul>
<div className="hidden sm:block h-px bg-white/10 my-6"></div>
<div className="rounded-xl ring-1 p-4 bg-white/5 ring-white/10">
<div className="flex items-start gap-2">
<i className="h-4 w-4 text-neutral-300 mt-0.5" data-lucide="shield"></i>
<p className="text-xs text-neutral-400">Suas imagens são usadas apenas para verificação e podem ser removidas a qualquer momento nas configurações da conta.</p>
</div>
</div>
</div>
<form className="rounded-2xl ring-1 p-5 sm:p-6 bg-white/5 ring-white/10 space-y-4" id="signup-form" novalidate="">

<div className="relative">
<label className="text-xs text-neutral-400" htmlFor="country">País</label>
<div className="mt-1.5 flex items-center gap-2 rounded-md ring-1 px-3 py-2 bg-black/20 ring-white/10 focus-within:ring-indigo-500/40">
<i className="h-4 w-4 text-neutral-400" data-lucide="flag"></i>
<select className="w-full bg-transparent outline-none text-sm" id="country" required>
<option value="">Selecione o país</option>

<option data-region="sa" value="Brasil">Brasil</option>
<option data-region="sa" value="Argentina">Argentina</option>
<option data-region="sa" value="Chile">Chile</option>
<option data-region="sa" value="Uruguai">Uruguai</option>
<option data-region="sa" value="Paraguai">Paraguai</option>
<option data-region="sa" value="Peru">Peru</option>
<option data-region="sa" value="Bolívia">Bolívia</option>
<option data-region="sa" value="Colômbia">Colômbia</option>
<option data-region="sa" value="Venezuela">Venezuela</option>
<option data-region="sa" value="Equador">Equador</option>

<option data-region="eu" value="Portugal">Portugal</option>
<option data-region="eu" value="Espanha">Espanha</option>
<option data-region="eu" value="França">França</option>
<option data-region="eu" value="Alemanha">Alemanha</option>
<option data-region="eu" value="Itália">Itália</option>
<option data-region="eu" value="Reino Unido">Reino Unido</option>
<option data-region="eu" value="Irlanda">Irlanda</option>
<option data-region="eu" value="Holanda">Holanda</option>
</select>
</div>
</div>

<div className="rounded-lg ring-1 p-4 bg-black/20 ring-white/10" id="doc-card">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-neutral-300" data-lucide="id-card"></i>
<div className="text-sm font-medium tracking-tight">
                  Documento exigido: <span className="text-neutral-200" id="doc-required">—</span>
</div>
<span className="ml-auto hidden text-[11px] px-2 py-0.5 rounded-full bg-white/10 ring-1 ring-white/10 text-neutral-300" id="doc-region-badge"></span>
</div>
<p className="mt-1.5 text-xs text-neutral-400" id="doc-help">Selecione o país para ver o documento necessário.</p>
<div className="mt-3">
<label className="text-xs text-neutral-400">Foto do documento</label>
<div className="mt-1.5 rounded-md ring-1 ring-white/10 bg-white/5 p-3">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-neutral-300" data-lucide="camera"></i>
<span className="text-sm text-neutral-300">Envie uma foto nítida e legível</span>
</div>
<label className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-md bg-white text-neutral-900 hover:bg-neutral-50 transition cursor-pointer" htmlFor="doc-file">
<i className="h-4 w-4" data-lucide="upload-cloud"></i>
                      Selecionar
                    </label>
</div>
<input accept="image/*" capture="environment" className="hidden" id="doc-file" required type="file" />
<div className="mt-2 text-xs text-neutral-400 line-clamp-1" id="doc-file-name"></div>
</div>
</div>
</div>

<div className="rounded-lg ring-1 p-4 bg-black/20 ring-white/10">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-neutral-300" data-lucide="lock-keyhole"></i>
<div className="text-sm font-medium tracking-tight">Segurança da conta</div>
</div>
<div className="mt-3 grid sm:grid-cols-2 gap-3">
<div>
<label className="text-xs text-neutral-400" htmlFor="password">Senha</label>
<div className="mt-1.5 flex items-center gap-2 rounded-md ring-1 px-3 py-2 bg-black/20 ring-white/10 focus-within:ring-indigo-500/40">
<i className="h-4 w-4 text-neutral-400" data-lucide="key-round"></i>
<input autocomplete="new-password" className="w-full bg-transparent outline-none text-sm" id="password" required type="password" />
<button className="text-neutral-300 hover:text-white transition" id="toggle-pass" type="button">
<i className="h-4 w-4" data-lucide="eye"></i>
</button>
</div>
</div>
<div>
<label className="text-xs text-neutral-400" htmlFor="password-confirm">Confirmar senha</label>
<div className="mt-1.5 flex items-center gap-2 rounded-md ring-1 px-3 py-2 bg-black/20 ring-white/10 focus-within:ring-indigo-500/40">
<i className="h-4 w-4 text-neutral-400" data-lucide="shield-check"></i>
<input autocomplete="new-password" className="w-full bg-transparent outline-none text-sm" id="password-confirm" required type="password" />
<button className="text-neutral-300 hover:text-white transition" id="toggle-pass-confirm" type="button">
<i className="h-4 w-4" data-lucide="eye"></i>
</button>
</div>
</div>
</div>

<div className="mt-3">
<div className="flex items-center gap-1.5">
<div className="h-1.5 flex-1 rounded bg-white/10" id="bar-1"></div>
<div className="h-1.5 flex-1 rounded bg-white/10" id="bar-2"></div>
<div className="h-1.5 flex-1 rounded bg-white/10" id="bar-3"></div>
<div className="h-1.5 flex-1 rounded bg-white/10" id="bar-4"></div>
<span className="ml-2 text-xs text-neutral-400" id="strength-label">Força: —</span>
</div>
<ul className="mt-3 grid sm:grid-cols-2 gap-2 text-xs text-neutral-300">
<li className="flex items-start gap-2">
<i className="h-3.5 w-3.5 text-neutral-500" data-lucide="circle" data-req="len"></i>
                    12+ caracteres
                  </li>
<li className="flex items-start gap-2">
<i className="h-3.5 w-3.5 text-neutral-500" data-lucide="circle" data-req="upper"></i>
                    Letra maiúscula
                  </li>
<li className="flex items-start gap-2">
<i className="h-3.5 w-3.5 text-neutral-500" data-lucide="circle" data-req="lower"></i>
                    Letra minúscula
                  </li>
<li className="flex items-start gap-2">
<i className="h-3.5 w-3.5 text-neutral-500" data-lucide="circle" data-req="num"></i>
                    Número
                  </li>
<li className="flex items-start gap-2 sm:col-span-2">
<i className="h-3.5 w-3.5 text-neutral-500" data-lucide="circle" data-req="special"></i>
                    Caractere especial (!@#$%…)
                  </li>
</ul>
<p className="mt-2 text-xs text-rose-400 hidden" id="password-help">A senha deve atender a todos os requisitos e coincidir na confirmação.</p>
</div>
</div>

<div className="rounded-lg ring-1 p-4 bg-black/20 ring-white/10">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-neutral-300" data-lucide="scan-face"></i>
<div className="text-sm font-medium tracking-tight">Scanner de rosto</div>
<span className="ml-auto text-[11px] px-2 py-0.5 rounded-full bg-white/10 ring-1 ring-white/10 text-neutral-300" id="face-status">Aguardando</span>
</div>
<div className="mt-3 grid gap-3">
<div className="relative rounded-md overflow-hidden ring-1 ring-white/10 bg-neutral-900">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none" id="face-frame">
<div className="h-40 w-40 rounded-full ring-2 ring-white/30"></div>
</div>
<video autoPlay className="w-full h-64 object-cover hidden" id="face-video" playsInline></video>
<div className="w-full h-64 grid place-items-center text-neutral-400" id="face-placeholder">
<div className="flex items-center gap-2 text-sm">
<i className="h-5 w-5" data-lucide="webcam"></i>
                      Ative a câmera para iniciar
                    </div>
</div>
<canvas className="w-full h-64 hidden" id="face-canvas"></canvas>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-indigo-500 text-sm text-white hover:bg-indigo-400 transition" id="start-scan" type="button">
<i className="h-4 w-4" data-lucide="video"></i>
                    Iniciar verificação
                  </button>
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/10 text-sm text-white hover:bg-white/20 transition ring-1 ring-white/10 disabled:opacity-50 disabled:pointer-events-none" disabled id="capture-scan" type="button">
<i className="h-4 w-4" data-lucide="scan-line"></i>
                    Capturar
                  </button>
<button className="hidden inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white text-sm text-neutral-900 hover:bg-neutral-50 transition" id="retry-scan" type="button">
<i className="h-4 w-4" data-lucide="rotate-ccw"></i>
                    Refazer
                  </button>
</div>
</div>
</div>

<div className="rounded-lg ring-1 p-4 bg-black/20 ring-white/10">
<div className="flex items-start gap-2">
<i className="h-4 w-4 text-neutral-300 mt-0.5" data-lucide="info"></i>
<div className="flex-1">
<p className="text-xs text-neutral-300">
                    Este app atua apenas como meio de conexão entre viajantes e solicitantes de um favor/envio. Não prestamos serviço de transporte nem logística e não nos responsabilizamos por quaisquer eventos decorrentes da interação entre usuários.
                    <button className="ml-1 inline-flex items-center gap-1 text-xs text-blue-300 hover:text-blue-200 underline underline-offset-2" id="open-disclaimer" type="button">
<i className="h-3.5 w-3.5" data-lucide="external-link"></i>
                      Ler Termo de Responsabilidade
                    </button>
</p>
<label className="mt-3 flex items-start gap-3">
<input className="peer sr-only" id="terms-checkbox" required type="checkbox" />
<span className="mt-0.5 h-4 w-4 rounded ring-1 ring-white/20 bg-white/5 grid place-items-center peer-checked:bg-indigo-500 peer-checked:ring-indigo-400 transition">
<i className="h-3 w-3 text-white hidden peer-checked:block" data-lucide="check"></i>
</span>
<span className="text-[13px] leading-relaxed text-neutral-300">
                      Declaro estar ciente e de acordo com os Termos e Serviços e com o Termo de Responsabilidade do app.
                      Para maior eficiência e segurança, recomendo ativar a conta Premium para ter mais informações do perfil do colega e sinais de confiabilidade.
                    </span>
</label>
</div>
</div>
</div>

<div className="rounded-lg ring-1 p-4 bg-black/20 ring-white/10">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-neutral-300" data-lucide="bot"></i>
<div className="text-sm font-medium tracking-tight">Proteção contra bots</div>
</div>
<div className="mt-3 space-y-2">
<div className="rounded-md ring-1 ring-white/10 bg-white/5 p-3" id="recaptcha-container">
<div className="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
</div>

<div className="hidden rounded-md ring-1 ring-white/10 bg-white/5 p-3" id="captcha-fallback">
<label className="text-xs text-neutral-400">Verificação rápida</label>
<div className="mt-1.5 flex items-center gap-2">
<i className="h-4 w-4 text-neutral-400" data-lucide="help-circle"></i>
<span className="text-sm" id="captcha-question">Quanto é 1 + 1?</span>
</div>
<div className="mt-2 flex items-center gap-2">
<input className="flex-1 text-sm rounded-md ring-1 px-3 py-2 outline-none bg-black/20 ring-white/10" id="captcha-answer" inputmode="numeric" placeholder="Resposta" />
<span className="text-xs text-neutral-400">Obrigatório</span>
</div>
</div>
</div>
<p className="mt-2 text-xs text-rose-400 hidden" id="captcha-help">Resolva o CAPTCHA para continuar.</p>
</div>

<div className="hidden text-xs rounded-md px-3 py-2 ring-1 bg-rose-500/10 ring-rose-500/20 text-rose-300" id="form-feedback"></div>

<div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 sm:items-center sm:justify-between">
<p className="text-xs text-neutral-400">
                Ao continuar, você concorda com os Termos e a Política de Privacidade.
              </p>
<div className="flex items-center gap-2">
<span className="hidden text-[11px] px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-neutral-300" id="rate-limit-badge"></span>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-blue-500 text-sm text-white hover:bg-blue-400 transition disabled:opacity-50 disabled:pointer-events-none" disabled id="submit-btn" type="button">
<i className="h-4 w-4" data-lucide="check-circle-2"></i>
                  Concluir cadastro
                </button>
</div>
</div>
</form>
</div>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-white/10" id="app">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h2 className="text-2xl sm:text-3xl tracking-tight font-semibold" data-i18n="app.h2">Leve o Conexão no bolso</h2>
<p className="mt-2 text-neutral-300" data-i18n="app.p">Disponível para iOS e Android. Acompanhe rotas, converse e confirme entregas em qualquer lugar.</p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center gap-3 rounded-md px-4 py-3 ring-1 transition bg-white text-neutral-900 hover:bg-neutral-50 ring-white/10" href="#">
<i className="h-5 w-5" data-lucide="apple"></i>
<div>
<div className="text-xs" data-i18n="app.ios.top">Baixar na</div>
<div className="text-sm font-medium tracking-tight" data-i18n="app.ios.bottom">App Store</div>
</div>
</a>
<a className="inline-flex items-center gap-3 rounded-md px-4 py-3 ring-1 transition bg-white text-neutral-900 hover:bg-neutral-50 ring-white/10" href="#">
<i className="h-5 w-5" data-lucide="store"></i>
<div>
<div className="text-xs" data-i18n="app.play.top">Disponível no</div>
<div className="text-sm font-medium tracking-tight" data-i18n="app.play.bottom">Google Play</div>
</div>
</a>
</div>

<form className="mt-6 max-w-md">
<label className="text-xs text-neutral-400" data-i18n="newsletter.label">Quer ser avisado sobre o lançamento?</label>
<div className="mt-2 flex gap-2">
<input className="flex-1 text-sm rounded-md ring-1 px-3 py-2 outline-none placeholder:text-neutral-500 focus:ring-indigo-500/40 bg-black/20 ring-white/10" placeholder="Seu e-mail" required type="email" />
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-500 text-sm transition hover:bg-indigo-400 text-white">
<i className="h-4 w-4" data-lucide="mail"></i>
<span data-i18n="newsletter.button">Avisar-me</span>
</button>
</div>
</form>
</div>

<div className="relative">
<div className="absolute -left-6 -top-8 h-40 w-40 bg-fuchsia-500/20 blur-3xl rounded-full"></div>
<div className="mx-auto w-full max-w-md rounded-[28px] ring-1 p-2 bg-neutral-900 ring-white/10">
<div className="rounded-[22px] ring-1 overflow-hidden bg-neutral-950 ring-white/10">
<div className="px-4 py-3 flex items-center justify-between bg-white/5">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md grid place-items-center bg-white/10">
<span className="text-[10px] font-semibold tracking-tight">CX</span>
</div>
<span className="text-sm font-medium tracking-tight">Conexão</span>
</div>
<i className="h-4 w-4 text-neutral-300" data-lucide="wifi"></i>
</div>
<div className="p-4">
<div className="rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-blue-300" data-lucide="rocket"></i>
<div className="text-sm font-medium tracking-tight">Solicitar envio</div>
<span className="ml-auto text-xs text-neutral-400">Hoje</span>
</div>
<div className="mt-3 grid grid-cols-2 gap-3">
<div className="rounded-md ring-1 p-2 bg-black/20 ring-white/10">
<div className="text-[11px] text-neutral-400">Origem</div>
<div className="text-sm font-medium tracking-tight">São Paulo</div>
</div>
<div className="rounded-md ring-1 p-2 bg-black/20 ring-white/10">
<div className="text-[11px] text-neutral-400">Destino</div>
<div className="text-sm font-medium tracking-tight">Lisboa</div>
</div>
<div className="rounded-md ring-1 p-2 bg-black/20 ring-white/10">
<div className="text-[11px] text-neutral-400">Peso</div>
<div className="text-sm font-medium tracking-tight">3 kg</div>
</div>
<div className="rounded-md ring-1 p-2 bg-black/20 ring-white/10">
<div className="text-[11px] text-neutral-400">Categoria</div>
<div className="text-sm font-medium tracking-tight">Documentos</div>
</div>
</div>
<button className="mt-3 inline-flex items-center gap-2 w-full justify-center px-3 py-2 rounded-md bg-indigo-500 text-sm transition hover:bg-indigo-400 text-white">
<i className="h-4 w-4" data-lucide="search"></i>
                      Encontrar viajantes
                    </button>
</div>
<div className="mt-4 rounded-lg ring-1 p-3 bg-white/5 ring-white/10">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-cyan-300" data-lucide="bell"></i>
<div className="text-sm font-medium tracking-tight">Novos matches</div>
<span className="ml-auto text-xs text-blue-300">3 disponíveis</span>
</div>
<div className="mt-3 space-y-2">
<div className="flex items-center gap-3 p-2 rounded-md ring-1 bg-black/20 ring-white/10">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" />
<div className="text-sm">
<div className="font-medium tracking-tight">Carla • SP → LIS</div>
<div className="text-[11px] text-neutral-400">7 kg • 02 Out</div>
</div>
<button className="ml-auto inline-flex items-center gap-1 text-xs px-2 py-1 rounded transition bg-white/10 hover:bg-white/20">
<i className="h-3.5 w-3.5" data-lucide="message-square"></i>
                          Chat
                        </button>
</div>
<div className="flex items-center gap-3 p-2 rounded-md ring-1 bg-black/20 ring-white/10">
<img alt="" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=128&auto=format&fit=crop" />
<div className="text-sm">
<div className="font-medium tracking-tight">Ana • SP → PORTO</div>
<div className="text-[11px] text-neutral-400">5 kg • 03 Out</div>
</div>
<button className="ml-auto inline-flex items-center gap-1 text-xs px-2 py-1 rounded transition bg-white/10 hover:bg-white/20">
<i className="h-3.5 w-3.5" data-lucide="message-square"></i>
                          Chat
                        </button>
</div>
</div>
</div>
</div>
</div>
</div>
<p className="mt-4 text-center text-xs text-neutral-400">Imagens meramente ilustrativas.</p>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20 border-t border-white/10">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl bg-gradient-to-b ring-1 p-8 sm:p-10 text-center from-white/5 to-white/0 ring-white/10">
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold" data-i18n="cta.h3">Pronto para conectar sua necessidade à viagem perfeita?</h3>
<p className="mt-2 text-neutral-300" data-i18n="cta.p">Junte-se à comunidade que transforma deslocamentos em oportunidades.</p>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
<a className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-indigo-500 text-sm transition hover:bg-indigo-400 text-white" href="#app">
<i className="h-4 w-4" data-lucide="download"></i>
<span data-i18n="cta.download">Baixar o app</span>
</a>
<button className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md text-sm ring-1 transition bg-white/5 hover:bg-white/10 text-white ring-white/10">
<i className="h-4 w-4" data-lucide="log-in"></i>
<span data-i18n="cta.signin">Entrar com Google</span>
</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md ring-1 grid place-items-center bg-white/5 ring-white/10">
<span className="text-xs tracking-tight font-semibold">CX</span>
</div>
<div>
<div className="text-sm font-medium tracking-tight">Conexão</div>
<div className="text-xs text-neutral-400" data-i18n="footer.tagline">Conectando pessoas e viagens</div>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-5 gap-6 text-sm">
<a className="transition text-neutral-300 hover:text-white" data-i18n="footer.links.features" href="#funcionalidades">Funcionalidades</a>
<a className="transition text-neutral-300 hover:text-white" data-i18n="footer.links.how" href="#como-funciona">Como funciona</a>
<a className="transition text-neutral-300 hover:text-white" data-i18n="footer.links.security" href="#seguranca">Segurança</a>
<a className="transition text-neutral-300 hover:text-white" data-i18n="footer.links.signup" href="#cadastro">Cadastro</a>
<a className="transition text-neutral-300 hover:text-white" data-i18n="footer.links.app" href="#app">App</a>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-neutral-400">
<p>© <span id="year">202</span></p></div></div></footer>
    </>
  );
}
