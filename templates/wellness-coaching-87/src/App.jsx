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


document.write(new Date().getFullYear())


        document.addEventListener('DOMContentLoaded', () => {
            // Navbar indicator logic
            const navItems = document.querySelectorAll('.nav-item');
            const indicator = document.getElementById('active-indicator');
            const container = document.getElementById('navbar-container');
            const sections = document.querySelectorAll('section[id]');

            let activeItem = navItems[0];
            let isClickScrolling = false;

            function updateIndicator(item) {
                if (!item) return;
                const rect = item.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                
                const left = rect.left - containerRect.left;
                
                indicator.style.width = `${rect.width}px`;
                indicator.style.transform = `translateX(${left}px)`;
                indicator.style.opacity = '1';
                
                navItems.forEach(nav => {
                    nav.classList.remove('text-[#AF4B31]');
                    nav.classList.add('text-[#AF4B31]/70');
                });
                item.classList.remove('text-[#AF4B31]/70');
                item.classList.add('text-[#AF4B31]');
            }

            // 1. ScrollSpy: Update active menu based on visible section
            const observerOptions = {
                root: null,
                rootMargin: '-20% 0px -60% 0px',
                threshold: 0
            };

            const observer = new IntersectionObserver((entries) => {
                if (isClickScrolling) return; // Prevent observer updates during click scroll
                
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        const navItem = document.querySelector(`.nav-item[href="#${id}"]`);
                        if (navItem && activeItem !== navItem) {
                            activeItem = navItem;
                            updateIndicator(navItem);
                        }
                    }
                });
            }, observerOptions);

            sections.forEach(section => observer.observe(section));

            // 2. Smooth Scroll on Click
            navItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    isClickScrolling = true;
                    
                    const targetId = item.getAttribute('href');
                    const targetSection = document.querySelector(targetId);
                    
                    if (targetSection) {
                        activeItem = item;
                        updateIndicator(item);
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                        history.pushState(null, null, targetId);
                        
                        // Re-enable observer after smooth scroll completes (~800ms)
                        setTimeout(() => {
                            isClickScrolling = false;
                        }, 800);
                    }
                });
            });

            // Initialize on load
            setTimeout(() => {
                const hash = window.location.hash;
                if (hash) {
                    const target = Array.from(navItems).find(nav => nav.getAttribute('href') === hash);
                    if (target) activeItem = target;
                }
                updateIndicator(activeItem);
            }, 100);

            window.addEventListener('resize', () => {
                updateIndicator(activeItem);
            });

            // Hover Footer Logic (Vanilla JS implementation of TextHoverEffect)
            const hoverSvg = document.getElementById('hover-svg');
            const revealMask = document.getElementById('revealMask');
            const baseText = document.getElementById('base-text');

            if (hoverSvg && revealMask && baseText) {
                hoverSvg.addEventListener('mousemove', (e) => {
                    const rect = hoverSvg.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    
                    revealMask.setAttribute('cx', `${x}%`);
                    revealMask.setAttribute('cy', `${y}%`);
                });

                hoverSvg.addEventListener('mouseenter', () => {
                    baseText.style.opacity = '0.7';
                });

                hoverSvg.addEventListener('mouseleave', () => {
                    baseText.style.opacity = '0';
                });
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
      

<header className="w-full px-6 lg:px-12 absolute top-0 left-0 pt-6 md:pt-8 pb-32 bg-gradient-to-b from-[#8C3A25]/50 via-[#AF4B31]/10 to-transparent z-50 pointer-events-none">
<div className="font-poppins font-medium tracking-tight text-xl text-[#F1EBE1] pointer-events-auto text-center sm:text-left">
            Géraldine Canis
        </div>
</header>

<nav className="fixed bottom-6 sm:bottom-auto sm:top-6 left-0 w-full flex flex-col items-center justify-center gap-3 z-[200] pointer-events-none px-2 sm:px-6">
<div className="pointer-events-auto relative flex items-center justify-center gap-1 md:gap-3 bg-[#F1EBE1]/80 border border-[#AF4B31]/20 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg max-w-full overflow-x-auto no-scrollbar" id="navbar-container">

<div className="absolute left-0 top-1 h-[calc(100%-8px)] rounded-full transition-transform duration-500 ease-out bg-[#AF4B31]/10 z-0 opacity-0 pointer-events-none flex justify-center" id="active-indicator" style={{width: '108.4px'}}>
<div className="absolute -top-1.5 w-8 h-1 bg-[#AF4B31] rounded-t-full">
<div className="absolute w-12 h-6 bg-[#AF4B31]/30 rounded-full blur-md -top-2 -left-2"></div>
<div className="absolute w-8 h-6 bg-[#AF4B31]/30 rounded-full blur-md -top-1"></div>
<div className="absolute w-4 h-4 bg-[#AF4B31]/30 rounded-full blur-sm top-0 left-2"></div>
</div>
</div>

<a className="nav-item relative z-10 flex items-center justify-center text-xs font-normal tracking-widest uppercase px-4 md:px-6 py-2.5 rounded-full transition-colors hover:text-[#AF4B31] shrink-0 text-[#AF4B31]" href="#accueil">
<span className="hidden md:inline">Accueil</span>
<iconify-icon className="md:hidden text-xl" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="nav-item relative z-10 flex items-center justify-center text-xs font-normal tracking-widest uppercase px-4 md:px-6 py-2.5 rounded-full transition-colors text-[#AF4B31]/70 hover:text-[#AF4B31] shrink-0" href="#bilan">
<span className="hidden md:inline">Bilan</span>
<iconify-icon className="md:hidden text-xl" icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="nav-item relative z-10 flex items-center justify-center text-xs font-normal tracking-widest uppercase px-4 md:px-6 py-2.5 rounded-full transition-colors text-[#AF4B31]/70 hover:text-[#AF4B31] shrink-0" href="#coaching">
<span className="hidden md:inline">Coaching</span>
<iconify-icon className="md:hidden text-xl" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="nav-item relative z-10 flex items-center justify-center text-xs font-normal tracking-widest uppercase px-4 md:px-6 py-2.5 rounded-full transition-colors text-[#AF4B31]/70 hover:text-[#AF4B31] shrink-0" href="#about">
<span className="hidden md:inline">Qui je suis</span>
<iconify-icon className="md:hidden text-xl" icon="solar:user-rounded-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="nav-item relative z-10 flex items-center justify-center text-xs font-normal tracking-widest uppercase px-4 md:px-6 py-2.5 rounded-full transition-colors text-[#AF4B31]/70 hover:text-[#AF4B31] shrink-0" href="#contact">
<span className="hidden md:inline">Contact</span>
<iconify-icon className="md:hidden text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</nav>

<section className="relative pt-40 pb-40 px-6 flex flex-col items-center text-center overflow-hidden scroll-mt-0" id="accueil">

<div className="absolute inset-0 z-0 bg-gradient-to-br from-[#AF4B31] via-[#9e432c] to-[#8a3924]">
<img alt="Hero Background" className="w-full h-full object-cover opacity-50 mix-blend-overlay" src="https://cdn.midjourney.com/a7ff239c-9a91-4309-92b1-5d0aaa2bc54e/0_2.png"/>
</div>
<div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-[#F1EBE1]">
<h1 className="md:text-7xl leading-tight text-5xl font-semibold tracking-tight font-poppins mb-8 mt-4 md:mt-0">
                Reprendre le Pouvoir<br/>de sa Life
            </h1>
<p className="text-sm font-normal tracking-widest uppercase mb-12 flex items-center gap-4 opacity-90">
                Bilan de compétences · Coaching personnel · Coaching parental
            </p>
<div className="flex flex-col sm:flex-row gap-6">
<a className="rounded-full bg-[#F1EBE1] text-[#AF4B31] px-8 py-3.5 text-sm font-normal tracking-widest uppercase hover:bg-white transition-colors shadow-sm" href="#bilan">
                    Découvrir les accompagnements
                </a>
<a className="rounded-full border border-[#F1EBE1] text-[#F1EBE1] px-8 py-3.5 text-sm font-normal tracking-widest uppercase hover:bg-[#F1EBE1] hover:text-[#AF4B31] transition-colors shadow-sm" href="#contact">
                    Prendre contact
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto">
<div className="mb-20">
<p className="text-xs font-normal tracking-widest uppercase mb-6 opacity-70">Vous êtes ici</p>
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">Vous êtes à un tournant.</h2>
<div className="max-w-3xl text-lg font-light space-y-6 opacity-90 leading-relaxed">
<p>Professionnel, personnel, ou les deux. Vous sentez qu'il est temps de bouger — mais vous ne savez pas encore vers quoi, ni comment. Peut-être que vous tournez en rond depuis quelques mois. Peut-être qu'une décision importante se profile et que vous avez besoin d'y voir clair avant d'agir.</p>
<p>Ce sentiment d'être entre deux eaux, ni tout à fait là où vous étiez, ni encore là où vous voulez aller — c'est exactement là que j'interviens. Mon rôle n'est pas de vous donner des réponses toutes faites. C'est de vous aider à trouver les vôtres.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div>
<iconify-icon className="text-[40px] mb-6 text-[#AF4B31]" icon="solar:compass-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-light tracking-tight mb-4">Clarté</h3>
<p className="text-base font-light leading-relaxed opacity-80">Mettre des mots sur ce que vous ressentez, identifier ce qui vous bloque vraiment et dégager une direction qui vous ressemble.</p>
</div>
<div>
<iconify-icon className="text-[40px] mb-6 text-[#AF4B31]" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-light tracking-tight mb-4">Méthode</h3>
<p className="text-base font-light leading-relaxed opacity-80">Un accompagnement structuré, adapté à votre situation, qui avance à votre rythme et s'appuie sur vos ressources réelles.</p>
</div>
<div>
<iconify-icon className="text-[40px] mb-6 text-[#AF4B31]" icon="solar:routing-2-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="text-xl font-light tracking-tight mb-4">Mouvement</h3>
<p className="text-base font-light leading-relaxed opacity-80">Passer de la réflexion à l'action. Concrètement. Avec confiance et sans vous tromper de direction.</p>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto border-t border-[#AF4B31]/20 scroll-mt-28" id="bilan">
<div className="inline-block border border-[#AF4B31] rounded-sm px-3 py-1 mb-8">
<span className="text-xs font-normal tracking-widest uppercase opacity-80">Bilan de compétences</span>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">8 heures pour y voir clair.</h2>
<p className="text-xl font-light opacity-80 mb-16">Pas un bilan administratif. Un vrai travail sur vous.</p>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div>
<h3 className="text-2xl font-light tracking-tight mb-8">Ce qu'on fait ensemble</h3>
<div className="text-lg font-light space-y-6 opacity-90 mb-12 leading-relaxed">
<p>En 8 heures d'accompagnement individuel, on fait le point sur qui vous êtes, ce que vous avez construit, ce qui vous anime profondément — et ce que vous voulez vraiment pour la suite. Ce n'est pas un inventaire de compétences sur une fiche. C'est une exploration honnête et structurée de votre parcours, de vos valeurs et de vos aspirations.</p>
<p>Ma méthode est un mélange unique entre mon parcours d'entrepreneuse, mes expériences de productrice de projets artistiques, mes formations spécialisées et ma propre reconversion professionnelle. Je n'applique pas un protocole. J'adapte chaque bilan à la personne en face de moi.</p>
</div>
<a className="rounded-full bg-[#AF4B31] text-[#F1EBE1] px-8 py-3.5 text-sm font-normal tracking-widest uppercase hover:bg-transparent hover:text-[#AF4B31] border border-[#AF4B31] transition-colors inline-block" href="#contact">
                    Prendre contact
                </a>
</div>
<div className="bg-[#AF4B31] text-[#F1EBE1] rounded-2xl p-10 lg:p-12 shadow-sm">
<h3 className="text-xl font-normal tracking-tight mb-6">Format &amp; tarif</h3>
<ul className="space-y-4 font-light text-base opacity-90 mb-12">
<li className="flex items-start gap-4">
<span className="block w-1.5 h-1.5 rounded-full bg-[#F1EBE1] mt-2.5 flex-shrink-0"></span> 
                        8h d'accompagnement individuel
                    </li>
<li className="flex items-start gap-4">
<span className="block w-1.5 h-1.5 rounded-full bg-[#F1EBE1] mt-2.5 flex-shrink-0"></span> 
                        1 250 € — non finançable CPF
                    </li>
<li className="flex items-start gap-4">
<span className="block w-1.5 h-1.5 rounded-full bg-[#F1EBE1] mt-2.5 flex-shrink-0"></span> 
                        En présentiel / En visio
                    </li>
</ul>
<h3 className="text-xl font-normal tracking-tight mb-6">Pour qui ?</h3>
<ul className="space-y-4 font-light text-base opacity-90">
<li className="flex items-start gap-4">
<span className="block w-1.5 h-1.5 rounded-full bg-[#F1EBE1] mt-2.5 flex-shrink-0"></span> 
                        Vous envisagez une reconversion
                    </li>
<li className="flex items-start gap-4">
<span className="block w-1.5 h-1.5 rounded-full bg-[#F1EBE1] mt-2.5 flex-shrink-0"></span> 
                        Vous voulez changer de cap sans vous tromper
                    </li>
<li className="flex items-start gap-4">
<span className="block w-1.5 h-1.5 rounded-full bg-[#F1EBE1] mt-2.5 flex-shrink-0"></span> 
                        Vous avez besoin de clarté avant de décider
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto border-t border-[#AF4B31]/20 text-center">
<div className="inline-block border border-[#AF4B31] rounded-sm px-3 py-1 mb-8">
<span className="text-xs font-normal tracking-widest uppercase opacity-80">Comment ça se passe</span>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">Un bilan en trois temps</h2>
<p className="text-xl font-light opacity-80 mb-24 max-w-2xl mx-auto">Chaque bilan est unique, mais suit une progression claire pour vous amener de l'exploration à la décision.</p>
<div className="relative max-w-4xl mx-auto mb-20">
<div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-[#AF4B31]/30 -translate-y-1/2 z-0"></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
<div className="flex flex-col items-center">
<div className="size-36 rounded-full border-2 border-[#AF4B31] bg-[#F1EBE1] flex items-center justify-center mb-8 shadow-sm">
<iconify-icon className="text-[40px] text-[#AF4B31]" icon="solar:compass-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-light tracking-tight">Exploration</h3>
</div>
<div className="flex flex-col items-center">
<div className="size-36 rounded-full border-2 border-[#AF4B31] bg-[#F1EBE1] flex items-center justify-center mb-8 shadow-sm">
<iconify-icon className="text-[40px] text-[#AF4B31]" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-light tracking-tight">Analyse</h3>
</div>
<div className="flex flex-col items-center">
<div className="size-36 rounded-full border-2 border-[#AF4B31] bg-[#F1EBE1] flex items-center justify-center mb-8 shadow-sm">
<iconify-icon className="text-[40px] text-[#AF4B31]" icon="solar:target-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-light tracking-tight">Projection</h3>
</div>
</div>
</div>
<p className="text-lg font-light opacity-90 max-w-3xl mx-auto leading-relaxed border-t border-[#AF4B31]/10 pt-12">
            À l'issue de ces 8 heures, vous repartez avec une vision claire de votre situation, des pistes concrètes pour la suite, et surtout — une décision qui vient vraiment de vous.
        </p>
</section>

<section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto border-t border-[#AF4B31]/20 scroll-mt-28" id="coaching">
<div className="inline-block border border-[#AF4B31] rounded-sm px-3 py-1 mb-8">
<span className="text-xs font-normal tracking-widest uppercase opacity-80">Coaching</span>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-20">Avancer quand on se sent bloqué.</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
<div>
<h3 className="text-2xl font-light tracking-tight mb-8">Coaching développement personnel</h3>
<div className="text-lg font-light space-y-6 opacity-90 mb-10 leading-relaxed">
<p>Vous n'y voyez pas clair. On va changer ça. Vous tournez en rond, vous sentez qu'il y a quelque chose à débloquer — mais vous n'arrivez pas à mettre le doigt dessus. En séance, on travaille ensemble sur où vous en êtes, ce que vous voulez vraiment, et comment y aller concrètement.</p>
<p>Je lis derrière les lignes. Je m'appuie sur l'écoute profonde, la lecture systémique, les énergies et des questions qui font bouger les choses — même celles qu'on n'osait pas se poser.</p>
</div>
<div className="mb-8">
<span className="text-xs font-normal tracking-widest uppercase border border-[#AF4B31] px-3 py-1.5 rounded-sm text-[#AF4B31]">70 € / séance</span>
</div>
<a className="rounded-full bg-[#AF4B31] text-[#F1EBE1] px-8 py-3.5 text-sm font-normal tracking-widest uppercase hover:bg-transparent hover:text-[#AF4B31] border border-[#AF4B31] transition-colors inline-block" href="#contact">
                    Réserver une séance
                </a>
</div>
<div>
<h3 className="text-2xl font-light tracking-tight mb-8">Coaching parental</h3>
<div className="text-lg font-light space-y-6 opacity-90 mb-10 leading-relaxed">
<p>Trouver le bon équilibre avec ses enfants, ça ne s'improvise pas. Les relations parents-enfants ont profondément évolué. On veut être présents, justes, à l'écoute — mais on ne nous a pas appris comment.</p>
<p>J'élève seule mes deux enfants et j'ai développé au fil du temps une approche concrète pour créer des relations équilibrées, qui s'adapte à tous les profils et toutes les configurations familiales.</p>
</div>
<div>
<span className="text-xs font-normal tracking-widest uppercase border border-[#AF4B31] px-3 py-1.5 rounded-sm text-[#AF4B31]">70 € / séance</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto border-t border-[#AF4B31]/20">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">Ce que le coaching peut débloquer</h2>
<p className="text-xl font-light opacity-80 max-w-2xl mx-auto leading-relaxed">Chaque personne arrive avec une histoire différente. Voici ce que mes clients traversent souvent en arrivant — et ce qu'ils trouvent en repartant.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-[#AF4B31]/5 p-12 rounded-2xl border border-[#AF4B31]/10">
<h3 className="text-2xl font-normal tracking-tight mb-8">En arrivant</h3>
<ul className="space-y-5 font-light text-lg opacity-90">
<li className="flex items-start gap-4"><span className="block w-2 h-2 rounded-full bg-[#AF4B31] mt-2.5 flex-shrink-0 opacity-50"></span> Sentiment de tourner en rond</li>
<li className="flex items-start gap-4"><span className="block w-2 h-2 rounded-full bg-[#AF4B31] mt-2.5 flex-shrink-0 opacity-50"></span> Manque de clarté sur ses priorités</li>
<li className="flex items-start gap-4"><span className="block w-2 h-2 rounded-full bg-[#AF4B31] mt-2.5 flex-shrink-0 opacity-50"></span> Tension dans les relations familiales</li>
</ul>
</div>
<div className="bg-[#AF4B31]/10 p-12 rounded-2xl border border-[#AF4B31]/20">
<h3 className="text-2xl font-normal tracking-tight mb-8">En repartant</h3>
<ul className="space-y-5 font-light text-lg opacity-90">
<li className="flex items-start gap-4"><span className="block w-2 h-2 rounded-full bg-[#AF4B31] mt-2.5 flex-shrink-0"></span> Une vision claire de ce qui compte vraiment</li>
<li className="flex items-start gap-4"><span className="block w-2 h-2 rounded-full bg-[#AF4B31] mt-2.5 flex-shrink-0"></span> Des outils concrets pour avancer</li>
<li className="flex items-start gap-4"><span className="block w-2 h-2 rounded-full bg-[#AF4B31] mt-2.5 flex-shrink-0"></span> Des relations apaisées et plus équilibrées</li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto border-t border-[#AF4B31]/20 scroll-mt-28" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1">
<div className="inline-block border border-[#AF4B31] rounded-sm px-3 py-1 mb-8">
<span className="text-xs font-normal tracking-widest uppercase opacity-80">Qui je suis</span>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-10">Géraldine Canis</h2>
<div className="pl-6 border-l-2 border-[#AF4B31] mb-10">
<p className="text-xl font-light italic opacity-80 leading-relaxed">Je ne suis pas coach de formation. Je suis coach par expérience et par nécessité.</p>
</div>
<div className="text-lg font-light space-y-6 opacity-90 leading-relaxed">
<p>J'ai passé vingt ans à entreprendre, à produire, à gérer des équipes, à traverser des bifurcations professionnelles et personnelles. J'ai connu la reconversion de l'intérieur avec ses doutes, ses fausses pistes et ses decisions qui changent tout. Ce n'est pas un parcours linéaire. C'est un parcours vrai.</p>
<p>C'est ce vécu qui nourrit mon travail aujourd'hui. Pas des théories abstraites. Des outils éprouvés, une écoute réelle, et une capacité à voir ce qui bloque même quand ce n'est pas dit. Je sais reconnaître les nœuds parce que je les ai moi-même démêlés.</p>
</div>
</div>
<div className="order-1 lg:order-2 w-full aspect-[4/5] max-w-md mx-auto">
<img alt="Portrait Géraldine Canis" className="w-full h-full object-cover rounded-2xl shadow-xl rotate-2 hover:rotate-0 transition-transform duration-700 opacity-90" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto border-t border-[#AF4B31]/20">
<div className="text-center mb-24">
<div className="inline-block border border-[#AF4B31] rounded-sm px-3 py-1 mb-8">
<span className="text-xs font-normal tracking-widest uppercase opacity-80">Formations &amp; Certifications</span>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">Un socle solide, au service de votre parcours.</h2>
<p className="text-xl font-light opacity-80 max-w-3xl mx-auto leading-relaxed">Mon accompagnement repose sur des approches reconnues, que j'ai intégrées et que j'adapte avec discernement à chaque situation.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
<div className="border border-[#AF4B31]/20 border-t-2 border-t-[#AF4B31] bg-white/40 p-10 pt-12 relative rounded-b-xl shadow-sm">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#AF4B31] text-[#F1EBE1] rounded-full p-3 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:diploma-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight mb-4 text-center">Coach en développement personnel</h3>
<p className="text-base font-light opacity-80 text-center leading-relaxed">CNFDI — formation approfondie aux techniques d'accompagnement individuel et de développement des potentiels.</p>
</div>
<div className="border border-[#AF4B31]/20 border-t-2 border-t-[#AF4B31] bg-white/40 p-10 pt-12 relative rounded-b-xl shadow-sm">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#AF4B31] text-[#F1EBE1] rounded-full p-3 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:puzzle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight mb-4 text-center">Analyse Transactionnelle</h3>
<p className="text-base font-light opacity-80 text-center leading-relaxed">Formée à ATORG — outil puissant pour comprendre les dynamiques relationnelles et les schémas qui freinent l'évolution.</p>
</div>
<div className="border border-[#AF4B31]/20 border-t-2 border-t-[#AF4B31] bg-white/40 p-10 pt-12 relative rounded-b-xl shadow-sm">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#AF4B31] text-[#F1EBE1] rounded-full p-3 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:share-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight mb-4 text-center">PNL - Programmation Neuro Linguistique</h3>
<p className="text-base font-light opacity-80 text-center leading-relaxed">Certifiée IFPNL — Programmation Neuro-Linguistique pour travailler sur les croyances limitantes et les resources internes.</p>
</div>
<div className="border border-[#AF4B31]/20 border-t-2 border-t-[#AF4B31] bg-white/40 p-10 pt-12 relative rounded-b-xl shadow-sm">
<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#AF4B31] text-[#F1EBE1] rounded-full p-3 flex items-center justify-center">
<iconify-icon className="text-2xl" icon="solar:case-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-xl font-normal tracking-tight mb-4 text-center">Consultante en Transitions Professionnelles</h3>
<p className="text-base font-light opacity-80 text-center leading-relaxed">Formée et Certifiée avec Garance &amp; Moi — accompagnement spécialisé des personnes en reconversion ou en changement de cap professionnel.</p>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto border-t border-[#AF4B31]/20">
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-20 text-center">Pourquoi travailler avec moi ?</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16">
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<img alt="Écoute" className="size-24 object-cover border-[#AF4B31]/10 border rounded-full mb-8 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<h3 className="text-2xl font-light tracking-tight mb-6">Une écoute sans filtre</h3>
<p className="text-lg font-light opacity-90 leading-relaxed">Je n'écoute pas pour répondre. J'écoute pour comprendre ce qui se dit et ce qui ne se dit pas encore. Dans chaque séance, vous avez l'espace pour être pleinement vous-même, sans jugement.</p>
</div>
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<img alt="Outils" className="size-24 rounded-full object-cover mb-8 shadow-sm border border-[#AF4B31]/10" src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<h3 className="text-2xl font-light tracking-tight mb-6">Des outils concrets</h3>
<p className="text-lg font-light opacity-90 leading-relaxed">Mon accompagnement n'est pas théorique. Chaque séance produit quelque chose de tangible : une clarification, une décision, un pas concret. Vous repartez avec des éléments que vous pouvez utiliser dès le lendemain.</p>
</div>
<div className="flex flex-col items-center md:items-start text-center md:text-left">
<img alt="Sur-mesure" className="size-24 rounded-full object-cover mb-8 shadow-sm border border-[#AF4B31]/10" src="https://images.unsplash.com/photo-1542125387-c71274d94f0a?auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<h3 className="text-2xl font-light tracking-tight mb-6">Un regard sur-mesure</h3>
<p className="text-lg font-light opacity-90 leading-relaxed">Il n'y a pas deux parcours identiques. J'adapte mon approche à votre histoire, votre rythme et vos objectifs. Ce qui fonctionne pour l'un ne fonctionne pas forcément pour l'autre et je le sais.</p>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto border-t border-[#AF4B31]/20 scroll-mt-28" id="contact">
<div className="mb-16 text-center md:text-left">
<div className="inline-block border border-[#AF4B31] rounded-sm px-3 py-1 mb-8">
<span className="text-xs font-normal tracking-widest uppercase opacity-80">Contact</span>
</div>
<h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8">Parlons-en.</h2>
<p className="text-xl font-light opacity-80 max-w-3xl leading-relaxed">Vous avez une question ? Vous voulez en savoir plus avant de vous lancer ? C'est tout à fait normal. Rien ne s'engage en écrivant. Je vous réponds personnellement sous 48h.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-stretch">
<div className="bg-[#AF4B31] text-[#F1EBE1] p-10 lg:p-14 rounded-2xl flex flex-col justify-center shadow-sm">
<h3 className="text-2xl font-normal tracking-tight mb-10">Ce que vous pouvez me demander</h3>
<ul className="space-y-6 font-light text-lg opacity-90 mb-14">
<li className="flex items-start gap-4">
<span className="block w-2 h-2 rounded-full bg-[#F1EBE1] mt-2.5 flex-shrink-0 opacity-70"></span> 
                        En savoir plus sur le bilan de compétences
                    </li>
<li className="flex items-start gap-4">
<span className="block w-2 h-2 rounded-full bg-[#F1EBE1] mt-2.5 flex-shrink-0 opacity-70"></span> 
                        Comprendre comment fonctionne une séance de coaching
                    </li>
<li className="flex items-start gap-4">
<span className="block w-2 h-2 rounded-full bg-[#F1EBE1] mt-2.5 flex-shrink-0 opacity-70"></span> 
                        Savoir si mon accompagnement correspond à votre situation
                    </li>
</ul>
<a className="rounded-full bg-[#F1EBE1] text-[#AF4B31] px-8 py-3.5 text-sm font-normal tracking-widest uppercase hover:bg-white transition-colors self-start border border-transparent" href="mailto:novae@geraldine.canis.com">
                    Écrire à Géraldine
                </a>
</div>
<div className="p-6 flex flex-col justify-center">
<h3 className="text-2xl font-normal tracking-tight mb-8">Pour me contacter</h3>
<p className="text-lg font-light mb-8 opacity-90 leading-relaxed">Ecrivez moi à <a className="font-normal underline underline-offset-4 decoration-1" href="mailto:novae@geraldine.canis.com">novae@geraldine.canis.com</a> en précisant :</p>
<ul className="space-y-4 font-light text-lg opacity-90 mb-10 list-disc pl-6 marker:text-[#AF4B31]/50">
<li>Votre prénom et votre adresse email</li>
<li>Ce qui vous intéresse : Bilan de compétences, Coaching personnel, Coaching parental, ou Autre</li>
<li>Votre message — quelques lignes suffisent</li>
</ul>
<p className="text-lg font-light italic opacity-70">Je vous réponds dans les 48h.</p>
</div>
</div>
</section>

<footer className="bg-[#AF4B31] relative h-fit rounded-t-3xl overflow-hidden mt-12 sm:pb-0 pb-24 border-t border-[#AF4B31]/20 mx-4 md:mx-8 mb-4">

<div className="absolute inset-0 z-0 pointer-events-none" style={{background: 'radial-gradient(125% 125% at 50% 10%, rgba(241, 235, 225, 0.05) 0%, transparent 100%)'}}></div>
<div className="max-w-7xl mx-auto px-8 lg:px-14 pt-16 pb-8 z-40 relative">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">

<div className="flex flex-col space-y-4 text-[#F1EBE1]">
<div className="flex items-center space-x-2">
<span className="text-3xl font-semibold tracking-tight font-poppins">Géraldine Canis</span>
</div>
<p className="text-sm font-light leading-relaxed opacity-80">
                        Reprendre le pouvoir de sa life. Accompagnement, bilan de compétences et coaching sur-mesure pour renouer avec l'essentiel.
                    </p>
</div>

<div>
<h4 className="text-[#F1EBE1] text-sm font-normal tracking-widest uppercase mb-6 opacity-60">
                        Plan du site
                    </h4>
<ul className="space-y-4 font-light text-sm text-[#F1EBE1]">
<li>
<a className="hover:text-white transition-colors opacity-90 hover:opacity-100" href="#bilan">Bilan de compétences</a>
</li>
<li>
<a className="hover:text-white transition-colors opacity-90 hover:opacity-100" href="#coaching">Coaching personnel</a>
</li>
<li>
<a className="hover:text-white transition-colors opacity-90 hover:opacity-100" href="#about">Qui je suis</a>
</li>
</ul>
</div>

<div>
<h4 className="text-[#F1EBE1] text-sm font-normal tracking-widest uppercase mb-6 opacity-60">
                        Légal
                    </h4>
<ul className="space-y-4 font-light text-sm text-[#F1EBE1]">
<li>
<a className="hover:text-white transition-colors opacity-90 hover:opacity-100" href="#">Mentions Légales</a>
</li>
<li>
<a className="hover:text-white transition-colors opacity-90 hover:opacity-100" href="#">Politique de Confidentialité</a>
</li>
<li>
<a className="hover:text-white transition-colors opacity-90 hover:opacity-100" href="#">CGV</a>
</li>
</ul>
</div>

<div>
<h4 className="text-[#F1EBE1] text-sm font-normal tracking-widest uppercase mb-6 opacity-60">
                        Contact
                    </h4>
<ul className="space-y-5 font-light text-sm text-[#F1EBE1]">
<li className="flex items-center space-x-3 opacity-90">
<iconify-icon className="text-xl" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<a className="hover:text-white transition-colors" href="mailto:novae@geraldine.canis.com">
                                novae@geraldine.canis.com
                            </a>
</li>
<li className="flex items-center space-x-3 opacity-90">
<iconify-icon className="text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span>France, En présentiel ou Visio</span>
</li>
</ul>
</div>
</div>
<hr className="border-t border-[#F1EBE1]/20 my-8"/>

<div className="flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-widest uppercase text-[#F1EBE1] space-y-6 md:space-y-0 opacity-80">

<div className="flex space-x-6">
<a aria-label="LinkedIn" className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="mdi:linkedin"></iconify-icon>
</a>
<a aria-label="Instagram" className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="mdi:instagram"></iconify-icon>
</a>
<a aria-label="TikTok" className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="ic:outline-tiktok"></iconify-icon>
</a>
<a aria-label="YouTube" className="hover:text-white transition-colors" href="#">
<iconify-icon className="text-2xl" icon="mdi:youtube"></iconify-icon>
</a>
</div>

<p className="text-center md:text-left">
                    © 2026 Géraldine Canis. Tous droits réservés.
                </p>
</div>
</div>

<div className="hidden lg:flex h-[28rem] -mt-36 -mb-20 w-full relative z-50 pointer-events-auto">
<svg className="select-none uppercase cursor-pointer" height="100%" id="hover-svg" viewbox="0 0 300 100" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient cx="50%" cy="50%" gradientunits="userSpaceOnUse" id="textGradient" r="25%">
<stop offset="0%" stop-color="#F1EBE1"></stop>
<stop offset="50%" stop-color="#ffffff"></stop>
<stop offset="100%" stop-color="#F1EBE1"></stop>
</lineargradient>
<radialgradient cx="50%" cy="50%" gradientunits="userSpaceOnUse" id="revealMask" r="15%">
<stop offset="0%" stop-color="white"></stop>
<stop offset="100%" stop-color="black"></stop>
</radialgradient>
<mask id="textMask">
<rect fill="url(#revealMask)" height="100%" width="100%" x="0" y="0"></rect>
</mask>
</defs>

<text className="fill-transparent stroke-[#F1EBE1]/10 font-poppins text-5xl font-bold" dominant-baseline="middle" id="base-text" strokeWidth="0.3" style={{opacity: '0', transition: 'opacity 0.3s ease-out'}} text-anchor="middle" x="50%" y="50%">
                    GÉRALDINE
                </text>

<text className="fill-transparent stroke-[#F1EBE1]/40 font-poppins text-5xl font-bold hover-stroke-text pointer-events-none" dominant-baseline="middle" strokeWidth="0.3" text-anchor="middle" x="50%" y="50%">
                    GÉRALDINE
                </text>

<text className="fill-transparent font-poppins text-5xl font-bold pointer-events-none" dominant-baseline="middle" mask="url(#textMask)" stroke="url(#textGradient)" strokeWidth="0.3" text-anchor="middle" x="50%" y="50%">
                    GÉRALDINE
                </text>
</svg>
</div>
</footer>


    </>
  );
}
