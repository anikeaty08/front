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
      

<nav className="fixed top-0 w-full z-50 border-b border-stone-800 bg-[#0c0a09]/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">

<span className="text-xl font-heading tracking-widest text-white group-hover:text-amber-500 transition-colors font-bold">ENTRE DEUX</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
<a className="hover:text-amber-500 transition-colors uppercase tracking-wide text-xs" href="#prestations">Nos Prestations</a>
<a className="hover:text-amber-500 transition-colors uppercase tracking-wide text-xs" href="#propos">À Propos</a>
<a className="hover:text-amber-500 transition-colors uppercase tracking-wide text-xs" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-amber-950/30 hover:bg-amber-900/40 border border-amber-900/50 px-5 py-2 rounded transition-all text-amber-200" href="tel:0954537757">
<span>09 54 53 77 57</span>
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
</a>

<button className="md:hidden text-stone-400 hover:text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pr-6 pb-20 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-amber-600/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 border-y border-amber-900/40 bg-amber-950/10 text-amber-500 text-xs font-medium mb-8 tracking-widest uppercase">
<iconify-icon icon="solar:cup-hot-linear" width="12"></iconify-icon>
<span>Salon de thé &amp; Traiteur à Valenton</span>
<iconify-icon icon="solar:chef-hat-linear" width="12"></iconify-icon>
</div>
<h1 className="md:text-8xl leading-[1.1] text-5xl text-white font-heading mb-6 drop-shadow-lg">
                ENTRE <span className="text-transparent bg-clip-text bg-gradient-to-b from-amber-200 to-amber-600">DEUX</span>
</h1>
<p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Se retrouver en famille, entre amis pour un moment de convivialité et de partage. Des collations gourmandes et un service traiteur sur mesure.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3 bg-amber-800 text-white text-sm font-medium rounded-sm hover:bg-amber-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-900/20 uppercase tracking-wider" href="#prestations">
                    Découvrir les formules
                </a>
<a className="w-full sm:w-auto px-8 py-3 bg-transparent border border-stone-700 text-stone-300 text-sm font-medium rounded-sm hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 uppercase tracking-wider" href="#contact">
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                    Demander un devis
                </a>
</div>
</div>

<div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto opacity-90">
<div className="aspect-[4/5] rounded-sm overflow-hidden relative group border border-stone-800">
<img alt="Viennoiserie" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 sepia-[0.1]" src="https://images.unsplash.com/photo-1555507036-ab1f40388085?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent opacity-60"></div>
</div>
<div className="aspect-[4/5] rounded-sm overflow-hidden relative group md:mt-12 border border-stone-800">
<img alt="Salon de thé" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 sepia-[0.1]" src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent opacity-60 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="aspect-[4/5] rounded-sm overflow-hidden relative group border border-stone-800">
<img alt="Traiteur" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 sepia-[0.1]" src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent opacity-60"></div>
</div>
<div className="aspect-[4/5] rounded-sm overflow-hidden relative group md:mt-12 border border-stone-800">
<img alt="Ambiance Cozy" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 sepia-[0.2]" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0c0a09] via-transparent to-transparent opacity-60"></div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-stone-800 relative bg-[#120f0e]" id="propos">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-12">

<div className="group text-center md:text-left">
<div className="w-14 h-14 mx-auto md:mx-0 rounded-sm bg-stone-900 border border-amber-900/30 flex items-center justify-center mb-6 group-hover:border-amber-500/50 transition-colors rotate-3 group-hover:rotate-0 duration-300">
<iconify-icon className="text-amber-600 group-hover:text-amber-500 transition-colors" icon="solar:heart-angle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-heading text-white mb-3 tracking-wide">Nos Valeurs</h3>
<p className="text-stone-400 text-sm leading-relaxed">
                        Depuis 2017, nous privilégions la famille, le partage, la convivialité et le respect que nous mettons au cœur de notre travail.
                    </p>
</div>

<div className="group text-center md:text-left">
<div className="w-14 h-14 mx-auto md:mx-0 rounded-sm bg-stone-900 border border-amber-900/30 flex items-center justify-center mb-6 group-hover:border-amber-500/50 transition-colors -rotate-2 group-hover:rotate-0 duration-300">
<iconify-icon className="text-amber-600 group-hover:text-amber-500 transition-colors" icon="solar:shop-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-heading text-white mb-3 tracking-wide">Sur Place ou Emporter</h3>
<p className="text-stone-400 text-sm leading-relaxed">
                        Des collations dans notre salle privative, dans tout autre lieu à proximité ou également à emporter pour vos événements.
                    </p>
</div>

<div className="group text-center md:text-left">
<div className="w-14 h-14 mx-auto md:mx-0 rounded-sm bg-stone-900 border border-amber-900/30 flex items-center justify-center mb-6 group-hover:border-amber-500/50 transition-colors rotate-1 group-hover:rotate-0 duration-300">
<iconify-icon className="text-amber-600 group-hover:text-amber-500 transition-colors" icon="solar:calendar-date-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-heading text-white mb-3 tracking-wide">Privatisation</h3>
<p className="text-stone-400 text-sm leading-relaxed">
                        Un cadre chaleureux et cosy. Nous proposons des privatisations sur des amplitudes horaires de deux heures.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#0c0a09]" id="prestations">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-stone-800 pb-8">
<div>
<h2 className="text-4xl font-heading text-white mb-2">NOS COLLATIONS</h2>
<p className="text-stone-500 max-w-md italic font-serif">"Des formules adaptées à toutes vos envies"</p>
</div>
<a className="text-sm font-semibold uppercase tracking-widest text-amber-600 hover:text-amber-500 flex items-center gap-2" href="#contact">
                    Demander un devis <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-[#151210] border border-stone-800 rounded-sm overflow-hidden hover:border-amber-900/50 transition-colors shadow-lg shadow-black/40">
<div className="aspect-video overflow-hidden relative">
<div className="absolute inset-0 bg-stone-950/20 z-10"></div>
<img alt="Viennoiserie" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1509365465984-1156c5ef5025?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-700 to-transparent"></div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-heading text-white tracking-wide">Formule Viennoiserie</h3>
<span className="text-[10px] font-bold uppercase tracking-wider bg-amber-900/30 text-amber-500 border border-amber-900/50 px-2 py-1 rounded-sm">Matin</span>
</div>
<p className="text-sm text-stone-400 mb-5 font-light">Boisson chaude (café ou thé), boissons fraîches (jus de fruit et eau) et 3 mini viennoiseries.</p>
<div className="flex items-center gap-4 text-xs text-stone-500 uppercase tracking-wider font-medium">
<span className="flex items-center gap-1"><iconify-icon icon="solar:cup-hot-linear" width="12"></iconify-icon> Petit-déjeuner</span>
</div>
</div>
</div>

<div className="group bg-[#151210] border border-stone-800 rounded-sm overflow-hidden hover:border-amber-900/50 transition-colors shadow-lg shadow-black/40">
<div className="aspect-video overflow-hidden relative">
<div className="absolute inset-0 bg-stone-950/20 z-10"></div>
<img alt="Sucré Salé" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-700 to-transparent"></div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-heading text-white tracking-wide">Formule Sucrée - Salée</h3>
<span className="text-[10px] font-bold uppercase tracking-wider bg-stone-800 text-stone-300 border border-stone-700 px-2 py-1 rounded-sm">Favori</span>
</div>
<p className="text-sm text-stone-400 mb-5 font-light">Boissons, 6 bouchées salées (mini clubs, brochettes, quiches) et 3 mini desserts.</p>
<div className="flex items-center gap-4 text-xs text-stone-500 uppercase tracking-wider font-medium">
<span className="flex items-center gap-1"><iconify-icon icon="solar:star-linear" width="12"></iconify-icon> Complet</span>
</div>
</div>
</div>

<div className="group bg-[#151210] border border-stone-800 rounded-sm overflow-hidden hover:border-amber-900/50 transition-colors shadow-lg shadow-black/40">
<div className="aspect-video overflow-hidden relative">
<div className="absolute inset-0 bg-stone-950/20 z-10"></div>
<img alt="Desserts" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="p-6 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-stone-700 to-transparent"></div>
<div className="flex justify-between items-start mb-3">
<h3 className="text-xl font-heading text-white tracking-wide">Formule Sucrée</h3>
<span className="text-[10px] font-bold uppercase tracking-wider bg-stone-800 text-stone-300 border border-stone-700 px-2 py-1 rounded-sm">Goûter</span>
</div>
<p className="text-sm text-stone-400 mb-5 font-light">Boisson chaude, boissons fraîches et 3 mini desserts (cannelé, macaron, paris-brest...).</p>
<div className="flex items-center gap-4 text-xs text-stone-500 uppercase tracking-wider font-medium">
<span className="flex items-center gap-1"><iconify-icon icon="solar:donut-bitten-linear" width="12"></iconify-icon> Douceur</span>
</div>
</div>
</div>
</div>

<div className="mt-12 text-center">
<p className="text-stone-400 text-sm">Également disponible : <span className="text-amber-500">Formule Mix</span> (3 bouchées salées + 3 desserts) et <span className="text-amber-500">Formule Boisson</span> uniquement.</p>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]" id="contact">

<div className="absolute inset-0 bg-[#0c0a09]/95"></div>
<div className="max-w-4xl mx-auto bg-[#171514] border border-amber-900/20 rounded-sm p-8 md:p-12 relative shadow-2xl">

<div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-amber-800"></div>
<div className="absolute top-4 right-4 w-4 h-4 border-r-2 border-t-2 border-amber-800"></div>
<div className="absolute bottom-4 left-4 w-4 h-4 border-l-2 border-b-2 border-amber-800"></div>
<div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-amber-800"></div>
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-heading text-white mb-3">DEMANDE DE DEVIS</h2>
<p className="text-stone-400 text-sm">Laissez-nous un message avec votre demande.</p>
</div>
<form className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-bold text-amber-800 uppercase tracking-widest ml-1" htmlFor="name">Nom</label>
<input className="w-full bg-[#0c0a09] border border-stone-800 rounded-sm px-4 py-3 text-sm text-white placeholder-stone-700 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all" id="name" placeholder="Votre nom" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold text-amber-800 uppercase tracking-widest ml-1" htmlFor="email">Email</label>
<input className="w-full bg-[#0c0a09] border border-stone-800 rounded-sm px-4 py-3 text-sm text-white placeholder-stone-700 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all" id="email" placeholder="votre@email.com" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-bold text-amber-800 uppercase tracking-widest ml-1" htmlFor="phone">Tel</label>
<input className="w-full bg-[#0c0a09] border border-stone-800 rounded-sm px-4 py-3 text-sm text-white placeholder-stone-700 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all" id="phone" placeholder="00 00 00 00 00" type="tel"/>
</div>
<div className="space-y-1">
<label className="text-xs font-bold text-amber-800 uppercase tracking-widest ml-1" htmlFor="date">Date Prestation</label>
<input className="w-full bg-[#0c0a09] border border-stone-800 rounded-sm px-4 py-3 text-sm text-stone-400 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all appearance-none" id="date" type="date"/>
</div>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-xs font-bold text-amber-800 uppercase tracking-widest ml-1" htmlFor="guests">Convives</label>
<select className="w-full bg-[#0c0a09] border border-stone-800 rounded-sm px-4 py-3 text-sm text-stone-400 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all appearance-none" id="guests">
<option>15</option>
<option>20</option>
<option>30</option>
<option>40</option>
<option>50+</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs font-bold text-amber-800 uppercase tracking-widest ml-1" htmlFor="formula">Intérêt</label>
<select className="w-full bg-[#0c0a09] border border-stone-800 rounded-sm px-4 py-3 text-sm text-stone-400 focus:outline-none focus:border-amber-700 focus:ring-1 focus:ring-amber-700 transition-all appearance-none" id="formula">
<option>Formule Viennoiserie</option>
<option>Formule Sucrée - Salée</option>
<option>Formule Mix</option>
<option>Privatisation salle</option>
</select>
</div>
</div>
<div className="pt-6">
<button className="w-full bg-amber-800 text-stone-100 font-bold tracking-widest uppercase py-4 rounded-sm hover:bg-amber-700 transition-colors shadow-lg border-t border-amber-600/20" type="button">
                        Envoyer
                    </button>
</div>
</form>
</div>
</section>

<footer className="border-t border-stone-900 bg-[#0c0a09] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<span className="text-2xl font-heading text-white block mb-4">ENTRE DEUX</span>
<p className="text-stone-500 text-sm max-w-sm leading-relaxed mb-6">
                    Votre partenaire pour des moments conviviaux à Valenton. Création et partage depuis 2017.
                </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-sm bg-stone-900 border border-stone-800 flex items-center justify-center text-stone-500 hover:text-amber-500 hover:border-amber-900 transition-all" href="https://goo.gl/maps/Y3Fo5SpYVu1ChqnZA" target="_blank">
<iconify-icon icon="solar:map-point-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Coordonnées</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li className="flex items-start gap-2">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear" width="14"></iconify-icon>
<span>43 avenue de la Fontaine St Martin<br/>94460 Valenton</span>
</li>
<li className="flex items-center gap-2">
<iconify-icon icon="solar:phone-calling-linear" width="14"></iconify-icon>
<a className="hover:text-amber-500 transition-colors" href="tel:0954537757">09 54 53 77 57</a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4">Horaires</h4>
<ul className="space-y-3 text-sm text-stone-500">
<li className="flex justify-between border-b border-stone-900 pb-2">
<span>Lun - Ven</span>
<span className="text-stone-400">9h - 18h</span>
</li>
<li className="flex justify-between border-b border-stone-900 pb-2">
<span>Samedi</span>
<span className="text-stone-400">9h - 12h</span>
</li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-stone-700">© 2023 Entre Deux.</p>
<div className="flex gap-6 text-xs text-stone-700">
<a className="hover:text-stone-500 transition-colors" href="/mentions-legales">Mentions légales</a>
</div>
</div>
</footer>

    </>
  );
}
