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
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
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
      

<div aria-hidden="true" className="fixed inset-0 -z-10">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(16,185,129,0.12),transparent_60%),radial-gradient(800px_400px_at_80%_10%,rgba(59,130,246,0.10),transparent_60%)]"></div>
<div className="absolute inset-0 opacity-[0.035] bg-[url('https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&amp;w=1440&amp;auto=format&amp;fit=crop')] bg-cover bg-center"></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="inline-flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-md bg-white text-neutral-900 grid place-content-center font-semibold tracking-tight">DB</div>
<span className="sr-only">Dona Beth</span>
<span className="text-sm text-neutral-300 group-hover:text-white transition-colors">Sua assistente de futebol inteligente</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#problemas">Problemas</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#como-funciona">Como Funciona</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#funcionalidades">Funcionalidades</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#planos">Planos</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#depoimentos">Depoimentos</a>
<a className="text-sm text-neutral-300 hover:text-white transition-colors" href="#faq">FAQ</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="px-3.5 py-2 rounded-md text-sm text-neutral-300 hover:text-white hover:bg-white/5 border border-white/10 hover:border-white/20 transition-colors" href="#">Entrar</a>
<a className="px-4 py-2 rounded-md text-sm font-medium bg-emerald-500/90 hover:bg-emerald-400 text-neutral-900 transition-colors" href="#cta">Experimente Grátis</a>
</div>
<button aria-label="Abrir menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5">
<i className="w-5 h-5 text-white" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-20 md:pb-28">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300 mb-4">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
            Sua assistente de futebol inteligente
          </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Dona Beth conhece tudo de futebol. E você?
          </h1>
<p className="mt-5 text-base sm:text-lg text-neutral-300">
            Estatísticas ao vivo, análises completas e probabilidades em tempo real. Pergunte sobre qualquer jogo, time ou jogador - do Brasileirão à Champions League.
          </p>
<div className="mt-8 flex flex-wrap gap-3">
<a className="px-5 py-3 rounded-md bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition-colors" href="#cta">Experimente Grátis</a>
<a className="px-5 py-3 rounded-md border border-white/15 text-white hover:bg-white/5 hover:border-white/25 transition-colors" href="#planos">Assine Premium</a>
</div>

<div className="mt-10 grid grid-cols-3 gap-3">
<img alt="Jogador chutando a bola" className="h-24 w-full object-cover rounded-md border border-white/10" src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Acrobacia no estádio" className="h-24 w-full object-cover rounded-md border border-white/10" src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Bola na rede" className="h-24 w-full object-cover rounded-md border border-white/10" src="https://images.unsplash.com/photo-1593349481022-c7e593a06d5c?q=80&amp;w=1080&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="relative">
<div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur p-4 md:p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-emerald-500/20 border border-emerald-400/30 grid place-content-center">
<i className="w-4.5 h-4.5 text-emerald-300" data-lucide="bot"></i>
</div>
<div>
<p className="text-sm font-medium text-white">Dona Beth</p>
<p className="text-xs text-neutral-400">Online agora</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="h-8 w-8 grid place-content-center rounded-md hover:bg-white/5 border border-white/10 hover:border-white/20">
<i className="w-4.5 h-4.5 text-neutral-200" data-lucide="phone"></i>
</button>
<button className="h-8 w-8 grid place-content-center rounded-md hover:bg-white/5 border border-white/10 hover:border-white/20">
<i className="w-4.5 h-4.5 text-neutral-200" data-lucide="share"></i>
</button>
</div>
</div>
<div className="mt-4 space-y-3">
<div className="flex gap-3">
<div className="h-9 w-9 rounded-md bg-white text-neutral-900 grid place-content-center font-medium">Você</div>
<div className="flex-1">
<div className="max-w-[90%] rounded-lg bg-white/10 border border-white/10 p-3">
<p className="text-sm text-white">"E aí Dona Beth, como tá o jogo do Mengão?"</p>
</div>
</div>
</div>
<div className="flex gap-3">
<div className="h-9 w-9 rounded-md bg-emerald-500/20 border border-emerald-400/30 grid place-content-center">
<i className="w-4.5 h-4.5 text-emerald-300" data-lucide="bot"></i>
</div>
<div className="flex-1">
<div className="max-w-[95%] rounded-lg bg-neutral-950/60 border border-white/10 p-3">
<div className="flex items-center justify-between">
<p className="text-sm font-medium text-white">Flamengo 1 x 0 Botafogo</p>
<span className="text-xs text-neutral-400">62'</span>
</div>
<div className="mt-2 flex items-center gap-4 text-xs text-neutral-300">
<span className="inline-flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="bar-chart-3"></i> xG 1.6 vs 0.7</span>
<span className="inline-flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="target"></i> Finalizações 9-5</span>
<span className="inline-flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="shield"></i> Cartões 1-2</span>
</div>
</div>
</div>
</div>
<div className="rounded-lg border border-emerald-400/20 bg-emerald-500/10 p-3">
<div className="flex items-center justify-between">
<p className="text-xs text-emerald-200">Probabilidades ao vivo</p>
<i className="w-4 h-4 text-emerald-300" data-lucide="activity"></i>
</div>
<div className="mt-2 grid grid-cols-3 gap-3 text-sm">
<div className="rounded-md bg-white/5 border border-white/10 p-2 text-center">
<p className="text-neutral-300">Flamengo</p>
<p className="font-medium text-white">48%</p>
</div>
<div className="rounded-md bg-white/5 border border-white/10 p-2 text-center">
<p className="text-neutral-300">Empate</p>
<p className="font-medium text-white">27%</p>
</div>
<div className="rounded-md bg-white/5 border border-white/10 p-2 text-center">
<p className="text-neutral-300">Adversário</p>
<p className="font-medium text-white">25%</p>
</div>
</div>
</div>
<div className="mt-3 flex gap-2">
<div className="flex-1">
<div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-md px-3 py-2">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="mic"></i>
<input className="bg-transparent outline-none text-sm placeholder:text-neutral-400 flex-1 text-white" placeholder="Pergunte sobre qualquer jogo, time ou jogador..." type="text"/>
<button className="inline-flex items-center gap-1 text-sm text-neutral-300 hover:text-white">
<i className="w-4.5 h-4.5" data-lucide="send"></i> Enviar
                    </button>
</div>
</div>
<button className="px-3 rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5">
<i className="w-4.5 h-4.5 text-neutral-200" data-lucide="waveform"></i>
</button>
</div>
</div>
</div>
<div className="absolute -right-6 -bottom-6 hidden md:block">
<div className="rounded-xl border border-white/10 bg-white/5 p-3 w-56">
<div className="flex items-center gap-2">
<img alt="Torcedor no estádio" className="h-10 w-10 rounded-md object-cover border border-white/10" src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402?q=80&amp;w=640&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-xs text-neutral-300">Prévias Inteligentes</p>
<p className="text-sm font-medium text-white">Saiba antes de assistir</p>
</div>
</div>
<ul className="mt-2 space-y-1.5 text-xs text-neutral-300">
<li className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="clock"></i> Forma recente</li>
<li className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="users"></i> Escalações</li>
<li className="inline-flex items-center gap-1.5"><i className="w-3.5 h-3.5" data-lucide="stethoscope"></i> Lesões</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="problemas">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-2xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Cansado de ficar por fora?</h2>
<p className="mt-3 text-neutral-300">A Dona Beth resolve tudo isso pra você.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="inline-flex items-center gap-2 text-rose-300">
<i className="w-4.5 h-4.5" data-lucide="x-circle"></i>
<span className="text-sm">Perdeu o gol enquanto checava o celular?</span>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="inline-flex items-center gap-2 text-rose-300">
<i className="w-4.5 h-4.5" data-lucide="x-circle"></i>
<span className="text-sm">Não sabe se vale a pena assistir o jogo?</span>
</div>
</div>
<div className="rounded-lg border border-white/10 bg-white/5 p-4">
<div className="inline-flex items-center gap-2 text-rose-300">
<i className="w-4.5 h-4.5" data-lucide="x-circle"></i>
<span className="text-sm">Quer saber as chances reais do seu time ganhar?</span>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="como-funciona">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Pergunte o que quiser sobre futebol</h2>
<p className="mt-3 text-neutral-300">"E aí Dona Beth, como tá o jogo do Mengão?"</p>
<p className="mt-2 text-neutral-300">Receba placar ao vivo, estatísticas e análises instantâneas. Em áudio ou texto - do jeito que você preferir.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-2 text-emerald-300">
<i className="w-5 h-5" data-lucide="mic"></i>
<p className="text-sm font-medium">Fale naturalmente</p>
</div>
<p className="mt-2 text-sm text-neutral-300">Use gírias, apelidos e o seu jeito de falar. Dona Beth entende "Fla", "Mengão", "Cortinas" e muito mais.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-2 text-sky-300">
<i className="w-5 h-5" data-lucide="bar-chart-3"></i>
<p className="text-sm font-medium">Dados que importam</p>
</div>
<p className="mt-2 text-sm text-neutral-300">Forma recente, retrospecto direto, escalações prováveis, lesões e estatísticas avançadas completas.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="inline-flex items-center gap-2 text-amber-300">
<i className="w-5 h-5" data-lucide="target"></i>
<p className="text-sm font-medium">Probabilidades reais</p>
</div>
<p className="mt-2 text-sm text-neutral-300">Saiba as chances de vitória, empate, gols e muito mais. Estimativas que se atualizam antes e durante o jogo.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="funcionalidades">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Funcionalidades</h2>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-300" data-lucide="radio"></i>
<p className="text-sm font-medium">Match Center Completo</p>
</div>
<p className="mt-1 text-xs text-neutral-300">Ao vivo quando acontece</p>
<p className="mt-2 text-sm text-neutral-300">Placar em tempo real, tempo de jogo e todos os eventos principais: gols, cartões, substituições.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-300" data-lucide="alarm-clock"></i>
<p className="text-sm font-medium">Prévias Inteligentes</p>
</div>
<p className="mt-1 text-xs text-neutral-300">Saiba antes de assistir</p>
<p className="mt-2 text-sm text-neutral-300">Forma recente dos times, histórico de confrontos diretos e tudo que você precisa para não perder tempo com jogo ruim.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-amber-300" data-lucide="line-chart"></i>
<p className="text-sm font-medium">Estatísticas Avançadas</p>
</div>
<p className="mt-1 text-xs text-neutral-300">Mais do que placar</p>
<p className="mt-2 text-sm text-neutral-300">Análises profundas de times, jogos e jogadores com dados que os comentaristas usam.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-emerald-300" data-lucide="trophy"></i>
<p className="text-sm font-medium">Todos os Campeonatos</p>
</div>
<p className="mt-1 text-xs text-neutral-300">Do Brasileirão à Champions</p>
<p className="mt-2 text-sm text-neutral-300">Brasileirão Séries A/B, Copa do Brasil, Libertadores, Champions League e as principais ligas europeias.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-rose-300" data-lucide="stethoscope"></i>
<p className="text-sm font-medium">Escalações e Lesões</p>
</div>
<p className="mt-1 text-xs text-neutral-300">Quem joga e quem fica de fora</p>
<p className="mt-2 text-sm text-neutral-300">Escalações prováveis antes do jogo e informações atualizadas sobre lesionados.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-sky-300" data-lucide="list-ordered"></i>
<p className="text-sm font-medium">Classificação Atualizada</p>
</div>
<p className="mt-1 text-xs text-neutral-300">Veja a tabela completa</p>
<p className="mt-2 text-sm text-neutral-300">Acompanhe a posição do seu time em todos os campeonatos.</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="exemplo">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Exemplo de Uso</h2>
<div className="mt-8 grid lg:grid-cols-2 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<p className="text-sm text-neutral-300"><span className="font-medium text-white">Você:</span> "Dona Beth, qual a chance do Flamengo ganhar hoje?"</p>
<div className="mt-4 rounded-lg border border-white/10 bg-neutral-950/60 p-4">
<p className="text-sm text-neutral-300"><span className="font-medium text-white">Dona Beth:</span> "Previsão (90'): Flamengo 48% • Empate 27% • Adversário 25%</p>
<p className="mt-2 text-sm text-neutral-400">Nota: A estimativa pré-jogo pode mudar com a escalação confirmada. Quer que eu te lembre 30 minutos antes do início?"</p>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-2 text-emerald-300">
<i className="w-5 h-5" data-lucide="bell-ring"></i>
<p className="text-sm font-medium">Lembretes antes do jogo</p>
</div>
<p className="mt-2 text-sm text-neutral-300">Receba alertas com escalações confirmadas, mudanças de odds e início da partida.</p>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="rounded-md border border-white/10 bg-neutral-900/50 p-3">
<p className="text-xs text-neutral-400">30 min</p>
<p className="text-sm font-medium text-white">Pré-jogo</p>
</div>
<div className="rounded-md border border-white/10 bg-neutral-900/50 p-3">
<p className="text-xs text-neutral-400">Ao vivo</p>
<p className="text-sm font-medium text-white">Gols</p>
</div>
<div className="rounded-md border border-white/10 bg-neutral-900/50 p-3">
<p className="text-xs text-neutral-400">FT</p>
<p className="text-sm font-medium text-white">Resumo</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="planos">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Planos</h2>
</div>
<div className="mt-8 grid md:grid-cols-2 gap-6">

<div className="rounded-xl border border-white/10 bg-white/5 p-6 flex flex-col">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Dona Beth Free</h3>
<span className="text-xs text-emerald-300 inline-flex items-center gap-1"><i className="w-4 h-4" data-lucide="sparkles"></i> Grátis para sempre</span>
</div>
<ul className="mt-5 space-y-2.5 text-sm text-neutral-200">
<li className="inline-flex items-start gap-2"><i className="w-4.5 h-4.5 text-emerald-300 mt-0.5" data-lucide="check"></i> Match Center ao vivo</li>
<li className="inline-flex items-start gap-2"><i className="w-4.5 h-4.5 text-emerald-300 mt-0.5" data-lucide="check"></i> Prévias básicas</li>
<li className="inline-flex items-start gap-2"><i className="w-4.5 h-4.5 text-emerald-300 mt-0.5" data-lucide="check"></i> Estatísticas completas</li>
<li className="inline-flex items-start gap-2"><i className="w-4.5 h-4.5 text-emerald-300 mt-0.5" data-lucide="check"></i> Todos os campeonatos</li>
<li className="inline-flex items-start gap-2"><i className="w-4.5 h-4.5 text-emerald-300 mt-0.5" data-lucide="check"></i> Escalações e lesões</li>
<li className="inline-flex items-start gap-2"><i className="w-4.5 h-4.5 text-emerald-300 mt-0.5" data-lucide="check"></i> Probabilidades</li>
<li className="inline-flex items-start gap-2 text-amber-300"><i className="w-4.5 h-4.5 mt-0.5" data-lucide="alert-circle"></i> Limite de requisições</li>
</ul>
<div className="mt-6">
<a className="inline-flex justify-center px-4 py-2 rounded-md border border-white/15 text-white hover:bgWHITE/5 hover:border-white/25 transition-colors text-sm" href="#cta">Começar Grátis</a>
</div>
</div>

<div className="relative rounded-xl border border-emerald-400/30 bg-gradient-to-b from-emerald-500/10 to-white/5 p-6 ring-1 ring-emerald-500/10">
<div className="absolute -top-3 right-4 text-[10px] uppercase tracking-wider px-2 py-1 rounded bg-emerald-500/20 border border-emerald-400/30 text-emerald-200">Recomendado</div>
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Dona Beth Premium</h3>
<span className="text-sm text-white">R$ XX,XX/mês</span>
</div>
<ul className="mt-5 space-y-2.5 text-sm text-neutral-200">
<li className="inline-flex items-start gap-2"><i className="w-4.5 h-4.5 text-emerald-300 mt-0.5" data-lucide="check"></i> Tudo do plano Free</li>
<li className="inline-flex items-start gap-2"><i className="w-4.5 h-4.5 text-emerald-300 mt-0.5" data-lucide="check"></i> Requisições ilimitadas</li>
<li className="inline-flex items-start gap-2"><i className="w-4.5 h-4.5 text-emerald-300 mt-0.5" data-lucide="check"></i> Funcionalidades exclusivas</li>
<li className="inline-flex items-start gap-2"><i className="w-4.5 h-4.5 text-emerald-300 mt-0.5" data-lucide="check"></i> Análises personalizadas</li>
<li className="inline-flex items-start gap-2"><i className="w-4.5 h-4.5 text-emerald-300 mt-0.5" data-lucide="check"></i> Alertas antes dos jogos</li>
<li className="inline-flex items-start gap-2"><i className="w-4.5 h-4.5 text-emerald-300 mt-0.5" data-lucide="check"></i> Suporte prioritário</li>
</ul>
<div className="mt-6">
<a className="inline-flex justify-center px-5 py-2.5 rounded-md bg-emerald-500/90 hover:bg-emerald-400 text-neutral-900 font-medium transition-colors text-sm" href="#cta">Assine Agora</a>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="depoimentos">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Depoimentos</h2>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="Carlos" className="h-10 w-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-white">Carlos</p>
<p className="text-xs text-neutral-400">Torcedor do Corinthians</p>
</div>
</div>
<p className="mt-3 text-sm text-neutral-300">"Melhor que ficar trocando de app. Pergunto e pronto, a Dona Beth me responde tudo."</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="Marina" className="h-10 w-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-white">Marina</p>
<p className="text-xs text-neutral-400">Fã de futebol europeu</p>
</div>
</div>
<p className="mt-3 text-sm text-neutral-300">"As probabilidades são muito precisas. Consigo decidir qual jogo assistir."</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-5">
<div className="flex items-center gap-3">
<img alt="João" className="h-10 w-10 rounded-full object-cover border border-white/10" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=256&amp;auto=format&amp;fit=crop"/>
<div>
<p className="text-sm font-medium text-white">João</p>
<p className="text-xs text-neutral-400">São-paulino</p>
</div>
</div>
<p className="mt-3 text-sm text-neutral-300">"Finalmente um app que entende quando eu falo 'Tricolor'!"</p>
</div>
</div>
</div>
</section>

<section className="border-t border-white/10" id="faq">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">FAQ</h2>
<div className="mt-8 space-y-3">
<details className="group rounded-lg border border-white/10 bg-white/5 p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-white">A Dona Beth funciona para qual campeonato?</span>
<i className="w-4.5 h-4.5 text-neutral-300 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">Para todos os principais: Brasileirão Séries A e B, Copa do Brasil, Libertadores, Champions League e as principais ligas europeias (Premier League, La Liga, Serie A, Bundesliga, Ligue 1).</p>
</details>
<details className="group rounded-lg border border-white/10 bg-white/5 p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-white">Posso usar por áudio?</span>
<i className="w-4.5 h-4.5 text-neutral-300 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">Sim! A Dona Beth entende áudio e responde da forma que você preferir.</p>
</details>
<details className="group rounded-lg border border-white/10 bg-white/5 p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-white">Como funcionam as probabilidades?</span>
<i className="w-4.5 h-4.5 text-neutral-300 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">Usamos modelos estatísticos avançados que consideram forma recente, histórico de confrontos, escalações e diversos outros fatores para calcular as chances reais de cada resultado.</p>
</details>
<details className="group rounded-lg border border-white/10 bg-white/5 p-4">
<summary className="flex items-center justify-between cursor-pointer list-none">
<span className="text-sm font-medium text-white">O plano Free tem tudo mesmo?</span>
<i className="w-4.5 h-4.5 text-neutral-300 transition-transform group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-neutral-300">Quase tudo! Você tem acesso a todas as funcionalidades principais, mas com um limite de requisições. Para uso ilimitado e recursos exclusivos, recomendamos o plano Premium.</p>
</details>
</div>
</div>
</section>

<section className="border-t border-white/10" id="cta">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
<div className="rounded-2xl border border-white/10 bg-[linear-gradient(to_right,rgba(16,185,129,0.14),rgba(16,185,129,0.06)_30%,rgba(23,23,23,0.4))] p-8 md:p-10">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-3xl md:text-4xl font-semibold tracking-tight">Pare de perder lance importante</h3>
<p className="mt-3 text-lg text-neutral-300">Experimente a Dona Beth gratuitamente</p>
<p className="mt-2 text-sm text-neutral-400">Sem cartão de crédito. Sem compromisso. Só futebol do jeito que você gosta.</p>
<div className="mt-6 flex flex-wrap gap-3">
<a className="px-5 py-3 rounded-md bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition-colors" href="#">Começar Agora - É Grátis</a>
<a className="px-5 py-3 rounded-md border border-white/15 text-white hover:bg-white/5 hover:border-white/25 transition-colors" href="#planos">Ver Planos</a>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-emerald-500/20 border border-emerald-400/30 grid place-content-center">
<i className="w-5 h-5 text-emerald-300" data-lucide="megaphone"></i>
</div>
<div>
<p className="text-sm font-medium text-white">Alertas ao seu estilo</p>
<p className="text-xs text-neutral-400">Escolha quando e como ser notificado</p>
</div>
</div>
<div className="mt-4 grid grid-cols-2 gap-3 text-sm">
<div className="rounded-md border border-white/10 bg-neutral-900/50 p-3">
<p className="text-neutral-300">Gols, cartões, VAR</p>
</div>
<div className="rounded-md border border-white/10 bg-neutral-900/50 p-3">
<p className="text-neutral-300">Odds e escalações</p>
</div>
<div className="rounded-md border border-white/10 bg-neutral-900/50 p-3">
<p className="text-neutral-300">Início/intervalo/final</p>
</div>
<div className="rounded-md border border-white/10 bg-neutral-900/50 p-3">
<p className="text-neutral-300">Resumo pós-jogo</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
<div className="grid md:grid-cols-4 gap-10">
<div>
<div className="inline-flex items-center gap-2">
<div className="h-8 w-8 rounded-md bg-white text-neutral-900 grid place-content-center font-semibold tracking-tight">DB</div>
<span className="text-sm text-neutral-300">Dona Beth</span>
</div>
<p className="mt-3 text-sm text-neutral-400">Sua assistente de futebol inteligente</p>
<div className="mt-4 flex items-center gap-3">
<a className="h-9 w-9 grid place-content-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" href="#">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="twitter"></i>
</a>
<a className="h-9 w-9 grid place-content-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" href="#">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="instagram"></i>
</a>
<a className="h-9 w-9 grid place-content-center rounded-md border border-white/10 hover:border-white/20 hover:bg-white/5" href="#">
<i className="w-4.5 h-4.5 text-neutral-300" data-lucide="linkedin"></i>
</a>
</div>
</div>
<div>
<p className="text-sm font-medium text-white">Empresa</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white" href="#">Sobre nós</a></li>
<li><a className="hover:text-white" href="#">Contato</a></li>
<li><a className="hover:text-white" href="#">Carreiras</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-white">Produto</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white" href="#funcionalidades">Funcionalidades</a></li>
<li><a className="hover:text-white" href="#planos">Planos</a></li>
<li><a className="hover:text-white" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<p className="text-sm font-medium text-white">Legal</p>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white" href="#">Termos de Uso</a></li>
<li><a className="hover:text-white" href="#">Política de Privacidade</a></li>
</ul>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<div className="text-xs text-neutral-400">
            CGM NEGÓCIOS ONLINE LTDA • CNPJ: 54.175.345/0001-05
          </div>
<div className="text-xs text-neutral-500">
            © 2025 Dona Beth. Todos os direitos reservados.
          </div>
</div>
</div>
</div>
</footer>




    </>
  );
}
