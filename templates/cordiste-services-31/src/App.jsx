import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
},
colors: {
bg: {
main: '#0D0D0D',
secondary: '#1A1A2E',
card: '#1F2937',
light: '#F8FAFC', // Light mode bg
lightCard: '#FFFFFF' // Light mode card
},
tpgh: {
blue: '#2E7DD1',
cyan: '#00D4FF',
orange: '#F5A623',
red: '#EF4444',
green: '#10B981',
border: '#374151',
lightBorder: '#E2E8F0'
}
},
animation: {
'marquee': 'marquee 40s linear infinite',
'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
marquee: {
'0%': { transform: 'translateX(0%)' },
'100%': { transform: 'translateX(-50%)' },
}
}
}
}
}



        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
            const nav = document.getElementById('navbar');
            if(document.documentElement.classList.contains('dark')) {
                nav.classList.remove('glass-light');
                nav.classList.add('glass-dark');
            } else {
                nav.classList.remove('glass-dark');
                nav.classList.add('glass-light');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<button className="fixed bottom-6 right-6 z-[100] w-12 h-12 rounded-full bg-white dark:bg-tpgh-blue shadow-lg border border-gray-200 dark:border-white/20 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group" onclick="toggleTheme()">
<iconify-icon className="text-xl text-orange-500 dark:hidden" icon="solar:sun-2-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-xl text-white hidden dark:block" icon="solar:moon-stars-linear" strokeWidth="1.5"></iconify-icon>
<span className="absolute right-14 bg-black dark:bg-white text-white dark:text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none font-medium">
            Changer mode
        </span>
</button>

<nav className="fixed w-full z-50 glass glass-light dark:glass-dark transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="h-10 w-8 relative flex items-end gap-[2px]">
<div className="w-1 bg-slate-900 dark:bg-white h-[40%] group-hover:bg-tpgh-blue transition-colors"></div>
<div className="w-1 bg-slate-900 dark:bg-white h-[55%] group-hover:bg-tpgh-blue transition-colors delay-75"></div>
<div className="w-1 bg-slate-900 dark:bg-white h-[70%] group-hover:bg-tpgh-blue transition-colors delay-100"></div>
<div className="w-1 bg-slate-900 dark:bg-white h-[85%] group-hover:bg-tpgh-blue transition-colors delay-150"></div>
<div className="w-1 bg-slate-900 dark:bg-white h-[100%] group-hover:bg-tpgh-blue transition-colors delay-200"></div>
</div>
<div className="flex flex-col font-display font-bold leading-none tracking-tight">
<span className="text-xl text-slate-900 dark:text-white">TPGH</span>
<span className="text-[10px] text-gray-500 dark:text-gray-400 font-sans font-normal tracking-wide">ACCÈS DIFFICILES</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-600 dark:text-gray-300">
<a className="hover:text-tpgh-blue dark:hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-tpgh-blue dark:hover:text-white transition-colors" href="#vision">Vision</a>
<a className="hover:text-tpgh-blue dark:hover:text-white transition-colors" href="#realisations">Réalisations</a>
<a className="hover:text-tpgh-blue dark:hover:text-white transition-colors" href="#team">L'Équipe</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="flex items-center gap-2 text-tpgh-red font-semibold text-sm animate-pulse-slow" href="tel:0149980175">
<iconify-icon className="text-lg" icon="solar:bolt-linear"></iconify-icon>
                    URGENCE 24/7
                </a>
<a className="px-5 py-2.5 bg-slate-900 dark:bg-tpgh-blue hover:bg-slate-800 dark:hover:bg-tpgh-blue/90 text-white text-sm font-semibold rounded-lg transition-all btn-glow shadow-lg dark:shadow-none" href="#contact">
                    Devis Gratuit
                </a>
</div>

<button className="lg:hidden text-slate-900 dark:text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">

<img alt="Cordiste TPGH Paris" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/60 to-bg-main dark:from-bg-main/80 dark:via-bg-main/50 dark:to-bg-main"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tpgh-cyan opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-tpgh-cyan"></span>
</span>
                INGÉNIERIE DE L'ACCÈS VERTICAL
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-white mb-6 leading-[1.1]">
                TRANSFORMONS <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-gray-300 to-gray-500">L'ORDINAIRE</span> EN <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-tpgh-blue to-tpgh-cyan">EXTRAORDINAIRE</span>
</h1>
<p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                Votre partenaire expert des travaux en hauteur depuis 26 ans. <br className="hidden md:block"/>
                60 professionnels qualifiés, +10 000 projets réalisés en Île-de-France.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-4 bg-tpgh-blue hover:bg-tpgh-blue/90 text-white font-semibold rounded-xl hover:scale-[1.02] transition-transform btn-glow flex items-center justify-center gap-2 shadow-xl" href="#contact">
                    DEMANDER UN DEVIS GRATUIT 
                    <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm" href="#services">
                    DÉCOUVRIR NOS SOLUTIONS
                </a>
</div>

<div className="mt-12 inline-block">
<div className="flex items-center gap-3 px-6 py-3 bg-white/10 border border-white/20 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors cursor-pointer">
<iconify-icon className="text-xl text-tpgh-red animate-pulse" icon="solar:phone-calling-linear"></iconify-icon>
<span className="text-white font-bold font-mono">01 49 98 01 75</span>
<span className="text-gray-300 text-sm border-l border-white/20 pl-3">Intervention sous 2h à 48h</span>
</div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<iconify-icon className="text-2xl text-white/50" icon="solar:alt-arrow-down-linear" strokeWidth="1.5"></iconify-icon>
</div>
</header>

<section className="py-10 bg-white dark:bg-bg-secondary border-y border-gray-100 dark:border-white/5 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-8 text-center">
<span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Ils nous font confiance</span>
</div>
<div className="relative w-full mask-linear">
<div className="flex whitespace-nowrap animate-marquee items-center gap-16">
<span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">BNP PARIBAS</span>
<span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">VINCI</span>
<span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">FONCIA</span>
<span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">ENGIE</span>
<span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">BOUYGUES</span>
<span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">CDC HABITAT</span>
<span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">ALLIANZ</span>
<span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">VILLE DE PARIS</span>

<span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">BNP PARIBAS</span>
<span className="text-2xl font-display font-bold text-gray-300 dark:text-gray-700 hover:text-slate-900 dark:hover:text-white transition-colors cursor-default">VINCI</span>
</div>
</div>
</section>

<section className="py-24 bg-bg-light dark:bg-bg-main relative">
<div className="absolute inset-0 bg-tpgh-blue/5 radial-gradient pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<h2 className="text-3xl md:text-4xl font-display font-bold mb-16 text-center text-slate-900 dark:text-white">CHIFFRES CLÉS</h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="bg-white dark:bg-bg-card p-8 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none hover:border-tpgh-cyan/30 transition-all hover:transform hover:-translate-y-1 group">
<div className="text-4xl font-mono font-bold text-slate-800 dark:text-white mb-2 group-hover:text-tpgh-cyan transition-colors">+10K</div>
<div className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wide">Projets Réalisés</div>
<p className="text-xs text-gray-400 mt-2">Plus de 10 000 interventions</p>
</div>

<div className="bg-white dark:bg-bg-card p-8 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none hover:border-tpgh-cyan/30 transition-all hover:transform hover:-translate-y-1 group">
<div className="text-4xl font-mono font-bold text-slate-800 dark:text-white mb-2 group-hover:text-tpgh-cyan transition-colors">60</div>
<div className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wide">Professionnels</div>
<p className="text-xs text-gray-400 mt-2">Équipe qualifiée</p>
</div>

<div className="bg-white dark:bg-bg-card p-8 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none hover:border-tpgh-cyan/30 transition-all hover:transform hover:-translate-y-1 group">
<div className="text-4xl font-mono font-bold text-slate-800 dark:text-white mb-2 group-hover:text-tpgh-cyan transition-colors">26</div>
<div className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wide">Années d'Exp.</div>
<p className="text-xs text-gray-400 mt-2">Expertise depuis 1999</p>
</div>

<div className="bg-white dark:bg-bg-card p-8 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none hover:border-tpgh-cyan/30 transition-all hover:transform hover:-translate-y-1 group">
<div className="text-4xl font-mono font-bold text-slate-800 dark:text-white mb-2 group-hover:text-tpgh-cyan transition-colors">+5M€</div>
<div className="text-sm font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wide">C.A. 2025</div>
<p className="text-xs text-gray-400 mt-2">Croissance constante</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-bg-secondary" id="vision">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative group">
<div className="absolute -inset-1 bg-gradient-to-r from-tpgh-blue to-tpgh-cyan rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] lg:aspect-square shadow-2xl">

<img alt="Vision TPGH Travaux Grande Hauteur" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&amp;w=1976&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
<div className="absolute bottom-8 left-8">
<h3 className="text-3xl font-display font-bold text-white">NOTRE VISION</h3>
<p className="text-tpgh-cyan mt-2 font-medium">L'excellence au service de la hauteur</p>
</div>
</div>
</div>
<div className="space-y-8">

<div className="flex gap-6 group">
<span className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 flex items-center justify-center font-mono text-tpgh-blue group-hover:bg-tpgh-blue group-hover:text-white transition-colors">01</span>
<div>
<h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Satisfaction Client</h4>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed">Écoute et réponse aux besoins spécifiques pour une expérience exceptionnelle.</p>
</div>
</div>

<div className="flex gap-6 group">
<span className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 flex items-center justify-center font-mono text-tpgh-blue group-hover:bg-tpgh-blue group-hover:text-white transition-colors">02</span>
<div>
<h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Innovation</h4>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed">Interventions rapides grâce à une organisation optimisée et une équipe réactive.</p>
</div>
</div>

<div className="flex gap-6 group">
<span className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 flex items-center justify-center font-mono text-tpgh-blue group-hover:bg-tpgh-blue group-hover:text-white transition-colors">03</span>
<div>
<h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Sécurité Absolue</h4>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed">Aucun compromis. Certifications IRATA/CQP pour tous nos techniciens.</p>
</div>
</div>

<div className="flex gap-6 group">
<span className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 flex items-center justify-center font-mono text-tpgh-blue group-hover:bg-tpgh-blue group-hover:text-white transition-colors">04</span>
<div>
<h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">Durabilité</h4>
<p className="text-gray-500 dark:text-gray-400 leading-relaxed">Pratiques écoresponsables et matériaux durables.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-bg-light dark:bg-bg-main overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-display font-bold mb-12 text-center text-slate-900 dark:text-white">DOMAINES D'INTERVENTION</h2>
<div className="flex flex-col lg:flex-row w-full gap-2">

<div className="flex-1 bg-white dark:bg-gray-900 chevron-box p-6 md:pl-8 md:pr-12 hover:bg-tpgh-blue transition-colors group cursor-pointer border dark:border-0 border-gray-200 relative shadow-sm dark:shadow-none">
<iconify-icon className="text-2xl text-tpgh-blue group-hover:text-white mb-3" icon="solar:home-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-bold text-slate-900 dark:text-white group-hover:text-white mb-1">COUVERTURE</h3>
<p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-white/80">Réfection, zinc, ardoise</p>
</div>

<div className="flex-1 bg-white dark:bg-gray-800 chevron-box p-6 md:pl-12 md:pr-12 hover:bg-tpgh-blue transition-colors group cursor-pointer border dark:border-0 border-gray-200 relative lg:-ml-8 z-10 shadow-sm dark:shadow-none mt-2 lg:mt-0">
<iconify-icon className="text-2xl text-tpgh-blue group-hover:text-white mb-3" icon="solar:city-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-bold text-slate-900 dark:text-white group-hover:text-white mb-1">MAÇONNERIE</h3>
<p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-white/80">Ravalement, mortier</p>
</div>

<div className="flex-1 bg-white dark:bg-gray-700 chevron-box p-6 md:pl-12 md:pr-12 hover:bg-tpgh-blue transition-colors group cursor-pointer border dark:border-0 border-gray-200 relative lg:-ml-8 z-20 shadow-sm dark:shadow-none mt-2 lg:mt-0">
<iconify-icon className="text-2xl text-tpgh-blue group-hover:text-white mb-3" icon="solar:water-drops-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-bold text-slate-900 dark:text-white group-hover:text-white mb-1">ÉTANCHÉITÉ</h3>
<p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-white/80">Infiltrations, terrasses</p>
</div>

<div className="flex-1 bg-white dark:bg-gray-600 chevron-box p-6 md:pl-12 md:pr-12 hover:bg-tpgh-blue transition-colors group cursor-pointer border dark:border-0 border-gray-200 relative lg:-ml-8 z-30 shadow-sm dark:shadow-none mt-2 lg:mt-0">
<iconify-icon className="text-2xl text-tpgh-blue group-hover:text-white mb-3" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-bold text-slate-900 dark:text-white group-hover:text-white mb-1">PROTECTION</h3>
<p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-white/80">Filets, anti-chute</p>
</div>

<div className="flex-1 bg-white dark:bg-gray-500 chevron-box p-6 md:pl-12 md:pr-8 hover:bg-tpgh-blue transition-colors group cursor-pointer border dark:border-0 border-gray-200 relative lg:-ml-8 z-40 shadow-sm dark:shadow-none mt-2 lg:mt-0">
<iconify-icon className="text-2xl text-tpgh-blue group-hover:text-white mb-3" icon="solar:paint-roller-linear" strokeWidth="1.5"></iconify-icon>
<h3 className="font-bold text-slate-900 dark:text-white group-hover:text-white mb-1">SECOND-ŒUVRE</h3>
<p className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-white/80">Peinture, finitions</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-light dark:bg-bg-main relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-4">NOS SERVICES</h2>
<p className="text-xl text-gray-500 dark:text-gray-400">5 pôles d'excellence pour répondre à tous vos défis d'accès difficile</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-2 bg-white dark:bg-bg-card rounded-3xl p-8 border border-gray-200 dark:border-white/10 hover:border-tpgh-blue/50 transition-all group relative overflow-hidden flex flex-col justify-between shadow-lg dark:shadow-none">

<img className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-20 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10">
<div className="w-12 h-12 bg-gray-100 dark:bg-white/10 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-tpgh-blue" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">BÂTIMENT</h3>
<ul className="text-gray-600 dark:text-gray-400 space-y-2 mb-6 columns-1 md:columns-2 gap-8">
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-tpgh-blue rounded-full"></div>Audit de façades</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-tpgh-blue rounded-full"></div>Ravalement complet</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-tpgh-blue rounded-full"></div>Réparations fissures</li>
<li className="flex items-center gap-2"><div className="w-1 h-1 bg-tpgh-blue rounded-full"></div>Réfection joints</li>
</ul>
</div>
<a className="relative z-10 inline-flex items-center text-tpgh-blue font-semibold group-hover:translate-x-2 transition-transform" href="#contact">
                        EN SAVOIR PLUS <iconify-icon className="text-lg ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>

<div className="md:row-span-2 bg-gradient-to-b from-white to-red-50 dark:from-bg-card dark:to-[#250d0d] rounded-3xl p-8 border border-red-100 dark:border-tpgh-red/20 hover:border-tpgh-red transition-all group flex flex-col relative overflow-hidden shadow-lg dark:shadow-none">
<div className="absolute top-0 right-0 p-4">
<span className="inline-flex items-center px-3 py-1 rounded-full bg-tpgh-red/10 text-tpgh-red text-xs font-bold animate-pulse">
                            ⚡ 2 À 48H
                        </span>
</div>
<div className="w-12 h-12 bg-tpgh-red/10 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-tpgh-red" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">URGENCES</h3>
<p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">Intervention rapide pour sécurisation, mise hors d'eau et purge.</p>
<ul className="text-gray-600 dark:text-gray-400 space-y-3 mb-8 text-sm flex-grow">
<li className="flex items-center gap-2"><iconify-icon className="text-tpgh-red" icon="solar:check-circle-linear"></iconify-icon>Recherche fuite</li>
<li className="flex items-center gap-2"><iconify-icon className="text-tpgh-red" icon="solar:check-circle-linear"></iconify-icon>Sécurisation</li>
<li className="flex items-center gap-2"><iconify-icon className="text-tpgh-red" icon="solar:check-circle-linear"></iconify-icon>Nids de guêpes</li>
</ul>
<div className="mt-auto text-center">
<a className="block w-full py-3 bg-tpgh-red hover:bg-red-600 text-white font-bold rounded-lg transition-colors mb-2" href="tel:0149980175">
                            01 49 98 01 75
                        </a>
<span className="text-xs text-gray-500">Astreinte 24/7</span>
</div>
</div>

<div className="bg-white dark:bg-bg-card rounded-3xl p-8 border border-gray-200 dark:border-white/10 hover:border-tpgh-orange transition-all group relative overflow-hidden shadow-lg dark:shadow-none">
<img className="absolute inset-0 w-full h-full object-cover opacity-5 dark:opacity-10" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" />
<div className="relative z-10">
<div className="w-12 h-12 bg-tpgh-orange/10 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-tpgh-orange" icon="solar:drop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">ÉTANCHÉITÉ</h3>
<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Toiture terrasse, balcons, recherche d'infiltrations.</p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="px-2 py-1 bg-gray-100 dark:bg-white/5 rounded text-xs text-gray-500 dark:text-gray-300">Bitume SBS</span>
<span className="px-2 py-1 bg-gray-100 dark:bg-white/5 rounded text-xs text-gray-500 dark:text-gray-300">EPDM</span>
<span className="px-2 py-1 bg-gray-100 dark:bg-white/5 rounded text-xs text-gray-500 dark:text-gray-300">Résine PU</span>
</div>
<a className="inline-flex items-center text-tpgh-orange font-semibold text-sm group-hover:translate-x-2 transition-transform" href="#contact">
                            DÉTAILS <iconify-icon className="text-lg ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</img></div>

<div className="bg-white dark:bg-bg-card rounded-3xl p-8 border border-gray-200 dark:border-white/10 hover:border-tpgh-cyan transition-all group relative overflow-hidden shadow-lg dark:shadow-none">
<img className="absolute inset-0 w-full h-full object-cover opacity-5 dark:opacity-10" src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" />
<div className="relative z-10">
<div className="w-12 h-12 bg-tpgh-cyan/10 rounded-xl flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-tpgh-cyan" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">NETTOYAGE</h3>
<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Vitrages, façades, verrières. Certifié Écolabel.</p>
<a className="inline-flex items-center text-tpgh-cyan font-semibold text-sm group-hover:translate-x-2 transition-transform" href="#contact">
                            DÉTAILS <iconify-icon className="text-lg ml-2" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</img></div>

<div className="md:col-span-2 bg-white dark:bg-bg-card rounded-3xl p-8 border border-gray-200 dark:border-white/10 hover:border-tpgh-blue/50 transition-all group flex items-center justify-between shadow-lg dark:shadow-none">
<div>
<div className="flex items-center gap-4 mb-4">
<div className="w-12 h-12 bg-gray-100 dark:bg-white/10 rounded-xl flex items-center justify-center">
<iconify-icon className="text-2xl text-tpgh-blue" icon="solar:home-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900 dark:text-white">COUVERTURE</h3>
</div>
<p className="text-gray-600 dark:text-gray-400 max-w-md">Réfection partielle ou complète sur toiture : zinc, ardoise, tuile, bac acier.</p>
</div>
<a className="hidden md:inline-flex w-12 h-12 rounded-full bg-gray-100 dark:bg-white/5 items-center justify-center group-hover:bg-tpgh-blue group-hover:text-white transition-all text-slate-900 dark:text-white" href="#contact">
<iconify-icon className="text-xl" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white dark:bg-bg-secondary border-y border-gray-100 dark:border-white/5">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-2xl font-display font-bold mb-10 text-center text-slate-900 dark:text-white">MÉTHODES D'INTERVENTION</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="group text-center cursor-pointer">
<div className="h-64 rounded-xl bg-gray-200 dark:bg-gray-800 mb-4 overflow-hidden relative shadow-lg">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1523592121529-f6dde35f079e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 dark:bg-black/60 backdrop-blur rounded text-xs font-bold text-slate-900 dark:text-white">RAPIDITÉ</div>
</div>
<h3 className="text-lg font-bold text-slate-900 dark:text-white">SUR CORDE</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Accès rapide sans échafaudage</p>
</div>

<div className="group text-center cursor-pointer">
<div className="h-64 rounded-xl bg-gray-200 dark:bg-gray-800 mb-4 overflow-hidden relative shadow-lg">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 dark:bg-black/60 backdrop-blur rounded text-xs font-bold text-slate-900 dark:text-white">HAUTEUR</div>
</div>
<h3 className="text-lg font-bold text-slate-900 dark:text-white">AVEC NACELLE</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Jusqu'à 60m avec opérateurs</p>
</div>

<div className="group text-center cursor-pointer">
<div className="h-64 rounded-xl bg-gray-200 dark:bg-gray-800 mb-4 overflow-hidden relative shadow-lg">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-500" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
<div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 dark:bg-black/60 backdrop-blur rounded text-xs font-bold text-slate-900 dark:text-white">LONGUE DURÉE</div>
</div>
<h3 className="text-lg font-bold text-slate-900 dark:text-white">ÉCHAFAUDAGE</h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Pour travaux patrimoniaux</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-light dark:bg-bg-main">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white">OFFRES &amp; TARIFS</h2>
<p className="text-gray-500 dark:text-gray-400 mt-2">Tarifs HT - Île-de-France</p>
</div>
<div className="grid lg:grid-cols-2 gap-12">

<div className="space-y-8">
<div className="bg-white dark:bg-bg-secondary p-8 rounded-2xl border border-gray-200 dark:border-white/5 shadow-md dark:shadow-none">
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-tpgh-blue text-2xl" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon> INVESTIGATIONS
                        </h3>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Programmable sous 1 semaine</p>
<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
<li className="flex items-center gap-2">✓ Diagnostic précis de la situation</li>
<li className="flex items-center gap-2">✓ Réalisation de constats détaillés</li>
<li className="flex items-center gap-2">✓ Rapport photographique et préconisations</li>
</ul>
</div>
<div className="bg-red-50 dark:bg-tpgh-red/5 p-8 rounded-2xl border border-red-100 dark:border-tpgh-red/20">
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
<iconify-icon className="text-tpgh-red text-2xl" icon="solar:alarm-linear" strokeWidth="1.5"></iconify-icon> MESURES CONSERVATOIRES
                        </h3>
<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Intervention sous 2 à 48h</p>
<ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
<li className="flex items-center gap-2">✓ Sécurisation de façades et toitures</li>
<li className="flex items-center gap-2">✓ Mise hors d'eau et pompage</li>
<li className="flex items-center gap-2">✓ Établissement d'un devis réparation</li>
</ul>
</div>
</div>

<div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg dark:shadow-none bg-white dark:bg-bg-card">
<table className="w-full text-left text-sm">
<thead className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
<tr>
<th className="p-4 font-semibold">Description</th>
<th className="p-4 font-semibold">Régulier</th>
<th className="p-4 font-semibold text-tpgh-cyan">Préférentiel</th>
</tr>
</thead>
<tbody className="divide-y divide-gray-100 dark:divide-white/5">
<tr>
<td className="p-4 text-slate-900 dark:text-white font-medium">Équipe Cordistes</td>
<td className="p-4 text-gray-500 dark:text-gray-400">900€ ½j / 1550€ j</td>
<td className="p-4 text-tpgh-cyan font-bold">800€ ½j / 1375€ j</td>
</tr>
<tr>
<td className="p-4 text-slate-900 dark:text-white font-medium">Étancheur</td>
<td className="p-4 text-gray-500 dark:text-gray-400">780€ ½j / 1200€ j</td>
<td className="p-4 text-tpgh-cyan font-bold">650€ ½j / 980€ j</td>
</tr>
<tr>
<td className="p-4 text-slate-900 dark:text-white font-medium">Nacelle + Opérateurs</td>
<td className="p-4 text-gray-500 dark:text-gray-400">1050€ ½j / 1300€ j</td>
<td className="p-4 text-tpgh-cyan font-bold">950€ ½j / 1200€ j</td>
</tr>
</tbody>
</table>
<div className="p-4 bg-gray-50 dark:bg-gray-900/50 text-xs text-center text-gray-500">
                        Tarifs indicatifs HT. Déplacement inclus zone 1.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white dark:bg-bg-secondary relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-3xl font-display font-bold text-center mb-16 text-slate-900 dark:text-white">FEUILLE DE ROUTE SINISTRE</h2>
<div className="relative border-l border-gray-200 dark:border-white/10 ml-6 md:ml-12 space-y-12">

<div className="relative pl-12">
<span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-tpgh-red shadow-[0_0_10px_rgba(239,68,68,0.5)]"></span>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">01. Mesures conservatoires</h3>
<p className="text-gray-500 dark:text-gray-400">Interventions d'urgence pour sécuriser et protéger temporairement les zones endommagées.</p>
</div>

<div className="relative pl-12">
<span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-tpgh-blue"></span>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">02. Investigations</h3>
<p className="text-gray-500 dark:text-gray-400">Diagnostic technique approfondi pour identifier l'origine et l'étendue des désordres.</p>
</div>

<div className="relative pl-12">
<span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-tpgh-blue"></span>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">03. Devis &amp; Offre</h3>
<p className="text-gray-500 dark:text-gray-400">Proposition commerciale détaillée précisant travaux, délais et coûts.</p>
</div>

<div className="relative pl-12">
<span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-tpgh-green shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
<h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">04. Réalisation</h3>
<p className="text-gray-500 dark:text-gray-400">Exécution des prestations selon les règles de l'art et les normes de sécurité.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-light dark:bg-bg-main" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">L'ÉQUIPE</h2>
<a className="text-tpgh-blue hover:text-slate-900 dark:hover:text-white transition-colors text-sm" href="mailto:contact@tpgh.fr">Nous rejoindre →</a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white dark:bg-bg-card p-6 rounded-xl border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all group shadow-sm dark:shadow-none">
<div className="flex items-center justify-between mb-4">
<div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center text-slate-900 dark:text-white font-bold">RB</div>
<span className="text-xs font-mono text-tpgh-blue bg-tpgh-blue/10 px-2 py-1 rounded">DIRECTION</span>
</div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white">Riyadh BOUSSOFFARA</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Directeur Général</p>
<div className="pt-4 border-t border-gray-100 dark:border-white/5 flex flex-col gap-2 text-sm">
<a className="text-gray-500 dark:text-gray-400 hover:text-tpgh-blue dark:hover:text-white flex items-center gap-2" href="tel:0777975893"><iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon> 07 77 97 58 93</a>
<a className="text-gray-500 dark:text-gray-400 hover:text-tpgh-blue dark:hover:text-white flex items-center gap-2" href="mailto:r.boussoffara@tpgh.fr"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon> r.boussoffara@tpgh.fr</a>
</div>
</div>
<div className="bg-white dark:bg-bg-card p-6 rounded-xl border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all group shadow-sm dark:shadow-none">
<div className="flex items-center justify-between mb-4">
<div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center text-slate-900 dark:text-white font-bold">KB</div>
<span className="text-xs font-mono text-tpgh-cyan bg-tpgh-cyan/10 px-2 py-1 rounded">COMMERCE</span>
</div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white">Karim BOUSSOFFARA</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Directeur Commercial</p>
<div className="pt-4 border-t border-gray-100 dark:border-white/5 flex flex-col gap-2 text-sm">
<a className="text-gray-500 dark:text-gray-400 hover:text-tpgh-blue dark:hover:text-white flex items-center gap-2" href="tel:0623269159"><iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon> 06 23 26 91 59</a>
<a className="text-gray-500 dark:text-gray-400 hover:text-tpgh-blue dark:hover:text-white flex items-center gap-2" href="mailto:k.boussoffara@tpgh.fr"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon> k.boussoffara@tpgh.fr</a>
</div>
</div>
<div className="bg-white dark:bg-bg-card p-6 rounded-xl border border-gray-200 dark:border-white/5 hover:border-gray-300 dark:hover:border-white/20 transition-all group shadow-sm dark:shadow-none">
<div className="flex items-center justify-between mb-4">
<div className="h-12 w-12 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-900 flex items-center justify-center text-slate-900 dark:text-white font-bold">WP</div>
<span className="text-xs font-mono text-tpgh-green bg-tpgh-green/10 px-2 py-1 rounded">CLIENTS</span>
</div>
<h4 className="text-lg font-bold text-slate-900 dark:text-white">William PALLARDY</h4>
<p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Resp. Relation Clients</p>
<div className="pt-4 border-t border-gray-100 dark:border-white/5 flex flex-col gap-2 text-sm">
<a className="text-gray-500 dark:text-gray-400 hover:text-tpgh-blue dark:hover:text-white flex items-center gap-2" href="tel:0603794539"><iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon> 06 03 79 45 39</a>
<a className="text-gray-500 dark:text-gray-400 hover:text-tpgh-blue dark:hover:text-white flex items-center gap-2" href="mailto:w.pallardy@tpgh.fr"><iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon> w.pallardy@tpgh.fr</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white dark:bg-bg-secondary border-b border-gray-100 dark:border-white/5">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2">
<h2 className="text-3xl font-display font-bold mb-6 text-slate-900 dark:text-white">ZONE D'INTERVENTION</h2>
<p className="text-xl text-slate-800 dark:text-white font-semibold mb-4">Île-de-France</p>
<ul className="space-y-3 mb-8 text-gray-600 dark:text-gray-400">
<li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-tpgh-blue"></span>Paris (75) - Tous arrondissements</li>
<li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-tpgh-blue"></span>Seine-Saint-Denis (93) - Siège</li>
<li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-tpgh-blue"></span>Hauts-de-Seine (92)</li>
<li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-tpgh-blue"></span>Val-de-Marne (94)</li>
</ul>
<div className="flex gap-4">
<div className="px-4 py-2 bg-gray-50 dark:bg-bg-card rounded border border-gray-200 dark:border-white/10">
<span className="block text-xl font-bold text-slate-900 dark:text-white">&lt; 2h</span>
<span className="text-xs text-gray-500">Paris &amp; Petite Couronne</span>
</div>
<div className="px-4 py-2 bg-gray-50 dark:bg-bg-card rounded border border-gray-200 dark:border-white/10">
<span className="block text-xl font-bold text-slate-900 dark:text-white">&lt; 4h</span>
<span className="text-xs text-gray-500">Grande Couronne</span>
</div>
</div>
</div>
<div className="md:w-1/2 relative w-full">

<div className="aspect-video bg-gray-100 dark:bg-[#111] rounded-xl border border-gray-200 dark:border-white/10 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 opacity-20 dark:opacity-20" style={{backgroundImage: 'radial-gradient(#999 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 text-center">
<iconify-icon className="text-5xl text-tpgh-blue mx-auto mb-2 animate-bounce" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-mono text-gray-500 dark:text-gray-400">LA PLAINE ST DENIS (HQ)</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg-light dark:bg-bg-main">
<div className="max-w-7xl mx-auto px-6 text-center mb-16">
<h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white">CE QU'ILS DISENT DE NOUS</h2>
</div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

<div className="bg-white dark:bg-bg-card p-8 rounded-2xl relative shadow-md dark:shadow-none">
<iconify-icon className="text-3xl text-tpgh-blue/20 absolute top-6 right-6" icon="solar:quote-up-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-gray-600 dark:text-gray-300 italic mb-6">"TPGH intervient depuis 8 ans sur notre parc. L'intervention d'urgence suite aux intempéries de janvier a évité des dégâts majeurs."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center font-bold text-gray-500 dark:text-gray-300">MD</div>
<div className="text-left">
<div className="text-slate-900 dark:text-white font-bold text-sm">Marie Dubois</div>
<div className="text-xs text-gray-500">Resp. Technique, 92</div>
</div>
</div>
</div>

<div className="bg-white dark:bg-bg-card p-8 rounded-2xl relative border border-tpgh-blue/20 shadow-md dark:shadow-none">
<iconify-icon className="text-3xl text-tpgh-blue/20 absolute top-6 right-6" icon="solar:quote-up-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-gray-600 dark:text-gray-300 italic mb-6">"Fiabilité et réactivité exemplaires. TPGH est devenu notre partenaire de référence pour tous nos actifs en Île-de-France."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center font-bold text-gray-500 dark:text-gray-300">GE</div>
<div className="text-left">
<div className="text-slate-900 dark:text-white font-bold text-sm">Direction Technique</div>
<div className="text-xs text-gray-500">GECINA</div>
</div>
</div>
</div>

<div className="bg-white dark:bg-bg-card p-8 rounded-2xl relative shadow-md dark:shadow-none">
<iconify-icon className="text-3xl text-tpgh-blue/20 absolute top-6 right-6" icon="solar:quote-up-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-gray-600 dark:text-gray-300 italic mb-6">"Entreprise sérieuse, ce n'est pas monnaie courante dans ce secteur. TPGH sait répondre à nos besoins."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center font-bold text-gray-500 dark:text-gray-300">AM</div>
<div className="text-left">
<div className="text-slate-900 dark:text-white font-bold text-sm">Alain MARTIN</div>
<div className="text-xs text-gray-500">Client</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-white dark:bg-transparent" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-tpgh-blue/10 to-bg-light dark:from-tpgh-blue/20 dark:to-bg-main"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">PRÊT À RELEVER LE DÉFI ?</h2>
<p className="text-xl text-gray-600 dark:text-gray-300 mb-10">Décrivez votre projet. Nos experts vous répondent sous 24h avec une solution sur mesure.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<a className="w-full sm:w-auto px-8 py-4 bg-tpgh-blue text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all transform" href="#">
                    OBTENIR MON DEVIS GRATUIT
                </a>
<a className="w-full sm:w-auto px-8 py-4 bg-white dark:bg-white text-slate-900 font-bold rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 border border-gray-200" href="tel:0149980175">
<iconify-icon className="text-lg" icon="solar:phone-linear"></iconify-icon> 01 49 98 01 75
                </a>
</div>
<p className="text-gray-500 italic text-sm max-w-2xl mx-auto">
                "Merci à tous nos clients et partenaires pour votre confiance. Votre satisfaction est notre motivation quotidienne."
            </p>
</div>
</section>

<footer className="bg-gray-100 dark:bg-black pt-20 pb-10 border-t border-gray-200 dark:border-white/10 text-slate-900 dark:text-gray-400">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1">
<div className="flex items-center gap-3 mb-6">
<div className="h-8 w-6 relative flex items-end gap-[1px]">
<div className="w-1 bg-slate-900 dark:bg-white h-[40%]"></div>
<div className="w-1 bg-slate-900 dark:bg-white h-[60%]"></div>
<div className="w-1 bg-slate-900 dark:bg-white h-[80%]"></div>
<div className="w-1 bg-slate-900 dark:bg-white h-[100%]"></div>
</div>
<span className="text-2xl font-display font-bold text-slate-900 dark:text-white">TPGH</span>
</div>
<p className="text-sm mb-6">Expert des travaux en hauteur et d'accès difficiles en Île-de-France depuis 1999.</p>
<div className="flex gap-4">
<a className="hover:text-tpgh-blue dark:hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="brandico:linkedin-rect"></iconify-icon></a>
<a className="hover:text-tpgh-blue dark:hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="brandico:instagram"></iconify-icon></a>
</div>
</div>

<div className="col-span-1">
<h4 className="text-slate-900 dark:text-white font-bold mb-6">CONTACT</h4>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg mt-1 text-tpgh-blue" icon="solar:map-point-linear"></iconify-icon>
<span>30b rue du Bailly<br/>93210 La Plaine Saint Denis</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-tpgh-blue" icon="solar:phone-linear"></iconify-icon>
<a className="hover:text-tpgh-blue dark:hover:text-white" href="tel:0149980175">01 49 98 01 75</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-lg text-tpgh-blue" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-tpgh-blue dark:hover:text-white" href="mailto:devis@tpgh.fr">devis@tpgh.fr</a>
</li>
</ul>
</div>

<div className="col-span-1">
<h4 className="text-slate-900 dark:text-white font-bold mb-6">SERVICES</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-tpgh-cyan transition-colors" href="#">Maçonnerie &amp; Façade</a></li>
<li><a className="hover:text-tpgh-cyan transition-colors" href="#">Couverture &amp; Toiture</a></li>
<li><a className="hover:text-tpgh-cyan transition-colors" href="#">Étanchéité</a></li>
<li><a className="hover:text-tpgh-cyan transition-colors" href="#">Nettoyage vitrerie</a></li>
<li><a className="hover:text-tpgh-red transition-colors font-semibold" href="#">Urgences Sinistres</a></li>
</ul>
</div>

<div className="col-span-1">
<h4 className="text-slate-900 dark:text-white font-bold mb-6">DÉPARTEMENTS</h4>
<ul className="space-y-2 text-xs font-mono">
<li className="flex justify-between"><span>Commandes</span> <span className="text-gray-500 dark:text-gray-300">commande@tpgh.fr</span></li>
<li className="flex justify-between"><span>Expertise</span> <span className="text-gray-500 dark:text-gray-300">expertise@tpgh.fr</span></li>
<li className="flex justify-between"><span>Compta</span> <span className="text-gray-500 dark:text-gray-300">comptabilite@tpgh.fr</span></li>
<li className="flex justify-between"><span>Recouvrement</span> <span className="text-gray-500 dark:text-gray-300">recouvrement@tpgh.fr</span></li>
</ul>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-600">
<p>© 2025 TPGH. Tous droits réservés.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-gray-900 dark:hover:text-gray-400" href="#">Mentions Légales</a>
<a className="hover:text-gray-900 dark:hover:text-gray-400" href="#">Politique de Confidentialité</a>
<a className="hover:text-gray-900 dark:hover:text-gray-400" href="#">CGV</a>
</div>
</div>
</footer>



    </>
  );
}
