import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#09090b', // Zinc 950
surface: '#18181b', // Zinc 900
primary: '#6366f1', // Indigo 500
accent: '#ec4899', // Pink 500
},
animation: {
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'slide-up': 'slideUp 0.3s ease-out forwards',
'fade-in': 'fadeIn 0.3s ease-out forwards',
},
keyframes: {
slideUp: {
'0%': { transform: 'translateY(100%)' },
'100%': { transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
}
}
}
}
}



        // Simple SPA Router
        const router = {
            history: [],
            
            navigate: function(viewId) {
                // Update history
                if(this.history.length === 0 || this.history[this.history.length - 1] !== viewId) {
                    this.history.push(viewId);
                }

                // Special logic flow for mocks
                if (viewId === 'access-check') {
                    this.showView(viewId);
                    setTimeout(() => {
                        this.navigate('auth-loading');
                    }, 2000); // 2s loading
                    return;
                }
                
                if (viewId === 'auth-loading') {
                    this.showView(viewId);
                    setTimeout(() => {
                        this.navigate('profile-create');
                    }, 2500); // 2.5s auth
                    return;
                }

                this.showView(viewId);
                this.updateNav(viewId);
            },

            back: function() {
                if (this.history.length > 1) {
                    this.history.pop();
                    const prevView = this.history[this.history.length - 1];
                    this.showView(prevView);
                    this.updateNav(prevView);
                } else {
                    this.navigate('discover');
                }
            },

            showView: function(viewId) {
                // Hide all
                document.querySelectorAll('.view-section').forEach(el => {
                    el.classList.remove('active');
                    // Reset scroll
                    if(viewId !== 'chat') window.scrollTo(0,0);
                });
                
                // Show specific logic
                let targetId = viewId;
                if(viewId.startsWith('chat/')) targetId = 'chat';

                const target = document.getElementById(`view-${targetId}`);
                if (target) {
                    target.classList.add('active');
                }
            },

            updateNav: function(viewId) {
                const nav = document.getElementById('bottom-nav');
                const mainViews = ['discover', 'matches', 'profile'];
                
                if (mainViews.includes(viewId)) {
                    nav.classList.remove('hidden');
                    // Active state styling
                    document.querySelectorAll('.nav-item').forEach(el => {
                        const icon = el.querySelector('iconify-icon');
                        if (el.dataset.target === viewId) {
                            el.classList.remove('text-zinc-500');
                            el.classList.add('text-indigo-400');
                            // Switch to bold icon for active state
                            const currentIcon = icon.getAttribute('icon');
                            if(currentIcon.includes('linear')) {
                                icon.setAttribute('icon', currentIcon.replace('linear', 'bold'));
                            }
                        } else {
                            el.classList.add('text-zinc-500');
                            el.classList.remove('text-indigo-400');
                            // Revert to linear
                            const currentIcon = icon.getAttribute('icon');
                            if(currentIcon.includes('bold')) {
                                icon.setAttribute('icon', currentIcon.replace('bold', 'linear'));
                            }
                        }
                    });
                } else {
                    nav.classList.add('hidden');
                }
            },

            triggerMatch: function() {
                // Simulator for matching
                this.navigate('match');
            }
        };

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            router.navigate('landing');

            // Photo preview mock
            const photoUpload = document.querySelector('.group'); // targeting photo area
            if(photoUpload) {
                photoUpload.addEventListener('click', () => {
                    document.getElementById('preview-photo').classList.remove('hidden');
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<main className="relative mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-background shadow-2xl">

<section className="view-section active relative" id="view-landing">
<div className="absolute inset-0 z-0">
<img alt="Club Background" className="h-full w-full object-cover opacity-60" src="https://images.unsplash.com/photo-1570872626485-d8ffea69f463?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
</div>
<div className="relative z-10 flex h-full flex-col justify-end p-6 pb-12">
<div className="mb-auto flex items-center justify-center pt-10">
<div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-1.5 backdrop-blur-md">
<iconify-icon className="text-indigo-400" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs font-medium tracking-wide uppercase text-zinc-300">Club Le Fantôme, Paris</span>
</div>
</div>
<div className="space-y-4">
<div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 shadow-xl">
<img alt="Logo" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200"/>
</div>
<h1 className="text-4xl font-medium tracking-tight text-white leading-[1.1]">
                        La nuit est <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">meilleure ensemble.</span>
</h1>
<p className="text-base text-zinc-400 font-light leading-relaxed">
                        Connecte-toi avec les personnes présentes dans ce club ce soir. Complètement éphémère.
                    </p>
</div>
<button className="mt-8 group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-6 py-4 transition-transform active:scale-95" onclick="router.navigate('access-check')">
<span className="relative z-10 text-sm font-semibold text-black tracking-tight">Entrer dans la soirée</span>
<iconify-icon className="relative z-10 text-lg text-black transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<p className="mt-4 text-center text-xs text-zinc-600">
<iconify-icon className="mr-1 inline-block align-middle" icon="solar:shield-check-linear"></iconify-icon>
                    Géolocalisation requise pour l'accès
                </p>
</div>
</section>

<section className="view-section items-center justify-center bg-background px-6 text-center" id="view-access-check">
<div className="relative flex h-24 w-24 items-center justify-center">
<div className="absolute inset-0 animate-ping rounded-full bg-indigo-500/20"></div>
<div className="absolute inset-0 rounded-full border border-indigo-500/30 border-t-indigo-500 animate-spin"></div>
<iconify-icon className="text-4xl text-indigo-400" icon="solar:satellite-linear" width="1.5em"></iconify-icon>
</div>
<h2 className="mt-8 text-xl font-medium tracking-tight text-white">Vérification de zone</h2>
<p className="mt-2 text-sm text-zinc-500">Nous vérifions que vous êtes bien au Club Le Fantôme...</p>
</section>

<section className="view-section items-center justify-center bg-background px-6 text-center" id="view-auth-loading">
<iconify-icon className="text-5xl text-zinc-100 animate-pulse-slow mb-6" icon="solar:incognito-linear" width="1.5em"></iconify-icon>
<h2 className="text-xl font-medium tracking-tight text-white">Création de votre ID éphémère</h2>
<p className="mt-2 text-sm text-zinc-500">Connexion sécurisée et anonyme en cours...</p>
<div className="mt-8 h-1 w-32 overflow-hidden rounded-full bg-zinc-800">
<div className="h-full w-full origin-left animate-[slideUp_1s_ease-in-out_infinite] bg-indigo-500" style={{animation: 'progress 1.5s infinite ease-in-out', transformOrigin: '0% 50%'}}></div>
</div>
<style>
                @keyframes progress { 0% { width: 0%; } 100% { width: 100%; } }
            </style>
</section>

<section className="view-section bg-background p-6" id="view-profile-create">
<div className="mt-4 flex items-center justify-between">
<div className="h-1 w-full rounded-full bg-zinc-800">
<div className="h-full w-1/3 rounded-full bg-indigo-500"></div>
</div>
</div>
<div className="mt-8 space-y-2">
<h1 className="text-2xl font-medium tracking-tight text-white">Qui es-tu ?</h1>
<p className="text-sm text-zinc-400">Ce profil disparaîtra à la fermeture du club.</p>
</div>
<div className="mt-10 flex flex-col items-center">
<div className="relative h-32 w-32 cursor-pointer overflow-hidden rounded-full border-2 border-dashed border-zinc-700 bg-zinc-900 transition-colors hover:border-zinc-500 group">
<div className="flex h-full w-full flex-col items-center justify-center text-zinc-500 group-hover:text-zinc-300">
<iconify-icon className="text-3xl" icon="solar:camera-add-linear"></iconify-icon>
<span className="mt-2 text-xs font-medium">Photo</span>
</div>
<img alt="Preview" className="absolute inset-0 h-full w-full object-cover hidden" id="preview-photo" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&amp;auto=format&amp;fit=crop&amp;q=60"/>
</div>
</div>
<div className="mt-8 space-y-6">
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wider text-zinc-500">Prénom</label>
<input className="custom-input w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3.5 text-base text-white placeholder-zinc-600 transition-colors focus:border-indigo-500/50" placeholder="Ex: Alex" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium uppercase tracking-wider text-zinc-500">Je suis</label>
<div className="flex gap-3">
<button className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 py-3 text-sm font-medium text-zinc-400 hover:border-indigo-500 hover:text-white transition-all focus:ring-1 focus:ring-indigo-500">Un Homme</button>
<button className="flex-1 rounded-xl border border-indigo-500 bg-indigo-500/10 py-3 text-sm font-medium text-white transition-all">Une Femme</button>
<button className="flex-1 rounded-xl border border-zinc-800 bg-zinc-900 py-3 text-sm font-medium text-zinc-400 hover:border-indigo-500 hover:text-white transition-all">Autre</button>
</div>
</div>
<div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
<div className="flex h-5 w-5 items-center justify-center rounded border border-indigo-500 bg-indigo-500">
<iconify-icon className="text-white text-xs" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-zinc-300">Je certifie avoir plus de 18 ans</span>
</div>
</div>
<div className="mt-auto pb-4 pt-8">
<button className="w-full rounded-xl bg-white py-4 text-center text-sm font-semibold text-black transition-transform active:scale-[0.98]" onclick="router.navigate('discover')">
                    C'est parti !
                </button>
</div>
</section>

<section className="view-section relative h-screen overflow-hidden bg-background" id="view-discover">

<div className="absolute left-0 top-0 z-20 flex w-full items-center justify-between p-4 pt-6">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-xs font-medium tracking-wide uppercase text-zinc-400">142 En ligne</span>
</div>
<div className="rounded-full bg-zinc-900/80 p-2 backdrop-blur-sm border border-white/5">
<iconify-icon className="text-xl text-zinc-300" icon="solar:tuning-2-linear"></iconify-icon>
</div>
</div>

<div className="relative flex h-full w-full flex-col items-center justify-center p-4 pb-24">

<div className="absolute h-[65vh] w-[90%] translate-y-4 scale-95 rounded-3xl bg-zinc-800 opacity-40"></div>

<div className="relative h-[65vh] w-full max-w-sm overflow-hidden rounded-3xl bg-zinc-900 shadow-2xl ring-1 ring-white/10" id="swipe-card">
<img alt="Profile" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>

<div className="absolute bottom-0 left-0 w-full p-6">
<div className="flex items-end justify-between">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-white">Sarah, 24</h2>
<div className="mt-2 flex items-center gap-2">
<iconify-icon className="text-indigo-400 text-sm" icon="solar:map-point-bold"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">À 15 mètres</span>
</div>
</div>
<div className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 backdrop-blur-md">
<span className="text-lg">🍸</span>
<span className="text-xs font-medium text-white">Mojito</span>
</div>
</div>
<p className="mt-3 line-clamp-2 text-sm leading-relaxed text-zinc-300">
                            Juste ici pour la musique et rencontrer des gens sympas. Viens dire salut si tu es au bar ! ✨
                        </p>
</div>
</div>

<div className="mt-8 flex w-full max-w-xs items-center justify-between px-4">
<button className="flex h-16 w-16 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900 text-red-400 transition-all active:scale-90 hover:bg-red-500/10 hover:border-red-500/50 shadow-lg">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
<button className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 text-zinc-400 transition-all active:scale-90 shadow-md">
<iconify-icon className="text-xl" icon="solar:restart-linear"></iconify-icon>
</button>
<button className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-indigo-600 transition-all active:scale-90 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105" onclick="router.triggerMatch()">
<iconify-icon className="text-3xl" icon="solar:heart-angle-bold"></iconify-icon>
</button>
</div>
</div>

<div className="h-20"></div>
</section>

<section className="view-section fixed inset-0 z-50 flex-col items-center justify-center bg-black/90 px-6 backdrop-blur-xl" id="view-match">
<div className="absolute inset-0 overflow-hidden">
<div className="absolute -left-10 top-20 h-64 w-64 rounded-full bg-indigo-500/20 blur-[100px]"></div>
<div className="absolute -right-10 bottom-20 h-64 w-64 rounded-full bg-pink-500/20 blur-[100px]"></div>
</div>
<div className="relative z-10 flex flex-col items-center text-center">
<div className="mb-8 rotate-[-5deg] rounded-full border-2 border-white/20 bg-white/5 px-6 py-2 backdrop-blur-md">
<span className="text-sm font-bold tracking-widest text-white italic">C'EST UN MATCH !</span>
</div>
<div className="relative flex h-40 w-full justify-center">
<div className="absolute left-1/2 h-32 w-32 -translate-x-[85%] overflow-hidden rounded-full border-4 border-black shadow-2xl">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"/>
</div>
<div className="absolute right-1/2 h-32 w-32 translate-x-[85%] overflow-hidden rounded-full border-4 border-black shadow-2xl">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400"/>
</div>
<div className="absolute bottom-0 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-xl">
<iconify-icon className="text-2xl text-pink-500" icon="solar:heart-angle-bold"></iconify-icon>
</div>
</div>
<div className="mt-8 space-y-2">
<h2 className="text-2xl font-medium tracking-tight text-white">Vous et Sarah</h2>
<p className="text-sm text-zinc-400">Vous êtes à 15m l'un de l'autre.</p>
</div>
<div className="mt-12 w-full space-y-3">
<button className="w-full rounded-full bg-white py-4 text-sm font-semibold text-black transition-transform active:scale-95" onclick="router.navigate('chat/123')">
                        Envoyer un message
                    </button>
<button className="w-full rounded-full border border-white/10 bg-transparent py-4 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/5" onclick="router.navigate('discover')">
                        Continuer à swiper
                    </button>
</div>
</div>
</section>

<section className="view-section bg-background" id="view-matches">
<div className="sticky top-0 z-10 bg-background/80 px-6 pb-2 pt-14 backdrop-blur-md">
<h1 className="text-2xl font-medium tracking-tight text-white">Messages</h1>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-1 pb-24">

<div className="mb-6">
<h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Nouveaux Matchs</h3>
<div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
<div className="flex flex-col items-center gap-2">
<div className="h-16 w-16 rounded-full bg-gradient-to-br from-indigo-500 to-pink-500 p-[2px]">
<div className="h-full w-full rounded-full border-2 border-black overflow-hidden">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200"/>
</div>
</div>
<span className="text-xs font-medium text-white">Léa</span>
</div>
<div className="flex flex-col items-center gap-2">
<div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-zinc-800 bg-zinc-900">
<img className="h-full w-full object-cover opacity-50" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200"/>
<div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm">
<span className="text-xs font-bold text-white">3+</span>
</div>
</div>
<span className="text-xs font-medium text-zinc-500">Gold</span>
</div>
</div>
</div>

<h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-zinc-500">Discussions</h3>
<div className="group flex items-center gap-4 rounded-2xl bg-zinc-900/50 p-3 transition-colors hover:bg-zinc-900 active:bg-zinc-800 cursor-pointer" onclick="router.navigate('chat/123')">
<div className="relative">
<div className="h-14 w-14 overflow-hidden rounded-full">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200"/>
</div>
<div className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full border-2 border-black bg-green-500"></div>
</div>
<div className="flex-1 overflow-hidden">
<div className="flex items-center justify-between">
<h4 className="text-base font-medium text-white">Sarah</h4>
<span className="text-xs text-indigo-400 font-medium">2m</span>
</div>
<p className="truncate text-sm text-zinc-300 font-medium">Tu es vers le bar ? Je commande un...</p>
</div>
<div className="h-2.5 w-2.5 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.6)]"></div>
</div>
<div className="group flex items-center gap-4 rounded-2xl p-3 transition-colors active:bg-zinc-800/50">
<div className="relative">
<div className="h-14 w-14 overflow-hidden rounded-full grayscale opacity-70">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200"/>
</div>
</div>
<div className="flex-1 overflow-hidden">
<div className="flex items-center justify-between">
<h4 className="text-base font-medium text-zinc-300">Thomas</h4>
<span className="text-xs text-zinc-600">15m</span>
</div>
<p className="truncate text-sm text-zinc-500">C'était cool de te croiser !</p>
</div>
</div>
</div>
</section>

<section className="view-section h-screen flex-col bg-background" id="view-chat">

<div className="flex items-center justify-between border-b border-zinc-800 bg-background/80 p-4 pt-12 backdrop-blur-md">
<button className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 hover:bg-zinc-800 hover:text-white" onclick="router.back()">
<iconify-icon className="text-2xl" icon="solar:alt-arrow-left-linear"></iconify-icon>
</button>
<div className="flex flex-col items-center">
<span className="text-sm font-semibold text-white">Sarah</span>
<div className="flex items-center gap-1">
<div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
<span className="text-[10px] text-zinc-400">En ligne au club</span>
</div>
</div>
<div className="h-10 w-10 overflow-hidden rounded-full border border-zinc-700">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200"/>
</div>
</div>

<div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background">
<div className="flex justify-center">
<span className="rounded-full bg-zinc-900 border border-zinc-800 px-3 py-1 text-[10px] text-zinc-500">Aujourd'hui, 23:42</span>
</div>

<div className="flex items-end gap-2">
<div className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200"/>
</div>
<div className="max-w-[70%] rounded-2xl rounded-bl-none bg-zinc-800 px-4 py-2.5 text-sm text-zinc-200">
                        Hey ! J'ai vu que tu étais là aussi 👋
                    </div>
</div>

<div className="flex flex-row-reverse items-end gap-2">
<div className="max-w-[70%] rounded-2xl rounded-br-none bg-indigo-600 px-4 py-2.5 text-sm text-white shadow-lg shadow-indigo-500/10">
                        Salut Sarah ! Oui je viens d'arriver avec des amis.
                    </div>
</div>

<div className="flex items-end gap-2">
<div className="h-8 w-8 shrink-0 overflow-hidden rounded-full">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200"/>
</div>
<div className="max-w-[70%] rounded-2xl rounded-bl-none bg-zinc-800 px-4 py-2.5 text-sm text-zinc-200">
                        Tu es vers le bar ? Je commande un verre, rejoins-moi si tu veux !
                    </div>
</div>
</div>

<div className="border-t border-zinc-800 bg-background p-4 pb-8">
<div className="flex items-center gap-2 rounded-full bg-zinc-900 p-1 pr-2 ring-1 ring-zinc-800 focus-within:ring-indigo-500/50">
<button className="flex h-10 w-10 items-center justify-center rounded-full text-zinc-400 hover:text-indigo-400">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</button>
<input className="flex-1 bg-transparent py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none" placeholder="Écrivez un message..." type="text"/>
<button className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md transition-transform active:scale-90">
<iconify-icon className="text-xl -ml-0.5" icon="solar:plain-3-bold"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="view-section bg-background" id="view-profile">
<div className="p-6 pt-12 pb-24">
<div className="mb-8 flex items-center justify-between">
<h1 className="text-2xl font-medium tracking-tight text-white">Mon Profil</h1>
<button className="rounded-full bg-zinc-900 px-4 py-2 text-xs font-medium text-red-400 hover:bg-red-500/10 transition-colors border border-zinc-800" onclick="router.navigate('end-session')">
                        Quitter la soirée
                    </button>
</div>
<div className="flex flex-col items-center">
<div className="relative">
<div className="h-28 w-28 overflow-hidden rounded-full border-4 border-zinc-900 ring-2 ring-indigo-500/50">
<img className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400"/>
</div>
<button className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg">
<iconify-icon className="text-sm" icon="solar:pen-linear"></iconify-icon>
</button>
</div>
<h2 className="mt-4 text-xl font-semibold text-white">Alex, 25</h2>
<span className="rounded-full bg-zinc-900 px-3 py-1 text-xs text-zinc-400 mt-2 border border-zinc-800">ID: Anonyme-8X29</span>
</div>
<div className="mt-8 grid grid-cols-2 gap-3">
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
<span className="block text-2xl font-semibold text-indigo-400">12</span>
<span className="text-xs text-zinc-500">Profils vus</span>
</div>
<div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 text-center">
<span className="block text-2xl font-semibold text-pink-400">4</span>
<span className="text-xs text-zinc-500">Matchs</span>
</div>
</div>
<div className="mt-8 space-y-4">
<h3 className="px-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">Paramètres</h3>
<button className="flex w-full items-center justify-between rounded-xl bg-zinc-900 p-4 text-left transition-colors active:bg-zinc-800">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-zinc-400" icon="solar:user-id-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Modifier bio</span>
</div>
<iconify-icon className="text-zinc-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="flex w-full items-center justify-between rounded-xl bg-zinc-900 p-4 text-left transition-colors active:bg-zinc-800">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-zinc-400" icon="solar:settings-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Préférences de découverte</span>
</div>
<iconify-icon className="text-zinc-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
<button className="flex w-full items-center justify-between rounded-xl bg-zinc-900 p-4 text-left transition-colors active:bg-zinc-800">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-amber-400" icon="solar:crown-star-linear"></iconify-icon>
<span className="text-sm font-medium text-zinc-200">Upgrade Premium</span>
</div>
<iconify-icon className="text-zinc-600" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="view-section items-center justify-center bg-background px-6 text-center" id="view-end-session">
<div className="mb-6 rounded-full bg-red-500/10 p-6">
<iconify-icon className="text-5xl text-red-500" icon="solar:exit-linear"></iconify-icon>
</div>
<h1 className="text-2xl font-medium tracking-tight text-white">Quitter la soirée ?</h1>
<p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Si tu pars maintenant, ton profil éphémère et tes matchs seront définitivement supprimés.
            </p>
<div className="mt-10 w-full space-y-3">
<button className="group w-full rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 p-[1px]">
<div className="flex items-center justify-center gap-2 rounded-xl bg-black py-4 transition-colors group-hover:bg-opacity-90">
<iconify-icon className="text-amber-500 text-lg" icon="solar:bookmark-linear"></iconify-icon>
<span className="text-sm font-semibold text-white">Sauvegarder mon profil (24h)</span>
</div>
</button>
<button className="w-full rounded-xl bg-zinc-900 py-4 text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors" onclick="window.location.reload()">
                    Tout supprimer et quitter
                </button>
<button className="w-full py-4 text-sm font-medium text-zinc-500" onclick="router.back()">
                    Annuler
                </button>
</div>
</section>

<nav className="fixed bottom-0 left-0 right-0 z-40 hidden w-full max-w-[430px] mx-auto glass pb-safe pt-3 px-6 pb-6" id="bottom-nav">
<div className="flex items-center justify-between">
<button className="nav-item flex flex-col items-center gap-1 text-zinc-500 transition-colors hover:text-white" data-target="discover" onclick="router.navigate('discover')">
<iconify-icon className="text-2xl" icon="solar:card-search-linear"></iconify-icon>
<span className="text-[10px] font-medium">Swipe</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 text-zinc-500 transition-colors hover:text-white relative" data-target="matches" onclick="router.navigate('matches')">
<div className="relative">
<iconify-icon className="text-2xl" icon="solar:chat-round-dots-linear"></iconify-icon>
<div className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-indigo-500 border-2 border-zinc-900"></div>
</div>
<span className="text-[10px] font-medium">Messages</span>
</button>
<button className="nav-item flex flex-col items-center gap-1 text-zinc-500 transition-colors hover:text-white" data-target="profile" onclick="router.navigate('profile')">
<iconify-icon className="text-2xl" icon="solar:user-circle-linear"></iconify-icon>
<span className="text-[10px] font-medium">Profil</span>
</button>
</div>
</nav>
</main>


    </>
  );
}
