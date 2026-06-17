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



        // Intersection Observer for scroll animations
        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-8');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.animate-on-scroll').forEach((el) => {
                el.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-1000', 'ease-out');
                observer.observe(el);
            });
        });

        // FAQ Toggle Logic
        document.querySelectorAll('.faq-btn').forEach(button => {
            button.addEventListener('click', () => {
                const content = button.nextElementSibling;
                const icon = button.querySelector('.faq-icon');
                
                if (content.classList.contains('grid-rows-[1fr]')) {
                    content.classList.remove('grid-rows-[1fr]', 'opacity-100');
                    content.classList.add('grid-rows-[0fr]', 'opacity-0');
                    icon.classList.remove('rotate-180');
                } else {
                    content.classList.remove('grid-rows-[0fr]', 'opacity-0');
                    content.classList.add('grid-rows-[1fr]', 'opacity-100');
                    icon.classList.add('rotate-180');
                }
            });
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
      

<nav className="sticky top-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="text-[#F5C842] tracking-tight text-lg font-medium" style={{fontFamily: '\'Syne\', sans-serif'}}>
                CBC.
            </div>
<a className="group flex items-center gap-2 text-xs md:text-sm font-medium text-[#F5C842] hover:text-[#ebd07c] transition-colors" href="#offres">
                Rejoindre le programme
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</nav>

<section className="md:pt-32 md:pb-28 overflow-hidden pt-24 pr-6 pb-20 pl-6 relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#F5C842]/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 animate-on-scroll transition-all duration-1000 ease-out opacity-100 translate-y-0 opacity-0 translate-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#F5C842]/20 bg-[#F5C842]/5 text-xs font-medium text-[#F5C842] mb-8">
<iconify-icon icon="solar:rocket-linear"></iconify-icon>
                Programme E-commerce Cashflow
            </div>
<h1 className="md:text-6xl leading-[1.1] text-4xl font-semibold text-white tracking-tight mb-6" style={{fontFamily: '\'Syne\', sans-serif'}}>Démarre ou délègue le lancement de ton business E-commerce. <br className="hidden md:block"/> <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F5C842] to-[#ebd07c]">Génère du cashflow mensuel.</span></h1>
<p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-12">
                Que tu sois étudiant ou salarié, le CBC a un programme taillé pour ton profil — avec une garantie remboursement à 90 jours.
            </p>

<div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl md:rounded-3xl border border-[#F5C842]/30 bg-[#111] overflow-hidden group shadow-[0_0_50px_rgba(245,200,66,0.1)] mb-4">
<div className="absolute inset-0 bg-gradient-to-tr from-black/90 to-[#1a1a1a] z-0"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-50 z-0"></div>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#F5C842]/10 border border-[#F5C842]/50 text-[#F5C842] flex items-center justify-center backdrop-blur-md group-hover:bg-[#F5C842]/20 group-hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(245,200,66,0.2)]">
<iconify-icon className="text-3xl md:text-4xl translate-x-0.5" icon="solar:play-linear"></iconify-icon>
<div className="absolute inset-0 rounded-full border border-[#F5C842] animate-ping opacity-30"></div>
</button>
</div>
<p className="flex items-center justify-center gap-1.5 text-xs text-white/40 mb-12">⏱ ~5 min — Regarde jusqu'à la fin avant de choisir ton offre</p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-[#F5C842]/50 hover:border-[#F5C842] hover:bg-[#F5C842]/5 text-[#F5C842] text-sm font-medium transition-all" href="#standard">
                    Programme Étudiant — 100 000 FCFA
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#F5C842] hover:bg-[#ebd07c] text-black text-sm font-medium transition-all shadow-[0_0_20px_rgba(245,200,66,0.15)] flex items-center justify-center gap-2 group" href="#investisseur">
                    Programme Investisseur — 200 000 FCFA
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-8 pb-24">

<div className="bg-black/40 border-y border-white/5 py-5 mb-16 animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs md:text-sm font-medium text-white/60">
<div className="flex items-center gap-2"><iconify-icon className="text-white/40 text-lg" icon="solar:users-group-rounded-linear"></iconify-icon> +200 Membres actifs</div>
<div className="hidden md:block w-px h-4 bg-white/10"></div>
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">6 Pays africains</div>
<div className="hidden md:block w-px h-4 bg-white/10"></div>
<div className="flex gap-x-2 gap-y-2 items-center">+10000 Ventes générées</div>
<div className="hidden md:block w-px h-4 bg-white/10"></div>
<div className="flex items-center gap-2"><iconify-icon className="text-white/40 text-lg" icon="solar:shield-check-linear"></iconify-icon> 90 jours Garantie</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">

<div className="animate-on-scroll group transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-[#F5C842]/50 transition-colors mb-4 relative z-10">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-medium" style={{fontFamily: '\'Syne\', sans-serif'}}>AM</div>
<div className="">
<div className="text-sm font-medium text-white">Sankara J.</div>
<div className="text-xs text-white/40">Ouagadougou, Burkina Faso</div>
</div>
</div>
<div className="flex gap-1 text-[#F5C842] mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="inline-flex gap-1.5 text-xs font-medium text-[#2ECC71] bg-[#2ECC71]/10 border-[#2ECC71]/20 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5 gap-x-1.5 gap-y-1.5 items-center">De 17 à 19 ans : j'ai réussi à bâtir un business e-commerce rentable </div>
</div>

<div className="relative w-full aspect-video rounded-xl border border-white/10 bg-[#111] overflow-hidden group-hover:border-[#F5C842]/30 transition-colors cursor-pointer">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-10"></div>
<div className="flex flex-col z-20 absolute top-0 right-0 bottom-0 left-0 items-center justify-center" onclick="window.location.href='https://youtu.be/N8BhQdCXaqc'" role="button">
<iconify-icon className="text-4xl text-white/80 group-hover:text-white transition-colors mb-2" icon="solar:play-circle-linear"></iconify-icon>
<span className="text-xs font-medium text-white/60">Témoignage vidéo </span>
</div>
</div>
</div>

<div className="animate-on-scroll group transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:border-[#F5C842]/50 transition-colors mb-4 relative z-10">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-medium" style={{fontFamily: '\'Syne\', sans-serif'}}>SK</div>
<div className="">
<div className="text-sm font-medium text-white">Diallo S.</div>
<div className="text-xs text-white/40">Bamako, Mali</div>
</div>
</div>
<div className="flex gap-1 text-[#F5C842] mb-4 text-sm">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="inline-flex gap-1.5 text-xs font-medium text-[#2ECC71] bg-[#2ECC71]/10 border-[#2ECC71]/20 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5 gap-x-1.5 gap-y-1.5 items-center">De Bamako au e-commerce : j'ai généré 6.5 millions F CFA en 4 Mois</div>
</div>

<div className="relative w-full aspect-video rounded-xl border border-white/10 bg-[#111] overflow-hidden group-hover:border-[#F5C842]/30 transition-colors cursor-pointer">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-10"></div>
<div className="flex flex-col z-20 absolute top-0 right-0 bottom-0 left-0 items-center justify-center cursor-pointer" onclick="window.location.href='https://youtu.be/mseuxUHWiyQ'" role="button">
<iconify-icon className="text-4xl text-white/80 group-hover:text-white transition-colors mb-2" icon="solar:play-circle-linear"></iconify-icon>
<span className="cursor-pointer text-xs font-medium text-white/60" onclick="window.location.href='https://youtu.be/mseuxUHWiyQ'" role="button">Témoignage vidéo</span>
</div>
</div>
</div>

<div className="animate-on-scroll group transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="hover:border-[#F5C842]/50 transition-colors z-10 bg-[#0A0A0A] border-white/10 border rounded-2xl mb-4 pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex items-center gap-4 mb-5">
<div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white font-medium" style={{fontFamily: '\'Syne\', sans-serif'}}>KD</div>
<div className="">
<div className="text-sm font-medium text-white">Yapo A.</div>
<div className="text-xs text-white/40">Abidjan, Côte d'Ivoire </div>
</div>
</div>
<div className="flex gap-1 text-[#F5C842] mb-4 text-sm">
<iconify-icon className="" icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<div className="inline-flex gap-1.5 text-xs font-medium text-[#2ECC71] bg-[#2ECC71]/10 border-[#2ECC71]/20 border rounded-md pt-1 pr-2.5 pb-1 pl-2.5 gap-x-1.5 gap-y-1.5 items-center">J'ai généré 6.5 Millions F CFA en 5 Mois avec un capital départ de 10.000 F CFA</div>
</div>

<div className="relative w-full aspect-video rounded-xl border border-white/10 bg-[#111] overflow-hidden group-hover:border-[#F5C842]/30 transition-colors cursor-pointer">
<div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
<div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors z-10"></div>
<div className="flex flex-col z-20 absolute top-0 right-0 bottom-0 left-0 items-center justify-center cursor-pointer" onclick="window.location.href='https://youtu.be/zcuCSNWfSxo'" role="button">
<iconify-icon className="text-4xl text-white/80 group-hover:text-white transition-colors mb-2" icon="solar:play-circle-linear"></iconify-icon>
<span className="cursor-pointer text-xs font-medium text-white/60" onclick="window.location.href='https://youtu.be/zcuCSNWfSxo'" role="button">Témoignage vidéo </span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-white/5 border-t pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl mr-auto ml-auto">
<div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="uppercase text-xs font-medium text-[#F5C842] tracking-widest mb-3">La Formation ECOM360 V3</div>
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-medium mb-4" style={{fontFamily: '\'Syne\', sans-serif'}}>
                Le programme complet : 8 modules
            </h2>
<p className="text-sm text-white/60">
                Une formation structurée étape par étape — de zéro à tes premières ventes, jusqu'à la création d'une vraie marque.
            </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 animate-on-scroll shadow-xl shadow-black/50 duration-1000 ease-out flex flex-col opacity-0 translate-y-8">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/5 shrink-0 text-[#F5C842]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path></svg>
</div>
<h3 className="text-base text-white font-normal mb-5 leading-tight" style={{fontFamily: '\'Syne\', sans-serif'}}>MODULE 01 — Mindset &amp; Productivité</h3>
<ul className="space-y-3 text-[13px] text-white/60 flex-grow">
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Adopter le mindset d'un entrepreneur e-commerce performant</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Fixer des objectifs clairs et atteignables dans le temps</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Organisation quotidienne &amp; discipline personnelle</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Méthode de productivité pour avancer sans se noyer</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Gérer le doute, les échecs et les phases de baisse</span>
</li>
</ul>
</div>

<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 animate-on-scroll shadow-xl shadow-black/50 duration-1000 ease-out flex flex-col opacity-0 translate-y-8">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/5 shrink-0 text-[#F5C842]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path><path d="m7.5 4.27 9 5.15"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" x2="12" y1="22" y2="12"></line><circle cx="18.5" cy="15.5" r="2.5"></circle><path d="M20.27 17.27 22 19"></path></svg>
</div>
<h3 className="text-base text-white font-normal mb-5 leading-tight" style={{fontFamily: '\'Syne\', sans-serif'}}>MODULE 02 — Sourcing Local &amp; Alibaba</h3>
<ul className="space-y-3 text-[13px] text-white/60 flex-grow">
<li className="pt-1 pb-1 text-[11px] font-medium text-white/80 uppercase tracking-widest">Trouver un Produit Gagnant</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Comprendre le marché et la demande réelle</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Critères d’un produit rentable et pièges à éviter</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Analyse de la concurrence et validation d'idée</span>
</li>
<li className="pt-3 pb-1 text-[11px] font-medium text-white/80 uppercase tracking-widest mt-2 border-t border-white/5">Sourcing Local &amp; Alibaba</li>
</ul>
</div>

<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 animate-on-scroll shadow-xl shadow-black/50 duration-1000 ease-out flex flex-col opacity-0 translate-y-8">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/5 shrink-0 text-[#F5C842]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
</div>
<h3 className="text-base text-white font-normal mb-5 leading-tight" style={{fontFamily: '\'Syne\', sans-serif'}}>MODULE 03 — Marketing &amp; Vente</h3>
<ul className="space-y-3 text-[13px] text-white/60 flex-grow">
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Les fondamentaux du marketing digital appliqués</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Comprendre ton client idéal dans les moindres détails</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Construire une offre irrésistible qu'il ne peut refuser</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Copywriting : écrire pour vendre sans forcer</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Structure d’une page produit qui convertit vraiment</span>
</li>
</ul>
</div>

<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 animate-on-scroll shadow-xl shadow-black/50 duration-1000 ease-out flex flex-col opacity-0 translate-y-8">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/5 shrink-0 text-[#F5C842]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
</div>
<h3 className="text-base text-white font-normal mb-5 leading-tight" style={{fontFamily: '\'Syne\', sans-serif'}}>MODULE 04 — WhatsApp &amp; FB Ads</h3>
<ul className="space-y-3 text-[13px] text-white/60 flex-grow">
<li className="pt-1 pb-1 text-[11px] font-medium text-white/80 uppercase tracking-widest">WhatsApp Business</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Configuration pro et automatisations de base</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Scripts de vente et gestion des prospects</span>
</li>
<li className="pt-3 pb-1 text-[11px] font-medium text-white/80 uppercase tracking-widest mt-2 border-t border-white/5">Facebook Ads — Débutant</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Comprendre le Business Manager</span>
</li>
</ul>
</div>

<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 animate-on-scroll shadow-xl shadow-black/50 duration-1000 ease-out flex flex-col opacity-0 translate-y-8">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/5 shrink-0 text-[#F5C842]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</div>
<h3 className="text-base text-white font-normal mb-5 leading-tight" style={{fontFamily: '\'Syne\', sans-serif'}}>MODULE 05 — Shopify &amp; FB Ads Avancé</h3>
<ul className="space-y-3 text-[13px] text-white/60 flex-grow">
<li className="pt-1 pb-1 text-[11px] font-medium text-white/80 uppercase tracking-widest">Création Shopify</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Création complète et paramétrages essentiels</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Thèmes pro, applications et optimisation conversion</span>
</li>
<li className="pt-3 pb-1 text-[11px] font-medium text-white/80 uppercase tracking-widest mt-2 border-t border-white/5">Facebook Ads — Avancé</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Stratégies de scaling et retargeting efficace</span>
</li>
</ul>
</div>

<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 animate-on-scroll shadow-xl shadow-black/50 duration-1000 ease-out flex flex-col opacity-0 translate-y-8">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/5 shrink-0 text-[#F5C842]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-base text-white font-normal mb-5 leading-tight" style={{fontFamily: '\'Syne\', sans-serif'}}>MODULE 06 — Gestion de l’Opérationnel</h3>
<ul className="space-y-3 text-[13px] text-white/60 flex-grow">
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Traitement des commandes rapide et sans erreur</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Relation fournisseur sur le long terme</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Gestion des stocks, éviter ruptures et surstock</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Service client professionnel qui fidélise</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Gestion des litiges et remboursements sans stress</span>
</li>
</ul>
</div>

<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 animate-on-scroll shadow-xl shadow-black/50 duration-1000 ease-out flex flex-col opacity-0 translate-y-8">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/5 shrink-0 text-[#F5C842]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect height="5" width="20" x="2" y="7"></rect><line x1="12" x2="12" y1="22" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
</div>
<h3 className="text-base text-white font-normal mb-5 leading-tight" style={{fontFamily: '\'Syne\', sans-serif'}}>MODULE 07 — Bonus &amp; Ressources</h3>
<ul className="space-y-3 text-[13px] text-white/60 flex-grow">
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Outils indispensables pour gagner du temps</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Templates prêts à utiliser (scripts, relances)</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Liste de fournisseurs recommandés et validés</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Checklists pratiques pour ne rien oublier</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Les erreurs à éviter absolument pour sécuriser son capital</span>
</li>
</ul>
</div>

<div className="bg-[#0A0A0A] border border-white/10 rounded-2xl p-6 hover:-translate-y-1 hover:border-white/20 transition-all duration-300 animate-on-scroll shadow-xl shadow-black/50 duration-1000 ease-out flex flex-col opacity-0 translate-y-8">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/5 shrink-0 text-[#F5C842]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 3.82-13 1.5 1.5 0 0 0-2.18 2.18A22 22 0 0 0 12 15Z"></path><path d="m15 12 3 3"></path><path d="M12 15a22 22 0 0 0 13-3.82 1.5 1.5 0 0 0-2.18-2.18A22 22 0 0 0 15 12Z"></path></svg>
</div>
<h3 className="text-base text-white font-normal mb-5 leading-tight" style={{fontFamily: '\'Syne\', sans-serif'}}>MODULE 08 — Aller Plus Loin</h3>
<ul className="space-y-3 text-[13px] text-white/60 flex-grow">
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Construire une vraie marque (branding) qui se distingue</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Automatiser son business pour ne plus tout gérer</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Recruter une équipe et déléguer sans perdre le contrôle</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Diversification &amp; multi-produits pour sécuriser ses revenus</span>
</li>
<li className="flex items-start gap-2.5">
<svg className="w-4 h-4 text-[#F5C842]/70 shrink-0 mt-[2px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="leading-relaxed">Passer définitivement de vendeur à entrepreneur</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="text-[#F5C842] text-xs font-medium tracking-widest uppercase mb-3">Ils témoignent</div>
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-semibold mb-4" style={{fontFamily: '\'Syne\', sans-serif'}}>
                    Des dizaines de membres ont déjà changé leur trajectoire
                </h2>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="break-inside-avoid bg-white/[0.02] border border-white/5 rounded-2xl p-6 animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="flex gap-1 text-[#F5C842] mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon className="" icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-white/80 leading-relaxed mb-4">"3 semaines après le lancement, j'avais déjà rentabilisé mon investissement. Impressionnant."</p>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#2ECC71]/10 text-[#2ECC71] text-xs font-medium border border-[#2ECC71]/20 mb-4 w-fit">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> ROI en 3 semaines
                    </div>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-medium">IS</div>
<div>
<div className="text-xs font-medium text-white">Ibrahim S.</div>
<div className="text-[10px] text-white/40">Salarié</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/5 rounded-2xl p-6 animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="flex gap-1 text-[#F5C842] mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon className="" icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-white/80 leading-relaxed mb-4">"Le coaching m'a évité des erreurs qui m'auraient coûté beaucoup d'argent au démarrage."</p>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#2ECC71]/10 text-[#2ECC71] text-xs font-medium border border-[#2ECC71]/20 mb-4 w-fit">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Erreurs évitées, temps gagné
                    </div>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-medium">FB</div>
<div>
<div className="text-xs font-medium text-white">Fatou B.</div>
<div className="text-[10px] text-white/40">Étudiante</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/5 rounded-2xl p-6 animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="flex gap-1 text-[#F5C842] mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-white/80 leading-relaxed mb-4">"Les outils donnés (Canva, ChatGPT, CapCut) ont tout changé pour mes visuels. Rendu hyper pro."</p>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#2ECC71]/10 text-[#2ECC71] text-xs font-medium border border-[#2ECC71]/20 mb-4 w-fit">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Contenu pro sans agence
                    </div>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-medium">MD</div>
<div>
<div className="text-xs font-medium text-white">Moussa D.</div>
<div className="text-[10px] text-white/40">Étudiant</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/5 rounded-2xl p-6 animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="flex gap-1 text-[#F5C842] mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-white/80 leading-relaxed mb-4">"Je n'ai rien eu à gérer. L'équipe a tout configuré et j'ai juste validé. Parfait quand on bosse."</p>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#2ECC71]/10 text-[#2ECC71] text-xs font-medium border border-[#2ECC71]/20 mb-4 w-fit">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Clé en main total
                    </div>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-medium">AL</div>
<div>
<div className="text-xs font-medium text-white">Aïcha L.</div>
<div className="text-[10px] text-white/40">Salariée</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/5 rounded-2xl p-6 animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="flex gap-1 text-[#F5C842] mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-white/80 leading-relaxed mb-4">"La méthode est claire, structurée et applicable dès le premier jour. On ne s'éparpille pas."</p>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#2ECC71]/10 text-[#2ECC71] text-xs font-medium border border-[#2ECC71]/20 mb-4 w-fit">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Résultats dès J+7
                    </div>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-medium">YT</div>
<div>
<div className="text-xs font-medium text-white">Yannick T.</div>
<div className="text-[10px] text-white/40">Étudiant</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/5 rounded-2xl p-6 animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="flex gap-1 text-[#F5C842] mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-white/80 leading-relaxed mb-4">"Le rapport mensuel me permet de suivre l'évolution sans m'impliquer au quotidien."</p>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#2ECC71]/10 text-[#2ECC71] text-xs font-medium border border-[#2ECC71]/20 mb-4 w-fit">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Pilotage sans effort
                    </div>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-medium">MC</div>
<div>
<div className="text-xs font-medium text-white">Mariama C.</div>
<div className="text-[10px] text-white/40">Salariée</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/5 rounded-2xl p-6 animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="flex gap-1 text-[#F5C842] mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-white/80 leading-relaxed mb-4">"Meilleur investissement de ma vie étudiante. Je gère mon propre business au lieu de chercher un job d'été."</p>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#2ECC71]/10 text-[#2ECC71] text-xs font-medium border border-[#2ECC71]/20 mb-4 w-fit">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Indépendance financière
                    </div>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-medium">SA</div>
<div>
<div className="text-xs font-medium text-white">Serge A.</div>
<div className="text-[10px] text-white/40">Étudiant</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/5 rounded-2xl p-6 animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="flex gap-1 text-[#F5C842] mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-white/80 leading-relaxed mb-4">"Le capital est resté sous mon contrôle à chaque étape. Zéro stress, transparence totale."</p>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#2ECC71]/10 text-[#2ECC71] text-xs font-medium border border-[#2ECC71]/20 mb-4 w-fit">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Capital sécurisé
                    </div>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-medium">RN</div>
<div>
<div className="text-xs font-medium text-white">Rokhaya N.</div>
<div className="text-[10px] text-white/40">Salariée</div>
</div>
</div>
</div>

<div className="break-inside-avoid bg-white/[0.02] border border-white/5 rounded-2xl p-6 animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="flex gap-1 text-[#F5C842] mb-3 text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-white/80 leading-relaxed mb-4">"La communauté Discord est ultra-active. On n'est jamais seul quand on a un doute ou une question technique."</p>
<div className="inline-flex items-center gap-1.5 px-2 py-1 rounded bg-[#2ECC71]/10 text-[#2ECC71] text-xs font-medium border border-[#2ECC71]/20 mb-4 w-fit">
<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Entraide quotidienne
                    </div>
<div className="flex items-center gap-3 border-t border-white/5 pt-4">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-white font-medium">LK</div>
<div>
<div className="text-xs font-medium text-white">Lamine K.</div>
<div className="text-[10px] text-white/40">Étudiant</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-5xl mx-auto animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="text-center mb-16">
<div className="text-[#F5C842] text-xs font-medium tracking-widest uppercase mb-3">Comparatif</div>
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-semibold mb-4" style={{fontFamily: '\'Syne\', sans-serif'}}>
                    Quelle offre est faite pour toi ?
                </h2>
</div>
<div className="overflow-x-auto no-scrollbar rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl shadow-black">
<table className="w-full text-left border-collapse min-w-[700px]">
<thead className="">
<tr className="border-b border-white/10 text-sm">
<th className="py-6 px-6 w-[35%] text-white/50 font-medium font-normal align-bottom">Fonctionnalité / Inclus</th>

<th className="py-6 px-6 w-[32.5%] align-bottom">
<div className="text-white font-semibold text-base mb-1">Programme Standard</div>
<div className="text-xs text-white/40 font-normal">Tu apprends, on t'accompagne</div>
</th>

<th className="py-6 px-6 w-[32.5%] bg-[#F5C842]/5 border-x border-[#F5C842]/10 relative align-bottom">
<div className="absolute top-0 inset-x-0 h-[2px] bg-[#F5C842]"></div>
<div className="inline-block px-2 py-0.5 rounded bg-[#F5C842]/20 text-[#F5C842] text-[10px] font-semibold mb-2 uppercase tracking-wide">Premium</div>
<div className="text-[#F5C842] font-semibold text-base mb-1">Programme Investisseur</div>
<div className="text-xs text-[#F5C842]/60 font-normal">On lance, tu supervises</div>
</th>
</tr>
</thead>
<tbody className="text-sm">
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-6 text-white/70">Public cible</td>
<td className="py-4 px-6 text-white font-medium">Étudiant</td>
<td className="py-4 px-6 text-[#F5C842] font-medium bg-[#F5C842]/5 border-x border-[#F5C842]/10">Salarié</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-6 text-white/70">Formation ECOM360 V3</td>
<td className="py-4 px-6"><iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="py-4 px-6 bg-[#F5C842]/5 border-x border-[#F5C842]/10"><iconify-icon className="text-[#F5C842] text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-6 text-white/70">Accompagnement coachs</td>
<td className="py-4 px-6"><iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="py-4 px-6 text-white/20 bg-[#F5C842]/5 border-x border-[#F5C842]/10">—</td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-6 text-white/70">Service clé en main</td>
<td className="py-4 px-6 text-white/20">—</td>
<td className="py-4 px-6 bg-[#F5C842]/5 border-x border-[#F5C842]/10"><iconify-icon className="text-[#F5C842] text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-6 text-white/70">Communauté Discord</td>
<td className="py-4 px-6"><iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="py-4 px-6 bg-[#F5C842]/5 border-x border-[#F5C842]/10"><iconify-icon className="text-[#F5C842] text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-6 text-white/70">Ressources &amp; outils</td>
<td className="py-4 px-6"><iconify-icon className="text-white text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
<td className="py-4 px-6 bg-[#F5C842]/5 border-x border-[#F5C842]/10"><iconify-icon className="text-[#F5C842] text-lg" icon="solar:check-circle-linear"></iconify-icon></td>
</tr>
<tr className="border-b border-white/10 hover:bg-white/[0.02] transition-colors">
<td className="py-4 px-6 text-white/70">Garantie 90 jours</td>
<td className="py-4 px-6 text-white font-medium">Triple Cashflow</td>
<td className="py-4 px-6 text-[#F5C842] font-medium bg-[#F5C842]/5 border-x border-[#F5C842]/10">Business Rentable</td>
</tr>
<tr>
<td className="py-6 px-6 text-white/50">Prix</td>
<td className="py-6 px-6 font-semibold text-white text-base">100 000 FCFA</td>
<td className="py-6 px-6 font-semibold text-[#F5C842] text-base bg-[#F5C842]/5 border-x border-[#F5C842]/10">200 000 FCFA</td>
</tr>
<tr className="bg-black/20">
<td className="p-6"></td>
<td className="p-6">
<a className="inline-block w-full py-2.5 text-center rounded-lg border border-white/20 hover:bg-white/5 text-white text-xs font-medium transition-colors" href="#standard">
                                    Choisir Standard
                                </a>
</td>
<td className="p-6 bg-[#F5C842]/5 border-x border-b border-[#F5C842]/10 rounded-br-2xl">
<a className="inline-block w-full py-2.5 text-center rounded-lg bg-[#F5C842] hover:bg-[#ebd07c] text-black text-xs font-medium transition-colors" href="#investisseur">
                                    Choisir Investisseur
                                </a>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="overflow-hidden border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative" id="standard">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.02)_0%,transparent_50%)] pointer-events-none"></div>
<div className="max-w-[680px] mx-auto animate-on-scroll relative z-10 transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="text-center mb-10">
<div className="text-white/50 text-xs font-medium tracking-widest uppercase mb-3">Programme Étudiant</div>
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-semibold mb-4" style={{fontFamily: '\'Syne\', sans-serif'}}>
                    Programme Standard — Tout ce que tu reçois
                </h2>
</div>
<div className="bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl shadow-black">
<div className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-white/70 font-medium mb-6">
                    Pour les étudiants
                </div>
<div className="mb-10">
<div className="text-4xl md:text-5xl text-white font-semibold tracking-tight mb-2" style={{fontFamily: '\'Syne\', sans-serif'}}>100 000 <span className="text-xl text-white/40 font-medium">FCFA</span></div>
<div className="text-sm text-white/50">3 mois d'accès au Cashflow Business Club inclus</div>
</div>
<ul className="space-y-4 mb-10 text-sm md:text-base text-white/80">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2ECC71] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Formation ECOM360 V3 complète (8 modules, accès à vie)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2ECC71] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Coach disponible pour répondre rapidement à tes questions</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2ECC71] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Coach principal qui valide tes passages à l'action</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2ECC71] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Accès communauté privée Discord CBC</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#2ECC71] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Ressources et outils de suivi business</span>
</li>
</ul>
<div className="border border-white/20 border-dashed rounded-2xl p-6 mb-8 bg-white/[0.02]">
<div className="flex items-center gap-2 text-sm font-medium text-white mb-4">
<iconify-icon className="text-[#F5C842] text-lg" icon="solar:gift-linear"></iconify-icon> 🎁 Bonus inclus
                    </div>
<ul className="space-y-2 text-sm text-white/60">
<li className="flex items-center gap-2">• ECOM360 Business Toolkit (scripts, templates, swipe files)</li>
<li className="flex items-center gap-2">• Canva Pro (visuels professionnels)</li>
<li className="flex items-center gap-2">• CapCut Pro (vidéos marketing)</li>
<li className="flex items-center gap-2">• ChatGPT Premium (copywriting &amp; scripts)</li>
<li className="flex items-center gap-2">• Google Gemini (recherche &amp; analyse)</li>
</ul>
</div>
<div className="border border-[#2ECC71]/30 rounded-2xl p-6 mb-10 bg-[#2ECC71]/5">
<div className="flex items-center gap-2 text-[#2ECC71] text-sm font-medium mb-3">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon> 🛡 Garantie Triple Cashflow — 90 jours
                    </div>
<p className="text-sm text-[#2ECC71]/80 leading-relaxed">
                        Tu appliques le programme pendant 3 mois. Si tu ne génères pas 3× ton investissement → remboursement intégral de 100 000 FCFA. Soit tu gagnes, soit tu es remboursé.
                    </p>
</div>
<button className="w-full py-4 rounded-xl border border-[#F5C842]/50 hover:border-[#F5C842] hover:bg-[#F5C842]/5 text-[#F5C842] text-sm font-medium transition-all text-center flex items-center justify-center gap-2">
                    Je rejoins le Programme Standard <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative overflow-hidden" id="investisseur">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(245,200,66,0.05)_0%,transparent_60%)] pointer-events-none"></div>
<div className="max-w-[680px] mx-auto animate-on-scroll relative z-10 transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="text-center mb-10">
<div className="text-[#F5C842] text-xs font-medium tracking-widest uppercase mb-3">Programme Investisseur</div>
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-semibold mb-4" style={{fontFamily: '\'Syne\', sans-serif'}}>
                    Programme Investisseur — Tout ce que tu reçois
                </h2>
</div>
<div className="bg-[#0A0A0A] border border-[#F5C842]/40 rounded-3xl p-8 md:p-12 shadow-[0_0_60px_rgba(245,200,66,0.1)] relative overflow-hidden">
<div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#F5C842] to-transparent opacity-60"></div>
<div className="inline-flex px-3 py-1 rounded-full bg-[#F5C842]/10 border border-[#F5C842]/20 text-xs text-[#F5C842] font-medium mb-6">
                    Pour les salariés
                </div>
<div className="mb-10">
<div className="text-4xl md:text-5xl text-[#F5C842] font-semibold tracking-tight mb-2" style={{fontFamily: '\'Syne\', sans-serif'}}>200 000 <span className="text-xl text-[#F5C842]/60 font-medium">FCFA</span></div>
<div className="text-sm text-white/50">3 mois d'accès au Cashflow Business Club inclus</div>
</div>
<ul className="space-y-4 mb-10 text-sm md:text-base text-white/90">
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Formation ECOM360 V3 (comprendre ton business sans le gérer)</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Sélection du produit rentable par notre équipe</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Création complète de ta boutique Shopify</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Configuration de tous les outils nécessaires</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-[#F5C842] text-xl shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Lancement et gestion des campagnes publicitaires</span>
</li>
</ul>
<div className="border border-[#F5C842]/30 border-dashed rounded-2xl p-6 mb-8 bg-[#F5C842]/5">
<div className="flex items-center gap-2 text-sm font-medium text-[#F5C842] mb-4">
<iconify-icon className="text-lg" icon="solar:gift-linear"></iconify-icon> 🎁 Bonus inclus
                    </div>
<ul className="space-y-2 text-sm text-[#F5C842]/70">
<li className="flex items-center gap-2">• ECOM Business Dashboard (tableau de bord performance)</li>
<li className="flex items-center gap-2">• Kit de Suivi Financier (dépenses, revenus, rentabilité)</li>
<li className="flex items-center gap-2">• Guide de l'Investisseur ECOM (piloter sans gérer)</li>
<li className="flex items-center gap-2">• Rapport Performance Mensuel &amp; Trimestriel</li>
</ul>
</div>
<div className="border border-[#F5C842]/40 rounded-2xl p-6 mb-10 bg-[#F5C842]/10">
<div className="flex items-center gap-2 text-[#F5C842] text-sm font-medium mb-3">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon> 🛡 Garantie Business Rentable — 90 jours
                    </div>
<p className="text-sm text-[#F5C842]/80 leading-relaxed">
                        Notre équipe lance ton business. Si dans les 90 jours il ne génère pas 2× les frais de service → remboursement intégral de 200 000 FCFA. Ton capital reste sous ton contrôle à chaque étape.
                    </p>
</div>
<button className="w-full py-4 rounded-xl bg-[#F5C842] hover:bg-[#ebd07c] text-black text-sm font-medium transition-all text-center flex items-center justify-center gap-2">
                    Je rejoins le Programme Investisseur <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]">
<div className="max-w-[760px] mx-auto animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-semibold text-center mb-12" style={{fontFamily: '\'Syne\', sans-serif'}}>
                Questions fréquentes
            </h2>
<div className="space-y-2">

<div className="border-b border-white/10">
<button className="faq-btn w-full py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors">Combien de temps dois-je consacrer par semaine ?</span>
<iconify-icon className="text-white/40 text-xl group-hover:text-white transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content grid grid-rows-[0fr] transition-all duration-300 ease-in-out opacity-0">
<div className="overflow-hidden">
<p className="pb-6 text-sm text-white/60 leading-relaxed">
                                Standard: 1 à 2h/jour. Investisseur: presque rien, l'équipe gère l'opérationnel. Tu ne fais que superviser et valider les étapes clés.
                            </p>
</div>
</div>
</div>

<div className="border-b border-white/10">
<button className="faq-btn w-full py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors">Je n'ai aucune expérience en e-commerce, est-ce fait pour moi ?</span>
<iconify-icon className="text-white/40 text-xl group-hover:text-white transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content grid grid-rows-[0fr] transition-all duration-300 ease-in-out opacity-0">
<div className="overflow-hidden">
<p className="pb-6 text-sm text-white/60 leading-relaxed">
                                Oui. La formation ECOM360 V3 part de zéro. Aucune compétence technique, marketing ou créative n'est requise au départ, tout est expliqué étape par étape.
                            </p>
</div>
</div>
</div>

<div className="border-b border-white/10">
<button className="faq-btn w-full py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors">Comment fonctionne la garantie remboursement ?</span>
<iconify-icon className="text-white/40 text-xl group-hover:text-white transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content grid grid-rows-[0fr] transition-all duration-300 ease-in-out opacity-0">
<div className="overflow-hidden">
<p className="pb-6 text-sm text-white/60 leading-relaxed">
                                Tu présentes les preuves de tes actions (ou de l'activité du business) à 90 jours. Si les objectifs garantis ne sont pas atteints → remboursement intégral, sans discussion.
                            </p>
</div>
</div>
</div>

<div className="border-b border-white/10">
<button className="faq-btn w-full py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors">Mon capital est-il en sécurité dans le Programme Investisseur ?</span>
<iconify-icon className="text-white/40 text-xl group-hover:text-white transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content grid grid-rows-[0fr] transition-all duration-300 ease-in-out opacity-0">
<div className="overflow-hidden">
<p className="pb-6 text-sm text-white/60 leading-relaxed">
                                Oui. Ton capital reste sur tes comptes. Chaque dépense publicitaire ou opérationnelle est validée par toi avant tout engagement financier.
                            </p>
</div>
</div>
</div>

<div className="border-b border-white/10">
<button className="faq-btn w-full py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors">Que se passe-t-il après les 3 mois ?</span>
<iconify-icon className="text-white/40 text-xl group-hover:text-white transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content grid grid-rows-[0fr] transition-all duration-300 ease-in-out opacity-0">
<div className="overflow-hidden">
<p className="pb-6 text-sm text-white/60 leading-relaxed">
                                L'accès au club est renouvelable. Tu peux choisir de rester membre pour continuer à profiter de la communauté, de l'accompagnement et des mises à jour des outils.
                            </p>
</div>
</div>
</div>

<div className="border-b border-white/10">
<button className="faq-btn w-full py-5 flex items-center justify-between text-left focus:outline-none group">
<span className="text-sm md:text-base font-medium text-white/90 group-hover:text-white transition-colors">Quelle offre choisir si j'ai un petit budget ?</span>
<iconify-icon className="text-white/40 text-xl group-hover:text-white transition-transform duration-300 faq-icon" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content grid grid-rows-[0fr] transition-all duration-300 ease-in-out opacity-0">
<div className="overflow-hidden">
<p className="pb-6 text-sm text-white/60 leading-relaxed">
                                Le Programme Standard à 100 000 FCFA. Il est spécialement conçu pour les étudiants avec des coachs dédiés pour éviter de brûler du budget inutilement.
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 px-6 border-t border-white/5 overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,200,66,0.06)_0%,transparent_60%)] pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10 animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<h2 className="text-3xl md:text-5xl text-white font-semibold tracking-tight mb-4" style={{fontFamily: '\'Syne\', sans-serif'}}>
                Choisis ton programme.<br/>Lance-toi en 90 jours.
            </h2>
<p className="text-base text-white/60 mb-12">
                Avec la garantie remboursement, tu n'as rien à perdre.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">

<div className="w-full sm:w-[320px] bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:border-white/30 transition-colors">
<div className="text-xs text-white/50 font-medium tracking-wide uppercase mb-3">Étudiant · Standard</div>
<div className="text-2xl text-white font-semibold mb-8" style={{fontFamily: '\'Syne\', sans-serif'}}>100 000 FCFA</div>
<a className="w-full py-3 rounded-xl border border-white/20 hover:bg-white/5 text-white text-sm font-medium transition-colors" href="#standard">
                        Rejoindre le Programme Standard →
                    </a>
</div>

<div className="w-full sm:w-[320px] bg-[#0A0A0A] border border-[#F5C842]/40 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_0_40px_rgba(245,200,66,0.1)] relative">
<div className="absolute top-0 inset-x-0 h-[2px] bg-[#F5C842] rounded-t-2xl"></div>
<div className="text-xs text-[#F5C842] font-medium tracking-wide uppercase mb-3">Salarié · Investisseur Premium</div>
<div className="text-2xl text-[#F5C842] font-semibold mb-8" style={{fontFamily: '\'Syne\', sans-serif'}}>200 000 FCFA</div>
<a className="w-full py-3 rounded-xl bg-[#F5C842] hover:bg-[#ebd07c] text-black text-sm font-medium transition-colors" href="#investisseur">
                        Rejoindre le Programme Investisseur →
                    </a>
</div>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-[#2ECC71]/20 bg-[#2ECC71]/5 text-xs text-[#2ECC71] font-medium">
<iconify-icon className="text-base" icon="solar:shield-check-linear"></iconify-icon>
                🛡 Garantie remboursement 90 jours sur les deux programmes
            </div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]">
<div className="max-w-5xl mx-auto animate-on-scroll transition-all duration-1000 ease-out opacity-0 translate-y-8">
<div className="mb-12">
<div className="text-[#F5C842] text-xs font-medium tracking-widest uppercase mb-3">Le Fondateur</div>
<h2 className="text-3xl md:text-4xl text-white tracking-tight font-semibold" style={{fontFamily: '\'Syne\', sans-serif'}}>
                    Ben Adnan — Fondateur du Cashflow Business Club
                </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

<div className="lg:col-span-5 group relative">
<div className="-inset-2 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-[#F5C842]/20 to-transparent opacity-50 rounded-3xl absolute blur-2xl"></div>
<div className="aspect-square overflow-hidden z-10 flex bg-[#111] border-white/10 border rounded-3xl relative items-center justify-center">
<iconify-icon className="text-8xl text-white/10" icon="solar:user-linear"></iconify-icon>
<div className="text-xs text-white/30 absolute bottom-4 left-4">Photo_Placeholder.jpg</div>
</div>
<div className="lg:text-left text-center mt-6">
<div className="text-lg text-[#F5C842] font-medium" style={{fontFamily: '\'Syne\', sans-serif'}}>Ben Adnan</div>
<div className="text-sm text-white/50">Expert E-commerce &amp; Entrepreneur Digital</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="prose prose-invert prose-sm md:prose-base text-white/70 leading-relaxed mb-10">
<p className="mb-4">
                            Ben Adnan est entrepreneur digital et expert en e-commerce. Après avoir lui-même lancé et rentabilisé plusieurs boutiques en ligne, il a créé le Cashflow Business Club avec une mission claire : permettre à n'importe qui — étudiant ou salarié — de construire une source de revenu solide grâce au e-commerce, sans perdre des années à tout apprendre seul.
                        </p>
<p className="mb-4">
                            Convaincu que la méthode prime sur la motivation, il a structuré le programme ECOM360 V3 pour que chaque membre ait un système clair, des coachs disponibles et une communauté active pour ne jamais rester bloqué.
                        </p>
<p className="">
                            Aujourd'hui, le CBC accompagne des centaines d'entrepreneurs à travers plusieurs pays d'Afrique francophone.
                        </p>
</div>

<div className="flex flex-wrap gap-4">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#0A0A0A] text-xs text-white/80">
<iconify-icon className="text-[#F5C842]" icon="solar:rocket-linear"></iconify-icon> +200 membres formés
                        </div>
<div className="inline-flex gap-2 text-xs text-white/80 bg-[#0A0A0A] border-white/10 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">6 pays africains</div>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#0A0A0A] text-xs text-white/80">
<iconify-icon className="text-[#F5C842]" icon="solar:crown-linear"></iconify-icon> Fondateur ECOM360 V3
                        </div>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 py-12 px-6 bg-[#0A0A0A]">
<div className="flex flex-col text-center max-w-7xl mr-auto ml-auto gap-x-6 gap-y-6 items-center justify-center">
<div className="text-[#F5C842] tracking-tight text-xl font-medium" style={{fontFamily: '\'Syne\', sans-serif'}}>
                Cashflow Business Club
            </div>
<div className="text-sm text-white/50">
                © 2025 Cashflow Business Club · Tous droits réservés
            </div>
<div className="text-[10px] md:text-xs text-white/30 max-w-2xl mx-auto leading-relaxed">
                Avertissement : Les résultats présentés ne sont pas typiques et peuvent varier selon votre niveau d'implication, votre éthique de travail et les conditions de marché. L'e-commerce comporte des risques.
            </div>
</div>
</footer>



    </>
  );
}
