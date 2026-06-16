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
      

<nav className="fixed w-full top-0 z-50 bg-[#FCFAF8]/80 backdrop-blur-md border-b border-stone-200/50">
<div className="flex max-w-7xl mr-auto ml-auto pt-5 pr-6 pb-5 pl-6 items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer">

<div className="flex text-white bg-red-800 w-10 h-10 rounded-full items-center justify-center">
</div>
<span className="text-2xl font-medium tracking-tight uppercase text-red-800" style={{letterSpacing: '0.05em'}}>Hes'berry</span>
</div>
<div className="hidden md:flex items-center gap-10">
<a className="text-lg transition-colors text-stone-600 hover:text-red-800" href="#produits">Nos Délices</a>
<a className="text-lg transition-colors text-stone-600 hover:text-red-800" href="#savoir-faire">Savoir-faire</a>
<a className="transition-colors text-lg hover:text-red-800 text-stone-600" href="#hantat">Hannut</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-lg transition-colors text-stone-900 hover:text-red-800">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
                    Panier
                </button>
<button className="md:hidden text-stone-900">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<section className="md:pt-52 md:pb-32 max-w-7xl mr-auto ml-auto pt-40 pr-6 pb-24 pl-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="max-w-2xl">
<div className="inline-flex gap-2 text-sm font-medium border rounded-full mb-8 pt-2 pr-4 pb-2 pl-4 gap-x-2 gap-y-2 items-center text-red-800 bg-red-50 border-red-100">Nouvelle boutique à Hannut<i className="w-4 h-4" data-lucide="map-pin" strokeWidth="1.5"></i></div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-tight mb-8 text-stone-900">
                    La passion de la fraise, <span className="text-transparent bg-clip-text bg-gradient-to-r text-red-800 from-red-800 to-red-600">réinventée.</span>
</h1>
<p className="text-xl md:text-2xl mb-10 leading-relaxed font-light text-stone-600">
                    Bienvenue chez Hes'berry. Découvrez nos créations artisanales où la fraise se décline sous toutes ses formes : pâtisseries, confitures, boissons et douceurs.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-full text-lg font-medium transition-all shadow-sm bg-red-800 text-white hover:bg-red-900 shadow-red-900/20" href="#produits">
                        Découvrir la carte
                        <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
<a className="inline-flex justify-center items-center gap-2 border px-8 py-4 rounded-full text-lg font-medium transition-all bg-white text-stone-900 border-stone-200 hover:bg-stone-50 hover:border-stone-300" href="#hantat">
                        Nous trouver
                    </a>
</div>
</div>
<div className="relative w-full aspect-[4/5] lg:aspect-square rounded-[2rem] overflow-hidden bg-stone-100">
<img alt="Fraises fraîches" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 ring-1 ring-inset rounded-[2rem] ring-black/10"></div>
</div>
</div>
</section>

<section className="py-24 border-y bg-white border-stone-200/50" id="produits">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 text-stone-900">Tout autour du fruit</h2>
<p className="text-xl font-light text-stone-600">De la cueillette à la vitrine, chaque produit Hes'berry est pensé pour sublimer le goût authentique de nos fruits rouges.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-stone-100">
<img alt="Tartelette aux fraises" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 ring-1 ring-inset rounded-2xl ring-black/5"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-2 text-stone-900">Pâtisseries</h3>
<p className="text-lg font-light text-stone-600">Tartelettes, charlottes et macarons finement travaillés tous les matins.</p>
</div>
<span className="text-lg font-medium px-3 py-1 rounded-lg text-red-800 bg-red-50">Frais</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-stone-100">
<img alt="Confiture de fraise" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 ring-1 ring-inset rounded-2xl ring-black/5"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-2 text-stone-900">L'Épicerie</h3>
<p className="text-lg font-light text-stone-600">Confitures cuites au chaudron, sirops artisanaux et coulis intenses.</p>
</div>
<span className="text-lg font-medium px-3 py-1 rounded-lg text-stone-600 bg-stone-100">Maison</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-stone-100">
<img alt="Smoothie fraise" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 ring-1 ring-inset rounded-2xl ring-black/5"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-2 text-stone-900">Bar à Jus</h3>
<p className="text-lg font-light text-stone-600">Smoothies onctueux, thés glacés infusés et limonades rafraîchissantes.</p>
</div>
<span className="text-lg font-medium px-3 py-1 rounded-lg text-stone-600 bg-stone-100">À emporter</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="hantat">
<div className="rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row bg-red-800">
<div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center text-white">
<h2 className="md:text-5xl text-4xl font-medium tracking-tight mb-6">Retrouvez-nous à Hannut</h2>
<p className="text-xl md:text-2xl font-light mb-12 text-red-100">
                    Notre échoppe vous accueille du mardi au dimanche. Venez déguster nos spécialités sur place ou à emporter au cœur de la ville.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<i className="w-6 h-6 mt-1 text-red-200" data-lucide="map-pin" strokeWidth="1.5"></i>
<div className="">
<p className="text-lg font-medium">Hes'berry Hannut</p>
<p className="text-lg font-light text-red-200">Place Centrale, Hannut
</p>
</div>
</div>
<div className="flex items-start gap-4">
<i className="w-6 h-6 mt-1 text-red-200" data-lucide="clock" strokeWidth="1.5"></i>
<div className="">
<p className="text-lg font-medium">Horaires d'ouverture</p>
<p className="text-lg font-light text-red-200">Mar - Dim : 09h00 - 19h00</p>
</div>
</div>
</div>
</div>
<div className="md:w-1/2 min-h-[400px] relative bg-stone-200">

<img alt="Extérieur de la boutique" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</section>

<footer className="border-t pt-20 pb-10 bg-white border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start gap-16 mb-20">
<div className="max-w-md">
<div className="flex items-center gap-2 mb-6">
<span className="text-2xl font-medium tracking-tight uppercase text-red-800" style={{letterSpacing: '0.05em'}}>Hes'berry</span>
</div>
<p className="text-lg font-light mb-8 text-stone-600">
                        L'unique échoppe dédiée à 100% à la fraise. Inscrivez-vous pour recevoir nos nouveautés de saison.
                    </p>
<form className="flex gap-2">
<input className="flex-1 border rounded-xl px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-red-800/20 focus:border-red-800 transition-all bg-stone-50 border-stone-200 text-stone-900" placeholder="Votre adresse email" required="" type="email"/>
<button className="px-6 py-3 rounded-xl text-lg font-medium transition-colors bg-stone-900 text-white hover:bg-stone-800" type="submit">
                            S'inscrire
                        </button>
</form>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-lg font-medium mb-6 text-stone-900">Explorer</h4>
<ul className="space-y-4">
<li><a className="text-lg font-light transition-colors text-stone-600 hover:text-red-800" href="#">Notre carte</a></li>
<li><a className="text-lg font-light transition-colors text-stone-600 hover:text-red-800" href="#">Notre histoire</a></li>
<li><a className="text-lg font-light transition-colors text-stone-600 hover:text-red-800" href="#">Boutique en ligne</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-medium mb-6 text-stone-900">Légal</h4>
<ul className="space-y-4">
<li><a className="text-lg font-light transition-colors text-stone-600 hover:text-stone-900" href="#">Mentions légales</a></li>
<li><a className="text-lg font-light transition-colors text-stone-600 hover:text-stone-900" href="#">Confidentialité</a></li>
<li><a className="text-lg font-light transition-colors text-stone-600 hover:text-stone-900" href="#">CGV</a></li>
</ul>
</div>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-stone-100">
<p className="text-lg font-light text-stone-500">© 2026 Hes'berry Hannut. Tous droits réservés.</p>
<div className="flex items-center gap-4 text-stone-400">
<a className="transition-colors hover:text-stone-900" href="#"><i className="w-6 h-6" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="transition-colors hover:text-stone-900" href="#"><i className="w-6 h-6" data-lucide="facebook" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
</footer>




    </>
  );
}
