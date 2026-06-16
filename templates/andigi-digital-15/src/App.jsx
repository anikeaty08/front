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
        const spacing = 50; 
        
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
                            baseAlpha: Math.random() * 0.15 + 0.05, 
                            alpha: 0, 
                            targetAlpha: Math.random() * 0.15 + 0.05, 
                            size: Math.random() > 0.9 ? 1.5 : 0.8, 
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
                p1.alpha += (p1.targetAlpha - p1.alpha) * 0.05; 
                
                if(Math.abs(p1.alpha - p1.targetAlpha) < 0.01) { 
                    p1.targetAlpha = Math.random() > 0.95 ? 0.5 : p1.baseAlpha; 
                } 
                
                ctx.fillStyle = p1.isNode ? `rgba(255, 255, 255, ${p1.alpha * 2})` : `rgba(200, 200, 200, ${p1.alpha})`; 
                ctx.beginPath(); 
                ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2); 
                ctx.fill(); 
                
                for(let j = i + 1; j < particles.length; j++) { 
                    let p2 = particles[j]; 
                    let dx = p1.x - p2.x; 
                    let dy = p1.y - p2.y; 
                    let dist = Math.sqrt(dx*dx + dy*dy); 
                    
                    if(dist < spacing * 1.5) { 
                        ctx.strokeStyle = `rgba(255, 255, 255, ${Math.min(p1.alpha, p2.alpha) * 0.2})`; 
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
      
<div className="pointer-events-none fixed z-[100] opacity-20 mix-blend-overlay top-0 right-0 bottom-0 left-0"></div>
<div className="pointer-events-none fixed w-px z-[90] lg:ml-12 bg-white/5 ml-6 top-0 bottom-0 left-0"></div>
<div className="pointer-events-none fixed w-px z-[90] lg:mr-12 bg-white/5 mr-6 top-0 right-0 bottom-0"></div>
<nav className="fixed z-50 bg-[#050505]/70 w-full border-white/5 border-b top-0 backdrop-blur-xl">
<div className="lg:px-12 flex h-16 max-w-[90rem] mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-3 text-white group" href="#">
<span className="text-xl font-display font-medium tracking-tighter uppercase leading-none mt-1">ANDIGI</span>
</a>
<div className="hidden lg:flex space-x-10 text-xs text-[#888] font-mono tracking-widest uppercase">
<a className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-white hover:after:w-full after:transition-all" href="#services">Services</a>
<a className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-white hover:after:w-full after:transition-all" href="#approach">Approach</a>
<a className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-white hover:after:w-full after:transition-all" href="#simulator">Scope</a>
<a className="hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-px after:w-0 after:bg-white hover:after:w-full after:transition-all" href="#work">Work</a>
</div>
<a className="btn-angular relative group overflow-hidden bg-white text-black text-xs font-mono px-6 py-2.5 uppercase tracking-widest flex items-center gap-2 border border-white" href="#contact">
<span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-2"> 
                    Start Project 
                    <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</span>
<div className="hover-layer absolute inset-0 bg-[#050505] translate-y-[101%] z-0"></div>
</a>
</div>
</nav>
<header className="lg:pt-48 lg:pb-40 lg:px-12 min-h-[90vh] flex w-full max-w-[90rem] border-white/5 border-b mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative items-center">
<canvas className="z-0 opacity-50 w-full h-full absolute top-0 right-0 bottom-0 left-0" height="1019" id="hero-gl" width="1436"></canvas>
<div className="z-0 bg-gradient-to-b from-transparent via-[#050505]/80 to-[#050505] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 z-10 w-full relative">
<div className="lg:col-span-8 z-0 relative">
<div className="inline-flex flex-wrap items-center gap-4 mb-8 font-mono text-xs text-[#888] uppercase tracking-widest bg-white/5 backdrop-blur-md px-3 py-1.5 border border-white/10">
<span className="text-white flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-white relative"><span className="absolute inset-0 bg-white animate-ping opacity-75"></span></span> 
                        AGENCY ACTIVE 
                    </span>
<div className="h-3 w-px bg-white/20"></div>
<span>Est. 2024</span>
<div className="h-3 w-px bg-white/20"></div>
<span>Global Remote</span>
</div>
<h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.85] mb-8 uppercase text-white"> 
                    Digital <br/>
<span className="text-transparent text-stroke-light" style={{WebkitTextStroke: '1px rgba(255, 255, 255, 0.8)', color: 'transparent'}}>Products,</span> <br/> 
                    Engineered. 
                </h1>
<p className="text-[#a1a1aa] font-normal text-base md:text-xl max-w-[50ch] leading-relaxed mb-10 border-l-2 border-white/20 pl-6 py-1"> 
                    ANDIGI is a premium digital agency architecting scalable web applications, immersive brand experiences, and robust digital infrastructures for forward-thinking companies. 
                </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
<a className="btn-angular relative group overflow-hidden bg-white text-black px-8 py-5 flex items-center gap-4" href="#contact">
<span className="relative z-10 font-mono text-xs font-medium uppercase tracking-widest group-hover:text-white transition-colors duration-300"> 
                            Initiate Discovery 
                        </span>
<iconify-icon className="relative z-10 text-xl group-hover:translate-x-2 transition-transform duration-300" icon="solar:round-arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="hover-layer absolute inset-0 bg-[#111] translate-y-[101%] z-0 border border-white"></div>
</a>
<a className="font-mono text-xs text-[#888] uppercase tracking-widest hover:text-white transition-colors border-b border-transparent hover:border-white pb-1" href="#work"> 
                        Explore Case Studies 
                    </a>
</div>
<div className="mt-12 flex flex-wrap gap-4 font-mono text-xs text-[#555] uppercase tracking-widest">
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:code-square-linear"></iconify-icon> Next.js / React</span>
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:pen-new-square-linear"></iconify-icon> UI/UX Systems</span>
<span className="flex items-center gap-2"><iconify-icon className="text-white" icon="solar:server-square-linear"></iconify-icon> Cloud Native</span>
</div>
</div>
<div className="lg:col-span-4 hidden lg:flex flex-col justify-end pb-8">
<div className="bg-[#0a0a0a] border border-white/10 p-6 card-angular shadow-2xl relative overflow-hidden group">
<div className="absolute top-0 right-0 w-16 h-16 bg-[#111] -mr-8 -mt-8 rotate-45 border-b border-white/10 group-hover:bg-white transition-colors duration-500"></div>
<div className="font-mono text-xs text-[#888] uppercase tracking-widest mb-4 flex justify-between border-b border-white/10 pb-2">
<span>System Status</span>
<span className="text-white">[ ONLINE ]</span>
</div>
<ul className="space-y-3 font-mono text-xs text-white uppercase">
<li className="flex justify-between items-center"><span className="text-[#555]">FRONTEND ARCHITECTURE</span> <span>OPTIMIZED</span></li>
<li className="flex justify-between items-center"><span className="text-[#555]">BACKEND SERVICES</span> <span>SCALING</span></li>
<li className="flex justify-between items-center"><span className="text-[#555]">DESIGN SYSTEM</span> <span>DEPLOYED</span></li>
<li className="flex justify-between items-center"><span className="text-[#555]">NEW PROJECTS</span> <span className="text-white animate-pulse">ACCEPTING</span></li>
</ul>
</div>
</div>
</div>
</header>
<div className="border-b border-white/5 py-2.5 bg-[#0a0a0a] text-[#888] overflow-hidden relative z-20">
<div className="marquee-container">
<div className="marquee-content font-mono text-xs tracking-widest uppercase gap-12" data-marquee="WEB APPLICATION DEVELOPMENT • USER INTERFACE DESIGN • BRAND STRATEGY • E-COMMERCE PLATFORMS • SYSTEM ARCHITECTURE • PERFORMANCE OPTIMIZATION • API INTEGRATION • ">
<span className="flex items-center gap-3 text-white">WEB APPLICATION DEVELOPMENT <span className="text-[#555]">•</span></span>
<span className="flex items-center gap-3">USER INTERFACE DESIGN <span className="text-[#555]">•</span></span>
<span className="flex items-center gap-3">BRAND STRATEGY <span className="text-[#555]">•</span></span>
<span className="flex items-center gap-3 text-white">E-COMMERCE PLATFORMS <span className="text-[#555]">•</span></span>
<span className="flex items-center gap-3">SYSTEM ARCHITECTURE <span className="text-[#555]">•</span></span>
<span className="flex items-center gap-3">PERFORMANCE OPTIMIZATION <span className="text-[#555]">•</span></span>
<span className="flex items-center gap-3">API INTEGRATION <span className="text-[#555]">•</span></span>
</div>
</div>
</div>
<section className="lg:px-12 max-w-[90rem] border-white/5 border-b mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div>
<div className="font-mono text-xs text-[#888] uppercase tracking-widest mb-6 flex items-center gap-3">
<iconify-icon className="text-lg text-white" icon="solar:minimize-square-3-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 
                    The Challenge 
                </div>
<h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tight uppercase mb-6 leading-[0.9] text-white"> 
                    Fragmented visions <br/><span className="text-[#555]">create disjointed</span><br/> user experiences. </h2>
<p className="text-[#a1a1aa] text-sm leading-relaxed max-w-[45ch]"> 
                    Design, engineering, and strategy are often siloed. We bridge the gap between creative ambition and technical reality, delivering cohesive products that perform flawlessly at scale. 
                </p>
</div>
<div className="bg-[#0a0a0a] border border-white/10 p-8 lg:p-12 relative overflow-hidden">
<div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10">
<div className="font-mono text-xs text-white uppercase tracking-widest mb-6 flex items-center gap-3">
<iconify-icon className="text-lg" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon> 
                        Our Approach 
                    </div>
<ul className="space-y-6 font-mono text-xs text-white uppercase tracking-wide">
<li className="border-b border-white/5 pb-6">
<span className="text-white mb-2 block font-medium">01. Unified Methodology</span>
<span className="text-[#888] normal-case tracking-normal leading-relaxed block">We treat design and code as a single continuum, ensuring visual fidelity translates perfectly into interactive performance.</span>
</li>
<li className="border-b border-white/5 pb-6">
<span className="text-white mb-2 block font-medium">02. Modular Architecture</span>
<span className="text-[#888] normal-case tracking-normal leading-relaxed block">Building with composable, modern tech stacks allows for rapid iteration, lower maintenance costs, and infinite scalability.</span>
</li>
<li>
<span className="text-white mb-2 block font-medium">03. Metric-Driven Polish</span>
<span className="text-[#888] normal-case tracking-normal leading-relaxed block">Aesthetics matter, but conversion and speed rule. Every interaction is optimized for the highest standard of user engagement.</span>
</li>
</ul>
</div>
</div>
</div>
</section>
<section className="lg:px-12 max-w-[90rem] z-10 border-white/5 border-b mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative" id="services">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<h2 className="font-display text-5xl lg:text-6xl font-medium tracking-tight uppercase max-w-2xl leading-[0.9]"> 
                Core Capabilities. 
            </h2>
<div className="font-mono text-xs text-[#888] uppercase tracking-widest pb-2 border-b-2 border-white/20 flex items-center gap-2"> 
                Disciplines <span className="text-white">[03]</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="bg-[#0a0a0a] p-8 lg:p-10 border border-white/10 card-angular group hover:border-white/40 transition-colors relative overflow-hidden">
<div className="text-white mb-12 h-12 w-12 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:pen-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium tracking-tight mb-4 uppercase text-white">Product Design</h3>
<p className="text-[#888] text-sm leading-relaxed mb-12"> 
                    Crafting intuitive interfaces and comprehensive design systems. We focus on user journeys, wireframing, high-fidelity prototyping, and interaction design.
                </p>
<div className="font-mono text-xs border-t border-white/10 pt-6 flex justify-between text-white items-center">
<span className="text-[#555] uppercase group-hover:text-white transition-colors">View Design Process</span>
<iconify-icon className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="absolute inset-x-0 h-px bg-white/20 -top-px opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
</div>
<div className="bg-[#0a0a0a] p-8 lg:p-10 border border-white/10 card-angular group hover:border-white/40 transition-colors relative overflow-hidden">
<div className="text-white mb-12 h-12 w-12 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:code-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium tracking-tight mb-4 uppercase text-white">Engineering</h3>
<p className="text-[#888] text-sm leading-relaxed mb-12"> 
                    Building robust frontend applications and scalable backend APIs. Specializing in React, Next.js, Node, and headless CMS architectures.
                </p>
<div className="font-mono text-xs border-t border-white/10 pt-6 flex justify-between text-white items-center">
<span className="text-[#555] uppercase group-hover:text-white transition-colors">Review Tech Stack</span>
<iconify-icon className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
<div className="bg-[#0a0a0a] p-8 lg:p-10 border border-white/10 card-angular group hover:border-white/40 transition-colors relative overflow-hidden">
<div className="text-white mb-12 h-12 w-12 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
<iconify-icon className="text-2xl" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="font-display text-2xl font-medium tracking-tight mb-4 uppercase text-white">Digital Strategy</h3>
<p className="text-[#888] text-sm leading-relaxed mb-12"> 
                    Aligning business objectives with technical execution. From product roadmapping and infrastructure planning to performance auditing.
                </p>
<div className="font-mono text-xs border-t border-white/10 pt-6 flex justify-between text-white items-center">
<span className="text-[#555] uppercase group-hover:text-white transition-colors">Read Case Studies</span>
<iconify-icon className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</section>
<section className="py-24 bg-[#0a0a0a] border-b border-white/5 relative overflow-hidden" id="simulator">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="lg:px-12 max-w-[90rem] mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16 relative z-10">
<div className="font-mono text-xs text-[#888] uppercase tracking-widest mb-4">Interactive Tool</div>
<h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tight uppercase text-white mb-4">Project Scope Simulator.</h2>
<p className="text-[#888] text-sm max-w-2xl mx-auto">A high-level framework to estimate complexity and technical requirements for your next digital product build.</p>
</div>
<div className="relative max-w-5xl mx-auto rounded-none border border-[#222] bg-[#050505] shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
<div className="h-10 border-b border-[#222] flex items-center px-4 justify-between bg-[#0a0a0a]">
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#333]"></div>
</div>
<div className="font-mono text-xs text-[#555] tracking-widest uppercase">ANDIGI // Estimator_v.2.0</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 h-auto md:h-[400px]">
<div className="md:col-span-4 border-r border-[#222] p-6 bg-[#050505] font-mono text-xs text-[#888] flex flex-col gap-8">
<div className="">
<div className="uppercase tracking-widest text-white mb-4 flex items-center gap-2"><iconify-icon icon="solar:settings-linear"></iconify-icon> Configuration</div>
<div className="space-y-6">
<div className="">
<div className="flex justify-between mb-2">
<label className="text-[10px]">PLATFORM TYPE</label>
<span className="text-white">WEB APP</span>
</div>
<div className="h-1 w-full bg-[#222] relative cursor-pointer">
<div className="absolute inset-y-0 left-0 bg-white w-1/2"></div>
<div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-black rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<label className="text-[10px]">DESIGN SYSTEM</label>
<span className="text-white">CUSTOM</span>
</div>
<div className="h-1 w-full bg-[#222] relative cursor-pointer">
<div className="absolute inset-y-0 left-0 bg-white w-3/4"></div>
<div className="absolute top-1/2 left-3/4 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-black rounded-full"></div>
</div>
</div>
<div className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 border border-[#555] group-hover:border-white flex items-center justify-center bg-white">
<iconify-icon className="text-black text-[10px]" icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-[10px] uppercase text-white">Include CMS Integration</span>
</div>
</div>
</div>
</div>
<div className="md:col-span-8 lg:p-10 flex flex-col pt-6 pr-6 pb-6 pl-6 relative justify-center">
<div className="absolute inset-0 bg-grid opacity-5 pointer-events-none"></div>
<div className="relative z-10 flex flex-col h-full justify-between">
<div className="flex justify-between items-start mb-8 border-b border-[#222] pb-6">
<div>
<h3 className="font-display text-2xl font-medium tracking-tight text-white mb-2">Architecture Output</h3>
<div className="font-mono text-xs text-[#555] uppercase">Live Calculation</div>
</div>
<div className="text-right">
<div className="font-mono text-[10px] text-[#888] uppercase mb-1">Est. Timeline</div>
<div className="font-display text-xl text-white">8-12 Weeks</div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="border border-[#222] p-5 bg-[#0a0a0a]/50 backdrop-blur-sm">
<div className="font-mono text-[10px] text-[#888] uppercase tracking-widest mb-3 border-b border-[#222] pb-2">Recommended Stack</div>
<ul className="space-y-2 font-mono text-xs text-white">
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white"></span> Next.js 14</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white"></span> Tailwind CSS</li>
<li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white"></span> Supabase / Postgres</li>
</ul>
</div>
<div className="border border-[#222] p-5 bg-[#0a0a0a]/50 backdrop-blur-sm flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-white hover:text-black transition-colors duration-300">
<iconify-icon className="text-2xl mb-3 text-white group-hover:text-black" icon="solar:document-add-linear"></iconify-icon>
<div className="font-mono text-xs uppercase tracking-widest font-medium">Request Detailed Proposal</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-32 relative overflow-hidden bg-[#050505] border-b border-white/5">
<div className="max-w-[90rem] mx-auto px-6 lg:px-12">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-5 relative z-10">
<div className="font-mono text-xs text-white border border-white/20 inline-block px-3 py-1 mb-8 uppercase tracking-widest bg-white/5 backdrop-blur-sm"> 
                        Built For Leverage 
                    </div>
<h2 className="font-display text-5xl lg:text-6xl font-medium tracking-tight uppercase mb-6 leading-[0.85] text-white"> 
                        Why top teams <br/> choose us. 
                    </h2>
<p className="text-[#a1a1aa] text-sm mb-8 max-w-[40ch] leading-relaxed"> 
                        We don't just write code or push pixels. We partner with product teams to build scalable foundations that accelerate time-to-market and reduce technical debt.
                    </p>
<a className="inline-flex items-center gap-2 font-mono text-xs text-white font-medium uppercase tracking-widest hover:text-[#888] transition-colors group" href="#contact">
<span className="border-b border-white group-hover:border-[#888] pb-1 transition-colors">Start a Conversation</span>
<iconify-icon className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
<div className="lg:col-span-7 relative w-full h-auto">
<div className="border border-white/10 bg-[#0a0a0a] p-6 lg:p-10 card-angular shadow-2xl grid grid-cols-1 sm:grid-cols-2 gap-6 relative group">
<div className="absolute top-0 right-0 w-12 h-12 bg-[#111] -mr-6 -mt-6 rotate-45 border-b border-white/10 group-hover:bg-white transition-colors duration-500 z-10"></div>
<div className="border border-white/10 bg-[#050505] p-6 hover:border-white/30 transition-colors">
<iconify-icon className="text-xl mb-4 text-white" icon="solar:bolt-linear"></iconify-icon>
<h4 className="font-display text-lg font-medium text-white mb-2 uppercase">Velocity</h4>
<p className="font-sans text-xs text-[#888] leading-relaxed">Rapid prototyping and agile sprints ensure your product reaches users faster without compromising quality.</p>
</div>
<div className="border border-white/10 bg-[#050505] p-6 hover:border-white/30 transition-colors">
<iconify-icon className="text-xl mb-4 text-white" icon="solar:shield-check-linear"></iconify-icon>
<h4 className="font-display text-lg font-medium text-white mb-2 uppercase">Reliability</h4>
<p className="font-sans text-xs text-[#888] leading-relaxed">Enterprise-grade architecture designed to handle traffic spikes and complex data models seamlessly.</p>
</div>
<div className="border border-white/10 bg-[#050505] p-6 hover:border-white/30 transition-colors">
<iconify-icon className="text-xl mb-4 text-white" icon="solar:pallete-2-linear"></iconify-icon>
<h4 className="font-display text-lg font-medium text-white mb-2 uppercase">Aesthetics</h4>
<p className="font-sans text-xs text-[#888] leading-relaxed">Pixel-perfect implementation of design systems that elevate your brand perception and user trust.</p>
</div>
<div className="border border-white/20 bg-white p-6 text-black hover:bg-gray-100 transition-colors">
<iconify-icon className="text-xl mb-4" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<h4 className="font-display text-lg font-medium mb-2 uppercase">Partnership</h4>
<p className="font-sans text-xs text-black/70 leading-relaxed">We integrate seamlessly with your internal teams, acting as an extension of your own capabilities.</p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="bg-[#0a0a0a] border-white/5 border-b pt-24 pb-24" id="work">
<div className="lg:px-12 max-w-[90rem] mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 justify-between">
<div className="">
<div className="uppercase text-xs text-[#888] tracking-widest font-mono mb-4">Selected Work</div>
<h2 className="font-display text-4xl lg:text-5xl font-medium tracking-tight uppercase text-white">Recent Deployments</h2>
</div>
<a className="font-mono text-xs text-white uppercase tracking-widest pb-1 border-b border-white hover:text-[#888] hover:border-[#888] transition-colors" href="#"> 
                    View Archive 
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/10">
<a className="block p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-[#111] transition-colors group" href="#">
<div className="font-mono text-[10px] text-[#555] uppercase tracking-widest mb-4">Fintech • Web App</div>
<h3 className="font-display text-xl font-medium text-white leading-snug mb-4 group-hover:underline decoration-white/30 underline-offset-4">Building a low-latency trading dashboard for retail investors.</h3>
<p className="text-xs text-[#888] mb-8 leading-relaxed">Next.js, WebSockets, Tailwind, Framer Motion.</p>
<div className="flex items-center gap-2 mt-auto font-mono text-[10px] text-white uppercase tracking-widest">
<span className="w-4 h-px bg-white group-hover:w-8 transition-all"></span> Read Case Study 
                    </div>
</a>
<a className="block p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-[#111] transition-colors group" href="#">
<div className="font-mono text-[10px] text-[#555] uppercase tracking-widest mb-4">SaaS • Design System</div>
<h3 className="font-display text-xl font-medium text-white leading-snug mb-4 group-hover:underline decoration-white/30 underline-offset-4">Unifying the user experience across a suite of B2B tools.</h3>
<p className="text-xs text-[#888] mb-8 leading-relaxed">Figma, React Aria, Storybook, Radix UI.</p>
<div className="flex items-center gap-2 mt-auto font-mono text-[10px] text-white uppercase tracking-widest">
<span className="w-4 h-px bg-white group-hover:w-8 transition-all"></span> Read Case Study 
                    </div>
</a>
<a className="block p-8 hover:bg-[#111] transition-colors group" href="#">
<div className="font-mono text-[10px] text-[#555] uppercase tracking-widest mb-4">E-Commerce • Headless</div>
<h3 className="font-display text-xl font-medium text-white leading-snug mb-4 group-hover:underline decoration-white/30 underline-offset-4">Architecting a composable commerce platform for scale.</h3>
<p className="text-xs text-[#888] mb-8 leading-relaxed">Shopify Hydrogen, Sanity CMS, Vercel.</p>
<div className="flex items-center gap-2 mt-auto font-mono text-[10px] text-white uppercase tracking-widest">
<span className="w-4 h-px bg-white group-hover:w-8 transition-all"></span> Read Case Study 
                    </div>
</a>
</div>
</div>
</section>
<section className="overflow-hidden text-white bg-[#050505] border-white/5 border-t pt-32 pb-32 relative" id="contact">
<div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05)_0%,_transparent_50%)] pointer-events-none z-0"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-3 font-mono text-xs text-[#888] mb-8 uppercase tracking-widest border border-[#222] px-4 py-2 bg-[#0a0a0a]">
<span className="w-2 h-2 bg-white animate-[pulse-glow_2s_ease-in-out_infinite]"></span> Availability: Q4 2024 
            </div>
<h2 className="lg:text-6xl uppercase leading-[0.9] text-5xl font-medium tracking-tight font-display mb-6"> 
                Ready to build <br/>
<span className="text-[#888]">something great?</span>
</h2>
<p className="text-[#a1a1aa] text-sm md:text-base mb-12 leading-relaxed max-w-[50ch] mx-auto"> 
                Whether you need a full platform build, a design system overhaul, or strategic technical direction, our team is ready to execute. 
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-6">
<button className="bg-white text-black px-10 py-5 text-sm font-medium uppercase tracking-widest hover:bg-transparent hover:text-white transition-all duration-300 btn-angular flex items-center gap-3 border border-white"> 
                    Start the Conversation 
                    <iconify-icon className="text-lg" icon="solar:arrow-right-up-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
<p className="font-mono text-[10px] text-[#555] uppercase tracking-widest mt-16 max-w-xl mx-auto border-t border-[#222] pt-6"> 
                Typical engagement sizes start at $20k. We selectively partner with companies where we can deliver outsized impact and technical leverage.
            </p>
</div>
</section>
<footer className="z-10 bg-[#050505] border-[#222] border-t pt-12 pr-12 pb-12 pl-12 relative">
<div className="flex flex-col md:flex-row gap-8 max-w-[90rem] mr-auto ml-auto gap-x-8 gap-y-8 items-center justify-between">
<div className="flex flex-col md:items-start gap-x-2 gap-y-2 items-center">
<div className="flex items-center gap-4">
<div className="text-xl font-display font-medium tracking-tighter text-white uppercase leading-none">ANDIGI</div>
</div>
<div className="font-mono text-[10px] text-[#555] uppercase tracking-widest">Digital engineering &amp; design.</div>
</div>
<div className="font-mono text-xs text-[#888] flex flex-wrap justify-center gap-6 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Services</a>
<a className="hover:text-white transition-colors" href="#">Process</a>
<a className="hover:text-white transition-colors" href="#">Work</a>
<a className="hover:text-white transition-colors" href="#">Journal</a>
<a className="text-white hover:text-[#888] transition-colors" href="#">Contact</a>
</div>
<div className="font-mono text-[10px] text-[#555] flex items-center gap-2 uppercase tracking-widest"> 
                © 2024 ANDIGI LLC 
            </div>
</div>
</footer>


    </>
  );
}
