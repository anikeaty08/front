import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Demo modal
    const demoModal = document.getElementById('demoModal');
    const openDemo = document.getElementById('openDemo');
    const openDemo2 = document.getElementById('openDemo2');
    const closeDemo = document.getElementById('closeDemo');

    function openModal() {
      demoModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }
    function closeModal() {
      demoModal.classList.add('hidden');
      document.body.style.overflow = '';
    }
    if (openDemo) openDemo.addEventListener('click', openModal);
    if (openDemo2) openDemo2.addEventListener('click', openModal);
    if (closeDemo) closeDemo.addEventListener('click', closeModal);
    if (demoModal) demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) closeModal();
    });

    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0','translate-y-2');
          entry.target.classList.add('opacity-100','translate-y-0');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));

    // FAQ accordion
    document.querySelectorAll('.faq-toggle').forEach((btn) => {
      btn.addEventListener('click', () => {
        const content = btn.parentElement.querySelector('.faq-content');
        const icon = btn.querySelector('iconify-icon');
        const isOpen = !content.classList.contains('hidden');
        document.querySelectorAll('.faq-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.faq-toggle iconify-icon').forEach(i => i.classList.remove('rotate-180'));
        if (!isOpen) {
          content.classList.remove('hidden');
          if (icon) icon.classList.add('rotate-180');
        }
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-40 backdrop-blur bg-stone-50/80 border-b border-stone-200/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<a className="flex items-center gap-2" href="#">
<div className="rounded-xl bg-emerald-600 text-white px-2 py-1 text-sm font-semibold tracking-tight">CR</div>
<span className="text-lg font-semibold tracking-tight">CaniRappel</span>
</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-stone-600 hover:text-stone-900 transition" href="#solution">Fonctionnement</a>
<a className="text-sm text-stone-600 hover:text-stone-900 transition" href="#features">Fonctionnalités</a>
<a className="text-sm text-stone-600 hover:text-stone-900 transition" href="#pricing">Tarif</a>
<a className="text-sm text-stone-600 hover:text-stone-900 transition" href="#faq">FAQ</a>
</nav>
<div className="flex items-center gap-3">
<button className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white text-stone-800 hover:bg-stone-100 transition px-3 py-2 text-sm font-medium" id="openDemo">
<iconify-icon className="text-stone-700" icon="lucide:play-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
            Voir la démo
          </button>
<a className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition px-4 py-2 text-sm font-semibold" href="#pricing">
<iconify-icon className="text-white" icon="lucide:shopping-cart" style={{strokeWidth: '1.5'}}></iconify-icon>
            Acheter l’accès à vie
          </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
<div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
<div className="space-y-5">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 text-xs font-medium">
<iconify-icon icon="lucide:badge-check" style={{strokeWidth: '1.5'}}></iconify-icon>
            Paiement unique — À vie
          </div>
<h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-900">
            Fini les lapins et les oublis.
            <span className="text-emerald-700">Des rendez-vous qui tiennent, sans abonnement.</span>
</h1>
<p className="text-base text-stone-700 leading-relaxed">
            Un outil pensé pour les toiletteurs canins indépendants. Créez un rendez-vous, vos clients reçoivent un rappel automatique.
            Simple. Clair. 39€ à vie.
          </p>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="group inline-flex justify-center items-center gap-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition px-5 py-3 text-base font-semibold" href="#pricing">
              Acheter l’accès à vie
              <iconify-icon className="transition group-hover:translate-x-1" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<button className="inline-flex justify-center items-center gap-2 rounded-xl border border-stone-300 bg-white text-stone-800 hover:bg-stone-100 transition px-5 py-3 text-base font-medium" id="openDemo2">
<iconify-icon className="text-stone-700" icon="lucide:play" style={{strokeWidth: '1.5'}}></iconify-icon>
              Voir la démo vidéo
            </button>
</div>
<div className="flex items-center gap-4 text-sm text-stone-600">
<div className="inline-flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon>
              Pensé pour les indépendants
            </div>
<div className="inline-flex items-center gap-2">
<iconify-icon className="text-amber-600" icon="lucide:zap" style={{strokeWidth: '1.5'}}></iconify-icon>
              Accès immédiat
            </div>
<div className="inline-flex items-center gap-2">
<iconify-icon className="text-stone-800" icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></iconify-icon>
              Paiement sécurisé
            </div>
</div>
</div>

<div className="relative">
<div className="rounded-2xl bg-white border border-stone-200 shadow-lg p-4 sm:p-6 space-y-4 reveal transition duration-700 ease-out opacity-0 translate-y-2">

<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-3 w-3 rounded-full bg-emerald-500"></div>
<span className="text-sm font-medium text-stone-700">Agenda</span>
</div>
<div className="flex items-center gap-2 text-stone-500">
<iconify-icon icon="lucide:chevron-left" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm">Semaine</span>
<iconify-icon icon="lucide:chevron-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>

<div className="grid grid-cols-1 gap-3">
<div className="rounded-xl bg-emerald-50 border border-emerald-100 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-700" icon="lucide:calendar-check" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-sm font-semibold text-emerald-800 tracking-tight">10:00 — Oslo (Labrador)</div>
<div className="text-xs text-emerald-900/80">Julie M. • Tonte + bain</div>
</div>
</div>
<span className="text-xs text-emerald-800 bg-emerald-100 rounded-full px-2 py-1">Rappel prévu</span>
</div>
</div>
<div className="rounded-xl bg-stone-50 border border-stone-200 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-stone-700" icon="lucide:calendar" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-sm font-semibold text-stone-900 tracking-tight">11:30 — Nala (Shih Tzu)</div>
<div className="text-xs text-stone-600">Marc D. • Coupe hygiénique</div>
</div>
</div>
<button className="inline-flex items-center gap-1 text-xs text-stone-700 border border-stone-300 rounded-lg px-2 py-1 hover:bg-stone-100 transition">
<iconify-icon icon="lucide:send" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Rappel WhatsApp
                  </button>
</div>
</div>
</div>

<div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-stone-50 border border-stone-200 p-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-700" icon="lucide:mail" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm text-stone-700">
                  Email de rappel envoyé à <span className="font-medium">Julie</span> la veille à 18h.
                </div>
</div>
<div className="mt-2 flex items-center gap-3">
<iconify-icon className="text-emerald-700" icon="lucide:message-square" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm text-stone-700">WhatsApp prêt en 1 clic si besoin.</div>
</div>
</div>
</div>

<div className="absolute -bottom-4 left-4">
<div className="rounded-2xl bg-amber-100 text-amber-900 border border-amber-200 shadow px-3 py-2 text-sm font-semibold">
              39€ — Accès à vie
            </div>
</div>
</div>
</div>
</div>

<iconify-icon aria-hidden="true" className="hidden md:block absolute -top-4 -right-4 text-8xl text-emerald-100 opacity-60 pointer-events-none select-none" icon="lucide:paw-print" style={{strokeWidth: '1.5'}}></iconify-icon>
</section>

<section className="py-12 sm:py-16" id="probleme">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Les “lapins” coûtent cher. Le stress aussi.</h2>
<p className="mt-2 text-base text-stone-700 leading-relaxed">Quand tout est éparpillé entre WhatsApp, carnet, SMS et mémoire… les oublis arrivent, les journées déraillent.</p>
</div>
<div className="mt-8 grid md:grid-cols-4 gap-4 md:gap-6">
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-4 shadow-sm">
<div className="flex items-start gap-3">
<div className="rounded-xl bg-rose-50 p-2 border border-rose-200">
<iconify-icon className="text-rose-700" icon="lucide:ban" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">No-shows</div>
<p className="text-sm text-stone-700 leading-relaxed">Un trou d’1h… et une perte nette.</p>
</div>
</div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-4 shadow-sm">
<div className="flex items-start gap-3">
<div className="rounded-xl bg-amber-50 p-2 border border-amber-200">
<iconify-icon className="text-amber-700" icon="lucide:alarm-clock" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Rappels oubliés</div>
<p className="text-sm text-stone-700 leading-relaxed">Vous vouliez écrire… trop tard, journée chargée.</p>
</div>
</div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-4 shadow-sm">
<div className="flex items-start gap-3">
<div className="rounded-xl bg-sky-50 p-2 border border-sky-200">
<iconify-icon className="text-sky-700" icon="lucide:message-square" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Messages éparpillés</div>
<p className="text-sm text-stone-700 leading-relaxed">WhatsApp, SMS, email… on rate des infos.</p>
</div>
</div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-4 shadow-sm">
<div className="flex items-start gap-3">
<div className="rounded-xl bg-stone-50 p-2 border border-stone-200">
<iconify-icon className="text-stone-700" icon="lucide:timer" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Temps perdu = stress</div>
<p className="text-sm text-stone-700 leading-relaxed">Moins d’énergie pour les chiens et les clients.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-white" id="solution">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">La solution, sans usine à gaz.</h2>
<p className="mt-2 text-base text-stone-700 leading-relaxed">Un flux simple, du rendez-vous au rappel. Votre journée redevient fluide.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl border border-stone-200 bg-stone-50 p-5">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-emerald-100 p-2 border border-emerald-200">
<iconify-icon className="text-emerald-700" icon="lucide:calendar-plus" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-base font-semibold text-stone-900 tracking-tight">1. Créez le rendez-vous</div>
</div>
<p className="mt-2 text-sm text-stone-700 leading-relaxed">Nom du chien, client, service, heure. 20 secondes.</p>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl border border-stone-200 bg-stone-50 p-5">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-sky-100 p-2 border border-sky-200">
<iconify-icon className="text-sky-700" icon="lucide:bell" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-base font-semibold text-stone-900 tracking-tight">2. Rappel automatique</div>
</div>
<p className="mt-2 text-sm text-stone-700 leading-relaxed">Email programmé. Besoin d’un coup de pouce ? Bouton WhatsApp.</p>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl border border-stone-200 bg-stone-50 p-5">
<div className="flex items-center gap-3">
<div className="rounded-xl bg-amber-100 p-2 border border-amber-200">
<iconify-icon className="text-amber-700" icon="lucide:coffee" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-base font-semibold text-stone-900 tracking-tight">3. Moins d’oublis</div>
</div>
<p className="mt-2 text-sm text-stone-700 leading-relaxed">Des journées sereines, des clients présents, des chiens heureux.</p>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16" id="features">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Tout ce qu’il faut. Rien de plus.</h2>
<p className="mt-2 text-base text-stone-700 leading-relaxed">Un outil métier, clair et pratique. Zéro complexité.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-800" icon="lucide:calendar" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Agenda ultra simple</div>
<p className="text-sm text-stone-700 leading-relaxed">Vue claire de la journée, semaine, mois.</p>
</div>
</div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-800" icon="lucide:link" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Lien de prise de RDV</div>
<p className="text-sm text-stone-700 leading-relaxed">Un lien unique à partager à vos clients.</p>
</div>
</div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-800" icon="lucide:mail" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Rappels par email</div>
<p className="text-sm text-stone-700 leading-relaxed">Automatiques, la veille ou quand vous voulez.</p>
</div>
</div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-800" icon="lucide:send" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Bouton WhatsApp</div>
<p className="text-sm text-stone-700 leading-relaxed">Rappel manuel en 1 clic, message prêt.</p>
</div>
</div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-800" icon="lucide:users" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Historique clients &amp; chiens</div>
<p className="text-sm text-stone-700 leading-relaxed">Retrouvez tout en un endroit.</p>
</div>
</div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-800" icon="lucide:notepad-text" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Notes libres</div>
<p className="text-sm text-stone-700 leading-relaxed">Habitudes, sensibilités, ciseaux préférés…</p>
</div>
</div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-800" icon="lucide:gift" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Anniversaire du chien</div>
<p className="text-sm text-stone-700 leading-relaxed">Un mot attentionné = fidélisation.</p>
</div>
</div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-800" icon="lucide:receipt" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Reçu simple</div>
<p className="text-sm text-stone-700 leading-relaxed">Envoyez un reçu clair après la prestation.</p>
</div>
</div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-800" icon="lucide:wand-2" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Sans installation</div>
<p className="text-sm text-stone-700 leading-relaxed">Vous ouvrez, vous utilisez. C’est tout.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-emerald-50/50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Différent par simplicité.</h2>
<p className="mt-2 text-base text-stone-700 leading-relaxed">Pas de blabla, pas de paramétrage interminable. Vous gagnez du temps dès le premier rendez-vous.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-4 md:gap-6">
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-700" icon="lucide:badge-cent" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Pas d’abonnement</div>
<p className="text-sm text-stone-700 leading-relaxed">39€ une fois. À vie.</p>
</div>
</div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-700" icon="lucide:square-equal" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Pas d’usine à gaz</div>
<p className="text-sm text-stone-700 leading-relaxed">Vous prenez en main en 5 minutes.</p>
</div>
</div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-5">
<div className="flex items-start gap-3">
<iconify-icon className="text-emerald-700" icon="lucide:plug" style={{strokeWidth: '1.5'}}></iconify-icon>
<div>
<div className="text-base font-semibold text-stone-900 tracking-tight">Autonome</div>
<p className="text-sm text-stone-700 leading-relaxed">Fonctionne sans dépendre d’une plateforme.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Côté client, c’est limpide.</h2>
<p className="mt-2 text-base text-stone-700 leading-relaxed">Confirmation claire, email reçu, WhatsApp si besoin. Aucune création de compte.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">

<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-[2rem] border border-stone-200 shadow-lg bg-stone-50 p-4">
<div className="rounded-2xl bg-white border border-stone-200 p-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-700" icon="lucide:check-circle-2" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium text-stone-900">Rendez-vous confirmé</div>
</div>
<div className="text-sm text-stone-700">Mardi 10:00 • Oslo (Labrador)</div>
<div className="mt-2 text-xs text-stone-600">Un email de rappel sera envoyé automatiquement.</div>
</div>
</div>

<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-[2rem] border border-stone-200 shadow-lg bg-stone-50 p-4">
<div className="rounded-2xl bg-white border border-stone-200 p-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-sky-700" icon="lucide:mail-open" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium text-stone-900">Email de rappel</div>
</div>
<div className="text-sm text-stone-700">“Bonjour Julie, rendez-vous demain à 10:00 pour Oslo.”</div>
</div>
</div>

<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-[2rem] border border-stone-200 shadow-lg bg-stone-50 p-4">
<div className="rounded-2xl bg-white border border-stone-200 p-4">
<div className="flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-700" icon="lucide:message-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium text-stone-900">WhatsApp en 1 clic</div>
</div>
<div className="text-sm text-stone-700">Message prêt, envoyé si nécessaire.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-5 gap-4 md:gap-6">
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-4">
<div className="flex items-center gap-2 text-stone-800 text-sm font-medium">
<iconify-icon className="text-stone-800" icon="lucide:paw-print" style={{strokeWidth: '1.5'}}></iconify-icon>
            Pensé pour les toiletteurs indépendants
          </div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-4">
<div className="flex items-center gap-2 text-stone-800 text-sm font-medium">
<iconify-icon className="text-stone-800" icon="lucide:download" style={{strokeWidth: '1.5'}}></iconify-icon>
            Fonctionne sans installation
          </div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-4">
<div className="flex items-center gap-2 text-stone-800 text-sm font-medium">
<iconify-icon className="text-stone-800" icon="lucide:shield-check" style={{strokeWidth: '1.5'}}></iconify-icon>
            Paiement sécurisé
          </div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-4">
<div className="flex items-center gap-2 text-stone-800 text-sm font-medium">
<iconify-icon className="text-stone-800" icon="lucide:zap" style={{strokeWidth: '1.5'}}></iconify-icon>
            Accès immédiat
          </div>
</div>
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl bg-white border border-stone-200 p-4">
<div className="flex items-center gap-2 text-stone-800 text-sm font-medium">
<iconify-icon className="text-stone-800" icon="lucide:life-buoy" style={{strokeWidth: '1.5'}}></iconify-icon>
            Support humain
          </div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 relative overflow-hidden" id="avis">
<iconify-icon aria-hidden="true" className="hidden md:block absolute -top-6 left-8 text-8xl text-emerald-100 opacity-50 pointer-events-none select-none" icon="lucide:paw-print" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon aria-hidden="true" className="hidden md:block absolute -bottom-6 right-6 rotate-12 text-7xl text-emerald-100 opacity-50 pointer-events-none select-none" icon="lucide:paw-print" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl mx-auto text-center">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 text-xs font-medium">
<iconify-icon icon="lucide:paw-print" style={{strokeWidth: '1.5'}}></iconify-icon>
          Avis vérifiés
        </div>
<h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Ce que disent les toiletteurs</h2>
<p className="mt-2 text-base text-stone-700 leading-relaxed">Des journées plus fluides, moins de lapins, des clients ravis.</p>
</div>
<div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">

<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-1 text-amber-500">
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="mt-3 text-sm text-stone-800 leading-relaxed">En 2 semaines, j’ai réduit les no‑shows d’au moins 60%. Les rappels partent tout seuls, je respire.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center text-xs font-medium tracking-tight">AM</div>
<div>
<div className="text-sm font-medium text-stone-900">Anaïs M.</div>
<div className="text-xs text-stone-600">Salon Doux Poils</div>
</div>
</div>
<span className="inline-flex items-center gap-1 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-1">
<iconify-icon icon="lucide:paw-print" style={{strokeWidth: '1.5'}}></iconify-icon>
              -60% no‑shows
            </span>
</div>
</div>

<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-1 text-amber-500">
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="mt-3 text-sm text-stone-800 leading-relaxed">Je gagne 30 minutes par jour. L’agenda est clair et le bouton WhatsApp me dépanne.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center text-xs font-medium tracking-tight">SD</div>
<div>
<div className="text-sm font-medium text-stone-900">Sophie D.</div>
<div className="text-xs text-stone-600">Le Chien Chic</div>
</div>
</div>
<span className="inline-flex items-center gap-1 text-xs text-stone-800 bg-stone-50 border border-stone-200 rounded-full px-2 py-1">
<iconify-icon icon="lucide:clock-3" style={{strokeWidth: '1.5'}}></iconify-icon>
              +30 min/jour
            </span>
</div>
</div>

<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-1 text-amber-500">
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
<iconify-icon icon="lucide:star" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="mt-3 text-sm text-stone-800 leading-relaxed">Mes clients adorent le mail de rappel. Ça fait pro et ils sont toujours là à l’heure.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-emerald-100 text-emerald-900 flex items-center justify-center text-xs font-medium tracking-tight">KR</div>
<div>
<div className="text-sm font-medium text-stone-900">Karim R.</div>
<div className="text-xs text-stone-600">Dog &amp; Style</div>
</div>
</div>
<span className="inline-flex items-center gap-1 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-1">
<iconify-icon icon="lucide:sparkles" style={{strokeWidth: '1.5'}}></iconify-icon>
              Effet waouh
            </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 bg-white" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="max-w-3xl text-center mx-auto">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Une offre. Une fois. Pour de bon.</h2>
<p className="mt-2 text-base text-stone-700 leading-relaxed">Pas d’abonnement, pas d’options cachées. Vous l’achetez, vous l’avez à vie.</p>
</div>
<div className="mt-8 grid lg:grid-cols-[1fr] justify-center">
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl border border-stone-200 bg-emerald-50/40 p-6 sm:p-8 shadow-lg max-w-3xl mx-auto">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div className="space-y-2">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 px-3 py-1 text-xs font-medium">
<iconify-icon icon="lucide:infinity" style={{strokeWidth: '1.5'}}></iconify-icon>
                Accès à vie
              </div>
<div className="text-3xl sm:text-4xl font-semibold tracking-tight text-stone-900">39€</div>
<ul className="mt-2 space-y-2 text-sm text-stone-800">
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-700" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Agenda simple et clair
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-700" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Rappels automatiques par email
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-700" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Bouton WhatsApp en 1 clic
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-700" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Historique clients &amp; chiens, notes, anniversaires
                </li>
<li className="flex items-center gap-2">
<iconify-icon className="text-emerald-700" icon="lucide:check" style={{strokeWidth: '1.5'}}></iconify-icon>
                  Reçus simples après prestation
                </li>
</ul>
</div>
<div className="flex-1">
<div className="rounded-2xl bg-white border border-stone-200 p-4">
<div className="text-sm text-stone-700">“Enfin un outil fait pour nous. Zéro stress, zéro abonnement.”</div>
<div className="mt-4">
<a className="group inline-flex w-full justify-center items-center gap-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition px-5 py-3 text-base font-semibold" href="#checkout">
                    Acheter l’accès à vie maintenant
                    <iconify-icon className="transition group-hover:translate-x-1" icon="lucide:arrow-right" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<div className="mt-3 flex items-center justify-center gap-2 text-xs text-stone-600">
<iconify-icon icon="lucide:lock" style={{strokeWidth: '1.5'}}></iconify-icon>
                    Paiement sécurisé • Accès instantané • Reçu envoyé
                  </div>
</div>
</div>
</div>
</div>
<p className="mt-4 text-xs text-stone-600 text-center">Aucun engagement. Pas de frais cachés. Mises à jour incluses.</p>
</div>
</div>
</div>
</section>

<section className="py-12 sm:py-16 relative overflow-hidden" id="faq">
<iconify-icon aria-hidden="true" className="hidden md:block absolute -top-8 right-8 text-8xl text-emerald-100 opacity-50 pointer-events-none select-none" icon="lucide:paw-print" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">Questions fréquentes</h2>
<div className="mt-6 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">

<div className="p-4">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="text-base font-medium text-stone-900">Est-ce compliqué ?</span>
<iconify-icon className="text-stone-700 transition" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="faq-content hidden mt-2 text-sm text-stone-700 leading-relaxed">
            Non. L’outil est conçu pour être pris en main en quelques minutes. Vous créez un rendez-vous, les rappels partent tout seuls.
          </div>
</div>
<div className="p-4">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="text-base font-medium text-stone-900">Mes clients doivent-ils créer un compte ?</span>
<iconify-icon className="text-stone-700 transition" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="faq-content hidden mt-2 text-sm text-stone-700 leading-relaxed">
            Jamais. Ils reçoivent une confirmation et un rappel par email, et vous pouvez envoyer un message WhatsApp en 1 clic si besoin.
          </div>
</div>
<div className="p-4">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="text-base font-medium text-stone-900">Est-ce que ça remplace mon outil actuel ?</span>
<iconify-icon className="text-stone-700 transition" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="faq-content hidden mt-2 text-sm text-stone-700 leading-relaxed">
            Oui si vous utilisez un agenda papier / basique. Si vous avez déjà un système lourd, CaniRappel peut au moins gérer vos rappels simplement.
          </div>
</div>
<div className="p-4">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="text-base font-medium text-stone-900">Puis-je utiliser WhatsApp ?</span>
<iconify-icon className="text-stone-700 transition" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="faq-content hidden mt-2 text-sm text-stone-700 leading-relaxed">
            Oui. Le bouton “Rappel WhatsApp” ouvre le message prêt à envoyer au bon client, en un clic.
          </div>
</div>
<div className="p-4">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="text-base font-medium text-stone-900">Y a‑t‑il un abonnement ?</span>
<iconify-icon className="text-stone-700 transition" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="faq-content hidden mt-2 text-sm text-stone-700 leading-relaxed">
            Non. 39€ une fois, accès à vie. Pas de frais cachés.
          </div>
</div>

<div className="p-4">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="text-base font-medium text-stone-900">Puis-je annuler ou déplacer un rendez-vous ?</span>
<iconify-icon className="text-stone-700 transition" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="faq-content hidden mt-2 text-sm text-stone-700 leading-relaxed">
            Oui, en 2 clics. Le rappel s’ajuste automatiquement pour éviter les oublis côté client.
          </div>
</div>
<div className="p-4">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="text-base font-medium text-stone-900">Et si je n’ai pas internet au salon ?</span>
<iconify-icon className="text-stone-700 transition" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="faq-content hidden mt-2 text-sm text-stone-700 leading-relaxed">
            L’agenda reste accessible sur mobile. Les rappels programmés s’enverront dès que la connexion revient.
          </div>
</div>
<div className="p-4">
<button className="faq-toggle w-full flex items-center justify-between text-left">
<span className="text-base font-medium text-stone-900">Mes données et celles de mes clients sont-elles protégées ?</span>
<iconify-icon className="text-stone-700 transition" icon="lucide:chevron-down" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="faq-content hidden mt-2 text-sm text-stone-700 leading-relaxed">
            Oui. Données chiffrées en transit, accès sécurisé. Vous gardez la main sur vos informations.
          </div>
</div>
</div>
</div>
<iconify-icon aria-hidden="true" className="hidden md:block absolute -bottom-10 left-10 text-7xl text-emerald-100 opacity-50 pointer-events-none select-none" icon="lucide:paw-print" style={{strokeWidth: '1.5'}}></iconify-icon>
</section>

<section className="py-12 sm:py-16 bg-emerald-50/50">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="reveal transition duration-700 ease-out opacity-0 translate-y-2 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-10">
<div className="grid md:grid-cols-3 gap-6 items-center">
<div className="md:col-span-2">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-900">
              Moins de lapins. Plus de sérénité. 39€ à vie.
            </h3>
<p className="mt-2 text-base text-stone-700 leading-relaxed">Reprenez la main sur vos journées sans changer vos habitudes.</p>
</div>
<div className="flex md:justify-end">
<a className="group inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition px-5 py-3 text-base font-semibold" href="#pricing">
              Acheter l’accès à vie
              <iconify-icon className="transition group-hover:scale-110" icon="lucide:paw-print" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2">
<div className="rounded-xl bg-emerald-600 text-white px-2 py-1 text-sm font-semibold tracking-tight">CR</div>
<span className="text-sm text-stone-700">CaniRappel</span>
</div>
<div className="text-xs text-stone-500">
          © <span id="year"></span> CaniRappel. Tous droits réservés.
        </div>
<div className="flex items-center gap-4 text-xs text-stone-600">
<a className="hover:text-stone-900 transition" href="#">Contact</a>
<a className="hover:text-stone-900 transition" href="#">Mentions</a>
<a className="hover:text-stone-900 transition" href="#">CGV</a>
</div>
</div>
</div>
</footer>

<div className="hidden fixed inset-0 z-50" id="demoModal">
<div className="absolute inset-0 bg-stone-900/60"></div>
<div className="relative mx-auto max-w-3xl mt-20 bg-white rounded-2xl border border-stone-200 shadow-2xl overflow-hidden">
<div className="flex items-center justify-between p-4 border-b border-stone-200">
<div className="flex items-center gap-2">
<iconify-icon className="text-stone-800" icon="lucide:play-circle" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm font-medium text-stone-900">Démo — CaniRappel</span>
</div>
<button className="rounded-lg p-2 hover:bg-stone-100 transition" id="closeDemo">
<iconify-icon className="text-stone-800" icon="lucide:x" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<div className="aspect-video bg-stone-50">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" referrerpolicy="strict-origin-when-cross-origin" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Démo vidéo"></iframe>
</div>
</div>
</div>



    </>
  );
}
