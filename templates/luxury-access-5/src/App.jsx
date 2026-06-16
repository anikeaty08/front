import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
<path d="M2 12L12 2L22 12L12 22L2 12Z" stroke="currentColor" strokeLinejoin="miter" strokeWidth="2"></path>
<path d="M7 12H17" stroke="currentColor" strokeWidth="2"></path>
</svg>
<span className="text-xl font-display font-semibold tracking-tighter uppercase leading-none mt-1">OATH</span>
</a>
<div className="hidden lg:flex space-x-10 text-xs text-[#5A5A5C] font-mono tracking-widest uppercase">
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#architecture">System</a>
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#platform">Platform</a>
<a className="hover:text-[#0A0A0A] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-[#FF3300] hover:after:w-full after:transition-all" href="#dossiers">Proof</a>
</div>
<a className="btn-angular relative group overflow-hidden bg-[#0A0A0A] text-white text-xs font-mono px-6 py-2.5 uppercase tracking-widest flex items-center gap-2 border border-[#0A0A0A]" href="#terminal">
<span className="relative z-10 group-hover:text-[#0A0A0A] transition-colors duration-300 flex items-center gap-2">
                    Request Entry <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
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
                        NETWORK LIVE
                    </span>
<div className="h-3 w-px bg-[#0A0A0A]/20"></div>
<span>Latency: 8ms</span>
<div className="h-3 w-px bg-[#0A0A0A]/20"></div>
<span>Global Nodes: Active</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-[6.5rem] font-semibold tracking-tighter leading-[0.85] mb-8 uppercase text-[#0A0A0A]">
                    Eliminate <br/>
<span className="text-transparent text-stroke-dark" style={{WebkitTextStroke: '1px #0A0A0A', color: 'transparent'}}>Friction.</span> <br/>
                    Acquire <br/>
                    Leverage.
                </h1>
<p className="text-[#0A0A0A] font-medium text-base md:text-xl max-w-[45ch] leading-relaxed mb-10 border-l-2 border-[#FF3300] pl-6 py-1">
                    Time is the only asset you cannot scale. We engineer absolute priority access to the global 0.1% infrastructure. Bypass waiting. Maximize utility.
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="btn-angular relative group overflow-hidden bg-[#FF3300] text-white px-8 py-5 flex items-center gap-4" href="#terminal">
<span className="relative z-10 font-mono text-xs uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                            Initialize Protocol
                        </span>
<iconify-icon className="relative z-10 text-xl group-hover:translate-x-2 transition-transform duration-300" icon="solar:round-arrow-right-linear"></iconify-icon>
<div className="hover-layer absolute inset-0 bg-[#0A0A0A] translate-y-[101%] z-0"></div>
</a>
</div>
</div>

<div className="lg:col-span-4 hidden lg:flex flex-col justify-end pb-8">
<div className="bg-white border border-[#0A0A0A]/10 p-6 card-angular shadow-sm relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-[#F8F8F7] -mr-8 -mt-8 rotate-45 border-b border-[#0A0A0A]/10 group-hover:bg-[#FF3300] transition-colors duration-500"></div>
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-4 flex justify-between border-b border-[#0A0A0A]/10 pb-2">
<span>Current Uplink</span>
<span>[ SECURE ]</span>
</div>
<ul className="space-y-3 font-mono text-xs text-[#0A0A0A]">
<li className="flex justify-between items-center"><span className="text-[#5A5A5C]">ASSET LOC</span> <span>VERIFIED</span></li>
<li className="flex justify-between items-center"><span className="text-[#5A5A5C]">EXT. ROUTES</span> <span>42 ACTIVE</span></li>
<li className="flex justify-between items-center"><span className="text-[#5A5A5C]">TIME SAVED</span> <span className="text-[#FF3300]">+214 HRS</span></li>
</ul>
</div>
</div>
</div>
</header>

<div className="border-b border-[#0A0A0A]/10 py-2.5 bg-[#0A0A0A] text-white overflow-hidden relative z-20">
<div className="marquee-container">
<div className="marquee-content font-mono text-xs tracking-widest uppercase gap-12" data-marquee="TKY: CLEARED • LHR: PRIORITY ROUTING • DXB: ASSET SECURED • NYC: ZERO WAIT • PAR: INFILTRATED • SIN: ACCESS GRANTED • MIL: ELEVATED • ">
<span className="flex items-center gap-3">TKY: <span className="text-[#FF3300]">CLEARED</span></span>
<span className="flex items-center gap-3">LHR: <span className="text-[#5A5A5C]">PRIORITY ROUTING</span></span>
<span className="flex items-center gap-3">DXB: <span className="text-[#FF3300]">ASSET SECURED</span></span>
<span className="flex items-center gap-3">NYC: <span className="text-white">ZERO WAIT</span></span>
<span className="flex items-center gap-3">PAR: <span className="text-[#5A5A5C]">INFILTRATED</span></span>
<span className="flex items-center gap-3">SIN: <span className="text-[#FF3300]">ACCESS GRANTED</span></span>
<span className="flex items-center gap-3">MIL: <span className="text-white">ELEVATED</span></span>
</div>
</div>
</div>

<section className="py-24 px-6 lg:px-12 max-w-[90rem] mx-auto border-b border-[#0A0A0A]/10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div>
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-6 flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:danger-triangle-linear"></iconify-icon> The Mass Delusion
                </div>
<h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tighter uppercase mb-6 leading-[0.9] text-[#0A0A0A]">
                    Standard Routing is <br/><span className="text-[#5A5A5C]">Resource Drain.</span>
</h2>
<p className="text-[#5A5A5C] text-sm leading-relaxed max-w-[45ch]">
                    Public access points are designed for volume, not efficiency. Queues, general admissions, and algorithmic mediocrity steal days from your calendar. You are subsidizing the system with your time.
                </p>
</div>
<div className="bg-white border border-[#0A0A0A]/10 p-8 lg:p-12 relative">
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="relative z-10">
<div className="font-mono text-xs text-[#FF3300] uppercase tracking-widest mb-6 flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:shield-check-linear"></iconify-icon> The Oath Reality
                    </div>
<h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tighter uppercase mb-6 leading-[0.9] text-[#0A0A0A]">
                        Absolute <br/> Sovereignty.
                    </h2>
<ul className="space-y-4 font-mono text-xs text-[#0A0A0A] uppercase tracking-wide">
<li className="flex items-center gap-4 border-b border-[#0A0A0A]/5 pb-3">
<span className="w-1.5 h-1.5 bg-[#FF3300]"></span> Zero Queues
                        </li>
<li className="flex items-center gap-4 border-b border-[#0A0A0A]/5 pb-3">
<span className="w-1.5 h-1.5 bg-[#FF3300]"></span> Undisclosed Venues
                        </li>
<li className="flex items-center gap-4">
<span className="w-1.5 h-1.5 bg-[#FF3300]"></span> Immediate ROI on Time
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 lg:px-12 max-w-[90rem] mx-auto relative z-10" id="architecture">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<h2 className="font-display text-5xl lg:text-6xl font-semibold tracking-tighter uppercase max-w-2xl leading-[0.9]">
                System Architecture.
            </h2>
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest pb-2 border-b-2 border-[#0A0A0A] flex items-center gap-2">
                Operational Pillars <span className="text-[#FF3300]">[03]</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 lg:p-10 border border-[#0A0A0A]/10 card-angular group hover:border-[#FF3300]/50 transition-colors relative overflow-hidden">
<div className="text-[#0A0A0A] mb-12 h-12 w-12 border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#FF3300] group-hover:text-white group-hover:border-[#FF3300] transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-semibold tracking-tight mb-4 uppercase text-[#0A0A0A]">Algorithmic Evasion</h3>
<p className="text-[#5A5A5C] text-sm leading-relaxed mb-12">
                    Dynamic routing models bypass tourist density. We deploy predictive analytics to guarantee you move through cities unimpeded, recovering hours of lost bandwidth.
                </p>
<div className="font-mono text-xs border-t border-[#0A0A0A]/10 pt-6 flex justify-between text-[#0A0A0A] items-center">
<span className="text-[#5A5A5C]">MODULE_A</span>
<iconify-icon className="text-xl group-hover:text-[#FF3300] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>

<div className="absolute inset-x-0 h-px bg-[#FF3300]/20 -top-px group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
</div>

<div className="bg-white p-8 lg:p-10 border border-[#0A0A0A]/10 card-angular group hover:border-[#FF3300]/50 transition-colors relative overflow-hidden">
<div className="text-[#0A0A0A] mb-12 h-12 w-12 border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#FF3300] group-hover:text-white group-hover:border-[#FF3300] transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:shield-keyhole-minimalistic-linear"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-semibold tracking-tight mb-4 uppercase text-[#0A0A0A]">Cryptographic Access</h3>
<p className="text-[#5A5A5C] text-sm leading-relaxed mb-12">
                    The highest tiers of culture operate behind closed networks. OATH holds the encryption keys to private reserves, member-only spaces, and elite sanctums globally.
                </p>
<div className="font-mono text-xs border-t border-[#0A0A0A]/10 pt-6 flex justify-between text-[#0A0A0A] items-center">
<span className="text-[#5A5A5C]">MODULE_B</span>
<iconify-icon className="text-xl group-hover:text-[#FF3300] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>

<div className="bg-white p-8 lg:p-10 border border-[#0A0A0A]/10 card-angular group hover:border-[#FF3300]/50 transition-colors relative overflow-hidden">
<div className="text-[#0A0A0A] mb-12 h-12 w-12 border border-[#0A0A0A]/10 flex items-center justify-center group-hover:bg-[#FF3300] group-hover:text-white group-hover:border-[#FF3300] transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:satellite-linear"></iconify-icon>
</div>
<h3 className="font-display text-2xl font-semibold tracking-tight mb-4 uppercase text-[#0A0A0A]">Live Telemetry</h3>
<p className="text-[#5A5A5C] text-sm leading-relaxed mb-12">
                    Conditions shift. Our operators monitor global friction points in real-time, executing audibles before you ever perceive a delay. Total environmental control.
                </p>
<div className="font-mono text-xs border-t border-[#0A0A0A]/10 pt-6 flex justify-between text-[#0A0A0A] items-center">
<span className="text-[#5A5A5C]">MODULE_C</span>
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
<div className="font-mono text-xs text-[#5A5A5C] uppercase tracking-widest mb-4">Command Center</div>
<h2 className="font-display text-4xl lg:text-5xl font-semibold tracking-tighter uppercase text-white">Your Global Terminal.</h2>
</div>

<div className="relative max-w-5xl mx-auto rounded-none border border-[#333] bg-[#0A0A0A] shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden">

<div className="h-10 border-b border-[#333] flex items-center px-4 justify-between bg-[#111]">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
</div>
<div className="font-mono text-[10px] text-[#5A5A5C] tracking-widest">OATH_OS // v.1.4</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 h-auto md:h-[400px]">

<div className="md:col-span-3 border-r border-[#333] p-4 bg-[#0A0A0A] font-mono text-xs text-[#5A5A5C] flex flex-col gap-6">
<div>
<div className="uppercase tracking-widest text-white mb-3">Active Ops</div>
<ul className="space-y-2">
<li className="text-[#FF3300] bg-[#FF3300]/10 px-2 py-1 border-l-2 border-[#FF3300]">OP_TOKYO_NIGHT</li>
<li className="px-2 py-1 hover:text-white cursor-pointer">OP_GENEVA_SEC</li>
<li className="px-2 py-1 hover:text-white cursor-pointer">OP_LONDON_AM</li>
</ul>
</div>
<div className="mt-auto border-t border-[#333] pt-4">
<div className="uppercase tracking-widest mb-2">Metrics</div>
<div className="flex justify-between items-end">
<span>Friction Elim.</span>
<span className="text-white text-sm">98.4%</span>
</div>
</div>
</div>

<div className="md:col-span-9 p-6 bg-[linear-gradient(180deg,#111_0%,#0A0A0A_100%)] relative">
<div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
<div className="flex justify-between items-start mb-8 border-b border-[#333] pb-4 relative z-10">
<div>
<h3 className="font-display text-2xl font-semibold tracking-tight text-white mb-1">Tokyo Infiltration</h3>
<div className="font-mono text-xs text-[#FF3300]">COORDINATES SECURED</div>
</div>
<button className="font-mono text-xs bg-white text-[#0A0A0A] px-4 py-2 uppercase tracking-widest hover:bg-[#FF3300] hover:text-white transition-colors">
                                View Full Brief
                            </button>
</div>
<div className="grid grid-cols-2 gap-4 relative z-10">
<div className="border border-[#333] p-4 bg-[#111]/50 backdrop-blur-sm">
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest mb-2">Primary Asset</div>
<div className="font-sans text-sm text-white mb-2">Underground Culinary Syndicate, Minato.</div>
<div className="w-full bg-[#333] h-1 mt-4">
<div className="bg-[#FF3300] h-full w-[85%]"></div>
</div>
<div className="font-mono text-[10px] text-[#5A5A5C] mt-1 text-right">85% PREPARED</div>
</div>
<div className="border border-[#333] p-4 bg-[#111]/50 backdrop-blur-sm flex items-center justify-center">

<svg height="60" preserveaspectratio="none" viewbox="0 0 200 60" width="100%">
<path d="M0,60 L0,40 Q25,30 50,45 T100,20 T150,35 T200,10 L200,60 Z" fill="rgba(255,51,0,0.1)"></path>
<path d="M0,40 Q25,30 50,45 T100,20 T150,35 T200,10" fill="none" stroke="#FF3300" strokeWidth="2"></path>
</svg>
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
                        Visual Verification
                    </div>
<h2 className="font-display text-5xl lg:text-6xl font-semibold tracking-tighter uppercase mb-6 leading-[0.85] text-[#0A0A0A]">
                        Acquire <br /> The Unseen.
                    </br></h2>
<p className="text-[#5A5A5C] text-sm mb-8 max-w-[40ch] leading-relaxed">
                        We strip away the tourist infrastructure. What remains is raw, unfettered access to locations previously gated by bureaucracy or obscurity.
                    </p>
<a className="inline-flex items-center gap-2 font-mono text-xs text-[#0A0A0A] font-semibold uppercase tracking-widest hover:text-[#FF3300] transition-colors group" href="#terminal">
<span className="border-b border-[#0A0A0A] group-hover:border-[#FF3300] pb-1">Deploy Assets</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="lg:col-span-7 relative h-[600px] w-full">

<div className="absolute inset-y-4 right-0 w-[120%] border border-[#0A0A0A]/10 bg-[#F8F8F7] p-4 lg:p-6 card-angular shadow-lg">
<div className="relative w-full h-full overflow-hidden group">
<img alt="Brutalist architecture" className="w-full h-full object-cover filter grayscale-[30%] contrast-125 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute top-4 left-4 bg-white/90 backdrop-blur font-mono text-[10px] text-[#0A0A0A] px-2 py-1 uppercase tracking-widest border border-[#0A0A0A]/10">
                                LOC: MILAN_HQ
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
<h2 className="font-display text-3xl font-semibold tracking-tighter uppercase text-[#0A0A0A]">After-Action Reports</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="border border-[#0A0A0A]/10 p-8 bg-white hover:shadow-[4px_4px_0px_#0A0A0A] transition-all duration-300">
<iconify-icon className="text-3xl text-[#0A0A0A]/20 mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-[#0A0A0A] text-sm leading-relaxed mb-8 font-medium">
                        "OATH systematically eliminated every logistical hurdle during my European roadshow. I reclaimed an estimated 40 hours of focused mental capital."
                    </p>
<div className="flex items-center gap-4 border-t border-[#0A0A0A]/10 pt-4">
<div className="w-8 h-8 bg-[#0A0A0A] text-white flex items-center justify-center font-mono text-xs">M.</div>
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest">Venture Partner <br/> <span className="text-[#0A0A0A]">London/NYC</span></div>
</div>
</div>

<div className="border border-[#0A0A0A]/10 p-8 bg-white hover:shadow-[4px_4px_0px_#0A0A0A] transition-all duration-300">
<iconify-icon className="text-3xl text-[#0A0A0A]/20 mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-[#0A0A0A] text-sm leading-relaxed mb-8 font-medium">
                        "The level of access is almost unnerving. We bypassed a 3-month waitlist for a private viewing in Tokyo within 12 hours of requesting."
                    </p>
<div className="flex items-center gap-4 border-t border-[#0A0A0A]/10 pt-4">
<div className="w-8 h-8 bg-[#0A0A0A] text-white flex items-center justify-center font-mono text-xs">A.</div>
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest">Founder <br/> <span className="text-[#0A0A0A]">San Francisco</span></div>
</div>
</div>

<div className="border border-[#0A0A0A]/10 p-8 bg-white hover:shadow-[4px_4px_0px_#0A0A0A] transition-all duration-300 md:col-span-2 lg:col-span-1">
<iconify-icon className="text-3xl text-[#0A0A0A]/20 mb-4" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-[#0A0A0A] text-sm leading-relaxed mb-8 font-medium">
                        "Not a luxury concierge. This is a tactical upgrade to how I deploy my time internationally. Flawless execution. No fluff."
                    </p>
<div className="flex items-center gap-4 border-t border-[#0A0A0A]/10 pt-4">
<div className="w-8 h-8 bg-[#0A0A0A] text-white flex items-center justify-center font-mono text-xs">J.</div>
<div className="font-mono text-[10px] text-[#5A5A5C] uppercase tracking-widest">Principal <br/> <span className="text-[#0A0A0A]">Dubai</span></div>
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
                Enrollment Open
            </div>
<h2 className="font-display text-5xl lg:text-7xl font-semibold tracking-tighter uppercase mb-6 leading-[0.9]">
                Stop Waiting. <br />
<span className="text-[#FF3300]">Command Access.</span>
</br></h2>
<p className="text-[#5A5A5C] text-sm md:text-base mb-12 leading-relaxed max-w-[40ch] mx-auto">
                Membership is restricted. Submit your credentials to initiate the vetting process. Ensure data accuracy.
            </p>
<form className="max-w-lg mx-auto flex flex-col items-center">
<div className="w-full relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-[#FF3300] to-[#0A0A0A] opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></div>
<div className="relative flex flex-col sm:flex-row w-full bg-[#111] border border-[#333]">
<input className="bg-transparent px-6 py-5 text-sm font-mono focus:outline-none w-full text-white placeholder:text-[#5A5A5C] uppercase transition-all rounded-none" placeholder="ENTER UPLINK (EMAIL)" required="" type="email"/>
<button className="bg-white text-[#0A0A0A] px-8 py-5 text-sm font-semibold uppercase tracking-widest hover:bg-[#FF3300] hover:text-white transition-all duration-300 sm:w-auto whitespace-nowrap rounded-none flex items-center justify-center gap-2 btn-angular border-l border-[#333] sm:border-l-0" type="submit">
                            Transmit
                            <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
</div>
<label className="flex items-start gap-3 mt-8 cursor-pointer group w-full justify-center">
<div className="relative w-4 h-4 border border-[#333] bg-[#111] group-hover:border-[#FF3300] transition-colors flex items-center justify-center mt-0.5">
<input className="peer appearance-none absolute inset-0 cursor-pointer" required="" type="checkbox" />
<iconify-icon className="text-[#FF3300] opacity-0 peer-checked:opacity-100 transition-opacity text-xs absolute" icon="solar:check-read-linear"></iconify-icon>
</input></div>
<span className="font-mono text-[10px] text-[#5A5A5C] text-left uppercase tracking-widest max-w-[30ch]">I verify my intent to utilize aggressive routing protocols.</span>
</label>
</form>
</div>
</section>

<footer className="bg-[#0A0A0A] border-t border-[#1A1A1A] py-12 px-6 relative z-10">
<div className="max-w-[90rem] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-4">
<svg className="text-white" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12L12 2L22 12L12 22L2 12Z" stroke="currentColor" strokeLinejoin="miter" strokeWidth="2"></path>
<path d="M7 12H17" stroke="currentColor" strokeWidth="2"></path>
</svg>
<div className="text-xl font-display font-semibold tracking-tighter text-white uppercase leading-none mt-1">OATH</div>
</div>
<div className="font-mono text-[10px] text-[#5A5A5C] flex flex-wrap justify-center gap-8 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Manifesto</a>
<a className="hover:text-white transition-colors" href="#">Encryption</a>
<a className="hover:text-white transition-colors" href="#">Status</a>
</div>
<div className="font-mono text-[10px] text-[#5A5A5C] flex items-center gap-2 uppercase tracking-widest">
                ©2024 SYSTEM ACTIVE
            </div>
</div>
</footer>



    </>
  );
}
