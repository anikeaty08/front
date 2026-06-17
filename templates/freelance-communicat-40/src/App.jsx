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



        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('border-white/5');
                navbar.classList.remove('border-transparent');
            } else {
                navbar.classList.remove('border-white/5');
                navbar.classList.add('border-transparent');
            }
        });

        // Intersection Observer for animations and counters
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    
                    // Trigger counters if they exist in the element
                    const counters = entry.target.querySelectorAll('.stat-number');
                    counters.forEach(counter => {
                        const target = +counter.getAttribute('data-target');
                        const duration = 2000; // 2 seconds
                        const step = target / (duration / 16); // 60fps
                        let current = 0;
                        
                        const updateCounter = () => {
                            current += step;
                            if (current < target) {
                                counter.innerText = Math.ceil(current);
                                requestAnimationFrame(updateCounter);
                            } else {
                                counter.innerText = target;
                            }
                        };
                        
                        updateCounter();
                        counter.classList.remove('stat-number'); // Prevent re-triggering
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    
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
      

<nav className="fixed top-0 w-full z-50 bg-[#0D0D0F]/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-serif text-white text-xl tracking-tighter uppercase font-medium" href="#">FR</a>
<div className="hidden md:flex gap-8 items-center">
<a className="text-sm text-gray-400 hover:text-white transition-colors font-light" href="#services">Services</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors font-light" href="#propos">À propos</a>
<a className="text-sm text-gray-400 hover:text-white transition-colors font-light" href="#realisations">Réalisations</a>
<a className="text-sm bg-white/5 hover:bg-white/10 text-white px-5 py-2 rounded-full transition-colors border border-white/10 ml-4 font-light" href="#contact">Contact</a>
</div>

<button className="md:hidden text-white p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<section className="min-h-[100svh] flex items-center pt-32 pb-20 relative overflow-hidden">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0"></div>
<div className="absolute top-1/4 -right-1/4 w-[40rem] h-[40rem] bg-[#FF6B35]/20 rounded-full blur-[120px] pointer-events-none animate-float z-0"></div>
<div className="absolute bottom-10 -left-1/4 w-[30rem] h-[30rem] bg-indigo-500/15 rounded-full blur-[100px] pointer-events-none animate-float-delayed z-0"></div>
<div className="max-w-7xl mx-auto px-6 w-full relative z-10 reveal">

<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 mb-8 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B35] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B35]"></span>
</span>
<span className="text-gray-300 text-xs tracking-widest uppercase font-medium">Florentin RIMBAUD — Freelance</span>
</div>

<h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white tracking-tighter leading-[1.05] mb-8 max-w-5xl font-medium">
                Des mots <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] via-amber-400 to-[#FF6B35] animate-gradient">qui marquent,</span><br/>une image qui dure.
            </h1>
<p className="text-lg text-gray-400 max-w-2xl mb-12 leading-relaxed font-light">
                J'accompagne les entreprises ambitieuses dans la structuration de leur message et le déploiement de leur image de marque pour créer un impact mémorable.
            </p>

<div className="flex flex-wrap gap-4 items-center">
<a className="bg-[#FF6B35] text-[#0D0D0F] hover:bg-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_0_40px_rgba(255,107,53,0.3)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]" href="#contact">
                    Démarrer un projet
                </a>
<a className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full text-sm transition-all flex items-center gap-2 group backdrop-blur-sm font-light" href="#services">
                    Mes services 
                    <iconify-icon className="text-lg transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-20 max-w-4xl border-t border-white/5 pt-10">
<div className="group">
<div className="text-4xl md:text-5xl font-serif text-white tracking-tighter mb-2 flex items-baseline gap-1 group-hover:text-[#FF6B35] transition-colors">
<span className="stat-number" data-target="5">0</span><span className="text-2xl text-[#FF6B35]">+</span>
</div>
<div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Années d'expertise</div>
</div>
<div className="group">
<div className="text-4xl md:text-5xl font-serif text-white tracking-tighter mb-2 flex items-baseline gap-1 group-hover:text-[#FF6B35] transition-colors">
<span className="stat-number" data-target="40">0</span><span className="text-2xl text-[#FF6B35]">+</span>
</div>
<div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Projets réalisés</div>
</div>
<div className="group">
<div className="text-4xl md:text-5xl font-serif text-white tracking-tighter mb-2 flex items-baseline gap-1 group-hover:text-[#FF6B35] transition-colors">
<span className="stat-number" data-target="100">0</span><span className="text-2xl text-[#FF6B35]">%</span>
</div>
<div className="text-xs text-gray-500 uppercase tracking-widest font-medium">Engagement</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<h2 className="font-serif text-4xl md:text-5xl text-white tracking-tighter font-medium mb-4">Mon expertise</h2>
<p className="text-gray-400 max-w-xl font-light">Une approche globale pour aligner votre communication sur vos objectifs d'affaires.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.04] transition-all duration-500 group reveal">
<div className="h-12 w-12 bg-[#FF6B35]/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-[#FF6B35]" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-4">Stratégie de Contenu</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                        Définition d'une ligne éditoriale pertinente, création de plannings et rédaction de contenus engageants pour vos différentes plateformes.
                    </p>
</div>

<div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.04] transition-all duration-500 group reveal" style={{transitionDelay: '100ms'}}>
<div className="h-12 w-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-indigo-400" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-4">Identité de Marque</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                        Création ou refonte de votre plateforme de marque. Storytelling, positionnement et cohérence visuelle sur tous les points de contact.
                    </p>
</div>

<div className="bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:bg-white/[0.04] transition-all duration-500 group reveal" style={{transitionDelay: '200ms'}}>
<div className="h-12 w-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:graph-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl text-white font-medium tracking-tight mb-4">Communication Digitale</h3>
<p className="text-sm text-gray-400 leading-relaxed font-light">
                        Gestion de vos réseaux sociaux, campagnes d'emailing, et optimisation de votre présence en ligne pour maximiser votre visibilité.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#121215] relative overflow-hidden" id="propos">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="font-serif text-4xl md:text-5xl text-white tracking-tighter font-medium mb-8">L'art de la justesse dans chaque message.</h2>
<div className="space-y-6 text-gray-400 text-sm md:text-base font-light leading-relaxed">
<p>
                            Passionné par les mots et le design, je crois fermement qu'une communication réussie ne crie pas pour se faire entendre. Elle résonne.
                        </p>
<p>
                            Mon approche est minimaliste mais stratégique : enlever le superflu pour ne garder que l'essentiel. C'est ainsi que naissent les marques fortes et les messages qui durent.
                        </p>
<ul className="pt-4 space-y-3">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#FF6B35] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Écoute active de vos besoins</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#FF6B35] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Vision stratégique à long terme</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#FF6B35] text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span>Exécution créative précise</span>
</li>
</ul>
</div>
</div>
<div className="relative h-[30rem] w-full rounded-3xl overflow-hidden group reveal" style={{transitionDelay: '200ms'}}>

<div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-[#0D0D0F]"></div>
<div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8">
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6">
<p className="text-white font-serif italic text-lg tracking-tight">"La simplicité est la sophistication suprême."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32" id="realisations">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-16 reveal">
<div>
<h2 className="font-serif text-4xl md:text-5xl text-white tracking-tighter font-medium mb-4">Réalisations</h2>
<p className="text-gray-400 max-w-xl font-light">Une sélection de projets récents qui illustrent mon savoir-faire.</p>
</div>
<div className="hidden md:block">
<button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<a className="group block relative h-[24rem] rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 reveal" href="#">
<div className="absolute inset-0 bg-gradient-to-br from-[#FF6B35]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#0D0D0F] to-transparent">
<div className="text-xs text-[#FF6B35] uppercase tracking-widest font-medium mb-2">Refonte globale</div>
<h3 className="text-2xl text-white font-medium tracking-tight">Studio Architecture</h3>
</div>
</a>

<a className="group block relative h-[24rem] rounded-3xl overflow-hidden bg-white/[0.02] border border-white/5 reveal" href="#" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-[#0D0D0F] to-transparent">
<div className="text-xs text-indigo-400 uppercase tracking-widest font-medium mb-2">Social Media</div>
<h3 className="text-2xl text-white font-medium tracking-tight">Tech Startup Lancement</h3>
</div>
</a>
</div>
</div>
</section>

<section className="py-32 bg-[#121215] relative overflow-hidden" id="contact">
<div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#FF6B35]/5 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 reveal">
<div className="text-center mb-16">
<h2 className="font-serif text-4xl md:text-5xl text-white tracking-tighter font-medium mb-4">Discutons de votre projet</h2>
<p className="text-gray-400 font-light">Remplissez ce formulaire et je vous répondrai dans les plus brefs délais.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="relative group">
<input className="floating-input w-full bg-transparent border-b border-white/10 text-white px-0 py-4 focus:outline-none focus:border-[#FF6B35] transition-colors peer placeholder-transparent font-light" id="name" placeholder="Nom" type="text"/>
<label className="floating-label absolute left-0 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:text-xs peer-focus:-translate-y-6 peer-focus:text-[#FF6B35]" htmlFor="name">Nom complet</label>
</div>
<div className="relative group">
<input className="floating-input w-full bg-transparent border-b border-white/10 text-white px-0 py-4 focus:outline-none focus:border-[#FF6B35] transition-colors peer placeholder-transparent font-light" id="email" placeholder="Email" type="email"/>
<label className="floating-label absolute left-0 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:text-xs peer-focus:-translate-y-6 peer-focus:text-[#FF6B35]" htmlFor="email">Adresse email</label>
</div>
</div>
<div className="relative group mt-10">
<textarea className="floating-input w-full bg-transparent border-b border-white/10 text-white px-0 py-4 focus:outline-none focus:border-[#FF6B35] transition-colors peer placeholder-transparent resize-none font-light" id="message" placeholder="Message" rows="4"></textarea>
<label className="floating-label absolute left-0 top-4 text-gray-500 transition-all duration-300 pointer-events-none peer-focus:text-xs peer-focus:-translate-y-6 peer-focus:text-[#FF6B35]" htmlFor="message">Parlez-moi de votre projet</label>
</div>
<div className="pt-6">
<button className="w-full md:w-auto bg-white text-[#0D0D0F] hover:bg-[#FF6B35] hover:text-white px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 group" type="button">
                        Envoyer le message
                        <iconify-icon className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</form>
</div>
</section>

<footer className="border-t border-white/5 py-12 relative z-10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<a className="font-serif text-white text-xl tracking-tighter uppercase font-medium" href="#">FR</a>
<div className="flex items-center gap-6">
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="text-gray-500 hover:text-white transition-colors" href="#">
<iconify-icon className="text-xl" icon="solar:link-circle-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
<p className="text-xs text-gray-600 font-light">
                © 2023 Florentin RIMBAUD. Tous droits réservés.
            </p>
</div>
</footer>



    </>
  );
}
