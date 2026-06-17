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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: '#FFFFFF',
surface: '#FAFAFA',
surfaceHover: '#F4F4F5',
ink: '#171717',
sub: '#737373',
border: '#E5E5E5',
accent: '#2563EB'
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.1em'
},
fontSize: {
xxs: '0.65rem'
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // State Management
        const views = {
            home: document.getElementById('view-home'),
            ozone: document.getElementById('view-ozone'),
            laser: document.getElementById('view-laser')
        };
        const footer = document.getElementById('footer-global');
        const navBtns = {
            ozone: document.getElementById('nav-ozone'),
            laser: document.getElementById('nav-laser')
        };

        function navigate(target) {
            // Scroll to top first
            window.scrollTo({ top: 0, behavior: 'instant' });

            // Hide all views
            Object.values(views).forEach(el => {
                el.classList.remove('active');
                setTimeout(() => {
                    if(!el.classList.contains('active')) el.style.display = 'none';
                }, 0); // Immediate hide for logic, CSS handles fade
            });

            // Logic for specific views
            if (target === 'home') {
                views.home.style.display = 'block';
                // Small delay to allow display block to render before adding active class for animation
                requestAnimationFrame(() => views.home.classList.add('active'));
                
                footer.classList.add('hidden');
                updateNavState(null);
            } else {
                views[target].style.display = 'block';
                requestAnimationFrame(() => views[target].classList.add('active'));
                
                footer.classList.remove('hidden');
                updateNavState(target);
            }
        }

        function updateNavState(activeKey) {
            // Reset nav styles
            navBtns.ozone.classList.remove('bg-white', 'text-ink', 'shadow-sm');
            navBtns.laser.classList.remove('bg-white', 'text-ink', 'shadow-sm');
            
            navBtns.ozone.classList.add('text-sub');
            navBtns.laser.classList.add('text-sub');

            // Apply active style
            if (activeKey && navBtns[activeKey]) {
                navBtns[activeKey].classList.remove('text-sub');
                navBtns[activeKey].classList.add('bg-white', 'text-ink', 'shadow-sm');
            }
        }

        // Initialize
        navigate('home');
    
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
      

<nav className="fixed top-0 w-full z-50 px-6 py-5 border-b border-border/50 glass transition-all duration-300">
<div className="max-w-[1400px] mx-auto flex justify-between items-center">

<button className="group flex items-center gap-3 outline-none" onclick="navigate('home')">
<div className="w-8 h-8 bg-ink text-white flex items-center justify-center rounded-sm group-hover:bg-sub transition-colors">
<span className="font-medium text-xs">OL</span>
</div>
<span className="text-sm font-semibold tracking-tight group-hover:text-sub transition-colors">PLATFORM.</span>
</button>

<div className="hidden md:flex items-center gap-1 bg-surface p-1 rounded-lg border border-border/50">
<button className="px-4 py-1.5 text-xs font-medium text-sub hover:text-ink hover:bg-white rounded-md transition-all" id="nav-ozone" onclick="navigate('ozone')">OZONE</button>
<button className="px-4 py-1.5 text-xs font-medium text-sub hover:text-ink hover:bg-white rounded-md transition-all" id="nav-laser" onclick="navigate('laser')">LASER</button>
</div>

<div className="flex items-center gap-6">
<a className="text-xs font-medium text-sub hover:text-ink transition-colors hidden sm:block" href="#">SUPPORT</a>
<button className="bg-ink text-white text-xs font-medium px-4 py-2 rounded-sm hover:bg-ink/80 transition-colors tracking-wide">
                    ESPACE CLIENT
                </button>
</div>
</div>
</nav>

<main className="pt-20 min-h-screen relative">

<section className="content-section active h-[calc(100vh-80px)] w-full relative" id="view-home">
<div className="flex flex-col md:flex-row h-full w-full">

<div className="relative w-full md:w-1/2 h-1/2 md:h-full group cursor-pointer border-b md:border-b-0 md:border-r border-border overflow-hidden" onclick="navigate('ozone')">
<div className="absolute inset-0 bg-surface/30 group-hover:bg-surface/80 transition-all duration-700 ease-out"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 transition-transform duration-700 group-hover:scale-[0.98]">
<div className="w-12 h-12 mb-6 text-sub group-hover:text-ink transition-colors">
<iconify-icon icon="solar:atom-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-widest text-sub mb-3">Industriel</span>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-ink mb-6">Ozone</h2>
<p className="max-w-xs text-center text-sm text-sub leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                            Désinfection de masse et traitement oxydatif pour équipements critiques.
                        </p>
<div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                            Explorer le service
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>

<div className="relative w-full md:w-1/2 h-1/2 md:h-full group cursor-pointer overflow-hidden bg-white" onclick="navigate('laser')">
<div className="absolute inset-0 bg-white group-hover:bg-surface transition-all duration-700 ease-out"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10 transition-transform duration-700 group-hover:scale-[0.98]">
<div className="w-12 h-12 mb-6 text-sub group-hover:text-ink transition-colors">
<iconify-icon icon="solar:medical-kit-linear" strokeWidth="1" width="48"></iconify-icon>
</div>
<span className="text-xs font-medium uppercase tracking-widest text-sub mb-3">Clinique</span>
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter text-ink mb-6">Laser</h2>
<p className="max-w-xs text-center text-sm text-sub leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                            Photobiomodulation et thérapie régénérative haute fréquence.
                        </p>
<div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                            Voir les protocoles
                            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="content-section max-w-[1400px] mx-auto px-6 md:px-10 pb-24" id="view-ozone">

<header className="py-24 md:py-32 border-b border-border">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-3xl">
<div className="flex items-center gap-3 mb-6">
<span className="w-2 h-2 bg-ink rounded-full"></span>
<span className="text-xs font-medium uppercase tracking-widest text-sub">Département Industriel</span>
</div>
<h1 className="text-7xl md:text-8xl font-medium tracking-tighter text-ink mb-8">
                            Stérilité<br/><span className="text-sub/40">Absolue.</span>
</h1>
<p className="text-xl font-light text-sub leading-relaxed max-w-2xl">
                            Notre infrastructure permet le traitement de volumes industriels par oxydation avancée. 
                            Élimination certifiée à 99.99% des agents pathogènes sans résidu chimique.
                        </p>
</div>
<div className="flex flex-col gap-4 min-w-[200px]">
<button className="w-full py-4 bg-ink text-white text-xs font-medium uppercase tracking-widest hover:bg-ink/90 transition-colors text-center rounded-sm">
                            Réserver un Batch
                        </button>
<button className="w-full py-4 border border-border text-ink text-xs font-medium uppercase tracking-widest hover:border-ink transition-colors text-center rounded-sm bg-transparent">
                            Documentation
                        </button>
</div>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-4 border-b border-border">
<div className="p-8 md:p-12 border-b md:border-b-0 border-border md:border-r hover:bg-surface transition-colors group">
<iconify-icon className="text-sub mb-6 group-hover:text-ink transition-colors" icon="solar:box-linear" width="24"></iconify-icon>
<h3 className="text-3xl font-light tracking-tighter mb-2">1200L</h3>
<p className="text-xs text-sub uppercase tracking-wide">Volume Chambre</p>
</div>
<div className="p-8 md:p-12 border-b md:border-b-0 border-border md:border-r hover:bg-surface transition-colors group">
<iconify-icon className="text-sub mb-6 group-hover:text-ink transition-colors" icon="solar:clock-circle-linear" width="24"></iconify-icon>
<h3 className="text-3xl font-light tracking-tighter mb-2">45min</h3>
<p className="text-xs text-sub uppercase tracking-wide">Cycle Complet</p>
</div>
<div className="p-8 md:p-12 border-b md:border-b-0 border-border md:border-r hover:bg-surface transition-colors group">
<iconify-icon className="text-sub mb-6 group-hover:text-ink transition-colors" icon="solar:shield-check-linear" width="24"></iconify-icon>
<h3 className="text-3xl font-light tracking-tighter mb-2">Log-4</h3>
<p className="text-xs text-sub uppercase tracking-wide">Réduction Bactérienne</p>
</div>
<div className="p-8 md:p-12 hover:bg-surface transition-colors group">
<iconify-icon className="text-sub mb-6 group-hover:text-ink transition-colors" icon="solar:leaf-linear" width="24"></iconify-icon>
<h3 className="text-3xl font-light tracking-tighter mb-2">0%</h3>
<p className="text-xs text-sub uppercase tracking-wide">Résidus Chimiques</p>
</div>
</div>

<section className="py-24">
<div className="flex flex-col md:flex-row gap-16">
<div className="md:w-1/3">
<h3 className="text-2xl font-medium tracking-tight mb-4">Le Processus</h3>
<p className="text-sm text-sub leading-loose">
                            Le traitement s'effectue en trois phases distinctes au sein d'une chambre hermétique à pression négative. La sécurité et la traçabilité sont monitorées en temps réel.
                        </p>
</div>
<div className="md:w-2/3 space-y-12">

<div className="flex gap-6 group">
<div className="text-xs font-medium text-sub pt-1 w-8">01</div>
<div className="flex-1 pb-12 border-b border-border group-hover:border-ink transition-colors">
<h4 className="text-xl font-medium tracking-tight mb-3">Pré-conditionnement</h4>
<p className="text-sm text-sub leading-relaxed">Mise en dépression de la chambre et humidification contrôlée pour optimiser la réactivité de l'ozone sur les membranes cellulaires des pathogènes.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="text-xs font-medium text-sub pt-1 w-8">02</div>
<div className="flex-1 pb-12 border-b border-border group-hover:border-ink transition-colors">
<h4 className="text-xl font-medium tracking-tight mb-3">Injection &amp; Saturation</h4>
<p className="text-sm text-sub leading-relaxed">Génération in-situ d'ozone à haute concentration (50ppm+). Maintien du plateau de concentration pour garantir la pénétration dans les fibres textiles.</p>
</div>
</div>

<div className="flex gap-6 group">
<div className="text-xs font-medium text-sub pt-1 w-8">03</div>
<div className="flex-1 pb-12 border-b border-border group-hover:border-ink transition-colors">
<h4 className="text-xl font-medium tracking-tight mb-3">Destruction Catalytique</h4>
<p className="text-sm text-sub leading-relaxed">Reversion forcée de l'ozone en oxygène pur via catalyseur. Le matériel est rendu immédiatement utilisable, sans temps d'aération.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-surface rounded-sm p-8 md:p-16 border border-border">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div>
<h3 className="text-2xl font-medium tracking-tight mb-2">Solutions Entreprises</h3>
<p className="text-sm text-sub mb-8">Choisissez la flexibilité ou la régularité.</p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-ink">
<iconify-icon className="text-sub" icon="solar:check-circle-linear"></iconify-icon>
                                Traçabilité QR Code unitaire
                            </li>
<li className="flex items-center gap-3 text-sm text-ink">
<iconify-icon className="text-sub" icon="solar:check-circle-linear"></iconify-icon>
                                Logistique aller-retour incluse
                            </li>
<li className="flex items-center gap-3 text-sm text-ink">
<iconify-icon className="text-sub" icon="solar:check-circle-linear"></iconify-icon>
                                Certificat de conformité
                            </li>
</ul>
</div>
<div className="flex flex-col gap-4 justify-center">
<div className="bg-white p-6 border border-border flex justify-between items-center cursor-pointer hover:border-ink transition-colors shadow-sm">
<div>
<h4 className="font-medium tracking-tight">Cycle Standard</h4>
<p className="text-xs text-sub mt-1">Jusqu'à 50L • 48h</p>
</div>
<span className="text-lg font-medium">45€</span>
</div>
<div className="bg-ink p-6 border border-ink flex justify-between items-center cursor-pointer group shadow-lg">
<div>
<h4 className="font-medium tracking-tight text-white">Contrat Volume</h4>
<p className="text-xs text-white/60 mt-1">Sur mesure • Hebdomadaire</p>
</div>
<iconify-icon className="text-white" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</section>
</section>

<section className="content-section max-w-[1400px] mx-auto px-6 md:px-10 pb-24" id="view-laser">

<header className="py-24 md:py-32 border-b border-border">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-3xl">
<div className="flex items-center gap-3 mb-6">
<span className="w-2 h-2 bg-blue-600 rounded-full"></span>
<span className="text-xs font-medium uppercase tracking-widest text-sub">Département Clinique</span>
</div>
<h1 className="text-7xl md:text-8xl font-medium tracking-tighter text-ink mb-8">
                            Récupération<br/><span className="text-sub/40">Accélérée.</span>
</h1>
<p className="text-xl font-light text-sub leading-relaxed max-w-2xl">
                            Protocoles de photobiomodulation par laser Class IV. 
                            Ciblez l'inflammation, réduisez la douleur et stimulez la régénération cellulaire en profondeur.
                        </p>
</div>
<div className="flex flex-col gap-4 min-w-[200px]">
<button className="w-full py-4 bg-ink text-white text-xs font-medium uppercase tracking-widest hover:bg-ink/90 transition-colors text-center rounded-sm">
                            Prendre Rendez-vous
                        </button>
<button className="w-full py-4 border border-border text-ink text-xs font-medium uppercase tracking-widest hover:border-ink transition-colors text-center rounded-sm bg-transparent">
                            Études Cliniques
                        </button>
</div>
</div>
</header>

<section className="py-24">
<h3 className="text-xs font-medium uppercase tracking-widest text-sub mb-12">Protocoles Disponibles</h3>
<div className="space-y-2">

<div className="group relative py-8 border-b border-border hover:bg-surfaceHover transition-colors -mx-4 px-4 cursor-pointer">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-start gap-6">
<span className="font-mono text-sm text-sub/50 pt-1">01</span>
<div>
<h4 className="text-2xl font-medium tracking-tight text-ink mb-2">Thérapie Aiguë</h4>
<p className="text-sm text-sub">Traitement ciblé post-traumatique. Réduction immédiate de l'œdème.</p>
</div>
</div>
<div className="flex items-center gap-12">
<div className="text-right">
<div className="text-sm font-medium">20 min</div>
<div className="text-xs text-sub">Séance</div>
</div>
<div className="text-right w-20">
<div className="text-lg font-medium">60€</div>
</div>
<div className="w-8 h-8 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative py-8 border-b border-border hover:bg-surfaceHover transition-colors -mx-4 px-4 cursor-pointer">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-start gap-6">
<span className="font-mono text-sm text-sub/50 pt-1">02</span>
<div>
<h4 className="text-2xl font-medium tracking-tight text-ink mb-2">Récupération Globale</h4>
<p className="text-sm text-sub">Scanning multi-zones pour fatigue musculaire systémique.</p>
</div>
</div>
<div className="flex items-center gap-12">
<div className="text-right">
<div className="text-sm font-medium">45 min</div>
<div className="text-xs text-sub">Séance</div>
</div>
<div className="text-right w-20">
<div className="text-lg font-medium">95€</div>
</div>
<div className="w-8 h-8 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="group relative py-8 border-b border-border hover:bg-surfaceHover transition-colors -mx-4 px-4 cursor-pointer">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div className="flex items-start gap-6">
<span className="font-mono text-sm text-sub/50 pt-1">03</span>
<div>
<h4 className="text-2xl font-medium tracking-tight text-ink mb-2">Suivi Post-Opératoire</h4>
<p className="text-sm text-sub">Accélération cicatricielle sur plaie fermée. Pack de 5 séances.</p>
</div>
</div>
<div className="flex items-center gap-12">
<div className="text-right">
<div className="text-sm font-medium">Suivi</div>
<div className="text-xs text-sub">3 semaines</div>
</div>
<div className="text-right w-20">
<div className="text-lg font-medium">250€</div>
</div>
<div className="w-8 h-8 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-white">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border mt-12 border border-border">
<div className="bg-surface p-12 md:p-16 flex flex-col justify-between h-[400px]">
<iconify-icon className="text-ink" icon="solar:bolt-circle-linear" width="40"></iconify-icon>
<div>
<h4 className="text-xl font-medium tracking-tight mb-4">Biostimulation Mitochondriale</h4>
<p className="text-sm text-sub leading-loose">
                            Les photons sont absorbés par la cytochrome c oxydase, augmentant la production d'ATP. L'énergie cellulaire disponible est maximisée pour la réparation.
                        </p>
</div>
</div>
<div className="bg-surface p-12 md:p-16 flex flex-col justify-between h-[400px]">
<iconify-icon className="text-ink" icon="solar:graph-up-linear" width="40"></iconify-icon>
<div>
<h4 className="text-xl font-medium tracking-tight mb-4">Vasodilatation Contrôlée</h4>
<p className="text-sm text-sub leading-loose">
                            Amélioration locale de la microcirculation sanguine et lymphatique. Les déchets métaboliques sont évacués plus rapidement.
                        </p>
</div>
</div>
</section>
</section>
</main>

<footer className="hidden border-t border-border bg-white pt-16 pb-8 px-6 md:px-10" id="footer-global">
<div className="max-w-[1400px] mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<span className="text-base font-semibold tracking-tight block mb-6">PLATFORM.</span>
<p className="text-sm text-sub max-w-xs">
                        Le croisement entre l'ingénierie industrielle et la santé clinique. Standards élevés, résultats mesurables.
                    </p>
</div>
<div>
<h5 className="text-xs font-medium uppercase tracking-widest text-ink mb-6">Navigation</h5>
<ul className="space-y-3 text-sm text-sub">
<li><a className="hover:text-ink transition-colors" href="#" onclick="navigate('ozone')">Service Ozone</a></li>
<li><a className="hover:text-ink transition-colors" href="#" onclick="navigate('laser')">Service Laser</a></li>
<li><a className="hover:text-ink transition-colors" href="#">Portail Client</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium uppercase tracking-widest text-ink mb-6">Légal</h5>
<ul className="space-y-3 text-sm text-sub">
<li><a className="hover:text-ink transition-colors" href="#">CGV</a></li>
<li><a className="hover:text-ink transition-colors" href="#">Confidentialité</a></li>
<li><a className="hover:text-ink transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
<p className="text-xs text-sub">© 2024 Platform Inc. Tous droits réservés.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<iconify-icon className="text-sub hover:text-ink cursor-pointer" icon="solar:brand-instagram-linear" width="20"></iconify-icon>
<iconify-icon className="text-sub hover:text-ink cursor-pointer" icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</footer>


    </>
  );
}
