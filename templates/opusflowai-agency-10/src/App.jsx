import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



          !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


      // Initialize Icons
      lucide.createIcons();

      // Scroll Reveal Observer
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('active');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => {
          observer.observe(el);
      });

      // Tabs Logic
      function switchTab(tabName) {
          const contents = document.querySelectorAll('.tab-content');
          contents.forEach(content => content.classList.remove('active'));

          document.getElementById(`tab-content-${tabName}`).classList.add('active');

          const buttons = ['website', 'funnel', 'auto'];
          buttons.forEach(btn => {
              const el = document.getElementById(`tab-btn-${btn}`);
              if (btn === tabName) {
                  el.className = "px-8 py-2.5 text-xs font-medium rounded-full transition-all duration-300 bg-white/10 text-white shadow-lg border border-white/10";
              } else {
                  el.className = "px-8 py-2.5 text-xs font-medium rounded-full text-neutral-500 hover:text-white transition-all duration-300 hover:bg-white/5";
              }
          });
      }

      // Accordion Logic
      function toggleAccordion(id) {
          const content = document.getElementById(id);
          const icon = document.getElementById(`icon-${id}`);

          if (content.style.gridTemplateRows === "1fr") {
              content.classList.remove('open');
              content.style.gridTemplateRows = "0fr";
              icon.style.transform = 'rotate(0deg)';
          } else {
              content.classList.add('open');
              content.style.gridTemplateRows = "1fr";
              icon.style.transform = 'rotate(180deg)';
          }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-[50vh] md:h-screen -z-10 saturate-0 opacity-80" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}>
<div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="BqS5vTHVEpn6NiF0g8iJ"></div>

</div>
</div>

<div className="ambient-light"></div>
<div className="fixed inset-0 z-[-1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay pointer-events-none"></div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl supports-[backdrop-filter]:bg-black/30">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">

<div className="relative flex items-center justify-center w-8 h-8 overflow-hidden">
<svg className="w-full h-full scale-150" viewbox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="flowGradientHeader" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
<stop offset="50%" style={{stopColor: '#8b5cf6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<g transform="translate(80, 80) scale(0.6)">
<circle cx="0" cy="0" fill="url(#flowGradientHeader)" r="12"></circle>
<circle cx="-60" cy="-40" fill="#3b82f6" opacity="0.8" r="8"></circle>
<circle cx="-60" cy="0" fill="#3b82f6" opacity="0.8" r="8"></circle>
<circle cx="-60" cy="40" fill="#3b82f6" opacity="0.8" r="8"></circle>
<circle cx="60" cy="-40" fill="#ec4899" opacity="0.8" r="8"></circle>
<circle cx="60" cy="0" fill="#ec4899" opacity="0.8" r="8"></circle>
<circle cx="60" cy="40" fill="#ec4899" opacity="0.8" r="8"></circle>
<line opacity="0.4" stroke="url(#flowGradientHeader)" strokeWidth="2" x1="-60" x2="0" y1="-40" y2="0"></line>
<line opacity="0.6" stroke="url(#flowGradientHeader)" strokeWidth="2" x1="-60" x2="0" y1="0" y2="0"></line>
<line opacity="0.4" stroke="url(#flowGradientHeader)" strokeWidth="2" x1="-60" x2="0" y1="40" y2="0"></line>
<line opacity="0.4" stroke="url(#flowGradientHeader)" strokeWidth="2" x1="0" x2="60" y1="0" y2="-40"></line>
<line opacity="0.6" stroke="url(#flowGradientHeader)" strokeWidth="2" x1="0" x2="60" y1="0" y2="0"></line>
<line opacity="0.4" stroke="url(#flowGradientHeader)" strokeWidth="2" x1="0" x2="60" y1="0" y2="40"></line>
</g>
</svg>
</div>
<span className="font-semibold tracking-tighter text-white text-sm uppercase">
            OpusflowAI
          </span>
</div>
<nav className="hidden md:flex gap-8 text-[11px] font-medium tracking-wide uppercase text-neutral-500">
<a className="hover:text-white transition-colors duration-300" href="#process">
            Processus
          </a>
<a className="hover:text-white transition-colors duration-300" href="#solutions">
            Solutions
          </a>
<a className="hover:text-white transition-colors duration-300" href="#faq">
            Infos
          </a>
</nav>
<a className="hidden md:flex items-center justify-center px-4 py-1.5 bg-white/5 border border-white/10 text-white text-[11px] font-medium rounded hover:bg-white/10 hover:border-white/20 transition-all backdrop-blur-sm" href="#contact">
          Nous Contacter
        </a>
</div>
</header>

<section className="md:pt-48 md:pb-36 flex flex-col overflow-hidden text-center pt-32 pr-6 pb-24 pl-6 relative items-center">

<div className="relative z-10 flex flex-col items-center">

<div className="mb-8 opacity-60">
<img alt="Laurel Motif" className="w-16 h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3cb783e3-d3a8-4521-8174-9f5771f8e34b_320w.png?w=800&amp;q=80" style={{}}/>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter mb-8 max-w-5xl mx-auto leading-[0.95] drop-shadow-2xl">
          L'Intelligence qui
          <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-neutral-300 to-neutral-600">
            Propulse Votre Entreprise.
          </span>
</h1>
<p className="text-neutral-400 text-sm md:text-base max-w-xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
          Nous accompagnons les entreprises dans leur transition vers l'IA. 
          Remplacez les tâches manuelles par des systèmes autonomes, réduisez vos coûts 
          et faites évoluer vos opérations sans augmenter vos effectifs.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
<a className="group isolate inline-flex cursor-pointer overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_8px_rgba(139,92,246,0.35)] rounded-full relative shadow-[0_8px_40px_rgba(139,92,246,0.25)] w-full sm:w-auto justify-center" href="#contact" style={{-Spread: '90deg', -ShimmerColor: 'rgba(255,255,255,0.6)', -Radius: '9999px', -Speed: '4s', -Cut: '1px', -Bg: 'rgba(255, 255, 255, 0.05)'}}>
<div className="absolute inset-0">
<div className="absolute inset-[-200%] w-[400%] h-[400%] [animation:rotate-gradient_var(--speed)_linear_infinite]">
<div className="absolute inset-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))]"></div>
</div>
</div>
<div className="absolute rounded-full [background:var(--bg)] [inset:var(--cut)] backdrop-blur"></div>
<div className="z-10 flex gap-2 sm:w-auto overflow-hidden text-xs uppercase font-semibold tracking-wider text-white w-full py-3.5 px-8 relative items-center justify-center" style={{borderRadius: '9999px'}}>
<div style={{position: 'absolute', content: '\' \'', display: 'block', width: '200%', height: '200%', background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2), transparent)', animation: 'borderBeamRotation 4s infinite linear', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', pointerEvents: 'none'}}></div>
<div className="" style={{position: 'absolute', inset: '1px', background: 'rgba(139, 92, 246, 0.9)', borderRadius: '9999px', backdropFilter: 'blur(8px)'}}></div>
<span className="whitespace-nowrap relative z-10">Démarrer un Projet</span>
</div>
</a>
<a className="flex items-center justify-center gap-2 px-8 py-3.5 glass-panel text-neutral-300 hover:text-white text-xs uppercase font-medium tracking-wider rounded-lg transition-colors w-full sm:w-auto group" href="#solutions">
            Voir les Solutions
            <svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</a>
</div>
</div>
<div className="mt-32 h-px w-full max-w-[200px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
</section>

<section className="py-32 px-6 border-b border-white/5 relative z-10">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="reveal space-y-8">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tighter">
            Le fossé technologique vous coûte cher.
          </h2>
<div className="space-y-8">
<div className="flex items-start gap-5 group">
<div className="w-0.5 h-12 bg-neutral-800 group-hover:bg-neutral-700 transition-colors mt-1"></div>
<div>
<h4 className="text-white text-sm font-medium mb-2">
                  Le Piège Manuel
                </h4>
<p className="text-neutral-500 text-sm font-light leading-relaxed">
                  Passer des heures sur la saisie de données et les tâches répétitives 
                  draine vos marges et limite votre potentiel de croissance.
                </p>
</div>
</div>
<div className="flex items-start gap-5 group">
<div className="w-0.5 h-12 bg-[#8b5cf6] shadow-[0_0_15px_rgba(139,92,246,0.5)] mt-1"></div>
<div>
<h4 className="text-white text-sm font-medium mb-2">
                  L'Avantage OpusflowAI
                </h4>
<p className="text-neutral-400 text-sm font-light leading-relaxed">
                  En tirant parti des agents IA, votre entreprise fonctionne 24h/24 
                  avec zéro erreur humaine. Nous faisons le pont entre l'effort et le résultat.
                </p>
</div>
</div>
</div>
</div>
<div className="glass-panel p-10 rounded-2xl relative overflow-hidden group reveal delay-100">
<div className="absolute inset-0 bg-gradient-to-tr from-[#8b5cf6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="absolute top-0 right-0 p-6 opacity-10">
<svg className="lucide lucide-cpu w-16 h-16 text-white" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
<p className="text-xl md:text-2xl font-light text-neutral-200 leading-relaxed mb-8 relative z-10">
            "L'avenir appartient à ceux qui automatisent le banal pour se concentrer sur l'exceptionnel."
          </p>
<div className="flex items-center gap-3 relative z-10">
<div className="w-6 h-px bg-[#8b5cf6]"></div>
<span className="text-[10px] uppercase tracking-[0.2em] text-[#8b5cf6] font-semibold">
              OpusflowAI
            </span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-b border-white/5 relative bg-black/20">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl text-center reveal group hover:border-[#8b5cf6]/30 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tighter group-hover:text-[#8b5cf6] transition-colors">
              24/7
            </div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-[#8b5cf6]/50 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">
              Disponibilité
            </p>
<p className="text-[10px] text-neutral-500 leading-relaxed max-w-[180px] mx-auto">
              Votre entreprise travaille même quand vous dormez.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl text-center reveal delay-75 group hover:border-[#8b5cf6]/30 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tighter group-hover:text-[#8b5cf6] transition-colors">
              10x
            </div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-[#8b5cf6]/50 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">
              Productivité
            </p>
<p className="text-[10px] text-neutral-500 leading-relaxed max-w-[180px] mx-auto">
              Un agent IA gère la charge de travail d'une équipe entière.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl text-center reveal delay-150 group hover:border-[#8b5cf6]/30 transition-all duration-500">
<div className="text-4xl font-semibold text-white mb-3 tracking-tighter group-hover:text-[#8b5cf6] transition-colors">
              0%
            </div>
<div className="h-px w-8 bg-white/10 mx-auto my-4 group-hover:bg-[#8b5cf6]/50 transition-colors"></div>
<p className="text-xs text-neutral-400 uppercase tracking-widest font-medium mb-2">
              Erreurs
            </p>
<p className="text-[10px] text-neutral-500 leading-relaxed max-w-[180px] mx-auto">
              Éliminez l'erreur humaine des processus critiques.
            </p>
</div>
</div>
</div>
</section>
<section className="py-32 px-6 relative" id="solutions">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-20 reveal">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">
            Solutions Tactiques
          </h2>
<p className="text-neutral-500 text-sm">
            Sélectionnez une architecture pour inspecter le système.
          </p>
</div>

<div className="w-full reveal delay-100">
<div className="flex flex-col sm:flex-row justify-center mb-12">
<div className="inline-flex bg-neutral-900/40 backdrop-blur-md p-1.5 rounded-full border border-white/5">
<button className="px-8 py-2.5 text-xs font-medium rounded-full transition-all duration-300 bg-white/10 text-white shadow-lg border border-white/10" id="tab-btn-website" onclick="switchTab('website')">
                Flux de Travail
              </button>
<button className="px-8 py-2.5 text-xs font-medium rounded-full text-neutral-500 hover:text-white transition-all duration-300 hover:bg-white/5" id="tab-btn-funnel" onclick="switchTab('funnel')">
                Support IA
              </button>
<button className="px-8 py-2.5 text-xs font-medium rounded-full text-neutral-500 hover:text-white transition-all duration-300 hover:bg-white/5" id="tab-btn-auto" onclick="switchTab('auto')">
                Prospection
              </button>
</div>
</div>

<div className="tab-content active" id="tab-content-website">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end relative z-10">
<div>
<h3 className="text-2xl font-medium text-white mb-2">
                    Automatisation des Flux
                  </h3>
<p className="text-neutral-400 text-sm font-light">
                    Connectez vos applications. Automatisez la saisie. Gagnez du temps.
                  </p>
</div>
<div className="mt-6 md:mt-0 text-left md:text-right">
<span className="block text-3xl font-bold text-white tracking-tight">
                    - €
                  </span>
<span className="block text-[10px] uppercase tracking-wider text-[#8b5cf6] font-medium">
                    Investissement Initial
                  </span>
<span className="block text-[10px] text-neutral-500 mt-1 font-medium">
                    Devis personnalisé
                  </span>
</div>
</div>
</div>
</div>

<div className="tab-content" id="tab-content-funnel">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#8b5cf6]/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end relative z-10">
<div>
<h3 className="text-2xl font-medium text-white mb-2">
                    Support Client IA
                  </h3>
<p className="text-neutral-400 text-sm font-light">
                    Réponses instantanées. 24h/24. Clients satisfaits.
                  </p>
</div>
<div className="mt-6 md:mt-0 text-left md:text-right">
<span className="block text-3xl font-bold text-white tracking-tight">
                    - €
                  </span>
<span className="block text-[10px] uppercase tracking-wider text-[#8b5cf6] font-medium">
                    Configuration Unique
                  </span>
<span className="block text-[10px] text-neutral-500 mt-1 font-medium">
                    Sur Devis
                  </span>
</div>
</div>
</div>
</div>

<div className="tab-content" id="tab-content-auto">
<div className="glass-panel rounded-2xl p-8 md:p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
<div className="flex flex-col md:flex-row justify-between items-start md:items-end relative z-10">
<div>
<h3 className="text-2xl font-medium text-white mb-2">
                    Systèmes de Prospection
                  </h3>
<p className="text-neutral-400 text-sm font-light">
                    Remplissez votre pipeline en pilote automatique.
                  </p>
</div>
<div className="mt-6 md:mt-0 text-left md:text-right">
<span className="block text-3xl font-bold text-white tracking-tight">
                    Sur Devis
                  </span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6">
<div className="max-w-6xl mx-auto">
<div className="flex items-center gap-3 mb-10 reveal">
<div className="p-2 rounded bg-white/5 border border-white/10">
<svg className="lucide lucide-bot w-4 h-4 text-[#8b5cf6]" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<h2 className="text-2xl font-medium text-white tracking-tight">
            Intelligence Déployable
          </h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-xl hover:border-[#8b5cf6]/30 group transition-all duration-500 reveal">
<div className="w-10 h-10 rounded-lg bg-[#8b5cf6]/10 flex items-center justify-center mb-6 text-[#8b5cf6] group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-mic w-5 h-5" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" x2="12" y1="19" y2="22"></line></svg>
</div>
<h3 className="text-white font-medium mb-2">Agent Vocal</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">
              Interaction vocale naturelle. Idéal pour la qualification de leads ou le support téléphonique.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-white/20 group transition-all duration-500 reveal delay-75">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-database w-5 h-5" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">Agent RAG</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">
              Chatbot connecté à vos données capable d'exécuter des actions complexes automatiquement.
            </p>
</div>

<div className="glass-panel p-8 rounded-xl hover:border-white/20 group transition-all duration-500 reveal delay-100">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-6 text-neutral-300 group-hover:text-white group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-sparkles w-5 h-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M9 3v4"></path><path d="M2 7h6"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">Et plus encore</h3>
<p className="text-xs text-neutral-400 mb-6 font-light leading-relaxed">
              Solutions personnalisées développées selon vos besoins spécifiques et votre infrastructure.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-white/5 bg-neutral-900/10 backdrop-blur-sm" id="process">
<div className="max-w-7xl mx-auto">
<h2 className="text-2xl font-medium text-white tracking-tight mb-16 text-center reveal">
          Protocole d'Intégration
        </h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">

<div className="hidden md:block absolute top-6 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10"></div>

<div className="flex flex-col md:items-center md:text-center reveal">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              01
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
              Audit
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">
              Nous analysons vos flux de travail manuels actuels.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-75">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              02
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
              Stratégie
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">
              Nous concevons une architecture d'automatisation sur mesure.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-150">
<div className="w-12 h-12 bg-[#8b5cf6] rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_25px_rgba(139,92,246,0.4)] ring-4 ring-black/50">
              03
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
              Déploiement
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">
              Nous construisons, testons et livrons vos agents IA.
            </p>
</div>

<div className="flex flex-col md:items-center md:text-center reveal delay-200">
<div className="w-12 h-12 glass-panel rounded-full flex items-center justify-center text-sm font-bold text-white mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
              04
            </div>
<h3 className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
              Suivi
            </h3>
<p className="text-xs text-neutral-500 leading-relaxed max-w-[200px]">
              Suivi et ajustements inclus pendant le mois suivant la livraison.
            </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative overflow-hidden" id="contact">
<div className="relative max-w-4xl mx-auto text-center reveal">
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-8">
          Prêt à automatiser ?
        </h2>
<p className="text-neutral-400 mb-16 text-sm font-light">
          Discutons de vos besoins et trouvons la solution adaptée.
        </p>
<div className="glass-panel p-12 rounded-2xl relative overflow-hidden group max-w-2xl mx-auto border border-white/10 hover:border-[#8b5cf6]/30 transition-all duration-300">
<div className="absolute inset-0 bg-gradient-to-b from-[#8b5cf6]/5 to-transparent opacity-50"></div>
<div className="flex flex-col items-center justify-center gap-6 relative z-10">
<div className="p-4 rounded-full bg-white/5 border border-white/10 mb-2">
<svg className="lucide lucide-mail text-white" data-lucide="mail" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
</div>
<div className="text-center space-y-2">
<p className="text-xs text-neutral-500 uppercase tracking-widest font-medium">Email de contact</p>
<a className="text-2xl md:text-3xl font-medium text-white hover:text-[#8b5cf6] transition-colors tracking-tight block" href="mailto:contact@opusflowai.com">
                  contact@opusflowai.com
                </a>
</div>
<a className="mt-4 px-8 py-3 bg-white text-black text-xs font-bold uppercase tracking-wider rounded hover:bg-neutral-200 transition-colors inline-flex items-center gap-2" href="mailto:contact@opusflowai.com">
                Envoyer un message
                <svg className="w-3.5 h-3.5" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-black/40" id="faq">
<div className="max-w-2xl mx-auto reveal">
<h2 className="text-2xl font-medium text-white tracking-tight mb-12 text-center">
          Questions Fréquentes
        </h2>
<div className="space-y-3">

<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq1')">
              L'IA va-t-elle remplacer mon personnel ?
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform text-neutral-500" data-lucide="chevron-down" fill="none" height="24" id="icon-faq1" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq1">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed">
                Non. L'IA est conçue pour gérer les tâches répétitives à faible valeur ajoutée, 
                permettant à votre équipe de se concentrer sur la stratégie, le travail créatif 
                et les interactions clients de haut niveau. Elle augmente votre équipe, elle ne la remplace pas.
              </div>
</div>
</div>

<div className="border border-white/5 rounded-lg bg-white/[0.02] overflow-hidden">
<button className="w-full flex items-center justify-between p-5 text-left text-sm font-medium text-white hover:bg-white/5 transition-colors" onclick="toggleAccordion('faq3')">
              Combien de temps prend l'implémentation ?
              <svg className="lucide lucide-chevron-down w-4 h-4 transition-transform text-neutral-500" data-lucide="chevron-down" fill="none" height="24" id="icon-faq3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="accordion-content" id="faq3">
<div className="p-5 pt-0 text-sm text-neutral-400 font-light leading-relaxed">
                Les workflows simples peuvent être en ligne en 48 heures. Les systèmes 
                d'automatisation complexes prennent généralement de 14 à 21 jours pour être 
                entièrement définis, construits, testés et déployés.
              </div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5 text-center bg-black">
<div className="flex items-center justify-center gap-3 mb-6 opacity-50">

<div className="relative w-8 h-8">
<svg className="w-full h-full" viewbox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">
<defs>
<lineargradient id="flowGradientFooter" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
<stop offset="50%" style={{stopColor: '#8b5cf6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#ec4899', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
<g transform="translate(80, 80) scale(0.6)">
<circle cx="0" cy="0" fill="url(#flowGradientFooter)" r="12"></circle>
<circle cx="-60" cy="-40" fill="#3b82f6" opacity="0.8" r="8"></circle>
<circle cx="-60" cy="0" fill="#3b82f6" opacity="0.8" r="8"></circle>
<circle cx="-60" cy="40" fill="#3b82f6" opacity="0.8" r="8"></circle>
<circle cx="60" cy="-40" fill="#ec4899" opacity="0.8" r="8"></circle>
<circle cx="60" cy="0" fill="#ec4899" opacity="0.8" r="8"></circle>
<circle cx="60" cy="40" fill="#ec4899" opacity="0.8" r="8"></circle>
<line opacity="0.4" stroke="url(#flowGradientFooter)" strokeWidth="2" x1="-60" x2="0" y1="-40" y2="0"></line>
<line opacity="0.6" stroke="url(#flowGradientFooter)" strokeWidth="2" x1="-60" x2="0" y1="0" y2="0"></line>
<line opacity="0.4" stroke="url(#flowGradientFooter)" strokeWidth="2" x1="-60" x2="0" y1="40" y2="0"></line>
<line opacity="0.4" stroke="url(#flowGradientFooter)" strokeWidth="2" x1="0" x2="60" y1="0" y2="-40"></line>
<line opacity="0.6" stroke="url(#flowGradientFooter)" strokeWidth="2" x1="0" x2="60" y1="0" y2="0"></line>
<line opacity="0.4" stroke="url(#flowGradientFooter)" strokeWidth="2" x1="0" x2="60" y1="0" y2="40"></line>
</g>
</svg>
</div>
</div>
<p className="text-sm font-semibold text-white tracking-tight mb-2 uppercase">
        OpusflowAI
      </p>
<p className="text-[10px] text-neutral-600 mb-10">
        Construire le futur du travail.
      </p>
<div className="flex justify-center gap-8 text-[10px] text-neutral-600 uppercase tracking-widest font-medium">
<a className="hover:text-white transition-colors" href="#">CGV</a>
<a className="hover:text-white transition-colors" href="#">Confidentialité</a>
<a className="hover:text-white transition-colors" href="mailto:contact@opusflowai.com">Contact</a>
</div>
</footer>


    </>
  );
}
