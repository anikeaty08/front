import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons with stroke width 1.5
      document.addEventListener('DOMContentLoaded', function () {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Signup Modal logic
      const signupModal = document.getElementById('signupModal');
      const signupOpeners = [
        document.getElementById('openSignup'),
        document.getElementById('openSignup2'),
        document.getElementById('openSignup3'),
        document.getElementById('openSignup4'),
        document.getElementById('openSignupNav')
      ];
      const signupCloser = document.getElementById('closeSignup');
      const signupOverlay = document.getElementById('modalOverlay');

      function openSignupModal() {
        signupModal.classList.remove('hidden');
        setTimeout(() => {
          document.getElementById('nome')?.focus();
        }, 50);
      }
      function closeSignupModal() {
        signupModal.classList.add('hidden');
      }
      signupOpeners.forEach(btn => btn && btn.addEventListener('click', (e) => { e.preventDefault?.(); openSignupModal(); }));
      signupCloser?.addEventListener('click', closeSignupModal);
      signupOverlay?.addEventListener('click', closeSignupModal);

      // Login Modal logic
      const loginModal = document.getElementById('loginModal');
      const loginOpeners = [
        document.getElementById('openLogin'),
        document.getElementById('openLoginHero'),
        document.getElementById('openLoginCta'),
        document.getElementById('openLoginNav')
      ];
      const loginCloser = document.getElementById('closeLogin');
      const loginOverlay = document.getElementById('loginModalOverlay');

      function openLoginModal() {
        loginModal.classList.remove('hidden');
        setTimeout(() => {
          document.getElementById('emailLoginModal')?.focus();
        }, 50);
      }
      function closeLoginModal() {
        loginModal.classList.add('hidden');
      }
      loginOpeners.forEach(btn => btn && btn.addEventListener('click', (e) => { e.preventDefault?.(); openLoginModal(); }));
      loginCloser?.addEventListener('click', closeLoginModal);
      loginOverlay?.addEventListener('click', closeLoginModal);

      // Global ESC to close any open modal
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          closeSignupModal();
          closeLoginModal();
        }
      });

      // Parallax + reveal for mockup
      (function () {
        const el = document.getElementById('mockupParallax');
        if (!el) return;

        function onScroll() {
          const rect = el.getBoundingClientRect();
          const vh = window.innerHeight || document.documentElement.clientHeight;

          // Progress from 0 (below viewport) to 1 (fully in view)
          const progress = Math.min(Math.max((vh - rect.top) / (vh + rect.height), 0), 1);

          const translate = 40 - progress * 40;       // 40px -> 0px
          const scale = 0.98 + progress * 0.02;       // 0.98 -> 1
          const opacity = Math.min(progress * 1.2, 1); // fade in a bit faster

          el.style.transform = `translateY(${translate.toFixed(1)}px) scale(${scale.toFixed(3)})`;
          el.style.opacity = opacity.toFixed(3);
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        // Initial call
        onScroll();
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"></div>
<div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:24px_24px] [mask-image:linear-gradient(to-bottom,transparent,black_20%,black_80%,transparent)]"></div>
</div>

<header className="sticky top-0 z-40 backdrop-blur bg-slate-950/70 border-b border-slate-800">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="OBNESS" className="h-8 w-auto" src="https://flyughatwfagmonhnmby.supabase.co/storage/v1/object/sign/Arquivos/Logo%20.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84MDBiZWRmZi02N2IwLTRjMjEtYjQ4Ny00ZTc1YzhhZWEwYTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBcnF1aXZvcy9Mb2dvIC5wbmciLCJpYXQiOjE3NjA2NTkxMzUsImV4cCI6MjA3NjAxOTEzNX0.xsN8zEWkSTSpGkqdyacQgypk3AWL2_T_Q11zCtRC9s4" style={{imageRendering: '-webkit-optimize-contrast'}}/>
<span className="sr-only">OBNESS</span>
</div>
<nav className="hidden md:flex items-center gap-7 text-sm text-slate-300">
<a className="hover:text-emerald-400 transition-colors" href="#diferenciais">Porque OBNESS?</a>
<a className="hover:text-emerald-400 transition-colors" href="#como-funciona">Como funciona</a>
<a className="hover:text-emerald-400 transition-colors" href="#tecnologia">Tecnologia</a>
<a className="hover:text-emerald-400 transition-colors" href="#contato">Contato</a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-md border border-slate-800/70 bg-slate-900/50 backdrop-blur px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-slate-800/60 hover:border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/40 transition" href="#" id="openLogin">
<i className="h-4 w-4" data-lucide="log-in"></i>
            Entrar na plataforma
          </a>
<button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98] transition" id="openSignup">
<i className="h-4 w-4" data-lucide="user-plus"></i>
            Cadastrar-se
          </button>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8 lg:pt-20 lg:pb-12">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div>
<h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight text-white">
              Negociação Binária 100% P2P. Justa e Transparente!
            </h1>
<p className="mt-3 text-lg text-slate-300">
              Na OBNESS você negocia a cor da próxima vela (verde ou vermelha) com base na sua análise. Não criamos liquidez própria e nunca atuamos como contraparte. Regras claras e zero manipulação.
            </p>
<div className="mt-8 flex flex-wrap items-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98] transition" id="openSignup2">
<i className="h-4 w-4" data-lucide="sparkles"></i>
                Cadastrar-se
              </button>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-800/70 bg-slate-900/50 backdrop-blur px-5 py-3 text-sm font-medium text-slate-200 hover:bg-slate-800/60 hover:border-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition" href="#" id="openLoginHero">
<i className="h-4 w-4" data-lucide="log-in"></i>
                Entrar na plataforma
              </a>
</div>
<div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
<span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-900/60 bg-emerald-950/30 backdrop-blur px-2.5 py-1 text-emerald-300">
<i className="h-3.5 w-3.5" data-lucide="shield"></i>
                Segurança e transparência
              </span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-900/60 bg-emerald-950/30 backdrop-blur px-2.5 py-1 text-emerald-300">
<i className="h-3.5 w-3.5" data-lucide="users"></i>
                P2P real entre traders
              </span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-900/60 bg-emerald-950/30 backdrop-blur px-2.5 py-1 text-emerald-300">
<i className="h-3.5 w-3.5" data-lucide="percent"></i>
                5% taxa por lado
              </span>
</div>
</div>

</div>
</div>
</section>

<section className="relative pt-2 pb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative max-w-4xl mx-auto">
<div className="absolute -inset-4 lg:-inset-6 rounded-2xl bg-emerald-500/10 blur-0"></div>
<div className="relative rounded-2xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-3 shadow-sm" id="mockupParallax" style={{transform: 'translateY(40px) scale(0.98)', opacity: '0', willChange: 'transform, opacity'}}>
<img alt="Mockup da plataforma OBNESS" className="w-full h-auto rounded-xl" src="https://flyughatwfagmonhnmby.supabase.co/storage/v1/object/sign/Arquivos/Mockup%20novo.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV84MDBiZWRmZi02N2IwLTRjMjEtYjQ4Ny00ZTc1YzhhZWEwYTEiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJBcnF1aXZvcy9Nb2NrdXAgbm92by5wbmciLCJpYXQiOjE3NjA2NjA5MDcsImV4cCI6MjA3NjAyMDkwN30.umNYuY-k9FWU6LE50kaqREZqzIpo9AOqjKUgp9tf9hk"/>

<div className="mt-3 rounded-lg border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-4 w-4" data-lucide="scan"></i>
<span className="text-sm font-medium">Equalizador de Liquidez</span>
</div>
<span className="text-xs text-slate-400">Validação final</span>
</div>
<div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-800/60">
<div className="h-full w-1/3 bg-emerald-500 animate-pulse"></div>
</div>
</div>
</div>

<div className="absolute -bottom-4 left-6 right-6 mx-auto grid grid-cols-3 gap-3">
<div className="rounded-lg border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-3 shadow-sm">
<div className="text-xs text-slate-400">Green</div>
<div className="mt-1 text-sm font-medium text-emerald-300">R$ 54.200</div>
</div>
<div className="rounded-lg border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-3 shadow-sm">
<div className="text-xs text-slate-400">Red</div>
<div className="mt-1 text-sm font-medium text-emerald-300">R$ 53.100</div>
</div>
<div className="rounded-lg border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-3 shadow-sm">
<div className="text-xs text-slate-400">Taxa (5%)</div>
<div className="mt-1 text-sm font-medium text-emerald-300">R$ 5.362</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative pt-20" id="diferenciais">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-white">Porque OBNESS?</h2>
<p className="mt-3 text-slate-300">
          Criamos um ambiente de negociação binária onde cada operação é pareada entre traders reais. Sem mesas de operação internas, sem “requotes” e sem bloqueios.
        </p>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="rounded-xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-5">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="globe"></i>
<span className="text-sm font-medium">Preço público</span>
</div>
<p className="mt-2 text-sm text-slate-300">
              Baseado no BTC/USDT de fonte pública, com conferência aberta.
            </p>
</div>
<div className="rounded-xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-5">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="ban"></i>
<span className="text-sm font-medium">Sem contraparte</span>
</div>
<p className="mt-2 text-sm text-slate-300">
              O sistema apenas pareia. Nunca opera contra você.
            </p>
</div>
<div className="rounded-xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-5">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="percent"></i>
<span className="text-sm font-medium">Taxa simples</span>
</div>
<p className="mt-2 text-sm text-slate-300">
              5% por lado, sem letras miúdas.
            </p>
</div>
<div className="rounded-xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-5">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="wallet"></i>
<span className="text-sm font-medium">Saque ágil</span>
</div>
<p className="mt-2 text-sm text-slate-300">
              Processamento rápido, com autenticação reforçada.
            </p>
</div>
</div>

<div className="mt-8 rounded-xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-5">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="badge-check"></i>
<span className="text-sm font-medium">Transparência técnica</span>
</div>
<ul className="mt-3 space-y-2 text-sm text-slate-300">
<li className="flex gap-2">
<i className="h-4 w-4 text-emerald-400 mt-0.5" data-lucide="scan"></i>
              IA Equalizer Orders atua apenas nos 5s finais para equilibrar ordens, devolvendo excedentes.
            </li>
<li className="flex gap-2">
<i className="h-4 w-4 text-emerald-400 mt-0.5" data-lucide="chart-line"></i>
              Preço conferível publicamente (BTC/USDT). Zero manipulação.
            </li>
<li className="flex gap-2">
<i className="h-4 w-4 text-emerald-400 mt-0.5" data-lucide="file-check"></i>
              Regras claras e auditáveis. Sem bloqueios na hora do saque.
            </li>
</ul>
</div>
</div>
</section>

<section className="relative pt-20" id="como-funciona">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-white">Como funciona</h2>
<div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
<div className="rounded-xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-5">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="banknote"></i>
<span className="text-sm font-medium">1. Deposite</span>
</div>
<span className="text-xs text-slate-400">USDT/bancário</span>
</div>
<p className="mt-2 text-sm text-slate-300">
              Deposite saldo (USDT ou método bancário) e verifique sua conta.
            </p>
</div>
<div className="rounded-xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-5">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="candlestick-chart"></i>
<span className="text-sm font-medium">2. Analise</span>
</div>
<p className="mt-2 text-sm text-slate-300">
              Escolha o ativo e defina a cor da próxima vela (verde/vermelha).
            </p>
</div>
<div className="rounded-xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-5">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="users"></i>
<span className="text-sm font-medium">3. Negocie</span>
</div>
<p className="mt-2 text-sm text-slate-300">
              Pareamento P2P. Quem acerta leva 100% do resultado. Cada trader paga 5% de taxa.
            </p>
</div>
<div className="rounded-xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-5">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="move-right"></i>
<span className="text-sm font-medium">4. Saque</span>
</div>
<p className="mt-2 text-sm text-slate-300">
              Saque rápido e seguro com fator de autenticação. Sem burocracia.
            </p>
</div>
</div>
</div>
</section>

<section className="relative pt-20" id="tecnologia">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl font-semibold tracking-tight text-white">Tecnologia OBNESS</h2>
<p className="mt-3 text-slate-300">
          Nossa IA AI Equalizer Orders atua nos últimos 5 segundos da vela, equilibrando as negociações e devolvendo valores excedentes aos traders. Tudo baseado no gráfico público BTC/USDT — sem manipulação e com total transparência.
        </p>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-6">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="clock"></i>
<span className="text-sm font-medium">Janela inteligente</span>
</div>
<p className="mt-3 text-sm text-slate-300">
              Atuação apenas quando necessário, preservando a dinâmica de mercado.
            </p>
</div>
<div className="rounded-xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-6">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="scale"></i>
<span className="text-sm font-medium">Equalização justa</span>
</div>
<p className="mt-3 text-sm text-slate-300">
              Rebalanceamento evita assimetrias e devolve excedentes automaticamente.
            </p>
</div>
<div className="rounded-xl border border-slate-800/70 bg-slate-900/50 backdrop-blur-sm p-6">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="fingerprint"></i>
<span className="text-sm font-medium">Integridade de dados</span>
</div>
<p className="mt-3 text-sm text-slate-300">
              Auditoria de eventos e trilhas de verificação para cada rodada.
            </p>
</div>
</div>
</div>
</section>

<section className="relative pb-24 pt-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative rounded-2xl border border-white/20 bg-white/10 backdrop-blur-2xl backdrop-saturate-150 p-8 sm:p-10 text-center shadow-xl ring-1 ring-white/20">
<div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl" style="background:
              linear-gradient(to bottom, rgba(255,255,255,0.10), rgba(255,255,255,0.00) 35%),
              radial-gradient(1200px 300px at 50% -10%, rgba(16,185,129,0.12), transparent 60%),
              radial-gradient(800px 200px at 10% 110%, rgba(59,130,246,0.10), transparent 60%);"></div>
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Pronto para negociar com justiça?
          </h3>
<p className="mt-2 text-slate-200/90">
            Trader contra trader. Sem bloqueios, sem truques.
          </p>
<div className="mt-6 flex items-center justify-center gap-3">
<button className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98] transition" id="openSignup4">
<i className="h-4 w-4" data-lucide="user-plus"></i>
              Cadastrar-se
            </button>
<a className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 backdrop-blur px-5 py-3 text-sm font-medium text-slate-100 hover:bg-white/15 hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition" href="#" id="openLoginCta">
<i className="h-4 w-4" data-lucide="log-in"></i>
              Entrar na plataforma
            </a>
</div>
</div>
</div>
</section>

<footer className="border-t border-slate-800 py-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-400" id="contato">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-400" data-lucide="mail"></i>
            suporte@obness.com
          </div>
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-emerald-400" data-lucide="clock"></i>
            Atendimento 24/7
          </div>
</div>
</div>
</footer>

<div className="hidden fixed inset-0 z-50" id="signupModal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" id="modalOverlay"></div>
<div className="relative mx-auto max-w-lg mt-16 sm:mt-24">
<div className="mx-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 backdrop-blur shadow-xl">
<div className="flex items-center justify-between border-b border-slate-800/70 px-5 py-4">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="user-plus"></i>
<h4 className="text-base font-semibold tracking-tight text-white">Criar conta</h4>
</div>
<button className="rounded-md p-2 text-slate-400 hover:text-emerald-300 hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400" id="closeSignup">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<form className="px-5 py-5 grid gap-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-sm font-medium text-slate-200" htmlFor="nome">Nome completo</label>
<input className="mt-2 w-full rounded-md border border-slate-800 bg-slate-950/80 backdrop-blur px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" id="nome" name="nome" placeholder="Seu nome" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-200" htmlFor="email">E-mail</label>
<input className="mt-2 w-full rounded-md border border-slate-800 bg-slate-950/80 backdrop-blur px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" id="email" name="email" placeholder="voce@exemplo.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-200" htmlFor="senha">Senha</label>
<input className="mt-2 w-full rounded-md border border-slate-800 bg-slate-950/80 backdrop-blur px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" id="senha" name="senha" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center gap-2 rounded-md border border-slate-800/70 bg-slate-900/50 backdrop-blur p-3">
<i className="h-4 w-4 text-emerald-400" data-lucide="shield-lock"></i>
<p className="text-xs text-slate-300">
                Ative a autenticação em dois fatores após o cadastro para proteger sua conta.
              </p>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98] transition" type="submit">
<i className="h-4 w-4" data-lucide="check"></i>
              Criar conta
            </button>
<p className="text-xs text-slate-400">
              Ao continuar, você concorda com os Termos de Uso e a Política de Privacidade.
            </p>
</form>
</div>
</div>
</div>

<div className="hidden fixed inset-0 z-50" id="loginModal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" id="loginModalOverlay"></div>
<div className="relative mx-auto max-w-lg mt-16 sm:mt-24">
<div className="mx-4 rounded-2xl border border-slate-800/70 bg-slate-900/60 backdrop-blur shadow-xl">
<div className="flex items-center justify-between border-b border-slate-800/70 px-5 py-4">
<div className="flex items-center gap-2 text-emerald-300">
<i className="h-5 w-5" data-lucide="log-in"></i>
<h4 className="text-base font-semibold tracking-tight text-white">Entrar</h4>
</div>
<button className="rounded-md p-2 text-slate-400 hover:text-emerald-300 hover:bg-slate-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400" id="closeLogin">
<i className="h-4 w-4" data-lucide="x"></i>
</button>
</div>
<form className="px-5 py-5 grid gap-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-sm font-medium text-slate-200" htmlFor="emailLoginModal">E-mail</label>
<input className="mt-2 w-full rounded-md border border-slate-800 bg-slate-950/80 backdrop-blur px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" id="emailLoginModal" name="emailLoginModal" placeholder="voce@exemplo.com" required="" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-200" htmlFor="senhaLoginModal">Senha</label>
<input className="mt-2 w-full rounded-md border border-slate-800 bg-slate-950/80 backdrop-blur px-3.5 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20" id="senhaLoginModal" name="senhaLoginModal" placeholder="••••••••" required="" type="password"/>
</div>
<div className="flex items-center justify-between">
<a className="text-xs text-slate-400 hover:text-emerald-400" href="#">Esqueci minha senha</a>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-[0.98] transition" type="submit">
<i className="h-4 w-4" data-lucide="log-in"></i>
              Entrar
            </button>
</form>
</div>
</div>
</div>


    </>
  );
}
