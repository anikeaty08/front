import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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
        const spacing = 40; // Grid spacing
        
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
                    // Only add particles randomly to create a sparse, techy feel
                    if(Math.random() > 0.6) {
                        particles.push({
                            x: i * spacing + (spacing/2),
                            y: j * spacing + (spacing/2),
                            baseAlpha: Math.random() * 0.3 + 0.1,
                            alpha: 0,
                            targetAlpha: Math.random() * 0.3 + 0.1,
                            flashSpeed: Math.random() * 0.02 + 0.005,
                            size: Math.random() > 0.9 ? 2 : 1,
                            isNode: Math.random() > 0.95 // Highlight some nodes
                        });
                    }
                }
            }
        }

        function draw() {
            ctx.clearRect(0, 0, width, height);
            
            // Draw connecting lines based on proximity (simulating data mesh)
            ctx.lineWidth = 0.5;
            for(let i = 0; i < particles.length; i++) {
                let p1 = particles[i];
                
                // Update Alpha (Flicker logic)
                p1.alpha += (p1.targetAlpha - p1.alpha) * 0.1;
                if(Math.abs(p1.alpha - p1.targetAlpha) < 0.01) {
                    p1.targetAlpha = Math.random() > 0.9 ? 0.8 : p1.baseAlpha; // Occasional bright flash
                }

                // Draw Particle
                ctx.fillStyle = p1.isNode ? `rgba(255, 51, 0, ${p1.alpha * 2})` : `rgba(10, 10, 10, ${p1.alpha})`;
                ctx.beginPath();
                ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
                ctx.fill();

                // Connect to nearby nodes
                for(let j = i + 1; j < particles.length; j++) {
                    let p2 = particles[j];
                    let dx = p1.x - p2.x;
                    let dy = p1.y - p2.y;
                    let dist = Math.sqrt(dx*dx + dy*dy);
                    
                    if(dist < spacing * 1.5) {
                        ctx.strokeStyle = `rgba(10, 10, 10, ${Math.min(p1.alpha, p2.alpha) * 0.2})`;
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
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
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
<path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" stroke="currentColor" strokeLinejoin="miter" strokeWidth="2"></path>
<path d="M12 22V12" stroke="currentColor" strokeWidth="2"></path>
<path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2"></path>
</svg>
<span className="text-xl font-display font-semibold tracking-tighter uppercase leading-none mt-1">IOTY</span>
</a>
<div className="hidden lg:flex space-x-10 text-xs text-[#5A5A5C] font-mono tracking-widest uppercase">
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#architecture">Discovery</a>
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#platform">Deal Flow</a>
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#dossiers">Validation</a>
</div>
<a className="btn-angular relative group overflow-hidden bg-[#0A0A0A] text-white text-xs font-mono px-6 py-2.5 uppercase tracking-widest flex items-center gap-2 border border-[#0A0A0A]" href="#terminal">
<span className="relative z-10 group-hover:text-[#0A0A0A] transition-colors duration-300 flex items-center gap-2">
                    Investor Portal <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
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
                        DEAL FLOW ACTIVE
                    </span>
<div className="h-3 w-px bg-[#0A0A0A]/20"></div>
<span>Global Nodes: 420+</span>
<div className="h-3 w-px bg-[#0A0A0A]/20"></div>
<span>Vetting: Live</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-semibold tracking-tighter leading-[0.85] mb-8 uppercase text-[#0A0A0A]">
                    Discover The <br/>
<span className="text-transparent text-stroke-dark" style={{WebkitTextStroke: '1px #0A0A0A', color: 'transparent'}}>Next Node.</span> <br/>
                    Fund The <br/>
                    Future.
                </h1>
<p className="text-[#0A0A0A] font-medium text-base md:text-xl max-w-[45ch] leading-relaxed mb-10 border-l-2 border-[#FF3300] pl-6 py-1">
                    The premier global matchmaking engine for IoT hardware, edge computing, and smart infrastructure. We connect elite venture capital directly with vetted, emerging hardware startups.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="btn-angular relative group overflow-hidden bg-[#FF3300] text-white px-8 py-5 flex items-center gap-4" href="#terminal">
<span className="relative z-10 font-mono text-xs uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                            Scout Startups
                        </span>
<iconify-icon className="relative z-10 text-xl group-hover:translate-x-2 transition-transform duration-300" icon="solar:round-arrow-right-linear"></iconify-icon>
<div className="hover-layer absolute inset-0 bg-[#0A0A0A] translate-y-[101%] z-0"></div>
</a>
<a className="text-sm font-mono uppercase tracking-widest text-[#5A5A5C] hover:text-[#0A0A0A] transition-colors flex items-center gap-2" href="#terminal">
<span className="border-b border-transparent hover:border-[#0A0A0A]">Submit Innovation</span>
</a>
</div>
</div>

<div className="lg:col-span-4 hidden lg:flex flex-col justify-end pb-8">
<div className="bg-white border border-[#0A0A0A]/10 p-6 card-angular shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-[#F8F8F7] -mr-8 -mt-8 rotate-45 border-b border-[#0A0A0A]/10 group-hover:bg-[#FF3300] transition-colors duration-500"></div>
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-4 flex justify-between border-b border-[#0A0A0A]/10 pb-2">
<span>Platform Telemetry</span>
<span>[ LIVE ]</span>
</div>
<ul className="space-y-3 font-mono text-xs text-[#0A0A0A]">
<li className="flex justify-between items-center"><span className="text-[#5A5A5C]">VETTED STARTUPS</span> <span>428 ACTIVE</span></li>
<li className="flex justify-between items-center"><span className="text-[#5A5A5C]">INSTITUTIONAL LPs</span> <span>1.2K+ NETWORK</span></li>
<li className="flex justify-between items-center"><span className="text-[#5A5A5C]">CAPITAL DEPLOYED</span> <span className="text-[#FF3300]">$4.2B+ TTM</span></li>
</ul>
</div>
</div>
</div>
</header>

<div className="border-b border-[#0A0A0A]/10 py-2.5 bg-[#0A0A0A] text-white overflow-hidden relative z-20">
<div className="marquee-container">
<div className="marquee-content font-mono text-xs tracking-widest uppercase gap-12" data-marquee="EDGE AI: SERIES A RAISED • SMART GRID: VETTING COMPLETE • INDUSTRIAL IOT: SEED SECURED • TELEMATICS: DUE DILIGENCE • SENSOR MESH: NEW SUBMISSION • ROBOTICS: FOUNDER VERIFIED • ">
<span className="flex items-center gap-3">EDGE AI: <span className="text-[#FF3300]">SERIES A RAISED</span></span>
<span className="flex items-center gap-3">SMART GRID: <span className="text-[#5A5A5C]">VETTING COMPLETE</span></span>
<span className="flex items-center gap-3">INDUSTRIAL IOT: <span className="text-[#FF3300]">SEED SECURED</span></span>
<span className="flex items-center gap-3">TELEMATICS: <span className="text-white">DUE DILIGENCE</span></span>
<span className="flex items-center gap-3">SENSOR MESH: <span className="text-[#5A5A5C]">NEW SUBMISSION</span></span>
<span className="flex items-center gap-3">ROBOTICS: <span className="text-[#FF3300]">FOUNDER VERIFIED</span></span>
<span className="flex items-center gap-3">WEARABLES: <span className="text-white">SYNDICATE FORMING</span></span>
</div>
</div>
</div>

<section className="py-24 px-6 lg:px-12 max-w-[90rem] mx-auto border-b border-[#0A0A0A]/10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div>
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-6 flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:danger-triangle-linear"></iconify-icon> The Sourcing Problem
                </div>
<h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tighter uppercase mb-6 leading-[0.9] text-[#0A0A0A]">
                    Standard Deal Flow is <br/><span className="text-[#5A5A5C]">Signal Noise.</span>
</h2>
<p className="text-[#5A5A5C] text-sm leading-relaxed max-w-[45ch]">
                    Generic startup databases are bloated with unverified claims, vanity metrics, and software-only plays. Finding legitimate hardware innovation and vetted IoT telemetry requires deep technical scouting that steals weeks from your investment cycle.
                </p>
</div>
<div className="bg-white border border-[#0A0A0A]/10 p-8 lg:p-12 relative">
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="relative z-10">
<div className="font-mono text-xs text-[#FF3300] uppercase tracking-widest mb-6 flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon> The IOTY Advantage
                    </div>
<h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tighter uppercase mb-6 leading-[0.9] text-[#0A0A0A]">
                        Curated <br/> Intelligence.
                    </h2>
<ul className="space-y-4 font-mono text-xs text-[#0A0A0A] uppercase tracking-wide">
<li className="flex items-center gap-4 border-b border-[#0A0A0A]/5 pb-3">
<span className="w-1.5 h-1.5 bg-[#FF3300]"></span> Verifiable Founder Backgrounds
                        </li>
<li className="flex items-center gap-4 border-b border-[#0A0A0A]/5 pb-3">
<span className="w-1.5 h-1.5 bg-[#FF3300]"></span> Technical Due Diligence Pre-screening
                        </li>
<li className="flex items-center gap-4">
<span className="w-1.5 h-1.5 bg-[#FF3300]"></span> Direct Investor Matchmaking
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 max-w-[90rem] mx-auto relative z-10" id="architecture">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<h2 className="font-display text-5xl lg:text-6xl font-semibold tracking-tighter uppercase max-w-2xl leading-[0.9]">
                Intelligence Engine.
            </h2>
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest pb-2 border-b-2 border-[#0A0A0A] flex items-center gap-2">
                Core Capabilities <span className="text-[#FF3300]">[03]</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 lg:p-10 border border-[#0A0A0A]/10 card-angular group hover:border-[#FF3300]/50 transition-colors relative overflow-hidden">
<div className="text-[#0A0A0A] mb-12 h-12 w-12 border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#FF3300] group-hover:text-white group-hover:border-[#FF3300] transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-semibold tracking-tight mb-4 uppercase text-[#0A0A0A]">Global Discovery</h3>
<p className="text-[#5A5A5C] text-sm leading-relaxed mb-12">
                    We source the unseen. Our scouts index university labs, international accelerators, and stealth-mode incubators to identify breakthrough IoT innovations before they hit standard deal flow.
                </p>
<div className="font-mono text-xs border-t border-[#0A0A0A]/10 pt-6 flex justify-between text-[#0A0A0A] items-center">
<span className="text-[#5A5A5C]">SCOUTING_NET</span>
<iconify-icon className="text-xl group-hover:text-[#FF3300] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>

<div className="absolute inset-x-0 h-px bg-[#FF3300]/20 -top-px group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
</div>

<div className="bg-white p-8 lg:p-10 border border-[#0A0A0A]/10 card-angular group hover:border-[#FF3300]/50 transition-colors relative overflow-hidden">
<div className="text-[#0A0A0A] mb-12 h-12 w-12 border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#FF3300] group-hover:text-white group-hover:border-[#FF3300] transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:shield-keyhole-minimalistic-linear"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-semibold tracking-tight mb-4 uppercase text-[#0A0A0A]">Technical Vetting</h3>
<p className="text-[#5A5A5C] text-sm leading-relaxed mb-12">
                    Transparent selection criteria with community-driven validation. Every featured startup undergoes verifiable background checks, ensuring the technology IP and team capabilities align with their claims.
                </p>
<div className="font-mono text-xs border-t border-[#0A0A0A]/10 pt-6 flex justify-between text-[#0A0A0A] items-center">
<span className="text-[#5A5A5C]">DILIGENCE_OPS</span>
<iconify-icon className="text-xl group-hover:text-[#FF3300] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="bg-white p-8 lg:p-10 border border-[#0A0A0A]/10 card-angular group hover:border-[#FF3300]/50 transition-colors relative overflow-hidden">
<div className="text-[#0A0A0A] mb-12 h-12 w-12 border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#FF3300] group-hover:text-white group-hover:border-[#FF3300] transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:satellite-linear"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-semibold tracking-tight mb-4 uppercase text-[#0A0A0A]">Direct Matchmaking</h3>
<p className="text-[#5A5A5C] text-sm leading-relaxed mb-12">
                    A frictionless two-sided market. We align corporate innovation mandates and VC investment thesis parameters with high-signal IoT startups, facilitating immediate, actionable warm introductions.
                </p>
<div className="font-mono text-xs border-t border-[#0A0A0A]/10 pt-6 flex justify-between text-[#0A0A0A] items-center">
<span className="text-[#5A5A5C]">LEAD_GEN</span>
<iconify-icon className="text-xl group-hover:text-[#FF3300] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
<style>@keyframes scan { 0% { top: 0; } 50% { top: 100%; } 100% { top: 0; } }</style>
</section>

<section className="py-24 bg-[#0A0A0A] text-white border-y border-[#1A1A1A] relative overflow-hidden" id="platform">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(255,51,0,0.05)_0%,_transparent_50%)]"></div>
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="text-center mb-16 relative z-10">
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-4">Investor Intelligence</div>
<h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tighter uppercase text-white">Deal Flow Terminal.</h2>
</div>

<div className="relative max-w-5xl mx-auto rounded-none border border-[#333] bg-[#0A0A0A] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">

<div className="h-10 border-b border-[#333] flex items-center px-4 justify-between bg-[#111]">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
</div>
<div className="font-mono text-[10px] text-[#5A5A5C] tracking-widest">IOTY_OS // v.2.1</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 h-auto md:h-[400px]">

<div className="md:col-span-3 border-r border-[#333] p-4 bg-[#0A0A0A] font-mono text-xs text-[#5A5A5C] flex flex-col gap-6">
<div>
<div className="uppercase tracking-widest text-white mb-3">Active Deal Rooms</div>
<ul className="space-y-2">
<li className="text-[#FF3300] bg-[#FF3300]/10 px-2 py-1 border-l-2 border-[#FF3300]">INDUSTRIAL_IOT_SEED</li>
<li className="px-2 py-1 hover:text-white cursor-pointer">SMART_GRID_SERIES_A</li>
<li className="px-2 py-1 hover:text-white cursor-pointer">EDGE_AI_PRE_SEED</li>
</ul>
</div>
<div className="mt-auto border-t border-[#333] pt-4">
<div className="uppercase tracking-widest mb-2">Network Match</div>
<div className="flex justify-between items-end">
<span>Thesis Alignment</span>
<span className="text-white text-sm">94.8%</span>
</div>
</div>
</div>

<div className="md:col-span-9 p-6 bg-[linear-gradient(180deg,#111_0%,#0A0A0A_100%)] relative">
<div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
<div className="flex justify-between items-start mb-8 border-b border-[#333] pb-4 relative z-10">
<div>
<h3 className="font-display text-2xl font-semibold tracking-tight text-white mb-1">AeroMesh Sensors GmbH</h3>
<div className="font-mono text-xs text-[#FF3300]">FOUNDERS VERIFIED • PRE-SEED</div>
</div>
<button className="font-mono text-xs bg-white text-[#0A0A0A] px-4 py-2 uppercase tracking-widest hover:bg-[#FF3300] hover:text-white transition-colors">
                                View Full Pitch
                            </button>
</div>
<div className="grid grid-cols-2 gap-4 relative z-10">
<div className="border border-[#333] p-4 bg-[#111]/50 backdrop-blur-sm">
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest mb-2">Technology Profile</div>
<div className="font-sans text-sm text-white mb-2">Distributed Edge AI for Manufacturing environments. Ultra-low latency mesh networking protocol.</div>
<div className="w-full bg-[#333] h-1 mt-4">
<div className="bg-[#FF3300] h-full w-[85%]"></div>
</div>
<div className="font-mono text-[10px] text-[#5A5A5C] mt-1 text-right">DUE DILIGENCE: 85% COMPLETE</div>
</div>
<div className="border border-[#333] p-4 bg-[#111]/50 backdrop-blur-sm flex flex-col justify-center">
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest mb-2">Growth Telemetry</div>

<svg height="40" preserveaspectratio="none" viewbox="0 0 200 60" width="100%">
<path d="M0,60 L0,40 Q25,30 50,45 T100,20 T150,35 T200,10 L200,60 Z" fill="rgba(255,51,0,0.1)"></path>
<path d="M0,40 Q25,30 50,45 T100,20 T150,35 T200,10" fill="none" stroke="#FF3300" strokeWidth="2"></path>
</svg>
<div className="flex justify-between mt-2 font-mono text-[10px] text-white">
<span>ARR: $120K</span>
<span>MOM: +15%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden bg-white">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5 relative z-10">
<div className="font-mono text-xs text-[#0A0A0A] border border-[#0A0A0A] inline-block px-3 py-1 mb-8 uppercase tracking-widest bg-white">
                        Technical Intelligence
                    </div>
<h2 className="font-display text-5xl lg:text-6xl font-semibold tracking-tighter uppercase mb-6 leading-[0.85] text-[#0A0A0A]">
                        Evaluate <br/> The Unseen.
                    </h2>
<p className="text-[#5A5A5C] text-sm mb-8 max-w-[40ch] leading-relaxed">
                        We strip away marketing fluff. What remains is raw, unfettered access to deep-dive profiles, contextual technology data, and hardware specifications previously obscured by the market.
                    </p>
<a className="inline-flex items-center gap-2 font-mono text-xs text-[#0A0A0A] font-semibold uppercase tracking-widest hover:text-[#FF3300] transition-colors group" href="#terminal">
<span className="border-b border-[#0A0A0A] group-hover:border-[#FF3300] pb-1">View Startups</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="lg:col-span-7 relative h-[600px] w-full">

<div className="absolute inset-y-4 right-0 w-[120%] border border-[#0A0A0A]/10 bg-[#F8F8F7] p-4 lg:p-6 card-angular shadow-lg">
<div className="relative w-full h-full overflow-hidden group">

<img alt="Hardware circuitry and IoT hardware details" className="w-full h-full object-cover filter grayscale-[30%] contrast-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1600&amp;q=80"/>

<div className="absolute top-4 left-4 bg-white/90 backdrop-blur font-mono text-[10px] text-[#0A0A0A] px-2 py-1 uppercase tracking-widest border border-[#0A0A0A]/10">
                                SECTOR: INDUSTRIAL_IOT
                            </div>
<iconify-icon className="absolute inset-0 m-auto text-4xl text-white/50 group-hover:text-white/0 transition-all duration-700" icon="solar:focus-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F8F7] border-t border-[#0A0A0A]/10" id="dossiers">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="text-center mb-16">
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-4">Network Validation</div>
<h2 className="font-display text-3xl font-semibold tracking-tighter uppercase text-[#0A0A0A]">After-Action Reports</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="border border-[#0A0A0A]/10 p-8 bg-white hover:shadow-[4px_4px_0px_#0A0A0A] transition-all duration-300">
<iconify-icon className="text-3xl text-[#0A0A0A]/20 mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-[#0A0A0A] text-sm leading-relaxed mb-8 font-medium">
                        "IOTY systematically eliminated every logistical hurdle in our hardware deal sourcing. The technical vetting and founder background checks saved us over 40 hours per investment cycle."
                    </p>
<div className="flex items-center gap-4 border-t border-[#0A0A0A]/10 pt-4">
<div className="w-8 h-8 bg-[#0A0A0A] text-white flex items-center justify-center font-mono text-xs">M.</div>
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest">Venture Partner <br/> <span className="text-[#0A0A0A]">Hardware Fund, Berlin</span></div>
</div>
</div>

<div className="border border-[#0A0A0A]/10 p-8 bg-white hover:shadow-[4px_4px_0px_#0A0A0A] transition-all duration-300">
<iconify-icon className="text-3xl text-[#0A0A0A]/20 mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-[#0A0A0A] text-sm leading-relaxed mb-8 font-medium">
                        "The visibility our startup gained was immediate and highly targeted. Within weeks of our profile passing their validation node, we secured a lead investor for our seed round."
                    </p>
<div className="flex items-center gap-4 border-t border-[#0A0A0A]/10 pt-4">
<div className="w-8 h-8 bg-[#0A0A0A] text-white flex items-center justify-center font-mono text-xs">A.</div>
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest">IoT Founder <br/> <span className="text-[#0A0A0A]">San Francisco</span></div>
</div>
</div>

<div className="border border-[#0A0A0A]/10 p-8 bg-white hover:shadow-[4px_4px_0px_#0A0A0A] transition-all duration-300 md:col-span-2 lg:col-span-1">
<iconify-icon className="text-3xl text-[#0A0A0A]/20 mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-[#0A0A0A] text-sm leading-relaxed mb-8 font-medium">
                        "Not a simple startup directory. This is a tactical upgrade to corporate innovation scouting. Flawless signal-to-noise ratio. Direct matchmaking works."
                    </p>
<div className="flex items-center gap-4 border-t border-[#0A0A0A]/10 pt-4">
<div className="w-8 h-8 bg-[#0A0A0A] text-white flex items-center justify-center font-mono text-xs">J.</div>
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest">Innovation Scout <br/> <span className="text-[#0A0A0A]">Tokyo Corp</span></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#0A0A0A] text-white relative overflow-hidden border-t border-[#1A1A1A]" id="terminal">

<div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(255,51,0,0.15)_0%,_transparent_60%)] pointer-events-none z-0"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-3 font-mono text-xs text-[#5A5A5C] mb-8 uppercase tracking-widest border border-[#333] px-4 py-2 bg-[#111]">
<span className="w-2 h-2 bg-[#FF3300] animate-pulse"></span>
                Platform Access Open
            </div>
<h2 className="font-display text-5xl lg:text-7xl font-semibold tracking-tighter uppercase mb-6 leading-[0.9]">
                Discover. Evaluate. <br/>
<span className="text-[#FF3300]">Fund.</span>
</h2>
<p className="text-[#5A5A5C] text-sm md:text-base mb-12 leading-relaxed max-w-[50ch] mx-auto">
                Membership is restricted to accredited investors, venture partners, and vetted founders. Submit your credentials to initiate the matchmaking protocol. 
            </p>
<form className="max-w-lg mx-auto flex flex-col items-center">
<div className="w-full relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF3300] to-[#0A0A0A] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
<div className="relative flex flex-col sm:flex-row w-full bg-[#111] border border-[#333]">
<input className="bg-transparent px-6 py-5 text-sm font-mono focus:outline-none w-full text-white placeholder:text-[#5A5A5C] uppercase transition-all rounded-none" placeholder="ENTER WORK EMAIL" required="" type="email"/>
<button className="bg-white text-[#0A0A0A] px-8 py-5 text-sm font-semibold uppercase tracking-widest hover:bg-[#FF3300] hover:text-white transition-all duration-300 sm:w-auto whitespace-nowrap rounded-none flex items-center justify-center gap-2 btn-angular border-l border-[#333] sm:border-l-0" type="submit">
                            Apply For Access
                            <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
<label className="flex items-start gap-3 mt-8 cursor-pointer group w-full justify-center">
<div className="relative w-4 h-4 border border-[#333] bg-[#111] group-hover:border-[#FF3300] transition-colors flex items-center justify-center mt-0.5">
<input className="peer appearance-none absolute inset-0 cursor-pointer" required="" type="checkbox"/>
<iconify-icon className="text-[#FF3300] opacity-0 peer-checked:opacity-100 transition-opacity text-xs absolute" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="font-mono text-[10px] text-[#5A5A5C] text-left uppercase tracking-widest max-w-[35ch]">I verify my status as an accredited investor, innovation scout, or IoT startup founder.</span>
</label>
</form>
<div className="mt-8">
<a className="font-mono text-[10px] text-[#FF3300] uppercase tracking-widest hover:text-white transition-colors border-b border-[#FF3300]/30 hover:border-white pb-1" href="#">
                    Or submit a startup profile for vetting
                </a>
</div>
</div>
</section>

<footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] py-12 px-6 relative z-10">
<div className="max-w-[90rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-4">
<svg className="text-white" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L22 7V17L12 22L2 17V7L12 2Z" stroke="currentColor" strokeLinejoin="miter" strokeWidth="2"></path>
<path d="M12 22V12" stroke="currentColor" strokeWidth="2"></path>
<path d="M2 7L12 12L22 7" stroke="currentColor" strokeWidth="2"></path>
</svg>
<div className="text-xl font-display font-semibold tracking-tighter text-white uppercase leading-none mt-1">IOTY</div>
</div>
<div className="font-mono text-[10px] text-[#5A5A5C] flex flex-wrap justify-center gap-8 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Startups</a>
<a className="hover:text-white transition-colors" href="#">Investors</a>
<a className="hover:text-white transition-colors" href="#">Due Diligence Standards</a>
<a className="hover:text-white transition-colors" href="#">Platform Status</a>
</div>
<div className="font-mono text-[10px] text-[#5A5A5C] flex items-center gap-2 uppercase tracking-widest">
                ©2024 IOTY SYSTEM ACTIVE
            </div>
</div>
</footer>



    </>
  );
}
