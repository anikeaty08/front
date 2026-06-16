import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#0A0A0F',
surface: '#0D1117',
card: 'rgba(255, 255, 255, 0.02)',
border: 'rgba(255, 255, 255, 0.08)',
},
animation: {
'blob': 'blob 7s infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



        // Icons
        lucide.createIcons();

        // Reveal Animation
        const revealElements = document.querySelectorAll('.reveal');
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        revealElements.forEach(el => revealObserver.observe(el));

        // Tab Logic
        function switchTab(tabId) {
            // Update buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-white/10', 'text-white', 'border-orange-500/50', 'shadow-[0_0_15px_rgba(249,115,22,0.2)]');
                btn.classList.add('text-zinc-400', 'border-transparent');
                
                if(btn.id === `tab-${tabId}`) {
                    btn.classList.remove('text-zinc-400', 'border-transparent');
                    btn.classList.add('bg-white/10', 'text-white', 'border-orange-500/50', 'shadow-[0_0_15px_rgba(249,115,22,0.2)]');
                }
            });

            // Update content (Simple display toggle for demo, usually use opacity fade)
            // In a real app we'd fetch content, but here we just simulate content change
            const content = document.getElementById('content-finance');
            content.style.opacity = '0';
            
            setTimeout(() => {
                // For this demo, I'm not duplicating content blocks in HTML to keep code block size managed. 
                // I'm assuming the visual style of the active tab is the key requirement.
                // In production, you would toggle `hidden` classes on different content divs.
                content.style.opacity = '1';
            }, 200);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity font-geist" href="#">
                OVIDIUS<span className="text-orange-500 font-geist">.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors font-geist" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors font-geist" href="#case-studies">Case Studies</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors font-geist" href="#about">About</a>
<a className="text-sm font-medium text-zinc-400 hover:text-white transition-colors font-geist" href="#process">Process</a>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="group inline-flex items-center justify-center overflow-hidden transition-all duration-300 hover:bg-white/10 hover:ring-1 hover:ring-orange-500/50 hover:text-orange-400 font-medium text-white bg-white/5 h-9 rounded-full pr-6 pl-6 relative" href="#contact">
<span className="text-xs font-medium tracking-wide font-geist">Book a Call</span>
<div className="absolute inset-0 -z-10 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-orange-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
</a>
</div>

<button className="md:hidden p-2 text-zinc-400 hover:text-white">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden pt-20 relative items-center justify-center">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="reveal inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 mb-8 active">
<span className="flex h-2 w-2 rounded-full bg-orange-500"></span>
<span className="text-xs font-semibold text-orange-400 tracking-wide uppercase font-geist">Enterprise AI Implementation</span>
</div>
<h1 className="reveal delay-100 leading-[1.1] active md:text-6xl text-5xl font-medium text-white tracking-tight font-playfair mb-8">
    Your AI strategy is collecting dust. <br/>
<span className="text-zinc-500 font-playfair font-medium">We build systems that collect ROI.</span>
</h1>
<p className="reveal delay-200 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed active font-geist">
                We partner with Fortune 500 companies to deploy production-grade AI systems. Not another strategy deck. Not another PoC stuck in staging. Real systems. Real results.
            </p>
<div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 active">
<a className="inline-flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors font-semibold text-black font-geist bg-white h-12 rounded-full pr-8 pl-8" href="#contact">
                    Book Strategy Call
                    <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-orange-500/30 transition-all font-geist" href="#case-studies">
                    View Case Studies
                </a>
</div>
<div className="reveal delay-500 mt-20 border-t border-white/5 pt-10 active">
<p className="text-xs text-zinc-500 uppercase tracking-widest mb-6 font-geist">Trusted by teams at</p>
<div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-lg font-bold tracking-tight font-geist">ACME Corp</span>
<span className="text-lg font-bold tracking-tight font-geist">GlobalBank</span>
<span className="text-lg font-bold tracking-tight font-geist">FinTech.io</span>
<span className="text-lg font-bold tracking-tight font-geist">HealthPlus</span>
<span className="text-lg font-bold tracking-tight font-geist">LogistiCo</span>
</div>
</div>
</div>
</section>

<section className="border-y bg-[#07070A] border-white/5 pt-32 pb-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="reveal text-3xl md:text-4xl tracking-tight mb-4 font-playfair font-medium">You've been here before.</h2>
<p className="reveal delay-100 text-zinc-400 text-lg font-geist">The gap between AI potential and reality isn't technology. It's execution.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal delay-100 group p-8 rounded-2xl bg-[#0D1117] border border-white/5 hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500">
<svg className="lucide lucide-file-x w-6 h-6" data-lucide="file-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m14.5 12.5-5 5"></path><path d="m9.5 12.5 5 5"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight font-geist">The Deck That Went Nowhere</h3>
<p className="text-zinc-500 text-sm leading-relaxed font-geist">Six figures on consultants. Beautiful slides. Then... nothing. The transformation lives in a forgotten folder while competitors ship.</p>
</div>

<div className="reveal delay-200 group p-8 rounded-2xl bg-[#0D1117] border border-white/5 hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500">
<svg className="lucide lucide-refresh-ccw w-6 h-6" data-lucide="refresh-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight font-geist">The Pilot Purgatory</h3>
<p className="text-zinc-500 text-sm leading-relaxed font-geist">Proof of concepts that never graduate. "Almost production-ready" for 14 months while the market moves on.</p>
</div>

<div className="reveal delay-300 group p-8 rounded-2xl bg-[#0D1117] border border-white/5 hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center mb-6 text-orange-500">
<svg className="lucide lucide-users w-6 h-6" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight font-geist">The Talent Gap</h3>
<p className="text-zinc-500 text-sm leading-relaxed font-geist">Engineers cost $400k and leave in 6 months. Your existing team is stretched thin learning tech that changes weekly.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden pt-32 pb-32 relative" id="services">
<div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-orange-600/5 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-20 max-w-3xl">
<span className="text-orange-500 font-medium text-xs uppercase tracking-widest mb-4 block font-geist">Our Approach</span>
<h2 className="reveal text-4xl md:text-5xl tracking-tight mb-6 text-white font-playfair font-medium">We don't advise. We build.</h2>
<p className="reveal delay-100 text-zinc-400 text-lg leading-relaxed font-geist">
                    We're not consultants who hand off recommendations. We're engineers who embed with your team, build production systems, and stay until they deliver measurable ROI.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
<div className="reveal group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-orange-500/50 transition-colors">
<svg className="lucide lucide-search w-6 h-6 text-white group-hover:text-orange-500 transition-colors" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<h3 className="text-xl font-semibold mb-2 flex items-center gap-2 font-geist">Audit <svg className="lucide lucide-arrow-right w-4 h-4 text-zinc-600" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Action</h3>
<p className="text-zinc-500 text-sm leading-relaxed font-geist">We identify the highest-impact, fastest-to-deploy opportunity. No 90-day discovery phases.</p>
</div>
<div className="reveal delay-100 group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-orange-500/50 transition-colors">
<svg className="lucide lucide-hammer w-6 h-6 text-white group-hover:text-orange-500 transition-colors" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2 flex items-center gap-2 font-geist">Build <svg className="lucide lucide-arrow-right w-4 h-4 text-zinc-600" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Deploy</h3>
<p className="text-zinc-500 text-sm leading-relaxed font-geist">Our engineers build production-grade systems designed for your specific infrastructure and security needs.</p>
</div>
<div className="reveal delay-200 group">
<div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center mb-6 group-hover:border-orange-500/50 transition-colors">
<svg className="lucide lucide-trending-up w-6 h-6 text-white group-hover:text-orange-500 transition-colors" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<h3 className="text-xl font-semibold mb-2 flex items-center gap-2 font-geist">Expand <svg className="lucide lucide-arrow-right w-4 h-4 text-zinc-600" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Scale</h3>
<p className="text-zinc-500 text-sm leading-relaxed font-geist">We expand methodically. Each project funds the next, building your internal AI muscle, not dependency.</p>
</div>
</div>
<div className="reveal delay-300 bg-gradient-to-br from-orange-500/10 to-transparent max-w-2xl border-orange-500/20 border rounded-2xl mt-16 pt-8 pr-8 pb-8 pl-8">
<p className="text-lg font-medium text-zinc-300 font-geist">
                    We've completed <span className="text-orange-400 font-geist">50+ enterprise implementations</span>. Our systems process millions of transactions and have generated documented 8-figure savings.
                </p>
</div>
</div>
</section>

<section className="bg-[#07070A] pt-32 pb-32" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal relative">
<div className="aspect-[4/5] rounded-2xl border border-white/10 bg-zinc-900 overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
<div className="absolute inset-0 flex items-center justify-center text-zinc-700 text-2xl tracking-tighter font-playfair font-medium">[FOUNDER IMAGE]</div>
</div>

<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl"></div>
</div>
<div className="reveal delay-100">
<div className="inline-block px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-medium text-zinc-400 mb-6 font-geist">Creator-Led. Builder-Backed.</div>
<h2 className="text-4xl tracking-tight mb-6 font-playfair font-medium">Built on a foundation of <span className="text-orange-500 font-playfair font-medium">110,000+</span> AI professionals.</h2>
<p className="text-zinc-400 text-lg mb-8 leading-relaxed font-geist">
                    Ovidius AI is the enterprise arm of BenAI. We don't just learn AI; we teach it to the world's best engineers and executives.
                </p>
<div className="grid grid-cols-3 gap-8 py-8 border-y border-white/5 mb-8">
<div>
<div className="text-3xl text-white mb-1 font-playfair font-medium">110K+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide font-geist">Subscribers</div>
</div>
<div>
<div className="text-3xl text-white mb-1 font-playfair font-medium">1,000+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide font-geist">Execs Trained</div>
</div>
<div>
<div className="text-3xl text-white mb-1 font-playfair font-medium">35K+</div>
<div className="text-xs text-zinc-500 uppercase tracking-wide font-geist">Community</div>
</div>
</div>
<div className="pl-6 border-l-2 border-orange-500">
<p className="text-zinc-300 italic mb-4 font-geist">"I started teaching AI because I was frustrated watching good companies fail at implementation. Ovidius is where we put theory into production."</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-background">
<div className="max-w-4xl mx-auto px-6 text-center mb-12">
<h2 className="reveal text-3xl tracking-tight mb-4 font-playfair font-medium">Deep expertise across high-stakes industries.</h2>
</div>
<div className="max-w-6xl mx-auto px-6" id="tabs-container">

<div className="flex flex-wrap justify-center gap-2 mb-12">
<button className="tab-btn px-6 py-2.5 rounded-full text-sm font-medium transition-all bg-white/10 text-white border border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.2)] font-geist" id="tab-finance" onclick="switchTab('finance')">Financial Services</button>
<button className="tab-btn hover:text-white hover:bg-white/5 transition-all text-sm font-medium text-zinc-400 font-geist border-transparent border rounded-full pt-2.5 pr-6 pb-2.5 pl-6" id="tab-professional" onclick="switchTab('professional')">Professional Services</button>
<button className="tab-btn px-6 py-2.5 rounded-full text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent transition-all font-geist" id="tab-ecommerce" onclick="switchTab('ecommerce')">E-commerce</button>
</div>

<div className="tab-content animate-fade-in" id="content-finance">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="p-6 rounded-xl bg-surface border border-white/5 hover:border-white/10 transition-all">
<svg className="lucide lucide-check w-5 h-5 text-orange-500 mb-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<h4 className="font-medium text-white mb-2 font-geist">Automated Underwriting</h4>
<p className="text-sm text-zinc-500 font-geist">Risk assessment pipelines that reduce manual review by 80%.</p>
</div>
<div className="p-6 rounded-xl bg-surface border border-white/5 hover:border-white/10 transition-all">
<svg className="lucide lucide-check w-5 h-5 text-orange-500 mb-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<h4 className="font-medium text-white mb-2 font-geist">Intelligent KYC/AML</h4>
<p className="text-sm text-zinc-500 font-geist">Document processing systems compliant with strict regulations.</p>
</div>
<div className="p-6 rounded-xl bg-surface border border-white/5 hover:border-white/10 transition-all">
<svg className="lucide lucide-check w-5 h-5 text-orange-500 mb-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<h4 className="font-medium text-white mb-2 font-geist">Fraud Detection</h4>
<p className="text-sm text-zinc-500 font-geist">Real-time transaction monitoring with explainable AI models.</p>
</div>
<div className="p-6 rounded-xl bg-surface border border-white/5 hover:border-white/10 transition-all">
<svg className="lucide lucide-check w-5 h-5 text-orange-500 mb-4" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<h4 className="font-medium text-white mb-2 font-geist">Regulatory Search</h4>
<p className="text-sm text-zinc-500 font-geist">Semantic search across millions of compliance documents.</p>
</div>
</div>
</div>

</div>
</section>

<section className="py-32 bg-[#07070A] border-y border-white/5" id="case-studies">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-20">
<span className="text-orange-500 font-medium text-xs uppercase tracking-widest mb-4 block font-geist">Results</span>
<h2 className="reveal text-4xl tracking-tight font-playfair font-medium">From strategy to ROI. Documented.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal group relative bg-surface border border-white/5 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300">
<div className="inline-block px-2 py-1 bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-wider rounded mb-6 font-geist">Financial Services</div>
<div className="mb-2">
<span className="text-4xl text-white tracking-tight font-playfair font-medium">847 hrs</span>
<span className="block text-zinc-500 text-xs mt-1 font-geist">saved monthly</span>
</div>
<p className="text-zinc-400 text-sm mt-6 mb-6 leading-relaxed font-geist">
                        Enterprise bank struggling with manual loan docs. We deployed intelligent extraction reducing processing time from 45m to 3m.
                    </p>
<div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
<div>
<span className="block text-white font-bold font-geist">94%</span>
<span className="text-[10px] text-zinc-500 uppercase font-geist">Accuracy</span>
</div>
<div>
<span className="block text-white font-bold font-geist">6 wks</span>
<span className="text-[10px] text-zinc-500 uppercase font-geist">Deploy</span>
</div>
<div>
<span className="block text-white font-bold font-geist">$2.1M</span>
<span className="text-[10px] text-zinc-500 uppercase font-geist">Savings</span>
</div>
</div>
<a className="mt-6 inline-flex items-center text-orange-500 text-sm font-medium hover:gap-2 transition-all font-geist" href="#">Read case study <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>

<div className="reveal delay-100 group relative bg-surface border border-white/5 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300">
<div className="inline-block px-2 py-1 bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-wider rounded mb-6 font-geist">Professional Services</div>
<div className="mb-2">
<span className="text-4xl text-white tracking-tight font-playfair font-medium">40%</span>
<span className="block text-zinc-500 text-xs mt-1 font-geist">faster research</span>
</div>
<p className="text-zinc-400 text-sm mt-6 mb-6 leading-relaxed font-geist">
                        Global consulting firm drowning in silos. We built a RAG system surfacing expertise across 50,000+ documents.
                    </p>
<div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
<div>
<span className="block text-white font-bold font-geist">12k</span>
<span className="text-[10px] text-zinc-500 uppercase font-geist">Queries</span>
</div>
<div>
<span className="block text-white font-bold font-geist">10 wks</span>
<span className="text-[10px] text-zinc-500 uppercase font-geist">Deploy</span>
</div>
</div>
<a className="mt-6 inline-flex items-center text-orange-500 text-sm font-medium hover:gap-2 transition-all font-geist" href="#">Read case study <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>

<div className="reveal delay-200 group relative bg-surface border border-white/5 rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300">
<div className="inline-block px-2 py-1 bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-wider rounded mb-6 font-geist">E-commerce</div>
<div className="mb-2">
<span className="text-4xl text-white tracking-tight font-playfair font-medium">$4.2M</span>
<span className="block text-zinc-500 text-xs mt-1 font-geist">incremental revenue</span>
</div>
<p className="text-zinc-400 text-sm mt-6 mb-6 leading-relaxed font-geist">
                        Retailer with flat conversion. Implemented real-time personalization engine adjusting to user behavior live.
                    </p>
<div className="flex flex-wrap gap-4 pt-6 border-t border-white/5">
<div>
<span className="block text-white font-bold font-geist">+23%</span>
<span className="text-[10px] text-zinc-500 uppercase font-geist">Conv.</span>
</div>
<div>
<span className="block text-white font-bold font-geist">+15%</span>
<span className="text-[10px] text-zinc-500 uppercase font-geist">AOV</span>
</div>
</div>
<a className="mt-6 inline-flex items-center text-orange-500 text-sm font-medium hover:gap-2 transition-all font-geist" href="#">Read case study <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></a>
</div>
</div>
</div>
</section>

<section className="py-32 relative" id="process">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-orange-500 font-medium text-xs uppercase tracking-widest mb-4 block font-geist">The Process</span>
<h2 className="reveal text-3xl tracking-tight font-playfair font-medium">From first call to production in weeks.</h2>
</div>
<div className="relative pl-8 md:pl-0">

<div className="absolute left-8 md:left-[50%] top-0 bottom-0 w-px bg-gradient-to-b from-orange-500 via-zinc-800 to-transparent transform md:-translate-x-1/2"></div>

<div className="reveal relative md:flex justify-between items-center mb-16">
<div className="hidden md:block w-[45%] text-right pr-12">
<span className="text-orange-400 text-xs font-mono mb-2 block font-geist">30 Minutes</span>
<h3 className="text-xl font-bold text-white mb-2 font-geist">Discovery Call</h3>
<p className="text-sm text-zinc-400 font-geist">We analyze your operations and pain points. Honest assessment of ROI potential.</p>
</div>
<div className="absolute left-0 md:left-[50%] w-8 h-8 rounded-full bg-[#0A0A0F] border-2 border-orange-500 flex items-center justify-center text-xs font-bold text-orange-500 z-10 transform -translate-x-1/2 md:translate-x-[-50%] font-geist">1</div>
<div className="md:w-[45%] pl-12 md:pl-12">
<div className="md:hidden">
<h3 className="text-xl font-bold text-white mb-2 font-geist">Discovery Call</h3>
<p className="text-sm text-zinc-400 mb-4 font-geist">We analyze your operations and pain points.</p>
</div>
<div className="bg-surface p-4 rounded-lg border-l-2 border-orange-500 border-y border-r border-white/5">
<span className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-1 font-geist">Deliverable</span>
<p className="text-sm text-white font-geist">Go/No-Go Assessment</p>
</div>
</div>
</div>

<div className="reveal delay-100 relative md:flex justify-between items-center mb-16 flex-row-reverse">
<div className="hidden md:block w-[45%] text-left pl-12">
<span className="text-orange-400 text-xs font-mono mb-2 block font-geist">1-2 Weeks</span>
<h3 className="text-xl font-bold text-white mb-2 font-geist">Opportunity Audit</h3>
<p className="text-sm text-zinc-400 font-geist">Mapping workflows to find the highest-impact, lowest-risk entry point.</p>
</div>
<div className="absolute left-0 md:left-[50%] w-8 h-8 rounded-full bg-[#0A0A0F] border-2 border-orange-500 flex items-center justify-center text-xs font-bold text-orange-500 z-10 transform -translate-x-1/2 md:translate-x-[-50%] font-geist">2</div>
<div className="md:w-[45%] pl-12 md:pr-12 text-left md:text-right">
<div className="md:hidden">
<h3 className="text-xl font-bold text-white mb-2 font-geist">Opportunity Audit</h3>
<p className="text-sm text-zinc-400 mb-4 font-geist">Mapping workflows for impact.</p>
</div>
<div className="bg-surface p-4 rounded-lg border-l-2 border-orange-500 border-y border-r border-white/5">
<span className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-1 font-geist">Deliverable</span>
<p className="text-sm text-white font-geist">Prioritized Roadmap</p>
</div>
</div>
</div>

<div className="reveal delay-200 relative md:flex justify-between items-center">
<div className="hidden md:block w-[45%] text-right pr-12">
<span className="text-orange-400 text-xs font-mono mb-2 block font-geist">4-8 Weeks</span>
<h3 className="text-xl font-bold text-white mb-2 font-geist">Rapid Build</h3>
<p className="text-sm text-zinc-400 font-geist">Deploying production-grade systems. Security, integration, and training included.</p>
</div>
<div className="absolute left-0 md:left-[50%] w-8 h-8 rounded-full bg-[#0A0A0F] border-2 border-orange-500 flex items-center justify-center text-xs font-bold text-orange-500 z-10 transform -translate-x-1/2 md:translate-x-[-50%] font-geist">3</div>
<div className="md:w-[45%] pl-12 md:pl-12">
<div className="md:hidden">
<h3 className="text-xl font-bold text-white mb-2 font-geist">Rapid Build</h3>
<p className="text-sm text-zinc-400 mb-4 font-geist">Deploying production systems.</p>
</div>
<div className="bg-surface p-4 rounded-lg border-l-2 border-orange-500 border-y border-r border-white/5">
<span className="text-[10px] text-zinc-500 uppercase tracking-wider block mb-1 font-geist">Deliverable</span>
<p className="text-sm text-white font-geist">Live System &amp; ROI</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#07070A] border-t border-white/5">
<div className="max-w-3xl mx-auto px-6">
<h2 className="reveal text-3xl tracking-tight text-center mb-16 font-playfair font-medium">Straight answers.</h2>
<div className="reveal space-y-4">
<details className="group bg-surface rounded-xl border border-white/5 open:border-orange-500/30 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-white hover:text-orange-400 transition-colors font-geist">
                        How is Ovidius different from traditional consultants?
                        <svg className="lucide lucide-plus w-4 h-4 text-zinc-500 group-open:rotate-45 transition-transform" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed font-geist">
                        Traditional consultants deliver recommendations. We deliver code. Our team writes production software, manages infrastructure, and is accountable for the system actually working, not just the slide deck looking good.
                    </div>
</details>
<details className="group bg-surface rounded-xl border border-white/5 open:border-orange-500/30 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-white hover:text-orange-400 transition-colors font-geist">
                        What does a typical engagement cost?
                        <svg className="lucide lucide-plus w-4 h-4 text-zinc-500 group-open:rotate-45 transition-transform" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed font-geist">
                        Initial audits and first implementations typically range from $75k-$200k depending on complexity. We structure engagements so early wins generate ROI that funds subsequent phases.
                    </div>
</details>
<details className="group bg-surface rounded-xl border border-white/5 open:border-orange-500/30 transition-all">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-white hover:text-orange-400 transition-colors font-geist">
                        How long does implementation take?
                        <svg className="lucide lucide-plus w-4 h-4 text-zinc-500 group-open:rotate-45 transition-transform" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</summary>
<div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed font-geist">
                        Our first production deployment typically takes 4-8 weeks. We avoid "big bang" transformations in favor of rapid, iterative value delivery.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-40 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0F] via-orange-900/5 to-[#0A0A0F]"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="reveal text-4xl md:text-6xl tracking-tight mb-8 text-white font-playfair font-medium">
                Ready to turn strategy <br/> into <span className="text-orange-500 font-playfair font-medium">systems</span>?
            </h2>
<p className="reveal delay-100 text-xl text-zinc-400 mb-10 max-w-2xl mx-auto font-geist">
                Book a 30-minute call. No pitch deck. No pressure. Just a conversation with people who have done this before.
            </p>
<div className="reveal delay-200 flex flex-col items-center gap-6">
<a className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 shadow-[0_0_40px_rgba(249,115,22,0.3)] hover:shadow-[0_0_60px_rgba(249,115,22,0.5)] transition-all transform hover:-translate-y-1 font-geist" href="#">
                    Book Your Strategy Call
                </a>
<p className="text-sm text-zinc-600 font-geist">Or email <a className="text-orange-400 hover:text-orange-300 font-geist" href="mailto:enterprise@ovidius.ai">enterprise@ovidius.ai</a></p>
</div>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
<div className="col-span-1 md:col-span-1">
<a className="text-xl font-bold tracking-tight text-white mb-6 block font-geist" href="#">
                        OVIDIUS<span className="text-orange-500 font-geist">.</span>
</a>
<p className="text-sm text-zinc-500 font-geist">Enterprise AI. Implemented.</p>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6 font-geist">Company</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-orange-400 transition-colors font-geist" href="#">About</a></li>
<li><a className="hover:text-orange-400 transition-colors font-geist" href="#">Case Studies</a></li>
<li><a className="hover:text-orange-400 transition-colors font-geist" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6 font-geist">Resources</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-orange-400 transition-colors font-geist" href="#">Blog</a></li>
<li><a className="hover:text-orange-400 transition-colors font-geist" href="#">ROI Calculator</a></li>
<li><a className="hover:text-orange-400 transition-colors font-geist" href="#">Newsletter</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-6 font-geist">Connect</h4>
<ul className="space-y-4 text-sm text-zinc-500">
<li><a className="hover:text-orange-400 transition-colors font-geist" href="#">LinkedIn</a></li>
<li><a className="hover:text-orange-400 transition-colors font-geist" href="#">Twitter</a></li>
<li><a className="hover:text-orange-400 transition-colors font-geist" href="#">YouTube (BenAI)</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-600 font-geist">© 2024 Ovidius AI. All rights reserved. Part of the BenAI family.</p>
<div className="flex gap-6 text-xs text-zinc-600">
<a className="hover:text-white font-geist" href="#">Privacy Policy</a>
<a className="hover:text-white font-geist" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
