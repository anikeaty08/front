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
      

<nav className="fixed w-full top-0 z-50 bg-[#FAF9F6]/90 backdrop-blur-md shadow-sm border-b border-[#16202B]/5">
<div className="container mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 bg-[#B88645] rounded-full opacity-20 group-hover:opacity-30 transition-opacity"></div>
<span className="tracking-tighter font-medium text-lg text-[#16202B]">JZ</span>
</div>
<div className="flex flex-col">
<span className="text-[#16202B] tracking-tight uppercase text-sm font-medium playfair">Jézéquel</span>
<span className="text-xs uppercase tracking-widest text-[#B88645] opacity-80" style={{fontSize: '0.65rem'}}>Stratégie Fiscale</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-[#4A5568] hover:text-[#B88645] transition-colors uppercase tracking-wider" href="#approche">L'Approche</a>
<a className="text-xs font-medium text-[#4A5568] hover:text-[#B88645] transition-colors uppercase tracking-wider" href="#expertises">Expertises</a>
<a className="text-xs font-medium text-[#4A5568] hover:text-[#B88645] transition-colors uppercase tracking-wider" href="#cabinet">Le Cabinet</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center bg-[#16202B] text-white px-5 py-2.5 rounded-sm text-xs font-medium hover:bg-[#B88645] transition-all shadow-sm" href="#contact">
                    Prendre Rendez-vous
                </a>
<button className="md:hidden text-[#16202B] text-2xl flex items-center">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#16202B] overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(184,134,69,0.12),_transparent_60%)]"></div>
<div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#B88645]/30 to-transparent"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-4xl">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B88645]/40 text-[#B88645] text-xs uppercase tracking-widest mb-8 font-medium bg-[#B88645]/5">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon> 
                    CGPI Indépendant
                </div>

<h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight playfair font-normal leading-tight mb-8">
                    La fiscalité comme <span className="italic text-[#B88645] pr-1">point de départ</span><br className="hidden lg:block"/> de votre stratégie patrimoniale.
                </h1>

<p className="text-base md:text-lg text-gray-300 font-light mb-12 max-w-2xl leading-relaxed">
                    Anticiper, structurer, optimiser — chaque année, avant qu’il ne soit trop tard. Un accompagnement de haut niveau pour organiser votre prospérité dans la durée.
                </p>

<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#B88645] text-white px-8 py-3.5 rounded-sm text-sm font-medium hover:bg-[#a0743a] transition-all text-center flex items-center justify-center gap-2 shadow-lg shadow-[#B88645]/20" href="#expertises">
                        Simulation Financière
                        <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="border border-gray-500 text-white px-8 py-3.5 rounded-sm text-sm font-medium hover:border-white hover:bg-white/5 transition-all text-center" href="#approche">
                        Découvrir la méthode
                    </a>
</div>
</div>
</div>
</header>

<section className="bg-[#B88645] py-14 px-6 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_#fff_1px,_transparent_1px)]" style={{backgroundSize: '20px 20px'}}></div>
<div className="container mx-auto text-center relative z-10">
<h2 className="text-xl md:text-3xl text-white tracking-tight playfair font-normal italic max-w-4xl mx-auto leading-relaxed">
                "Vous n’êtes pas là pour appliquer des rustines fiscales. Vous êtes là pour architecturer l'avenir."
            </h2>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#FAF9F6] relative" id="approche">
<div className="container mx-auto px-6">
<div className="text-center mb-16 md:mb-24">
<span className="text-xs uppercase tracking-widest text-[#B88645] font-medium block mb-3">Notre Ingénierie</span>
<h2 className="text-3xl md:text-4xl text-[#16202B] tracking-tight playfair font-normal mb-6">La Méthode Triptyque</h2>
<div className="w-12 h-0.5 bg-[#B88645] mx-auto opacity-60"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-10 border-t-2 border-[#B88645]/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FAF9F6] text-[#B88645] rounded-full flex items-center justify-center mb-8 text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl text-[#16202B] playfair font-normal tracking-tight mb-4">Attirer</h3>
<p className="text-sm text-[#4A5568] font-light mb-8 leading-relaxed">
                        Création de flux entrants et détection d'opportunités. Nous optimisons votre charge fiscale pour maximiser votre capacité d'investissement.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-[#4A5568] font-medium">
<iconify-icon className="text-[#B88645] text-base" icon="solar:check-circle-linear"></iconify-icon> Optimisation Fiscale Annuelle
                        </li>
<li className="flex items-center gap-3 text-xs text-[#4A5568] font-medium">
<iconify-icon className="text-[#B88645] text-base" icon="solar:check-circle-linear"></iconify-icon> Réduction IR / IFI / IS
                        </li>
<li className="flex items-center gap-3 text-xs text-[#4A5568] font-medium">
<iconify-icon className="text-[#B88645] text-base" icon="solar:check-circle-linear"></iconify-icon> Bilan Patrimonial Initial
                        </li>
</ul>
</div>

<div className="bg-[#16202B] p-10 border-t-2 border-[#B88645] shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-5">
<iconify-icon className="text-7xl text-white" icon="solar:layers-linear"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-12 h-12 bg-[#2A3644] text-[#B88645] rounded-full flex items-center justify-center mb-8 text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:layers-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl text-white playfair font-normal tracking-tight mb-4">Accumuler</h3>
<p className="text-sm text-gray-300 font-light mb-8 leading-relaxed">
                            Structuration du capital. Sélection d'enveloppes fiscales sur-mesure et d'actifs résilients pour une croissance pérenne.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-gray-300 font-medium">
<iconify-icon className="text-[#B88645] text-base" icon="solar:check-circle-linear"></iconify-icon> Ingénierie Financière
                            </li>
<li className="flex items-center gap-3 text-xs text-gray-300 font-medium">
<iconify-icon className="text-[#B88645] text-base" icon="solar:check-circle-linear"></iconify-icon> Allocation d'Actifs Sur-Mesure
                            </li>
<li className="flex items-center gap-3 text-xs text-gray-300 font-medium">
<iconify-icon className="text-[#B88645] text-base" icon="solar:check-circle-linear"></iconify-icon> Investissements Immobiliers
                            </li>
</ul>
</div>
</div>

<div className="bg-white p-10 border-t-2 border-[#B88645]/60 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
<div className="w-12 h-12 bg-[#FAF9F6] text-[#B88645] rounded-full flex items-center justify-center mb-8 text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl text-[#16202B] playfair font-normal tracking-tight mb-4">Protéger</h3>
<p className="text-sm text-[#4A5568] font-light mb-8 leading-relaxed">
                        Pérennité et sécurisation. Nous mettons en place des garde-fous juridiques pour isoler et transmettre vos acquis.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-[#4A5568] font-medium">
<iconify-icon className="text-[#B88645] text-base" icon="solar:check-circle-linear"></iconify-icon> Anticipation Annuelle
                        </li>
<li className="flex items-center gap-3 text-xs text-[#4A5568] font-medium">
<iconify-icon className="text-[#B88645] text-base" icon="solar:check-circle-linear"></iconify-icon> Stratégie de Transmission
                        </li>
<li className="flex items-center gap-3 text-xs text-[#4A5568] font-medium">
<iconify-icon className="text-[#B88645] text-base" icon="solar:check-circle-linear"></iconify-icon> Protection du Conjoint
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-white overflow-hidden border-y border-gray-100 relative" id="cabinet">
<div className="absolute inset-y-0 left-0 w-1/2 bg-[#FAF9F6]/50 hidden lg:block"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="w-full lg:w-1/2 relative">
<div className="absolute inset-0 border border-[#B88645]/80 translate-x-4 translate-y-4 rounded-sm z-0"></div>
<div className="relative z-10 overflow-hidden rounded-sm bg-[#16202B]">
<img alt="Consultant en gestion de patrimoine" className="w-full h-[500px] object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>

<div className="w-full lg:w-1/2">
<span className="text-xs uppercase tracking-widest text-[#B88645] font-medium block mb-3">Notre ADN</span>
<h2 className="text-3xl md:text-4xl text-[#16202B] tracking-tight playfair font-normal mb-8 leading-tight">
                        Expertise technique &amp; <br/> Accompagnement continu.
                    </h2>
<div className="space-y-10 mb-10">
<div className="flex gap-5">
<div className="shrink-0 w-10 h-10 rounded-full bg-[#FAF9F6] border border-[#B88645]/20 flex items-center justify-center text-[#B88645] text-xl">
<iconify-icon icon="solar:chart-line-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base text-[#16202B] font-medium tracking-tight mb-2">L'Expert (La Technique)</h4>
<p className="text-sm text-[#4A5568] font-light leading-relaxed">
                                    Nous maîtrisons les montages juridiques et fiscaux les plus sophistiqués pour structurer vos actifs avec la précision d'un orfèvre.
                                </p>
</div>
</div>
<div className="flex gap-5">
<div className="shrink-0 w-10 h-10 rounded-full bg-[#FAF9F6] border border-[#B88645]/20 flex items-center justify-center text-[#B88645] text-xl">
<iconify-icon icon="solar:compass-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-base text-[#16202B] font-medium tracking-tight mb-2">L'Accompagnant (La Durée)</h4>
<p className="text-sm text-[#4A5568] font-light leading-relaxed">
                                    Un patrimoine ne se fige pas, il se pilote. Nous assurons un suivi proactif pour adapter votre stratégie aux évolutions de votre vie et de la loi.
                                </p>
</div>
</div>
</div>
<a className="inline-flex items-center gap-2 text-sm text-[#16202B] font-medium border-b border-[#B88645] pb-1 hover:text-[#B88645] transition-colors group" href="#">
                        Découvrir le cabinet 
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 bg-[#16202B] text-white overflow-hidden relative" id="expertises">
<div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#B88645]/5 to-transparent"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

<div className="w-full lg:w-5/12">
<span className="text-xs uppercase tracking-widest text-[#B88645] font-medium block mb-3">Pilotage Global</span>
<h2 className="text-3xl md:text-4xl text-white tracking-tight playfair font-normal mb-6 leading-tight">
                        Ne supposez plus.<br/> Simulez.
                    </h2>
<p className="text-sm text-gray-400 font-light mb-10 leading-relaxed">
                        La clarté naît de la précision. Nous utilisons des outils de simulation financière avancés pour vous offrir une vision claire de votre trajectoire patrimoniale. Prenez des décisions éclairées basées sur des données concrètes.
                    </p>
<ul className="space-y-4 mb-10 border-l border-gray-700 pl-4">
<li className="text-sm text-gray-300 font-light flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#B88645]"></span> Projections à 10, 15 et 20 ans
                        </li>
<li className="text-sm text-gray-300 font-light flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#B88645]"></span> Impact réel de la fiscalité
                        </li>
<li className="text-sm text-gray-300 font-light flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-[#B88645]"></span> Comparaison de scénarios
                        </li>
</ul>
</div>

<div className="w-full lg:w-7/12">
<div className="bg-[#0B1015] border border-gray-800 rounded-xl p-8 shadow-2xl shadow-black/50 relative">

<div className="flex justify-between items-center mb-8 border-b border-gray-800 pb-5">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-[#B88645] animate-pulse"></div>
<span className="text-xs text-gray-400 uppercase tracking-widest font-medium">Console de Projection</span>
</div>
<iconify-icon className="text-[#B88645] text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>

<div className="mb-10">
<span className="text-xs text-gray-500 block mb-2 uppercase tracking-wider">Capital Projeté Net (2035)</span>
<div className="flex items-end gap-4">
<span className="text-5xl tracking-tight playfair font-normal text-white">1 245 000 €</span>
<span className="flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2.5 py-1 rounded-sm mb-1 border border-emerald-400/20">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon> +12.4%
                                </span>
</div>
</div>

<div className="relative h-48 flex items-end gap-3 border-b border-gray-800 pb-2">

<div className="absolute inset-0 flex flex-col justify-between border-t border-gray-800/50 pointer-events-none">
<div className="w-full border-b border-gray-800/50 h-1/4"></div>
<div className="w-full border-b border-gray-800/50 h-1/4"></div>
<div className="w-full border-b border-gray-800/50 h-1/4"></div>
<div className="w-full h-1/4"></div>
</div>

<div className="w-1/6 bg-gradient-to-t from-gray-800 to-gray-700 hover:from-[#B88645]/80 hover:to-[#B88645] transition-all rounded-t-sm h-[20%] relative z-10 cursor-pointer"></div>
<div className="w-1/6 bg-gradient-to-t from-gray-800 to-gray-700 hover:from-[#B88645]/80 hover:to-[#B88645] transition-all rounded-t-sm h-[35%] relative z-10 cursor-pointer"></div>
<div className="w-1/6 bg-gradient-to-t from-gray-800 to-gray-700 hover:from-[#B88645]/80 hover:to-[#B88645] transition-all rounded-t-sm h-[50%] relative z-10 cursor-pointer"></div>
<div className="w-1/6 bg-gradient-to-t from-gray-800 to-gray-700 hover:from-[#B88645]/80 hover:to-[#B88645] transition-all rounded-t-sm h-[65%] relative z-10 cursor-pointer"></div>
<div className="w-1/6 bg-gradient-to-t from-[#B88645] to-[#d49f57] rounded-t-sm h-[80%] relative z-10 group cursor-pointer shadow-[0_0_15px_rgba(184,134,69,0.3)]">
<div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-[#16202B] text-xs py-1.5 px-3 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium shadow-lg pointer-events-none">
                                    Objectif Atteint
                                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
</div>
</div>
<div className="w-1/6 bg-gradient-to-t from-gray-800 to-gray-700 hover:from-[#B88645]/80 hover:to-[#B88645] transition-all rounded-t-sm h-[95%] relative z-10 cursor-pointer"></div>
</div>

<div className="flex justify-between mt-3 text-xs text-gray-600 font-medium px-2">
<span>Aujourd'hui</span>
<span>Année N+5</span>
<span>2035</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAF9F6]">
<div className="container mx-auto px-6 text-center max-w-3xl">
<iconify-icon className="text-4xl text-[#B88645] mb-6" icon="solar:buildings-linear"></iconify-icon>
<h2 className="text-3xl md:text-4xl text-[#16202B] tracking-tight playfair font-normal mb-8 leading-tight">
                Prêt à architecturer <br/> votre patrimoine ?
            </h2>
<p className="text-sm text-[#4A5568] font-light mb-10 max-w-xl mx-auto">
                La première étape est un échange confidentiel pour dresser un état des lieux de vos objectifs et de votre structure actuelle.
            </p>
<a className="inline-flex items-center justify-center bg-[#16202B] text-white px-8 py-4 rounded-sm text-sm font-medium hover:bg-[#B88645] transition-all shadow-lg shadow-[#16202B]/10 group" href="#contact">
                Réserver un audit patrimonial
                <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-[#0B1015] text-gray-400 py-16 border-t border-gray-800/50">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6 opacity-80 hover:opacity-100 transition-opacity">
<div className="relative w-6 h-6 flex items-center justify-center">
<div className="absolute inset-0 bg-[#B88645] rounded-full opacity-30"></div>
<span className="tracking-tighter font-medium text-sm text-white">JZ</span>
</div>
<span className="text-white tracking-tight uppercase text-xs font-medium playfair">Jézéquel</span>
</div>
<p className="text-xs font-light leading-relaxed mb-6 text-gray-500">
                        Cabinet de conseil en gestion de patrimoine indépendant dédié à l'optimisation fiscale et stratégique des dirigeants et professions libérales.
                    </p>
</div>

<div>
<h4 className="text-white text-sm font-medium mb-6 playfair tracking-tight">Expertises</h4>
<ul className="space-y-3">
<li><a className="text-xs hover:text-[#B88645] transition-colors" href="#">Ingénierie Patrimoniale</a></li>
<li><a className="text-xs hover:text-[#B88645] transition-colors" href="#">Optimisation Fiscale</a></li>
<li><a className="text-xs hover:text-[#B88645] transition-colors" href="#">Stratégie de Transmission</a></li>
<li><a className="text-xs hover:text-[#B88645] transition-colors" href="#">Investissement Immobilier</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-medium mb-6 playfair tracking-tight">Le Cabinet</h4>
<ul className="space-y-3">
<li><a className="text-xs hover:text-[#B88645] transition-colors" href="#">Notre Méthode</a></li>
<li><a className="text-xs hover:text-[#B88645] transition-colors" href="#">Honoraires &amp; Transparence</a></li>
<li><a className="text-xs hover:text-[#B88645] transition-colors" href="#">Espace Client sécurisé</a></li>
<li><a className="text-xs hover:text-[#B88645] transition-colors" href="#">Mentions Légales</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-sm font-medium mb-6 playfair tracking-tight">Contact</h4>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-xs">
<iconify-icon className="text-[#B88645] text-base shrink-0 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span>12 Avenue Montaigne<br/>75008 Paris, France</span>
</li>
<li className="flex items-center gap-3 text-xs">
<iconify-icon className="text-[#B88645] text-base shrink-0" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:contact@jezequel-patrimoine.fr">contact@jezequel-patrimoine.fr</a>
</li>
<li className="flex items-center gap-3 text-xs">
<iconify-icon className="text-[#B88645] text-base shrink-0" icon="solar:phone-linear"></iconify-icon>
<span>+33 (0)1 00 00 00 00</span>
</li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-600 font-light">
                    © 2024 JÉZÉQUEL Stratégie Fiscale &amp; Patrimoniale. Tous droits réservés.
                </p>
<div className="flex items-center gap-4 text-xs font-light text-gray-600">
<a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
<span>|</span>
<a className="hover:text-white transition-colors" href="#">CGU</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
