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



        // Init Icons
        lucide.createIcons();

        // Slider Logic
        const slider = document.getElementById('sliderTrack');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const scrollAmount = 624; 

        nextBtn.addEventListener('click', () => {
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach((el) => {
            el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700', 'ease-out');
            observer.observe(el);
        });

        // Navbar Scroll Effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-sm');
                navbar.classList.replace('bg-white/80', 'bg-white/95');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.replace('bg-white/95', 'bg-white/80');
            }
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
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">

<span className="text-xl font-semibold tracking-tighter text-slate-900 group-hover:text-indigo-600 transition-colors duration-300">NEXT2i</span>
</div>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-indigo-600 transition-colors relative group" href="#">
                    Notre approche
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-indigo-600 transition-colors relative group" href="#">
                    Solutions
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-indigo-600 transition-colors relative group" href="#">
                    Ressources
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<button className="bg-slate-900 text-white text-xs font-medium py-2 px-4 rounded-full hover:bg-indigo-600 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md hover:shadow-indigo-200">
                Contactez-nous
            </button>
</div>
</nav>
<main className="pt-24 pb-20">

<section className="max-w-7xl mr-auto mb-24 ml-auto pr-6 pl-6">

<div className="max-w-3xl mb-16 animate-on-scroll">
<h2 className="text-3xl md:text-5xl font-semibold text-slate-900 tracking-tight leading-tight mb-6">
                    Transformez vos obligations réglementaires en atout confiance.
                </h2>
<p className="md:text-xl leading-relaxed text-lg font-normal text-slate-500">
                    La cybersécurité n'est pas qu'une question d'outils. C'est avant tout une stratégie de gouvernance alignée sur vos enjeux business.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">

<div className="animate-on-scroll delay-100 group p-8 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-500 ease-out cursor-default">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 group-hover:border-indigo-100 transition-all duration-500">
<i className="text-indigo-600 w-6 h-6 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3 group-hover:text-indigo-700 transition-colors">Pilotage RSSI as a Service</h3>
<p className="leading-relaxed text-sm text-slate-500 mb-6">Bénéficiez de l'expertise d'un Responsable Sécurité dédié pour structurer votre gouvernance, sans les contraintes d'un recrutement interne.</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0 stroke-[1.5]" data-lucide="check"></i>
<span>Définition et pilotage de la PSSI</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0 stroke-[1.5]" data-lucide="check"></i>
<span>Conformité (ISO 27001, NIS 2)</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0 stroke-[1.5]" data-lucide="check"></i>
<span>Gestion des risques et reporting</span>
</li>
</ul>
</div>

<div className="animate-on-scroll delay-200 group p-8 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-500 ease-out cursor-default">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:-rotate-3 group-hover:border-indigo-100 transition-all duration-500">
<i className="text-indigo-600 w-6 h-6 stroke-[1.5]" data-lucide="scale"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3 group-hover:text-indigo-700 transition-colors">Risk &amp; Gouvernance (GRC)</h3>
<p className="leading-relaxed text-sm text-slate-500 mb-6">Ne subissez plus les contraintes, maîtrisez-les. Nous élaborons vos politiques de sécurité alignées sur vos objectifs.</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0 stroke-[1.5]" data-lucide="check"></i>
<span>Politiques et procédures claires</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0 stroke-[1.5]" data-lucide="check"></i>
<span>Plans de mitigation des risques</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0 stroke-[1.5]" data-lucide="check"></i>
<span>Continuité d'Activité (PRA/PCA)</span>
</li>
</ul>
</div>

<div className="animate-on-scroll delay-300 group p-8 rounded-3xl bg-slate-50 border border-slate-200/60 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-2 transition-all duration-500 ease-out cursor-default">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:rotate-3 group-hover:border-indigo-100 transition-all duration-500">
<i className="text-indigo-600 w-6 h-6 stroke-[1.5]" data-lucide="radar"></i>
</div>
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-3 group-hover:text-indigo-700 transition-colors">Audit &amp; Pentest</h3>
<p className="leading-relaxed text-sm text-slate-500 mb-6">Éprouvez la robustesse de votre SI. Nos experts simulent des attaques réelles pour identifier vos failles.</p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0 stroke-[1.5]" data-lucide="check"></i>
<span>Simulation d'attaques réelles (Pentest)</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0 stroke-[1.5]" data-lucide="check"></i>
<span>Audits techniques d'architecture à 360°</span>
</li>
<li className="flex items-start gap-3 text-sm text-slate-700">
<i className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0 stroke-[1.5]" data-lucide="check"></i>
<span>Remédiation des vulnérabilités</span>
</li>
</ul>
</div>
</div>
</section>

<div className="max-w-7xl mx-auto px-6">
<div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full mb-20"></div>
</div>

<section className="relative overflow-hidden animate-on-scroll">
<div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<span className="text-indigo-600 font-medium tracking-wide text-xs uppercase mb-2 block">Protection Opérationnelle</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">Nos Solutions Techniques</h2>
</div>

<div className="flex gap-3">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-slate-900 hover:text-white hover:bg-slate-900 transition-all duration-300 active:scale-95" id="prevBtn">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-slate-900 hover:text-white hover:bg-slate-900 transition-all duration-300 active:scale-95" id="nextBtn">
<i className="w-5 h-5 stroke-[1.5]" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="w-full relative">

<div className="flex gap-6 px-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-10" id="sliderTrack" style={{scrollBehavior: 'smooth'}}>
<div className="hidden md:block w-[calc(50vw-42rem)] shrink-0"></div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-full">
<div className="h-full bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden group transition-transform duration-500 hover:scale-[1.01]">

<div className="animate-blob absolute top-0 right-0 w-80 h-80 bg-indigo-600/30 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full justify-between gap-10">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-indigo-500/20 rounded-lg backdrop-blur-sm border border-indigo-500/30">
<i className="text-indigo-300 w-6 h-6 stroke-[1.5]" data-lucide="siren"></i>
</div>
<span className="text-indigo-300 text-sm font-medium tracking-wide">SURVEILLANCE CONTINUE</span>
</div>
<h3 className="text-3xl font-semibold tracking-tight mb-4">L'Offre Cybersécurité MDR</h3>
<p className="text-slate-300 text-lg leading-relaxed max-w-md">
                                        Managed Detection &amp; Response. Détectez les menaces avancées qui échappent aux contrôles traditionnels.
                                    </p>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white border border-white/10 hover:bg-white/20 transition-colors cursor-default">EDR Management</span>
<span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white border border-white/10 hover:bg-white/20 transition-colors cursor-default">Threat Hunting</span>
<span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white border border-white/10 hover:bg-white/20 transition-colors cursor-default">Réponse Incident</span>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-full">
<div className="h-full bg-white border border-slate-200 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500">
<div className="relative z-10 flex flex-col h-full justify-between gap-10">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-slate-100 rounded-lg border border-slate-200 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
<i className="text-slate-900 group-hover:text-indigo-600 w-6 h-6 stroke-[1.5] transition-colors" data-lucide="activity"></i>
</div>
<span className="text-indigo-600 text-sm font-medium tracking-wide">CENTRE OPÉRATIONNEL</span>
</div>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">L'Offre Cybersécurité SOC</h3>
<p className="text-slate-500 text-lg leading-relaxed max-w-md">
                                        Security Operations Center. Une tour de contrôle 24/7 pour vos infrastructures. Collecte et corrélation des logs.
                                    </p>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 bg-slate-50 rounded-full text-xs font-medium text-slate-600 border border-slate-200">SIEM</span>
<span className="px-3 py-1 bg-slate-50 rounded-full text-xs font-medium text-slate-600 border border-slate-200">Monitoring 24/7</span>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[600px] h-full">
<div className="h-full bg-white border border-slate-200 rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500">
<div className="relative z-10 flex flex-col h-full justify-between gap-10">
<div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 bg-slate-100 rounded-lg border border-slate-200 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
<i className="text-slate-900 group-hover:text-indigo-600 w-6 h-6 stroke-[1.5] transition-colors" data-lucide="scan-search"></i>
</div>
<span className="text-indigo-600 text-sm font-medium tracking-wide">ANTICIPATION</span>
</div>
<h3 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">L'Offre Cybersécurité VOC</h3>
<p className="text-slate-500 text-lg leading-relaxed max-w-md">
                                        Vulnerability Operations Center. Identification continue des failles. Scans récurrents et tests d'intrusion.
                                    </p>
</div>
<div className="flex flex-wrap gap-3">
<span className="px-3 py-1 bg-slate-50 rounded-full text-xs font-medium text-slate-600 border border-slate-200">Scan Vulnérabilité</span>
<span className="px-3 py-1 bg-slate-50 rounded-full text-xs font-medium text-slate-600 border border-slate-200">Remédiation</span>
</div>
</div>
</div>
</div>
<div className="w-6 shrink-0 md:w-[calc(50vw-42rem)]"></div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<span className="text-lg font-semibold tracking-tighter text-slate-900">NEXT2i</span>
<div className="text-slate-400 text-sm transition-colors hover:text-indigo-600 cursor-default">
                © 2025 Next2i. Tous droits réservés.
            </div>
</div>
</footer>


    </>
  );
}
