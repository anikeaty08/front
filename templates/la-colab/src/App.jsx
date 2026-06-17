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



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Stop observing once animated
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                observer.observe(el);
            });
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
      

<section className="relative bg-gradient-to-b from-[#1B2E5E] to-[#2A6FA8] py-16 md:py-24 px-6 min-h-[90vh] flex flex-col justify-center items-center overflow-hidden">

<div className="plane-wrapper">
<span className="plane-inner text-4xl md:text-5xl">✈️</span>
</div>

<header className="absolute top-0 w-full left-0 p-6 flex justify-between items-center z-10 max-w-6xl mx-auto right-0">
<div className="font-syne font-semibold text-white text-lg md:text-xl tracking-tighter">
                LA CO'<span className="text-[#C8302A]">LAB</span> !
            </div>
</header>
<div className="animate-on-scroll max-w-4xl mx-auto flex flex-col items-center text-center mt-12 md:mt-0 relative z-10">
<span className="text-[#C8302A] font-syne font-medium text-xs md:text-sm uppercase tracking-widest mb-6 block bg-[#1B2E5E]/40 px-4 py-1.5 rounded-full border border-[#C8302A]/20">
                12 PLACES · EMBARQUEMENT TOUS LES 6 MOIS
            </span>
<h1 className="text-white font-syne font-semibold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight mb-4">
                Tu as <span className="text-[#C8302A]">déjà</span> ce qu'il faut.
            </h1>
<h2 className="text-[#4A90C4] font-syne font-medium text-2xl md:text-3xl tracking-tight leading-tight mb-8">
                Il te manque le cadre qui t'oblige à décoller.
            </h2>
<p className="text-white font-semibold text-lg md:text-2xl mb-6 max-w-3xl leading-relaxed">
                Dans 30 jours, tu as avancé plus que pendant les 6 derniers mois. Ou je te rembourse.
            </p>
<p className="text-white/70 text-base md:text-lg font-normal mb-10 max-w-2xl leading-relaxed">
                Pas une formation de plus. Pas un groupe d'inspiration où tu consommes sans agir. Un cockpit. Deux rendez-vous par mois. Une co-pilote qui te remet sur les rails dès que tu t'égares.
            </p>
<div className="signature-line mx-auto mb-10"></div>
<div className="flex flex-col items-center w-full sm:w-auto">
<a className="bg-[#C8302A] text-white rounded-[6px] px-8 py-4 font-medium text-base md:text-lg transition-colors duration-300 hover:bg-[#A02520] flex items-center justify-center gap-2 group w-full sm:w-auto" href="#tarif">
                    Rejoindre la Co'Lab 
                    <iconify-icon className="text-xl transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="text-white/50 text-xs md:text-sm mt-5 font-normal">
                    À partir de 97 € / mois · Vol à l'essai ou saison complète · Prochain décollage dans 6 mois
                </p>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6" id="probleme">
<div className="animate-on-scroll max-w-3xl mx-auto">
<h2 className="text-[#1B2E5E] font-syne font-semibold text-3xl md:text-4xl tracking-tight mb-8">Ce qui se passe vraiment quand tu "travailles"</h2>
<div className="space-y-6 text-gray-700 text-base md:text-lg font-normal leading-relaxed">
<p>Tu coches des cases toute la semaine. Tu retravailles ton offre pour la 12e fois. Tu regardes des replays de webinaires. Tu optimises ton profil LinkedIn. Tu passes plus de temps à refaire ta page d'accueil qu'à parler à de vraies personnes.</p>
<p className="font-semibold text-[#1B2E5E]">Et à la fin du mois, le résultat concret est : zéro client. Ou un seul — et encore, par hasard.</p>
</div>
<blockquote className="mt-10 mb-10 border-l-[3px] border-[#C8302A] bg-[#F0F6FC] p-6 md:p-8 rounded-r-[6px]">
<p className="italic text-[#1B2E5E] text-lg md:text-xl font-normal leading-relaxed">Ce n'est pas un problème de compétences. C'est un problème de carburant — tu en as, mais tu ne sais pas encore comment l'allumer.</p>
</blockquote>
<div className="space-y-6 text-gray-700 text-base md:text-lg font-normal leading-relaxed">
<p>La plupart des entrepreneurs solos échouent par éparpillement, pas par manque de talent. Quand personne ne te demande des comptes, tu fais ce qui est confortable. Les vraies actions — parler à des gens, proposer tes services, demander un retour — passent toujours après les tâches qui donnent l'impression de travailler. Tu le sais. Et tu le refais quand même.</p>
<p>La Co'Lab a été conçue pour créer exactement la pression douce dont tu as besoin pour avancer. Avec un cap clair, une structure mensuelle, et une co-pilote qui ne te laisse pas dériver.</p>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-[#2A6FA8] to-[#4A90C4] py-16 md:py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="animate-on-scroll flex flex-col items-center mb-16 text-center">
<h2 className="text-white font-syne font-semibold text-3xl md:text-4xl tracking-tight mb-6">Ce que tu trouves dans la Co'Lab</h2>
<p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8 font-normal">Un groupe de travail mensuel, à taille humaine — 12 membres maximum. Une structure simple qui tient ses promesses.</p>
<div className="signature-line"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="animate-on-scroll bg-[#F4F2ED] border border-[#4A90C4]/20 rounded-[12px] p-6 md:p-8 relative hover:border-[#4A90C4]/40 transition-colors">
<span className="font-syne text-[#C8302A] font-semibold text-xl mb-3 block tracking-tight">01</span>
<h3 className="font-syne text-[#1B2E5E] font-medium text-xl tracking-tight mb-3">1 objectif mensuel clair</h3>
<p className="text-gray-600 text-sm md:text-base font-normal">Tu arrives avec une idée floue. Tu repars avec un objectif clair et les actions de la semaine. À la fin du mois, on vérifie ensemble — pas de dérive possible.</p>
</div>

<div className="animate-on-scroll delay-100 bg-[#F4F2ED] border border-[#4A90C4]/20 rounded-[12px] p-6 md:p-8 relative hover:border-[#4A90C4]/40 transition-colors">
<span className="font-syne text-[#C8302A] font-semibold text-xl mb-3 block tracking-tight">02</span>
<h3 className="font-syne text-[#1B2E5E] font-medium text-xl tracking-tight mb-3">1 session de co-construction</h3>
<p className="text-gray-600 text-sm md:text-base font-normal">Chaque mois avec Marie : 1 heure d'atelier orienté action. Tu repars avec un livrable concret utilisable immédiatement — pas des notes, un résultat.</p>
</div>

<div className="animate-on-scroll delay-200 bg-[#F4F2ED] border border-[#4A90C4]/20 rounded-[12px] p-6 md:p-8 relative hover:border-[#4A90C4]/40 transition-colors">
<span className="font-syne text-[#C8302A] font-semibold text-xl mb-3 block tracking-tight">03</span>
<h3 className="font-syne text-[#1B2E5E] font-medium text-xl tracking-tight mb-3">1 session de co-développement</h3>
<p className="text-gray-600 text-sm md:text-base font-normal">Fin de mois avec l'équipe du Lab : bilan collectif, cap du mois suivant, déblocage des points de friction.</p>
</div>

<div className="animate-on-scroll delay-300 bg-[#F4F2ED] border border-[#4A90C4]/20 rounded-[12px] p-6 md:p-8 relative hover:border-[#4A90C4]/40 transition-colors">
<span className="font-syne text-[#C8302A] font-semibold text-xl mb-3 block tracking-tight">04</span>
<h3 className="font-syne text-[#1B2E5E] font-medium text-xl tracking-tight mb-3">1 binôme de responsabilité</h3>
<p className="text-gray-600 text-sm md:text-base font-normal">Quelqu'un qui sait exactement quel objectif tu poursuis — et qui te demande des comptes. Sans jugement, avec bienveillance. Inclus dans la formule Saison complète uniquement.</p>
</div>

<div className="animate-on-scroll delay-400 bg-[#F4F2ED] border border-[#4A90C4]/20 rounded-[12px] p-6 md:p-8 relative hover:border-[#4A90C4]/40 transition-colors">
<span className="font-syne text-[#C8302A] font-semibold text-xl mb-3 block tracking-tight">05</span>
<h3 className="font-syne text-[#1B2E5E] font-medium text-xl tracking-tight mb-3">1 canal d'échanges actif</h3>
<p className="text-gray-600 text-sm md:text-base font-normal">Entre les sessions : questions, mises à jour, co-opérations. Ton nouveau bureau virtuel avec des collègues qui avancent.</p>
</div>

<div className="animate-on-scroll delay-500 bg-[#F4F2ED] border border-[#4A90C4]/20 rounded-[12px] p-6 md:p-8 relative hover:border-[#4A90C4]/40 transition-colors">
<span className="font-syne text-[#C8302A] font-semibold text-xl mb-3 block tracking-tight">06</span>
<h3 className="font-syne text-[#1B2E5E] font-medium text-xl tracking-tight mb-3">1 espace ressources ciblé</h3>
<p className="text-gray-600 text-sm md:text-base font-normal">Uniquement ce qui sert à cette étape. Pas de contenu à consommer — des outils à utiliser tout de suite.</p>
</div>
</div>
<div className="animate-on-scroll mt-16 max-w-3xl mx-auto md:text-left text-white/90">
<p className="text-lg md:text-xl font-medium mb-6 text-center md:text-left">Ce qu'on travaille ici n'est pas toute la théorie du business. C'est uniquement ce qui génère des résultats à court terme :</p>
<ul className="space-y-4 text-base md:text-lg text-white/80 font-normal mb-10">
<li className="flex items-start gap-3"><span className="text-[#E8A920] mt-1 shrink-0">—</span> Comment parler aux bonnes personnes — et leur demander quelque chose de concret</li>
<li className="flex items-start gap-3"><span className="text-[#E8A920] mt-1 shrink-0">—</span> Comment créer une offre qui répond à un besoin réel et se vend sans effort sur-humain</li>
<li className="flex items-start gap-3"><span className="text-[#E8A920] mt-1 shrink-0">—</span> Comment vendre — simplement, à ta façon, sans te transformer en quelqu'un d'autre</li>
</ul>
</div>
<div className="animate-on-scroll mt-12 text-center">
<p className="text-white font-medium text-lg md:text-xl inline-block bg-[#1B2E5E]/20 px-6 py-4 rounded-[6px] border border-white/10 shadow-sm">
                    Chaque mois : 1 cap, 2 RDV, 1 bilan. Rien de plus.
                </p>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 bg-white border-y border-black/5">
<div className="max-w-4xl mx-auto animate-on-scroll">
<h2 className="text-[#1B2E5E] font-syne font-semibold text-3xl md:text-4xl tracking-tight mb-10 text-center">Concrètement, après 3 mois dans la Co'Lab :</h2>
<div className="space-y-4 md:space-y-6">
<div className="flex items-start gap-4 p-5 md:p-6 bg-[#F4F2ED]/50 rounded-[8px] border border-[#1B2E5E]/5 transition-colors hover:border-[#4A90C4]/30 hover:bg-[#F4F2ED]">
<iconify-icon className="text-[#C8302A] text-2xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E] text-base md:text-lg font-medium leading-relaxed"><span className="font-semibold">Tu as une offre claire</span> — pas retravaillée pour la 15e fois, calibrée une bonne fois.</span>
</div>
<div className="flex items-start gap-4 p-5 md:p-6 bg-[#F4F2ED]/50 rounded-[8px] border border-[#1B2E5E]/5 transition-colors hover:border-[#4A90C4]/30 hover:bg-[#F4F2ED]">
<iconify-icon className="text-[#C8302A] text-2xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E] text-base md:text-lg font-medium leading-relaxed"><span className="font-semibold">Tu as eu des conversations réelles avec des prospects</span> — pas des stories vues, des échanges concrets.</span>
</div>
<div className="flex items-start gap-4 p-5 md:p-6 bg-[#F4F2ED]/50 rounded-[8px] border border-[#1B2E5E]/5 transition-colors hover:border-[#4A90C4]/30 hover:bg-[#F4F2ED]">
<iconify-icon className="text-[#C8302A] text-2xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E] text-base md:text-lg font-medium leading-relaxed"><span className="font-semibold">Tu as vendu</span> — ou tu sais exactement pourquoi tu n'as pas encore vendu et ce que tu vas changer.</span>
</div>
<div className="flex items-start gap-4 p-5 md:p-6 bg-[#F4F2ED]/50 rounded-[8px] border border-[#1B2E5E]/5 transition-colors hover:border-[#4A90C4]/30 hover:bg-[#F4F2ED]">
<iconify-icon className="text-[#C8302A] text-2xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E] text-base md:text-lg font-medium leading-relaxed"><span className="font-semibold">Tu as une activité qui tourne</span> — ou les bases solides pour qu'elle tourne dans les 90 prochains jours.</span>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 bg-[#F4F2ED]">
<div className="max-w-5xl mx-auto">
<div className="animate-on-scroll text-center mb-16">
<span className="text-[#C8302A] font-syne font-medium text-xs md:text-sm uppercase tracking-widest mb-4 block">LE PROGRAMME</span>
<h2 className="text-[#1B2E5E] font-syne font-semibold text-3xl md:text-4xl tracking-tight mb-6">6 sessions. 6 mois. Un cycle complet.</h2>
<p className="text-gray-600 text-lg md:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
                    Chaque session suit la même structure : 10 min de cadrage, 35 min de travail guidé, 15 min de mise en pratique, 5 min d'action à réaliser avant le mois suivant. Tu repars avec un livrable utilisable immédiatement — pas des notes, un résultat.
                </p>
<div className="signature-line mx-auto mt-10"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">

<div className="animate-on-scroll bg-white border border-[#1B2E5E]/5 rounded-[12px] p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="font-syne font-semibold text-[#1B2E5E] text-xl mb-3 tracking-tight">Mois 1 — Prospection</div>
<p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed">Liste de 20 prospects + message prêt à envoyer + objectif de 10 conversations à lancer dans la semaine.</p>
</div>

<div className="animate-on-scroll delay-100 bg-white border border-[#1B2E5E]/5 rounded-[12px] p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="font-syne font-semibold text-[#1B2E5E] text-xl mb-3 tracking-tight">Mois 2 — Message</div>
<p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed">Phrase de positionnement claire + bio courte + pitch conversationnel que les gens comprennent du premier coup.</p>
</div>

<div className="animate-on-scroll delay-200 bg-white border border-[#1B2E5E]/5 rounded-[12px] p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="font-syne font-semibold text-[#1B2E5E] text-xl mb-3 tracking-tight">Mois 3 — Positionnement</div>
<p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed">Marché cible précis + problème principal identifié + direction commerciale claire pour les 90 prochains jours.</p>
</div>

<div className="animate-on-scroll delay-300 bg-white border border-[#1B2E5E]/5 rounded-[12px] p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="font-syne font-semibold text-[#1B2E5E] text-xl mb-3 tracking-tight">Mois 4 — Offre</div>
<p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed">Offre formulée en 4 éléments + texte simple pour la présenter + prix indicatif cohérent avec le marché.</p>
</div>

<div className="animate-on-scroll delay-400 bg-white border border-[#1B2E5E]/5 rounded-[12px] p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="font-syne font-semibold text-[#1B2E5E] text-xl mb-3 tracking-tight">Mois 5 — Conversation commerciale</div>
<p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed">Trame de conversation commerciale + façon naturelle de proposer + méthode pour annoncer ton prix sans gêne.</p>
</div>

<div className="animate-on-scroll delay-500 bg-white border border-[#1B2E5E]/5 rounded-[12px] p-6 shadow-sm hover:shadow-md transition-shadow">
<div className="font-syne font-semibold text-[#1B2E5E] text-xl mb-3 tracking-tight">Mois 6 — Transformer les conversations en clients</div>
<p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed">Processus simple pour convertir un prospect + message de relance + plan pour tes 10 prochaines conversations.</p>
</div>
</div>
<div className="animate-on-scroll bg-[#FFFAEB] border-l-[3px] border-[#E8A920] p-6 md:p-8 rounded-r-[6px] shadow-sm">
<p className="text-[#1B2E5E] font-medium text-base md:text-lg leading-relaxed">
                    En 6 mois : trouver des prospects <iconify-icon className="inline align-middle mx-1" icon="solar:arrow-right-linear"></iconify-icon> clarifier le message <iconify-icon className="inline align-middle mx-1" icon="solar:arrow-right-linear"></iconify-icon> définir l'offre <iconify-icon className="inline align-middle mx-1" icon="solar:arrow-right-linear"></iconify-icon> mener des conversations <iconify-icon className="inline align-middle mx-1" icon="solar:arrow-right-linear"></iconify-icon> transformer en clients. C'est le système minimum viable pour stabiliser une activité.
                </p>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 border-t border-black/5 bg-white">
<div className="max-w-5xl mx-auto">
<h2 className="text-[#1B2E5E] font-syne font-semibold text-3xl md:text-4xl tracking-tight mb-12 text-center animate-on-scroll">La Co'Lab est faite pour toi si...</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

<div className="animate-on-scroll bg-[#EAF3DE] border-t-[3px] border-[#2D6B4A] rounded-b-[12px] p-8 md:p-10">
<h3 className="font-syne text-[#2D6B4A] font-semibold text-2xl tracking-tight mb-8">Tu es au bon endroit si</h3>
<ul className="space-y-5">
<li className="flex items-start gap-4">
<iconify-icon className="text-[#2D6B4A] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E]/80 text-sm md:text-base font-normal">Tu génères moins de 3 000 €/mois et tu veux dépasser ce cap dans les 90 prochains jours</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#2D6B4A] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E]/80 text-sm md:text-base font-normal">Tu es entrepreneur·e solo de services, formateur·trice ou coach avec une offre qui commence à prendre forme</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#2D6B4A] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E]/80 text-sm md:text-base font-normal">Tu es ancien·ne apprenant·e du Lab (AVE ou CP) et tu veux mettre en pratique ce que tu as appris</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#2D6B4A] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E]/80 text-sm md:text-base font-normal">Tu sais que tu as besoin d'un cadre externe pour arrêter de t'éparpiller</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#2D6B4A] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E]/80 text-sm md:text-base font-normal">Tu sais exactement quelles actions feraient avancer ton activité cette semaine — et tu ne les fais pas</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#2D6B4A] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E]/80 text-sm md:text-base font-normal">Tu apprends mieux entouré·e que seul·e dans ton bureau</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#2D6B4A] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E]/80 text-sm md:text-base font-normal">Tu es prêt·e à passer à l'action dans les 30 prochains jours — pas dans 3 mois</span>
</li>
</ul>
</div>

<div className="animate-on-scroll delay-100 bg-[#FCF0F0] border-t-[3px] border-[#C8302A] rounded-b-[12px] p-8 md:p-10">
<h3 className="font-syne text-[#C8302A] font-semibold text-2xl tracking-tight mb-8">Ce n'est pas le bon vol si</h3>
<ul className="space-y-5">
<li className="flex items-start gap-4">
<iconify-icon className="text-[#C8302A] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E]/80 text-sm md:text-base font-normal">Tu cherches une formation avec du contenu à consommer à ton rythme — ce n'est pas ça</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#C8302A] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E]/80 text-sm md:text-base font-normal">Tu n'es pas encore décidé·e à agir concrètement dans les 30 prochains jours</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#C8302A] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E]/80 text-sm md:text-base font-normal">Tu génères déjà plus de 3 000 €/mois régulièrement — il te faut un autre niveau d'accompagnement</span>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-[#C8302A] text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[#1B2E5E]/80 text-sm md:text-base font-normal">Tu attends qu'on te dise exactement quoi faire à chaque étape sans t'impliquer</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="bg-[#1B2E5E] py-16 md:py-24 px-6">
<div className="max-w-6xl mx-auto">
<div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center md:items-start justify-between mb-16">
<div className="animate-on-scroll md:w-5/12 text-center md:text-left">
<h2 className="text-white font-syne font-semibold text-3xl md:text-4xl tracking-tight mb-6">Marie Décole — ta co-pilote</h2>
<div className="signature-line mx-auto md:ml-0 mb-8"></div>
<p className="text-white/80 text-base font-normal leading-relaxed mb-6">
                        Ex-prof fonctionnaire depuis 2018. Partie sans réseau, sans capital, sans certitude de ce qui m'attendait.
                    </p>
<div className="bg-white/5 border-l-[3px] border-[#E8A920] p-5 mb-6 text-left">
<p className="italic text-white/90 text-sm md:text-base font-medium mb-3">"Quelqu'un à côté, un peu comme un copilote qui te dit, moi j'ai passé par là. Pas en mode voici ce qu'il faut faire — en mode tiens, moi j'ai fait ça, qu'est-ce que t'en penses ?"</p>
<p className="text-white/50 text-xs md:text-sm font-normal">— Entrepreneur·e, membre de la communauté, mars 2026</p>
</div>
<p className="text-white/80 text-base font-normal leading-relaxed">
                        Aujourd'hui : une équipe de 5 à 6 collaborateurs, un organisme de formation 100 % en ligne, et des centaines de personnes accompagnées vers une activité qui leur ressemble.
                    </p>
</div>
<div className="animate-on-scroll delay-100 md:w-7/12 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-4 border-t border-[#4A90C4]/30 sm:border-t-0 pt-10 sm:pt-0 w-full">
<div className="text-center w-full">
<div className="font-syne font-semibold text-white text-3xl md:text-4xl tracking-tight mb-3">+300</div>
<div className="text-[#4A90C4] text-[10px] md:text-xs font-medium uppercase tracking-widest">Personnes accompagnées</div>
</div>
<div className="text-center w-full relative sm:before:content-[''] sm:before:absolute sm:before:-left-2 sm:before:top-2 sm:before:bottom-2 sm:before:w-px sm:before:bg-[#4A90C4]/40">
<div className="font-syne font-semibold text-white text-3xl md:text-4xl tracking-tight mb-3">+10 000</div>
<div className="text-[#4A90C4] text-[10px] md:text-xs font-medium uppercase tracking-widest">Lecteurs mensuels</div>
</div>
<div className="text-center w-full relative sm:before:content-[''] sm:before:absolute sm:before:-left-2 sm:before:top-2 sm:before:bottom-2 sm:before:w-px sm:before:bg-[#4A90C4]/40">
<div className="font-syne font-semibold text-white text-3xl md:text-4xl tracking-tight mb-3">6 ans</div>
<div className="text-[#4A90C4] text-[10px] md:text-xs font-medium uppercase tracking-widest">D'entrepreneuriat</div>
</div>
<div className="text-center w-full relative sm:before:content-[''] sm:before:absolute sm:before:-left-2 sm:before:top-2 sm:before:bottom-2 sm:before:w-px sm:before:bg-[#4A90C4]/40">
<div className="font-syne font-semibold text-white text-3xl md:text-4xl tracking-tight mb-3">+20 000</div>
<div className="text-[#4A90C4] text-[10px] md:text-xs font-medium uppercase tracking-widest">Abonnés réseaux</div>
</div>
</div>
</div>
<div className="animate-on-scroll max-w-4xl mx-auto text-center border-t border-[#4A90C4]/20 pt-12">
<p className="text-white/90 text-lg md:text-xl font-normal leading-relaxed mb-10">
                    Ce que j'ai appris, c'est que 80 % des résultats viennent de 20 % des actions. Et que la plupart des gens qui peinent ne manquent pas de talent — ils manquent d'un environnement qui les oblige à faire les bonnes choses.
                </p>
<div className="inline-block bg-[#1B2E5E] border border-[#4A90C4]/30 px-6 py-4 rounded-[6px] mb-10">
<p className="text-white font-medium text-lg md:text-xl italic leading-relaxed">
                        La Co'Lab, c'est l'environnement que j'aurais voulu avoir à mes débuts.
                    </p>
</div>
<p className="text-[#4A90C4] text-base md:text-lg font-medium">
                    Je ne te vends pas un rêve. Je vole à côté de toi et je te remets sur les rails dès que tu tentes de t'éparpiller.
                </p>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-6 bg-gradient-to-br from-white to-[#F0F5FB] border-y border-black/5">
<div className="max-w-4xl mx-auto text-center animate-on-scroll">
<h2 className="text-[#1B2E5E] font-syne font-semibold text-3xl md:text-4xl tracking-tight mb-12">Ce qu'en disent les premières membres</h2>
<div className="bg-white rounded-[12px] p-8 md:p-12 shadow-[0_8px_30px_rgb(27,46,94,0.06)] border border-[#1B2E5E]/5 relative mb-10 mx-auto max-w-3xl">
<div className="font-syne font-semibold text-[#4A90C4] text-7xl leading-none absolute -top-6 left-6 opacity-20">"</div>
<p className="text-[#1B2E5E] font-medium text-xl md:text-2xl leading-relaxed mb-6 italic relative z-10">
                    "J'ai enfin un cap clair. Pour la première fois depuis 6 mois, je sais exactement ce que je fais cette semaine — et pourquoi."
                </p>
<div className="flex items-center justify-center gap-3 relative z-10">
<div className="h-[1px] w-8 bg-[#C8302A]/50"></div>
<p className="text-gray-500 font-medium text-sm md:text-base uppercase tracking-widest">— Membre en phase de lancement</p>
<div className="h-[1px] w-8 bg-[#C8302A]/50"></div>
</div>
</div>
<p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                La Co'Lab est en cours de lancement. Les premiers retours des membres testeurs confirment ce qu'on avait anticipé : ce n'est pas l'information qui manquait, c'est la structure et l'obligation de rendre des comptes.
            </p>
</div>
</section>

<section className="py-16 md:py-24 px-6 bg-[#F4F2ED]">
<div className="animate-on-scroll max-w-3xl mx-auto bg-white rounded-[12px] p-8 md:p-12 shadow-[0_4px_40px_rgba(27,46,94,0.04)] border border-[#1B2E5E]/5 relative overflow-hidden">

<div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-[#E8F2F9] to-transparent rounded-full blur-3xl opacity-60 pointer-events-none"></div>
<span className="text-[#C8302A] font-syne font-medium text-xs md:text-sm uppercase tracking-widest mb-4 block relative z-10">Bonus — réservé aux membres Saison complète</span>
<h2 className="text-[#1B2E5E] font-syne font-semibold text-2xl md:text-3xl tracking-tight mb-8 relative z-10">
                Session de cadrage d'offre individuelle avec Marie (valeur 150 €) — incluse dans la formule Saison complète
            </h2>
<p className="text-gray-600 text-base font-normal mb-8 leading-relaxed relative z-10">
                Avant même la première session collective, tu reçois un RDV individuel de 30 minutes avec moi. On clarifie ton offre, on identifie ce qui bloque vraiment, et tu arrives à la Co'Lab avec un objectif déjà calibré — pas à tâtons.
            </p>
<p className="text-[#1B2E5E] font-semibold text-base mb-8 relative z-10">
                Ce bonus est exclusif à la formule 6 mois. Il n'est pas disponible en vol à l'essai.
            </p>
<div className="bg-[#FCF0F0] border-l-[3px] border-[#C8302A] p-6 text-sm text-[#1B2E5E] font-medium rounded-r-[6px] relative z-10">
                La Co'Lab n'ouvre qu'une fois tous les 6 mois. Si tu rates cet embarquement, le prochain est dans 6 mois.
            </div>
</div>
</section>

<section className="py-16 md:py-24 px-6 border-t border-black/5 bg-[#F0F5FB]/30" id="tarif">
<div className="animate-on-scroll max-w-5xl mx-auto">
<div className="text-center mb-12 md:mb-16">
<h2 className="text-[#1B2E5E] font-syne font-semibold text-3xl md:text-4xl tracking-tight mb-4">Investissement</h2>
<p className="text-gray-600 text-lg font-normal">Deux façons de monter à bord — selon la vitesse de croisière qui te convient.</p>
<div className="signature-line mx-auto mt-6"></div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

<div className="bg-white rounded-[12px] p-8 md:p-10 shadow-sm border-t-[3px] border-[#2A6FA8] relative flex flex-col h-full">
<div className="text-[#2A6FA8] text-sm font-semibold uppercase tracking-widest mb-4">VOL À L'ESSAI</div>
<div className="font-syne font-semibold text-[#1B2E5E] text-4xl md:text-5xl tracking-tight mb-2">
                        97 € <span className="text-xl text-gray-400 font-medium tracking-normal">/ mois</span>
</div>
<div className="text-[#1B2E5E] font-medium text-sm mb-6 pb-6 border-b border-gray-100">Sans engagement · Résiliable à tout moment · Sans binôme</div>
<p className="text-gray-600 text-sm md:text-base font-normal mb-8 flex-grow">
                        Tu testes, tu vois ce que ça donne. Accès complet à toutes les sessions et à l'espace ressources dès le premier mois. Pas de binôme assigné — tu avances dans le groupe, à ton rythme. Si ce n'est pas fait pour toi, tu pars sans friction.
                    </p>
<a className="block w-full text-center border border-[#2A6FA8] text-[#2A6FA8] rounded-[6px] px-6 py-4 font-medium text-base transition-colors hover:bg-[#2A6FA8] hover:text-white" href="#">
                        Commencer l'essai
                    </a>
</div>

<div className="bg-white rounded-[12px] p-8 md:p-10 shadow-lg border-t-[3px] border-[#C8302A] relative flex flex-col h-full ring-1 ring-[#C8302A]/10">
<div className="text-[#C8302A] text-sm font-semibold uppercase tracking-widest mb-4">SAISON COMPLÈTE — 2 mois offerts</div>
<div className="font-syne font-semibold text-[#1B2E5E] text-4xl md:text-5xl tracking-tight mb-2">
                        497 € <span className="text-xl text-gray-400 font-medium tracking-normal">soit 83 € / mois</span>
</div>
<div className="text-[#1B2E5E] font-medium text-sm mb-6 pb-6 border-b border-gray-100">Engagement 6 mois · Paiement en une fois · Binôme inclus</div>
<p className="text-gray-600 text-sm md:text-base font-normal mb-8 flex-grow">
                        Tu t'embarques pour les 6 mois — avec un binôme assigné dès le départ. Quelqu'un qui sait exactement quel objectif tu poursuis et qui te demande des comptes chaque mois. C'est ce qui fait la différence entre avancer et dériver.
                    </p>
<a className="block w-full text-center bg-[#C8302A] text-white rounded-[6px] px-6 py-4 font-medium text-base transition-colors hover:bg-[#A02520]" href="#">
                        Rejoindre pour 6 mois
                    </a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">

<div className="bg-white rounded-[8px] p-6 md:p-8 border border-[#2A6FA8]/20 shadow-sm">
<div className="font-syne font-semibold text-[#1B2E5E] mb-5 text-lg">VOL À L'ESSAI — ce qui est inclus</div>
<ul className="space-y-4 text-sm md:text-base text-gray-600">
<li className="flex items-start gap-3"><iconify-icon className="text-[#2A6FA8] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> <span className="font-medium">1 objectif mensuel + session co-construction avec Marie</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#2A6FA8] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> <span className="font-medium">Session co-développement fin de mois</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#2A6FA8] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> <span className="font-medium">Canal d'échanges + espace ressources</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-gray-400 text-xl shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> <span className="text-gray-500">Pas de binôme de responsabilité</span></li>
</ul>
</div>

<div className="bg-[#FCF0F0] rounded-[8px] p-6 md:p-8 border border-[#C8302A]/20 shadow-sm">
<div className="font-syne font-semibold text-[#1B2E5E] mb-5 text-lg">SAISON COMPLÈTE — ce qui est inclus</div>
<ul className="space-y-4 text-sm md:text-base text-gray-600">
<li className="flex items-start gap-3"><iconify-icon className="text-[#C8302A] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> <span className="font-medium">1 objectif mensuel + session co-construction avec Marie</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#C8302A] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> <span className="font-medium">Session co-développement fin de mois</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#C8302A] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> <span className="font-medium">Canal d'échanges + espace ressources</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#C8302A] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> <span className="text-[#C8302A] font-semibold">Binôme de responsabilité assigné — inclus</span></li>
<li className="flex items-start gap-3"><iconify-icon className="text-[#C8302A] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> <span className="text-[#C8302A] font-semibold">Session de cadrage individuelle avec Marie (valeur 150 €)</span></li>
</ul>
</div>
</div>

<div className="max-w-3xl mx-auto">
<p className="italic text-gray-500 mb-6 text-center text-sm md:text-base">Mise en perspective :</p>
<ul className="space-y-4 text-sm md:text-base text-gray-600 font-normal mb-12">
<li className="flex items-start gap-3 p-4">
<span className="text-gray-400 shrink-0 mt-0.5">•</span>
<div><strong className="text-[#1B2E5E] font-medium">Une heure de coaching individuel :</strong> 150 à 300 €</div>
</li>
<li className="flex items-start gap-3 p-4">
<span className="text-gray-400 shrink-0 mt-0.5">•</span>
<div><strong className="text-[#1B2E5E] font-medium">Un mastermind classique en ligne :</strong> 300 à 800 €/mois</div>
</li>
<li className="flex items-start gap-3 bg-[#E8F2F9] p-5 rounded-[8px] border border-[#2A6FA8]/20">
<span className="text-[#2A6FA8] shrink-0 mt-0.5">•</span>
<div><strong className="text-[#1B2E5E] font-semibold">La Co'Lab (saison complète) :</strong> 2 sessions live + binôme + canal + session cadrage individuelle — 83 €/mois</div>
</li>
</ul>
</div>

<div className="bg-[#EAF3DE] border-l-[3px] border-[#2D6B4A] p-6 md:p-8 text-[#2D6B4A] text-sm md:text-base text-left flex items-start gap-4 rounded-r-[6px] max-w-3xl mx-auto">
<iconify-icon className="text-2xl md:text-3xl shrink-0 mt-0.5" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<div className="leading-relaxed font-medium">
                    Garantie 30 jours : si tu estimes que la Co'Lab ne t'a pas aidée à clarifier ton objectif et ton plan d'action, je te rembourse. Sans question.
                </div>
</div>
</div>
</section>

<section className="bg-[#F4F2ED] py-16 md:py-24 px-6 border-t border-black/5">
<div className="animate-on-scroll max-w-3xl mx-auto">
<h2 className="text-[#1B2E5E] font-syne font-semibold text-3xl md:text-4xl tracking-tight mb-12 text-center">Questions fréquentes</h2>
<div className="space-y-2">

<details className="group border-b border-[#4A90C4]/20 py-5" open="">
<summary className="flex justify-between items-center cursor-pointer font-medium text-[#1B2E5E] text-base md:text-lg select-none">
<span>Je suis ancien·ne apprenant·e du Lab. C'est fait pour moi ?</span>
<span className="transition-transform duration-300 group-open:-rotate-180 text-[#2A6FA8] shrink-0 ml-4">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-600 text-sm md:text-base font-normal mt-4 leading-relaxed pr-8 opacity-90">
                        En priorité, oui. La Co'Lab est la suite logique après AVE ou CP : tu as les compétences, il manque le cadre pour les mettre en vol. C'est exactement ce que la Co'Lab comble.
                    </div>
</details>

<details className="group border-b border-[#4A90C4]/20 py-5">
<summary className="flex justify-between items-center cursor-pointer font-medium text-[#1B2E5E] text-base md:text-lg select-none">
<span>Je ne suis pas passé·e par le Lab. Puis-je rejoindre ?</span>
<span className="transition-transform duration-300 group-open:-rotate-180 text-[#2A6FA8] shrink-0 ml-4">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-600 text-sm md:text-base font-normal mt-4 leading-relaxed pr-8 opacity-90">
                        Oui, si tu es entrepreneur·e solo de services, formateur·trice ou coach sous 3 000 €/mois, et que tu me connais déjà via ma communauté ou ma newsletter. Le groupe est volontairement restreint à 12 pour que l'accompagnement reste réel.
                    </div>
</details>

<details className="group border-b border-[#4A90C4]/20 py-5">
<summary className="flex justify-between items-center cursor-pointer font-medium text-[#1B2E5E] text-base md:text-lg select-none">
<span>Combien de temps ça demande chaque semaine ?</span>
<span className="transition-transform duration-300 group-open:-rotate-180 text-[#2A6FA8] shrink-0 ml-4">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-600 text-sm md:text-base font-normal mt-4 leading-relaxed pr-8 opacity-90">
                        2 sessions Zoom par mois (1h chacune) + le canal selon ton appétit. En Saison complète, ajoute 15 à 30 minutes avec ton binôme selon votre rythme. Soit 2 à 3 heures par mois minimum pour en tirer de la valeur. Si tu n'as pas 3 heures par mois pour ton activité, le problème n'est pas la Co'Lab.
                    </div>
</details>

<details className="group border-b border-[#4A90C4]/20 py-5">
<summary className="flex justify-between items-center cursor-pointer font-medium text-[#1B2E5E] text-base md:text-lg select-none">
<span>Et si je n'atteins pas mon objectif du mois ?</span>
<span className="transition-transform duration-300 group-open:-rotate-180 text-[#2A6FA8] shrink-0 ml-4">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-600 text-sm md:text-base font-normal mt-4 leading-relaxed pr-8 opacity-90">
                        On analyse ensemble ce qui s'est passé. Pas de jugement, pas de complaisance. La session de co-développement existe précisément pour comprendre ce qui a bloqué et recalibrer le cap pour le mois suivant.
                    </div>
</details>

<details className="group border-b border-[#4A90C4]/20 py-5">
<summary className="flex justify-between items-center cursor-pointer font-medium text-[#1B2E5E] text-base md:text-lg select-none">
<span>Quelle différence avec un groupe Facebook ou un mastermind gratuit ?</span>
<span className="transition-transform duration-300 group-open:-rotate-180 text-[#2A6FA8] shrink-0 ml-4">
<iconify-icon className="text-xl" icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-600 text-sm md:text-base font-normal mt-4 leading-relaxed pr-8 opacity-90">
                        L'engagement financier, même modeste, crée un rapport différent à l'action. Et surtout : la structure mensuelle imposée, le binôme de responsabilité, et ma présence à chaque session. Un espace gratuit sans structure devient vite un endroit où tu consommes. La Co'Lab est un endroit où tu produis.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-gradient-to-b from-[#1B2E5E] to-[#2A6FA8] py-20 md:py-32 px-6 text-center">
<div className="animate-on-scroll max-w-3xl mx-auto">
<h2 className="text-white font-syne font-semibold text-4xl md:text-5xl tracking-tight mb-8">12 places. Un décollage tous les 6 mois.</h2>
<div className="space-y-4 mb-10 text-white/80 text-base md:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
<p>Les premières places sont réservées aux anciens apprenants du Lab et aux membres actifs de ma communauté.</p>
<p>La session de cadrage individuelle est incluse dans la formule Saison complète uniquement. Elle ne sera pas proposée au prochain groupe.</p>
</div>
<div className="bg-[#FCF0F0] border-l-[3px] md:border-l-0 md:border-t-[3px] border-[#C8302A] p-6 text-[#C8302A] rounded-r-[6px] md:rounded-r-none md:rounded-b-[6px] max-w-xl mx-auto mb-12 text-left md:text-center shadow-lg">
<p className="font-semibold text-lg md:text-xl leading-relaxed">
                    Le plus coûteux, ce n'est pas d'échouer.<br/>
                    C'est de rester six mois seule avec les mêmes doutes.
                </p>
</div>
<div className="flex flex-col items-center">
<a className="inline-flex items-center justify-center gap-2 w-full max-w-md bg-[#C8302A] text-white rounded-[6px] px-8 py-5 font-medium text-base md:text-lg transition-transform hover:scale-[1.02] hover:bg-[#A02520] mb-6 shadow-lg shadow-[#C8302A]/20" href="#tarif">
                    Rejoindre la Co'Lab 
                    <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<p className="text-white/60 text-xs md:text-sm font-normal mb-12">
                    97 €/mois sans engagement · ou 497 € pour la saison complète · Garantie 30 jours
                </p>
</div>
<p className="text-white/70 italic text-sm md:text-base font-normal mb-12">
                Tu as une question avant de te décider ? Réponds directement à cet email — je lis tout.
            </p>
<div className="text-white/40 text-[10px] md:text-xs font-medium uppercase tracking-widest pt-8 border-t border-white/10">
                Marie Décole · Fondatrice du Lab Pédagogique<br className="md:hidden mt-2"/><span className="hidden md:inline"> · </span>lelabpedagogique.com
            </div>
</div>
</section>



    </>
  );
}
