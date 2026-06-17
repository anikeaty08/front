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



      // Init lucide
      lucide.createIcons();

      // Cursor glow tracker
      const glow = document.getElementById('cursorGlow');
      window.addEventListener('pointermove', (e) => {
        const x = e.clientX - 160;
        const y = e.clientY - 160;
        glow.style.transform = `translate(${x}px, ${y}px)`;
      });

      // Chart.js configs
      const textColor = 'rgba(255,255,255,0.8)';
      const gridColor = 'rgba(255,255,255,0.08)';

      const lineCtx = document.getElementById('linePerf').getContext('2d');
      const gradient = lineCtx.createLinearGradient(0, 0, 0, 200);
      gradient.addColorStop(0, 'rgba(99,102,241,0.35)');
      gradient.addColorStop(1, 'rgba(99,102,241,0.02)');
      new Chart(lineCtx, {
        type: 'line',
        data: {
          labels: ['J-30', 'J-25', 'J-20', 'J-15', 'J-10', 'J-5', 'J'],
          datasets: [{
            label: 'Rendement',
            data: [0, 1.2, 2.0, 1.4, 3.1, 4.0, 4.8],
            fill: true,
            borderColor: 'rgba(129,140,248,1)',
            backgroundColor: gradient,
            tension: 0.35,
            pointRadius: 0,
            borderWidth: 2
          }]
        },
        options: {
          plugins: { legend: { display: false } },
          scales: {
            x: { ticks: { color: textColor }, grid: { color: gridColor } },
            y: { ticks: { color: textColor }, grid: { color: gridColor } }
          }
        }
      });

      const pieCtx = document.getElementById('pieAlloc').getContext('2d');
      new Chart(pieCtx, {
        type: 'doughnut',
        data: {
          labels: ['L1', 'L2', 'Stables', 'DeFi'],
          datasets: [{
            data: [35, 25, 20, 20],
            backgroundColor: [
              'rgba(99,102,241,0.9)',
              'rgba(236,72,153,0.9)',
              'rgba(16,185,129,0.9)',
              'rgba(14,165,233,0.9)'
            ],
            borderWidth: 0
          }]
        },
        options: {
          cutout: '62%',
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });

      // Subtle reveal on scroll
      const revealEls = document.querySelectorAll('section, .rounded-2xl, .rounded-3xl');
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('transition', 'duration-700');
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });

      revealEls.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(16px)';
        io.observe(el);
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
      

<div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
<div className="absolute -top-24 -right-20 w-[42rem] h-[42rem] rounded-full bg-gradient-to-br from-indigo-500/30 via-violet-500/25 to-sky-400/20 blur-3xl" style={{animation: 'glowPulse 9s ease-in-out infinite'}}></div>
<div className="absolute -bottom-40 -left-20 w-[46rem] h-[46rem] rounded-full bg-gradient-to-tr from-fuchsia-500/20 via-purple-500/20 to-blue-500/20 blur-3xl" style={{animation: 'glowPulse 10s ease-in-out infinite reverse'}}></div>
<div className="absolute w-80 h-80 rounded-full bg-[radial-gradient(circle_at_center,rgba(80,140,255,0.25),rgba(15,20,40,0))] blur-2xl mix-blend-screen" id="cursorGlow" style={{transform: 'translate(-9999px,-9999px)'}}></div>
</div>

<header className="sticky top-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-3 sm:px-6 shadow-[0_10px_50px_-10px_rgba(99,102,241,0.35)]">
<a className="flex items-center gap-3" href="#">
<div className="relative">
<div className="absolute inset-0 rounded-full bg-indigo-500/30 blur"></div>
<div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 shadow-lg shadow-indigo-500/40 ring-1 ring-white/10">
<i className="h-5 w-5 text-white" data-lucide="orbit"></i>
</div>
</div>
<span className="text-lg sm:text-xl font-semibold tracking-tight">NebulaX</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
<a className="hover:text-white transition-colors" href="#vision">Vision</a>
<a className="hover:text-white transition-colors" href="#produit">Produit</a>
<a className="hover:text-white transition-colors" href="#marches">Marchés</a>
<a className="hover:text-white transition-colors" href="#roadmap">Feuille de route</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-sm font-medium text-white/90 hover:bg-white/10 transition shadow-lg shadow-black/20">
<i className="h-4 w-4" data-lucide="file-text"></i>
              Livre blanc
            </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2.5 text-sm font-semibold tracking-tight text-white shadow-[0_10px_30px_-5px_rgba(99,102,241,0.6)] hover:brightness-110 transition">
<i className="h-4 w-4" data-lucide="zap"></i>
              Commencer
            </button>
</div>
</div>
</div>
</header>

<section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 opacity-[.18]" style={{backgroundImage: 'url(\'https://images.unsplash.com/photo-1639322537231-2f206e06af84?auto=format&amp', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#0a0e18]/60 via-[#0a0e18]/75 to-[#0a0e18]"></div>
<div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-t from-black/20 to-transparent blur-2xl"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
<div className="lg:col-span-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur">
<i className="h-3.5 w-3.5" data-lucide="shield"></i>
              Sécurité de niveau institutionnel
            </div>
<h1 className="mt-5 text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05]">
              Investissez dans la prochaine ère des actifs numériques
            </h1>
<p className="mt-5 text-base sm:text-lg text-white/70">
              Infrastructure DeFi unifiée, exécution fulgurante et accès multi-chaînes. Générez du rendement durable avec transparence on-chain et outils d’analyse avancés.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold tracking-tight text-white shadow-[0_20px_50px_-15px_rgba(139,92,246,0.6)] hover:brightness-110 transition">
<i className="h-4 w-4" data-lucide="rocket"></i>
                Lancer l’app
              </button>
<button className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10 transition shadow-lg shadow-black/20">
<i className="h-4 w-4" data-lucide="play-circle"></i>
                Démo en 90s
              </button>
</div>

<div className="mt-10 grid grid-cols-3 gap-4 sm:gap-6">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(59,130,246,0.25)]">
<p className="text-xs text-white/60">TVL agrégée</p>
<p className="mt-1 text-2xl font-semibold tracking-tight">1,2 Md$</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(139,92,246,0.25)]">
<p className="text-xs text-white/60">Rendement moyen</p>
<p className="mt-1 text-2xl font-semibold tracking-tight">8,7% APY</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(236,72,153,0.25)]">
<p className="text-xs text-white/60">Utilisateurs</p>
<p className="mt-1 text-2xl font-semibold tracking-tight">340k+</p>
</div>
</div>
</div>

<div className="lg:col-span-6">
<div className="relative card3d">
<div className="absolute -top-10 -left-6 h-44 w-44 rounded-full bg-indigo-500/20 blur-3xl" style={{animation: 'glowPulse 8s ease-in-out infinite'}}></div>
<div className="absolute -bottom-8 -right-6 h-52 w-52 rounded-full bg-fuchsia-500/20 blur-3xl" style={{animation: 'glowPulse 8.5s ease-in-out infinite reverse'}}></div>
<div className="relative mx-auto max-w-md">

<div className="relative">
<div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-white/10 to-white/0 blur-xl"></div>
<div className="relative rounded-[28px] border border-white/10 bg-white/[0.06] backdrop-blur-2xl p-6 shadow-[0_30px_80px_-20px_rgba(99,102,241,0.35)]" style={{animation: 'float 7s ease-in-out infinite'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 flex items-center justify-center shadow-lg shadow-indigo-500/40 ring-1 ring-white/10">
<i className="h-5 w-5" data-lucide="coins"></i>
</div>
<div>
<p className="text-sm text-white/70">Pool multi-chaînes</p>
<p className="text-lg font-semibold tracking-tight">Nebula Yield</p>
</div>
</div>
<span className="rounded-full bg-emerald-500/15 text-emerald-300 text-xs px-2 py-1 ring-1 ring-emerald-400/30">+3.2%</span>
</div>
<div className="mt-5 rounded-xl bg-gradient-to-br from-white/10 to-transparent p-4">
<div className="flex items-center gap-4">
<div className="flex -space-x-2">
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<img alt="" className="h-7 w-7 rounded-full ring-2 ring-white/10" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
</div>
<div className="text-xs text-white/60">Diversifié: L1, L2, Stables</div>
</div>
</div>
</div>
</div>
<div className="relative -mt-6 pl-8">
<div className="relative rounded-[26px] border border-white/10 bg-white/[0.05] backdrop-blur-2xl p-6 shadow-[0_30px_80px_-20px_rgba(236,72,153,0.35)]" style={{animation: 'float 8s ease-in-out infinite 0.3s'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center shadow-lg shadow-pink-500/40 ring-1 ring-white/10">
<i className="h-5 w-5" data-lucide="shield-check"></i>
</div>
<div>
<p className="text-sm text-white/70">Couvertures &amp; risques</p>
<p className="text-lg font-semibold tracking-tight">ProtecLayer</p>
</div>
</div>
<span className="rounded-full bg-sky-500/15 text-sky-300 text-xs px-2 py-1 ring-1 ring-sky-400/30">On-chain</span>
</div>
<p className="mt-4 text-sm text-white/70">
                      Oracles, audits continus et mécanismes d’arrêt d’urgence automatisés.
                    </p>
</div>
</div>
<div className="relative -mt-6 pr-8">
<div className="relative rounded-[26px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 shadow-[0_30px_80px_-20px_rgba(56,189,248,0.35)]" style={{animation: 'float 7.5s ease-in-out infinite 0.6s'}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-sky-500/40 ring-1 ring-white/10">
<i className="h-5 w-5" data-lucide="globe-2"></i>
</div>
<div>
<p className="text-sm text-white/70">Accès marchés</p>
<p className="text-lg font-semibold tracking-tight">Cross-Chain</p>
</div>
</div>
<span className="rounded-full bg-white/10 text-white/80 text-xs px-2 py-1 ring-1 ring-white/15">L1 • L2</span>
</div>
<p className="mt-4 text-sm text-white/70">
                      Routing intelligent entre réseaux pour optimiser coût et latence.
                    </p>
</div>
</div>

<div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(99,102,241,.3),rgba(236,72,153,.25),rgba(14,165,233,.25),rgba(99,102,241,.3))] blur-2xl opacity-70" style={{animation: 'softSpin 18s linear infinite'}}></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-24" id="vision">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-6">
<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] transition hover:bg-white/10">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center ring-1 ring-white/10 shadow-lg shadow-indigo-500/30">
<i className="h-5 w-5" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight">Moteur quantifié</h3>
</div>
<p className="mt-3 text-sm text-white/70">
              Optimise les entrées/sorties via signaux multi-horizons, risques paramétrés et backtests publics.
            </p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] transition hover:bg-white/10">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center ring-1 ring-white/10 shadow-lg shadow-emerald-500/30">
<i className="h-5 w-5" data-lucide="lock"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight">Sécurité avancée</h3>
</div>
<p className="mt-3 text-sm text-white/70">
              Coffres non-dépositaires, clés multi-sig et surveillance en temps réel des anomalies.
            </p>
</div>
<div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_20px_60px_-20px_rgba(0,0,0,0.5)] transition hover:bg-white/10">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-500 flex items-center justify-center ring-1 ring-white/10 shadow-lg shadow-sky-500/30">
<i className="h-5 w-5" data-lucide="activity"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight">Transparence totale</h3>
</div>
<p className="mt-3 text-sm text-white/70">
              Tableaux de bord publics, transactions traçables et audits communautaires permanents.
            </p>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-24" id="produit">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="order-2 lg:order-1">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Performance et répartition en direct</h2>
<p className="mt-3 text-white/70">
              Suivez la composition du portefeuille et les rendements annualisés. Nos stratégies adaptatives visent un équilibre optimal entre croissance et protection.
            </p>
<div className="mt-6 flex items-center gap-4 text-sm text-white/70">
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-indigo-400 ring-2 ring-indigo-400/40"></span> L1
              </div>
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-fuchsia-400 ring-2 ring-fuchsia-400/40"></span> L2
              </div>
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-emerald-400/40"></span> Stables
              </div>
<div className="flex items-center gap-2">
<span className="inline-block h-2 w-2 rounded-full bg-cyan-400 ring-2 ring-cyan-400/40"></span> DeFi
              </div>
</div>
</div>
<div className="order-1 lg:order-2">
<div className="relative rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_25px_80px_-25px_rgba(0,0,0,0.6)]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-white/70">
<i className="h-4 w-4" data-lucide="line-chart"></i> Indicateurs
                </div>
<div className="flex items-center gap-2">
<button className="text-xs rounded-full bg-white/10 px-2 py-1 text-white/80 ring-1 ring-white/15">24h</button>
<button className="text-xs rounded-full bg-white/10 px-2 py-1 text-white/80 ring-1 ring-white/15">7j</button>
<button className="text-xs rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-2 py-1 text-white ring-1 ring-white/20">30j</button>
</div>
</div>
<div className="mt-4 grid md:grid-cols-2 gap-6">

<div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-3">
<div className="relative h-56">
<div className="absolute inset-0">
<canvas id="linePerf"></canvas>
</div>
</div>
</div>
<p className="mt-2 text-xs text-white/60">Historique de performance (rendement cumulé)</p>
</div>
<div>
<div className="rounded-2xl border border-white/10 bg-white/5 p-3">
<div className="relative h-56">
<div className="absolute inset-0">
<canvas id="pieAlloc"></canvas>
</div>
</div>
</div>
<p className="mt-2 text-xs text-white/60">Répartition du portefeuille</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-10 rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/15 via-violet-500/10 to-fuchsia-500/15 p-6 sm:p-8 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(99,102,241,0.35)]">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Accédez à des stratégies testées et auditées</h3>
<p className="mt-1 text-sm text-white/70">Codes sources vérifiés, tableaux de bord publics, métriques claires — pas de boîtes noires.</p>
</div>
<div className="flex gap-3">
<button className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-medium hover:bg-white/15 transition">
<i className="h-4 w-4" data-lucide="github"></i>
                Repository
              </button>
<button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-cyan-500 px-4 py-2.5 text-sm font-semibold tracking-tight shadow-[0_20px_50px_-15px_rgba(14,165,233,0.5)] hover:brightness-110 transition">
<i className="h-4 w-4" data-lucide="shield"></i>
                Audits
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-24" id="marches">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Accès global aux marchés</h2>
<p className="mt-2 text-white/70">Une couche d’agrégation pour capter la meilleure liquidité au meilleur prix.</p>
</div>
<div className="hidden md:flex items-center gap-2 text-sm text-white/70">
<i className="h-4 w-4" data-lucide="server"></i> 21 réseaux connectés
          </div>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_70px_-30px_rgba(0,0,0,0.7)] group">
<img alt="" className="h-44 w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-white/60">
<i className="h-4 w-4" data-lucide="layers"></i> L2 Scaling
              </div>
<h3 className="mt-2 text-xl font-semibold tracking-tight">Exécution éclair</h3>
<p className="mt-1 text-sm text-white/70">Routes optimisées, frais réduits, confirmations rapides.</p>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_70px_-30px_rgba(0,0,0,0.7)] group">
<img alt="" className="h-44 w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-white/60">
<i className="h-4 w-4" data-lucide="candlestick-chart"></i> DeFi Yield
              </div>
<h3 className="mt-2 text-xl font-semibold tracking-tight">Rendements durables</h3>
<p className="mt-1 text-sm text-white/70">Stratégies modulaires, gestion des risques intégrée.</p>
</div>
</div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_25px_70px_-30px_rgba(0,0,0,0.7)] group">
<img alt="" className="h-44 w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-90" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
<div className="p-5">
<div className="flex items-center gap-2 text-xs text-white/60">
<i className="h-4 w-4" data-lucide="network"></i> Cross-Chain
              </div>
<h3 className="mt-2 text-xl font-semibold tracking-tight">Interopérabilité native</h3>
<p className="mt-1 text-sm text-white/70">Ponts sécurisés et agrégation en temps réel.</p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-24" id="roadmap">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Feuille de route</h2>
<div className="mt-8 relative">
<div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-white/15 to-white/10"></div>
<div className="space-y-8">

<div className="relative sm:flex gap-8">
<div className="flex items-center gap-3 sm:w-1/2 sm:justify-end sm:text-right">
<span className="hidden sm:inline text-sm text-white/60">T1 2025</span>
<div className="h-8 w-8 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 shadow-lg shadow-indigo-500/40"></div>
</div>
<div className="sm:w-1/2">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
<h3 className="text-xl font-semibold tracking-tight">Lancement du moteur quantifié v2</h3>
<p className="mt-1 text-sm text-white/70">Nouveaux signaux macro, régimes de volatilité et exécution adaptative.</p>
</div>
</div>
</div>

<div className="relative sm:flex gap-8">
<div className="flex items-center gap-3 sm:w-1/2 sm:justify-end sm:text-right">
<span className="hidden sm:inline text-sm text-white/60">T2 2025</span>
<div className="h-8 w-8 rounded-full bg-fuchsia-500 ring-4 ring-fuchsia-500/20 shadow-lg shadow-fuchsia-500/40"></div>
</div>
<div className="sm:w-1/2">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
<h3 className="text-xl font-semibold tracking-tight">Bridge propriétaire sécurisé</h3>
<p className="mt-1 text-sm text-white/70">Preuves légères et monitoring en direct.</p>
</div>
</div>
</div>

<div className="relative sm:flex gap-8">
<div className="flex items-center gap-3 sm:w-1/2 sm:justify-end sm:text-right">
<span className="hidden sm:inline text-sm text-white/60">T3 2025</span>
<div className="h-8 w-8 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20 shadow-lg shadow-emerald-500/40"></div>
</div>
<div className="sm:w-1/2">
<div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
<h3 className="text-xl font-semibold tracking-tight">Stratégies LSD &amp; restaking</h3>
<p className="mt-1 text-sm text-white/70">Optimisation du rendement avec garanties dynamiques.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 sm:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8 sm:p-12 backdrop-blur-2xl">
<div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500/30 to-fuchsia-500/30 blur-3xl" style={{animation: 'glowPulse 9s ease-in-out infinite'}}></div>
<div className="relative">
<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
<div className="max-w-2xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Prêt à explorer NebulaX ?</h2>
<p className="mt-2 text-white/70">Rejoignez la communauté et accédez à l’app dès aujourd’hui.</p>
</div>
<form className="w-full max-w-md">
<div className="flex items-center gap-3">
<div className="flex-1 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white/90 placeholder-white/50 backdrop-blur-xl">
<input className="w-full bg-transparent outline-none placeholder-white/50" placeholder="Votre e-mail" required="" type="email"/>
</div>
<button className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold tracking-tight shadow-[0_20px_50px_-15px_rgba(99,102,241,0.6)] hover:brightness-110 transition">
<i className="h-4 w-4" data-lucide="send"></i>
                    Rejoindre
                  </button>
</div>
<p className="mt-2 text-xs text-white/60">En vous inscrivant, vous acceptez notre politique de confidentialité.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
<div className="flex items-center gap-2 text-sm text-white/70">
<i className="h-4 w-4" data-lucide="info"></i>
            Avertissement
          </div>
<p className="mt-2 text-xs text-white/60">
            Les cryptoactifs présentent un risque de perte partielle ou totale. Faites vos propres recherches et n’investissez que ce que vous êtes prêt à perdre.
          </p>
</div>
<footer className="mt-10 border-t border-white/10 pt-8 pb-12" id="contact">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center ring-1 ring-white/10">
<i className="h-4 w-4" data-lucide="orbit"></i>
</div>
<p className="text-sm text-white/70">© 2025 NebulaX. Tous droits réservés.</p>
</div>
<div className="flex items-center gap-5 text-sm text-white/70">
<a className="hover:text-white transition" href="#">Communauté</a>
<a className="hover:text-white transition" href="#">Support</a>
<a className="hover:text-white transition" href="#">Confidentialité</a>
<a className="hover:text-white transition" href="#">Contrats</a>
</div>
</div>
</footer>
</div>
</section>





    </>
  );
}
