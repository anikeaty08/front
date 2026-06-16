import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const menuBtn = document.getElementById('globalMobileMenuButton');
        const mobileMenu = document.getElementById('globalMobileMenu');
        
        if(menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                const isOpen = mobileMenu.dataset.state === 'open';
                mobileMenu.dataset.state = isOpen ? 'closed' : 'open';
                mobileMenu.classList.toggle('hidden');
                
                // Animate opacity class after delay for transition
                if(!isOpen) {
                    mobileMenu.classList.remove('hidden');
                    // Slight delay to allow display:block to render before opacity transition
                    setTimeout(() => {
                         mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
                    }, 10);
                } else {
                    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
                    // Wait for transition to finish before hiding
                    setTimeout(() => {
                        mobileMenu.classList.add('hidden');
                    }, 300);
                }

                // Change Icon
                menuBtn.innerHTML = !isOpen 
                    ? '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>'
                    : '<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>';
            });
        }

        // Initialize Icons
        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 w-full z-50 border-b border-white/5 bg-[#020408]/85 backdrop-blur-xl transition-all duration-300" id="global-nav">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a aria-label="Home" className="flex items-center gap-3 group cursor-pointer" href="/">
<div className="relative w-8 h-8 flex items-center justify-center">

<svg className="w-full h-full text-white group-hover:rotate-180 transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L13.5 8H10.5L12 2Z"></path>
<path d="M21 20L15.5 14L17.5 12L21 20Z"></path>
<path d="M3 20L8.5 14L6.5 12L3 20Z"></path>
</svg>

<div className="absolute inset-0 bg-indigo-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<span className="cursor-pointer text-lg font-medium text-white tracking-tight font-space-grotesk">
                    Fellowship Automation
                </span>
</a>

<div className="hidden md:flex items-center gap-10 text-sm text-slate-400 font-medium tracking-wide">
<a className="relative group py-2" href="/manifesto">
<span className="relative z-10 group-hover:text-white transition-colors duration-200">Manifesto</span>
<span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="relative group py-2" href="/arsenal">
<span className="relative z-10 group-hover:text-white transition-colors duration-200">Arsenal</span>
<span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="relative group py-2" href="/pricing">
<span className="relative z-10 group-hover:text-white transition-colors duration-200">Pricing</span>
<span className="absolute bottom-0 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
</a>

<a className="relative group overflow-hidden px-5 py-2 rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-indigo-500/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]" href="/join-guild">
<span className="flex items-center gap-2 z-10 relative">Join The Fellowship <svg className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
</a>
</div>

<button className="md:hidden text-slate-300 hover:text-white focus:outline-none transition-colors p-2 z-50" id="globalMobileMenuButton">
<svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24">
<path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
</div>

<div className="md:hidden hidden fixed inset-0 z-40 bg-[#020408]/98 backdrop-blur-2xl flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 pointer-events-none data-[state=open]:opacity-100 data-[state=open]:pointer-events-auto" id="globalMobileMenu">
<div className="flex flex-col items-center space-y-8 text-center p-6">
<a className="text-2xl text-slate-300 hover:text-white transition-colors tracking-tight font-heading" href="/manifesto">Manifesto</a>
<a className="text-2xl text-slate-300 hover:text-white transition-colors tracking-tight font-heading" href="/arsenal">Arsenal</a>
<a className="text-2xl text-slate-300 hover:text-white transition-colors tracking-tight font-heading" href="/pricing">Pricing</a>
<a className="mt-8 px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white text-lg font-medium hover:bg-white/10 hover:border-indigo-500/30 transition-all" href="/join-guild">
                    Join Guild
                </a>
</div>
</div>
</nav>


<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

<div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-blue-950/20 rounded-full blur-[120px] mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-indigo-950/15 rounded-full blur-[100px] mix-blend-screen"></div>

<svg className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] opacity-[0.03] animate-[spin-slow_60s_linear_infinite] text-slate-300" fill="none" stroke="currentColor" strokeWidth="0.2" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="40" stroke-dasharray="2 4"></circle>
<path d="M50 10V90M10 50H90M22 22L78 78M22 78L78 22" stroke-opacity="0.5"></path>
<circle cx="50" cy="50" r="15"></circle>
</svg>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mask-image:linear-gradient(to_bottom,transparent,black,transparent)"></div>
</div>

<section className="min-h-screen flex flex-col overflow-hidden z-10 pt-4 pr-4 pl-4 relative items-center justify-center">
<div className="text-center max-w-5xl mr-auto ml-auto relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none animate-pulse-slow"></div>

<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-950/30 text-indigo-200 text-xs font-medium tracking-widest uppercase mb-10 animate-[float-slow_4s_ease-in-out_infinite]">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                Systems Operational
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-medium tracking-tighter text-white mb-8 leading-[1.05] relative z-10">
<span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-[0_0_25px_rgba(255,255,255,0.1)]">
                    Transform Your Business.
                </span>
<span className="block text-transparent bg-clip-text bg-gradient-to-b from-slate-200 via-slate-400 to-slate-600">
                    Join The Fellowship.
                </span>
</h1>
<p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl mx-auto mb-14 leading-relaxed tracking-wide">
                A collective of AI-driven systems builders turning companies from <span className="text-white font-medium">AI-Ready</span> to <span className="text-white font-medium">AI-Driven</span>.
            </p>

<a className="btn-triad-trigger group relative inline-flex items-center justify-center pl-8 pr-10 py-5 bg-[#0a0f1e] text-white text-sm font-bold tracking-[0.2em] uppercase rounded-full border border-indigo-500/30 hover:border-indigo-400 hover:shadow-[0_0_40px_rgba(99,102,241,0.25)] transition-all duration-500 overflow-hidden cursor-pointer" href="/join-guild">
<span className="relative z-10 flex items-center gap-6">
                    Join The Fellowship
                    
                    
<div className="relative w-8 h-8">
<div className="triad-container absolute inset-0 animate-[spin-slow_10s_linear_infinite]">

<svg className="blade-1 absolute top-0 left-0 w-full h-full text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L13.5 12H10.5L12 2Z"></path>
</svg>

<svg className="blade-2 absolute top-0 left-0 w-full h-full text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" fill="currentColor" style={{transform: 'rotate(120deg)'}} viewbox="0 0 24 24">
<path d="M12 2L13.5 12H10.5L12 2Z"></path>
</svg>

<svg className="blade-3 absolute top-0 left-0 w-full h-full text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]" fill="currentColor" style={{transform: 'rotate(240deg)'}} viewbox="0 0 24 24">
<path d="M12 2L13.5 12H10.5L12 2Z"></path>
</svg>
</div>
</div>
</span>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-900/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out"></div>
</a>
</div>
</section>

<div className="relative z-10 flex justify-center py-12 opacity-50">
<svg className="w-6 h-6 text-slate-600 animate-pulse" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L13 14H11L12 2Z"></path>
<path d="M22 20L13 15L14 16L22 20Z"></path>
<path d="M2 20L11 15L10 16L2 20Z"></path>
</svg>
</div>

<section className="relative z-10 py-40 px-6 overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.02] pointer-events-none animate-[spin-slow_120s_linear_infinite]">
<svg className="w-full h-full text-white" fill="currentColor" viewbox="0 0 100 100">
<path d="M50 5 L53 50 H47 Z"></path>
<path d="M90 85 L53 53 L56 56 Z"></path>
<path d="M10 85 L47 53 L44 56 Z"></path>
</svg>
</div>

<div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-indigo-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-sm font-bold tracking-[0.3em] text-indigo-400 uppercase mb-16 drop-shadow-md">The Fellowship Manifesto</h2>
<div className="space-y-16 text-slate-300 font-light leading-relaxed">

<div className="text-2xl md:text-3xl space-y-4 font-normal text-white">
<p className="drop-shadow-lg">We believe operations should run themselves — not run you.</p>
<p className="drop-shadow-lg">We believe intelligence isn’t just an add-on, but a foundation.</p>
<p className="drop-shadow-lg">We believe every business deserves systems that <span className="text-indigo-200 text-glow-indigo italic">think, respond, and evolve</span>.</p>
</div>

<div className="w-px h-24 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent mx-auto"></div>

<div className="text-xl md:text-2xl max-w-3xl mx-auto text-slate-300">
<p className="">The Fellowship is a collective of engineers, builders, and founders united by a simple purpose: 
                    <span className="text-white font-medium">to transform modern companies into AI-driven organisms.</span></p>
</div>

<div className="grid md:grid-cols-3 gap-8 text-sm md:text-base text-slate-400 tracking-wide border-y border-white/5 py-12">
<div className="group hover:text-white transition-colors">
<div className="mb-4 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-layers w-6 h-6 mx-auto" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<p>"Where others see tasks,we see systems."</p>
</div>
<div className="group hover:text-white transition-colors">
<div className="mb-4 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-cpu w-6 h-6 mx-auto" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<p className="">"Where others see complexity,we see automation."</p>
</div>
<div className="group hover:text-white transition-colors">
<div className="mb-4 text-indigo-500 opacity-50 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-scan-line w-6 h-6 mx-auto" data-lucide="scan-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><path d="M7 12h10"></path></svg>
</div>
<p>"Where others see problems,we see patterns."</p>
</div>
</div>

<div className="text-2xl md:text-3xl pt-8">
<p className="mb-4">When you join The Fellowship, you join a new class of business —</p>
<p className="font-heading font-medium text-white tracking-tight text-3xl md:text-4xl text-glow-white mb-6">
                        Autonomous. Scalable. Relentless.
                    </p>
<p className="text-lg text-indigo-200">A business that works while you lead the vision.</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-32 px-6 bg-[#03050a] border-t border-white/5">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<h2 className="text-4xl md:text-5xl font-heading font-medium text-white mb-4 tracking-tight">Arsenal of Automation</h2>
<p className="text-slate-400 text-lg font-light max-w-md">Equipping your business with high-grade intelligence.</p>
</div>

<div className="hidden md:block opacity-50">
<svg className="w-12 h-12 text-indigo-500/50 animate-spin-slow" fill="none" stroke="currentColor" strokeWidth="1" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-dasharray="4 4"></circle><path d="M12 2v20M2 12h20"></path></svg>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group glass-panel p-10 rounded-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-32 h-32 bg-indigo-600/10 blur-[50px] rounded-full group-hover:bg-indigo-500/20 transition-all"></div>
<div className="mb-8 text-slate-300 group-hover:text-indigo-400 transition-colors">
<svg className="lucide lucide-mic w-10 h-10 stroke-[1]" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<h3 className="text-xl font-medium text-white mb-4">AI Voice Agents</h3>
<p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        Your frontline operator — qualifying leads, answering calls, routing messages, and running 24/7.
                    </p>
</div>

<div className="group glass-panel p-10 rounded-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-32 h-32 bg-blue-600/10 blur-[50px] rounded-full group-hover:bg-blue-500/20 transition-all"></div>
<div className="mb-8 text-slate-300 group-hover:text-blue-400 transition-colors">
<svg className="lucide lucide-workflow w-10 h-10 stroke-[1]" data-lucide="workflow" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" width="8" x="3" y="3"></rect><path d="M7 11v4a2 2 0 0 0 2 2h4"></path><rect height="8" rx="2" width="8" x="13" y="13"></rect></svg>
</div>
<h3 className="text-xl font-medium text-white mb-4">Workflow Systems</h3>
<p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        Automate onboarding, hiring, follow-ups, reporting, and operations with AI-native architecture.
                    </p>
</div>

<div className="group glass-panel p-10 rounded-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-32 h-32 bg-cyan-600/10 blur-[50px] rounded-full group-hover:bg-cyan-500/20 transition-all"></div>
<div className="mb-8 text-slate-300 group-hover:text-cyan-400 transition-colors">
<svg className="lucide lucide-cpu w-10 h-10 stroke-[1]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<h3 className="text-xl font-medium text-white mb-4">Systems Integration</h3>
<p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        Backend engineering using Python, APIs, Airtable, CRMs, and voice systems to unify operations.
                    </p>
</div>

<div className="group glass-panel p-10 rounded-xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
<div className="absolute -right-4 -top-4 w-32 h-32 bg-slate-600/10 blur-[50px] rounded-full group-hover:bg-slate-500/20 transition-all"></div>
<div className="mb-8 text-slate-300 group-hover:text-slate-200 transition-colors">
<svg className="lucide lucide-bar-chart-3 w-10 h-10 stroke-[1]" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="text-xl font-medium text-white mb-4">BI Automation</h3>
<p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        Transform scattered processes into intelligent, interconnected workflows.
                    </p>
</div>
</div>
</div>
</section>

<div className="relative z-10 flex justify-center py-12 opacity-50">
<svg className="w-8 h-8 text-slate-600 animate-pulse" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L13 14H11L12 2Z"></path>
<path d="M22 20L13 15L14 16L22 20Z"></path>
<path d="M2 20L11 15L10 16L2 20Z"></path>
</svg>
</div>

<section className="z-10 pt-32 pr-6 pb-32 pl-6 relative">
<div className="glass-panel max-w-5xl mx-auto rounded-xl p-16 md:p-24 text-center relative overflow-hidden border-indigo-500/20">

<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-400/50 to-transparent"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-transparent via-indigo-950/40 to-transparent blur-3xl pointer-events-none"></div>
<h2 className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-heading font-medium text-white mb-8 tracking-tight">Ready to Join The Fellowship?</h2>
<p className="relative z-10 text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Step into a new class of operations.
                Let AI run the work while you lead the vision.
            </p>
<a className="relative z-10 btn-triad-trigger group inline-flex items-center justify-center px-12 py-5 bg-white text-[#020408] text-sm font-bold tracking-[0.2em] uppercase rounded-full hover:bg-slate-200 transition-all duration-300" href="/join-guild">
<span className="flex items-center gap-4">
                    Join The Fellowship
                     
<div className="relative w-6 h-6">
<div className="triad-container absolute inset-0">
<svg className="blade-1 absolute top-0 left-0 w-full h-full text-[#020408]" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L13.5 12H10.5L12 2Z"></path>
</svg>
<svg className="blade-2 absolute top-0 left-0 w-full h-full text-[#020408]" fill="currentColor" style={{transform: 'rotate(120deg)'}} viewbox="0 0 24 24">
<path d="M12 2L13.5 12H10.5L12 2Z"></path>
</svg>
<svg className="blade-3 absolute top-0 left-0 w-full h-full text-[#020408]" fill="currentColor" style={{transform: 'rotate(240deg)'}} viewbox="0 0 24 24">
<path d="M12 2L13.5 12H10.5L12 2Z"></path>
</svg>
</div>
</div>
</span>
</a>
</div>
</section>

<footer className="relative z-10 border-t border-white/5 bg-[#010204] pt-20 pb-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col items-center">

<div className="bg-white/5 border-white/5 border rounded-full mb-8 pt-4 pr-4 pb-4 pl-4">
<svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2L13.5 12H10.5L12 2Z"></path>
<path d="M21 20L12.5 14L13.5 15L21 20Z"></path>
<path d="M3 20L11.5 14L10.5 15L3 20Z"></path>
</svg>
</div>
<div className="text-white font-heading text-lg tracking-wide mb-2">Fellowship Automation</div>
<div className="text-slate-500 text-sm tracking-widest uppercase mb-12">From AI-Ready to AI-Driven.</div>
<div className="flex flex-wrap justify-center gap-10 text-xs text-slate-500 font-medium tracking-[0.2em] uppercase mb-12">
<a className="hover:text-white transition-colors" href="/manifesto">Manifesto</a>
<a className="hover:text-white transition-colors" href="/arsenal">Arsenal</a>
<a className="hover:text-white transition-colors" href="/join-guild">Join</a>
</div>
<div className="w-full h-px bg-white/5 max-w-xs mx-auto mb-8"></div>
<div className="text-[10px] text-slate-700 font-mono">
                © 2024 THE FELLOWSHIP. SYSTEMS OPERATIONAL.
            </div>
</div>
</footer>



    </>
  );
}
