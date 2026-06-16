import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Icons
        lucide.createIcons();

        // Scroll Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

        // Modal Logic
        const overlay = document.getElementById('modal-overlay');
        const content = document.getElementById('modal-content');

        window.openModal = function() {
            overlay.classList.remove('hidden');
            setTimeout(() => {
                overlay.classList.remove('opacity-0');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
            }, 10);
            document.body.style.overflow = 'hidden';
        }

        window.closeModal = function() {
            overlay.classList.add('opacity-0');
            content.classList.remove('scale-100');
            content.classList.add('scale-95');
            setTimeout(() => {
                overlay.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b backdrop-blur-xl transition-all duration-300 border-white/5 bg-black/50">
<div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-primary rounded-sm"></div>
<span className="font-display font-medium tracking-tight text-lg text-white">Kompozith</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors hover:text-white text-neutral-400" href="#solution">Solution</a>
<a className="text-sm font-medium transition-colors hover:text-white text-neutral-400" href="#process">Processus</a>
<a className="text-sm font-medium transition-colors hover:text-white text-neutral-400" href="#work">Launch 90</a>
<a className="text-sm font-medium transition-colors hover:text-white text-neutral-400" href="#pricing">Tarifs</a>
<button className="hover:border-primary/50 transition-all hover:bg-white/10 text-sm font-medium text-white bg-white/5 border-white/10 border rounded pt-2 pr-4 pb-2 pl-4" onclick="document.getElementById('contact').scrollIntoView()">
                    Démarrer un projet
                </button>
</div>
</div>
</nav>

<div className="fixed bottom-6 right-6 z-40 md:hidden">
<button className="bg-primary font-medium text-sm px-5 py-3 rounded-full shadow-lg shadow-orange-500/20 flex items-center gap-2 text-white" onclick="document.getElementById('contact').scrollIntoView()">
            Démarrer <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<section className="min-h-screen flex flex-col overflow-hidden bg-black border-white/5 border-b pt-20 pr-6 pl-6 relative items-center justify-center">

<div className="absolute inset-0 bg-grid-pattern pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse-slow"></div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto relative space-y-8">
<div className="inline-flex gap-2 text-primary reveal-on-scroll is-visible text-xs font-mono border-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm items-center bg-white/5">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Tech &amp; Digital Product Agency
            </div>
<h1 className="leading-[1.05] reveal-on-scroll delay-100 is-visible md:text-7xl lg:text-7xl text-5xl font-semibold text-white tracking-tighter font-display">
                De l'idée à vos premiers <br className="hidden md:block"/>
<span className="bg-clip-text italic text-transparent bg-gradient-to-r from-orange-400 via-[#ffbe33] to-orange-600">prospects en 90 jours</span>
</h1>
<p className="md:text-xl leading-relaxed reveal-on-scroll delay-200 is-visible text-lg font-light text-neutral-400 max-w-2xl mr-auto ml-auto">
                Branding, UX/UI, développement web/app et marketing digital. Nous sommes le partenaire stratégique qui transforme votre idée en produit rentable.
            </p>
<div className="flex flex-col md:flex-row gap-4 reveal-on-scroll delay-300 is-visible pt-8 items-center justify-center">
<button className="btn-hover-effect group inline-flex transition-all duration-200 hover:bg-primaryDim text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 rounded px-8 py-3.5 relative items-center justify-center" onclick="document.getElementById('contact').scrollIntoView()">
                    Lancer votre Projet
                </button>
<button className="transition-colors hover:text-white hover:border-neutral-700 text-sm font-medium text-neutral-300 border-transparent border-b pt-3.5 pr-8 pb-3.5 pl-8" onclick="document.getElementById('pricing').scrollIntoView()">
                    Voir les offres
                </button>
</div>
</div>

<div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t to-transparent pointer-events-none from-black"></div>
</section>

<section className="border-white/5 border-b pt-24 pb-24 bg-neutral-950/30" id="solution">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 items-start">
<div className="lg:col-span-1 reveal-on-scroll is-visible">
<h2 className="md:text-3xl leading-tight text-2xl font-semibold text-white tracking-tight">
                        Une expertise <span className="text-primary">hybride</span> 360°
                    </h2>
<p className="mt-4 text-sm text-neutral-500 leading-relaxed">
                        Contrairement aux agences fragmentées, nous maîtrisons toute la chaîne de valeur : du design à l'acquisition.
                    </p>
</div>
<div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="space-y-4 reveal-on-scroll delay-100 is-visible p-6 border border-white/5 rounded-xl bg-black/20 hover:border-white/10 transition-colors">
<div className="flex text-primary bg-orange-500/10 w-10 h-10 border-orange-500/20 border rounded items-center justify-center">
<i className="w-5 h-5" data-lucide="palette"></i>
</div>
<h3 className="font-display text-lg font-medium text-white">Branding &amp; Design</h3>
<p className="text-sm leading-relaxed text-neutral-500">
                            Positionnement stratégique, identité visuelle forte et UX/UI haut de gamme pour inspirer confiance et convertir.
                        </p>
</div>

<div className="space-y-4 reveal-on-scroll delay-200 is-visible p-6 border border-white/5 rounded-xl bg-black/20 hover:border-white/10 transition-colors">
<div className="flex text-primary bg-orange-500/10 w-10 h-10 border-orange-500/20 border rounded items-center justify-center">
<i className="w-5 h-5" data-lucide="code-2"></i>
</div>
<h3 className="font-display text-lg font-medium text-white">Produit &amp; Tech</h3>
<p className="text-sm leading-relaxed text-neutral-500">
                            Développement web et mobile robuste (React, Node, Mobile). Architecture scalable et automatisations internes.
                        </p>
</div>

<div className="reveal-on-scroll delay-300 is-visible space-y-4 p-6 border border-white/5 rounded-xl bg-black/20 hover:border-white/10 transition-colors">
<div className="flex text-primary bg-orange-500/10 w-10 h-10 border-orange-500/20 border rounded items-center justify-center">
<i className="w-5 h-5" data-lucide="rocket"></i>
</div>
<h3 className="font-display text-lg font-medium text-white">Growth &amp; Marketing</h3>
<p className="text-sm leading-relaxed text-neutral-500">
                            Stratégies d'acquisition (Ads, SEO, Funnels) pour générer du trafic qualifié et vos premiers revenus dès le lancement.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="pt-32 pr-6 pb-32 pl-6 relative" id="work">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll is-visible">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-4">Le programme LAUNCH 90™</h2>
<div className="inline-block uppercase text-xs text-neutral-500 tracking-widest font-mono bg-white/5 border-white/10 border rounded-full pt-1 pr-4 pb-1 pl-4">
                    De l'idée au revenu
                </div>
</div>
<div className="relative border p-8 md:p-12 rounded-xl reveal-on-scroll overflow-hidden is-visible border-white/10 bg-neutral-900/40">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none"></div>
<div className="grid md:grid-cols-2 gap-12 relative z-10">
<div className="space-y-8">
<div>
<h3 className="text-primary uppercase text-xs tracking-wider font-mono mb-6">Inclus dans le programme</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 group">
<div className="mt-0.5 text-primary"><i className="w-4 h-4" data-lucide="check"></i></div>
<span className="group-hover:text-white transition-colors text-sm text-neutral-300">Stratégie &amp; Vision (Positionnement, Roadmap)</span>
</li>
<li className="flex items-start gap-3 group">
<div className="mt-0.5 text-primary"><i className="w-4 h-4" data-lucide="check"></i></div>
<span className="text-sm group-hover:text-white transition-colors text-neutral-300">Branding Pro <span className="text-xs ml-1 text-neutral-600">(Logo, Charte, Pitch Deck)</span></span>
</li>
<li className="flex items-start gap-3 group">
<div className="mt-0.5 text-primary"><i className="w-4 h-4" data-lucide="check"></i></div>
<span className="text-sm group-hover:text-white transition-colors text-neutral-300">Développement Web/Mobile &amp; Automations</span>
</li>
<li className="flex items-start gap-3 group">
<div className="mt-0.5 text-primary"><i className="w-4 h-4" data-lucide="check"></i></div>
<span className="text-sm group-hover:text-white transition-colors text-neutral-300">Marketing de Lancement (Ads, Funnels)</span>
</li>
</ul>
</div>
</div>
<div className="flex flex-col justify-between border-t md:border-t-0 md:border-l pt-8 md:pt-0 md:pl-12 border-white/10">
<div>
<p className="text-xs uppercase tracking-wider mb-4 text-neutral-500 font-mono">Pourquoi choisir Launch 90 ?</p>
<div className="space-y-3">
<div className="border p-3 rounded flex items-center gap-3 transition-colors bg-black/40 border-white/5 hover:border-white/10">
<i className="w-4 h-4 text-primary" data-lucide="zap"></i>
<span className="text-xs text-neutral-300">Rapidité d'exécution (3 mois max)</span>
</div>
<div className="border p-3 rounded flex items-center gap-3 transition-colors bg-black/40 border-white/5 hover:border-white/10">
<i className="w-4 h-4 text-primary" data-lucide="users"></i>
<span className="text-xs text-neutral-300">Un seul partenaire pour tout gérer</span>
</div>
</div>
</div>
<div className="mt-8">
<button className="w-full font-semibold text-sm py-4 rounded transition-colors duration-300 bg-white text-black hover:bg-neutral-200" onclick="document.getElementById('contact').scrollIntoView()">
                                Postuler au programme
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative z-10 max-w-4xl sm:pt-20 md:pt-28 text-center mr-auto ml-auto pt-14 pb-12">
<div className="mb-6 flex items-center justify-center gap-4">
<div className="flex -space-x-3">
<div className="h-9 w-9 rounded-full ring-2 ring-black bg-neutral-800 flex items-center justify-center text-xs text-white">A</div>
<div className="h-9 w-9 rounded-full ring-2 ring-black bg-neutral-700 flex items-center justify-center text-xs text-white">B</div>
<div className="h-9 w-9 rounded-full ring-2 ring-black bg-neutral-600 flex items-center justify-center text-xs text-white">C</div>
<div className="h-9 w-9 rounded-full ring-2 ring-black bg-neutral-500 flex items-center justify-center text-xs text-white">D</div>
</div>
<div className="flex flex-col items-start">
<div className="flex items-center text-orange-500">
<i className="h-3 w-3 fill-current" data-lucide="star"></i>
<i className="h-3 w-3 fill-current" data-lucide="star"></i>
<i className="h-3 w-3 fill-current" data-lucide="star"></i>
<i className="h-3 w-3 fill-current" data-lucide="star"></i>
<i className="h-3 w-3 fill-current" data-lucide="star"></i>
</div>
<p className="mt-1 text-xs font-medium text-white/70">Confiance gagnée par l'expertise</p>
</div>
</div>
<h2 className="max-w-5xl sm:text-5xl md:text-6xl text-3xl tracking-tighter font-display mr-auto ml-auto">
            Prêt à <span className="italic text-neutral-400 font-serif">propulser</span> votre croissance ?
        </h2>
<p className="max-w-2xl sm:text-lg text-base font-normal text-white/60 mt-6 mr-auto ml-auto">
            Nous construisons des systèmes d'acquisition rentables pour les marques digitales. Si la croissance mesurable est votre objectif, vous êtes au bon endroit.
        </p>
</section>

<section className="relative pt-24 pb-48 overflow-hidden bg-black" id="process">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-24 reveal-on-scroll is-visible">
<h2 className="text-3xl md:text-4xl tracking-tight font-display font-semibold text-white">Le Processus 4P</h2>
<p className="mt-4 text-sm text-neutral-500">Notre framework éprouvé pour éliminer le risque.</p>
</div>
<div className="relative">

<div className="absolute left-1/2 top-0 bottom-0 w-px transform -translate-x-1/2 hidden md:block bg-white/10"></div>

<div className="min-h-[40vh] flex flex-col md:flex-row items-center justify-between gap-12 group mb-12">
<div className="w-full md:w-5/12 order-2 md:order-1 reveal-on-scroll is-visible">
<div className="aspect-video border rounded-lg flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors border-white/10 bg-neutral-900/50">
<i className="w-12 h-12 group-hover:text-primary transition-colors text-neutral-700" data-lucide="brain-circuit"></i>
<div className="absolute bottom-3 left-3 px-2 py-1 text-[10px] font-mono border text-primary uppercase bg-black/80 border-white/10">Phase 01</div>
</div>
</div>
<div className="w-full md:w-5/12 order-1 md:order-2 reveal-on-scroll delay-100 md:text-left is-visible">
<span className="text-primary font-mono text-xs mb-2 block">01 &amp; 02</span>
<h3 className="text-xl font-display font-medium mb-3 text-white">Penser &amp; Prototyper</h3>
<p className="text-sm leading-relaxed mb-6 text-neutral-400">
                            Diagnostic complet, stratégie marché et conception UX/UI. Nous validons l'expérience utilisateur et l'identité visuelle avant d'écrire la moindre ligne de code.
                        </p>
</div>
</div>

<div className="min-h-[40vh] flex flex-col md:flex-row items-center justify-between gap-12 group mb-12">
<div className="w-full md:w-5/12 order-1 reveal-on-scroll md:text-right is-visible">
<span className="text-primary font-mono text-xs mb-2 block">03</span>
<h3 className="text-xl font-display font-medium mb-3 text-white">Produire</h3>
<p className="text-sm leading-relaxed mb-6 text-neutral-400">
                            Développement web et mobile. Intégration des API et mise en place des dashboard admins. Une infrastructure robuste, sécurisée et prête pour le trafic.
                        </p>
</div>
<div className="w-full md:w-5/12 order-2 reveal-on-scroll delay-100 is-visible">
<div className="aspect-video border rounded-lg flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors border-white/10 bg-neutral-900/50">
<i className="w-12 h-12 group-hover:text-primary transition-colors text-neutral-700" data-lucide="monitor-smartphone"></i>
<div className="absolute bottom-3 left-3 px-2 py-1 text-[10px] font-mono border text-primary uppercase bg-black/80 border-white/10">Phase 03</div>
</div>
</div>
</div>

<div className="min-h-[40vh] flex flex-col md:flex-row items-center justify-between gap-12 group">
<div className="w-full md:w-5/12 order-2 md:order-1 reveal-on-scroll is-visible">
<div className="aspect-video border rounded-lg flex items-center justify-center relative overflow-hidden group-hover:border-primary/50 transition-colors border-white/10 bg-neutral-900/50">
<i className="w-12 h-12 group-hover:text-primary transition-colors text-neutral-700" data-lucide="rocket"></i>
<div className="absolute bottom-3 left-3 px-2 py-1 text-[10px] font-mono border text-primary uppercase bg-black/80 border-white/10">Phase 04</div>
</div>
</div>
<div className="w-full md:w-5/12 order-1 md:order-2 reveal-on-scroll delay-100 md:text-left is-visible">
<span className="text-primary font-mono text-xs mb-2 block">04</span>
<h3 className="text-xl font-display font-medium mb-3 text-white">Propulser</h3>
<p className="text-sm leading-relaxed mb-6 text-neutral-400">
                            Lancement marketing. Landing pages de conversion, configuration CRM et campagnes publicitaires (Meta/Google). Nous amenons vos premiers utilisateurs.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden border-t bg-neutral-900 border-white/10" id="contact">
<div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b via-transparent pointer-events-none from-black to-black"></div>
<div className="max-w-3xl mx-auto text-center relative z-10 reveal-on-scroll is-visible">
<div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-primary/20">
<i className="w-8 h-8 text-primary" data-lucide="scan-line"></i>
</div>
<h2 className="text-4xl md:text-5xl tracking-tight mb-6 font-display font-semibold text-white">Vérification d'éligibilité</h2>
<p className="text-lg mb-10 max-w-xl mx-auto font-light text-neutral-400">
                Nous limitons nos collaborations pour garantir une qualité maximale. Remplissez le questionnaire pour voir si votre projet se qualifie pour LAUNCH 90.
            </p>
<button className="group inline-flex transition-all duration-200 hover:bg-primaryDim hover:scale-[1.02] shadow-lg shadow-primary/25 font-semibold text-white bg-primary rounded-lg pt-4 pr-8 pb-4 pl-8 relative items-center justify-center" onclick="openModal()">
                Commencer le questionnaire
                <i className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right"></i>
</button>
<p className="mt-6 text-xs font-mono text-neutral-600">Temps requis : 60s • Sans engagement</p>
</div>
</section>

<section className="py-24 px-6 bg-black" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-display font-semibold text-white">Nos Offres</h2>
<p className="text-neutral-500 mt-2">Flexibilité totale ou pack clé en main.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="border p-8 rounded-xl transition-colors reveal-on-scroll flex flex-col is-visible border-white/10 bg-neutral-900/20 hover:border-neutral-700">
<h3 className="text-base font-medium mb-2 text-neutral-300">Sur-Mesure</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-sm text-neutral-400">À partir de</span>
<span className="text-2xl font-sans font-semibold text-white block ml-2">180k FCFA</span>
</div>
<p className="text-xs text-neutral-500 mb-6 font-mono h-10">Sélectionnez uniquement les services dont vous avez besoin.</p>
<ul className="text-sm space-y-3 mb-8 flex-1 text-neutral-400">
<li className="flex gap-2"><i className="w-4 h-4 text-neutral-600" data-lucide="check"></i> Logo &amp; Identité (180k+)</li>
<li className="flex gap-2"><i className="w-4 h-4 text-neutral-600" data-lucide="check"></i> UI Kit Pro (150k+)</li>
<li className="flex gap-2"><i className="w-4 h-4 text-neutral-600" data-lucide="check"></i> Site Vitrine (250k+)</li>
<li className="flex gap-2"><i className="w-4 h-4 text-neutral-600" data-lucide="check"></i> Landing Page (120k+)</li>
</ul>
<button className="w-full py-2 border rounded text-sm transition-colors border-white/10 hover:bg-white/5 text-neutral-300">Configurer mon pack</button>
</div>

<div className="border border-primary/40 p-8 rounded-xl relative reveal-on-scroll delay-100 flex flex-col shadow-[0_0_30px_-10px_rgba(255,68,0,0.15)] is-visible bg-neutral-900/40">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-[10px] font-bold px-3 py-1 uppercase tracking-widest rounded-full text-white font-mono">Recommandé</div>
<h3 className="text-base font-medium text-primary mb-2">Launch™ Start</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-sans font-semibold text-white">650k - 1M</span>
<span className="text-sm text-neutral-500 font-mono"> FCFA</span>
</div>
<p className="text-xs text-neutral-400 mb-6 font-mono h-10">Le pack essentiel pour lancer un site pro et son système marketing.</p>
<ul className="text-sm space-y-3 mb-8 flex-1 text-neutral-300">
<li className="flex gap-2"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Identité Visuelle Express</li>
<li className="flex gap-2"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Site Pro + Admin Center</li>
<li className="flex gap-2"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Landing Page Optimisée</li>
<li className="flex gap-2"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Base Automatisations Marketing</li>
<li className="flex gap-2"><i className="w-4 h-4 text-primary" data-lucide="check"></i> Support 30 jours</li>
</ul>
<button className="w-full py-2 bg-primary rounded text-sm hover:bg-primaryDim transition-colors text-white font-medium">Choisir Launch Start</button>
</div>

<div className="border p-8 rounded-xl transition-colors reveal-on-scroll delay-200 flex flex-col is-visible border-white/10 bg-neutral-900/20 hover:border-neutral-700">
<h3 className="text-base font-medium mb-2 text-neutral-300">Launch™ Full</h3>
<div className="flex items-baseline gap-1 mb-6">
<span className="text-3xl font-sans font-semibold text-white">2.5M - 4.5M</span>
<span className="text-sm text-neutral-500 font-mono"> FCFA</span>
</div>
<p className="text-xs text-neutral-500 mb-6 font-mono h-10">Solution tech complète pour startups ambitieuses.</p>
<ul className="text-sm space-y-3 mb-8 flex-1 text-neutral-400">
<li className="flex gap-2"><i className="w-4 h-4 text-neutral-600" data-lucide="check"></i> App Web/Mobile Complète</li>
<li className="flex gap-2"><i className="w-4 h-4 text-neutral-600" data-lucide="check"></i> Branding &amp; UX Design Avancé</li>
<li className="flex gap-2"><i className="w-4 h-4 text-neutral-600" data-lucide="check"></i> Stratégie de Lancement &amp; Ads</li>
<li className="flex gap-2"><i className="w-4 h-4 text-neutral-600" data-lucide="check"></i> Funnels Complets &amp; CRM</li>
</ul>
<button className="w-full py-2 border rounded text-sm transition-colors border-white/10 hover:bg-white/5 text-neutral-300">Contacter l'équipe</button>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-primary rounded-sm"></div>
<span className="font-display font-medium tracking-tight text-white">Kompozith</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-primary transition-colors" href="#">Conditions</a>
<a className="hover:text-primary transition-colors" href="#">Confidentialité</a>
<a className="hover:text-primary transition-colors" href="#">Twitter</a>
<a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
</div>
<p className="text-xs text-neutral-700">© 2024 Kompozith Inc.</p>
</div>
</footer>

<div className="fixed inset-0 z-[60] backdrop-blur-sm hidden flex items-center justify-center p-4 opacity-0 transition-opacity duration-300 bg-black/80" id="modal-overlay">
<div className="w-full max-w-lg border rounded-xl relative transform scale-95 transition-transform duration-300 shadow-2xl border-white/10 bg-neutral-900" id="modal-content">
<div className="p-6 border-b flex justify-between items-center border-white/5">
<h3 className="font-display text-lg font-medium text-white">Formulaire de qualification</h3>
<button className="transition-colors hover:text-white text-neutral-500" onclick="closeModal()">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="p-8 text-center space-y-6">
<div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-white/5">
<i className="w-8 h-8 text-neutral-500" data-lucide="file-text"></i>
</div>
<div>
<p className="font-medium mb-2 text-white">Intégration Typeform/Tally</p>
<p className="text-sm text-neutral-500">Ce modal connecterait vers votre formulaire de qualification pour filtrer les leads.</p>
</div>
<button className="w-full py-3 border rounded text-sm transition-colors bg-white/5 border-white/10 hover:bg-white/10 text-white" onclick="closeModal()">Fermer la démo</button>
</div>
</div>
</div>



    </>
  );
}
