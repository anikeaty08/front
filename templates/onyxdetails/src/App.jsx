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
      (function() {
                          const cursor = document.getElementById('cursor-overlay');
                          const cursorShape = cursor.querySelector('.cursor-shape');
                          let mouseX = -100, mouseY = -100;
                          let cursorX = -100, cursorY = -100;
                          let velocityX = 0, velocityY = 0;
                          let lastAngle = 0;

                          document.addEventListener('mousemove', (e) => {
                            mouseX = e.clientX;
                            mouseY = e.clientY;
                            if (cursorX === -100) {
                              cursorX = mouseX;
                              cursorY = mouseY;
                            }
                          });

                          const hoverSelectors = 'a, button, [role="button"], input, textarea, select, .group';
                          // Identify buttons that should trigger the "water fill" effect
                          const isWaterButton = (el) => el.matches('button') || (el.matches('a') && el.classList.contains('bg-white'));

                          const addHover = (e) => {
                              document.body.classList.add('is-hovering');
                              if (isWaterButton(e.currentTarget)) {
                                  document.body.classList.add('is-hovering-button');
                              }
                          };
                          const removeHover = () => {
                              document.body.classList.remove('is-hovering');
                              document.body.classList.remove('is-hovering-button');
                          };

                          const attachListeners = () => {
                              document.querySelectorAll(hoverSelectors).forEach(el => {
                                el.removeEventListener('mouseenter', addHover);
                                el.removeEventListener('mouseleave', removeHover);
                                el.addEventListener('mouseenter', addHover);
                                el.addEventListener('mouseleave', removeHover);
                              });
                          };
                          attachListeners();

                          function animate() {
                            if (cursorX !== -100) {
                              const ease = 0.85;
                              const dx = mouseX - cursorX;
                              const dy = mouseY - cursorY;
                              cursorX += dx * ease;
                              cursorY += dy * ease;

                              velocityX = dx * ease;
                              velocityY = dy * ease;
                              const speed = Math.sqrt(velocityX ** 2 + velocityY ** 2);

                              cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;

                              // Specific behavior for button hover
                              if (document.body.classList.contains('is-hovering-button')) {
                                cursorShape.style.transform = `scale(0.1)`;
                                cursorShape.style.opacity = '0';
                              } else if (document.body.classList.contains('is-hovering')) {
                                cursorShape.style.transform = `scale(1.2)`;
                                cursorShape.style.opacity = '1';
                              } else {
                                cursorShape.style.opacity = '1';
                                if (speed > 0.1) {
                                  const angle = Math.atan2(velocityY, velocityX) * (180 / Math.PI) - 90;
                                  lastAngle = angle;
                                  const stretch = Math.min(speed * 0.04, 0.6);
                                  const scaleY = 1 + stretch;
                                  const scaleX = 1 - stretch * 0.4;
                                  cursorShape.style.transform = `rotate(${angle}deg) scale(${scaleX}, ${scaleY})`;
                                } else {
                                  cursorShape.style.transform = `rotate(${lastAngle}deg) scale(1)`;
                                }
                              }
                            }
                            requestAnimationFrame(animate);
                          }
                          animate();
                        })();
    
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
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/55cff717-7314-4d27-9b17-07219eeb2ecf_3840w.png")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<nav className="fixed top-4 md:top-6 left-4 right-4 md:left-0 md:right-0 z-50 border border-black/5 bg-white/90 backdrop-blur-xl rounded-2xl md:rounded-2xl md:mx-6 xl:mx-auto xl:max-w-7xl">
<div className="flex h-20 max-w-7xl mx-auto px-4 md:px-6 items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="overflow-hidden md:w-16 md:h-16 w-15 h-12 rounded-lg relative">
<img alt="Onyx Logo" className="group-hover:opacity-100 transition-opacity duration-300 opacity-100 w-full h-full object-cover scale-150" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2aee2fd-9d23-4eec-807d-e3f6fcd6e27d_320w.png"/>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-600 font-medium">
<a className="hover:text-neutral-950 transition-colors duration-300" href="#services">
            Services
          </a>
<a className="hover:text-neutral-950 transition-colors duration-300" href="#process">
            Processus
          </a>
<a className="hover:text-neutral-950 transition-colors duration-300" href="#reviews">
            Avis
          </a>
</div>
<a className="hidden md:flex items-center gap-2 bg-neutral-950 text-white px-5 py-2.5 rounded-full text-xs font-medium hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)] btn-water" href="#book">
          Réserver
          <svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<button className="md:hidden text-neutral-950 p-2">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="min-h-screen relative flex items-center overflow-hidden pt-28 md:pt-32">

<div className="absolute inset-0 z-0">



<div className="bg-black/40 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="z-10 flex flex-col w-full h-full max-w-7xl mr-auto ml-auto pt-10 pr-6 pl-6 relative justify-center">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 w-fit">
<svg className="lucide lucide-map-pin w-3.5 h-3.5 text-neutral-400" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="text-xs font-medium text-neutral-300 tracking-wide uppercase">
            Grand Montréal
          </span>
</div>

<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1] max-w-4xl">
          Lavage et esthétique
          <br/>
<span className="text-neutral-500">automobile à domicile</span>
</h1>

<p className="text-lg text-neutral-300 font-light max-w-xl leading-relaxed mb-10">
          Nos professionnels expérimentés sont prêts a offrir des services de
          lavage et d'esthétique auto à domicile efficaces.
        </p>

<button className="bg-white text-neutral-950 px-8 py-4 rounded-full text-sm font-semibold hover:text-white transition-all duration-300 flex items-center justify-center gap-2 w-fit shadow-[0_0_25px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_-5px_rgba(56,189,248,0.6)] transform hover:-translate-y-0.5 btn-water">
<svg className="lucide lucide-chevron-right-circle w-4.5 h-4.5" data-lucide="chevron-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m10 8 4 4-4 4"></path></svg>
          Réserver Maintenant
        </button>
</div>
</section>
<section className="z-10 overflow-hidden bg-neutral-950 border-white/5 border-b pt-32 pb-32 relative">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
<div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-sky-900/10 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-rose-900/10 rounded-full blur-[120px]"></div>
</div>
<div className="z-10 max-w-6xl mr-auto ml-auto pr-6 pl-6 relative space-y-32">

<div className="flex flex-col md:flex-row gap-16 gap-x-16 gap-y-16 items-center">
<div className="w-full md:w-1/2">
<h2 className="md:text-5xl leading-tight text-4xl font-medium text-white font-playfair mb-6">
              Votre véhicule mérite mieux qu'un lavage
              <span className="italic text-neutral-500/50">ordinaire</span>
              .
            </h2>
<div className="space-y-6 text-neutral-400 text-lg font-light leading-relaxed">
<p className="">
                Vous avez investi dans votre voiture pour son confort, son
                design et ses performances. Pourtant, son entretien implique
                souvent des compromis inutiles.
              </p>
<p className="">
                Stations de lave-auto. Déplacements, attentes, horaires rigides.
                <span className="font-medium text-white">
                  Votre temps est précieux. Votre véhicule aussi.
                </span>
</p>
</div>
</div>
<div className="w-full md:w-1/2">
<div className="group relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 aspect-[4/3] flex items-center justify-center hover:border-white/20 transition-colors duration-500">
<div className="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-900/20 via-neutral-900/50 to-neutral-950 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d92139f-5dc3-4544-aaf9-0cbe57adb84c_1600w.png)] bg-cover bg-center absolute top-0 right-0 bottom-0 left-0"></div>
</div>
</div>
</div>

<div className="flex flex-col items-center text-center">
<div className="w-full max-w-3xl">
<h2 className="md:text-5xl leading-tight text-4xl font-medium text-white font-playfair mb-6">
              Les raccourcis se voient. Et finissent par
              <span className="italic text-rose-400/50">coûter cher</span>
              .
            </h2>
<div className="leading-relaxed text-lg font-light text-neutral-400 space-y-6">
<p className="" style={{}}>
                Micro-rayures, peinture ruinée, détails négligés. Produits de
                qualité moyenne. Sans parler des heures perdues à conduire,
                attendre et réorganiser votre emploi du temps pour un résultat
                qui ne correspond pas à vos attentes.
              </p>
<div className="mt-6">
<p className="mt-4 text-white font-medium">
                  Ce n’est pas de l’entretien. C’est un compromis.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-neutral-900/30 px-6 relative border-b border-white/5" id="services">
<div className="max-w-7xl mr-auto ml-auto">
<div className="max-w-3xl mb-16">
<h2 className="md:text-5xl text-4xl font-semibold text-white tracking-tight mb-6" style={{}}>
            Une expérience d'esthétique auto conçue pour ceux qui exigent
            <span className="text-white">l'excellence.</span>
</h2>
<p className="leading-relaxed text-xl font-light text-neutral-400">
            Nous offrons un service d'esthétique automobile de qualité
            supérieure, directement chez vous ou au bureau. Aucune attente.
            Aucun déplacement. Résultats professionnels.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
<div className="group p-8 rounded-2xl bg-neutral-900 border border-white/5 transition-all duration-300 hover:border-white/30">
<div className="w-full h-48 rounded-xl mb-6 overflow-hidden bg-neutral-800 border border-white/5">
<img alt="Exterior Detailing" className="transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f6155e0b-706b-422b-80e6-ae07cc44634e_800w.jpg" style={{}}/>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
              Nettoyage Extérieur
            </h3>
<p className="leading-relaxed text-sm text-neutral-400">
              Lavage à la main, décontamination de la peinture et finition pour
              restaurer la brillance.
            </p>
</div>
<div className="group p-8 rounded-2xl bg-neutral-900 border border-white/5 transition-all duration-300 hover:border-white/30">
<div className="w-full h-48 rounded-xl mb-6 overflow-hidden bg-neutral-800 border border-white/5">
<img alt="Interior Detailing" className="transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://images.unsplash.com/photo-1682858110563-3f609263d418?w=800&amp;q=80"/>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
              Nettoyage Intérieur
            </h3>
<p className="leading-relaxed text-sm text-neutral-400">
              Nettoyage minutieux et conditionnement des cuirs, tissus et
              plastiques pour un intérieur propre, raffiné et confortable.
            </p>
</div>
<div className="group transition-all duration-300 hover:border-white/30 bg-neutral-900 border-white/5 border rounded-2xl pt-8 pr-8 pb-8 pl-8">
<div className="w-full h-48 rounded-xl mb-6 overflow-hidden bg-neutral-800 border border-white/5">
<img alt="Paint Protection" className="transition-transform duration-500 group-hover:scale-110 group-hover:opacity-100 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bd7059a5-4f43-4e1b-ab2a-353529813d19_800w.png"/>
</div>
<h3 className="text-xl font-semibold text-white mb-3">
              Protection de Peinture &amp; Cirage
            </h3>
<p className="leading-relaxed text-sm text-neutral-400">
              Options de protection avancées conçues pour préserver la finition
              de votre véhicule et maintenir son apparence haut de gamme.
            </p>
</div>
</div>
<div className="flex flex-col md:flex-row md:items-center border-white/5 border-t pt-8 gap-x-8 gap-y-8 items-start justify-between">
<p className="text-sm text-white max-w-xl">
            Chaque service est effectué par des spécialistes formés utilisant
            des produits premium, sans raccourcis et sans compromis.
          </p>
<a className="inline-flex items-center gap-2 hover:bg-neutral-200 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] btn-water text-base font-medium text-neutral-950 bg-white rounded-full pt-4 pr-8 pb-4 pl-8 shadow-[0_0_15px_rgba(255,255,255,0.1)]" href="#pricing">
            Voir les Tarifs
            <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>
<section className="bg-neutral-950 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-start">
<div className="lg:w-1/3">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8 leading-tight">
            CE QUI NOUS DISTINGUE
          </h2>
<div className="text-2xl md:text-3xl font-['Playfair_Display'] italic text-neutral-400">
            "Ce n'est pas du travail à la chaîne. C'est de l'artisanat."
          </div>
</div>
<div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 text-white">
<svg className="lucide lucide-check-circle-2 w-6 h-6" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="font-medium text-white mb-1" style={{}}>
                Service à Domicile
              </h4>
<p className="text-sm text-neutral-500" style={{}}>
                Service de nettoyage haut de gamme directement chez vous ou au
                bureau.
              </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 text-white">
<svg className="lucide lucide-check-circle-2 w-6 h-6" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">
                Produits Haut de Gamme
              </h4>
<p className="text-sm text-neutral-500" style={{}}>
                Sécuritaires pour votre véhicule
              </p>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4">
<div className="mt-1 flex-shrink-0 text-white">
<svg className="lucide lucide-check-circle-2 w-6 h-6" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="font-medium text-white mb-1" style={{}}>
                Souci du Détail
              </h4>
<p className="text-sm text-neutral-500">
                Chaque détail compte pour nous.;
              </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 flex-shrink-0 text-white">
<svg className="lucide lucide-check-circle-2 w-6 h-6" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium mb-1">Service Professionnel</h4>
<p className="text-sm text-neutral-500" style={{}}>
                Service discret, ponctuel et fiable.
              </p>
</div>
</div>
<div className="flex gap-4 gap-x-4 gap-y-4">
<div className="mt-1 flex-shrink-0 text-white">
<svg className="lucide lucide-check-circle-2 w-6 h-6" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<h4 className="font-medium text-white mb-1">Résultats hors-pairs</h4>
<p className="text-sm text-neutral-500">
                Retrouvez la sensation d'un véhicule neuf
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-neutral-950 pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mx-auto relative rounded-3xl overflow-hidden bg-neutral-900 border border-white/10">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-neutral-900/0"></div>
<div className="z-10 md:p-24 flex flex-col md:flex-row md:items-center gap-12 pt-16 pr-8 pb-16 pl-8 relative gap-x-12 gap-y-12 items-start justify-between">
<div className="max-w-xl">
<h2 className="md:text-4xl text-3xl font-medium text-white tracking-tight mb-4">
              Prêt pour retrouver la sensation d'une voiture neuve ?
            </h2>
<p className="text-lg font-light text-neutral-400">
              Disponibilités limitées afin de garantir la qualité de service.
              Les rendez-vous sont réservés à l'avance.
            </p>
</div>
<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
<button className="bg-white text-neutral-950 px-8 py-4 rounded-full text-sm font-medium hover:text-white transition-all duration-300 whitespace-nowrap text-center hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.5)] btn-water">
              Prendre Rendez-vous
            </button>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">

<a className="flex items-center gap-2 mb-6 group" href="#">
<div className="relative w-8 h-6 bg-neutral-950 rounded-[45%] overflow-hidden border border-white/20 shadow-[0_0_10px_rgba(56,189,248,0.3)]">
<div className="absolute -bottom-1 -left-1 w-10 h-6 bg-sky-700/80 blur-[4px] rounded-full transform -rotate-12"></div>
<div className="absolute bottom-0 -left-1 w-8 h-3 bg-sky-400 blur-[2px] rounded-full transform -rotate-12 opacity-80"></div>
<div className="absolute top-0.5 left-1 text-white drop-shadow-[0_0_5px_rgba(255,255,255,1)]">
<svg fill="currentColor" height="10" viewbox="0 0 24 24" width="10">
<path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"></path>
</svg>
</div>
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-transparent via-transparent to-white/30 rounded-[45%]"></div>
</div>
<span className="text-2xl text-white font-['Great_Vibes'] tracking-wide pb-1">
                Onyx
              </span>
</a>
<p className="text-neutral-500 text-sm leading-relaxed">
              Élever l'entretien automobile grâce à la commodité mobile et une
              qualité sans compromis.
            </p>
</div>
<div className="">
<h4 className="text-white text-sm font-medium mb-4">Services</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li className="">
<a className="hover:text-white transition-colors" href="#">
                  Lavage d'Entretien
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Correction de Peinture
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Traitement Céramique
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Détail Intérieur
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Entreprise</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li>
<a className="hover:text-white transition-colors" href="#">
                  À Propos
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Carrières
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Confidentialité
                </a>
</li>
<li>
<a className="hover:text-white transition-colors" href="#">
                  Conditions
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Suivez-nous</h4>
<div className="flex gap-4 mb-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
<div className="text-xs text-neutral-600">
            © 2023 Onyx Mobile Detailing. Tous droits réservés.
          </div>
<div className="flex items-center gap-2 text-xs text-neutral-600">
<span className="w-2 h-2 bg-emerald-500/50 rounded-full"></span>
            Systems Operational
          </div>
</div>
</div>
</footer>
<div id="cursor-overlay">
<div className="cursor-shape">
<svg fill="currentColor" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22a7 7 0 0 0 7-7c0-2-2-5-7-13-5 8-7 11-7 13a7 7 0 0 0 7 7z"></path>
</svg>
</div>
</div>


    </>
  );
}
