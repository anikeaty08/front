import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
neon: '#FF3B30',
dark: '#050505',
surface: '#121212',
border: '#2A2A2A'
},
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
display: ['"Rock Salt"', 'cursive'], // Used for the "Salted" emphasis style
},
boxShadow: {
'neon': '0 0 20px -5px rgba(255, 59, 48, 0.5)',
'neon-hover': '0 0 30px -5px rgba(255, 59, 48, 0.7)',
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-dark/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-white uppercase" href="#">Neoness</a>
<div className="flex items-center gap-4">
<a className="hidden md:flex text-sm font-medium text-white hover:text-neon transition-colors" href="#offer">Clubs</a>
<a className="bg-white/10 hover:bg-white/20 text-white text-xs font-medium py-2 px-4 rounded-full transition-all" href="#offer">Espace Membre</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Gym Background" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-r from-dark via-transparent to-dark"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neon/30 bg-neon/10 text-neon text-xs font-medium mb-6 uppercase tracking-wider">
<iconify-icon icon="solar:fire-linear" width="16"></iconify-icon>
<span>Nouveau concept</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-white mb-6 leading-[0.9]">
                WELCOME TO <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">THE CLUB</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light">
                Le sport <span className="font-display text-neon rotate-2 inline-block ml-1">immersif</span>, sans jugement, conçu pour tes objectifs. Rejoins le mouvement urbain.
            </p>

<div className="bg-surface/80 backdrop-blur-xl border border-white/10 p-2 rounded-2xl max-w-lg mx-auto flex flex-col md:flex-row gap-2 mb-8">
<div className="flex-1 flex items-center px-4 bg-dark/50 rounded-xl border border-white/5">
<iconify-icon className="text-gray-400 mr-3 text-lg" icon="solar:map-point-linear"></iconify-icon>
<input className="bg-transparent border-none outline-none text-white text-sm w-full h-12 placeholder-gray-500" placeholder="Trouver mon club..." type="text"/>
</div>
<button className="bg-neon hover:bg-red-600 text-white font-medium text-sm py-3 px-6 rounded-xl transition-all shadow-neon hover:shadow-neon-hover whitespace-nowrap flex items-center justify-center gap-2 group">
                    M'inscrire
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400">
<div className="flex items-center gap-1">
<div className="flex text-neon">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-white font-medium ml-2">4.8/5</span>
</div>
<span className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></span>
<p>Déjà <span className="text-white font-medium">+45 000</span> membres</p>
<span className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></span>
<a className="text-white underline decoration-neon underline-offset-4 hover:text-neon transition-colors" href="#offer">Essai gratuit</a>
</div>
</div>
</section>

<section className="py-20 bg-surface relative border-y border-white/5" id="offer">
<div className="absolute top-0 right-0 w-1/3 h-full bg-neon/5 blur-[100px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

<div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">
                    TON PREMIER MOIS <br/>
<span className="text-neon font-display text-4xl md:text-6xl -rotate-1 inline-block mt-2">À 9,90€</span>
</h2>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-gray-300">
<iconify-icon className="text-neon text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Sans engagement de durée, résilie quand tu veux.</span>
</li>
<li className="flex items-start gap-3 text-gray-300">
<iconify-icon className="text-neon text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Accès illimité à tous les espaces et machines.</span>
</li>
<li className="flex items-start gap-3 text-gray-300">
<iconify-icon className="text-neon text-xl mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Offre limitée aux 100 premiers inscrits.</span>
</li>
</ul>
<div className="flex items-center gap-4">
<div className="flex -space-x-4">
<img alt="" className="w-10 h-10 rounded-full border-2 border-surface" src="https://i.pravatar.cc/100?img=1"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-surface" src="https://i.pravatar.cc/100?img=2"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-surface" src="https://i.pravatar.cc/100?img=3"/>
</div>
<p className="text-xs text-gray-400">Rejoins la communauté <br/> dès aujourd'hui.</p>
</div>
</div>

<div className="bg-dark border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<form className="relative z-10 space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-gray-400 mb-1">Prénom</label>
<input className="w-full bg-surface border border-white/10 rounded-lg h-12 px-4 text-white text-sm focus:border-neon outline-none transition-colors" placeholder="Thomas" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-1">Nom</label>
<input className="w-full bg-surface border border-white/10 rounded-lg h-12 px-4 text-white text-sm focus:border-neon outline-none transition-colors" placeholder="Durand" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-1">Email</label>
<input className="w-full bg-surface border border-white/10 rounded-lg h-12 px-4 text-white text-sm focus:border-neon outline-none transition-colors" placeholder="thomas@hello.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-gray-400 mb-1">Club souhaité</label>
<div className="relative">
<select className="w-full bg-surface border border-white/10 rounded-lg h-12 px-4 text-white text-sm focus:border-neon outline-none appearance-none transition-colors cursor-pointer">
<option>Paris - Bastille</option>
<option>Paris - République</option>
<option>Lyon - Part Dieu</option>
<option>Marseille - Prado</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-neon text-white font-medium text-base py-4 rounded-xl mt-4 shadow-neon hover:shadow-neon-hover transition-all flex items-center justify-center gap-2" type="button">
                        Profiter de l'offre
                        <iconify-icon icon="solar:bolt-linear"></iconify-icon>
</button>
<p className="text-center text-[10px] text-gray-500 mt-3">Offre soumise à conditions. Voir club.</p>
</form>
</div>
</div>
</section>

<section className="py-12 border-b border-white/5 bg-dark">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
<h3 className="text-xl font-medium tracking-tight text-white">Ce qu'ils en pensent</h3>
<div className="flex items-center gap-2">
<img alt="Google" className="h-5 grayscale opacity-70" src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"/>
<div className="flex text-neon text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-linear"></iconify-icon>
</div>
<span className="text-xs text-gray-500">Basé sur 2400 avis</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-surface p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
<div className="flex text-neon mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-300 mb-4 line-clamp-3">"Ambiance incroyable, rien à voir avec les salles classiques. Les coachs sont vraiment là pour nous."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">JL</div>
<span className="text-xs font-medium text-gray-500">Julie L. - Neoness Bastille</span>
</div>
</div>

<div className="bg-surface p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
<div className="flex text-neon mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-300 mb-4 line-clamp-3">"La salle est propre, le matériel high-tech et l'abonnement sans engagement est un vrai plus."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">MA</div>
<span className="text-xs font-medium text-gray-500">Marc A. - Neoness Nation</span>
</div>
</div>

<div className="bg-surface p-6 rounded-xl border border-white/5 hover:border-white/10 transition-colors hidden md:block">
<div className="flex text-neon mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-gray-300 mb-4 line-clamp-3">"Enfin une salle où je ne me sens pas jugée. L'espace cardio est top !"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-semibold">SB</div>
<span className="text-xs font-medium text-gray-500">Sarah B. - Neoness La Motte</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-4">PLUS QU'UNE <span className="font-display text-neon">SALLE</span></h2>
<p className="text-gray-400 max-w-xl mx-auto">Un concept pensé pour ton expérience, ton confort et tes résultats.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-surface border border-white/5 hover:border-neon/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-dark border border-white/10 flex items-center justify-center text-neon text-2xl mb-4 group-hover:bg-neon group-hover:text-white transition-colors">
<iconify-icon icon="solar:layers-minimalistic-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Espaces Immersifs</h3>
<p className="text-sm text-gray-400 leading-relaxed">Design travaillé, lumières tamisées. Entraîne-toi dans une bulle.</p>
</div>

<div className="group p-6 rounded-2xl bg-surface border border-white/5 hover:border-neon/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-dark border border-white/10 flex items-center justify-center text-neon text-2xl mb-4 group-hover:bg-neon group-hover:text-white transition-colors">
<iconify-icon icon="solar:user-id-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Coachs Salariés</h3>
<p className="text-sm text-gray-400 leading-relaxed">De vrais pros disponibles en salle pour te guider, pas des freelances.</p>
</div>

<div className="group p-6 rounded-2xl bg-surface border border-white/5 hover:border-neon/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-dark border border-white/10 flex items-center justify-center text-neon text-2xl mb-4 group-hover:bg-neon group-hover:text-white transition-colors">
<iconify-icon icon="solar:smartphone-2-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Tech &amp; Connecté</h3>
<p className="text-sm text-gray-400 leading-relaxed">Machines dernière génération, applications de suivi et wifi haut débit.</p>
</div>

<div className="group p-6 rounded-2xl bg-surface border border-white/5 hover:border-neon/50 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 rounded-lg bg-dark border border-white/10 flex items-center justify-center text-neon text-2xl mb-4 group-hover:bg-neon group-hover:text-white transition-colors">
<iconify-icon icon="solar:map-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Liberté Totale</h3>
<p className="text-sm text-gray-400 leading-relaxed">Accès réseau illimité. Change de club comme de chemise.</p>
</div>
</div>
</section>

<section className="py-12 bg-dark">
<div className="max-w-7xl mx-auto px-6 mb-10 flex items-end justify-between">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white">ZONES D'ENTRAÎNEMENT</h2>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 no-scrollbar md:max-w-7xl md:mx-auto">

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] rounded-3xl relative overflow-hidden group cursor-pointer">
<img alt="Cardio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&amp;w=1975&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-neon text-xs font-bold uppercase tracking-widest mb-2 block">Intensité</span>
<h3 className="text-3xl font-medium text-white mb-2">Cardio Connecté</h3>
<p className="text-gray-300 text-sm max-w-xs">Courir, ramer, pédaler avec Netflix ou Youtube sur des écrans HD.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] rounded-3xl relative overflow-hidden group cursor-pointer">
<img alt="Muscu" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-neon text-xs font-bold uppercase tracking-widest mb-2 block">Force</span>
<h3 className="text-3xl font-medium text-white mb-2">Free Weights</h3>
<p className="text-gray-300 text-sm max-w-xs">Espace poids libres complet jusqu'à 50kg. Benches, racks et espace fonctionnel.</p>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-[400px] rounded-3xl relative overflow-hidden group cursor-pointer">
<img alt="Studio" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<span className="text-neon text-xs font-bold uppercase tracking-widest mb-2 block">Collectif</span>
<h3 className="text-3xl font-medium text-white mb-2">Group Training</h3>
<p className="text-gray-300 text-sm max-w-xs">Des cours collectifs motivants dans une ambiance de nightclub.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-surface border-y border-white/5">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white">SIMPLE COMME BONJOUR</h2>
</div>
<div className="relative">

<div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
<div className="space-y-12">

<div className="flex flex-col md:flex-row items-center justify-between gap-8 group">
<div className="w-full md:w-[45%] text-center md:text-right">
<h3 className="text-xl font-semibold text-white mb-2">Je choisis mon club</h3>
<p className="text-sm text-gray-400">Trouve la salle la plus proche de chez toi ou de ton travail.</p>
</div>
<div className="relative z-10 w-12 h-12 rounded-full bg-dark border border-neon text-neon flex items-center justify-center font-bold text-lg shadow-neon group-hover:scale-110 transition-transform">1</div>
<div className="w-full md:w-[45%] hidden md:block"></div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-8 group">
<div className="w-full md:w-[45%] hidden md:block"></div>
<div className="relative z-10 w-12 h-12 rounded-full bg-dark border border-gray-700 text-gray-400 flex items-center justify-center font-bold text-lg group-hover:border-neon group-hover:text-neon transition-colors">2</div>
<div className="w-full md:w-[45%] text-center md:text-left">
<h3 className="text-xl font-semibold text-white mb-2">Je m'inscris en 2 min</h3>
<p className="text-sm text-gray-400">En ligne ou sur place, offre sans engagement disponible.</p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between gap-8 group">
<div className="w-full md:w-[45%] text-center md:text-right">
<h3 className="text-xl font-semibold text-white mb-2">Je m'entraîne</h3>
<p className="text-sm text-gray-400">Accès immédiat via QR code. Profite de tous les espaces.</p>
</div>
<div className="relative z-10 w-12 h-12 rounded-full bg-dark border border-gray-700 text-gray-400 flex items-center justify-center font-bold text-lg group-hover:border-neon group-hover:text-neon transition-colors">3</div>
<div className="w-full md:w-[45%] hidden md:block"></div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 text-neon text-sm font-medium hover:text-white transition-colors" href="#offer">
                        Commencer maintenant
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-7xl mx-auto px-6">
<div className="bg-[#1A1A1A] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-white/5 relative overflow-hidden">

<div className="absolute -left-20 -bottom-20 w-96 h-96 bg-neon/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="w-full md:w-1/3 relative">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-gray-800">
<img alt="Coach" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
<p className="text-white text-xs font-bold">Kevin, Coach</p>
</div>
</div>
<div className="w-full md:w-2/3 md:pl-8">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6">ON NE TE LAISSE <br/> JAMAIS <span className="font-display text-neon">SEUL</span></h2>
<p className="text-gray-300 text-lg mb-8 font-light">
                    "Chez Neoness, on sait que le plus dur, c'est de rester motivé. C'est pour ça qu'on est présents sur le plateau, pas juste à l'accueil. On corrige tes postures, on adapte ton programme, on te booste."
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-neon text-2xl" icon="solar:user-heart-linear"></iconify-icon>
<span className="text-sm text-gray-400">Suivi personnalisé inclus</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-neon text-2xl" icon="solar:diploma-linear"></iconify-icon>
<span className="text-sm text-gray-400">Coachs diplômés d'État</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 max-w-3xl mx-auto px-6">
<h2 className="text-3xl font-medium text-center text-white mb-12">QUESTIONS FRÉQUENTES</h2>
<div className="space-y-4">
<details className="group bg-surface border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-white font-medium">Comment fonctionne l'essai gratuit ?</span>
<iconify-icon className="text-gray-400 text-xl transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                    C'est très simple. Tu te présentes à l'accueil du club de ton choix, et on te donne accès pour une séance complète. Sans carte bancaire, sans engagement.
                </div>
</details>
<details className="group bg-surface border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-white font-medium">Puis-je résilier facilement ?</span>
<iconify-icon className="text-gray-400 text-xl transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                    Oui, avec l'offre sans engagement, la résiliation se fait en un clic depuis ton espace membre. Le préavis est d'un mois seulement.
                </div>
</details>
<details className="group bg-surface border border-white/5 rounded-xl overflow-hidden transition-all duration-300 open:border-white/10">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<span className="text-white font-medium">Ai-je accès à tous les clubs ?</span>
<iconify-icon className="text-gray-400 text-xl transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="px-6 pb-6 text-sm text-gray-400 leading-relaxed">
                    Absolument. Ton abonnement te donne accès au réseau complet Neoness en France.
                </div>
</details>
</div>
</section>

<section className="py-12 bg-dark border-t border-white/5">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
<div>
<h3 className="text-2xl font-medium text-white mb-4">UN DOUTE ? UN CONSEIL ?</h3>
<p className="text-gray-400 mb-8 text-sm">Laisse-nous ton numéro, un coach t'appelle pour discuter de tes objectifs. Pas de robot, promis.</p>
<div className="flex gap-4 mb-4">
<div className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon className="text-neon" icon="solar:shield-check-linear"></iconify-icon>
                        Confidentiel
                    </div>
<div className="flex items-center gap-2 text-xs text-gray-500">
<iconify-icon className="text-neon" icon="solar:clock-circle-linear"></iconify-icon>
                        Réponse rapide
                    </div>
</div>
</div>
<form className="flex gap-4 items-start">
<input className="flex-1 bg-surface border border-white/10 rounded-xl h-12 px-4 text-white text-sm focus:border-neon outline-none" placeholder="06 12 34 56 78" type="tel"/>
<button className="bg-white text-black font-semibold text-sm px-6 h-12 rounded-xl hover:bg-gray-200 transition-colors whitespace-nowrap" type="submit">
                    M'appeler
                </button>
</form>
</div>
</section>

<section className="py-24 relative overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Footer Gym" className="w-full h-full object-cover opacity-20 grayscale" src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-dark/90"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-6">READY TO <span className="text-neon">SHINE ?</span></h2>
<p className="text-gray-400 mb-10 text-lg">Rejoins le mouvement. Offre 9,90€ valable encore 48h.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-neon hover:bg-red-600 text-white font-medium py-4 px-10 rounded-xl shadow-neon hover:shadow-neon-hover transition-all text-center" href="#offer">
                    Je profite de l'offre
                </a>
<a className="w-full sm:w-auto bg-transparent border border-white/20 text-white hover:bg-white/5 font-medium py-4 px-10 rounded-xl transition-all text-center" href="#">
                    Voir les clubs
                </a>
</div>
<p className="mt-6 text-xs text-gray-500">Satisfait ou remboursé pendant 14 jours.</p>
</div>
</section>

<footer className="bg-dark border-t border-white/5 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-xl font-semibold tracking-tighter text-white uppercase">Neoness</span>
<div className="flex gap-6 text-sm text-gray-500">
<a className="hover:text-white transition-colors" href="#">Mentions légales</a>
<a className="hover:text-white transition-colors" href="#">CGV</a>
<a className="hover:text-white transition-colors" href="#">Presse</a>
</div>
<div className="text-xs text-gray-600">
                © 2024 Neoness. All rights reserved.
            </div>
</div>
</footer>

    </>
  );
}
