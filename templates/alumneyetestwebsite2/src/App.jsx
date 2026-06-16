import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
colors: {
primary: '#B11F24',
dark: '#020408',
light: '#F8F9FA'
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
},
animation: {
'scroll': 'scroll 40s linear infinite',
'scroll-reverse': 'scrollReverse 50s linear infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
scrollReverse: {
'0%': { transform: 'translateX(-50%)' },
'100%': { transform: 'translateX(0)' },
}
}
}
}
}



        // 1. Dark Mode Toggle
        const themeToggleBtn = document.getElementById('themeToggle');
        const html = document.documentElement;
        
        // Check local storage or system preference
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            html.classList.add('dark');
        } else {
            html.classList.remove('dark');
        }

        themeToggleBtn.addEventListener('click', () => {
            html.classList.toggle('dark');
            if (html.classList.contains('dark')) {
                localStorage.theme = 'dark';
            } else {
                localStorage.theme = 'light';
            }
        });

        // 2. Mouse Tracking
        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;
            
            document.documentElement.style.setProperty('--cursor-x', `${x}px`);
            document.documentElement.style.setProperty('--cursor-y', `${y}px`);

            const cards = document.querySelectorAll('.spotlight-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const cardX = x - rect.left;
                const cardY = y - rect.top;
                card.style.setProperty('--mouse-x', `${cardX}px`);
                card.style.setProperty('--mouse-y', `${cardY}px`);
            });
        });

        // 3. Reveal Animation
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // 4. Counter Animation (Applied to all counters)
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    if(!counter.classList.contains('animated')) {
                        const target = parseInt(counter.getAttribute('data-target'));
                        let current = 0;
                        const duration = 2000; // Animation duration in ms
                        const stepTime = 20;
                        const steps = duration / stepTime;
                        const increment = target / steps;
                        
                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= target) {
                                clearInterval(timer);
                                current = target;
                            }
                            // Format number with spaces
                            counter.textContent = Math.floor(current).toLocaleString('fr-FR').replace(/\s/g, ' ');
                        }, stepTime);
                        
                        counter.classList.add('animated');
                    }
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="ambient-glow"></div>
<div className="noise-overlay"></div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 dark:border-white/5 bg-white/80 dark:bg-[#020408]/80 backdrop-blur-xl transition-colors duration-500">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group relative z-50" href="https://www.alumneye.fr">
<div className="relative w-8 h-8 flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-primary to-red-900 shadow-[0_0_15px_rgba(177,31,36,0.3)] group-hover:shadow-[0_0_25px_rgba(177,31,36,0.6)] transition-all duration-300">
<span className="font-display font-semibold text-white text-lg italic">A</span>
</div>
<span className="font-display font-semibold text-lg tracking-tight text-slate-900 dark:text-white">
                    ALUMN<span className="text-slate-400 font-light">EYE</span>
</span>
</a>

<div className="hidden lg:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-slate-500 dark:text-slate-400">
<a className="hover:text-primary dark:hover:text-white transition-colors relative group" href="#">
                    Candidats
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-primary dark:hover:text-white transition-colors relative group" href="#">
                    Entreprises
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
</a>
<a className="hover:text-primary dark:hover:text-white transition-colors relative group" href="#">
                    Inside
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
</a>
</div>

<div className="flex items-center gap-6">

<button className="relative group p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors text-slate-600 dark:text-slate-400" id="themeToggle">
<iconify-icon className="block dark:hidden" icon="lucide:sun" width="18"></iconify-icon>
<iconify-icon className="hidden dark:block" icon="lucide:moon" width="18"></iconify-icon>
</button>
<div className="h-4 w-px bg-slate-200 dark:bg-white/10 hidden md:block"></div>
<a className="hidden md:block text-xs font-medium text-slate-500 hover:text-primary dark:hover:text-white transition-colors uppercase tracking-widest" href="#">Connexion</a>
<a className="relative overflow-hidden rounded-full bg-slate-900 dark:bg-white px-6 py-2.5 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-slate-200/50 dark:shadow-none" href="#join">
<span className="relative z-10 text-xs font-bold text-white dark:text-black uppercase tracking-wider">S'inscrire</span>
</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-grid">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full mt-10">
<div className="flex flex-col items-start gap-8">

<div className="reveal flex items-center gap-3 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-sm">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</div>
<span className="text-[10px] font-mono font-medium text-slate-600 dark:text-slate-300 uppercase tracking-widest">Admissions 2026 Ouvertes</span>
</div>

<h1 className="reveal font-display text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] text-slate-900 dark:text-white max-w-5xl">
<span className="shine-text cursor-default">Réussissez vos entretiens en Finance et décrochez une carrière à la hauteur de vos ambitions.</span>
</h1>
<div className="reveal flex flex-col md:flex-row items-start gap-8 mt-6">
<p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light max-w-xl leading-relaxed border-l-2 border-primary pl-6">
                        Le leader de la préparation aux carrières en <strong className="text-slate-900 dark:text-white font-medium">M&amp;A, Private Equity &amp; Stratégie</strong>.
                        <br/><span className="text-sm mt-2 block opacity-70">Paris · Londres · New York</span>
</p>
</div>

<div className="reveal w-full mt-16 pt-8 border-t border-slate-200 dark:border-white/10">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12">
<div className="group cursor-default">
<p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Placements</p>
<div className="flex items-baseline gap-1 overflow-hidden h-12">
<span className="counter font-display text-4xl md:text-5xl font-medium text-slate-900 dark:text-white tracking-tight transform translate-y-0 transition-transform" data-target="8200">0</span>
<span className="text-primary text-2xl">+</span>
</div>
</div>
<div className="group cursor-default">
<p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Réussite</p>
<div className="flex items-baseline gap-1">
<span className="counter font-display text-4xl md:text-5xl font-medium text-slate-900 dark:text-white tracking-tight" data-target="96">0</span>
<span className="text-primary text-2xl">%</span>
</div>
</div>
<div className="group cursor-default">
<p className="text-[10px] uppercase tracking-widest text-slate-500 mb-2">Base de données</p>
<div className="flex items-baseline gap-1">
<span className="counter font-display text-4xl md:text-5xl font-medium text-slate-900 dark:text-white tracking-tight" data-target="15000">0</span>
</div>
</div>
<div className="flex items-center justify-end">
<a className="group relative w-16 h-16 rounded-full border border-slate-300 dark:border-white/20 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300" href="#discover">
<iconify-icon className="text-slate-900 dark:text-white group-hover:text-white group-hover:animate-bounce transition-colors" icon="lucide:arrow-down" width="24"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-6 border-y border-slate-200 dark:border-white/5 bg-slate-100 dark:bg-black/40 overflow-hidden relative backdrop-blur-sm">
<div className="marquee-container w-full overflow-hidden whitespace-nowrap mask-image-gradient">
<div className="animate-scroll inline-flex items-center gap-24 opacity-50 dark:opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
<span className="font-serif text-2xl text-slate-800 dark:text-white tracking-tight">Goldman Sachs</span>
<span className="font-display font-bold text-xl text-slate-800 dark:text-white tracking-widest uppercase">J.P. Morgan</span>
<span className="font-sans font-bold text-xl text-slate-800 dark:text-white tracking-tighter uppercase">Morgan Stanley</span>
<span className="font-serif italic text-2xl text-slate-800 dark:text-white">Rothschild &amp; Co</span>
<span className="font-display font-medium text-xl text-slate-800 dark:text-white tracking-tight uppercase">Blackstone</span>
<span className="font-serif text-xl text-slate-800 dark:text-white tracking-widest uppercase">Lazard</span>
<span className="font-sans font-bold text-xl text-slate-800 dark:text-white tracking-tighter">McKinsey&amp;Company</span>

<span className="font-serif text-2xl text-slate-800 dark:text-white tracking-tight">Goldman Sachs</span>
<span className="font-display font-bold text-xl text-slate-800 dark:text-white tracking-widest uppercase">J.P. Morgan</span>
<span className="font-sans font-bold text-xl text-slate-800 dark:text-white tracking-tighter uppercase">Morgan Stanley</span>
<span className="font-serif italic text-2xl text-slate-800 dark:text-white">Rothschild &amp; Co</span>
</div>
</div>
</section>

<section className="py-32 relative z-10 bg-slate-50 dark:bg-[#020408] transition-colors duration-500" id="discover">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="reveal font-display text-4xl md:text-5xl font-medium tracking-tighter text-slate-900 dark:text-white mb-4">
                        Career <span className="text-primary">Engineering</span>.
                    </h2>
<p className="reveal text-slate-600 dark:text-slate-400 font-light max-w-xl text-lg">
                        Synchronisation parfaite avec les calendriers de recrutement de Londres, Paris et NYC.
                    </p>
</div>
<div className="reveal">
<a className="inline-flex items-center gap-2 text-xs font-mono uppercase text-primary border border-primary/30 bg-primary/5 px-4 py-2 rounded hover:bg-primary hover:text-white transition-all" href="#">
<iconify-icon icon="lucide:calendar-clock" width="14"></iconify-icon>
                        Calendrier 2026
                     </a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

<div className="reveal spotlight-card md:col-span-2 row-span-1 md:row-span-2 rounded-xl border border-slate-200 dark:border-white/10 p-10 flex flex-col justify-between group cursor-pointer bg-white dark:bg-white/[0.02] hover:shadow-2xl dark:hover:shadow-none transition-all">
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-6 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="lucide:sun" width="24"></iconify-icon>
</div>
<h3 className="font-display text-3xl text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-primary transition-colors">Summer Session</h3>
<p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed max-w-sm">
                            Le programme signature. Préparation intensive aux Spring Insights &amp; Summer Internships. Maîtrise technique absolue et coaching fit personnalisé.
                        </p>
</div>
<div className="relative z-10 flex items-center gap-4 mt-8 pt-8 border-t border-slate-100 dark:border-white/5">
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">Prochain Slot</span>
<span className="text-sm text-slate-900 dark:text-white font-mono">Juin 20-21 &amp; 27-28</span>
</div>
<div className="w-px h-8 bg-slate-200 dark:bg-white/10 mx-4"></div>
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#111] bg-gray-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#111] bg-gray-400"></div>
<div className="w-8 h-8 rounded-full border-2 border-white dark:border-[#111] bg-gray-500 flex items-center justify-center text-[8px] text-white font-bold">+120</div>
</div>
</div>
</div>

<div className="reveal spotlight-card rounded-xl border border-slate-200 dark:border-white/10 p-8 flex flex-col justify-between group bg-white dark:bg-white/[0.02] hover:shadow-lg transition-all">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
<iconify-icon icon="lucide:snowflake" width="20"></iconify-icon>
</div>
<span className="text-[9px] font-bold bg-slate-900 dark:bg-white text-white dark:text-black px-2 py-0.5 rounded tracking-wider">OPEN</span>
</div>
<div>
<h3 className="font-display text-xl text-slate-900 dark:text-white mb-2 tracking-tight">Winter Session</h3>
<p className="text-slate-500 text-xs font-light leading-relaxed">
                            Césure &amp; Graduate Programs. 2 week-ends de haute intensité.
                        </p>
</div>
</div>

<div className="reveal spotlight-card rounded-xl border border-slate-200 dark:border-white/10 p-8 flex flex-col justify-between group bg-white dark:bg-white/[0.02] hover:shadow-lg transition-all">
<div className="flex justify-between items-start">
<div className="w-10 h-10 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500">
<iconify-icon icon="lucide:monitor-play" width="20"></iconify-icon>
</div>
</div>
<div>
<h3 className="font-display text-xl text-slate-900 dark:text-white mb-2 tracking-tight">Online Tracks</h3>
<p className="text-slate-500 text-xs font-light leading-relaxed">
                            Formation LBO &amp; M&amp;A à la demande. Mêmes standards, votre rythme.
                        </p>
</div>
</div>

<div className="reveal md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="spotlight-card rounded-xl border border-slate-200 dark:border-white/10 p-6 flex items-center gap-6 group hover:border-primary/50 transition-colors bg-white dark:bg-white/[0.02]">
<div className="shrink-0 w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">
<iconify-icon icon="lucide:graduation-cap" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 dark:text-white font-medium mb-1">Prépa MSc Finance</h4>
<p className="text-xs text-slate-500">Target Schools: HEC, ESSEC, LSE, Imperial, Bocconi.</p>
</div>
<div className="ml-auto w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
<iconify-icon className="text-slate-400 group-hover:text-white" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="spotlight-card rounded-xl border border-slate-200 dark:border-white/10 p-6 flex items-center gap-6 group hover:border-primary/50 transition-colors bg-white dark:bg-white/[0.02]">
<div className="shrink-0 w-12 h-12 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-primary transition-colors">
<iconify-icon icon="lucide:briefcase" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-slate-900 dark:text-white font-medium mb-1">Track Conseil Stratégie</h4>
<p className="text-xs text-slate-500">MBB &amp; Tier-2. Préparation étude de cas.</p>
</div>
<div className="ml-auto w-8 h-8 rounded-full border border-slate-200 dark:border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
<iconify-icon className="text-slate-400 group-hover:text-white" icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden bg-slate-100 dark:bg-[#050A10] transition-colors duration-500">
<div className="absolute inset-0 bg-grid opacity-50"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
<div className="order-2 lg:order-1 reveal">
<div className="relative group cursor-pointer perspective-1000">

<div className="aspect-video bg-black rounded-lg border border-slate-300 dark:border-white/10 overflow-hidden relative shadow-2xl transition-all duration-500 group-hover:shadow-[0_0_60px_rgba(177,31,36,0.2)]">

<div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900"></div>

<div className="absolute top-4 left-4 flex gap-2">
<div className="px-2 py-0.5 bg-red-600 text-[9px] text-white font-bold uppercase rounded animate-pulse">Live</div>
<div className="px-2 py-0.5 bg-black/50 backdrop-blur text-[9px] text-white font-mono rounded">REC 00:14:23</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-32 flex items-end justify-center gap-1 pb-8 opacity-50">
<div className="w-1 bg-primary h-12 animate-pulse"></div>
<div className="w-1 bg-primary h-20 animate-pulse delay-75"></div>
<div className="w-1 bg-primary h-8 animate-pulse delay-100"></div>
<div className="w-1 bg-primary h-16 animate-pulse delay-150"></div>
<div className="w-1 bg-primary h-10 animate-pulse delay-200"></div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
<iconify-icon className="text-white ml-1" icon="lucide:play" strokeWidth="2" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 reveal">
<h2 className="font-display text-4xl font-medium text-slate-900 dark:text-white mb-6 tracking-tight">
                    Immersion <br/>
<span className="text-slate-400">Totale.</span>
</h2>
<p className="text-lg text-slate-600 dark:text-slate-400 font-light mb-8 leading-relaxed">
                    Pas de théorie académique. Nous simulons la pression du desk. Accédez à un extrait brut de nos sessions techniques.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-white/10 cursor-default">
<div className="mt-1 w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary">
<iconify-icon icon="lucide:bar-chart-3" width="16"></iconify-icon>
</div>
<div>
<h5 className="text-slate-900 dark:text-white font-medium text-sm">Contenu Technique Avancé</h5>
<p className="text-slate-500 text-xs mt-1">Modélisation, Valorisation, LBO, M&amp;A Process.</p>
</div>
</div>
<div className="flex items-start gap-4 p-4 rounded-lg hover:bg-white/50 dark:hover:bg-white/5 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-white/10 cursor-default">
<div className="mt-1 w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary">
<iconify-icon icon="lucide:users" width="16"></iconify-icon>
</div>
<div>
<h5 className="text-slate-900 dark:text-white font-medium text-sm">Mentorat Élite</h5>
<p className="text-slate-500 text-xs mt-1">Intervenants formés chez Goldman Sachs, MS, Rothschild.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 relative bg-white dark:bg-[#020408] border-t border-slate-200 dark:border-white/10">
<div className="max-w-7xl mx-auto px-6">
<h3 className="reveal font-display text-2xl font-medium text-slate-900 dark:text-white mb-10 tracking-tight">Formations Digitales</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<a className="reveal spotlight-card group block p-8 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/5 transition-all" href="https://www.alumneye.fr/training-lbo/" target="_blank">
<div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:bar-chart-4" width="24"></iconify-icon>
</div>
<h4 className="font-display text-xl text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Training LBO</h4>
<p className="text-slate-500 text-sm font-light mb-6">Maîtrisez la modélisation LBO de A à Z. Le standard des fonds de Private Equity.</p>
<div className="flex items-center text-xs font-bold uppercase tracking-wider text-primary">
                        Voir la formation <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</div>
</a>

<a className="reveal spotlight-card group block p-8 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/5 transition-all" href="https://trainingibd.com/courses/training-ibd-courses/" target="_blank">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:building-2" width="24"></iconify-icon>
</div>
<h4 className="font-display text-xl text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Training IBD</h4>
<p className="text-slate-500 text-sm font-light mb-6">Investment Banking Division. Les fondamentaux techniques pour réussir en Banque d'Affaires.</p>
<div className="flex items-center text-xs font-bold uppercase tracking-wider text-primary">
                        Voir la formation <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</div>
</a>

<a className="reveal spotlight-card group block p-8 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] hover:bg-slate-100 dark:hover:bg-white/5 transition-all" href="https://trainingibd.com/courses/coding-in-python/" target="_blank">
<div className="w-12 h-12 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center text-yellow-600 dark:text-yellow-500 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:code-2" width="24"></iconify-icon>
</div>
<h4 className="font-display text-xl text-slate-900 dark:text-white mb-2 group-hover:text-primary transition-colors">Formation Python</h4>
<p className="text-slate-500 text-sm font-light mb-6">L'atout quantitatif indispensable. Automatisation financière et analyse de données.</p>
<div className="flex items-center text-xs font-bold uppercase tracking-wider text-primary">
                        Voir la formation <iconify-icon className="ml-2 group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="14"></iconify-icon>
</div>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#020408] overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 text-center md:text-left">
<h2 className="reveal font-display text-3xl font-medium tracking-tight text-slate-900 dark:text-white">
                Ils ont rejoint l'élite.
            </h2>
</div>
<div className="marquee-container w-full overflow-hidden mask-image-gradient">
<div className="animate-scroll-reverse flex items-stretch gap-6 w-max hover:[animation-play-state:paused]">

<div className="w-[350px] md:w-[400px] p-8 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-500">A</div>
<div><div className="text-sm font-bold text-slate-900 dark:text-white">Augustin</div><div className="text-[10px] uppercase tracking-wider text-primary">Eurazeo</div></div>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm italic font-light">"Le réseau est la vraie valeur ajoutée. J'ai pu contacter des anciens de ma formation dans chaque fonds."</p>
</div>
<div className="w-[350px] md:w-[400px] p-8 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-500">N</div>
<div><div className="text-sm font-bold text-slate-900 dark:text-white">Nelly</div><div className="text-[10px] uppercase tracking-wider text-primary">Goldman Sachs</div></div>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm italic font-light">"Une méthodologie chirurgicale. On ne perd pas de temps, on va droit au but sur ce qui est attendu."</p>
</div>
<div className="w-[350px] md:w-[400px] p-8 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-500">T</div>
<div><div className="text-sm font-bold text-slate-900 dark:text-white">Thomas</div><div className="text-[10px] uppercase tracking-wider text-primary">Lazard</div></div>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm italic font-light">"L'accès aux comptes rendus d'entretiens est un cheat code. J'avais déjà vu 80% des questions."</p>
</div>
<div className="w-[350px] md:w-[400px] p-8 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-500">M</div>
<div><div className="text-sm font-bold text-slate-900 dark:text-white">Marie</div><div className="text-[10px] uppercase tracking-wider text-primary">Morgan Stanley</div></div>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm italic font-light">"Les simulations d'entretiens sont plus dures que les vrais. Le jour J, j'étais en totale confiance."</p>
</div>

<div className="w-[350px] md:w-[400px] p-8 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-500">A</div>
<div><div className="text-sm font-bold text-slate-900 dark:text-white">Augustin</div><div className="text-[10px] uppercase tracking-wider text-primary">Eurazeo</div></div>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm italic font-light">"Le réseau est la vraie valeur ajoutée. J'ai pu contacter des anciens de ma formation dans chaque fonds."</p>
</div>
<div className="w-[350px] md:w-[400px] p-8 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-500">N</div>
<div><div className="text-sm font-bold text-slate-900 dark:text-white">Nelly</div><div className="text-[10px] uppercase tracking-wider text-primary">Goldman Sachs</div></div>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm italic font-light">"Une méthodologie chirurgicale. On ne perd pas de temps, on va droit au but sur ce qui est attendu."</p>
</div>
<div className="w-[350px] md:w-[400px] p-8 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-500">T</div>
<div><div className="text-sm font-bold text-slate-900 dark:text-white">Thomas</div><div className="text-[10px] uppercase tracking-wider text-primary">Lazard</div></div>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm italic font-light">"L'accès aux comptes rendus d'entretiens est un cheat code. J'avais déjà vu 80% des questions."</p>
</div>
<div className="w-[350px] md:w-[400px] p-8 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.02]">
<div className="flex items-center gap-4 mb-4">
<div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-bold text-slate-500">M</div>
<div><div className="text-sm font-bold text-slate-900 dark:text-white">Marie</div><div className="text-[10px] uppercase tracking-wider text-primary">Morgan Stanley</div></div>
</div>
<p className="text-slate-600 dark:text-slate-400 text-sm italic font-light">"Les simulations d'entretiens sont plus dures que les vrais. Le jour J, j'étais en totale confiance."</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-100 dark:bg-[#050A10] border-t border-slate-200 dark:border-white/10">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="reveal font-display text-3xl font-medium text-slate-900 dark:text-white mb-6">Parlons de votre avenir.</h2>
<p className="reveal text-slate-600 dark:text-slate-400 font-light mb-10">Réservez un créneau d'information avec un conseiller AlumnEye.</p>
<div className="reveal relative rounded-xl overflow-hidden shadow-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 h-[700px]">
<iframe frameborder="0" height="100%" src="https://calendly.com/call-conseiller-alumneye/agenda?month=2026-01&amp;hide_landing_page_details=1&amp;hide_gdpr_banner=1" width="100%"></iframe>
</div>
</div>
</section>

<footer className="relative pt-32 pb-10 bg-slate-100 dark:bg-[#000] border-t border-slate-200 dark:border-white/10 overflow-hidden transition-colors duration-500">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-primary/5 dark:bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row gap-16 items-start justify-between border-b border-slate-200 dark:border-white/10 pb-20 mb-20">
<div className="max-w-xl">
<h2 className="font-display text-3xl font-medium text-slate-900 dark:text-white mb-6">Prêt à accélérer ?</h2>
<p className="text-slate-600 dark:text-slate-400 font-light mb-8">Recevez le Guide Finance 2026. Analyse sectorielle complète.</p>
<form className="flex flex-col sm:flex-row gap-4">
<input className="bg-white dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all w-full sm:w-64 shadow-sm" placeholder="Email universitaire" type="email"/>
<button className="bg-primary hover:bg-red-800 text-white font-medium px-6 py-3 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/30" type="button">
<span>Télécharger</span>
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</form>
</div>
<div className="grid grid-cols-2 gap-12 text-sm">
<div>
<h4 className="text-slate-900 dark:text-white font-semibold mb-4">Programmes</h4>
<ul className="space-y-3 text-slate-500 dark:text-slate-500">
<li><a className="hover:text-primary transition-colors" href="#">Summer Session</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Winter Session</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Online Training</a></li>
</ul>
</div>
<div>
<h4 className="text-slate-900 dark:text-white font-semibold mb-4">Compagnie</h4>
<ul className="space-y-3 text-slate-500 dark:text-slate-500">
<li><a className="hover:text-primary transition-colors" href="#">À propos</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-slate-500 dark:text-slate-600 uppercase tracking-widest font-mono">
<div className="flex items-center gap-2 order-2 md:order-1">
<div className="w-3 h-3 bg-primary rounded-sm"></div>
<span>© 2026 AlumnEye</span>
</div>

<div className="flex items-center gap-6 order-1 md:order-2">
<a className="hover:text-primary dark:hover:text-white transition-colors" href="https://www.linkedin.com/company/2492546/" target="_blank">
<iconify-icon icon="simple-icons:linkedin" width="18"></iconify-icon>
</a>
<a className="hover:text-primary dark:hover:text-white transition-colors" href="https://www.instagram.com/alumneyenetwork/" target="_blank">
<iconify-icon icon="simple-icons:instagram" width="18"></iconify-icon>
</a>
<a className="hover:text-primary dark:hover:text-white transition-colors" href="https://www.youtube.com/@AlumnEye" target="_blank">
<iconify-icon icon="simple-icons:youtube" width="18"></iconify-icon>
</a>
<a className="hover:text-primary dark:hover:text-white transition-colors" href="https://www.tiktok.com/@alumneye" target="_blank">
<iconify-icon icon="simple-icons:tiktok" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
