import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener("DOMContentLoaded", () => {
// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function(e) {
e.preventDefault();
const target = document.querySelector(this.getAttribute('href'));
if (target) {
target.scrollIntoView({
behavior: 'smooth',
block: 'start'
});
}
});
});
// Animation on scroll
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.style.animationPlayState = 'running';
observer.unobserve(entry.target);
}
});
}, {
threshold: 0.1
});
document.querySelectorAll('.animate-on-scroll').forEach((el) => {
el.style.animationPlayState = 'paused';
observer.observe(el);
});
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="grid-overlay">
<div className="grid-inner">
<div className="grid-line-v"></div>
<div className="grid-line-v hidden md:block"></div>
<div className="grid-line-v hidden lg:block"></div>
<div className="grid-line-v"></div>
</div>
</div>

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-blue-600/10 rounded-full blur-[100px] opacity-40"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40rem] h-[40rem] bg-indigo-600/10 rounded-full blur-[100px] opacity-40"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-blue-900/5 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4" style={{animation: 'animationIn 0.8s ease-out 0.1s both'}}>
<div className="border-subtle flex bg-[#0f172a]/80 w-full max-w-5xl border p-2 shadow-xl shadow-black/20 backdrop-blur-xl items-center justify-between rounded-lg">
<a className="bg-white/10 hover:bg-white/20 px-5 py-2 text-xs tracking-widest uppercase transition-all text-white font-semibold font-geist rounded" href="#hero">
                ALLIANCE.
            </a>
<div className="hidden md:flex items-center gap-1">
<a className="hover:text-blue-300 px-4 py-2 text-xs tracking-widest uppercase transition-colors text-slate-400 font-geist font-medium" href="#about">
                    À propos
                </a>
<a className="hover:text-blue-300 px-4 py-2 text-xs tracking-widest uppercase transition-colors text-slate-400 font-geist font-medium" href="#services">
                    Services
                </a>
<a className="hover:text-blue-300 px-4 py-2 text-xs tracking-widest uppercase transition-colors text-slate-400 font-geist font-medium" href="#impact">
                    Pourquoi moi
                </a>
<a className="hover:text-blue-300 px-4 py-2 text-xs tracking-widest uppercase transition-colors text-slate-400 font-geist font-medium" href="#method">
                    Fonctionnement
                </a>
</div>
<a className="group relative bg-brand-gradient hover:opacity-90 transition-all text-white px-6 py-2 text-xs font-semibold tracking-widest uppercase overflow-hidden rounded hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]" href="#contact">
<span className="relative z-10 font-geist">Contact</span>
</a>
</div>
</nav>

<section className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden z-10 min-h-screen flex items-center" id="hero">
<div className="container mx-auto px-4 relative max-w-7xl">
<div className="flex flex-col text-center items-center justify-center">

<div className="group relative mb-8" style={{animation: 'animationIn 0.8s ease-out 0.2s both'}}>
<div className="beam-border"></div>
<div className="border-subtle flex group-hover:bg-blue-900/20 group-hover:border-blue-500/30 transition-all h-12 md:h-14 bg-slate-900/50 z-10 border rounded-full px-6 relative gap-x-4 items-center shadow-lg shadow-blue-900/10">
<div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.8)]"></div>
<span className="text-xs md:text-sm text-blue-100 font-geist uppercase tracking-widest font-medium">
                            Disponible pour nouveaux projets
                        </span>
</div>
</div>

<h1 className="uppercase leading-[0.9] text-5xl md:text-7xl lg:text-8xl font-semibold text-white tracking-tighter font-space-grotesk mb-8" style={{animation: 'animationIn 0.8s ease-out 0.3s both'}}>
<span className="block font-light text-slate-500">Libérez votre</span>
<span className="text-gradient text-glow font-medium">Temps Précieux</span>
</h1>

<p className="text-lg md:text-2xl text-slate-400 font-space-grotesk tracking-tight max-w-3xl mb-6" style={{animation: 'animationIn 0.8s ease-out 0.4s both'}}>
                    Secrétaire indépendante spécialisée dans la gestion administrative et l'assistance opérationnelle pour entrepreneurs ambitieux.
                </p>

<p className="text-sm md:text-base text-slate-500 font-geist max-w-2xl mb-12" style={{animation: 'animationIn 0.8s ease-out 0.5s both'}}>
                    Flexibilité totale. Zéro charge patronale. Confidentialité absolue.
                </p>

<div className="flex flex-col sm:flex-row gap-4" style={{animation: 'animationIn 0.8s ease-out 0.6s both'}}>
<a className="group bg-brand-gradient text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 rounded font-geist flex items-center gap-3" href="#services">
                        Découvrir mes services
                        <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-400/30 text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase transition-all duration-300 rounded font-geist hover-glow" href="#contact">
                        Appel Découverte
                    </a>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block" style={{animation: 'animationIn 0.8s ease-out 1s both'}}>
<div className="flex flex-col items-center gap-2 text-slate-500">
<span className="text-[10px] uppercase tracking-widest font-geist">Défiler</span>
<div className="w-px h-12 bg-gradient-to-b from-slate-500 to-transparent"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10 border-t border-subtle bg-[#0B1121]" id="about">
<div className="container mx-auto px-4 max-w-6xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out both'}}>
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
<span className="text-[10px] uppercase tracking-widest text-blue-400 font-geist font-semibold">À propos</span>
</div>
<h2 className="text-4xl md:text-5xl uppercase text-white tracking-tighter font-space-grotesk font-light mb-8">
                        Votre partenaire <span className="text-slate-500 block">de confiance</span>
</h2>
<div className="space-y-6 text-slate-400 font-geist leading-relaxed text-lg font-light">
<p>
                            Je suis <span className="text-white font-medium">Alliance</span> — votre bras droit administratif. Je transforme le chaos administratif en processus fluides et organisés.
                        </p>
<p>
                            Mon approche est simple : je prends en charge les tâches chronophages qui freinent votre croissance. De la pré-comptabilité à la relation client, j'agis comme une extension invisible mais essentielle de votre entreprise.
                        </p>
<p>
                            Pas de contrat de travail complexe, pas d'engagement à long terme risqué. Juste une expertise opérationnelle quand vous en avez besoin.
                        </p>
</div>
</div>

<div className="animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.2s both'}}>
<div className="relative">

<div className="grid grid-cols-2 gap-4">
<div className="glass-card p-6 hover-glow transition-all duration-300 rounded-xl">
<iconify-icon className="text-2xl text-blue-400 mb-4" height="28" icon="solar:shield-check-linear" width="28"></iconify-icon>
<div className="text-3xl text-white font-space-grotesk font-light tracking-tight mb-2">100%</div>
<div className="text-xs uppercase tracking-widest text-slate-500 font-geist">Confidentiel</div>
</div>
<div className="glass-card p-6 hover-glow transition-all duration-300 rounded-xl">
<iconify-icon className="text-2xl text-indigo-400 mb-4" height="28" icon="solar:clock-circle-linear" width="28"></iconify-icon>
<div className="text-3xl text-white font-space-grotesk font-light tracking-tight mb-2">24h</div>
<div className="text-xs uppercase tracking-widest text-slate-500 font-geist">Réactivité</div>
</div>
<div className="glass-card p-6 hover-glow transition-all duration-300 rounded-xl">
<iconify-icon className="text-2xl text-emerald-400 mb-4" height="28" icon="solar:wallet-money-linear" width="28"></iconify-icon>
<div className="text-3xl text-white font-space-grotesk font-light tracking-tight mb-2">-40%</div>
<div className="text-xs uppercase tracking-widest text-slate-500 font-geist">Coûts vs Salarié</div>
</div>
<div className="glass-card p-6 hover-glow transition-all duration-300 rounded-xl">
<iconify-icon className="text-2xl text-amber-400 mb-4" height="28" icon="solar:star-linear" width="28"></iconify-icon>
<div className="text-3xl text-white font-space-grotesk font-light tracking-tight mb-2">Premium</div>
<div className="text-xs uppercase tracking-widest text-slate-500 font-geist">Qualité de service</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10 border-t border-subtle bg-slate-900/30" id="services">
<div className="container mx-auto px-4 max-w-6xl">

<div className="text-center mb-16 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out both'}}>
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500"></div>
<span className="text-[10px] uppercase tracking-widest text-blue-400 font-geist font-semibold">Prestations</span>
<div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500"></div>
</div>
<h2 className="text-4xl md:text-6xl uppercase text-white tracking-tighter font-space-grotesk font-light">
                    Services <span className="text-slate-500">Sur-Mesure</span>
</h2>
</div>

<div className="animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.2s both'}}>
<div className="glassmorphic p-8 md:p-12 relative overflow-hidden hover-glow transition-all duration-500 float-animation rounded-2xl">

<div className="absolute top-6 right-6 md:top-8 md:right-8">
<div className="bg-blue-500/10 border border-blue-400/30 px-4 py-2 rounded-full flex items-center gap-2">
<span className="text-lg">✨</span>
<span className="text-xs text-blue-300 font-geist uppercase tracking-wider font-semibold">Populaire</span>
</div>
</div>

<div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mb-8 shadow-lg shadow-blue-500/20">
<iconify-icon className="text-white" height="32" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>

<h3 className="text-3xl md:text-4xl text-white font-space-grotesk tracking-tight mb-2">
                        Gestion Administrative 360°
                    </h3>
<p className="text-blue-400 font-geist text-sm uppercase tracking-widest mb-8 font-medium">
                        Pour les entrepreneurs qui veulent se concentrer sur leur métier
                    </p>

<p className="text-slate-400 font-geist leading-relaxed text-lg max-w-3xl mb-8">
                        Une solution complète pour externaliser votre "paperasse". Je gère vos emails, votre facturation, vos relances clients et l'interface avec votre cabinet comptable. Libérez votre esprit de la charge mentale administrative.
                    </p>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-white/10">
<div className="text-center">
<iconify-icon className="text-slate-500 mb-2" height="24" icon="solar:letter-linear" width="24"></iconify-icon>
<div className="text-xs text-slate-400 font-geist font-medium">Gestion Emails</div>
</div>
<div className="text-center">
<iconify-icon className="text-slate-500 mb-2" height="24" icon="solar:bill-check-linear" width="24"></iconify-icon>
<div className="text-xs text-slate-400 font-geist font-medium">Facturation</div>
</div>
<div className="text-center">
<iconify-icon className="text-slate-500 mb-2" height="24" icon="solar:user-speak-linear" width="24"></iconify-icon>
<div className="text-xs text-slate-400 font-geist font-medium">Relation Client</div>
</div>
<div className="text-center">
<iconify-icon className="text-slate-500 mb-2" height="24" icon="solar:file-check-linear" width="24"></iconify-icon>
<div className="text-xs text-slate-400 font-geist font-medium">Classement</div>
</div>
</div>
</div>
</div>

<div className="text-center mt-12 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.4s both'}}>
<p className="text-slate-500 font-geist italic">
                    D'autres modules disponibles : Organisation d'événements, Transcription, Gestion de planning.
                </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10 border-t border-subtle bg-[#0B1121]" id="impact">
<div className="container mx-auto px-4 max-w-6xl">

<div className="text-center mb-16 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out both'}}>
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500"></div>
<span className="text-[10px] uppercase tracking-widest text-blue-400 font-geist font-semibold">Avantages</span>
<div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500"></div>
</div>
<h2 className="text-4xl md:text-6xl uppercase text-white tracking-tighter font-space-grotesk font-light">
                    Pourquoi choisir <span className="text-slate-500 block">l'indépendance ?</span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-1">
<div className="glass-card p-8 md:p-10 hover-glow transition-all duration-300 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.1s both'}}>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-400" height="24" icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-white font-space-grotesk tracking-tight mb-2">Productivité Immédiate</h3>
<p className="text-slate-400 font-geist text-sm">Opérationnelle dès le premier jour, sans formation.</p>
</div>
</div>
</div>
<div className="glass-card p-8 md:p-10 hover-glow transition-all duration-300 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.2s both'}}>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-indigo-400" height="24" icon="solar:hand-money-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-white font-space-grotesk tracking-tight mb-2">Économies Réelles</h3>
<p className="text-slate-400 font-geist text-sm">Pas de charges sociales, pas de congés payés.</p>
</div>
</div>
</div>
<div className="glass-card p-8 md:p-10 hover-glow transition-all duration-300 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.3s both'}}>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-400" height="24" icon="solar:calendar-add-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-white font-space-grotesk tracking-tight mb-2">Flexibilité Totale</h3>
<p className="text-slate-400 font-geist text-sm">Augmentez ou réduisez les heures selon vos besoins.</p>
</div>
</div>
</div>
<div className="glass-card p-8 md:p-10 hover-glow transition-all duration-300 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.4s both'}}>
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
<iconify-icon className="text-amber-400" height="24" icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl text-white font-space-grotesk tracking-tight mb-2">À Distance</h3>
<p className="text-slate-400 font-geist text-sm">Pas besoin de bureau ou de matériel informatique à fournir.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10 border-t border-subtle bg-slate-900/30" id="method">
<div className="container mx-auto px-4 max-w-6xl">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out both'}}>
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
<span className="text-[10px] uppercase tracking-widest text-blue-400 font-geist font-semibold">Fonctionnement</span>
</div>
<h2 className="text-4xl md:text-5xl uppercase text-white tracking-tighter font-space-grotesk font-light mb-8">
                        Collaboration <span className="text-slate-500 block">Simple &amp; Fluide</span>
</h2>
<p className="text-slate-400 font-geist leading-relaxed mb-8">
                        Que ce soit pour une mission ponctuelle ou un accompagnement régulier, je m'adapte à vos outils (Notion, Slack, Trello) et à vos process existants.
                    </p>
<a className="inline-flex items-center gap-3 bg-brand-gradient text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 rounded font-geist" href="#contact">
                        Démarrer maintenant
                        <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>

<div className="animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out 0.2s both'}}>
<div className="space-y-4">
<div className="group flex items-center gap-6 p-6 glass-card hover-glow transition-all duration-300 rounded-lg">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
<iconify-icon className="text-blue-400" height="24" icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-space-grotesk tracking-tight">1. Échange</h3>
<p className="text-sm text-slate-400 font-geist">Appel découverte pour cibler vos besoins.</p>
</div>
</div>
<div className="group flex items-center gap-6 p-6 glass-card hover-glow transition-all duration-300 rounded-lg">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:bg-indigo-500/20 transition-colors">
<iconify-icon className="text-indigo-400" height="24" icon="solar:document-add-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-space-grotesk tracking-tight">2. Proposition</h3>
<p className="text-sm text-slate-400 font-geist">Devis détaillé et sur-mesure sous 24h.</p>
</div>
</div>
<div className="group flex items-center gap-6 p-6 glass-card hover-glow transition-all duration-300 rounded-lg">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
<iconify-icon className="text-emerald-400" height="24" icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg text-white font-space-grotesk tracking-tight">3. Action</h3>
<p className="text-sm text-slate-400 font-geist">Démarrage de la mission et reporting régulier.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative z-10 border-t border-subtle bg-[#0B1121]" id="contact">
<div className="container mx-auto px-4 max-w-4xl">

<div className="text-center mb-16 animate-on-scroll" style={{animation: 'animationIn 0.8s ease-out both'}}>
<div className="flex items-center justify-center gap-3 mb-6">
<div className="w-12 h-px bg-gradient-to-r from-transparent to-blue-500"></div>
<span className="text-[10px] uppercase tracking-widest text-blue-400 font-geist font-semibold">Contact</span>
<div className="w-12 h-px bg-gradient-to-l from-transparent to-blue-500"></div>
</div>
<h2 className="text-4xl md:text-6xl uppercase text-white tracking-tighter font-space-grotesk font-light mb-4">
                    Discutons de vos <span className="text-gradient text-glow">Besoins</span>
</h2>
</div>

<div className="glassmorphic p-8 md:p-12 animate-on-scroll rounded-2xl" style={{animation: 'animationIn 0.8s ease-out 0.2s both'}}>
<form className="space-y-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative">
<input className="w-full bg-transparent border-b border-slate-600 py-4 text-white outline-none focus:border-blue-500 transition-colors font-geist peer" id="name" placeholder=" " required="" type="text"/>
<label className="absolute left-0 top-4 text-slate-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs font-geist uppercase tracking-widest text-sm font-medium" htmlFor="name">
                                Nom
                            </label>
</div>

<div className="group relative">
<input className="w-full bg-transparent border-b border-slate-600 py-4 text-white outline-none focus:border-blue-500 transition-colors font-geist peer" id="email" placeholder=" " required="" type="email"/>
<label className="absolute left-0 top-4 text-slate-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs font-geist uppercase tracking-widest text-sm font-medium" htmlFor="email">
                                Email
                            </label>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative">
<input className="w-full bg-transparent border-b border-slate-600 py-4 text-white outline-none focus:border-blue-500 transition-colors font-geist peer" id="organization" placeholder=" " type="text"/>
<label className="absolute left-0 top-4 text-slate-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs font-geist uppercase tracking-widest text-sm font-medium" htmlFor="organization">
                                Entreprise
                            </label>
</div>

<div className="group relative">
<select className="w-full bg-transparent border-b border-slate-600 py-4 text-white outline-none focus:border-blue-500 transition-colors font-geist appearance-none cursor-pointer" id="interest">
<option className="text-slate-500 bg-slate-900" value="">Sélectionner un sujet</option>
<option className="text-white bg-slate-900" value="admin">Gestion Administrative</option>
<option className="text-white bg-slate-900" value="accounting">Pré-comptabilité</option>
<option className="text-white bg-slate-900" value="recurring">Mission récurrente</option>
<option className="text-white bg-slate-900" value="one-off">Mission ponctuelle</option>
</select>
<iconify-icon className="absolute right-0 top-4 text-slate-500 pointer-events-none" height="20" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>

<div className="group relative">
<textarea className="w-full bg-transparent border-b border-slate-600 py-4 text-white outline-none focus:border-blue-500 transition-colors font-geist peer resize-none" id="message" placeholder=" " rows="4"></textarea>
<label className="absolute left-0 top-4 text-slate-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-blue-400 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs font-geist uppercase tracking-widest text-sm font-medium" htmlFor="message">
                            Message
                        </label>
</div>

<div className="pt-4">
<button className="w-full md:w-auto bg-brand-gradient text-white px-12 py-4 text-sm font-semibold tracking-widest uppercase hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all duration-300 rounded font-geist flex items-center justify-center gap-3" type="submit">
                            Envoyer la demande
                            <iconify-icon height="18" icon="solar:plain-3-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</section>

<footer className="border-t border-subtle bg-[#020617] py-12 relative z-10">
<div className="container mx-auto px-4 max-w-6xl">
<div className="flex flex-col items-center text-center">
<p className="text-slate-500 font-geist mb-4 max-w-md">
                    Accompagnement administratif sur-mesure pour les professionnels exigeants.
                </p>
<div className="flex items-center gap-2 mb-8">
<div className="w-2 h-2 rounded-full bg-blue-500"></div>
<span className="text-white font-space-grotesk tracking-tight font-medium">
                        Alliance.
                    </span>
</div>
<div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8"></div>
<p className="text-xs text-slate-600 font-geist uppercase tracking-widest">
                    © 2024 Alliance Secrétariat. Tous droits réservés.
                </p>
</div>
</div>
</footer>

    </>
  );
}
