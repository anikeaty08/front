import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Icons
        lucide.createIcons();

        // Chart.js Configuration
        const ctx = document.getElementById('heroChart').getContext('2d');
        let gradient = ctx.createLinearGradient(0, 0, 0, 40);
        gradient.addColorStop(0, 'rgba(255, 215, 0, 0.4)'); // Gold
        gradient.addColorStop(1, 'rgba(255, 215, 0, 0.0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['M', 'T', 'W', 'T', 'F'],
                datasets: [{
                    data: [30, 45, 60, 85, 95],
                    borderColor: '#FFD700',
                    borderWidth: 1.5,
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false }, tooltip: { enabled: false } },
                scales: { x: { display: false }, y: { display: false } },
                layout: { padding: 0 }
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
<div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-white opacity-40 blur-[100px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-[#FFD700] opacity-[0.03] blur-[120px]"></div>

<div className="absolute inset-0 opacity-[0.3]" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%220.5%22/%3E%3C/svg%3E\')'}}></div>
</div>

<header className="sticky top-0 z-50 pt-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto transition-all duration-300">
<div className="flex glass-panel rounded-full py-3 px-6 shadow-sm items-center justify-between">
<a className="font-sans-ui text-lg tracking-[-0.05em] text-[#001F3F] font-semibold flex items-center gap-1" href="#">
                VANTAGE<span className="text-[#FFD700]">.</span>
</a>
<nav className="hidden md:flex items-center gap-10 font-sans-ui text-[11px] uppercase tracking-[0.2em] text-[#001F3F]/70">
<a className="hover:text-[#001F3F] transition-colors duration-300" href="#methodology">Protocol</a>
<a className="hover:text-[#001F3F] transition-colors duration-300" href="#features">Features</a>
<a className="hover:text-[#001F3F] transition-colors duration-300" href="#testimonials">Stories</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#001F3F]/10 px-5 py-2 text-[10px] font-sans-ui uppercase tracking-widest text-[#001F3F] hover:bg-[#001F3F] hover:text-[#F5F5DC] transition-all duration-300 group" href="#apply">
<span>Login</span>
</a>
</div>
</div>
</header>
<main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-24">

<section className="relative overflow-hidden group pb-8">
<div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20 pt-12 pb-10">

<div className="lg:col-span-6 flex flex-col animate-slide-in-left justify-center" style={{animationDelay: '0.1s'}}>
<div className="max-w-xl">
<div className="mb-6 inline-flex items-center gap-3">
<span className="h-px w-8 bg-[#001F3F]/30"></span>
<span className="text-[10px] font-sans-ui uppercase tracking-[0.25em] text-[#001F3F]/60">Executive Performance Protocol</span>
</div>
<h1 className="sm:text-6xl lg:text-[4.5rem] leading-[0.95] animate-fade-in-up text-5xl font-medium text-[#001F3F] tracking-tight font-serif-display" style={{animationDelay: '0.2s'}}>Reclaim 15 hours <br/> <span className="italic text-[#001F3F]/80">every single week.</span></h1>
<p className="mt-8 text-lg font-serif-display leading-relaxed text-[#001F3F]/70 max-w-md animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                            The operating system for high-output leaders. Eliminate decision fatigue and install the protocols used by Fortune 500 CEOs to scale without burnout.
                        </p>

<div className="flex flex-col sm:flex-row gap-5 mt-12 items-start sm:items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
<button className="relative overflow-hidden flex items-center justify-center gap-3 bg-[#001F3F] text-[#F5F5DC] rounded-none px-8 py-4 hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5 group w-full sm:w-auto">
<span className="absolute inset-0 w-full h-full bg-[#FFD700]/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
<span className="relative font-sans-ui text-[11px] uppercase tracking-[0.2em] font-medium">Watch the Masterclass</span>
<svg className="relative lucide lucide-play-circle group-hover:text-[#FFD700] transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
</button>
<div className="flex items-center gap-3 text-[#001F3F]/60">
<span className="flex h-2 w-2 rounded-full bg-neutral-500 animate-pulse"></span>
<span className="text-[10px] font-sans-ui uppercase tracking-widest">Live Workshop Today</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-6 relative h-[500px] lg:h-[600px] flex items-center justify-center animate-slide-in-right" style={{animationDelay: '0.3s'}}>
<div className="relative w-[85%] aspect-[4/5] overflow-hidden bg-[#001F3F] z-10 shadow-2xl shadow-[#001F3F]/20">
<img alt="Executive Strategy" className="h-full w-full object-cover opacity-60 mix-blend-overlay grayscale hover:scale-105 transition-transform duration-1000" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=2664&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-tr from-[#001F3F]/90 via-transparent to-[#FFD700]/20"></div>
<div className="absolute bottom-8 left-8 right-8 border-t border-[#F5F5DC]/20 pt-6">
<div className="flex justify-between items-end text-[#F5F5DC]">
<div>
<div className="text-[9px] font-sans-ui uppercase tracking-widest opacity-60 mb-2">Current Efficiency</div>
<div className="text-4xl font-serif-display">94<span className="text-[#FFD700] text-xl">%</span></div>
</div>
<div className="h-10 w-24">
<canvas height="40" id="heroChart" style={{display: 'block', boxSizing: 'border-box', height: '40px', width: '96px'}} width="96"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-y border-[#001F3F]/5 py-8 mt-4 animate-fade-in" style={{animationDelay: '1s'}}>
<p className="text-center text-[9px] font-sans-ui uppercase tracking-[0.2em] text-[#001F3F]/40 mb-6">Trusted by executives at</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale mix-blend-multiply">
<span className="font-sans-ui font-bold tracking-tight text-lg text-[#001F3F]">GOLDMAN</span>
<span className="font-sans-ui font-bold tracking-tight text-lg text-[#001F3F]">MCKINSEY</span>
<span className="font-sans-ui font-bold tracking-tight text-lg text-[#001F3F]">STRIPE</span>
<span className="font-sans-ui font-bold tracking-tight text-lg text-[#001F3F]">SEQUOIA</span>
<span className="font-sans-ui font-bold tracking-tight text-lg text-[#001F3F]">LINEAR</span>
</div>
</div>
</section>

<section className="py-24 relative">
<div className="absolute inset-0 bg-[#001F3F] -mx-[100vw] w-[300vw] left-[50%] -translate-x-1/2 -z-20"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<div className="flex gap-4 items-start">
<div className="mt-1.5 p-1 rounded bg-[#F5F5DC]/10 text-[#F5F5DC]">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 9v4"></path><path d="M12 17h.01"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>
</div>
<div>
<h3 className="text-[#F5F5DC] font-serif-display text-2xl mb-2">The Efficiency Paradox</h3>
<p className="text-[#F5F5DC]/60 font-sans-ui text-sm leading-relaxed">You are working harder than ever, yet your strategic impact is shrinking. Your calendar is a mosaic of low-leverage obligations.</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="mt-1.5 p-1 rounded bg-[#FFD700]/10 text-[#FFD700]">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18.6 18.6 12 12"></path><path d="M12 12 5.4 5.4"></path><path d="M21 12a9 9 0 1 1-6.21-16.1"></path></svg>
</div>
<div>
<h3 className="text-[#F5F5DC] font-serif-display text-2xl mb-2">The Cost of Chaos</h3>
<p className="text-[#F5F5DC]/60 font-sans-ui text-sm leading-relaxed">Decision fatigue is eroding your judgment. You are one crisis away from burnout, leading a team that waits for your instructions instead of taking initiative.</p>
</div>
</div>
</div>
<div className="bg-[#F5F5DC]/5 border border-[#F5F5DC]/10 p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
<span className="text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#FFD700] mb-4 block">The Solution</span>
<h2 className="text-3xl md:text-4xl font-serif-display text-[#F5F5DC] mb-6">Install the <span className="italic text-[#FFD700]">Vantage OS.</span></h2>
<p className="text-[#F5F5DC]/70 font-sans-ui leading-relaxed mb-8">
                         We don't teach "time management." We install a proprietary operating system based on neuroscience and lean manufacturing principles.
                     </p>
<div className="h-px w-full bg-[#F5F5DC]/10 mb-8"></div>
<div className="flex gap-8">
<div>
<div className="text-2xl font-serif-display text-[#F5F5DC]">3.5x</div>
<div className="text-[9px] uppercase tracking-widest text-[#F5F5DC]/40 mt-1">Output Multiplier</div>
</div>
<div>
<div className="text-2xl font-serif-display text-[#F5F5DC]">-15h</div>
<div className="text-[9px] uppercase tracking-widest text-[#F5F5DC]/40 mt-1">Work Week</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24" id="methodology">
<div className="text-center mb-16">
<span className="text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#001F3F]/50 block mb-3">Core Pillars</span>
<h2 className="text-4xl lg:text-5xl font-serif-display text-[#001F3F]">The Science of <span className="italic text-[#001F3F]/60">Peak Performance.</span></h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative bg-white border border-[#001F3F]/5 p-8 h-80 flex flex-col justify-between hover:border-[#001F3F]/20 transition-all duration-500 hover:shadow-lg overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-all text-[#001F3F]/10 group-hover:text-[#001F3F]">
<svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
</div>
<div>
<span className="text-[9px] font-sans-ui uppercase tracking-widest text-[#001F3F]/40 border border-[#001F3F]/10 px-2 py-1 rounded-sm">Pillar 01</span>
<h3 className="mt-6 text-2xl font-serif-display text-[#001F3F]">Neuro-Timing</h3>
</div>
<div className="relative z-10">
<p className="text-sm font-sans-ui text-[#001F3F]/60 leading-relaxed">Aligning high-cognitive load tasks with your specific circadian peaks to double output quality.</p>
</div>
</div>

<div className="group relative bg-[#001F3F] text-[#F5F5DC] p-8 h-80 flex flex-col justify-between shadow-xl overflow-hidden">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
<div>
<span className="text-[9px] font-sans-ui uppercase tracking-widest text-[#FFD700] border border-[#FFD700]/30 px-2 py-1 rounded-sm">Pillar 02</span>
<h3 className="mt-6 text-2xl font-serif-display text-[#F5F5DC]">Focus-Stacking</h3>
</div>
<div className="relative z-10">
<p className="text-sm font-sans-ui text-[#F5F5DC]/70 leading-relaxed">A protocol to eliminate context switching. Grouping deep work blocks to achieve flow state on demand.</p>
<div className="mt-6 flex gap-1">
<div className="h-2 w-8 bg-[#FFD700] rounded-sm"></div>
<div className="h-2 w-8 bg-[#FFD700] rounded-sm"></div>
<div className="h-2 w-8 bg-[#FFD700]/30 rounded-sm"></div>
</div>
</div>
</div>

<div className="group relative bg-white border border-[#001F3F]/5 p-8 h-80 flex flex-col justify-between hover:border-[#001F3F]/20 transition-all duration-500 hover:shadow-lg overflow-hidden">
<div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-all text-[#001F3F]/10 group-hover:text-[#001F3F]">
<svg fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
</div>
<div className="">
<span className="text-[9px] font-sans-ui uppercase tracking-widest text-[#001F3F]/40 border border-[#001F3F]/10 px-2 py-1 rounded-sm">Pillar 03</span>
<h3 className="mt-6 text-2xl font-serif-display text-[#001F3F]">90-Minute Burst</h3>
</div>
<div className="relative z-10">
<p className="text-sm font-sans-ui text-[#001F3F]/60 leading-relaxed">Leveraging ultradian rhythms. Sprint for 90 minutes, recover for 20. The athlete's approach to business.</p>
</div>
</div>
</div>
</section>

<section className="mt-24" id="features">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
<div className="space-y-6">
<h2 className="text-4xl font-serif-display text-[#001F3F] mb-8">Program <span className="italic">Architecture</span></h2>

<div className="group p-6 border border-[#001F3F]/5 bg-white hover:border-[#001F3F]/30 transition-all cursor-pointer rounded-lg">
<div className="flex items-start justify-between">
<div className="flex items-center gap-4">
<div className="p-2 bg-[#001F3F]/5 rounded text-[#001F3F] group-hover:bg-[#001F3F] group-hover:text-[#FFD700] transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path></svg>
</div>
<h3 className="font-serif-display text-xl text-[#001F3F]">Strategic Audit</h3>
</div>
<svg className="text-[#001F3F]/30 group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="mt-3 text-sm text-[#001F3F]/60 font-sans-ui pl-11 group-hover:text-[#001F3F]/80 transition-colors">We begin with a forensic analysis of your calendar and decision logs to identify leverage points.</p>
</div>

<div className="group p-6 border border-[#001F3F]/5 bg-white hover:border-[#001F3F]/30 transition-all cursor-pointer rounded-lg">
<div className="flex items-start justify-between">
<div className="flex items-center gap-4">
<div className="p-2 bg-[#001F3F]/5 rounded text-[#001F3F] group-hover:bg-[#001F3F] group-hover:text-[#FFD700] transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<h3 className="font-serif-display text-xl text-[#001F3F]">The Vault Access</h3>
</div>
<svg className="text-[#001F3F]/30 group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="mt-3 text-sm text-[#001F3F]/60 font-sans-ui pl-11 group-hover:text-[#001F3F]/80 transition-colors">Unlimited access to our library of SOPs, delegation scripts, and hiring templates.</p>
</div>

<div className="group p-6 border border-[#001F3F]/5 bg-white hover:border-[#001F3F]/30 transition-all cursor-pointer rounded-lg">
<div className="flex items-start justify-between">
<div className="flex items-center gap-4">
<div className="p-2 bg-[#001F3F]/5 rounded text-[#001F3F] group-hover:bg-[#001F3F] group-hover:text-[#FFD700] transition-colors">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="font-serif-display text-xl text-[#001F3F]">Executive Roundtables</h3>
</div>
<svg className="text-[#001F3F]/30 group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<p className="mt-3 text-sm text-[#001F3F]/60 font-sans-ui pl-11 group-hover:text-[#001F3F]/80 transition-colors">Bi-weekly strategy sessions with a curated group of non-competing peers.</p>
</div>
</div>

<div className="relative bg-[#001F3F] p-8 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#001F3F] to-black/40"></div>

<div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(#F5F5DC 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: '0.05'}}></div>
<div className="relative z-10 w-full max-w-sm glass-panel p-6 rounded-xl border border-white/10">
<div className="flex items-center justify-between mb-6">
<span className="text-[10px] uppercase text-[#001F3F]/60 tracking-widest">Protocol Status</span>
<span className="h-2 w-2 rounded-full bg-[#32CD32] shadow-[0_0_10px_#32CD32]"></span>
</div>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#001F3F]/5 flex items-center justify-center">1</div>
<div className="h-2 bg-[#001F3F]/10 rounded w-full overflow-hidden">
<div className="h-full bg-[#001F3F] w-[100%] animate-[shimmer_2s_infinite]"></div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#001F3F]/5 flex items-center justify-center">2</div>
<div className="h-2 bg-[#001F3F]/10 rounded w-full overflow-hidden">
<div className="h-full bg-[#001F3F] w-[75%]"></div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-[#001F3F]/5 flex items-center justify-center">3</div>
<div className="h-2 bg-[#001F3F]/10 rounded w-full overflow-hidden">
<div className="h-full bg-[#001F3F] w-[40%]"></div>
</div>
</div>
</div>
<div className="mt-8 flex justify-between items-end">
<div className="text-xs text-[#001F3F]/50 font-sans-ui">Optimization</div>
<div className="text-2xl font-serif-display text-[#001F3F]">+240%</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-24" id="testimonials">
<h2 className="text-3xl font-serif-display text-[#001F3F] mb-10 text-center">Transformations</h2>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[500px]">

<div className="md:col-span-2 md:row-span-2 bg-[#001F3F] p-8 text-[#F5F5DC] flex flex-col justify-between relative overflow-hidden group">
<div className="absolute top-0 right-0 p-12 opacity-10">
<svg className="text-[#FFD700]" fill="currentColor" height="100" viewbox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00001 15 9.00001 15 9.00001 15C9.00001 10 12.017 10.5 14.017 10.5V6.5C14.017 6.5 6.00001 5.5 6.00001 13V21H14.017ZM21.017 21L21.017 18C21.017 16.8954 20.1216 16 19.017 16H16C16 15 16 15 16 15C16 10 19.017 10.5 21.017 10.5V6.5C21.017 6.5 13.017 5.5 13.017 13V21H21.017Z"></path></svg>
</div>
<div className="relative z-10">
<div className="flex gap-1 mb-4">
<svg className="w-4 h-4 text-[#FFD700] fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 text-[#FFD700] fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 text-[#FFD700] fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 text-[#FFD700] fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-4 h-4 text-[#FFD700] fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="font-serif-display text-2xl lg:text-3xl leading-relaxed">
                            "I went from 70-hour weeks and constant fire-fighting to 35 hours of high-leverage work. VANTAGE didn't just save my time, it saved my company."
                        </p>
</div>
<div className="mt-8 flex items-center gap-4">
<img alt="CEO" className="w-12 h-12 rounded-full border-2 border-[#FFD700]/20 grayscale" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-sans-ui text-sm font-semibold">David R.</div>
<div className="text-[10px] uppercase tracking-widest text-[#F5F5DC]/50">Founder, Series B Fintech</div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-1 glass-panel p-6 flex flex-col justify-center items-center text-center">
<span className="text-4xl font-serif-display text-[#001F3F]">+300<span className="text-[#FFD700]">%</span></span>
<span className="text-[10px] uppercase tracking-widest text-[#001F3F]/50 mt-2">Revenue Growth</span>
</div>

<div className="md:col-span-1 md:row-span-2 bg-white border border-[#001F3F]/5 p-6 flex flex-col justify-center">
<p className="font-serif-display text-lg text-[#001F3F] italic leading-relaxed">"The Neuro-Timing module completely changed how I structure my day. I accomplish more by 11am than I used to in a whole day."</p>
<div className="mt-4 text-[10px] uppercase tracking-widest text-[#001F3F]/50">— Sarah K., CMO</div>
</div>

<div className="md:col-span-1 md:row-span-1 bg-[#F5F5DC] border border-[#001F3F]/10 p-6 flex flex-col justify-center items-center text-center">
<span className="text-4xl font-serif-display text-[#001F3F]">1200+</span>
<span className="text-[10px] uppercase tracking-widest text-[#001F3F]/50 mt-2">Executives Trained</span>
</div>
</div>
</section>

<section className="mt-24 max-w-3xl mx-auto">
<h2 className="text-3xl font-serif-display text-[#001F3F] mb-10 text-center">Common Queries</h2>
<div className="space-y-4">
<details className="group bg-white border border-[#001F3F]/5 rounded-lg open:border-[#001F3F]/20 transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6">
<span className="font-sans-ui font-medium text-[#001F3F]">Is this just another time management course?</span>
<span className="relative ml-4 h-4 w-4 shrink-0">
<svg className="icon-plus absolute inset-0 h-4 w-4 text-[#001F3F]/50" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<svg className="icon-minus absolute inset-0 h-4 w-4 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#001F3F]/70 font-sans-ui leading-relaxed">
                        No. Time management is about squeezing more into your day. VANTAGE is about energy management and leverage. We install a system that allows you to do less but achieve significantly more.
                    </div>
</details>
<details className="group bg-white border border-[#001F3F]/5 rounded-lg open:border-[#001F3F]/20 transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6">
<span className="font-sans-ui font-medium text-[#001F3F]">How much time does the program require?</span>
<span className="relative ml-4 h-4 w-4 shrink-0">
<svg className="icon-plus absolute inset-0 h-4 w-4 text-[#001F3F]/50" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<svg className="icon-minus absolute inset-0 h-4 w-4 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#001F3F]/70 font-sans-ui leading-relaxed">
                        The program is designed for busy executives. The initial audit takes 2 hours. After that, implementation requires about 30 minutes per day for 2 weeks. Most executives reclaim 5+ hours in their first week.
                    </div>
</details>
<details className="group bg-white border border-[#001F3F]/5 rounded-lg open:border-[#001F3F]/20 transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6">
<span className="font-sans-ui font-medium text-[#001F3F]">Does this work for teams?</span>
<span className="relative ml-4 h-4 w-4 shrink-0">
<svg className="icon-plus absolute inset-0 h-4 w-4 text-[#001F3F]/50" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<svg className="icon-minus absolute inset-0 h-4 w-4 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#001F3F]/70 font-sans-ui leading-relaxed">
                        Yes. Once the leader installs the OS, we have specific modules for cascading these protocols to your C-suite and management layers to create a high-velocity culture.
                    </div>
</details>
<details className="group bg-white border border-[#001F3F]/5 rounded-lg open:border-[#001F3F]/20 transition-all duration-300">
<summary className="flex cursor-pointer items-center justify-between p-6">
<span className="font-sans-ui font-medium text-[#001F3F]">What is the refund policy?</span>
<span className="relative ml-4 h-4 w-4 shrink-0">
<svg className="icon-plus absolute inset-0 h-4 w-4 text-[#001F3F]/50" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 4v16m8-8H4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
<svg className="icon-minus absolute inset-0 h-4 w-4 text-[#001F3F]" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4" strokeLinecap="round" strokeLinejoin="round"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-[#001F3F]/70 font-sans-ui leading-relaxed">
                        We offer a "Double Investment" guarantee. If you don't generate ROI worth at least 2x the program cost in saved time or new revenue within 90 days, we refund you in full.
                    </div>
</details>
</div>
</section>

<section className="mt-24 mb-12" id="apply">
<div className="bg-[#001F3F] text-[#F5F5DC] rounded-[2rem] p-8 md:p-16 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">

<div>
<span className="text-[10px] font-sans-ui uppercase tracking-[0.2em] text-[#FFD700] mb-4 block">Application Only</span>
<h2 className="text-4xl md:text-5xl font-serif-display mb-6">Master your time.<br/>Master your <span className="text-[#FFD700]">market.</span></h2>
<ul className="space-y-4 mb-8 text-[#F5F5DC]/80 font-sans-ui text-sm">
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-[#FFD700]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                1-on-1 Strategic Audit
                            </li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-[#FFD700]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Lifetime Access to The Vault
                            </li>
<li className="flex items-center gap-3">
<svg className="w-5 h-5 text-[#FFD700]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                90-Day ROI Guarantee
                            </li>
</ul>
</div>

<div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-[#F5F5DC]/60">First Name</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-[#F5F5DC] focus:outline-none focus:border-[#FFD700] transition-colors" placeholder="John" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-[#F5F5DC]/60">Last Name</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-[#F5F5DC] focus:outline-none focus:border-[#FFD700] transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-[#F5F5DC]/60">Work Email</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-[#F5F5DC] focus:outline-none focus:border-[#FFD700] transition-colors" placeholder="john@company.com" type="email"/>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-[#F5F5DC]/60">Revenue Range</label>
<select className="w-full bg-transparent border-b border-white/20 py-2 text-[#F5F5DC] focus:outline-none focus:border-[#FFD700] transition-colors appearance-none cursor-pointer">
<option className="text-[#001F3F]">$1M - $5M</option>
<option className="text-[#001F3F]">$5M - $20M</option>
<option className="text-[#001F3F]">$20M+</option>
</select>
</div>
<div className="space-y-1">
<label className="text-[10px] uppercase tracking-widest text-[#F5F5DC]/60">Primary Constraint</label>
<select className="w-full bg-transparent border-b border-white/20 py-2 text-[#F5F5DC] focus:outline-none focus:border-[#FFD700] transition-colors appearance-none cursor-pointer">
<option className="text-[#001F3F]">Decision Fatigue</option>
<option className="text-[#001F3F]">Team Reliance</option>
<option className="text-[#001F3F]">Lack of Strategy Time</option>
</select>
</div>
<button className="w-full mt-6 bg-[#FFD700] text-[#001F3F] font-sans-ui text-xs font-bold uppercase tracking-widest py-4 hover:bg-white transition-colors duration-300" type="submit">
                                Apply for Access
                            </button>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-[#001F3F]/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="font-sans-ui font-semibold text-[#001F3F]">VANTAGE.</span>
<span className="text-xs text-[#001F3F]/50">© 2024</span>
</div>
<div className="flex items-center gap-8">
<a className="text-[10px] uppercase tracking-widest text-[#001F3F]/60 hover:text-[#001F3F] transition-colors" href="#">Case Studies</a>
<a className="text-[10px] uppercase tracking-widest text-[#001F3F]/60 hover:text-[#001F3F] transition-colors" href="#">Pricing</a>
<a className="text-[10px] uppercase tracking-widest text-[#001F3F]/60 hover:text-[#001F3F] transition-colors" href="#">Login</a>
</div>
<div className="flex gap-4">
<div className="h-8 w-8 rounded-full border border-[#001F3F]/10 flex items-center justify-center text-[#001F3F] hover:bg-[#001F3F] hover:text-[#F5F5DC] transition-all cursor-pointer">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
<div className="h-8 w-8 rounded-full border border-[#001F3F]/10 flex items-center justify-center text-[#001F3F] hover:bg-[#001F3F] hover:text-[#F5F5DC] transition-all cursor-pointer">
<svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</div>
</div>
</footer>
</main>


    </>
  );
}
