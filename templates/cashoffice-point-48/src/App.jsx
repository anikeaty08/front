import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Lucide icons
      if (window.lucide) {
        lucide.createIcons({ attrs: { 'stroke-width': '1.5' } });
      }

      // Mobile menu toggle
      const mobileBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
          const icon = mobileBtn.querySelector('i');
          if (icon) {
            icon.setAttribute('data-lucide', mobileMenu.classList.contains('hidden') ? 'menu' : 'x');
            lucide.createIcons({ attrs: { 'stroke-width': '1.5' } });
          }
        });
      }

      // Smooth scroll for anchor links (fallback for browsers without CSS smooth)
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
          const id = a.getAttribute('href');
          if (id && id.length > 1) {
            const el = document.querySelector(id);
            if (el) {
              e.preventDefault();
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              // Close mobile menu on navigate
              if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = mobileBtn?.querySelector('i');
                if (icon) {
                  icon.setAttribute('data-lucide', 'menu');
                  lucide.createIcons({ attrs: { 'stroke-width': '1.5' } });
                }
              }
            }
          }
        });
      });

      // Reveal on scroll (fade/slide via utility classes)
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0', 'translate-y-4');
            entry.target.classList.add('opacity-100', 'translate-y-0');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      document.querySelectorAll('[data-animate]').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-4', 'transition', 'duration-700', 'ease-out', 'will-change-transform');
        observer.observe(el);
      });

      // Logo carousel controls
      const rail = document.getElementById('logoRail');
      const prev = document.getElementById('logoPrev');
      const next = document.getElementById('logoNext');
      const scrollByAmount = () => Math.min(rail.clientWidth * 0.8, 400);

      if (rail && prev && next) {
        prev.addEventListener('click', () => {
          rail.scrollBy({ left: -scrollByAmount(), behavior: 'smooth' });
        });
        next.addEventListener('click', () => {
          rail.scrollBy({ left: scrollByAmount(), behavior: 'smooth' });
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur bg-white/75 border-b border-slate-200">
<div className="mx-auto max-w-7xl px-6">
<div className="flex items-center justify-between h-16">
<a aria-label="CashOffice Accueil" className="flex items-center gap-2 group" href="#">
<div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-[#0045FF] to-[#00B8FF] shadow-sm flex items-center justify-center ring-1 ring-white/10">
<span className="text-white font-semibold tracking-tight" style={{fontFamily: 'Manrope, Inter', letterSpacing: '-0.02em'}}>CO</span>
</div>
<span className="text-slate-900 font-semibold tracking-tight text-lg" style={{fontFamily: 'Manrope, Inter', letterSpacing: '-0.02em'}}>CashOffice</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#benefits">Fonctionnalités</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#audience">Solutions</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#how">Fonctionnement</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#blog">Ressources</a>
<a className="text-slate-600 hover:text-slate-900 transition-colors" href="#faq">FAQ</a>
</nav>
<div className="hidden md:flex items-center gap-3">
<a className="px-4 py-2 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors" href="#benefits">Voir les fonctionnalités</a>
<a className="px-4 py-2 rounded-xl text-white shadow-sm bg-gradient-to-tr from-[#0045FF] to-[#00B8FF] hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition" href="#cta">Demander une démo</a>
</div>
<button aria-label="Ouvrir le menu" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg border border-slate-200 hover:bg-slate-50 transition" id="mobileMenuBtn">
<i className="h-5 w-5 text-slate-700" data-lucide="menu"></i>
</button>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200 bg-white" id="mobileMenu">
<div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3 text-sm">
<a className="py-2 text-slate-700" href="#benefits">Fonctionnalités</a>
<a className="py-2 text-slate-700" href="#audience">Solutions</a>
<a className="py-2 text-slate-700" href="#how">Fonctionnement</a>
<a className="py-2 text-slate-700" href="#services">Services</a>
<a className="py-2 text-slate-700" href="#blog">Ressources</a>
<a className="py-2 text-slate-700" href="#faq">FAQ</a>
<a className="mt-2 px-4 py-2 rounded-xl text-white text-center shadow-sm bg-gradient-to-tr from-[#0045FF] to-[#00B8FF] hover:brightness-110 transition" href="#cta">Demander une démo</a>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white"></div>
<div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#00B8FF]/10 blur-3xl"></div>
<div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-[#0045FF]/10 blur-3xl"></div>
</div>
<div className="mx-auto max-w-7xl px-6 pt-14 pb-12 md:pt-24 md:pb-20">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="space-y-6" data-animate="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-200 bg-white/80 shadow-sm">
<i className="h-4 w-4 text-blue-600" data-lucide="shield-check"></i>
<span className="text-xs text-slate-700">Certifié loi anti‑fraude • RGPD</span>
</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Manrope, Inter', letterSpacing: '-0.02em'}}>
              Le logiciel de caisse qui fait tourner votre entreprise depuis 35 ans.
            </h1>
<p className="text-lg text-slate-600">
              CashOffice équipe des milliers de commerces en France avec une solution complète, fiable et conforme aux dernières normes.
            </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="px-6 py-3 rounded-xl text-white bg-gradient-to-tr from-[#0045FF] to-[#00B8FF] shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition inline-flex items-center gap-2" href="#cta">
<i className="h-5 w-5" data-lucide="sparkles"></i>
                Demander une démo gratuite
              </a>
<a className="px-6 py-3 rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition inline-flex items-center gap-2" href="#benefits">
<i className="h-5 w-5" data-lucide="list-checks"></i>
                Voir les fonctionnalités
              </a>
</div>
<div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-sky-50 text-blue-600 flex items-center justify-center ring-1 ring-sky-100">
<i className="h-5 w-5" data-lucide="cpu"></i>
</div>
<div>
<div className="text-sm text-slate-500">Depuis</div>
<div className="text-slate-900 font-semibold">1989</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-sky-50 text-blue-600 flex items-center justify-center ring-1 ring-sky-100">
<i className="h-5 w-5" data-lucide="users"></i>
</div>
<div>
<div className="text-sm text-slate-500">Clients actifs</div>
<div className="text-slate-900 font-semibold">+5 000</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-lg bg-sky-50 text-blue-600 flex items-center justify-center ring-1 ring-sky-100">
<i className="h-5 w-5" data-lucide="star"></i>
</div>
<div>
<div className="text-sm text-slate-500">Satisfaction</div>
<div className="text-slate-900 font-semibold">98%</div>
</div>
</div>
</div>
</div>
<div className="relative" data-animate="">
<div className="absolute -inset-6 bg-gradient-to-tr from-[#0045FF]/10 to-[#00B8FF]/10 rounded-3xl blur-xl"></div>
<div className="relative rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden">
<img alt="Interface de caisse moderne" className="w-full aspect-[16/10] object-cover" src="https://images.unsplash.com/photo-1542393545-10f5cde2c810?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-4 md:p-6 grid sm:grid-cols-3 gap-4">
<div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4 text-blue-600" data-lucide="credit-card"></i>
<span className="text-sm font-medium">Paiements TPE</span>
</div>
<p className="text-sm text-slate-500 mt-2">Intégration native et sécurisée.</p>
</div>
<div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4 text-blue-600" data-lucide="pie-chart"></i>
<span className="text-sm font-medium">Reporting</span>
</div>
<p className="text-sm text-slate-500 mt-2">Chiffre d’affaires en temps réel.</p>
</div>
<div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4 text-blue-600" data-lucide="lock"></i>
<span className="text-sm font-medium">Conformité</span>
</div>
<p className="text-sm text-slate-500 mt-2">Anti‑fraude &amp; RGPD certifiés.</p>
</div>
</div>
</div>
<div className="absolute -bottom-4 -right-4 px-3 py-2 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-2">
<i className="h-4 w-4 text-blue-600" data-lucide="activity"></i>
<span className="text-xs text-slate-700">Synchronisation cloud</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28" id="benefits">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-2xl" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Manrope, Inter', letterSpacing: '-0.02em'}}>Pourquoi choisir CashOffice ?</h2>
<p className="mt-3 text-slate-600">Une plateforme de caisse fiable, intuitive et conforme, pensée pour accélérer votre activité.</p>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow transition" data-animate="">
<div className="h-10 w-10 rounded-lg bg-sky-50 text-blue-600 flex items-center justify-center ring-1 ring-sky-100">
<i className="h-5 w-5" data-lucide="award"></i>
</div>
<h3 className="mt-4 font-semibold text-slate-900">Fiabilité éprouvée</h3>
<p className="mt-2 text-sm text-slate-600">35 ans d’expérience et des milliers de clients satisfaits.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow transition" data-animate="">
<div className="h-10 w-10 rounded-lg bg-sky-50 text-blue-600 flex items-center justify-center ring-1 ring-sky-100">
<i className="h-5 w-5" data-lucide="mouse-pointer-click"></i>
</div>
<h3 className="mt-4 font-semibold text-slate-900">Simplicité d’utilisation</h3>
<p className="mt-2 text-sm text-slate-600">Une interface intuitive, conçue pour les commerçants.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow transition" data-animate="">
<div className="h-10 w-10 rounded-lg bg-sky-50 text-blue-600 flex items-center justify-center ring-1 ring-sky-100">
<i className="h-5 w-5" data-lucide="shield"></i>
</div>
<h3 className="mt-4 font-semibold text-slate-900">Conforme et sécurisée</h3>
<p className="mt-2 text-sm text-slate-600">Certifié loi anti‑fraude et RGPD.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow transition" data-animate="">
<div className="h-10 w-10 rounded-lg bg-sky-50 text-blue-600 flex items-center justify-center ring-1 ring-sky-100">
<i className="h-5 w-5" data-lucide="headset"></i>
</div>
<h3 className="mt-4 font-semibold text-slate-900">Support humain en France</h3>
<p className="mt-2 text-sm text-slate-600">Une assistance disponible et réactive.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-slate-50" id="audience">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-3xl" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Manrope, Inter', letterSpacing: '-0.02em'}}>Une solution pensée pour chaque métier</h2>
<p className="mt-3 text-slate-600">Des modules et configurations adaptés à vos besoins spécifiques.</p>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<article className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-sm transition" data-animate="">
<img alt="Boulangerie &amp; pâtisserie" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4 text-blue-600" data-lucide="croissant"></i>
<h3 className="font-semibold">Boulangeries &amp; pâtisseries</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Gestion des produits au poids, tickets rapides et programmes de fidélité.</p>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-sm transition" data-animate="">
<img alt="Restaurants &amp; bars" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4 text-blue-600" data-lucide="utensils"></i>
<h3 className="font-semibold">Restaurants &amp; bars</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Plans de salle, notes partagées, gestion des menus et des stocks.</p>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-sm transition" data-animate="">
<img alt="Commerces de détail" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4 text-blue-600" data-lucide="shopping-bag"></i>
<h3 className="font-semibold">Commerces de détail</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Codes‑barres, variantes produits, remises et inventaires rapides.</p>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-sm transition" data-animate="">
<img alt="Salons de coiffure &amp; beauté" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-4 w-4 text-blue-600" data-lucide="scissors"></i>
<h3 className="font-semibold">Salons de coiffure &amp; beauté</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Rendez‑vous, prestations combinées, fiches clients et abonnements.</p>
</div>
</article>
</div>
</div>
</section>

<section className="py-20 md:py-28" id="how">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-2xl" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Manrope, Inter', letterSpacing: '-0.02em'}}>Comment ça marche ?</h2>
<p className="mt-3 text-slate-600">Mise en route simple, accompagnement complet et visibilité totale.</p>
</div>
<ol className="mt-10 grid md:grid-cols-3 gap-6">
<li className="relative p-6 rounded-2xl border border-slate-200 bg-white shadow-sm" data-animate="">
<div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">1</div>
<div className="h-10 w-10 rounded-lg bg-sky-50 text-blue-600 flex items-center justify-center ring-1 ring-sky-100">
<i className="h-5 w-5" data-lucide="box"></i>
</div>
<h3 className="mt-4 font-semibold">Installation rapide et paramétrage</h3>
<p className="mt-2 text-sm text-slate-600">Configuration sur site ou à distance, reprise des produits et des taxes.</p>
</li>
<li className="relative p-6 rounded-2xl border border-slate-200 bg-white shadow-sm" data-animate="">
<div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">2</div>
<div className="h-10 w-10 rounded-lg bg-sky-50 text-blue-600 flex items-center justify-center ring-1 ring-sky-100">
<i className="h-5 w-5" data-lucide="graduation-cap"></i>
</div>
<h3 className="mt-4 font-semibold">Formation personnalisée</h3>
<p className="mt-2 text-sm text-slate-600">Sessions adaptées à votre équipe, guides et vidéos pas à pas.</p>
</li>
<li className="relative p-6 rounded-2xl border border-slate-200 bg-white shadow-sm" data-animate="">
<div className="absolute -top-3 -left-3 h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm">3</div>
<div className="h-10 w-10 rounded-lg bg-sky-50 text-blue-600 flex items-center justify-center ring-1 ring-sky-100">
<i className="h-5 w-5" data-lucide="activity"></i>
</div>
<h3 className="mt-4 font-semibold">Gestion et suivi en temps réel</h3>
<p className="mt-2 text-sm text-slate-600">Tableau de bord, ventes, stocks et performances en un coup d’œil.</p>
</li>
</ol>
</div>
</section>

<section className="py-20 md:py-28 bg-slate-50" id="services">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-3xl" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Manrope, Inter', letterSpacing: '-0.02em'}}>Bien plus qu’un logiciel de caisse</h2>
<p className="mt-3 text-slate-600">Des services clés pour vous accompagner au quotidien.</p>
</div>
<div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-sm transition" data-animate="">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-5 w-5 text-blue-600" data-lucide="life-buoy"></i>
<h3 className="font-semibold">Maintenance &amp; assistance</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Support réactif, supervision proactive et mises à jour régulières.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-sm transition" data-animate="">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-5 w-5 text-blue-600" data-lucide="book-open-check"></i>
<h3 className="font-semibold">Formation utilisateurs</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Onboarding complet, e‑learning et guides pratiques.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-sm transition" data-animate="">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-5 w-5 text-blue-600" data-lucide="chart-line"></i>
<h3 className="font-semibold">Analyse et reporting</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Rapports détaillés, exports comptables et alertes intelligentes.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-200 bg-white hover:shadow-sm transition" data-animate="">
<div className="flex items-center gap-2 text-slate-700">
<i className="h-5 w-5 text-blue-600" data-lucide="printer"></i>
<h3 className="font-semibold">Intégration matérielle</h3>
</div>
<p className="mt-2 text-sm text-slate-600">Imprimantes tickets, TPE, tiroirs‑caisses, tablettes et scanners.</p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28" id="social">
<div className="mx-auto max-w-7xl px-6">
<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
<div className="max-w-2xl" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Manrope, Inter', letterSpacing: '-0.02em'}}>Ils nous font confiance</h2>
<p className="mt-3 text-slate-600">Des enseignes indépendantes aux groupes multi‑sites partout en France.</p>
</div>
<div className="grid grid-cols-3 gap-6 md:text-right" data-animate="">
<div>
<div className="text-3xl font-semibold text-slate-900">+5 000</div>
<div className="text-sm text-slate-500">clients actifs</div>
</div>
<div>
<div className="text-3xl font-semibold text-slate-900">98%</div>
<div className="text-sm text-slate-500">satisfaction</div>
</div>
<div>
<div className="text-3xl font-semibold text-slate-900">35 ans</div>
<div className="text-sm text-slate-500">d’expertise</div>
</div>
</div>
</div>

<div className="mt-10 relative">
<div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent"></div>
<div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent"></div>
<div className="flex gap-8 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-4" id="logoRail" style={{scrollbarWidth: 'none'}}>
<div className="shrink-0 snap-start px-6 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold tracking-tight" style={{letterSpacing: '-0.02em'}}>Boulangerie L&amp;A</div>
<div className="shrink-0 snap-start px-6 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold tracking-tight">Hôtel Rive Sud</div>
<div className="shrink-0 snap-start px-6 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold tracking-tight">Marché Central</div>
<div className="shrink-0 snap-start px-6 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold tracking-tight">Atelier Beauté</div>
<div className="shrink-0 snap-start px-6 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold tracking-tight">Café du Parc</div>
<div className="shrink-0 snap-start px-6 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold tracking-tight">Maison des Vins</div>
<div className="shrink-0 snap-start px-6 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold tracking-tight">Concept Store 44</div>
<div className="shrink-0 snap-start px-6 py-4 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold tracking-tight">Les P’tits Chefs</div>
</div>
<div className="mt-4 flex items-center justify-center gap-3">
<button className="h-9 w-9 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center justify-center" id="logoPrev">
<i className="h-5 w-5 text-slate-700" data-lucide="chevron-left"></i>
</button>
<button className="h-9 w-9 rounded-lg border border-slate-200 hover:bg-slate-50 flex items-center justify-center" id="logoNext">
<i className="h-5 w-5 text-slate-700" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<div className="mt-12 grid md:grid-cols-3 gap-6">
<figure className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm" data-animate="">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<figcaption>
<div className="text-sm font-medium text-slate-900">Lucie M.</div>
<div className="text-xs text-slate-500">Boulangerie artisanale</div>
</figcaption>
</div>
<blockquote className="mt-3 text-sm text-slate-700">
              “Installation en une matinée et prise en main immédiate. Le support est impeccable.”
            </blockquote>
</figure>
<figure className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm" data-animate="">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<figcaption>
<div className="text-sm font-medium text-slate-900">Karim D.</div>
<div className="text-xs text-slate-500">Restaurant &amp; bar</div>
</figcaption>
</div>
<blockquote className="mt-3 text-sm text-slate-700">
              “La gestion des tables et le reporting m’ont fait gagner un temps précieux.”
            </blockquote>
</figure>
<figure className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm" data-animate="">
<div className="flex items-center gap-3">
<img alt="Client" className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<figcaption>
<div className="text-sm font-medium text-slate-900">Éva R.</div>
<div className="text-xs text-slate-500">Concept store</div>
</figcaption>
</div>
<blockquote className="mt-3 text-sm text-slate-700">
              “Solution fiable et conforme : ma compta est simplifiée au quotidien.”
            </blockquote>
</figure>
</div>
</div>
</section>

<section className="py-20 md:py-28 bg-slate-50" id="faq">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-2xl" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Manrope, Inter', letterSpacing: '-0.02em'}}>Questions fréquentes</h2>
<p className="mt-3 text-slate-600">Tout ce que vous devez savoir pour démarrer sereinement.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 gap-6">
<details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="monitor-smartphone"></i>
<span className="font-medium text-slate-900">Le logiciel est-il compatible avec tout type de matériel ?</span>
</div>
<i className="h-5 w-5 text-slate-500 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-600">Oui, CashOffice fonctionne avec la plupart des imprimantes tickets, tiroirs‑caisses, TPE et tablettes sous Windows, iOS ou Android. Nous proposons également des packs matériels prêts à l’emploi.</p>
</details>
<details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="upload"></i>
<span className="font-medium text-slate-900">Puis-je importer mes anciennes données ?</span>
</div>
<i className="h-5 w-5 text-slate-500 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-600">Nous importons vos articles, clients et historiques de vente depuis CSV, Excel ou d’autres solutions. Notre équipe vous accompagne pour une transition fluide.</p>
</details>
<details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="clock"></i>
<span className="font-medium text-slate-900">Quelle est la durée de l’installation ?</span>
</div>
<i className="h-5 w-5 text-slate-500 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-600">La plupart des installations sont opérationnelles en 24 à 72 heures, selon votre configuration et la reprise de données.</p>
</details>
<details className="group rounded-2xl border border-slate-200 bg-white p-5 open:shadow-sm transition">
<summary className="flex cursor-pointer list-none items-center justify-between">
<div className="flex items-center gap-2">
<i className="h-5 w-5 text-blue-600" data-lucide="headphones"></i>
<span className="font-medium text-slate-900">Le support est-il inclus ?</span>
</div>
<i className="h-5 w-5 text-slate-500 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-slate-600">Oui, l’assistance est incluse dans nos offres, avec un centre d’aide en ligne et une équipe basée en France.</p>
</details>
</div>
</div>
</section>

<section className="py-20 md:py-28" id="blog">
<div className="mx-auto max-w-7xl px-6">
<div className="max-w-3xl" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Manrope, Inter', letterSpacing: '-0.02em'}}>Nos conseils pour mieux gérer votre commerce</h2>
<p className="mt-3 text-slate-600">Des guides pratiques pour développer vos ventes et simplifier votre gestion.</p>
</div>
<div className="mt-10 grid md:grid-cols-3 gap-6">
<article className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-sm transition" data-animate="">
<img alt="Optimiser l’encaissement" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="text-xs text-blue-700 font-medium">Conseils de vente</div>
<h3 className="mt-2 font-semibold text-slate-900 group-hover:underline">5 astuces pour accélérer l’encaissement aux heures de pointe</h3>
<p className="mt-2 text-sm text-slate-600">Réduisez l’attente et améliorez l’expérience en caisse grâce à ces bonnes pratiques.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-800" href="#">Lire l’article <i className="h-4 w-4" data-lucide="arrow-right"></i></a>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-sm transition" data-animate="">
<img alt="Reporting retail" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="text-xs text-blue-700 font-medium">Pilotage</div>
<h3 className="mt-2 font-semibold text-slate-900 group-hover:underline">Quels KPIs suivre chaque semaine en magasin ?</h3>
<p className="mt-2 text-sm text-slate-600">Marges, paniers moyens, taux de conversion… bâtissez un tableau de bord efficace.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-800" href="#">Lire l’article <i className="h-4 w-4" data-lucide="arrow-right"></i></a>
</div>
</article>
<article className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-sm transition" data-animate="">
<img alt="Conformité anti-fraude" className="h-44 w-full object-cover" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-5">
<div className="text-xs text-blue-700 font-medium">Conformité</div>
<h3 className="mt-2 font-semibold text-slate-900 group-hover:underline">L’essentiel à savoir sur la loi anti‑fraude à la TVA</h3>
<p className="mt-2 text-sm text-slate-600">Les obligations, les bonnes pratiques et comment rester conforme simplement.</p>
<a className="mt-3 inline-flex items-center gap-1 text-sm text-blue-700 hover:text-blue-800" href="#">Lire l’article <i className="h-4 w-4" data-lucide="arrow-right"></i></a>
</div>
</article>
</div>
</div>
</section>

<section className="relative py-20 md:py-28" id="cta">
<div className="absolute inset-0 -z-10">
<div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[28rem] w-[28rem] rounded-full bg-[#0045FF]/10 blur-3xl"></div>
</div>
<div className="mx-auto max-w-3xl px-6 text-center" data-animate="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900" style={{fontFamily: 'Manrope, Inter', letterSpacing: '-0.02em'}}>Passez à la caisse moderne avec CashOffice.</h2>
<p className="mt-3 text-slate-600">Planifiez une démonstration personnalisée avec un expert en moins de 2 minutes.</p>
<div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="px-6 py-3 rounded-xl text-white bg-gradient-to-tr from-[#0045FF] to-[#00B8FF] shadow-sm hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition inline-flex items-center gap-2" href="#contact">
<i className="h-5 w-5" data-lucide="calendar"></i>
            Demander une démo gratuite
          </a>
<a className="px-6 py-3 rounded-xl border border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition inline-flex items-center gap-2" href="#benefits">
<i className="h-5 w-5" data-lucide="play-circle"></i>
            Voir les fonctionnalités
          </a>
</div>
</div>
</section>

<footer className="border-t border-slate-200">
<div className="mx-auto max-w-7xl px-6 py-10">
<div className="grid md:grid-cols-4 gap-8">
<div className="col-span-2">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-[#0045FF] to-[#00B8FF] shadow-sm flex items-center justify-center ring-1 ring-white/10">
<span className="text-white font-semibold tracking-tight" style={{fontFamily: 'Manrope', letterSpacing: '-0.02em'}}>CO</span>
</div>
<span className="text-slate-900 font-semibold tracking-tight" style={{fontFamily: 'Manrope', letterSpacing: '-0.02em'}}>CashOffice</span>
</div>
<p className="mt-3 text-sm text-slate-600 max-w-md">Logiciel de caisse et point de vente complet, conforme et simple d’utilisation. Accompagne les commerces français depuis 1989.</p>
<div className="mt-4 flex items-center gap-3">
<div className="px-2.5 py-1 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white">RGPD</div>
<div className="px-2.5 py-1 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white">Anti‑fraude TVA</div>
<div className="px-2.5 py-1 rounded-lg border border-slate-200 text-xs text-slate-700 bg-white">Support FR</div>
</div>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Produit</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#benefits">Fonctionnalités</a></li>
<li><a className="hover:text-slate-900" href="#audience">Solutions</a></li>
<li><a className="hover:text-slate-900" href="#how">Fonctionnement</a></li>
<li><a className="hover:text-slate-900" href="#services">Services</a></li>
</ul>
</div>
<div>
<div className="text-sm font-semibold text-slate-900">Ressources</div>
<ul className="mt-3 space-y-2 text-sm text-slate-600">
<li><a className="hover:text-slate-900" href="#blog">Blog</a></li>
<li><a className="hover:text-slate-900" href="#faq">FAQ</a></li>
<li><a className="hover:text-slate-900" href="#">Centre d’aide</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-3">
<p className="text-xs text-slate-500">© 2025 CashOffice. Tous droits réservés.</p>
<div className="flex items-center gap-4 text-xs text-slate-500">
<a className="hover:text-slate-700" href="#">Mentions légales</a>
<a className="hover:text-slate-700" href="#">Confidentialité</a>
<a className="hover:text-slate-700" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
