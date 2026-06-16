import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // Budget Slider Logic
        const range = document.getElementById('budgetRange');
        const valueDisplay = document.getElementById('budgetValue');
        range.addEventListener('input', (e) => {
            let val = parseInt(e.target.value);
            valueDisplay.textContent = val >= 20000 ? '20 000€+' : val + '€';
        });

        // Auto-expand textarea
        const tx = document.getElementById('message');
        tx.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = (this.scrollHeight) + 'px';
        });

        // ----------------------------------------------------
        // 3D Starfield Engine (Optimized for Owl Theme)
        // ----------------------------------------------------
        const canvas = document.getElementById('starfield');
        const ctx = canvas.getContext('2d');
        const heroContainer = document.getElementById('hero-content');
        const cursor = document.getElementById('cursor-particle');
        
        let width, height;
        let stars = [];
        let scrollY = 0;
        let speed = 0;
        let targetSpeed = 0;
        let mouseX = 0;
        let mouseY = 0;

        // Config
        const STAR_COUNT = 600;
        const FOV = 350;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            if (mouseX === 0) {
                mouseX = width / 2;
                mouseY = height / 2;
            }
        }

        class Star {
            constructor() {
                this.x = (Math.random() - 0.5) * width * 2;
                this.y = (Math.random() - 0.5) * height * 2;
                this.z = Math.random() * FOV;
                this.pz = this.z;
                this.size = Math.random() * 0.5 + 0.5;
                // Subtle blue/orange tint variance
                this.color = Math.random() > 0.9 ? '#fb923c' : '#94a3b8'; 
            }

            update() {
                let movement = 0.2 + (speed * 8);
                this.z -= movement;

                if (this.z <= 1) {
                    this.z = FOV;
                    this.x = (Math.random() - 0.5) * width * 2;
                    this.y = (Math.random() - 0.5) * height * 2;
                    this.pz = FOV;
                }
            }

            draw() {
                let scale = FOV / this.z;
                let x2d = this.x * scale;
                let y2d = this.y * scale;
                
                // Trail effect
                let trailZ = this.z + (speed * 30) + 2;
                let scaleTrail = FOV / trailZ;
                let x2dTrail = this.x * scaleTrail;
                let y2dTrail = this.y * scaleTrail;

                let alpha = (1 - this.z / FOV);

                ctx.beginPath();
                ctx.strokeStyle = this.color;
                ctx.globalAlpha = alpha * 0.6; // Softer stars
                ctx.lineWidth = this.size * scale;
                ctx.moveTo(x2dTrail, y2dTrail);
                ctx.lineTo(x2d, y2d);
                ctx.stroke();
                ctx.globalAlpha = 1;
                this.pz = this.z;
            }
        }

        function initStars() {
            stars = [];
            for(let i = 0; i < STAR_COUNT; i++) {
                stars.push(new Star());
            }
        }

        function animate() {
            // Clear with trail effect for speed sensation
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.fillStyle = '#02040a';
            ctx.fillRect(0, 0, width, height);

            // Parallax
            const cx = width / 2 + (width / 2 - mouseX) * 0.02;
            const cy = height / 2 + (height / 2 - mouseY) * 0.02;
            
            ctx.translate(cx, cy);

            speed += (targetSpeed - speed) * 0.1;

            for (let i = 0; i < stars.length; i++) {
                stars[i].update();
                stars[i].draw();
            }

            requestAnimationFrame(animate);
        }

        // Event Listeners
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            if (cursor) {
                // Smooth cursor follow
                cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
                cursor.style.opacity = '1';
            }
        });

        window.addEventListener('scroll', () => {
            scrollY = window.scrollY;
            
            // Warp speed effect on scroll
            if (scrollY < 1000) {
                targetSpeed = Math.min(scrollY / 400, 2);
            } else {
                targetSpeed = 0.05;
            }

            // Hero Fade/Blur Logic
            const perspectiveLimit = 800;
            if (scrollY < perspectiveLimit) {
                const progress = scrollY / perspectiveLimit;
                const zMove = scrollY * 2; // Move text away
                const opacity = Math.max(0, 1 - (progress * 1.5));
                const blur = progress * 15;
                
                heroContainer.style.transform = `translate3d(0, 0, ${zMove}px)`;
                heroContainer.style.opacity = opacity;
                heroContainer.style.filter = `blur(${blur}px)`;
                heroContainer.style.pointerEvents = opacity < 0.1 ? 'none' : 'auto';
            }
        });

        window.addEventListener('resize', () => {
            resize();
            initStars();
        });

        // Initialize
        resize();
        initStars();
        animate();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed w-32 h-32 bg-orange-500/10 rounded-full blur-[60px] pointer-events-none z-[5] transition-opacity duration-300 opacity-0 hidden md:block" id="cursor-particle" style={{willChange: 'transform', left: '0', top: '0', transform: 'translate(-50%, -50%)'}}></div>

<canvas className="fixed opacity-60 w-full h-full z-0 pointer-events-auto top-0 right-0 bottom-0 left-0" height="908" id="starfield" width="1440"></canvas>

<nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 transition-all duration-500 border-b border-white/0" id="navbar">
<div className="flex gap-3 gap-x-3 gap-y-3 items-center">
<img alt="Owl Concept" className="transition-opacity hover:opacity-80 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0aa4df80-63eb-4f35-af83-ff0ec906f8f7_320w.png"/>
</div>
<div className="hidden md:flex gap-8 text-xs font-medium text-slate-400 uppercase tracking-widest mix-blend-screen">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#process">Méthode</a>
<a className="hover:text-white transition-colors" href="#pricing">Tarifs</a>
</div>
<a className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-orange-500 hover:border-orange-500/50 backdrop-blur-sm transition-all duration-300 text-xs font-medium text-white shadow-lg shadow-black/20" href="#contact">
<span>Démarrer</span>
<iconify-icon className="text-base group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</nav>

<div className="perspective-container" id="hero-container">
<div className="hero-text-layer text-center px-4 w-full max-w-4xl mx-auto" id="hero-content" style={{filter: 'blur(10.4438px)', pointerEvents: 'none'}}>
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-orange-500/20 bg-orange-500/10 backdrop-blur-md mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
<span className="text-[10px] text-orange-200 font-medium tracking-wide uppercase">
                    Powered by AI
                </span>
</div>
<h1 className="text-5xl md:text-8xl font-medium tracking-tighter text-white mb-8 leading-[1.1]">
                Votre logiciel métier <br/>
<span className="text-slate-500">sur mesure.</span>
</h1>
<p className="text-sm md:text-lg text-slate-400 max-w-xl mx-auto font-light leading-relaxed mb-10">
                Transformez vos besoins complexes en solutions SaaS performantes. 
                Une qualité professionnelle rendue accessible aux PME grâce à l'IA.
                <span className="block mt-4 text-white font-medium">À partir de 1500€</span>
</p>
<div className="flex flex-col md:flex-row gap-4 justify-center pointer-events-auto">
<button className="px-8 py-3.5 bg-white text-black rounded-full font-medium text-xs hover:bg-orange-500 hover:text-white transition-all duration-300 tracking-wide shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
                    Obtenir un devis
                </button>
<button className="px-8 py-3.5 text-white rounded-full font-medium text-xs border border-white/10 hover:bg-white/5 transition-colors tracking-wide" onclick="document.getElementById('services').scrollIntoView({behavior: 'smooth'})">
                    Découvrir l'offre
                </button>
</div>
</div>
</div>

<div style={{height: '100vh'}}></div>

<main className="relative z-20 bg-[#02040a] border-t border-white/5 shadow-[0_-50px_100px_rgba(0,0,0,1)]">

<section className="md:px-12 overflow-hidden pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-900/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start relative z-10">
<div className="md:col-span-7">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 leading-tight">
                        La vision nocturne <br/>
<span className="text-slate-500">de votre activité.</span>
</h2>
<p className="leading-relaxed text-lg font-light text-slate-400 mb-12">
                        Nous n'utilisons pas des templates génériques. Nous construisons des outils SaaS métiers qui s'adaptent à vos processus, et non l'inverse. Grâce à l'automatisation par IA, nous réduisons les coûts de développement sans sacrifier la qualité.
                    </p>
<div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
<div>
<span className="block text-3xl font-semibold text-white tracking-tighter">1500€</span>
<span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 block">Prix d'entrée</span>
</div>
<div>
<span className="block text-3xl font-semibold text-white tracking-tighter">3x</span>
<span className="text-[10px] text-slate-500 uppercase tracking-widest mt-1 block">Plus rapide</span>
</div>
</div>
</div>
<div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="glass-panel border-l-orange-500 group hover:bg-white/5 transition-colors rounded-xl border-l-2 p-6">
<iconify-icon className="text-orange-400 text-2xl mb-3" icon="solar:graph-up-linear"></iconify-icon>
<h3 className="text-base font-medium text-white">ROI Immédiat</h3>
<p className="text-xs text-slate-500 mt-2 leading-relaxed">
            Investissement initial faible. Modèle de licence évolutif pensé pour la trésorerie des PME.
        </p>
</div>
<div className="glass-panel p-6 rounded-xl border-l-2 border-l-blue-500 group hover:bg-white/5 transition-colors">
<iconify-icon className="text-blue-400 text-2xl mb-3" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-base font-medium text-white">Intelligence Artificielle</h3>
<p className="text-xs text-slate-500 mt-2 leading-relaxed">
            Nous intégrons nativement l'IA dans vos outils pour automatiser vos tâches chronophages.
        </p>
</div>
<div className="glass-panel p-6 rounded-xl border-l-2 border-l-emerald-500 group hover:bg-white/5 transition-colors">
<iconify-icon className="text-emerald-400 text-2xl mb-3" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="text-base font-medium text-white">Sécurité Maximale</h3>
<p className="text-xs text-slate-500 mt-2 leading-relaxed">
            Protection des données de bout en bout et conformité RGPD native par design.
        </p>
</div>
<div className="glass-panel p-6 rounded-xl border-l-2 border-l-purple-500 group hover:bg-white/5 transition-colors">
<iconify-icon className="text-purple-400 text-2xl mb-3" icon="solar:rocket-2-linear"></iconify-icon>
<h3 className="text-base font-medium text-white">Déploiement Rapide</h3>
<p className="text-xs text-slate-500 mt-2 leading-relaxed">
            Architecture modulaire permettant une mise en production en quelques semaines.
        </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-white/5 bg-slate-900/10" id="services">
<div className="max-w-7xl mx-auto">
<div className="mb-16 md:flex justify-between items-end">
<div>
<span className="text-orange-500 text-[10px] font-mono mb-4 block uppercase tracking-widest">/// Nos Expertises</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight">Services sur mesure</h2>
</div>
<p className="text-slate-500 text-sm max-w-xs mt-4 md:mt-0 text-right">Solutions scalables et sécurisées.</p>
</div>
<div className="grid md:grid-cols-3 gap-1">

<div className="group p-8 md:p-10 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-8 border border-orange-500/20 text-orange-400">
<iconify-icon className="text-2xl" icon="solar:code-square-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3">Développement SaaS</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                            Création d'architectures robustes et interfaces modernes. Du CRM interne à la plateforme client B2B.
                        </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-[10px] text-slate-400">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Web Apps React/Next.js
                            </li>
<li className="flex items-center gap-2 text-[10px] text-slate-400">
<iconify-icon className="text-orange-500" icon="solar:check-circle-linear"></iconify-icon> Bases de données sécurisées
                            </li>
</ul>
</div>

<div className="group p-8 md:p-10 bg-white/[0.02] hover:bg-white/[0.04] border-y border-r border-white/5 md:border-y md:border-x transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-8 border border-blue-500/20 text-blue-400">
<iconify-icon className="text-2xl" icon="solar:cpu-bolt-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3">Intégration IA</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                            Boostez vos outils avec des fonctionnalités intelligentes : analyse de documents, chatbots métiers, prédictions.
                        </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-[10px] text-slate-400">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> API OpenAI / LLM
                            </li>
<li className="flex items-center gap-2 text-[10px] text-slate-400">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear"></iconify-icon> Automatisation Workflows
                            </li>
</ul>
</div>

<div className="group p-8 md:p-10 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 transition-all duration-300 relative overflow-hidden">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20 text-emerald-400">
<iconify-icon className="text-2xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-medium mb-3">Licence &amp; Support</h3>
<p className="text-sm text-slate-500 leading-relaxed mb-6">
                            Un modèle économique clair. Maintenance évolutive, hébergement inclus et support réactif.
                        </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-[10px] text-slate-400">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Mises à jour sécurité
                            </li>
<li className="flex items-center gap-2 text-[10px] text-slate-400">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear"></iconify-icon> Monitoring 24/7
                            </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-white/5" id="process">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Comment ça marche ?</h2>
<p className="text-slate-500 text-sm">Une méthodologie agile pour un déploiement rapide.</p>
</div>
<div className="relative">

<div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
<div className="space-y-16">

<div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center">
<div className="pl-12 md:pl-0 md:text-right">
<h3 className="text-xl font-medium text-white mb-2">Analyse des besoins</h3>
<p className="text-sm text-slate-500">Audit de vos processus actuels et identification des goulots d'étranglement à automatiser.</p>
</div>
<div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-orange-500 border-4 border-[#02040a]"></div>
<div className="hidden md:block pl-12">
<span className="text-[10px] text-orange-500 font-mono">01. INITIALISATION</span>
</div>
</div>

<div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center">
<div className="hidden md:block text-right pr-12">
<span className="text-[10px] text-orange-500 font-mono">02. CONCEPTION</span>
</div>
<div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-700 border-4 border-[#02040a]"></div>
<div className="pl-12 md:pl-0">
<h3 className="text-xl font-medium text-white mb-2">Prototypage</h3>
<p className="text-sm text-slate-500">Validation des interfaces et du flux utilisateur avant toute ligne de code.</p>
</div>
</div>

<div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center">
<div className="pl-12 md:pl-0 md:text-right">
<h3 className="text-xl font-medium text-white mb-2">Développement IA</h3>
<p className="text-sm text-slate-500">Codage assisté par IA pour accélérer la production et garantir un code propre.</p>
</div>
<div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-slate-700 border-4 border-[#02040a]"></div>
<div className="hidden md:block pl-12">
<span className="text-[10px] text-orange-500 font-mono">03. PRODUCTION</span>
</div>
</div>

<div className="relative grid md:grid-cols-2 gap-8 md:gap-16 items-center">
<div className="hidden md:block text-right pr-12">
<span className="text-[10px] text-orange-500 font-mono">04. DÉPLOIEMENT</span>
</div>
<div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-4 border-[#02040a] shadow-[0_0_15px_rgba(255,255,255,0.5)]"></div>
<div className="pl-12 md:pl-0">
<h3 className="text-xl font-medium text-white mb-2">Livraison &amp; Formation</h3>
<p className="text-sm text-slate-500">Mise en ligne sécurisée et formation de vos équipes à l'outil.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 border-t border-white/5" id="pricing">
<div className="max-w-4xl mx-auto glass-panel rounded-2xl p-8 md:p-16 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
<h2 className="text-2xl font-medium mb-6">Démocratisation du SaaS</h2>
<div className="flex flex-col items-center justify-center mb-8">
<span className="text-sm text-slate-400 mb-2">Setup à partir de</span>
<span className="text-6xl md:text-7xl font-semibold tracking-tighter text-white">1500€</span>
<span className="text-xs text-orange-400 mt-4 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">+ Contrat de licence mensuel adapté</span>
</div>
<p className="text-sm text-slate-400 max-w-lg mx-auto mb-10">
                    Bénéficiez d'une solution propriétaire maintenue, hébergée et évolutive pour une fraction du coût d'une agence traditionnelle.
                </p>
<button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:bg-slate-200 transition-colors" onclick="document.getElementById('contact').scrollIntoView({behavior: 'smooth'})">
                    Demander une estimation
                    <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</section>

<section className="py-32 px-6 md:px-12 border-t border-white/5 bg-gradient-to-b from-[#02040a] to-[#050810]" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Parlons de votre projet</h2>
<p className="text-slate-500 text-sm">
                        Remplissez le formulaire ci-dessous pour une réponse sous 24h.
                    </p>
</div>
<form className="space-y-8" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-6">
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-slate-800 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder-transparent text-white" id="name" placeholder="Nom" required="" type="text"/>
<label className="absolute left-0 top-3 text-slate-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-600 peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-orange-500 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-orange-500" htmlFor="name">Nom</label>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-slate-800 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder-transparent text-white" id="company" placeholder="Entreprise" type="text"/>
<label className="absolute left-0 top-3 text-slate-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-600 peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-orange-500 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-orange-500" htmlFor="company">Entreprise</label>
</div>
</div>
<div className="group relative">
<input className="peer w-full bg-transparent border-b border-slate-800 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder-transparent text-white" id="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 top-3 text-slate-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-600 peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-orange-500 peer-valid:-top-2 peer-valid:text-xs peer-valid:text-orange-500" htmlFor="email">Email professionnel</label>
</div>
<div className="space-y-4 pt-4">
<div className="flex justify-between text-xs text-slate-500 uppercase tracking-widest">
<label>Budget Estimé</label>
<span className="text-orange-500" id="budgetValue">1500€</span>
</div>
<input className="w-full" id="budgetRange" max="20000" min="1500" step="500" type="range" value="1500"/>
</div>
<div className="group relative pt-4">
<textarea className="peer w-full bg-transparent border-b border-slate-800 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors placeholder-transparent text-white resize-none" id="message" placeholder="Description du projet" required="" rows="1"></textarea>
<label className="absolute left-0 top-7 text-slate-500 text-xs transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-600 peer-placeholder-shown:top-7 peer-focus:top-2 peer-focus:text-xs peer-focus:text-orange-500 peer-valid:top-2 peer-valid:text-xs peer-valid:text-orange-500" htmlFor="message">Description du besoin</label>
</div>
<div className="flex items-center gap-3 pt-4">
<input className="custom-checkbox appearance-none h-3.5 w-3.5 border border-slate-700 rounded bg-transparent focus:outline-none cursor-pointer transition-colors" id="terms" type="checkbox"/>
<label className="text-xs text-slate-500 select-none cursor-pointer hover:text-slate-400" htmlFor="terms">J'accepte d'être recontacté pour une proposition commerciale.</label>
</div>
<button className="w-full glass-panel text-white font-medium py-4 rounded hover:bg-orange-500 hover:border-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 mt-8 text-sm tracking-wide shadow-lg shadow-black/20" type="submit">
                        Envoyer la demande
                        <iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</button>
<div className="text-center pt-4">
<a className="text-xs text-slate-600 hover:text-orange-500 transition-colors flex items-center justify-center gap-1" href="#">
<iconify-icon icon="solar:calendar-linear"></iconify-icon>
                            Ou prendre rendez-vous directement
                        </a>
</div>
</form>
</div>
</section>
<footer className="py-12 border-t border-white/5 text-center bg-[#010205]">
<div className="flex items-center justify-center gap-2 mb-6 opacity-50">
<iconify-icon className="text-white text-lg" icon="solar:eye-linear"></iconify-icon>
<span className="text-sm font-semibold tracking-tight text-white">OWL CONCEPT</span>
</div>
<p className="text-[10px] text-slate-600 uppercase tracking-widest">
                © 2024 Owl Concept. Solutions SaaS sur mesure.
            </p>
</footer>
</main>


    </>
  );
}
