import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg font-medium tracking-tighter uppercase" href="#">LEYÉTIDEVILLARD</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#caracteristiques">Caractéristiques</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#activites">Activités</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#tarifs">Tarifs</a>
<a className="text-sm font-normal text-zinc-500 hover:text-zinc-900 transition-colors" href="#contact">Contact</a>
</div>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:flex bg-zinc-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-zinc-800 transition-all active:scale-95 items-center gap-2" href="#contact">
                    LOCATION CHALET
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<button className="md:hidden text-zinc-900">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
<div className="max-w-3xl">
<h1 className="text-4xl md:text-6xl font-medium tracking-tighter text-zinc-900 leading-[1.1] text-balance">
                Un lieu d’exception à Villard Reculas – Domaine de l’Alpes d’Huez
            </h1>
<p className="mt-6 text-lg text-zinc-500 font-normal leading-relaxed max-w-2xl text-balance">
                Vivez une expérience inoubliable au carrefour de 250km de pistes. Un panorama à couper le souffle, un confort absolu et un accès direct aux meilleures activités de la station.
            </p>
<div className="mt-10 flex flex-wrap items-center gap-4">
<a className="bg-zinc-900 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all active:scale-95 flex items-center gap-2" href="#contact">
                    CONTACTEZ-NOUS
                </a>
<a className="bg-white border border-zinc-200 text-zinc-900 px-6 py-3 rounded-full text-sm font-medium hover:bg-zinc-50 transition-all active:scale-95" href="#activites">
                    Découvrez les activités
                </a>
</div>
</div>

<div className="mt-16 md:mt-24 w-full h-64 md:h-[500px] rounded-3xl bg-zinc-200/50 border border-zinc-200/50 overflow-hidden relative group">
<img alt="Vue aérienne de Villard" className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 right-6 text-xs text-white/70 font-normal backdrop-blur-sm bg-black/20 px-3 py-1.5 rounded-full">
                Photo : Urope pour Oisans Tourisme
            </div>
</div>
</section>

<section className="py-24 bg-white border-y border-zinc-100" id="caracteristiques">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
<div className="space-y-3">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:home-smile-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">170m² &amp; Vue</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Chalet 170m2 avec une vue panoramique sur le domaine.</p>
</div>
<div className="space-y-3">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:users-group-two-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Capacité 14 pers.</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">6 chambres spacieuses et leurs salles de bain privatives.</p>
</div>
<div className="space-y-3">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:sun-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Extérieur &amp; Bain</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Une terrasse orientée sud-ouest et son bain nordique à 38°C.</p>
</div>
<div className="space-y-3">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Emplacement idéal</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Au carrefour des 250km de pistes, des commerces et des trails.</p>
</div>
<div className="space-y-3">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:skateboarding-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Activités familles</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">L’ESF, le Tour de France, les randonnées et d’autres activités.</p>
</div>
<div className="space-y-3">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:music-notes-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Divertissement</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Profitez de La Folie Douce, Tomorrowland et des boites de nuits.</p>
</div>
<div className="space-y-3">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:bus-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Accessibilité</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">L'Alpe d’Huez est facilement accessible par tous les moyens de transport.</p>
</div>
<div className="space-y-3">
<div className="w-10 h-10 rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-900">
<iconify-icon icon="solar:cloud-sun-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-zinc-900 tracking-tight">Ensoleillement</h3>
<p className="text-sm text-zinc-500 font-normal leading-relaxed">Le domaine de l’Alpe d’Huez est le plus ensoleillé de France.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row gap-16 md:gap-24 items-start">
<div className="flex-1 space-y-8">
<div>
<h2 className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-3">Notre chalet</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 leading-tight">
                        Un chalet d’exception.
                    </h3>
</div>
<div className="space-y-6 text-sm text-zinc-500 font-normal leading-relaxed">
<p>
                        Le Yéti de Villard est un chalet de 170m² construit en 2021 situé à Villard reculas, sur le domaine de l’Alpe d’Huez. Il vous faut 10mn en télésiège ou seulement 12 minutes pour rejoindre en voiture la station de l’Alpe d’Huez.
                    </p>
<p>
                        Un chalet accessible directement sur les pistes et surplombant la station. Les remontées mécaniques sont à 150 mètres, tout comme le départ de l’école de ski (ESF) pour les enfants qui pourront s’y rendre à pied ou en luge.
                    </p>
<p>
                        Le chalet offres des vues imprenables sur les massifs montagneux ! Orienté plein sud et ouest, le soleil viendra envahir vos vacances. A deux pas des commerces, vous pourrez achetez de quoi vous alimenter (boucherie, fromagerie, supérette) mais aussi de quoi vous détendre en musique après une journée de ski.
                    </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors group border-b border-zinc-900 pb-0.5" href="#equipements">
                    Voir les caractéristiques
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
<div className="flex-1 w-full bg-zinc-100 rounded-3xl p-8 md:p-12 border border-zinc-200/60">
<h4 className="text-xl font-medium tracking-tight text-zinc-900 mb-4">Bain Nordique</h4>
<p className="text-sm text-zinc-500 font-normal leading-relaxed mb-6">
                    Le chalet dispose aussi d’un bain nordique privatif. Situé au bout de la terrasse, il vous permettra de vous détendre après une longue journée de ski ou de randonnée et de profiter des paysages somptueux qu’offre la station.
                </p>
<p className="text-sm text-zinc-500 font-normal leading-relaxed mb-8">
                    Vous pourrez profiter du panorama de jour comme de nuit dans une eau filtrée à 38 degrés environ. Le bain nordique est ouvert toute l’année pour vos vacances en famille ou entre amis.
                </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-zinc-600 transition-colors" href="#contact">
                    En Savoir Plus
                    <iconify-icon icon="solar:arrow-up-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-zinc-100" id="equipements">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Équipements</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

<div>
<h3 className="text-sm font-medium text-zinc-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:info-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Informations Essentielles
                    </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Bain nordique &amp; Internet
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Linge de maison &amp; Serviettes fournis
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Chauffage &amp; Sèche-cheveux
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Bureau &amp; Parking
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Détecteurs (fumée, monoxyde) &amp; Extincteur
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Trousse de premiers secours
                        </li>
</ul>
</div>

<div>
<h3 className="text-sm font-medium text-zinc-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:chef-hat-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Cuisine
                    </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Four, Micro-ondes, Plaques de cuisson
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Réfrigérateur &amp; Lave-vaisselle
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Vaisselle, couverts, ustensiles enfants
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Grille-pain, Bouilloire, Machine à glaçons
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Épices et condiments
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Table pour dîner
                        </li>
</ul>
</div>

<div id="activites">
<h3 className="text-sm font-medium text-zinc-900 mb-6 flex items-center gap-2">
<iconify-icon className="text-zinc-400" icon="solar:sneakers-linear" strokeWidth="1.5" width="18"></iconify-icon>
                        Activités &amp; Loisirs
                    </h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Télévision (Câble/satellite Box)
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Jeux, Échecs &amp; Livres
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Ski / Snowboard (250km de pistes)
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Randonnées &amp; Raquette
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            Patinage sur glace
                        </li>
<li className="flex items-start gap-3 text-sm text-zinc-500 font-normal">
<iconify-icon className="mt-0.5 text-zinc-300" icon="solar:check-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                            VTT &amp; Parapente
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Avis Clients</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white border border-zinc-200/60 p-8 rounded-3xl shadow-sm">
<iconify-icon className="text-zinc-200 mb-6 block" icon="solar:quote-right-linear" strokeWidth="1" width="32"></iconify-icon>
<p className="text-sm text-zinc-600 font-normal leading-relaxed italic mb-8">
                    "Nous avons passé un séjour magnifique dans ce chalet de montagne ! La vue est magnifique et le chalet très confortable. La cheminée est très agréable et le bain nordique absolument génial pour regarder les étoiles en pleine nuit ! Nous recommandons vivement ce chalet à tous ceux qui cherchent un endroit tranquille et paisible pour se reposer et profiter de la nature."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-500">AG</div>
<span className="text-sm font-medium text-zinc-900">Alexis Guillemin</span>
</div>
</div>
<div className="bg-white border border-zinc-200/60 p-8 rounded-3xl shadow-sm">
<iconify-icon className="text-zinc-200 mb-6 block" icon="solar:quote-right-linear" strokeWidth="1" width="32"></iconify-icon>
<p className="text-sm text-zinc-600 font-normal leading-relaxed italic mb-8">
                    "Séjour inoubliable à Villard Reculas, le chalet est sur les pistes et on est sur le domaine de l’Alpe d’Huez en 10 minutes ! les enfants étaient au cours de ski à l’ESF en 5 minutes, et nous avons profité du bain nordique et de l’ambiance chaleureuse du chalet toute la semaine."
                </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-500">SP</div>
<span className="text-sm font-medium text-zinc-900">Sophie Sakakini Poisson</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white selection:bg-zinc-700" id="contact">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-16 md:gap-24">
<div className="flex-1">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6">Contactez-nous</h2>
<p className="text-sm text-zinc-400 font-normal leading-relaxed max-w-md">
                    N’hésitez pas à nous contacter si vous avez besoin d’informations supplémentaires sur la location du chalet ou sur les différentes activités que vous pouvez faire autour du chalet.
                </p>
<div className="mt-12 space-y-4">
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        contact@leyetidevillard.fr
                    </div>
<div className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" width="20"></iconify-icon>
                        Villard Reculas, Alpes d'Huez
                    </div>
</div>
</div>
<div className="flex-1 max-w-md w-full">
<form className="space-y-5">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="name">Nom*</label>
<input className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" id="name" placeholder="Votre nom" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="email">Email*</label>
<input className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" id="email" placeholder="adresse@email.com" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="date">Date d’arrivée souhaitée*</label>
<input className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" id="date" placeholder="jj/mm/aaaa" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="duration">Nombre de jours*</label>
<input className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" id="duration" placeholder="Ex: 7" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-zinc-400 mb-2" htmlFor="message">Message*</label>
<textarea className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none" id="message" placeholder="Votre message..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-zinc-900 font-medium text-sm py-3 rounded-xl hover:bg-zinc-100 transition-colors mt-2" type="button">
                        Envoyer
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-zinc-900 border-t border-zinc-800 pt-16 pb-8 px-6 text-center md:text-left">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div>
<div className="text-xl font-medium tracking-tighter uppercase text-white mb-2">LEYÉTIDEVILLARD</div>
<p className="text-xs text-zinc-500 font-normal">
                    Société de location de chalet à Villard Reculas, sur le domaine de l’Alpes d´Huez.
                </p>
</div>
<div className="text-xs text-zinc-600 font-normal">
                © 2024 Le Yéti de Villard. Tous droits réservés.
            </div>
</div>
</footer>

    </>
  );
}
