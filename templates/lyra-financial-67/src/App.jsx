import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icons
      lucide.createIcons();

      // Progress bar (loading + scroll)
      const progress = document.getElementById('progress');
      let loaded = false;
      const setScrollProgress = () => {
        const h = document.documentElement;
        const st = h.scrollTop || document.body.scrollTop;
        const sh = h.scrollHeight - h.clientHeight;
        const p = (st / sh) * 100;
        progress.style.width = p + '%';
      };
      window.addEventListener('load', () => {
        loaded = true;
        progress.style.width = '22%';
        setTimeout(() => { progress.style.width = '100%'; }, 250);
        setTimeout(() => { progress.style.opacity = '0'; }, 900);
      });
      window.addEventListener('scroll', () => {
        if (loaded) { progress.style.opacity = '1'; setScrollProgress(); }
      });

      // Parallax
      const hero = document.getElementById('hero-bg');
      window.addEventListener('scroll', () => {
        const y = window.scrollY * 0.15;
        hero.style.setProperty('--py', y + 'px');
      });

      // Scroll animations
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('anim-in');
            // Assemble submodules if container
            if (e.target.querySelectorAll('[data-assemble]').length) {
              const items = e.target.querySelectorAll('[data-assemble]');
              items.forEach((el, i) => {
                setTimeout(() => {
                  el.style.transition = 'all .8s cubic-bezier(.2,.8,.2,1)';
                  el.style.opacity = '1';
                  el.style.transform = 'translateY(0)';
                }, 180 * i);
              });
            }
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.16 });
      document.querySelectorAll('[data-animate]').forEach(el => {
        el.classList.add('anim-init'); io.observe(el);
      });

      // Chart.js
      const ctx = document.getElementById('revChart');
      const grd = ctx.getContext('2d').createLinearGradient(0,0,0,180);
      grd.addColorStop(0, 'rgba(201,169,106,0.35)');
      grd.addColorStop(1, 'rgba(201,169,106,0.0)');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: Array.from({length: 14}, (_, i) => i+1),
          datasets: [{
            label: 'Revenus',
            data: [120,140,135,150,180,210,190,230,260,240,270,300,320,340],
            borderColor: '#C9A96A',
            backgroundColor: grd,
            fill: true,
            tension: 0.35,
            pointRadius: 0,
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false }, tooltip: { enabled: true, backgroundColor: 'rgba(10,10,10,0.9)' } },
          scales: {
            x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.6)', maxRotation:0, autoSkip:true } },
            y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: 'rgba(255,255,255,0.6)', callback:(v)=> v+'€' }, suggestedMin: 100, suggestedMax: 360 }
          }
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="progress-bar" id="progress"></div>

<header className="fixed top-0 inset-x-0 z-40">
<nav className="max-w-7xl mx-auto px-4 lg:px-8 mt-4">
<div className="glass rounded-2xl flex items-center justify-between px-5 py-3">
<a className="flex items-center gap-3 group" href="#">
<div className="h-9 w-9 rounded-lg steel-edge grid place-items-center">
<span className="sr-only">Lyra²</span>
<i className="w-5 h-5 text-[#C9A96A]" data-lucide="hexagon"></i>
</div>
<div className="leading-tight">
<p className="text-[18px] tracking-tight font-semibold">Lyra²</p>
<p className="text-xs text-white/60">Ingénierie financière immobilière</p>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm">
<a className="text-white/70 hover:text-white transition" href="#fondations">Fondations</a>
<a className="text-white/70 hover:text-white transition" href="#realisations">Réalisations</a>
<a className="text-white/70 hover:text-white transition" href="#processus">Méthodologie</a>
<a className="text-white/70 hover:text-white transition" href="#dashboard">Dashboard</a>
<a className="text-white/70 hover:text-white transition" href="#offres">Offres</a>
</div>
<div className="flex items-center gap-3">
<a className="glass rounded-xl px-4 py-2 text-sm hover:bg-white/10 active:scale-[.98] transition" href="#contact">
<span className="inline-flex items-center gap-2">
<i className="w-4 h-4 text-[#C9A96A]" data-lucide="phone-call"></i> Contact
              </span>
</a>
<a className="rounded-xl px-4 py-2 text-sm gold-grad text-[#0A0A0A] font-medium hover:opacity-95 active:scale-[.98] transition" href="#consultation">
              Première consultation
            </a>
</div>
</div>
</nav>
</header>

<section className="relative overflow-hidden pt-28 lg:pt-36">
<div className="absolute inset-0">
<img alt="Rendu architectural lumineux" className="w-full h-full object-cover opacity-40 parallax" id="hero-bg" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/30 via-[#0A0A0A]/70 to-[#0A0A0A]"></div>
</div>
<div className="max-w-7xl mx-auto px-4 lg:px-8 relative">
<div className="grid lg:grid-cols-2 gap-10 items-end">
<div className="anim-init" data-animate="">
<p className="text-xs uppercase tracking-[.22em] text-white/60 mb-4">Aura Build — Design System</p>
<h1 className="text-[46px] md:text-[64px] tracking-tight font-semibold leading-[1.05]">
              L’ARCHITECTURE DE VOS REVENUS AIRBNB
            </h1>
<p className="mt-4 text-white/80 text-[17px]">
              Lyra² construit vos revenus sur des fondations d’IA et de données temps réel. Rendement calculé au plus juste, sans suppositions.
            </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<a className="steel-edge rounded-2xl px-6 py-3 inline-flex items-center justify-center gap-2 text-[15px] hover:translate-y-[-1px] active:scale-[.98] transition" href="#consultation">
<i className="w-4 h-4 text-[#C9A96A]" data-lucide="workflow"></i>
                PREMIÈRE CONSULTATION
              </a>
<a className="glass rounded-2xl px-6 py-3 inline-flex items-center justify-center gap-2 text-[15px] hover:bg-white/10 active:scale-[.98] transition" href="#dashboard">
<i className="w-4 h-4 text-[#C9A96A]" data-lucide="play-circle"></i>
                VISITE GUIDÉE
              </a>
</div>
<div className="mt-10 flex items-center gap-6 text-sm text-white/70">
<div className="flex -space-x-3">
<img alt="Client 1" className="w-9 h-9 rounded-full ring-2 ring-black/50" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Client 2" className="w-9 h-9 rounded-full ring-2 ring-black/50" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<img alt="Client 3" className="w-9 h-9 rounded-full ring-2 ring-black/50" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-white/60">Conciergeries et hôtes dans +18 villes</p>
</div>
</div>

<div className="relative h-[520px] lg:h-[560px] anim-init" data-animate="">

<div className="absolute inset-6 rounded-3xl border border-white/10 pointer-events-none"></div>
<div className="absolute inset-x-10 top-1/2 h-px bg-white/10"></div>

<div className="absolute left-3 right-24 top-10 steel-edge rounded-2xl p-4 shadow-architect translate-y-8 opacity-0" data-assemble="">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#C9A96A]" data-lucide="bar-chart-3"></i>
<p className="text-sm text-white/80">Occupation hebdo</p>
</div>
<span className="text-sm text-[#C9A96A]">+12%</span>
</div>
<div className="mt-3 h-28 w-full rounded-lg bg-gradient-to-b from-white/10 to-white/0 relative overflow-hidden">
<div className="absolute inset-0 flex items-end gap-1 px-2">
<div className="w-2 bg-[#2A3B5A] h-[20%] rounded"></div>
<div className="w-2 bg-[#2A3B5A] h-[40%] rounded"></div>
<div className="w-2 bg-[#2A3B5A] h-[30%] rounded"></div>
<div className="w-2 bg-[#C9A96A] h-[70%] rounded"></div>
<div className="w-2 bg-[#C9A96A] h-[85%] rounded"></div>
<div className="w-2 bg-[#2A3B5A] h-[55%] rounded"></div>
<div className="w-2 bg-[#C9A96A] h-[92%] rounded"></div>
</div>
</div>
</div>

<div className="absolute right-3 left-24 top-40 steel-edge rounded-2xl p-4 shadow-architect translate-y-8 opacity-0" data-assemble="">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#C9A96A]" data-lucide="map"></i>
<p className="text-sm text-white/80">Thermique du marché</p>
</div>
<div className="mt-3 relative overflow-hidden rounded-lg">
<img alt="Carte" className="h-32 w-full object-cover opacity-70" src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" />
<div className="absolute inset-0">
<span className="absolute left-1/4 top-6 w-2.5 h-2.5 rounded-full bg-[#C9A96A] shadow-[0_0_0_6px_rgba(201,169,106,0.15)]"></span>
<span className="absolute right-1/3 bottom-6 w-2.5 h-2.5 rounded-full bg-[#C9A96A] shadow-[0_0_0_6px_rgba(201,169,106,0.15)]"></span>
</div>
</img></div>
</div>

<div className="absolute left-12 right-12 bottom-8 glass rounded-3xl p-5 shadow-architect translate-y-8 opacity-0" data-assemble="">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-white/70">Revenu projeté 30j</p>
<p className="text-2xl tracking-tight font-semibold text-white">4 320 €</p>
</div>
<div className="text-right">
<p className="text-xs text-white/60">Optimisation structurelle</p>
<p className="text-sm text-[#C9A96A]">+18% vs marché</p>
</div>
</div>
<div className="mt-4 grid grid-cols-3 gap-3 text-xs text-white/70">
<div className="steel rounded-xl p-3">
<p className="text-white/60">ADR</p>
<p className="font-medium text-white tracking-tight">168 €</p>
</div>
<div className="steel rounded-xl p-3">
<p className="text-white/60">Taux d’occup.</p>
<p className="font-medium text-white tracking-tight">84%</p>
</div>
<div className="steel rounded-xl p-3">
<p className="text-white/60">RevPAR</p>
<p className="font-medium text-white tracking-tight">141 €</p>
</div>
</div>
</div>
</div>
</div>

<div className="mt-16 lg:mt-24 anim-init" data-animate="">
<div className="glass rounded-2xl p-5 md:p-6 flex items-start gap-5">
<div className="h-9 w-9 rounded-lg grid place-items-center gold-grad text-[#0A0A0A]">
<i className="w-5 h-5" data-lucide="anchor"></i>
</div>
<div>
<p className="text-[17px] text-white/90">
                Nous concevons l’architecture de vos revenus Airbnb sur des données, pas des suppositions.
              </p>
<p className="text-sm text-white/60 mt-1">
                Surveillance proactive du marché et algorithmes propriétaires. Autorité experte. Élégance mesurée.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 lg:py-28" id="fondations">
<div className="absolute inset-0 pointer-events-none opacity-[.12]">
<div className="invisible-line h-px w-full mt-24"></div>
<div className="invisible-line h-px w-full mt-24"></div>
<div className="invisible-line h-px w-full mt-24"></div>
</div>
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div className="anim-init" data-animate="">
<h2 className="text-[36px] md:text-[44px] tracking-tight font-semibold">Les fondations techniques</h2>
<p className="text-white/70 mt-2">Piliers dimensionnés comme une structure porteuse.</p>
</div>
<div className="hidden md:block text-right anim-init" data-animate="">
<p className="text-xs uppercase tracking-[.22em] text-white/50">Angle 45° · Blur 24px</p>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

<div className="steel rounded-2xl p-6 anim-init" data-animate="">
<div className="mb-4 flex items-center gap-3">
<div className="h-10 w-10 rounded-lg glass grid place-items-center">
<i className="w-5 h-5 text-[#C9A96A]" data-lucide="radar"></i>
</div>
<h3 className="font-medium tracking-tight">Analyse structurelle du marché</h3>
</div>
<p className="text-sm text-white/70">Notre IA analyse 27 points de données en temps réel.</p>
</div>
<div className="steel rounded-2xl p-6 anim-init" data-animate="">
<div className="mb-4 flex items-center gap-3">
<div className="h-10 w-10 rounded-lg glass grid place-items-center">
<i className="w-5 h-5 text-[#C9A96A]" data-lucide="gauge"></i>
</div>
<h3 className="font-medium tracking-tight">Optimisation automatique des prix</h3>
</div>
<p className="text-sm text-white/70">Algorithme propriétaire breveté pour un revenu maximum.</p>
</div>
<div className="steel rounded-2xl p-6 anim-init" data-animate="">
<div className="mb-4 flex items-center gap-3">
<div className="h-10 w-10 rounded-lg glass grid place-items-center">
<i className="w-5 h-5 text-[#C9A96A]" data-lucide="activity"></i>
</div>
<h3 className="font-medium tracking-tight">Suivi de chantier en temps réel</h3>
</div>
<p className="text-sm text-white/70">Dashboard de supervision avec alertes proactives.</p>
</div>
<div className="steel rounded-2xl p-6 anim-init" data-animate="">
<div className="mb-4 flex items-center gap-3">
<div className="h-10 w-10 rounded-lg glass grid place-items-center">
<i className="w-5 h-5 text-[#C9A96A]" data-lucide="shield-check"></i>
</div>
<h3 className="font-medium tracking-tight">Matériaux premium français</h3>
</div>
<p className="text-sm text-white/70">Support dédié et infrastructure locale.</p>
</div>
</div>
</div>
</section>

<section className="relative py-20 lg:py-28" id="realisations">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="flex items-end justify-between gap-6">
<div className="anim-init" data-animate="">
<h2 className="text-[36px] md:text-[44px] tracking-tight font-semibold">Galerie de réalisations</h2>
<p className="text-white/70 mt-2">Preuves sociales architecturées. Cahiers des charges et spécifications.</p>
</div>
<div className="hidden md:block anim-init" data-animate="">
<a className="glass rounded-xl px-4 py-2 text-sm hover:bg-white/10" href="#consultation">Étude de cas complète</a>
</div>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group rounded-2xl overflow-hidden glass anim-init" data-animate="">
<div className="relative">
<img alt="Airbnb luxe Paris" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" />
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 flex items-center gap-2 glass rounded-full px-3 py-1">
<img alt="Propriétaire" className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop" />
<span className="text-xs">Propriétaire</span>
</img></div>
</img></div>
<div className="p-5">
<h3 className="tracking-tight font-medium">PROJET PARIS 7ᵉ — Résidence d’exception</h3>
<p className="text-sm text-white/70 mt-1">Surface : 85 m² · Chambres : 2 · Valorisation : <span className="text-[#C9A96A]">+38%</span></p>
<p className="text-sm text-white/70 mt-3">“L’analyse des événements locaux a permis une optimisation ciblée pendant la Fashion Week.”</p>
<div className="mt-4 flex items-center gap-3 text-xs text-white/60">
<div className="flex items-center gap-1"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="trending-up"></i> RevPAR +24%</div>
<div className="flex items-center gap-1"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="clock"></i> Délai 21 j</div>
</div>
</div>
</article>

<article className="group rounded-2xl overflow-hidden glass anim-init" data-animate="">
<div className="relative">
<img alt="Airbnb Marseille" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 flex items-center gap-2 glass rounded-full px-3 py-1">
<img alt="Conciergerie" className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="text-xs">Conciergerie</span>
</div>
</div>
<div className="p-5">
<h3 className="tracking-tight font-medium">MARSEILLE — Vieux-Port</h3>
<p className="text-sm text-white/70 mt-1">Surface : 60 m² · Chambres : 1 · Valorisation : <span className="text-[#C9A96A]">+29%</span></p>
<p className="text-sm text-white/70 mt-3">“Surveillance proactive du marché et ajustements instantanés.”</p>
<div className="mt-4 flex items-center gap-3 text-xs text-white/60">
<div className="flex items-center gap-1"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="signal-high"></i> Occup. 86%</div>
<div className="flex items-center gap-1"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="euro"></i> ADR 132 €</div>
</div>
</div>
</article>

<article className="group rounded-2xl overflow-hidden glass anim-init" data-animate="">
<div className="relative">
<img alt="Airbnb Lyon" className="h-56 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
<div className="absolute top-4 left-4 flex items-center gap-2 glass rounded-full px-3 py-1">
<img alt="Propriétaire" className="w-6 h-6 rounded-full" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<span className="text-xs">Investisseur</span>
</div>
</div>
<div className="p-5">
<h3 className="tracking-tight font-medium">LYON — Presqu’île</h3>
<p className="text-sm text-white/70 mt-1">Surface : 72 m² · Chambres : 2 · Valorisation : <span className="text-[#C9A96A]">+31%</span></p>
<p className="text-sm text-white/70 mt-3">“Rendement calculé au plus juste, sans sur-tarification.”</p>
<div className="mt-4 flex items-center gap-3 text-xs text-white/60">
<div className="flex items-center gap-1"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="bell-ring"></i> Alertes locales</div>
<div className="flex items-center gap-1"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="line-chart"></i> RevPAR +19%</div>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="relative py-20 lg:py-28" id="processus">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="anim-init" data-animate="">
<h2 className="text-[36px] md:text-[44px] tracking-tight font-semibold">Processus de construction</h2>
<p className="text-white/70 mt-2">Méthodologie claire, de l’audit à la performance.</p>
</div>
<ol className="mt-10 grid lg:grid-cols-4 gap-6">
<li className="glass rounded-2xl p-6 anim-init" data-animate="">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-lg gold-grad text-[#0A0A0A] grid place-items-center font-medium">1</span>
<h3 className="tracking-tight font-medium">Diagnostic initial</h3>
</div>
<p className="text-sm text-white/70 mt-3">Audit complet de votre patrimoine locatif.</p>
</li>
<li className="glass rounded-2xl p-6 anim-init" data-animate="">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-lg gold-grad text-[#0A0A0A] grid place-items-center font-medium">2</span>
<h3 className="tracking-tight font-medium">Plan d’optimisation</h3>
</div>
<p className="text-sm text-white/70 mt-3">Stratégie pricing et recommandations personnalisées.</p>
</li>
<li className="glass rounded-2xl p-6 anim-init" data-animate="">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-lg gold-grad text-[#0A0A0A] grid place-items-center font-medium">3</span>
<h3 className="tracking-tight font-medium">Mise en œuvre</h3>
</div>
<p className="text-sm text-white/70 mt-3">Intégration transparente avec vos plateformes.</p>
</li>
<li className="glass rounded-2xl p-6 anim-init" data-animate="">
<div className="flex items-center gap-3">
<span className="h-8 w-8 rounded-lg gold-grad text-[#0A0A0A] grid place-items-center font-medium">4</span>
<h3 className="tracking-tight font-medium">Suivi de performance</h3>
</div>
<p className="text-sm text-white/70 mt-3">Reporting continu et ajustements automatiques.</p>
</li>
</ol>
</div>
</section>

<section className="relative py-20 lg:py-28" id="dashboard">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="anim-init" data-animate="">
<h2 className="text-[36px] md:text-[44px] tracking-tight font-semibold">Maquette interactive</h2>
<p className="text-white/70 mt-2">Vue éclatée type plan d’architecte. Zoom au survol.</p>
</div>
<div className="mt-10 grid lg:grid-cols-3 gap-6">

<div className="group glass rounded-2xl p-5 anim-init hover:shadow-2xl hover:shadow-black/30 transition" data-animate="">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#C9A96A]" data-lucide="area-chart"></i>
<h3 className="tracking-tight font-medium">Revenus (30 j)</h3>
</div>
<span className="text-xs text-white/60">Coupe technique</span>
</div>
<p className="text-sm text-white/60 mt-1">Construction en temps réel.</p>
<div className="mt-4 rounded-xl overflow-hidden bg-[#1A1A1A]">
<div>
<canvas height="180" id="revChart"></canvas>
</div>
</div>
</div>

<div className="group glass rounded-2xl p-5 anim-init hover:shadow-2xl hover:shadow-black/30 transition" data-animate="">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#C9A96A]" data-lucide="map-pinned"></i>
<h3 className="tracking-tight font-medium">Carte de chaleur</h3>
</div>
<span className="text-xs text-white/60">Plan de masse</span>
</div>
<p className="text-sm text-white/60 mt-1">Survol pour détails techniques.</p>
<div className="mt-4 relative rounded-xl overflow-hidden">
<img alt="Carte thermique" className="w-full h-56 object-cover opacity-80 transition group-hover:scale-[1.02]" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-0">
<button className="absolute left-8 top-8 w-3 h-3 rounded-full bg-[#C9A96A] shadow-[0_0_0_10px_rgba(201,169,106,0.15)]"></button>
<button className="absolute right-10 bottom-10 w-3 h-3 rounded-full bg-[#C9A96A] shadow-[0_0_0_10px_rgba(201,169,106,0.15)]"></button>
</div>
</div>
</div>

<div className="group glass rounded-2xl p-5 anim-init hover:shadow-2xl hover:shadow-black/30 transition" data-animate="">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-[#C9A96A]" data-lucide="ruler"></i>
<h3 className="tracking-tight font-medium">Spécifications</h3>
</div>
<span className="text-xs text-white/60">Échelle &amp; cotations</span>
</div>
<div className="mt-4 grid grid-cols-2 gap-4">
<div className="steel rounded-xl p-4">
<p className="text-xs text-white/60">Taux d’acceptation</p>
<p className="text-xl tracking-tight font-semibold">97.4%</p>
</div>
<div className="steel rounded-xl p-4">
<p className="text-xs text-white/60">Délai de réaction</p>
<p className="text-xl tracking-tight font-semibold">3m 12s</p>
</div>
<div className="steel rounded-xl p-4">
<p className="text-xs text-white/60">Pénalités évitées</p>
<p className="text-xl tracking-tight font-semibold">-68%</p>
</div>
<div className="steel rounded-xl p-4">
<p className="text-xs text-white/60">Indice de marché</p>
<p className="text-xl tracking-tight font-semibold">1.24x</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 lg:py-28" id="offres">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="anim-init" data-animate="">
<h2 className="text-[36px] md:text-[44px] tracking-tight font-semibold">Gamme de solutions</h2>
<p className="text-white/70 mt-2">Tableaux techniques. Matériaux et garanties inclus.</p>
</div>
<div className="mt-10 grid lg:grid-cols-3 gap-6">

<div className="glass rounded-2xl p-6 anim-init" data-animate="">
<div className="flex items-center justify-between">
<h3 className="tracking-tight font-medium">FONDATIONS</h3>
<span className="text-white/60 text-sm">79 €/mois</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex gap-2"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="check-circle"></i> Spécifications essentielles</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="database"></i> Données marchés locales</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="bell"></i> Alertes hebdomadaires</li>
</ul>
<a className="mt-6 inline-flex w-full justify-center glass rounded-xl px-4 py-2 text-sm hover:bg-white/10" href="#consultation">Choisir</a>
</div>

<div className="steel-edge rounded-2xl p-6 ring-1 ring-[#C9A96A]/30 anim-init relative" data-animate="">
<span className="absolute -top-3 right-4 text-xs gold-grad text-[#0A0A0A] px-3 py-1 rounded-full">Recommandée</span>
<div className="flex items-center justify-between">
<h3 className="tracking-tight font-medium">STRUCTURE</h3>
<span className="text-white/60 text-sm">149 €/mois</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex gap-2"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="settings-2"></i> Optimisation dynamique des prix</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="activity-square"></i> Suivi en temps réel</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="headphones"></i> Support prioritaire</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="shield"></i> Garanties anti-surbook</li>
</ul>
<a className="mt-6 inline-flex w-full justify-center gold-grad text-[#0A0A0A] rounded-xl px-4 py-2 text-sm hover:opacity-95" href="#consultation">Choisir</a>
</div>

<div className="glass rounded-2xl p-6 anim-init" data-animate="">
<div className="flex items-center justify-between">
<h3 className="tracking-tight font-medium">ARCHITECTURE</h3>
<span className="text-white/60 text-sm">299 €/mois</span>
</div>
<ul className="mt-4 space-y-2 text-sm text-white/70">
<li className="flex gap-2"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="cpu"></i> Algorithmes propriétaires complets</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="line-chart"></i> Reporting avancé &amp; API</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="users"></i> Multi-portefeuilles &amp; équipes</li>
<li className="flex gap-2"><i className="w-4 h-4 text-[#C9A96A]" data-lucide="lock"></i> SLA &amp; conformité renforcés</li>
</ul>
<a className="mt-6 inline-flex w-full justify-center glass rounded-xl px-4 py-2 text-sm hover:bg-white/10" href="#consultation">Choisir</a>
</div>
</div>
</div>
</section>

<section className="relative py-16" id="consultation">
<div className="max-w-3xl mx-auto px-4 lg:px-8">
<div className="steel-edge rounded-2xl p-6 md:p-8 anim-init" data-animate="">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg gold-grad text-[#0A0A0A] grid place-items-center">
<i className="w-5 h-5" data-lucide="calendar-check"></i>
</div>
<div>
<h3 className="tracking-tight font-medium">Demander une première consultation</h3>
<p className="text-sm text-white/60">Réponse sous 24h. Sans engagement.</p>
</div>
</div>
<form className="mt-6 grid sm:grid-cols-3 gap-3">
<input className="glass rounded-xl px-4 py-3 text-sm placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#C9A96A]/40" placeholder="Nom" type="text"/>
<input className="glass rounded-xl px-4 py-3 text-sm placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#C9A96A]/40" placeholder="Email" type="email"/>
<input className="glass rounded-xl px-4 py-3 text-sm placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#C9A96A]/40" placeholder="Téléphone" type="text"/>
<div className="sm:col-span-3">
<textarea className="glass rounded-xl px-4 py-3 text-sm w-full h-24 placeholder:text-white/40 outline-none focus:ring-2 focus:ring-[#C9A96A]/40" placeholder="Objectif &amp; ville (ex. 2 appartements — Nice)"></textarea>
</div>
<button className="sm:col-span-3 gold-grad text-[#0A0A0A] rounded-xl px-5 py-3 text-sm w-full hover:opacity-95 active:scale-[.98]" type="button">
              Envoyer la demande
            </button>
</form>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-10">
<div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg steel-edge grid place-items-center">
<i className="w-5 h-5 text-[#C9A96A]" data-lucide="hexagon"></i>
</div>
<div>
<p className="font-semibold tracking-tight">Lyra²</p>
<p className="text-xs text-white/60">© 2025 — Optimisation structurelle des revenus</p>
</div>
</div>
<div className="text-sm text-white/60 flex items-center gap-6">
<a className="hover:text-white" href="#">Mentions légales</a>
<a className="hover:text-white" href="#">Confidentialité</a>
<a className="hover:text-white" href="#">Cookies</a>
</div>
</div>
</footer>


    </>
  );
}
