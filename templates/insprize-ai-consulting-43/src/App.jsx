import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
heading: ['"Bebas Neue"', 'sans-serif'],
body: ['"Lato"', 'sans-serif'],
},
colors: {
brand: {
black: '#000000',
gold: '#C8A037',
magenta: '#FF00AA',
zinc: '#121212'
}
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
},
animation: {
'float': 'float 6s ease-in-out infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0"></div>
<div className="fixed top-0 right-0 w-[500px] h-[500px] bg-brand-magenta/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
<div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 glass-dark border-b border-white/5">
<div className="flex max-w-7xl mr-auto ml-auto items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<img alt="Company Logo" className="group-hover:opacity-100 transition-opacity opacity-90 w-auto h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c051ded-86ac-42c6-8e96-74c4736f8c4c_320w.png"/>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#services">Expertise</a>
<a className="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#process">Processus</a>
<a className="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#projects">Projets</a>
<a className="text-sm uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#about">À Propos</a>
</div>

<a className="hidden sm:inline-flex items-center gap-2 px-6 py-2 bg-brand-magenta hover:bg-white hover:text-black text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 clip-path-slant" href="#contact">
        Réalisons l'impossible
    </a>
</div>
</nav>

<header className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center z-10">
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col items-start reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-brand-gold/30 bg-brand-gold/10">
<span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
<span className="text-xs font-bold text-brand-gold uppercase tracking-widest">Raphaël Dextraze Consulting</span>
</div>
<h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl leading-[0.9] text-white mb-6">
                    Surpasser les<br/>
                    limites du <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-magenta to-white">possible</span>
</h1>
<p className="text-lg text-zinc-400 max-w-lg mb-10 font-light leading-relaxed">
                    Transformez votre entreprise grâce à l'Intelligence Artificielle. De la stratégie à l'implémentation, nous créons des systèmes autonomes qui redéfinissent la performance.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center px-8 py-4 bg-white text-black text-sm font-bold uppercase tracking-wider hover:bg-brand-gold transition-colors" href="#contact">
                        Commencer l'Audit
                    </a>
<a className="inline-flex justify-center items-center px-8 py-4 border border-zinc-700 text-white text-sm font-bold uppercase tracking-wider hover:border-brand-magenta hover:text-brand-magenta transition-colors" href="#projects">
                        Voir les projets
                    </a>
</div>

</div>

<div className="relative h-[600px] w-full hidden lg:block reveal delay-200 active">

<div className="absolute inset-0 bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800">
<img alt="Futuristic AI Architecture" className="hover:scale-105 transition-transform duration-[2s] opacity-60 mix-blend-luminosity w-full h-full grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39c61eb0-1535-41b7-90e9-1bc7fdc9c2e6_1600w.png"/>
<div className="bg-center bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-[#ffffff] to-[#000000] opacity-80 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39c61eb0-1535-41b7-90e9-1bc7fdc9c2e6_1600w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0 grayscale"></div>
</div>

<div className="absolute top-10 -left-10 glass-card p-4 rounded min-w-[200px] animate-float">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-brand-gold/10 rounded border border-brand-gold/20 text-brand-gold">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:git-pull-request" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7M6 9v12"></path></g></svg>
</div>
<span className="font-heading text-lg tracking-wide text-white">Roadmap IA</span>
</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-brand-gold w-3/4"></div>
</div>
</div>

<div className="absolute bottom-20 -right-6 glass-card p-4 rounded min-w-[220px] animate-float" style={{animationDelay: '2s'}}>
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-brand-magenta/10 rounded border border-brand-magenta/20 text-brand-magenta">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:zap" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-heading text-lg tracking-wide text-white">Prototype Rapide</span>
</div>
<p className="text-xs text-zinc-400">Déploiement en cours...</p>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 relative z-10 border-t border-zinc-900" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
<div className="">
<h2 className="font-heading text-4xl text-white mb-2">Expertise Stratégique</h2>
<p className="text-zinc-500 max-w-sm">Une approche holistique pour intégrer l'intelligence artificielle au cœur de vos opérations.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card p-8 group reveal hover:bg-zinc-900/80">
<div className="mb-6 p-3 w-fit border border-zinc-700 rounded bg-zinc-900/50 text-white group-hover:border-brand-gold group-hover:text-brand-gold transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:map" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0zm.894.211v15M9 3.236v15" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="font-heading text-2xl text-white mb-4 tracking-wide">Audit &amp; Roadmap</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">Analyse approfondie de votre infrastructure. Identification des opportunités à haut ROI et création d'une feuille de route claire.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wider"><span className="w-1 h-1 bg-brand-gold rounded-full"></span>Analyse de Données</li>
<li className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wider"><span className="w-1 h-1 bg-brand-gold rounded-full"></span>Étude de Faisabilité</li>
</ul>
</div>

<div className="glass-card p-8 group reveal hover:bg-zinc-900/80 delay-100 border-t-2 border-t-brand-magenta/50">
<div className="mb-6 p-3 w-fit border border-zinc-700 rounded bg-zinc-900/50 text-white group-hover:border-brand-magenta group-hover:text-brand-magenta transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:bot" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2m16 0h2m-7-1v2m-6-2v2"></path></g></svg>
</div>
<h3 className="font-heading text-2xl text-white mb-4 tracking-wide">Agents &amp; Automatisation</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">Développement d'agents IA autonomes pour automatiser les tâches complexes et libérer le potentiel créatif de vos équipes.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wider"><span className="w-1 h-1 bg-brand-magenta rounded-full"></span>Flux de travail custom</li>
<li className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wider"><span className="w-1 h-1 bg-brand-magenta rounded-full"></span>Intégration API</li>
</ul>
</div>

<div className="glass-card p-8 group reveal hover:bg-zinc-900/80 delay-200">
<div className="mb-6 p-3 w-fit border border-zinc-700 rounded bg-zinc-900/50 text-white group-hover:border-brand-gold group-hover:text-brand-gold transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:users" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
</div>
<h3 className="font-heading text-2xl text-white mb-4 tracking-wide">Formation &amp; Adoption</h3>
<p className="text-zinc-400 text-sm leading-relaxed mb-6">La technologie n'est rien sans l'humain. Nous formons vos équipes pour une transition fluide et une adoption maximale.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wider"><span className="w-1 h-1 bg-brand-gold rounded-full"></span>Workshops</li>
<li className="flex items-center gap-2 text-xs text-zinc-500 uppercase tracking-wider"><span className="w-1 h-1 bg-brand-gold rounded-full"></span>Gestion du Changement</li>
</ul>
</div>
</div>
</div>
</section>


<section className="py-24 px-6 relative z-10" id="process">
<div className="max-w-7xl mx-auto">
<h2 className="font-heading text-4xl text-center mb-16">Le Processus <span className="text-zinc-600">INSPRIZE</span></h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">

<div className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent -z-10"></div>

<div className="relative flex flex-col items-center text-center group reveal">
<div className="w-24 h-24 rounded-full bg-black border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-brand-magenta transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<span className="font-heading text-3xl text-zinc-500 group-hover:text-white">01</span>
</div>
<h3 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">Audit Stratégique</h3>
<p className="text-xs text-zinc-500 px-4">Analyse des besoins et identification des goulots d'étranglement.</p>
</div>

<div className="relative flex flex-col items-center text-center group reveal delay-100">
<div className="w-24 h-24 rounded-full bg-black border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-brand-gold transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<span className="font-heading text-3xl text-zinc-500 group-hover:text-white">02</span>
</div>
<h3 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">Roadmap</h3>
<p className="text-xs text-zinc-500 px-4">Planification précise et sélection des technologies.</p>
</div>

<div className="relative flex flex-col items-center text-center group reveal delay-200">
<div className="w-24 h-24 rounded-full bg-black border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-brand-magenta transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<span className="font-heading text-3xl text-zinc-500 group-hover:text-white">03</span>
</div>
<h3 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">Prototype Rapide</h3>
<p className="text-xs text-zinc-500 px-4">Développement agile et itérations en conditions réelles.</p>
</div>

<div className="relative flex flex-col items-center text-center group reveal delay-300">
<div className="w-24 h-24 rounded-full bg-black border border-zinc-800 flex items-center justify-center mb-6 group-hover:border-brand-gold transition-colors shadow-[0_0_20px_rgba(0,0,0,0.5)]">
<span className="font-heading text-3xl text-zinc-500 group-hover:text-white">04</span>
</div>
<h3 className="font-bold text-white mb-2 uppercase tracking-wide text-sm">Déploiement &amp; Scale</h3>
<p className="text-xs text-zinc-500 px-4">Mise en production sécurisée et formation des équipes.</p>
</div>
</div>
</div>
</section>

<section className="bg-zinc-900/20 pt-24 pr-6 pb-24 pl-6" id="projects">
<div className="max-w-7xl mr-auto ml-auto">
<h2 className="font-heading text-4xl mb-12">Projets Réalisés</h2>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">

<div className="group relative h-[500px] rounded-xl overflow-hidden border border-zinc-800 reveal cursor-pointer">
<img alt="Interior Design AI" className="group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 w-full h-full object-cover bg-center grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/80bb2c92-c604-4dc3-a293-716b4f6104ac_1600w.png"/>
<div className="flex flex-col bg-gradient-to-t from-black via-black/80 to-transparent pt-10 pr-10 pb-32 pl-10 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="mb-4">
<span className="text-brand-magenta uppercase block text-xs font-semibold tracking-widest mb-2">Agents IA Création visuelle + support client</span>
<h3 className="text-4xl text-white tracking-tight font-heading">LUSINE - magasins de meubles</h3>
</div>
<p className="text-zinc-300 text-sm mb-6 max-w-md border-l-2 border-brand-magenta pl-4">
                Création d'agents IA pour la génération de décors virtuels et visuels produits.
            </p>
<div className="grid grid-cols-2 gap-4">
<div className="">
<span className="block text-white font-semibold">3x</span>
<span className="text-[10px] uppercase text-zinc-500 tracking-wider">Plus rapide</span>
</div>
<div className="">
<span className="block text-white font-semibold">Premium</span>
<span className="text-[10px] uppercase text-zinc-500 tracking-wider">Qualité Visuelle</span>
</div>
</div>

<div className="absolute bottom-8 left-0 right-0 flex justify-center items-end opacity-90 hover:opacity-100 transition-opacity">
<img alt="LUSINE Logo" className="w-auto h-20 object-contain drop-shadow-lg scale-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5d5f9ba-a193-418e-a95c-ff99b3e76940_1600w.png"/>
</div>
</div>
</div>

<div className="group relative h-[500px] rounded-xl overflow-hidden border border-zinc-800 reveal delay-100 cursor-pointer">
<img alt="Base Militaire Operation" className="group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30d9051a-3696-4e37-a8f9-07c5ea33d25c_1600w.png"/>
<div className="flex flex-col bg-gradient-to-t from-black via-black/80 to-transparent pt-10 pr-10 pb-32 pl-10 absolute top-0 right-0 bottom-0 left-0 justify-end">
<div className="mb-4">
<span className="text-brand-gold text-xs font-semibold uppercase tracking-widest mb-2 block">Optimisation Opérationnelle</span>
<h3 className="text-4xl text-white tracking-tight font-heading">PSP - Base militaire St-Jean</h3>
</div>
<p className="text-zinc-300 text-sm mb-6 max-w-md border-l-2 border-brand-gold pl-4">
                Implémentation IA inter-départementale pour standardiser les processus administratifs.
            </p>
<div className="grid grid-cols-2 gap-4">
<div className="">
<span className="block font-semibold text-white">-50h/sem</span>
<span className="text-[10px] uppercase text-zinc-500 tracking-wider">Travail Manuel</span>
</div>
<div className="">
<span className="block text-white font-semibold">100%</span>
<span className="text-[10px] uppercase text-zinc-500 tracking-wider">Standardisation</span>
</div>
</div>

<div className="absolute bottom-8 left-0 right-0 flex justify-center items-end opacity-90 hover:opacity-100 transition-opacity">
<img alt="PSP Logo" className="w-auto h-20 object-contain drop-shadow-lg scale-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3dc27345-7323-4042-a1b5-2102b1d97ee1_320w.png"/>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 px-6 relative z-10" id="about">
<div className="max-w-3xl mx-auto text-center reveal">
<div className="w-20 h-20 mx-auto mb-8 rounded-full overflow-hidden border-2 border-brand-gold grayscale hover:grayscale-0 transition-all">

<div className="flex text-zinc-600 bg-zinc-800 w-full h-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fb0fe2de-7cc8-4b7f-bab8-66ef3b5571b8_320w.jpg)] bg-cover bg-center items-center justify-center">
</div>
</div>
<h2 className="font-heading text-5xl mb-6">Raphaël Dextraze</h2>
<p className="leading-relaxed text-lg font-light text-zinc-400 mb-8">Consultant expert en Intelligence Artificielle et fondateur d'INSPRIZE. Je ne suis pas là pour faire du “correct” ou du déjà-vu : je suis là pour créer des choses qui font wow. J’utilise l’IA pour repousser les limites, inventer de nouvelles façons de travailler, de communiquer et de créer de la valeur. Mon obsession, c’est l’impact, la vitesse et l’innovation — livrer l’impossible et établir de nouveaux standards.</p>
<div className="inline-flex gap-x-4 gap-y-4" onclick="window.location.href='https://www.linkedin.com/in/rapha%C3%ABl-dextraze/'" role="button">
<a className="text-zinc-500 hover:text-brand-magenta transition-colors" href="https://linkedin.com"><svg aria-hidden="true" className="iconify iconify--lucide w-[20px] h-[20px]" data-icon="lucide:linkedin" data-icon-replaced="true" data-icon-set="lucide" data-lucide="linkedin" data-width="20" fill="none" height="20" role="img" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 0, 170)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
<a className="text-zinc-500 hover:text-brand-magenta transition-colors" href="https://twitter.com"></a>
</div>
</div>
</section>

<section className="py-24 px-6 bg-zinc-900 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
<div className="max-w-xl mx-auto relative z-10 glass-dark p-8 md:p-12 rounded-2xl border border-zinc-800 reveal shadow-2xl shadow-brand-magenta/5">
<h2 className="font-heading text-5xl text-center mb-2">Passez à l'action</h2>
<p className="text-zinc-500 text-center text-sm mb-10 uppercase tracking-widest">Réalisons l'impossible ensemble</p>
<form className="space-y-6">
<div className="">
<label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">Nom &amp; Entreprise</label>
<input className="w-full bg-black border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors placeholder-zinc-700" placeholder="Jean Dupont, Acme Inc." type="text"/>
</div>
<div className="">
<label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">Votre plus grand défi actuel</label>
<input className="w-full bg-black border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-gold transition-colors placeholder-zinc-700" placeholder="Ex: Trop de tâches manuelles dans la facturation..." type="text"/>
</div>
<div className="">
<label className="block text-xs uppercase tracking-wider text-zinc-500 mb-2">Canal préféré</label>
<select className="focus:outline-none focus:border-brand-gold transition-colors text-white bg-black w-full border-zinc-800 border rounded pt-3 pr-4 pb-3 pl-4">
<option>Email</option>
<option>Appel Téléphonique</option>
<option>WhatsApp</option>
</select>
</div>
<button className="w-full py-4 bg-brand-magenta hover:bg-white hover:text-black text-white font-bold uppercase tracking-wider transition-all duration-300" type="submit">
                    Réserver mon audit gratuit
                </button>
<div className="flex items-center justify-center gap-2 mt-4">
<span className="h-px w-10 bg-zinc-800"></span>
<span className="text-[10px] text-zinc-600 uppercase">Ou discutez maintenant</span>
<span className="h-px w-10 bg-zinc-800"></span>
</div>
<a className="flex items-center justify-center gap-2 w-full py-3 border border-zinc-700 hover:border-green-500 hover:text-green-500 text-zinc-400 text-sm uppercase tracking-wide transition-all rounded" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    WhatsApp Direct
                </a>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-zinc-900 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<img alt="INSPRIZE" className="h-8 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c051ded-86ac-42c6-8e96-74c4736f8c4c_320w.png"/>
</div>
<p className="text-xs text-zinc-600 uppercase tracking-widest">
                Surpasser les limites du possible.
            </p>
<div className="flex gap-6">
<a className="text-zinc-600 hover:text-white text-xs uppercase tracking-wider" href="#">Contact</a>
</div>
</div>
<div className="text-[10px] text-zinc-800 text-center mt-8">© 2026 INSPRIZE. Tous droits réservés.</div>
</footer>



    </>
  );
}
