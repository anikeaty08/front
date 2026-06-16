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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex items-center gap-3">
<div className="relative w-10 h-10 overflow-hidden rounded-full border border-orange-100 shadow-sm bg-white flex items-center justify-center">

<svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M2 12h20"></path>
<path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path>
<path d="m9 4 1 4"></path>
<path d="m15 4-1 4"></path>
<path d="M12 2v10"></path>
</svg>
</div>
<span className="font-semibold text-lg tracking-tight text-zinc-900 leading-tight">
                        La Marmite<br/><span className="text-orange-600">d’Ongola</span>
</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
<a className="hover:text-orange-600 transition-colors" href="#menu">Menu</a>
<a className="hover:text-orange-600 transition-colors" href="#reservation">Réserver</a>
<a className="hover:text-orange-600 transition-colors" href="#cabaret">Cabaret</a>
<a className="hover:text-orange-600 transition-colors" href="#infos">Infos</a>
<a className="bg-zinc-900 text-white px-5 py-2.5 rounded-full hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-200" href="#commande">
                        Commander
                    </a>
</div>

<button className="md:hidden p-2 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-full transition-colors">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Ambiance Restaurant" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/70 to-zinc-950/30"></div>
</div>
<div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 backdrop-blur-md text-orange-400 text-xs font-medium uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                    Ouvert aujourd'hui jusqu'à 01h00
                </div>
<h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                    L'authenticité du goût <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-200">au cœur de Yaoundé</span>
</h1>
<p className="text-lg text-zinc-300 leading-relaxed mb-8 max-w-lg font-light">
                    Découvrez une cuisine camerounaise traditionnelle revisitée dans une ambiance cabaret chaleureuse et urbaine.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="h-12 px-8 bg-orange-600 hover:bg-orange-500 text-white rounded-full flex items-center justify-center gap-2 font-medium transition-all shadow-xl shadow-orange-900/20" href="#reservation">
<span className="iconify" data-icon="lucide:calendar" data-width="18"></span>
                        Réserver une table
                    </a>
<a className="h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white rounded-full flex items-center justify-center gap-2 font-medium transition-all" href="#commande">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="18"></span>
                        Commander à emporter
                    </a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-zinc-50 hover:bg-orange-50/50 transition-colors border border-zinc-100">
<div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
<span className="iconify" data-icon="lucide:chef-hat" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Cuisine Traditionnelle</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Des plats emblématiques comme le Ndolé, le Poulet DG et le Poisson Braisé, préparés avec passion.
                        </p>
</div>
</div>

<div className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-zinc-50 hover:bg-orange-50/50 transition-colors border border-zinc-100">
<div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
<span className="iconify" data-icon="lucide:music" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Ambiance Cabaret</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Vivez des soirées inoubliables avec nos événements live et une atmosphère musicale urbaine.
                        </p>
</div>
</div>

<div className="flex flex-col items-start gap-4 p-6 rounded-2xl bg-zinc-50 hover:bg-orange-50/50 transition-colors border border-zinc-100">
<div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
<span className="iconify" data-icon="lucide:truck" data-width="24"></span>
</div>
<div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Livraison Rapide</h3>
<p className="text-sm text-zinc-500 leading-relaxed">
                            Commandez vos plats favoris et faites-vous livrer partout à Yaoundé. Paiement Mobile Money accepté.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50" id="menu">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight mb-3">Nos Spécialités</h2>
<p className="text-zinc-500">Un voyage culinaire à travers les saveurs du Cameroun.</p>
</div>

<div className="flex gap-2 overflow-x-auto hide-scroll pb-2 w-full md:w-auto">
<button className="px-5 py-2.5 rounded-full bg-zinc-900 text-white text-sm font-medium whitespace-nowrap shadow-md">Tout</button>
<button className="px-5 py-2.5 rounded-full bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 text-sm font-medium whitespace-nowrap transition-colors">Plats Chauds</button>
<button className="px-5 py-2.5 rounded-full bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 text-sm font-medium whitespace-nowrap transition-colors">Grillades</button>
<button className="px-5 py-2.5 rounded-full bg-white text-zinc-600 border border-zinc-200 hover:border-zinc-300 text-sm font-medium whitespace-nowrap transition-colors">Boissons</button>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-zinc-100">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4">
<img alt="Poisson Braisé" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-zinc-900 shadow-sm">
                            4 500 FCFA
                        </div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-zinc-900">Poisson Braisé</h3>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">
                            Bar frais mariné aux épices du pays, cuit au feu de bois, servi avec miondo ou plantains frits.
                        </p>
<button className="w-full py-3 rounded-xl bg-zinc-50 text-zinc-900 font-medium text-sm hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2 group-hover:bg-zinc-900 group-hover:text-white">
<span>Commander</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="group bg-white rounded-3xl p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-zinc-100">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4">
<img alt="Poulet DG" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-zinc-900 shadow-sm">
                            5 000 FCFA
                        </div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-zinc-900">Poulet DG Royal</h3>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">
                            Le classique camerounais. Poulet fermier, plantains mûrs, légumes frais et épices secrètes.
                        </p>
<button className="w-full py-3 rounded-xl bg-zinc-50 text-zinc-900 font-medium text-sm hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2 group-hover:bg-zinc-900 group-hover:text-white">
<span>Commander</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>

<div className="group bg-white rounded-3xl p-3 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-zinc-100">
<div className="relative h-48 rounded-2xl overflow-hidden mb-4">
<img alt="Ndolé" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-zinc-900 shadow-sm">
                            3 500 FCFA
                        </div>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold text-zinc-900">Ndolé Viande</h3>
</div>
<p className="text-sm text-zinc-500 mb-4 line-clamp-2">
                            Feuilles de Ndolé fraîches, arachides, viande de bœuf tendre et crevettes séchées.
                        </p>
<button className="w-full py-3 rounded-xl bg-zinc-50 text-zinc-900 font-medium text-sm hover:bg-zinc-100 transition-colors flex items-center justify-center gap-2 group-hover:bg-zinc-900 group-hover:text-white">
<span>Commander</span>
<span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</div>
</div>
<div className="mt-12 text-center">
<a className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors" href="#">
                    Voir tout le menu
                    <span className="iconify" data-icon="lucide:chevron-right"></span>
</a>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white overflow-hidden relative" id="cabaret">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-600/10 to-transparent"></div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="absolute -inset-4 bg-orange-600/20 blur-3xl rounded-full opacity-50"></div>
<img alt="Concert Live" className="relative rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>

<div className="absolute -bottom-6 -right-6 bg-zinc-800 p-6 rounded-xl border border-white/10 shadow-xl max-w-xs hidden sm:block">
<div className="flex items-center gap-4 mb-3">
<div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center">
<span className="iconify text-white" data-icon="lucide:mic-2" data-width="20"></span>
</div>
<div>
<p className="text-sm font-semibold text-white">Prochain Live</p>
<p className="text-xs text-zinc-400">Ce Vendredi, 20h00</p>
</div>
</div>
<p className="text-xs text-zinc-300 italic">"Une ambiance inoubliable avec les meilleurs artistes locaux."</p>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-semibold tracking-tight mb-6">Soirées Cabaret &amp; <br/><span className="text-orange-500">Ambiance Live</span></h2>
<p className="text-zinc-400 text-lg leading-relaxed mb-8 font-light">
                        La Marmite d’Ongola n'est pas qu'un restaurant, c'est un lieu de vie. Rejoignez-nous pour des soirées rythmées par la musique traditionnelle et urbaine camerounaise.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-zinc-300">
<span className="iconify text-orange-500 mt-1" data-icon="lucide:check-circle-2"></span>
<span>Orchestre live tous les week-ends</span>
</li>
<li className="flex items-start gap-3 text-zinc-300">
<span className="iconify text-orange-500 mt-1" data-icon="lucide:check-circle-2"></span>
<span>Espace privatisable pour anniversaires</span>
</li>
<li className="flex items-start gap-3 text-zinc-300">
<span className="iconify text-orange-500 mt-1" data-icon="lucide:check-circle-2"></span>
<span>Ambiance climatisée et sécurisée</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-white border-b border-orange-500 pb-1 hover:text-orange-400 transition-colors" href="#reservation">
                        Réserver pour une soirée
                        <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reservation">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-100 shadow-xl shadow-zinc-200/50">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-zinc-900 mb-3">Réservez votre table</h2>
<p className="text-zinc-500">Pour un déjeuner d'affaires ou un dîner en famille.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Date</label>
<div className="relative">
<input className="w-full h-12 pl-10 pr-4 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-zinc-900" type="date"/>
<span className="iconify absolute left-3 top-3.5 text-zinc-400" data-icon="lucide:calendar"></span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Heure</label>
<div className="relative">
<select className="w-full h-12 pl-10 pr-4 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-zinc-900 appearance-none">
<option>12:00</option>
<option>13:00</option>
<option>19:00</option>
<option>20:00</option>
<option>21:00</option>
</select>
<span className="iconify absolute left-3 top-3.5 text-zinc-400" data-icon="lucide:clock"></span>
<span className="iconify absolute right-3 top-4 text-zinc-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Personnes</label>
<div className="relative">
<select className="w-full h-12 pl-10 pr-4 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-zinc-900 appearance-none">
<option>2 Personnes</option>
<option>4 Personnes</option>
<option>6+ Personnes</option>
</select>
<span className="iconify absolute left-3 top-3.5 text-zinc-400" data-icon="lucide:users"></span>
<span className="iconify absolute right-3 top-4 text-zinc-400 pointer-events-none" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Téléphone</label>
<div className="relative">
<input className="w-full h-12 pl-10 pr-4 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all text-zinc-900" placeholder="+237 6..." type="tel"/>
<span className="iconify absolute left-3 top-3.5 text-zinc-400" data-icon="lucide:phone"></span>
</div>
</div>
</div>
<button className="w-full h-14 bg-orange-600 text-white font-medium rounded-xl hover:bg-orange-500 transition-all shadow-lg shadow-orange-600/20 flex items-center justify-center gap-2 mt-4" type="submit">
                        Confirmer la réservation
                    </button>
<p className="text-center text-xs text-zinc-400 mt-4">
                        Vous recevrez une confirmation par SMS. Pour les groupes &gt; 10, appelez-nous directement.
                    </p>
</form>
</div>
</div>
</section>

<section className="bg-zinc-900 text-zinc-300 py-20 border-t border-white/5" id="infos">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="col-span-1 lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="M2 12h20"></path>
<path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path>
<path d="M12 2v10"></path>
</svg>
</div>
<span className="text-white font-semibold text-lg">La Marmite</span>
</div>
<p className="text-sm leading-relaxed mb-6 text-zinc-400">
                        Votre restaurant de référence pour une cuisine camerounaise authentique et une ambiance urbaine chaleureuse.
                    </p>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="20"></span></a>
<a className="text-zinc-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="20"></span></a>
</div>
</div>

<div>
<h3 className="text-white font-medium mb-6">Contact</h3>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<span className="iconify text-orange-500 shrink-0 mt-0.5" data-icon="lucide:map-pin"></span>
<span>Nouvelle route Mimboman, derrière l’Hôtel Terminus, Yaoundé</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-orange-500 shrink-0" data-icon="lucide:phone"></span>
<span>+237 6 94 39 52 07</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-orange-500 shrink-0" data-icon="lucide:mail"></span>
<span>lamarmite.dongola19@gmail.com</span>
</li>
</ul>
</div>

<div>
<h3 className="text-white font-medium mb-6">Horaires</h3>
<ul className="space-y-3 text-sm">
<li className="flex justify-between border-b border-white/5 pb-2">
<span>Lundi - Dimanche</span>
<span className="text-white">10h00 - 01h00</span>
</li>
<li className="flex justify-between border-b border-white/5 pb-2">
<span>Service Livraison</span>
<span className="text-white">Jusqu'à 22h00</span>
</li>
</ul>
<div className="mt-6">
<h4 className="text-xs font-semibold uppercase text-zinc-500 mb-3 tracking-wider">Moyens de paiement</h4>
<div className="flex gap-3">
<div className="px-2 py-1 bg-white/5 rounded text-xs border border-white/10">Orange Money</div>
<div className="px-2 py-1 bg-white/5 rounded text-xs border border-white/10">MTN MoMo</div>
<div className="px-2 py-1 bg-white/5 rounded text-xs border border-white/10">Espèces</div>
</div>
</div>
</div>

<div className="h-48 rounded-2xl overflow-hidden bg-zinc-800 relative group">
<img alt="Map" className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity" src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&amp;w=1931&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<a className="px-4 py-2 bg-white text-zinc-900 rounded-lg text-xs font-semibold shadow-lg hover:scale-105 transition-transform" href="https://maps.google.com" target="_blank">
                            Voir sur Google Maps
                        </a>
</div>
</div>
</div>
<div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
<p>© 2024 La Marmite d’Ongola. Tous droits réservés.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-white transition-colors" href="#">Confidentialité</a>
</div>
</div>
</div>
</section>

    </>
  );
}
