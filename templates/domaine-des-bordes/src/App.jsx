import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Language Switcher Script
        function switchLanguage(lang) {
            const enElements = document.querySelectorAll('.lang-en');
            const frElements = document.querySelectorAll('.lang-fr');
            const btnEn = document.getElementById('btn-en');
            const btnFr = document.getElementById('btn-fr');

            if (lang === 'fr') {
                enElements.forEach(el => el.classList.add('hidden'));
                frElements.forEach(el => el.classList.remove('hidden'));
                
                // Update buttons opacity
                if(btnEn && btnFr) {
                    btnEn.classList.add('opacity-50');
                    btnEn.classList.remove('opacity-100');
                    btnFr.classList.add('opacity-100');
                    btnFr.classList.remove('opacity-50');
                }
            } else {
                frElements.forEach(el => el.classList.add('hidden'));
                enElements.forEach(el => el.classList.remove('hidden'));

                // Update buttons opacity
                if(btnEn && btnFr) {
                    btnFr.classList.add('opacity-50');
                    btnFr.classList.remove('opacity-100');
                    btnEn.classList.add('opacity-100');
                    btnEn.classList.remove('opacity-50');
                }
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-black/90 backdrop-blur-md border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex h-20 items-center justify-between">

<a className="uppercase hover:text-[#D4AF37] transition-colors text-lg font-semibold text-white tracking-tighter" href="#home">
                    DOMAINE <span className="text-[#D4AF37]">DES BORDES</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-white/80">
<a className="hover:text-[#D4AF37] transition-colors" href="#the-residence">
<span className="lang-en">The Residence</span>
<span className="lang-fr hidden">Le Gîte</span>
</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#location">
<span className="lang-en">Location</span>
<span className="lang-fr hidden">Localisation</span>
</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#amenities">
<span className="lang-en">Amenities</span>
<span className="lang-fr hidden">Équipements</span>
</a>
<a className="hover:text-[#D4AF37] transition-colors" href="#gallery">
<span className="lang-en">Gallery</span>
<span className="lang-fr hidden">Galerie</span>
</a>
<a className="px-6 py-3 bg-[#D4AF37] text-black font-semibold hover:bg-white transition-all duration-300" href="#book">
<span className="lang-en">Check Availability</span>
<span className="lang-fr hidden">Voir Disponibilités</span>
</a>

<div className="flex items-center gap-3 pl-4 border-l border-white/20 ml-2">
<button className="opacity-100 hover:scale-110 transition-transform" id="btn-en" onclick="switchLanguage('en')">
<iconify-icon icon="circle-flags:gb" width="20"></iconify-icon>
</button>
<button className="opacity-50 hover:scale-110 transition-transform" id="btn-fr" onclick="switchLanguage('fr')">
<iconify-icon icon="circle-flags:fr" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="lg:hidden flex items-center gap-4">

<div className="flex items-center gap-2 mr-2">
<button onclick="switchLanguage('en')"><iconify-icon icon="circle-flags:gb" width="20"></iconify-icon></button>
<button onclick="switchLanguage('fr')"><iconify-icon icon="circle-flags:fr" width="20"></iconify-icon></button>
</div>
<button className="text-white hover:text-[#D4AF37]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20" id="home">

<div className="absolute inset-0 z-0">
<img alt="Loire Valley Luxury Airbnb" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/deef31e8-9d43-4fc2-90d1-5491f692f9ea_3840w.jpg"/>
<div className="bg-gradient-to-t from-black via-black/40 to-black/30 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white mt-12">
<div className="inline-flex items-center gap-2 px-4 py-2 border border-[#D4AF37]/50 rounded-full bg-black/30 backdrop-blur-sm mb-8 animate-fade-up">
<iconify-icon className="text-[#D4AF37]" icon="solar:crown-star-linear" width="16"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest font-medium text-[#D4AF37]">
<span className="lang-en">Premium Holiday Rental</span>
<span className="lang-fr hidden">Location de Prestige</span>
</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-8 leading-[1.1]">
<span className="lang-en">A Royal Escape <br/> Between Zoo &amp; Château</span>
<span className="lang-fr hidden">Une Évasion Royale <br/> Entre Zoo &amp; Château</span>
</h1>
<p className="text-lg md:text-xl font-light text-[#F5E9D3] max-w-2xl mx-auto mb-12 leading-relaxed">
<span className="lang-en">Experience the Val de Loire in a grand 12-bed residence. Located minutes from the majestic Châteaux and the wonders of Beauval Zoo.</span>
<span className="lang-fr hidden">Découvrez le Val de Loire dans une grande résidence de 12 couchages. Située à quelques minutes des Châteaux majestueux et des merveilles du Zoo de Beauval.</span>
</p>
<div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
<a className="w-full sm:w-auto px-10 py-4 bg-[#D4AF37] text-black text-xs font-semibold uppercase tracking-widest hover:bg-white transition-all duration-300" href="#book">
<span className="lang-en">Book Your Stay</span>
<span className="lang-fr hidden">Réserver</span>
</a>
<a className="w-full sm:w-auto px-10 py-4 border border-white text-white text-xs font-medium uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300" href="#the-residence">
<span className="lang-en">View Residence</span>
<span className="lang-fr hidden">Découvrir</span>
</a>
</div>

<div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-white/10 pt-8 opacity-80">
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-[#D4AF37]" icon="solar:bed-linear" width="24"></iconify-icon>
<span className="text-[10px] tracking-widest uppercase">
<span className="lang-en">12 Guests</span>
<span className="lang-fr hidden">12 Voyageurs</span>
</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-[#D4AF37]" icon="solar:map-point-linear" width="24"></iconify-icon>
<span className="text-[10px] tracking-widest uppercase">
<span className="lang-en">Prime Location</span>
<span className="lang-fr hidden">Emplacement Idéal</span>
</span>
</div>
<div className="flex flex-col items-center gap-2">
<iconify-icon className="text-[#D4AF37]" icon="solar:shield-star-linear" width="24"></iconify-icon>
<span className="text-[10px] tracking-widest uppercase">
<span className="lang-en">Luxury Rated</span>
<span className="lang-fr hidden">Standing 5 Étoiles</span>
</span>
</div>
</div>
</div>
</header>

<section className="py-24 bg-[#FAF9F6]" id="the-residence">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-2 gap-20 items-center">
<div className="">
<h2 className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4">
<span className="lang-en">The Property</span>
<span className="lang-fr hidden">La Propriété</span>
</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 text-slate-900">
<span className="lang-en">Heritage Meets <br/>Modern Comfort</span>
<span className="lang-fr hidden">Le Charme de l'Ancien, <br/>Le Confort Moderne</span>
</h3>
<div className="text-slate-600 font-light leading-relaxed mb-6">
<p className="lang-en mb-6">
                            Nestled in the heart of the "Garden of France", Le Manoir Val de Loire offers a rare combination of historic charm and modern luxury. Designed for large families and groups, our residence comfortably sleeps 12 guests across spacious, beautifully appointed suites.
                        </p>
<p className="lang-fr hidden mb-6">
                            Niché au cœur du "Jardin de la France", le Manoir Val de Loire offre une alliance rare entre charme historique et luxe contemporain. Conçue pour les grandes familles et les groupes, notre résidence accueille confortablement 12 personnes dans des suites spacieuses et magnifiquement aménagées.
                        </p>
<p className="lang-en">
                            Whether you are returning from a day at the Beauval Zoo or exploring the architecture of Chambord, the Manoir provides a serene sanctuary with a private garden, gourmet kitchen, and expansive living areas.
                        </p>
<p className="lang-fr hidden">
                            Que vous reveniez d'une journée au Zoo de Beauval ou d'une visite à Chambord, le Manoir offre un sanctuaire serein avec jardin privé, cuisine gastronomique et de vastes espaces de vie.
                        </p>
</div>
<ul className="space-y-4">
<li className="flex items-center gap-4">
<div className="w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide">
<span className="lang-en">Capacity</span>
<span className="lang-fr hidden">Capacité</span>
</h4>
<p className="text-xs text-slate-500">
<span className="lang-en">12 Beds / 6 Bedrooms</span>
<span className="lang-fr hidden">12 Couchages / 6 Chambres</span>
</p>
</div>
</li>
<li className="flex items-center gap-4">
<div className="w-10 h-10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
<iconify-icon icon="solar:sofa-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold uppercase tracking-wide">
<span className="lang-en">Living Space</span>
<span className="lang-fr hidden">Espace de Vie</span>
</h4>
<p className="text-xs text-slate-500">
<span className="lang-en">300m² of elegant interior</span>
<span className="lang-fr hidden">300m² d'intérieur élégant</span>
</p>
</div>
</li>
</ul>
</div>
<div className="relative">
<div className="absolute -top-4 -left-4 w-full h-full border border-[#D4AF37] z-0"></div>
<div className="relative z-10 aspect-[4/5] overflow-hidden bg-slate-200">
<img alt="Luxury French Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c2ec019e-4446-4bf3-9757-fe9167e7a82b_800w.jpg?w=800&amp;q=80"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative bg-black text-white" id="location">
<div className="grid lg:grid-cols-2 min-h-[600px]">

<div className="relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569925239247-d5d41f175402?q=80&amp;w=1600&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-40"></div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-end p-12 lg:p-20">
<div className="mb-4 text-[#D4AF37]">
<iconify-icon icon="solar:castle-linear" width="40"></iconify-icon>
</div>
<h3 className="text-3xl font-medium tracking-tight mb-2">Châteaux de la Loire</h3>
<p className="text-white/80 font-light mb-6 max-w-md">
<span className="lang-en">Immerse yourself in history. We are centrally located near Chambord, Chenonceau, and Cheverny.</span>
<span className="lang-fr hidden">Plongez dans l'histoire. Nous sommes idéalement situés près de Chambord, Chenonceau et Cheverny.</span>
</p>
<span className="text-xs font-semibold uppercase tracking-widest border-b border-[#D4AF37] pb-1 self-start">
<span className="lang-en">15-30 Mins Drive</span>
<span className="lang-fr hidden">15-30 Min en Voiture</span>
</span>
</div>
</div>

<div className="relative group overflow-hidden">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1548232979-6c557ee14752?q=80&amp;w=1600&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-40"></div>
<div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500"></div>
<div className="relative z-10 h-full flex flex-col justify-end p-12 lg:p-20">
<div className="mb-4 text-[#D4AF37]">
<iconify-icon icon="solar:paw-linear" width="40"></iconify-icon>
</div>
<h3 className="text-3xl font-medium tracking-tight mb-2">ZooParc de Beauval</h3>
<p className="text-white/80 font-light mb-6 max-w-md">
<span className="lang-en">Visit one of the world's most beautiful zoos, home to giant pandas and extraordinary wildlife conservation.</span>
<span className="lang-fr hidden">Visitez l'un des plus beaux zoos du monde, abritant des pandas géants et une faune extraordinaire.</span>
</p>
<span className="text-xs font-semibold uppercase tracking-widest border-b border-[#D4AF37] pb-1 self-start">
<span className="lang-en">10 Mins Drive</span>
<span className="lang-fr hidden">10 Min en Voiture</span>
</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="amenities">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4">
<span className="lang-en">Curated Comfort</span>
<span className="lang-fr hidden">Confort Sur Mesure</span>
</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-slate-900">
<span className="lang-en">Everything for the Perfect Stay</span>
<span className="lang-fr hidden">Tout pour un Séjour Parfait</span>
</h3>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-slate-100 border border-slate-100">

<div className="bg-white p-8 hover:bg-[#FAF9F6] transition-colors group">
<iconify-icon className="text-slate-400 group-hover:text-[#D4AF37] transition-colors mb-4" icon="solar:bed-linear" width="32"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide mb-2">
<span className="lang-en">12 Beds</span>
<span className="lang-fr hidden">12 Lits</span>
</h4>
<p className="text-xs text-slate-500 font-light">
<span className="lang-en">Premium linens &amp; comfort</span>
<span className="lang-fr hidden">Linge de qualité &amp; confort</span>
</p>
</div>

<div className="bg-white p-8 hover:bg-[#FAF9F6] transition-colors group">
<iconify-icon className="text-slate-400 group-hover:text-[#D4AF37] transition-colors mb-4" icon="solar:chef-hat-linear" width="32"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide mb-2">
<span className="lang-en">Gourmet Kitchen</span>
<span className="lang-fr hidden">Cuisine Équipée</span>
</h4>
<p className="text-xs text-slate-500 font-light">
<span className="lang-en">Fully equipped for feasts</span>
<span className="lang-fr hidden">Idéale pour vos festins</span>
</p>
</div>

<div className="bg-white p-8 hover:bg-[#FAF9F6] transition-colors group">
<iconify-icon className="text-slate-400 group-hover:text-[#D4AF37] transition-colors mb-4" icon="solar:wi-fi-square-linear" width="32"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide mb-2">
<span className="lang-en">High-Speed Wifi</span>
<span className="lang-fr hidden">Wifi Haut Débit</span>
</h4>
<p className="text-xs text-slate-500 font-light">
<span className="lang-en">Fiber optic connection</span>
<span className="lang-fr hidden">Connexion Fibre optique</span>
</p>
</div>

<div className="bg-white p-8 hover:bg-[#FAF9F6] transition-colors group">
<iconify-icon className="text-slate-400 group-hover:text-[#D4AF37] transition-colors mb-4" icon="solar:bath-linear" width="32"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide mb-2">
<span className="lang-en">4 Bathrooms</span>
<span className="lang-fr hidden">4 Salles de Bain</span>
</h4>
<p className="text-xs text-slate-500 font-light">
<span className="lang-en">Modern fittings &amp; towels</span>
<span className="lang-fr hidden">Modernes &amp; serviettes incluses</span>
</p>
</div>

<div className="bg-white p-8 hover:bg-[#FAF9F6] transition-colors group">
<iconify-icon className="text-slate-400 group-hover:text-[#D4AF37] transition-colors mb-4" icon="solar:leaf-linear" width="32"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide mb-2">
<span className="lang-en">Private Garden</span>
<span className="lang-fr hidden">Jardin Privé</span>
</h4>
<p className="text-xs text-slate-500 font-light">
<span className="lang-en">Terrace &amp; BBQ area</span>
<span className="lang-fr hidden">Terrasse &amp; Barbecue</span>
</p>
</div>

<div className="bg-white p-8 hover:bg-[#FAF9F6] transition-colors group">
<iconify-icon className="text-slate-400 group-hover:text-[#D4AF37] transition-colors mb-4" icon="solar:wheel-angle-linear" width="32"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide mb-2">
<span className="lang-en">Free Parking</span>
<span className="lang-fr hidden">Parking Gratuit</span>
</h4>
<p className="text-xs text-slate-500 font-light">
<span className="lang-en">Secure space for 4 cars</span>
<span className="lang-fr hidden">Espace sécurisé pour 4 voitures</span>
</p>
</div>

<div className="bg-white p-8 hover:bg-[#FAF9F6] transition-colors group">
<iconify-icon className="text-slate-400 group-hover:text-[#D4AF37] transition-colors mb-4" icon="solar:tv-linear" width="32"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide mb-2">
<span className="lang-en">Entertainment</span>
<span className="lang-fr hidden">Divertissement</span>
</h4>
<p className="text-xs text-slate-500 font-light">
<span className="lang-en">Smart TV &amp; Board Games</span>
<span className="lang-fr hidden">Smart TV &amp; Jeux de société</span>
</p>
</div>

<div className="bg-white p-8 hover:bg-[#FAF9F6] transition-colors group">
<iconify-icon className="text-slate-400 group-hover:text-[#D4AF37] transition-colors mb-4" icon="solar:washing-machine-linear" width="32"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-wide mb-2">
<span className="lang-en">Laundry</span>
<span className="lang-fr hidden">Buanderie</span>
</h4>
<p className="text-xs text-slate-500 font-light">
<span className="lang-en">Washer &amp; Dryer included</span>
<span className="lang-fr hidden">Lave-linge &amp; Sèche-linge</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-2 bg-[#0A0A0A]" id="gallery">
<div className="grid grid-cols-2 md:grid-cols-4 h-[60vh] md:h-[50vh]">
<div className="relative group overflow-hidden">
<img alt="Living Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group overflow-hidden">
<img alt="Master Bedroom" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group overflow-hidden">
<img alt="Garden" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative group overflow-hidden">
<img alt="Details" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/64057ac3-df3e-454c-b404-24040c016cfc_1600w.webp"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/50 group-hover:bg-black/30 transition-colors">
<span className="text-white text-xs uppercase tracking-widest border border-white px-6 py-3">
<span className="lang-en">View Full Gallery</span>
<span className="lang-fr hidden">Voir la Galerie</span>
</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="book">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="grid lg:grid-cols-5 gap-12 lg:gap-24">

<div className="lg:col-span-3">
<h2 className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-4">
<span className="lang-en">Reservations</span>
<span className="lang-fr hidden">Réservations</span>
</h2>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-8 text-slate-900">
<span className="lang-en">Secure Your Dates</span>
<span className="lang-fr hidden">Bloquez Vos Dates</span>
</h3>
<p className="text-slate-500 font-light mb-10 max-w-lg">
<span className="lang-en">We are currently accepting bookings for the upcoming season. Please fill out the form below to receive a personalized quote and availability confirmation.</span>
<span className="lang-fr hidden">Nous acceptons actuellement les réservations pour la saison à venir. Veuillez remplir le formulaire ci-dessous pour recevoir un devis personnalisé.</span>
</p>
<form className="space-y-8">
<div className="grid md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 group-focus-within:text-[#D4AF37] transition-colors">
<span className="lang-en">Name</span>
<span className="lang-fr hidden">Nom</span>
</label>
<input className="w-full custom-input py-3 text-slate-800" placeholder="Jean Dupont" type="text"/>
</div>
<div className="group">
<label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 group-focus-within:text-[#D4AF37] transition-colors">
<span className="lang-en">Email</span>
<span className="lang-fr hidden">Email</span>
</label>
<input className="w-full custom-input py-3 text-slate-800" placeholder="jean@example.com" type="email"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="group">
<label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 group-focus-within:text-[#D4AF37] transition-colors">
<span className="lang-en">Check In</span>
<span className="lang-fr hidden">Arrivée</span>
</label>
<input className="w-full custom-input py-3 text-slate-800" type="date"/>
</div>
<div className="group">
<label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 group-focus-within:text-[#D4AF37] transition-colors">
<span className="lang-en">Check Out</span>
<span className="lang-fr hidden">Départ</span>
</label>
<input className="w-full custom-input py-3 text-slate-800" type="date"/>
</div>
</div>
<div className="group">
<label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">
<span className="lang-en">Guests</span>
<span className="lang-fr hidden">Voyageurs</span>
</label>
<div className="flex items-center gap-6">
<label className="flex items-center gap-2 cursor-pointer">
<input className="accent-[#D4AF37] w-4 h-4" name="guests" type="radio"/>
<span className="text-sm font-light text-slate-600">1-4</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input className="accent-[#D4AF37] w-4 h-4" name="guests" type="radio"/>
<span className="text-sm font-light text-slate-600">5-8</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<input checked="" className="accent-[#D4AF37] w-4 h-4" name="guests" type="radio"/>
<span className="text-sm font-light text-slate-600">9-12</span>
</label>
</div>
</div>
<div className="pt-4">
<button className="w-full md:w-auto px-12 py-4 bg-black text-white text-xs font-semibold uppercase tracking-widest hover:bg-[#D4AF37] hover:text-black transition-all duration-300" type="submit">
<span className="lang-en">Request Quote</span>
<span className="lang-fr hidden">Demander un Devis</span>
</button>
</div>
</form>
</div>

<div className="lg:col-span-2 bg-[#FAF9F6] p-10 border border-slate-100 h-fit">
<h4 className="text-lg font-medium mb-8 font-['Montserrat']">
<span className="lang-en">Pricing &amp; Info</span>
<span className="lang-fr hidden">Tarifs &amp; Infos</span>
</h4>
<div className="space-y-6">
<div className="flex justify-between items-center border-b border-slate-200 pb-4">
<span className="text-sm text-slate-600 font-light">
<span className="lang-en">Low Season</span>
<span className="lang-fr hidden">Basse Saison</span>
</span>
<span className="text-sm font-semibold">
<span className="lang-en">from €350 / night</span>
<span className="lang-fr hidden">dès 350€ / nuit</span>
</span>
</div>
<div className="flex justify-between items-center border-b border-slate-200 pb-4">
<span className="text-sm text-slate-600 font-light">
<span className="lang-en">High Season</span>
<span className="lang-fr hidden">Haute Saison</span>
</span>
<span className="text-sm font-semibold">
<span className="lang-en">from €550 / night</span>
<span className="lang-fr hidden">dès 550€ / nuit</span>
</span>
</div>
<div className="flex justify-between items-center border-b border-slate-200 pb-4">
<span className="text-sm text-slate-600 font-light">
<span className="lang-en">Cleaning Fee</span>
<span className="lang-fr hidden">Ménage</span>
</span>
<span className="text-sm font-semibold">€150</span>
</div>
</div>
<div className="mt-8 space-y-4">
<div className="flex items-start gap-4 text-slate-600">
<iconify-icon className="mt-1 text-[#D4AF37]" icon="solar:clock-circle-linear" width="18"></iconify-icon>
<div className="text-sm font-light">
<p><span className="font-medium">Check-in:</span> 16:00 - 20:00</p>
<p><span className="font-medium">Check-out:</span> 10:00</p>
</div>
</div>
<div className="flex items-start gap-4 text-slate-600">
<iconify-icon className="mt-1 text-[#D4AF37]" icon="solar:phone-calling-linear" width="18"></iconify-icon>
<div className="text-sm font-light">
<p>+33 6 12 34 56 78</p>
<p className="text-xs text-slate-400 mt-1">
<span className="lang-en">Available via WhatsApp</span>
<span className="lang-fr hidden">Dispo sur WhatsApp</span>
</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 bg-[#0A0A0A] text-white border-t border-white/10">
<div className="max-w-7xl mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<a className="text-xl font-semibold tracking-tighter uppercase mb-2 block" href="#">
                        Manoir <span className="text-[#D4AF37]">Val de Loire</span>
</a>
<p className="text-[10px] text-white/40 uppercase tracking-widest max-w-xs leading-relaxed">
<span className="lang-en">Exclusive holiday rental in the heart of France.<br/>Located between Chambord &amp; Beauval.</span>
<span className="lang-fr hidden">Location de vacances exclusive au cœur de la France.<br/>Situé entre Chambord &amp; Beauval.</span>
</p>
</div>
<div className="flex flex-wrap gap-8 text-[10px] uppercase tracking-widest text-white/60">
<a className="hover:text-white transition-colors" href="#">
<span className="lang-en">The Gîte</span>
<span className="lang-fr hidden">Le Gîte</span>
</a>
<a className="hover:text-white transition-colors" href="#">
<span className="lang-en">Explore Loire</span>
<span className="lang-fr hidden">Découvrir la Loire</span>
</a>
<a className="hover:text-white transition-colors" href="#">
<span className="lang-en">Privacy Policy</span>
<span className="lang-fr hidden">Confidentialité</span>
</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300" href="#">
<iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-black transition-all duration-300" href="#">
<iconify-icon icon="brandico:facebook" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 text-center md:text-left">
<p className="text-[10px] text-white/20 uppercase tracking-widest">
<span className="lang-en">© 2024 Manoir Val de Loire. Designed with elegance.</span>
<span className="lang-fr hidden">© 2024 Manoir Val de Loire. Conçu avec élégance.</span>
</p>
</div>
</div>
</footer>


    </>
  );
}
