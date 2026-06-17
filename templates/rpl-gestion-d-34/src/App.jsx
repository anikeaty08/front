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



// Minimal config solely to enable class-based dark mode (standard requirement for the toggle)
tailwind.config = { darkMode: 'class' }



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Dark Mode Toggle Logic ---
        const themeToggleBtn = document.getElementById('theme-toggle');
        const themeIcon = document.getElementById('theme-icon');

        function updateThemeIcon() {
            if(!themeIcon) return;
            const isDark = document.documentElement.classList.contains('dark');
            themeIcon.setAttribute('icon', isDark ? 'solar:sun-linear' : 'solar:moon-linear');
        }

        // Init theme
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        updateThemeIcon();

        if(themeToggleBtn) {
            themeToggleBtn.addEventListener('click', () => {
                document.documentElement.classList.toggle('dark');
                localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
                updateThemeIcon();
            });
        }

        // --- View Router Logic ---
        function navigate() {
            const hash = window.location.hash || '#home';
            document.querySelectorAll('.app-view').forEach(el => el.classList.add('hidden'));
            const targetId = 'view-' + hash.replace('#', '');
            const target = document.getElementById(targetId) || document.getElementById('view-home');
            
            // Re-setup display properties (removing hidden)
            target.classList.remove('hidden');
            
            // Initialize GSAP scroll if entering home
            if(hash === '#home' || hash === '') {
                initMockupScroll();
            } else {
                if(mockupScrollTween) mockupScrollTween.pause();
            }

            window.scrollTo(0, 0);
        }
        window.addEventListener('hashchange', navigate);
        
        // --- GSAP Animations (Showcase) ---
        gsap.registerPlugin(ScrollTrigger);
        let mockupScrollTween = null;

        function initMockupScroll() {
            const content = document.getElementById('mockup-scroll-content');
            if(!content) return;
            
            // If already exists, just play
            if(mockupScrollTween) {
                mockupScrollTween.play();
                return;
            }

            // Create infinite vertical scroll inside the mockup
            mockupScrollTween = gsap.to(content, {
                yPercent: -50,
                ease: "none",
                duration: 25,
                repeat: -1
            });

            // Pause on hover
            content.addEventListener('mouseenter', () => mockupScrollTween.pause());
            content.addEventListener('mouseleave', () => mockupScrollTween.play());
        }

        // Entrance animation for cards
        const cards = gsap.utils.toArray('.gsap-card');
        if(cards.length > 0) {
            gsap.set(cards, { y: 100, opacity: 0, rotationX: 10 });
            ScrollTrigger.create({
                trigger: "#showcase-section",
                start: "top 65%",
                animation: gsap.to(cards, {
                    y: 0, opacity: 1, rotationX: 0, duration: 1.2, stagger: 0.15, ease: "power3.out"
                })
            });
            // Scroll Parallax Spread
            gsap.to(cards[0], { y: -60, scale: 0.9, scrollTrigger: { trigger: "#showcase-section", start: "top center", end: "bottom top", scrub: 1 }});
            gsap.to(cards[1], { y: -30, scale: 0.95, scrollTrigger: { trigger: "#showcase-section", start: "top center", end: "bottom top", scrub: 1 }});
        }

        // Initial trigger
        navigate();
    
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
      

<div id="app">

<div className="app-view" id="view-home">

<nav className="fixed top-0 inset-x-0 z-50 bg-neutral-50/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200/50 dark:border-white/5 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="font-medium tracking-tight text-lg flex items-center gap-1.5 dark:text-white" href="#home">
<div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
<span className="text-white text-xs font-medium">R</span>
</div>
<span className="tracking-[0.2em] text-sm">RPL.</span>
</a>
<div className="hidden md:flex gap-6">
<a className="text-sm font-normal text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors" href="#fonctionnalites">Fonctionnalités</a>
<a className="text-sm font-normal text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors" href="#showcase-section">Interface</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="p-2 text-neutral-500 dark:text-neutral-400 hover:text-blue-600 transition-colors rounded-full hover:bg-neutral-100 dark:hover:bg-white/5 flex items-center justify-center" id="theme-toggle">
<iconify-icon className="text-lg" icon="solar:sun-linear" id="theme-icon" strokeWidth="1.5"></iconify-icon>
</button>
<a className="hidden sm:block text-sm font-normal text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors" href="#login">Connexion</a>
<a className="text-sm font-normal bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 rounded-full hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all" href="#register">S'inscrire</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] bg-[length:24px_24px] opacity-40 dark:opacity-20 z-0" style={{maskImage: 'linear-gradient(to bottom, white, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-600/10 border border-blue-100 dark:border-blue-600/20 mb-8">
<span className="flex h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse"></span>
<span className="text-xs font-normal text-blue-600 dark:text-blue-400 tracking-tight">Nouvelle synchronisation bancaire</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.1] text-neutral-900 dark:text-white mb-6 max-w-4xl">
                        Votre esprit libre.<br/>
<span className="text-neutral-400 dark:text-neutral-600">Vos échéances sous contrôle.</span>
</h1>
<p className="text-base sm:text-lg text-neutral-500 dark:text-neutral-400 mb-10 max-w-2xl font-light leading-relaxed">
                        L'interface la plus épurée pour centraliser vos factures, abonnements et rappels importants. Ne payez plus jamais de pénalités de retard.
                    </p>
<div className="flex items-center gap-4">
<a className="text-sm font-normal bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all flex items-center justify-center gap-2" href="#dashboard">
                            Voir le tableau de bord
                            <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="border-y border-neutral-200/50 dark:border-white/5 bg-white dark:bg-neutral-950 transition-colors duration-300">
<div className="max-w-7xl mx-auto px-6 py-8 flex justify-center gap-12 md:gap-24 opacity-30 dark:opacity-20 grayscale hover:grayscale-0 transition-all duration-500 dark:text-white">
<span className="font-medium text-lg tracking-[0.3em] hover:text-blue-600 transition-colors">STRIPE</span>
<span className="font-medium text-lg tracking-[0.3em] hover:text-blue-600 transition-colors">VERCEL</span>
<span className="font-medium text-lg tracking-[0.3em] hover:text-blue-600 transition-colors">LINEAR</span>
</div>
</section>

<section className="py-32 bg-neutral-50 dark:bg-neutral-950 overflow-hidden transition-colors duration-300" id="showcase-section">
<div className="max-w-7xl mx-auto px-6 text-center mb-16 relative z-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 dark:text-white mb-4">Visualisez l'avenir.</h2>
<p className="text-base text-neutral-500 dark:text-neutral-400 font-light max-w-xl mx-auto">Une vue d'ensemble détaillée, des actions rapides et une gestion de vos abonnements sans friction.</p>
</div>
<div className="relative max-w-5xl mx-auto h-[60vh] md:h-[75vh] w-full" id="cards-stack">

<div className="gsap-card absolute top-0 left-0 right-0 mx-auto w-[85%] md:w-3/4 aspect-[16/10] bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/50 dark:border-white/5 shadow-xl overflow-hidden z-10"></div>

<div className="gsap-card absolute top-6 md:top-8 left-0 right-0 mx-auto w-[90%] md:w-4/5 aspect-[16/10] bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/50 dark:border-white/5 shadow-2xl overflow-hidden z-20"></div>

<div className="gsap-card absolute top-12 md:top-16 left-0 right-0 mx-auto w-[95%] md:w-[90%] aspect-[16/10] bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200/80 dark:border-white/10 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden z-30 flex flex-col md:flex-row">

<div className="w-48 border-r border-neutral-100 dark:border-white/5 p-4 hidden md:flex flex-col gap-6 bg-neutral-50/50 dark:bg-white/[0.02] shrink-0">
<div className="flex items-center gap-2 px-2">
<div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center"><span className="text-white text-[8px] font-medium">R</span></div>
<span className="tracking-[0.2em] text-xs font-medium dark:text-white">RPL.</span>
</div>
<div className="space-y-1">
<div className="flex items-center gap-2 px-2 py-1.5 bg-blue-50 dark:bg-blue-600/10 text-blue-600 dark:text-blue-400 rounded-md text-xs font-medium">
<iconify-icon icon="solar:widget-2-linear" strokeWidth="1.5"></iconify-icon> Vue d'ensemble
                                </div>
<div className="flex items-center gap-2 px-2 py-1.5 text-neutral-500 dark:text-neutral-400 text-xs font-normal">
<iconify-icon icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon> Échéances
                                </div>
<div className="flex items-center gap-2 px-2 py-1.5 text-neutral-500 dark:text-neutral-400 text-xs font-normal">
<iconify-icon icon="solar:card-2-linear" strokeWidth="1.5"></iconify-icon> Abonnements
                                </div>
</div>
</div>

<div className="flex-1 flex flex-col bg-white dark:bg-neutral-900 relative overflow-hidden">

<div className="h-12 border-b border-neutral-100 dark:border-white/5 flex items-center justify-between px-6 shrink-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur z-10">
<h3 className="text-sm font-medium tracking-tight dark:text-white">Aperçu en direct</h3>
<div className="flex items-center gap-3">
<iconify-icon className="text-neutral-400 text-sm" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<div className="w-6 h-6 rounded-full bg-neutral-200 dark:bg-neutral-800"></div>
</div>
</div>

<div className="flex-1 relative" style={{maskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 5%, black 95%, transparent)'}}>
<div className="absolute inset-x-0 top-0 p-6 flex flex-col gap-10 cursor-ns-resize" id="mockup-scroll-content">

<div className="space-y-4">
<h4 className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Statistiques</h4>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl border border-neutral-100 dark:border-white/5 bg-neutral-50/50 dark:bg-white/[0.02]">
<p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Total à payer (Oct)</p>
<p className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white">1 420,50 €</p>
</div>
<div className="p-4 rounded-xl border border-neutral-100 dark:border-white/5 bg-neutral-50/50 dark:bg-white/[0.02]">
<p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Échéances proches</p>
<p className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white">3</p>
</div>
</div>
</div>

<div className="space-y-4">
<h4 className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Actions Requises</h4>
<div className="flex flex-col gap-2">

<div className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 dark:border-white/5 hover:border-blue-500/30 transition-colors bg-white dark:bg-neutral-900">
<div className="flex items-center gap-3">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-300 dark:border-neutral-600 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-colors">
<iconify-icon className="text-white text-[10px] opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
<div>
<p className="text-sm font-medium text-neutral-900 dark:text-white">Assurance Auto</p>
<p className="text-xs text-red-500 font-medium">En retard (2 jours)</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium dark:text-white">65,00 €</span>
<button className="px-3 py-1 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-normal rounded-md">Payer</button>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 dark:border-white/5 hover:border-blue-500/30 transition-colors bg-white dark:bg-neutral-900">
<div className="flex items-center gap-3">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-300 dark:border-neutral-600 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-colors">
<iconify-icon className="text-white text-[10px] opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear"></iconify-icon>
</div>
</label>
<div>
<p className="text-sm font-medium text-neutral-900 dark:text-white">Abonnement Design</p>
<p className="text-xs text-neutral-400 font-normal">Demain</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium dark:text-white">24,00 €</span>
<button className="px-3 py-1 bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300 text-xs font-normal rounded-md hover:bg-neutral-200">Détails</button>
</div>
</div>
</div>
</div>

<div className="space-y-4">
<h4 className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Abonnements Actifs</h4>
<div className="grid grid-cols-1 gap-3">
<div className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 dark:border-white/5 bg-white dark:bg-neutral-900">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-100 dark:bg-white/5 rounded-full flex items-center justify-center text-xs font-medium dark:text-white">N</div>
<div>
<p className="text-sm font-medium text-neutral-900 dark:text-white">Netflix Premium</p>
<p className="text-xs text-neutral-400 font-normal">15,99 € / mois</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4 bg-neutral-200 peer-focus:outline-none rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-neutral-600 peer-checked:bg-blue-600"></div>
</label>
</div>
<div className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 dark:border-white/5 bg-white dark:bg-neutral-900">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-100 dark:bg-white/5 rounded-full flex items-center justify-center text-xs font-medium dark:text-white">S</div>
<div>
<p className="text-sm font-medium text-neutral-900 dark:text-white">Spotify Duo</p>
<p className="text-xs text-neutral-400 font-normal">14,99 € / mois</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4 bg-neutral-200 peer-focus:outline-none rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-neutral-600 peer-checked:bg-blue-600"></div>
</label>
</div>
</div>
</div>


<div className="space-y-4 pt-4">
<h4 className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Statistiques</h4>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl border border-neutral-100 dark:border-white/5 bg-neutral-50/50 dark:bg-white/[0.02]">
<p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Total à payer (Oct)</p>
<p className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white">1 420,50 €</p>
</div>
<div className="p-4 rounded-xl border border-neutral-100 dark:border-white/5 bg-neutral-50/50 dark:bg-white/[0.02]">
<p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Échéances proches</p>
<p className="text-xl font-medium tracking-tight text-neutral-900 dark:text-white">3</p>
</div>
</div>
</div>

<div className="space-y-4">
<h4 className="text-xs font-medium text-neutral-500 uppercase tracking-widest">Actions Requises</h4>
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between p-3 rounded-lg border border-neutral-100 dark:border-white/5 hover:border-blue-500/30 transition-colors bg-white dark:bg-neutral-900">
<div className="flex items-center gap-3">
<label className="relative flex items-center cursor-pointer">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 rounded border border-neutral-300 dark:border-neutral-600 peer-checked:bg-blue-600 peer-checked:border-blue-600 flex items-center justify-center transition-colors"></div>
</label>
<div>
<p className="text-sm font-medium text-neutral-900 dark:text-white">Assurance Auto</p>
<p className="text-xs text-red-500 font-medium">En retard (2 jours)</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-sm font-medium dark:text-white">65,00 €</span>
<button className="px-3 py-1 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs font-normal rounded-md">Payer</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<div className="app-view hidden min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 p-6" id="view-login">
<div className="w-full max-w-sm">
<div className="mb-8 text-center">
<a className="font-medium tracking-tight text-xl flex items-center justify-center gap-2 dark:text-white mb-6" href="#home">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
<span className="text-white text-xs font-medium">R</span>
</div>
<span className="tracking-[0.2em] text-base">RPL.</span>
</a>
<h2 className="text-2xl font-medium tracking-tight dark:text-white">Bon retour</h2>
<p className="text-sm text-neutral-500 mt-1 font-light">Saisissez vos identifiants pour continuer</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); window.location.hash='#dashboard';">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Email</label>
<input className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-lg px-3 py-2 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" type="email" value="contact@exemple.com"/>
</div>
<div className="space-y-1">
<div className="flex items-center justify-between">
<label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Mot de passe</label>
<a className="text-xs text-neutral-500 hover:text-blue-600 transition-colors" href="#">Oublié ?</a>
</div>
<input className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-lg px-3 py-2 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" type="password" value="********"/>
</div>
<button className="w-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg px-4 py-2.5 text-sm font-normal mt-2 hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors" type="submit">Se connecter</button>
</form>
<p className="text-center text-xs text-neutral-500 mt-6 font-light">
                    Pas encore de compte ? <a className="text-neutral-900 dark:text-white font-medium hover:underline" href="#register">S'inscrire</a>
</p>
</div>
</div>

<div className="app-view hidden min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-950 p-6" id="view-register">
<div className="w-full max-w-sm">
<div className="mb-8 text-center">
<a className="font-medium tracking-tight text-xl flex items-center justify-center gap-2 dark:text-white mb-6" href="#home">
<div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
<span className="text-white text-xs font-medium">R</span>
</div>
<span className="tracking-[0.2em] text-base">RPL.</span>
</a>
<h2 className="text-2xl font-medium tracking-tight dark:text-white">Créer un compte</h2>
<p className="text-sm text-neutral-500 mt-1 font-light">Rejoignez-nous gratuitement en 2 minutes</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); window.location.hash='#dashboard';">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Nom complet</label>
<input className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-lg px-3 py-2 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Sophie Martin" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Email</label>
<input className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-lg px-3 py-2 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="contact@exemple.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-700 dark:text-neutral-300">Mot de passe</label>
<input className="w-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-lg px-3 py-2 text-sm text-neutral-900 dark:text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="Min. 8 caractères" type="password"/>
</div>
<button className="w-full bg-blue-600 text-white rounded-lg px-4 py-2.5 text-sm font-normal mt-2 hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20" type="submit">S'inscrire</button>
</form>
<p className="text-center text-xs text-neutral-500 mt-6 font-light">
                    Déjà un compte ? <a className="text-neutral-900 dark:text-white font-medium hover:underline" href="#login">Se connecter</a>
</p>
</div>
</div>

<div className="app-view hidden h-screen bg-neutral-50 dark:bg-neutral-950 flex overflow-hidden" id="view-dashboard">

<aside className="w-64 border-r border-neutral-200/60 dark:border-white/5 bg-white dark:bg-neutral-950 flex flex-col hidden md:flex shrink-0">
<div className="h-14 flex items-center px-6 border-b border-neutral-200/60 dark:border-white/5 shrink-0">
<a className="font-medium tracking-tight flex items-center gap-2 dark:text-white" href="#home">
<div className="w-5 h-5 bg-blue-600 rounded flex items-center justify-center">
<span className="text-white text-[10px] font-medium">R</span>
</div>
<span className="tracking-[0.2em] text-sm">RPL.</span>
</a>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-6">
<div>
<p className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest px-2 mb-2">Menu</p>
<nav className="space-y-1">
<a className="flex items-center gap-2 px-2 py-1.5 bg-neutral-100 dark:bg-white/5 text-neutral-900 dark:text-white rounded-md text-sm font-normal transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:widget-2-linear" strokeWidth="1.5"></iconify-icon> Tableau de bord
                            </a>
<a className="flex items-center gap-2 px-2 py-1.5 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/5 hover:text-neutral-900 dark:hover:text-white rounded-md text-sm font-normal transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:calendar-date-linear" strokeWidth="1.5"></iconify-icon> Échéances
                            </a>
<a className="flex items-center justify-between px-2 py-1.5 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/5 hover:text-neutral-900 dark:hover:text-white rounded-md text-sm font-normal transition-colors" href="#">
<div className="flex items-center gap-2">
<iconify-icon className="text-lg" icon="solar:card-2-linear" strokeWidth="1.5"></iconify-icon> Abonnements
                                </div>
<span className="text-[10px] bg-neutral-200 dark:bg-white/10 px-1.5 py-0.5 rounded text-neutral-600 dark:text-neutral-300">12</span>
</a>
<a className="flex items-center gap-2 px-2 py-1.5 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/5 hover:text-neutral-900 dark:hover:text-white rounded-md text-sm font-normal transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon> Rapports
                            </a>
</nav>
</div>
<div>
<p className="text-[10px] font-medium text-neutral-400 uppercase tracking-widest px-2 mb-2">Préférences</p>
<nav className="space-y-1">
<a className="flex items-center gap-2 px-2 py-1.5 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-white/5 hover:text-neutral-900 dark:hover:text-white rounded-md text-sm font-normal transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon> Paramètres
                            </a>
</nav>
</div>
</div>
<div className="p-4 border-t border-neutral-200/60 dark:border-white/5 shrink-0">
<a className="flex items-center gap-3 w-full p-2 hover:bg-neutral-100 dark:hover:bg-white/5 rounded-md transition-colors" href="#home">
<div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-600/20 text-blue-600 flex items-center justify-center text-xs font-medium border border-blue-200 dark:border-blue-600/30">SM</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-neutral-900 dark:text-white truncate">Sophie M.</p>
<p className="text-xs text-neutral-500 truncate">Déconnexion</p>
</div>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 overflow-hidden">

<header className="h-14 bg-white dark:bg-neutral-950 border-b border-neutral-200/60 dark:border-white/5 flex items-center justify-between px-6 shrink-0">
<h1 className="text-lg font-medium tracking-tight text-neutral-900 dark:text-white">Vue d'ensemble</h1>
<div className="flex items-center gap-4">
<div className="hidden sm:flex items-center bg-neutral-100 dark:bg-neutral-900 border border-transparent dark:border-white/5 rounded-md px-3 py-1.5">
<iconify-icon className="text-neutral-400 text-sm" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="bg-transparent border-none text-sm text-neutral-900 dark:text-white ml-2 focus:outline-none w-48 placeholder-neutral-400" placeholder="Rechercher..." type="text"/>
</div>
<button className="relative p-1.5 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-neutral-950"></span>
</button>
<button className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm font-normal hover:bg-blue-700 transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="hidden sm:inline">Nouvelle échéance</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-6 space-y-8 bg-neutral-50 dark:bg-neutral-950">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-white/5 p-5 rounded-xl shadow-sm">
<div className="flex justify-between items-start mb-4">
<p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">Dépenses ce mois</p>
<div className="p-1.5 bg-neutral-100 dark:bg-white/5 rounded text-neutral-600 dark:text-neutral-300">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<p className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white">2 450,00 €</p>
<div className="flex items-center gap-2 mt-2">
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded">-12%</span>
<span className="text-xs text-neutral-400 font-light">vs mois précédent</span>
</div>
</div>
<div className="bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-white/5 p-5 rounded-xl shadow-sm relative overflow-hidden">
<div className="absolute inset-0 bg-blue-600/5 dark:bg-blue-600/10"></div>
<div className="relative z-10">
<div className="flex justify-between items-start mb-4">
<p className="text-sm text-blue-800 dark:text-blue-300 font-medium">À venir (7 j)</p>
<div className="p-1.5 bg-blue-100 dark:bg-blue-500/20 rounded text-blue-600">
<iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<p className="text-2xl font-medium tracking-tight text-blue-900 dark:text-white">340,50 €</p>
<p className="text-xs text-blue-600 dark:text-blue-400 mt-2 font-light">4 échéances programmées</p>
</div>
</div>
<div className="bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-white/5 p-5 rounded-xl shadow-sm">
<div className="flex justify-between items-start mb-4">
<p className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">Abonnements actifs</p>
<div className="p-1.5 bg-neutral-100 dark:bg-white/5 rounded text-neutral-600 dark:text-neutral-300">
<iconify-icon icon="solar:refresh-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<p className="text-2xl font-medium tracking-tight text-neutral-900 dark:text-white">12</p>
<p className="text-xs text-neutral-400 mt-2 font-light">Représente 185,00 € / mois</p>
</div>
</div>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

<div className="xl:col-span-2 bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-white/5 rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="p-5 border-b border-neutral-100 dark:border-white/5 flex items-center justify-between">
<h2 className="text-base font-medium tracking-tight text-neutral-900 dark:text-white">Échéances récentes</h2>
<button className="text-xs font-medium text-neutral-500 hover:text-blue-600 transition-colors">Tout voir</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-neutral-50/50 dark:bg-white/[0.02] border-b border-neutral-100 dark:border-white/5">
<th className="py-3 px-5 text-xs font-medium text-neutral-500 uppercase tracking-widest">Libellé</th>
<th className="py-3 px-5 text-xs font-medium text-neutral-500 uppercase tracking-widest">Date</th>
<th className="py-3 px-5 text-xs font-medium text-neutral-500 uppercase tracking-widest">Montant</th>
<th className="py-3 px-5 text-xs font-medium text-neutral-500 uppercase tracking-widest">Statut</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-100 dark:divide-white/5">
<tr className="hover:bg-neutral-50 dark:hover:bg-white/[0.02] transition-colors">
<td className="py-3 px-5">
<p className="text-sm font-medium text-neutral-900 dark:text-white">Impôts Fonciers</p>
<p className="text-xs text-neutral-400">Taxes</p>
</td>
<td className="py-3 px-5 text-sm text-neutral-600 dark:text-neutral-300">Aujourd'hui</td>
<td className="py-3 px-5 text-sm font-medium dark:text-white">245,00 €</td>
<td className="py-3 px-5">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-red-50 text-red-600 border border-red-100 dark:bg-red-500/10 dark:border-red-500/20">Action requise</span>
</td>
</tr>
<tr className="hover:bg-neutral-50 dark:hover:bg-white/[0.02] transition-colors">
<td className="py-3 px-5">
<p className="text-sm font-medium text-neutral-900 dark:text-white">Loyer Mensuel</p>
<p className="text-xs text-neutral-400">Logement</p>
</td>
<td className="py-3 px-5 text-sm text-neutral-600 dark:text-neutral-300">12 Oct 2023</td>
<td className="py-3 px-5 text-sm font-medium dark:text-white">850,00 €</td>
<td className="py-3 px-5">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-500/20">Payé</span>
</td>
</tr>
<tr className="hover:bg-neutral-50 dark:hover:bg-white/[0.02] transition-colors">
<td className="py-3 px-5">
<p className="text-sm font-medium text-neutral-900 dark:text-white">Électricité (EDF)</p>
<p className="text-xs text-neutral-400">Énergie</p>
</td>
<td className="py-3 px-5 text-sm text-neutral-600 dark:text-neutral-300">10 Oct 2023</td>
<td className="py-3 px-5 text-sm font-medium dark:text-white">85,50 €</td>
<td className="py-3 px-5">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-500/20">Payé</span>
</td>
</tr>
<tr className="hover:bg-neutral-50 dark:hover:bg-white/[0.02] transition-colors">
<td className="py-3 px-5">
<p className="text-sm font-medium text-neutral-900 dark:text-white">Fibre Optique</p>
<p className="text-xs text-neutral-400">Internet</p>
</td>
<td className="py-3 px-5 text-sm text-neutral-600 dark:text-neutral-300">05 Oct 2023</td>
<td className="py-3 px-5 text-sm font-medium dark:text-white">39,99 €</td>
<td className="py-3 px-5">
<span className="inline-flex items-center px-2 py-1 rounded text-[10px] font-medium bg-emerald-50 text-emerald-600 border border-emerald-100 dark:bg-emerald-500/10 dark:border-emerald-500/20">Payé</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white dark:bg-neutral-900 border border-neutral-200/60 dark:border-white/5 rounded-xl shadow-sm flex flex-col">
<div className="p-5 border-b border-neutral-100 dark:border-white/5">
<h2 className="text-base font-medium tracking-tight text-neutral-900 dark:text-white">Abonnements</h2>
</div>
<div className="p-5 flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-100 dark:bg-white/5 rounded border border-neutral-200/50 dark:border-white/5 flex items-center justify-center text-xs font-medium dark:text-white">N</div>
<div>
<p className="text-sm font-medium text-neutral-900 dark:text-white">Netflix</p>
<p className="text-xs text-neutral-400 font-light">15,99 €/mo</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4 bg-neutral-200 peer-focus:outline-none rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-neutral-600 peer-checked:bg-blue-600"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-100 dark:bg-white/5 rounded border border-neutral-200/50 dark:border-white/5 flex items-center justify-center text-xs font-medium dark:text-white">A</div>
<div>
<p className="text-sm font-medium text-neutral-900 dark:text-white">Adobe CC</p>
<p className="text-xs text-neutral-400 font-light">59,99 €/mo</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4 bg-neutral-200 peer-focus:outline-none rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-neutral-600 peer-checked:bg-blue-600"></div>
</label>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-neutral-100 dark:bg-white/5 rounded border border-neutral-200/50 dark:border-white/5 flex items-center justify-center text-xs font-medium dark:text-white">G</div>
<div>
<p className="text-sm font-medium text-neutral-900 dark:text-white">Gymlib</p>
<p className="text-xs text-neutral-400 font-light">29,99 €/mo</p>
</div>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox" value=""/>
<div className="w-8 h-4 bg-neutral-200 peer-focus:outline-none rounded-full peer dark:bg-neutral-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-neutral-600 peer-checked:bg-blue-600"></div>
</label>
</div>
<button className="w-full mt-2 py-2 border border-dashed border-neutral-300 dark:border-neutral-700 rounded-lg text-xs font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors">
                                    + Ajouter
                                </button>
</div>
</div>
</div>
</div>
</main>
</div>
</div>



    </>
  );
}
