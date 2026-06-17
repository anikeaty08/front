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
      

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-xl tracking-tighter font-medium flex items-center gap-2" href="#">
<div className="w-8 h-8 rounded bg-gradient-to-tr from-[#b8428d] to-slate-700 flex items-center justify-center text-white text-xs font-bold">
                    Z
                </div>
                LA BOÎTE A 'ZIK
            </a>
<nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">À propos</a>
<a className="hover:text-white transition-colors" href="#reviews">Avis</a>
<a className="hover:text-white transition-colors" href="#blog">Blog</a>
</nav>
<a className="hidden md:flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white px-4 py-2 rounded-full text-xs font-medium transition-all" href="#contact">
                Demander un devis
                <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="DJ Atmosphere" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950"></div>
</div>
<div className="z-10 grid lg:grid-cols-2 gap-12 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">
<div className="fade-in-up space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#b8428d]/30 bg-[#b8428d]/10 text-[#b8428d] text-xs font-medium tracking-wide">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b8428d] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#b8428d]"></span>
</span>
                    DISPONIBLE POUR 2024-2025
                </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight">
                    L'art de faire <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">danser la vie.</span>
</h1>
<p className="text-lg text-slate-400 font-light max-w-xl leading-relaxed">
                    Experts en animation musicale pour mariages, anniversaires et soirées privées. Nous transformons vos événements en souvenirs inoubliables avec une ambiance sur-mesure.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="flex items-center justify-center gap-2 bg-[#b8428d] hover:bg-[#a0367a] text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all shadow-[0_0_20px_-5px_#b8428d]" href="#contact">
                        Réserver ma date
                    </a>
<a className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-3.5 rounded-full text-sm font-medium transition-all border border-slate-700" href="#services">
                        Découvrir nos offres
                    </a>
</div>

<div className="pt-8 flex items-center gap-6 text-slate-500 text-sm">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#b8428d]" icon="solar:star-linear"></iconify-icon>
<span>4.9/5 Avis Clients</span>
</div>
<div className="h-4 w-px bg-slate-800"></div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#b8428d]" icon="solar:music-library-2-linear"></iconify-icon>
<span>+500 Événements</span>
</div>
</div>
</div>
<img alt="DJ Setup" className="aspect-[4/3] w-full object-cover border-white/10 border rounded-3xl relative shadow-2xl" src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1600&amp;q=80"/></div>
</section>

<section className="py-24 bg-slate-950">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in-up">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Pourquoi nous choisir ?</h2>
<p className="text-slate-400 font-light">Une expertise technique et artistique au service de votre événement.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-[#b8428d]/30 transition-all duration-300 fade-in-up delay-100">
<div className="w-12 h-12 rounded-2xl bg-[#b8428d]/10 text-[#b8428d] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:soundwave-square-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">Matériel Haut de Gamme</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                        Sonorisation de pointe et éclairage dynamique piloté par ordinateur pour une immersion totale et une qualité acoustique irréprochable.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-[#b8428d]/30 transition-all duration-300 fade-in-up delay-200">
<div className="w-12 h-12 rounded-2xl bg-[#b8428d]/10 text-[#b8428d] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-hand-up-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">Animation Sur-Mesure</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                        Playlist personnalisée selon vos goûts. Nous adaptons l'énergie de la soirée à vos invités, du cocktail jusqu'au bout de la nuit.
                    </p>
</div>

<div className="group p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-[#b8428d]/30 transition-all duration-300 fade-in-up delay-300">
<div className="w-12 h-12 rounded-2xl bg-[#b8428d]/10 text-[#b8428d] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium mb-3 tracking-tight">Sérénité Garantie</h3>
<p className="text-slate-400 text-sm font-light leading-relaxed">
                        Contrat clair, assurance professionnelle et équipement de secours. Profitez de votre soirée, nous gérons la technique.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-slate-900/20" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="relative order-2 lg:order-1 fade-in-up">
<div className="absolute -inset-4 bg-gradient-to-tr from-[#b8428d]/20 to-transparent rounded-[2.5rem] blur-2xl"></div>
<img alt="DJ Setup" className="relative rounded-3xl shadow-2xl border border-white/10 w-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1594623930572-300a3011d9ae?w=1600&amp;q=80"/>
</div>
<div className="order-1 lg:order-2 fade-in-up delay-100">
<div className="text-[#b8428d] font-medium text-sm mb-4 tracking-wide uppercase">L'Entreprise</div>
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-6">
                    Plus qu'un DJ, un partenaire pour votre événement.
                </h2>
<div className="space-y-6 text-slate-400 font-light leading-relaxed">
<p>
                        Fondée avec une passion dévorante pour la musique et le divertissement,  s'est imposée comme une référence dans l'animation événementielle.
                    </p>
<p>
                        Notre philosophie est simple : chaque événement est unique. Nous ne nous contentons pas de passer de la musique ; nous lisons la foule, anticipons les moments forts et créons une narration musicale qui accompagne les émotions de vos invités.
                    </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-6">
<div>
<div className="text-3xl font-medium text-white mb-1">10+</div>
<div className="text-sm text-slate-500">Années d'expérience</div>
</div>
<div>
<div className="text-3xl font-medium text-white mb-1">100%</div>
<div className="text-sm text-slate-500">Clients satisfaits</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 fade-in-up">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Nos Prestations</h2>
<p className="text-slate-400 font-light max-w-lg">Des formules adaptées à chaque type de célébration pour garantir une ambiance parfaite.</p>
</div>
<a className="text-[#b8428d] hover:text-white transition-colors text-sm font-medium flex items-center gap-1" href="#contact">
                    Voir toutes les options <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer fade-in-up delay-100">
<img alt="Mariage" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1601418059872-2ac6d694946d?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-4 border border-white/20">
<iconify-icon icon="solar:heart-angle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Mariages</h3>
<p className="text-slate-300 text-sm font-light leading-relaxed line-clamp-3 mb-4">
                            De la cérémonie laïque au dancefloor, nous accompagnons le plus beau jour de votre vie avec élégance et émotion.
                        </p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer fade-in-up delay-200">
<img alt="Anniversaire" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&amp;w=1470&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-4 border border-white/20">
<iconify-icon icon="solar:confetti-minimalistic-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Anniversaires</h3>
<p className="text-slate-300 text-sm font-light leading-relaxed line-clamp-3 mb-4">
                            18, 30, 50 ans ? Marquez le coup avec une soirée explosive qui restera gravée dans les mémoires de vos proches.
                        </p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer fade-in-up delay-300">
<img alt="Soirée Privée" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1730818203797-897b2838105a?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white mb-4 border border-white/20">
<iconify-icon icon="solar:wineglass-triangle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white tracking-tight mb-2">Soirées Privées</h3>
<p className="text-slate-300 text-sm font-light leading-relaxed line-clamp-3 mb-4">
                            Cocktails, galas d'entreprise ou fêtes entre amis. Une ambiance chic et décontractée ou une atmosphère clubbing.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-y border-white/5" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight text-center mb-16 fade-in-up">Ce qu'ils disent de nous</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-slate-950 p-8 rounded-2xl border border-white/5 fade-in-up delay-100">
<div className="flex gap-1 text-[#b8428d] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 font-light mb-6">"Une prestation incroyable pour notre mariage. Le DJ a su lire la salle et maintenir l'ambiance jusqu'à 5h du matin. Merci LA Boîte A 'Zik !"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-medium text-xs">SM</div>
<div>
<div className="text-white text-sm font-medium">Sophie &amp; Marc</div>
<div className="text-slate-500 text-xs">Mariage, Juillet 2023</div>
</div>
</div>
</div>

<div className="bg-slate-950 p-8 rounded-2xl border border-white/5 fade-in-up delay-200">
<div className="flex gap-1 text-[#b8428d] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 font-light mb-6">"Professionnel, ponctuel et à l'écoute. J'ai fêté mes 40 ans et tout le monde m'a parlé de la musique. Je recommande vivement."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-medium text-xs">TL</div>
<div>
<div className="text-white text-sm font-medium">Thomas L.</div>
<div className="text-slate-500 text-xs">Anniversaire, Sept 2023</div>
</div>
</div>
</div>

<div className="bg-slate-950 p-8 rounded-2xl border border-white/5 fade-in-up delay-300">
<div className="flex gap-1 text-[#b8428d] mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-300 font-light mb-6">"Excellente gestion des lumières et du son pour notre soirée d'entreprise. Matériel très pro et installation discrète."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white font-medium text-xs">ED</div>
<div>
<div className="text-white text-sm font-medium">Élodie Dubois</div>
<div className="text-slate-500 text-xs">Soirée Pro, Déc 2023</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-950">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight text-center mb-4 fade-in-up">Questions Fréquentes</h2>
<p className="text-slate-400 font-light text-center mb-12 fade-in-up">Tout ce que vous devez savoir avant de réserver.</p>
<div className="space-y-4 fade-in-up delay-100">

<details className="group bg-slate-900/50 rounded-2xl border border-white/5 open:bg-slate-900 open:border-white/10 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none text-white font-medium">
<span>Le matériel de sonorisation est-il inclus ?</span>
<span className="text-slate-500 group-open:text-[#b8428d] transition-colors">
<iconify-icon className="group-open:hidden" icon="solar:add-circle-linear" width="24"></iconify-icon>
<iconify-icon className="hidden group-open:block" icon="solar:minus-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 font-light text-sm leading-relaxed">
                        Oui, nous fournissons l'intégralité du matériel nécessaire : sonorisation haute qualité, régie DJ, micros sans fil et éclairage de piste de danse. Nous adaptons la puissance du matériel à la taille de votre salle et au nombre d'invités.
                    </div>
</details>

<details className="group bg-slate-900/50 rounded-2xl border border-white/5 open:bg-slate-900 open:border-white/10 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none text-white font-medium">
<span>Quels styles de musique mixez-vous ?</span>
<span className="text-slate-500 group-open:text-[#b8428d] transition-colors">
<iconify-icon className="group-open:hidden" icon="solar:add-circle-linear" width="24"></iconify-icon>
<iconify-icon className="hidden group-open:block" icon="solar:minus-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 font-light text-sm leading-relaxed">
                        Nous sommes généralistes ! Des années 80 à l'électro actuelle, en passant par le rock, la pop, le disco ou le latino. Nous définissons ensemble vos préférences musicales lors des rendez-vous préparatoires.
                    </div>
</details>

<details className="group bg-slate-900/50 rounded-2xl border border-white/5 open:bg-slate-900 open:border-white/10 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none text-white font-medium">
<span>Jusqu'à quelle heure restez-vous ?</span>
<span className="text-slate-500 group-open:text-[#b8428d] transition-colors">
<iconify-icon className="group-open:hidden" icon="solar:add-circle-linear" width="24"></iconify-icon>
<iconify-icon className="hidden group-open:block" icon="solar:minus-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 font-light text-sm leading-relaxed">
                        Nos forfaits standards vont généralement jusqu'à 4h du matin. Des heures supplémentaires sont possibles sur demande le soir même si l'ambiance est au rendez-vous.
                    </div>
</details>

<details className="group bg-slate-900/50 rounded-2xl border border-white/5 open:bg-slate-900 open:border-white/10 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none text-white font-medium">
<span>Faut-il payer un acompte pour réserver ?</span>
<span className="text-slate-500 group-open:text-[#b8428d] transition-colors">
<iconify-icon className="group-open:hidden" icon="solar:add-circle-linear" width="24"></iconify-icon>
<iconify-icon className="hidden group-open:block" icon="solar:minus-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 font-light text-sm leading-relaxed">
                        Oui, un acompte de 30% est demandé à la signature du contrat pour bloquer définitivement la date de votre événement. Le solde est à régler avant ou le jour de l'événement.
                    </div>
</details>

<details className="group bg-slate-900/50 rounded-2xl border border-white/5 open:bg-slate-900 open:border-white/10 transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 list-none text-white font-medium">
<span>Vous déplacez-vous loin ?</span>
<span className="text-slate-500 group-open:text-[#b8428d] transition-colors">
<iconify-icon className="group-open:hidden" icon="solar:add-circle-linear" width="24"></iconify-icon>
<iconify-icon className="hidden group-open:block" icon="solar:minus-circle-linear" width="24"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-slate-400 font-light text-sm leading-relaxed">
                        Nous nous déplaçons principalement dans la région, mais nous pouvons aller plus loin sur devis (frais kilométriques et hébergement éventuel à prévoir).
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/20 border-t border-white/5" id="blog">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12 fade-in-up">
<h2 className="text-3xl font-medium text-white tracking-tight">Actualités &amp; Conseils</h2>
<a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Voir tous les articles</a>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer fade-in-up delay-100">
<div className="relative overflow-hidden rounded-2xl aspect-video mb-4 border border-white/5">
<img alt="Playlist Mariage" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1528991281749-0092cfc77c6d?w=800&amp;q=80"/>
</div>
<div className="text-[#b8428d] text-xs font-medium mb-2">Conseils</div>
<h3 className="text-lg text-white font-medium leading-snug mb-2 group-hover:text-[#b8428d] transition-colors">Les 10 indispensables pour votre playlist de mariage en 2024</h3>
<p className="text-slate-400 text-sm font-light line-clamp-2">Comment satisfaire toutes les générations sur la piste de danse sans tomber dans les clichés.</p>
</article>

<article className="group cursor-pointer fade-in-up delay-200">
<div className="relative overflow-hidden rounded-2xl aspect-video mb-4 border border-white/5">
<img alt="Lumière Ambiance" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1496337589254-7e19d01cec44?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-[#b8428d] text-xs font-medium mb-2">Technique</div>
<h3 className="text-lg text-white font-medium leading-snug mb-2 group-hover:text-[#b8428d] transition-colors">L'importance de l'éclairage pour l'ambiance</h3>
<p className="text-slate-400 text-sm font-light line-clamp-2">Pourquoi la mise en lumière architecturale change tout à votre décoration de salle.</p>
</article>

<article className="group cursor-pointer fade-in-up delay-300">
<div className="relative overflow-hidden rounded-2xl aspect-video mb-4 border border-white/5">
<img alt="Organisation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1542628682-88321d2a4828?w=800&amp;q=80"/>
</div>
<div className="text-[#b8428d] text-xs font-medium mb-2">Organisation</div>
<h3 className="text-lg text-white font-medium leading-snug mb-2 group-hover:text-[#b8428d] transition-colors">Quand réserver son DJ ?</h3>
<p className="text-slate-400 text-sm font-light line-clamp-2">Le timing idéal pour être sûr d'avoir le prestataire qu'il vous faut pour votre événement.</p>
</article>
</div>
</div>
</section>

<section className="py-24 bg-slate-950 relative" id="contact">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

<div className="fade-in-up">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Parlons de votre projet</h2>
<p className="text-slate-400 font-light mb-8">Remplissez ce formulaire pour recevoir un devis personnalisé sous 24h.</p>
<form className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300 ml-1" htmlFor="name">Nom complet</label>
<input className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b8428d] focus:ring-1 focus:ring-[#b8428d] transition-all placeholder:text-slate-600" id="name" placeholder="Jean Dupont" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300 ml-1" htmlFor="email">Email</label>
<input className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b8428d] focus:ring-1 focus:ring-[#b8428d] transition-all placeholder:text-slate-600" id="email" placeholder="jean@exemple.com" type="email"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300 ml-1" htmlFor="type">Type d'événement</label>
<div className="relative">
<select className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b8428d] focus:ring-1 focus:ring-[#b8428d] transition-all appearance-none cursor-pointer" id="type">
<option>Mariage</option>
<option>Anniversaire</option>
<option>Soirée Privée</option>
<option>Autre</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-300 ml-1" htmlFor="message">Message</label>
<textarea className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#b8428d] focus:ring-1 focus:ring-[#b8428d] transition-all placeholder:text-slate-600" id="message" placeholder="Date, lieu, ambiance souhaitée..." rows="4"></textarea>
</div>
<div className="flex items-start gap-3 pt-2">
<div className="relative flex items-center">
<input className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-700 bg-slate-900 checked:bg-[#b8428d] checked:border-[#b8428d] transition-all" id="terms" type="checkbox"/>
<iconify-icon className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<label className="text-xs text-slate-500 font-light leading-snug" htmlFor="terms">
                            J'accepte que mes données soient utilisées pour me recontacter.
                        </label>
</div>
<button className="w-full bg-white text-slate-950 font-medium py-3.5 rounded-xl hover:bg-slate-200 transition-colors flex items-center justify-center gap-2" type="button">
                        Envoyer ma demande
                        <iconify-icon icon="solar:plain-3-linear" width="18"></iconify-icon>
</button>
</form>
</div>

<div className="h-full min-h-[400px] rounded-3xl overflow-hidden border border-slate-800 relative fade-in-up delay-200">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156744784!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1646816474632!5m2!1sfr!2sfr" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-4 left-4 right-4 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-white/5 flex gap-4 items-center">
<div className="w-10 h-10 rounded-full bg-[#b8428d]/20 text-[#b8428d] flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-white text-sm font-medium">LA Boîte A 'Zik</div>
<div className="text-slate-400 text-xs font-light">Disponible dans toute la région</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<a className="text-white text-lg tracking-tight font-medium flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-[#b8428d] to-slate-700 flex items-center justify-center text-white text-[10px] font-bold">Z</div>
                        LA BOÎTE A 'ZIK
                    </a>
<p className="text-slate-400 font-light text-sm max-w-sm mb-6">
                        Créateurs d'ambiances uniques pour vos moments les plus précieux. DJ, Son &amp; Lumière.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#b8428d] hover:border-[#b8428d] transition-all" href="#">
<iconify-icon icon="brandico:facebook" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-[#b8428d] hover:border-[#b8428d] transition-all" href="#">
<iconify-icon icon="brandico:instagram" width="14"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Services</h4>
<ul className="space-y-2 text-sm text-slate-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">Mariages</a></li>
<li><a className="hover:text-white transition-colors" href="#">Anniversaires</a></li>
<li><a className="hover:text-white transition-colors" href="#">Soirées Privées</a></li>
<li><a className="hover:text-white transition-colors" href="#">Événements Pro</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm">Entreprise</h4>
<ul className="space-y-2 text-sm text-slate-400 font-light">
<li><a className="hover:text-white transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mentions Légales</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="text-slate-500 text-xs font-light">
                    © 2024 LA Boîte A 'Zik. Tous droits réservés.
                </div>
<div className="flex gap-6 text-slate-500 text-xs font-light">
<a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
<a className="hover:text-white transition-colors" href="#">CGV</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
