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



        document.addEventListener('DOMContentLoaded', () => {
            // Initialisation des icones Lucide
            lucide.createIcons();

            // Scroll Reveal Animation
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-x-[2rem]', 'translate-x-[-2rem]');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach((el) => {
                observer.observe(el);
            });

            // Navbar Blur effect on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.replace('bg-white/50', 'bg-white/95');
                    navbar.classList.add('shadow-sm');
                } else {
                    navbar.classList.replace('bg-white/95', 'bg-white/50');
                    navbar.classList.remove('shadow-sm');
                }
            });

            // Accordion FAQ Logic
            const accordions = document.querySelectorAll('.accordion-btn');
            accordions.forEach(btn => {
                btn.addEventListener('click', function() {
                    const icon = this.querySelector('iconify-icon');
                    const content = this.nextElementSibling;
                    
                    if (content.style.maxHeight) {
                        content.style.maxHeight = null;
                        icon.classList.remove('rotate-180');
                    } else {
                        // Ferme les autres
                        accordions.forEach(otherBtn => {
                            if (otherBtn !== this) {
                                otherBtn.nextElementSibling.style.maxHeight = null;
                                const otherIcon = otherBtn.querySelector('iconify-icon');
                                if (otherIcon) otherIcon.classList.remove('rotate-180');
                            }
                        });
                        content.style.maxHeight = content.scrollHeight + "px";
                        icon.classList.add('rotate-180');
                    }
                });
            });

            // Form Submit Simulation
            const form = document.getElementById('contact-form');
            const successMsg = document.getElementById('success-msg');
            
            if(form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    form.style.opacity = '0';
                    setTimeout(() => {
                        form.classList.add('hidden');
                        successMsg.classList.remove('hidden');
                        successMsg.classList.add('animate-pulse');
                        setTimeout(() => successMsg.classList.remove('animate-pulse'), 1000);
                    }, 300);
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
      

<nav className="fixed top-0 w-full z-50 backdrop-blur-xl transition-all duration-300 border-b border-transparent" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center group" href="#">
<span className="text-xl font-medium tracking-tight text-[#0A0A0A]">Sola<span className="text-[#0EA5E9]">web</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-base font-normal">
<a className="text-[#64748B] hover:text-[#0A0A0A] transition-colors" href="#services">Services</a>
<a className="text-[#64748B] hover:text-[#0A0A0A] transition-colors" href="#portfolio">Portfolio</a>
<a className="text-[#64748B] hover:text-[#0A0A0A] transition-colors" href="#pourquoi-nous">Pourquoi nous</a>
<a className="text-[#64748B] hover:text-[#0A0A0A] transition-colors" href="#apropos">À propos</a>
<a className="text-[#64748B] hover:text-[#0A0A0A] transition-colors" href="#faq">FAQ</a>
</div>
<a className="bg-[#0A0A0A] text-white px-5 py-2.5 rounded-full text-base font-normal hover:bg-gray-800 transition-all shadow-lg shadow-black/5 hover:shadow-black/10 flex items-center gap-2" href="#contact">
                Me contacter <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</nav>

<main className="min-h-screen flex overflow-hidden bg-gradient-to-br from-[#EFF8FF] via-[#F0EEFF] to-[#EFF8FF] pt-20 relative items-center justify-center">
<div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
<svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0EA5E9" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="absolute top-20 left-[15%] w-72 h-72 bg-[#0EA5E9] rounded-full mix-blend-multiply filter blur-[90px] opacity-30 animate-pulse" style={{animationDuration: '6s'}}></div>
<div className="absolute bottom-20 right-[10%] w-96 h-96 bg-[#4338CA] rounded-full mix-blend-multiply filter blur-[120px] opacity-20 animate-pulse" style={{animationDuration: '8s'}}></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#38BDF8] rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-pulse" style={{animationDuration: '7s'}}></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full reveal transition-all duration-1000 ease-out">
<div className="relative inline-flex items-center justify-center w-24 h-24 mb-8 bg-white/40 backdrop-blur-md rounded-full shadow-lg border border-white/50">
<div className="icon-gradient relative flex items-center justify-center">
<iconify-icon className="text-6xl" icon="solar:global-linear" strokeWidth="1"></iconify-icon>
<iconify-icon className="text-2xl absolute" icon="solar:star-fall-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-[#0A0A0A] leading-[1.05] tracking-tight mb-6">
                Votre site, créé avec soin. <br className="hidden lg:block"/>
                Livré avec <span className="text-[#0EA5E9] relative">
                    le sourire
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#38BDF8]/40" preserveaspectratio="none" viewbox="0 0 100 10"><path d="M0 5 Q 50 15 100 5" fill="none" stroke="currentColor" strokeWidth="2"></path></svg>
</span>.
            </h1>
<p className="md:text-2xl leading-relaxed text-xl text-[#64748B] font-extralight max-w-3xl mr-auto mb-10 ml-auto">Situé au cœur de Toulon. De la première discussion à la mise en ligne, je vous accompagne personnellement. Pas de jargon, pas de surprise — juste un site dont vous êtes fier.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#0A0A0A] text-white px-7 py-3.5 rounded-full text-base font-normal hover:bg-gray-800 transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-2" href="#services">
                    Voir les formules <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white text-[#0A0A0A] border border-gray-200 px-7 py-3.5 rounded-full text-base font-normal hover:border-gray-300 hover:bg-gray-50 transition-all flex items-center justify-center gap-2" href="#portfolio">
                    Voir les réalisations
                </a>
</div>
</div>
</main>

<section className="bg-[#F8FAFC] pt-32 pb-32" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal transition-all duration-700 ease-out">
<span className="text-[#94A3B8] font-normal tracking-widest uppercase text-sm mb-3 block">Nos Formules</span>
<h2 className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] tracking-tight">Des tarifs clairs, sans surprise.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

<div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group reveal" style={{transitionDelay: '100ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#38BDF8] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl"></div>
<h3 className="text-xl font-medium text-[#0A0A0A] tracking-tight mb-2">Starter</h3>
<p className="text-base font-extralight text-[#64748B] mb-6">Idéal pour une présence rapide et efficace en ligne.</p>
<div className="text-4xl font-medium text-[#0A0A0A] tracking-tight mb-8">149€</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-base font-extralight text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Site 1 page
                        </li>
<li className="flex items-start gap-3 text-base font-extralight text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Formulaire de contact
                        </li>
<li className="flex items-start gap-3 text-base font-extralight text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            100% Responsive (Mobile/PC)
                        </li>
<li className="flex items-start gap-3 text-base font-extralight text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Accompagnement inclus
                        </li>
<li className="flex items-start gap-3 text-base font-extralight text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Livré en 5 jours
                        </li>
</ul>
<a className="block w-full text-center bg-gray-50 text-[#0A0A0A] font-normal text-base py-3.5 rounded-xl border border-gray-200 group-hover:bg-[#F0F9FF] group-hover:border-[#0EA5E9] group-hover:text-[#0EA5E9] transition-all" href="#contact">Choisir Starter</a>
</div>

<div className="bg-gradient-to-b from-[#EFF8FF] to-[#EEF2FF] rounded-[2.5rem] p-10 border border-[#0EA5E9]/20 shadow-2xl shadow-[#0EA5E9]/10 hover:-translate-y-2 transition-all duration-300 relative group reveal z-10" style={{transitionDelay: '200ms'}}>
<div className="absolute top-5 right-5 bg-gradient-to-r from-[#38BDF8] to-[#4338CA] text-white text-sm font-normal uppercase tracking-widest py-1.5 px-3.5 rounded-full shadow-sm">Populaire</div>
<h3 className="text-xl font-medium text-[#0A0A0A] tracking-tight mb-2">Pro</h3>
<p className="text-base font-extralight text-[#64748B] mb-6">Pour les entreprises qui veulent se démarquer.</p>
<div className="text-4xl font-medium text-[#0EA5E9] tracking-tight mb-8">299€</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-base font-extralight text-[#0A0A0A]">
<iconify-icon className="text-[#4338CA] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Site 3 à 5 pages
                        </li>
<li className="flex items-start gap-3 text-base font-extralight text-[#0A0A0A]">
<iconify-icon className="text-[#4338CA] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Design sur-mesure
                        </li>
<li className="flex items-start gap-3 text-base font-extralight text-[#0A0A0A]">
<iconify-icon className="text-[#4338CA] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Formulaire de contact
                        </li>
<li className="flex items-start gap-3 text-base font-extralight text-[#0A0A0A]">
<iconify-icon className="text-[#4338CA] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            100% Responsive (Mobile/PC)
                        </li>
<li className="flex items-start gap-3 text-base font-extralight text-[#0A0A0A]">
<iconify-icon className="text-[#4338CA] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Livré en 10 jours
                        </li>
</ul>
<a className="block w-full text-center bg-[#0A0A0A] text-white font-normal text-base py-3.5 rounded-xl hover:bg-[#0EA5E9] transition-all shadow-lg shadow-[#0EA5E9]/20" href="#contact">Choisir Pro</a>
</div>

<div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group reveal" style={{transitionDelay: '300ms'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#4338CA] to-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-opacity rounded-t-3xl"></div>
<h3 className="text-xl font-medium text-[#0A0A0A] tracking-tight mb-2">Premium</h3>
<p className="text-base font-extralight text-[#64748B] mb-6">La solution complète avec toutes les fonctionnalités.</p>
<div className="text-4xl font-medium text-[#0A0A0A] tracking-tight mb-8">499€</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-base font-extralight text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Site 5 à 8 pages
                        </li>
<li className="flex items-start gap-3 text-base font-extralight text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Galerie photos intégrée
                        </li>
<li className="flex items-start gap-3 text-base font-extralight text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Formulaire de contact
                        </li>
<li className="flex items-start gap-3 text-base font-extralight text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            100% Responsive (Mobile/PC)
                        </li>
<li className="flex items-start gap-3 text-base font-extralight text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
                            Livré en 15 jours
                        </li>
</ul>
<a className="block w-full text-center bg-gray-50 text-[#0A0A0A] font-normal text-base py-3.5 rounded-xl border border-gray-200 group-hover:bg-[#F0F9FF] group-hover:border-[#0EA5E9] group-hover:text-[#0EA5E9] transition-all" href="#contact">Choisir Premium</a>
</div>
</div>
<div className="mt-12 text-center reveal transition-all duration-700 delay-500">
<a className="inline-block text-base text-[#94A3B8] font-extralight hover:text-[#0EA5E9] transition-colors border-b border-transparent hover:border-[#0EA5E9]/30 pb-0.5" href="#contact">
                    Maintenance &amp; suivi mensuel disponible sur demande
                </a>
</div>
</div>
</section>

<section className="bg-[#FAFAFA] pt-32 pb-32" id="portfolio">
<div className="max-w-6xl mx-auto px-6">

<div className="flex flex-col reveal transition-all duration-700 ease-out text-center mb-12 items-center">
<div className="flex items-center gap-2 text-[#4F46E5] mb-4">
<i className="w-3.5 h-3.5" data-lucide="wand-2" strokeWidth="2"></i>
<span className="uppercase text-xs font-medium text-[#0EA5E9] tracking-widest">Nos réalisations</span>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-[#0A0A0A] tracking-tight leading-[1.15] mb-5 max-w-2xl">
                    Des projets pensés pour <br className="hidden md:block"/>
<span className="bg-clip-text text-transparent bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-sky-400 to-sky-600">sublimer</span> chaque marque
                </h2>
<p className="text-[#64748B] text-base font-normal leading-relaxed max-w-2xl">
                    Notre mission est simple : transformer une idée en une expérience web mémorable qui attire, engage et convertit.
                </p>
</div>

<div className="flex justify-center items-center gap-3 mb-16 reveal" style={{transitionDelay: '100ms'}}>
<span className="bg-[#0A0A0A] text-white px-6 py-2 rounded-full text-sm font-medium transition-all shadow-md shadow-black/10 cursor-default">Site web</span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

<div className="bg-white rounded-[24px] p-3 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full reveal" style={{transitionDelay: '200ms'}}>
<div className="aspect-[1.5] rounded-[16px] overflow-hidden bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] relative mb-5 flex items-center justify-center">
<div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-200 via-transparent to-transparent"></div>
<div className="w-[85%] h-[80%] bg-white rounded-t-xl border-x border-t border-gray-200 shadow-2xl flex flex-col overflow-hidden relative z-10 group-hover:translate-y-[-4px] transition-transform duration-500">

<div className="h-6 border-b border-gray-100 bg-gray-50 flex items-center px-3 gap-1.5 shrink-0">
<div className="w-2 h-2 rounded-full bg-red-400"></div>
<div className="w-2 h-2 rounded-full bg-amber-400"></div>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>

<div className="flex-1 p-4 bg-white flex flex-col gap-3">
<div className="h-3 w-1/4 bg-gray-100 rounded-full mb-2"></div>
<div className="flex gap-4 flex-1">
<div className="flex-1 space-y-2 mt-2">
<div className="h-2 w-3/4 bg-gray-200 rounded-full"></div>
<div className="h-2 w-1/2 bg-gray-100 rounded-full"></div>
<div className="h-6 w-1/3 bg-blue-50 rounded-md mt-4"></div>
</div>
<div className="w-1/2 bg-gray-50 rounded-lg border border-gray-100"></div>
</div>
</div>
</div>
</div>
<div className="px-2 pb-2 flex flex-col flex-grow">
<h3 className="text-base font-medium text-[#0A0A0A] mb-2 uppercase tracking-tight">LUMINA</h3>
<p className="text-base text-[#64748B] font-normal leading-relaxed mb-6 flex-grow">
                            Boutique en ligne moderne pour une marque de luminaires design. Expérience d'achat fluide et minimaliste.
                        </p>
<div className="w-full h-px bg-gray-100 mb-4"></div>
<div className="flex justify-end">
<a className="inline-flex items-center gap-1.5 text-xs font-medium text-[#94A3B8] group-hover:text-[#0A0A0A] transition-colors uppercase tracking-widest" href="#">
                                Voir le projet <i className="w-3.5 h-3.5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="bg-white rounded-[24px] p-3 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full reveal" style={{transitionDelay: '300ms'}}>
<div className="aspect-[1.5] rounded-[16px] overflow-hidden bg-gradient-to-br from-[#0B0F19] to-[#1A1B3A] relative mb-5 flex items-center justify-center">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-indigo-500 via-transparent to-transparent"></div>
<div className="w-[85%] h-[80%] bg-[#0B0F19] rounded-t-xl border-x border-t border-white/10 shadow-2xl flex flex-col overflow-hidden relative z-10 group-hover:translate-y-[-4px] transition-transform duration-500">

<div className="h-6 border-b border-white/10 bg-[#1A1D24] flex items-center px-3 gap-1.5 shrink-0">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>

<div className="flex-1 flex">

<div className="w-1/4 border-r border-white/5 p-2 space-y-2 mt-2">
<div className="h-2 w-full bg-white/10 rounded-full"></div>
<div className="h-2 w-3/4 bg-white/5 rounded-full"></div>
<div className="h-2 w-4/5 bg-white/5 rounded-full"></div>
</div>

<div className="flex-1 p-3 flex flex-col gap-2">
<div className="h-8 w-full bg-indigo-500/20 border border-indigo-500/20 rounded-md"></div>
<div className="flex gap-2 flex-1">
<div className="flex-1 bg-white/5 rounded-md"></div>
<div className="flex-1 bg-white/5 rounded-md"></div>
</div>
</div>
</div>
</div>
</div>
<div className="px-2 pb-2 flex flex-col flex-grow">
<h3 className="text-base font-medium text-[#0A0A0A] mb-2 uppercase tracking-tight">DATAFLOW</h3>
<p className="text-base text-[#64748B] font-normal leading-relaxed mb-6 flex-grow">
                            Site vitrine et dashboard pour une solution SaaS B2B. Interface sombre, épurée et orientée conversion.
                        </p>
<div className="w-full h-px bg-gray-100 mb-4"></div>
<div className="flex justify-end">
<a className="inline-flex items-center gap-1.5 text-xs font-medium text-[#94A3B8] group-hover:text-[#0A0A0A] transition-colors uppercase tracking-widest" href="#">
                                Voir le projet <i className="w-3.5 h-3.5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="bg-white rounded-[24px] p-3 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full reveal" style={{transitionDelay: '400ms'}}>
<div className="aspect-[1.5] rounded-[16px] overflow-hidden bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] relative mb-5 flex items-center justify-center">
<div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
<div className="w-[85%] h-[80%] bg-[#FAF9F6] rounded-t-xl border-x border-t border-amber-900/10 shadow-2xl flex flex-col overflow-hidden relative z-10 group-hover:translate-y-[-4px] transition-transform duration-500">

<div className="h-6 border-b border-gray-200/50 bg-white flex items-center px-3 gap-1.5 shrink-0">
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
</div>

<div className="flex-1 flex flex-col items-center justify-center p-4 gap-3 text-center relative">
<div className="absolute inset-0 bg-amber-900/5"></div>
<div className="w-10 h-10 rounded-full bg-amber-100 mb-2 relative z-10 border border-amber-200"></div>
<div className="h-2 w-1/3 bg-amber-900/40 rounded-full relative z-10"></div>
<div className="h-1.5 w-1/2 bg-amber-900/20 rounded-full relative z-10"></div>
<div className="h-6 w-24 bg-amber-900 rounded-full mt-2 relative z-10"></div>
</div>
</div>
</div>
<div className="px-2 pb-2 flex flex-col flex-grow">
<h3 className="text-base font-medium text-[#0A0A0A] mb-2 uppercase tracking-tight">L'ATELIER CULINAIRE</h3>
<p className="text-base text-[#64748B] font-normal leading-relaxed mb-6 flex-grow">
                            Site vitrine élégant pour un restaurant gastronomique. Intégration d'un menu dynamique et module de réservation.
                        </p>
<div className="w-full h-px bg-gray-100 mb-4"></div>
<div className="flex justify-end">
<a className="inline-flex items-center gap-1.5 text-xs font-medium text-[#94A3B8] group-hover:text-[#0A0A0A] transition-colors uppercase tracking-widest" href="#">
                                Voir le projet <i className="w-3.5 h-3.5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>

<div className="bg-white rounded-[24px] p-3 border border-gray-200/60 shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full reveal" style={{transitionDelay: '500ms'}}>
<div className="aspect-[1.5] rounded-[16px] overflow-hidden bg-[#18181B] relative mb-5 flex items-center justify-center">
<div className="w-[85%] h-[80%] bg-zinc-900 rounded-t-xl border-x border-t border-white/10 shadow-2xl flex flex-col overflow-hidden relative z-10 group-hover:translate-y-[-4px] transition-transform duration-500">

<div className="h-6 border-b border-white/5 bg-black flex items-center px-3 gap-1.5 shrink-0">
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
<div className="w-2 h-2 rounded-full bg-white/20"></div>
</div>

<div className="flex-1 p-3 grid grid-cols-2 gap-2">
<div className="bg-zinc-800 rounded-md row-span-2 relative overflow-hidden">
<div className="absolute bottom-2 left-2 h-2 w-1/2 bg-white/20 rounded-full"></div>
</div>
<div className="bg-zinc-800 rounded-md h-12 relative overflow-hidden"></div>
<div className="bg-zinc-800 rounded-md h-16 relative overflow-hidden"></div>
</div>
</div>
</div>
<div className="px-2 pb-2 flex flex-col flex-grow">
<h3 className="text-base font-medium text-[#0A0A0A] mb-2 uppercase tracking-tight">STUDIO NOVA</h3>
<p className="text-base text-[#64748B] font-normal leading-relaxed mb-6 flex-grow">
                            Portfolio immersif pour un cabinet d'architecture. Navigation fluide et mise en avant visuelle des projets.
                        </p>
<div className="w-full h-px bg-gray-100 mb-4"></div>
<div className="flex justify-end">
<a className="inline-flex items-center gap-1.5 text-xs font-medium text-[#94A3B8] group-hover:text-[#0A0A0A] transition-colors uppercase tracking-widest" href="#">
                                Voir le projet <i className="w-3.5 h-3.5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>

<div className="reveal text-center mt-16" style={{transitionDelay: '600ms'}}>
<a className="inline-flex items-center justify-center hover:bg-[#4F46E5] transition-all shadow-[#6366F1]/25 uppercase gap-2 text-xs font-medium text-white tracking-widest bg-[#0EA5E9] rounded-xl pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg" href="#contact">
                    Voir toutes nos réalisations
                </a>
</div>
</div>
</section>

<section className="text-white bg-[#171717] pt-32 pb-32" id="pourquoi-nous">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="reveal transition-all duration-700 ease-out mb-16">
<div className="flex items-center gap-2 mb-6 text-[#A1A1AA]">
<iconify-icon className="text-base" icon="solar:eye-closed-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium tracking-widest uppercase text-sm">Notre vision</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-white tracking-tight leading-[1.05] mb-6">
                    Créer des <span className="text-[#0EA5E9]">expériences</span> qui<br className="hidden lg:block"/> marquent, pas juste des designs
                </h2>
<p className="text-lg text-[#A1A1AA] font-normal leading-relaxed max-w-xl">
                    Chaque projet est une collaboration, une vision commune entre ton ambition et notre savoir-faire.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">
<div className="bg-[#222222] p-10 rounded-[1.5rem] border border-white/5 flex flex-col items-center text-center hover:bg-[#2A2A2A] transition-colors reveal" style={{transitionDelay: '100ms'}}>
<div className="relative w-20 h-20 flex items-center justify-center mb-6">
<div className="blur-[30px] bg-[#0EA5E9] opacity-30 rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon className="text-[3.5rem] text-[#818CF8] z-10 relative" height="56" icon="solar:rocket-outline" style={{color: 'rgb(14, 165, 233)'}} width="56"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Livraison rapide</h3>
<p className="leading-relaxed text-base text-[#A1A1AA] font-extralight">De 5 à 15 jours chrono selon la formule choisie. Votre projet prend vie sans attendre.</p>
</div>
<div className="flex flex-col hover:bg-[#2A2A2A] transition-colors reveal text-center bg-[#222222] border-white/5 border rounded-[1.5rem] pt-10 pr-10 pb-10 pl-10 items-center" style={{transitionDelay: '200ms'}}>
<div className="relative w-20 h-20 flex items-center justify-center mb-6">
<div className="blur-[30px] bg-[#0EA5E9] opacity-30 rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon className="text-[3.5rem] text-[#818CF8] z-10 relative" height="56" icon="solar:wallet-outline" style={{color: 'rgb(14, 165, 233)'}} width="56"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Prix transparents</h3>
<p className="leading-relaxed text-base text-[#A1A1AA] font-extralight">Des forfaits clairs dès le départ. Il n'y a absolument aucun frais caché ou surprise.</p>
</div>
<div className="bg-[#222222] p-10 rounded-[1.5rem] border border-white/5 flex flex-col items-center text-center hover:bg-[#2A2A2A] transition-colors reveal" style={{transitionDelay: '300ms'}}>
<div className="relative w-20 h-20 flex items-center justify-center mb-6">
<div className="blur-[30px] bg-[#0EA5E9] opacity-30 rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon className="text-[3.5rem] text-[#818CF8] z-10 relative" height="56" icon="solar:pallete-2-outline" style={{color: 'rgb(14, 165, 233)'}} width="56"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Design sur-mesure</h3>
<p className="leading-relaxed text-base text-[#A1A1AA] font-extralight">Un rendu visuel unique, pensé spécifiquement pour refléter l'image de votre activité.</p>
</div>
<div className="bg-[#222222] p-10 rounded-[1.5rem] border border-white/5 flex flex-col items-center text-center hover:bg-[#2A2A2A] transition-colors reveal" style={{transitionDelay: '400ms'}}>
<div className="relative w-20 h-20 flex items-center justify-center mb-6">
<div className="blur-[30px] bg-[#0EA5E9] opacity-30 rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<svg className="z-10 relative w-[56px] h-[56px]" data-icon-replaced="true" data-icon-set="solar" data-solar="users-group-rounded-bold" height="56" strokeWidth="2" style={{color: 'rgb(14, 165, 233)', width: '56px', height: '56px'}} viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg"><circle cx="9.001" cy="6" fill="#0ea5e9" r="4"></circle><ellipse cx="9.001" cy="17.001" fill="#0ea5e9" rx="7" ry="4"></ellipse><path d="M21 17c0 1.657-2.036 3-4.521 3c.732-.8 1.236-1.805 1.236-2.998c0-1.195-.505-2.2-1.239-3.001C18.962 14 21 15.344 21 17M18 6a3 3 0 0 1-4.029 2.82A5.7 5.7 0 0 0 14.714 6c0-1.025-.27-1.987-.742-2.819A3 3 0 0 1 18 6.001" fill="#0ea5e9"></path></svg>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Accompagnement humain</h3>
<p className="leading-relaxed text-base text-[#A1A1AA] font-extralight">Un interlocuteur unique pour tout le projet, et une garantie de réponse sous 24h.</p>
</div>
<div className="flex flex-col hover:bg-[#2A2A2A] transition-colors reveal text-center bg-[#222222] border-white/5 border rounded-[1.5rem] pt-10 pr-10 pb-10 pl-10 items-center" style={{transitionDelay: '500ms'}}>
<div className="relative w-20 h-20 flex items-center justify-center mb-6">
<div className="blur-[30px] bg-[#0EA5E9] opacity-30 rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon className="text-[3.5rem] z-10 text-[#818CF8] relative" height="56" icon="solar:iphone-outline" style={{color: 'rgb(14, 165, 233)'}} width="56"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">100% responsive</h3>
<p className="leading-relaxed text-base text-[#A1A1AA] font-extralight">Votre site s'adaptera et sera parfait sur tous les écrans (téléphones, tablettes, PC).</p>
</div>
<div className="flex flex-col hover:bg-[#2A2A2A] transition-colors reveal text-center bg-[#222222] border-white/5 border rounded-[1.5rem] pt-10 pr-10 pb-10 pl-10 items-center" style={{transitionDelay: '600ms'}}>
<div className="flex w-20 h-20 mb-6 relative items-center justify-center">
<div className="blur-[30px] bg-[#0EA5E9] opacity-30 rounded-full absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon className="text-[3.5rem] z-10 text-[#818CF8] relative" height="56" icon="solar:medal-star-circle-outline" style={{color: 'rgb(14, 165, 233)'}} width="56"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Satisfaction garantie</h3>
<p className="leading-relaxed text-base text-[#A1A1AA] font-extralight">Des retouches sont incluses jusqu'à la validation complète pour s'assurer de votre fierté.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F1F5F9] overflow-hidden" id="apropos">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="bg-[#0F172A] rounded-3xl p-10 lg:p-12 relative shadow-2xl reveal opacity-0 translate-x-[-2rem] transition-all duration-700 ease-out">
<div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#4338CA]"></div>
<div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-2xl font-medium text-white mb-8 shadow-inner">MP</div>
<h3 className="text-3xl font-medium text-white tracking-tight">Mathéo Payet</h3>
<p className="text-[#0EA5E9] font-normal text-lg mt-1 mb-8">Fondateur Solaweb</p>
<div className="flex flex-wrap gap-2 relative z-10">
<span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-[#94A3B8]">Île de la Réunion</span>
<span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-[#94A3B8]">Toulon (83)</span>
<span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-[#94A3B8]">React</span>
<span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-[#94A3B8]">HTML / CSS</span>
<span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-[#94A3B8]">Design</span>
<span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-[#94A3B8]">SEO</span>
</div>
<div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#4338CA] rounded-full mix-blend-screen filter blur-[100px] opacity-40"></div>
</div>
<div className="reveal opacity-0 translate-x-[2rem] transition-all duration-700 ease-out">
<span className="text-[#94A3B8] font-normal tracking-widest uppercase text-sm mb-3 block">L'Agence</span>
<h2 className="text-4xl font-medium text-[#0A0A0A] tracking-tight mb-6">Simple, non ?</h2>
<p className="text-[#64748B] font-extralight leading-relaxed mb-10 text-base md:text-lg">
                    Originaire de La Réunion, installé à Toulon. Quand vous me contactez, c'est moi qui réponds. Quand je crée votre site, c'est moi qui le fais.
                </p>
<div className="flex flex-col gap-6">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-2xl bg-[#EFF8FF] text-[#0EA5E9] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-[#0A0A0A] font-medium text-base mb-1">Rapidité</h4>
<p className="text-[#64748B] font-extralight text-sm leading-relaxed">Des processus optimisés pour vous livrer un site fonctionnel dans des délais imbattables.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-2xl bg-[#EFF8FF] text-[#0EA5E9] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:pen-new-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-[#0A0A0A] font-medium text-base mb-1">Sur-mesure</h4>
<p className="text-[#64748B] font-extralight text-sm leading-relaxed">Chaque projet est unique. L'interface est pensée pour plaire à votre cible.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-2xl bg-[#EFF8FF] text-[#0EA5E9] flex items-center justify-center shrink-0">
<iconify-icon className="text-2xl" icon="solar:hand-shake-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-[#0A0A0A] font-medium text-base mb-1">Proximité</h4>
<p className="text-[#64748B] font-extralight text-sm leading-relaxed">Un interlocuteur unique, transparent et disponible à chaque étape.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white" id="faq">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16 reveal transition-all duration-700 ease-out">
<span className="text-[#94A3B8] font-normal tracking-widest uppercase text-sm mb-3 block">Des questions ?</span>
<h2 className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] tracking-tight">Questions fréquentes.</h2>
</div>
<div className="space-y-4">

<div className="accordion-item bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-gray-300 transition-colors reveal" style={{transitionDelay: '100ms'}}>
<button aria-expanded="false" className="accordion-btn w-full flex items-center justify-between p-6 text-left">
<span className="font-medium text-[#0A0A0A] text-lg">Combien de temps prend la création d'un site ?</span>
<iconify-icon className="transform transition-transform duration-300 text-[#94A3B8] text-xl shrink-0 ml-4" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
<div className="p-6 pt-0 text-[#64748B] font-extralight text-base leading-relaxed">
                            Le délai varie selon la formule choisie. Comptez généralement 5 jours pour un site Starter (1 page), 10 jours pour un site Pro, et environ 15 jours pour une solution Premium. Ces délais débutent dès que nous avons validé ensemble le design et le contenu.
                        </div>
</div>
</div>

<div className="accordion-item bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-gray-300 transition-colors reveal" style={{transitionDelay: '150ms'}}>
<button aria-expanded="false" className="accordion-btn w-full flex items-center justify-between p-6 text-left">
<span className="font-medium text-[#0A0A0A] text-lg">Dois-je fournir les textes et les images ?</span>
<iconify-icon className="transform transition-transform duration-300 text-[#94A3B8] text-xl shrink-0 ml-4" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
<div className="p-6 pt-0 text-[#64748B] font-extralight text-base leading-relaxed">
                            Dans l'idéal, oui, car vous êtes l'expert de votre domaine. Cependant, si vous manquez d'inspiration ou de visuels, je peux vous accompagner dans la rédaction et sélectionner des images libres de droits de haute qualité pour illustrer votre site.
                        </div>
</div>
</div>

<div className="accordion-item bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-gray-300 transition-colors reveal" style={{transitionDelay: '200ms'}}>
<button aria-expanded="false" className="accordion-btn w-full flex items-center justify-between p-6 text-left">
<span className="font-medium text-[#0A0A0A] text-lg">Quels sont les frais annexes à prévoir ?</span>
<iconify-icon className="transform transition-transform duration-300 text-[#94A3B8] text-xl shrink-0 ml-4" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
<div className="p-6 pt-0 text-[#64748B] font-extralight text-base leading-relaxed">
                            Les tarifs des formules concernent la création de votre site. Il faut simplement prévoir environ 50€ à 80€ par an pour votre hébergement et votre nom de domaine, que vous paierez directement au prestataire (Hostinger, OVH, etc.) pour en être l'unique propriétaire.
                        </div>
</div>
</div>

<div className="accordion-item bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-gray-300 transition-colors reveal" style={{transitionDelay: '250ms'}}>
<button aria-expanded="false" className="accordion-btn w-full flex items-center justify-between p-6 text-left">
<span className="font-medium text-[#0A0A0A] text-lg">Mon site sera-t-il bien référencé sur Google ?</span>
<iconify-icon className="transform transition-transform duration-300 text-[#94A3B8] text-xl shrink-0 ml-4" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
<div className="p-6 pt-0 text-[#64748B] font-extralight text-base leading-relaxed">
                            Oui, tous les sites que je crée incluent les bonnes pratiques techniques essentielles pour le référencement naturel (SEO) : balises optimisées, structure claire de la page, temps de chargement rapide et version mobile (responsive) parfaite.
                        </div>
</div>
</div>

<div className="accordion-item bg-white rounded-2xl border border-gray-200 shadow-sm hover:border-gray-300 transition-colors reveal" style={{transitionDelay: '300ms'}}>
<button aria-expanded="false" className="accordion-btn w-full flex items-center justify-between p-6 text-left">
<span className="font-medium text-[#0A0A0A] text-lg">Puis-je modifier mon site moi-même plus tard ?</span>
<iconify-icon className="transform transition-transform duration-300 text-[#94A3B8] text-xl shrink-0 ml-4" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="accordion-content overflow-hidden max-h-0 transition-all duration-300 ease-in-out">
<div className="p-6 pt-0 text-[#64748B] font-extralight text-base leading-relaxed">
                            Absolument ! À la fin du projet, je vous montre comment modifier facilement vos textes et vos images en toute autonomie. Si vous préférez déléguer cela, je propose également des forfaits de maintenance mensuelle.
                        </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#F8FAFC]" id="contact">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
<span className="text-[#94A3B8] font-normal tracking-widest uppercase text-sm mb-3 block">Contact</span>
<h2 className="text-4xl md:text-5xl font-semibold text-[#0A0A0A] tracking-tight">Parlons de votre projet.</h2>
</div>
<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-black/5 border border-gray-100 relative reveal opacity-0 translate-y-8" style={{transitionDelay: '200ms'}}>
<div className="hidden absolute inset-0 bg-white/95 backdrop-blur-sm rounded-[2rem] flex flex-col items-center justify-center text-center p-8 z-20" id="success-msg">
<div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
<iconify-icon className="text-3xl" icon="solar:check-read-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-[#0A0A0A] tracking-tight mb-2">Demande envoyée !</h3>
<p className="text-[#64748B] font-extralight text-base">Merci pour votre message. Je vous recontacte sous 24h.</p>
</div>
<form className="space-y-6 relative z-10" id="contact-form">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="sr-only" htmlFor="name">Prénom &amp; Nom</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base text-[#0A0A0A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all font-extralight" id="name" placeholder="Prénom &amp; Nom" required="" type="text"/>
</div>
<div>
<label className="sr-only" htmlFor="phone">Téléphone</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base text-[#0A0A0A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all font-extralight" id="phone" placeholder="Téléphone" type="tel"/>
</div>
</div>
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base text-[#0A0A0A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all font-extralight" id="email" placeholder="Adresse email" required="" type="email"/>
</div>
<div className="relative">
<label className="sr-only" htmlFor="formule">Formule souhaitée</label>
<select className="w-full appearance-none bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all font-extralight cursor-pointer" id="formule" required="">
<option disabled="" selected="" value="">Quelle formule vous intéresse ?</option>
<option className="text-[#0A0A0A]" value="starter">Formule Starter (149€)</option>
<option className="text-[#0A0A0A]" value="pro">Formule Pro (299€)</option>
<option className="text-[#0A0A0A]" value="premium">Formule Premium (499€)</option>
<option className="text-[#0A0A0A]" value="nsp">Je ne sais pas</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#94A3B8] text-lg pointer-events-none" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<label className="sr-only" htmlFor="message">Description du projet</label>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 text-base text-[#0A0A0A] placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#0EA5E9]/30 focus:border-[#0EA5E9] transition-all font-extralight resize-none" id="message" placeholder="Description de votre projet..." required="" rows="4"></textarea>
</div>
<button className="w-full bg-[#0EA5E9] text-white font-normal text-base py-4 rounded-xl hover:bg-[#0284c7] transition-all shadow-lg shadow-[#0EA5E9]/20 flex items-center justify-center gap-2" type="submit">
                        Envoyer ma demande <iconify-icon icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
<div className="mt-10 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-6 md:gap-12">
<div className="flex items-center gap-2 text-sm font-extralight text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-lg" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
                        Toulon, Var (83)
                    </div>
<div className="flex items-center gap-2 text-sm font-extralight text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-lg" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
                        Réponse sous 24h
                    </div>
<div className="flex items-center gap-2 text-sm font-extralight text-[#64748B]">
<iconify-icon className="text-[#0EA5E9] text-lg" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
                        Partout en France
                    </div>
</div>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] pt-20 pb-10 border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
<a className="flex items-center mb-8 group" href="#">
<span className="text-xl font-medium tracking-tight text-white">Sola<span className="text-[#0EA5E9]">web</span></span>
</a>
<div className="flex flex-wrap justify-center gap-6 text-base font-extralight text-[#64748B] mb-12">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#portfolio">Portfolio</a>
<a className="hover:text-white transition-colors" href="#pourquoi-nous">Pourquoi nous</a>
<a className="hover:text-white transition-colors" href="#apropos">À propos</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="w-full h-px bg-white/10 mb-8"></div>
<p className="text-sm font-extralight text-[#64748B]">
                © 2025 Solaweb — Mathéo Payet
            </p>
</div>
</footer>


    </>
  );
}
