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



      // Icons
      document.addEventListener("DOMContentLoaded", () => {
        lucide.createIcons();

        // Reveal on scroll
        const els = document.querySelectorAll(".reveal");
        const io = new IntersectionObserver((entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("opacity-100", "translate-y-0");
              io.unobserve(e.target);
            }
          });
        }, { threshold: 0.12 });
        els.forEach((el, i) => {
          el.classList.add("opacity-0", "translate-y-6", "transition", "duration-700");
          if (el.classList.contains("delay-100")) el.style.transitionDelay = "120ms";
          if (el.classList.contains("delay-150")) el.style.transitionDelay = "200ms";
          if (el.classList.contains("delay-200")) el.style.transitionDelay = "280ms";
          if (el.classList.contains("delay-300")) el.style.transitionDelay = "360ms";
          io.observe(el);
        });

        // Subtle hover parallax on phones
        const phones = document.getElementById("phones");
        if (phones) {
          phones.addEventListener("pointermove", (e) => {
            const r = phones.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width - 0.5;
            const y = (e.clientY - r.top) / r.height - 0.5;
            phones.style.transform = `rotateX(${y * -4}deg) rotateY(${x * 4}deg) translateZ(0)`;
          });
          phones.addEventListener("pointerleave", () => {
            phones.style.transform = "rotateX(0deg) rotateY(0deg)";
          });
          phones.style.transition = "transform 600ms cubic-bezier(.2,.8,.2,1)";
        }

        // Charts
        const textColor = "#cbd5e1";
        const gridColor = "rgba(255,255,255,.06)";
        const lime = "#bef264";

        const areaCtx = document.getElementById("chartArea")?.getContext("2d");
        if (areaCtx) {
          new Chart(areaCtx, {
            type: "line",
            data: {
              labels: Array.from({ length: 30 }, (_, i) => i + 1),
              datasets: [{
                data: Array.from({ length: 30 }, () => 40 + Math.random() * 60).map((v, i, a) => (i ? (a[i-1] + v) / 2 : v)),
                borderColor: lime,
                tension: 0.4,
                fill: true,
                backgroundColor: "rgba(190, 242, 100, .12)",
                borderWidth: 2
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false }, tooltip: { enabled: false } },
              scales: {
                x: { display: false, grid: { display: false } },
                y: { display: false, grid: { display: false } }
              },
              elements: { point: { radius: 0 } }
            }
          });
        }

        const incomeCtx = document.getElementById("chartIncome")?.getContext("2d");
        if (incomeCtx) {
          new Chart(incomeCtx, {
            type: "line",
            data: {
              labels: Array.from({ length: 24 }, (_, i) => i),
              datasets: [{
                data: Array.from({ length: 24 }, (_, i) => (Math.sin(i/3) * 15 + 35) + Math.random() * 8),
                borderColor: "#60a5fa",
                backgroundColor: "rgba(59,130,246,.15)",
                borderWidth: 2,
                tension: 0.38,
                fill: true
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false }, tooltip: { enabled: false } },
              scales: {
                x: { display: false, grid: { display: false } },
                y: { display: false, grid: { display: false } }
              },
              elements: { point: { radius: 0 } }
            }
          });
        }

        const barCtx = document.getElementById("chartBar")?.getContext("2d");
        if (barCtx) {
          new Chart(barCtx, {
            type: "bar",
            data: {
              labels: Array.from({ length: 12 }, (_, i) => i + 1),
              datasets: [{
                data: Array.from({ length: 12 }, () => 5 + Math.round(Math.random() * 12)),
                backgroundColor: "rgba(255,255,255,.35)",
                borderRadius: 6,
                borderSkipped: false
              }]
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false }, tooltip: { enabled: false } },
              scales: {
                x: { display: false, grid: { display: false } },
                y: { display: false, grid: { display: false } }
              }
            }
          });
        }
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
      

<header className="fixed top-0 inset-x-0 z-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mt-4 flex items-center justify-between rounded-2xl border border-black/5 bg-white/70 px-4 py-3 backdrop-blur-xl">
<a className="flex items-center gap-2" href="#">
<span className="text-2xl tracking-tight font-semibold">
              fakedash<span className="text-lime-400">.</span>
</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="opacity-80 hover:opacity-100 transition" href="#home">Home</a>
<a className="opacity-80 hover:opacity-100 transition" href="#features">Blog</a>
<a className="opacity-80 hover:opacity-100 transition" href="#contact">Contact</a>
<a className="opacity-80 hover:opacity-100 transition" href="#account">My account</a>
</nav>
<a className="group inline-flex items-center gap-2 rounded-full bg-lime-300 px-4 py-2 font-medium text-neutral-900 transition hover:translate-y-[-1px]" href="#get-started" style={{animation: 'pulseGlow 3s ease-in-out infinite'}}>
<i className="h-4 w-4" data-lucide="zap"></i>
<span>Start now</span>
</a>
</div>
</div>
</header>
<main className="pt-28 sm:pt-32" id="home">

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-[44px] bg-neutral-900">

<div className="pointer-events-none absolute inset-0">
<div className="absolute -inset-40 bg-[radial-gradient(60%_60%_at_70%_30%,rgba(190,242,100,0.22),transparent_60%)]"></div>
<div className="absolute inset-0 bg-[radial-gradient(40%_40%_at_0%_100%,rgba(255,255,255,0.06),transparent_60%)]"></div>
</div>
<div className="relative grid grid-cols-1 lg:grid-cols-2">

<div className="px-6 sm:px-10 py-14 sm:py-16 lg:py-20">
<div className="max-w-xl space-y-6">
<h1 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight font-semibold text-white leading-[1.05] reveal">
                  Fakedash until you<br/>
<span className="text-lime-300 underline decoration-lime-300/60 underline-offset-8">Make it.</span> <span aria-hidden="true">👌</span>
</h1>
<p className="text-base sm:text-lg text-white/80 leading-relaxed reveal delay-100">
                  Créez instantanément des dashboards réalistes pour vos démos, pitchs et présentations. Aucun code requis — seulement des visuels ultra‑propres pour impressionner vos clients.
                </p>
<p className="text-base sm:text-lg text-white/80 leading-relaxed reveal delay-150">
                  Gagnez des clients. Recrutez des talents. Sécurisez des partenariats. Tout ça avec des présentations percutantes et crédibles.
                </p>
<div className="flex items-center gap-4 pt-2 reveal delay-200">
<a className="inline-flex items-center gap-2 rounded-full bg-lime-300 px-5 py-3 font-medium text-neutral-900 transition hover:translate-y-[-1px]" href="#features" id="get-started">
<i className="h-4 w-4" data-lucide="rocket"></i>
                    Get started
                  </a>
<a className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white/90 transition hover:bg-white/10" href="#demo">
<i className="h-5 w-5" data-lucide="play-circle"></i>
                    Voir la démo
                  </a>
</div>
</div>
</div>

<div className="relative">
<div className="grid grid-cols-2 gap-6 p-6 sm:p-10 lg:p-12" id="phones">

<div className="reveal delay-100">
<div className="relative rounded-[42px] bg-black p-2 shadow-[0_20px_60px_-12px_rgba(0,0,0,.6)]">
<div className="rounded-[34px] bg-lime-300 aspect-[9/19.5] overflow-hidden flex items-center justify-center">
<span className="text-2xl font-semibold tracking-tight text-neutral-900">fakedash</span>
</div>
</div>
</div>

<div className="reveal delay-150">
<div className="relative rounded-[42px] bg-black p-2 shadow-[0_20px_60px_-12px_rgba(0,0,0,.6)]">
<div className="rounded-[34px] aspect-[9/19.5] overflow-hidden bg-neutral-950">
<div className="p-4">
<div className="flex items-center justify-between">
<p className="text-white font-medium tracking-tight">My income</p>
<i className="h-4 w-4 text-white/60" data-lucide="dots"></i>
</div>
<div className="mt-4 bg-neutral-900/60 rounded-xl p-3">
<div className="text-xs text-white/70">128 078 $</div>
<div className="mt-3">
<div className="overflow-hidden rounded-md bg-neutral-900">
<div className="p-2">
<div className="bg-neutral-950 rounded-md">
<div className="relative">
<div className="p-3">
<div className="h-40">
<div className="w-full h-full">
<div><canvas id="chartIncome"></canvas></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between text-[11px] text-white/70">
<span>Next payment</span><span>10 days left</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="reveal delay-200">
<div className="relative rounded-[42px] bg-black p-2 shadow-[0_20px_60px_-12px_rgba(0,0,0,.6)]">
<div className="rounded-[34px] aspect-[9/19.5] overflow-hidden bg-gradient-to-b from-indigo-700 to-indigo-900">
<div className="p-4 text-white/90">
<div className="text-[11px] opacity-80">Today</div>
<div className="mt-1 text-xl font-semibold tracking-tight">$2,113.63</div>
<div className="text-xs opacity-80">24 orders</div>
<div className="mt-3 h-28">
<div><canvas id="chartBar"></canvas></div>
</div>
<button className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/15">
<i className="h-3.5 w-3.5" data-lucide="bar-chart-3"></i>
                          View dashboard
                        </button>
</div>
</div>
</div>
</div>

<div className="reveal delay-300">
<div className="relative rounded-[42px] bg-black p-2 shadow-[0_20px_60px_-12px_rgba(0,0,0,.6)]">
<div className="rounded-[34px] bg-lime-300 aspect-[9/19.5] overflow-hidden flex items-center justify-center">
<span className="text-2xl font-semibold tracking-tight text-neutral-900">fakedash</span>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-neutral-900 to-transparent"></div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
<div className="rounded-3xl border border-black/5 bg-white/70 backdrop-blur-xl px-6 py-5">
<div className="flex items-center justify-between gap-6 overflow-x-auto hide-scrollbar">
<img alt="" className="h-10 w-28 object-cover rounded-md opacity-90" src="https://images.unsplash.com/photo-1556139943-4bdca53adf1e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-10 w-28 object-cover rounded-md opacity-90" src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-10 w-28 object-cover rounded-md opacity-90" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="" className="h-10 w-28 object-cover rounded-md opacity-90" src="https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<img alt="" className="h-10 w-28 object-cover rounded-md opacity-90" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28" id="features">
<div className="grid lg:grid-cols-2 gap-10">
<div className="reveal">
<h2 className="text-3xl sm:text-4xl tracking-tight font-semibold">Des dashboards crédibles en quelques minutes</h2>
<p className="mt-4 text-neutral-600 text-lg">
              Composez vos écrans, ajoutez des métriques, animez des données factices et exportez le tout en un clic.
            </p>
<ul className="mt-6 space-y-4">
<li className="flex items-start gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 text-neutral-900 shrink-0"><i className="h-4 w-4" data-lucide="sparkles"></i></span>
<div>
<p className="font-medium">Templates premium</p>
<p className="text-neutral-600">Galerie prête à l’emploi, optimisée pour les présentations.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 text-neutral-900 shrink-0"><i className="h-4 w-4" data-lucide="sliders"></i></span>
<div>
<p className="font-medium">Données modulables</p>
<p className="text-neutral-600">Ajustez les chiffres, la volatilité et les tendances en temps réel.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-lime-300 text-neutral-900 shrink-0"><i className="h-4 w-4" data-lucide="download"></i></span>
<div>
<p className="font-medium">Export instantané</p>
<p className="text-neutral-600">Images haute définition et vidéo courte avec transitions.</p>
</div>
</li>
</ul>
<div className="mt-8 flex items-center gap-4">
<a className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-white transition hover:translate-y-[-1px]" href="#pricing">
<i className="h-4 w-4" data-lucide="credit-card"></i>
                Voir les offres
              </a>
<a className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-3 text-neutral-900 transition hover:bg-neutral-50" href="#demo">
<i className="h-4 w-4" data-lucide="mouse-pointer-click"></i>
                Essayer la démo
              </a>
</div>
</div>
<div className="reveal">
<div className="relative overflow-hidden rounded-3xl border border-black/5 bg-white p-6">
<div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-lime-200/60 blur-3xl"></div>
<img alt="Preview" className="rounded-2xl w-full object-cover" src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="mt-4 grid grid-cols-2 gap-4">
<img alt="" className="rounded-xl h-28 w-full object-cover" src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="" className="rounded-xl h-28 w-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28" id="demo">
<div className="rounded-[32px] bg-neutral-900 text-white overflow-hidden">
<div className="grid lg:grid-cols-2">
<div className="p-8 sm:p-12">
<h3 className="text-2xl sm:text-3xl tracking-tight font-semibold">Animations fluides et transitions subtiles</h3>
<p className="mt-4 text-white/80">
                Faites défiler pour voir les éléments apparaître en douceur. Les appareils flottent légèrement pour un rendu premium.
              </p>
<ul className="mt-6 space-y-3 text-white/80">
<li className="flex items-center gap-3"><i className="h-5 w-5 text-lime-300" data-lucide="check"></i>Révélations à l’apparition (Intersection Observer)</li>
<li className="flex items-center gap-3"><i className="h-5 w-5 text-lime-300" data-lucide="check"></i>Parallaxe subtile au survol</li>
<li className="flex items-center gap-3"><i className="h-5 w-5 text-lime-300" data-lucide="check"></i>Courbes dynamiques avec Chart.js</li>
</ul>
</div>
<div className="relative">
<div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(190,242,100,.18),transparent_60%)]"></div>
<div className="p-8 sm:p-12">
<div className="rounded-3xl border border-white/10 bg-white/5 p-5">
<div className="rounded-2xl overflow-hidden bg-neutral-950">
<div className="p-5">
<p className="text-sm text-white/70">Live preview</p>
</div>
<div className="px-5 pb-6">
<div className="rounded-xl bg-neutral-900 p-4">
<div className="h-64">
<div><canvas id="chartArea"></canvas></div>
</div>
<div className="mt-4 flex items-center gap-3 text-xs text-white/70">
<span className="inline-flex h-2.5 w-2.5 rounded-full bg-lime-300"></span> Active
                          <span className="ml-auto">FPS 60</span>
</div>
</div>
</div>
</div>
</div>
<p className="mt-4 text-sm text-white/70">Aucun plugin requis : animations natives et performances soignées.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28" id="pricing">
<div className="text-center max-w-2xl mx-auto">
<h3 className="text-3xl sm:text-4xl tracking-tight font-semibold">Choisissez votre plan</h3>
<p className="mt-3 text-neutral-600">Commencez gratuitement, mettez à niveau quand vous êtes prêt.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">

<div className="reveal rounded-3xl border border-black/5 bg-white p-6">
<div className="flex items-center justify-between">
<h4 className="text-xl tracking-tight font-semibold">Starter</h4>
<span className="rounded-full bg-neutral-100 px-3 py-1 text-xs">Essai</span>
</div>
<p className="mt-2 text-neutral-600">Idéal pour tester.</p>
<p className="mt-6 text-3xl font-semibold tracking-tight">0 €</p>
<ul className="mt-6 space-y-2 text-sm text-neutral-700">
<li className="flex gap-2"><i className="h-4 w-4 text-lime-500" data-lucide="check"></i>10 exports</li>
<li className="flex gap-2"><i className="h-4 w-4 text-lime-500" data-lucide="check"></i>3 templates</li>
<li className="flex gap-2 opacity-60"><i className="h-4 w-4" data-lucide="x"></i>Vidéo HD</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-3 text-neutral-900 transition hover:bg-neutral-50" href="#">Commencer</a>
</div>
<div className="reveal rounded-3xl border border-black/5 bg-neutral-900 text-white p-6 relative">
<span className="absolute -top-3 right-6 rounded-full bg-lime-300 px-3 py-1 text-xs text-neutral-900">Populaire</span>
<div className="flex items-center justify-between">
<h4 className="text-xl tracking-tight font-semibold">Pro</h4>
</div>
<p className="mt-2 text-white/80">Pour freelances et équipes.</p>
<p className="mt-6 text-3xl font-semibold tracking-tight">19 €<span className="text-sm text-white/60">/mois</span></p>
<ul className="mt-6 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><i className="h-4 w-4 text-lime-300" data-lucide="check"></i>Exports illimités</li>
<li className="flex gap-2"><i className="h-4 w-4 text-lime-300" data-lucide="check"></i>Vidéo HD</li>
<li className="flex gap-2"><i className="h-4 w-4 text-lime-300" data-lucide="check"></i>Templates premium</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-lime-300 px-5 py-3 text-neutral-900 transition hover:translate-y-[-1px]" href="#">Choisir Pro</a>
</div>
<div className="reveal rounded-3xl border border-black/5 bg-white p-6">
<div className="flex items-center justify-between">
<h4 className="text-xl tracking-tight font-semibold">Business</h4>
<span className="rounded-full bg-neutral-100 px-3 py-1 text-xs">Équipe</span>
</div>
<p className="mt-2 text-neutral-600">Contrats &amp; support prioritaire.</p>
<p className="mt-6 text-3xl font-semibold tracking-tight">49 €<span className="text-sm text-neutral-500">/mois</span></p>
<ul className="mt-6 space-y-2 text-sm text-neutral-700">
<li className="flex gap-2"><i className="h-4 w-4 text-lime-500" data-lucide="check"></i>Tout Pro</li>
<li className="flex gap-2"><i className="h-4 w-4 text-lime-500" data-lucide="check"></i>Collaboration</li>
<li className="flex gap-2"><i className="h-4 w-4 text-lime-500" data-lucide="check"></i>Support 24/7</li>
</ul>
<a className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-neutral-300 bg-white px-5 py-3 text-neutral-900 transition hover:bg-neutral-50" href="#">Parler à un humain</a>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28" id="contact">
<div className="grid lg:grid-cols-2 gap-10">
<div className="reveal">
<h3 className="text-3xl sm:text-4xl tracking-tight font-semibold">Parlons de votre projet</h3>
<p className="mt-3 text-neutral-600">Nous répondons en moins de 24h.</p>
<div className="mt-8 space-y-4">
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-700" data-lucide="mail"></i>
<span>hello@fakedash.app</span>
</div>
<div className="flex items-center gap-3">
<i className="h-5 w-5 text-neutral-700" data-lucide="map-pin"></i>
<span>Remote — EU</span>
</div>
</div>
</div>
<form className="reveal rounded-3xl border border-black/5 bg-white p-6">
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="text-sm font-medium">Prénom</label>
<input className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Alex" type="text"/>
</div>
<div>
<label className="text-sm font-medium">Nom</label>
<input className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="D." type="text"/>
</div>
<div className="sm:col-span-2">
<label className="text-sm font-medium">Email</label>
<input className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="vous@exemple.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="text-sm font-medium">Message</label>
<textarea className="mt-1 w-full rounded-xl border border-neutral-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-900/10" placeholder="Votre besoin…" rows="4"></textarea>
</div>
</div>
<button className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-3 text-white transition hover:translate-y-[-1px]">
<i className="h-4 w-4" data-lucide="send"></i>
              Envoyer
            </button>
</form>
</div>
</section>

<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-20 sm:mt-28" id="account">
<div className="rounded-3xl border border-black/5 bg-white p-6 flex items-center justify-between">
<div>
<h4 className="text-xl tracking-tight font-semibold">Espace membre</h4>
<p className="text-neutral-600 mt-1">Connectez‑vous pour accéder à vos exports et modèles.</p>
</div>
<div className="flex items-center gap-3">
<a className="rounded-full border border-neutral-300 bg-white px-5 py-2.5" href="#">Se connecter</a>
<a className="rounded-full bg-neutral-900 px-5 py-2.5 text-white" href="#">Créer un compte</a>
</div>
</div>
</section>
</main>

<footer className="mt-20 sm:mt-28">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="rounded-t-3xl border border-black/5 bg-white p-6 sm:p-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-sm text-neutral-600">© 2025 Fakedash. Tous droits réservés.</p>
<div className="flex items-center gap-6 text-sm">
<a className="opacity-80 hover:opacity-100" href="#">Politique</a>
<a className="opacity-80 hover:opacity-100" href="#">CGU</a>
<a className="opacity-80 hover:opacity-100" href="#">Support</a>
</div>
</div>
</div>
</div>
</footer>

<a className="fixed right-4 bottom-4 sm:bottom-6 sm:right-6 inline-flex items-center gap-2 rounded-full bg-lime-300 px-4 py-2 text-neutral-900 shadow-lg transition hover:translate-y-[-1px]" href="#contact">
<i className="h-4 w-4" data-lucide="message-square"></i>
<span className="hidden sm:inline">Leave a message</span>
<span className="sm:hidden">Chat</span>
</a>


    </>
  );
}
