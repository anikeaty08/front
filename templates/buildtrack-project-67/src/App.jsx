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



        lucide.createIcons();

        // Theme Toggle Functionality
        const themeToggle = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');
        const body = document.getElementById('app-body');
        const container = document.getElementById('app-container');
        const header = document.getElementById('header');
        const logo = document.getElementById('logo');
        const fab = document.getElementById('fab');
        const bottomNav = document.getElementById('bottom-nav');

        // Check for saved theme preference
        const currentTheme = localStorage.getItem('theme') || 'dark';
        if (currentTheme === 'light') {
            applyLightMode();
        }

        themeToggle.addEventListener('click', () => {
            if (body.classList.contains('bg-[#0A0A0A]')) {
                applyLightMode();
                localStorage.setItem('theme', 'light');
            } else {
                applyDarkMode();
                localStorage.setItem('theme', 'dark');
            }
        });

        function applyLightMode() {
            // Main backgrounds
            body.classList.remove('bg-[#0A0A0A]');
            body.classList.add('bg-white');
            container.classList.remove('bg-[#0A0A0A]');
            container.classList.add('bg-white');
            header.classList.remove('bg-[#0A0A0A]');
            header.classList.add('bg-white');
            bottomNav.classList.remove('bg-[#0A0A0A]');
            bottomNav.classList.add('bg-white');

            // Logo
            logo.classList.remove('bg-white');
            logo.classList.add('bg-black');
            logo.querySelector('span').classList.remove('text-black');
            logo.querySelector('span').classList.add('text-white');

            // FAB
            fab.classList.remove('bg-white', 'text-black');
            fab.classList.add('bg-black', 'text-white');

            // Hero card
            const heroCard = document.getElementById('hero-card');
            heroCard.classList.remove('from-zinc-900', 'to-zinc-950', 'border-zinc-800/50');
            heroCard.classList.add('from-slate-50', 'to-slate-100', 'border-slate-200');

            // Text colors
            document.querySelectorAll('.text-white').forEach(el => {
                if (!el.closest('#logo span') && !el.closest('#fab')) {
                    el.classList.remove('text-white');
                    el.classList.add('text-slate-900');
                }
            });

            document.querySelectorAll('.text-zinc-400, .text-zinc-500').forEach(el => {
                el.classList.remove('text-zinc-400', 'text-zinc-500');
                el.classList.add('text-slate-600');
            });

            document.querySelectorAll('.text-zinc-600').forEach(el => {
                el.classList.remove('text-zinc-600');
                el.classList.add('text-slate-500');
            });

            // Cards
            document.querySelectorAll('.bg-zinc-900\\/50, .bg-zinc-900\\/30').forEach(el => {
                el.classList.remove('bg-zinc-900/50', 'bg-zinc-900/30');
                el.classList.add('bg-white');
            });

            document.querySelectorAll('.border-zinc-800\\/50, .border-zinc-800\\/30').forEach(el => {
                el.classList.remove('border-zinc-800/50', 'border-zinc-800/30');
                el.classList.add('border-slate-200');
            });

            // Buttons
            document.querySelectorAll('.bg-zinc-900').forEach(el => {
                if (!el.closest('.team-icon') && !el.closest('.inactive-icon')) {
                    el.classList.remove('bg-zinc-900', 'hover:bg-zinc-800');
                    el.classList.add('bg-slate-100', 'hover:bg-slate-200');
                }
            });

            document.querySelectorAll('.bg-zinc-800').forEach(el => {
                if (!el.closest('.team-icon') && !el.closest('.inactive-icon')) {
                    el.classList.remove('bg-zinc-800', 'hover:bg-zinc-700');
                    el.classList.add('bg-slate-100', 'hover:bg-slate-200');
                }
            });

            // Progress bars
            document.querySelectorAll('.progress-bg, #progress-bg-1, #progress-bg-2').forEach(el => {
                el.classList.remove('bg-zinc-800');
                el.classList.add('bg-slate-200');
            });

            // Team images border
            document.querySelectorAll('.team-img').forEach(el => {
                el.classList.remove('border-zinc-800');
                el.classList.add('border-slate-200');
            });

            // Inactive elements
            document.querySelectorAll('.inactive-icon').forEach(el => {
                el.classList.remove('bg-zinc-800');
                el.classList.add('bg-slate-200');
            });

            document.querySelectorAll('.team-icon').forEach(el => {
                el.classList.remove('bg-zinc-800');
                el.classList.add('bg-slate-100');
            });

            // Bottom nav border
            bottomNav.classList.remove('border-zinc-800/50');
            bottomNav.classList.add('border-slate-200');

            // Theme icon
            themeIcon.setAttribute('data-lucide', 'moon');
            themeIcon.classList.remove('text-zinc-400');
            themeIcon.classList.add('text-slate-600');
            lucide.createIcons();
        }

        function applyDarkMode() {
            // Main backgrounds
            body.classList.remove('bg-white');
            body.classList.add('bg-[#0A0A0A]');
            container.classList.remove('bg-white');
            container.classList.add('bg-[#0A0A0A]');
            header.classList.remove('bg-white');
            header.classList.add('bg-[#0A0A0A]');
            bottomNav.classList.remove('bg-white');
            bottomNav.classList.add('bg-[#0A0A0A]');

            // Logo
            logo.classList.remove('bg-black');
            logo.classList.add('bg-white');
            logo.querySelector('span').classList.remove('text-white');
            logo.querySelector('span').classList.add('text-black');

            // FAB
            fab.classList.remove('bg-black', 'text-white');
            fab.classList.add('bg-white', 'text-black');

            // Hero card
            const heroCard = document.getElementById('hero-card');
            heroCard.classList.remove('from-slate-50', 'to-slate-100', 'border-slate-200');
            heroCard.classList.add('from-zinc-900', 'to-zinc-950', 'border-zinc-800/50');

            // Text colors
            document.querySelectorAll('.text-slate-900').forEach(el => {
                el.classList.remove('text-slate-900');
                el.classList.add('text-white');
            });

            document.querySelectorAll('.text-slate-600').forEach(el => {
                el.classList.remove('text-slate-600');
                el.classList.add('text-zinc-500');
            });

            document.querySelectorAll('.text-slate-500').forEach(el => {
                el.classList.remove('text-slate-500');
                el.classList.add('text-zinc-600');
            });

            // Cards
            document.querySelectorAll('.bg-white').forEach(el => {
                if (el !== body && el !== container && el !== header && el !== bottomNav && !el.closest('#logo') && !el.closest('#fab')) {
                    el.classList.remove('bg-white');
                    el.classList.add('bg-zinc-900/50');
                }
            });

            document.querySelectorAll('.border-slate-200').forEach(el => {
                el.classList.remove('border-slate-200');
                el.classList.add('border-zinc-800/50');
            });

            // Buttons
            document.querySelectorAll('.bg-slate-100').forEach(el => {
                el.classList.remove('bg-slate-100', 'hover:bg-slate-200');
                el.classList.add('bg-zinc-900', 'hover:bg-zinc-800');
            });

            // Progress bars
            document.querySelectorAll('.progress-bg, #progress-bg-1, #progress-bg-2').forEach(el => {
                el.classList.remove('bg-slate-200');
                el.classList.add('bg-zinc-800');
            });

            // Team images border
            document.querySelectorAll('.team-img').forEach(el => {
                el.classList.remove('border-slate-200');
                el.classList.add('border-zinc-800');
            });

            // Inactive elements
            document.querySelectorAll('.inactive-icon').forEach(el => {
                el.classList.remove('bg-slate-200');
                el.classList.add('bg-zinc-800');
            });

            document.querySelectorAll('.team-icon').forEach(el => {
                el.classList.remove('bg-slate-100');
                el.classList.add('bg-zinc-800');
            });

            // Bottom nav border
            bottomNav.classList.remove('border-slate-200');
            bottomNav.classList.add('border-zinc-800/50');

            // Theme icon
            themeIcon.setAttribute('data-lucide', 'sun');
            themeIcon.classList.remove('text-slate-600');
            themeIcon.classList.add('text-zinc-400');
            lucide.createIcons();
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
      

<div className="max-w-md mx-auto bg-[#0A0A0A] min-h-screen transition-colors duration-300" id="app-container">

<div className="bg-[#0A0A0A] sticky top-0 z-50 px-5 py-6 transition-colors duration-300" id="header">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center transition-colors duration-300" id="logo">
<span className="text-black text-sm font-bold tracking-tighter">BT</span>
</div>
<div>
<h1 className="text-base font-bold text-white tracking-tight transition-colors duration-300" id="title">BuildTrack</h1>
<p className="text-xs text-zinc-500 transition-colors duration-300" id="subtitle">Entrepreneur</p>
</div>
</div>
<div className="flex items-center gap-2">
<button className="p-2.5 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-colors duration-300" id="theme-toggle">
<i className="w-5 h-5 text-zinc-400 transition-colors duration-300" data-lucide="sun" id="theme-icon"></i>
</button>
<button className="p-2.5 bg-zinc-900 hover:bg-zinc-800 rounded-xl transition-colors duration-300" id="bell-btn">
<i className="w-5 h-5 text-zinc-400 transition-colors duration-300" data-lucide="bell"></i>
</button>
</div>
</div>

<div className="flex gap-2">
<button className="px-4 py-2 text-sm font-semibold text-white bg-zinc-900 rounded-full transition-colors duration-300" id="nav-active">
                    Tableau de bord
                </button>
<button className="px-4 py-2 text-sm font-semibold text-zinc-500 hover:text-white hover:bg-zinc-900 rounded-full transition-colors duration-300" id="nav-projets">
                    Projets
                </button>
<button className="px-4 py-2 text-sm font-semibold text-zinc-500 hover:text-white hover:bg-zinc-900 rounded-full transition-colors duration-300" id="nav-equipes">
                    Équipes
                </button>
</div>
</div>

<div className="px-5 space-y-8 pb-32">

<div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl p-6 border border-zinc-800/50 overflow-hidden transition-colors duration-300" id="hero-card">
<div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
<div className="relative z-10">
<div className="flex items-start justify-between mb-6">
<div>
<p className="text-xs text-zinc-500 mb-2 uppercase tracking-wider font-medium transition-colors duration-300">Projet actuel</p>
<h2 className="text-2xl font-bold tracking-tight text-white mb-1 transition-colors duration-300">Résidence Les Jardins</h2>
<p className="text-sm text-zinc-400 transition-colors duration-300">Client: Sophie Marchand</p>
</div>
<span className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-full border border-emerald-500/30">EN COURS</span>
</div>
<div className="space-y-5">
<div>
<div className="flex justify-between text-sm mb-3">
<span className="text-zinc-400 font-medium transition-colors duration-300">Avancement physique</span>
<span className="font-bold text-white transition-colors duration-300">67%</span>
</div>
<div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden transition-colors duration-300" id="progress-bg-1">
<div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{width: '67%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between text-sm mb-3">
<span className="text-zinc-400 font-medium transition-colors duration-300">Budget utilisé</span>
<span className="font-bold text-white transition-colors duration-300">€245K / €380K</span>
</div>
<div className="w-full h-2.5 bg-zinc-800 rounded-full overflow-hidden transition-colors duration-300" id="progress-bg-2">
<div className="h-full bg-gradient-to-r from-purple-500 to-pink-400 rounded-full" style={{width: '64%'}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 transition-colors duration-300 stat-card">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-blue-400" data-lucide="calendar"></i>
</div>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-wide transition-colors duration-300">Durée</span>
</div>
<p className="text-2xl font-bold text-white tracking-tight transition-colors duration-300">9 mois</p>
<p className="text-xs text-zinc-500 mt-1 transition-colors duration-300">Mars - Décembre</p>
</div>
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 transition-colors duration-300 stat-card">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-emerald-400" data-lucide="users"></i>
</div>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-wide transition-colors duration-300">Équipe</span>
</div>
<p className="text-2xl font-bold text-white tracking-tight transition-colors duration-300">35</p>
<p className="text-xs text-zinc-500 mt-1 transition-colors duration-300">Personnes actives</p>
</div>
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 transition-colors duration-300 stat-card">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-purple-400" data-lucide="layers"></i>
</div>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-wide transition-colors duration-300">Phases</span>
</div>
<p className="text-2xl font-bold text-white tracking-tight transition-colors duration-300">2/6</p>
<p className="text-xs text-zinc-500 mt-1 transition-colors duration-300">Complétées</p>
</div>
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 transition-colors duration-300 stat-card">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
<i className="w-4 h-4 text-orange-400" data-lucide="package"></i>
</div>
<span className="text-xs text-zinc-500 font-medium uppercase tracking-wide transition-colors duration-300">Stock</span>
</div>
<p className="text-2xl font-bold text-white tracking-tight transition-colors duration-300">OK</p>
<p className="text-xs text-zinc-500 mt-1 transition-colors duration-300">Matériaux</p>
</div>
</div>

<div>
<h3 className="text-sm font-bold text-white mb-4 tracking-tight uppercase transition-colors duration-300 section-title">Actions rapides</h3>
<div className="grid grid-cols-4 gap-3">
<button className="flex flex-col items-center gap-3 p-4 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900 transition-all action-card">
<div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-blue-400" data-lucide="plus"></i>
</div>
<span className="text-xs font-semibold text-zinc-400 text-center leading-tight transition-colors duration-300">Phase</span>
</button>
<button className="flex flex-col items-center gap-3 p-4 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900 transition-all action-card">
<div className="w-12 h-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-emerald-400" data-lucide="users"></i>
</div>
<span className="text-xs font-semibold text-zinc-400 text-center leading-tight transition-colors duration-300">Équipe</span>
</button>
<button className="flex flex-col items-center gap-3 p-4 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900 transition-all action-card">
<div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-purple-400" data-lucide="file-text"></i>
</div>
<span className="text-xs font-semibold text-zinc-400 text-center leading-tight transition-colors duration-300">Plans</span>
</button>
<button className="flex flex-col items-center gap-3 p-4 bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl hover:border-zinc-700 hover:bg-zinc-900 transition-all action-card">
<div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
<i className="w-6 h-6 text-orange-400" data-lucide="package"></i>
</div>
<span className="text-xs font-semibold text-zinc-400 text-center leading-tight transition-colors duration-300">Stock</span>
</button>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-bold text-white tracking-tight uppercase transition-colors duration-300 section-title">Phases du projet</h3>
<button className="text-xs text-zinc-500 hover:text-white font-semibold uppercase tracking-wide transition-colors duration-300">Tout</button>
</div>
<div className="space-y-3">
<div className="bg-zinc-900/50 backdrop-blur-xl border border-emerald-800/30 rounded-2xl p-5 hover:border-emerald-700/50 transition-all phase-card">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-emerald-400" data-lucide="check"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-2">
<h4 className="text-base font-bold text-white tracking-tight transition-colors duration-300">Fondations</h4>
<span className="text-xs text-emerald-400 font-bold uppercase tracking-wide">Terminé</span>
</div>
<p className="text-sm text-zinc-400 mb-3 transition-colors duration-300">15 Mars - 28 Avril 2024</p>
<div className="flex items-center gap-4 text-xs text-zinc-500 transition-colors duration-300">
<span className="flex items-center gap-1.5 font-medium">
<i className="w-3.5 h-3.5" data-lucide="users"></i>
                                        8 ouvriers
                                    </span>
<span className="flex items-center gap-1.5 font-medium">
<i className="w-3.5 h-3.5" data-lucide="euro"></i>
                                        €45,000
                                    </span>
</div>
</div>
</div>
</div>
<div className="bg-zinc-900/50 backdrop-blur-xl border border-blue-800/30 rounded-2xl p-5 hover:border-blue-700/50 transition-all phase-card">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-blue-400" data-lucide="zap"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-2">
<h4 className="text-base font-bold text-white tracking-tight transition-colors duration-300">Gros œuvre</h4>
<span className="text-xs text-blue-400 font-bold uppercase tracking-wide">En cours</span>
</div>
<p className="text-sm text-zinc-400 mb-3 transition-colors duration-300">1 Mai - 15 Juillet 2024</p>
<div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden mb-3 transition-colors duration-300 progress-bg">
<div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{width: '73%'}}></div>
</div>
<div className="flex items-center gap-4 text-xs text-zinc-500 transition-colors duration-300">
<span className="flex items-center gap-1.5 font-medium">
<i className="w-3.5 h-3.5" data-lucide="users"></i>
                                        12 ouvriers
                                    </span>
<span className="flex items-center gap-1.5 font-medium">
<i className="w-3.5 h-3.5" data-lucide="euro"></i>
                                        €120,000
                                    </span>
</div>
</div>
</div>
</div>
<div className="bg-zinc-900/30 backdrop-blur-xl border border-zinc-800/30 rounded-2xl p-5 opacity-60 phase-card-inactive">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-zinc-800 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 inactive-icon">
<i className="w-5 h-5 text-zinc-600 transition-colors duration-300" data-lucide="clock"></i>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-center justify-between mb-2">
<h4 className="text-base font-bold text-white tracking-tight transition-colors duration-300">Second œuvre</h4>
<span className="text-xs text-zinc-500 font-bold uppercase tracking-wide transition-colors duration-300">À venir</span>
</div>
<p className="text-sm text-zinc-500 mb-3 transition-colors duration-300">20 Juillet - 30 Septembre 2024</p>
<div className="flex items-center gap-4 text-xs text-zinc-600 transition-colors duration-300">
<span className="flex items-center gap-1.5 font-medium">
<i className="w-3.5 h-3.5" data-lucide="users"></i>
                                        15 ouvriers
                                    </span>
<span className="flex items-center gap-1.5 font-medium">
<i className="w-3.5 h-3.5" data-lucide="euro"></i>
                                        €95,000
                                    </span>
</div>
</div>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-bold text-white tracking-tight uppercase transition-colors duration-300 section-title">Équipes sur site</h3>
<button className="w-8 h-8 bg-zinc-900 hover:bg-zinc-800 rounded-xl flex items-center justify-center transition-colors team-add-btn">
<i className="w-4 h-4 text-zinc-400 transition-colors duration-300" data-lucide="plus"></i>
</button>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 hover:border-zinc-700 transition-all team-card">
<div className="flex items-center gap-3 mb-3">
<img alt="Chef" className="w-10 h-10 rounded-xl object-cover border-2 border-zinc-800 transition-colors duration-300 team-img" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100"/>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-bold text-white truncate transition-colors duration-300">Jean Dupont</h4>
<p className="text-xs text-zinc-500 font-medium transition-colors duration-300">Chef de chantier</p>
</div>
</div>
<button className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs font-semibold text-zinc-300 flex items-center justify-center gap-2 transition-colors team-btn">
<i className="w-3.5 h-3.5" data-lucide="phone"></i>
                            Appeler
                        </button>
</div>
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 hover:border-zinc-700 transition-all team-card">
<div className="flex items-center gap-3 mb-3">
<img alt="Arch" className="w-10 h-10 rounded-xl object-cover border-2 border-zinc-800 transition-colors duration-300 team-img" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100"/>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-bold text-white truncate transition-colors duration-300">Marie Leroy</h4>
<p className="text-xs text-zinc-500 font-medium transition-colors duration-300">Architecte</p>
</div>
</div>
<button className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs font-semibold text-zinc-300 flex items-center justify-center gap-2 transition-colors team-btn">
<i className="w-3.5 h-3.5" data-lucide="phone"></i>
                            Appeler
                        </button>
</div>
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 hover:border-zinc-700 transition-all team-card">
<div className="flex items-center gap-3 mb-3">
<img alt="Ing" className="w-10 h-10 rounded-xl object-cover border-2 border-zinc-800 transition-colors duration-300 team-img" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100"/>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-bold text-white truncate transition-colors duration-300">Paul Martin</h4>
<p className="text-xs text-zinc-500 font-medium transition-colors duration-300">Ingénieur</p>
</div>
</div>
<button className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs font-semibold text-zinc-300 flex items-center justify-center gap-2 transition-colors team-btn">
<i className="w-3.5 h-3.5" data-lucide="phone"></i>
                            Appeler
                        </button>
</div>
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 hover:border-zinc-700 transition-all team-card">
<div className="flex items-center gap-3 mb-3">
<div className="w-10 h-10 rounded-xl bg-zinc-800 flex items-center justify-center transition-colors duration-300 team-icon">
<i className="w-5 h-5 text-zinc-500 transition-colors duration-300" data-lucide="users"></i>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-bold text-white transition-colors duration-300">Maçons</h4>
<p className="text-xs text-zinc-500 font-medium transition-colors duration-300">6 personnes</p>
</div>
</div>
<button className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg text-xs font-semibold text-zinc-300 flex items-center justify-center gap-2 transition-colors team-btn">
<i className="w-3.5 h-3.5" data-lucide="message-circle"></i>
                            Groupe
                        </button>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-bold text-white tracking-tight uppercase transition-colors duration-300 section-title">Matériaux &amp; Équipements</h3>
<button className="text-xs text-zinc-500 hover:text-white font-semibold uppercase tracking-wide transition-colors duration-300">Gérer</button>
</div>
<div className="space-y-2">
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 hover:border-zinc-700 transition-all material-card">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-amber-400" data-lucide="package"></i>
</div>
<div>
<h4 className="text-sm font-bold text-white transition-colors duration-300">Ciment</h4>
<p className="text-xs text-zinc-500 font-medium transition-colors duration-300">320 sacs disponibles</p>
</div>
</div>
<span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded-lg border border-emerald-500/30">OK</span>
</div>
</div>
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 hover:border-zinc-700 transition-all material-card">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-red-400" data-lucide="package"></i>
</div>
<div>
<h4 className="text-sm font-bold text-white transition-colors duration-300">Briques</h4>
<p className="text-xs text-zinc-500 font-medium transition-colors duration-300">1,200 unités restantes</p>
</div>
</div>
<span className="px-2.5 py-1 bg-red-500/20 text-red-400 text-xs font-bold rounded-lg border border-red-500/30">BAS</span>
</div>
</div>
<div className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 hover:border-zinc-700 transition-all material-card">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center">
<i className="w-5 h-5 text-blue-400" data-lucide="hammer"></i>
</div>
<div>
<h4 className="text-sm font-bold text-white transition-colors duration-300">Grue mobile</h4>
<p className="text-xs text-zinc-500 font-medium transition-colors duration-300">En service</p>
</div>
</div>
<span className="px-2.5 py-1 bg-blue-500/20 text-blue-400 text-xs font-bold rounded-lg border border-blue-500/30">ACTIF</span>
</div>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-bold text-white tracking-tight uppercase transition-colors duration-300 section-title">Plans &amp; Documents</h3>
<button className="w-8 h-8 bg-zinc-900 hover:bg-zinc-800 rounded-xl flex items-center justify-center transition-colors doc-add-btn">
<i className="w-4 h-4 text-zinc-400 transition-colors duration-300" data-lucide="upload"></i>
</button>
</div>
<div className="grid grid-cols-2 gap-3">
<button className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 hover:border-zinc-700 hover:bg-zinc-900 transition-all text-left group doc-card">
<div className="w-full h-28 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-xl mb-3 flex items-center justify-center border border-blue-500/20 group-hover:border-blue-500/40 transition-colors">
<i className="w-10 h-10 text-blue-400" data-lucide="layout"></i>
</div>
<h4 className="text-sm font-bold text-white mb-1 transition-colors duration-300">Plan 2D</h4>
<p className="text-xs text-zinc-500 font-medium transition-colors duration-300">Mis à jour: 12/05</p>
</button>
<button className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 hover:border-zinc-700 hover:bg-zinc-900 transition-all text-left group doc-card">
<div className="w-full h-28 bg-gradient-to-br from-purple-500/20 to-pink-500/10 rounded-xl mb-3 flex items-center justify-center border border-purple-500/20 group-hover:border-purple-500/40 transition-colors">
<i className="w-10 h-10 text-purple-400" data-lucide="box"></i>
</div>
<h4 className="text-sm font-bold text-white mb-1 transition-colors duration-300">Modèle 3D</h4>
<p className="text-xs text-zinc-500 font-medium transition-colors duration-300">Mis à jour: 10/05</p>
</button>
<button className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 hover:border-zinc-700 hover:bg-zinc-900 transition-all text-left group doc-card">
<div className="w-full h-28 bg-gradient-to-br from-emerald-500/20 to-teal-500/10 rounded-xl mb-3 flex items-center justify-center border border-emerald-500/20 group-hover:border-emerald-500/40 transition-colors">
<i className="w-10 h-10 text-emerald-400" data-lucide="file-text"></i>
</div>
<h4 className="text-sm font-bold text-white mb-1 transition-colors duration-300">Permis</h4>
<p className="text-xs text-zinc-500 font-medium transition-colors duration-300">Documents légaux</p>
</button>
<button className="bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-4 hover:border-zinc-700 hover:bg-zinc-900 transition-all text-left group doc-card">
<div className="w-full h-28 bg-gradient-to-br from-orange-500/20 to-yellow-500/10 rounded-xl mb-3 flex items-center justify-center border border-orange-500/20 group-hover:border-orange-500/40 transition-colors">
<i className="w-10 h-10 text-orange-400" data-lucide="image"></i>
</div>
<h4 className="text-sm font-bold text-white mb-1 transition-colors duration-300">Photos</h4>
<p className="text-xs text-zinc-500 font-medium transition-colors duration-300">124 images</p>
</button>
</div>
</div>

<div>
<h3 className="text-sm font-bold text-white mb-4 tracking-tight uppercase transition-colors duration-300 section-title">Activité récente</h3>
<div className="space-y-3">
<div className="flex gap-3">
<div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-blue-400" data-lucide="check"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-white font-medium transition-colors duration-300">Phase "Gros œuvre" mise à jour</p>
<p className="text-xs text-zinc-500 mt-1 font-medium transition-colors duration-300">Il y a 2 heures</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-emerald-400" data-lucide="upload"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-white font-medium transition-colors duration-300">Nouveaux plans 2D ajoutés</p>
<p className="text-xs text-zinc-500 mt-1 font-medium transition-colors duration-300">Il y a 5 heures</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-purple-400" data-lucide="package"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-white font-medium transition-colors duration-300">Livraison de matériaux prévue</p>
<p className="text-xs text-zinc-500 mt-1 font-medium transition-colors duration-300">Hier à 16:30</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
<i className="w-5 h-5 text-orange-400" data-lucide="message-circle"></i>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm text-white font-medium transition-colors duration-300">Le client a laissé un commentaire</p>
<p className="text-xs text-zinc-500 mt-1 font-medium transition-colors duration-300">Hier à 14:20</p>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-0 left-0 right-0 bg-[#0A0A0A] border-t border-zinc-800/50 max-w-md mx-auto backdrop-blur-xl transition-colors duration-300" id="bottom-nav">
<div className="flex items-center justify-around px-2 py-3">
<button className="flex flex-col items-center gap-1 px-4 py-2 text-white transition-colors">
<i className="w-5 h-5" data-lucide="home"></i>
<span className="text-xs font-semibold">Accueil</span>
</button>
<button className="flex flex-col items-center gap-1 px-4 py-2 text-zinc-600 hover:text-white transition-colors nav-btn">
<i className="w-5 h-5" data-lucide="folder"></i>
<span className="text-xs font-semibold">Projets</span>
</button>
<button className="flex flex-col items-center gap-1 px-4 py-2 text-zinc-600 hover:text-white transition-colors nav-btn">
<i className="w-5 h-5" data-lucide="calendar"></i>
<span className="text-xs font-semibold">Planning</span>
</button>
<button className="flex flex-col items-center gap-1 px-4 py-2 text-zinc-600 hover:text-white transition-colors nav-btn">
<i className="w-5 h-5" data-lucide="message-square"></i>
<span className="text-xs font-semibold">Messages</span>
</button>
<button className="flex flex-col items-center gap-1 px-4 py-2 text-zinc-600 hover:text-white transition-colors nav-btn">
<i className="w-5 h-5" data-lucide="user"></i>
<span className="text-xs font-semibold">Profil</span>
</button>
</div>
</div>

<button className="fixed bottom-24 right-4 w-14 h-14 bg-white text-black rounded-2xl shadow-2xl hover:shadow-xl transition-all flex items-center justify-center" id="fab" style={{marginRight: 'calc((100vw - 28rem) / 2 + 1rem)'}}>
<i className="w-6 h-6" data-lucide="plus"></i>
</button>
</div>


    </>
  );
}
