import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Iconify stroke width
    (function () {
      const applyStroke = () => {
        document.querySelectorAll('iconify-icon').forEach(i => { i.style.strokeWidth = '1.5'; });
      };
      applyStroke();
      new MutationObserver(applyStroke).observe(document.body, { childList: true, subtree: true });
    })();

    // Router
    const routes = {
      '/': { tpl: 'tpl-home', title: 'icom lab — Accueil' },
      '/services': { tpl: 'tpl-services', title: 'icom lab — Services 360°' },
      '/agence': { tpl: 'tpl-agence', title: 'icom lab — L’agence' },
      '/temoignages': { tpl: 'tpl-temoignages', title: 'icom lab — Témoignages' },
      '/contact': { tpl: 'tpl-contact', title: 'icom lab — Contact' },
      '/mentions-legales': { tpl: 'tpl-legal', title: 'icom lab — Mentions légales', legal: { kicker: 'Légal', h1: 'Mentions légales' } },
      '/cgps-b2b': { tpl: 'tpl-legal', title: 'icom lab — CGPS B2B', legal: { kicker: 'Légal', h1: 'CGPS B2B' } },
      '/confidentialite': { tpl: 'tpl-legal', title: 'icom lab — Confidentialité', legal: { kicker: 'Données', h1: 'Politique de confidentialité' } },
      '/cookies': { tpl: 'tpl-legal', title: 'icom lab — Cookies', legal: { kicker: 'Données', h1: 'Politique cookies' } },
    };

    function currentPath() {
      const hash = location.hash || '#/';
      const path = hash.replace('#', '') || '/';
      return path;
    }

    function render() {
      const path = currentPath();
      const route = routes[path] || routes['/'];
      document.title = route.title;

      const tpl = document.getElementById(route.tpl);
      const view = document.getElementById('view');
      view.innerHTML = '';
      view.appendChild(tpl.content.cloneNode(true));

      // Legal injection (unchanged behavior)
      if (route.tpl === 'tpl-legal' && route.legal) {
        const kicker = view.querySelector('#legalKicker');
        const title = view.querySelector('#legalTitle');
        const intro = view.querySelector('#legalIntro');
        const body = view.querySelector('#legalBody');

        if (kicker) kicker.textContent = route.legal.kicker;
        if (title) title.textContent = route.legal.h1;

        const map = {
          '/mentions-legales': {
            intro: "Indique ici les informations légales de l’éditeur du site (raison sociale, forme, capital, SIRET, RCS, adresse, directeur de publication, hébergeur).",
            body: ["Éditeur : icom lab (à compléter)", "Adresse : (à compléter)", "SIRET / RCS : (à compléter)", "Hébergement : (à compléter)", "Contact : (à compléter)"]
          },
          '/cgps-b2b': {
            intro: "Conditions générales de prestations de services (B2B). À personnaliser avec ton cadre contractuel.",
            body: ["Objet et périmètre", "Devis, prix, modalités de paiement", "Délais, validations, recettes", "Propriété intellectuelle", "Confidentialité", "Responsabilités, force majeure, droit applicable"]
          },
          '/confidentialite': {
            intro: "Politique de confidentialité (RGPD). À compléter avec base légale, données collectées, durées, droits, contact DPO.",
            body: ["Données collectées (formulaire, analytics, etc.)", "Finalités et bases légales", "Durées de conservation", "Sous-traitants", "Droits des personnes (accès, rectification, suppression, opposition, portabilité)", "Contact et réclamations"]
          },
          '/cookies': {
            intro: "Politique cookies. À compléter avec la liste des cookies, durée, finalité, consentement.",
            body: ["Cookies nécessaires", "Cookies de mesure d’audience", "Cookies marketing (si applicable)", "Gestion du consentement", "Comment modifier ses choix"]
          }
        };

        const content = map[path] || map['/mentions-legales'];
        if (intro) intro.textContent = content.intro;
        if (body) body.innerHTML = content.body.map(p => `<p>${p}</p>`).join('');
      }

      // Contact demo handler (unchanged)
      const form = view.querySelector('#contactForm');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          const ok = view.querySelector('#contactSuccess');
          if (ok) ok.classList.remove('hidden');
          form.reset();
        });
      }

      init3DCard(view);
      initMagnet(view);
      initAnimations(view);

      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    window.addEventListener('hashchange', render);
    render();

    // GSAP
    gsap.registerPlugin(ScrollTrigger);

    function initAnimations(scope) {
      ScrollTrigger.getAll().forEach(t => t.kill());

      // Reveal
      scope.querySelectorAll('.reveal').forEach((el) => {
        gsap.fromTo(el, { y: 16, opacity: 0, filter: 'blur(6px)' }, {
          y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.85, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%' }
        });
      });

      // Floaty
      const f1 = scope.querySelector('.floaty');
      const f2 = scope.querySelector('.floaty2');
      if (f1) gsap.to(f1, { y: -10, duration: 2.8, yoyo: true, repeat: -1, ease: 'sine.inOut' });
      if (f2) gsap.to(f2, { y: 12, duration: 3.2, yoyo: true, repeat: -1, ease: 'sine.inOut' });

      // Marquee
      const marquee = scope.querySelector('.marquee');
      if (marquee) gsap.to(marquee, { xPercent: -50, duration: 28, ease: 'none', repeat: -1 });

      // Parallax media (subtle) for images inside cards
      scope.querySelectorAll('section img').forEach((img) => {
        const wrap = img.parentElement;
        if (!wrap) return;
        gsap.fromTo(img, { y: 0 }, {
          y: -18, ease: 'none',
          scrollTrigger: { trigger: wrap, start: 'top bottom', end: 'bottom top', scrub: true }
        });
      });

      // Scrollytelling scene (enhanced + media swap)
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 overflow-hidden">
<canvas className="absolute inset-0 h-full w-full opacity-80" id="bgCanvas"></canvas>
<div className="absolute -top-24 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/35 via-violet-500/20 to-cyan-400/25 blur-3xl"></div>
<div className="absolute -bottom-32 left-10 h-[34rem] w-[34rem] rounded-full bg-gradient-to-tr from-cyan-400/25 via-indigo-500/20 to-fuchsia-500/25 blur-3xl"></div>
<div className="absolute right-0 top-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-violet-500/25 via-fuchsia-500/20 to-sky-400/25 blur-3xl"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,0.8))]"></div>
</div>
<div className="relative" id="app">

<header className="sticky top-0 z-40">
<div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-xl"></div>
<div className="absolute inset-x-0 bottom-0 h-px bg-white/10"></div>
<div className="relative mx-auto max-w-7xl px-6">
<div className="flex h-16 items-center justify-between">
<a className="group inline-flex items-center gap-3" data-route="" href="#/">
<span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/20 to-cyan-400/25 blur-[10px]"></span>
<span className="relative inline-flex h-5 w-5 rounded-md bg-white"></span>
</span>
<span className="text-sm font-semibold tracking-tight text-white/95">icom lab</span>
</a>
<nav className="hidden items-center gap-1 md:flex">
<a className="rounded-xl px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition" data-route="" href="#/">Accueil</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition" data-route="" href="#/services">Services 360°</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition" data-route="" href="#/agence">L’agence</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition" data-route="" href="#/temoignages">Témoignages</a>
<a className="rounded-xl px-3 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/5 transition" data-route="" href="#/contact">Contact</a>
</nav>
<div className="flex items-center gap-2">
<a className="hidden sm:inline-flex items-center justify-center rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/10 hover:bg-white/10 transition" data-route="" href="#/contact">
              Discuter
            </a>
<a className="magnet inline-flex items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-white/90 transition" data-route="" href="#/contact">
              Demander un devis
            </a>
</div>
</div>

<div className="md:hidden pb-4">
<div className="flex flex-wrap gap-2">
<a className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75 ring-1 ring-white/10 hover:bg-white/10 transition" data-route="" href="#/">Accueil</a>
<a className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75 ring-1 ring-white/10 hover:bg-white/10 transition" data-route="" href="#/services">Services 360°</a>
<a className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75 ring-1 ring-white/10 hover:bg-white/10 transition" data-route="" href="#/agence">Agence</a>
<a className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75 ring-1 ring-white/10 hover:bg-white/10 transition" data-route="" href="#/temoignages">Témoignages</a>
<a className="rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75 ring-1 ring-white/10 hover:bg-white/10 transition" data-route="" href="#/contact">Contact</a>
</div>
</div>
</div>
</header>
<main className="min-h-[70vh]" id="view">

<section className="mx-auto max-w-7xl px-6 pb-14 pt-10 sm:pt-14">
<div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
<div className="reveal">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75 ring-1 ring-white/10 backdrop-blur">
<span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-tr from-fuchsia-400 to-cyan-300"></span>
              Studio créatif &amp; product — design + build
            </div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              On crée des expériences digitales nettes, rapides et mémorables.
            </h1>
<p className="mt-4 text-base leading-relaxed text-white/70">
              icom lab accompagne les marques et produits en conception, identité, UI/UX et développement.
              Une exécution premium, du concept à la mise en ligne.
            </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="magnet inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-white/90 transition" data-route="" href="#/contact">
                Lancer un projet
              </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition" data-route="" href="#/services">
                Explorer les services 360°
                <iconify-icon className="ml-2 text-white/80" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
<div className="relative overflow-hidden rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
<div className="pointer-events-none absolute inset-0 opacity-70">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7886e3b6-d46b-45d9-9420-3c200c0c69e9_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent"></div>
</div>
<div className="relative">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:sparkles-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm font-semibold tracking-tight text-white/90">Branding</p>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/65">Identité visuelle, guidelines, assets.</p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur">
<div className="pointer-events-none absolute inset-0 opacity-70">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17025930-8806-4149-95d8-50014ddf5a54_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/35 to-transparent"></div>
</div>
<div className="relative">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:widget-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm font-semibold tracking-tight text-white/90">UI/UX</p>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/65">Design system, flows, prototypes.</p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur col-span-2 sm:col-span-1">
<div className="pointer-events-none absolute inset-0 opacity-70">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1d590a8-c6eb-418e-aa6d-6c2f648888a7_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/35 to-transparent"></div>
</div>
<div className="relative">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:code-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm font-semibold tracking-tight text-white/90">Build</p>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/65">Sites &amp; apps rapides, SEO, analytics.</p>
</div>
</div>
</div>
</div>
<div className="relative perspective">
<div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-fuchsia-500/25 via-violet-500/15 to-cyan-400/20 blur-2xl"></div>
<div className="relative overflow-hidden rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur card-3d">
<div className="absolute inset-0 opacity-60">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent"></div>
</div>
<div className="relative p-6 sm:p-7">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs font-medium text-white/60">Aperçu</p>
<h2 className="mt-1 text-xl font-semibold tracking-tight text-white/95">Kit de lancement icom lab</h2>
<p className="mt-2 text-sm leading-relaxed text-white/65">Une base claire pour démarrer vite : positionnement, style, pages clés et composants.</p>
</div>
<span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<iconify-icon className="text-white/85" icon="solar:palette-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</span>
</div>
<div className="mt-6 grid gap-3">
<div className="rounded-2xl bg-neutral-950/50 p-4 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<p className="text-sm font-semibold tracking-tight text-white/90">Landing</p>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10">
<iconify-icon className="text-white/70" icon="solar:zap-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                        5 jours
                      </span>
</div>
<div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/5 ring-1 ring-white/10">
<div className="h-full w-3/4 rounded-full bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-300"></div>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/60">Copy + UI + intégration + tracking.</p>
</div>
<div className="rounded-2xl bg-neutral-950/50 p-4 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<p className="text-sm font-semibold tracking-tight text-white/90">Design system</p>
<span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10">
<iconify-icon className="text-white/70" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                        évolutif
                      </span>
</div>
<div className="mt-3 grid grid-cols-3 gap-2">
<div className="h-9 rounded-xl bg-white/5 ring-1 ring-white/10"></div>
<div className="h-9 rounded-xl bg-white/5 ring-1 ring-white/10"></div>
<div className="h-9 rounded-xl bg-white/5 ring-1 ring-white/10"></div>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/60">Composants, variantes, tokens visuels.</p>
</div>
</div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<a className="magnet inline-flex flex-1 items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-white/90 transition" data-route="" href="#/contact">
                    Réserver un call
                  </a>
<a className="inline-flex flex-1 items-center justify-center rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition" data-route="" href="#/services">
                    Explorer l’offre
                  </a>
</div>
</div>
<div className="relative border-t border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] p-5 sm:p-6">
<div className="flex flex-wrap items-center gap-3 text-xs font-medium text-white/65">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<iconify-icon className="text-white/70" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    Qualité &amp; perf
                  </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<iconify-icon className="text-white/70" icon="solar:magnifer-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    SEO &amp; tracking
                  </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<iconify-icon className="text-white/70" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                    Livraison rapide
                  </span>
</div>
</div>
</div>
<div className="pointer-events-none absolute -left-4 top-10 hidden sm:block floaty">
<div className="overflow-hidden rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur">
<div className="absolute inset-0 opacity-60">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7886e3b6-d46b-45d9-9420-3c200c0c69e9_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent"></div>
</div>
<div className="relative">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm font-semibold tracking-tight text-white/90">Direction créative</p>
</div>
<p className="mt-1 text-sm leading-relaxed text-white/60">Un style cohérent, maîtrisé.</p>
</div>
</div>
</div>
<div className="pointer-events-none absolute -right-4 bottom-10 hidden sm:block floaty2">
<div className="overflow-hidden rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 backdrop-blur">
<div className="absolute inset-0 opacity-60">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17025930-8806-4149-95d8-50014ddf5a54_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/30 to-transparent"></div>
</div>
<div className="relative">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:speedometer-medium-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm font-semibold tracking-tight text-white/90">Performance</p>
</div>
<p className="mt-1 text-sm leading-relaxed text-white/60">Core Web Vitals en tête.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-14">
<div className="rounded-[2rem] bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur sm:p-7 reveal">
<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
<p className="text-sm font-medium text-white/65">
              Pour startups, PME et équipes produit — en France et à l’international.
            </p>
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 ring-1 ring-white/10">
<iconify-icon className="text-white/70" icon="solar:globus-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                FR / EN
              </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 ring-1 ring-white/10">
<iconify-icon className="text-white/70" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Réponse &lt; 24h
              </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 ring-1 ring-white/10">
<iconify-icon className="text-white/70" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Process clair
              </span>
</div>
</div>
<div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-950/30">
<div className="flex w-max gap-4 p-4 marquee">
<div className="h-16 w-56 shrink-0 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur flex items-center justify-center text-sm font-semibold tracking-tight text-white/85">STARTUPS</div>
<div className="h-16 w-56 shrink-0 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur flex items-center justify-center text-sm font-semibold tracking-tight text-white/85">PME</div>
<div className="h-16 w-56 shrink-0 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur flex items-center justify-center text-sm font-semibold tracking-tight text-white/85">ÉQUIPES PRODUIT</div>
<div className="h-16 w-56 shrink-0 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur flex items-center justify-center text-sm font-semibold tracking-tight text-white/85">FRANCE &amp; INTERNATIONAL</div>
<div className="h-16 w-56 shrink-0 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur flex items-center justify-center text-sm font-semibold tracking-tight text-white/85">STARTUPS</div>
<div className="h-16 w-56 shrink-0 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur flex items-center justify-center text-sm font-semibold tracking-tight text-white/85">PME</div>
<div className="h-16 w-56 shrink-0 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur flex items-center justify-center text-sm font-semibold tracking-tight text-white/85">ÉQUIPES PRODUIT</div>
<div className="h-16 w-56 shrink-0 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur flex items-center justify-center text-sm font-semibold tracking-tight text-white/85">FRANCE &amp; INTERNATIONAL</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-14">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between reveal">
<div>
<p className="text-xs font-medium text-white/55">Services 360°</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Stratégie, design, build — un seul cockpit.</h2>
</div>
<a className="inline-flex items-center justify-center rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition" data-route="" href="#/services">
            Voir les services
            <iconify-icon className="ml-2 text-white/80" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<article className="reveal rounded-[2rem] overflow-hidden bg-white/5 ring-1 ring-white/10 backdrop-blur">
<div className="relative h-40">
<img alt="Abstract neon wave" className="h-full w-full object-cover opacity-70" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent"></div>
<div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 backdrop-blur">
<iconify-icon className="text-white/80" icon="solar:pen-2-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Branding
              </div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold tracking-tight text-white/95">Identité &amp; positionnement</h3>
<p className="mt-2 text-base leading-relaxed text-white/65">Un message clair + un système visuel cohérent pour vendre sans forcer.</p>
</div>
</article>
<article className="reveal rounded-[2rem] overflow-hidden bg-white/5 ring-1 ring-white/10 backdrop-blur">
<div className="relative h-40">
<img alt="Neon phone" className="h-full w-full object-cover opacity-75" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1b98a0e-8414-4f43-97f4-7f19e45fabca_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent"></div>
<div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 backdrop-blur">
<iconify-icon className="text-white/80" icon="solar:widget-4-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                UI/UX
              </div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold tracking-tight text-white/95">Expériences &amp; interfaces</h3>
<p className="mt-2 text-base leading-relaxed text-white/65">Parcours fluides, composants solides, itérations rapides.</p>
</div>
</article>
<article className="reveal rounded-[2rem] overflow-hidden bg-white/5 ring-1 ring-white/10 backdrop-blur">
<div className="relative h-40">
<img alt="Dark analytics dashboard" className="h-full w-full object-cover opacity-80" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent"></div>
<div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 text-xs font-medium text-white/80 ring-1 ring-white/10 backdrop-blur">
<iconify-icon className="text-white/80" icon="solar:code-2-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Build
              </div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold tracking-tight text-white/95">Dév, perf &amp; SEO</h3>
<p className="mt-2 text-base leading-relaxed text-white/65">Performances, tracking, SEO technique, mise en prod propre.</p>
</div>
</article>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-14">
<div className="rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden reveal" id="scrollyBlock">
<div className="grid lg:grid-cols-2">
<div className="p-7 sm:p-9">
<p className="text-xs font-medium text-white/55">Scrolly</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Une expérience qui se découvre au défilement.</h2>
<p className="mt-3 text-base leading-relaxed text-white/65">Chaque étape déclenche un changement de scène, avec un rythme clair et des décisions rapides.</p>
<div className="mt-6 space-y-3" id="storySteps">
<div className="story-step rounded-2xl bg-neutral-950/40 p-5 ring-1 ring-white/10 ring-white/30" data-step="1">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-base font-semibold tracking-tight text-white/95">1) Cadrage</p>
</div>
<span className="text-xs font-medium text-white/55">Objectifs</span>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/65">Structure, message, pages, contraintes.</p>
</div>
<div className="story-step rounded-2xl bg-neutral-950/40 p-5 ring-1 ring-white/10" data-step="2">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-base font-semibold tracking-tight text-white/95">2) Design</p>
</div>
<span className="text-xs font-medium text-white/55">UI/UX</span>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/65">Prototype, composants, itérations.</p>
</div>
<div className="story-step rounded-2xl bg-neutral-950/40 p-5 ring-1 ring-white/10" data-step="3">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:terminal-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-base font-semibold tracking-tight text-white/95">3) Build</p>
</div>
<span className="text-xs font-medium text-white/55">Perf</span>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/65">Intégration, SEO, tracking, QA.</p>
</div>
<div className="story-step rounded-2xl bg-neutral-950/40 p-5 ring-1 ring-white/10" data-step="4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:rocket-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-base font-semibold tracking-tight text-white/95">4) Shipping</p>
</div>
<span className="text-xs font-medium text-white/55">Prod</span>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/65">Mise en ligne, monitoring, itérations.</p>
</div>
</div>
</div>
<div className="relative lg:sticky lg:top-24 min-h-[22rem] lg:min-h-[34rem] bg-neutral-950/20 p-7 sm:p-9">
<div className="absolute inset-0">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_60%)]"></div>
</div>
<div className="relative h-full">
<div className="relative overflow-hidden h-full w-full rounded-[2rem] ring-1 ring-white/10 bg-white/5 backdrop-blur">
<div className="absolute inset-0 opacity-60" id="sceneMediaWrap">
<img alt="" className="h-full w-full object-cover" id="sceneMedia" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7886e3b6-d46b-45d9-9420-3c200c0c69e9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/35 to-transparent"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.10),transparent_55%)]"></div>
</div>
<div className="relative flex h-full items-end p-6 sm:p-7">
<div className="scene-card w-full rounded-[2rem] bg-neutral-950/50 ring-1 ring-white/10 p-6" style={{transform: 'perspective(900px) rotateY(-9deg) rotateX(3deg)', boxShadow: '0 30px 80px rgba(0,0,0,0.45)'}}>
<p className="text-xs font-medium text-white/60">Scène</p>
<p className="mt-2 text-lg font-semibold tracking-tight text-white/95" id="sceneTitle">Cadrage</p>
<p className="mt-2 text-sm leading-relaxed text-white/65" id="sceneDesc">On cadre objectifs, audience, message et structure.</p>
<div className="mt-5 grid grid-cols-3 gap-2">
<div className="h-10 rounded-xl bg-white/5 ring-1 ring-white/10"></div>
<div className="h-10 rounded-xl bg-white/5 ring-1 ring-white/10"></div>
<div className="h-10 rounded-xl bg-white/5 ring-1 ring-white/10"></div>
</div>
<div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-white/70">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<iconify-icon className="text-white/75" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                          Décisions nettes
                        </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<iconify-icon className="text-white/75" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                          Système réutilisable
                        </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<iconify-icon className="text-white/75" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                          Livraison rapide
                        </span>
</div>
</div>
</div>
</div>
<p className="mt-4 text-xs font-medium text-white/50">Astuce : sur desktop, bouge la souris sur la carte (effet 3D).</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-14">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between reveal">
<div>
<p className="text-xs font-medium text-white/55">Projets</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Des livrables qui respirent la qualité.</h2>
</div>
<a className="inline-flex items-center justify-center rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition" data-route="" href="#/contact">
            Recevoir une sélection
            <iconify-icon className="ml-2 text-white/80" icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<article className="reveal group overflow-hidden rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur">
<div className="relative h-44 sm:h-48">
<img alt="" className="h-full w-full object-cover opacity-80" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7886e3b6-d46b-45d9-9420-3c200c0c69e9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/20 to-transparent"></div>
<div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 text-xs font-medium text-white/75 ring-1 ring-white/10 backdrop-blur">
<iconify-icon className="text-white/80" icon="solar:sparkles-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Landing premium
              </div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold tracking-tight text-white/95">Site vitrine orienté conversion</h3>
<p className="mt-2 text-base leading-relaxed text-white/65">Hero fort, preuve sociale, CTA précis — prêt pour l’acquisition.</p>
</div>
</article>
<article className="reveal group overflow-hidden rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur">
<div className="relative h-44 sm:h-48">
<img alt="" className="h-full w-full object-cover opacity-80" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1d590a8-c6eb-418e-aa6d-6c2f648888a7_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/20 to-transparent"></div>
<div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 text-xs font-medium text-white/75 ring-1 ring-white/10 backdrop-blur">
<iconify-icon className="text-white/80" icon="solar:widget-2-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Design system
              </div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold tracking-tight text-white/95">Composants &amp; cohérence</h3>
<p className="mt-2 text-base leading-relaxed text-white/65">Bibliothèque solide pour itérer vite et garder la qualité.</p>
</div>
</article>
<article className="reveal group overflow-hidden rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur">
<div className="relative h-44 sm:h-48">
<img alt="" className="h-full w-full object-cover opacity-80" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17025930-8806-4149-95d8-50014ddf5a54_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/20 to-transparent"></div>
<div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 text-xs font-medium text-white/75 ring-1 ring-white/10 backdrop-blur">
<iconify-icon className="text-white/80" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Produit
              </div>
</div>
<div className="p-6">
<h3 className="text-lg font-semibold tracking-tight text-white/95">Web app &amp; parcours</h3>
<p className="mt-2 text-base leading-relaxed text-white/65">Écrans essentiels, onboarding, états, base technique prête à scaler.</p>
</div>
</article>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-14">
<div className="grid gap-6 lg:grid-cols-2 lg:items-center">
<div className="reveal">
<p className="text-xs font-medium text-white/55">L’agence</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Un studio petit, une exigence grande.</h2>
<p className="mt-3 text-base leading-relaxed text-white/65">Moins de layers, plus d’impact : design précis, build propre, itérations rapides.</p>
<div className="mt-6 grid gap-3 sm:grid-cols-2">
<div className="relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
<div className="pointer-events-none absolute inset-0 opacity-55">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7886e3b6-d46b-45d9-9420-3c200c0c69e9_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/35 to-transparent"></div>
</div>
<div className="relative">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm font-semibold tracking-tight text-white/90">Qualité</p>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/65">UI nette, accessibilité, détails cohérents.</p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
<div className="pointer-events-none absolute inset-0 opacity-55">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1d590a8-c6eb-418e-aa6d-6c2f648888a7_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/35 to-transparent"></div>
</div>
<div className="relative">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:chart-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm font-semibold tracking-tight text-white/90">Efficacité</p>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/65">Décisions rapides, cycles courts, livraison.</p>
</div>
</div>
</div>
</div>
<div className="reveal overflow-hidden rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur">
<div className="relative">
<img alt="Floating gradient discs" className="h-64 w-full object-cover opacity-80 sm:h-80" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e1b99b27-460a-4be5-a724-b983cad2af0c_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-neutral-950/10 to-transparent"></div>
<div className="absolute bottom-5 left-5 rounded-2xl bg-black/30 px-4 py-3 ring-1 ring-white/10 backdrop-blur">
<p className="text-sm font-semibold tracking-tight text-white/90">Design, build, ship.</p>
<p className="mt-1 text-sm text-white/60">Un rythme qui respecte ton calendrier.</p>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-16">
<div className="relative overflow-hidden rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur reveal">
<div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/20 via-violet-500/10 to-cyan-400/15"></div>
<div className="absolute inset-0 opacity-45">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17025930-8806-4149-95d8-50014ddf5a54_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/45 to-transparent"></div>
</div>
<div className="relative p-7 sm:p-9 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
<div className="max-w-2xl">
<p className="text-xs font-medium text-white/55">Prêt</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">On démarre quand tu veux.</h2>
<p className="mt-3 text-base leading-relaxed text-white/70">Un brief court, une proposition claire, un planning réaliste.</p>
</div>
<div className="flex flex-col gap-3 sm:flex-row">
<a className="magnet inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-white/90 transition" data-route="" href="#/contact">
                Demander un devis
              </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition" data-route="" href="#/services">
                Voir services 360°
              </a>
</div>
</div>
</div>
</section>
</main>

<footer className="mx-auto max-w-7xl px-6 pb-10">
<div className="relative overflow-hidden rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur">
<div className="absolute inset-0 opacity-55">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1d590a8-c6eb-418e-aa6d-6c2f648888a7_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/50 to-neutral-950/80"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_55%)]"></div>
</div>
<div className="relative p-7 sm:p-9">
<div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
<div className="max-w-xl">
<div className="flex items-center gap-3">
<span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
<span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-fuchsia-500/30 via-violet-500/20 to-cyan-400/25 blur-[10px]"></span>
<span className="relative inline-flex h-5 w-5 rounded-md bg-white"></span>
</span>
<p className="text-sm font-semibold tracking-tight text-white/95">icom lab</p>
</div>
<p className="mt-4 text-base leading-relaxed text-white/65">
                Studio design + build. Des interfaces précises, une exécution rapide, une base technique propre.
              </p>
<div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-white/70">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<iconify-icon className="text-white/75" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  Réponse &lt; 24h
                </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<iconify-icon className="text-white/75" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  Qualité &amp; perf
                </span>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<iconify-icon className="text-white/75" icon="solar:globus-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                  FR / EN
                </span>
</div>
</div>
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
<div>
<p className="text-xs font-semibold tracking-tight text-white/85">Pages</p>
<div className="mt-3 grid gap-2">
<a className="text-sm font-medium text-white/65 hover:text-white transition" data-route="" href="#/">Accueil</a>
<a className="text-sm font-medium text-white/65 hover:text-white transition" data-route="" href="#/services">Services 360°</a>
<a className="text-sm font-medium text-white/65 hover:text-white transition" data-route="" href="#/agence">L’agence</a>
<a className="text-sm font-medium text-white/65 hover:text-white transition" data-route="" href="#/temoignages">Témoignages</a>
<a className="text-sm font-medium text-white/65 hover:text-white transition" data-route="" href="#/contact">Contact</a>
</div>
</div>
<div>
<p className="text-xs font-semibold tracking-tight text-white/85">Légal</p>
<div className="mt-3 grid gap-2">
<a className="text-sm font-medium text-white/65 hover:text-white transition" data-route="" href="#/mentions-legales">Mentions légales</a>
<a className="text-sm font-medium text-white/65 hover:text-white transition" data-route="" href="#/cgps-b2b">CGPS B2B</a>
<a className="text-sm font-medium text-white/65 hover:text-white transition" data-route="" href="#/confidentialite">Confidentialité</a>
<a className="text-sm font-medium text-white/65 hover:text-white transition" data-route="" href="#/cookies">Cookies</a>
</div>
</div>
<div>
<p className="text-xs font-semibold tracking-tight text-white/85">Prendre rendez-vous</p>
<p className="mt-3 text-sm leading-relaxed text-white/65">Un call de 15 minutes pour cadrer besoin, délai et budget.</p>
<div className="mt-4 flex flex-col gap-2">
<a className="magnet inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-white/90 transition" data-route="" href="#/contact">
                    Réserver un call
                  </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 ring-1 ring-white/10 hover:bg-white/10 transition" data-route="" href="#/services">
                    Voir l’offre 360°
                  </a>
</div>
</div>
</div>
</div>
<div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
<p className="text-sm font-medium text-white/50">© <span id="year">2026</span> icom lab. Tous droits réservés.</p>
<div className="flex items-center gap-3 text-sm font-medium text-white/55">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<iconify-icon className="text-white/70" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Build rapide
              </span>
<span className="hidden sm:inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">
<iconify-icon className="text-white/70" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                Focus conversion
              </span>
</div>
</div>
</div>
</div>
</footer>
</div>

<template id="tpl-home"></template>

<template id="tpl-services">
<section className="mx-auto max-w-7xl px-6 pb-14 pt-10 sm:pt-14">
<div className="grid gap-10 lg:grid-cols-2 lg:items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/75 ring-1 ring-white/10 backdrop-blur">
<span className="inline-flex h-2 w-2 rounded-full bg-gradient-to-tr from-fuchsia-400 to-cyan-300"></span>
            Offre “Services 360°”
          </div>
<h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Du cadrage au shipping, sans friction.
          </h1>
<p className="mt-4 text-base leading-relaxed text-white/70">
            Une offre complète pour lancer, refondre ou améliorer un produit : stratégie, design, développement, SEO, tracking — avec un process court et lisible.
          </p>
<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="magnet inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-white/90 transition" data-route="" href="#/contact">
              Demander un devis
            </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/10 backdrop-blur hover:bg-white/10 transition" href="#services-packages">
              Voir les packs
              <iconify-icon className="ml-2 text-white/80" icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
<div className="mt-8 grid gap-3 sm:grid-cols-2">
<div className="relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
<div className="pointer-events-none absolute inset-0 opacity-55">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7886e3b6-d46b-45d9-9420-3c200c0c69e9_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/35 to-transparent"></div>
</div>
<div className="relative">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:target-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm font-semibold tracking-tight text-white/90">Priorités</p>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/65">On se concentre sur ce qui bouge le KPI : conversion, activation, SEO.</p>
</div>
</div>
<div className="relative overflow-hidden rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
<div className="pointer-events-none absolute inset-0 opacity-55">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1d590a8-c6eb-418e-aa6d-6c2f648888a7_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/35 to-transparent"></div>
</div>
<div className="relative">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm font-semibold tracking-tight text-white/90">Qualité</p>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/65">UI propre, accessibilité, code maintenable, perf.</p>
</div>
</div>
</div>
</div>
<div className="reveal">
<div className="relative overflow-hidden rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur">
<div className="absolute inset-0 opacity-65">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/35 to-transparent"></div>
</div>
<div className="relative p-7 sm:p-9">
<p className="text-xs font-medium text-white/55">Ce que tu reçois</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Un système complet, prêt à itérer.</h2>
<div className="mt-6 grid gap-3">
<div className="rounded-2xl bg-neutral-950/50 p-5 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:layers-minimalistic-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm font-semibold tracking-tight text-white/90">Design system</p>
</div>
<span className="text-xs font-medium text-white/55">Composants</span>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/65">Tokens visuels, variantes, états, guidelines d’usage.</p>
</div>
<div className="rounded-2xl bg-neutral-950/50 p-5 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:graph-up-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm font-semibold tracking-tight text-white/90">SEO + tracking</p>
</div>
<span className="text-xs font-medium text-white/55">Mesure</span>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/65">Structure SEO, events clés, analytics, dashboards légers.</p>
</div>
<div className="rounded-2xl bg-neutral-950/50 p-5 ring-1 ring-white/10">
<div className="flex items-start justify-between gap-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:speedometer-medium-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<p className="text-sm font-semibold tracking-tight text-white/90">Perf</p>
</div>
<span className="text-xs font-medium text-white/55">Core Web Vitals</span>
</div>
<p className="mt-2 text-sm leading-relaxed text-white/65">Optimisation images, bundle, rendering, UX perçue.</p>
</div>
</div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row">
<a className="magnet inline-flex flex-1 items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-white/90 transition" data-route="" href="#/contact">
                  Parler du projet
                </a>
<a className="inline-flex flex-1 items-center justify-center rounded-xl bg-white/5 px-4 py-2.5 text-sm font-medium text-white/90 ring-1 ring-white/10 hover:bg-white/10 transition" href="#services-packages">
                  Voir les packs
                </a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-14">
<div className="reveal">
<p className="text-xs font-medium text-white/55">Modules</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Tout ce qu’il faut, au bon moment.</h2>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<article className="reveal relative overflow-hidden rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur">
<div className="absolute inset-0 opacity-60">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/35 to-transparent"></div>
</div>
<div className="relative p-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:clipboard-list-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-white/95">Stratégie &amp; cadrage</h3>
</div>
<p className="mt-2 text-base leading-relaxed text-white/65">Positionnement, angle, structure pages, plan d’itérations.</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-white/70">
<span className="rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">Roadmap</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">Copy</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">Architecture</span>
</div>
</div>
</article>
<article className="reveal relative overflow-hidden rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur">
<div className="absolute inset-0 opacity-60">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1b98a0e-8414-4f43-97f4-7f19e45fabca_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/35 to-transparent"></div>
</div>
<div className="relative p-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:widget-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-white/95">UI/UX &amp; design system</h3>
</div>
<p className="mt-2 text-base leading-relaxed text-white/65">Wireframes, UI, composants, states, prototypage.</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-white/70">
<span className="rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">Composants</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">Prototypes</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">Accessibilité</span>
</div>
</div>
</article>
<article className="reveal relative overflow-hidden rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur">
<div className="absolute inset-0 opacity-60">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92d0c40f-f813-47fd-a53a-5def9c2ca85c_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/35 to-transparent"></div>
</div>
<div className="relative p-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/85" icon="solar:code-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<h3 className="text-lg font-semibold tracking-tight text-white/95">Build &amp; shipping</h3>
</div>
<p className="mt-2 text-base leading-relaxed text-white/65">Intégration, performance, SEO technique, mise en prod et QA.</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-white/70">
<span className="rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">Perf</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">SEO</span>
<span className="rounded-full bg-white/5 px-3 py-1.5 ring-1 ring-white/10">Analytics</span>
</div>
</div>
</article>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-14" id="services-packages">
<div className="reveal">
<p className="text-xs font-medium text-white/55">Packs</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Choisir un cadre, garder la flexibilité.</h2>
<p className="mt-3 text-base leading-relaxed text-white/65">Trois formats — même exigence. On ajuste ensuite selon le besoin.</p>
</div>
<div className="mt-8 grid gap-4 lg:grid-cols-3">
<article className="reveal rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
<div className="relative h-32">
<img alt="" className="h-full w-full object-cover opacity-80" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7886e3b6-d46b-45d9-9420-3c200c0c69e9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/30 to-transparent"></div>
</div>
<div className="p-6">
<p className="text-xs font-medium text-white/55">Pour démarrer</p>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-white/95">Launch</h3>
<p className="mt-2 text-base leading-relaxed text-white/65">Landing + design system léger + tracking essentiel.</p>
<div className="mt-5 grid gap-2 text-sm text-white/65">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/70" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                1 page haute conversion
              </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white/70" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                8–12 composants clés
              </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white/70" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Events + analytics
              </div>
</div>
<a className="magnet mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-white/90 transition" data-route="" href="#/contact">
              Estimer ce pack
            </a>
</div>
</article>
<article className="reveal rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
<div className="relative h-32">
<img alt="" className="h-full w-full object-cover opacity-80" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f1d590a8-c6eb-418e-aa6d-6c2f648888a7_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/30 to-transparent"></div>
</div>
<div className="p-6">
<div className="flex items-center justify-between gap-3">
<div>
<p className="text-xs font-medium text-white/55">Le plus demandé</p>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-white/95">Growth</h3>
</div>
<span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1.5 text-xs font-medium text-white/70 ring-1 ring-white/10">Recommandé</span>
</div>
<p className="mt-2 text-base leading-relaxed text-white/65">Site multi-pages + design system complet + SEO technique.</p>
<div className="mt-5 grid gap-2 text-sm text-white/65">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/70" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                4–8 pages + templates
              </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white/70" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                DS solide (variants/états)
              </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white/70" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                SEO + performance
              </div>
</div>
<a className="magnet mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-white/90 transition" data-route="" href="#/contact">
              Estimer ce pack
            </a>
</div>
</article>
<article className="reveal rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden">
<div className="relative h-32">
<img alt="" className="h-full w-full object-cover opacity-80" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/17025930-8806-4149-95d8-50014ddf5a54_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/30 to-transparent"></div>
</div>
<div className="p-6">
<p className="text-xs font-medium text-white/55">Pour le produit</p>
<h3 className="mt-2 text-lg font-semibold tracking-tight text-white/95">Product</h3>
<p className="mt-2 text-base leading-relaxed text-white/65">Parcours app, onboarding, design system scalable + QA.</p>
<div className="mt-5 grid gap-2 text-sm text-white/65">
<div className="flex items-center gap-2">
<iconify-icon className="text-white/70" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Écrans essentiels + states
              </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white/70" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Système scalable
              </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-white/70" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                Perf + instrumentation
              </div>
</div>
<a className="magnet mt-6 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 hover:bg-white/90 transition" data-route="" href="#/contact">
              Estimer ce pack
            </a>
</div>
</article>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-16">
<div className="relative overflow-hidden rounded-[2rem] bg-white/5 ring-1 ring-white/10 backdrop-blur reveal">
<div className="absolute inset-0 opacity-55">
<img alt="" className="h-full w-full object-cover" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fa51902b-c2a4-4c33-a96e-a8f1ef67edc6_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/45 to-transparent"></div>
</div>
<div className="relative p-7 sm:p-9 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
<div className="max-w-2xl">
<p className="text-xs font-medium text-white/55">Go</p>
<h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Tu veux un audit rapide de ton site ?</h2>
<p className="mt-3 text-base leading-relaxed text-white/70">On te donne 10 améliorations concrètes (UX, copy, perf, SEO) et un plan d’action.</p>
</div>
<div className="flex flex-col gap-3 sm:flex-row">
<a className="magnet inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 hover:bg-white/90 transition" data-route="" href="#/contact">
              Obtenir l’audit
            </a>
<a className="inline-flex items-center justify-center rounded-xl bg-white/5 px-5 py-3 text-sm font-medium text-white/90 ring-1 ring-white/10 hover:bg-white/10 transition" data-route="" href="#/">
              Voir la home
            </a>
</div>
</div>
</div>
</section>
</template>
<template id="tpl-agence"></template>
<template id="tpl-temoignages"></template>
<template id="tpl-contact"></template>
<template id="tpl-legal"></template>

<div className="fixed bottom-4 left-0 right-0 z-50 hidden px-4" id="cookieBanner">
<div className="mx-auto max-w-3xl rounded-[2rem] bg-neutral-950/70 ring-1 ring-white/10 backdrop-blur p-4 sm:p-5">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
<div className="max-w-2xl">
<p className="text-sm font-semibold tracking-tight text-white/90">Cookies</p>
<p className="mt-1 text-sm leading-relaxed text-white/65">On utilise des cookies pour mesurer et améliorer l’expérience. Tu peux accepter ou refuser.</p>
</div>
<div className="flex gap-2">
<button className="rounded-xl bg-white/5 px-4 py-2 text-sm font-medium text-white/90 ring-1 ring-white/10 hover:bg-white/10 transition" id="cookieReject">Refuser</button>
<button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-neutral-950 hover:bg-white/90 transition" id="cookieAccept">Accepter</button>
</div>
</div>
</div>
</div>

    </>
  );
}
