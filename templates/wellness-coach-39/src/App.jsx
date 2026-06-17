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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Reveal
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        revealElements.forEach(el => revealObserver.observe(el));
    
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
      

<nav className="fixed w-full z-50 top-0 bg-[#FDFBF7]/80 backdrop-blur-md border-b border-black/5 h-16 px-6 flex items-center justify-center transition-all duration-300">
<a className="text-xl font-medium text-[#1A1A1A] tracking-tighter font-['Playfair_Display']" href="#">ICC</a>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-white to-[#F7F2EC] pt-24 pr-6 pb-20 pl-6 relative items-center justify-center">
<div className="max-w-4xl mx-auto text-center relative z-10 space-y-8 mt-10">
<span className="inline-flex items-center gap-2 uppercase text-xs font-medium text-[#C96A4A] tracking-wider bg-[#C96A4A]/10 border-[#C96A4A]/20 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3">
<iconify-icon icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
                Formation Professionnalisante
            </span>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-normal text-[#1A1A1A] tracking-tight font-['Playfair_Display']">Formation <br className="md:hidden"/> Praticien du Protocole CALL®</h1>
<p className="text-lg md:text-xl font-['Playfair_Display'] text-[#1A1A1A] font-light max-w-2xl mx-auto leading-relaxed tracking-tight">
                Devenez accompagnant du choix profond. Transformez en profondeur et embellissez des trajectoires de vie.
            </p>
<div className="space-y-4 text-sm md:text-base text-[#2D3436]/80 max-w-2xl mx-auto pt-6 reveal">
<p>Dans un monde surinformé, suradapté, où les décisions sont prises par peur ou inertie, où l'humain est déconnecté du sens et dispersé...</p>
<p className="font-normal text-[#1A1A1A]">Faire des choix conscients répond à un besoin vital de notre époque où tout devient de plus en plus automatique.</p>
<p className="">Il est urgent de former des accompagnants capables d'ouvrir des espaces d’écoute profonde de soi lors de passages décisifs dans la vie des personnes.</p>
<p className="font-['Playfair_Display'] italic text-lg md:text-xl text-[#1A1A1A] pt-4 tracking-tight">Et si vous deveniez celui ou celle qui accompagne ces transformations profondes ?</p>
</div>
<div className="pt-12 flex flex-col items-center gap-8 reveal">
<a className="hover:bg-[#B85C3C] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(201,106,74,0.4)] hover:-translate-y-0.5 flex items-center gap-2 animate-[heartbeat_3s_infinite] md:text-base text-sm font-normal text-white bg-[#C96A4A] rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-[0_4px_14px_rgba(201,106,74,0.3)]" href="https://www.helloasso.com/associations/association-incandescence/evenements/praticien-du-protocole-call">
<iconify-icon className="text-lg" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
                    JE VEUX DEVENIR PRATICIEN CALL
                    <iconify-icon className="text-lg ml-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs md:text-sm text-[#2D3436]/60 uppercase tracking-wider font-light">
<span className="flex items-center gap-2"><iconify-icon className="text-[#C9A227] text-base" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon> Certification incluse</span>
</div>
</div>
</div>
</section>

<div className="w-12 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent mx-auto"></div>

<section className="md:py-32 bg-[#F7F2EC] pt-24 pr-6 pb-24 pl-6">
<div className="max-w-6xl mx-auto">
<h2 className="font-['Playfair_Display'] text-3xl md:text-5xl text-[#1A1A1A] text-center mb-16 tracking-tight font-normal reveal">
                Le Monde Actuel : Un Besoin Urgent
            </h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.04] relative overflow-hidden group reveal">
<div className="absolute top-0 left-0 w-full h-1 bg-[#C96A4A]"></div>
<div className="w-12 h-12 rounded-xl bg-[#C96A4A]/10 flex items-center justify-center text-[#C96A4A] mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:danger-triangle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1A1A1A] mb-6 font-normal tracking-tight">Ce que nous constatons</h3>
<ul className="space-y-4 text-sm md:text-base text-[#2D3436]/80">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C96A4A] text-lg shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Surinformé, suradapté</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C96A4A] text-lg shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Décisions prises par peur ou inertie</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C96A4A] text-lg shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Déconnecté du sens, dispersé</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C96A4A] text-lg shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Humain manipulé, dépossédé de son pouvoir</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#C96A4A] text-lg shrink-0 mt-0.5" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Compromissions toxiques et subis quotidiens</span>
</li>
</ul>
</div>
<div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.04] relative overflow-hidden group reveal">
<div className="absolute top-0 left-0 w-full h-1 bg-[#6B8F71]"></div>
<div className="w-12 h-12 rounded-xl bg-[#6B8F71]/10 flex items-center justify-center text-[#6B8F71] mb-8 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1A1A1A] mb-6 font-normal tracking-tight">Ce que nous créons ensemble</h3>
<ul className="space-y-4 text-sm md:text-base text-[#2D3436]/80">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#6B8F71] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Des humains souverains capables de dire : "Ceci est non négociable"</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#6B8F71] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Retrouver son autorité intérieure et ne plus donner son pouvoir</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#6B8F71] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Des décisions incarnées et assumées</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#6B8F71] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Moins de compromissions toxiques, plus de choisis !</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#6B8F71] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
<span>Retour à la source, en soi, et œuvrer à partir de là</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#FDFBF7]">
<div className="max-w-3xl mx-auto text-center space-y-10 reveal">
<span className="text-xs font-medium tracking-widest text-[#C9A227] uppercase">La Mission de l'Institut</span>
<h2 className="font-['Playfair_Display'] text-3xl md:text-5xl text-[#1A1A1A] tracking-tight font-normal leading-tight">
                Créer un réseau de personnes capables d'accompagner l'humain à choisir en conscience dans un monde saturé d'indécision.
            </h2>
<div className="w-12 h-px bg-[#C9A227]/30 mx-auto my-10"></div>
<div className="text-left max-w-xl mx-auto space-y-8">
<h3 className="text-xs text-[#2D3436]/60 font-medium uppercase tracking-widest text-center">Avec la formation Praticien CALL, nous visons à :</h3>
<ul className="space-y-6 text-sm md:text-base text-[#2D3436]">
<li className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#6B8F71]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#6B8F71] text-xl" icon="solar:leaf-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span>Transformer en profondeur et embellir des trajectoires de vie</span>
</li>
<li className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#C9A227]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#C9A227] text-xl" icon="solar:key-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span>Former des accompagnants capables d'ouvrir des passages décisifs</span>
</li>
<li className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-[#C96A4A]/10 flex items-center justify-center shrink-0">
<iconify-icon className="text-[#C96A4A] text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span>Créer un réseau de praticiens maîtrisant le protocole CALL®</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#F7F2EC]">
<div className="max-w-6xl mx-auto">
<h2 className="font-['Playfair_Display'] text-3xl md:text-5xl text-[#1A1A1A] text-center mb-16 tracking-tight font-normal reveal">
                Ce Que Vous Allez Pouvoir Faire
            </h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.04] reveal">
<div className="w-12 h-12 rounded-xl border border-black/5 flex items-center justify-center mb-6 text-[#1A1A1A]">
<iconify-icon className="text-2xl" icon="solar:compass-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#1A1A1A] mb-4 font-normal tracking-tight">Accompagner en Profondeur</h3>
<ul className="space-y-3 text-sm text-[#2D3436]/80">
<li>• Accompagner dans des choix de vie non négociables</li>
<li>• Ouvrir des passages décisifs dans leur trajectoire</li>
<li>• Transformer en profondeur et embellir des vies</li>
</ul>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.04] reveal">
<div className="w-12 h-12 rounded-xl border border-black/5 flex items-center justify-center mb-6 text-[#1A1A1A]">
<iconify-icon className="text-2xl" icon="solar:key-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#1A1A1A] mb-4 font-normal tracking-tight">Maîtriser le Protocole CALL®</h3>
<ul className="space-y-3 text-sm text-[#2D3436]/80">
<li>• Maîtrise complète du protocole (21 étapes)</li>
<li>• Utiliser le protocole pour vous-même</li>
<li>• Accompagner en individuel</li>
</ul>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.04] reveal">
<div className="w-12 h-12 rounded-xl border border-black/5 flex items-center justify-center mb-6 text-[#1A1A1A]">
<iconify-icon className="text-2xl" icon="solar:case-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#1A1A1A] mb-4 font-normal tracking-tight">En Faire un Outil Pro</h3>
<ul className="space-y-3 text-sm text-[#2D3436]/80">
<li>• Capacité d'en faire un outil professionnel central</li>
<li>• Accompagner en cabinet, en ligne, en entreprise</li>
<li className="">• Intégrer le Protocole CALL® dans votre pratique</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#FDFBF7]">
<div className="max-w-3xl mx-auto">
<h2 className="font-['Playfair_Display'] text-3xl md:text-5xl text-[#1A1A1A] text-center mb-16 tracking-tight font-normal reveal">
                Ce Que Vous Allez Obtenir
            </h2>
<div className="bg-white rounded-3xl border border-[#C9A227]/20 p-8 md:p-12 space-y-6 shadow-[0_8px_30px_rgba(0,0,0,0.03)] reveal">
<div className="flex items-start gap-4 group">
<div className="w-6 h-6 rounded-md border border-[#C9A227]/40 flex items-center justify-center bg-white group-hover:bg-[#C9A227]/10 transition-colors shrink-0 mt-0.5">
<iconify-icon className="text-[#C9A227] text-sm" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm md:text-base text-[#2D3436]">Une maîtrise complète du protocole CALL® (21 étapes)</p>
</div>
<div className="flex items-start gap-4 group">
<div className="w-6 h-6 rounded-md border border-[#C9A227]/40 flex items-center justify-center bg-white group-hover:bg-[#C9A227]/10 transition-colors shrink-0 mt-0.5">
<iconify-icon className="text-[#C9A227] text-sm" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm md:text-base text-[#2D3436]">Une transformation personnelle profonde (vous vivrez le protocole de l'intérieur)</p>
</div>
<div className="flex items-start gap-4 group">
<div className="w-6 h-6 rounded-md border border-[#C9A227]/40 flex items-center justify-center bg-white group-hover:bg-[#C9A227]/10 transition-colors shrink-0 mt-0.5">
<iconify-icon className="text-[#C9A227] text-sm" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm md:text-base text-[#2D3436]">Une certification Praticien CALL® &amp; L'autorisation d'accompagnement individuel</p>
</div>
<div className="flex items-start gap-4 group">
<div className="w-6 h-6 rounded-md border border-[#C9A227]/40 flex items-center justify-center bg-white group-hover:bg-[#C9A227]/10 transition-colors shrink-0 mt-0.5">
<iconify-icon className="text-[#C9A227] text-sm" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm md:text-base text-[#2D3436]">3 séances individuelles avec Sophie Delrot (accompagnement personnalisé)</p>
</div>
<div className="flex items-start gap-4 group">
<div className="w-6 h-6 rounded-md border border-[#C9A227]/40 flex items-center justify-center bg-white group-hover:bg-[#C9A227]/10 transition-colors shrink-0 mt-0.5">
<iconify-icon className="text-[#C9A227] text-sm" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<p className="text-sm md:text-base text-[#2D3436]">Un binôme de pratique pour affiner votre posture &amp; L'accès au réseau</p>
</div>
</div>
<div className="mt-12 text-center reveal">
<a className="inline-flex items-center gap-2 hover:bg-[#C9A227]/5 md:text-base transition-colors text-sm font-normal text-[#C9A227] border-[#C9A227] border rounded-xl pt-3 pr-8 pb-3 pl-8" href="https://www.helloasso.com/associations/association-incandescence/evenements/praticien-du-protocole-call">
                    OUI, JE REJOINS LA FORMATION
                </a>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#F7F2EC]" id="programme">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="font-['Playfair_Display'] text-3xl md:text-5xl text-[#1A1A1A] tracking-tight font-normal mb-4">
                    Le Programme Complet
                </h2>
<p className="text-sm md:text-base text-[#2D3436]/60 font-light">6 jours en ligne + 1 week-end en présentiel à Lartigue<br/>Formatrice : Sophie Delrot</p>
</div>
<div className="relative border-l border-[#C9A227]/30 ml-4 md:ml-8 space-y-12 pb-8">

<div className="relative pl-10 md:pl-12 reveal">
<div className="absolute -left-3.5 top-1 w-7 h-7 rounded-full bg-[#F7F2EC] border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
<iconify-icon className="text-xs" icon="solar:key-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.02]">
<div className="flex flex-wrap items-center justify-between gap-4 mb-2">
<h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#1A1A1A] font-normal tracking-tight">Jour 1 — Fondations</h3>
<span className="text-[10px] font-medium text-[#6B8F71] bg-[#6B8F71]/10 px-2 py-1 rounded-md uppercase tracking-wider">En ligne</span>
</div>
<p className="uppercase text-xs font-medium text-[#C9A227] tracking-widest mb-4">12 septembre 2026</p>
<ul className="text-sm text-[#2D3436]/80 space-y-2">
<li>• Les 7 phénomènes internes du protocole</li>
<li>• Les 21 étapes en détail</li>
<li>• Les fondations pour accompagner avec justesse</li>
</ul>
</div>
</div>

<div className="relative pl-10 md:pl-12 reveal">
<div className="absolute -left-3.5 top-1 w-7 h-7 rounded-full bg-[#F7F2EC] border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
<iconify-icon className="text-xs" icon="solar:tuning-square-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.02]">
<div className="flex flex-wrap items-center justify-between gap-4 mb-2">
<h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#1A1A1A] font-normal tracking-tight">Jour 2 — Subtilités</h3>
<span className="text-[10px] font-medium text-[#6B8F71] bg-[#6B8F71]/10 px-2 py-1 rounded-md uppercase tracking-wider">En ligne</span>
</div>
<p className="uppercase text-xs font-medium text-[#C9A227] tracking-widest mb-4">26 septembre 2026</p>
<ul className="text-sm text-[#2D3436]/80 space-y-2">
<li className="">• Les nuances et subtilités du protocole</li>
<li className="">• Comment adapter le protocole à chaque personne</li>
<li className="">• Les pièges à éviter</li>
</ul>
</div>
</div>

<div className="relative pl-10 md:pl-12 reveal">
<div className="absolute -left-3.5 top-1 w-7 h-7 rounded-full bg-[#F7F2EC] border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
<iconify-icon className="text-xs" icon="solar:shield-user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.02]">
<div className="flex flex-wrap items-center justify-between gap-4 mb-2">
<h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#1A1A1A] font-normal tracking-tight">Jour 3 — Posture</h3>
<span className="text-[10px] font-medium text-[#6B8F71] bg-[#6B8F71]/10 px-2 py-1 rounded-md uppercase tracking-wider">En ligne</span>
</div>
<p className="uppercase text-xs font-medium text-[#C9A227] tracking-widest mb-4">10 octobre 2026</p>
<ul className="text-sm text-[#2D3436]/80 space-y-2">
<li>• La posture juste du praticien</li>
<li>• Comment tenir un espace sacré pour l'autre</li>
<li>• L'éthique de l'accompagnement</li>
</ul>
</div>
</div>

<div className="relative pl-10 md:pl-12 reveal">
<div className="absolute -left-3.5 top-1 w-7 h-7 rounded-full bg-[#F7F2EC] border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
<iconify-icon className="text-xs" icon="solar:shield-user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.02]">
<div className="flex flex-wrap items-center justify-between gap-4 mb-2">
<h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#1A1A1A] font-normal tracking-tight">Jour 4 — Affinement</h3>
<span className="text-[10px] font-medium text-[#6B8F71] bg-[#6B8F71]/10 px-2 py-1 rounded-md uppercase tracking-wider">En ligne</span>
</div>
<p className="uppercase text-xs font-medium text-[#C9A227] tracking-widest mb-4">24 octobre 2026</p>
<ul className="text-sm text-[#2D3436]/80 space-y-2">
<li>• Les angles morts de l'accompagnant</li>
<li className="">• Les subtilités d'un cadre sécuritaire et sécurisant</li>
<li className="">• La posture maitrisée</li>
</ul>
</div>
</div>

<div className="relative pl-10 md:pl-12 reveal">
<div className="absolute -left-3.5 top-1 w-7 h-7 rounded-full bg-[#F7F2EC] border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
<iconify-icon className="text-xs" icon="solar:shield-user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.02]">
<div className="flex flex-wrap items-center justify-between gap-4 mb-2">
<h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#1A1A1A] font-normal tracking-tight">Jour 5 — Dépouillement</h3>
<span className="text-[10px] font-medium text-[#6B8F71] bg-[#6B8F71]/10 px-2 py-1 rounded-md uppercase tracking-wider">En ligne</span>
</div>
<p className="uppercase text-xs font-medium text-[#C9A227] tracking-widest mb-4">7 novembre 2026</p>
<ul className="text-sm text-[#2D3436]/80 space-y-2">
<li className="">• De moi à Soi</li>
<li className="">• Devenir une offrande à l'autre sans se sacrifier</li>
<li className="">• L'ultime protocole CALL®</li>
</ul>
</div>
</div>

<div className="relative pl-10 md:pl-12 reveal">
<div className="absolute -left-3.5 top-1 w-7 h-7 rounded-full bg-[#F7F2EC] border border-[#C9A227] flex items-center justify-center text-[#C9A227]">
<iconify-icon className="text-xs" icon="solar:shield-user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.02]">
<div className="flex flex-wrap items-center justify-between gap-4 mb-2">
<h3 className="font-['Playfair_Display'] text-xl md:text-2xl text-[#1A1A1A] font-normal tracking-tight">Jour 6 — Influence</h3>
<span className="text-[10px] font-medium text-[#6B8F71] bg-[#6B8F71]/10 px-2 py-1 rounded-md uppercase tracking-wider">En ligne</span>
</div>
<p className="uppercase text-xs font-medium text-[#C9A227] tracking-widest mb-4">21 novembre 2026</p>
<ul className="text-sm text-[#2D3436]/80 space-y-2">
<li>• Libérer son rayonnement pour être visible</li>
<li className="">• Affirmer sa présence par la proposition de soi non-négociable</li>
<li className="">• Choisir sa place</li>
</ul>
</div>
</div>

<div className="relative pl-10 md:pl-12 reveal mt-16">
<div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-[#C96A4A] flex items-center justify-center text-white shadow-[0_2px_8px_rgba(201,106,74,0.4)] ring-4 ring-[#F7F2EC]">
<iconify-icon className="text-sm" icon="solar:diploma-verified-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#C96A4A]/20">
<div className="flex flex-wrap items-center justify-between gap-4 mb-2">
<h3 className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1A1A1A] font-normal tracking-tight">Week-end Certification</h3>
<span className="text-[10px] font-medium text-[#C9A227] bg-[#C9A227]/10 px-2 py-1 rounded-md uppercase tracking-wider">Présentiel</span>
</div>
<p className="text-xs text-[#C96A4A] mb-6 tracking-widest uppercase font-medium">5-6 décembre 2026</p>
<ul className="text-sm text-[#2D3436]/80 space-y-3 mb-6">
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A227] text-lg shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Initiation à l'Introspection Dynamique</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A227] text-lg shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Cercle du Choix : expérience collective finale</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#C9A227] text-lg shrink-0" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon> Certification : Remise de l'attestation officielle</li>
</ul>
<div className="text-xs bg-[#FDFBF7] p-4 rounded-xl text-[#2D3436]/60 border border-black/[0.02]">Votre certification officielle et l'autorisation d'accompagner en individuel avec le protocole CALL®.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#FDFBF7]">
<div className="max-w-3xl mx-auto text-center">
<span className="text-xs font-medium tracking-widest text-[#C9A227] uppercase mb-8 block reveal">L'Ambiance de Cette Formation</span>
<div className="flex flex-wrap justify-center gap-6 md:gap-12 font-['Playfair_Display'] text-2xl md:text-4xl text-[#1A1A1A] font-normal tracking-tight mb-10 reveal">
<span className="flex items-center gap-2"> Sécurisante</span>
<span className="flex items-center gap-2"> Profonde</span>
<span className="flex items-center gap-2"> Humaine</span>
</div>
<p className="text-sm md:text-base text-[#2D3436]/80 leading-relaxed max-w-xl mx-auto reveal">
                Une formation exigeante qui vous transformera autant qu'elle vous formera.<br/>
                Un espace sacré pour devenir un accompagnant juste, puissant et aligné.
            </p>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#F7F2EC]">
<div className="max-w-5xl mx-auto">
<h2 className="font-['Playfair_Display'] text-3xl md:text-5xl text-[#1A1A1A] text-center mb-16 tracking-tight font-normal reveal">
                Votre Formatrice &amp; L'Inventeur
            </h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white rounded-3xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.04] reveal flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/52d77306-a897-4fb9-912d-d082313eb7f6_320w.png)] bg-cover bg-center border-2 border-white shadow-sm mb-6 ring-1 ring-[#C96A4A]/20"></div>
<h3 className="font-['Playfair_Display'] text-2xl text-[#1A1A1A] font-normal tracking-tight mb-1">Sophie Delrot</h3>
<p className="text-[10px] text-[#C9A227] uppercase tracking-widest mb-4 font-medium">Directrice ICC, Formatrice</p>
<p className="text-sm text-[#2D3436]/80 leading-relaxed">Hypersensible, ancienne contrôleuse aérienne, elle guide aujourd'hui avec justesse, clarté et douceur. Magifestatrice, elle relie le visible et l'invisible, créant un espace sacré pour s'écouter et passer un palier.</p>
</div>
<div className="bg-white rounded-3xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.04] reveal flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6df3d010-7f54-4989-98b3-7a2e172d16a0_320w.png)] bg-cover bg-center border-2 border-white shadow-sm mb-6 ring-1 ring-[#6B8F71]/20"></div>
<h3 className="font-['Playfair_Display'] text-2xl text-[#1A1A1A] font-normal tracking-tight mb-1">Jean-Luc De Wachter</h3>
<p className="text-[10px] text-[#C9A227] uppercase tracking-widest mb-4 font-medium">Auteur, penseur et Inventeur</p>
<p className="text-sm text-[#2D3436]/80 leading-relaxed">Auteur, penseur et créateur visionnaire. En 2015, au bord de la faillite, il pose un choix si puissant qu'il devient non-négociable… et sa vie bascule. Il transmet aujourd'hui l'ingénierie du choix non-négociable.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#FDFBF7]">
<div className="max-w-4xl mx-auto">
<h2 className="text-3xl md:text-5xl font-normal text-[#1A1A1A] tracking-tight font-['Playfair_Display'] text-center mb-16 reveal">Animateur vs Praticien</h2>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white rounded-3xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-black/[0.04] reveal flex flex-col h-full opacity-70 hover:opacity-100 transition-opacity">
<div className="flex items-center gap-3 mb-8 text-[#6B8F71]">
<iconify-icon className="text-2xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-normal text-[#1A1A1A] tracking-tight font-['Playfair_Display']">Animateur Cercle</h3>
</div>
<div className="space-y-4 text-sm mb-8 flex-grow">
<div className="flex justify-between items-end border-b border-[#F7F2EC] pb-2">
<span className="text-[#2D3436]/50 text-xs uppercase font-medium tracking-wider">Public</span>
<span className="text-[#1A1A1A]">Groupes / Collectifs</span>
</div>
<div className="flex justify-between items-end border-b border-[#F7F2EC] pb-2">
<span className="text-[#2D3436]/50 text-xs uppercase font-medium tracking-wider">Format</span>
<span className="text-[#1A1A1A]">Cercles (1h-1h30)</span>
</div>
<div className="flex justify-between items-end border-b border-[#F7F2EC] pb-2">
<span className="text-[#2D3436]/50 text-xs uppercase font-medium tracking-wider">Objectif</span>
<span className="text-[#1A1A1A] text-right">Choix alignés en groupe</span>
</div>
</div>
<div className="text-2xl font-medium text-[#1A1A1A] tracking-tight font-['Playfair_Display']">2200€</div>
</div>

<div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(201,106,74,0.08)] border border-[#C96A4A]/30 reveal relative flex flex-col h-full">
<span className="bg-[#C96A4A] text-white text-[10px] font-medium px-2 py-1 rounded-md absolute top-6 right-6 uppercase tracking-wider">La Formation</span>
<div className="flex items-center gap-3 mb-8 text-[#C96A4A]">
<iconify-icon className="text-2xl" icon="solar:compass-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-normal text-[#1A1A1A] tracking-tight font-['Playfair_Display']">Praticien CALL®</h3>
</div>
<div className="space-y-4 text-sm mb-8 flex-grow">
<div className="flex justify-between items-end border-b border-[#F7F2EC] pb-2">
<span className="text-[#2D3436]/50 text-xs uppercase font-medium tracking-wider">Public</span>
<span className="text-[#1A1A1A]">Individuel</span>
</div>
<div className="flex justify-between items-end border-b border-[#F7F2EC] pb-2">
<span className="text-[#2D3436]/50 text-xs uppercase font-medium tracking-wider">Format</span>
<span className="text-[#1A1A1A]">Séances en profondeur</span>
</div>
<div className="flex justify-between items-end border-b border-[#F7F2EC] pb-2">
<span className="text-[#2D3436]/50 text-xs uppercase font-medium tracking-wider">Objectif</span>
<span className="text-[#1A1A1A] text-right">Transformer des trajectoires</span>
</div>
</div>
<div className="text-2xl font-medium text-[#1A1A1A] tracking-tight font-['Playfair_Display']">3300€</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 bg-[#F7F2EC]">
<div className="max-w-3xl mx-auto text-center reveal">
<iconify-icon className="text-3xl text-[#C9A227] mb-6 opacity-40" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<blockquote className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1A1A1A] font-normal tracking-tight leading-relaxed italic mb-8">
                "Ce protocole, je l'ai enseigné à des centaines de personnes et le niveau de responsabilité et donc de pouvoir sur la vie qu'elles ont développé en prouve l'efficacité."
            </blockquote>
<cite className="not-italic block">
<span className="block font-medium text-sm text-[#1A1A1A]">Jean-Luc De Wachter</span>
<span className="text-[10px] text-[#2D3436]/50 uppercase tracking-widest mt-1 block font-medium">Inventeur du Protocole CALL®</span>
</cite>
</div>
</section>

<section className="py-32 md:py-40 px-6 bg-gradient-to-b from-[#FDFBF7] to-[#F7F2EC] relative overflow-hidden">
<div className="max-w-2xl mx-auto text-center relative z-10 reveal space-y-10">
<h2 className="text-4xl md:text-6xl font-normal text-[#1A1A1A] tracking-tight font-['Playfair_Display'] leading-tight">Devenez Praticien CALL®</h2>
<p className="text-sm md:text-base text-[#2D3436]/80 font-light">
                Le monde a besoin d’accompagnants capables d’aider à faire des choix profonds et à franchir des étapes décisives.
            </p>
<p className="font-['Playfair_Display'] text-xl md:text-2xl tracking-tight text-[#1A1A1A] italic">
                "Ce qui est au point de départ sera à l'arrivée."
            </p>
<div className="pt-6 flex flex-col items-center gap-6">
<a className="hover:bg-[#B85C3C] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(201,106,74,0.4)] hover:-translate-y-0.5 flex items-center gap-2 animate-[heartbeat_3s_infinite] text-sm font-normal text-white bg-[#C96A4A] rounded-xl pt-4 pr-8 pb-4 pl-8 shadow-[0_4px_14px_rgba(201,106,74,0.3)]" href="https://www.helloasso.com/associations/association-incandescence/evenements/praticien-du-protocole-call">
<iconify-icon className="text-lg" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
                    OUI, JE REJOINS LA FORMATION
                </a>
<div className="text-[10px] md:text-xs text-[#2D3436]/50 uppercase tracking-widest flex flex-wrap justify-center gap-6 font-medium">
<span className="">Certification incluse</span>
</div>
</div>
<p className="md:text-3xl text-2xl text-[#C9A227] tracking-tight pt-12">✨ Ainsi soit-il. ✨</p>
</div>
</section>

<footer className="bg-[#1A1A1A] py-16 px-6 text-center">
<div className="max-w-3xl mx-auto space-y-8">
<a className="font-['Playfair_Display'] text-2xl font-medium tracking-tighter text-[#FDFBF7] opacity-80 hover:opacity-100 transition-opacity" href="#">ICC</a>
<p className="text-xs text-[#FDFBF7]/40 font-light tracking-wide">© 2026 · Institut Choix et Conscience (ICC) · Tous Droits Réservés</p>
<div className="flex justify-center gap-6 text-[10px] font-medium tracking-wider text-[#FDFBF7]/40 uppercase">
<a className="hover:text-[#C9A227] transition-colors" href="https://institut-choix-et-conscience.org/mentions-legales">Mentions Légales</a>
<a className="hover:text-[#C9A227] transition-colors" href="https://institut-choix-et-conscience.org/cgv">CGV</a>
</div>
</div>
</footer>


    </>
  );
}
