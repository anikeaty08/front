import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', function() {
        const words = ["sur ChatGPT", "sur Gemini", "sur Claude", "sur Perplexity", "sur Copilot"];
        let index = 0;
        const el = document.getElementById('rotating-text-unique');
        if (el) {
            setInterval(() => {
                el.classList.add('opacity-0');
                setTimeout(() => {
                    index = (index + 1) % words.length;
                    el.textContent = words[index];
                    el.classList.remove('opacity-0');
                }, 300);
            }, 2000);
        }
    });
    


        document.addEventListener('DOMContentLoaded', () => {
            const scrollTargets = document.querySelectorAll('.scroll-blur-target');

            const handleScrollEffects = () => {
                if (window.innerWidth < 1024) {
                    scrollTargets.forEach(target => {
                        target.style.filter = '';
                        target.style.opacity = '';
                        target.style.transform = '';
                    });
                    return; 
                }

                scrollTargets.forEach(target => {
                    const rect = target.getBoundingClientRect();
                    const distanceFromTop = rect.top;
                    const startBlurAt = -150; 
                    
                    if (distanceFromTop < startBlurAt) {
                        const distancePastTrigger = Math.abs(distanceFromTop - startBlurAt);
                        const leaveProgress = Math.min(distancePastTrigger / 500, 1);
                        
                        if (leaveProgress > 0) {
                            target.style.filter = `blur(${leaveProgress * 8}px)`;
                            target.style.opacity = 1 - leaveProgress;
                            target.style.transform = `scale(${1 - (leaveProgress * 0.05)}) translateY(${leaveProgress * 10}px)`;
                        }
                    } else {
                        target.style.filter = 'blur(0px)';
                        target.style.opacity = '1';
                        target.style.transform = 'none';
                    }
                });
            };

            let ticking = false;
            window.addEventListener('scroll', () => {
                if (!ticking) {
                    window.requestAnimationFrame(() => {
                        handleScrollEffects();
                        ticking = false;
                    });
                    ticking = true;
                }
            }, { passive: true });
            
            window.addEventListener('resize', () => {
                handleScrollEffects();
            });

            handleScrollEffects();
        });
    


        document.addEventListener('DOMContentLoaded', () => {
            const chatDisplay = document.getElementById('demo-chat-display');
            if(!chatDisplay) return;

            const scenarios = [
                {
                    question: "Quels sont les meilleurs plombiers sur Paris 11 ?",
                    response: `<p class="mb-2">Pour des interventions fiables dans le 11ème, voici les artisans les mieux notés basés sur la qualité de service et les avis vérifiés :</p>
                               <ol class="list-decimal pl-4 space-y-1">
                                   <li><strong>AlloPlombier Paris</strong> - Réactif et agréé assurances.</li>
                                   <li class="text-indigo-400 font-semibold bg-indigo-500/10 inline-block px-1 rounded">Artisans Confiance 11</li>
                                   <li>Plomberie Express du Marais</li>
                               </ol>`
                },
                {
                    question: "Quel est le meilleur CRM pour une PME de services ?",
                    response: `<p class="mb-2">Selon vos besoins (suivi client et facturation), les solutions leaders du marché actuels sont :</p>
                               <ul class="space-y-2 mt-2">
                                   <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>Salesforce Essentials</li>
                                   <li class="flex items-center gap-2 p-2 bg-indigo-900/20 border border-indigo-500/30 rounded-lg"><div class="w-1.5 h-1.5 rounded-full bg-indigo-400"></div><span class="text-indigo-300 font-medium">HubSpot CRM (Recommandé)</span></li>
                                   <li class="flex items-center gap-2"><div class="w-1.5 h-1.5 rounded-full bg-neutral-600"></div>Zoho CRM</li>
                               </ul>`
                },
                {
                    question: "Conseille une entreprise de soutien scolaire sérieuse.",
                    response: `<p class="mb-2">En analysant les retours parents et les taux de réussite 2024, voici les organismes de confiance :</p>
                               <div class="flex flex-col gap-2 mt-2">
                                   <div class="bg-neutral-800/50 p-3 rounded text-xs text-neutral-400">Acadomia</div>
                                   <div class="bg-indigo-600/10 border border-indigo-500/20 p-3 rounded text-sm text-indigo-200 font-medium flex justify-between items-center">
                                        Cours Légendre
                                        <iconify-icon icon="lucide:check-circle" class="text-indigo-400"></iconify-icon>
                                   </div>
                                   <div class="bg-neutral-800/50 p-3 rounded text-xs text-neutral-400">Complétude</div>
                               </div>`
                }
            ];

            let scenarioIndex = 0;

            const sleep = ms => new Promise(r => setTimeout(r, ms));

            async function typeText(text) {
                // Create user bubble
                const bubble = document.createElement('div');
                bubble.className = "self-end bg-neutral-800 text-white px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] text-sm leading-relaxed fade-in-up shadow-sm";
                bubble.innerText = "";
                chatDisplay.appendChild(bubble);

                for (let i = 0; i < text.length; i++) {
                    bubble.innerText += text.charAt(i);
                    bubble.classList.add('typing-cursor'); 
                    await sleep(30 + Math.random() * 30); // Random typing speed
                }
                bubble.classList.remove('typing-cursor');
            }

            async function showAIResponse(htmlContent) {
                // Thinking indicator
                const thinking = document.createElement('div');
                thinking.className = "self-start flex gap-1 items-center bg-transparent px-2 py-2 mb-1";
                thinking.innerHTML = `<span class="w-1 h-1 bg-neutral-500 rounded-full animate-bounce"></span>
                                      <span class="w-1 h-1 bg-neutral-500 rounded-full animate-bounce" style="animation-delay:0.1s"></span>
                                      <span class="w-1 h-1 bg-neutral-500 rounded-full animate-bounce" style="animation-delay:0.2s"></span>`;
                chatDisplay.appendChild(thinking);
                
                await sleep(1500); // Simulate network/processing delay
                thinking.remove();

                // AI Bubble
                const container = document.createElement('div');
                container.className = "self-start flex gap-3 max-w-[90%] fade-in-up";
                
                const icon = document.createElement('div');
                icon.className = "w-6 h-6 rounded bg-indigo-600 flex items-center justify-center shrink-0 mt-1";
                icon.innerHTML = `<iconify-icon icon="lucide:sparkles" width="14" class="text-white"></iconify-icon>`;
                
                const content = document.createElement('div');
                content.className = "text-sm text-neutral-300 leading-relaxed space-y-2";
                content.innerHTML = htmlContent;

                container.appendChild(icon);
                container.appendChild(content);
                chatDisplay.appendChild(container);
            }

            async function runDemo() {
                while(true) {
                    // Reset if full
                    if(chatDisplay.children.length > 4) {
                        chatDisplay.innerHTML = '';
                        await sleep(500);
                    }

                    const scenario = scenarios[scenarioIndex];

                    // 1. User Types
                    await typeText(scenario.question);
                    await sleep(800);

                    // 2. AI Responds
                    await showAIResponse(scenario.response);
                    
                    // 3. Wait before next
                    await sleep(4000);

                    scenarioIndex = (scenarioIndex + 1) % scenarios.length;
                    
                    // Clear screen periodically to keep it clean
                    if(scenarioIndex === 0) {
                         // Fade out effect maybe?
                         chatDisplay.innerHTML = '';
                         await sleep(500);
                    }
                }
            }

            runDemo();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-32 pointer-events-none z-40 bg-gradient-to-b from-[#050505] to-transparent"></div>
<div className="fixed top-0 left-0 w-full h-24 pointer-events-none z-30 backdrop-blur-md" style={{maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)'}}></div>

<div className="fixed bottom-0 left-0 w-full h-32 pointer-events-none z-40 backdrop-blur-[2px]" style={{maskImage: 'linear-gradient(to bottom, transparent, black)'}}></div>
<div className="fixed bottom-0 left-0 w-full h-24 pointer-events-none z-40 bg-gradient-to-t from-[#050505] to-transparent"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl transition-all duration-300" id="navbar">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-lg font-semibold tracking-tighter text-white flex items-center gap-2" href="#">
<span className="w-8 h-8 rounded bg-gradient-to-br from-indigo-900 to-black border border-white/10 flex items-center justify-center text-xs text-indigo-200">AI</span>
                SEO AI
            </a>
<div className="hidden md:flex items-center space-x-8 text-sm font-medium">
<a className="hover:text-white transition-colors duration-200" href="#vision">La Vision</a>
<a className="hover:text-white transition-colors duration-200" href="#opportunite">L'Opportunité</a>
<a className="hover:text-white transition-colors duration-200" href="#offre">L'Offre</a>
<a className="hover:bg-neutral-200 transition-all duration-200 font-semibold text-black bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#contact">
                    Demander un Audit
                </a>
</div>

<button className="md:hidden text-white">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="hero-section">
<div className="z-0 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
<div className="z-10 text-center max-w-7xl mr-auto ml-auto pr-6 pl-6 relative scroll-blur-target" id="hero-content">
<div className="inline-flex gap-2 text-xs font-medium text-indigo-300 bg-white/5 border-white/10 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center" style={{}}>Nouvelle Opportunité de Marché 2026<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] text-5xl font-semibold text-white tracking-tighter mb-6 transition-all duration-75 ease-out will-change-transform" id="hero-title">
    Soyez visible là où <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">le monde cherche </span>

<br className="md:hidden"/>
<span className="whitespace-nowrap">
<span className="text-white/90 inline-block transition-opacity duration-300 min-w-[1ch]" id="rotating-text-unique">Désormais</span><span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">.</span>
</span>

</h1>
<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mr-auto mb-10 ml-auto" style={{}}>
    Le référencement Google ne suffit plus. Positionnez votre entreprise dans les réponses de l'Intelligence Artificielle avant vos concurrents.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors duration-200 flex items-center justify-center gap-2" href="#contact">
      Demander un audit SEO AI
      <iconify-icon className="" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="border-y bg-neutral-950/50 border-white/5 relative z-10 scroll-blur-target">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6 gap-x-8 gap-y-8">
<div className="text-center md:text-left">
<h3 className="md:text-3xl text-2xl font-semibold text-white tracking-tight" style={{}}>+400%</h3>
<p className="text-xs text-neutral-500 uppercase tracking-widest mt-1">Potentiel de trafic IA</p>
</div>
<div className="text-center md:text-left">
<h3 className="md:text-3xl text-2xl font-semibold text-white tracking-tight" style={{}}>Premier</h3>
<p className="uppercase text-xs text-neutral-500 tracking-widest mt-1">Avantage "First Mover"</p>
</div>
<div className="text-center md:text-left">
<h3 className="md:text-3xl text-2xl font-semibold text-white tracking-tight">Durable</h3>
<p className="uppercase text-xs text-neutral-500 tracking-widest mt-1">Positionnement Entité</p>
</div>
<div className="text-center md:text-left">
<div className="inline-flex text-white items-center justify-center mb-2">
<svg className="w-8 h-8" data-icon-set="lucide" data-lucide="sparkles" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275Z"></path><path d="M5 3v4"></path><path d="M9 5H5"></path></g></svg>
</div>
<p className="uppercase text-xs text-neutral-500 tracking-widest mt-1">Optimisation Sémantique</p>
</div>
</div>
</section>

<section className="md:py-32 pt-24 pb-24 relative" id="vision">
<div className="max-w-7xl mx-auto px-6 scroll-blur-target">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/20 to-purple-500/5 rounded-2xl blur-2xl opacity-50"></div>

<div className="relative aspect-[4/5] rounded-xl border border-white/10 bg-[#0a0a0a] overflow-hidden flex flex-col shadow-2xl">

<div className="h-10 bg-neutral-900 border-b border-white/5 flex items-center px-4 justify-between shrink-0">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="text-[10px] text-neutral-600 font-medium tracking-wide">AI SEARCH V3.0</div>
<div className="w-4"></div>
</div>

<div className="flex-1 p-6 flex flex-col gap-6 overflow-hidden relative font-sans" id="demo-chat-display">

</div>

<div className="p-4 bg-[#0a0a0a] border-t border-white/5 shrink-0 z-20">
<div className="w-full bg-neutral-900/50 border border-white/5 rounded-lg h-10 flex items-center px-3 gap-2">
<div className="w-4 h-4 rounded bg-neutral-700/50"></div>
<div className="h-1.5 w-24 bg-neutral-800 rounded"></div>
</div>
</div>
</div>
</div>
<div className="space-y-8">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white">
                        C'est l'équivalent du <br/><span className="text-indigo-400">SEO Google en l'an 2000.</span>
</h2>
<div className="space-y-6 text-lg font-light text-neutral-400">
<p className="">Nous sommes à un point de bascule. Aujourd'hui, vos prospects ne cherchent plus seulement des liens bleus, ils veulent des <strong className="text-neutral-200 font-medium">réponses immédiates</strong> synthétisées par l'IA.</p>
<p className="">
                            Le marché est vierge. Alors que vos concurrents se battent pour la 3ème place sur Google Ads, le référencement sur les moteurs IA (LLMs) est un océan bleu. Ceux qui s'y positionnent maintenant domineront leur secteur pour la décennie à venir.
                        </p>
<ul className="pt-4 space-y-4">
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<div className="text-indigo-400 bg-indigo-500/10 rounded mt-1 pt-1 pr-1 pb-1 pl-1">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="">
<span className="block text-sm font-medium text-white">Visibilité sur ChatGPT &amp; Co</span>
<span className="text-sm">Votre marque citée comme la référence dans les réponses générées.</span>
</div>
</li>
<li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<div className="mt-1 p-1 rounded bg-indigo-500/10 text-indigo-400">
<iconify-icon className="" icon="lucide:database" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="">
<span className="block text-sm font-medium text-white">Autorité d'Entité</span>
<span className="text-sm">Nous apprenons aux modèles qui vous êtes et pourquoi vous comptez.</span>
</div>
</li><li className="flex gap-3 gap-x-3 gap-y-3 items-start">
<div className="mt-1 p-1 rounded bg-indigo-500/10 text-indigo-400">
<iconify-icon className="" icon="lucide:trending-up" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<div className="">
<span className="block text-sm font-medium text-white">Trafic Qualifié</span>
<span className="text-sm">L'utilisateur qui pose une question précise à l'IA est prêt à acheter.</span>
</div>
</li>
</ul>

<div className="pt-2">
<a className="inline-flex items-center gap-2 text-white font-medium hover:text-indigo-400 transition-colors group text-sm" href="#contact">
                                Voir comment ça marche
                                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 scroll-blur-target" id="opportunite">
<div className="flex mb-10 pr-2 pl-2 items-end justify-between">
<div className="max-w-xl">
<h2 className="uppercase text-xs font-semibold text-indigo-400 tracking-widest mb-3">Early Adopters</h2>
<h3 className="text-3xl font-semibold text-white tracking-tight">Ils ont pris le virage avant les autres.</h3>
</div>
<div className="flex gap-3 hidden md:flex">
<button aria-label="Scroll left" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors active:scale-95" onclick="document.getElementById('testimonials-container').scrollBy({left: -420, behavior: 'smooth'})">
<iconify-icon className="" icon="lucide:arrow-left" width="16"></iconify-icon>
</button>
<button aria-label="Scroll right" className="flex hover:bg-white/10 transition-colors active:scale-95 text-white bg-white/5 w-10 h-10 border-white/10 border rounded-full items-center justify-center" onclick="document.getElementById('testimonials-container').scrollBy({left: 420, behavior: 'smooth'})">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 pb-8 -mx-6 px-6 snap-x scroll-smooth" id="testimonials-container" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<style>
            #testimonials-container::-webkit-scrollbar { display: none; }
        </style>

<div className="min-w-[320px] md:min-w-[400px] p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm snap-center flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group cursor-default">
<div className="">
<div className="flex gap-1 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-lg text-neutral-200 font-light italic mb-6">"On dépensait 5k/mois en Google Ads. Depuis qu'on apparaît dans les recommandations de Perplexity pour 'meilleur CRM français', nos leads qualifiés ont doublé sans coût par clic."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center text-white font-bold text-xs">TR</div>
<div className="">
<p className="text-sm font-semibold text-white">Thomas R.</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">CEO • SaaS B2B</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm snap-center flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group cursor-default">
<div className="">
<div className="flex gap-1 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-lg text-neutral-200 font-light italic mb-6">"Le SEO classique était saturé pour nous. L'approche SEO AI nous a permis de contourner les géants du secteur en occupant l'espace conversationnel. Bluffant."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center text-white font-bold text-xs">SL</div>
<div className="">
<p className="text-sm font-semibold text-white">Sophie L.</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Fondatrice • Agence Marketing</p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[400px] p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm snap-center flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:from-white/10 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50 group cursor-default">
<div className="">
<div className="flex gap-1 text-indigo-400 mb-4 group-hover:text-indigo-300 transition-colors">
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
<iconify-icon fill="currentColor" icon="lucide:star" width="14"></iconify-icon>
</div>
<p className="text-lg text-neutral-200 font-light italic mb-6">"Au début, je ne comprenais pas la nuance. Après l'audit, j'ai réalisé que l'IA ne 'lisait' pas mon site comme Google. On a tout changé, et le trafic a suivi."</p>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-800 group-hover:bg-neutral-700 transition-colors flex items-center justify-center text-white font-bold text-xs">MK</div>
<div className="">
<p className="text-sm font-semibold text-white">Marc K.</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Consultant Industriel</p>
</div>
</div>
</div>
</div>

<div className="mt-8 flex justify-center">
<a className="text-sm font-medium text-white border border-white/10 bg-white/5 hover:bg-white/10 rounded-full px-6 py-3 transition-all flex items-center gap-2" href="#contact">
            Vérifier votre visibilité actuelle
            <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="bg-neutral-900/30 border-white/5 border-t pt-24 pb-24 scroll-blur-target" id="offre">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">Notre Offre Unique</h2>
<p className="text-neutral-400 max-w-lg mr-auto ml-auto" style={{}}>Une approche claire pour un résultat complexe. Pas de jargon, juste de la performance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 md:auto-rows-[minmax(180px,auto)] gap-x-4 gap-y-4">

<div className="md:col-span-4 lg:col-span-4 flex flex-col group overflow-hidden bg-[#0a0a0a] border border-white/10 hover:border-indigo-500/50 rounded-3xl p-8 relative justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_20px_60px_-15px_rgba(99,102,241,0.3)] z-0">

<div className="absolute inset-0 bg-[radial-gradient(600px_at_top_right,_var(--tw-gradient-stops))] from-indigo-600/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"></div>

<div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-25 transition-all duration-700 ease-in-out transform group-hover:scale-125 group-hover:-rotate-12 group-hover:translate-x-4 group-hover:-translate-y-2 pointer-events-none">
<iconify-icon icon="lucide:rocket" strokeWidth="1" width="120"></iconify-icon>
</div>

<div className="relative z-10">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-indigo-500 text-white uppercase tracking-wider shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/50 transition-all duration-300">Recommandé</span>
</div>
<h3 className="text-2xl font-semibold text-white mb-2 tracking-tight group-hover:text-indigo-100 transition-colors duration-300">Pack Démarrage SEO AI</h3>
<p className="text-sm text-neutral-400 max-w-sm group-hover:text-neutral-300 transition-colors duration-300">La stratégie complète pour faire exister votre entité numérique aux yeux des LLMs. Audit, sémantique et autorité.</p>
</div>

<div className="mt-8 relative z-10">
<div className="flex items-end justify-between">
<ul className="text-sm text-neutral-400 space-y-1">
<li className="flex gap-2 items-center group-hover:text-neutral-300 transition-colors duration-300">
<iconify-icon className="text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-transform duration-300" icon="lucide:check"></iconify-icon>Audit de présence IA actuel
                </li>
<li className="flex gap-2 items-center group-hover:text-neutral-300 transition-colors duration-300 delay-75">
<iconify-icon className="text-indigo-400 group-hover:text-indigo-300 group-hover:scale-110 transition-transform duration-300" icon="lucide:check"></iconify-icon> Optimisation du Knowledge Graph
                </li>
</ul>
<div className="text-right">
<p className="text-3xl font-semibold text-white tracking-tight group-hover:text-indigo-50 transition-colors duration-300">Sur devis</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">Adapté à votre structure</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 flex flex-col group overflow-hidden bg-[#0a0a0a] border-white/10 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative justify-between transition-all duration-500 ease-out hover:-translate-y-2 hover:border-indigo-500/40 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.25)]">

<div className="absolute inset-0 bg-[radial-gradient(400px_at_top_right,_var(--tw-gradient-stops))] from-indigo-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-25 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 pointer-events-none">
<iconify-icon icon="lucide:scan-search" strokeWidth="1" width="120"></iconify-icon>
</div>
<div className="z-10 relative">
<h3 className="text-xl font-semibold text-white mb-2 group-hover:text-indigo-100 transition-colors duration-300">Audit Flash</h3>
<p className="text-sm text-neutral-400 w-48 h-50 group-hover:text-neutral-300 transition-colors duration-300">Découvrez ce que ChatGPT dit réellement de votre marque aujourd'hui.</p>
</div>
<div className="mt-8 relative z-10">
<div className="flex items-end justify-between">
<ul className="text-sm text-neutral-400 space-y-1">
<li className="flex gap-x-2 gap-y-2 items-center group-hover:text-neutral-300 transition-colors"><iconify-icon className="text-indigo-400 group-hover:text-indigo-300 transition-colors" icon="lucide:check"></iconify-icon>Rapport complet</li>
<li className="flex gap-x-2 gap-y-2 items-center group-hover:text-neutral-300 transition-colors"><iconify-icon className="text-indigo-400 group-hover:text-indigo-300 transition-colors" icon="lucide:check"></iconify-icon>Analyse concurrentielle</li>
</ul>
<div className="text-right">
<p className="text-3xl font-semibold text-white tracking-tight group-hover:text-indigo-200 transition-colors duration-300">Sur devis</p>
<p className="text-xs text-neutral-500 group-hover:text-neutral-400 transition-colors">One-shot</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-6 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">

<div className="flex flex-col card-hover bg-[#0a0a0a] h-full border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 justify-center">
<iconify-icon className="text-neutral-300 mb-3" icon="lucide:network" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="font-medium text-white tracking-tight mb-1">Knowledge Graph</h4>
<p className="leading-relaxed text-xs text-neutral-500">Nous structurons vos données pour être "comprises" par les algorithmes, pas juste indexées.</p>
</div>

<div className="flex flex-col h-full card-hover bg-[#0a0a0a] border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 justify-center">
<iconify-icon className="text-neutral-300 mb-3" icon="lucide:message-square-text" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-1">Citations Conversationnelles</h4>
<p className="leading-relaxed text-xs text-neutral-500">Augmentez la fréquence d'apparition de votre marque dans les dialogues IA.</p>
</div>

<div className="flex flex-col h-full card-hover bg-[#0a0a0a] border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 justify-center">
<iconify-icon className="text-neutral-300 mb-3" icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-1">Autorité &amp; Confiance</h4>
<p className="leading-relaxed text-xs text-neutral-500">Création de signaux de confiance externes validant votre expertise auprès de GPT.</p>
</div>

<div className="flex flex-col h-full card-hover bg-[#0a0a0a] border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 justify-center">
<iconify-icon className="text-neutral-300 mb-3" icon="lucide:cpu" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-1 tracking-tight">Veille Algorithmique</h4>
<p className="leading-relaxed text-xs text-neutral-500">Adaptation continue aux mises à jour des LLMs (GPT-4, Gemini Ultra, Claude 3).</p>
</div>

<div className="flex flex-col card-hover bg-[#0a0a0a] h-full border-white/10 border rounded-3xl pt-6 pr-6 pb-6 pl-6 justify-center">
<iconify-icon className="text-neutral-300 mb-3" icon="lucide:bar-chart-3" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-white font-medium mb-1">Analyse Sémantique</h4>
<p className="text-xs text-neutral-500 leading-relaxed">On ne vise plus des mots-clés, mais des intentions de recherche complexes.</p>
</div>
</div>
</div>

<div className="mt-8 mx-auto w-full">
<div className="flex items-start gap-3 p-4 rounded-xl bg-neutral-900/50 border border-white/5">
<iconify-icon className="text-neutral-500 mt-0.5 shrink-0" icon="lucide:info" strokeWidth="1.5" width="16"></iconify-icon>
<p className="leading-relaxed text-sm text-neutral-200">
<strong>Note Importante :</strong> Le SEO AI est une stratégie long terme. Les résultats d'indexation dans les Large Language Models (LLMs) prennent du temps mais offrent un avantage concurrentiel durable.
</p>
</div>
</div>
</div>
</section>

<footer className="bg-[#020202] border-white/10 border-t scroll-blur-target" id="contact">
<div className="max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-20 pl-6">
<div className="grid lg:grid-cols-2 gap-20">

<div className="">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6">
                        Ne laissez pas l'IA <br/> recommander vos <span className="text-indigo-400">concurrents.</span>
</h2>
<p className="font-light text-neutral-400 max-w-md mb-8" style={{}}>Les places de "référence" dans les modèles IA sont limitées. Réservez votre audit de faisabilité dès aujourd'hui.</p>
<div className="space-y-4">
<div className="flex gap-3 text-sm text-neutral-400 gap-x-3 gap-y-3 items-center"><iconify-icon icon="lucide:mail" width="14"></iconify-icon><div className="flex gap-3 text-sm text-neutral-400 gap-x-3 gap-y-3 items-center" style={{}}>contact@seo-ai.fr</div></div>
<div className="flex gap-3 text-sm text-neutral-400 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-white" icon="lucide:map-pin"></iconify-icon>
                            Paris, France (Full Remote)
                        </div>
</div>
<div className="flex gap-4 text-neutral-500 mt-12 gap-x-4 gap-y-4">
<a className="hover:text-white transition" href="#"><iconify-icon className="" icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="hover:text-white transition" href="#"><iconify-icon icon="lucide:twitter" width="20"></iconify-icon></a>
</div>
</div>

<form className="bg-neutral-900/20 border-white/5 border rounded-3xl pt-8 pr-8 pb-8 pl-8 space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">Prénom <span className="text-red-500">*</span></label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Jean" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">Nom <span className="text-red-500">*</span></label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Dupont" required="" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">Email Pro <span className="text-red-500">*</span></label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="jean@entreprise.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">Site Web (URL) <span className="text-red-500">*</span></label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="https://www.votre-site.com" required="" type="url"/>
</div>

<div className="pt-2 space-y-2">
<label className="text-xs font-medium text-neutral-500 ml-1">Vos priorités de visibilité</label>
<div className="grid grid-cols-2 md:grid-cols-3 gap-2">

<label className="flex items-center gap-2 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group bg-[#0a0a0a] border-white/10 border rounded-lg pt-2.5 pr-2.5 pb-2.5 pl-2.5">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">ChatGPT</span>
</label>

<label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0a0a] border border-white/10 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">Perplexity</span>
</label>

<label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0a0a] border border-white/10 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">Gemini (Google)</span>
</label>

<label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0a0a] border border-white/10 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">Claude</span>
</label>

<label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0a0a] border border-white/10 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">Copilot</span>
</label>

<label className="flex items-center gap-2 p-2.5 rounded-lg bg-[#0a0a0a] border border-white/10 cursor-pointer hover:border-white/20 hover:bg-white/5 transition-all group">
<div className="relative flex items-center justify-center shrink-0">
<input className="peer appearance-none w-4 h-4 rounded border border-neutral-700 checked:bg-indigo-500 checked:border-indigo-500 transition-colors" type="checkbox"/>
<svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
</div>
<span className="text-xs text-neutral-400 group-hover:text-neutral-200 transition-colors select-none">Search Generative</span>
</label>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-medium text-neutral-500 ml-1">Message</label>
<textarea className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" placeholder="Décrivez votre activité en quelques mots..." rows="4"></textarea>
</div>
<button className="hover:bg-neutral-200 transition-all duration-200 cursor-pointer text-sm font-semibold text-black bg-white w-full rounded-lg mt-2 pt-3.5 pb-3.5" onclick="const f=this.closest('form');if(!f.checkValidity()){f.reportValidity();return;}const b=this;const og=b.innerText;b.innerText='Envoi en cours...';b.disabled=true;setTimeout(()=&gt;{b.innerText='Demande Envoyée';b.classList.remove('bg-white','text-black','hover:bg-neutral-200');b.classList.add('bg-green-500','text-white','hover:bg-green-600');f.reset();setTimeout(()=&gt;{b.innerText=og;b.disabled=false;b.classList.add('bg-white','text-black','hover:bg-neutral-200');b.classList.remove('bg-green-500','text-white','hover:bg-green-600')},3000)},1500)" type="button">
    Demander mon audit SEO AI
</button>
<p className="text-[10px] text-neutral-600 text-center mt-4">
    Confidentialité stricte. Nous ne travaillons qu'avec une entreprise par secteur pour éviter les conflits d'intérêts.
  </p>
</form>
</div></div></footer>





    </>
  );
}
