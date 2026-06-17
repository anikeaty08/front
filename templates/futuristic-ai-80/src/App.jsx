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



    document.addEventListener('DOMContentLoaded', () => {
        // Initialize ParticlesJS
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.5, random: false },
                size: { value: 3, random: true },
                line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
                move: { enable: true, speed: 6, direction: "none", random: false, straight: false, out_mode: "out", bounce: false }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } }
            },
            retina_detect: true
        });

        const sections = document.querySelectorAll('.section');
        const dots = document.querySelectorAll('.progress-dot');
        const magneticElements = document.querySelectorAll('.magnetic');
        let currentIndex = 0;
        let isScrolling = false;
        let touchStartY = 0;
        
        // Initialize
        updateActiveDot(currentIndex);
        
        // Magnetic effect
        magneticElements.forEach(el => {
            el.addEventListener('mousemove', (e) => {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = 'translate(0px, 0px)';
            });
        });
        
        // Scroll event
        window.addEventListener('wheel', (e) => {
            if (isScrolling) return;
            
            isScrolling = true;
            if (e.deltaY > 0) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Touch events
        document.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        
        document.addEventListener('touchend', (e) => {
            if (isScrolling) return;
            
            const touchEndY = e.changedTouches[0].clientY;
            const diff = touchStartY - touchEndY;
            
            isScrolling = true;
            if (diff > 50) {
                if (currentIndex < sections.length - 1) {
                    currentIndex++;
                    changeSection(currentIndex);
                }
            } else if (diff < -50) {
                if (currentIndex > 0) {
                    currentIndex--;
                    changeSection(currentIndex);
                }
            }
            
            setTimeout(() => {
                isScrolling = false;
            }, 1200);
        });
        
        // Click on dots
        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'));
                currentIndex = index;
                changeSection(currentIndex);
            });
        });
        
        function changeSection(index) {
            sections.forEach(section => {
                section.classList.remove('active');
            });
            
            sections[index].classList.add('active');
            updateActiveDot(index);
            
            const reveals = sections[index].querySelectorAll('.reveal');
            reveals.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('active');
                }, i * 150);
            });
            
            sections.forEach((section, i) => {
                if (i !== index) {
                    const otherReveals = section.querySelectorAll('.reveal');
                    otherReveals.forEach(el => {
                        el.classList.remove('active');
                    });
                }
            });
        }
        
        function updateActiveDot(index) {
            dots.forEach(dot => {
                dot.classList.remove('active');
            });
            dots[index].classList.add('active');
        }
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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute inset-0 -z-10" id="particles-js">


<canvas className="particles-js-canvas-el" height="1468" style={{width: '100%', height: '100%'}} width="1872"></canvas></div></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#F04A3C] opacity-[0.03] blur-[100px] pointer-events-none z-0 animate-blob"></div>

<nav className="fixed top-0 w-full z-50 bg-[#1F2A36]/90 backdrop-blur-md border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 group" href="#">
<div className="relative w-8 h-8 flex items-center justify-center">
<div className="absolute inset-0 border border-[#F04A3C]/30 rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
<iconify-icon className="text-[#F04A3C] relative z-10" icon="lucide:cpu" width="18"></iconify-icon>
</div>
<span className="font-bold text-lg text-white tracking-tight font-['Space_Grotesk']">OSMOZ<span className="text-[#F04A3C]">.LAB</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium uppercase tracking-widest text-[#E6E6E6]/70">
<a className="hover:text-[#F04A3C] transition-colors" href="#mission">Mission</a>
<a className="hover:text-[#F04A3C] transition-colors" href="#actions">Protocoles</a>
<a className="hover:text-[#F04A3C] transition-colors" href="#agenda">Log</a>
</div>
<a className="text-xs font-mono font-medium text-[#F28C28] border border-[#F28C28]/30 bg-[#F28C28]/5 hover:bg-[#F28C28]/10 px-4 py-2 transition-all flex items-center gap-2" href="#participer">
<span className="w-1.5 h-1.5 bg-[#F28C28] rounded-full animate-pulse"></span>
                INITIALISER
            </a>
</div>
</nav>

<section className="border-x max-w-7xl border-white/5 mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-[2px] bg-[#F04A3C]/20 shadow-[0_0_20px_rgba(240,74,60,0.5)] animate-scan pointer-events-none z-0"></div>
<div className="max-w-4xl mx-auto text-center z-10 relative">

<div className="animate-fade-up delay-0">
<div className="inline-flex items-center gap-3 px-3 py-1.5 border border-[#F04A3C]/20 bg-[#F04A3C]/5 text-[#F04A3C] text-[10px] font-mono tracking-widest mb-8 uppercase">
<iconify-icon icon="lucide:activity" width="12"></iconify-icon>
                    Système opérationnel // Loi 1901
                    <span className="w-1.5 h-3 bg-[#F04A3C] animate-blink ml-1"></span>
</div>
</div>
<div className="animate-fade-up delay-100">
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-6">
                    L'IA comme vecteur <br/>
<span className="text-gradient">d'évolution systémique.</span>
</h1>
</div>
<div className="animate-fade-up delay-200">
<p className="text-lg md:text-xl text-[#E6E6E6]/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                    Osmoz restructure le paysage numérique local. Nous connectons l'intelligence artificielle aux besoins réels des citoyens et des industries.
                </p>
</div>
<div className="animate-fade-up delay-300 flex flex-col md:flex-row gap-4 justify-center items-center">
<div className="h-px w-12 bg-gradient-to-r from-transparent to-[#F04A3C]/50 hidden md:block"></div>
<span className="text-xs font-mono text-[#F28C28] opacity-80 group cursor-default">
                    [ <span className="group-hover:text-white transition-colors">SCROLL POUR ACCÉDER AUX DONNÉES</span> ]
                </span>
<div className="h-px w-12 bg-gradient-to-l from-transparent to-[#F04A3C]/50 hidden md:block"></div>
</div>
</div>
</section>

<section className="px-6 pb-24 relative z-10 max-w-7xl mx-auto border-x border-white/5">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-up delay-500">

<a className="group tech-card p-6" href="#actions">
<div className="absolute top-0 right-0 p-2 opacity-20">
<iconify-icon icon="lucide:corner-right-up" width="16"></iconify-icon>
</div>
<div className="mb-5 p-2 bg-[#1F2A36] w-fit border border-white/10 text-white">
<iconify-icon icon="lucide:graduation-cap" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-['Space_Grotesk']">Civils &amp; Étudiants</h3>
<p className="text-xs text-[#E6E6E6]/60 leading-relaxed mb-6 font-light">
                    Modules de formation open-source et accès aux infrastructures de test.
                </p>
<div className="flex items-center text-[10px] font-mono font-bold text-[#F04A3C] uppercase tracking-widest gap-2">
                    &gt; Accéder au module
                </div>
</a>

<a className="group tech-card p-6 border-[#F04A3C]/20 bg-[#2C3644]" href="#actions">
<div className="absolute top-0 right-0 p-2 opacity-40 text-[#F04A3C]">
<iconify-icon icon="lucide:crosshair" width="16"></iconify-icon>
</div>
<div className="mb-5 p-2 bg-[#F04A3C]/10 w-fit border border-[#F04A3C]/20 text-[#F04A3C]">
<iconify-icon icon="lucide:building-2" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-['Space_Grotesk']">Industries &amp; PME</h3>
<p className="text-xs text-[#E6E6E6]/60 leading-relaxed mb-6 font-light">
                    Intégration technologique, audit de performance et scaling IA.
                </p>
<div className="flex items-center text-[10px] font-mono font-bold text-[#F04A3C] uppercase tracking-widest gap-2">
                    &gt; Démarrer diagnostic
                </div>
</a>

<a className="group tech-card p-6" href="#participer">
<div className="absolute top-0 right-0 p-2 opacity-20">
<iconify-icon icon="lucide:share-2" width="16"></iconify-icon>
</div>
<div className="mb-5 p-2 bg-[#1F2A36] w-fit border border-white/10 text-white">
<iconify-icon icon="lucide:network" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2 font-['Space_Grotesk']">Écosystème</h3>
<p className="text-xs text-[#E6E6E6]/60 leading-relaxed mb-6 font-light">
                    Synergie territoriale et développement du maillage technologique.
                </p>
<div className="flex items-center text-[10px] font-mono font-bold text-[#F04A3C] uppercase tracking-widest gap-2">
                    &gt; Initier connexion
                </div>
</a>
</div>
</section>

<section className="py-24 bg-[#1F2A36] relative border-y border-white/5" id="mission">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-6 flex items-center gap-3">
<span className="w-1 h-8 bg-[#F04A3C]"></span>
                    Réduire la fracture <br/> technologique.
                </h2>
<div className="space-y-6 text-[#E6E6E6]/70 text-base font-light leading-relaxed">
<p>
                        L'accélération exponentielle de l'IA génère un risque de décrochage. Notre algorithme social vise à maintenir l'équilibre en distribuant la connaissance.
                    </p>
<p className="border-l border-[#F28C28] pl-4 text-[#F28C28]/90 italic">
                        "L'innovation sans inclusion est une erreur système."
                    </p>
</div>
</div>

<div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5">
<div className="bg-[#2C3644] p-8 text-center hover:bg-[#1F2A36] transition-colors relative group">
<iconify-icon className="absolute top-4 left-4 text-white/10 group-hover:text-[#F04A3C]/20 transition-colors" icon="lucide:users" width="24"></iconify-icon>
<div className="text-3xl font-bold text-white mb-1 font-mono">1.5k</div>
<div className="text-[10px] text-[#F28C28] uppercase tracking-widest font-mono">Utilisateurs Actifs</div>
</div>
<div className="bg-[#2C3644] p-8 text-center hover:bg-[#1F2A36] transition-colors relative group">
<iconify-icon className="absolute top-4 left-4 text-white/10 group-hover:text-[#F04A3C]/20 transition-colors" icon="lucide:briefcase" width="24"></iconify-icon>
<div className="text-3xl font-bold text-white mb-1 font-mono">045</div>
<div className="text-[10px] text-[#F28C28] uppercase tracking-widest font-mono">PME Intégrées</div>
</div>
<div className="bg-[#2C3644] p-8 text-center hover:bg-[#1F2A36] transition-colors relative group">
<iconify-icon className="absolute top-4 left-4 text-white/10 group-hover:text-[#F04A3C]/20 transition-colors" icon="lucide:code-2" width="24"></iconify-icon>
<div className="text-3xl font-bold text-white mb-1 font-mono">012</div>
<div className="text-[10px] text-[#F28C28] uppercase tracking-widest font-mono">Hackathons</div>
</div>
<div className="bg-[#2C3644] p-8 text-center flex flex-col justify-center items-center relative overflow-hidden">
<div className="absolute inset-0 bg-[#F04A3C]/10"></div>
<iconify-icon className="text-[#F04A3C] mb-2" icon="lucide:award" width="24"></iconify-icon>
<div className="text-[10px] text-white uppercase tracking-widest font-bold font-mono">Certifié Tech</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="actions">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/5 pb-6">
<div>
<div className="text-[#F04A3C] font-mono text-xs mb-2">:: PROTOCOLES D'INTERVENTION</div>
<h2 className="text-3xl font-medium text-white tracking-tight">Modes d'Action</h2>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[280px]">

<div className="md:col-span-2 tech-card p-8 flex flex-col justify-between group">

<div className="absolute right-0 top-0 w-32 h-32 border-l border-b border-white/5 rounded-bl-[40px]"></div>
<div className="relative z-10">
<div className="flex items-center gap-2 mb-4">
<span className="px-1.5 py-0.5 text-[9px] font-mono font-bold bg-white/5 text-white border border-white/10 uppercase">Public : Open</span>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Workshops &amp; Bootcamps</h3>
<p className="text-[#E6E6E6]/60 text-sm max-w-md font-light">
                        Cycles d'apprentissage intensifs. Du No-Code à l'architecture de données complexes.
                    </p>
</div>
<div className="relative z-10 grid grid-cols-2 gap-4 mt-8 border-t border-white/5 pt-4">
<div className="flex items-center gap-3 text-xs text-[#E6E6E6] font-mono">
<span className="text-[#F04A3C]">[X]</span> Python Basics
                    </div>
<div className="flex items-center gap-3 text-xs text-[#E6E6E6] font-mono">
<span className="text-[#F04A3C]">[X]</span> Data Analysis
                    </div>
<div className="flex items-center gap-3 text-xs text-[#E6E6E6] font-mono">
<span className="text-[#F04A3C]">[X]</span> IA Ethics
                    </div>
</div>
</div>

<div className="md:row-span-2 tech-card p-8 flex flex-col relative bg-[#1F2A36]">
<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#F04A3C] to-[#F28C28]"></div>
<div className="relative z-10 h-full flex flex-col">
<div className="mb-auto">
<iconify-icon className="text-[#F28C28] mb-4" icon="lucide:settings-2" width="24"></iconify-icon>
<h3 className="text-xl font-medium text-white mb-3">Accélération B2B</h3>
<p className="text-[#E6E6E6]/60 text-xs leading-relaxed mb-6 font-light">
                            Identification de cas d'usage à fort ROI. Implémentation de solutions pragmatiques.
                        </p>
</div>
<div className="bg-[#1F2A36] p-4 border border-[#F28C28]/20 mb-4 relative">
<div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-[#F28C28]"></div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-[#F28C28]"></div>
<div className="text-[9px] text-[#F28C28] mb-1 font-mono uppercase">Batch #04</div>
<div className="text-white text-sm font-medium flex justify-between items-center">
                            Octobre 2024
                            <span className="text-[#F04A3C] text-[10px] animate-pulse">● 2 slots</span>
</div>
</div>
<button className="w-full py-3 bg-[#F04A3C] hover:bg-[#d63f32] text-white text-xs font-mono tracking-widest uppercase transition-colors">
                        Initialiser
                    </button>
</div>
</div>

<div className="tech-card p-8 flex flex-col justify-center cursor-pointer group hover:bg-[#2C3644]">
<iconify-icon className="text-white mb-4 group-hover:text-[#F04A3C] transition-colors" icon="lucide:mic-2" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Conférences</h3>
<p className="text-xs text-[#E6E6E6]/60 font-light">Décryptage technique et débats de société.</p>
</div>

<div className="tech-card p-8 flex flex-col justify-center cursor-pointer group hover:bg-[#2C3644]">
<iconify-icon className="text-white mb-4 group-hover:text-[#F04A3C] transition-colors" icon="lucide:heart-handshake" width="28"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Inclusion</h3>
<p className="text-xs text-[#E6E6E6]/60 font-light">Programmes de reconversion et d'accès au numérique.</p>
</div>
</div>
</section>

<section className="py-24 bg-[#1F2A36] relative border-t border-white/5" id="agenda">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl font-medium text-white tracking-tight">Logs Événements</h2>
<a className="text-xs font-mono text-[#F28C28] hover:text-white flex items-center gap-2 transition-colors" href="#">
                    VOIR_TOUT <iconify-icon icon="lucide:arrow-right" width="12"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<article className="group tech-card p-0 bg-[#2C3644] border border-white/5">
<div className="aspect-video bg-[#1F2A36] relative overflow-hidden border-b border-white/5">
<div className="absolute top-0 right-0 bg-[#F04A3C] text-white px-3 py-1 text-[10px] font-mono font-bold">HACKATHON</div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
<iconify-icon className="text-white" icon="lucide:cpu" width="64"></iconify-icon>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-3 text-[10px] font-mono text-[#F28C28]">
<span>:: 12 OCT</span>
<span>:: 48H CYCLE</span>
</div>
<h3 className="text-base font-medium text-white mb-2 group-hover:text-[#F04A3C] transition-colors">Tech for Good : Carbon</h3>
<p className="text-xs text-[#E6E6E6]/60 mb-6 font-light">Optimisation algorithmique pour empreinte carbone.</p>
<button className="w-full py-2 border border-white/10 text-[10px] text-white hover:bg-white hover:text-[#1F2A36] uppercase tracking-wider transition-all">
                            S'inscrire
                        </button>
</div>
</article>

<article className="group tech-card p-0 bg-[#2C3644] border border-white/5">
<div className="aspect-video bg-[#1F2A36] relative overflow-hidden border-b border-white/5">
<div className="absolute top-0 right-0 bg-[#2C3644] border border-white/10 text-white px-3 py-1 text-[10px] font-mono font-bold">MEETUP</div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
<iconify-icon className="text-white" icon="lucide:messages-square" width="64"></iconify-icon>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-3 text-[10px] font-mono text-[#F28C28]">
<span>:: 24 OCT</span>
<span>:: T-1830</span>
</div>
<h3 className="text-base font-medium text-white mb-2 group-hover:text-[#F04A3C] transition-colors">GenAI : Realities</h3>
<p className="text-xs text-[#E6E6E6]/60 mb-6 font-light">Débat technique chercheurs vs entrepreneurs.</p>
<button className="w-full py-2 border border-white/10 text-[10px] text-white hover:bg-white hover:text-[#1F2A36] uppercase tracking-wider transition-all">
                            S'inscrire
                        </button>
</div>
</article>

<article className="group tech-card p-0 bg-[#2C3644] border border-white/5">
<div className="aspect-video bg-[#1F2A36] relative overflow-hidden border-b border-white/5">
<div className="absolute top-0 right-0 bg-[#2C3644] border border-white/10 text-white px-3 py-1 text-[10px] font-mono font-bold">WORKSHOP</div>
<div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
<iconify-icon className="text-white" icon="lucide:terminal-square" width="64"></iconify-icon>
</div>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-3 text-[10px] font-mono text-[#F28C28]">
<span>:: 05 NOV</span>
<span>:: T-1400</span>
</div>
<h3 className="text-base font-medium text-white mb-2 group-hover:text-[#F04A3C] transition-colors">Python 101</h3>
<p className="text-xs text-[#E6E6E6]/60 mb-6 font-light">Structure de données et syntaxe de base.</p>
<button className="w-full py-2 border border-white/10 text-[10px] text-white hover:bg-white hover:text-[#1F2A36] uppercase tracking-wider transition-all">
                            S'inscrire
                        </button>
</div>
</article>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto" id="participer">
<div className="bg-[#2C3644] border border-white/10 p-1 md:p-1 relative">

<div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#F04A3C]"></div>
<div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#F04A3C]"></div>
<div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#F04A3C]"></div>
<div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#F04A3C]"></div>
<div className="bg-[#1F2A36]/80 p-8 md:p-12 text-center backdrop-blur-sm">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">Interface de Connexion</h2>
<p className="text-[#E6E6E6]/50 mb-10 text-sm font-mono">Sélectionner le profil utilisateur pour routage.</p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">

<label className="cursor-pointer group relative">
<input className="peer sr-only" name="contact_type" type="radio"/>
<div className="p-4 border border-white/10 bg-[#2C3644] hover:border-[#F04A3C] peer-checked:border-[#F04A3C] peer-checked:bg-[#F04A3C]/10 transition-all h-full flex items-center gap-4">
<div className="text-[#E6E6E6] group-hover:text-[#F04A3C] transition-colors">
<iconify-icon icon="lucide:user" width="20"></iconify-icon>
</div>
<div>
<div className="text-white font-medium text-sm">Adhésion Membre</div>
<div className="text-[#E6E6E6]/40 text-[10px] font-mono">INDIVIDUEL / STUDENT</div>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" name="contact_type" type="radio"/>
<div className="p-4 border border-white/10 bg-[#2C3644] hover:border-[#F04A3C] peer-checked:border-[#F04A3C] peer-checked:bg-[#F04A3C]/10 transition-all h-full flex items-center gap-4">
<div className="text-[#E6E6E6] group-hover:text-[#F04A3C] transition-colors">
<iconify-icon icon="lucide:building" width="20"></iconify-icon>
</div>
<div>
<div className="text-white font-medium text-sm">Support Technique</div>
<div className="text-[#E6E6E6]/40 text-[10px] font-mono">CORPORATE / PME</div>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" name="contact_type" type="radio"/>
<div className="p-4 border border-white/10 bg-[#2C3644] hover:border-[#F04A3C] peer-checked:border-[#F04A3C] peer-checked:bg-[#F04A3C]/10 transition-all h-full flex items-center gap-4">
<div className="text-[#E6E6E6] group-hover:text-[#F04A3C] transition-colors">
<iconify-icon icon="lucide:graduation-cap" width="20"></iconify-icon>
</div>
<div>
<div className="text-white font-medium text-sm">Mentorat</div>
<div className="text-[#E6E6E6]/40 text-[10px] font-mono">EXPERTS / PARTAGE</div>
</div>
</div>
</label>

<label className="cursor-pointer group relative">
<input className="peer sr-only" name="contact_type" type="radio"/>
<div className="p-4 border border-white/10 bg-[#2C3644] hover:border-[#F04A3C] peer-checked:border-[#F04A3C] peer-checked:bg-[#F04A3C]/10 transition-all h-full flex items-center gap-4">
<div className="text-[#E6E6E6] group-hover:text-[#F04A3C] transition-colors">
<iconify-icon icon="lucide:radio" width="20"></iconify-icon>
</div>
<div>
<div className="text-white font-medium text-sm">Presse &amp; Info</div>
<div className="text-[#E6E6E6]/40 text-[10px] font-mono">MEDIA / PUBLIC</div>
</div>
</div>
</label>
</div>
<div className="mt-8 flex justify-center">
<button className="bg-[#F04A3C] hover:bg-[#d63f32] text-white px-12 py-3 text-sm font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(240,74,60,0.3)] hover:shadow-[0_0_30px_rgba(240,74,60,0.5)] skew-x-[-10deg]">
<span className="skew-x-[10deg] inline-block">Exécuter</span>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#1F2A36] border-t border-white/5 pt-16 pb-8 px-6 text-sm relative overflow-hidden">

<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 mb-12 relative z-10">
<div className="max-w-sm">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-3 h-3 bg-[#F04A3C]"></div>
<span className="font-bold text-xl text-white font-['Space_Grotesk']">OSMOZ</span>
</a>
<p className="text-[#E6E6E6]/50 text-xs leading-relaxed font-mono">
                    Association Loi 1901. <br/>
                    ID: #8392-A <br/>
                    Status: Online
                </p>
</div>
<div className="flex gap-16 text-xs">
<div>
<h4 className="text-white font-bold mb-4 uppercase tracking-wider">Organisation</h4>
<ul className="space-y-2 text-[#E6E6E6]/50">
<li><a className="hover:text-[#F04A3C] transition-colors" href="#">Database</a></li>
<li><a className="hover:text-[#F04A3C] transition-colors" href="#">Unités</a></li>
<li><a className="hover:text-[#F04A3C] transition-colors" href="#">Rapports</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-bold mb-4 uppercase tracking-wider">Liens</h4>
<ul className="space-y-2 text-[#E6E6E6]/50">
<li><a className="hover:text-[#F04A3C] transition-colors" href="#">Git</a></li>
<li><a className="hover:text-[#F04A3C] transition-colors" href="#">Press Kit</a></li>
<li><a className="hover:text-[#F04A3C] transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-[#E6E6E6]/30 uppercase font-mono relative z-10">
<p>© 2024 OSMOZ SYSTEM. ALL RIGHTS RESERVED.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Legal</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</footer>

    </>
  );
}
