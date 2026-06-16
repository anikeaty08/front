import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<nav className="absolute top-0 left-0 w-full z-50 py-6 px-6 md:px-12 flex justify-between items-center text-white">
<a className="font-serif text-xl tracking-tighter uppercase font-medium" href="#">Decod'Art</a>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-stone-300 transition-colors" href="#realisations">Réalisations</a>
<a className="hover:text-stone-300 transition-colors" href="#prestations">Prestations</a>
<a className="hover:text-stone-300 transition-colors" href="#agence">L'Agence</a>
</div>
<a className="hidden md:inline-flex bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white text-sm font-medium py-2 px-5 rounded-full transition-all" href="#contact">
            Contact
        </a>
<button className="md:hidden text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</nav>

<header className="min-h-[100vh] md:min-h-[85vh] flex flex-col md:flex-row md:px-12 lg:px-24 md:pt-32 md:pb-24 overflow-hidden w-full pt-32 pb-16 relative items-center justify-between">

<div className="bg-gradient-to-br from-stone-900 to-stone-950 z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0765A1]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>

<div className="w-full md:w-1/2 z-10 flex flex-col justify-center max-w-2xl order-2 md:order-1 mt-12 md:mt-0">
<h1 className="text-4xl md:text-6xl lg:text-[72px] tracking-tight leading-[1.1] mb-6">
<span className="block font-sans font-light text-white mb-2">Votre intérieur,</span>
<span className="font-serif italic font-medium text-stone-300">réinventé</span> <span className="font-sans font-light text-white">à votre image.</span>
</h1>
<p className="text-stone-400 text-base md:text-lg lg:text-xl font-light mb-10 max-w-xl leading-relaxed">
            Architecture d'intérieur &amp; décoration sur mesure — Toulouse et sa région.
        </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center hover:bg-[#8B503E] transition-colors duration-300 text-sm font-medium text-white bg-[#0765A1] rounded-full px-8 py-3.5" href="#contact">
                Demander un devis
            </a>
<a className="inline-flex justify-center items-center bg-transparent border border-white/20 hover:bg-white/10 hover:border-white/30 text-white text-sm font-medium py-3.5 px-8 rounded-full transition-all duration-300" href="#realisations">
                Voir nos réalisations
            </a>
</div>
</div>

<div className="w-full md:w-5/12 relative flex justify-center md:justify-end order-1 md:order-2 z-10 pt-8 md:pt-0">
<div className="relative w-full max-w-[440px]">
<div className="aspect-[3/4] w-full overflow-hidden rounded-sm relative z-10 border border-white/10 shadow-2xl">
<img alt="Intérieur rénové haut de gamme" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cce1c129-9335-43e7-bb81-a8578c04a092_1600w.jpg"/>
</div>

<div className="absolute -inset-4 border border-white/10 rounded-sm z-0 hidden md:block"></div>
</div>
</div>
</header>

<div className="bg-white border-stone-100 border-b pt-5 pr-6 pb-5 pl-6">
<div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-xs md:text-sm text-stone-500 font-medium tracking-wide uppercase">
<span>30 ans d'expérience</span>
<span className="hidden md:inline text-stone-300">•</span>
<span>Interlocutrice unique</span>
<span className="hidden md:inline text-stone-300">•</span>
<span className="">Artisans sélectionnés</span>
<span className="hidden md:inline text-stone-300">•</span>
<span className="">Toulouse &amp; Haute-Garonne</span>
</div>
</div>

<section className="py-24 px-6 md:px-12 lg:px-24 max-w-[1400px] mx-auto" id="realisations">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<h2 className="font-serif text-3xl md:text-5xl tracking-tight text-stone-900 font-medium">
                Chaque projet raconte<br/>une histoire.
            </h2>
<a className="group inline-flex items-center gap-2 text-sm font-medium hover:text-[#8B503E] transition-colors text-[#0765A1]" href="#">
                Voir toutes nos réalisations
                <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">

<div className="md:col-span-2 h-[400px] md:h-[600px] relative group overflow-hidden rounded-sm">
<img alt="Réalisation salon" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex flex-col gap-4 md:gap-6 h-[400px] md:h-[600px]">
<div className="h-1/2 relative group overflow-hidden rounded-sm">
<img alt="Détail décoration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="h-1/2 relative group overflow-hidden rounded-sm">
<img alt="Réalisation cuisine" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>

<div className="flex flex-col gap-4 md:gap-6 h-[400px] md:h-[600px] order-2 md:order-1 mt-4 md:mt-0">
<div className="h-1/2 relative group overflow-hidden rounded-sm">
<img alt="Aménagement chambre" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="h-1/2 relative group overflow-hidden rounded-sm">
<img alt="Détail matériaux" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="md:col-span-2 h-[400px] md:h-[600px] relative group overflow-hidden rounded-sm order-1 md:order-2 mt-4 md:mt-0">
<img alt="Réalisation espace de vie" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6 md:px-12 lg:px-24" id="prestations">
<div className="max-w-[1400px] mx-auto">
<div className="text-center mb-16">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900 font-medium mb-4">Nos prestations</h2>
<p className="text-stone-500 text-sm md:text-base max-w-2xl mx-auto">Un accompagnement sur mesure, adapté à l'envergure de votre projet et à vos aspirations.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

<div className="group">
<div className="aspect-[4/5] overflow-hidden rounded-sm mb-6">
<img alt="Décoration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]" src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="font-serif text-xl md:text-2xl tracking-tight text-stone-900 mb-2 font-medium">Décoration &amp; aménagement</h3>
<p className="text-stone-500 text-sm leading-relaxed">Sublimez vos espaces existants grâce à une sélection pointue de couleurs, mobiliers et matériaux.</p>
</div>

<div className="group">
<div className="aspect-[4/5] overflow-hidden rounded-sm mb-6">
<img alt="Rénovation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]" src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="font-serif text-xl md:text-2xl tracking-tight text-stone-900 mb-2 font-medium">Rénovation complète</h3>
<p className="text-stone-500 text-sm leading-relaxed">De la conception des plans jusqu'à la réception des travaux, une métamorphose intégrale de votre habitat.</p>
</div>

<div className="group">
<div className="aspect-[4/5] overflow-hidden rounded-sm mb-6">
<img alt="Pro" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%]" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="font-serif text-xl md:text-2xl tracking-tight text-stone-900 mb-2 font-medium">Aménagement professionnel</h3>
<p className="text-stone-500 text-sm leading-relaxed">Conception d'espaces de travail, boutiques et restaurants alliant esthétique identitaire et fonctionnalité.</p>
</div>
</div>
</div>
</section>

<section className="md:px-12 lg:px-24 bg-[#F5F5F0] pt-24 pr-6 pb-24 pl-6">
<div className="max-w-[1200px] mx-auto text-center">
<h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 font-medium mb-16">Notre approche en 3 étapes</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[1px] bg-stone-300 z-0"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 text-stone-950">
<iconify-icon className="text-4xl" icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-serif text-lg text-stone-900 mb-2 font-medium tracking-tight">1. Écoute &amp; conception</h4>
<p className="text-stone-500 text-sm text-center max-w-[250px]">Compréhension de vos besoins et élaboration des plans d'aménagement.</p>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 text-stone-950">
<iconify-icon className="text-4xl" icon="solar:armchair-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-serif text-lg text-stone-900 mb-2 font-medium tracking-tight">2. Choix des matériaux &amp; mobiliers</h4>
<p className="text-stone-500 text-sm text-center max-w-[250px]">Sélection affinée des finitions, couleurs et équipements sur mesure.</p>
</div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-white flex items-center justify-center shadow-sm mb-6 text-stone-950">
<iconify-icon className="text-4xl" icon="solar:home-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h4 className="font-serif text-lg text-stone-900 mb-2 font-medium tracking-tight">3. Suivi de chantier &amp; livraison</h4>
<p className="text-stone-500 text-sm text-center max-w-[250px]">Coordination des artisans et contrôle rigoureux jusqu'aux finitions.</p>
</div>
</div>
</div>
</section>

<section className="md:px-12 lg:px-24 bg-white pt-24 pr-6 pb-24 pl-6">
<div className="max-w-[1400px] mx-auto">
<h2 className="font-serif text-2xl md:text-3xl tracking-tight text-stone-900 font-medium mb-12 text-center">Ils nous ont fait confiance</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-[#FAFAF9] p-8 md:p-10 rounded-sm border border-stone-100">
<div className="flex mb-4 gap-x-1 gap-y-1 text-[#0765A1]">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 text-sm md:text-base italic mb-6 leading-relaxed">"Véronique a su transformer notre maison de maître avec un goût exquis, tout en respectant l'âme des lieux. Un suivi de chantier irréprochable et des artisans de grande qualité."</p>
<div>
<p className="font-medium text-stone-900 text-sm">Sophie &amp; Laurent</p>
<p className="text-stone-400 text-xs mt-1 uppercase tracking-wider">Rénovation complète, Toulouse</p>
</div>
</div>

<div className="bg-[#FAFAF9] p-8 md:p-10 rounded-sm border border-stone-100">
<div className="flex mb-4 gap-1 text-[#0765A1]">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 text-sm md:text-base italic mb-6 leading-relaxed">"Une écoute attentive et des propositions d'aménagement auxquelles nous n'aurions jamais pensé. Notre espace de vie est devenu lumineux et incroyablement fonctionnel."</p>
<div className="">
<p className="font-medium text-stone-900 text-sm">Marc</p>
<p className="text-stone-400 text-xs mt-1 uppercase tracking-wider">Aménagement appartement, Balma</p>
</div>
</div>

<div className="bg-[#FAFAF9] p-8 md:p-10 rounded-sm border border-stone-100">
<div className="flex mb-4 gap-1 text-[#0765A1]">
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-sm" icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 text-sm md:text-base italic mb-6 leading-relaxed">"L'agence a pris en charge la décoration de notre restaurant. L'ambiance créée est exactement ce que nous voulions : chaleureuse, chic et intemporelle. Les retours clients sont unanimes."</p>
<div className="">
<p className="font-medium text-stone-900 text-sm">Julie</p>
<p className="text-stone-400 text-xs mt-1 uppercase tracking-wider">Projet commercial, Centre-ville</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:px-12 lg:px-24 bg-[#FAFAF9] border-stone-200 border-t pt-24 pr-6 pb-24 pl-6" id="agence">
<div className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
<div className="w-full md:w-5/12 relative">
<div className="aspect-[3/4] overflow-hidden rounded-sm">
<img alt="Véronique Courtade, Architecte d'intérieur" className="grayscale-[30%] w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2044c6ca-aee0-4bc6-9512-38d4cc562be1_800w.jpg"/>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#859287]/10 rounded-full -z-10"></div>
</div>
<div className="w-full md:w-7/12">
<span className="text-xs font-medium uppercase tracking-widest mb-4 block text-[#0765A1]">L'âme de l'agence</span>
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-stone-900 font-medium mb-6">Véronique Courtade</h2>
<div className="space-y-4 text-stone-600 text-sm md:text-base leading-relaxed">
<p className="">Forte de 30 années d'expérience en architecture d'intérieur et décoration, j'accompagne particuliers et professionnels dans la métamorphose de leurs espaces de vie à Toulouse et sa région.</p>
<p className="">En tant qu'architecte d'intérieur qualifiée UNAID, je place l'écoute au cœur de mon processus créatif. Mon objectif n'est pas d'imposer un style, mais de révéler le potentiel de votre intérieur pour qu'il devienne le reflet de votre singularité, alliant élégance intemporelle et confort au quotidien.</p>
<p className="">Chaque projet est une aventure humaine, de la première esquisse à la remise des clés, menée avec passion, exigence et le concours d'artisans locaux de confiance.</p>
</div>
<div className="mt-8">
<img alt="Signature" className="h-12 opacity-40 mix-blend-multiply filter contrast-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" style={{filter: 'brightness(0) opacity(0.4)'}}/>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-white text-center relative overflow-hidden bg-slate-400" id="contact">

<div className="opacity-5 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px'}}></div>
<div className="relative z-10 max-w-2xl mx-auto">
<h2 className="font-serif text-3xl md:text-5xl tracking-tight font-medium mb-6">Vous avez un projet ?<br/>Parlons-en.</h2>
<p className="text-white/80 text-sm md:text-base mb-10 font-light">Rencontrons-nous pour échanger sur vos envies et imaginer ensemble l'intérieur qui vous ressemble.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="inline-flex justify-center items-center bg-white hover:bg-stone-50 text-sm font-medium py-4 px-8 rounded-full transition-colors duration-300 w-full sm:w-auto text-stone-950" href="#">
                    Demander un devis gratuit
                </a>
<div className="flex items-center gap-3 text-white/90">
<iconify-icon className="text-xl" icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon>
<a className="text-base font-medium hover:text-white transition-colors" href="tel:+33000000000">05 61 00 00 00</a>
</div>
</div>
</div>
</section>

<footer className="bg-stone-950 text-stone-400 py-16 px-6 md:px-12 lg:px-24">
<div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
<div className="md:col-span-1">
<a className="font-serif text-xl tracking-tighter uppercase font-medium text-white block mb-6" href="#">Decod'Art</a>
<p className="text-xs leading-relaxed max-w-xs">Agence d'architecture d'intérieur et de décoration haut de gamme basée à Toulouse, dirigée par Véronique Courtade.</p>
</div>
<div className="">
<h4 className="text-white text-xs font-medium uppercase tracking-wider mb-6">Navigation</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Accueil</a></li>
<li><a className="hover:text-white transition-colors" href="#realisations">Réalisations</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#prestations">Prestations</a></li>
<li><a className="hover:text-white transition-colors" href="#agence">L'Agence</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white text-xs font-medium uppercase tracking-wider mb-6">Contact</h4>
<ul className="space-y-3 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 flex-shrink-0 text-stone-500" icon="solar:map-point-linear"></iconify-icon>
<span>31000 Toulouse,<br/>Haute-Garonne</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-500" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:contact@decodart.fr">contact@decodart.fr</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-stone-500" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-white transition-colors" href="tel:+33000000000">05 61 00 00 00</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-medium uppercase tracking-wider mb-6">Réseaux</h4>
<a className="inline-flex items-center gap-2 hover:text-white transition-colors text-sm group" href="#">
                    Instagram
                    <iconify-icon className="text-stone-500 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-[1400px] mx-auto mt-16 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>© 2023 Decod'Art Design. Tous droits réservés.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Mentions légales</a>
<a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>
</footer>

    </>
  );
}
