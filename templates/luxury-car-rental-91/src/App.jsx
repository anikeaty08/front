import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2" href="#">
<iconify-icon icon="solar:crown-linear" strokeWidth="1.5" width="20"></iconify-icon>
                GENÈVE PRESTIGE
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="hover:text-white transition-colors duration-300" href="#flotte">Véhicules</a>
<a className="hover:text-white transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-white transition-colors duration-300" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors" href="#contact">
                Réserver
                <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Disponible 24/7 à Genève
                </div>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    L'Art du Voyage <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-300 to-slate-600">Exceptionnel.</span>
</h1>
<p className="text-lg text-slate-400 max-w-md font-light leading-relaxed">
                    Découvrez une flotte exclusive de véhicules de prestige pour vos déplacements d'affaires ou de loisirs au cœur de la Suisse.
                </p>
<div className="flex items-center gap-4">
<a className="px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2" href="#flotte">
                        Voir la flotte
                        <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="px-6 py-3 border border-white/10 text-white text-sm font-medium rounded-lg hover:bg-white/5 transition-colors" href="#contact">
                        Nous contacter
                    </a>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
<img alt="Luxury Car" className="rounded-2xl border border-white/10 shadow-2xl shadow-blue-900/10 w-full object-cover h-[400px] md:h-[500px]" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 z-20 glass-panel p-4 rounded-xl flex items-center gap-4 max-w-xs">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
<iconify-icon icon="solar:steering-wheel-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="">
<p className="text-white text-sm font-medium">Porsche 911 GT3</p>
<p className="text-xs text-slate-400">À partir de 1,200 CHF / jour</p>
</div>
</div>
</div>
</div>
</header>

<div className="w-full border-y border-white/5 bg-white/[0.02] overflow-hidden py-8">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center opacity-40 grayscale">

<span className="text-xl font-semibold tracking-widest">PORSCHE</span>
<span className="text-xl font-semibold tracking-widest">MERCEDES-AMG</span>
<span className="text-xl font-semibold tracking-widest hidden md:inline">FERRARI</span>
<span className="text-xl font-semibold tracking-widest hidden md:inline">BENTLEY</span>
<span className="text-xl font-semibold tracking-widest">AUDI RS</span>
</div>
</div>

<section className="py-24 max-w-7xl mx-auto px-6" id="flotte">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Notre Collection</h2>
<p className="text-slate-400 font-light max-w-lg">
                    Une sélection rigoureuse des modèles les plus performants et élégants du marché.
                </p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition text-white">
<iconify-icon icon="solar:arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition text-white">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Porsche" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div className="">
<h3 className="text-lg font-medium text-white">Porsche 911 Carrera</h3>
<p className="text-xs text-slate-500 mt-1">Sport / Coupé</p>
</div>
<span className="text-sm font-medium text-white bg-white/10 px-2 py-1 rounded">850 CHF<span className="text-xs text-slate-400 font-normal">/j</span></span>
</div>
<div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5">
<div className="flex flex-col gap-1">
<iconify-icon className="text-slate-400" icon="solar:speedometer-linear"></iconify-icon>
<span className="text-xs text-slate-300">3.2s</span>
</div>
<div className="flex flex-col gap-1">
<iconify-icon className="text-slate-400" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-xs text-slate-300">2 Sièges</span>
</div>
<div className="flex flex-col gap-1">
<iconify-icon className="text-slate-400" icon="solar:pump-linear"></iconify-icon>
<span className="text-xs text-slate-300">Essence</span>
</div>
</div>
<button className="w-full mt-2 py-2.5 rounded-lg border border-white/10 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors">
                        Réserver ce modèle
                    </button>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Mercedes" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white">Mercedes G63 AMG</h3>
<p className="text-xs text-slate-500 mt-1">SUV / Luxe</p>
</div>
<span className="text-sm font-medium text-white bg-white/10 px-2 py-1 rounded">1,100 CHF<span className="text-xs text-slate-400 font-normal">/j</span></span>
</div>
<div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5">
<div className="flex flex-col gap-1">
<iconify-icon className="text-slate-400" icon="solar:speedometer-linear"></iconify-icon>
<span className="text-xs text-slate-300">4.5s</span>
</div>
<div className="flex flex-col gap-1">
<iconify-icon className="text-slate-400" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-xs text-slate-300">5 Sièges</span>
</div>
<div className="flex flex-col gap-1">
<iconify-icon className="text-slate-400" icon="solar:case-linear"></iconify-icon>
<span className="text-xs text-slate-300">Large</span>
</div>
</div>
<button className="w-full mt-2 py-2.5 rounded-lg border border-white/10 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors">
                        Réserver ce modèle
                    </button>
</div>
</div>

<div className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/[0.02] hover:border-white/20 transition-all duration-300">
<div className="aspect-[4/3] overflow-hidden">
<img alt="Ferrari" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-lg font-medium text-white">Ferrari F8 Tributo</h3>
<p className="text-xs text-slate-500 mt-1">Supercar</p>
</div>
<span className="text-sm font-medium text-white bg-white/10 px-2 py-1 rounded">1,500 CHF<span className="text-xs text-slate-400 font-normal">/j</span></span>
</div>
<div className="grid grid-cols-3 gap-2 py-4 border-t border-white/5">
<div className="flex flex-col gap-1">
<iconify-icon className="text-slate-400" icon="solar:speedometer-linear"></iconify-icon>
<span className="text-xs text-slate-300">2.9s</span>
</div>
<div className="flex flex-col gap-1">
<iconify-icon className="text-slate-400" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-xs text-slate-300">2 Sièges</span>
</div>
<div className="flex flex-col gap-1">
<iconify-icon className="text-slate-400" icon="solar:flame-linear"></iconify-icon>
<span className="text-xs text-slate-300">720 ch</span>
</div>
</div>
<button className="w-full mt-2 py-2.5 rounded-lg border border-white/10 text-xs font-medium text-white hover:bg-white hover:text-black transition-colors">
                        Réserver ce modèle
                    </button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900/30 border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">Services Premium</h2>
<p className="text-slate-400 font-light">
                    Au-delà de la location, nous offrons une expérience complète adaptée à vos exigences les plus élevées.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl hover:bg-white/[0.03] transition-colors">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Chauffeur Privé</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Profitez du voyage sans contraintes grâce à nos chauffeurs professionnels multilingues, discrets et ponctuels.
                    </p>
</div>

<div className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl hover:bg-white/[0.03] transition-colors">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
<iconify-icon icon="solar:plane-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Transfert Aéroport</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Accueil VIP dès votre arrivée à l'Aéroport International de Genève (GVA) et livraison du véhicule au terminal.
                    </p>
</div>

<div className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl hover:bg-white/[0.03] transition-colors">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Conciergerie</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                        Service sur-mesure pour vos réservations d'hôtels, restaurants et événements durant votre séjour.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="contact">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

<div className="">
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Contactez-nous</h2>
<p className="text-slate-400 font-light mb-8">Remplissez le formulaire ci-dessous pour une demande de devis ou de réservation.</p>
<form className="space-y-5">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Prénom</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-slate-600" placeholder="Jean" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Nom</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-slate-600" placeholder="Dupont" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Email</label>
<input className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-slate-600" placeholder="jean.dupont@exemple.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Véhicule souhaité</label>
<div className="relative">
<select className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all appearance-none cursor-pointer">
<option>Sélectionnez un véhicule</option>
<option>Porsche 911 Carrera</option>
<option>Mercedes G63 AMG</option>
<option>Ferrari F8 Tributo</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Message</label>
<textarea className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all placeholder:text-slate-600" placeholder="Détails supplémentaires sur votre demande..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-3.5 rounded-lg hover:bg-slate-200 transition-colors flex items-center justify-center gap-2 mt-4" type="submit">
                        Envoyer la demande
                        <iconify-icon icon="solar:plain-linear" strokeWidth="1.5" width="18"></iconify-icon>
</button>
</form>
</div>

<div className="space-y-8">

<div className="rounded-xl overflow-hidden border border-white/10 h-[300px] relative bg-slate-900">
<iframe allowfullscreen="" className="map-filter" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.884263673756!2d6.143158315555436!3d46.20439097911679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c652670355555%3A0x123456789abcdef!2sRue%20du%20Rh%C3%B4ne%2C%20Gen%C3%A8ve!5e0!3m2!1sfr!2sch!4v1620000000000!5m2!1sfr!2sch" style={{border: '0'}} width="100%">
</iframe>
<div className="absolute bottom-4 left-4 bg-slate-950/90 backdrop-blur border border-white/10 px-4 py-2 rounded-lg text-xs text-white flex items-center gap-2">
<span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        Agence Genève Centre
                    </div>
</div>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Notre Agence</h4>
<p className="text-slate-400 text-sm mt-1 leading-relaxed">
                                Rue du Rhône 42
                                1204 Genève, Suisse
                            </p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Téléphone</h4>
<p className="text-slate-400 text-sm mt-1">+41 22 555 01 23</p>
<p className="text-slate-500 text-xs mt-0.5">Lun-Dim, 8h - 22h</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-white">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Email</h4>
<a className="text-slate-400 text-sm mt-1 hover:text-white transition-colors" href="mailto:contact@geneve-prestige.ch">contact@geneve-prestige.ch</a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-slate-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<a className="text-white text-lg font-medium tracking-tighter flex items-center gap-2 mb-4" href="#">
<iconify-icon icon="solar:crown-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        GENÈVE PRESTIGE
                    </a>
<p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                        Le spécialiste de la location de voitures de luxe en Suisse. Une expérience inoubliable au volant des plus belles mécaniques du monde.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Navigation</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Accueil</a></li>
<li><a className="hover:text-white transition-colors" href="#flotte">Véhicules</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Réserver</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Légal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Conditions générales</a></li>
<li><a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a></li>
<li><a className="hover:text-white transition-colors" href="#">Mentions légales</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">
                    © 2023 Genève Prestige. Tous droits réservés.
                </p>
<div className="flex gap-4">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:linkedin-rect" width="16"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
