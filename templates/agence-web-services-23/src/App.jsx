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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      lucide.createIcons({
          attrs: {
              'stroke-width': 1.5
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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium text-lg">
            R
          </div>
<span className="font-heading font-medium tracking-tight text-xl text-white">
            Agence
            <span className="text-indigo-400">Really</span>
</span>
</a>
<nav className="hidden md:flex items-center gap-10 text-base font-normal">
<a className="text-gray-400 hover:text-white transition-colors" href="#services">
            Services
          </a>
<a className="text-gray-400 hover:text-white transition-colors" href="#etudes">
            Étude de cas
          </a>
<a className="text-gray-400 hover:text-white transition-colors" href="#blog">
            Blog
          </a>
<a className="px-6 py-2.5 bg-white text-black hover:bg-gray-200 rounded-full transition-all font-medium flex items-center gap-2" href="#contact">
            Demande de devis
            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</nav>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>
<main className="pt-20">

<section className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-xs font-medium text-indigo-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
            Agence digitale experte
          </div>
<h1 className="font-heading font-medium tracking-tight text-4xl md:text-5xl lg:text-[4rem] text-white leading-[1.05]">
            Transformez votre
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">
              vision
            </span>
            en site internet sur mesure
          </h1>
<p className="text-xl md:text-2xl text-gray-400 font-light max-w-xl leading-relaxed">
            Vous cherchez un prestataire pour créer votre site internet et
            obtenir les meilleurs résultats possibles ?
          </p>
<div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
<a className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-medium text-center transition-all flex items-center justify-center gap-2" href="#contact">
              Démarrer le projet
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="text-white font-medium text-lg">5.0</span>
<div className="flex text-yellow-500">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
<p className="text-sm text-gray-500">25+ avis certifiés Google</p>
</div>
</div>
</div>
<div className="relative group z-10">
<div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
<img alt="Dashboard Dashboard" className="w-full object-cover aspect-[4/3] opacity-80 group-hover:opacity-100 transition-opacity duration-700" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5 relative overflow-hidden" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-14 space-y-4">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium text-indigo-400">
              Services
            </div>
<h2 className="font-heading font-semibold tracking-tight text-3xl md:text-5xl text-white leading-tight">
              Comment pouvons-nous aider
              <span className="text-indigo-400">votre entreprise</span>
              ?
            </h2>
<p className="text-lg text-gray-400 font-light max-w-2xl">
              Choisissez l’objectif principal : nous concevons le plan d’action
              (design, dev, SEO) qui convertit.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
<a className="group p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all flex items-start gap-4" href="#contact">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
<i className="w-6 h-6" data-lucide="layout-template"></i>
</div>
<div>
<h3 className="font-heading font-semibold text-white text-base tracking-tight">
                  Construire un site qui rapporte plus
                </h3>
<p className="text-sm text-gray-500 font-light mt-1">
                  Pages orientées conversion, vitesse, UX.
                </p>
</div>
</a>
<a className="group p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all flex items-start gap-4" href="#contact">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
<i className="w-6 h-6" data-lucide="palette"></i>
</div>
<div>
<h3 className="font-heading font-semibold text-white text-base tracking-tight">
                  Créer une marque reconnaissable
                </h3>
<p className="text-sm text-gray-500 font-light mt-1">
                  Identité visuelle cohérente et premium.
                </p>
</div>
</a>
<a className="group p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all flex items-start gap-4" href="#contact">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
<i className="w-6 h-6" data-lucide="search"></i>
</div>
<div>
<h3 className="font-heading font-semibold text-white text-base tracking-tight">
                  Être premier sur Google
                </h3>
<p className="text-sm text-gray-500 font-light mt-1">
                  SEO local + technique, pages ciblées.
                </p>
</div>
</a>
<a className="group p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all flex items-start gap-4" href="#contact">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
<i className="w-6 h-6" data-lucide="filter"></i>
</div>
<div>
<h3 className="font-heading font-semibold text-white text-base tracking-tight">
                  Générer plus de leads / ventes
                </h3>
<p className="text-sm text-gray-500 font-light mt-1">
                  Parcours, tracking, optimisation continue.
                </p>
</div>
</a>
<a className="group p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all flex items-start gap-4" href="#contact">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
<i className="w-6 h-6" data-lucide="bot"></i>
</div>
<div>
<h3 className="font-heading font-semibold text-white text-base tracking-tight">
                  Gagner du temps (automations)
                </h3>
<p className="text-sm text-gray-500 font-light mt-1">
                  Workflows, formulaires, CRM, IA.
                </p>
</div>
</a>
<a className="group p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all flex items-start gap-4" href="#contact">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
<i className="w-6 h-6" data-lucide="bar-chart-3"></i>
</div>
<div>
<h3 className="font-heading font-semibold text-white text-base tracking-tight">
                  Piloter le marketing au même endroit
                </h3>
<p className="text-sm text-gray-500 font-light mt-1">
                  Tableaux de bord, analytics, rapports.
                </p>
</div>
</a>
<a className="group p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all flex items-start gap-4" href="#contact">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
<i className="w-6 h-6" data-lucide="monitor-smartphone"></i>
</div>
<div>
<h3 className="font-heading font-semibold text-white text-base tracking-tight">
                  Augmenter trafic &amp; utilisabilité
                </h3>
<p className="text-sm text-gray-500 font-light mt-1">
                  Accessibilité, mobile-first, performance.
                </p>
</div>
</a>
<a className="group p-6 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all flex items-start gap-4" href="#contact">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
<i className="w-6 h-6" data-lucide="shield"></i>
</div>
<div>
<h3 className="font-heading font-semibold text-white text-base tracking-tight">
                  Ne plus s’inquiéter du site
                </h3>
<p className="text-sm text-gray-500 font-light mt-1">
                  Maintenance, sécurité, évolutions.
                </p>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-y border-white/5 relative overflow-hidden" id="etudes">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 pt-12">
<div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#111] p-2">
<img alt="Search Result" className="w-full rounded-xl opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#111] p-2">
<img alt="Mobile View" className="w-full rounded-xl opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
</div>
<div className="space-y-4">
<div className="rounded-2xl overflow-hidden border border-white/10 shadow-lg bg-[#111] p-2">
<img alt="Dashboard" className="w-full rounded-xl opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 space-y-8 relative z-10">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300">
              Étude de cas
            </div>
<h2 className="font-heading font-medium tracking-tight text-3xl md:text-5xl text-white leading-tight">
              Sur la
              <span className="text-indigo-400">première page</span>
              de Google en 4 mois
            </h2>
<p className="text-lg text-gray-400 font-light leading-relaxed">
              Quand le couvreur nous a contactés il avait déjà eu affaire à
              plusieurs autres créateurs. Après avoir découvert l'entreprise et
              ses besoins nous avons mis en place un site internet qui lui
              permet d'être visible sur Google, loin devant sa compétition !
            </p>
<ul className="space-y-4">
<li className="flex items-start gap-4 text-base text-gray-300">
<div className="mt-1 bg-indigo-500/10 p-1 rounded-full border border-indigo-500/20">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
</div>
                Étude de la compétition locale
              </li>
<li className="flex items-start gap-4 text-base text-gray-300">
<div className="mt-1 bg-indigo-500/10 p-1 rounded-full border border-indigo-500/20">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
</div>
                Création d'un design sur-mesure
              </li>
<li className="flex items-start gap-4 text-base text-gray-300">
<div className="mt-1 bg-indigo-500/10 p-1 rounded-full border border-indigo-500/20">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
</div>
                Optimisation de la vitesse et SEO technique
              </li>
</ul>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="space-y-8 z-10">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300">
              Refonte &amp; Migration
            </div>
<h2 className="font-heading font-medium tracking-tight text-3xl md:text-5xl text-white leading-tight">
              Une refonte qui augmente le trafic de
              <span className="text-indigo-400">66%</span>
</h2>
<p className="text-lg text-gray-400 font-light leading-relaxed">
              Quand la comportementaliste pour chat nous a engagés, le temps de
              chargement était de 3 secondes. Le moyen d'acquisition principal
              étant le SEO, une mise à jour Google a fortement pénalisé le site.
              Nous avons tout repensé.
            </p>
<ul className="space-y-4">
<li className="flex items-start gap-4 text-base text-gray-300">
<div className="mt-1 bg-indigo-500/10 p-1 rounded-full border border-indigo-500/20">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
</div>
                Refonte complète du design UX/UI
              </li>
<li className="flex items-start gap-4 text-base text-gray-300">
<div className="mt-1 bg-indigo-500/10 p-1 rounded-full border border-indigo-500/20">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
</div>
                Amélioration drastique des Core Web Vitals
              </li>
<li className="flex items-start gap-4 text-base text-gray-300">
<div className="mt-1 bg-indigo-500/10 p-1 rounded-full border border-indigo-500/20">
<i className="w-4 h-4 text-indigo-400" data-lucide="check"></i>
</div>
                Création de landing pages dédiées
              </li>
</ul>
</div>
<div className="relative">
<div className="absolute -inset-10 bg-indigo-600/10 blur-[100px] rounded-full opacity-50"></div>
<div className="relative grid grid-cols-2 gap-6">
<div className="space-y-6 pt-16">
<div className="rounded-2xl border border-white/10 shadow-2xl bg-[#111] p-2">
<img alt="Cat Site 1" className="rounded-xl opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<div className="rounded-2xl border border-white/10 shadow-2xl bg-[#111] p-2">
<img alt="Cat Site 3" className="rounded-xl opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1491485880348-85d48a9e5312?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
</div>
<div className="space-y-6">
<div className="rounded-2xl border border-white/10 shadow-2xl bg-[#111] p-2">
<img alt="Cat Site 4" className="rounded-xl opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-indigo-950/10 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 blur-[100px] rounded-full"></div>
<div className="relative z-10 max-w-2xl space-y-6">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium text-indigo-400">
                Passez à l'action
              </div>
<h2 className="font-heading font-medium tracking-tight text-3xl md:text-4xl text-white">
                Arrêtez de perdre des clients à cause d'un site obsolète
              </h2>
<p className="text-lg text-gray-400 font-light">
                Nos sites sont conçus pour convertir vos visiteurs en clients.
                Connectez vos outils, optimisez votre référencement et
                automatisez votre acquisition.
              </p>
</div>
<div className="relative z-10 shrink-0">
<a className="px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-medium transition-all flex items-center gap-2" href="#contact">
                Obtenir un audit gratuit
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-32">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="relative group">
<div className="absolute -inset-4 bg-indigo-600/20 blur-3xl rounded-full opacity-30"></div>
<div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-square max-w-md mx-auto bg-[#111]">
<img alt="Founder Portrait" className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent"></div>
</div>
</div>
<div className="space-y-8">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300">
              À propos
            </div>
<h2 className="font-heading font-medium tracking-tight text-3xl md:text-5xl text-white leading-tight">
              L'artisan derrière
              <span className="text-indigo-400">vos projets web</span>
</h2>
<div className="space-y-6 text-lg text-gray-400 font-light leading-relaxed">
<p>
                Passionné par le web design et le développement depuis plus de
                10 ans, j'ai fondé l'Agence Really avec une idée simple : rendre
                le web de haute qualité accessible aux entreprises ambitieuses.
              </p>
<p>
                Mon approche n'est pas seulement esthétique, elle est
                stratégique. Chaque pixel, chaque ligne de code est pensé pour
                servir vos objectifs commerciaux. Je ne crée pas seulement des
                sites, je bâtis des outils de croissance.
              </p>
</div>
<div className="pt-6 border-t border-white/5">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-indigo-900/50 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-medium text-xl font-heading">
                  R.
                </div>
<div>
<p className="text-white font-medium text-base">Rémi</p>
<p className="text-sm text-gray-500">
                    Fondateur &amp; Lead Developer
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0c0c0e] border-y border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center mb-16 space-y-4">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium text-indigo-400">
              Témoignages
            </div>
<h2 className="font-heading font-medium tracking-tight text-3xl md:text-5xl text-white">
              Des clients qui nous font
              <span className="text-indigo-400">confiance</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all flex flex-col justify-between group">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-sm font-medium">
                    FC
                  </div>
<div>
<h3 className="font-medium text-white text-base">
                      Formations à la carte
                    </h3>
<div className="flex text-yellow-500 mt-1">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
<p className="text-base text-gray-400 leading-relaxed font-light">
                  "Je suis vraiment très satisfaite du travail fourni par
                  l'agence Really pour la création de mon site internet et son
                  référencement."
                </p>
</div>
</div>

<div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all flex flex-col justify-between group">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-sm font-medium">
                    CL
                  </div>
<div>
<h3 className="font-medium text-white text-base">
                      Clément Levasseur
                    </h3>
<div className="flex text-yellow-500 mt-1">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
<p className="text-base text-gray-400 leading-relaxed font-light">
                  "Nous les avons contactés pour dans un premier temps nous
                  aider à créer un logo et une identité visuelle. Après de
                  riches échanges..."
                </p>
</div>
</div>

<div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all flex flex-col justify-between group">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-sm font-medium">
                    BL
                  </div>
<div>
<h3 className="font-medium text-white text-base">
                      Bidaud Lucie
                    </h3>
<div className="flex text-yellow-500 mt-1">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
<p className="text-base text-gray-400 leading-relaxed font-light">
                  "J'ai contacté Rémi afin de créer mon site internet. J'ai été
                  prise en charge du début à la fin ne connaissant rien à ce
                  domaine."
                </p>
</div>
</div>

<div className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all flex flex-col justify-between group">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-sm font-medium">
                    GZ
                  </div>
<div>
<h3 className="font-medium text-white text-base">
                      Guidez Zacharie
                    </h3>
<div className="flex text-yellow-500 mt-1">
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
<i className="w-3 h-3 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
<p className="text-base text-gray-400 leading-relaxed font-light">
                  "L'agence Really est vraiment au top ! Ils sont rapides, bon
                  rapport qualité prix et ils savent vous accompagner dans votre
                  projet !"
                </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
<div className="space-y-8 sticky top-32">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300">
            Méthodologie
          </div>
<h2 className="font-heading font-medium tracking-tight text-3xl md:text-5xl text-white">
            Les étapes de création de
            <span className="text-indigo-400">votre site</span>
</h2>
<div className="space-y-4 text-lg text-gray-400 leading-relaxed font-light">
<p>
              La manière de gérer et organiser la création d'un site internet
              est presque aussi importante que son exécution. Ce processus a été
              affiné avec l'expérience.
            </p>
</div>
<div className="space-y-4 pt-4">

<div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-medium">
                1
              </div>
<div>
<h4 className="text-white font-medium text-base">
                  Analyse &amp; Stratégie
                </h4>
<p className="text-sm text-gray-500 mt-1">
                  Étude de marché et audit SEO de la compétition.
                </p>
</div>
</div>

<div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-medium">
                2
              </div>
<div>
<h4 className="text-white font-medium text-base">Design Figma</h4>
<p className="text-sm text-gray-500 mt-1">
                  Création de maquettes sur-mesure validées ensemble.
                </p>
</div>
</div>

<div className="p-4 rounded-2xl border border-white/5 bg-white/[0.02] flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-medium">
                3
              </div>
<div>
<h4 className="text-white font-medium text-base">
                  Développement Web
                </h4>
<p className="text-sm text-gray-500 mt-1">
                  Intégration propre, rapide et optimisée pour tous les écrans.
                </p>
</div>
</div>
</div>
</div>
<div className="space-y-8">
<div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#111] p-4 shadow-2xl">
<img alt="Process Step 1" className="w-full rounded-xl opacity-90" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-[#111] p-4 shadow-2xl">
<img alt="Process Step 2" className="w-full rounded-xl opacity-90" src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.01] border-y border-white/5" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div className="space-y-4">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-gray-300">
                Insights
              </div>
<h2 className="font-heading font-medium tracking-tight text-3xl md:text-5xl text-white">
                Derniers
                <span className="text-indigo-400">articles</span>
</h2>
</div>
<a className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 hover:bg-white/5 text-sm font-medium text-white transition-colors" href="#">
              Voir tout le blog
              <i className="w-4 h-4 ml-2" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Blog Post" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    SEO &amp; Croissance
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Comment définir des tarifs qui reflètent votre vraie valeur
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white font-medium">
                  R
                </div>
<span className="text-sm text-gray-500 font-medium">Rémi</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Blog Post" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Web Design
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Naviguer dans le cycle de l'indépendance avec un site performant
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white font-medium">
                  JS
                </div>
<span className="text-sm text-gray-500 font-medium">Julie S.</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Blog Post" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Étude de marché
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Créer un système d'onboarding client qui sauve du temps et bâti
                la confiance
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white font-medium">
                  ML
                </div>
<span className="text-sm text-gray-500 font-medium">Marc L.</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="SEO Local" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    SEO Local
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Comment dominer les résultats Google Maps dans votre région
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-[10px] text-white font-medium">
                  R
                </div>
<span className="text-sm text-gray-500 font-medium">Rémi</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Accessibilité" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    UX / UI
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                L'accessibilité web en 2024 : Ne laissez plus d'utilisateurs de côté
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-[10px] text-white font-medium">
                  SD
                </div>
<span className="text-sm text-gray-500 font-medium">Sophie D.</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Refonte" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Stratégie
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Refonte de site : Les 5 erreurs fatales à éviter absolument
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center text-[10px] text-white font-medium">
                  AM
                </div>
<span className="text-sm text-gray-500 font-medium">Alex M.</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Vitesse" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Performance
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Pourquoi la vitesse de votre site détruit discrètement vos conversions
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white font-medium">
                  R
                </div>
<span className="text-sm text-gray-500 font-medium">Rémi</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Webflow WordPress" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Développement
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Webflow vs WordPress : Quel outil choisir pour votre entreprise ?
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white font-medium">
                  JS
                </div>
<span className="text-sm text-gray-500 font-medium">Julie S.</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Copywriting" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Copywriting
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Comment structurer une page de vente qui convertit vraiment
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white font-medium">
                  ML
                </div>
<span className="text-sm text-gray-500 font-medium">Marc L.</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Minimalisme" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Web Design
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                L'impact du design minimaliste sur la confiance de vos visiteurs
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-[10px] text-white font-medium">
                  SD
                </div>
<span className="text-sm text-gray-500 font-medium">Sophie D.</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Optimisation Images" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Tutoriel
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                7 astuces pour optimiser vos images sans aucune perte de qualité
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white font-medium">
                  R
                </div>
<span className="text-sm text-gray-500 font-medium">Rémi</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="PWA vs App" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Technologie
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Faut-il encore créer une application mobile ou une PWA suffit ?
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center text-[10px] text-white font-medium">
                  AM
                </div>
<span className="text-sm text-gray-500 font-medium">Alex M.</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="UX Writing" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    UX Writing
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                UX Writing : Choisir les bons mots pour faire cliquer vos visiteurs
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white font-medium">
                  ML
                </div>
<span className="text-sm text-gray-500 font-medium">Marc L.</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="IA Générative" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Innovation
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Comment utiliser l'IA générative pour créer votre contenu web
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white font-medium">
                  JS
                </div>
<span className="text-sm text-gray-500 font-medium">Julie S.</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Balises SEO" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Guide SEO
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Guide complet sur les balises méta pour un référencement optimal
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white font-medium">
                  R
                </div>
<span className="text-sm text-gray-500 font-medium">Rémi</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Preuve Sociale" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Marketing
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Le pouvoir insoupçonné de la preuve sociale sur votre conversion
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-[10px] text-white font-medium">
                  SD
                </div>
<span className="text-sm text-gray-500 font-medium">Sophie D.</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Design System" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    UI / UX
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Design System : Pourquoi votre agence en a besoin dès maintenant
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-violet-500 flex items-center justify-center text-[10px] text-white font-medium">
                  AM
                </div>
<span className="text-sm text-gray-500 font-medium">Alex M.</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Tendances UI" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Tendances
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Les tendances UI qui vont bouleverser le web l'année prochaine
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] text-white font-medium">
                  JS
                </div>
<span className="text-sm text-gray-500 font-medium">Julie S.</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="Analytics" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Analytics
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                Comment analyser le comportement de vos utilisateurs efficacement
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center text-[10px] text-white font-medium">
                  ML
                </div>
<span className="text-sm text-gray-500 font-medium">Marc L.</span>
</div>
</a>

<a className="group block" href="#">
<div className="relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#111] mb-6 aspect-video">
<img alt="RGPD" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4">
<span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium text-white">
                    Légal
                  </span>
</div>
</div>
<h3 className="font-heading font-medium text-xl text-white mb-3 group-hover:text-indigo-400 transition-colors">
                RGPD et cookies : Comment rester conforme sans ruiner votre UX
              </h3>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] text-white font-medium">
                  R
                </div>
<span className="text-sm text-gray-500 font-medium">Rémi</span>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#09090b] relative overflow-hidden" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16 space-y-4">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium text-indigo-400">
              FAQ
            </div>
<h2 className="font-heading font-medium tracking-tight text-3xl md:text-5xl text-white">
              Questions <span className="text-indigo-400">fréquentes</span>
</h2>
</div>
<div className="space-y-4">

<details className="group border border-white/10 bg-[#111] rounded-2xl overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-white font-medium hover:text-indigo-400 transition-colors">
                Combien coûte la création d'un site web ?
                <span className="transition duration-300 group-open:-rotate-180 text-gray-500">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-5 text-gray-400 font-light text-sm leading-relaxed">
                Le coût varie en fonction de la complexité du projet, du nombre
                de pages et des fonctionnalités requises. Nos projets de site
                vitrine débutent généralement à partir de 2500€ pour une
                conception sur-mesure optimisée pour la conversion.
              </div>
</details>

<details className="group border border-white/10 bg-[#111] rounded-2xl overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-white font-medium hover:text-indigo-400 transition-colors">
                Combien de temps faut-il pour créer un site ?
                <span className="transition duration-300 group-open:-rotate-180 text-gray-500">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-5 text-gray-400 font-light text-sm leading-relaxed">
                En moyenne, la création d'un site internet vitrine prend entre 4
                et 8 semaines. Ce délai inclut la phase de stratégie, la
                création des maquettes, le développement, et les allers-retours
                pour les révisions.
              </div>
</details>

<details className="group border border-white/10 bg-[#111] rounded-2xl overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-white font-medium hover:text-indigo-400 transition-colors">
                Proposez-vous la maintenance après le lancement ?
                <span className="transition duration-300 group-open:-rotate-180 text-gray-500">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-5 text-gray-400 font-light text-sm leading-relaxed">
                Absolument. Nous proposons des forfaits de maintenance mensuels
                qui incluent les mises à jour de sécurité, les sauvegardes
                régulières, l'hébergement et un support prioritaire pour les
                modifications mineures.
              </div>
</details>

<details className="group border border-white/10 bg-[#111] rounded-2xl overflow-hidden">
<summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-white font-medium hover:text-indigo-400 transition-colors">
                Mon site sera-t-il bien référencé sur Google ?
                <span className="transition duration-300 group-open:-rotate-180 text-gray-500">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<div className="px-6 pb-5 text-gray-400 font-light text-sm leading-relaxed">
                Oui, tous nos sites sont développés avec les meilleures
                pratiques SEO techniques (vitesse de chargement, balisage
                sémantique, structure). Nous optimisons également le contenu de
                base pour vos mots-clés principaux.
              </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white/[0.02] border-t border-white/5 relative overflow-hidden" id="contact">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="space-y-8 lg:sticky lg:top-32">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium text-indigo-400">
              Contact
            </div>
<h2 className="font-heading font-medium tracking-tight text-3xl md:text-5xl text-white leading-tight">
              Discutons de votre
              <span className="text-indigo-400">projet</span>
</h2>
<p className="text-lg text-gray-400 font-light leading-relaxed">
              Remplissez le formulaire ci-contre pour nous faire part de vos
              besoins. Nous vous répondrons sous 24h avec une proposition
              d'échange.
            </p>
<div className="space-y-6 pt-8 border-t border-white/5">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
<i className="w-5 h-5" data-lucide="mail"></i>
</div>
<div>
<h4 className="text-white font-medium text-base">Email</h4>
<a className="text-sm text-gray-400 hover:text-indigo-400 transition-colors" href="mailto:hello@agencereally.fr">hello@agencereally.fr</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
<i className="w-5 h-5" data-lucide="phone"></i>
</div>
<div>
<h4 className="text-white font-medium text-base">Téléphone</h4>
<a className="text-sm text-gray-400 hover:text-indigo-400 transition-colors" href="tel:+33123456789">+33 1 23 45 67 89</a>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-indigo-600/10 blur-2xl rounded-[3rem] opacity-50 pointer-events-none"></div>
<div className="relative bg-[#111] border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-2xl">
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300 block" htmlFor="firstname">Prénom</label>
<input className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" id="firstname" placeholder="Jean" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300 block" htmlFor="lastname">Nom</label>
<input className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" id="lastname" placeholder="Dupont" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300 block" htmlFor="email">Email professionnel</label>
<input className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors" id="email" placeholder="jean@entreprise.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300 block" htmlFor="service">Service souhaité</label>
<div className="relative">
<select className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors appearance-none" id="service">
<option disabled="" selected="" value="">
                        Sélectionnez un service
                      </option>
<option value="creation">Création de site web</option>
<option value="refonte">Refonte de site</option>
<option value="seo">Optimisation SEO</option>
<option value="autre">Autre demande</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gray-500">
<i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-300 block" htmlFor="message">Détails du projet</label>
<textarea className="w-full bg-[#09090b] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors resize-none" id="message" placeholder="Parlez-nous de vos objectifs, de votre budget..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2" type="submit">
                  Envoyer la demande
                  <i className="w-4 h-4" data-lucide="send"></i>
</button>
</form>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/5">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center space-y-8">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs font-medium text-indigo-400">
            Commencez maintenant
          </div>
<h2 className="font-heading font-medium tracking-tight text-4xl md:text-6xl text-white leading-tight">
            Prêt à prendre de meilleures décisions avec
            <span className="text-indigo-400">vos données ?</span>
</h2>
<p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
            Essayez nos services d'audit gratuitement. Aucune carte de crédit
            requise pour en discuter.
          </p>
<div className="pt-6">
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-full font-medium transition-all gap-2 text-lg" href="#contact">
              Démarrer l'audit gratuit
              <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</section>
</main>

<footer className="bg-[#09090b] pt-20 pb-10 border-t border-white/5 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
<div className="col-span-2 lg:col-span-2 space-y-6">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-medium text-lg">
                R
              </div>
<span className="font-heading font-medium tracking-tight text-xl text-white">
                Agence
                <span className="text-indigo-400">Really</span>
</span>
</a>
<p className="text-base text-gray-500 max-w-xs font-light">
              Conçu pour aider les entreprises à mettre en valeur leurs produits
              et services avec style.
            </p>
<p className="text-sm text-gray-600">
              Built by Agence Really • Tous droits réservés
            </p>
</div>
<div>
<h4 className="font-medium text-white mb-6 text-sm">Services</h4>
<ul className="space-y-4 text-sm text-gray-400 font-light">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Création web
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  SEO Local
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Identité visuelle
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Refontes
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6 text-sm">Entreprise</h4>
<ul className="space-y-4 text-sm text-gray-400 font-light">
<li>
<a className="hover:text-white transition-colors" href="#">
                  À propos
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Études de cas
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#contact">
                  Contact
                </a>
</li>
</ul>
</div>
<div>
<h4 className="font-medium text-white mb-6 text-sm">Légal</h4>
<ul className="space-y-4 text-sm text-gray-400 font-light">
<li>
<a className="hover:text-white transition-colors" href="#">
                  Mentions légales
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Politique de confidentialité
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">CGV</a>
</li>
</ul>
</div>
</div>
</div>
</footer>


    </>
  );
}
