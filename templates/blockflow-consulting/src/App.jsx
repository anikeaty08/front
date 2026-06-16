import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // DOM Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const domObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-enter').forEach((element) => {
            domObserver.observe(element);
        });

        // Navbar Scroll Logic
        const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                nav.classList.add('backdrop-blur-md', 'bg-black/50', 'border-b', 'border-white/5');
            } else {
                nav.classList.remove('backdrop-blur-md', 'bg-black/50', 'border-b', 'border-white/5');
            }
        });

        /** 
         * SCROLL-DRIVEN BACKGROUND ANIMATION SYSTEM 
         */
        const canvas = document.getElementById('bg-canvas');
        const ctx = canvas.getContext('2d');
        
        let width, height;
        let particles = [];
        let scrollProgress = 0;
        let targetScrollProgress = 0;
        
        // Configuration
        const config = {
            particleCount: 180,
            baseSpeed: 0.2,
            colors: ['rgba(255,255,255,0.8)', 'rgba(250, 204, 21, 0.6)', 'rgba(255,255,255,0.4)'], 
            connectionDistance: 120,
            mouseParallaxStrength: 0.5
        };

        let mouse = { x: 0, y: 0 };
        let smoothedMouse = { x: 0, y: 0 };

        class Particle {
            constructor() {
                this.reset();
                this.x = (Math.random() - 0.5) * width * 1.5;
                this.y = (Math.random() - 0.5) * height * 1.5;
                this.z = Math.random() * 2000; 
            }

            reset() {
                this.x = (Math.random() - 0.5) * width;
                this.y = (Math.random() - 0.5) * height;
                this.z = 2000;
                this.size = Math.random() * 2 + 0.5;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.color = config.colors[Math.floor(Math.random() * config.colors.length)];
            }

            update(progress) {
                let spreadFactor = 1;
                let zSpeed = 2;

                if (progress < 0.2) { 
                    spreadFactor = 0.8; 
                    zSpeed = 1;
                } else if (progress < 0.5) {
                    spreadFactor = 1 + (progress - 0.2) * 2;
                    zSpeed = 10;
                } else if (progress < 0.75) {
                    spreadFactor = 2.5;
                    zSpeed = 5;
                } else {
                    spreadFactor = 3;
                    zSpeed = 0.5;
                }

                this.z -= zSpeed;

                if (this.z <= 1) {
                    this.z = 2000;
                    this.x = (Math.random() - 0.5) * width * spreadFactor;
                    this.y = (Math.random() - 0.5) * height * spreadFactor;
                }

                this.x += this.vx;
                this.y += this.vy;

                if (progress < 0.2) {
                    this.x += (smoothedMouse.x * config.mouseParallaxStrength) / (this.z * 0.01);
                    this.y += (smoothedMouse.y * config.mouseParallaxStrength) / (this.z * 0.01);
                }
            }

            draw(ctx, progress) {
                const perspective = 800; 
                const scale = perspective / (perspective + this.z);
                const screenX = width / 2 + this.x * scale;
                const screenY = height / 2 + this.y * scale;

                const alpha = Math.min(1, (2000 - this.z) / 1000) * scale;
                
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.globalAlpha = alpha;
                ctx.arc(screenX, screenY, this.size * scale, 0, Math.PI * 2);
                ctx.fill();

                if (scale > 0.5) { 
                    return { x: screenX, y: screenY, alpha: alpha };
                }
                return null;
            }
        }

        function init() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;

            particles = [];
            for (let i = 0; i < config.particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            const scrollY = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            targetScrollProgress = Math.min(1, Math.max(0, scrollY / docHeight));
            
            scrollProgress += (targetScrollProgress - scrollProgress) * 0.05;

            smoothedMouse.x += (mouse.x - smoothedMouse.x) * 0.05;
            smoothedMouse.y += (mouse.y - smoothedMouse.y) * 0.05;

            ctx.clearRect(0, 0, width, height);

            const vanishingY = height/2 - (scrollProgress * 200); 

            let points = [];
            
            particles.forEach(p => {
                p.update(scrollProgress);
                
                const perspective = 800;
                const scale = perspective / (perspective + p.z);
                const screenX = width / 2 + p.x * scale;
                const screenY = vanishingY + p.y * scale; 
                
                const alpha = Math.min(1, (2000 - p.z) / 500) * scale;

                if (p.z > 0 && screenX > 0 && screenX < width && screenY > 0 && screenY < height) {
                    ctx.beginPath();
                    ctx.fillStyle = p.color;
                    ctx.globalAlpha = alpha * (1 - scrollProgress * 0.5); 
                    ctx.arc(screenX, screenY, p.size * scale, 0, Math.PI * 2);
                    ctx.fill();
                    
                    if (p.z < 1500) {
                        points.push({ x: screenX, y: screenY, alpha: alpha });
                    }
                }
            });

            const maxDist = config.connectionDistance * (1 - scrollProgress * 0.3);
            
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
            ctx.lineWidth = 0.5;

            for (let i = 0; i < points.length; i++) {
                for (let j = i + 1; j < points.length; j++) {
                    const dx = points[i].x - points[j].x;
                    const dy = points[i].y - points[j].y;
                    const dist = Math.sqrt(dx*dx + dy*dy);

                    if (dist < maxDist) {
                        ctx.beginPath();
                        ctx.moveTo(points[i].x, points[i].y);
                        ctx.lineTo(points[j].x, points[j].y);
                        ctx.globalAlpha = Math.min(points[i].alpha, points[j].alpha) * (1 - dist/maxDist);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animate);
        }

        window.addEventListener('resize', init);
        window.addEventListener('mousemove', (e) => {
            mouse.x = (e.clientX / width) * 2 - 1;
            mouse.y = (e.clientY / height) * 2 - 1;
        });

        init();
        animate();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">

<canvas className="absolute inset-0 w-full h-full opacity-60" height="908" id="bg-canvas" width="1440"></canvas>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/30 via-[#050505]/80 to-[#050505] pointer-events-none"></div>
<div className="absolute inset-0 grid-bg opacity-10 mask-image:linear-gradient(to_bottom,black,transparent) pointer-events-none"></div>
</div>

<nav className="lg:px-12 flex fixed transition-all duration-500 z-50 text-white mix-blend-difference w-full pt-8 pr-6 pb-8 pl-6 top-0 items-center justify-between" id="navbar">

<a className="flex flex-col group" href="#">
<span className="leading-none uppercase group-hover:opacity-80 transition-opacity text-2xl font-medium tracking-tight font-display">Blockflow</span>
<span className="leading-none uppercase group-hover:text-white transition-colors text-xs font-light text-neutral-400 tracking-[0.25em] font-display mt-1">consulting</span>
</a>

<div className="hidden md:flex items-center gap-10 text-sm font-light uppercase tracking-widest text-neutral-400 absolute left-1/2 -translate-x-1/2">
<a className="hover:text-white transition-colors duration-300" href="#skills">Expertise</a>
<a className="hover:text-white transition-colors duration-300" href="#experience">Expériences</a>
<a className="hover:text-white transition-colors duration-300" href="#education">Formation</a>
</div>

<div className="flex items-center gap-6">
<a className="flex items-center gap-4 group cursor-pointer hidden sm:flex" href="#contact">
<img alt="Profile" className="group-hover:border-[#FACC15] transition-colors duration-300 w-11 h-11 object-cover border-white/20 border rounded-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/39791567-30a5-44eb-8082-c71b27df1ff0_3840w.jpg?w=800&amp;q=80"/>
<span className="uppercase text-sm font-light text-neutral-400 tracking-widest group-hover:text-white transition-colors">Contact</span>
</a>
</div>
</nav>

<main className="flex-grow flex min-h-screen pt-20 relative items-center justify-center">

<div className="absolute inset-0 pointer-events-none z-0 opacity-20 mix-blend-screen">
<svg className="w-full h-full" preserveaspectratio="none">
<path className="noodle-path" d="M0,600 C300,600 300,300 600,300 S900,600 1200,600" fill="none" stroke="url(#grad1)" strokeWidth="1"></path>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgba(255,255,255,0)', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: 'rgba(255,255,255,0.5)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(255,255,255,0)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
<div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full h-full">

<div className="flex flex-col justify-center max-w-2xl">

<div className="flex items-center gap-3 mb-8 animate-enter visible">
<div className="w-1.5 h-1.5 bg-[#FACC15] rounded-full shadow-[0_0_8px_#FACC15]"></div>
<span className="uppercase text-xs font-normal text-neutral-400 tracking-[0.2em] font-mono">Consultant SAP Confirmé</span>
</div>

<h1 className="text-5xl lg:text-7xl leading-[1.05] font-display font-medium tracking-tight text-white mb-8 capitalize animate-enter delay-100 visible">
                    Expertise SAP,<br/>
                    Run &amp; MCO,<br/>
                    Projets<br/>
                    Agiles
                </h1>

<p className="text-xl text-neutral-400 max-w-md leading-relaxed mb-10 font-light animate-enter delay-200 visible">
                    Consultant SAP freelance avec plus de 8 ans d'expérience. Expertise FI-CO, MM, SD, et S/4HANA. Spécialiste Run/MCO, TMA et pilotage de projets transverses.
                </p>

<div className="flex items-start animate-enter delay-300 visible">
<a className="btn-hover-effect group inline-flex items-center gap-4 px-8 py-4 border border-white/20 rounded-sm text-white bg-transparent uppercase text-sm font-medium tracking-widest" href="#experience">
                        Voir Expériences
                        <i className="w-4 h-4 transition-transform duration-300" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="flex animate-enter delay-200 w-full h-[600px] relative items-center justify-center visible">

<svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewbox="0 0 600 600">
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="beamGrad">
<stop offset="0%" stop-color="#FACC15" stop-opacity="0"></stop>
<stop offset="50%" stop-color="#FACC15" stop-opacity="1"></stop>
<stop offset="100%" stop-color="#FACC15" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M180,180 Q250,250 300,300" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
<path className="beam-path" d="M180,180 Q250,250 300,300" fill="none" stroke="url(#beamGrad)" strokeWidth="1"></path>
<path d="M150,450 Q220,400 300,300" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
<path className="beam-path" d="M150,450 Q220,400 300,300" fill="none" stroke="url(#beamGrad)" strokeWidth="1" style={{animationDelay: '1s'}}></path>
<path d="M480,480 Q400,400 300,300" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1"></path>
<path className="beam-path" d="M480,480 Q400,400 300,300" fill="none" stroke="url(#beamGrad)" strokeWidth="1" style={{animationDelay: '2s'}}></path>
</svg>

<div className="relative w-[380px] h-[380px] knot-spin opacity-90 mix-blend-screen">
<svg className="w-[380px] h-[380px] drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]" data-icon-replaced="true" strokeWidth="2" style={{width: '380px', height: '380px', color: 'rgb(229, 229, 229)'}} viewbox="0 0 200 200">
<g className="" fill="none" opacity="0.8" stroke="white" strokeWidth="0.3">
<ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(0 100 100)"></ellipse>
<ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(30 100 100)"></ellipse>
<ellipse className="" cx="100" cy="100" rx="80" ry="30" transform="rotate(60 100 100)"></ellipse>
<ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(90 100 100)"></ellipse>
<ellipse className="" cx="100" cy="100" rx="80" ry="30" transform="rotate(120 100 100)"></ellipse>
<ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(150 100 100)"></ellipse>
<ellipse className="" cx="100" cy="100" opacity="0.5" rx="75" ry="25" stroke-dasharray="2 2" transform="rotate(15 100 100)"></ellipse>
<ellipse cx="100" cy="100" opacity="0.5" rx="75" ry="25" stroke-dasharray="2 2" transform="rotate(45 100 100)"></ellipse>
<ellipse cx="100" cy="100" opacity="0.5" rx="75" ry="25" stroke-dasharray="2 2" transform="rotate(75 100 100)"></ellipse>
<ellipse className="" cx="100" cy="100" opacity="0.5" rx="75" ry="25" stroke-dasharray="2 2" transform="rotate(105 100 100)"></ellipse>
<ellipse className="" cx="100" cy="100" opacity="0.5" rx="75" ry="25" stroke-dasharray="2 2" transform="rotate(135 100 100)"></ellipse>
<ellipse cx="100" cy="100" opacity="0.5" rx="75" ry="25" stroke-dasharray="2 2" transform="rotate(165 100 100)"></ellipse>
</g>
</svg>
</div>

<div className="absolute top-1/4 left-0 -translate-x-4 flex flex-col items-center gap-2 animate-enter delay-300 visible">
<div className="relative w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
<svg className="absolute w-full h-full rotate-45" viewbox="0 0 40 40">
<path d="M20,5 L20,35" marker-end="url(#arrow)" stroke="white" strokeWidth="0.5"></path>
</svg>
</div>
<span className="font-math text-xl text-neutral-300">S/4HANA</span>
</div>
<div className="absolute bottom-1/4 left-10 translate-y-8 animate-enter delay-400 visible">
<span className="text-4xl text-neutral-200 tracking-wide font-math" style={{textShadow: '0 0 20px rgba(0,0,0,1)'}}>
                        Run <span className="text-xs align-middle mx-1">●</span> MCO
                    </span>
</div>
<div className="absolute bottom-0 right-0 w-32 h-20 animate-enter delay-500 visible">
<svg className="w-full h-full stroke-white/80 fill-none" strokeWidth="1" viewbox="0 0 100 60">
<path d="M5,55 L95,55" stroke-opacity="0.5"></path>
<path d="M50,55 L50,10" stroke-opacity="0.5"></path>
<path className="" d="M10,55 C30,55 40,15 50,15 S70,55 90,55"></path>
</svg>
</div>
<div className="absolute -bottom-8 -right-8 text-neutral-500 animate-pulse">
<i className="w-10 h-10" data-lucide="database" strokeWidth="1.5"></i>
</div>
</div>
</div>
</main>

<section className="overflow-hidden bg-[#050505] pt-24 pb-24 relative" id="skills">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-24 w-px bg-gradient-to-b from-white/20 to-transparent"></div>
<div className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row gap-8 animate-enter mb-20 gap-x-8 gap-y-8 items-end justify-between">
<div>
<h2 className="text-4xl lg:text-5xl font-display font-medium text-white tracking-tight mb-4">
                        Compétences<br/>
<span className="text-neutral-600">&amp; Expertise</span>
</h2>
<p className="text-base text-neutral-400 font-light max-w-md">
                        Profil hybride combinant expertise technique et vision stratégique métier en environnement Agile.
                    </p>
</div>

<div className="flex items-center gap-2 border border-[#FACC15]/40 bg-[#FACC15]/5 rounded-full px-4 py-2">
<i className="w-4 h-4 text-[#FACC15]" data-lucide="award" strokeWidth="1.5"></i>
<span className="text-xs uppercase font-medium tracking-widest text-[#FACC15]">8+ Ans d'Expérience</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#FACC15]/40 transition-all duration-500 animate-enter delay-100">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<div className="flex justify-between items-start mb-12">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white group-hover:text-[#FACC15] transition-colors">
<i className="w-6 h-6" data-lucide="server" strokeWidth="1.5"></i>
</div>
</div>
<h3 className="text-xl font-display font-normal text-white mb-2">Modules SAP</h3>
<p className="text-base text-neutral-500 font-light leading-relaxed mb-6">
                        Expertise sur FI-CO, MM, SD. Architectures S/4HANA, ECC, Netweaver, Fiori, Solman.
                    </p>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
<span>Core ERP</span>
<i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#FACC15]/40 transition-all duration-500 animate-enter delay-200">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<div className="flex justify-between items-start mb-12">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white group-hover:text-[#FACC15] transition-colors">
<i className="w-6 h-6" data-lucide="activity" strokeWidth="1.5"></i>
</div>
</div>
<h3 className="text-xl font-display font-normal text-white mb-2">Run / MCO</h3>
<p className="text-base text-neutral-500 font-light leading-relaxed mb-6">
                        Gestion d'incidents, documentation, procédures, monitoring système et applicatif, gestion des utilisateurs.
                    </p>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
<span>Opérations</span>
<i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#FACC15]/40 transition-all duration-500 animate-enter delay-300">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<div className="flex justify-between items-start mb-12">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white group-hover:text-[#FACC15] transition-colors">
<i className="w-6 h-6" data-lucide="wrench" strokeWidth="1.5"></i>
</div>
</div>
<h3 className="text-xl font-display font-normal text-white mb-2">Outils &amp; Agilité</h3>
<p className="text-base text-neutral-500 font-light leading-relaxed mb-6">
                        Dollar Universe, OpCon, Orchestra, Confluence, JIRA, Salesforce, Talend. Coordination TMA et gestion de projets Agile.
                    </p>
<div className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
<span>Management</span>
<i className="w-3 h-3" data-lucide="arrow-right" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#050505] pt-24 pb-24 relative" id="experience">
<div className="lg:px-12 z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 items-end">
<div className="flex flex-col gap-6 animate-enter gap-x-6 gap-y-6">
<div className="inline-flex items-center gap-2">
<span className="text-xs font-mono text-[#FACC15] uppercase tracking-[0.2em] border border-[#FACC15]/20 px-2 py-1 rounded">Parcours</span>
</div>
<h2 className="text-4xl lg:text-6xl font-display font-normal text-white tracking-tight leading-[0.9]">
                        Expériences<br/>
<span className="text-neutral-600">Professionnelles</span>
</h2>
</div>
<div className="flex flex-col gap-6 animate-enter delay-100">
<p className="leading-relaxed text-xl font-light text-neutral-400">
                        Plus de 8 ans en environnement de production critique. <span className="text-white font-normal">Expertise confirmée.</span>
</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

<div className="group relative bg-[#080808] border border-white/10 p-8 flex flex-col justify-between min-h-[380px] hover:bg-[#FACC15] transition-all duration-500 animate-enter delay-100">
<div className="relative z-10 h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<span className="group-hover:text-black/60 transition-colors duration-500 text-sm text-neutral-500 font-mono"></span>
<span className="text-sm font-medium uppercase tracking-widest text-white group-hover:text-black transition-colors duration-500">Carrefour CPI</span>
</div>
<h3 className="text-2xl text-white font-normal mb-3 group-hover:text-black transition-colors duration-300">Consultant SAP</h3>
<ul className="list-disc list-inside space-y-2 mt-4 text-base font-light text-neutral-400 group-hover:text-black/80 transition-colors duration-500 flex-grow">
<li className="">Support SAP SD/MM &amp; FI/CO: gestion des tickets N1 et N2, assistance fonctionnelle, suivi TMA.</li>
<li className="">Gestion des flux SD/MM pour les équipes vente/achat, transitaire &amp; centrale.</li>
<li className="">MCO : supervision système, gestion des incidents, documentations, licences, tests &amp; recette.</li>
<li className="pt-2"><span className="font-normal">Env:</span> SAP S4/HANA, Fiori, Data Lake, MFT, JIRA.</li>
</ul>
</div>
</div>

<div className="group relative bg-[#080808] border border-white/10 p-8 flex flex-col justify-between min-h-[380px] hover:bg-[#FACC15] transition-all duration-500 animate-enter delay-200">
<div className="relative z-10 h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<span className="group-hover:text-black/60 transition-colors duration-500 text-sm text-neutral-500 font-mono"></span>
<span className="text-sm font-medium uppercase tracking-widest text-white group-hover:text-black transition-colors duration-500">Monoprix</span>
</div>
<h3 className="group-hover:text-black transition-colors duration-300 text-2xl font-normal text-white mb-3">Ingénieur Production SAP &amp; Support Applicatif</h3>
<ul className="list-disc list-inside space-y-2 mt-4 text-base font-light text-neutral-400 group-hover:text-black/80 transition-colors duration-500 flex-grow">
<li className="">Référent SAP production : gestion des MEP, LSMW, EDI, idocs, interfaces, supervision batch.</li>
<li className="">Projets : archivage OpenText, dématérialisation fiscale, migration société.</li>
<li className="">MCO : supervision, gestion des incidents, autorisations, refresh, scripting.</li>
<li className="pt-2"><span className="font-normal">Env:</span> SAP, Dollar Universe, Orchestra, Talend, Snowflake.</li>
</ul>
</div>
</div>
</div>

<div className="group flex flex-col md:flex-row gap-8 hover:bg-[#FACC15] transition-all duration-500 animate-enter delay-300 w-full border-white/20 border rounded-sm p-8 relative items-center">
<div className="relative z-10 flex-grow text-center md:text-left">
<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
<div className="">
<span className="block group-hover:text-black/60 transition-colors duration-500 text-sm text-neutral-500 font-mono mb-1"></span>
<h3 className="group-hover:text-black transition-colors duration-300 text-2xl font-normal text-white">Support SAP &amp; Gestionnaire d'Applications @ SIPLEC (E.Leclerc)</h3>
</div>
</div>
<p className="text-base text-neutral-400 leading-relaxed font-light group-hover:text-black/70 max-w-3xl transition-colors duration-500 mt-2">
                        SAP S4/HANA, ECC6, Fiori, MM/SD, FI/CO. Coordination TMA, gestion de refresh SAP, revue rôles et autorisations. Projets de montée de version S/4HANA et test du portail carburant.
                    </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#050505] pt-12 pb-24 relative" id="education">
<div className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
<h2 className="text-4xl lg:text-5xl font-display font-medium text-white tracking-tight mb-12 animate-enter">
                Formation &amp; <br/>
<span className="text-neutral-600">Certifications</span>
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#FACC15]/40 transition-all duration-500 animate-enter delay-100">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<h3 className="text-lg font-display font-normal text-white mb-2">Chef de Projet Agile &amp; Blockchain</h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs border border-white/10 px-2 py-1 text-neutral-500">Alyra</span>
<span className="text-xs border border-white/10 px-2 py-1 text-neutral-500">2022-2023</span>
</div>
<p className="text-base text-neutral-500 font-light leading-relaxed">
                        Certification en gestion de projet Agile et technologies Blockchain. École reconnue pour l'écosystème web3.
                    </p>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#FACC15]/40 transition-all duration-500 animate-enter delay-200">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<h3 className="text-lg font-display font-normal text-white mb-2">TSMIR Systèmes &amp; Réseaux</h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-xs border border-white/10 px-2 py-1 text-neutral-500">Aston / SQLI</span>
<span className="text-xs border border-white/10 px-2 py-1 text-neutral-500">2013-2015</span>
</div>
<p className="text-base text-neutral-500 font-light leading-relaxed">
                        Formation Bac+2 spécialisée en infrastructure, administration systèmes et réseaux informatiques.
                    </p>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#FACC15]/40 transition-all duration-500 animate-enter delay-300">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<h3 className="text-lg font-display font-normal text-white mb-4">Langues &amp; Loisirs</h3>
<ul className="space-y-4">
<li className="border-l-2 border-neutral-800 pl-4">
<div className="text-white text-base font-normal">Langues</div>
<div className="text-neutral-500 text-sm font-light mt-1">Français (Natif), Anglais (B2), Thaï (A1), Russe (A1)</div>
</li>
<li className="border-l-2 border-neutral-800 pl-4">
<div className="text-white text-base font-normal">Loisirs</div>
<div className="text-neutral-500 text-sm font-light mt-1">Blockchain &amp; IA, Jiu-Jitsu Brésilien, Création web</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden bg-[#050505] w-full border-white/10 border-t pt-16 pb-8 relative" id="contact">
<div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
<div className="lg:px-12 z-10 w-full pr-6 pl-6 relative">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
<div className="md:col-span-4 lg:col-span-5 flex flex-col gap-6 gap-x-6 gap-y-6">
<a className="flex items-center gap-4 hover:opacity-80 transition-opacity" href="#">
<div className="flex flex-col justify-center">
<span className="font-display font-semibold text-2xl leading-none tracking-tight text-white uppercase">FLORENT</span>
<span className="font-display font-normal text-xs leading-none tracking-[0.25em] text-neutral-400 mt-1 uppercase">Le Page</span>
</div>
</a>
<p className="text-neutral-500 text-base leading-relaxed max-w-xs font-light">
                        Consultant SAP freelance expert en environnement de production, MCO et pilotage de projets Agile.
                    </p>
</div>
<div className="md:col-span-4 lg:col-span-3 flex flex-col justify-between">
<div className="">
<h4 className="text-sm font-mono text-white uppercase tracking-widest mb-6">Contact</h4>
<div className="flex flex-col gap-2 text-base text-neutral-400 mb-6 gap-x-2 gap-y-2">
<a className="hover:text-[#FACC15] transition-colors" href="mailto:florent.lepage78350@gmail.com">florent.lepage78350@gmail.com</a>
<span className="">+33 (0)6 46 32 97 20</span>
<span className="cursor-pointer" onclick="window.location.href='https://fr.linkedin.com/in/florent-le-page-1092b983'" role="button"></span>
<span className="">Paris, France</span>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-all duration-300" href="mailto:florent.lepage78350@gmail.com">
<i className="w-4 h-4" data-lucide="mail" strokeWidth="1.5"></i>
</a>
<a className="flex items-center justify-center hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-all duration-300 text-neutral-400 w-10 h-10 border-white/10 border" href="https://fr.linkedin.com/in/florent-le-page-1092b983" target="_blank">
<i className="w-4 h-4" data-lucide="linkedin" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row gap-4 border-white/10 border-t pt-6 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-sm text-neutral-600 font-mono">© 2024 BlockFlow Consulting. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-neutral-400 transition-colors text-sm text-neutral-600" href="#">Florent LE PAGE</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
