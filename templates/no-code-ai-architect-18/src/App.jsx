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
},
colors: {
background: '#09090b', // Zinc 950
surface: '#18181b', // Zinc 900
},
animation: {
'blob': 'blob 10s infinite',
'blob-slow': 'blob 15s infinite reverse',
'blob-slower': 'blob 20s infinite',
'float': 'float 8s ease-in-out infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeInScale: {
'0%': { opacity: '0', transform: 'scale(0.95)' },
'100%': { opacity: '1', transform: 'scale(1)' },
}
}
}
}
}



        // --- 1. MOUSE SPOTLIGHT EFFECT ---
        const mainContainer = document.getElementById('cards-grid');
        const cards = document.querySelectorAll('.spotlight-card');

        mainContainer.onmousemove = e => {
            if(window.isReducedMotion) return;
            
            for(const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };

        // --- 2. LAMP SWITCH LOGIC ---
        let isLampOn = false;
        
        function toggleLamp() {
            isLampOn = !isLampOn;
            const body = document.body;
            const lampLayer = document.getElementById('lamp-glow-layer');
            const dustLayer = document.getElementById('dust-layer');
            const lampKnob = document.getElementById('lamp-knob');
            const lampTrack = document.getElementById('lamp-track');
            const lampIcon = document.getElementById('lamp-icon');
            const btnGlow = document.getElementById('btn-glow');
            const heroGradient = document.getElementById('hero-gradient');

            if (isLampOn) {
                body.classList.add('lamp-on');
                
                // Layers
                lampLayer.classList.remove('opacity-0');
                lampLayer.classList.add('opacity-100');
                dustLayer.classList.remove('opacity-0');
                dustLayer.classList.add('opacity-100');

                // Toggle UI
                lampKnob.style.transform = 'translateX(100%)';
                lampKnob.classList.replace('bg-zinc-500', 'bg-amber-400');
                lampTrack.classList.replace('bg-zinc-800', 'bg-amber-900/40');
                lampIcon.classList.add('text-amber-400');
                lampIcon.setAttribute('icon', 'solar:lightbulb-bolt-linear');
                btnGlow.classList.remove('opacity-0');
                btnGlow.classList.add('opacity-100');
                
                // Text Gradient Warming
                heroGradient.classList.remove('from-zinc-200', 'to-zinc-500');
                heroGradient.classList.add('from-amber-100', 'to-amber-300');

            } else {
                body.classList.remove('lamp-on');
                
                // Layers
                lampLayer.classList.remove('opacity-100');
                lampLayer.classList.add('opacity-0');
                dustLayer.classList.remove('opacity-100');
                dustLayer.classList.add('opacity-0');

                // Toggle UI
                lampKnob.style.transform = 'translateX(0)';
                lampKnob.classList.replace('bg-amber-400', 'bg-zinc-500');
                lampTrack.classList.replace('bg-amber-900/40', 'bg-zinc-800');
                lampIcon.classList.remove('text-amber-400');
                lampIcon.setAttribute('icon', 'solar:lightbulb-minimalistic-linear');
                btnGlow.classList.remove('opacity-100');
                btnGlow.classList.add('opacity-0');
                
                // Text Gradient Cooling
                heroGradient.classList.remove('from-amber-100', 'to-amber-300');
                heroGradient.classList.add('from-zinc-200', 'to-zinc-500');
            }
        }


        // --- 3. TILT EFFECT (Micro-parallax) ---
        const tiltCards = document.querySelectorAll('.tilt-target');
        
        document.addEventListener('mousemove', (e) => {
            if(window.innerWidth < 768 || window.isReducedMotion) return;

            tiltCards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -2; 
                const rotateY = ((x - centerX) / centerX) * 2;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1, 1, 1)`;
            });
        });

        document.addEventListener('mouseleave', () => {
             tiltCards.forEach(card => {
                 card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
             });
        });

        // --- 4. MODAL LOGIC ---
        const modal = document.getElementById('contact-modal');
        const modalBackdrop = document.getElementById('modal-backdrop');
        const modalContent = document.getElementById('modal-content');
        const form = document.getElementById('project-form');
        const successMsg = document.getElementById('success-message');

        function openModal() {
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            setTimeout(() => {
                modalBackdrop.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95', 'opacity-0');
                modalContent.classList.add('scale-100', 'opacity-100');
            }, 10);
        }

        function closeModal() {
            modalBackdrop.classList.add('opacity-0');
            modalContent.classList.remove('scale-100', 'opacity-100');
            modalContent.classList.add('scale-95', 'opacity-0');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                    form.reset();
                }, 300);
            }, 300);
        }

        function handleFormSubmit(e) {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = "Envoi...";
            btn.disabled = true;

            setTimeout(() => {
                successMsg.classList.remove('hidden');
                successMsg.classList.add('flex');
                btn.innerText = originalText;
                btn.disabled = false;
            }, 800);
        }

        // --- 5. REDUCE MOTION TOGGLE ---
        window.isReducedMotion = false;
        const toggleBtn = document.getElementById('reduce-motion-toggle');
        const icon = document.getElementById('motion-icon');
        const body = document.body;

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            toggleMotion();
        }

        function toggleMotion() {
            window.isReducedMotion = !window.isReducedMotion;
            
            if(window.isReducedMotion) {
                body.classList.add('motion-reduce-active');
                icon.setAttribute('icon', 'solar:play-linear');
                toggleBtn.classList.add('text-zinc-400');
                tiltCards.forEach(c => c.style.transform = 'none');
            } else {
                body.classList.remove('motion-reduce-active');
                icon.setAttribute('icon', 'solar:pause-linear');
                toggleBtn.classList.remove('text-zinc-400');
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">

<div className="transition-opacity duration-1000 group-lamp-on">
<div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-indigo-900/10 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
<div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-purple-900/10 rounded-full blur-[100px] animate-blob-slow mix-blend-screen"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[45rem] h-[45rem] bg-blue-900/10 rounded-full blur-[100px] animate-blob-slower mix-blend-screen"></div>
</div>

<div className="absolute inset-0 w-full h-full opacity-0 pointer-events-none" id="lamp-glow-layer"></div>

<div className="dust-bg absolute inset-0 w-full h-full opacity-0 transition-opacity duration-1000 animate-float mix-blend-overlay" id="dust-layer"></div>

<div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-background opacity-90"></div>
<div className="noise-bg absolute inset-0 w-full h-full mix-blend-overlay"></div>
</div>

<main className="w-full max-w-5xl z-10 relative" id="main-container">

<header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 px-2 py-4 gap-4 sm:gap-0">

<div className="flex items-center gap-4 group cursor-default">
<div className="h-11 w-11 glass-card !bg-zinc-900/40 rounded-xl flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:border-zinc-600">

<div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-zinc-500 rounded-tr-sm opacity-50"></div>
<div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-zinc-500 rounded-bl-sm opacity-50"></div>
<span className="font-semibold text-white text-base tracking-tighter leading-none relative z-10 font-mono">
                        J<span className="text-zinc-500 font-light">T</span>
</span>

<div className="absolute bottom-3 right-3 h-0.5 w-0.5 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
</div>
<div className="flex flex-col justify-center h-10">
<span className="text-sm font-semibold text-white tracking-tight leading-tight">JULIEN THOMAS</span>
<div className="flex items-center gap-2">
<span className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] font-medium">Architect</span>
<span className="w-1 h-1 rounded-full bg-zinc-700"></span>
<span className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Systems</span>
</div>
</div>
</div>

<div className="flex items-center gap-4 self-end sm:self-auto">

<div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm">
<div className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
</div>
<span className="text-[10px] font-medium text-zinc-400 tracking-wide uppercase">Open to work</span>
</div>

<div className="hidden sm:block w-px h-6 bg-zinc-800"></div>

<button aria-label="Toggle Atmosphere" className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-700 transition-all cursor-pointer relative overflow-hidden" onclick="toggleLamp()">
<div className="relative z-10 flex items-center gap-2">
<span className="text-[11px] font-medium text-zinc-400 tracking-wide uppercase group-hover:text-zinc-300 transition-colors">Lampe</span>

<div className="w-8 h-4 rounded-full bg-zinc-800 inner-shadow relative transition-colors duration-500" id="lamp-track">
<div className="absolute top-0.5 left-0.5 w-3 h-3 rounded-full bg-zinc-500 shadow-sm transition-transform duration-500 ease-in-out" id="lamp-knob"></div>
</div>
<iconify-icon className="text-zinc-500 group-hover:text-zinc-300 transition-colors duration-500" icon="solar:lightbulb-minimalistic-linear" id="lamp-icon" width="14"></iconify-icon>
</div>

<div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 transition-opacity duration-500" id="btn-glow"></div>
</button>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-4 gap-4 pb-20" id="cards-grid">

<div className="glass-card spotlight-card col-span-1 md:col-span-2 md:row-span-2 rounded-3xl p-8 flex flex-col justify-between group cursor-default relative overflow-hidden tilt-target transition-all duration-700">
<div className="relative z-20">
<div className="flex justify-between items-start mb-6">
<div className="space-y-2">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-700/50 bg-zinc-800/20 backdrop-blur-sm text-[11px] text-zinc-400 uppercase tracking-wide">
<iconify-icon icon="solar:bolt-linear"></iconify-icon> Fast Builder
                            </div>
</div>
<iconify-icon className="text-zinc-600 animate-spin-slow transition-colors duration-700 group-hover:text-zinc-500" icon="solar:asteroid-linear" width="32"></iconify-icon>
</div>
<h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-4 leading-[1.1]">
                        Architecte de <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500 transition-all duration-700" id="hero-gradient">systèmes digitaux.</span>
</h1>
<div className="prose prose-invert prose-sm text-zinc-400 font-light leading-relaxed max-w-md mb-8">
                        Je transforme le chaos opérationnel en symphonie digitale grâce au No-code et à l'Intelligence Artificielle.
                    </div>
</div>
<div className="flex flex-wrap gap-3 relative z-20 mt-auto">
<button className="btn-primary flex-1 min-w-[140px] bg-zinc-100 text-black font-medium text-sm py-3 px-6 rounded-xl hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-[0_0_20px_rgba(255,255,255,0.1)]" onclick="openModal()">
                        Me contacter
                        <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<a className="flex-1 min-w-[140px] glass-card !bg-transparent hover:!bg-zinc-800/30 text-white font-medium text-sm py-3 px-6 rounded-xl transition-colors flex items-center justify-center gap-2" href="#projects">
                        Voir les projets
                    </a>
</div>
</div>

<div className="glass-card spotlight-card col-span-1 md:col-span-2 rounded-3xl p-6 flex flex-col justify-center relative group tilt-target">
<div className="flex items-center justify-between mb-4 relative z-20">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Réseaux</h3>
<iconify-icon className="text-zinc-600 transition-colors duration-700" icon="solar:users-group-rounded-linear" width="18"></iconify-icon>
</div>
<div className="grid grid-cols-5 gap-2 relative z-20">

<a className="aspect-square rounded-xl bg-zinc-800/30 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700/50 hover:scale-105 hover:border-white/10 transition-all duration-300 group/icon" href="#">
<iconify-icon icon="akar-icons:x-fill" width="20"></iconify-icon>
</a>
<a className="aspect-square rounded-xl bg-zinc-800/30 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700/50 hover:scale-105 hover:border-white/10 transition-all duration-300 group/icon" href="#">
<iconify-icon icon="akar-icons:linkedin-fill" width="20"></iconify-icon>
</a>
<a className="aspect-square rounded-xl bg-zinc-800/30 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700/50 hover:scale-105 hover:border-white/10 transition-all duration-300 group/icon" href="#">
<iconify-icon icon="akar-icons:instagram-fill" width="20"></iconify-icon>
</a>
<a className="aspect-square rounded-xl bg-zinc-800/30 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700/50 hover:scale-105 hover:border-white/10 transition-all duration-300 group/icon" href="#">
<iconify-icon icon="akar-icons:github-fill" width="20"></iconify-icon>
</a>
<a className="aspect-square rounded-xl bg-zinc-800/30 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700/50 hover:scale-105 hover:border-white/10 transition-all duration-300 group/icon" href="#">
<iconify-icon icon="akar-icons:dribbble-fill" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="glass-card spotlight-card col-span-1 md:col-span-2 rounded-3xl p-6 flex flex-col relative group tilt-target" id="projects">
<div className="flex items-center justify-between mb-6 relative z-20">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Derniers travaux</h3>
<iconify-icon className="text-zinc-600 transition-colors duration-700" icon="solar:folder-with-files-linear" width="18"></iconify-icon>
</div>
<div className="space-y-2 relative z-20">
<a className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/20 border border-white/5 hover:bg-zinc-700/30 hover:border-white/10 transition-all group/item" href="#">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-300 shadow-inner">
<iconify-icon icon="solar:document-text-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-white text-sm font-medium">CashPDFs</span>
<span className="text-xs text-zinc-500">Digital products &amp; Resources</span>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover/item:text-white transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
<a className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/20 border border-white/5 hover:bg-zinc-700/30 hover:border-white/10 transition-all group/item" href="#">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-300 shadow-inner">
<iconify-icon icon="solar:notebook-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-white text-sm font-medium">Bloknote.so</span>
<span className="text-xs text-zinc-500">AI &amp; Productivity Blog</span>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover/item:text-white transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
<a className="flex items-center justify-between p-3 rounded-xl bg-zinc-800/20 border border-white/5 hover:bg-zinc-700/30 hover:border-white/10 transition-all group/item" href="#">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-zinc-800/50 border border-white/5 flex items-center justify-center text-zinc-300 shadow-inner">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-white text-sm font-medium">MetricFlow</span>
<span className="text-xs text-zinc-500">SaaS Dashboard Kit</span>
</div>
</div>
<iconify-icon className="text-zinc-600 group-hover/item:text-white transition-colors" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="glass-card spotlight-card col-span-1 rounded-3xl p-6 flex flex-col relative group tilt-target">
<div className="flex items-center justify-between mb-6 relative z-20">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Stack</h3>
<iconify-icon className="text-zinc-600 transition-colors duration-700" icon="solar:layers-minimalistic-linear" width="18"></iconify-icon>
</div>
<div className="grid grid-cols-3 gap-3 relative z-20">
<div className="aspect-square rounded-lg bg-zinc-800/30 border border-white/5 flex items-center justify-center hover:bg-zinc-700/40 hover:border-white/10 transition-all" title="Notion">
<iconify-icon className="text-zinc-300" icon="simple-icons:notion" width="18"></iconify-icon>
</div>
<div className="aspect-square rounded-lg bg-zinc-800/30 border border-white/5 flex items-center justify-center hover:bg-zinc-700/40 hover:border-white/10 transition-all" title="Webflow">
<iconify-icon className="text-zinc-300" icon="simple-icons:webflow" width="18"></iconify-icon>
</div>
<div className="aspect-square rounded-lg bg-zinc-800/30 border border-white/5 flex items-center justify-center hover:bg-zinc-700/40 hover:border-white/10 transition-all" title="Figma">
<iconify-icon className="text-zinc-300" icon="simple-icons:figma" width="18"></iconify-icon>
</div>
<div className="aspect-square rounded-lg bg-zinc-800/30 border border-white/5 flex items-center justify-center hover:bg-zinc-700/40 hover:border-white/10 transition-all" title="Make">
<iconify-icon className="text-zinc-300" icon="simple-icons:make" width="18"></iconify-icon>
</div>
<div className="aspect-square rounded-lg bg-zinc-800/30 border border-white/5 flex items-center justify-center hover:bg-zinc-700/40 hover:border-white/10 transition-all" title="OpenAI">
<iconify-icon className="text-zinc-300" icon="simple-icons:openai" width="18"></iconify-icon>
</div>
<div className="aspect-square rounded-lg bg-zinc-800/30 border border-white/5 flex items-center justify-center hover:bg-zinc-700/40 hover:border-white/10 transition-all" title="More">
<span className="text-xs text-zinc-500 font-medium">+4</span>
</div>
</div>
</div>

<div className="glass-card spotlight-card col-span-1 rounded-3xl p-6 flex flex-col relative group tilt-target">
<div className="flex items-center justify-between mb-6 relative z-20">
<h3 className="text-xs font-medium text-zinc-500 uppercase tracking-widest">Expertise</h3>
<iconify-icon className="text-zinc-600 transition-colors duration-700" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</div>
<ul className="flex flex-col gap-3 relative z-20">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500/80" icon="solar:check-circle-linear" width="16"></iconify-icon>
                        Automations
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500/80" icon="solar:check-circle-linear" width="16"></iconify-icon>
                        No-code Dev
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500/80" icon="solar:check-circle-linear" width="16"></iconify-icon>
                        System Design
                    </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-emerald-500/80" icon="solar:check-circle-linear" width="16"></iconify-icon>
                        AI Integration
                    </li>
</ul>
</div>

<div className="glass-card spotlight-card col-span-1 md:col-span-2 rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden group tilt-target">

<iconify-icon className="absolute -right-8 -bottom-8 text-white/[0.03] rotate-12 transition-all duration-700 group-hover:rotate-0 group-hover:scale-110" icon="solar:letter-linear" width="200"></iconify-icon>
<div className="relative z-20">
<h3 className="text-xl font-medium text-white mb-2">La Newsletter</h3>
<p className="text-sm text-zinc-400 mb-6 max-w-sm">Rejoignez 2,000+ builders. Workflows, outils et veille IA, une fois par semaine.</p>
<form className="flex flex-col sm:flex-row gap-2">
<input className="bg-zinc-900/50 border border-zinc-700/50 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-zinc-500 focus:border-zinc-500 w-full transition-all" placeholder="email@exemple.com" required="" type="email"/>
<button className="bg-white text-black font-medium text-sm px-6 py-3 rounded-xl hover:bg-zinc-200 transition-colors whitespace-nowrap shadow-lg" type="submit">
                            S'inscrire
                        </button>
</form>
</div>
</div>

<div className="glass-card spotlight-card col-span-1 md:col-span-4 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6 group hover:scale-[1.005] transition-all duration-700 relative overflow-hidden tilt-target">

<div className="absolute inset-0 bg-gradient-to-r from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-20 flex flex-col gap-2">
<h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">Prêt à passer à la vitesse supérieure ?</h2>
<p className="text-zinc-500 font-normal">Discutons de vos challenges et construisons une solution sur mesure.</p>
</div>
<button className="btn-primary relative z-20 bg-zinc-100 text-black font-medium text-base py-4 px-8 rounded-full hover:bg-white transition-all duration-300 flex items-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.15)] group/cta" onclick="openModal()">
                    Démarrer un projet
                    <iconify-icon className="group-hover/cta:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>

<div className="col-span-1 md:col-span-4 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-xs mt-4 px-4 gap-4">
<div className="flex items-center gap-2">
<div className="flex space-x-0.5">
<div className="w-0.5 h-2 bg-zinc-600 animate-[pulse_1s_ease-in-out_infinite]"></div>
<div className="w-0.5 h-3 bg-zinc-600 animate-[pulse_1.2s_ease-in-out_infinite]"></div>
<div className="w-0.5 h-2 bg-zinc-600 animate-[pulse_0.8s_ease-in-out_infinite]"></div>
</div>
<span className="font-light">Listening to <span className="text-zinc-400">Hans Zimmer</span></span>
</div>
<div className="flex items-center gap-6">
<button className="hover:text-zinc-400 transition-colors flex items-center gap-1.5" id="reduce-motion-toggle" onclick="toggleMotion()">
<iconify-icon icon="solar:pause-linear" id="motion-icon"></iconify-icon>
                        Reduce Motion
                    </button>
<span className="font-light">© 2024 Julien THOMAS.</span>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 hidden items-center justify-center" id="contact-modal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity opacity-0" id="modal-backdrop" onclick="closeModal()"></div>

<div className="relative z-10 w-full max-w-lg mx-4 glass-card bg-[#18181b]/90 rounded-2xl p-0 shadow-2xl border border-zinc-700/50 transform scale-95 opacity-0 transition-all duration-300" id="modal-content">

<div className="flex justify-between items-center p-6 border-b border-white/5">
<div>
<h3 className="text-lg font-medium text-white">Démarrer un projet</h3>
<p className="text-xs text-zinc-500 mt-1">Remplissez ce formulaire pour une réponse rapide.</p>
</div>
<button className="text-zinc-500 hover:text-white transition-colors" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<form className="p-6 space-y-4" id="project-form" onsubmit="handleFormSubmit(event)">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Nom</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Email</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all" required="" type="email"/>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Type de projet</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-white appearance-none focus:outline-none focus:border-zinc-500 transition-all cursor-pointer">
<option>Automatisation / Workflow</option>
<option>Landing Page / Biolink</option>
<option>Conseil / Audit</option>
<option>Autre</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-zinc-500 pointer-events-none text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Budget</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-white appearance-none focus:outline-none focus:border-zinc-500 transition-all cursor-pointer">
<option>&lt; 500€</option>
<option>500€ – 1500€</option>
<option>1500€ – 5000€</option>
<option>5000€ +</option>
</select>
<iconify-icon className="absolute right-3 top-2.5 text-zinc-500 pointer-events-none text-xs" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-zinc-400 ml-1">Message</label>
<textarea className="w-full bg-zinc-900/50 border border-zinc-700/50 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all resize-none" rows="3"></textarea>
</div>
<div className="flex items-start gap-2 pt-1">
<input className="mt-0.5 rounded border-zinc-700 bg-zinc-900/50 text-emerald-500 focus:ring-0 focus:ring-offset-0" id="consent" type="checkbox"/>
<label className="text-xs text-zinc-500 cursor-pointer select-none" htmlFor="consent">J'accepte d'être recontacté pour discuter de ce projet.</label>
</div>
<div className="pt-2 flex gap-3">
<button className="flex-1 bg-white text-black font-medium text-sm py-2.5 rounded-lg hover:bg-zinc-200 transition-colors shadow-lg shadow-white/5" type="submit">
                        Envoyer
                    </button>
<button className="px-4 py-2.5 rounded-lg border border-zinc-700 text-zinc-400 text-sm hover:text-white hover:bg-zinc-800 transition-colors" type="button">
<iconify-icon icon="akar-icons:linkedin-fill" width="16"></iconify-icon>
</button>
</div>
</form>

<div className="hidden absolute inset-0 bg-[#18181b] rounded-2xl flex flex-col items-center justify-center text-center p-8 z-20" id="success-message">
<div className="h-12 w-12 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 mb-4">
<iconify-icon icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-white font-medium text-lg">Bien reçu !</h3>
<p className="text-zinc-500 text-sm mt-2 max-w-xs">Je reviens vers vous rapidement si le projet correspond à mon expertise.</p>
<button className="mt-6 text-xs text-zinc-400 hover:text-white underline underline-offset-4" onclick="closeModal()">Fermer</button>
</div>
</div>
</div>


    </>
  );
}
