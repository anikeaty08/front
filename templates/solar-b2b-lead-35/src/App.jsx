import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
colors: {
solar: {
50: '#fefaf3',
100: '#fdf3e0',
300: '#f0c45c',
400: '#e8a32e',
500: '#d4860a',
800: '#4a2c14',
900: '#2d1b0e',
950: '#1a1008',
},
text: {
DEFAULT: '#1c1917', // stone-900
muted: '#78716c',   // stone-500
},
cta: {
DEFAULT: '#ea580c',
hover: '#c2410c',
}
},
animation: {
'pulse-slow': 'pulse-slow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
'pulse-slow': {
'0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
'50%': { opacity: '0.6', transform: 'scale(1.1)' },
},
'float': {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/70 border-b border-solar-100/50">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-solar-400 to-solar-500 opacity-90 group-hover:scale-105 transition-transform duration-500 shadow-lg shadow-solar-400/30"></div>
<span className="font-serif text-xl font-medium tracking-tight text-solar-950">Primavera Solar</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
<a className="hover:text-solar-500 transition-colors" href="#methode">Méthode</a>
<a className="hover:text-solar-500 transition-colors" href="#resultats">Résultats</a>
<a className="hover:text-solar-500 transition-colors" href="#exclusivite">Exclusivité</a>

<div className="relative group cursor-pointer flex items-center gap-1 hover:text-solar-950">
<span>FR</span>
<iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:block bg-cta hover:bg-cta-hover text-white text-sm font-medium py-2.5 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cta/20 hover:shadow-cta/40 hover:-translate-y-0.5">
                    Campagne offerte →
                </button>

<button className="md:hidden text-solar-950 p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] rounded-full sun-gradient animate-pulse-slow pointer-events-none z-0"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-solar-300/20 pointer-events-none z-0"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in-up">
<h1 className="font-serif text-5xl md:text-7xl leading-[1.1] font-medium text-solar-950 tracking-tight mb-8">
                Vos prochains clients dans le solaire, <span className="italic text-solar-500">on s'en occupe.</span>
</h1>
<p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto mb-10">
                Campagnes de prospection ultra-ciblées pour installateurs de panneaux solaires B2B. Industrie, agriculture, collectivités — on trouve les décideurs et on vous livre des rendez-vous qualifiés.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<button className="w-full sm:w-auto bg-cta hover:bg-cta-hover text-white text-base font-medium py-4 px-8 rounded-full transition-all duration-300 shadow-xl shadow-cta/25 hover:shadow-cta/40 hover:-translate-y-1">
                    Lancez votre première campagne — c'est offert →
                </button>
<a className="text-text-muted hover:text-solar-500 font-medium transition-colors flex items-center gap-2" href="#methode">
                    Découvrir la méthode <iconify-icon icon="solar:arrow-down-linear"></iconify-icon>
</a>
</div>
<div className="flex items-center justify-center gap-2 text-sm text-text-muted/80 tracking-wide uppercase">
<iconify-icon className="text-solar-500" icon="solar:shield-check-linear"></iconify-icon>
<span>30+ installateurs solaires en France et en Europe</span>
</div>
</div>
</section>

<section className="py-20 bg-solar-100 border-y border-solar-300/20">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-solar-300/30">
<div className="py-4 md:py-0">
<div className="font-serif text-5xl md:text-6xl text-solar-500 mb-2">1,5M€</div>
<div className="text-xs uppercase tracking-widest text-text-muted font-semibold">contrats signés</div>
</div>
<div className="py-4 md:py-0">
<div className="font-serif text-5xl md:text-6xl text-solar-500 mb-2">50</div>
<div className="text-xs uppercase tracking-widest text-text-muted font-semibold">RDV qualifiés / mois</div>
</div>
<div className="py-4 md:py-0">
<div className="font-serif text-5xl md:text-6xl text-solar-500 mb-2">30+</div>
<div className="text-xs uppercase tracking-widest text-text-muted font-semibold">campagnes accompagnées</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="methode">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-24">
<span className="text-xs font-bold text-solar-500 tracking-widest uppercase mb-3 block">Méthode</span>
<h2 className="font-serif text-4xl md:text-5xl text-solar-950">Comment ça marche</h2>
</div>
<div className="space-y-24">

<div className="flex flex-col md:flex-row gap-12 items-start group">
<div className="md:w-1/3 relative">
<div className="font-serif text-9xl text-solar-100 absolute -top-10 -left-6 z-0 opacity-80 select-none">01</div>
<div className="relative z-10 w-16 h-16 rounded-2xl bg-solar-50 border border-solar-100 flex items-center justify-center text-solar-500 shadow-sm">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
<div className="md:w-2/3">
<h3 className="font-serif text-3xl text-solar-950 mb-4">On identifie vos clients idéaux</h3>
<p className="text-lg text-text-muted leading-relaxed mb-6">
                            Analyse de votre marché, définition des secteurs les plus rentables, identification des décideurs avec le pouvoir de signer.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-text-muted">
<iconify-icon className="text-solar-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                                Ciblage sectoriel : industrie, agriculture, tertiaire
                            </li>
<li className="flex items-center gap-3 text-text-muted">
<iconify-icon className="text-solar-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                                Zone géographique précise &amp; exclusive
                            </li>
<li className="flex items-center gap-3 text-text-muted">
<iconify-icon className="text-solar-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                                Profils décideurs : dirigeant, DT, responsable achats
                            </li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row gap-12 items-start group">
<div className="md:w-1/3 relative">
<div className="font-serif text-9xl text-solar-100 absolute -top-10 -left-6 z-0 opacity-80 select-none">02</div>
<div className="relative z-10 w-16 h-16 rounded-2xl bg-solar-50 border border-solar-100 flex items-center justify-center text-solar-500 shadow-sm">
<iconify-icon icon="solar:plain-3-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
<div className="md:w-2/3">
<h3 className="font-serif text-3xl text-solar-950 mb-4">On lance des campagnes chirurgicales</h3>
<p className="text-lg text-text-muted leading-relaxed mb-6">
                            Infrastructure email dédiée, copywriting personnalisé par lead, suivi technique quotidien. Chaque email est une opportunité de conversation.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-text-muted">
<iconify-icon className="text-solar-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                                Domaines et adresses email dédiés à votre marque
                            </li>
<li className="flex items-center gap-3 text-text-muted">
<iconify-icon className="text-solar-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                                Copywriting personnalisé par segment et langue
                            </li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row gap-12 items-start group">
<div className="md:w-1/3 relative">
<div className="font-serif text-9xl text-solar-100 absolute -top-10 -left-6 z-0 opacity-80 select-none">03</div>
<div className="relative z-10 w-16 h-16 rounded-2xl bg-solar-50 border border-solar-100 flex items-center justify-center text-solar-500 shadow-sm">
<iconify-icon icon="solar:calendar-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
</div>
<div className="md:w-2/3">
<h3 className="font-serif text-3xl text-solar-950 mb-4">On vous livre des rendez-vous qualifiés</h3>
<p className="text-lg text-text-muted leading-relaxed mb-6">
                            Vous recevez des rendez-vous avec des prospects qualifiés, prêts à discuter de leur projet solaire.
                        </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-text-muted">
<iconify-icon className="text-solar-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                                Planification et gestion du calendrier
                            </li>
<li className="flex items-center gap-3 text-text-muted">
<iconify-icon className="text-solar-500 text-xl" icon="solar:check-circle-linear"></iconify-icon>
                                Compte-rendu de chaque opportunité
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-solar-950 relative overflow-hidden" id="resultats">

<div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-solar-500 opacity-10 blur-[100px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row gap-16">

<div className="lg:w-1/2">
<span className="text-xs font-bold text-solar-400 tracking-widest uppercase mb-3 block">Résultats</span>
<h2 className="font-serif text-4xl md:text-5xl text-white mb-8">De zéro à 50 rendez-vous qualifiés par mois</h2>
<p className="text-lg text-neutral-400 leading-relaxed mb-6">
                        Un de nos clients, installateur PV commercial et industriel, n'avait aucune prospection outbound. 
                    </p>
<p className="text-lg text-neutral-400 leading-relaxed">
                        En quelques semaines, nous avons identifié les décideurs dans ses zones cibles — sites industriels, exploitations agricoles, immobilier commercial — et lancé des campagnes personnalisées dans 4 langues.
                    </p>
</div>

<div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="glass-card-dark p-8 rounded-2xl flex flex-col justify-center">
<div className="font-serif text-4xl text-solar-400 mb-2">50</div>
<div className="text-xs uppercase tracking-wide text-neutral-500 font-semibold mb-2">RDV qualifiés/mois</div>
<div className="text-sm text-neutral-400">avec des décideurs vérifiés</div>
</div>
<div className="glass-card-dark p-8 rounded-2xl flex flex-col justify-center">
<div className="font-serif text-4xl text-solar-400 mb-2">1,5M€</div>
<div className="text-xs uppercase tracking-wide text-neutral-500 font-semibold mb-2">de contrats</div>
<div className="text-sm text-neutral-400">signés en 6 mois</div>
</div>
<div className="glass-card-dark p-8 rounded-2xl flex flex-col justify-center">
<div className="font-serif text-4xl text-solar-400 mb-2">7</div>
<div className="text-xs uppercase tracking-wide text-neutral-500 font-semibold mb-2">langues</div>
<div className="text-sm text-neutral-400">FR, EN, ES, DE, IT, PT, NL</div>
</div>
<div className="glass-card-dark p-8 rounded-2xl flex flex-col justify-center">
<div className="font-serif text-4xl text-solar-400 mb-2">0 →</div>
<div className="text-xs uppercase tracking-wide text-neutral-500 font-semibold mb-2">pipeline complet</div>
<div className="text-sm text-neutral-400">en quelques semaines</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-gradient-to-br from-solar-50 via-white to-solar-100 relative" id="exclusivite">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="font-serif text-4xl md:text-5xl text-solar-950 mb-6">Un seul partenaire par zone</h2>
<p className="text-lg text-text-muted max-w-2xl mx-auto mb-16">
                Pour chaque département ou région, nous n'accompagnons qu'un seul installateur. Votre zone est protégée — vos leads ne seront jamais partagés avec un concurrent.
            </p>
<div className="grid md:grid-cols-2 gap-6 mb-12">
<div className="glass-card p-8 rounded-2xl text-left hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 bg-solar-100 rounded-full flex items-center justify-center text-solar-500 mb-6">
<iconify-icon icon="solar:shield-star-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-solar-950 mb-2">Garantie de résultat</h3>
<p className="text-text-muted text-sm">Minimum de 4 RDV qualifiés par mois. Si l'objectif n'est pas atteint, nous continuons gratuitement.</p>
</div>
<div className="glass-card p-8 rounded-2xl text-left hover:shadow-lg transition-shadow duration-300">
<div className="w-12 h-12 bg-solar-100 rounded-full flex items-center justify-center text-solar-500 mb-6">
<iconify-icon icon="solar:gift-linear" width="24"></iconify-icon>
</div>
<h3 className="font-serif text-xl text-solar-950 mb-2">Première campagne offerte</h3>
<p className="text-text-muted text-sm">On préfère prouver par les résultats. Votre première campagne est 100% offerte, sans engagement.</p>
</div>
</div>
<button className="bg-cta hover:bg-cta-hover text-white text-base font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-cta/20 hover:shadow-cta/40 hover:-translate-y-0.5">
                Vérifiez la disponibilité de votre zone →
            </button>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-2xl mx-auto px-6">
<h2 className="font-serif text-3xl md:text-4xl text-center text-solar-950 mb-12">Questions fréquentes</h2>
<div className="space-y-4">
<details className="group bg-solar-50/50 rounded-xl overflow-hidden transition-all duration-300 open:bg-solar-50">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-solar-950 select-none">
                        Quels secteurs ciblez-vous ?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-solar-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-text-muted leading-relaxed">
                        Industrie, agriculture, tertiaire, collectivités, résidentiel haut de gamme. Nous adaptons le ciblage à votre marché et votre zone géographique pour maximiser la rentabilité.
                    </div>
</details>
<details className="group bg-solar-50/50 rounded-xl overflow-hidden transition-all duration-300 open:bg-solar-50">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-solar-950 select-none">
                        Comment fonctionne la garantie ?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-solar-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-text-muted leading-relaxed">
                        Nous garantissons un minimum de 4 rendez-vous qualifiés par mois. Si l'objectif n'est pas atteint sur un mois donné, nous prolongeons nos efforts gratuitement jusqu'à l'atteindre.
                    </div>
</details>
<details className="group bg-solar-50/50 rounded-xl overflow-hidden transition-all duration-300 open:bg-solar-50">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-solar-950 select-none">
                        Pourquoi la première campagne est offerte ?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-solar-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-text-muted leading-relaxed">
                        Le marché du solaire est inondé de fausses promesses. Nous prenons le risque à notre charge pour vous prouver la qualité de nos leads avant tout engagement financier.
                    </div>
</details>
<details className="group bg-solar-50/50 rounded-xl overflow-hidden transition-all duration-300 open:bg-solar-50">
<summary className="flex items-center justify-between p-6 cursor-pointer text-lg font-medium text-solar-950 select-none">
                        Combien coûte le service après le test ?
                        <span className="transition-transform duration-300 group-open:rotate-180 text-solar-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-text-muted leading-relaxed">
                        Le tarif est fixe et adapté à la taille de votre zone géographique et la complexité du marché visé. Nous vous présentons une offre transparente lors du premier call de découverte.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 bg-solar-950 text-center relative overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-solar-500 opacity-5 blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6">
<h2 className="font-serif text-4xl md:text-5xl text-white mb-6">Prêt à remplir votre agenda ?</h2>
<p className="text-xl text-neutral-400 mb-10">
                Réservez votre première campagne — c'est offert, sans engagement.
            </p>
<button className="bg-cta hover:bg-cta-hover text-white text-lg font-medium py-4 px-10 rounded-full transition-all duration-300 shadow-xl shadow-cta/20 hover:shadow-cta/50 hover:scale-105 mb-8">
                Réserver mon call →
            </button>
<div className="text-sm text-neutral-500 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6">
<span>Sans engagement</span>
<span className="hidden md:inline">·</span>
<span>Résultats en 2-3 semaines</span>
<span className="hidden md:inline">·</span>
<span>1 seul client par zone</span>
</div>
</div>
</section>

<footer className="bg-solar-950 border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-gradient-to-br from-solar-800 to-solar-900 border border-solar-700"></div>
<span className="font-serif text-lg text-neutral-400">Primavera Solar</span>
</div>
<div className="text-neutral-600 text-sm">
                © 2026 Primavera Solar
            </div>
<a className="text-neutral-500 hover:text-solar-400 transition-colors text-sm" href="mailto:contact@primaverasolar.co">
                contact@primaverasolar.co
            </a>
</div>
</footer>

    </>
  );
}
