import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section');
            const navItems = document.querySelectorAll('.step-item');
            const progressLineFill = document.getElementById('progress-line-fill');
            const confidenceBar = document.getElementById('confidence-bar');
            const confidenceText = document.getElementById('confidence-text');
            const mobileConfidenceBar = document.getElementById('mobile-confidence-bar');
            const mobileConfidenceLabel = document.getElementById('mobile-confidence-label');
            const formContainer = document.getElementById('form-container');

            // Confidence States
            const confidenceStates = {
                interpretation: { width: '10%', label: 'Low', color: '#a1a1aa' }, // zinc-400
                position: { width: '35%', label: 'Stable', color: '#e4e4e7' }, // zinc-200
                alignment: { width: '60%', label: 'Stable', color: '#e4e4e7' },
                inclusion: { width: '100%', label: 'Trusted', color: '#ffffff' },
                begin: { width: '100%', label: 'Trusted', color: '#ffffff' }
            };

            const observerOptions = {
                threshold: 0.4, // Trigger when 40% of section is visible
                rootMargin: "-10% 0px -10% 0px"
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        
                        // 1. Update Navigation
                        updateNavigation(id);

                        // 2. Update Confidence Bar
                        updateConfidence(id);

                        // 3. Trigger Fade In animations within the section
                        revealContent(entry.target);

                        // 4. Handle Form Unlock
                        if (id === 'begin') {
                            setTimeout(() => {
                                formContainer.classList.remove('opacity-50', 'pointer-events-none', 'blur-[2px]');
                            }, 500);
                        }
                    }
                });
            }, observerOptions);

            sections.forEach(section => observer.observe(section));

            function updateNavigation(activeId) {
                let activeIndex = -1;
                navItems.forEach((item, index) => {
                    const target = item.getAttribute('data-target');
                    if (target === activeId) activeIndex = index;
                });

                navItems.forEach((item, index) => {
                    if (index <= activeIndex) {
                        item.classList.add('opacity-100', 'active');
                        item.classList.remove('opacity-50');
                    } else {
                        item.classList.remove('opacity-100', 'active');
                        item.classList.add('opacity-50');
                    }
                });

                // Update Progress Line Height (approximate calculation based on steps)
                const totalSteps = navItems.length - 1;
                const percentage = (activeIndex / totalSteps) * 100;
                // Clamp max height to avoid overflow visuals
                progressLineFill.style.height = `${Math.min(percentage, 100)}%`;
            }

            function updateConfidence(id) {
                const state = confidenceStates[id];
                if (!state) return;

                // Desktop Bar
                confidenceBar.style.width = state.width;
                confidenceText.innerText = state.label;
                
                // Mobile Bar
                mobileConfidenceBar.style.width = state.width;
                mobileConfidenceLabel.innerText = state.label === 'Low' ? 'Scanning...' : state.label;
            }

            function revealContent(section) {
                const elements = section.querySelectorAll('.reveal-element');
                elements.forEach(el => {
                    el.classList.add('reveal-visible');
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="lg:hidden fixed top-0 left-0 w-full z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5 p-4 flex justify-between items-center">
<div className="text-sm font-medium tracking-tighter text-white">DECIPHER OS</div>
<div className="flex items-center gap-3">
<span className="text-xs text-zinc-500 font-mono uppercase tracking-widest" id="mobile-confidence-label">Scanning...</span>
<div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-white transition-all duration-700 ease-out w-0" id="mobile-confidence-bar"></div>
</div>
</div>
</div>
<div className="min-h-screen flex flex-col lg:flex-row max-w-7xl mx-auto">

<aside className="hidden lg:flex flex-col justify-between w-1/4 h-screen sticky top-0 p-12 border-r border-white/5 z-40">

<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
<h1 className="text-lg font-medium tracking-tighter text-white">DECIPHER OS</h1>
</div>

<nav className="flex flex-col gap-6 relative">

<div className="absolute left-[7px] top-2 bottom-2 w-[1px] bg-white/10 -z-10"></div>
<div className="absolute left-[7px] top-2 w-[1px] bg-white transition-all duration-500 ease-out -z-10 h-0" id="progress-line-fill"></div>

<div className="step-item flex items-center gap-4 group opacity-50 transition-opacity duration-300" data-target="interpretation">
<div className="w-3.5 h-3.5 rounded-full border border-white/20 bg-[#050505] group-[.active]:bg-white group-[.active]:border-white transition-colors duration-300 z-10"></div>
<span className="text-sm font-medium tracking-tight">Interpretation</span>
</div>

<div className="step-item flex items-center gap-4 group opacity-50 transition-opacity duration-300" data-target="position">
<div className="w-3.5 h-3.5 rounded-full border border-white/20 bg-[#050505] group-[.active]:bg-white group-[.active]:border-white transition-colors duration-300 z-10"></div>
<span className="text-sm font-medium tracking-tight">Position</span>
</div>

<div className="step-item flex items-center gap-4 group opacity-50 transition-opacity duration-300" data-target="alignment">
<div className="w-3.5 h-3.5 rounded-full border border-white/20 bg-[#050505] group-[.active]:bg-white group-[.active]:border-white transition-colors duration-300 z-10"></div>
<span className="text-sm font-medium tracking-tight">Alignment</span>
</div>

<div className="step-item flex items-center gap-4 group opacity-50 transition-opacity duration-300" data-target="inclusion">
<div className="w-3.5 h-3.5 rounded-full border border-white/20 bg-[#050505] group-[.active]:bg-white group-[.active]:border-white transition-colors duration-300 z-10"></div>
<span className="text-sm font-medium tracking-tight">Inclusion</span>
</div>

<div className="step-item flex items-center gap-4 group opacity-50 transition-opacity duration-300" data-target="begin">
<div className="w-3.5 h-3.5 rounded-full border border-white/20 bg-[#050505] group-[.active]:bg-white group-[.active]:border-white transition-colors duration-300 z-10"></div>
<span className="text-sm font-medium tracking-tight">Begin</span>
</div>
</nav>

<div className="flex flex-col gap-2">
<div className="flex justify-between items-end">
<span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">AI Confidence</span>
<span className="text-xs text-white font-medium tracking-wide" id="confidence-text">Low</span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-white/40 to-white w-[10%] transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(255,255,255,0.4)]" id="confidence-bar"></div>
</div>
</div>
</aside>

<main className="w-full lg:w-3/4 flex flex-col relative z-10">

<section className="min-h-screen flex flex-col justify-center px-6 lg:px-20 py-24 border-l border-white/5 relative overflow-hidden" id="interpretation">

<div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-2xl">
<div className="reveal-element mb-6 flex items-center gap-2 text-blue-400/80">
<iconify-icon icon="solar:scanner-linear" width="20"></iconify-icon>
<span className="text-xs font-mono uppercase tracking-widest">Analysis Active</span>
</div>
<h2 className="reveal-element text-3xl lg:text-5xl font-medium text-white tracking-tight mb-4 leading-[1.1]">
                        You’re Already Being<br/><span className="text-zinc-500">Interpreted by AI.</span>
</h2>
<h3 className="reveal-element delay-100 text-lg lg:text-xl text-zinc-400 mb-8 font-light tracking-tight">
                        Not searched. Not browsed. Interpreted.
                    </h3>
<p className="reveal-element delay-200 text-base lg:text-lg text-zinc-500 leading-relaxed mb-10 max-w-xl font-light">
                        Every time someone asks AI a question in your space, a quiet decision is made. Sometimes your brand is chosen. Sometimes it’s skipped. Sometimes it’s misunderstood. Most companies never see this layer. Decipher OS exists inside it.
                    </p>
<button className="reveal-element delay-300 group flex items-center gap-2 text-white text-sm hover:text-blue-400 transition-colors cursor-default">
<span>See What It Thinks</span>
<iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="min-h-screen flex flex-col justify-center px-6 lg:px-20 py-24 border-l border-white/5 relative" id="position">
<div className="max-w-2xl">
<div className="reveal-element mb-6 flex items-center gap-2 text-zinc-600">
<iconify-icon icon="solar:layers-minimalistic-linear" width="20"></iconify-icon>
<span className="text-xs font-mono uppercase tracking-widest">Resolution Phase</span>
</div>
<h2 className="reveal-element text-3xl lg:text-5xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                        This Is Your Current<br/>Position in AI’s Mind
                    </h2>
<p className="reveal-element delay-100 text-base lg:text-lg text-zinc-500 leading-relaxed mb-8 max-w-xl font-light">
                        AI doesn’t judge brands emotionally. It resolves confidence. It asks: <span className="text-zinc-300">Do I understand this brand?</span> Can I explain it clearly? Can I trust it as a reference? From your content, structure, and signals, AI forms a version of you. Sometimes accurate. Often incomplete.
                    </p>

<div className="reveal-element delay-200 mb-10 py-4 border-t border-b border-white/5 w-full max-w-md">
<div className="flex justify-between text-xs text-zinc-500 mb-2 font-mono">
<span>CONFIDENCE SIGNAL</span>
<span>FLUCTUATING</span>
</div>
<div className="flex gap-1 h-8 items-end">
<div className="w-1/3 h-full bg-white/20 rounded-sm"></div>
<div className="w-1/3 h-1/2 bg-white/10 rounded-sm animate-pulse"></div>
<div className="w-1/3 h-1/4 bg-white/5 rounded-sm"></div>
</div>
</div>
<button className="reveal-element delay-300 group flex items-center gap-2 text-white text-sm hover:text-blue-400 transition-colors cursor-default">
<span>Where Does Confidence Break?</span>
<iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="min-h-screen flex flex-col justify-center px-6 lg:px-20 py-24 border-l border-white/5 relative" id="alignment">
<div className="max-w-2xl">
<h2 className="reveal-element text-3xl lg:text-5xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                        AI Avoids Uncertainty<br/>More Than Competition
                    </h2>
<p className="reveal-element delay-100 text-base lg:text-lg text-zinc-500 leading-relaxed mb-10 max-w-xl font-light">
                        When AI isn’t sure, it chooses safer brands. Uncertainty comes from unclear positioning, fragmented content, human-only messaging, inconsistent explanations. Decipher OS removes that friction.
                    </p>
<div className="reveal-element delay-200 grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
<div className="p-6 border border-white/5 rounded-lg bg-white/[0.02] backdrop-blur-sm">
<div className="text-white mb-3">
<iconify-icon icon="solar:chat-round-line-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2 tracking-tight">Answer Presence</h4>
<p className="text-sm text-zinc-500 leading-relaxed">So you appear when questions are actually asked.</p>
</div>
<div className="p-6 border border-white/5 rounded-lg bg-white/[0.02] backdrop-blur-sm">
<div className="text-white mb-3">
<iconify-icon icon="solar:verified-check-linear" width="24"></iconify-icon>
</div>
<h4 className="text-white font-medium mb-2 tracking-tight">Brand Accuracy</h4>
<p className="text-sm text-zinc-500 leading-relaxed">So AI describes you the same way, every single time.</p>
</div>
</div>
<button className="reveal-element delay-300 group flex items-center gap-2 text-white text-sm hover:text-blue-400 transition-colors cursor-default">
<span>What Happens After Alignment?</span>
<iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="min-h-screen flex flex-col justify-center px-6 lg:px-20 py-24 border-l border-white/5 relative" id="inclusion">

<div className="absolute bottom-1/4 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-2xl">
<div className="reveal-element mb-6 flex items-center gap-2 text-emerald-400/80">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
<span className="text-xs font-mono uppercase tracking-widest">Trust Established</span>
</div>
<h2 className="reveal-element text-3xl lg:text-5xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                        This Is When AI<br/>Starts Choosing You
                    </h2>
<p className="reveal-element delay-100 text-base lg:text-lg text-zinc-500 leading-relaxed mb-12 max-w-xl font-light">
                        After alignment, AI stops hesitating. Your brand begins to appear in direct answers, summaries, recommendations, and category explanations. This isn’t volume growth. It’s growth by trust.
                    </p>
<button className="reveal-element delay-200 group flex items-center gap-2 text-white text-sm hover:text-blue-400 transition-colors cursor-default">
<span>How We Begin</span>
<iconify-icon className="group-hover:translate-y-1 transition-transform" icon="solar:arrow-down-linear" width="16"></iconify-icon>
</button>
</div>
</section>

<section className="min-h-screen flex flex-col justify-center px-6 lg:px-20 py-24 border-l border-white/5 relative" id="begin">
<div className="max-w-xl">
<h2 className="reveal-element text-3xl lg:text-5xl font-medium text-white tracking-tight mb-6">
                        This Is the Entry Point
                    </h2>
<p className="reveal-element delay-100 text-base lg:text-lg text-zinc-500 leading-relaxed mb-10 font-light">
                        We don’t start with retainers or packages. We start with clarity. Most brands begin with a focused AI visibility audit: how AI currently interprets you, where confidence drops, and where competitors are trusted instead. Some brands continue. Some don’t. Both outcomes are useful.
                    </p>

<div className="reveal-element delay-200 border-t border-white/10 pt-8 opacity-50 pointer-events-none transition-all duration-700 blur-[2px]" id="form-container">
<div className="flex items-start gap-4 mb-8">
<iconify-icon className="text-white mt-1" icon="solar:ticket-sale-linear" width="20"></iconify-icon>
<p className="text-sm text-zinc-400 italic">
                                “Initial Visibility Audit — pricing depends on category complexity and AI confidence coverage. We’ll tell you upfront if it’s worth doing.”
                            </p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Company</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm p-3 text-sm text-white focus:border-white/40 focus:outline-none transition-colors placeholder:text-zinc-700" placeholder="Brand Name" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Website</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm p-3 text-sm text-white focus:border-white/40 focus:outline-none transition-colors placeholder:text-zinc-700" placeholder="domain.com" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-500 uppercase tracking-widest font-mono">Contact</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-sm p-3 text-sm text-white focus:border-white/40 focus:outline-none transition-colors placeholder:text-zinc-700" placeholder="work@email.com" type="email"/>
</div>
<button className="mt-4 w-full bg-white text-black font-medium text-sm py-4 rounded-sm hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 group" type="button">
<span>Reveal My AI Visibility</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>
</main>
</div>


    </>
  );
}
