import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function saveProfileAndNavigate() {
            const nameInput = document.getElementById('user-name-input').value.trim();
            const displayElem = document.getElementById('display-user-name');
            
            if (nameInput) {
                const prenom = nameInput.split(' ')[0];
                displayElem.textContent = prenom.charAt(0).toUpperCase() + prenom.slice(1).toLowerCase();
                displayElem.style.display = 'block';
            } else {
                displayElem.textContent = '';
                displayElem.style.display = 'none';
            }
            
            navigateTo('view-dashboard');
        }

        function navigateTo(viewId, navElement = null) {
            document.querySelectorAll('.app-view').forEach(el => {
                el.classList.add('hidden');
                void el.offsetWidth; 
            });
            
            const targetView = document.getElementById(viewId);
            if(targetView) {
                targetView.classList.remove('hidden');
            }

            const nav = document.getElementById('app-nav');
            if(viewId === 'view-splash' || viewId === 'view-profile') {
                nav.classList.add('hidden');
                nav.classList.remove('md:flex');
            } else {
                nav.classList.remove('hidden');
                nav.classList.add('md:flex');
                
                updateNavActive(viewId);
            }
        }

        function updateNavActive(viewId) {
            document.querySelectorAll('.nav-btn').forEach(btn => {
                const icon = btn.querySelector('iconify-icon');
                const indicator = btn.querySelector('.nav-indicator');
                const text = btn.querySelector('span');
                
                if(btn.dataset.target === viewId) {
                    btn.classList.add('text-red-500');
                    btn.classList.remove('text-neutral-500');
                    indicator.classList.remove('bg-transparent');
                    indicator.classList.add('bg-red-500');
                } else {
                    btn.classList.remove('text-red-500');
                    btn.classList.add('text-neutral-500');
                    indicator.classList.add('bg-transparent');
                    indicator.classList.remove('bg-red-500');
                }
            });
        }

        document.addEventListener('DOMContentLoaded', () => {
            navigateTo('view-splash'); 
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="hidden z-50 fixed bottom-0 left-0 w-full bg-neutral-950/90 backdrop-blur-md border-t border-neutral-900 md:relative md:w-64 md:border-t-0 md:border-r md:h-screen md:flex-col md:p-6 pb-safe" id="app-nav">

<div className="hidden md:block mb-12 mt-4 px-4">
<h1 className="text-xl tracking-tighter font-semibold flex items-center gap-2">
<iconify-icon className="text-red-500" icon="solar:moon-fog-linear"></iconify-icon>
                LUNAR
            </h1>
</div>

<div className="flex justify-between items-center px-6 py-4 md:px-0 md:py-0 md:flex-col md:gap-2 md:items-stretch w-full">
<button className="nav-btn group flex flex-col md:flex-row items-center gap-1 md:gap-4 md:px-4 md:py-3 rounded-xl transition-colors md:hover:bg-neutral-900 text-red-500" data-target="view-dashboard" onclick="navigateTo('view-dashboard', this)">
<div className="relative flex flex-col items-center">
<iconify-icon className="transition-transform group-hover:scale-110 group-active:scale-95" icon="solar:home-smile-linear" width="24"></iconify-icon>
<div className="nav-indicator w-1 h-1 bg-red-500 rounded-full md:absolute md:-left-6 md:top-1/2 md:-translate-y-1/2 md:w-1 md:h-4 md:rounded-r-full mt-1 md:mt-0 transition-all"></div>
</div>
<span className="text-[10px] md:text-sm font-medium md:font-semibold hidden md:block">Accueil</span>
</button>
<button className="nav-btn group flex flex-col md:flex-row items-center gap-1 md:gap-4 md:px-4 md:py-3 rounded-xl transition-colors md:hover:bg-neutral-900 text-neutral-500" data-target="view-booking" onclick="navigateTo('view-booking', this)">
<div className="relative flex flex-col items-center">
<iconify-icon className="transition-transform group-hover:scale-110 group-active:scale-95" icon="solar:calendar-linear" width="24"></iconify-icon>
<div className="nav-indicator w-1 h-1 bg-transparent rounded-full md:absolute md:-left-6 md:top-1/2 md:-translate-y-1/2 md:w-1 md:h-4 md:rounded-r-full mt-1 md:mt-0 transition-all"></div>
</div>
<span className="text-[10px] md:text-sm font-medium md:font-semibold hidden md:block">Programme</span>
</button>
<button className="nav-btn group flex flex-col md:flex-row items-center gap-1 md:gap-4 md:px-4 md:py-3 rounded-xl transition-colors md:hover:bg-neutral-900 text-neutral-500" data-target="view-leaderboard" onclick="navigateTo('view-leaderboard', this)">
<div className="relative flex flex-col items-center">
<iconify-icon className="transition-transform group-hover:scale-110 group-active:scale-95" icon="solar:cup-star-linear" width="24"></iconify-icon>
<div className="nav-indicator w-1 h-1 bg-transparent rounded-full md:absolute md:-left-6 md:top-1/2 md:-translate-y-1/2 md:w-1 md:h-4 md:rounded-r-full mt-1 md:mt-0 transition-all"></div>
</div>
<span className="text-[10px] md:text-sm font-medium md:font-semibold hidden md:block">Récompenses</span>
</button>
<button className="nav-btn group flex flex-col md:flex-row items-center gap-1 md:gap-4 md:px-4 md:py-3 rounded-xl transition-colors md:hover:bg-neutral-900 text-neutral-500 md:mt-auto" data-target="view-profile" onclick="navigateTo('view-profile', this)">
<div className="relative flex flex-col items-center">
<iconify-icon className="transition-transform group-hover:scale-110 group-active:scale-95" icon="solar:user-linear" width="24"></iconify-icon>
<div className="nav-indicator w-1 h-1 bg-transparent rounded-full md:absolute md:-left-6 md:top-1/2 md:-translate-y-1/2 md:w-1 md:h-4 md:rounded-r-full mt-1 md:mt-0 transition-all"></div>
</div>
<span className="text-[10px] md:text-sm font-medium md:font-semibold hidden md:block">Profil</span>
</button>
</div>
</nav>

<main className="flex-1 h-full overflow-y-auto hide-scroll relative bg-neutral-950 pb-20 md:pb-0">

<section className="app-view h-full w-full flex flex-col items-center justify-center relative p-8 fade-in" id="view-splash">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,_rgba(220,38,38,0.15),_transparent_60%)] pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="flex flex-col items-center z-10 w-full max-w-md mx-auto">
<div className="mb-6 text-red-500">
<iconify-icon height="64" icon="solar:moon-fog-linear" width="64"></iconify-icon>
</div>
<h1 className="text-6xl md:text-8xl tracking-tighter font-semibold text-center leading-none mb-4">LUNAR<br/>MOTION</h1>
<p className="text-sm md:text-base text-neutral-400 tracking-[0.3em] uppercase mt-4">Paris · 2027</p>
<div className="w-16 h-[2px] bg-red-600 my-12"></div>
<h2 className="text-xl md:text-2xl tracking-tight font-medium mb-2 text-center">Année du Cheval</h2>
<p className="text-base text-neutral-400 mb-12 text-center">Rejoins le mouvement urbain.</p>
<button className="w-full max-w-sm bg-red-600 text-white rounded-full py-4 px-8 text-sm md:text-base font-semibold tracking-wide neon-shadow-red hover:bg-red-500 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200" onclick="navigateTo('view-profile')">
                    COMMENCER
                </button>
</div>
</section>

<section className="app-view hidden h-full w-full flex flex-col relative fade-in max-w-3xl mx-auto md:justify-center md:py-12" id="view-profile">
<div className="px-6 pt-12 pb-6 md:pt-0 md:bg-neutral-900/30 md:border md:border-neutral-800 md:rounded-3xl md:p-12 md:shadow-2xl flex-1 flex flex-col justify-center">
<button className="flex items-center gap-3 mb-8 hover:text-red-400 transition-colors w-max md:hidden" onclick="navigateTo('view-splash')">
<iconify-icon className="text-neutral-400" icon="solar:arrow-left-linear" width="24"></iconify-icon>
<span className="text-sm font-medium">Retour</span>
</button>
<div className="text-center md:text-left mb-10">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-3">Crée ton profil</h2>
<p className="text-base text-neutral-400">Rejoins la communauté et participe aux défis exclusifs.</p>
</div>
<div className="space-y-8 max-w-md w-full mx-auto md:mx-0">
<div className="relative group">
<input className="w-full bg-transparent border-b border-neutral-800 focus:border-red-500 py-3 text-base outline-none transition-colors placeholder-neutral-600 text-white peer" id="user-name-input" placeholder="Nom complet" type="text"/>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-neutral-800 focus:border-red-500 py-3 text-base outline-none transition-colors placeholder-neutral-600 text-white peer" placeholder="Email" type="email"/>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-neutral-800 focus:border-red-500 py-3 text-base outline-none transition-colors placeholder-neutral-600 text-white peer" placeholder="Ville principale" type="text"/>
</div>
<div className="pt-4">
<p className="text-sm text-neutral-400 mb-4">Ton activité favorite</p>
<div className="flex flex-wrap gap-3">
<button className="px-5 py-2.5 rounded-full border border-red-500 bg-red-500/10 text-sm font-medium text-red-400 transition-all">Running</button>
<button className="px-5 py-2.5 rounded-full border border-neutral-800 hover:border-neutral-600 text-sm font-medium text-neutral-400 transition-all">Training</button>
<button className="px-5 py-2.5 rounded-full border border-neutral-800 hover:border-neutral-600 text-sm font-medium text-neutral-400 transition-all">Skate</button>
<button className="px-5 py-2.5 rounded-full border border-neutral-800 hover:border-neutral-600 text-sm font-medium text-neutral-400 transition-all">Danse</button>
</div>
</div>
<div className="pt-8">
<button className="w-full bg-white text-black rounded-full py-4 text-sm md:text-base font-semibold tracking-wide hover:bg-neutral-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200" onclick="saveProfileAndNavigate()">
                            REJOINDRE LE MOUVEMENT
                        </button>
</div>
</div>
</div>
</section>

<section className="app-view hidden h-full w-full flex flex-col fade-in max-w-6xl mx-auto px-6 py-8 md:py-12" id="view-dashboard">

<div className="flex justify-between items-center mb-10">
<div className="flex items-center gap-4">
<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800 cursor-pointer hover:border-red-500 transition-colors" onclick="navigateTo('view-profile')">
<iconify-icon className="text-neutral-400 text-xl md:text-2xl" icon="solar:user-rounded-linear"></iconify-icon>
</div>
<div>
<p className="text-sm md:text-base text-neutral-400">Salut,</p>
<p className="text-lg md:text-2xl font-semibold tracking-tight" id="display-user-name">Alex</p>
</div>
</div>
<div className="flex flex-col items-end p-3 md:p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800">
<span className="text-xs md:text-sm text-neutral-400 mb-1">Niveau 3</span>
<span className="text-base md:text-xl font-semibold text-amber-400 flex items-center gap-2">
                        1,250 <span className="text-xs font-medium opacity-70">PTS</span>
</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

<div className="lg:col-span-8 space-y-6">

<div className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 hover:border-red-500/30 transition-colors rounded-3xl p-6 md:p-8">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-2">Défi en cours</h3>
<p className="text-sm text-neutral-400">Rejoins la session et gagne des points bonus.</p>
</div>
<span className="px-3 py-1 rounded-full bg-red-500/10 text-xs font-semibold text-red-500 border border-red-500/20 flex items-center gap-2 animate-pulse">
<div className="w-2 h-2 rounded-full bg-red-500"></div> LIVE
                            </span>
</div>
<div className="bg-neutral-950/50 border border-neutral-800/50 rounded-2xl p-5 flex flex-col md:flex-row gap-5 items-center">
<div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 shrink-0">
<iconify-icon icon="solar:running-linear" width="32"></iconify-icon>
</div>
<div className="flex-1 text-center md:text-left">
<h4 className="text-lg font-medium mb-1">Sprint 5K Night Run</h4>
<p className="text-sm text-neutral-400 mb-4 md:mb-0">Départ: Bastille · Récompense: +200 PTS</p>
</div>
<button className="w-full md:w-auto bg-white text-black hover:bg-neutral-200 rounded-full px-8 py-3 text-sm font-semibold transition-transform active:scale-95">
                                Rejoindre
                            </button>
</div>
</div>

<div>
<div className="flex justify-between items-end mb-4 px-1">
<h3 className="text-lg font-semibold tracking-tight">Activités à venir</h3>
<button className="text-sm text-red-500 hover:text-red-400 font-medium" onclick="navigateTo('view-booking')">Tout voir</button>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 hover:bg-neutral-800/80 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400 mb-4 group-hover:text-red-400 group-hover:bg-red-500/10 transition-colors">
<iconify-icon icon="solar:dumbell-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-medium mb-1">Street Workout</h4>
<p className="text-xs text-neutral-500">Aujourd'hui, 18:00</p>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 hover:bg-neutral-800/80 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400 mb-4 group-hover:text-amber-400 group-hover:bg-amber-500/10 transition-colors">
<iconify-icon icon="solar:pen-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-medium mb-1">Atelier Calligraphie</h4>
<p className="text-xs text-neutral-500">Ce soir, 20:00</p>
</div>
<div className="hidden md:block bg-neutral-900 border border-neutral-800 rounded-2xl p-5 hover:bg-neutral-800/80 transition-colors cursor-pointer group opacity-50">
<div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center text-neutral-400 mb-4">
<iconify-icon icon="solar:music-notes-linear" width="20"></iconify-icon>
</div>
<h4 className="text-sm font-medium mb-1">Session K-Pop</h4>
<p className="text-xs text-neutral-500">Demain, 19:30</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 space-y-6">

<div className="bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-3xl p-6 relative overflow-hidden h-full flex flex-col cursor-pointer hover:border-amber-500/40 transition-colors" onclick="navigateTo('view-leaderboard')">
<div className="absolute -right-12 -top-12 text-amber-500/10 rotate-12 pointer-events-none">
<iconify-icon icon="solar:horse-head-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10 flex-1 flex flex-col">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
<iconify-icon icon="solar:star-fall-linear" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold tracking-tight text-amber-500">Objectif Ultime</h3>
</div>
<h4 className="text-xl font-semibold mb-2">Horse Spirit</h4>
<p className="text-sm text-neutral-400 mb-8 w-4/5">Complète 3 activités diversifiées pour débloquer le badge exclusif de l'événement.</p>
<div className="mt-auto">
<div className="flex justify-between items-end mb-2">
<span className="text-xs font-medium text-amber-500">Progression</span>
<span className="text-xs text-neutral-400">1 / 3 complétés</span>
</div>
<div className="w-full h-2 bg-neutral-950 rounded-full border border-neutral-800 overflow-hidden">
<div className="h-full bg-amber-500 rounded-full w-[33%] shadow-[0_0_10px_rgba(245,158,11,0.5)] relative"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="app-view hidden h-full w-full flex flex-col fade-in max-w-6xl mx-auto px-6 py-8 md:py-12" id="view-booking">
<div className="mb-8">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold mb-6">Programme</h2>
<div className="flex gap-3 overflow-x-auto hide-scroll pb-2">
<button className="px-6 py-2 rounded-full bg-white text-black text-sm font-medium whitespace-nowrap transition-transform active:scale-95">Tous</button>
<button className="px-6 py-2 rounded-full border border-neutral-800 text-sm font-medium text-neutral-400 whitespace-nowrap hover:bg-neutral-900 transition-colors">Sport</button>
<button className="px-6 py-2 rounded-full border border-neutral-800 text-sm font-medium text-neutral-400 whitespace-nowrap hover:bg-neutral-900 transition-colors">Culture</button>
<button className="px-6 py-2 rounded-full border border-neutral-800 text-sm font-medium text-neutral-400 whitespace-nowrap hover:bg-neutral-900 transition-colors">Musique</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col gap-6 hover:border-neutral-700 transition-colors">
<div className="flex gap-5">
<div className="w-20 h-20 rounded-2xl bg-neutral-950 flex items-center justify-center text-neutral-400 shrink-0 border border-neutral-800">
<iconify-icon icon="solar:music-notes-linear" width="32"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight leading-tight">Cours K-Pop<br/>Dance</h3>
</div>
<span className="inline-block px-2.5 py-1 rounded bg-red-500/10 text-red-400 text-[10px] font-semibold tracking-wide uppercase mb-3">+50 PTS</span>
</div>
</div>
<div className="space-y-2 mb-2">
<p className="text-sm text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:clock-circle-linear" width="16"></iconify-icon> Aujourd'hui · 19:30 - 21:00
                        </p>
<p className="text-sm text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:map-point-linear" width="16"></iconify-icon> Place de la République
                        </p>
</div>
<div className="mt-auto pt-6 border-t border-neutral-800/50 flex items-center justify-between">
<p className="text-sm font-medium text-amber-500 flex items-center gap-2">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon> 5 places
                        </p>
<button className="bg-red-600 hover:bg-red-500 text-white rounded-full px-6 py-2.5 text-sm font-semibold transition-all active:scale-95 shadow-lg shadow-red-600/20">
                            Réserver
                        </button>
</div>
</div>

<div className="bg-gradient-to-br from-green-500/10 to-neutral-900 border border-green-500/20 rounded-3xl p-6 flex flex-col gap-6 relative overflow-hidden">
<div className="flex gap-5 relative z-10">
<div className="w-20 h-20 rounded-2xl bg-neutral-950 flex items-center justify-center text-green-500 shrink-0 border border-green-500/30">
<iconify-icon icon="solar:skateboarding-linear" width="32"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight leading-tight">Initiation<br/>Skate</h3>
</div>
<span className="inline-block px-2.5 py-1 rounded bg-red-500/10 text-red-400 text-[10px] font-semibold tracking-wide uppercase mb-3">+100 PTS</span>
</div>
</div>
<div className="space-y-2 mb-2 relative z-10">
<p className="text-sm text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:clock-circle-linear" width="16"></iconify-icon> Demain · 14:00 - 16:00
                        </p>
<p className="text-sm text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:map-point-linear" width="16"></iconify-icon> Skatepark Bercy
                        </p>
</div>
<div className="mt-auto pt-6 border-t border-green-500/20 flex items-center justify-between relative z-10">
<p className="text-sm font-semibold text-green-500 flex items-center gap-2">
<iconify-icon icon="solar:check-circle-linear" width="18"></iconify-icon> Inscrit
                        </p>
<button className="bg-neutral-950 text-neutral-300 hover:text-white rounded-full px-6 py-2.5 text-sm font-medium border border-neutral-800 hover:border-neutral-600 transition-all active:scale-95">
                            Gérer
                        </button>
</div>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-6 flex flex-col gap-6 hover:border-neutral-700 transition-colors">
<div className="flex gap-5">
<div className="w-20 h-20 rounded-2xl bg-neutral-950 flex items-center justify-center text-neutral-400 shrink-0 border border-neutral-800">
<iconify-icon icon="solar:pen-linear" width="32"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex justify-between items-start mb-2">
<h3 className="text-lg font-semibold tracking-tight leading-tight">Atelier Art &amp;<br/>Calligraphie</h3>
</div>
<span className="inline-block px-2.5 py-1 rounded bg-red-500/10 text-red-400 text-[10px] font-semibold tracking-wide uppercase mb-3">+30 PTS</span>
</div>
</div>
<div className="space-y-2 mb-2">
<p className="text-sm text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:clock-circle-linear" width="16"></iconify-icon> Jeu. 12 Mars · 20:00
                        </p>
<p className="text-sm text-neutral-400 flex items-center gap-2">
<iconify-icon className="text-neutral-500" icon="solar:map-point-linear" width="16"></iconify-icon> Le Marais, Paris 4
                        </p>
</div>
<div className="mt-auto pt-6 border-t border-neutral-800/50 flex items-center justify-between">
<p className="text-sm font-medium text-neutral-500 flex items-center gap-2">Ouvert</p>
<button className="bg-neutral-800 hover:bg-neutral-700 text-white rounded-full px-6 py-2.5 text-sm font-semibold transition-all active:scale-95">
                            Détails
                        </button>
</div>
</div>
</div>
</section>

<section className="app-view hidden h-full w-full flex flex-col fade-in max-w-6xl mx-auto px-6 py-8 md:py-12" id="view-leaderboard">
<div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 gap-6">
<h2 className="text-3xl md:text-4xl tracking-tight font-semibold">Récompenses</h2>

<div className="bg-neutral-900 p-1.5 rounded-full flex border border-neutral-800 w-full md:w-auto">
<button className="flex-1 md:px-8 py-2 text-sm font-medium rounded-full text-neutral-400 hover:text-white transition-colors">Classement</button>
<button className="flex-1 md:px-8 py-2 text-sm font-medium rounded-full bg-neutral-800 text-white shadow-sm border border-neutral-700">Mes Badges</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-8">

<div className="md:col-span-5 lg:col-span-4">
<div className="flex flex-col items-center text-center p-8 bg-gradient-to-b from-neutral-900 to-neutral-950 border border-amber-500/20 rounded-[2rem] relative overflow-hidden h-full">
<div className="absolute top-0 w-full h-1/2 bg-amber-500/5 blur-3xl"></div>
<div className="w-32 h-32 mb-8 relative z-10 flex items-center justify-center mt-4">
<div className="absolute inset-0 border-2 border-amber-500/30 rounded-full animate-[spin_10s_linear_infinite] border-dashed"></div>
<div className="w-24 h-24 bg-neutral-950 rounded-full border border-amber-500 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.2)] relative">
<iconify-icon className="text-amber-400" icon="solar:horse-head-linear" width="48"></iconify-icon>
</div>
</div>
<h3 className="text-2xl tracking-tight font-semibold text-amber-400 mb-2 z-10">Horse Spirit</h3>
<p className="text-sm text-neutral-400 z-10 mb-8">Édition Spéciale Nouvel An Lunar 2027</p>
<div className="w-full bg-neutral-950/80 rounded-2xl p-5 border border-neutral-800/50 flex flex-col gap-4 z-10 mt-auto">
<h4 className="text-xs font-semibold text-neutral-500 uppercase tracking-widest text-left mb-1">Missions</h4>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-green-500 shrink-0" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="flex-1 text-left">1/1 Défi Running</span>
</div>
<div className="w-full h-px bg-neutral-800/50"></div>
<div className="flex items-center gap-3 text-sm text-neutral-400">
<iconify-icon className="shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="flex-1 text-left">0/1 Atelier Culturel</span>
</div>
<div className="w-full h-px bg-neutral-800/50"></div>
<div className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-amber-500 shrink-0" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="flex-1 text-left">1/3 Activités Sportives</span>
</div>
</div>
</div>
</div>

<div className="md:col-span-7 lg:col-span-8 bg-neutral-900/30 border border-neutral-800/50 rounded-[2rem] p-8">
<div className="flex justify-between items-end mb-8">
<h3 className="text-xl font-semibold tracking-tight">Collection</h3>
<span className="text-neutral-500 text-sm bg-neutral-900 px-3 py-1 rounded-full border border-neutral-800">4 obtenus</span>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

<div className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-neutral-900/50 transition-colors cursor-pointer">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500/20 to-neutral-900 border border-red-500/30 flex items-center justify-center text-red-400 relative">
<iconify-icon icon="solar:fire-linear" width="32"></iconify-icon>
</div>
<div className="text-center">
<span className="text-sm font-medium text-white block">First Blood</span>
<span className="text-[10px] text-neutral-500">Mars 2027</span>
</div>
</div>

<div className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-neutral-900/50 transition-colors cursor-pointer">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-neutral-900 border border-blue-500/30 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:moon-linear" width="32"></iconify-icon>
</div>
<div className="text-center">
<span className="text-sm font-medium text-white block">Night Owl</span>
<span className="text-[10px] text-neutral-500">Fév 2027</span>
</div>
</div>

<div className="flex flex-col items-center gap-3 p-4 rounded-2xl hover:bg-neutral-900/50 transition-colors cursor-pointer">
<div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-neutral-900 border border-green-500/30 flex items-center justify-center text-green-400">
<iconify-icon icon="solar:skateboarding-linear" width="32"></iconify-icon>
</div>
<div className="text-center">
<span className="text-sm font-medium text-white block">Rider</span>
<span className="text-[10px] text-neutral-500">Jan 2027</span>
</div>
</div>

<div className="flex flex-col items-center gap-3 p-4 rounded-2xl opacity-40">
<div className="w-20 h-20 rounded-full bg-neutral-950 border border-neutral-800 border-dashed flex items-center justify-center text-neutral-600">
<iconify-icon icon="solar:lock-keyhole-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-500">Marathon</span>
</div>
<div className="flex flex-col items-center gap-3 p-4 rounded-2xl opacity-40">
<div className="w-20 h-20 rounded-full bg-neutral-950 border border-neutral-800 border-dashed flex items-center justify-center text-neutral-600">
<iconify-icon icon="solar:lock-keyhole-linear" width="24"></iconify-icon>
</div>
<span className="text-sm font-medium text-neutral-500">Sensei</span>
</div>
</div>
</div>
</div>
</section>
</main>


    </>
  );
}
