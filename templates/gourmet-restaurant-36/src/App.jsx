import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
<i className="text-white w-5 h-5" data-lucide="flame" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-semibold tracking-tight text-slate-900">Le Durumier</span>
</div>
<div className="hidden md:flex items-center gap-8 text-lg font-medium text-slate-600">
<a className="hover:text-blue-600 transition-colors" href="#specialites">Spécialités</a>
<a className="hover:text-blue-600 transition-colors" href="#menu">Menu</a>
<a className="hover:text-blue-600 transition-colors" href="#galerie">Ambiance</a>
</div>
<a className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-medium py-2 px-5 rounded-full transition-colors flex items-center gap-2" href="#commander">
                Commander
            </a>
</div>
</nav>

<section className="pt-40 pb-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10"></div>
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-lg font-medium mb-8">
<i className="w-5 h-5" data-lucide="utensils-crossed" strokeWidth="1.5"></i>
                Street-food turque &amp; balkanique
            </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-8 leading-tight">
                L'authentique Dürüm, <br className="hidden md:block"/>roulé avec passion.
            </h1>
<p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                Découvrez des viandes marinées avec soin, des pains frais préparés chaque jour et des saveurs généreuses. Sur place ou à emporter, l'excellence de la street-food vous attend.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white text-xl font-medium py-4 px-8 rounded-full transition-all flex items-center justify-center gap-2 shadow-sm" href="#commander">
                    Commander en ligne
                    <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 text-xl font-medium py-4 px-8 rounded-full transition-all border border-slate-200 flex items-center justify-center" href="#menu">
                    Voir le menu
                </a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Notre histoire, votre régal.</h2>
<p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    Au cœur de la ville, Le Durumier élève le classique de la street-food orientale au rang d'artisanat. Notre philosophie est simple : un savoir-faire authentique, des ingrédients sélectionnés avec rigueur et une générosité qui se goûte à chaque bouchée.
                </p>
<p className="text-lg text-slate-600 leading-relaxed">
                    Nous avons créé un lieu où la tradition culinaire rencontre un cadre moderne et chaleureux. Que vous soyez pressé ou que vous souhaitiez prendre le temps, chaque visite est une promesse de qualité et de gourmandise.
                </p>
</div>
<div className="aspect-square bg-slate-200 rounded-3xl relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
<i className="w-24 h-24 text-slate-400 opacity-50" data-lucide="chef-hat" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="specialites">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Nos Spécialités</h2>
<p className="text-xl text-slate-600">L'essence de notre savoir-faire, préparée sous vos yeux.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
<i className="text-blue-600 w-6 h-6" data-lucide="scroll" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Le Dürüm Signature</h3>
<p className="text-lg text-slate-600">Galette moelleuse cuite sur place, viandes grillées à la perfection, crudités croquantes et sauce au choix.</p>
</div>

<div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
<i className="text-blue-600 w-6 h-6" data-lucide="flame-kindling" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">L'Assiette Grillades</h3>
<p className="text-lg text-slate-600">Un assortiment généreux de nos meilleures brochettes, servi avec un boulgour parfumé et une salade fraîche.</p>
</div>

<div className="p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
<i className="text-blue-600 w-6 h-6" data-lucide="droplet" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Sauces Maison</h3>
<p className="text-lg text-slate-600">L'âme de nos plats. Découvrez notre sauce blanche artisanale ou notre secrète sauce Durumier aux épices douces.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white" id="menu">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Notre Carte</h2>
<p className="text-xl text-slate-400">Des recettes simples, des goûts francs.</p>
</div>
<div className="space-y-12">

<div>
<h3 className="text-2xl font-semibold tracking-tight text-blue-400 mb-6 border-b border-slate-800 pb-2">Les Dürüms</h3>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl font-medium text-slate-100">Dürüm Adana</h4>
<p className="text-lg text-slate-400">Brochette de viande hachée épicée, persil, oignons</p>
</div>
<span className="text-xl font-medium text-slate-100">8,50€</span>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl font-medium text-slate-100">Dürüm Poulet Mariné</h4>
<p className="text-lg text-slate-400">Morceaux de poulet tendres, marinade citron &amp; épices</p>
</div>
<span className="text-xl font-medium text-slate-100">8,00€</span>
</div>
</div>
</div>

<div>
<h3 className="text-2xl font-semibold tracking-tight text-blue-400 mb-6 border-b border-slate-800 pb-2">Les Assiettes</h3>
<div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl font-medium text-slate-100">Assiette Mixte</h4>
<p className="text-lg text-slate-400">Assortiment de 3 viandes, boulgour, salade, frites</p>
</div>
<span className="text-xl font-medium text-slate-100">16,00€</span>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="text-xl font-medium text-slate-100">Assiette Végétarienne</h4>
<p className="text-lg text-slate-400">Falafels maison, houmous, salade fraîche, pain</p>
</div>
<span className="text-xl font-medium text-slate-100">12,50€</span>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center text-lg font-medium text-blue-400 hover:text-blue-300 transition-colors" href="#">
                    Télécharger la carte complète <i className="ml-2 w-5 h-5" data-lucide="download" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-16 text-center">Pourquoi choisir Le Durumier ?</h2>
<div className="grid md:grid-cols-3 gap-12">
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
<i className="w-8 h-8" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Qualité Premium</h3>
<p className="text-lg text-slate-600">Des viandes d'origine contrôlée, livrées fraîches et préparées avec nos propres marinades.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
<i className="w-8 h-8" data-lucide="clock" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Service Rapide</h3>
<p className="text-lg text-slate-600">Un repas savoureux servi rapidement, idéal pour votre pause déjeuner ou un dîner sans attente.</p>
</div>
<div className="flex flex-col items-center text-center">
<div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6">
<i className="w-8 h-8" data-lucide="heart-handshake" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-3">Générosité</h3>
<p className="text-lg text-slate-600">L'hospitalité balkanique dans l'assiette : des portions copieuses qui satisferont les plus gourmands.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-50 border-t border-slate-100" id="galerie">
<div className="max-w-7xl mx-auto">
<div className="mb-12 max-w-2xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">L'expérience Durumier</h2>
<p className="text-xl text-slate-600">Plongez dans un décor moderne où le bleu azur de notre enseigne se mêle à la chaleur du bois. Un cadre pensé pour faire de votre repas un moment de détente.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-[400px]">
<div className="bg-slate-200 rounded-2xl md:col-span-2 row-span-2 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300"></div>
</div>
<div className="bg-slate-200 rounded-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300"></div>
</div>
<div className="bg-slate-200 rounded-2xl relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-blue-600 text-white text-center" id="commander">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Prêt à succomber ?</h2>
<p className="text-xl text-blue-100 mb-10">Passez nous voir au 12 Rue des Saveurs pour manger sur place, ou commandez directement en ligne pour profiter de nos plats chez vous.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-blue-600 hover:bg-slate-50 text-xl font-medium py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2">
                    Commander à emporter
                </button>
<button className="bg-blue-700 hover:bg-blue-800 text-white text-xl font-medium py-4 px-8 rounded-full transition-colors flex items-center justify-center border border-blue-500">
                    Livraison via UberEats
                </button>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<i className="text-blue-500 w-6 h-6" data-lucide="flame" strokeWidth="1.5"></i>
<span className="text-xl font-medium text-slate-200 tracking-tight">Le Durumier</span>
</div>
<p className="text-lg">Le Durumier — La passion du goût, roulée avec soin.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-6 h-6" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-6 h-6" data-lucide="facebook" strokeWidth="1.5"></i></a>
</div>
</div>
</footer>


    </>
  );
}
