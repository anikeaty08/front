import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      // Utilities
      const qs = (sel, ctx = document) => ctx.querySelector(sel);

      // Read dynamic values from URL or defaults
      const params = new URLSearchParams(window.location.search);
      const prenom = params.get('prenom') || 'toi';
      const taches = Number(params.get('taches') || 12);
      const heures = Number(params.get('heures') || 5);
      const victoire = params.get('victoire') || 'Une victoire personnelle marquante';
      const nom = params.get('nom') || 'Nom du client';

      // Inject dynamic variables
      qs('#prenom-hero').textContent = prenom;
      qs('#prenom-cadeau').textContent = prenom;
      qs('#victoire-card').innerHTML = `🎯 <span class="underline decoration-orange-300/60 text-orange-800">${victoire}</span>`;
      qs('#signature').textContent = nom;

      // Counters animation
      const animateCount = (el, target, duration = 1200) => {
        const start = 0;
        const startTs = performance.now();
        const step = (now) => {
          const p = Math.min(1, (now - startTs) / duration);
          const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
          const value = Math.floor(start + (target - start) * eased);
          el.textContent = value.toLocaleString('fr-CH');
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      };

      const inView = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      };

      const counterTaches = qs('#counter-taches');
      const counterHeures = qs('#counter-heures');
      let countersLaunched = false;
      const launchCounters = () => {
        if (!countersLaunched && inView(counterTaches)) {
          countersLaunched = true;
          animateCount(counterTaches, isFinite(taches) ? taches : 12);
          animateCount(counterHeures, isFinite(heures) ? heures : 5);
        }
      };
      document.addEventListener('scroll', launchCounters, { passive: true });
      window.addEventListener('load', () => {
        launchCounters();
      });

      // Countdown (7 days from first visit; persisted)
      const EXPIRY_KEY = 'giftExpiry';
      const existing = localStorage.getItem(EXPIRY_KEY);
      let expiry = existing ? new Date(existing) : null;
      if (!expiry || isNaN(expiry.getTime())) {
        expiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
        localStorage.setItem(EXPIRY_KEY, expiry.toISOString());
      }
      const countdownEl = qs('#countdown');

      const updateCountdown = () => {
        const now = new Date();
        let diff = Math.max(0, expiry - now);
        const days = Math.floor(diff / (24 * 60 * 60 * 1000));
        diff -= days * 24 * 60 * 60 * 1000;
        const hours = Math.floor(diff / (60 * 60 * 1000));
        diff -= hours * 60 * 60 * 1000;
        const mins = Math.floor(diff / (60 * 1000));
        diff -= mins * 60 * 1000;
        const secs = Math.floor(diff / 1000);
        countdownEl.textContent = `${String(days).padStart(2,'0')}j ${String(hours).padStart(2,'0')}h ${String(mins).padStart(2,'0')}m ${String(secs).padStart(2,'0')}s`;
      };
      updateCountdown();
      setInterval(updateCountdown, 1000);

      // Enhance focus jump for CTA anchor
      const ctaLink = document.querySelectorAll('a[href="#cta-accept"]');
      ctaLink.forEach(a => {
        a.addEventListener('click', (e) => {
          const t = qs('#cta-accept');
          if (t) {
            e.preventDefault();
            t.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });

      // Init Lucide icons with stroke-width 1.5
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="relative">

<div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/70 to-transparent"></div>

<div className="mx-auto max-w-[800px] px-5 sm:px-6 md:px-8">

<section className="pt-10 sm:pt-14 md:pt-16 pb-10">
<div className="flex flex-col items-center text-center">
<p className="font-[Caveat] text-2xl md:text-3xl tracking-tight text-slate-700" style={{fontFamily: '\'Caveat\', cursive'}}>
              Salut <span className="px-1 rounded-md bg-orange-100 text-orange-800 underline decoration-orange-300/60" id="prenom-hero">[Prénom]</span> !
            </p>
<h1 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              J’aimerais t’offrir ce qu’il y a de plus précieux : du temps.
            </h1>
<div className="mt-6 w-full max-w-2xl">
<ul className="space-y-3 text-left mx-auto w-fit">
<li className="flex items-start gap-3">
<div className="mt-0.5 rounded-full bg-orange-100 p-2 ring-1 ring-orange-200">
<i className="h-4 w-4 text-orange-700" data-lucide="alarm-clock"></i>
</div>
<p className="leading-relaxed">Du temps pour développer ton entreprise.</p>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 rounded-full bg-orange-100 p-2 ring-1 ring-orange-200">
<i className="h-4 w-4 text-orange-700" data-lucide="users"></i>
</div>
<p className="leading-relaxed">Du temps pour tes proches.</p>
</li>
<li className="flex items-start gap-3">
<div className="mt-0.5 rounded-full bg-orange-100 p-2 ring-1 ring-orange-200">
<i className="h-4 w-4 text-orange-700" data-lucide="heart"></i>
</div>
<p className="leading-relaxed">Du temps pour toi.</p>
</li>
</ul>
</div>
</div>
</section>

<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

<section className="pt-10 pb-12">
<div className="rounded-2xl border border-slate-200 bg-white/90 shadow-sm backdrop-blur">
<div className="p-6 md:p-8">
<p className="text-base/7 text-slate-700">
                Il y a peu, j’ai participé au Bootcamp
                <span className="font-medium text-slate-900">“La semaine la plus productive de ta vie”</span> de Gaëtan Rossier.
              </p>
<p className="mt-4 text-base/7 text-slate-700">
                Voici un aperçu de ce que j’ai réalisé en seulement <span className="font-medium text-slate-900">5 jours</span> :
              </p>

<div className="mt-6">
<div className="relative mx-auto aspect-video max-w-3xl overflow-hidden rounded-xl border border-slate-200 shadow-md">
<video className="h-full w-full" controls="" id="temoignage-video" poster="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&amp;w=1200&amp;auto=format&amp;fit=crop" preload="metadata">
<source src="https://cdn.coverr.co/videos/coverr-working-on-the-go-5963/1080p.mp4" type="video/mp4"/>
                    Votre navigateur ne supporte pas la vidéo HTML5.
                  </video>
</div>
</div>

<div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

<div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
<div className="flex items-center justify-between">
<div className="rounded-md bg-orange-50 p-2 ring-1 ring-orange-200">
<i className="h-4 w-4 text-orange-700" data-lucide="check-circle-2"></i>
</div>
<span className="text-xs font-medium text-slate-500">5 jours</span>
</div>
<div className="mt-3">
<div className="text-3xl font-semibold tracking-tight text-slate-900">
<span id="counter-taches">0</span>
</div>
<p className="mt-1 text-sm text-slate-600">tâches accomplies</p>
</div>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
<div className="flex items-center justify-between">
<div className="rounded-md bg-orange-50 p-2 ring-1 ring-orange-200">
<i className="h-4 w-4 text-orange-700" data-lucide="timer"></i>
</div>
<span className="text-xs font-medium text-slate-500">par semaine</span>
</div>
<div className="mt-3">
<div className="text-3xl font-semibold tracking-tight text-slate-900">
<span id="counter-heures">0</span><span className="text-xl text-slate-700"> h</span>
</div>
<p className="mt-1 text-sm text-slate-600">gagnées durablement</p>
</div>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
<div className="flex items-center justify-between">
<div className="rounded-md bg-orange-50 p-2 ring-1 ring-orange-200">
<i className="h-4 w-4 text-orange-700" data-lucide="trophy"></i>
</div>
<span className="text-xs font-medium text-slate-500">impact</span>
</div>
<div className="mt-3">
<p className="text-base font-medium text-slate-900" id="victoire-card">
                      🎯 <span className="underline decoration-orange-300/60 text-orange-800">[Victoire personnelle marquante]</span>
</p>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-center">
<span className="rounded-full bg-orange-100 px-2.5 py-1 text-sm font-medium text-orange-800 ring-1 ring-orange-200">
                  Résultat ?
                </span>
</div>
<p className="mt-3 text-center text-lg font-medium text-slate-800">
                L’une des semaines les plus productives de ma vie.
              </p>
</div>
</div>
</section>

<section className="py-8">
<div className="text-center">
<h2 className="text-xl md:text-2xl font-semibold tracking-tight text-slate-900">Comment c’est possible ?</h2>
<p className="mx-auto mt-3 max-w-2xl text-base/7 text-slate-700">
              Le bootcamp, c’est <span className="font-medium text-slate-900">5 jours de passage à l’action</span> entre entrepreneurs.
              Tout est optimisé pour que tu sois efficace. <span className="font-medium text-slate-900">Pas de blabla théorique.</span>
              Que du concret. Et beaucoup de résultats.
            </p>
</div>
</section>

<div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>

<section className="py-10 md:py-12">
<div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">

<div className="border-b border-slate-200 bg-orange-50/70 px-6 py-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-orange-700" data-lucide="gift"></i>
<h3 className="text-lg md:text-xl font-semibold tracking-tight text-orange-900">
                    Mon cadeau pour toi, <span className="rounded px-1 underline decoration-orange-300/60 text-orange-800" id="prenom-cadeau">[Prénom]</span>
</h3>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                    Exclusif
                  </span>
</div>
</div>
</div>

<div className="px-6 py-6 md:px-8 md:py-8">
<div className="space-y-5">
<p className="text-base/7 text-slate-700">
                  En plus d’avoir gagné en efficacité et abattu une montagne de tâches durant cette semaine...
                </p>
<p className="text-base/7 text-slate-700">
                  J’ai complété <span className="font-medium text-slate-900">7 challenges</span> durant le bootcamp pour débloquer quelque chose d’unique :
                  <span className="rounded bg-orange-100 px-1.5 py-0.5 font-medium text-orange-900 ring-1 ring-orange-200/80">un upgrade VIP</span>
                  que je t’offre (<span className="line-through text-slate-500">valeur 200 CHF</span> <span className="ml-1 rounded bg-emerald-100 px-1.5 py-0.5 text-sm font-medium text-emerald-800 ring-1 ring-emerald-200">Offert</span>).
                </p>
<p className="text-base/7 text-slate-700">
                  Pourquoi toi ? Parce que je crois en ton ambition et je veux te voir réussir. Si tu participes au Bootcamp, tu le feras directement en tant que <span className="font-medium text-slate-900">VIP</span>.
                </p>

<div className="rounded-lg border-l-4 border-orange-400 bg-orange-50/60 px-4 py-3">
<p className="text-sm text-slate-800">
                    Ce bonus n’existe que sur cette page. Gaëtan l’a créé spécialement pour que je puisse te le partager.
                  </p>
</div>

<div className="mt-4 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
<div className="flex items-center gap-3">
<span className="inline-flex items-center gap-2 rounded-md bg-rose-100 px-2.5 py-1 text-sm font-medium text-rose-800 ring-1 ring-rose-200">
<i className="h-4 w-4" data-lucide="hourglass"></i>
                      Expire dans 7 jours
                    </span>
<div className="text-sm text-slate-600">
<span className="font-medium text-slate-900" id="countdown">07j 00h 00m 00s</span>
</div>
</div>
<a className="group inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-6 py-3 text-base font-medium text-white shadow-sm ring-1 ring-orange-600/20 transition-all hover:bg-orange-700 hover:shadow-md hover:ring-orange-600/30 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500" href="#cta-accept" id="cta-desktop">
<i className="h-5 w-5 text-white" data-lucide="sparkles"></i>
                    J’accepte ton cadeau
                    <i className="h-5 w-5 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
</div>
</div>

<p className="mt-4 text-xs text-slate-500">
                L’upgrade VIP est offert si tu t’inscris via cette page, avant l’expiration du compte à rebours.
              </p>
</div>
</div>
</section>

<section className="pb-32">
<div className="mx-auto max-w-2xl text-left">
<p className="italic text-slate-700">
              PS : En toute transparence, si tu y participes je recevrai aussi un accès pour vivre une nouvelle fois l’une des semaines
              les plus productives de ma vie. On peut même se coordonner pour le faire ensemble !
            </p>
<div className="mt-4">
<p className="font-[Caveat] text-2xl text-slate-800" style={{fontFamily: '\'Caveat\', cursive'}}>
                — <span id="signature">[Nom du client]</span>
</p>
</div>
</div>
</section>
</div>

<div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/90 p-3 backdrop-blur sm:hidden">
<a className="group flex w-full items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3 text-base font-medium text-white shadow-sm ring-1 ring-orange-600/20 transition-all hover:bg-orange-700 hover:shadow-md active:scale-[0.98]" href="#cta-accept">
<i className="h-5 w-5 text-white" data-lucide="gift"></i>
          J’accepte ton cadeau
          <i className="h-5 w-5 transition-transform group-hover:translate-x-0.5" data-lucide="arrow-right"></i>
</a>
</div>

<div aria-hidden="true" className="sr-only" id="cta-accept" tabindex="-1"></div>
</main>




    </>
  );
}
