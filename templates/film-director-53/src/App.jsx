import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu
        const menuBtn = document.getElementById('menuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Showreel Modal
        const playShowreelBtn = document.getElementById('playShowreelBtn');
        const videoModal = document.getElementById('videoModal');
        const videoIframe = document.getElementById('videoIframe');
        
        playShowreelBtn.addEventListener('click', () => {
            videoIframe.src = 'https://player.vimeo.com/video/824804225?autoplay=1';
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        function closeVideoModal() {
            videoModal.classList.remove('active');
            videoIframe.src = '';
            document.body.style.overflow = '';
        }

        // Project Modal
        const projectModal = document.getElementById('projectModal');
        
        function openProjectModal(id) {
            projectModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeProjectModal() {
            projectModal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Filter Projects
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                
                filterBtns.forEach(b => {
                    b.classList.remove('bg-white', 'text-neutral-950');
                    b.classList.add('text-neutral-500', 'border', 'border-neutral-800');
                });
                btn.classList.add('bg-white', 'text-neutral-950');
                btn.classList.remove('text-neutral-500', 'border', 'border-neutral-800');
                
                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Close modals on escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeVideoModal();
                closeProjectModal();
                closeMobileMenu();
            }
        });

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 lg:px-12">
<div className="flex items-center justify-between max-w-screen-2xl mx-auto">
<a className="text-sm font-medium tracking-tighter text-white hover:text-neutral-300 transition-colors" href="#home">VICTOR</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-light text-neutral-400 hover:text-white transition-colors" href="#work">Work</a>
<a className="text-xs font-light text-neutral-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-xs font-light text-neutral-400 hover:text-white transition-colors" href="#services">Services</a>
<a className="text-xs font-light text-neutral-400 hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<button className="md:hidden text-white" id="menuBtn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-neutral-950/98 flex flex-col items-center justify-center gap-8 modal" id="mobileMenu">
<a className="text-2xl font-light text-neutral-100 hover:text-white transition-colors" href="#work" onclick="closeMobileMenu()">Work</a>
<a className="text-2xl font-light text-neutral-100 hover:text-white transition-colors" href="#about" onclick="closeMobileMenu()">About</a>
<a className="text-2xl font-light text-neutral-100 hover:text-white transition-colors" href="#services" onclick="closeMobileMenu()">Services</a>
<a className="text-2xl font-light text-neutral-100 hover:text-white transition-colors" href="#contact" onclick="closeMobileMenu()">Contact</a>
<button className="absolute top-6 right-6 text-white" onclick="closeMobileMenu()">
<iconify-icon height="28" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="28"></iconify-icon>
</button>
</div>

<section className="relative h-screen w-full overflow-hidden" id="home">

<video autoplay="" className="absolute inset-0 w-full h-full video-bg" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=1920&amp;q=80">
<source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-neutral-950/40"></div>
<div className="absolute inset-0 grain pointer-events-none"></div>

<div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3">
<span className="text-xs font-light text-neutral-500 tracking-widest" style={{writingMode: 'vertical-rl', transform: 'rotate(180deg)'}}>SCROLL</span>
<div className="w-px h-16 bg-gradient-to-b from-neutral-500 to-transparent"></div>
</div>

<div className="absolute left-6 lg:left-12 bottom-32 hidden lg:block">
<p className="text-xs text-neutral-600 mb-3 tracking-wider">CLIENTS</p>
<div className="flex flex-col gap-2 text-xs text-neutral-500 font-light">
<span className="hover:text-neutral-300 transition-colors cursor-pointer">Nike</span>
<span className="hover:text-neutral-300 transition-colors cursor-pointer">Apple</span>
<span className="hover:text-neutral-300 transition-colors cursor-pointer">Netflix</span>
<span className="hover:text-neutral-300 transition-colors cursor-pointer">Canal+</span>
</div>
</div>

<div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight mb-4 fade-in">VICTOR</h1>
<p className="text-sm md:text-base font-light text-neutral-400 tracking-widest mb-10 fade-in" style={{animationDelay: '0.2s'}}>DIRECTOR • DP • EDITOR</p>
<button className="group flex items-center gap-3 px-6 py-3 border border-neutral-700 hover:border-neutral-500 hover:bg-white/5 transition-all duration-300 fade-in" id="playShowreelBtn" style={{animationDelay: '0.4s'}}>
<iconify-icon className="text-white" height="18" icon="solar:play-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-xs font-medium tracking-wider text-white">PLAY SHOWREEL</span>
</button>
</div>

<div className="absolute bottom-6 left-6 right-6 lg:left-12 lg:right-12 flex justify-between items-end z-10">
<div className="flex gap-6 text-xs text-neutral-500 font-light">
<span>Based in [VILLE]</span>
<span className="hidden md:inline">Available worldwide</span>
</div>
<span className="text-xs text-neutral-600">© 2024</span>
</div>
</section>

<div className="fixed inset-0 z-50 bg-neutral-950/95 flex items-center justify-center p-6 modal" id="videoModal">
<button className="absolute top-6 right-6 text-white hover:text-neutral-300 transition-colors" onclick="closeVideoModal()">
<iconify-icon height="32" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</button>
<div className="w-full max-w-5xl aspect-video bg-neutral-900">
<iframe allow="autoplay; fullscreen" allowfullscreen="" className="w-full h-full" frameborder="0" id="videoIframe" src=""></iframe>
</div>
</div>

<section className="min-h-screen bg-neutral-950 py-24 lg:py-32 px-6 lg:px-12" id="work">
<div className="max-w-screen-2xl mx-auto">
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
<div>
<p className="text-xs text-neutral-600 tracking-widest mb-3">PORTFOLIO</p>
<h2 className="font-display text-4xl lg:text-5xl font-normal text-white tracking-tight">Selected Work</h2>
</div>

<div className="flex flex-wrap gap-3 mt-6 lg:mt-0">
<button className="filter-btn px-4 py-2 text-xs font-light bg-white text-neutral-950 transition-all" data-filter="all">All</button>
<button className="filter-btn px-4 py-2 text-xs font-light text-neutral-500 hover:text-white border border-neutral-800 hover:border-neutral-600 transition-all" data-filter="commercial">Commercial</button>
<button className="filter-btn px-4 py-2 text-xs font-light text-neutral-500 hover:text-white border border-neutral-800 hover:border-neutral-600 transition-all" data-filter="music">Music Video</button>
<button className="filter-btn px-4 py-2 text-xs font-light text-neutral-500 hover:text-white border border-neutral-800 hover:border-neutral-600 transition-all" data-filter="documentary">Documentary</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

<article className="project-card group cursor-pointer" data-category="commercial" onclick="openProjectModal(1)">
<div className="relative aspect-video overflow-hidden bg-neutral-900">
<img alt="Project 1" className="project-image w-full h-full object-cover transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&amp;q=80"/>
<div className="project-overlay absolute inset-0 bg-neutral-950/60 opacity-0 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white" height="48" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-neutral-300 transition-colors">Brand Campaign — [CLIENT]</h3>
<p className="text-xs text-neutral-500 mt-1">Commercial • 2024</p>
</div>
<span className="text-xs text-neutral-600 font-light">01</span>
</div>
</article>

<article className="project-card group cursor-pointer" data-category="music" onclick="openProjectModal(2)">
<div className="relative aspect-video overflow-hidden bg-neutral-900">
<img alt="Project 2" className="project-image w-full h-full object-cover transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&amp;q=80"/>
<div className="project-overlay absolute inset-0 bg-neutral-950/60 opacity-0 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white" height="48" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-neutral-300 transition-colors">[ARTISTE] — "Titre du morceau"</h3>
<p className="text-xs text-neutral-500 mt-1">Music Video • 2024</p>
</div>
<span className="text-xs text-neutral-600 font-light">02</span>
</div>
</article>

<article className="project-card group cursor-pointer" data-category="documentary" onclick="openProjectModal(3)">
<div className="relative aspect-video overflow-hidden bg-neutral-900">
<img alt="Project 3" className="project-image w-full h-full object-cover transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&amp;q=80"/>
<div className="project-overlay absolute inset-0 bg-neutral-950/60 opacity-0 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white" height="48" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-neutral-300 transition-colors">Behind the Scenes — [PROJET]</h3>
<p className="text-xs text-neutral-500 mt-1">Documentary • 2023</p>
</div>
<span className="text-xs text-neutral-600 font-light">03</span>
</div>
</article>

<article className="project-card group cursor-pointer" data-category="commercial" onclick="openProjectModal(4)">
<div className="relative aspect-video overflow-hidden bg-neutral-900">
<img alt="Project 4" className="project-image w-full h-full object-cover transition-transform duration-700" loading="lazy" src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&amp;q=80"/>
<div className="project-overlay absolute inset-0 bg-neutral-950/60 opacity-0 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white" height="48" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="48"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-start justify-between">
<div>
<h3 className="text-lg font-medium text-white tracking-tight group-hover:text-neutral-300 transition-colors">Product Launch — [MARQUE]</h3>
<p className="text-xs text-neutral-500 mt-1">Commercial • 2023</p>
</div>
<span className="text-xs text-neutral-600 font-light">04</span>
</div>
</article>
</div>
</div>
</section>

<div className="fixed inset-0 z-50 bg-neutral-950/98 overflow-y-auto modal" id="projectModal">
<button className="fixed top-6 right-6 text-white hover:text-neutral-300 transition-colors z-10" onclick="closeProjectModal()">
<iconify-icon height="32" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</button>
<div className="min-h-screen py-20 px-6 lg:px-12">
<div className="max-w-5xl mx-auto">
<div className="aspect-video bg-neutral-900 mb-8">
<iframe allow="autoplay; fullscreen" allowfullscreen="" className="w-full h-full" frameborder="0" src="https://player.vimeo.com/video/824804225"></iframe>
</div>
<div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
<div className="lg:col-span-2">
<h3 className="font-display text-3xl lg:text-4xl text-white tracking-tight mb-4">Brand Campaign — [CLIENT]</h3>
<p className="text-neutral-400 font-light leading-relaxed">Film publicitaire réalisé pour [CLIENT]. Une approche cinématographique pour mettre en valeur le produit à travers une narration visuelle forte et un travail de lumière soigné.</p>
</div>
<div className="space-y-6">
<div>
<p className="text-xs text-neutral-600 tracking-wider mb-2">RÔLE</p>
<p className="text-sm text-neutral-300">Réalisation, Cadre, Étalonnage</p>
</div>
<div>
<p className="text-xs text-neutral-600 tracking-wider mb-2">ANNÉE</p>
<p className="text-sm text-neutral-300">2024</p>
</div>
<div>
<p className="text-xs text-neutral-600 tracking-wider mb-2">CRÉDITS</p>
<p className="text-sm text-neutral-400 font-light">Production: [PROD]<br/>DA: [NOM]<br/>Musique: [COMPOSITEUR]</p>
</div>
<a className="inline-flex items-center gap-2 text-xs text-white hover:text-neutral-300 transition-colors" href="#">
<iconify-icon height="16" icon="solar:link-round-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                            Voir sur Vimeo
                        </a>
</div>
</div>
</div>
</div>
</div>

<section className="min-h-screen bg-neutral-900 py-24 lg:py-32 px-6 lg:px-12" id="about">
<div className="max-w-screen-2xl mx-auto">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="relative">
<div className="aspect-[4/5] bg-neutral-800 overflow-hidden">
<img alt="Portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" loading="lazy" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&amp;q=80"/>
</div>
<div className="absolute -bottom-4 -right-4 w-24 h-24 border border-neutral-700"></div>
</div>

<div>
<p className="text-xs text-neutral-600 tracking-widest mb-3">À PROPOS</p>
<h2 className="font-display text-4xl lg:text-5xl font-normal text-white tracking-tight mb-8">L'image au service de l'histoire.</h2>
<p className="text-neutral-400 font-light leading-relaxed mb-6">
                        Vidéaste indépendant basé à [VILLE], je collabore avec des marques, artistes et agences pour créer des contenus visuels impactants. Mon approche : une image cinématique, une narration précise, une exécution soignée.
                    </p>
<p className="text-neutral-400 font-light leading-relaxed mb-10">
                        Formé sur le terrain depuis [ANNÉE], j'ai développé une expertise complète de la chaîne de production : de l'écriture au color grading, en passant par la prise de vue et le montage.
                    </p>

<div className="mb-10">
<p className="text-xs text-neutral-600 tracking-wider mb-4">CLIENTS &amp; COLLABORATIONS</p>
<div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-neutral-500">
<span>Nike</span>
<span>Apple</span>
<span>Netflix</span>
<span>Canal+</span>
<span>Universal</span>
<span>Sony</span>
</div>
</div>

<div>
<p className="text-xs text-neutral-600 tracking-wider mb-4">SETUP</p>
<p className="text-sm text-neutral-500 font-light">Sony FX6 • Zeiss CP.3 • DaVinci Resolve • Premiere Pro</p>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen bg-neutral-950 py-24 lg:py-32 px-6 lg:px-12" id="services">
<div className="max-w-screen-2xl mx-auto">
<div className="text-center mb-16 lg:mb-20">
<p className="text-xs text-neutral-600 tracking-widest mb-3">SERVICES</p>
<h2 className="font-display text-4xl lg:text-5xl font-normal text-white tracking-tight">Ce que je propose</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

<div className="group p-8 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors mb-6" height="32" icon="solar:videocamera-record-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">Réalisation</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed mb-4">Direction créative et artistique complète de votre projet vidéo, du concept à la livraison finale.</p>
<p className="text-xs text-neutral-600">Film 30–90s • Clip • Documentaire</p>
</div>

<div className="group p-8 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors mb-6" height="32" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">Cadre &amp; Lumière</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed mb-4">Direction photo soignée avec un matériel professionnel et une approche cinématographique.</p>
<p className="text-xs text-neutral-600">DP • Opérateur caméra • Gaffer</p>
</div>

<div className="group p-8 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors mb-6" height="32" icon="solar:clapperboard-edit-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">Montage</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed mb-4">Montage narratif et rythmique pour donner vie à votre histoire avec impact et fluidité.</p>
<p className="text-xs text-neutral-600">Cut • Sound design • Pack social</p>
</div>

<div className="group p-8 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors mb-6" height="32" icon="solar:pallete-2-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">Étalonnage</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed mb-4">Color grading professionnel pour définir l'atmosphère et l'identité visuelle de votre film.</p>
<p className="text-xs text-neutral-600">DaVinci Resolve • LUT custom</p>
</div>

<div className="group p-8 border border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900/50 transition-all duration-300">
<iconify-icon className="text-neutral-500 group-hover:text-white transition-colors mb-6" height="32" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white tracking-tight mb-3">Motion Design</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed mb-4">Animation graphique et typographique pour enrichir vos contenus avec élégance.</p>
<p className="text-xs text-neutral-600">After Effects • Titrages • Logos animés</p>
</div>

<div className="group p-8 bg-white hover:bg-neutral-100 transition-all duration-300 flex flex-col justify-between">
<div>
<h3 className="text-lg font-medium text-neutral-950 tracking-tight mb-3">Un projet en tête ?</h3>
<p className="text-sm text-neutral-600 font-light leading-relaxed">Discutons de votre vision et créons quelque chose d'unique ensemble.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-950 mt-6" href="#contact">
                        Demander un devis
                        <iconify-icon height="18" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="min-h-screen bg-neutral-900 py-24 lg:py-32 px-6 lg:px-12" id="contact">
<div className="max-w-screen-2xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

<div>
<p className="text-xs text-neutral-600 tracking-widest mb-3">CONTACT</p>
<h2 className="font-display text-4xl lg:text-5xl font-normal text-white tracking-tight mb-8">Parlons de votre projet.</h2>
<p className="text-neutral-400 font-light leading-relaxed mb-10">
                        Disponible pour des collaborations en France et à l'international. N'hésitez pas à me contacter pour discuter de vos besoins et obtenir un devis personnalisé.
                    </p>
<div className="space-y-6 mb-10">
<div>
<p className="text-xs text-neutral-600 tracking-wider mb-2">EMAIL</p>
<a className="text-white hover:text-neutral-300 transition-colors" href="mailto:[EMAIL]">[EMAIL]</a>
</div>
<div>
<p className="text-xs text-neutral-600 tracking-wider mb-2">BASÉ À</p>
<p className="text-neutral-400">[VILLE], France</p>
</div>
</div>

<div className="flex gap-4">
<a className="w-10 h-10 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 flex items-center justify-center transition-all" href="[INSTAGRAM]" target="_blank">
<iconify-icon className="text-neutral-400" height="18" icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 flex items-center justify-center transition-all" href="[VIMEO]" target="_blank">
<iconify-icon className="text-neutral-400" height="18" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border border-neutral-700 hover:border-neutral-500 hover:bg-neutral-800 flex items-center justify-center transition-all" href="[YOUTUBE]" target="_blank">
<iconify-icon className="text-neutral-400" height="18" icon="solar:video-library-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</a>
</div>
</div>

<div>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Message envoyé !');">
<div>
<label className="block text-xs text-neutral-600 tracking-wider mb-2" htmlFor="name">NOM</label>
<input className="w-full bg-transparent border-b border-neutral-700 focus:border-white py-3 text-white outline-none transition-colors placeholder:text-neutral-600" id="name" name="name" placeholder="Votre nom" required="" type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-600 tracking-wider mb-2" htmlFor="email">EMAIL</label>
<input className="w-full bg-transparent border-b border-neutral-700 focus:border-white py-3 text-white outline-none transition-colors placeholder:text-neutral-600" id="email" name="email" placeholder="votre@email.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs text-neutral-600 tracking-wider mb-2" htmlFor="project">TYPE DE PROJET</label>
<input className="w-full bg-transparent border-b border-neutral-700 focus:border-white py-3 text-white outline-none transition-colors placeholder:text-neutral-600" id="project" name="project" placeholder="Commercial, Clip, Documentaire..." type="text"/>
</div>
<div>
<label className="block text-xs text-neutral-600 tracking-wider mb-2" htmlFor="message">MESSAGE</label>
<textarea className="w-full bg-transparent border-b border-neutral-700 focus:border-white py-3 text-white outline-none transition-colors placeholder:text-neutral-600 resize-none" id="message" name="message" placeholder="Décrivez brièvement votre projet..." required="" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-white text-neutral-950 text-sm font-medium tracking-wider hover:bg-neutral-200 transition-colors" type="submit">
                            ENVOYER
                        </button>
</form>
<a className="inline-flex items-center gap-2 text-xs text-neutral-500 hover:text-white transition-colors mt-6" href="#">
<iconify-icon height="16" icon="solar:file-download-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
                        Télécharger le portfolio PDF
                    </a>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-950 border-t border-neutral-900 py-8 px-6 lg:px-12">
<div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-6">
<span className="text-sm font-medium tracking-tighter text-white">[NOM]</span>
<span className="text-xs text-neutral-600">© 2024 — Tous droits réservés</span>
</div>
<div className="flex items-center gap-6 text-xs text-neutral-600">
<a className="hover:text-white transition-colors" href="#">Mentions légales</a>
<span>Site by [NOM]</span>
</div>
</div>
</footer>


    </>
  );
}
