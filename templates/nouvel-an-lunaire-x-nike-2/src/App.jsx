import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // App State
        const state = {
            profileCreated: false,
            pseudo: '',
            points: 0,
            workshops: { w1: false, w2: false, w3: false }
        };

        // Screen Navigation Logic
        function switchTab(tabId) {
            // Check if trying to access features without profile
            if (!state.profileCreated && tabId !== 'profil') {
                showToast("Crée ton profil d'abord !");
                return;
            }

            // Hide all screens
            document.querySelectorAll('.app-screen').forEach(el => el.classList.add('hidden'));
            // Show target
            document.getElementById(`screen-${tabId}`).classList.remove('hidden');
            
            // Update Nav UI
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.remove('text-white');
                btn.classList.add('text-neutral-500');
            });
            const activeNav = document.getElementById(`nav-${tabId}`);
            if(activeNav) {
                activeNav.classList.remove('text-neutral-500');
                activeNav.classList.add('text-white');
            }

            // Trigger animations on points screen if opened
            if(tabId === 'points') updatePointsUI();
        }

        // Form Submit Logic
        document.getElementById('create-profile-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const pseudo = document.getElementById('input-pseudo').value;
            
            // Update State
            state.pseudo = pseudo;
            state.profileCreated = true;

            // UI Changes for Profile
            document.getElementById('profil-form-view').classList.add('hidden');
            const createdView = document.getElementById('profil-created-view');
            createdView.classList.remove('hidden');
            document.getElementById('welcome-title').innerHTML = `Bienvenue <span class="text-white">${pseudo}</span> !`;

            // Notification & Auto-nav
            showToast("Profil créé ! Redirection...");
            setTimeout(() => {
                switchTab('badges');
            }, 1500);
        });

        // Booking Logic
        function bookWorkshop(id, btnElement) {
            if (state.workshops[id]) return; // Already booked
            
            // Update state
            state.workshops[id] = true;
            state.points += 50;

            // Update Button visually
            btnElement.textContent = 'Réservé';
            btnElement.classList.replace('bg-neutral-50', 'bg-neutral-800');
            btnElement.classList.replace('text-neutral-950', 'text-white');
            btnElement.classList.add('border', 'border-neutral-700');
            btnElement.disabled = true;

            // Update generic UI
            const bookedCount = Object.values(state.workshops).filter(Boolean).length;
            document.getElementById('booked-count').textContent = `${bookedCount}/3 ateliers réservés`;
            document.getElementById('header-points').textContent = state.points;

            showToast(`🎉 +50 pts ! Atelier réservé.`);
            
            // Subtle bump animation on header points
            const headerP = document.getElementById('header-points');
            headerP.parentElement.classList.add('scale-110', 'border-amber-500/50');
            setTimeout(() => headerP.parentElement.classList.remove('scale-110', 'border-amber-500/50'), 300);
        }

        // Update Points Screen UI
        function updatePointsUI() {
            document.getElementById('points-display-main').textContent = state.points;
            
            // Calculate progress (max 150 for level 2)
            const percentage = Math.min((state.points / 150) * 100, 100);
            
            // Small delay to allow CSS transition to happen after tab switches
            setTimeout(() => {
                document.getElementById('progress-bar').style.width = `${percentage}%`;
            }, 50);
        }

        // Toast Notification Helper
        function showToast(msg) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-msg').innerHTML = msg;
            
            toast.classList.remove('-translate-y-full', 'opacity-0');
            toast.classList.add('translate-y-4', 'opacity-100');
            
            // Clear previous timeout if exists
            if(window.toastTimeout) clearTimeout(window.toastTimeout);
            
            window.toastTimeout = setTimeout(() => {
                toast.classList.remove('translate-y-4', 'opacity-100');
                toast.classList.add('-translate-y-full', 'opacity-0');
            }, 2500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<main className="w-full max-w-md bg-neutral-950 relative h-[100dvh] shadow-2xl overflow-hidden flex flex-col">

<div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none z-0"></div>

<header className="flex-none flex items-center justify-between px-6 pt-12 pb-4 relative z-20 bg-neutral-950/80 backdrop-blur-xl border-b border-neutral-900">
<div className="flex flex-col">
<span className="text-xl font-semibold tracking-tight uppercase leading-none">Nike</span>
<span className="text-xs text-neutral-400 font-medium tracking-wide mt-1">Lunar Motion '27</span>
</div>
<div className="flex items-center gap-2">
<div className="bg-neutral-900 border border-neutral-800 rounded-full px-3 py-1 flex items-center gap-1.5">
<iconify-icon className="text-amber-400 text-sm" icon="solar:bolt-linear"></iconify-icon>
<span className="text-sm font-medium" id="header-points">0</span>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto pb-32 relative z-10 scroll-smooth">

<div className="app-screen px-6 py-6 space-y-6" id="screen-profil">

<div className="space-y-6" id="profil-form-view">
<div>
<h1 className="text-2xl font-medium tracking-tight">Rejoins le mouvement.</h1>
<p className="text-sm text-neutral-400 mt-1">Crée ton profil rider pour débloquer tes accès exclusifs.</p>
</div>
<form className="space-y-4" id="create-profile-form">
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 ml-1">Pseudo</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-600" id="input-pseudo" placeholder="Ex: UrbanRider99" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 ml-1">Email</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 transition-colors placeholder:text-neutral-600" placeholder="hello@lunar.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-neutral-400 ml-1">Intérêt principal</label>
<select className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-neutral-500 transition-colors text-neutral-200" required="">
<option disabled="" selected="" value="">Choisis ta discipline</option>
<option value="basket">Streetball 3x3</option>
<option value="skate">Skate &amp; Parkour</option>
<option value="art">Art &amp; Calligraphie</option>
</select>
</div>
<button className="w-full mt-2 py-3.5 rounded-xl bg-neutral-50 text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" type="submit">
<span>Créer profil</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>

<div className="hidden space-y-8 animate-pop" id="profil-created-view">
<div className="flex items-center gap-4">
<div className="relative">
<div className="w-16 h-16 rounded-full bg-gradient-to-tr from-neutral-800 to-neutral-700 p-[1px]">
<div className="w-full h-full rounded-full bg-neutral-900 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-2xl text-neutral-500" icon="solar:user-linear"></iconify-icon>
</div>
</div>
<div className="absolute -bottom-1 -right-1 bg-neutral-950 rounded-full p-0.5">
<div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-xs font-semibold text-white">1</div>
</div>
</div>
<div>
<h1 className="text-lg font-medium tracking-tight" id="welcome-title">Bienvenue !</h1>
<p className="text-sm text-neutral-400 mt-0.5">Niveau 1 • Débutant</p>
</div>
</div>
<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-5 text-center space-y-3 relative overflow-hidden">
<iconify-icon className="absolute -right-4 -top-4 text-6xl text-neutral-800" icon="solar:star-fall-linear"></iconify-icon>
<p className="text-sm text-neutral-300 relative z-10">Ton badge exclusif t'attend pour célébrer ton arrivée.</p>
<button className="w-full py-2.5 rounded-xl bg-red-600 text-white text-sm font-medium hover:bg-red-700 transition-colors relative z-10" onclick="switchTab('badges')">
                            Voir mon badge
                        </button>
</div>
</div>
</div>

<div className="app-screen hidden px-6 py-6 space-y-8" id="screen-badges">
<div className="text-center space-y-1">
<h2 className="text-2xl font-medium tracking-tight">Tes Badges</h2>
<p className="text-sm text-neutral-400">Collectionne-les pour monter en niveau</p>
</div>

<div className="relative rounded-[2rem] p-[1px] bg-gradient-to-br from-amber-500 via-red-600 to-neutral-800 animate-pulse-glow mx-auto w-64 h-80 flex flex-col items-center justify-center mt-8">
<div className="absolute inset-0 bg-neutral-900/90 backdrop-blur-xl rounded-[2rem] flex flex-col items-center justify-center p-6 overflow-hidden">

<div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_70%)]"></div>
<div className="animate-float relative z-10 flex flex-col items-center">
<div className="w-24 h-24 rounded-full bg-gradient-to-tr from-amber-500 to-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.4)] mb-6">
<span className="text-4xl">🐎</span>
</div>
<span className="text-xs font-semibold uppercase tracking-wider text-amber-400 text-gradient bg-gradient-to-r from-amber-400 to-amber-200 mb-2">Fondateur</span>
<h3 className="text-xl font-medium tracking-tight text-white text-center leading-tight">L'Année<br/>du Cheval</h3>
</div>
</div>
</div>
<div className="text-center space-y-4">
<div className="inline-flex items-center gap-2 bg-neutral-900 border border-neutral-800 rounded-full px-4 py-1.5 text-sm">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-neutral-300">Badge #1 débloqué ! <span className="text-neutral-500 ml-1">1er de 5</span></span>
</div>
<div className="grid grid-cols-2 gap-3 mt-4">
<button className="py-3 rounded-xl bg-neutral-50 text-neutral-950 text-sm font-medium hover:bg-neutral-200 transition-colors" onclick="switchTab('ateliers')">
                            Réserver ateliers
                        </button>
<button className="py-3 rounded-xl bg-neutral-900 text-white text-sm font-medium border border-neutral-800 hover:bg-neutral-800 transition-colors" onclick="switchTab('points')">
                            Voir points
                        </button>
</div>
</div>
</div>

<div className="app-screen hidden px-6 py-6 pb-20 space-y-6" id="screen-ateliers">
<div>
<h2 className="text-2xl font-medium tracking-tight">Ateliers &amp; Drops</h2>
<p className="text-sm text-neutral-400 mt-1">Participe pour gagner de l'énergie.</p>
</div>
<div className="space-y-4">

<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex gap-4 items-center">
<div className="w-16 h-16 shrink-0 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-2xl">
                            🏀
                        </div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium tracking-tight truncate">Basket 3x3 Clash</h4>
<div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1">
<iconify-icon className="text-amber-400" icon="solar:bolt-linear"></iconify-icon>
<span>+50 pts</span>
</div>
</div>
<button className="shrink-0 px-4 py-2 rounded-lg bg-neutral-50 text-neutral-950 text-xs font-medium hover:bg-neutral-200 transition-colors w-24 text-center" onclick="bookWorkshop('w1', this)">
                            Réserver
                        </button>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex gap-4 items-center">
<div className="w-16 h-16 shrink-0 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-2xl">
                            🛹
                        </div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium tracking-tight truncate">Skate Night Session</h4>
<div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1">
<iconify-icon className="text-amber-400" icon="solar:bolt-linear"></iconify-icon>
<span>+50 pts</span>
</div>
</div>
<button className="shrink-0 px-4 py-2 rounded-lg bg-neutral-50 text-neutral-950 text-xs font-medium hover:bg-neutral-200 transition-colors w-24 text-center" onclick="bookWorkshop('w2', this)">
                            Réserver
                        </button>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 flex gap-4 items-center">
<div className="w-16 h-16 shrink-0 rounded-xl bg-neutral-800 border border-neutral-700 flex items-center justify-center text-2xl">
                            🖌️
                        </div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-medium tracking-tight truncate">Calligraphie Custom</h4>
<div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-1">
<iconify-icon className="text-amber-400" icon="solar:bolt-linear"></iconify-icon>
<span>+50 pts</span>
</div>
</div>
<button className="shrink-0 px-4 py-2 rounded-lg bg-neutral-50 text-neutral-950 text-xs font-medium hover:bg-neutral-200 transition-colors w-24 text-center" onclick="bookWorkshop('w3', this)">
                            Réserver
                        </button>
</div>
</div>

<div className="fixed bottom-24 left-1/2 -translate-x-1/2 w-full max-w-md px-6 z-30">
<div className="bg-neutral-900/95 backdrop-blur border border-neutral-800 rounded-xl p-3 flex justify-between items-center shadow-lg">
<span className="text-xs font-medium text-neutral-300">Progression</span>
<span className="text-xs font-semibold text-white" id="booked-count">0/3 ateliers réservés</span>
</div>
</div>
</div>

<div className="app-screen hidden px-6 py-6 space-y-8" id="screen-points">

<div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-8 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent"></div>
<span className="text-xs font-medium uppercase tracking-wider text-neutral-400 relative z-10">Total Énergie</span>
<div className="flex justify-center items-baseline gap-1 mt-2 relative z-10">
<span className="text-6xl font-medium tracking-tight" id="points-display-main">0</span>
<span className="text-lg text-neutral-500">pts</span>
</div>
</div>

<div className="space-y-3">
<div className="flex justify-between items-end">
<span className="text-sm font-medium tracking-tight">Niveau 1</span>
<span className="text-xs text-neutral-400">Objectif: Niv.2 (150pts)</span>
</div>
<div className="h-3 w-full bg-neutral-900 border border-neutral-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-all duration-700 ease-out" id="progress-bar" style={{width: '0%'}}></div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-base font-medium tracking-tight">Badges obtenus</h3>
<div className="space-y-3">

<div className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500 to-red-600 flex items-center justify-center shadow-lg">
<span className="text-sm">🐎</span>
</div>
<div>
<h4 className="text-sm font-medium">L'Année du Cheval</h4>
<p className="text-[0.65rem] text-neutral-400 uppercase tracking-wider">Badge Fondateur</p>
</div>
<iconify-icon className="ml-auto text-green-500" icon="solar:check-circle-linear"></iconify-icon>
</div>

<div className="bg-neutral-950 border border-neutral-800 border-dashed rounded-xl p-3 flex items-center gap-3 opacity-50">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-neutral-800">
<iconify-icon className="text-neutral-500" icon="solar:lock-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium">First Drop</h4>
<p className="text-[0.65rem] text-neutral-500 uppercase tracking-wider">Atteindre Niv.2</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed top-20 left-1/2 -translate-x-1/2 bg-neutral-50 text-neutral-950 px-4 py-2.5 rounded-full text-xs font-medium shadow-xl transition-all duration-300 transform -translate-y-full opacity-0 z-50 flex items-center gap-2 pointer-events-none" id="toast">
<iconify-icon icon="solar:bell-bing-linear"></iconify-icon>
<span id="toast-msg"></span>
</div>

<nav className="absolute bottom-0 left-0 w-full bg-neutral-950/90 backdrop-blur-xl border-t border-neutral-900 pb-safe pt-2 px-6 z-40">
<div className="flex items-center justify-between pb-6 pt-3">
<button className="nav-btn flex flex-col items-center gap-1 text-white w-16" id="nav-profil" onclick="switchTab('profil')">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[0.65rem] font-medium tracking-wide">Profil</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-neutral-500 hover:text-neutral-300 transition-colors w-16" id="nav-badges" onclick="switchTab('badges')">
<iconify-icon className="text-2xl" icon="solar:medal-ribbons-star-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[0.65rem] font-medium tracking-wide">Badges</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-neutral-500 hover:text-neutral-300 transition-colors w-16" id="nav-ateliers" onclick="switchTab('ateliers')">
<iconify-icon className="text-2xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[0.65rem] font-medium tracking-wide">Ateliers</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 text-neutral-500 hover:text-neutral-300 transition-colors w-16" id="nav-points" onclick="switchTab('points')">
<iconify-icon className="text-2xl" icon="solar:cup-star-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-[0.65rem] font-medium tracking-wide">Points</span>
</button>
</div>
</nav>
</main>


    </>
  );
}
