import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind
tailwind.config = {
theme: {
extend: {
colors: {
brand: {
yellow: '#FACC15',
black: '#050505'
}
}
}
}
};



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
            colors: ['rgba(255,255,255,0.8)', 'rgba(250, 204, 21, 0.6)', 'rgba(255,255,255,0.4)'], // White, Yellow, Dim White
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
                this.z = Math.random() * 2000; // Depth
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
                let phaseSpeed = config.baseSpeed;
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">

<canvas className="absolute inset-0 w-full h-full opacity-60" id="bg-canvas"></canvas>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900/30 via-[#050505]/80 to-[#050505] pointer-events-none"></div>
<div className="absolute inset-0 grid-bg opacity-10 mask-image:linear-gradient(to_bottom,black,transparent) pointer-events-none"></div>
</div>

<nav className="w-full px-6 lg:px-12 py-8 flex items-center justify-between fixed top-0 z-50 mix-blend-difference text-white transition-all duration-500" id="navbar">

<a className="flex flex-col group" href="#">
<span className="font-display font-bold text-2xl leading-none tracking-tight uppercase group-hover:opacity-80 transition-opacity">TIDIANE</span>
<span className="text-[0.6rem] leading-none uppercase font-semibold tracking-[0.25em] font-display mt-1 text-neutral-400 group-hover:text-white transition-colors">Tambadou</span>
</a>

<div className="hidden md:flex items-center gap-10 text-xs font-medium uppercase tracking-widest text-neutral-400 absolute left-1/2 -translate-x-1/2">
<a className="hover:text-white transition-colors duration-300" href="#skills">Compétences</a>
<a className="hover:text-white transition-colors duration-300" href="#experience">Expériences</a>
<a className="hover:text-white transition-colors duration-300" href="#projects">Projets</a>
<a className="hover:text-white transition-colors duration-300" href="#education">Formation</a>
</div>

<div className="flex items-center gap-6">
<a className="uppercase hidden sm:block text-xs font-semibold text-neutral-400 tracking-widest hover:text-white cursor-pointer transition-colors" href="mailto:tidianepro@outlook.fr">Contact</a>
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

<div className="flex items-center gap-3 mb-8 animate-enter">
<div className="w-1.5 h-1.5 bg-[#FACC15] rounded-full shadow-[0_0_8px_#FACC15]"></div>
<span className="uppercase text-xs font-semibold text-neutral-400 tracking-[0.2em] font-mono">Ingénieur DevOps &amp; Cloud Junior</span>
</div>

<h1 className="text-5xl lg:text-7xl leading-[1.05] font-display font-semibold tracking-tighter text-white mb-8 capitalize animate-enter delay-100">
                    Automatisation,<br/>
                    Cloud &amp;<br/>
                    Intelligence<br/>
                    Artificielle
                </h1>

<p className="text-lg text-neutral-400 max-w-md leading-relaxed mb-10 font-light animate-enter delay-200">
                    Étudiant en Mastère DevOps &amp; Cloud. Spécialiste de l'automatisation des processus métier, de la gestion d'infrastructures Cloud et du déploiement de solutions d'IA.
                </p>

<div className="flex items-start animate-enter delay-300">
<a className="btn-hover-effect group inline-flex items-center gap-4 px-8 py-4 border border-white/20 rounded-sm text-white bg-transparent uppercase text-xs font-bold tracking-widest" href="#projects">
                        Voir Projets
                        <svg className="transition-transform duration-300" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="5" x2="19" y1="12" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
</a>
</div>
</div>

<div className="flex animate-enter delay-200 w-full h-[600px] relative items-center justify-center">

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

<svg className="drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] w-[380px] h-[380px]" viewbox="0 0 200 200">
<g fill="none" opacity="0.8" stroke="white" strokeWidth="0.3">

<ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(0 100 100)"></ellipse>
<ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(30 100 100)"></ellipse>
<ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(60 100 100)"></ellipse>
<ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(90 100 100)"></ellipse>
<ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(120 100 100)"></ellipse>
<ellipse cx="100" cy="100" rx="80" ry="30" transform="rotate(150 100 100)"></ellipse>

<ellipse cx="100" cy="100" opacity="0.5" rx="75" ry="25" stroke-dasharray="2 2" transform="rotate(15 100 100)"></ellipse>
<ellipse cx="100" cy="100" opacity="0.5" rx="75" ry="25" stroke-dasharray="2 2" transform="rotate(45 100 100)"></ellipse>
<ellipse cx="100" cy="100" opacity="0.5" rx="75" ry="25" stroke-dasharray="2 2" transform="rotate(75 100 100)"></ellipse>
<ellipse cx="100" cy="100" opacity="0.5" rx="75" ry="25" stroke-dasharray="2 2" transform="rotate(105 100 100)"></ellipse>
<ellipse cx="100" cy="100" opacity="0.5" rx="75" ry="25" stroke-dasharray="2 2" transform="rotate(135 100 100)"></ellipse>
<ellipse cx="100" cy="100" opacity="0.5" rx="75" ry="25" stroke-dasharray="2 2" transform="rotate(165 100 100)"></ellipse>
</g>
</svg>
</div>


<div className="absolute top-1/4 left-0 -translate-x-4 flex flex-col items-center gap-2 animate-enter delay-300">
<div className="relative w-12 h-12 border border-white/20 rounded-full flex items-center justify-center">
<svg className="absolute w-full h-full rotate-45" viewbox="0 0 40 40">
<path d="M20,5 L20,35" marker-end="url(#arrow)" stroke="white" strokeWidth="0.5"></path>
</svg>
</div>
<span className="font-math text-xl text-neutral-300">DevOps</span>
</div>

<div className="absolute bottom-1/4 left-10 translate-y-8 animate-enter delay-400">
<span className="text-4xl text-neutral-200 tracking-wide font-math" style={{textShadow: '0 0 20px rgba(0,0,0,1)'}}>
                        IaC <span className="text-xs align-middle mx-1">●</span> Cloud
                    </span>
</div>

<div className="absolute bottom-0 right-0 w-32 h-20 animate-enter delay-500">
<svg className="w-full h-full stroke-white/80 fill-none" strokeWidth="1" viewbox="0 0 100 60">
<path d="M5,55 L95,55" stroke-opacity="0.5"></path>
<path d="M50,55 L50,10" stroke-opacity="0.5"></path>
<path d="M10,55 C30,55 40,15 50,15 S70,55 90,55"></path>
</svg>
</div>

<div className="absolute -bottom-8 -right-8 text-neutral-500 animate-pulse">
<iconify-icon icon="lucide:cpu" width="40"></iconify-icon>
</div>
</div>
</div>
</main>

<section className="overflow-hidden bg-[#050505] pt-24 pb-24 relative" id="skills">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-24 w-px bg-gradient-to-b from-white/20 to-transparent"></div>
<div className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
<div className="flex flex-col md:flex-row gap-8 animate-enter mb-20 gap-x-8 gap-y-8 items-end justify-between">
<div>
<h2 className="text-4xl lg:text-5xl font-display font-semibold text-white tracking-tighter mb-4">
                        Compétences<br/>
<span className="text-neutral-600">Techniques</span>
</h2>
<p className="text-neutral-400 font-light max-w-md">
                        Une expertise technique transverse allant de l'infrastructure Cloud à l'intégration de modèles d'IA.
                    </p>
</div>

<div className="flex items-center gap-2 border border-[#FACC15]/40 bg-[#FACC15]/5 rounded-full px-4 py-2">
<iconify-icon className="text-[#FACC15]" icon="simple-icons:amazonaws" width="16"></iconify-icon>
<span className="text-[10px] uppercase font-bold tracking-widest text-[#FACC15]">Préparation Solutions Architect</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#FACC15]/40 transition-all duration-500 animate-enter delay-100">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<div className="flex justify-between items-start mb-12">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white group-hover:text-[#FACC15] transition-colors">
<iconify-icon icon="lucide:cloud-cog" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-display font-medium text-white mb-2">Cloud &amp; DevOps</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">
                        AWS, Azure, GCP, Scaleway. CI/CD (GitHub/GitLab), Terraform, OpenTofu, Ansible, IaC.
                    </p>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
<span>Infrastructure</span>
<iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#FACC15]/40 transition-all duration-500 animate-enter delay-200">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<div className="flex justify-between items-start mb-12">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white group-hover:text-[#FACC15] transition-colors">
<iconify-icon icon="lucide:box" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-display font-medium text-white mb-2">Conteneurs &amp; IA</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">
                        Docker, Kubernetes (K8s), Helm, LLMOps, RAG, Prompt Engineering, OpenAI API, Ollama, n8n.
                    </p>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
<span>Orchestration</span>
<iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#FACC15]/40 transition-all duration-500 animate-enter delay-300">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<div className="flex justify-between items-start mb-12">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-white group-hover:text-[#FACC15] transition-colors">
<iconify-icon icon="lucide:terminal" width="24"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-display font-medium text-white mb-2">Code &amp; OS</h3>
<p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">
                        Python, Go, Bash, TypeScript, .NET. Linux (Debian/Ubuntu), Windows Server.
                    </p>
<div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-400 group-hover:text-white transition-colors">
<span>Development</span>
<iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] relative" id="experience">
<div className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-16 items-end">
<div className="flex flex-col gap-6 animate-enter gap-x-6 gap-y-6">
<div className="inline-flex items-center gap-2">
<span className="text-[10px] font-mono text-[#FACC15] uppercase tracking-[0.2em] border border-[#FACC15]/20 px-2 py-1 rounded">Parcours</span>
</div>
<h2 className="text-4xl lg:text-6xl font-display font-medium text-white tracking-tighter leading-[0.9]">
                        Expériences<br/>
<span className="text-neutral-600">Professionnelles</span>
</h2>
</div>
<div className="flex flex-col gap-6 animate-enter delay-100">
<p className="leading-relaxed text-lg font-light text-neutral-400">
                        De la gestion de projet .NET à l'ingénierie Cloud &amp; IA. <span className="text-white font-normal">Une évolution constante.</span>
</p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

<div className="group relative bg-[#080808] border border-white/10 p-8 flex flex-col justify-between min-h-[380px] hover:bg-[#FACC15] transition-all duration-500 animate-enter delay-100">
<div className="relative z-10 h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-neutral-500 group-hover:text-black/60 transition-colors duration-500">2024–2026</span>
<span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-black transition-colors duration-500">NXO France</span>
</div>
<h3 className="text-xl text-white font-medium mb-3 group-hover:text-black transition-colors duration-300">Apprenti DevOps</h3>
<ul className="list-disc list-inside space-y-2 mt-4 text-sm font-light text-neutral-400 group-hover:text-black/80 transition-colors duration-500 flex-grow">
<li>Automatisation de processus métier via n8n sur Cloud privé.</li>
<li>Traitement automatique de tickets Jira, intégration clients en supervision.</li>
<li>Scripting Python/Bash pour le monitoring avancé des infrastructures.</li>
<li>Déploiement via pipelines GitLab CI sur clusters Kubernetes.</li>
<li>Sensibilisation de l'équipe au protocole Model Context Protocol (MCP).</li>
</ul>
</div>
</div>

<div className="group relative bg-[#080808] border border-white/10 p-8 flex flex-col justify-between min-h-[380px] hover:bg-[#FACC15] transition-all duration-500 animate-enter delay-200">
<div className="relative z-10 h-full flex flex-col">
<div className="flex justify-between items-start mb-4">
<span className="text-xs font-mono text-neutral-500 group-hover:text-black/60 transition-colors duration-500">2025–2026</span>
<span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-black transition-colors duration-500">BeautyINC</span>
</div>
<h3 className="group-hover:text-black transition-colors duration-300 text-xl font-medium text-white mb-3">Ingénieur IA &amp; Cloud</h3>
<ul className="list-disc list-inside space-y-2 mt-4 text-sm font-light text-neutral-400 group-hover:text-black/80 transition-colors duration-500 flex-grow">
<li>Fine-tuning de modèles via LoRA et gestion de datasets sur GCP.</li>
<li>Orchestration (PostgreSQL, MinIO) via Docker-compose et CI/CD Vercel.</li>
</ul>
<a className="mt-6 inline-block w-fit px-4 py-2 border border-white/20 group-hover:border-black/20 text-xs uppercase tracking-widest text-white group-hover:text-black rounded hover:bg-white/10 group-hover:hover:bg-black/10 transition-colors z-20" href="https://studio.regardbeauty.xyz" target="_blank">
                            studio.regardbeauty.xyz
                        </a>
</div>
</div>
</div>

<div className="group flex flex-col md:flex-row gap-8 hover:bg-[#FACC15] transition-all duration-500 animate-enter delay-300 w-full border-white/20 border rounded-sm p-8 relative items-center">
<div className="relative z-10 flex-grow text-center md:text-left">
<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3 gap-2">
<div>
<span className="block text-xs font-mono text-neutral-500 group-hover:text-black/60 mb-1 transition-colors duration-500">2023–2024</span>
<h3 className="group-hover:text-black transition-colors duration-300 text-xl font-medium text-white">Alternant Chef de Projet .NET @ Avanteam</h3>
</div>
</div>
<p className="text-sm text-neutral-400 leading-relaxed font-light group-hover:text-black/70 max-w-3xl transition-colors duration-500 mt-2">
                        Évolution CRM et support technique écosystème .NET. Pilotage de migrations et démonstrations techniques clients.
                    </p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#050505] pt-12 pb-24 relative" id="projects">
<div className="px-6 lg:px-12 max-w-7xl mx-auto relative z-10">
<h2 className="text-4xl lg:text-5xl font-display font-semibold text-white tracking-tighter mb-12 animate-enter">
                Projets Phares &amp; <br/>
<span className="text-neutral-600">Formation</span>
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#FACC15]/40 transition-all duration-500 animate-enter delay-100">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<h3 className="text-lg font-display font-medium text-white mb-2">Architecture GitOps</h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] border border-white/10 px-2 py-1 text-neutral-500">GitLab CI</span>
<span className="text-[10px] border border-white/10 px-2 py-1 text-neutral-500">OpenTofu</span>
<span className="text-[10px] border border-white/10 px-2 py-1 text-neutral-500">K3s</span>
</div>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Build multi-images et déploiement automatique sur cluster K3d avec Cert-manager (SSL) et Traefik.
                    </p>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#FACC15]/40 transition-all duration-500 animate-enter delay-200">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<h3 className="text-lg font-display font-medium text-white mb-2">LLM sur Azure AKS</h3>
<div className="flex flex-wrap gap-2 mb-4">
<span className="text-[10px] border border-white/10 px-2 py-1 text-neutral-500">Terraform</span>
<span className="text-[10px] border border-white/10 px-2 py-1 text-neutral-500">Azure</span>
<span className="text-[10px] border border-white/10 px-2 py-1 text-neutral-500">Helm</span>
</div>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                        Provisionnement AKS via Terraform pour héberger Open WebUI (backend Llama) avec auto-scaling et persistance.
                    </p>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 p-8 hover:border-[#FACC15]/40 transition-all duration-500 animate-enter delay-300" id="education">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FACC15]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
<h3 className="text-lg font-display font-medium text-white mb-4">Parcours Académique</h3>
<ul className="space-y-4">
<li className="border-l-2 border-neutral-800 pl-4">
<div className="text-white text-sm font-medium">Mastère Infra DevOps &amp; Cloud</div>
<div className="text-neutral-500 text-xs">Sup de Vinci</div>
</li>
<li className="border-l-2 border-neutral-800 pl-4">
<div className="text-white text-sm font-medium">Bachelor Dév. Informatique</div>
<div className="text-neutral-500 text-xs">Sup de Vinci</div>
</li>
<li className="border-l-2 border-neutral-800 pl-4">
<div className="text-white text-sm font-medium">Baccalauréat Général</div>
<div className="text-neutral-500 text-xs">Spé: NSI &amp; SI</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<footer className="w-full bg-[#050505] border-t border-white/10 pt-16 pb-8 relative overflow-hidden" id="contact">
<div className="absolute inset-0 grid-bg opacity-10 pointer-events-none"></div>
<div className="w-full px-6 lg:px-12 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-12">
<div className="md:col-span-4 lg:col-span-5 flex flex-col gap-6">
<a className="flex items-center gap-4 hover:opacity-80 transition-opacity" href="#">
<div className="flex text-white w-10 h-10 relative items-center justify-center">
<svg className="w-[40px] h-[40px]" fill="none" strokeWidth="2" viewbox="0 0 100 100">
<path d="M 42 32 H 52 C 62 32, 68 40, 68 50 C 68 60, 62 68, 52 68 H 42 V 32 Z M 50 40 V 60 H 52 C 56 60, 59 57, 59 50 C 59 43, 56 40, 52 40 H 50 Z" fill="white"></path>
<path d="M 32 24 A 40 40 0 0 1 76 68" stroke="white" strokeLinecap="round" strokeWidth="3"></path>
<path d="M 68 76 A 40 40 0 0 1 24 32" stroke="white" strokeLinecap="round" strokeWidth="3"></path>
<rect height="10" stroke="white" strokeWidth="2" width="10" x="18" y="18"></rect>
<rect height="10" stroke="white" strokeWidth="2" width="10" x="72" y="72"></rect>
</svg>
</div>
<div className="flex flex-col justify-center">
<span className="font-display font-bold text-2xl leading-none tracking-tight text-white uppercase">TIDIANE</span>
<span className="font-display font-medium text-[0.65rem] leading-none tracking-[0.25em] text-neutral-400 mt-1 uppercase">Tambadou</span>
</div>
</a>
<p className="text-neutral-500 text-sm leading-relaxed max-w-xs font-light">
                        Ingénieur DevOps &amp; Cloud Junior. Passionné par l'automatisation, l'infrastructure moderne et l'intelligence artificielle.
                    </p>
</div>
<div className="md:col-span-4 lg:col-span-3 flex flex-col justify-between">
<div>
<h4 className="text-xs font-mono text-white uppercase tracking-widest mb-6">Contact</h4>
<div className="flex flex-col gap-2 text-sm text-neutral-400 mb-6">
<a className="hover:text-[#FACC15] transition-colors" href="mailto:tidianepro@outlook.fr">tidianepro@outlook.fr</a>
<span>06 12 14 67 03</span>
</div>
<div className="flex gap-4">
<a className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-all duration-300" href="mailto:tidianepro@outlook.fr">
<iconify-icon icon="lucide:mail" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-all duration-300" href="#">
<iconify-icon icon="ri:linkedin-fill" width="18"></iconify-icon>
</a>
<a className="w-10 h-10 border border-white/10 flex items-center justify-center text-neutral-400 hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-all duration-300" href="#">
<iconify-icon icon="ri:github-fill" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-neutral-600 font-mono">© 2024 Tidiane Tambadou. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-neutral-600 hover:text-neutral-400 transition-colors" href="#">Portfolio</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
