import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const menuIcon = document.getElementById('menu-icon');
            const mobileLinks = mobileMenu.querySelectorAll('a');

            const toggleMenu = () => {
                mobileMenu.classList.toggle('hidden');
                mobileMenu.classList.toggle('flex');
                
                // Toggle between hamburger and close icon
                const isHidden = mobileMenu.classList.contains('hidden');
                menuIcon.setAttribute('icon', isHidden ? 'solar:hamburger-menu-linear' : 'solar:close-linear');
            };

            // Toggle menu on button click
            mobileMenuBtn.addEventListener('click', toggleMenu);

            // Close menu when a link is clicked
            mobileLinks.forEach(link => {
                link.addEventListener('click', toggleMenu);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="lg:px-8 flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-xl font-serif tracking-tighter text-slate-900 font-medium" href="#">
                WYL HOME.
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-light text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#concept">Concept</a>
<a className="hover:text-slate-900 transition-colors" href="#villas">Les Villas</a>
<a className="hover:text-slate-900 transition-colors" href="#galerie">Galerie</a>
<a className="hover:text-slate-900 transition-colors" href="#ile-maurice">L'Île Maurice</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-xs tracking-widest uppercase bg-[#5c6b5d] text-white hover:bg-[#4a564b] transition-colors rounded-sm" href="#contact">
                Brochure
            </a>

<button className="md:hidden text-slate-900 focus:outline-none" id="mobile-menu-btn">
<iconify-icon className="transition-transform" icon="solar:hamburger-menu-linear" id="menu-icon" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden bg-white/95 backdrop-blur-md border-t border-slate-100 flex-col absolute w-full shadow-lg left-0 right-0" id="mobile-menu">
<div className="px-6 py-4 flex flex-col">
<a className="py-3 text-sm font-light text-slate-600 hover:text-slate-900 transition-colors border-b border-slate-50" href="#concept">Concept</a>
<a className="py-3 text-sm font-light text-slate-600 hover:text-slate-900 transition-colors border-b border-slate-50" href="#villas">Les Villas</a>
<a className="py-3 text-sm font-light text-slate-600 hover:text-slate-900 transition-colors border-b border-slate-50" href="#galerie">Galerie</a>
<a className="py-3 text-sm font-light text-slate-600 hover:text-slate-900 transition-colors border-b border-slate-50" href="#ile-maurice">L'Île Maurice</a>
<a className="mt-6 mb-2 flex items-center justify-center px-6 py-3 text-xs tracking-widest uppercase bg-[#5c6b5d] text-white hover:bg-[#4a564b] transition-colors rounded-sm" href="#contact">
                    Brochure
                </a>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
<div className="absolute inset-0 z-0">
<img alt="Luxury Villa Pool" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2850&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent"></div>
</div>
<div className="lg:px-8 flex flex-col text-white w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative items-start">
<span className="text-xs tracking-[0.2em] uppercase mb-6 text-slate-300 font-light flex items-center gap-2">
<span className="w-8 h-[1px] bg-slate-300"></span>
                Domaine Privé
            </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1] max-w-3xl mb-6">
                Vivre l’élégance tropicale à l’île Maurice
            </h1>
<p className="text-base md:text-lg text-slate-200 font-light max-w-xl mb-10 leading-relaxed">
                Découvrez Tree Valley. Des villas de prestige de 3 chambres avec piscine privée, nichées au cœur d'une nature
                luxuriante. Une invitation à la sérénité absolue.
            </p>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm tracking-wide bg-white text-slate-900 hover:bg-slate-100 transition-colors rounded-sm font-medium group" href="#contact">
                Recevoir la brochure
                <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 md:py-32 bg-[#FAFAF9]" id="concept">
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
<iconify-icon className="text-[#5c6b5d] mb-6" icon="solar:leaf-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900 mb-8">
                L'Harmonie entre Nature et Architecture
            </h2>
<p className="text-base md:text-lg text-slate-500 font-light leading-relaxed">
                Tree Valley par WYL HOME repousse les limites du design tropical contemporain. Pensé comme un sanctuaire privé, le domaine s'intègre parfaitement à son environnement naturel. Les lignes épurées, l'utilisation de matériaux nobles et organiques, et l'omniprésence de la lumière naturelle créent un espace de vie où le luxe se conjugue avec la tranquillité. Un refuge parfait pour ceux qui recherchent une qualité de vie exceptionnelle sous les tropiques.
            </p>
</div>
</section>

<section className="md:py-32 bg-white pt-24 pb-24" id="villas">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="md:mb-24 flex flex-col md:flex-row md:items-end gap-6 mb-16 gap-x-6 gap-y-6 justify-between">
<div>
<span className="text-xs tracking-[0.2em] uppercase text-[#5c6b5d] font-light mb-3 block">Les Résidences</span>
<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900">
                        Votre Sanctuaire Privé
                    </h2>
</div>
<p className="text-sm text-slate-500 font-light max-w-md">
                    Chaque villa a été minutieusement conçue pour offrir une intimité totale et des espaces de vie fluides, s'ouvrant vers l'extérieur.
                </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
<div className="img-zoom-container aspect-[4/3] rounded-sm bg-slate-100">
<img alt="Villa Extérieur" className="w-full h-full object-cover rounded-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col justify-center">
<h3 className="text-2xl font-serif tracking-tight text-slate-900 mb-4">Villa Type A - Plain-pied</h3>
<p className="text-base text-slate-500 font-light mb-8 leading-relaxed">
                        Une conception de plain-pied axée sur la convivialité, avec un vaste espace de vie ouvert sur une large terrasse couverte et la piscine. L'architecture favorise la ventilation naturelle et baigne les intérieurs de lumière.
                    </p>
<ul className="grid grid-cols-2 gap-y-6 gap-x-4 mb-10 border-t border-b border-slate-100 py-8">
<li className="flex items-center gap-3 text-sm text-slate-700 font-light">
<iconify-icon className="text-[#5c6b5d]" icon="solar:ruler-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            167 m² construits
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-light">
<iconify-icon className="text-[#5c6b5d]" icon="solar:bed-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            3 Chambres en suite
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-light">
<iconify-icon className="text-[#5c6b5d]" icon="solar:swimming-pool-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Piscine privée
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-light">
<iconify-icon className="text-[#5c6b5d]" icon="solar:garage-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Parking privé
                        </li>
</ul>
<div className="">
<a className="inline-flex items-center text-sm font-medium text-[#5c6b5d] hover:text-slate-900 transition-colors group" href="#contact">
                            Demander les plans
                            <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div className="order-2 lg:order-1 flex flex-col justify-center">
<h3 className="text-2xl font-serif tracking-tight text-slate-900 mb-4">Villa Type B - Étage</h3>
<p className="text-base text-slate-500 font-light mb-8 leading-relaxed">
                        Élevée sur deux niveaux, cette villa sépare élégamment les espaces de réception au rez-de-chaussée des espaces de repos à l'étage. Elle offre des vues dégagées sur la canopée environnante.
                    </p>
<ul className="grid grid-cols-2 border-slate-100 border-t border-b mb-10 pt-8 pb-8 gap-x-4 gap-y-6">
<li className="flex items-center gap-3 text-sm text-slate-700 font-light">
<iconify-icon className="text-[#5c6b5d]" icon="solar:ruler-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            169 m² construits
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-light">
<iconify-icon className="text-[#5c6b5d]" icon="solar:bed-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            3 Chambres avec balcon
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-light">
<iconify-icon className="text-[#5c6b5d]" icon="solar:pallete-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Jardin paysager
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-light">
<iconify-icon className="text-[#5c6b5d]" icon="solar:shield-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
                            Sécurité 24/7
                        </li>
</ul>
<div className="">
<a className="inline-flex items-center text-sm font-medium text-[#5c6b5d] hover:text-slate-900 transition-colors group" href="#contact">
                            Demander les plans
                            <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="order-1 lg:order-2 img-zoom-container aspect-[4/3] rounded-sm bg-slate-100">
<img alt="Villa Intérieur" className="w-full h-full object-cover rounded-sm" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>
</div>
</section>

<section className="bg-[#FAFAF9] pt-24 pb-24" id="galerie">
<div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12 text-center">
<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900">
                L'Art de Vivre
            </h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4 md:px-4 pr-1 pl-1 gap-x-1 gap-y-1">
<div className="aspect-square bg-slate-200 img-zoom-container">
<img alt="Salon" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="aspect-square bg-slate-200 img-zoom-container">
<img alt="Salle de bain" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="aspect-square bg-slate-200 img-zoom-container">
<img alt="Cuisine" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="aspect-square bg-slate-200 img-zoom-container lg:col-span-2">
<img alt="Piscine de nuit" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
<div className="aspect-square bg-slate-200 img-zoom-container">
<img alt="Chambre" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="ile-maurice">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center mb-16">
<span className="text-xs tracking-[0.2em] uppercase text-[#5c6b5d] font-light mb-3 block">Destination</span>
<h2 className="text-3xl md:text-4xl font-serif tracking-tight text-slate-900 mb-6">
                    Pourquoi choisir l'Île Maurice ?
                </h2>
<p className="text-base text-slate-500 font-light max-w-2xl mx-auto">
                    Un cadre de vie idyllique couplé à un environnement économique et fiscal extrêmement favorable pour les investisseurs internationaux.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

<div className="p-6 bg-[#FAFAF9] rounded-sm border border-slate-100 hover:shadow-sm transition-shadow">
<iconify-icon className="text-[#5c6b5d] mb-5" icon="solar:sun-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-slate-900 mb-3">Style de vie</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Climat tropical toute l'année, plages paradisiaques, golfs de renommée mondiale et une population chaleureuse et bilingue.
                    </p>
</div>

<div className="p-6 bg-[#FAFAF9] rounded-sm border border-slate-100 hover:shadow-sm transition-shadow">
<iconify-icon className="text-[#5c6b5d] mb-5" icon="solar:wallet-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-slate-900 mb-3">Avantages Fiscaux</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Taux d'imposition unique à 15%, pas d'impôt sur les plus-values, les dividendes ou la succession, et conventions de double imposition.
                    </p>
</div>

<div className="p-6 bg-[#FAFAF9] rounded-sm border border-slate-100 hover:shadow-sm transition-shadow">
<iconify-icon className="text-[#5c6b5d] mb-5" icon="solar:shield-keyhole-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-slate-900 mb-3">Stabilité</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Une démocratie stable avec un système juridique hybride (droit civil français et common law britannique), assurant la sécurité des biens.
                    </p>
</div>

<div className="p-6 bg-[#FAFAF9] rounded-sm border border-slate-100 hover:shadow-sm transition-shadow">
<iconify-icon className="text-[#5c6b5d] mb-5" icon="solar:home-angle-linear" strokeWidth="1.5" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-slate-900 mb-3">Investissement</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                        Accès au permis de résidence permanent par l'acquisition d'un bien immobilier, avec un marché locatif dynamique et rentable.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-slate-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-white/5 blur-3xl"></div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

<div className="flex flex-col justify-center">
<h2 className="text-3xl md:text-5xl font-serif tracking-tight mb-6 text-white">
                        Commencez votre projet de vie à l'Île Maurice.
                    </h2>
<p className="text-base text-slate-400 font-light mb-10 leading-relaxed max-w-md">
                        Enregistrez votre intérêt pour Tree Valley. Notre équipe se fera un plaisir de vous envoyer la brochure complète, les plans détaillés et la grille tarifaire.
                    </p>
<div className="space-y-6">
<div className="flex items-center gap-4 text-slate-300 font-light text-sm">
<div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                            +230 400 0000
                        </div>
<div className="flex items-center gap-4 text-slate-300 font-light text-sm">
<div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
                            contact@wylhome.mu
                        </div>
</div>
</div>

<div className="bg-white p-8 md:p-12 rounded-sm text-slate-800 shadow-2xl">
<h3 className="text-xl font-medium mb-8 text-slate-900">Demande d'informations</h3>
<form action="#" className="space-y-6" method="POST">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="sr-only" htmlFor="firstName">Prénom</label>
<input className="w-full text-sm" id="firstName" name="firstName" placeholder="Prénom" required="" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="lastName">Nom</label>
<input className="w-full text-sm" id="lastName" name="lastName" placeholder="Nom" required="" type="text"/>
</div>
</div>
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full text-sm" id="email" name="email" placeholder="Adresse email" required="" type="email"/>
</div>
<div>
<label className="sr-only" htmlFor="phone">Téléphone</label>
<input className="w-full text-sm" id="phone" name="phone" placeholder="Numéro de téléphone (avec indicatif)" type="tel"/>
</div>
<div>
<label className="sr-only" htmlFor="message">Message (Optionnel)</label>
<textarea className="w-full text-sm resize-none" id="message" name="message" placeholder="Avez-vous des questions spécifiques ?" rows="3"></textarea>
</div>
<div className="pt-4">
<button className="w-full flex items-center justify-center px-8 py-4 text-sm tracking-wide bg-[#5c6b5d] text-white hover:bg-[#4a564b] transition-colors rounded-sm font-medium" type="submit">
                                Recevoir la brochure maintenant
                            </button>
</div>
<p className="text-xs text-slate-400 font-light text-center mt-4">
                            Vos données sont sécurisées. Nous ne les partageons avec aucun tiers.
                        </p>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-400 py-12 md:py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 border-b border-slate-800 pb-12">
<div className="text-center md:text-left">
<span className="text-xl font-serif tracking-tighter text-white font-medium block mb-2">
                        WYL HOME.
                    </span>
<p className="text-xs font-light max-w-xs text-slate-500">
                        Créateur de lieux de vie d'exception. Agence immobilière et promoteur à l'Île Maurice.
                    </p>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
<a className="text-slate-500 hover:text-white transition-colors" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon icon="solar:square-academic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light">
<p>© 2024 WYL HOME. Tous droits réservés.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Mentions légales</a>
<a className="hover:text-white transition-colors" href="#">Politique de confidentialité</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
