import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        (function() {
            const container = document.getElementById('karaoke-text-new');
            if (!container) return;
            const spans = container.querySelectorAll('span');
            
            const handleScroll = () => {
                const rect = container.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // On étire la zone d'activation pour un défilement plus progressif/lent
                const startFade = windowHeight * 0.9;
                const endFade = windowHeight * 0.1;
                
                let progress = (startFade - rect.top) / (startFade - endFade);
                progress = Math.max(0, Math.min(1, progress));

                spans.forEach((span, index) => {
                    const threshold = index / spans.length;
                    if (progress > threshold) {
                        span.classList.remove('text-white/20');
                        span.classList.add('text-white');
                    } else {
                        span.classList.add('text-white/20');
                        span.classList.remove('text-white');
                    }
                });
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Initialisation
        })();
    


                function showPricing(planId, btnElement) {
                    // Update buttons
                    const container = btnElement.closest('.grid');
                    const buttons = container.querySelectorAll('.pricing-tab-btn');
                    buttons.forEach(btn => {
                        btn.classList.remove('border-white/20', 'bg-white/5');
                        btn.classList.add('border-white/5', 'bg-transparent');
                    });
                    
                    btnElement.classList.remove('border-white/5', 'bg-transparent');
                    btnElement.classList.add('border-white/20', 'bg-white/5');
                    
                    // Update panes
                    const panes = container.querySelectorAll('.pricing-pane');
                    panes.forEach(pane => {
                        pane.classList.remove('block');
                        pane.classList.add('hidden');
                    });
                    
                    const targetPane = document.getElementById(planId);
                    if (targetPane) {
                        targetPane.classList.remove('hidden');
                        targetPane.classList.add('block');
                    }
                }

                function toggleBilling() {
                    const toggle = document.getElementById('billing-toggle');
                    const knob = document.getElementById('billing-toggle-knob');
                    const isAnnual = toggle.getAttribute('aria-checked') === 'true';
                    
                    if (isAnnual) {
                        toggle.setAttribute('aria-checked', 'false');
                        toggle.classList.remove('bg-blue-600');
                        toggle.classList.add('bg-white/20');
                        knob.classList.remove('translate-x-0');
                        knob.classList.add('translate-x-5');
                    } else {
                        toggle.setAttribute('aria-checked', 'true');
                        toggle.classList.remove('bg-white/20');
                        toggle.classList.add('bg-blue-600');
                        knob.classList.remove('translate-x-5');
                        knob.classList.add('translate-x-0');
                    }
                }
            


        // --- Karaoke Scroll Effect ---
        document.addEventListener("DOMContentLoaded", () => {
            const karaokeText = "Chaque appel manque est une perte seche. Nous donnons a votre restaurant une voix disponible a toute heure, qui comprend, confirme, et transmet la commande sans friction — pour que votre equipe se concentre sur ce qui compte vraiment.";
            const container = document.getElementById('karaoke-text');
            
            // Split and wrap words
            karaokeText.split(' ').forEach(word => {
                const span = document.createElement('span');
                span.textContent = word + ' ';
                span.className = 'text-white/20 transition-colors duration-300';
                container.appendChild(span);
            });

            const spans = container.querySelectorAll('span');
            
            const handleScroll = () => {
                const rect = container.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                
                // Calculate visibility progress of the section
                const startFade = windowHeight * 0.8;
                const endFade = windowHeight * 0.3;
                
                let progress = (startFade - rect.top) / (startFade - endFade);
                progress = Math.max(0, Math.min(1, progress));

                spans.forEach((span, index) => {
                    // Stagger the word highlight based on progress
                    const threshold = index / spans.length;
                    if (progress > threshold) {
                        span.classList.remove('text-white/20');
                        span.classList.add('text-white');
                    } else {
                        span.classList.add('text-white/20');
                        span.classList.remove('text-white');
                    }
                });
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Init
        });

        // --- Pricing Tabs Logic ---
        document.addEventListener("DOMContentLoaded", () => {
            const tabBtns = document.querySelectorAll('.pricing-tab-btn');
            const panes = document.querySelectorAll('.pricing-pane');

            tabBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    // Remove active states
                    tabBtns.forEach(b => {
                        b.classList.remove('border-white/20', 'bg-white/5');
                        b.classList.add('border-white/5', 'bg-transparent');
                    });
                    
                    // Add active state to clicked
                    btn.classList.remove('border-white/5', 'bg-transparent');
                    btn.classList.add('border-white/20', 'bg-white/5');

                    // Hide all panes
                    panes.forEach(p => p.classList.add('hidden'));

                    // Show target pane
                    const targetId = btn.getAttribute('data-target');
                    const targetPane = document.getElementById(targetId);
                    if(targetPane) {
                        targetPane.classList.remove('hidden');
                    }
                });
            });

            // Toggle switch animation (visual only for mockup)
            const toggle = document.getElementById('billing-toggle');
            const knob = document.getElementById('billing-toggle-knob');
            let isAnnuel = true;

            toggle.addEventListener('click', () => {
                isAnnuel = !isAnnuel;
                if(isAnnuel) {
                    toggle.classList.remove('bg-blue-600');
                    toggle.classList.add('bg-white/20');
                    knob.classList.add('translate-x-5');
                    knob.classList.remove('translate-x-0');
                } else {
                    toggle.classList.add('bg-blue-600');
                    toggle.classList.remove('bg-white/20');
                    knob.classList.remove('translate-x-5');
                    knob.classList.add('translate-x-0');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 inset-x-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-white">
<iconify-icon className="text-xl" icon="solar:microphone-3-linear"></iconify-icon>
<span className="font-medium tracking-tight text-lg">VoiceOrder</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-white transition-colors" href="#how-it-works">Comment ca marche</a>
<a className="hover:text-white transition-colors" href="#features">Fonctionnalites</a>
<a className="hover:text-white transition-colors" href="#pricing">Tarifs</a>
<a className="hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="">
<a className="inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors" href="#">
                    Reserver une demo
                </a>
</div>
</div>
</nav>

<section className="overflow-hidden pt-40 pb-24 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[40vh] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<h1 className="text-5xl md:text-7xl tracking-tight font-medium text-white mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
                Votre restaurant ne perd<br/>plus un seul appel.
            </h1>
<p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light">
                Une IA receptionniste qui decroche, prend les reservations<br/>
                et commandes en francais naturel. 24h/24, 7j/7.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
<a className="inline-flex items-center justify-center rounded-full bg-white text-black px-6 py-3 text-sm font-medium hover:bg-white/90 transition-colors w-full sm:w-auto" href="#">
                    Reserver une demo gratuite →
                </a>
<a className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10 transition-colors w-full sm:w-auto gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
                    Ecouter un appel demo
                </a>
</div>

<div className="relative w-full max-w-6xl mx-auto rounded-xl border border-white/10 bg-[#0A0A0A] shadow-[0_0_50px_rgba(59,130,246,0.1)] overflow-hidden flex flex-col text-left h-[40rem]">

<div className="h-12 border-b border-white/10 flex items-center justify-center bg-white/[0.02]">
<div className="flex items-center gap-2 rounded-full border border-white/10 bg-black px-3 py-1 text-xs text-white/60">
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                        En ligne <span className="text-white/20">/</span> voiceorder.fr <span className="text-white/20">/</span> dashboard
                    </div>
</div>
<div className="flex flex-1 overflow-hidden">

<div className="w-64 border-r border-white/10 bg-black/50 p-4 flex flex-col justify-between hidden md:flex">
<div className="">
<div className="flex items-center gap-2 mb-8 text-white">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
<span className="font-medium tracking-tight text-sm">VoiceOrder</span>
</div>
<div className="mb-6">
<h3 className="text-xs font-medium text-white/40 mb-3 tracking-wider">WORKSPACE</h3>
<ul className="space-y-1">
<li><a className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-white" href="#"><iconify-icon icon="solar:widget-2-linear"></iconify-icon> Vue d'ensemble</a></li>
<li><a className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors" href="#"><iconify-icon icon="solar:bell-linear"></iconify-icon> Notifications <span className="ml-auto bg-blue-600 text-white text-[0.65rem] px-1.5 py-0.5 rounded-full">3</span></a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-medium text-white/40 mb-3 tracking-wider">COMMANDES</h3>
<ul className="space-y-1">
<li><a className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors" href="#"><iconify-icon icon="solar:chart-linear"></iconify-icon> Tableau de bord</a></li>
<li><a className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-white/60 hover:text-white hover:bg-white/5 transition-colors" href="#"><iconify-icon icon="solar:history-linear"></iconify-icon> Historique</a></li>
</ul>
</div>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-white/10">
<div className="w-8 h-8 rounded-full bg-blue-900/50 border border-blue-500/30 flex items-center justify-center text-xs font-medium text-blue-400">MR</div>
<div className="overflow-hidden">
<div className="text-sm font-medium text-white truncate">Marc Rousseau</div>
<div className="text-xs text-white/40 truncate">marc@lebistrot.fr</div>
</div>
</div>
</div>

<div className="flex-1 flex flex-col relative" style={{backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
<div className="absolute top-4 left-4 flex items-center gap-2 rounded-md border border-white/10 bg-black/80 backdrop-blur px-3 py-1.5 text-xs text-white/80">
                            Tableau de bord <span className="text-white/20">/</span> Service du soir — Vendredi
                        </div>

<div className="flex-1 relative overflow-auto p-12 flex items-center gap-8 justify-center min-w-[800px]">

<div className="absolute top-1/2 left-0 w-full h-px bg-white/10 -translate-y-1/2 z-0"></div>

<div className="relative z-10 w-48 rounded-lg border border-white/10 bg-[#111] shadow-xl">
<div className="border-b border-white/10 bg-white/5 px-3 py-2 flex items-center gap-2">
<div className="p-1 rounded bg-blue-500/20 text-blue-400"><iconify-icon icon="solar:phone-calling-linear"></iconify-icon></div>
<span className="text-xs font-medium">Appel entrant</span>
</div>
<div className="p-3">
<div className="text-sm font-medium text-white mb-1">Nouvelle commande</div>
<div className="text-xs text-white/60 mb-2">Appel via 01 44 XX XX XX</div>
<div className="text-[0.65rem] text-white/40 bg-white/5 rounded p-1.5">Client: Durée 1m32s • Heure: 19h47</div>
</div>
</div>

<div className="relative z-10 w-48 rounded-lg border border-blue-500/30 bg-[#111] shadow-[0_0_20px_rgba(59,130,246,0.1)]">
<div className="border-b border-white/10 bg-blue-500/10 px-3 py-2 flex items-center gap-2">
<div className="p-1 rounded bg-purple-500/20 text-purple-400"><iconify-icon icon="solar:chat-round-dots-linear"></iconify-icon></div>
<span className="text-xs font-medium text-blue-200">IA</span>
</div>
<div className="p-3">
<div className="text-sm font-medium text-white mb-1">Commande prise</div>
<div className="text-xs text-white/60 mb-2">Conversation naturelle</div>
<div className="text-[0.65rem] text-white/60 bg-black rounded p-1.5 border border-white/5">
                                        "2 entrecotes, 1 risotto<br/>A emporter — 20h15"
                                    </div>
</div>
</div>

<div className="relative z-10 w-48 rounded-lg border border-white/10 bg-[#111] shadow-xl">
<div className="border-b border-white/10 bg-white/5 px-3 py-2 flex items-center gap-2">
<div className="p-1 rounded bg-green-500/20 text-green-400"><iconify-icon icon="solar:clock-circle-linear"></iconify-icon></div>
<span className="text-xs font-medium">Confirmation</span>
</div>
<div className="p-3">
<div className="text-sm font-medium text-white mb-1">SMS envoye</div>
<div className="text-[0.65rem] text-white/40 bg-white/5 rounded p-1.5 mt-2">Heure retrait: 20h15</div>
</div>
</div>

<div className="relative z-10 w-48 rounded-lg border border-white/10 bg-[#111] shadow-xl">
<div className="border-b border-white/10 bg-white/5 px-3 py-2 flex items-center gap-2">
<div className="p-1 rounded bg-orange-500/20 text-orange-400"><iconify-icon icon="solar:monitor-smartphone-linear"></iconify-icon></div>
<span className="text-xs font-medium">Cuisine</span>
</div>
<div className="p-3">
<div className="text-sm font-medium text-white mb-1">Affiche en cuisine</div>
<div className="text-[0.65rem] text-orange-300 bg-orange-500/10 border border-orange-500/20 rounded inline-block px-1.5 py-0.5 mt-2">Tag: Urgent</div>
</div>
</div>

<div className="relative z-10 w-48 rounded-lg border border-white/10 bg-[#111] shadow-xl">
<div className="border-b border-white/10 bg-white/5 px-3 py-2 flex items-center gap-2">
<div className="p-1 rounded bg-yellow-500/20 text-yellow-400"><iconify-icon icon="solar:star-linear"></iconify-icon></div>
<span className="text-xs font-medium">Suivi</span>
</div>
<div className="p-3">
<div className="text-sm font-medium text-white mb-1">Avis Google</div>
<div className="text-[0.65rem] text-white/40 bg-white/5 rounded p-1.5 mt-2">SMS envoye 20 min apres retrait</div>
</div>
</div>
</div>

<div className="h-10 border-t border-white/10 bg-black/80 backdrop-blur flex items-center justify-between px-4 text-xs text-white/40">
<div className="">Commandes ce soir: <span className="text-white">12</span>  •  CA: <span className="text-white">387 EUR</span>  •  Taux de service: <span className="text-green-400">100%</span></div>
<div className="flex items-center gap-3">
                                Derniere commande: il y a 4 min 
                                <span className="flex items-center gap-1.5 text-green-400"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div> Operationnel</span>
</div>
</div>
</div>

<div className="w-72 border-l border-white/10 bg-[#0A0A0A] p-4 hidden lg:block overflow-y-auto">
<div className="mb-6">
<h2 className="text-base font-medium text-white tracking-tight">Commande prise</h2>
<p className="text-xs text-white/40 mt-1">Node • IA Receptionniste</p>
</div>
<div className="space-y-6">

<div>
<h3 className="text-xs font-medium text-white/40 mb-3 tracking-wider uppercase">Resume commande</h3>
<div className="rounded-lg border border-white/10 bg-white/5 p-3 text-sm space-y-2">
<div className="flex justify-between text-white/80"><span>2x Entrecotes saignantes</span></div>
<div className="flex justify-between text-white/80"><span>1x Risotto champignons</span></div>
<div className="flex justify-between text-white/80"><span>1x Eau minerale</span></div>
<div className="pt-2 border-t border-white/10 flex justify-between font-medium text-white mt-2">
<span>Total:</span>
<span>68,50 EUR</span>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-white/40 mb-3 tracking-wider uppercase">Config</h3>
<div className="space-y-2 text-sm">
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<span className="text-white/60">Type</span>
<span className="text-white rounded bg-white/10 px-2 py-0.5 text-xs">A emporter</span>
</div>
<div className="flex items-center justify-between border-b border-white/5 pb-2">
<span className="text-white/60">Heure</span>
<span className="text-white">20h15</span>
</div>
<div className="flex items-center justify-between pb-2">
<span className="text-white/60">Tel client</span>
<span className="text-white font-mono text-xs">06 XX XX XX XX</span>
</div>
</div>
</div>

<div>
<h3 className="text-xs font-medium text-white/40 mb-3 tracking-wider uppercase">Sante du flux</h3>
<div className="grid grid-cols-2 gap-2">
<div className="rounded border border-white/10 bg-white/5 p-2 text-center">
<div className="text-lg font-medium text-white">12</div>
<div className="text-[0.65rem] text-white/40 uppercase tracking-wider mt-1">Commandes</div>
</div>
<div className="rounded border border-white/10 bg-white/5 p-2 text-center">
<div className="text-lg font-medium text-white">1m45s</div>
<div className="text-[0.65rem] text-white/40 uppercase tracking-wider mt-1">Temps moyen</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-black border-white/5 pt-48 pb-48 md:pt-64 md:pb-64 relative" id="philosophy">
<div className="text-center max-w-4xl mr-auto ml-auto pr-6 pl-6">
<div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 mb-8 tracking-wider uppercase">
            [ Notre Approche ]
        </div>
<h2 className="md:text-5xl leading-tight md:leading-snug text-3xl font-medium tracking-tight mb-8" id="karaoke-text-new">
<span className="text-white/20 transition-colors duration-1000">Un </span>
<span className="text-white/20 transition-colors duration-1000">appel </span>
<span className="text-white/20 transition-colors duration-1000">manque. </span>
<span className="text-white/20 transition-colors duration-1000">Une </span>
<span className="text-white/20 transition-colors duration-1000">commande </span>
<span className="text-white/20 transition-colors duration-1000">perdue. </span>
<span className="text-white/20 transition-colors duration-1000">Un </span>
<span className="text-white/20 transition-colors duration-1000">client </span>
<span className="text-white/20 transition-colors duration-1000">qui </span>
<span className="text-white/20 transition-colors duration-1000">ne </span>
<span className="text-white/20 transition-colors duration-1000">rappelle </span>
<span className="text-white/20 transition-colors duration-1000">pas. </span>
<span className="text-white/20 transition-colors duration-1000 font-serif italic">VoiceOrder </span>
<span className="text-white/20 transition-colors duration-1000 font-serif italic">décroche </span>
<span className="text-white/20 transition-colors duration-1000">a </span>
<span className="text-white/20 transition-colors duration-1000">votre </span>
<span className="text-white/20 transition-colors duration-1000">place, </span>
<span className="text-white/20 transition-colors duration-1000">prend </span>
<span className="text-white/20 transition-colors duration-1000">la </span>
<span className="text-white/20 transition-colors duration-1000">commande, </span>
<span className="text-white/20 transition-colors duration-1000">et </span>
<span className="text-white/20 transition-colors duration-1000">la </span>
<span className="text-white/20 transition-colors duration-1000">transmet </span>
<span className="text-white/20 transition-colors duration-1000">en </span>
<span className="text-white/20 transition-colors duration-1000">cuisine. </span>
<span className="text-white/20 transition-colors duration-1000">Sans </span>
<span className="text-white/20 transition-colors duration-1000">erreur. </span>
<span className="text-white/20 transition-colors duration-1000">Sans </span>
<span className="text-white/20 transition-colors duration-1000">interruption.</span>
</h2>
<p className="text-sm md:text-base text-blue-400 font-medium tracking-wide uppercase">
            Le nouveau standard de l'accueil telephonique
        </p>
</div>


</section>

<section className="py-32 overflow-hidden" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 mb-6 tracking-wider uppercase">
                    Fonctionnalites
                </div>
<h2 className="text-4xl md:text-5xl tracking-tight font-medium text-white mb-6">
                    Tout ce qu'il faut pour<br/>ne plus perdre un appel
                </h2>
<p className="text-lg text-white/50 max-w-2xl mx-auto mb-8 font-light">
                    Des outils penses pour le quotidien d'un restaurant.<br/>
                    Simples a utiliser, puissants en coulisses.
                </p>
<a className="inline-flex items-center justify-center rounded-full bg-white/10 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/20 transition-colors border border-white/5" href="#">
                    Voir la demo
                </a>
</div>
<div className="relative w-full max-w-5xl mx-auto flex items-stretch justify-center gap-4 lg:gap-12 min-h-[400px]">

<div className="flex flex-col justify-center gap-8 z-10">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#111] flex items-center justify-center shadow-lg"><iconify-icon className="text-xl text-white/70" icon="solar:phone-calling-linear"></iconify-icon></div>
<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#111] flex items-center justify-center shadow-lg"><iconify-icon className="text-xl text-white/70" icon="solar:clock-circle-linear"></iconify-icon></div>
<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#111] flex items-center justify-center shadow-lg"><iconify-icon className="text-xl text-white/70" icon="solar:chat-round-dots-linear"></iconify-icon></div>
</div>

<div className="flex-1 flex flex-col rounded-2xl border border-white/10 bg-[#0A0A0A] shadow-2xl relative z-10 overflow-hidden">
<div className="border-b border-white/10 bg-white/[0.02] p-4 text-center">
<p className="text-sm text-white/80 font-medium">"Prendre la commande d'un client pour un retrait a 20h15"</p>
</div>
<div className="flex-1 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="p-6">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Appel</span>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-4 mb-4">
<div className="text-xs text-red-400 mb-1">Appel en cours</div>
<div className="text-sm font-medium text-white">M. Dupont</div>
<div className="text-xs text-white/40 font-mono mt-1">01 44 XX XX XX</div>
</div>
<div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
<div className="bg-red-500 w-[95%] h-full rounded-full"></div>
</div>
</div>

<div className="p-6">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Traitement</span>
</div>
<div className="space-y-3">
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
<div className="text-xs text-green-400 mb-1">IA active</div>
<div className="text-sm font-medium text-white">Commande en cours</div>
<div className="text-xs text-white/40 mt-1">Dure 1m12s  •••</div>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
<div className="text-xs text-blue-400 mb-1">Reconnaissance</div>
<div className="text-sm text-white/80 italic">"2 entrecotes, saignant"</div>
<div className="text-[0.65rem] text-blue-300 font-mono mt-2 bg-blue-500/10 px-1.5 py-0.5 inline-block rounded">MATCH_PRODUIT_OK</div>
</div>
</div>
</div>

<div className="p-6">
<div className="flex items-center gap-2 mb-4">
<div className="w-2 h-2 rounded-full bg-purple-500"></div>
<span className="text-xs font-medium text-white/60 uppercase tracking-wider">Resultat</span>
</div>
<div className="space-y-3">
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
<div className="text-xs text-purple-400 mb-1">Commande confirmee</div>
<div className="text-sm text-white/60 mb-2">Generee par IA</div>
<div className="text-xs text-white font-medium bg-white/5 px-2 py-1 rounded inline-block">Ticket #0042 cree</div>
</div>
<div className="rounded-lg border border-white/5 bg-white/[0.02] p-3">
<div className="text-xs text-cyan-400 mb-1">SMS envoye</div>
<div className="text-sm text-white/60 mb-2">Canal: client</div>
<div className="text-[0.65rem] text-white/40 mt-1">Envoye il y a 3s</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-center gap-4 z-10">
<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#111] flex items-center justify-center shadow-lg"><iconify-icon className="text-xl text-white/70" icon="solar:monitor-smartphone-linear"></iconify-icon></div>
<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#111] flex items-center justify-center shadow-lg"><iconify-icon className="text-xl text-white/70" icon="solar:letter-linear"></iconify-icon></div>
<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#111] flex items-center justify-center shadow-lg"><iconify-icon className="text-xl text-white/70" icon="solar:star-linear"></iconify-icon></div>
<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#111] flex items-center justify-center shadow-lg"><iconify-icon className="text-xl text-white/70" icon="solar:bell-linear"></iconify-icon></div>
<div className="w-12 h-12 rounded-xl border border-white/10 bg-[#111] flex items-center justify-center shadow-lg"><iconify-icon className="text-xl text-white/70" icon="solar:database-linear"></iconify-icon></div>
</div>

<div className="absolute inset-0 z-0 hidden lg:block pointer-events-none">
<svg className="w-full h-full text-white/5" fill="none" preserveaspectratio="none">
<path d="M50,100 C150,100 250,200 350,200" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M50,200 C150,200 250,200 350,200" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M50,300 C150,300 250,200 350,200" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M650,200 C750,200 850,50 950,50" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M650,200 C750,200 850,125 950,125" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M650,200 C750,200 850,200 950,200" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M650,200 C750,200 850,275 950,275" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M650,200 C750,200 850,350 950,350" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>
</section>

<section className="py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 mb-4 tracking-wider uppercase">
                        Capacites du produit
                    </div>
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-white mb-4">
                        Une plateforme, toutes vos commandes
                    </h2>
<p className="text-lg text-white/50 max-w-xl font-light">
                        VoiceOrder s'integre a votre fonctionnement actuel.<br/>
                        Pas de materiel supplementaire. Pas de formation longue.
                    </p>
</div>
<a className="inline-flex items-center justify-center rounded-full bg-white/5 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors border border-white/10 whitespace-nowrap" href="#">
                    Voir toutes les fonctionnalites
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 flex flex-col h-[400px] relative overflow-hidden group">
<div className="flex-1 flex items-center justify-center relative">
<div className="absolute w-40 h-40 rounded-full border border-white/10 flex items-center justify-center" style={{animation: 'spin 10s linear infinite'}}>
<div className="w-3 h-3 rounded-full bg-blue-500 absolute -top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
</div>
<div className="absolute w-24 h-24 rounded-full border border-white/10 flex items-center justify-center" style={{animation: 'spin 7s linear infinite reverse'}}>
<div className="w-2 h-2 rounded-full bg-cyan-400 absolute -bottom-1 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></div>
</div>
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white z-10 shadow-xl">
<iconify-icon className="text-xl" icon="solar:microphone-3-linear"></iconify-icon>
</div>
</div>
<div className="relative z-10 mt-auto">
<h3 className="text-lg font-medium text-white mb-2">Intelligence vocale</h3>
<p className="text-sm text-white/50 leading-relaxed">
                            Comprend les accents, les modifications, les demandes speciales. S'adapte a votre menu et vos regles.
                        </p>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 flex flex-col h-[400px] relative overflow-hidden group">
<div className="flex-1 relative flex items-center justify-center overflow-hidden">

<div className="flex gap-4 h-full transform rotate-12 scale-110 opacity-30 group-hover:opacity-60 transition-opacity duration-500">
<div className="flex flex-col gap-4" style={{animation: 'slide-up 10s linear infinite'}}>
<div className="w-12 h-12 rounded border border-white/10 bg-white/5 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:monitor-smartphone-linear"></iconify-icon></div>
<div className="w-12 h-12 rounded border border-white/10 bg-white/5 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:letter-linear"></iconify-icon></div>
<div className="w-12 h-12 rounded border border-white/10 bg-white/5 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:map-linear"></iconify-icon></div>
<div className="w-12 h-12 rounded border border-white/10 bg-white/5 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:monitor-smartphone-linear"></iconify-icon></div>
</div>
<div className="flex flex-col gap-4" style={{animation: 'slide-down 12s linear infinite'}}>
<div className="w-12 h-12 rounded border border-white/10 bg-white/5 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:star-linear"></iconify-icon></div>
<div className="w-12 h-12 rounded border border-white/10 bg-white/5 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:database-linear"></iconify-icon></div>
<div className="w-12 h-12 rounded border border-white/10 bg-white/5 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:document-linear"></iconify-icon></div>
<div className="w-12 h-12 rounded border border-white/10 bg-white/5 flex items-center justify-center"><iconify-icon className="text-xl" icon="solar:star-linear"></iconify-icon></div>
</div>
</div>
</div>
<div className="relative z-10 mt-auto pt-6">
<h3 className="text-lg font-medium text-white mb-2">Vos outils connectes</h3>
<p className="text-sm text-white/50 leading-relaxed">
                            Dashboard cuisine, SMS client, Google My Business, Google Sheets menu. VoiceOrder fait le lien.
                        </p>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 flex flex-col h-[400px] relative overflow-hidden group">
<div className="flex-1 flex items-center justify-center relative">
<div className="relative w-full max-w-[200px] h-32">

<div className="absolute left-0 top-0 w-24 p-2 rounded border border-white/10 bg-black/80 backdrop-blur shadow-lg text-center" style={{animation: 'float 4s ease-in-out infinite'}}>
<iconify-icon className="text-white/60 mb-1" icon="solar:phone-calling-linear"></iconify-icon>
<div className="h-1 w-12 bg-white/20 rounded mx-auto mb-1"></div>
<div className="h-1 w-8 bg-white/10 rounded mx-auto"></div>
</div>
<div className="absolute right-0 bottom-0 w-24 p-2 rounded border border-blue-500/30 bg-blue-900/20 backdrop-blur shadow-[0_0_15px_rgba(59,130,246,0.2)] text-center" style={{animation: 'float 4s ease-in-out infinite 1s'}}>
<iconify-icon className="text-blue-400 mb-1" icon="solar:monitor-smartphone-linear"></iconify-icon>
<div className="h-1 w-12 bg-blue-400/50 rounded mx-auto mb-1"></div>
<div className="h-1 w-8 bg-blue-400/30 rounded mx-auto"></div>
</div>
<svg className="absolute inset-0 w-full h-full text-white/20" fill="none">
<path className="opacity-50 group-hover:opacity-100 transition-opacity" d="M 60 40 C 100 40 100 90 140 90" stroke="currentColor" stroke-dasharray="3 3" strokeWidth="1.5"></path>
<circle className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" cx="100" cy="65" fill="white" r="4" style={{animation: 'followPath 2s linear infinite'}}></circle>
</svg>
</div>
</div>
<div className="relative z-10 mt-auto">
<h3 className="text-lg font-medium text-white mb-2">Transmission instantanee</h3>
<p className="text-sm text-white/50 leading-relaxed">
                            La commande arrive en cuisine en moins de 3 secondes. Un clic pour lancer la preparation, un clic quand c'est pret.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="how-it-works">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-24">
<div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 mb-6 tracking-wider uppercase">
                    Comment ca marche
                </div>
<h2 className="text-4xl md:text-5xl tracking-tight font-medium text-white mb-6">
                    Pret en 3 etapes
                </h2>
<p className="text-lg text-white/50 max-w-xl mx-auto mb-8 font-light">
                    Vous gardez votre numero. Vos clients appellent comme avant.<br/>
                    VoiceOrder fait le reste en silence.
                </p>
<a className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors" href="#">
                    Voir une demo en direct
                </a>
</div>
<div className="space-y-12 relative pb-32">

<div className="sticky top-32 rounded-3xl border border-white/10 bg-[#050505] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-center" style={{boxShadow: '0 -20px 40px -20px rgba(0,0,0,0.8)'}}>
<div className="flex-1">
<div className="text-6xl font-medium text-white/5 mb-6 tracking-tighter">01</div>
<h3 className="text-2xl tracking-tight font-medium text-white mb-4">Le client appelle votre numero</h3>
<p className="text-white/50 leading-relaxed mb-8">
                            Rien ne change pour vos clients. Ils composent votre numero habituel. L'IA decroche en moins de 2 secondes, se presente sous votre nom, et engage la conversation naturellement en francais.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Votre numero conserve</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Reponse en 2s</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Francais naturel</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Voix professionnelle</span>
</div>
</div>
<div className="w-full md:w-1/3 aspect-square rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center relative overflow-hidden">
<div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative z-10">
<iconify-icon className="text-3xl text-white" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
</div>
</div>

<div className="sticky top-40 rounded-3xl border border-white/10 bg-[#0A0A0A] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-center" style={{boxShadow: '0 -20px 40px -20px rgba(0,0,0,0.8)'}}>
<div className="flex-1">
<div className="text-6xl font-medium text-white/5 mb-6 tracking-tighter">02</div>
<h3 className="text-2xl tracking-tight font-medium text-white mb-4">L'IA comprend et confirme</h3>
<p className="text-white/50 leading-relaxed mb-8">
                            Conversation fluide : produits, personnalisations, heure de retrait. L'IA recapitule la commande, la confirme avec le client, et ne raccroche que quand tout est valide.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">Personnalisations acceptees</span>
<span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">Recapitulatif vocal</span>
<span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">Confirmation client</span>
<span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-300">Taux d'erreur &lt; 2%</span>
</div>
</div>
<div className="w-full md:w-1/3 aspect-square rounded-xl bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 flex items-center justify-center relative overflow-hidden">
<div className="w-24 h-24 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center relative z-10">
<iconify-icon className="text-3xl text-blue-400" icon="solar:chat-round-dots-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>
</div>
</div>

<div className="sticky top-48 rounded-3xl border border-white/10 bg-[#111111] p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-center" style={{boxShadow: '0 -20px 40px -20px rgba(0,0,0,0.8)'}}>
<div className="flex-1">
<div className="text-6xl font-medium text-white/5 mb-6 tracking-tighter">03</div>
<h3 className="text-2xl tracking-tight font-medium text-white mb-4">Votre equipe voit la commande apparaitre</h3>
<p className="text-white/50 leading-relaxed mb-8">
                            En temps reel sur votre tablette ou ecran en cuisine. Alerte sonore, detail de la commande, heure de retrait. Un clic pour demarrer, un clic quand c'est pret. Le client recoit son SMS de confirmation automatiquement.
                        </p>
<div className="flex flex-wrap gap-2">
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Temps reel</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Alerte sonore</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">SMS automatique</span>
<span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Sans papier</span>
</div>
</div>
<div className="w-full md:w-1/3 aspect-square rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/20 flex items-center justify-center relative overflow-hidden">
<div className="w-24 h-24 rounded-full bg-white/10 border border-white/20 flex items-center justify-center relative z-10">
<iconify-icon className="text-3xl text-white" icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_70%)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 mb-6 tracking-wider uppercase">
                    Ils nous font confiance
                </div>
<h2 className="text-3xl md:text-5xl tracking-tight font-medium text-white mb-6">
                    Des restaurateurs qui ont<br/>arrete de perdre des appels
                </h2>
<p className="text-lg text-white/50 max-w-2xl mx-auto mb-8 font-light">
                    Ils utilisent VoiceOrder chaque soir depuis l'ouverture du service.<br/>
                    Voici ce qu'ils en disent.
                </p>
<a className="inline-flex items-center justify-center rounded-full bg-white/5 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors border border-white/10" href="#">
                    Voir tous les retours
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

<div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 relative">
<iconify-icon className="text-3xl text-white/10 absolute top-6 right-6" icon="solar:quote-right-bold"></iconify-icon>
<p className="text-white/70 leading-relaxed mb-8 relative z-10">
                        "On recupere facilement 8 a 10 commandes par soir qui partaient dans le vide pendant le rush. L'IA n'est jamais debordee, elle, et ca change tout pour mon equipe en salle."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">M</div>
<div>
<div className="text-sm font-medium text-white">Mehdi R.</div>
<div className="text-xs text-white/40">Gerant, Le Comptoir du Marche — Paris 11e</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-blue-500/30 bg-blue-900/10 p-10 relative transform md:-translate-y-4 shadow-[0_0_30px_rgba(59,130,246,0.1)]">
<iconify-icon className="text-3xl text-blue-500/20 absolute top-8 right-8" icon="solar:quote-right-bold"></iconify-icon>
<p className="text-white leading-relaxed mb-8 relative z-10 text-lg">
                        "J'etais sceptique sur le cote robot. En fait mes clients trouvent ca plus rapide. Certains preferent meme appeler plutot que de commander en ligne parce que ca repondait toujours."
                    </p>
<div className="flex items-center gap-3">
<div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-sm font-medium text-blue-300">S</div>
<div className="">
<div className="text-sm font-medium text-white">Sophie L.</div>
<div className="text-xs text-blue-300/70">Proprietaire, Brasserie des Halles — Lyon</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-8 relative">
<iconify-icon className="text-3xl text-white/10 absolute top-6 right-6" icon="solar:quote-right-bold"></iconify-icon>
<p className="text-white/70 leading-relaxed mb-8 relative z-10">
                        "Le rapport du soir me donne enfin des vrais chiffres. Je sais combien de commandes telephoniques on fait, les produits les plus commandes, les heures de pointe. On a adapte nos horaires grace a ca."
                    </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-sm font-medium">T</div>
<div className="">
<div className="text-sm font-medium text-white">Thomas D.</div>
<div className="text-xs text-white/40">Chef-patron, L'Ardoise — Marseille</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32" id="pricing">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60 mb-6 tracking-wider uppercase">
                    Tarifs
                </div>
<h2 className="text-4xl md:text-5xl tracking-tight font-medium text-white mb-6">
                    Un prix simple, sans engagement
                </h2>
<p className="text-lg text-white/50 max-w-xl mx-auto mb-8 font-light">
                    Pas de frais caches. Pas de module supplementaire.<br/>
                    Tout est inclus des le premier jour.
                </p>

<div className="flex items-center justify-center gap-3">
<span className="text-sm text-white/60">Mensuel</span>
<button aria-checked="false" className="relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-white/20 transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black" id="billing-toggle" onclick="toggleBilling()" role="switch" type="button">
<span aria-hidden="true" className="pointer-events-none inline-block h-5 w-5 translate-x-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out" id="billing-toggle-knob"></span>
</button>
<span className="text-sm text-white">Annuel <span className="ml-1 rounded-full bg-blue-500/10 border border-blue-500/20 px-2 py-0.5 text-[0.65rem] text-blue-400 font-medium">2 mois offerts</span></span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 gap-x-8 gap-y-8 items-start">

<div className="lg:col-span-4 flex flex-col gap-3">
<button className="pricing-tab-btn text-left p-4 rounded-xl border transition-all w-full border-white/20 bg-white/5" data-target="plan-standard" onclick="showPricing('plan-standard', this)">
<div className="font-medium text-white mb-1">Standard</div>
<div className="text-xs text-white/50">Pour demarrer</div>
</button>
<button className="pricing-tab-btn text-left p-4 rounded-xl border transition-all w-full border-white/5 bg-transparent hover:bg-white/[0.02]" data-target="plan-premium" onclick="showPricing('plan-premium', this)">
<div className="font-medium text-white mb-1">Premium</div>
<div className="text-xs text-white/50">Pour aller plus loin</div>
</button>
<button className="pricing-tab-btn text-left p-4 rounded-xl border transition-all w-full border-white/5 bg-transparent hover:bg-white/[0.02]" data-target="plan-custom" onclick="showPricing('plan-custom', this)">
<div className="font-medium text-white mb-1">Sur mesure</div>
<div className="text-xs text-white/50">Pour les groupes</div>
</button>
</div>

<div className="lg:col-span-8 md:p-10 overflow-hidden min-h-[450px] bg-[#0A0A0A] border-white/10 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-2xl">

<div className="pricing-pane block animate-fade-in" id="plan-standard">
<h3 className="text-2xl font-medium text-white mb-2">Standard</h3>
<div className="text-sm text-white/60 mb-6">L'essentiel pour ne plus perdre un seul appel.</div>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-white">149 EUR</span>
<span className="text-white/40">/mois</span>
</div>
<a className="inline-flex w-full items-center justify-center rounded-full bg-white text-black px-5 py-3 text-sm font-medium hover:bg-white/90 transition-colors mb-10" href="#">
                            Choisir Standard
                        </a>
<div className="space-y-4">
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">IA receptionniste 24h/24, 7j/7</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Dashboard temps reel (tablette / PC / mobile)</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="">Prise de commande complete (retrait, livraison)</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>SMS de confirmation automatique au client</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Rapport quotidien par email</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Menu modifiable en 2 minutes (Google Sheets)</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Support par email</span>
</div>
</div>
</div>

<div className="pricing-pane hidden animate-fade-in" id="plan-premium">
<div className="absolute top-0 right-0 rounded-bl-xl bg-blue-600 px-3 py-1 text-[0.65rem] font-medium uppercase tracking-wider text-white">Populaire</div>
<h3 className="text-2xl font-medium text-white mb-2">Premium</h3>
<div className="text-white/60 text-sm mb-6">Le maximum pour optimiser votre CA et fideliser vos clients.</div>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-white">249 EUR</span>
<span className="text-white/40">/mois</span>
</div>
<a className="inline-flex w-full items-center justify-center rounded-full bg-blue-600 text-white px-5 py-3 text-sm font-medium hover:bg-blue-700 transition-colors mb-10 shadow-[0_0_20px_rgba(37,99,235,0.3)]" href="#">
                            Choisir Premium
                        </a>
<div className="space-y-4">
<div className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium">Tout du plan Standard</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Avis Google automatise apres chaque commande</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Upselling intelligent (suggestions en fin de commande)</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>WhatsApp Business (notifications supplementaires)</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Statistiques avancees (CA, produits, heures de pointe)</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-blue-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Support prioritaire (telephone + email)</span>
</div>
</div>
</div>

<div className="pricing-pane hidden animate-fade-in" id="plan-custom">
<h3 className="text-2xl font-medium text-white mb-2">Sur mesure</h3>
<div className="text-white/60 text-sm mb-6">Pour les groupes de restaurants, franchises ou besoin specifique.</div>
<div className="flex items-baseline gap-2 mb-8">
<span className="text-4xl md:text-5xl font-medium tracking-tight text-white">Sur devis</span>
</div>
<a className="inline-flex w-full items-center justify-center rounded-full bg-white/10 text-white border border-white/20 px-5 py-3 text-sm font-medium hover:bg-white/20 transition-colors mb-10" href="#">
                            Nous contacter
                        </a>
<div className="space-y-4">
<div className="flex items-start gap-3 text-sm text-white">
<iconify-icon className="text-white/70 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="font-medium">Tout du plan Premium</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-white/70 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Multi-etablissements</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-white/70 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Personnalisation vocale avancee (voix, nom, script)</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-white/70 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Integrations sur mesure (caisse, logiciel metier)</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-white/70 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>Account manager dedie</span>
</div>
<div className="flex items-start gap-3 text-sm text-white/80">
<iconify-icon className="text-white/70 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span>SLA garanti</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-12 text-center text-sm text-white/40 max-w-lg mx-auto leading-relaxed">
                Setup initial : 500 EUR (configuration + formation 30 min)<br/>
                Sans engagement. Resiliable a tout moment.<br/>
                Satisfait ou rembourse les 30 premiers jours.
            </div>

</div>
</section>

<footer className="border-t border-white/5 bg-black pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 text-white mb-6">
<iconify-icon className="text-xl" icon="solar:microphone-3-linear"></iconify-icon>
<span className="font-medium tracking-tight text-lg">VoiceOrder</span>
</div>
<p className="text-sm text-white/40 leading-relaxed mb-6">
                        L'IA receptionniste pour restaurants.<br/>
                        Disponible 24h/24, elle decroche, prend les commandes et les envoie en cuisine. Vous ne perdez plus rien.
                    </p>
<form className="flex gap-2">
<input className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white outline-none focus:border-white/30 placeholder:text-white/30 transition-colors" placeholder="Votre email professionnel" type="email"/>
<button className="whitespace-nowrap rounded-lg bg-white px-3 py-2 text-sm font-medium text-black hover:bg-white/90 transition-colors" type="button">
                            Recevoir les infos
                        </button>
</form>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4">Produit</h4>
<ul className="space-y-3 text-sm text-white/50">
<li><a className="hover:text-white transition-colors" href="#">Comment ca marche</a></li>
<li><a className="hover:text-white transition-colors" href="#">Fonctionnalites</a></li>
</ul>
</div>

<div className="">
<h4 className="text-sm font-medium text-white mb-4">Entreprise</h4>
<ul className="space-y-3 text-sm text-white/50">
<li className=""><a className="hover:text-white transition-colors" href="#">A propos</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-4">Contact</h4>
<ul className="space-y-3 text-sm text-white/50">
<li><a className="hover:text-white transition-colors" href="mailto:contact@voiceorder.fr">contact@voiceorder.fr</a></li>
<li><a className="hover:text-white transition-colors" href="#">[Numero de telephone]</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-white/40">
<p>© 2025 VoiceOrder. Tous droits reserves.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Politique de confidentialite</a>
<span>|</span>
<a className="hover:text-white transition-colors" href="#">CGU</a>
</div>
</div>
</div>
</footer>
<style>
        /* Custom Keyframes */
        @keyframes fade-in {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.4s ease-out forwards;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        @keyframes slide-up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
        }
        @keyframes slide-down {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
        }
        @keyframes followPath {
            0% { offset-distance: 0%; }
            100% { offset-distance: 100%; }
        }
    </style>


    </>
  );
}
