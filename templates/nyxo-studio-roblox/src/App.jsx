import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f1f22',
900: '#18181b',
950: '#09090b',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Set Current Year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Language Toggle System
        let currentLang = 'fr';
        function setLang(lang) {
            if(currentLang === lang) return;
            currentLang = lang;
            
            // Update Text
            document.querySelectorAll('.lang-text').forEach(el => {
                if(el.getAttribute(`data-${lang}`)) {
                    el.innerHTML = el.getAttribute(`data-${lang}`);
                }
            });

            // Update Toggle Button Visuals
            const btnFr = document.getElementById('btn-fr');
            const btnEn = document.getElementById('btn-en');
            
            if(lang === 'fr') {
                btnFr.className = "text-zinc-50 hover:text-white transition-colors";
                btnEn.className = "text-zinc-500 hover:text-zinc-300 transition-colors";
            } else {
                btnFr.className = "text-zinc-500 hover:text-zinc-300 transition-colors";
                btnEn.className = "text-zinc-50 hover:text-white transition-colors";
            }
        }

        // Filter System for Portfolio
        let activeFilters = {
            skill: 'all',
            theme: 'all'
        };

        function setFilter(type, value) {
            activeFilters[type] = value;
            
            // Update UI for buttons
            document.querySelectorAll(`.${type}-filter`).forEach(btn => {
                if(btn.dataset.value === value) {
                    btn.classList.add('bg-zinc-800', 'text-zinc-50', 'border-white/10');
                    btn.classList.remove('text-zinc-400', 'border-transparent', 'hover:bg-white/5');
                } else {
                    btn.classList.remove('bg-zinc-800', 'text-zinc-50', 'border-white/10');
                    btn.classList.add('text-zinc-400', 'border-transparent', 'hover:bg-white/5');
                }
            });

            // Filter the grid items
            const items = document.querySelectorAll('.portfolio-item');
            items.forEach(item => {
                const matchSkill = activeFilters.skill === 'all' || item.dataset.skill === activeFilters.skill;
                const matchTheme = activeFilters.theme === 'all' || item.dataset.theme === activeFilters.theme;
                
                if(matchSkill && matchTheme) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        }

        // Project Modal System
        function openProject(title, desc, colorClass, tag) {
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-desc').textContent = desc;
            document.getElementById('modal-tag').textContent = tag;
            
            const colorDiv = document.getElementById('modal-img-color');
            colorDiv.className = `absolute w-64 h-64 rounded-full blur-3xl ${colorClass}`;
            
            const modal = document.getElementById('project-modal');
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }

        function closeProject() {
            const modal = document.getElementById('project-modal');
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto'; // Restore scrolling
        }

        // Portfolio Modal System
        function openPortfolio() {
            const modal = document.getElementById('portfolio-modal');
            modal.classList.remove('hidden');
            modal.classList.add('block');
            document.body.style.overflow = 'hidden';
            window.scrollTo(0, 0); // Reset scroll position for modal
            
            // Reset filters on open
            setFilter('skill', 'all');
            setFilter('theme', 'all');
        }

        function closePortfolio() {
            const modal = document.getElementById('portfolio-modal');
            modal.classList.add('hidden');
            modal.classList.remove('block');
            document.body.style.overflow = 'auto';
        }

        // Close modals on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeProject();
                closePortfolio();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none bg-grid"></div>
<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

<nav className="fixed top-0 w-full z-50 glass-panel border-b transition-all duration-300 border-white/5">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter flex items-center gap-2 text-zinc-50" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br flex items-center justify-center from-zinc-200 to-zinc-600">
<span className="text-xs font-semibold tracking-tighter text-zinc-950">N</span>
</div>
                    NYXO
                </a>
<div className="hidden md:flex items-center gap-6 text-sm font-medium">
<a className="transition-colors lang-text text-zinc-400 hover:text-zinc-50" data-en="Expertise" data-fr="Savoir-faire" href="#services">Savoir-faire</a>
<a className="transition-colors lang-text text-zinc-400 hover:text-zinc-50" data-en="Projects" data-fr="Projets" href="#work">Projets</a>
</div>
</div>
<div className="flex items-center gap-4">

<div className="hidden sm:flex items-center gap-2 text-xs font-medium border rounded-full px-3 py-1 border-white/10 bg-zinc-900/50">
<button className="transition-colors text-zinc-50 hover:text-white" id="btn-fr" onclick="setLang('fr')">FR</button>
<span className="w-px h-3 bg-white/10"></span>
<button className="transition-colors hover:text-zinc-300 text-zinc-500" id="btn-en" onclick="setLang('en')">EN</button>
</div>
<a className="hidden sm:flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors lang-text bg-zinc-50 text-zinc-950 hover:bg-zinc-200" data-en="Our Discord" data-fr="Notre Discord" href="#contact">
                    Notre Discord
                </a>
<button className="sm:hidden text-zinc-400 hover:text-zinc-50">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="z-10 pt-32 pb-24 relative">

<section className="md:pt-24 md:pb-32 flex flex-col text-center max-w-6xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-medium mb-8 text-emerald-300">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-emerald-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="lang-text" data-en="Open" data-fr="Ouvert">Ouvert</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-tight max-w-4xl mb-6 text-zinc-50">
<span className="lang-text" data-en="Creators of immersive" data-fr="Créateurs d'univers">Créateurs d'univers</span>
<br className="hidden md:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-zinc-500 lang-text from-zinc-200" data-en="Roleplay worlds." data-fr="Roleplay immersifs.">Roleplay immersifs.</span>
</h1>
<p className="text-base md:text-lg max-w-2xl mb-10 font-medium lang-text text-zinc-400" data-en="Nyxo Studio is an independent development studio specialized in creating our own high-end Roleplay experiences, advanced systems, and detailed environments on Roblox." data-fr="Nyxo Studio est un studio de développement indépendant spécialisé dans la création de nos propres expériences Roleplay haut de gamme, systèmes avancés et environnements détaillés sur Roblox.">
            Nyxo Studio est un studio de développement indépendant spécialisé dans la création de nos propres
            expériences Roleplay haut de gamme, systèmes avancés et environnements détaillés sur Roblox.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto h-11 flex items-center justify-center gap-2 rounded-md px-6 text-sm font-medium transition-colors lang-text bg-zinc-50 text-zinc-950 hover:bg-zinc-200" data-en="Discover our games" data-fr="Découvrir nos jeux" href="#work">
                Découvrir nos jeux
            </a>
<a className="w-full sm:w-auto h-11 flex items-center justify-center gap-2 rounded-md bg-transparent border px-6 text-sm font-medium transition-colors border-white/10 text-zinc-300 hover:bg-white/5" href="#contact">
<iconify-icon height="18" icon="solar:discord-linear" width="18"></iconify-icon>
<span className="lang-text" data-en="Join the community" data-fr="Rejoindre la communauté">Rejoindre la communauté</span>
</a>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24" id="services">
<div className="mb-12">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 lang-text text-zinc-50" data-en="Our Expertise" data-fr="Notre Savoir-Faire">Notre Savoir-Faire</h2>
<p className="text-sm md:text-base max-w-xl lang-text text-zinc-400" data-en="Solid foundations for high-performance games. We master every aspect of development for our own universes." data-fr="Des fondations solides pour des jeux performants. Nous maîtrisons chaque aspect du développement pour nos propres univers.">
                Des fondations solides pour des jeux performants. Nous maîtrisons chaque aspect du développement pour
                nos propres univers.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 rounded-2xl border transition-colors group bg-zinc-900/50 border-white/5 hover:border-white/10">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:text-indigo-400 transition-colors bg-zinc-800/50 text-zinc-300">
<iconify-icon height="24" icon="solar:code-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight lang-text text-zinc-50" data-en="Engineering &amp; Scripting" data-fr="Ingénierie &amp; Scripting">Ingénierie &amp;
                    Scripting</h3>
<p className="text-sm leading-relaxed lang-text text-zinc-400" data-en="Creation of full RP frameworks, inventory systems, secure economy, databases, and server/client-side optimization." data-fr="Création de frameworks RP complets, systèmes d'inventaire, économie sécurisée, bases de données et optimisation côté serveur/client.">
                    Création de frameworks RP complets, systèmes d'inventaire, économie sécurisée, bases de données et
                    optimisation côté serveur/client.</p>
</div>

<div className="p-6 rounded-2xl border transition-colors group bg-zinc-900/50 border-white/5 hover:border-white/10">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:text-indigo-400 transition-colors bg-zinc-800/50 text-zinc-300">
<iconify-icon height="24" icon="solar:map-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight lang-text text-zinc-50" data-en="Level Design &amp; Build" data-fr="Level Design &amp; Build">Level Design &amp; Build</h3>
<p className="text-sm leading-relaxed lang-text text-zinc-400" data-en="Design of immersive maps, 3D modeling, realistic lighting, and environment optimization for smooth performance." data-fr="Conception de maps immersives, modélisation 3D, éclairage réaliste et optimisation de l'environnement pour des performances fluides.">
                    Conception de maps immersives, modélisation 3D, éclairage réaliste et optimisation de
                    l'environnement pour des performances fluides.</p>
</div>

<div className="p-6 rounded-2xl border transition-colors group bg-zinc-900/50 border-white/5 hover:border-white/10">
<div className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:text-indigo-400 transition-colors bg-zinc-800/50 text-zinc-300">
<iconify-icon height="24" icon="solar:pen-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold mb-2 tracking-tight lang-text text-zinc-50" data-en="User Interface" data-fr="Interface Utilisateur">Interface Utilisateur</h3>
<p className="text-sm leading-relaxed lang-text text-zinc-400" data-en="Design of modern, intuitive, and responsive interfaces. Smooth animations and user experience designed for immersion." data-fr="Design d'interfaces modernes, intuitives et responsives. Animations fluides et expérience utilisateur pensée pour l'immersion.">
                    Design d'interfaces modernes, intuitives et responsives. Animations fluides et expérience
                    utilisateur pensée pour l'immersion.</p>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5" id="work">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4 lang-text text-zinc-50" data-en="Our Universes" data-fr="Nos Univers">Nos Univers</h2>
<p className="text-sm md:text-base max-w-xl lang-text text-zinc-400" data-en="A glimpse of the games and systems we are currently developing." data-fr="Un aperçu des jeux et systèmes que nous développons actuellement.">Un aperçu des jeux et
                    systèmes que nous développons actuellement.</p>
</div>
<button className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-zinc-300 hover:text-zinc-50" onclick="openPortfolio()">
<span className="lang-text" data-en="View full portfolio" data-fr="Voir tout le portfolio">Voir tout le portfolio</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer" onclick="openProject('Liberty City Framework', 'Système complet pour serveur Roleplay incluant gestion de propriétés, concessionnaires dynamiques et système médical avancé. Conçu pour supporter plus de 100 joueurs avec des performances optimales.', 'bg-indigo-500/20', 'Full Stack')">
<div className="aspect-[16/9] overflow-hidden bg-zinc-900 w-full border-white/5 border rounded-2xl mb-6 relative">
<div className="absolute inset-0 bg-gradient-to-br opacity-80 group-hover:opacity-100 transition-opacity duration-500 from-zinc-800 to-zinc-950">
</div>
<div className="flex bg-center bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce840c39-8cae-4a82-9065-f0ae689ee52f_1600w.png)] bg-cover absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="bg-indigo-500/20 w-32 h-32 rounded-full blur-3xl"></div>
<iconify-icon className="group-hover:text-white/50 transition-colors duration-300 text-white/0 absolute" height="32" icon="solar:maximize-square-linear" style={{color: 'rgb(255, 255, 255)'}} width="32"></iconify-icon>
</div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="text-[10px] uppercase font-medium text-zinc-300 tracking-widest bg-zinc-950/80 border-white/10 border rounded-md pt-1 pr-2 pb-1 pl-2 backdrop-blur">Full Stack</span>
<span className="px-2 py-1 rounded-md backdrop-blur text-[10px] font-medium uppercase tracking-widest border bg-zinc-950/80 text-zinc-300 border-white/10">FR RP</span>
</div>
</div>
<h3 className="group-hover:text-indigo-400 transition-colors text-xl font-semibold text-zinc-50 tracking-tight mb-2">
                    Liberty City Framework</h3>
<p className="text-sm lang-text text-zinc-400" data-en="Complete Roleplay server system including property management, dynamic dealerships, and advanced medical system." data-fr="Système complet pour serveur Roleplay incluant gestion de propriétés, concessionnaires dynamiques et système médical avancé.">
                    Système complet pour serveur Roleplay incluant gestion de propriétés, concessionnaires dynamiques et
                    système médical avancé.</p>
</div>

<div className="group cursor-pointer" onclick="openProject('Project Elysium', 'Création d\'une carte urbaine hautement détaillée et optimisée, conçue spécifiquement pour des interactions RP fluides. Comprend des intérieurs détaillés et un cycle jour/nuit réaliste.', 'bg-emerald-500/10', 'Map Design')">
<div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border mb-6 bg-zinc-900 border-white/5">
<div className="absolute inset-0 bg-gradient-to-bl opacity-80 group-hover:opacity-100 transition-opacity duration-500 from-zinc-800 to-zinc-950">
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full bg-emerald-500/10 blur-3xl"></div>
<iconify-icon className="absolute group-hover:text-white/50 transition-colors duration-300 text-white/0" height="32" icon="solar:maximize-square-linear" width="32"></iconify-icon>
</div>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-2 py-1 rounded-md backdrop-blur text-[10px] font-medium uppercase tracking-widest border bg-zinc-950/80 text-zinc-300 border-white/10">Map Design</span>
<span className="px-2 py-1 rounded-md backdrop-blur text-[10px] font-medium uppercase tracking-widest border bg-zinc-950/80 text-zinc-300 border-white/10">EN/FR</span>
</div>
</div>
<h3 className="text-xl font-semibold mb-2 tracking-tight group-hover:text-indigo-400 transition-colors text-zinc-50">
                    Project Elysium - Map</h3>
<p className="text-sm lang-text text-zinc-400" data-en="Creation of a highly detailed and optimized urban map, designed specifically for smooth RP interactions." data-fr="Création d'une carte urbaine hautement détaillée et optimisée, conçue spécifiquement pour des interactions RP fluides.">
                    Création d'une carte urbaine hautement détaillée et optimisée, conçue spécifiquement pour des
                    interactions RP fluides.</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-24 text-center" id="contact">
<div className="p-8 md:p-12 rounded-3xl bg-gradient-to-b border relative overflow-hidden from-zinc-900/80 to-zinc-950 border-white/5">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-indigo-500/20 blur-[80px] rounded-full pointer-events-none">
</div>
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-4 relative z-10 lang-text text-zinc-50" data-en="Follow the adventure" data-fr="Suivez l'aventure">Suivez l'aventure</h2>
<p className="text-sm md:text-base mb-8 max-w-xl mx-auto relative z-10 lang-text text-zinc-400" data-en="We are developing our own games internally for now. Join our Discord to see behind the scenes, participate in testing phases, and chat with the team." data-fr="Nous développons nos propres jeux en vase clos pour le moment. Rejoignez notre Discord pour découvrir l'envers du décor, participer aux phases de test et discuter avec l'équipe.">
                Nous développons nos propres jeux en vase clos pour le moment. Rejoignez notre Discord pour découvrir
                l'envers du décor, participer aux phases de test et discuter avec l'équipe.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
<a className="w-full sm:w-auto h-11 flex items-center justify-center gap-2 rounded-md px-8 text-sm font-medium transition-colors bg-zinc-50 text-zinc-950 hover:bg-zinc-200" href="#">
<iconify-icon height="20" icon="solar:discord-linear" width="20"></iconify-icon>
<span className="lang-text" data-en="Join the Discord" data-fr="Rejoindre le Discord">Rejoindre le Discord</span>
</a>
</div>
</div>
</section>
</main>

<footer className="border-t relative z-10 border-white/5 bg-zinc-950">
<div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<div className="w-5 h-5 rounded flex items-center justify-center bg-zinc-800">
<span className="text-[10px] font-semibold tracking-tighter text-zinc-400">N</span>
</div>
<span className="text-sm font-semibold tracking-tighter text-zinc-50">NYXO STUDIO</span>
</div>
<div className="flex gap-6 text-sm font-medium text-zinc-500">
<a className="transition-colors hover:text-zinc-300" href="#">Twitter</a>
<a className="transition-colors hover:text-zinc-300" href="#">Roblox Group</a>
<a className="transition-colors hover:text-zinc-300" href="#">Discord</a>
</div>
<div className="text-xs font-medium text-zinc-600">
                © <span id="year">2026</span> Nyxo Studio. All rights reserved.
            </div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden items-center justify-center p-4 sm:p-6" id="project-modal">
<div className="absolute inset-0 backdrop-blur-sm transition-opacity bg-zinc-950/80" onclick="closeProject()"></div>
<div className="relative w-full max-w-2xl border rounded-2xl overflow-hidden shadow-2xl modal-enter bg-zinc-900 border-white/10">
<button className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full transition-colors backdrop-blur bg-black/50 text-white/70 hover:text-white hover:bg-black/80" onclick="closeProject()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="w-full aspect-[16/9] relative flex items-center justify-center overflow-hidden bg-zinc-950">
<div className="absolute w-64 h-64 rounded-full blur-3xl" id="modal-img-color"></div>
<div className="absolute inset-0 bg-gradient-to-t to-transparent from-zinc-900"></div>
</div>
<div className="p-6 sm:p-8 relative z-10 -mt-20">
<span className="inline-block px-2 py-1 rounded-md backdrop-blur text-[10px] font-medium uppercase tracking-widest border mb-4 bg-zinc-800/80 text-zinc-300 border-white/10" id="modal-tag">Tag</span>
<h3 className="text-2xl font-semibold mb-4 tracking-tight text-zinc-50" id="modal-title">Project Title</h3>
<p className="text-sm leading-relaxed mb-8 text-zinc-400" id="modal-desc">Project Description goes here.</p>
<button className="h-10 w-full sm:w-auto px-6 rounded-md border text-sm font-medium transition-colors lang-text bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10" data-en="Close" data-fr="Fermer" onclick="closeProject()">Fermer</button>
</div>
</div>
</div>

<div className="fixed inset-0 z-[70] hidden overflow-y-auto bg-zinc-950" id="portfolio-modal">
<div className="min-h-screen p-6 sm:p-12 modal-enter">
<div className="max-w-6xl mx-auto">

<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2 lang-text text-zinc-50" data-en="Archives &amp; Projects" data-fr="Archives &amp; Projets">Archives &amp; Projets</h2>
<p className="text-sm lang-text text-zinc-400" data-en="All of our creations." data-fr="L'intégralité de nos créations.">L'intégralité de nos créations.</p>
</div>
<button className="flex items-center gap-2 text-sm font-medium transition-colors text-zinc-400 hover:text-zinc-50" onclick="closePortfolio()">
<span className="hidden sm:inline lang-text" data-en="Back" data-fr="Retour">Retour</span>
<iconify-icon height="28" icon="solar:close-square-linear" width="28"></iconify-icon>
</button>
</div>

<div className="mb-10 space-y-6 border p-6 rounded-2xl bg-zinc-900/30 border-white/5">
<div className="flex flex-col md:flex-row gap-8">

<div className="flex-1">
<h3 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-3 lang-text" data-en="Skill" data-fr="Compétence">Compétence</h3>
<div className="flex flex-wrap gap-2">
<button className="skill-filter px-3 py-1.5 rounded-full text-xs font-medium border transition-all lang-text bg-zinc-800 text-zinc-50 border-white/10" data-en="All" data-fr="Tous" data-value="all" onclick="setFilter('skill', 'all')">Tous</button>
<button className="skill-filter px-3 py-1.5 rounded-full text-xs font-medium border border-transparent transition-all lang-text text-zinc-400 hover:bg-white/5" data-en="Scripting" data-fr="Scripting" data-value="script" onclick="setFilter('skill', 'script')">Scripting</button>
<button className="skill-filter px-3 py-1.5 rounded-full text-xs font-medium border border-transparent transition-all lang-text text-zinc-400 hover:bg-white/5" data-en="Build &amp; Map" data-fr="Build &amp; Map" data-value="build" onclick="setFilter('skill', 'build')">Build &amp; Map</button>
<button className="skill-filter px-3 py-1.5 rounded-full text-xs font-medium border border-transparent transition-all lang-text text-zinc-400 hover:bg-white/5" data-en="UI Design" data-fr="Interface (UI)" data-value="ui" onclick="setFilter('skill', 'ui')">Interface (UI)</button>
<button className="skill-filter px-3 py-1.5 rounded-full text-xs font-medium border border-transparent transition-all lang-text text-zinc-400 hover:bg-white/5" data-en="Other" data-fr="Autre" data-value="autre" onclick="setFilter('skill', 'autre')">Autre</button>
</div>
</div>

<div className="flex-1">
<h3 className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest mb-3 lang-text" data-en="Theme" data-fr="Thème">Thème</h3>
<div className="flex flex-wrap gap-2">
<button className="theme-filter px-3 py-1.5 rounded-full text-xs font-medium border transition-all lang-text bg-zinc-800 text-zinc-50 border-white/10" data-en="All" data-fr="Tous" data-value="all" onclick="setFilter('theme', 'all')">Tous</button>
<button className="theme-filter px-3 py-1.5 rounded-full text-xs font-medium border border-transparent transition-all lang-text text-zinc-400 hover:bg-white/5" data-en="City RP" data-fr="Ville RP" data-value="ville" onclick="setFilter('theme', 'ville')">Ville RP</button>
<button className="theme-filter px-3 py-1.5 rounded-full text-xs font-medium border border-transparent transition-all lang-text text-zinc-400 hover:bg-white/5" data-en="SCP RP" data-fr="SCP RP" data-value="scp" onclick="setFilter('theme', 'scp')">SCP RP</button>
<button className="theme-filter px-3 py-1.5 rounded-full text-xs font-medium border border-transparent transition-all lang-text text-zinc-400 hover:bg-white/5" data-en="Military" data-fr="Militaire" data-value="militaire" onclick="setFilter('theme', 'militaire')">Militaire</button>
<button className="theme-filter px-3 py-1.5 rounded-full text-xs font-medium border border-transparent transition-all lang-text text-zinc-400 hover:bg-white/5" data-en="Other" data-fr="Autre" data-value="autre" onclick="setFilter('theme', 'autre')">Autre</button>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="portfolio-grid">

<div className="portfolio-item group border rounded-xl overflow-hidden border-white/5 bg-zinc-900/30" data-skill="script" data-theme="ville">
<div className="aspect-video relative flex items-center justify-center bg-zinc-900">
<div className="w-20 h-20 bg-indigo-500/20 rounded-full blur-2xl"></div>
</div>
<div className="p-5 border-t border-white/5">
<div className="flex items-center gap-2 mb-2">
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">Scripting</span>
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">Ville RP</span>
</div>
<h4 className="text-base font-semibold mb-1 text-zinc-100">Liberty City Framework</h4>
<p className="text-xs text-zinc-500">Core server system</p>
</div>
</div>

<div className="portfolio-item group border rounded-xl overflow-hidden border-white/5 bg-zinc-900/30" data-skill="build" data-theme="ville">
<div className="aspect-video relative flex items-center justify-center bg-zinc-900">
<div className="w-20 h-20 bg-emerald-500/20 rounded-full blur-2xl"></div>
</div>
<div className="p-5 border-t border-white/5">
<div className="flex items-center gap-2 mb-2">
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">Build</span>
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">Ville RP</span>
</div>
<h4 className="text-base font-semibold mb-1 text-zinc-100">Project Elysium</h4>
<p className="text-xs text-zinc-500">Optimized urban map</p>
</div>
</div>

<div className="portfolio-item group border rounded-xl overflow-hidden border-white/5 bg-zinc-900/30" data-skill="build" data-theme="scp">
<div className="aspect-video relative flex items-center justify-center bg-zinc-900">
<div className="w-20 h-20 bg-amber-500/20 rounded-full blur-2xl"></div>
</div>
<div className="p-5 border-t border-white/5">
<div className="flex items-center gap-2 mb-2">
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">Build</span>
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">SCP RP</span>
</div>
<h4 className="text-base font-semibold mb-1 text-zinc-100">Site-61 Containment</h4>
<p className="text-xs text-zinc-500">Underground facility</p>
</div>
</div>

<div className="portfolio-item group border rounded-xl overflow-hidden border-white/5 bg-zinc-900/30" data-skill="ui" data-theme="autre">
<div className="aspect-video relative flex items-center justify-center bg-zinc-900">
<div className="w-20 h-20 bg-rose-500/20 rounded-full blur-2xl"></div>
</div>
<div className="p-5 border-t border-white/5">
<div className="flex items-center gap-2 mb-2">
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">UI</span>
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">Autre</span>
</div>
<h4 className="text-base font-semibold mb-1 text-zinc-100">Nyxo UI Suite</h4>
<p className="text-xs text-zinc-500">Modern interface library</p>
</div>
</div>

<div className="portfolio-item group border rounded-xl overflow-hidden border-white/5 bg-zinc-900/30" data-skill="script" data-theme="ville">
<div className="aspect-video relative flex items-center justify-center bg-zinc-900">
<div className="w-20 h-20 bg-blue-500/20 rounded-full blur-2xl"></div>
</div>
<div className="p-5 border-t border-white/5">
<div className="flex items-center gap-2 mb-2">
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">Scripting</span>
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">Ville RP</span>
</div>
<h4 className="text-base font-semibold mb-1 text-zinc-100">Advanced Economy</h4>
<p className="text-xs text-zinc-500">Secure banking system</p>
</div>
</div>

<div className="portfolio-item group border rounded-xl overflow-hidden border-white/5 bg-zinc-900/30" data-skill="ui" data-theme="scp">
<div className="aspect-video relative flex items-center justify-center bg-zinc-900">
<div className="w-20 h-20 bg-orange-500/20 rounded-full blur-2xl"></div>
</div>
<div className="p-5 border-t border-white/5">
<div className="flex items-center gap-2 mb-2">
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">UI</span>
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">SCP RP</span>
</div>
<h4 className="text-base font-semibold mb-1 text-zinc-100">Foundation Datapad</h4>
<p className="text-xs text-zinc-500">Database interface</p>
</div>
</div>

<div className="portfolio-item group border rounded-xl overflow-hidden border-white/5 bg-zinc-900/30" data-skill="build" data-theme="militaire">
<div className="aspect-video relative flex items-center justify-center bg-zinc-900">
<div className="w-20 h-20 bg-lime-500/20 rounded-full blur-2xl"></div>
</div>
<div className="p-5 border-t border-white/5">
<div className="flex items-center gap-2 mb-2">
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">Build</span>
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">Militaire</span>
</div>
<h4 className="text-base font-semibold mb-1 text-zinc-100">Outpost Delta</h4>
<p className="text-xs text-zinc-500">Training facility map</p>
</div>
</div>

<div className="portfolio-item group border rounded-xl overflow-hidden border-white/5 bg-zinc-900/30" data-skill="script" data-theme="militaire">
<div className="aspect-video relative flex items-center justify-center bg-zinc-900">
<div className="w-20 h-20 bg-cyan-500/20 rounded-full blur-2xl"></div>
</div>
<div className="p-5 border-t border-white/5">
<div className="flex items-center gap-2 mb-2">
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">Scripting</span>
<span className="px-1.5 py-0.5 rounded-sm text-[10px] font-medium bg-white/5 text-zinc-400">Militaire</span>
</div>
<h4 className="text-base font-semibold mb-1 text-zinc-100">Tactical Gun Engine</h4>
<p className="text-xs text-zinc-500">Weapon framework</p>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
