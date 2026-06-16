import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Scroll Reveal Script
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Only animate once
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#d7bef1] rounded-full blur-[120px] opacity-20 blob-bg"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ba9cdc] rounded-full blur-[100px] opacity-10 blob-bg" style={{animationDelay: '2s'}}></div>
</div>

<nav className="fixed w-full z-50 top-0 left-0 border-b border-[#ba9cdc]/10 bg-[#fefae0]/80 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
<a className="group flex items-center gap-3" href="#">
<div className="w-8 h-8 bg-[#1a1a1a] text-[#fefae0] flex items-center justify-center rounded-sm font-bold text-lg group-hover:scale-105 transition-transform duration-300">C</div>
<span className="text-sm tracking-[0.2em] font-medium text-[#1a1a1a] uppercase group-hover:opacity-70 transition-opacity">
                    Codito
                </span>
</a>
<div className="hidden md:flex items-center space-x-10 text-xs font-medium text-[#1a1a1a]/70 uppercase tracking-widest">
<a className="hover:text-[#9a78c1] transition-colors duration-300 hover-line" href="#vision">Vision</a>
<a className="hover:text-[#9a78c1] transition-colors duration-300 hover-line" href="#expertise">Expertise</a>
<a className="hover:text-[#9a78c1] transition-colors duration-300 hover-line" href="#agents">Agents</a>
<a className="hover:text-[#9a78c1] transition-colors duration-300 hover-line" href="#methode">Méthode</a>
</div>
<a className="hidden md:flex items-center gap-2 px-6 py-3 border border-[#1a1a1a]/10 bg-transparent text-[#1a1a1a] text-xs font-medium tracking-wide hover:bg-[#1a1a1a] hover:text-[#fefae0] hover:border-[#1a1a1a] transition-all duration-500 rounded-sm group" href="#contact">
<span>Contact</span>
<svg aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-300" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</nav>

<header className="relative pt-44 pb-32 md:pt-60 md:pb-40 px-6 max-w-7xl mx-auto border-x border-[#ba9cdc]/5 min-h-screen flex flex-col justify-center z-10">
<div className="max-w-5xl">
<div className="animate-hero-1 inline-flex items-center gap-3 px-4 py-1.5 mb-10 border border-[#9a78c1]/20 rounded-full bg-white/40 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9a78c1] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#9a78c1]"></span>
</span>
<span className="text-[10px] font-semibold text-[#9a78c1] tracking-[0.15em] uppercase">Intelligence Artificielle &amp; Design</span>
</div>
<h1 className="animate-hero-2 text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-[#1a1a1a] leading-[0.95] mb-10">
                L'art du code.<br/>
<span className="text-[#9a78c1] italic font-serif">La science de l'IA.</span>
</h1>
<p className="animate-hero-3 text-lg md:text-xl text-[#1a1a1a]/60 font-light leading-relaxed max-w-2xl mb-16 pl-1 md:pl-2 border-l border-[#ba9cdc]/30">
                Nous sommes les architectes d'une nouvelle ère digitale. Codito Ergo Sum conçoit des écosystèmes où l'intelligence artificielle n'est pas un gadget, mais le cœur battant de votre croissance.
            </p>
<div className="animate-hero-4 flex flex-col sm:flex-row gap-5 items-start">
<a className="group relative overflow-hidden inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1a1a1a] text-[#fefae0] text-xs uppercase font-medium tracking-widest shadow-xl shadow-[#1a1a1a]/10 transition-all duration-300 hover:shadow-2xl hover:shadow-[#9a78c1]/20" href="#contact">
<span className="absolute inset-0 w-full h-full bg-[#9a78c1] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
<span className="relative z-10">Démarrer le projet</span>
<svg aria-hidden="true" className="relative z-10 group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-[#1a1a1a]/20 text-[#1a1a1a] text-xs uppercase font-medium tracking-widest hover:border-[#9a78c1] hover:text-[#9a78c1] transition-all duration-300" href="#expertise">
                    Nos réalisations
                </a>
</div>
</div>
</header>

<section className="relative py-32 md:py-40 px-6 border-t border-[#ba9cdc]/10 z-10" id="vision">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32 items-center">
<div className="reveal-on-scroll">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1a1a1a] mb-8 leading-tight">
                    Au-delà de l'automatisation,<br/>
<span className="text-[#9a78c1] font-serif italic">l'élévation.</span>
</h2>
<div className="w-16 h-[1px] bg-[#9a78c1] mb-10"></div>
<p className="text-lg text-[#1a1a1a]/70 leading-relaxed font-light mb-8">
                    Dans un océan de bruit numérique, nous sculptons le silence de la performance. Notre approche est radicale : supprimer le superflu pour ne laisser place qu'à l'intelligence pure.
                </p>
<p className="text-lg text-[#1a1a1a]/70 leading-relaxed font-light">
                    Nous ne codons pas des fonctionnalités. Nous codons des avantages compétitifs durables, propulsés par des modèles de langage qui comprennent votre métier mieux que n'importe quel logiciel standard.
                </p>
</div>
<div className="grid grid-cols-2 gap-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-[#d7bef1]/30 to-transparent blur-3xl rounded-full -z-10"></div>
<div className="glass-card p-8 md:p-10 flex flex-col items-start gap-6 hover:-translate-y-2 transition-transform duration-700 ease-out reveal-on-scroll">
<span className="p-3 bg-[#fefae0]/50 rounded-full text-[#9a78c1]">
<svg aria-hidden="true" data-icon="lucide:brain-circuit" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M12 5a3 3 0 1 0-5.997.125a4 4 0 0 0-2.526 5.77a4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4M6.003 5.125A3 3 0 0 0 6.401 6.5m-2.924 4.396a4 4 0 0 1 .585-.396M6 18a4 4 0 0 1-1.967-.516M12 13h4m-4 5h6a2 2 0 0 1 2 2v1M12 8h8m-4 0V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></g></svg>
</span>
<div>
<h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Lucidité</h3>
<p className="text-sm text-[#1a1a1a]/50 leading-relaxed font-light">Refus du gadget. Intégration chirurgicale de l'IA.</p>
</div>
</div>
<div className="glass-card p-8 md:p-10 flex flex-col items-start gap-6 mt-12 hover:-translate-y-2 transition-transform duration-700 ease-out reveal-on-scroll delay-100">
<span className="p-3 bg-[#fefae0]/50 rounded-full text-[#9a78c1]">
<svg aria-hidden="true" data-icon="lucide:scan-search" data-strokeWidth="1.5" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="3"></circle><path d="m16 16l-1.9-1.9"></path></g></svg>
</span>
<div>
<h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Précision</h3>
<p className="text-sm text-[#1a1a1a]/50 leading-relaxed font-light">Architecture robuste. Design minimaliste. Zéro dette technique.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto z-10 relative" id="expertise">
<div className="mb-24 md:mb-32 reveal-on-scroll">
<h2 className="text-xs font-semibold tracking-[0.2em] text-[#9a78c1] uppercase mb-6 flex items-center gap-4">
<span className="w-12 h-[1px] bg-[#9a78c1]"></span>
                Architecture
            </h2>
<p className="text-4xl md:text-6xl font-medium tracking-tight text-[#1a1a1a]">Les infrastructures de demain.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal-on-scroll group col-span-1 md:col-span-2 bg-[#fefae0] border border-[#ba9cdc]/20 p-10 md:p-12 hover:border-[#9a78c1]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#9a78c1]/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#d7bef1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="flex justify-between items-start mb-12 relative z-10">
<span className="p-3 bg-[#1a1a1a]/5 rounded-sm text-[#1a1a1a]">
<svg aria-hidden="true" data-icon="lucide:layout-template" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></g></svg>
</span>
<span className="text-[10px] font-semibold text-[#ba9cdc] uppercase tracking-widest border border-[#ba9cdc]/30 px-3 py-1 rounded-full">Sur Mesure</span>
</div>
<h3 className="text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-4 relative z-10">Plateformes Complexes</h3>
<p className="text-base text-[#1a1a1a]/60 mb-8 max-w-lg font-light leading-relaxed relative z-10">
                    Développement d'écosystèmes web capables de supporter des logiques métiers denses. UX centrée sur la décision, performance inégalée.
                </p>
<div className="flex items-center gap-3 text-xs font-medium text-[#9a78c1] relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:zap" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span>Augmenté par : Génération dynamique d'interfaces</span>
</div>
</div>

<div className="reveal-on-scroll delay-100 col-span-1 bg-[#fefae0] border border-[#ba9cdc]/20 p-10 md:p-12 hover:border-[#9a78c1]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#9a78c1]/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-[#d7bef1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="flex justify-between items-start mb-12 relative z-10">
<span className="p-3 bg-[#1a1a1a]/5 rounded-sm text-[#1a1a1a]">
<svg aria-hidden="true" data-icon="lucide:box" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7l8.7 5l8.7-5M12 22V12"></path></g></svg>
</span>
<span className="text-[10px] font-semibold text-[#ba9cdc] uppercase tracking-widest border border-[#ba9cdc]/30 px-3 py-1 rounded-full">SaaS</span>
</div>
<h3 className="text-2xl font-medium text-[#1a1a1a] mb-4 relative z-10">Produits Digitaux</h3>
<p className="text-base text-[#1a1a1a]/60 mb-8 font-light leading-relaxed relative z-10">
                    Transformation d'une vision en actif technologique valorisable. MVP en 4 semaines.
                </p>
<div className="flex items-center gap-3 text-xs font-medium text-[#9a78c1] relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:trending-up" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
<span>Analytique prédictive</span>
</div>
</div>

<div className="reveal-on-scroll col-span-1 bg-[#fefae0] border border-[#ba9cdc]/20 p-10 md:p-12 hover:border-[#9a78c1]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#9a78c1]/5 relative overflow-hidden">
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-[#d7bef1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="flex justify-between items-start mb-12 relative z-10">
<span className="p-3 bg-[#1a1a1a]/5 rounded-sm text-[#1a1a1a]">
<svg aria-hidden="true" data-icon="lucide:workflow" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></g></svg>
</span>
<span className="text-[10px] font-semibold text-[#ba9cdc] uppercase tracking-widest border border-[#ba9cdc]/30 px-3 py-1 rounded-full">Flux</span>
</div>
<h3 className="text-2xl font-medium text-[#1a1a1a] mb-4 relative z-10">Automatisations</h3>
<p className="text-base text-[#1a1a1a]/60 mb-8 font-light leading-relaxed relative z-10">
                    Connexion invisible de vos outils. Élimination des frictions humaines à faible valeur.
                </p>
<div className="flex items-center gap-3 text-xs font-medium text-[#9a78c1] relative z-10 opacity-70 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" data-icon="lucide:link" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></g></svg>
<span>Traitement intelligent</span>
</div>
</div>

<div className="reveal-on-scroll delay-100 col-span-1 md:col-span-2 bg-[#1a1a1a] p-10 md:p-12 text-[#fefae0] relative overflow-hidden group">

<div className="absolute inset-0 bg-[#9a78c1] opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
<div className="absolute top-[-50%] right-[-20%] w-[500px] h-[500px] bg-[#9a78c1] opacity-20 rounded-full blur-[100px] group-hover:scale-110 transition-transform duration-1000"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start mb-8">
<span className="p-3 bg-[#fefae0]/10 rounded-sm text-[#fefae0] border border-[#fefae0]/10">
<svg aria-hidden="true" data-icon="lucide:bot" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</span>
<span className="text-[10px] font-semibold text-[#fefae0]/70 uppercase tracking-widest border border-[#fefae0]/20 px-3 py-1 rounded-full">Innovation</span>
</div>
<div>
<h3 className="text-3xl md:text-4xl font-medium mb-4">Agents IA Autonomes</h3>
<p className="text-base text-[#fefae0]/70 mb-8 max-w-lg font-light leading-relaxed">
                            Des assistants virtuels intégrés au cœur de votre business. Ils comprennent le contexte, exécutent des tâches complexes et apprennent de chaque interaction.
                        </p>
<div className="inline-flex items-center gap-3 text-xs font-medium text-[#fefae0] border-b border-[#fefae0]/30 pb-1">
<svg aria-hidden="true" data-icon="lucide:sparkles" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path><circle cx="4" cy="20" r="2"></circle></g></svg>
<span>Modèles propriétaires fins-tunés sur vos données</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-[#fefae0] z-10" id="agents">

<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ba9cdc]/30 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10 reveal-on-scroll">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#1a1a1a] mb-6">
                        Agent as a Service.
                    </h2>
<p className="text-xl text-[#1a1a1a]/60 font-light">
                        Le changement de paradigme est là. Nous ne livrons pas seulement du code, nous livrons de la <span className="text-[#9a78c1]">cognition</span>.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#ba9cdc]/10 border border-[#ba9cdc]/10 bg-white/30 backdrop-blur-sm reveal-on-scroll">

<div className="group p-10 md:p-14 hover:bg-[#fff]/40 transition-colors duration-500">
<div className="mb-8 text-[#9a78c1] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 origin-left">
<svg aria-hidden="true" data-icon="lucide:library" data-strokeWidth="1" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="m16 6l4 14M12 6v14M8 8v12M4 4v16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Agents de Savoir</h3>
<p className="text-sm text-[#1a1a1a]/60 leading-relaxed font-light">
                        Digestion instantanée de votre base documentaire. Ils synthétisent, répondent et forment vos équipes en temps réel.
                    </p>
</div>

<div className="group p-10 md:p-14 hover:bg-[#fff]/40 transition-colors duration-500">
<div className="mb-8 text-[#9a78c1] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 origin-left">
<svg aria-hidden="true" data-icon="lucide:network" data-strokeWidth="1" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Agents d'Orchestration</h3>
<p className="text-sm text-[#1a1a1a]/60 leading-relaxed font-light">
                        Chefs d'orchestre invisibles. Ils coordonnent les flux entre CRM, ERP et Slack pour fluidifier les processus sans friction.
                    </p>
</div>

<div className="group p-10 md:p-14 hover:bg-[#fff]/40 transition-colors duration-500">
<div className="mb-8 text-[#9a78c1] opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 origin-left">
<svg aria-hidden="true" data-icon="lucide:hammer" data-strokeWidth="1" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="m15 12l-9.373 9.373a1 1 0 0 1-3.001-3L12 9m6 6l4-4"></path><path d="m21.5 11.5l-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></g></svg>
</div>
<h3 className="text-xl font-medium text-[#1a1a1a] mb-4">Agents d'Exécution</h3>
<p className="text-sm text-[#1a1a1a]/60 leading-relaxed font-light">
                        Les mains dans le cambouis. Réservations, génération de contrats, tri d'emails, publication. Ils agissent.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto z-10 relative" id="methode">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
<div className="lg:col-span-4 reveal-on-scroll">
<h2 className="text-3xl font-medium tracking-tight text-[#1a1a1a] mb-6">L'Algorithme Codito</h2>
<p className="text-base text-[#1a1a1a]/60 leading-relaxed font-light mb-10">
                    Nous avançons avec la rigueur d'un cabinet de stratégie et l'agilité d'un studio produit. Pas de tunnel obscur, mais une itération éclairée.
                </p>
<div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#9a78c1] border border-[#9a78c1]/20 px-4 py-2 rounded-full">
<span className="w-1.5 h-1.5 rounded-full bg-[#9a78c1]"></span>
                    Transparence totale
                </div>
</div>
<div className="lg:col-span-8 space-y-4">

<div className="reveal-on-scroll group flex flex-col md:flex-row md:items-center gap-6 p-8 border border-[#ba9cdc]/10 bg-white/20 hover:bg-white/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#ba9cdc]/5">
<span className="text-4xl font-light text-[#ba9cdc]/50 group-hover:text-[#9a78c1] transition-colors font-serif italic">01</span>
<div className="h-10 w-[1px] bg-[#ba9cdc]/20 hidden md:block"></div>
<div>
<h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Immersion Stratégique</h3>
<p className="text-sm text-[#1a1a1a]/60 font-light">Audit de l'existant. Identification des leviers IA à fort ROI.</p>
</div>
</div>

<div className="reveal-on-scroll delay-75 group flex flex-col md:flex-row md:items-center gap-6 p-8 border border-[#ba9cdc]/10 bg-white/20 hover:bg-white/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#ba9cdc]/5">
<span className="text-4xl font-light text-[#ba9cdc]/50 group-hover:text-[#9a78c1] transition-colors font-serif italic">02</span>
<div className="h-10 w-[1px] bg-[#ba9cdc]/20 hidden md:block"></div>
<div>
<h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Design &amp; Architecture</h3>
<p className="text-sm text-[#1a1a1a]/60 font-light">Conception des interfaces et de l'architecture technique. Le design sert la fonction.</p>
</div>
</div>

<div className="reveal-on-scroll delay-100 group flex flex-col md:flex-row md:items-center gap-6 p-8 border border-[#ba9cdc]/10 bg-white/20 hover:bg-white/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#ba9cdc]/5">
<span className="text-4xl font-light text-[#ba9cdc]/50 group-hover:text-[#9a78c1] transition-colors font-serif italic">03</span>
<div className="h-10 w-[1px] bg-[#ba9cdc]/20 hidden md:block"></div>
<div>
<h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Développement Hybride</h3>
<p className="text-sm text-[#1a1a1a]/60 font-light">Construction modulaire. Intégration LLM et APIs. Code propre, documenté.</p>
</div>
</div>

<div className="reveal-on-scroll delay-150 group flex flex-col md:flex-row md:items-center gap-6 p-8 border border-[#ba9cdc]/10 bg-white/20 hover:bg-white/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#ba9cdc]/5">
<span className="text-4xl font-light text-[#ba9cdc]/50 group-hover:text-[#9a78c1] transition-colors font-serif italic">04</span>
<div className="h-10 w-[1px] bg-[#ba9cdc]/20 hidden md:block"></div>
<div>
<h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Déploiement &amp; Apprentissage</h3>
<p className="text-sm text-[#1a1a1a]/60 font-light">Mise en ligne. L'IA apprend et le produit s'affine avec le temps.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#121212] text-[#fefae0] relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9a78c1] rounded-full blur-[150px] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-xs font-semibold tracking-[0.2em] text-[#ba9cdc] uppercase mb-16 opacity-80 text-center md:text-left">Confiance &amp; Impact</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
<div className="space-y-6 group reveal-on-scroll">
<div className="text-[#9a78c1] mb-2 transform group-hover:scale-110 transition-transform duration-500 origin-left">
<svg aria-hidden="true" data-icon="lucide:landmark" data-strokeWidth="1" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M10 18v-7m1.12-8.802a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949zM14 18v-7m4 7v-7M3 22h18M6 18v-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h3 className="text-xl font-medium">Institutions</h3>
<p className="text-sm text-[#fefae0]/50 leading-relaxed font-light">
                        Modernisation de processus administratifs complexes avec des contraintes de sécurité maximales et souveraineté des données.
                    </p>
</div>
<div className="space-y-6 group reveal-on-scroll delay-100">
<div className="text-[#9a78c1] mb-2 transform group-hover:scale-110 transition-transform duration-500 origin-left">
<svg aria-hidden="true" data-icon="lucide:rocket" data-strokeWidth="1" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></g></svg>
</div>
<h3 className="text-xl font-medium">Startups Series A</h3>
<p className="text-sm text-[#fefae0]/50 leading-relaxed font-light">
                        Conception de MVPs augmentés permettant d'atteindre le Product-Market Fit deux fois plus vite grâce à l'IA générative.
                    </p>
</div>
<div className="space-y-6 group reveal-on-scroll delay-200">
<div className="text-[#9a78c1] mb-2 transform group-hover:scale-110 transition-transform duration-500 origin-left">
<svg aria-hidden="true" data-icon="lucide:building-2" data-strokeWidth="1" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M10 12h4m-4-4h4m0 13v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></g></svg>
</div>
<h3 className="text-xl font-medium">Grands Comptes</h3>
<p className="text-sm text-[#fefae0]/50 leading-relaxed font-light">
                        Intégration d'agents IA dans des workflows legacy existants pour des gains de productivité immédiats.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
<div className="glass-card rounded-sm p-12 md:p-24 text-center reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#1a1a1a] mb-16">
                Pourquoi Codito Ergo Sum ?
            </h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-12 divide-y sm:divide-y-0 sm:divide-x divide-[#ba9cdc]/20">
<div className="flex flex-col items-center pt-8 sm:pt-0">
<span className="text-5xl font-light text-[#9a78c1] mb-4 font-serif italic">x2</span>
<span className="text-xs font-semibold text-[#1a1a1a] uppercase tracking-widest">Vélocité</span>
<span className="text-[10px] text-[#1a1a1a]/50 mt-2 uppercase tracking-wide">Stacks IA propriétaires</span>
</div>
<div className="flex flex-col items-center pt-8 sm:pt-0">
<span className="text-5xl font-light text-[#9a78c1] mb-4 font-serif italic">-30%</span>
<span className="text-xs font-semibold text-[#1a1a1a] uppercase tracking-widest">Coûts de structure</span>
<span className="text-[10px] text-[#1a1a1a]/50 mt-2 uppercase tracking-wide">Automatisation</span>
</div>
<div className="flex flex-col items-center pt-8 sm:pt-0">
<span className="text-5xl font-light text-[#9a78c1] mb-4 font-serif italic">100%</span>
<span className="text-xs font-semibold text-[#1a1a1a] uppercase tracking-widest">Propriété</span>
<span className="text-[10px] text-[#1a1a1a]/50 mt-2 uppercase tracking-wide">Code source &amp; Data</span>
</div>
</div>
</div>
</section>

<section className="py-40 px-6 bg-[#fefae0] border-t border-[#ba9cdc]/10 relative z-10" id="contact">
<div className="max-w-4xl mx-auto text-center reveal-on-scroll">
<div className="inline-block p-4 rounded-full bg-[#9a78c1]/10 mb-8 animate-float">
<svg aria-hidden="true" className="text-[#9a78c1]" data-icon="lucide:message-square" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</div>
<h2 className="text-5xl md:text-7xl font-medium tracking-tighter text-[#1a1a1a] mb-8 leading-[0.9]">
                Parlons <span className="text-[#9a78c1] font-serif italic">stratégie</span>.
            </h2>
<p className="text-lg text-[#1a1a1a]/60 mb-12 max-w-xl mx-auto font-light">
                Pas de commerciaux, mais des architectes. Discutons de vos enjeux et voyons si notre approche correspond à votre ambition.
            </p>
<a className="group inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#1a1a1a] text-[#fefae0] text-sm uppercase font-medium tracking-widest hover:bg-[#9a78c1] transition-all duration-500 shadow-2xl shadow-[#1a1a1a]/20 hover:shadow-[#9a78c1]/30" href="mailto:contact@coditoergosum.fr">
                Réserver un échange
                <svg aria-hidden="true" className="group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<p className="mt-10 text-[10px] text-[#1a1a1a]/30 uppercase tracking-widest">
                Réponse sous 24h ouvrées.
            </p>
</div>
</section>

<footer className="py-10 px-6 border-t border-[#ba9cdc]/10 bg-[#fefae0] z-10 relative">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-[#1a1a1a]/40 uppercase tracking-widest font-medium">
<div className="mb-4 md:mb-0">Codito Ergo Sum © 2024</div>
<div className="flex gap-8">
<a className="hover:text-[#9a78c1] transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-[#9a78c1] transition-colors" href="#">LinkedIn</a>
<a className="hover:text-[#9a78c1] transition-colors" href="#">X (Twitter)</a>
</div>
</div>
</footer>


    </>
  );
}
