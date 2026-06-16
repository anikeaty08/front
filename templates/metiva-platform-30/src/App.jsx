import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      window.addEventListener('DOMContentLoaded', function () {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        // Mobile menu toggle
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = mobileMenuButton.querySelector('i');

        mobileMenuButton.addEventListener('click', function() {
          const isHidden = mobileMenu.classList.contains('hidden');
          if (isHidden) {
            mobileMenu.classList.remove('hidden');
            menuIcon.setAttribute('data-lucide', 'x');
          } else {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('data-lucide', 'menu');
          }
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        });

        // Close mobile menu when clicking on a link
        const mobileMenuLinks = mobileMenu.querySelectorAll('a');
        mobileMenuLinks.forEach(link => {
          link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            menuIcon.setAttribute('data-lucide', 'menu');
            lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          });
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">

<a aria-label="Metiva Platform - Home" className="group inline-flex items-center gap-2" href="index.html">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white shadow-sm ring-1 ring-slate-900/10">
<span className="text-sm font-semibold tracking-tight">M</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-base font-semibold tracking-tight">Metiva Platform</span>
<span className="text-[11px] font-normal text-slate-500 tracking-tight">Mobilità europea</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-7 text-sm text-slate-600">
<a className="text-slate-900 font-medium rounded px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/15" href="chi-siamo.html">Chi siamo</a>
<a className="hover:text-slate-900 rounded px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/15 transition" href="progetti.html">Progetti</a>
<a className="hover:text-slate-900 rounded px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/15 transition" href="erasmus-imprenditoriale.html">Erasmus Imprenditoriale</a>
<a className="hover:text-slate-900 rounded px-1 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/15 transition" href="crm.html">CRM</a>
<a className="ml-2 inline-flex items-center gap-2 rounded-md bg-slate-900 px-3.5 py-2 text-white ring-1 ring-slate-900/10 hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" href="login.html">
<i className="h-4 w-4" data-lucide="log-in"></i>
              Login
            </a>
</nav>

<div className="md:hidden">
<button className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/15 transition" id="mobile-menu-button">
<i className="h-5 w-5" data-lucide="menu"></i>
<span className="sr-only">Apri menu</span>
</button>
</div>
</div>
</div>

<div className="md:hidden hidden border-t border-slate-200 bg-white" id="mobile-menu">
<div className="px-6 py-8 space-y-1">
<div className="space-y-1">
<a className="block px-4 py-3 text-base font-medium text-slate-900 bg-slate-50 rounded-md" href="chi-siamo.html">Chi siamo</a>
<a className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition" href="progetti.html">Progetti</a>
<a className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition" href="erasmus-imprenditoriale.html">Erasmus Imprenditoriale</a>
<a className="block px-4 py-3 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-md transition" href="crm.html">CRM</a>
</div>
<div className="pt-6 border-t border-slate-200">
<a className="block w-full text-center px-4 py-3 text-base font-semibold text-white bg-slate-900 rounded-md hover:bg-slate-800 transition" href="login.html">Accedi alla piattaforma</a>
</div>
</div>
</div>
</header>

<section className="relative py-16 md:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-10 lg:grid-cols-2 lg:items-center">
<div className="mx-auto max-w-3xl text-center lg:text-left">
<div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs text-slate-600">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i>
              La piattaforma per la mobilità europea
            </div>
<h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
              Chi siamo
            </h1>
<p className="mt-4 text-slate-600 text-base leading-relaxed">
              Metiva Platform semplifica l'Erasmus per Giovani Imprenditori e la mobilità europea, rendendo accessibili a tutti opportunità di crescita internazionale.
            </p>
</div>
<div className="relative">
<div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
<img alt="Il nostro ufficio" className="w-full h-[260px] sm:h-[320px] md:h-[360px] lg:h-[420px] rounded-xl object-cover" src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-4 left-4 rounded-lg bg-white px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200 shadow-sm">
<i className="mr-2 h-4 w-4" data-lucide="building-2"></i> Il nostro ufficio
            </div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-b border-slate-200/80 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="grid gap-12 lg:grid-cols-2 lg:items-center">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">La nostra missione</h2>
<p className="mt-5 text-slate-600 leading-relaxed">
              Crediamo che ogni giovane imprenditore meriti l'opportunità di crescere attraverso esperienze internazionali. Metiva Platform nasce per democratizzare l'accesso ai programmi Erasmus+ e di mobilità europea, eliminando le barriere burocratiche e semplificando ogni step del processo.
            </p>
<div className="mt-8 space-y-5">
<div className="flex items-start gap-3.5">
<div className="flex-shrink-0 h-7 w-7 rounded-full ring-1 ring-slate-200 bg-white flex items-center justify-center">
<i className="h-3.5 w-3.5 text-slate-900" data-lucide="target"></i>
</div>
<div>
<h3 className="font-medium text-slate-900">Democratizzare l'accesso</h3>
<p className="text-sm text-slate-600 mt-1">Rendere l'Erasmus Imprenditoriale accessibile a tutti, indipendentemente dalla provenienza o dal background.</p>
</div>
</div>
<div className="flex items-start gap-3.5">
<div className="flex-shrink-0 h-7 w-7 rounded-full ring-1 ring-slate-200 bg-white flex items-center justify-center">
<i className="h-3.5 w-3.5 text-slate-900" data-lucide="zap"></i>
</div>
<div>
<h3 className="font-medium text-slate-900">Semplificare il processo</h3>
<p className="text-sm text-slate-600 mt-1">Ridurre la complessità burocratica con tecnologia e automazione intelligente.</p>
</div>
</div>
<div className="flex items-start gap-3.5">
<div className="flex-shrink-0 h-7 w-7 rounded-full ring-1 ring-slate-200 bg-white flex items-center justify-center">
<i className="h-3.5 w-3.5 text-slate-900" data-lucide="users"></i>
</div>
<div>
<h3 className="font-medium text-slate-900">Creare connessioni</h3>
<p className="text-sm text-slate-600 mt-1">Facilitare il matching tra giovani imprenditori e mentor esperti in tutta Europa.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="rounded-2xl border border-slate-200 bg-white p-2">
<img alt="Team Metiva Platform" className="w-full rounded-xl object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-4 -left-4 rounded-lg bg-white px-4 py-2 text-sm text-slate-700 ring-1 ring-slate-200 shadow-sm">
<i className="mr-2 h-4 w-4 inline text-rose-500" data-lucide="heart"></i> Team dedicato alla tua crescita
            </div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Cosa facciamo</h2>
<p className="mt-4 text-slate-600 max-w-2xl mx-auto">Una suite di strumenti per gestire ogni aspetto della tua esperienza di mobilità europea.</p>
</div>
<div className="mt-12 grid gap-6 sm:gap-7 md:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition">
<div className="w-10 h-10 rounded-lg bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center mb-4">
<i className="h-5 w-5 text-slate-900" data-lucide="workflow"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">CRM Integrato</h3>
<p className="mt-2 text-sm text-slate-600">Gestisci candidature, documenti, milestone e comunicazioni in un'unica dashboard.</p>
<ul className="mt-4 text-xs text-slate-600 space-y-1.5">
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Tracking candidature in tempo reale</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Gestione documenti sicura</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Comunicazione diretta con host</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Youthpass digitale integrato</span></li>
</ul>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition">
<div className="w-10 h-10 rounded-lg bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center mb-4">
<i className="h-5 w-5 text-slate-900" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Matching Intelligente</h3>
<p className="mt-2 text-sm text-slate-600">Algoritmi avanzati per trovare il mentor perfetto basandosi su competenze e obiettivi.</p>
<ul className="mt-4 text-xs text-slate-600 space-y-1.5">
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Analisi AI delle competenze</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Score di compatibilità</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Suggerimenti personalizzati</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Matching per settore</span></li>
</ul>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition">
<div className="w-10 h-10 rounded-lg bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center mb-4">
<i className="h-5 w-5 text-slate-900" data-lucide="users"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Community Europea</h3>
<p className="mt-2 text-sm text-slate-600">Network di oltre 2.400 giovani imprenditori per networking e supporto reciproco.</p>
<ul className="mt-4 text-xs text-slate-600 space-y-1.5">
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Eventi esclusivi</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Mentorship peer-to-peer</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Newsletter curata</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Supporto progetti Erasmus+</span></li>
</ul>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition">
<div className="w-10 h-10 rounded-lg bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center mb-4">
<i className="h-5 w-5 text-slate-900" data-lucide="file-text"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Gestione Documenti</h3>
<p className="mt-2 text-sm text-slate-600">Repository sicuro con firme digitali e backup automatico.</p>
<ul className="mt-4 text-xs text-slate-600 space-y-1.5">
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Storage criptato GDPR</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Firme digitali integrate</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Versioning automatico</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Condivisione controllata</span></li>
</ul>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition">
<div className="w-10 h-10 rounded-lg bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center mb-4">
<i className="h-5 w-5 text-slate-900" data-lucide="award"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Youthpass Digitale</h3>
<p className="mt-2 text-sm text-slate-600">Portfolio digitale delle competenze con certificazione automatica.</p>
<ul className="mt-4 text-xs text-slate-600 space-y-1.5">
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Upload e archiviazione</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Tracciamento competenze</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Portfolio organizzato</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Condivisione professionale</span></li>
</ul>
</div>

<div className="group rounded-xl border border-slate-200 bg-white p-6 hover:shadow-md hover:-translate-y-0.5 transition">
<div className="w-10 h-10 rounded-lg bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center mb-4">
<i className="h-5 w-5 text-slate-900" data-lucide="life-buoy"></i>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Supporto Completo</h3>
<p className="mt-2 text-sm text-slate-600">Assistenza dedicata per progetti Erasmus+ ed Erasmus Imprenditoriale.</p>
<ul className="mt-4 text-xs text-slate-600 space-y-1.5">
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Consulenza personalizzata</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Supporto burocratico</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Training pre-partenza</span></li>
<li className="flex items-start gap-2"><i className="h-3.5 w-3.5 mt-0.5 text-slate-900" data-lucide="check"></i><span>Follow-up post-ritorno</span></li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative border-t border-b border-slate-200 bg-slate-50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
<div className="text-center mb-10">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Pronti per il lancio</h2>
<p className="mt-4 text-slate-600">La piattaforma è pronta per i primi progetti Erasmus+</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">0</div>
<div className="text-sm text-slate-600">Scambi completati</div>
<div className="text-xs text-slate-500 mt-1">Coming soon</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">0</div>
<div className="text-sm text-slate-600">Candidature gestite</div>
<div className="text-xs text-slate-500 mt-1">Coming soon</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">0</div>
<div className="text-sm text-slate-600">Membri community</div>
<div className="text-xs text-slate-500 mt-1">Coming soon</div>
</div>
<div className="text-center">
<div className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">0</div>
<div className="text-sm text-slate-600">Paesi coinvolti</div>
<div className="text-xs text-slate-500 mt-1">Coming soon</div>
</div>
</div>
</div>
</section>

<section className="relative py-16 md:py-24">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Il nostro team</h2>
<p className="mt-4 text-slate-600 max-w-2xl mx-auto">Esperti in mobilità europea, tecnologia e imprenditoria, uniti dalla passione per l'innovazione sociale.</p>
</div>
<div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

<div className="text-center rounded-xl ring-1 ring-slate-200 p-6">
<img alt="Marco Rossi" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-slate-200" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<h3 className="font-semibold tracking-tight text-slate-900">Marco Rossi</h3>
<p className="text-sm text-slate-600 mb-2">CEO &amp; Founder</p>
<p className="text-xs text-slate-500">Ex-Erasmus Imprenditoriale, esperto in mobilità europea e startup tech.</p>
<div className="mt-4 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-slate-900 text-sm font-medium tracking-tight ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 transition" href="mailto:marco.rossi@metiva.com">
<i className="h-4 w-4" data-lucide="mail"></i>
                Email
              </a>
<a className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-2 text-white text-sm font-medium tracking-tight ring-1 ring-slate-900/10 hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
                LinkedIn
              </a>
</div>
</div>

<div className="text-center rounded-xl ring-1 ring-slate-200 p-6">
<img alt="Sofia Bianchi" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-slate-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<h3 className="font-semibold tracking-tight text-slate-900">Sofia Bianchi</h3>
<p className="text-sm text-slate-600 mb-2">CTO</p>
<p className="text-xs text-slate-500">Sviluppatrice full-stack, specializzata in AI e machine learning per il matching.</p>
<div className="mt-4 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-slate-900 text-sm font-medium tracking-tight ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 transition" href="mailto:sofia.bianchi@metiva.com">
<i className="h-4 w-4" data-lucide="mail"></i>
                Email
              </a>
<a className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-2 text-white text-sm font-medium tracking-tight ring-1 ring-slate-900/10 hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
                LinkedIn
              </a>
</div>
</div>

<div className="text-center rounded-xl ring-1 ring-slate-200 p-6">
<img alt="Alessandro Verdi" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover ring-2 ring-slate-200" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<h3 className="font-semibold tracking-tight text-slate-900">Alessandro Verdi</h3>
<p className="text-sm text-slate-600 mb-2">Head of Community</p>
<p className="text-xs text-slate-500">Esperto in networking internazionale e gestione community di giovani imprenditori.</p>
<div className="mt-4 flex items-center justify-center gap-3">
<a className="inline-flex items-center gap-1.5 rounded-md bg-white px-3 py-2 text-slate-900 text-sm font-medium tracking-tight ring-1 ring-slate-200 hover:bg-slate-50 hover:ring-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 transition" href="mailto:alessandro.verdi@metiva.com">
<i className="h-4 w-4" data-lucide="mail"></i>
                Email
              </a>
<a className="inline-flex items-center gap-1.5 rounded-md bg-slate-900 px-3 py-2 text-white text-sm font-medium tracking-tight ring-1 ring-slate-900/10 hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" href="#">
<i className="h-4 w-4" data-lucide="linkedin"></i>
                LinkedIn
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-slate-200 bg-slate-50">
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">Pronto a iniziare il tuo percorso?</h2>
<p className="mt-4 text-slate-600">Unisciti a tanti giovani imprenditori che scelgono Metiva Platform per la crescita internazionale.</p>
<div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 px-6 py-3 text-white font-medium tracking-tight ring-1 ring-slate-900/10 hover:bg-slate-900/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" href="progetti.html">
<i className="h-5 w-5" data-lucide="compass"></i>
            Scopri i progetti
          </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-slate-900 font-medium tracking-tight ring-1 ring-slate-200 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/10 transition" href="mailto:info@metiva.com">
<i className="h-5 w-5" data-lucide="send"></i>
            Contattaci
          </a>
</div>
</div>
</section>

<footer className="bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

<div className="py-12 md:py-16">
<div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">

<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white shadow-sm">
<span className="text-sm font-semibold tracking-tight">M</span>
</div>
<div className="flex flex-col leading-none">
<span className="text-base font-semibold tracking-tight text-slate-900">Metiva Platform</span>
<span className="text-xs text-slate-500 tracking-tight">Mobilità europea</span>
</div>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-4">
                Piattaforma digitale che semplifica l'Erasmus per Giovani Imprenditori e la mobilità europea attraverso tecnologia e community.
              </p>
<div className="flex items-center gap-3">
<a aria-label="LinkedIn" className="text-slate-500 hover:text-slate-900 transition" href="#">
<i className="h-5 w-5" data-lucide="linkedin"></i>
</a>
<a aria-label="Twitter" className="text-slate-500 hover:text-slate-900 transition" href="#">
<i className="h-5 w-5" data-lucide="twitter"></i>
</a>
<a aria-label="Instagram" className="text-slate-500 hover:text-slate-900 transition" href="#">
<i className="h-5 w-5" data-lucide="instagram"></i>
</a>
<a aria-label="YouTube" className="text-slate-500 hover:text-slate-900 transition" href="#">
<i className="h-5 w-5" data-lucide="youtube"></i>
</a>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Navigazione</h3>
<ul className="space-y-2 text-sm">
<li><a className="text-slate-600 hover:text-slate-900 transition" href="chi-siamo.html">Chi siamo</a></li>
<li><a className="text-slate-600 hover:text-slate-900 transition" href="progetti.html">Progetti</a></li>
<li><a className="text-slate-600 hover:text-slate-900 transition" href="erasmus-imprenditoriale.html">Erasmus Imprenditoriale</a></li>
<li><a className="text-slate-600 hover:text-slate-900 transition" href="crm.html">CRM Platform</a></li>
<li><a className="text-slate-600 hover:text-slate-900 transition" href="login.html">Accedi</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Risorse</h3>
<ul className="space-y-2 text-sm">
<li><a className="text-slate-600 hover:text-slate-900 transition" href="#">Guida Erasmus+</a></li>
<li><a className="text-slate-600 hover:text-slate-900 transition" href="#">FAQ</a></li>
<li><a className="text-slate-600 hover:text-slate-900 transition" href="#">Blog</a></li>
<li><a className="text-slate-600 hover:text-slate-900 transition" href="#">Centro assistenza</a></li>
<li><a className="text-slate-600 hover:text-slate-900 transition" href="#">Documentazione API</a></li>
</ul>
</div>

<div>
<h3 className="text-sm font-semibold text-slate-900 mb-4">Contatti</h3>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2 text-slate-600">
<i className="h-4 w-4" data-lucide="mail"></i>
<a className="hover:text-slate-900 transition" href="mailto:info@metiva.com">info@metiva.com</a>
</li>
<li className="flex items-center gap-2 text-slate-600">
<i className="h-4 w-4" data-lucide="phone"></i>
<a className="hover:text-slate-900 transition" href="tel:+390123456789">+39 012 345 6789</a>
</li>
<li className="flex items-start gap-2 text-slate-600">
<i className="h-4 w-4 mt-0.5" data-lucide="map-pin"></i>
<span>Via Europa 123<br/>20121 Milano, Italia</span>
</li>
</ul>
</div>
</div>
</div>

<div className="border-t border-slate-200 py-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex flex-col md:flex-row items-center gap-4 text-xs text-slate-500">
<p>© 2024 Metiva Platform. Tutti i diritti riservati.</p>
<div className="flex items-center gap-4">
<a className="hover:text-slate-900 transition" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition" href="#">Termini di Servizio</a>
<a className="hover:text-slate-900 transition" href="#">Cookie Policy</a>
</div>
</div>
<div className="flex items-center gap-2 text-xs text-slate-500">
<i className="h-4 w-4" data-lucide="shield-check"></i>
<span>Conforme GDPR • Sicuro • Non-profit</span>
</div>
</div>
</div>
</div>
</footer>




    </>
  );
}
