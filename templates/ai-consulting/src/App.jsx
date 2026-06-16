import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        document.addEventListener("DOMContentLoaded", () => {
            lucide.createIcons();

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });

            document.querySelectorAll(".animate-on-scroll").forEach((el) => {
                observer.observe(el);
            });

            const cards = document.querySelectorAll(".spotlight-card");
            document.addEventListener("mousemove", (e) => {
                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    card.style.setProperty("--mouse-x", `${x}px`);
                    card.style.setProperty("--mouse-y", `${y}px`);
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component -z-10 w-full top-0 h-[1200px] absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(180deg, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="guA2nIvok3TuYtPyn8zX"></div>

</div></div>
<div className="border-x border-white/[0.03] min-h-screen w-full max-w-[1440px] mx-auto relative">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:12rem_24rem] pointer-events-none z-0"></div>

<div className="absolute inset-0 flex justify-between pointer-events-none z-0 px-6 md:px-12 lg:px-24">
<div className="relative w-px h-full bg-white/[0.03] overflow-hidden"><div className="beam"></div></div>
<div className="relative w-px h-full bg-white/[0.03] hidden md:block overflow-hidden absolute left-1/2 -translate-x-1/2"><div className="beam beam-delay-1"></div></div>
<div className="relative w-px h-full bg-white/[0.03] overflow-hidden"><div className="beam beam-delay-2"></div></div>
</div>

<nav className="relative z-50 border-b border-white/[0.03] backdrop-blur-sm bg-[#020202]/80">
<div className="md:px-12 lg:px-24 flex h-20 pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 [animation:animationIn_0.8s_ease-out_0s_both] animate-on-scroll animate" href="/home">
<svg className="lucide lucide-cpu w-6 h-6 text-white stroke-[1.5]" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
<span className="text-xs font-semibold tracking-[0.15em] uppercase text-white font-sans" style={{}}>Nexus AI</span>
</a>
<div className="hidden md:flex items-center gap-10 [animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<a className="text-[13px] hover:text-white transition-colors text-white/60" href="/services">Services</a>
<a className="text-[13px] hover:text-white transition-colors text-white/60" href="/case-studies">Case Studies</a>
<a className="text-[13px] hover:text-white transition-colors text-white/60" href="/careers">Careers</a>
</div>
<div className="flex items-center gap-6 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<a className="text-[13px] hover:text-white transition-colors hidden sm:block text-white/60" href="/login">Client Login</a>
<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 rounded-sm pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center" onclick="window.location.href='/audit'" role="button">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 rounded-sm bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white text-[11px] font-medium text-zinc-300 tracking-tight bg-black w-full h-full rounded-sm pt-2 pr-4 pb-2 pl-4 relative">
<span className="relative z-10 uppercase tracking-widest font-sans" style={{}}>Audit Request</span>
</span>
</button>
</div>
</div>
</nav>

<main className="z-10 relative">

<section className="md:px-12 lg:px-24 md:py-32 grid lg:grid-cols-12 gap-12 border-white/[0.03] border-b pt-24 pr-6 pb-24 pl-6 gap-x-12 gap-y-12 items-end">
<div className="lg:col-span-8 flex flex-col gap-8">
<div className="[animation:animationIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-sm border border-indigo-900/40 bg-indigo-900/10 text-[10px] font-medium tracking-widest text-indigo-200/80 uppercase font-sans" style={{}}>
<span className="w-1 h-1 rounded-full bg-indigo-400"></span>
                            Advisory Firm
                        </span>
</div>
<h1 className="font-serif text-[2.75rem] sm:text-5xl lg:text-7xl leading-[0.95] text-white tracking-tight [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<span className="block text-white/80 font-newsreader font-light" style={{}}>Deploy Strategic</span>
<span className="block font-light italic font-newsreader">Artificial Intelligence.</span>
</h1>
<p className="text-lg md:text-xl text-white/50 max-w-xl leading-relaxed font-light [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate font-sans" style={{}}>
                        We bridge the gap between emerging models and enterprise value. Architecting custom neural infrastructure for the Fortune 500.
                    </p>
<div className="flex flex-col sm:flex-row gap-5 pt-4 [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">
<button className="group shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 overflow-hidden font-medium text-indigo-950 bg-gradient-to-r from-[#e0e7ff] to-[#a5b4fc] rounded-sm pt-3 pr-8 pb-3 pl-8 relative shadow-lg" style={{boxShadow: '0 15px 33px -12px rgba(99,102,241,0.6), inset 0 4px 6.3px rgba(255,255,255,0.8)'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 bg-white/40 absolute top-0 right-0 bottom-0 left-0 translate-y-full"></div>
<span className="relative flex items-center gap-2 text-sm tracking-tight font-semibold font-sans" style={{}}>
                                Book Consultation
                                <svg className="lucide lucide-arrow-right w-4 h-4 stroke-[2]" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
</button>
<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-sm pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 rounded-sm bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-2 transition-colors duration-300 group-hover:text-white text-sm font-medium text-zinc-400 tracking-tight bg-gradient-to-b from-zinc-800 to-zinc-950 w-full h-full rounded-sm pt-3 pr-8 pb-3 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
<span className="relative z-10 font-sans" style={{}}>View Framework</span>
</span>
</button>
</div>
</div>
<div className="lg:col-span-4 flex flex-col justify-end gap-12 [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll animate">
<div className="grid grid-cols-2 lg:grid-cols-1 gap-12 border-t border-white/[0.05] pt-8 lg:border-t-0 lg:pt-0">
<div className="">
<div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 font-medium font-sans" style={{}}>Efficiency Gain</div>
<div className="text-5xl italic text-white font-newsreader">40<span className="not-italic align-top text-2xl font-light text-indigo-300/80 font-newsreader mx-1">%</span></div>
</div>
<div className="">
<div className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-2 font-medium font-sans" style={{}}>Implementation</div>
<div className="text-5xl italic text-white font-newsreader">6<span className="text-2xl text-white/40 not-italic align-top text-base uppercase tracking-widest ml-2 font-sans" style={{}}>Weeks</span></div>
</div>
</div>
</div>
</section>

<section className="border-white/[0.03] overflow-hidden bg-[#050505] border-b pt-6 pb-6 backdrop-blur">
<div className="flex w-max animate-scroll">
<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-3 text-white/40 text-[11px] tracking-[0.2em] uppercase font-semibold font-sans" style={{}}><svg className="lucide lucide-database w-4 h-4 text-white/30" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> DATA GOVERNANCE</div>
<div className="flex items-center gap-3 text-white/40 text-[11px] tracking-[0.2em] uppercase font-semibold font-sans" style={{}}><svg className="lucide lucide-sliders w-4 h-4 text-white/30" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 8h4"></path><path d="M12 21v-9"></path><path d="M12 8V3"></path><path d="M17 16h4"></path><path d="M19 12V3"></path><path d="M19 21v-5"></path><path d="M3 14h4"></path><path d="M5 10V3"></path><path d="M5 21v-7"></path></svg> LLM FINE-TUNING</div>
<div className="flex items-center gap-3 text-white/40 text-[11px] tracking-[0.2em] uppercase font-semibold font-sans" style={{}}><svg className="lucide lucide-trending-up w-4 h-4 text-white/30" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> PREDICTIVE ANALYTICS</div>
<div className="flex items-center gap-3 text-white/40 text-[11px] tracking-[0.2em] uppercase font-semibold font-sans" style={{}}><svg className="lucide lucide-shield-check w-4 h-4 text-white/30" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> ETHICAL COMPLIANCE</div>
<div className="flex items-center gap-3 text-white/40 text-[11px] tracking-[0.2em] uppercase font-semibold font-sans" style={{}}><svg className="lucide lucide-zap w-4 h-4 text-white/30" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> PROCESS AUTOMATION</div>
</div>
<div className="flex items-center gap-16 px-8">
<div className="flex items-center gap-3 text-white/40 text-[11px] tracking-[0.2em] uppercase font-semibold font-sans" style={{}}><svg className="lucide lucide-database w-4 h-4 text-white/30" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg> DATA GOVERNANCE</div>
<div className="flex items-center gap-3 text-white/40 text-[11px] tracking-[0.2em] uppercase font-semibold font-sans" style={{}}><svg className="lucide lucide-sliders w-4 h-4 text-white/30" data-lucide="sliders" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 8h4"></path><path d="M12 21v-9"></path><path d="M12 8V3"></path><path d="M17 16h4"></path><path d="M19 12V3"></path><path d="M19 21v-5"></path><path d="M3 14h4"></path><path d="M5 10V3"></path><path d="M5 21v-7"></path></svg> LLM FINE-TUNING</div>
<div className="flex items-center gap-3 text-white/40 text-[11px] tracking-[0.2em] uppercase font-semibold font-sans" style={{}}><svg className="lucide lucide-trending-up w-4 h-4 text-white/30" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg> PREDICTIVE ANALYTICS</div>
<div className="flex items-center gap-3 text-white/40 text-[11px] tracking-[0.2em] uppercase font-semibold font-sans" style={{}}><svg className="lucide lucide-shield-check w-4 h-4 text-white/30" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> ETHICAL COMPLIANCE</div>
<div className="flex items-center gap-3 text-white/40 text-[11px] tracking-[0.2em] uppercase font-semibold font-sans" style={{}}><svg className="lucide lucide-zap w-4 h-4 text-white/30" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> PROCESS AUTOMATION</div>
</div>
</div>
</section>

<section className="grid border-white/[0.03] md:grid-cols-2 lg:grid-cols-3 md:p-12 lg:p-24 bg-[#020202] border-b px-6 py-6 gap-x-6 gap-y-6">

<div className="spotlight-card group p-8 lg:p-12 rounded-sm [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate" style={{-MouseX: '437px', -MouseY: '-907.5px'}}>
<span className="absolute top-8 right-8 text-[11px] font-mono text-white/20 font-sans" style={{}}>01</span>
<div className="relative z-10 flex flex-col h-full justify-between gap-16">
<div className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/90 rounded-sm group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-search w-6 h-6 stroke-[1.5]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
<div className="">
<h3 className="text-xl text-white mb-3 font-serif italic tracking-wide font-sans" style={{}}>Infrastructure Audit</h3>
<p className="text-[14px] text-white/50 leading-relaxed font-sans" style={{}}>Deep-dive analysis of your current data stack to identify readiness for vectorization and RAG implementation.</p>
</div>
</div>
</div>

<div className="spotlight-card group p-8 lg:p-12 rounded-sm [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate" style={{-MouseX: '13.671875px', -MouseY: '-907.5px'}}>
<span className="absolute top-8 right-8 text-[11px] font-mono text-white/20 font-sans" style={{}}>02</span>
<div className="relative z-10 flex flex-col h-full justify-between gap-16">
<div className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/90 rounded-sm group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-file-code w-6 h-6 stroke-[1.5]" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg>
</div>
<div>
<h3 className="text-xl text-white mb-3 font-serif italic tracking-wide font-sans" style={{}}>Model Integration</h3>
<p className="text-[14px] text-white/50 leading-relaxed font-sans" style={{}}>Seamless API orchestration connecting proprietary data with foundational models (GPT-4, Claude, Llama).</p>
</div>
</div>
</div>

<div className="spotlight-card group p-8 lg:p-12 rounded-sm [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate" style={{-MouseX: '-409.6640625px', -MouseY: '-907.5px'}}>
<span className="absolute top-8 right-8 text-[11px] font-mono text-white/20 font-sans" style={{}}>03</span>
<div className="relative z-10 flex flex-col h-full justify-between gap-16">
<div className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/90 rounded-sm group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-bar-chart-2 w-6 h-6 stroke-[1.5]" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<div className="">
<h3 className="text-xl text-white mb-3 font-serif italic tracking-wide font-sans" style={{}}>Strategic Roadmapping</h3>
<p className="text-[14px] text-white/50 leading-relaxed font-sans" style={{}}>Quarterly execution plans that align AI capabilities with core business KPIs and competitive positioning.</p>
</div>
</div>
</div>

<div className="spotlight-card group p-8 lg:p-12 rounded-sm [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate" style={{-MouseX: '437px', -MouseY: '-1247.75px'}}>
<span className="absolute top-8 right-8 text-[11px] font-mono text-white/20 font-sans" style={{}}>04</span>
<div className="relative z-10 flex flex-col h-full justify-between gap-16">
<div className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/90 rounded-sm group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-network w-6 h-6 stroke-[1.5]" data-lucide="network" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<div className="">
<h3 className="text-xl text-white mb-3 font-serif italic tracking-wide font-sans" style={{}}>Vector Embedding</h3>
<p className="text-[14px] text-white/50 leading-relaxed font-sans" style={{}}>High-dimensional data mapping to enable semantic search and retrieval systems with sub-millisecond latency.</p>
</div>
</div>
</div>

<div className="spotlight-card group p-8 lg:p-12 rounded-sm [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll animate" style={{-MouseX: '13.671875px', -MouseY: '-1247.75px'}}>
<span className="absolute top-8 right-8 text-[11px] font-mono text-white/20 font-sans" style={{}}>05</span>
<div className="relative z-10 flex flex-col h-full justify-between gap-16">
<div className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/90 rounded-sm group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-refresh-cw w-6 h-6 stroke-[1.5]" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
</div>
<div className="">
<h3 className="text-xl text-white mb-3 font-serif italic tracking-wide font-sans" style={{}}>Continuous Learning</h3>
<p className="text-[14px] text-white/50 leading-relaxed font-sans" style={{}}>Automated feedback loops that refine model output accuracy based on user interactions and new data ingestion.</p>
</div>
</div>
</div>

<div className="spotlight-card group p-8 lg:p-12 rounded-sm [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll animate" style={{-MouseX: '-409.6640625px', -MouseY: '-1247.75px'}}>
<span className="absolute top-8 right-8 text-[11px] font-mono text-white/20 font-sans" style={{}}>06</span>
<div className="relative z-10 flex flex-col h-full justify-between gap-16">
<div className="w-12 h-12 bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/90 rounded-sm group-hover:scale-110 transition-transform duration-500">
<svg className="lucide lucide-lock w-6 h-6 stroke-[1.5]" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div className="">
<h3 className="text-xl text-white mb-3 font-serif italic tracking-wide font-sans" style={{}}>Security Protocol</h3>
<p className="text-[14px] text-white/50 leading-relaxed font-sans" style={{}}>Enterprise-grade encryption and PII masking layers to ensure data sovereignty while leveraging public LLMs.</p>
</div>
</div>
</div>
</section>

<section className="p-6 md:p-12 lg:p-24 bg-[#050505]">
<div className="mb-16 [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<h2 className="leading-tight md:text-5xl lg:text-6xl text-4xl italic text-white tracking-tight font-newsreader"><span className="font-light text-white/50 font-newsreader">Operational</span> System Metrics</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto text-white gap-x-4 gap-y-4">

<div className="col-span-1 md:col-span-12 lg:col-span-4 row-span-1 lg:row-span-2 relative h-[300px] lg:h-auto overflow-hidden rounded-sm bg-zinc-900 group spotlight-card" style={{-MouseX: '437px', -MouseY: '-1881px'}}>
<img alt="AI Interface" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e701264-0c6f-4f78-93ad-7da3acbe3723_1600w.webp" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 to-transparent mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

<div className="absolute top-6 left-6 text-[10px] font-mono text-indigo-300/60 tracking-widest uppercase font-sans" style={{}}>(001)</div>
<div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
<div className="bg-black/80 backdrop-blur border border-white/10 p-3 rounded-sm w-full max-w-[160px]">
<div className="text-[9px] text-white/40 uppercase tracking-widest mb-2 font-medium font-sans" style={{}}>Neural Core V4.0</div>
<div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-indigo-500 w-[94%]"></div>
</div>
<div className="flex justify-between text-[9px] mt-2 font-mono text-indigo-400">
<span className="font-sans" style={{}}>Stabilized</span>
<span className="font-sans" style={{}}>94.2% Load</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-12 lg:col-span-8 bg-zinc-900/30 p-8 lg:p-10 rounded-sm flex flex-col justify-between min-h-[240px] spotlight-card group" style={{-MouseX: '16.3359375px', -MouseY: '-1881px'}}>
<div className="flex justify-between items-start">
<h3 className="text-3xl md:text-5xl lg:text-5xl text-white tracking-tight leading-[1.1] font-newsreader font-light" style={{}}>
                    Scalable <span className="text-white/50 font-newsreader font-light" style={{}}>Inference</span> Architecture
                </h3>
<span className="text-[10px] font-mono text-zinc-500 tracking-widest font-sans" style={{}}>[LIVE MONITOR]</span>
</div>
<div className="flex justify-between items-end mt-8">
<p className="text-xs text-zinc-500 max-w-sm font-medium tracking-wide leading-relaxed uppercase font-sans" style={{}}>DEPLOYING ADAPTIVE NEURAL NETWORKS FOR ENTERPRISE-GRADE DECISIONING AND REAL-TIME DATA SYNTHESIS.</p>
<div className="border border-white/10 w-10 h-10 rounded-full flex items-center justify-center text-white/80">
<svg className="lucide lucide-arrow-up-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="bg-zinc-900/30 p-6 rounded-sm flex flex-col justify-between gap-6 group transition-colors spotlight-card" style={{-MouseX: '16.3359375px', -MouseY: '-2137px'}}>
<div className="">
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2 font-medium font-sans" style={{}}>Latency</div>
<div className="text-3xl text-white font-newsreader font-light" style={{}}>12ms</div>
</div>
<div className="space-y-2">
<div className="flex gap-0.5 h-2">
<div className="w-1.5 h-full bg-emerald-500/80 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-emerald-500/80 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-emerald-500/80 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-emerald-500/80 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-emerald-500/80 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-emerald-500/80 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-emerald-500/20 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-emerald-500/20 skew-x-[-12deg]"></div>
</div>
<div className="flex justify-between text-[9px] text-zinc-600 font-mono uppercase">
<span className="font-sans" style={{}}>Peak</span><span className="font-sans" style={{}}>Optimal</span>
</div>
</div>
</div>

<div className="bg-zinc-900/30 p-6 rounded-sm flex flex-col justify-between gap-6 group transition-colors spotlight-card" style={{-MouseX: '-264.1015625px', -MouseY: '-2137px'}}>
<div className="">
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2 font-medium font-sans" style={{}}>Uptime</div>
<div className="text-3xl text-white font-newsreader font-light" style={{}}>99.99%</div>
</div>
<div className="space-y-2">
<div className="flex gap-0.5 h-2">
<div className="w-1.5 h-full bg-indigo-500 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-indigo-500 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-indigo-500 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-indigo-500 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-indigo-500 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-indigo-500 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-indigo-500 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-indigo-500 skew-x-[-12deg]"></div>
</div>
<div className="flex justify-between text-[9px] text-zinc-600 font-mono uppercase">
<span className="font-sans" style={{}}>Degraded</span><span className="font-sans" style={{}}>Stable</span>
</div>
</div>
</div>

<div className="bg-zinc-900/30 p-6 rounded-sm flex flex-col justify-between gap-6 group transition-colors spotlight-card" style={{-MouseX: '-544.546875px', -MouseY: '-2137px'}}>
<div className="">
<div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2 font-medium font-sans" style={{}}>Throughput</div>
<div className="text-3xl text-white font-newsreader font-light" style={{}}>850T</div>
</div>
<div className="space-y-2">
<div className="flex gap-0.5 h-2">
<div className="w-1.5 h-full bg-purple-500/80 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-purple-500/80 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-purple-500/80 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-purple-500/80 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-purple-500/80 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-purple-500/20 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-purple-500/20 skew-x-[-12deg]"></div>
<div className="w-1.5 h-full bg-purple-500/20 skew-x-[-12deg]"></div>
</div>
<div className="flex justify-between text-[9px] text-zinc-600 font-mono uppercase">
<span className="font-sans" style={{}}>Idle</span><span className="font-sans" style={{}}>Max</span>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-12 lg:col-span-4 lg:row-start-3 lg:col-start-9 lg:row-span-2 flex flex-col min-h-[300px] bg-zinc-900 h-[400px] rounded-sm pt-8 pr-8 pb-8 pl-8 justify-between spotlight-card group" style={{-MouseX: '-404.328125px', -MouseY: '-2313.5px'}}>
<div className="flex justify-between">
<div className="text-[10px] font-mono text-zinc-500 tracking-widest font-sans" style={{}}>[005]</div>
<div className="border border-white/10 w-8 h-8 rounded-full flex items-center justify-center text-white/60 bg-white/5">
<svg className="lucide lucide-cpu w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>
</div>
<div className="">
<h3 className="text-3xl md:text-3xl text-white tracking-tight leading-tight mb-6 font-newsreader font-light" style={{}}>
                    Designed For Infinite <span className="text-white/50 font-newsreader font-light" style={{}}>Scale</span>
</h3>
<p className="text-[11px] uppercase leading-relaxed text-sm font-medium text-zinc-500 tracking-wide border-white/10 border-t mb-6 pt-4">
                    Alexandria serves as the foundational AI layer for global automation and decision architecture.
                </p>
<div className="border border-white/10 bg-black/40 p-3 rounded-sm">
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2">
<svg className="lucide lucide-zap w-3 h-3 text-indigo-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-white text-sm font-mono font-bold font-sans" style={{}}>98.2%</span>
</div>
<span className="text-[9px] text-zinc-600 uppercase tracking-widest font-sans" style={{}}>Efficiency</span>
</div>
<div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-[98%]"></div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-12 lg:col-span-4 min-h-[300px] flex flex-col text-white bg-[#080808] h-full rounded-sm pt-8 pr-8 pb-8 pl-8 justify-between h-[400px] spotlight-card group" style={{-MouseX: '437px', -MouseY: '-2313.5px'}}>
<div className="">
<div className="text-[10px] text-zinc-500 mb-2 font-mono tracking-widest font-sans" style={{}}>(004)</div>
<h3 className="text-3xl md:text-3xl tracking-tight mb-6 leading-tight font-newsreader font-light" style={{}}>Revenue <span className="text-white/50 font-newsreader font-light" style={{}}>Velocity</span></h3>
<div className="text-[10px] uppercase leading-tight text-base font-medium text-zinc-500 tracking-wide max-w-[180px]">
                    Turning raw compute into exponential value generation.
                </div>
</div>
<div className="mt-8">
<div className="flex h-[120px] border-zinc-800 border-b pt-1 pb-6 relative gap-x-3 gap-y-3 items-end">

<div className="flex-1 flex flex-col justify-end gap-2 group cursor-pointer">
<div className="text-[9px] font-mono text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity text-center font-sans" style={{}}>5M</div>
<div className="w-full bg-zinc-800 h-[25%] rounded-sm"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group cursor-pointer">
<div className="text-[9px] font-mono text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity text-center font-sans" style={{}}>12M</div>
<div className="w-full bg-zinc-700 h-[40%] rounded-sm"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group cursor-pointer">
<div className="text-[9px] font-mono text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity text-center font-sans" style={{}}>25M</div>
<div className="w-full bg-zinc-600 h-[65%] rounded-sm bg-gradient-to-t from-zinc-700 to-zinc-600"></div>
</div>
<div className="flex-1 flex flex-col justify-end gap-2 group cursor-pointer">
<div className="text-[9px] font-mono text-indigo-400 opacity-100 text-center font-bold font-sans" style={{}}>80M</div>
<div className="w-full bg-indigo-600 h-[100%] rounded-sm shadow-xl shadow-indigo-500/20"></div>
</div>
</div>
<div className="flex justify-between items-center mt-3 text-[10px] font-bold tracking-tight">
<span className="text-zinc-500 font-sans" style={{}}>©2025</span>
<span className="font-mono text-zinc-600 font-normal tracking-wider font-sans" style={{}}>FORECAST</span>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-12 lg:col-span-4 flex flex-col min-h-[300px] bg-zinc-900 h-full rounded-sm pt-8 pr-8 pb-8 pl-8 justify-between spotlight-card group" style={{-MouseX: '16.3359375px', -MouseY: '-2313.5px'}}>
<div className="">
<div className="flex justify-between items-start mb-6">
<div className="text-[10px] font-mono text-zinc-500 tracking-widest font-sans" style={{}}>(006)</div>
<div className="text-[10px] font-mono text-zinc-500 tracking-widest font-sans" style={{}}>[PROJECTION]</div>
</div>
<h3 className="text-3xl md:text-3xl text-white tracking-tight leading-tight mb-8 font-newsreader font-light" style={{}}>
                    Universal <span className="text-white/50 font-newsreader font-light" style={{}}>Deployment</span> Network
                </h3>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="bg-black border border-white/10 p-3 h-24 rounded-sm relative overflow-hidden group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent"></div>
<div className="relative z-10 text-2xl text-white tracking-tighter font-newsreader font-light" style={{}}>1M</div>
<div className="text-[9px] text-zinc-500 uppercase mt-1 relative z-10 font-medium tracking-wide font-sans" style={{}}>Active Nodes</div>

<div className="absolute bottom-0 left-0 right-0 h-10 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '3px 3px'}}></div>
</div>
<div className="bg-indigo-600 p-3 h-24 rounded-sm relative overflow-hidden flex items-center justify-center group cursor-pointer hover:bg-indigo-500 transition-colors">
<svg className="lucide lucide-globe w-12 h-12 text-white/20 absolute -right-2 -bottom-2 group-hover:scale-110 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<div className="text-center relative z-10">
<div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center mx-auto mb-2 bg-white/10">
<svg className="lucide lucide-arrow-right w-4 h-4 text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<div className="text-[9px] text-white/90 uppercase font-bold tracking-widest font-sans" style={{}}>Connect</div>
</div>
</div>
</div>
<div className="mt-4 pt-4 border-t border-white/10 flex gap-1.5">
<div className="bg-indigo-500 h-1 w-8 rounded-full"></div>
<div className="bg-zinc-800 h-1 w-4 rounded-full"></div>
<div className="bg-zinc-800 h-1 w-2 rounded-full"></div>
</div>
</div>
</div>
</section><section className="lg:py-32 border-white/[0.03] overflow-hidden bg-[#050505] border-b pt-24 pb-24 relative">

<div className="absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pointer-events-none flex justify-between z-0">
<div className="w-px h-full bg-white/[0.03]"></div>
<div className="hidden md:block w-px h-full bg-white/[0.03] absolute left-1/2 -translate-x-1/2"></div>
<div className="hidden lg:block w-px h-full bg-white/[0.03] absolute left-[33.33%]"></div>
<div className="hidden lg:block w-px h-full bg-white/[0.03] absolute left-[66.66%]"></div>
<div className="w-px h-full bg-white/[0.03]"></div>
</div>
<div className="z-10 md:px-12 lg:px-24 max-w-[1440px] mr-auto ml-auto pr-6 pl-6 relative">

<div className="mb-24 text-center [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="inline-flex items-center gap-2 mb-6 border border-white/10 rounded-full px-3 py-1 bg-white/[0.02]">
<iconify-icon className="text-indigo-400" icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
<span className="text-[10px] tracking-[0.2em] uppercase text-white/60 font-medium font-sans">Enterprise Validation</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-newsreader italic tracking-tight font-light">
                Trusted by <span className="text-white/40 font-newsreader not-italic">Industry Leaders</span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="spotlight-card group p-8 rounded-sm [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate" style={{-MouseX: '437px', -MouseY: '-3158.5px'}}>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="flex items-start justify-between border-b border-white/[0.06] pb-6 mb-8">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Profile" className="w-10 h-10 rounded-sm object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full border border-black"></div>
</div>
<div>
<div className="text-[13px] font-semibold text-white font-sans">Elena Rossi</div>
<div className="text-[9px] uppercase tracking-widest text-white/40 mt-1 font-sans">CTO, Vercel</div>
</div>
</div>
<iconify-icon className="text-white/30 group-hover:text-white transition-colors duration-500" icon="simple-icons:vercel" width="24"></iconify-icon>
</div>
<p className="text-xl md:text-2xl font-light leading-snug text-white/80 font-newsreader italic mb-8">
                            "The vector embedding architecture reduced our query latency by 40%. It's not just faster; it's prescient."
                        </p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/[0.03]">
<span className="text-[10px] font-mono text-zinc-600 font-sans">01</span>
<iconify-icon className="text-indigo-500/50" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="spotlight-card group p-8 rounded-sm [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate" style={{-MouseX: '13.671875px', -MouseY: '-3158.5px'}}>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="flex items-start justify-between border-b border-white/[0.06] pb-6 mb-8">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Profile" className="w-10 h-10 rounded-sm object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-indigo-500 rounded-full border border-black"></div>
</div>
<div>
<div className="text-[13px] font-semibold text-white font-sans">Marcus Chen</div>
<div className="text-[9px] uppercase tracking-widest text-white/40 mt-1 font-sans">AI Lead, Stripe</div>
</div>
</div>
<iconify-icon className="text-white/30 group-hover:text-white transition-colors duration-500" icon="simple-icons:stripe" width="24"></iconify-icon>
</div>
<p className="text-xl md:text-2xl font-light leading-snug text-white/80 font-newsreader italic mb-8">
                            "Integrating Nexus into our fraud detection layer was seamless. The false positive rate dropped overnight."
                        </p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/[0.03]">
<span className="text-[10px] font-mono text-zinc-600 font-sans">02</span>
<iconify-icon className="text-indigo-500/50" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="spotlight-card group p-8 rounded-sm [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate" style={{-MouseX: '-409.6640625px', -MouseY: '-3158.5px'}}>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="flex items-start justify-between border-b border-white/[0.06] pb-6 mb-8">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Profile" className="w-10 h-10 rounded-sm object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-purple-500 rounded-full border border-black"></div>
</div>
<div>
<div className="text-[13px] font-semibold text-white font-sans">Sarah Jenkins</div>
<div className="text-[9px] uppercase tracking-widest text-white/40 mt-1 font-sans">Eng Dir, Linear</div>
</div>
</div>
<iconify-icon className="text-white/30 group-hover:text-white transition-colors duration-500" icon="simple-icons:linear" width="24"></iconify-icon>
</div>
<p className="text-xl md:text-2xl font-light leading-snug text-white/80 font-newsreader italic mb-8">
                            "We needed a system that could scale with our user base. The neural core handled 10x load without flinching."
                        </p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/[0.03]">
<span className="text-[10px] font-mono text-zinc-600 font-sans">03</span>
<iconify-icon className="text-indigo-500/50" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="spotlight-card group p-8 rounded-sm [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll animate" style={{-MouseX: '437px', -MouseY: '-3504.5px'}}>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="flex items-start justify-between border-b border-white/[0.06] pb-6 mb-8">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Profile" className="w-10 h-10 rounded-sm object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-500 rounded-full border border-black"></div>
</div>
<div>
<div className="text-[13px] font-semibold text-white font-sans">David Okonjo</div>
<div className="text-[9px] uppercase tracking-widest text-white/40 mt-1 font-sans">VP Product, Shopify</div>
</div>
</div>
<iconify-icon className="text-white/30 group-hover:text-white transition-colors duration-500" icon="simple-icons:shopify" width="24"></iconify-icon>
</div>
<p className="text-xl md:text-2xl font-light leading-snug text-white/80 font-newsreader italic mb-8">
                            "Nexus transformed our recommendation engine from a static list to a dynamic, intent-driven conversation."
                        </p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/[0.03]">
<span className="text-[10px] font-mono text-zinc-600 font-sans">04</span>
<iconify-icon className="text-indigo-500/50" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="spotlight-card group p-8 rounded-sm [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll animate" style={{-MouseX: '13.671875px', -MouseY: '-3504.5px'}}>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="flex items-start justify-between border-b border-white/[0.06] pb-6 mb-8">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Profile" className="w-10 h-10 rounded-sm object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-black"></div>
</div>
<div>
<div className="text-[13px] font-semibold text-white font-sans">James Miller</div>
<div className="text-[9px] uppercase tracking-widest text-white/40 mt-1 font-sans">Architect, Raycast</div>
</div>
</div>
<iconify-icon className="text-white/30 group-hover:text-white transition-colors duration-500" icon="simple-icons:raycast" width="24"></iconify-icon>
</div>
<p className="text-xl md:text-2xl font-light leading-snug text-white/80 font-newsreader italic mb-8">
                            "The clarity of the API documentation and the robustness of the SDKs made complex implementation a joy."
                        </p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/[0.03]">
<span className="text-[10px] font-mono text-zinc-600 font-sans">05</span>
<iconify-icon className="text-indigo-500/50" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="spotlight-card group p-8 rounded-sm [animation:animationIn_0.8s_ease-out_0.8s_both] animate-on-scroll animate" style={{-MouseX: '-409.6640625px', -MouseY: '-3504.5px'}}>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="">
<div className="flex items-start justify-between border-b border-white/[0.06] pb-6 mb-8">
<div className="flex items-center gap-4">
<div className="relative">
<img alt="Profile" className="w-10 h-10 rounded-sm object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&amp;w=120&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full border border-black"></div>
</div>
<div>
<div className="text-[13px] font-semibold text-white font-sans">Anna Wei</div>
<div className="text-[9px] uppercase tracking-widest text-white/40 mt-1 font-sans">Data Lead, OpenAI</div>
</div>
</div>
<iconify-icon className="text-white/30 group-hover:text-white transition-colors duration-500" icon="simple-icons:openai" width="24"></iconify-icon>
</div>
<p className="text-xl md:text-2xl font-light leading-snug text-white/80 font-newsreader italic mb-8">
                            "Finally, an infrastructure partner that understands the nuance of ethical AI compliance and data sovereignty."
                        </p>
</div>
<div className="flex items-center justify-between pt-4 border-t border-white/[0.03]">
<span className="text-[10px] font-mono text-zinc-600 font-sans">06</span>
<iconify-icon className="text-indigo-500/50" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section><section className="lg:py-32 border-white/[0.03] overflow-hidden bg-[#050505] border-b pt-24 pb-24 relative">

<div className="absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pointer-events-none flex justify-between z-0">
<div className="w-px h-full bg-white/[0.03]"></div>
<div className="hidden md:block w-px h-full bg-white/[0.03] absolute left-1/2 -translate-x-1/2"></div>
<div className="hidden lg:block w-px h-full bg-white/[0.03] absolute left-[33.33%]"></div>
<div className="hidden lg:block w-px h-full bg-white/[0.03] absolute left-[66.66%]"></div>
<div className="w-px h-full bg-white/[0.03]"></div>
</div>
<div className="z-10 md:px-12 lg:px-24 max-w-[1440px] mr-auto ml-auto pr-6 pl-6 relative">

<div className="mb-20 text-center [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-newsreader italic tracking-tight font-light mb-8">
                Big or Small? <span className="text-white/40 font-newsreader not-italic">I have a plan.</span>
</h2>

<div className="inline-flex items-center gap-4 p-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm">
<span className="text-[10px] font-medium tracking-widest text-white/60 uppercase pl-4 font-sans">Monthly</span>
<button className="relative w-12 h-6 rounded-full bg-zinc-800 border border-white/5 transition-colors focus:outline-none">
<span className="absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-300"></span>
</button>
<span className="text-[10px] font-medium tracking-widest text-white/40 uppercase pr-4 font-sans">Annual</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="spotlight-card group p-8 rounded-sm [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate flex flex-col h-full relative overflow-hidden" style={{-MouseX: '437px', -MouseY: '-4321.5px'}}>
<div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</button>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl text-white font-light font-sans">$499</span>
<span className="text-xs text-white/40 uppercase tracking-widest font-sans">/month</span>
</div>
<div className="text-sm font-semibold text-white uppercase tracking-[0.2em] mb-4 font-sans">Starter Plan</div>
<p className="text-[13px] text-white/50 leading-relaxed font-sans min-h-[60px]">
                        Our basic pricing plan is designed to offer extraordinary value and core features.
                    </p>
</div>
<div className="border-t border-white/[0.06] pt-8 mt-auto">
<div className="text-[10px] text-white/30 uppercase tracking-widest mb-6 font-sans">What's included</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-[13px] text-white/70 font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            All templates unlocked
                        </li>
<li className="flex items-center gap-3 text-[13px] text-white/70 font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Unlimited requests
                        </li>
<li className="flex items-center gap-3 text-[13px] text-white/70 font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Project management
                        </li>
<li className="flex items-center gap-3 text-[13px] text-white/30 font-sans">
<iconify-icon className="text-white/20" icon="solar:close-circle-linear" width="16"></iconify-icon>
                            Access to all services
                        </li>
</ul>
<div className="flex items-center justify-between">
<span className="text-[10px] font-mono text-zinc-600 font-sans">01</span>
<a className="text-[11px] uppercase tracking-widest text-white/60 hover:text-white transition-colors border-b border-transparent hover:border-white/40 pb-0.5 font-sans" href="#">Subscribe</a>
</div>
</div>
</div>

<div className="spotlight-card group p-8 rounded-sm [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate flex flex-col h-full relative overflow-hidden border border-white/10 bg-white/[0.02]" style={{-MouseX: '13.671875px', -MouseY: '-4321.5px'}}>
<div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</button>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl text-white font-light font-sans">$799</span>
<span className="text-xs text-white/40 uppercase tracking-widest font-sans">/month</span>
</div>
<div className="flex items-center gap-3 mb-4">
<div className="text-sm font-semibold text-white uppercase tracking-[0.2em] font-sans">Growth Plan</div>
<span className="px-2 py-0.5 bg-white text-black text-[9px] font-bold uppercase tracking-wider rounded-sm font-sans">Pro</span>
</div>
<p className="text-[13px] text-white/50 leading-relaxed font-sans min-h-[60px]">
                        Our pro pricing plan is designed for businesses needing advanced features and scale.
                    </p>
</div>
<div className="border-t border-white/[0.06] pt-8 mt-auto">
<div className="text-[10px] text-white/30 uppercase tracking-widest mb-6 font-sans">What's included</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-[13px] text-white/90 font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            All templates unlocked
                        </li>
<li className="flex items-center gap-3 text-[13px] text-white/90 font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Unlimited requests &amp; revisions
                        </li>
<li className="flex items-center gap-3 text-[13px] text-white/90 font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Dedicated Project Manager
                        </li>
<li className="flex items-center gap-3 text-[13px] text-white/90 font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Access to all services
                        </li>
</ul>
<div className="flex items-center justify-between">
<span className="text-[10px] font-mono text-zinc-600 font-sans">02</span>
<a className="text-[11px] uppercase tracking-widest text-white hover:text-white transition-colors border-b border-white/40 hover:border-white pb-0.5 font-sans" href="#">Subscribe</a>
</div>
</div>
</div>

<div className="spotlight-card group p-8 rounded-sm [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate flex flex-col h-full relative overflow-hidden" style={{-MouseX: '-409.6640625px', -MouseY: '-4321.5px'}}>
<div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
<button className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/5 transition-all">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</button>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-1 mb-6">
<span className="text-4xl text-white font-light font-sans">$1299</span>
<span className="text-xs text-white/40 uppercase tracking-widest font-sans">/month</span>
</div>
<div className="text-sm font-semibold text-white uppercase tracking-[0.2em] mb-4 font-sans">Premium Plan</div>
<p className="text-[13px] text-white/50 leading-relaxed font-sans min-h-[60px]">
                        Our plus pricing plan is designed for a corporate entities requiring premium support.
                    </p>
</div>
<div className="border-t border-white/[0.06] pt-8 mt-auto">
<div className="text-[10px] text-white/30 uppercase tracking-widest mb-6 font-sans">What's included</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-[13px] text-white/70 font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            All templates unlocked
                        </li>
<li className="flex items-center gap-3 text-[13px] text-white/70 font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Unlimited requests (Priority)
                        </li>
<li className="flex items-center gap-3 text-[13px] text-white/70 font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Senior Project Manager
                        </li>
<li className="flex items-center gap-3 text-[13px] text-white/70 font-sans">
<iconify-icon className="text-white" icon="solar:check-circle-linear" width="16"></iconify-icon>
                            Access to all services &amp; API
                        </li>
</ul>
<div className="flex items-center justify-between">
<span className="text-[10px] font-mono text-zinc-600 font-sans">03</span>
<a className="text-[11px] uppercase tracking-widest text-white/60 hover:text-white transition-colors border-b border-transparent hover:border-white/40 pb-0.5 font-sans" href="#">Subscribe</a>
</div>
</div>
</div>
</div>
</div>
</section><section className="lg:py-32 border-white/[0.03] overflow-hidden bg-[#050505] border-b pt-24 pb-24 relative">

<div className="absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pointer-events-none flex justify-between z-0">
<div className="w-px h-full bg-white/[0.03]"></div>
<div className="hidden md:block w-px h-full bg-white/[0.03] absolute left-1/2 -translate-x-1/2"></div>
<div className="hidden lg:block w-px h-full bg-white/[0.03] absolute left-[33.33%]"></div>
<div className="hidden lg:block w-px h-full bg-white/[0.03] absolute left-[66.66%]"></div>
<div className="w-px h-full bg-white/[0.03]"></div>
</div>
<div className="z-10 md:px-12 lg:px-24 max-w-[1440px] mr-auto ml-auto pr-6 pl-6 relative">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24">

<div className="lg:col-span-5 flex flex-col justify-between h-full [animation:animationIn_0.8s_ease-out_0.2s_both] animate-on-scroll animate">
<div className="">
<div className="inline-flex items-center gap-2 mb-8 border border-white/10 rounded-full px-3 py-1 bg-white/[0.02]">
<iconify-icon className="text-white" icon="solar:bolt-linear" width="14"></iconify-icon>
<span className="text-[10px] tracking-[0.2em] uppercase text-white/60 font-medium font-sans">Why Nexus</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-5xl text-white font-newsreader italic tracking-tight font-light mb-6">
                        Engineered for 
                        <span className="text-white/40 font-newsreader not-italic">Scale &amp; Speed</span>
</h2>
<p className="text-white/50 leading-relaxed font-sans max-w-sm mb-12">
                        We don't just build software; we architect digital nervous systems that evolve with your enterprise needs.
                    </p>
</div>
<button className="group inline-flex w-fit overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] rounded-sm pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative items-center justify-center">
<span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#ffffff_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
<span className="absolute inset-0 rounded-sm bg-zinc-800 transition-opacity duration-300 group-hover:opacity-0"></span>
<span className="flex items-center justify-center gap-3 transition-colors duration-300 group-hover:text-white text-sm font-medium text-zinc-300 tracking-tight bg-black w-full h-full rounded-sm pt-4 pr-8 pb-4 pl-8 relative">
<span className="relative z-10 font-sans uppercase tracking-widest text-xs">Start Integration</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</span>
</button>
</div>

<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">

<div className="group [animation:animationIn_0.8s_ease-out_0.3s_both] animate-on-scroll animate">
<div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center mb-6 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors">
<iconify-icon className="text-white/80" icon="solar:rocket-2-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-serif italic text-xl mb-3">Velocity First</h3>
<p className="text-[13px] text-white/50 leading-relaxed font-sans">
                        Deploy production-ready environments in minutes, not months. Our pre-configured stacks eliminate boilerplate fatigue.
                    </p>
</div>

<div className="group [animation:animationIn_0.8s_ease-out_0.4s_both] animate-on-scroll animate">
<div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center mb-6 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors">
<iconify-icon className="text-white/80" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-serif italic text-xl mb-3">Sovereign Security</h3>
<p className="text-[13px] text-white/50 leading-relaxed font-sans">
                        SOC2 Type II compliant infrastructure with optional on-premise deployment for total data governance.
                    </p>
</div>

<div className="group [animation:animationIn_0.8s_ease-out_0.5s_both] animate-on-scroll animate">
<div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center mb-6 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors">
<iconify-icon className="text-white/80" icon="solar:graph-new-up-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-serif italic text-xl mb-3">Infinite Scale</h3>
<p className="text-[13px] text-white/50 leading-relaxed font-sans">
                        Built on serverless architecture that scales from zero to millions of concurrent requests without manual intervention.
                    </p>
</div>

<div className="group [animation:animationIn_0.8s_ease-out_0.6s_both] animate-on-scroll animate">
<div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center mb-6 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors">
<iconify-icon className="text-white/80" icon="solar:code-circle-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-serif italic text-xl mb-3">Developer Native</h3>
<p className="text-[13px] text-white/50 leading-relaxed font-sans">
                        Comprehensive SDKs for Python, Node, and Go. Written by developers, for developers, with exceptional docs.
                    </p>
</div>

<div className="group sm:col-span-2 lg:col-span-1 [animation:animationIn_0.8s_ease-out_0.7s_both] animate-on-scroll animate">
<div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center mb-6 bg-white/[0.02] group-hover:bg-white/[0.05] transition-colors">
<iconify-icon className="text-white/80" icon="solar:headphones-round-linear" width="20"></iconify-icon>
</div>
<h3 className="text-white font-serif italic text-xl mb-3">Human Support</h3>
<p className="text-[13px] text-white/50 leading-relaxed font-sans">
                        Direct access to core engineers via Slack. We don't hide behind chatbots when your critical systems are live.
                    </p>
</div>
</div>
</div>
</div>
</section><footer className="relative bg-[#050505] border-t border-white/[0.03] overflow-hidden">

<div className="absolute inset-0 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 pointer-events-none flex justify-between z-0">
<div className="w-px h-full bg-white/[0.03]"></div>
<div className="hidden lg:block w-px h-full bg-white/[0.03] absolute left-[25%]"></div>
<div className="hidden md:block w-px h-full bg-white/[0.03] absolute left-1/2 -translate-x-1/2"></div>
<div className="hidden lg:block w-px h-full bg-white/[0.03] absolute left-[75%]"></div>
<div className="w-px h-full bg-white/[0.03]"></div>
</div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent shadow-[0_0_15px_rgba(99,102,241,0.5)] z-20"></div>
<div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-white/[0.03]">

<a className="group relative py-8 lg:pr-8 flex items-center justify-between border-b md:border-b-0 md:border-r border-white/[0.03] hover:bg-white/[0.02] transition-all duration-500" href="#">
<div className="flex items-center gap-4">
<iconify-icon className="text-white/40 group-hover:text-[#1877F2] transition-colors duration-300" icon="simple-icons:facebook" width="20"></iconify-icon>
<span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors font-sans">Facebook</span>
</div>
<div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.02] group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white/40 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</a>

<a className="group relative py-8 lg:px-8 flex items-center justify-between border-b md:border-b-0 lg:border-r border-white/[0.03] hover:bg-white/[0.02] transition-all duration-500" href="#">
<div className="flex items-center gap-4">
<iconify-icon className="text-white/40 group-hover:text-white transition-colors duration-300" icon="simple-icons:x" width="18"></iconify-icon>
<span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors font-sans">Twitter</span>
</div>
<div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.02] group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white/40 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</a>

<a className="group relative py-8 lg:px-8 flex items-center justify-between border-b md:border-b-0 md:border-r border-white/[0.03] hover:bg-white/[0.02] transition-all duration-500" href="#">
<div className="flex items-center gap-4">
<iconify-icon className="text-white/40 group-hover:text-[#FF0000] transition-colors duration-300" icon="simple-icons:youtube" width="20"></iconify-icon>
<span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors font-sans">Youtube</span>
</div>
<div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.02] group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white/40 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</a>

<a className="group relative py-8 lg:pl-8 flex items-center justify-between hover:bg-white/[0.02] transition-all duration-500" href="#">
<div className="flex items-center gap-4">
<iconify-icon className="text-white/40 group-hover:text-[#E4405F] transition-colors duration-300" icon="simple-icons:instagram" width="20"></iconify-icon>
<span className="text-sm font-medium text-white/60 group-hover:text-white transition-colors font-sans">Instagram</span>
</div>
<div className="w-8 h-8 rounded-full border border-white/5 flex items-center justify-center bg-white/[0.02] group-hover:bg-white/10 transition-colors">
<iconify-icon className="text-white/40 group-hover:text-white transition-colors" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</div>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-16 pb-24">

<div className="flex flex-col gap-8 lg:pr-8 border-r-0 md:border-r border-white/[0.03] border-b md:border-b-0 pb-12 md:pb-0">
<div className="flex flex-col gap-2">
<span className="font-mono text-[10px] text-zinc-600 tracking-widest font-sans">01</span>
<h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-white uppercase">About Us</h4>
</div>
<ul className="flex flex-col gap-4">
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Pricing Methodology</a></li>
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Contact Sales</a></li>
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Documentation</a></li>
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Latest News</a></li>
</ul>
</div>

<div className="flex flex-col gap-8 md:pl-8 lg:px-8 border-r-0 lg:border-r border-white/[0.03] border-b md:border-b-0 py-12 md:py-0">
<div className="flex flex-col gap-2">
<span className="font-mono text-[10px] text-zinc-600 tracking-widest font-sans">02</span>
<h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-white uppercase">Support</h4>
</div>
<ul className="flex flex-col gap-4">
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Help Center</a></li>
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">API Status</a></li>
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Report Issue</a></li>
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Security Audit</a></li>
</ul>
</div>

<div className="flex flex-col gap-8 lg:px-8 border-r-0 md:border-r border-white/[0.03] border-b md:border-b-0 py-12 md:py-0">
<div className="flex flex-col gap-2">
<span className="font-mono text-[10px] text-zinc-600 tracking-widest font-sans">03</span>
<h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-white uppercase">Community</h4>
</div>
<ul className="flex flex-col gap-4">
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Developer Forum</a></li>
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Events &amp; Hackathons</a></li>
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Partner Program</a></li>
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Careers</a></li>
</ul>
</div>

<div className="flex flex-col gap-8 md:pl-8 lg:pl-8 py-12 md:py-0">
<div className="flex flex-col gap-2">
<span className="font-mono text-[10px] text-zinc-600 tracking-widest font-sans">04</span>
<h4 className="font-sans text-xs font-semibold tracking-[0.2em] text-white uppercase">Legal</h4>
</div>
<ul className="flex flex-col gap-4">
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Investor Relations</a></li>
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Terms of Service</a></li>
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Privacy Policy</a></li>
<li><a className="text-[13px] text-white/40 hover:text-white transition-colors duration-300 font-sans" href="#">Cookie Settings</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 py-12 border-t border-white/[0.03]">
<div className="flex items-center gap-3">
<div className="w-6 h-6 bg-white/[0.05] rounded-sm flex items-center justify-center">
<svg className="lucide lucide-cpu w-3 h-3 text-white/60" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
<span className="text-[11px] text-white/30 font-sans">© 2025 NEXUS INTELLIGENCE INC.</span>
</div>
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
<span className="text-[11px] text-emerald-500/80 font-mono font-sans">ALL SYSTEMS OPERATIONAL</span>
</div>
</div>
</div>
</div>
</footer>
</main>
</div>


    </>
  );
}
