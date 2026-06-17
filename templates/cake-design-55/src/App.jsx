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



      // Initialize icons
      window.lucide && lucide.createIcons();

      // WhatsApp link injection
      (function(){
        var wa = document.body.getAttribute('data-wa') || '#';
        document.querySelectorAll('a.js-wa').forEach(function(a){
          a.setAttribute('href', wa);
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener');
        });
      })();
    
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
      

<div className="relative isolate">
<div className="w-full bg-[color:var(--brand-900)] border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex items-center justify-between gap-4 py-2">
<p className="text-sm text-white/90">
              Bonus exclusif jusqu’au 30 octobre : kit de décoration complet offert aux 10 premiers inscrits
            </p>
<a className="js-wa inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#FE7F42] to-[#B32C1A] px-3 py-1.5 text-xs font-medium text-white shadow-sm ring-1 ring-white/10 hover:opacity-95 transition" href="#">
<i className="h-4 w-4" data-lucide="sparkles"></i>
              Réserver maintenant
            </a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70 bg-neutral-950/70 border-b border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<div className="flex h-14 items-center justify-between">
<a className="flex items-center gap-2" href="#">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#FE7F42] to-[#B32C1A] ring-1 ring-white/15">
<span className="h-3 w-3 rounded-full bg-[color:var(--brand-50)]"></span>
</span>
<span className="text-sm sm:text-base font-medium tracking-tight">GarVou Pâtisserie Academy</span>
</a>
<nav className="hidden md:flex items-center gap-7 text-sm text-white/70">
<a className="hover:text-white transition" href="#programme">Programme</a>
<a className="hover:text-white transition" href="#formules">Formules</a>
<a className="hover:text-white transition" href="#faq">FAQ</a>
</nav>
<div className="hidden sm:flex">
<a className="js-wa inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-[#FE7F42] to-[#B32C1A] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-[#FE7F42]/10 ring-1 ring-white/10 hover:opacity-95 transition" href="#">
<i className="h-4 w-4" data-lucide="message-circle"></i>
                Réserver sur WhatsApp
              </a>
</div>
</div>
</div>
</header>

<section className="relative">
<div className="absolute inset-0 -z-10">
<img alt="" className="h-full w-full object-cover opacity-25" src="https://images.unsplash.com/photo-1615197885339-46f66cbf54c6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/80 via-neutral-950/90 to-neutral-950"></div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 pt-14 pb-12 sm:pb-16 lg:pb-24">
<div className="grid lg:grid-cols-12 items-center gap-10">
<div className="lg:col-span-7">
<h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
                Devenez Cake Designer en 4 Mois — même si vous partez de zéro
              </h1>
<p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl">
                GarVou Pâtisserie Academy vous forme à la décoration de gâteaux professionnels 100% pratique. 
                Transformez votre passion en savoir‑faire reconnu et rentable.
              </p>
<div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
<a className="js-wa inline-flex justify-center items-center gap-2 rounded-md bg-gradient-to-br from-[#FE7F42] to-[#B32C1A] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[#FE7F42]/10 ring-1 ring-white/10 hover:opacity-95 transition" href="#">
<i className="h-5 w-5" data-lucide="message-circle"></i>
                  Réserver votre place sur WhatsApp
                </a>
<div className="inline-flex items-center gap-3 text-xs text-white/70">
<span className="inline-flex items-center gap-1.5">
<i className="h-4 w-4 text-[color:var(--brand-50)]" data-lucide="graduation-cap"></i>
                    Certificat inclus
                  </span>
<span className="hidden sm:inline h-4 w-px bg-white/15"></span>
<span className="inline-flex items-center gap-1.5">
<i className="h-4 w-4 text-[color:var(--brand-50)]" data-lucide="clock"></i>
                    4 mois • Petits groupes
                  </span>
</div>
</div>
<div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
<p className="text-2xl font-semibold tracking-tight text-white">70+</p>
<p className="text-xs text-white/70">Étudiants formés</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
<p className="text-2xl font-semibold tracking-tight text-white">500+</p>
<p className="text-xs text-white/70">Créations réalisées</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
<p className="text-2xl font-semibold tracking-tight text-white">99%</p>
<p className="text-xs text-white/70">Achèvent le programme</p>
</div>
</div>
</div>
<div className="lg:col-span-5">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
<img alt="Décoration de gâteau" className="h-72 w-full object-cover" src="https://images.unsplash.com/photo-1550317138-10000687a72b?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="p-6">
<p className="text-sm text-white/80">
                    Vous avez toujours rêvé de créer des gâteaux aussi beaux que bons ? En 4 mois, passez de simple amateur à cake designer certifié.
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="py-14 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ce cours est fait pour vous si vous êtes</h2>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--brand-700)]/40 ring-1 ring-white/10">
<i className="h-5 w-5 text-[color:var(--brand-50)]" data-lucide="briefcase"></i>
</span>
<p className="font-medium">La jeune professionnelle</p>
</div>
<p className="mt-3 text-sm text-white/75">
              Un métier manuel, artistique et intemporel, avec la fierté de créer de vos mains.
            </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--brand-700)]/40 ring-1 ring-white/10">
<i className="h-5 w-5 text-[color:var(--brand-50)]" data-lucide="heart"></i>
</span>
<p className="font-medium">Le passionné de gâteaux</p>
</div>
<p className="mt-3 text-sm text-white/75">
              Vous cuisinez déjà mais souhaitez des techniques professionnelles et des finitions nettes.
            </p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-3">
<span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[color:var(--brand-700)]/40 ring-1 ring-white/10">
<i className="h-5 w-5 text-[color:var(--brand-50)]" data-lucide="building-2"></i>
</span>
<p className="font-medium">Le futur entrepreneur</p>
</div>
<p className="mt-3 text-sm text-white/75">
              Structurez votre activité, fixez vos prix et commencez à vendre en toute confiance.
            </p>
</div>
</div>
<div className="mt-6 rounded-lg border border-white/10 bg-gradient-to-br from-[#2A1617] to-[#7A4B47]/40 p-5">
<p className="text-sm text-white/80">
            Peu importe votre point de départ, notre méthode 100% pratique vous guide pas à pas vers la maîtrise complète de la décoration de gâteaux.
          </p>
</div>
</div>
</section>

<section className="py-14 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-10 lg:grid-cols-2">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Qui sommes‑nous ?</h2>
<p className="mt-4 text-white/80 text-sm sm:text-base">
            Derrière GarVou Pâtisserie Academy se cache [Nom de ta sœur], Cheffe pâtisserie certifiée de l’École Hôtelière d’Haïti (soutenue par le Ministère du Tourisme).
          </p>
<div className="mt-6 grid grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
<p className="text-2xl font-semibold tracking-tight text-white">70+</p>
<p className="text-xs text-white/70">Étudiants formés</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
<p className="text-2xl font-semibold tracking-tight text-white">500+</p>
<p className="text-xs text-white/70">Créations uniques</p>
</div>
</div>
<blockquote className="mt-6 rounded-lg border border-white/10 bg-white/[0.03] p-5 text-sm text-white/80">
            “Je crois que chaque personne passionnée peut vivre de son talent. Mon rôle, c’est de te donner la technique, la confiance et le cadre pour y arriver.”
          </blockquote>
</div>
<div className="relative">
<div className="overflow-hidden rounded-2xl border border-white/10">
<img alt="Atelier pâtisserie" className="h-80 w-full object-cover" src="https://images.unsplash.com/photo-1511914265872-c40672604a66?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Nos preuves et résultats</h2>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<i className="h-5 w-5 text-[color:var(--brand-50)]" data-lucide="check-circle-2"></i>
<p className="mt-3 font-medium">99 % complètent la formation</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<i className="h-5 w-5 text-[color:var(--brand-50)]" data-lucide="award"></i>
<p className="mt-3 font-medium">Des diplômés déjà lancés</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<i className="h-5 w-5 text-[color:var(--brand-50)]" data-lucide="repeat"></i>
<p className="mt-3 font-medium">Anciens revenant pour les modules avancés</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<i className="h-5 w-5 text-[color:var(--brand-50)]" data-lucide="share-2"></i>
<p className="mt-3 font-medium">Créations partagées chaque semaine</p>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6 grid gap-8 lg:grid-cols-2">
<div>
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Les difficultés que vous vivez peut‑être aujourd’hui</h2>
<ul className="mt-6 space-y-3 text-sm text-white/80">
<li className="flex gap-3"><i className="h-5 w-5 text-[#FE7F42]" data-lucide="x-circle"></i> Apprendre seule via YouTube sans rendu professionnel.</li>
<li className="flex gap-3"><i className="h-5 w-5 text-[#FE7F42]" data-lucide="x-circle"></i> Des idées mais pas de méthode ni de cadre.</li>
<li className="flex gap-3"><i className="h-5 w-5 text-[#FE7F42]" data-lucide="x-circle"></i> Vous voulez un accompagnement humain.</li>
<li className="flex gap-3"><i className="h-5 w-5 text-[#FE7F42]" data-lucide="x-circle"></i> Difficile de fixer vos prix ou de vendre.</li>
<li className="flex gap-3"><i className="h-5 w-5 text-[#FE7F42]" data-lucide="x-circle"></i> Manque de matériel et d’encadrement.</li>
</ul>
<div className="mt-6 rounded-lg border border-white/10 bg-white/[0.04] p-5 text-sm text-white/85">
            Ce programme a été conçu exactement pour ça.
          </div>
</div>
<div>
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Les 3 erreurs qui vous empêchent d’avancer</h3>
<div className="mt-6 space-y-4">
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
<p className="font-medium">1. Apprendre seule sans structure</p>
<p className="mt-1 text-sm text-white/75">Vous perdez du temps à chercher des tutoriels au lieu d’avancer avec une méthode claire.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
<p className="font-medium">2. Croire que cuisiner = décorer</p>
<p className="mt-1 text-sm text-white/75">La décoration est un art à part entière, qui demande précision et technique.</p>
</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
<p className="font-medium">3. Reporter le moment de se lancer</p>
<p className="mt-1 text-sm text-white/75">Le bon moment se crée avec un cadre, des exercices et un formateur.</p>
</div>
<div className="pt-2">
<a className="js-wa inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-[#FE7F42] to-[#B32C1A] px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 hover:opacity-95 transition" href="#">
<i className="h-4 w-4" data-lucide="message-circle"></i>
                Je réserve mon accompagnement
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20" id="programme">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Ce que vous allez apprendre</h2>
<p className="mt-3 text-sm text-white/80">Les 6 modules complets de la formation de 4 mois.</p>
<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-2 text-sm font-medium">
<i className="h-5 w-5 text-[color:var(--brand-50)]" data-lucide="layers"></i> 1. Gâteaux de base
            </div>
<p className="mt-2 text-sm text-white/75">Textures, stabilité et bases solides.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-2 text-sm font-medium">
<i className="h-5 w-5 text-[color:var(--brand-50)]" data-lucide="square"></i> 2. Bordures et finitions
            </div>
<p className="mt-2 text-sm text-white/75">Contours parfaits et nets.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-2 text-sm font-medium">
<i className="h-5 w-5 text-[color:var(--brand-50)]" data-lucide="droplets"></i> 3. Glaçages
            </div>
<p className="mt-2 text-sm text-white/75">Buttercream, fondant et textures modernes.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-2 text-sm font-medium">
<i className="h-5 w-5 text-[color:var(--brand-50)]" data-lucide="palette"></i> 4. Colorimétrie
            </div>
<p className="mt-2 text-sm text-white/75">Harmonies et contrastes comme un designer.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-2 text-sm font-medium">
<i className="h-5 w-5 text-[color:var(--brand-50)]" data-lucide="diamond"></i> 5. Gâteaux de mariage
            </div>
<p className="mt-2 text-sm text-white/75">Élégance, équilibre et originalité.</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center gap-2 text-sm font-medium">
<i className="h-5 w-5 text-[color:var(--brand-50)]" data-lucide="flower-2"></i> 6. Enfants &amp; fleurs en sucre
            </div>
<p className="mt-2 text-sm text-white/75">Créativité et fun garantis.</p>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20" id="formules">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Les 3 formules disponibles</h2>
<div className="mt-8 grid gap-6 lg:grid-cols-3">

<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center justify-between">
<p className="text-lg font-medium">Formule Essentielle</p>
<span className="rounded-full bg-white/5 px-2 py-1 text-xs text-white/70 ring-1 ring-white/10">Pour débuter</span>
</div>
<p className="mt-3 text-2xl font-semibold tracking-tight text-white">20 000 HTG <span className="text-sm font-normal text-white/60">+ frais d’inscription</span></p>
<ul className="mt-4 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="check"></i> 6 modules complets</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="check"></i> Uniforme complet</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="check"></i> Livret + badge étudiant</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="check"></i> 100% pratique</li>
</ul>
<a className="js-wa mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-br from-[#FE7F42] to-[#B32C1A] px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 hover:opacity-95 transition" href="#">
<i className="h-4 w-4" data-lucide="message-circle"></i>
              Réserver sur WhatsApp
            </a>
</div>

<div className="relative rounded-2xl border border-[#FE7F42]/30 bg-gradient-to-b from-[#2A1617] to-[#7A4B47]/30 p-6 ring-1 ring-[#FE7F42]/20">
<div className="absolute -top-3 right-4 rounded-full bg-gradient-to-br from-[#FE7F42] to-[#B32C1A] px-3 py-1 text-xs font-medium text-white shadow ring-1 ring-white/10">
              La plus populaire
            </div>
<div className="flex items-center justify-between">
<p className="text-lg font-medium">Formule Complète</p>
<span className="rounded-full bg-white/5 px-2 py-1 text-xs text-white/70 ring-1 ring-white/10">Équilibre idéal</span>
</div>
<p className="mt-3 text-2xl font-semibold tracking-tight text-white">30 000 HTG <span className="text-sm font-normal text-white/60">+ frais d’inscription</span></p>
<ul className="mt-4 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="check"></i> 6 modules complets</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="check"></i> Uniforme + livret + badge</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="check"></i> Ustensiles de base inclus ou bon d’achat 10 000 HTG</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="check"></i> 1 coaching individuel / mois</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="check"></i> Certificat de fin de formation</li>
</ul>
<a className="js-wa mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-br from-[#FE7F42] to-[#B32C1A] px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 hover:opacity-95 transition" href="#">
<i className="h-4 w-4" data-lucide="message-circle"></i>
              Réserver sur WhatsApp
            </a>
</div>

<div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6">
<div className="flex items-center justify-between">
<p className="text-lg font-medium">Formule Chef Créatif (Premium)</p>
<span className="rounded-full bg-white/5 px-2 py-1 text-xs text-white/70 ring-1 ring-white/10">Business</span>
</div>
<p className="mt-3 text-2xl font-semibold tracking-tight text-white">55 000 HTG</p>
<ul className="mt-4 space-y-2 text-sm text-white/80">
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="check"></i> 6 modules complets + uniforme + livret + badge</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="check"></i> Kit d’ustensiles pros (valeur 15 000 HTG)</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="check"></i> Certificat de fin de formation</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="check"></i> 2 mois d’accompagnement business intensif</li>
</ul>
<div className="mt-4 border-t border-white/10 pt-4">
<p className="text-sm font-medium">Modules bonus exclusifs :</p>
<ul className="mt-2 space-y-1 text-sm text-white/80">
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="sparkles"></i> Créer ton logo et ton style</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="megaphone"></i> Te faire connaître localement et sur Facebook</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="share-2"></i> Publier efficacement sur les réseaux</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="wand-2"></i> Créer des visuels pro avec l’IA</li>
<li className="flex gap-2"><i className="h-4 w-4 text-[#FE7F42]" data-lucide="calculator"></i> Calculer vos marges par gâteau</li>
</ul>
</div>
<a className="js-wa mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-br from-[#FE7F42] to-[#B32C1A] px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 hover:opacity-95 transition" href="#">
<i className="h-4 w-4" data-lucide="message-circle"></i>
              Discuter de cette formule
            </a>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20">
<div className="mx-auto max-w-7xl px-4 sm:px-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Dates de démarrage</h2>
<div className="mt-6 grid gap-4 sm:grid-cols-3">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<p className="text-sm text-white/70">Groupe Vendredi</p>
<p className="mt-1 text-lg font-semibold tracking-tight">7 novembre 2025</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<p className="text-sm text-white/70">Groupe Samedi</p>
<p className="mt-1 text-lg font-semibold tracking-tight">8 novembre 2025</p>
</div>
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
<p className="text-sm text-white/70">Groupe Dimanche</p>
<p className="mt-1 text-lg font-semibold tracking-tight">9 novembre 2025</p>
</div>
</div>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between rounded-lg border border-white/10 bg-gradient-to-br from-[#2A1617] to-[#7A4B47]/40 p-5">
<p className="text-sm text-white/85">Inscriptions ouvertes jusqu’au 30 octobre. Les 10 premiers reçoivent un kit complet de décoration offert.</p>
<a className="js-wa inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-[#FE7F42] to-[#B32C1A] px-4 py-2.5 text-sm font-medium text-white ring-1 ring-white/10 hover:opacity-95 transition" href="#">
<i className="h-4 w-4" data-lucide="message-circle"></i>
            Réserver sur WhatsApp
          </a>
</div>
</div>
</section>

<section className="py-14 sm:py-20" id="faq">
<div className="mx-auto max-w-3xl px-4 sm:px-6">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">FAQ</h2>
<div className="mt-6 divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.03]">

<details className="group open:pb-4 px-5 py-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium">Je suis complètement débutant(e), est‑ce pour moi ?</span>
<i className="h-4 w-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-white/75">Oui, absolument. Nous partons de zéro et chaque module est 100% pratique.</p>
</details>
<details className="group open:pb-4 px-5 py-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium">Dois‑je acheter du matériel avant le début ?</span>
<i className="h-4 w-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-white/75">Non. L’uniforme, le badge et une partie du matériel sont inclus selon la formule.</p>
</details>
<details className="group open:pb-4 px-5 py-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium">Puis‑je payer en plusieurs fois ?</span>
<i className="h-4 w-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-white/75">Oui, facilités possibles selon la formule (jusqu’à 4 paiements).</p>
</details>
<details className="group open:pb-4 px-5 py-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium">Est‑ce que je reçois un certificat ?</span>
<i className="h-4 w-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-white/75">Oui, un certificat est remis à la fin du programme complet.</p>
</details>
<details className="group open:pb-4 px-5 py-4">
<summary className="flex cursor-pointer list-none items-center justify-between gap-4">
<span className="text-sm font-medium">Où se déroulent les cours ?</span>
<i className="h-4 w-4 transition group-open:rotate-180" data-lucide="chevron-down"></i>
</summary>
<p className="mt-3 text-sm text-white/75">Dans notre atelier GarVou Pâtisserie à [insérer la ville ou adresse].</p>
</details>
</div>
<div className="mt-6 text-center">
<a className="js-wa inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-[#FE7F42] to-[#B32C1A] px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:opacity-95 transition" href="#">
<i className="h-4 w-4" data-lucide="message-circle"></i>
            Poser une question sur WhatsApp
          </a>
</div>
</div>
</section>

<section className="py-16">
<div className="mx-auto max-w-5xl px-4 sm:px-6">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#2A1617] to-[#7A4B47]/40 p-8 sm:p-10">
<div className="grid gap-6 sm:grid-cols-2">
<div>
<h3 className="text-2xl font-semibold tracking-tight">Rejoignez GarVou Pâtisserie Academy dès maintenant</h3>
<p className="mt-2 text-sm text-white/80">Prochaine session : novembre 2025 • Formation 100% pratique, en petits groupes.</p>
<p className="mt-1 text-sm text-white/70">Contact : 36607364</p>
</div>
<div className="flex sm:justify-end sm:items-center">
<a className="js-wa inline-flex items-center gap-2 rounded-md bg-gradient-to-br from-[#FE7F42] to-[#B32C1A] px-5 py-3 text-sm font-medium text-white ring-1 ring-white/10 hover:opacity-95 transition" href="#">
<i className="h-5 w-5" data-lucide="message-circle"></i>
                Réservez votre place maintenant
              </a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-center gap-2">
<span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#FE7F42] to-[#B32C1A] ring-1 ring-white/15">
<span className="h-3 w-3 rounded-full bg-[color:var(--brand-50)]"></span>
</span>
<p className="text-sm text-white/70">© GarVou Pâtisserie Academy</p>
</div>
<div className="text-sm text-white/70">
<span className="inline-flex items-center gap-1.5"><i className="h-4 w-4" data-lucide="map-pin"></i> [Votre adresse]</span>
</div>
</div>
</footer>

<div className="fixed bottom-0 inset-x-0 z-50 border-t border-white/10 bg-neutral-950/90 backdrop-blur md:hidden">
<div className="mx-auto max-w-7xl px-4 py-3">
<a className="js-wa inline-flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-br from-[#FE7F42] to-[#B32C1A] px-5 py-3 text-sm font-medium text-white shadow-lg shadow-[#FE7F42]/10 ring-1 ring-white/10" href="#">
<i className="h-5 w-5" data-lucide="message-circle"></i>
          Réserver sur WhatsApp
        </a>
</div>
</div>




    </>
  );
}
