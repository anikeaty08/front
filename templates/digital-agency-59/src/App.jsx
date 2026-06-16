import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
page: '#171717',
mint: '#1ED39C',
'mint-dim': 'rgba(30, 211, 156, 0.1)',
surface: '#202020',
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Panchang', 'sans-serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
widest: '0.15em',
},
animation: {
'aurora': 'aurora 10s ease infinite alternate',
'float': 'float 6s ease-in-out infinite',
'pulse-mint': 'pulse-mint 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
aurora: {
'0%': { opacity: '0.3', transform: 'scale(1) translate(0, 0)' },
'100%': { opacity: '0.6', transform: 'scale(1.2) translate(-20px, -20px)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
'pulse-mint': {
'0%, 100%': { opacity: '1', boxShadow: '0 0 0 0px rgba(30, 211, 156, 0.7)' },
'50%': { opacity: '.8', boxShadow: '0 0 0 10px rgba(30, 211, 156, 0)' },
}
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aurora-bg animate-aurora"></div>

<nav className="fixed top-0 w-full z-50 px-6 py-6 transition-all duration-300 backdrop-blur-sm bg-[#171717]/80 border-b border-white/5">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<a className="font-display font-semibold text-sm tracking-tighter text-white hover:text-mint transition-colors uppercase" href="#">
                The Aurora Rise
            </a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-light text-zinc-400 hover:text-white transition-colors" href="#expertise">Expertise</a>
<a className="text-xs font-light text-zinc-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs font-light text-zinc-400 hover:text-white transition-colors" href="#about">À Propos</a>
<a className="px-5 py-2 text-xs font-medium text-[#171717] bg-mint rounded-sm hover:bg-white transition-colors duration-300" href="#contact">
                    Démarrer
                </a>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center z-10">
<div className="lg:col-span-8">

<div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-mint/20 bg-mint/5">
<span className="w-1.5 h-1.5 rounded-full bg-mint animate-pulse"></span>
<span className="text-[10px] font-medium tracking-widest uppercase text-mint">Agence Digitale Premium</span>
</div>

<h1 className="font-display font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-white mb-8">
                    BUILD.<br/>
                    SCALE.<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-mint to-white">RISE.</span>
</h1>

<p className="font-inter font-light text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
                    Nous fusionnons design de pointe et ingénierie digitale pour propulser votre business vers de nouveaux sommets.
                </p>

<div className="flex flex-col sm:flex-row gap-4">
<a className="group relative px-8 py-4 bg-mint text-[#171717] font-medium text-sm tracking-wide overflow-hidden" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                            Commencer l'ascension
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out z-0"></div>
</a>
<a className="group px-8 py-4 border border-zinc-700 text-white font-medium text-sm tracking-wide hover:border-mint/50 hover:bg-mint/5 transition-all" href="#services">
                        Découvrir nos services
                    </a>
</div>
</div>

<div className="lg:col-span-4 relative h-64 lg:h-full flex items-center justify-center animate-float">
<div className="relative w-full aspect-square max-w-sm">
<div className="blur-[60px] rounded-full absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute -top-4 -right-4 w-12 h-12 border-t border-r border-mint/30"></div>
<div className="absolute -bottom-4 -left-4 w-12 h-12 border-b border-l border-mint/30"></div>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
<span className="text-[10px] uppercase tracking-widest text-zinc-500">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-mint to-transparent"></div>
</div>
</header>

<div className="py-12 border-y border-white/5 bg-[#171717]" id="expertise">
<div className="marquee-container">
<div className="marquee-content">
<span className="font-display font-medium text-4xl md:text-6xl text-transparent stroke-text px-8 tracking-tighter opacity-30 hover:opacity-100 hover:text-mint transition-all cursor-default" style={{WebkitTextStroke: '1px #555'}}>UI/UX DESIGN</span>
<span className="text-mint text-2xl align-middle">•</span>
<span className="font-display font-medium text-4xl md:text-6xl text-transparent stroke-text px-8 tracking-tighter opacity-30 hover:opacity-100 hover:text-mint transition-all cursor-default" style={{WebkitTextStroke: '1px #555'}}>WEB DEVELOPMENT</span>
<span className="text-mint text-2xl align-middle">•</span>
<span className="font-display font-medium text-4xl md:text-6xl text-transparent stroke-text px-8 tracking-tighter opacity-30 hover:opacity-100 hover:text-mint transition-all cursor-default" style={{WebkitTextStroke: '1px #555'}}>GROWTH STRATEGY</span>
<span className="text-mint text-2xl align-middle">•</span>

<span className="font-display font-medium text-4xl md:text-6xl text-transparent stroke-text px-8 tracking-tighter opacity-30 hover:opacity-100 hover:text-mint transition-all cursor-default" style={{WebkitTextStroke: '1px #555'}}>UI/UX DESIGN</span>
<span className="text-mint text-2xl align-middle">•</span>
<span className="font-display font-medium text-4xl md:text-6xl text-transparent stroke-text px-8 tracking-tighter opacity-30 hover:opacity-100 hover:text-mint transition-all cursor-default" style={{WebkitTextStroke: '1px #555'}}>WEB DEVELOPMENT</span>
<span className="text-mint text-2xl align-middle">•</span>
<span className="font-display font-medium text-4xl md:text-6xl text-transparent stroke-text px-8 tracking-tighter opacity-30 hover:opacity-100 hover:text-mint transition-all cursor-default" style={{WebkitTextStroke: '1px #555'}}>GROWTH STRATEGY</span>
</div>
</div>
</div>

<section className="py-32 px-6 relative">
<div className="aurora-accent top-1/2 right-0 w-[500px] h-[500px] opacity-20"></div>
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-white mb-8">
                        UNE VISION.<br/>
                        DES RÉSULTATS <span className="text-mint">MESURABLES</span>.
                    </h2>
</div>
<div>
<p className="font-inter font-light text-lg text-zinc-400 leading-relaxed mb-6">
                        Le digital n'est pas une dépense, c'est votre plus grand levier d'accélération. 
                    </p>
<p className="font-inter font-light text-lg text-zinc-400 leading-relaxed border-l-2 border-mint pl-6">
                        Nous ne créons pas de simples sites, nous bâtissons des <span className="text-white font-normal">actifs rentables</span> conçus pour performer dans l'économie moderne.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#121212] border-t border-white/5 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-20">
<span className="text-mint font-mono text-xs uppercase tracking-widest mb-2 block">Nos Services</span>
<h2 className="font-display font-medium text-4xl tracking-tight text-white">L'ARCHITECTURE DE VOTRE SUCCÈS</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="hover-card bg-surface p-8 relative group overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:palette-linear" width="80"></iconify-icon>
</div>
<div className="w-12 h-12 bg-[#171717] border border-white/10 flex items-center justify-center mb-8 text-mint">
<iconify-icon icon="solar:figma-file-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl tracking-tight text-white mb-4">Design d'Expérience</h3>
<p className="font-inter font-light text-zinc-400 text-sm leading-relaxed mb-8">
                        L'esthétique au service de la conversion. Nous utilisons le <span className="text-mint">#1ED39C</span> pour guider l'œil et capturer l'attention.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-mint" icon="solar:check-circle-linear"></iconify-icon> UI Systems
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-mint" icon="solar:check-circle-linear"></iconify-icon> Motion Design
                        </li>
</ul>
</div>

<div className="hover-card bg-surface p-8 relative group overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:code-square-linear" width="80"></iconify-icon>
</div>
<div className="w-12 h-12 bg-[#171717] border border-white/10 flex items-center justify-center mb-8 text-mint">
<iconify-icon icon="solar:server-square-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl tracking-tight text-white mb-4">Ingénierie &amp; Performance</h3>
<p className="font-inter font-light text-zinc-400 text-sm leading-relaxed mb-8">
                        Des sites rapides, propres, optimisés. L'architecture de votre succès commence ici avec un code irréprochable.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-mint" icon="solar:check-circle-linear"></iconify-icon> Next.js / Tailwind
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-mint" icon="solar:check-circle-linear"></iconify-icon> Headless CMS
                        </li>
</ul>
</div>

<div className="hover-card bg-surface p-8 relative group overflow-hidden">
<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:chart-square-linear" width="80"></iconify-icon>
</div>
<div className="w-12 h-12 bg-[#171717] border border-white/10 flex items-center justify-center mb-8 text-mint">
<iconify-icon icon="solar:wad-of-money-linear" width="24"></iconify-icon>
</div>
<h3 className="font-display font-medium text-xl tracking-tight text-white mb-4">Votre ROI au centre</h3>
<p className="font-inter font-light text-zinc-400 text-sm leading-relaxed mb-8">
                        Chaque pixel de votre interface est pensé pour remplir un objectif business précis et maximiser la rentabilité.
                    </p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-mint" icon="solar:check-circle-linear"></iconify-icon> Conversion Rate Optimization
                        </li>
<li className="flex items-center gap-3 text-xs text-zinc-300">
<iconify-icon className="text-mint" icon="solar:check-circle-linear"></iconify-icon> Analytics
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-20 items-end">
<div>
<span className="text-zinc-500 font-mono text-xs uppercase tracking-widest mb-4 block">L'Agence</span>
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-white mb-8">
                        DERRIÈRE LA <span className="text-mint">LUMIÈRE</span>.
                    </h2>
<p className="font-inter font-light text-zinc-400 text-lg leading-relaxed">
                        The Aurora Rise est née d'une volonté simple : éliminer le bruit numérique pour ne laisser place qu'à l'essentiel : la performance et l'éclat de votre marque.
                    </p>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="p-6 border-l border-zinc-800">
<div className="font-display font-semibold text-5xl text-mint tracking-tight mb-2">+45</div>
<div className="font-inter text-sm text-zinc-500 font-light">Projets livrés</div>
</div>
<div className="p-6 border-l border-zinc-800">
<div className="font-display font-semibold text-5xl text-mint tracking-tight mb-2">100%</div>
<div className="font-inter text-sm text-zinc-500 font-light">Focus Client</div>
</div>
<div className="p-6 border-l border-zinc-800">
<div className="font-display font-semibold text-5xl text-mint tracking-tight mb-2">2.5x</div>
<div className="font-inter text-sm text-zinc-500 font-light">ROI Moyen</div>
</div>
<div className="p-6 border-l border-zinc-800">
<div className="font-display font-semibold text-5xl text-mint tracking-tight mb-2">24/7</div>
<div className="font-inter text-sm text-zinc-500 font-light">Monitoring</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#151515] border-t border-white/5" id="contact">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-white mb-4">
                    PRÊT POUR LE <span className="text-mint">DÉCOLLAGE</span> ?
                </h2>
<p className="text-zinc-500 font-light">Dites-nous en plus sur votre trajectoire.</p>
</div>
<form className="space-y-12">
<div className="grid md:grid-cols-2 gap-12">
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-zinc-500">Nom Complet</label>
<input className="custom-input w-full py-3 text-white placeholder-zinc-700 font-light bg-transparent" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-zinc-500">Email Professionnel</label>
<input className="custom-input w-full py-3 text-white placeholder-zinc-700 font-light bg-transparent" placeholder="john@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-zinc-500">Site Web Actuel (Optionnel)</label>
<input className="custom-input w-full py-3 text-white placeholder-zinc-700 font-light bg-transparent" placeholder="https://..." type="url"/>
</div>
<div className="space-y-4">
<label className="text-xs uppercase tracking-widest text-zinc-500">Objectif de croissance</label>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
<label className="cursor-pointer">
<input className="peer sr-only" name="goal" type="radio"/>
<div className="py-3 px-4 border border-zinc-800 text-zinc-400 text-sm text-center peer-checked:border-mint peer-checked:text-mint peer-checked:bg-mint/5 transition-all hover:border-zinc-600">
                                Chiffre d'Affaires
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="goal" type="radio"/>
<div className="py-3 px-4 border border-zinc-800 text-zinc-400 text-sm text-center peer-checked:border-mint peer-checked:text-mint peer-checked:bg-mint/5 transition-all hover:border-zinc-600">
                                Leads &amp; Trafic
                            </div>
</label>
<label className="cursor-pointer">
<input className="peer sr-only" name="goal" type="radio"/>
<div className="py-3 px-4 border border-zinc-800 text-zinc-400 text-sm text-center peer-checked:border-mint peer-checked:text-mint peer-checked:bg-mint/5 transition-all hover:border-zinc-600">
                                Visibilité Marque
                            </div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-widest text-zinc-500">Quel est votre défi actuel ?</label>
<textarea className="custom-input w-full py-3 text-white placeholder-zinc-700 font-light bg-transparent resize-none" placeholder="Décrivez votre projet..." rows="4"></textarea>
</div>
<div className="pt-6">
<button className="w-full py-5 bg-mint text-[#171717] font-display font-semibold tracking-wide hover:bg-white transition-colors duration-300" type="submit">
                        INITIALISER LE PROJET
                    </button>
<p className="text-center text-[10px] text-zinc-600 mt-4">En cliquant, vous acceptez de commencer l'ascension.</p>
</div>
</form>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#171717]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-mint rounded-full"></span>
<span className="font-display font-medium text-white tracking-tight">THE AURORA RISE</span>
</div>
<div className="flex gap-8">
<a className="text-zinc-500 hover:text-mint transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-mint transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
<a className="text-zinc-500 hover:text-mint transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
</div>
<div className="text-xs font-inter text-zinc-600">
                © 2023 The Aurora Rise. All systems operational.
            </div>
</div>
</footer>

    </>
  );
}
