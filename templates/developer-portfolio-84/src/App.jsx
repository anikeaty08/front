import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialisation des icônes
        lucide.createIcons();

        // GSAP Animations Setup
        gsap.registerPlugin(ScrollTrigger);

        // Animation d'entrée du Dock
        gsap.from(".dock-container", {
            y: 150,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out",
            delay: 0.2
        });

        // Animation de la Hero Section
        gsap.from(".hero-anim", {
            y: 40,
            opacity: 0,
            duration: 1.2,
            stagger: 0.1,
            ease: "power3.out"
        });

        // Animation des Cartes Bento avec effet staggered
        gsap.utils.toArray(".spotlight-card").forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                delay: i * 0.05,
                ease: "power2.out"
            });
        });

        // Animation des Projets (Parallax subtil)
        gsap.utils.toArray(".project-card").forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                delay: i * 0.1,
                ease: "expo.out"
            });
        });

        // Animation Timeline
        gsap.utils.toArray(".timeline-item").forEach((item) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                },
                x: -15,
                opacity: 0,
                duration: 0.6,
                ease: "power2.out"
            });
        });
        
        // Spotlight Effect Logic (JavaScript pour suivre la souris)
        const cards = document.querySelectorAll(".spotlight-card");
        
        document.addEventListener("mousemove", (e) => {
            cards.forEach((card) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-6 left-6 z-40 text-zinc-900 hidden md:block">
<span className="text-xs font-semibold tracking-tighter uppercase opacity-50 hover:opacity-100 transition-opacity cursor-default">Théophile.</span>
</div>

<nav className="fixed bottom-6 inset-x-0 z-[100] flex justify-center pointer-events-none">
<div className="dock-container pointer-events-auto flex items-center gap-2 p-2 bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-full shadow-2xl shadow-zinc-900/30 ring-1 ring-white/10 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
<a className="dock-item group relative p-3 rounded-full hover:bg-zinc-800 transition-all active:scale-90 duration-200" href="#">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="home"></i>
<span className="dock-tooltip absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-[10px] rounded opacity-0 transform translate-y-2 scale-90 transition-all pointer-events-none whitespace-nowrap border border-zinc-700 shadow-lg font-medium">Accueil</span>
</a>
<div className="w-px h-4 bg-zinc-800/50 mx-1"></div>
<a className="dock-item group relative p-3 rounded-full hover:bg-zinc-800 transition-all active:scale-90 duration-200" href="#expertises">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="layers"></i>
<span className="dock-tooltip absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-[10px] rounded opacity-0 transform translate-y-2 scale-90 transition-all pointer-events-none whitespace-nowrap border border-zinc-700 shadow-lg font-medium">Expertises</span>
</a>
<a className="dock-item group relative p-3 rounded-full hover:bg-zinc-800 transition-all active:scale-90 duration-200" href="#projets">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="folder-git-2"></i>
<span className="dock-tooltip absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-[10px] rounded opacity-0 transform translate-y-2 scale-90 transition-all pointer-events-none whitespace-nowrap border border-zinc-700 shadow-lg font-medium">Projets</span>
</a>
<a className="dock-item group relative p-3 rounded-full hover:bg-zinc-800 transition-all active:scale-90 duration-200" href="#parcours">
<i className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" data-lucide="history"></i>
<span className="dock-tooltip absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-[10px] rounded opacity-0 transform translate-y-2 scale-90 transition-all pointer-events-none whitespace-nowrap border border-zinc-700 shadow-lg font-medium">Parcours</span>
</a>
<div className="w-px h-4 bg-zinc-800/50 mx-1"></div>
<a className="dock-item group relative p-3 rounded-full bg-zinc-100 hover:bg-white transition-all active:scale-90 duration-200" href="mailto:contact@theophile.dev">
<i className="w-5 h-5 text-zinc-900" data-lucide="mail"></i>
<span className="dock-tooltip absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-800 text-white text-[10px] rounded opacity-0 transform translate-y-2 scale-90 transition-all pointer-events-none whitespace-nowrap border border-zinc-700 shadow-lg font-medium">Me contacter</span>
</a>
</div>
</nav>
<main className="max-w-4xl mx-auto px-6 pt-32 pb-40">

<section className="min-h-[60vh] flex flex-col justify-center mb-32 relative">

<div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-gradient-to-b from-zinc-200/40 to-transparent blur-[80px] rounded-full -z-10 animate-pulse duration-[5000ms]"></div>
<div className="hero-anim inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200/80 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] backdrop-blur-sm w-fit mb-8 hover:border-zinc-300 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600">Disponible pour missions</span>
</div>
<h1 className="hero-anim text-5xl md:text-7xl font-semibold text-zinc-900 tracking-tight leading-[1.05] mb-6">
                Créateur d'expériences<br/>
<span className="text-zinc-400">numériques tangibles.</span>
</h1>
<p className="hero-anim text-lg text-zinc-500 max-w-lg leading-relaxed mb-10 font-light tracking-wide">
                Développeur passionné par l'intersection entre le design minimaliste et l'ingénierie robuste. Je construis des produits qui ont du sens.
            </p>
<div className="hero-anim flex flex-wrap gap-4">
<button className="bg-zinc-900 text-white px-7 py-3 rounded-full text-xs font-medium hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-zinc-900/10 flex items-center gap-2 group" onclick="document.getElementById('projets').scrollIntoView()">
                    Voir mes projets
                    <i className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" data-lucide="arrow-down"></i>
</button>
<button className="px-7 py-3 rounded-full text-xs font-medium text-zinc-600 border border-zinc-200 bg-white hover:bg-zinc-50 hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="github"></i> GitHub
                </button>
</div>
</section>

<section className="mb-32" id="expertises">
<h2 className="section-title text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-8 pl-1 flex items-center gap-2">
<span className="w-2 h-px bg-zinc-300"></span>
                Compétences
            </h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="spotlight-card group p-6 rounded-2xl border border-zinc-200/60 bg-white hover:shadow-xl hover:shadow-zinc-200/40 hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
<i className="text-zinc-700 w-5 h-5" data-lucide="layout"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Frontend</h3>
<p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                        React, Next.js, Tailwind. Création d'interfaces réactives et accessibles.
                    </p>
</div>

<div className="spotlight-card group p-6 rounded-2xl border border-zinc-200/60 bg-white hover:shadow-xl hover:shadow-zinc-200/40 hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
<i className="text-zinc-700 w-5 h-5" data-lucide="database"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Backend</h3>
<p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                        Node.js, PostgreSQL, Prisma. Architectures scalables et sécurisées.
                    </p>
</div>

<div className="spotlight-card group p-6 rounded-2xl border border-zinc-200/60 bg-white hover:shadow-xl hover:shadow-zinc-200/40 hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
<i className="text-zinc-700 w-5 h-5" data-lucide="smartphone"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">Mobile</h3>
<p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                        React Native &amp; Expo. Expérience native fluide iOS et Android.
                    </p>
</div>

<div className="spotlight-card group p-6 rounded-2xl border border-zinc-200/60 bg-white hover:shadow-xl hover:shadow-zinc-200/40 hover:-translate-y-1 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-zinc-50 border border-zinc-100 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
<i className="text-zinc-700 w-5 h-5" data-lucide="pen-tool"></i>
</div>
<h3 className="text-sm font-medium text-zinc-900 mb-1.5">UX/UI</h3>
<p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                        Figma, Systèmes de design. Attention méticuleuse aux détails.
                    </p>
</div>
</div>
</section>

<section className="mb-32" id="projets">
<div className="flex items-end justify-between mb-10 px-1">
<h2 className="section-title text-xs font-semibold text-zinc-400 uppercase tracking-widest flex items-center gap-2">
<span className="w-2 h-px bg-zinc-300"></span>
                    Sélection de Projets
                </h2>
<a className="text-[11px] font-medium text-zinc-800 border-b border-zinc-200 hover:border-zinc-800 transition-colors pb-0.5 flex items-center gap-1 group" href="#">
                    Archive complète
                    <i className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">

<div className="project-card group cursor-pointer">
<div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 aspect-[4/3] mb-6 relative isolate shadow-sm hover:shadow-lg transition-all duration-500">
<div className="absolute inset-0 bg-white flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-zinc-100 via-transparent to-transparent"></div>

<div className="w-40 h-40 rounded-full bg-gradient-to-tr from-zinc-200 to-indigo-50 blur-3xl opacity-60 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15]"></div>
<img alt="Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
<span className="bg-white text-zinc-900 px-4 py-2 rounded-full text-[10px] font-semibold shadow-xl border border-zinc-100 flex items-center gap-2">
                                Voir le site <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</span>
</div>
</div>
<div className="flex justify-between items-start px-1">
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1 group-hover:text-indigo-600 transition-colors">Analytics SaaS</h3>
<p className="text-xs text-zinc-500 font-light">Dashboard temps réel pour entreprises tech.</p>
</div>
<div className="flex gap-2 mt-0.5">
<span className="text-[9px] font-semibold text-zinc-400 border border-zinc-200 px-2 py-0.5 rounded-full uppercase tracking-wider">React</span>
</div>
</div>
</div>

<div className="project-card group cursor-pointer">
<div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 aspect-[4/3] mb-6 relative isolate shadow-sm hover:shadow-lg transition-all duration-500">
<div className="absolute inset-0 bg-white flex items-center justify-center overflow-hidden">
<div className="w-40 h-40 rounded-full bg-gradient-to-bl from-zinc-200 to-emerald-50 blur-3xl opacity-60 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15]"></div>
<img alt="Finance" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-multiply grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute bottom-4 right-4 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100">
<span className="bg-white text-zinc-900 px-4 py-2 rounded-full text-[10px] font-semibold shadow-xl border border-zinc-100 flex items-center gap-2">
                                Voir l'app <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</span>
</div>
</div>
<div className="flex justify-between items-start px-1">
<div>
<h3 className="text-base font-medium text-zinc-900 mb-1 group-hover:text-indigo-600 transition-colors">Fintech Mobile</h3>
<p className="text-xs text-zinc-500 font-light">Application de gestion de patrimoine.</p>
</div>
<div className="flex gap-2 mt-0.5">
<span className="text-[9px] font-semibold text-zinc-400 border border-zinc-200 px-2 py-0.5 rounded-full uppercase tracking-wider">Native</span>
</div>
</div>
</div>
</div>
</section>

<section className="mb-20" id="parcours">
<h2 className="section-title text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-12 pl-1 flex items-center gap-2">
<span className="w-2 h-px bg-zinc-300"></span>
                Expérience
            </h2>
<div className="relative border-l border-zinc-200 ml-3 space-y-12">

<div className="timeline-item relative pl-10 group">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-white ring-4 ring-zinc-50 border border-zinc-300 transition-all duration-300 group-hover:scale-125 group-hover:border-zinc-900"></div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
<h3 className="text-sm font-semibold text-zinc-900">Lead Développeur Full Stack</h3>
<span className="text-[10px] font-medium text-zinc-400 font-mono bg-zinc-50 px-2 py-0.5 rounded">2021 — PRÉSENT</span>
</div>
<p className="text-xs text-zinc-600 mb-2 font-medium">TechStart Solutions</p>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xl font-light">
                        Pilotage d'une équipe de 5 développeurs. Refonte complète de l'architecture backend vers des microservices, réduisant la latence de 40%.
                    </p>
</div>

<div className="timeline-item relative pl-10 group">
<div className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-200 border border-white transition-all duration-300 group-hover:scale-125 group-hover:bg-zinc-300"></div>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-2">
<h3 className="text-sm font-semibold text-zinc-900">Développeur Backend</h3>
<span className="text-[10px] font-medium text-zinc-400 font-mono bg-zinc-50 px-2 py-0.5 rounded">2019 — 2021</span>
</div>
<p className="text-xs text-zinc-600 mb-2 font-medium">DataFlow Corp</p>
<p className="text-xs text-zinc-500 leading-relaxed max-w-xl font-light">
                        Conception d'APIs RESTful critiques. Mise en place de pipelines CI/CD automatisés avec Docker et GitHub Actions.
                    </p>
</div>
</div>
</section>

<section className="border-t border-zinc-100 pt-12 pb-24">
<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-zinc-400 uppercase tracking-wider font-medium">
<p>© 2024 THÉOPHILE. TOUS DROITS RÉSERVÉS.</p>
<div className="flex gap-8">
<a className="hover:text-zinc-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-zinc-900 hover:after:w-full after:transition-all" href="#">Twitter</a>
<a className="hover:text-zinc-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-zinc-900 hover:after:w-full after:transition-all" href="#">LinkedIn</a>
<a className="hover:text-zinc-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-zinc-900 hover:after:w-full after:transition-all" href="#">GitHub</a>
</div>
</div>
</section>
</main>


    </>
  );
}
