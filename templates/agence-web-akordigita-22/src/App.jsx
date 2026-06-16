import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
colors: {
background: '#030305',
surface: '#0B0C10',
primary: '#0ea5e9',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // 1. Initialize Lenis Smooth Scroll
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

        // 2. Intersection Observer for Scroll Reveals
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Run once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] bg-grid pointer-events-none"></div>
<div className="fixed top-[-20%] left-[-10%] w-[800px] h-[800px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none z-[-1]"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[800px] h-[800px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none z-[-1]"></div>

<nav className="fixed top-0 w-full z-50 glass-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-9 h-9 rounded-xl bg-white text-black flex items-center justify-center group-hover:rotate-180 transition-transform duration-700 ease-in-out">
<iconify-icon icon="solar:infinity-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<span className="font-display font-semibold text-xl tracking-tight text-white">AKORDIGITAL</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#about">À propos</a>
<a className="hover:text-white transition-colors" href="#projets">Projets</a>
</div>
<a className="hidden md:inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-semibold text-black transition-all hover:bg-zinc-200 hover:scale-105" href="#contact">
                Démarrer un projet
            </a>
</div>
</nav>

<section className="overflow-hidden pt-48 pr-6 pb-32 pl-6 relative">
<div className="max-w-4xl mx-auto text-center relative z-10 reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-300 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
</span>
                Agence Web Next-Gen
            </div>
<h1 className="font-display text-5xl md:text-7xl font-semibold text-white tracking-tight mb-8 leading-[1.1]">
                Créez l'exceptionnel <br/>
<span className="text-gradient">dans le monde digital.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                Nous fusionnons design stratégique et technologie de pointe pour construire des produits numériques qui propulsent votre croissance.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black font-semibold flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95" href="#contact">
                    Discuter de mon projet
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="w-full sm:w-auto h-12 px-8 rounded-full border border-white/10 bg-white/5 text-white font-medium flex items-center justify-center hover:bg-white/10 transition-colors" href="#services">
                    Explorer nos services
                </a>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-gradient-radial from-white/5 to-transparent blur-3xl opacity-30 pointer-events-none"></div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-white/[0.01]" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div>
<h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Nos Expertises</h2>
<p className="text-zinc-400 max-w-md">Une approche holistique couvrant chaque aspect de votre présence numérique.</p>
</div>
<a className="text-sm font-medium text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors" href="#contact">
                    Voir toutes les solutions <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-card p-8 rounded-3xl hover:bg-white/[0.04] transition-colors group reveal reveal-delay-1">
<div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:laptop-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Développement Web</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Sites vitrines et applications web ultra-rapides utilisant React, Next.js et Tailwind CSS pour une performance optimale.</p>
</div>

<div className="glass-card p-8 rounded-3xl hover:bg-white/[0.04] transition-colors group reveal reveal-delay-2">
<div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:cart-large-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">E-Commerce</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Boutiques en ligne Shopify ou sur-mesure conçues pour convertir. Expérience d'achat fluide et sécurisée.</p>
</div>

<div className="glass-card p-8 rounded-3xl hover:bg-white/[0.04] transition-colors group reveal reveal-delay-3">
<div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:figma-file-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Design UX/UI</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Interfaces modernes et intuitives. Nous créons des identités visuelles qui marquent les esprits et guident l'utilisateur.</p>
</div>

<div className="glass-card p-8 rounded-3xl hover:bg-white/[0.04] transition-colors group reveal">
<div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:rocket-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">SEO &amp; Performance</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Optimisation technique et sémantique pour dominer les résultats de recherche et acquérir du trafic organique.</p>
</div>

<div className="glass-card p-8 rounded-3xl hover:bg-white/[0.04] transition-colors group reveal reveal-delay-1">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smartphone-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Mobile Apps</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Développement d'applications mobiles natives et PWA pour étendre votre présence sur iOS et Android.</p>
</div>

<div className="glass-card p-8 rounded-3xl hover:bg-white/[0.04] transition-colors group reveal reveal-delay-2">
<div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magic-stick-3-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Branding</h3>
<p className="text-sm text-zinc-400 leading-relaxed">Création de logos, chartes graphiques et ton de marque pour une communication cohérente et impactante.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium mb-6">
                        Notre Vision
                    </div>
<h2 className="font-display text-3xl md:text-4xl font-semibold text-white tracking-tight mb-6 leading-tight">
                        Plus qu'une agence, <br/>
<span className="text-gradient">votre partenaire digital.</span>
</h2>
<p className="text-zinc-400 text-lg leading-relaxed mb-8">
                        AKORDIGITAL est née d'une conviction : la technologie ne doit pas être une barrière, mais un accélérateur. Nous ne nous contentons pas de livrer du code, nous construisons des écosystèmes digitaux durables.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 flex-shrink-0 mt-1">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Collaboration Transparente</h4>
<p className="text-sm text-zinc-500">Pas de jargon complexe, un suivi clair et des outils partagés pour avancer ensemble.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 flex-shrink-0 mt-1">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Qualité sans compromis</h4>
<p className="text-sm text-zinc-500">Code propre, architecture scalable et tests rigoureux pour une fiabilité totale.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sky-400 flex-shrink-0 mt-1">
<iconify-icon icon="solar:chart-square-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1">Orienté Résultats</h4>
<p className="text-sm text-zinc-500">Chaque décision de design ou de développement est prise avec vos KPI en tête.</p>
</div>
</div>
</div>
</div>

<div className="relative reveal reveal-delay-2">
<div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-purple-500/20 blur-[60px] rounded-full pointer-events-none"></div>
<div className="glass-card p-6 rounded-3xl border border-white/10 relative z-10">

<div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
</div>
<div className="text-xs text-zinc-600 font-mono ml-4">Akordigital_Strategy.tsx</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<iconify-icon className="text-purple-400 text-2xl mb-2" icon="solar:users-group-rounded-linear"></iconify-icon>
<div className="text-2xl font-bold text-white mb-1">100%</div>
<div className="text-xs text-zinc-500">Engagement Équipe</div>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/5">
<iconify-icon className="text-sky-400 text-2xl mb-2" icon="solar:clock-circle-linear"></iconify-icon>
<div className="text-2xl font-bold text-white mb-1">Agile</div>
<div className="text-xs text-zinc-500">Méthodologie</div>
</div>
<div className="col-span-2 p-4 rounded-xl bg-gradient-to-r from-sky-500/10 to-indigo-500/10 border border-sky-500/20 flex items-center justify-between">
<div>
<div className="text-sm text-white font-medium">Innovation Continue</div>
<div className="text-xs text-zinc-500 mt-1">Veille technologique permanente</div>
</div>
<iconify-icon className="text-sky-400 text-xl" icon="solar:stars-minimalistic-linear"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -bottom-6 -right-6 glass-card px-4 py-3 rounded-xl border border-white/10 flex items-center gap-3 animate-bounce shadow-xl" style={{animationDuration: '3s'}}>
<div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
<iconify-icon icon="solar:cup-star-linear"></iconify-icon>
</div>
<div>
<div className="text-xs font-semibold text-white">Top Agence</div>
<div className="text-[10px] text-zinc-500">Paris, 2025</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-white/5 relative overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
<div className="reveal">
<div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">50+</div>
<div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Projets Livrés</div>
</div>
<div className="reveal reveal-delay-1">
<div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">98%</div>
<div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Satisfaction</div>
</div>
<div className="reveal reveal-delay-2">
<div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">10x</div>
<div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">ROI Moyen</div>
</div>
<div className="reveal reveal-delay-3">
<div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">24h</div>
<div className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Support</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-4 reveal">
<div className="sticky top-32">
<h2 className="font-display text-4xl lg:text-5xl font-semibold text-white tracking-tight mb-6 leading-[1.1]">
                            Parlons de votre <br/> <span className="text-gradient">futur projet.</span>
</h2>
<p className="text-zinc-400 text-lg mb-10 leading-relaxed font-light">
                            Remplissez le formulaire ci-contre. Nous analysons votre demande et revenons vers vous sous 24h avec une estimation précise.
                        </p>
<div className="space-y-6 border-t border-white/10 pt-8">
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-300 border border-white/10 group-hover:bg-sky-500/10 group-hover:text-sky-400 transition-colors">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Email</div>
<a className="text-white hover:text-sky-400 transition-colors" href="mailto:contact@akordigital.fr">contact@akordigital.fr</a>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-300 border border-white/10 group-hover:bg-purple-500/10 group-hover:text-purple-400 transition-colors">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Bureau</div>
<span className="text-white">58 Rue de Monceau, 75008 Paris</span>
</div>
</div>
</div>

<div className="mt-12 p-6 rounded-2xl bg-[#0B0C10] border border-white/5 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="flex items-start gap-4 relative z-10">
<iconify-icon className="text-zinc-600 text-2xl flex-shrink-0" icon="solar:quote-up-linear"></iconify-icon>
<div>
<p className="text-sm text-zinc-300 italic mb-3">"Une équipe qui comprend vraiment les enjeux business. Le résultat dépasse nos attentes."</p>
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center text-[10px] font-bold">L</div>
<span className="text-xs text-zinc-500 font-medium">Lucas M., CTO Startup</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 reveal reveal-delay-2">
<form className="glass-card bg-[#0B0C10]/50 rounded-3xl p-8 md:p-10 relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 blur-[80px] rounded-full pointer-events-none"></div>
<div className="space-y-10 relative z-10">

<div>
<label className="block text-sm font-medium text-zinc-300 mb-4">Type de projet</label>
<div className="grid grid-cols-2 md:grid-cols-3 gap-3">
<label className="cursor-pointer group">
<input className="peer sr-only radio-card-input" name="project_type" type="radio"/>
<div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all h-full flex flex-col items-center justify-center text-center gap-2">
<iconify-icon className="text-zinc-400 text-2xl transition-colors" icon="solar:laptop-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">Site Web</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only radio-card-input" name="project_type" type="radio"/>
<div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all h-full flex flex-col items-center justify-center text-center gap-2">
<iconify-icon className="text-zinc-400 text-2xl transition-colors" icon="solar:cart-large-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">E-Commerce</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only radio-card-input" name="project_type" type="radio"/>
<div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all h-full flex flex-col items-center justify-center text-center gap-2">
<iconify-icon className="text-zinc-400 text-2xl transition-colors" icon="solar:figma-file-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">Design UX</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only radio-card-input" name="project_type" type="radio"/>
<div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all h-full flex flex-col items-center justify-center text-center gap-2">
<iconify-icon className="text-zinc-400 text-2xl transition-colors" icon="solar:rocket-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">SEO</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only radio-card-input" name="project_type" type="radio"/>
<div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all h-full flex flex-col items-center justify-center text-center gap-2">
<iconify-icon className="text-zinc-400 text-2xl transition-colors" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">App Web</span>
</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only radio-card-input" name="project_type" type="radio"/>
<div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all h-full flex flex-col items-center justify-center text-center gap-2">
<iconify-icon className="text-zinc-400 text-2xl transition-colors" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium text-zinc-300">Autre</span>
</div>
</label>
</div>
</div>

<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-1.5">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider ml-1" htmlFor="name">Nom complet</label>
<input className="glass-input w-full rounded-xl py-3 px-4 text-white placeholder-zinc-600 focus:ring-0" id="name" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider ml-1" htmlFor="email">Email pro</label>
<input className="glass-input w-full rounded-xl py-3 px-4 text-white placeholder-zinc-600 focus:ring-0" id="email" placeholder="john@entreprise.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider ml-1" htmlFor="company">Entreprise</label>
<input className="glass-input w-full rounded-xl py-3 px-4 text-white placeholder-zinc-600 focus:ring-0" id="company" placeholder="Nom de votre société" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider ml-1" htmlFor="url">Site actuel</label>
<input className="glass-input w-full rounded-xl py-3 px-4 text-white placeholder-zinc-600 focus:ring-0" id="url" placeholder="https://" type="text"/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-zinc-300 mb-4">Budget estimé</label>
<div className="flex flex-wrap gap-3">
<label className="cursor-pointer">
<input className="peer sr-only radio-card-input" name="budget" type="radio"/>
<div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-sm text-zinc-400 hover:bg-white/5 transition-all peer-checked:bg-white peer-checked:text-black peer-checked:border-white font-medium">
                                            &lt; 2k€
                                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only radio-card-input" name="budget" type="radio"/>
<div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-sm text-zinc-400 hover:bg-white/5 transition-all peer-checked:bg-white peer-checked:text-black peer-checked:border-white font-medium">
                                            2k€ - 5k€
                                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only radio-card-input" name="budget" type="radio"/>
<div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-sm text-zinc-400 hover:bg-white/5 transition-all peer-checked:bg-white peer-checked:text-black peer-checked:border-white font-medium">
                                            5k€ - 10k€
                                        </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only radio-card-input" name="budget" type="radio"/>
<div className="px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] text-sm text-zinc-400 hover:bg-white/5 transition-all peer-checked:bg-white peer-checked:text-black peer-checked:border-white font-medium">
                                            &gt; 10k€
                                        </div>
</label>
</div>
</div>

<div className="space-y-1.5">
<label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider ml-1" htmlFor="message">Détails du projet</label>
<textarea className="glass-input w-full rounded-xl p-4 text-white placeholder-zinc-600 focus:ring-0 resize-none" id="message" placeholder="Décrivez vos objectifs..." rows="4"></textarea>
</div>

<div className="pt-2">
<button className="group w-full h-14 rounded-full bg-white text-black font-semibold text-base transition-all hover:bg-zinc-200 active:scale-[0.98] flex items-center justify-center gap-2 relative overflow-hidden" type="button">
<span className="relative z-10">Envoyer la demande</span>
<iconify-icon className="relative z-10 group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-1/2 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
</button>
<p className="text-center text-xs text-zinc-500 mt-4 flex items-center justify-center gap-1">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> Vos données restent confidentielles.
                                </p>
</div>
</div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/5 bg-[#030305] pt-16 pb-8 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-12 mb-16">
<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center">
<iconify-icon icon="solar:infinity-linear" width="20"></iconify-icon>
</div>
<span className="font-display font-semibold text-lg text-white">AKORDIGITAL</span>
</a>
<h4 className="font-semibold text-white mb-4">À propos d’Akor Digital</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Nous aidons les entreprises ambitieuses à construire leur futur digital. Performance, design et résultats.
                    </p>
</div>
<div className="md:pl-12">
<h4 className="font-semibold text-white mb-4">Services</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#">Développement Web</a></li>
<li><a className="hover:text-white transition-colors" href="#">Design UI/UX</a></li>
<li><a className="hover:text-white transition-colors" href="#">E-Commerce</a></li>
<li><a className="hover:text-white transition-colors" href="#">SEO &amp; Growth</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Entreprise</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-white transition-colors" href="#about">À propos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Carrières</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-zinc-600 text-xs">© 2026 AKORDIGITAL Inc. Tous droits réservés.</p>
<div className="flex gap-6 text-xs font-medium text-zinc-500">
<a className="hover:text-white transition-colors" href="#">Mentions Légales</a>
<a className="hover:text-white transition-colors" href="#">Confidentialité</a>
<a className="hover:text-white transition-colors" href="#">CGV</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
