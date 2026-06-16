import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
poirot: {
red: '#4c0519',   // Rose-950 (Bordeaux)
gold: '#f59e0b',  // Amber-500 (Brass/Deco)
cream: '#fafaf9', // Stone-50 (Paper)
}
}
}
}
}
function toggleModal(modalID) {
const modal = document.getElementById(modalID);
const backdrop = document.getElementById(modalID + '-backdrop');
if (modal.classList.contains('hidden')) {
modal.classList.remove('hidden');
backdrop.classList.remove('hidden');
document.body.style.overflow = 'hidden';
} else {
modal.classList.add('hidden');
backdrop.classList.add('hidden');
document.body.style.overflow = '';
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-stone-50/90 backdrop-blur-md border-b border-stone-200 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 bg-stone-900 text-stone-50 rounded-full flex items-center justify-center font-serif text-xl italic group-hover:bg-rose-900 transition-colors">
                    P
                </div>
<div className="flex flex-col">
<span className="text-xl font-bold font-serif tracking-tight text-stone-900 leading-none">Monsieur Poirot</span>
<span className="text-[10px] uppercase tracking-widest text-stone-500">Paris 11e</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-600">
<a className="hover:text-rose-900 transition-colors" href="#concept">L'Enquête</a>
<a className="hover:text-rose-900 transition-colors" href="#cave">La Cave</a>
<a className="hover:text-rose-900 transition-colors" href="#menu">Le Menu</a>
<a className="hover:text-rose-900 transition-colors" href="#infos">Infos</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-1 text-xs font-semibold text-stone-400 hover:text-stone-900 transition-colors uppercase tracking-wider">
<span className="text-stone-900">FR</span><span className="text-stone-300">/</span>EN
                </button>
<button className="bg-stone-900 text-stone-50 px-5 py-2.5 rounded-full text-xs font-medium uppercase tracking-wider hover:bg-rose-900 transition-all shadow-lg hover:shadow-rose-900/20 flex items-center gap-2" onclick="toggleModal('reservation-modal')">
<iconify-icon className="text-lg" icon="solar:calendar-linear"></iconify-icon>
                    Réserver
                </button>
</div>
</div>
</nav>

<header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Intérieur Bistrot Monsieur Poirot" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=2560&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/60 to-stone-900/90"></div>
</div>
<div className="relative z-10 text-center max-w-4xl px-6 space-y-8 fade-up">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-stone-100 mb-4">
<iconify-icon className="text-amber-400" icon="solar:star-bold"></iconify-icon>
<span className="text-xs font-medium tracking-wide">9.3/10 sur TheFork • Excellence 2023</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-50 font-medium italic tracking-tight leading-[1.1]">
                Le Repaire des <br/>
<span className="not-italic text-white">Esprits Libres</span>
</h1>
<p className="text-lg md:text-xl text-stone-200 max-w-xl mx-auto font-light leading-relaxed">
                Une cuisine fusion voyageuse signée <strong>Djibi Sow</strong> et une cave secrète au cœur du 11ème. Élucidez le mystère d'un dîner parfait.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
<button className="w-full sm:w-auto px-8 py-4 bg-white text-stone-900 rounded-lg font-serif italic text-lg hover:bg-stone-100 transition-colors shadow-xl" onclick="toggleModal('reservation-modal')">
                    Réserver votre table
                </button>
<a className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white rounded-lg text-sm font-medium uppercase tracking-widest hover:bg-white/10 transition-colors backdrop-blur-sm" href="#menu">
                    Voir la Carte
                </a>
</div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
<iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</header>

<section className="py-24 px-6 bg-stone-50" id="concept">
<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-stone-300 opacity-50"></div>
<img alt="Chef Djibi Sow Cuisine" className="hover:grayscale-0 transition-all duration-700 w-full h-auto object-cover rounded-lg shadow-2xl grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dce6abbd-c6ae-40a8-919c-bcf291b81368_1600w.jpg"/>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-stone-300 opacity-50"></div>
</div>
<div className="space-y-6">
<div className="flex items-center gap-3 text-rose-900">
<iconify-icon className="text-2xl" icon="solar:magnifer-linear"></iconify-icon>
<span className="text-sm font-bold uppercase tracking-widest">L'Enquête Gustative</span>
</div>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
                    Comme notre détective favori, notre cuisine ne connaît pas de frontières.
                </h2>
<div className="space-y-4 text-stone-600 leading-relaxed text-lg font-light">
<p>
                        Au 23 Rue Sedaine, nous ne servons pas simplement à dîner, nous racontons des histoires. Celles du <strong>Chef Djibi Sow</strong>, architecte d'un pont audacieux entre la tradition française — imaginez une <em>Blanquette de Veau</em> mijotée 5h — et ses pérégrinations culinaires, incarnées par notre célèbre <em>Poulpe à la Plancha</em>.
                    </p>
<p>
                        Nous sommes un bistrot à l'âme rétro mais au cœur moderne. Un lieu chaleureux fait de bois, de velours et de rires, où l'on vient pour l'apéro et où l'on reste pour la nuit.
                    </p>
</div>
<div className="pt-4 flex gap-8 border-t border-stone-200 mt-8">
<div className="">
<span className="block text-3xl font-serif text-stone-900">2016</span>
<span className="text-xs uppercase tracking-wider text-stone-500">Année d'ouverture</span>
</div>
<div>
<span className="block text-3xl font-serif text-stone-900">Fusion</span>
<span className="text-xs uppercase tracking-wider text-stone-500">Le Style Culinaire</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-rose-950 text-stone-100 relative overflow-hidden" id="cave">
<div className="absolute top-0 right-0 w-96 h-96 bg-black/20 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none"></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
<iconify-icon className="text-4xl text-poirot-gold mb-2" icon="solar:wineglass-linear"></iconify-icon>
<h2 className="text-4xl md:text-5xl font-serif italic text-white">La Cave Secrète</h2>
<p className="text-stone-300 text-lg">Ne lisez pas la carte des vins, vivez-la.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
<div className="h-12 w-12 rounded-full bg-poirot-gold/10 text-poirot-gold flex items-center justify-center text-xl font-serif italic mb-6 group-hover:bg-poirot-gold group-hover:text-stone-900 transition-colors duration-300 shadow-inner shadow-white/5">1</div>
<h3 className="text-xl font-serif text-white mb-3 tracking-wide">Descendez</h3>
<p className="leading-relaxed group-hover:opacity-100 transition-opacity text-sm font-light text-stone-400 opacity-90" style={{}}>Accédez à notre cave. Un sanctuaire intime loin de l'agitation parisienne, où Chanel a sélectionné des pépites.</p>
</div>

<div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
<div className="h-12 w-12 rounded-full bg-poirot-gold/10 text-poirot-gold flex items-center justify-center text-xl font-serif mb-6 group-hover:bg-poirot-gold group-hover:text-stone-900 transition-colors">2</div>
<h3 className="text-xl font-serif text-white mb-3">Choisissez</h3>
<p className="text-stone-400 text-sm leading-relaxed">
                        Pas de carte impersonnelle. Prenez la bouteille en main, lisez l'étiquette, laissez-vous guider par votre instinct ou nos conseils.
                    </p>
</div>

<div className="border-poirot-gold/30 hover:bg-poirot-gold/10 transition-colors group overflow-hidden bg-white/5 border rounded-xl pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm">
<div className="h-12 w-12 rounded-full bg-poirot-gold/10 text-poirot-gold flex items-center justify-center text-xl font-serif mb-6 group-hover:bg-poirot-gold group-hover:text-stone-900 transition-colors">3</div>
<h3 className="text-xl font-serif text-white mb-3">Dégustez au Prix Cave</h3>
<p className="text-stone-400 text-sm leading-relaxed">
                        Notre règle d'or : vous payez le  + un droit de bouchon unique. Buvez des grands crus, sans le coefficient x3 habituel.
                    </p>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-stone-400 text-sm italic">La cave est aussi privatisable pour vos événements (jusqu'à 15 personnes).</p>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-100" id="menu">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16 space-y-2">
<span className="text-xs font-bold uppercase tracking-widest text-rose-900">Carte de Saison</span>
<h2 className="text-4xl md:text-5xl font-serif text-stone-900">Les Indices du Chef</h2>
<p className="text-stone-500">Cuisine faite maison par Djibi Sow &amp; son équipe.</p>
</div>

<div className="mb-12 bg-white rounded-xl p-6 border border-stone-200 shadow-sm text-center">
<div className="flex flex-col items-center">
<span className="bg-stone-100 text-stone-500 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">Arrivage Frais</span>
<h3 className="text-2xl font-serif text-stone-900 mb-2">Huîtres Fines de Claire n°3</h3>
<div className="w-16 h-[1px] bg-rose-900 my-3"></div>
<p className="text-lg font-serif italic text-stone-700">
                        Les 6 : <span className="text-rose-900 font-bold">13€</span>  /  Les 12 : <span className="text-rose-900 font-bold">24€</span>
</p>
</div>
</div>

<div className="mb-16">
<h3 className="text-2xl font-serif text-stone-800 mb-8 flex items-center gap-4">
<span className="w-8 h-[1px] bg-stone-400"></span>
                    Entrées
                    <span className="w-8 h-[1px] bg-stone-400"></span>
</h3>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-8">

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Carpaccio de Betterave</h4>
<span className="font-serif italic text-lg text-stone-800">7.5€</span>
</div>
<p className="text-sm text-stone-500">Ricotta aux épices et herbes fraîches.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Soupe de Courge</h4>
<span className="font-serif italic text-lg text-stone-800">8.5€</span>
</div>
<p className="text-sm text-stone-500">Crème coco, graines grillées aux épices, croûtons.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Pain Cristal</h4>
<span className="font-serif italic text-lg text-stone-800">6.5€</span>
</div>
<p className="text-sm text-stone-500">Grillé à l'ail, tartare de tomate &amp; herbes. <span className="text-stone-400 italic">(Jambon Serrano +2,5€)</span></p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Œuf Mimosa</h4>
<span className="font-serif italic text-lg text-stone-800">8.5€</span>
</div>
<p className="text-sm text-stone-500">Oignons grillés et herbes fraîches.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Salade de Chèvre Chaud</h4>
<span className="font-serif italic text-lg text-stone-800">10.0€</span>
</div>
<p className="text-sm text-stone-500">Miel sur tartine, salade, noix. <span className="text-stone-400 italic">(Sup Frites +6,50€)</span></p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Mille-Feuille Vegan</h4>
<span className="font-serif italic text-lg text-stone-800">12.0€</span>
</div>
<p className="text-sm text-stone-500">Betterave, poivrons marinés, lait soja, olive. <span className="text-green-700 font-medium text-[10px] border border-green-200 rounded px-1 ml-1">VEGAN</span></p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Quesadillas</h4>
<span className="font-serif italic text-lg text-stone-800">9.0€</span>
</div>
<p className="text-sm text-stone-500">Mozzarella, cheddar, roquette, épinard, oignons confits.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Petit Poulpe Plancha</h4>
<span className="font-serif italic text-lg text-stone-800">14.5€</span>
</div>
<p className="text-sm text-stone-500">Écrasé de PDT au confit d'ail, poivrons rouges, paprika fumé.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Burrata des Pouilles</h4>
<span className="font-serif italic text-lg text-stone-800">18.0€</span>
</div>
<p className="text-sm text-stone-500">Duo tomate cerise, herbes fraîches et pesto.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Mini Tartare de Saumon</h4>
<span className="font-serif italic text-lg text-stone-800">13.5€</span>
</div>
<p className="text-sm text-stone-500">Aneth, cébette, concombre et chips de légumes.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Cecina de Leon</h4>
<span className="font-serif italic text-lg text-stone-800">12.0€</span>
</div>
<p className="text-sm text-stone-500">Bœuf persillé sur planche, cornichon aigre-doux.</p>
</div>
</div>
</div>

<div className="mb-16">
<h3 className="text-2xl font-serif text-stone-800 mb-8 flex items-center gap-4">
<span className="w-8 h-[1px] bg-stone-400"></span>
                    Plats
                    <span className="w-8 h-[1px] bg-stone-400"></span>
</h3>

<div className="bg-rose-900/5 p-6 rounded-xl border border-rose-900/10 flex flex-col items-center justify-center text-center mb-10 relative overflow-hidden group">
<div className="absolute top-0 right-0 bg-rose-900 text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest z-10">Plat du Moment</div>
<h4 className="text-xl font-serif font-bold text-stone-900 mb-2">Hachis Parmentier de Confit de Canard</h4>
<p className="text-stone-600 text-sm mb-4">Servi avec sa salade fraîche.</p>
<div className="flex items-center gap-4 text-sm font-serif italic text-rose-900 border px-4 py-2 border-rose-900/20 rounded-full bg-white">
<span>Midi 13.5€</span>
<span className="w-px h-3 bg-rose-900/30"></span>
<span>Soir 17.0€</span>
</div>
</div>

<div className="grid md:grid-cols-2 gap-x-12 gap-y-8 mb-12">

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Filet de Truite (FR)</h4>
<span className="font-serif italic text-lg text-stone-800">23.0€</span>
</div>
<p className="text-sm text-stone-500">Sauce blanche, purée patate douce, jeunes pousses.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Pavé de Veau (FR)</h4>
<span className="font-serif italic text-lg text-stone-800">23.0€</span>
</div>
<p className="text-sm text-stone-500">Frites, Salade, Sauce Béarnaise.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Osso Bucco à l'Italienne</h4>
<span className="font-serif italic text-lg text-stone-800">24.0€</span>
</div>
<p className="text-sm text-stone-500">Accompagné de ses tagliatelles fraîches.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Poulpe Plancha</h4>
<span className="font-serif italic text-lg text-stone-800">27.0€</span>
</div>
<p className="text-sm text-stone-500">Écrasé de PDT, confit d'ail, poivrons rouges, paprika fumé.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Chilli Végétarien</h4>
<span className="font-serif italic text-lg text-stone-800">16.5€</span>
</div>
<p className="text-sm text-stone-500">Avec son riz basmati. <span className="text-green-700 font-medium text-[10px] border border-green-200 rounded px-1 ml-1">VÉGÉ</span></p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Linguine Carbonara Végé</h4>
<span className="font-serif italic text-lg text-stone-800">16.5€</span>
</div>
<p className="text-sm text-stone-500">Butternut, patate douce, courgette, aubergine, poireau. <span className="text-green-700 font-medium text-[10px] border border-green-200 rounded px-1 ml-1">VÉGÉ</span></p>
</div>

<div className="group md:col-span-2">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900 group-hover:text-rose-900 transition-colors">Entrecôte Holstein Maturée (260g)</h4>
<span className="font-serif italic text-lg text-stone-800">27.0€</span>
</div>
<p className="text-sm text-stone-500">Frites et Salade ou Wok de Légumes, Sauce au Bleu.</p>
</div>
</div>

<div className="mb-12">
<h4 className="text-lg font-serif font-bold text-stone-900 mb-6 border-l-2 border-rose-900 pl-3">Nos Burgers Maison <span className="text-xs font-sans font-normal text-stone-500 ml-2">(Frites maison &amp; salade incluses)</span></h4>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
<div className="flex justify-between items-center group">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Cheeseburger Bœuf Angus</span>
<span className="font-serif italic text-stone-800">17.5€</span>
</div>
<div className="flex justify-between items-center group">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Végé/Vegan Steak Maison <span className="text-xs text-stone-400 font-normal ml-1">Légumes grillés</span></span>
<span className="font-serif italic text-stone-800">16.5€</span>
</div>
<div className="flex justify-between items-center group">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Steak de Poulet Crispy</span>
<span className="font-serif italic text-stone-800">17.0€</span>
</div>
<div className="flex justify-between items-center group">
<span className="text-stone-800 font-medium group-hover:text-rose-900 transition-colors">Steak Cabillaud Maison <span className="text-xs text-stone-400 font-normal ml-1">Sauce tartare</span></span>
<span className="font-serif italic text-stone-800">17.0€</span>
</div>
</div>
</div>

<div className="bg-stone-900 text-stone-100 p-6 rounded-xl flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl">
<div className="flex items-center gap-4">
<div className="p-3 bg-white/10 rounded-full text-poirot-gold">
<iconify-icon className="text-2xl" icon="solar:chef-hat-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold font-serif text-white">Côte de Bœuf Holstein (1-1.2kg)</h4>
<p className="text-stone-400 text-xs mt-1">Maturée 3-4 semaines. Pour 2 personnes.</p>
<p className="text-stone-500 text-[10px] mt-1">Servie avec frites et salade maison.</p>
</div>
</div>
<div className="text-2xl font-serif italic text-poirot-gold">72.0€</div>
</div>
</div>

<div>
<h3 className="text-2xl font-serif text-stone-800 mb-8 flex items-center gap-4">
<span className="w-8 h-[1px] bg-stone-400"></span>
                    Desserts
                    <span className="w-8 h-[1px] bg-stone-400"></span>
</h3>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-8">

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900">Tiramisu Café Amaretto</h4>
<span className="font-serif italic text-lg text-stone-800">8.5€</span>
</div>
<p className="text-sm text-stone-500">Le classique revisité.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900">Mi-Cuit Chocolat Noir</h4>
<span className="font-serif italic text-lg text-stone-800">12.0€</span>
</div>
<p className="text-sm text-stone-500">Avec sa glace vanille.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900">Café Gourmand</h4>
<span className="font-serif italic text-lg text-stone-800">12.0€</span>
</div>
<p className="text-sm text-stone-500">Avec 3 douceurs. <span className="text-stone-400 italic">(Thé +1,50€)</span></p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900">Dessert Vegan Exotique</h4>
<span className="font-serif italic text-lg text-stone-800">11.0€</span>
</div>
<p className="text-sm text-stone-500">Tapioca, lait coco, mangue, passion. <span className="text-green-700 font-medium text-[10px] border border-green-200 rounded px-1 ml-1">VEGAN</span></p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900">Glace du Moment</h4>
<span className="font-serif italic text-lg text-stone-800">8.5€</span>
</div>
<p className="text-sm text-stone-500">3 parfums au choix (Vanille, Chocolat, Citron, Passion...)</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900">Mousse au Chocolat Noir</h4>
<span className="font-serif italic text-lg text-stone-800">7.5€</span>
</div>
<p className="text-sm text-stone-500">Aux zestes d'orange.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900">Panna Cotta</h4>
<span className="font-serif italic text-lg text-stone-800">8.0€</span>
</div>
<p className="text-sm text-stone-500">À la cardamome et coulis de fruits rouges.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900">Tarte Citron Meringuée</h4>
<span className="font-serif italic text-lg text-stone-800">8.5€</span>
</div>
<p className="text-sm text-stone-500">Fraîcheur acidulée.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900">Cheesecake Pistache</h4>
<span className="font-serif italic text-lg text-stone-800">9.0€</span>
</div>
<p className="text-sm text-stone-500">Pistache Framboise.</p>
</div>

<div className="group">
<div className="flex justify-between items-baseline mb-1 border-b border-stone-300 border-dashed pb-1">
<h4 className="font-medium text-stone-900">Crème de Crème</h4>
<span className="font-serif italic text-lg text-stone-800">9.0€</span>
</div>
<p className="text-sm text-stone-500">Onctueuse crème au miel, pistache et noix.</p>
</div>
</div>
</div>
<div className="mt-12 text-center">
<p className="text-xs text-stone-400 uppercase tracking-widest">Nous servons l'eau minérale d'exception Mondariz</p>
</div>
</div>
</section>

<section className="bg-stone-900 text-stone-300 pt-20 pb-10 border-t border-stone-800" id="infos">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 mb-16">

<div className="h-80 w-full rounded-xl overflow-hidden border border-stone-700 map-filter relative group">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937615!2d2.3698887768547225!3d48.85406597133036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e672005934529d%3A0x7e8c07e26b4859a1!2s23%20Rue%20Sedaine%2C%2075011%20Paris!5e0!3m2!1sen!2sfr!4v1709220000000!5m2!1sen!2sfr" style={{border: '0'}} width="100%"></iframe>
<div className="absolute bottom-4 left-4">
<a className="bg-white text-stone-900 px-4 py-2 rounded-lg text-xs font-bold shadow-lg hover:bg-stone-200 transition-colors flex items-center gap-2" href="https://maps.google.com/?q=23+Rue+Sedaine+75011+Paris" target="_blank">
<iconify-icon icon="solar:map-arrow-up-bold"></iconify-icon>
                        Itinéraire (Bastille)
                    </a>
</div>
</div>

<div className="space-y-8">
<div>
<h3 className="text-2xl font-serif text-white mb-6">Informations Pratiques</h3>
<div className="grid sm:grid-cols-2 gap-8">
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-500 text-xl mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<h4 className="text-white font-medium text-sm">Adresse</h4>
<p className="text-sm text-stone-400">23 Rue Sedaine,<br/>75011 Paris</p>
<p className="text-xs text-stone-600 mt-1">Métro: Bastille (L1, 5, 8) / Bréguet-Sabin (L5)</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-500 text-xl mt-1" icon="solar:phone-calling-linear"></iconify-icon>
<div>
<h4 className="text-white font-medium text-sm">Téléphone</h4>
<a className="text-sm text-stone-400 hover:text-white underline decoration-stone-700 underline-offset-4" href="tel:+33148067697">+33 1 48 06 76 97</a>
</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-stone-500 text-xl mt-1" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<h4 className="text-white font-medium text-sm">Horaires</h4>
<ul className="text-sm text-stone-400 space-y-1">
<li className="flex justify-between w-full gap-4"><span>Lun - Sam</span> <span>12h-14h30 / 19h-23h30</span></li>
<li className="flex justify-between w-full gap-4 text-white font-medium"><span>Dimanche</span> <span>Ouvert (Brunch)</span></li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="p-6 bg-stone-800/50 rounded-xl border border-stone-700/50">
<p className="italic text-stone-400 mb-4">"Kind regards from Monsieur Poirot. We look forward to welcoming you."</p>
<div className="flex gap-4">
<a className="text-stone-500 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect" width="20"></iconify-icon></a>
<a className="text-stone-500 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:instagram-filled" width="20"></iconify-icon></a>
<a className="text-stone-500 hover:text-white transition-colors" href="#"><iconify-icon icon="simple-icons:tripadvisor" width="20"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600 gap-4">
<p>© 2024 Monsieur Poirot Paris. Tous droits réservés.</p>
<div className="flex gap-4">
<a className="hover:text-stone-400" href="#">Mentions Légales</a>
<a className="hover:text-stone-400" href="#">Politique de Confidentialité</a>
</div>
</div>
</section>

<div className="fixed inset-0 bg-stone-900/60 backdrop-blur-sm z-[60] hidden transition-opacity duration-300" id="reservation-modal-backdrop" onclick="toggleModal('reservation-modal')"></div>
<div className="fixed inset-0 z-[70] flex items-center justify-center p-4 hidden pointer-events-none" id="reservation-modal">
<div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto modal-animate flex flex-col max-h-[90vh]">

<div className="bg-rose-950 text-white p-6 flex justify-between items-start">
<div>
<h3 className="text-xl font-serif">Réserver une table</h3>
<p className="text-stone-300 text-xs mt-1">Confirmation instantanée par email.</p>
</div>
<button className="text-stone-400 hover:text-white" onclick="toggleModal('reservation-modal')">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="p-6 overflow-y-auto">
<form className="space-y-5" onsubmit="event.preventDefault(); alert('Merci ! Votre demande a été envoyée à Monsieur Poirot.'); toggleModal('reservation-modal');">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-stone-500">Date</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-900 focus:border-transparent" required="" type="date"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-stone-500">Heure</label>
<select className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-900 focus:border-transparent">
<option>12:00</option>
<option>12:30</option>
<option>13:00</option>
<option>13:30</option>
<option disabled="">---</option>
<option>19:00</option>
<option>19:30</option>
<option selected="">20:00</option>
<option>20:30</option>
<option>21:00</option>
</select>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-stone-500">Couverts</label>
<div className="flex gap-2">
<label className="flex-1 cursor-pointer">
<input checked="" className="peer sr-only" name="guests" type="radio" value="2"/>
<div className="text-center py-2 border border-stone-200 rounded-lg text-sm peer-checked:bg-rose-900 peer-checked:text-white transition-all hover:bg-stone-50">2</div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="guests" type="radio" value="3"/>
<div className="text-center py-2 border border-stone-200 rounded-lg text-sm peer-checked:bg-rose-900 peer-checked:text-white transition-all hover:bg-stone-50">3</div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="guests" type="radio" value="4"/>
<div className="text-center py-2 border border-stone-200 rounded-lg text-sm peer-checked:bg-rose-900 peer-checked:text-white transition-all hover:bg-stone-50">4</div>
</label>
<label className="flex-1 cursor-pointer">
<input className="peer sr-only" name="guests" type="radio" value="5+"/>
<div className="text-center py-2 border border-stone-200 rounded-lg text-sm peer-checked:bg-rose-900 peer-checked:text-white transition-all hover:bg-stone-50">5+</div>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-bold uppercase text-stone-500">Vos Coordonnées</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm mb-2 focus:outline-none focus:ring-2 focus:ring-rose-900 tdfocus-1770412423065" placeholder="Nom complet" required="" type="text"/>
<input className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-900" placeholder="Téléphone mobile" required="" type="tel"/>
</div>
<div className="bg-stone-50 p-3 rounded-lg border border-stone-200 flex items-start gap-3">
<iconify-icon className="text-poirot-gold mt-0.5" icon="solar:cup-hot-linear"></iconify-icon>
<div className="text-xs text-stone-600">
                             Le café est offert pour toute réservation effectuée en direct via ce formulaire.
                        </div>
</div>
<button className="w-full bg-rose-900 hover:bg-rose-800 text-white font-medium py-3 rounded-lg transition-colors shadow-lg" type="submit">
                        Confirmer la réservation
                    </button>
</form>
</div>
</div>
</div>

    </>
  );
}
