import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Modal Logic
        function openModal() {
            const input = document.getElementById('domainInput');
            const errorMsg = document.getElementById('errorMsg');
            const modal = document.getElementById('contactModal');
            const display = document.getElementById('modalDomainDisplay');
            
            if(input.value.trim() === "") {
                input.focus();
                errorMsg.style.opacity = '1';
                setTimeout(() => errorMsg.style.opacity = '0', 3000);
                return;
            }

            display.textContent = input.value;
            modal.classList.remove('hidden-modal');
            modal.classList.add('visible-modal');
        }

        function closeModal() {
            const modal = document.getElementById('contactModal');
            modal.classList.remove('visible-modal');
            modal.classList.add('hidden-modal');
            // Reset error message
            document.getElementById('submissionError').classList.add('hidden');
        }

        // Close on clicking outside
        document.getElementById('contactModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Airtable Submission Logic
        async function submitToAirtable() {
            const btn = document.getElementById('submitBtn');
            const errorText = document.getElementById('submissionError');
            const originalText = btn.innerHTML;
            
            // Set Loading State
            btn.innerHTML = '<span class="iconify animate-spin" data-icon="lucide:loader-2" data-width="16" data-height="16"></span> Transmitting...';
            btn.disabled = true;
            errorText.classList.add('hidden');

            const domain = document.getElementById('domainInput').value;
            const prenom = document.getElementById('prenomInput').value;
            const nom = document.getElementById('nomInput').value;
            const email = document.getElementById('emailInput').value;
            const telephone = document.getElementById('phoneInput').value;

            const airtableData = {
                fields: {
                    "domainInput": domain,
                    "Prenom": prenom,
                    "Nom": nom,
                    "Email": email,
                    "Telephone": telephone
                }
            };

            const apiKey = "patRzwc4kQyMwqThs.5d865d13182db20efbd98125bef8759a30ccba698cc93a53e38ed48fc27e8a55";
            const baseId = "appYNuXINBkKOs188";
            const tableId = "tbltdjM56rR2U0xQn";
            const url = `https://api.airtable.com/v0/${baseId}/${tableId}`;

            try {
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${apiKey}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ records: [airtableData] })
                });

                if (response.ok) {
                    btn.innerHTML = '<span class="iconify" data-icon="lucide:check" data-width="16" data-height="16"></span> Signal Locked';
                    btn.classList.remove('bg-red-600', 'hover:bg-red-500');
                    btn.classList.add('bg-green-600', 'hover:bg-green-500');
                    
                    setTimeout(() => {
                        closeModal();
                        // Reset form
                        document.getElementById('prenomInput').value = '';
                        document.getElementById('nomInput').value = '';
                        document.getElementById('emailInput').value = '';
                        document.getElementById('phoneInput').value = '';
                        
                        // Reset button style
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        btn.classList.remove('bg-green-600', 'hover:bg-green-500');
                        btn.classList.add('bg-red-600', 'hover:bg-red-500');
                    }, 2000);
                } else {
                    throw new Error('Submission failed');
                }
            } catch (error) {
                console.error('Error submitting to Airtable:', error);
                btn.innerHTML = originalText;
                btn.disabled = false;
                errorText.classList.remove('hidden');
            }
        }

        // Scroll Reveal Animation Logic
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            revealOnScroll(); // Trigger once on load
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/60">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center">
<span className="iconify text-white group-hover:text-red-500 transition-colors duration-500" data-height="20" data-icon="lucide:triangle" data-strokeWidth="1.5" data-width="20"></span>
<div className="absolute inset-0 bg-red-500/50 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<span className="text-sm font-semibold tracking-tight text-white uppercase">Inception</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors duration-300" href="#manifesto">Manifesto</a>
<a className="hover:text-white transition-colors duration-300" href="#methodology">Engineering</a>
<a className="hover:text-white transition-colors duration-300" href="#quote">Philosophy</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block px-3 py-1.5 text-xs font-medium text-white border border-white/10 rounded-md hover:bg-white/5 hover:border-white/20 transition-all duration-300" onclick="document.getElementById('domainInput').focus()">
                    Go Direct
                </button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-red-900/10 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

<div className="reveal delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/5 text-xs font-medium text-red-200 mb-8 cursor-default">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
</span>
                Go Direct
            </div>

<h1 className="reveal delay-200 text-5xl md:text-7xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 mb-8 leading-[1]">
                Inception Engineering for Founders Who Refuse to Be Silenced
            </h1>

<p className="reveal delay-300 text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed tracking-wide">
                Traditional PR is dead. Your narrative is your product. We engineer the frameworks that make your story inevitable.
            </p>

<div className="reveal delay-300 max-w-md mx-auto relative group">
<div className="flex items-center p-1 bg-white/[0.03] border border-white/10 rounded-lg focus-within:border-red-500/50 focus-within:ring-1 focus-within:ring-red-500/20 transition-all shadow-inner">
<div className="pl-4 pr-2 text-slate-500">
<span className="iconify" data-height="16" data-icon="lucide:globe" data-width="16"></span>
</div>
<input className="flex-1 bg-transparent border-none text-white placeholder-slate-600 text-sm focus:outline-none h-10 w-full min-w-0" id="domainInput" placeholder="yourstartup.com" type="text"/>
<button className="whitespace-nowrap px-4 py-2 bg-white text-black text-xs font-semibold rounded hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2" onclick="openModal()">
                        Forge Your Signal
                        <span className="iconify group-hover:translate-x-0.5 transition-transform" data-height="12" data-icon="lucide:arrow-right" data-width="12"></span>
</button>
</div>
<p className="absolute -bottom-6 left-0 w-full text-center text-[10px] text-red-400 opacity-0 transition-opacity" id="errorMsg">Please enter a valid domain to proceed.</p>
</div>
</div>
</header>

<section className="py-24 border-y border-white/[0.06] bg-white/[0.01]" id="manifesto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="reveal delay-100 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-white/[0.12] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center text-slate-200 mb-6 bg-white/[0.05] rounded-lg border border-white/[0.05]">
<span className="iconify" data-height="20" data-icon="lucide:file-x-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Traditional PR is Dead</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Middlemen dilute your story. We cut them out.
                        </p>
</div>
</div>

<div className="reveal delay-200 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-white/[0.12] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center text-slate-200 mb-6 bg-white/[0.05] rounded-lg border border-white/[0.05]">
<span className="iconify" data-height="20" data-icon="lucide:mic" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Communication is the Founder’s Job</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Your conviction can’t be outsourced. We help you weaponize it.
                        </p>
</div>
</div>

<div className="reveal delay-300 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-white/[0.12] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center text-slate-200 mb-6 bg-white/[0.05] rounded-lg border border-white/[0.05]">
<span className="iconify" data-height="20" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Go Direct or Go Home</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            Direct communication builds movements. We engineer the discipline and the edge.
                        </p>
</div>
</div>

<div className="reveal delay-300 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-white/[0.12] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center text-slate-200 mb-6 bg-white/[0.05] rounded-lg border border-white/[0.05]">
<span className="iconify" data-height="20" data-icon="lucide:columns-3" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Raise Your Standard</h3>
<p className="text-sm text-slate-400 font-light leading-relaxed">
                            The internet is your Rostra. We design the architecture to make your voice inevitable.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="methodology">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 md:mb-28 reveal">
<h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-6">This is Inception Engineering.</h2>
<div className="max-w-3xl">
<p className="text-xl text-slate-300 font-light leading-relaxed mb-6">
                        We don’t do PR. We build frameworks that make your narrative unstoppable. We design cognitive grids, modular flows, and digital infrastructures that turn founders into movements.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300 transition-colors" href="#contact" onclick="document.getElementById('domainInput').focus()">
                        See How It Works <span className="iconify" data-height="14" data-icon="lucide:arrow-down" data-width="14"></span>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="reveal delay-100 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
<div className="text-xs font-mono text-red-500 mb-4">01</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">DIAGNOSTIC GRID</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Cartographier la perception réelle avant toute action</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p>Nous commençons par un diagnostic systémique de votre empreinte digitale. Objectif : identifier les écarts entre ce que vous êtes, ce que vous dites et ce que le marché perçoit.</p>
<ul className="list-disc pl-4 space-y-1 text-slate-400">
<li>Clarté du positionnement (vision, thèse, différenciation)</li>
<li>Cohérence narrative (site, contenus, profils fondateurs)</li>
<li>Autorité perçue (preuves, références)</li>
<li>Lisibilité pour les investisseurs et les moteurs de réponse (AEO / IA)</li>
</ul>
<p className="border-l border-red-500/30 pl-3 text-slate-400">Livrable : Une cartographie complète de la perception digitale.</p>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
<div className="text-xs font-mono text-red-500 mb-4">02</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">SCORING D’AUTORITÉ DIGITALE</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Transformer la perception en indicateurs exploitables</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p>Le diagnostic est ensuite converti en score d’autorité digitale. Ce scoring permet de sortir du ressenti pour entrer dans la décision.</p>
<ul className="list-disc pl-4 space-y-1 text-slate-400">
<li>Crédibilité stratégique &amp; Cohérence narrative</li>
<li>Autorité sectorielle</li>
<li>Lisibilité IA / moteurs de réponse</li>
<li>Capacité à inspirer confiance à court terme</li>
</ul>
<p className="border-l border-red-500/30 pl-3 text-slate-400">Livrable : Un score synthétique, lisible par un CEO ou un board.</p>
</div>
</div>

<div className="reveal delay-100 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
<div className="text-xs font-mono text-red-500 mb-4">03</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">PRODUCTIZATION DE L’AUTORITÉ</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">Passer d’un constat à une infrastructure opérationnelle</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p>À partir du scoring, nous construisons une architecture d’autorité digitale sur mesure, mais basée sur des briques standardisées.</p>
<ul className="list-disc pl-4 space-y-1 text-slate-400">
<li>Définition d’un narratif central non négociable</li>
<li>Structuration des points de contact critiques</li>
<li>Optimisation explicite pour les moteurs de réponse et l’IA</li>
<li>Priorisation des actions (impact investisseur)</li>
</ul>
<p className="border-l border-red-500/30 pl-3 text-slate-400">Livrable : Un plan d’exécution clair, découpé en modules activables.</p>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-2xl border border-white/10 bg-[#0A0A0A] hover:border-white/20 transition-all">
<div className="text-xs font-mono text-red-500 mb-4">04</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-4">PILOTAGE &amp; ITÉRATION</h3>
<p className="text-sm text-slate-400 leading-relaxed mb-6 italic">L’autorité se construit, se mesure et s’ajuste</p>
<div className="text-sm text-slate-500 font-light leading-7 space-y-4">
<p>L’autorité digitale n’est pas figée. Elle évolue avec le produit, le marché et les enjeux de financement.</p>
<ul className="list-disc pl-4 space-y-1 text-slate-400">
<li>Points de contrôle réguliers</li>
<li>Ajustements basés sur les signaux réels</li>
<li>Amélioration continue orientée ROI et crédibilité</li>
</ul>
<p className="border-l border-red-500/30 pl-3 text-slate-400">L’objectif n’est pas la visibilité. C’est la confiance durable.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.06] bg-[#050505]" id="quote">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="reveal">
<span className="iconify mx-auto text-red-500 mb-8" data-height="32" data-icon="lucide:quote" data-width="32"></span>
<p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
                    "Outsourcing comms is as bad as outsourcing code. <span className="text-red-500 font-normal">Inception engineering is the antidote.</span>"
                </p>
<div className="flex items-center justify-center gap-3">
<div className="h-px w-8 bg-white/20"></div>
<p className="text-xs font-mono text-slate-500 uppercase tracking-widest">The Doctrine</p>
<div className="h-px w-8 bg-white/20"></div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/[0.06]">
<div className="absolute inset-0 bg-red-900/5 mix-blend-overlay"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="reveal text-4xl md:text-6xl font-semibold text-white tracking-tighter mb-8 leading-tight">
                Reject convention.<br/>
<span className="text-slate-500">Build your own platform.</span><br/>
<span className="text-slate-600">Build your own narrative.</span>
</h2>
<button className="reveal delay-100 px-8 py-4 bg-white text-black text-sm font-semibold rounded hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] inline-flex items-center gap-2" onclick="document.getElementById('domainInput').focus()">
                Start Inception Engineering
                <span className="iconify" data-height="16" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
</div>
</section>

<div className="hidden-modal fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md" id="contactModal">
<div className="w-full max-w-md bg-[#0E0F14] border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden">

<button className="absolute top-4 right-4 text-slate-500 hover:text-white transition-colors z-20" onclick="closeModal()">
<span className="iconify" data-height="20" data-icon="lucide:x" data-width="20"></span>
</button>
<div className="p-8 relative z-10">
<div className="mb-6">
<div className="text-xs font-mono text-red-500 mb-2">TARGET ACQUIRED</div>
<h3 className="text-xl font-semibold text-white">Initialize Sequence</h3>
<p className="text-xs text-slate-400 mt-1">Domain: <span className="text-white font-mono" id="modalDomainDisplay"></span></p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); submitToAirtable();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Prénom</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500/50 transition-colors" id="prenomInput" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Nom</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500/50 transition-colors" id="nomInput" required="" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Email</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500/50 transition-colors" id="emailInput" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-slate-500 uppercase">Téléphone</label>
<input className="w-full bg-[#050505] border border-white/10 rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500/50 transition-colors" id="phoneInput" required="" type="tel"/>
</div>
<button className="w-full mt-4 bg-red-600 hover:bg-red-500 text-white font-medium py-3 rounded text-sm transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] flex items-center justify-center gap-2" id="submitBtn" type="submit">
                        Confirm Signal
                    </button>
<p className="text-center text-red-500 text-xs mt-2 hidden" id="submissionError">Transmission Failed. Try again.</p>
</form>
</div>
</div>
</div>

<footer className="border-t border-white/[0.06] bg-[#050505] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<span className="iconify text-white" data-height="20" data-icon="lucide:triangle" data-width="20"></span>
<span className="text-base font-semibold tracking-tight text-white uppercase">Inception</span>
</div>
<p className="text-xs text-slate-500 max-w-xs leading-relaxed font-light">
                        Engineering frameworks for direct-to-audience authority.
                    </p>
</div>
<div className="flex gap-8 text-xs font-medium text-slate-500">
<a className="hover:text-white transition-colors" href="#">Manifesto</a>
<a className="hover:text-white transition-colors" href="#">Engineering</a>
<a className="hover:text-white transition-colors" href="#">Philosophy</a>
</div>
</div>
<div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] text-slate-600 uppercase tracking-wider">© 2024 Inception Engineering.</p>
<div className="flex gap-6">
<a className="text-slate-600 hover:text-white transition-colors" href="https://www.linkedin.com/in/sedky-gharbi/" rel="noopener noreferrer" target="_blank">
<span className="iconify" data-height="16" data-icon="lucide:linkedin" data-width="16"></span>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="https://x.com/gauchecouscous" rel="noopener noreferrer" target="_blank">
<span className="iconify" data-height="16" data-icon="lucide:twitter" data-width="16"></span>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="https://medium.com/@gharbisedky" rel="noopener noreferrer" target="_blank">
<span className="iconify" data-height="16" data-icon="lucide:book-open" data-width="16"></span>
</a>
<a className="text-slate-600 hover:text-white transition-colors" href="https://substack.com/@gharbi" rel="noopener noreferrer" target="_blank">
<span className="iconify" data-height="16" data-icon="lucide:mail" data-width="16"></span>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
