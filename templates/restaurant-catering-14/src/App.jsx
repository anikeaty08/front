import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- Cookie Logic ---
        function closeCookies() {
            const modal = document.getElementById('cookie-consent');
            modal.style.opacity = '0';
            modal.style.transform = 'translateY(20px)';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 500);
        }

        // --- Reservation Modal Logic ---
        function toggleReservation() {
            const modal = document.getElementById('reservation-modal');
            const panel = document.getElementById('reservation-panel');
            const body = document.body;
            
            if (modal.classList.contains('hidden')) {
                // Open
                modal.classList.remove('hidden');
                // Trigger reflow
                void modal.offsetWidth;
                modal.classList.remove('opacity-0');
                panel.classList.remove('translate-x-full');
                body.style.overflow = 'hidden';
            } else {
                // Close
                modal.classList.add('opacity-0');
                panel.classList.add('translate-x-full');
                setTimeout(() => {
                    modal.classList.add('hidden');
                    body.style.overflow = '';
                }, 300);
            }
        }

        // --- Scroll Animation Reveal ---
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            var windowHeight = window.innerHeight;
            var elementVisible = 100;

            for (var i = 0; i < reveals.length; i++) {
                var elementTop = reveals[i].getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }

        window.addEventListener("scroll", reveal);
        // Trigger once on load
        reveal();

        // --- Parallax Effect on Hero & Images ---
        window.addEventListener("scroll", function() {
            const scrollPosition = window.pageYOffset;
            const heroImage = document.getElementById('hero-image');
            if(heroImage) {
                heroImage.style.transform = "translateY(" + (scrollPosition * 0.4) + "px) scale(1.05)";
            }
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-6 left-6 z-50 max-w-sm w-full bg-white/90 backdrop-blur-md border border-neutral-200 shadow-xl rounded-lg p-6 transform transition-all duration-500 translate-y-0 opacity-100" id="cookie-consent">
<div className="flex flex-col space-y-3">
<div className="flex items-start justify-between">
<iconify-icon className="text-[#2C3037]" icon="solar:cookie-linear" width="24"></iconify-icon>
<button className="text-neutral-400 hover:text-[#2C3037] transition-colors" onclick="closeCookies()">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
</div>
<p className="text-sm text-neutral-600 leading-relaxed">
                Bienvenue au <strong>Royal</strong>. Nous utilisons des cookies pour améliorer votre expérience à Valenton.
            </p>
<div className="flex space-x-3 pt-2">
<button className="flex-1 bg-[#2C3037] text-white text-xs font-medium py-2 rounded-md hover:bg-neutral-800 transition-colors tracking-wide" onclick="closeCookies()">
                    ACCEPTER
                </button>
<button className="flex-1 bg-transparent border border-neutral-200 text-neutral-600 text-xs font-medium py-2 rounded-md hover:bg-neutral-50 transition-colors" onclick="closeCookies()">
                    REFUSER
                </button>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-neutral-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="text-2xl font-serif text-[#2C3037] tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-2" href="#">
                Le Royal
            </a>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm text-neutral-600 hover:text-[#A97959] transition-colors" href="#about">À Propos</a>
<a className="text-sm text-neutral-600 hover:text-[#A97959] transition-colors" href="#menu">La Carte</a>
<a className="text-sm text-neutral-600 hover:text-[#A97959] transition-colors" href="#services">Traiteur &amp; Salle</a>
<a className="text-sm text-neutral-600 hover:text-[#A97959] transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center space-x-4">
<button className="hidden md:flex items-center space-x-2 bg-[#A97959] text-white px-5 py-2.5 rounded-full hover:bg-[#8e654a] transition-all transform hover:scale-[1.02] shadow-sm" onclick="toggleReservation()">
<span className="text-xs font-medium tracking-wide">RÉSERVER / BOOK</span>
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
</button>

<button className="md:hidden text-[#2C3037]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[60] hidden opacity-0 transition-opacity duration-300" id="reservation-modal">
<div className="absolute inset-0 bg-[#2C3037]/60 backdrop-blur-sm" onclick="toggleReservation()"></div>
<div className="absolute right-0 top-0 h-full w-full md:w-[500px] bg-white shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col" id="reservation-panel">
<div className="p-6 border-b border-neutral-100 flex justify-between items-center bg-white">
<div>
<h2 className="text-lg font-medium text-[#2C3037] tracking-tight">Réserver une table</h2>
<p className="text-xs text-neutral-400">Le Royal - Valenton</p>
</div>
<button className="p-2 hover:bg-neutral-100 rounded-full transition-colors" onclick="toggleReservation()">
<iconify-icon className="text-neutral-500" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 overflow-y-auto p-6 space-y-8 bg-[#FAFAFA]">

<div className="space-y-4">
<div className="space-y-2">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Votre Nom</label>
<input className="w-full bg-white border border-neutral-200 p-3 rounded-lg text-sm focus:outline-none focus:border-[#A97959]" placeholder="Nom Prénom" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Téléphone</label>
<input className="w-full bg-white border border-neutral-200 p-3 rounded-lg text-sm focus:outline-none focus:border-[#A97959]" placeholder="06 00 00 00 00" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">Nombre de personnes</label>
<select className="w-full bg-white border border-neutral-200 p-3 rounded-lg text-sm focus:outline-none focus:border-[#A97959]">
<option>1 Personne</option>
<option selected="">2 Personnes</option>
<option>3 Personnes</option>
<option>4+ Personnes (Groupe)</option>
</select>
</div>
</div>
<div className="bg-neutral-50 p-4 rounded-lg border border-neutral-200">
<h4 className="text-sm font-semibold text-[#2C3037] mb-2 flex items-center gap-2">
<iconify-icon className="text-[#A97959]" icon="solar:info-circle-linear"></iconify-icon>
                        Information
                    </h4>
<p className="text-xs text-neutral-500">Pour les groupes de plus de 30 personnes ou une privatisation de salle, merci de nous contacter directement par téléphone.</p>
</div>
</div>
<div className="p-6 border-t border-neutral-100 bg-white">
<button className="w-full bg-[#2C3037] text-white py-4 rounded-lg font-medium tracking-wide hover:bg-neutral-800 transition-all flex justify-center items-center gap-2 group">
<span>ENVOYER LA DEMANDE</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<header className="relative h-screen w-full overflow-hidden flex items-center justify-center">

<div className="absolute inset-0 z-0">

<img alt="Le Royal Ambiance" className="w-full h-full object-cover object-center opacity-90 scale-105" id="hero-image" src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1920&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#2C3037]/90"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-6">
<div className="inline-flex items-center space-x-2 border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full reveal">
<span className="w-2 h-2 bg-[#A97959] rounded-full animate-pulse"></span>
<span className="text-xs text-white/90 tracking-widest uppercase font-medium">C'est bon, c'est fait maison !</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-none reveal" style={{transitionDelay: '100ms'}}>
                Le Royal
            </h1>
<p className="text-lg md:text-xl text-neutral-200 font-light tracking-wide max-w-lg mx-auto reveal" style={{transitionDelay: '200ms'}}>
                Cuisine traditionnelle française revisitée à Valenton. <br/>
<span className="text-sm text-neutral-400 mt-2 block">Produits frais &amp; saveurs authentiques.</span>
</p>
<div className="pt-8 reveal flex flex-col sm:flex-row items-center justify-center gap-4" style={{transitionDelay: '300ms'}}>
<button className="group bg-[#A97959] border border-[#A97959] text-white px-8 py-3 rounded-full hover:bg-transparent hover:text-white transition-all duration-300 w-full sm:w-auto" onclick="document.getElementById('menu').scrollIntoView({behavior: 'smooth'})">
<span className="text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-2">
                        Découvrir la Carte
                        <iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear"></iconify-icon>
</span>
</button>
<button className="group bg-transparent border border-white/30 text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#2C3037] transition-all duration-300 w-full sm:w-auto" onclick="document.getElementById('services').scrollIntoView({behavior: 'smooth'})">
<span className="text-sm font-medium tracking-widest uppercase flex items-center justify-center gap-2">
                        Nos Services
                    </span>
</button>
</div>
</div>
<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
<iconify-icon className="text-white/50" icon="solar:alt-arrow-down-linear" width="24"></iconify-icon>
</div>
</header>

<section className="py-24 bg-[#FAFAFA]" id="about">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6 reveal">
<span className="text-[#A97959] text-xs font-bold tracking-[0.2em] uppercase">Notre Établissement</span>
<h2 className="text-3xl md:text-4xl font-serif text-[#2C3037] tracking-tight">Tradition &amp; Modernité</h2>
<div className="w-12 h-0.5 bg-[#A97959]"></div>
<p className="text-neutral-600 leading-relaxed font-light text-lg">
                    Situé au cœur de Valenton, <strong>Le Royal</strong> est bien plus qu'un simple restaurant. C'est un lieu de vie où la cuisine française traditionnelle rencontre la créativité. Nos chefs s'engagent à utiliser des <strong>produits frais et du terroir</strong> pour vous offrir une expérience culinaire "fait maison".
                </p>

<div className="grid grid-cols-2 gap-4 pt-4">
<div className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-[#A97959] text-xl" icon="solar:sofa-linear"></iconify-icon>
<span>Grande Terrasse</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-[#A97959] text-xl" icon="solar:wheel-angle-linear"></iconify-icon>
<span>Parking Privé</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-[#A97959] text-xl" icon="solar:wi-fi-linear"></iconify-icon>
<span>Wifi Gratuit</span>
</div>
<div className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon className="text-[#A97959] text-xl" icon="solar:snowflake-linear"></iconify-icon>
<span>Salle Climatisée</span>
</div>
</div>
<div className="pt-6">
<a className="inline-flex items-center gap-2 text-[#2C3037] border-b border-[#2C3037] pb-1 hover:text-[#A97959] hover:border-[#A97959] transition-all" href="tel:0143891575">
<span>Nous contacter</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="relative reveal img-container rounded-lg overflow-hidden shadow-2xl" style={{transitionDelay: '200ms'}}>

<img alt="Cuisine Traditionnelle" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 bg-[#2C3037] text-white relative overflow-hidden" id="menu">

<div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<span className="text-[#A97959] text-xs font-bold tracking-[0.2em] uppercase mb-2 block">Fait Maison</span>
<h2 className="text-4xl md:text-5xl font-serif tracking-tight">La Carte</h2>
<p className="text-neutral-400 mt-4 italic">Nos plats évoluent selon les saisons et les arrivages.</p>
</div>

<div className="flex justify-center mb-12 space-x-8 text-sm font-medium tracking-wide reveal">
<button className="text-[#A97959] border-b-2 border-[#A97959] pb-2">Entrées &amp; Plats</button>
<button className="text-neutral-400 hover:text-white transition-colors pb-2">Desserts</button>
</div>

<div className="grid gap-12">

<div className="group cursor-default reveal">
<div className="flex items-baseline justify-between mb-1">
<h3 className="text-xl font-serif group-hover:text-[#A97959] transition-colors">Tête de Veau Sauce Gribiche</h3>
<span className="text-lg font-light text-[#A97959]">-- €</span>
</div>
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400 font-light">Un classique de la maison, préparé avec soin.</p>
<div className="flex-grow mx-4 border-b border-neutral-700/50 border-dotted h-1 hidden sm:block"></div>
</div>
</div>

<div className="group cursor-default reveal" style={{transitionDelay: '100ms'}}>
<div className="flex items-baseline justify-between mb-1">
<h3 className="text-xl font-serif group-hover:text-[#A97959] transition-colors">Entrecôte (300g) &amp; Frites Maison</h3>
<span className="text-lg font-light text-[#A97959]">-- €</span>
</div>
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400 font-light">Viande de race sélectionnée, sauce au poivre ou roquefort.</p>
<div className="flex-grow mx-4 border-b border-neutral-700/50 border-dotted h-1 hidden sm:block"></div>
</div>
</div>

<div className="group cursor-default reveal" style={{transitionDelay: '200ms'}}>
<div className="flex items-baseline justify-between mb-1">
<h3 className="text-xl font-serif group-hover:text-[#A97959] transition-colors">Buffet d'Entrées à Volonté</h3>
<span className="text-lg font-light text-[#A97959]">-- €</span>
</div>
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400 font-light">Large choix de crudités, charcuteries et salades fraîches.</p>
<div className="flex-grow mx-4 border-b border-neutral-700/50 border-dotted h-1 hidden sm:block"></div>
</div>
</div>

<div className="group cursor-default reveal" style={{transitionDelay: '300ms'}}>
<div className="flex items-baseline justify-between mb-1">
<h3 className="text-xl font-serif group-hover:text-[#A97959] transition-colors">Plat du Jour</h3>
<span className="text-lg font-light text-[#A97959]">-- €</span>
</div>
<div className="flex items-center justify-between">
<p className="text-sm text-neutral-400 font-light">Recette du marché selon l'inspiration du Chef.</p>
<div className="flex-grow mx-4 border-b border-neutral-700/50 border-dotted h-1 hidden sm:block"></div>
</div>
</div>
</div>
<div className="mt-16 text-center reveal">
<button className="inline-flex items-center gap-2 text-sm text-white border border-[#A97959] px-6 py-3 hover:bg-[#A97959] transition-all duration-300" onclick="toggleReservation()">
                    RÉSERVER UNE TABLE
                </button>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-serif text-[#2C3037]">Nos Services Événementiels</h2>
<div className="w-16 h-0.5 bg-[#A97959] mx-auto mt-6"></div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-lg shadow-lg border border-neutral-100 reveal group hover:-translate-y-2 transition-transform duration-500">
<div className="w-14 h-14 bg-[#A97959]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#A97959] transition-colors">
<iconify-icon className="text-[#A97959] text-3xl group-hover:text-white transition-colors" icon="solar:chef-hat-linear"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-[#2C3037] mb-4">Service Traiteur</h3>
<p className="text-neutral-600 mb-6 leading-relaxed">
                        Pour vos événements professionnels ou personnels, nous proposons un service traiteur sur mesure. Nos plats sont élaborés en tenant compte des saisons.
                    </p>
<ul className="text-sm text-neutral-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-[#A97959]" icon="solar:check-circle-linear"></iconify-icon> Produits de saison</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#A97959]" icon="solar:check-circle-linear"></iconify-icon> Menus personnalisables</li>
</ul>
</div>

<div className="bg-white p-8 rounded-lg shadow-lg border border-neutral-100 reveal group hover:-translate-y-2 transition-transform duration-500" style={{transitionDelay: '100ms'}}>
<div className="w-14 h-14 bg-[#A97959]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#A97959] transition-colors">
<iconify-icon className="text-[#A97959] text-3xl group-hover:text-white transition-colors" icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-xl font-serif text-[#2C3037] mb-4">Location &amp; Privatisation</h3>
<p className="text-neutral-600 mb-6 leading-relaxed">
                        Notre capacité d'accueil allant de <strong>60 à 80 personnes</strong>, vous avez la possibilité de privatiser le restaurant et sa terrasse pour vos groupes à partir de 30 personnes.
                    </p>
<ul className="text-sm text-neutral-500 space-y-2 mb-6">
<li className="flex items-center gap-2"><iconify-icon className="text-[#A97959]" icon="solar:check-circle-linear"></iconify-icon> Capacité 80 couverts</li>
<li className="flex items-center gap-2"><iconify-icon className="text-[#A97959]" icon="solar:check-circle-linear"></iconify-icon> Terrasse disponible</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white overflow-hidden" id="gallery">
<div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide snap-x">

<div className="flex-none w-80 md:w-96 h-64 relative rounded-lg overflow-hidden group snap-center reveal">
<img alt="Plat Fait Maison" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
</div>

<div className="flex-none w-80 md:w-96 h-64 relative rounded-lg overflow-hidden group snap-center reveal" style={{transitionDelay: '100ms'}}>
<img alt="Restaurant Interieur" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="flex-none w-80 md:w-96 h-64 relative rounded-lg overflow-hidden group snap-center reveal" style={{transitionDelay: '200ms'}}>
<img alt="Terrasse" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="flex-none w-80 md:w-96 h-64 relative rounded-lg overflow-hidden group snap-center reveal" style={{transitionDelay: '300ms'}}>
<img alt="Viande Grillée" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1544025162-d76690b6860b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</section>

<footer className="bg-[#FAFAFA] border-t border-neutral-200 pt-16 pb-8" id="contact">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<h3 className="text-2xl font-serif text-[#2C3037] mb-6">Le Royal</h3>
<p className="text-sm text-neutral-500 leading-relaxed mb-4">
                    Une cuisine généreuse, un accueil chaleureux et des produits de qualité.
                </p>
<div className="flex space-x-4">
<a className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#2C3037] hover:bg-[#2C3037] hover:text-white transition-all hover:-translate-y-1" href="#">
<iconify-icon icon="solar:camera-linear" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-[#2C3037] hover:bg-[#2C3037] hover:text-white transition-all hover:-translate-y-1" href="#">
<iconify-icon icon="solar:facebook-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div className="col-span-1">
<h4 className="text-sm font-semibold text-[#2C3037] uppercase tracking-wider mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-[#A97959]" icon="solar:map-point-linear"></iconify-icon>
                        64 Avenue Henri Barbusse, <br/>94460 Valenton
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#A97959]" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-[#A97959]" href="tel:0143891575">01 43 89 15 75</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#A97959]" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-[#A97959]" href="mailto:leroyalpompadour@orange.fr">leroyalpompadour@orange.fr</a>
</li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-sm font-semibold text-[#2C3037] uppercase tracking-wider mb-4">Horaires</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li className="flex justify-between border-b border-neutral-100 pb-2">
<span>Lundi - Vendredi</span>
<span>Midi et Soir</span>
</li>
<li className="flex justify-between border-b border-neutral-100 pb-2">
<span>Week-end</span>
<span>Sur Privatisation</span>
</li>
<li className="flex justify-between pt-1 text-[#A97959]">
<span>Traiteur</span>
<span>Sur demande</span>
</li>
</ul>
</div>
<div className="col-span-1">
<h4 className="text-sm font-semibold text-[#2C3037] uppercase tracking-wider mb-4">Accès</h4>
<div className="text-sm text-neutral-500 space-y-2">
<p>Parking privé disponible pour la clientèle.</p>
<a className="inline-block mt-2 text-xs font-semibold text-[#A97959] border border-[#A97959] px-3 py-2 rounded hover:bg-[#A97959] hover:text-white transition-all" href="https://maps.google.com/?q=64+Avenue+Henri+Barbusse+94460+Valenton" target="_blank">
                        ITINÉRAIRE GOOGLE MAPS
                    </a>
</div>
</div>
</div>
<div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 text-xs text-neutral-400">
<p>© 2026 Le Royal. Tous droits réservés.</p>
<div className="flex space-x-6 mt-4 md:mt-0">
<a className="hover:text-[#2C3037]" href="#">Mentions Légales</a>
<a className="hover:text-[#2C3037]" href="#">Politique de Confidentialité</a>
</div>
</div>
</footer>



    </>
  );
}
