import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



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
      


<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="bmaMERjX2VZDtPrh4Zwx"></div>
</div>

<nav className="fixed top-0 w-full z-40 border-b border-white/[0.06] bg-[#050505]/80 backdrop-blur-xl supports-[backdrop-filter]:bg-[#050505]/60">
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="relative flex items-center justify-center">
<svg aria-hidden="true" className="iconify group-hover:text-red-500 transition-colors duration-500 iconify--lucide text-white" data-height="20" data-icon="lucide:triangle" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="absolute inset-0 bg-indigo-500/50 blur-[10px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<span className="text-sm font-semibold tracking-tight uppercase text-white">MANAGABLE</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-neutral-400">
<a className="transition-colors duration-300 hover:text-white" href="#manifesto">Manifesto</a>
<a className="transition-colors duration-300 hover:text-white" href="#methodology">Engineering</a>
<a className="transition-colors duration-300 hover:text-white" href="#quote">Philosophy</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block px-3 py-1.5 text-xs font-medium border rounded-md transition-all duration-300 text-white border-white/10 hover:bg-white/5 hover:border-white/20" onclick="document.getElementById('domainInput').focus()">
                    Go Direct
                </button>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen bg-indigo-900/10"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">

<div className="reveal delay-100 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 text-xs font-medium mb-8 cursor-default active text-indigo-200">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-indigo-500"></span>
</span>
                Go Direct
            </div>

<h1 className="reveal delay-200 md:text-7xl bg-clip-text leading-[1] active text-5xl font-semibold text-transparent tracking-tighter bg-gradient-to-b from-white via-white to-white/50 mb-8">Automatizamos las llamadas de tu negocio</h1>

<p className="reveal delay-300 md:text-xl leading-relaxed active text-lg font-light tracking-wide max-w-2xl mr-auto mb-12 ml-auto text-neutral-400">Deja de gastar recursos asignando agentes manuales que ocjan llamadas y automatiza tu proceso de ventas</p>

<div className="reveal delay-300 max-w-md mx-auto relative group active">
<div className="flex items-center p-1 bg-white/[0.03] border rounded-lg focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/20 transition-all shadow-inner border-white/10">
<div className="pl-4 pr-2 text-neutral-500">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:globe" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20a14.5 14.5 0 0 0 0-20M2 12h20"></path></g></svg>
</div>
<input className="flex-1 bg-transparent border-none placeholder-neutral-600 text-sm focus:outline-none h-10 w-full min-w-0 text-white" id="domainInput" placeholder="yourstartup.com" type="text"/>
<button className="whitespace-nowrap px-4 py-2 text-xs font-semibold rounded transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] flex items-center gap-2 bg-white text-black hover:bg-neutral-200" onclick="openModal()">
                        Forge Your Signal
                        <svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-height="12" data-icon="lucide:arrow-right" data-width="12" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
<p className="absolute -bottom-6 left-0 w-full text-center text-[10px] opacity-0 transition-opacity text-indigo-400" id="errorMsg">Please enter a valid domain to proceed.</p>
</div>
</div>
</header>

<section className="border-y border-white/[0.06] bg-[#050505] pt-16 pb-16">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-x-4 gap-y-4">

<div className="reveal delay-100 group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
<img alt="Reference 1" className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/34539b54-ca5a-4ab5-9a6e-0388332c5712_800w.jpg" style={{}}/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<div>
<p className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest mb-1">Architecture</p>
<p className="text-sm font-medium text-white">System Design</p>
</div>
</div>
</div>

<div className="reveal delay-200 group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
<img alt="Reference 2" className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<div className="">
<p className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest mb-1">Infrastructure</p>
<p className="text-sm font-medium text-white">Network Protocol</p>
</div>
</div>
</div>

<div className="reveal delay-300 group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
<img alt="Reference 3" className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30e37a1d-2863-42c9-8f13-7fae66fd1ca6_800w.jpg" style={{}}/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 pt-4 pr-4 pb-4 pl-4 absolute top-0 right-0 bottom-0 left-0 items-end">
<div>
<p className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest mb-1">Workflow</p>
<p className="text-sm font-medium text-white">Team Synchronization</p>
</div>
</div>
</div>

<div className="reveal delay-200 group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.02]">
<img alt="Reference 4" className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 mix-blend-luminosity group-hover:mix-blend-normal" src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&amp;fit=crop&amp;w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
<div>
<p className="text-[10px] font-mono text-indigo-400 uppercase tracking-widest mb-1">Scale</p>
<p className="text-sm font-medium text-white">Global Reach</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-white/[0.06] bg-white/[0.01]" id="manifesto">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="reveal delay-100 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-white/[0.12] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 bg-white/5"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center mb-6 bg-white/[0.05] rounded-lg border border-white/[0.05] text-neutral-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:file-x-2" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"></path><path d="M14 2v4a2 2 0 0 0 2 2h4M8 12.5l-5 5m0-5l5 5"></path></g></svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">Traditional PR is Dead</h3>
<p className="text-sm font-light leading-relaxed text-neutral-400">
                            Middlemen dilute your story. We cut them out.
                        </p>
</div>
</div>

<div className="reveal delay-200 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-white/[0.12] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 bg-white/5"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center mb-6 bg-white/[0.05] rounded-lg border border-white/[0.05] text-neutral-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:mic" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 19v3m7-12v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></g></svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">Communication is the Founder’s Job</h3>
<p className="text-sm font-light leading-relaxed text-neutral-400">
                            Your conviction can’t be outsourced. We help you weaponize it.
                        </p>
</div>
</div>

<div className="reveal delay-300 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-white/[0.12] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 bg-white/5"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center mb-6 bg-white/[0.05] rounded-lg border border-white/[0.05] text-neutral-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">Go Direct or Go Home</h3>
<p className="text-sm font-light leading-relaxed text-neutral-400">
                            Direct communication builds movements. We engineer the discipline and the edge.
                        </p>
</div>
</div>

<div className="reveal delay-300 group p-8 rounded-2xl bg-[#080808] border border-white/[0.06] hover:border-white/[0.12] transition-colors relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-110 bg-white/5"></div>
<div className="relative z-10">
<div className="h-10 w-10 flex items-center justify-center mb-6 bg-white/[0.05] rounded-lg border border-white/[0.05] text-neutral-200">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:columns-3" data-strokeWidth="1.5" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M9 3v18m6-18v18"></path></g></svg>
</div>
<h3 className="text-xl font-medium tracking-tight mb-2 text-white">Raise Your Standard</h3>
<p className="text-sm font-light leading-relaxed text-neutral-400">
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
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-white">This is Managable.</h2>
<div className="max-w-3xl">
<p className="text-xl font-light leading-relaxed mb-6 text-neutral-300">
                        We don’t do PR. We build frameworks that make your narrative unstoppable. We design cognitive grids, modular flows, and digital infrastructures that turn founders into movements.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium transition-colors text-indigo-400 hover:text-indigo-300" href="#contact" onclick="document.getElementById('domainInput').focus()">
                        See How It Works <svg aria-hidden="true" className="iconify iconify--lucide" data-height="14" data-icon="lucide:arrow-down" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14m7-7l-7 7l-7-7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="reveal delay-100 p-8 rounded-2xl border bg-[#0A0A0A] transition-all border-white/10 hover:border-white/20">
<div className="text-xs font-mono text-indigo-500 mb-4">01</div>
<h3 className="text-xl font-medium tracking-tight mb-4 text-white">DIAGNOSTIC GRID</h3>
<p className="text-sm leading-relaxed mb-6 italic text-neutral-400">Cartographier la perception réelle avant toute action</p>
<div className="text-sm text-neutral-500 font-light leading-7 space-y-4">
<p>Nous commençons par un diagnostic systémique de votre empreinte digitale. Objectif : identifier les écarts entre ce que vous êtes, ce que vous dites et ce que le marché perçoit.</p>
<ul className="list-disc pl-4 space-y-1 text-neutral-400">
<li>Clarté du positionnement (vision, thèse, différenciation)</li>
<li>Cohérence narrative (site, contenus, profils fondateurs)</li>
<li>Autorité perçue (preuves, références)</li>
<li>Lisibilité pour les investisseurs et les moteurs de réponse (AEO / IA)</li>
</ul>
<p className="border-l border-indigo-500/30 pl-3 text-neutral-400">Livrable : Une cartographie complète de la perception digitale.</p>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-2xl border bg-[#0A0A0A] transition-all border-white/10 hover:border-white/20">
<div className="text-xs font-mono text-indigo-500 mb-4">02</div>
<h3 className="text-xl font-medium tracking-tight mb-4 text-white">SCORING D’AUTORITÉ DIGITALE</h3>
<p className="text-sm leading-relaxed mb-6 italic text-neutral-400">Transformer la perception en indicateurs exploitables</p>
<div className="text-sm text-neutral-500 font-light leading-7 space-y-4">
<p>Le diagnostic est ensuite converti en score d’autorité digitale. Ce scoring permet de sortir du ressenti pour entrer dans la décision.</p>
<ul className="list-disc pl-4 space-y-1 text-neutral-400">
<li>Crédibilité stratégique &amp; Cohérence narrative</li>
<li>Autorité sectorielle</li>
<li>Lisibilité IA / moteurs de réponse</li>
<li>Capacité à inspirer confiance à court terme</li>
</ul>
<p className="border-l border-indigo-500/30 pl-3 text-neutral-400">Livrable : Un score synthétique, lisible par un CEO ou un board.</p>
</div>
</div>

<div className="reveal delay-100 p-8 rounded-2xl border bg-[#0A0A0A] transition-all border-white/10 hover:border-white/20">
<div className="text-xs font-mono text-indigo-500 mb-4">03</div>
<h3 className="text-xl font-medium tracking-tight mb-4 text-white">PRODUCTIZATION DE L’AUTORITÉ</h3>
<p className="text-sm leading-relaxed mb-6 italic text-neutral-400">Passer d’un constat à une infrastructure opérationnelle</p>
<div className="text-sm text-neutral-500 font-light leading-7 space-y-4">
<p>À partir du scoring, nous construisons une architecture d’autorité digitale sur mesure, mais basée sur des briques standardisées.</p>
<ul className="list-disc pl-4 space-y-1 text-neutral-400">
<li>Définition d’un narratif central non négociable</li>
<li>Structuration des points de contact critiques</li>
<li>Optimisation explicite pour les moteurs de réponse et l’IA</li>
<li>Priorisation des actions (impact investisseur)</li>
</ul>
<p className="border-l border-indigo-500/30 pl-3 text-neutral-400">Livrable : Un plan d’exécution clair, découpé en modules activables.</p>
</div>
</div>

<div className="reveal delay-200 p-8 rounded-2xl border bg-[#0A0A0A] transition-all border-white/10 hover:border-white/20">
<div className="text-xs font-mono text-indigo-500 mb-4">04</div>
<h3 className="text-xl font-medium tracking-tight mb-4 text-white">PILOTAGE &amp; ITÉRATION</h3>
<p className="text-sm leading-relaxed mb-6 italic text-neutral-400">L’autorité se construit, se mesure et s’ajuste</p>
<div className="text-sm text-neutral-500 font-light leading-7 space-y-4">
<p>L’autorité digitale n’est pas figée. Elle évolue avec le produit, le marché et les enjeux de financement.</p>
<ul className="list-disc pl-4 space-y-1 text-neutral-400">
<li>Points de contrôle réguliers</li>
<li>Ajustements basés sur les signaux réels</li>
<li>Amélioration continue orientée ROI et crédibilité</li>
</ul>
<p className="border-l border-indigo-500/30 pl-3 text-neutral-400">L’objectif n’est pas la visibilité. C’est la confiance durable.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/[0.06] bg-[#050505]" id="quote">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="reveal">
<svg aria-hidden="true" className="iconify mx-auto text-red-500 mb-8 iconify--lucide" data-height="32" data-icon="lucide:quote" data-width="32" height="32" role="img" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2zM5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<p className="text-2xl md:text-3xl font-light leading-relaxed mb-8 text-white">
                    "Outsourcing comms is as bad as outsourcing code. <span className="text-indigo-500 font-normal">Managable is the antidote.</span>"
                </p>
<div className="flex items-center justify-center gap-3">
<div className="h-px w-8 bg-white/20"></div>
<p className="text-xs font-mono text-neutral-500 uppercase tracking-widest">The Doctrine</p>
<div className="h-px w-8 bg-white/20"></div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/[0.06]">
<div className="absolute inset-0 mix-blend-overlay bg-indigo-900/5"></div>
<div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
<h2 className="reveal text-4xl md:text-6xl font-semibold tracking-tighter mb-8 leading-tight text-white">
                Reject convention.<br/>
<span className="text-neutral-500">Build your own platform.</span><br/>
<span className="text-neutral-600">Build your own narrative.</span>
</h2>
<button className="reveal delay-100 px-8 py-4 text-sm font-semibold rounded transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] inline-flex items-center gap-2 bg-white text-black hover:bg-neutral-200" onclick="document.getElementById('domainInput').focus()">
                Start Managable
                <svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</section>

<div className="hidden-modal fixed inset-0 z-[100] flex items-center justify-center p-6 backdrop-blur-md bg-black/80" id="contactModal">
<div className="w-full max-w-md bg-[#0E0F14] border rounded-2xl shadow-2xl relative overflow-hidden border-white/10">

<button className="absolute top-4 right-4 text-neutral-500 transition-colors z-20 hover:text-white" onclick="closeModal()">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="20" data-icon="lucide:x" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<div className="p-8 relative z-10">
<div className="mb-6">
<div className="text-xs font-mono text-indigo-500 mb-2">TARGET ACQUIRED</div>
<h3 className="text-xl font-semibold text-white">Initialize Sequence</h3>
<p className="text-xs mt-1 text-neutral-400">Domain: <span className="font-mono text-white" id="modalDomainDisplay"></span></p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); submitToAirtable();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] font-semibold text-neutral-500 uppercase">Prénom</label>
<input className="w-full bg-[#050505] border rounded px-3 py-2 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors border-white/10 text-white" id="prenomInput" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-neutral-500 uppercase">Nom</label>
<input className="w-full bg-[#050505] border rounded px-3 py-2 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors border-white/10 text-white" id="nomInput" required="" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-neutral-500 uppercase">Email</label>
<input className="w-full bg-[#050505] border rounded px-3 py-2 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors border-white/10 text-white" id="emailInput" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[10px] font-semibold text-neutral-500 uppercase">Téléphone</label>
<input className="w-full bg-[#050505] border rounded px-3 py-2 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors border-white/10 text-white" id="phoneInput" required="" type="tel"/>
</div>
<button className="w-full mt-4 hover:bg-indigo-500 font-medium py-3 rounded text-sm transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] flex items-center justify-center gap-2 bg-indigo-600 text-white" id="submitBtn" type="submit">
                        Confirm Signal
                    </button>
<p className="text-center text-indigo-500 text-xs mt-2 hidden" id="submissionError">Transmission Failed. Try again.</p>
</form>
</div>
</div>
</div>

<footer className="border-t border-white/[0.06] bg-[#050505] pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
<div>
<div className="flex items-center gap-2 mb-4">
<svg aria-hidden="true" className="iconify iconify--lucide text-white" data-height="20" data-icon="lucide:triangle" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-base font-semibold tracking-tight uppercase text-white">Managable</span>
</div>
<p className="text-xs text-neutral-500 max-w-xs leading-relaxed font-light">
                        Engineering frameworks for direct-to-audience authority.
                    </p>
</div>
<div className="flex gap-8 text-xs font-medium text-neutral-500">
<a className="transition-colors hover:text-white" href="#">Manifesto</a>
<a className="transition-colors hover:text-white" href="#">Engineering</a>
<a className="transition-colors hover:text-white" href="#">Philosophy</a>
</div>
</div>
<div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-[10px] uppercase tracking-wider text-neutral-600">© 2024 Managable.</p>
<div className="flex gap-6">
<a className="transition-colors text-neutral-600 hover:text-white" href="https://www.linkedin.com/in/sedky-gharbi/" rel="noopener noreferrer" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:linkedin" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="transition-colors text-neutral-600 hover:text-white" href="https://x.com/gauchecouscous" rel="noopener noreferrer" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:twitter" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="transition-colors text-neutral-600 hover:text-white" href="https://medium.com/@gharbisedky" rel="noopener noreferrer" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:book-open" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14m-9-3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4a4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3a3 3 0 0 0-3-3z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
<a className="transition-colors text-neutral-600 hover:text-white" href="https://substack.com/@gharbi" rel="noopener noreferrer" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:mail" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
