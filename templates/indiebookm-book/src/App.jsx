import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
sun: {
50: '#fffbf5',
100: '#fff4e1',
200: '#ffe3bc',
300: '#ffcc88',
400: '#ffad52',
500: '#ff8c24',
},
coral: {
50: '#fff1f2',
100: '#ffe4e6',
200: '#fecdd3',
400: '#fb7185',
500: '#f43f5e',
},
stone: {
850: '#1c1917',
}
},
fontFamily: {
sans: ['"DM Sans"', 'sans-serif'],
serif: ['"Playfair Display"', 'serif'],
}
}
}
}



        const app = document.getElementById('app-content');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const navbar = document.getElementById('navbar');

        // Map hash paths to Template IDs
        const routes = {
            '': 'tpl-home', // Default
            '/': 'tpl-home',
            '/authors': 'tpl-authors',
            '/publish': 'tpl-publish',
            '/readers': 'tpl-readers',
            '/book': 'tpl-book',
            '/author': 'tpl-author',
            '/about': 'tpl-about'
        };

        // --- Router (Static Friendly) ---
        function router() {
            // Get hash (remove #)
            let hash = window.location.hash.slice(1) || '/';
            // Remove trailing slash if present (except root)
            if (hash.length > 1 && hash.endsWith('/')) {
                hash = hash.slice(0, -1);
            }

            // Scroll top
            window.scrollTo(0, 0);

            // Get template
            const templateId = routes[hash] || 'tpl-home';
            const template = document.getElementById(templateId);
            
            if(template) {
                app.innerHTML = '';
                app.appendChild(template.content.cloneNode(true));
                updateActiveNav(hash);
            } else {
                // Fallback 404 handler (redirect home)
                window.location.hash = '#/';
            }
        }

        // --- Active Nav State ---
        function updateActiveNav(hash) {
            document.querySelectorAll('.nav-link').forEach(link => {
                const href = link.getAttribute('href').replace('#', '');
                // Simple strict match or match start for sub-sections
                if (href === hash) {
                    link.classList.add('text-coral-500');
                    link.querySelector('span').classList.replace('w-0', 'w-full');
                } else {
                    link.classList.remove('text-coral-500');
                    link.querySelector('span').classList.replace('w-full', 'w-0');
                }
            });
        }

        // --- Interactions ---

        function showToast(title, message) {
            const toast = document.getElementById('toast');
            const toastTitle = document.getElementById('toast-title');
            const toastMsg = document.getElementById('toast-message');
            
            toastTitle.innerText = title;
            toastMsg.innerText = message;
            
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        function toggleMobileMenu() {
            const isHidden = mobileMenu.classList.contains('hidden');
            if (isHidden) {
                mobileMenu.classList.remove('hidden');
                setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
                menuIcon.setAttribute('icon', 'solar:close-circle-linear');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('opacity-0');
                setTimeout(() => mobileMenu.classList.add('hidden'), 300);
                menuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = '';
            }
        }

        // Publish Form
        function handlePublish(event) {
            event.preventDefault();
            const btn = event.target.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;
            
            // Loading state
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin text-xl"></iconify-icon> Envoi en cours...';
            btn.classList.add('opacity-80', 'cursor-not-allowed');
            btn.disabled = true;
            
            setTimeout(() => {
                showToast('Félicitations !', 'Votre livre est publié.');
                btn.innerHTML = originalText;
                btn.classList.remove('opacity-80', 'cursor-not-allowed');
                btn.disabled = false;
                // Redirect via hash
                window.location.hash = '#/author'; 
            }, 1500);
        }

        // Like Button Logic
        function toggleHeart(btn) {
            const icon = btn.querySelector('iconify-icon');
            const isLiked = icon.getAttribute('icon').includes('bold');
            
            if(isLiked) {
                icon.setAttribute('icon', 'solar:heart-linear');
                icon.classList.remove('text-coral-500');
                btn.classList.remove('border-coral-200', 'bg-coral-50');
                btn.classList.add('text-stone-400', 'border-stone-200');
            } else {
                icon.setAttribute('icon', 'solar:heart-bold');
                icon.classList.add('text-coral-500');
                icon.classList.remove('text-stone-400');
                btn.classList.add('border-coral-200', 'bg-coral-50');
                btn.classList.remove('border-stone-200');
                
                icon.animate([
                    { transform: 'scale(1)' },
                    { transform: 'scale(1.4)' },
                    { transform: 'scale(1)' }
                ], { duration: 300 });
                
                showToast('Favoris', 'Ajouté à vos coups de cœur');
            }
        }

        function toggleFollow(btn) {
            if(btn.innerText.includes('Suivre')) {
                btn.innerHTML = '<iconify-icon icon="solar:check-circle-bold"></iconify-icon> Abonné';
                btn.classList.remove('bg-stone-800', 'text-white');
                btn.classList.add('bg-white', 'border', 'border-stone-200', 'text-stone-800');
                showToast('Abonnement', 'Vous suivez cet auteur');
            } else {
                btn.innerHTML = '<iconify-icon icon="solar:user-plus-linear"></iconify-icon> Suivre';
                btn.classList.add('bg-stone-800', 'text-white');
                btn.classList.remove('bg-white', 'border', 'border-stone-200', 'text-stone-800');
            }
        }

        function filterBooks(clickedBtn) {
            const parent = clickedBtn.parentElement;
            const buttons = parent.querySelectorAll('button');
            
            buttons.forEach(btn => {
                btn.className = "px-4 py-2 bg-white border border-stone-200 text-stone-600 rounded-full text-sm font-medium hover:border-sun-400 hover:text-sun-500 transition-all whitespace-nowrap cursor-pointer";
            });

            clickedBtn.className = "px-4 py-2 bg-stone-800 text-white rounded-full text-sm font-medium transition-all shadow-md whitespace-nowrap cursor-default";
            
            const grid = document.getElementById('books-grid');
            if(grid) {
                grid.style.opacity = '0.5';
                setTimeout(() => grid.style.opacity = '1', 300);
            }
        }

        // Init: Listen to hash changes and load initial route
        window.addEventListener('hashchange', router);
        window.addEventListener('DOMContentLoaded', router);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-sun-50/80 backdrop-blur-md border-b border-sun-200/50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group cursor-pointer select-none" href="#/">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sun-400 to-coral-400 flex items-center justify-center text-white shadow-lg shadow-sun-500/20 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:book-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="font-serif text-xl font-medium tracking-tight text-stone-800 group-hover:text-coral-500 transition-colors">IndieBookMarket</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="nav-link hover:text-coral-500 transition-colors py-2 relative group" href="#/readers">
                    Lecteurs
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="nav-link hover:text-coral-500 transition-colors py-2 relative group" href="#/authors">
                    Auteurs
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral-400 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="nav-link hover:text-coral-500 transition-colors py-2 relative group" href="#/about">
                    À propos
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral-400 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 bg-stone-800 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-coral-500 transition-all hover:shadow-lg hover:shadow-coral-500/20 active:scale-95" href="#/publish">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
                    Publier un livre
                </a>

<button className="md:hidden text-stone-800 p-2 hover:bg-sun-100 rounded-full transition-colors relative z-50" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-sun-50 z-40 flex flex-col pt-24 px-6 hidden opacity-0 transition-opacity duration-300 h-screen" id="mobile-menu">
<a className="text-3xl font-serif text-stone-800 py-4 border-b border-sun-200" href="#/readers" onclick="toggleMobileMenu()">Lecteurs</a>
<a className="text-3xl font-serif text-stone-800 py-4 border-b border-sun-200" href="#/authors" onclick="toggleMobileMenu()">Auteurs</a>
<a className="text-3xl font-serif text-stone-800 py-4 border-b border-sun-200" href="#/about" onclick="toggleMobileMenu()">À propos</a>
<a className="mt-8 w-full bg-stone-800 text-white py-4 rounded-xl text-lg font-medium shadow-xl text-center flex items-center justify-center gap-2" href="#/publish" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon> Publier un livre
            </a>
</div>
</nav>

<div className="fixed top-24 right-6 z-[60] bg-stone-850 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-4 transform -translate-y-4 max-w-sm border border-stone-700" id="toast">
<div className="bg-gradient-to-br from-green-400 to-emerald-600 text-white p-2 rounded-full flex-shrink-0 shadow-lg">
<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-medium text-sm text-sun-50" id="toast-title">Succès</h4>
<p className="text-xs text-stone-400 mt-0.5" id="toast-message">Action effectuée.</p>
</div>
</div>

<main className="pt-20 flex-grow min-h-[80vh]" id="app-content"></main>

<footer className="bg-white border-t border-sun-100 pt-16 pb-8 mt-auto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded-full bg-gradient-to-tr from-sun-400 to-coral-400 flex items-center justify-center text-white text-[10px]">
<iconify-icon icon="solar:book-linear"></iconify-icon>
</div>
<span className="font-serif text-lg font-medium tracking-tight text-stone-800">IndieBookMarket</span>
</div>
<p className="text-sm leading-relaxed text-stone-500">
                        Une plateforme ensoleillée pour connecter les esprits créatifs et les lecteurs passionnés. Cultivons l'imaginaire ensemble.
                    </p>
</div>
<div>
<h4 className="font-medium text-stone-800 mb-4">Découvrir</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-coral-500 transition-colors" href="#/readers">Nouveautés</a></li>
<li><a className="hover:text-coral-500 transition-colors" href="#/readers">Coups de cœur</a></li>
<li><a className="hover:text-coral-500 transition-colors" href="#/authors">Auteurs</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-800 mb-4">Communauté</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-coral-500 transition-colors" href="#/publish">Devenir auteur</a></li>
<li><a className="hover:text-coral-500 transition-colors" href="#/author">Mon profil</a></li>
<li><a className="hover:text-coral-500 transition-colors" href="#/about">Manifeste</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-stone-800 mb-4">Aide</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-coral-500 transition-colors" href="#/about">FAQ</a></li>
<li><button className="hover:text-coral-500 transition-colors text-left" onclick="showToast('Message envoyé', 'Nous vous répondrons bientôt.')">Contact</button></li>
<li><a className="hover:text-coral-500 transition-colors" href="#/about">Mentions légales</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-sun-100 text-xs text-stone-400">
<p>© 2023 IndieBookMarket. Fait avec du soleil et du code.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<button className="hover:text-coral-500 transition-colors"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></button>
<button className="hover:text-coral-500 transition-colors"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></button>
</div>
</div>
</div>
</footer>


<template id="tpl-home">
<div className="page-transition">

<section className="relative overflow-hidden pt-12 pb-20 px-6">
<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sun-100 text-sun-600 text-xs font-semibold uppercase tracking-wider mb-6 border border-sun-200">
<iconify-icon icon="solar:sun-2-bold"></iconify-icon> Édition estivale
                        </div>
<h1 className="font-serif text-5xl md:text-6xl text-stone-800 font-medium tracking-tight leading-[1.1] mb-6">
                            Là où les histoires prennent le soleil.
                        </h1>
<p className="text-lg text-stone-500 leading-relaxed mb-8 max-w-md">
                            Une librairie indépendante en ligne, conçue pour les amoureux des mots et les auteurs qui osent. Sans intermédiaire superflu.
                        </p>
<div className="flex flex-wrap gap-4">
<a className="px-8 py-3.5 bg-stone-800 text-white rounded-full font-medium hover:bg-stone-700 transition-all hover:-translate-y-1 shadow-lg shadow-stone-800/20 active:scale-95 inline-flex items-center gap-2" href="#/publish">
                                Je suis auteur <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="px-8 py-3.5 bg-white border border-stone-200 text-stone-800 rounded-full font-medium hover:bg-sun-50 hover:border-sun-300 transition-all active:scale-95" href="#/readers">
                                Je suis lecteur
                            </a>
</div>
</div>
<div className="relative group">
<div className="absolute -top-10 -right-10 w-64 h-64 bg-sun-200 rounded-full blur-3xl opacity-50 animate-pulse"></div>
<a className="block" href="#/readers">
<img alt="Lecture au soleil" className="shadow-2xl shadow-sun-500/10 hover:rotate-0 transition-transform duration-700 w-full h-[500px] object-cover z-10 rounded-[2rem] relative rotate-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd0e45d0-59e1-4d19-8c71-01b7ddd340ad_1600w.jpg"/>
</a>
</div>
</div>
</section>

<section className="bg-white pt-20 pb-20">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-3xl text-stone-800 mb-4 tracking-tight">À chaque moment son histoire</h2>
<p className="text-stone-500">Redécouvrez le plaisir simple de tourner une page, loin des notifications.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<a className="group block" href="#/readers">
<div className="overflow-hidden rounded-2xl mb-4 relative">
<div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors z-10"></div>
<img className="group-hover:scale-105 transition-transform duration-700 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b83af3a1-c7a0-4554-ae38-ba0b98a1bbc7_800w.jpg"/>
</div>
<h3 className="font-serif text-xl mb-2 text-stone-800 group-hover:text-coral-500 transition-colors flex items-center gap-2">
                                Pause Café <iconify-icon className="opacity-0 group-hover:opacity-100 transition-opacity text-sm" icon="solar:cup-linear"></iconify-icon>
</h3>
<p className="text-sm text-stone-500">Quelques pages volées à la frénésie du matin.</p>
</a>
<a className="group block" href="#/readers">
<div className="overflow-hidden rounded-2xl mb-4 relative">
<img className="group-hover:scale-105 transition-transform duration-700 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1728a6e2-e722-4e8a-9204-208dd67f235d_800w.jpg"/>
</div>
<h3 className="font-serif text-xl mb-2 text-stone-800 group-hover:text-coral-500 transition-colors">Au grand air</h3>
<p className="text-sm text-stone-500">S'évader dans un parc, sous l'ombre d'un chêne.</p>
</a>
<a className="group block" href="#/readers">
<div className="overflow-hidden rounded-2xl mb-4 relative">
<img className="group-hover:scale-105 transition-transform duration-700 w-full h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d81ba1d-cb4a-4852-93bb-ad3a7e7dca96_800w.jpg"/>
</div>
<h3 className="font-serif text-xl mb-2 text-stone-800 group-hover:text-coral-500 transition-colors">Douceur du soir</h3>
<p className="text-sm text-stone-500">Terminer la journée sur une note imaginaire.</p>
</a>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="font-serif text-3xl text-stone-800 tracking-tight">En vitrine ce mois-ci</h2>
<a className="text-sm font-medium text-stone-500 hover:text-coral-500 flex items-center gap-1 transition-colors group" href="#/readers">
                            Voir tout <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">

<a className="group block" href="#/book">
<div className="aspect-book bg-stone-100 rounded-xl mb-4 overflow-hidden shadow-sm group-hover:shadow-lg transition-all relative">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/081ba789-285c-4c60-bbcc-11a419527b54_800w.jpg"/>
</div>
<h4 className="leading-tight group-hover:text-coral-500 transition-colors text-lg text-stone-800 font-serif mb-1">La vie sans soucis</h4>
<p className="text-xs text-stone-400 uppercase tracking-wide">Clara M.</p>
</a>
<a className="group block" href="#/book">
<div className="aspect-book bg-stone-100 rounded-xl mb-4 overflow-hidden shadow-sm group-hover:shadow-lg transition-all relative">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<h4 className="font-serif text-lg text-stone-800 leading-tight mb-1 group-hover:text-coral-500 transition-colors">L'Archipel</h4>
<p className="text-xs text-stone-400 uppercase tracking-wide">Julien D.</p>
</a>
<a className="group block" href="#/book">
<div className="aspect-book bg-stone-100 rounded-xl mb-4 overflow-hidden shadow-sm group-hover:shadow-lg transition-all relative">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd572337-a497-450a-9a74-0b4ffd576e6c_800w.jpg"/>
</div>
<h4 className="leading-tight group-hover:text-coral-500 transition-colors text-lg text-stone-800 font-serif mb-1">BE in LOVE</h4>
<p className="uppercase text-xs text-stone-400 tracking-wide">Sophie L.</p>
</a>
<a className="group block" href="#/book">
<div className="aspect-book bg-stone-100 rounded-xl mb-4 overflow-hidden shadow-sm group-hover:shadow-lg transition-all relative">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/311dc865-664d-4aa0-a5d8-f8dc4f243f69_800w.jpg"/>
</div>
<h4 className="leading-tight group-hover:text-coral-500 transition-colors text-lg text-stone-800 font-serif mb-1">Apartment</h4>
<p className="uppercase text-xs text-stone-400 tracking-wide">teddy.w</p>
</a>
</div>
</div>
</section>
</div>
</template>

<template id="tpl-readers">
<div className="page-transition min-h-screen bg-white">
<div className="bg-sun-50 py-12 px-6 border-b border-sun-100">
<div className="max-w-7xl mx-auto">
<h1 className="font-serif text-4xl text-stone-800 mb-6 tracking-tight">La Bibliothèque</h1>

<div className="flex flex-col md:flex-row gap-4 items-center justify-between">
<div className="relative w-full md:w-96 group">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-sun-500 transition-colors" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-3 bg-white border border-stone-200 rounded-xl focus:outline-none focus:border-sun-400 focus:ring-1 focus:ring-sun-400 transition-all text-sm placeholder:text-stone-300" placeholder="Titre, auteur, genre..." type="text"/>
</div>
<div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar" id="filter-container">
<button className="px-4 py-2 bg-stone-800 text-white rounded-full text-sm font-medium transition-all shadow-md whitespace-nowrap" onclick="filterBooks(this)">Tout voir</button>
<button className="px-4 py-2 bg-white border border-stone-200 text-stone-600 rounded-full text-sm font-medium hover:border-sun-400 hover:text-sun-500 transition-all whitespace-nowrap" onclick="filterBooks(this)">Roman</button>
<button className="px-4 py-2 bg-white border border-stone-200 text-stone-600 rounded-full text-sm font-medium hover:border-sun-400 hover:text-sun-500 transition-all whitespace-nowrap" onclick="filterBooks(this)">Poésie</button>
<button className="px-4 py-2 bg-white border border-stone-200 text-stone-600 rounded-full text-sm font-medium hover:border-sun-400 hover:text-sun-500 transition-all whitespace-nowrap" onclick="filterBooks(this)">Essai</button>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-12" id="books-grid">
<a className="group block" href="#/book">
<div className="aspect-book bg-stone-100 rounded-xl mb-4 overflow-hidden shadow-sm group-hover:shadow-lg transition-all relative">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/081ba789-285c-4c60-bbcc-11a419527b54_800w.jpg"/>
<div className="absolute top-2 right-2 p-1.5 bg-white/90 backdrop-blur rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
<iconify-icon className="text-stone-400 hover:text-coral-500 block text-lg" icon="solar:heart-linear"></iconify-icon>
</div>
</div>
<h4 className="leading-tight group-hover:text-coral-500 transition-colors text-base text-stone-800 font-serif mb-1">La vie sans soucis</h4>
<p className="text-xs text-stone-400 uppercase tracking-wide">Clara M.</p>
<span className="text-sm font-medium text-stone-800 mt-1 block">18.50 €</span>
</a>
<a className="group block" href="#/book">
<div className="aspect-book bg-stone-100 rounded-xl mb-4 overflow-hidden shadow-sm group-hover:shadow-lg transition-all relative">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<h4 className="leading-tight group-hover:text-coral-500 transition-colors text-base text-stone-800 font-serif mb-1">L'Archipel</h4>
<p className="text-xs text-stone-400 uppercase tracking-wide">Julien D.</p>
<span className="text-sm font-medium text-stone-800 mt-1 block">12.00 €</span>
</a>
<a className="group block" href="#/book">
<div className="aspect-book bg-stone-100 rounded-xl mb-4 overflow-hidden shadow-sm group-hover:shadow-lg transition-all relative">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd572337-a497-450a-9a74-0b4ffd576e6c_800w.jpg"/>
</div>
<h4 className="leading-tight group-hover:text-coral-500 transition-colors text-base text-stone-800 font-serif mb-1">BE in LOVE</h4>
<p className="text-xs text-stone-400 uppercase tracking-wide">Sophie L.</p>
<span className="text-sm font-medium text-stone-800 mt-1 block">15.90 €</span>
</a>
<a className="group block" href="#/book">
<div className="aspect-book bg-stone-100 rounded-xl mb-4 overflow-hidden shadow-sm group-hover:shadow-lg transition-all relative">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/311dc865-664d-4aa0-a5d8-f8dc4f243f69_800w.jpg"/>
</div>
<h4 className="leading-tight group-hover:text-coral-500 transition-colors text-base text-stone-800 font-serif mb-1">Apartment</h4>
<p className="text-xs text-stone-400 uppercase tracking-wide">teddy.w</p>
<span className="text-sm font-medium text-stone-800 mt-1 block">22.00 €</span>
</a>
<a className="group block" href="#/book">
<div className="aspect-book bg-stone-100 rounded-xl mb-4 overflow-hidden shadow-sm group-hover:shadow-lg transition-all relative">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h4 className="leading-tight group-hover:text-coral-500 transition-colors text-base text-stone-800 font-serif mb-1">Le lait noir</h4>
<p className="text-xs text-stone-400 uppercase tracking-wide">Elif S.</p>
<span className="text-sm font-medium text-stone-800 mt-1 block">19.50 €</span>
</a>
</div>
</div>
</div>
</template>

<template id="tpl-book">
<div className="page-transition max-w-7xl mx-auto px-6 py-12">
<a className="mb-8 inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-800 transition-colors group" href="#/readers">
<iconify-icon className="group-hover:-translate-x-1 transition-transform" icon="solar:arrow-left-linear"></iconify-icon> Retour au catalogue
            </a>
<div className="grid md:grid-cols-2 gap-12 lg:gap-20">

<div className="bg-sun-50 rounded-3xl p-8 flex items-center justify-center border border-sun-100 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<img className="w-3/4 shadow-2xl shadow-stone-900/10 rounded-lg rotate-1 transform hover:rotate-0 transition-all duration-500 z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/081ba789-285c-4c60-bbcc-11a419527b54_800w.jpg"/>
</div>

<div className="flex flex-col justify-center">
<div className="flex items-center gap-2 text-coral-500 text-xs font-bold uppercase tracking-wider mb-4">
<span className="px-2 py-1 bg-coral-50 rounded-md">Roman</span>
<span className="px-2 py-1 bg-sun-100 text-sun-600 rounded-md">Nouveauté</span>
</div>
<h1 className="font-serif text-4xl md:text-5xl text-stone-800 mb-2 tracking-tight">La vie sans soucis</h1>
<a className="flex items-center gap-3 mb-8 cursor-pointer group w-fit" href="#/author">
<div className="w-10 h-10 rounded-full bg-stone-200 overflow-hidden ring-2 ring-transparent group-hover:ring-coral-200 transition-all">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
</div>
<span className="text-stone-500 group-hover:text-stone-800 transition-colors text-sm">Par <span className="underline decoration-stone-200 underline-offset-4 group-hover:decoration-coral-400">Clara M.</span></span>
</a>
<div className="space-y-6 text-stone-600 leading-relaxed mb-8">
<p className="first-letter:text-3xl first-letter:font-serif first-letter:float-left first-letter:mr-2 first-letter:text-coral-500">U</p>
<p>ne histoire poignante sur la redécouverte de soi au milieu de l'été italien. Clara M. nous transporte dans un récit où chaque rayon de soleil semble effacer une part d'ombre du passé.</p>
<p>Entre rencontres fortuites et déjeuners interminables, le temps s'arrête pour laisser place à l'essentiel : la joie d'être au monde.</p>
</div>
<div className="flex items-center gap-4 border-t border-stone-100 pt-8">
<button className="flex-1 bg-stone-800 text-white py-4 rounded-xl font-medium hover:bg-coral-500 transition-all hover:shadow-lg hover:shadow-coral-500/20 active:scale-95 flex items-center justify-center gap-2 group" onclick="showToast('Ajouté au panier', 'Excellent choix !')">
<span>Acheter 18.50 €</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</button>
<button className="p-4 rounded-xl border border-stone-200 hover:border-coral-200 hover:bg-coral-50 text-stone-400 hover:text-coral-500 transition-all active:scale-95 group" onclick="toggleHeart(this)">
<iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:heart-linear" width="24"></iconify-icon>
</button>
</div>
<div className="mt-4 text-center">
<p className="text-xs text-stone-400 flex items-center justify-center gap-1">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> Support direct aux auteurs indépendants
                        </p>
</div>
</div>
</div>
</div>
</template>

<template id="tpl-authors">
<div className="page-transition max-w-7xl mx-auto px-6 py-12">
<h1 className="font-serif text-4xl text-stone-800 mb-4 tracking-tight">Nos Auteurs</h1>
<p className="text-stone-500 mb-12 max-w-2xl text-lg">Découvrez les plumes talentueuses qui font vivre IndieBookMarket. Des voix singulières à explorer sans modération.</p>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<a className="bg-white border border-stone-100 rounded-2xl p-6 flex items-start gap-4 hover:shadow-xl hover:shadow-sun-500/10 hover:border-sun-200 transition-all cursor-pointer group" href="#/author">
<img className="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-md grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div>
<h3 className="font-serif text-xl text-stone-800 group-hover:text-coral-500 transition-colors">Clara M.</h3>
<p className="text-xs text-stone-400 uppercase tracking-wide mb-2 font-bold">Romancière</p>
<p className="text-sm text-stone-500 line-clamp-2">Passionnée par les voyages et les histoires humaines simples.</p>
</div>
</a>

<a className="bg-white border border-stone-100 rounded-2xl p-6 flex items-start gap-4 hover:shadow-xl hover:shadow-sun-500/10 hover:border-sun-200 transition-all cursor-pointer group" href="#/author">
<img className="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-md grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div>
<h3 className="font-serif text-xl text-stone-800 group-hover:text-coral-500 transition-colors">Julien D.</h3>
<p className="text-xs text-stone-400 uppercase tracking-wide mb-2 font-bold">Poète</p>
<p className="text-sm text-stone-500 line-clamp-2">Explorateur des mots et des silences entre les lignes.</p>
</div>
</a>

<a className="bg-white border border-stone-100 rounded-2xl p-6 flex items-start gap-4 hover:shadow-xl hover:shadow-sun-500/10 hover:border-sun-200 transition-all cursor-pointer group" href="#/author">
<img className="w-16 h-16 rounded-full object-cover ring-2 ring-white shadow-md grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=200"/>
<div>
<h3 className="font-serif text-xl text-stone-800 group-hover:text-coral-500 transition-colors">Sophie L.</h3>
<p className="text-xs text-stone-400 uppercase tracking-wide mb-2 font-bold">Essayiste</p>
<p className="text-sm text-stone-500 line-clamp-2">Analyse le monde contemporain avec douceur et acuité.</p>
</div>
</a>
</div>
</div>
</template>

<template id="tpl-author">
<div className="page-transition">

<div className="bg-sun-50 py-16 px-6 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/dust.png')] opacity-30"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 ring-4 ring-white shadow-xl">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h1 className="font-serif text-4xl text-stone-800 mb-2">Clara M.</h1>
<p className="text-stone-500 max-w-lg mx-auto mb-6">Écrivaine du quotidien, amoureuse des petits détails et des grands voyages. J'écris pour capturer la lumière.</p>
<div className="flex justify-center gap-4">
<button className="px-6 py-2 bg-stone-800 text-white rounded-full text-sm font-medium hover:bg-stone-700 transition-colors flex items-center gap-2 shadow-lg shadow-stone-800/10" onclick="toggleFollow(this)">
<iconify-icon icon="solar:user-plus-linear"></iconify-icon> Suivre
                        </button>
<button className="px-6 py-2 bg-white border border-stone-200 text-stone-800 rounded-full text-sm font-medium hover:bg-sun-50 transition-colors">Site Web</button>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 py-16">
<h3 className="font-serif text-2xl text-stone-800 mb-8 border-b border-stone-100 pb-4">Publications</h3>
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
<a className="group block" href="#/book">
<div className="aspect-book bg-stone-100 rounded-xl mb-4 overflow-hidden shadow-sm group-hover:shadow-lg transition-all relative">
<img className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/081ba789-285c-4c60-bbcc-11a419527b54_800w.jpg"/>
</div>
<h4 className="leading-tight group-hover:text-coral-500 transition-colors text-base text-stone-800 font-serif mb-1">La vie sans soucis</h4>
</a>
</div>
</div>
</div>
</template>

<template id="tpl-publish">
<div className="page-transition max-w-3xl mx-auto px-6 py-12">
<div className="text-center mb-12">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-sun-100 text-sun-600 mb-4">
<iconify-icon icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
<h1 className="font-serif text-3xl md:text-4xl text-stone-800 mb-4 tracking-tight">Partagez votre histoire</h1>
<p className="text-stone-500">Rejoignez une communauté d'auteurs indépendants. Simple, rapide, bienveillant.</p>
</div>
<form className="space-y-8 bg-white p-8 rounded-[2rem] border border-stone-100 shadow-xl shadow-sun-500/5 relative overflow-hidden" onsubmit="handlePublish(event)">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sun-400 to-coral-400"></div>

<div className="flex flex-col items-center justify-center border-2 border-dashed border-stone-200 rounded-2xl p-10 hover:border-sun-400 hover:bg-sun-50 transition-all cursor-pointer group">
<div className="w-14 h-14 bg-stone-50 rounded-full flex items-center justify-center text-stone-400 group-hover:text-sun-500 group-hover:bg-white transition-colors mb-3 shadow-sm">
<iconify-icon icon="solar:camera-add-linear" width="28"></iconify-icon>
</div>
<p className="text-sm font-medium text-stone-600">Glisser la couverture ici</p>
<p className="text-xs text-stone-400 mt-1">Format JPG, PNG (Max 5Mo)</p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700">Titre du livre</label>
<input className="w-full px-4 py-3 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-sun-400 transition-all" placeholder="Ex: L'été indien" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700">Genre</label>
<div className="relative">
<select className="w-full px-4 py-3 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-sun-400 transition-all appearance-none text-stone-600 cursor-pointer">
<option>Roman</option>
<option>Poésie</option>
<option>Thriller</option>
<option>Jeunesse</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700">Synopsis</label>
<textarea className="w-full px-4 py-3 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-sun-400 transition-all resize-none" placeholder="Invitez le lecteur dans votre univers..." required="" rows="4"></textarea>
</div>
<div className="grid md:grid-cols-2 gap-6 items-center">
<div className="space-y-2">
<label className="text-sm font-medium text-stone-700">Prix (€)</label>
<input className="w-full px-4 py-3 bg-stone-50 border-none rounded-xl focus:ring-2 focus:ring-sun-400 transition-all" placeholder="12.00" step="0.5" type="number"/>
</div>
<div className="flex items-center gap-2 pt-6">
<input className="w-5 h-5 rounded border-stone-300 text-sun-500 focus:ring-sun-400 cursor-pointer" id="terms" type="checkbox"/>
<label className="text-sm text-stone-500 select-none cursor-pointer" htmlFor="terms">Je certifie être l'auteur de cette œuvre</label>
</div>
</div>
<button className="w-full bg-stone-800 text-white py-4 rounded-xl font-medium text-lg hover:bg-coral-500 transition-all hover:shadow-lg hover:shadow-coral-500/20 active:scale-95 flex items-center justify-center gap-2 group" type="submit">
<iconify-icon className="group-hover:-translate-y-1 transition-transform" icon="solar:upload-square-linear"></iconify-icon> Publier maintenant
                </button>
</form>
</div>
</template>

<template id="tpl-about">
<div className="page-transition max-w-3xl mx-auto px-6 py-12">
<h1 className="font-serif text-4xl text-stone-800 mb-8 tracking-tight">Notre Raison d'être</h1>
<div className="prose prose-stone prose-lg">
<p className="mb-6 font-serif text-xl italic text-stone-600">
                    "Les histoires sont comme le soleil : elles appartiennent à tout le monde."
                </p>
<p className="mb-6">
                    Né d'une après-midi ensoleillée, IndieBookMarket a une mission simple : redonner le pouvoir aux auteurs indépendants tout en offrant aux lecteurs un havre de paix numérique pour découvrir de nouvelles histoires.
                </p>
<div className="grid md:grid-cols-2 gap-6 my-12">
<div className="bg-sun-50 p-6 rounded-2xl border border-sun-100">
<iconify-icon className="text-coral-500 text-3xl mb-4" icon="solar:heart-bold"></iconify-icon>
<h4 className="font-medium text-stone-800 mb-2">Passion avant profit</h4>
<p className="text-sm text-stone-500">Nous ne sommes pas une multinationale. Nous sommes des lecteurs qui codent.</p>
</div>
<div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
<iconify-icon className="text-green-600 text-3xl mb-4" icon="solar:leaf-bold"></iconify-icon>
<h4 className="font-medium text-stone-800 mb-2">Lecture organique</h4>
<p className="text-sm text-stone-500">Pas d'algorithmes intrusifs. Juste de la curiosité et de belles couvertures.</p>
</div>
</div>
<p className="mb-6">
                    Nous croyons que chaque livre mérite une belle couverture, une mise en page soignée et une audience attentive. Nous nous éloignons de la frénésie pour privilégier le temps long.
                </p>
<div className="mt-12 text-center">
<h3 className="font-serif text-2xl text-stone-800 mb-4">Prêt à écrire le prochain chapitre ?</h3>
<a className="inline-block bg-stone-800 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-coral-500 transition-colors shadow-lg shadow-stone-800/20" href="#/publish">Rejoindre l'aventure</a>
</div>
</div>
</div>
</template>



    </>
  );
}
