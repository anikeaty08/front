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
      

<nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-100/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-display font-medium text-lg tracking-tighter uppercase text-slate-900" href="#">
                Juicy Pop<span className="text-slate-300 mx-1">/</span>Paris
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#restaurant">Le Restaurant</a>
<a className="hover:text-slate-900 transition-colors" href="#off-the-clock">Off The Clock</a>
<a className="hover:text-slate-900 transition-colors" href="#booking">Privatisation</a>
</div>
<a className="group flex items-center gap-2 text-xs font-medium bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all hover:pr-5" href="#booking">
<span>Réserver</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-[20%] left-[10%] w-[30rem] h-[30rem] bg-orange-200/20 rounded-full blur-3xl mix-blend-multiply"></div>
<div className="absolute top-[30%] right-[10%] w-[25rem] h-[25rem] bg-purple-200/20 rounded-full blur-3xl mix-blend-multiply"></div>
</div>
<div className="max-w-5xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-xs font-medium text-slate-500 tracking-wide uppercase">Nouveau Concept à Paris</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-slate-900 mb-8 leading-[1.1]">
                Un espace hybride pour<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">créateurs &amp; gourmands.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Du pop-up culinaire au rez-de-chaussée aux sessions créatives en sous-sol. 
                Le Juicy Pop est votre terrain de jeu modulable au cœur de Paris.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-full hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10">
                    Découvrir les espaces
                </button>
<button className="w-full sm:w-auto px-8 py-3 bg-white border border-slate-200 text-slate-700 text-sm font-medium rounded-full hover:bg-slate-50 transition-colors">
                    Contacter l'équipe
                </button>
</div>
</div>
</header>

<section className="py-24 border-t border-slate-100" id="restaurant">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-start">
<div className="sticky top-32">
<h2 className="font-display text-4xl md:text-5xl font-medium tracking-tighter text-slate-900 mb-6">
                        Le Juicy Pop
                    </h2>
<p className="text-slate-500 text-lg leading-relaxed mb-8">
                        Un espace lumineux et modulable dédié à la gastronomie et aux célébrations. 
                        Conçu pour les chefs en quête de visibilité et les particuliers cherchant l'exceptionnel.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-100 transition-colors">
<iconify-icon icon="solar:chef-hat-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-slate-900 font-medium mb-1">Cuisines Pop-up</h3>
<p className="text-sm text-slate-500">Pour les cuistots testant de nouveaux concepts avant lancement.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center text-rose-600 group-hover:bg-rose-100 transition-colors">
<iconify-icon icon="solar:confetti-minimalistic-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-slate-900 font-medium mb-1">Événements Privés</h3>
<p className="text-sm text-slate-500">Anniversaires, soirées à thèmes, lancements de produits.</p>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-600 group-hover:bg-yellow-100 transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-slate-900 font-medium mb-1">Dîners Collaboratifs</h3>
<p className="text-sm text-slate-500">Un espace de rencontre pour la communauté food parisienne.</p>
</div>
</li>
</ul>
</div>
<div className="grid grid-cols-1 gap-6">

<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-medium uppercase tracking-wider text-slate-400">Ambiance</span>
<iconify-icon className="text-slate-400" icon="solar:sun-2-linear" width="20"></iconify-icon>
</div>
<div className="h-48 w-full bg-white rounded-xl border border-slate-100 mb-4 overflow-hidden flex items-center justify-center relative">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-100 via-white to-white opacity-60"></div>
<div className="grid grid-cols-3 gap-2 p-4 w-full h-full opacity-50">
<div className="bg-slate-50 rounded h-full w-full"></div>
<div className="bg-slate-100 rounded h-full w-full col-span-2"></div>
<div className="bg-slate-100 rounded h-full w-full col-span-2"></div>
<div className="bg-slate-50 rounded h-full w-full"></div>
</div>
</div>
<h4 className="text-slate-900 font-medium">Design Épuré &amp; Chaleureux</h4>
<p className="text-xs text-slate-500 mt-2">Mobilier contemporain, lumière naturelle.</p>
</div>
<div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between mb-6">
<span className="text-xs font-medium uppercase tracking-wider text-slate-400">Capacité</span>
<div className="px-2 py-1 bg-white border border-slate-200 rounded text-xs text-slate-600">60 pers.</div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between text-sm">
<span className="text-slate-600">Configuration Assise</span>
<span className="text-slate-900 font-medium">40 couverts</span>
</div>
<div className="w-full bg-slate-200 rounded-full h-1">
<div className="bg-slate-900 h-1 rounded-full" style={{width: '70%'}}></div>
</div>
<div className="flex items-center justify-between text-sm pt-2">
<span className="text-slate-600">Configuration Cocktail</span>
<span className="text-slate-900 font-medium">60 personnes</span>
</div>
<div className="w-full bg-slate-200 rounded-full h-1">
<div className="bg-slate-900 h-1 rounded-full" style={{width: '100%'}}></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden" id="off-the-clock">
<div className="absolute inset-0 noise-bg opacity-20 pointer-events-none"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="h-px w-8 bg-zinc-600"></div>
<span className="text-zinc-400 text-xs tracking-[0.2em] uppercase">Sous-sol / Niveau -1</span>
</div>
<h2 className="font-display text-5xl md:text-8xl font-medium tracking-tighter text-white uppercase leading-none">
                        Off The<br/><span className="text-zinc-500">Clock</span>.
                    </h2>
</div>
<div className="max-w-md text-zinc-400 text-sm md:text-base font-light">
                    Un refuge créatif souterrain. Ambiance New York 90s, briques brutes et velours. 
                    L'endroit idéal pour créer, répéter ou simplement déconnecter.
                </div>
</div>
<div className="grid md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">

<div className="bg-[#0f0f0f] p-8 md:p-12 hover:bg-[#141414] transition-colors group">
<div className="mb-8 text-zinc-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:microphone-3-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Podcasts &amp; Talk</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Studio insonorisé pour enregistrements, interviews et création de contenu. Atmosphère feutrée propice à la confidence.
                    </p>
</div>

<div className="bg-[#0f0f0f] p-8 md:p-12 hover:bg-[#141414] transition-colors group">
<div className="mb-8 text-zinc-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:music-note-slider-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Répétitions &amp; Live</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Espace acoustique pour groupes, showcase intimes et répétitions. L'esprit garage, le confort en plus.
                    </p>
</div>

<div className="bg-[#0f0f0f] p-8 md:p-12 hover:bg-[#141414] transition-colors group">
<div className="mb-8 text-zinc-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:armchair-2-linear" strokeWidth="1" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-medium mb-3 tracking-tight">Réunions &amp; Chill</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Pour des brainstormings hors cadre ou des après-midi associatifs. Esprit "Positivist" et communautaire.
                    </p>
</div>
</div>

<div className="mt-12 p-6 border border-zinc-800 rounded-lg bg-[#0f0f0f] flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded bg-zinc-800 flex items-center justify-center text-white">
<span className="font-display font-bold text-lg">90</span>
</div>
<div>
<div className="text-sm font-medium text-white">Vibe NYC</div>
<div className="text-xs text-zinc-500">Authenticité garantie</div>
</div>
</div>
<div className="flex-1 w-full md:mx-12">
<div className="flex justify-between text-xs text-zinc-500 mb-2 uppercase tracking-wide">
<span>Chill</span>
<span>Associatif</span>
<span>Creatif</span>
<span>Underground</span>
</div>
<div className="h-px bg-zinc-800 w-full relative">
<div className="absolute top-1/2 -translate-y-1/2 left-[0%] w-2 h-2 rounded-full bg-zinc-600"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[33%] w-2 h-2 rounded-full bg-zinc-600"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-[66%] w-2 h-2 rounded-full bg-zinc-600"></div>
<div className="absolute top-1/2 -translate-y-1/2 right-[0%] w-2 h-2 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-px bg-gradient-to-r from-zinc-800 via-zinc-600 to-white opacity-20"></div>
</div>
</div>
<button className="text-xs uppercase tracking-widest text-zinc-400 border border-zinc-700 px-6 py-3 hover:bg-zinc-800 hover:text-white transition-colors">
                    Explorer le sous-sol
                </button>
</div>
</div>
</section>

<section className="py-24 bg-white" id="booking">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">
                    Réservez votre moment
                </h2>
<p className="text-slate-500">
                    Décrivez votre projet. Que ce soit pour le restaurant ou le sous-sol, nous vous répondons sous 24h.
                </p>
</div>
<form className="space-y-8">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<label className="cursor-pointer custom-checkbox group">
<input checked="" className="hidden" name="space" type="radio"/>
<div className="p-6 border border-slate-200 rounded-xl transition-all hover:border-slate-300">
<div className="flex justify-between items-start mb-2">
<span className="text-slate-900 font-medium">Juicy Pop (RDC)</span>
<div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-slate-400">
<div className="w-2.5 h-2.5 rounded-full bg-slate-900 hidden check-dot"></div>
</div>
</div>
<p className="text-xs text-slate-500">Cuisine, Soirée, Pop-up</p>
</div>
</label>
<label className="cursor-pointer custom-checkbox group">
<input className="hidden" name="space" type="radio"/>
<div className="p-6 border border-slate-200 rounded-xl transition-all hover:border-slate-300">
<div className="flex justify-between items-start mb-2">
<span className="text-slate-900 font-medium">Off The Clock (-1)</span>
<div className="w-5 h-5 rounded-full border border-slate-300 flex items-center justify-center group-hover:border-slate-400">
<div className="w-2.5 h-2.5 rounded-full bg-slate-900 hidden check-dot"></div>
</div>
</div>
<p className="text-xs text-slate-500">Podcast, Répète, Chill</p>
</div>
</label>
</div>
<style>
                    /* Simple CSS for the radio logic within the single block constraint */
                    input[type="radio"]:checked + div { border-color: #0f172a; background-color: #f8fafc; }
                    input[type="radio"]:checked + div .check-dot { display: block; }
                </style>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Nom</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-400" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Email</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-400" placeholder="votre@email.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-700 uppercase tracking-wide">Détails du projet</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400 transition-all placeholder:text-slate-400" placeholder="Date souhaitée, type d'événement, nombre de personnes..." rows="4"></textarea>
</div>
<div className="flex items-center gap-3">
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-slate-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900"></div>
<span className="ml-3 text-xs text-slate-500">Je souhaite aussi m'abonner à la newsletter</span>
</label>
</div>
<button className="w-full bg-slate-900 text-white font-medium text-sm py-4 rounded-lg hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group" type="submit">
                    Envoyer la demande
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:plain-2-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</section>

<footer className="bg-white border-t border-slate-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="font-display font-medium text-lg tracking-tighter uppercase text-slate-900 block mb-6" href="#">
                        Juicy Pop<span className="text-slate-300 mx-1">/</span>Paris
                    </a>
<p className="text-xs text-slate-500 leading-relaxed max-w-[200px]">
                        Espace événementiel &amp; créatif.<br/>
                        Paris, France.
                    </p>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Espaces</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Restaurant</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Off The Clock</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Pop-up Kitchen</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Studio Podcast</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Social</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">TikTok</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">LinkedIn</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 mb-4 text-sm">Légal</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">CGV</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Mentions Légales</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-4">
<p className="text-[10px] text-slate-400 uppercase tracking-wider">© 2023 Juicy Pop Paris. All rights reserved.</p>
<div className="flex gap-4">
<iconify-icon className="text-slate-300" icon="solar:card-recieved-linear" width="20"></iconify-icon>
<iconify-icon className="text-slate-300" icon="solar:wifi-square-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>

    </>
  );
}
