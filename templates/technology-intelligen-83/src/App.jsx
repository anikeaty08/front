import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const canvas = document.getElementById('hero-gl');
        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];
        const spacing = 45; 
        
        function resize() {
            width = canvas.width = canvas.parentElement.offsetWidth;
            height = canvas.height = canvas.parentElement.offsetHeight;
            initGrid();
        }

        function initGrid() {
            particles = [];
            const cols = Math.floor(width / spacing);
            const rows = Math.floor(height / spacing);
            
            for(let i = 0; i < cols; i++) {
                for(let j = 0; j < rows; j++) {
                    if(Math.random() > 0.6) {
                        particles.push({
                            x: i * spacing + (spacing/2),
                            y: j * spacing + (spacing/2),
                            baseAlpha: Math.random() * 0.2 + 0.05,
                            alpha: 0,
                            targetAlpha: Math.random() * 0.2 + 0.05,
                            flashSpeed: Math.random() * 0.01 + 0.005,
                            size: Math.random() > 0.9 ? 2 : 1,
                            isNode: Math.random() > 0.95
                        });
                    }
                }
            }
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            
            ctx.lineWidth = 0.5;
            for(let i = 0; i < particles.length; i++) {
                let p1 = particles[i];
                
                p1.alpha += (p1.targetAlpha - p1.alpha) * 0.1;
                if(Math.abs(p1.alpha - p1.targetAlpha) < 0.01) {
                    p1.targetAlpha = Math.random() > 0.9 ? 0.6 : p1.baseAlpha; 
                }

                ctx.fillStyle = p1.isNode ? `rgba(255, 51, 0, ${p1.alpha * 1.5})` : `rgba(10, 10, 10, ${p1.alpha})`;
                ctx.beginPath();
                ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
                ctx.fill();

                for(let j = i + 1; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dx = p1.x - p2.x;
                    let dy = p1.y - p2.y;
                    let dist = Math.sqrt(dx*dx + dy*dy);
                    
                    if(dist < spacing * 1.5) {
                        ctx.strokeStyle = `rgba(10, 10, 10, ${Math.min(p1.alpha, p2.alpha) * 0.15})`;
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(draw);
        }

        window.addEventListener('resize', resize);
        resize();
        draw();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="pointer-events-none fixed inset-0 z-[100] mix-blend-multiply opacity-[0.04] bg-noise"></div>
<div className="pointer-events-none fixed inset-y-0 left-0 w-px bg-[#0A0A0A]/5 z-[90] ml-6 lg:ml-12"></div>
<div className="pointer-events-none fixed inset-y-0 right-0 w-px bg-[#0A0A0A]/5 z-[90] mr-6 lg:ml-12"></div>
<nav className="fixed top-0 w-full z-50 border-b border-[#0A0A0A]/10 bg-[#F8F8F7]/80 backdrop-blur-xl">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
<a className="flex items-center gap-3 text-[#0A0A0A] group" href="#">
<svg className="group-hover:text-[#FF3300] transition-colors duration-300" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" stroke="currentColor" strokeWidth="2" width="18" x="3" y="3"></rect>
<path d="M3 9H21" stroke="currentColor" strokeWidth="2"></path>
<path d="M9 21V9" stroke="currentColor" strokeWidth="2"></path>
</svg>
<span className="text-xl font-display font-medium tracking-tight uppercase leading-none mt-1">TRST</span>
</a>
<div className="hidden lg:flex space-x-10 text-xs text-[#5A5A5C] font-mono tracking-widest uppercase">
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#map">Market Map</a>
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#benchmark">Benchmark</a>
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#grader">Grader</a>
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#insights">Insights</a>
</div>
<a className="btn-angular relative group overflow-hidden bg-[#0A0A0A] text-white text-xs font-mono px-6 py-2.5 uppercase tracking-widest flex items-center gap-2 border border-[#0A0A0A]" href="#strategic-fit">
<span className="relative z-10 group-hover:text-[#0A0A0A] transition-colors duration-300 flex items-center gap-2">
                    Discuss Strategic Fit <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<div className="hover-layer absolute inset-0 bg-white translate-y-[101%] z-0"></div>
</a>
</div>
</nav>
<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 px-6 lg:px-12 max-w-[90rem] mx-auto w-full min-h-[90vh] flex items-center border-b border-[#0A0A0A]/10">
<canvas className="absolute inset-0 w-full h-full z-0 opacity-40" id="hero-gl"></canvas>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F8F7]/50 to-[#F8F8F7] z-0"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 w-full relative z-10">
<div className="lg:col-span-8 relative">
<div className="inline-flex flex-wrap items-center gap-4 mb-8 font-mono text-xs text-[#5A5A5C] uppercase tracking-widest bg-white/50 backdrop-blur-sm px-3 py-1.5 border border-[#0A0A0A]/10">
<span className="text-[#FF3300] flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-[#FF3300] relative"><span className="absolute inset-0 bg-[#FF3300] animate-ping opacity-75"></span></span>
                        ASSET LIVE
                    </span>
<div className="h-3 w-px bg-[#0A0A0A]/20"></div>
<span>Categories: 8</span>
<div className="h-3 w-px bg-[#0A0A0A]/20"></div>
<span>Methodology: Transparent</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.85] mb-8 uppercase text-[#0A0A0A]">
                    Trust <br/>
<span className="text-transparent text-stroke-dark" style={{WebkitTextStroke: '1px #0A0A0A', color: 'transparent'}}>Infrastructure,</span> <br/>
                    Mapped.
                </h1>
<p className="text-[#0A0A0A] font-normal text-base md:text-xl max-w-[50ch] leading-relaxed mb-10 border-l-2 border-[#FF3300] pl-6 py-1">
                    TRST.com is a developing intelligence layer for the systems behind digital trust. We organize identity, verification, fraud controls, consent, and compliance through structured data and operator research.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="btn-angular relative group overflow-hidden bg-[#FF3300] text-white px-8 py-5 flex items-center gap-4" href="#strategic-fit">
<span className="relative z-10 font-mono text-xs uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                            Discuss Strategic Fit
                        </span>
<iconify-icon className="relative z-10 text-xl group-hover:translate-x-2 transition-transform duration-300" icon="solar:round-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="hover-layer absolute inset-0 bg-[#0A0A0A] translate-y-[101%] z-0"></div>
</a>
<a className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest hover:text-[#0A0A0A] transition-colors border-b border-transparent hover:border-[#0A0A0A] pb-1" href="#benchmark">
                        Explore the Benchmark
                    </a>
</div>
<div className="mt-12 flex flex-wrap gap-4 font-mono text-xs text-[#5A5A5C] uppercase tracking-widest">
<span className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Structured market map</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Transparent criteria</span>
<span className="flex items-center gap-2"><iconify-icon icon="solar:check-read-linear"></iconify-icon> Trust stack grader</span>
</div>
</div>
<div className="lg:col-span-4 hidden lg:flex flex-col justify-end pb-8">
<div className="bg-white border border-[#0A0A0A]/10 p-6 card-angular shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-[#F8F8F7] -mr-8 -mt-8 rotate-45 border-b border-[#0A0A0A]/10 group-hover:bg-[#FF3300] transition-colors duration-500"></div>
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-4 flex justify-between border-b border-[#0A0A0A]/10 pb-2">
<span>Taxonomy Status</span>
<span>[ ACTIVE ]</span>
</div>
<ul className="space-y-3 font-mono text-xs text-[#0A0A0A] uppercase">
<li className="flex justify-between items-center"><span className="text-[#5A5A5C]">IDENTITY VERIFICATION</span> <span>MAPPED</span></li>
<li className="flex justify-between items-center"><span className="text-[#5A5A5C]">KYB &amp; COMPLIANCE</span> <span>MAPPED</span></li>
<li className="flex justify-between items-center"><span className="text-[#5A5A5C]">FRAUD &amp; RISK</span> <span>MAPPED</span></li>
<li className="flex justify-between items-center"><span className="text-[#5A5A5C]">CONSENT INFRA</span> <span className="text-[#FF3300]">INDEXING</span></li>
</ul>
</div>
</div>
</div>
</header>
<div className="border-b border-[#0A0A0A]/10 py-2.5 bg-[#0A0A0A] text-white overflow-hidden relative z-20">
<div className="marquee-container">
<div className="marquee-content font-mono text-xs tracking-widest uppercase gap-12" data-marquee="IDENTITY VERIFICATION • KYB / BUSINESS VERIFICATION • FRAUD PREVENTION • CONSENT MANAGEMENT • DIGITAL CREDENTIALS • TRUST &amp; SAFETY • AUTHENTICATION • REPUTATION SYSTEMS • ">
<span className="flex items-center gap-3">IDENTITY VERIFICATION <span className="text-[#FF3300]">•</span></span>
<span className="flex items-center gap-3">KYB / BUSINESS VERIFICATION <span className="text-[#FF3300]">•</span></span>
<span className="flex items-center gap-3">FRAUD PREVENTION <span className="text-[#FF3300]">•</span></span>
<span className="flex items-center gap-3">CONSENT MANAGEMENT <span className="text-[#FF3300]">•</span></span>
<span className="flex items-center gap-3">DIGITAL CREDENTIALS <span className="text-[#FF3300]">•</span></span>
<span className="flex items-center gap-3">TRUST &amp; SAFETY <span className="text-[#FF3300]">•</span></span>
<span className="flex items-center gap-3">AUTHENTICATION <span className="text-[#FF3300]">•</span></span>
<span className="flex items-center gap-3">REPUTATION SYSTEMS <span className="text-[#FF3300]">•</span></span>
</div>
</div>
</div>
<section className="py-24 px-6 lg:px-12 max-w-[90rem] mx-auto border-b border-[#0A0A0A]/10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div>
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-6 flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:diagram-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon> The Current State
                </div>
<h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tight uppercase mb-6 leading-[0.9] text-[#0A0A0A]">
                    A fragmented <br/><span className="text-[#5A5A5C]">category is becoming</span><br/> critical infrastructure.
                </h2>
<p className="text-[#5A5A5C] text-sm leading-relaxed max-w-[45ch]">
                    Identity, verification, fraud, consent, and governance are often evaluated in isolation. Yet, operators deploy them as an interconnected stack. TRST.com builds the context required to make structural decisions.
                </p>
</div>
<div className="bg-white border border-[#0A0A0A]/10 p-8 lg:p-12 relative">
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="relative z-10">
<div className="font-mono text-xs text-[#FF3300] uppercase tracking-widest mb-6 flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon> The Intelligence Need
                    </div>
<ul className="space-y-6 font-mono text-xs text-[#0A0A0A] uppercase tracking-wide">
<li className="border-b border-[#0A0A0A]/5 pb-6">
<span className="text-[#FF3300] mb-2 block font-medium">01. Category Fragmentation</span>
<span className="text-[#5A5A5C] normal-case tracking-normal leading-relaxed block">Navigating overlapping vendors across KYB, identity, and trust signals creates massive buyer confusion and implementation risk.</span>
</li>
<li className="border-b border-[#0A0A0A]/5 pb-6">
<span className="text-[#FF3300] mb-2 block font-medium">02. Decision Complexity</span>
<span className="text-[#5A5A5C] normal-case tracking-normal leading-relaxed block">Teams require clear frameworks to compare vendors based on risk profile, regulatory market, and long-term business model fit.</span>
</li>
<li>
<span className="text-[#FF3300] mb-2 block font-medium">03. Strategic Value</span>
<span className="text-[#5A5A5C] normal-case tracking-normal leading-relaxed block">A focused intelligence asset organizing this space becomes highly useful to operators, ecosystem partners, and strategic acquirers.</span>
</li>
</ul>
</div>
</div>
</div>
</section>
<section className="py-32 px-6 lg:px-12 max-w-[90rem] mx-auto relative z-10" id="map">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<h2 className="font-display text-5xl lg:text-6xl font-medium tracking-tight uppercase max-w-2xl leading-[0.9]">
                Inside the Intelligence Layer.
            </h2>
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest pb-2 border-b-2 border-[#0A0A0A] flex items-center gap-2">
                Core Modules <span className="text-[#FF3300]">[03]</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-white p-8 lg:p-10 border border-[#0A0A0A]/10 card-angular group hover:border-[#FF3300]/50 transition-colors relative overflow-hidden">
<div className="text-[#0A0A0A] mb-12 h-12 w-12 border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#FF3300] group-hover:text-white group-hover:border-[#FF3300] transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:global-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium tracking-tight mb-4 uppercase text-[#0A0A0A]">Structured Market Map</h3>
<p className="text-[#5A5A5C] text-sm leading-relaxed mb-12">
                    Mapping the trust infrastructure landscape across distinct categories: identity verification, KYB, fraud prevention, authentication, and reputation signals.
                </p>
<div className="font-mono text-xs border-t border-[#0A0A0A]/10 pt-6 flex justify-between text-[#0A0A0A] items-center">
<span className="text-[#5A5A5C] uppercase">Explore Categories</span>
<iconify-icon className="text-xl group-hover:text-[#FF3300] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="absolute inset-x-0 h-px bg-[#FF3300]/20 -top-px group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
</div>
<div className="bg-white p-8 lg:p-10 border border-[#0A0A0A]/10 card-angular group hover:border-[#FF3300]/50 transition-colors relative overflow-hidden">
<div className="text-[#0A0A0A] mb-12 h-12 w-12 border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#FF3300] group-hover:text-white group-hover:border-[#FF3300] transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:sort-from-top-to-bottom-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium tracking-tight mb-4 uppercase text-[#0A0A0A]">Transparent Benchmark</h3>
<p className="text-[#5A5A5C] text-sm leading-relaxed mb-12">
                    A methodology-led view of how trust stacks are evaluated covering controls, transparency, governance, recovery, and implementation fit.
                </p>
<div className="font-mono text-xs border-t border-[#0A0A0A]/10 pt-6 flex justify-between text-[#0A0A0A] items-center">
<span className="text-[#5A5A5C] uppercase">Review Methodology</span>
<iconify-icon className="text-xl group-hover:text-[#FF3300] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="bg-white p-8 lg:p-10 border border-[#0A0A0A]/10 card-angular group hover:border-[#FF3300]/50 transition-colors relative overflow-hidden">
<div className="text-[#0A0A0A] mb-12 h-12 w-12 border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#FF3300] group-hover:text-white group-hover:border-[#FF3300] transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium tracking-tight mb-4 uppercase text-[#0A0A0A]">Operator Research</h3>
<p className="text-[#5A5A5C] text-sm leading-relaxed mb-12">
                    Definitions, implementation notes, category primers, and benchmark roundups designed for teams actively evaluating architecture decisions.
                </p>
<div className="font-mono text-xs border-t border-[#0A0A0A]/10 pt-6 flex justify-between text-[#0A0A0A] items-center">
<span className="text-[#5A5A5C] uppercase">Read Insights</span>
<iconify-icon className="text-xl group-hover:text-[#FF3300] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#0A0A0A] text-white border-y border-[#1A1A1A] relative overflow-hidden" id="grader">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,51,0,0.05)_0%,_transparent_50%)]"></div>
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="text-center mb-16 relative z-10">
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-4">Utility Preview</div>
<h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tight uppercase text-white mb-4">Digital Trust Stack Grader.</h2>
<p className="text-[#5A5A5C] text-sm max-w-2xl mx-auto">A lightweight way to assess coverage across identity, verification, fraud, consent, and governance. Designed as a practical entry point into the benchmark framework.</p>
</div>
<div className="relative max-w-5xl mx-auto rounded-none border border-[#333] bg-[#0A0A0A] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">
<div className="h-10 border-b border-[#333] flex items-center px-4 justify-between bg-[#111]">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
</div>
<div className="font-mono text-xs text-[#5A5A5C] tracking-widest uppercase">TRST_OS // Grader_v.1.0</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 h-auto md:h-[400px]">
<div className="md:col-span-3 border-r border-[#333] p-4 bg-[#0A0A0A] font-mono text-xs text-[#5A5A5C] flex flex-col gap-6">
<div>
<div className="uppercase tracking-widest text-white mb-3">Assessment Profile</div>
<ul className="space-y-4">
<li>
<div className="text-[10px] mb-1">INDUSTRY</div>
<div className="text-[#FF3300] bg-[#FF3300]/10 px-2 py-1 border-l-2 border-[#FF3300]">FINTECH / PAYMENTS</div>
</li>
<li>
<div className="text-[10px] mb-1">ONBOARDING RISK</div>
<div className="text-white bg-[#333]/30 px-2 py-1 border-l-2 border-[#5A5A5C]">HIGH</div>
</li>
<li>
<div className="text-[10px] mb-1">COMPLIANCE SCOPE</div>
<div className="text-white bg-[#333]/30 px-2 py-1 border-l-2 border-[#5A5A5C]">GLOBAL KYC/KYB</div>
</li>
</ul>
</div>
</div>
<div className="md:col-span-9 p-6 bg-[linear-gradient(180deg,#111_0%,#0A0A0A_100%)] relative">
<div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
<div className="flex justify-between items-start mb-8 border-b border-[#333] pb-4 relative z-10">
<div>
<h3 className="font-display text-2xl font-medium tracking-tight text-white mb-1">Output Summary</h3>
<div className="font-mono text-xs text-[#FF3300] uppercase">Analysis Complete</div>
</div>
<button className="font-mono text-xs bg-white text-[#0A0A0A] px-4 py-2 uppercase tracking-widest hover:bg-[#FF3300] hover:text-white transition-colors">
                                Try the Grader
                            </button>
</div>
<div className="grid grid-cols-2 gap-4 relative z-10">
<div className="border border-[#333] p-4 bg-[#111]/50 backdrop-blur-sm">
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest mb-2">Stack Coverage</div>
<div className="font-sans text-sm text-white mb-2">Baseline architecture shows gaps in localized KYB controls.</div>
<div className="w-full bg-[#333] h-1 mt-4">
<div className="bg-[#FF3300] h-full w-[68%]"></div>
</div>
<div className="font-mono text-[10px] text-[#5A5A5C] mt-2 flex justify-between uppercase">
<span>Score</span>
<span className="text-white">68% ALIGNED</span>
</div>
</div>
<div className="border border-[#333] p-4 bg-[#111]/50 backdrop-blur-sm flex flex-col justify-center">
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest mb-3">Identified Gaps</div>
<ul className="space-y-2 font-mono text-xs text-white">
<li className="flex justify-between border-b border-[#333] pb-1">
<span>Consent Infra</span>
<span className="text-[#FF3300]">REVIEW</span>
</li>
<li className="flex justify-between border-b border-[#333] pb-1">
<span>Reputation Signals</span>
<span className="text-[#FF3300]">MISSING</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 relative overflow-hidden bg-white border-b border-[#0A0A0A]/10">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 relative z-10">
<div className="font-mono text-xs text-[#0A0A0A] border border-[#0A0A0A] inline-block px-3 py-1 mb-8 uppercase tracking-widest bg-white">
                        Built For Leverage
                    </div>
<h2 className="font-display text-5xl lg:text-6xl font-medium tracking-tight uppercase mb-6 leading-[0.85] text-[#0A0A0A]">
                        Where this asset <br/> creates leverage.
                    </h2>
<p className="text-[#5A5A5C] text-sm mb-8 max-w-[40ch] leading-relaxed">
                        TRST creates optionality without confusion, structured clearly for operators evaluating systems, vendors seeking visibility, and strategic partners analyzing category motion.
                    </p>
<a className="inline-flex items-center gap-2 font-mono text-xs text-[#0A0A0A] font-medium uppercase tracking-widest hover:text-[#FF3300] transition-colors group" href="#strategic-fit">
<span className="border-b border-[#0A0A0A] group-hover:border-[#FF3300] pb-1">Discuss Strategic Alignment</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="lg:col-span-7 relative w-full h-auto">
<div className="border border-[#0A0A0A]/10 bg-[#F8F8F7] p-6 lg:p-10 card-angular shadow-sm grid grid-cols-1 sm:grid-cols-2 gap-6 relative group">
<div className="absolute top-0 right-0 w-12 h-12 bg-white -mr-6 -mt-6 rotate-45 border-b border-[#0A0A0A]/10 group-hover:bg-[#FF3300] transition-colors duration-500"></div>
<div className="border border-[#0A0A0A]/10 bg-white p-6">
<h4 className="font-display text-lg font-medium text-[#0A0A0A] mb-2 uppercase">Operators</h4>
<p className="font-sans text-xs text-[#5A5A5C] leading-relaxed">Use structured research, category pages, and the grader to compare options and identify architecture gaps.</p>
</div>
<div className="border border-[#0A0A0A]/10 bg-white p-6">
<h4 className="font-display text-lg font-medium text-[#0A0A0A] mb-2 uppercase">Vendors</h4>
<p className="font-sans text-xs text-[#5A5A5C] leading-relaxed">Participate in benchmark coverage, contribute methodology input, or support category intelligence initiatives.</p>
</div>
<div className="border border-[#0A0A0A]/10 bg-white p-6">
<h4 className="font-display text-lg font-medium text-[#0A0A0A] mb-2 uppercase">Researchers</h4>
<p className="font-sans text-xs text-[#5A5A5C] leading-relaxed">Leverage taxonomy, benchmark framing, and structured market coverage as a category reference point.</p>
</div>
<div className="border border-[#0A0A0A]/10 bg-[#0A0A0A] p-6 text-white">
<h4 className="font-display text-lg font-medium mb-2 uppercase">Strategic Acquirers</h4>
<p className="font-sans text-xs text-[#5A5A5C] leading-relaxed">Explore TRST as an emerging authority asset with long-term relevance to identity and security.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#F8F8F7] border-b border-[#0A0A0A]/10" id="structure">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-4">Architecture</div>
<h2 className="font-display text-3xl font-medium tracking-tight uppercase text-[#0A0A0A]">A structured knowledge base, not a content farm</h2>
<p className="text-[#5A5A5C] text-sm mt-4 max-w-2xl mx-auto">Built around repeatable, high-value page systems that help operators navigate the trust infrastructure market.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="border border-[#0A0A0A]/10 p-8 bg-white hover:shadow-[4px_4px_0px_#0A0A0A] transition-all duration-300">
<iconify-icon className="text-3xl text-[#0A0A0A]/20 mb-6" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="font-mono text-xs font-medium text-[#0A0A0A] uppercase tracking-widest mb-3 border-b border-[#0A0A0A]/10 pb-2">Vendor Pages</h4>
<p className="text-[#5A5A5C] text-sm leading-relaxed">
                        Identity verification, KYB, fraud, authentication, consent, trust &amp; safety, and reputation providers.
                    </p>
</div>
<div className="border border-[#0A0A0A]/10 p-8 bg-white hover:shadow-[4px_4px_0px_#0A0A0A] transition-all duration-300">
<iconify-icon className="text-3xl text-[#0A0A0A]/20 mb-6" icon="solar:scale-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="font-mono text-xs font-medium text-[#0A0A0A] uppercase tracking-widest mb-3 border-b border-[#0A0A0A]/10 pb-2">Comparison Pages</h4>
<p className="text-[#5A5A5C] text-sm leading-relaxed">
                        Side-by-side evaluation paths for specific categories, use cases, and operational tradeoffs.
                    </p>
</div>
<div className="border border-[#0A0A0A]/10 p-8 bg-white hover:shadow-[4px_4px_0px_#0A0A0A] transition-all duration-300">
<iconify-icon className="text-3xl text-[#0A0A0A]/20 mb-6" icon="solar:layers-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="font-mono text-xs font-medium text-[#0A0A0A] uppercase tracking-widest mb-3 border-b border-[#0A0A0A]/10 pb-2">Use-case Frameworks</h4>
<p className="text-[#5A5A5C] text-sm leading-relaxed">
                        Guides by industry and risk environment, including fintech, healthcare, crypto, and B2B SaaS.
                    </p>
</div>
<div className="border border-[#0A0A0A]/10 p-8 bg-white hover:shadow-[4px_4px_0px_#0A0A0A] transition-all duration-300">
<iconify-icon className="text-3xl text-[#0A0A0A]/20 mb-6" icon="solar:clipboard-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h4 className="font-mono text-xs font-medium text-[#0A0A0A] uppercase tracking-widest mb-3 border-b border-[#0A0A0A]/10 pb-2">Benchmark Results</h4>
<p className="text-[#5A5A5C] text-sm leading-relaxed">
                        Criteria-led evaluations linked to methodology, related categories, and grader logic.
                    </p>
</div>
</div>
<div className="mt-10 flex justify-center gap-6 font-mono text-xs text-[#5A5A5C] uppercase tracking-widest">
<a className="hover:text-[#0A0A0A] transition-colors flex items-center gap-1" href="#"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> See category structure</a>
<a className="hover:text-[#0A0A0A] transition-colors flex items-center gap-1" href="#"><iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon> View benchmark model</a>
</div>
</div>
</section>
<section className="py-24 bg-white border-t border-[#0A0A0A]/10" id="insights">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tight uppercase text-[#0A0A0A]">Research for Operators</h2>
</div>
<a className="font-mono text-xs text-[#0A0A0A] uppercase tracking-widest pb-1 border-b border-[#0A0A0A] hover:text-[#FF3300] hover:border-[#FF3300] transition-colors" href="#">
                    View All Insights
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#0A0A0A]/10">
<a className="block p-8 border-b md:border-b-0 md:border-r border-[#0A0A0A]/10 hover:bg-[#F8F8F7] transition-colors group" href="#">
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest mb-4">Methodology Note</div>
<h3 className="font-sans text-lg font-medium text-[#0A0A0A] leading-snug mb-6 group-hover:text-[#FF3300] transition-colors">How to evaluate identity verification vendors beyond onboarding accuracy</h3>
<div className="flex items-center gap-2 mt-auto font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest">
<span className="w-4 h-px bg-[#FF3300]"></span> By TRST Research
                    </div>
</a>
<a className="block p-8 border-b md:border-b-0 md:border-r border-[#0A0A0A]/10 hover:bg-[#F8F8F7] transition-colors group" href="#">
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest mb-4">Category Primer</div>
<h3 className="font-sans text-lg font-medium text-[#0A0A0A] leading-snug mb-6 group-hover:text-[#FF3300] transition-colors">KYB, fraud, and trust signals: where stack overlap creates buyer confusion</h3>
<div className="flex items-center gap-2 mt-auto font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest">
<span className="w-4 h-px bg-[#FF3300]"></span> By TRST Research
                    </div>
</a>
<a className="block p-8 hover:bg-[#F8F8F7] transition-colors group" href="#">
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest mb-4">Frameworks</div>
<h3 className="font-sans text-lg font-medium text-[#0A0A0A] leading-snug mb-6 group-hover:text-[#FF3300] transition-colors">Designing a trust infrastructure benchmark that operators can actually use</h3>
<div className="flex items-center gap-2 mt-auto font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest">
<span className="w-4 h-px bg-[#FF3300]"></span> By TRST Research
                    </div>
</a>
</div>
</div>
</section>
<section className="py-32 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-[#1A1A1A]" id="strategic-fit">
<div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(255,51,0,0.15)_0%,_transparent_60%)] pointer-events-none z-0"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-3 font-mono text-xs text-[#5A5A5C] mb-8 uppercase tracking-widest border border-[#333] px-4 py-2 bg-[#111]">
<span className="w-2 h-2 bg-[#FF3300] animate-pulse"></span>
                Inquiry Active
            </div>
<h2 className="font-display text-5xl lg:text-6xl font-medium tracking-tight uppercase mb-6 leading-[0.9]">
                Open to strategic <br/>
<span className="text-[#FF3300]">Collaboration.</span>
</h2>
<p className="text-[#5A5A5C] text-sm md:text-base mb-12 leading-relaxed max-w-[50ch] mx-auto">
                If you operate in identity, verification, fraud, compliance, or trust infrastructure and see alignment with the benchmark, market map, or long-term operating potential, we’re open to a strategic conversation.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="bg-white text-[#0A0A0A] px-10 py-5 text-sm font-medium uppercase tracking-widest hover:bg-[#FF3300] hover:text-white transition-all duration-300 btn-angular flex items-center gap-3 border border-white hover:border-[#FF3300]">
                    Discuss Strategic Fit
                    <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<a className="font-mono text-xs text-[#5A5A5C] hover:text-white uppercase tracking-widest transition-colors border-b border-transparent hover:border-white pb-1" href="#benchmark">
                    Review the benchmark direction
                </a>
</div>
<p className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest mt-10 max-w-xl mx-auto border-t border-[#333] pt-6">
                Partnerships, benchmark collaboration, and operator conversations are the best starting point. Acquisition interest can be discussed where there is strong alignment.
            </p>
</div>
</section>
<footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] py-12 px-6 relative z-10">
<div className="max-w-[90rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex flex-col items-center md:items-start gap-2">
<div className="flex items-center gap-4">
<svg className="text-white" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="18" stroke="currentColor" strokeWidth="2" width="18" x="3" y="3"></rect>
<path d="M3 9H21" stroke="currentColor" strokeWidth="2"></path>
<path d="M9 21V9" stroke="currentColor" strokeWidth="2"></path>
</svg>
<div className="text-xl font-display font-medium tracking-tight text-white uppercase leading-none mt-1">TRST</div>
</div>
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest">Intelligence for digital trust infrastructure.</div>
</div>
<div className="font-mono text-xs text-[#5A5A5C] flex flex-wrap justify-center gap-6 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Market Map</a>
<a className="hover:text-white transition-colors" href="#">Benchmark</a>
<a className="hover:text-white transition-colors" href="#">Grader</a>
<a className="hover:text-white transition-colors" href="#">Insights</a>
<a className="hover:text-white transition-colors" href="#">Methodology</a>
<a className="hover:text-[#FF3300] transition-colors" href="#">Strategic Fit</a>
</div>
<div className="font-mono text-[10px] text-[#5A5A5C] flex items-center gap-2 uppercase tracking-widest">
                © TRST.COM
            </div>
</div>
</footer>


    </>
  );
}
