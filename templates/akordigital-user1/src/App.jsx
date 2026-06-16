import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



            (function () {
                const toggle = document.getElementById('billingToggle');
                const price = document.getElementById('price');
                const unit = document.getElementById('priceUnit');
                const desc = document.getElementById('planDesc');
                const title = document.getElementById('planTitle');
                const addon = document.getElementById('addonNote');
                const eta = document.getElementById('etaValue');
                const f1 = document.getElementById('feature1');
                const f2 = document.getElementById('feature2');
                const f3 = document.getElementById('feature3');
                const f4 = document.getElementById('feature4');

                const states = {
                    monthly: {
                        price: '450', unit: '/mois', title: 'Maintenance & Support',
                        desc: 'Assurez la pérennité, la sécurité et l\'évolution technique de votre site web.',
                        addon: 'Option SEO incluse (+200€)', eta: 'Immédiat',
                        f1: 'Mises à jour sécurité & plugins', f2: 'Sauvegardes quotidiennes',
                        f3: 'Modifications mineures de contenu', f4: 'Rapport de performance mensuel'
                    },
                    project: {
                        price: '2500', unit: '/projet', title: 'Site Web Vitrine',
                        desc: 'Conception et développement d\'un site web moderne, performant et optimisé.',
                        addon: 'Paiement en 3x sans frais', eta: '2–4 semaines',
                        f1: 'Design sur mesure UI/UX', f2: 'Développement Responsive & SEO',
                        f3: 'Intégration CMS (Gestion autonome)', f4: 'Optimisation vitesse & Mobile'
                    }
                };

                toggle.addEventListener('click', (e) => {
                    const btn = e.target.closest('button');
                    if (!btn) return;
                    const mode = btn.getAttribute('data-billing');
                    const s = states[mode];
                    
                    price.textContent = s.price; unit.textContent = s.unit;
                    title.textContent = s.title; desc.textContent = s.desc;
                    addon.textContent = s.addon; eta.textContent = s.eta;
                    f1.textContent = s.f1; f2.textContent = s.f2;
                    f3.textContent = s.f3; f4.textContent = s.f4;

                    toggle.querySelectorAll('button').forEach(b => {
                        if(b === btn) {
                            b.className = "px-4 py-2 rounded-full text-sm font-medium font-geist bg-white text-black transition-all shadow-sm active:scale-95 duration-200";
                        } else {
                            b.className = "px-4 py-2 rounded-full text-sm font-medium font-geist text-neutral-400 hover:text-white transition-colors active:scale-95 duration-200";
                        }
                    });
                });
            })();
        


        // 1. Initialize Lenis Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing for premium feel
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // 2. Scroll Reveal Observer (Framer Motion fade-in-up emulation)
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('reveal-hidden');
                    entry.target.classList.add('reveal-visible');
                    
                    // Trigger children animations if they exist
                    const children = entry.target.querySelectorAll('.reveal-child');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.classList.remove('opacity-0', 'translate-y-8', 'translate-y-4');
                            child.classList.add('opacity-100', 'translate-y-0');
                        }, index * 100); // Dynamic stagger
                    });
                    
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach(el => {
            el.classList.add('reveal-hidden'); // Add initial hidden state
            observer.observe(el);
        });
        
        // Immediate trigger for Hero children on load
        window.addEventListener('load', () => {
             const heroChildren = document.querySelectorAll('.hero-child');
             heroChildren.forEach((child) => {
                 child.classList.remove('opacity-0', 'translate-y-8');
             });
        });

        // 3. Sticky Navbar Shrink Effect
        const navWrapper = document.getElementById('navbar-wrapper');
        const navContainer = document.getElementById('navbar-container');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                // Shrink state
                navWrapper.classList.remove('pt-4');
                navWrapper.classList.add('pt-2');
                navContainer.classList.add('scale-[0.98]');
            } else {
                // Default state
                navWrapper.classList.add('pt-4');
                navWrapper.classList.remove('pt-2');
                navContainer.classList.remove('scale-[0.98]');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen -z-10 bg-neutral-950">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.15),transparent_50%)]"></div>
<div className="absolute bottom-0 left-0 right-0 h-[500px] bg-[linear-gradient(to_top,rgba(0,0,0,1),transparent)]"></div>
</div>

<nav className="sticky top-0 z-50 w-full pt-4 transition-all duration-300" id="navbar-wrapper">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" id="navbar-container">
<div className="bg-neutral-950/80 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 sm:px-8 sm:py-4 flex items-center justify-between shadow-2xl shadow-black/50 transition-all duration-300">
<div className="flex items-center gap-3">
<span className="text-base sm:text-lg font-medium tracking-tight font-geist text-neutral-100 uppercase">Akordigital</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm transition-colors font-geist text-neutral-400 hover:text-neutral-100 relative group" href="#journey">
                        Approche
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm transition-colors font-geist text-neutral-400 hover:text-neutral-100 relative group" href="#capabilities">
                        Services
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="text-sm transition-colors font-geist text-neutral-400 hover:text-neutral-100 relative group" href="#results">
                        Projets
                        <span className="absolute -bottom-1 left-0 w-0 h-px bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
</a>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm transition-all font-geist border-white/10 bg-white/5 text-neutral-100 hover:bg-white/10 hover:border-white/20 hover:scale-105 active:scale-95 duration-200" href="#contact">
<span>Contact</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</nav>

<section className="relative overflow-hidden pt-4 pb-10 sm:pt-8 sm:pb-20 px-4">
<div className="min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex flex-col sm:p-10 lg:p-20 overflow-hidden bg-neutral-950 max-w-6xl border-white/5 border rounded-3xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 relative shadow-2xl reveal-on-scroll">

<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0a38672-ee19-40e5-8a8f-ddcf0d834caa_1600w.jpg)] bg-cover bg-center opacity-40 mix-blend-overlay pointer-events-none transform scale-105 transition-transform duration-[2s]"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/60 to-neutral-950 pointer-events-none"></div>

<header className="relative z-10 mb-8 sm:mb-16 mt-4 sm:mt-0 flex flex-col justify-center h-full">

<div className="reveal-child opacity-0 translate-y-4 transition-all duration-700 ease-out delay-100 mb-6">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium font-geist uppercase tracking-wider">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Disponible pour nouveaux projets
                    </span>
</div>
<h1 className="flex flex-wrap text-[13vw] sm:text-[10vw] md:text-[8vw] leading-[0.9] select-none font-bold text-white tracking-tighter reveal-child opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
<span>AKOR</span>

<span className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent animate-text-shine">DIGITAL</span>
</h1>
</header>

<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mt-auto">

<div className="flex flex-col gap-6 items-start justify-end reveal-child opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
<div className="hidden sm:block w-6 h-12 border-l border-b border-white/20 rounded-bl-xl ml-1"></div>
<p className="text-sm sm:text-base font-geist text-neutral-300 max-w-xs">Agence digitale orientée performance &amp; conversion.</p>

<button className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-950 rounded-full text-sm font-semibold tracking-tight transition-all active:scale-95 hover:bg-neutral-200 overflow-hidden">
<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
<span className="relative z-10">Voir nos réalisations</span>
<iconify-icon className="relative z-10 group-hover:translate-x-0.5 transition-transform" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
</div>

<div className="flex items-end reveal-child opacity-0 translate-y-8 transition-all duration-700 ease-out delay-300">
<p className="text-xl sm:text-2xl lg:text-3xl font-geist font-light tracking-tight text-neutral-300 leading-tight">
                        Nous façonnons votre présence en ligne avec <span className="font-semibold text-white">audace</span>, <span className="text-neutral-400">stratégie</span>, et une <span className="font-semibold text-white">expertise technique</span> pointue.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-10 px-4 reveal-on-scroll" id="journey">
<div className="max-w-6xl mx-auto bg-neutral-950 border border-white/5 rounded-3xl p-6 sm:p-10 lg:p-20">
<div className="text-center mb-10 sm:mb-16">
<h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight font-geist mb-4 sm:mb-6">L'avantage Akordigital</h2>
<p className="text-base sm:text-lg max-w-2xl mx-auto font-geist text-neutral-400">Découvrez la différence à travers notre approche technique rigoureuse.</p>
</div>
<div className="bg-neutral-900/40 border border-white/10 rounded-2xl p-4 sm:p-8">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

<div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden group card-glow transition-all duration-500 cursor-default hover:-translate-y-2">
<div className="absolute inset-0 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7b3a5f3f-a38a-47b5-8f19-6d90cb6f3137_800w.jpg)] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
<div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
<div>
<div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-geist text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-colors">Notre Force</div>
</div>
<div>
<h3 className="text-2xl sm:text-3xl font-semibold text-white font-geist mb-2">Coder avec <span className="text-blue-500 group-hover:text-blue-400 transition-colors">Précision</span></h3>
<p className="text-sm text-neutral-300 font-geist">Chaque ligne de code compte pour la performance.</p>
</div>
</div>
</div>

<div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden card-glow transition-all duration-500 cursor-default hover:-translate-y-2">
<div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none group-hover:bg-blue-500/20 transition-colors"></div>
<div>
<p className="text-sm font-geist text-neutral-400 mb-2">Résultats prouvés</p>
<h3 className="text-xl sm:text-2xl font-light text-white font-geist leading-tight">
                                Sites <span className="font-semibold text-blue-500">3x</span> plus rapides,<br/> conversion <span className="font-semibold text-blue-400">x2</span>
</h3>
<div className="mt-6 space-y-3">
<div className="flex items-center gap-3 text-sm font-geist text-neutral-300 group-hover:translate-x-1 transition-transform duration-300 delay-0">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div> Audit Technique
                                </div>
<div className="flex items-center gap-3 text-sm font-geist text-neutral-300 group-hover:translate-x-1 transition-transform duration-300 delay-100">
<div className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div> Développement Agile
                                </div>
<div className="flex items-center gap-3 text-sm font-geist text-neutral-300 group-hover:translate-x-1 transition-transform duration-300 delay-200">
<div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_10px_rgba(37,99,235,0.8)]"></div> Optimisation SEO
                                </div>
</div>
</div>
<div className="mt-8 bg-black/40 border border-white/5 rounded-xl p-4 backdrop-blur-sm group-hover:bg-black/60 transition-colors">
<div className="flex gap-1 text-amber-400 mb-2">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-xs sm:text-sm text-neutral-300 italic">"Akordigital ne se contente pas de créer des sites, ils bâtissent des plateformes."</p>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center text-center justify-center relative overflow-hidden card-glow transition-all duration-500 cursor-default hover:-translate-y-2">
<iconify-icon className="text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" height="48" icon="solar:shield-check-linear" width="48"></iconify-icon>
<h4 className="text-lg font-medium text-white font-geist">Qualité Garantie</h4>
<p className="text-xs text-neutral-400 mt-1">Code propre &amp; sécurisé</p>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-center card-glow transition-all duration-500 cursor-default hover:-translate-y-2 group">
<div className="flex justify-between items-end mb-2">
<span className="text-3xl font-semibold text-white font-geist group-hover:text-blue-400 transition-colors">99%</span>
<span className="text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded-full mb-1">Excellent</span>
</div>
<p className="text-xs text-neutral-400 font-geist">Score Google PageSpeed moyen de nos projets.</p>
<div className="mt-4 w-full h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-[99%] bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)] group-hover:w-full transition-all duration-1000"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 px-4 reveal-on-scroll" id="capabilities">
<div className="max-w-6xl mx-auto bg-neutral-950 border border-white/5 rounded-3xl p-6 sm:p-10 lg:p-20">
<div className="text-center mb-10 sm:mb-16">
<h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight font-geist mb-4 sm:mb-6">Nos Services</h2>
<p className="text-base sm:text-lg max-w-2xl mx-auto font-geist text-neutral-400">Des solutions web complètes conçues pour propulser votre entreprise.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">


<div className="group bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 border border-white/10 rounded-2xl p-6 flex flex-col h-full card-glow hover:-translate-y-2 cursor-pointer">
<div className="h-40 w-full bg-white/5 rounded-xl border border-white/5 mb-6 flex items-center justify-center overflow-hidden relative">
<div className="absolute inset-x-4 top-4 bottom-0 bg-neutral-950 rounded-t-lg border border-white/10 p-3 opacity-80 group-hover:translate-y-1 transition-transform">
<div className="flex gap-1.5 mb-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="space-y-1.5">
<div className="h-1.5 w-1/3 bg-blue-500/40 rounded-full group-hover:bg-blue-500/80 transition-colors"></div>
<div className="h-1.5 w-2/3 bg-white/10 rounded-full"></div>
<div className="h-1.5 w-1/2 bg-white/10 rounded-full"></div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold text-white font-geist mb-2 group-hover:text-blue-400 transition-colors">Développement Web</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">Sites vitrines et applications sur mesure avec Next.js, React et Tailwind CSS.</p>
</div>

<div className="group bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 border border-white/10 rounded-2xl p-6 flex flex-col h-full card-glow hover:-translate-y-2 cursor-pointer">
<div className="h-40 w-full bg-white/5 rounded-xl border border-white/5 mb-6 flex items-center justify-center relative overflow-hidden">
<div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center relative">
<div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
<iconify-icon className="text-blue-400" icon="solar:pen-new-square-linear" width="24"></iconify-icon>
</div>
</div>
</div>
<h3 className="text-lg font-semibold text-white font-geist mb-2 group-hover:text-blue-400 transition-colors">Design UI/UX</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">Interfaces intuitives et modernes centrées sur l'expérience utilisateur.</p>
</div>

<div className="group bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 border border-white/10 rounded-2xl p-6 flex flex-col h-full card-glow hover:-translate-y-2 cursor-pointer">
<div className="h-40 w-full bg-white/5 rounded-xl border border-white/5 mb-6 flex items-center justify-center relative">
<div className="flex flex-col gap-2 items-center">
<div className="flex items-end gap-1 h-16">
<div className="w-3 bg-white/10 rounded-t h-8 group-hover:bg-white/20 transition-colors delay-0"></div>
<div className="w-3 bg-white/10 rounded-t h-12 group-hover:bg-white/20 transition-colors delay-75"></div>
<div className="w-3 bg-blue-500/80 rounded-t h-16 group-hover:h-20 group-hover:bg-blue-500 transition-all duration-300 delay-100 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
</div>
</div>
<h3 className="text-lg font-semibold text-white font-geist mb-2 group-hover:text-blue-400 transition-colors">Référencement (SEO)</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">Optimisation technique pour placer votre site en tête des résultats.</p>
</div>

<div className="group bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 border border-white/10 rounded-2xl p-6 flex flex-col h-full card-glow hover:-translate-y-2 cursor-pointer">
<div className="h-40 w-full bg-white/5 rounded-xl border border-white/5 mb-6 flex items-center justify-center relative">
<iconify-icon className="text-neutral-400 group-hover:text-white transition-colors group-hover:scale-110 duration-300" icon="solar:cart-large-minimalistic-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white font-geist mb-2 group-hover:text-blue-400 transition-colors">E-commerce</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">Solutions de vente en ligne performantes (Shopify, Woocommerce, Custom).</p>
</div>

<div className="group bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 border border-white/10 rounded-2xl p-6 flex flex-col h-full card-glow hover:-translate-y-2 cursor-pointer">
<div className="h-40 w-full bg-white/5 rounded-xl border border-white/5 mb-6 flex items-center justify-center relative">
<iconify-icon className="text-neutral-400 group-hover:rotate-90 transition-transform duration-500 group-hover:text-blue-400" icon="solar:settings-minimalistic-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white font-geist mb-2 group-hover:text-blue-400 transition-colors">Maintenance</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">Mises à jour de sécurité et monitoring 24/7 pour votre tranquillité.</p>
</div>

<div className="group bg-neutral-900/40 hover:bg-neutral-900/60 transition-all duration-300 border border-white/10 rounded-2xl p-6 flex flex-col h-full card-glow hover:-translate-y-2 cursor-pointer">
<div className="h-40 w-full bg-white/5 rounded-xl border border-white/5 mb-6 flex items-center justify-center relative">
<iconify-icon className="text-neutral-400 group-hover:text-green-400 transition-colors group-hover:scale-110 duration-300" icon="solar:clipboard-check-linear" width="40"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white font-geist mb-2 group-hover:text-blue-400 transition-colors">Audit &amp; Conseil</h3>
<p className="text-sm text-neutral-400 font-geist leading-relaxed">Analyse approfondie de votre écosystème pour identifier les opportunités.</p>
</div>
</div>
</div>
</section>

<section className="py-10 px-4 reveal-on-scroll">
<div className="max-w-6xl mx-auto bg-neutral-950 border border-white/5 rounded-3xl p-6 sm:p-10 lg:p-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

<div>
<h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight font-geist mb-6">
                        Plus qu'une agence,<br/>votre partenaire digital.
                    </h2>
<p className="text-base text-neutral-400 mb-8 font-geist leading-relaxed">
                        Chez AKORDIGITAL, nous ne nous contentons pas de livrer du code. Nous construisons des écosystèmes digitaux durables.
                    </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 group">
<iconify-icon className="text-blue-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-neutral-300 text-sm font-geist group-hover:text-white transition-colors">Accompagnement stratégique sur-mesure</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-blue-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-neutral-300 text-sm font-geist group-hover:text-white transition-colors">Technologies de pointe (Next.js, Tailwind, Supabase)</span>
</li>
<li className="flex items-start gap-3 group">
<iconify-icon className="text-blue-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="text-neutral-300 text-sm font-geist group-hover:text-white transition-colors">Respect strict des délais et budgets</span>
</li>
</ul>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-40 card-glow transition-all duration-300 hover:scale-[1.02]">
<div className="text-4xl font-semibold text-white font-geist">100%</div>
<div className="text-xs uppercase tracking-widest text-neutral-500 font-geist">Engagement</div>
</div>
<div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col justify-between h-40 card-glow transition-all duration-300 hover:scale-[1.02]">
<iconify-icon className="text-blue-500" icon="solar:bolt-linear" width="32"></iconify-icon>
<div className="text-sm text-neutral-300 font-geist">Méthode Agile &amp;<br/>Itérations rapides</div>
</div>
<div className="sm:col-span-2 bg-blue-600 rounded-2xl p-6 flex items-center justify-between shadow-lg shadow-blue-900/20 group hover:shadow-blue-600/40 transition-all duration-300">
<div className="text-white font-medium font-geist">Innovation Constante</div>
<div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm group-hover:bg-white/30 transition-colors">
<iconify-icon className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-10 px-4 reveal-on-scroll">
<div className="max-w-6xl mx-auto bg-neutral-950 border border-white/5 rounded-3xl p-6 sm:p-10 lg:p-20">
<div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-geist mb-4">Tarifs &amp; Plans</h2>
<p className="text-base text-neutral-400 font-geist max-w-lg">Des options flexibles adaptées à votre rythme et votre croissance.</p>
</div>

<div className="inline-flex items-center rounded-full ring-1 ring-white/10 bg-white/5 p-1 self-start md:self-auto hover:ring-white/20 transition-all" id="billingToggle">
<button className="px-4 py-2 rounded-full text-sm font-medium font-geist bg-white text-black transition-all shadow-sm active:scale-95 duration-200" data-billing="monthly" type="button">Mensuel</button>
<button className="px-4 py-2 rounded-full text-sm font-medium font-geist text-neutral-400 hover:text-white transition-colors active:scale-95 duration-200" data-billing="project" type="button">Projet</button>
</div>
</div>

<div className="bg-neutral-900/40 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-colors">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-white/10 bg-white/[0.02]">
<div className="bg-white text-black rounded-2xl p-6 sm:p-8 relative shadow-xl hover:scale-[1.01] transition-transform duration-300">
<div className="absolute top-4 right-4 text-[10px] font-bold tracking-wider text-neutral-400 uppercase">Akordigital®</div>
<h3 className="text-lg font-medium font-geist mb-2" id="planTitle">Maintenance &amp; Support</h3>
<div className="flex items-baseline gap-1 mb-4">
<span className="text-4xl sm:text-5xl font-bold tracking-tight" id="price">450</span>
<span className="text-2xl font-bold">€</span>
<span className="text-neutral-500 font-geist text-sm ml-1" id="priceUnit">/mois</span>
</div>
<p className="text-sm text-neutral-600 font-geist leading-relaxed mb-6" id="planDesc">Assurez la pérennité, la sécurité et l'évolution technique de votre site web. Idéal pour garder votre outil performant.</p>
<div className="flex items-center justify-between pt-6 border-t border-neutral-200">
<span className="text-xs font-medium text-neutral-500 bg-neutral-100 px-2 py-1 rounded" id="addonNote">Option SEO incluse</span>
<div className="w-8 h-5 bg-neutral-200 rounded-full relative">
<div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white shadow rounded-full"></div>
</div>
</div>
</div>
</div>

<div className="p-6 sm:p-10 flex flex-col justify-between">
<div>
<p className="text-sm text-neutral-400 font-geist mb-6 uppercase tracking-wider text-xs font-semibold">Ce qui est inclus</p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm text-neutral-200 font-geist">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span id="feature1">Mises à jour sécurité &amp; plugins</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-200 font-geist">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span id="feature2">Sauvegardes quotidiennes</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-200 font-geist">
<iconify-icon className="text-blue-500 text-lg" icon="solar:check-circle-linear"></iconify-icon>
<span id="feature3">Modifications mineures de contenu</span>
</li>
</ul>
</div>
<div className="mt-8 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div>
<p className="text-xs text-neutral-400 font-geist">Démarrage estimé</p>
<p className="text-sm text-white font-medium font-geist" id="etaValue">Immédiat</p>
</div>
<button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-3 rounded-full text-sm font-medium transition-all active:scale-95 duration-150 group">
                                Commencer <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>


</section>

<section className="py-10 px-4 reveal-on-scroll" id="contact">
<div className="max-w-6xl mx-auto bg-neutral-950 border border-white/5 rounded-3xl p-6 sm:p-10 lg:p-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

<div className="flex flex-col justify-between">
<div>
<div className="text-blue-500 font-bold tracking-widest text-xs uppercase mb-4 font-geist">Contact</div>
<h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white mb-6 font-geist">Parlons de votre <br/>futur projet.</h2>
<p className="text-base sm:text-lg text-neutral-400 mb-10 leading-relaxed font-geist">Vous avez une vision ? Nous avons l'équipe pour la réaliser. Remplissez le formulaire et recevez une réponse sous 24h.</p>
<div className="space-y-6">
<a className="flex items-center gap-4 group hover:bg-white/5 p-2 -ml-2 rounded-xl transition-all" href="mailto:contact@akordigital.fr">
<div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors group-hover:scale-110 duration-300">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-400 font-geist uppercase tracking-wider">Email</div>
<div className="text-white font-medium font-geist group-hover:text-blue-400 transition-colors">contact@akordigital.fr</div>
</div>
</a>
<div className="flex items-center gap-4 group hover:bg-white/5 p-2 -ml-2 rounded-xl transition-all">
<div className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors group-hover:scale-110 duration-300">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-neutral-400 font-geist uppercase tracking-wider">Bureau</div>
<div className="text-white font-medium font-geist">58 Rue de Monceau, Paris 8</div>
</div>
</div>
</div>
</div>

<div className="hidden sm:block mt-12 bg-white/5 border border-white/10 p-6 rounded-2xl relative group hover:border-white/20 transition-all hover:-translate-y-1">
<iconify-icon className="absolute top-6 right-6 text-white/10 text-2xl group-hover:text-white/30 transition-colors" icon="solar:quote-up-square-linear"></iconify-icon>
<p className="text-neutral-300 italic font-geist text-sm leading-relaxed mb-4">"AKORDIGITAL a totalement repensé notre plateforme SaaS. Une équipe réactive, technique et créative."</p>
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-xs font-bold text-white font-geist ring-2 ring-transparent group-hover:ring-blue-500/50 transition-all">LM</div>
<div>
<div className="text-white font-semibold text-xs font-geist">Lucas M.</div>
<div className="text-blue-400 text-[10px] font-geist">CTO, NexTech</div>
</div>
</div>
</div>
</div>

<div className="bg-neutral-900/30 border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-colors">
<form className="space-y-6" onsubmit="event.preventDefault();">

<div>
<label className="block text-xs font-medium text-neutral-400 mb-3 font-geist uppercase tracking-wider">Type de projet</label>
<div className="grid grid-cols-2 gap-3">
<button className="flex items-center justify-center gap-2 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] text-neutral-300 hover:text-white transition-all text-xs font-medium active:scale-95 duration-200 focus:ring-1 focus:ring-blue-500">Site Web</button>
<button className="flex items-center justify-center gap-2 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] text-neutral-300 hover:text-white transition-all text-xs font-medium active:scale-95 duration-200 focus:ring-1 focus:ring-blue-500">E-Commerce</button>
<button className="flex items-center justify-center gap-2 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] text-neutral-300 hover:text-white transition-all text-xs font-medium active:scale-95 duration-200 focus:ring-1 focus:ring-blue-500">App Web</button>
<button className="flex items-center justify-center gap-2 p-3 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] text-neutral-300 hover:text-white transition-all text-xs font-medium active:scale-95 duration-200 focus:ring-1 focus:ring-blue-500">Design / SEO</button>
</div>
</div>
<div className="space-y-4">
<input className="input-glow w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-all font-geist" placeholder="Nom complet" type="text"/>
<input className="input-glow w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-all font-geist" placeholder="Email professionnel" type="email"/>
<textarea className="input-glow w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 transition-all font-geist resize-none" placeholder="Parlez-nous de votre projet..." rows="4"></textarea>
</div>
<button className="relative w-full bg-white text-black font-semibold rounded-lg py-3.5 flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all font-geist group text-sm overflow-hidden active:scale-[0.98] duration-200 shimmer-effect">
<span className="relative z-10">Envoyer ma demande</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="py-6 px-4">
<div className="max-w-6xl mx-auto border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
<span className="text-base font-medium font-geist text-white">AKORDIGITAL</span>
<div className="flex items-center gap-6 text-xs sm:text-sm text-neutral-500 font-geist">
<a className="hover:text-white transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-white transition-colors" href="#">CGV</a>
<span>© 2024</span>
</div>
</div>
</footer>



    </>
  );
}
