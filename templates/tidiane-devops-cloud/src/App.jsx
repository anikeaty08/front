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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
bg: '#F5F5F7',
surface: '#FFFFFF',
primary: '#1A1A1A',
secondary: '#666666',
accent: '#EB3A14',
line: '#E5E5E5'
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
},
fontSize: {
'xxs': '0.625rem',
},
transitionTimingFunction: {
'spring': 'cubic-bezier(0.25, 0.8, 0.25, 1)',
}
}
}
}



        // --- Initialization ---
        const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
        requestAnimationFrame(raf);
        
        // --- Loader & Entrance ---
        let loadPct = 0;
        const loadInterval = setInterval(() => {
            loadPct += Math.floor(Math.random() * 5) + 1;
            if(loadPct > 100) loadPct = 100;
            document.getElementById('loader-pct').innerText = loadPct + '%';
            document.getElementById('loader-bar').style.width = loadPct + '%';
            
            if(loadPct === 100) {
                clearInterval(loadInterval);
                const tl = gsap.timeline();
                tl.to('#loader', { yPercent: -100, duration: 0.8, ease: 'power4.inOut', delay: 0.2 })
                  .to('.reveal-hero-text', { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out' }, "-=0.4")
                  .to('.reveal-hero', { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, "-=0.8");
            }
        }, 30);

        // --- Data State ---
        const dataMap = {
            nxo: { 
                role: "Apprenti DevOps",
                title: "NXO France", 
                tags: ["n8n", "Kubernetes", "GitLab CI", "Python", "MCP"],
                desc: [
                    "Automatisation de processus métier via n8n sur Cloud privé.",
                    "Traitement automatique de tickets Jira & intégration clients.",
                    "Scripting Python/Bash pour le monitoring avancé des infrastructures.",
                    "Déploiement via pipelines GitLab CI sur clusters Kubernetes.",
                    "Sensibilisation de l'équipe au protocole Model Context Protocol (MCP)."
                ],
                action: null
            },
            beauty: { 
                role: "Ingénieur IA & Cloud",
                title: "BeautyINC", 
                tags: ["GCP", "LoRA", "Docker", "Vercel", "MinIO"],
                desc: [
                    "Développement de l'application Studio Regard.",
                    "Fine-tuning de modèles via LoRA et gestion de datasets sur GCP.",
                    "Orchestration (PostgreSQL, MinIO) via Docker-compose.",
                    "CI/CD et déploiement continu sur Vercel."
                ],
                action: { text: "Launch App", url: "https://studio.regardbeauty.xyz" }
            },
            avanteam: { 
                role: "Alternant Chef de Projet",
                title: "Avanteam", 
                tags: [".NET", "CRM", "Windows Server", "Migration"],
                desc: [
                    "Évolution CRM et support technique écosystème .NET.",
                    "Pilotage de migrations et démonstrations techniques clients.",
                    "Gestion de projet technique et relation client."
                ],
                action: null
            }
        };

        const techStack = [
            "AWS", "AZURE", "GCP", "SCW",
            "K8S", "DOCKER", "HELM", "K3S",
            "TF", "TOFU", "ANSI", "GHA",
            "PY", "GO", "BASH", "TS",
            "LLM", "RAG", "OLLAMA", "N8N"
        ];

        let currentKey = 'nxo';

        // --- Interaction Logic ---
        function scrollToWorkshops() {
            lenis.scrollTo('#workshops');
        }

        function setWorkshop(key) {
            currentKey = key;
            const data = dataMap[key];
            
            // Visual feedback on cards
            ['nxo', 'beauty', 'avanteam'].forEach(k => {
                document.getElementById(`border-${k}`).style.opacity = k === key ? '1' : '0';
            });

            // Update Booking Panel with GSAP
            gsap.to('#booking', { opacity: 0.5, duration: 0.2, onComplete: () => {
                document.getElementById('panel-role').innerText = data.role;
                document.getElementById('panel-title').innerText = data.title;
                
                // Tags
                const tagsContainer = document.getElementById('panel-tags');
                tagsContainer.innerHTML = '';
                data.tags.forEach(tag => {
                    tagsContainer.innerHTML += `<span class="px-2 py-1 bg-gray-100 rounded text-xxs font-mono uppercase tracking-wide text-secondary">${tag}</span>`;
                });

                // Description
                const list = document.getElementById('panel-desc');
                list.innerHTML = '';
                data.desc.forEach(item => {
                    list.innerHTML += `<li class="flex items-start gap-2"><span class="mt-1.5 w-1 h-1 bg-accent rounded-full shrink-0"></span><span>${item}</span></li>`;
                });

                // Action Button
                const actionDiv = document.getElementById('panel-action');
                if(data.action) {
                    actionDiv.innerHTML = `<a href="${data.action.url}" target="_blank" class="inline-block bg-primary text-white px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all">${data.action.text}</a>`;
                } else {
                    actionDiv.innerHTML = '';
                }
                
                gsap.to('#booking', { opacity: 1, duration: 0.2 });
            }});
        }

        // Initialize
        setWorkshop('nxo');

        // Tech Stack Grid Generator
        const gridEl = document.getElementById('calendar-days');
        techStack.forEach((tech) => {
            const div = document.createElement('div');
            div.className = 'calendar-day group';
            div.innerHTML = `<span class="font-mono text-xs font-bold">${tech}</span>`;
            // Add subtle hover effect
            div.innerHTML += `<div class="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>`;
            gridEl.appendChild(div);
        });

        // Checkout/Contact Modal
        function toggleCheckout() {
            document.getElementById('checkout-modal').classList.toggle('active');
        }

        function toggleLang() {
            // Placeholder for lang toggle logic
            const btn = document.getElementById('lang-btn');
            btn.innerText = btn.innerText === 'EN' ? 'FR' : 'EN';
        }

        // Terminal
        const aiInput = document.getElementById('ai-input');
        const termOut = document.getElementById('terminal-output');

        aiInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const val = aiInput.value.trim().toLowerCase();
                if(!val) return;

                termOut.innerHTML += `<div class="mb-1"><span class="text-green-500">➜</span> <span class="text-white">${aiInput.value}</span></div>`;
                aiInput.value = '';

                if(val === 'contact') {
                    termOut.innerHTML += `<div class="mb-4 text-gray-300">Opening contact module...</div>`;
                    toggleCheckout();
                } else if (val === 'clear') {
                    termOut.innerHTML = '';
                } else {
                    termOut.innerHTML += `<div class="mb-4 text-gray-500">Command not found. Try 'contact' to reach me.</div>`;
                }
                termOut.scrollTop = termOut.scrollHeight;
            }
        });

        // Cursor
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorRing = document.querySelector('.cursor-ring');
        let mouseX = 0, mouseY = 0;
        let ringX = 0, ringY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX; mouseY = e.clientY;
            cursorDot.style.top = mouseY + 'px'; cursorDot.style.left = mouseX + 'px';
        });

        gsap.ticker.add(() => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            cursorRing.style.top = ringY + 'px';
            cursorRing.style.left = ringX + 'px';
        });

        document.querySelectorAll('a, button, .cursor-pointer, input').forEach(el => {
            el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
            el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
        });

    
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
      

<div className="loader-overlay" id="loader">
<div className="flex flex-col items-center gap-4">
<span className="uppercase text-xs text-secondary tracking-widest font-mono">Initializing System</span>
<div className="w-32 h-[1px] bg-gray-800 relative overflow-hidden">
<div className="absolute inset-0 bg-white w-0" id="loader-bar"></div>
</div>
<div className="text-4xl font-semibold tracking-tighter font-mono" id="loader-pct">0%</div>
</div>
</div>

<div className="cursor-dot"></div>
<div className="cursor-ring"></div>

<nav className="fixed top-0 left-0 w-full px-6 py-6 flex justify-between items-center z-40 mix-blend-exclusion text-white pointer-events-none">
<div className="pointer-events-auto">
<a className="font-mono text-sm font-bold uppercase tracking-widest leading-none hover:opacity-70 transition-opacity block" href="#">
                Tidiane<br/>Tambadou
            </a>
</div>
<div className="flex items-center gap-8 pointer-events-auto">
<div className="hidden md:flex bg-white/10 border-white/10 border rounded-full pt-2 pr-6 pb-2 pl-6 backdrop-blur-md gap-x-6 gap-y-6">
<a className="font-mono text-xs uppercase tracking-widest hover:text-accent transition-colors" href="#workshops">Experience</a>
<a className="uppercase hover:text-accent transition-colors text-xs tracking-widest font-mono" href="#booking">Projects</a>
</div>
<button className="font-mono text-xs font-bold uppercase tracking-widest hover:text-accent transition-colors w-8 text-right" id="lang-btn" onclick="toggleLang()">FR</button>
</div>
</nav>

<div className="checkout-modal" id="checkout-modal">
<div className="checkout-bg" onclick="toggleCheckout()"></div>
<div className="checkout-panel flex flex-col shadow-2xl">
<div className="p-8 border-b border-gray-100 flex justify-between items-center bg-white z-10">
<h2 className="font-semibold text-xl tracking-tight">Contact Me</h2>
<button className="p-2 hover:bg-gray-100 rounded-full transition-colors magnetic-el" onclick="toggleCheckout()">
<svg className="lucide lucide-x w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="flex-1 overflow-y-auto p-8 space-y-8">
<div className="bg-bg rounded-lg p-6 border border-gray-200">
<div className="flex justify-between items-start mb-4">
<div>
<span className="font-mono text-xxs uppercase tracking-widest text-secondary">Status</span>
<h3 className="text-lg font-semibold mt-1">Open to Work</h3>
</div>
<div className="text-right">
<iconify-icon icon="solar:user-circle-linear" width="32"></iconify-icon>
</div>
</div>
<div className="flex flex-col gap-2 text-sm text-secondary border-t border-gray-200 pt-3 mt-3">
<div className="flex items-center gap-2">
<iconify-icon icon="solar:phone-linear"></iconify-icon>
<span>06 12 14 67 03</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-primary transition-colors" href="mailto:tidianepro@outlook.fr">tidianepro@outlook.fr</a>
</div>
</div>
</div>
<div className="space-y-4">
<h4 className="font-mono text-xs uppercase text-secondary">Quick Actions</h4>
<a className="block w-full text-center bg-primary text-white py-4 rounded-lg font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors" href="mailto:tidianepro@outlook.fr">
                        Send Email
                    </a>
</div>
</div>
</div>
</div>

<header className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-20">

<canvas className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none" id="noise-canvas"></canvas>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F5F7] pointer-events-none"></div>
<div className="z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
<div className="mb-8 opacity-0 reveal-hero">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
<span className="font-mono text-xxs uppercase tracking-widest text-secondary">Mastère DevOps &amp; Cloud</span>
</span>
</div>
<h1 className="text-[10vw] leading-[0.85] font-semibold tracking-tighter text-primary mb-8 select-none mix-blend-darken">
<div className="overflow-hidden"><span className="block reveal-hero-text">Build.</span></div>
<div className="overflow-hidden"><span className="block reveal-hero-text text-secondary/40">Automate.</span></div>
<div className="overflow-hidden"><span className="block reveal-hero-text">Scale.</span></div>
</h1>
<p className="text-secondary md:text-lg text-balance reveal-hero text-base font-light opacity-0 max-w-lg mr-auto mb-12 ml-auto">
                Spécialiste de l'automatisation des processus métier, de la gestion d'infrastructures Cloud et du déploiement de solutions d'Intelligence Artificielle.
            </p>
<div className="opacity-0 reveal-hero magnetic-wrap">
<button className="magnetic-area px-8 py-4 bg-primary text-white rounded-full font-mono text-xs font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-300" onclick="scrollToWorkshops()">
                    View Experience
                </button>
</div>
</div>
</header>

<div className="py-6 border-y border-gray-200 bg-white overflow-hidden select-none">
<div className="marquee-container">
<div className="marquee-content font-mono text-xs uppercase tracking-[0.4em] text-secondary">
                AWS • Azure • GCP • Kubernetes • Docker • Terraform • Ansible • CI/CD • GitHub Actions • GitLab CI • Python • Go • Bash • MLOps • LLMs • RAG • Prompt Engineering • AWS • Azure • GCP • Kubernetes • Docker • Terraform • Ansible • CI/CD • GitHub Actions • GitLab CI • Python • Go • Bash • MLOps • LLMs • RAG • Prompt Engineering •
            </div>
</div>
</div>

<main className="max-w-[1600px] mx-auto p-6 md:p-12 space-y-32">

<section className="scroll-mt-24" id="workshops">
<div className="flex justify-between items-end mb-12 border-b border-gray-200 pb-6">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter">Experience</h2>
<span className="font-mono text-xs uppercase tracking-widest text-secondary hidden md:block">03 Roles</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group cursor-pointer relative" id="card-nxo" onclick="setWorkshop('nxo')">
<div className="aspect-[4/5] bg-white rounded-xl border border-gray-200 overflow-hidden relative transition-all duration-500 group-hover:shadow-2xl group-hover:translate-y-[-4px]">
<div className="absolute inset-0 bg-gradient-to-tr from-[#F0F4F8] to-white opacity-100 transition-opacity"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-700">
<iconify-icon className="text-blue-900" icon="solar:server-square-linear" strokeWidth="1" width="128"></iconify-icon>
</div>
<div className="absolute top-6 right-6 font-mono text-xs font-medium border border-black/10 px-2 py-1 rounded">2024–2026</div>
<div className="absolute bottom-0 left-0 w-full p-8">
<span className="font-mono text-xs uppercase text-accent mb-1 block">Apprenti DevOps</span>
<h3 className="text-2xl font-semibold tracking-tight mb-2">NXO France</h3>
<p className="text-sm text-secondary line-clamp-2">Automatisation Cloud privé, Monitoring et CI/CD.</p>
</div>
<div className="border-primary transition-opacity bg-transparent border-2 rounded-xl absolute top-0 right-0 bottom-0 left-0" id="border-nxo" style={{opacity: '1'}}></div>
</div>
</div>

<div className="group cursor-pointer relative" id="card-beauty" onclick="setWorkshop('beauty')">
<div className="aspect-[4/5] bg-white rounded-xl border border-gray-200 overflow-hidden relative transition-all duration-500 group-hover:shadow-2xl group-hover:translate-y-[-4px]">
<div className="absolute inset-0 bg-gradient-to-tr from-[#FFF0EB] to-white opacity-100 transition-opacity"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-700">
<iconify-icon className="text-accent" icon="solar:stars-minimalistic-linear" width="128"></iconify-icon>
</div>
<div className="absolute top-6 right-6 font-mono text-xs font-medium border border-black/10 px-2 py-1 rounded">2025–2026</div>
<div className="absolute bottom-0 left-0 w-full p-8">
<span className="font-mono text-xs uppercase text-accent mb-1 block">Ingénieur IA &amp; Cloud</span>
<h3 className="text-2xl font-semibold tracking-tight mb-2">BeautyINC</h3>
<p className="text-sm text-secondary line-clamp-2">Fine-tuning LoRA, Orchestration &amp; LLM Deployment.</p>
</div>
<div className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 transition-opacity" id="border-beauty"></div>
</div>
</div>

<div className="group cursor-pointer relative" id="card-avanteam" onclick="setWorkshop('avanteam')">
<div className="aspect-[4/5] bg-white rounded-xl border border-gray-200 overflow-hidden relative transition-all duration-500 group-hover:shadow-2xl group-hover:translate-y-[-4px]">
<div className="absolute inset-0 bg-gradient-to-tr from-[#F2F2F0] to-white opacity-100 transition-opacity"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-700">
<iconify-icon className="text-stone-600" icon="solar:code-square-linear" width="128"></iconify-icon>
</div>
<div className="absolute top-6 right-6 font-mono text-xs font-medium border border-black/10 px-2 py-1 rounded">2023–2024</div>
<div className="absolute bottom-0 left-0 w-full p-8">
<span className="font-mono text-xs uppercase text-accent mb-1 block">Alternant Chef de Projet</span>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Avanteam</h3>
<p className="text-sm text-secondary line-clamp-2">Écosystème .NET, CRM et Migrations.</p>
</div>
<div className="absolute inset-0 border-2 border-primary rounded-xl opacity-0 transition-opacity" id="border-avanteam"></div>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24 transition-opacity duration-500" id="booking" style={{opacity: '1'}}>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-8">
<div className="flex justify-between items-center mb-6">
<div className="flex items-center gap-4">
<h3 className="font-mono text-sm font-bold uppercase tracking-widest">Tech Stack &amp; Tools</h3>
</div>
<div className="flex items-center gap-4 text-xs font-mono text-secondary">
<span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-accent"></span> Core</span>
<span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-white border border-gray-300"></span> Tooling</span>
</div>
</div>
<div className="calendar-grid rounded-lg overflow-hidden" id="calendar-days">

</div>
</div>

<div className="lg:col-span-4 sticky top-24">
<div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm relative overflow-hidden h-full min-h-[400px]">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-200 to-transparent"></div>
<div className="mb-6">
<span className="font-mono text-xxs uppercase tracking-widest text-accent mb-2 block" id="panel-role">DevOps Apprentice</span>
<h3 className="text-2xl font-semibold tracking-tight leading-tight" id="panel-title">NXO France</h3>
<div className="flex flex-wrap gap-2 mt-3" id="panel-tags">

</div>
</div>
<div className="space-y-6 pt-4 border-t border-gray-100">
<h4 className="font-mono text-xs uppercase text-secondary tracking-widest">Key Responsibilities</h4>
<ul className="space-y-3 text-sm text-secondary" id="panel-desc">

</ul>
<div className="pt-6" id="panel-action">

</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#111] text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-20">
<iconify-icon icon="solar:diploma-verified-linear" width="96"></iconify-icon>
</div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 border-b border-white/10 pb-6 gap-6">
<div className="">
<h2 className="text-2xl font-semibold tracking-tight">Education &amp; Certifications</h2>
<p className="text-sm text-gray-500 mt-1 font-mono">Academic background and official validations.</p>
</div>
<div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10">
<span className="text-xs font-mono uppercase tracking-widest text-gray-400">AWS Prep</span>
<div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-sm">

<div className="bg-white/5 p-6 rounded-lg border border-white/5 relative overflow-hidden">
<span className="font-mono text-xs text-gray-500 uppercase">Certification</span>
<div className="text-lg font-medium mt-2">Solutions Architect Associate</div>
<div className="text-xs text-gray-400 mt-1">Amazon Web Services (In Progress)</div>
<div className="w-full bg-white/10 h-1 mt-4 rounded-full overflow-hidden">
<div className="bg-accent h-full w-[85%]"></div>
</div>
</div>

<div className="bg-white/5 p-6 rounded-lg border border-white/5">
<span className="font-mono text-xs text-gray-500 uppercase">Master's Degree</span>
<div className="text-lg font-medium mt-2">Infrastructure DevOps &amp; Cloud</div>
<div className="text-xs text-gray-400 mt-1">Sup de Vinci (2024-2026)</div>
</div>

<div className="bg-white/5 p-6 rounded-lg border border-white/5 flex flex-col justify-between">
<span className="font-mono text-xs text-gray-500 uppercase">Bachelor's Degree</span>
<div className="font-medium mt-2">Développement Informatique</div>
<div className="text-xs text-gray-400 mt-1">Sup de Vinci</div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto pt-10">
<div className="text-center mb-8">
<h2 className="text-2xl font-semibold tracking-tight mb-2">Projects Terminal</h2>
<p className="text-secondary text-sm">Execute commands to view project details.</p>
</div>
<div className="bg-[#1E1E1E] rounded-xl shadow-2xl overflow-hidden font-mono text-sm border border-gray-800">
<div className="bg-[#2A2A2A] px-4 py-2 flex items-center gap-2 border-b border-gray-700">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<span className="ml-4 text-xs text-gray-500">tidiane — zsh — 80x24</span>
</div>
<div className="p-6 h-[300px] overflow-y-auto flex flex-col" id="terminal-output">
<div className="mb-4 text-gray-400">
                        Welcome to Tidiane's Portfolio v2.0.0<br/>
                        Type 'list' to see projects or 'help'.
                    </div>
<div className="mb-2">
<span className="text-green-500">➜</span> <span className="text-cyan-400">~</span> <span className="text-gray-300">cat project_01.json</span>
</div>
<div className="mb-4 text-gray-300 border-l-2 border-accent pl-3">
<span className="text-accent">NAME:</span> GitOps Architecture &amp; Orchestration<br/>
<span className="text-secondary">STACK:</span> GitLab CI, OpenTofu, K3s, Helm, Cert-manager<br/>
<span className="text-secondary">DESC:</span> Build multi-images and auto-deployment on K3d cluster with SSL &amp; Traefik.
                    </div>
<div className="mb-2">
<span className="text-green-500">➜</span> <span className="text-cyan-400">~</span> <span className="text-gray-300">cat project_02.json</span>
</div>
<div className="mb-4 text-gray-300 border-l-2 border-blue-500 pl-3">
<span className="text-blue-500">NAME:</span> LLM Deployment on Azure AKS<br/>
<span className="text-secondary">STACK:</span> Terraform, Azure, Helm, Open WebUI<br/>
<span className="text-secondary">DESC:</span> Provisioning AKS via Terraform to host Open WebUI (Llama backend) with auto-scaling.
                    </div>
</div>
<div className="p-4 bg-[#252525] border-t border-gray-700 flex items-center gap-2">
<span className="text-green-500">➜</span>
<span className="text-cyan-400">~</span>
<input autocomplete="off" className="bg-transparent border-none outline-none text-white w-full focus:ring-0 placeholder-gray-600" id="ai-input" placeholder="Type 'contact' or 'clear'" type="text"/>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-gray-200 py-12 mt-20 text-center">
<div className="flex justify-center gap-6 mb-8 text-secondary">
<a className="hover:text-primary transition-colors" href="mailto:tidianepro@outlook.fr">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-primary transition-colors" href="#">
<iconify-icon icon="solar:phone-linear" width="20"></iconify-icon>
</a>
</div>
<p className="font-mono text-xs uppercase text-gray-400 tracking-widest">© 2025 Tidiane Tambadou. DevOps &amp; Cloud Engineer.</p>
</footer>


    </>
  );
}
