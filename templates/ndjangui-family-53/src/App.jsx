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



tailwind.config = {
theme: {
extend: {
colors: {
primary: '#0D9F61',
'primary-dark': '#0B8A54',
'primary-light': '#E8F5EE',
accent: '#F5A623',
'accent-light': '#FFF8EB',
'bg-hero': '#04251A',
muted: '#94A3B8'
},
fontFamily: {
heading: ['DM Sans', 'sans-serif'],
body: ['Plus Jakarta Sans', 'sans-serif'],
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Reveal on Scroll
        const revealElements = document.querySelectorAll('.reveal');
        
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 100;
            
            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };
        
        window.addEventListener('scroll', revealOnScroll);
        // Trigger once on load
        revealOnScroll();

        // Navbar Interaction
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
            } else {
                navbar.classList.remove('shadow-lg');
            }
        });

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    
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
      

<nav className="fixed w-full z-50 transition-all duration-300 bg-[#04251A]/90 backdrop-blur-md border-b border-white/5" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">

<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white transform group-hover:rotate-90 transition-transform duration-500">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke-opacity="0.2"></path>
<path d="M8 12h8m-4-4v8" strokeLinecap="round"></path>
</svg>
</div>
<span className="font-heading font-bold text-2xl tracking-tighter text-white">Ndjangui</span>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-gray-300 hover:text-white transition-colors text-sm font-medium" href="#fonctionnalites">Fonctionnalités</a>
<a className="text-gray-300 hover:text-white transition-colors text-sm font-medium" href="#comment-ca-marche">Comment ça marche</a>
<a className="text-gray-300 hover:text-white transition-colors text-sm font-medium" href="#tarifs">Tarifs</a>
<button className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:scale-105 shadow-lg shadow-primary/20">
                        Accès anticipé
                    </button>
</div>

<div className="md:hidden flex items-center">
<button className="text-white hover:text-primary transition-colors" id="mobile-menu-btn">
<i className="w-7 h-7" data-lucide="menu"></i>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-[#04251A] border-t border-gray-800 absolute w-full left-0" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-1">
<a className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5" href="#fonctionnalites">Fonctionnalités</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5" href="#comment-ca-marche">Comment ça marche</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/5" href="#tarifs">Tarifs</a>
<a className="block mt-4 text-center bg-primary text-white px-3 py-3 rounded-lg font-semibold" href="#cta">Rejoindre la liste</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-bg-hero overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full pattern-overlay opacity-10"></div>
<div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

<div className="w-full lg:w-1/2 text-center lg:text-left reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
<span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
<span className="text-primary text-xs font-semibold uppercase tracking-wider">🇬🇦 Fait pour l'Afrique Centrale</span>
</div>
<h1 className="font-heading font-semibold text-4xl lg:text-6xl text-white leading-[1.1] tracking-tight mb-6">
                        Votre famille mérite sa propre banque. <br/>
<span className="text-accent italic">Sans banque.</span>
</h1>
<p className="text-lg lg:text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                        Ndjangui est la caisse numérique qui réunit votre famille autour d'un solde commun. Cotisations, dépenses, tontines — tout est transparent, tout est tracé.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
<button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30 flex items-center justify-center gap-2">
<i className="w-5 h-5" data-lucide="rocket"></i> Rejoindre la liste d'attente
                        </button>
<button className="w-full sm:w-auto border border-gray-600 hover:border-white text-white px-8 py-4 rounded-full font-medium transition-all flex items-center justify-center gap-2 group">
<i className="w-5 h-5 group-hover:text-accent transition-colors" data-lucide="play-circle"></i>
                            Voir la démo
                        </button>
</div>
<div className="flex items-center justify-center lg:justify-start gap-3">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-bg-hero bg-gray-200 flex items-center justify-center text-xs text-gray-700 font-bold">JD</div>
<div className="w-8 h-8 rounded-full border-2 border-bg-hero bg-gray-300 flex items-center justify-center text-xs text-gray-700 font-bold">AM</div>
<div className="w-8 h-8 rounded-full border-2 border-bg-hero bg-gray-400 flex items-center justify-center text-xs text-gray-700 font-bold">PS</div>
<div className="w-8 h-8 rounded-full border-2 border-bg-hero bg-primary text-white flex items-center justify-center text-[10px] font-bold">+2k</div>
</div>
<p className="text-sm text-gray-400 font-medium">Déjà <span className="text-white">2 400+</span> familles pré-inscrites</p>
</div>
</div>

<div className="w-full lg:w-1/2 flex justify-center reveal delay-200">
<div className="relative w-[300px] lg:w-[340px] h-[600px] lg:h-[680px] bg-[#111] rounded-[3rem] border-8 border-gray-800 shadow-2xl phone-shadow transform rotate-3 hover:rotate-0 transition-transform duration-500 overflow-hidden">

<div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-800 rounded-b-xl z-20"></div>

<div className="w-full h-full bg-[#FAFBFC] pt-10 pb-6 overflow-hidden flex flex-col relative">

<div className="px-6 mb-6">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm text-primary font-bold">JP</div>
<div>
<p className="text-xs text-gray-500">Bonjour,</p>
<p className="text-sm font-semibold text-gray-800">Jean-Pierre</p>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
<i className="w-4 h-4 text-gray-600" data-lucide="bell"></i>
</div>
</div>

<div className="bg-primary bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white shadow-lg shadow-primary/30 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<i className="w-20 h-20 text-white" data-lucide="wallet"></i>
</div>
<p className="text-primary-light text-xs font-medium mb-1">Solde total disponible</p>
<p className="text-3xl font-heading font-semibold tracking-tight text-accent mb-4">847 000 <span className="text-base font-normal text-white/80">XAF</span></p>
<div className="flex gap-2">
<div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-up"></i> Entrées
                                        </div>
<div className="bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs flex items-center gap-1">
<i className="w-3 h-3" data-lucide="trending-down"></i> Sorties
                                        </div>
</div>
</div>
</div>

<div className="flex-1 bg-white rounded-t-3xl px-6 pt-6 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
<div className="flex justify-between items-center mb-4">
<h3 className="font-heading font-semibold text-gray-800">Vos Caisses</h3>
<span className="text-xs text-primary font-medium cursor-pointer">Voir tout</span>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50 mb-3 hover:border-primary/30 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-primary">
<i className="w-5 h-5" data-lucide="home"></i>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Famille Obame</p>
<p className="text-xs text-gray-500">Membres: 8</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-gray-900">450k</p>
<p className="text-[10px] text-green-600 bg-green-100 px-1.5 py-0.5 rounded inline-block">Actif</p>
</div>
</div>

<div className="flex items-center justify-between p-4 rounded-xl border border-gray-100 bg-gray-50 mb-3 hover:border-primary/30 transition-colors cursor-pointer">
<div className="flex items-center justify-between gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-5 h-5" data-lucide="refresh-cw"></i>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Ndjangui Bureau</p>
<p className="text-xs text-gray-500">Tour de Paul</p>
</div>
</div>
<div className="text-right">
<p className="text-sm font-bold text-gray-900">230k</p>
<p className="text-[10px] text-orange-600 bg-orange-100 px-1.5 py-0.5 rounded inline-block">J-2</p>
</div>
</div>

<h3 className="font-heading font-semibold text-gray-800 mt-6 mb-3">Activités</h3>
<div className="space-y-3">
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<i className="w-4 h-4" data-lucide="banknote"></i>
</div>
<div>
<p className="text-xs font-semibold text-gray-900">Cotisation Marie</p>
<p className="text-[10px] text-gray-400">Il y a 2h</p>
</div>
</div>
<span className="text-xs font-semibold text-green-600">+10 000</span>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-500">
<i className="w-4 h-4" data-lucide="shopping-cart"></i>
</div>
<div>
<p className="text-xs font-semibold text-gray-900">Achats Rentrée</p>
<p className="text-[10px] text-gray-400">Hier</p>
</div>
</div>
<span className="text-xs font-semibold text-red-600">-25 000</span>
</div>
</div>
</div>

<div className="absolute bottom-0 w-full bg-white border-t border-gray-100 py-3 px-6 flex justify-between items-center">
<i className="text-primary w-6 h-6" data-lucide="home"></i>
<i className="text-gray-400 w-6 h-6" data-lucide="pie-chart"></i>
<div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center -mt-8 shadow-lg shadow-primary/40 border-4 border-[#FAFBFC]">
<i className="text-white w-6 h-6" data-lucide="plus"></i>
</div>
<i className="text-gray-400 w-6 h-6" data-lucide="users"></i>
<i className="text-gray-400 w-6 h-6" data-lucide="settings"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16 reveal">
<h2 className="font-heading font-semibold text-3xl md:text-5xl text-gray-900 tracking-tight mb-4">
                    Gérer l'argent en famille, <br/>c'est souvent le chaos.
                </h2>
<p className="text-lg text-gray-500">Carnets perdus, méfiance, calculs interminables... Ça vous parle ?</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-red-100 reveal delay-100">
<div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-6">
<i className="w-7 h-7" data-lucide="help-circle"></i>
</div>
<h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">"Qui a payé quoi ?"</h3>
<p className="text-gray-600 leading-relaxed">
                        Les cotisations se perdent dans les discussions WhatsApp. Le carnet papier n'est jamais à jour. On ne sait plus qui est à jour.
                    </p>
</div>

<div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-orange-100 reveal delay-200">
<div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mb-6">
<i className="w-7 h-7" data-lucide="clock"></i>
</div>
<h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">"Les retards permanents"</h3>
<p className="text-gray-600 leading-relaxed">
                        Certains oublient, d'autres repoussent. Relancer la famille est gênant et crée des tensions inutiles lors des réunions.
                    </p>
</div>

<div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 border border-transparent hover:border-red-100 reveal delay-300">
<div className="w-14 h-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-6">
<i className="w-7 h-7" data-lucide="eye-off"></i>
</div>
<h3 className="font-heading font-semibold text-xl text-gray-900 mb-3">"Zéro transparence"</h3>
<p className="text-gray-600 leading-relaxed">
                        L'argent est gardé par une seule personne. Les dépenses ne sont pas justifiées. Le doute s'installe et la confiance s'effrite.
                    </p>
</div>
</div>
<div className="mt-20 text-center reveal">
<p className="text-xl md:text-2xl font-serif italic text-primary font-medium">
                    "Et si votre caisse familiale fonctionnait comme un vrai compte bancaire — <br className="hidden md:block"/>mais sans la banque ?"
                </p>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFBFC] overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-4">La Solution</div>
<h2 className="font-heading font-semibold text-3xl md:text-5xl text-gray-900 tracking-tight mb-4">
                    Ndjangui, la caisse qui met <br/>tout le monde d'accord.
                </h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    Une application simple, transparente et sécurisée pour gérer l'argent de votre famille ou votre groupe, où que vous soyez.
                </p>
</div>
<div className="relative max-w-4xl mx-auto reveal delay-200">

<div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden relative z-10">
<div className="bg-gray-50 border-b border-gray-100 p-4 flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
<div className="ml-4 text-xs text-gray-400 font-mono">app.ndjangui.com</div>
</div>
<div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="hidden md:block col-span-1 space-y-4">
<div className="p-4 bg-primary/5 rounded-xl border border-primary/10">
<p className="text-xs text-gray-500 uppercase font-semibold mb-2">Total en Caisse</p>
<p className="text-2xl font-heading font-bold text-primary">847 000 XAF</p>
</div>
<div className="space-y-2">
<div className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer text-sm font-medium flex items-center gap-2">
<i className="w-4 h-4" data-lucide="home"></i> Famille Obame
                                </div>
<div className="p-3 rounded-lg bg-white hover:bg-gray-50 cursor-pointer text-sm font-medium text-gray-500 flex items-center gap-2">
<i className="w-4 h-4" data-lucide="refresh-cw"></i> Ndjangui Bureau
                                </div>
</div>
</div>

<div className="col-span-1 md:col-span-2">
<div className="flex justify-between items-center mb-6">
<h3 className="font-heading font-bold text-lg">Mouvements récents</h3>
<button className="text-xs bg-primary text-white px-3 py-1.5 rounded-md hover:bg-primary-dark transition-colors">Nouvelle opération</button>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<i className="w-5 h-5" data-lucide="arrow-up-right"></i>
</div>
<div>
<p className="font-semibold text-sm">Cotisation Mensuelle</p>
<p className="text-xs text-gray-400">Par Marie-Claire • 14:30</p>
</div>
</div>
<div className="text-right">
<p className="font-bold text-sm text-green-600">+ 25 000 XAF</p>
<div className="flex items-center gap-1 justify-end text-[10px] text-gray-400">
<i className="w-3 h-3 text-primary" data-lucide="check-circle"></i> Validé
                                        </div>
</div>
</div>

<div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
<i className="w-5 h-5" data-lucide="arrow-down-right"></i>
</div>
<div>
<p className="font-semibold text-sm">Achat Médicaments</p>
<p className="text-xs text-gray-400">Pharmacie Centrale • Hier</p>
</div>
</div>
<div className="text-right">
<p className="font-bold text-sm text-red-600">- 12 500 XAF</p>
<div className="flex items-center gap-1 justify-end text-[10px] text-gray-400">
<i className="w-3 h-3 text-accent" data-lucide="users"></i> 3 votes
                                        </div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute -right-4 md:-right-12 top-20 bg-white p-3 rounded-lg shadow-lg text-xs font-semibold text-gray-700 flex items-center gap-2 animate-bounce">
<i className="w-4 h-4 text-primary" data-lucide="eye"></i> Solde visible par tous
                </div>
<div className="absolute -left-4 md:-left-12 bottom-20 bg-white p-3 rounded-lg shadow-lg text-xs font-semibold text-gray-700 flex items-center gap-2 animate-bounce" style={{animationDelay: '1s'}}>
<i className="w-4 h-4 text-accent" data-lucide="zap"></i> Historique temps réel
                </div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="fonctionnalites">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
                    Tout ce qu'il faut. <span className="text-gray-400">Rien de superflu.</span>
</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-[#FAFBFC] hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-100 reveal">
<div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center text-green-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="layers"></i>
</div>
<h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">Multi-caisses</h3>
<p className="text-gray-500 leading-relaxed text-sm">Créez autant de caisses que nécessaire : famille, ndjangui, deuil, projet. Chacune avec ses propres règles.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#FAFBFC] hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-100 reveal delay-100">
<div className="w-14 h-14 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="calendar-clock"></i>
</div>
<h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">Cotisations auto</h3>
<p className="text-gray-500 leading-relaxed text-sm">Calendrier de cotisations avec rappels automatiques. Pénalités configurables pour les retards.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#FAFBFC] hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-100 reveal delay-200">
<div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="thumbs-up"></i>
</div>
<h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">Dépenses votées</h3>
<p className="text-gray-500 leading-relaxed text-sm">Chaque dépense importante peut être soumise au vote du groupe. Justificatif photo obligatoire.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#FAFBFC] hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-100 reveal">
<div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="refresh-cw"></i>
</div>
<h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">Ndjangui intégré</h3>
<p className="text-gray-500 leading-relaxed text-sm">Module tontine complet : tours rotatifs, tirages au sort, suivi des contributions.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#FAFBFC] hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-100 reveal delay-100">
<div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="bar-chart-2"></i>
</div>
<h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">Rapports visuels</h3>
<p className="text-gray-500 leading-relaxed text-sm">Graphiques d'évolution, répartition des dépenses, bilan mensuel. Exportable en PDF.</p>
</div>

<div className="group p-8 rounded-2xl bg-[#FAFBFC] hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-gray-100 reveal delay-200">
<div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center text-red-700 mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="users"></i>
</div>
<h3 className="font-heading font-semibold text-xl mb-3 text-gray-900">Qui-doit-quoi</h3>
<p className="text-gray-500 leading-relaxed text-sm">Tableau de bord des contributions : qui est à jour, qui est en retard, combien reste à collecter.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFBFC] border-y border-gray-100" id="comment-ca-marche">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
                    Opérationnel en 3 minutes.
                </h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-12 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center reveal delay-100">
<div className="w-24 h-24 bg-white rounded-full border-4 border-[#FAFBFC] shadow-lg flex items-center justify-center mb-6">
<i className="w-10 h-10 text-gray-700" data-lucide="hammer"></i>
</div>
<h3 className="font-heading font-semibold text-xl mb-2 text-gray-900">1. Créez votre caisse</h3>
<p className="text-gray-500 text-sm max-w-xs">Choisissez le type (famille, ndjangui, école...), définissez la cotisation et les règles.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center reveal delay-200">
<div className="w-24 h-24 bg-white rounded-full border-4 border-[#FAFBFC] shadow-lg flex items-center justify-center mb-6">
<i className="w-10 h-10 text-gray-700" data-lucide="user-plus"></i>
</div>
<h3 className="font-heading font-semibold text-xl mb-2 text-gray-900">2. Invitez la famille</h3>
<p className="text-gray-500 text-sm max-w-xs">Partagez un lien WhatsApp. Chaque membre crée son compte avec son numéro.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center reveal delay-300">
<div className="w-24 h-24 bg-white rounded-full border-4 border-[#FAFBFC] shadow-lg flex items-center justify-center mb-6">
<i className="w-10 h-10 text-gray-700" data-lucide="rocket"></i>
</div>
<h3 className="font-heading font-semibold text-xl mb-2 text-gray-900">3. C'est lancé</h3>
<p className="text-gray-500 text-sm max-w-xs">Les cotisations se suivent, les dépenses se votent. La confiance revient.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-hero text-white relative overflow-hidden">
<div className="absolute inset-0 pattern-overlay opacity-5"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="mb-16 reveal">
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-white tracking-tight mb-4">
                    Une app. Toutes vos caisses.
                </h2>
<p className="text-gray-400 text-lg max-w-2xl">Chaque famille, chaque groupe, chaque projet a des besoins différents. Ndjangui s'adapte.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors reveal">
<div className="mb-4 text-primary">
<i className="w-8 h-8" data-lucide="home"></i>
</div>
<h3 className="font-heading font-semibold text-lg mb-2">Caisse Famille</h3>
<p className="text-gray-400 text-sm">Les dépenses du quotidien : santé, école, maison. Un seul pot, tout est clair.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors reveal delay-100">
<div className="mb-4 text-accent">
<i className="w-8 h-8" data-lucide="repeat"></i>
</div>
<h3 className="font-heading font-semibold text-lg mb-2">Ndjangui</h3>
<p className="text-gray-400 text-sm">L'épargne rotative digitalisée. Tours automatiques, cotisations tracées, zéro dispute.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors reveal delay-200">
<div className="mb-4 text-blue-400">
<i className="w-8 h-8" data-lucide="graduation-cap"></i>
</div>
<h3 className="font-heading font-semibold text-lg mb-2">Caisse Scolaire</h3>
<p className="text-gray-400 text-sm">Préparez la rentrée ensemble. Objectif, deadline, contributions trackées.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors reveal">
<div className="mb-4 text-red-400">
<i className="w-8 h-8" data-lucide="heart-handshake"></i>
</div>
<h3 className="font-heading font-semibold text-lg mb-2">Caisse Solidarité</h3>
<p className="text-gray-400 text-sm">Quand un coup dur arrive, la famille se mobilise. Collecte express, transparence.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors reveal delay-100">
<div className="mb-4 text-purple-400">
<i className="w-8 h-8" data-lucide="party-popper"></i>
</div>
<h3 className="font-heading font-semibold text-lg mb-2">Caisse Événement</h3>
<p className="text-gray-400 text-sm">Mariage, baptême, fête. Cagnotte avec objectif et compte à rebours.</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors reveal delay-200">
<div className="mb-4 text-yellow-400">
<i className="w-8 h-8" data-lucide="briefcase"></i>
</div>
<h3 className="font-heading font-semibold text-lg mb-2">Caisse Projet</h3>
<p className="text-gray-400 text-sm">Investissement collectif, achat groupé, business familial. Gérez comme des pros.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-gray-900 tracking-tight mb-6">
                        Votre argent virtuel, <br/>notre obsession sécurité.
                    </h2>
<p className="text-lg text-gray-500 mb-8">
                        Ndjangui ne touche pas à votre argent. On trace, on organise, on sécurise l'information.
                    </p>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<i className="w-5 h-5" data-lucide="lock"></i>
</div>
<div>
<h4 className="font-semibold text-gray-900">Authentification PIN</h4>
<p className="text-sm text-gray-500">Chaque membre a son code sécurisé. Accès strictement personnel.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<i className="w-5 h-5" data-lucide="eye"></i>
</div>
<div>
<h4 className="font-semibold text-gray-900">Transparence totale</h4>
<p className="text-sm text-gray-500">Chaque transaction est ineffaçable. Tout le monde voit tout.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<i className="w-5 h-5" data-lucide="bell"></i>
</div>
<div>
<h4 className="font-semibold text-gray-900">Notifications temps réel</h4>
<p className="text-sm text-gray-500">Chaque mouvement déclenche une alerte. Rien ne passe inaperçu.</p>
</div>
</div>
</div>
</div>
<div className="bg-[#F0FDF4] border border-green-100 rounded-2xl p-8 reveal delay-200">
<div className="flex gap-4 mb-4">
<i className="text-primary w-6 h-6" data-lucide="info"></i>
<h4 className="font-bold text-primary text-lg">Important</h4>
</div>
<p className="text-gray-700 leading-relaxed">
<strong>Ndjangui est un outil de SUIVI.</strong><br/>
                        Nous ne stockons pas d'argent et ne réalisons aucune transaction financière réelle pour le moment. L'argent physique ou mobile money circule entre vous comme d'habitude; l'application est votre carnet de comptes numérique infalsifiable.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFBFC]" id="tarifs">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="font-heading font-semibold text-3xl md:text-4xl text-gray-900 tracking-tight mb-4">
                    Gratuit pour démarrer. Pour toujours.
                </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

<div className="bg-white rounded-3xl p-8 border-2 border-primary/20 hover:border-primary transition-colors relative reveal">
<span className="absolute top-0 right-0 m-6 px-3 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wide rounded-full">Disponible</span>
<h3 className="font-heading font-bold text-2xl text-gray-900 mb-2">Gratuit</h3>
<p className="text-gray-500 mb-6">Pour les familles qui commencent.</p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Jusqu'à 3 caisses</div>
<div className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-primary" data-lucide="check"></i> 15 membres par caisse</div>
<div className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Cotisations &amp; suivi complet</div>
<div className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Notifications basiques</div>
<div className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Mode hors-ligne</div>
</div>
<button className="w-full py-3 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors">Commencer gratuitement</button>
</div>

<div className="bg-bg-hero rounded-3xl p-8 border border-gray-800 text-white relative transform md:-translate-y-4 shadow-xl reveal delay-100">
<span className="absolute top-0 right-0 m-6 px-3 py-1 bg-accent text-bg-hero text-xs font-bold uppercase tracking-wide rounded-full">Bientôt</span>
<h3 className="font-heading font-bold text-2xl text-white mb-2">Premium</h3>
<p className="text-gray-400 mb-6">Pour les groupes organisés.</p>
<div className="mb-6">
<span className="text-3xl font-bold text-accent">2 500 XAF</span><span className="text-gray-400">/mois</span>
<div className="text-sm text-gray-500 line-through">5 000 XAF</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-accent" data-lucide="check"></i> Caisses illimitées</div>
<div className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-accent" data-lucide="check"></i> Membres illimités</div>
<div className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-accent" data-lucide="check"></i> Module Ndjangui avancé</div>
<div className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-accent" data-lucide="check"></i> Rapports PDF détaillés</div>
<div className="flex items-center gap-3 text-sm"><i className="w-4 h-4 text-accent" data-lucide="check"></i> Intégration Mobile Money (Futur)</div>
</div>
<button className="w-full py-3 rounded-xl bg-accent text-bg-hero font-bold hover:bg-white transition-colors">Réserver mon tarif</button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-center font-heading font-semibold text-3xl md:text-4xl text-gray-900 tracking-tight mb-16 reveal">Ils nous font déjà confiance.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-gray-50 p-8 rounded-2xl reveal">
<div className="text-primary text-4xl font-serif mb-4">"</div>
<p className="text-gray-700 italic mb-6">Depuis qu'on utilise Ndjangui, plus personne ne demande 'il reste combien dans la caisse ?'. Tout est là, en un clic.</p>
<div>
<p className="font-bold text-gray-900">Marie-Claire Obame</p>
<p className="text-xs text-gray-500">Libreville • Caisse Famille</p>
</div>
</div>

<div className="bg-gray-50 p-8 rounded-2xl reveal delay-100">
<div className="text-primary text-4xl font-serif mb-4">"</div>
<p className="text-gray-700 italic mb-6">Notre tontine de 12 personnes marchait au carnet. Avec Ndjangui, les tours sont clairs, les cotisations trackées. Zéro conflit.</p>
<div>
<p className="font-bold text-gray-900">Jean-Pierre Ndong</p>
<p className="text-xs text-gray-500">Port-Gentil • Ndjangui Collègues</p>
</div>
</div>

<div className="bg-gray-50 p-8 rounded-2xl reveal delay-200">
<div className="text-primary text-4xl font-serif mb-4">"</div>
<p className="text-gray-700 italic mb-6">Je vis à Paris mais je suis la caisse familiale en temps réel. Je cotise, je vote les dépenses. Comme si j'étais là-bas.</p>
<div>
<p className="font-bold text-gray-900">Estelle Nzé</p>
<p className="text-xs text-gray-500">Paris (Diaspora)</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFBFC]">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="text-center font-heading font-semibold text-3xl md:text-4xl text-gray-900 tracking-tight mb-12 reveal">Questions fréquentes</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl p-4 cursor-pointer border border-transparent hover:border-gray-200 reveal">
<summary className="flex justify-between items-center font-semibold text-gray-900 list-none">
                        Ndjangui est-il une banque ?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-600 mt-4 text-sm leading-relaxed">
                        Non. Ndjangui est un outil de suivi et d'organisation. Nous ne stockons pas d'argent et ne réalisons aucune transaction financière. C'est votre carnet de comptes familial, en version numérique.
                    </p>
</details>
<details className="group bg-white rounded-xl p-4 cursor-pointer border border-transparent hover:border-gray-200 reveal">
<summary className="flex justify-between items-center font-semibold text-gray-900 list-none">
                        Est-ce que c'est vraiment gratuit ?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-600 mt-4 text-sm leading-relaxed">
                        Oui. Le plan gratuit est complet et n'a pas de date d'expiration. Le plan Premium ajoutera des fonctionnalités avancées comme l'intégration Mobile Money.
                    </p>
</details>
<details className="group bg-white rounded-xl p-4 cursor-pointer border border-transparent hover:border-gray-200 reveal">
<summary className="flex justify-between items-center font-semibold text-gray-900 list-none">
                        Comment je rejoins une caisse ?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-600 mt-4 text-sm leading-relaxed">
                        Le créateur de la caisse vous envoie un lien d'invitation par WhatsApp ou SMS. Vous créez votre compte en 30 secondes avec votre numéro et un PIN.
                    </p>
</details>
<details className="group bg-white rounded-xl p-4 cursor-pointer border border-transparent hover:border-gray-200 reveal">
<summary className="flex justify-between items-center font-semibold text-gray-900 list-none">
                        Ça marche sans internet ?
                        <span className="transition group-open:rotate-180">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</span>
</summary>
<p className="text-gray-600 mt-4 text-sm leading-relaxed">
                        Oui. Ndjangui est une PWA installable. Vous pouvez consulter vos soldes et historiques hors-ligne. La synchronisation se fait automatiquement au retour de la connexion.
                    </p>
</details>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-bg-hero to-black relative overflow-hidden" id="cta">
<div className="absolute inset-0 pattern-overlay opacity-10"></div>
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="font-heading font-semibold text-3xl md:text-5xl text-white tracking-tight mb-4 reveal">
                Votre famille gère déjà de l'argent ensemble.
            </h2>
<p className="text-xl md:text-2xl text-accent font-serif italic mb-12 reveal delay-100">
                Il est temps de le faire correctement.
            </p>
<form className="max-w-md mx-auto mb-8 reveal delay-200" onsubmit="event.preventDefault();">
<div className="flex flex-col sm:flex-row gap-3">
<div className="relative flex-grow">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
<span className="text-gray-500 text-sm">🇬🇦 +241</span>
</div>
<input className="w-full pl-16 pr-4 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary border-none" placeholder="62 00 00 00" required="" type="tel"/>
</div>
<button className="bg-accent hover:bg-white text-bg-hero hover:text-primary font-bold py-4 px-8 rounded-xl transition-colors" type="submit">
                        Rejoindre
                    </button>
</div>
<p className="text-gray-500 text-xs mt-3 flex items-center justify-center gap-1">
<i className="w-3 h-3" data-lucide="lock"></i> Pas de spam. Juste un message quand c'est prêt.
                </p>
</form>
<div className="reveal delay-300">
<p className="text-white text-sm font-medium">👥 <span className="font-bold text-accent">2 437</span> familles déjà pré-inscrites</p>
</div>
</div>
</section>

<footer className="bg-black py-12 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center mb-8">

<div className="flex items-center gap-3 mb-4 md:mb-0">
<div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center text-white">
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewbox="0 0 24 24">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke-opacity="0.5"></path>
<path d="M8 12h8m-4-4v8" strokeLinecap="round"></path>
</svg>
</div>
<span className="font-heading font-bold text-xl text-white tracking-tight">Ndjangui</span>
</div>
<div className="flex gap-6 text-sm text-gray-400">
<a className="hover:text-white transition-colors" href="#">À propos</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
<a className="hover:text-white transition-colors" href="#">Confidentialité</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 border-t border-gray-900 pt-8">
<p>© 2025 Ndjangui — Fait avec ❤️ au Gabon 🇬🇦</p>
<p className="mt-2 md:mt-0">Un projet JOBS-Conseil</p>
</div>
</div>
</footer>



    </>
  );
}
