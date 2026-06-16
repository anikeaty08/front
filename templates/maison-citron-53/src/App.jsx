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
      

<header className="absolute top-0 left-0 w-full z-50 py-8 px-8 md:px-16 flex items-center justify-between">
<div className="flex-1">
<span className="font-serif text-2xl tracking-[0.15em] text-[#1C1A17] uppercase">Maison Citron</span>
</div>
<nav className="hidden md:flex items-center gap-12 flex-1 justify-center">
<a className="text-sm font-light text-[#1C1A17] hover:text-black/60 transition-colors uppercase tracking-widest" href="#collection">Collections</a>
<a className="text-sm font-light text-[#1C1A17] hover:text-black/60 transition-colors uppercase tracking-widest" href="#savoir-faire">Notre Histoire</a>
<a className="text-sm font-light text-[#1C1A17] hover:text-black/60 transition-colors uppercase tracking-widest" href="#avis">Avis</a>
<a className="text-sm font-light text-[#1C1A17] hover:text-black/60 transition-colors uppercase tracking-widest" href="#faq">FAQ</a>
</nav>
<div className="flex items-center justify-end flex-1 gap-6">
<button className="text-[#1C1A17] hover:opacity-70 transition-opacity">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</button>
<button className="md:hidden text-[#1C1A17]">
<i className="w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>
<main className="flex-grow">

<section className="min-h-screen overflow-hidden flex flex-col pt-32 pb-24 relative justify-center">

<div className="absolute inset-y-0 right-0 w-full md:w-3/4 lg:w-2/3 h-full z-0">
<img alt="Tarte au citron" className="object-center opacity-90 w-full h-full object-cover" src="https://images.unsplash.com/photo-1694837493215-b78d0a8c811e?w=3840&amp;q=80"/>
<div className="bg-gradient-to-r from-[#F9F8F6] via-[#F9F8F6]/80 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="max-w-[1400px] mx-auto px-8 md:px-16 w-full relative z-10">
<div className="max-w-2xl">
<h1 className="font-serif text-6xl md:text-8xl lg:text-[7rem] font-normal tracking-tight text-[#1C1A17] leading-[1.05] mb-8">
                        L’Équilibre<br/>Parfait.
                    </h1>
<p className="text-xl md:text-2xl text-[#656058] font-light leading-relaxed max-w-lg mb-12">
                        Une pâte sablée croustillante, une crème au citron jaune de Menton intense, préparée à la main chaque matin.
                    </p>
<a className="inline-flex items-center justify-center hover:bg-[#3A2D25] transition-all duration-300 text-base font-light text-white tracking-wide bg-yellow-500 rounded-full px-10 py-4" href="#collection">
                        Découvrir la collection
                    </a>
</div>
</div>
<div className="absolute bottom-12 left-8 md:left-16 z-10">
<i className="w-6 h-6 text-[#1C1A17] opacity-60" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
<button className="absolute bottom-12 right-8 md:right-16 z-10 w-14 h-14 bg-[#4A3B32] rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform shadow-lg">
<i className="w-5 h-5" data-lucide="shopping-bag" strokeWidth="1.5"></i>
</button>
</section>

<section className="bg-[#F9F8F6] pt-24 pb-24">
<div className="max-w-[1400px] mx-auto px-8 md:px-16">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
<div className="">
<h4 className="font-serif text-2xl font-normal tracking-tight text-[#1C1A17] mb-4">Finition premium</h4>
<p className="text-lg font-light leading-relaxed text-[#656058]">Un visuel élégant, digne des plus grandes maisons, pour une expérience de dégustation inoubliable.</p>
</div>
<div>
<h4 className="font-serif text-2xl font-normal tracking-tight text-[#1C1A17] mb-4">Ingrédients nobles</h4>
<p className="text-lg font-light leading-relaxed text-[#656058]">Citrons de Menton IGP, beurre AOP, œufs de plein air de fermes locales sélectionnées.</p>
</div>
<div>
<h4 className="font-serif text-2xl font-normal tracking-tight text-[#1C1A17] mb-4">100% fait main</h4>
<p className="text-lg font-light leading-relaxed text-[#656058]">Chaque tarte est confectionnée artisanalement, de la pâte sablée au pochage final.</p>
</div>
<div>
<h4 className="font-serif text-2xl font-normal tracking-tight text-[#1C1A17] mb-4">Saveur équilibrée</h4>
<p className="text-lg font-light leading-relaxed text-[#656058]">Une recette affinée pour trouver le point de tension parfait entre l'acidulé et le sucré.</p>
</div>
</div>
</div>
</section>

<section className="bg-[#F9F8F6] pt-32 pb-32" id="collection">
<div className="max-w-[1400px] mx-auto px-8 md:px-16">
<div className="flex flex-col md:flex-row justify-between items-baseline mb-20">
<div className="">
<span className="text-xs font-medium tracking-[0.2em] uppercase text-[#A39D95] block mb-4">Les Incontournables</span>
<h2 className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-[#1C1A17]">Notre Collection</h2>
</div>
<span className="font-serif italic text-xl text-[#A39D95] mt-6 md:mt-0">Créé pour les puristes</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="flex flex-col group">
<div className="w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8 bg-[#EAE8E2]">
<img alt="Tarte Citron Classique" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1533357919628-ce079be816cf?w=1600&amp;q=80"/>
</div>
<div className="text-center px-4">
<h3 className="font-serif text-3xl font-normal tracking-tight text-[#1C1A17] mb-3">L'Authentique</h3>
<p className="text-base font-light text-[#8C857D] mb-4 min-h-[3rem]">La recette classique, épurée. Sablée fondante et crémeux d'une rare intensité.</p>
<span className="block text-lg text-[#1C1A17] mb-6">34€</span>
<button className="w-full bg-[#EAE8E2] hover:bg-[#DEDBD4] text-[#1C1A17] px-6 py-4 rounded-full text-sm font-medium tracking-wide transition-colors">
                                Ajouter au panier
                            </button>
</div>
</div>

<div className="flex flex-col group md:mt-24">
<div className="w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8 bg-[#EAE8E2]">
<img alt="Tarte Citron Meringuée" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1561087548-94e6546744a1?w=1600&amp;q=80"/>
</div>
<div className="text-center px-4">
<h3 className="font-serif text-3xl font-normal tracking-tight text-[#1C1A17] mb-3">La Meringuée</h3>
<p className="text-base font-light text-[#8C857D] mb-4 min-h-[3rem]">Le contraste parfait. Surmontée d'une meringue italienne aérienne.</p>
<span className="block text-lg text-[#1C1A17] mb-6">38€</span>
<button className="w-full bg-[#EAE8E2] hover:bg-[#DEDBD4] text-[#1C1A17] px-6 py-4 rounded-full text-sm font-medium tracking-wide transition-colors">
                                Ajouter au panier
                            </button>
</div>
</div>

<div className="flex flex-col group">
<div className="w-full aspect-[4/5] overflow-hidden rounded-[2.5rem] mb-8 bg-[#EAE8E2]">
<img alt="Mini Tarte Individuelle" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1633983053437-a22583a79fe1?w=1600&amp;q=80"/>
</div>
<div className="text-center px-4">
<h3 className="font-serif text-3xl font-normal tracking-tight text-[#1C1A17] mb-3">L'Égoïste</h3>
<p className="text-base font-light text-[#8C857D] mb-4 min-h-[3rem]">Le format individuel. Idéal pour une pause gourmande.</p>
<span className="block text-lg text-[#1C1A17] mb-6">8€</span>
<button className="w-full bg-[#EAE8E2] hover:bg-[#DEDBD4] text-[#1C1A17] px-6 py-4 rounded-full text-sm font-medium tracking-wide transition-colors">
                                Ajouter au panier
                            </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F9F8F6]" id="savoir-faire">
<div className="max-w-[1400px] mx-auto px-8 md:px-16 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="w-full lg:w-1/2">
<div className="w-full aspect-[4/3] md:aspect-square overflow-hidden rounded-[2.5rem]">
<img alt="Préparation artisanale" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1698350122213-8b63e05ac688?w=1600&amp;q=80"/>
</div>
</div>
<div className="w-full lg:w-1/2 lg:pr-12">
<span className="text-xs font-medium tracking-[0.2em] uppercase text-[#A39D95] block mb-6">Savoir-faire</span>
<h2 className="font-serif text-5xl md:text-6xl font-normal tracking-tight text-[#1C1A17] mb-8">L'art du détail</h2>
<div className="space-y-6">
<p className="text-xl font-light text-[#656058] leading-relaxed">
                            Notre histoire commence avec une ambition simple : recréer la tarte au citron de notre enfance, mais avec l'exigence de la haute pâtisserie.
                        </p>
<p className="text-xl font-light text-[#656058] leading-relaxed">
                            Chaque zeste est prélevé à la main pour capturer les huiles essentielles sans l'amertume. Le crémeux est cuit à basse température pour conserver toute la vivacité du fruit. C'est ce temps précieux accordé à chaque étape qui donne à nos tartes leur texture soyeuse.
                        </p>
</div>
<div className="mt-12">
<a className="inline-flex items-center gap-3 text-sm font-medium text-[#1C1A17] hover:text-[#A39D95] transition-colors border-b border-[#1C1A17] hover:border-[#A39D95] pb-1" href="#">
                            En savoir plus sur nos méthodes
                            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="bg-[#F9F8F6] pt-24 pb-24">
<div className="max-w-[1400px] mx-auto px-8 md:px-16 text-center">
<h2 className="font-serif italic text-4xl md:text-5xl font-normal tracking-tight text-[#1C1A17] mb-4">L'éveil des sens par le détail</h2>
<span className="text-xs font-medium tracking-[0.2em] uppercase text-[#A39D95]">Le processus créatif</span>
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-1 h-[600px] rounded-[2rem] overflow-hidden">
<img alt="Zeste de citron" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1633983053437-a22583a79fe1?w=1600&amp;q=80"/>
</div>
<div className="md:col-span-2 flex flex-col gap-6">
<div className="flex-1 flex gap-6">
<div className="flex-1 rounded-[2rem] overflow-hidden">
<img alt="Préparation crème" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1764155535434-6cb2fa141e5e?w=1600&amp;q=80"/>
</div>
<div className="flex-1 rounded-[2rem] overflow-hidden">
<img alt="Pochage meringue" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541781622821-8af65b6b449f?w=1600&amp;q=80"/>
</div>
</div>
<div className="h-64 rounded-[2rem] overflow-hidden">
<img alt="Pâtisseries finies" className="object-center w-full h-full object-cover" src="https://images.unsplash.com/photo-1681329142517-6daaa56d3670?w=2560&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F9F8F6]" id="avis">
<div className="max-w-4xl mx-auto px-8 md:px-16 text-center">
<span className="text-xs font-medium tracking-[0.2em] uppercase text-[#A39D95] block mb-12">Chroniques</span>
<div className="relative">
<i className="w-16 h-16 text-[#EAE8E2] absolute -top-8 -left-8 md:-left-16 transform -scale-x-100" data-lucide="quote" strokeWidth="1"></i>
<h3 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.2] text-[#1C1A17] tracking-tight relative z-10">
                        "Sans aucun doute la meilleure tarte au citron que j’ai pu goûter. L'équilibre des saveurs est d'une précision absolue."
                    </h3>
<i className="w-16 h-16 text-[#EAE8E2] absolute -top-8 -left-8 md:-left-16 transform -scale-x-100" data-lucide="quote" strokeWidth="1"></i>
</div>
<div className="mt-16">
<span className="text-xs font-medium tracking-[0.2em] uppercase text-[#656058]">— Sophie L., Épicurienne</span>
</div>
</div>
</section>

<section className="bg-[#F9F8F6] border-[#EAE8E2] border-t pt-32 pb-32" id="faq">
<div className="max-w-3xl mx-auto px-8 md:px-16">
<div className="text-center mb-20">
<h2 className="font-serif text-4xl font-normal tracking-tight text-[#1C1A17]">Questions fréquentes</h2>
</div>
<div className="space-y-0">
<details className="group border-b border-[#EAE8E2] py-8" open="">
<summary className="flex justify-between items-center cursor-pointer list-none">
<span className="font-serif text-2xl font-normal tracking-tight text-[#1C1A17]">Quels sont les ingrédients utilisés ?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-[#1C1A17]">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<p className="text-xl font-light text-[#656058] mt-6 leading-relaxed pr-8">
                            Nous utilisons exclusivement du beurre AOP, des œufs frais de plein air, de la farine locale et des citrons jaunes IGP de Menton pour garantir un parfum intense. Aucun conservateur n'est ajouté.
                        </p>
</details>
<details className="group border-b border-[#EAE8E2] py-8">
<summary className="flex justify-between items-center cursor-pointer list-none">
<span className="font-serif text-2xl font-normal tracking-tight text-[#1C1A17]">Combien de temps se conserve la tarte ?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-[#1C1A17]">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<p className="text-xl font-light text-[#656058] mt-6 leading-relaxed pr-8">
                            Pour profiter pleinement de la texture de la pâte, nous recommandons de la déguster dans les 48 heures suivant la réception. À conserver au réfrigérateur entre 2°C et 4°C.
                        </p>
</details>
<details className="group border-b border-[#EAE8E2] py-8">
<summary className="flex justify-between items-center cursor-pointer list-none">
<span className="font-serif text-2xl font-normal tracking-tight text-[#1C1A17]">Comment fonctionne la livraison ?</span>
<span className="transition-transform duration-300 group-open:rotate-180 text-[#1C1A17]">
<i className="w-5 h-5" data-lucide="chevron-down" strokeWidth="1.5"></i>
</span>
</summary>
<p className="text-xl font-light text-[#656058] mt-6 leading-relaxed pr-8">
                            Nous livrons via des coursiers partenaires en véhicules réfrigérés pour garantir l'intégrité de votre pâtisserie. La livraison est disponible en Île-de-France.
                        </p>
</details>
</div>
</div>
</section>
</main>

<footer className="bg-[#F2F0EB] pt-32 pb-12 border-t border-[#EAE8E2]">
<div className="max-w-[1400px] mx-auto px-8 md:px-16">
<div className="text-center mb-24">
<span className="font-serif text-4xl md:text-5xl font-normal tracking-[0.3em] text-[#1C1A17] uppercase">Maison Citron</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
<div>
<h4 className="text-sm font-medium text-[#1C1A17] mb-8">Boutique</h4>
<ul className="space-y-4">
<li><a className="text-base font-light text-[#8C857D] hover:text-[#1C1A17] transition-colors" href="#">Toutes les pâtisseries</a></li>
<li><a className="text-base font-light text-[#8C857D] hover:text-[#1C1A17] transition-colors" href="#">Coffrets cadeaux</a></li>
<li><a className="text-base font-light text-[#8C857D] hover:text-[#1C1A17] transition-colors" href="#">Offres entreprises</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-[#1C1A17] mb-8">Expérience</h4>
<ul className="space-y-4">
<li><a className="text-base font-light text-[#8C857D] hover:text-[#1C1A17] transition-colors" href="#">Notre atelier</a></li>
<li><a className="text-base font-light text-[#8C857D] hover:text-[#1C1A17] transition-colors" href="#">Masterclass</a></li>
<li><a className="text-base font-light text-[#8C857D] hover:text-[#1C1A17] transition-colors" href="#">Le Journal</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-[#1C1A17] mb-8">Support</h4>
<ul className="space-y-4">
<li><a className="text-base font-light text-[#8C857D] hover:text-[#1C1A17] transition-colors" href="#">Livraison &amp; Retours</a></li>
<li><a className="text-base font-light text-[#8C857D] hover:text-[#1C1A17] transition-colors" href="#">Nous contacter</a></li>
<li><a className="text-base font-light text-[#8C857D] hover:text-[#1C1A17] transition-colors" href="#faq">FAQ</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-[#1C1A17] mb-8">Newsletter</h4>
<p className="text-base font-light text-[#8C857D] mb-6">Recevez nos mises à jour poétiques et nos créations saisonnières.</p>
<form className="flex items-end border-b border-[#DEDBD4] pb-2">
<input className="w-full bg-transparent border-none outline-none text-base font-light text-[#1C1A17] placeholder:text-[#A39D95]" placeholder="Adresse email" type="email"/>
<button className="text-[#1C1A17] pb-1 hover:opacity-70 transition-opacity" type="submit">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</form>
<div className="flex items-center gap-6 mt-8 text-[#1C1A17]">
<a className="hover:opacity-70 transition-opacity" href="#"><i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i></a>
<a className="hover:opacity-70 transition-opacity" href="#"><i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i></a>
</div>
</div>
</div>
<div className="pt-8 border-t border-[#DEDBD4] flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm font-light text-[#8C857D]">© 2024 Maison Citron Pâtisserie. Créé avec passion.</p>
<div className="flex items-center gap-6 text-sm font-light text-[#8C857D]">
<a className="hover:text-[#1C1A17] transition-colors" href="#">Politique de confidentialité</a>
<a className="hover:text-[#1C1A17] transition-colors" href="#">Conditions générales</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
