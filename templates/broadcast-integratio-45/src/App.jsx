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



        // Setup Footer Margin for Reveal Effect
        function updateFooterMargin() {
            const footer = document.querySelector('.footer-sticky');
            const wrapper = document.getElementById('main-wrapper');
            wrapper.style.marginBottom = `${footer.offsetHeight}px`;
        }
        window.addEventListener('resize', updateFooterMargin);

        // Mobile Menu Toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', () => {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        });
        document.querySelectorAll('.mobile-link').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('mobile-menu').classList.add('hidden');
                document.getElementById('mobile-menu').classList.remove('flex');
            });
        });

        // Header Background on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 20) {
                header.classList.add('shadow-lg', 'shadow-black/20');
            } else {
                header.classList.remove('shadow-lg', 'shadow-black/20');
            }
        });

        // GSAP Setup
        gsap.registerPlugin(ScrollTrigger);

        // Lenis Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            smooth: true,
        });
        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Anchor Link integration with Lenis
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                lenis.scrollTo(this.getAttribute('href'), { offset: -80 });
            });
        });

        // Text Split Utility
        function splitTextToWords(element) {
            const text = element.innerText;
            const words = text.split(' ');
            element.innerHTML = '';
            words.forEach(word => {
                const wordWrap = document.createElement('span');
                wordWrap.classList.add('word-wrap');
                wordWrap.innerHTML = `<span class="word-inner">${word}&nbsp;</span>`;
                element.appendChild(wordWrap);
            });
        }
        document.querySelectorAll('.split-animate').forEach(el => splitTextToWords(el));

        // Preloader & Init
        const loadTl = gsap.timeline({
            onComplete: () => {
                document.body.style.opacity = 1;
                updateFooterMargin();
                initSite();
            }
        });

        loadTl.to('.loader-bar', { width: '100%', duration: 1.2, ease: 'power2.inOut' })
              .to('.loader-text', { y: -50, opacity: 0, duration: 0.5 })
              .to('.loader', { yPercent: -100, duration: 0.8, ease: 'power4.inOut' });

        function initSite() {
            // Hero text reveal
            const heroWords = document.querySelectorAll('#home .word-inner');
            if(heroWords.length) {
                gsap.to(heroWords, { y: "0%", duration: 1, ease: "power4.out", stagger: 0.05 });
            }
            gsap.to('.hero-fade', { opacity: 1, y: 0, stagger: 0.1, duration: 1, delay: 0.5 });

            // Scroll Trigger Text Reveal
            const splitElements = document.querySelectorAll('.split-animate');
            splitElements.forEach(el => {
                if(el.closest('#home')) return; // skip hero
                const words = el.querySelectorAll('.word-inner');
                gsap.to(words, {
                    y: "0%",
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.015,
                    scrollTrigger: {
                        trigger: el,
                        start: "top 90%", 
                        toggleActions: "play none none reverse"
                    }
                });
            });

            // Card Stack Effect
            const cards = gsap.utils.toArray('.card-item');
            cards.forEach((card, i) => {
                const nextCard = cards[i+1];
                if (nextCard) {
                    gsap.to(card.querySelector('.card-inner'), {
                        scale: 0.95,
                        opacity: 0.5, 
                        filter: 'blur(5px)',
                        ease: "none",
                        scrollTrigger: {
                            trigger: nextCard,
                            start: "top bottom", 
                            end: "top 15vh",    
                            scrub: true
                        }
                    });
                }
            });

            // Footer Reveal Effect Parallax
            gsap.from('.footer-sticky > div', {
                y: 50,
                opacity: 0,
                scale: 0.95,
                scrollTrigger: {
                    trigger: '.footer-sticky',
                    start: 'top 100%', 
                    end: 'bottom bottom',
                    scrub: true
                }
            });
            
            // Re-calculate after initialization to prevent glitches
            setTimeout(updateFooterMargin, 500);
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
      

<div className="noise-overlay"></div>
<div className="fixed inset-0 pointer-events-none scanlines z-50 opacity-20"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#00d2ff]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

<div className="loader">
<div className="text-3xl md:text-5xl font-semibold tracking-tighter uppercase loader-text">Coolnum</div>
<div className="loader-bar"></div>
</div>

<header className="fixed top-0 w-full z-40 bg-[#0f1117]/80 backdrop-blur-md border-b border-[#2a2e3d]/50 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#home">
<div className="w-2 h-2 rounded-full bg-[#00d2ff] group-hover:shadow-[0_0_10px_#00d2ff] transition-shadow"></div>
<span className="text-lg font-semibold tracking-tighter text-white uppercase">Coolnum</span>
</a>

<nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#9ca3af]">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#projets">Projets</a>
<a className="hover:text-white transition-colors" href="#ressources">Ressources</a>
<a className="text-white bg-[#161922] border border-[#2a2e3d] hover:border-[#00d2ff]/50 px-4 py-1.5 rounded-full transition-all flex items-center gap-2" href="#contact">
                    Contact <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</nav>

<button className="md:hidden text-[#9ca3af] hover:text-white" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div className="hidden md:hidden bg-[#0f1117] border-b border-[#2a2e3d] px-6 py-4 flex-col gap-4 text-sm font-medium" id="mobile-menu">
<a className="text-left py-2 text-[#9ca3af] hover:text-white mobile-link" href="#services">Services</a>
<a className="text-left py-2 text-[#9ca3af] hover:text-white mobile-link" href="#projets">Projets</a>
<a className="text-left py-2 text-[#9ca3af] hover:text-white mobile-link" href="#ressources">Ressources</a>
<a className="text-left py-2 text-[#00d2ff] mobile-link" href="#contact">Contact</a>
</div>
</header>

<div className="wrapper" id="main-wrapper">

<section className="pt-32 pb-20 md:pt-48 md:pb-32 max-w-7xl mx-auto px-6 min-h-[90vh] flex flex-col justify-center relative z-10" id="home">
<div className="max-w-4xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2a2e3d] bg-[#161922] mb-8 hero-fade opacity-0">
<span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-pulse"></span>
<span className="text-xs font-medium text-[#9ca3af]">Opérationnel H24 / 7J</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white mb-6 leading-tight split-animate">
                    L'intégration broadcast, <br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#5e6ad2]">de A à Z.</span>
</h1>
<p className="text-base md:text-lg text-[#9ca3af] leading-relaxed mb-10 max-w-2xl font-normal hero-fade opacity-0">
                    Coolnum prend en charge vos projets audiovisuels dès la conception du cahier des charges — jusqu'à la recette finale et la formation de vos équipes. Un seul interlocuteur. Zéro coordination à gérer de votre côté.
                </p>

<div className="flex flex-wrap gap-3 mb-10 hero-fade opacity-0">
<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#9ca3af] border border-[#2a2e3d] px-3 py-1.5 rounded bg-[#161922]/50">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon> Audit &amp; Design
                    </div>
<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#9ca3af] border border-[#2a2e3d] px-3 py-1.5 rounded bg-[#161922]/50">
<iconify-icon icon="solar:videocamera-record-linear"></iconify-icon> Intégration
                    </div>
<div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-[#9ca3af] border border-[#2a2e3d] px-3 py-1.5 rounded bg-[#161922]/50">
<iconify-icon icon="solar:server-square-linear"></iconify-icon> Décommissionnement
                    </div>
</div>
<div className="flex flex-col sm:flex-row gap-4 hero-fade opacity-0">
<a className="bg-[#f3f4f6] text-[#0f1117] px-6 py-3 rounded-md font-medium text-sm hover:bg-white transition-colors flex items-center justify-center gap-2" href="#contact">
                        Parlez-nous de votre projet
                    </a>
<a className="bg-[#161922] text-white border border-[#2a2e3d] px-6 py-3 rounded-md font-medium text-sm hover:border-[#9ca3af] transition-colors flex items-center justify-center gap-2" href="#services">
                        Découvrir nos services
                    </a>
</div>
</div>
</section>

<section className="border-y border-[#2a2e3d]/50 py-8 max-w-7xl mx-auto px-6 w-full">
<p className="text-xs font-medium text-[#5e6ad2] uppercase tracking-wider mb-6 text-center">Ils nous confient leur infrastructure</p>
<div className="flex flex-wrap justify-center gap-12 md:gap-24 items-center opacity-60 grayscale">
<span className="text-xl font-semibold tracking-tighter">CANAL+</span>
<span className="text-xl font-semibold tracking-tighter">CNEWS</span>
<span className="text-xl font-semibold tracking-tighter">EUROSPORT</span>
<span className="text-xl font-semibold tracking-tighter">FRANCE TV</span>
</div>
</section>

<section className="py-24 md:py-32 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-start">
<div className="md:col-span-5 md:sticky md:top-32 self-start z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter leading-tight text-white split-animate">
                    Ce que ça change, <br/>d'avoir un <span className="text-[#5e6ad2]">vrai chef de projet</span> broadcast.
                </h2>
</div>
<div className="md:col-span-7 flex flex-col gap-8 text-[#9ca3af]">
<div className="p-8 rounded-xl bg-[#161922]/50 border border-[#2a2e3d] split-animate">
<div className="w-10 h-10 rounded-lg bg-[#0f1117] border border-[#2a2e3d] flex items-center justify-center mb-6 text-[#00d2ff]">
<iconify-icon className="text-xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">On part de zéro avec vous</h3>
<p className="text-sm leading-relaxed">Cahier des charges, choix technologiques, architecture signal : on structure votre projet avant même que le premier câble soit tiré.</p>
</div>
<div className="p-8 rounded-xl bg-[#161922]/50 border border-[#2a2e3d] split-animate">
<div className="w-10 h-10 rounded-lg bg-[#0f1117] border border-[#2a2e3d] flex items-center justify-center mb-6 text-[#00d2ff]">
<iconify-icon className="text-xl" icon="solar:network-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">On coordonne tous les métiers</h3>
<p className="text-sm leading-relaxed">IT, électricité, second œuvre : Coolnum est l'interface unique entre tous les intervenants. Vous ne gérez qu'un seul interlocuteur.</p>
</div>
<div className="p-8 rounded-xl bg-[#161922]/50 border border-[#2a2e3d] split-animate">
<div className="w-10 h-10 rounded-lg bg-[#0f1117] border border-[#2a2e3d] flex items-center justify-center mb-6 text-[#00d2ff]">
<iconify-icon className="text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-3">On livre dans les délais</h3>
<p className="text-sm leading-relaxed">Reprise d'infrastructure existante, chantiers en parallèle d'une exploitation live, délais serrés imposés : on a l'habitude.</p>
</div>
</div>
</section>

<section className="stack-section max-w-7xl mx-auto px-6" id="services">
<div className="mb-16 md:mb-24">
<p className="text-xs font-medium text-[#5e6ad2] uppercase tracking-wider mb-4">Expertise technique</p>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white split-animate">Trois expertises,<br/>une seule équipe.</h2>
</div>
<div className="stack-container w-full relative">

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-xs font-medium text-[#9ca3af] border border-[#2a2e3d] bg-[#0f1117] inline-block px-2.5 py-1 rounded mb-6">01</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tighter text-white mb-2">Intégration broadcast</h3>
<p className="text-xs text-[#00d2ff] uppercase tracking-wider font-medium mb-6">De A à Z</p>
<p className="text-sm text-[#9ca3af] leading-relaxed">
                                    Régie de production TV, studio radio, infrastructure IP/SDI : on intègre des environnements complexes en tenant compte de l'existant et des contraintes d'exploitation.
                                </p>
</div>
<div className="flex flex-col gap-3 mt-8 pt-6 border-t border-[#2a2e3d]/50">
<div className="flex items-center gap-3 text-sm text-[#9ca3af]"><iconify-icon className="text-[#00d2ff]" icon="solar:check-circle-linear"></iconify-icon> Cahier des charges &amp; câblage</div>
<div className="flex items-center gap-3 text-sm text-[#9ca3af]"><iconify-icon className="text-[#00d2ff]" icon="solar:check-circle-linear"></iconify-icon> Coordination IT / Électricité</div>
<div className="flex items-center gap-3 text-sm text-[#9ca3af]"><iconify-icon className="text-[#00d2ff]" icon="solar:check-circle-linear"></iconify-icon> Tests de recette &amp; formation</div>
</div>
</div>
<div className="card-img-wrap border-l border-[#2a2e3d]">
<img alt="Studio Broadcast" className="card-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-xs font-medium text-[#9ca3af] border border-[#2a2e3d] bg-[#0f1117] inline-block px-2.5 py-1 rounded mb-6">02</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tighter text-white mb-2">Solutions sur-mesure</h3>
<p className="text-xs text-[#00d2ff] uppercase tracking-wider font-medium mb-6">Écosystèmes complexes</p>
<p className="text-sm text-[#9ca3af] leading-relaxed">
                                    Quand les outils standard ne suffisent pas, on développe. Intégration Cerebrum/Neuron, migration SDI vers 2110, configurations Extron XTP : on maîtrise la couche logicielle autant que le câblage.
                                </p>
</div>
<div className="flex flex-col gap-3 mt-8 pt-6 border-t border-[#2a2e3d]/50">
<div className="flex items-center gap-3 text-sm text-[#9ca3af]"><iconify-icon className="text-[#00d2ff]" icon="solar:check-circle-linear"></iconify-icon> EVS Cerebrum &amp; Neuron</div>
<div className="flex items-center gap-3 text-sm text-[#9ca3af]"><iconify-icon className="text-[#00d2ff]" icon="solar:check-circle-linear"></iconify-icon> Migration SDI vers ST 2110</div>
<div className="flex items-center gap-3 text-sm text-[#9ca3af]"><iconify-icon className="text-[#00d2ff]" icon="solar:check-circle-linear"></iconify-icon> Sans rupture de service</div>
</div>
</div>
<div className="card-img-wrap border-l border-[#2a2e3d]">
<img alt="Server Room" className="card-img" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="card-item">
<div className="card-inner">
<div className="card-content">
<div>
<div className="text-xs font-medium text-[#9ca3af] border border-[#2a2e3d] bg-[#0f1117] inline-block px-2.5 py-1 rounded mb-6">03</div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tighter text-white mb-2">Décommissionnement</h3>
<p className="text-xs text-[#00d2ff] uppercase tracking-wider font-medium mb-6">Volume &amp; Traçabilité</p>
<p className="text-sm text-[#9ca3af] leading-relaxed">
                                    Démontage, tri, inventaire, logistique, broker : on gère des opérations à très grand volume (150+ baies) avec une traçabilité complète de chaque équipement.
                                </p>
</div>
<div className="flex flex-col gap-3 mt-8 pt-6 border-t border-[#2a2e3d]/50">
<div className="flex items-center gap-3 text-sm text-[#9ca3af]"><iconify-icon className="text-[#00d2ff]" icon="solar:check-circle-linear"></iconify-icon> Capacité massive (150+ baies)</div>
<div className="flex items-center gap-3 text-sm text-[#9ca3af]"><iconify-icon className="text-[#00d2ff]" icon="solar:check-circle-linear"></iconify-icon> Inventaire documenté et suivi</div>
<div className="flex items-center gap-3 text-sm text-[#9ca3af]"><iconify-icon className="text-[#00d2ff]" icon="solar:check-circle-linear"></iconify-icon> Gestion directe avec les brokers</div>
</div>
</div>
<div className="card-img-wrap border-l border-[#2a2e3d]">
<img alt="Cable Management" className="card-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="projets">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-4 split-animate">Projets récents.</h2>
<p className="text-sm text-[#9ca3af] max-w-xl leading-relaxed">Une sélection de déploiements récents pour les acteurs majeurs du paysage audiovisuel français.</p>
</div>
<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full bg-white text-[#0f1117] text-xs font-medium">Tous</button>
<button className="px-4 py-1.5 rounded-full bg-[#161922] border border-[#2a2e3d] text-[#9ca3af] hover:text-white text-xs font-medium transition-colors">Intégration</button>
<button className="px-4 py-1.5 rounded-full bg-[#161922] border border-[#2a2e3d] text-[#9ca3af] hover:text-white text-xs font-medium transition-colors">Infrastructure</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group flex flex-col p-8 rounded-2xl bg-[#161922] border border-[#2a2e3d] hover:border-[#00d2ff]/50 transition-colors h-full">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-medium px-2.5 py-1 rounded bg-[#2a2e3d] text-[#f3f4f6]">Intégration</span>
<div className="flex items-center text-[#9ca3af] text-xs gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 2 mois</div>
</div>
<h3 className="text-xl font-semibold tracking-tighter text-white mb-3">CNews</h3>
<p className="text-sm text-[#9ca3af] leading-relaxed mb-8 flex-grow">Regroupement complet d'infrastructure : 97 postes DALET déménagés, position antenne légère, deux pupitres de coordination.</p>
<button className="mt-auto flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#00d2ff] transition-colors w-max">
                        Voir le détail <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="group flex flex-col p-8 rounded-2xl bg-[#161922] border border-[#2a2e3d] hover:border-[#00d2ff]/50 transition-colors h-full">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-medium px-2.5 py-1 rounded bg-[#00d2ff]/10 text-[#00d2ff]">Infrastructure IP</span>
<div className="flex items-center text-[#9ca3af] text-xs gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 3 mois</div>
</div>
<h3 className="text-xl font-semibold tracking-tighter text-white mb-3">Infosport</h3>
<p className="text-sm text-[#9ca3af] leading-relaxed mb-8 flex-grow">Régie de production full IP : migration SDI vers ST2110 via Neuron, orchestration Cerebrum, caméras PTZ, console Calrec.</p>
<button className="mt-auto flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#00d2ff] transition-colors w-max">
                        Voir le détail <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="group flex flex-col p-8 rounded-2xl bg-[#161922] border border-[#2a2e3d] hover:border-[#00d2ff]/50 transition-colors h-full">
<div className="flex items-center justify-between mb-8">
<span className="text-xs font-medium px-2.5 py-1 rounded bg-[#2a2e3d] text-[#f3f4f6]">Décommissionnement</span>
<div className="flex items-center text-[#9ca3af] text-xs gap-1"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon> 6 mois</div>
</div>
<h3 className="text-xl font-semibold tracking-tighter text-white mb-3">Eurosport</h3>
<p className="text-sm text-[#9ca3af] leading-relaxed mb-8 flex-grow">Démantèlement de 150+ baies : tri, inventaire complet, coordination broker pour la revente, zéro perte de traçabilité.</p>
<button className="mt-auto flex items-center gap-2 text-sm font-medium text-white group-hover:text-[#00d2ff] transition-colors w-max">
                        Voir le détail <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 border-t border-[#2a2e3d]/50" id="ressources">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-white mb-12 split-animate">Ressources &amp; analyses.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<article className="group cursor-pointer">
<div className="aspect-[16/9] w-full bg-[#161922] border border-[#2a2e3d] rounded-xl mb-6 overflow-hidden relative flex items-center justify-center">
<iconify-icon className="text-4xl text-[#2a2e3d] group-hover:text-[#00d2ff] transition-colors duration-500" icon="solar:routing-2-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 text-xs text-[#9ca3af] mb-3">
<span className="uppercase tracking-wider font-medium text-[#5e6ad2]">Technologie</span>
<span>•</span>
<span>Lecture 5 min</span>
</div>
<h3 className="text-lg font-semibold tracking-tighter text-white mb-3 group-hover:text-[#00d2ff] transition-colors line-clamp-2">
                        SDI ou ST 2110 : comment choisir pour votre prochaine régie ?
                    </h3>
<p className="text-sm text-[#9ca3af] line-clamp-3 leading-relaxed">
                        L'IP n'est pas toujours la réponse universelle. Analyse des critères de décision réels (budget, compétences, scalabilité) pour choisir l'architecture de routage adaptée.
                    </p>
</article>
<article className="group cursor-pointer">
<div className="aspect-[16/9] w-full bg-[#161922] border border-[#2a2e3d] rounded-xl mb-6 overflow-hidden relative flex items-center justify-center">
<iconify-icon className="text-4xl text-[#2a2e3d] group-hover:text-[#00d2ff] transition-colors duration-500" icon="solar:box-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 text-xs text-[#9ca3af] mb-3">
<span className="uppercase tracking-wider font-medium text-[#5e6ad2]">Opérations</span>
<span>•</span>
<span>Lecture 4 min</span>
</div>
<h3 className="text-lg font-semibold tracking-tighter text-white mb-3 group-hover:text-[#00d2ff] transition-colors line-clamp-2">
                        Décommissionnement broadcast : les 5 erreurs à éviter
                    </h3>
<p className="text-sm text-[#9ca3af] line-clamp-3 leading-relaxed">
                        Démonter une infrastructure obsolète paraît simple, mais les pertes de traçabilité peuvent coûter cher. Retour sur les méthodologies indispensables pour les gros volumes.
                    </p>
</article>
<article className="group cursor-pointer">
<div className="aspect-[16/9] w-full bg-[#161922] border border-[#2a2e3d] rounded-xl mb-6 overflow-hidden relative flex items-center justify-center">
<iconify-icon className="text-4xl text-[#2a2e3d] group-hover:text-[#00d2ff] transition-colors duration-500" icon="solar:user-speak-rounded-linear"></iconify-icon>
</div>
<div className="flex items-center gap-3 text-xs text-[#9ca3af] mb-3">
<span className="uppercase tracking-wider font-medium text-[#5e6ad2]">Management</span>
<span>•</span>
<span>Lecture 6 min</span>
</div>
<h3 className="text-lg font-semibold tracking-tighter text-white mb-3 group-hover:text-[#00d2ff] transition-colors line-clamp-2">
                        Pourquoi un vrai chef de projet broadcast change tout à la livraison
                    </h3>
<p className="text-sm text-[#9ca3af] line-clamp-3 leading-relaxed">
                        L'intégration ne se résume pas à tirer des câbles. Focus sur le rôle central de l'interface unique entre l'IT, l'électricité et les équipes d'exploitation.
                    </p>
</article>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6 border-t border-[#2a2e3d]/50" id="contact">
<div className="max-w-4xl mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-4 split-animate">
                    Un projet en cours ?
                </h2>
<p className="text-[#9ca3af] font-normal text-xl md:text-2xl split-animate">On est disponibles dès la phase de conception.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
<div className="order-last md:order-first">
<div className="p-8 rounded-2xl bg-[#161922] border border-[#2a2e3d]">
<h3 className="text-sm font-medium text-white uppercase tracking-wider mb-8">Votre interlocuteur</h3>
<div className="flex items-center gap-4 mb-8">
<div className="w-14 h-14 rounded-full bg-[#2a2e3d] flex items-center justify-center text-xl font-semibold text-white">SG</div>
<div>
<h4 className="text-lg font-semibold tracking-tighter text-white">Stéphane Gard</h4>
<p className="text-sm text-[#00d2ff]">Chef de projet broadcast</p>
</div>
</div>
<div className="space-y-6">
<a className="flex items-center gap-4 group" href="mailto:contact@coolnum.fr">
<div className="w-10 h-10 rounded-full border border-[#2a2e3d] bg-[#0f1117] flex items-center justify-center text-[#9ca3af] group-hover:text-[#00d2ff] group-hover:border-[#00d2ff]/50 transition-colors">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-sm text-[#9ca3af] group-hover:text-white transition-colors">contact@coolnum.fr</span>
</a>
<a className="flex items-center gap-4 group" href="tel:+33123456789">
<div className="w-10 h-10 rounded-full border border-[#2a2e3d] bg-[#0f1117] flex items-center justify-center text-[#9ca3af] group-hover:text-[#00d2ff] group-hover:border-[#00d2ff]/50 transition-colors">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<span className="text-sm text-[#9ca3af] group-hover:text-white transition-colors">+33 (0)1 23 45 67 89</span>
</a>
</div>
</div>
</div>
<div>
<form className="space-y-8" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-[#9ca3af] uppercase tracking-wider">Prénom</label>
<input className="bg-transparent border-b border-[#2a2e3d] py-2 text-white focus:outline-none focus:border-[#00d2ff] transition-colors text-sm" placeholder="Jean" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-[#9ca3af] uppercase tracking-wider">Nom</label>
<input className="bg-transparent border-b border-[#2a2e3d] py-2 text-white focus:outline-none focus:border-[#00d2ff] transition-colors text-sm" placeholder="Dupont" type="text"/>
</div>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-[#9ca3af] uppercase tracking-wider">Société</label>
<input className="bg-transparent border-b border-[#2a2e3d] py-2 text-white focus:outline-none focus:border-[#00d2ff] transition-colors text-sm" placeholder="Nom de votre chaîne ou groupe" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-[#9ca3af] uppercase tracking-wider">Email</label>
<input className="bg-transparent border-b border-[#2a2e3d] py-2 text-white focus:outline-none focus:border-[#00d2ff] transition-colors text-sm" placeholder="jean.dupont@societe.com" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs font-medium text-[#9ca3af] uppercase tracking-wider">Projet</label>
<textarea className="bg-[#161922] border border-[#2a2e3d] rounded-lg p-4 text-white focus:outline-none focus:border-[#00d2ff] transition-colors text-sm resize-none mt-2" placeholder="Décrivez votre besoin..." rows="3"></textarea>
</div>
<button className="w-full bg-white text-[#0f1117] py-4 rounded-md font-semibold text-sm hover:bg-[#f3f4f6] transition-colors" type="submit">
                            Envoyer la demande
                        </button>
</form>
</div>
</div>
</section>
</div>


<footer className="footer-sticky border-t border-[#2a2e3d]">
<div className="max-w-7xl mx-auto px-6 py-16 w-full h-full flex flex-col justify-center">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1">
<span className="text-xl font-semibold tracking-tighter text-white uppercase mb-4 block">Coolnum</span>
<p className="text-sm text-[#9ca3af]">Intégration broadcast clé en main.</p>
</div>
<div className="md:col-span-3 flex flex-col md:flex-row gap-12 md:gap-24 justify-end">
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Navigation</span>
<a className="text-sm text-[#9ca3af] hover:text-[#00d2ff] transition-colors w-max" href="#services">Services</a>
<a className="text-sm text-[#9ca3af] hover:text-[#00d2ff] transition-colors w-max" href="#projets">Projets</a>
<a className="text-sm text-[#9ca3af] hover:text-[#00d2ff] transition-colors w-max" href="#ressources">Ressources</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-semibold text-white uppercase tracking-wider mb-2">Légal</span>
<a className="text-sm text-[#9ca3af] hover:text-[#00d2ff] transition-colors" href="#">Mentions légales</a>
<a className="text-sm text-[#9ca3af] hover:text-[#00d2ff] transition-colors" href="#">Confidentialité</a>
</div>
</div>
</div>
<div className="border-t border-[#2a2e3d] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-[#5e6ad2] uppercase tracking-wider font-medium gap-4">
<div>© Coolnum 2025. Tous droits réservés.</div>
<div>Paris, France</div>
</div>
</div>
</footer>



    </>
  );
}
