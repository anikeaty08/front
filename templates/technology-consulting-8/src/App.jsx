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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Reveal Logic
        function reveal() {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 100;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                }
            }
        }
        window.addEventListener("scroll", reveal);
        reveal(); // Trigger on load

        // Parallax Background Logic
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax-bg');
            parallaxElements.forEach(el => {
                const speed = el.getAttribute('data-speed');
                el.style.transform = `translate(-50%, ${scrolled * speed}px)`;
            });
        });

        // Form Progress Bar & Range Slider Logic
        const form = document.getElementById('quoteForm');
        const inputs = form.querySelectorAll('input:not([type="range"]), select, textarea');
        const progressBar = document.getElementById('formProgress');
        const budgetSlider = document.getElementById('budget');
        const budgetValue = document.getElementById('budgetValue');

        const budgetLabels = {
            "1": "< 10k€",
            "2": "10k€ - 25k€",
            "3": "25k€ - 50k€",
            "4": "> 50k€"
        };

        budgetSlider.addEventListener('input', (e) => {
            budgetValue.textContent = budgetLabels[e.target.value];
        });

        function updateProgress() {
            let filled = 0;
            inputs.forEach(input => {
                if (input.value.trim() !== '') filled++;
            });
            const percentage = (filled / inputs.length) * 100;
            progressBar.style.width = `${percentage}%`;
        }

        inputs.forEach(input => {
            input.addEventListener('input', updateProgress);
            input.addEventListener('change', updateProgress);
        });
        
        // Prevent default form submission for demo
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" class="text-lg"></iconify-icon> Demande envoyée';
            btn.classList.add('bg-green-600');
            setTimeout(() => {
                btn.innerText = originalText;
                btn.classList.remove('bg-green-600');
                form.reset();
                updateProgress();
            }, 3000);
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
      

<header className="fixed top-0 w-full z-50 bg-[#060b11]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-serif text-2xl tracking-tighter text-[#f5da8c] font-normal relative group" href="#">
                EK
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#f5da8c] transition-all duration-300 group-hover:w-full"></span>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-400 hover-deep-gold transition-colors tracking-wide" href="#services">Services</a>
<a className="text-sm text-gray-400 hover-deep-gold transition-colors tracking-wide" href="#about">À Propos</a>
<a className="text-sm text-gray-400 hover-deep-gold transition-colors tracking-wide" href="#contact">Contact</a>
</nav>

<div className="hidden md:block">
<a className="text-xs tracking-wider uppercase border border-[#b08d2b]/40 text-[#f5da8c] px-4 py-2 rounded-sm hover:bg-[#b08d2b]/10 transition-colors" href="#devis">
                    Demander un devis
                </a>
</div>

<button className="md:hidden text-gray-300 flex flex-col gap-[5px]">
<span className="w-6 h-[1px] bg-current"></span>
<span className="w-6 h-[1px] bg-current"></span>
<span className="w-4 h-[1px] bg-current self-end"></span>
</button>
</div>
</header>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#b08d2b] rounded-full blur-[150px] opacity-[0.03] pointer-events-none parallax-bg" data-speed="0.05"></div>
<div className="max-w-4xl mx-auto px-6 text-center z-10 flex flex-col items-center reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-[#f5da8c] animate-pulse"></span>
<span className="text-xs text-gray-300 tracking-wide">Consulting Technologique Premium</span>
</div>
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] mb-6 font-normal">
                L'ingénierie digitale, <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#b08d2b] to-[#f5da8c] italic">élevée au rang d'art.</span>
</h1>
<p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-light leading-relaxed">
                Nous concevons des architectures logicielles et des pipelines de données sur mesure pour les entreprises exigeant l'excellence technique et la fiabilité absolue.
            </p>
<a className="btn-gold px-8 py-4 rounded-sm text-sm font-medium tracking-wide uppercase inline-flex items-center gap-2 group" href="#devis">
                Démarrer un projet
                <iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 md:py-32 relative border-t border-white/5 bg-[#060b11]/50 backdrop-blur-sm" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 md:mb-24 reveal">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-4">Notre Expertise</h2>
<p className="text-sm text-gray-400 max-w-xl">Une maîtrise technique pointue au service de votre croissance stratégique. Des solutions élégantes pour des problèmes complexes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/10 rounded-sm overflow-hidden reveal">

<div className="bg-[#0a1018] p-10 md:p-12 relative group hover:bg-[#0c131d] transition-colors duration-500">
<div className="absolute inset-0 border border-[#b08d2b]/0 group-hover:border-[#b08d2b]/20 transition-colors duration-500 pointer-events-none"></div>
<iconify-icon className="text-3xl text-[#b08d2b] mb-6" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight text-white mb-3">Développement Logiciel</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Création d'applications web et métiers robustes, scalables et sécurisées. Code propre, architecture pérenne.</p>
<a className="inline-flex items-center gap-2 text-xs text-[#b08d2b] uppercase tracking-wider group/link" href="#contact">
                        En savoir plus 
                        <iconify-icon className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="bg-[#0a1018] p-10 md:p-12 relative group hover:bg-[#0c131d] transition-colors duration-500">
<div className="absolute inset-0 border border-[#b08d2b]/0 group-hover:border-[#b08d2b]/20 transition-colors duration-500 pointer-events-none"></div>
<iconify-icon className="text-3xl text-[#b08d2b] mb-6" icon="solar:database-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight text-white mb-3">Data Engineering</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Structuration, nettoyage et optimisation de vos flux de données. Bâtissez des fondations solides pour l'IA.</p>
<a className="inline-flex items-center gap-2 text-xs text-[#b08d2b] uppercase tracking-wider group/link" href="#contact">
                        En savoir plus 
                        <iconify-icon className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="bg-[#0a1018] p-10 md:p-12 relative group hover:bg-[#0c131d] transition-colors duration-500">
<div className="absolute inset-0 border border-[#b08d2b]/0 group-hover:border-[#b08d2b]/20 transition-colors duration-500 pointer-events-none"></div>
<iconify-icon className="text-3xl text-[#b08d2b] mb-6" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight text-white mb-3">Dashboards &amp; BI</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Visualisation de données sur mesure. Transformez vos métriques brutes en interfaces décisionnelles élégantes.</p>
<a className="inline-flex items-center gap-2 text-xs text-[#b08d2b] uppercase tracking-wider group/link" href="#contact">
                        En savoir plus 
                        <iconify-icon className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="bg-[#0a1018] p-10 md:p-12 relative group hover:bg-[#0c131d] transition-colors duration-500">
<div className="absolute inset-0 border border-[#b08d2b]/0 group-hover:border-[#b08d2b]/20 transition-colors duration-500 pointer-events-none"></div>
<iconify-icon className="text-3xl text-[#b08d2b] mb-6" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-serif text-xl tracking-tight text-white mb-3">Automatisation Process</h3>
<p className="text-sm text-gray-400 leading-relaxed mb-6">Interconnexion d'APIs et scripts d'automatisation. Réduisez les tâches manuelles avec une précision chirurgicale.</p>
<a className="inline-flex items-center gap-2 text-xs text-[#b08d2b] uppercase tracking-wider group/link" href="#contact">
                        En savoir plus 
                        <iconify-icon className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<span className="text-xs text-[#b08d2b] tracking-widest uppercase mb-4 block">Notre Philosophie</span>
<h2 className="font-serif text-3xl md:text-5xl tracking-tight text-white mb-8 leading-tight">
                    L'exigence comme <br/>standard absolu.
                </h2>
<div className="space-y-6 text-sm md:text-base text-gray-400 leading-relaxed">
<p>Fondée sur le principe que la technologie doit être invisible mais omniprésente, EK Consulting accompagne les dirigeants visionnaires dans leur transformation numérique.</p>
<p>Nous ne produisons pas de simples lignes de code. Nous forgeons des actifs numériques durables, conçus avec une attention maniaque aux détails et une rigueur architecturale sans compromis.</p>
</div>
<div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
<div>
<div className="font-serif text-3xl text-white mb-1">99<span className="text-[#b08d2b]">.9%</span></div>
<div className="text-xs text-gray-500 uppercase tracking-wider">Uptime Garanti</div>
</div>
<div className="w-px h-10 bg-white/10"></div>
<div>
<div className="font-serif text-3xl text-white mb-1">Sur<span className="text-[#b08d2b]">-</span>mesure</div>
<div className="text-xs text-gray-500 uppercase tracking-wider">Approche Client</div>
</div>
</div>
</div>
<div className="relative reveal h-full min-h-[400px]">

<div className="absolute inset-0 border border-white/10 rounded-sm translate-x-4 translate-y-4"></div>
<div className="absolute inset-0 bg-[#0a1018] border border-[#b08d2b]/20 flex items-center justify-center overflow-hidden rounded-sm">
<div className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#b08d2b]/20 to-transparent rotate-45"></div>
<div className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#b08d2b]/20 to-transparent -rotate-45"></div>
<div className="w-32 h-32 border border-[#b08d2b]/30 rounded-full flex items-center justify-center">
<div className="w-16 h-16 border border-[#b08d2b]/50 rounded-full"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative bg-[#0a1018]/80 border-y border-white/5" id="devis">
<div className="max-w-4xl mx-auto px-6 reveal">
<div className="text-center mb-12">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight text-white mb-4">Initier une collaboration</h2>
<p className="text-sm text-gray-400">Détaillez votre besoin. Nous reviendrons vers vous avec une proposition d'architecture préliminaire sous 48h.</p>
</div>

<div className="bg-[#060b11] border border-white/10 rounded-sm p-8 md:p-12 relative overflow-hidden shadow-2xl">

<div className="absolute top-0 left-0 w-full h-1 bg-white/5">
<div className="h-full bg-gradient-to-r from-[#b08d2b] to-[#f5da8c] w-0 transition-all duration-300 ease-out" id="formProgress"></div>
</div>
<form className="space-y-6 mt-4" id="quoteForm">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="text-xs text-gray-400 uppercase tracking-wider" htmlFor="name">Nom complet</label>
<input className="input-gold w-full px-4 py-3 rounded-sm text-sm text-white focus:ring-0" id="name" required="" type="text"/>
</div>

<div className="space-y-2">
<label className="text-xs text-gray-400 uppercase tracking-wider" htmlFor="company">Entreprise</label>
<input className="input-gold w-full px-4 py-3 rounded-sm text-sm text-white focus:ring-0" id="company" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="text-xs text-gray-400 uppercase tracking-wider" htmlFor="email">Email professionnel</label>
<input className="input-gold w-full px-4 py-3 rounded-sm text-sm text-white focus:ring-0" id="email" required="" type="email"/>
</div>

<div className="space-y-2">
<label className="text-xs text-gray-400 uppercase tracking-wider" htmlFor="service">Expertise requise</label>
<select className="input-gold w-full px-4 py-3 rounded-sm text-sm text-gray-300 focus:ring-0 appearance-none cursor-pointer bg-no-repeat bg-[url('data:image/svg+xml;utf8,&lt;svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%23b08d2b%22 strokeWidth=%222%22 strokeLinecap=%22round%22 strokeLinejoin=%22round%22&gt;&lt;polyline points=%226 9 12 15 18 9%22&gt;&lt;/polyline&gt;&lt;/svg&gt;')] bg-[position:calc(100%-1rem)_center]" id="service" required="">
<option disabled="" selected="" value="">Sélectionner un domaine</option>
<option className="bg-[#0a1018] text-white" value="software">Développement Logiciel</option>
<option className="bg-[#0a1018] text-white" value="data">Data Engineering</option>
<option className="bg-[#0a1018] text-white" value="bi">Dashboards &amp; BI</option>
<option className="bg-[#0a1018] text-white" value="auto">Automatisation</option>
</select>
</div>
</div>

<div className="space-y-2">
<label className="text-xs text-gray-400 uppercase tracking-wider" htmlFor="details">Nature du projet</label>
<textarea className="input-gold w-full px-4 py-3 rounded-sm text-sm text-white focus:ring-0 resize-none" id="details" placeholder="Décrivez brièvement le contexte et les objectifs..." required="" rows="4"></textarea>
</div>

<div className="space-y-4 pt-2">
<div className="flex justify-between items-center">
<label className="text-xs text-gray-400 uppercase tracking-wider" htmlFor="budget">Budget estimé</label>
<span className="text-sm text-[#f5da8c] font-serif" id="budgetValue">10k€ - 25k€</span>
</div>
<input className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer outline-none [&amp;::-webkit-slider-thumb]:appearance-none [&amp;::-webkit-slider-thumb]:w-4 [&amp;::-webkit-slider-thumb]:h-4 [&amp;::-webkit-slider-thumb]:bg-[#b08d2b] [&amp;::-webkit-slider-thumb]:rounded-full [&amp;::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(176,141,43,0.5)]" id="budget" max="4" min="1" type="range" value="2"/>
</div>

<div className="pt-6">
<button className="btn-gold w-full py-4 rounded-sm text-sm font-medium tracking-wide uppercase" type="submit">
                            Soumettre la demande
                        </button>
</div>
</form>
</div>
</div>
</section>

<section className="py-12 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<p className="text-xs text-gray-500 uppercase tracking-widest mb-6 text-center">Transactions sécurisées &amp; Facturation</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-3xl" icon="logos:visa"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-3xl" icon="logos:mastercard"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-3xl" icon="logos:apple-pay"></iconify-icon>
</div>
<div className="flex items-center gap-2 text-white text-sm font-medium border-l border-white/20 pl-8">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span>Paiement crypté de bout en bout</span>
</div>
</div>
</div>
</section>

<footer className="bg-[#060b11] pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="md:col-span-1">
<a className="font-serif text-2xl tracking-tighter text-[#f5da8c] font-normal mb-4 inline-block" href="#">EK</a>
<p className="text-xs text-gray-500 leading-relaxed max-w-xs">
                        Cabinet de consulting technologique dédié à l'ingénierie logicielle et à l'architecture de données de haute précision.
                    </p>
</div>

<div>
<h4 className="text-xs text-white uppercase tracking-wider mb-4">Expertise</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover-deep-gold transition-colors" href="#">Software Development</a></li>
<li><a className="hover-deep-gold transition-colors" href="#">Data Engineering</a></li>
<li><a className="hover-deep-gold transition-colors" href="#">Business Intelligence</a></li>
<li><a className="hover-deep-gold transition-colors" href="#">Automatisation</a></li>
</ul>
</div>

<div>
<h4 className="text-xs text-white uppercase tracking-wider mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover-deep-gold transition-colors" href="mailto:contact@ek-consulting.com">contact@ek-consulting.com</a></li>
<li>Paris, France</li>
<li className="pt-2">
<a className="inline-flex items-center gap-2 text-[#b08d2b] hover:text-[#f5da8c] transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:linkedin-linear"></iconify-icon>
<span>LinkedIn</span>
</a>
</li>
</ul>
</div>

<div>
<h4 className="text-xs text-white uppercase tracking-wider mb-4">Légal</h4>
<ul className="space-y-3 text-sm text-gray-400">
<li><a className="hover-deep-gold transition-colors" href="#">Mentions Légales</a></li>
<li><a className="hover-deep-gold transition-colors" href="#">Politique de Confidentialité</a></li>
<li><a className="hover-deep-gold transition-colors" href="#">CGV</a></li>
</ul>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-600">
                    © 2024 EK Consulting. Tous droits réservés.
                </p>
<div className="flex items-center gap-2 text-xs text-gray-600">
<iconify-icon className="text-sm" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
<span>Conforme RGPD</span>
</div>
</div>
</div>
</footer>



    </>
  );
}
